// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
var _STAR_current_trace_STAR__orig_val__14722 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14723 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14723);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5804__auto___14758 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14758)){
var new_db_14759 = temp__5804__auto___14758;
var fexpr__14724_14760 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__14724_14760.cljs$core$IFn$_invoke$arity$1 ? fexpr__14724_14760.cljs$core$IFn$_invoke$arity$1(new_db_14759) : fexpr__14724_14760.call(null,new_db_14759));
} else {
}

var seq__14725 = cljs.core.seq(effects_without_db);
var chunk__14726 = null;
var count__14727 = (0);
var i__14728 = (0);
while(true){
if((i__14728 < count__14727)){
var vec__14735 = chunk__14726.cljs$core$IIndexed$_nth$arity$2(null,i__14728);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(1),null);
var temp__5802__auto___14761 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14761)){
var effect_fn_14762 = temp__5802__auto___14761;
(effect_fn_14762.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14762.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14762.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14763 = seq__14725;
var G__14764 = chunk__14726;
var G__14765 = count__14727;
var G__14766 = (i__14728 + (1));
seq__14725 = G__14763;
chunk__14726 = G__14764;
count__14727 = G__14765;
i__14728 = G__14766;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14725);
if(temp__5804__auto__){
var seq__14725__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14725__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14725__$1);
var G__14767 = cljs.core.chunk_rest(seq__14725__$1);
var G__14768 = c__5568__auto__;
var G__14769 = cljs.core.count(c__5568__auto__);
var G__14770 = (0);
seq__14725 = G__14767;
chunk__14726 = G__14768;
count__14727 = G__14769;
i__14728 = G__14770;
continue;
} else {
var vec__14738 = cljs.core.first(seq__14725__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14738,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14738,(1),null);
var temp__5802__auto___14771 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14771)){
var effect_fn_14772 = temp__5802__auto___14771;
(effect_fn_14772.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14772.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14772.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14773 = cljs.core.next(seq__14725__$1);
var G__14774 = null;
var G__14775 = (0);
var G__14776 = (0);
seq__14725 = G__14773;
chunk__14726 = G__14774;
count__14727 = G__14775;
i__14728 = G__14776;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14511__auto___14777 = re_frame.interop.now();
var duration__14512__auto___14778 = (end__14511__auto___14777 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14512__auto___14778,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14511__auto___14777);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14722);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5804__auto___14779 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14779)){
var new_db_14780 = temp__5804__auto___14779;
var fexpr__14741_14781 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__14741_14781.cljs$core$IFn$_invoke$arity$1 ? fexpr__14741_14781.cljs$core$IFn$_invoke$arity$1(new_db_14780) : fexpr__14741_14781.call(null,new_db_14780));
} else {
}

