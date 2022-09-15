(ns app.events
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-cofx
 :time
 (fn [coeffects _]
   (assoc coeffects :time (.getTime (js/Date.)))))

(def ^:private default-settings
  {:hp 50
   :players [{:id "0" :color "#fa3737"}
             {:id "1" :color "#3797fa"}]})

(defn- create-game [settings]
  {:players (reduce
             (fn [res player]
               (assoc
                res
                (:id player)
                (assoc player :amount (:hp settings))))
             {}
             (:players settings))
   :events []})

(def ^:private initial-state
  {:settings default-settings
   :game (create-game default-settings)})

(re-frame/reg-event-db
 ::init
 (fn [_ _]
   initial-state))

(re-frame/reg-event-db
 ::reset
 (fn [_ _]
   initial-state))

(re-frame/reg-event-fx
 ::increase-amount
 [(re-frame/inject-cofx :time)]
 (fn [{:keys [db time]} [_ id by-n]]
   {:db (-> db
            (update-in [:game :players id :amount] + by-n)
            (update-in [:game :events] conj {:time time :amount by-n :player id})
            (dissoc :action))}))

(re-frame/reg-event-fx
 ::decrease-amount
 [(re-frame/inject-cofx :time)]
 (fn [{:keys [db time]} [_ id by-n]]
   {:db (-> db
            (update-in [:game :players id :amount] - by-n)
            (update-in [:game :events] conj {:time time :amount (- by-n) :player id})
            (dissoc :action))}))
