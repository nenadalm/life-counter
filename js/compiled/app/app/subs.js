// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_player_DASH_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players], null)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_player,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__14158){
var vec__14159 = p__14158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14159,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14159,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$players,id], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_amount_DASH_changes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__14162){
var vec__14163 = p__14162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14163,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14163,(1),null);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(event),id);
})),cljs.core.take.cljs$core$IFn$_invoke$arity$1((10))),cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.rseq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$events], null))));
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
