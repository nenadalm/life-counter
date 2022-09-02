.DEFAULT_GOAL := all

resources/public/js/app.js:
	clojure -M -m figwheel.main -bo min

resources/public/index.html: resources/public/js/app.js
	clojure -M -m build.create-index > $@

.PHONY: clean
clean:
	rm -rf resources/public/js
	rm -rf resources/public/index.html

.PHONY: all
all: resources/public/index.html

.PHONY: test
test:
	clojure -M:cljfmt check
	clojure -M:clj-kondo
