(ns app.util-test
  (:require
   [cljs.test :refer [is deftest testing]]
   [app.util :as u]))

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
