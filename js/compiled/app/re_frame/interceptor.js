// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.interceptor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.loggers');
goog.require('re_frame.interop');
goog.require('re_frame.trace');
goog.require('clojure.set');
re_frame.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$after,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$before,null], null), null);
re_frame.interceptor.interceptor_QMARK_ = (function re_frame$interceptor$interceptor_QMARK_(m){
return ((cljs.core.map_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.mandatory_interceptor_keys,cljs.core.set(cljs.core.keys(m)))));
});
re_frame.interceptor.__GT_interceptor = (function re_frame$interceptor$__GT_interceptor(var_args){
var args__4835__auto__ = [];
var len__4829__auto___13556 = arguments.length;
var i__4830__auto___13557 = (0);
while(true){
if((i__4830__auto___13557 < len__4829__auto___13556)){
args__4835__auto__.push((arguments[i__4830__auto___13557]));

var G__13558 = (i__4830__auto___13557 + (1));
i__4830__auto___13557 = G__13558;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__13554){
var map__13555 = p__13554;
var map__13555__$1 = cljs.core.__destructure_map(map__13555);
var m = map__13555__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13555__$1,cljs.core.cst$kw$id);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13555__$1,cljs.core.cst$kw$before);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13555__$1,cljs.core.cst$kw$after);
if(re_frame.interop.debug_enabled_QMARK_){
var temp__5802__auto___13559 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),re_frame.interceptor.mandatory_interceptor_keys));
if(temp__5802__auto___13559){
var unknown_keys_13560 = temp__5802__auto___13559;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ->interceptor",m,"has unknown keys:",unknown_keys_13560], 0));
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(function (){var or__4223__auto__ = id;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.cst$kw$unnamed;
}
})(),cljs.core.cst$kw$before,before,cljs.core.cst$kw$after,after], null);
}));

(re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq13553){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13553));
}));

re_frame.interceptor.get_effect = (function re_frame$interceptor$get_effect(var_args){
var G__13562 = arguments.length;
switch (G__13562) {
case 1:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$effects,key], null));
}));

(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$effects,key], null),not_found);
}));

(re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = 3);

re_frame.interceptor.assoc_effect = (function re_frame$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$effects,key], null),value);
});
re_frame.interceptor.update_effect = (function re_frame$interceptor$update_effect(var_args){
var args__4835__auto__ = [];
var len__4829__auto___13568 = arguments.length;
var i__4830__auto___13569 = (0);
while(true){
if((i__4830__auto___13569 < len__4829__auto___13568)){
args__4835__auto__.push((arguments[i__4830__auto___13569]));

var G__13570 = (i__4830__auto___13569 + (1));
i__4830__auto___13569 = G__13570;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return re_frame.interceptor.update_effect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(re_frame.interceptor.update_effect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$effects,key], null),f,args);
}));

(re_frame.interceptor.update_effect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_frame.interceptor.update_effect.cljs$lang$applyTo = (function (seq13564){
var G__13565 = cljs.core.first(seq13564);
var seq13564__$1 = cljs.core.next(seq13564);
var G__13566 = cljs.core.first(seq13564__$1);
var seq13564__$2 = cljs.core.next(seq13564__$1);
var G__13567 = cljs.core.first(seq13564__$2);
var seq13564__$3 = cljs.core.next(seq13564__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13565,G__13566,G__13567,seq13564__$3);
}));

re_frame.interceptor.get_coeffect = (function re_frame$interceptor$get_coeffect(var_args){
var G__13572 = arguments.length;
switch (G__13572) {
case 1:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coeffects,key], null));
}));

(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coeffects,key], null),not_found);
}));

(re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3);

re_frame.interceptor.assoc_coeffect = (function re_frame$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coeffects,key], null),value);
});
re_frame.interceptor.update_coeffect = (function re_frame$interceptor$update_coeffect(var_args){
var args__4835__auto__ = [];
var len__4829__auto___13578 = arguments.length;
var i__4830__auto___13579 = (0);
while(true){
if((i__4830__auto___13579 < len__4829__auto___13578)){
args__4835__auto__.push((arguments[i__4830__auto___13579]));

var G__13580 = (i__4830__auto___13579 + (1));
i__4830__auto___13579 = G__13580;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coeffects,key], null),f,args);
}));

(re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq13574){
var G__13575 = cljs.core.first(seq13574);
var seq13574__$1 = cljs.core.next(seq13574);
var G__13576 = cljs.core.first(seq13574__$1);
var seq13574__$2 = cljs.core.next(seq13574__$1);
var G__13577 = cljs.core.first(seq13574__$2);
var seq13574__$3 = cljs.core.next(seq13574__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13575,G__13576,G__13577,seq13574__$3);
}));

re_frame.interceptor.invoke_interceptor_fn = (function re_frame$interceptor$invoke_interceptor_fn(context,interceptor,direction){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(interceptor,direction);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(context) : f.call(null,context));
} else {
return context;
}
});
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` function will (if present)
 *   add to a `context's` `:coeffects`, while its `:after` function
 *   will modify the `context`'s `:effects`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
re_frame.interceptor.invoke_interceptors = (function re_frame$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_(queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek(queue);
var stack = cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(context__$1);
var G__13581 = re_frame.interceptor.invoke_interceptor_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context__$1,cljs.core.cst$kw$queue,cljs.core.pop(queue),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$stack,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,interceptor)], 0)),interceptor,direction);
context__$1 = G__13581;
continue;
}
break;
}
});
re_frame.interceptor.enqueue = (function re_frame$interceptor$enqueue(context,interceptors){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$queue,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,re_frame.interop.empty_queue),interceptors);
});
/**
 * Create a fresh context
 */
re_frame.interceptor.context = (function re_frame$interceptor$context(var_args){
var G__13583 = arguments.length;
switch (G__13583) {
case 2:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = (function (event,interceptors){
return re_frame.interceptor.enqueue(re_frame.interceptor.assoc_coeffect(re_frame.interceptor.assoc_coeffect(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$event,event),cljs.core.cst$kw$original_DASH_event,event),interceptors);
}));

(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = (function (event,interceptors,db){
return re_frame.interceptor.assoc_coeffect(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2(event,interceptors),cljs.core.cst$kw$db,db);
}));

(re_frame.interceptor.context.cljs$lang$maxFixedArity = 3);

/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 *   At this point in processing, the `:queue` is empty and `:stack` holds all
 *   the previously run interceptors. So this function enables the backwards walk
 *   by priming `:queue` with what's currently in `:stack`
 */
re_frame.interceptor.change_direction = (function re_frame$interceptor$change_direction(context){
return re_frame.interceptor.enqueue(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$queue),cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(context));
});
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of interceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :fx  [:dispatch [:an-event-id :param1]]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat analogous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffects` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
re_frame.interceptor.execute = (function re_frame$interceptor$execute(event_v,interceptors){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13473__auto___13585 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$interceptors,interceptors], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$interceptors,interceptors], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__13473__auto___13585);

} else {
}

return re_frame.interceptor.invoke_interceptors(re_frame.interceptor.change_direction(re_frame.interceptor.invoke_interceptors(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2(event_v,interceptors),cljs.core.cst$kw$before)),cljs.core.cst$kw$after);
});
