(ns app.util-test
  (:require
   [cljs.test :refer [is deftest testing]]
   [app.util :as u]))

(deftest format-elapsed-test
  (is (= (u/format-elapsed 1000) "1s"))
  (is (= (u/format-elapsed 60000) "1m"))
  (is (= (u/format-elapsed 3600000) "1h")))

(deftest merge-close-test
  (testing "Nothing is close"
    (is (= [1 3 5]
           (into
            []
            (u/merge-close (fn close? [v1 v2] (<= (- v2 v1) 1)) +)
            [1 3 5]))))
  (testing "Something is close and something is not"
    (is (= [3 5]
           (into
            []
            (u/merge-close (fn close? [v1 v2] (<= (- v2 v1) 1)) +)
            [1 2 5]))))
  (testing "Everything is close"
    (is (= [9]
           (into
            []
            (u/merge-close (fn close? [v1 v2] (<= (- v2 v1) 9)) +)
            [1 3 5])))))
