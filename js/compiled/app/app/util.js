// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Chrome on Android will sometimes leave keyboard opened when previously focused input is removed from the DOM.
 */
app.util.hide_keyboard = (function app$util$hide_keyboard(){
var G__13616 = document.activeElement;
if((G__13616 == null)){
return null;
} else {
return G__13616.blur();
}
});
