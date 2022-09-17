(ns build.create-index
  (:require
   [clojure.java.shell :as shell]
   [clojure.string :as str]
   [build.util :as u]))

(defn- sh [& args]
  (let [result (apply shell/sh args)]
    (if (= 0 (:exit result))
      (str/trim-newline (:out result))
      (throw (ex-info "Shell command failed." {:result result})))))

(defn- app-version []
  (sh "git" "rev-parse" "HEAD"))

(defn- render []
  (str
   "<!doctype html>
<html lang=\"en-US\">
  <head>
    <meta charset=\"utf-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <meta name=\"app-version\" content=\"" (app-version) "\">
    <title>Life counter</title>
    <link rel=\"stylesheet\" href=\"" (u/asset "css/styles.css") "\">
    <link rel=\"icon\" href=\"img/icon.svg\" type=\"image/svg+xml\">
    <link rel=\"manifest\" href=\"" (u/asset "manifest.json") "\">
  </head>
  <body>
    <div id=\"app\"></div>
    <script src=\"" (u/asset "js/app.js") "\"></script>
    <script>app.core.init();</script>
  </body>
</html>"))

(defn -main []
  (println (render))
  (shutdown-agents))
