(ns app.util
  (:require [clojure.string :as str]))

(defn index-by
  [f coll]
  (persistent!
   (reduce
    (fn [ret x]
      (let [k (f x)]
        (assoc! ret k x)))
    (transient {}) coll)))

(defn compare-ci [x y]
  (compare
   (str/lower-case x)
   (str/lower-case y)))

(defn format-elapsed [ms]
  (let [s (js/Math.trunc (/ ms 1000))
        m (js/Math.trunc (/ s 60))]
    (if (== 0 m)
      (str s "s")
      (str m "m"))))

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
               (vreset! pv (merge prior input))
               result)

             :else
             (do
               (vreset! pv input)
               (rf result prior)))))))))
