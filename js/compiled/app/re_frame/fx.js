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
var _STAR_current_trace_STAR__orig_val__13697 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13698 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13698);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5804__auto___13733 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13733)){
var new_db_13734 = temp__5804__auto___13733;
var fexpr__13699_13735 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__13699_13735.cljs$core$IFn$_invoke$arity$1 ? fexpr__13699_13735.cljs$core$IFn$_invoke$arity$1(new_db_13734) : fexpr__13699_13735.call(null,new_db_13734));
} else {
}

var seq__13700 = cljs.core.seq(effects_without_db);
var chunk__13701 = null;
var count__13702 = (0);
var i__13703 = (0);
while(true){
if((i__13703 < count__13702)){
var vec__13710 = chunk__13701.cljs$core$IIndexed$_nth$arity$2(null,i__13703);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(1),null);
var temp__5802__auto___13736 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13736)){
var effect_fn_13737 = temp__5802__auto___13736;
(effect_fn_13737.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13737.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13737.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13738 = seq__13700;
var G__13739 = chunk__13701;
var G__13740 = count__13702;
var G__13741 = (i__13703 + (1));
seq__13700 = G__13738;
chunk__13701 = G__13739;
count__13702 = G__13740;
i__13703 = G__13741;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13700);
if(temp__5804__auto__){
var seq__13700__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13700__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13700__$1);
var G__13742 = cljs.core.chunk_rest(seq__13700__$1);
var G__13743 = c__4649__auto__;
var G__13744 = cljs.core.count(c__4649__auto__);
var G__13745 = (0);
seq__13700 = G__13742;
chunk__13701 = G__13743;
count__13702 = G__13744;
i__13703 = G__13745;
continue;
} else {
var vec__13713 = cljs.core.first(seq__13700__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13713,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13713,(1),null);
var temp__5802__auto___13746 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13746)){
var effect_fn_13747 = temp__5802__auto___13746;
(effect_fn_13747.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13747.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13747.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13748 = cljs.core.next(seq__13700__$1);
var G__13749 = null;
var G__13750 = (0);
var G__13751 = (0);
seq__13700 = G__13748;
chunk__13701 = G__13749;
count__13702 = G__13750;
i__13703 = G__13751;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13476__auto___13752 = re_frame.interop.now();
var duration__13477__auto___13753 = (end__13476__auto___13752 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13477__auto___13753,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13476__auto___13752);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13697);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5804__auto___13754 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13754)){
var new_db_13755 = temp__5804__auto___13754;
var fexpr__13716_13756 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__13716_13756.cljs$core$IFn$_invoke$arity$1 ? fexpr__13716_13756.cljs$core$IFn$_invoke$arity$1(new_db_13755) : fexpr__13716_13756.call(null,new_db_13755));
} else {
}

