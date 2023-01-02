// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14533){
var map__14534 = p__14533;
var map__14534__$1 = cljs.core.__destructure_map(map__14534);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14534__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14534__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14534__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14534__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__14535_14559 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14536_14560 = null;
var count__14537_14561 = (0);
var i__14538_14562 = (0);
while(true){
if((i__14538_14562 < count__14537_14561)){
var vec__14549_14563 = chunk__14536_14560.cljs$core$IIndexed$_nth$arity$2(null,i__14538_14562);
var k_14564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14549_14563,(0),null);
var cb_14565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14549_14563,(1),null);
try{var G__14553_14566 = cljs.core.deref(re_frame.trace.traces);
(cb_14565.cljs$core$IFn$_invoke$arity$1 ? cb_14565.cljs$core$IFn$_invoke$arity$1(G__14553_14566) : cb_14565.call(null,G__14553_14566));
}catch (e14552){var e_14567 = e14552;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14564,"while storing",cljs.core.deref(re_frame.trace.traces),e_14567], 0));
}

var G__14568 = seq__14535_14559;
var G__14569 = chunk__14536_14560;
var G__14570 = count__14537_14561;
var G__14571 = (i__14538_14562 + (1));
seq__14535_14559 = G__14568;
chunk__14536_14560 = G__14569;
count__14537_14561 = G__14570;
i__14538_14562 = G__14571;
continue;
} else {
var temp__5804__auto___14572 = cljs.core.seq(seq__14535_14559);
if(temp__5804__auto___14572){
var seq__14535_14573__$1 = temp__5804__auto___14572;
if(cljs.core.chunked_seq_QMARK_(seq__14535_14573__$1)){
var c__5568__auto___14574 = cljs.core.chunk_first(seq__14535_14573__$1);
var G__14575 = cljs.core.chunk_rest(seq__14535_14573__$1);
var G__14576 = c__5568__auto___14574;
var G__14577 = cljs.core.count(c__5568__auto___14574);
var G__14578 = (0);
seq__14535_14559 = G__14575;
chunk__14536_14560 = G__14576;
count__14537_14561 = G__14577;
i__14538_14562 = G__14578;
continue;
} else {
var vec__14554_14579 = cljs.core.first(seq__14535_14573__$1);
var k_14580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554_14579,(0),null);
var cb_14581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554_14579,(1),null);
try{var G__14558_14582 = cljs.core.deref(re_frame.trace.traces);
(cb_14581.cljs$core$IFn$_invoke$arity$1 ? cb_14581.cljs$core$IFn$_invoke$arity$1(G__14558_14582) : cb_14581.call(null,G__14558_14582));
}catch (e14557){var e_14583 = e14557;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14580,"while storing",cljs.core.deref(re_frame.trace.traces),e_14583], 0));
}

var G__14584 = cljs.core.next(seq__14535_14573__$1);
var G__14585 = null;
var G__14586 = (0);
var G__14587 = (0);
seq__14535_14559 = G__14584;
chunk__14536_14560 = G__14585;
count__14537_14561 = G__14586;
i__14538_14562 = G__14587;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
