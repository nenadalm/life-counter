(ns app.events
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 ::init
 (fn [db _]
   (assoc db
          :players
          {"0" {:id "0"
                :amount 50
                :color "#fa3737"}
           "1" {:id "1"
                :amount 50
                :color "#3797fa"}})))

(re-frame/reg-event-db
 ::increase-amount
 (fn [db [_ id by-n]]
   (-> db
       (update-in [:players id :amount] + by-n)
       (dissoc :action))))

(re-frame/reg-event-db
 ::decrease-amount
 (fn [db [_ id by-n]]
   (-> db
       (update-in [:players id :amount] - by-n)
       (dissoc :action))))
