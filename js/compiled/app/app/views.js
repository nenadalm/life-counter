// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('app.subs');
goog.require('app.events');
goog.require('app.components.icons.views');
goog.require('app.util');
app.views.parse_int = (function app$views$parse_int(s){
return Math.round(Number(s));
});
app.views.form_data = (function app$views$form_data(form_el){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__15235){
var vec__15236 = p__15235;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
})),(new FormData(form_el)).entries());
});
app.views.amount_modifier = (function app$views$amount_modifier(p__15239){
var map__15240 = p__15239;
var map__15240__$1 = cljs.core.__destructure_map(map__15240);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15240__$1,cljs.core.cst$kw$event);
var player_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15240__$1,cljs.core.cst$kw$player_DASH_id);
var on_request_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15240__$1,cljs.core.cst$kw$on_DASH_request_DASH_close);
var on_request_close__$1 = (function (){
app.util.hide_keyboard();

return (on_request_close.cljs$core$IFn$_invoke$arity$0 ? on_request_close.cljs$core$IFn$_invoke$arity$0() : on_request_close.call(null));
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dialog$dialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,(function (el){
if(cljs.core.truth_((function (){var and__5043__auto__ = el;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(el.open);
} else {
return and__5043__auto__;
}
})())){
el.addEventListener("cancel",(function (){
return on_request_close__$1();
}));

return el.showModal();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$dialog_DASH__DASH_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return on_request_close__$1();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.close], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,player_id,app.views.parse_int(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(app.views.form_data(e.currentTarget)))], null));

return on_request_close__$1();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount))?"+":"-")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$name,"amount",cljs.core.cst$kw$ref,(function (el){
if(cljs.core.truth_(el)){
return setTimeout((function (){
return el.focus();
}),(0));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$dialog_DASH__DASH_actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$ok,"Update"], null)], null)], null)], null);
});
app.views.amount_history = (function app$views$amount_history(p__15241){
var map__15242 = p__15241;
var map__15242__$1 = cljs.core.__destructure_map(map__15242);
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15242__$1,cljs.core.cst$kw$history);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input_DASH__DASH_amount_DASH_history,(function (){var iter__5523__auto__ = (function app$views$amount_history_$_iter__15243(s__15244){
return (new cljs.core.LazySeq(null,(function (){
var s__15244__$1 = s__15244;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15244__$1);
if(temp__5804__auto__){
var s__15244__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15244__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15244__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15246 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15245 = (0);
while(true){
if((i__15245 < size__5522__auto__)){
var map__15247 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5521__auto__,i__15245);
var map__15247__$1 = cljs.core.__destructure_map(map__15247);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15247__$1,cljs.core.cst$kw$time);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15247__$1,cljs.core.cst$kw$amount);
cljs.core.chunk_append(b__15246,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0) < amount))?"+":null)),amount], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,time], null)));

