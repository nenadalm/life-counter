(ns app.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::player
 (fn [db [_ id]]
   (get-in db [:players id])))