var seq__14742 = cljs.core.seq(effects_without_db);
var chunk__14743 = null;
var count__14744 = (0);
var i__14745 = (0);
while(true){
if((i__14745 < count__14744)){
var vec__14752 = chunk__14743.cljs$core$IIndexed$_nth$arity$2(null,i__14745);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14752,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14752,(1),null);
var temp__5802__auto___14782 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14782)){
var effect_fn_14783 = temp__5802__auto___14782;
(effect_fn_14783.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14783.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14783.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14784 = seq__14742;
var G__14785 = chunk__14743;
var G__14786 = count__14744;
var G__14787 = (i__14745 + (1));
seq__14742 = G__14784;
chunk__14743 = G__14785;
count__14744 = G__14786;
i__14745 = G__14787;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14742);
if(temp__5804__auto__){
var seq__14742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14742__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14742__$1);
var G__14788 = cljs.core.chunk_rest(seq__14742__$1);
var G__14789 = c__5568__auto__;
var G__14790 = cljs.core.count(c__5568__auto__);
var G__14791 = (0);
seq__14742 = G__14788;
chunk__14743 = G__14789;
count__14744 = G__14790;
i__14745 = G__14791;
continue;
} else {
var vec__14755 = cljs.core.first(seq__14742__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14755,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14755,(1),null);
var temp__5802__auto___14792 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14792)){
var effect_fn_14793 = temp__5802__auto___14792;
(effect_fn_14793.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14793.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14793.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14794 = cljs.core.next(seq__14742__$1);
var G__14795 = null;
var G__14796 = (0);
var G__14797 = (0);
seq__14742 = G__14794;
chunk__14743 = G__14795;
count__14744 = G__14796;
i__14745 = G__14797;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__14798){
var map__14799 = p__14798;
var map__14799__$1 = cljs.core.__destructure_map(map__14799);
var effect = map__14799__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14799__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14799__$1,cljs.core.cst$kw$dispatch);
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
var seq__14800 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14801 = null;
var count__14802 = (0);
var i__14803 = (0);
while(true){
if((i__14803 < count__14802)){
var effect = chunk__14801.cljs$core$IIndexed$_nth$arity$2(null,i__14803);
re_frame.fx.dispatch_later(effect);


var G__14804 = seq__14800;
var G__14805 = chunk__14801;
var G__14806 = count__14802;
var G__14807 = (i__14803 + (1));
seq__14800 = G__14804;
chunk__14801 = G__14805;
count__14802 = G__14806;
i__14803 = G__14807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14800);
if(temp__5804__auto__){
var seq__14800__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14800__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14800__$1);
var G__14808 = cljs.core.chunk_rest(seq__14800__$1);
var G__14809 = c__5568__auto__;
var G__14810 = cljs.core.count(c__5568__auto__);
var G__14811 = (0);
seq__14800 = G__14808;
chunk__14801 = G__14809;
count__14802 = G__14810;
i__14803 = G__14811;
continue;
} else {
var effect = cljs.core.first(seq__14800__$1);
re_frame.fx.dispatch_later(effect);


var G__14812 = cljs.core.next(seq__14800__$1);
var G__14813 = null;
var G__14814 = (0);
var G__14815 = (0);
seq__14800 = G__14812;
chunk__14801 = G__14813;
count__14802 = G__14814;
i__14803 = G__14815;
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
var seq__14816 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__14817 = null;
var count__14818 = (0);
var i__14819 = (0);
while(true){
if((i__14819 < count__14818)){
var vec__14826 = chunk__14817.cljs$core$IIndexed$_nth$arity$2(null,i__14819);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14826,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14826,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14832 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14832)){
var effect_fn_14833 = temp__5802__auto___14832;
(effect_fn_14833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14833.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14834 = seq__14816;
var G__14835 = chunk__14817;
var G__14836 = count__14818;
var G__14837 = (i__14819 + (1));
seq__14816 = G__14834;
chunk__14817 = G__14835;
count__14818 = G__14836;
i__14819 = G__14837;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14816);
if(temp__5804__auto__){
var seq__14816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14816__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14816__$1);
var G__14838 = cljs.core.chunk_rest(seq__14816__$1);
var G__14839 = c__5568__auto__;
var G__14840 = cljs.core.count(c__5568__auto__);
var G__14841 = (0);
seq__14816 = G__14838;
chunk__14817 = G__14839;
count__14818 = G__14840;
i__14819 = G__14841;
continue;
} else {
var vec__14829 = cljs.core.first(seq__14816__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14829,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14829,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14842 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14842)){
var effect_fn_14843 = temp__5802__auto___14842;
(effect_fn_14843.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14843.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14843.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14844 = cljs.core.next(seq__14816__$1);
var G__14845 = null;
var G__14846 = (0);
var G__14847 = (0);
seq__14816 = G__14844;
chunk__14817 = G__14845;
count__14818 = G__14846;
i__14819 = G__14847;
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
var seq__14848 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14849 = null;
var count__14850 = (0);
var i__14851 = (0);
while(true){
if((i__14851 < count__14850)){
var event = chunk__14849.cljs$core$IIndexed$_nth$arity$2(null,i__14851);
re_frame.router.dispatch(event);


var G__14852 = seq__14848;
var G__14853 = chunk__14849;
var G__14854 = count__14850;
var G__14855 = (i__14851 + (1));
seq__14848 = G__14852;
chunk__14849 = G__14853;
count__14850 = G__14854;
i__14851 = G__14855;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14848);
if(temp__5804__auto__){
var seq__14848__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14848__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14848__$1);
var G__14856 = cljs.core.chunk_rest(seq__14848__$1);
var G__14857 = c__5568__auto__;
var G__14858 = cljs.core.count(c__5568__auto__);
var G__14859 = (0);
seq__14848 = G__14856;
chunk__14849 = G__14857;
count__14850 = G__14858;
i__14851 = G__14859;
continue;
} else {
var event = cljs.core.first(seq__14848__$1);
re_frame.router.dispatch(event);


var G__14860 = cljs.core.next(seq__14848__$1);
var G__14861 = null;
var G__14862 = (0);
var G__14863 = (0);
seq__14848 = G__14860;
chunk__14849 = G__14861;
count__14850 = G__14862;
i__14851 = G__14863;
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
var seq__14864 = cljs.core.seq(value);
var chunk__14865 = null;
var count__14866 = (0);
var i__14867 = (0);
while(true){
if((i__14867 < count__14866)){
var event = chunk__14865.cljs$core$IIndexed$_nth$arity$2(null,i__14867);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__14868 = seq__14864;
var G__14869 = chunk__14865;
var G__14870 = count__14866;
var G__14871 = (i__14867 + (1));
seq__14864 = G__14868;
chunk__14865 = G__14869;
count__14866 = G__14870;
i__14867 = G__14871;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14864);
if(temp__5804__auto__){
var seq__14864__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14864__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14864__$1);
var G__14872 = cljs.core.chunk_rest(seq__14864__$1);
var G__14873 = c__5568__auto__;
var G__14874 = cljs.core.count(c__5568__auto__);
var G__14875 = (0);
seq__14864 = G__14872;
chunk__14865 = G__14873;
count__14866 = G__14874;
i__14867 = G__14875;
continue;
} else {
var event = cljs.core.first(seq__14864__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__14876 = cljs.core.next(seq__14864__$1);
var G__14877 = null;
var G__14878 = (0);
var G__14879 = (0);
seq__14864 = G__14876;
chunk__14865 = G__14877;
count__14866 = G__14878;
i__14867 = G__14879;
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
