// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Chrome on Android will sometimes leave keyboard opened when previously focused input is removed from the DOM.
 */
app.util.hide_keyboard = (function app$util$hide_keyboard(){
var G__14630 = document.activeElement;
if((G__14630 == null)){
return null;
} else {
return G__14630.blur();
}
});
/**
 * Merges close inputs next to each other
 * 
 *   `close?` - takes 2 inputs and returns `true` if close, `false` otherwise
 *   `merge` - merges 2 close inputs
 */
app.util.merge_close = (function app$util$merge_close(close_QMARK_,merge){
return (function (rf){
var pv = cljs.core.volatile_BANG_(cljs.core.cst$kw$app$util_SLASH_none);
return (function() {
var G__14631 = null;
var G__14631__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14631__1 = (function (result){
var result__$1 = (function (){var prior = cljs.core.deref(pv);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,cljs.core.cst$kw$app$util_SLASH_none)){
return result;
} else {
cljs.core.vreset_BANG_(pv,cljs.core.cst$kw$app$util_SLASH_none);

return cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,prior) : rf.call(null,result,prior)));
}
})();
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result__$1) : rf.call(null,result__$1));
});
var G__14631__2 = (function (result,input){
var prior = cljs.core.deref(pv);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,cljs.core.cst$kw$app$util_SLASH_none)){
cljs.core.vreset_BANG_(pv,input);

return result;
} else {
if(cljs.core.truth_((close_QMARK_.cljs$core$IFn$_invoke$arity$2 ? close_QMARK_.cljs$core$IFn$_invoke$arity$2(prior,input) : close_QMARK_.call(null,prior,input)))){
cljs.core.vreset_BANG_(pv,(merge.cljs$core$IFn$_invoke$arity$2 ? merge.cljs$core$IFn$_invoke$arity$2(input,prior) : merge.call(null,input,prior)));

return result;
} else {
cljs.core.vreset_BANG_(pv,input);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,prior) : rf.call(null,result,prior));

}
}
});
G__14631 = function(result,input){
switch(arguments.length){
case 0:
return G__14631__0.call(this);
case 1:
return G__14631__1.call(this,result);
case 2:
return G__14631__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14631.cljs$core$IFn$_invoke$arity$0 = G__14631__0;
G__14631.cljs$core$IFn$_invoke$arity$1 = G__14631__1;
G__14631.cljs$core$IFn$_invoke$arity$2 = G__14631__2;
return G__14631;
})()
});
});
