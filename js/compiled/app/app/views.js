// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
app.views.amount_modifier = (function app$views$amount_modifier(p__14197){
var map__14198 = p__14197;
var map__14198__$1 = cljs.core.__destructure_map(map__14198);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14198__$1,cljs.core.cst$kw$event);
var player_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14198__$1,cljs.core.cst$kw$player_DASH_id);
var on_request_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14198__$1,cljs.core.cst$kw$on_DASH_request_DASH_close);
var on_request_close__$1 = (function (){
app.util.hide_keyboard();

return (on_request_close.cljs$core$IFn$_invoke$arity$0 ? on_request_close.cljs$core$IFn$_invoke$arity$0() : on_request_close.call(null));
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dialog$dialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,(function (el){
if(cljs.core.truth_((function (){var and__4221__auto__ = el;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(el.open);
} else {
return and__4221__auto__;
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

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,player_id,app.views.parse_int((new FormData(e.currentTarget)).get("amount"))], null));

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
app.views.amount_history = (function app$views$amount_history(p__14199){
var map__14200 = p__14199;
var map__14200__$1 = cljs.core.__destructure_map(map__14200);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14200__$1,cljs.core.cst$kw$history);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input_DASH__DASH_amount_DASH_history,(function (){var iter__4622__auto__ = (function app$views$amount_history_$_iter__14201(s__14202){
return (new cljs.core.LazySeq(null,(function (){
var s__14202__$1 = s__14202;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14202__$1);
if(temp__5804__auto__){
var s__14202__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14202__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__14202__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__14204 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__14203 = (0);
while(true){
if((i__14203 < size__4621__auto__)){
var map__14205 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__14203);
var map__14205__$1 = cljs.core.__destructure_map(map__14205);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14205__$1,cljs.core.cst$kw$time);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14205__$1,cljs.core.cst$kw$amount);
cljs.core.chunk_append(b__14204,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0) < amount))?"+":null)),amount], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,time], null)));

var G__14207 = (i__14203 + (1));
i__14203 = G__14207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14204),app$views$amount_history_$_iter__14201(cljs.core.chunk_rest(s__14202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14204),null);
}
} else {
var map__14206 = cljs.core.first(s__14202__$2);
var map__14206__$1 = cljs.core.__destructure_map(map__14206);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14206__$1,cljs.core.cst$kw$time);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14206__$1,cljs.core.cst$kw$amount);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0) < amount))?"+":null)),amount], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,time], null)),app$views$amount_history_$_iter__14201(cljs.core.rest(s__14202__$2)));
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
app.views.life_input = (function app$views$life_input(p__14208){
var map__14209 = p__14208;
var map__14209__$1 = cljs.core.__destructure_map(map__14209);
var player_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14209__$1,cljs.core.cst$kw$player_DASH_id);
var with_let14210 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let14210);
var temp__5808__auto___14214 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___14214 == null)){
} else {
var c__12610__auto___14215 = temp__5808__auto___14214;
if((with_let14210.generation === c__12610__auto___14215.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let14210.generation = c__12610__auto___14215.ratomGeneration);
}

var init14211 = (with_let14210.length === (0));
var event = ((((init14211) || (cljs.core.not(with_let14210.hasOwnProperty((0))))))?(with_let14210[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let14210[(0)]));
var res14212 = (function (){var player = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_player,player_id], null)));
var map__14213 = player;
var map__14213__$1 = cljs.core.__destructure_map(map__14213);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14213__$1,cljs.core.cst$kw$amount);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14213__$1,cljs.core.cst$kw$color);
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14213__$1,cljs.core.cst$kw$text_DASH_color);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$life_DASH_input_DASH__DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,text_color,cljs.core.cst$kw$background_DASH_color,color], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(event,cljs.core.cst$kw$app$events_SLASH_decrease_DASH_amount);
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$life_DASH_input_DASH__DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,text_color,cljs.core.cst$kw$background_DASH_color,color], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(event,cljs.core.cst$kw$app$events_SLASH_increase_DASH_amount);
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$life_DASH_input_DASH__DASH_amount,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,text_color,cljs.core.cst$kw$background_DASH_color,color], null)], null),amount], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.amount_history,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_amount_DASH_changes,player_id], null)))], null)], null),(function (){var temp__5804__auto__ = cljs.core.deref(event);
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
return res14212;
});
app.views.reset_button = (function app$views$reset_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$menu_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$menu], null));
})], null),"Menu"], null);
});
app.views.counter = (function app$views$counter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$counter,(function (){var iter__4622__auto__ = (function app$views$counter_$_iter__14216(s__14217){
return (new cljs.core.LazySeq(null,(function (){
var s__14217__$1 = s__14217;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14217__$1);
if(temp__5804__auto__){
var s__14217__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14217__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__14217__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__14219 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__14218 = (0);
while(true){
if((i__14218 < size__4621__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__14218);
cljs.core.chunk_append(b__14219,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.life_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$player_DASH_id,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__14220 = (i__14218 + (1));
i__14218 = G__14220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14219),app$views$counter_$_iter__14216(cljs.core.chunk_rest(s__14217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14219),null);
}
} else {
var id = cljs.core.first(s__14217__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.life_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$player_DASH_id,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),app$views$counter_$_iter__14216(cljs.core.rest(s__14217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_player_DASH_ids], null))));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.reset_button], null)], null);
});
app.views.menu = (function app$views$menu(){
var settings = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_settings], null)));
var app_info = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_app_DASH_info], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu_DASH__DASH_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$game], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.close], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_save_DASH_settings,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hp,app.views.parse_int((new FormData(e.currentTarget)).get("hp"))], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Starting life",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$name,"hp",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(settings)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$action,"Save & reset game"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$action,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_reset], null));
})], null),"Reset game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu_DASH__DASH_footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$issue_DASH_link,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/nenadalm/life-counter/issues"], null),"Report issue / request feature"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app_DASH_version,["Version: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(app_info))].join('')], null)], null)], null);
});
app.views.app = (function app$views$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var G__14221 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_page], null)));
var G__14221__$1 = (((G__14221 instanceof cljs.core.Keyword))?G__14221.fqn:null);
switch (G__14221__$1) {
case "menu":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.menu], null);

break;
case "game":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.counter], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14221__$1)].join('')));

}
})()], null);
});
