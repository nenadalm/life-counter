(ns app.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [app.subs :as subs]
   [app.events :as events]
   [app.components.icons.views :as i]))

(defn- parse-int [s]
  (js/Math.round (js/Number s)))

(defn- form-data [form-el]
  (into {}
        (map (fn [[k v]]
               [(keyword k) v]))
        (.entries (js/FormData. form-el))))

(defn amount-modifier [_]
  (let [form-el (atom nil)
        modal-el (atom nil)
        dialog-ref (fn [el] (reset! modal-el el))
        form-ref (fn [el] (reset! form-el el))]
    (fn [{:keys [event player-id on-request-close]}]
      (let [on-request-close (fn []
                               (on-request-close)
                               (when-let [el @form-el] (.reset el)))]
        (when-let [modal @modal-el]
          (let [open (.-open modal)]
            (if (some? event)
              (and (not open) (.showModal modal))
              (and open (.close modal)))))
        [:dialog.dialog
         {:ref dialog-ref}
         [:div.dialog--header
          [:button.close
           {:type "button"
            :on-click (fn []
                        (on-request-close))}
           [i/close]]]
         [:form
          {:ref form-ref
           :on-submit (fn [e]
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
            :ref (fn [el] (when el (.focus el)))}]
          [:div.dialog--actions
           [:button.ok
            "Update"]]]]))))

(defn amount-history [{:keys [history]}]
  [:div.life-input--amount-history
   (for [{:keys [time amount]} history]
     ^{:key time} [:div (str (when (< 0 amount) "+")) amount])])

(defn life-input [_]
  (let [event (reagent/atom nil)
        on-request-close (fn [] (reset! event nil))]
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
         [amount-modifier {:event @event
                           :player-id player-id
                           :on-request-close on-request-close}]]))))

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
  (let [current-type (reagent/atom nil)]
    (fn []
      (let [settings @(re-frame/subscribe [::subs/settings])
            app-info @(re-frame/subscribe [::subs/app-info])
            type (:type settings)]
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
                              (update :type keyword)
                              (update :hp parse-int)
                              (update :end-hp parse-int)
                              (update :merge-events-threshold parse-int))]))}
          [:label
           "Type"
           [:select
            {:name "type"
             :default-value (name type)
             :on-change (fn [e]
                          (reset! current-type (keyword ^js/String (.-currentTarget.value e))))}
            [:option
             {:value "up"}
             "Count up"]
            [:option
             {:value "down"}
             "Count down"]]]
          (case (or @current-type type)
            :down [:label
                   "Starting life"
                   [:input
                    {:type "number"
                     :name "hp"
                     :default-value (:hp settings)}]
                   [:input
                    {:type "hidden"
                     :name "end-hp"
                     :value "0"}]]
            :up [:label
                 "Winning score"
                 [:input
                  {:type "number"
                   :name "end-hp"
                   :default-value (:end-hp settings)}]
                 [:input
                  {:type "hidden"
                   :name "hp"
                   :value "0"}]])
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
           (str "Version: " (:version app-info))]]]))))

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
