(ns app.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [app.subs :as subs]
   [app.events :as events]
   [app.components.icons.views :as i]
   [app.util :as u]))

(defn- parse-int [s]
  (js/Math.round (js/Number s)))

(defn- form-data [form-el]
  (into {}
        (map (fn [[k v]]
               [(keyword k) v]))
        (.entries (js/FormData. form-el))))

(defn amount-modifier [{:keys [event player-id on-request-close]}]
  (let [on-request-close (fn []
                           (u/hide-keyboard)
                           (on-request-close))]
    [:dialog.dialog
     {:ref (fn [el]
             (when (and el (not (.-open el)))
               (.addEventListener el "cancel" (fn [] (on-request-close)))
               (.showModal el)))}
     [:div.dialog--header
      [:button.close
       {:type "button"
        :on-click (fn []
                    (on-request-close))}
       [i/close]]]
     [:form
      {:on-submit (fn [e]
                    (.preventDefault e)
                    (re-frame/dispatch
                     [event player-id (-> (form-data (.-currentTarget e))
                                          :amount
                                          parse-int)])
                    (on-request-close))}
      [:h1 (if (= event ::events/increase-amount)
             "+"
             "-")]
      [:input
       {:type "number"
        :name "amount"
        :ref (fn [el] (when el (js/setTimeout #(.focus el) 0)))}]
      [:div.dialog--actions
       [:button.ok
        "Update"]]]]))

(defn amount-history [{:keys [history]}]
  [:div.life-input--amount-history
   (for [{:keys [time amount]} history]
     ^{:key time} [:div (str (when (< 0 amount) "+")) amount])])

(defn life-input [_]
  (let [event (reagent/atom nil)]
    (fn [{:keys [player-id]}]
      (let [player @(re-frame/subscribe [::subs/player player-id])
            change-type @(re-frame/subscribe [::subs/change-type])
            {:keys [amount color text-color winner]} player]
        [:div.life-input
         [:button.life-input--button
          {:style {:color text-color
                   :background-color color}
           :on-click (fn []
                       (if (= change-type :by-1)
                         (re-frame/dispatch [::events/decrease-amount player-id 1])
                         (reset! event ::events/decrease-amount)))}
          "-"]
         [:button.life-input--button
          {:style {:color text-color
                   :background-color color}
           :on-click (fn []
                       (if (= change-type :by-1)
                         (re-frame/dispatch [::events/increase-amount player-id 1])
                         (reset! event ::events/increase-amount)))}
          "+"]
         [:div.life-input--amount
          {:style {:color text-color
                   :background-color color}}
          amount]
         (when winner
           [:div.winner [i/crown]])
         [amount-history {:history @(re-frame/subscribe [::subs/amount-changes player-id])}]
         (when-let [e @event]
           [amount-modifier {:event e :player-id player-id :on-request-close #(reset! event nil)}])]))))

(defn menu-button []
  [:button.menu-button
   {:on-click (fn [_] (re-frame/dispatch [::events/open-page :menu]))}
   "Menu"])

(defn amount-toggle-button []
  (let [change-type @(re-frame/subscribe [::subs/change-type])]
    [:button.amount-toggle
     {:on-click (fn [_] (re-frame/dispatch [::events/change-type]))}
     (case change-type
       :by-1 "+/-1"
       :by-n "+/-n")]))

(defn counter []
  [:div.counter
   (for [id @(re-frame/subscribe [::subs/player-ids])]
     ^{:key id} [life-input {:player-id id}])
   [:div.action-panel
    [menu-button]
    [amount-toggle-button]]])

(defn menu []
  (let [settings @(re-frame/subscribe [::subs/settings])
        app-info @(re-frame/subscribe [::subs/app-info])]
    [:div.menu
     [:div.menu--header
      [:button.close
       {:on-click (fn [_] (re-frame/dispatch [::events/open-page :game]))}
       [i/close]]]
     [:form
      {:on-submit (fn [e]
                    (.preventDefault e)
                    (re-frame/dispatch
                     [::events/save-settings
                      (-> (form-data (.-currentTarget e))
                          (update :hp parse-int)
                          (update :merge-events-threshold parse-int))]))}
      [:label
       "Starting life"
       [:input
        {:type "number"
         :name "hp"
         :default-value (:hp settings)}]]
      [:label
       "Merge threshold (ms)"
       [:input
        {:type "number"
         :name "merge-events-threshold"
         :default-value (:merge-events-threshold settings)}]]
      [:button.action "Save & reset game"]]
     [:button.action
      {:on-click (fn [_] (re-frame/dispatch [::events/open-page :history]))}
      "History"]
     [:button.action
      {:on-click (fn [_] (re-frame/dispatch [::events/reset]))}
      "Reset game"]
     [:div.menu--footer
      [:div.issue-link
       [:a
        {:href "https://github.com/nenadalm/life-counter/issues"}
        "Report issue / request feature"]]
      [:div.app-version
       (str "Version: " (:version app-info))]]]))

(defn- format-time [date]
  (str
   (.padStart (str (.getHours date)) 2 "0")
   ":"
   (.padStart (str (.getMinutes date)) 2 "0")
   ":"
   (.padStart (str (.getSeconds date)) 2 "0")))

(defn- format-history-cell [{:keys [time amount new-amount]}]
  (str (when (< 0 amount) "+")
       amount
       " (" (format-time (js/Date. time)) ") => " new-amount))

(defn- history []
  (let [amount-changes @(re-frame/subscribe [::subs/all-amount-changes])
        player0 @(re-frame/subscribe [::subs/player "0"])
        player1 @(re-frame/subscribe [::subs/player "1"])]
    [:div.history
     [:div.history--header
      [:button.back
       {:on-click (fn [_] (re-frame/dispatch [::events/open-page :menu]))}
       [i/back]]
      [:button.close
       {:on-click (fn [_] (re-frame/dispatch [::events/open-page :game]))}
       [i/close]]]
     [:table.history-table
      [:tbody
       (for [{:keys [time player] :as change} amount-changes]
         ^{:key time} [:tr
                       [:td.history-cell
                        {:style {:color (:text-color player0)
                                 :background-color (:color player0)}}
                        (when (= player "0")
                          (format-history-cell change))]
                       [:td.history-cell
                        {:style {:color (:text-color player1)
                                 :background-color (:color player1)}}
                        (when (= player "1")
                          (format-history-cell change))]])
       [:tr
        [:td.history-cell
         {:style {:color (:text-color player0)
                  :background-color (:color player0)}}
         (:initial-amount player0)]
        [:td.history-cell
         {:style {:color (:text-color player1)
                  :background-color (:color player1)}}
         (:initial-amount player1)]]]]]))

(defn app []
  [:<>
   (case @(re-frame/subscribe [::subs/page])
     :menu [menu]
     :game [counter]
     :history [history])])
