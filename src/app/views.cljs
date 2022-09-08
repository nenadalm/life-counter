(ns app.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [app.subs :as subs]
   [app.events :as events]
   [app.components.icons.views :as i]))

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
                   [event player-id (js/Math.round (js/Number (.get (js/FormData. (.-currentTarget e)) "amount")))])
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
  [:button.reset-button
   {:on-click (fn [_] (re-frame/dispatch [::events/reset]))}
   "Reset"])

(defn counter []
  [:div.counter
   [life-input {:player-id "0"}]
   [life-input {:player-id "1"}]
   [reset-button]])

(defn app []
  [:<>
   [counter]])
