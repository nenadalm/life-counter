(ns app.util)

(defn hide-keyboard
  "Chrome on Android will sometimes leave keyboard opened when previously focused input is removed from the DOM."
  []
  (some-> (.-activeElement js/document)
          .blur))

(defn merge-close
  "Merges close inputs next to each other

  `close?` - takes 2 inputs and returns `true` if close, `false` otherwise
  `merge` - merges 2 close inputs"
  [close? merge]
  (fn [rf]
    (let [pv (volatile! ::none)]
      (fn
        ([] (rf))
        ([result]
         (let [result (let [prior @pv]
                        (if (= prior ::none)
                          result
                          (do
                            (vreset! pv ::none)
                            (unreduced (rf result prior)))))]
           (rf result)))
        ([result input]
         (let [prior @pv]
           (cond
             (= prior ::none)
             (do (vreset! pv input)
                 result)

             (close? prior input)
             (do
               (vreset! pv (merge input prior))
               result)

             :else
             (do
               (vreset! pv input)
               (rf result prior)))))))))
