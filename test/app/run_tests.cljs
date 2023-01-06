(ns app.run-tests
  (:require
   [cljs.test :refer [run-all-tests]]
   [app.util-test]))

(defmethod cljs.test/report [:cljs.test/default :end-run-tests] [m]
  (when-not (cljs.test/successful? m)
    (js/process.exit 1)))

(run-all-tests #"app\..*-test")
