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
var _STAR_always_update_STAR__orig_val__14183 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14184 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14184);

try{var G__14185 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__14186 = container;
var G__14187 = (function (){
var _STAR_always_update_STAR__orig_val__14188 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14189 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14189);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14188);
}});
return reagent.dom.global$module$react_dom.render(G__14185,G__14186,G__14187);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14183);
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
var G__14191 = arguments.length;
switch (G__14191) {
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

var vec__14192 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14192,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14192,(1),null);
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

var seq__14196_14212 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__14197_14213 = null;
var count__14198_14214 = (0);
var i__14199_14215 = (0);
while(true){
if((i__14199_14215 < count__14198_14214)){
var vec__14206_14216 = chunk__14197_14213.cljs$core$IIndexed$_nth$arity$2(null,i__14199_14215);
var container_14217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14206_14216,(0),null);
var comp_14218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14206_14216,(1),null);
reagent.dom.re_render_component(comp_14218,container_14217);


var G__14219 = seq__14196_14212;
var G__14220 = chunk__14197_14213;
var G__14221 = count__14198_14214;
var G__14222 = (i__14199_14215 + (1));
seq__14196_14212 = G__14219;
chunk__14197_14213 = G__14220;
count__14198_14214 = G__14221;
i__14199_14215 = G__14222;
continue;
} else {
var temp__5804__auto___14223 = cljs.core.seq(seq__14196_14212);
if(temp__5804__auto___14223){
var seq__14196_14224__$1 = temp__5804__auto___14223;
if(cljs.core.chunked_seq_QMARK_(seq__14196_14224__$1)){
var c__4649__auto___14225 = cljs.core.chunk_first(seq__14196_14224__$1);
var G__14226 = cljs.core.chunk_rest(seq__14196_14224__$1);
var G__14227 = c__4649__auto___14225;
var G__14228 = cljs.core.count(c__4649__auto___14225);
var G__14229 = (0);
seq__14196_14212 = G__14226;
chunk__14197_14213 = G__14227;
count__14198_14214 = G__14228;
i__14199_14215 = G__14229;
continue;
} else {
var vec__14209_14230 = cljs.core.first(seq__14196_14224__$1);
var container_14231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14209_14230,(0),null);
var comp_14232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14209_14230,(1),null);
reagent.dom.re_render_component(comp_14232,container_14231);


var G__14233 = cljs.core.next(seq__14196_14224__$1);
var G__14234 = null;
var G__14235 = (0);
var G__14236 = (0);
seq__14196_14212 = G__14233;
chunk__14197_14213 = G__14234;
count__14198_14214 = G__14235;
i__14199_14215 = G__14236;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
