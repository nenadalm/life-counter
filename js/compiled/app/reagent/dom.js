// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__15278 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15279 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15279);

try{var G__15280 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__15281 = container;
var G__15282 = (function (){
var _STAR_always_update_STAR__orig_val__15283 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15284 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15284);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15283);
}});
return reagent.dom.global$module$react_dom.render(G__15280,G__15281,G__15282);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15278);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__15286 = arguments.length;
switch (G__15286) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__15287 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__15291_15307 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__15292_15308 = null;
var count__15293_15309 = (0);
var i__15294_15310 = (0);
while(true){
if((i__15294_15310 < count__15293_15309)){
var vec__15301_15311 = chunk__15292_15308.cljs$core$IIndexed$_nth$arity$2(null,i__15294_15310);
var container_15312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301_15311,(0),null);
var comp_15313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301_15311,(1),null);
reagent.dom.re_render_component(comp_15313,container_15312);


var G__15314 = seq__15291_15307;
var G__15315 = chunk__15292_15308;
var G__15316 = count__15293_15309;
var G__15317 = (i__15294_15310 + (1));
seq__15291_15307 = G__15314;
chunk__15292_15308 = G__15315;
count__15293_15309 = G__15316;
i__15294_15310 = G__15317;
continue;
} else {
var temp__5804__auto___15318 = cljs.core.seq(seq__15291_15307);
if(temp__5804__auto___15318){
var seq__15291_15319__$1 = temp__5804__auto___15318;
if(cljs.core.chunked_seq_QMARK_(seq__15291_15319__$1)){
var c__5568__auto___15320 = cljs.core.chunk_first(seq__15291_15319__$1);
var G__15321 = cljs.core.chunk_rest(seq__15291_15319__$1);
var G__15322 = c__5568__auto___15320;
var G__15323 = cljs.core.count(c__5568__auto___15320);
var G__15324 = (0);
seq__15291_15307 = G__15321;
chunk__15292_15308 = G__15322;
count__15293_15309 = G__15323;
i__15294_15310 = G__15324;
continue;
} else {
var vec__15304_15325 = cljs.core.first(seq__15291_15319__$1);
var container_15326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304_15325,(0),null);
var comp_15327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304_15325,(1),null);
reagent.dom.re_render_component(comp_15327,container_15326);


var G__15328 = cljs.core.next(seq__15291_15319__$1);
var G__15329 = null;
var G__15330 = (0);
var G__15331 = (0);
seq__15291_15307 = G__15328;
chunk__15292_15308 = G__15329;
count__15293_15309 = G__15330;
i__15294_15310 = G__15331;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
