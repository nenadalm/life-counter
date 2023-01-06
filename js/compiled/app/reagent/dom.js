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
var _STAR_always_update_STAR__orig_val__15263 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15264 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15264);

try{var G__15265 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__15266 = container;
var G__15267 = (function (){
var _STAR_always_update_STAR__orig_val__15268 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15269 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15269);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15268);
}});
return reagent.dom.global$module$react_dom.render(G__15265,G__15266,G__15267);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15263);
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
var G__15271 = arguments.length;
switch (G__15271) {
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

var vec__15272 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272,(1),null);
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

var seq__15276_15292 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__15277_15293 = null;
var count__15278_15294 = (0);
var i__15279_15295 = (0);
while(true){
if((i__15279_15295 < count__15278_15294)){
var vec__15286_15296 = chunk__15277_15293.cljs$core$IIndexed$_nth$arity$2(null,i__15279_15295);
var container_15297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15286_15296,(0),null);
var comp_15298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15286_15296,(1),null);
reagent.dom.re_render_component(comp_15298,container_15297);


var G__15299 = seq__15276_15292;
var G__15300 = chunk__15277_15293;
var G__15301 = count__15278_15294;
var G__15302 = (i__15279_15295 + (1));
seq__15276_15292 = G__15299;
chunk__15277_15293 = G__15300;
count__15278_15294 = G__15301;
i__15279_15295 = G__15302;
continue;
} else {
var temp__5804__auto___15303 = cljs.core.seq(seq__15276_15292);
if(temp__5804__auto___15303){
var seq__15276_15304__$1 = temp__5804__auto___15303;
if(cljs.core.chunked_seq_QMARK_(seq__15276_15304__$1)){
var c__5568__auto___15305 = cljs.core.chunk_first(seq__15276_15304__$1);
var G__15306 = cljs.core.chunk_rest(seq__15276_15304__$1);
var G__15307 = c__5568__auto___15305;
var G__15308 = cljs.core.count(c__5568__auto___15305);
var G__15309 = (0);
seq__15276_15292 = G__15306;
chunk__15277_15293 = G__15307;
count__15278_15294 = G__15308;
i__15279_15295 = G__15309;
continue;
} else {
var vec__15289_15310 = cljs.core.first(seq__15276_15304__$1);
var container_15311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15289_15310,(0),null);
var comp_15312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15289_15310,(1),null);
reagent.dom.re_render_component(comp_15312,container_15311);


var G__15313 = cljs.core.next(seq__15276_15304__$1);
var G__15314 = null;
var G__15315 = (0);
var G__15316 = (0);
seq__15276_15292 = G__15313;
chunk__15277_15293 = G__15314;
count__15278_15294 = G__15315;
i__15279_15295 = G__15316;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