var seq__13717 = cljs.core.seq(effects_without_db);
var chunk__13718 = null;
var count__13719 = (0);
var i__13720 = (0);
while(true){
if((i__13720 < count__13719)){
var vec__13727 = chunk__13718.cljs$core$IIndexed$_nth$arity$2(null,i__13720);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727,(1),null);
var temp__5802__auto___13757 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13757)){
var effect_fn_13758 = temp__5802__auto___13757;
(effect_fn_13758.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13758.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13758.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13759 = seq__13717;
var G__13760 = chunk__13718;
var G__13761 = count__13719;
var G__13762 = (i__13720 + (1));
seq__13717 = G__13759;
chunk__13718 = G__13760;
count__13719 = G__13761;
i__13720 = G__13762;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13717);
if(temp__5804__auto__){
var seq__13717__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13717__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13717__$1);
var G__13763 = cljs.core.chunk_rest(seq__13717__$1);
var G__13764 = c__4649__auto__;
var G__13765 = cljs.core.count(c__4649__auto__);
var G__13766 = (0);
seq__13717 = G__13763;
chunk__13718 = G__13764;
count__13719 = G__13765;
i__13720 = G__13766;
continue;
} else {
var vec__13730 = cljs.core.first(seq__13717__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(1),null);
var temp__5802__auto___13767 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13767)){
var effect_fn_13768 = temp__5802__auto___13767;
(effect_fn_13768.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13768.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13768.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13769 = cljs.core.next(seq__13717__$1);
var G__13770 = null;
var G__13771 = (0);
var G__13772 = (0);
seq__13717 = G__13769;
chunk__13718 = G__13770;
count__13719 = G__13771;
i__13720 = G__13772;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13773){
var map__13774 = p__13773;
var map__13774__$1 = cljs.core.__destructure_map(map__13774);
var effect = map__13774__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13774__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13774__$1,cljs.core.cst$kw$dispatch);
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
var seq__13775 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13776 = null;
var count__13777 = (0);
var i__13778 = (0);
while(true){
if((i__13778 < count__13777)){
var effect = chunk__13776.cljs$core$IIndexed$_nth$arity$2(null,i__13778);
re_frame.fx.dispatch_later(effect);


var G__13779 = seq__13775;
var G__13780 = chunk__13776;
var G__13781 = count__13777;
var G__13782 = (i__13778 + (1));
seq__13775 = G__13779;
chunk__13776 = G__13780;
count__13777 = G__13781;
i__13778 = G__13782;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13775);
if(temp__5804__auto__){
var seq__13775__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13775__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13775__$1);
var G__13783 = cljs.core.chunk_rest(seq__13775__$1);
var G__13784 = c__4649__auto__;
var G__13785 = cljs.core.count(c__4649__auto__);
var G__13786 = (0);
seq__13775 = G__13783;
chunk__13776 = G__13784;
count__13777 = G__13785;
i__13778 = G__13786;
continue;
} else {
var effect = cljs.core.first(seq__13775__$1);
re_frame.fx.dispatch_later(effect);


var G__13787 = cljs.core.next(seq__13775__$1);
var G__13788 = null;
var G__13789 = (0);
var G__13790 = (0);
seq__13775 = G__13787;
chunk__13776 = G__13788;
count__13777 = G__13789;
i__13778 = G__13790;
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
var seq__13791 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13792 = null;
var count__13793 = (0);
var i__13794 = (0);
while(true){
if((i__13794 < count__13793)){
var vec__13801 = chunk__13792.cljs$core$IIndexed$_nth$arity$2(null,i__13794);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13801,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13801,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13807 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13807)){
var effect_fn_13808 = temp__5802__auto___13807;
(effect_fn_13808.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13808.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13808.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13809 = seq__13791;
var G__13810 = chunk__13792;
var G__13811 = count__13793;
var G__13812 = (i__13794 + (1));
seq__13791 = G__13809;
chunk__13792 = G__13810;
count__13793 = G__13811;
i__13794 = G__13812;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13791);
if(temp__5804__auto__){
var seq__13791__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13791__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13791__$1);
var G__13813 = cljs.core.chunk_rest(seq__13791__$1);
var G__13814 = c__4649__auto__;
var G__13815 = cljs.core.count(c__4649__auto__);
var G__13816 = (0);
seq__13791 = G__13813;
chunk__13792 = G__13814;
count__13793 = G__13815;
i__13794 = G__13816;
continue;
} else {
var vec__13804 = cljs.core.first(seq__13791__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13804,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13804,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13817 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13817)){
var effect_fn_13818 = temp__5802__auto___13817;
(effect_fn_13818.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13818.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13818.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13819 = cljs.core.next(seq__13791__$1);
var G__13820 = null;
var G__13821 = (0);
var G__13822 = (0);
seq__13791 = G__13819;
chunk__13792 = G__13820;
count__13793 = G__13821;
i__13794 = G__13822;
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
var seq__13823 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13824 = null;
var count__13825 = (0);
var i__13826 = (0);
while(true){
if((i__13826 < count__13825)){
var event = chunk__13824.cljs$core$IIndexed$_nth$arity$2(null,i__13826);
re_frame.router.dispatch(event);


var G__13827 = seq__13823;
var G__13828 = chunk__13824;
var G__13829 = count__13825;
var G__13830 = (i__13826 + (1));
seq__13823 = G__13827;
chunk__13824 = G__13828;
count__13825 = G__13829;
i__13826 = G__13830;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13823);
if(temp__5804__auto__){
var seq__13823__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13823__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13823__$1);
var G__13831 = cljs.core.chunk_rest(seq__13823__$1);
var G__13832 = c__4649__auto__;
var G__13833 = cljs.core.count(c__4649__auto__);
var G__13834 = (0);
seq__13823 = G__13831;
chunk__13824 = G__13832;
count__13825 = G__13833;
i__13826 = G__13834;
continue;
} else {
var event = cljs.core.first(seq__13823__$1);
re_frame.router.dispatch(event);


var G__13835 = cljs.core.next(seq__13823__$1);
var G__13836 = null;
var G__13837 = (0);
var G__13838 = (0);
seq__13823 = G__13835;
chunk__13824 = G__13836;
count__13825 = G__13837;
i__13826 = G__13838;
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
var seq__13839 = cljs.core.seq(value);
var chunk__13840 = null;
var count__13841 = (0);
var i__13842 = (0);
while(true){
if((i__13842 < count__13841)){
var event = chunk__13840.cljs$core$IIndexed$_nth$arity$2(null,i__13842);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13843 = seq__13839;
var G__13844 = chunk__13840;
var G__13845 = count__13841;
var G__13846 = (i__13842 + (1));
seq__13839 = G__13843;
chunk__13840 = G__13844;
count__13841 = G__13845;
i__13842 = G__13846;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13839);
if(temp__5804__auto__){
var seq__13839__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13839__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13839__$1);
var G__13847 = cljs.core.chunk_rest(seq__13839__$1);
var G__13848 = c__4649__auto__;
var G__13849 = cljs.core.count(c__4649__auto__);
var G__13850 = (0);
seq__13839 = G__13847;
chunk__13840 = G__13848;
count__13841 = G__13849;
i__13842 = G__13850;
continue;
} else {
var event = cljs.core.first(seq__13839__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13851 = cljs.core.next(seq__13839__$1);
var G__13852 = null;
var G__13853 = (0);
var G__13854 = (0);
seq__13839 = G__13851;
chunk__13840 = G__13852;
count__13841 = G__13853;
i__13842 = G__13854;
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
