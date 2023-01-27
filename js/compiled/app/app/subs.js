// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('app.util');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_player_DASH_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players], null)));
})], 0));
app.subs.opponent = (function app$subs$opponent(player_id){
var G__15194 = player_id;
switch (G__15194) {
case "0":
return "1";

break;
case "1":
return "0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15194)].join('')));

}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_player,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__15196){
var vec__15197 = p__15196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15197,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15197,(1),null);
var players = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players], null));
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(players,id);
var opponent_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(players,app.subs.opponent(id));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$winner,(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(opponent_player) <= (0)));
})], 0));
app.subs.events_close_QMARK_ = (function app$subs$events_close_QMARK_(threshold,e1,e2){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(e1),cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(e2))) && (((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(e1) - cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(e2)) <= threshold)));
});
app.subs.merge_events = (function app$subs$merge_events(e1,e2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(e1,cljs.core.cst$kw$amount,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(e2))),cljs.core.cst$kw$time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(e2));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_amount_DASH_changes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__15200){
var vec__15201 = p__15200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(1),null);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(app.util.merge_close(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.subs.events_close_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$merge_DASH_events_DASH_threshold], null))),app.subs.merge_events),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(event),id);
})),cljs.core.take.cljs$core$IFn$_invoke$arity$1((10))),cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.rseq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_all_DASH_amount_DASH_changes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.util.merge_close(app.subs.events_close_QMARK_,app.subs.merge_events),cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.rseq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_settings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_app_DASH_info,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$app_DASH_info.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_change_DASH_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$change_DASH_type], null));
})], 0));
