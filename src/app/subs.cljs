(ns app.subs
  (:require
   [re-frame.core :as re-frame]))

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
