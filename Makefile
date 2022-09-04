.DEFAULT_GOAL := all

resources/public/js/app.js:
	clojure -M -m figwheel.main -bo min

resources/public/index.html: resources/public/js/app.js
	clojure -M -m build.create-index > $@

resources/public/worker.js: resources/public/index.html
	clojure -M -m build.create-worker > $@

.PHONY: clean
clean:
	rm -rf resources/public/js resources/public/index.html resources/public/worker.js

.PHONY: all
all: resources/public/worker.js

.PHONY: test
test:
	clojure -M:cljfmt check
	clojure -M:clj-kondo