var G__15249 = (i__15245 + (1));
i__15245 = G__15249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15246),app$views$amount_history_$_iter__15243(cljs.core.chunk_rest(s__15244__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15246),null);
}
} else {
var map__15248 = cljs.core.first(s__15244__$2);
var map__15248__$1 = cljs.core.__destructure_map(map__15248);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15248__$1,cljs.core.cst$kw$time);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15248__$1,cljs.core.cst$kw$amount);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0) < amount))?"+":null)),amount], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,time], null)),app$views$amount_history_$_iter__15243(cljs.core.rest(s__15244__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(history__$1);
})()], null);
});
app.views.life_input = (function app$views$life_input(p__15250){
var map__15251 = p__15250;
var map__15251__$1 = cljs.core.__destructure_map(map__15251);
var player_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15251__$1,cljs.core.cst$kw$player_DASH_id);
var with_let15252 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let15252);
var temp__5808__auto___15256 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___15256 == null)){
} else {
var c__13601__auto___15257 = temp__5808__auto___15256;
if((with_let15252.generation === c__13601__auto___15257.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let15252.generation = c__13601__auto___15257.ratomGeneration);
}

var init15253 = (with_let15252.length === (0));
var event = ((((init15253) || (cljs.core.not(with_let15252.hasOwnProperty((0))))))?(with_let15252[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let15252[(0)]));
var res15254 = (function (){var player = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_player,player_id], null)));
var change_type = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_change_DASH_type], null)));
var map__15255 = player;
var map__15255__$1 = cljs.core.__destructure_map(map__15255);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15255__$1,cljs.core.cst$kw$amount);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15255__$1,cljs.core.cst$kw$color);
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15255__$1,cljs.core.cst$kw$text_DASH_color);
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15255__$1,cljs.core.cst$kw$winner);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$life_DASH_input_DASH__DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,text_color,cljs.core.cst$kw$background_DASH_color,color], null),cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(change_type,cljs.core.cst$kw$by_DASH_1)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_decrease_DASH_amount,player_id,(1)], null));
} else {
return cljs.core.reset_BANG_(event,cljs.core.cst$kw$app$events_SLASH_decrease_DASH_amount);
}
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$life_DASH_input_DASH__DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,text_color,cljs.core.cst$kw$background_DASH_color,color], null),cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(change_type,cljs.core.cst$kw$by_DASH_1)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount,player_id,(1)], null));
} else {
return cljs.core.reset_BANG_(event,cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount);
}
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input_DASH__DASH_amount,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,text_color,cljs.core.cst$kw$background_DASH_color,color], null)], null),amount], null),(cljs.core.truth_(winner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$winner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.crown], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.amount_history,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_amount_DASH_changes,player_id], null)))], null)], null),(function (){var temp__5804__auto__ = cljs.core.deref(event);
if(cljs.core.truth_(temp__5804__auto__)){
var e = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.amount_modifier,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event,e,cljs.core.cst$kw$player_DASH_id,player_id,cljs.core.cst$kw$on_DASH_request_DASH_close,(function (){
return cljs.core.reset_BANG_(event,null);
})], null)], null);
} else {
return null;
}
})()], null);
})();
return res15254;
});
app.views.menu_button = (function app$views$menu_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$menu_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$menu], null));
})], null),"Menu"], null);
});
app.views.amount_toggle_button = (function app$views$amount_toggle_button(){
var change_type = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_change_DASH_type], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$amount_DASH_toggle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_change_DASH_type], null));
})], null),(function (){var G__15258 = change_type;
var G__15258__$1 = (((G__15258 instanceof cljs.core.Keyword))?G__15258.fqn:null);
switch (G__15258__$1) {
case "by-1":
return "+/-1";

break;
case "by-n":
return "+/-n";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15258__$1)].join('')));

}
})()], null);
});
app.views.counter = (function app$views$counter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$counter,(function (){var iter__5523__auto__ = (function app$views$counter_$_iter__15260(s__15261){
return (new cljs.core.LazySeq(null,(function (){
var s__15261__$1 = s__15261;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15261__$1);
if(temp__5804__auto__){
var s__15261__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15261__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15261__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15263 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15262 = (0);
while(true){
if((i__15262 < size__5522__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5521__auto__,i__15262);
cljs.core.chunk_append(b__15263,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.life_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$player_DASH_id,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__15264 = (i__15262 + (1));
i__15262 = G__15264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15263),app$views$counter_$_iter__15260(cljs.core.chunk_rest(s__15261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15263),null);
}
} else {
var id = cljs.core.first(s__15261__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.life_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$player_DASH_id,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),app$views$counter_$_iter__15260(cljs.core.rest(s__15261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_player_DASH_ids], null))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$action_DASH_panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.menu_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.amount_toggle_button], null)], null)], null);
});
app.views.menu = (function app$views$menu(){
var settings = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_settings], null)));
var app_info = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_app_DASH_info], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu_DASH__DASH_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$game], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.close], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_save_DASH_settings,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.views.form_data(e.currentTarget),cljs.core.cst$kw$hp,app.views.parse_int),cljs.core.cst$kw$merge_DASH_events_DASH_threshold,app.views.parse_int)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Starting life",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$name,"hp",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(settings)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Merge threshold (ms)",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$name,"merge-events-threshold",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$merge_DASH_events_DASH_threshold.cljs$core$IFn$_invoke$arity$1(settings)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$action,"Save & reset game"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$action,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$history], null));
})], null),"History"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$action,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_reset], null));
})], null),"Reset game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu_DASH__DASH_footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$issue_DASH_link,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/nenadalm/life-counter/issues"], null),"Report issue / request feature"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app_DASH_version,["Version: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(app_info))].join('')], null)], null)], null);
});
app.views.format_time = (function app$views$format_time(date){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getHours()).padStart((2),"0")),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getMinutes()).padStart((2),"0")),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getSeconds()).padStart((2),"0"))].join('');
});
app.views.format_history_cell = (function app$views$format_history_cell(p__15265){
var map__15266 = p__15265;
var map__15266__$1 = cljs.core.__destructure_map(map__15266);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15266__$1,cljs.core.cst$kw$time);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15266__$1,cljs.core.cst$kw$amount);
var new_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15266__$1,cljs.core.cst$kw$new_DASH_amount);
return [((((0) < amount))?"+":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount)," (",app.views.format_time((new Date(time))),") => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_amount)].join('');
});
app.views.history = (function app$views$history(){
var amount_changes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_all_DASH_amount_DASH_changes], null)));
var player0 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_player,"0"], null)));
var player1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_player,"1"], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$history,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$history_DASH__DASH_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$back,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$menu], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.back], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$game], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.close], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$history_DASH_table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__5523__auto__ = (function app$views$history_$_iter__15267(s__15268){
return (new cljs.core.LazySeq(null,(function (){
var s__15268__$1 = s__15268;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15268__$1);
if(temp__5804__auto__){
var s__15268__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15268__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15268__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15270 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15269 = (0);
while(true){
if((i__15269 < size__5522__auto__)){
var map__15271 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5521__auto__,i__15269);
var map__15271__$1 = cljs.core.__destructure_map(map__15271);
var change = map__15271__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15271__$1,cljs.core.cst$kw$time);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15271__$1,cljs.core.cst$kw$player);
cljs.core.chunk_append(b__15270,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$history_DASH_cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_color.cljs$core$IFn$_invoke$arity$1(player0),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player0)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"0"))?app.views.format_history_cell(change):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$history_DASH_cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_color.cljs$core$IFn$_invoke$arity$1(player1),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player1)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"1"))?app.views.format_history_cell(change):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,time], null)));

