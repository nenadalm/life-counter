(ns app.components.icons.views
  (:require
   [goog.string :as gstring]))

(defn close []
  [:span (gstring/unescapeEntities "&#10799;")])

(defn back []
  [:span (gstring/unescapeEntities "&#8592;")])

(defn crown []
  [:span "👑"])

(defn person []
  [:span (gstring/unescapeEntities "&#9786;")])

(defn columns []
  [:span (gstring/unescapeEntities "&#9707;")])

(defn rows []
  [:span
   {:style {:transform "rotate(90deg)"
            :display "inline-block"}}
   (gstring/unescapeEntities "&#9707;")])

(defn up-down []
  [:span (gstring/unescapeEntities "&#8645;")])

(defn right-left []
  [:span
   {:style {:transform "rotate(90deg)"
            :display "inline-block"}}
   (gstring/unescapeEntities "&#8645;")])
