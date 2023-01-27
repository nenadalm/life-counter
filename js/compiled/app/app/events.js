// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_cofx(cljs.core.cst$kw$time,(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$time,(new Date()).getTime());
}));
re_frame.core.reg_cofx(cljs.core.cst$kw$app_DASH_version,(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$app_DASH_version,(function (){var or__5045__auto__ = (function (){var G__15206 = "meta[name=app-version]";
var G__15206__$1 = (((G__15206 == null))?null:document.querySelector(G__15206));
if((G__15206__$1 == null)){
return null;
} else {
return G__15206__$1.getAttribute("content");
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "unknown";
}
})());
}));
app.events.default_settings = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$merge_DASH_events_DASH_threshold,(1000),cljs.core.cst$kw$players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"0",cljs.core.cst$kw$color,"#cf6666",cljs.core.cst$kw$text_DASH_color,"rgba(0, 0, 0, 0.87)"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"1",cljs.core.cst$kw$color,"#3797fa",cljs.core.cst$kw$text_DASH_color,"rgba(0, 0, 0, 0.87)"], null)], null)], null);
app.events.create_game = (function app$events$create_game(settings){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$players,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,player){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(player),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(player,cljs.core.cst$kw$initial_DASH_amount,cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(settings),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(settings)], 0)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$players.cljs$core$IFn$_invoke$arity$1(settings)),cljs.core.cst$kw$change_DASH_type,cljs.core.cst$kw$by_DASH_1,cljs.core.cst$kw$events,cljs.core.PersistentVector.EMPTY], null);
});
app.events.reset_game = (function app$events$reset_game(db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$game,app.events.create_game(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$page,cljs.core.cst$kw$game], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_init,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$app_DASH_version)], null),(function (p__15207,_){
var map__15208 = p__15207;
var map__15208__$1 = cljs.core.__destructure_map(map__15208);
var app_version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15208__$1,cljs.core.cst$kw$app_DASH_version);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,app.events.reset_game(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$settings,app.events.default_settings,cljs.core.cst$kw$app_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$version,app_version], null)], null))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_reset,(function (db,_){
return app.events.reset_game(db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_save_DASH_settings,(function (db,p__15209){
var vec__15210 = p__15209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15210,(0),null);
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15210,(1),null);
return app.events.reset_game(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$settings,cljs.core.merge,settings));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time)], null),(function (p__15213,p__15214){
var map__15215 = p__15213;
var map__15215__$1 = cljs.core.__destructure_map(map__15215);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15215__$1,cljs.core.cst$kw$db);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15215__$1,cljs.core.cst$kw$time);
var vec__15216 = p__15214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(1),null);
var by_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(2),null);
var new_amount = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),(0)) + by_n);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var G__15219 = db;
var G__15219__$1 = (((!(((0) === by_n))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(G__15219,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),new_amount),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$amount,by_n,cljs.core.cst$kw$player,id,cljs.core.cst$kw$new_DASH_amount,new_amount], null)):G__15219);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15219__$1,cljs.core.cst$kw$action);

})()], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_decrease_DASH_amount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time)], null),(function (p__15220,p__15221){
var map__15222 = p__15220;
var map__15222__$1 = cljs.core.__destructure_map(map__15222);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15222__$1,cljs.core.cst$kw$db);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15222__$1,cljs.core.cst$kw$time);
var vec__15223 = p__15221;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223,(1),null);
var by_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223,(2),null);
var new_amount = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),(0)) - by_n);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var G__15226 = db;
var G__15226__$1 = (((!(((0) === by_n))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(G__15226,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players,id,cljs.core.cst$kw$amount], null),new_amount),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$amount,(- by_n),cljs.core.cst$kw$player,id,cljs.core.cst$kw$new_DASH_amount,new_amount], null)):G__15226);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15226__$1,cljs.core.cst$kw$action);

})()], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_open_DASH_page,(function (db,p__15227){
var vec__15228 = p__15227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15228,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15228,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_change_DASH_type,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$change_DASH_type], null),(function (type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$by_DASH_1)){
return cljs.core.cst$kw$by_DASH_n;
} else {
return cljs.core.cst$kw$by_DASH_1;
}
}));
}));
