(ns app.util)

(defn hide-keyboard
  "Chrome on Android will sometimes leave keyboard opened when previously focused input is removed from the DOM."
  []
  (some-> (.-activeElement js/document)
          .blur))
