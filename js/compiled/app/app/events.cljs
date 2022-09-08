(ns app.events
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-cofx
 :time
 (fn [coeffects _]
   (assoc coeffects :time (.getTime (js/Date.)))))

(def ^:private initial-state
  {:players
   {"0" {:id "0"
         :amount 50
         :color "#fa3737"}
    "1" {:id "1"
         :amount 50
         :color "#3797fa"}}
   :game
   {:events []}})

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
            (update-in [:players id :amount] + by-n)
            (update-in [:game :events] conj {:time time :amount by-n :player id})
            (dissoc :action))}))

(re-frame/reg-event-fx
 ::decrease-amount
 [(re-frame/inject-cofx :time)]
 (fn [{:keys [db time]} [_ id by-n]]
   {:db (-> db
            (update-in [:players id :amount] - by-n)
            (update-in [:game :events] conj {:time time :amount (- by-n) :player id})
            (dissoc :action))}))
