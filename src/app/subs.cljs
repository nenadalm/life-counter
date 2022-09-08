(ns app.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::player
 (fn [db [_ id]]
   (get-in db [:players id])))

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
