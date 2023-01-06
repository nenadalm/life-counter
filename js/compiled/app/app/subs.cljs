(ns app.subs
  (:require
   [re-frame.core :as re-frame]
   [app.util :as u]))

(re-frame/reg-sub
 ::player-ids
 (fn [db _]
   (keys (get-in db [:game :players]))))

(re-frame/reg-sub
 ::player
 (fn [db [_ id]]
   (get-in db [:game :players id])))

(re-frame/reg-sub
 ::amount-changes
 (fn [db [_ id]]
   (transduce
    (comp
     (filter (fn [event] (= (:player event) id)))
     (u/merge-close
      (fn close? [e1 e2]
        (<=
         (- (:time e1) (:time e2))
         1000))
      (fn merge [e1 e2]
        (update e1 :amount (partial + (:amount e2)))))
     (take 10))
    conj
    []
    (rseq (get-in db [:game :events])))))

(re-frame/reg-sub
 ::page
 (fn [db _]
   (:page db)))

(re-frame/reg-sub
 ::settings
 (fn [db _]
   (:settings db)))

(re-frame/reg-sub
 ::app-info
 (fn [db _]
   (:app-info db)))

(re-frame/reg-sub
 ::change-type
 (fn [db _]
   (get-in db [:game :change-type])))
