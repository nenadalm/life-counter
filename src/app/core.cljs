(ns ^:figwheel-hooks app.core
  (:require
   [re-frame.core :as re-frame]
   [reagent.dom :as reagent-dom]
   [app.config :as config]
   [app.views :as views]
   [app.events :as events]))

(defn- dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent-dom/render [views/app]
                      (.getElementById js/document "app")))

(defn ^:export init []
  (dev-setup)
  (re-frame/dispatch-sync [::events/init])
  (mount-root))

(defn ^:after-load after-load []
  (mount-root))
