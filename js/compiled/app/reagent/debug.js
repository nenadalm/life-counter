// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__13393__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13394__i = 0, G__13394__a = new Array(arguments.length -  0);
while (G__13394__i < G__13394__a.length) {G__13394__a[G__13394__i] = arguments[G__13394__i + 0]; ++G__13394__i;}
  args = new cljs.core.IndexedSeq(G__13394__a,0,null);
} 
return G__13393__delegate.call(this,args);};
G__13393.cljs$lang$maxFixedArity = 0;
G__13393.cljs$lang$applyTo = (function (arglist__13395){
var args = cljs.core.seq(arglist__13395);
return G__13393__delegate(args);
});
G__13393.cljs$core$IFn$_invoke$arity$variadic = G__13393__delegate;
return G__13393;
})()
);

(o.error = (function() { 
var G__13396__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13397__i = 0, G__13397__a = new Array(arguments.length -  0);
while (G__13397__i < G__13397__a.length) {G__13397__a[G__13397__i] = arguments[G__13397__i + 0]; ++G__13397__i;}
  args = new cljs.core.IndexedSeq(G__13397__a,0,null);
} 
return G__13396__delegate.call(this,args);};
G__13396.cljs$lang$maxFixedArity = 0;
G__13396.cljs$lang$applyTo = (function (arglist__13398){
var args = cljs.core.seq(arglist__13398);
return G__13396__delegate(args);
});
G__13396.cljs$core$IFn$_invoke$arity$variadic = G__13396__delegate;
return G__13396;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
