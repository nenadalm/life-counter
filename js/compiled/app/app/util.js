// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Chrome on Android will sometimes leave keyboard opened when previously focused input is removed from the DOM.
 */
app.util.hide_keyboard = (function app$util$hide_keyboard(){
var G__15198 = document.activeElement;
if((G__15198 == null)){
return null;
} else {
return G__15198.blur();
}
});
