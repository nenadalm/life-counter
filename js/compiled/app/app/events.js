// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_cofx(cljs.core.cst$kw$time,(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$time,(new Date()).getTime());
}));
app.events.initial_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$players,new cljs.core.PersistentArrayMap(null, 2, ["0",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"0",cljs.core.cst$kw$amount,(50),cljs.core.cst$kw$color,"#fa3737"], null),"1",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"1",cljs.core.cst$kw$amount,(50),cljs.core.cst$kw$color,"#3797fa"], null)], null),cljs.core.cst$kw$game,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$events,cljs.core.PersistentVector.EMPTY], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_init,(function (_,___$1){
return app.events.initial_state;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_reset,(function (_,___$1){
return app.events.initial_state;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time)], null),(function (p__14165,p__14166){
var map__14167 = p__14165;
var map__14167__$1 = cljs.core.__destructure_map(map__14167);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14167__$1,cljs.core.cst$kw$db);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14167__$1,cljs.core.cst$kw$time);
var vec__14168 = p__14166;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14168,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14168,(1),null);
var by_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14168,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),cljs.core._PLUS_,by_n),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$amount,by_n,cljs.core.cst$kw$player,id], null)),cljs.core.cst$kw$action)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_decrease_DASH_amount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time)], null),(function (p__14171,p__14172){
var map__14173 = p__14171;
var map__14173__$1 = cljs.core.__destructure_map(map__14173);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,cljs.core.cst$kw$db);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,cljs.core.cst$kw$time);
var vec__14174 = p__14172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14174,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14174,(1),null);
var by_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14174,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),cljs.core._,by_n),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$amount,(- by_n),cljs.core.cst$kw$player,id], null)),cljs.core.cst$kw$action)], null);
}));
