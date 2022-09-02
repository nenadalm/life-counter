// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_init,(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$players,new cljs.core.PersistentArrayMap(null, 2, ["0",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"0",cljs.core.cst$kw$amount,(50),cljs.core.cst$kw$color,"#fa3737"], null),"1",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"1",cljs.core.cst$kw$amount,(50),cljs.core.cst$kw$color,"#3797fa"], null)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount,(function (db,p__14161){
var vec__14162 = p__14161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14162,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14162,(1),null);
var by_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14162,(2),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),cljs.core._PLUS_,by_n),cljs.core.cst$kw$action);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_decrease_DASH_amount,(function (db,p__14165){
var vec__14166 = p__14165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166,(1),null);
var by_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166,(2),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),cljs.core._,by_n),cljs.core.cst$kw$action);
}));
