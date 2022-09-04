(ns ^:figwheel-hooks app.core
  (:require
   [re-frame.core :as re-frame]
   [reagent.dom :as reagent-dom]
   [app.config :as config]
   [app.views :as views]
   [app.events :as events]))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent-dom/render [views/app]
                      (.getElementById js/document "app")))

(defn register-worker []
  (some-> js/navigator
          .-serviceWorker
          (.register "worker.js")))

(defn- dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn- prod-setup []
  (when-not config/debug?
    (register-worker)))

(defn ^:export init []
  (dev-setup)
  (prod-setup)
  (re-frame/dispatch-sync [::events/init])
  (mount-root))

(defn ^:after-load after-load []
  (mount-root))
