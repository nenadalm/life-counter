// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13689 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13690 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13690);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5804__auto___13725 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13725)){
var new_db_13726 = temp__5804__auto___13725;
var fexpr__13691_13727 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__13691_13727.cljs$core$IFn$_invoke$arity$1 ? fexpr__13691_13727.cljs$core$IFn$_invoke$arity$1(new_db_13726) : fexpr__13691_13727.call(null,new_db_13726));
} else {
}

var seq__13692 = cljs.core.seq(effects_without_db);
var chunk__13693 = null;
var count__13694 = (0);
var i__13695 = (0);
while(true){
if((i__13695 < count__13694)){
var vec__13702 = chunk__13693.cljs$core$IIndexed$_nth$arity$2(null,i__13695);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13702,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13702,(1),null);
var temp__5802__auto___13728 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13728)){
var effect_fn_13729 = temp__5802__auto___13728;
(effect_fn_13729.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13729.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13729.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13730 = seq__13692;
var G__13731 = chunk__13693;
var G__13732 = count__13694;
var G__13733 = (i__13695 + (1));
seq__13692 = G__13730;
chunk__13693 = G__13731;
count__13694 = G__13732;
i__13695 = G__13733;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13692);
if(temp__5804__auto__){
var seq__13692__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13692__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13692__$1);
var G__13734 = cljs.core.chunk_rest(seq__13692__$1);
var G__13735 = c__4649__auto__;
var G__13736 = cljs.core.count(c__4649__auto__);
var G__13737 = (0);
seq__13692 = G__13734;
chunk__13693 = G__13735;
count__13694 = G__13736;
i__13695 = G__13737;
continue;
} else {
var vec__13705 = cljs.core.first(seq__13692__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13705,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13705,(1),null);
var temp__5802__auto___13738 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13738)){
var effect_fn_13739 = temp__5802__auto___13738;
(effect_fn_13739.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13739.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13739.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13740 = cljs.core.next(seq__13692__$1);
var G__13741 = null;
var G__13742 = (0);
var G__13743 = (0);
seq__13692 = G__13740;
chunk__13693 = G__13741;
count__13694 = G__13742;
i__13695 = G__13743;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13471__auto___13744 = re_frame.interop.now();
var duration__13472__auto___13745 = (end__13471__auto___13744 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13472__auto___13745,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13471__auto___13744);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13689);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5804__auto___13746 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13746)){
var new_db_13747 = temp__5804__auto___13746;
var fexpr__13708_13748 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__13708_13748.cljs$core$IFn$_invoke$arity$1 ? fexpr__13708_13748.cljs$core$IFn$_invoke$arity$1(new_db_13747) : fexpr__13708_13748.call(null,new_db_13747));
} else {
}

