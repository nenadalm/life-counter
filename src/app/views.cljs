(ns app.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [clojure.string :as str]
   [clojure.edn :as edn]
   [app.util :as u]
   [app.subs :as subs]
   [app.events :as events]
   [app.components.icons.views :as i]))

(defn- parse-int [s]
  (js/Math.round (js/Number s)))

(defn- parse-edn [s]
  (edn/read-string s))

(defn- form-data [form-el]
  (into {}
        (map (fn [[k v]]
               [(keyword k) v]))
        (.entries (js/FormData. form-el))))

(defn- life-input-class [player]
  (str "rotate-" (:rotate player 0)))

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
  (let [now @events/time]
    [:div.life-input--amount-history
     (for [{:keys [time amount]} history]
       ^{:key time} [:div (str (when (< 0 amount) "+")) amount " (" (u/format-elapsed (- now time)) ")"])]))

(defn life-input [_]
  (let [event (reagent/atom nil)
        on-request-close (fn [] (reset! event nil))]
    (fn [{:keys [player-id class]}]
      (let [player @(re-frame/subscribe [::subs/player player-id])
            change-type @(re-frame/subscribe [::subs/change-type])
            {:keys [amount color text-color medium-text-color winner]} player]
        [:div.life-input
         {:class class}
         [:div.life-input--buttons
          [:button.life-input--button.subtract-life
           {:style {:color medium-text-color
                    :background-color color}
            :on-click (fn []
                        (if (= change-type :by-1)
                          (re-frame/dispatch [::events/decrease-amount player-id 1])
                          (reset! event ::events/decrease-amount)))}
           "-"]
          [:button.life-input--button.add-life
           {:style {:color medium-text-color
                    :background-color color}
            :on-click (fn []
                        (if (= change-type :by-1)
                          (re-frame/dispatch [::events/increase-amount player-id 1])
                          (reset! event ::events/increase-amount)))}
           "+"]]
         [:div.life-input--amount
          {:style {:color text-color}}
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
  (let [player-layout @(re-frame/subscribe [::subs/player-layout])]
    [:div.counter
     (for [[_ group] (u/vector-entries player-layout)]
       ^{:key (str/join "-" group)}
       [:div.life-input-group
        (for [player group]
          ^{:key (:id player)} [life-input {:player-id (:id player) :class (life-input-class player)}])])
     [:div.title-panel
      (:profile @(re-frame/subscribe [::subs/settings]))]
     [:div.action-panel
      {:style {:height (str "calc((100% / " (count player-layout) ") * 2)")}}
      [menu-button]
      [amount-toggle-button]]]))

(defn- submit-menu [e]
  (.preventDefault e)
  (re-frame/dispatch
   [::events/save-settings
    (-> (form-data (.-currentTarget e))
        (update :merge-events-threshold parse-int)
        (update :players-count parse-int)
        (update :player-layout parse-edn))]))

(defn- remove-nth [coll n]
  (into
   (subvec coll 0 n)
   (subvec coll (inc n))))

(defn- insert-nth [coll n x]
  (into
   (subvec coll 0 n)
   (cons x (subvec coll n))))

(defn- merge-up [groups idx]
  (remove-nth
   (update
    groups
    idx
    (fn [prev]
      (into
       (get groups (dec idx))
       prev)))
   (dec idx)))

(defn- move-up [groups idx]
  (let [cur (get groups idx)
        prev (get groups (dec idx))]
    (-> groups
        (assoc (dec idx) cur)
        (assoc idx prev))))

(defn- split-up [groups idx]
  (let [[f s] (get groups idx)]
    (-> groups
        (remove-nth idx)
        (insert-nth idx [s])
        (insert-nth idx [f]))))

(defn- reverse-group [groups idx]
  (update groups idx (fn [group] (vec (rseq group)))))

(defn- layout []
  (let [item-height 8
        atable-layout (reagent/atom @(re-frame/subscribe [::subs/player-layout]))]
    (fn [aplayers-count]
      (let [players-count @aplayers-count
            table-layout @atable-layout
            _ (when-not (== players-count (events/layout-player-count table-layout))
                (reset! atable-layout (events/default-player-layout players-count)))
            group-cnts (mapv count table-layout)]
        [:<>
         [:label
          "Layout"]
         [:div.counter-preview
          {:style {:height (str (* item-height (count table-layout)) "rem")}}
          [:div.counter
           (for [[group-idx group] (u/vector-entries table-layout)]
             ^{:key (str/join "-" group)}
             [:div.life-input-group
              (for [player group]
                (let [{:keys [id color text-color]} player]
                  ^{:key id} [:div.life-input
                              {:class (life-input-class player)
                               :style {:color text-color
                                       :background-color color}}
                              [:div.life-input--amount
                               [:button
                                {:type "button"
                                 :on-click (fn [_]
                                             (swap! atable-layout (fn [groups]
                                                                    (update-in
                                                                     groups
                                                                     [group-idx]
                                                                     (fn [players]
                                                                       (mapv
                                                                        (fn [player*]
                                                                          (if (= (:id player) (:id player*))
                                                                            (events/rotate-player player)
                                                                            player*))
                                                                        players))))))}
                                [i/person]]]]))
              (cond
                (== 2 (count group))
                [:div.counter-preview--col-action-panel
                 [:button.counter-preview--action-button
                  {:type "button"
                   :on-click (fn [_]
                               (swap! atable-layout (fn [groups]
                                                      (events/update-default-rotations (split-up groups group-idx)))))}
                  [i/rows]]
                 [:button.counter-preview--action-button
                  {:type "button"
                   :on-click (fn [_]
                               (swap! atable-layout (fn [groups]
                                                      (events/update-default-rotations (reverse-group groups group-idx)))))}
                  [i/right-left]]]

                (and
                 (== 1 (get group-cnts (dec group-idx) 0))
                 (== 1 (get group-cnts group-idx 0)))
                [:div.counter-preview--row-action-panel
                 {:style {:top "-1.5rem"}}
                 [:button.counter-preview--action-button
                  {:type "button"
                   :on-click (fn [_]
                               (swap! atable-layout (fn [groups]
                                                      (events/update-default-rotations (merge-up groups group-idx)))))}
                  [i/columns]]
                 [:button.counter-preview--action-button
                  {:type "button"
                   :on-click (fn [_] (swap! atable-layout (fn [groups] (events/update-default-rotations (move-up groups group-idx)))))}
                  [i/up-down]]])])]]
         [:input
          {:type "hidden"
           :name "player-layout"
           :value (pr-str @atable-layout)}]]))))

(defn menu []
  (let [aplayers-count (reagent/atom (count @(re-frame/subscribe [::subs/player-ids])))]
    (fn []
      (let [selected-profile (reagent/atom nil)]
        (fn []
          (let [settings @(re-frame/subscribe [::subs/settings])
                app-info @(re-frame/subscribe [::subs/app-info])
                profiles @(re-frame/subscribe [::subs/profiles])
                profile @(re-frame/subscribe [::subs/profile (or @selected-profile (:profile settings))])
                settings-profile @(re-frame/subscribe [::subs/profile (:profile settings)])
                is-valid-profile (boolean (seq settings-profile))]
            [:div.menu
             [:div.menu--header
              [:button.close
               {:on-click (fn [_] (re-frame/dispatch [::events/open-page :game]))
                :disabled (not is-valid-profile)}
               [i/close]]]
             [:button.action
              {:on-click (fn [_] (re-frame/dispatch [::events/open-page :history]))}
              "History"]
             [:button.action
              {:on-click (fn [_] (re-frame/dispatch [::events/reset]))
               :disabled (not is-valid-profile)}
              "Reset game"]
             [:hr]
             [:form
              {:on-submit submit-menu}
              [:fieldset
               [:label
                "Profile"
                [:select
                 {:name "profile"
                  :required true
                  :default-value (:profile profile "")
                  :on-change (fn [^js e]
                               (reset! selected-profile (.-currentTarget.value e)))}
                 (when (empty? profile)
                   [:option {:value ""} ""])
                 (for [{:keys [profile]} profiles]
                   ^{:key profile} [:option {:value profile} profile])]]
               (case (:type profile)
                 :up [:<>
                      [:label
                       "Type"
                       [:input {:disabled true
                                :value "Count up"}]]
                      [:label
                       "Winning score"
                       [:input {:disabled true
                                :value (:end-hp profile)}]]]
                 :down [:<>
                        [:label
                         "Type"
                         [:input {:disabled true
                                  :value "Count down"}]]
                        [:label
                         "Starting life"
                         [:input {:disabled true
                                  :value (:hp profile)}]]]
                 nil)
               [:button.action
                {:type "button"
                 :on-click (fn [_] (re-frame/dispatch [::events/open-page :new-profile]))}
                "New"]
               [:button.action
                {:type "button"
                 :on-click (fn [_] (re-frame/dispatch [::events/delete-profile (:profile profile)]))}
                "Delete"]]
              [:label
               "Number of players"
               [:select
                {:name "players-count"
                 :required true
                 :default-value (str (:players-count settings))
                 :on-change (fn [^js e]
                              (reset! aplayers-count (parse-int (.-currentTarget.value e))))}
                (for [players-count (range 2 (inc events/max-player-count))]
                  ^{:key players-count} [:option {:value players-count} players-count])]]
              [layout aplayers-count]
              [:label
               "Merge threshold (ms)"
               [:input
                {:type "number"
                 :min "0"
                 :name "merge-events-threshold"
                 :default-value (:merge-events-threshold settings)}]]
              [:button.action "Save & reset game"]]
             [:div.menu--footer
              [:div.issue-link
               [:a
                {:href "https://github.com/nenadalm/life-counter/issues"}
                "Report issue / request feature"]]
              [:div.app-version
               (str "Version: " (:version app-info))]]]))))))

(defn- submit-new-profile [e]
  (.preventDefault e)
  (re-frame/dispatch
   [::events/save-profile
    (-> (form-data (.-currentTarget e))
        (update :type keyword)
        (update :hp parse-int)
        (update :end-hp parse-int))]))

(defn- new-profile []
  (let [current-type (reagent/atom :down)]
    (fn []
      [:div.menu
       [:div.menu--header
        [:button.close
         {:on-click (fn [_] (re-frame/dispatch [::events/open-page :menu]))}
         [i/close]]]
       [:form
        {:on-submit submit-new-profile}
        [:label
         "Name"
         [:input
          {:name "profile"
           :required true}]]
        [:label
         "Type"
         [:select
          {:name "type"
           :required true
           :default-value (name @current-type)
           :on-change (fn [e]
                        (reset! current-type (keyword ^js/String (.-currentTarget.value e))))}
          [:option
           {:value "up"}
           "Count up"]
          [:option
           {:value "down"}
           "Count down"]]]
        (case @current-type
          :down [:label
                 "Starting life"
                 [:input
                  {:type "number"
                   :required true
                   :name "hp"}]
                 [:input
                  {:type "hidden"
                   :name "end-hp"
                   :value "0"}]]
          :up [:label
               "Winning score"
               [:input
                {:type "number"
                 :required true
                 :name "end-hp"}]
               [:input
                {:type "hidden"
                 :name "hp"
                 :value "0"}]])
        [:button.action "Create"]]])))

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
        all-players @(re-frame/subscribe [::subs/all-players])]
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
                       (for [cplayer all-players]
                         ^{:key (:id cplayer)} [:td.history-cell
                                                {:style {:color (:text-color cplayer)
                                                         :background-color (:color cplayer)}}
                                                (when (= player (:id cplayer))
                                                  (format-history-cell change))])])
       [:tr
        (for [cplayer all-players]
          ^{:key (:id cplayer)} [:td.history-cell
                                 {:style {:color (:text-color cplayer)
                                          :background-color (:color cplayer)}}
                                 (:initial-amount cplayer)])]]]]))

(defn app []
  [:<>
   (case @(re-frame/subscribe [::subs/page])
     :menu [menu]
     :game [counter]
     :history [history]
     :new-profile [new-profile])])
