// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
var _STAR_always_update_STAR__orig_val__14185 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14186 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14186);

try{var G__14187 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__14188 = container;
var G__14189 = (function (){
var _STAR_always_update_STAR__orig_val__14190 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14191 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14191);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14190);
}});
return reagent.dom.global$module$react_dom.render(G__14187,G__14188,G__14189);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14185);
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
var G__14193 = arguments.length;
switch (G__14193) {
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

var vec__14194 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14194,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14194,(1),null);
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

var seq__14198_14214 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__14199_14215 = null;
var count__14200_14216 = (0);
var i__14201_14217 = (0);
while(true){
if((i__14201_14217 < count__14200_14216)){
var vec__14208_14218 = chunk__14199_14215.cljs$core$IIndexed$_nth$arity$2(null,i__14201_14217);
var container_14219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14208_14218,(0),null);
var comp_14220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14208_14218,(1),null);
reagent.dom.re_render_component(comp_14220,container_14219);


var G__14221 = seq__14198_14214;
var G__14222 = chunk__14199_14215;
var G__14223 = count__14200_14216;
var G__14224 = (i__14201_14217 + (1));
seq__14198_14214 = G__14221;
chunk__14199_14215 = G__14222;
count__14200_14216 = G__14223;
i__14201_14217 = G__14224;
continue;
} else {
var temp__5804__auto___14225 = cljs.core.seq(seq__14198_14214);
if(temp__5804__auto___14225){
var seq__14198_14226__$1 = temp__5804__auto___14225;
if(cljs.core.chunked_seq_QMARK_(seq__14198_14226__$1)){
var c__4649__auto___14227 = cljs.core.chunk_first(seq__14198_14226__$1);
var G__14228 = cljs.core.chunk_rest(seq__14198_14226__$1);
var G__14229 = c__4649__auto___14227;
var G__14230 = cljs.core.count(c__4649__auto___14227);
var G__14231 = (0);
seq__14198_14214 = G__14228;
chunk__14199_14215 = G__14229;
count__14200_14216 = G__14230;
i__14201_14217 = G__14231;
continue;
} else {
var vec__14211_14232 = cljs.core.first(seq__14198_14226__$1);
var container_14233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14211_14232,(0),null);
var comp_14234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14211_14232,(1),null);
reagent.dom.re_render_component(comp_14234,container_14233);


var G__14235 = cljs.core.next(seq__14198_14226__$1);
var G__14236 = null;
var G__14237 = (0);
var G__14238 = (0);
seq__14198_14214 = G__14235;
chunk__14199_14215 = G__14236;
count__14200_14216 = G__14237;
i__14201_14217 = G__14238;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
