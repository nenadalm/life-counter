(ns build.create-worker
  (:require
   [clojure.string :as str]
   [build.util :as u]))

(defn- urls-to-cache []
  [(str "?" (u/asset-hash "index.html"))
   (u/asset "index.html")
   (u/asset "js/app.js")
   (u/asset "css/styles.css")
   (u/asset "img/icon.svg")])

(defn render []
  (str/replace
   (slurp "./resources/private/worker.js")
   #".*prop:urlsToCache.*"
   (str
    "const urlsToCache = ["
    (str/join "," (mapv #(str "\"" % "\"") (urls-to-cache)))
    "];")))

(defn -main []
  (println (render)))
