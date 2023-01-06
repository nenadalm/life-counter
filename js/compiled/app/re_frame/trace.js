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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14535){
var map__14536 = p__14535;
var map__14536__$1 = cljs.core.__destructure_map(map__14536);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14536__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14536__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14536__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14536__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__14537_14561 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14538_14562 = null;
var count__14539_14563 = (0);
var i__14540_14564 = (0);
while(true){
if((i__14540_14564 < count__14539_14563)){
var vec__14551_14565 = chunk__14538_14562.cljs$core$IIndexed$_nth$arity$2(null,i__14540_14564);
var k_14566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14551_14565,(0),null);
var cb_14567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14551_14565,(1),null);
try{var G__14555_14568 = cljs.core.deref(re_frame.trace.traces);
(cb_14567.cljs$core$IFn$_invoke$arity$1 ? cb_14567.cljs$core$IFn$_invoke$arity$1(G__14555_14568) : cb_14567.call(null,G__14555_14568));
}catch (e14554){var e_14569 = e14554;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14566,"while storing",cljs.core.deref(re_frame.trace.traces),e_14569], 0));
}

var G__14570 = seq__14537_14561;
var G__14571 = chunk__14538_14562;
var G__14572 = count__14539_14563;
var G__14573 = (i__14540_14564 + (1));
seq__14537_14561 = G__14570;
chunk__14538_14562 = G__14571;
count__14539_14563 = G__14572;
i__14540_14564 = G__14573;
continue;
} else {
var temp__5804__auto___14574 = cljs.core.seq(seq__14537_14561);
if(temp__5804__auto___14574){
var seq__14537_14575__$1 = temp__5804__auto___14574;
if(cljs.core.chunked_seq_QMARK_(seq__14537_14575__$1)){
var c__5568__auto___14576 = cljs.core.chunk_first(seq__14537_14575__$1);
var G__14577 = cljs.core.chunk_rest(seq__14537_14575__$1);
var G__14578 = c__5568__auto___14576;
var G__14579 = cljs.core.count(c__5568__auto___14576);
var G__14580 = (0);
seq__14537_14561 = G__14577;
chunk__14538_14562 = G__14578;
count__14539_14563 = G__14579;
i__14540_14564 = G__14580;
continue;
} else {
var vec__14556_14581 = cljs.core.first(seq__14537_14575__$1);
var k_14582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14556_14581,(0),null);
var cb_14583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14556_14581,(1),null);
try{var G__14560_14584 = cljs.core.deref(re_frame.trace.traces);
(cb_14583.cljs$core$IFn$_invoke$arity$1 ? cb_14583.cljs$core$IFn$_invoke$arity$1(G__14560_14584) : cb_14583.call(null,G__14560_14584));
}catch (e14559){var e_14585 = e14559;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14582,"while storing",cljs.core.deref(re_frame.trace.traces),e_14585], 0));
}

var G__14586 = cljs.core.next(seq__14537_14575__$1);
var G__14587 = null;
var G__14588 = (0);
var G__14589 = (0);
seq__14537_14561 = G__14586;
chunk__14538_14562 = G__14587;
count__14539_14563 = G__14588;
i__14540_14564 = G__14589;
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
