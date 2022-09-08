// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('app.subs');
goog.require('app.events');
goog.require('app.components.icons.views');
app.views.amount_modifier = (function app$views$amount_modifier(p__14181){
var map__14182 = p__14181;
var map__14182__$1 = cljs.core.__destructure_map(map__14182);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,cljs.core.cst$kw$event);
var player_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,cljs.core.cst$kw$player_DASH_id);
var on_request_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,cljs.core.cst$kw$on_DASH_request_DASH_close);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dialog$dialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,(function (el){
if(cljs.core.truth_((function (){var and__4221__auto__ = el;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(el.open);
} else {
return and__4221__auto__;
}
})())){
el.addEventListener("cancel",(function (){
return (on_request_close.cljs$core$IFn$_invoke$arity$0 ? on_request_close.cljs$core$IFn$_invoke$arity$0() : on_request_close.call(null));
}));

return el.showModal();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$dialog_DASH__DASH_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_request_close.cljs$core$IFn$_invoke$arity$0 ? on_request_close.cljs$core$IFn$_invoke$arity$0() : on_request_close.call(null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.close], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,player_id,Math.round(Number((new FormData(e.currentTarget)).get("amount")))], null));

return (on_request_close.cljs$core$IFn$_invoke$arity$0 ? on_request_close.cljs$core$IFn$_invoke$arity$0() : on_request_close.call(null));
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
app.views.amount_history = (function app$views$amount_history(p__14183){
var map__14184 = p__14183;
var map__14184__$1 = cljs.core.__destructure_map(map__14184);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14184__$1,cljs.core.cst$kw$history);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input_DASH__DASH_amount_DASH_history,(function (){var iter__4622__auto__ = (function app$views$amount_history_$_iter__14185(s__14186){
return (new cljs.core.LazySeq(null,(function (){
var s__14186__$1 = s__14186;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14186__$1);
if(temp__5804__auto__){
var s__14186__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14186__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__14186__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__14188 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__14187 = (0);
while(true){
if((i__14187 < size__4621__auto__)){
var map__14189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__14187);
var map__14189__$1 = cljs.core.__destructure_map(map__14189);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14189__$1,cljs.core.cst$kw$time);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14189__$1,cljs.core.cst$kw$amount);
cljs.core.chunk_append(b__14188,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0) < amount))?"+":null)),amount], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,time], null)));

var G__14191 = (i__14187 + (1));
i__14187 = G__14191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14188),app$views$amount_history_$_iter__14185(cljs.core.chunk_rest(s__14186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14188),null);
}
} else {
var map__14190 = cljs.core.first(s__14186__$2);
var map__14190__$1 = cljs.core.__destructure_map(map__14190);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14190__$1,cljs.core.cst$kw$time);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14190__$1,cljs.core.cst$kw$amount);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0) < amount))?"+":null)),amount], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,time], null)),app$views$amount_history_$_iter__14185(cljs.core.rest(s__14186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(history);
})()], null);
});
app.views.life_input = (function app$views$life_input(p__14192){
var map__14193 = p__14192;
var map__14193__$1 = cljs.core.__destructure_map(map__14193);
var player_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14193__$1,cljs.core.cst$kw$player_DASH_id);
var with_let14194 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let14194);
var temp__5808__auto___14198 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___14198 == null)){
} else {
var c__12610__auto___14199 = temp__5808__auto___14198;
if((with_let14194.generation === c__12610__auto___14199.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let14194.generation = c__12610__auto___14199.ratomGeneration);
}

var init14195 = (with_let14194.length === (0));
var event = ((((init14195) || (cljs.core.not(with_let14194.hasOwnProperty((0))))))?(with_let14194[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let14194[(0)]));
var res14196 = (function (){var player = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_player,player_id], null)));
var map__14197 = player;
var map__14197__$1 = cljs.core.__destructure_map(map__14197);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14197__$1,cljs.core.cst$kw$amount);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14197__$1,cljs.core.cst$kw$color);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$life_DASH_input_DASH__DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,color], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(event,cljs.core.cst$kw$app$events_SLASH_decrease_DASH_amount);
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$life_DASH_input_DASH__DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,color], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(event,cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount);
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input_DASH__DASH_amount,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,color], null)], null),amount], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.amount_history,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_amount_DASH_changes,player_id], null)))], null)], null),(function (){var temp__5804__auto__ = cljs.core.deref(event);
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
return res14196;
});
app.views.reset_button = (function app$views$reset_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$reset_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_reset], null));
})], null),"Reset"], null);
});
app.views.counter = (function app$views$counter(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$counter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.life_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$player_DASH_id,"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.life_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$player_DASH_id,"1"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.reset_button], null)], null);
});
app.views.app = (function app$views$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.counter], null)], null);
});
