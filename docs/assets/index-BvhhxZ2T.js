(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function d(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(h){if(h.ep)return;h.ep=!0;const p=d(h);fetch(h.href,p)}})();function f0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pc={exports:{}},$n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function c2(){if(Np)return $n;Np=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(o,h,p){var y=null;if(p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),"key"in h){p={};for(var E in h)E!=="key"&&(p[E]=h[E])}else p=h;return h=p.ref,{$$typeof:s,type:o,key:y,ref:h!==void 0?h:null,props:p}}return $n.Fragment=u,$n.jsx=d,$n.jsxs=d,$n}var zp;function o2(){return zp||(zp=1,Pc.exports=c2()),Pc.exports}var i=o2(),Ic={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function u2(){if(Ep)return ae;Ep=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.iterator;function _(v){return v===null||typeof v!="object"?null:(v=C&&v[C]||v["@@iterator"],typeof v=="function"?v:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function q(v,D,G){this.props=v,this.context=D,this.refs=X,this.updater=G||B}q.prototype.isReactComponent={},q.prototype.setState=function(v,D){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,D,"setState")},q.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function U(){}U.prototype=q.prototype;function ce(v,D,G){this.props=v,this.context=D,this.refs=X,this.updater=G||B}var I=ce.prototype=new U;I.constructor=ce,Y(I,q.prototype),I.isPureReactComponent=!0;var fe=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},Oe=Object.prototype.hasOwnProperty;function De(v,D,G,L,Z,de){return G=de.ref,{$$typeof:s,type:v,key:D,ref:G!==void 0?G:null,props:de}}function Be(v,D){return De(v.type,D,void 0,void 0,void 0,v.props)}function we(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function P(v){var D={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(G){return D[G]})}var Te=/\/+/g;function Re(v,D){return typeof v=="object"&&v!==null&&v.key!=null?P(""+v.key):D.toString(36)}function Dt(){}function Ct(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Dt,Dt):(v.status="pending",v.then(function(D){v.status==="pending"&&(v.status="fulfilled",v.value=D)},function(D){v.status==="pending"&&(v.status="rejected",v.reason=D)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function qe(v,D,G,L,Z){var de=typeof v;(de==="undefined"||de==="boolean")&&(v=null);var ee=!1;if(v===null)ee=!0;else switch(de){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(v.$$typeof){case s:case u:ee=!0;break;case T:return ee=v._init,qe(ee(v._payload),D,G,L,Z)}}if(ee)return Z=Z(v),ee=L===""?"."+Re(v,0):L,fe(Z)?(G="",ee!=null&&(G=ee.replace(Te,"$&/")+"/"),qe(Z,D,G,"",function(ca){return ca})):Z!=null&&(we(Z)&&(Z=Be(Z,G+(Z.key==null||v&&v.key===Z.key?"":(""+Z.key).replace(Te,"$&/")+"/")+ee)),D.push(Z)),1;ee=0;var rt=L===""?".":L+":";if(fe(v))for(var Ne=0;Ne<v.length;Ne++)L=v[Ne],de=rt+Re(L,Ne),ee+=qe(L,D,G,de,Z);else if(Ne=_(v),typeof Ne=="function")for(v=Ne.call(v),Ne=0;!(L=v.next()).done;)L=L.value,de=rt+Re(L,Ne++),ee+=qe(L,D,G,de,Z);else if(de==="object"){if(typeof v.then=="function")return qe(Ct(v),D,G,L,Z);throw D=String(v),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return ee}function R(v,D,G){if(v==null)return v;var L=[],Z=0;return qe(v,L,"","",function(de){return D.call(G,de,Z++)}),L}function H(v){if(v._status===-1){var D=v._result;D=D(),D.then(function(G){(v._status===0||v._status===-1)&&(v._status=1,v._result=G)},function(G){(v._status===0||v._status===-1)&&(v._status=2,v._result=G)}),v._status===-1&&(v._status=0,v._result=D)}if(v._status===1)return v._result.default;throw v._result}var F=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function ye(){}return ae.Children={map:R,forEach:function(v,D,G){R(v,function(){D.apply(this,arguments)},G)},count:function(v){var D=0;return R(v,function(){D++}),D},toArray:function(v){return R(v,function(D){return D})||[]},only:function(v){if(!we(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ae.Component=q,ae.Fragment=d,ae.Profiler=h,ae.PureComponent=ce,ae.StrictMode=o,ae.Suspense=x,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ae.__COMPILER_RUNTIME={__proto__:null,c:function(v){return $.H.useMemoCache(v)}},ae.cache=function(v){return function(){return v.apply(null,arguments)}},ae.cloneElement=function(v,D,G){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var L=Y({},v.props),Z=v.key,de=void 0;if(D!=null)for(ee in D.ref!==void 0&&(de=void 0),D.key!==void 0&&(Z=""+D.key),D)!Oe.call(D,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&D.ref===void 0||(L[ee]=D[ee]);var ee=arguments.length-2;if(ee===1)L.children=G;else if(1<ee){for(var rt=Array(ee),Ne=0;Ne<ee;Ne++)rt[Ne]=arguments[Ne+2];L.children=rt}return De(v.type,Z,void 0,void 0,de,L)},ae.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:p,_context:v},v},ae.createElement=function(v,D,G){var L,Z={},de=null;if(D!=null)for(L in D.key!==void 0&&(de=""+D.key),D)Oe.call(D,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(Z[L]=D[L]);var ee=arguments.length-2;if(ee===1)Z.children=G;else if(1<ee){for(var rt=Array(ee),Ne=0;Ne<ee;Ne++)rt[Ne]=arguments[Ne+2];Z.children=rt}if(v&&v.defaultProps)for(L in ee=v.defaultProps,ee)Z[L]===void 0&&(Z[L]=ee[L]);return De(v,de,void 0,void 0,null,Z)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(v){return{$$typeof:E,render:v}},ae.isValidElement=we,ae.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:H}},ae.memo=function(v,D){return{$$typeof:g,type:v,compare:D===void 0?null:D}},ae.startTransition=function(v){var D=$.T,G={};$.T=G;try{var L=v(),Z=$.S;Z!==null&&Z(G,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(ye,F)}catch(de){F(de)}finally{$.T=D}},ae.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ae.use=function(v){return $.H.use(v)},ae.useActionState=function(v,D,G){return $.H.useActionState(v,D,G)},ae.useCallback=function(v,D){return $.H.useCallback(v,D)},ae.useContext=function(v){return $.H.useContext(v)},ae.useDebugValue=function(){},ae.useDeferredValue=function(v,D){return $.H.useDeferredValue(v,D)},ae.useEffect=function(v,D,G){var L=$.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(v,D)},ae.useId=function(){return $.H.useId()},ae.useImperativeHandle=function(v,D,G){return $.H.useImperativeHandle(v,D,G)},ae.useInsertionEffect=function(v,D){return $.H.useInsertionEffect(v,D)},ae.useLayoutEffect=function(v,D){return $.H.useLayoutEffect(v,D)},ae.useMemo=function(v,D){return $.H.useMemo(v,D)},ae.useOptimistic=function(v,D){return $.H.useOptimistic(v,D)},ae.useReducer=function(v,D,G){return $.H.useReducer(v,D,G)},ae.useRef=function(v){return $.H.useRef(v)},ae.useState=function(v){return $.H.useState(v)},ae.useSyncExternalStore=function(v,D,G){return $.H.useSyncExternalStore(v,D,G)},ae.useTransition=function(){return $.H.useTransition()},ae.version="19.1.1",ae}var kp;function wo(){return kp||(kp=1,Ic.exports=u2()),Ic.exports}var k=wo();const Ca=f0(k);var eo={exports:{}},Zn={},to={exports:{}},ao={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function f2(){return Tp||(Tp=1,function(s){function u(R,H){var F=R.length;R.push(H);e:for(;0<F;){var ye=F-1>>>1,v=R[ye];if(0<h(v,H))R[ye]=H,R[F]=v,F=ye;else break e}}function d(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var H=R[0],F=R.pop();if(F!==H){R[0]=F;e:for(var ye=0,v=R.length,D=v>>>1;ye<D;){var G=2*(ye+1)-1,L=R[G],Z=G+1,de=R[Z];if(0>h(L,F))Z<v&&0>h(de,L)?(R[ye]=de,R[Z]=F,ye=Z):(R[ye]=L,R[G]=F,ye=G);else if(Z<v&&0>h(de,F))R[ye]=de,R[Z]=F,ye=Z;else break e}}return H}function h(R,H){var F=R.sortIndex-H.sortIndex;return F!==0?F:R.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var y=Date,E=y.now();s.unstable_now=function(){return y.now()-E}}var x=[],g=[],T=1,C=null,_=3,B=!1,Y=!1,X=!1,q=!1,U=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function fe(R){for(var H=d(g);H!==null;){if(H.callback===null)o(g);else if(H.startTime<=R)o(g),H.sortIndex=H.expirationTime,u(x,H);else break;H=d(g)}}function $(R){if(X=!1,fe(R),!Y)if(d(x)!==null)Y=!0,Oe||(Oe=!0,Re());else{var H=d(g);H!==null&&qe($,H.startTime-R)}}var Oe=!1,De=-1,Be=5,we=-1;function P(){return q?!0:!(s.unstable_now()-we<Be)}function Te(){if(q=!1,Oe){var R=s.unstable_now();we=R;var H=!0;try{e:{Y=!1,X&&(X=!1,ce(De),De=-1),B=!0;var F=_;try{t:{for(fe(R),C=d(x);C!==null&&!(C.expirationTime>R&&P());){var ye=C.callback;if(typeof ye=="function"){C.callback=null,_=C.priorityLevel;var v=ye(C.expirationTime<=R);if(R=s.unstable_now(),typeof v=="function"){C.callback=v,fe(R),H=!0;break t}C===d(x)&&o(x),fe(R)}else o(x);C=d(x)}if(C!==null)H=!0;else{var D=d(g);D!==null&&qe($,D.startTime-R),H=!1}}break e}finally{C=null,_=F,B=!1}H=void 0}}finally{H?Re():Oe=!1}}}var Re;if(typeof I=="function")Re=function(){I(Te)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,Ct=Dt.port2;Dt.port1.onmessage=Te,Re=function(){Ct.postMessage(null)}}else Re=function(){U(Te,0)};function qe(R,H){De=U(function(){R(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(R){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var F=_;_=H;try{return R()}finally{_=F}},s.unstable_requestPaint=function(){q=!0},s.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=_;_=R;try{return H()}finally{_=F}},s.unstable_scheduleCallback=function(R,H,F){var ye=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ye+F:ye):F=ye,R){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=F+v,R={id:T++,callback:H,priorityLevel:R,startTime:F,expirationTime:v,sortIndex:-1},F>ye?(R.sortIndex=F,u(g,R),d(x)===null&&R===d(g)&&(X?(ce(De),De=-1):X=!0,qe($,F-ye))):(R.sortIndex=v,u(x,R),Y||B||(Y=!0,Oe||(Oe=!0,Re()))),R},s.unstable_shouldYield=P,s.unstable_wrapCallback=function(R){var H=_;return function(){var F=_;_=H;try{return R.apply(this,arguments)}finally{_=F}}}}(ao)),ao}var Rp;function d2(){return Rp||(Rp=1,to.exports=f2()),to.exports}var lo={exports:{}},Ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function p2(){if(Mp)return Ie;Mp=1;var s=wo();function u(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(x,g,T){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:C==null?null:""+C,children:x,containerInfo:g,implementation:T}}var y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ie.createPortal=function(x,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return p(x,g,null,T)},Ie.flushSync=function(x){var g=y.T,T=o.p;try{if(y.T=null,o.p=2,x)return x()}finally{y.T=g,o.p=T,o.d.f()}},Ie.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(x,g))},Ie.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},Ie.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var T=g.as,C=E(T,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?o.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:_,fetchPriority:B}):T==="script"&&o.d.X(x,{crossOrigin:C,integrity:_,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ie.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=E(g.as,g.crossOrigin);o.d.M(x,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(x)},Ie.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,C=E(T,g.crossOrigin);o.d.L(x,T,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ie.preloadModule=function(x,g){if(typeof x=="string")if(g){var T=E(g.as,g.crossOrigin);o.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(x)},Ie.requestFormReset=function(x){o.d.r(x)},Ie.unstable_batchedUpdates=function(x,g){return x(g)},Ie.useFormState=function(x,g,T){return y.H.useFormState(x,g,T)},Ie.useFormStatus=function(){return y.H.useHostTransitionStatus()},Ie.version="19.1.1",Ie}var Ap;function h2(){if(Ap)return lo.exports;Ap=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),lo.exports=p2(),lo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function g2(){if(Op)return Zn;Op=1;var s=d2(),u=wo(),d=h2();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return E(n),e;if(r===l)return E(n),t;r=r.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=r;else{for(var c=!1,f=n.child;f;){if(f===a){c=!0,a=n,l=r;break}if(f===l){c=!0,l=n,a=r;break}f=f.sibling}if(!c){for(f=r.child;f;){if(f===a){c=!0,a=r,l=n;break}if(f===l){c=!0,l=r,a=n;break}f=f.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,C=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),ce=Symbol.for("react.consumer"),I=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var Dt=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case q:return"Profiler";case X:return"StrictMode";case $:return"Suspense";case Oe:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case I:return(e.displayName||"Context")+".Provider";case ce:return(e._context.displayName||"Context")+".Consumer";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:Ct(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return Ct(e(t))}catch{}}return null}var qe=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ye=[],v=-1;function D(e){return{current:e}}function G(e){0>v||(e.current=ye[v],ye[v]=null,v--)}function L(e,t){v++,ye[v]=e.current,e.current=t}var Z=D(null),de=D(null),ee=D(null),rt=D(null);function Ne(e,t){switch(L(ee,t),L(de,e),L(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Pd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Pd(t),e=Id(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(Z),L(Z,e)}function ca(){G(Z),G(de),G(ee)}function Ur(e){e.memoizedState!==null&&L(rt,e);var t=Z.current,a=Id(t,e.type);t!==a&&(L(de,e),L(Z,a))}function ii(e){de.current===e&&(G(Z),G(de)),rt.current===e&&(G(rt),qn._currentValue=F)}var Hr=Object.prototype.hasOwnProperty,Lr=s.unstable_scheduleCallback,Yr=s.unstable_cancelCallback,Y0=s.unstable_shouldYield,q0=s.unstable_requestPaint,_t=s.unstable_now,G0=s.unstable_getCurrentPriorityLevel,Ao=s.unstable_ImmediatePriority,Oo=s.unstable_UserBlockingPriority,ri=s.unstable_NormalPriority,V0=s.unstable_LowPriority,Do=s.unstable_IdlePriority,X0=s.log,Q0=s.unstable_setDisableYieldValue,Kl=null,st=null;function oa(e){if(typeof X0=="function"&&Q0(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(Kl,e)}catch{}}var ct=Math.clz32?Math.clz32:K0,$0=Math.log,Z0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-($0(e)/Z0|0)|0}var si=256,ci=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~r,l!==0?n=Ba(l):(c&=f,c!==0?n=Ba(c):a||(a=f&~e,a!==0&&(n=Ba(a))))):(f=l&~r,f!==0?n=Ba(f):c!==0?n=Ba(c):a||(a=l&~e,a!==0&&(n=Ba(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function J0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Co(){var e=si;return si<<=1,(si&4194048)===0&&(si=256),e}function _o(){var e=ci;return ci<<=1,(ci&62914560)===0&&(ci=4194304),e}function qr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Fl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function F0(e,t,a,l,n,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,m=e.expirationTimes,w=e.hiddenUpdates;for(a=c&~a;0<a;){var M=31-ct(a),O=1<<M;f[M]=0,m[M]=-1;var N=w[M];if(N!==null)for(w[M]=null,M=0;M<N.length;M++){var z=N[M];z!==null&&(z.lane&=-536870913)}a&=~O}l!==0&&Bo(e,l,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Bo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ct(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Uo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ct(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Gr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ho(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:vp(e.type))}function W0(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var ua=Math.random().toString(36).slice(2),We="__reactFiber$"+ua,tt="__reactProps$"+ua,ll="__reactContainer$"+ua,Xr="__reactEvents$"+ua,P0="__reactListeners$"+ua,I0="__reactHandles$"+ua,Lo="__reactResources$"+ua,Wl="__reactMarker$"+ua;function Qr(e){delete e[We],delete e[tt],delete e[Xr],delete e[P0],delete e[I0]}function nl(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=lp(e);e!==null;){if(a=e[We])return a;e=lp(e)}return t}e=a,a=e.parentNode}return null}function il(e){if(e=e[We]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function rl(e){var t=e[Lo];return t||(t=e[Lo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[Wl]=!0}var Yo=new Set,qo={};function Ua(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(qo[e]=t,e=0;e<t.length;e++)Yo.add(t[e])}var e1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Go={},Vo={};function t1(e){return Hr.call(Vo,e)?!0:Hr.call(Go,e)?!1:e1.test(e)?Vo[e]=!0:(Go[e]=!0,!1)}function ui(e,t,a){if(t1(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function fi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var $r,Xo;function cl(e){if($r===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$r=t&&t[1]||"",Xo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$r+e+Xo}var Zr=!1;function Kr(e,t){if(!e||Zr)return"";Zr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(z){var N=z}Reflect.construct(e,[],O)}else{try{O.call()}catch(z){N=z}e.call(O.prototype)}}else{try{throw Error()}catch(z){N=z}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(z){if(z&&N&&typeof z.stack=="string")return[z.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),c=r[0],f=r[1];if(c&&f){var m=c.split(`
`),w=f.split(`
`);for(n=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===m.length||n===w.length)for(l=m.length-1,n=w.length-1;1<=l&&0<=n&&m[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(m[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||m[l]!==w[n]){var M=`
`+m[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=n);break}}}finally{Zr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?cl(a):""}function a1(e){switch(e.tag){case 26:case 27:case 5:return cl(e.type);case 16:return cl("Lazy");case 13:return cl("Suspense");case 19:return cl("SuspenseList");case 0:case 15:return Kr(e.type,!1);case 11:return Kr(e.type.render,!1);case 1:return Kr(e.type,!0);case 31:return cl("Activity");default:return""}}function Qo(e){try{var t="";do t+=a1(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $o(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l1(e){var t=$o(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){e._valueTracker||(e._valueTracker=l1(e))}function Zo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=$o(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var n1=/[\n"\\]/g;function vt(e){return e.replace(n1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jr(e,t,a,l,n,r,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Fr(e,c,xt(t)):a!=null?Fr(e,c,xt(a)):l!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+xt(f):e.removeAttribute("name")}function Ko(e,t,a,l,n,r,c,f){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Fr(e,t,a){t==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ol(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Jo(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function Fo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(qe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function ul(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var i1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||i1.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Po(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Wo(e,n,l)}else for(var r in t)t.hasOwnProperty(r)&&Wo(e,r,t[r])}function Wr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var r1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hi(e){return s1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Pr=null;function Ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,dl=null;function Io(e){var t=il(e);if(t&&(e=t.stateNode)){var a=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[tt]||null;if(!n)throw Error(o(90));Jr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Zo(l)}break e;case"textarea":Jo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ol(e,!!a.multiple,t,!1)}}}var es=!1;function eu(e,t,a){if(es)return e(t,a);es=!0;try{var l=e(t);return l}finally{if(es=!1,(fl!==null||dl!==null)&&(Ii(),fl&&(t=fl,e=dl,dl=fl=null,Io(t),e)))for(t=0;t<e.length;t++)Io(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[tt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=!1;if(Vt)try{var en={};Object.defineProperty(en,"passive",{get:function(){ts=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch{ts=!1}var fa=null,as=null,gi=null;function tu(){if(gi)return gi;var e,t=as,a=t.length,l,n="value"in fa?fa.value:fa.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[r-l];l++);return gi=n.slice(e,1<l?1-l:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function au(){return!1}function at(e){function t(a,l,n,r,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(r):r[f]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?xi:au,this.isPropagationStopped=au,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=at(Ha),tn=T({},Ha,{view:0,detail:0}),c1=at(tn),ls,ns,an,bi=T({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&e.type==="mousemove"?(ls=e.screenX-an.screenX,ns=e.screenY-an.screenY):ns=ls=0,an=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),lu=at(bi),o1=T({},bi,{dataTransfer:0}),u1=at(o1),f1=T({},tn,{relatedTarget:0}),is=at(f1),d1=T({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=at(d1),h1=T({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g1=at(h1),m1=T({},Ha,{data:0}),nu=at(m1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=b1[e])?!!t[e]:!1}function rs(){return y1}var j1=T({},tn,{key:function(e){if(e.key){var t=x1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S1=at(j1),w1=T({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=at(w1),N1=T({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),z1=at(N1),E1=T({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),k1=at(E1),T1=T({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R1=at(T1),M1=T({},Ha,{newState:0,oldState:0}),A1=at(M1),O1=[9,13,27,32],ss=Vt&&"CompositionEvent"in window,ln=null;Vt&&"documentMode"in document&&(ln=document.documentMode);var D1=Vt&&"TextEvent"in window&&!ln,ru=Vt&&(!ss||ln&&8<ln&&11>=ln),su=" ",cu=!1;function ou(e,t){switch(e){case"keyup":return O1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pl=!1;function C1(e,t){switch(e){case"compositionend":return uu(t);case"keypress":return t.which!==32?null:(cu=!0,su);case"textInput":return e=t.data,e===su&&cu?null:e;default:return null}}function _1(e,t){if(pl)return e==="compositionend"||!ss&&ou(e,t)?(e=tu(),gi=as=fa=null,pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ru&&t.locale!=="ko"?null:t.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B1[e.type]:t==="textarea"}function du(e,t,a,l){fl?dl?dl.push(l):dl=[l]:fl=l,t=ir(t,"onChange"),0<t.length&&(a=new vi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var nn=null,rn=null;function U1(e){Zd(e,0)}function yi(e){var t=Pl(e);if(Zo(t))return e}function pu(e,t){if(e==="change")return t}var hu=!1;if(Vt){var cs;if(Vt){var os="oninput"in document;if(!os){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),os=typeof gu.oninput=="function"}cs=os}else cs=!1;hu=cs&&(!document.documentMode||9<document.documentMode)}function mu(){nn&&(nn.detachEvent("onpropertychange",xu),rn=nn=null)}function xu(e){if(e.propertyName==="value"&&yi(rn)){var t=[];du(t,rn,e,Ir(e)),eu(U1,t)}}function H1(e,t,a){e==="focusin"?(mu(),nn=t,rn=a,nn.attachEvent("onpropertychange",xu)):e==="focusout"&&mu()}function L1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(rn)}function Y1(e,t){if(e==="click")return yi(t)}function q1(e,t){if(e==="input"||e==="change")return yi(t)}function G1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:G1;function sn(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Hr.call(t,n)||!ot(e[n],t[n]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var a=vu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vu(a)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ju(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=pi(e.document)}return t}function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var V1=Vt&&"documentMode"in document&&11>=document.documentMode,hl=null,fs=null,cn=null,ds=!1;function Su(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ds||hl==null||hl!==pi(l)||(l=hl,"selectionStart"in l&&us(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cn&&sn(cn,l)||(cn=l,l=ir(fs,"onSelect"),0<l.length&&(t=new vi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=hl)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var gl={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},ps={},wu={};Vt&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete gl.animationend.animation,delete gl.animationiteration.animation,delete gl.animationstart.animation),"TransitionEvent"in window||delete gl.transitionend.transition);function Ya(e){if(ps[e])return ps[e];if(!gl[e])return e;var t=gl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in wu)return ps[e]=t[a];return e}var Nu=Ya("animationend"),zu=Ya("animationiteration"),Eu=Ya("animationstart"),X1=Ya("transitionrun"),Q1=Ya("transitionstart"),$1=Ya("transitioncancel"),ku=Ya("transitionend"),Tu=new Map,hs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hs.push("scrollEnd");function kt(e,t){Tu.set(e,t),Ua(t,[e])}var Ru=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=Ru.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Qo(t)},Ru.set(e,t),t)}return{value:e,source:t,stack:Qo(t)}}var yt=[],ml=0,gs=0;function ji(){for(var e=ml,t=gs=ml=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var r=yt[t];if(yt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}r!==0&&Mu(a,n,r)}}function Si(e,t,a,l){yt[ml++]=e,yt[ml++]=t,yt[ml++]=a,yt[ml++]=l,gs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ms(e,t,a,l){return Si(e,t,a,l),wi(e)}function xl(e,t){return Si(e,null,null,t),wi(e)}function Mu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-ct(a),e=r.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),r):null}function wi(e){if(50<Dn)throw Dn=0,Sc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vl={};function Z1(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,a,l){return new Z1(e,t,a,l)}function xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var a=e.alternate;return a===null?(a=ut(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Au(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ni(e,t,a,l,n,r){var c=0;if(l=e,typeof e=="function")xs(e)&&(c=1);else if(typeof e=="string")c=Jh(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=ut(31,a,t,n),e.elementType=we,e.lanes=r,e;case Y:return qa(a.children,n,r,t);case X:c=8,n|=24;break;case q:return e=ut(12,a,t,n|2),e.elementType=q,e.lanes=r,e;case $:return e=ut(13,a,t,n),e.elementType=$,e.lanes=r,e;case Oe:return e=ut(19,a,t,n),e.elementType=Oe,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case I:c=10;break e;case ce:c=9;break e;case fe:c=11;break e;case De:c=14;break e;case Be:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ut(c,a,t,n),t.elementType=e,t.type=l,t.lanes=r,t}function qa(e,t,a,l){return e=ut(7,e,l,t),e.lanes=a,e}function vs(e,t,a){return e=ut(6,e,null,t),e.lanes=a,e}function bs(e,t,a){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bl=[],yl=0,zi=null,Ei=0,jt=[],St=0,Ga=null,Qt=1,$t="";function Va(e,t){bl[yl++]=Ei,bl[yl++]=zi,zi=e,Ei=t}function Ou(e,t,a){jt[St++]=Qt,jt[St++]=$t,jt[St++]=Ga,Ga=e;var l=Qt;e=$t;var n=32-ct(l)-1;l&=~(1<<n),a+=1;var r=32-ct(t)+n;if(30<r){var c=n-n%5;r=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Qt=1<<32-ct(t)+n|a<<n|l,$t=r+e}else Qt=1<<r|a<<n|l,$t=e}function ys(e){e.return!==null&&(Va(e,1),Ou(e,1,0))}function js(e){for(;e===zi;)zi=bl[--yl],bl[yl]=null,Ei=bl[--yl],bl[yl]=null;for(;e===Ga;)Ga=jt[--St],jt[St]=null,$t=jt[--St],jt[St]=null,Qt=jt[--St],jt[St]=null}var et=null,Me=null,he=!1,Xa=null,Bt=!1,Ss=Error(o(519));function Qa(e){var t=Error(o(418,""));throw fn(bt(t,e)),Ss}function Du(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[tt]=l,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<_n.length;a++)re(_n[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),Ko(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),di(t);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Fo(t,l.value,l.defaultValue,l.children),di(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wd(t.textContent,a)?(l.popover!=null&&(re("beforetoggle",t),re("toggle",t)),l.onScroll!=null&&re("scroll",t),l.onScrollEnd!=null&&re("scrollend",t),l.onClick!=null&&(t.onclick=rr),t=!0):t=!1,t||Qa(e)}function Cu(e){for(et=e.return;et;)switch(et.tag){case 5:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:et=et.return}}function on(e){if(e!==et)return!1;if(!he)return Cu(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hc(e.type,e.memoizedProps)),a=!a),a&&Me&&Qa(e),Cu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Me=Rt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Me=null}}else t===27?(t=Me,ka(e.type)?(e=Gc,Gc=null,Me=e):Me=t):Me=et?Rt(e.stateNode.nextSibling):null;return!0}function un(){Me=et=null,he=!1}function _u(){var e=Xa;return e!==null&&(it===null?it=e:it.push.apply(it,e),Xa=null),e}function fn(e){Xa===null?Xa=[e]:Xa.push(e)}var ws=D(null),$a=null,Zt=null;function da(e,t,a){L(ws,t._currentValue),t._currentValue=a}function Kt(e){e._currentValue=ws.current,G(ws)}function Ns(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function zs(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var c=n.child;r=r.firstContext;e:for(;r!==null;){var f=r;r=n;for(var m=0;m<t.length;m++)if(f.context===t[m]){r.lanes|=a,f=r.alternate,f!==null&&(f.lanes|=a),Ns(r.return,a,e),l||(c=null);break e}r=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),Ns(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function dn(e,t,a,l){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var f=n.type;ot(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===rt.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(qn):e=[qn])}n=n.return}e!==null&&zs(t,e,a,l),t.flags|=262144}function ki(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){$a=e,Zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return Bu($a,e)}function Ti(e,t){return $a===null&&Za(e),Bu(e,t)}function Bu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Zt===null){if(e===null)throw Error(o(308));Zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zt=Zt.next=t;return a}var K1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},J1=s.unstable_scheduleCallback,F1=s.unstable_NormalPriority,Le={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Es(){return{controller:new K1,data:new Map,refCount:0}}function pn(e){e.refCount--,e.refCount===0&&J1(F1,function(){e.controller.abort()})}var hn=null,ks=0,jl=0,Sl=null;function W1(e,t){if(hn===null){var a=hn=[];ks=0,jl=Rc(),Sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ks++,t.then(Uu,Uu),t}function Uu(){if(--ks===0&&hn!==null){Sl!==null&&(Sl.status="fulfilled");var e=hn;hn=null,jl=0,Sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function P1(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Hu=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&W1(e,t),Hu!==null&&Hu(e,t)};var Ka=D(null);function Ts(){var e=Ka.current;return e!==null?e:Se.pooledCache}function Ri(e,t){t===null?L(Ka,Ka.current):L(Ka,t.pool)}function Lu(){var e=Ts();return e===null?null:{parent:Le._currentValue,pool:e}}var gn=Error(o(460)),Yu=Error(o(474)),Mi=Error(o(542)),Rs={then:function(){}};function qu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ai(){}function Gu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ai,Ai),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e;default:if(typeof t.status=="string")t.then(Ai,Ai);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e}throw mn=t,gn}}var mn=null;function Vu(){if(mn===null)throw Error(o(459));var e=mn;return mn=null,e}function Xu(e){if(e===gn||e===Mi)throw Error(o(483))}var pa=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ge&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=wi(e),Mu(e,null,a),t}return Si(e,l,t,a),wi(e)}function xn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Uo(e,a)}}function Os(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ds=!1;function vn(){if(Ds){var e=Sl;if(e!==null)throw e}}function bn(e,t,a,l){Ds=!1;var n=e.updateQueue;pa=!1;var r=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var m=f,w=m.next;m.next=null,c===null?r=w:c.next=w,c=m;var M=e.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==c&&(f===null?M.firstBaseUpdate=w:f.next=w,M.lastBaseUpdate=m))}if(r!==null){var O=n.baseState;c=0,M=w=m=null,f=r;do{var N=f.lane&-536870913,z=N!==f.lane;if(z?(oe&N)===N:(l&N)===N){N!==0&&N===jl&&(Ds=!0),M!==null&&(M=M.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var W=e,K=f;N=t;var be=a;switch(K.tag){case 1:if(W=K.payload,typeof W=="function"){O=W.call(be,O,N);break e}O=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=K.payload,N=typeof W=="function"?W.call(be,O,N):W,N==null)break e;O=T({},O,N);break e;case 2:pa=!0}}N=f.callback,N!==null&&(e.flags|=64,z&&(e.flags|=8192),z=n.callbacks,z===null?n.callbacks=[N]:z.push(N))}else z={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(w=M=z,m=O):M=M.next=z,c|=N;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;z=f,f=z.next,z.next=null,n.lastBaseUpdate=z,n.shared.pending=null}}while(!0);M===null&&(m=O),n.baseState=m,n.firstBaseUpdate=w,n.lastBaseUpdate=M,r===null&&(n.shared.lanes=0),wa|=c,e.lanes=c,e.memoizedState=O}}function Qu(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function $u(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Qu(a[e],t)}var wl=D(null),Oi=D(0);function Zu(e,t){e=ta,L(Oi,e),L(wl,t),ta=e|t.baseLanes}function Cs(){L(Oi,ta),L(wl,wl.current)}function _s(){ta=Oi.current,G(wl),G(Oi)}var ma=0,le=null,xe=null,Ue=null,Di=!1,Nl=!1,Ja=!1,Ci=0,yn=0,zl=null,I1=0;function Ce(){throw Error(o(321))}function Bs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ot(e[a],t[a]))return!1;return!0}function Us(e,t,a,l,n,r){return ma=r,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Af:Of,Ja=!1,r=a(l,n),Ja=!1,Nl&&(r=Ju(t,a,l,n)),Ku(e),r}function Ku(e){R.H=Yi;var t=xe!==null&&xe.next!==null;if(ma=0,Ue=xe=le=null,Di=!1,yn=0,zl=null,t)throw Error(o(300));e===null||Ve||(e=e.dependencies,e!==null&&ki(e)&&(Ve=!0))}function Ju(e,t,a,l){le=e;var n=0;do{if(Nl&&(zl=null),yn=0,Nl=!1,25<=n)throw Error(o(301));if(n+=1,Ue=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=rh,r=t(a,l)}while(Nl);return r}function eh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?jn(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(le.flags|=1024),t}function Hs(){var e=Ci!==0;return Ci=0,e}function Ls(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ys(e){if(Di){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Di=!1}ma=0,Ue=xe=le=null,Nl=!1,yn=Ci=0,zl=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?le.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function He(){if(xe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?le.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw le.alternate===null?Error(o(467)):Error(o(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?le.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function qs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jn(e){var t=yn;return yn+=1,zl===null&&(zl=[]),e=Gu(zl,e,t),t=le,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Af:Of),e}function _i(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jn(e);if(e.$$typeof===I)return Pe(e)}throw Error(o(438,String(e)))}function Gs(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=qs(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=P;return t.index++,a}function Jt(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=He();return Vs(t,xe,e)}function Vs(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,r=l.pending;if(r!==null){if(n!==null){var c=n.next;n.next=r.next,r.next=c}t.baseQueue=n=r,l.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var f=c=null,m=null,w=t,M=!1;do{var O=w.lane&-536870913;if(O!==w.lane?(oe&O)===O:(ma&O)===O){var N=w.revertLane;if(N===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),O===jl&&(M=!0);else if((ma&N)===N){w=w.next,N===jl&&(M=!0);continue}else O={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(f=m=O,c=r):m=m.next=O,le.lanes|=N,wa|=N;O=w.action,Ja&&a(r,O),r=w.hasEagerState?w.eagerState:a(r,O)}else N={lane:O,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(f=m=N,c=r):m=m.next=N,le.lanes|=O,wa|=O;w=w.next}while(w!==null&&w!==t);if(m===null?c=r:m.next=f,!ot(r,e.memoizedState)&&(Ve=!0,M&&(a=Sl,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=m,l.lastRenderedState=r}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xs(e){var t=He(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do r=e(r,c.action),c=c.next;while(c!==n);ot(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function Fu(e,t,a){var l=le,n=He(),r=he;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!ot((xe||n).memoizedState,a);c&&(n.memoizedState=a,Ve=!0),n=n.queue;var f=Iu.bind(null,l,n,e);if(Sn(2048,8,f,[e]),n.getSnapshot!==t||c||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,El(9,Ui(),Pu.bind(null,l,n,a,t),null),Se===null)throw Error(o(349));r||(ma&124)!==0||Wu(l,t,a)}return a}function Wu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=qs(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Pu(e,t,a,l){t.value=a,t.getSnapshot=l,ef(t)&&tf(e)}function Iu(e,t,a){return a(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ot(e,a)}catch{return!0}}function tf(e){var t=xl(e,2);t!==null&&gt(t,e,2)}function Qs(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),Ja){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},t}function af(e,t,a,l){return e.baseState=a,Vs(e,xe,typeof l=="function"?l:Jt)}function th(e,t,a,l,n){if(Li(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};R.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,lf(t,r)):(r.next=a.next,t.pending=a.next=r)}}function lf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var r=R.T,c={};R.T=c;try{var f=a(n,l),m=R.S;m!==null&&m(c,f),nf(e,t,f)}catch(w){$s(e,t,w)}finally{R.T=r}}else try{r=a(n,l),nf(e,t,r)}catch(w){$s(e,t,w)}}function nf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){rf(e,t,l)},function(l){return $s(e,t,l)}):rf(e,t,a)}function rf(e,t,a){t.status="fulfilled",t.value=a,sf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,lf(e,a)))}function $s(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,sf(t),t=t.next;while(t!==l)}e.action=null}function sf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cf(e,t){return t}function of(e,t){if(he){var a=Se.formState;if(a!==null){e:{var l=le;if(he){if(Me){t:{for(var n=Me,r=Bt;n.nodeType!==8;){if(!r){n=null;break t}if(n=Rt(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Me=Rt(n.nextSibling),l=n.data==="F!";break e}}Qa(l)}l=!1}l&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cf,lastRenderedState:t},a.queue=l,a=Tf.bind(null,le,l),l.dispatch=a,l=Qs(!1),r=Ws.bind(null,le,!1,l.queue),l=lt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=th.bind(null,le,n,r,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function uf(e){var t=He();return ff(t,xe,e)}function ff(e,t,a){if(t=Vs(e,t,cf)[0],e=Bi(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=jn(t)}catch(c){throw c===gn?Mi:c}else l=t;t=He();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(le.flags|=2048,El(9,Ui(),ah.bind(null,n,a),null)),[l,r,e]}function ah(e,t){e.action=t}function df(e){var t=He(),a=xe;if(a!==null)return ff(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=le.updateQueue,t===null&&(t=qs(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ui(){return{destroy:void 0,resource:void 0}}function pf(){return He().memoizedState}function Hi(e,t,a,l){var n=lt();l=l===void 0?null:l,le.flags|=e,n.memoizedState=El(1|t,Ui(),a,l)}function Sn(e,t,a,l){var n=He();l=l===void 0?null:l;var r=n.memoizedState.inst;xe!==null&&l!==null&&Bs(l,xe.memoizedState.deps)?n.memoizedState=El(t,r,a,l):(le.flags|=e,n.memoizedState=El(1|t,r,a,l))}function hf(e,t){Hi(8390656,8,e,t)}function gf(e,t){Sn(2048,8,e,t)}function mf(e,t){return Sn(4,2,e,t)}function xf(e,t){return Sn(4,4,e,t)}function vf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,a){a=a!=null?a.concat([e]):null,Sn(4,4,vf.bind(null,t,e),a)}function Zs(){}function yf(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Bs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function jf(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Bs(t,l[1]))return l[0];if(l=e(),Ja){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l}function Ks(e,t,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Nd(),le.lanes|=e,wa|=e,a)}function Sf(e,t,a,l){return ot(a,t)?a:wl.current!==null?(e=Ks(e,a,l),ot(e,t)||(Ve=!0),e):(ma&42)===0?(Ve=!0,e.memoizedState=a):(e=Nd(),le.lanes|=e,wa|=e,t)}function wf(e,t,a,l,n){var r=H.p;H.p=r!==0&&8>r?r:8;var c=R.T,f={};R.T=f,Ws(e,!1,t,a);try{var m=n(),w=R.S;if(w!==null&&w(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var M=P1(m,l);wn(e,t,M,ht(e))}else wn(e,t,l,ht(e))}catch(O){wn(e,t,{then:function(){},status:"rejected",reason:O},ht())}finally{H.p=r,R.T=c}}function lh(){}function Js(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Nf(e).queue;wf(e,n,t,F,a===null?lh:function(){return zf(e),a(l)})}function Nf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zf(e){var t=Nf(e).next.queue;wn(e,t,{},ht())}function Fs(){return Pe(qn)}function Ef(){return He().memoizedState}function kf(){return He().memoizedState}function nh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=ha(a);var l=ga(t,e,a);l!==null&&(gt(l,t,a),xn(l,t,a)),t={cache:Es()},e.payload=t;return}t=t.return}}function ih(e,t,a){var l=ht();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Li(e)?Rf(t,a):(a=ms(e,t,a,l),a!==null&&(gt(a,e,l),Mf(a,t,l)))}function Tf(e,t,a){var l=ht();wn(e,t,a,l)}function wn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Li(e))Rf(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,f=r(c,a);if(n.hasEagerState=!0,n.eagerState=f,ot(f,c))return Si(e,t,n,0),Se===null&&ji(),!1}catch{}finally{}if(a=ms(e,t,n,l),a!==null)return gt(a,e,l),Mf(a,t,l),!0}return!1}function Ws(e,t,a,l){if(l={lane:2,revertLane:Rc(),action:l,hasEagerState:!1,eagerState:null,next:null},Li(e)){if(t)throw Error(o(479))}else t=ms(e,a,l,2),t!==null&&gt(t,e,2)}function Li(e){var t=e.alternate;return e===le||t!==null&&t===le}function Rf(e,t){Nl=Di=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Mf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Uo(e,a)}}var Yi={readContext:Pe,use:_i,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce},Af={readContext:Pe,use:_i,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:hf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Hi(4194308,4,vf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){Hi(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var l=e();if(Ja){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=lt();if(a!==void 0){var n=a(t);if(Ja){oa(!0);try{a(t)}finally{oa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=ih.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Qs(e);var t=e.queue,a=Tf.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Zs,useDeferredValue:function(e,t){var a=lt();return Ks(a,e,t)},useTransition:function(){var e=Qs(!1);return e=wf.bind(null,le,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=le,n=lt();if(he){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Se===null)throw Error(o(349));(oe&124)!==0||Wu(l,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,hf(Iu.bind(null,l,r,e),[e]),l.flags|=2048,El(9,Ui(),Pu.bind(null,l,r,a,t),null),a},useId:function(){var e=lt(),t=Se.identifierPrefix;if(he){var a=$t,l=Qt;a=(l&~(1<<32-ct(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=Ci++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=I1++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Fs,useFormState:of,useActionState:of,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ws.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Gs,useCacheRefresh:function(){return lt().memoizedState=nh.bind(null,le)}},Of={readContext:Pe,use:_i,useCallback:yf,useContext:Pe,useEffect:gf,useImperativeHandle:bf,useInsertionEffect:mf,useLayoutEffect:xf,useMemo:jf,useReducer:Bi,useRef:pf,useState:function(){return Bi(Jt)},useDebugValue:Zs,useDeferredValue:function(e,t){var a=He();return Sf(a,xe.memoizedState,e,t)},useTransition:function(){var e=Bi(Jt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:jn(e),t]},useSyncExternalStore:Fu,useId:Ef,useHostTransitionStatus:Fs,useFormState:uf,useActionState:uf,useOptimistic:function(e,t){var a=He();return af(a,xe,e,t)},useMemoCache:Gs,useCacheRefresh:kf},rh={readContext:Pe,use:_i,useCallback:yf,useContext:Pe,useEffect:gf,useImperativeHandle:bf,useInsertionEffect:mf,useLayoutEffect:xf,useMemo:jf,useReducer:Xs,useRef:pf,useState:function(){return Xs(Jt)},useDebugValue:Zs,useDeferredValue:function(e,t){var a=He();return xe===null?Ks(a,e,t):Sf(a,xe.memoizedState,e,t)},useTransition:function(){var e=Xs(Jt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:jn(e),t]},useSyncExternalStore:Fu,useId:Ef,useHostTransitionStatus:Fs,useFormState:df,useActionState:df,useOptimistic:function(e,t){var a=He();return xe!==null?af(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gs,useCacheRefresh:kf},kl=null,Nn=0;function qi(e){var t=Nn;return Nn+=1,kl===null&&(kl=[]),Gu(kl,e,t)}function zn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gi(e,t){throw t.$$typeof===C?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Df(e){var t=e._init;return t(e._payload)}function Cf(e){function t(j,b){if(e){var S=j.deletions;S===null?(j.deletions=[b],j.flags|=16):S.push(b)}}function a(j,b){if(!e)return null;for(;b!==null;)t(j,b),b=b.sibling;return null}function l(j){for(var b=new Map;j!==null;)j.key!==null?b.set(j.key,j):b.set(j.index,j),j=j.sibling;return b}function n(j,b){return j=Xt(j,b),j.index=0,j.sibling=null,j}function r(j,b,S){return j.index=S,e?(S=j.alternate,S!==null?(S=S.index,S<b?(j.flags|=67108866,b):S):(j.flags|=67108866,b)):(j.flags|=1048576,b)}function c(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function f(j,b,S,A){return b===null||b.tag!==6?(b=vs(S,j.mode,A),b.return=j,b):(b=n(b,S),b.return=j,b)}function m(j,b,S,A){var V=S.type;return V===Y?M(j,b,S.props.children,A,S.key):b!==null&&(b.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Be&&Df(V)===b.type)?(b=n(b,S.props),zn(b,S),b.return=j,b):(b=Ni(S.type,S.key,S.props,null,j.mode,A),zn(b,S),b.return=j,b)}function w(j,b,S,A){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=bs(S,j.mode,A),b.return=j,b):(b=n(b,S.children||[]),b.return=j,b)}function M(j,b,S,A,V){return b===null||b.tag!==7?(b=qa(S,j.mode,A,V),b.return=j,b):(b=n(b,S),b.return=j,b)}function O(j,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=vs(""+b,j.mode,S),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _:return S=Ni(b.type,b.key,b.props,null,j.mode,S),zn(S,b),S.return=j,S;case B:return b=bs(b,j.mode,S),b.return=j,b;case Be:var A=b._init;return b=A(b._payload),O(j,b,S)}if(qe(b)||Re(b))return b=qa(b,j.mode,S,null),b.return=j,b;if(typeof b.then=="function")return O(j,qi(b),S);if(b.$$typeof===I)return O(j,Ti(j,b),S);Gi(j,b)}return null}function N(j,b,S,A){var V=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return V!==null?null:f(j,b,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _:return S.key===V?m(j,b,S,A):null;case B:return S.key===V?w(j,b,S,A):null;case Be:return V=S._init,S=V(S._payload),N(j,b,S,A)}if(qe(S)||Re(S))return V!==null?null:M(j,b,S,A,null);if(typeof S.then=="function")return N(j,b,qi(S),A);if(S.$$typeof===I)return N(j,b,Ti(j,S),A);Gi(j,S)}return null}function z(j,b,S,A,V){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return j=j.get(S)||null,f(b,j,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case _:return j=j.get(A.key===null?S:A.key)||null,m(b,j,A,V);case B:return j=j.get(A.key===null?S:A.key)||null,w(b,j,A,V);case Be:var ne=A._init;return A=ne(A._payload),z(j,b,S,A,V)}if(qe(A)||Re(A))return j=j.get(S)||null,M(b,j,A,V,null);if(typeof A.then=="function")return z(j,b,S,qi(A),V);if(A.$$typeof===I)return z(j,b,S,Ti(b,A),V);Gi(b,A)}return null}function W(j,b,S,A){for(var V=null,ne=null,Q=b,J=b=0,Qe=null;Q!==null&&J<S.length;J++){Q.index>J?(Qe=Q,Q=null):Qe=Q.sibling;var pe=N(j,Q,S[J],A);if(pe===null){Q===null&&(Q=Qe);break}e&&Q&&pe.alternate===null&&t(j,Q),b=r(pe,b,J),ne===null?V=pe:ne.sibling=pe,ne=pe,Q=Qe}if(J===S.length)return a(j,Q),he&&Va(j,J),V;if(Q===null){for(;J<S.length;J++)Q=O(j,S[J],A),Q!==null&&(b=r(Q,b,J),ne===null?V=Q:ne.sibling=Q,ne=Q);return he&&Va(j,J),V}for(Q=l(Q);J<S.length;J++)Qe=z(Q,j,J,S[J],A),Qe!==null&&(e&&Qe.alternate!==null&&Q.delete(Qe.key===null?J:Qe.key),b=r(Qe,b,J),ne===null?V=Qe:ne.sibling=Qe,ne=Qe);return e&&Q.forEach(function(Oa){return t(j,Oa)}),he&&Va(j,J),V}function K(j,b,S,A){if(S==null)throw Error(o(151));for(var V=null,ne=null,Q=b,J=b=0,Qe=null,pe=S.next();Q!==null&&!pe.done;J++,pe=S.next()){Q.index>J?(Qe=Q,Q=null):Qe=Q.sibling;var Oa=N(j,Q,pe.value,A);if(Oa===null){Q===null&&(Q=Qe);break}e&&Q&&Oa.alternate===null&&t(j,Q),b=r(Oa,b,J),ne===null?V=Oa:ne.sibling=Oa,ne=Oa,Q=Qe}if(pe.done)return a(j,Q),he&&Va(j,J),V;if(Q===null){for(;!pe.done;J++,pe=S.next())pe=O(j,pe.value,A),pe!==null&&(b=r(pe,b,J),ne===null?V=pe:ne.sibling=pe,ne=pe);return he&&Va(j,J),V}for(Q=l(Q);!pe.done;J++,pe=S.next())pe=z(Q,j,J,pe.value,A),pe!==null&&(e&&pe.alternate!==null&&Q.delete(pe.key===null?J:pe.key),b=r(pe,b,J),ne===null?V=pe:ne.sibling=pe,ne=pe);return e&&Q.forEach(function(s2){return t(j,s2)}),he&&Va(j,J),V}function be(j,b,S,A){if(typeof S=="object"&&S!==null&&S.type===Y&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case _:e:{for(var V=S.key;b!==null;){if(b.key===V){if(V=S.type,V===Y){if(b.tag===7){a(j,b.sibling),A=n(b,S.props.children),A.return=j,j=A;break e}}else if(b.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Be&&Df(V)===b.type){a(j,b.sibling),A=n(b,S.props),zn(A,S),A.return=j,j=A;break e}a(j,b);break}else t(j,b);b=b.sibling}S.type===Y?(A=qa(S.props.children,j.mode,A,S.key),A.return=j,j=A):(A=Ni(S.type,S.key,S.props,null,j.mode,A),zn(A,S),A.return=j,j=A)}return c(j);case B:e:{for(V=S.key;b!==null;){if(b.key===V)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){a(j,b.sibling),A=n(b,S.children||[]),A.return=j,j=A;break e}else{a(j,b);break}else t(j,b);b=b.sibling}A=bs(S,j.mode,A),A.return=j,j=A}return c(j);case Be:return V=S._init,S=V(S._payload),be(j,b,S,A)}if(qe(S))return W(j,b,S,A);if(Re(S)){if(V=Re(S),typeof V!="function")throw Error(o(150));return S=V.call(S),K(j,b,S,A)}if(typeof S.then=="function")return be(j,b,qi(S),A);if(S.$$typeof===I)return be(j,b,Ti(j,S),A);Gi(j,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,b!==null&&b.tag===6?(a(j,b.sibling),A=n(b,S),A.return=j,j=A):(a(j,b),A=vs(S,j.mode,A),A.return=j,j=A),c(j)):a(j,b)}return function(j,b,S,A){try{Nn=0;var V=be(j,b,S,A);return kl=null,V}catch(Q){if(Q===gn||Q===Mi)throw Q;var ne=ut(29,Q,null,j.mode);return ne.lanes=A,ne.return=j,ne}finally{}}}var Tl=Cf(!0),_f=Cf(!1),wt=D(null),Ut=null;function xa(e){var t=e.alternate;L(Ye,Ye.current&1),L(wt,e),Ut===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(Ut=e)}function Bf(e){if(e.tag===22){if(L(Ye,Ye.current),L(wt,e),Ut===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ut=e)}}else va()}function va(){L(Ye,Ye.current),L(wt,wt.current)}function Ft(e){G(wt),Ut===e&&(Ut=null),G(Ye)}var Ye=D(0);function Vi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||qc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ps(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Is={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ht(),n=ha(l);n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(gt(t,e,l),xn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ht(),n=ha(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(gt(t,e,l),xn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),l=ha(a);l.tag=2,t!=null&&(l.callback=t),t=ga(e,l,a),t!==null&&(gt(t,e,a),xn(t,e,a))}};function Uf(e,t,a,l,n,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,c):t.prototype&&t.prototype.isPureReactComponent?!sn(a,l)||!sn(n,r):!0}function Hf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Is.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lf(e){Xi(e)}function Yf(e){console.error(e)}function qf(e){Xi(e)}function Qi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Gf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ec(e,t,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Qi(e,t)},a}function Vf(e){return e=ha(e),e.tag=3,e}function Xf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=l.value;e.payload=function(){return n(r)},e.callback=function(){Gf(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Gf(t,a,l),typeof n!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function sh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&dn(t,a,n,!0),a=wt.current,a!==null){switch(a.tag){case 13:return Ut===null?Nc():a.alternate===null&&Ae===0&&(Ae=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Rs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ec(e,l,n)),!1;case 22:return a.flags|=65536,l===Rs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ec(e,l,n)),!1}throw Error(o(435,a.tag))}return Ec(e,l,n),Nc(),!1}if(he)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ss&&(e=Error(o(422),{cause:l}),fn(bt(e,a)))):(l!==Ss&&(t=Error(o(423),{cause:l}),fn(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=ec(e.stateNode,l,n),Os(e,n),Ae!==4&&(Ae=2)),!1;var r=Error(o(520),{cause:l});if(r=bt(r,a),On===null?On=[r]:On.push(r),Ae!==4&&(Ae=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=ec(a.stateNode,l,e),Os(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Na===null||!Na.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Vf(n),Xf(n,e,a,l),Os(a,n),!1}a=a.return}while(a!==null);return!1}var Qf=Error(o(461)),Ve=!1;function Ze(e,t,a,l){t.child=e===null?_f(t,null,a,l):Tl(t,e.child,a,l)}function $f(e,t,a,l,n){a=a.render;var r=t.ref;if("ref"in l){var c={};for(var f in l)f!=="ref"&&(c[f]=l[f])}else c=l;return Za(t),l=Us(e,t,a,c,r,n),f=Hs(),e!==null&&!Ve?(Ls(e,t,n),Wt(e,t,n)):(he&&f&&ys(t),t.flags|=1,Ze(e,t,l,n),t.child)}function Zf(e,t,a,l,n){if(e===null){var r=a.type;return typeof r=="function"&&!xs(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Kf(e,t,r,l,n)):(e=Ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!cc(e,n)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:sn,a(c,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Xt(r,l),e.ref=t.ref,e.return=t,t.child=e}function Kf(e,t,a,l,n){if(e!==null){var r=e.memoizedProps;if(sn(r,l)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=l=r,cc(e,n))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return tc(e,t,a,l,n)}function Jf(e,t,a){var l=t.pendingProps,n=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return Ff(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,r!==null?r.cachePool:null),r!==null?Zu(t,r):Cs(),Bf(t);else return t.lanes=t.childLanes=536870912,Ff(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(Ri(t,r.cachePool),Zu(t,r),va(),t.memoizedState=null):(e!==null&&Ri(t,null),Cs(),va());return Ze(e,t,n,a),t.child}function Ff(e,t,a,l){var n=Ts();return n=n===null?null:{parent:Le._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Ri(t,null),Cs(),Bf(t),e!==null&&dn(e,t,l,!0),null}function $i(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function tc(e,t,a,l,n){return Za(t),a=Us(e,t,a,l,void 0,n),l=Hs(),e!==null&&!Ve?(Ls(e,t,n),Wt(e,t,n)):(he&&l&&ys(t),t.flags|=1,Ze(e,t,a,n),t.child)}function Wf(e,t,a,l,n,r){return Za(t),t.updateQueue=null,a=Ju(t,l,a,n),Ku(e),l=Hs(),e!==null&&!Ve?(Ls(e,t,r),Wt(e,t,r)):(he&&l&&ys(t),t.flags|=1,Ze(e,t,a,r),t.child)}function Pf(e,t,a,l,n){if(Za(t),t.stateNode===null){var r=vl,c=a.contextType;typeof c=="object"&&c!==null&&(r=Pe(c)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Is,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},Ms(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?Pe(c):vl,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Ps(t,a,c,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Is.enqueueReplaceState(r,r.state,null),bn(t,l,r,n),vn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var f=t.memoizedProps,m=Fa(a,f);r.props=m;var w=r.context,M=a.contextType;c=vl,typeof M=="object"&&M!==null&&(c=Pe(M));var O=a.getDerivedStateFromProps;M=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f||w!==c)&&Hf(t,r,l,c),pa=!1;var N=t.memoizedState;r.state=N,bn(t,l,r,n),vn(),w=t.memoizedState,f||N!==w||pa?(typeof O=="function"&&(Ps(t,a,O,l),w=t.memoizedState),(m=pa||Uf(t,a,m,l,N,w,c))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=c,l=m):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,As(e,t),c=t.memoizedProps,M=Fa(a,c),r.props=M,O=t.pendingProps,N=r.context,w=a.contextType,m=vl,typeof w=="object"&&w!==null&&(m=Pe(w)),f=a.getDerivedStateFromProps,(w=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==O||N!==m)&&Hf(t,r,l,m),pa=!1,N=t.memoizedState,r.state=N,bn(t,l,r,n),vn();var z=t.memoizedState;c!==O||N!==z||pa||e!==null&&e.dependencies!==null&&ki(e.dependencies)?(typeof f=="function"&&(Ps(t,a,f,l),z=t.memoizedState),(M=pa||Uf(t,a,M,l,N,z,m)||e!==null&&e.dependencies!==null&&ki(e.dependencies))?(w||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,z,m),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,z,m)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),r.props=l,r.state=z,r.context=m,l=M):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,$i(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Tl(t,e.child,null,n),t.child=Tl(t,null,a,n)):Ze(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Wt(e,t,n),e}function If(e,t,a,l){return un(),t.flags|=256,Ze(e,t,a,l),t.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:Lu()}}function nc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function ed(e,t,a){var l=t.pendingProps,n=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(n?xa(t):va(),he){var f=Me,m;if(m=f){e:{for(m=f,f=Bt;m.nodeType!==8;){if(!f){f=null;break e}if(m=Rt(m.nextSibling),m===null){f=null;break e}}f=m}f!==null?(t.memoizedState={dehydrated:f,treeContext:Ga!==null?{id:Qt,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},m=ut(18,null,null,0),m.stateNode=f,m.return=t,t.child=m,et=t,Me=null,m=!0):m=!1}m||Qa(t)}if(f=t.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return qc(f)?t.lanes=32:t.lanes=536870912,null;Ft(t)}return f=l.children,l=l.fallback,n?(va(),n=t.mode,f=Zi({mode:"hidden",children:f},n),l=qa(l,n,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,n=t.child,n.memoizedState=lc(a),n.childLanes=nc(e,c,a),t.memoizedState=ac,l):(xa(t),ic(t,f))}if(m=e.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(r)t.flags&256?(xa(t),t.flags&=-257,t=rc(e,t,a)):t.memoizedState!==null?(va(),t.child=e.child,t.flags|=128,t=null):(va(),n=l.fallback,f=t.mode,l=Zi({mode:"visible",children:l.children},f),n=qa(n,f,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,Tl(t,e.child,null,a),l=t.child,l.memoizedState=lc(a),l.childLanes=nc(e,c,a),t.memoizedState=ac,t=n);else if(xa(t),qc(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var w=c.dgst;c=w,l=Error(o(419)),l.stack="",l.digest=c,fn({value:l,source:null,stack:null}),t=rc(e,t,a)}else if(Ve||dn(e,t,a,!1),c=(a&e.childLanes)!==0,Ve||c){if(c=Se,c!==null&&(l=a&-a,l=(l&42)!==0?1:Gr(l),l=(l&(c.suspendedLanes|a))!==0?0:l,l!==0&&l!==m.retryLane))throw m.retryLane=l,xl(e,l),gt(c,e,l),Qf;f.data==="$?"||Nc(),t=rc(e,t,a)}else f.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Me=Rt(f.nextSibling),et=t,he=!0,Xa=null,Bt=!1,e!==null&&(jt[St++]=Qt,jt[St++]=$t,jt[St++]=Ga,Qt=e.id,$t=e.overflow,Ga=t),t=ic(t,l.children),t.flags|=4096);return t}return n?(va(),n=l.fallback,f=t.mode,m=e.child,w=m.sibling,l=Xt(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,w!==null?n=Xt(w,n):(n=qa(n,f,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,f=e.child.memoizedState,f===null?f=lc(a):(m=f.cachePool,m!==null?(w=Le._currentValue,m=m.parent!==w?{parent:w,pool:w}:m):m=Lu(),f={baseLanes:f.baseLanes|a,cachePool:m}),n.memoizedState=f,n.childLanes=nc(e,c,a),t.memoizedState=ac,l):(xa(t),a=e.child,e=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function ic(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=ut(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function rc(e,t,a){return Tl(t,e.child,null,a),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function td(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ns(e.return,t,a)}function sc(e,t,a,l,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n)}function ad(e,t,a){var l=t.pendingProps,n=l.revealOrder,r=l.tail;if(Ze(e,t,l.children,a),l=Ye.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,a,t);else if(e.tag===19)td(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(L(Ye,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Vi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),sc(t,!1,n,a,r);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Vi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}sc(t,!0,a,null,r);break;case"together":sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(dn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Xt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Xt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function cc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ki(e)))}function ch(e,t,a){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),da(t,Le,e.memoizedState.cache),un();break;case 27:case 5:Ur(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ed(e,t,a):(xa(t),e=Wt(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(dn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return ad(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(Ye,Ye.current),l)break;return null;case 22:case 23:return t.lanes=0,Jf(e,t,a);case 24:da(t,Le,e.memoizedState.cache)}return Wt(e,t,a)}function ld(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!cc(e,a)&&(t.flags&128)===0)return Ve=!1,ch(e,t,a);Ve=(e.flags&131072)!==0}else Ve=!1,he&&(t.flags&1048576)!==0&&Ou(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")xs(l)?(e=Fa(l,e),t.tag=1,t=Pf(null,t,l,e,a)):(t.tag=0,t=tc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===fe){t.tag=11,t=$f(null,t,l,e,a);break e}else if(n===De){t.tag=14,t=Zf(null,t,l,e,a);break e}}throw t=Ct(l)||l,Error(o(306,t,""))}}return t;case 0:return tc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Fa(l,t.pendingProps),Pf(e,t,l,n,a);case 3:e:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var r=t.memoizedState;n=r.element,As(e,t),bn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,da(t,Le,l),l!==r.cache&&zs(t,[Le],a,!0),vn(),l=c.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=If(e,t,l,a);break e}else if(l!==n){n=bt(Error(o(424)),t),fn(n),t=If(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Rt(e.firstChild),et=t,he=!0,Xa=null,Bt=!0,a=_f(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(un(),l===n){t=Wt(e,t,a);break e}Ze(e,t,l,a)}t=t.child}return t;case 26:return $i(e,t),e===null?(a=sp(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,l=sr(ee.current).createElement(a),l[We]=t,l[tt]=e,Je(l,a,e),Ge(l),t.stateNode=l):t.memoizedState=sp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ur(t),e===null&&he&&(l=t.stateNode=np(t.type,t.pendingProps,ee.current),et=t,Bt=!0,n=Me,ka(t.type)?(Gc=n,Me=Rt(l.firstChild)):Me=n),Ze(e,t,t.pendingProps.children,a),$i(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((n=l=Me)&&(l=Bh(l,t.type,t.pendingProps,Bt),l!==null?(t.stateNode=l,et=t,Me=Rt(l.firstChild),Bt=!1,n=!0):n=!1),n||Qa(t)),Ur(t),n=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,l=r.children,Hc(n,r)?l=null:c!==null&&Hc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Us(e,t,eh,null,null,a),qn._currentValue=n),$i(e,t),Ze(e,t,l,a),t.child;case 6:return e===null&&he&&((e=a=Me)&&(a=Uh(a,t.pendingProps,Bt),a!==null?(t.stateNode=a,et=t,Me=null,e=!0):e=!1),e||Qa(t)),null;case 13:return ed(e,t,a);case 4:return Ne(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Tl(t,null,l,a):Ze(e,t,l,a),t.child;case 11:return $f(e,t,t.type,t.pendingProps,a);case 7:return Ze(e,t,t.pendingProps,a),t.child;case 8:return Ze(e,t,t.pendingProps.children,a),t.child;case 12:return Ze(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,da(t,t.type,l.value),Ze(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Pe(n),l=l(n),t.flags|=1,Ze(e,t,l,a),t.child;case 14:return Zf(e,t,t.type,t.pendingProps,a);case 15:return Kf(e,t,t.type,t.pendingProps,a);case 19:return ad(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Zi(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Xt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Jf(e,t,a);case 24:return Za(t),l=Pe(Le),e===null?(n=Ts(),n===null&&(n=Se,r=Es(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:l,cache:n},Ms(t),da(t,Le,n)):((e.lanes&a)!==0&&(As(e,t),bn(t,null,null,a),vn()),n=e.memoizedState,r=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),da(t,Le,l)):(l=r.cache,da(t,Le,l),l!==n.cache&&zs(t,[Le],a,!0))),Ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Pt(e){e.flags|=4}function nd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dp(t)){if(t=wt.current,t!==null&&((oe&4194048)===oe?Ut!==null:(oe&62914560)!==oe&&(oe&536870912)===0||t!==Ut))throw mn=Rs,Yu;e.flags|=8192}}function Ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_o():536870912,e.lanes|=t,Ol|=t)}function En(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function oh(e,t,a){var l=t.pendingProps;switch(js(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return ke(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kt(Le),ca(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(on(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_u())),ke(t),null;case 26:return a=t.memoizedState,e===null?(Pt(t),a!==null?(ke(t),nd(t,a)):(ke(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Pt(t),ke(t),nd(t,a)):(ke(t),t.flags&=-16777217):(e.memoizedProps!==l&&Pt(t),ke(t),t.flags&=-16777217),null;case 27:ii(t),a=ee.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return ke(t),null}e=Z.current,on(t)?Du(t):(e=np(n,l,a),t.stateNode=e,Pt(t))}return ke(t),null;case 5:if(ii(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return ke(t),null}if(e=Z.current,on(t))Du(t);else{switch(n=sr(ee.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[We]=t,e[tt]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Je(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Pt(t)}}return ke(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ee.current,on(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=et,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wd(e.nodeValue,a)),e||Qa(t)}else e=sr(e).createTextNode(l),e[We]=t,t.stateNode=e}return ke(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=on(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[We]=t}else un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),n=!1}else n=_u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ft(t),t):(Ft(t),null)}if(Ft(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ki(t,t.updateQueue),ke(t),null;case 4:return ca(),e===null&&Dc(t.stateNode.containerInfo),ke(t),null;case 10:return Kt(t.type),ke(t),null;case 19:if(G(Ye),n=t.memoizedState,n===null)return ke(t),null;if(l=(t.flags&128)!==0,r=n.rendering,r===null)if(l)En(n,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Vi(e),r!==null){for(t.flags|=128,En(n,!1),e=r.updateQueue,t.updateQueue=e,Ki(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Au(a,e),a=a.sibling;return L(Ye,Ye.current&1|2),t.child}e=e.sibling}n.tail!==null&&_t()>Wi&&(t.flags|=128,l=!0,En(n,!1),t.lanes=4194304)}else{if(!l)if(e=Vi(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ki(t,e),En(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!he)return ke(t),null}else 2*_t()-n.renderingStartTime>Wi&&a!==536870912&&(t.flags|=128,l=!0,En(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=_t(),t.sibling=null,e=Ye.current,L(Ye,l?e&1|2:e&1),t):(ke(t),null);case 22:case 23:return Ft(t),_s(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),a=t.updateQueue,a!==null&&Ki(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&G(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(Le),ke(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function uh(e,t){switch(js(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(Le),ca(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ii(t),null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Ye),null;case 4:return ca(),null;case 10:return Kt(t.type),null;case 22:case 23:return Ft(t),_s(),e!==null&&G(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(Le),null;case 25:return null;default:return null}}function id(e,t){switch(js(t),t.tag){case 3:Kt(Le),ca();break;case 26:case 27:case 5:ii(t);break;case 4:ca();break;case 13:Ft(t);break;case 19:G(Ye);break;case 10:Kt(t.type);break;case 22:case 23:Ft(t),_s(),e!==null&&G(Ka);break;case 24:Kt(Le)}}function kn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var r=a.create,c=a.inst;l=r(),c.destroy=l}a=a.next}while(a!==n)}}catch(f){je(t,t.return,f)}}function ba(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){var c=l.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var m=a,w=f;try{w()}catch(M){je(n,m,M)}}}l=l.next}while(l!==r)}}catch(M){je(t,t.return,M)}}function rd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{$u(t,a)}catch(l){je(e,e.return,l)}}}function sd(e,t,a){a.props=Fa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){je(e,t,l)}}function Tn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){je(e,t,n)}}function Ht(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){je(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){je(e,t,n)}else a.current=null}function cd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){je(e,e.return,n)}}function oc(e,t,a){try{var l=e.stateNode;Ah(l,e.type,a,t),l[tt]=t}catch(n){je(e,e.return,n)}}function od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=rr));else if(l!==4&&(l===27&&ka(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(fc(e,t,a),e=e.sibling;e!==null;)fc(e,t,a),e=e.sibling}function Ji(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ji(e,t,a),e=e.sibling;e!==null;)Ji(e,t,a),e=e.sibling}function ud(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[We]=e,t[tt]=a}catch(r){je(e,e.return,r)}}var It=!1,_e=!1,dc=!1,fd=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function fh(e,t){if(e=e.containerInfo,Bc=pr,e=ju(e),us(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,f=-1,m=-1,w=0,M=0,O=e,N=null;t:for(;;){for(var z;O!==a||n!==0&&O.nodeType!==3||(f=c+n),O!==r||l!==0&&O.nodeType!==3||(m=c+l),O.nodeType===3&&(c+=O.nodeValue.length),(z=O.firstChild)!==null;)N=O,O=z;for(;;){if(O===e)break t;if(N===a&&++w===n&&(f=c),N===r&&++M===l&&(m=c),(z=O.nextSibling)!==null)break;O=N,N=O.parentNode}O=z}a=f===-1||m===-1?null:{start:f,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:e,selectionRange:a},pr=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var W=Fa(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(W,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){je(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Yc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function dd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),l&4&&kn(5,a);break;case 1:if(ya(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){je(a,a.return,c)}else{var n=Fa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){je(a,a.return,c)}}l&64&&rd(a),l&512&&Tn(a,a.return);break;case 3:if(ya(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{$u(e,t)}catch(c){je(a,a.return,c)}}break;case 27:t===null&&l&4&&ud(a);case 26:case 5:ya(e,a),t===null&&l&4&&cd(a),l&512&&Tn(a,a.return);break;case 12:ya(e,a);break;case 13:ya(e,a),l&4&&gd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yh.bind(null,a),Hh(e,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){t=t!==null&&t.memoizedState!==null||_e,n=It;var r=_e;It=l,(_e=t)&&!r?ja(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),It=n,_e=r}break;case 30:break;default:ya(e,a)}}function pd(e){var t=e.alternate;t!==null&&(e.alternate=null,pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,nt=!1;function ea(e,t,a){for(a=a.child;a!==null;)hd(e,t,a),a=a.sibling}function hd(e,t,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Kl,a)}catch{}switch(a.tag){case 26:_e||Ht(a,t),ea(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_e||Ht(a,t);var l=ze,n=nt;ka(a.type)&&(ze=a.stateNode,nt=!1),ea(e,t,a),Un(a.stateNode),ze=l,nt=n;break;case 5:_e||Ht(a,t);case 6:if(l=ze,n=nt,ze=null,ea(e,t,a),ze=l,nt=n,ze!==null)if(nt)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(r){je(a,t,r)}else try{ze.removeChild(a.stateNode)}catch(r){je(a,t,r)}break;case 18:ze!==null&&(nt?(e=ze,ap(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qn(e)):ap(ze,a.stateNode));break;case 4:l=ze,n=nt,ze=a.stateNode.containerInfo,nt=!0,ea(e,t,a),ze=l,nt=n;break;case 0:case 11:case 14:case 15:_e||ba(2,a,t),_e||ba(4,a,t),ea(e,t,a);break;case 1:_e||(Ht(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&sd(a,t,l)),ea(e,t,a);break;case 21:ea(e,t,a);break;case 22:_e=(l=_e)||a.memoizedState!==null,ea(e,t,a),_e=l;break;default:ea(e,t,a)}}function gd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qn(e)}catch(a){je(t,t.return,a)}}function dh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fd),t;default:throw Error(o(435,e.tag))}}function pc(e,t){var a=dh(e);t.forEach(function(l){var n=jh.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function ft(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],r=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(ka(f.type)){ze=f.stateNode,nt=!1;break e}break;case 5:ze=f.stateNode,nt=!1;break e;case 3:case 4:ze=f.stateNode.containerInfo,nt=!0;break e}f=f.return}if(ze===null)throw Error(o(160));hd(r,c,n),ze=null,nt=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)md(t,e),t=t.sibling}var Tt=null;function md(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),dt(e),l&4&&(ba(3,e,e.return),kn(3,e),ba(5,e,e.return));break;case 1:ft(t,e),dt(e),l&512&&(_e||a===null||Ht(a,a.return)),l&64&&It&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Tt;if(ft(t,e),dt(e),l&512&&(_e||a===null||Ht(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Wl]||r[We]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(l),n.head.insertBefore(r,n.querySelector("head > title"))),Je(r,l,a),r[We]=e,Ge(r),l=r;break e;case"link":var c=up("link","href",n).get(l+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(r=c[f],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}r=n.createElement(l),Je(r,l,a),n.head.appendChild(r);break;case"meta":if(c=up("meta","content",n).get(l+(a.content||""))){for(f=0;f<c.length;f++)if(r=c[f],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}r=n.createElement(l),Je(r,l,a),n.head.appendChild(r);break;default:throw Error(o(468,l))}r[We]=e,Ge(r),l=r}e.stateNode=l}else fp(n,e.type,e.stateNode);else e.stateNode=op(n,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?fp(n,e.type,e.stateNode):op(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&oc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ft(t,e),dt(e),l&512&&(_e||a===null||Ht(a,a.return)),a!==null&&l&4&&oc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ft(t,e),dt(e),l&512&&(_e||a===null||Ht(a,a.return)),e.flags&32){n=e.stateNode;try{ul(n,"")}catch(z){je(e,e.return,z)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,oc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(dc=!0);break;case 6:if(ft(t,e),dt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(z){je(e,e.return,z)}}break;case 3:if(ur=null,n=Tt,Tt=cr(t.containerInfo),ft(t,e),Tt=n,dt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(z){je(e,e.return,z)}dc&&(dc=!1,xd(e));break;case 4:l=Tt,Tt=cr(e.stateNode.containerInfo),ft(t,e),dt(e),Tt=l;break;case 12:ft(t,e),dt(e);break;case 13:ft(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bc=_t()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pc(e,l)));break;case 22:n=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,w=It,M=_e;if(It=w||n,_e=M||m,ft(t,e),_e=M,It=w,dt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||m||It||_e||Wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(r=m.stateNode,n)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=m.stateNode;var O=m.memoizedProps.style,N=O!=null&&O.hasOwnProperty("display")?O.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(z){je(m,m.return,z)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(z){je(m,m.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,pc(e,a))));break;case 19:ft(t,e),dt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pc(e,l)));break;case 30:break;case 21:break;default:ft(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(od(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,r=uc(e);Ji(e,r,n);break;case 5:var c=a.stateNode;a.flags&32&&(ul(c,""),a.flags&=-33);var f=uc(e);Ji(e,f,c);break;case 3:case 4:var m=a.stateNode.containerInfo,w=uc(e);fc(e,w,m);break;default:throw Error(o(161))}}catch(M){je(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ya(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dd(e,t.alternate,t),t=t.sibling}function Wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),Wa(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&sd(t,t.return,a),Wa(t);break;case 27:Un(t.stateNode);case 26:case 5:Ht(t,t.return),Wa(t);break;case 22:t.memoizedState===null&&Wa(t);break;case 30:Wa(t);break;default:Wa(t)}e=e.sibling}}function ja(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:ja(n,r,a),kn(4,r);break;case 1:if(ja(n,r,a),l=r,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){je(l,l.return,w)}if(l=r,n=l.updateQueue,n!==null){var f=l.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)Qu(m[n],f)}catch(w){je(l,l.return,w)}}a&&c&64&&rd(r),Tn(r,r.return);break;case 27:ud(r);case 26:case 5:ja(n,r,a),a&&l===null&&c&4&&cd(r),Tn(r,r.return);break;case 12:ja(n,r,a);break;case 13:ja(n,r,a),a&&c&4&&gd(n,r);break;case 22:r.memoizedState===null&&ja(n,r,a),Tn(r,r.return);break;case 30:break;default:ja(n,r,a)}t=t.sibling}}function hc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&pn(a))}function gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pn(e))}function Lt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vd(e,t,a,l),t=t.sibling}function vd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,l),n&2048&&kn(9,t);break;case 1:Lt(e,t,a,l);break;case 3:Lt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pn(e)));break;case 12:if(n&2048){Lt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,f=r.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){je(t,t.return,m)}}else Lt(e,t,a,l);break;case 13:Lt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?Lt(e,t,a,l):Rn(e,t):r._visibility&2?Lt(e,t,a,l):(r._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&hc(c,t);break;case 24:Lt(e,t,a,l),n&2048&&gc(t.alternate,t);break;default:Lt(e,t,a,l)}}function Rl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,c=t,f=a,m=l,w=c.flags;switch(c.tag){case 0:case 11:case 15:Rl(r,c,f,m,n),kn(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?Rl(r,c,f,m,n):Rn(r,c):(M._visibility|=2,Rl(r,c,f,m,n)),n&&w&2048&&hc(c.alternate,c);break;case 24:Rl(r,c,f,m,n),n&&w&2048&&gc(c.alternate,c);break;default:Rl(r,c,f,m,n)}t=t.sibling}}function Rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Rn(a,l),n&2048&&hc(l.alternate,l);break;case 24:Rn(a,l),n&2048&&gc(l.alternate,l);break;default:Rn(a,l)}t=t.sibling}}var Mn=8192;function Ml(e){if(e.subtreeFlags&Mn)for(e=e.child;e!==null;)bd(e),e=e.sibling}function bd(e){switch(e.tag){case 26:Ml(e),e.flags&Mn&&e.memoizedState!==null&&Wh(Tt,e.memoizedState,e.memoizedProps);break;case 5:Ml(e);break;case 3:case 4:var t=Tt;Tt=cr(e.stateNode.containerInfo),Ml(e),Tt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Mn,Mn=16777216,Ml(e),Mn=t):Ml(e));break;default:Ml(e)}}function yd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function An(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,Sd(l,e)}yd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jd(e),e=e.sibling}function jd(e){switch(e.tag){case 0:case 11:case 15:An(e),e.flags&2048&&ba(9,e,e.return);break;case 3:An(e);break;case 12:An(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fi(e)):An(e);break;default:An(e)}}function Fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,Sd(l,e)}yd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),Fi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Fi(t));break;default:Fi(t)}e=e.sibling}}function Sd(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:pn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=e;Xe!==null;){l=Xe;var n=l.sibling,r=l.return;if(pd(l),l===a){Xe=null;break e}if(n!==null){n.return=r,Xe=n;break e}Xe=r}}}var ph={getCacheForType:function(e){var t=Pe(Le),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},hh=typeof WeakMap=="function"?WeakMap:Map,ge=0,Se=null,ie=null,oe=0,me=0,pt=null,Sa=!1,Al=!1,mc=!1,ta=0,Ae=0,wa=0,Pa=0,xc=0,Nt=0,Ol=0,On=null,it=null,vc=!1,bc=0,Wi=1/0,Pi=null,Na=null,Ke=0,za=null,Dl=null,Cl=0,yc=0,jc=null,wd=null,Dn=0,Sc=null;function ht(){if((ge&2)!==0&&oe!==0)return oe&-oe;if(R.T!==null){var e=jl;return e!==0?e:Rc()}return Ho()}function Nd(){Nt===0&&(Nt=(oe&536870912)===0||he?Co():536870912);var e=wt.current;return e!==null&&(e.flags|=32),Nt}function gt(e,t,a){(e===Se&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(_l(e,0),Ea(e,oe,Nt,!1)),Fl(e,a),((ge&2)===0||e!==Se)&&(e===Se&&((ge&2)===0&&(Pa|=a),Ae===4&&Ea(e,oe,Nt,!1)),Yt(e))}function zd(e,t,a){if((ge&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Jl(e,t),n=l?xh(e,t):zc(e,t,!0),r=l;do{if(n===0){Al&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!gh(a)){n=zc(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=On;var m=f.current.memoizedState.isDehydrated;if(m&&(_l(f,c).flags|=256),c=zc(f,c,!1),c!==2){if(mc&&!m){f.errorRecoveryDisabledLanes|=r,Pa|=r,n=4;break e}r=it,it=n,r!==null&&(it===null?it=r:it.push.apply(it,r))}n=c}if(r=!1,n!==2)continue}}if(n===1){_l(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,r=n,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,Nt,!Sa);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=bc+300-_t(),10<n)){if(Ea(l,t,Nt,!Sa),oi(l,0,!0)!==0)break e;l.timeoutHandle=ep(Ed.bind(null,l,a,it,Pi,vc,t,Nt,Pa,Ol,Sa,r,2,-0,0),n);break e}Ed(l,a,it,Pi,vc,t,Nt,Pa,Ol,Sa,r,0,-0,0)}}break}while(!0);Yt(e)}function Ed(e,t,a,l,n,r,c,f,m,w,M,O,N,z){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(Yn={stylesheets:null,count:0,unsuspend:Fh},bd(t),O=Ph(),O!==null)){e.cancelPendingCommit=O(Dd.bind(null,e,t,r,a,l,n,c,f,m,M,1,N,z)),Ea(e,r,c,!w);return}Dd(e,t,r,a,l,n,c,f,m)}function gh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],r=n.getSnapshot;n=n.value;try{if(!ot(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~xc,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var r=31-ct(n),c=1<<r;l[r]=-1,n&=~c}a!==0&&Bo(e,a,t)}function Ii(){return(ge&6)===0?(Cn(0),!1):!0}function wc(){if(ie!==null){if(me===0)var e=ie.return;else e=ie,Zt=$a=null,Ys(e),kl=null,Nn=0,e=ie;for(;e!==null;)id(e.alternate,e),e=e.return;ie=null}}function _l(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Dh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),wc(),Se=e,ie=a=Xt(e.current,null),oe=t,me=0,pt=null,Sa=!1,Al=Jl(e,t),mc=!1,Ol=Nt=xc=Pa=wa=Ae=0,it=On=null,vc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ct(l),r=1<<n;t|=e[n],l&=~r}return ta=t,ji(),a}function kd(e,t){le=null,R.H=Yi,t===gn||t===Mi?(t=Vu(),me=3):t===Yu?(t=Vu(),me=4):me=t===Qf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ie===null&&(Ae=1,Qi(e,bt(t,e.current)))}function Td(){var e=R.H;return R.H=Yi,e===null?Yi:e}function Rd(){var e=R.A;return R.A=ph,e}function Nc(){Ae=4,Sa||(oe&4194048)!==oe&&wt.current!==null||(Al=!0),(wa&134217727)===0&&(Pa&134217727)===0||Se===null||Ea(Se,oe,Nt,!1)}function zc(e,t,a){var l=ge;ge|=2;var n=Td(),r=Rd();(Se!==e||oe!==t)&&(Pi=null,_l(e,t)),t=!1;var c=Ae;e:do try{if(me!==0&&ie!==null){var f=ie,m=pt;switch(me){case 8:wc(),c=6;break e;case 3:case 2:case 9:case 6:wt.current===null&&(t=!0);var w=me;if(me=0,pt=null,Bl(e,f,m,w),a&&Al){c=0;break e}break;default:w=me,me=0,pt=null,Bl(e,f,m,w)}}mh(),c=Ae;break}catch(M){kd(e,M)}while(!0);return t&&e.shellSuspendCounter++,Zt=$a=null,ge=l,R.H=n,R.A=r,ie===null&&(Se=null,oe=0,ji()),c}function mh(){for(;ie!==null;)Md(ie)}function xh(e,t){var a=ge;ge|=2;var l=Td(),n=Rd();Se!==e||oe!==t?(Pi=null,Wi=_t()+500,_l(e,t)):Al=Jl(e,t);e:do try{if(me!==0&&ie!==null){t=ie;var r=pt;t:switch(me){case 1:me=0,pt=null,Bl(e,t,r,1);break;case 2:case 9:if(qu(r)){me=0,pt=null,Ad(t);break}t=function(){me!==2&&me!==9||Se!==e||(me=7),Yt(e)},r.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:qu(r)?(me=0,pt=null,Ad(t)):(me=0,pt=null,Bl(e,t,r,7));break;case 5:var c=null;switch(ie.tag){case 26:c=ie.memoizedState;case 5:case 27:var f=ie;if(!c||dp(c)){me=0,pt=null;var m=f.sibling;if(m!==null)ie=m;else{var w=f.return;w!==null?(ie=w,er(w)):ie=null}break t}}me=0,pt=null,Bl(e,t,r,5);break;case 6:me=0,pt=null,Bl(e,t,r,6);break;case 8:wc(),Ae=6;break e;default:throw Error(o(462))}}vh();break}catch(M){kd(e,M)}while(!0);return Zt=$a=null,R.H=l,R.A=n,ge=a,ie!==null?0:(Se=null,oe=0,ji(),Ae)}function vh(){for(;ie!==null&&!Y0();)Md(ie)}function Md(e){var t=ld(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?er(e):ie=t}function Ad(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wf(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=Wf(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:Ys(t);default:id(a,t),t=ie=Au(t,ta),t=ld(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?er(e):ie=t}function Bl(e,t,a,l){Zt=$a=null,Ys(t),kl=null,Nn=0;var n=t.return;try{if(sh(e,n,t,a,oe)){Ae=1,Qi(e,bt(a,e.current)),ie=null;return}}catch(r){if(n!==null)throw ie=n,r;Ae=1,Qi(e,bt(a,e.current)),ie=null;return}t.flags&32768?(he||l===1?e=!0:Al||(oe&536870912)!==0?e=!1:(Sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=wt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Od(t,e)):er(t)}function er(e){var t=e;do{if((t.flags&32768)!==0){Od(t,Sa);return}e=t.return;var a=oh(t.alternate,t,ta);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ae===0&&(Ae=5)}function Od(e,t){do{var a=uh(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);Ae=6,ie=null}function Dd(e,t,a,l,n,r,c,f,m){e.cancelPendingCommit=null;do tr();while(Ke!==0);if((ge&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=gs,F0(e,a,r,c,f,m),e===Se&&(ie=Se=null,oe=0),Dl=t,za=e,Cl=a,yc=r,jc=n,wd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sh(ri,function(){return Hd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=H.p,H.p=2,c=ge,ge|=4;try{fh(e,t,a)}finally{ge=c,H.p=n,R.T=l}}Ke=1,Cd(),_d(),Bd()}}function Cd(){if(Ke===1){Ke=0;var e=za,t=Dl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=ge;ge|=4;try{md(t,e);var r=Uc,c=ju(e.containerInfo),f=r.focusedElem,m=r.selectionRange;if(c!==f&&f&&f.ownerDocument&&yu(f.ownerDocument.documentElement,f)){if(m!==null&&us(f)){var w=m.start,M=m.end;if(M===void 0&&(M=w),"selectionStart"in f)f.selectionStart=w,f.selectionEnd=Math.min(M,f.value.length);else{var O=f.ownerDocument||document,N=O&&O.defaultView||window;if(N.getSelection){var z=N.getSelection(),W=f.textContent.length,K=Math.min(m.start,W),be=m.end===void 0?K:Math.min(m.end,W);!z.extend&&K>be&&(c=be,be=K,K=c);var j=bu(f,K),b=bu(f,be);if(j&&b&&(z.rangeCount!==1||z.anchorNode!==j.node||z.anchorOffset!==j.offset||z.focusNode!==b.node||z.focusOffset!==b.offset)){var S=O.createRange();S.setStart(j.node,j.offset),z.removeAllRanges(),K>be?(z.addRange(S),z.extend(b.node,b.offset)):(S.setEnd(b.node,b.offset),z.addRange(S))}}}}for(O=[],z=f;z=z.parentNode;)z.nodeType===1&&O.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<O.length;f++){var A=O[f];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}pr=!!Bc,Uc=Bc=null}finally{ge=n,H.p=l,R.T=a}}e.current=t,Ke=2}}function _d(){if(Ke===2){Ke=0;var e=za,t=Dl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=ge;ge|=4;try{dd(e,t.alternate,t)}finally{ge=n,H.p=l,R.T=a}}Ke=3}}function Bd(){if(Ke===4||Ke===3){Ke=0,q0();var e=za,t=Dl,a=Cl,l=wd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Dl=za=null,Ud(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Na=null),Vr(a),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=H.p,H.p=2,R.T=null;try{for(var r=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];r(f.value,{componentStack:f.stack})}}finally{R.T=t,H.p=n}}(Cl&3)!==0&&tr(),Yt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Sc?Dn++:(Dn=0,Sc=e):Dn=0,Cn(0)}}function Ud(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pn(t)))}function tr(e){return Cd(),_d(),Bd(),Hd()}function Hd(){if(Ke!==5)return!1;var e=za,t=yc;yc=0;var a=Vr(Cl),l=R.T,n=H.p;try{H.p=32>a?32:a,R.T=null,a=jc,jc=null;var r=za,c=Cl;if(Ke=0,Dl=za=null,Cl=0,(ge&6)!==0)throw Error(o(331));var f=ge;if(ge|=4,jd(r.current),vd(r,r.current,c,a),ge=f,Cn(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Kl,r)}catch{}return!0}finally{H.p=n,R.T=l,Ud(e,t)}}function Ld(e,t,a){t=bt(a,t),t=ec(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(Fl(e,2),Yt(e))}function je(e,t,a){if(e.tag===3)Ld(e,e,a);else for(;t!==null;){if(t.tag===3){Ld(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Na===null||!Na.has(l))){e=bt(a,e),a=Vf(2),l=ga(t,a,2),l!==null&&(Xf(a,l,t,e),Fl(l,2),Yt(l));break}}t=t.return}}function Ec(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new hh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(mc=!0,n.add(a),e=bh.bind(null,e,t,a),t.then(e,e))}function bh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(oe&a)===a&&(Ae===4||Ae===3&&(oe&62914560)===oe&&300>_t()-bc?(ge&2)===0&&_l(e,0):xc|=a,Ol===oe&&(Ol=0)),Yt(e)}function Yd(e,t){t===0&&(t=_o()),e=xl(e,t),e!==null&&(Fl(e,t),Yt(e))}function yh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Yd(e,a)}function jh(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Yd(e,a)}function Sh(e,t){return Lr(e,t)}var ar=null,Ul=null,kc=!1,lr=!1,Tc=!1,Ia=0;function Yt(e){e!==Ul&&e.next===null&&(Ul===null?ar=Ul=e:Ul=Ul.next=e),lr=!0,kc||(kc=!0,Nh())}function Cn(e,t){if(!Tc&&lr){Tc=!0;do for(var a=!1,l=ar;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var r=0;else{var c=l.suspendedLanes,f=l.pingedLanes;r=(1<<31-ct(42|e)+1)-1,r&=n&~(c&~f),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Xd(l,r))}else r=oe,r=oi(l,l===Se?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Jl(l,r)||(a=!0,Xd(l,r));l=l.next}while(a);Tc=!1}}function wh(){qd()}function qd(){lr=kc=!1;var e=0;Ia!==0&&(Oh()&&(e=Ia),Ia=0);for(var t=_t(),a=null,l=ar;l!==null;){var n=l.next,r=Gd(l,t);r===0?(l.next=null,a===null?ar=n:a.next=n,n===null&&(Ul=a)):(a=l,(e!==0||(r&3)!==0)&&(lr=!0)),l=n}Cn(e)}function Gd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-ct(r),f=1<<c,m=n[c];m===-1?((f&a)===0||(f&l)!==0)&&(n[c]=J0(f,t)):m<=t&&(e.expiredLanes|=f),r&=~f}if(t=Se,a=oe,a=oi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Yr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Yr(l),Vr(a)){case 2:case 8:a=Oo;break;case 32:a=ri;break;case 268435456:a=Do;break;default:a=ri}return l=Vd.bind(null,e),a=Lr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Yr(l),e.callbackPriority=2,e.callbackNode=null,2}function Vd(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tr()&&e.callbackNode!==a)return null;var l=oe;return l=oi(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(zd(e,l,t),Gd(e,_t()),e.callbackNode!=null&&e.callbackNode===a?Vd.bind(null,e):null)}function Xd(e,t){if(tr())return null;zd(e,t,!0)}function Nh(){Ch(function(){(ge&6)!==0?Lr(Ao,wh):qd()})}function Rc(){return Ia===0&&(Ia=Co()),Ia}function Qd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hi(""+e)}function $d(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function zh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var r=Qd((n[tt]||null).action),c=l.submitter;c&&(t=(t=c[tt]||null)?Qd(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var f=new vi("action","action",null,l,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ia!==0){var m=c?$d(n,c):new FormData(n);Js(a,{pending:!0,data:m,method:n.method,action:r},null,m)}}else typeof r=="function"&&(f.preventDefault(),m=c?$d(n,c):new FormData(n),Js(a,{pending:!0,data:m,method:n.method,action:r},r,m))},currentTarget:n}]})}}for(var Mc=0;Mc<hs.length;Mc++){var Ac=hs[Mc],Eh=Ac.toLowerCase(),kh=Ac[0].toUpperCase()+Ac.slice(1);kt(Eh,"on"+kh)}kt(Nu,"onAnimationEnd"),kt(zu,"onAnimationIteration"),kt(Eu,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(X1,"onTransitionRun"),kt(Q1,"onTransitionStart"),kt($1,"onTransitionCancel"),kt(ku,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Th=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));function Zd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var c=l.length-1;0<=c;c--){var f=l[c],m=f.instance,w=f.currentTarget;if(f=f.listener,m!==r&&n.isPropagationStopped())break e;r=f,n.currentTarget=w;try{r(n)}catch(M){Xi(M)}n.currentTarget=null,r=m}else for(c=0;c<l.length;c++){if(f=l[c],m=f.instance,w=f.currentTarget,f=f.listener,m!==r&&n.isPropagationStopped())break e;r=f,n.currentTarget=w;try{r(n)}catch(M){Xi(M)}n.currentTarget=null,r=m}}}}function re(e,t){var a=t[Xr];a===void 0&&(a=t[Xr]=new Set);var l=e+"__bubble";a.has(l)||(Kd(t,e,2,!1),a.add(l))}function Oc(e,t,a){var l=0;t&&(l|=4),Kd(a,e,l,t)}var nr="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[nr]){e[nr]=!0,Yo.forEach(function(a){a!=="selectionchange"&&(Th.has(a)||Oc(a,!1,e),Oc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nr]||(t[nr]=!0,Oc("selectionchange",!1,t))}}function Kd(e,t,a,l){switch(vp(t)){case 2:var n=t2;break;case 8:n=a2;break;default:n=Zc}a=n.bind(null,t,a,e),n=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Cc(e,t,a,l,n){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var f=l.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=l.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=nl(f),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){l=r=c;continue e}f=f.parentNode}}l=l.return}eu(function(){var w=r,M=Ir(a),O=[];e:{var N=Tu.get(e);if(N!==void 0){var z=vi,W=e;switch(e){case"keypress":if(mi(a)===0)break e;case"keydown":case"keyup":z=S1;break;case"focusin":W="focus",z=is;break;case"focusout":W="blur",z=is;break;case"beforeblur":case"afterblur":z=is;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=u1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=z1;break;case Nu:case zu:case Eu:z=p1;break;case ku:z=k1;break;case"scroll":case"scrollend":z=c1;break;case"wheel":z=R1;break;case"copy":case"cut":case"paste":z=g1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=iu;break;case"toggle":case"beforetoggle":z=A1}var K=(t&4)!==0,be=!K&&(e==="scroll"||e==="scrollend"),j=K?N!==null?N+"Capture":null:N;K=[];for(var b=w,S;b!==null;){var A=b;if(S=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||S===null||j===null||(A=Il(b,j),A!=null&&K.push(Bn(b,A,S))),be)break;b=b.return}0<K.length&&(N=new z(N,W,null,a,M),O.push({event:N,listeners:K}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",N&&a!==Pr&&(W=a.relatedTarget||a.fromElement)&&(nl(W)||W[ll]))break e;if((z||N)&&(N=M.window===M?M:(N=M.ownerDocument)?N.defaultView||N.parentWindow:window,z?(W=a.relatedTarget||a.toElement,z=w,W=W?nl(W):null,W!==null&&(be=p(W),K=W.tag,W!==be||K!==5&&K!==27&&K!==6)&&(W=null)):(z=null,W=w),z!==W)){if(K=lu,A="onMouseLeave",j="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(K=iu,A="onPointerLeave",j="onPointerEnter",b="pointer"),be=z==null?N:Pl(z),S=W==null?N:Pl(W),N=new K(A,b+"leave",z,a,M),N.target=be,N.relatedTarget=S,A=null,nl(M)===w&&(K=new K(j,b+"enter",W,a,M),K.target=S,K.relatedTarget=be,A=K),be=A,z&&W)t:{for(K=z,j=W,b=0,S=K;S;S=Hl(S))b++;for(S=0,A=j;A;A=Hl(A))S++;for(;0<b-S;)K=Hl(K),b--;for(;0<S-b;)j=Hl(j),S--;for(;b--;){if(K===j||j!==null&&K===j.alternate)break t;K=Hl(K),j=Hl(j)}K=null}else K=null;z!==null&&Jd(O,N,z,K,!1),W!==null&&be!==null&&Jd(O,be,W,K,!0)}}e:{if(N=w?Pl(w):window,z=N.nodeName&&N.nodeName.toLowerCase(),z==="select"||z==="input"&&N.type==="file")var V=pu;else if(fu(N))if(hu)V=q1;else{V=L1;var ne=H1}else z=N.nodeName,!z||z.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?w&&Wr(w.elementType)&&(V=pu):V=Y1;if(V&&(V=V(e,w))){du(O,V,a,M);break e}ne&&ne(e,N,w),e==="focusout"&&w&&N.type==="number"&&w.memoizedProps.value!=null&&Fr(N,"number",N.value)}switch(ne=w?Pl(w):window,e){case"focusin":(fu(ne)||ne.contentEditable==="true")&&(hl=ne,fs=w,cn=null);break;case"focusout":cn=fs=hl=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,Su(O,a,M);break;case"selectionchange":if(V1)break;case"keydown":case"keyup":Su(O,a,M)}var Q;if(ss)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else pl?ou(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(ru&&a.locale!=="ko"&&(pl||J!=="onCompositionStart"?J==="onCompositionEnd"&&pl&&(Q=tu()):(fa=M,as="value"in fa?fa.value:fa.textContent,pl=!0)),ne=ir(w,J),0<ne.length&&(J=new nu(J,e,null,a,M),O.push({event:J,listeners:ne}),Q?J.data=Q:(Q=uu(a),Q!==null&&(J.data=Q)))),(Q=D1?C1(e,a):_1(e,a))&&(J=ir(w,"onBeforeInput"),0<J.length&&(ne=new nu("onBeforeInput","beforeinput",null,a,M),O.push({event:ne,listeners:J}),ne.data=Q)),zh(O,e,w,a,M)}Zd(O,t)})}function Bn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ir(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Il(e,a),n!=null&&l.unshift(Bn(e,n,r)),n=Il(e,t),n!=null&&l.push(Bn(e,n,r))),e.tag===3)return l;e=e.return}return[]}function Hl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jd(e,t,a,l,n){for(var r=t._reactName,c=[];a!==null&&a!==l;){var f=a,m=f.alternate,w=f.stateNode;if(f=f.tag,m!==null&&m===l)break;f!==5&&f!==26&&f!==27||w===null||(m=w,n?(w=Il(a,r),w!=null&&c.unshift(Bn(a,w,m))):n||(w=Il(a,r),w!=null&&c.push(Bn(a,w,m)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Rh=/\r\n?/g,Mh=/\u0000|\uFFFD/g;function Fd(e){return(typeof e=="string"?e:""+e).replace(Rh,`
`).replace(Mh,"")}function Wd(e,t){return t=Fd(t),Fd(e)===t}function rr(){}function ve(e,t,a,l,n,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ul(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ul(e,""+l);break;case"className":fi(e,"class",l);break;case"tabIndex":fi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(e,a,l);break;case"style":Po(e,l,r);break;case"data":if(t!=="object"){fi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ve(e,t,"name",n.name,n,null),ve(e,t,"formEncType",n.formEncType,n,null),ve(e,t,"formMethod",n.formMethod,n,null),ve(e,t,"formTarget",n.formTarget,n,null)):(ve(e,t,"encType",n.encType,n,null),ve(e,t,"method",n.method,n,null),ve(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=rr);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=hi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":re("beforetoggle",e),re("toggle",e),ui(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ui(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=r1.get(a)||a,ui(e,a,l))}}function _c(e,t,a,l,n,r){switch(a){case"style":Po(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ul(e,l):(typeof l=="number"||typeof l=="bigint")&&ul(e,""+l);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=rr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[tt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ui(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var l=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ve(e,t,r,c,a,null)}}n&&ve(e,t,"srcSet",a.srcSet,a,null),l&&ve(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var f=r=c=n=null,m=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":n=M;break;case"type":c=M;break;case"checked":m=M;break;case"defaultChecked":w=M;break;case"value":r=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:ve(e,t,l,M,a,null)}}Ko(e,r,f,m,w,c,n,!1),di(e);return;case"select":re("invalid",e),l=c=r=null;for(n in a)if(a.hasOwnProperty(n)&&(f=a[n],f!=null))switch(n){case"value":r=f;break;case"defaultValue":c=f;break;case"multiple":l=f;default:ve(e,t,n,f,a,null)}t=r,a=c,e.multiple=!!l,t!=null?ol(e,!!l,t,!1):a!=null&&ol(e,!!l,a,!0);return;case"textarea":re("invalid",e),r=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":l=f;break;case"defaultValue":n=f;break;case"children":r=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:ve(e,t,c,f,a,null)}Fo(e,l,n,r),di(e);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ve(e,t,m,l,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(l=0;l<_n.length;l++)re(_n[l],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ve(e,t,w,l,a,null)}return;default:if(Wr(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&_c(e,t,M,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&ve(e,t,f,l,a,null))}function Ah(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,c=null,f=null,m=null,w=null,M=null;for(z in a){var O=a[z];if(a.hasOwnProperty(z)&&O!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":m=O;default:l.hasOwnProperty(z)||ve(e,t,z,null,l,O)}}for(var N in l){var z=l[N];if(O=a[N],l.hasOwnProperty(N)&&(z!=null||O!=null))switch(N){case"type":r=z;break;case"name":n=z;break;case"checked":w=z;break;case"defaultChecked":M=z;break;case"value":c=z;break;case"defaultValue":f=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==O&&ve(e,t,N,z,l,O)}}Jr(e,c,f,m,w,M,r,n);return;case"select":z=c=f=N=null;for(r in a)if(m=a[r],a.hasOwnProperty(r)&&m!=null)switch(r){case"value":break;case"multiple":z=m;default:l.hasOwnProperty(r)||ve(e,t,r,null,l,m)}for(n in l)if(r=l[n],m=a[n],l.hasOwnProperty(n)&&(r!=null||m!=null))switch(n){case"value":N=r;break;case"defaultValue":f=r;break;case"multiple":c=r;default:r!==m&&ve(e,t,n,r,l,m)}t=f,a=c,l=z,N!=null?ol(e,!!a,N,!1):!!l!=!!a&&(t!=null?ol(e,!!a,t,!0):ol(e,!!a,a?[]:"",!1));return;case"textarea":z=N=null;for(f in a)if(n=a[f],a.hasOwnProperty(f)&&n!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ve(e,t,f,null,l,n)}for(c in l)if(n=l[c],r=a[c],l.hasOwnProperty(c)&&(n!=null||r!=null))switch(c){case"value":N=n;break;case"defaultValue":z=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==r&&ve(e,t,c,n,l,r)}Jo(e,N,z);return;case"option":for(var W in a)if(N=a[W],a.hasOwnProperty(W)&&N!=null&&!l.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:ve(e,t,W,null,l,N)}for(m in l)if(N=l[m],z=a[m],l.hasOwnProperty(m)&&N!==z&&(N!=null||z!=null))switch(m){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:ve(e,t,m,N,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)N=a[K],a.hasOwnProperty(K)&&N!=null&&!l.hasOwnProperty(K)&&ve(e,t,K,null,l,N);for(w in l)if(N=l[w],z=a[w],l.hasOwnProperty(w)&&N!==z&&(N!=null||z!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:ve(e,t,w,N,l,z)}return;default:if(Wr(t)){for(var be in a)N=a[be],a.hasOwnProperty(be)&&N!==void 0&&!l.hasOwnProperty(be)&&_c(e,t,be,void 0,l,N);for(M in l)N=l[M],z=a[M],!l.hasOwnProperty(M)||N===z||N===void 0&&z===void 0||_c(e,t,M,N,l,z);return}}for(var j in a)N=a[j],a.hasOwnProperty(j)&&N!=null&&!l.hasOwnProperty(j)&&ve(e,t,j,null,l,N);for(O in l)N=l[O],z=a[O],!l.hasOwnProperty(O)||N===z||N==null&&z==null||ve(e,t,O,N,l,z)}var Bc=null,Uc=null;function sr(e){return e.nodeType===9?e:e.ownerDocument}function Pd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Id(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lc=null;function Oh(){var e=window.event;return e&&e.type==="popstate"?e===Lc?!1:(Lc=e,!0):(Lc=null,!1)}var ep=typeof setTimeout=="function"?setTimeout:void 0,Dh=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(e){return tp.resolve(null).then(e).catch(_h)}:ep;function _h(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function ap(e,t){var a=t,l=0,n=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<l&&8>l){a=l;var c=e.ownerDocument;if(a&1&&Un(c.documentElement),a&2&&Un(c.body),a&4)for(a=c.head,Un(a),c=a.firstChild;c;){var f=c.nextSibling,m=c.nodeName;c[Wl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=f}}if(n===0){e.removeChild(r),Qn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=r}while(a);Qn(t)}function Yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yc(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function Uh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rt(e.nextSibling),e===null))return null;return e}function qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Hh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Gc=null;function lp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function np(e,t,a){switch(t=sr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Un(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qr(e)}var zt=new Map,ip=new Set;function cr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=H.d;H.d={f:Lh,r:Yh,D:qh,C:Gh,L:Vh,m:Xh,X:$h,S:Qh,M:Zh};function Lh(){var e=aa.f(),t=Ii();return e||t}function Yh(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?zf(t):aa.r(e)}var Ll=typeof document>"u"?null:document;function rp(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),ip.has(n)||(ip.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function qh(e){aa.D(e),rp("dns-prefetch",e,null)}function Gh(e,t){aa.C(e,t),rp("preconnect",e,t)}function Vh(e,t,a){aa.L(e,t,a);var l=Ll;if(l&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+vt(a.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var r=n;switch(t){case"style":r=Yl(e);break;case"script":r=ql(e)}zt.has(r)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),zt.set(r,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Hn(r))||t==="script"&&l.querySelector(Ln(r))||(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function Xh(e,t){aa.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(e)+'"]',r=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ql(e)}if(!zt.has(r)&&(e=T({rel:"modulepreload",href:e},t),zt.set(r,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ln(r)))return}l=a.createElement("link"),Je(l,"link",e),Ge(l),a.head.appendChild(l)}}}function Qh(e,t,a){aa.S(e,t,a);var l=Ll;if(l&&e){var n=rl(l).hoistableStyles,r=Yl(e);t=t||"default";var c=n.get(r);if(!c){var f={loading:0,preload:null};if(c=l.querySelector(Hn(r)))f.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=zt.get(r))&&Vc(e,a);var m=c=l.createElement("link");Ge(m),Je(m,"link",e),m._p=new Promise(function(w,M){m.onload=w,m.onerror=M}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,or(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(r,c)}}}function $h(e,t){aa.X(e,t);var a=Ll;if(a&&e){var l=rl(a).hoistableScripts,n=ql(e),r=l.get(n);r||(r=a.querySelector(Ln(n)),r||(e=T({src:e,async:!0},t),(t=zt.get(n))&&Xc(e,t),r=a.createElement("script"),Ge(r),Je(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function Zh(e,t){aa.M(e,t);var a=Ll;if(a&&e){var l=rl(a).hoistableScripts,n=ql(e),r=l.get(n);r||(r=a.querySelector(Ln(n)),r||(e=T({src:e,async:!0,type:"module"},t),(t=zt.get(n))&&Xc(e,t),r=a.createElement("script"),Ge(r),Je(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function sp(e,t,a,l){var n=(n=ee.current)?cr(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Yl(a.href),a=rl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yl(a.href);var r=rl(n).hoistableStyles,c=r.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=n.querySelector(Hn(e)))&&!r._p&&(c.instance=r,c.state.loading=5),zt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zt.set(e,a),r||Kh(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ql(a),a=rl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Yl(e){return'href="'+vt(e)+'"'}function Hn(e){return'link[rel="stylesheet"]['+e+"]"}function cp(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Kh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ge(t),e.head.appendChild(t))}function ql(e){return'[src="'+vt(e)+'"]'}function Ln(e){return"script[async]"+e}function op(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,Ge(l),l;var n=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),Je(l,"style",n),or(l,a.precedence,e),t.instance=l;case"stylesheet":n=Yl(a.href);var r=e.querySelector(Hn(n));if(r)return t.state.loading|=4,t.instance=r,Ge(r),r;l=cp(a),(n=zt.get(n))&&Vc(l,n),r=(e.ownerDocument||e).createElement("link"),Ge(r);var c=r;return c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),Je(r,"link",l),t.state.loading|=4,or(r,a.precedence,e),t.instance=r;case"script":return r=ql(a.src),(n=e.querySelector(Ln(r)))?(t.instance=n,Ge(n),n):(l=a,(n=zt.get(r))&&(l=T({},a),Xc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ge(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,or(l,a.precedence,e));return t.instance}function or(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,r=n,c=0;c<l.length;c++){var f=l[c];if(f.dataset.precedence===t)r=f;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ur=null;function up(e,t,a){if(ur===null){var l=new Map,n=ur=new Map;n.set(a,l)}else n=ur,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Wl]||r[We]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var f=l.get(c);f?f.push(r):l.set(c,[r])}}return l}function fp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Jh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function dp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Yn=null;function Fh(){}function Wh(e,t,a){if(Yn===null)throw Error(o(475));var l=Yn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Yl(a.href),r=e.querySelector(Hn(n));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=fr.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,Ge(r);return}r=e.ownerDocument||e,a=cp(a),(n=zt.get(n))&&Vc(a,n),r=r.createElement("link"),Ge(r);var c=r;c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),Je(r,"link",a),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=fr.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Ph(){if(Yn===null)throw Error(o(475));var e=Yn;return e.stylesheets&&e.count===0&&Qc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Qc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function fr(){if(this.count--,this.count===0){if(this.stylesheets)Qc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dr=null;function Qc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dr=new Map,t.forEach(Ih,e),dr=null,fr.call(e))}function Ih(e,t){if(!(t.state.loading&4)){var a=dr.get(e);if(a)var l=a.get(null);else{a=new Map,dr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var c=n[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),r=a.get(c)||l,r===l&&a.set(null,n),a.set(c,n),this.count++,l=fr.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var qn={$$typeof:I,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function e2(e,t,a,l,n,r,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.hiddenUpdates=qr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function pp(e,t,a,l,n,r,c,f,m,w,M,O){return e=new e2(e,t,a,c,f,m,w,O),t=1,r===!0&&(t|=24),r=ut(3,null,null,t),e.current=r,r.stateNode=e,t=Es(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},Ms(r),e}function hp(e){return e?(e=vl,e):vl}function gp(e,t,a,l,n,r){n=hp(n),l.context===null?l.context=n:l.pendingContext=n,l=ha(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=ga(e,l,t),a!==null&&(gt(a,e,t),xn(a,e,t))}function mp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $c(e,t){mp(e,t),(e=e.alternate)&&mp(e,t)}function xp(e){if(e.tag===13){var t=xl(e,67108864);t!==null&&gt(t,e,67108864),$c(e,67108864)}}var pr=!0;function t2(e,t,a,l){var n=R.T;R.T=null;var r=H.p;try{H.p=2,Zc(e,t,a,l)}finally{H.p=r,R.T=n}}function a2(e,t,a,l){var n=R.T;R.T=null;var r=H.p;try{H.p=8,Zc(e,t,a,l)}finally{H.p=r,R.T=n}}function Zc(e,t,a,l){if(pr){var n=Kc(l);if(n===null)Cc(e,t,l,hr,a),bp(e,l);else if(n2(n,e,t,a,l))l.stopPropagation();else if(bp(e,l),t&4&&-1<l2.indexOf(e)){for(;n!==null;){var r=il(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Ba(r.pendingLanes);if(c!==0){var f=r;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var m=1<<31-ct(c);f.entanglements[1]|=m,c&=~m}Yt(r),(ge&6)===0&&(Wi=_t()+500,Cn(0))}}break;case 13:f=xl(r,2),f!==null&&gt(f,r,2),Ii(),$c(r,2)}if(r=Kc(l),r===null&&Cc(e,t,l,hr,a),r===n)break;n=r}n!==null&&l.stopPropagation()}else Cc(e,t,l,null,a)}}function Kc(e){return e=Ir(e),Jc(e)}var hr=null;function Jc(e){if(hr=null,e=nl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hr=e,null}function vp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G0()){case Ao:return 2;case Oo:return 8;case ri:case V0:return 32;case Do:return 268435456;default:return 32}default:return 32}}var Fc=!1,Ta=null,Ra=null,Ma=null,Gn=new Map,Vn=new Map,Aa=[],l2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bp(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Xn(e,t,a,l,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function n2(e,t,a,l,n){switch(t){case"focusin":return Ta=Xn(Ta,e,t,a,l,n),!0;case"dragenter":return Ra=Xn(Ra,e,t,a,l,n),!0;case"mouseover":return Ma=Xn(Ma,e,t,a,l,n),!0;case"pointerover":var r=n.pointerId;return Gn.set(r,Xn(Gn.get(r)||null,e,t,a,l,n)),!0;case"gotpointercapture":return r=n.pointerId,Vn.set(r,Xn(Vn.get(r)||null,e,t,a,l,n)),!0}return!1}function yp(e){var t=nl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,W0(e.priority,function(){if(a.tag===13){var l=ht();l=Gr(l);var n=xl(a,l);n!==null&&gt(n,a,l),$c(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Kc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Pr=l,a.target.dispatchEvent(l),Pr=null}else return t=il(a),t!==null&&xp(t),e.blockedOn=a,!1;t.shift()}return!0}function jp(e,t,a){gr(e)&&a.delete(t)}function i2(){Fc=!1,Ta!==null&&gr(Ta)&&(Ta=null),Ra!==null&&gr(Ra)&&(Ra=null),Ma!==null&&gr(Ma)&&(Ma=null),Gn.forEach(jp),Vn.forEach(jp)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fc||(Fc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,i2)))}var xr=null;function Sp(e){xr!==e&&(xr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xr===e&&(xr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Jc(l||a)===null)continue;break}var r=il(a);r!==null&&(e.splice(t,3),t-=3,Js(r,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Qn(e){function t(m){return mr(m,e)}Ta!==null&&mr(Ta,e),Ra!==null&&mr(Ra,e),Ma!==null&&mr(Ma,e),Gn.forEach(t),Vn.forEach(t);for(var a=0;a<Aa.length;a++){var l=Aa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)yp(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],r=a[l+1],c=n[tt]||null;if(typeof r=="function")c||Sp(a);else if(c){var f=null;if(r&&r.hasAttribute("formAction")){if(n=r,c=r[tt]||null)f=c.formAction;else if(Jc(n)!==null)continue}else f=c.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),Sp(a)}}}function Wc(e){this._internalRoot=e}vr.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=ht();gp(a,l,e,t,null,null)},vr.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gp(e.current,2,null,e,null,null),Ii(),t[ll]=null}};function vr(e){this._internalRoot=e}vr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ho();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Aa.length&&t!==0&&t<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&yp(e)}};var wp=u.version;if(wp!=="19.1.1")throw Error(o(527,wp,"19.1.1"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var r2={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{Kl=br.inject(r2),st=br}catch{}}return Zn.createRoot=function(e,t){if(!h(e))throw Error(o(299));var a=!1,l="",n=Lf,r=Yf,c=qf,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks)),t=pp(e,1,!1,null,null,a,l,n,r,c,f,null),e[ll]=t.current,Dc(e),new Wc(t)},Zn.hydrateRoot=function(e,t,a){if(!h(e))throw Error(o(299));var l=!1,n="",r=Lf,c=Yf,f=qf,m=null,w=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(m=a.unstable_transitionCallbacks),a.formState!==void 0&&(w=a.formState)),t=pp(e,1,!0,t,a??null,l,n,r,c,f,m,w),t.context=hp(null),a=t.current,l=ht(),l=Gr(l),n=ha(l),n.callback=null,ga(a,n,l),a=l,t.current.lanes=a,Fl(t,a),Yt(t),e[ll]=t.current,Dc(e),new vr(t)},Zn.version="19.1.1",Zn}var Dp;function m2(){if(Dp)return eo.exports;Dp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),eo.exports=g2(),eo.exports}var x2=m2();const v2=f0(x2);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cp="popstate";function b2(s={}){function u(o,h){let{pathname:p,search:y,hash:E}=o.location;return mo("",{pathname:p,search:y,hash:E},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(o,h){return typeof h=="string"?h:ei(h)}return j2(u,d,null,s)}function Ee(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Mt(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function y2(){return Math.random().toString(36).substring(2,10)}function _p(s,u){return{usr:s.state,key:s.key,idx:u}}function mo(s,u,d=null,o){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof u=="string"?Ql(u):u,state:d,key:u&&u.key||o||y2()}}function ei({pathname:s="/",search:u="",hash:d=""}){return u&&u!=="?"&&(s+=u.charAt(0)==="?"?u:"?"+u),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function Ql(s){let u={};if(s){let d=s.indexOf("#");d>=0&&(u.hash=s.substring(d),s=s.substring(0,d));let o=s.indexOf("?");o>=0&&(u.search=s.substring(o),s=s.substring(0,o)),s&&(u.pathname=s)}return u}function j2(s,u,d,o={}){let{window:h=document.defaultView,v5Compat:p=!1}=o,y=h.history,E="POP",x=null,g=T();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function T(){return(y.state||{idx:null}).idx}function C(){E="POP";let q=T(),U=q==null?null:q-g;g=q,x&&x({action:E,location:X.location,delta:U})}function _(q,U){E="PUSH";let ce=mo(X.location,q,U);g=T()+1;let I=_p(ce,g),fe=X.createHref(ce);try{y.pushState(I,"",fe)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;h.location.assign(fe)}p&&x&&x({action:E,location:X.location,delta:1})}function B(q,U){E="REPLACE";let ce=mo(X.location,q,U);g=T();let I=_p(ce,g),fe=X.createHref(ce);y.replaceState(I,"",fe),p&&x&&x({action:E,location:X.location,delta:0})}function Y(q){return S2(q)}let X={get action(){return E},get location(){return s(h,y)},listen(q){if(x)throw new Error("A history only accepts one active listener");return h.addEventListener(Cp,C),x=q,()=>{h.removeEventListener(Cp,C),x=null}},createHref(q){return u(h,q)},createURL:Y,encodeLocation(q){let U=Y(q);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:_,replace:B,go(q){return y.go(q)}};return X}function S2(s,u=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(d,"No window.location.(origin|href) available to create URL");let o=typeof s=="string"?s:ei(s);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function d0(s,u,d="/"){return w2(s,u,d,!1)}function w2(s,u,d,o){let h=typeof u=="string"?Ql(u):u,p=sa(h.pathname||"/",d);if(p==null)return null;let y=p0(s);N2(y);let E=null;for(let x=0;E==null&&x<y.length;++x){let g=_2(p);E=D2(y[x],g,o)}return E}function p0(s,u=[],d=[],o=""){let h=(p,y,E)=>{let x={relativePath:E===void 0?p.path||"":E,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};x.relativePath.startsWith("/")&&(Ee(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length));let g=ra([o,x.relativePath]),T=d.concat(x);p.children&&p.children.length>0&&(Ee(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),p0(p.children,u,T,g)),!(p.path==null&&!p.index)&&u.push({path:g,score:A2(g,p.index),routesMeta:T})};return s.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))h(p,y);else for(let E of h0(p.path))h(p,y,E)}),u}function h0(s){let u=s.split("/");if(u.length===0)return[];let[d,...o]=u,h=d.endsWith("?"),p=d.replace(/\?$/,"");if(o.length===0)return h?[p,""]:[p];let y=h0(o.join("/")),E=[];return E.push(...y.map(x=>x===""?p:[p,x].join("/"))),h&&E.push(...y),E.map(x=>s.startsWith("/")&&x===""?"/":x)}function N2(s){s.sort((u,d)=>u.score!==d.score?d.score-u.score:O2(u.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var z2=/^:[\w-]+$/,E2=3,k2=2,T2=1,R2=10,M2=-2,Bp=s=>s==="*";function A2(s,u){let d=s.split("/"),o=d.length;return d.some(Bp)&&(o+=M2),u&&(o+=k2),d.filter(h=>!Bp(h)).reduce((h,p)=>h+(z2.test(p)?E2:p===""?T2:R2),o)}function O2(s,u){return s.length===u.length&&s.slice(0,-1).every((o,h)=>o===u[h])?s[s.length-1]-u[u.length-1]:0}function D2(s,u,d=!1){let{routesMeta:o}=s,h={},p="/",y=[];for(let E=0;E<o.length;++E){let x=o[E],g=E===o.length-1,T=p==="/"?u:u.slice(p.length)||"/",C=Tr({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},T),_=x.route;if(!C&&g&&d&&!o[o.length-1].route.index&&(C=Tr({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},T)),!C)return null;Object.assign(h,C.params),y.push({params:h,pathname:ra([p,C.pathname]),pathnameBase:L2(ra([p,C.pathnameBase])),route:_}),C.pathnameBase!=="/"&&(p=ra([p,C.pathnameBase]))}return y}function Tr(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[d,o]=C2(s.path,s.caseSensitive,s.end),h=u.match(d);if(!h)return null;let p=h[0],y=p.replace(/(.)\/+$/,"$1"),E=h.slice(1);return{params:o.reduce((g,{paramName:T,isOptional:C},_)=>{if(T==="*"){let Y=E[_]||"";y=p.slice(0,p.length-Y.length).replace(/(.)\/+$/,"$1")}const B=E[_];return C&&!B?g[T]=void 0:g[T]=(B||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:y,pattern:s}}function C2(s,u=!1,d=!0){Mt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let o=[],h="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,x)=>(o.push({paramName:E,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(o.push({paramName:"*"}),h+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":s!==""&&s!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,u?void 0:"i"),o]}function _2(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Mt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),s}}function sa(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let d=u.endsWith("/")?u.length-1:u.length,o=s.charAt(d);return o&&o!=="/"?null:s.slice(d)||"/"}function B2(s,u="/"){let{pathname:d,search:o="",hash:h=""}=typeof s=="string"?Ql(s):s;return{pathname:d?d.startsWith("/")?d:U2(d,u):u,search:Y2(o),hash:q2(h)}}function U2(s,u){let d=u.replace(/\/+$/,"").split("/");return s.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function no(s,u,d,o){return`Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function H2(s){return s.filter((u,d)=>d===0||u.route.path&&u.route.path.length>0)}function No(s){let u=H2(s);return u.map((d,o)=>o===u.length-1?d.pathname:d.pathnameBase)}function zo(s,u,d,o=!1){let h;typeof s=="string"?h=Ql(s):(h={...s},Ee(!h.pathname||!h.pathname.includes("?"),no("?","pathname","search",h)),Ee(!h.pathname||!h.pathname.includes("#"),no("#","pathname","hash",h)),Ee(!h.search||!h.search.includes("#"),no("#","search","hash",h)));let p=s===""||h.pathname==="",y=p?"/":h.pathname,E;if(y==null)E=d;else{let C=u.length-1;if(!o&&y.startsWith("..")){let _=y.split("/");for(;_[0]==="..";)_.shift(),C-=1;h.pathname=_.join("/")}E=C>=0?u[C]:"/"}let x=B2(h,E),g=y&&y!=="/"&&y.endsWith("/"),T=(p||y===".")&&d.endsWith("/");return!x.pathname.endsWith("/")&&(g||T)&&(x.pathname+="/"),x}var ra=s=>s.join("/").replace(/\/\/+/g,"/"),L2=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Y2=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,q2=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function G2(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var g0=["POST","PUT","PATCH","DELETE"];new Set(g0);var V2=["GET",...g0];new Set(V2);var $l=k.createContext(null);$l.displayName="DataRouter";var Cr=k.createContext(null);Cr.displayName="DataRouterState";k.createContext(!1);var m0=k.createContext({isTransitioning:!1});m0.displayName="ViewTransition";var X2=k.createContext(new Map);X2.displayName="Fetchers";var Q2=k.createContext(null);Q2.displayName="Await";var At=k.createContext(null);At.displayName="Navigation";var ai=k.createContext(null);ai.displayName="Location";var Ot=k.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var Eo=k.createContext(null);Eo.displayName="RouteError";function $2(s,{relative:u}={}){Ee(Zl(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=k.useContext(At),{hash:h,pathname:p,search:y}=li(s,{relative:u}),E=p;return d!=="/"&&(E=p==="/"?d:ra([d,p])),o.createHref({pathname:E,search:y,hash:h})}function Zl(){return k.useContext(ai)!=null}function _a(){return Ee(Zl(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(ai).location}var x0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v0(s){k.useContext(At).static||k.useLayoutEffect(s)}function b0(){let{isDataRoute:s}=k.useContext(Ot);return s?rg():Z2()}function Z2(){Ee(Zl(),"useNavigate() may be used only in the context of a <Router> component.");let s=k.useContext($l),{basename:u,navigator:d}=k.useContext(At),{matches:o}=k.useContext(Ot),{pathname:h}=_a(),p=JSON.stringify(No(o)),y=k.useRef(!1);return v0(()=>{y.current=!0}),k.useCallback((x,g={})=>{if(Mt(y.current,x0),!y.current)return;if(typeof x=="number"){d.go(x);return}let T=zo(x,JSON.parse(p),h,g.relative==="path");s==null&&u!=="/"&&(T.pathname=T.pathname==="/"?u:ra([u,T.pathname])),(g.replace?d.replace:d.push)(T,g.state,g)},[u,d,p,h,s])}k.createContext(null);function K2(){let{matches:s}=k.useContext(Ot),u=s[s.length-1];return u?u.params:{}}function li(s,{relative:u}={}){let{matches:d}=k.useContext(Ot),{pathname:o}=_a(),h=JSON.stringify(No(d));return k.useMemo(()=>zo(s,JSON.parse(h),o,u==="path"),[s,h,o,u])}function J2(s,u){return y0(s,u)}function y0(s,u,d,o){Ee(Zl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=k.useContext(At),{matches:p}=k.useContext(Ot),y=p[p.length-1],E=y?y.params:{},x=y?y.pathname:"/",g=y?y.pathnameBase:"/",T=y&&y.route;{let U=T&&T.path||"";j0(x,!T||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let C=_a(),_;if(u){let U=typeof u=="string"?Ql(u):u;Ee(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),_=U}else _=C;let B=_.pathname||"/",Y=B;if(g!=="/"){let U=g.replace(/^\//,"").split("/");Y="/"+B.replace(/^\//,"").split("/").slice(U.length).join("/")}let X=d0(s,{pathname:Y});Mt(T||X!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Mt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=eg(X&&X.map(U=>Object.assign({},U,{params:Object.assign({},E,U.params),pathname:ra([g,h.encodeLocation?h.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:ra([g,h.encodeLocation?h.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),p,d,o);return u&&q?k.createElement(ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},q):q}function F2(){let s=ig(),u=G2(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),d=s instanceof Error?s.stack:null,o="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:o},p={padding:"2px 4px",backgroundColor:o},y=null;return console.error("Error handled by React Router default ErrorBoundary:",s),y=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:p},"ErrorBoundary")," or"," ",k.createElement("code",{style:p},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},u),d?k.createElement("pre",{style:h},d):null,y)}var W2=k.createElement(F2,null),P2=class extends k.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,u){return u.location!==s.location||u.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:u.error,location:u.location,revalidation:s.revalidation||u.revalidation}}componentDidCatch(s,u){console.error("React Router caught the following error during render",s,u)}render(){return this.state.error!==void 0?k.createElement(Ot.Provider,{value:this.props.routeContext},k.createElement(Eo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function I2({routeContext:s,match:u,children:d}){let o=k.useContext($l);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),k.createElement(Ot.Provider,{value:s},d)}function eg(s,u=[],d=null,o=null){if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(u.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let h=s,p=d?.errors;if(p!=null){let x=h.findIndex(g=>g.route.id&&p?.[g.route.id]!==void 0);Ee(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,x+1))}let y=!1,E=-1;if(d)for(let x=0;x<h.length;x++){let g=h[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(E=x),g.route.id){let{loaderData:T,errors:C}=d,_=g.route.loader&&!T.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||_){y=!0,E>=0?h=h.slice(0,E+1):h=[h[0]];break}}}return h.reduceRight((x,g,T)=>{let C,_=!1,B=null,Y=null;d&&(C=p&&g.route.id?p[g.route.id]:void 0,B=g.route.errorElement||W2,y&&(E<0&&T===0?(j0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,Y=null):E===T&&(_=!0,Y=g.route.hydrateFallbackElement||null)));let X=u.concat(h.slice(0,T+1)),q=()=>{let U;return C?U=B:_?U=Y:g.route.Component?U=k.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=x,k.createElement(I2,{match:g,routeContext:{outlet:x,matches:X,isDataRoute:d!=null},children:U})};return d&&(g.route.ErrorBoundary||g.route.errorElement||T===0)?k.createElement(P2,{location:d.location,revalidation:d.revalidation,component:B,error:C,children:q(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):q()},null)}function ko(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tg(s){let u=k.useContext($l);return Ee(u,ko(s)),u}function ag(s){let u=k.useContext(Cr);return Ee(u,ko(s)),u}function lg(s){let u=k.useContext(Ot);return Ee(u,ko(s)),u}function To(s){let u=lg(s),d=u.matches[u.matches.length-1];return Ee(d.route.id,`${s} can only be used on routes that contain a unique "id"`),d.route.id}function ng(){return To("useRouteId")}function ig(){let s=k.useContext(Eo),u=ag("useRouteError"),d=To("useRouteError");return s!==void 0?s:u.errors?.[d]}function rg(){let{router:s}=tg("useNavigate"),u=To("useNavigate"),d=k.useRef(!1);return v0(()=>{d.current=!0}),k.useCallback(async(h,p={})=>{Mt(d.current,x0),d.current&&(typeof h=="number"?s.navigate(h):await s.navigate(h,{fromRouteId:u,...p}))},[s,u])}var Up={};function j0(s,u,d){!u&&!Up[s]&&(Up[s]=!0,Mt(!1,d))}k.memo(sg);function sg({routes:s,future:u,state:d}){return y0(s,void 0,d,u)}function cg({to:s,replace:u,state:d,relative:o}){Ee(Zl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:h}=k.useContext(At);Mt(!h,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=k.useContext(Ot),{pathname:y}=_a(),E=b0(),x=zo(s,No(p),y,o==="path"),g=JSON.stringify(x);return k.useEffect(()=>{E(JSON.parse(g),{replace:u,state:d,relative:o})},[E,g,o,u,d]),null}function Da(s){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function og({basename:s="/",children:u=null,location:d,navigationType:o="POP",navigator:h,static:p=!1}){Ee(!Zl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=s.replace(/^\/*/,"/"),E=k.useMemo(()=>({basename:y,navigator:h,static:p,future:{}}),[y,h,p]);typeof d=="string"&&(d=Ql(d));let{pathname:x="/",search:g="",hash:T="",state:C=null,key:_="default"}=d,B=k.useMemo(()=>{let Y=sa(x,y);return Y==null?null:{location:{pathname:Y,search:g,hash:T,state:C,key:_},navigationType:o}},[y,x,g,T,C,_,o]);return Mt(B!=null,`<Router basename="${y}"> is not able to match the URL "${x}${g}${T}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:k.createElement(At.Provider,{value:E},k.createElement(ai.Provider,{children:u,value:B}))}function ug({children:s,location:u}){return J2(xo(s),u)}function xo(s,u=[]){let d=[];return k.Children.forEach(s,(o,h)=>{if(!k.isValidElement(o))return;let p=[...u,h];if(o.type===k.Fragment){d.push.apply(d,xo(o.props.children,p));return}Ee(o.type===Da,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!o.props.index||!o.props.children,"An index route cannot have child routes.");let y={id:o.props.id||p.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(y.children=xo(o.props.children,p)),d.push(y)}),d}var Nr="get",zr="application/x-www-form-urlencoded";function _r(s){return s!=null&&typeof s.tagName=="string"}function fg(s){return _r(s)&&s.tagName.toLowerCase()==="button"}function dg(s){return _r(s)&&s.tagName.toLowerCase()==="form"}function pg(s){return _r(s)&&s.tagName.toLowerCase()==="input"}function hg(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function gg(s,u){return s.button===0&&(!u||u==="_self")&&!hg(s)}var yr=null;function mg(){if(yr===null)try{new FormData(document.createElement("form"),0),yr=!1}catch{yr=!0}return yr}var xg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function io(s){return s!=null&&!xg.has(s)?(Mt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zr}"`),null):s}function vg(s,u){let d,o,h,p,y;if(dg(s)){let E=s.getAttribute("action");o=E?sa(E,u):null,d=s.getAttribute("method")||Nr,h=io(s.getAttribute("enctype"))||zr,p=new FormData(s)}else if(fg(s)||pg(s)&&(s.type==="submit"||s.type==="image")){let E=s.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=s.getAttribute("formaction")||E.getAttribute("action");if(o=x?sa(x,u):null,d=s.getAttribute("formmethod")||E.getAttribute("method")||Nr,h=io(s.getAttribute("formenctype"))||io(E.getAttribute("enctype"))||zr,p=new FormData(E,s),!mg()){let{name:g,type:T,value:C}=s;if(T==="image"){let _=g?`${g}.`:"";p.append(`${_}x`,"0"),p.append(`${_}y`,"0")}else g&&p.append(g,C)}}else{if(_r(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Nr,o=null,h=zr,y=s}return p&&h==="text/plain"&&(y=p,p=void 0),{action:o,method:d.toLowerCase(),encType:h,formData:p,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ro(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function bg(s,u,d){let o=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return o.pathname==="/"?o.pathname=`_root.${d}`:u&&sa(o.pathname,u)==="/"?o.pathname=`${u.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function yg(s,u){if(s.id in u)return u[s.id];try{let d=await import(s.module);return u[s.id]=d,d}catch(d){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jg(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Sg(s,u,d){let o=await Promise.all(s.map(async h=>{let p=u.routes[h.route.id];if(p){let y=await yg(p,d);return y.links?y.links():[]}return[]}));return Eg(o.flat(1).filter(jg).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Hp(s,u,d,o,h,p){let y=(x,g)=>d[g]?x.route.id!==d[g].route.id:!0,E=(x,g)=>d[g].pathname!==x.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==x.params["*"];return p==="assets"?u.filter((x,g)=>y(x,g)||E(x,g)):p==="data"?u.filter((x,g)=>{let T=o.routes[x.route.id];if(!T||!T.hasLoader)return!1;if(y(x,g)||E(x,g))return!0;if(x.route.shouldRevalidate){let C=x.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function wg(s,u,{includeHydrateFallback:d}={}){return Ng(s.map(o=>{let h=u.routes[o.route.id];if(!h)return[];let p=[h.module];return h.clientActionModule&&(p=p.concat(h.clientActionModule)),h.clientLoaderModule&&(p=p.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(p=p.concat(h.hydrateFallbackModule)),h.imports&&(p=p.concat(h.imports)),p}).flat(1))}function Ng(s){return[...new Set(s)]}function zg(s){let u={},d=Object.keys(s).sort();for(let o of d)u[o]=s[o];return u}function Eg(s,u){let d=new Set;return new Set(u),s.reduce((o,h)=>{let p=JSON.stringify(zg(h));return d.has(p)||(d.add(p),o.push({key:p,link:h})),o},[])}function S0(){let s=k.useContext($l);return Ro(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function kg(){let s=k.useContext(Cr);return Ro(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Mo=k.createContext(void 0);Mo.displayName="FrameworkContext";function w0(){let s=k.useContext(Mo);return Ro(s,"You must render this element inside a <HydratedRouter> element"),s}function Tg(s,u){let d=k.useContext(Mo),[o,h]=k.useState(!1),[p,y]=k.useState(!1),{onFocus:E,onBlur:x,onMouseEnter:g,onMouseLeave:T,onTouchStart:C}=u,_=k.useRef(null);k.useEffect(()=>{if(s==="render"&&y(!0),s==="viewport"){let X=U=>{U.forEach(ce=>{y(ce.isIntersecting)})},q=new IntersectionObserver(X,{threshold:.5});return _.current&&q.observe(_.current),()=>{q.disconnect()}}},[s]),k.useEffect(()=>{if(o){let X=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(X)}}},[o]);let B=()=>{h(!0)},Y=()=>{h(!1),y(!1)};return d?s!=="intent"?[p,_,{}]:[p,_,{onFocus:Kn(E,B),onBlur:Kn(x,Y),onMouseEnter:Kn(g,B),onMouseLeave:Kn(T,Y),onTouchStart:Kn(C,B)}]:[!1,_,{}]}function Kn(s,u){return d=>{s&&s(d),d.defaultPrevented||u(d)}}function Rg({page:s,...u}){let{router:d}=S0(),o=k.useMemo(()=>d0(d.routes,s,d.basename),[d.routes,s,d.basename]);return o?k.createElement(Ag,{page:s,matches:o,...u}):null}function Mg(s){let{manifest:u,routeModules:d}=w0(),[o,h]=k.useState([]);return k.useEffect(()=>{let p=!1;return Sg(s,u,d).then(y=>{p||h(y)}),()=>{p=!0}},[s,u,d]),o}function Ag({page:s,matches:u,...d}){let o=_a(),{manifest:h,routeModules:p}=w0(),{basename:y}=S0(),{loaderData:E,matches:x}=kg(),g=k.useMemo(()=>Hp(s,u,x,h,o,"data"),[s,u,x,h,o]),T=k.useMemo(()=>Hp(s,u,x,h,o,"assets"),[s,u,x,h,o]),C=k.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let Y=new Set,X=!1;if(u.forEach(U=>{let ce=h.routes[U.route.id];!ce||!ce.hasLoader||(!g.some(I=>I.route.id===U.route.id)&&U.route.id in E&&p[U.route.id]?.shouldRevalidate||ce.hasClientLoader?X=!0:Y.add(U.route.id))}),Y.size===0)return[];let q=bg(s,y,"data");return X&&Y.size>0&&q.searchParams.set("_routes",u.filter(U=>Y.has(U.route.id)).map(U=>U.route.id).join(",")),[q.pathname+q.search]},[y,E,o,h,g,u,s,p]),_=k.useMemo(()=>wg(T,h),[T,h]),B=Mg(T);return k.createElement(k.Fragment,null,C.map(Y=>k.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...d})),_.map(Y=>k.createElement("link",{key:Y,rel:"modulepreload",href:Y,...d})),B.map(({key:Y,link:X})=>k.createElement("link",{key:Y,...X})))}function Og(...s){return u=>{s.forEach(d=>{typeof d=="function"?d(u):d!=null&&(d.current=u)})}}var N0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{N0&&(window.__reactRouterVersion="7.7.1")}catch{}function Dg({basename:s,children:u,window:d}){let o=k.useRef();o.current==null&&(o.current=b2({window:d,v5Compat:!0}));let h=o.current,[p,y]=k.useState({action:h.action,location:h.location}),E=k.useCallback(x=>{k.startTransition(()=>y(x))},[y]);return k.useLayoutEffect(()=>h.listen(E),[h,E]),k.createElement(og,{basename:s,children:u,location:p.location,navigationType:p.action,navigator:h})}var z0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=k.forwardRef(function({onClick:u,discover:d="render",prefetch:o="none",relative:h,reloadDocument:p,replace:y,state:E,target:x,to:g,preventScrollReset:T,viewTransition:C,..._},B){let{basename:Y}=k.useContext(At),X=typeof g=="string"&&z0.test(g),q,U=!1;if(typeof g=="string"&&X&&(q=g,N0))try{let we=new URL(window.location.href),P=g.startsWith("//")?new URL(we.protocol+g):new URL(g),Te=sa(P.pathname,Y);P.origin===we.origin&&Te!=null?g=Te+P.search+P.hash:U=!0}catch{Mt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ce=$2(g,{relative:h}),[I,fe,$]=Tg(o,_),Oe=Ug(g,{replace:y,state:E,target:x,preventScrollReset:T,relative:h,viewTransition:C});function De(we){u&&u(we),we.defaultPrevented||Oe(we)}let Be=k.createElement("a",{..._,...$,href:q||ce,onClick:U||p?u:De,ref:Og(B,fe),target:x,"data-discover":!X&&d==="render"?"true":void 0});return I&&!X?k.createElement(k.Fragment,null,Be,k.createElement(Rg,{page:ce})):Be});ue.displayName="Link";var Cg=k.forwardRef(function({"aria-current":u="page",caseSensitive:d=!1,className:o="",end:h=!1,style:p,to:y,viewTransition:E,children:x,...g},T){let C=li(y,{relative:g.relative}),_=_a(),B=k.useContext(Cr),{navigator:Y,basename:X}=k.useContext(At),q=B!=null&&Gg(C)&&E===!0,U=Y.encodeLocation?Y.encodeLocation(C).pathname:C.pathname,ce=_.pathname,I=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;d||(ce=ce.toLowerCase(),I=I?I.toLowerCase():null,U=U.toLowerCase()),I&&X&&(I=sa(I,X)||I);const fe=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let $=ce===U||!h&&ce.startsWith(U)&&ce.charAt(fe)==="/",Oe=I!=null&&(I===U||!h&&I.startsWith(U)&&I.charAt(U.length)==="/"),De={isActive:$,isPending:Oe,isTransitioning:q},Be=$?u:void 0,we;typeof o=="function"?we=o(De):we=[o,$?"active":null,Oe?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let P=typeof p=="function"?p(De):p;return k.createElement(ue,{...g,"aria-current":Be,className:we,ref:T,style:P,to:y,viewTransition:E},typeof x=="function"?x(De):x)});Cg.displayName="NavLink";var _g=k.forwardRef(({discover:s="render",fetcherKey:u,navigate:d,reloadDocument:o,replace:h,state:p,method:y=Nr,action:E,onSubmit:x,relative:g,preventScrollReset:T,viewTransition:C,..._},B)=>{let Y=Yg(),X=qg(E,{relative:g}),q=y.toLowerCase()==="get"?"get":"post",U=typeof E=="string"&&z0.test(E),ce=I=>{if(x&&x(I),I.defaultPrevented)return;I.preventDefault();let fe=I.nativeEvent.submitter,$=fe?.getAttribute("formmethod")||y;Y(fe||I.currentTarget,{fetcherKey:u,method:$,navigate:d,replace:h,state:p,relative:g,preventScrollReset:T,viewTransition:C})};return k.createElement("form",{ref:B,method:q,action:X,onSubmit:o?x:ce,..._,"data-discover":!U&&s==="render"?"true":void 0})});_g.displayName="Form";function Bg(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E0(s){let u=k.useContext($l);return Ee(u,Bg(s)),u}function Ug(s,{target:u,replace:d,state:o,preventScrollReset:h,relative:p,viewTransition:y}={}){let E=b0(),x=_a(),g=li(s,{relative:p});return k.useCallback(T=>{if(gg(T,u)){T.preventDefault();let C=d!==void 0?d:ei(x)===ei(g);E(s,{replace:C,state:o,preventScrollReset:h,relative:p,viewTransition:y})}},[x,E,g,d,o,u,s,h,p,y])}var Hg=0,Lg=()=>`__${String(++Hg)}__`;function Yg(){let{router:s}=E0("useSubmit"),{basename:u}=k.useContext(At),d=ng();return k.useCallback(async(o,h={})=>{let{action:p,method:y,encType:E,formData:x,body:g}=vg(o,u);if(h.navigate===!1){let T=h.fetcherKey||Lg();await s.fetch(T,d,h.action||p,{preventScrollReset:h.preventScrollReset,formData:x,body:g,formMethod:h.method||y,formEncType:h.encType||E,flushSync:h.flushSync})}else await s.navigate(h.action||p,{preventScrollReset:h.preventScrollReset,formData:x,body:g,formMethod:h.method||y,formEncType:h.encType||E,replace:h.replace,state:h.state,fromRouteId:d,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,u,d])}function qg(s,{relative:u}={}){let{basename:d}=k.useContext(At),o=k.useContext(Ot);Ee(o,"useFormAction must be used inside a RouteContext");let[h]=o.matches.slice(-1),p={...li(s||".",{relative:u})},y=_a();if(s==null){p.search=y.search;let E=new URLSearchParams(p.search),x=E.getAll("index");if(x.some(T=>T==="")){E.delete("index"),x.filter(C=>C).forEach(C=>E.append("index",C));let T=E.toString();p.search=T?`?${T}`:""}}return(!s||s===".")&&h.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:ra([d,p.pathname])),ei(p)}function Gg(s,{relative:u}={}){let d=k.useContext(m0);Ee(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=E0("useViewTransitionState"),h=li(s,{relative:u});if(!d.isTransitioning)return!1;let p=sa(d.currentLocation.pathname,o)||d.currentLocation.pathname,y=sa(d.nextLocation.pathname,o)||d.nextLocation.pathname;return Tr(h.pathname,y)!=null||Tr(h.pathname,p)!=null}const Vg=`
  .tcg-stage {
    /* perspective: deeper number = subtler 3D, shallower = more dramatic */
    perspective: 1600px;
    width: min(420px, 90vw);
    aspect-ratio: 5 / 7;
    cursor: pointer;
    position: relative;
  }

  .tcg-stage:focus-visible {
    outline: none;
  }
  .tcg-stage:focus-visible .tcg-flip::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 22px;
    border: 2px solid #f5d65a;
    pointer-events: none;
    z-index: 50;
  }

  /* OUTER flip layer: animates the 0->180deg flip with a transition.
     INNER tilt layer: tracks the cursor with no transition for responsiveness. */
  .tcg-flip {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transform: rotateY(var(--flip, 0deg));
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .tcg-stage.flipped .tcg-flip { --flip: 180deg; }

  .tcg-tilt {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
    will-change: transform;
  }

  .tcg-face {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
    box-shadow:
      0 30px 60px -20px rgba(0,0,0,0.6),
      0 18px 36px -18px rgba(0,0,0,0.5),
      0 2px 4px rgba(0,0,0,0.2);
  }

  .tcg-face.back {
    transform: rotateY(180deg);
  }

  /* ====== FRONT ====== */
  .tcg-front {
    /* metallic gold foil frame — alternating bright/dark gold stops
       give the gilded shimmer; ties to the lettering and the back's
       pale-gold accents. */
    background:
      linear-gradient(
        135deg,
        #f5d65a 0%,
        #fff3a8 18%,
        #c9971a 42%,
        #fff3a8 60%,
        #8a6d0f 82%,
        #f5d65a 100%
      );
    padding: 11px;
  }

  .tcg-front-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    overflow: hidden;
    background: #1a1a1a;
  }

  .tcg-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .tcg-photo-vignette {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%);
    pointer-events: none;
  }

  /* Vertical extruded navy name running up the left edge — same palette
     as the back of the card. Lighter steel-blue highlights at the top
     and bottom of the gradient give the letters dimension against the
     dark photo tint; deep-navy extrusion grounds them. */
  .tcg-name-vertical {
    position: absolute;
    left: 4px;
    top: 14px;
    bottom: 14px;
    width: 84px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'Bebas Neue', 'Inter', system-ui, sans-serif;
    font-size: clamp(72px, 17vw, 124px);
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 0.9;
    background: none;
    -webkit-background-clip: initial;
    background-clip: initial;
    -webkit-text-fill-color: initial;
    color: #ffffff;
    text-shadow:
      /* soft ambient drop shadow + thin outline — separates the white
         from the photo without the heavy dark extrusion that was
         visually averaging the letters to grey. */
      0 0 1px rgba(0, 0, 0, 0.45),
      0 2px 6px rgba(0, 0, 0, 0.55),
      0 4px 14px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    /* z-index 3 keeps the white face above the foil layers so the
       soft-light blends don't tint it. The holo still rides on the
       photo and the foil border around the letters. */
    z-index: 3;
  }

  /* ====== HOLO FOIL ====== */
  .tcg-foil {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
  }

  /* SURGE FOIL — the whole card surface gets a holographic shimmer that
     tracks the cursor, mimicking MTG raised/surge foil treatment.

     Three stacked layers all blend onto the card content:
       1) .tcg-foil-rainbow  : a wide cursor-tracked rainbow band
       2) .tcg-foil-pattern  : a diagonal repeating-line "scratch" texture
                               (the literal raised-foil micro-pattern)
       3) .tcg-foil-glare    : a soft white spotlight catching the highlight

     Lower opacity per-layer + soft-light blend keeps the underlying photo
     readable on the front; on the back, the same layers ride on top of the
     navy fill and read as a true foil card sheen. */
  .tcg-foil-rainbow {
    background:
      linear-gradient(
        115deg,
        transparent 8%,
        rgba(255, 119, 196, 0.55) 25%,
        rgba(255, 215, 119, 0.55) 35%,
        rgba(159, 255, 197, 0.55) 45%,
        rgba(119, 197, 255, 0.55) 55%,
        rgba(204, 159, 255, 0.55) 65%,
        rgba(255, 119, 196, 0.55) 75%,
        transparent 92%
      );
    background-size: 220% 220%;
    background-position: var(--mouse-x, 50%) var(--mouse-y, 50%);
    mix-blend-mode: soft-light;
    opacity: 0.35;
    transition: opacity 0.3s;
  }

  /* The "scratch" surge-foil micro-pattern. Two thin diagonal repeating
     gradients at slightly different angles cross over each other to make
     the characteristic raised-foil grain. Position shifts subtly with
     the cursor so it catches light. */
  .tcg-foil-pattern {
    background:
      repeating-linear-gradient(
        115deg,
        rgba(255, 255, 255, 0.06) 0px,
        rgba(255, 255, 255, 0.06) 1px,
        transparent 1px,
        transparent 5px
      ),
      repeating-linear-gradient(
        65deg,
        rgba(255, 255, 255, 0.04) 0px,
        rgba(255, 255, 255, 0.04) 1px,
        transparent 1px,
        transparent 6px
      );
    mix-blend-mode: overlay;
    opacity: 0.55;
    background-position: var(--mouse-x, 50%) var(--mouse-y, 50%);
    transition: opacity 0.3s;
  }

  /* Cursor spotlight that catches the foil. Brighter on hover for the
     "tilt the card under a lamp" moment. */
  .tcg-foil-glare {
    background: radial-gradient(
      circle 240px at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255,255,255,0.4) 0%,
      rgba(255,255,255,0.1) 30%,
      rgba(255,255,255,0) 60%
    );
    mix-blend-mode: overlay;
    opacity: 0.6;
    transition: opacity 0.3s;
  }

  .tcg-stage:not(:hover) .tcg-foil-glare   { opacity: 0.2; }
  .tcg-stage:not(:hover) .tcg-foil-rainbow { opacity: 0.2; }
  .tcg-stage:not(:hover) .tcg-foil-pattern { opacity: 0.35; }

  /* Ambient shimmer when reduced motion is preferred (no JS tilt). */
  .tcg-reduced .tcg-foil-rainbow {
    animation: tcg-shimmer 8s ease-in-out infinite;
    background-position: 0% 0%;
  }
  @keyframes tcg-shimmer {
    0%, 100% { background-position: 0% 0%; opacity: 0.35; }
    50%      { background-position: 100% 100%; opacity: 0.55; }
  }

  /* ====== BACK ====== */
  .tcg-back {
    background:
      radial-gradient(ellipse at 30% 0%, #3a4e80 0%, transparent 55%),
      radial-gradient(ellipse at 80% 100%, #0a1430 0%, transparent 60%),
      linear-gradient(160deg, #1e2a4a 0%, #142048 50%, #0a1430 100%);
    color: #f5f1e8;
    padding: 18px 18px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .tcg-back-grain {
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        45deg,
        rgba(255,255,255,0.04) 0,
        rgba(255,255,255,0.04) 1px,
        transparent 1px,
        transparent 4px
      );
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  /* HEADER row: profile pic + display name */
  .tcg-header {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 14px;
    align-items: center;
  }

  .tcg-profile-pic {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #f5d65a;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  .tcg-handle-block {
    min-width: 0;
    display: flex;
    align-items: center;
    height: 56px;
  }

  /* No more @handle row — the display name takes the prominent slot */
  .tcg-display-name-large {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.15;
    color: #f5f1e8;
    letter-spacing: -0.2px;
  }
  .tcg-display-name-large svg { flex-shrink: 0; }

  /* Subtitle line */
  .tcg-subtitle {
    background: rgba(245, 214, 90, 0.1);
    border-left: 3px solid #f5d65a;
    padding: 6px 10px;
    font-size: 12px;
    font-weight: 600;
    color: #f5f1e8;
    border-radius: 0 4px 4px 0;
  }

  /* Stats strip */
  .tcg-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 12px;
  }
  .tcg-stat {
    font-size: 10.5px;
    line-height: 1.3;
    color: #c4c8d4;
  }
  .tcg-stat.wide { grid-column: 1 / -1; }
  .tcg-stat-label {
    font-weight: 800;
    letter-spacing: 0.02em;
    color: #f5d65a;
  }
  .tcg-stat-value {
    font-weight: 500;
  }

  /* Bio */
  .tcg-bio {
    font-size: 10.5px;
    line-height: 1.45;
    color: #c4c8d4;
    font-weight: 400;
  }

  /* Big metrics */
  .tcg-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    margin-top: 2px;
  }
  .tcg-metric {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .tcg-metric-value {
    font-size: 30px;
    font-weight: 800;
    line-height: 0.95;
    color: #f5f1e8;
    letter-spacing: -0.02em;
  }
  .tcg-metric-label {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #f5d65a;
    margin-top: 2px;
    text-transform: uppercase;
    line-height: 1.2;
  }

  /* Projects row — clickable pill containing logo + name + URL */
  .tcg-project {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    background: rgba(245, 214, 90, 0.08);
    border: 1px solid rgba(245, 214, 90, 0.3);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: background 0.2s, border-color 0.2s;
    cursor: pointer;
    margin-bottom: 2px;
  }
  .tcg-project:hover {
    background: rgba(245, 214, 90, 0.15);
    border-color: rgba(245, 214, 90, 0.6);
  }
  .tcg-project-logo {
    width: 28px;
    height: 28px;
    object-fit: contain;
    flex-shrink: 0;
  }
  .tcg-project-meta {
    flex: 1;
    min-width: 0;
    line-height: 1.15;
  }
  .tcg-project-name {
    font-size: 13px;
    font-weight: 700;
    color: #f5f1e8;
  }
  .tcg-project-url {
    font-size: 10.5px;
    font-weight: 500;
    color: #f5d65a;
    margin-top: 1px;
  }
  .tcg-project-arrow {
    color: #f5d65a;
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 0;
  }

  /* Logos row */
  .tcg-logos-heading {
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #f5d65a;
    text-align: center;
    text-transform: uppercase;
  }
  .tcg-logos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  /* Transparent-PNG logos — show on the navy with no tile / no filter. */
  .tcg-logo {
    height: 26px;
    width: auto;
    max-width: 64px;
    object-fit: contain;
  }
  .tcg-logo-placeholder {
    height: 26px;
    min-width: 42px;
    padding: 0 8px;
    border: 1px dashed rgba(245, 214, 90, 0.4);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    color: #f5d65a;
    text-transform: uppercase;
  }

  /* Collector flair — rarity stamp top-right, set number bottom-left.
     Absolutely positioned over the back face so they sit in the corner
     padding outside the flex flow. */
  .tcg-rarity {
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: rgba(245, 214, 90, 0.95);
    background: rgba(245, 214, 90, 0.08);
    border: 1px solid rgba(245, 214, 90, 0.4);
    padding: 3px 7px;
    border-radius: 3px;
    text-transform: uppercase;
    pointer-events: none;
    z-index: 4;
    font-family: 'Inter', sans-serif;
  }
  .tcg-collector {
    position: absolute;
    bottom: 3px;
    left: 8px;
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: rgba(245, 214, 90, 0.55);
    text-transform: uppercase;
    pointer-events: none;
    z-index: 4;
    font-family: 'Inter', sans-serif;
  }

  /* Contact — centered row of links (email + github). */
  .tcg-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px 14px;
    font-size: 10.5px;
    font-weight: 600;
    color: #f5f1e8;
    border-top: 1px dashed rgba(245, 214, 90, 0.35);
    padding-top: 8px;
    margin-top: auto;
  }
  .tcg-contact a {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .tcg-contact a:hover {
    text-decoration: underline;
    color: #f5d65a;
  }
  .tcg-contact-icon {
    color: #f5d65a;
    flex-shrink: 0;
  }

  /* Flip hint */
  .tcg-hint {
    position: absolute;
    bottom: -28px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    pointer-events: none;
    font-family: 'Inter', system-ui, sans-serif;
  }

  /* Reduced motion: no flip transition, no tilt, no rainbow chase */
  @media (prefers-reduced-motion: reduce) {
    .tcg-flip { transition: none; }
    .tcg-tilt { transform: none !important; }
    .tcg-foil-glare { display: none; }
  }
`;function Xg(s){const{name:u,photoUrl:d,profilePicUrl:o,displayName:h,subtitle:p,stats:y,bio:E,metrics:x,project:g,logos:T,contact:C,github:_,logosHeading:B="Built At",rarity:Y,collectorNumber:X}=s,[q,U]=k.useState(!1),[ce,I]=k.useState(!1),fe=k.useRef(null),$=k.useRef(null);k.useEffect(()=>{const P=window.matchMedia("(prefers-reduced-motion: reduce)");I(P.matches);const Te=Re=>I(Re.matches);return P.addEventListener("change",Te),()=>P.removeEventListener("change",Te)},[]);const Oe=k.useCallback(()=>U(P=>!P),[]),De=P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),Oe())},Be=P=>{if(ce||!fe.current||!$.current)return;const Te=fe.current.getBoundingClientRect(),Re=(P.clientX-Te.left)/Te.width,Dt=(P.clientY-Te.top)/Te.height,Ct=q?-1:1,qe=(.5-Dt)*24*Ct,R=(Re-.5)*24*Ct;$.current.style.setProperty("--tilt-x",`${qe}deg`),$.current.style.setProperty("--tilt-y",`${R}deg`);const H=q?1-Re:Re;fe.current.style.setProperty("--mouse-x",`${H*100}%`),fe.current.style.setProperty("--mouse-y",`${Dt*100}%`)},we=()=>{!fe.current||!$.current||($.current.style.setProperty("--tilt-x","0deg"),$.current.style.setProperty("--tilt-y","0deg"),fe.current.style.setProperty("--mouse-x","50%"),fe.current.style.setProperty("--mouse-y","50%"))};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Vg}),i.jsxs("div",{ref:fe,className:`tcg-stage ${q?"flipped":""} ${ce?"tcg-reduced":""}`,role:"button",tabIndex:0,"aria-pressed":q,"aria-label":`Card for ${h}. ${q?"Showing back. ":"Showing front. "}Press Enter to flip.`,onClick:Oe,onKeyDown:De,onPointerMove:Be,onPointerLeave:we,children:[i.jsx("div",{className:"tcg-flip",children:i.jsxs("div",{className:"tcg-tilt",ref:$,children:[i.jsx("div",{className:"tcg-face tcg-front",children:i.jsxs("div",{className:"tcg-front-inner",children:[i.jsx("img",{src:d,alt:`${h} portrait`,className:"tcg-photo"}),i.jsx("div",{className:"tcg-photo-vignette"}),i.jsx("div",{className:"tcg-name-vertical",children:u}),i.jsx("div",{className:"tcg-foil tcg-foil-pattern"}),i.jsx("div",{className:"tcg-foil tcg-foil-rainbow"}),i.jsx("div",{className:"tcg-foil tcg-foil-glare"})]})}),i.jsxs("div",{className:"tcg-face back tcg-back",children:[i.jsx("div",{className:"tcg-back-grain"}),Y&&i.jsx("div",{className:"tcg-rarity",children:Y}),X&&i.jsx("div",{className:"tcg-collector",children:X}),i.jsxs("header",{className:"tcg-header",children:[i.jsx("img",{src:o,alt:"",className:"tcg-profile-pic"}),i.jsx("div",{className:"tcg-handle-block",children:i.jsx("div",{className:"tcg-display-name-large",children:h})})]}),p&&i.jsx("div",{className:"tcg-subtitle",children:p}),i.jsx("div",{className:"tcg-stats",children:y.map(P=>i.jsxs("div",{className:`tcg-stat ${P.wide?"wide":""}`,children:[i.jsxs("span",{className:"tcg-stat-label",children:[P.label.toUpperCase(),": "]}),i.jsx("span",{className:"tcg-stat-value",children:P.value})]},P.label))}),i.jsx("p",{className:"tcg-bio",children:E}),i.jsx("div",{className:"tcg-metrics",children:x.slice(0,3).map((P,Te)=>i.jsxs("div",{className:"tcg-metric",children:[i.jsx("div",{className:"tcg-metric-value",children:P.value}),i.jsx("div",{className:"tcg-metric-label",children:P.label})]},Te))}),g&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"tcg-logos-heading",children:"Projects"}),i.jsxs("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"tcg-project",onClick:P=>P.stopPropagation(),children:[i.jsx("img",{src:g.logoUrl,alt:g.name,className:"tcg-project-logo"}),i.jsxs("div",{className:"tcg-project-meta",children:[i.jsx("div",{className:"tcg-project-name",children:g.name}),i.jsx("div",{className:"tcg-project-url",children:g.url.replace(/^https?:\/\//,"").replace(/\/$/,"")})]}),i.jsx("span",{className:"tcg-project-arrow","aria-hidden":!0,children:"↗"})]})]}),i.jsx("div",{className:"tcg-logos-heading",children:B}),i.jsx("div",{className:"tcg-logos",children:T.map(P=>P.src?i.jsx("img",{src:P.src,alt:P.name,className:"tcg-logo"},P.name):i.jsx("span",{className:"tcg-logo-placeholder",children:P.name},P.name))}),i.jsxs("div",{className:"tcg-contact",children:[i.jsxs("a",{href:`mailto:${C}`,onClick:P=>P.stopPropagation(),children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":!0,className:"tcg-contact-icon",children:i.jsx("path",{fill:"currentColor",d:"M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"})}),C]}),_&&i.jsxs("a",{href:_,target:"_blank",rel:"noopener noreferrer",onClick:P=>P.stopPropagation(),children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":!0,className:"tcg-contact-icon",children:i.jsx("path",{fill:"currentColor",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),_.replace(/^https?:\/\//,"").replace(/\/$/,"")]})]}),i.jsx("div",{className:"tcg-foil tcg-foil-pattern"}),i.jsx("div",{className:"tcg-foil tcg-foil-rainbow"}),i.jsx("div",{className:"tcg-foil tcg-foil-glare"})]})]})}),i.jsx("div",{className:"tcg-hint",children:q?"Tap to flip back":"Tap card to flip"})]})]})}const Qg=`
  .pack-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    pointer-events: none;
  }
  .pack-overlay > * { pointer-events: auto; }

  .pack {
    position: relative;
    width: min(420px, 90vw);
    aspect-ratio: 5 / 7;
    cursor: pointer;
    transform-origin: center;
    animation: pack-idle 3.6s ease-in-out infinite;
  }

  /* The pack is rendered TWICE — once clipped to the top half, once to the
     bottom half. On tear, each half animates apart so the seam splits. */
  .pack-half {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    overflow: hidden;
    transform-origin: center;
  }
  .pack-top { clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%); }
  .pack-bottom { clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%); }

  .pack-content {
    width: 100%;
    height: 100%;
    background:
      radial-gradient(ellipse at 30% 0%, #3a4e80 0%, transparent 55%),
      radial-gradient(ellipse at 80% 100%, #0a1430 0%, transparent 60%),
      linear-gradient(160deg, #1e2a4a 0%, #142048 50%, #0a1430 100%);
    border: 2px solid rgba(245, 214, 90, 0.55);
    border-radius: 18px;
    box-shadow:
      0 30px 60px -20px rgba(0,0,0,0.7),
      0 0 0 1px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 24px;
    position: relative;
    color: #f5d65a;
    font-family: 'Bebas Neue', 'Inter', sans-serif;
  }

  .pack-edition {
    font-size: 14px;
    letter-spacing: 0.36em;
    font-weight: 400;
    color: rgba(245, 214, 90, 0.85);
    margin-bottom: 12px;
  }
  .pack-divider {
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(245, 214, 90, 0.6), transparent);
    margin: 8px 0 24px;
  }
  .pack-star {
    font-size: 96px;
    line-height: 1;
    color: #f5d65a;
    filter: drop-shadow(0 0 18px rgba(245, 214, 90, 0.55));
    animation: pack-star-pulse 2.4s ease-in-out infinite;
  }
  .pack-series {
    margin-top: auto;
    font-size: 11px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(245, 214, 90, 0.7);
  }
  .pack-prompt {
    margin-top: 14px;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0.24em;
    color: rgba(245, 214, 90, 0.9);
    animation: pack-prompt-pulse 1.4s ease-in-out infinite;
  }

  /* Diagonal foil sheen sweeping the pack continuously */
  .pack-foil {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      115deg,
      transparent 30%,
      rgba(255, 255, 255, 0.12) 45%,
      rgba(255, 230, 150, 0.18) 50%,
      rgba(255, 255, 255, 0.12) 55%,
      transparent 70%
    );
    background-size: 220% 220%;
    animation: pack-foil 4s linear infinite;
    pointer-events: none;
    border-radius: 16px;
    mix-blend-mode: overlay;
  }

  /* Bright burst that flashes the moment the seal tears */
  .pack-flash {
    position: absolute;
    inset: -20%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 230, 150, 0.6) 20%,
      rgba(245, 214, 90, 0.2) 40%,
      transparent 60%
    );
    opacity: 0;
    pointer-events: none;
    z-index: 1;
  }

  /* TEAR — top half flies up-left, bottom half flies down-right.
     Stop the idle wobble on the parent so the tear reads cleanly. */
  .pack.opening { animation: none; cursor: default; }
  .pack.opening .pack-top    { animation: pack-tear-up   720ms cubic-bezier(0.5, -0.3, 0.6, 1) forwards; }
  .pack.opening .pack-bottom { animation: pack-tear-down 720ms cubic-bezier(0.5, -0.3, 0.6, 1) forwards; }
  .pack.opening .pack-flash  { animation: pack-flash 480ms ease-out forwards; }
  .pack.opening .pack-prompt { opacity: 0; transition: opacity 120ms; }
  .pack.opening .pack-foil   { opacity: 0; transition: opacity 150ms; }

  @keyframes pack-idle {
    0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 20px 40px rgba(245, 214, 90, 0.15)); }
    50%      { transform: translateY(-4px) scale(1.01); filter: drop-shadow(0 28px 55px rgba(245, 214, 90, 0.25)); }
  }
  @keyframes pack-prompt-pulse {
    0%, 100% { opacity: 0.45; }
    50%      { opacity: 1; }
  }
  @keyframes pack-star-pulse {
    0%, 100% { filter: drop-shadow(0 0 18px rgba(245, 214, 90, 0.5)); transform: scale(1); }
    50%      { filter: drop-shadow(0 0 28px rgba(245, 214, 90, 0.85)); transform: scale(1.04); }
  }
  @keyframes pack-foil {
    from { background-position: 0% 0%; }
    to   { background-position: 200% 200%; }
  }
  @keyframes pack-tear-up {
    0%   { transform: translate(0, 0) rotate(0); opacity: 1; }
    100% { transform: translate(-40px, -110vh) rotate(-14deg); opacity: 0; }
  }
  @keyframes pack-tear-down {
    0%   { transform: translate(0, 0) rotate(0); opacity: 1; }
    100% { transform: translate(40px, 110vh) rotate(14deg); opacity: 0; }
  }
  @keyframes pack-flash {
    0%   { opacity: 0; transform: scale(0.4); }
    25%  { opacity: 1; }
    100% { opacity: 0; transform: scale(2.6); }
  }

  /* The card scale-up that runs in parallel with the tear. The wrapping
     class is applied by App.tsx on the card during 'opening'. */
  .pack-card-emerge {
    animation: pack-card-emerge 900ms cubic-bezier(0.34, 1.56, 0.64, 1) 120ms both;
  }
  @keyframes pack-card-emerge {
    0%   { transform: scale(0.32); opacity: 0; }
    50%  { opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
`;function $g({phase:s,onOpen:u,edition:d="Rosendo Ed.",series:o="001 · Founder Series"}){const h=()=>{s==="sealed"&&u()},p=E=>{(E.key==="Enter"||E.key===" ")&&s==="sealed"&&(E.preventDefault(),u())},y=()=>i.jsxs("div",{className:"pack-content",children:[i.jsx("div",{className:"pack-edition",children:d}),i.jsx("div",{className:"pack-divider"}),i.jsx("div",{className:"pack-star",children:"✦"}),i.jsx("div",{className:"pack-series",children:o})]});return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Qg}),i.jsx("div",{className:"pack-overlay",children:i.jsxs("div",{className:`pack ${s==="opening"?"opening":""}`,role:"button",tabIndex:0,"aria-label":"Booster pack — press Enter to open",onClick:h,onKeyDown:p,children:[i.jsx("div",{className:"pack-half pack-top",children:i.jsx(y,{})}),i.jsx("div",{className:"pack-half pack-bottom",children:i.jsx(y,{})}),i.jsx("div",{className:"pack-foil"}),i.jsx("div",{className:"pack-flash"}),s==="sealed"&&i.jsx("div",{className:"pack-prompt",style:{position:"absolute",bottom:-36,left:0,right:0,textAlign:"center"},children:"Tap to open"})]})})]})}const el="/",Zg={name:"ROSENDO",photoUrl:`${el}me.png`,profilePicUrl:`${el}ro.jpg`,displayName:"Rosendo Inzunza",subtitle:"Systems Engineer",github:"https://github.com/roinzunza",stats:[{label:"Based In",value:"California, US"},{label:"Builds With",value:"Rust + Python"},{label:"Fuel",value:"Oat milk cortado"},{label:"Hobbies",value:"MTG · Gaming · Running",wide:!0}],bio:"Systems engineer with 6 years in infrastructure and systems engineering, most recently at Cloudflare and TikTok. Set technical direction for control planes, ML training systems, and distributed tooling at global scale. Strength is driving architectural changes that span multiple teams, from RFC and stakeholder alignment through production delivery, and unblocking initiatives stalled by scale or blast-radius risk. Also founded and shipped SideQuest, a live iOS marketplace, solo.",metrics:[{value:"6",label:"Years Shipping"},{value:"10×",label:"Faster APIs"},{value:"1",label:"iOS App Live"}],project:{name:"SideQuest",url:"https://www.sidequestapp.io",logoUrl:`${el}icons/wordmark.png`},logosHeading:"Built At",logos:[{name:"Cloudflare",src:`${el}Cloudflare.png`},{name:"TikTok",src:`${el}icons/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.webp`},{name:"DFT",src:`${el}digital_force_technologies.jpg`},{name:"CoreLogic",src:`${el}icons/CoreLogic_logo.svg.png`}],contact:"rosendoinzunza@gmail.com",rarity:"★ Mythic",collectorNumber:"001 / 001 · Founder Ed."},Kg=`
  .tcg-landing {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 16px;
    background: #0a0a0c;
    font-family: 'Inter', system-ui, sans-serif;
  }

  /* cold navy glow behind the card — pulls from the back palette so the
     stage and the card read as the same world. */
  .tcg-landing::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 30%, rgba(58, 78, 128, 0.22) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(30, 42, 74, 0.18) 0%, transparent 50%),
      linear-gradient(180deg, #050608 0%, #0a0c14 100%);
    pointer-events: none;
  }

  .tcg-landing::after {
    /* subtle noise — pure SVG so no asset to load */
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    opacity: 0.35;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  .tcg-landing-card-wrap {
    position: relative;
    z-index: 1;
  }
`,Lp="tcg_pack_opened_v1";function Jg(){const[s,u]=k.useState(()=>{if(typeof window>"u")return"opened";try{return sessionStorage.getItem(Lp)==="1"||window.matchMedia("(prefers-reduced-motion: reduce)").matches?"opened":"sealed"}catch{return"sealed"}});k.useEffect(()=>{document.title="Rosendo Inzunza | Portfolio"},[]);const d=()=>{if(s==="sealed"){u("opening");try{sessionStorage.setItem(Lp,"1")}catch{}window.setTimeout(()=>u("opened"),1050)}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Kg}),i.jsx("div",{className:"tcg-landing",children:i.jsxs("div",{className:"tcg-landing-card-wrap",children:[s!=="sealed"&&i.jsx("div",{className:s==="opening"?"pack-card-emerge":"",children:i.jsx(Xg,{...Zg})}),s!=="opened"&&i.jsx($g,{phase:s==="opening"?"opening":"sealed",onOpen:d})]})})]})}var k0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yp=Ca.createContext&&Ca.createContext(k0),Fg=["attr","size","title"];function Wg(s,u){if(s==null)return{};var d=Pg(s,u),o,h;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(s);for(h=0;h<p.length;h++)o=p[h],!(u.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(d[o]=s[o])}return d}function Pg(s,u){if(s==null)return{};var d={};for(var o in s)if(Object.prototype.hasOwnProperty.call(s,o)){if(u.indexOf(o)>=0)continue;d[o]=s[o]}return d}function Rr(){return Rr=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(s[o]=d[o])}return s},Rr.apply(this,arguments)}function qp(s,u){var d=Object.keys(s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);u&&(o=o.filter(function(h){return Object.getOwnPropertyDescriptor(s,h).enumerable})),d.push.apply(d,o)}return d}function Mr(s){for(var u=1;u<arguments.length;u++){var d=arguments[u]!=null?arguments[u]:{};u%2?qp(Object(d),!0).forEach(function(o){Ig(s,o,d[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(d)):qp(Object(d)).forEach(function(o){Object.defineProperty(s,o,Object.getOwnPropertyDescriptor(d,o))})}return s}function Ig(s,u,d){return u=em(u),u in s?Object.defineProperty(s,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[u]=d,s}function em(s){var u=tm(s,"string");return typeof u=="symbol"?u:u+""}function tm(s,u){if(typeof s!="object"||!s)return s;var d=s[Symbol.toPrimitive];if(d!==void 0){var o=d.call(s,u);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(s)}function T0(s){return s&&s.map((u,d)=>Ca.createElement(u.tag,Mr({key:d},u.attr),T0(u.child)))}function te(s){return u=>Ca.createElement(am,Rr({attr:Mr({},s.attr)},u),T0(s.child))}function am(s){var u=d=>{var{attr:o,size:h,title:p}=s,y=Wg(s,Fg),E=h||d.size||"1em",x;return d.className&&(x=d.className),s.className&&(x=(x?x+" ":"")+s.className),Ca.createElement("svg",Rr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,o,y,{className:x,style:Mr(Mr({color:s.color||d.color},d.style),s.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),p&&Ca.createElement("title",null,p),s.children)};return Yp!==void 0?Ca.createElement(Yp.Consumer,null,d=>u(d)):u(k0)}function lm(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function vo(s){return te({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(s)}function nm(s){return te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(s)}function R0(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(s)}function Pn(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(s)}function M0(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(s)}function im(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(s)}function rm(s){return te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(s)}function sm(s){return te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(s)}function cm(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"},child:[]}]})(s)}function om(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(s)}function Gp(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(s)}function um(s){return te({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z"},child:[]}]})(s)}function fm(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(s)}function Ar(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(s)}function Xl(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(s)}function ti(s){return te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(s)}function dm(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(s)}function pm(s){return te({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z"},child:[]}]})(s)}function Vp(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"},child:[]}]})(s)}function Or(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(s)}function Et(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(s)}function Xp(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(s)}function Br(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(s)}function A0(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"},child:[]}]})(s)}function O0(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(s)}function Dr(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(s)}function Qp(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(s)}function D0(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(s)}function C0(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(s)}function hm(s){return te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(s)}function gm(s){return te({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},child:[]}]})(s)}function mm(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"},child:[]}]})(s)}function xm(s){return te({attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"},child:[]}]})(s)}function _0(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(s)}function vm(s){return te({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(s)}function bm(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(s)}function B0(s){return te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(s)}function ym(s){return te({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"},child:[]}]})(s)}function $p(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"},child:[]}]})(s)}function jm(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(s)}function Zp(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"},child:[]}]})(s)}function Kp(s){return te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"},child:[]}]})(s)}function Jp(s){return te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"},child:[]}]})(s)}const ni={name:"Rosendo Inzunza",email:"RosendoInzunza@gmail.com",website:"www.rosendoinzunza.com",phone:"714-342-7492",summary:"Systems engineer with 6 years in infrastructure and systems engineering, most recently at Cloudflare and TikTok. Set technical direction for control planes, ML training systems, and distributed tooling at global scale. Strength is driving architectural changes that span multiple teams, from RFC and stakeholder alignment through production delivery, and unblocking initiatives stalled by scale or blast-radius risk. Also founded and shipped SideQuest, a live iOS marketplace, solo.",experience:[{title:"Systems Engineer - Infrastructure",company:"Cloudflare",logo:"Cloudflare.png",coverBg:"#ffffff",location:"Remote, US",period:"07/2024 – 05/2026",summary:"Owned reliability, performance, and architectural evolution of the infrastructure control plane — the authoritative system for fleet configuration and asset management across Cloudflare's global network.",bullets:["Improved control plane API performance 10x (5s to 500ms) by rearchitecting the data-fetching layer to parallelize requests, with an automatic fallback to serial processing under database load.","Led the initiative to migrate the remaining assets off the legacy system onto the control plane, authoring the RFC, delegating workstreams, and validating delivery, while preserving the existing API contract so downstream teams required no changes.","Set the direction for consolidating the company's logical asset data model, authoring the RFC and aligning multiple teams to unify legacy and modern systems under one authoritative control plane, cutting sync errors and manual provisioning by 80%.","Built high-throughput reconciliation workers to sync DCIM systems and automate orphan asset cleanup, ending persistent manual drift that had required ongoing operational intervention.","Drove the Ray ID redesign: authored the RFC and designed a backward-compatible migration, validated in staging with no customer-facing regressions.","Unblocked a long-stalled migration of the control plane onto the Release Manager by aligning the owning teams and building a breakglass recovery path, clearing a circular dependency across Salt, the Release Manager, and the control plane.","Expanded internal platform adoption by building an MCP server over the control plane API, enabling teams to integrate without writing custom clients or CLI tooling.","Established an AI-assisted development workflow across the team, covering codebase context indexing, pre-commit verification, and test generation, reducing onboarding and review cycle time."]},{title:"Site Reliability Engineer - Machine Learning Infrastructure",company:"TikTok",logo:"tiktok.jpg",coverBg:"#ffffff",location:"Remote, US",period:"07/2022 – 07/2024",bullets:["Designed and shipped a diagnostics platform adopted by 200+ engineers, reducing mean time to resolution by 72% (80 min to 22 min) by centralizing root cause analysis workflows.","Authored the RFC and implemented self-healing automation for parameter servers and distributed training jobs, reducing manual incident volume by 25%.","Consolidated 4 divergent regional codebases for the parameter server observability system into a single unified release with per-region DNS routing, ending configuration drift and simplifying cross-region deployments.","Served as primary on-call for ML training and parameter server infrastructure, owning incident response for Ads and Video Recommendation systems supporting millions of users."]},{title:"Full Stack Software Engineer",company:"Digital Force Technologies",logo:"digital_force_technologies.jpg",coverBg:"#000000",location:"Remote, US",period:"10/2021 – 07/2022",bullets:["Built and maintained a Flask API for hardware configuration management in radar systems; automated the ARM64 Debian package release process, integrating with legacy build infrastructure."]},{title:"Automation Engineer",company:"CoreLogic",logo:"corelogic.png",coverBg:"#ffffff",location:"Irvine, CA",period:"09/2020 – 10/2021",bullets:["Built data pipelines to parse and reconcile multi-schema customer files into a unified format; trained a CNN on home images to predict property value; established GitLab CI/CD for the team."]}],skills:{Languages:["Rust","Python","Go","TypeScript","Swift","C++","Java"],"Frameworks / Libraries":["Axum","Actix","SeaORM","Diesel","FastAPI","Flask","Spring","React"],Infrastructure:["Terraform","Helm","Kubernetes","Docker","SaltStack","gRPC","Protobuf","PostgreSQL","Redis"],Cloud:["AWS (S3, EC2)","Cloudflare R2"],Observability:["Prometheus","Grafana","Splunk","Sentry"],"Machine Learning":["TensorFlow","PyTorch"]},project:{name:"SideQuest",logo:"sidequest_logo.png",coverBg:"#000000",role:"Founder & Full-Stack Engineer",tech:"iOS · Swift · Rust · Axum · SeaORM · PostgreSQL",url:"https://www.sidequestapp.io/",bullets:["Founded and shipped a two-sided iOS job marketplace live on the App Store.","Architected a Rust/Axum backend with a service-oriented route pattern, PostgreSQL via SeaORM, JWT auth, and Apple/Google SSO.","Built real-time in-app messaging using WebSockets with a concurrent DashMap hub and APNs push notification delivery.","Integrated Stripe and RevenueCat for tiered subscriptions, IAP add-ons, and entitlement management across business and applicant roles."]},education:{degree:"Bachelor of Science in Computer Science",school:"California State University, Fullerton · 2019"}},{name:Jn,email:Fp,website:Wp,phone:Sm,summary:wm,experience:tl,skills:Nm,project:$e,education:ro}=ni,so=Object.values(Nm).flat(),Wn=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),co=Wn($e.name),zm=`
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
      display: block;
      grid-template-columns: none;
      grid-template-rows: none;
      grid-template-areas: none;
      width: 100%;
      max-width: 100vw;
      padding: 0;
      gap: 0;
      overflow-x: hidden;
      min-height: 100vh;
    }
    .sp-sidebar { display: none; }
    .sp-main {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      border-radius: 0;
      overflow: visible;
      padding-bottom: 88px;
      background: #121212;
    }
    .sp-player {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100vw;
      z-index: 30;
      height: 64px;
      border-top: 1px solid #181818;
    }
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
`,la=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Pp=["linear-gradient(135deg, #1DB954 0%, #064E3B 100%)","linear-gradient(135deg, #FBBF24 0%, #92400E 100%)","linear-gradient(135deg, #38BDF8 0%, #0C4A6E 100%)","linear-gradient(135deg, #F472B6 0%, #831843 100%)"];function Ip(s){const u=s*47+123,d=Math.floor(u/60),o=u%60;return`${d}:${o.toString().padStart(2,"0")}`}function Em(s){return([2847193,1402557,894201,612488,320115][s]??15e4).toLocaleString()}function km(){const[s,u]=k.useState(!1),[d,o]=k.useState(!0);k.useEffect(()=>{document.title=`${Jn} | Spotify Resume`},[]);const h=12847392 .toLocaleString();return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:zm}),i.jsxs("div",{className:"sp-page",children:[i.jsxs("aside",{className:"sp-sidebar",children:[i.jsxs("div",{className:"sp-sidebar-card",children:[i.jsxs(ue,{to:"/",className:"sp-nav-item",children:[i.jsx(ti,{})," Home"]}),i.jsxs("div",{className:"sp-nav-item",children:[i.jsx(Dr,{})," Search"]})]}),i.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[i.jsxs("div",{className:"sp-library-header",children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx(R0,{})," Your Library"]}),i.jsx("button",{className:"sp-icon-btn",children:i.jsx(Br,{})})]}),i.jsxs("div",{style:{marginTop:8},children:[i.jsxs("div",{className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:Pp[0]},children:i.jsx(Xl,{})}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:"Liked Songs"}),i.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",tl.length+1," songs"]})]})]}),tl.map((p,y)=>i.jsxs(ue,{to:`/spotify/${Wn(p.company)}`,className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:p.coverBg??la[y%la.length]},children:p.logo?i.jsx("img",{src:`/${p.logo}`,alt:p.company}):p.company}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:p.company}),i.jsxs("div",{className:"sp-playlist-sub",children:["Album · ",p.bullets.length," tracks"]})]})]},p.company)),i.jsxs(ue,{to:`/spotify/${co}`,className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:$e.coverBg},children:i.jsx("img",{src:`/${$e.logo}`,alt:$e.name})}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:$e.name}),i.jsxs("div",{className:"sp-playlist-sub",children:["Single · ",Jn]})]})]}),i.jsxs("div",{className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:Pp[2]},children:"Tech Stack"}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:"Tech Stack"}),i.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",so.length," tracks"]})]})]}),i.jsxs("div",{className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)"},children:"Education"}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:"Education"}),i.jsxs("div",{className:"sp-playlist-sub",children:["EP · ",ro.school.split(",")[0]]})]})]})]})]})]}),i.jsxs("main",{className:"sp-main",children:[i.jsxs("div",{className:"sp-mobile-nav",children:[tl.map((p,y)=>i.jsxs(ue,{to:`/spotify/${Wn(p.company)}`,className:"sp-chip",children:[i.jsx("div",{className:"sp-chip-cover",style:{background:p.coverBg??la[y%la.length]},children:p.logo?i.jsx("img",{src:`/${p.logo}`,alt:p.company}):p.company.slice(0,2)}),p.company]},`m-${p.company}`)),i.jsxs(ue,{to:`/spotify/${co}`,className:"sp-chip",children:[i.jsx("div",{className:"sp-chip-cover",style:{background:$e.coverBg},children:i.jsx("img",{src:`/${$e.logo}`,alt:$e.name})}),$e.name]})]}),i.jsxs("div",{className:"sp-topbar",children:[i.jsx(ue,{to:"/",className:"sp-back-btn",children:"← Back to Home"}),i.jsxs("div",{className:"sp-topbar-pill",style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[i.jsx(vo,{size:18})," Open in Web Player"]})]}),i.jsxs("section",{className:"sp-hero",children:[i.jsx("img",{src:"/ro.jpg",alt:Jn,className:"sp-hero-avatar"}),i.jsxs("div",{className:"sp-hero-meta",children:[i.jsxs("div",{className:"sp-verified",children:[i.jsx(Pn,{size:16})," Verified Engineer"]}),i.jsx("h1",{className:"sp-hero-name",children:Jn}),i.jsxs("div",{className:"sp-hero-stats",children:[h," monthly listeners"]})]})]}),i.jsxs("div",{className:"sp-action-bar",children:[i.jsx("button",{className:"sp-play-btn",onClick:()=>u(!s),children:s?i.jsx(Or,{}):i.jsx(Et,{style:{marginLeft:3}})}),i.jsx("button",{className:"sp-follow-btn",children:"Follow"}),i.jsx("button",{className:"sp-icon-btn-lg",children:i.jsx(Ar,{})})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Popular"}),i.jsx("div",{className:"sp-track-list",children:tl.map((p,y)=>i.jsxs(ue,{to:`/spotify/${Wn(p.company)}`,className:"sp-track",children:[i.jsx("div",{className:"sp-track-num",children:y+1}),i.jsxs("div",{className:"sp-track-info",children:[i.jsx("div",{className:"sp-track-cover",style:{background:p.coverBg??la[y%la.length]},children:p.logo?i.jsx("img",{src:`/${p.logo}`,alt:p.company}):p.company}),i.jsxs("div",{className:"sp-track-text",children:[i.jsx("div",{className:"sp-track-title",children:p.title}),i.jsxs("div",{className:"sp-track-artist",children:[p.company," · ",p.location]})]})]}),i.jsx("div",{className:"sp-track-plays",children:Em(y)}),i.jsx("div",{className:"sp-track-duration",children:Ip(p.bullets.length)})]},y))})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"About"}),i.jsxs("div",{className:"sp-about",children:[i.jsx("div",{className:"sp-about-text",children:wm}),i.jsxs("div",{className:"sp-about-stats",children:[i.jsxs("div",{className:"sp-stat",children:[i.jsx("div",{className:"sp-stat-value",children:h}),i.jsx("div",{className:"sp-stat-label",children:"Monthly Listeners"})]}),i.jsxs("div",{className:"sp-stat",children:[i.jsx("div",{className:"sp-stat-value",children:tl.length}),i.jsx("div",{className:"sp-stat-label",children:"Albums"})]}),i.jsxs("div",{className:"sp-stat",children:[i.jsx("div",{className:"sp-stat-value",children:so.length}),i.jsx("div",{className:"sp-stat-label",children:"Genres"})]})]})]})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Discography"}),i.jsx("div",{className:"sp-album-grid",children:tl.map((p,y)=>i.jsxs(ue,{to:`/spotify/${Wn(p.company)}`,className:"sp-album-card",children:[i.jsxs("div",{className:"sp-album-cover",style:{background:p.coverBg??la[y%la.length]},children:[p.logo?i.jsx("img",{src:`/${p.logo}`,alt:p.company}):p.company,i.jsx("button",{className:"sp-album-play",children:i.jsx(Et,{style:{marginLeft:2}})})]}),i.jsx("div",{className:"sp-album-title",children:p.company}),i.jsxs("div",{className:"sp-album-sub",children:[p.period.split("–")[0].trim().split("/")[1]," · ",p.bullets.length," tracks"]})]},y))})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Featured Release"}),i.jsx("div",{className:"sp-album-grid",children:i.jsxs("div",{className:"sp-album-card sp-featured-card",style:{background:"#1a1a1a"},children:[i.jsxs(ue,{to:`/spotify/${co}`,style:{display:"flex",gap:20,alignItems:"flex-start",textDecoration:"none",color:"inherit"},children:[i.jsxs("div",{className:"sp-album-cover sp-featured-cover",style:{background:$e.coverBg,marginBottom:0,position:"relative",fontSize:28},children:[i.jsx("img",{src:`/${$e.logo}`,alt:$e.name}),i.jsx("button",{className:"sp-album-play",children:i.jsx(Et,{style:{marginLeft:2}})})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,minWidth:0},children:[i.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5},children:"Album · 2025"}),i.jsx("div",{style:{fontSize:22,fontWeight:800,color:"#fff"},children:$e.name}),i.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:$e.role}),i.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:$e.tech})]})]}),i.jsxs("a",{href:$e.url,target:"_blank",rel:"noopener noreferrer",onClick:p=>p.stopPropagation(),style:{fontSize:13,color:"#1ED760",fontWeight:600,textDecoration:"none",marginTop:12,display:"inline-block"},children:[$e.url.replace("https://","").replace(/\/$/,"")," ↗"]}),i.jsx("div",{style:{marginTop:20,display:"flex",flexDirection:"column",gap:4},children:$e.bullets.map((p,y)=>i.jsxs("div",{className:"sp-track",style:{gridTemplateColumns:"32px 1fr auto"},children:[i.jsx("div",{className:"sp-track-num",children:y+1}),i.jsx("div",{className:"sp-track-text",children:i.jsx("div",{className:"sp-track-title",style:{whiteSpace:"normal"},children:p})}),i.jsx("div",{className:"sp-track-duration",children:Ip(y+2)})]},y))})]})})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Genres"}),i.jsx("div",{className:"sp-chips",children:so.map(p=>i.jsx("span",{className:"sp-chip",children:p},p))})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Education"}),i.jsx("div",{className:"sp-about",style:{background:"linear-gradient(135deg, #1a1a1a 0%, #7c2d12 200%)"},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20},children:[i.jsx("div",{className:"sp-album-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)",width:96,height:96,fontSize:20,marginBottom:0,flexShrink:0},children:"ED"}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:"EP"}),i.jsx("div",{style:{fontSize:20,fontWeight:800,color:"#fff",marginBottom:4},children:ro.degree}),i.jsx("div",{style:{fontSize:14,color:"#b3b3b3"},children:ro.school})]})]})})]}),i.jsx("section",{className:"sp-section",children:i.jsxs("div",{style:{fontSize:12,color:"#6a6a6a",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",paddingBottom:24},children:[i.jsx("a",{href:`mailto:${Fp}`,style:{color:"#6a6a6a",textDecoration:"none"},children:Fp}),i.jsx("a",{href:`https://${Wp}`,target:"_blank",rel:"noopener noreferrer",style:{color:"#6a6a6a",textDecoration:"none"},children:Wp}),i.jsx("span",{children:Sm})]})})]}),i.jsxs("footer",{className:"sp-player",children:[i.jsxs("div",{className:"sp-player-track",children:[i.jsx("div",{className:"sp-player-cover",style:{background:la[0]}}),i.jsxs("div",{className:"sp-player-meta",children:[i.jsx("div",{className:"sp-player-title",children:tl[0].title}),i.jsx("div",{className:"sp-player-artist",children:Jn})]}),i.jsx("button",{className:`sp-player-heart ${d?"liked":""}`,onClick:()=>o(!d),"aria-label":"Like",children:i.jsx(Xl,{})})]}),i.jsxs("div",{className:"sp-player-controls",children:[i.jsxs("div",{className:"sp-player-buttons",children:[i.jsx("button",{children:i.jsx(A0,{})}),i.jsx("button",{children:i.jsx(D0,{})}),i.jsx("button",{className:"sp-player-play",onClick:()=>u(!s),children:s?i.jsx(Or,{}):i.jsx(Et,{style:{marginLeft:2}})}),i.jsx("button",{children:i.jsx(C0,{})}),i.jsx("button",{children:i.jsx(O0,{})})]}),i.jsxs("div",{className:"sp-progress",children:[i.jsx("span",{className:"sp-progress-time",children:"1:42"}),i.jsx("div",{className:"sp-progress-bar",children:i.jsx("div",{className:"sp-progress-fill"})}),i.jsx("span",{className:"sp-progress-time",children:"4:51"})]})]}),i.jsxs("div",{className:"sp-player-extras",children:[i.jsx("button",{children:i.jsx(B0,{})}),i.jsx("div",{className:"sp-volume",children:i.jsx("div",{className:"sp-volume-bar",children:i.jsx("div",{className:"sp-volume-fill"})})})]})]})]})]})}const{name:Er,experience:Tm,project:na}=ni,e0=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),bo=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],t0=["linear-gradient(180deg, #B91C1C 0%, #5b1414 55%, #121212 100%)","linear-gradient(180deg, #1D4ED8 0%, #1e2c5b 55%, #121212 100%)","linear-gradient(180deg, #6D28D9 0%, #2c1d5b 55%, #121212 100%)","linear-gradient(180deg, #BE185D 0%, #5b1f3e 55%, #121212 100%)"],Rm="linear-gradient(180deg, #1DB954 0%, #0a5d2b 55%, #121212 100%)",oo=[...Tm.map((s,u)=>({type:"job",slug:e0(s.company),title:s.title,artist:s.company,initials:s.company,logo:s.logo,period:s.period,description:s.summary,bullets:s.bullets,cover:s.coverBg??bo[u%bo.length],heroGrad:t0[u%t0.length],meta:`${s.location} · ${s.period}`})),{type:"project",slug:e0(na.name),title:na.name,artist:Er,initials:na.name,logo:na.logo,period:"2025",bullets:na.bullets,cover:na.coverBg,heroGrad:Rm,externalUrl:na.url,meta:`${na.role} · ${na.tech}`}];function Mm(s){const u=165+s*53%180,d=Math.floor(u/60),o=u%60;return`${d}:${o.toString().padStart(2,"0")}`}function Am(s){let u=0;for(let h=0;h<s;h++)u+=165+h*53%180;const d=Math.floor(u/60),o=u%60;return`${d} min ${o} sec`}const a0=`
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
      display: block;
      grid-template-columns: none;
      grid-template-rows: none;
      grid-template-areas: none;
      width: 100%;
      max-width: 100vw;
      padding: 0;
      gap: 0;
      overflow-x: hidden;
      min-height: 100vh;
    }
    .sp-sidebar { display: none; }
    .sp-main {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      border-radius: 0;
      overflow: visible;
      padding-bottom: 88px;
      background: #121212;
    }
    .sp-player {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100vw;
      z-index: 30;
      height: 64px;
      border-top: 1px solid #181818;
    }
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
`;function Om(){const{slug:s}=K2(),u=oo.find(x=>x.slug===s),[d,o]=k.useState(!1),[h,p]=k.useState(!0);k.useEffect(()=>{document.title=u?`${u.title} | ${Er}`:"Not Found"},[u]);const y=i.jsxs("aside",{className:"sp-sidebar",children:[i.jsxs("div",{className:"sp-sidebar-card",children:[i.jsxs(ue,{to:"/",className:"sp-nav-item",children:[i.jsx(ti,{})," Home"]}),i.jsxs("div",{className:"sp-nav-item",children:[i.jsx(Dr,{})," Search"]}),i.jsxs(ue,{to:"/spotify",className:"sp-nav-item",children:[i.jsx(vo,{})," Your Resume"]})]}),i.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[i.jsxs("div",{className:"sp-library-header",children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx(R0,{})," Your Library"]}),i.jsx("button",{className:"sp-icon-btn",children:i.jsx(Br,{})})]}),i.jsx("div",{style:{marginTop:8},children:oo.map(x=>{const g=x.slug===s;return i.jsxs(ue,{to:`/spotify/${x.slug}`,className:`sp-playlist-item ${g?"active":""}`,children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:x.cover},children:x.logo?i.jsx("img",{src:`/${x.logo}`,alt:x.artist}):x.initials}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:`sp-playlist-title ${g?"active":""}`,children:x.title}),i.jsxs("div",{className:"sp-playlist-sub",children:[x.type==="job"?"Album":"Single"," · ",x.artist]})]})]},x.slug)})})]})]}),E=i.jsxs("footer",{className:"sp-player",children:[i.jsxs("div",{className:"sp-player-track",children:[i.jsx("div",{className:"sp-player-cover",style:{background:u?.cover??bo[0]},children:u?.logo?i.jsx("img",{src:`/${u.logo}`,alt:u.artist}):u?.initials??"??"}),i.jsxs("div",{className:"sp-player-meta",children:[i.jsx("div",{className:"sp-player-title",children:u?.title??"—"}),i.jsx("div",{className:"sp-player-artist",children:u?.artist??Er})]}),i.jsx("button",{className:"sp-player-heart",children:i.jsx(Xl,{})})]}),i.jsxs("div",{className:"sp-player-controls",children:[i.jsxs("div",{className:"sp-player-buttons",children:[i.jsx("button",{children:i.jsx(A0,{})}),i.jsx("button",{children:i.jsx(D0,{})}),i.jsx("button",{className:"sp-player-play",onClick:()=>o(!d),children:d?i.jsx(Or,{}):i.jsx(Et,{style:{marginLeft:2}})}),i.jsx("button",{children:i.jsx(C0,{})}),i.jsx("button",{children:i.jsx(O0,{})})]}),i.jsxs("div",{className:"sp-progress",children:[i.jsx("span",{className:"sp-progress-time",children:"0:48"}),i.jsx("div",{className:"sp-progress-bar",children:i.jsx("div",{className:"sp-progress-fill"})}),i.jsx("span",{className:"sp-progress-time",children:"3:32"})]})]}),i.jsxs("div",{className:"sp-player-extras",children:[i.jsx("button",{children:i.jsx(B0,{})}),i.jsx("div",{className:"sp-volume",children:i.jsx("div",{className:"sp-volume-bar",children:i.jsx("div",{className:"sp-volume-fill"})})})]})]});return u?i.jsxs(i.Fragment,{children:[i.jsx("style",{children:a0}),i.jsxs("div",{className:"sp-page",children:[y,i.jsxs("main",{className:"sp-main",children:[i.jsx("div",{className:"sp-mobile-nav",children:oo.map(x=>i.jsxs(ue,{to:`/spotify/${x.slug}`,className:`sp-chip ${x.slug===s?"active":""}`,children:[i.jsx("div",{className:"sp-chip-cover",style:{background:x.cover},children:x.logo?i.jsx("img",{src:`/${x.logo}`,alt:x.artist}):x.initials.slice(0,2)}),x.artist]},`m-${x.slug}`))}),i.jsxs("div",{className:"sp-topbar",children:[i.jsx(ue,{to:"/spotify",className:"sp-back-btn",children:"← Back to Resume"}),i.jsxs("div",{className:"sp-topbar-pill",style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[i.jsx(vo,{size:18})," Open in Web Player"]})]}),i.jsxs("section",{className:"sp-album-hero",style:{background:u.heroGrad},children:[i.jsx("div",{className:"sp-album-art",style:{background:u.cover},children:u.logo?i.jsx("img",{src:`/${u.logo}`,alt:u.artist}):u.initials}),i.jsxs("div",{className:"sp-album-meta",children:[i.jsx("div",{className:"sp-album-type",children:u.type==="job"?"Album":"Featured Single"}),i.jsx("h1",{className:"sp-album-title",children:u.title}),i.jsxs("div",{className:"sp-album-byline",children:[i.jsx("strong",{children:u.artist}),i.jsx("span",{className:"dot",children:"·"}),i.jsx("span",{children:u.period}),i.jsx("span",{className:"dot",children:"·"}),i.jsxs("span",{children:[u.bullets.length," songs, ",Am(u.bullets.length)]})]}),i.jsx("div",{className:"sp-album-extra",children:u.meta})]})]}),i.jsxs("div",{className:"sp-action-bar",children:[i.jsx("button",{className:"sp-play-btn",onClick:()=>o(!d),children:d?i.jsx(Or,{}):i.jsx(Et,{style:{marginLeft:3}})}),i.jsx("button",{className:`sp-heart-btn ${h?"liked":""}`,onClick:()=>p(!h),"aria-label":"Like",children:i.jsx(Xl,{})}),i.jsx("button",{className:"sp-icon-btn-lg",children:i.jsx(Ar,{})}),u.externalUrl&&i.jsxs("a",{href:u.externalUrl,target:"_blank",rel:"noopener noreferrer",className:"sp-external",style:{marginLeft:"auto"},children:[u.externalUrl.replace("https://","").replace(/\/$/,"")," ↗"]})]}),i.jsxs("div",{className:"sp-track-table",children:[i.jsxs("div",{className:"sp-track-header",children:[i.jsx("span",{className:"col-num",children:"#"}),i.jsx("span",{children:"Title"}),i.jsx("span",{className:"col-dur",children:i.jsx(om,{})})]}),u.bullets.map((x,g)=>i.jsxs("div",{className:"sp-track-row",children:[i.jsxs("div",{className:"sp-track-num",children:[i.jsx("span",{className:"num",children:g+1}),i.jsx("span",{className:"play",children:i.jsx(Et,{size:10,style:{marginLeft:2}})})]}),i.jsxs("div",{className:"sp-track-text",children:[i.jsx("div",{className:"sp-track-title",children:x}),i.jsx("div",{className:"sp-track-sub",children:u.artist})]}),i.jsx("div",{className:"sp-track-dur",children:Mm(g+1)})]},g))]}),u.description&&i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"About this album"}),i.jsx("div",{className:"sp-about",children:u.description})]})]}),E]})]}):i.jsxs(i.Fragment,{children:[i.jsx("style",{children:a0}),i.jsxs("div",{className:"sp-page",children:[y,i.jsxs("main",{className:"sp-main",children:[i.jsx("div",{className:"sp-topbar",children:i.jsx(ue,{to:"/spotify",className:"sp-back-btn",children:"← Back"})}),i.jsxs("div",{className:"sp-notfound",children:[i.jsx("h1",{children:"Album not found"}),i.jsxs("p",{children:["This playlist doesn't exist in ",Er,"'s library."]}),i.jsx(ue,{to:"/spotify",className:"sp-external",children:"← Return to your resume"})]})]}),E]})]})}const{name:kr,summary:Dm,experience:U0,skills:Cm,project:mt,education:l0}=ni,_m=`
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
`,n0=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],i0=U0.map((s,u)=>({title:s.title,artist:s.company,initials:s.company,logo:s.logo,cover:s.coverBg??n0[u%n0.length],period:s.period,summary:s.summary,bullets:s.bullets,match:98-u*3,tag:u===0?"Now Playing":u===1?"Limited Series":"Documentary",type:"job"}));function uo({id:s,title:u,rank:d,children:o}){const h=k.useRef(null),p=y=>{h.current&&h.current.scrollBy({left:y==="left"?-h.current.clientWidth*.8:h.current.clientWidth*.8})};return i.jsxs("div",{className:"nf-row",id:s,children:[i.jsxs("div",{className:"nf-row-header",children:[i.jsx("h2",{className:"nf-row-title",children:u}),d&&i.jsx("span",{className:"nf-explore",children:"Explore all →"})]}),i.jsx("button",{className:"nf-scroll-btn left",onClick:()=>p("left"),"aria-label":"Scroll left",children:i.jsx(rm,{})}),i.jsx("div",{className:"nf-row-scroller",ref:h,children:o}),i.jsx("button",{className:"nf-scroll-btn right",onClick:()=>p("right"),"aria-label":"Scroll right",children:i.jsx(sm,{})})]})}function fo({show:s,rank:u,wide:d,progress:o,onOpen:h,inList:p,onToggleList:y}){return i.jsxs("div",{className:`nf-card ${d?"nf-continue":""}`,style:u?{marginLeft:56,flex:"0 0 240px"}:void 0,onClick:h,children:[u&&i.jsx("span",{className:"nf-card-rank",children:u}),i.jsx("div",{className:"nf-card-cover",style:{background:s.cover},children:s.logo?i.jsx("img",{src:`/${s.logo}`,alt:s.artist}):s.initials}),o!==void 0&&i.jsx("div",{className:"nf-progress",children:i.jsx("div",{className:"nf-progress-fill",style:{width:`${o}%`}})}),i.jsxs("div",{className:"nf-card-overlay",children:[i.jsx("div",{className:"nf-card-title",children:s.title}),i.jsxs("div",{className:"nf-card-meta",children:[i.jsxs("span",{className:"nf-tag",children:[s.match,"% Match"]}),i.jsx("span",{className:"nf-match",children:"HD"}),i.jsx("span",{children:s.period})]}),i.jsxs("div",{className:"nf-card-actions",children:[i.jsx("button",{className:"nf-icon-btn primary",onClick:E=>{E.stopPropagation(),h()},"aria-label":"Play",children:i.jsx(Et,{size:10})}),i.jsx("button",{className:"nf-icon-btn",onClick:y,"aria-label":"Add to list",children:p?i.jsx(M0,{size:10}):i.jsx(Br,{size:10})}),i.jsx("button",{className:"nf-icon-btn",onClick:E=>E.stopPropagation(),"aria-label":"Like",children:i.jsx(_0,{size:10})}),i.jsx("button",{className:"nf-icon-btn",style:{marginLeft:"auto"},onClick:E=>{E.stopPropagation(),h()},"aria-label":"More info",children:i.jsx(im,{size:10})})]})]})]})}const jr={title:mt.name,artist:kr,initials:mt.name,logo:mt.logo,cover:mt.coverBg,period:"2025",bullets:mt.bullets,match:99,tag:"Original Film",type:"project"};function Bm(){const[s,u]=k.useState(null),[d,o]=k.useState(new Set);k.useEffect(()=>{document.title=`${kr} | RO+`},[]),k.useEffect(()=>(document.body.style.overflow=s?"hidden":"",()=>{document.body.style.overflow=""}),[s]);const h=y=>E=>{E.stopPropagation(),o(x=>{const g=new Set(x);return g.has(y.title)?g.delete(y.title):g.add(y.title),g})},p=i0[0];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:_m}),i.jsxs("div",{className:"nf-page",children:[i.jsxs("section",{className:"nf-hero",children:[i.jsx("div",{className:"nf-hero-photo",style:{backgroundImage:"url(/ro.jpg)"}}),i.jsxs("div",{className:"nf-hero-content",children:[i.jsxs("div",{className:"nf-hero-badge",children:[i.jsx("span",{className:"n-mark",children:"N"})," SERIES"]}),i.jsx("h1",{className:"nf-hero-title",children:kr}),i.jsxs("div",{className:"nf-hero-meta",children:[i.jsx("span",{className:"nf-tag",children:"98% Match"}),i.jsx("span",{children:"2020 – Present"}),i.jsx("span",{className:"nf-match",children:"TV-MA"}),i.jsx("span",{className:"nf-match",children:"HD"}),i.jsxs("span",{children:[U0.length," Seasons"]})]}),i.jsx("p",{className:"nf-hero-desc",children:Dm}),i.jsxs("div",{className:"nf-hero-actions",children:[i.jsxs("button",{className:"nf-btn nf-btn-play",onClick:()=>u(p),children:[i.jsx(Et,{})," Play"]}),i.jsxs("button",{className:"nf-btn nf-btn-info",onClick:()=>u(p),children:[i.jsx(dm,{})," More Info"]})]})]})]}),i.jsxs("div",{className:"nf-rows",children:[i.jsxs(uo,{title:"Continue Watching",children:[i.jsx(fo,{show:p,wide:!0,progress:72,onOpen:()=>u(p),inList:d.has(p.title),onToggleList:h(p)}),i.jsx(fo,{show:jr,wide:!0,progress:45,onOpen:()=>u(jr),inList:d.has(jr.title),onToggleList:h(jr)})]}),i.jsx(uo,{title:"Trending Now",children:i0.map(y=>i.jsx(fo,{show:y,onOpen:()=>u(y),inList:d.has(y.title),onToggleList:h(y)},`t-${y.title}`))}),i.jsx(uo,{title:"Browse by Genre",children:Object.entries(Cm).map(([y,E])=>i.jsxs("div",{className:"nf-skill-card",children:[i.jsxs("div",{children:[i.jsx("div",{className:"nf-skill-category",children:y}),i.jsx("div",{className:"nf-skill-list",children:E.join(" · ")})]}),i.jsxs("div",{style:{fontSize:11,color:"#666"},children:[E.length," titles"]})]},y))}),i.jsx("div",{className:"nf-row-header",children:i.jsx("h2",{className:"nf-row-title",children:"RO+ Originals"})}),i.jsxs("div",{className:"nf-featured",children:[i.jsx("div",{className:"nf-featured-cover",style:{background:mt.coverBg},children:i.jsx("img",{src:`/${mt.logo}`,alt:mt.name})}),i.jsxs("div",{className:"nf-featured-body",children:[i.jsx("div",{className:"nf-featured-tag",children:"RO+ Original"}),i.jsx("div",{className:"nf-featured-title",children:mt.name}),i.jsxs("div",{className:"nf-featured-meta",children:["2025 · ",mt.role]}),i.jsx("div",{className:"nf-featured-desc",children:mt.bullets[0]}),i.jsxs("a",{href:mt.url,target:"_blank",rel:"noopener noreferrer",className:"nf-featured-link",children:[mt.url.replace("https://","").replace(/\/$/,"")," ↗"]})]})]}),i.jsx("div",{className:"nf-row-header",children:i.jsx("h2",{className:"nf-row-title",children:"Academy Award Nominees"})}),i.jsxs("div",{className:"nf-edu",children:[i.jsxs("div",{className:"nf-edu-badge",children:["CSUF",i.jsx("br",{}),"Computer Science"]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:12,color:"#E50914",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6},children:"Limited Series · 4 Seasons"}),i.jsx("div",{style:{fontSize:22,fontWeight:800,marginBottom:4},children:l0.degree}),i.jsx("div",{style:{fontSize:14,color:"#999"},children:l0.school})]})]}),i.jsxs("div",{className:"nf-footer",children:[i.jsxs("div",{style:{marginBottom:16},children:[i.jsx(ue,{to:"/",children:"Home"}),i.jsx(ue,{to:"/resume",children:"Resume"}),i.jsx(ue,{to:"/spotify",children:"Spotify Resume"}),i.jsx(ue,{to:"/projects",children:"Projects"})]}),i.jsxs("div",{children:["RO+ is a parody. © ",new Date().getFullYear()," ",kr,"."]})]})]}),s&&i.jsx("div",{className:"nf-modal-backdrop",onClick:()=>u(null),children:i.jsxs("div",{className:"nf-modal",onClick:y=>y.stopPropagation(),children:[i.jsx("button",{className:"nf-modal-close",onClick:()=>u(null),"aria-label":"Close",children:"✕"}),i.jsxs("div",{className:"nf-modal-hero",style:{background:s.cover},children:[s.logo&&i.jsx("div",{className:"nf-modal-hero-logo",children:i.jsx("img",{src:`/${s.logo}`,alt:s.artist})}),i.jsxs("div",{className:"nf-modal-title-stack",children:[i.jsx("h2",{className:"nf-modal-title",children:s.title}),i.jsxs("div",{className:"nf-modal-actions",children:[i.jsxs("button",{className:"nf-btn nf-btn-play",children:[i.jsx(Et,{})," Play"]}),i.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},onClick:()=>{o(y=>{const E=new Set(y);return E.has(s.title)?E.delete(s.title):E.add(s.title),E})},children:d.has(s.title)?i.jsx(M0,{}):i.jsx(Br,{})}),i.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},children:i.jsx(_0,{})}),i.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40,marginLeft:"auto"},children:i.jsx(bm,{})})]})]})]}),i.jsxs("div",{className:"nf-modal-content",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"nf-modal-meta-line",children:[i.jsxs("span",{className:"nf-tag",children:[s.match,"% Match"]}),i.jsx("span",{children:s.period}),i.jsx("span",{className:"nf-match",children:"TV-MA"}),i.jsx("span",{className:"nf-match",children:"HD"}),i.jsxs("span",{children:[s.bullets.length," Episodes"]})]}),s.summary&&i.jsx("div",{className:"nf-modal-summary",children:s.summary}),i.jsx("ul",{className:"nf-modal-bullets",children:s.bullets.map((y,E)=>i.jsx("li",{children:y},E))})]}),i.jsxs("div",{className:"nf-modal-side",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Starring:"})," ",s.artist]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Genre:"})," ",s.tag]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Period:"})," ",s.period]}),i.jsxs("div",{style:{marginTop:12,color:"#666",fontSize:11},children:["This series is: ",i.jsx("strong",{style:{color:"#999"},children:"Ambitious, Technical, Inspiring"})]})]})]})]})})]})]})}const{name:Fn,email:po,website:r0,phone:Um,summary:Hm,experience:yo,skills:jo,project:ia,education:s0}=ni,se="#76B900",ho="#5a8f00",Gl="#1a1a1a",c0="#0f0f0f",Fe="#2a2a2a",Lm=`
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
    border-bottom: 1px solid ${Fe};
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
    background: radial-gradient(circle at 30% 30%, ${se} 0%, ${ho} 50%, #1a3300 100%);
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
    background: ${Gl};
    border: 1px solid ${Fe};
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
    border: 1px solid ${Fe};
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
    border: 1px solid ${Fe};
  }

  .nv-btn-ghost:hover { border-color: ${se}; color: ${se}; }

  /* Benchmark score */
  .nv-score {
    background: ${c0};
    border: 1px solid ${Fe};
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
    background: linear-gradient(90deg, ${ho}, ${se});
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
    background: ${Gl};
    border: 1px solid ${Fe};
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
    background: ${Gl};
    border: 1px solid ${Fe};
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
    border: 1px solid ${Fe};
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
    background: linear-gradient(90deg, ${ho}, ${se});
    border-radius: 2px;
    transition: width 1s ease-out;
    box-shadow: 0 0 6px ${se};
  }

  .nv-bench-summary {
    font-size: 13px;
    color: #d6d6d6;
    line-height: 1.6;
    padding: 12px;
    background: ${c0};
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
    background: ${Gl};
    border: 1px solid ${Fe};
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
    border-bottom: 1px solid ${Fe};
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
    border: 1px solid ${Fe};
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
    background: ${Gl};
    border: 1px solid ${Fe};
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
    border: 1px solid ${Fe};
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

  .nv-gauge-bg { stroke: ${Fe}; }
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
    background: ${Gl};
    border: 1px solid ${Fe};
    border-radius: 6px;
    padding: 16px;
  }

  .nv-info-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid ${Fe};
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
    border-top: 1px solid ${Fe};
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
`,Ym=[1.6,1.3,1,.9];function qm(s,u){const d=Ym[u]??.8;return Math.round(s*600*d)}const In=yo.map((s,u)=>qm(s.bullets.length,u)),Gm=Math.max(...In,1),H0=Object.values(jo).flat().length,Vm=In.reduce((s,u)=>s+u,0)+H0*30+ia.bullets.length*150;function o0({value:s,label:u}){const o=2*Math.PI*40,h=o-s/100*o;return i.jsxs("div",{className:"nv-gauge",children:[i.jsxs("svg",{viewBox:"0 0 96 96",children:[i.jsx("circle",{cx:"48",cy:"48",r:40,fill:"none",strokeWidth:"8",className:"nv-gauge-bg"}),i.jsx("circle",{cx:"48",cy:"48",r:40,fill:"none",strokeWidth:"8",className:"nv-gauge-fg",strokeDasharray:o,strokeDashoffset:h,strokeLinecap:"round"})]}),i.jsxs("div",{className:"nv-gauge-text",children:[i.jsxs("span",{className:"nv-gauge-num",children:[s,"%"]}),i.jsx("span",{className:"nv-gauge-unit",children:u})]})]})}function Xm(){const[s,u]=k.useState(0),d=Object.values(jo).flat().length,o=6;k.useEffect(()=>{document.title=`${Fn} | RTX Engineering Edition`;const p=setTimeout(()=>u(87),300);return()=>clearTimeout(p)},[]);const h={Languages:i.jsx(gm,{}),"Frameworks / Libraries":i.jsx(Gp,{}),Infrastructure:i.jsx(Qp,{}),Observability:i.jsx(hm,{}),"Machine Learning":i.jsx(Vp,{}),Tools:i.jsx(nm,{})};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Lm}),i.jsxs("div",{className:"nv-page",children:[i.jsxs("header",{className:"nv-header",children:[i.jsxs(ue,{to:"/",className:"nv-brand",children:[i.jsx("div",{className:"nv-brand-eye"}),i.jsxs("div",{className:"nv-brand-text",children:[i.jsx("span",{children:"RTX"})," ENGINE"]})]}),i.jsxs("nav",{className:"nv-tabs",children:[i.jsx("a",{className:"nv-tab active",href:"#dashboard",children:"Dashboard"}),i.jsx("a",{className:"nv-tab",href:"#performance",children:"Performance"}),i.jsx("a",{className:"nv-tab",href:"#specs",children:"Specifications"}),i.jsx("a",{className:"nv-tab",href:"#workload",children:"Workload"}),i.jsx("a",{className:"nv-tab",href:"#system",children:"System"})]}),i.jsxs("div",{className:"nv-user",children:[i.jsx("span",{className:"nv-status-dot"}),"ONLINE · ",Fn.split(" ")[0].toUpperCase()]})]}),i.jsxs("div",{className:"nv-container",children:[i.jsxs("section",{className:"nv-hero",id:"dashboard",children:[i.jsxs("div",{children:[i.jsx("div",{className:"nv-hero-eyebrow",children:"RTX RO · Engineering Edition"}),i.jsxs("h1",{className:"nv-hero-title",children:[Fn.split(" ")[0]," ",i.jsx("em",{children:Fn.split(" ")[1]})]}),i.jsx("p",{className:"nv-hero-sub",children:Hm}),i.jsxs("div",{className:"nv-hero-cta",children:[i.jsxs("a",{href:`mailto:${po}`,className:"nv-btn nv-btn-primary",children:[i.jsx(Et,{})," Launch Contact"]}),i.jsxs(ue,{to:"/resume",className:"nv-btn nv-btn-ghost",children:[i.jsx(fm,{})," Download Resume"]})]})]}),i.jsxs("div",{className:"nv-score",children:[i.jsx("div",{className:"nv-score-label",children:"Benchmark Score"}),i.jsxs("div",{children:[i.jsx("span",{className:"nv-score-value",children:Vm.toLocaleString()}),i.jsx("span",{className:"nv-score-unit",children:"pts"})]}),i.jsxs("div",{className:"nv-score-sub",children:[In.length," deployments · ",H0," compute cores"]}),i.jsx("div",{className:"nv-score-bar",children:i.jsx("div",{className:"nv-score-fill"})})]})]}),i.jsxs("section",{className:"nv-stats",children:[i.jsxs("div",{className:"nv-stat-card",children:[i.jsx("div",{className:"nv-stat-icon",children:i.jsx(Vp,{})}),i.jsx("div",{className:"nv-stat-label",children:"Compute Cores"}),i.jsxs("div",{className:"nv-stat-value",children:[d,i.jsx("span",{className:"nv-stat-unit",children:"tech"})]})]}),i.jsxs("div",{className:"nv-stat-card",children:[i.jsx("div",{className:"nv-stat-icon",children:i.jsx(pm,{})}),i.jsx("div",{className:"nv-stat-label",children:"Years Active"}),i.jsxs("div",{className:"nv-stat-value",children:[o,i.jsx("span",{className:"nv-stat-unit",children:"yrs"})]})]}),i.jsxs("div",{className:"nv-stat-card",children:[i.jsx("div",{className:"nv-stat-icon",children:i.jsx(Qp,{})}),i.jsx("div",{className:"nv-stat-label",children:"Deployments"}),i.jsxs("div",{className:"nv-stat-value",children:[yo.length+1,i.jsx("span",{className:"nv-stat-unit",children:"prod"})]})]}),i.jsxs("div",{className:"nv-stat-card",children:[i.jsx("div",{className:"nv-stat-icon",children:i.jsx(xm,{})}),i.jsx("div",{className:"nv-stat-label",children:"Thermals"}),i.jsx("div",{className:"nv-stat-value",style:{color:se},children:"NOMINAL"})]})]}),i.jsxs("section",{className:"nv-section",id:"performance",children:[i.jsxs("div",{className:"nv-section-header",children:[i.jsx("h2",{className:"nv-section-title",children:"Performance Benchmarks"}),i.jsx("span",{className:"nv-section-sub",children:"Per-deployment results · synthetic + real-world"})]}),i.jsx("div",{className:"nv-benchmarks",children:yo.map((p,y)=>i.jsxs("div",{className:"nv-bench",children:[i.jsxs("div",{className:"nv-bench-head",children:[i.jsx("div",{className:"nv-bench-logo",style:{background:p.coverBg},children:p.logo&&i.jsx("img",{src:`/${p.logo}`,alt:p.company})}),i.jsxs("div",{className:"nv-bench-meta",children:[i.jsx("h3",{className:"nv-bench-title",children:p.title}),i.jsx("div",{className:"nv-bench-company",children:p.company}),i.jsxs("div",{className:"nv-bench-loc",children:[p.location," · ",p.period]})]}),i.jsxs("div",{className:"nv-bench-score",children:[i.jsx("div",{className:"nv-bench-score-num",children:In[y].toLocaleString()}),i.jsx("div",{className:"nv-bench-score-label",children:"benchmark"})]})]}),i.jsx("div",{className:"nv-bench-bar",children:i.jsx("div",{className:"nv-bench-bar-fill",style:{width:`${Math.round(In[y]/Gm*100)}%`}})}),p.summary&&i.jsx("div",{className:"nv-bench-summary",children:p.summary}),i.jsx("ul",{className:"nv-bench-bullets",children:p.bullets.map((E,x)=>i.jsx("li",{children:E},x))})]},p.company))})]}),i.jsxs("section",{className:"nv-section",id:"specs",children:[i.jsxs("div",{className:"nv-section-header",children:[i.jsx("h2",{className:"nv-section-title",children:"System Specifications"}),i.jsx("span",{className:"nv-section-sub",children:"Driver version: 2026.05"})]}),i.jsx("div",{className:"nv-specs",children:Object.entries(jo).map(([p,y])=>i.jsxs("div",{className:"nv-spec-card",children:[i.jsxs("div",{className:"nv-spec-head",children:[h[p]??i.jsx(Gp,{})," ",p]}),i.jsx("div",{className:"nv-spec-list",children:y.map(E=>i.jsx("span",{className:"nv-spec-chip",children:E},E))})]},p))})]}),i.jsxs("section",{className:"nv-section",id:"workload",children:[i.jsxs("div",{className:"nv-section-header",children:[i.jsxs("h2",{className:"nv-section-title",children:[i.jsx(cm,{style:{color:se,fontSize:8,marginRight:4}}),"Active Workload"]}),i.jsx("span",{className:"nv-section-sub",children:"PID 0x01 · live process"})]}),i.jsxs("div",{className:"nv-process",children:[i.jsx("div",{className:"nv-proc-logo",style:{background:ia.coverBg},children:i.jsx("img",{src:`/${ia.logo}`,alt:ia.name})}),i.jsxs("div",{className:"nv-proc-info",children:[i.jsx("h3",{className:"nv-proc-title",children:ia.name}),i.jsx("div",{className:"nv-proc-role",children:ia.role}),i.jsx("div",{className:"nv-proc-tech",children:ia.tech}),i.jsx("ul",{className:"nv-proc-bullets",children:ia.bullets.map((p,y)=>i.jsx("li",{children:p},y))}),i.jsxs("a",{href:ia.url,target:"_blank",rel:"noopener noreferrer",className:"nv-btn nv-btn-ghost",style:{marginTop:16},children:[i.jsx(Et,{})," Open Process"]})]}),i.jsxs("div",{className:"nv-proc-gauge",children:[i.jsx(o0,{value:s,label:"Utilization"}),i.jsx(o0,{value:92,label:"Memory"})]})]})]}),i.jsxs("section",{className:"nv-section",id:"system",children:[i.jsx("div",{className:"nv-section-header",children:i.jsx("h2",{className:"nv-section-title",children:"System Information"})}),i.jsxs("div",{className:"nv-sysinfo",children:[i.jsxs("div",{className:"nv-info-card",children:[i.jsxs("div",{className:"nv-spec-head",children:[i.jsx(Pn,{})," Training Data"]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Degree"}),i.jsx("span",{className:"val",children:s0.degree})]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Institution"}),i.jsx("span",{className:"val",children:s0.school})]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Architecture"}),i.jsx("span",{className:"val",children:"Computer Science"})]})]}),i.jsxs("div",{className:"nv-info-card",children:[i.jsxs("div",{className:"nv-spec-head",children:[i.jsx(ti,{})," Contact Interfaces"]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Email"}),i.jsx("span",{className:"val",children:i.jsx("a",{href:`mailto:${po}`,children:po})})]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Website"}),i.jsx("span",{className:"val",children:i.jsx("a",{href:`https://${r0}`,target:"_blank",rel:"noopener noreferrer",children:r0})})]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Phone"}),i.jsx("span",{className:"val",children:Um})]})]})]})]})]}),i.jsxs("footer",{className:"nv-footer",children:["© ",new Date().getFullYear()," ",Fn," · RTX Engineering Edition · Driver build 2026.05"]})]})]})}const{name:al,email:u0,summary:Qm,experience:So,skills:L0,project:qt,education:go}=ni,Vl="linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",$m="linear-gradient(90deg, #0064E0 0%, #0082FB 50%, #00C6FF 100%)",Zm=`
  .ig-page {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #000;
    color: #fafafa;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  .ig-page * { box-sizing: border-box; }

  /* ============ Top Nav ============ */
  .ig-nav {
    background: #000;
    border-bottom: 1px solid #262626;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }

  .ig-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #fafafa;
  }

  .ig-brand-logo {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: ${Vl};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
  }

  .ig-brand-text {
    font-family: 'Billabong', 'Snell Roundhand', cursive;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  .ig-search {
    flex: 0 1 268px;
    height: 36px;
    background: #1a1a1a;
    border: 1px solid #1a1a1a;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 14px;
    color: #737373;
    font-size: 14px;
  }

  .ig-nav-icons {
    display: flex;
    align-items: center;
    gap: 22px;
    font-size: 22px;
    color: #fafafa;
  }

  .ig-nav-icons a, .ig-nav-icons button {
    color: #fafafa;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 22px;
    display: flex;
    align-items: center;
  }

  /* ============ Container ============ */
  .ig-container {
    max-width: 935px;
    margin: 0 auto;
    padding: 30px 20px 100px;
  }

  /* ============ Profile Header ============ */
  .ig-profile {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 30px;
    padding: 0 20px 44px;
    border-bottom: 1px solid #262626;
    margin-bottom: 24px;
    align-items: center;
  }

  .ig-avatar-wrap {
    display: flex;
    justify-content: center;
  }

  .ig-avatar-ring {
    width: 168px;
    height: 168px;
    border-radius: 50%;
    background: ${Vl};
    padding: 4px;
    position: relative;
  }

  .ig-avatar-ring::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 3px solid #000;
  }

  .ig-avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }

  .ig-profile-info {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .ig-handle-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .ig-handle {
    font-size: 22px;
    font-weight: 400;
    color: #fafafa;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .ig-verified {
    color: #1d9bf0;
    font-size: 18px;
  }

  .ig-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .ig-btn {
    height: 32px;
    padding: 0 16px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-family: inherit;
  }

  .ig-btn-primary {
    background: #0095f6;
    color: #fff;
  }

  .ig-btn-primary:hover { background: #1877f2; }

  .ig-btn-secondary {
    background: #262626;
    color: #fafafa;
  }

  .ig-btn-secondary:hover { background: #363636; }

  .ig-icon-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #262626;
    color: #fafafa;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  /* ============ Stats ============ */
  .ig-stats {
    display: flex;
    gap: 40px;
    font-size: 16px;
    color: #fafafa;
  }

  .ig-stats strong {
    font-weight: 700;
    color: #fafafa;
  }

  /* ============ Bio ============ */
  .ig-bio {
    font-size: 14px;
    line-height: 1.5;
    color: #fafafa;
  }

  .ig-bio-name {
    font-weight: 700;
    margin-bottom: 2px;
  }

  .ig-bio-title {
    color: #a8a8a8;
    margin-bottom: 8px;
  }

  .ig-bio-link {
    color: #e0f1ff;
    font-weight: 600;
    text-decoration: none;
  }

  .ig-bio-link:hover { text-decoration: underline; }

  /* ============ Meta Banner ============ */
  .ig-meta-banner {
    margin: 0 20px 28px;
    padding: 14px 18px;
    background: ${$m};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    color: #fff;
    flex-wrap: wrap;
  }

  .ig-meta-banner-text {
    display: flex;
    flex-direction: column;
  }

  .ig-meta-banner-title {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.85;
  }

  .ig-meta-banner-sub {
    font-size: 16px;
    font-weight: 700;
  }

  .ig-meta-banner-btn {
    background: rgba(0, 0, 0, 0.25);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.35);
    padding: 8px 14px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
  }

  .ig-meta-banner-btn:hover { background: rgba(0, 0, 0, 0.4); }

  /* ============ Highlights ============ */
  .ig-highlights {
    display: flex;
    gap: 36px;
    padding: 0 20px 32px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .ig-highlights::-webkit-scrollbar { display: none; }

  .ig-highlight {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 92px;
    text-align: center;
  }

  .ig-highlight-ring {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1.5px solid #404040;
    padding: 4px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.15s;
  }

  .ig-highlight:hover .ig-highlight-ring {
    border-color: #fafafa;
  }

  .ig-highlight-bubble {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fafafa;
    font-size: 22px;
    font-weight: 700;
  }

  .ig-highlight-label {
    font-size: 12px;
    color: #fafafa;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ============ Tabs ============ */
  .ig-tabs {
    display: flex;
    justify-content: center;
    gap: 60px;
    border-top: 1px solid #262626;
    margin: 0 20px 4px;
  }

  .ig-tab {
    background: none;
    border: none;
    color: #737373;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 16px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    border-top: 1px solid transparent;
    margin-top: -1px;
  }

  .ig-tab.active {
    color: #fafafa;
    border-top-color: #fafafa;
  }

  /* ============ Grid ============ */
  .ig-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 0 20px;
  }

  .ig-post {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    cursor: pointer;
    background: #1a1a1a;
  }

  .ig-post-cover {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: -1px;
    text-transform: uppercase;
    padding: 12px;
    line-height: 1.1;
    word-break: break-word;
  }

  .ig-post-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 18%;
  }

  .ig-post-hover {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
  }

  .ig-post:hover .ig-post-hover { opacity: 1; }

  .ig-post-hover-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .ig-post-pill {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    backdrop-filter: blur(4px);
  }

  /* ============ Modal ============ */
  .ig-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    overflow-y: auto;
  }

  .ig-modal-close {
    position: fixed;
    top: 16px;
    right: 20px;
    background: none;
    border: none;
    color: #fff;
    font-size: 26px;
    cursor: pointer;
    z-index: 220;
  }

  .ig-modal {
    background: #000;
    border: 1px solid #262626;
    border-radius: 8px;
    max-width: 1040px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    max-height: 90vh;
    overflow: hidden;
  }

  .ig-modal-image {
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    word-break: break-word;
    min-height: 360px;
  }

  .ig-modal-image img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }

  .ig-modal-side {
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: #000;
  }

  .ig-modal-head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-bottom: 1px solid #262626;
  }

  .ig-modal-head-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${Vl};
    padding: 2px;
  }

  .ig-modal-head-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #000;
  }

  .ig-modal-head-meta {
    flex: 1;
    min-width: 0;
  }

  .ig-modal-head-name {
    font-size: 14px;
    font-weight: 600;
    color: #fafafa;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .ig-modal-head-sub {
    font-size: 12px;
    color: #a8a8a8;
  }

  .ig-modal-comments {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .ig-comment {
    display: flex;
    gap: 10px;
    font-size: 14px;
    line-height: 1.4;
    color: #fafafa;
  }

  .ig-comment-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${Vl};
    flex-shrink: 0;
    padding: 1.5px;
  }

  .ig-comment-avatar-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #fafafa;
  }

  .ig-comment-body {
    flex: 1;
    min-width: 0;
  }

  .ig-comment-handle {
    font-weight: 600;
    margin-right: 6px;
  }

  .ig-comment-text {
    color: #fafafa;
  }

  .ig-comment-meta {
    margin-top: 4px;
    font-size: 12px;
    color: #737373;
    display: flex;
    gap: 16px;
  }

  .ig-modal-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 16px 6px;
    border-top: 1px solid #262626;
    font-size: 22px;
    color: #fafafa;
  }

  .ig-modal-actions button {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .ig-modal-actions .right { margin-left: auto; }
  .ig-modal-actions .liked { color: #ed4956; }

  .ig-modal-likes {
    padding: 4px 16px 0;
    font-size: 14px;
    font-weight: 600;
    color: #fafafa;
  }

  .ig-modal-time {
    padding: 4px 16px 14px;
    font-size: 10px;
    color: #737373;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* ============ Mobile bottom nav ============ */
  .ig-bottom-nav {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #000;
    border-top: 1px solid #262626;
    z-index: 50;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    color: #fafafa;
  }

  .ig-bottom-nav a, .ig-bottom-nav button {
    color: #fafafa;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 22px;
    display: flex;
    align-items: center;
  }

  .ig-bottom-nav .me-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    border: 1.5px solid #fafafa;
    padding: 0;
  }

  .ig-bottom-nav .me-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ============ Footer ============ */
  .ig-footer {
    text-align: center;
    padding: 32px 16px 16px;
    color: #737373;
    font-size: 12px;
  }

  .ig-footer a {
    color: #737373;
    text-decoration: none;
    margin: 0 8px;
  }

  .ig-footer a:hover { text-decoration: underline; }

  /* ============ Responsive ============ */
  @media (max-width: 736px) {
    .ig-container { padding: 16px 0 70px; }
    .ig-nav { padding: 0 16px; height: 54px; }
    .ig-search { display: none; }
    .ig-brand-text { font-size: 22px; }
    .ig-nav-icons { gap: 16px; font-size: 20px; }
    .ig-nav-icons .desktop-only { display: none; }

    .ig-profile {
      grid-template-columns: 80px 1fr;
      gap: 24px;
      padding: 0 16px 20px;
    }
    .ig-avatar-ring { width: 86px; height: 86px; padding: 2px; }
    .ig-avatar-ring::after { inset: 2px; border-width: 2px; }
    .ig-handle { font-size: 18px; }
    .ig-stats { display: none; }
    .ig-mobile-stats {
      display: flex;
      justify-content: space-around;
      padding: 12px 16px;
      border-top: 1px solid #262626;
      border-bottom: 1px solid #262626;
      margin: 0 0 16px;
      text-align: center;
      font-size: 14px;
    }
    .ig-mobile-stats > div { display: flex; flex-direction: column; gap: 2px; }
    .ig-mobile-stats strong { font-weight: 700; }
    .ig-mobile-stats span { font-size: 12px; color: #a8a8a8; }

    .ig-bio { padding: 0 16px; margin-bottom: 14px; }
    .ig-meta-banner { margin: 0 16px 20px; padding: 12px 14px; }
    .ig-meta-banner-sub { font-size: 14px; }

    .ig-highlights { padding: 0 16px 24px; gap: 16px; }
    .ig-highlight { width: 76px; }
    .ig-highlight-ring { width: 64px; height: 64px; }

    .ig-tabs { gap: 40px; margin: 0; padding: 0 16px; }
    .ig-tab { font-size: 11px; padding: 12px 0; }
    .ig-tab span { display: none; }

    .ig-grid { gap: 2px; padding: 0; }
    .ig-post-cover { font-size: 16px; padding: 6px; }
    .ig-post-pill { font-size: 9px; padding: 2px 6px; }

    .ig-bottom-nav { display: flex; }

    .ig-modal-backdrop { padding: 0; }
    .ig-modal {
      grid-template-columns: 1fr;
      max-height: 100vh;
      border-radius: 0;
      border: none;
      height: 100vh;
    }
    .ig-modal-image { min-height: 220px; max-height: 38vh; font-size: 28px; }
    .ig-modal-close { top: 12px; right: 16px; }
  }

  @media (min-width: 737px) {
    .ig-mobile-stats { display: none; }
  }
`;function Km(s){return s.split(/\s+/).filter(Boolean).slice(0,2).map(u=>u[0]).join("").toUpperCase()}function Jm(s){return s.toLowerCase().replace(/[^a-z0-9]/g,"")}const Fm=So.map((s,u)=>({id:`job-${u}`,cover:s.coverBg||Vl,logo:s.logo,pill:u===0?"Pinned":"Post",caption:s.summary??`Shipped ${s.bullets.length} workstreams as ${s.title} @ ${s.company}.`,company:s.company,title:s.title,period:s.period,location:s.location,summary:s.summary,bullets:s.bullets,likes:980+(4-u)*314+s.bullets.length*27,url:void 0})),Wm={id:"project",cover:qt.coverBg,logo:qt.logo,pill:"Reel",caption:`Building ${qt.name} — ${qt.role}.`,company:qt.name,title:qt.role,period:"Now",location:qt.tech,summary:qt.bullets[0],bullets:qt.bullets,likes:4127,url:qt.url},Pm={id:"edu",cover:"linear-gradient(135deg, #f09433 0%, #bc1888 100%)",pill:"Throwback",caption:go.degree,company:go.school,title:go.degree,period:"2016 – 2020",location:"Fullerton, CA",summary:"Where the foundation got laid — CS at CSUF.",bullets:["B.S. Computer Science with a focus on systems and ML.","Built the muscle memory for the production-scale work that came after."],likes:612,url:void 0},Sr=[Wm,...Fm,Pm],wr=Object.values(L0).flat().length;function Im(){const[s,u]=k.useState("posts"),[d,o]=k.useState(null),[h,p]=k.useState(new Set),[y,E]=k.useState(new Set),[x,g]=k.useState(!1);k.useEffect(()=>{document.title=`${al} (@ro.inzunza) · Engineering`},[]),k.useEffect(()=>(document.body.style.overflow=d?"hidden":"",()=>{document.body.style.overflow=""}),[d]);const T=(B,Y,X)=>{const q=new Set(B);q.has(Y)?q.delete(Y):q.add(Y),X(q)},C=Sr.filter(B=>B.pill==="Reel"||B.id==="project"),_=s==="reels"?C:s==="tagged"?[]:Sr;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Zm}),i.jsxs("div",{className:"ig-page",children:[i.jsxs("header",{className:"ig-nav",children:[i.jsxs(ue,{to:"/",className:"ig-brand",children:[i.jsx("span",{className:"ig-brand-logo",children:i.jsx(lm,{})}),i.jsx("span",{className:"ig-brand-text",children:"Instagram"})]}),i.jsxs("div",{className:"ig-search",children:[i.jsx(Dr,{size:12})," Search"]}),i.jsxs("div",{className:"ig-nav-icons",children:[i.jsx(ue,{to:"/","aria-label":"Home",className:"desktop-only",children:i.jsx(ti,{})}),i.jsx("button",{"aria-label":"Messages",className:"desktop-only",children:i.jsx(Zp,{})}),i.jsx("button",{"aria-label":"New post",className:"desktop-only",children:i.jsx(Xp,{})}),i.jsx("button",{"aria-label":"Explore",className:"desktop-only",children:i.jsx(um,{})}),i.jsx("button",{"aria-label":"Profile",children:i.jsx(Jp,{})})]})]}),i.jsxs("main",{className:"ig-container",children:[i.jsxs("section",{className:"ig-profile",children:[i.jsx("div",{className:"ig-avatar-wrap",children:i.jsx("div",{className:"ig-avatar-ring",children:i.jsx("img",{src:"/ro.jpg",alt:al,className:"ig-avatar"})})}),i.jsxs("div",{className:"ig-profile-info",children:[i.jsxs("div",{className:"ig-handle-row",children:[i.jsxs("span",{className:"ig-handle",children:["ro.inzunza",i.jsx(Pn,{className:"ig-verified"})]}),i.jsxs("div",{className:"ig-actions",children:[i.jsx("button",{className:x?"ig-btn ig-btn-secondary":"ig-btn ig-btn-primary",onClick:()=>g(B=>!B),children:x?"Following":"Follow"}),i.jsx("a",{href:`mailto:${u0}`,className:"ig-btn ig-btn-secondary",children:"Message"}),i.jsx("button",{className:"ig-icon-btn","aria-label":"More options",children:i.jsx(Ar,{size:12})})]})]}),i.jsxs("div",{className:"ig-stats",children:[i.jsxs("span",{children:[i.jsx("strong",{children:Sr.length})," posts"]}),i.jsxs("span",{children:[i.jsx("strong",{children:So.length*1200+wr*87})," followers"]}),i.jsxs("span",{children:[i.jsx("strong",{children:wr})," following"]})]}),i.jsxs("div",{className:"ig-bio",children:[i.jsxs("div",{className:"ig-bio-name",children:[al," ",i.jsx(Pn,{style:{color:"#1d9bf0",marginLeft:4},size:12})]}),i.jsx("div",{className:"ig-bio-title",children:"Systems Engineer · Founder @ SideQuest"}),i.jsx("div",{children:Qm}),i.jsx("div",{style:{marginTop:8},children:"📍 California, US · ☕ Coffee · 🎮 Gamer · 🐕 Frenchie dad"}),i.jsx("a",{href:"https://www.rosendoinzunza.com",target:"_blank",rel:"noopener noreferrer",className:"ig-bio-link",style:{marginTop:6,display:"inline-block"},children:"rosendoinzunza.com"})]})]})]}),i.jsxs("div",{className:"ig-mobile-stats",children:[i.jsxs("div",{children:[i.jsx("strong",{children:Sr.length}),i.jsx("span",{children:"posts"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:So.length*1200+wr*87}),i.jsx("span",{children:"followers"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:wr}),i.jsx("span",{children:"following"})]})]}),i.jsxs("div",{className:"ig-meta-banner",children:[i.jsxs("div",{className:"ig-meta-banner-text",children:[i.jsx("span",{className:"ig-meta-banner-title",children:"Hello, Meta 👋"}),i.jsx("span",{className:"ig-meta-banner-sub",children:"This profile was built for your team. Tap any post to see the receipts."})]}),i.jsx("a",{href:`mailto:${u0}`,className:"ig-meta-banner-btn",children:"Reach out →"})]}),i.jsx("div",{className:"ig-highlights",children:Object.entries(L0).map(([B,Y])=>i.jsxs("button",{className:"ig-highlight",onClick:()=>o({id:`skill-${B}`,cover:Vl,pill:"Highlight",caption:`${B}: ${Y.length} tools`,company:B,title:B,period:"Stack",bullets:Y,likes:Y.length*142}),children:[i.jsx("div",{className:"ig-highlight-ring",children:i.jsx("div",{className:"ig-highlight-bubble",children:Km(B)})}),i.jsx("span",{className:"ig-highlight-label",children:B})]},B))}),i.jsxs("div",{className:"ig-tabs",children:[i.jsxs("button",{className:`ig-tab ${s==="posts"?"active":""}`,onClick:()=>u("posts"),children:[i.jsx(mm,{})," ",i.jsx("span",{children:"Posts"})]}),i.jsxs("button",{className:`ig-tab ${s==="reels"?"active":""}`,onClick:()=>u("reels"),children:[i.jsx(Kp,{})," ",i.jsx("span",{children:"Reels"})]}),i.jsxs("button",{className:`ig-tab ${s==="tagged"?"active":""}`,onClick:()=>u("tagged"),children:[i.jsx(Jp,{})," ",i.jsx("span",{children:"Tagged"})]})]}),s==="tagged"?i.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"#737373"},children:[i.jsx("div",{style:{fontSize:18,fontWeight:700,color:"#fafafa",marginBottom:8},children:"Photos of you"}),i.jsx("div",{style:{fontSize:14},children:"When people tag you in photos, they'll appear here."})]}):i.jsx("div",{className:"ig-grid",children:_.map(B=>i.jsxs("div",{className:"ig-post",onClick:()=>o(B),style:{background:B.cover},children:[i.jsx("div",{className:"ig-post-cover",style:{background:B.cover},children:B.logo?i.jsx("img",{src:`/${B.logo}`,alt:B.company}):i.jsx("span",{children:B.company})}),i.jsx("span",{className:"ig-post-pill",children:B.pill}),i.jsxs("div",{className:"ig-post-hover",children:[i.jsxs("span",{className:"ig-post-hover-item",children:[i.jsx(Xl,{})," ",B.likes.toLocaleString()]}),i.jsxs("span",{className:"ig-post-hover-item",children:[i.jsx($p,{})," ",B.bullets.length]})]})]},B.id))}),i.jsxs("footer",{className:"ig-footer",children:[i.jsxs("div",{style:{marginBottom:8},children:[i.jsx(ue,{to:"/",children:"Home"}),"·",i.jsx(ue,{to:"/resume",children:"Resume"}),"·",i.jsx(ue,{to:"/projects",children:"Projects"}),"·",i.jsx(ue,{to:"/spotify",children:"Spotify"}),"·",i.jsx(ue,{to:"/netflix",children:"Netflix"}),"·",i.jsx(ue,{to:"/nvidia",children:"Nvidia"})]}),i.jsxs("div",{children:["© ",new Date().getFullYear()," ",al," · Unofficial Instagram-style résumé. Not affiliated with Meta."]})]})]}),i.jsxs("nav",{className:"ig-bottom-nav",children:[i.jsx(ue,{to:"/","aria-label":"Home",children:i.jsx(ti,{})}),i.jsx("button",{"aria-label":"Search",children:i.jsx(Dr,{})}),i.jsx("button",{"aria-label":"New",children:i.jsx(Xp,{})}),i.jsx("button",{"aria-label":"Reels",children:i.jsx(Kp,{})}),i.jsx("button",{className:"me-avatar","aria-label":"Profile",children:i.jsx("img",{src:"/ro.jpg",alt:al})})]}),d&&i.jsxs("div",{className:"ig-modal-backdrop",onClick:()=>o(null),children:[i.jsx("button",{className:"ig-modal-close",onClick:()=>o(null),"aria-label":"Close",children:i.jsx(vm,{})}),i.jsxs("div",{className:"ig-modal",onClick:B=>B.stopPropagation(),children:[i.jsx("div",{className:"ig-modal-image",style:{background:d.cover},children:d.logo?i.jsx("img",{src:`/${d.logo}`,alt:d.company}):i.jsx("span",{children:d.company})}),i.jsxs("div",{className:"ig-modal-side",children:[i.jsxs("div",{className:"ig-modal-head",children:[i.jsx("div",{className:"ig-modal-head-avatar",children:i.jsx("img",{src:"/ro.jpg",alt:al})}),i.jsxs("div",{className:"ig-modal-head-meta",children:[i.jsxs("div",{className:"ig-modal-head-name",children:["ro.inzunza ",i.jsx(Pn,{className:"ig-verified",size:12})]}),i.jsx("div",{className:"ig-modal-head-sub",children:d.location??d.company})]}),i.jsx("button",{className:"ig-icon-btn",style:{background:"transparent"},"aria-label":"More",children:i.jsx(Ar,{size:12})})]}),i.jsxs("div",{className:"ig-modal-comments",children:[i.jsxs("div",{className:"ig-comment",children:[i.jsx("div",{className:"ig-comment-avatar",children:i.jsx("div",{className:"ig-comment-avatar-inner",children:i.jsx("img",{src:"/ro.jpg",alt:al,style:{width:"100%",height:"100%",borderRadius:"50%",objectFit:"cover"}})})}),i.jsxs("div",{className:"ig-comment-body",children:[i.jsx("span",{className:"ig-comment-handle",children:"ro.inzunza"}),i.jsxs("span",{className:"ig-comment-text",children:[i.jsx("strong",{children:d.title})," · ",i.jsx("span",{style:{color:"#a8a8a8"},children:d.period})]}),d.summary&&i.jsx("div",{className:"ig-comment-text",style:{marginTop:6},children:d.summary}),d.url&&i.jsxs("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"ig-bio-link",style:{display:"inline-block",marginTop:6},children:[d.url.replace(/^https?:\/\//,"").replace(/\/$/,"")," ↗"]})]})]}),d.bullets.map((B,Y)=>i.jsxs("div",{className:"ig-comment",children:[i.jsx("div",{className:"ig-comment-avatar",children:i.jsx("div",{className:"ig-comment-avatar-inner",children:(Y+1).toString()})}),i.jsxs("div",{className:"ig-comment-body",children:[i.jsxs("span",{className:"ig-comment-handle",children:[Jm(d.company)||"ship",".team"]}),i.jsx("span",{className:"ig-comment-text",children:B}),i.jsxs("div",{className:"ig-comment-meta",children:[i.jsxs("span",{children:[Math.round(d.likes/(Y+3)).toLocaleString()," likes"]}),i.jsx("span",{children:"Reply"})]})]})]},Y))]}),i.jsxs("div",{className:"ig-modal-actions",children:[i.jsx("button",{onClick:()=>T(h,d.id,p),"aria-label":"Like",className:h.has(d.id)?"liked":"",children:h.has(d.id)?i.jsx(Xl,{}):i.jsx(jm,{})}),i.jsx("button",{"aria-label":"Comment",children:i.jsx($p,{})}),i.jsx("button",{"aria-label":"Share",children:i.jsx(Zp,{})}),i.jsx("button",{className:"right",onClick:()=>T(y,d.id,E),"aria-label":"Save",children:i.jsx(ym,{style:{color:y.has(d.id)?"#fafafa":void 0}})})]}),i.jsxs("div",{className:"ig-modal-likes",children:[(d.likes+(h.has(d.id)?1:0)).toLocaleString()," likes"]}),i.jsx("div",{className:"ig-modal-time",children:d.period})]})]})]})]})]})}v2.createRoot(document.getElementById("root")).render(i.jsx(Ca.StrictMode,{children:i.jsx(Dg,{basename:"/",children:i.jsxs(ug,{children:[i.jsx(Da,{path:"/",element:i.jsx(Jg,{})}),i.jsx(Da,{path:"/spotify",element:i.jsx(km,{})}),i.jsx(Da,{path:"/spotify/:slug",element:i.jsx(Om,{})}),i.jsx(Da,{path:"/netflix",element:i.jsx(Bm,{})}),i.jsx(Da,{path:"/nvidia",element:i.jsx(Xm,{})}),i.jsx(Da,{path:"/meta",element:i.jsx(Im,{})}),i.jsx(Da,{path:"*",element:i.jsx(cg,{to:"/",replace:!0})})]})})}));
