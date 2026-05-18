(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function d(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(h){if(h.ep)return;h.ep=!0;const p=d(h);fetch(h.href,p)}})();function Pp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xc={exports:{}},Yn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Ph(){if(hp)return Yn;hp=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(o,h,p){var y=null;if(p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),"key"in h){p={};for(var E in h)E!=="key"&&(p[E]=h[E])}else p=h;return h=p.ref,{$$typeof:r,type:o,key:y,ref:h!==void 0?h:null,props:p}}return Yn.Fragment=u,Yn.jsx=d,Yn.jsxs=d,Yn}var mp;function Ih(){return mp||(mp=1,Xc.exports=Ph()),Xc.exports}var s=Ih(),Qc={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function e2(){if(gp)return ee;gp=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),k=Symbol.iterator;function C(v){return v===null||typeof v!="object"?null:(v=k&&v[k]||v["@@iterator"],typeof v=="function"?v:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function G(v,O,q){this.props=v,this.context=O,this.refs=Y,this.updater=q||Q}G.prototype.isReactComponent={},G.prototype.setState=function(v,O){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,O,"setState")},G.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function B(){}B.prototype=G.prototype;function ce(v,O,q){this.props=v,this.context=O,this.refs=Y,this.updater=q||Q}var I=ce.prototype=new B;I.constructor=ce,X(I,G.prototype),I.isPureReactComponent=!0;var Ne=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Be=Object.prototype.hasOwnProperty;function Oe(v,O,q,U,Z,oe){return q=oe.ref,{$$typeof:r,type:v,key:O,ref:q!==void 0?q:null,props:oe}}function Ue(v,O){return Oe(v.type,O,void 0,void 0,void 0,v.props)}function Ee(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function nt(v){var O={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(q){return O[q]})}var gt=/\/+/g;function $e(v,O){return typeof v=="object"&&v!==null&&v.key!=null?nt(""+v.key):O.toString(36)}function _a(){}function Oa(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(_a,_a):(v.status="pending",v.then(function(O){v.status==="pending"&&(v.status="fulfilled",v.value=O)},function(O){v.status==="pending"&&(v.status="rejected",v.reason=O)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function Ke(v,O,q,U,Z){var oe=typeof v;(oe==="undefined"||oe==="boolean")&&(v=null);var P=!1;if(v===null)P=!0;else switch(oe){case"bigint":case"string":case"number":P=!0;break;case"object":switch(v.$$typeof){case r:case u:P=!0;break;case M:return P=v._init,Ke(P(v._payload),O,q,U,Z)}}if(P)return Z=Z(v),P=U===""?"."+$e(v,0):U,Ne(Z)?(q="",P!=null&&(q=P.replace(gt,"$&/")+"/"),Ke(Z,O,q,"",function(sa){return sa})):Z!=null&&(Ee(Z)&&(Z=Ue(Z,q+(Z.key==null||v&&v.key===Z.key?"":(""+Z.key).replace(gt,"$&/")+"/")+P)),O.push(Z)),1;P=0;var it=U===""?".":U+":";if(Ne(v))for(var je=0;je<v.length;je++)U=v[je],oe=it+$e(U,je),P+=Ke(U,O,q,oe,Z);else if(je=C(v),typeof je=="function")for(v=je.call(v),je=0;!(U=v.next()).done;)U=U.value,oe=it+$e(U,je++),P+=Ke(U,O,q,oe,Z);else if(oe==="object"){if(typeof v.then=="function")return Ke(Oa(v),O,q,U,Z);throw O=String(v),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return P}function R(v,O,q){if(v==null)return v;var U=[],Z=0;return Ke(v,U,"","",function(oe){return O.call(q,oe,Z++)}),U}function H(v){if(v._status===-1){var O=v._result;O=O(),O.then(function(q){(v._status===0||v._status===-1)&&(v._status=1,v._result=q)},function(q){(v._status===0||v._status===-1)&&(v._status=2,v._result=q)}),v._status===-1&&(v._status=0,v._result=O)}if(v._status===1)return v._result.default;throw v._result}var J=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function ve(){}return ee.Children={map:R,forEach:function(v,O,q){R(v,function(){O.apply(this,arguments)},q)},count:function(v){var O=0;return R(v,function(){O++}),O},toArray:function(v){return R(v,function(O){return O})||[]},only:function(v){if(!Ee(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ee.Component=G,ee.Fragment=d,ee.Profiler=h,ee.PureComponent=ce,ee.StrictMode=o,ee.Suspense=x,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(v){return F.H.useMemoCache(v)}},ee.cache=function(v){return function(){return v.apply(null,arguments)}},ee.cloneElement=function(v,O,q){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var U=X({},v.props),Z=v.key,oe=void 0;if(O!=null)for(P in O.ref!==void 0&&(oe=void 0),O.key!==void 0&&(Z=""+O.key),O)!Be.call(O,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&O.ref===void 0||(U[P]=O[P]);var P=arguments.length-2;if(P===1)U.children=q;else if(1<P){for(var it=Array(P),je=0;je<P;je++)it[je]=arguments[je+2];U.children=it}return Oe(v.type,Z,void 0,void 0,oe,U)},ee.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:p,_context:v},v},ee.createElement=function(v,O,q){var U,Z={},oe=null;if(O!=null)for(U in O.key!==void 0&&(oe=""+O.key),O)Be.call(O,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(Z[U]=O[U]);var P=arguments.length-2;if(P===1)Z.children=q;else if(1<P){for(var it=Array(P),je=0;je<P;je++)it[je]=arguments[je+2];Z.children=it}if(v&&v.defaultProps)for(U in P=v.defaultProps,P)Z[U]===void 0&&(Z[U]=P[U]);return Oe(v,oe,void 0,void 0,null,Z)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(v){return{$$typeof:E,render:v}},ee.isValidElement=Ee,ee.lazy=function(v){return{$$typeof:M,_payload:{_status:-1,_result:v},_init:H}},ee.memo=function(v,O){return{$$typeof:g,type:v,compare:O===void 0?null:O}},ee.startTransition=function(v){var O=F.T,q={};F.T=q;try{var U=v(),Z=F.S;Z!==null&&Z(q,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(ve,J)}catch(oe){J(oe)}finally{F.T=O}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(v){return F.H.use(v)},ee.useActionState=function(v,O,q){return F.H.useActionState(v,O,q)},ee.useCallback=function(v,O){return F.H.useCallback(v,O)},ee.useContext=function(v){return F.H.useContext(v)},ee.useDebugValue=function(){},ee.useDeferredValue=function(v,O){return F.H.useDeferredValue(v,O)},ee.useEffect=function(v,O,q){var U=F.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(v,O)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(v,O,q){return F.H.useImperativeHandle(v,O,q)},ee.useInsertionEffect=function(v,O){return F.H.useInsertionEffect(v,O)},ee.useLayoutEffect=function(v,O){return F.H.useLayoutEffect(v,O)},ee.useMemo=function(v,O){return F.H.useMemo(v,O)},ee.useOptimistic=function(v,O){return F.H.useOptimistic(v,O)},ee.useReducer=function(v,O,q){return F.H.useReducer(v,O,q)},ee.useRef=function(v){return F.H.useRef(v)},ee.useState=function(v){return F.H.useState(v)},ee.useSyncExternalStore=function(v,O,q){return F.H.useSyncExternalStore(v,O,q)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.1",ee}var xp;function ho(){return xp||(xp=1,Qc.exports=e2()),Qc.exports}var T=ho();const Da=Pp(T);var Zc={exports:{}},Gn={},$c={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function t2(){return vp||(vp=1,function(r){function u(R,H){var J=R.length;R.push(H);e:for(;0<J;){var ve=J-1>>>1,v=R[ve];if(0<h(v,H))R[ve]=H,R[J]=v,J=ve;else break e}}function d(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var H=R[0],J=R.pop();if(J!==H){R[0]=J;e:for(var ve=0,v=R.length,O=v>>>1;ve<O;){var q=2*(ve+1)-1,U=R[q],Z=q+1,oe=R[Z];if(0>h(U,J))Z<v&&0>h(oe,U)?(R[ve]=oe,R[Z]=J,ve=Z):(R[ve]=U,R[q]=J,ve=q);else if(Z<v&&0>h(oe,J))R[ve]=oe,R[Z]=J,ve=Z;else break e}}return H}function h(R,H){var J=R.sortIndex-H.sortIndex;return J!==0?J:R.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var y=Date,E=y.now();r.unstable_now=function(){return y.now()-E}}var x=[],g=[],M=1,k=null,C=3,Q=!1,X=!1,Y=!1,G=!1,B=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function Ne(R){for(var H=d(g);H!==null;){if(H.callback===null)o(g);else if(H.startTime<=R)o(g),H.sortIndex=H.expirationTime,u(x,H);else break;H=d(g)}}function F(R){if(Y=!1,Ne(R),!X)if(d(x)!==null)X=!0,Be||(Be=!0,$e());else{var H=d(g);H!==null&&Ke(F,H.startTime-R)}}var Be=!1,Oe=-1,Ue=5,Ee=-1;function nt(){return G?!0:!(r.unstable_now()-Ee<Ue)}function gt(){if(G=!1,Be){var R=r.unstable_now();Ee=R;var H=!0;try{e:{X=!1,Y&&(Y=!1,ce(Oe),Oe=-1),Q=!0;var J=C;try{t:{for(Ne(R),k=d(x);k!==null&&!(k.expirationTime>R&&nt());){var ve=k.callback;if(typeof ve=="function"){k.callback=null,C=k.priorityLevel;var v=ve(k.expirationTime<=R);if(R=r.unstable_now(),typeof v=="function"){k.callback=v,Ne(R),H=!0;break t}k===d(x)&&o(x),Ne(R)}else o(x);k=d(x)}if(k!==null)H=!0;else{var O=d(g);O!==null&&Ke(F,O.startTime-R),H=!1}}break e}finally{k=null,C=J,Q=!1}H=void 0}}finally{H?$e():Be=!1}}}var $e;if(typeof I=="function")$e=function(){I(gt)};else if(typeof MessageChannel<"u"){var _a=new MessageChannel,Oa=_a.port2;_a.port1.onmessage=gt,$e=function(){Oa.postMessage(null)}}else $e=function(){B(gt,0)};function Ke(R,H){Oe=B(function(){R(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(R){switch(C){case 1:case 2:case 3:var H=3;break;default:H=C}var J=C;C=H;try{return R()}finally{C=J}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=C;C=R;try{return H()}finally{C=J}},r.unstable_scheduleCallback=function(R,H,J){var ve=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ve+J:ve):J=ve,R){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=J+v,R={id:M++,callback:H,priorityLevel:R,startTime:J,expirationTime:v,sortIndex:-1},J>ve?(R.sortIndex=J,u(g,R),d(x)===null&&R===d(g)&&(Y?(ce(Oe),Oe=-1):Y=!0,Ke(F,J-ve))):(R.sortIndex=v,u(x,R),X||Q||(X=!0,Be||(Be=!0,$e()))),R},r.unstable_shouldYield=nt,r.unstable_wrapCallback=function(R){var H=C;return function(){var J=C;C=H;try{return R.apply(this,arguments)}finally{C=J}}}}(Kc)),Kc}var bp;function a2(){return bp||(bp=1,$c.exports=t2()),$c.exports}var Jc={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function l2(){if(yp)return Fe;yp=1;var r=ho();function u(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)g+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(x,g,M){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:k==null?null:""+k,children:x,containerInfo:g,implementation:M}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Fe.createPortal=function(x,g){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return p(x,g,null,M)},Fe.flushSync=function(x){var g=y.T,M=o.p;try{if(y.T=null,o.p=2,x)return x()}finally{y.T=g,o.p=M,o.d.f()}},Fe.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(x,g))},Fe.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},Fe.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var M=g.as,k=E(M,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,Q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;M==="style"?o.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:k,integrity:C,fetchPriority:Q}):M==="script"&&o.d.X(x,{crossOrigin:k,integrity:C,fetchPriority:Q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Fe.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var M=E(g.as,g.crossOrigin);o.d.M(x,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(x)},Fe.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var M=g.as,k=E(M,g.crossOrigin);o.d.L(x,M,{crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Fe.preloadModule=function(x,g){if(typeof x=="string")if(g){var M=E(g.as,g.crossOrigin);o.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(x)},Fe.requestFormReset=function(x){o.d.r(x)},Fe.unstable_batchedUpdates=function(x,g){return x(g)},Fe.useFormState=function(x,g,M){return y.H.useFormState(x,g,M)},Fe.useFormStatus=function(){return y.H.useHostTransitionStatus()},Fe.version="19.1.1",Fe}var jp;function n2(){if(jp)return Jc.exports;jp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Jc.exports=l2(),Jc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function i2(){if(Sp)return Gn;Sp=1;var r=a2(),u=ho(),d=n2();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return E(n),e;if(i===l)return E(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,f=n.child;f;){if(f===a){c=!0,a=n,l=i;break}if(f===l){c=!0,l=n,a=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===a){c=!0,a=i,l=n;break}if(f===l){c=!0,l=i,a=n;break}f=f.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,k=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),ce=Symbol.for("react.consumer"),I=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=gt&&e[gt]||e["@@iterator"],typeof e=="function"?e:null)}var _a=Symbol.for("react.client.reference");function Oa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_a?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case F:return"Suspense";case Be:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case I:return(e.displayName||"Context")+".Provider";case ce:return(e._context.displayName||"Context")+".Consumer";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oe:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}var Ke=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ve=[],v=-1;function O(e){return{current:e}}function q(e){0>v||(e.current=ve[v],ve[v]=null,v--)}function U(e,t){v++,ve[v]=e.current,e.current=t}var Z=O(null),oe=O(null),P=O(null),it=O(null);function je(e,t){switch(U(P,t),U(oe,e),U(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gd(t),e=Vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Z),U(Z,e)}function sa(){q(Z),q(oe),q(P)}function Ms(e){e.memoizedState!==null&&U(it,e);var t=Z.current,a=Vd(t,e.type);t!==a&&(U(oe,e),U(Z,a))}function In(e){oe.current===e&&(q(Z),q(oe)),it.current===e&&(q(it),Bn._currentValue=J)}var Rs=Object.prototype.hasOwnProperty,Ds=r.unstable_scheduleCallback,_s=r.unstable_cancelCallback,R1=r.unstable_shouldYield,D1=r.unstable_requestPaint,Rt=r.unstable_now,_1=r.unstable_getCurrentPriorityLevel,jo=r.unstable_ImmediatePriority,So=r.unstable_UserBlockingPriority,ei=r.unstable_NormalPriority,O1=r.unstable_LowPriority,No=r.unstable_IdlePriority,k1=r.log,C1=r.unstable_setDisableYieldValue,Vl=null,st=null;function ra(e){if(typeof k1=="function"&&C1(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(Vl,e)}catch{}}var rt=Math.clz32?Math.clz32:H1,B1=Math.log,U1=Math.LN2;function H1(e){return e>>>=0,e===0?32:31-(B1(e)/U1|0)|0}var ti=256,ai=4194304;function ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function li(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~i,l!==0?n=ka(l):(c&=f,c!==0?n=ka(c):a||(a=f&~e,a!==0&&(n=ka(a))))):(f=l&~i,f!==0?n=ka(f):c!==0?n=ka(c):a||(a=l&~e,a!==0&&(n=ka(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function q1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zo(){var e=ti;return ti<<=1,(ti&4194048)===0&&(ti=256),e}function wo(){var e=ai;return ai<<=1,(ai&62914560)===0&&(ai=4194304),e}function Os(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function L1(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,m=e.expirationTimes,N=e.hiddenUpdates;for(a=c&~a;0<a;){var A=31-rt(a),_=1<<A;f[A]=0,m[A]=-1;var z=N[A];if(z!==null)for(N[A]=null,A=0;A<z.length;A++){var w=z[A];w!==null&&(w.lane&=-536870913)}a&=~_}l!==0&&Eo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Eo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function To(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-rt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ao(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:cp(e.type))}function Y1(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var ca=Math.random().toString(36).slice(2),Je="__reactFiber$"+ca,Ie="__reactProps$"+ca,el="__reactContainer$"+ca,Bs="__reactEvents$"+ca,G1="__reactListeners$"+ca,V1="__reactHandles$"+ca,Mo="__reactResources$"+ca,Zl="__reactMarker$"+ca;function Us(e){delete e[Je],delete e[Ie],delete e[Bs],delete e[G1],delete e[V1]}function tl(e){var t=e[Je];if(t)return t;for(var a=e.parentNode;a;){if(t=a[el]||a[Je]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=$d(e);e!==null;){if(a=e[Je])return a;e=$d(e)}return t}e=a,a=e.parentNode}return null}function al(e){if(e=e[Je]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function $l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ll(e){var t=e[Mo];return t||(t=e[Mo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Zl]=!0}var Ro=new Set,Do={};function Ca(e,t){nl(e,t),nl(e+"Capture",t)}function nl(e,t){for(Do[e]=t,e=0;e<t.length;e++)Ro.add(t[e])}var X1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_o={},Oo={};function Q1(e){return Rs.call(Oo,e)?!0:Rs.call(_o,e)?!1:X1.test(e)?Oo[e]=!0:(_o[e]=!0,!1)}function ni(e,t,a){if(Q1(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ii(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var Hs,ko;function il(e){if(Hs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Hs=t&&t[1]||"",ko=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hs+e+ko}var qs=!1;function Ls(e,t){if(!e||qs)return"";qs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(w){var z=w}Reflect.construct(e,[],_)}else{try{_.call()}catch(w){z=w}e.call(_.prototype)}}else{try{throw Error()}catch(w){z=w}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(w){if(w&&z&&typeof w.stack=="string")return[w.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var m=c.split(`
`),N=f.split(`
`);for(n=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(l===m.length||n===N.length)for(l=m.length-1,n=N.length-1;1<=l&&0<=n&&m[l]!==N[n];)n--;for(;1<=l&&0<=n;l--,n--)if(m[l]!==N[n]){if(l!==1||n!==1)do if(l--,n--,0>n||m[l]!==N[n]){var A=`
`+m[l].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=l&&0<=n);break}}}finally{qs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?il(a):""}function Z1(e){switch(e.tag){case 26:case 27:case 5:return il(e.type);case 16:return il("Lazy");case 13:return il("Suspense");case 19:return il("SuspenseList");case 0:case 15:return Ls(e.type,!1);case 11:return Ls(e.type.render,!1);case 1:return Ls(e.type,!0);case 31:return il("Activity");default:return""}}function Co(e){try{var t="";do t+=Z1(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $1(e){var t=Bo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=$1(e))}function Uo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Bo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var K1=/[\n"\\]/g;function vt(e){return e.replace(K1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ys(e,t,a,l,n,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Gs(e,c,xt(t)):a!=null?Gs(e,c,xt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+xt(f):e.removeAttribute("name")}function Ho(e,t,a,l,n,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Gs(e,t,a){t==="number"&&ri(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function qo(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function Lo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Ke(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function rl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var J1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||J1.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Go(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Yo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Yo(e,i,t[i])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ci(e){return F1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Xs=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,ol=null;function Vo(e){var t=al(e);if(t&&(e=t.stateNode)){var a=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ys(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ie]||null;if(!n)throw Error(o(90));Ys(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Uo(l)}break e;case"textarea":qo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&sl(e,!!a.multiple,t,!1)}}}var Zs=!1;function Xo(e,t,a){if(Zs)return e(t,a);Zs=!0;try{var l=e(t);return l}finally{if(Zs=!1,(cl!==null||ol!==null)&&($i(),cl&&(t=cl,e=ol,ol=cl=null,Vo(t),e)))for(t=0;t<e.length;t++)Vo(e[t])}}function Kl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ie]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=!1;if(Lt)try{var Jl={};Object.defineProperty(Jl,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Jl,Jl),window.removeEventListener("test",Jl,Jl)}catch{$s=!1}var oa=null,Ks=null,oi=null;function Qo(){if(oi)return oi;var e,t=Ks,a=t.length,l,n="value"in oa?oa.value:oa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return oi=n.slice(e,1<l?1-l:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function Zo(){return!1}function et(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fi:Zo,this.isPropagationStopped=Zo,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},di=et(Ba),Wl=M({},Ba,{view:0,detail:0}),P1=et(Wl),Js,Ws,Fl,pi=M({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(Js=e.screenX-Fl.screenX,Ws=e.screenY-Fl.screenY):Ws=Js=0,Fl=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:Ws}}),$o=et(pi),I1=M({},pi,{dataTransfer:0}),e0=et(I1),t0=M({},Wl,{relatedTarget:0}),Fs=et(t0),a0=M({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=et(a0),n0=M({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i0=et(n0),s0=M({},Ba,{data:0}),Ko=et(s0),r0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o0[e])?!!t[e]:!1}function Ps(){return u0}var f0=M({},Wl,{key:function(e){if(e.key){var t=r0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d0=et(f0),p0=M({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=et(p0),h0=M({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),m0=et(h0),g0=M({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),x0=et(g0),v0=M({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=et(v0),y0=M({},Ba,{newState:0,oldState:0}),j0=et(y0),S0=[9,13,27,32],Is=Lt&&"CompositionEvent"in window,Pl=null;Lt&&"documentMode"in document&&(Pl=document.documentMode);var N0=Lt&&"TextEvent"in window&&!Pl,Wo=Lt&&(!Is||Pl&&8<Pl&&11>=Pl),Fo=" ",Po=!1;function Io(e,t){switch(e){case"keyup":return S0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ul=!1;function z0(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(Po=!0,Fo);case"textInput":return e=t.data,e===Fo&&Po?null:e;default:return null}}function w0(e,t){if(ul)return e==="compositionend"||!Is&&Io(e,t)?(e=Qo(),oi=Ks=oa=null,ul=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wo&&t.locale!=="ko"?null:t.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E0[e.type]:t==="textarea"}function au(e,t,a,l){cl?ol?ol.push(l):ol=[l]:cl=l,t=Ii(t,"onChange"),0<t.length&&(a=new di("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Il=null,en=null;function T0(e){Ud(e,0)}function hi(e){var t=$l(e);if(Uo(t))return e}function lu(e,t){if(e==="change")return t}var nu=!1;if(Lt){var er;if(Lt){var tr="oninput"in document;if(!tr){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),tr=typeof iu.oninput=="function"}er=tr}else er=!1;nu=er&&(!document.documentMode||9<document.documentMode)}function su(){Il&&(Il.detachEvent("onpropertychange",ru),en=Il=null)}function ru(e){if(e.propertyName==="value"&&hi(en)){var t=[];au(t,en,e,Qs(e)),Xo(T0,t)}}function A0(e,t,a){e==="focusin"?(su(),Il=t,en=a,Il.attachEvent("onpropertychange",ru)):e==="focusout"&&su()}function M0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(en)}function R0(e,t){if(e==="click")return hi(t)}function D0(e,t){if(e==="input"||e==="change")return hi(t)}function _0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:_0;function tn(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Rs.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var a=cu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cu(a)}}function uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ri(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ri(e.document)}return t}function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var O0=Lt&&"documentMode"in document&&11>=document.documentMode,fl=null,lr=null,an=null,nr=!1;function du(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nr||fl==null||fl!==ri(l)||(l=fl,"selectionStart"in l&&ar(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),an&&tn(an,l)||(an=l,l=Ii(lr,"onSelect"),0<l.length&&(t=new di("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=fl)))}function Ua(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var dl={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},ir={},pu={};Lt&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete dl.animationend.animation,delete dl.animationiteration.animation,delete dl.animationstart.animation),"TransitionEvent"in window||delete dl.transitionend.transition);function Ha(e){if(ir[e])return ir[e];if(!dl[e])return e;var t=dl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in pu)return ir[e]=t[a];return e}var hu=Ha("animationend"),mu=Ha("animationiteration"),gu=Ha("animationstart"),k0=Ha("transitionrun"),C0=Ha("transitionstart"),B0=Ha("transitioncancel"),xu=Ha("transitionend"),vu=new Map,sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sr.push("scrollEnd");function Tt(e,t){vu.set(e,t),Ca(t,[e])}var bu=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=bu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Co(t)},bu.set(e,t),t)}return{value:e,source:t,stack:Co(t)}}var yt=[],pl=0,rr=0;function mi(){for(var e=pl,t=rr=pl=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&yu(a,n,i)}}function gi(e,t,a,l){yt[pl++]=e,yt[pl++]=t,yt[pl++]=a,yt[pl++]=l,rr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function cr(e,t,a,l){return gi(e,t,a,l),xi(e)}function hl(e,t){return gi(e,null,null,t),xi(e)}function yu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-rt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function xi(e){if(50<An)throw An=0,hc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ml={};function U0(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,l){return new U0(e,t,a,l)}function or(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ju(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")or(e)&&(c=1);else if(typeof e=="string")c=qh(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=ot(31,a,t,n),e.elementType=Ee,e.lanes=i,e;case X:return qa(a.children,n,i,t);case Y:c=8,n|=24;break;case G:return e=ot(12,a,t,n|2),e.elementType=G,e.lanes=i,e;case F:return e=ot(13,a,t,n),e.elementType=F,e.lanes=i,e;case Be:return e=ot(19,a,t,n),e.elementType=Be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:case I:c=10;break e;case ce:c=9;break e;case Ne:c=11;break e;case Oe:c=14;break e;case Ue:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ot(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function qa(e,t,a,l){return e=ot(7,e,l,t),e.lanes=a,e}function ur(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function fr(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gl=[],xl=0,bi=null,yi=0,jt=[],St=0,La=null,Gt=1,Vt="";function Ya(e,t){gl[xl++]=yi,gl[xl++]=bi,bi=e,yi=t}function Su(e,t,a){jt[St++]=Gt,jt[St++]=Vt,jt[St++]=La,La=e;var l=Gt;e=Vt;var n=32-rt(l)-1;l&=~(1<<n),a+=1;var i=32-rt(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Gt=1<<32-rt(t)+n|a<<n|l,Vt=i+e}else Gt=1<<i|a<<n|l,Vt=e}function dr(e){e.return!==null&&(Ya(e,1),Su(e,1,0))}function pr(e){for(;e===bi;)bi=gl[--xl],gl[xl]=null,yi=gl[--xl],gl[xl]=null;for(;e===La;)La=jt[--St],jt[St]=null,Vt=jt[--St],jt[St]=null,Gt=jt[--St],jt[St]=null}var Pe=null,Te=null,fe=!1,Ga=null,Dt=!1,hr=Error(o(519));function Va(e){var t=Error(o(418,""));throw sn(bt(t,e)),hr}function Nu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Je]=e,t[Ie]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<Rn.length;a++)ie(Rn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),Ho(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),si(t);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Lo(t,l.value,l.defaultValue,l.children),si(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Yd(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=es),t=!0):t=!1,t||Va(e)}function zu(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:Pe=Pe.return}}function ln(e){if(e!==Pe)return!1;if(!fe)return zu(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rc(e.type,e.memoizedProps)),a=!a),a&&Te&&Va(e),zu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Te=Mt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Te=null}}else t===27?(t=Te,wa(e.type)?(e=kc,kc=null,Te=e):Te=t):Te=Pe?Mt(e.stateNode.nextSibling):null;return!0}function nn(){Te=Pe=null,fe=!1}function wu(){var e=Ga;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),Ga=null),e}function sn(e){Ga===null?Ga=[e]:Ga.push(e)}var mr=O(null),Xa=null,Xt=null;function ua(e,t,a){U(mr,t._currentValue),t._currentValue=a}function Qt(e){e._currentValue=mr.current,q(mr)}function gr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function xr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var m=0;m<t.length;m++)if(f.context===t[m]){i.lanes|=a,f=i.alternate,f!==null&&(f.lanes|=a),gr(i.return,a,e),l||(c=null);break e}i=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),gr(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function rn(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var f=n.type;ct(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===it.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Bn):e=[Bn])}n=n.return}e!==null&&xr(t,e,a,l),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){Xa=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Eu(Xa,e)}function Si(e,t){return Xa===null&&Qa(e),Eu(e,t)}function Eu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Xt===null){if(e===null)throw Error(o(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return a}var H0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},q0=r.unstable_scheduleCallback,L0=r.unstable_NormalPriority,ke={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vr(){return{controller:new H0,data:new Map,refCount:0}}function cn(e){e.refCount--,e.refCount===0&&q0(L0,function(){e.controller.abort()})}var on=null,br=0,vl=0,bl=null;function Y0(e,t){if(on===null){var a=on=[];br=0,vl=jc(),bl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return br++,t.then(Tu,Tu),t}function Tu(){if(--br===0&&on!==null){bl!==null&&(bl.status="fulfilled");var e=on;on=null,vl=0,bl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function G0(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Au=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Y0(e,t),Au!==null&&Au(e,t)};var Za=O(null);function yr(){var e=Za.current;return e!==null?e:ye.pooledCache}function Ni(e,t){t===null?U(Za,Za.current):U(Za,t.pool)}function Mu(){var e=yr();return e===null?null:{parent:ke._currentValue,pool:e}}var un=Error(o(460)),Ru=Error(o(474)),zi=Error(o(542)),jr={then:function(){}};function Du(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wi(){}function _u(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(wi,wi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ku(e),e;default:if(typeof t.status=="string")t.then(wi,wi);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ku(e),e}throw fn=t,un}}var fn=null;function Ou(){if(fn===null)throw Error(o(459));var e=fn;return fn=null,e}function ku(e){if(e===un||e===zi)throw Error(o(483))}var fa=!1;function Sr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=xi(e),yu(e,null,a),t}return gi(e,l,t,a),xi(e)}function dn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,To(e,a)}}function zr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var wr=!1;function pn(){if(wr){var e=bl;if(e!==null)throw e}}function hn(e,t,a,l){wr=!1;var n=e.updateQueue;fa=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var m=f,N=m.next;m.next=null,c===null?i=N:c.next=N,c=m;var A=e.alternate;A!==null&&(A=A.updateQueue,f=A.lastBaseUpdate,f!==c&&(f===null?A.firstBaseUpdate=N:f.next=N,A.lastBaseUpdate=m))}if(i!==null){var _=n.baseState;c=0,A=N=m=null,f=i;do{var z=f.lane&-536870913,w=z!==f.lane;if(w?(re&z)===z:(l&z)===z){z!==0&&z===vl&&(wr=!0),A!==null&&(A=A.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var W=e,$=f;z=t;var xe=a;switch($.tag){case 1:if(W=$.payload,typeof W=="function"){_=W.call(xe,_,z);break e}_=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=$.payload,z=typeof W=="function"?W.call(xe,_,z):W,z==null)break e;_=M({},_,z);break e;case 2:fa=!0}}z=f.callback,z!==null&&(e.flags|=64,w&&(e.flags|=8192),w=n.callbacks,w===null?n.callbacks=[z]:w.push(z))}else w={lane:z,tag:f.tag,payload:f.payload,callback:f.callback,next:null},A===null?(N=A=w,m=_):A=A.next=w,c|=z;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;w=f,f=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);A===null&&(m=_),n.baseState=m,n.firstBaseUpdate=N,n.lastBaseUpdate=A,i===null&&(n.shared.lanes=0),ja|=c,e.lanes=c,e.memoizedState=_}}function Cu(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Bu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cu(a[e],t)}var yl=O(null),Ei=O(0);function Uu(e,t){e=Pt,U(Ei,e),U(yl,t),Pt=e|t.baseLanes}function Er(){U(Ei,Pt),U(yl,yl.current)}function Tr(){Pt=Ei.current,q(yl),q(Ei)}var ha=0,ae=null,me=null,De=null,Ti=!1,jl=!1,$a=!1,Ai=0,mn=0,Sl=null,V0=0;function Me(){throw Error(o(321))}function Ar(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function Mr(e,t,a,l,n,i){return ha=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?jf:Sf,$a=!1,i=a(l,n),$a=!1,jl&&(i=qu(t,a,l,n)),Hu(e),i}function Hu(e){R.H=ki;var t=me!==null&&me.next!==null;if(ha=0,De=me=ae=null,Ti=!1,mn=0,Sl=null,t)throw Error(o(300));e===null||qe||(e=e.dependencies,e!==null&&ji(e)&&(qe=!0))}function qu(e,t,a,l){ae=e;var n=0;do{if(jl&&(Sl=null),mn=0,jl=!1,25<=n)throw Error(o(301));if(n+=1,De=me=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=W0,i=t(a,l)}while(jl);return i}function X0(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?gn(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(ae.flags|=1024),t}function Rr(){var e=Ai!==0;return Ai=0,e}function Dr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function _r(e){if(Ti){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ti=!1}ha=0,De=me=ae=null,jl=!1,mn=Ai=0,Sl=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ae.memoizedState=De=e:De=De.next=e,De}function _e(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=De===null?ae.memoizedState:De.next;if(t!==null)De=t,me=e;else{if(e===null)throw ae.alternate===null?Error(o(467)):Error(o(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},De===null?ae.memoizedState=De=e:De=De.next=e}return De}function Or(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(e){var t=mn;return mn+=1,Sl===null&&(Sl=[]),e=_u(Sl,e,t),t=ae,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?jf:Sf),e}function Mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gn(e);if(e.$$typeof===I)return We(e)}throw Error(o(438,String(e)))}function kr(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Or(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=nt;return t.index++,a}function Zt(e,t){return typeof t=="function"?t(e):t}function Ri(e){var t=_e();return Cr(t,me,e)}function Cr(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=c=null,m=null,N=t,A=!1;do{var _=N.lane&-536870913;if(_!==N.lane?(re&_)===_:(ha&_)===_){var z=N.revertLane;if(z===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),_===vl&&(A=!0);else if((ha&z)===z){N=N.next,z===vl&&(A=!0);continue}else _={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},m===null?(f=m=_,c=i):m=m.next=_,ae.lanes|=z,ja|=z;_=N.action,$a&&a(i,_),i=N.hasEagerState?N.eagerState:a(i,_)}else z={lane:_,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},m===null?(f=m=z,c=i):m=m.next=z,ae.lanes|=_,ja|=_;N=N.next}while(N!==null&&N!==t);if(m===null?c=i:m.next=f,!ct(i,e.memoizedState)&&(qe=!0,A&&(a=bl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=m,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Br(e){var t=_e(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ct(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Lu(e,t,a){var l=ae,n=_e(),i=fe;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!ct((me||n).memoizedState,a);c&&(n.memoizedState=a,qe=!0),n=n.queue;var f=Vu.bind(null,l,n,e);if(xn(2048,8,f,[e]),n.getSnapshot!==t||c||De!==null&&De.memoizedState.tag&1){if(l.flags|=2048,Nl(9,Di(),Gu.bind(null,l,n,a,t),null),ye===null)throw Error(o(349));i||(ha&124)!==0||Yu(l,t,a)}return a}function Yu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=Or(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gu(e,t,a,l){t.value=a,t.getSnapshot=l,Xu(t)&&Qu(e)}function Vu(e,t,a){return a(function(){Xu(t)&&Qu(e)})}function Xu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch{return!0}}function Qu(e){var t=hl(e,2);t!==null&&ht(t,e,2)}function Ur(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),$a){ra(!0);try{a()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},t}function Zu(e,t,a,l){return e.baseState=a,Cr(e,me,typeof l=="function"?l:Zt)}function Q0(e,t,a,l,n){if(Oi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,$u(t,i)):(i.next=a.next,t.pending=a.next=i)}}function $u(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,c={};R.T=c;try{var f=a(n,l),m=R.S;m!==null&&m(c,f),Ku(e,t,f)}catch(N){Hr(e,t,N)}finally{R.T=i}}else try{i=a(n,l),Ku(e,t,i)}catch(N){Hr(e,t,N)}}function Ku(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ju(e,t,l)},function(l){return Hr(e,t,l)}):Ju(e,t,a)}function Ju(e,t,a){t.status="fulfilled",t.value=a,Wu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,$u(e,a)))}function Hr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Wu(t),t=t.next;while(t!==l)}e.action=null}function Wu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Fu(e,t){return t}function Pu(e,t){if(fe){var a=ye.formState;if(a!==null){e:{var l=ae;if(fe){if(Te){t:{for(var n=Te,i=Dt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Mt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Te=Mt(n.nextSibling),l=n.data==="F!";break e}}Va(l)}l=!1}l&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fu,lastRenderedState:t},a.queue=l,a=vf.bind(null,ae,l),l.dispatch=a,l=Ur(!1),i=Vr.bind(null,ae,!1,l.queue),l=tt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Q0.bind(null,ae,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Iu(e){var t=_e();return ef(t,me,e)}function ef(e,t,a){if(t=Cr(e,t,Fu)[0],e=Ri(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=gn(t)}catch(c){throw c===un?zi:c}else l=t;t=_e();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,Nl(9,Di(),Z0.bind(null,n,a),null)),[l,i,e]}function Z0(e,t){e.action=t}function tf(e){var t=_e(),a=me;if(a!==null)return ef(t,a,e);_e(),t=t.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Nl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Or(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Di(){return{destroy:void 0,resource:void 0}}function af(){return _e().memoizedState}function _i(e,t,a,l){var n=tt();l=l===void 0?null:l,ae.flags|=e,n.memoizedState=Nl(1|t,Di(),a,l)}function xn(e,t,a,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;me!==null&&l!==null&&Ar(l,me.memoizedState.deps)?n.memoizedState=Nl(t,i,a,l):(ae.flags|=e,n.memoizedState=Nl(1|t,i,a,l))}function lf(e,t){_i(8390656,8,e,t)}function nf(e,t){xn(2048,8,e,t)}function sf(e,t){return xn(4,2,e,t)}function rf(e,t){return xn(4,4,e,t)}function cf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,a){a=a!=null?a.concat([e]):null,xn(4,4,cf.bind(null,t,e),a)}function qr(){}function uf(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Ar(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ff(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Ar(t,l[1]))return l[0];if(l=e(),$a){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l}function Lr(e,t,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=hd(),ae.lanes|=e,ja|=e,a)}function df(e,t,a,l){return ct(a,t)?a:yl.current!==null?(e=Lr(e,a,l),ct(e,t)||(qe=!0),e):(ha&42)===0?(qe=!0,e.memoizedState=a):(e=hd(),ae.lanes|=e,ja|=e,t)}function pf(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var c=R.T,f={};R.T=f,Vr(e,!1,t,a);try{var m=n(),N=R.S;if(N!==null&&N(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var A=G0(m,l);vn(e,t,A,pt(e))}else vn(e,t,l,pt(e))}catch(_){vn(e,t,{then:function(){},status:"rejected",reason:_},pt())}finally{H.p=i,R.T=c}}function $0(){}function Yr(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=hf(e).queue;pf(e,n,t,J,a===null?$0:function(){return mf(e),a(l)})}function hf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mf(e){var t=hf(e).next.queue;vn(e,t,{},pt())}function Gr(){return We(Bn)}function gf(){return _e().memoizedState}function xf(){return _e().memoizedState}function K0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=da(a);var l=pa(t,e,a);l!==null&&(ht(l,t,a),dn(l,t,a)),t={cache:vr()},e.payload=t;return}t=t.return}}function J0(e,t,a){var l=pt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Oi(e)?bf(t,a):(a=cr(e,t,a,l),a!==null&&(ht(a,e,l),yf(a,t,l)))}function vf(e,t,a){var l=pt();vn(e,t,a,l)}function vn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oi(e))bf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,a);if(n.hasEagerState=!0,n.eagerState=f,ct(f,c))return gi(e,t,n,0),ye===null&&mi(),!1}catch{}finally{}if(a=cr(e,t,n,l),a!==null)return ht(a,e,l),yf(a,t,l),!0}return!1}function Vr(e,t,a,l){if(l={lane:2,revertLane:jc(),action:l,hasEagerState:!1,eagerState:null,next:null},Oi(e)){if(t)throw Error(o(479))}else t=cr(e,a,l,2),t!==null&&ht(t,e,2)}function Oi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function bf(e,t){jl=Ti=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function yf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,To(e,a)}}var ki={readContext:We,use:Mi,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me},jf={readContext:We,use:Mi,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:lf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,_i(4194308,4,cf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){_i(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var l=e();if($a){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=tt();if(a!==void 0){var n=a(t);if($a){ra(!0);try{a(t)}finally{ra(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=J0.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ur(e);var t=e.queue,a=vf.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:qr,useDeferredValue:function(e,t){var a=tt();return Lr(a,e,t)},useTransition:function(){var e=Ur(!1);return e=pf.bind(null,ae,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=tt();if(fe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ye===null)throw Error(o(349));(re&124)!==0||Yu(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,lf(Vu.bind(null,l,i,e),[e]),l.flags|=2048,Nl(9,Di(),Gu.bind(null,l,i,a,t),null),a},useId:function(){var e=tt(),t=ye.identifierPrefix;if(fe){var a=Vt,l=Gt;a=(l&~(1<<32-rt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=Ai++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=V0++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Gr,useFormState:Pu,useActionState:Pu,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Vr.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:kr,useCacheRefresh:function(){return tt().memoizedState=K0.bind(null,ae)}},Sf={readContext:We,use:Mi,useCallback:uf,useContext:We,useEffect:nf,useImperativeHandle:of,useInsertionEffect:sf,useLayoutEffect:rf,useMemo:ff,useReducer:Ri,useRef:af,useState:function(){return Ri(Zt)},useDebugValue:qr,useDeferredValue:function(e,t){var a=_e();return df(a,me.memoizedState,e,t)},useTransition:function(){var e=Ri(Zt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:Lu,useId:gf,useHostTransitionStatus:Gr,useFormState:Iu,useActionState:Iu,useOptimistic:function(e,t){var a=_e();return Zu(a,me,e,t)},useMemoCache:kr,useCacheRefresh:xf},W0={readContext:We,use:Mi,useCallback:uf,useContext:We,useEffect:nf,useImperativeHandle:of,useInsertionEffect:sf,useLayoutEffect:rf,useMemo:ff,useReducer:Br,useRef:af,useState:function(){return Br(Zt)},useDebugValue:qr,useDeferredValue:function(e,t){var a=_e();return me===null?Lr(a,e,t):df(a,me.memoizedState,e,t)},useTransition:function(){var e=Br(Zt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:Lu,useId:gf,useHostTransitionStatus:Gr,useFormState:tf,useActionState:tf,useOptimistic:function(e,t){var a=_e();return me!==null?Zu(a,me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:kr,useCacheRefresh:xf},zl=null,bn=0;function Ci(e){var t=bn;return bn+=1,zl===null&&(zl=[]),_u(zl,e,t)}function yn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bi(e,t){throw t.$$typeof===k?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nf(e){var t=e._init;return t(e._payload)}function zf(e){function t(j,b){if(e){var S=j.deletions;S===null?(j.deletions=[b],j.flags|=16):S.push(b)}}function a(j,b){if(!e)return null;for(;b!==null;)t(j,b),b=b.sibling;return null}function l(j){for(var b=new Map;j!==null;)j.key!==null?b.set(j.key,j):b.set(j.index,j),j=j.sibling;return b}function n(j,b){return j=Yt(j,b),j.index=0,j.sibling=null,j}function i(j,b,S){return j.index=S,e?(S=j.alternate,S!==null?(S=S.index,S<b?(j.flags|=67108866,b):S):(j.flags|=67108866,b)):(j.flags|=1048576,b)}function c(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function f(j,b,S,D){return b===null||b.tag!==6?(b=ur(S,j.mode,D),b.return=j,b):(b=n(b,S),b.return=j,b)}function m(j,b,S,D){var L=S.type;return L===X?A(j,b,S.props.children,D,S.key):b!==null&&(b.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&Nf(L)===b.type)?(b=n(b,S.props),yn(b,S),b.return=j,b):(b=vi(S.type,S.key,S.props,null,j.mode,D),yn(b,S),b.return=j,b)}function N(j,b,S,D){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=fr(S,j.mode,D),b.return=j,b):(b=n(b,S.children||[]),b.return=j,b)}function A(j,b,S,D,L){return b===null||b.tag!==7?(b=qa(S,j.mode,D,L),b.return=j,b):(b=n(b,S),b.return=j,b)}function _(j,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=ur(""+b,j.mode,S),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case C:return S=vi(b.type,b.key,b.props,null,j.mode,S),yn(S,b),S.return=j,S;case Q:return b=fr(b,j.mode,S),b.return=j,b;case Ue:var D=b._init;return b=D(b._payload),_(j,b,S)}if(Ke(b)||$e(b))return b=qa(b,j.mode,S,null),b.return=j,b;if(typeof b.then=="function")return _(j,Ci(b),S);if(b.$$typeof===I)return _(j,Si(j,b),S);Bi(j,b)}return null}function z(j,b,S,D){var L=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return L!==null?null:f(j,b,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case C:return S.key===L?m(j,b,S,D):null;case Q:return S.key===L?N(j,b,S,D):null;case Ue:return L=S._init,S=L(S._payload),z(j,b,S,D)}if(Ke(S)||$e(S))return L!==null?null:A(j,b,S,D,null);if(typeof S.then=="function")return z(j,b,Ci(S),D);if(S.$$typeof===I)return z(j,b,Si(j,S),D);Bi(j,S)}return null}function w(j,b,S,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return j=j.get(S)||null,f(b,j,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case C:return j=j.get(D.key===null?S:D.key)||null,m(b,j,D,L);case Q:return j=j.get(D.key===null?S:D.key)||null,N(b,j,D,L);case Ue:var le=D._init;return D=le(D._payload),w(j,b,S,D,L)}if(Ke(D)||$e(D))return j=j.get(S)||null,A(b,j,D,L,null);if(typeof D.then=="function")return w(j,b,S,Ci(D),L);if(D.$$typeof===I)return w(j,b,S,Si(b,D),L);Bi(b,D)}return null}function W(j,b,S,D){for(var L=null,le=null,V=b,K=b=0,Ye=null;V!==null&&K<S.length;K++){V.index>K?(Ye=V,V=null):Ye=V.sibling;var ue=z(j,V,S[K],D);if(ue===null){V===null&&(V=Ye);break}e&&V&&ue.alternate===null&&t(j,V),b=i(ue,b,K),le===null?L=ue:le.sibling=ue,le=ue,V=Ye}if(K===S.length)return a(j,V),fe&&Ya(j,K),L;if(V===null){for(;K<S.length;K++)V=_(j,S[K],D),V!==null&&(b=i(V,b,K),le===null?L=V:le.sibling=V,le=V);return fe&&Ya(j,K),L}for(V=l(V);K<S.length;K++)Ye=w(V,j,K,S[K],D),Ye!==null&&(e&&Ye.alternate!==null&&V.delete(Ye.key===null?K:Ye.key),b=i(Ye,b,K),le===null?L=Ye:le.sibling=Ye,le=Ye);return e&&V.forEach(function(Ra){return t(j,Ra)}),fe&&Ya(j,K),L}function $(j,b,S,D){if(S==null)throw Error(o(151));for(var L=null,le=null,V=b,K=b=0,Ye=null,ue=S.next();V!==null&&!ue.done;K++,ue=S.next()){V.index>K?(Ye=V,V=null):Ye=V.sibling;var Ra=z(j,V,ue.value,D);if(Ra===null){V===null&&(V=Ye);break}e&&V&&Ra.alternate===null&&t(j,V),b=i(Ra,b,K),le===null?L=Ra:le.sibling=Ra,le=Ra,V=Ye}if(ue.done)return a(j,V),fe&&Ya(j,K),L;if(V===null){for(;!ue.done;K++,ue=S.next())ue=_(j,ue.value,D),ue!==null&&(b=i(ue,b,K),le===null?L=ue:le.sibling=ue,le=ue);return fe&&Ya(j,K),L}for(V=l(V);!ue.done;K++,ue=S.next())ue=w(V,j,K,ue.value,D),ue!==null&&(e&&ue.alternate!==null&&V.delete(ue.key===null?K:ue.key),b=i(ue,b,K),le===null?L=ue:le.sibling=ue,le=ue);return e&&V.forEach(function(Fh){return t(j,Fh)}),fe&&Ya(j,K),L}function xe(j,b,S,D){if(typeof S=="object"&&S!==null&&S.type===X&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case C:e:{for(var L=S.key;b!==null;){if(b.key===L){if(L=S.type,L===X){if(b.tag===7){a(j,b.sibling),D=n(b,S.props.children),D.return=j,j=D;break e}}else if(b.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&Nf(L)===b.type){a(j,b.sibling),D=n(b,S.props),yn(D,S),D.return=j,j=D;break e}a(j,b);break}else t(j,b);b=b.sibling}S.type===X?(D=qa(S.props.children,j.mode,D,S.key),D.return=j,j=D):(D=vi(S.type,S.key,S.props,null,j.mode,D),yn(D,S),D.return=j,j=D)}return c(j);case Q:e:{for(L=S.key;b!==null;){if(b.key===L)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){a(j,b.sibling),D=n(b,S.children||[]),D.return=j,j=D;break e}else{a(j,b);break}else t(j,b);b=b.sibling}D=fr(S,j.mode,D),D.return=j,j=D}return c(j);case Ue:return L=S._init,S=L(S._payload),xe(j,b,S,D)}if(Ke(S))return W(j,b,S,D);if($e(S)){if(L=$e(S),typeof L!="function")throw Error(o(150));return S=L.call(S),$(j,b,S,D)}if(typeof S.then=="function")return xe(j,b,Ci(S),D);if(S.$$typeof===I)return xe(j,b,Si(j,S),D);Bi(j,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,b!==null&&b.tag===6?(a(j,b.sibling),D=n(b,S),D.return=j,j=D):(a(j,b),D=ur(S,j.mode,D),D.return=j,j=D),c(j)):a(j,b)}return function(j,b,S,D){try{bn=0;var L=xe(j,b,S,D);return zl=null,L}catch(V){if(V===un||V===zi)throw V;var le=ot(29,V,null,j.mode);return le.lanes=D,le.return=j,le}finally{}}}var wl=zf(!0),wf=zf(!1),Nt=O(null),_t=null;function ma(e){var t=e.alternate;U(Ce,Ce.current&1),U(Nt,e),_t===null&&(t===null||yl.current!==null||t.memoizedState!==null)&&(_t=e)}function Ef(e){if(e.tag===22){if(U(Ce,Ce.current),U(Nt,e),_t===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(_t=e)}}else ga()}function ga(){U(Ce,Ce.current),U(Nt,Nt.current)}function $t(e){q(Nt),_t===e&&(_t=null),q(Ce)}var Ce=O(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Oc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Xr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:M({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),n=da(l);n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(ht(t,e,l),dn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),n=da(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(ht(t,e,l),dn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=da(a);l.tag=2,t!=null&&(l.callback=t),t=pa(e,l,a),t!==null&&(ht(t,e,a),dn(t,e,a))}};function Tf(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!tn(a,l)||!tn(n,i):!0}function Af(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Qr.enqueueReplaceState(t,t.state,null)}function Ka(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=M({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Hi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Mf(e){Hi(e)}function Rf(e){console.error(e)}function Df(e){Hi(e)}function qi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function _f(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Zr(e,t,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){qi(e,t)},a}function Of(e){return e=da(e),e.tag=3,e}function kf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){_f(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){_f(t,a,l),typeof n!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function F0(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&rn(t,a,n,!0),a=Nt.current,a!==null){switch(a.tag){case 13:return _t===null?gc():a.alternate===null&&Ae===0&&(Ae=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===jr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),vc(e,l,n)),!1;case 22:return a.flags|=65536,l===jr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),vc(e,l,n)),!1}throw Error(o(435,a.tag))}return vc(e,l,n),gc(),!1}if(fe)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==hr&&(e=Error(o(422),{cause:l}),sn(bt(e,a)))):(l!==hr&&(t=Error(o(423),{cause:l}),sn(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=Zr(e.stateNode,l,n),zr(e,n),Ae!==4&&(Ae=2)),!1;var i=Error(o(520),{cause:l});if(i=bt(i,a),Tn===null?Tn=[i]:Tn.push(i),Ae!==4&&(Ae=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Zr(a.stateNode,l,e),zr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Of(n),kf(n,e,a,l),zr(a,n),!1}a=a.return}while(a!==null);return!1}var Cf=Error(o(461)),qe=!1;function Ve(e,t,a,l){t.child=e===null?wf(t,null,a,l):wl(t,e.child,a,l)}function Bf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var f in l)f!=="ref"&&(c[f]=l[f])}else c=l;return Qa(t),l=Mr(e,t,a,c,i,n),f=Rr(),e!==null&&!qe?(Dr(e,t,n),Kt(e,t,n)):(fe&&f&&dr(t),t.flags|=1,Ve(e,t,l,n),t.child)}function Uf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!or(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Hf(e,t,i,l,n)):(e=vi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ec(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:tn,a(c,l)&&e.ref===t.ref)return Kt(e,t,n)}return t.flags|=1,e=Yt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Hf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(tn(i,l)&&e.ref===t.ref)if(qe=!1,t.pendingProps=l=i,ec(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Kt(e,t,n)}return $r(e,t,a,l,n)}function qf(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Lf(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ni(t,i!==null?i.cachePool:null),i!==null?Uu(t,i):Er(),Ef(t);else return t.lanes=t.childLanes=536870912,Lf(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(Ni(t,i.cachePool),Uu(t,i),ga(),t.memoizedState=null):(e!==null&&Ni(t,null),Er(),ga());return Ve(e,t,n,a),t.child}function Lf(e,t,a,l){var n=yr();return n=n===null?null:{parent:ke._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Ni(t,null),Er(),Ef(t),e!==null&&rn(e,t,l,!0),null}function Li(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function $r(e,t,a,l,n){return Qa(t),a=Mr(e,t,a,l,void 0,n),l=Rr(),e!==null&&!qe?(Dr(e,t,n),Kt(e,t,n)):(fe&&l&&dr(t),t.flags|=1,Ve(e,t,a,n),t.child)}function Yf(e,t,a,l,n,i){return Qa(t),t.updateQueue=null,a=qu(t,l,a,n),Hu(e),l=Rr(),e!==null&&!qe?(Dr(e,t,i),Kt(e,t,i)):(fe&&l&&dr(t),t.flags|=1,Ve(e,t,a,i),t.child)}function Gf(e,t,a,l,n){if(Qa(t),t.stateNode===null){var i=ml,c=a.contextType;typeof c=="object"&&c!==null&&(i=We(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Sr(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?We(c):ml,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Xr(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Qr.enqueueReplaceState(i,i.state,null),hn(t,l,i,n),pn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,m=Ka(a,f);i.props=m;var N=i.context,A=a.contextType;c=ml,typeof A=="object"&&A!==null&&(c=We(A));var _=a.getDerivedStateFromProps;A=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,A||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||N!==c)&&Af(t,i,l,c),fa=!1;var z=t.memoizedState;i.state=z,hn(t,l,i,n),pn(),N=t.memoizedState,f||z!==N||fa?(typeof _=="function"&&(Xr(t,a,_,l),N=t.memoizedState),(m=fa||Tf(t,a,m,l,z,N,c))?(A||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=c,l=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Nr(e,t),c=t.memoizedProps,A=Ka(a,c),i.props=A,_=t.pendingProps,z=i.context,N=a.contextType,m=ml,typeof N=="object"&&N!==null&&(m=We(N)),f=a.getDerivedStateFromProps,(N=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==_||z!==m)&&Af(t,i,l,m),fa=!1,z=t.memoizedState,i.state=z,hn(t,l,i,n),pn();var w=t.memoizedState;c!==_||z!==w||fa||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof f=="function"&&(Xr(t,a,f,l),w=t.memoizedState),(A=fa||Tf(t,a,A,l,z,w,m)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,w,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,w,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=m,l=A):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Li(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=wl(t,e.child,null,n),t.child=wl(t,null,a,n)):Ve(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Kt(e,t,n),e}function Vf(e,t,a,l){return nn(),t.flags|=256,Ve(e,t,a,l),t.child}var Kr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jr(e){return{baseLanes:e,cachePool:Mu()}}function Wr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=zt),e}function Xf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?ma(t):ga(),fe){var f=Te,m;if(m=f){e:{for(m=f,f=Dt;m.nodeType!==8;){if(!f){f=null;break e}if(m=Mt(m.nextSibling),m===null){f=null;break e}}f=m}f!==null?(t.memoizedState={dehydrated:f,treeContext:La!==null?{id:Gt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},m=ot(18,null,null,0),m.stateNode=f,m.return=t,t.child=m,Pe=t,Te=null,m=!0):m=!1}m||Va(t)}if(f=t.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Oc(f)?t.lanes=32:t.lanes=536870912,null;$t(t)}return f=l.children,l=l.fallback,n?(ga(),n=t.mode,f=Yi({mode:"hidden",children:f},n),l=qa(l,n,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,n=t.child,n.memoizedState=Jr(a),n.childLanes=Wr(e,c,a),t.memoizedState=Kr,l):(ma(t),Fr(t,f))}if(m=e.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(i)t.flags&256?(ma(t),t.flags&=-257,t=Pr(e,t,a)):t.memoizedState!==null?(ga(),t.child=e.child,t.flags|=128,t=null):(ga(),n=l.fallback,f=t.mode,l=Yi({mode:"visible",children:l.children},f),n=qa(n,f,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,wl(t,e.child,null,a),l=t.child,l.memoizedState=Jr(a),l.childLanes=Wr(e,c,a),t.memoizedState=Kr,t=n);else if(ma(t),Oc(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;c=N,l=Error(o(419)),l.stack="",l.digest=c,sn({value:l,source:null,stack:null}),t=Pr(e,t,a)}else if(qe||rn(e,t,a,!1),c=(a&e.childLanes)!==0,qe||c){if(c=ye,c!==null&&(l=a&-a,l=(l&42)!==0?1:ks(l),l=(l&(c.suspendedLanes|a))!==0?0:l,l!==0&&l!==m.retryLane))throw m.retryLane=l,hl(e,l),ht(c,e,l),Cf;f.data==="$?"||gc(),t=Pr(e,t,a)}else f.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Te=Mt(f.nextSibling),Pe=t,fe=!0,Ga=null,Dt=!1,e!==null&&(jt[St++]=Gt,jt[St++]=Vt,jt[St++]=La,Gt=e.id,Vt=e.overflow,La=t),t=Fr(t,l.children),t.flags|=4096);return t}return n?(ga(),n=l.fallback,f=t.mode,m=e.child,N=m.sibling,l=Yt(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,N!==null?n=Yt(N,n):(n=qa(n,f,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,f=e.child.memoizedState,f===null?f=Jr(a):(m=f.cachePool,m!==null?(N=ke._currentValue,m=m.parent!==N?{parent:N,pool:N}:m):m=Mu(),f={baseLanes:f.baseLanes|a,cachePool:m}),n.memoizedState=f,n.childLanes=Wr(e,c,a),t.memoizedState=Kr,l):(ma(t),a=e.child,e=a.sibling,a=Yt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Fr(e,t){return t=Yi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yi(e,t){return e=ot(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Pr(e,t,a){return wl(t,e.child,null,a),e=Fr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),gr(e.return,t,a)}function Ir(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function Zf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Ve(e,t,l.children,a),l=Ce.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qf(e,a,t);else if(e.tag===19)Qf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(U(Ce,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ui(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ir(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ui(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ir(t,!0,a,null,i);break;case"together":Ir(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(rn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Yt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Yt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function P0(e,t,a){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),ua(t,ke,e.memoizedState.cache),nn();break;case 27:case 5:Ms(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Xf(e,t,a):(ma(t),e=Kt(e,t,a),e!==null?e.sibling:null);ma(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(rn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Zf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Ce,Ce.current),l)break;return null;case 22:case 23:return t.lanes=0,qf(e,t,a);case 24:ua(t,ke,e.memoizedState.cache)}return Kt(e,t,a)}function $f(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!ec(e,a)&&(t.flags&128)===0)return qe=!1,P0(e,t,a);qe=(e.flags&131072)!==0}else qe=!1,fe&&(t.flags&1048576)!==0&&Su(t,yi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")or(l)?(e=Ka(l,e),t.tag=1,t=Gf(null,t,l,e,a)):(t.tag=0,t=$r(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===Ne){t.tag=11,t=Bf(null,t,l,e,a);break e}else if(n===Oe){t.tag=14,t=Uf(null,t,l,e,a);break e}}throw t=Oa(l)||l,Error(o(306,t,""))}}return t;case 0:return $r(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ka(l,t.pendingProps),Gf(e,t,l,n,a);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Nr(e,t),hn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ua(t,ke,l),l!==i.cache&&xr(t,[ke],a,!0),pn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Vf(e,t,l,a);break e}else if(l!==n){n=bt(Error(o(424)),t),sn(n),t=Vf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=Mt(e.firstChild),Pe=t,fe=!0,Ga=null,Dt=!0,a=wf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(nn(),l===n){t=Kt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return Li(e,t),e===null?(a=Fd(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,l=ts(P.current).createElement(a),l[Je]=t,l[Ie]=e,Qe(l,a,e),He(l),t.stateNode=l):t.memoizedState=Fd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ms(t),e===null&&fe&&(l=t.stateNode=Kd(t.type,t.pendingProps,P.current),Pe=t,Dt=!0,n=Te,wa(t.type)?(kc=n,Te=Mt(l.firstChild)):Te=n),Ve(e,t,t.pendingProps.children,a),Li(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=l=Te)&&(l=Eh(l,t.type,t.pendingProps,Dt),l!==null?(t.stateNode=l,Pe=t,Te=Mt(l.firstChild),Dt=!1,n=!0):n=!1),n||Va(t)),Ms(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Rc(n,i)?l=null:c!==null&&Rc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Mr(e,t,X0,null,null,a),Bn._currentValue=n),Li(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&fe&&((e=a=Te)&&(a=Th(a,t.pendingProps,Dt),a!==null?(t.stateNode=a,Pe=t,Te=null,e=!0):e=!1),e||Va(t)),null;case 13:return Xf(e,t,a);case 4:return je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=wl(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return Bf(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ua(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Qa(t),n=We(n),l=l(n),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return Uf(e,t,t.type,t.pendingProps,a);case 15:return Hf(e,t,t.type,t.pendingProps,a);case 19:return Zf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Yi(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Yt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return qf(e,t,a);case 24:return Qa(t),l=We(ke),e===null?(n=yr(),n===null&&(n=ye,i=vr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Sr(t),ua(t,ke,n)):((e.lanes&a)!==0&&(Nr(e,t),hn(t,null,null,a),pn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ua(t,ke,l)):(l=i.cache,ua(t,ke,l),l!==n.cache&&xr(t,[ke],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Jt(e){e.flags|=4}function Kf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ap(t)){if(t=Nt.current,t!==null&&((re&4194048)===re?_t!==null:(re&62914560)!==re&&(re&536870912)===0||t!==_t))throw fn=jr,Ru;e.flags|=8192}}function Gi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?wo():536870912,e.lanes|=t,Ml|=t)}function jn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function I0(e,t,a){var l=t.pendingProps;switch(pr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(ke),sa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ln(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wu())),ze(t),null;case 26:return a=t.memoizedState,e===null?(Jt(t),a!==null?(ze(t),Kf(t,a)):(ze(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Jt(t),ze(t),Kf(t,a)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==l&&Jt(t),ze(t),t.flags&=-16777217),null;case 27:In(t),a=P.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return ze(t),null}e=Z.current,ln(t)?Nu(t):(e=Kd(n,l,a),t.stateNode=e,Jt(t))}return ze(t),null;case 5:if(In(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return ze(t),null}if(e=Z.current,ln(t))Nu(t);else{switch(n=ts(P.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Je]=t,e[Ie]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Jt(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=P.current,ln(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Pe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Je]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Yd(e.nodeValue,a)),e||Va(t)}else e=ts(e).createTextNode(l),e[Je]=t,t.stateNode=e}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ln(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Je]=t}else nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?($t(t),t):($t(t),null)}if($t(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Gi(t,t.updateQueue),ze(t),null;case 4:return sa(),e===null&&wc(t.stateNode.containerInfo),ze(t),null;case 10:return Qt(t.type),ze(t),null;case 19:if(q(Ce),n=t.memoizedState,n===null)return ze(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)jn(n,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ui(e),i!==null){for(t.flags|=128,jn(n,!1),e=i.updateQueue,t.updateQueue=e,Gi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ju(a,e),a=a.sibling;return U(Ce,Ce.current&1|2),t.child}e=e.sibling}n.tail!==null&&Rt()>Qi&&(t.flags|=128,l=!0,jn(n,!1),t.lanes=4194304)}else{if(!l)if(e=Ui(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Gi(t,e),jn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!fe)return ze(t),null}else 2*Rt()-n.renderingStartTime>Qi&&a!==536870912&&(t.flags|=128,l=!0,jn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Rt(),t.sibling=null,e=Ce.current,U(Ce,l?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return $t(t),Tr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Gi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&q(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(ke),ze(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function eh(e,t){switch(pr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(ke),sa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return In(t),null;case 13:if($t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Ce),null;case 4:return sa(),null;case 10:return Qt(t.type),null;case 22:case 23:return $t(t),Tr(),e!==null&&q(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(ke),null;case 25:return null;default:return null}}function Jf(e,t){switch(pr(t),t.tag){case 3:Qt(ke),sa();break;case 26:case 27:case 5:In(t);break;case 4:sa();break;case 13:$t(t);break;case 19:q(Ce);break;case 10:Qt(t.type);break;case 22:case 23:$t(t),Tr(),e!==null&&q(Za);break;case 24:Qt(ke)}}function Sn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(f){be(t,t.return,f)}}function xa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var m=a,N=f;try{N()}catch(A){be(n,m,A)}}}l=l.next}while(l!==i)}}catch(A){be(t,t.return,A)}}function Wf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Bu(t,a)}catch(l){be(e,e.return,l)}}}function Ff(e,t,a){a.props=Ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){be(e,t,l)}}function Nn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){be(e,t,n)}}function Ot(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){be(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){be(e,t,n)}else a.current=null}function Pf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){be(e,e.return,n)}}function tc(e,t,a){try{var l=e.stateNode;jh(l,e.type,a,t),l[Ie]=t}catch(n){be(e,e.return,n)}}function If(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||If(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=es));else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(lc(e,t,a),e=e.sibling;e!==null;)lc(e,t,a),e=e.sibling}function Vi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vi(e,t,a),e=e.sibling;e!==null;)Vi(e,t,a),e=e.sibling}function ed(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qe(t,l,a),t[Je]=e,t[Ie]=a}catch(i){be(e,e.return,i)}}var Wt=!1,Re=!1,nc=!1,td=typeof WeakSet=="function"?WeakSet:Set,Le=null;function th(e,t){if(e=e.containerInfo,Ac=rs,e=fu(e),ar(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,f=-1,m=-1,N=0,A=0,_=e,z=null;t:for(;;){for(var w;_!==a||n!==0&&_.nodeType!==3||(f=c+n),_!==i||l!==0&&_.nodeType!==3||(m=c+l),_.nodeType===3&&(c+=_.nodeValue.length),(w=_.firstChild)!==null;)z=_,_=w;for(;;){if(_===e)break t;if(z===a&&++N===n&&(f=c),z===i&&++A===l&&(m=c),(w=_.nextSibling)!==null)break;_=z,z=_.parentNode}_=w}a=f===-1||m===-1?null:{start:f,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:e,selectionRange:a},rs=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){switch(t=Le,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var W=Ka(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(W,i),l.__reactInternalSnapshotBeforeUpdate=e}catch($){be(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)_c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}}function ad(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),l&4&&Sn(5,a);break;case 1:if(va(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){be(a,a.return,c)}else{var n=Ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){be(a,a.return,c)}}l&64&&Wf(a),l&512&&Nn(a,a.return);break;case 3:if(va(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Bu(e,t)}catch(c){be(a,a.return,c)}}break;case 27:t===null&&l&4&&ed(a);case 26:case 5:va(e,a),t===null&&l&4&&Pf(a),l&512&&Nn(a,a.return);break;case 12:va(e,a);break;case 13:va(e,a),l&4&&id(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=uh.bind(null,a),Ah(e,a))));break;case 22:if(l=a.memoizedState!==null||Wt,!l){t=t!==null&&t.memoizedState!==null||Re,n=Wt;var i=Re;Wt=l,(Re=t)&&!i?ba(e,a,(a.subtreeFlags&8772)!==0):va(e,a),Wt=n,Re=i}break;case 30:break;default:va(e,a)}}function ld(e){var t=e.alternate;t!==null&&(e.alternate=null,ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Us(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,at=!1;function Ft(e,t,a){for(a=a.child;a!==null;)nd(e,t,a),a=a.sibling}function nd(e,t,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Vl,a)}catch{}switch(a.tag){case 26:Re||Ot(a,t),Ft(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Ot(a,t);var l=Se,n=at;wa(a.type)&&(Se=a.stateNode,at=!1),Ft(e,t,a),_n(a.stateNode),Se=l,at=n;break;case 5:Re||Ot(a,t);case 6:if(l=Se,n=at,Se=null,Ft(e,t,a),Se=l,at=n,Se!==null)if(at)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(i){be(a,t,i)}else try{Se.removeChild(a.stateNode)}catch(i){be(a,t,i)}break;case 18:Se!==null&&(at?(e=Se,Zd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ln(e)):Zd(Se,a.stateNode));break;case 4:l=Se,n=at,Se=a.stateNode.containerInfo,at=!0,Ft(e,t,a),Se=l,at=n;break;case 0:case 11:case 14:case 15:Re||xa(2,a,t),Re||xa(4,a,t),Ft(e,t,a);break;case 1:Re||(Ot(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ff(a,t,l)),Ft(e,t,a);break;case 21:Ft(e,t,a);break;case 22:Re=(l=Re)||a.memoizedState!==null,Ft(e,t,a),Re=l;break;default:Ft(e,t,a)}}function id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ln(e)}catch(a){be(t,t.return,a)}}function ah(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new td),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new td),t;default:throw Error(o(435,e.tag))}}function ic(e,t){var a=ah(e);t.forEach(function(l){var n=fh.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function ut(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(wa(f.type)){Se=f.stateNode,at=!1;break e}break;case 5:Se=f.stateNode,at=!1;break e;case 3:case 4:Se=f.stateNode.containerInfo,at=!0;break e}f=f.return}if(Se===null)throw Error(o(160));nd(i,c,n),Se=null,at=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)sd(t,e),t=t.sibling}var At=null;function sd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),ft(e),l&4&&(xa(3,e,e.return),Sn(3,e),xa(5,e,e.return));break;case 1:ut(t,e),ft(e),l&512&&(Re||a===null||Ot(a,a.return)),l&64&&Wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=At;if(ut(t,e),ft(e),l&512&&(Re||a===null||Ot(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Zl]||i[Je]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Qe(i,l,a),i[Je]=e,He(i),l=i;break e;case"link":var c=ep("link","href",n).get(l+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}i=n.createElement(l),Qe(i,l,a),n.head.appendChild(i);break;case"meta":if(c=ep("meta","content",n).get(l+(a.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}i=n.createElement(l),Qe(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Je]=e,He(i),l=i}e.stateNode=l}else tp(n,e.type,e.stateNode);else e.stateNode=Id(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?tp(n,e.type,e.stateNode):Id(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&tc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),ft(e),l&512&&(Re||a===null||Ot(a,a.return)),a!==null&&l&4&&tc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),ft(e),l&512&&(Re||a===null||Ot(a,a.return)),e.flags&32){n=e.stateNode;try{rl(n,"")}catch(w){be(e,e.return,w)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,tc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(nc=!0);break;case 6:if(ut(t,e),ft(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(w){be(e,e.return,w)}}break;case 3:if(ns=null,n=At,At=as(t.containerInfo),ut(t,e),At=n,ft(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(t.containerInfo)}catch(w){be(e,e.return,w)}nc&&(nc=!1,rd(e));break;case 4:l=At,At=as(e.stateNode.containerInfo),ut(t,e),ft(e),At=l;break;case 12:ut(t,e),ft(e);break;case 13:ut(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fc=Rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ic(e,l)));break;case 22:n=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,N=Wt,A=Re;if(Wt=N||n,Re=A||m,ut(t,e),Re=A,Wt=N,ft(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||m||Wt||Re||Ja(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(i=m.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=m.stateNode;var _=m.memoizedProps.style,z=_!=null&&_.hasOwnProperty("display")?_.display:null;f.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(w){be(m,m.return,w)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(w){be(m,m.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ic(e,a))));break;case 19:ut(t,e),ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ic(e,l)));break;case 30:break;case 21:break;default:ut(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(If(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=ac(e);Vi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(rl(c,""),a.flags&=-33);var f=ac(e);Vi(e,f,c);break;case 3:case 4:var m=a.stateNode.containerInfo,N=ac(e);lc(e,N,m);break;default:throw Error(o(161))}}catch(A){be(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ad(e,t.alternate,t),t=t.sibling}function Ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Ja(t);break;case 1:Ot(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ff(t,t.return,a),Ja(t);break;case 27:_n(t.stateNode);case 26:case 5:Ot(t,t.return),Ja(t);break;case 22:t.memoizedState===null&&Ja(t);break;case 30:Ja(t);break;default:Ja(t)}e=e.sibling}}function ba(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ba(n,i,a),Sn(4,i);break;case 1:if(ba(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){be(l,l.return,N)}if(l=i,n=l.updateQueue,n!==null){var f=l.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)Cu(m[n],f)}catch(N){be(l,l.return,N)}}a&&c&64&&Wf(i),Nn(i,i.return);break;case 27:ed(i);case 26:case 5:ba(n,i,a),a&&l===null&&c&4&&Pf(i),Nn(i,i.return);break;case 12:ba(n,i,a);break;case 13:ba(n,i,a),a&&c&4&&id(n,i);break;case 22:i.memoizedState===null&&ba(n,i,a),Nn(i,i.return);break;case 30:break;default:ba(n,i,a)}t=t.sibling}}function sc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&cn(a))}function rc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e))}function kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cd(e,t,a,l),t=t.sibling}function cd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,l),n&2048&&Sn(9,t);break;case 1:kt(e,t,a,l);break;case 3:kt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e)));break;case 12:if(n&2048){kt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){be(t,t.return,m)}}else kt(e,t,a,l);break;case 13:kt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?kt(e,t,a,l):zn(e,t):i._visibility&2?kt(e,t,a,l):(i._visibility|=2,El(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&sc(c,t);break;case 24:kt(e,t,a,l),n&2048&&rc(t.alternate,t);break;default:kt(e,t,a,l)}}function El(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,c=t,f=a,m=l,N=c.flags;switch(c.tag){case 0:case 11:case 15:El(i,c,f,m,n),Sn(8,c);break;case 23:break;case 22:var A=c.stateNode;c.memoizedState!==null?A._visibility&2?El(i,c,f,m,n):zn(i,c):(A._visibility|=2,El(i,c,f,m,n)),n&&N&2048&&sc(c.alternate,c);break;case 24:El(i,c,f,m,n),n&&N&2048&&rc(c.alternate,c);break;default:El(i,c,f,m,n)}t=t.sibling}}function zn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:zn(a,l),n&2048&&sc(l.alternate,l);break;case 24:zn(a,l),n&2048&&rc(l.alternate,l);break;default:zn(a,l)}t=t.sibling}}var wn=8192;function Tl(e){if(e.subtreeFlags&wn)for(e=e.child;e!==null;)od(e),e=e.sibling}function od(e){switch(e.tag){case 26:Tl(e),e.flags&wn&&e.memoizedState!==null&&Yh(At,e.memoizedState,e.memoizedProps);break;case 5:Tl(e);break;case 3:case 4:var t=At;At=as(e.stateNode.containerInfo),Tl(e),At=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=wn,wn=16777216,Tl(e),wn=t):Tl(e));break;default:Tl(e)}}function ud(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function En(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Le=l,dd(l,e)}ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fd(e),e=e.sibling}function fd(e){switch(e.tag){case 0:case 11:case 15:En(e),e.flags&2048&&xa(9,e,e.return);break;case 3:En(e);break;case 12:En(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xi(e)):En(e);break;default:En(e)}}function Xi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Le=l,dd(l,e)}ud(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Xi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Xi(t));break;default:Xi(t)}e=e.sibling}}function dd(e,t){for(;Le!==null;){var a=Le;switch(a.tag){case 0:case 11:case 15:xa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:cn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Le=l;else e:for(a=e;Le!==null;){l=Le;var n=l.sibling,i=l.return;if(ld(l),l===a){Le=null;break e}if(n!==null){n.return=i,Le=n;break e}Le=i}}}var lh={getCacheForType:function(e){var t=We(ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},nh=typeof WeakMap=="function"?WeakMap:Map,pe=0,ye=null,ne=null,re=0,he=0,dt=null,ya=!1,Al=!1,cc=!1,Pt=0,Ae=0,ja=0,Wa=0,oc=0,zt=0,Ml=0,Tn=null,lt=null,uc=!1,fc=0,Qi=1/0,Zi=null,Sa=null,Xe=0,Na=null,Rl=null,Dl=0,dc=0,pc=null,pd=null,An=0,hc=null;function pt(){if((pe&2)!==0&&re!==0)return re&-re;if(R.T!==null){var e=vl;return e!==0?e:jc()}return Ao()}function hd(){zt===0&&(zt=(re&536870912)===0||fe?zo():536870912);var e=Nt.current;return e!==null&&(e.flags|=32),zt}function ht(e,t,a){(e===ye&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(_l(e,0),za(e,re,zt,!1)),Ql(e,a),((pe&2)===0||e!==ye)&&(e===ye&&((pe&2)===0&&(Wa|=a),Ae===4&&za(e,re,zt,!1)),Ct(e))}function md(e,t,a){if((pe&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Xl(e,t),n=l?rh(e,t):xc(e,t,!0),i=l;do{if(n===0){Al&&!l&&za(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!ih(a)){n=xc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=Tn;var m=f.current.memoizedState.isDehydrated;if(m&&(_l(f,c).flags|=256),c=xc(f,c,!1),c!==2){if(cc&&!m){f.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){_l(e,0),za(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:za(l,t,zt,!ya);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=fc+300-Rt(),10<n)){if(za(l,t,zt,!ya),li(l,0,!0)!==0)break e;l.timeoutHandle=Xd(gd.bind(null,l,a,lt,Zi,uc,t,zt,Wa,Ml,ya,i,2,-0,0),n);break e}gd(l,a,lt,Zi,uc,t,zt,Wa,Ml,ya,i,0,-0,0)}}break}while(!0);Ct(e)}function gd(e,t,a,l,n,i,c,f,m,N,A,_,z,w){if(e.timeoutHandle=-1,_=t.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Cn={stylesheets:null,count:0,unsuspend:Lh},od(t),_=Gh(),_!==null)){e.cancelPendingCommit=_(Nd.bind(null,e,t,i,a,l,n,c,f,m,A,1,z,w)),za(e,i,c,!N);return}Nd(e,t,i,a,l,n,c,f,m)}function ih(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ct(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function za(e,t,a,l){t&=~oc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-rt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Eo(e,a,t)}function $i(){return(pe&6)===0?(Mn(0),!1):!0}function mc(){if(ne!==null){if(he===0)var e=ne.return;else e=ne,Xt=Xa=null,_r(e),zl=null,bn=0,e=ne;for(;e!==null;)Jf(e.alternate,e),e=e.return;ne=null}}function _l(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Nh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),mc(),ye=e,ne=a=Yt(e.current,null),re=t,he=0,dt=null,ya=!1,Al=Xl(e,t),cc=!1,Ml=zt=oc=Wa=ja=Ae=0,lt=Tn=null,uc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-rt(l),i=1<<n;t|=e[n],l&=~i}return Pt=t,mi(),a}function xd(e,t){ae=null,R.H=ki,t===un||t===zi?(t=Ou(),he=3):t===Ru?(t=Ou(),he=4):he=t===Cf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,ne===null&&(Ae=1,qi(e,bt(t,e.current)))}function vd(){var e=R.H;return R.H=ki,e===null?ki:e}function bd(){var e=R.A;return R.A=lh,e}function gc(){Ae=4,ya||(re&4194048)!==re&&Nt.current!==null||(Al=!0),(ja&134217727)===0&&(Wa&134217727)===0||ye===null||za(ye,re,zt,!1)}function xc(e,t,a){var l=pe;pe|=2;var n=vd(),i=bd();(ye!==e||re!==t)&&(Zi=null,_l(e,t)),t=!1;var c=Ae;e:do try{if(he!==0&&ne!==null){var f=ne,m=dt;switch(he){case 8:mc(),c=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var N=he;if(he=0,dt=null,Ol(e,f,m,N),a&&Al){c=0;break e}break;default:N=he,he=0,dt=null,Ol(e,f,m,N)}}sh(),c=Ae;break}catch(A){xd(e,A)}while(!0);return t&&e.shellSuspendCounter++,Xt=Xa=null,pe=l,R.H=n,R.A=i,ne===null&&(ye=null,re=0,mi()),c}function sh(){for(;ne!==null;)yd(ne)}function rh(e,t){var a=pe;pe|=2;var l=vd(),n=bd();ye!==e||re!==t?(Zi=null,Qi=Rt()+500,_l(e,t)):Al=Xl(e,t);e:do try{if(he!==0&&ne!==null){t=ne;var i=dt;t:switch(he){case 1:he=0,dt=null,Ol(e,t,i,1);break;case 2:case 9:if(Du(i)){he=0,dt=null,jd(t);break}t=function(){he!==2&&he!==9||ye!==e||(he=7),Ct(e)},i.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:Du(i)?(he=0,dt=null,jd(t)):(he=0,dt=null,Ol(e,t,i,7));break;case 5:var c=null;switch(ne.tag){case 26:c=ne.memoizedState;case 5:case 27:var f=ne;if(!c||ap(c)){he=0,dt=null;var m=f.sibling;if(m!==null)ne=m;else{var N=f.return;N!==null?(ne=N,Ki(N)):ne=null}break t}}he=0,dt=null,Ol(e,t,i,5);break;case 6:he=0,dt=null,Ol(e,t,i,6);break;case 8:mc(),Ae=6;break e;default:throw Error(o(462))}}ch();break}catch(A){xd(e,A)}while(!0);return Xt=Xa=null,R.H=l,R.A=n,pe=a,ne!==null?0:(ye=null,re=0,mi(),Ae)}function ch(){for(;ne!==null&&!R1();)yd(ne)}function yd(e){var t=$f(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Ki(e):ne=t}function jd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Yf(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=Yf(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:_r(t);default:Jf(a,t),t=ne=ju(t,Pt),t=$f(a,t,Pt)}e.memoizedProps=e.pendingProps,t===null?Ki(e):ne=t}function Ol(e,t,a,l){Xt=Xa=null,_r(t),zl=null,bn=0;var n=t.return;try{if(F0(e,n,t,a,re)){Ae=1,qi(e,bt(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Ae=1,qi(e,bt(a,e.current)),ne=null;return}t.flags&32768?(fe||l===1?e=!0:Al||(re&536870912)!==0?e=!1:(ya=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Sd(t,e)):Ki(t)}function Ki(e){var t=e;do{if((t.flags&32768)!==0){Sd(t,ya);return}e=t.return;var a=I0(t.alternate,t,Pt);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ae===0&&(Ae=5)}function Sd(e,t){do{var a=eh(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Ae=6,ne=null}function Nd(e,t,a,l,n,i,c,f,m){e.cancelPendingCommit=null;do Ji();while(Xe!==0);if((pe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=rr,L1(e,a,i,c,f,m),e===ye&&(ne=ye=null,re=0),Rl=t,Na=e,Dl=a,dc=i,pc=n,pd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dh(ei,function(){return Ad(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=H.p,H.p=2,c=pe,pe|=4;try{th(e,t,a)}finally{pe=c,H.p=n,R.T=l}}Xe=1,zd(),wd(),Ed()}}function zd(){if(Xe===1){Xe=0;var e=Na,t=Rl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=pe;pe|=4;try{sd(t,e);var i=Mc,c=fu(e.containerInfo),f=i.focusedElem,m=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&uu(f.ownerDocument.documentElement,f)){if(m!==null&&ar(f)){var N=m.start,A=m.end;if(A===void 0&&(A=N),"selectionStart"in f)f.selectionStart=N,f.selectionEnd=Math.min(A,f.value.length);else{var _=f.ownerDocument||document,z=_&&_.defaultView||window;if(z.getSelection){var w=z.getSelection(),W=f.textContent.length,$=Math.min(m.start,W),xe=m.end===void 0?$:Math.min(m.end,W);!w.extend&&$>xe&&(c=xe,xe=$,$=c);var j=ou(f,$),b=ou(f,xe);if(j&&b&&(w.rangeCount!==1||w.anchorNode!==j.node||w.anchorOffset!==j.offset||w.focusNode!==b.node||w.focusOffset!==b.offset)){var S=_.createRange();S.setStart(j.node,j.offset),w.removeAllRanges(),$>xe?(w.addRange(S),w.extend(b.node,b.offset)):(S.setEnd(b.node,b.offset),w.addRange(S))}}}}for(_=[],w=f;w=w.parentNode;)w.nodeType===1&&_.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<_.length;f++){var D=_[f];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}rs=!!Ac,Mc=Ac=null}finally{pe=n,H.p=l,R.T=a}}e.current=t,Xe=2}}function wd(){if(Xe===2){Xe=0;var e=Na,t=Rl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=pe;pe|=4;try{ad(e,t.alternate,t)}finally{pe=n,H.p=l,R.T=a}}Xe=3}}function Ed(){if(Xe===4||Xe===3){Xe=0,D1();var e=Na,t=Rl,a=Dl,l=pd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Rl=Na=null,Td(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sa=null),Cs(a),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=H.p,H.p=2,R.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];i(f.value,{componentStack:f.stack})}}finally{R.T=t,H.p=n}}(Dl&3)!==0&&Ji(),Ct(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===hc?An++:(An=0,hc=e):An=0,Mn(0)}}function Td(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cn(t)))}function Ji(e){return zd(),wd(),Ed(),Ad()}function Ad(){if(Xe!==5)return!1;var e=Na,t=dc;dc=0;var a=Cs(Dl),l=R.T,n=H.p;try{H.p=32>a?32:a,R.T=null,a=pc,pc=null;var i=Na,c=Dl;if(Xe=0,Rl=Na=null,Dl=0,(pe&6)!==0)throw Error(o(331));var f=pe;if(pe|=4,fd(i.current),cd(i,i.current,c,a),pe=f,Mn(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Vl,i)}catch{}return!0}finally{H.p=n,R.T=l,Td(e,t)}}function Md(e,t,a){t=bt(a,t),t=Zr(e.stateNode,t,2),e=pa(e,t,2),e!==null&&(Ql(e,2),Ct(e))}function be(e,t,a){if(e.tag===3)Md(e,e,a);else for(;t!==null;){if(t.tag===3){Md(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=bt(a,e),a=Of(2),l=pa(t,a,2),l!==null&&(kf(a,l,t,e),Ql(l,2),Ct(l));break}}t=t.return}}function vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new nh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(cc=!0,n.add(a),e=oh.bind(null,e,t,a),t.then(e,e))}function oh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(re&a)===a&&(Ae===4||Ae===3&&(re&62914560)===re&&300>Rt()-fc?(pe&2)===0&&_l(e,0):oc|=a,Ml===re&&(Ml=0)),Ct(e)}function Rd(e,t){t===0&&(t=wo()),e=hl(e,t),e!==null&&(Ql(e,t),Ct(e))}function uh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Rd(e,a)}function fh(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Rd(e,a)}function dh(e,t){return Ds(e,t)}var Wi=null,kl=null,bc=!1,Fi=!1,yc=!1,Fa=0;function Ct(e){e!==kl&&e.next===null&&(kl===null?Wi=kl=e:kl=kl.next=e),Fi=!0,bc||(bc=!0,hh())}function Mn(e,t){if(!yc&&Fi){yc=!0;do for(var a=!1,l=Wi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,f=l.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=n&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,kd(l,i))}else i=re,i=li(l,l===ye?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xl(l,i)||(a=!0,kd(l,i));l=l.next}while(a);yc=!1}}function ph(){Dd()}function Dd(){Fi=bc=!1;var e=0;Fa!==0&&(Sh()&&(e=Fa),Fa=0);for(var t=Rt(),a=null,l=Wi;l!==null;){var n=l.next,i=_d(l,t);i===0?(l.next=null,a===null?Wi=n:a.next=n,n===null&&(kl=a)):(a=l,(e!==0||(i&3)!==0)&&(Fi=!0)),l=n}Mn(e)}function _d(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-rt(i),f=1<<c,m=n[c];m===-1?((f&a)===0||(f&l)!==0)&&(n[c]=q1(f,t)):m<=t&&(e.expiredLanes|=f),i&=~f}if(t=ye,a=re,a=li(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_s(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&_s(l),Cs(a)){case 2:case 8:a=So;break;case 32:a=ei;break;case 268435456:a=No;break;default:a=ei}return l=Od.bind(null,e),a=Ds(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&_s(l),e.callbackPriority=2,e.callbackNode=null,2}function Od(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ji()&&e.callbackNode!==a)return null;var l=re;return l=li(e,e===ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(md(e,l,t),_d(e,Rt()),e.callbackNode!=null&&e.callbackNode===a?Od.bind(null,e):null)}function kd(e,t){if(Ji())return null;md(e,t,!0)}function hh(){zh(function(){(pe&6)!==0?Ds(jo,ph):Dd()})}function jc(){return Fa===0&&(Fa=zo()),Fa}function Cd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ci(""+e)}function Bd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function mh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Cd((n[Ie]||null).action),c=l.submitter;c&&(t=(t=c[Ie]||null)?Cd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new di("action","action",null,l,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var m=c?Bd(n,c):new FormData(n);Yr(a,{pending:!0,data:m,method:n.method,action:i},null,m)}}else typeof i=="function"&&(f.preventDefault(),m=c?Bd(n,c):new FormData(n),Yr(a,{pending:!0,data:m,method:n.method,action:i},i,m))},currentTarget:n}]})}}for(var Sc=0;Sc<sr.length;Sc++){var Nc=sr[Sc],gh=Nc.toLowerCase(),xh=Nc[0].toUpperCase()+Nc.slice(1);Tt(gh,"on"+xh)}Tt(hu,"onAnimationEnd"),Tt(mu,"onAnimationIteration"),Tt(gu,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(k0,"onTransitionRun"),Tt(C0,"onTransitionStart"),Tt(B0,"onTransitionCancel"),Tt(xu,"onTransitionEnd"),nl("onMouseEnter",["mouseout","mouseover"]),nl("onMouseLeave",["mouseout","mouseover"]),nl("onPointerEnter",["pointerout","pointerover"]),nl("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rn));function Ud(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var f=l[c],m=f.instance,N=f.currentTarget;if(f=f.listener,m!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=N;try{i(n)}catch(A){Hi(A)}n.currentTarget=null,i=m}else for(c=0;c<l.length;c++){if(f=l[c],m=f.instance,N=f.currentTarget,f=f.listener,m!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=N;try{i(n)}catch(A){Hi(A)}n.currentTarget=null,i=m}}}}function ie(e,t){var a=t[Bs];a===void 0&&(a=t[Bs]=new Set);var l=e+"__bubble";a.has(l)||(Hd(t,e,2,!1),a.add(l))}function zc(e,t,a){var l=0;t&&(l|=4),Hd(a,e,l,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Pi]){e[Pi]=!0,Ro.forEach(function(a){a!=="selectionchange"&&(vh.has(a)||zc(a,!1,e),zc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,zc("selectionchange",!1,t))}}function Hd(e,t,a,l){switch(cp(t)){case 2:var n=Qh;break;case 8:n=Zh;break;default:n=qc}a=n.bind(null,t,a,e),n=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ec(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var f=l.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=l.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=tl(f),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){l=i=c;continue e}f=f.parentNode}}l=l.return}Xo(function(){var N=i,A=Qs(a),_=[];e:{var z=vu.get(e);if(z!==void 0){var w=di,W=e;switch(e){case"keypress":if(ui(a)===0)break e;case"keydown":case"keyup":w=d0;break;case"focusin":W="focus",w=Fs;break;case"focusout":W="blur",w=Fs;break;case"beforeblur":case"afterblur":w=Fs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=$o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=e0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=m0;break;case hu:case mu:case gu:w=l0;break;case xu:w=x0;break;case"scroll":case"scrollend":w=P1;break;case"wheel":w=b0;break;case"copy":case"cut":case"paste":w=i0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Jo;break;case"toggle":case"beforetoggle":w=j0}var $=(t&4)!==0,xe=!$&&(e==="scroll"||e==="scrollend"),j=$?z!==null?z+"Capture":null:z;$=[];for(var b=N,S;b!==null;){var D=b;if(S=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||S===null||j===null||(D=Kl(b,j),D!=null&&$.push(Dn(b,D,S))),xe)break;b=b.return}0<$.length&&(z=new w(z,W,null,a,A),_.push({event:z,listeners:$}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",z&&a!==Xs&&(W=a.relatedTarget||a.fromElement)&&(tl(W)||W[el]))break e;if((w||z)&&(z=A.window===A?A:(z=A.ownerDocument)?z.defaultView||z.parentWindow:window,w?(W=a.relatedTarget||a.toElement,w=N,W=W?tl(W):null,W!==null&&(xe=p(W),$=W.tag,W!==xe||$!==5&&$!==27&&$!==6)&&(W=null)):(w=null,W=N),w!==W)){if($=$o,D="onMouseLeave",j="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&($=Jo,D="onPointerLeave",j="onPointerEnter",b="pointer"),xe=w==null?z:$l(w),S=W==null?z:$l(W),z=new $(D,b+"leave",w,a,A),z.target=xe,z.relatedTarget=S,D=null,tl(A)===N&&($=new $(j,b+"enter",W,a,A),$.target=S,$.relatedTarget=xe,D=$),xe=D,w&&W)t:{for($=w,j=W,b=0,S=$;S;S=Cl(S))b++;for(S=0,D=j;D;D=Cl(D))S++;for(;0<b-S;)$=Cl($),b--;for(;0<S-b;)j=Cl(j),S--;for(;b--;){if($===j||j!==null&&$===j.alternate)break t;$=Cl($),j=Cl(j)}$=null}else $=null;w!==null&&qd(_,z,w,$,!1),W!==null&&xe!==null&&qd(_,xe,W,$,!0)}}e:{if(z=N?$l(N):window,w=z.nodeName&&z.nodeName.toLowerCase(),w==="select"||w==="input"&&z.type==="file")var L=lu;else if(tu(z))if(nu)L=D0;else{L=M0;var le=A0}else w=z.nodeName,!w||w.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?N&&Vs(N.elementType)&&(L=lu):L=R0;if(L&&(L=L(e,N))){au(_,L,a,A);break e}le&&le(e,z,N),e==="focusout"&&N&&z.type==="number"&&N.memoizedProps.value!=null&&Gs(z,"number",z.value)}switch(le=N?$l(N):window,e){case"focusin":(tu(le)||le.contentEditable==="true")&&(fl=le,lr=N,an=null);break;case"focusout":an=lr=fl=null;break;case"mousedown":nr=!0;break;case"contextmenu":case"mouseup":case"dragend":nr=!1,du(_,a,A);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":du(_,a,A)}var V;if(Is)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else ul?Io(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(Wo&&a.locale!=="ko"&&(ul||K!=="onCompositionStart"?K==="onCompositionEnd"&&ul&&(V=Qo()):(oa=A,Ks="value"in oa?oa.value:oa.textContent,ul=!0)),le=Ii(N,K),0<le.length&&(K=new Ko(K,e,null,a,A),_.push({event:K,listeners:le}),V?K.data=V:(V=eu(a),V!==null&&(K.data=V)))),(V=N0?z0(e,a):w0(e,a))&&(K=Ii(N,"onBeforeInput"),0<K.length&&(le=new Ko("onBeforeInput","beforeinput",null,a,A),_.push({event:le,listeners:K}),le.data=V)),mh(_,e,N,a,A)}Ud(_,t)})}function Dn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ii(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Kl(e,a),n!=null&&l.unshift(Dn(e,n,i)),n=Kl(e,t),n!=null&&l.push(Dn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Cl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qd(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var f=a,m=f.alternate,N=f.stateNode;if(f=f.tag,m!==null&&m===l)break;f!==5&&f!==26&&f!==27||N===null||(m=N,n?(N=Kl(a,i),N!=null&&c.unshift(Dn(a,N,m))):n||(N=Kl(a,i),N!=null&&c.push(Dn(a,N,m)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var bh=/\r\n?/g,yh=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(bh,`
`).replace(yh,"")}function Yd(e,t){return t=Ld(t),Ld(e)===t}function es(){}function ge(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||rl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&rl(e,""+l);break;case"className":ii(e,"class",l);break;case"tabIndex":ii(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,a,l);break;case"style":Go(e,l,i);break;case"data":if(t!=="object"){ii(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ci(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ge(e,t,"name",n.name,n,null),ge(e,t,"formEncType",n.formEncType,n,null),ge(e,t,"formMethod",n.formMethod,n,null),ge(e,t,"formTarget",n.formTarget,n,null)):(ge(e,t,"encType",n.encType,n,null),ge(e,t,"method",n.method,n,null),ge(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ci(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=es);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ci(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),ni(e,"popover",l);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ni(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=W1.get(a)||a,ni(e,a,l))}}function Tc(e,t,a,l,n,i){switch(a){case"style":Go(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?rl(e,l):(typeof l=="number"||typeof l=="bigint")&&rl(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=es);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Do.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ie]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ni(e,a,l)}}}function Qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ge(e,t,i,c,a,null)}}n&&ge(e,t,"srcSet",a.srcSet,a,null),l&&ge(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var f=i=c=n=null,m=null,N=null;for(l in a)if(a.hasOwnProperty(l)){var A=a[l];if(A!=null)switch(l){case"name":n=A;break;case"type":c=A;break;case"checked":m=A;break;case"defaultChecked":N=A;break;case"value":i=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:ge(e,t,l,A,a,null)}}Ho(e,i,f,m,N,c,n,!1),si(e);return;case"select":ie("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(f=a[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":l=f;default:ge(e,t,n,f,a,null)}t=i,a=c,e.multiple=!!l,t!=null?sl(e,!!l,t,!1):a!=null&&sl(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":l=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:ge(e,t,c,f,a,null)}Lo(e,l,n,i),si(e);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ge(e,t,m,l,a,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<Rn.length;l++)ie(Rn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ge(e,t,N,l,a,null)}return;default:if(Vs(t)){for(A in a)a.hasOwnProperty(A)&&(l=a[A],l!==void 0&&Tc(e,t,A,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&ge(e,t,f,l,a,null))}function jh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,f=null,m=null,N=null,A=null;for(w in a){var _=a[w];if(a.hasOwnProperty(w)&&_!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":m=_;default:l.hasOwnProperty(w)||ge(e,t,w,null,l,_)}}for(var z in l){var w=l[z];if(_=a[z],l.hasOwnProperty(z)&&(w!=null||_!=null))switch(z){case"type":i=w;break;case"name":n=w;break;case"checked":N=w;break;case"defaultChecked":A=w;break;case"value":c=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(137,t));break;default:w!==_&&ge(e,t,z,w,l,_)}}Ys(e,c,f,m,N,A,i,n);return;case"select":w=c=f=z=null;for(i in a)if(m=a[i],a.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":w=m;default:l.hasOwnProperty(i)||ge(e,t,i,null,l,m)}for(n in l)if(i=l[n],m=a[n],l.hasOwnProperty(n)&&(i!=null||m!=null))switch(n){case"value":z=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==m&&ge(e,t,n,i,l,m)}t=f,a=c,l=w,z!=null?sl(e,!!a,z,!1):!!l!=!!a&&(t!=null?sl(e,!!a,t,!0):sl(e,!!a,a?[]:"",!1));return;case"textarea":w=z=null;for(f in a)if(n=a[f],a.hasOwnProperty(f)&&n!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ge(e,t,f,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":z=n;break;case"defaultValue":w=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&ge(e,t,c,n,l,i)}qo(e,z,w);return;case"option":for(var W in a)if(z=a[W],a.hasOwnProperty(W)&&z!=null&&!l.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:ge(e,t,W,null,l,z)}for(m in l)if(z=l[m],w=a[m],l.hasOwnProperty(m)&&z!==w&&(z!=null||w!=null))switch(m){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:ge(e,t,m,z,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)z=a[$],a.hasOwnProperty($)&&z!=null&&!l.hasOwnProperty($)&&ge(e,t,$,null,l,z);for(N in l)if(z=l[N],w=a[N],l.hasOwnProperty(N)&&z!==w&&(z!=null||w!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:ge(e,t,N,z,l,w)}return;default:if(Vs(t)){for(var xe in a)z=a[xe],a.hasOwnProperty(xe)&&z!==void 0&&!l.hasOwnProperty(xe)&&Tc(e,t,xe,void 0,l,z);for(A in l)z=l[A],w=a[A],!l.hasOwnProperty(A)||z===w||z===void 0&&w===void 0||Tc(e,t,A,z,l,w);return}}for(var j in a)z=a[j],a.hasOwnProperty(j)&&z!=null&&!l.hasOwnProperty(j)&&ge(e,t,j,null,l,z);for(_ in l)z=l[_],w=a[_],!l.hasOwnProperty(_)||z===w||z==null&&w==null||ge(e,t,_,z,l,w)}var Ac=null,Mc=null;function ts(e){return e.nodeType===9?e:e.ownerDocument}function Gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=null;function Sh(){var e=window.event;return e&&e.type==="popstate"?e===Dc?!1:(Dc=e,!0):(Dc=null,!1)}var Xd=typeof setTimeout=="function"?setTimeout:void 0,Nh=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,zh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(wh)}:Xd;function wh(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Zd(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var c=e.ownerDocument;if(a&1&&_n(c.documentElement),a&2&&_n(c.body),a&4)for(a=c.head,_n(a),c=a.firstChild;c;){var f=c.nextSibling,m=c.nodeName;c[Zl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=f}}if(n===0){e.removeChild(i),Ln(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Ln(t)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_c(a),Us(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Eh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function Th(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function Oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ah(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var kc=null;function $d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Kd(e,t,a){switch(t=ts(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function _n(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Us(e)}var wt=new Map,Jd=new Set;function as(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=H.d;H.d={f:Mh,r:Rh,D:Dh,C:_h,L:Oh,m:kh,X:Bh,S:Ch,M:Uh};function Mh(){var e=It.f(),t=$i();return e||t}function Rh(e){var t=al(e);t!==null&&t.tag===5&&t.type==="form"?mf(t):It.r(e)}var Bl=typeof document>"u"?null:document;function Wd(e,t,a){var l=Bl;if(l&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Jd.has(n)||(Jd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Qe(t,"link",e),He(t),l.head.appendChild(t)))}}function Dh(e){It.D(e),Wd("dns-prefetch",e,null)}function _h(e,t){It.C(e,t),Wd("preconnect",e,t)}function Oh(e,t,a){It.L(e,t,a);var l=Bl;if(l&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+vt(a.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var i=n;switch(t){case"style":i=Ul(e);break;case"script":i=Hl(e)}wt.has(i)||(e=M({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),wt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(On(i))||t==="script"&&l.querySelector(kn(i))||(t=l.createElement("link"),Qe(t,"link",e),He(t),l.head.appendChild(t)))}}function kh(e,t){It.m(e,t);var a=Bl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Hl(e)}if(!wt.has(i)&&(e=M({rel:"modulepreload",href:e},t),wt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kn(i)))return}l=a.createElement("link"),Qe(l,"link",e),He(l),a.head.appendChild(l)}}}function Ch(e,t,a){It.S(e,t,a);var l=Bl;if(l&&e){var n=ll(l).hoistableStyles,i=Ul(e);t=t||"default";var c=n.get(i);if(!c){var f={loading:0,preload:null};if(c=l.querySelector(On(i)))f.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},a),(a=wt.get(i))&&Cc(e,a);var m=c=l.createElement("link");He(m),Qe(m,"link",e),m._p=new Promise(function(N,A){m.onload=N,m.onerror=A}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,ls(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(i,c)}}}function Bh(e,t){It.X(e,t);var a=Bl;if(a&&e){var l=ll(a).hoistableScripts,n=Hl(e),i=l.get(n);i||(i=a.querySelector(kn(n)),i||(e=M({src:e,async:!0},t),(t=wt.get(n))&&Bc(e,t),i=a.createElement("script"),He(i),Qe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Uh(e,t){It.M(e,t);var a=Bl;if(a&&e){var l=ll(a).hoistableScripts,n=Hl(e),i=l.get(n);i||(i=a.querySelector(kn(n)),i||(e=M({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&Bc(e,t),i=a.createElement("script"),He(i),Qe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Fd(e,t,a,l){var n=(n=P.current)?as(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ul(a.href),a=ll(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ul(a.href);var i=ll(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(On(e)))&&!i._p&&(c.instance=i,c.state.loading=5),wt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wt.set(e,a),i||Hh(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hl(a),a=ll(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ul(e){return'href="'+vt(e)+'"'}function On(e){return'link[rel="stylesheet"]['+e+"]"}function Pd(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function Hh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Qe(t,"link",a),He(t),e.head.appendChild(t))}function Hl(e){return'[src="'+vt(e)+'"]'}function kn(e){return"script[async]"+e}function Id(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,He(l),l;var n=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),He(l),Qe(l,"style",n),ls(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ul(a.href);var i=e.querySelector(On(n));if(i)return t.state.loading|=4,t.instance=i,He(i),i;l=Pd(a),(n=wt.get(n))&&Cc(l,n),i=(e.ownerDocument||e).createElement("link"),He(i);var c=i;return c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),Qe(i,"link",l),t.state.loading|=4,ls(i,a.precedence,e),t.instance=i;case"script":return i=Hl(a.src),(n=e.querySelector(kn(i)))?(t.instance=n,He(n),n):(l=a,(n=wt.get(i))&&(l=M({},a),Bc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),He(n),Qe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ls(l,a.precedence,e));return t.instance}function ls(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var f=l[c];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Cc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ns=null;function ep(e,t,a){if(ns===null){var l=new Map,n=ns=new Map;n.set(a,l)}else n=ns,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Zl]||i[Je]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=l.get(c);f?f.push(i):l.set(c,[i])}}return l}function tp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function qh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ap(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Cn=null;function Lh(){}function Yh(e,t,a){if(Cn===null)throw Error(o(475));var l=Cn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Ul(a.href),i=e.querySelector(On(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=is.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,He(i);return}i=e.ownerDocument||e,a=Pd(a),(n=wt.get(n))&&Cc(a,n),i=i.createElement("link"),He(i);var c=i;c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),Qe(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=is.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Gh(){if(Cn===null)throw Error(o(475));var e=Cn;return e.stylesheets&&e.count===0&&Uc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Uc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function is(){if(this.count--,this.count===0){if(this.stylesheets)Uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ss=null;function Uc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ss=new Map,t.forEach(Vh,e),ss=null,is.call(e))}function Vh(e,t){if(!(t.state.loading&4)){var a=ss.get(e);if(a)var l=a.get(null);else{a=new Map,ss.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=is.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Bn={$$typeof:I,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Xh(e,t,a,l,n,i,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Os(0),this.hiddenUpdates=Os(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function lp(e,t,a,l,n,i,c,f,m,N,A,_){return e=new Xh(e,t,a,c,f,m,N,_),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),e.current=i,i.stateNode=e,t=vr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Sr(i),e}function np(e){return e?(e=ml,e):ml}function ip(e,t,a,l,n,i){n=np(n),l.context===null?l.context=n:l.pendingContext=n,l=da(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=pa(e,l,t),a!==null&&(ht(a,e,t),dn(a,e,t))}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Hc(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function rp(e){if(e.tag===13){var t=hl(e,67108864);t!==null&&ht(t,e,67108864),Hc(e,67108864)}}var rs=!0;function Qh(e,t,a,l){var n=R.T;R.T=null;var i=H.p;try{H.p=2,qc(e,t,a,l)}finally{H.p=i,R.T=n}}function Zh(e,t,a,l){var n=R.T;R.T=null;var i=H.p;try{H.p=8,qc(e,t,a,l)}finally{H.p=i,R.T=n}}function qc(e,t,a,l){if(rs){var n=Lc(l);if(n===null)Ec(e,t,l,cs,a),op(e,l);else if(Kh(n,e,t,a,l))l.stopPropagation();else if(op(e,l),t&4&&-1<$h.indexOf(e)){for(;n!==null;){var i=al(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=ka(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var m=1<<31-rt(c);f.entanglements[1]|=m,c&=~m}Ct(i),(pe&6)===0&&(Qi=Rt()+500,Mn(0))}}break;case 13:f=hl(i,2),f!==null&&ht(f,i,2),$i(),Hc(i,2)}if(i=Lc(l),i===null&&Ec(e,t,l,cs,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Ec(e,t,l,null,a)}}function Lc(e){return e=Qs(e),Yc(e)}var cs=null;function Yc(e){if(cs=null,e=tl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cs=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_1()){case jo:return 2;case So:return 8;case ei:case O1:return 32;case No:return 268435456;default:return 32}default:return 32}}var Gc=!1,Ea=null,Ta=null,Aa=null,Un=new Map,Hn=new Map,Ma=[],$h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function op(e,t){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function qn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=al(t),t!==null&&rp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Kh(e,t,a,l,n){switch(t){case"focusin":return Ea=qn(Ea,e,t,a,l,n),!0;case"dragenter":return Ta=qn(Ta,e,t,a,l,n),!0;case"mouseover":return Aa=qn(Aa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Un.set(i,qn(Un.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Hn.set(i,qn(Hn.get(i)||null,e,t,a,l,n)),!0}return!1}function up(e){var t=tl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,Y1(e.priority,function(){if(a.tag===13){var l=pt();l=ks(l);var n=hl(a,l);n!==null&&ht(n,a,l),Hc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Lc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Xs=l,a.target.dispatchEvent(l),Xs=null}else return t=al(a),t!==null&&rp(t),e.blockedOn=a,!1;t.shift()}return!0}function fp(e,t,a){os(e)&&a.delete(t)}function Jh(){Gc=!1,Ea!==null&&os(Ea)&&(Ea=null),Ta!==null&&os(Ta)&&(Ta=null),Aa!==null&&os(Aa)&&(Aa=null),Un.forEach(fp),Hn.forEach(fp)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Jh)))}var fs=null;function dp(e){fs!==e&&(fs=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fs===e&&(fs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Yc(l||a)===null)continue;break}var i=al(a);i!==null&&(e.splice(t,3),t-=3,Yr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ln(e){function t(m){return us(m,e)}Ea!==null&&us(Ea,e),Ta!==null&&us(Ta,e),Aa!==null&&us(Aa,e),Un.forEach(t),Hn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)up(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Ie]||null;if(typeof i=="function")c||dp(a);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Ie]||null)f=c.formAction;else if(Yc(n)!==null)continue}else f=c.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),dp(a)}}}function Vc(e){this._internalRoot=e}ds.prototype.render=Vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=pt();ip(a,l,e,t,null,null)},ds.prototype.unmount=Vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),$i(),t[el]=null}};function ds(e){this._internalRoot=e}ds.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ao();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&up(e)}};var pp=u.version;if(pp!=="19.1.1")throw Error(o(527,pp,"19.1.1"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Wh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{Vl=ps.inject(Wh),st=ps}catch{}}return Gn.createRoot=function(e,t){if(!h(e))throw Error(o(299));var a=!1,l="",n=Mf,i=Rf,c=Df,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks)),t=lp(e,1,!1,null,null,a,l,n,i,c,f,null),e[el]=t.current,wc(e),new Vc(t)},Gn.hydrateRoot=function(e,t,a){if(!h(e))throw Error(o(299));var l=!1,n="",i=Mf,c=Rf,f=Df,m=null,N=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(m=a.unstable_transitionCallbacks),a.formState!==void 0&&(N=a.formState)),t=lp(e,1,!0,t,a??null,l,n,i,c,f,m,N),t.context=np(null),a=t.current,l=pt(),l=ks(l),n=da(l),n.callback=null,pa(a,n,l),a=l,t.current.lanes=a,Ql(t,a),Ct(t),e[el]=t.current,wc(e),new ds(t)},Gn.version="19.1.1",Gn}var Np;function s2(){if(Np)return Zc.exports;Np=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Zc.exports=i2(),Zc.exports}var r2=s2();const c2=Pp(r2);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zp="popstate";function o2(r={}){function u(o,h){let{pathname:p,search:y,hash:E}=o.location;return ro("",{pathname:p,search:y,hash:E},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(o,h){return typeof h=="string"?h:Kn(h)}return f2(u,d,null,r)}function we(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function Bt(r,u){if(!r){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function u2(){return Math.random().toString(36).substring(2,10)}function wp(r,u){return{usr:r.state,key:r.key,idx:u}}function ro(r,u,d=null,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof u=="string"?Yl(u):u,state:d,key:u&&u.key||o||u2()}}function Kn({pathname:r="/",search:u="",hash:d=""}){return u&&u!=="?"&&(r+=u.charAt(0)==="?"?u:"?"+u),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Yl(r){let u={};if(r){let d=r.indexOf("#");d>=0&&(u.hash=r.substring(d),r=r.substring(0,d));let o=r.indexOf("?");o>=0&&(u.search=r.substring(o),r=r.substring(0,o)),r&&(u.pathname=r)}return u}function f2(r,u,d,o={}){let{window:h=document.defaultView,v5Compat:p=!1}=o,y=h.history,E="POP",x=null,g=M();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function M(){return(y.state||{idx:null}).idx}function k(){E="POP";let G=M(),B=G==null?null:G-g;g=G,x&&x({action:E,location:Y.location,delta:B})}function C(G,B){E="PUSH";let ce=ro(Y.location,G,B);g=M()+1;let I=wp(ce,g),Ne=Y.createHref(ce);try{y.pushState(I,"",Ne)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;h.location.assign(Ne)}p&&x&&x({action:E,location:Y.location,delta:1})}function Q(G,B){E="REPLACE";let ce=ro(Y.location,G,B);g=M();let I=wp(ce,g),Ne=Y.createHref(ce);y.replaceState(I,"",Ne),p&&x&&x({action:E,location:Y.location,delta:0})}function X(G){return d2(G)}let Y={get action(){return E},get location(){return r(h,y)},listen(G){if(x)throw new Error("A history only accepts one active listener");return h.addEventListener(zp,k),x=G,()=>{h.removeEventListener(zp,k),x=null}},createHref(G){return u(h,G)},createURL:X,encodeLocation(G){let B=X(G);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:C,replace:Q,go(G){return y.go(G)}};return Y}function d2(r,u=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),we(d,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:Kn(r);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Ip(r,u,d="/"){return p2(r,u,d,!1)}function p2(r,u,d,o){let h=typeof u=="string"?Yl(u):u,p=ia(h.pathname||"/",d);if(p==null)return null;let y=e1(r);h2(y);let E=null;for(let x=0;E==null&&x<y.length;++x){let g=w2(p);E=N2(y[x],g,o)}return E}function e1(r,u=[],d=[],o=""){let h=(p,y,E)=>{let x={relativePath:E===void 0?p.path||"":E,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};x.relativePath.startsWith("/")&&(we(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length));let g=na([o,x.relativePath]),M=d.concat(x);p.children&&p.children.length>0&&(we(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),e1(p.children,u,M,g)),!(p.path==null&&!p.index)&&u.push({path:g,score:j2(g,p.index),routesMeta:M})};return r.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))h(p,y);else for(let E of t1(p.path))h(p,y,E)}),u}function t1(r){let u=r.split("/");if(u.length===0)return[];let[d,...o]=u,h=d.endsWith("?"),p=d.replace(/\?$/,"");if(o.length===0)return h?[p,""]:[p];let y=t1(o.join("/")),E=[];return E.push(...y.map(x=>x===""?p:[p,x].join("/"))),h&&E.push(...y),E.map(x=>r.startsWith("/")&&x===""?"/":x)}function h2(r){r.sort((u,d)=>u.score!==d.score?d.score-u.score:S2(u.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var m2=/^:[\w-]+$/,g2=3,x2=2,v2=1,b2=10,y2=-2,Ep=r=>r==="*";function j2(r,u){let d=r.split("/"),o=d.length;return d.some(Ep)&&(o+=y2),u&&(o+=x2),d.filter(h=>!Ep(h)).reduce((h,p)=>h+(m2.test(p)?g2:p===""?v2:b2),o)}function S2(r,u){return r.length===u.length&&r.slice(0,-1).every((o,h)=>o===u[h])?r[r.length-1]-u[u.length-1]:0}function N2(r,u,d=!1){let{routesMeta:o}=r,h={},p="/",y=[];for(let E=0;E<o.length;++E){let x=o[E],g=E===o.length-1,M=p==="/"?u:u.slice(p.length)||"/",k=js({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},M),C=x.route;if(!k&&g&&d&&!o[o.length-1].route.index&&(k=js({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},M)),!k)return null;Object.assign(h,k.params),y.push({params:h,pathname:na([p,k.pathname]),pathnameBase:M2(na([p,k.pathnameBase])),route:C}),k.pathnameBase!=="/"&&(p=na([p,k.pathnameBase]))}return y}function js(r,u){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,o]=z2(r.path,r.caseSensitive,r.end),h=u.match(d);if(!h)return null;let p=h[0],y=p.replace(/(.)\/+$/,"$1"),E=h.slice(1);return{params:o.reduce((g,{paramName:M,isOptional:k},C)=>{if(M==="*"){let X=E[C]||"";y=p.slice(0,p.length-X.length).replace(/(.)\/+$/,"$1")}const Q=E[C];return k&&!Q?g[M]=void 0:g[M]=(Q||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:y,pattern:r}}function z2(r,u=!1,d=!0){Bt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,x)=>(o.push({paramName:E,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(o.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,u?void 0:"i"),o]}function w2(r){try{return r.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Bt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),r}}function ia(r,u){if(u==="/")return r;if(!r.toLowerCase().startsWith(u.toLowerCase()))return null;let d=u.endsWith("/")?u.length-1:u.length,o=r.charAt(d);return o&&o!=="/"?null:r.slice(d)||"/"}function E2(r,u="/"){let{pathname:d,search:o="",hash:h=""}=typeof r=="string"?Yl(r):r;return{pathname:d?d.startsWith("/")?d:T2(d,u):u,search:R2(o),hash:D2(h)}}function T2(r,u){let d=u.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Wc(r,u,d,o){return`Cannot include a '${r}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A2(r){return r.filter((u,d)=>d===0||u.route.path&&u.route.path.length>0)}function a1(r){let u=A2(r);return u.map((d,o)=>o===u.length-1?d.pathname:d.pathnameBase)}function l1(r,u,d,o=!1){let h;typeof r=="string"?h=Yl(r):(h={...r},we(!h.pathname||!h.pathname.includes("?"),Wc("?","pathname","search",h)),we(!h.pathname||!h.pathname.includes("#"),Wc("#","pathname","hash",h)),we(!h.search||!h.search.includes("#"),Wc("#","search","hash",h)));let p=r===""||h.pathname==="",y=p?"/":h.pathname,E;if(y==null)E=d;else{let k=u.length-1;if(!o&&y.startsWith("..")){let C=y.split("/");for(;C[0]==="..";)C.shift(),k-=1;h.pathname=C.join("/")}E=k>=0?u[k]:"/"}let x=E2(h,E),g=y&&y!=="/"&&y.endsWith("/"),M=(p||y===".")&&d.endsWith("/");return!x.pathname.endsWith("/")&&(g||M)&&(x.pathname+="/"),x}var na=r=>r.join("/").replace(/\/\/+/g,"/"),M2=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),R2=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,D2=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function _2(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var n1=["POST","PUT","PATCH","DELETE"];new Set(n1);var O2=["GET",...n1];new Set(O2);var Gl=T.createContext(null);Gl.displayName="DataRouter";var Es=T.createContext(null);Es.displayName="DataRouterState";T.createContext(!1);var i1=T.createContext({isTransitioning:!1});i1.displayName="ViewTransition";var k2=T.createContext(new Map);k2.displayName="Fetchers";var C2=T.createContext(null);C2.displayName="Await";var Ut=T.createContext(null);Ut.displayName="Navigation";var Jn=T.createContext(null);Jn.displayName="Location";var Ht=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var mo=T.createContext(null);mo.displayName="RouteError";function B2(r,{relative:u}={}){we(Wn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=T.useContext(Ut),{hash:h,pathname:p,search:y}=Fn(r,{relative:u}),E=p;return d!=="/"&&(E=p==="/"?d:na([d,p])),o.createHref({pathname:E,search:y,hash:h})}function Wn(){return T.useContext(Jn)!=null}function Ia(){return we(Wn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Jn).location}var s1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function r1(r){T.useContext(Ut).static||T.useLayoutEffect(r)}function U2(){let{isDataRoute:r}=T.useContext(Ht);return r?F2():H2()}function H2(){we(Wn(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(Gl),{basename:u,navigator:d}=T.useContext(Ut),{matches:o}=T.useContext(Ht),{pathname:h}=Ia(),p=JSON.stringify(a1(o)),y=T.useRef(!1);return r1(()=>{y.current=!0}),T.useCallback((x,g={})=>{if(Bt(y.current,s1),!y.current)return;if(typeof x=="number"){d.go(x);return}let M=l1(x,JSON.parse(p),h,g.relative==="path");r==null&&u!=="/"&&(M.pathname=M.pathname==="/"?u:na([u,M.pathname])),(g.replace?d.replace:d.push)(M,g.state,g)},[u,d,p,h,r])}T.createContext(null);function q2(){let{matches:r}=T.useContext(Ht),u=r[r.length-1];return u?u.params:{}}function Fn(r,{relative:u}={}){let{matches:d}=T.useContext(Ht),{pathname:o}=Ia(),h=JSON.stringify(a1(d));return T.useMemo(()=>l1(r,JSON.parse(h),o,u==="path"),[r,h,o,u])}function L2(r,u){return c1(r,u)}function c1(r,u,d,o){we(Wn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=T.useContext(Ut),{matches:p}=T.useContext(Ht),y=p[p.length-1],E=y?y.params:{},x=y?y.pathname:"/",g=y?y.pathnameBase:"/",M=y&&y.route;{let B=M&&M.path||"";o1(x,!M||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let k=Ia(),C;if(u){let B=typeof u=="string"?Yl(u):u;we(g==="/"||B.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${B.pathname}" was given in the \`location\` prop.`),C=B}else C=k;let Q=C.pathname||"/",X=Q;if(g!=="/"){let B=g.replace(/^\//,"").split("/");X="/"+Q.replace(/^\//,"").split("/").slice(B.length).join("/")}let Y=Ip(r,{pathname:X});Bt(M||Y!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Bt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Q2(Y&&Y.map(B=>Object.assign({},B,{params:Object.assign({},E,B.params),pathname:na([g,h.encodeLocation?h.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?g:na([g,h.encodeLocation?h.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),p,d,o);return u&&G?T.createElement(Jn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},G):G}function Y2(){let r=W2(),u=_2(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:o},p={padding:"2px 4px",backgroundColor:o},y=null;return console.error("Error handled by React Router default ErrorBoundary:",r),y=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:p},"ErrorBoundary")," or"," ",T.createElement("code",{style:p},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},u),d?T.createElement("pre",{style:h},d):null,y)}var G2=T.createElement(Y2,null),V2=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){console.error("React Router caught the following error during render",r,u)}render(){return this.state.error!==void 0?T.createElement(Ht.Provider,{value:this.props.routeContext},T.createElement(mo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function X2({routeContext:r,match:u,children:d}){let o=T.useContext(Gl);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),T.createElement(Ht.Provider,{value:r},d)}function Q2(r,u=[],d=null,o=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(u.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let h=r,p=d?.errors;if(p!=null){let x=h.findIndex(g=>g.route.id&&p?.[g.route.id]!==void 0);we(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,x+1))}let y=!1,E=-1;if(d)for(let x=0;x<h.length;x++){let g=h[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(E=x),g.route.id){let{loaderData:M,errors:k}=d,C=g.route.loader&&!M.hasOwnProperty(g.route.id)&&(!k||k[g.route.id]===void 0);if(g.route.lazy||C){y=!0,E>=0?h=h.slice(0,E+1):h=[h[0]];break}}}return h.reduceRight((x,g,M)=>{let k,C=!1,Q=null,X=null;d&&(k=p&&g.route.id?p[g.route.id]:void 0,Q=g.route.errorElement||G2,y&&(E<0&&M===0?(o1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,X=null):E===M&&(C=!0,X=g.route.hydrateFallbackElement||null)));let Y=u.concat(h.slice(0,M+1)),G=()=>{let B;return k?B=Q:C?B=X:g.route.Component?B=T.createElement(g.route.Component,null):g.route.element?B=g.route.element:B=x,T.createElement(X2,{match:g,routeContext:{outlet:x,matches:Y,isDataRoute:d!=null},children:B})};return d&&(g.route.ErrorBoundary||g.route.errorElement||M===0)?T.createElement(V2,{location:d.location,revalidation:d.revalidation,component:Q,error:k,children:G(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):G()},null)}function go(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Z2(r){let u=T.useContext(Gl);return we(u,go(r)),u}function $2(r){let u=T.useContext(Es);return we(u,go(r)),u}function K2(r){let u=T.useContext(Ht);return we(u,go(r)),u}function xo(r){let u=K2(r),d=u.matches[u.matches.length-1];return we(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function J2(){return xo("useRouteId")}function W2(){let r=T.useContext(mo),u=$2("useRouteError"),d=xo("useRouteError");return r!==void 0?r:u.errors?.[d]}function F2(){let{router:r}=Z2("useNavigate"),u=xo("useNavigate"),d=T.useRef(!1);return r1(()=>{d.current=!0}),T.useCallback(async(h,p={})=>{Bt(d.current,s1),d.current&&(typeof h=="number"?r.navigate(h):await r.navigate(h,{fromRouteId:u,...p}))},[r,u])}var Tp={};function o1(r,u,d){!u&&!Tp[r]&&(Tp[r]=!0,Bt(!1,d))}T.memo(P2);function P2({routes:r,future:u,state:d}){return c1(r,void 0,d,u)}function aa(r){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function I2({basename:r="/",children:u=null,location:d,navigationType:o="POP",navigator:h,static:p=!1}){we(!Wn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=r.replace(/^\/*/,"/"),E=T.useMemo(()=>({basename:y,navigator:h,static:p,future:{}}),[y,h,p]);typeof d=="string"&&(d=Yl(d));let{pathname:x="/",search:g="",hash:M="",state:k=null,key:C="default"}=d,Q=T.useMemo(()=>{let X=ia(x,y);return X==null?null:{location:{pathname:X,search:g,hash:M,state:k,key:C},navigationType:o}},[y,x,g,M,k,C,o]);return Bt(Q!=null,`<Router basename="${y}"> is not able to match the URL "${x}${g}${M}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:T.createElement(Ut.Provider,{value:E},T.createElement(Jn.Provider,{children:u,value:Q}))}function em({children:r,location:u}){return L2(co(r),u)}function co(r,u=[]){let d=[];return T.Children.forEach(r,(o,h)=>{if(!T.isValidElement(o))return;let p=[...u,h];if(o.type===T.Fragment){d.push.apply(d,co(o.props.children,p));return}we(o.type===aa,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!o.props.index||!o.props.children,"An index route cannot have child routes.");let y={id:o.props.id||p.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(y.children=co(o.props.children,p)),d.push(y)}),d}var xs="get",vs="application/x-www-form-urlencoded";function Ts(r){return r!=null&&typeof r.tagName=="string"}function tm(r){return Ts(r)&&r.tagName.toLowerCase()==="button"}function am(r){return Ts(r)&&r.tagName.toLowerCase()==="form"}function lm(r){return Ts(r)&&r.tagName.toLowerCase()==="input"}function nm(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function im(r,u){return r.button===0&&(!u||u==="_self")&&!nm(r)}var hs=null;function sm(){if(hs===null)try{new FormData(document.createElement("form"),0),hs=!1}catch{hs=!0}return hs}var rm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fc(r){return r!=null&&!rm.has(r)?(Bt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vs}"`),null):r}function cm(r,u){let d,o,h,p,y;if(am(r)){let E=r.getAttribute("action");o=E?ia(E,u):null,d=r.getAttribute("method")||xs,h=Fc(r.getAttribute("enctype"))||vs,p=new FormData(r)}else if(tm(r)||lm(r)&&(r.type==="submit"||r.type==="image")){let E=r.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||E.getAttribute("action");if(o=x?ia(x,u):null,d=r.getAttribute("formmethod")||E.getAttribute("method")||xs,h=Fc(r.getAttribute("formenctype"))||Fc(E.getAttribute("enctype"))||vs,p=new FormData(E,r),!sm()){let{name:g,type:M,value:k}=r;if(M==="image"){let C=g?`${g}.`:"";p.append(`${C}x`,"0"),p.append(`${C}y`,"0")}else g&&p.append(g,k)}}else{if(Ts(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=xs,o=null,h=vs,y=r}return p&&h==="text/plain"&&(y=p,p=void 0),{action:o,method:d.toLowerCase(),encType:h,formData:p,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vo(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function om(r,u,d){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return o.pathname==="/"?o.pathname=`_root.${d}`:u&&ia(o.pathname,u)==="/"?o.pathname=`${u.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function um(r,u){if(r.id in u)return u[r.id];try{let d=await import(r.module);return u[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fm(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function dm(r,u,d){let o=await Promise.all(r.map(async h=>{let p=u.routes[h.route.id];if(p){let y=await um(p,d);return y.links?y.links():[]}return[]}));return gm(o.flat(1).filter(fm).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Ap(r,u,d,o,h,p){let y=(x,g)=>d[g]?x.route.id!==d[g].route.id:!0,E=(x,g)=>d[g].pathname!==x.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==x.params["*"];return p==="assets"?u.filter((x,g)=>y(x,g)||E(x,g)):p==="data"?u.filter((x,g)=>{let M=o.routes[x.route.id];if(!M||!M.hasLoader)return!1;if(y(x,g)||E(x,g))return!0;if(x.route.shouldRevalidate){let k=x.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function pm(r,u,{includeHydrateFallback:d}={}){return hm(r.map(o=>{let h=u.routes[o.route.id];if(!h)return[];let p=[h.module];return h.clientActionModule&&(p=p.concat(h.clientActionModule)),h.clientLoaderModule&&(p=p.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(p=p.concat(h.hydrateFallbackModule)),h.imports&&(p=p.concat(h.imports)),p}).flat(1))}function hm(r){return[...new Set(r)]}function mm(r){let u={},d=Object.keys(r).sort();for(let o of d)u[o]=r[o];return u}function gm(r,u){let d=new Set;return new Set(u),r.reduce((o,h)=>{let p=JSON.stringify(mm(h));return d.has(p)||(d.add(p),o.push({key:p,link:h})),o},[])}function u1(){let r=T.useContext(Gl);return vo(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function xm(){let r=T.useContext(Es);return vo(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bo=T.createContext(void 0);bo.displayName="FrameworkContext";function f1(){let r=T.useContext(bo);return vo(r,"You must render this element inside a <HydratedRouter> element"),r}function vm(r,u){let d=T.useContext(bo),[o,h]=T.useState(!1),[p,y]=T.useState(!1),{onFocus:E,onBlur:x,onMouseEnter:g,onMouseLeave:M,onTouchStart:k}=u,C=T.useRef(null);T.useEffect(()=>{if(r==="render"&&y(!0),r==="viewport"){let Y=B=>{B.forEach(ce=>{y(ce.isIntersecting)})},G=new IntersectionObserver(Y,{threshold:.5});return C.current&&G.observe(C.current),()=>{G.disconnect()}}},[r]),T.useEffect(()=>{if(o){let Y=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(Y)}}},[o]);let Q=()=>{h(!0)},X=()=>{h(!1),y(!1)};return d?r!=="intent"?[p,C,{}]:[p,C,{onFocus:Vn(E,Q),onBlur:Vn(x,X),onMouseEnter:Vn(g,Q),onMouseLeave:Vn(M,X),onTouchStart:Vn(k,Q)}]:[!1,C,{}]}function Vn(r,u){return d=>{r&&r(d),d.defaultPrevented||u(d)}}function bm({page:r,...u}){let{router:d}=u1(),o=T.useMemo(()=>Ip(d.routes,r,d.basename),[d.routes,r,d.basename]);return o?T.createElement(jm,{page:r,matches:o,...u}):null}function ym(r){let{manifest:u,routeModules:d}=f1(),[o,h]=T.useState([]);return T.useEffect(()=>{let p=!1;return dm(r,u,d).then(y=>{p||h(y)}),()=>{p=!0}},[r,u,d]),o}function jm({page:r,matches:u,...d}){let o=Ia(),{manifest:h,routeModules:p}=f1(),{basename:y}=u1(),{loaderData:E,matches:x}=xm(),g=T.useMemo(()=>Ap(r,u,x,h,o,"data"),[r,u,x,h,o]),M=T.useMemo(()=>Ap(r,u,x,h,o,"assets"),[r,u,x,h,o]),k=T.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let X=new Set,Y=!1;if(u.forEach(B=>{let ce=h.routes[B.route.id];!ce||!ce.hasLoader||(!g.some(I=>I.route.id===B.route.id)&&B.route.id in E&&p[B.route.id]?.shouldRevalidate||ce.hasClientLoader?Y=!0:X.add(B.route.id))}),X.size===0)return[];let G=om(r,y,"data");return Y&&X.size>0&&G.searchParams.set("_routes",u.filter(B=>X.has(B.route.id)).map(B=>B.route.id).join(",")),[G.pathname+G.search]},[y,E,o,h,g,u,r,p]),C=T.useMemo(()=>pm(M,h),[M,h]),Q=ym(M);return T.createElement(T.Fragment,null,k.map(X=>T.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...d})),C.map(X=>T.createElement("link",{key:X,rel:"modulepreload",href:X,...d})),Q.map(({key:X,link:Y})=>T.createElement("link",{key:X,...Y})))}function Sm(...r){return u=>{r.forEach(d=>{typeof d=="function"?d(u):d!=null&&(d.current=u)})}}var d1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{d1&&(window.__reactRouterVersion="7.7.1")}catch{}function Nm({basename:r,children:u,window:d}){let o=T.useRef();o.current==null&&(o.current=o2({window:d,v5Compat:!0}));let h=o.current,[p,y]=T.useState({action:h.action,location:h.location}),E=T.useCallback(x=>{T.startTransition(()=>y(x))},[y]);return T.useLayoutEffect(()=>h.listen(E),[h,E]),T.createElement(I2,{basename:r,children:u,location:p.location,navigationType:p.action,navigator:h})}var p1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,de=T.forwardRef(function({onClick:u,discover:d="render",prefetch:o="none",relative:h,reloadDocument:p,replace:y,state:E,target:x,to:g,preventScrollReset:M,viewTransition:k,...C},Q){let{basename:X}=T.useContext(Ut),Y=typeof g=="string"&&p1.test(g),G,B=!1;if(typeof g=="string"&&Y&&(G=g,d1))try{let Ee=new URL(window.location.href),nt=g.startsWith("//")?new URL(Ee.protocol+g):new URL(g),gt=ia(nt.pathname,X);nt.origin===Ee.origin&&gt!=null?g=gt+nt.search+nt.hash:B=!0}catch{Bt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ce=B2(g,{relative:h}),[I,Ne,F]=vm(o,C),Be=Tm(g,{replace:y,state:E,target:x,preventScrollReset:M,relative:h,viewTransition:k});function Oe(Ee){u&&u(Ee),Ee.defaultPrevented||Be(Ee)}let Ue=T.createElement("a",{...C,...F,href:G||ce,onClick:B||p?u:Oe,ref:Sm(Q,Ne),target:x,"data-discover":!Y&&d==="render"?"true":void 0});return I&&!Y?T.createElement(T.Fragment,null,Ue,T.createElement(bm,{page:ce})):Ue});de.displayName="Link";var zm=T.forwardRef(function({"aria-current":u="page",caseSensitive:d=!1,className:o="",end:h=!1,style:p,to:y,viewTransition:E,children:x,...g},M){let k=Fn(y,{relative:g.relative}),C=Ia(),Q=T.useContext(Es),{navigator:X,basename:Y}=T.useContext(Ut),G=Q!=null&&_m(k)&&E===!0,B=X.encodeLocation?X.encodeLocation(k).pathname:k.pathname,ce=C.pathname,I=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;d||(ce=ce.toLowerCase(),I=I?I.toLowerCase():null,B=B.toLowerCase()),I&&Y&&(I=ia(I,Y)||I);const Ne=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let F=ce===B||!h&&ce.startsWith(B)&&ce.charAt(Ne)==="/",Be=I!=null&&(I===B||!h&&I.startsWith(B)&&I.charAt(B.length)==="/"),Oe={isActive:F,isPending:Be,isTransitioning:G},Ue=F?u:void 0,Ee;typeof o=="function"?Ee=o(Oe):Ee=[o,F?"active":null,Be?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let nt=typeof p=="function"?p(Oe):p;return T.createElement(de,{...g,"aria-current":Ue,className:Ee,ref:M,style:nt,to:y,viewTransition:E},typeof x=="function"?x(Oe):x)});zm.displayName="NavLink";var wm=T.forwardRef(({discover:r="render",fetcherKey:u,navigate:d,reloadDocument:o,replace:h,state:p,method:y=xs,action:E,onSubmit:x,relative:g,preventScrollReset:M,viewTransition:k,...C},Q)=>{let X=Rm(),Y=Dm(E,{relative:g}),G=y.toLowerCase()==="get"?"get":"post",B=typeof E=="string"&&p1.test(E),ce=I=>{if(x&&x(I),I.defaultPrevented)return;I.preventDefault();let Ne=I.nativeEvent.submitter,F=Ne?.getAttribute("formmethod")||y;X(Ne||I.currentTarget,{fetcherKey:u,method:F,navigate:d,replace:h,state:p,relative:g,preventScrollReset:M,viewTransition:k})};return T.createElement("form",{ref:Q,method:G,action:Y,onSubmit:o?x:ce,...C,"data-discover":!B&&r==="render"?"true":void 0})});wm.displayName="Form";function Em(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h1(r){let u=T.useContext(Gl);return we(u,Em(r)),u}function Tm(r,{target:u,replace:d,state:o,preventScrollReset:h,relative:p,viewTransition:y}={}){let E=U2(),x=Ia(),g=Fn(r,{relative:p});return T.useCallback(M=>{if(im(M,u)){M.preventDefault();let k=d!==void 0?d:Kn(x)===Kn(g);E(r,{replace:k,state:o,preventScrollReset:h,relative:p,viewTransition:y})}},[x,E,g,d,o,u,r,h,p,y])}var Am=0,Mm=()=>`__${String(++Am)}__`;function Rm(){let{router:r}=h1("useSubmit"),{basename:u}=T.useContext(Ut),d=J2();return T.useCallback(async(o,h={})=>{let{action:p,method:y,encType:E,formData:x,body:g}=cm(o,u);if(h.navigate===!1){let M=h.fetcherKey||Mm();await r.fetch(M,d,h.action||p,{preventScrollReset:h.preventScrollReset,formData:x,body:g,formMethod:h.method||y,formEncType:h.encType||E,flushSync:h.flushSync})}else await r.navigate(h.action||p,{preventScrollReset:h.preventScrollReset,formData:x,body:g,formMethod:h.method||y,formEncType:h.encType||E,replace:h.replace,state:h.state,fromRouteId:d,flushSync:h.flushSync,viewTransition:h.viewTransition})},[r,u,d])}function Dm(r,{relative:u}={}){let{basename:d}=T.useContext(Ut),o=T.useContext(Ht);we(o,"useFormAction must be used inside a RouteContext");let[h]=o.matches.slice(-1),p={...Fn(r||".",{relative:u})},y=Ia();if(r==null){p.search=y.search;let E=new URLSearchParams(p.search),x=E.getAll("index");if(x.some(M=>M==="")){E.delete("index"),x.filter(k=>k).forEach(k=>E.append("index",k));let M=E.toString();p.search=M?`?${M}`:""}}return(!r||r===".")&&h.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:na([d,p.pathname])),Kn(p)}function _m(r,{relative:u}={}){let d=T.useContext(i1);we(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=h1("useViewTransitionState"),h=Fn(r,{relative:u});if(!d.isTransitioning)return!1;let p=ia(d.currentLocation.pathname,o)||d.currentLocation.pathname,y=ia(d.nextLocation.pathname,o)||d.nextLocation.pathname;return js(h.pathname,y)!=null||js(h.pathname,p)!=null}var m1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mp=Da.createContext&&Da.createContext(m1),Om=["attr","size","title"];function km(r,u){if(r==null)return{};var d=Cm(r,u),o,h;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(r);for(h=0;h<p.length;h++)o=p[h],!(u.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(d[o]=r[o])}return d}function Cm(r,u){if(r==null)return{};var d={};for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){if(u.indexOf(o)>=0)continue;d[o]=r[o]}return d}function Ss(){return Ss=Object.assign?Object.assign.bind():function(r){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(r[o]=d[o])}return r},Ss.apply(this,arguments)}function Rp(r,u){var d=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);u&&(o=o.filter(function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable})),d.push.apply(d,o)}return d}function Ns(r){for(var u=1;u<arguments.length;u++){var d=arguments[u]!=null?arguments[u]:{};u%2?Rp(Object(d),!0).forEach(function(o){Bm(r,o,d[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(d)):Rp(Object(d)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(d,o))})}return r}function Bm(r,u,d){return u=Um(u),u in r?Object.defineProperty(r,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):r[u]=d,r}function Um(r){var u=Hm(r,"string");return typeof u=="symbol"?u:u+""}function Hm(r,u){if(typeof r!="object"||!r)return r;var d=r[Symbol.toPrimitive];if(d!==void 0){var o=d.call(r,u);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(r)}function g1(r){return r&&r.map((u,d)=>Da.createElement(u.tag,Ns({key:d},u.attr),g1(u.child)))}function te(r){return u=>Da.createElement(qm,Ss({attr:Ns({},r.attr)},u),g1(r.child))}function qm(r){var u=d=>{var{attr:o,size:h,title:p}=r,y=km(r,Om),E=h||d.size||"1em",x;return d.className&&(x=d.className),r.className&&(x=(x?x+" ":"")+r.className),Da.createElement("svg",Ss({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,o,y,{className:x,style:Ns(Ns({color:r.color||d.color},d.style),r.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),p&&Da.createElement("title",null,p),r.children)};return Mp!==void 0?Da.createElement(Mp.Consumer,null,d=>u(d)):u(m1)}function Lm(r){return te({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function Ym(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(r)}function Gm(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function oo(r){return te({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(r)}function Vm(r){return te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(r)}function x1(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(r)}function v1(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function b1(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(r)}function Xm(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(r)}function Qm(r){return te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function Zm(r){return te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function $m(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"},child:[]}]})(r)}function Km(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(r)}function Dp(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(r)}function Jm(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(r)}function y1(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(r)}function zs(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(r)}function yo(r){return te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(r)}function Wm(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(r)}function Fm(r){return te({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z"},child:[]}]})(r)}function _p(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"},child:[]}]})(r)}function ws(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(r)}function Et(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function As(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function j1(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"},child:[]}]})(r)}function S1(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(r)}function N1(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(r)}function Op(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(r)}function z1(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(r)}function w1(r){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(r)}function Pm(r){return te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}function Im(r){return te({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},child:[]}]})(r)}function eg(r){return te({attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"},child:[]}]})(r)}function E1(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(r)}function tg(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(r)}function T1(r){return te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(r)}function ag(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M144 32S94.11 69.4 96 96c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zM73.293 201c1.43 63.948 18.943 179.432 74.707 238h152c55.764-58.568 73.278-174.052 74.707-238H73.293zm319.598.445c-.186 9.152-.652 19.252-1.472 30.057C419.312 235.162 441 259.142 441 288c0 31.374-25.626 57-57 57-4.387 0-8.656-.517-12.764-1.465-2.912 9.62-6.176 19.165-9.84 28.51C368.602 373.97 376.176 375 384 375c48.155 0 87-38.845 87-87 0-45.153-34.153-82.12-78.11-86.555zM42.763 457c1.507 5.193 3.854 11.2 6.955 16.37 2.637 4.394 5.69 8.207 8.428 10.58C60.882 486.32 63 487 64 487h320c1 0 3.118-.678 5.855-3.05 2.738-2.373 5.79-6.186 8.428-10.58 3.1-5.17 5.448-11.177 6.955-16.37H42.762z"},child:[]}]})(r)}function lg(r){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M238.406 26.844c-9.653.12-18.926 2.69-30.437 7.062l-157.282 57c-20.984 7.65-21.587 11.834-22.344 33.28L20.937 358.22c-1.207 27.514-.654 33.187 23.25 43.56L229.97 483.19c19.34 8.29 31.906 7.655 45.186 3.218l181.938-56.53c21.95-7.295 25.04-9.627 25.875-36.845l7.686-250.155c.662-17.37-5.667-24.695-18.78-29.625L271.062 34.375c-12.977-5.344-23.003-7.653-32.657-7.53zm.813 24.875c23.637-.053 45.564 8.434 87.874 24.874 95.545 37.123 131.71 53.8 69.687 77.937-74.002 28.802-128.175 45.115-172.28 25.814L113.47 131.75c-34.57-15.127-44.69-27.46 17.843-50.094 55.64-20.14 82.742-29.882 107.906-29.937zm44.718 43.75c-38.284.402-55.285 21.205-56.813 38.936-.873 10.132 2.95 19.6 12.406 26.25 9.456 6.65 25.355 10.56 48.97 5.938 35.817-7.01 61.536-15.056 77.5-22.844 7.982-3.894 13.464-7.737 16.5-10.844 3.036-3.107 3.453-4.942 3.438-6-.016-1.057-.44-2.675-3.313-5.406-2.873-2.73-8.03-6.04-15.22-9.156-14.378-6.233-36.757-11.877-65.717-15.72-6.355-.842-12.28-1.213-17.75-1.155zM59.25 134c10.372-.29 29.217 7.2 63.906 22.656 140.925 62.786 140.52 65.876 130.97 200.656-7.783 109.81-8.797 109.85-128.47 59.282-73.15-30.91-86.806-40.853-85.187-88.97l5.468-162.937c.674-20.034 1.557-30.358 13.312-30.687zm381.938 30.906c29.172-.384 29.1 28.075 26.75 105.25-4.118 135.132-9.05 140.184-120.375 173.72-70.42 21.21-81.49 25.614-78.97-12.032l11-164.156c3.217-48.034 7.588-51.508 94.813-83.907 31.323-11.633 52.534-18.686 66.78-18.874zm-20.438 40.688c-.332-.002-.674.015-1 .03-5.22.263-10.226 2.77-14.188 8.407-3.96 5.638-6.81 14.71-5.687 27.907 1.448 17.033-4.507 38.11-15.156 56.938-10.65 18.827-26.502 35.91-47.814 38.813-29.127 3.968-42.41 23.58-43.5 42.062-.545 9.24 2.108 18.03 7.688 24.594s14.088 11.335 27.187 12.03c41.146 2.185 71.336-10.766 91.595-39.155 20.26-28.39 30.396-73.76 25.875-136.595-1.876-26.076-14.708-34.977-25-35.03zm-246.25 8.844c-.644 0-1.218.063-1.72.187-2.003.494-3.685 1.53-5.655 4.813-1.913 3.186-3.688 8.618-4.406 16.343l-.064.657c-1.388 16.732-8.098 28.602-17.844 35.063-9.745 6.46-20.794 7.808-31.125 9.094-10.33 1.286-20.177 2.39-28.156 5.75-7.977 3.36-14.36 8.38-19.468 19.78-7.2 16.076-7.143 28.027-3.124 38.563 4.018 10.537 12.688 20.106 24.687 28.75 23.998 17.29 60.27 29.956 88.906 41.844 11.386 4.727 20.496 6.484 27.282 6.126 6.787-.358 11.278-2.423 15.375-6.562 8.195-8.28 14.057-27.692 15-57.344 2.024-63.623-18.84-110.284-38.656-130.875-8.668-9.008-16.52-12.193-21.03-12.188zm184.22 6.812c-.95-.003-1.927.035-2.97.094-35.464 1.99-48.477 12.867-52.5 24.062-4.023 11.196.826 27.07 10.844 39.78 11.488 14.58 20.59 15.736 30.437 12.283 9.848-3.455 20.542-14.108 27.376-26.908s9.512-27.397 7.188-36.28c-1.163-4.443-3.144-7.422-6.47-9.626-2.908-1.928-7.274-3.388-13.905-3.406z"},child:[]}]})(r)}function ng(r){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(r)}function ig(r){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(r)}function sg(r){return te({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},child:[]}]})(r)}const Pc=14,rg=Array.from({length:Pc},(r,u)=>({id:u,left:`${u/Pc*100+Math.random()*(100/Pc)}%`,size:18+Math.floor(Math.random()*22),duration:12+Math.random()*16,delay:-(Math.random()*20),opacity:.08+Math.random()*.14})),cg=`
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
`;function og(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:cg}),rg.map(r=>s.jsx("div",{className:"floater",style:{left:r.left,fontSize:r.size,opacity:r.opacity,animationDuration:`${r.duration}s, ${r.duration*.6}s`,animationDelay:`${r.delay}s, ${r.delay*.4}s`},children:s.jsx(ag,{})},r.id))]})}const ug=`
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
`,kp=["Software Engineer","Gamer","Coffee Connoisseur","Frenchie dad"];function fg(){const[r,u]=T.useState(""),[d,o]=T.useState(0),[h,p]=T.useState(0),[y,E]=T.useState(!1);return T.useEffect(()=>{document.title="Rosendo Inzunza | Portfolio",document.documentElement.classList.add("dark")},[]),T.useEffect(()=>{const x=kp[d%kp.length],g=setTimeout(()=>{y?(u(x.slice(0,h-1)),p(h-1)):(u(x.slice(0,h+1)),p(h+1)),!y&&h===x.length?setTimeout(()=>E(!0),1e3):y&&h===0&&(E(!1),o(d+1))},y?50:100);return()=>clearTimeout(g)},[h,y,d]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:ug}),s.jsxs("div",{className:"home-page",children:[s.jsx(og,{}),s.jsxs("div",{className:"home-card",style:{position:"relative",zIndex:1},children:[s.jsxs("div",{className:"home-profile",children:[s.jsx("img",{src:"/ro.jpg",alt:"Rosendo Inzunza",className:"home-avatar"}),s.jsxs("div",{children:[s.jsx("div",{className:"home-name",children:"Rosendo Inzunza"}),s.jsxs("div",{className:"home-typewriter",children:[r,s.jsx("span",{style:{opacity:.6},children:"|"})]})]})]}),s.jsx("div",{className:"home-divider"}),s.jsxs("div",{className:"home-info",children:[s.jsxs("div",{className:"home-info-item",children:[s.jsx(ig,{size:14})," Systems Engineer"]}),s.jsxs("div",{className:"home-info-item",children:[s.jsx(ng,{size:14})," Based in California, US"]}),s.jsxs("div",{className:"home-info-item",children:[s.jsx(sg,{size:14})," rosendoinzunza@gmail.com"]}),s.jsxs("div",{className:"home-info-item",children:[s.jsx(lg,{size:14})," Fueled by coffee"]})]}),s.jsx("div",{className:"home-divider"}),s.jsxs("div",{className:"home-socials",children:[s.jsx("a",{href:"https://github.com/roinzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:s.jsx(Lm,{})}),s.jsx("a",{href:"https://www.linkedin.com/in/rosendoinzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:s.jsx(Gm,{})}),s.jsx("a",{href:"https://instagram.com/ro.inzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:s.jsx(Ym,{})})]}),s.jsxs("div",{className:"home-nav",children:[s.jsx(de,{to:"/about",className:"home-nav-link",children:"About Me →"}),s.jsx(de,{to:"/resume",className:"home-nav-link",children:"Resume →"}),s.jsx(de,{to:"/projects",className:"home-nav-link",children:"What I'm Building →"}),s.jsx(de,{to:"/nvidia",className:"home-nav-link",style:{borderColor:"#76b900",color:"#76b900"},children:"NVIDIA Dashboard →"})]})]})]})]})}const dg={whoami:["Rosendo Inzunza is a software engineer who loves solving real-world problems through thoughtful design and performant code.","I enjoy building beautiful user experiences, contributing to impactful projects, and sipping cold brew while learning new things."],projects:["SideQuest (iOS/Swift + Rust) – A local job discovery platform with swiping, messaging, and profile matching."],skills:["Skills/Tools:","- Rust, Python, TypeScript","- Docker, Sentry, Grafana","- Axum, Actix, Poem, FastAPI, Flask","- PostgreSQL, Diesel, Alembic, SeaORM","- AWS (SNS, S3, EC2)","","*** Pulls a great double shot of espresso"],contact:["📧 rosendoinzunza@gmail.com","🔗 linkedin.com/in/rosendoinzunza","🐙 github.com/roinzunza","📍 Based in California, US"],coffee:["Between an oatmilk cortado and an iced latte with almond milk ☕"],ascii:["    _______  ________  ________  ________ ","  ╱╱       ╲╱        ╲╱        ╲╱    ╱   ╲"," ╱╱        ╱         _╱       ╱╱         ╱","╱        _╱         ╱         ╱         ╱ ","╲____╱___╱╲________╱╲________╱╲__╱_____╱  "],help:["Available commands:","- whoami     → About Rosendo","- projects   → Current projects","- skills     → Technical background","- contact    → Contact information","- coffee     → Coffee order","- ascii      → ASCII logo","- help       → This menu"]},pg=`
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
`;function hg(){const[r,u]=T.useState([]),[d,o]=T.useState(""),[h,p]=T.useState(""),y=T.useRef(null),E=T.useRef(null),x="➜ ~ whoami";T.useEffect(()=>{let k=0;const C=setInterval(()=>{p(x.slice(0,k+1)),k++,k===x.length&&(clearInterval(C),setTimeout(()=>g("whoami"),600))},80);return()=>clearInterval(C)},[]);const g=k=>{const C=k.trim().toLowerCase(),Q=dg[C],X=typeof Q=="string"?[Q]:Q||[`zsh: command not found: ${k} — try 'help'`];u(Y=>[...Y,`➜ ~ ${k}`]),X.forEach((Y,G)=>{setTimeout(()=>{u(B=>[...B,Y])},150*G)})},M=k=>{k.preventDefault(),d.trim()&&(g(d),o(""))};return T.useEffect(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},[r]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:pg}),s.jsx("div",{className:"about-page",children:s.jsxs("div",{className:"about-inner",children:[s.jsx("div",{className:"about-title",children:"About Me"}),s.jsxs("div",{className:"terminal",children:[s.jsxs("div",{className:"terminal-bar",children:[s.jsx("div",{className:"terminal-dot",style:{background:"#ff5f57"}}),s.jsx("div",{className:"terminal-dot",style:{background:"#febc2e"}}),s.jsx("div",{className:"terminal-dot",style:{background:"#28c840"}})]}),s.jsxs("div",{className:"terminal-body",ref:E,children:[s.jsxs("div",{children:[s.jsx("span",{className:"terminal-prompt",children:h}),h.length<x.length&&s.jsx("span",{style:{opacity:.6},children:"|"})]}),r.map((k,C)=>s.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap"},children:k.startsWith("➜ ~")?s.jsx(s.Fragment,{children:s.jsx("span",{className:"terminal-prompt",children:k})}):k},C)),s.jsxs("form",{onSubmit:M,className:"terminal-input-row",children:[s.jsx("span",{className:"terminal-prompt",children:"➜ ~"}),s.jsx("input",{type:"text",ref:y,autoFocus:!0,value:d,onChange:k=>o(k.target.value),className:"terminal-input",placeholder:"type a command (try 'help')..."})]})]})]}),s.jsx(de,{to:"/",className:"about-back",children:"← Back to Home"})]})})]})}const Pn={name:"Rosendo Inzunza",email:"RosendoInzunza@gmail.com",website:"www.rosendoinzunza.com",phone:"714-342-7492",summary:"Systems Engineer specializing in critical infrastructure at global scale—fleet control planes, distributed systems, ML training and inference. Driving complex architectural changes end to end, from RFC authorship and stakeholder alignment to production delivery, consistently unblocking initiatives that stalled due to scale or blast radius risk.",experience:[{title:"Systems Engineer - Infrastructure",company:"Cloudflare",logo:"Cloudflare.png",coverBg:"#ffffff",location:"Remote, US",period:"07/2024 – 05/2026",summary:"Owned reliability, performance, and architectural evolution of the infrastructure control plane — the authoritative system for fleet configuration and asset management across Cloudflare's global network.",bullets:["Improved control plane API performance 10x (5s to 500ms) by rearchitecting the data-fetching layer to parallelize requests, with an automatic fallback to serial processing under database load.","Led the Ray ID redesign end to end: identified the exhaustion risk, wrote the RFC, designed a backward-compatible migration, with zero customer impact, retiring 3 years of deferred technical debt.","Drove consolidation of the company's logical asset data model, authoring the RFC and leading cross-team alignment to unify legacy and modern systems under a single authoritative control plane — reducing sync errors and manual provisioning intervention by 80%.","Eliminated a critical circular dependency between the control plane and Release Manager by defining a new cross-team deployment contract, including automated migration halts and a full-stack recovery path for outage scenarios.","Built high-throughput reconciliation workers to sync DCIM systems and automate orphan asset cleanup, ending persistent manual drift that had required ongoing operational intervention.","Expanded internal platform adoption by building an MCP server over the control plane API, enabling teams to integrate without writing custom clients or CLI tooling.","Established an AI-assisted development workflow across the team — covering codebase context indexing, pre-commit verification, and test generation — materially reducing onboarding and review cycle time."]},{title:"Site Reliability Engineer - Applied Machine Learning",company:"TikTok",logo:"tiktok.jpg",coverBg:"#ffffff",location:"Remote, US",period:"07/2022 – 07/2024",bullets:["Designed and shipped a diagnostics platform adopted by 200+ engineers, reducing mean time to resolution by 72% (80 min to 22 min) by centralizing root cause analysis workflows.","Authored the RFC and implemented self-healing automation for parameter servers and distributed training jobs, reducing manual incident volume by 25%.","Consolidated 4 divergent regional codebases for the parameter server observability system into a single unified release with per-region DNS routing — ending configuration drift and simplifying cross-region deployments.","Served as primary on-call for ML training and parameter server infrastructure, owning incident response for Ads and Video Recommendation systems supporting millions of users."]},{title:"Full Stack Software Engineer",company:"Digital Force Technologies",logo:"digital_force_technologies.jpg",coverBg:"#000000",location:"Remote, US",period:"10/2021 – 07/2022",bullets:["Built and maintained a Flask API for hardware configuration management in radar systems.","Automated the ARM64 Debian package release process, integrating with legacy build infrastructure."]},{title:"Automation Engineer",company:"CoreLogic",logo:"corelogic.png",coverBg:"#ffffff",location:"Irvine, CA",period:"09/2020 – 10/2021",bullets:["Built data pipelines to parse and reconcile multi-schema customer files into a unified format.","Trained a CNN on home images to predict property value.","Established GitLab CI/CD for the team."]}],skills:{Languages:["Rust","Python","Go","TypeScript","Swift","C++"],"Frameworks / Libraries":["Axum","Actix","SeaORM","Diesel","FastAPI","Flask","Django","React"],Infrastructure:["Kubernetes","Docker","SaltStack","gRPC","Protobuf","PostgreSQL","Redis"],Observability:["Prometheus","Grafana","Splunk","Sentry"],"Machine Learning":["TensorFlow","PyTorch"],Tools:["Claude","Codex","OpenCode"]},project:{name:"SideQuest",logo:"sidequest_logo.png",coverBg:"#000000",role:"Founder & Full-Stack Engineer",tech:"iOS · Swift · Rust · Axum · SeaORM · PostgreSQL",url:"https://www.sidequestapp.io/",bullets:["Founded and shipped a two-sided iOS job marketplace connecting local businesses with hourly workers — live on the App Store.","Architected a Rust/Axum backend with a service-oriented route pattern, PostgreSQL via SeaORM, JWT auth, and Apple/Google SSO with PKCE.","Built real-time in-app messaging using WebSockets with a concurrent DashMap hub and APNs push notification delivery.","Integrated Stripe and RevenueCat for tiered subscriptions, IAP add-ons, and entitlement management across business and applicant roles."]},education:{degree:"Bachelor of Science in Computer Science",school:"California State University, Fullerton"}},{name:mg,email:Cp,website:Bp,phone:gg,summary:xg,experience:vg,skills:bg,project:ql,education:Up}=Pn,yg=`
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
`;function jg(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:yg}),s.jsx("div",{className:"rv-page",children:s.jsxs("div",{className:"rv-inner",children:[s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-name",children:mg}),s.jsxs("div",{className:"rv-contact",children:[s.jsx("a",{href:`mailto:${Cp}`,children:Cp}),s.jsx("a",{href:`https://${Bp}`,target:"_blank",rel:"noopener noreferrer",children:Bp}),s.jsx("span",{children:gg})]})]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Summary"}),s.jsx("div",{className:"rv-summary",children:xg})]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Experience"}),vg.map((r,u)=>s.jsxs("div",{className:"rv-job",children:[s.jsxs("div",{className:"rv-job-header",children:[s.jsx("div",{className:"rv-job-title",children:r.title}),s.jsx("div",{className:"rv-job-period",children:r.period})]}),s.jsxs("div",{className:"rv-job-company",children:[r.company," · ",r.location]}),r.summary&&s.jsx("div",{className:"rv-job-summary",children:r.summary}),s.jsx("ul",{className:"rv-bullets",children:r.bullets.map((d,o)=>s.jsxs("li",{children:[s.jsx("span",{className:"rv-bullet-dash",children:"—"}),s.jsx("span",{children:d})]},o))})]},u))]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Technical Skills"}),Object.entries(bg).map(([r,u])=>s.jsxs("div",{className:"rv-skill-group",children:[s.jsx("div",{className:"rv-skill-label",children:r}),s.jsx("div",{className:"rv-chips",children:u.map(d=>s.jsx("span",{className:"rv-chip",children:d},d))})]},r))]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Startup Project"}),s.jsxs("div",{className:"rv-project-header",children:[s.jsx("div",{className:"rv-project-name",children:ql.name}),s.jsx("a",{href:ql.url,target:"_blank",rel:"noopener noreferrer",className:"rv-project-url",children:ql.url.replace("https://","")})]}),s.jsxs("div",{className:"rv-project-role",children:[ql.role," · ",ql.tech]}),s.jsx("ul",{className:"rv-bullets",children:ql.bullets.map((r,u)=>s.jsxs("li",{children:[s.jsx("span",{className:"rv-bullet-dash",children:"—"}),s.jsx("span",{children:r})]},u))})]}),s.jsxs("div",{className:"rv-card",children:[s.jsx("div",{className:"rv-section-label",children:"Education"}),s.jsx("div",{className:"rv-edu-degree",children:Up.degree}),s.jsx("div",{className:"rv-edu-school",children:Up.school})]}),s.jsx(de,{to:"/",className:"rv-back",children:"← Back to Home"})]})})]})}const{name:Xn,email:Hp,website:qp,phone:Sg,summary:Ng,experience:Pa,skills:zg,project:Ge,education:Ic}=Pn,eo=Object.values(zg).flat(),Zn=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),to=Zn(Ge.name),wg=`
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
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "main" "player";
      width: 100%;
      max-width: 100vw;
      padding: 4px;
      gap: 4px;
      overflow-x: hidden;
    }
    .sp-sidebar { display: none; }
    .sp-main { width: 100%; min-width: 0; max-width: 100%; }
    .sp-topbar-pill { display: none; }
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
      width: 100%;
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
    min-width: 0;
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
  .sp-featured-card { grid-column: 1 / -1; }
  .sp-featured-card .sp-featured-cover { width: 160px; height: 160px; flex-shrink: 0; }
  @media (max-width: 600px) {
    .sp-featured-card > a { flex-direction: column; }
    .sp-featured-card { padding: 12px; }
    .sp-featured-card .sp-featured-cover { width: 120px; height: 120px; }
  }

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
`,ea=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Lp=["linear-gradient(135deg, #1DB954 0%, #064E3B 100%)","linear-gradient(135deg, #FBBF24 0%, #92400E 100%)","linear-gradient(135deg, #38BDF8 0%, #0C4A6E 100%)","linear-gradient(135deg, #F472B6 0%, #831843 100%)"];function Yp(r){const u=r*47+123,d=Math.floor(u/60),o=u%60;return`${d}:${o.toString().padStart(2,"0")}`}function Eg(r){return([2847193,1402557,894201,612488,320115][r]??15e4).toLocaleString()}function Tg(){const[r,u]=T.useState(!1),[d,o]=T.useState(!0);T.useEffect(()=>{document.title=`${Xn} | Spotify Resume`},[]);const h=12847392 .toLocaleString();return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:wg}),s.jsxs("div",{className:"sp-page",children:[s.jsxs("aside",{className:"sp-sidebar",children:[s.jsxs("div",{className:"sp-sidebar-card",children:[s.jsxs(de,{to:"/",className:"sp-nav-item",children:[s.jsx(yo,{})," Home"]}),s.jsxs("div",{className:"sp-nav-item",children:[s.jsx(N1,{})," Search"]})]}),s.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[s.jsxs("div",{className:"sp-library-header",children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[s.jsx(x1,{})," Your Library"]}),s.jsx("button",{className:"sp-icon-btn",children:s.jsx(As,{})})]}),s.jsxs("div",{style:{marginTop:8},children:[s.jsxs("div",{className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:Lp[0]},children:s.jsx(zs,{})}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:"Liked Songs"}),s.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",Pa.length+1," songs"]})]})]}),Pa.map((p,y)=>s.jsxs(de,{to:`/spotify/${Zn(p.company)}`,className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:p.coverBg??ea[y%ea.length]},children:p.logo?s.jsx("img",{src:`/${p.logo}`,alt:p.company}):p.company}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:p.company}),s.jsxs("div",{className:"sp-playlist-sub",children:["Album · ",p.bullets.length," tracks"]})]})]},p.company)),s.jsxs(de,{to:`/spotify/${to}`,className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:Ge.coverBg},children:s.jsx("img",{src:`/${Ge.logo}`,alt:Ge.name})}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:Ge.name}),s.jsxs("div",{className:"sp-playlist-sub",children:["Single · ",Xn]})]})]}),s.jsxs("div",{className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:Lp[2]},children:"Tech Stack"}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:"Tech Stack"}),s.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",eo.length," tracks"]})]})]}),s.jsxs("div",{className:"sp-playlist-item",children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)"},children:"Education"}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:"sp-playlist-title",children:"Education"}),s.jsxs("div",{className:"sp-playlist-sub",children:["EP · ",Ic.school.split(",")[0]]})]})]})]})]})]}),s.jsxs("main",{className:"sp-main",children:[s.jsxs("div",{className:"sp-mobile-nav",children:[Pa.map((p,y)=>s.jsxs(de,{to:`/spotify/${Zn(p.company)}`,className:"sp-chip",children:[s.jsx("div",{className:"sp-chip-cover",style:{background:p.coverBg??ea[y%ea.length]},children:p.logo?s.jsx("img",{src:`/${p.logo}`,alt:p.company}):p.company.slice(0,2)}),p.company]},`m-${p.company}`)),s.jsxs(de,{to:`/spotify/${to}`,className:"sp-chip",children:[s.jsx("div",{className:"sp-chip-cover",style:{background:Ge.coverBg},children:s.jsx("img",{src:`/${Ge.logo}`,alt:Ge.name})}),Ge.name]})]}),s.jsxs("div",{className:"sp-topbar",children:[s.jsx(de,{to:"/",className:"sp-back-btn",children:"← Back to Home"}),s.jsxs("div",{className:"sp-topbar-pill",style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[s.jsx(oo,{size:18})," Open in Web Player"]})]}),s.jsxs("section",{className:"sp-hero",children:[s.jsx("img",{src:"/ro.jpg",alt:Xn,className:"sp-hero-avatar"}),s.jsxs("div",{className:"sp-hero-meta",children:[s.jsxs("div",{className:"sp-verified",children:[s.jsx(v1,{size:16})," Verified Engineer"]}),s.jsx("h1",{className:"sp-hero-name",children:Xn}),s.jsxs("div",{className:"sp-hero-stats",children:[h," monthly listeners"]})]})]}),s.jsxs("div",{className:"sp-action-bar",children:[s.jsx("button",{className:"sp-play-btn",onClick:()=>u(!r),children:r?s.jsx(ws,{}):s.jsx(Et,{style:{marginLeft:3}})}),s.jsx("button",{className:"sp-follow-btn",children:"Follow"}),s.jsx("button",{className:"sp-icon-btn-lg",children:s.jsx(y1,{})})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Popular"}),s.jsx("div",{className:"sp-track-list",children:Pa.map((p,y)=>s.jsxs(de,{to:`/spotify/${Zn(p.company)}`,className:"sp-track",children:[s.jsx("div",{className:"sp-track-num",children:y+1}),s.jsxs("div",{className:"sp-track-info",children:[s.jsx("div",{className:"sp-track-cover",style:{background:p.coverBg??ea[y%ea.length]},children:p.logo?s.jsx("img",{src:`/${p.logo}`,alt:p.company}):p.company}),s.jsxs("div",{className:"sp-track-text",children:[s.jsx("div",{className:"sp-track-title",children:p.title}),s.jsxs("div",{className:"sp-track-artist",children:[p.company," · ",p.location]})]})]}),s.jsx("div",{className:"sp-track-plays",children:Eg(y)}),s.jsx("div",{className:"sp-track-duration",children:Yp(p.bullets.length)})]},y))})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"About"}),s.jsxs("div",{className:"sp-about",children:[s.jsx("div",{className:"sp-about-text",children:Ng}),s.jsxs("div",{className:"sp-about-stats",children:[s.jsxs("div",{className:"sp-stat",children:[s.jsx("div",{className:"sp-stat-value",children:h}),s.jsx("div",{className:"sp-stat-label",children:"Monthly Listeners"})]}),s.jsxs("div",{className:"sp-stat",children:[s.jsx("div",{className:"sp-stat-value",children:Pa.length}),s.jsx("div",{className:"sp-stat-label",children:"Albums"})]}),s.jsxs("div",{className:"sp-stat",children:[s.jsx("div",{className:"sp-stat-value",children:eo.length}),s.jsx("div",{className:"sp-stat-label",children:"Genres"})]})]})]})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Discography"}),s.jsx("div",{className:"sp-album-grid",children:Pa.map((p,y)=>s.jsxs(de,{to:`/spotify/${Zn(p.company)}`,className:"sp-album-card",children:[s.jsxs("div",{className:"sp-album-cover",style:{background:p.coverBg??ea[y%ea.length]},children:[p.logo?s.jsx("img",{src:`/${p.logo}`,alt:p.company}):p.company,s.jsx("button",{className:"sp-album-play",children:s.jsx(Et,{style:{marginLeft:2}})})]}),s.jsx("div",{className:"sp-album-title",children:p.company}),s.jsxs("div",{className:"sp-album-sub",children:[p.period.split("–")[0].trim().split("/")[1]," · ",p.bullets.length," tracks"]})]},y))})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Featured Release"}),s.jsx("div",{className:"sp-album-grid",children:s.jsxs("div",{className:"sp-album-card sp-featured-card",style:{background:"#1a1a1a"},children:[s.jsxs(de,{to:`/spotify/${to}`,style:{display:"flex",gap:20,alignItems:"flex-start",textDecoration:"none",color:"inherit"},children:[s.jsxs("div",{className:"sp-album-cover sp-featured-cover",style:{background:Ge.coverBg,marginBottom:0,position:"relative",fontSize:28},children:[s.jsx("img",{src:`/${Ge.logo}`,alt:Ge.name}),s.jsx("button",{className:"sp-album-play",children:s.jsx(Et,{style:{marginLeft:2}})})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,minWidth:0},children:[s.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5},children:"Album · 2025"}),s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"#fff"},children:Ge.name}),s.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:Ge.role}),s.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:Ge.tech})]})]}),s.jsxs("a",{href:Ge.url,target:"_blank",rel:"noopener noreferrer",onClick:p=>p.stopPropagation(),style:{fontSize:13,color:"#1ED760",fontWeight:600,textDecoration:"none",marginTop:12,display:"inline-block"},children:[Ge.url.replace("https://","").replace(/\/$/,"")," ↗"]}),s.jsx("div",{style:{marginTop:20,display:"flex",flexDirection:"column",gap:4},children:Ge.bullets.map((p,y)=>s.jsxs("div",{className:"sp-track",style:{gridTemplateColumns:"32px 1fr auto"},children:[s.jsx("div",{className:"sp-track-num",children:y+1}),s.jsx("div",{className:"sp-track-text",children:s.jsx("div",{className:"sp-track-title",style:{whiteSpace:"normal"},children:p})}),s.jsx("div",{className:"sp-track-duration",children:Yp(y+2)})]},y))})]})})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Genres"}),s.jsx("div",{className:"sp-chips",children:eo.map(p=>s.jsx("span",{className:"sp-chip",children:p},p))})]}),s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"Education"}),s.jsx("div",{className:"sp-about",style:{background:"linear-gradient(135deg, #1a1a1a 0%, #7c2d12 200%)"},children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20},children:[s.jsx("div",{className:"sp-album-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)",width:96,height:96,fontSize:20,marginBottom:0,flexShrink:0},children:"ED"}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:"EP"}),s.jsx("div",{style:{fontSize:20,fontWeight:800,color:"#fff",marginBottom:4},children:Ic.degree}),s.jsx("div",{style:{fontSize:14,color:"#b3b3b3"},children:Ic.school})]})]})})]}),s.jsx("section",{className:"sp-section",children:s.jsxs("div",{style:{fontSize:12,color:"#6a6a6a",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",paddingBottom:24},children:[s.jsx("a",{href:`mailto:${Hp}`,style:{color:"#6a6a6a",textDecoration:"none"},children:Hp}),s.jsx("a",{href:`https://${qp}`,target:"_blank",rel:"noopener noreferrer",style:{color:"#6a6a6a",textDecoration:"none"},children:qp}),s.jsx("span",{children:Sg})]})})]}),s.jsxs("footer",{className:"sp-player",children:[s.jsxs("div",{className:"sp-player-track",children:[s.jsx("div",{className:"sp-player-cover",style:{background:ea[0]}}),s.jsxs("div",{className:"sp-player-meta",children:[s.jsx("div",{className:"sp-player-title",children:Pa[0].title}),s.jsx("div",{className:"sp-player-artist",children:Xn})]}),s.jsx("button",{className:`sp-player-heart ${d?"liked":""}`,onClick:()=>o(!d),"aria-label":"Like",children:s.jsx(zs,{})})]}),s.jsxs("div",{className:"sp-player-controls",children:[s.jsxs("div",{className:"sp-player-buttons",children:[s.jsx("button",{children:s.jsx(j1,{})}),s.jsx("button",{children:s.jsx(z1,{})}),s.jsx("button",{className:"sp-player-play",onClick:()=>u(!r),children:r?s.jsx(ws,{}):s.jsx(Et,{style:{marginLeft:2}})}),s.jsx("button",{children:s.jsx(w1,{})}),s.jsx("button",{children:s.jsx(S1,{})})]}),s.jsxs("div",{className:"sp-progress",children:[s.jsx("span",{className:"sp-progress-time",children:"1:42"}),s.jsx("div",{className:"sp-progress-bar",children:s.jsx("div",{className:"sp-progress-fill"})}),s.jsx("span",{className:"sp-progress-time",children:"4:51"})]})]}),s.jsxs("div",{className:"sp-player-extras",children:[s.jsx("button",{children:s.jsx(T1,{})}),s.jsx("div",{className:"sp-volume",children:s.jsx("div",{className:"sp-volume-bar",children:s.jsx("div",{className:"sp-volume-fill"})})})]})]})]})]})}const{name:bs,experience:Ag,project:ta}=Pn,Gp=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),uo=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Vp=["linear-gradient(180deg, #B91C1C 0%, #5b1414 55%, #121212 100%)","linear-gradient(180deg, #1D4ED8 0%, #1e2c5b 55%, #121212 100%)","linear-gradient(180deg, #6D28D9 0%, #2c1d5b 55%, #121212 100%)","linear-gradient(180deg, #BE185D 0%, #5b1f3e 55%, #121212 100%)"],Mg="linear-gradient(180deg, #1DB954 0%, #0a5d2b 55%, #121212 100%)",ao=[...Ag.map((r,u)=>({type:"job",slug:Gp(r.company),title:r.title,artist:r.company,initials:r.company,logo:r.logo,period:r.period,description:r.summary,bullets:r.bullets,cover:r.coverBg??uo[u%uo.length],heroGrad:Vp[u%Vp.length],meta:`${r.location} · ${r.period}`})),{type:"project",slug:Gp(ta.name),title:ta.name,artist:bs,initials:ta.name,logo:ta.logo,period:"2025",bullets:ta.bullets,cover:ta.coverBg,heroGrad:Mg,externalUrl:ta.url,meta:`${ta.role} · ${ta.tech}`}];function Rg(r){const u=165+r*53%180,d=Math.floor(u/60),o=u%60;return`${d}:${o.toString().padStart(2,"0")}`}function Dg(r){let u=0;for(let h=0;h<r;h++)u+=165+h*53%180;const d=Math.floor(u/60),o=u%60;return`${d} min ${o} sec`}const Xp=`
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
    .sp-page {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "main" "player";
      width: 100%;
      max-width: 100vw;
      padding: 4px;
      gap: 4px;
      overflow-x: hidden;
    }
    .sp-sidebar { display: none; }
    .sp-main { width: 100%; min-width: 0; max-width: 100%; }
    .sp-topbar-pill { display: none; }
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
      width: 100%;
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
  .sp-main { grid-area: main; background: #121212; border-radius: 8px; overflow-y: auto; overflow-x: hidden; position: relative; min-width: 0; }
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
`;function _g(){const{slug:r}=q2(),u=ao.find(x=>x.slug===r),[d,o]=T.useState(!1),[h,p]=T.useState(!0);T.useEffect(()=>{document.title=u?`${u.title} | ${bs}`:"Not Found"},[u]);const y=s.jsxs("aside",{className:"sp-sidebar",children:[s.jsxs("div",{className:"sp-sidebar-card",children:[s.jsxs(de,{to:"/",className:"sp-nav-item",children:[s.jsx(yo,{})," Home"]}),s.jsxs("div",{className:"sp-nav-item",children:[s.jsx(N1,{})," Search"]}),s.jsxs(de,{to:"/spotify",className:"sp-nav-item",children:[s.jsx(oo,{})," Your Resume"]})]}),s.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[s.jsxs("div",{className:"sp-library-header",children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[s.jsx(x1,{})," Your Library"]}),s.jsx("button",{className:"sp-icon-btn",children:s.jsx(As,{})})]}),s.jsx("div",{style:{marginTop:8},children:ao.map(x=>{const g=x.slug===r;return s.jsxs(de,{to:`/spotify/${x.slug}`,className:`sp-playlist-item ${g?"active":""}`,children:[s.jsx("div",{className:"sp-playlist-cover",style:{background:x.cover},children:x.logo?s.jsx("img",{src:`/${x.logo}`,alt:x.artist}):x.initials}),s.jsxs("div",{className:"sp-playlist-meta",children:[s.jsx("div",{className:`sp-playlist-title ${g?"active":""}`,children:x.title}),s.jsxs("div",{className:"sp-playlist-sub",children:[x.type==="job"?"Album":"Single"," · ",x.artist]})]})]},x.slug)})})]})]}),E=s.jsxs("footer",{className:"sp-player",children:[s.jsxs("div",{className:"sp-player-track",children:[s.jsx("div",{className:"sp-player-cover",style:{background:u?.cover??uo[0]},children:u?.logo?s.jsx("img",{src:`/${u.logo}`,alt:u.artist}):u?.initials??"??"}),s.jsxs("div",{className:"sp-player-meta",children:[s.jsx("div",{className:"sp-player-title",children:u?.title??"—"}),s.jsx("div",{className:"sp-player-artist",children:u?.artist??bs})]}),s.jsx("button",{className:"sp-player-heart",children:s.jsx(zs,{})})]}),s.jsxs("div",{className:"sp-player-controls",children:[s.jsxs("div",{className:"sp-player-buttons",children:[s.jsx("button",{children:s.jsx(j1,{})}),s.jsx("button",{children:s.jsx(z1,{})}),s.jsx("button",{className:"sp-player-play",onClick:()=>o(!d),children:d?s.jsx(ws,{}):s.jsx(Et,{style:{marginLeft:2}})}),s.jsx("button",{children:s.jsx(w1,{})}),s.jsx("button",{children:s.jsx(S1,{})})]}),s.jsxs("div",{className:"sp-progress",children:[s.jsx("span",{className:"sp-progress-time",children:"0:48"}),s.jsx("div",{className:"sp-progress-bar",children:s.jsx("div",{className:"sp-progress-fill"})}),s.jsx("span",{className:"sp-progress-time",children:"3:32"})]})]}),s.jsxs("div",{className:"sp-player-extras",children:[s.jsx("button",{children:s.jsx(T1,{})}),s.jsx("div",{className:"sp-volume",children:s.jsx("div",{className:"sp-volume-bar",children:s.jsx("div",{className:"sp-volume-fill"})})})]})]});return u?s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Xp}),s.jsxs("div",{className:"sp-page",children:[y,s.jsxs("main",{className:"sp-main",children:[s.jsx("div",{className:"sp-mobile-nav",children:ao.map(x=>s.jsxs(de,{to:`/spotify/${x.slug}`,className:`sp-chip ${x.slug===r?"active":""}`,children:[s.jsx("div",{className:"sp-chip-cover",style:{background:x.cover},children:x.logo?s.jsx("img",{src:`/${x.logo}`,alt:x.artist}):x.initials.slice(0,2)}),x.artist]},`m-${x.slug}`))}),s.jsxs("div",{className:"sp-topbar",children:[s.jsx(de,{to:"/spotify",className:"sp-back-btn",children:"← Back to Resume"}),s.jsxs("div",{className:"sp-topbar-pill",style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[s.jsx(oo,{size:18})," Open in Web Player"]})]}),s.jsxs("section",{className:"sp-album-hero",style:{background:u.heroGrad},children:[s.jsx("div",{className:"sp-album-art",style:{background:u.cover},children:u.logo?s.jsx("img",{src:`/${u.logo}`,alt:u.artist}):u.initials}),s.jsxs("div",{className:"sp-album-meta",children:[s.jsx("div",{className:"sp-album-type",children:u.type==="job"?"Album":"Featured Single"}),s.jsx("h1",{className:"sp-album-title",children:u.title}),s.jsxs("div",{className:"sp-album-byline",children:[s.jsx("strong",{children:u.artist}),s.jsx("span",{className:"dot",children:"·"}),s.jsx("span",{children:u.period}),s.jsx("span",{className:"dot",children:"·"}),s.jsxs("span",{children:[u.bullets.length," songs, ",Dg(u.bullets.length)]})]}),s.jsx("div",{className:"sp-album-extra",children:u.meta})]})]}),s.jsxs("div",{className:"sp-action-bar",children:[s.jsx("button",{className:"sp-play-btn",onClick:()=>o(!d),children:d?s.jsx(ws,{}):s.jsx(Et,{style:{marginLeft:3}})}),s.jsx("button",{className:`sp-heart-btn ${h?"liked":""}`,onClick:()=>p(!h),"aria-label":"Like",children:s.jsx(zs,{})}),s.jsx("button",{className:"sp-icon-btn-lg",children:s.jsx(y1,{})}),u.externalUrl&&s.jsxs("a",{href:u.externalUrl,target:"_blank",rel:"noopener noreferrer",className:"sp-external",style:{marginLeft:"auto"},children:[u.externalUrl.replace("https://","").replace(/\/$/,"")," ↗"]})]}),s.jsxs("div",{className:"sp-track-table",children:[s.jsxs("div",{className:"sp-track-header",children:[s.jsx("span",{className:"col-num",children:"#"}),s.jsx("span",{children:"Title"}),s.jsx("span",{className:"col-dur",children:s.jsx(Km,{})})]}),u.bullets.map((x,g)=>s.jsxs("div",{className:"sp-track-row",children:[s.jsxs("div",{className:"sp-track-num",children:[s.jsx("span",{className:"num",children:g+1}),s.jsx("span",{className:"play",children:s.jsx(Et,{size:10,style:{marginLeft:2}})})]}),s.jsxs("div",{className:"sp-track-text",children:[s.jsx("div",{className:"sp-track-title",children:x}),s.jsx("div",{className:"sp-track-sub",children:u.artist})]}),s.jsx("div",{className:"sp-track-dur",children:Rg(g+1)})]},g))]}),u.description&&s.jsxs("section",{className:"sp-section",children:[s.jsx("h2",{className:"sp-section-title",children:"About this album"}),s.jsx("div",{className:"sp-about",children:u.description})]})]}),E]})]}):s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Xp}),s.jsxs("div",{className:"sp-page",children:[y,s.jsxs("main",{className:"sp-main",children:[s.jsx("div",{className:"sp-topbar",children:s.jsx(de,{to:"/spotify",className:"sp-back-btn",children:"← Back"})}),s.jsxs("div",{className:"sp-notfound",children:[s.jsx("h1",{children:"Album not found"}),s.jsxs("p",{children:["This playlist doesn't exist in ",bs,"'s library."]}),s.jsx(de,{to:"/spotify",className:"sp-external",children:"← Return to your resume"})]})]}),E]})]})}const{name:ys,summary:Og,experience:A1,skills:kg,project:mt,education:Qp}=Pn,Cg=`
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
`,Zp=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],$p=A1.map((r,u)=>({title:r.title,artist:r.company,initials:r.company,logo:r.logo,cover:r.coverBg??Zp[u%Zp.length],period:r.period,summary:r.summary,bullets:r.bullets,match:98-u*3,tag:u===0?"Now Playing":u===1?"Limited Series":"Documentary",type:"job"}));function lo({id:r,title:u,rank:d,children:o}){const h=T.useRef(null),p=y=>{h.current&&h.current.scrollBy({left:y==="left"?-h.current.clientWidth*.8:h.current.clientWidth*.8})};return s.jsxs("div",{className:"nf-row",id:r,children:[s.jsxs("div",{className:"nf-row-header",children:[s.jsx("h2",{className:"nf-row-title",children:u}),d&&s.jsx("span",{className:"nf-explore",children:"Explore all →"})]}),s.jsx("button",{className:"nf-scroll-btn left",onClick:()=>p("left"),"aria-label":"Scroll left",children:s.jsx(Qm,{})}),s.jsx("div",{className:"nf-row-scroller",ref:h,children:o}),s.jsx("button",{className:"nf-scroll-btn right",onClick:()=>p("right"),"aria-label":"Scroll right",children:s.jsx(Zm,{})})]})}function no({show:r,rank:u,wide:d,progress:o,onOpen:h,inList:p,onToggleList:y}){return s.jsxs("div",{className:`nf-card ${d?"nf-continue":""}`,style:u?{marginLeft:56,flex:"0 0 240px"}:void 0,onClick:h,children:[u&&s.jsx("span",{className:"nf-card-rank",children:u}),s.jsx("div",{className:"nf-card-cover",style:{background:r.cover},children:r.logo?s.jsx("img",{src:`/${r.logo}`,alt:r.artist}):r.initials}),o!==void 0&&s.jsx("div",{className:"nf-progress",children:s.jsx("div",{className:"nf-progress-fill",style:{width:`${o}%`}})}),s.jsxs("div",{className:"nf-card-overlay",children:[s.jsx("div",{className:"nf-card-title",children:r.title}),s.jsxs("div",{className:"nf-card-meta",children:[s.jsxs("span",{className:"nf-tag",children:[r.match,"% Match"]}),s.jsx("span",{className:"nf-match",children:"HD"}),s.jsx("span",{children:r.period})]}),s.jsxs("div",{className:"nf-card-actions",children:[s.jsx("button",{className:"nf-icon-btn primary",onClick:E=>{E.stopPropagation(),h()},"aria-label":"Play",children:s.jsx(Et,{size:10})}),s.jsx("button",{className:"nf-icon-btn",onClick:y,"aria-label":"Add to list",children:p?s.jsx(b1,{size:10}):s.jsx(As,{size:10})}),s.jsx("button",{className:"nf-icon-btn",onClick:E=>E.stopPropagation(),"aria-label":"Like",children:s.jsx(E1,{size:10})}),s.jsx("button",{className:"nf-icon-btn",style:{marginLeft:"auto"},onClick:E=>{E.stopPropagation(),h()},"aria-label":"More info",children:s.jsx(Xm,{size:10})})]})]})]})}const ms={title:mt.name,artist:ys,initials:mt.name,logo:mt.logo,cover:mt.coverBg,period:"2025",bullets:mt.bullets,match:99,tag:"Original Film",type:"project"};function Bg(){const[r,u]=T.useState(null),[d,o]=T.useState(new Set);T.useEffect(()=>{document.title=`${ys} | RO+`},[]),T.useEffect(()=>(document.body.style.overflow=r?"hidden":"",()=>{document.body.style.overflow=""}),[r]);const h=y=>E=>{E.stopPropagation(),o(x=>{const g=new Set(x);return g.has(y.title)?g.delete(y.title):g.add(y.title),g})},p=$p[0];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Cg}),s.jsxs("div",{className:"nf-page",children:[s.jsxs("section",{className:"nf-hero",children:[s.jsx("div",{className:"nf-hero-photo",style:{backgroundImage:"url(/ro.jpg)"}}),s.jsxs("div",{className:"nf-hero-content",children:[s.jsxs("div",{className:"nf-hero-badge",children:[s.jsx("span",{className:"n-mark",children:"N"})," SERIES"]}),s.jsx("h1",{className:"nf-hero-title",children:ys}),s.jsxs("div",{className:"nf-hero-meta",children:[s.jsx("span",{className:"nf-tag",children:"98% Match"}),s.jsx("span",{children:"2020 – Present"}),s.jsx("span",{className:"nf-match",children:"TV-MA"}),s.jsx("span",{className:"nf-match",children:"HD"}),s.jsxs("span",{children:[A1.length," Seasons"]})]}),s.jsx("p",{className:"nf-hero-desc",children:Og}),s.jsxs("div",{className:"nf-hero-actions",children:[s.jsxs("button",{className:"nf-btn nf-btn-play",onClick:()=>u(p),children:[s.jsx(Et,{})," Play"]}),s.jsxs("button",{className:"nf-btn nf-btn-info",onClick:()=>u(p),children:[s.jsx(Wm,{})," More Info"]})]})]})]}),s.jsxs("div",{className:"nf-rows",children:[s.jsxs(lo,{title:"Continue Watching",children:[s.jsx(no,{show:p,wide:!0,progress:72,onOpen:()=>u(p),inList:d.has(p.title),onToggleList:h(p)}),s.jsx(no,{show:ms,wide:!0,progress:45,onOpen:()=>u(ms),inList:d.has(ms.title),onToggleList:h(ms)})]}),s.jsx(lo,{title:"Trending Now",children:$p.map(y=>s.jsx(no,{show:y,onOpen:()=>u(y),inList:d.has(y.title),onToggleList:h(y)},`t-${y.title}`))}),s.jsx(lo,{title:"Browse by Genre",children:Object.entries(kg).map(([y,E])=>s.jsxs("div",{className:"nf-skill-card",children:[s.jsxs("div",{children:[s.jsx("div",{className:"nf-skill-category",children:y}),s.jsx("div",{className:"nf-skill-list",children:E.join(" · ")})]}),s.jsxs("div",{style:{fontSize:11,color:"#666"},children:[E.length," titles"]})]},y))}),s.jsx("div",{className:"nf-row-header",children:s.jsx("h2",{className:"nf-row-title",children:"RO+ Originals"})}),s.jsxs("div",{className:"nf-featured",children:[s.jsx("div",{className:"nf-featured-cover",style:{background:mt.coverBg},children:s.jsx("img",{src:`/${mt.logo}`,alt:mt.name})}),s.jsxs("div",{className:"nf-featured-body",children:[s.jsx("div",{className:"nf-featured-tag",children:"RO+ Original"}),s.jsx("div",{className:"nf-featured-title",children:mt.name}),s.jsxs("div",{className:"nf-featured-meta",children:["2025 · ",mt.role]}),s.jsx("div",{className:"nf-featured-desc",children:mt.bullets[0]}),s.jsxs("a",{href:mt.url,target:"_blank",rel:"noopener noreferrer",className:"nf-featured-link",children:[mt.url.replace("https://","").replace(/\/$/,"")," ↗"]})]})]}),s.jsx("div",{className:"nf-row-header",children:s.jsx("h2",{className:"nf-row-title",children:"Academy Award Nominees"})}),s.jsxs("div",{className:"nf-edu",children:[s.jsxs("div",{className:"nf-edu-badge",children:["CSUF",s.jsx("br",{}),"Computer Science"]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:12,color:"#E50914",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6},children:"Limited Series · 4 Seasons"}),s.jsx("div",{style:{fontSize:22,fontWeight:800,marginBottom:4},children:Qp.degree}),s.jsx("div",{style:{fontSize:14,color:"#999"},children:Qp.school})]})]}),s.jsxs("div",{className:"nf-footer",children:[s.jsxs("div",{style:{marginBottom:16},children:[s.jsx(de,{to:"/",children:"Home"}),s.jsx(de,{to:"/resume",children:"Resume"}),s.jsx(de,{to:"/spotify",children:"Spotify Resume"}),s.jsx(de,{to:"/projects",children:"Projects"})]}),s.jsxs("div",{children:["RO+ is a parody. © ",new Date().getFullYear()," ",ys,"."]})]})]}),r&&s.jsx("div",{className:"nf-modal-backdrop",onClick:()=>u(null),children:s.jsxs("div",{className:"nf-modal",onClick:y=>y.stopPropagation(),children:[s.jsx("button",{className:"nf-modal-close",onClick:()=>u(null),"aria-label":"Close",children:"✕"}),s.jsxs("div",{className:"nf-modal-hero",style:{background:r.cover},children:[r.logo&&s.jsx("div",{className:"nf-modal-hero-logo",children:s.jsx("img",{src:`/${r.logo}`,alt:r.artist})}),s.jsxs("div",{className:"nf-modal-title-stack",children:[s.jsx("h2",{className:"nf-modal-title",children:r.title}),s.jsxs("div",{className:"nf-modal-actions",children:[s.jsxs("button",{className:"nf-btn nf-btn-play",children:[s.jsx(Et,{})," Play"]}),s.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},onClick:()=>{o(y=>{const E=new Set(y);return E.has(r.title)?E.delete(r.title):E.add(r.title),E})},children:d.has(r.title)?s.jsx(b1,{}):s.jsx(As,{})}),s.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},children:s.jsx(E1,{})}),s.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40,marginLeft:"auto"},children:s.jsx(tg,{})})]})]})]}),s.jsxs("div",{className:"nf-modal-content",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"nf-modal-meta-line",children:[s.jsxs("span",{className:"nf-tag",children:[r.match,"% Match"]}),s.jsx("span",{children:r.period}),s.jsx("span",{className:"nf-match",children:"TV-MA"}),s.jsx("span",{className:"nf-match",children:"HD"}),s.jsxs("span",{children:[r.bullets.length," Episodes"]})]}),r.summary&&s.jsx("div",{className:"nf-modal-summary",children:r.summary}),s.jsx("ul",{className:"nf-modal-bullets",children:r.bullets.map((y,E)=>s.jsx("li",{children:y},E))})]}),s.jsxs("div",{className:"nf-modal-side",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Starring:"})," ",r.artist]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Genre:"})," ",r.tag]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Period:"})," ",r.period]}),s.jsxs("div",{style:{marginTop:12,color:"#666",fontSize:11},children:["This series is: ",s.jsx("strong",{style:{color:"#999"},children:"Ambitious, Technical, Inspiring"})]})]})]})]})})]})]})}const{name:Qn,email:io,website:Kp,phone:Ug,summary:Hg,experience:fo,skills:po,project:la,education:Jp}=Pn,se="#76B900",so="#5a8f00",Ll="#1a1a1a",Wp="#0f0f0f",Ze="#2a2a2a",qg=`
  .nv-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0a0a0a;
    color: #e5e5e5;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .nv-page * { box-sizing: border-box; }

  /* ============ Header ============ */
  .nv-header {
    background: #000;
    border-bottom: 1px solid ${Ze};
    padding: 0 24px;
    height: 56px;
    display: flex;
    align-items: center;
    gap: 32px;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .nv-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #fff;
  }

  .nv-brand-eye {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, ${se} 0%, ${so} 50%, #1a3300 100%);
    box-shadow: 0 0 12px rgba(118, 185, 0, 0.5);
  }

  .nv-brand-text {
    font-weight: 900;
    font-size: 18px;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }

  .nv-brand-text span { color: ${se}; }

  .nv-tabs {
    display: flex;
    gap: 4px;
    flex: 1;
  }

  .nv-tab {
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 600;
    color: #b3b3b3;
    background: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: 2px;
    transition: color 0.15s, background 0.15s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .nv-tab:hover { color: #fff; background: rgba(255,255,255,0.05); }
  .nv-tab.active { color: ${se}; border-bottom: 2px solid ${se}; border-radius: 0; }

  .nv-user {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 12px;
    background: ${Ll};
    border: 1px solid ${Ze};
    border-radius: 4px;
    font-size: 12px;
    color: #d6d6d6;
  }

  .nv-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${se};
    box-shadow: 0 0 8px ${se};
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* ============ Container ============ */
  .nv-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 24px;
    width: 100%;
  }

  /* ============ Hero ============ */
  .nv-hero {
    background:
      radial-gradient(ellipse at top right, rgba(118, 185, 0, 0.15) 0%, transparent 60%),
      linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
    border: 1px solid ${Ze};
    border-radius: 8px;
    padding: 32px;
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 32px;
    position: relative;
    overflow: hidden;
  }

  .nv-hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: ${se};
    box-shadow: 0 0 24px ${se};
  }

  .nv-hero-eyebrow {
    font-size: 11px;
    font-weight: 700;
    color: ${se};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .nv-hero-title {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1.05;
    color: #fff;
    margin: 0 0 12px;
  }

  .nv-hero-title em {
    font-style: normal;
    color: ${se};
  }

  .nv-hero-sub {
    font-size: 14px;
    line-height: 1.6;
    color: #b3b3b3;
    margin: 0 0 20px;
  }

  .nv-hero-cta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .nv-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.15s, transform 0.05s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-decoration: none;
    border: none;
  }

  .nv-btn-primary {
    background: ${se};
    color: #000;
  }

  .nv-btn-primary:hover { background: #84d100; }
  .nv-btn-primary:active { transform: translateY(1px); }

  .nv-btn-ghost {
    background: transparent;
    color: #fff;
    border: 1px solid ${Ze};
  }

  .nv-btn-ghost:hover { border-color: ${se}; color: ${se}; }

  /* Benchmark score */
  .nv-score {
    background: ${Wp};
    border: 1px solid ${Ze};
    border-radius: 6px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .nv-score-label {
    font-size: 11px;
    font-weight: 700;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .nv-score-value {
    font-size: 64px;
    font-weight: 900;
    color: ${se};
    line-height: 1;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 24px rgba(118, 185, 0, 0.4);
  }

  .nv-score-unit {
    font-size: 18px;
    color: #b3b3b3;
    font-weight: 600;
    margin-left: 4px;
  }

  .nv-score-sub {
    font-size: 12px;
    color: #b3b3b3;
    margin-top: 8px;
  }

  .nv-score-bar {
    width: 100%;
    height: 6px;
    background: #2a2a2a;
    border-radius: 3px;
    margin-top: 16px;
    overflow: hidden;
  }

  .nv-score-fill {
    height: 100%;
    width: 94%;
    background: linear-gradient(90deg, ${so}, ${se});
    border-radius: 3px;
    box-shadow: 0 0 8px ${se};
  }

  /* ============ Stats Grid ============ */
  .nv-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }

  .nv-stat-card {
    background: ${Ll};
    border: 1px solid ${Ze};
    border-radius: 6px;
    padding: 16px;
    position: relative;
    overflow: hidden;
  }

  .nv-stat-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: ${se};
    opacity: 0.6;
  }

  .nv-stat-icon {
    color: ${se};
    font-size: 16px;
    margin-bottom: 8px;
  }

  .nv-stat-label {
    font-size: 11px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  .nv-stat-value {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  .nv-stat-unit {
    font-size: 12px;
    color: #b3b3b3;
    font-weight: 600;
    margin-left: 3px;
  }

  /* ============ Section ============ */
  .nv-section {
    margin-bottom: 24px;
  }

  .nv-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .nv-section-title {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nv-section-title::before {
    content: '';
    width: 3px;
    height: 16px;
    background: ${se};
    border-radius: 1px;
  }

  .nv-section-sub {
    font-size: 12px;
    color: #b3b3b3;
  }

  /* ============ Benchmark Cards ============ */
  .nv-benchmarks {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .nv-bench {
    background: ${Ll};
    border: 1px solid ${Ze};
    border-radius: 6px;
    padding: 20px;
    transition: border-color 0.15s, transform 0.15s;
  }

  .nv-bench:hover {
    border-color: ${se};
  }

  .nv-bench-head {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }

  .nv-bench-logo {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${Ze};
    overflow: hidden;
  }

  .nv-bench-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 6px;
  }

  .nv-bench-meta {
    flex: 1;
    min-width: 0;
  }

  .nv-bench-title {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    margin: 0 0 4px;
    line-height: 1.2;
  }

  .nv-bench-company {
    font-size: 13px;
    color: ${se};
    font-weight: 700;
    margin-bottom: 4px;
  }

  .nv-bench-loc {
    font-size: 12px;
    color: #b3b3b3;
  }

  .nv-bench-score {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
  }

  .nv-bench-score-num {
    font-size: 28px;
    font-weight: 900;
    color: ${se};
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .nv-bench-score-label {
    font-size: 10px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 4px;
  }

  .nv-bench-bar {
    height: 4px;
    background: #0a0a0a;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .nv-bench-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, ${so}, ${se});
    border-radius: 2px;
    transition: width 1s ease-out;
    box-shadow: 0 0 6px ${se};
  }

  .nv-bench-summary {
    font-size: 13px;
    color: #d6d6d6;
    line-height: 1.6;
    padding: 12px;
    background: ${Wp};
    border-left: 2px solid ${se};
    border-radius: 0 4px 4px 0;
    margin-bottom: 12px;
  }

  .nv-bench-bullets {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .nv-bench-bullets li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: #b3b3b3;
    line-height: 1.55;
  }

  .nv-bench-bullets li::before {
    content: '▸';
    color: ${se};
    font-size: 12px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* ============ Specs Grid ============ */
  .nv-specs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 12px;
  }

  .nv-spec-card {
    background: ${Ll};
    border: 1px solid ${Ze};
    border-radius: 6px;
    padding: 16px;
  }

  .nv-spec-head {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 700;
    color: ${se};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${Ze};
  }

  .nv-spec-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .nv-spec-chip {
    font-size: 12px;
    color: #fff;
    background: #0a0a0a;
    border: 1px solid ${Ze};
    padding: 4px 10px;
    border-radius: 2px;
    font-weight: 600;
    transition: border-color 0.15s, color 0.15s;
  }

  .nv-spec-chip:hover {
    border-color: ${se};
    color: ${se};
  }

  /* ============ Process / Project ============ */
  .nv-process {
    background: ${Ll};
    border: 1px solid ${Ze};
    border-radius: 6px;
    padding: 24px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 20px;
    align-items: center;
  }

  .nv-proc-logo {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    border: 1px solid ${Ze};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .nv-proc-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 8px;
  }

  .nv-proc-info {
    min-width: 0;
  }

  .nv-proc-title {
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 4px;
  }

  .nv-proc-role {
    font-size: 13px;
    color: ${se};
    font-weight: 700;
    margin-bottom: 4px;
  }

  .nv-proc-tech {
    font-size: 12px;
    color: #b3b3b3;
    margin-bottom: 12px;
  }

  .nv-proc-bullets {
    display: flex;
    flex-direction: column;
    gap: 6px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nv-proc-bullets li {
    display: flex;
    gap: 10px;
    font-size: 13px;
    color: #b3b3b3;
    line-height: 1.55;
  }

  .nv-proc-bullets li::before {
    content: '▸';
    color: ${se};
    flex-shrink: 0;
  }

  .nv-proc-gauge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .nv-gauge {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .nv-gauge svg {
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
  }

  .nv-gauge-bg { stroke: ${Ze}; }
  .nv-gauge-fg { stroke: ${se}; filter: drop-shadow(0 0 4px ${se}); }

  .nv-gauge-text {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    color: #fff;
  }

  .nv-gauge-num {
    font-size: 22px;
    line-height: 1;
    color: ${se};
    font-variant-numeric: tabular-nums;
  }

  .nv-gauge-unit {
    font-size: 10px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 2px;
  }

  /* ============ System Info ============ */
  .nv-sysinfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .nv-info-card {
    background: ${Ll};
    border: 1px solid ${Ze};
    border-radius: 6px;
    padding: 16px;
  }

  .nv-info-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid ${Ze};
    font-size: 13px;
  }

  .nv-info-row:last-child { border-bottom: none; }
  .nv-info-row .lbl { color: #b3b3b3; }
  .nv-info-row .val { color: #fff; font-weight: 600; }

  .nv-info-row .val a { color: ${se}; text-decoration: none; }
  .nv-info-row .val a:hover { text-decoration: underline; }

  /* ============ Footer ============ */
  .nv-footer {
    text-align: center;
    padding: 24px;
    font-size: 11px;
    color: #5a5a5a;
    border-top: 1px solid ${Ze};
    margin-top: 24px;
  }

  /* ============ Mobile ============ */
  @media (max-width: 900px) {
    .nv-hero { grid-template-columns: minmax(0, 1fr); gap: 20px; padding: 24px; }
    .nv-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .nv-sysinfo { grid-template-columns: minmax(0, 1fr); }
    .nv-tabs { display: none; }
    .nv-process {
      grid-template-columns: minmax(0, 1fr);
      text-align: left;
      gap: 16px;
    }
    .nv-proc-logo { width: 64px; height: 64px; }
    .nv-proc-gauge { flex-direction: row; align-self: flex-start; gap: 12px; flex-wrap: wrap; }
  }

  @media (max-width: 600px) {
    .nv-container { padding: 12px; }
    .nv-header { padding: 0 12px; gap: 12px; height: 52px; }
    .nv-user { display: none; }
    .nv-brand-text { font-size: 15px; }
    .nv-hero { padding: 20px; }
    .nv-hero-sub { font-size: 13px; }
    .nv-score { padding: 16px; }
    .nv-score-value { font-size: 44px; }
    .nv-score-unit { font-size: 14px; }
    .nv-section-header { flex-direction: column; align-items: flex-start; gap: 4px; }
    .nv-section-sub { font-size: 11px; }
    .nv-bench { padding: 14px; }
    .nv-bench-head { gap: 10px; flex-wrap: wrap; }
    .nv-bench-logo { width: 44px; height: 44px; }
    .nv-bench-meta { flex-basis: calc(100% - 54px); }
    .nv-bench-score { flex-direction: row; align-items: baseline; gap: 6px; margin-top: 2px; }
    .nv-bench-score-num { font-size: 20px; }
    .nv-bench-score-label { margin-top: 0; }
    .nv-bench-title { font-size: 14px; }
    .nv-bench-summary { font-size: 12px; padding: 10px; }
    .nv-bench-bullets li { font-size: 12px; }
    .nv-stat-card { padding: 12px; }
    .nv-stat-value { font-size: 16px; }
    .nv-stat-label { font-size: 10px; }
    .nv-spec-card { padding: 12px; }
    .nv-process { padding: 16px; }
    .nv-proc-title { font-size: 18px; }
    .nv-proc-bullets li { font-size: 12px; }
    .nv-gauge { width: 80px; height: 80px; }
    .nv-gauge-num { font-size: 18px; }
    .nv-info-row { font-size: 12px; flex-wrap: wrap; gap: 4px; }
    .nv-info-row .val { word-break: break-all; }
    .nv-footer { font-size: 10px; padding: 16px 12px; }
  }
`,Lg=[1.6,1.3,1,.9];function Yg(r,u){const d=Lg[u]??.8;return Math.round(r*600*d)}const $n=fo.map((r,u)=>Yg(r.bullets.length,u)),Gg=Math.max(...$n,1),M1=Object.values(po).flat().length,Vg=$n.reduce((r,u)=>r+u,0)+M1*30+la.bullets.length*150;function Fp({value:r,label:u}){const o=2*Math.PI*40,h=o-r/100*o;return s.jsxs("div",{className:"nv-gauge",children:[s.jsxs("svg",{viewBox:"0 0 96 96",children:[s.jsx("circle",{cx:"48",cy:"48",r:40,fill:"none",strokeWidth:"8",className:"nv-gauge-bg"}),s.jsx("circle",{cx:"48",cy:"48",r:40,fill:"none",strokeWidth:"8",className:"nv-gauge-fg",strokeDasharray:o,strokeDashoffset:h,strokeLinecap:"round"})]}),s.jsxs("div",{className:"nv-gauge-text",children:[s.jsxs("span",{className:"nv-gauge-num",children:[r,"%"]}),s.jsx("span",{className:"nv-gauge-unit",children:u})]})]})}function Xg(){const[r,u]=T.useState(0),d=Object.values(po).flat().length,o=6;T.useEffect(()=>{document.title=`${Qn} | RTX Engineering Edition`;const p=setTimeout(()=>u(87),300);return()=>clearTimeout(p)},[]);const h={Languages:s.jsx(Im,{}),"Frameworks / Libraries":s.jsx(Dp,{}),Infrastructure:s.jsx(Op,{}),Observability:s.jsx(Pm,{}),"Machine Learning":s.jsx(_p,{}),Tools:s.jsx(Vm,{})};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:qg}),s.jsxs("div",{className:"nv-page",children:[s.jsxs("header",{className:"nv-header",children:[s.jsxs(de,{to:"/",className:"nv-brand",children:[s.jsx("div",{className:"nv-brand-eye"}),s.jsxs("div",{className:"nv-brand-text",children:[s.jsx("span",{children:"RTX"})," ENGINE"]})]}),s.jsxs("nav",{className:"nv-tabs",children:[s.jsx("a",{className:"nv-tab active",href:"#dashboard",children:"Dashboard"}),s.jsx("a",{className:"nv-tab",href:"#performance",children:"Performance"}),s.jsx("a",{className:"nv-tab",href:"#specs",children:"Specifications"}),s.jsx("a",{className:"nv-tab",href:"#workload",children:"Workload"}),s.jsx("a",{className:"nv-tab",href:"#system",children:"System"})]}),s.jsxs("div",{className:"nv-user",children:[s.jsx("span",{className:"nv-status-dot"}),"ONLINE · ",Qn.split(" ")[0].toUpperCase()]})]}),s.jsxs("div",{className:"nv-container",children:[s.jsxs("section",{className:"nv-hero",id:"dashboard",children:[s.jsxs("div",{children:[s.jsx("div",{className:"nv-hero-eyebrow",children:"RTX RO · Engineering Edition"}),s.jsxs("h1",{className:"nv-hero-title",children:[Qn.split(" ")[0]," ",s.jsx("em",{children:Qn.split(" ")[1]})]}),s.jsx("p",{className:"nv-hero-sub",children:Hg}),s.jsxs("div",{className:"nv-hero-cta",children:[s.jsxs("a",{href:`mailto:${io}`,className:"nv-btn nv-btn-primary",children:[s.jsx(Et,{})," Launch Contact"]}),s.jsxs(de,{to:"/resume",className:"nv-btn nv-btn-ghost",children:[s.jsx(Jm,{})," Download Resume"]})]})]}),s.jsxs("div",{className:"nv-score",children:[s.jsx("div",{className:"nv-score-label",children:"Benchmark Score"}),s.jsxs("div",{children:[s.jsx("span",{className:"nv-score-value",children:Vg.toLocaleString()}),s.jsx("span",{className:"nv-score-unit",children:"pts"})]}),s.jsxs("div",{className:"nv-score-sub",children:[$n.length," deployments · ",M1," compute cores"]}),s.jsx("div",{className:"nv-score-bar",children:s.jsx("div",{className:"nv-score-fill"})})]})]}),s.jsxs("section",{className:"nv-stats",children:[s.jsxs("div",{className:"nv-stat-card",children:[s.jsx("div",{className:"nv-stat-icon",children:s.jsx(_p,{})}),s.jsx("div",{className:"nv-stat-label",children:"Compute Cores"}),s.jsxs("div",{className:"nv-stat-value",children:[d,s.jsx("span",{className:"nv-stat-unit",children:"tech"})]})]}),s.jsxs("div",{className:"nv-stat-card",children:[s.jsx("div",{className:"nv-stat-icon",children:s.jsx(Fm,{})}),s.jsx("div",{className:"nv-stat-label",children:"Years Active"}),s.jsxs("div",{className:"nv-stat-value",children:[o,s.jsx("span",{className:"nv-stat-unit",children:"yrs"})]})]}),s.jsxs("div",{className:"nv-stat-card",children:[s.jsx("div",{className:"nv-stat-icon",children:s.jsx(Op,{})}),s.jsx("div",{className:"nv-stat-label",children:"Deployments"}),s.jsxs("div",{className:"nv-stat-value",children:[fo.length+1,s.jsx("span",{className:"nv-stat-unit",children:"prod"})]})]}),s.jsxs("div",{className:"nv-stat-card",children:[s.jsx("div",{className:"nv-stat-icon",children:s.jsx(eg,{})}),s.jsx("div",{className:"nv-stat-label",children:"Thermals"}),s.jsx("div",{className:"nv-stat-value",style:{color:se},children:"NOMINAL"})]})]}),s.jsxs("section",{className:"nv-section",id:"performance",children:[s.jsxs("div",{className:"nv-section-header",children:[s.jsx("h2",{className:"nv-section-title",children:"Performance Benchmarks"}),s.jsx("span",{className:"nv-section-sub",children:"Per-deployment results · synthetic + real-world"})]}),s.jsx("div",{className:"nv-benchmarks",children:fo.map((p,y)=>s.jsxs("div",{className:"nv-bench",children:[s.jsxs("div",{className:"nv-bench-head",children:[s.jsx("div",{className:"nv-bench-logo",style:{background:p.coverBg},children:p.logo&&s.jsx("img",{src:`/${p.logo}`,alt:p.company})}),s.jsxs("div",{className:"nv-bench-meta",children:[s.jsx("h3",{className:"nv-bench-title",children:p.title}),s.jsx("div",{className:"nv-bench-company",children:p.company}),s.jsxs("div",{className:"nv-bench-loc",children:[p.location," · ",p.period]})]}),s.jsxs("div",{className:"nv-bench-score",children:[s.jsx("div",{className:"nv-bench-score-num",children:$n[y].toLocaleString()}),s.jsx("div",{className:"nv-bench-score-label",children:"benchmark"})]})]}),s.jsx("div",{className:"nv-bench-bar",children:s.jsx("div",{className:"nv-bench-bar-fill",style:{width:`${Math.round($n[y]/Gg*100)}%`}})}),p.summary&&s.jsx("div",{className:"nv-bench-summary",children:p.summary}),s.jsx("ul",{className:"nv-bench-bullets",children:p.bullets.map((E,x)=>s.jsx("li",{children:E},x))})]},p.company))})]}),s.jsxs("section",{className:"nv-section",id:"specs",children:[s.jsxs("div",{className:"nv-section-header",children:[s.jsx("h2",{className:"nv-section-title",children:"System Specifications"}),s.jsx("span",{className:"nv-section-sub",children:"Driver version: 2026.05"})]}),s.jsx("div",{className:"nv-specs",children:Object.entries(po).map(([p,y])=>s.jsxs("div",{className:"nv-spec-card",children:[s.jsxs("div",{className:"nv-spec-head",children:[h[p]??s.jsx(Dp,{})," ",p]}),s.jsx("div",{className:"nv-spec-list",children:y.map(E=>s.jsx("span",{className:"nv-spec-chip",children:E},E))})]},p))})]}),s.jsxs("section",{className:"nv-section",id:"workload",children:[s.jsxs("div",{className:"nv-section-header",children:[s.jsxs("h2",{className:"nv-section-title",children:[s.jsx($m,{style:{color:se,fontSize:8,marginRight:4}}),"Active Workload"]}),s.jsx("span",{className:"nv-section-sub",children:"PID 0x01 · live process"})]}),s.jsxs("div",{className:"nv-process",children:[s.jsx("div",{className:"nv-proc-logo",style:{background:la.coverBg},children:s.jsx("img",{src:`/${la.logo}`,alt:la.name})}),s.jsxs("div",{className:"nv-proc-info",children:[s.jsx("h3",{className:"nv-proc-title",children:la.name}),s.jsx("div",{className:"nv-proc-role",children:la.role}),s.jsx("div",{className:"nv-proc-tech",children:la.tech}),s.jsx("ul",{className:"nv-proc-bullets",children:la.bullets.map((p,y)=>s.jsx("li",{children:p},y))}),s.jsxs("a",{href:la.url,target:"_blank",rel:"noopener noreferrer",className:"nv-btn nv-btn-ghost",style:{marginTop:16},children:[s.jsx(Et,{})," Open Process"]})]}),s.jsxs("div",{className:"nv-proc-gauge",children:[s.jsx(Fp,{value:r,label:"Utilization"}),s.jsx(Fp,{value:92,label:"Memory"})]})]})]}),s.jsxs("section",{className:"nv-section",id:"system",children:[s.jsx("div",{className:"nv-section-header",children:s.jsx("h2",{className:"nv-section-title",children:"System Information"})}),s.jsxs("div",{className:"nv-sysinfo",children:[s.jsxs("div",{className:"nv-info-card",children:[s.jsxs("div",{className:"nv-spec-head",children:[s.jsx(v1,{})," Training Data"]}),s.jsxs("div",{className:"nv-info-row",children:[s.jsx("span",{className:"lbl",children:"Degree"}),s.jsx("span",{className:"val",children:Jp.degree})]}),s.jsxs("div",{className:"nv-info-row",children:[s.jsx("span",{className:"lbl",children:"Institution"}),s.jsx("span",{className:"val",children:Jp.school})]}),s.jsxs("div",{className:"nv-info-row",children:[s.jsx("span",{className:"lbl",children:"Architecture"}),s.jsx("span",{className:"val",children:"Computer Science"})]})]}),s.jsxs("div",{className:"nv-info-card",children:[s.jsxs("div",{className:"nv-spec-head",children:[s.jsx(yo,{})," Contact Interfaces"]}),s.jsxs("div",{className:"nv-info-row",children:[s.jsx("span",{className:"lbl",children:"Email"}),s.jsx("span",{className:"val",children:s.jsx("a",{href:`mailto:${io}`,children:io})})]}),s.jsxs("div",{className:"nv-info-row",children:[s.jsx("span",{className:"lbl",children:"Website"}),s.jsx("span",{className:"val",children:s.jsx("a",{href:`https://${Kp}`,target:"_blank",rel:"noopener noreferrer",children:Kp})})]}),s.jsxs("div",{className:"nv-info-row",children:[s.jsx("span",{className:"lbl",children:"Phone"}),s.jsx("span",{className:"val",children:Ug})]})]})]})]})]}),s.jsxs("footer",{className:"nv-footer",children:["© ",new Date().getFullYear()," ",Qn," · RTX Engineering Edition · Driver build 2026.05"]})]})]})}const Qg=`
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
`,gs="/";function Zg(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Qg}),s.jsx("div",{className:"sq-page",children:s.jsxs("div",{className:"sq-inner",children:[s.jsxs("div",{className:"sq-header",children:[s.jsxs("div",{className:"sq-header-left",children:[s.jsxs("div",{className:"sq-app-name",children:["Side",s.jsx("span",{children:"Quest"})]}),s.jsx("div",{className:"sq-tagline",children:"iOS Job Marketplace - Full-Stack Solo Project"})]}),s.jsxs("div",{className:"sq-header-right",children:[s.jsx("div",{className:"sq-role-badge",children:"iOS + Backend"}),s.jsx("p",{children:"sidequestapp.io"}),s.jsx("p",{children:"rosendoinzunza@gmail.com"}),s.jsx("p",{children:"Beta Launch - May 2026"})]})]}),s.jsxs("div",{className:"sq-sections",children:[s.jsxs("div",{className:"sq-section layout-full",children:[s.jsxs("div",{className:"sq-section-text",children:[s.jsx("div",{className:"sq-section-number",children:"01 - Discover Jobs"}),s.jsx("div",{className:"sq-section-title",children:"Swipe to Apply"}),s.jsx("div",{className:"sq-section-desc",children:"Applicants browse job listings through a swipeable card deck. Swipe right to apply, left to pass - a familiar, low-friction interaction that makes job hunting feel less like work."})]}),s.jsx("div",{className:"sq-screenshot tall",children:s.jsx("img",{src:`${gs}Applicant_feed_view.png`,alt:"Applicant feed view"})})]}),s.jsx("div",{className:"sq-divider"}),s.jsxs("div",{className:"sq-section-text",children:[s.jsx("div",{className:"sq-section-number",children:"02 - Two-Sided Marketplace"}),s.jsx("div",{className:"sq-section-title",children:"Built for Both Sides"}),s.jsx("div",{className:"sq-section-desc",children:"Businesses post listings and move applicants through a hiring pipeline (Interested → Hired). Applicants track every application in one place, with active and archived views."})]}),s.jsxs("div",{className:"sq-two-up",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sq-two-up-label",children:"Business - Listings"}),s.jsx("div",{className:"sq-screenshot medium",children:s.jsx("img",{src:`${gs}biz_listings.view.png`,alt:"Business listings view"})})]}),s.jsxs("div",{children:[s.jsx("div",{className:"sq-two-up-label",children:"Applicant - Quests"}),s.jsx("div",{className:"sq-screenshot medium",children:s.jsx("img",{src:`${gs}applicant_quests_view.png`,alt:"Applicant quests view"})})]})]}),s.jsx("div",{className:"sq-divider"}),s.jsxs("div",{className:"sq-section layout-chat",children:[s.jsx("div",{className:"sq-screenshot short",children:s.jsx("img",{src:`${gs}conversation_view.png`,alt:"Conversation view"})}),s.jsxs("div",{className:"sq-section-text",children:[s.jsx("div",{className:"sq-section-number",children:"03 - Real-Time Messaging"}),s.jsx("div",{className:"sq-section-title",children:"Chat When It Clicks"}),s.jsx("div",{className:"sq-section-desc",children:"In-app messaging connects businesses and applicants the moment there's mutual interest. Live updates via WebSocket, typing indicators, read receipts, and push notifications keep conversations moving."})]})]})]}),s.jsx("div",{className:"sq-divider"}),s.jsxs("div",{children:[s.jsx("div",{className:"sq-stack-label",children:"Under the Hood"}),s.jsxs("div",{className:"sq-hood-grid",children:[s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"JWT + Refresh Token Rotation"}),s.jsx("div",{className:"sq-hood-desc",children:"Short-lived access tokens with silent refresh - users stay logged in without re-authenticating."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"Apple & Google SSO"}),s.jsx("div",{className:"sq-hood-desc",children:"Native OAuth flows on iOS alongside email/password auth, all sharing the same session pipeline."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"WebSocket Messaging"}),s.jsx("div",{className:"sq-hood-desc",children:"Live chat with a polling fallback - messages arrive instantly without requiring a page refresh."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"Per-Route Rate Limiting"}),s.jsx("div",{className:"sq-hood-desc",children:"Sliding window limiter keyed by IP, with separate thresholds for auth vs. registration routes."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"Stripe + RevenueCat"}),s.jsx("div",{className:"sq-hood-desc",children:"Stripe for business subscriptions, RevenueCat for applicant in-app purchases - two billing surfaces, one codebase."})]}),s.jsxs("div",{className:"sq-hood-item",children:[s.jsx("div",{className:"sq-hood-title",children:"AWS S3 Media Uploads"}),s.jsx("div",{className:"sq-hood-desc",children:"Profile photos and video intros upload directly to S3, keeping the API server stateless."})]})]})]}),s.jsx("div",{className:"sq-divider"}),s.jsxs("div",{children:[s.jsx("div",{className:"sq-stack-label",children:"Built with"}),s.jsx("div",{className:"sq-stack-chips",children:["SwiftUI (MVVM)","Rust / Axum","PostgreSQL","JWT Auth","Stripe","RevenueCat","WebSockets","Push Notifications","AWS S3","TestFlight"].map(r=>s.jsx("span",{className:"sq-chip",children:r},r))})]})]})})]})}c2.createRoot(document.getElementById("root")).render(s.jsx(Da.StrictMode,{children:s.jsx(Nm,{basename:"/",children:s.jsxs(em,{children:[s.jsx(aa,{path:"/",element:s.jsx(fg,{})}),s.jsx(aa,{path:"/about",element:s.jsx(hg,{})}),s.jsx(aa,{path:"/resume",element:s.jsx(jg,{})}),s.jsx(aa,{path:"/spotify",element:s.jsx(Tg,{})}),s.jsx(aa,{path:"/spotify/:slug",element:s.jsx(_g,{})}),s.jsx(aa,{path:"/netflix",element:s.jsx(Bg,{})}),s.jsx(aa,{path:"/nvidia",element:s.jsx(Xg,{})}),s.jsx(aa,{path:"/projects",element:s.jsx(Zg,{})})]})})}));