var G__15273 = (i__15269 + (1));
i__15269 = G__15273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15270),app$views$history_$_iter__15267(cljs.core.chunk_rest(s__15268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15270),null);
}
} else {
var map__15272 = cljs.core.first(s__15268__$2);
var map__15272__$1 = cljs.core.__destructure_map(map__15272);
var change = map__15272__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15272__$1,cljs.core.cst$kw$time);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15272__$1,cljs.core.cst$kw$player);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$history_DASH_cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_color.cljs$core$IFn$_invoke$arity$1(player0),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player0)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"0"))?app.views.format_history_cell(change):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$history_DASH_cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_color.cljs$core$IFn$_invoke$arity$1(player1),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player1)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"1"))?app.views.format_history_cell(change):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,time], null)),app$views$history_$_iter__15267(cljs.core.rest(s__15268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(amount_changes);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$history_DASH_cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_color.cljs$core$IFn$_invoke$arity$1(player0),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player0)], null)], null),cljs.core.cst$kw$initial_DASH_amount.cljs$core$IFn$_invoke$arity$1(player0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$history_DASH_cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_color.cljs$core$IFn$_invoke$arity$1(player1),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player1)], null)], null),cljs.core.cst$kw$initial_DASH_amount.cljs$core$IFn$_invoke$arity$1(player1)], null)], null)], null)], null)], null);
});
app.views.app = (function app$views$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var G__15274 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_page], null)));
var G__15274__$1 = (((G__15274 instanceof cljs.core.Keyword))?G__15274.fqn:null);
switch (G__15274__$1) {
case "menu":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.menu], null);

break;
case "game":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.counter], null);

break;
case "history":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.history], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15274__$1)].join('')));

}
})()], null);
});
