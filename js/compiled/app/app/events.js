// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_cofx(cljs.core.cst$kw$time,(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$time,(new Date()).getTime());
}));
app.events.default_settings = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"0",cljs.core.cst$kw$color,"#cf6666",cljs.core.cst$kw$text_DASH_color,"rgba(0, 0, 0, 0.87)"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"1",cljs.core.cst$kw$color,"#3797fa",cljs.core.cst$kw$text_DASH_color,"rgba(255, 255, 255, 0.87)"], null)], null)], null);
app.events.create_game = (function app$events$create_game(settings){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$players,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,player){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(player),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$amount,cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(settings)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$players.cljs$core$IFn$_invoke$arity$1(settings)),cljs.core.cst$kw$events,cljs.core.PersistentVector.EMPTY], null);
});
app.events.reset_game = (function app$events$reset_game(db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$game,app.events.create_game(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$page,cljs.core.cst$kw$game], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_init,(function (_,___$1){
return app.events.reset_game(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$settings,app.events.default_settings], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_reset,(function (db,_){
return app.events.reset_game(db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_save_DASH_settings,(function (db,p__14165){
var vec__14166 = p__14165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166,(0),null);
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166,(1),null);
return app.events.reset_game(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$settings,cljs.core.merge,settings));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time)], null),(function (p__14169,p__14170){
var map__14171 = p__14169;
var map__14171__$1 = cljs.core.__destructure_map(map__14171);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,cljs.core.cst$kw$db);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,cljs.core.cst$kw$time);
var vec__14172 = p__14170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14172,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14172,(1),null);
var by_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14172,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),cljs.core._PLUS_,by_n),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$amount,by_n,cljs.core.cst$kw$player,id], null)),cljs.core.cst$kw$action)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_decrease_DASH_amount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time)], null),(function (p__14175,p__14176){
var map__14177 = p__14175;
var map__14177__$1 = cljs.core.__destructure_map(map__14177);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14177__$1,cljs.core.cst$kw$db);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14177__$1,cljs.core.cst$kw$time);
var vec__14178 = p__14176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(1),null);
var by_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),cljs.core._,by_n),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$amount,(- by_n),cljs.core.cst$kw$player,id], null)),cljs.core.cst$kw$action)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_open_DASH_page,(function (db,p__14181){
var vec__14182 = p__14181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14182,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14182,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