var seq__13709 = cljs.core.seq(effects_without_db);
var chunk__13710 = null;
var count__13711 = (0);
var i__13712 = (0);
while(true){
if((i__13712 < count__13711)){
var vec__13719 = chunk__13710.cljs$core$IIndexed$_nth$arity$2(null,i__13712);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13719,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13719,(1),null);
var temp__5802__auto___13749 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13749)){
var effect_fn_13750 = temp__5802__auto___13749;
(effect_fn_13750.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13750.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13750.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13751 = seq__13709;
var G__13752 = chunk__13710;
var G__13753 = count__13711;
var G__13754 = (i__13712 + (1));
seq__13709 = G__13751;
chunk__13710 = G__13752;
count__13711 = G__13753;
i__13712 = G__13754;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13709);
if(temp__5804__auto__){
var seq__13709__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13709__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13709__$1);
var G__13755 = cljs.core.chunk_rest(seq__13709__$1);
var G__13756 = c__4649__auto__;
var G__13757 = cljs.core.count(c__4649__auto__);
var G__13758 = (0);
seq__13709 = G__13755;
chunk__13710 = G__13756;
count__13711 = G__13757;
i__13712 = G__13758;
continue;
} else {
var vec__13722 = cljs.core.first(seq__13709__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13722,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13722,(1),null);
var temp__5802__auto___13759 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13759)){
var effect_fn_13760 = temp__5802__auto___13759;
(effect_fn_13760.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13760.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13760.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13761 = cljs.core.next(seq__13709__$1);
var G__13762 = null;
var G__13763 = (0);
var G__13764 = (0);
seq__13709 = G__13761;
chunk__13710 = G__13762;
count__13711 = G__13763;
i__13712 = G__13764;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13765){
var map__13766 = p__13765;
var map__13766__$1 = cljs.core.__destructure_map(map__13766);
var effect = map__13766__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13766__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13766__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__13767 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13768 = null;
var count__13769 = (0);
var i__13770 = (0);
while(true){
if((i__13770 < count__13769)){
var effect = chunk__13768.cljs$core$IIndexed$_nth$arity$2(null,i__13770);
re_frame.fx.dispatch_later(effect);


var G__13771 = seq__13767;
var G__13772 = chunk__13768;
var G__13773 = count__13769;
var G__13774 = (i__13770 + (1));
seq__13767 = G__13771;
chunk__13768 = G__13772;
count__13769 = G__13773;
i__13770 = G__13774;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13767);
if(temp__5804__auto__){
var seq__13767__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13767__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13767__$1);
var G__13775 = cljs.core.chunk_rest(seq__13767__$1);
var G__13776 = c__4649__auto__;
var G__13777 = cljs.core.count(c__4649__auto__);
var G__13778 = (0);
seq__13767 = G__13775;
chunk__13768 = G__13776;
count__13769 = G__13777;
i__13770 = G__13778;
continue;
} else {
var effect = cljs.core.first(seq__13767__$1);
re_frame.fx.dispatch_later(effect);


var G__13779 = cljs.core.next(seq__13767__$1);
var G__13780 = null;
var G__13781 = (0);
var G__13782 = (0);
seq__13767 = G__13779;
chunk__13768 = G__13780;
count__13769 = G__13781;
i__13770 = G__13782;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__13783 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13784 = null;
var count__13785 = (0);
var i__13786 = (0);
while(true){
if((i__13786 < count__13785)){
var vec__13793 = chunk__13784.cljs$core$IIndexed$_nth$arity$2(null,i__13786);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13793,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13793,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13799 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13799)){
var effect_fn_13800 = temp__5802__auto___13799;
(effect_fn_13800.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13800.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13800.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13801 = seq__13783;
var G__13802 = chunk__13784;
var G__13803 = count__13785;
var G__13804 = (i__13786 + (1));
seq__13783 = G__13801;
chunk__13784 = G__13802;
count__13785 = G__13803;
i__13786 = G__13804;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13783);
if(temp__5804__auto__){
var seq__13783__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13783__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13783__$1);
var G__13805 = cljs.core.chunk_rest(seq__13783__$1);
var G__13806 = c__4649__auto__;
var G__13807 = cljs.core.count(c__4649__auto__);
var G__13808 = (0);
seq__13783 = G__13805;
chunk__13784 = G__13806;
count__13785 = G__13807;
i__13786 = G__13808;
continue;
} else {
var vec__13796 = cljs.core.first(seq__13783__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13796,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13796,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13809 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13809)){
var effect_fn_13810 = temp__5802__auto___13809;
(effect_fn_13810.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13810.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13810.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13811 = cljs.core.next(seq__13783__$1);
var G__13812 = null;
var G__13813 = (0);
var G__13814 = (0);
seq__13783 = G__13811;
chunk__13784 = G__13812;
count__13785 = G__13813;
i__13786 = G__13814;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13815 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13816 = null;
var count__13817 = (0);
var i__13818 = (0);
while(true){
if((i__13818 < count__13817)){
var event = chunk__13816.cljs$core$IIndexed$_nth$arity$2(null,i__13818);
re_frame.router.dispatch(event);


var G__13819 = seq__13815;
var G__13820 = chunk__13816;
var G__13821 = count__13817;
var G__13822 = (i__13818 + (1));
seq__13815 = G__13819;
chunk__13816 = G__13820;
count__13817 = G__13821;
i__13818 = G__13822;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13815);
if(temp__5804__auto__){
var seq__13815__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13815__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13815__$1);
var G__13823 = cljs.core.chunk_rest(seq__13815__$1);
var G__13824 = c__4649__auto__;
var G__13825 = cljs.core.count(c__4649__auto__);
var G__13826 = (0);
seq__13815 = G__13823;
chunk__13816 = G__13824;
count__13817 = G__13825;
i__13818 = G__13826;
continue;
} else {
var event = cljs.core.first(seq__13815__$1);
re_frame.router.dispatch(event);


var G__13827 = cljs.core.next(seq__13815__$1);
var G__13828 = null;
var G__13829 = (0);
var G__13830 = (0);
seq__13815 = G__13827;
chunk__13816 = G__13828;
count__13817 = G__13829;
i__13818 = G__13830;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13831 = cljs.core.seq(value);
var chunk__13832 = null;
var count__13833 = (0);
var i__13834 = (0);
while(true){
if((i__13834 < count__13833)){
var event = chunk__13832.cljs$core$IIndexed$_nth$arity$2(null,i__13834);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13835 = seq__13831;
var G__13836 = chunk__13832;
var G__13837 = count__13833;
var G__13838 = (i__13834 + (1));
seq__13831 = G__13835;
chunk__13832 = G__13836;
count__13833 = G__13837;
i__13834 = G__13838;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13831);
if(temp__5804__auto__){
var seq__13831__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13831__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13831__$1);
var G__13839 = cljs.core.chunk_rest(seq__13831__$1);
var G__13840 = c__4649__auto__;
var G__13841 = cljs.core.count(c__4649__auto__);
var G__13842 = (0);
seq__13831 = G__13839;
chunk__13832 = G__13840;
count__13833 = G__13841;
i__13834 = G__13842;
continue;
} else {
var event = cljs.core.first(seq__13831__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13843 = cljs.core.next(seq__13831__$1);
var G__13844 = null;
var G__13845 = (0);
var G__13846 = (0);
seq__13831 = G__13843;
chunk__13832 = G__13844;
count__13833 = G__13845;
i__13834 = G__13846;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
