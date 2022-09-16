(ns app.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [app.subs :as subs]
   [app.events :as events]
   [app.components.icons.views :as i]))

(defn- parse-int [s]
  (js/Math.round (js/Number s)))

(defn amount-modifier [{:keys [event player-id on-request-close]}]
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
                   [event player-id (parse-int (.get (js/FormData. (.-currentTarget e)) "amount"))])
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
      "Update"]]]])

(defn amount-history [{:keys [history]}]
  [:div.life-input--amount-history
   (for [{:keys [time amount]} history]
     ^{:key time} [:div (str (when (< 0 amount) "+")) amount])])

(defn life-input [{:keys [player-id]}]
  (reagent/with-let [event (reagent/atom nil)]
    (let [player @(re-frame/subscribe [::subs/player player-id])
          {:keys [amount color]} player]
      [:div.life-input
       [:button.life-input--button
        {:style {:background-color color}
         :on-click (fn []
                     (reset! event ::events/decrease-amount))}
        "-"]
       [:button.life-input--button
        {:style {:background-color color}
         :on-click (fn []
                     (reset! event ::events/increase-amount))}
        "+"]
       [:div.life-input--amount
        {:style {:background-color color}}
        amount]
       [amount-history {:history @(re-frame/subscribe [::subs/amount-changes player-id])}]
       (when-let [e @event]
         [amount-modifier {:event e :player-id player-id :on-request-close #(reset! event nil)}])])))

(defn reset-button []
  [:button.menu-button
   {:on-click (fn [_] (re-frame/dispatch [::events/open-page :menu]))}
   "Menu"])

(defn counter []
  [:div.counter
   (for [id @(re-frame/subscribe [::subs/player-ids])]
     ^{:key id} [life-input {:player-id id}])
   [reset-button]])

(defn menu []
  (let [settings @(re-frame/subscribe [::subs/settings])]
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
                      {:hp (parse-int (.get (js/FormData. (.-currentTarget e)) "hp"))}]))}
      [:label
       "Starting life"
       [:input
        {:type "number"
         :name "hp"
         :default-value (:hp settings)}]]
      [:button.action "Save & reset game"]]
     [:button.action
      {:on-click (fn [_] (re-frame/dispatch [::events/reset]))}
      "Reset game"]]))

(defn app []
  [:<>
   (case @(re-frame/subscribe [::subs/page])
     :menu [menu]
     :game [counter])])
