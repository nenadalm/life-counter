(ns app.subs
  (:require
   [re-frame.core :as re-frame]
   [app.util :as u]))

(re-frame/reg-sub
 ::player-ids
 (fn [db _]
   (keys (get-in db [:game :players]))))

(defn- player [db id]
  (let [players (get-in db [:game :players])
        player (get players id)
        opponent-players (vals (dissoc players id))
        {:keys [profile]} (:settings db)
        {:keys [end-hp type]} (get-in db [:profiles profile])]
    (assoc player :winner (case type
                            :down (every?
                                   (fn [opponent-player]
                                     (<= (:amount opponent-player) end-hp))
                                   opponent-players)
                            :up (<= end-hp (:amount player))
                            false))))

(re-frame/reg-sub
 ::player
 (fn [db [_ id]]
   (player db id)))

(re-frame/reg-sub
 ::all-players
 (fn [db]
   (let [player-ids (keys (get-in db [:game :players]))]
     (mapv #(player db %) player-ids))))

(defn- events-close? [threshold e1 e2]
  (and
   (= (:player e1) (:player e2))
   (<=
    (- (:time e1) (:time e2))
    threshold)))

(defn- merge-events [e1 e2]
  (-> e1
      (update :amount (partial + (:amount e2)))
      (assoc :time (:time e2))))

(re-frame/reg-sub
 ::amount-changes
 (fn [db [_ id]]
   (transduce
    (comp
     (u/merge-close (partial events-close? (get-in db [:settings :merge-events-threshold])) merge-events)
     (filter (fn [event] (= (:player event) id)))
     (take 10))
    conj
    []
    (rseq (get-in db [:game :events])))))

(re-frame/reg-sub
 ::all-amount-changes
 (fn [db _]
   (transduce
    (u/merge-close events-close? merge-events)
    conj
    []
    (rseq (get-in db [:game :events])))))

(re-frame/reg-sub
 ::page
 (fn [db _]
   (let [page (:page db)]
     (if (= :game page)
       (if (get-in db [:profiles (get-in db [:settings :profile])])
         page
         :menu)
       page))))

(re-frame/reg-sub
 ::settings
 (fn [db _]
   (:settings db)))

(re-frame/reg-sub
 ::profiles
 (fn [db _]
   (sort-by :profile u/compare-ci (vals (:profiles db)))))

(re-frame/reg-sub
 ::profile
 (fn [db [_ profile]]
   (get-in db [:profiles profile] {})))

(re-frame/reg-sub
 ::app-info
 (fn [db _]
   (:app-info db)))

(re-frame/reg-sub
 ::change-type
 (fn [db _]
   (get-in db [:game :change-type])))
