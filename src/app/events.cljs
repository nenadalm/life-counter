(ns app.events
  (:refer-clojure :exclude [time])
  (:require
   [clojure.edn :as edn]
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [app.util :as u]
   [nenadalm.clojure-utils.cljs :as cljs-utils]))

(def ^:private rotations [0 90 180 270])

(def ^:private next-rotation
  (reduce
   (fn [acc [k v]] (assoc acc k v))
   {}
   (conj
    (partition 2 1 rotations)
    [(peek rotations) (first rotations)]
    [nil 90])))

(defn rotate-player [player]
  (update player :rotate next-rotation))

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

(defn- get-time []
  (.getTime (js/Date.)))

(def time (reagent/atom (get-time)))

(re-frame/reg-fx
 :update-time
 (fn [interval-ms]
   (animation-interval
    interval-ms
    (.-signal (js/AbortController.))
    (fn [_]
      (reset! time (get-time))))))

(re-frame/reg-cofx
 :time
 (fn [coeffects _]
   (assoc coeffects :time (.getTime (js/Date.)))))

(re-frame/reg-cofx
 :app-version
 (fn [coeffects _]
   (assoc coeffects :app-version (cljs-utils/app-version))))

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

(def player-templates
  [{:id "0" :color "#3797fa" :text-color "rgba(0, 0, 0, 0.87)" :medium-text-color "rgba(0, 0, 0, 0.60)"}
   {:id "1" :color "#cf6666" :text-color "rgba(0, 0, 0, 0.87)" :medium-text-color "rgba(0, 0, 0, 0.60)"}
   {:id "2" :color "#faea37" :text-color "rgba(0, 0, 0, 0.87)" :medium-text-color "rgba(0, 0, 0, 0.60)"}
   {:id "3" :color "#37fa91" :text-color "rgba(0, 0, 0, 0.87)" :medium-text-color "rgba(0, 0, 0, 0.60)"}
   {:id "4" :color "#fab737" :text-color "rgba(0, 0, 0, 0.87)" :medium-text-color "rgba(0, 0, 0, 0.60)"}
   {:id "5" :color "#fa37dc" :text-color "rgba(0, 0, 0, 0.87)" :medium-text-color "rgba(0, 0, 0, 0.60)"}])

(def max-player-count (count player-templates))

(defn update-default-rotations [layout]
  (let [players-cnt-per-group (mapv count layout)
        groups-cnt (count players-cnt-per-group)]
    (if (and (not= 2 groups-cnt) (every? #(= 1 %) players-cnt-per-group))
      (mapv (fn [players] (mapv (fn [player] (dissoc player :rotate)) players)) layout)
      (as-> layout $
        (update $ 0 (fn [players] (mapv (fn [player] (assoc player :rotate 180)) players)))
        (reduce
         (fn [layout idx]
           (update layout idx (fn [players]
                                (if (= 2 (count players))
                                  (-> players
                                      (update 0 (fn [player] (assoc player :rotate 90)))
                                      (update 1 (fn [player] (assoc player :rotate 270))))
                                  (mapv (fn [player] (dissoc player :rotate)) players)))))
         $
         (range 1 (dec groups-cnt)))
        (update $ (dec groups-cnt) (fn [players] (mapv (fn [player] (dissoc player :rotate)) players)))))))

(defn default-player-layout [players-count]
  (-> (mapv
       (fn [player] [player])
       (reverse (take players-count player-templates)))
      update-default-rotations))

(defn layout-player-count [layout]
  (count (into [] cat layout)))

(defn- valid-player-layout? [player-layout]
  (map? (ffirst player-layout)))

(defn- player-layout [settings player-count]
  (let [player-layout (:player-layout settings)]
    (if (and player-layout
             (valid-player-layout? player-layout)
             (== player-count (layout-player-count player-layout)))
      player-layout
      (default-player-layout player-count))))

(def ^:private default-settings
  {:merge-events-threshold 1000
   :players-count 2
   :profile "Star Realms"})

(defn- create-game [settings profiles]
  (let [profile (profiles (:profile settings))]
    {:player-layout (player-layout settings (:players-count settings))
     :players (reduce
               (fn [res player]
                 (assoc
                  res
                  (:id player)
                  (assoc player
                         :initial-amount (:hp profile)
                         :amount (:hp profile))))
               {}
               (reverse (take (:players-count settings) player-templates)))
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
 (fn [{:keys [app-version settings profiles db]} _]
   (let [data {:settings (merge default-settings settings)
               :profiles (if (seq profiles) profiles default-profiles)
               :app-info {:version app-version}}]
     (cond-> {:db (if (seq db)
                    (merge db data)
                    (reset-game data))
              :update-time 1000}))))

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
   (let [profile-name (:profile profile)
         db (-> db
                (update :profiles assoc profile-name profile)
                (update :settings assoc :profile profile-name)
                (assoc :page :menu))]
     {:db db
      :profiles (:profiles db)
      :settings (:settings db)})))

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
