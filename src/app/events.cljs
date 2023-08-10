(ns app.events
  (:refer-clojure :exclude [time])
  (:require
   [clojure.edn :as edn]
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [app.util :as u]))

(defn- animation-interval
  "https://gist.github.com/jakearchibald/cb03f15670817001b1157e62a076fe95"
  [ms signal f]
  (let [start (.-currentTime js/document.timeline)]
    (letfn [(frame [time]
              (when-not (.-aborted signal)
                (f time)
                (schedule-frame time)))
            (schedule-frame [time]
              (let [elapsed (- time start)
                    rounded-elapsed (* (js/Math.round (/ elapsed ms)) ms)
                    target-next (+ start rounded-elapsed ms)
                    delay (- target-next (js/performance.now))]
                (js/setTimeout #(js/requestAnimationFrame frame) delay)))]
      (schedule-frame start))))

(def time (reagent/atom 0))

(re-frame/reg-fx
 :update-time
 (fn [interval-ms]
   (animation-interval
    interval-ms
    (.-signal (js/AbortController.))
    (fn [_]
      (reset! time (.getTime (js/Date.)))))))

(re-frame/reg-cofx
 :time
 (fn [coeffects _]
   (assoc coeffects :time (.getTime (js/Date.)))))

(re-frame/reg-cofx
 :app-version
 (fn [coeffects _]
   (assoc coeffects
          :app-version
          (or (some-> "meta[name=app-version]"
                      js/document.querySelector
                      (.getAttribute "content"))
              "unknown"))))

(re-frame/reg-cofx
 :settings
 (fn [coeffects _]
   (assoc coeffects
          :settings
          (or
           (edn/read-string
            (js/window.localStorage.getItem "nenadalm.life-counter/settings"))
           {}))))

(re-frame/reg-fx
 :settings
 (fn [settings]
   (js/window.localStorage.setItem "nenadalm.life-counter/settings" (pr-str settings))))

(re-frame/reg-cofx
 :profiles
 (fn [coeffects _]
   (assoc coeffects
          :profiles
          (or
           (edn/read-string
            (js/window.localStorage.getItem "nenadalm.life-counter/profiles"))
           {}))))

(re-frame/reg-fx
 :profiles
 (fn [profiles]
   (js/window.localStorage.setItem "nenadalm.life-counter/profiles" (pr-str profiles))))

(def ^:private default-profiles
  (u/index-by
   :profile
   [{:profile "Cribbage"
     :hp 0
     :end-hp 121
     :type :up}
    {:profile "Star Realms"
     :hp 50
     :end-hp 0
     :type :down}]))

(def ^:private default-settings
  {:merge-events-threshold 1000
   :players [{:id "0" :color "#cf6666" :text-color "rgba(0, 0, 0, 0.87)"}
             {:id "1" :color "#3797fa" :text-color "rgba(0, 0, 0, 0.87)"}]
   :profile "Star Realms"})

(defn- create-game [settings profiles]
  (let [profile (profiles (:profile settings))]
    {:players (reduce
               (fn [res player]
                 (assoc
                  res
                  (:id player)
                  (assoc player
                         :initial-amount (:hp profile)
                         :amount (:hp profile))))
               {}
               (:players settings))
     :change-type :by-1 ;; :by-1 | :by-n
     :events []}))

(defn- reset-game [db]
  (assoc db
         :game (create-game (:settings db) (:profiles db))
         :page :game))

(re-frame/reg-event-fx
 ::init
 [(re-frame/inject-cofx :app-version)
  (re-frame/inject-cofx :settings)
  (re-frame/inject-cofx :profiles)]
 (fn [{:keys [app-version settings profiles]} _]
   (let [db (reset-game {:settings (merge default-settings settings)
                         :profiles (if (seq profiles) profiles default-profiles)
                         :app-info {:version app-version}})]
     (cond-> {:db db
              :update-time 1000}
       (not= profiles (:profiles db)) (assoc :profiles (:profiles db))))))

(re-frame/reg-event-db
 ::reset
 (fn [db _]
   (reset-game db)))

(re-frame/reg-event-fx
 ::save-settings
 (fn [{:keys [db]} [_ settings]]
   {:db (-> db
            (update :settings merge settings)
            reset-game)
    :settings settings}))

(re-frame/reg-event-fx
 ::save-profile
 (fn [{:keys [db]} [_ profile]]
   (let [db (-> db
                (update :profiles assoc (:profile profile) profile)
                (assoc :page :menu))]
     {:db db
      :profiles (:profiles db)})))

(re-frame/reg-event-fx
 ::delete-profile
 (fn [{:keys [db]} [_ profile]]
   (let [db (-> db
                (update :profiles dissoc profile))]
     {:db db
      :profiles (:profiles db)})))

(re-frame/reg-event-fx
 ::increase-amount
 [(re-frame/inject-cofx :time)]
 (fn [{:keys [db time]} [_ id by-n]]
   (let [new-amount (+ (get-in db [:game :players id :amount] 0) by-n)]
     {:db (cond-> db
            (not (== 0 by-n)) (-> (assoc-in [:game :players id :amount] new-amount)
                                  (update-in [:game :events] conj {:time time :amount by-n :player id :new-amount new-amount}))
            :always (dissoc :action))})))

(re-frame/reg-event-fx
 ::decrease-amount
 [(re-frame/inject-cofx :time)]
 (fn [{:keys [db time]} [_ id by-n]]
   (let [new-amount (- (get-in db [:game :players id :amount] 0) by-n)]
     {:db (cond-> db
            (not (== 0 by-n)) (-> (assoc-in [:game :players id :amount] new-amount)
                                  (update-in [:game :events] conj {:time time :amount (- by-n) :player id :new-amount new-amount}))
            :always (dissoc :action))})))

(re-frame/reg-event-db
 ::open-page
 (fn [db [_ page]]
   (assoc db :page page)))

(re-frame/reg-event-db
 ::change-type
 (fn [db _]
   (update-in db [:game :change-type] (fn [type]
                                        (if (= type :by-1)
                                          :by-n
                                          :by-1)))))
