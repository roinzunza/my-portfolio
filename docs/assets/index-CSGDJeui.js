(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function d(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(p){if(p.ep)return;p.ep=!0;const h=d(p);fetch(p.href,h)}})();function Cp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qc={exports:{}},Un={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Oh(){if(ap)return Un;ap=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(u,p,h){var b=null;if(h!==void 0&&(b=""+h),p.key!==void 0&&(b=""+p.key),"key"in p){h={};for(var E in p)E!=="key"&&(h[E]=p[E])}else h=p;return p=h.ref,{$$typeof:r,type:u,key:b,ref:p!==void 0?p:null,props:h}}return Un.Fragment=o,Un.jsx=d,Un.jsxs=d,Un}var np;function Ch(){return np||(np=1,qc.exports=Oh()),qc.exports}var s=Ch(),Hc={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function kh(){if(ip)return ee;ip=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.iterator;function k(v){return v===null||typeof v!="object"?null:(v=C&&v[C]||v["@@iterator"],typeof v=="function"?v:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function G(v,O,H){this.props=v,this.context=O,this.refs=Y,this.updater=H||V}G.prototype.isReactComponent={},G.prototype.setState=function(v,O){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,O,"setState")},G.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function B(){}B.prototype=G.prototype;function re(v,O,H){this.props=v,this.context=O,this.refs=Y,this.updater=H||V}var I=re.prototype=new B;I.constructor=re,X(I,G.prototype),I.isPureReactComponent=!0;var je=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},ke=Object.prototype.hasOwnProperty;function _e(v,O,H,U,Z,se){return H=se.ref,{$$typeof:r,type:v,key:O,ref:H!==void 0?H:null,props:se}}function Be(v,O){return _e(v.type,O,void 0,void 0,void 0,v.props)}function we(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function lt(v){var O={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(H){return O[H]})}var ht=/\/+/g;function Ve(v,O){return typeof v=="object"&&v!==null&&v.key!=null?lt(""+v.key):O.toString(36)}function Rl(){}function Ml(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Rl,Rl):(v.status="pending",v.then(function(O){v.status==="pending"&&(v.status="fulfilled",v.value=O)},function(O){v.status==="pending"&&(v.status="rejected",v.reason=O)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function Ze(v,O,H,U,Z){var se=typeof v;(se==="undefined"||se==="boolean")&&(v=null);var P=!1;if(v===null)P=!0;else switch(se){case"bigint":case"string":case"number":P=!0;break;case"object":switch(v.$$typeof){case r:case o:P=!0;break;case R:return P=v._init,Ze(P(v._payload),O,H,U,Z)}}if(P)return Z=Z(v),P=U===""?"."+Ve(v,0):U,je(Z)?(H="",P!=null&&(H=P.replace(ht,"$&/")+"/"),Ze(Z,O,H,"",function(ll){return ll})):Z!=null&&(we(Z)&&(Z=Be(Z,H+(Z.key==null||v&&v.key===Z.key?"":(""+Z.key).replace(ht,"$&/")+"/")+P)),O.push(Z)),1;P=0;var at=U===""?".":U+":";if(je(v))for(var be=0;be<v.length;be++)U=v[be],se=at+Ve(U,be),P+=Ze(U,O,H,se,Z);else if(be=k(v),typeof be=="function")for(v=be.call(v),be=0;!(U=v.next()).done;)U=U.value,se=at+Ve(U,be++),P+=Ze(U,O,H,se,Z);else if(se==="object"){if(typeof v.then=="function")return Ze(Ml(v),O,H,U,Z);throw O=String(v),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return P}function M(v,O,H){if(v==null)return v;var U=[],Z=0;return Ze(v,U,"","",function(se){return O.call(H,se,Z++)}),U}function q(v){if(v._status===-1){var O=v._result;O=O(),O.then(function(H){(v._status===0||v._status===-1)&&(v._status=1,v._result=H)},function(H){(v._status===0||v._status===-1)&&(v._status=2,v._result=H)}),v._status===-1&&(v._status=0,v._result=O)}if(v._status===1)return v._result.default;throw v._result}var $=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function ge(){}return ee.Children={map:M,forEach:function(v,O,H){M(v,function(){O.apply(this,arguments)},H)},count:function(v){var O=0;return M(v,function(){O++}),O},toArray:function(v){return M(v,function(O){return O})||[]},only:function(v){if(!we(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ee.Component=G,ee.Fragment=d,ee.Profiler=p,ee.PureComponent=re,ee.StrictMode=u,ee.Suspense=x,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(v){return F.H.useMemoCache(v)}},ee.cache=function(v){return function(){return v.apply(null,arguments)}},ee.cloneElement=function(v,O,H){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var U=X({},v.props),Z=v.key,se=void 0;if(O!=null)for(P in O.ref!==void 0&&(se=void 0),O.key!==void 0&&(Z=""+O.key),O)!ke.call(O,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&O.ref===void 0||(U[P]=O[P]);var P=arguments.length-2;if(P===1)U.children=H;else if(1<P){for(var at=Array(P),be=0;be<P;be++)at[be]=arguments[be+2];U.children=at}return _e(v.type,Z,void 0,void 0,se,U)},ee.createContext=function(v){return v={$$typeof:b,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},ee.createElement=function(v,O,H){var U,Z={},se=null;if(O!=null)for(U in O.key!==void 0&&(se=""+O.key),O)ke.call(O,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(Z[U]=O[U]);var P=arguments.length-2;if(P===1)Z.children=H;else if(1<P){for(var at=Array(P),be=0;be<P;be++)at[be]=arguments[be+2];Z.children=at}if(v&&v.defaultProps)for(U in P=v.defaultProps,P)Z[U]===void 0&&(Z[U]=P[U]);return _e(v,se,void 0,void 0,null,Z)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(v){return{$$typeof:E,render:v}},ee.isValidElement=we,ee.lazy=function(v){return{$$typeof:R,_payload:{_status:-1,_result:v},_init:q}},ee.memo=function(v,O){return{$$typeof:g,type:v,compare:O===void 0?null:O}},ee.startTransition=function(v){var O=F.T,H={};F.T=H;try{var U=v(),Z=F.S;Z!==null&&Z(H,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(ge,$)}catch(se){$(se)}finally{F.T=O}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(v){return F.H.use(v)},ee.useActionState=function(v,O,H){return F.H.useActionState(v,O,H)},ee.useCallback=function(v,O){return F.H.useCallback(v,O)},ee.useContext=function(v){return F.H.useContext(v)},ee.useDebugValue=function(){},ee.useDeferredValue=function(v,O){return F.H.useDeferredValue(v,O)},ee.useEffect=function(v,O,H){var U=F.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(v,O)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(v,O,H){return F.H.useImperativeHandle(v,O,H)},ee.useInsertionEffect=function(v,O){return F.H.useInsertionEffect(v,O)},ee.useLayoutEffect=function(v,O){return F.H.useLayoutEffect(v,O)},ee.useMemo=function(v,O){return F.H.useMemo(v,O)},ee.useOptimistic=function(v,O){return F.H.useOptimistic(v,O)},ee.useReducer=function(v,O,H){return F.H.useReducer(v,O,H)},ee.useRef=function(v){return F.H.useRef(v)},ee.useState=function(v){return F.H.useState(v)},ee.useSyncExternalStore=function(v,O,H){return F.H.useSyncExternalStore(v,O,H)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.1",ee}var rp;function au(){return rp||(rp=1,Hc.exports=kh()),Hc.exports}var T=au();const Al=Cp(T);var Lc={exports:{}},qn={},Yc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function Bh(){return sp||(sp=1,function(r){function o(M,q){var $=M.length;M.push(q);e:for(;0<$;){var ge=$-1>>>1,v=M[ge];if(0<p(v,q))M[ge]=q,M[$]=v,$=ge;else break e}}function d(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var q=M[0],$=M.pop();if($!==q){M[0]=$;e:for(var ge=0,v=M.length,O=v>>>1;ge<O;){var H=2*(ge+1)-1,U=M[H],Z=H+1,se=M[Z];if(0>p(U,$))Z<v&&0>p(se,U)?(M[ge]=se,M[Z]=$,ge=Z):(M[ge]=U,M[H]=$,ge=H);else if(Z<v&&0>p(se,$))M[ge]=se,M[Z]=$,ge=Z;else break e}}return q}function p(M,q){var $=M.sortIndex-q.sortIndex;return $!==0?$:M.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var b=Date,E=b.now();r.unstable_now=function(){return b.now()-E}}var x=[],g=[],R=1,C=null,k=3,V=!1,X=!1,Y=!1,G=!1,B=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function je(M){for(var q=d(g);q!==null;){if(q.callback===null)u(g);else if(q.startTime<=M)u(g),q.sortIndex=q.expirationTime,o(x,q);else break;q=d(g)}}function F(M){if(Y=!1,je(M),!X)if(d(x)!==null)X=!0,ke||(ke=!0,Ve());else{var q=d(g);q!==null&&Ze(F,q.startTime-M)}}var ke=!1,_e=-1,Be=5,we=-1;function lt(){return G?!0:!(r.unstable_now()-we<Be)}function ht(){if(G=!1,ke){var M=r.unstable_now();we=M;var q=!0;try{e:{X=!1,Y&&(Y=!1,re(_e),_e=-1),V=!0;var $=k;try{t:{for(je(M),C=d(x);C!==null&&!(C.expirationTime>M&&lt());){var ge=C.callback;if(typeof ge=="function"){C.callback=null,k=C.priorityLevel;var v=ge(C.expirationTime<=M);if(M=r.unstable_now(),typeof v=="function"){C.callback=v,je(M),q=!0;break t}C===d(x)&&u(x),je(M)}else u(x);C=d(x)}if(C!==null)q=!0;else{var O=d(g);O!==null&&Ze(F,O.startTime-M),q=!1}}break e}finally{C=null,k=$,V=!1}q=void 0}}finally{q?Ve():ke=!1}}}var Ve;if(typeof I=="function")Ve=function(){I(ht)};else if(typeof MessageChannel<"u"){var Rl=new MessageChannel,Ml=Rl.port2;Rl.port1.onmessage=ht,Ve=function(){Ml.postMessage(null)}}else Ve=function(){B(ht,0)};function Ze(M,q){_e=B(function(){M(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(M){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var $=k;k=q;try{return M()}finally{k=$}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=k;k=M;try{return q()}finally{k=$}},r.unstable_scheduleCallback=function(M,q,$){var ge=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,M){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=$+v,M={id:R++,callback:q,priorityLevel:M,startTime:$,expirationTime:v,sortIndex:-1},$>ge?(M.sortIndex=$,o(g,M),d(x)===null&&M===d(g)&&(Y?(re(_e),_e=-1):Y=!0,Ze(F,$-ge))):(M.sortIndex=v,o(x,M),X||V||(X=!0,ke||(ke=!0,Ve()))),M},r.unstable_shouldYield=lt,r.unstable_wrapCallback=function(M){var q=k;return function(){var $=k;k=q;try{return M.apply(this,arguments)}finally{k=$}}}}(Gc)),Gc}var cp;function Uh(){return cp||(cp=1,Yc.exports=Bh()),Yc.exports}var Qc={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function qh(){if(up)return $e;up=1;var r=au();function o(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)g+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(x,g,R){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:C==null?null:""+C,children:x,containerInfo:g,implementation:R}}var b=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,$e.createPortal=function(x,g){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return h(x,g,null,R)},$e.flushSync=function(x){var g=b.T,R=u.p;try{if(b.T=null,u.p=2,x)return x()}finally{b.T=g,u.p=R,u.d.f()}},$e.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(x,g))},$e.prefetchDNS=function(x){typeof x=="string"&&u.d.D(x)},$e.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var R=g.as,C=E(R,g.crossOrigin),k=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;R==="style"?u.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:k,fetchPriority:V}):R==="script"&&u.d.X(x,{crossOrigin:C,integrity:k,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},$e.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var R=E(g.as,g.crossOrigin);u.d.M(x,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(x)},$e.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var R=g.as,C=E(R,g.crossOrigin);u.d.L(x,R,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},$e.preloadModule=function(x,g){if(typeof x=="string")if(g){var R=E(g.as,g.crossOrigin);u.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(x)},$e.requestFormReset=function(x){u.d.r(x)},$e.unstable_batchedUpdates=function(x,g){return x(g)},$e.useFormState=function(x,g,R){return b.H.useFormState(x,g,R)},$e.useFormStatus=function(){return b.H.useHostTransitionStatus()},$e.version="19.1.1",$e}var op;function Hh(){if(op)return Qc.exports;op=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Qc.exports=qh(),Qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function Lh(){if(fp)return qn;fp=1;var r=Uh(),o=au(),d=Hh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(h(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return E(n),e;if(i===a)return E(n),t;i=i.sibling}throw Error(u(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,f=n.child;f;){if(f===l){c=!0,l=n,a=i;break}if(f===a){c=!0,a=n,l=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===l){c=!0,l=i,a=n;break}if(f===a){c=!0,a=i,l=n;break}f=f.sibling}if(!c)throw Error(u(189))}}if(l.alternate!==a)throw Error(u(190))}if(l.tag!==3)throw Error(u(188));return l.stateNode.current===l?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,C=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),re=Symbol.for("react.consumer"),I=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),lt=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var Rl=Symbol.for("react.client.reference");function Ml(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Rl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case F:return"Suspense";case ke:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case I:return(e.displayName||"Context")+".Provider";case re:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _e:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}var Ze=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],v=-1;function O(e){return{current:e}}function H(e){0>v||(e.current=ge[v],ge[v]=null,v--)}function U(e,t){v++,ge[v]=e.current,e.current=t}var Z=O(null),se=O(null),P=O(null),at=O(null);function be(e,t){switch(U(P,t),U(se,e),U(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Dd(t),e=_d(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(Z),U(Z,e)}function ll(){H(Z),H(se),H(P)}function zr(e){e.memoizedState!==null&&U(at,e);var t=Z.current,l=_d(t,e.type);t!==l&&(U(se,e),U(Z,l))}function Zn(e){se.current===e&&(H(Z),H(se)),at.current===e&&(H(at),_n._currentValue=$)}var Nr=Object.prototype.hasOwnProperty,wr=r.unstable_scheduleCallback,Er=r.unstable_cancelCallback,f1=r.unstable_shouldYield,d1=r.unstable_requestPaint,Tt=r.unstable_now,p1=r.unstable_getCurrentPriorityLevel,uu=r.unstable_ImmediatePriority,ou=r.unstable_UserBlockingPriority,Kn=r.unstable_NormalPriority,h1=r.unstable_LowPriority,fu=r.unstable_IdlePriority,m1=r.log,g1=r.unstable_setDisableYieldValue,Ha=null,nt=null;function al(e){if(typeof m1=="function"&&g1(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Ha,e)}catch{}}var it=Math.clz32?Math.clz32:y1,x1=Math.log,v1=Math.LN2;function y1(e){return e>>>=0,e===0?32:31-(x1(e)/v1|0)|0}var Jn=256,$n=4194304;function Dl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=Dl(a):(c&=f,c!==0?n=Dl(c):l||(l=f&~e,l!==0&&(n=Dl(l))))):(f=a&~i,f!==0?n=Dl(f):c!==0?n=Dl(c):l||(l=a&~e,l!==0&&(n=Dl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function La(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function b1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function du(){var e=Jn;return Jn<<=1,(Jn&4194048)===0&&(Jn=256),e}function pu(){var e=$n;return $n<<=1,($n&62914560)===0&&($n=4194304),e}function Tr(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ya(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function S1(e,t,l,a,n,i){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,m=e.expirationTimes,z=e.hiddenUpdates;for(l=c&~l;0<l;){var A=31-it(l),_=1<<A;f[A]=0,m[A]=-1;var N=z[A];if(N!==null)for(z[A]=null,A=0;A<N.length;A++){var w=N[A];w!==null&&(w.lane&=-536870913)}l&=~_}a!==0&&hu(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function hu(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&4194090}function mu(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-it(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Ar(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gu(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Fd(e.type))}function j1(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var nl=Math.random().toString(36).slice(2),Ke="__reactFiber$"+nl,Fe="__reactProps$"+nl,Fl="__reactContainer$"+nl,Mr="__reactEvents$"+nl,z1="__reactListeners$"+nl,N1="__reactHandles$"+nl,xu="__reactResources$"+nl,Ga="__reactMarker$"+nl;function Dr(e){delete e[Ke],delete e[Fe],delete e[Mr],delete e[z1],delete e[N1]}function Pl(e){var t=e[Ke];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Fl]||l[Ke]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Bd(e);e!==null;){if(l=e[Ke])return l;e=Bd(e)}return t}e=l,l=e.parentNode}return null}function Il(e){if(e=e[Ke]||e[Fl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Qa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function ea(e){var t=e[xu];return t||(t=e[xu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Ga]=!0}var vu=new Set,yu={};function _l(e,t){ta(e,t),ta(e+"Capture",t)}function ta(e,t){for(yu[e]=t,e=0;e<t.length;e++)vu.add(t[e])}var w1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bu={},Su={};function E1(e){return Nr.call(Su,e)?!0:Nr.call(bu,e)?!1:w1.test(e)?Su[e]=!0:(bu[e]=!0,!1)}function Fn(e,t,l){if(E1(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Pn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Ut(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}var _r,ju;function la(e){if(_r===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);_r=t&&t[1]||"",ju=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_r+e+ju}var Or=!1;function Cr(e,t){if(!e||Or)return"";Or=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(w){var N=w}Reflect.construct(e,[],_)}else{try{_.call()}catch(w){N=w}e.call(_.prototype)}}else{try{throw Error()}catch(w){N=w}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(w){if(w&&N&&typeof w.stack=="string")return[w.stack,N.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var m=c.split(`
`),z=f.split(`
`);for(n=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(a===m.length||n===z.length)for(a=m.length-1,n=z.length-1;1<=a&&0<=n&&m[a]!==z[n];)n--;for(;1<=a&&0<=n;a--,n--)if(m[a]!==z[n]){if(a!==1||n!==1)do if(a--,n--,0>n||m[a]!==z[n]){var A=`
`+m[a].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=a&&0<=n);break}}}finally{Or=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?la(l):""}function T1(e){switch(e.tag){case 26:case 27:case 5:return la(e.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return Cr(e.type,!1);case 11:return Cr(e.type.render,!1);case 1:return Cr(e.type,!0);case 31:return la("Activity");default:return""}}function zu(e){try{var t="";do t+=T1(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A1(e){var t=Nu(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function In(e){e._valueTracker||(e._valueTracker=A1(e))}function wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Nu(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var R1=/[\n"\\]/g;function gt(e){return e.replace(R1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kr(e,t,l,a,n,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+mt(t)):e.value!==""+mt(t)&&(e.value=""+mt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Br(e,c,mt(t)):l!=null?Br(e,c,mt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+mt(f):e.removeAttribute("name")}function Eu(e,t,l,a,n,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;l=l!=null?""+mt(l):"",t=t!=null?""+mt(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Br(e,t,l){t==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function aa(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+mt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Tu(e,t,l){if(t!=null&&(t=""+mt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+mt(l):""}function Au(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(u(92));if(Ze(a)){if(1<a.length)throw Error(u(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=mt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a)}function na(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var M1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ru(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||M1.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Mu(e,t,l){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Ru(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Ru(e,i,t[i])}function Ur(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return _1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qr=null;function Hr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,ra=null;function Du(e){var t=Il(e);if(t&&(e=t.stateNode)){var l=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(kr(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Fe]||null;if(!n)throw Error(u(90));kr(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&wu(a)}break e;case"textarea":Tu(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&aa(e,!!l.multiple,t,!1)}}}var Lr=!1;function _u(e,t,l){if(Lr)return e(t,l);Lr=!0;try{var a=e(t);return a}finally{if(Lr=!1,(ia!==null||ra!==null)&&(Li(),ia&&(t=ia,e=ra,ra=ia=null,Du(t),e)))for(t=0;t<e.length;t++)Du(e[t])}}function Xa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Fe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(u(231,t,typeof l));return l}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yr=!1;if(qt)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{Yr=!1}var il=null,Gr=null,li=null;function Ou(){if(li)return li;var e,t=Gr,l=t.length,a,n="value"in il?il.value:il.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[i-a];a++);return li=n.slice(e,1<a?1-a:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Cu(){return!1}function Pe(e){function t(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:Cu,this.isPropagationStopped=Cu,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var Ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=Pe(Ol),Za=R({},Ol,{view:0,detail:0}),O1=Pe(Za),Qr,Xr,Ka,ri=R({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ka&&(Ka&&e.type==="mousemove"?(Qr=e.screenX-Ka.screenX,Xr=e.screenY-Ka.screenY):Xr=Qr=0,Ka=e),Qr)},movementY:function(e){return"movementY"in e?e.movementY:Xr}}),ku=Pe(ri),C1=R({},ri,{dataTransfer:0}),k1=Pe(C1),B1=R({},Za,{relatedTarget:0}),Vr=Pe(B1),U1=R({},Ol,{animationName:0,elapsedTime:0,pseudoElement:0}),q1=Pe(U1),H1=R({},Ol,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L1=Pe(H1),Y1=R({},Ol,{data:0}),Bu=Pe(Y1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X1[e])?!!t[e]:!1}function Zr(){return V1}var Z1=R({},Za,{key:function(e){if(e.key){var t=G1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zr,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K1=Pe(Z1),J1=R({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uu=Pe(J1),$1=R({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zr}),W1=Pe($1),F1=R({},Ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),P1=Pe(F1),I1=R({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=Pe(I1),t0=R({},Ol,{newState:0,oldState:0}),l0=Pe(t0),a0=[9,13,27,32],Kr=qt&&"CompositionEvent"in window,Ja=null;qt&&"documentMode"in document&&(Ja=document.documentMode);var n0=qt&&"TextEvent"in window&&!Ja,qu=qt&&(!Kr||Ja&&8<Ja&&11>=Ja),Hu=" ",Lu=!1;function Yu(e,t){switch(e){case"keyup":return a0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sa=!1;function i0(e,t){switch(e){case"compositionend":return Gu(t);case"keypress":return t.which!==32?null:(Lu=!0,Hu);case"textInput":return e=t.data,e===Hu&&Lu?null:e;default:return null}}function r0(e,t){if(sa)return e==="compositionend"||!Kr&&Yu(e,t)?(e=Ou(),li=Gr=il=null,sa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s0[e.type]:t==="textarea"}function Xu(e,t,l,a){ia?ra?ra.push(a):ra=[a]:ia=a,t=Zi(t,"onChange"),0<t.length&&(l=new ii("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var $a=null,Wa=null;function c0(e){Ed(e,0)}function si(e){var t=Qa(e);if(wu(t))return e}function Vu(e,t){if(e==="change")return t}var Zu=!1;if(qt){var Jr;if(qt){var $r="oninput"in document;if(!$r){var Ku=document.createElement("div");Ku.setAttribute("oninput","return;"),$r=typeof Ku.oninput=="function"}Jr=$r}else Jr=!1;Zu=Jr&&(!document.documentMode||9<document.documentMode)}function Ju(){$a&&($a.detachEvent("onpropertychange",$u),Wa=$a=null)}function $u(e){if(e.propertyName==="value"&&si(Wa)){var t=[];Xu(t,Wa,e,Hr(e)),_u(c0,t)}}function u0(e,t,l){e==="focusin"?(Ju(),$a=t,Wa=l,$a.attachEvent("onpropertychange",$u)):e==="focusout"&&Ju()}function o0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(Wa)}function f0(e,t){if(e==="click")return si(t)}function d0(e,t){if(e==="input"||e==="change")return si(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:p0;function Fa(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Nr.call(t,n)||!rt(e[n],t[n]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,t){var l=Wu(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Wu(l)}}function Pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ei(e.document)}return t}function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var h0=qt&&"documentMode"in document&&11>=document.documentMode,ca=null,Fr=null,Pa=null,Pr=!1;function eo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Pr||ca==null||ca!==ei(a)||(a=ca,"selectionStart"in a&&Wr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Pa&&Fa(Pa,a)||(Pa=a,a=Zi(Fr,"onSelect"),0<a.length&&(t=new ii("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ca)))}function Cl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ua={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},Ir={},to={};qt&&(to=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function kl(e){if(Ir[e])return Ir[e];if(!ua[e])return e;var t=ua[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in to)return Ir[e]=t[l];return e}var lo=kl("animationend"),ao=kl("animationiteration"),no=kl("animationstart"),m0=kl("transitionrun"),g0=kl("transitionstart"),x0=kl("transitioncancel"),io=kl("transitionend"),ro=new Map,es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");es.push("scrollEnd");function Nt(e,t){ro.set(e,t),_l(t,[e])}var so=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var l=so.get(e);return l!==void 0?l:(t={value:e,source:t,stack:zu(t)},so.set(e,t),t)}return{value:e,source:t,stack:zu(t)}}var vt=[],oa=0,ts=0;function ci(){for(var e=oa,t=ts=oa=0;t<e;){var l=vt[t];vt[t++]=null;var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&co(l,n,i)}}function ui(e,t,l,a){vt[oa++]=e,vt[oa++]=t,vt[oa++]=l,vt[oa++]=a,ts|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ls(e,t,l,a){return ui(e,t,l,a),oi(e)}function fa(e,t){return ui(e,null,null,t),oi(e)}function co(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-it(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function oi(e){if(50<Nn)throw Nn=0,cc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var da={};function v0(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,l,a){return new v0(e,t,l,a)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var l=e.alternate;return l===null?(l=st(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function uo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,l,a,n,i){var c=0;if(a=e,typeof e=="function")as(e)&&(c=1);else if(typeof e=="string")c=bh(e,l,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=st(31,l,t,n),e.elementType=we,e.lanes=i,e;case X:return Bl(l.children,n,i,t);case Y:c=8,n|=24;break;case G:return e=st(12,l,t,n|2),e.elementType=G,e.lanes=i,e;case F:return e=st(13,l,t,n),e.elementType=F,e.lanes=i,e;case ke:return e=st(19,l,t,n),e.elementType=ke,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:case I:c=10;break e;case re:c=9;break e;case je:c=11;break e;case _e:c=14;break e;case Be:c=16,a=null;break e}c=29,l=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=st(c,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Bl(e,t,l,a){return e=st(7,e,a,t),e.lanes=l,e}function ns(e,t,l){return e=st(6,e,null,t),e.lanes=l,e}function is(e,t,l){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pa=[],ha=0,di=null,pi=0,yt=[],bt=0,Ul=null,Lt=1,Yt="";function ql(e,t){pa[ha++]=pi,pa[ha++]=di,di=e,pi=t}function oo(e,t,l){yt[bt++]=Lt,yt[bt++]=Yt,yt[bt++]=Ul,Ul=e;var a=Lt;e=Yt;var n=32-it(a)-1;a&=~(1<<n),l+=1;var i=32-it(t)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,Lt=1<<32-it(t)+n|l<<n|a,Yt=i+e}else Lt=1<<i|l<<n|a,Yt=e}function rs(e){e.return!==null&&(ql(e,1),oo(e,1,0))}function ss(e){for(;e===di;)di=pa[--ha],pa[ha]=null,pi=pa[--ha],pa[ha]=null;for(;e===Ul;)Ul=yt[--bt],yt[bt]=null,Yt=yt[--bt],yt[bt]=null,Lt=yt[--bt],yt[bt]=null}var We=null,Ee=null,ue=!1,Hl=null,At=!1,cs=Error(u(519));function Ll(e){var t=Error(u(418,""));throw tn(xt(t,e)),cs}function fo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ke]=e,t[Fe]=a,l){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(l=0;l<En.length;l++)ne(En[l],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Eu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),In(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Au(t,a.value,a.defaultValue,a.children),In(t)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Md(t.textContent,l)?(a.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),a.onScroll!=null&&ne("scroll",t),a.onScrollEnd!=null&&ne("scrollend",t),a.onClick!=null&&(t.onclick=Ki),t=!0):t=!1,t||Ll(e)}function po(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:At=!1;return;case 27:case 3:At=!0;return;default:We=We.return}}function Ia(e){if(e!==We)return!1;if(!ue)return po(e),ue=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Nc(e.type,e.memoizedProps)),l=!l),l&&Ee&&Ll(e),po(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Ee=Et(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Ee=null}}else t===27?(t=Ee,Sl(e.type)?(e=Ac,Ac=null,Ee=e):Ee=t):Ee=We?Et(e.stateNode.nextSibling):null;return!0}function en(){Ee=We=null,ue=!1}function ho(){var e=Hl;return e!==null&&(tt===null?tt=e:tt.push.apply(tt,e),Hl=null),e}function tn(e){Hl===null?Hl=[e]:Hl.push(e)}var us=O(null),Yl=null,Gt=null;function rl(e,t,l){U(us,t._currentValue),t._currentValue=l}function Qt(e){e._currentValue=us.current,H(us)}function os(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function fs(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var m=0;m<t.length;m++)if(f.context===t[m]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),os(i.return,l,e),a||(c=null);break e}i=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(u(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),os(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function ln(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var f=n.type;rt(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===at.current){if(c=n.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(_n):e=[_n])}n=n.return}e!==null&&fs(t,e,l,a),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gl(e){Yl=e,Gt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return mo(Yl,e)}function mi(e,t){return Yl===null&&Gl(e),mo(e,t)}function mo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Gt===null){if(e===null)throw Error(u(308));Gt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gt=Gt.next=t;return l}var y0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},b0=r.unstable_scheduleCallback,S0=r.unstable_NormalPriority,Oe={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ds(){return{controller:new y0,data:new Map,refCount:0}}function an(e){e.refCount--,e.refCount===0&&b0(S0,function(){e.controller.abort()})}var nn=null,ps=0,ma=0,ga=null;function j0(e,t){if(nn===null){var l=nn=[];ps=0,ma=mc(),ga={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ps++,t.then(go,go),t}function go(){if(--ps===0&&nn!==null){ga!==null&&(ga.status="fulfilled");var e=nn;nn=null,ma=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function z0(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var xo=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&j0(e,t),xo!==null&&xo(e,t)};var Ql=O(null);function hs(){var e=Ql.current;return e!==null?e:ye.pooledCache}function gi(e,t){t===null?U(Ql,Ql.current):U(Ql,t.pool)}function vo(){var e=hs();return e===null?null:{parent:Oe._currentValue,pool:e}}var rn=Error(u(460)),yo=Error(u(474)),xi=Error(u(542)),ms={then:function(){}};function bo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vi(){}function So(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(vi,vi),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zo(e),e;default:if(typeof t.status=="string")t.then(vi,vi);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zo(e),e}throw sn=t,rn}}var sn=null;function jo(){if(sn===null)throw Error(u(459));var e=sn;return sn=null,e}function zo(e){if(e===rn||e===xi)throw Error(u(483))}var sl=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ul(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=oi(e),co(e,null,l),t}return ui(e,a,t,l),oi(e)}function cn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,mu(e,l)}}function vs(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var ys=!1;function un(){if(ys){var e=ga;if(e!==null)throw e}}function on(e,t,l,a){ys=!1;var n=e.updateQueue;sl=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var m=f,z=m.next;m.next=null,c===null?i=z:c.next=z,c=m;var A=e.alternate;A!==null&&(A=A.updateQueue,f=A.lastBaseUpdate,f!==c&&(f===null?A.firstBaseUpdate=z:f.next=z,A.lastBaseUpdate=m))}if(i!==null){var _=n.baseState;c=0,A=z=m=null,f=i;do{var N=f.lane&-536870913,w=N!==f.lane;if(w?(ie&N)===N:(a&N)===N){N!==0&&N===ma&&(ys=!0),A!==null&&(A=A.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var W=e,K=f;N=t;var me=l;switch(K.tag){case 1:if(W=K.payload,typeof W=="function"){_=W.call(me,_,N);break e}_=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=K.payload,N=typeof W=="function"?W.call(me,_,N):W,N==null)break e;_=R({},_,N);break e;case 2:sl=!0}}N=f.callback,N!==null&&(e.flags|=64,w&&(e.flags|=8192),w=n.callbacks,w===null?n.callbacks=[N]:w.push(N))}else w={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},A===null?(z=A=w,m=_):A=A.next=w,c|=N;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;w=f,f=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);A===null&&(m=_),n.baseState=m,n.firstBaseUpdate=z,n.lastBaseUpdate=A,i===null&&(n.shared.lanes=0),xl|=c,e.lanes=c,e.memoizedState=_}}function No(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function wo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)No(l[e],t)}var xa=O(null),yi=O(0);function Eo(e,t){e=Wt,U(yi,e),U(xa,t),Wt=e|t.baseLanes}function bs(){U(yi,Wt),U(xa,xa.current)}function Ss(){Wt=yi.current,H(xa),H(yi)}var ol=0,te=null,pe=null,Me=null,bi=!1,va=!1,Xl=!1,Si=0,fn=0,ya=null,N0=0;function Ae(){throw Error(u(321))}function js(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!rt(e[l],t[l]))return!1;return!0}function zs(e,t,l,a,n,i){return ol=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?of:ff,Xl=!1,i=l(a,n),Xl=!1,va&&(i=Ao(t,l,a,n)),To(e),i}function To(e){M.H=Ti;var t=pe!==null&&pe.next!==null;if(ol=0,Me=pe=te=null,bi=!1,fn=0,ya=null,t)throw Error(u(300));e===null||qe||(e=e.dependencies,e!==null&&hi(e)&&(qe=!0))}function Ao(e,t,l,a){te=e;var n=0;do{if(va&&(ya=null),fn=0,va=!1,25<=n)throw Error(u(301));if(n+=1,Me=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=D0,i=t(l,a)}while(va);return i}function w0(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?dn(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(te.flags|=1024),t}function Ns(){var e=Si!==0;return Si=0,e}function ws(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Es(e){if(bi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bi=!1}ol=0,Me=pe=te=null,va=!1,fn=Si=0,ya=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?te.memoizedState=Me=e:Me=Me.next=e,Me}function De(){if(pe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Me===null?te.memoizedState:Me.next;if(t!==null)Me=t,pe=e;else{if(e===null)throw te.alternate===null?Error(u(467)):Error(u(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Me===null?te.memoizedState=Me=e:Me=Me.next=e}return Me}function Ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dn(e){var t=fn;return fn+=1,ya===null&&(ya=[]),e=So(ya,e,t),t=te,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?of:ff),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dn(e);if(e.$$typeof===I)return Je(e)}throw Error(u(438,String(e)))}function As(e){var t=null,l=te.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Ts(),te.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=lt;return t.index++,l}function Xt(e,t){return typeof t=="function"?t(e):t}function zi(e){var t=De();return Rs(t,pe,e)}function Rs(e,t,l){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=c=null,m=null,z=t,A=!1;do{var _=z.lane&-536870913;if(_!==z.lane?(ie&_)===_:(ol&_)===_){var N=z.revertLane;if(N===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),_===ma&&(A=!0);else if((ol&N)===N){z=z.next,N===ma&&(A=!0);continue}else _={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(f=m=_,c=i):m=m.next=_,te.lanes|=N,xl|=N;_=z.action,Xl&&l(i,_),i=z.hasEagerState?z.eagerState:l(i,_)}else N={lane:_,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(f=m=N,c=i):m=m.next=N,te.lanes|=_,xl|=_;z=z.next}while(z!==null&&z!==t);if(m===null?c=i:m.next=f,!rt(i,e.memoizedState)&&(qe=!0,A&&(l=ga,l!==null)))throw l;e.memoizedState=i,e.baseState=c,e.baseQueue=m,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ms(e){var t=De(),l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);rt(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Ro(e,t,l){var a=te,n=De(),i=ue;if(i){if(l===void 0)throw Error(u(407));l=l()}else l=t();var c=!rt((pe||n).memoizedState,l);c&&(n.memoizedState=l,qe=!0),n=n.queue;var f=_o.bind(null,a,n,e);if(pn(2048,8,f,[e]),n.getSnapshot!==t||c||Me!==null&&Me.memoizedState.tag&1){if(a.flags|=2048,ba(9,Ni(),Do.bind(null,a,n,l,t),null),ye===null)throw Error(u(349));i||(ol&124)!==0||Mo(a,t,l)}return l}function Mo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=te.updateQueue,t===null?(t=Ts(),te.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Do(e,t,l,a){t.value=l,t.getSnapshot=a,Oo(t)&&Co(e)}function _o(e,t,l){return l(function(){Oo(t)&&Co(e)})}function Oo(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!rt(e,l)}catch{return!0}}function Co(e){var t=fa(e,2);t!==null&&dt(t,e,2)}function Ds(e){var t=Ie();if(typeof e=="function"){var l=e;if(e=l(),Xl){al(!0);try{l()}finally{al(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function ko(e,t,l,a){return e.baseState=l,Rs(e,pe,typeof a=="function"?a:Xt)}function E0(e,t,l,a,n){if(Ei(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};M.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Bo(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Bo(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=M.T,c={};M.T=c;try{var f=l(n,a),m=M.S;m!==null&&m(c,f),Uo(e,t,f)}catch(z){_s(e,t,z)}finally{M.T=i}}else try{i=l(n,a),Uo(e,t,i)}catch(z){_s(e,t,z)}}function Uo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){qo(e,t,a)},function(a){return _s(e,t,a)}):qo(e,t,l)}function qo(e,t,l){t.status="fulfilled",t.value=l,Ho(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Bo(e,l)))}function _s(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Ho(t),t=t.next;while(t!==a)}e.action=null}function Ho(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Lo(e,t){return t}function Yo(e,t){if(ue){var l=ye.formState;if(l!==null){e:{var a=te;if(ue){if(Ee){t:{for(var n=Ee,i=At;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=Et(n.nextSibling),a=n.data==="F!";break e}}Ll(a)}a=!1}a&&(t=l[0])}}return l=Ie(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},l.queue=a,l=sf.bind(null,te,a),a.dispatch=l,a=Ds(!1),i=Us.bind(null,te,!1,a.queue),a=Ie(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=E0.bind(null,te,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Go(e){var t=De();return Qo(t,pe,e)}function Qo(e,t,l){if(t=Rs(e,t,Lo)[0],e=zi(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=dn(t)}catch(c){throw c===rn?xi:c}else a=t;t=De();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(te.flags|=2048,ba(9,Ni(),T0.bind(null,n,l),null)),[a,i,e]}function T0(e,t){e.action=t}function Xo(e){var t=De(),l=pe;if(l!==null)return Qo(t,l,e);De(),t=t.memoizedState,l=De();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ba(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=te.updateQueue,t===null&&(t=Ts(),te.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Ni(){return{destroy:void 0,resource:void 0}}function Vo(){return De().memoizedState}function wi(e,t,l,a){var n=Ie();a=a===void 0?null:a,te.flags|=e,n.memoizedState=ba(1|t,Ni(),l,a)}function pn(e,t,l,a){var n=De();a=a===void 0?null:a;var i=n.memoizedState.inst;pe!==null&&a!==null&&js(a,pe.memoizedState.deps)?n.memoizedState=ba(t,i,l,a):(te.flags|=e,n.memoizedState=ba(1|t,i,l,a))}function Zo(e,t){wi(8390656,8,e,t)}function Ko(e,t){pn(2048,8,e,t)}function Jo(e,t){return pn(4,2,e,t)}function $o(e,t){return pn(4,4,e,t)}function Wo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fo(e,t,l){l=l!=null?l.concat([e]):null,pn(4,4,Wo.bind(null,t,e),l)}function Os(){}function Po(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&js(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Io(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&js(t,a[1]))return a[0];if(a=e(),Xl){al(!0);try{e()}finally{al(!1)}}return l.memoizedState=[a,t],a}function Cs(e,t,l){return l===void 0||(ol&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=ad(),te.lanes|=e,xl|=e,l)}function ef(e,t,l,a){return rt(l,t)?l:xa.current!==null?(e=Cs(e,l,a),rt(e,t)||(qe=!0),e):(ol&42)===0?(qe=!0,e.memoizedState=l):(e=ad(),te.lanes|=e,xl|=e,t)}function tf(e,t,l,a,n){var i=q.p;q.p=i!==0&&8>i?i:8;var c=M.T,f={};M.T=f,Us(e,!1,t,l);try{var m=n(),z=M.S;if(z!==null&&z(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var A=z0(m,a);hn(e,t,A,ft(e))}else hn(e,t,a,ft(e))}catch(_){hn(e,t,{then:function(){},status:"rejected",reason:_},ft())}finally{q.p=i,M.T=c}}function A0(){}function ks(e,t,l,a){if(e.tag!==5)throw Error(u(476));var n=lf(e).queue;tf(e,n,t,$,l===null?A0:function(){return af(e),l(a)})}function lf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:$},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function af(e){var t=lf(e).next.queue;hn(e,t,{},ft())}function Bs(){return Je(_n)}function nf(){return De().memoizedState}function rf(){return De().memoizedState}function R0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ft();e=cl(l);var a=ul(t,e,l);a!==null&&(dt(a,t,l),cn(a,t,l)),t={cache:ds()},e.payload=t;return}t=t.return}}function M0(e,t,l){var a=ft();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)?cf(t,l):(l=ls(e,t,l,a),l!==null&&(dt(l,e,a),uf(l,t,a)))}function sf(e,t,l){var a=ft();hn(e,t,l,a)}function hn(e,t,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))cf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,l);if(n.hasEagerState=!0,n.eagerState=f,rt(f,c))return ui(e,t,n,0),ye===null&&ci(),!1}catch{}finally{}if(l=ls(e,t,n,a),l!==null)return dt(l,e,a),uf(l,t,a),!0}return!1}function Us(e,t,l,a){if(a={lane:2,revertLane:mc(),action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(u(479))}else t=ls(e,l,a,2),t!==null&&dt(t,e,2)}function Ei(e){var t=e.alternate;return e===te||t!==null&&t===te}function cf(e,t){va=bi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function uf(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,mu(e,l)}}var Ti={readContext:Je,use:ji,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae},of={readContext:Je,use:ji,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Zo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,wi(4194308,4,Wo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){wi(4,2,e,t)},useMemo:function(e,t){var l=Ie();t=t===void 0?null:t;var a=e();if(Xl){al(!0);try{e()}finally{al(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ie();if(l!==void 0){var n=l(t);if(Xl){al(!0);try{l(t)}finally{al(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=M0.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=Ds(e);var t=e.queue,l=sf.bind(null,te,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Os,useDeferredValue:function(e,t){var l=Ie();return Cs(l,e,t)},useTransition:function(){var e=Ds(!1);return e=tf.bind(null,te,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=te,n=Ie();if(ue){if(l===void 0)throw Error(u(407));l=l()}else{if(l=t(),ye===null)throw Error(u(349));(ie&124)!==0||Mo(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Zo(_o.bind(null,a,i,e),[e]),a.flags|=2048,ba(9,Ni(),Do.bind(null,a,i,l,t),null),l},useId:function(){var e=Ie(),t=ye.identifierPrefix;if(ue){var l=Yt,a=Lt;l=(a&~(1<<32-it(a)-1)).toString(32)+l,t="«"+t+"R"+l,l=Si++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=N0++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Bs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Us.bind(null,te,!0,l),l.dispatch=t,[e,t]},useMemoCache:As,useCacheRefresh:function(){return Ie().memoizedState=R0.bind(null,te)}},ff={readContext:Je,use:ji,useCallback:Po,useContext:Je,useEffect:Ko,useImperativeHandle:Fo,useInsertionEffect:Jo,useLayoutEffect:$o,useMemo:Io,useReducer:zi,useRef:Vo,useState:function(){return zi(Xt)},useDebugValue:Os,useDeferredValue:function(e,t){var l=De();return ef(l,pe.memoizedState,e,t)},useTransition:function(){var e=zi(Xt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:Ro,useId:nf,useHostTransitionStatus:Bs,useFormState:Go,useActionState:Go,useOptimistic:function(e,t){var l=De();return ko(l,pe,e,t)},useMemoCache:As,useCacheRefresh:rf},D0={readContext:Je,use:ji,useCallback:Po,useContext:Je,useEffect:Ko,useImperativeHandle:Fo,useInsertionEffect:Jo,useLayoutEffect:$o,useMemo:Io,useReducer:Ms,useRef:Vo,useState:function(){return Ms(Xt)},useDebugValue:Os,useDeferredValue:function(e,t){var l=De();return pe===null?Cs(l,e,t):ef(l,pe.memoizedState,e,t)},useTransition:function(){var e=Ms(Xt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:Ro,useId:nf,useHostTransitionStatus:Bs,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){var l=De();return pe!==null?ko(l,pe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:As,useCacheRefresh:rf},Sa=null,mn=0;function Ai(e){var t=mn;return mn+=1,Sa===null&&(Sa=[]),So(Sa,e,t)}function gn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ri(e,t){throw t.$$typeof===C?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function df(e){var t=e._init;return t(e._payload)}function pf(e){function t(S,y){if(e){var j=S.deletions;j===null?(S.deletions=[y],S.flags|=16):j.push(y)}}function l(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function a(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function n(S,y){return S=Ht(S,y),S.index=0,S.sibling=null,S}function i(S,y,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<y?(S.flags|=67108866,y):j):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function c(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function f(S,y,j,D){return y===null||y.tag!==6?(y=ns(j,S.mode,D),y.return=S,y):(y=n(y,j),y.return=S,y)}function m(S,y,j,D){var L=j.type;return L===X?A(S,y,j.props.children,D,j.key):y!==null&&(y.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Be&&df(L)===y.type)?(y=n(y,j.props),gn(y,j),y.return=S,y):(y=fi(j.type,j.key,j.props,null,S.mode,D),gn(y,j),y.return=S,y)}function z(S,y,j,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==j.containerInfo||y.stateNode.implementation!==j.implementation?(y=is(j,S.mode,D),y.return=S,y):(y=n(y,j.children||[]),y.return=S,y)}function A(S,y,j,D,L){return y===null||y.tag!==7?(y=Bl(j,S.mode,D,L),y.return=S,y):(y=n(y,j),y.return=S,y)}function _(S,y,j){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ns(""+y,S.mode,j),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case k:return j=fi(y.type,y.key,y.props,null,S.mode,j),gn(j,y),j.return=S,j;case V:return y=is(y,S.mode,j),y.return=S,y;case Be:var D=y._init;return y=D(y._payload),_(S,y,j)}if(Ze(y)||Ve(y))return y=Bl(y,S.mode,j,null),y.return=S,y;if(typeof y.then=="function")return _(S,Ai(y),j);if(y.$$typeof===I)return _(S,mi(S,y),j);Ri(S,y)}return null}function N(S,y,j,D){var L=y!==null?y.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return L!==null?null:f(S,y,""+j,D);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case k:return j.key===L?m(S,y,j,D):null;case V:return j.key===L?z(S,y,j,D):null;case Be:return L=j._init,j=L(j._payload),N(S,y,j,D)}if(Ze(j)||Ve(j))return L!==null?null:A(S,y,j,D,null);if(typeof j.then=="function")return N(S,y,Ai(j),D);if(j.$$typeof===I)return N(S,y,mi(S,j),D);Ri(S,j)}return null}function w(S,y,j,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return S=S.get(j)||null,f(y,S,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case k:return S=S.get(D.key===null?j:D.key)||null,m(y,S,D,L);case V:return S=S.get(D.key===null?j:D.key)||null,z(y,S,D,L);case Be:var le=D._init;return D=le(D._payload),w(S,y,j,D,L)}if(Ze(D)||Ve(D))return S=S.get(j)||null,A(y,S,D,L,null);if(typeof D.then=="function")return w(S,y,j,Ai(D),L);if(D.$$typeof===I)return w(S,y,j,mi(y,D),L);Ri(y,D)}return null}function W(S,y,j,D){for(var L=null,le=null,Q=y,J=y=0,Le=null;Q!==null&&J<j.length;J++){Q.index>J?(Le=Q,Q=null):Le=Q.sibling;var ce=N(S,Q,j[J],D);if(ce===null){Q===null&&(Q=Le);break}e&&Q&&ce.alternate===null&&t(S,Q),y=i(ce,y,J),le===null?L=ce:le.sibling=ce,le=ce,Q=Le}if(J===j.length)return l(S,Q),ue&&ql(S,J),L;if(Q===null){for(;J<j.length;J++)Q=_(S,j[J],D),Q!==null&&(y=i(Q,y,J),le===null?L=Q:le.sibling=Q,le=Q);return ue&&ql(S,J),L}for(Q=a(Q);J<j.length;J++)Le=w(Q,S,J,j[J],D),Le!==null&&(e&&Le.alternate!==null&&Q.delete(Le.key===null?J:Le.key),y=i(Le,y,J),le===null?L=Le:le.sibling=Le,le=Le);return e&&Q.forEach(function(El){return t(S,El)}),ue&&ql(S,J),L}function K(S,y,j,D){if(j==null)throw Error(u(151));for(var L=null,le=null,Q=y,J=y=0,Le=null,ce=j.next();Q!==null&&!ce.done;J++,ce=j.next()){Q.index>J?(Le=Q,Q=null):Le=Q.sibling;var El=N(S,Q,ce.value,D);if(El===null){Q===null&&(Q=Le);break}e&&Q&&El.alternate===null&&t(S,Q),y=i(El,y,J),le===null?L=El:le.sibling=El,le=El,Q=Le}if(ce.done)return l(S,Q),ue&&ql(S,J),L;if(Q===null){for(;!ce.done;J++,ce=j.next())ce=_(S,ce.value,D),ce!==null&&(y=i(ce,y,J),le===null?L=ce:le.sibling=ce,le=ce);return ue&&ql(S,J),L}for(Q=a(Q);!ce.done;J++,ce=j.next())ce=w(Q,S,J,ce.value,D),ce!==null&&(e&&ce.alternate!==null&&Q.delete(ce.key===null?J:ce.key),y=i(ce,y,J),le===null?L=ce:le.sibling=ce,le=ce);return e&&Q.forEach(function(_h){return t(S,_h)}),ue&&ql(S,J),L}function me(S,y,j,D){if(typeof j=="object"&&j!==null&&j.type===X&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case k:e:{for(var L=j.key;y!==null;){if(y.key===L){if(L=j.type,L===X){if(y.tag===7){l(S,y.sibling),D=n(y,j.props.children),D.return=S,S=D;break e}}else if(y.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Be&&df(L)===y.type){l(S,y.sibling),D=n(y,j.props),gn(D,j),D.return=S,S=D;break e}l(S,y);break}else t(S,y);y=y.sibling}j.type===X?(D=Bl(j.props.children,S.mode,D,j.key),D.return=S,S=D):(D=fi(j.type,j.key,j.props,null,S.mode,D),gn(D,j),D.return=S,S=D)}return c(S);case V:e:{for(L=j.key;y!==null;){if(y.key===L)if(y.tag===4&&y.stateNode.containerInfo===j.containerInfo&&y.stateNode.implementation===j.implementation){l(S,y.sibling),D=n(y,j.children||[]),D.return=S,S=D;break e}else{l(S,y);break}else t(S,y);y=y.sibling}D=is(j,S.mode,D),D.return=S,S=D}return c(S);case Be:return L=j._init,j=L(j._payload),me(S,y,j,D)}if(Ze(j))return W(S,y,j,D);if(Ve(j)){if(L=Ve(j),typeof L!="function")throw Error(u(150));return j=L.call(j),K(S,y,j,D)}if(typeof j.then=="function")return me(S,y,Ai(j),D);if(j.$$typeof===I)return me(S,y,mi(S,j),D);Ri(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,y!==null&&y.tag===6?(l(S,y.sibling),D=n(y,j),D.return=S,S=D):(l(S,y),D=ns(j,S.mode,D),D.return=S,S=D),c(S)):l(S,y)}return function(S,y,j,D){try{mn=0;var L=me(S,y,j,D);return Sa=null,L}catch(Q){if(Q===rn||Q===xi)throw Q;var le=st(29,Q,null,S.mode);return le.lanes=D,le.return=S,le}finally{}}}var ja=pf(!0),hf=pf(!1),St=O(null),Rt=null;function fl(e){var t=e.alternate;U(Ce,Ce.current&1),U(St,e),Rt===null&&(t===null||xa.current!==null||t.memoizedState!==null)&&(Rt=e)}function mf(e){if(e.tag===22){if(U(Ce,Ce.current),U(St,e),Rt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Rt=e)}}else dl()}function dl(){U(Ce,Ce.current),U(St,St.current)}function Vt(e){H(St),Rt===e&&(Rt=null),H(Ce)}var Ce=O(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Tc(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function qs(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:R({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Hs={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ft(),n=cl(a);n.payload=t,l!=null&&(n.callback=l),t=ul(e,n,a),t!==null&&(dt(t,e,a),cn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ft(),n=cl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=ul(e,n,a),t!==null&&(dt(t,e,a),cn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ft(),a=cl(l);a.tag=2,t!=null&&(a.callback=t),t=ul(e,a,l),t!==null&&(dt(t,e,l),cn(t,e,l))}};function gf(e,t,l,a,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!Fa(l,a)||!Fa(n,i):!0}function xf(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Vl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=R({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}var Di=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function vf(e){Di(e)}function yf(e){console.error(e)}function bf(e){Di(e)}function _i(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Sf(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ls(e,t,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){_i(e,t)},l}function jf(e){return e=cl(e),e.tag=3,e}function zf(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Sf(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Sf(t,l,a),typeof n!="function"&&(vl===null?vl=new Set([this]):vl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function _0(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ln(t,l,n,!0),l=St.current,l!==null){switch(l.tag){case 13:return Rt===null?oc():l.alternate===null&&Te===0&&(Te=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===ms?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),dc(e,a,n)),!1;case 22:return l.flags|=65536,a===ms?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),dc(e,a,n)),!1}throw Error(u(435,l.tag))}return dc(e,a,n),oc(),!1}if(ue)return t=St.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==cs&&(e=Error(u(422),{cause:a}),tn(xt(e,l)))):(a!==cs&&(t=Error(u(423),{cause:a}),tn(xt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=xt(a,l),n=Ls(e.stateNode,a,n),vs(e,n),Te!==4&&(Te=2)),!1;var i=Error(u(520),{cause:a});if(i=xt(i,l),zn===null?zn=[i]:zn.push(i),Te!==4&&(Te=2),t===null)return!0;a=xt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Ls(l.stateNode,a,e),vs(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(vl===null||!vl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=jf(n),zf(n,e,l,a),vs(l,n),!1}l=l.return}while(l!==null);return!1}var Nf=Error(u(461)),qe=!1;function Ge(e,t,l,a){t.child=e===null?hf(t,null,l,a):ja(t,e.child,l,a)}function wf(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return Gl(t),a=zs(e,t,l,c,i,n),f=Ns(),e!==null&&!qe?(ws(e,t,n),Zt(e,t,n)):(ue&&f&&rs(t),t.flags|=1,Ge(e,t,a,n),t.child)}function Ef(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!as(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Tf(e,t,i,a,n)):(e=fi(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Js(e,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:Fa,l(c,a)&&e.ref===t.ref)return Zt(e,t,n)}return t.flags|=1,e=Ht(i,a),e.ref=t.ref,e.return=t,t.child=e}function Tf(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Fa(i,a)&&e.ref===t.ref)if(qe=!1,t.pendingProps=a=i,Js(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Zt(e,t,n)}return Ys(e,t,l,a,n)}function Af(e,t,l){var a=t.pendingProps,n=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~a}else t.childLanes=0,t.child=null;return Rf(e,t,a,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gi(t,i!==null?i.cachePool:null),i!==null?Eo(t,i):bs(),mf(t);else return t.lanes=t.childLanes=536870912,Rf(e,t,i!==null?i.baseLanes|l:l,l)}else i!==null?(gi(t,i.cachePool),Eo(t,i),dl(),t.memoizedState=null):(e!==null&&gi(t,null),bs(),dl());return Ge(e,t,n,l),t.child}function Rf(e,t,l,a){var n=hs();return n=n===null?null:{parent:Oe._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&gi(t,null),bs(),mf(t),e!==null&&ln(e,t,a,!0),null}function Oi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(u(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Ys(e,t,l,a,n){return Gl(t),l=zs(e,t,l,a,void 0,n),a=Ns(),e!==null&&!qe?(ws(e,t,n),Zt(e,t,n)):(ue&&a&&rs(t),t.flags|=1,Ge(e,t,l,n),t.child)}function Mf(e,t,l,a,n,i){return Gl(t),t.updateQueue=null,l=Ao(t,a,l,n),To(e),a=Ns(),e!==null&&!qe?(ws(e,t,i),Zt(e,t,i)):(ue&&a&&rs(t),t.flags|=1,Ge(e,t,l,i),t.child)}function Df(e,t,l,a,n){if(Gl(t),t.stateNode===null){var i=da,c=l.contextType;typeof c=="object"&&c!==null&&(i=Je(c)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},gs(t),c=l.contextType,i.context=typeof c=="object"&&c!==null?Je(c):da,i.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(qs(t,l,c,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Hs.enqueueReplaceState(i,i.state,null),on(t,a,i,n),un(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,m=Vl(l,f);i.props=m;var z=i.context,A=l.contextType;c=da,typeof A=="object"&&A!==null&&(c=Je(A));var _=l.getDerivedStateFromProps;A=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,A||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||z!==c)&&xf(t,i,a,c),sl=!1;var N=t.memoizedState;i.state=N,on(t,a,i,n),un(),z=t.memoizedState,f||N!==z||sl?(typeof _=="function"&&(qs(t,l,_,a),z=t.memoizedState),(m=sl||gf(t,l,m,a,N,z,c))?(A||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),i.props=a,i.state=z,i.context=c,a=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,xs(e,t),c=t.memoizedProps,A=Vl(l,c),i.props=A,_=t.pendingProps,N=i.context,z=l.contextType,m=da,typeof z=="object"&&z!==null&&(m=Je(z)),f=l.getDerivedStateFromProps,(z=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==_||N!==m)&&xf(t,i,a,m),sl=!1,N=t.memoizedState,i.state=N,on(t,a,i,n),un();var w=t.memoizedState;c!==_||N!==w||sl||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof f=="function"&&(qs(t,l,f,a),w=t.memoizedState),(A=sl||gf(t,l,A,a,N,w,m)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,w,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,w,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),i.props=a,i.state=w,i.context=m,a=A):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Oi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ja(t,e.child,null,n),t.child=ja(t,null,l,n)):Ge(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Zt(e,t,n),e}function _f(e,t,l,a){return en(),t.flags|=256,Ge(e,t,l,a),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qs(e){return{baseLanes:e,cachePool:vo()}}function Xs(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=jt),e}function Of(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(n?fl(t):dl(),ue){var f=Ee,m;if(m=f){e:{for(m=f,f=At;m.nodeType!==8;){if(!f){f=null;break e}if(m=Et(m.nextSibling),m===null){f=null;break e}}f=m}f!==null?(t.memoizedState={dehydrated:f,treeContext:Ul!==null?{id:Lt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},m=st(18,null,null,0),m.stateNode=f,m.return=t,t.child=m,We=t,Ee=null,m=!0):m=!1}m||Ll(t)}if(f=t.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Tc(f)?t.lanes=32:t.lanes=536870912,null;Vt(t)}return f=a.children,a=a.fallback,n?(dl(),n=t.mode,f=Ci({mode:"hidden",children:f},n),a=Bl(a,n,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,n=t.child,n.memoizedState=Qs(l),n.childLanes=Xs(e,c,l),t.memoizedState=Gs,a):(fl(t),Vs(t,f))}if(m=e.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(i)t.flags&256?(fl(t),t.flags&=-257,t=Zs(e,t,l)):t.memoizedState!==null?(dl(),t.child=e.child,t.flags|=128,t=null):(dl(),n=a.fallback,f=t.mode,a=Ci({mode:"visible",children:a.children},f),n=Bl(n,f,l,null),n.flags|=2,a.return=t,n.return=t,a.sibling=n,t.child=a,ja(t,e.child,null,l),a=t.child,a.memoizedState=Qs(l),a.childLanes=Xs(e,c,l),t.memoizedState=Gs,t=n);else if(fl(t),Tc(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var z=c.dgst;c=z,a=Error(u(419)),a.stack="",a.digest=c,tn({value:a,source:null,stack:null}),t=Zs(e,t,l)}else if(qe||ln(e,t,l,!1),c=(l&e.childLanes)!==0,qe||c){if(c=ye,c!==null&&(a=l&-l,a=(a&42)!==0?1:Ar(a),a=(a&(c.suspendedLanes|l))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,fa(e,a),dt(c,e,a),Nf;f.data==="$?"||oc(),t=Zs(e,t,l)}else f.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Ee=Et(f.nextSibling),We=t,ue=!0,Hl=null,At=!1,e!==null&&(yt[bt++]=Lt,yt[bt++]=Yt,yt[bt++]=Ul,Lt=e.id,Yt=e.overflow,Ul=t),t=Vs(t,a.children),t.flags|=4096);return t}return n?(dl(),n=a.fallback,f=t.mode,m=e.child,z=m.sibling,a=Ht(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,z!==null?n=Ht(z,n):(n=Bl(n,f,l,null),n.flags|=2),n.return=t,a.return=t,a.sibling=n,t.child=a,a=n,n=t.child,f=e.child.memoizedState,f===null?f=Qs(l):(m=f.cachePool,m!==null?(z=Oe._currentValue,m=m.parent!==z?{parent:z,pool:z}:m):m=vo(),f={baseLanes:f.baseLanes|l,cachePool:m}),n.memoizedState=f,n.childLanes=Xs(e,c,l),t.memoizedState=Gs,a):(fl(t),l=e.child,e=l.sibling,l=Ht(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function Vs(e,t){return t=Ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ci(e,t){return e=st(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Zs(e,t,l){return ja(t,e.child,null,l),e=Vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),os(e.return,t,l)}function Ks(e,t,l,a,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n)}function kf(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;if(Ge(e,t,a.children,l),a=Ce.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cf(e,l,t);else if(e.tag===19)Cf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(U(Ce,a),n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Mi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Ks(t,!1,n,l,i);break;case"backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Ks(t,!0,l,null,i);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),xl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ln(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,l=Ht(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ht(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Js(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function O0(e,t,l){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),rl(t,Oe,e.memoizedState.cache),en();break;case 27:case 5:zr(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:rl(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Of(e,t,l):(fl(t),e=Zt(e,t,l),e!==null?e.sibling:null);fl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ln(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return kf(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Ce,Ce.current),a)break;return null;case 22:case 23:return t.lanes=0,Af(e,t,l);case 24:rl(t,Oe,e.memoizedState.cache)}return Zt(e,t,l)}function Bf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Js(e,l)&&(t.flags&128)===0)return qe=!1,O0(e,t,l);qe=(e.flags&131072)!==0}else qe=!1,ue&&(t.flags&1048576)!==0&&oo(t,pi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,n=a._init;if(a=n(a._payload),t.type=a,typeof a=="function")as(a)?(e=Vl(a,e),t.tag=1,t=Df(null,t,a,e,l)):(t.tag=0,t=Ys(null,t,a,e,l));else{if(a!=null){if(n=a.$$typeof,n===je){t.tag=11,t=wf(null,t,a,e,l);break e}else if(n===_e){t.tag=14,t=Ef(null,t,a,e,l);break e}}throw t=Ml(a)||a,Error(u(306,t,""))}}return t;case 0:return Ys(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Vl(a,t.pendingProps),Df(e,t,a,n,l);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,xs(e,t),on(t,a,null,l);var c=t.memoizedState;if(a=c.cache,rl(t,Oe,a),a!==i.cache&&fs(t,[Oe],l,!0),un(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=_f(e,t,a,l);break e}else if(a!==n){n=xt(Error(u(424)),t),tn(n),t=_f(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=Et(e.firstChild),We=t,ue=!0,Hl=null,At=!0,l=hf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(en(),a===n){t=Zt(e,t,l);break e}Ge(e,t,a,l)}t=t.child}return t;case 26:return Oi(e,t),e===null?(l=Ld(t.type,null,t.pendingProps,null))?t.memoizedState=l:ue||(l=t.type,e=t.pendingProps,a=Ji(P.current).createElement(l),a[Ke]=t,a[Fe]=e,Xe(a,l,e),Ue(a),t.stateNode=a):t.memoizedState=Ld(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zr(t),e===null&&ue&&(a=t.stateNode=Ud(t.type,t.pendingProps,P.current),We=t,At=!0,n=Ee,Sl(t.type)?(Ac=n,Ee=Et(a.firstChild)):Ee=n),Ge(e,t,t.pendingProps.children,l),Oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((n=a=Ee)&&(a=sh(a,t.type,t.pendingProps,At),a!==null?(t.stateNode=a,We=t,Ee=Et(a.firstChild),At=!1,n=!0):n=!1),n||Ll(t)),zr(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,Nc(n,i)?a=null:c!==null&&Nc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=zs(e,t,w0,null,null,l),_n._currentValue=n),Oi(e,t),Ge(e,t,a,l),t.child;case 6:return e===null&&ue&&((e=l=Ee)&&(l=ch(l,t.pendingProps,At),l!==null?(t.stateNode=l,We=t,Ee=null,e=!0):e=!1),e||Ll(t)),null;case 13:return Of(e,t,l);case 4:return be(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ja(t,null,a,l):Ge(e,t,a,l),t.child;case 11:return wf(e,t,t.type,t.pendingProps,l);case 7:return Ge(e,t,t.pendingProps,l),t.child;case 8:return Ge(e,t,t.pendingProps.children,l),t.child;case 12:return Ge(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,rl(t,t.type,a.value),Ge(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Gl(t),n=Je(n),a=a(n),t.flags|=1,Ge(e,t,a,l),t.child;case 14:return Ef(e,t,t.type,t.pendingProps,l);case 15:return Tf(e,t,t.type,t.pendingProps,l);case 19:return kf(e,t,l);case 31:return a=t.pendingProps,l=t.mode,a={mode:a.mode,children:a.children},e===null?(l=Ci(a,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Ht(e.child,a),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return Af(e,t,l);case 24:return Gl(t),a=Je(Oe),e===null?(n=hs(),n===null&&(n=ye,i=ds(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},gs(t),rl(t,Oe,n)):((e.lanes&l)!==0&&(xs(e,t),on(t,null,null,l),un()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),rl(t,Oe,a)):(a=i.cache,rl(t,Oe,a),a!==n.cache&&fs(t,[Oe],l,!0))),Ge(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Kt(e){e.flags|=4}function Uf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vd(t)){if(t=St.current,t!==null&&((ie&4194048)===ie?Rt!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==Rt))throw sn=ms,yo;e.flags|=8192}}function ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pu():536870912,e.lanes|=t,Ea|=t)}function xn(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function C0(e,t,l){var a=t.pendingProps;switch(ss(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Oe),ll(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ho())),ze(t),null;case 26:return l=t.memoizedState,e===null?(Kt(t),l!==null?(ze(t),Uf(t,l)):(ze(t),t.flags&=-16777217)):l?l!==e.memoizedState?(Kt(t),ze(t),Uf(t,l)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==a&&Kt(t),ze(t),t.flags&=-16777217),null;case 27:Zn(t),l=P.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Kt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return ze(t),null}e=Z.current,Ia(t)?fo(t):(e=Ud(n,a,l),t.stateNode=e,Kt(t))}return ze(t),null;case 5:if(Zn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Kt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return ze(t),null}if(e=Z.current,Ia(t))fo(t);else{switch(n=Ji(P.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}e[Ke]=t,e[Fe]=a;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Xe(e,l,a),l){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Kt(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Kt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=P.current,Ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=We,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Md(e.nodeValue,l)),e||Ll(t)}else e=Ji(e).createTextNode(a),e[Ke]=t,t.stateNode=e}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Ke]=t}else en(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=ho(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Vt(t),t):(Vt(t),null)}if(Vt(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=a!==null,e=e!==null&&e.memoizedState!==null,l){a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),ki(t,t.updateQueue),ze(t),null;case 4:return ll(),e===null&&yc(t.stateNode.containerInfo),ze(t),null;case 10:return Qt(t.type),ze(t),null;case 19:if(H(Ce),n=t.memoizedState,n===null)return ze(t),null;if(a=(t.flags&128)!==0,i=n.rendering,i===null)if(a)xn(n,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mi(e),i!==null){for(t.flags|=128,xn(n,!1),e=i.updateQueue,t.updateQueue=e,ki(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)uo(l,e),l=l.sibling;return U(Ce,Ce.current&1|2),t.child}e=e.sibling}n.tail!==null&&Tt()>qi&&(t.flags|=128,a=!0,xn(n,!1),t.lanes=4194304)}else{if(!a)if(e=Mi(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ki(t,e),xn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ue)return ze(t),null}else 2*Tt()-n.renderingStartTime>qi&&l!==536870912&&(t.flags|=128,a=!0,xn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Tt(),t.sibling=null,e=Ce.current,U(Ce,a?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return Vt(t),Ss(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&ki(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&H(Ql),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(Oe),ze(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function k0(e,t){switch(ss(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Oe),ll(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zn(t),null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Ce),null;case 4:return ll(),null;case 10:return Qt(t.type),null;case 22:case 23:return Vt(t),Ss(),e!==null&&H(Ql),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Oe),null;case 25:return null;default:return null}}function qf(e,t){switch(ss(t),t.tag){case 3:Qt(Oe),ll();break;case 26:case 27:case 5:Zn(t);break;case 4:ll();break;case 13:Vt(t);break;case 19:H(Ce);break;case 10:Qt(t.type);break;case 22:case 23:Vt(t),Ss(),e!==null&&H(Ql);break;case 24:Qt(Oe)}}function vn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(f){xe(t,t.return,f)}}function pl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var m=l,z=f;try{z()}catch(A){xe(n,m,A)}}}a=a.next}while(a!==i)}}catch(A){xe(t,t.return,A)}}function Hf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{wo(t,l)}catch(a){xe(e,e.return,a)}}}function Lf(e,t,l){l.props=Vl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){xe(e,t,a)}}function yn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){xe(e,t,n)}}function Mt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){xe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){xe(e,t,n)}else l.current=null}function Yf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){xe(e,e.return,n)}}function $s(e,t,l){try{var a=e.stateNode;lh(a,e.type,l,t),a[Fe]=t}catch(n){xe(e,e.return,n)}}function Gf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sl(e.type)||e.tag===4}function Ws(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ki));else if(a!==4&&(a===27&&Sl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Fs(e,t,l),e=e.sibling;e!==null;)Fs(e,t,l),e=e.sibling}function Bi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Sl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Bi(e,t,l),e=e.sibling;e!==null;)Bi(e,t,l),e=e.sibling}function Qf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Xe(t,a,l),t[Ke]=e,t[Fe]=l}catch(i){xe(e,e.return,i)}}var Jt=!1,Re=!1,Ps=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,He=null;function B0(e,t){if(e=e.containerInfo,jc=er,e=Iu(e),Wr(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var c=0,f=-1,m=-1,z=0,A=0,_=e,N=null;t:for(;;){for(var w;_!==l||n!==0&&_.nodeType!==3||(f=c+n),_!==i||a!==0&&_.nodeType!==3||(m=c+a),_.nodeType===3&&(c+=_.nodeValue.length),(w=_.firstChild)!==null;)N=_,_=w;for(;;){if(_===e)break t;if(N===l&&++z===n&&(f=c),N===i&&++A===a&&(m=c),(w=_.nextSibling)!==null)break;_=N,N=_.parentNode}_=w}l=f===-1||m===-1?null:{start:f,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(zc={focusedElem:e,selectionRange:l},er=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var W=Vl(l.type,n,l.elementType===l.type);e=a.getSnapshotBeforeUpdate(W,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(K){xe(l,l.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Ec(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function Vf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:hl(e,l),a&4&&vn(5,l);break;case 1:if(hl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){xe(l,l.return,c)}else{var n=Vl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){xe(l,l.return,c)}}a&64&&Hf(l),a&512&&yn(l,l.return);break;case 3:if(hl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{wo(e,t)}catch(c){xe(l,l.return,c)}}break;case 27:t===null&&a&4&&Qf(l);case 26:case 5:hl(e,l),t===null&&a&4&&Yf(l),a&512&&yn(l,l.return);break;case 12:hl(e,l);break;case 13:hl(e,l),a&4&&Jf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=V0.bind(null,l),uh(e,l))));break;case 22:if(a=l.memoizedState!==null||Jt,!a){t=t!==null&&t.memoizedState!==null||Re,n=Jt;var i=Re;Jt=a,(Re=t)&&!i?ml(e,l,(l.subtreeFlags&8772)!==0):hl(e,l),Jt=n,Re=i}break;case 30:break;default:hl(e,l)}}function Zf(e){var t=e.alternate;t!==null&&(e.alternate=null,Zf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Dr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,et=!1;function $t(e,t,l){for(l=l.child;l!==null;)Kf(e,t,l),l=l.sibling}function Kf(e,t,l){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ha,l)}catch{}switch(l.tag){case 26:Re||Mt(l,t),$t(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Re||Mt(l,t);var a=Se,n=et;Sl(l.type)&&(Se=l.stateNode,et=!1),$t(e,t,l),An(l.stateNode),Se=a,et=n;break;case 5:Re||Mt(l,t);case 6:if(a=Se,n=et,Se=null,$t(e,t,l),Se=a,et=n,Se!==null)if(et)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(l.stateNode)}catch(i){xe(l,t,i)}else try{Se.removeChild(l.stateNode)}catch(i){xe(l,t,i)}break;case 18:Se!==null&&(et?(e=Se,kd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Bn(e)):kd(Se,l.stateNode));break;case 4:a=Se,n=et,Se=l.stateNode.containerInfo,et=!0,$t(e,t,l),Se=a,et=n;break;case 0:case 11:case 14:case 15:Re||pl(2,l,t),Re||pl(4,l,t),$t(e,t,l);break;case 1:Re||(Mt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Lf(l,t,a)),$t(e,t,l);break;case 21:$t(e,t,l);break;case 22:Re=(a=Re)||l.memoizedState!==null,$t(e,t,l),Re=a;break;default:$t(e,t,l)}}function Jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bn(e)}catch(l){xe(t,t.return,l)}}function U0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xf),t;default:throw Error(u(435,e.tag))}}function Is(e,t){var l=U0(e);t.forEach(function(a){var n=Z0.bind(null,e,a);l.has(a)||(l.add(a),a.then(n,n))})}function ct(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Sl(f.type)){Se=f.stateNode,et=!1;break e}break;case 5:Se=f.stateNode,et=!1;break e;case 3:case 4:Se=f.stateNode.containerInfo,et=!0;break e}f=f.return}if(Se===null)throw Error(u(160));Kf(i,c,n),Se=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)$f(t,e),t=t.sibling}var wt=null;function $f(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ut(e),a&4&&(pl(3,e,e.return),vn(3,e),pl(5,e,e.return));break;case 1:ct(t,e),ut(e),a&512&&(Re||l===null||Mt(l,l.return)),a&64&&Jt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=wt;if(ct(t,e),ut(e),a&512&&(Re||l===null||Mt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ga]||i[Ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Xe(i,a,l),i[Ke]=e,Ue(i),a=i;break e;case"link":var c=Qd("link","href",n).get(a+(l.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(f,1);break t}}i=n.createElement(a),Xe(i,a,l),n.head.appendChild(i);break;case"meta":if(c=Qd("meta","content",n).get(a+(l.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(f,1);break t}}i=n.createElement(a),Xe(i,a,l),n.head.appendChild(i);break;default:throw Error(u(468,a))}i[Ke]=e,Ue(i),a=i}e.stateNode=a}else Xd(n,e.type,e.stateNode);else e.stateNode=Gd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Xd(n,e.type,e.stateNode):Gd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&$s(e,e.memoizedProps,l.memoizedProps)}break;case 27:ct(t,e),ut(e),a&512&&(Re||l===null||Mt(l,l.return)),l!==null&&a&4&&$s(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ct(t,e),ut(e),a&512&&(Re||l===null||Mt(l,l.return)),e.flags&32){n=e.stateNode;try{na(n,"")}catch(w){xe(e,e.return,w)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,$s(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Ps=!0);break;case 6:if(ct(t,e),ut(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(w){xe(e,e.return,w)}}break;case 3:if(Fi=null,n=wt,wt=$i(t.containerInfo),ct(t,e),wt=n,ut(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(w){xe(e,e.return,w)}Ps&&(Ps=!1,Wf(e));break;case 4:a=wt,wt=$i(e.stateNode.containerInfo),ct(t,e),ut(e),wt=a;break;case 12:ct(t,e),ut(e);break;case 13:ct(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ic=Tt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 22:n=e.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,z=Jt,A=Re;if(Jt=z||n,Re=A||m,ct(t,e),Re=A,Jt=z,ut(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||m||Jt||Re||Zl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){m=l=t;try{if(i=m.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=m.stateNode;var _=m.memoizedProps.style,N=_!=null&&_.hasOwnProperty("display")?_.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(w){xe(m,m.return,w)}}}else if(t.tag===6){if(l===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(w){xe(m,m.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Is(e,l))));break;case 19:ct(t,e),ut(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 30:break;case 21:break;default:ct(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Gf(a)){l=a;break}a=a.return}if(l==null)throw Error(u(160));switch(l.tag){case 27:var n=l.stateNode,i=Ws(e);Bi(e,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(na(c,""),l.flags&=-33);var f=Ws(e);Bi(e,f,c);break;case 3:case 4:var m=l.stateNode.containerInfo,z=Ws(e);Fs(e,z,m);break;default:throw Error(u(161))}}catch(A){xe(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function hl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vf(e,t.alternate,t),t=t.sibling}function Zl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:pl(4,t,t.return),Zl(t);break;case 1:Mt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Lf(t,t.return,l),Zl(t);break;case 27:An(t.stateNode);case 26:case 5:Mt(t,t.return),Zl(t);break;case 22:t.memoizedState===null&&Zl(t);break;case 30:Zl(t);break;default:Zl(t)}e=e.sibling}}function ml(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ml(n,i,l),vn(4,i);break;case 1:if(ml(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){xe(a,a.return,z)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)No(m[n],f)}catch(z){xe(a,a.return,z)}}l&&c&64&&Hf(i),yn(i,i.return);break;case 27:Qf(i);case 26:case 5:ml(n,i,l),l&&a===null&&c&4&&Yf(i),yn(i,i.return);break;case 12:ml(n,i,l);break;case 13:ml(n,i,l),l&&c&4&&Jf(n,i);break;case 22:i.memoizedState===null&&ml(n,i,l),yn(i,i.return);break;case 30:break;default:ml(n,i,l)}t=t.sibling}}function ec(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&an(l))}function tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e))}function Dt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ff(e,t,l,a),t=t.sibling}function Ff(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,l,a),n&2048&&vn(9,t);break;case 1:Dt(e,t,l,a);break;case 3:Dt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e)));break;case 12:if(n&2048){Dt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){xe(t,t.return,m)}}else Dt(e,t,l,a);break;case 13:Dt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,l,a):bn(e,t):i._visibility&2?Dt(e,t,l,a):(i._visibility|=2,za(e,t,l,a,(t.subtreeFlags&10256)!==0)),n&2048&&ec(c,t);break;case 24:Dt(e,t,l,a),n&2048&&tc(t.alternate,t);break;default:Dt(e,t,l,a)}}function za(e,t,l,a,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,c=t,f=l,m=a,z=c.flags;switch(c.tag){case 0:case 11:case 15:za(i,c,f,m,n),vn(8,c);break;case 23:break;case 22:var A=c.stateNode;c.memoizedState!==null?A._visibility&2?za(i,c,f,m,n):bn(i,c):(A._visibility|=2,za(i,c,f,m,n)),n&&z&2048&&ec(c.alternate,c);break;case 24:za(i,c,f,m,n),n&&z&2048&&tc(c.alternate,c);break;default:za(i,c,f,m,n)}t=t.sibling}}function bn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:bn(l,a),n&2048&&ec(a.alternate,a);break;case 24:bn(l,a),n&2048&&tc(a.alternate,a);break;default:bn(l,a)}t=t.sibling}}var Sn=8192;function Na(e){if(e.subtreeFlags&Sn)for(e=e.child;e!==null;)Pf(e),e=e.sibling}function Pf(e){switch(e.tag){case 26:Na(e),e.flags&Sn&&e.memoizedState!==null&&jh(wt,e.memoizedState,e.memoizedProps);break;case 5:Na(e);break;case 3:case 4:var t=wt;wt=$i(e.stateNode.containerInfo),Na(e),wt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Sn,Sn=16777216,Na(e),Sn=t):Na(e));break;default:Na(e)}}function If(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,td(a,e)}If(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ed(e),e=e.sibling}function ed(e){switch(e.tag){case 0:case 11:case 15:jn(e),e.flags&2048&&pl(9,e,e.return);break;case 3:jn(e);break;case 12:jn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ui(e)):jn(e);break;default:jn(e)}}function Ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,td(a,e)}If(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:pl(8,t,t.return),Ui(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Ui(t));break;default:Ui(t)}e=e.sibling}}function td(e,t){for(;He!==null;){var l=He;switch(l.tag){case 0:case 11:case 15:pl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:an(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,He=a;else e:for(l=e;He!==null;){a=He;var n=a.sibling,i=a.return;if(Zf(a),a===l){He=null;break e}if(n!==null){n.return=i,He=n;break e}He=i}}}var q0={getCacheForType:function(e){var t=Je(Oe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},H0=typeof WeakMap=="function"?WeakMap:Map,fe=0,ye=null,ae=null,ie=0,de=0,ot=null,gl=!1,wa=!1,lc=!1,Wt=0,Te=0,xl=0,Kl=0,ac=0,jt=0,Ea=0,zn=null,tt=null,nc=!1,ic=0,qi=1/0,Hi=null,vl=null,Qe=0,yl=null,Ta=null,Aa=0,rc=0,sc=null,ld=null,Nn=0,cc=null;function ft(){if((fe&2)!==0&&ie!==0)return ie&-ie;if(M.T!==null){var e=ma;return e!==0?e:mc()}return gu()}function ad(){jt===0&&(jt=(ie&536870912)===0||ue?du():536870912);var e=St.current;return e!==null&&(e.flags|=32),jt}function dt(e,t,l){(e===ye&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Ra(e,0),bl(e,ie,jt,!1)),Ya(e,l),((fe&2)===0||e!==ye)&&(e===ye&&((fe&2)===0&&(Kl|=l),Te===4&&bl(e,ie,jt,!1)),_t(e))}function nd(e,t,l){if((fe&6)!==0)throw Error(u(327));var a=!l&&(t&124)===0&&(t&e.expiredLanes)===0||La(e,t),n=a?G0(e,t):fc(e,t,!0),i=a;do{if(n===0){wa&&!a&&bl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!L0(l)){n=fc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=zn;var m=f.current.memoizedState.isDehydrated;if(m&&(Ra(f,c).flags|=256),c=fc(f,c,!1),c!==2){if(lc&&!m){f.errorRecoveryDisabledLanes|=i,Kl|=i,n=4;break e}i=tt,tt=n,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Ra(e,0),bl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:bl(a,t,jt,!gl);break e;case 2:tt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=ic+300-Tt(),10<n)){if(bl(a,t,jt,!gl),Wn(a,0,!0)!==0)break e;a.timeoutHandle=Od(id.bind(null,a,l,tt,Hi,nc,t,jt,Kl,Ea,gl,i,2,-0,0),n);break e}id(a,l,tt,Hi,nc,t,jt,Kl,Ea,gl,i,0,-0,0)}}break}while(!0);_t(e)}function id(e,t,l,a,n,i,c,f,m,z,A,_,N,w){if(e.timeoutHandle=-1,_=t.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Dn={stylesheets:null,count:0,unsuspend:Sh},Pf(t),_=zh(),_!==null)){e.cancelPendingCommit=_(dd.bind(null,e,t,i,l,a,n,c,f,m,A,1,N,w)),bl(e,i,c,!z);return}dd(e,t,i,l,a,n,c,f,m)}function L0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!rt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bl(e,t,l,a){t&=~ac,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-it(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&hu(e,l,t)}function Li(){return(fe&6)===0?(wn(0),!1):!0}function uc(){if(ae!==null){if(de===0)var e=ae.return;else e=ae,Gt=Yl=null,Es(e),Sa=null,mn=0,e=ae;for(;e!==null;)qf(e.alternate,e),e=e.return;ae=null}}function Ra(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,nh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),uc(),ye=e,ae=l=Ht(e.current,null),ie=t,de=0,ot=null,gl=!1,wa=La(e,t),lc=!1,Ea=jt=ac=Kl=xl=Te=0,tt=zn=null,nc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-it(a),i=1<<n;t|=e[n],a&=~i}return Wt=t,ci(),l}function rd(e,t){te=null,M.H=Ti,t===rn||t===xi?(t=jo(),de=3):t===yo?(t=jo(),de=4):de=t===Nf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ae===null&&(Te=1,_i(e,xt(t,e.current)))}function sd(){var e=M.H;return M.H=Ti,e===null?Ti:e}function cd(){var e=M.A;return M.A=q0,e}function oc(){Te=4,gl||(ie&4194048)!==ie&&St.current!==null||(wa=!0),(xl&134217727)===0&&(Kl&134217727)===0||ye===null||bl(ye,ie,jt,!1)}function fc(e,t,l){var a=fe;fe|=2;var n=sd(),i=cd();(ye!==e||ie!==t)&&(Hi=null,Ra(e,t)),t=!1;var c=Te;e:do try{if(de!==0&&ae!==null){var f=ae,m=ot;switch(de){case 8:uc(),c=6;break e;case 3:case 2:case 9:case 6:St.current===null&&(t=!0);var z=de;if(de=0,ot=null,Ma(e,f,m,z),l&&wa){c=0;break e}break;default:z=de,de=0,ot=null,Ma(e,f,m,z)}}Y0(),c=Te;break}catch(A){rd(e,A)}while(!0);return t&&e.shellSuspendCounter++,Gt=Yl=null,fe=a,M.H=n,M.A=i,ae===null&&(ye=null,ie=0,ci()),c}function Y0(){for(;ae!==null;)ud(ae)}function G0(e,t){var l=fe;fe|=2;var a=sd(),n=cd();ye!==e||ie!==t?(Hi=null,qi=Tt()+500,Ra(e,t)):wa=La(e,t);e:do try{if(de!==0&&ae!==null){t=ae;var i=ot;t:switch(de){case 1:de=0,ot=null,Ma(e,t,i,1);break;case 2:case 9:if(bo(i)){de=0,ot=null,od(t);break}t=function(){de!==2&&de!==9||ye!==e||(de=7),_t(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:bo(i)?(de=0,ot=null,od(t)):(de=0,ot=null,Ma(e,t,i,7));break;case 5:var c=null;switch(ae.tag){case 26:c=ae.memoizedState;case 5:case 27:var f=ae;if(!c||Vd(c)){de=0,ot=null;var m=f.sibling;if(m!==null)ae=m;else{var z=f.return;z!==null?(ae=z,Yi(z)):ae=null}break t}}de=0,ot=null,Ma(e,t,i,5);break;case 6:de=0,ot=null,Ma(e,t,i,6);break;case 8:uc(),Te=6;break e;default:throw Error(u(462))}}Q0();break}catch(A){rd(e,A)}while(!0);return Gt=Yl=null,M.H=a,M.A=n,fe=l,ae!==null?0:(ye=null,ie=0,ci(),Te)}function Q0(){for(;ae!==null&&!f1();)ud(ae)}function ud(e){var t=Bf(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Yi(e):ae=t}function od(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Mf(l,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Mf(l,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:Es(t);default:qf(l,t),t=ae=uo(t,Wt),t=Bf(l,t,Wt)}e.memoizedProps=e.pendingProps,t===null?Yi(e):ae=t}function Ma(e,t,l,a){Gt=Yl=null,Es(t),Sa=null,mn=0;var n=t.return;try{if(_0(e,n,t,l,ie)){Te=1,_i(e,xt(l,e.current)),ae=null;return}}catch(i){if(n!==null)throw ae=n,i;Te=1,_i(e,xt(l,e.current)),ae=null;return}t.flags&32768?(ue||a===1?e=!0:wa||(ie&536870912)!==0?e=!1:(gl=e=!0,(a===2||a===9||a===3||a===6)&&(a=St.current,a!==null&&a.tag===13&&(a.flags|=16384))),fd(t,e)):Yi(t)}function Yi(e){var t=e;do{if((t.flags&32768)!==0){fd(t,gl);return}e=t.return;var l=C0(t.alternate,t,Wt);if(l!==null){ae=l;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Te===0&&(Te=5)}function fd(e,t){do{var l=k0(e.alternate,e);if(l!==null){l.flags&=32767,ae=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=l}while(e!==null);Te=6,ae=null}function dd(e,t,l,a,n,i,c,f,m){e.cancelPendingCommit=null;do Gi();while(Qe!==0);if((fe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=ts,S1(e,l,i,c,f,m),e===ye&&(ae=ye=null,ie=0),Ta=t,yl=e,Aa=l,rc=i,sc=n,ld=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,K0(Kn,function(){return xd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,n=q.p,q.p=2,c=fe,fe|=4;try{B0(e,t,l)}finally{fe=c,q.p=n,M.T=a}}Qe=1,pd(),hd(),md()}}function pd(){if(Qe===1){Qe=0;var e=yl,t=Ta,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var a=q.p;q.p=2;var n=fe;fe|=4;try{$f(t,e);var i=zc,c=Iu(e.containerInfo),f=i.focusedElem,m=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&Pu(f.ownerDocument.documentElement,f)){if(m!==null&&Wr(f)){var z=m.start,A=m.end;if(A===void 0&&(A=z),"selectionStart"in f)f.selectionStart=z,f.selectionEnd=Math.min(A,f.value.length);else{var _=f.ownerDocument||document,N=_&&_.defaultView||window;if(N.getSelection){var w=N.getSelection(),W=f.textContent.length,K=Math.min(m.start,W),me=m.end===void 0?K:Math.min(m.end,W);!w.extend&&K>me&&(c=me,me=K,K=c);var S=Fu(f,K),y=Fu(f,me);if(S&&y&&(w.rangeCount!==1||w.anchorNode!==S.node||w.anchorOffset!==S.offset||w.focusNode!==y.node||w.focusOffset!==y.offset)){var j=_.createRange();j.setStart(S.node,S.offset),w.removeAllRanges(),K>me?(w.addRange(j),w.extend(y.node,y.offset)):(j.setEnd(y.node,y.offset),w.addRange(j))}}}}for(_=[],w=f;w=w.parentNode;)w.nodeType===1&&_.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<_.length;f++){var D=_[f];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}er=!!jc,zc=jc=null}finally{fe=n,q.p=a,M.T=l}}e.current=t,Qe=2}}function hd(){if(Qe===2){Qe=0;var e=yl,t=Ta,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var a=q.p;q.p=2;var n=fe;fe|=4;try{Vf(e,t.alternate,t)}finally{fe=n,q.p=a,M.T=l}}Qe=3}}function md(){if(Qe===4||Qe===3){Qe=0,d1();var e=yl,t=Ta,l=Aa,a=ld;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Ta=yl=null,gd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(vl=null),Rr(l),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ha,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,n=q.p,q.p=2,M.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var f=a[c];i(f.value,{componentStack:f.stack})}}finally{M.T=t,q.p=n}}(Aa&3)!==0&&Gi(),_t(e),n=e.pendingLanes,(l&4194090)!==0&&(n&42)!==0?e===cc?Nn++:(Nn=0,cc=e):Nn=0,wn(0)}}function gd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,an(t)))}function Gi(e){return pd(),hd(),md(),xd()}function xd(){if(Qe!==5)return!1;var e=yl,t=rc;rc=0;var l=Rr(Aa),a=M.T,n=q.p;try{q.p=32>l?32:l,M.T=null,l=sc,sc=null;var i=yl,c=Aa;if(Qe=0,Ta=yl=null,Aa=0,(fe&6)!==0)throw Error(u(331));var f=fe;if(fe|=4,ed(i.current),Ff(i,i.current,c,l),fe=f,wn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ha,i)}catch{}return!0}finally{q.p=n,M.T=a,gd(e,t)}}function vd(e,t,l){t=xt(l,t),t=Ls(e.stateNode,t,2),e=ul(e,t,2),e!==null&&(Ya(e,2),_t(e))}function xe(e,t,l){if(e.tag===3)vd(e,e,l);else for(;t!==null;){if(t.tag===3){vd(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(vl===null||!vl.has(a))){e=xt(l,e),l=jf(2),a=ul(t,l,2),a!==null&&(zf(l,a,t,e),Ya(a,2),_t(a));break}}t=t.return}}function dc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new H0;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(lc=!0,n.add(l),e=X0.bind(null,e,t,l),t.then(e,e))}function X0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ye===e&&(ie&l)===l&&(Te===4||Te===3&&(ie&62914560)===ie&&300>Tt()-ic?(fe&2)===0&&Ra(e,0):ac|=l,Ea===ie&&(Ea=0)),_t(e)}function yd(e,t){t===0&&(t=pu()),e=fa(e,t),e!==null&&(Ya(e,t),_t(e))}function V0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),yd(e,l)}function Z0(e,t){var l=0;switch(e.tag){case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),yd(e,l)}function K0(e,t){return wr(e,t)}var Qi=null,Da=null,pc=!1,Xi=!1,hc=!1,Jl=0;function _t(e){e!==Da&&e.next===null&&(Da===null?Qi=Da=e:Da=Da.next=e),Xi=!0,pc||(pc=!0,$0())}function wn(e,t){if(!hc&&Xi){hc=!0;do for(var l=!1,a=Qi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-it(42|e)+1)-1,i&=n&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,zd(a,i))}else i=ie,i=Wn(a,a===ye?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||La(a,i)||(l=!0,zd(a,i));a=a.next}while(l);hc=!1}}function J0(){bd()}function bd(){Xi=pc=!1;var e=0;Jl!==0&&(ah()&&(e=Jl),Jl=0);for(var t=Tt(),l=null,a=Qi;a!==null;){var n=a.next,i=Sd(a,t);i===0?(a.next=null,l===null?Qi=n:l.next=n,n===null&&(Da=l)):(l=a,(e!==0||(i&3)!==0)&&(Xi=!0)),a=n}wn(e)}function Sd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-it(i),f=1<<c,m=n[c];m===-1?((f&l)===0||(f&a)!==0)&&(n[c]=b1(f,t)):m<=t&&(e.expiredLanes|=f),i&=~f}if(t=ye,l=ie,l=Wn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Er(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||La(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Er(a),Rr(l)){case 2:case 8:l=ou;break;case 32:l=Kn;break;case 268435456:l=fu;break;default:l=Kn}return a=jd.bind(null,e),l=wr(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Er(a),e.callbackPriority=2,e.callbackNode=null,2}function jd(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Gi()&&e.callbackNode!==l)return null;var a=ie;return a=Wn(e,e===ye?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(nd(e,a,t),Sd(e,Tt()),e.callbackNode!=null&&e.callbackNode===l?jd.bind(null,e):null)}function zd(e,t){if(Gi())return null;nd(e,t,!0)}function $0(){ih(function(){(fe&6)!==0?wr(uu,J0):bd()})}function mc(){return Jl===0&&(Jl=du()),Jl}function Nd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function wd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function W0(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Nd((n[Fe]||null).action),c=a.submitter;c&&(t=(t=c[Fe]||null)?Nd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new ii("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Jl!==0){var m=c?wd(n,c):new FormData(n);ks(l,{pending:!0,data:m,method:n.method,action:i},null,m)}}else typeof i=="function"&&(f.preventDefault(),m=c?wd(n,c):new FormData(n),ks(l,{pending:!0,data:m,method:n.method,action:i},i,m))},currentTarget:n}]})}}for(var gc=0;gc<es.length;gc++){var xc=es[gc],F0=xc.toLowerCase(),P0=xc[0].toUpperCase()+xc.slice(1);Nt(F0,"on"+P0)}Nt(lo,"onAnimationEnd"),Nt(ao,"onAnimationIteration"),Nt(no,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(m0,"onTransitionRun"),Nt(g0,"onTransitionStart"),Nt(x0,"onTransitionCancel"),Nt(io,"onTransitionEnd"),ta("onMouseEnter",["mouseout","mouseover"]),ta("onMouseLeave",["mouseout","mouseover"]),ta("onPointerEnter",["pointerout","pointerover"]),ta("onPointerLeave",["pointerout","pointerover"]),_l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_l("onBeforeInput",["compositionend","keypress","textInput","paste"]),_l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));function Ed(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var f=a[c],m=f.instance,z=f.currentTarget;if(f=f.listener,m!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=z;try{i(n)}catch(A){Di(A)}n.currentTarget=null,i=m}else for(c=0;c<a.length;c++){if(f=a[c],m=f.instance,z=f.currentTarget,f=f.listener,m!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=z;try{i(n)}catch(A){Di(A)}n.currentTarget=null,i=m}}}}function ne(e,t){var l=t[Mr];l===void 0&&(l=t[Mr]=new Set);var a=e+"__bubble";l.has(a)||(Td(t,e,2,!1),l.add(a))}function vc(e,t,l){var a=0;t&&(a|=4),Td(l,e,a,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function yc(e){if(!e[Vi]){e[Vi]=!0,vu.forEach(function(l){l!=="selectionchange"&&(I0.has(l)||vc(l,!1,e),vc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,vc("selectionchange",!1,t))}}function Td(e,t,l,a){switch(Fd(t)){case 2:var n=Eh;break;case 8:n=Th;break;default:n=Oc}l=n.bind(null,t,l,e),n=void 0,!Yr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function bc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=a.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=Pl(f),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){a=i=c;continue e}f=f.parentNode}}a=a.return}_u(function(){var z=i,A=Hr(l),_=[];e:{var N=ro.get(e);if(N!==void 0){var w=ii,W=e;switch(e){case"keypress":if(ai(l)===0)break e;case"keydown":case"keyup":w=K1;break;case"focusin":W="focus",w=Vr;break;case"focusout":W="blur",w=Vr;break;case"beforeblur":case"afterblur":w=Vr;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=k1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=W1;break;case lo:case ao:case no:w=q1;break;case io:w=P1;break;case"scroll":case"scrollend":w=O1;break;case"wheel":w=e0;break;case"copy":case"cut":case"paste":w=L1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Uu;break;case"toggle":case"beforetoggle":w=l0}var K=(t&4)!==0,me=!K&&(e==="scroll"||e==="scrollend"),S=K?N!==null?N+"Capture":null:N;K=[];for(var y=z,j;y!==null;){var D=y;if(j=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||j===null||S===null||(D=Xa(y,S),D!=null&&K.push(Tn(y,D,j))),me)break;y=y.return}0<K.length&&(N=new w(N,W,null,l,A),_.push({event:N,listeners:K}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",N&&l!==qr&&(W=l.relatedTarget||l.fromElement)&&(Pl(W)||W[Fl]))break e;if((w||N)&&(N=A.window===A?A:(N=A.ownerDocument)?N.defaultView||N.parentWindow:window,w?(W=l.relatedTarget||l.toElement,w=z,W=W?Pl(W):null,W!==null&&(me=h(W),K=W.tag,W!==me||K!==5&&K!==27&&K!==6)&&(W=null)):(w=null,W=z),w!==W)){if(K=ku,D="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(K=Uu,D="onPointerLeave",S="onPointerEnter",y="pointer"),me=w==null?N:Qa(w),j=W==null?N:Qa(W),N=new K(D,y+"leave",w,l,A),N.target=me,N.relatedTarget=j,D=null,Pl(A)===z&&(K=new K(S,y+"enter",W,l,A),K.target=j,K.relatedTarget=me,D=K),me=D,w&&W)t:{for(K=w,S=W,y=0,j=K;j;j=_a(j))y++;for(j=0,D=S;D;D=_a(D))j++;for(;0<y-j;)K=_a(K),y--;for(;0<j-y;)S=_a(S),j--;for(;y--;){if(K===S||S!==null&&K===S.alternate)break t;K=_a(K),S=_a(S)}K=null}else K=null;w!==null&&Ad(_,N,w,K,!1),W!==null&&me!==null&&Ad(_,me,W,K,!0)}}e:{if(N=z?Qa(z):window,w=N.nodeName&&N.nodeName.toLowerCase(),w==="select"||w==="input"&&N.type==="file")var L=Vu;else if(Qu(N))if(Zu)L=d0;else{L=o0;var le=u0}else w=N.nodeName,!w||w.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?z&&Ur(z.elementType)&&(L=Vu):L=f0;if(L&&(L=L(e,z))){Xu(_,L,l,A);break e}le&&le(e,N,z),e==="focusout"&&z&&N.type==="number"&&z.memoizedProps.value!=null&&Br(N,"number",N.value)}switch(le=z?Qa(z):window,e){case"focusin":(Qu(le)||le.contentEditable==="true")&&(ca=le,Fr=z,Pa=null);break;case"focusout":Pa=Fr=ca=null;break;case"mousedown":Pr=!0;break;case"contextmenu":case"mouseup":case"dragend":Pr=!1,eo(_,l,A);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":eo(_,l,A)}var Q;if(Kr)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else sa?Yu(e,l)&&(J="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(J="onCompositionStart");J&&(qu&&l.locale!=="ko"&&(sa||J!=="onCompositionStart"?J==="onCompositionEnd"&&sa&&(Q=Ou()):(il=A,Gr="value"in il?il.value:il.textContent,sa=!0)),le=Zi(z,J),0<le.length&&(J=new Bu(J,e,null,l,A),_.push({event:J,listeners:le}),Q?J.data=Q:(Q=Gu(l),Q!==null&&(J.data=Q)))),(Q=n0?i0(e,l):r0(e,l))&&(J=Zi(z,"onBeforeInput"),0<J.length&&(le=new Bu("onBeforeInput","beforeinput",null,l,A),_.push({event:le,listeners:J}),le.data=Q)),W0(_,e,z,l,A)}Ed(_,t)})}function Tn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Zi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Xa(e,l),n!=null&&a.unshift(Tn(e,n,i)),n=Xa(e,t),n!=null&&a.push(Tn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function _a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ad(e,t,l,a,n){for(var i=t._reactName,c=[];l!==null&&l!==a;){var f=l,m=f.alternate,z=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||z===null||(m=z,n?(z=Xa(l,i),z!=null&&c.unshift(Tn(l,z,m))):n||(z=Xa(l,i),z!=null&&c.push(Tn(l,z,m)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var eh=/\r\n?/g,th=/\u0000|\uFFFD/g;function Rd(e){return(typeof e=="string"?e:""+e).replace(eh,`
`).replace(th,"")}function Md(e,t){return t=Rd(t),Rd(e)===t}function Ki(){}function he(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||na(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&na(e,""+a);break;case"className":Pn(e,"class",a);break;case"tabIndex":Pn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(e,l,a);break;case"style":Mu(e,a,i);break;case"data":if(t!=="object"){Pn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&he(e,t,"name",n.name,n,null),he(e,t,"formEncType",n.formEncType,n,null),he(e,t,"formMethod",n.formMethod,n,null),he(e,t,"formTarget",n.formTarget,n,null)):(he(e,t,"encType",n.encType,n,null),he(e,t,"method",n.method,n,null),he(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ki);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=ti(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Fn(e,"popover",a);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Fn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=D1.get(l)||l,Fn(e,l,a))}}function Sc(e,t,l,a,n,i){switch(l){case"style":Mu(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"children":typeof a=="string"?na(e,a):(typeof a=="number"||typeof a=="bigint")&&na(e,""+a);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yu.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Fe]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Fn(e,l,a)}}}function Xe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:he(e,t,i,c,l,null)}}n&&he(e,t,"srcSet",l.srcSet,l,null),a&&he(e,t,"src",l.src,l,null);return;case"input":ne("invalid",e);var f=i=c=n=null,m=null,z=null;for(a in l)if(l.hasOwnProperty(a)){var A=l[a];if(A!=null)switch(a){case"name":n=A;break;case"type":c=A;break;case"checked":m=A;break;case"defaultChecked":z=A;break;case"value":i=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:he(e,t,a,A,l,null)}}Eu(e,i,f,m,z,c,n,!1),In(e);return;case"select":ne("invalid",e),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:he(e,t,n,f,l,null)}t=i,l=c,e.multiple=!!a,t!=null?aa(e,!!a,t,!1):l!=null&&aa(e,!!a,l,!0);return;case"textarea":ne("invalid",e),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(f=l[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:he(e,t,c,f,l,null)}Au(e,a,n,i),In(e);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:he(e,t,m,a,l,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(a=0;a<En.length;a++)ne(En[a],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in l)if(l.hasOwnProperty(z)&&(a=l[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:he(e,t,z,a,l,null)}return;default:if(Ur(t)){for(A in l)l.hasOwnProperty(A)&&(a=l[A],a!==void 0&&Sc(e,t,A,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&he(e,t,f,a,l,null))}function lh(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,f=null,m=null,z=null,A=null;for(w in l){var _=l[w];if(l.hasOwnProperty(w)&&_!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":m=_;default:a.hasOwnProperty(w)||he(e,t,w,null,a,_)}}for(var N in a){var w=a[N];if(_=l[N],a.hasOwnProperty(N)&&(w!=null||_!=null))switch(N){case"type":i=w;break;case"name":n=w;break;case"checked":z=w;break;case"defaultChecked":A=w;break;case"value":c=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:w!==_&&he(e,t,N,w,a,_)}}kr(e,c,f,m,z,A,i,n);return;case"select":w=c=f=N=null;for(i in l)if(m=l[i],l.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":w=m;default:a.hasOwnProperty(i)||he(e,t,i,null,a,m)}for(n in a)if(i=a[n],m=l[n],a.hasOwnProperty(n)&&(i!=null||m!=null))switch(n){case"value":N=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==m&&he(e,t,n,i,a,m)}t=f,l=c,a=w,N!=null?aa(e,!!l,N,!1):!!a!=!!l&&(t!=null?aa(e,!!l,t,!0):aa(e,!!l,l?[]:"",!1));return;case"textarea":w=N=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:he(e,t,f,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":N=n;break;case"defaultValue":w=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&he(e,t,c,n,a,i)}Tu(e,N,w);return;case"option":for(var W in l)if(N=l[W],l.hasOwnProperty(W)&&N!=null&&!a.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:he(e,t,W,null,a,N)}for(m in a)if(N=a[m],w=l[m],a.hasOwnProperty(m)&&N!==w&&(N!=null||w!=null))switch(m){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:he(e,t,m,N,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in l)N=l[K],l.hasOwnProperty(K)&&N!=null&&!a.hasOwnProperty(K)&&he(e,t,K,null,a,N);for(z in a)if(N=a[z],w=l[z],a.hasOwnProperty(z)&&N!==w&&(N!=null||w!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:he(e,t,z,N,a,w)}return;default:if(Ur(t)){for(var me in l)N=l[me],l.hasOwnProperty(me)&&N!==void 0&&!a.hasOwnProperty(me)&&Sc(e,t,me,void 0,a,N);for(A in a)N=a[A],w=l[A],!a.hasOwnProperty(A)||N===w||N===void 0&&w===void 0||Sc(e,t,A,N,a,w);return}}for(var S in l)N=l[S],l.hasOwnProperty(S)&&N!=null&&!a.hasOwnProperty(S)&&he(e,t,S,null,a,N);for(_ in a)N=a[_],w=l[_],!a.hasOwnProperty(_)||N===w||N==null&&w==null||he(e,t,_,N,a,w)}var jc=null,zc=null;function Ji(e){return e.nodeType===9?e:e.ownerDocument}function Dd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _d(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wc=null;function ah(){var e=window.event;return e&&e.type==="popstate"?e===wc?!1:(wc=e,!0):(wc=null,!1)}var Od=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(e){return Cd.resolve(null).then(e).catch(rh)}:Od;function rh(e){setTimeout(function(){throw e})}function Sl(e){return e==="head"}function kd(e,t){var l=t,a=0,n=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var c=e.ownerDocument;if(l&1&&An(c.documentElement),l&2&&An(c.body),l&4)for(l=c.head,An(l),c=l.firstChild;c;){var f=c.nextSibling,m=c.nodeName;c[Ga]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=f}}if(n===0){e.removeChild(i),Bn(t);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);Bn(t)}function Ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ec(l),Dr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function sh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ga])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function ch(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Et(e.nextSibling),e===null))return null;return e}function Tc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function uh(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Ac=null;function Bd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function Ud(e,t,l){switch(t=Ji(l),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function An(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Dr(e)}var zt=new Map,qd=new Set;function $i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=q.d;q.d={f:oh,r:fh,D:dh,C:ph,L:hh,m:mh,X:xh,S:gh,M:vh};function oh(){var e=Ft.f(),t=Li();return e||t}function fh(e){var t=Il(e);t!==null&&t.tag===5&&t.type==="form"?af(t):Ft.r(e)}var Oa=typeof document>"u"?null:document;function Hd(e,t,l){var a=Oa;if(a&&typeof t=="string"&&t){var n=gt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),qd.has(n)||(qd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Xe(t,"link",e),Ue(t),a.head.appendChild(t)))}}function dh(e){Ft.D(e),Hd("dns-prefetch",e,null)}function ph(e,t){Ft.C(e,t),Hd("preconnect",e,t)}function hh(e,t,l){Ft.L(e,t,l);var a=Oa;if(a&&e&&t){var n='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+gt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+gt(l.imageSizes)+'"]')):n+='[href="'+gt(e)+'"]';var i=n;switch(t){case"style":i=Ca(e);break;case"script":i=ka(e)}zt.has(i)||(e=R({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),zt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Rn(i))||t==="script"&&a.querySelector(Mn(i))||(t=a.createElement("link"),Xe(t,"link",e),Ue(t),a.head.appendChild(t)))}}function mh(e,t){Ft.m(e,t);var l=Oa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+gt(a)+'"][href="'+gt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ka(e)}if(!zt.has(i)&&(e=R({rel:"modulepreload",href:e},t),zt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Mn(i)))return}a=l.createElement("link"),Xe(a,"link",e),Ue(a),l.head.appendChild(a)}}}function gh(e,t,l){Ft.S(e,t,l);var a=Oa;if(a&&e){var n=ea(a).hoistableStyles,i=Ca(e);t=t||"default";var c=n.get(i);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(Rn(i)))f.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},l),(l=zt.get(i))&&Rc(e,l);var m=c=a.createElement("link");Ue(m),Xe(m,"link",e),m._p=new Promise(function(z,A){m.onload=z,m.onerror=A}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Wi(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(i,c)}}}function xh(e,t){Ft.X(e,t);var l=Oa;if(l&&e){var a=ea(l).hoistableScripts,n=ka(e),i=a.get(n);i||(i=l.querySelector(Mn(n)),i||(e=R({src:e,async:!0},t),(t=zt.get(n))&&Mc(e,t),i=l.createElement("script"),Ue(i),Xe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function vh(e,t){Ft.M(e,t);var l=Oa;if(l&&e){var a=ea(l).hoistableScripts,n=ka(e),i=a.get(n);i||(i=l.querySelector(Mn(n)),i||(e=R({src:e,async:!0,type:"module"},t),(t=zt.get(n))&&Mc(e,t),i=l.createElement("script"),Ue(i),Xe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Ld(e,t,l,a){var n=(n=P.current)?$i(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ca(l.href),l=ea(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ca(l.href);var i=ea(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Rn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),zt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},zt.set(e,l),i||yh(n,e,l,c.state))),t&&a===null)throw Error(u(528,""));return c}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ka(l),l=ea(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ca(e){return'href="'+gt(e)+'"'}function Rn(e){return'link[rel="stylesheet"]['+e+"]"}function Yd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function yh(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Xe(t,"link",l),Ue(t),e.head.appendChild(t))}function ka(e){return'[src="'+gt(e)+'"]'}function Mn(e){return"script[async]"+e}function Gd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+gt(l.href)+'"]');if(a)return t.instance=a,Ue(a),a;var n=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ue(a),Xe(a,"style",n),Wi(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ca(l.href);var i=e.querySelector(Rn(n));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;a=Yd(l),(n=zt.get(n))&&Rc(a,n),i=(e.ownerDocument||e).createElement("link"),Ue(i);var c=i;return c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),Xe(i,"link",a),t.state.loading|=4,Wi(i,l.precedence,e),t.instance=i;case"script":return i=ka(l.src),(n=e.querySelector(Mn(i)))?(t.instance=n,Ue(n),n):(a=l,(n=zt.get(i))&&(a=R({},l),Mc(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ue(n),Xe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Wi(a,l.precedence,e));return t.instance}function Wi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fi=null;function Qd(e,t,l){if(Fi===null){var a=new Map,n=Fi=new Map;n.set(l,a)}else n=Fi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Ga]||i[Ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=a.get(c);f?f.push(i):a.set(c,[i])}}return a}function Xd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function bh(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Dn=null;function Sh(){}function jh(e,t,l){if(Dn===null)throw Error(u(475));var a=Dn;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Ca(l.href),i=e.querySelector(Rn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Pi.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=i,Ue(i);return}i=e.ownerDocument||e,l=Yd(l),(n=zt.get(n))&&Rc(l,n),i=i.createElement("link"),Ue(i);var c=i;c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),Xe(i,"link",l),t.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Pi.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function zh(){if(Dn===null)throw Error(u(475));var e=Dn;return e.stylesheets&&e.count===0&&Dc(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&Dc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Pi(){if(this.count--,this.count===0){if(this.stylesheets)Dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ii=null;function Dc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ii=new Map,t.forEach(Nh,e),Ii=null,Pi.call(e))}function Nh(e,t){if(!(t.state.loading&4)){var l=Ii.get(e);if(l)var a=l.get(null);else{l=new Map,Ii.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=Pi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var _n={$$typeof:I,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function wh(e,t,l,a,n,i,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.hiddenUpdates=Tr(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Zd(e,t,l,a,n,i,c,f,m,z,A,_){return e=new wh(e,t,l,c,f,m,z,_),t=1,i===!0&&(t|=24),i=st(3,null,null,t),e.current=i,i.stateNode=e,t=ds(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},gs(i),e}function Kd(e){return e?(e=da,e):da}function Jd(e,t,l,a,n,i){n=Kd(n),a.context===null?a.context=n:a.pendingContext=n,a=cl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=ul(e,a,t),l!==null&&(dt(l,e,t),cn(l,e,t))}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function _c(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function Wd(e){if(e.tag===13){var t=fa(e,67108864);t!==null&&dt(t,e,67108864),_c(e,67108864)}}var er=!0;function Eh(e,t,l,a){var n=M.T;M.T=null;var i=q.p;try{q.p=2,Oc(e,t,l,a)}finally{q.p=i,M.T=n}}function Th(e,t,l,a){var n=M.T;M.T=null;var i=q.p;try{q.p=8,Oc(e,t,l,a)}finally{q.p=i,M.T=n}}function Oc(e,t,l,a){if(er){var n=Cc(a);if(n===null)bc(e,t,a,tr,l),Pd(e,a);else if(Rh(n,e,t,l,a))a.stopPropagation();else if(Pd(e,a),t&4&&-1<Ah.indexOf(e)){for(;n!==null;){var i=Il(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Dl(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var m=1<<31-it(c);f.entanglements[1]|=m,c&=~m}_t(i),(fe&6)===0&&(qi=Tt()+500,wn(0))}}break;case 13:f=fa(i,2),f!==null&&dt(f,i,2),Li(),_c(i,2)}if(i=Cc(a),i===null&&bc(e,t,a,tr,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else bc(e,t,a,null,l)}}function Cc(e){return e=Hr(e),kc(e)}var tr=null;function kc(e){if(tr=null,e=Pl(e),e!==null){var t=h(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=b(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function Fd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p1()){case uu:return 2;case ou:return 8;case Kn:case h1:return 32;case fu:return 268435456;default:return 32}default:return 32}}var Bc=!1,jl=null,zl=null,Nl=null,On=new Map,Cn=new Map,wl=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pd(e,t){switch(e){case"focusin":case"focusout":jl=null;break;case"dragenter":case"dragleave":zl=null;break;case"mouseover":case"mouseout":Nl=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function kn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Il(t),t!==null&&Wd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Rh(e,t,l,a,n){switch(t){case"focusin":return jl=kn(jl,e,t,l,a,n),!0;case"dragenter":return zl=kn(zl,e,t,l,a,n),!0;case"mouseover":return Nl=kn(Nl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return On.set(i,kn(On.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,kn(Cn.get(i)||null,e,t,l,a,n)),!0}return!1}function Id(e){var t=Pl(e.target);if(t!==null){var l=h(t);if(l!==null){if(t=l.tag,t===13){if(t=b(l),t!==null){e.blockedOn=t,j1(e.priority,function(){if(l.tag===13){var a=ft();a=Ar(a);var n=fa(l,a);n!==null&&dt(n,l,a),_c(l,a)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Cc(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);qr=a,l.target.dispatchEvent(a),qr=null}else return t=Il(l),t!==null&&Wd(t),e.blockedOn=l,!1;t.shift()}return!0}function ep(e,t,l){lr(e)&&l.delete(t)}function Mh(){Bc=!1,jl!==null&&lr(jl)&&(jl=null),zl!==null&&lr(zl)&&(zl=null),Nl!==null&&lr(Nl)&&(Nl=null),On.forEach(ep),Cn.forEach(ep)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Mh)))}var nr=null;function tp(e){nr!==e&&(nr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){nr===e&&(nr=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(kc(a||l)===null)continue;break}var i=Il(l);i!==null&&(e.splice(t,3),t-=3,ks(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Bn(e){function t(m){return ar(m,e)}jl!==null&&ar(jl,e),zl!==null&&ar(zl,e),Nl!==null&&ar(Nl,e),On.forEach(t),Cn.forEach(t);for(var l=0;l<wl.length;l++){var a=wl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wl.length&&(l=wl[0],l.blockedOn===null);)Id(l),l.blockedOn===null&&wl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[Fe]||null;if(typeof i=="function")c||tp(l);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Fe]||null)f=c.formAction;else if(kc(n)!==null)continue}else f=c.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),tp(l)}}}function Uc(e){this._internalRoot=e}ir.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var l=t.current,a=ft();Jd(l,a,e,t,null,null)},ir.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Li(),t[Fl]=null}};function ir(e){this._internalRoot=e}ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var l=0;l<wl.length&&t!==0&&t<wl[l].priority;l++);wl.splice(l,0,e),l===0&&Id(e)}};var lp=o.version;if(lp!=="19.1.1")throw Error(u(527,lp,"19.1.1"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Dh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rr.isDisabled&&rr.supportsFiber)try{Ha=rr.inject(Dh),nt=rr}catch{}}return qn.createRoot=function(e,t){if(!p(e))throw Error(u(299));var l=!1,a="",n=vf,i=yf,c=bf,f=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks)),t=Zd(e,1,!1,null,null,l,a,n,i,c,f,null),e[Fl]=t.current,yc(e),new Uc(t)},qn.hydrateRoot=function(e,t,l){if(!p(e))throw Error(u(299));var a=!1,n="",i=vf,c=yf,f=bf,m=null,z=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(m=l.unstable_transitionCallbacks),l.formState!==void 0&&(z=l.formState)),t=Zd(e,1,!0,t,l??null,a,n,i,c,f,m,z),t.context=Kd(null),l=t.current,a=ft(),a=Ar(a),n=cl(a),n.callback=null,ul(l,n,a),l=a,t.current.lanes=l,Ya(t,l),_t(t),e[Fl]=t.current,yc(e),new ir(t)},qn.version="19.1.1",qn}var dp;function Yh(){if(dp)return Lc.exports;dp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Lc.exports=Lh(),Lc.exports}var Gh=Yh();const Qh=Cp(Gh);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pp="popstate";function Xh(r={}){function o(u,p){let{pathname:h,search:b,hash:E}=u.location;return Ic("",{pathname:h,search:b,hash:E},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(u,p){return typeof p=="string"?p:Gn(p)}return Zh(o,d,null,r)}function Ne(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Ct(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Vh(){return Math.random().toString(36).substring(2,10)}function hp(r,o){return{usr:r.state,key:r.key,idx:o}}function Ic(r,o,d=null,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?Ua(o):o,state:d,key:o&&o.key||u||Vh()}}function Gn({pathname:r="/",search:o="",hash:d=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Ua(r){let o={};if(r){let d=r.indexOf("#");d>=0&&(o.hash=r.substring(d),r=r.substring(0,d));let u=r.indexOf("?");u>=0&&(o.search=r.substring(u),r=r.substring(0,u)),r&&(o.pathname=r)}return o}function Zh(r,o,d,u={}){let{window:p=document.defaultView,v5Compat:h=!1}=u,b=p.history,E="POP",x=null,g=R();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function R(){return(b.state||{idx:null}).idx}function C(){E="POP";let G=R(),B=G==null?null:G-g;g=G,x&&x({action:E,location:Y.location,delta:B})}function k(G,B){E="PUSH";let re=Ic(Y.location,G,B);g=R()+1;let I=hp(re,g),je=Y.createHref(re);try{b.pushState(I,"",je)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;p.location.assign(je)}h&&x&&x({action:E,location:Y.location,delta:1})}function V(G,B){E="REPLACE";let re=Ic(Y.location,G,B);g=R();let I=hp(re,g),je=Y.createHref(re);b.replaceState(I,"",je),h&&x&&x({action:E,location:Y.location,delta:0})}function X(G){return Kh(G)}let Y={get action(){return E},get location(){return r(p,b)},listen(G){if(x)throw new Error("A history only accepts one active listener");return p.addEventListener(pp,C),x=G,()=>{p.removeEventListener(pp,C),x=null}},createHref(G){return o(p,G)},createURL:X,encodeLocation(G){let B=X(G);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:k,replace:V,go(G){return b.go(G)}};return Y}function Kh(r,o=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(d,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:Gn(r);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function kp(r,o,d="/"){return Jh(r,o,d,!1)}function Jh(r,o,d,u){let p=typeof o=="string"?Ua(o):o,h=tl(p.pathname||"/",d);if(h==null)return null;let b=Bp(r);$h(b);let E=null;for(let x=0;E==null&&x<b.length;++x){let g=rm(h);E=nm(b[x],g,u)}return E}function Bp(r,o=[],d=[],u=""){let p=(h,b,E)=>{let x={relativePath:E===void 0?h.path||"":E,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};x.relativePath.startsWith("/")&&(Ne(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length));let g=el([u,x.relativePath]),R=d.concat(x);h.children&&h.children.length>0&&(Ne(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Bp(h.children,o,R,g)),!(h.path==null&&!h.index)&&o.push({path:g,score:lm(g,h.index),routesMeta:R})};return r.forEach((h,b)=>{if(h.path===""||!h.path?.includes("?"))p(h,b);else for(let E of Up(h.path))p(h,b,E)}),o}function Up(r){let o=r.split("/");if(o.length===0)return[];let[d,...u]=o,p=d.endsWith("?"),h=d.replace(/\?$/,"");if(u.length===0)return p?[h,""]:[h];let b=Up(u.join("/")),E=[];return E.push(...b.map(x=>x===""?h:[h,x].join("/"))),p&&E.push(...b),E.map(x=>r.startsWith("/")&&x===""?"/":x)}function $h(r){r.sort((o,d)=>o.score!==d.score?d.score-o.score:am(o.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var Wh=/^:[\w-]+$/,Fh=3,Ph=2,Ih=1,em=10,tm=-2,mp=r=>r==="*";function lm(r,o){let d=r.split("/"),u=d.length;return d.some(mp)&&(u+=tm),o&&(u+=Ph),d.filter(p=>!mp(p)).reduce((p,h)=>p+(Wh.test(h)?Fh:h===""?Ih:em),u)}function am(r,o){return r.length===o.length&&r.slice(0,-1).every((u,p)=>u===o[p])?r[r.length-1]-o[o.length-1]:0}function nm(r,o,d=!1){let{routesMeta:u}=r,p={},h="/",b=[];for(let E=0;E<u.length;++E){let x=u[E],g=E===u.length-1,R=h==="/"?o:o.slice(h.length)||"/",C=hr({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},R),k=x.route;if(!C&&g&&d&&!u[u.length-1].route.index&&(C=hr({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},R)),!C)return null;Object.assign(p,C.params),b.push({params:p,pathname:el([h,C.pathname]),pathnameBase:om(el([h,C.pathnameBase])),route:k}),C.pathnameBase!=="/"&&(h=el([h,C.pathnameBase]))}return b}function hr(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,u]=im(r.path,r.caseSensitive,r.end),p=o.match(d);if(!p)return null;let h=p[0],b=h.replace(/(.)\/+$/,"$1"),E=p.slice(1);return{params:u.reduce((g,{paramName:R,isOptional:C},k)=>{if(R==="*"){let X=E[k]||"";b=h.slice(0,h.length-X.length).replace(/(.)\/+$/,"$1")}const V=E[k];return C&&!V?g[R]=void 0:g[R]=(V||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:b,pattern:r}}function im(r,o=!1,d=!0){Ct(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],p="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,E,x)=>(u.push({paramName:E,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(u.push({paramName:"*"}),p+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?p+="\\/*$":r!==""&&r!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,o?void 0:"i"),u]}function rm(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ct(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function tl(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let d=o.endsWith("/")?o.length-1:o.length,u=r.charAt(d);return u&&u!=="/"?null:r.slice(d)||"/"}function sm(r,o="/"){let{pathname:d,search:u="",hash:p=""}=typeof r=="string"?Ua(r):r;return{pathname:d?d.startsWith("/")?d:cm(d,o):o,search:fm(u),hash:dm(p)}}function cm(r,o){let d=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(p=>{p===".."?d.length>1&&d.pop():p!=="."&&d.push(p)}),d.length>1?d.join("/"):"/"}function Xc(r,o,d,u){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function um(r){return r.filter((o,d)=>d===0||o.route.path&&o.route.path.length>0)}function qp(r){let o=um(r);return o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase)}function Hp(r,o,d,u=!1){let p;typeof r=="string"?p=Ua(r):(p={...r},Ne(!p.pathname||!p.pathname.includes("?"),Xc("?","pathname","search",p)),Ne(!p.pathname||!p.pathname.includes("#"),Xc("#","pathname","hash",p)),Ne(!p.search||!p.search.includes("#"),Xc("#","search","hash",p)));let h=r===""||p.pathname==="",b=h?"/":p.pathname,E;if(b==null)E=d;else{let C=o.length-1;if(!u&&b.startsWith("..")){let k=b.split("/");for(;k[0]==="..";)k.shift(),C-=1;p.pathname=k.join("/")}E=C>=0?o[C]:"/"}let x=sm(p,E),g=b&&b!=="/"&&b.endsWith("/"),R=(h||b===".")&&d.endsWith("/");return!x.pathname.endsWith("/")&&(g||R)&&(x.pathname+="/"),x}var el=r=>r.join("/").replace(/\/\/+/g,"/"),om=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),fm=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,dm=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function pm(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Lp=["POST","PUT","PATCH","DELETE"];new Set(Lp);var hm=["GET",...Lp];new Set(hm);var qa=T.createContext(null);qa.displayName="DataRouter";var yr=T.createContext(null);yr.displayName="DataRouterState";T.createContext(!1);var Yp=T.createContext({isTransitioning:!1});Yp.displayName="ViewTransition";var mm=T.createContext(new Map);mm.displayName="Fetchers";var gm=T.createContext(null);gm.displayName="Await";var kt=T.createContext(null);kt.displayName="Navigation";var Qn=T.createContext(null);Qn.displayName="Location";var Bt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var nu=T.createContext(null);nu.displayName="RouteError";function xm(r,{relative:o}={}){Ne(Xn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=T.useContext(kt),{hash:p,pathname:h,search:b}=Vn(r,{relative:o}),E=h;return d!=="/"&&(E=h==="/"?d:el([d,h])),u.createHref({pathname:E,search:b,hash:p})}function Xn(){return T.useContext(Qn)!=null}function Wl(){return Ne(Xn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Qn).location}var Gp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qp(r){T.useContext(kt).static||T.useLayoutEffect(r)}function vm(){let{isDataRoute:r}=T.useContext(Bt);return r?_m():ym()}function ym(){Ne(Xn(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(qa),{basename:o,navigator:d}=T.useContext(kt),{matches:u}=T.useContext(Bt),{pathname:p}=Wl(),h=JSON.stringify(qp(u)),b=T.useRef(!1);return Qp(()=>{b.current=!0}),T.useCallback((x,g={})=>{if(Ct(b.current,Gp),!b.current)return;if(typeof x=="number"){d.go(x);return}let R=Hp(x,JSON.parse(h),p,g.relative==="path");r==null&&o!=="/"&&(R.pathname=R.pathname==="/"?o:el([o,R.pathname])),(g.replace?d.replace:d.push)(R,g.state,g)},[o,d,h,p,r])}T.createContext(null);function bm(){let{matches:r}=T.useContext(Bt),o=r[r.length-1];return o?o.params:{}}function Vn(r,{relative:o}={}){let{matches:d}=T.useContext(Bt),{pathname:u}=Wl(),p=JSON.stringify(qp(d));return T.useMemo(()=>Hp(r,JSON.parse(p),u,o==="path"),[r,p,u,o])}function Sm(r,o){return Xp(r,o)}function Xp(r,o,d,u){Ne(Xn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=T.useContext(kt),{matches:h}=T.useContext(Bt),b=h[h.length-1],E=b?b.params:{},x=b?b.pathname:"/",g=b?b.pathnameBase:"/",R=b&&b.route;{let B=R&&R.path||"";Vp(x,!R||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let C=Wl(),k;if(o){let B=typeof o=="string"?Ua(o):o;Ne(g==="/"||B.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${B.pathname}" was given in the \`location\` prop.`),k=B}else k=C;let V=k.pathname||"/",X=V;if(g!=="/"){let B=g.replace(/^\//,"").split("/");X="/"+V.replace(/^\//,"").split("/").slice(B.length).join("/")}let Y=kp(r,{pathname:X});Ct(R||Y!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Ct(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Em(Y&&Y.map(B=>Object.assign({},B,{params:Object.assign({},E,B.params),pathname:el([g,p.encodeLocation?p.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?g:el([g,p.encodeLocation?p.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),h,d,u);return o&&G?T.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},G):G}function jm(){let r=Dm(),o=pm(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},b=null;return console.error("Error handled by React Router default ErrorBoundary:",r),b=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:h},"ErrorBoundary")," or"," ",T.createElement("code",{style:h},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},o),d?T.createElement("pre",{style:p},d):null,b)}var zm=T.createElement(jm,null),Nm=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){console.error("React Router caught the following error during render",r,o)}render(){return this.state.error!==void 0?T.createElement(Bt.Provider,{value:this.props.routeContext},T.createElement(nu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wm({routeContext:r,match:o,children:d}){let u=T.useContext(qa);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),T.createElement(Bt.Provider,{value:r},d)}function Em(r,o=[],d=null,u=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(o.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let p=r,h=d?.errors;if(h!=null){let x=p.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);Ne(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,x+1))}let b=!1,E=-1;if(d)for(let x=0;x<p.length;x++){let g=p[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(E=x),g.route.id){let{loaderData:R,errors:C}=d,k=g.route.loader&&!R.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||k){b=!0,E>=0?p=p.slice(0,E+1):p=[p[0]];break}}}return p.reduceRight((x,g,R)=>{let C,k=!1,V=null,X=null;d&&(C=h&&g.route.id?h[g.route.id]:void 0,V=g.route.errorElement||zm,b&&(E<0&&R===0?(Vp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,X=null):E===R&&(k=!0,X=g.route.hydrateFallbackElement||null)));let Y=o.concat(p.slice(0,R+1)),G=()=>{let B;return C?B=V:k?B=X:g.route.Component?B=T.createElement(g.route.Component,null):g.route.element?B=g.route.element:B=x,T.createElement(wm,{match:g,routeContext:{outlet:x,matches:Y,isDataRoute:d!=null},children:B})};return d&&(g.route.ErrorBoundary||g.route.errorElement||R===0)?T.createElement(Nm,{location:d.location,revalidation:d.revalidation,component:V,error:C,children:G(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):G()},null)}function iu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tm(r){let o=T.useContext(qa);return Ne(o,iu(r)),o}function Am(r){let o=T.useContext(yr);return Ne(o,iu(r)),o}function Rm(r){let o=T.useContext(Bt);return Ne(o,iu(r)),o}function ru(r){let o=Rm(r),d=o.matches[o.matches.length-1];return Ne(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function Mm(){return ru("useRouteId")}function Dm(){let r=T.useContext(nu),o=Am("useRouteError"),d=ru("useRouteError");return r!==void 0?r:o.errors?.[d]}function _m(){let{router:r}=Tm("useNavigate"),o=ru("useNavigate"),d=T.useRef(!1);return Qp(()=>{d.current=!0}),T.useCallback(async(p,h={})=>{Ct(d.current,Gp),d.current&&(typeof p=="number"?r.navigate(p):await r.navigate(p,{fromRouteId:o,...h}))},[r,o])}var gp={};function Vp(r,o,d){!o&&!gp[r]&&(gp[r]=!0,Ct(!1,d))}T.memo(Om);function Om({routes:r,future:o,state:d}){return Xp(r,void 0,d,o)}function Tl(r){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cm({basename:r="/",children:o=null,location:d,navigationType:u="POP",navigator:p,static:h=!1}){Ne(!Xn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=r.replace(/^\/*/,"/"),E=T.useMemo(()=>({basename:b,navigator:p,static:h,future:{}}),[b,p,h]);typeof d=="string"&&(d=Ua(d));let{pathname:x="/",search:g="",hash:R="",state:C=null,key:k="default"}=d,V=T.useMemo(()=>{let X=tl(x,b);return X==null?null:{location:{pathname:X,search:g,hash:R,state:C,key:k},navigationType:u}},[b,x,g,R,C,k,u]);return Ct(V!=null,`<Router basename="${b}"> is not able to match the URL "${x}${g}${R}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:T.createElement(kt.Provider,{value:E},T.createElement(Qn.Provider,{children:o,value:V}))}function km({children:r,location:o}){return Sm(eu(r),o)}function eu(r,o=[]){let d=[];return T.Children.forEach(r,(u,p)=>{if(!T.isValidElement(u))return;let h=[...o,p];if(u.type===T.Fragment){d.push.apply(d,eu(u.props.children,h));return}Ne(u.type===Tl,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!u.props.index||!u.props.children,"An index route cannot have child routes.");let b={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(b.children=eu(u.props.children,h)),d.push(b)}),d}var or="get",fr="application/x-www-form-urlencoded";function br(r){return r!=null&&typeof r.tagName=="string"}function Bm(r){return br(r)&&r.tagName.toLowerCase()==="button"}function Um(r){return br(r)&&r.tagName.toLowerCase()==="form"}function qm(r){return br(r)&&r.tagName.toLowerCase()==="input"}function Hm(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Lm(r,o){return r.button===0&&(!o||o==="_self")&&!Hm(r)}var sr=null;function Ym(){if(sr===null)try{new FormData(document.createElement("form"),0),sr=!1}catch{sr=!0}return sr}var Gm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vc(r){return r!=null&&!Gm.has(r)?(Ct(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fr}"`),null):r}function Qm(r,o){let d,u,p,h,b;if(Um(r)){let E=r.getAttribute("action");u=E?tl(E,o):null,d=r.getAttribute("method")||or,p=Vc(r.getAttribute("enctype"))||fr,h=new FormData(r)}else if(Bm(r)||qm(r)&&(r.type==="submit"||r.type==="image")){let E=r.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||E.getAttribute("action");if(u=x?tl(x,o):null,d=r.getAttribute("formmethod")||E.getAttribute("method")||or,p=Vc(r.getAttribute("formenctype"))||Vc(E.getAttribute("enctype"))||fr,h=new FormData(E,r),!Ym()){let{name:g,type:R,value:C}=r;if(R==="image"){let k=g?`${g}.`:"";h.append(`${k}x`,"0"),h.append(`${k}y`,"0")}else g&&h.append(g,C)}}else{if(br(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=or,u=null,p=fr,b=r}return h&&p==="text/plain"&&(b=h,h=void 0),{action:u,method:d.toLowerCase(),encType:p,formData:h,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function su(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Xm(r,o,d){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname=`_root.${d}`:o&&tl(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${d}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${d}`,u}async function Vm(r,o){if(r.id in o)return o[r.id];try{let d=await import(r.module);return o[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zm(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Km(r,o,d){let u=await Promise.all(r.map(async p=>{let h=o.routes[p.route.id];if(h){let b=await Vm(h,d);return b.links?b.links():[]}return[]}));return Fm(u.flat(1).filter(Zm).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function xp(r,o,d,u,p,h){let b=(x,g)=>d[g]?x.route.id!==d[g].route.id:!0,E=(x,g)=>d[g].pathname!==x.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==x.params["*"];return h==="assets"?o.filter((x,g)=>b(x,g)||E(x,g)):h==="data"?o.filter((x,g)=>{let R=u.routes[x.route.id];if(!R||!R.hasLoader)return!1;if(b(x,g)||E(x,g))return!0;if(x.route.shouldRevalidate){let C=x.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function Jm(r,o,{includeHydrateFallback:d}={}){return $m(r.map(u=>{let p=o.routes[u.route.id];if(!p)return[];let h=[p.module];return p.clientActionModule&&(h=h.concat(p.clientActionModule)),p.clientLoaderModule&&(h=h.concat(p.clientLoaderModule)),d&&p.hydrateFallbackModule&&(h=h.concat(p.hydrateFallbackModule)),p.imports&&(h=h.concat(p.imports)),h}).flat(1))}function $m(r){return[...new Set(r)]}function Wm(r){let o={},d=Object.keys(r).sort();for(let u of d)o[u]=r[u];return o}function Fm(r,o){let d=new Set;return new Set(o),r.reduce((u,p)=>{let h=JSON.stringify(Wm(p));return d.has(h)||(d.add(h),u.push({key:h,link:p})),u},[])}function Zp(){let r=T.useContext(qa);return su(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Pm(){let r=T.useContext(yr);return su(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var cu=T.createContext(void 0);cu.displayName="FrameworkContext";function Kp(){let r=T.useContext(cu);return su(r,"You must render this element inside a <HydratedRouter> element"),r}function Im(r,o){let d=T.useContext(cu),[u,p]=T.useState(!1),[h,b]=T.useState(!1),{onFocus:E,onBlur:x,onMouseEnter:g,onMouseLeave:R,onTouchStart:C}=o,k=T.useRef(null);T.useEffect(()=>{if(r==="render"&&b(!0),r==="viewport"){let Y=B=>{B.forEach(re=>{b(re.isIntersecting)})},G=new IntersectionObserver(Y,{threshold:.5});return k.current&&G.observe(k.current),()=>{G.disconnect()}}},[r]),T.useEffect(()=>{if(u){let Y=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(Y)}}},[u]);let V=()=>{p(!0)},X=()=>{p(!1),b(!1)};return d?r!=="intent"?[h,k,{}]:[h,k,{onFocus:Hn(E,V),onBlur:Hn(x,X),onMouseEnter:Hn(g,V),onMouseLeave:Hn(R,X),onTouchStart:Hn(C,V)}]:[!1,k,{}]}function Hn(r,o){return d=>{r&&r(d),d.defaultPrevented||o(d)}}function e2({page:r,...o}){let{router:d}=Zp(),u=T.useMemo(()=>kp(d.routes,r,d.basename),[d.routes,r,d.basename]);return u?T.createElement(l2,{page:r,matches:u,...o}):null}function t2(r){let{manifest:o,routeModules:d}=Kp(),[u,p]=T.useState([]);return T.useEffect(()=>{let h=!1;return Km(r,o,d).then(b=>{h||p(b)}),()=>{h=!0}},[r,o,d]),u}function l2({page:r,matches:o,...d}){let u=Wl(),{manifest:p,routeModules:h}=Kp(),{basename:b}=Zp(),{loaderData:E,matches:x}=Pm(),g=T.useMemo(()=>xp(r,o,x,p,u,"data"),[r,o,x,p,u]),R=T.useMemo(()=>xp(r,o,x,p,u,"assets"),[r,o,x,p,u]),C=T.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let X=new Set,Y=!1;if(o.forEach(B=>{let re=p.routes[B.route.id];!re||!re.hasLoader||(!g.some(I=>I.route.id===B.route.id)&&B.route.id in E&&h[B.route.id]?.shouldRevalidate||re.hasClientLoader?Y=!0:X.add(B.route.id))}),X.size===0)return[];let G=Xm(r,b,"data");return Y&&X.size>0&&G.searchParams.set("_routes",o.filter(B=>X.has(B.route.id)).map(B=>B.route.id).join(",")),[G.pathname+G.search]},[b,E,u,p,g,o,r,h]),k=T.useMemo(()=>Jm(R,p),[R,p]),V=t2(R);return T.createElement(T.Fragment,null,C.map(X=>T.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...d})),k.map(X=>T.createElement("link",{key:X,rel:"modulepreload",href:X,...d})),V.map(({key:X,link:Y})=>T.createElement("link",{key:X,...Y})))}function a2(...r){return o=>{r.forEach(d=>{typeof d=="function"?d(o):d!=null&&(d.current=o)})}}var Jp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jp&&(window.__reactRouterVersion="7.7.1")}catch{}function n2({basename:r,children:o,window:d}){let u=T.useRef();u.current==null&&(u.current=Xh({window:d,v5Compat:!0}));let p=u.current,[h,b]=T.useState({action:p.action,location:p.location}),E=T.useCallback(x=>{T.startTransition(()=>b(x))},[b]);return T.useLayoutEffect(()=>p.listen(E),[p,E]),T.createElement(Cm,{basename:r,children:o,location:h.location,navigationType:h.action,navigator:p})}var $p=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ve=T.forwardRef(function({onClick:o,discover:d="render",prefetch:u="none",relative:p,reloadDocument:h,replace:b,state:E,target:x,to:g,preventScrollReset:R,viewTransition:C,...k},V){let{basename:X}=T.useContext(kt),Y=typeof g=="string"&&$p.test(g),G,B=!1;if(typeof g=="string"&&Y&&(G=g,Jp))try{let we=new URL(window.location.href),lt=g.startsWith("//")?new URL(we.protocol+g):new URL(g),ht=tl(lt.pathname,X);lt.origin===we.origin&&ht!=null?g=ht+lt.search+lt.hash:B=!0}catch{Ct(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let re=xm(g,{relative:p}),[I,je,F]=Im(u,k),ke=c2(g,{replace:b,state:E,target:x,preventScrollReset:R,relative:p,viewTransition:C});function _e(we){o&&o(we),we.defaultPrevented||ke(we)}let Be=T.createElement("a",{...k,...F,href:G||re,onClick:B||h?o:_e,ref:a2(V,je),target:x,"data-discover":!Y&&d==="render"?"true":void 0});return I&&!Y?T.createElement(T.Fragment,null,Be,T.createElement(e2,{page:re})):Be});ve.displayName="Link";var i2=T.forwardRef(function({"aria-current":o="page",caseSensitive:d=!1,className:u="",end:p=!1,style:h,to:b,viewTransition:E,children:x,...g},R){let C=Vn(b,{relative:g.relative}),k=Wl(),V=T.useContext(yr),{navigator:X,basename:Y}=T.useContext(kt),G=V!=null&&p2(C)&&E===!0,B=X.encodeLocation?X.encodeLocation(C).pathname:C.pathname,re=k.pathname,I=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;d||(re=re.toLowerCase(),I=I?I.toLowerCase():null,B=B.toLowerCase()),I&&Y&&(I=tl(I,Y)||I);const je=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let F=re===B||!p&&re.startsWith(B)&&re.charAt(je)==="/",ke=I!=null&&(I===B||!p&&I.startsWith(B)&&I.charAt(B.length)==="/"),_e={isActive:F,isPending:ke,isTransitioning:G},Be=F?o:void 0,we;typeof u=="function"?we=u(_e):we=[u,F?"active":null,ke?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let lt=typeof h=="function"?h(_e):h;return T.createElement(ve,{...g,"aria-current":Be,className:we,ref:R,style:lt,to:b,viewTransition:E},typeof x=="function"?x(_e):x)});i2.displayName="NavLink";var r2=T.forwardRef(({discover:r="render",fetcherKey:o,navigate:d,reloadDocument:u,replace:p,state:h,method:b=or,action:E,onSubmit:x,relative:g,preventScrollReset:R,viewTransition:C,...k},V)=>{let X=f2(),Y=d2(E,{relative:g}),G=b.toLowerCase()==="get"?"get":"post",B=typeof E=="string"&&$p.test(E),re=I=>{if(x&&x(I),I.defaultPrevented)return;I.preventDefault();let je=I.nativeEvent.submitter,F=je?.getAttribute("formmethod")||b;X(je||I.currentTarget,{fetcherKey:o,method:F,navigate:d,replace:p,state:h,relative:g,preventScrollReset:R,viewTransition:C})};return T.createElement("form",{ref:V,method:G,action:Y,onSubmit:u?x:re,...k,"data-discover":!B&&r==="render"?"true":void 0})});r2.displayName="Form";function s2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wp(r){let o=T.useContext(qa);return Ne(o,s2(r)),o}function c2(r,{target:o,replace:d,state:u,preventScrollReset:p,relative:h,viewTransition:b}={}){let E=vm(),x=Wl(),g=Vn(r,{relative:h});return T.useCallback(R=>{if(Lm(R,o)){R.preventDefault();let C=d!==void 0?d:Gn(x)===Gn(g);E(r,{replace:C,state:u,preventScrollReset:p,relative:h,viewTransition:b})}},[x,E,g,d,u,o,r,p,h,b])}var u2=0,o2=()=>`__${String(++u2)}__`;function f2(){let{router:r}=Wp("useSubmit"),{basename:o}=T.useContext(kt),d=Mm();return T.useCallback(async(u,p={})=>{let{action:h,method:b,encType:E,formData:x,body:g}=Qm(u,o);if(p.navigate===!1){let R=p.fetcherKey||o2();await r.fetch(R,d,p.action||h,{preventScrollReset:p.preventScrollReset,formData:x,body:g,formMethod:p.method||b,formEncType:p.encType||E,flushSync:p.flushSync})}else await r.navigate(p.action||h,{preventScrollReset:p.preventScrollReset,formData:x,body:g,formMethod:p.method||b,formEncType:p.encType||E,replace:p.replace,state:p.state,fromRouteId:d,flushSync:p.flushSync,viewTransition:p.viewTransition})},[r,o,d])}function d2(r,{relative:o}={}){let{basename:d}=T.useContext(kt),u=T.useContext(Bt);Ne(u,"useFormAction must be used inside a RouteContext");let[p]=u.matches.slice(-1),h={...Vn(r||".",{relative:o})},b=Wl();if(r==null){h.search=b.search;let E=new URLSearchParams(h.search),x=E.getAll("index");if(x.some(R=>R==="")){E.delete("index"),x.filter(C=>C).forEach(C=>E.append("index",C));let R=E.toString();h.search=R?`?${R}`:""}}return(!r||r===".")&&p.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:el([d,h.pathname])),Gn(h)}function p2(r,{relative:o}={}){let d=T.useContext(Yp);Ne(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Wp("useViewTransitionState"),p=Vn(r,{relative:o});if(!d.isTransitioning)return!1;let h=tl(d.currentLocation.pathname,u)||d.currentLocation.pathname,b=tl(d.nextLocation.pathname,u)||d.nextLocation.pathname;return hr(p.pathname,b)!=null||hr(p.pathname,h)!=null}var Fp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vp=Al.createContext&&Al.createContext(Fp),h2=["attr","size","title"];function m2(r,o){if(r==null)return{};var d=g2(r,o),u,p;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(p=0;p<h.length;p++)u=h[p],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(d[u]=r[u])}return d}function g2(r,o){if(r==null)return{};var d={};for(var u in r)if(Object.prototype.hasOwnProperty.call(r,u)){if(o.indexOf(u)>=0)continue;d[u]=r[u]}return d}function mr(){return mr=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var d=arguments[o];for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&(r[u]=d[u])}return r},mr.apply(this,arguments)}function yp(r,o){var d=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);o&&(u=u.filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable})),d.push.apply(d,u)}return d}function gr(r){for(var o=1;o<arguments.length;o++){var d=arguments[o]!=null?arguments[o]:{};o%2?yp(Object(d),!0).forEach(function(u){x2(r,u,d[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(d)):yp(Object(d)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(d,u))})}return r}function x2(r,o,d){return o=v2(o),o in r?Object.defineProperty(r,o,{value:d,enumerable:!0,configurable:!0,writable:!0}):r[o]=d,r}function v2(r){var o=y2(r,"string");return typeof o=="symbol"?o:o+""}function y2(r,o){if(typeof r!="object"||!r)return r;var d=r[Symbol.toPrimitive];if(d!==void 0){var u=d.call(r,o);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function Pp(r){return r&&r.map((o,d)=>Al.createElement(o.tag,gr({key:d},o.attr),Pp(o.child)))}function oe(r){return o=>Al.createElement(b2,mr({attr:gr({},r.attr)},o),Pp(r.child))}function b2(r){var o=d=>{var{attr:u,size:p,title:h}=r,b=m2(r,h2),E=p||d.size||"1em",x;return d.className&&(x=d.className),r.className&&(x=(x?x+" ":"")+r.className),Al.createElement("svg",mr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,u,b,{className:x,style:gr(gr({color:r.color||d.color},d.style),r.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),h&&Al.createElement("title",null,h),r.children)};return vp!==void 0?Al.createElement(vp.Consumer,null,d=>o(d)):o(Fp)}function S2(r){return oe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function j2(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(r)}function z2(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function tu(r){return oe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(r)}function Ip(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(r)}function N2(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function e1(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(r)}function w2(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(r)}function E2(r){return oe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function T2(r){return oe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function A2(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(r)}function t1(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(r)}function xr(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(r)}function l1(r){return oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(r)}function R2(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(r)}function vr(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(r)}function Ot(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function Sr(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function a1(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"},child:[]}]})(r)}function n1(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(r)}function i1(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(r)}function r1(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(r)}function s1(r){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(r)}function c1(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(r)}function M2(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(r)}function u1(r){return oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(r)}function D2(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M144 32S94.11 69.4 96 96c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zM73.293 201c1.43 63.948 18.943 179.432 74.707 238h152c55.764-58.568 73.278-174.052 74.707-238H73.293zm319.598.445c-.186 9.152-.652 19.252-1.472 30.057C419.312 235.162 441 259.142 441 288c0 31.374-25.626 57-57 57-4.387 0-8.656-.517-12.764-1.465-2.912 9.62-6.176 19.165-9.84 28.51C368.602 373.97 376.176 375 384 375c48.155 0 87-38.845 87-87 0-45.153-34.153-82.12-78.11-86.555zM42.763 457c1.507 5.193 3.854 11.2 6.955 16.37 2.637 4.394 5.69 8.207 8.428 10.58C60.882 486.32 63 487 64 487h320c1 0 3.118-.678 5.855-3.05 2.738-2.373 5.79-6.186 8.428-10.58 3.1-5.17 5.448-11.177 6.955-16.37H42.762z"},child:[]}]})(r)}function _2(r){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M238.406 26.844c-9.653.12-18.926 2.69-30.437 7.062l-157.282 57c-20.984 7.65-21.587 11.834-22.344 33.28L20.937 358.22c-1.207 27.514-.654 33.187 23.25 43.56L229.97 483.19c19.34 8.29 31.906 7.655 45.186 3.218l181.938-56.53c21.95-7.295 25.04-9.627 25.875-36.845l7.686-250.155c.662-17.37-5.667-24.695-18.78-29.625L271.062 34.375c-12.977-5.344-23.003-7.653-32.657-7.53zm.813 24.875c23.637-.053 45.564 8.434 87.874 24.874 95.545 37.123 131.71 53.8 69.687 77.937-74.002 28.802-128.175 45.115-172.28 25.814L113.47 131.75c-34.57-15.127-44.69-27.46 17.843-50.094 55.64-20.14 82.742-29.882 107.906-29.937zm44.718 43.75c-38.284.402-55.285 21.205-56.813 38.936-.873 10.132 2.95 19.6 12.406 26.25 9.456 6.65 25.355 10.56 48.97 5.938 35.817-7.01 61.536-15.056 77.5-22.844 7.982-3.894 13.464-7.737 16.5-10.844 3.036-3.107 3.453-4.942 3.438-6-.016-1.057-.44-2.675-3.313-5.406-2.873-2.73-8.03-6.04-15.22-9.156-14.378-6.233-36.757-11.877-65.717-15.72-6.355-.842-12.28-1.213-17.75-1.155zM59.25 134c10.372-.29 29.217 7.2 63.906 22.656 140.925 62.786 140.52 65.876 130.97 200.656-7.783 109.81-8.797 109.85-128.47 59.282-73.15-30.91-86.806-40.853-85.187-88.97l5.468-162.937c.674-20.034 1.557-30.358 13.312-30.687zm381.938 30.906c29.172-.384 29.1 28.075 26.75 105.25-4.118 135.132-9.05 140.184-120.375 173.72-70.42 21.21-81.49 25.614-78.97-12.032l11-164.156c3.217-48.034 7.588-51.508 94.813-83.907 31.323-11.633 52.534-18.686 66.78-18.874zm-20.438 40.688c-.332-.002-.674.015-1 .03-5.22.263-10.226 2.77-14.188 8.407-3.96 5.638-6.81 14.71-5.687 27.907 1.448 17.033-4.507 38.11-15.156 56.938-10.65 18.827-26.502 35.91-47.814 38.813-29.127 3.968-42.41 23.58-43.5 42.062-.545 9.24 2.108 18.03 7.688 24.594s14.088 11.335 27.187 12.03c41.146 2.185 71.336-10.766 91.595-39.155 20.26-28.39 30.396-73.76 25.875-136.595-1.876-26.076-14.708-34.977-25-35.03zm-246.25 8.844c-.644 0-1.218.063-1.72.187-2.003.494-3.685 1.53-5.655 4.813-1.913 3.186-3.688 8.618-4.406 16.343l-.064.657c-1.388 16.732-8.098 28.602-17.844 35.063-9.745 6.46-20.794 7.808-31.125 9.094-10.33 1.286-20.177 2.39-28.156 5.75-7.977 3.36-14.36 8.38-19.468 19.78-7.2 16.076-7.143 28.027-3.124 38.563 4.018 10.537 12.688 20.106 24.687 28.75 23.998 17.29 60.27 29.956 88.906 41.844 11.386 4.727 20.496 6.484 27.282 6.126 6.787-.358 11.278-2.423 15.375-6.562 8.195-8.28 14.057-27.692 15-57.344 2.024-63.623-18.84-110.284-38.656-130.875-8.668-9.008-16.52-12.193-21.03-12.188zm184.22 6.812c-.95-.003-1.927.035-2.97.094-35.464 1.99-48.477 12.867-52.5 24.062-4.023 11.196.826 27.07 10.844 39.78 11.488 14.58 20.59 15.736 30.437 12.283 9.848-3.455 20.542-14.108 27.376-26.908s9.512-27.397 7.188-36.28c-1.163-4.443-3.144-7.422-6.47-9.626-2.908-1.928-7.274-3.388-13.905-3.406z"},child:[]}]})(r)}function O2(r){return oe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(r)}function C2(r){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(r)}function k2(r){return oe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},child:[]}]})(r)}const Zc=14,B2=Array.from({length:Zc},(r,o)=>({id:o,left:`${o/Zc*100+Math.random()*(100/Zc)}%`,size:18+Math.floor(Math.random()*22),duration:12+Math.random()*16,delay:-(Math.random()*20),opacity:.08+Math.random()*.14})),U2=`
  @keyframes floatUp {
    0%   { transform: translateY(100vh) rotate(-10deg); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translateY(-120px) rotate(10deg); opacity: 0; }
  }

  @keyframes sway {
    0%, 100% { margin-left: 0px; }
    50%       { margin-left: 20px; }
  }

  .floater {
    position: fixed;
    bottom: 0;
    color: #60CD8B;
    animation: floatUp linear infinite, sway ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }
`;function q2(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:U2}),B2.map(r=>s.jsx("div",{className:"floater",style:{left:r.left,fontSize:r.size,opacity:r.opacity,animationDuration:`${r.duration}s, ${r.duration*.6}s`,animationDelay:`${r.delay}s, ${r.delay*.4}s`},children:s.jsx(D2,{})},r.id))]})}const H2=`
  .home-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0d0d0d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 16px;
  }

  .home-card {
    width: 100%;
    max-width: 640px;
    background: #141414;
    border: 1px solid #262626;
    border-radius: 16px;
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .home-profile {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .home-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #262626;
    flex-shrink: 0;
  }

  .home-name {
    font-size: 22px;
    font-weight: 800;
    color: #f0f0f0;
    letter-spacing: -0.3px;
  }

  .home-typewriter {
    font-size: 14px;
    color: #60CD8B;
    min-height: 22px;
    font-weight: 500;
  }

  .home-divider {
    height: 1px;
    background: #262626;
  }

  .home-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .home-info-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: #aaa;
  }

  .home-info-item svg {
    color: #60CD8B;
    flex-shrink: 0;
  }

  .home-socials {
    display: flex;
    gap: 10px;
  }

  .home-social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #1e1e1e;
    border: 1px solid #2e2e2e;
    color: #aaa;
    font-size: 16px;
    text-decoration: none;
    transition: border-color 0.15s, color 0.15s;
  }

  .home-social-btn:hover {
    border-color: #60CD8B;
    color: #60CD8B;
  }

  .home-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .home-nav-link {
    font-size: 12px;
    font-weight: 500;
    color: #aaa;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid #2e2e2e;
    background: #1e1e1e;
    transition: border-color 0.15s, color 0.15s;
  }

  .home-nav-link:hover {
    border-color: #60CD8B;
    color: #60CD8B;
  }
`,bp=["Software Engineer","Gamer","Coffee Connoisseur","Frenchie dad"];function L2(){const[r,o]=T.useState(""),[d,u]=T.useState(0),[p,h]=T.useState(0),[b,E]=T.useState(!1);return T.useEffect(()=>{document.title="Rosendo Inzunza | Portfolio",document.documentElement.classList.add("dark")},[]),T.useEffect(()=>{const x=bp[d%bp.length],g=setTimeout(()=>{b?(o(x.slice(0,p-1)),h(p-1)):(o(x.slice(0,p+1)),h(p+1)),!b&&p===x.length?setTimeout(()=>E(!0),1e3):b&&p===0&&(E(!1),u(d+1))},b?50:100);return()=>clearTimeout(g)},[p,b,d]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:H2}),s.jsxs("div",{className:"home-page",children:[s.jsx(q2,{}),s.jsxs("div",{className:"home-card",style:{position:"relative",zIndex:1},children:[s.jsxs("div",{className:"home-profile",children:[s.jsx("img",{src:"/ro.jpg",alt:"Rosendo Inzunza",className:"home-avatar"}),s.jsxs("div",{children:[s.jsx("div",{className:"home-name",children:"Rosendo Inzunza"}),s.jsxs("div",{className:"home-typewriter",children:[r,s.jsx("span",{style:{opacity:.6},children:"|"})]})]})]}),s.jsx("div",{className:"home-divider"}),s.jsxs("div",{className:"home-info",children:[s.jsxs("div",{className:"home-info-item",children:[s.jsx(C2,{size:14})," Systems Engineer"]}),s.jsxs("div",{className:"home-info-item",children:[s.jsx(O2,{size:14})," Based in California, US"]}),s.jsxs("div",{className:"home-info-item",children:[s.jsx(k2,{size:14})," rosendoinzunza@gmail.com"]}),s.jsxs("div",{className:"home-info-item",children:[s.jsx(_2,{size:14})," Fueled by coffee"]})]}),s.jsx("div",{className:"home-divider"}),s.jsxs("div",{className:"home-socials",children:[s.jsx("a",{href:"https://github.com/roinzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:s.jsx(S2,{})}),s.jsx("a",{href:"https://www.linkedin.com/in/rosendoinzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:s.jsx(z2,{})}),s.jsx("a",{href:"https://instagram.com/ro.inzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:s.jsx(j2,{})})]}),s.jsxs("div",{className:"home-nav",children:[s.jsx(ve,{to:"/about",className:"home-nav-link",children:"About Me →"}),s.jsx(ve,{to:"/resume",className:"home-nav-link",children:"Resume →"}),s.jsx(ve,{to:"/projects",className:"home-nav-link",children:"What I'm Building →"})]})]})]})]})}const Y2={whoami:["Rosendo Inzunza is a software engineer who loves solving real-world problems through thoughtful design and performant code.","I enjoy building beautiful user experiences, contributing to impactful projects, and sipping cold brew while learning new things."],projects:["SideQuest (iOS/Swift + Rust) – A local job discovery platform with swiping, messaging, and profile matching."],skills:["Skills/Tools:","- Rust, Python, TypeScript","- Docker, Sentry, Grafana","- Axum, Actix, Poem, FastAPI, Flask","- PostgreSQL, Diesel, Alembic, SeaORM","- AWS (SNS, S3, EC2)","","*** Pulls a great double shot of espresso"],contact:["📧 rosendoinzunza@gmail.com","🔗 linkedin.com/in/rosendoinzunza","🐙 github.com/roinzunza","📍 Based in California, US"],coffee:["Between an oatmilk cortado and an iced latte with almond milk ☕"],ascii:["    _______  ________  ________  ________ ","  ╱╱       ╲╱        ╲╱        ╲╱    ╱   ╲"," ╱╱        ╱         _╱       ╱╱         ╱","╱        _╱         ╱         ╱         ╱ ","╲____╱___╱╲________╱╲________╱╲__╱_____╱  "],help:["Available commands:","- whoami     → About Rosendo","- projects   → Current projects","- skills     → Technical background","- contact    → Contact information","- coffee     → Coffee order","- ascii      → ASCII logo","- help       → This menu"]},G2=`
  .about-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0d0d0d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 16px;
  }

  .about-inner {
    width: 100%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .about-title {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #60CD8B;
  }

  .terminal {
    background: #0d0d0d;
    border: 1px solid #262626;
    border-radius: 12px;
    overflow: hidden;
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    border-bottom: 1px solid #262626;
    background: #141414;
  }

  .terminal-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .terminal-body {
    padding: 16px;
    max-height: 60vh;
    overflow-y: auto;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    line-height: 1.7;
    color: #ccc;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .terminal-body::-webkit-scrollbar { width: 4px; }
  .terminal-body::-webkit-scrollbar-track { background: transparent; }
  .terminal-body::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

  .terminal-prompt { color: #60CD8B; }

  .terminal-input-row {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
  }

  .terminal-input {
    background: transparent;
    border: none;
    outline: none;
    color: #f0f0f0;
    font-family: inherit;
    font-size: inherit;
    flex: 1;
    caret-color: #60CD8B;
  }

  .about-back {
    font-size: 12px;
    font-weight: 500;
    color: #777;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid #2e2e2e;
    background: #141414;
    transition: border-color 0.15s, color 0.15s;
    align-self: flex-start;
  }

  .about-back:hover {
    border-color: #60CD8B;
    color: #60CD8B;
  }
`;function Q2(){const[r,o]=T.useState([]),[d,u]=T.useState(""),[p,h]=T.useState(""),b=T.useRef(null),E=T.useRef(null),x="➜ ~ whoami";T.useEffect(()=>{let C=0;const k=setInterval(()=>{h(x.slice(0,C+1)),C++,C===x.length&&(clearInterval(k),setTimeout(()=>g("whoami"),600))},80);return()=>clearInterval(k)},[]);const g=C=>{const k=C.trim().toLowerCase(),V=Y2[k],X=typeof V=="string"?[V]:V||[`zsh: command not found: ${C} — try 'help'`];o(Y=>[...Y,`➜ ~ ${C}`]),X.forEach((Y,G)=>{setTimeout(()=>{o(B=>[...B,Y])},150*G)})},R=C=>{C.preventDefault(),d.trim()&&(g(d),u(""))};return T.useEffect(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},[r]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:G2}),s.jsx("div",{className:"about-page",children:s.jsxs("div",{className:"about-inner",children:[s.jsx("div",{className:"about-title",children:"About Me"}),s.jsxs("div",{className:"terminal",children:[s.jsxs("div",{className:"terminal-bar",children:[s.jsx("div",{className:"terminal-dot",style:{background:"#ff5f57"}}),s.jsx("div",{className:"terminal-dot",style:{background:"#febc2e"}}),s.jsx("div",{className:"terminal-dot",style:{background:"#28c840"}})]}),s.jsxs("div",{className:"terminal-body",ref:E,children:[s.jsxs("div",{children:[s.jsx("span",{className:"terminal-prompt",children:p}),p.length<x.length&&s.jsx("span",{style:{opacity:.6},children:"|"})]}),r.map((C,k)=>s.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap"},children:C.startsWith("➜ ~")?s.jsx(s.Fragment,{children:s.jsx("span",{className:"terminal-prompt",children:C})}):C},k)),s.jsxs("form",{onSubmit:R,className:"terminal-input-row",children:[s.jsx("span",{className:"terminal-prompt",children:"➜ ~"}),s.jsx("input",{type:"text",ref:b,autoFocus:!0,value:d,onChange:C=>u(C.target.value),className:"terminal-input",placeholder:"type a command (try 'help')..."})]})]})]}),s.jsx(ve,{to:"/",className:"about-back",children:"← Back to Home"})]})})]})}const jr={name:"Rosendo Inzunza",email:"RosendoInzunza@gmail.com",website:"www.rosendoinzunza.com",phone:"714-342-7492",summary:"Systems Engineer specializing in critical infrastructure at global scale—fleet control planes, distributed systems, ML training and inference. Driving complex architectural changes end to end, from RFC authorship and stakeholder alignment to production delivery, consistently unblocking initiatives that stalled due to scale or blast radius risk.",experience:[{title:"Systems Engineer - Infrastructure",company:"Cloudflare",logo:"Cloudflare.png",coverBg:"#ffffff",location:"Remote, US",period:"07/2024 – 05/2026",summary:"Owned reliability, performance, and architectural evolution of the infrastructure control plane — the authoritative system for fleet configuration and asset management across Cloudflare's global network.",bullets:["Improved control plane API performance 10x (5s to 500ms) by rearchitecting the data-fetching layer to parallelize requests, with an automatic fallback to serial processing under database load.","Led the Ray ID redesign end to end: identified the exhaustion risk, wrote the RFC, designed a backward-compatible migration, with zero customer impact, retiring 3 years of deferred technical debt.","Drove consolidation of the company's logical asset data model, authoring the RFC and leading cross-team alignment to unify legacy and modern systems under a single authoritative control plane — reducing sync errors and manual provisioning intervention by 80%.","Eliminated a critical circular dependency between the control plane and Release Manager by defining a new cross-team deployment contract, including automated migration halts and a full-stack recovery path for outage scenarios.","Built high-throughput reconciliation workers to sync DCIM systems and automate orphan asset cleanup, ending persistent manual drift that had required ongoing operational intervention.","Expanded internal platform adoption by building an MCP server over the control plane API, enabling teams to integrate without writing custom clients or CLI tooling.","Established an AI-assisted development workflow across the team — covering codebase context indexing, pre-commit verification, and test generation — materially reducing onboarding and review cycle time."]},{title:"Site Reliability Engineer - Applied Machine Learning",company:"TikTok",logo:"tiktok.jpg",coverBg:"#ffffff",location:"Remote, US",period:"07/2022 – 07/2024",bullets:["Designed and shipped a diagnostics platform adopted by 200+ engineers, reducing mean time to resolution by 72% (80 min to 22 min) by centralizing root cause analysis workflows.","Authored the RFC and implemented self-healing automation for parameter servers and distributed training jobs, reducing manual incident volume by 25%.","Consolidated 4 divergent regional codebases for the parameter server observability system into a single unified release with per-region DNS routing — ending configuration drift and simplifying cross-region deployments.","Served as primary on-call for ML training and parameter server infrastructure, owning incident response for Ads and Video Recommendation systems supporting millions of users."]},{title:"Full Stack Software Engineer",company:"Digital Force Technologies",logo:"digital_force_technologies.jpg",coverBg:"#000000",location:"Remote, US",period:"10/2021 – 07/2022",bullets:["Built and maintained a Flask API for hardware configuration management in radar systems.","Automated the ARM64 Debian package release process, integrating with legacy build infrastructure."]},{title:"Automation Engineer",company:"CoreLogic",logo:"corelogic.png",coverBg:"#ffffff",location:"Irvine, CA",period:"09/2020 – 10/2021",bullets:["Built data pipelines to parse and reconcile multi-schema customer files into a unified format.","Trained a CNN on home images to predict property value.","Established GitLab CI/CD for the team."]}],skills:{Languages:["Rust","Python","Go","TypeScript","Swift","C++"],"Frameworks / Libraries":["Axum","Actix","SeaORM","Diesel","FastAPI","Flask","Django","React"],Infrastructure:["Kubernetes","Docker","SaltStack","gRPC","Protobuf","PostgreSQL","Redis"],Observability:["Prometheus","Grafana","Splunk","Sentry"],"Machine Learning":["TensorFlow","PyTorch"],Tools:["Claude","Codex","OpenCode"]},project:{name:"SideQuest",logo:"sidequest_logo.png",coverBg:"#000000",role:"Founder & Full-Stack Engineer",tech:"iOS · Swift · Rust · Axum · SeaORM · PostgreSQL",url:"https://www.sidequestapp.io/",bullets:["Founded and shipped a two-sided iOS job marketplace connecting local businesses with hourly workers — live on the App Store.","Architected a Rust/Axum backend with a service-oriented route pattern, PostgreSQL via SeaORM, JWT auth, and Apple/Google SSO with PKCE.","Built real-time in-app messaging using WebSockets with a concurrent DashMap hub and APNs push notification delivery.","Integrated Stripe and RevenueCat for tiered subscriptions, IAP add-ons, and entitlement management across business and applicant roles."]},education:{degree:"Bachelor of Science in Computer Science",school:"California State University, Fullerton"}},{name:X2,email:Sp,website:jp,phone:V2,summary:Z2,experience:K2,skills:J2,project:Ba,education:zp}=jr,$2=`
  .rv-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0d0d0d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 16px 80px;
  }

  .rv-inner {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .rv-card {
    background: #141414;
    border: 1px solid #262626;
    border-radius: 16px;
    padding: 24px;
  }

  .rv-name {
    font-size: 20px;
    font-weight: 800;
    color: #f0f0f0;
    letter-spacing: -0.3px;
    margin-bottom: 6px;
  }

  .rv-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
  }

  .rv-contact a,
  .rv-contact span {
    font-size: 12px;
    color: #777;
    text-decoration: none;
    transition: color 0.15s;
  }

  .rv-contact a:hover { color: #60CD8B; }

  .rv-section-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #60CD8B;
    margin-bottom: 16px;
  }

  .rv-divider {
    height: 1px;
    background: #262626;
    margin: 4px 0;
  }

  /* Experience */
  .rv-job {
    background: #1a1a1a;
    border: 1px solid #262626;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 10px;
  }

  .rv-job:last-child { margin-bottom: 0; }

  .rv-job-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 2px;
  }

  .rv-job-title {
    font-size: 13px;
    font-weight: 700;
    color: #f0f0f0;
  }

  .rv-job-period {
    font-size: 11px;
    color: #555;
    white-space: nowrap;
  }

  .rv-job-company {
    font-size: 11px;
    font-weight: 600;
    color: #60CD8B;
    margin-bottom: 10px;
  }

  .rv-job-summary {
    font-size: 12px;
    line-height: 1.65;
    color: #888;
    margin-bottom: 10px;
  }

  .rv-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .rv-bullets li {
    display: flex;
    gap: 8px;
    font-size: 12px;
    line-height: 1.65;
    color: #777;
  }

  .rv-bullet-dash {
    color: #333;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* Summary */
  .rv-summary {
    font-size: 13px;
    line-height: 1.7;
    color: #aaa;
  }

  /* Skills (categorized) */
  .rv-skill-group {
    margin-bottom: 12px;
  }

  .rv-skill-group:last-child { margin-bottom: 0; }

  .rv-skill-label {
    font-size: 11px;
    font-weight: 600;
    color: #888;
    margin-bottom: 6px;
  }

  /* Stack chips */
  .rv-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .rv-chip {
    font-size: 11px;
    font-weight: 500;
    color: #aaa;
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
    padding: 4px 10px;
    border-radius: 20px;
  }

  /* Project */
  .rv-project-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 2px;
  }

  .rv-project-name {
    font-size: 13px;
    font-weight: 700;
    color: #f0f0f0;
  }

  .rv-project-url {
    font-size: 11px;
    color: #60CD8B;
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .rv-project-url:hover { opacity: 0.7; }

  .rv-project-role {
    font-size: 11px;
    color: #555;
    margin-bottom: 12px;
  }

  /* Education */
  .rv-edu-degree {
    font-size: 13px;
    font-weight: 600;
    color: #f0f0f0;
    margin-bottom: 2px;
  }

  .rv-edu-school {
    font-size: 12px;
    color: #555;
  }

  /* Back link */
  .rv-back {
    font-size: 12px;
    font-weight: 500;
    color: #777;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid #2e2e2e;
    background: #141414;
    transition: border-color 0.15s, color 0.15s;
    align-self: flex-start;
  }

  .rv-back:hover {
    border-color: #60CD8B;
    color: #60CD8B;
  }
`;function W2(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:$2}),s.jsx("div",{className:"rv-page",children:s.jsxs("div",{className:"rv-inner",children:[s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-name",children:X2}),s.jsxs("div",{className:"rv-contact",children:[s.jsx("a",{href:`mailto:${Sp}`,children:Sp}),s.jsx("a",{href:`https://${jp}`,target:"_blank",rel:"noopener noreferrer",children:jp}),s.jsx("span",{children:V2})]})]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Summary"}),s.jsx("div",{className:"rv-summary",children:Z2})]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Experience"}),K2.map((r,o)=>s.jsxs("div",{className:"rv-job",children:[s.jsxs("div",{className:"rv-job-header",children:[s.jsx("div",{className:"rv-job-title",children:r.title}),s.jsx("div",{className:"rv-job-period",children:r.period})]}),s.jsxs("div",{className:"rv-job-company",children:[r.company," · ",r.location]}),r.summary&&s.jsx("div",{className:"rv-job-summary",children:r.summary}),s.jsx("ul",{className:"rv-bullets",children:r.bullets.map((d,u)=>s.jsxs("li",{children:[s.jsx("span",{className:"rv-bullet-dash",children:"—"}),s.jsx("span",{children:d})]},u))})]},o))]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Technical Skills"}),Object.entries(J2).map(([r,o])=>s.jsxs("div",{className:"rv-skill-group",children:[s.jsx("div",{className:"rv-skill-label",children:r}),s.jsx("div",{className:"rv-chips",children:o.map(d=>s.jsx("span",{className:"rv-chip",children:d},d))})]},r))]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Startup Project"}),s.jsxs("div",{className:"rv-project-header",children:[s.jsx("div",{className:"rv-project-name",children:Ba.name}),s.jsx("a",{href:Ba.url,target:"_blank",rel:"noopener noreferrer",className:"rv-project-url",children:Ba.url.replace("https://","")})]}),s.jsxs("div",{className:"rv-project-role",children:[Ba.role," · ",Ba.tech]}),s.jsx("ul",{className:"rv-bullets",children:Ba.bullets.map((r,o)=>s.jsxs("li",{children:[s.jsx("span",{className:"rv-bullet-dash",children:"—"}),s.jsx("span",{children:r})]},o))})]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Education"}),s.jsx("div",{className:"rv-edu-degree",children:zp.degree}),s.jsx("div",{className:"rv-edu-school",children:zp.school})]}),s.jsx(ve,{to:"/",className:"rv-back",children:"← Back to Home"})]})})]})}const{name:Ln,email:Np,website:wp,phone:F2,summary:P2,experience:$l,skills:I2,project:Ye,education:Kc}=jr,Jc=Object.values(I2).flat(),Yn=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),$c=Yn(Ye.name),eg=`
  .sp-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #000;
    color: #fff;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 1fr 80px;
    grid-template-areas:
      "sidebar main"
      "player player";
    gap: 8px;
    padding: 8px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .sp-page {
      grid-template-columns: 1fr;
      grid-template-areas: "main" "player";
    }
    .sp-sidebar { display: none; }
  }

  /* Mobile nav strip (replaces sidebar on small screens) */
  .sp-mobile-nav { display: none; }

  @media (max-width: 768px) {
    .sp-mobile-nav {
      display: flex;
      gap: 8px;
      padding: 12px 16px;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 20;
      margin: -8px -8px 0;
    }
    .sp-mobile-nav::-webkit-scrollbar { display: none; }
  }

  .sp-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px 6px 6px;
    background: #232323;
    border-radius: 999px;
    text-decoration: none;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 0.15s;
  }

  .sp-chip:hover { background: #2c2c2c; }
  .sp-chip.active { background: #1ED760; color: #000; }

  .sp-chip-cover {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-weight: 800;
    color: #fff;
    text-align: center;
    line-height: 1.05;
    padding: 2px;
    box-sizing: border-box;
    text-transform: uppercase;
  }

  .sp-chip-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 3px;
    box-sizing: border-box;
  }

  .sp-player {
    padding-bottom: env(safe-area-inset-bottom, 0);
  }

  /* ============ Sidebar ============ */
  .sp-sidebar {
    grid-area: sidebar;
    background: #000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
  }

  .sp-sidebar-card {
    background: #121212;
    border-radius: 8px;
    padding: 8px 12px;
  }

  .sp-nav-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 700;
    color: #b3b3b3;
    text-decoration: none;
    border-radius: 4px;
    transition: color 0.15s;
  }

  .sp-nav-item:hover { color: #fff; }
  .sp-nav-item.active { color: #fff; }

  .sp-library-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 4px;
    color: #b3b3b3;
    font-size: 14px;
    font-weight: 700;
  }

  .sp-library-header:hover { color: #fff; }

  .sp-library-header .sp-icon-btn {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s, background 0.15s;
  }

  .sp-library-header .sp-icon-btn:hover {
    color: #fff;
    background: #1a1a1a;
  }

  .sp-playlist-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.15s;
    text-decoration: none;
    color: inherit;
  }

  .sp-playlist-item:hover { background: #1a1a1a; }

  .sp-playlist-cover {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 800;
    color: #fff;
    text-align: center;
    line-height: 1.05;
    padding: 3px;
    word-break: break-word;
    text-transform: uppercase;
    letter-spacing: -0.2px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .sp-playlist-cover img,
  .sp-track-cover img,
  .sp-album-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 4px;
    box-sizing: border-box;
  }

  .sp-album-cover img { padding: 14px; }

  .sp-playlist-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .sp-playlist-title {
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-playlist-sub {
    font-size: 12px;
    color: #b3b3b3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ============ Main ============ */
  .sp-main {
    grid-area: main;
    background: #121212;
    border-radius: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
  }

  .sp-main::-webkit-scrollbar { width: 12px; }
  .sp-main::-webkit-scrollbar-thumb {
    background: #535353;
    border-radius: 6px;
    border: 3px solid #121212;
  }

  .sp-topbar {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    background: transparent;
    backdrop-filter: blur(8px);
  }

  .sp-back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(0,0,0,0.5);
    border: none;
    color: #fff;
    padding: 8px 14px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: background 0.15s;
  }

  .sp-back-btn:hover { background: rgba(0,0,0,0.8); }

  /* ============ Artist Hero ============ */
  .sp-hero {
    position: relative;
    padding: 24px 32px 24px;
    background: linear-gradient(180deg, #1DB954 0%, #0a5d2b 60%, #121212 100%);
    margin-top: -64px;
    padding-top: 88px;
    display: flex;
    align-items: flex-end;
    gap: 24px;
    min-height: 340px;
  }

  .sp-hero-avatar {
    width: 232px;
    height: 232px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 60px rgba(0,0,0,0.5);
    flex-shrink: 0;
  }

  .sp-hero-meta {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 8px;
  }

  .sp-verified {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }

  .sp-verified svg { color: #4cb3ff; }

  .sp-hero-name {
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 1;
    margin: 0;
    color: #fff;
  }

  .sp-hero-stats {
    font-size: 14px;
    color: #fff;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .sp-hero {
      flex-direction: column;
      align-items: flex-start;
      padding: 32px 20px 20px;
      min-height: auto;
      margin-top: 0;
    }
    .sp-hero-avatar { width: 140px; height: 140px; }
    .sp-hero-name { font-size: clamp(36px, 12vw, 56px); }
    .sp-section { padding: 8px 20px 24px; }
    .sp-action-bar { padding: 20px; gap: 16px; }
  }

  /* ============ Action Bar ============ */
  .sp-action-bar {
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, #121212 100%);
    padding: 24px 32px;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .sp-play-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #1ED760;
    border: none;
    color: #000;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.1s, background 0.15s;
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  }

  .sp-play-btn:hover {
    background: #1fdf64;
    transform: scale(1.05);
  }

  .sp-follow-btn {
    background: transparent;
    border: 1px solid #b3b3b3;
    color: #fff;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: border-color 0.15s, transform 0.1s;
  }

  .sp-follow-btn:hover {
    border-color: #fff;
    transform: scale(1.04);
  }

  .sp-icon-btn-lg {
    background: transparent;
    border: none;
    color: #b3b3b3;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.15s;
  }

  .sp-icon-btn-lg:hover { color: #fff; }

  /* ============ Section ============ */
  .sp-section {
    padding: 8px 32px 32px;
  }

  .sp-section-title {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 16px;
    letter-spacing: -0.5px;
  }

  .sp-section-sub {
    font-size: 13px;
    color: #b3b3b3;
    margin-bottom: 12px;
  }

  /* ============ Track List ============ */
  .sp-track-list {
    display: flex;
    flex-direction: column;
  }

  .sp-track {
    display: grid;
    grid-template-columns: 32px 1fr auto auto;
    gap: 16px;
    align-items: center;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.15s;
  }

  .sp-track:hover { background: rgba(255,255,255,0.08); }
  a.sp-track { text-decoration: none; color: inherit; }

  .sp-track-num {
    color: #b3b3b3;
    font-size: 16px;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  .sp-track:hover .sp-track-num { color: #fff; }

  .sp-track-info {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .sp-track-cover {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    font-size: 8px;
    text-align: center;
    line-height: 1.05;
    padding: 2px;
    word-break: break-word;
    text-transform: uppercase;
    letter-spacing: -0.2px;
    box-sizing: border-box;
  }

  .sp-track-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .sp-track-title {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-track-artist {
    font-size: 13px;
    color: #b3b3b3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-track-plays {
    font-size: 13px;
    color: #b3b3b3;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .sp-track-duration {
    font-size: 13px;
    color: #b3b3b3;
    font-variant-numeric: tabular-nums;
    width: 48px;
    text-align: right;
  }

  @media (max-width: 600px) {
    .sp-track { grid-template-columns: 24px 1fr auto; gap: 12px; }
    .sp-track-plays { display: none; }
  }

  /* ============ Album Grid (Discography) ============ */
  .sp-album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }

  .sp-album-card {
    background: #181818;
    padding: 16px;
    border-radius: 8px;
    transition: background 0.2s;
    cursor: pointer;
    position: relative;
  }

  .sp-album-card:hover { background: #282828; }
  .sp-album-card:hover .sp-album-play { opacity: 1; transform: translateY(0); }
  a.sp-album-card { text-decoration: none; color: inherit; display: block; }

  .sp-album-cover {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 4px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 900;
    color: #fff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    position: relative;
    overflow: hidden;
    text-align: center;
    line-height: 1.05;
    padding: 12px;
    word-break: break-word;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    box-sizing: border-box;
  }

  .sp-album-play {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #1ED760;
    color: #000;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.2s, transform 0.2s;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
  }

  .sp-album-title {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-album-sub {
    font-size: 13px;
    color: #b3b3b3;
    line-height: 1.4;
  }

  /* ============ About ============ */
  .sp-about {
    background: linear-gradient(135deg, #1a1a1a 0%, #0a5d2b 200%);
    padding: 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sp-about-text {
    font-size: 15px;
    line-height: 1.65;
    color: #fff;
  }

  .sp-about-stats {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  .sp-stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .sp-stat-value {
    font-size: 20px;
    font-weight: 800;
    color: #fff;
  }

  .sp-stat-label {
    font-size: 12px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* ============ Chips (Genres) ============ */
  .sp-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .sp-chip {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    background: rgba(255,255,255,0.1);
    padding: 6px 14px;
    border-radius: 20px;
    transition: background 0.15s;
    cursor: pointer;
  }

  .sp-chip:hover { background: rgba(255,255,255,0.18); }

  /* ============ Player ============ */
  .sp-player {
    grid-area: player;
    background: #000;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    padding: 0 16px;
    border-top: 1px solid #181818;
  }

  .sp-player-track {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .sp-player-cover {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    flex-shrink: 0;
  }

  .sp-player-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .sp-player-title {
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-player-artist {
    font-size: 12px;
    color: #b3b3b3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sp-player-heart {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    font-size: 16px;
    transition: color 0.15s, transform 0.1s;
  }

  .sp-player-heart.liked { color: #1ED760; }
  .sp-player-heart:hover { color: #fff; }
  .sp-player-heart.liked:hover { color: #1fdf64; }

  .sp-player-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .sp-player-buttons {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .sp-player-buttons button {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.15s, transform 0.1s;
  }

  .sp-player-buttons button:hover { color: #fff; }

  .sp-player-play {
    width: 32px !important;
    height: 32px;
    border-radius: 50% !important;
    background: #fff !important;
    color: #000 !important;
    font-size: 13px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sp-player-play:hover { transform: scale(1.05); }

  .sp-progress {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    max-width: 520px;
  }

  .sp-progress-time {
    font-size: 11px;
    color: #b3b3b3;
    font-variant-numeric: tabular-nums;
    min-width: 32px;
  }

  .sp-progress-bar {
    flex: 1;
    height: 4px;
    background: #4d4d4d;
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
  }

  .sp-progress-fill {
    height: 100%;
    background: #fff;
    width: 35%;
    border-radius: 2px;
    transition: width 0.3s linear, background 0.15s;
  }

  .sp-progress-bar:hover .sp-progress-fill { background: #1ED760; }

  .sp-player-extras {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
  }

  .sp-player-extras button {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.15s;
  }

  .sp-player-extras button:hover { color: #fff; }

  .sp-volume {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100px;
  }

  .sp-volume-bar {
    flex: 1;
    height: 4px;
    background: #4d4d4d;
    border-radius: 2px;
    overflow: hidden;
  }

  .sp-volume-fill {
    height: 100%;
    background: #fff;
    width: 70%;
  }

  @media (max-width: 768px) {
    .sp-player { grid-template-columns: 1fr auto; padding: 0 12px; gap: 12px; }
    .sp-player-extras, .sp-progress { display: none; }
    .sp-player-controls { flex-direction: row; }
  }
`,Pt=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Ep=["linear-gradient(135deg, #1DB954 0%, #064E3B 100%)","linear-gradient(135deg, #FBBF24 0%, #92400E 100%)","linear-gradient(135deg, #38BDF8 0%, #0C4A6E 100%)","linear-gradient(135deg, #F472B6 0%, #831843 100%)"];function Tp(r){const o=r*47+123,d=Math.floor(o/60),u=o%60;return`${d}:${u.toString().padStart(2,"0")}`}function tg(r){return([2847193,1402557,894201,612488,320115][r]??15e4).toLocaleString()}function lg(){const[r,o]=T.useState(!1),[d,u]=T.useState(!0);T.useEffect(()=>{document.title=`${Ln} | Spotify Resume`},[]);const p=12847392 .toLocaleString();return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:eg}),s.jsxs("div",{className:"sp-page",children:[s.jsxs("aside",{className:"sp-sidebar",children:[s.jsxs("div",{className:"sp-sidebar-card",children:[s.jsxs(ve,{to:"/",className:"sp-nav-item",children:[s.jsx(l1,{})," Home"]}),s.jsxs("div",{className:"sp-nav-item",children:[s.jsx(i1,{})," Search"]})]}),s.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[s.jsxs("div",{className:"sp-library-header",children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[s.jsx(Ip,{})," Your Library"]}),s.jsx("button",{className:"sp-icon-btn",children:s.jsx(Sr,{})})]}),s.jsxs("div",{style:{marginTop:8},children:[s.jsxs("div",{className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:Ep[0]},children:s.jsx(xr,{})}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:"Liked Songs"}),s.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",$l.length+1," songs"]})]})]}),$l.map((h,b)=>s.jsxs(ve,{to:`/spotify/${Yn(h.company)}`,className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:h.coverBg??Pt[b%Pt.length]},children:h.logo?s.jsx("img",{src:`/${h.logo}`,alt:h.company}):h.company}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:h.company}),s.jsxs("div",{className:"sp-playlist-sub",children:["Album · ",h.bullets.length," tracks"]})]})]},h.company)),s.jsxs(ve,{to:`/spotify/${$c}`,className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:Ye.coverBg},children:s.jsx("img",{src:`/${Ye.logo}`,alt:Ye.name})}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:Ye.name}),s.jsxs("div",{className:"sp-playlist-sub",children:["Single · ",Ln]})]})]}),s.jsxs("div",{className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:Ep[2]},children:"Tech Stack"}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:"Tech Stack"}),s.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",Jc.length," tracks"]})]})]}),s.jsxs("div",{className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)"},children:"Education"}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:"Education"}),s.jsxs("div",{className:"sp-playlist-sub",children:["EP · ",Kc.school.split(",")[0]]})]})]})]})]})]}),s.jsxs("main",{className:"sp-main",children:[s.jsxs("div",{className:"sp-mobile-nav",children:[$l.map((h,b)=>s.jsxs(ve,{to:`/spotify/${Yn(h.company)}`,className:"sp-chip",children:[s.jsx("div",{className:"sp-chip-cover",style:{background:h.coverBg??Pt[b%Pt.length]},children:h.logo?s.jsx("img",{src:`/${h.logo}`,alt:h.company}):h.company.slice(0,2)}),h.company]},`m-${h.company}`)),s.jsxs(ve,{to:`/spotify/${$c}`,className:"sp-chip",children:[s.jsx("div",{className:"sp-chip-cover",style:{background:Ye.coverBg},children:s.jsx("img",{src:`/${Ye.logo}`,alt:Ye.name})}),Ye.name]})]}),s.jsxs("div",{className:"sp-topbar",children:[s.jsx(ve,{to:"/",className:"sp-back-btn",children:"← Back to Home"}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[s.jsx(tu,{size:18})," Open in Web Player"]})]}),s.jsxs("section",{className:"sp-hero",children:[s.jsx("img",{src:"/ro.jpg",alt:Ln,className:"sp-hero-avatar"}),s.jsxs("div",{className:"sp-hero-meta",children:[s.jsxs("div",{className:"sp-verified",children:[s.jsx(N2,{size:16})," Verified Engineer"]}),s.jsx("h1",{className:"sp-hero-name",children:Ln}),s.jsxs("div",{className:"sp-hero-stats",children:[p," monthly listeners"]})]})]}),s.jsxs("div",{className:"sp-action-bar",children:[s.jsx("button",{className:"sp-play-btn",onClick:()=>o(!r),children:r?s.jsx(vr,{}):s.jsx(Ot,{style:{marginLeft:3}})}),s.jsx("button",{className:"sp-follow-btn",children:"Follow"}),s.jsx("button",{className:"sp-icon-btn-lg",children:s.jsx(t1,{})})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Popular"}),s.jsx("div",{className:"sp-track-list",children:$l.map((h,b)=>s.jsxs(ve,{to:`/spotify/${Yn(h.company)}`,className:"sp-track",children:[s.jsx("div",{className:"sp-track-num",children:b+1}),s.jsxs("div",{className:"sp-track-info",children:[s.jsx("div",{className:"sp-track-cover",style:{background:h.coverBg??Pt[b%Pt.length]},children:h.logo?s.jsx("img",{src:`/${h.logo}`,alt:h.company}):h.company}),s.jsxs("div",{className:"sp-track-text",children:[s.jsx("div",{className:"sp-track-title",children:h.title}),s.jsxs("div",{className:"sp-track-artist",children:[h.company," · ",h.location]})]})]}),s.jsx("div",{className:"sp-track-plays",children:tg(b)}),s.jsx("div",{className:"sp-track-duration",children:Tp(h.bullets.length)})]},b))})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"About"}),s.jsxs("div",{className:"sp-about",children:[s.jsx("div",{className:"sp-about-text",children:P2}),s.jsxs("div",{className:"sp-about-stats",children:[s.jsxs("div",{className:"sp-stat",children:[s.jsx("div",{className:"sp-stat-value",children:p}),s.jsx("div",{className:"sp-stat-label",children:"Monthly Listeners"})]}),s.jsxs("div",{className:"sp-stat",children:[s.jsx("div",{className:"sp-stat-value",children:$l.length}),s.jsx("div",{className:"sp-stat-label",children:"Albums"})]}),s.jsxs("div",{className:"sp-stat",children:[s.jsx("div",{className:"sp-stat-value",children:Jc.length}),s.jsx("div",{className:"sp-stat-label",children:"Genres"})]})]})]})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Discography"}),s.jsx("div",{className:"sp-album-grid",children:$l.map((h,b)=>s.jsxs(ve,{to:`/spotify/${Yn(h.company)}`,className:"sp-album-card",children:[s.jsxs("div",{className:"sp-album-cover",style:{background:h.coverBg??Pt[b%Pt.length]},children:[h.logo?s.jsx("img",{src:`/${h.logo}`,alt:h.company}):h.company,s.jsx("button",{className:"sp-album-play",children:s.jsx(Ot,{style:{marginLeft:2}})})]}),s.jsx("div",{className:"sp-album-title",children:h.company}),s.jsxs("div",{className:"sp-album-sub",children:[h.period.split("–")[0].trim().split("/")[1]," · ",h.bullets.length," tracks"]})]},b))})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Featured Release"}),s.jsx("div",{className:"sp-album-grid",children:s.jsxs("div",{className:"sp-album-card",style:{background:"#1a1a1a",gridColumn:"span 2"},children:[s.jsxs(ve,{to:`/spotify/${$c}`,style:{display:"flex",gap:20,alignItems:"flex-start",textDecoration:"none",color:"inherit"},children:[s.jsxs("div",{className:"sp-album-cover",style:{background:Ye.coverBg,width:160,height:160,flexShrink:0,marginBottom:0,position:"relative",fontSize:28},children:[s.jsx("img",{src:`/${Ye.logo}`,alt:Ye.name}),s.jsx("button",{className:"sp-album-play",children:s.jsx(Ot,{style:{marginLeft:2}})})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,minWidth:0},children:[s.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5},children:"Album · 2025"}),s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"#fff"},children:Ye.name}),s.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:Ye.role}),s.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:Ye.tech})]})]}),s.jsxs("a",{href:Ye.url,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),style:{fontSize:13,color:"#1ED760",fontWeight:600,textDecoration:"none",marginTop:12,display:"inline-block"},children:[Ye.url.replace("https://","").replace(/\/$/,"")," ↗"]}),s.jsx("div",{style:{marginTop:20,display:"flex",flexDirection:"column",gap:4},children:Ye.bullets.map((h,b)=>s.jsxs("div",{className:"sp-track",style:{gridTemplateColumns:"32px 1fr auto"},children:[s.jsx("div",{className:"sp-track-num",children:b+1}),s.jsx("div",{className:"sp-track-text",children:s.jsx("div",{className:"sp-track-title",style:{whiteSpace:"normal"},children:h})}),s.jsx("div",{className:"sp-track-duration",children:Tp(b+2)})]},b))})]})})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Genres"}),s.jsx("div",{className:"sp-chips",children:Jc.map(h=>s.jsx("span",{className:"sp-chip",children:h},h))})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Education"}),s.jsx("div",{className:"sp-about",style:{background:"linear-gradient(135deg, #1a1a1a 0%, #7c2d12 200%)"},children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20},children:[s.jsx("div",{className:"sp-album-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)",width:96,height:96,fontSize:20,marginBottom:0,flexShrink:0},children:"ED"}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:"EP"}),s.jsx("div",{style:{fontSize:20,fontWeight:800,color:"#fff",marginBottom:4},children:Kc.degree}),s.jsx("div",{style:{fontSize:14,color:"#b3b3b3"},children:Kc.school})]})]})})]}),s.jsx("section",{className:"sp-section",children:s.jsxs("div",{style:{fontSize:12,color:"#6a6a6a",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",paddingBottom:24},children:[s.jsx("a",{href:`mailto:${Np}`,style:{color:"#6a6a6a",textDecoration:"none"},children:Np}),s.jsx("a",{href:`https://${wp}`,target:"_blank",rel:"noopener noreferrer",style:{color:"#6a6a6a",textDecoration:"none"},children:wp}),s.jsx("span",{children:F2})]})})]}),s.jsxs("footer",{className:"sp-player",children:[s.jsxs("div",{className:"sp-player-track",children:[s.jsx("div",{className:"sp-player-cover",style:{background:Pt[0]}}),s.jsxs("div",{className:"sp-player-meta",children:[s.jsx("div",{className:"sp-player-title",children:$l[0].title}),s.jsx("div",{className:"sp-player-artist",children:Ln})]}),s.jsx("button",{className:`sp-player-heart ${d?"liked":""}`,onClick:()=>u(!d),"aria-label":"Like",children:s.jsx(xr,{})})]}),s.jsxs("div",{className:"sp-player-controls",children:[s.jsxs("div",{className:"sp-player-buttons",children:[s.jsx("button",{children:s.jsx(a1,{})}),s.jsx("button",{children:s.jsx(r1,{})}),s.jsx("button",{className:"sp-player-play",onClick:()=>o(!r),children:r?s.jsx(vr,{}):s.jsx(Ot,{style:{marginLeft:2}})}),s.jsx("button",{children:s.jsx(s1,{})}),s.jsx("button",{children:s.jsx(n1,{})})]}),s.jsxs("div",{className:"sp-progress",children:[s.jsx("span",{className:"sp-progress-time",children:"1:42"}),s.jsx("div",{className:"sp-progress-bar",children:s.jsx("div",{className:"sp-progress-fill"})}),s.jsx("span",{className:"sp-progress-time",children:"4:51"})]})]}),s.jsxs("div",{className:"sp-player-extras",children:[s.jsx("button",{children:s.jsx(u1,{})}),s.jsx("div",{className:"sp-volume",children:s.jsx("div",{className:"sp-volume-bar",children:s.jsx("div",{className:"sp-volume-fill"})})})]})]})]})]})}const{name:dr,experience:ag,project:It}=jr,Ap=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),lu=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Rp=["linear-gradient(180deg, #B91C1C 0%, #5b1414 55%, #121212 100%)","linear-gradient(180deg, #1D4ED8 0%, #1e2c5b 55%, #121212 100%)","linear-gradient(180deg, #6D28D9 0%, #2c1d5b 55%, #121212 100%)","linear-gradient(180deg, #BE185D 0%, #5b1f3e 55%, #121212 100%)"],ng="linear-gradient(180deg, #1DB954 0%, #0a5d2b 55%, #121212 100%)",Wc=[...ag.map((r,o)=>({type:"job",slug:Ap(r.company),title:r.title,artist:r.company,initials:r.company,logo:r.logo,period:r.period,description:r.summary,bullets:r.bullets,cover:r.coverBg??lu[o%lu.length],heroGrad:Rp[o%Rp.length],meta:`${r.location} · ${r.period}`})),{type:"project",slug:Ap(It.name),title:It.name,artist:dr,initials:It.name,logo:It.logo,period:"2025",bullets:It.bullets,cover:It.coverBg,heroGrad:ng,externalUrl:It.url,meta:`${It.role} · ${It.tech}`}];function ig(r){const o=165+r*53%180,d=Math.floor(o/60),u=o%60;return`${d}:${u.toString().padStart(2,"0")}`}function rg(r){let o=0;for(let p=0;p<r;p++)o+=165+p*53%180;const d=Math.floor(o/60),u=o%60;return`${d} min ${u} sec`}const Mp=`
  .sp-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #000;
    color: #fff;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: 1fr 80px;
    grid-template-areas: "sidebar main" "player player";
    gap: 8px;
    padding: 8px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .sp-page { grid-template-columns: 1fr; grid-template-areas: "main" "player"; }
    .sp-sidebar { display: none; }
  }

  .sp-mobile-nav { display: none; }
  @media (max-width: 768px) {
    .sp-mobile-nav {
      display: flex;
      gap: 8px;
      padding: 12px 16px;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 20;
      margin: -8px -8px 0;
    }
    .sp-mobile-nav::-webkit-scrollbar { display: none; }
  }
  .sp-chip { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px 6px 6px; background: #232323; border-radius: 999px; text-decoration: none; color: #fff; font-size: 13px; font-weight: 600; white-space: nowrap; flex-shrink: 0; transition: background 0.15s; }
  .sp-chip:hover { background: #2c2c2c; }
  .sp-chip.active { background: #1ED760; color: #000; }
  .sp-chip-cover { width: 28px; height: 28px; border-radius: 50%; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 7px; font-weight: 800; color: #fff; text-align: center; line-height: 1.05; padding: 2px; box-sizing: border-box; text-transform: uppercase; }
  .sp-chip-cover img { width: 100%; height: 100%; object-fit: contain; padding: 3px; box-sizing: border-box; }
  .sp-player { padding-bottom: env(safe-area-inset-bottom, 0); }

  /* Sidebar */
  .sp-sidebar { grid-area: sidebar; background: #000; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; overflow: hidden; }
  .sp-sidebar-card { background: #121212; border-radius: 8px; padding: 8px 12px; }
  .sp-nav-item { display: flex; align-items: center; gap: 16px; padding: 10px 12px; font-size: 14px; font-weight: 700; color: #b3b3b3; text-decoration: none; border-radius: 4px; transition: color 0.15s; }
  .sp-nav-item:hover { color: #fff; }
  .sp-library-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px 4px; color: #b3b3b3; font-size: 14px; font-weight: 700; }
  .sp-library-header:hover { color: #fff; }
  .sp-library-header .sp-icon-btn { background: transparent; border: none; color: #b3b3b3; cursor: pointer; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  .sp-library-header .sp-icon-btn:hover { color: #fff; background: #1a1a1a; }
  .sp-playlist-item { display: flex; align-items: center; gap: 12px; padding: 8px; border-radius: 6px; cursor: pointer; transition: background 0.15s; text-decoration: none; color: inherit; }
  .sp-playlist-item:hover { background: #1a1a1a; }
  .sp-playlist-item.active { background: #232323; }
  .sp-playlist-cover { width: 48px; height: 48px; border-radius: 4px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 800; color: #fff; text-align: center; line-height: 1.05; padding: 3px; word-break: break-word; text-transform: uppercase; letter-spacing: -0.2px; box-sizing: border-box; overflow: hidden; }
  .sp-playlist-cover img, .sp-album-art img, .sp-player-cover img { width: 100%; height: 100%; object-fit: contain; padding: 4px; box-sizing: border-box; }
  .sp-album-art img { padding: 28px; }
  .sp-playlist-meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .sp-playlist-title { font-size: 14px; color: #fff; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sp-playlist-title.active { color: #1ED760; }
  .sp-playlist-sub { font-size: 12px; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  /* Main */
  .sp-main { grid-area: main; background: #121212; border-radius: 8px; overflow-y: auto; overflow-x: hidden; position: relative; }
  .sp-main::-webkit-scrollbar { width: 12px; }
  .sp-main::-webkit-scrollbar-thumb { background: #535353; border-radius: 6px; border: 3px solid #121212; }

  .sp-topbar { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; backdrop-filter: blur(8px); }
  .sp-back-btn { display: flex; align-items: center; gap: 6px; background: rgba(0,0,0,0.5); border: none; color: #fff; padding: 8px 14px; border-radius: 20px; text-decoration: none; font-size: 13px; font-weight: 600; transition: background 0.15s; }
  .sp-back-btn:hover { background: rgba(0,0,0,0.8); }

  /* Album Hero */
  .sp-album-hero { position: relative; padding: 88px 32px 32px; margin-top: -64px; display: flex; align-items: flex-end; gap: 24px; min-height: 340px; }
  .sp-album-art { width: 232px; height: 232px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: 900; color: #fff; box-shadow: 0 8px 60px rgba(0,0,0,0.6); border-radius: 4px; letter-spacing: -1.5px; text-align: center; line-height: 1.05; padding: 20px; word-break: break-word; text-transform: uppercase; box-sizing: border-box; }
  .sp-album-meta { display: flex; flex-direction: column; gap: 12px; padding-bottom: 12px; flex: 1; min-width: 0; }
  .sp-album-type { font-size: 12px; font-weight: 700; color: #fff; }
  .sp-album-title { font-size: clamp(40px, 6vw, 72px); font-weight: 900; letter-spacing: -2px; line-height: 1.05; margin: 0; color: #fff; }
  .sp-album-byline { display: flex; align-items: center; gap: 6px; font-size: 14px; color: #fff; flex-wrap: wrap; }
  .sp-album-byline strong { font-weight: 700; }
  .sp-album-byline .dot { color: #b3b3b3; }
  .sp-album-extra { font-size: 14px; color: #b3b3b3; }

  @media (max-width: 600px) {
    .sp-album-hero { flex-direction: column; align-items: flex-start; padding: 32px 20px 20px; min-height: auto; margin-top: 0; }
    .sp-album-art { width: 170px; height: 170px; font-size: 28px; padding: 14px; }
    .sp-album-title { font-size: clamp(28px, 10vw, 48px); }
    .sp-album-byline { font-size: 12px; }
    .sp-action-bar { padding: 16px 20px; gap: 16px; }
    .sp-section { padding: 16px 20px; }
    .sp-track-table { padding: 0 8px 24px; }
  }

  .sp-action-bar { background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, #121212 100%); padding: 24px 32px; display: flex; align-items: center; gap: 24px; }
  .sp-play-btn { width: 56px; height: 56px; border-radius: 50%; background: #1ED760; border: none; color: #000; font-size: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.1s, background 0.15s; box-shadow: 0 8px 16px rgba(0,0,0,0.3); }
  .sp-play-btn:hover { background: #1fdf64; transform: scale(1.05); }
  .sp-icon-btn-lg { background: transparent; border: none; color: #b3b3b3; font-size: 26px; cursor: pointer; transition: color 0.15s; }
  .sp-icon-btn-lg:hover { color: #fff; }
  .sp-heart-btn { background: transparent; border: none; cursor: pointer; font-size: 30px; transition: color 0.15s, transform 0.1s; }
  .sp-heart-btn.liked { color: #1ED760; }
  .sp-heart-btn:not(.liked) { color: #b3b3b3; }
  .sp-heart-btn:hover { transform: scale(1.05); }

  /* Track table */
  .sp-track-table { padding: 0 16px 32px; }
  .sp-track-header { display: grid; grid-template-columns: 32px 1fr 60px; gap: 16px; padding: 4px 16px; border-bottom: 1px solid #2a2a2a; margin-bottom: 8px; font-size: 12px; color: #b3b3b3; text-transform: uppercase; letter-spacing: 1px; align-items: center; }
  .sp-track-header .col-num { text-align: center; }
  .sp-track-header .col-dur { display: flex; justify-content: flex-end; }

  .sp-track-row { display: grid; grid-template-columns: 32px 1fr 60px; gap: 16px; padding: 10px 16px; border-radius: 4px; align-items: center; cursor: pointer; transition: background 0.15s; }
  .sp-track-row:hover { background: rgba(255,255,255,0.08); }
  .sp-track-row:hover .sp-track-num .num { display: none; }
  .sp-track-row:hover .sp-track-num .play { display: inline-flex; }

  .sp-track-num { color: #b3b3b3; font-size: 16px; text-align: center; font-variant-numeric: tabular-nums; position: relative; height: 16px; display: flex; align-items: center; justify-content: center; }
  .sp-track-num .play { display: none; color: #fff; }
  .sp-track-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .sp-track-title { font-size: 15px; color: #fff; font-weight: 500; line-height: 1.4; }
  .sp-track-sub { font-size: 13px; color: #b3b3b3; }
  .sp-track-dur { font-size: 14px; color: #b3b3b3; text-align: right; font-variant-numeric: tabular-nums; }

  /* About */
  .sp-section { padding: 24px 32px; }
  .sp-section-title { font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 16px; }
  .sp-about { background: #181818; padding: 24px; border-radius: 8px; font-size: 15px; line-height: 1.7; color: #d6d6d6; }

  .sp-external { font-size: 14px; color: #1ED760; text-decoration: none; font-weight: 600; }
  .sp-external:hover { text-decoration: underline; }

  /* Player Bar */
  .sp-player { grid-area: player; background: #000; display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: center; padding: 0 16px; border-top: 1px solid #181818; }
  .sp-player-track { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .sp-player-cover { width: 56px; height: 56px; border-radius: 4px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 9px; text-align: center; line-height: 1.05; padding: 4px; word-break: break-word; text-transform: uppercase; letter-spacing: -0.2px; box-sizing: border-box; }
  .sp-player-meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .sp-player-title { font-size: 14px; color: #fff; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sp-player-artist { font-size: 12px; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sp-player-heart { background: transparent; border: none; color: #1ED760; cursor: pointer; font-size: 16px; }
  .sp-player-controls { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .sp-player-buttons { display: flex; align-items: center; gap: 18px; }
  .sp-player-buttons button { background: transparent; border: none; color: #b3b3b3; cursor: pointer; font-size: 14px; }
  .sp-player-buttons button:hover { color: #fff; }
  .sp-player-play { width: 32px !important; height: 32px; border-radius: 50% !important; background: #fff !important; color: #000 !important; font-size: 13px !important; display: flex; align-items: center; justify-content: center; }
  .sp-progress { display: flex; align-items: center; gap: 8px; width: 100%; max-width: 520px; }
  .sp-progress-time { font-size: 11px; color: #b3b3b3; font-variant-numeric: tabular-nums; min-width: 32px; }
  .sp-progress-bar { flex: 1; height: 4px; background: #4d4d4d; border-radius: 2px; overflow: hidden; }
  .sp-progress-fill { height: 100%; background: #fff; width: 25%; border-radius: 2px; transition: background 0.15s; }
  .sp-progress-bar:hover .sp-progress-fill { background: #1ED760; }
  .sp-player-extras { display: flex; align-items: center; justify-content: flex-end; gap: 14px; }
  .sp-player-extras button { background: transparent; border: none; color: #b3b3b3; cursor: pointer; font-size: 14px; }
  .sp-volume { display: flex; align-items: center; gap: 8px; width: 100px; }
  .sp-volume-bar { flex: 1; height: 4px; background: #4d4d4d; border-radius: 2px; overflow: hidden; }
  .sp-volume-fill { height: 100%; background: #fff; width: 70%; }

  @media (max-width: 768px) {
    .sp-player { grid-template-columns: 1fr auto; padding: 0 12px; gap: 12px; }
    .sp-player-extras, .sp-progress { display: none; }
    .sp-player-controls { flex-direction: row; }
  }

  /* Not found */
  .sp-notfound { padding: 80px 32px; text-align: center; }
  .sp-notfound h1 { font-size: 32px; color: #fff; margin-bottom: 12px; }
  .sp-notfound p { color: #b3b3b3; margin-bottom: 20px; }
`;function sg(){const{slug:r}=bm(),o=Wc.find(x=>x.slug===r),[d,u]=T.useState(!1),[p,h]=T.useState(!0);T.useEffect(()=>{document.title=o?`${o.title} | ${dr}`:"Not Found"},[o]);const b=s.jsxs("aside",{className:"sp-sidebar",children:[s.jsxs("div",{className:"sp-sidebar-card",children:[s.jsxs(ve,{to:"/",className:"sp-nav-item",children:[s.jsx(l1,{})," Home"]}),s.jsxs("div",{className:"sp-nav-item",children:[s.jsx(i1,{})," Search"]}),s.jsxs(ve,{to:"/spotify",className:"sp-nav-item",children:[s.jsx(tu,{})," Your Resume"]})]}),s.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[s.jsxs("div",{className:"sp-library-header",children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[s.jsx(Ip,{})," Your Library"]}),s.jsx("button",{className:"sp-icon-btn",children:s.jsx(Sr,{})})]}),s.jsx("div",{style:{marginTop:8},children:Wc.map(x=>{const g=x.slug===r;return s.jsxs(ve,{to:`/spotify/${x.slug}`,className:`sp-playlist-item ${g?"active":""}`,children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:x.cover},children:x.logo?s.jsx("img",{src:`/${x.logo}`,alt:x.artist}):x.initials}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:`sp-playlist-title ${g?"active":""}`,children:x.title}),s.jsxs("div",{className:"sp-playlist-sub",children:[x.type==="job"?"Album":"Single"," · ",x.artist]})]})]},x.slug)})})]})]}),E=s.jsxs("footer",{className:"sp-player",children:[s.jsxs("div",{className:"sp-player-track",children:[s.jsx("div",{className:"sp-player-cover",style:{background:o?.cover??lu[0]},children:o?.logo?s.jsx("img",{src:`/${o.logo}`,alt:o.artist}):o?.initials??"??"}),s.jsxs("div",{className:"sp-player-meta",children:[s.jsx("div",{className:"sp-player-title",children:o?.title??"—"}),s.jsx("div",{className:"sp-player-artist",children:o?.artist??dr})]}),s.jsx("button",{className:"sp-player-heart",children:s.jsx(xr,{})})]}),s.jsxs("div",{className:"sp-player-controls",children:[s.jsxs("div",{className:"sp-player-buttons",children:[s.jsx("button",{children:s.jsx(a1,{})}),s.jsx("button",{children:s.jsx(r1,{})}),s.jsx("button",{className:"sp-player-play",onClick:()=>u(!d),children:d?s.jsx(vr,{}):s.jsx(Ot,{style:{marginLeft:2}})}),s.jsx("button",{children:s.jsx(s1,{})}),s.jsx("button",{children:s.jsx(n1,{})})]}),s.jsxs("div",{className:"sp-progress",children:[s.jsx("span",{className:"sp-progress-time",children:"0:48"}),s.jsx("div",{className:"sp-progress-bar",children:s.jsx("div",{className:"sp-progress-fill"})}),s.jsx("span",{className:"sp-progress-time",children:"3:32"})]})]}),s.jsxs("div",{className:"sp-player-extras",children:[s.jsx("button",{children:s.jsx(u1,{})}),s.jsx("div",{className:"sp-volume",children:s.jsx("div",{className:"sp-volume-bar",children:s.jsx("div",{className:"sp-volume-fill"})})})]})]});return o?s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Mp}),s.jsxs("div",{className:"sp-page",children:[b,s.jsxs("main",{className:"sp-main",children:[s.jsx("div",{className:"sp-mobile-nav",children:Wc.map(x=>s.jsxs(ve,{to:`/spotify/${x.slug}`,className:`sp-chip ${x.slug===r?"active":""}`,children:[s.jsx("div",{className:"sp-chip-cover",style:{background:x.cover},children:x.logo?s.jsx("img",{src:`/${x.logo}`,alt:x.artist}):x.initials.slice(0,2)}),x.artist]},`m-${x.slug}`))}),s.jsxs("div",{className:"sp-topbar",children:[s.jsx(ve,{to:"/spotify",className:"sp-back-btn",children:"← Back to Resume"}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[s.jsx(tu,{size:18})," Open in Web Player"]})]}),s.jsxs("section",{className:"sp-album-hero",style:{background:o.heroGrad},children:[s.jsx("div",{className:"sp-album-art",style:{background:o.cover},children:o.logo?s.jsx("img",{src:`/${o.logo}`,alt:o.artist}):o.initials}),s.jsxs("div",{className:"sp-album-meta",children:[s.jsx("div",{className:"sp-album-type",children:o.type==="job"?"Album":"Featured Single"}),s.jsx("h1",{className:"sp-album-title",children:o.title}),s.jsxs("div",{className:"sp-album-byline",children:[s.jsx("strong",{children:o.artist}),s.jsx("span",{className:"dot",children:"·"}),s.jsx("span",{children:o.period}),s.jsx("span",{className:"dot",children:"·"}),s.jsxs("span",{children:[o.bullets.length," songs, ",rg(o.bullets.length)]})]}),s.jsx("div",{className:"sp-album-extra",children:o.meta})]})]}),s.jsxs("div",{className:"sp-action-bar",children:[s.jsx("button",{className:"sp-play-btn",onClick:()=>u(!d),children:d?s.jsx(vr,{}):s.jsx(Ot,{style:{marginLeft:3}})}),s.jsx("button",{className:`sp-heart-btn ${p?"liked":""}`,onClick:()=>h(!p),"aria-label":"Like",children:s.jsx(xr,{})}),s.jsx("button",{className:"sp-icon-btn-lg",children:s.jsx(t1,{})}),o.externalUrl&&s.jsxs("a",{href:o.externalUrl,target:"_blank",rel:"noopener noreferrer",className:"sp-external",style:{marginLeft:"auto"},children:[o.externalUrl.replace("https://","").replace(/\/$/,"")," ↗"]})]}),s.jsxs("div",{className:"sp-track-table",children:[s.jsxs("div",{className:"sp-track-header",children:[s.jsx("span",{className:"col-num",children:"#"}),s.jsx("span",{children:"Title"}),s.jsx("span",{className:"col-dur",children:s.jsx(A2,{})})]}),o.bullets.map((x,g)=>s.jsxs("div",{className:"sp-track-row",children:[s.jsxs("div",{className:"sp-track-num",children:[s.jsx("span",{className:"num",children:g+1}),s.jsx("span",{className:"play",children:s.jsx(Ot,{size:10,style:{marginLeft:2}})})]}),s.jsxs("div",{className:"sp-track-text",children:[s.jsx("div",{className:"sp-track-title",children:x}),s.jsx("div",{className:"sp-track-sub",children:o.artist})]}),s.jsx("div",{className:"sp-track-dur",children:ig(g+1)})]},g))]}),o.description&&s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"About this album"}),s.jsx("div",{className:"sp-about",children:o.description})]})]}),E]})]}):s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Mp}),s.jsxs("div",{className:"sp-page",children:[b,s.jsxs("main",{className:"sp-main",children:[s.jsx("div",{className:"sp-topbar",children:s.jsx(ve,{to:"/spotify",className:"sp-back-btn",children:"← Back"})}),s.jsxs("div",{className:"sp-notfound",children:[s.jsx("h1",{children:"Album not found"}),s.jsxs("p",{children:["This playlist doesn't exist in ",dr,"'s library."]}),s.jsx(ve,{to:"/spotify",className:"sp-external",children:"← Return to your resume"})]})]}),E]})]})}const{name:pr,summary:cg,experience:o1,skills:ug,project:pt,education:Dp}=jr,og=`
  .nf-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #141414;
    color: #fff;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ====================== Hero Billboard ====================== */
  .nf-hero {
    position: relative;
    height: 92vh;
    min-height: 560px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    background:
      radial-gradient(circle at 75% 50%, rgba(229,9,20,0.35) 0%, transparent 50%),
      linear-gradient(90deg, #141414 0%, #1f1f1f 60%, #2a0608 100%);
  }

  .nf-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, transparent 50%, #141414 100%),
      linear-gradient(90deg, #141414 0%, transparent 60%);
    pointer-events: none;
  }

  .nf-hero-photo {
    position: absolute;
    right: 4%;
    bottom: 0;
    height: 85%;
    width: 50%;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    mask-image: linear-gradient(90deg, transparent 0%, #000 25%, #000 100%);
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 25%, #000 100%);
    filter: brightness(0.85);
  }

  .nf-hero-content {
    position: relative;
    padding: 0 4% 8%;
    max-width: 700px;
    z-index: 2;
  }

  .nf-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }

  .nf-hero-badge .n-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: #E50914;
    color: #fff;
    border-radius: 2px;
    font-weight: 900;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }

  .nf-hero-title {
    font-size: clamp(40px, 7vw, 88px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -2px;
    margin: 0 0 20px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.7);
  }

  .nf-hero-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 15px;
    color: #e5e5e5;
    font-weight: 500;
  }

  .nf-tag {
    color: #46d369;
    font-weight: 700;
  }

  .nf-match {
    border: 1px solid #888;
    padding: 1px 6px;
    font-size: 11px;
    color: #ccc;
  }

  .nf-hero-desc {
    font-size: 17px;
    line-height: 1.5;
    color: #e5e5e5;
    margin-bottom: 24px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.6);
  }

  .nf-hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .nf-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
    padding: 11px 24px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.15s, background 0.15s;
    text-decoration: none;
    font-family: inherit;
  }

  .nf-btn-play {
    background: #fff;
    color: #000;
  }

  .nf-btn-play:hover { background: rgba(255,255,255,0.75); }

  .nf-btn-info {
    background: rgba(109,109,110,0.7);
    color: #fff;
  }

  .nf-btn-info:hover { background: rgba(109,109,110,0.4); }

  @media (max-width: 720px) {
    .nf-hero-photo { width: 70%; opacity: 0.5; }
    .nf-hero-content { padding-bottom: 14%; }
  }

  @media (max-width: 600px) {
    .nf-hero { height: auto; min-height: 80vh; padding-top: 24px; }
    .nf-hero-title { font-size: clamp(32px, 11vw, 56px); margin-bottom: 14px; }
    .nf-hero-meta { gap: 8px; font-size: 13px; flex-wrap: wrap; row-gap: 6px; }
    .nf-hero-desc {
      font-size: 14px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .nf-btn { padding: 10px 18px; font-size: 14px; }
    .nf-card { flex: 0 0 220px; }
    .nf-continue { flex: 0 0 280px; }
    .nf-rows { margin-top: -60px; }
    .nf-row-title { font-size: 18px; }
    .nf-scroll-btn { display: none; }
  }

  /* ====================== Row ====================== */
  .nf-rows {
    margin-top: -120px;
    position: relative;
    z-index: 5;
    padding-bottom: 80px;
  }

  .nf-row {
    margin-bottom: 36px;
    position: relative;
  }

  .nf-row-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 4%;
    margin-bottom: 12px;
  }

  .nf-row-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
  }

  .nf-explore {
    font-size: 13px;
    color: #54b9c5;
    text-decoration: none;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .nf-row:hover .nf-explore { opacity: 1; }

  .nf-row-scroller {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    overflow-y: visible;
    padding: 32px 4%;
    margin: -32px 0;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .nf-row-scroller::-webkit-scrollbar { display: none; }

  /* ====================== Card ====================== */
  .nf-card {
    flex: 0 0 280px;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s, z-index 0s 0.3s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  @media (hover: hover) {
    .nf-card:hover {
      transform: scale(1.18);
      z-index: 10;
      box-shadow: 0 16px 48px rgba(0,0,0,0.7);
      transition: transform 0.3s, box-shadow 0.3s, z-index 0s;
    }
    .nf-card:hover .nf-card-overlay { opacity: 1; }
  }

  @media (hover: none) {
    .nf-card-overlay {
      opacity: 1;
      background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.95) 100%);
    }
    .nf-card-overlay .nf-card-actions { display: none; }
  }

  .nf-card-cover {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: -1px;
    text-align: center;
    line-height: 1.05;
    padding: 12px 16px;
    word-break: break-word;
    box-sizing: border-box;
    text-transform: uppercase;
  }

  .nf-card-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 28px;
    box-sizing: border-box;
  }

  .nf-card-rank {
    position: absolute;
    bottom: -12px;
    left: 8px;
    font-size: 120px;
    font-weight: 900;
    color: #141414;
    -webkit-text-stroke: 4px #555;
    line-height: 0.8;
    pointer-events: none;
    font-family: 'Inter', sans-serif;
  }

  .nf-card-label {
    position: absolute;
    inset: auto 0 0 0;
    padding: 12px;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%);
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }

  .nf-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.95) 100%);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
  }

  .nf-card-title { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .nf-card-meta { font-size: 11px; color: #e5e5e5; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 6px; }

  .nf-card-actions {
    display: flex;
    gap: 6px;
    margin-top: 4px;
  }

  .nf-icon-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.6);
    background: rgba(20,20,20,0.7);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 11px;
    transition: border-color 0.15s, background 0.15s;
  }

  .nf-icon-btn:hover { border-color: #fff; background: rgba(60,60,60,0.7); }
  .nf-icon-btn.primary { background: #fff; color: #000; border-color: #fff; }
  .nf-icon-btn.primary:hover { background: rgba(255,255,255,0.8); }

  /* Continue Watching card variant (wider) */
  .nf-continue {
    flex: 0 0 420px;
  }

  .nf-progress {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: rgba(255,255,255,0.2);
  }

  .nf-progress-fill {
    height: 100%;
    background: #E50914;
  }

  /* Skill chip cards */
  .nf-skill-card {
    flex: 0 0 240px;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    padding: 16px;
    background: #232323;
    border: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s, background 0.15s;
  }

  .nf-skill-card:hover { background: #2c2c2c; transform: scale(1.02); }

  .nf-skill-category {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #E50914;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .nf-skill-list {
    font-size: 14px;
    color: #e5e5e5;
    line-height: 1.5;
    overflow: hidden;
  }

  /* Featured (project) row */
  .nf-featured {
    margin: 0 4% 36px;
    background: #1f1f1f;
    border-radius: 6px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 2fr 1fr;
    min-height: 280px;
  }

  .nf-featured-cover {
    background: linear-gradient(135deg, #1DB954 0%, #064E3B 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    font-weight: 900;
    color: #fff;
    letter-spacing: -2px;
    text-align: center;
    line-height: 1;
    padding: 24px;
    text-transform: uppercase;
    word-break: break-word;
    overflow: hidden;
  }

  .nf-featured-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 32px;
    box-sizing: border-box;
  }

  .nf-featured-cover::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 60%, #1f1f1f 100%);
  }

  .nf-featured-body {
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  .nf-featured-tag {
    font-size: 12px;
    color: #E50914;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .nf-featured-title { font-size: 32px; font-weight: 900; }
  .nf-featured-meta { font-size: 13px; color: #999; margin-bottom: 8px; }
  .nf-featured-desc { font-size: 14px; color: #e5e5e5; line-height: 1.5; }
  .nf-featured-link {
    color: #E50914;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    margin-top: 8px;
    display: inline-block;
  }
  .nf-featured-link:hover { text-decoration: underline; }

  @media (max-width: 720px) {
    .nf-featured { grid-template-columns: 1fr; }
    .nf-featured-cover { aspect-ratio: 16/9; }
  }

  /* Education card */
  .nf-edu {
    margin: 0 4% 36px;
    padding: 24px;
    background: linear-gradient(135deg, #1f1f1f 0%, #2a0608 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .nf-edu-badge {
    width: 96px;
    height: 96px;
    background: #E50914;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    color: #fff;
    flex-shrink: 0;
    text-align: center;
    line-height: 1.1;
    padding: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-sizing: border-box;
  }

  /* Detail Modal */
  .nf-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    z-index: 200;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 16px;
    overflow-y: auto;
  }

  .nf-modal {
    background: #181818;
    border-radius: 8px;
    max-width: 880px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .nf-modal-hero {
    position: relative;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: flex-end;
    padding: 24px 32px;
    color: #fff;
    overflow: hidden;
  }

  .nf-modal-hero-logo {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
    pointer-events: none;
  }

  .nf-modal-hero-logo img {
    max-width: 60%;
    max-height: 70%;
    object-fit: contain;
    opacity: 0.95;
  }

  .nf-modal-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, #181818 100%);
    pointer-events: none;
  }

  .nf-modal-content {
    padding: 24px 32px 32px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
  }

  @media (max-width: 720px) {
    .nf-modal-content { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .nf-modal-backdrop { padding: 0; align-items: stretch; }
    .nf-modal { border-radius: 0; min-height: 100vh; }
    .nf-modal-content { padding: 20px; gap: 20px; }
    .nf-modal-hero { padding: 20px; min-height: 220px; }
    .nf-modal-title { font-size: 26px; }
    .nf-modal-title-stack { max-width: 100%; }
    .nf-modal-close { top: 16px; right: 16px; }
  }

  .nf-modal-title-stack { position: relative; z-index: 2; max-width: 70%; }
  .nf-modal-title { font-size: 36px; font-weight: 900; margin: 0 0 12px; }
  .nf-modal-actions { display: flex; gap: 8px; margin-bottom: 8px; }

  .nf-modal-meta-line {
    display: flex;
    gap: 12px;
    font-size: 14px;
    color: #ccc;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .nf-modal-summary {
    font-size: 15px;
    line-height: 1.6;
    color: #e5e5e5;
    margin-bottom: 16px;
  }

  .nf-modal-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .nf-modal-bullets li {
    display: flex;
    gap: 10px;
    font-size: 14px;
    line-height: 1.6;
    color: #d6d6d6;
  }

  .nf-modal-bullets li::before {
    content: '▸';
    color: #E50914;
    flex-shrink: 0;
  }

  .nf-modal-side {
    font-size: 13px;
    color: #999;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .nf-modal-side strong { color: #fff; }

  .nf-modal-close {
    position: absolute;
    top: 12px; right: 12px;
    width: 36px; height: 36px;
    border-radius: 50%;
    background: #181818;
    color: #fff;
    border: 2px solid #181818;
    font-size: 14px;
    cursor: pointer;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nf-modal-close:hover { background: #2c2c2c; }

  /* Footer */
  .nf-footer {
    padding: 48px 4%;
    color: #777;
    font-size: 12px;
    border-top: 1px solid #2a2a2a;
    margin: 0 4%;
  }

  .nf-footer a { color: #777; text-decoration: none; margin-right: 16px; }
  .nf-footer a:hover { text-decoration: underline; }

  /* Scroll arrows */
  .nf-scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 4%;
    height: calc(100% - 12px);
    background: rgba(20,20,20,0.5);
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s, background 0.15s;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nf-row:hover .nf-scroll-btn { opacity: 1; }
  .nf-scroll-btn:hover { background: rgba(20,20,20,0.7); }
  .nf-scroll-btn.left { left: 0; border-radius: 0 4px 4px 0; }
  .nf-scroll-btn.right { right: 0; border-radius: 4px 0 0 4px; }
`,_p=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Op=o1.map((r,o)=>({title:r.title,artist:r.company,initials:r.company,logo:r.logo,cover:r.coverBg??_p[o%_p.length],period:r.period,summary:r.summary,bullets:r.bullets,match:98-o*3,tag:o===0?"Now Playing":o===1?"Limited Series":"Documentary",type:"job"}));function Fc({id:r,title:o,rank:d,children:u}){const p=T.useRef(null),h=b=>{p.current&&p.current.scrollBy({left:b==="left"?-p.current.clientWidth*.8:p.current.clientWidth*.8})};return s.jsxs("div",{className:"nf-row",id:r,children:[s.jsxs("div",{className:"nf-row-header",children:[s.jsx("h2",{className:"nf-row-title",children:o}),d&&s.jsx("span",{className:"nf-explore",children:"Explore all →"})]}),s.jsx("button",{className:"nf-scroll-btn left",onClick:()=>h("left"),"aria-label":"Scroll left",children:s.jsx(E2,{})}),s.jsx("div",{className:"nf-row-scroller",ref:p,children:u}),s.jsx("button",{className:"nf-scroll-btn right",onClick:()=>h("right"),"aria-label":"Scroll right",children:s.jsx(T2,{})})]})}function Pc({show:r,rank:o,wide:d,progress:u,onOpen:p,inList:h,onToggleList:b}){return s.jsxs("div",{className:`nf-card ${d?"nf-continue":""}`,style:o?{marginLeft:56,flex:"0 0 240px"}:void 0,onClick:p,children:[o&&s.jsx("span",{className:"nf-card-rank",children:o}),s.jsx("div",{className:"nf-card-cover",style:{background:r.cover},children:r.logo?s.jsx("img",{src:`/${r.logo}`,alt:r.artist}):r.initials}),u!==void 0&&s.jsx("div",{className:"nf-progress",children:s.jsx("div",{className:"nf-progress-fill",style:{width:`${u}%`}})}),s.jsxs("div",{className:"nf-card-overlay",children:[s.jsx("div",{className:"nf-card-title",children:r.title}),s.jsxs("div",{className:"nf-card-meta",children:[s.jsxs("span",{className:"nf-tag",children:[r.match,"% Match"]}),s.jsx("span",{className:"nf-match",children:"HD"}),s.jsx("span",{children:r.period})]}),s.jsxs("div",{className:"nf-card-actions",children:[s.jsx("button",{className:"nf-icon-btn primary",onClick:E=>{E.stopPropagation(),p()},"aria-label":"Play",children:s.jsx(Ot,{size:10})}),s.jsx("button",{className:"nf-icon-btn",onClick:b,"aria-label":"Add to list",children:h?s.jsx(e1,{size:10}):s.jsx(Sr,{size:10})}),s.jsx("button",{className:"nf-icon-btn",onClick:E=>E.stopPropagation(),"aria-label":"Like",children:s.jsx(c1,{size:10})}),s.jsx("button",{className:"nf-icon-btn",style:{marginLeft:"auto"},onClick:E=>{E.stopPropagation(),p()},"aria-label":"More info",children:s.jsx(w2,{size:10})})]})]})]})}const cr={title:pt.name,artist:pr,initials:pt.name,logo:pt.logo,cover:pt.coverBg,period:"2025",bullets:pt.bullets,match:99,tag:"Original Film",type:"project"};function fg(){const[r,o]=T.useState(null),[d,u]=T.useState(new Set);T.useEffect(()=>{document.title=`${pr} | RO+`},[]),T.useEffect(()=>(document.body.style.overflow=r?"hidden":"",()=>{document.body.style.overflow=""}),[r]);const p=b=>E=>{E.stopPropagation(),u(x=>{const g=new Set(x);return g.has(b.title)?g.delete(b.title):g.add(b.title),g})},h=Op[0];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:og}),s.jsxs("div",{className:"nf-page",children:[s.jsxs("section",{className:"nf-hero",children:[s.jsx("div",{className:"nf-hero-photo",style:{backgroundImage:"url(/ro.jpg)"}}),s.jsxs("div",{className:"nf-hero-content",children:[s.jsxs("div",{className:"nf-hero-badge",children:[s.jsx("span",{className:"n-mark",children:"N"})," SERIES"]}),s.jsx("h1",{className:"nf-hero-title",children:pr}),s.jsxs("div",{className:"nf-hero-meta",children:[s.jsx("span",{className:"nf-tag",children:"98% Match"}),s.jsx("span",{children:"2020 – Present"}),s.jsx("span",{className:"nf-match",children:"TV-MA"}),s.jsx("span",{className:"nf-match",children:"HD"}),s.jsxs("span",{children:[o1.length," Seasons"]})]}),s.jsx("p",{className:"nf-hero-desc",children:cg}),s.jsxs("div",{className:"nf-hero-actions",children:[s.jsxs("button",{className:"nf-btn nf-btn-play",onClick:()=>o(h),children:[s.jsx(Ot,{})," Play"]}),s.jsxs("button",{className:"nf-btn nf-btn-info",onClick:()=>o(h),children:[s.jsx(R2,{})," More Info"]})]})]})]}),s.jsxs("div",{className:"nf-rows",children:[s.jsxs(Fc,{title:"Continue Watching",children:[s.jsx(Pc,{show:h,wide:!0,progress:72,onOpen:()=>o(h),inList:d.has(h.title),onToggleList:p(h)}),s.jsx(Pc,{show:cr,wide:!0,progress:45,onOpen:()=>o(cr),inList:d.has(cr.title),onToggleList:p(cr)})]}),s.jsx(Fc,{title:"Trending Now",children:Op.map(b=>s.jsx(Pc,{show:b,onOpen:()=>o(b),inList:d.has(b.title),onToggleList:p(b)},`t-${b.title}`))}),s.jsx(Fc,{title:"Browse by Genre",children:Object.entries(ug).map(([b,E])=>s.jsxs("div",{className:"nf-skill-card",children:[s.jsxs("div",{children:[s.jsx("div",{className:"nf-skill-category",children:b}),s.jsx("div",{className:"nf-skill-list",children:E.join(" · ")})]}),s.jsxs("div",{style:{fontSize:11,color:"#666"},children:[E.length," titles"]})]},b))}),s.jsx("div",{className:"nf-row-header",children:s.jsx("h2",{className:"nf-row-title",children:"RO+ Originals"})}),s.jsxs("div",{className:"nf-featured",children:[s.jsx("div",{className:"nf-featured-cover",style:{background:pt.coverBg},children:s.jsx("img",{src:`/${pt.logo}`,alt:pt.name})}),s.jsxs("div",{className:"nf-featured-body",children:[s.jsx("div",{className:"nf-featured-tag",children:"RO+ Original"}),s.jsx("div",{className:"nf-featured-title",children:pt.name}),s.jsxs("div",{className:"nf-featured-meta",children:["2025 · ",pt.role]}),s.jsx("div",{className:"nf-featured-desc",children:pt.bullets[0]}),s.jsxs("a",{href:pt.url,target:"_blank",rel:"noopener noreferrer",className:"nf-featured-link",children:[pt.url.replace("https://","").replace(/\/$/,"")," ↗"]})]})]}),s.jsx("div",{className:"nf-row-header",children:s.jsx("h2",{className:"nf-row-title",children:"Academy Award Nominees"})}),s.jsxs("div",{className:"nf-edu",children:[s.jsxs("div",{className:"nf-edu-badge",children:["CSUF",s.jsx("br",{}),"Computer Science"]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:12,color:"#E50914",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6},children:"Limited Series · 4 Seasons"}),s.jsx("div",{style:{fontSize:22,fontWeight:800,marginBottom:4},children:Dp.degree}),s.jsx("div",{style:{fontSize:14,color:"#999"},children:Dp.school})]})]}),s.jsxs("div",{className:"nf-footer",children:[s.jsxs("div",{style:{marginBottom:16},children:[s.jsx(ve,{to:"/",children:"Home"}),s.jsx(ve,{to:"/resume",children:"Resume"}),s.jsx(ve,{to:"/spotify",children:"Spotify Resume"}),s.jsx(ve,{to:"/projects",children:"Projects"})]}),s.jsxs("div",{children:["RO+ is a parody. © ",new Date().getFullYear()," ",pr,"."]})]})]}),r&&s.jsx("div",{className:"nf-modal-backdrop",onClick:()=>o(null),children:s.jsxs("div",{className:"nf-modal",onClick:b=>b.stopPropagation(),children:[s.jsx("button",{className:"nf-modal-close",onClick:()=>o(null),"aria-label":"Close",children:"✕"}),s.jsxs("div",{className:"nf-modal-hero",style:{background:r.cover},children:[r.logo&&s.jsx("div",{className:"nf-modal-hero-logo",children:s.jsx("img",{src:`/${r.logo}`,alt:r.artist})}),s.jsxs("div",{className:"nf-modal-title-stack",children:[s.jsx("h2",{className:"nf-modal-title",children:r.title}),s.jsxs("div",{className:"nf-modal-actions",children:[s.jsxs("button",{className:"nf-btn nf-btn-play",children:[s.jsx(Ot,{})," Play"]}),s.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},onClick:()=>{u(b=>{const E=new Set(b);return E.has(r.title)?E.delete(r.title):E.add(r.title),E})},children:d.has(r.title)?s.jsx(e1,{}):s.jsx(Sr,{})}),s.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},children:s.jsx(c1,{})}),s.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40,marginLeft:"auto"},children:s.jsx(M2,{})})]})]})]}),s.jsxs("div",{className:"nf-modal-content",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"nf-modal-meta-line",children:[s.jsxs("span",{className:"nf-tag",children:[r.match,"% Match"]}),s.jsx("span",{children:r.period}),s.jsx("span",{className:"nf-match",children:"TV-MA"}),s.jsx("span",{className:"nf-match",children:"HD"}),s.jsxs("span",{children:[r.bullets.length," Episodes"]})]}),r.summary&&s.jsx("div",{className:"nf-modal-summary",children:r.summary}),s.jsx("ul",{className:"nf-modal-bullets",children:r.bullets.map((b,E)=>s.jsx("li",{children:b},E))})]}),s.jsxs("div",{className:"nf-modal-side",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Starring:"})," ",r.artist]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Genre:"})," ",r.tag]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Period:"})," ",r.period]}),s.jsxs("div",{style:{marginTop:12,color:"#666",fontSize:11},children:["This series is: ",s.jsx("strong",{style:{color:"#999"},children:"Ambitious, Technical, Inspiring"})]})]})]})]})})]})]})}const dg=`
  :root {
    --accent: #60CD8B;
    --accent-light: #60CD8B22;
    --bg: #0d0d0d;
    --surface: #1a1a1a;
    --border: #2a2a2a;
    --text: #f0f0f0;
    --muted: #888;
    --radius: 14px;
  }

  .sq-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #000;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  .sq-inner {
    width: 794px;
    min-height: 1123px;
    background: var(--bg);
    margin: 40px auto;
    padding: 52px 52px 40px;
    display: flex;
    flex-direction: column;
    gap: 36px;
    box-shadow: 0 4px 40px rgba(0,0,0,0.12);
  }

  .sq-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--border);
  }

  .sq-header-left {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sq-app-name {
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: var(--text);
  }

  .sq-app-name span {
    color: var(--accent);
  }

  .sq-tagline {
    font-size: 14px;
    color: var(--muted);
    font-weight: 500;
  }

  .sq-header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }

  .sq-role-badge {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-light);
    padding: 4px 10px;
    border-radius: 20px;
  }

  .sq-header-right p {
    font-size: 12px;
    color: var(--muted);
  }

  .sq-sections {
    display: flex;
    flex-direction: column;
    gap: 28px;
    flex: 1;
  }

  .sq-section {
    display: grid;
    gap: 20px;
    align-items: center;
  }

  .sq-section.layout-full  { grid-template-columns: 1fr 200px; }
  .sq-section.layout-split { grid-template-columns: 1fr 1fr; }
  .sq-section.layout-chat  { grid-template-columns: 200px 1fr; }

  .sq-section-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sq-section-number {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--accent);
  }

  .sq-section-title {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: var(--text);
  }

  .sq-section-desc {
    font-size: 13px;
    line-height: 1.65;
    color: var(--muted);
    max-width: 340px;
  }

  .sq-screenshot {
    border-radius: var(--radius);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
  }

  .sq-screenshot.tall   { height: 340px; }
  .sq-screenshot.medium { height: 260px; }
  .sq-screenshot.short  { height: 220px; }

  .sq-screenshot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  .sq-two-up {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .sq-two-up-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 6px;
  }

  .sq-divider {
    height: 1px;
    background: var(--border);
  }

  .sq-hood-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px 28px;
    margin-top: 2px;
  }

  .sq-hood-item {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .sq-hood-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--text);
  }

  .sq-hood-desc {
    font-size: 11px;
    line-height: 1.55;
    color: var(--muted);
  }

  .sq-stack-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }

  .sq-stack-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .sq-chip {
    font-size: 11px;
    font-weight: 500;
    color: var(--text);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 20px;
  }

  @media print {
    .sq-page { background: #000; }
    .sq-inner {
      margin: 0;
      box-shadow: none;
      width: 100%;
      padding: 36px 44px;
    }
  }
`,ur="/";function pg(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:dg}),s.jsx("div",{className:"sq-page",children:s.jsxs("div",{className:"sq-inner",children:[s.jsxs("div",{className:"sq-header",children:[s.jsxs("div",{className:"sq-header-left",children:[s.jsxs("div",{className:"sq-app-name",children:["Side",s.jsx("span",{children:"Quest"})]}),s.jsx("div",{className:"sq-tagline",children:"iOS Job Marketplace - Full-Stack Solo Project"})]}),s.jsxs("div",{className:"sq-header-right",children:[s.jsx("div",{className:"sq-role-badge",children:"iOS + Backend"}),s.jsx("p",{children:"sidequestapp.io"}),s.jsx("p",{children:"rosendoinzunza@gmail.com"}),s.jsx("p",{children:"Beta Launch - May 2026"})]})]}),s.jsxs("div",{className:"sq-sections",children:[s.jsxs("div",{className:"sq-section layout-full",children:[s.jsxs("div",{className:"sq-section-text",children:[s.jsx("div",{className:"sq-section-number",children:"01 - Discover Jobs"}),s.jsx("div",{className:"sq-section-title",children:"Swipe to Apply"}),s.jsx("div",{className:"sq-section-desc",children:"Applicants browse job listings through a swipeable card deck. Swipe right to apply, left to pass - a familiar, low-friction interaction that makes job hunting feel less like work."})]}),s.jsx("div",{className:"sq-screenshot tall",children:s.jsx("img",{src:`${ur}Applicant_feed_view.png`,alt:"Applicant feed view"})})]}),s.jsx("div",{className:"sq-divider"}),s.jsxs("div",{className:"sq-section-text",children:[s.jsx("div",{className:"sq-section-number",children:"02 - Two-Sided Marketplace"}),s.jsx("div",{className:"sq-section-title",children:"Built for Both Sides"}),s.jsx("div",{className:"sq-section-desc",children:"Businesses post listings and move applicants through a hiring pipeline (Interested → Hired). Applicants track every application in one place, with active and archived views."})]}),s.jsxs("div",{className:"sq-two-up",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sq-two-up-label",children:"Business - Listings"}),s.jsx("div",{className:"sq-screenshot medium",children:s.jsx("img",{src:`${ur}biz_listings.view.png`,alt:"Business listings view"})})]}),s.jsxs("div",{children:[s.jsx("div",{className:"sq-two-up-label",children:"Applicant - Quests"}),s.jsx("div",{className:"sq-screenshot medium",children:s.jsx("img",{src:`${ur}applicant_quests_view.png`,alt:"Applicant quests view"})})]})]}),s.jsx("div",{className:"sq-divider"}),s.jsxs("div",{className:"sq-section layout-chat",children:[s.jsx("div",{className:"sq-screenshot short",children:s.jsx("img",{src:`${ur}conversation_view.png`,alt:"Conversation view"})}),s.jsxs("div",{className:"sq-section-text",children:[s.jsx("div",{className:"sq-section-number",children:"03 - Real-Time Messaging"}),s.jsx("div",{className:"sq-section-title",children:"Chat When It Clicks"}),s.jsx("div",{className:"sq-section-desc",children:"In-app messaging connects businesses and applicants the moment there's mutual interest. Live updates via WebSocket, typing indicators, read receipts, and push notifications keep conversations moving."})]})]})]}),s.jsx("div",{className:"sq-divider"}),s.jsxs("div",{children:[s.jsx("div",{className:"sq-stack-label",children:"Under the Hood"}),s.jsxs("div",{className:"sq-hood-grid",children:[s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"JWT + Refresh Token Rotation"}),s.jsx("div",{className:"sq-hood-desc",children:"Short-lived access tokens with silent refresh - users stay logged in without re-authenticating."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"Apple & Google SSO"}),s.jsx("div",{className:"sq-hood-desc",children:"Native OAuth flows on iOS alongside email/password auth, all sharing the same session pipeline."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"WebSocket Messaging"}),s.jsx("div",{className:"sq-hood-desc",children:"Live chat with a polling fallback - messages arrive instantly without requiring a page refresh."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"Per-Route Rate Limiting"}),s.jsx("div",{className:"sq-hood-desc",children:"Sliding window limiter keyed by IP, with separate thresholds for auth vs. registration routes."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"Stripe + RevenueCat"}),s.jsx("div",{className:"sq-hood-desc",children:"Stripe for business subscriptions, RevenueCat for applicant in-app purchases - two billing surfaces, one codebase."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"AWS S3 Media Uploads"}),s.jsx("div",{className:"sq-hood-desc",children:"Profile photos and video intros upload directly to S3, keeping the API server stateless."})]})]})]}),s.jsx("div",{className:"sq-divider"}),s.jsxs("div",{children:[s.jsx("div",{className:"sq-stack-label",children:"Built with"}),s.jsx("div",{className:"sq-stack-chips",children:["SwiftUI (MVVM)","Rust / Axum","PostgreSQL","JWT Auth","Stripe","RevenueCat","WebSockets","Push Notifications","AWS S3","TestFlight"].map(r=>s.jsx("span",{className:"sq-chip",children:r},r))})]})]})})]})}Qh.createRoot(document.getElementById("root")).render(s.jsx(Al.StrictMode,{children:s.jsx(n2,{basename:"/",children:s.jsxs(km,{children:[s.jsx(Tl,{path:"/",element:s.jsx(L2,{})}),s.jsx(Tl,{path:"/about",element:s.jsx(Q2,{})}),s.jsx(Tl,{path:"/resume",element:s.jsx(W2,{})}),s.jsx(Tl,{path:"/spotify",element:s.jsx(lg,{})}),s.jsx(Tl,{path:"/spotify/:slug",element:s.jsx(sg,{})}),s.jsx(Tl,{path:"/netflix",element:s.jsx(fg,{})}),s.jsx(Tl,{path:"/projects",element:s.jsx(pg,{})})]})})}));
