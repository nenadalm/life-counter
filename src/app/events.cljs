(ns app.events
  (:require
   [re-frame.core :as re-frame]))

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

(def ^:private default-settings
  {:hp 50
   :players [{:id "0" :color "#cf6666" :text-color "rgba(0, 0, 0, 0.87)"}
             {:id "1" :color "#3797fa" :text-color "rgba(0, 0, 0, 0.87)"}]})

(defn- create-game [settings]
  {:players (reduce
             (fn [res player]
               (assoc
                res
                (:id player)
                (assoc player
                       :initial-amount (:hp settings)
                       :amount (:hp settings))))
             {}
             (:players settings))
   :change-type :by-1 ;; :by-1 | :by-n
   :events []})

(defn- reset-game [db]
  (assoc db
         :game (create-game (:settings db))
         :page :game))

(re-frame/reg-event-fx
 ::init
 [(re-frame/inject-cofx :app-version)]
 (fn [{:keys [app-version]} _]
   {:db (reset-game {:settings default-settings
                     :app-info {:version app-version}})}))

(re-frame/reg-event-db
 ::reset
 (fn [db _]
   (reset-game db)))

(re-frame/reg-event-db
 ::save-settings
 (fn [db [_ settings]]
   (-> db
       (update :settings merge settings)
       reset-game)))

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
