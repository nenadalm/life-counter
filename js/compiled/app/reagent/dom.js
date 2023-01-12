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
var _STAR_always_update_STAR__orig_val__15272 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15273 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15273);

try{var G__15274 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__15275 = container;
var G__15276 = (function (){
var _STAR_always_update_STAR__orig_val__15277 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15278 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15278);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15277);
}});
return reagent.dom.global$module$react_dom.render(G__15274,G__15275,G__15276);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15272);
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
var G__15280 = arguments.length;
switch (G__15280) {
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

var vec__15281 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281,(1),null);
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

var seq__15285_15301 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__15286_15302 = null;
var count__15287_15303 = (0);
var i__15288_15304 = (0);
while(true){
if((i__15288_15304 < count__15287_15303)){
var vec__15295_15305 = chunk__15286_15302.cljs$core$IIndexed$_nth$arity$2(null,i__15288_15304);
var container_15306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295_15305,(0),null);
var comp_15307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295_15305,(1),null);
reagent.dom.re_render_component(comp_15307,container_15306);


var G__15308 = seq__15285_15301;
var G__15309 = chunk__15286_15302;
var G__15310 = count__15287_15303;
var G__15311 = (i__15288_15304 + (1));
seq__15285_15301 = G__15308;
chunk__15286_15302 = G__15309;
count__15287_15303 = G__15310;
i__15288_15304 = G__15311;
continue;
} else {
var temp__5804__auto___15312 = cljs.core.seq(seq__15285_15301);
if(temp__5804__auto___15312){
var seq__15285_15313__$1 = temp__5804__auto___15312;
if(cljs.core.chunked_seq_QMARK_(seq__15285_15313__$1)){
var c__5568__auto___15314 = cljs.core.chunk_first(seq__15285_15313__$1);
var G__15315 = cljs.core.chunk_rest(seq__15285_15313__$1);
var G__15316 = c__5568__auto___15314;
var G__15317 = cljs.core.count(c__5568__auto___15314);
var G__15318 = (0);
seq__15285_15301 = G__15315;
chunk__15286_15302 = G__15316;
count__15287_15303 = G__15317;
i__15288_15304 = G__15318;
continue;
} else {
var vec__15298_15319 = cljs.core.first(seq__15285_15313__$1);
var container_15320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15298_15319,(0),null);
var comp_15321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15298_15319,(1),null);
reagent.dom.re_render_component(comp_15321,container_15320);


var G__15322 = cljs.core.next(seq__15285_15313__$1);
var G__15323 = null;
var G__15324 = (0);
var G__15325 = (0);
seq__15285_15301 = G__15322;
chunk__15286_15302 = G__15323;
count__15287_15303 = G__15324;
i__15288_15304 = G__15325;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
