(ns app.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [app.subs :as subs]
   [app.events :as events]))

(defn amount-modifier [{:keys [event player-id on-request-close]}]
  [:dialog.dialog
   {:ref (fn [el]
           (when (and el (not (.-open el)))
             (.addEventListener el "cancel" (fn [] (on-request-close)))
             (.showModal el)))}
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
      :name "amount"}]
    [:div.dialog--actions
     [:button
      {:type "button"
       :on-click (fn []
                   (on-request-close))}
      "Cancel"]
     [:button
      "Update"]]]])

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
       (when-let [e @event]
         [amount-modifier {:event e :player-id player-id :on-request-close #(reset! event nil)}])])))

(defn counter []
  [:div.counter
   [life-input {:player-id "0"}]
   [life-input {:player-id "1"}]])

(defn app []
  [:<>
   [counter]])
