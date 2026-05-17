(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function d(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(p){if(p.ep)return;p.ep=!0;const h=d(p);fetch(p.href,h)}})();function Cp(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var qc={exports:{}},kn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Oh(){if(tp)return kn;tp=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(s,p,h){var b=null;if(h!==void 0&&(b=""+h),p.key!==void 0&&(b=""+p.key),"key"in p){h={};for(var w in p)w!=="key"&&(h[w]=p[w])}else h=p;return p=h.ref,{$$typeof:u,type:s,key:b,ref:p!==void 0?p:null,props:h}}return kn.Fragment=o,kn.jsx=d,kn.jsxs=d,kn}var lp;function Ch(){return lp||(lp=1,qc.exports=Oh()),qc.exports}var r=Ch(),Hc={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Bh(){if(ap)return ee;ap=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.iterator;function B(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function G(x,O,H){this.props=x,this.context=O,this.refs=Y,this.updater=H||V}G.prototype.isReactComponent={},G.prototype.setState=function(x,O){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,O,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function U(){}U.prototype=G.prototype;function ue(x,O,H){this.props=x,this.context=O,this.refs=Y,this.updater=H||V}var I=ue.prototype=new U;I.constructor=ue,X(I,G.prototype),I.isPureReactComponent=!0;var je=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Be=Object.prototype.hasOwnProperty;function _e(x,O,H,k,Z,re){return H=re.ref,{$$typeof:u,type:x,key:O,ref:H!==void 0?H:null,props:re}}function Ue(x,O){return _e(x.type,O,void 0,void 0,void 0,x.props)}function Ee(x){return typeof x=="object"&&x!==null&&x.$$typeof===u}function lt(x){var O={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(H){return O[H]})}var ht=/\/+/g;function Xe(x,O){return typeof x=="object"&&x!==null&&x.key!=null?lt(""+x.key):O.toString(36)}function Al(){}function Rl(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Al,Al):(x.status="pending",x.then(function(O){x.status==="pending"&&(x.status="fulfilled",x.value=O)},function(O){x.status==="pending"&&(x.status="rejected",x.reason=O)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Ve(x,O,H,k,Z){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var P=!1;if(x===null)P=!0;else switch(re){case"bigint":case"string":case"number":P=!0;break;case"object":switch(x.$$typeof){case u:case o:P=!0;break;case R:return P=x._init,Ve(P(x._payload),O,H,k,Z)}}if(P)return Z=Z(x),P=k===""?"."+Xe(x,0):k,je(Z)?(H="",P!=null&&(H=P.replace(ht,"$&/")+"/"),Ve(Z,O,H,"",function(tl){return tl})):Z!=null&&(Ee(Z)&&(Z=Ue(Z,H+(Z.key==null||x&&x.key===Z.key?"":(""+Z.key).replace(ht,"$&/")+"/")+P)),O.push(Z)),1;P=0;var at=k===""?".":k+":";if(je(x))for(var ye=0;ye<x.length;ye++)k=x[ye],re=at+Xe(k,ye),P+=Ve(k,O,H,re,Z);else if(ye=B(x),typeof ye=="function")for(x=ye.call(x),ye=0;!(k=x.next()).done;)k=k.value,re=at+Xe(k,ye++),P+=Ve(k,O,H,re,Z);else if(re==="object"){if(typeof x.then=="function")return Ve(Rl(x),O,H,k,Z);throw O=String(x),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return P}function M(x,O,H){if(x==null)return x;var k=[],Z=0;return Ve(x,k,"","",function(re){return O.call(H,re,Z++)}),k}function q(x){if(x._status===-1){var O=x._result;O=O(),O.then(function(H){(x._status===0||x._status===-1)&&(x._status=1,x._result=H)},function(H){(x._status===0||x._status===-1)&&(x._status=2,x._result=H)}),x._status===-1&&(x._status=0,x._result=O)}if(x._status===1)return x._result.default;throw x._result}var $=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ge(){}return ee.Children={map:M,forEach:function(x,O,H){M(x,function(){O.apply(this,arguments)},H)},count:function(x){var O=0;return M(x,function(){O++}),O},toArray:function(x){return M(x,function(O){return O})||[]},only:function(x){if(!Ee(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ee.Component=G,ee.Fragment=d,ee.Profiler=p,ee.PureComponent=ue,ee.StrictMode=s,ee.Suspense=y,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(x){return F.H.useMemoCache(x)}},ee.cache=function(x){return function(){return x.apply(null,arguments)}},ee.cloneElement=function(x,O,H){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var k=X({},x.props),Z=x.key,re=void 0;if(O!=null)for(P in O.ref!==void 0&&(re=void 0),O.key!==void 0&&(Z=""+O.key),O)!Be.call(O,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&O.ref===void 0||(k[P]=O[P]);var P=arguments.length-2;if(P===1)k.children=H;else if(1<P){for(var at=Array(P),ye=0;ye<P;ye++)at[ye]=arguments[ye+2];k.children=at}return _e(x.type,Z,void 0,void 0,re,k)},ee.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:h,_context:x},x},ee.createElement=function(x,O,H){var k,Z={},re=null;if(O!=null)for(k in O.key!==void 0&&(re=""+O.key),O)Be.call(O,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(Z[k]=O[k]);var P=arguments.length-2;if(P===1)Z.children=H;else if(1<P){for(var at=Array(P),ye=0;ye<P;ye++)at[ye]=arguments[ye+2];Z.children=at}if(x&&x.defaultProps)for(k in P=x.defaultProps,P)Z[k]===void 0&&(Z[k]=P[k]);return _e(x,re,void 0,void 0,null,Z)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(x){return{$$typeof:w,render:x}},ee.isValidElement=Ee,ee.lazy=function(x){return{$$typeof:R,_payload:{_status:-1,_result:x},_init:q}},ee.memo=function(x,O){return{$$typeof:g,type:x,compare:O===void 0?null:O}},ee.startTransition=function(x){var O=F.T,H={};F.T=H;try{var k=x(),Z=F.S;Z!==null&&Z(H,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(ge,$)}catch(re){$(re)}finally{F.T=O}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(x){return F.H.use(x)},ee.useActionState=function(x,O,H){return F.H.useActionState(x,O,H)},ee.useCallback=function(x,O){return F.H.useCallback(x,O)},ee.useContext=function(x){return F.H.useContext(x)},ee.useDebugValue=function(){},ee.useDeferredValue=function(x,O){return F.H.useDeferredValue(x,O)},ee.useEffect=function(x,O,H){var k=F.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return k.useEffect(x,O)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(x,O,H){return F.H.useImperativeHandle(x,O,H)},ee.useInsertionEffect=function(x,O){return F.H.useInsertionEffect(x,O)},ee.useLayoutEffect=function(x,O){return F.H.useLayoutEffect(x,O)},ee.useMemo=function(x,O){return F.H.useMemo(x,O)},ee.useOptimistic=function(x,O){return F.H.useOptimistic(x,O)},ee.useReducer=function(x,O,H){return F.H.useReducer(x,O,H)},ee.useRef=function(x){return F.H.useRef(x)},ee.useState=function(x){return F.H.useState(x)},ee.useSyncExternalStore=function(x,O,H){return F.H.useSyncExternalStore(x,O,H)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.1",ee}var np;function ts(){return np||(np=1,Hc.exports=Bh()),Hc.exports}var T=ts();const Tl=Cp(T);var Lc={exports:{}},qn={},Yc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function Uh(){return ip||(ip=1,function(u){function o(M,q){var $=M.length;M.push(q);e:for(;0<$;){var ge=$-1>>>1,x=M[ge];if(0<p(x,q))M[ge]=q,M[$]=x,$=ge;else break e}}function d(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var q=M[0],$=M.pop();if($!==q){M[0]=$;e:for(var ge=0,x=M.length,O=x>>>1;ge<O;){var H=2*(ge+1)-1,k=M[H],Z=H+1,re=M[Z];if(0>p(k,$))Z<x&&0>p(re,k)?(M[ge]=re,M[Z]=$,ge=Z):(M[ge]=k,M[H]=$,ge=H);else if(Z<x&&0>p(re,$))M[ge]=re,M[Z]=$,ge=Z;else break e}}return q}function p(M,q){var $=M.sortIndex-q.sortIndex;return $!==0?$:M.id-q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var b=Date,w=b.now();u.unstable_now=function(){return b.now()-w}}var y=[],g=[],R=1,C=null,B=3,V=!1,X=!1,Y=!1,G=!1,U=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function je(M){for(var q=d(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=M)s(g),q.sortIndex=q.expirationTime,o(y,q);else break;q=d(g)}}function F(M){if(Y=!1,je(M),!X)if(d(y)!==null)X=!0,Be||(Be=!0,Xe());else{var q=d(g);q!==null&&Ve(F,q.startTime-M)}}var Be=!1,_e=-1,Ue=5,Ee=-1;function lt(){return G?!0:!(u.unstable_now()-Ee<Ue)}function ht(){if(G=!1,Be){var M=u.unstable_now();Ee=M;var q=!0;try{e:{X=!1,Y&&(Y=!1,ue(_e),_e=-1),V=!0;var $=B;try{t:{for(je(M),C=d(y);C!==null&&!(C.expirationTime>M&&lt());){var ge=C.callback;if(typeof ge=="function"){C.callback=null,B=C.priorityLevel;var x=ge(C.expirationTime<=M);if(M=u.unstable_now(),typeof x=="function"){C.callback=x,je(M),q=!0;break t}C===d(y)&&s(y),je(M)}else s(y);C=d(y)}if(C!==null)q=!0;else{var O=d(g);O!==null&&Ve(F,O.startTime-M),q=!1}}break e}finally{C=null,B=$,V=!1}q=void 0}}finally{q?Xe():Be=!1}}}var Xe;if(typeof I=="function")Xe=function(){I(ht)};else if(typeof MessageChannel<"u"){var Al=new MessageChannel,Rl=Al.port2;Al.port1.onmessage=ht,Xe=function(){Rl.postMessage(null)}}else Xe=function(){U(ht,0)};function Ve(M,q){_e=U(function(){M(u.unstable_now())},q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(M){M.callback=null},u.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<M?Math.floor(1e3/M):5},u.unstable_getCurrentPriorityLevel=function(){return B},u.unstable_next=function(M){switch(B){case 1:case 2:case 3:var q=3;break;default:q=B}var $=B;B=q;try{return M()}finally{B=$}},u.unstable_requestPaint=function(){G=!0},u.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=B;B=M;try{return q()}finally{B=$}},u.unstable_scheduleCallback=function(M,q,$){var ge=u.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,M){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,M={id:R++,callback:q,priorityLevel:M,startTime:$,expirationTime:x,sortIndex:-1},$>ge?(M.sortIndex=$,o(g,M),d(y)===null&&M===d(g)&&(Y?(ue(_e),_e=-1):Y=!0,Ve(F,$-ge))):(M.sortIndex=x,o(y,M),X||V||(X=!0,Be||(Be=!0,Xe()))),M},u.unstable_shouldYield=lt,u.unstable_wrapCallback=function(M){var q=B;return function(){var $=B;B=q;try{return M.apply(this,arguments)}finally{B=$}}}}(Gc)),Gc}var up;function kh(){return up||(up=1,Yc.exports=Uh()),Yc.exports}var Qc={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function qh(){if(rp)return Je;rp=1;var u=ts();function o(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)g+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(y,g,R){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:C==null?null:""+C,children:y,containerInfo:g,implementation:R}}var b=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Je.createPortal=function(y,g){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return h(y,g,null,R)},Je.flushSync=function(y){var g=b.T,R=s.p;try{if(b.T=null,s.p=2,y)return y()}finally{b.T=g,s.p=R,s.d.f()}},Je.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(y,g))},Je.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Je.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var R=g.as,C=w(R,g.crossOrigin),B=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;R==="style"?s.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:B,fetchPriority:V}):R==="script"&&s.d.X(y,{crossOrigin:C,integrity:B,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Je.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var R=w(g.as,g.crossOrigin);s.d.M(y,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(y)},Je.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var R=g.as,C=w(R,g.crossOrigin);s.d.L(y,R,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Je.preloadModule=function(y,g){if(typeof y=="string")if(g){var R=w(g.as,g.crossOrigin);s.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(y)},Je.requestFormReset=function(y){s.d.r(y)},Je.unstable_batchedUpdates=function(y,g){return y(g)},Je.useFormState=function(y,g,R){return b.H.useFormState(y,g,R)},Je.useFormStatus=function(){return b.H.useHostTransitionStatus()},Je.version="19.1.1",Je}var cp;function Hh(){if(cp)return Qc.exports;cp=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Qc.exports=qh(),Qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function Lh(){if(sp)return qn;sp=1;var u=kh(),o=ts(),d=Hh();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(h(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return w(n),e;if(i===a)return w(n),t;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,f=n.child;f;){if(f===l){c=!0,l=n,a=i;break}if(f===a){c=!0,a=n,l=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===l){c=!0,l=i,a=n;break}if(f===a){c=!0,a=i,l=n;break}f=f.sibling}if(!c)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,C=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),I=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),lt=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var Al=Symbol.for("react.client.reference");function Rl(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Al?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case F:return"Suspense";case Be:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case I:return(e.displayName||"Context")+".Provider";case ue:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _e:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}var Ve=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],x=-1;function O(e){return{current:e}}function H(e){0>x||(e.current=ge[x],ge[x]=null,x--)}function k(e,t){x++,ge[x]=e.current,e.current=t}var Z=O(null),re=O(null),P=O(null),at=O(null);function ye(e,t){switch(k(P,t),k(re,e),k(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Rd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Rd(t),e=Md(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(Z),k(Z,e)}function tl(){H(Z),H(re),H(P)}function zu(e){e.memoizedState!==null&&k(at,e);var t=Z.current,l=Md(t,e.type);t!==l&&(k(re,e),k(Z,l))}function Vn(e){re.current===e&&(H(Z),H(re)),at.current===e&&(H(at),_n._currentValue=$)}var Nu=Object.prototype.hasOwnProperty,Eu=u.unstable_scheduleCallback,wu=u.unstable_cancelCallback,f1=u.unstable_shouldYield,d1=u.unstable_requestPaint,Tt=u.unstable_now,p1=u.unstable_getCurrentPriorityLevel,rs=u.unstable_ImmediatePriority,cs=u.unstable_UserBlockingPriority,Zn=u.unstable_NormalPriority,h1=u.unstable_LowPriority,ss=u.unstable_IdlePriority,m1=u.log,g1=u.unstable_setDisableYieldValue,Ha=null,nt=null;function ll(e){if(typeof m1=="function"&&g1(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Ha,e)}catch{}}var it=Math.clz32?Math.clz32:y1,x1=Math.log,v1=Math.LN2;function y1(e){return e>>>=0,e===0?32:31-(x1(e)/v1|0)|0}var Kn=256,Jn=4194304;function Ml(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $n(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=Ml(a):(c&=f,c!==0?n=Ml(c):l||(l=f&~e,l!==0&&(n=Ml(l))))):(f=a&~i,f!==0?n=Ml(f):c!==0?n=Ml(c):l||(l=a&~e,l!==0&&(n=Ml(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function La(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function b1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function os(){var e=Kn;return Kn<<=1,(Kn&4194048)===0&&(Kn=256),e}function fs(){var e=Jn;return Jn<<=1,(Jn&62914560)===0&&(Jn=4194304),e}function Tu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ya(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function S1(e,t,l,a,n,i){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,m=e.expirationTimes,z=e.hiddenUpdates;for(l=c&~l;0<l;){var A=31-it(l),_=1<<A;f[A]=0,m[A]=-1;var N=z[A];if(N!==null)for(z[A]=null,A=0;A<N.length;A++){var E=N[A];E!==null&&(E.lane&=-536870913)}l&=~_}a!==0&&ds(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function ds(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&4194090}function ps(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-it(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Au(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ru(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:$d(e.type))}function j1(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var al=Math.random().toString(36).slice(2),Ze="__reactFiber$"+al,We="__reactProps$"+al,Wl="__reactContainer$"+al,Mu="__reactEvents$"+al,z1="__reactListeners$"+al,N1="__reactHandles$"+al,ms="__reactResources$"+al,Ga="__reactMarker$"+al;function Du(e){delete e[Ze],delete e[We],delete e[Mu],delete e[z1],delete e[N1]}function Fl(e){var t=e[Ze];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Wl]||l[Ze]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Cd(e);e!==null;){if(l=e[Ze])return l;e=Cd(e)}return t}e=l,l=e.parentNode}return null}function Pl(e){if(e=e[Ze]||e[Wl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Qa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Il(e){var t=e[ms];return t||(t=e[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[Ga]=!0}var gs=new Set,xs={};function Dl(e,t){ea(e,t),ea(e+"Capture",t)}function ea(e,t){for(xs[e]=t,e=0;e<t.length;e++)gs.add(t[e])}var E1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vs={},ys={};function w1(e){return Nu.call(ys,e)?!0:Nu.call(vs,e)?!1:E1.test(e)?ys[e]=!0:(vs[e]=!0,!1)}function Wn(e,t,l){if(w1(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Fn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function kt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}var _u,bs;function ta(e){if(_u===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);_u=t&&t[1]||"",bs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_u+e+bs}var Ou=!1;function Cu(e,t){if(!e||Ou)return"";Ou=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(E){var N=E}Reflect.construct(e,[],_)}else{try{_.call()}catch(E){N=E}e.call(_.prototype)}}else{try{throw Error()}catch(E){N=E}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(E){if(E&&N&&typeof E.stack=="string")return[E.stack,N.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var m=c.split(`
`),z=f.split(`
`);for(n=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(a===m.length||n===z.length)for(a=m.length-1,n=z.length-1;1<=a&&0<=n&&m[a]!==z[n];)n--;for(;1<=a&&0<=n;a--,n--)if(m[a]!==z[n]){if(a!==1||n!==1)do if(a--,n--,0>n||m[a]!==z[n]){var A=`
`+m[a].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=a&&0<=n);break}}}finally{Ou=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?ta(l):""}function T1(e){switch(e.tag){case 26:case 27:case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return Cu(e.type,!1);case 11:return Cu(e.type.render,!1);case 1:return Cu(e.type,!0);case 31:return ta("Activity");default:return""}}function Ss(e){try{var t="";do t+=T1(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A1(e){var t=js(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){e._valueTracker||(e._valueTracker=A1(e))}function zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=js(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function In(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var R1=/[\n"\\]/g;function gt(e){return e.replace(R1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bu(e,t,l,a,n,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+mt(t)):e.value!==""+mt(t)&&(e.value=""+mt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Uu(e,c,mt(t)):l!=null?Uu(e,c,mt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+mt(f):e.removeAttribute("name")}function Ns(e,t,l,a,n,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;l=l!=null?""+mt(l):"",t=t!=null?""+mt(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Uu(e,t,l){t==="number"&&In(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function la(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+mt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Es(e,t,l){if(t!=null&&(t=""+mt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+mt(l):""}function ws(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(s(92));if(Ve(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=mt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a)}function aa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var M1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ts(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||M1.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function As(e,t,l){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Ts(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Ts(e,i,t[i])}function ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ei(e){return _1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qu=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,ia=null;function Rs(e){var t=Pl(e);if(t&&(e=t.stateNode)){var l=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[We]||null;if(!n)throw Error(s(90));Bu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&zs(a)}break e;case"textarea":Es(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&la(e,!!l.multiple,t,!1)}}}var Lu=!1;function Ms(e,t,l){if(Lu)return e(t,l);Lu=!0;try{var a=e(t);return a}finally{if(Lu=!1,(na!==null||ia!==null)&&(Hi(),na&&(t=na,e=ia,ia=na=null,Rs(t),e)))for(t=0;t<e.length;t++)Rs(e[t])}}function Xa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[We]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(s(231,t,typeof l));return l}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=!1;if(qt)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{Yu=!1}var nl=null,Gu=null,ti=null;function Ds(){if(ti)return ti;var e,t=Gu,l=t.length,a,n="value"in nl?nl.value:nl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[i-a];a++);return ti=n.slice(e,1<a?1-a:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function _s(){return!1}function Fe(e){function t(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ai:_s,this.isPropagationStopped=_s,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var _l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=Fe(_l),Za=R({},_l,{view:0,detail:0}),O1=Fe(Za),Qu,Xu,Ka,ii=R({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ka&&(Ka&&e.type==="mousemove"?(Qu=e.screenX-Ka.screenX,Xu=e.screenY-Ka.screenY):Xu=Qu=0,Ka=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Xu}}),Os=Fe(ii),C1=R({},ii,{dataTransfer:0}),B1=Fe(C1),U1=R({},Za,{relatedTarget:0}),Vu=Fe(U1),k1=R({},_l,{animationName:0,elapsedTime:0,pseudoElement:0}),q1=Fe(k1),H1=R({},_l,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L1=Fe(H1),Y1=R({},_l,{data:0}),Cs=Fe(Y1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X1[e])?!!t[e]:!1}function Zu(){return V1}var Z1=R({},Za,{key:function(e){if(e.key){var t=G1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K1=Fe(Z1),J1=R({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=Fe(J1),$1=R({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),W1=Fe($1),F1=R({},_l,{propertyName:0,elapsedTime:0,pseudoElement:0}),P1=Fe(F1),I1=R({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=Fe(I1),t0=R({},_l,{newState:0,oldState:0}),l0=Fe(t0),a0=[9,13,27,32],Ku=qt&&"CompositionEvent"in window,Ja=null;qt&&"documentMode"in document&&(Ja=document.documentMode);var n0=qt&&"TextEvent"in window&&!Ja,Us=qt&&(!Ku||Ja&&8<Ja&&11>=Ja),ks=" ",qs=!1;function Hs(e,t){switch(e){case"keyup":return a0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ls(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ua=!1;function i0(e,t){switch(e){case"compositionend":return Ls(t);case"keypress":return t.which!==32?null:(qs=!0,ks);case"textInput":return e=t.data,e===ks&&qs?null:e;default:return null}}function u0(e,t){if(ua)return e==="compositionend"||!Ku&&Hs(e,t)?(e=Ds(),ti=Gu=nl=null,ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r0[e.type]:t==="textarea"}function Gs(e,t,l,a){na?ia?ia.push(a):ia=[a]:na=a,t=Vi(t,"onChange"),0<t.length&&(l=new ni("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var $a=null,Wa=null;function c0(e){Nd(e,0)}function ui(e){var t=Qa(e);if(zs(t))return e}function Qs(e,t){if(e==="change")return t}var Xs=!1;if(qt){var Ju;if(qt){var $u="oninput"in document;if(!$u){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),$u=typeof Vs.oninput=="function"}Ju=$u}else Ju=!1;Xs=Ju&&(!document.documentMode||9<document.documentMode)}function Zs(){$a&&($a.detachEvent("onpropertychange",Ks),Wa=$a=null)}function Ks(e){if(e.propertyName==="value"&&ui(Wa)){var t=[];Gs(t,Wa,e,Hu(e)),Ms(c0,t)}}function s0(e,t,l){e==="focusin"?(Zs(),$a=t,Wa=l,$a.attachEvent("onpropertychange",Ks)):e==="focusout"&&Zs()}function o0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(Wa)}function f0(e,t){if(e==="click")return ui(t)}function d0(e,t){if(e==="input"||e==="change")return ui(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:p0;function Fa(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Nu.call(t,n)||!ut(e[n],t[n]))return!1}return!0}function Js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,t){var l=Js(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Js(l)}}function Ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=In(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=In(e.document)}return t}function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var h0=qt&&"documentMode"in document&&11>=document.documentMode,ra=null,Fu=null,Pa=null,Pu=!1;function Ps(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Pu||ra==null||ra!==In(a)||(a=ra,"selectionStart"in a&&Wu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Pa&&Fa(Pa,a)||(Pa=a,a=Vi(Fu,"onSelect"),0<a.length&&(t=new ni("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ra)))}function Ol(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ca={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionrun:Ol("Transition","TransitionRun"),transitionstart:Ol("Transition","TransitionStart"),transitioncancel:Ol("Transition","TransitionCancel"),transitionend:Ol("Transition","TransitionEnd")},Iu={},Is={};qt&&(Is=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function Cl(e){if(Iu[e])return Iu[e];if(!ca[e])return e;var t=ca[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Is)return Iu[e]=t[l];return e}var eo=Cl("animationend"),to=Cl("animationiteration"),lo=Cl("animationstart"),m0=Cl("transitionrun"),g0=Cl("transitionstart"),x0=Cl("transitioncancel"),ao=Cl("transitionend"),no=new Map,er="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");er.push("scrollEnd");function Nt(e,t){no.set(e,t),Dl(t,[e])}var io=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var l=io.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ss(t)},io.set(e,t),t)}return{value:e,source:t,stack:Ss(t)}}var vt=[],sa=0,tr=0;function ri(){for(var e=sa,t=tr=sa=0;t<e;){var l=vt[t];vt[t++]=null;var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&uo(l,n,i)}}function ci(e,t,l,a){vt[sa++]=e,vt[sa++]=t,vt[sa++]=l,vt[sa++]=a,tr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function lr(e,t,l,a){return ci(e,t,l,a),si(e)}function oa(e,t){return ci(e,null,null,t),si(e)}function uo(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-it(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function si(e){if(50<Nn)throw Nn=0,cc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fa={};function v0(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,l,a){return new v0(e,t,l,a)}function ar(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var l=e.alternate;return l===null?(l=rt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function ro(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,l,a,n,i){var c=0;if(a=e,typeof e=="function")ar(e)&&(c=1);else if(typeof e=="string")c=bh(e,l,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=rt(31,l,t,n),e.elementType=Ee,e.lanes=i,e;case X:return Bl(l.children,n,i,t);case Y:c=8,n|=24;break;case G:return e=rt(12,l,t,n|2),e.elementType=G,e.lanes=i,e;case F:return e=rt(13,l,t,n),e.elementType=F,e.lanes=i,e;case Be:return e=rt(19,l,t,n),e.elementType=Be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case I:c=10;break e;case ue:c=9;break e;case je:c=11;break e;case _e:c=14;break e;case Ue:c=16,a=null;break e}c=29,l=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=rt(c,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Bl(e,t,l,a){return e=rt(7,e,a,t),e.lanes=l,e}function nr(e,t,l){return e=rt(6,e,null,t),e.lanes=l,e}function ir(e,t,l){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var da=[],pa=0,fi=null,di=0,yt=[],bt=0,Ul=null,Lt=1,Yt="";function kl(e,t){da[pa++]=di,da[pa++]=fi,fi=e,di=t}function co(e,t,l){yt[bt++]=Lt,yt[bt++]=Yt,yt[bt++]=Ul,Ul=e;var a=Lt;e=Yt;var n=32-it(a)-1;a&=~(1<<n),l+=1;var i=32-it(t)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,Lt=1<<32-it(t)+n|l<<n|a,Yt=i+e}else Lt=1<<i|l<<n|a,Yt=e}function ur(e){e.return!==null&&(kl(e,1),co(e,1,0))}function rr(e){for(;e===fi;)fi=da[--pa],da[pa]=null,di=da[--pa],da[pa]=null;for(;e===Ul;)Ul=yt[--bt],yt[bt]=null,Yt=yt[--bt],yt[bt]=null,Lt=yt[--bt],yt[bt]=null}var $e=null,we=null,se=!1,ql=null,At=!1,cr=Error(s(519));function Hl(e){var t=Error(s(418,""));throw tn(xt(t,e)),cr}function so(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ze]=e,t[We]=a,l){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(l=0;l<wn.length;l++)ne(wn[l],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Ns(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Pn(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),ws(t,a.value,a.defaultValue,a.children),Pn(t)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Ad(t.textContent,l)?(a.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),a.onScroll!=null&&ne("scroll",t),a.onScrollEnd!=null&&ne("scrollend",t),a.onClick!=null&&(t.onclick=Zi),t=!0):t=!1,t||Hl(e)}function oo(e){for($e=e.return;$e;)switch($e.tag){case 5:case 13:At=!1;return;case 27:case 3:At=!0;return;default:$e=$e.return}}function Ia(e){if(e!==$e)return!1;if(!se)return oo(e),se=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Nc(e.type,e.memoizedProps)),l=!l),l&&we&&Hl(e),oo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){we=wt(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}we=null}}else t===27?(t=we,bl(e.type)?(e=Ac,Ac=null,we=e):we=t):we=$e?wt(e.stateNode.nextSibling):null;return!0}function en(){we=$e=null,se=!1}function fo(){var e=ql;return e!==null&&(et===null?et=e:et.push.apply(et,e),ql=null),e}function tn(e){ql===null?ql=[e]:ql.push(e)}var sr=O(null),Ll=null,Gt=null;function il(e,t,l){k(sr,t._currentValue),t._currentValue=l}function Qt(e){e._currentValue=sr.current,H(sr)}function or(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function fr(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var m=0;m<t.length;m++)if(f.context===t[m]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),or(i.return,l,e),a||(c=null);break e}i=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(s(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),or(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function ln(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var f=n.type;ut(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===at.current){if(c=n.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(_n):e=[_n])}n=n.return}e!==null&&fr(t,e,l,a),t.flags|=262144}function pi(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yl(e){Ll=e,Gt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return po(Ll,e)}function hi(e,t){return Ll===null&&Yl(e),po(e,t)}function po(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Gt===null){if(e===null)throw Error(s(308));Gt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gt=Gt.next=t;return l}var y0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},b0=u.unstable_scheduleCallback,S0=u.unstable_NormalPriority,Oe={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dr(){return{controller:new y0,data:new Map,refCount:0}}function an(e){e.refCount--,e.refCount===0&&b0(S0,function(){e.controller.abort()})}var nn=null,pr=0,ha=0,ma=null;function j0(e,t){if(nn===null){var l=nn=[];pr=0,ha=mc(),ma={status:"pending",value:void 0,then:function(a){l.push(a)}}}return pr++,t.then(ho,ho),t}function ho(){if(--pr===0&&nn!==null){ma!==null&&(ma.status="fulfilled");var e=nn;nn=null,ha=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function z0(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var mo=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&j0(e,t),mo!==null&&mo(e,t)};var Gl=O(null);function hr(){var e=Gl.current;return e!==null?e:ve.pooledCache}function mi(e,t){t===null?k(Gl,Gl.current):k(Gl,t.pool)}function go(){var e=hr();return e===null?null:{parent:Oe._currentValue,pool:e}}var un=Error(s(460)),xo=Error(s(474)),gi=Error(s(542)),mr={then:function(){}};function vo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xi(){}function yo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(xi,xi),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,So(e),e;default:if(typeof t.status=="string")t.then(xi,xi);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,So(e),e}throw rn=t,un}}var rn=null;function bo(){if(rn===null)throw Error(s(459));var e=rn;return rn=null,e}function So(e){if(e===un||e===gi)throw Error(s(483))}var ul=!1;function gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=si(e),uo(e,null,l),t}return ci(e,a,t,l),si(e)}function cn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ps(e,l)}}function vr(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var yr=!1;function sn(){if(yr){var e=ma;if(e!==null)throw e}}function on(e,t,l,a){yr=!1;var n=e.updateQueue;ul=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var m=f,z=m.next;m.next=null,c===null?i=z:c.next=z,c=m;var A=e.alternate;A!==null&&(A=A.updateQueue,f=A.lastBaseUpdate,f!==c&&(f===null?A.firstBaseUpdate=z:f.next=z,A.lastBaseUpdate=m))}if(i!==null){var _=n.baseState;c=0,A=z=m=null,f=i;do{var N=f.lane&-536870913,E=N!==f.lane;if(E?(ie&N)===N:(a&N)===N){N!==0&&N===ha&&(yr=!0),A!==null&&(A=A.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var W=e,K=f;N=t;var me=l;switch(K.tag){case 1:if(W=K.payload,typeof W=="function"){_=W.call(me,_,N);break e}_=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=K.payload,N=typeof W=="function"?W.call(me,_,N):W,N==null)break e;_=R({},_,N);break e;case 2:ul=!0}}N=f.callback,N!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[N]:E.push(N))}else E={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},A===null?(z=A=E,m=_):A=A.next=E,c|=N;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;E=f,f=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);A===null&&(m=_),n.baseState=m,n.firstBaseUpdate=z,n.lastBaseUpdate=A,i===null&&(n.shared.lanes=0),gl|=c,e.lanes=c,e.memoizedState=_}}function jo(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function zo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)jo(l[e],t)}var ga=O(null),vi=O(0);function No(e,t){e=Wt,k(vi,e),k(ga,t),Wt=e|t.baseLanes}function br(){k(vi,Wt),k(ga,ga.current)}function Sr(){Wt=vi.current,H(ga),H(vi)}var sl=0,te=null,pe=null,Me=null,yi=!1,xa=!1,Ql=!1,bi=0,fn=0,va=null,N0=0;function Ae(){throw Error(s(321))}function jr(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ut(e[l],t[l]))return!1;return!0}function zr(e,t,l,a,n,i){return sl=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?cf:sf,Ql=!1,i=l(a,n),Ql=!1,xa&&(i=wo(t,l,a,n)),Eo(e),i}function Eo(e){M.H=wi;var t=pe!==null&&pe.next!==null;if(sl=0,Me=pe=te=null,yi=!1,fn=0,va=null,t)throw Error(s(300));e===null||qe||(e=e.dependencies,e!==null&&pi(e)&&(qe=!0))}function wo(e,t,l,a){te=e;var n=0;do{if(xa&&(va=null),fn=0,xa=!1,25<=n)throw Error(s(301));if(n+=1,Me=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=D0,i=t(l,a)}while(xa);return i}function E0(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?dn(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(te.flags|=1024),t}function Nr(){var e=bi!==0;return bi=0,e}function Er(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function wr(e){if(yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yi=!1}sl=0,Me=pe=te=null,xa=!1,fn=bi=0,va=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?te.memoizedState=Me=e:Me=Me.next=e,Me}function De(){if(pe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Me===null?te.memoizedState:Me.next;if(t!==null)Me=t,pe=e;else{if(e===null)throw te.alternate===null?Error(s(467)):Error(s(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Me===null?te.memoizedState=Me=e:Me=Me.next=e}return Me}function Tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dn(e){var t=fn;return fn+=1,va===null&&(va=[]),e=yo(va,e,t),t=te,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?cf:sf),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dn(e);if(e.$$typeof===I)return Ke(e)}throw Error(s(438,String(e)))}function Ar(e){var t=null,l=te.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Tr(),te.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=lt;return t.index++,l}function Xt(e,t){return typeof t=="function"?t(e):t}function ji(e){var t=De();return Rr(t,pe,e)}function Rr(e,t,l){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=c=null,m=null,z=t,A=!1;do{var _=z.lane&-536870913;if(_!==z.lane?(ie&_)===_:(sl&_)===_){var N=z.revertLane;if(N===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),_===ha&&(A=!0);else if((sl&N)===N){z=z.next,N===ha&&(A=!0);continue}else _={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(f=m=_,c=i):m=m.next=_,te.lanes|=N,gl|=N;_=z.action,Ql&&l(i,_),i=z.hasEagerState?z.eagerState:l(i,_)}else N={lane:_,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(f=m=N,c=i):m=m.next=N,te.lanes|=_,gl|=_;z=z.next}while(z!==null&&z!==t);if(m===null?c=i:m.next=f,!ut(i,e.memoizedState)&&(qe=!0,A&&(l=ma,l!==null)))throw l;e.memoizedState=i,e.baseState=c,e.baseQueue=m,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Mr(e){var t=De(),l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ut(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function To(e,t,l){var a=te,n=De(),i=se;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=t();var c=!ut((pe||n).memoizedState,l);c&&(n.memoizedState=l,qe=!0),n=n.queue;var f=Mo.bind(null,a,n,e);if(pn(2048,8,f,[e]),n.getSnapshot!==t||c||Me!==null&&Me.memoizedState.tag&1){if(a.flags|=2048,ya(9,zi(),Ro.bind(null,a,n,l,t),null),ve===null)throw Error(s(349));i||(sl&124)!==0||Ao(a,t,l)}return l}function Ao(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=te.updateQueue,t===null?(t=Tr(),te.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Ro(e,t,l,a){t.value=l,t.getSnapshot=a,Do(t)&&_o(e)}function Mo(e,t,l){return l(function(){Do(t)&&_o(e)})}function Do(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ut(e,l)}catch{return!0}}function _o(e){var t=oa(e,2);t!==null&&dt(t,e,2)}function Dr(e){var t=Pe();if(typeof e=="function"){var l=e;if(e=l(),Ql){ll(!0);try{l()}finally{ll(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Oo(e,t,l,a){return e.baseState=l,Rr(e,pe,typeof a=="function"?a:Xt)}function w0(e,t,l,a,n){if(Ei(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};M.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Co(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Co(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=M.T,c={};M.T=c;try{var f=l(n,a),m=M.S;m!==null&&m(c,f),Bo(e,t,f)}catch(z){_r(e,t,z)}finally{M.T=i}}else try{i=l(n,a),Bo(e,t,i)}catch(z){_r(e,t,z)}}function Bo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Uo(e,t,a)},function(a){return _r(e,t,a)}):Uo(e,t,l)}function Uo(e,t,l){t.status="fulfilled",t.value=l,ko(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Co(e,l)))}function _r(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,ko(t),t=t.next;while(t!==a)}e.action=null}function ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qo(e,t){return t}function Ho(e,t){if(se){var l=ve.formState;if(l!==null){e:{var a=te;if(se){if(we){t:{for(var n=we,i=At;n.nodeType!==8;){if(!i){n=null;break t}if(n=wt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){we=wt(n.nextSibling),a=n.data==="F!";break e}}Hl(a)}a=!1}a&&(t=l[0])}}return l=Pe(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},l.queue=a,l=nf.bind(null,te,a),a.dispatch=l,a=Dr(!1),i=kr.bind(null,te,!1,a.queue),a=Pe(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=w0.bind(null,te,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Lo(e){var t=De();return Yo(t,pe,e)}function Yo(e,t,l){if(t=Rr(e,t,qo)[0],e=ji(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=dn(t)}catch(c){throw c===un?gi:c}else a=t;t=De();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(te.flags|=2048,ya(9,zi(),T0.bind(null,n,l),null)),[a,i,e]}function T0(e,t){e.action=t}function Go(e){var t=De(),l=pe;if(l!==null)return Yo(t,l,e);De(),t=t.memoizedState,l=De();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ya(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=te.updateQueue,t===null&&(t=Tr(),te.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function zi(){return{destroy:void 0,resource:void 0}}function Qo(){return De().memoizedState}function Ni(e,t,l,a){var n=Pe();a=a===void 0?null:a,te.flags|=e,n.memoizedState=ya(1|t,zi(),l,a)}function pn(e,t,l,a){var n=De();a=a===void 0?null:a;var i=n.memoizedState.inst;pe!==null&&a!==null&&jr(a,pe.memoizedState.deps)?n.memoizedState=ya(t,i,l,a):(te.flags|=e,n.memoizedState=ya(1|t,i,l,a))}function Xo(e,t){Ni(8390656,8,e,t)}function Vo(e,t){pn(2048,8,e,t)}function Zo(e,t){return pn(4,2,e,t)}function Ko(e,t){return pn(4,4,e,t)}function Jo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $o(e,t,l){l=l!=null?l.concat([e]):null,pn(4,4,Jo.bind(null,t,e),l)}function Or(){}function Wo(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&jr(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Fo(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&jr(t,a[1]))return a[0];if(a=e(),Ql){ll(!0);try{e()}finally{ll(!1)}}return l.memoizedState=[a,t],a}function Cr(e,t,l){return l===void 0||(sl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=td(),te.lanes|=e,gl|=e,l)}function Po(e,t,l,a){return ut(l,t)?l:ga.current!==null?(e=Cr(e,l,a),ut(e,t)||(qe=!0),e):(sl&42)===0?(qe=!0,e.memoizedState=l):(e=td(),te.lanes|=e,gl|=e,t)}function Io(e,t,l,a,n){var i=q.p;q.p=i!==0&&8>i?i:8;var c=M.T,f={};M.T=f,kr(e,!1,t,l);try{var m=n(),z=M.S;if(z!==null&&z(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var A=z0(m,a);hn(e,t,A,ft(e))}else hn(e,t,a,ft(e))}catch(_){hn(e,t,{then:function(){},status:"rejected",reason:_},ft())}finally{q.p=i,M.T=c}}function A0(){}function Br(e,t,l,a){if(e.tag!==5)throw Error(s(476));var n=ef(e).queue;Io(e,n,t,$,l===null?A0:function(){return tf(e),l(a)})}function ef(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:$},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function tf(e){var t=ef(e).next.queue;hn(e,t,{},ft())}function Ur(){return Ke(_n)}function lf(){return De().memoizedState}function af(){return De().memoizedState}function R0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ft();e=rl(l);var a=cl(t,e,l);a!==null&&(dt(a,t,l),cn(a,t,l)),t={cache:dr()},e.payload=t;return}t=t.return}}function M0(e,t,l){var a=ft();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)?uf(t,l):(l=lr(e,t,l,a),l!==null&&(dt(l,e,a),rf(l,t,a)))}function nf(e,t,l){var a=ft();hn(e,t,l,a)}function hn(e,t,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))uf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,l);if(n.hasEagerState=!0,n.eagerState=f,ut(f,c))return ci(e,t,n,0),ve===null&&ri(),!1}catch{}finally{}if(l=lr(e,t,n,a),l!==null)return dt(l,e,a),rf(l,t,a),!0}return!1}function kr(e,t,l,a){if(a={lane:2,revertLane:mc(),action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(s(479))}else t=lr(e,l,a,2),t!==null&&dt(t,e,2)}function Ei(e){var t=e.alternate;return e===te||t!==null&&t===te}function uf(e,t){xa=yi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function rf(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ps(e,l)}}var wi={readContext:Ke,use:Si,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae},cf={readContext:Ke,use:Si,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Xo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Ni(4194308,4,Jo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){Ni(4,2,e,t)},useMemo:function(e,t){var l=Pe();t=t===void 0?null:t;var a=e();if(Ql){ll(!0);try{e()}finally{ll(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Pe();if(l!==void 0){var n=l(t);if(Ql){ll(!0);try{l(t)}finally{ll(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=M0.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=Dr(e);var t=e.queue,l=nf.bind(null,te,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Or,useDeferredValue:function(e,t){var l=Pe();return Cr(l,e,t)},useTransition:function(){var e=Dr(!1);return e=Io.bind(null,te,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=te,n=Pe();if(se){if(l===void 0)throw Error(s(407));l=l()}else{if(l=t(),ve===null)throw Error(s(349));(ie&124)!==0||Ao(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Xo(Mo.bind(null,a,i,e),[e]),a.flags|=2048,ya(9,zi(),Ro.bind(null,a,i,l,t),null),l},useId:function(){var e=Pe(),t=ve.identifierPrefix;if(se){var l=Yt,a=Lt;l=(a&~(1<<32-it(a)-1)).toString(32)+l,t="«"+t+"R"+l,l=bi++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=N0++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ur,useFormState:Ho,useActionState:Ho,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=kr.bind(null,te,!0,l),l.dispatch=t,[e,t]},useMemoCache:Ar,useCacheRefresh:function(){return Pe().memoizedState=R0.bind(null,te)}},sf={readContext:Ke,use:Si,useCallback:Wo,useContext:Ke,useEffect:Vo,useImperativeHandle:$o,useInsertionEffect:Zo,useLayoutEffect:Ko,useMemo:Fo,useReducer:ji,useRef:Qo,useState:function(){return ji(Xt)},useDebugValue:Or,useDeferredValue:function(e,t){var l=De();return Po(l,pe.memoizedState,e,t)},useTransition:function(){var e=ji(Xt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:To,useId:lf,useHostTransitionStatus:Ur,useFormState:Lo,useActionState:Lo,useOptimistic:function(e,t){var l=De();return Oo(l,pe,e,t)},useMemoCache:Ar,useCacheRefresh:af},D0={readContext:Ke,use:Si,useCallback:Wo,useContext:Ke,useEffect:Vo,useImperativeHandle:$o,useInsertionEffect:Zo,useLayoutEffect:Ko,useMemo:Fo,useReducer:Mr,useRef:Qo,useState:function(){return Mr(Xt)},useDebugValue:Or,useDeferredValue:function(e,t){var l=De();return pe===null?Cr(l,e,t):Po(l,pe.memoizedState,e,t)},useTransition:function(){var e=Mr(Xt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:To,useId:lf,useHostTransitionStatus:Ur,useFormState:Go,useActionState:Go,useOptimistic:function(e,t){var l=De();return pe!==null?Oo(l,pe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Ar,useCacheRefresh:af},ba=null,mn=0;function Ti(e){var t=mn;return mn+=1,ba===null&&(ba=[]),yo(ba,e,t)}function gn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ai(e,t){throw t.$$typeof===C?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function of(e){var t=e._init;return t(e._payload)}function ff(e){function t(S,v){if(e){var j=S.deletions;j===null?(S.deletions=[v],S.flags|=16):j.push(v)}}function l(S,v){if(!e)return null;for(;v!==null;)t(S,v),v=v.sibling;return null}function a(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function n(S,v){return S=Ht(S,v),S.index=0,S.sibling=null,S}function i(S,v,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<v?(S.flags|=67108866,v):j):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function c(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function f(S,v,j,D){return v===null||v.tag!==6?(v=nr(j,S.mode,D),v.return=S,v):(v=n(v,j),v.return=S,v)}function m(S,v,j,D){var L=j.type;return L===X?A(S,v,j.props.children,D,j.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&of(L)===v.type)?(v=n(v,j.props),gn(v,j),v.return=S,v):(v=oi(j.type,j.key,j.props,null,S.mode,D),gn(v,j),v.return=S,v)}function z(S,v,j,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==j.containerInfo||v.stateNode.implementation!==j.implementation?(v=ir(j,S.mode,D),v.return=S,v):(v=n(v,j.children||[]),v.return=S,v)}function A(S,v,j,D,L){return v===null||v.tag!==7?(v=Bl(j,S.mode,D,L),v.return=S,v):(v=n(v,j),v.return=S,v)}function _(S,v,j){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=nr(""+v,S.mode,j),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case B:return j=oi(v.type,v.key,v.props,null,S.mode,j),gn(j,v),j.return=S,j;case V:return v=ir(v,S.mode,j),v.return=S,v;case Ue:var D=v._init;return v=D(v._payload),_(S,v,j)}if(Ve(v)||Xe(v))return v=Bl(v,S.mode,j,null),v.return=S,v;if(typeof v.then=="function")return _(S,Ti(v),j);if(v.$$typeof===I)return _(S,hi(S,v),j);Ai(S,v)}return null}function N(S,v,j,D){var L=v!==null?v.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return L!==null?null:f(S,v,""+j,D);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case B:return j.key===L?m(S,v,j,D):null;case V:return j.key===L?z(S,v,j,D):null;case Ue:return L=j._init,j=L(j._payload),N(S,v,j,D)}if(Ve(j)||Xe(j))return L!==null?null:A(S,v,j,D,null);if(typeof j.then=="function")return N(S,v,Ti(j),D);if(j.$$typeof===I)return N(S,v,hi(S,j),D);Ai(S,j)}return null}function E(S,v,j,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return S=S.get(j)||null,f(v,S,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case B:return S=S.get(D.key===null?j:D.key)||null,m(v,S,D,L);case V:return S=S.get(D.key===null?j:D.key)||null,z(v,S,D,L);case Ue:var le=D._init;return D=le(D._payload),E(S,v,j,D,L)}if(Ve(D)||Xe(D))return S=S.get(j)||null,A(v,S,D,L,null);if(typeof D.then=="function")return E(S,v,j,Ti(D),L);if(D.$$typeof===I)return E(S,v,j,hi(v,D),L);Ai(v,D)}return null}function W(S,v,j,D){for(var L=null,le=null,Q=v,J=v=0,Le=null;Q!==null&&J<j.length;J++){Q.index>J?(Le=Q,Q=null):Le=Q.sibling;var ce=N(S,Q,j[J],D);if(ce===null){Q===null&&(Q=Le);break}e&&Q&&ce.alternate===null&&t(S,Q),v=i(ce,v,J),le===null?L=ce:le.sibling=ce,le=ce,Q=Le}if(J===j.length)return l(S,Q),se&&kl(S,J),L;if(Q===null){for(;J<j.length;J++)Q=_(S,j[J],D),Q!==null&&(v=i(Q,v,J),le===null?L=Q:le.sibling=Q,le=Q);return se&&kl(S,J),L}for(Q=a(Q);J<j.length;J++)Le=E(Q,S,J,j[J],D),Le!==null&&(e&&Le.alternate!==null&&Q.delete(Le.key===null?J:Le.key),v=i(Le,v,J),le===null?L=Le:le.sibling=Le,le=Le);return e&&Q.forEach(function(El){return t(S,El)}),se&&kl(S,J),L}function K(S,v,j,D){if(j==null)throw Error(s(151));for(var L=null,le=null,Q=v,J=v=0,Le=null,ce=j.next();Q!==null&&!ce.done;J++,ce=j.next()){Q.index>J?(Le=Q,Q=null):Le=Q.sibling;var El=N(S,Q,ce.value,D);if(El===null){Q===null&&(Q=Le);break}e&&Q&&El.alternate===null&&t(S,Q),v=i(El,v,J),le===null?L=El:le.sibling=El,le=El,Q=Le}if(ce.done)return l(S,Q),se&&kl(S,J),L;if(Q===null){for(;!ce.done;J++,ce=j.next())ce=_(S,ce.value,D),ce!==null&&(v=i(ce,v,J),le===null?L=ce:le.sibling=ce,le=ce);return se&&kl(S,J),L}for(Q=a(Q);!ce.done;J++,ce=j.next())ce=E(Q,S,J,ce.value,D),ce!==null&&(e&&ce.alternate!==null&&Q.delete(ce.key===null?J:ce.key),v=i(ce,v,J),le===null?L=ce:le.sibling=ce,le=ce);return e&&Q.forEach(function(_h){return t(S,_h)}),se&&kl(S,J),L}function me(S,v,j,D){if(typeof j=="object"&&j!==null&&j.type===X&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case B:e:{for(var L=j.key;v!==null;){if(v.key===L){if(L=j.type,L===X){if(v.tag===7){l(S,v.sibling),D=n(v,j.props.children),D.return=S,S=D;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&of(L)===v.type){l(S,v.sibling),D=n(v,j.props),gn(D,j),D.return=S,S=D;break e}l(S,v);break}else t(S,v);v=v.sibling}j.type===X?(D=Bl(j.props.children,S.mode,D,j.key),D.return=S,S=D):(D=oi(j.type,j.key,j.props,null,S.mode,D),gn(D,j),D.return=S,S=D)}return c(S);case V:e:{for(L=j.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===j.containerInfo&&v.stateNode.implementation===j.implementation){l(S,v.sibling),D=n(v,j.children||[]),D.return=S,S=D;break e}else{l(S,v);break}else t(S,v);v=v.sibling}D=ir(j,S.mode,D),D.return=S,S=D}return c(S);case Ue:return L=j._init,j=L(j._payload),me(S,v,j,D)}if(Ve(j))return W(S,v,j,D);if(Xe(j)){if(L=Xe(j),typeof L!="function")throw Error(s(150));return j=L.call(j),K(S,v,j,D)}if(typeof j.then=="function")return me(S,v,Ti(j),D);if(j.$$typeof===I)return me(S,v,hi(S,j),D);Ai(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,v!==null&&v.tag===6?(l(S,v.sibling),D=n(v,j),D.return=S,S=D):(l(S,v),D=nr(j,S.mode,D),D.return=S,S=D),c(S)):l(S,v)}return function(S,v,j,D){try{mn=0;var L=me(S,v,j,D);return ba=null,L}catch(Q){if(Q===un||Q===gi)throw Q;var le=rt(29,Q,null,S.mode);return le.lanes=D,le.return=S,le}finally{}}}var Sa=ff(!0),df=ff(!1),St=O(null),Rt=null;function ol(e){var t=e.alternate;k(Ce,Ce.current&1),k(St,e),Rt===null&&(t===null||ga.current!==null||t.memoizedState!==null)&&(Rt=e)}function pf(e){if(e.tag===22){if(k(Ce,Ce.current),k(St,e),Rt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Rt=e)}}else fl()}function fl(){k(Ce,Ce.current),k(St,St.current)}function Vt(e){H(St),Rt===e&&(Rt=null),H(Ce)}var Ce=O(0);function Ri(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Tc(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function qr(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:R({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Hr={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ft(),n=rl(a);n.payload=t,l!=null&&(n.callback=l),t=cl(e,n,a),t!==null&&(dt(t,e,a),cn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ft(),n=rl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=cl(e,n,a),t!==null&&(dt(t,e,a),cn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ft(),a=rl(l);a.tag=2,t!=null&&(a.callback=t),t=cl(e,a,l),t!==null&&(dt(t,e,l),cn(t,e,l))}};function hf(e,t,l,a,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!Fa(l,a)||!Fa(n,i):!0}function mf(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Hr.enqueueReplaceState(t,t.state,null)}function Xl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=R({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}var Mi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function gf(e){Mi(e)}function xf(e){console.error(e)}function vf(e){Mi(e)}function Di(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function yf(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Lr(e,t,l){return l=rl(l),l.tag=3,l.payload={element:null},l.callback=function(){Di(e,t)},l}function bf(e){return e=rl(e),e.tag=3,e}function Sf(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){yf(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){yf(t,l,a),typeof n!="function"&&(xl===null?xl=new Set([this]):xl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function _0(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ln(t,l,n,!0),l=St.current,l!==null){switch(l.tag){case 13:return Rt===null?oc():l.alternate===null&&Te===0&&(Te=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===mr?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),dc(e,a,n)),!1;case 22:return l.flags|=65536,a===mr?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),dc(e,a,n)),!1}throw Error(s(435,l.tag))}return dc(e,a,n),oc(),!1}if(se)return t=St.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==cr&&(e=Error(s(422),{cause:a}),tn(xt(e,l)))):(a!==cr&&(t=Error(s(423),{cause:a}),tn(xt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=xt(a,l),n=Lr(e.stateNode,a,n),vr(e,n),Te!==4&&(Te=2)),!1;var i=Error(s(520),{cause:a});if(i=xt(i,l),zn===null?zn=[i]:zn.push(i),Te!==4&&(Te=2),t===null)return!0;a=xt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Lr(l.stateNode,a,e),vr(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(xl===null||!xl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=bf(n),Sf(n,e,l,a),vr(l,n),!1}l=l.return}while(l!==null);return!1}var jf=Error(s(461)),qe=!1;function Ye(e,t,l,a){t.child=e===null?df(t,null,l,a):Sa(t,e.child,l,a)}function zf(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return Yl(t),a=zr(e,t,l,c,i,n),f=Nr(),e!==null&&!qe?(Er(e,t,n),Zt(e,t,n)):(se&&f&&ur(t),t.flags|=1,Ye(e,t,a,n),t.child)}function Nf(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!ar(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Ef(e,t,i,a,n)):(e=oi(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Jr(e,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:Fa,l(c,a)&&e.ref===t.ref)return Zt(e,t,n)}return t.flags|=1,e=Ht(i,a),e.ref=t.ref,e.return=t,t.child=e}function Ef(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Fa(i,a)&&e.ref===t.ref)if(qe=!1,t.pendingProps=a=i,Jr(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Zt(e,t,n)}return Yr(e,t,l,a,n)}function wf(e,t,l){var a=t.pendingProps,n=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~a}else t.childLanes=0,t.child=null;return Tf(e,t,a,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mi(t,i!==null?i.cachePool:null),i!==null?No(t,i):br(),pf(t);else return t.lanes=t.childLanes=536870912,Tf(e,t,i!==null?i.baseLanes|l:l,l)}else i!==null?(mi(t,i.cachePool),No(t,i),fl(),t.memoizedState=null):(e!==null&&mi(t,null),br(),fl());return Ye(e,t,n,l),t.child}function Tf(e,t,l,a){var n=hr();return n=n===null?null:{parent:Oe._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&mi(t,null),br(),pf(t),e!==null&&ln(e,t,a,!0),null}function _i(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Yr(e,t,l,a,n){return Yl(t),l=zr(e,t,l,a,void 0,n),a=Nr(),e!==null&&!qe?(Er(e,t,n),Zt(e,t,n)):(se&&a&&ur(t),t.flags|=1,Ye(e,t,l,n),t.child)}function Af(e,t,l,a,n,i){return Yl(t),t.updateQueue=null,l=wo(t,a,l,n),Eo(e),a=Nr(),e!==null&&!qe?(Er(e,t,i),Zt(e,t,i)):(se&&a&&ur(t),t.flags|=1,Ye(e,t,l,i),t.child)}function Rf(e,t,l,a,n){if(Yl(t),t.stateNode===null){var i=fa,c=l.contextType;typeof c=="object"&&c!==null&&(i=Ke(c)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},gr(t),c=l.contextType,i.context=typeof c=="object"&&c!==null?Ke(c):fa,i.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(qr(t,l,c,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Hr.enqueueReplaceState(i,i.state,null),on(t,a,i,n),sn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,m=Xl(l,f);i.props=m;var z=i.context,A=l.contextType;c=fa,typeof A=="object"&&A!==null&&(c=Ke(A));var _=l.getDerivedStateFromProps;A=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,A||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||z!==c)&&mf(t,i,a,c),ul=!1;var N=t.memoizedState;i.state=N,on(t,a,i,n),sn(),z=t.memoizedState,f||N!==z||ul?(typeof _=="function"&&(qr(t,l,_,a),z=t.memoizedState),(m=ul||hf(t,l,m,a,N,z,c))?(A||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),i.props=a,i.state=z,i.context=c,a=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,xr(e,t),c=t.memoizedProps,A=Xl(l,c),i.props=A,_=t.pendingProps,N=i.context,z=l.contextType,m=fa,typeof z=="object"&&z!==null&&(m=Ke(z)),f=l.getDerivedStateFromProps,(z=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==_||N!==m)&&mf(t,i,a,m),ul=!1,N=t.memoizedState,i.state=N,on(t,a,i,n),sn();var E=t.memoizedState;c!==_||N!==E||ul||e!==null&&e.dependencies!==null&&pi(e.dependencies)?(typeof f=="function"&&(qr(t,l,f,a),E=t.memoizedState),(A=ul||hf(t,l,A,a,N,E,m)||e!==null&&e.dependencies!==null&&pi(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,E,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,E,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=E),i.props=a,i.state=E,i.context=m,a=A):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,_i(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Sa(t,e.child,null,n),t.child=Sa(t,null,l,n)):Ye(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Zt(e,t,n),e}function Mf(e,t,l,a){return en(),t.flags|=256,Ye(e,t,l,a),t.child}var Gr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qr(e){return{baseLanes:e,cachePool:go()}}function Xr(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=jt),e}function Df(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(n?ol(t):fl(),se){var f=we,m;if(m=f){e:{for(m=f,f=At;m.nodeType!==8;){if(!f){f=null;break e}if(m=wt(m.nextSibling),m===null){f=null;break e}}f=m}f!==null?(t.memoizedState={dehydrated:f,treeContext:Ul!==null?{id:Lt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},m=rt(18,null,null,0),m.stateNode=f,m.return=t,t.child=m,$e=t,we=null,m=!0):m=!1}m||Hl(t)}if(f=t.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Tc(f)?t.lanes=32:t.lanes=536870912,null;Vt(t)}return f=a.children,a=a.fallback,n?(fl(),n=t.mode,f=Oi({mode:"hidden",children:f},n),a=Bl(a,n,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,n=t.child,n.memoizedState=Qr(l),n.childLanes=Xr(e,c,l),t.memoizedState=Gr,a):(ol(t),Vr(t,f))}if(m=e.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(i)t.flags&256?(ol(t),t.flags&=-257,t=Zr(e,t,l)):t.memoizedState!==null?(fl(),t.child=e.child,t.flags|=128,t=null):(fl(),n=a.fallback,f=t.mode,a=Oi({mode:"visible",children:a.children},f),n=Bl(n,f,l,null),n.flags|=2,a.return=t,n.return=t,a.sibling=n,t.child=a,Sa(t,e.child,null,l),a=t.child,a.memoizedState=Qr(l),a.childLanes=Xr(e,c,l),t.memoizedState=Gr,t=n);else if(ol(t),Tc(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var z=c.dgst;c=z,a=Error(s(419)),a.stack="",a.digest=c,tn({value:a,source:null,stack:null}),t=Zr(e,t,l)}else if(qe||ln(e,t,l,!1),c=(l&e.childLanes)!==0,qe||c){if(c=ve,c!==null&&(a=l&-l,a=(a&42)!==0?1:Au(a),a=(a&(c.suspendedLanes|l))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,oa(e,a),dt(c,e,a),jf;f.data==="$?"||oc(),t=Zr(e,t,l)}else f.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,we=wt(f.nextSibling),$e=t,se=!0,ql=null,At=!1,e!==null&&(yt[bt++]=Lt,yt[bt++]=Yt,yt[bt++]=Ul,Lt=e.id,Yt=e.overflow,Ul=t),t=Vr(t,a.children),t.flags|=4096);return t}return n?(fl(),n=a.fallback,f=t.mode,m=e.child,z=m.sibling,a=Ht(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,z!==null?n=Ht(z,n):(n=Bl(n,f,l,null),n.flags|=2),n.return=t,a.return=t,a.sibling=n,t.child=a,a=n,n=t.child,f=e.child.memoizedState,f===null?f=Qr(l):(m=f.cachePool,m!==null?(z=Oe._currentValue,m=m.parent!==z?{parent:z,pool:z}:m):m=go(),f={baseLanes:f.baseLanes|l,cachePool:m}),n.memoizedState=f,n.childLanes=Xr(e,c,l),t.memoizedState=Gr,a):(ol(t),l=e.child,e=l.sibling,l=Ht(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function Vr(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=rt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Zr(e,t,l){return Sa(t,e.child,null,l),e=Vr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _f(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),or(e.return,t,l)}function Kr(e,t,l,a,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n)}function Of(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;if(Ye(e,t,a.children,l),a=Ce.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_f(e,l,t);else if(e.tag===19)_f(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(k(Ce,a),n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Ri(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Kr(t,!1,n,l,i);break;case"backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ri(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Kr(t,!0,l,null,i);break;case"together":Kr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),gl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ln(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,l=Ht(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ht(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Jr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pi(e)))}function O0(e,t,l){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),il(t,Oe,e.memoizedState.cache),en();break;case 27:case 5:zu(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:il(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ol(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Df(e,t,l):(ol(t),e=Zt(e,t,l),e!==null?e.sibling:null);ol(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ln(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Of(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),k(Ce,Ce.current),a)break;return null;case 22:case 23:return t.lanes=0,wf(e,t,l);case 24:il(t,Oe,e.memoizedState.cache)}return Zt(e,t,l)}function Cf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Jr(e,l)&&(t.flags&128)===0)return qe=!1,O0(e,t,l);qe=(e.flags&131072)!==0}else qe=!1,se&&(t.flags&1048576)!==0&&co(t,di,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,n=a._init;if(a=n(a._payload),t.type=a,typeof a=="function")ar(a)?(e=Xl(a,e),t.tag=1,t=Rf(null,t,a,e,l)):(t.tag=0,t=Yr(null,t,a,e,l));else{if(a!=null){if(n=a.$$typeof,n===je){t.tag=11,t=zf(null,t,a,e,l);break e}else if(n===_e){t.tag=14,t=Nf(null,t,a,e,l);break e}}throw t=Rl(a)||a,Error(s(306,t,""))}}return t;case 0:return Yr(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Xl(a,t.pendingProps),Rf(e,t,a,n,l);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,xr(e,t),on(t,a,null,l);var c=t.memoizedState;if(a=c.cache,il(t,Oe,a),a!==i.cache&&fr(t,[Oe],l,!0),sn(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Mf(e,t,a,l);break e}else if(a!==n){n=xt(Error(s(424)),t),tn(n),t=Mf(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=wt(e.firstChild),$e=t,se=!0,ql=null,At=!0,l=df(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(en(),a===n){t=Zt(e,t,l);break e}Ye(e,t,a,l)}t=t.child}return t;case 26:return _i(e,t),e===null?(l=qd(t.type,null,t.pendingProps,null))?t.memoizedState=l:se||(l=t.type,e=t.pendingProps,a=Ki(P.current).createElement(l),a[Ze]=t,a[We]=e,Qe(a,l,e),ke(a),t.stateNode=a):t.memoizedState=qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zu(t),e===null&&se&&(a=t.stateNode=Bd(t.type,t.pendingProps,P.current),$e=t,At=!0,n=we,bl(t.type)?(Ac=n,we=wt(a.firstChild)):we=n),Ye(e,t,t.pendingProps.children,l),_i(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((n=a=we)&&(a=rh(a,t.type,t.pendingProps,At),a!==null?(t.stateNode=a,$e=t,we=wt(a.firstChild),At=!1,n=!0):n=!1),n||Hl(t)),zu(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,Nc(n,i)?a=null:c!==null&&Nc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=zr(e,t,E0,null,null,l),_n._currentValue=n),_i(e,t),Ye(e,t,a,l),t.child;case 6:return e===null&&se&&((e=l=we)&&(l=ch(l,t.pendingProps,At),l!==null?(t.stateNode=l,$e=t,we=null,e=!0):e=!1),e||Hl(t)),null;case 13:return Df(e,t,l);case 4:return ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Sa(t,null,a,l):Ye(e,t,a,l),t.child;case 11:return zf(e,t,t.type,t.pendingProps,l);case 7:return Ye(e,t,t.pendingProps,l),t.child;case 8:return Ye(e,t,t.pendingProps.children,l),t.child;case 12:return Ye(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,il(t,t.type,a.value),Ye(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Yl(t),n=Ke(n),a=a(n),t.flags|=1,Ye(e,t,a,l),t.child;case 14:return Nf(e,t,t.type,t.pendingProps,l);case 15:return Ef(e,t,t.type,t.pendingProps,l);case 19:return Of(e,t,l);case 31:return a=t.pendingProps,l=t.mode,a={mode:a.mode,children:a.children},e===null?(l=Oi(a,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Ht(e.child,a),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return wf(e,t,l);case 24:return Yl(t),a=Ke(Oe),e===null?(n=hr(),n===null&&(n=ve,i=dr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},gr(t),il(t,Oe,n)):((e.lanes&l)!==0&&(xr(e,t),on(t,null,null,l),sn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),il(t,Oe,a)):(a=i.cache,il(t,Oe,a),a!==n.cache&&fr(t,[Oe],l,!0))),Ye(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Kt(e){e.flags|=4}function Bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qd(t)){if(t=St.current,t!==null&&((ie&4194048)===ie?Rt!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==Rt))throw rn=mr,xo;e.flags|=8192}}function Ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fs():536870912,e.lanes|=t,Ea|=t)}function xn(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function C0(e,t,l){var a=t.pendingProps;switch(rr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Oe),tl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fo())),ze(t),null;case 26:return l=t.memoizedState,e===null?(Kt(t),l!==null?(ze(t),Bf(t,l)):(ze(t),t.flags&=-16777217)):l?l!==e.memoizedState?(Kt(t),ze(t),Bf(t,l)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==a&&Kt(t),ze(t),t.flags&=-16777217),null;case 27:Vn(t),l=P.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Kt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ze(t),null}e=Z.current,Ia(t)?so(t):(e=Bd(n,a,l),t.stateNode=e,Kt(t))}return ze(t),null;case 5:if(Vn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Kt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(e=Z.current,Ia(t))so(t);else{switch(n=Ki(P.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}e[Ze]=t,e[We]=a;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Qe(e,l,a),l){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Kt(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Kt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=P.current,Ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=$e,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Ad(e.nodeValue,l)),e||Hl(t)}else e=Ki(e).createTextNode(a),e[Ze]=t,t.stateNode=e}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Ze]=t}else en(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=fo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Vt(t),t):(Vt(t),null)}if(Vt(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=a!==null,e=e!==null&&e.memoizedState!==null,l){a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Ci(t,t.updateQueue),ze(t),null;case 4:return tl(),e===null&&yc(t.stateNode.containerInfo),ze(t),null;case 10:return Qt(t.type),ze(t),null;case 19:if(H(Ce),n=t.memoizedState,n===null)return ze(t),null;if(a=(t.flags&128)!==0,i=n.rendering,i===null)if(a)xn(n,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ri(e),i!==null){for(t.flags|=128,xn(n,!1),e=i.updateQueue,t.updateQueue=e,Ci(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)ro(l,e),l=l.sibling;return k(Ce,Ce.current&1|2),t.child}e=e.sibling}n.tail!==null&&Tt()>ki&&(t.flags|=128,a=!0,xn(n,!1),t.lanes=4194304)}else{if(!a)if(e=Ri(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ci(t,e),xn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!se)return ze(t),null}else 2*Tt()-n.renderingStartTime>ki&&l!==536870912&&(t.flags|=128,a=!0,xn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Tt(),t.sibling=null,e=Ce.current,k(Ce,a?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return Vt(t),Sr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&Ci(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&H(Gl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(Oe),ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function B0(e,t){switch(rr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Oe),tl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Vn(t),null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Ce),null;case 4:return tl(),null;case 10:return Qt(t.type),null;case 22:case 23:return Vt(t),Sr(),e!==null&&H(Gl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Oe),null;case 25:return null;default:return null}}function Uf(e,t){switch(rr(t),t.tag){case 3:Qt(Oe),tl();break;case 26:case 27:case 5:Vn(t);break;case 4:tl();break;case 13:Vt(t);break;case 19:H(Ce);break;case 10:Qt(t.type);break;case 22:case 23:Vt(t),Sr(),e!==null&&H(Gl);break;case 24:Qt(Oe)}}function vn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(f){xe(t,t.return,f)}}function dl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var m=l,z=f;try{z()}catch(A){xe(n,m,A)}}}a=a.next}while(a!==i)}}catch(A){xe(t,t.return,A)}}function kf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{zo(t,l)}catch(a){xe(e,e.return,a)}}}function qf(e,t,l){l.props=Xl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){xe(e,t,a)}}function yn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){xe(e,t,n)}}function Mt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){xe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){xe(e,t,n)}else l.current=null}function Hf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){xe(e,e.return,n)}}function $r(e,t,l){try{var a=e.stateNode;lh(a,e.type,l,t),a[We]=t}catch(n){xe(e,e.return,n)}}function Lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bl(e.type)||e.tag===4}function Wr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fr(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Zi));else if(a!==4&&(a===27&&bl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Fr(e,t,l),e=e.sibling;e!==null;)Fr(e,t,l),e=e.sibling}function Bi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&bl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Bi(e,t,l),e=e.sibling;e!==null;)Bi(e,t,l),e=e.sibling}function Yf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qe(t,a,l),t[Ze]=e,t[We]=l}catch(i){xe(e,e.return,i)}}var Jt=!1,Re=!1,Pr=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,He=null;function U0(e,t){if(e=e.containerInfo,jc=Ii,e=Fs(e),Wu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var c=0,f=-1,m=-1,z=0,A=0,_=e,N=null;t:for(;;){for(var E;_!==l||n!==0&&_.nodeType!==3||(f=c+n),_!==i||a!==0&&_.nodeType!==3||(m=c+a),_.nodeType===3&&(c+=_.nodeValue.length),(E=_.firstChild)!==null;)N=_,_=E;for(;;){if(_===e)break t;if(N===l&&++z===n&&(f=c),N===i&&++A===a&&(m=c),(E=_.nextSibling)!==null)break;_=N,N=_.parentNode}_=E}l=f===-1||m===-1?null:{start:f,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(zc={focusedElem:e,selectionRange:l},Ii=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var W=Xl(l.type,n,l.elementType===l.type);e=a.getSnapshotBeforeUpdate(W,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(K){xe(l,l.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)wc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function Qf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:pl(e,l),a&4&&vn(5,l);break;case 1:if(pl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){xe(l,l.return,c)}else{var n=Xl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){xe(l,l.return,c)}}a&64&&kf(l),a&512&&yn(l,l.return);break;case 3:if(pl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{zo(e,t)}catch(c){xe(l,l.return,c)}}break;case 27:t===null&&a&4&&Yf(l);case 26:case 5:pl(e,l),t===null&&a&4&&Hf(l),a&512&&yn(l,l.return);break;case 12:pl(e,l);break;case 13:pl(e,l),a&4&&Zf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=V0.bind(null,l),sh(e,l))));break;case 22:if(a=l.memoizedState!==null||Jt,!a){t=t!==null&&t.memoizedState!==null||Re,n=Jt;var i=Re;Jt=a,(Re=t)&&!i?hl(e,l,(l.subtreeFlags&8772)!==0):pl(e,l),Jt=n,Re=i}break;case 30:break;default:pl(e,l)}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Du(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Ie=!1;function $t(e,t,l){for(l=l.child;l!==null;)Vf(e,t,l),l=l.sibling}function Vf(e,t,l){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ha,l)}catch{}switch(l.tag){case 26:Re||Mt(l,t),$t(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Re||Mt(l,t);var a=be,n=Ie;bl(l.type)&&(be=l.stateNode,Ie=!1),$t(e,t,l),An(l.stateNode),be=a,Ie=n;break;case 5:Re||Mt(l,t);case 6:if(a=be,n=Ie,be=null,$t(e,t,l),be=a,Ie=n,be!==null)if(Ie)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(l.stateNode)}catch(i){xe(l,t,i)}else try{be.removeChild(l.stateNode)}catch(i){xe(l,t,i)}break;case 18:be!==null&&(Ie?(e=be,Od(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Un(e)):Od(be,l.stateNode));break;case 4:a=be,n=Ie,be=l.stateNode.containerInfo,Ie=!0,$t(e,t,l),be=a,Ie=n;break;case 0:case 11:case 14:case 15:Re||dl(2,l,t),Re||dl(4,l,t),$t(e,t,l);break;case 1:Re||(Mt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&qf(l,t,a)),$t(e,t,l);break;case 21:$t(e,t,l);break;case 22:Re=(a=Re)||l.memoizedState!==null,$t(e,t,l),Re=a;break;default:$t(e,t,l)}}function Zf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Un(e)}catch(l){xe(t,t.return,l)}}function k0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Gf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Gf),t;default:throw Error(s(435,e.tag))}}function Ir(e,t){var l=k0(e);t.forEach(function(a){var n=Z0.bind(null,e,a);l.has(a)||(l.add(a),a.then(n,n))})}function ct(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(bl(f.type)){be=f.stateNode,Ie=!1;break e}break;case 5:be=f.stateNode,Ie=!1;break e;case 3:case 4:be=f.stateNode.containerInfo,Ie=!0;break e}f=f.return}if(be===null)throw Error(s(160));Vf(i,c,n),be=null,Ie=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}var Et=null;function Kf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),st(e),a&4&&(dl(3,e,e.return),vn(3,e),dl(5,e,e.return));break;case 1:ct(t,e),st(e),a&512&&(Re||l===null||Mt(l,l.return)),a&64&&Jt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Et;if(ct(t,e),st(e),a&512&&(Re||l===null||Mt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ga]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Qe(i,a,l),i[Ze]=e,ke(i),a=i;break e;case"link":var c=Yd("link","href",n).get(a+(l.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(f,1);break t}}i=n.createElement(a),Qe(i,a,l),n.head.appendChild(i);break;case"meta":if(c=Yd("meta","content",n).get(a+(l.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(f,1);break t}}i=n.createElement(a),Qe(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[Ze]=e,ke(i),a=i}e.stateNode=a}else Gd(n,e.type,e.stateNode);else e.stateNode=Ld(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Gd(n,e.type,e.stateNode):Ld(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&$r(e,e.memoizedProps,l.memoizedProps)}break;case 27:ct(t,e),st(e),a&512&&(Re||l===null||Mt(l,l.return)),l!==null&&a&4&&$r(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ct(t,e),st(e),a&512&&(Re||l===null||Mt(l,l.return)),e.flags&32){n=e.stateNode;try{aa(n,"")}catch(E){xe(e,e.return,E)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,$r(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Pr=!0);break;case 6:if(ct(t,e),st(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(E){xe(e,e.return,E)}}break;case 3:if(Wi=null,n=Et,Et=Ji(t.containerInfo),ct(t,e),Et=n,st(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(E){xe(e,e.return,E)}Pr&&(Pr=!1,Jf(e));break;case 4:a=Et,Et=Ji(e.stateNode.containerInfo),ct(t,e),st(e),Et=a;break;case 12:ct(t,e),st(e);break;case 13:ct(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ic=Tt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ir(e,a)));break;case 22:n=e.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,z=Jt,A=Re;if(Jt=z||n,Re=A||m,ct(t,e),Re=A,Jt=z,st(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||m||Jt||Re||Vl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){m=l=t;try{if(i=m.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=m.stateNode;var _=m.memoizedProps.style,N=_!=null&&_.hasOwnProperty("display")?_.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(E){xe(m,m.return,E)}}}else if(t.tag===6){if(l===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(E){xe(m,m.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ir(e,l))));break;case 19:ct(t,e),st(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ir(e,a)));break;case 30:break;case 21:break;default:ct(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Lf(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=Wr(e);Bi(e,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(aa(c,""),l.flags&=-33);var f=Wr(e);Bi(e,f,c);break;case 3:case 4:var m=l.stateNode.containerInfo,z=Wr(e);Fr(e,z,m);break;default:throw Error(s(161))}}catch(A){xe(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qf(e,t.alternate,t),t=t.sibling}function Vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:dl(4,t,t.return),Vl(t);break;case 1:Mt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&qf(t,t.return,l),Vl(t);break;case 27:An(t.stateNode);case 26:case 5:Mt(t,t.return),Vl(t);break;case 22:t.memoizedState===null&&Vl(t);break;case 30:Vl(t);break;default:Vl(t)}e=e.sibling}}function hl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:hl(n,i,l),vn(4,i);break;case 1:if(hl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){xe(a,a.return,z)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)jo(m[n],f)}catch(z){xe(a,a.return,z)}}l&&c&64&&kf(i),yn(i,i.return);break;case 27:Yf(i);case 26:case 5:hl(n,i,l),l&&a===null&&c&4&&Hf(i),yn(i,i.return);break;case 12:hl(n,i,l);break;case 13:hl(n,i,l),l&&c&4&&Zf(n,i);break;case 22:i.memoizedState===null&&hl(n,i,l),yn(i,i.return);break;case 30:break;default:hl(n,i,l)}t=t.sibling}}function ec(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&an(l))}function tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e))}function Dt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$f(e,t,l,a),t=t.sibling}function $f(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,l,a),n&2048&&vn(9,t);break;case 1:Dt(e,t,l,a);break;case 3:Dt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e)));break;case 12:if(n&2048){Dt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){xe(t,t.return,m)}}else Dt(e,t,l,a);break;case 13:Dt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,l,a):bn(e,t):i._visibility&2?Dt(e,t,l,a):(i._visibility|=2,ja(e,t,l,a,(t.subtreeFlags&10256)!==0)),n&2048&&ec(c,t);break;case 24:Dt(e,t,l,a),n&2048&&tc(t.alternate,t);break;default:Dt(e,t,l,a)}}function ja(e,t,l,a,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,c=t,f=l,m=a,z=c.flags;switch(c.tag){case 0:case 11:case 15:ja(i,c,f,m,n),vn(8,c);break;case 23:break;case 22:var A=c.stateNode;c.memoizedState!==null?A._visibility&2?ja(i,c,f,m,n):bn(i,c):(A._visibility|=2,ja(i,c,f,m,n)),n&&z&2048&&ec(c.alternate,c);break;case 24:ja(i,c,f,m,n),n&&z&2048&&tc(c.alternate,c);break;default:ja(i,c,f,m,n)}t=t.sibling}}function bn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:bn(l,a),n&2048&&ec(a.alternate,a);break;case 24:bn(l,a),n&2048&&tc(a.alternate,a);break;default:bn(l,a)}t=t.sibling}}var Sn=8192;function za(e){if(e.subtreeFlags&Sn)for(e=e.child;e!==null;)Wf(e),e=e.sibling}function Wf(e){switch(e.tag){case 26:za(e),e.flags&Sn&&e.memoizedState!==null&&jh(Et,e.memoizedState,e.memoizedProps);break;case 5:za(e);break;case 3:case 4:var t=Et;Et=Ji(e.stateNode.containerInfo),za(e),Et=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Sn,Sn=16777216,za(e),Sn=t):za(e));break;default:za(e)}}function Ff(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,If(a,e)}Ff(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pf(e),e=e.sibling}function Pf(e){switch(e.tag){case 0:case 11:case 15:jn(e),e.flags&2048&&dl(9,e,e.return);break;case 3:jn(e);break;case 12:jn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ui(e)):jn(e);break;default:jn(e)}}function Ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,If(a,e)}Ff(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:dl(8,t,t.return),Ui(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Ui(t));break;default:Ui(t)}e=e.sibling}}function If(e,t){for(;He!==null;){var l=He;switch(l.tag){case 0:case 11:case 15:dl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:an(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,He=a;else e:for(l=e;He!==null;){a=He;var n=a.sibling,i=a.return;if(Xf(a),a===l){He=null;break e}if(n!==null){n.return=i,He=n;break e}He=i}}}var q0={getCacheForType:function(e){var t=Ke(Oe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},H0=typeof WeakMap=="function"?WeakMap:Map,fe=0,ve=null,ae=null,ie=0,de=0,ot=null,ml=!1,Na=!1,lc=!1,Wt=0,Te=0,gl=0,Zl=0,ac=0,jt=0,Ea=0,zn=null,et=null,nc=!1,ic=0,ki=1/0,qi=null,xl=null,Ge=0,vl=null,wa=null,Ta=0,uc=0,rc=null,ed=null,Nn=0,cc=null;function ft(){if((fe&2)!==0&&ie!==0)return ie&-ie;if(M.T!==null){var e=ha;return e!==0?e:mc()}return hs()}function td(){jt===0&&(jt=(ie&536870912)===0||se?os():536870912);var e=St.current;return e!==null&&(e.flags|=32),jt}function dt(e,t,l){(e===ve&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Aa(e,0),yl(e,ie,jt,!1)),Ya(e,l),((fe&2)===0||e!==ve)&&(e===ve&&((fe&2)===0&&(Zl|=l),Te===4&&yl(e,ie,jt,!1)),_t(e))}function ld(e,t,l){if((fe&6)!==0)throw Error(s(327));var a=!l&&(t&124)===0&&(t&e.expiredLanes)===0||La(e,t),n=a?G0(e,t):fc(e,t,!0),i=a;do{if(n===0){Na&&!a&&yl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!L0(l)){n=fc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=zn;var m=f.current.memoizedState.isDehydrated;if(m&&(Aa(f,c).flags|=256),c=fc(f,c,!1),c!==2){if(lc&&!m){f.errorRecoveryDisabledLanes|=i,Zl|=i,n=4;break e}i=et,et=n,i!==null&&(et===null?et=i:et.push.apply(et,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Aa(e,0),yl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yl(a,t,jt,!ml);break e;case 2:et=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=ic+300-Tt(),10<n)){if(yl(a,t,jt,!ml),$n(a,0,!0)!==0)break e;a.timeoutHandle=Dd(ad.bind(null,a,l,et,qi,nc,t,jt,Zl,Ea,ml,i,2,-0,0),n);break e}ad(a,l,et,qi,nc,t,jt,Zl,Ea,ml,i,0,-0,0)}}break}while(!0);_t(e)}function ad(e,t,l,a,n,i,c,f,m,z,A,_,N,E){if(e.timeoutHandle=-1,_=t.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Dn={stylesheets:null,count:0,unsuspend:Sh},Wf(t),_=zh(),_!==null)){e.cancelPendingCommit=_(od.bind(null,e,t,i,l,a,n,c,f,m,A,1,N,E)),yl(e,i,c,!z);return}od(e,t,i,l,a,n,c,f,m)}function L0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yl(e,t,l,a){t&=~ac,t&=~Zl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-it(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&ds(e,l,t)}function Hi(){return(fe&6)===0?(En(0),!1):!0}function sc(){if(ae!==null){if(de===0)var e=ae.return;else e=ae,Gt=Ll=null,wr(e),ba=null,mn=0,e=ae;for(;e!==null;)Uf(e.alternate,e),e=e.return;ae=null}}function Aa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,nh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),sc(),ve=e,ae=l=Ht(e.current,null),ie=t,de=0,ot=null,ml=!1,Na=La(e,t),lc=!1,Ea=jt=ac=Zl=gl=Te=0,et=zn=null,nc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-it(a),i=1<<n;t|=e[n],a&=~i}return Wt=t,ri(),l}function nd(e,t){te=null,M.H=wi,t===un||t===gi?(t=bo(),de=3):t===xo?(t=bo(),de=4):de=t===jf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ae===null&&(Te=1,Di(e,xt(t,e.current)))}function id(){var e=M.H;return M.H=wi,e===null?wi:e}function ud(){var e=M.A;return M.A=q0,e}function oc(){Te=4,ml||(ie&4194048)!==ie&&St.current!==null||(Na=!0),(gl&134217727)===0&&(Zl&134217727)===0||ve===null||yl(ve,ie,jt,!1)}function fc(e,t,l){var a=fe;fe|=2;var n=id(),i=ud();(ve!==e||ie!==t)&&(qi=null,Aa(e,t)),t=!1;var c=Te;e:do try{if(de!==0&&ae!==null){var f=ae,m=ot;switch(de){case 8:sc(),c=6;break e;case 3:case 2:case 9:case 6:St.current===null&&(t=!0);var z=de;if(de=0,ot=null,Ra(e,f,m,z),l&&Na){c=0;break e}break;default:z=de,de=0,ot=null,Ra(e,f,m,z)}}Y0(),c=Te;break}catch(A){nd(e,A)}while(!0);return t&&e.shellSuspendCounter++,Gt=Ll=null,fe=a,M.H=n,M.A=i,ae===null&&(ve=null,ie=0,ri()),c}function Y0(){for(;ae!==null;)rd(ae)}function G0(e,t){var l=fe;fe|=2;var a=id(),n=ud();ve!==e||ie!==t?(qi=null,ki=Tt()+500,Aa(e,t)):Na=La(e,t);e:do try{if(de!==0&&ae!==null){t=ae;var i=ot;t:switch(de){case 1:de=0,ot=null,Ra(e,t,i,1);break;case 2:case 9:if(vo(i)){de=0,ot=null,cd(t);break}t=function(){de!==2&&de!==9||ve!==e||(de=7),_t(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:vo(i)?(de=0,ot=null,cd(t)):(de=0,ot=null,Ra(e,t,i,7));break;case 5:var c=null;switch(ae.tag){case 26:c=ae.memoizedState;case 5:case 27:var f=ae;if(!c||Qd(c)){de=0,ot=null;var m=f.sibling;if(m!==null)ae=m;else{var z=f.return;z!==null?(ae=z,Li(z)):ae=null}break t}}de=0,ot=null,Ra(e,t,i,5);break;case 6:de=0,ot=null,Ra(e,t,i,6);break;case 8:sc(),Te=6;break e;default:throw Error(s(462))}}Q0();break}catch(A){nd(e,A)}while(!0);return Gt=Ll=null,M.H=a,M.A=n,fe=l,ae!==null?0:(ve=null,ie=0,ri(),Te)}function Q0(){for(;ae!==null&&!f1();)rd(ae)}function rd(e){var t=Cf(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Li(e):ae=t}function cd(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Af(l,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Af(l,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:wr(t);default:Uf(l,t),t=ae=ro(t,Wt),t=Cf(l,t,Wt)}e.memoizedProps=e.pendingProps,t===null?Li(e):ae=t}function Ra(e,t,l,a){Gt=Ll=null,wr(t),ba=null,mn=0;var n=t.return;try{if(_0(e,n,t,l,ie)){Te=1,Di(e,xt(l,e.current)),ae=null;return}}catch(i){if(n!==null)throw ae=n,i;Te=1,Di(e,xt(l,e.current)),ae=null;return}t.flags&32768?(se||a===1?e=!0:Na||(ie&536870912)!==0?e=!1:(ml=e=!0,(a===2||a===9||a===3||a===6)&&(a=St.current,a!==null&&a.tag===13&&(a.flags|=16384))),sd(t,e)):Li(t)}function Li(e){var t=e;do{if((t.flags&32768)!==0){sd(t,ml);return}e=t.return;var l=C0(t.alternate,t,Wt);if(l!==null){ae=l;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Te===0&&(Te=5)}function sd(e,t){do{var l=B0(e.alternate,e);if(l!==null){l.flags&=32767,ae=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=l}while(e!==null);Te=6,ae=null}function od(e,t,l,a,n,i,c,f,m){e.cancelPendingCommit=null;do Yi();while(Ge!==0);if((fe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=tr,S1(e,l,i,c,f,m),e===ve&&(ae=ve=null,ie=0),wa=t,vl=e,Ta=l,uc=i,rc=n,ed=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,K0(Zn,function(){return md(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,n=q.p,q.p=2,c=fe,fe|=4;try{U0(e,t,l)}finally{fe=c,q.p=n,M.T=a}}Ge=1,fd(),dd(),pd()}}function fd(){if(Ge===1){Ge=0;var e=vl,t=wa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var a=q.p;q.p=2;var n=fe;fe|=4;try{Kf(t,e);var i=zc,c=Fs(e.containerInfo),f=i.focusedElem,m=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&Ws(f.ownerDocument.documentElement,f)){if(m!==null&&Wu(f)){var z=m.start,A=m.end;if(A===void 0&&(A=z),"selectionStart"in f)f.selectionStart=z,f.selectionEnd=Math.min(A,f.value.length);else{var _=f.ownerDocument||document,N=_&&_.defaultView||window;if(N.getSelection){var E=N.getSelection(),W=f.textContent.length,K=Math.min(m.start,W),me=m.end===void 0?K:Math.min(m.end,W);!E.extend&&K>me&&(c=me,me=K,K=c);var S=$s(f,K),v=$s(f,me);if(S&&v&&(E.rangeCount!==1||E.anchorNode!==S.node||E.anchorOffset!==S.offset||E.focusNode!==v.node||E.focusOffset!==v.offset)){var j=_.createRange();j.setStart(S.node,S.offset),E.removeAllRanges(),K>me?(E.addRange(j),E.extend(v.node,v.offset)):(j.setEnd(v.node,v.offset),E.addRange(j))}}}}for(_=[],E=f;E=E.parentNode;)E.nodeType===1&&_.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<_.length;f++){var D=_[f];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Ii=!!jc,zc=jc=null}finally{fe=n,q.p=a,M.T=l}}e.current=t,Ge=2}}function dd(){if(Ge===2){Ge=0;var e=vl,t=wa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var a=q.p;q.p=2;var n=fe;fe|=4;try{Qf(e,t.alternate,t)}finally{fe=n,q.p=a,M.T=l}}Ge=3}}function pd(){if(Ge===4||Ge===3){Ge=0,d1();var e=vl,t=wa,l=Ta,a=ed;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,wa=vl=null,hd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(xl=null),Ru(l),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ha,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,n=q.p,q.p=2,M.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var f=a[c];i(f.value,{componentStack:f.stack})}}finally{M.T=t,q.p=n}}(Ta&3)!==0&&Yi(),_t(e),n=e.pendingLanes,(l&4194090)!==0&&(n&42)!==0?e===cc?Nn++:(Nn=0,cc=e):Nn=0,En(0)}}function hd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,an(t)))}function Yi(e){return fd(),dd(),pd(),md()}function md(){if(Ge!==5)return!1;var e=vl,t=uc;uc=0;var l=Ru(Ta),a=M.T,n=q.p;try{q.p=32>l?32:l,M.T=null,l=rc,rc=null;var i=vl,c=Ta;if(Ge=0,wa=vl=null,Ta=0,(fe&6)!==0)throw Error(s(331));var f=fe;if(fe|=4,Pf(i.current),$f(i,i.current,c,l),fe=f,En(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ha,i)}catch{}return!0}finally{q.p=n,M.T=a,hd(e,t)}}function gd(e,t,l){t=xt(l,t),t=Lr(e.stateNode,t,2),e=cl(e,t,2),e!==null&&(Ya(e,2),_t(e))}function xe(e,t,l){if(e.tag===3)gd(e,e,l);else for(;t!==null;){if(t.tag===3){gd(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xl===null||!xl.has(a))){e=xt(l,e),l=bf(2),a=cl(t,l,2),a!==null&&(Sf(l,a,t,e),Ya(a,2),_t(a));break}}t=t.return}}function dc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new H0;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(lc=!0,n.add(l),e=X0.bind(null,e,t,l),t.then(e,e))}function X0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ve===e&&(ie&l)===l&&(Te===4||Te===3&&(ie&62914560)===ie&&300>Tt()-ic?(fe&2)===0&&Aa(e,0):ac|=l,Ea===ie&&(Ea=0)),_t(e)}function xd(e,t){t===0&&(t=fs()),e=oa(e,t),e!==null&&(Ya(e,t),_t(e))}function V0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),xd(e,l)}function Z0(e,t){var l=0;switch(e.tag){case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),xd(e,l)}function K0(e,t){return Eu(e,t)}var Gi=null,Ma=null,pc=!1,Qi=!1,hc=!1,Kl=0;function _t(e){e!==Ma&&e.next===null&&(Ma===null?Gi=Ma=e:Ma=Ma.next=e),Qi=!0,pc||(pc=!0,$0())}function En(e,t){if(!hc&&Qi){hc=!0;do for(var l=!1,a=Gi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-it(42|e)+1)-1,i&=n&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Sd(a,i))}else i=ie,i=$n(a,a===ve?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||La(a,i)||(l=!0,Sd(a,i));a=a.next}while(l);hc=!1}}function J0(){vd()}function vd(){Qi=pc=!1;var e=0;Kl!==0&&(ah()&&(e=Kl),Kl=0);for(var t=Tt(),l=null,a=Gi;a!==null;){var n=a.next,i=yd(a,t);i===0?(a.next=null,l===null?Gi=n:l.next=n,n===null&&(Ma=l)):(l=a,(e!==0||(i&3)!==0)&&(Qi=!0)),a=n}En(e)}function yd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-it(i),f=1<<c,m=n[c];m===-1?((f&l)===0||(f&a)!==0)&&(n[c]=b1(f,t)):m<=t&&(e.expiredLanes|=f),i&=~f}if(t=ve,l=ie,l=$n(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&wu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||La(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&wu(a),Ru(l)){case 2:case 8:l=cs;break;case 32:l=Zn;break;case 268435456:l=ss;break;default:l=Zn}return a=bd.bind(null,e),l=Eu(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&wu(a),e.callbackPriority=2,e.callbackNode=null,2}function bd(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Yi()&&e.callbackNode!==l)return null;var a=ie;return a=$n(e,e===ve?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(ld(e,a,t),yd(e,Tt()),e.callbackNode!=null&&e.callbackNode===l?bd.bind(null,e):null)}function Sd(e,t){if(Yi())return null;ld(e,t,!0)}function $0(){ih(function(){(fe&6)!==0?Eu(rs,J0):vd()})}function mc(){return Kl===0&&(Kl=os()),Kl}function jd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ei(""+e)}function zd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function W0(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=jd((n[We]||null).action),c=a.submitter;c&&(t=(t=c[We]||null)?jd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new ni("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kl!==0){var m=c?zd(n,c):new FormData(n);Br(l,{pending:!0,data:m,method:n.method,action:i},null,m)}}else typeof i=="function"&&(f.preventDefault(),m=c?zd(n,c):new FormData(n),Br(l,{pending:!0,data:m,method:n.method,action:i},i,m))},currentTarget:n}]})}}for(var gc=0;gc<er.length;gc++){var xc=er[gc],F0=xc.toLowerCase(),P0=xc[0].toUpperCase()+xc.slice(1);Nt(F0,"on"+P0)}Nt(eo,"onAnimationEnd"),Nt(to,"onAnimationIteration"),Nt(lo,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(m0,"onTransitionRun"),Nt(g0,"onTransitionStart"),Nt(x0,"onTransitionCancel"),Nt(ao,"onTransitionEnd"),ea("onMouseEnter",["mouseout","mouseover"]),ea("onMouseLeave",["mouseout","mouseover"]),ea("onPointerEnter",["pointerout","pointerover"]),ea("onPointerLeave",["pointerout","pointerover"]),Dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wn));function Nd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var f=a[c],m=f.instance,z=f.currentTarget;if(f=f.listener,m!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=z;try{i(n)}catch(A){Mi(A)}n.currentTarget=null,i=m}else for(c=0;c<a.length;c++){if(f=a[c],m=f.instance,z=f.currentTarget,f=f.listener,m!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=z;try{i(n)}catch(A){Mi(A)}n.currentTarget=null,i=m}}}}function ne(e,t){var l=t[Mu];l===void 0&&(l=t[Mu]=new Set);var a=e+"__bubble";l.has(a)||(Ed(t,e,2,!1),l.add(a))}function vc(e,t,l){var a=0;t&&(a|=4),Ed(l,e,a,t)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function yc(e){if(!e[Xi]){e[Xi]=!0,gs.forEach(function(l){l!=="selectionchange"&&(I0.has(l)||vc(l,!1,e),vc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xi]||(t[Xi]=!0,vc("selectionchange",!1,t))}}function Ed(e,t,l,a){switch($d(t)){case 2:var n=wh;break;case 8:n=Th;break;default:n=Oc}l=n.bind(null,t,l,e),n=void 0,!Yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function bc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=a.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=Fl(f),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){a=i=c;continue e}f=f.parentNode}}a=a.return}Ms(function(){var z=i,A=Hu(l),_=[];e:{var N=no.get(e);if(N!==void 0){var E=ni,W=e;switch(e){case"keypress":if(li(l)===0)break e;case"keydown":case"keyup":E=K1;break;case"focusin":W="focus",E=Vu;break;case"focusout":W="blur",E=Vu;break;case"beforeblur":case"afterblur":E=Vu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=B1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=W1;break;case eo:case to:case lo:E=q1;break;case ao:E=P1;break;case"scroll":case"scrollend":E=O1;break;case"wheel":E=e0;break;case"copy":case"cut":case"paste":E=L1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Bs;break;case"toggle":case"beforetoggle":E=l0}var K=(t&4)!==0,me=!K&&(e==="scroll"||e==="scrollend"),S=K?N!==null?N+"Capture":null:N;K=[];for(var v=z,j;v!==null;){var D=v;if(j=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||j===null||S===null||(D=Xa(v,S),D!=null&&K.push(Tn(v,D,j))),me)break;v=v.return}0<K.length&&(N=new E(N,W,null,l,A),_.push({event:N,listeners:K}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",N&&l!==qu&&(W=l.relatedTarget||l.fromElement)&&(Fl(W)||W[Wl]))break e;if((E||N)&&(N=A.window===A?A:(N=A.ownerDocument)?N.defaultView||N.parentWindow:window,E?(W=l.relatedTarget||l.toElement,E=z,W=W?Fl(W):null,W!==null&&(me=h(W),K=W.tag,W!==me||K!==5&&K!==27&&K!==6)&&(W=null)):(E=null,W=z),E!==W)){if(K=Os,D="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(K=Bs,D="onPointerLeave",S="onPointerEnter",v="pointer"),me=E==null?N:Qa(E),j=W==null?N:Qa(W),N=new K(D,v+"leave",E,l,A),N.target=me,N.relatedTarget=j,D=null,Fl(A)===z&&(K=new K(S,v+"enter",W,l,A),K.target=j,K.relatedTarget=me,D=K),me=D,E&&W)t:{for(K=E,S=W,v=0,j=K;j;j=Da(j))v++;for(j=0,D=S;D;D=Da(D))j++;for(;0<v-j;)K=Da(K),v--;for(;0<j-v;)S=Da(S),j--;for(;v--;){if(K===S||S!==null&&K===S.alternate)break t;K=Da(K),S=Da(S)}K=null}else K=null;E!==null&&wd(_,N,E,K,!1),W!==null&&me!==null&&wd(_,me,W,K,!0)}}e:{if(N=z?Qa(z):window,E=N.nodeName&&N.nodeName.toLowerCase(),E==="select"||E==="input"&&N.type==="file")var L=Qs;else if(Ys(N))if(Xs)L=d0;else{L=o0;var le=s0}else E=N.nodeName,!E||E.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?z&&ku(z.elementType)&&(L=Qs):L=f0;if(L&&(L=L(e,z))){Gs(_,L,l,A);break e}le&&le(e,N,z),e==="focusout"&&z&&N.type==="number"&&z.memoizedProps.value!=null&&Uu(N,"number",N.value)}switch(le=z?Qa(z):window,e){case"focusin":(Ys(le)||le.contentEditable==="true")&&(ra=le,Fu=z,Pa=null);break;case"focusout":Pa=Fu=ra=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Ps(_,l,A);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":Ps(_,l,A)}var Q;if(Ku)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else ua?Hs(e,l)&&(J="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(J="onCompositionStart");J&&(Us&&l.locale!=="ko"&&(ua||J!=="onCompositionStart"?J==="onCompositionEnd"&&ua&&(Q=Ds()):(nl=A,Gu="value"in nl?nl.value:nl.textContent,ua=!0)),le=Vi(z,J),0<le.length&&(J=new Cs(J,e,null,l,A),_.push({event:J,listeners:le}),Q?J.data=Q:(Q=Ls(l),Q!==null&&(J.data=Q)))),(Q=n0?i0(e,l):u0(e,l))&&(J=Vi(z,"onBeforeInput"),0<J.length&&(le=new Cs("onBeforeInput","beforeinput",null,l,A),_.push({event:le,listeners:J}),le.data=Q)),W0(_,e,z,l,A)}Nd(_,t)})}function Tn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Vi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Xa(e,l),n!=null&&a.unshift(Tn(e,n,i)),n=Xa(e,t),n!=null&&a.push(Tn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Da(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wd(e,t,l,a,n){for(var i=t._reactName,c=[];l!==null&&l!==a;){var f=l,m=f.alternate,z=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||z===null||(m=z,n?(z=Xa(l,i),z!=null&&c.unshift(Tn(l,z,m))):n||(z=Xa(l,i),z!=null&&c.push(Tn(l,z,m)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var eh=/\r\n?/g,th=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(eh,`
`).replace(th,"")}function Ad(e,t){return t=Td(t),Td(e)===t}function Zi(){}function he(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||aa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&aa(e,""+a);break;case"className":Fn(e,"class",a);break;case"tabIndex":Fn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Fn(e,l,a);break;case"style":As(e,a,i);break;case"data":if(t!=="object"){Fn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ei(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&he(e,t,"name",n.name,n,null),he(e,t,"formEncType",n.formEncType,n,null),he(e,t,"formMethod",n.formMethod,n,null),he(e,t,"formTarget",n.formTarget,n,null)):(he(e,t,"encType",n.encType,n,null),he(e,t,"method",n.method,n,null),he(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ei(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Zi);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=ei(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Wn(e,"popover",a);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Wn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=D1.get(l)||l,Wn(e,l,a))}}function Sc(e,t,l,a,n,i){switch(l){case"style":As(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"children":typeof a=="string"?aa(e,a):(typeof a=="number"||typeof a=="bigint")&&aa(e,""+a);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xs.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[We]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Wn(e,l,a)}}}function Qe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:he(e,t,i,c,l,null)}}n&&he(e,t,"srcSet",l.srcSet,l,null),a&&he(e,t,"src",l.src,l,null);return;case"input":ne("invalid",e);var f=i=c=n=null,m=null,z=null;for(a in l)if(l.hasOwnProperty(a)){var A=l[a];if(A!=null)switch(a){case"name":n=A;break;case"type":c=A;break;case"checked":m=A;break;case"defaultChecked":z=A;break;case"value":i=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:he(e,t,a,A,l,null)}}Ns(e,i,f,m,z,c,n,!1),Pn(e);return;case"select":ne("invalid",e),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:he(e,t,n,f,l,null)}t=i,l=c,e.multiple=!!a,t!=null?la(e,!!a,t,!1):l!=null&&la(e,!!a,l,!0);return;case"textarea":ne("invalid",e),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(f=l[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:he(e,t,c,f,l,null)}ws(e,a,n,i),Pn(e);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:he(e,t,m,a,l,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(a=0;a<wn.length;a++)ne(wn[a],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in l)if(l.hasOwnProperty(z)&&(a=l[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:he(e,t,z,a,l,null)}return;default:if(ku(t)){for(A in l)l.hasOwnProperty(A)&&(a=l[A],a!==void 0&&Sc(e,t,A,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&he(e,t,f,a,l,null))}function lh(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,f=null,m=null,z=null,A=null;for(E in l){var _=l[E];if(l.hasOwnProperty(E)&&_!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":m=_;default:a.hasOwnProperty(E)||he(e,t,E,null,a,_)}}for(var N in a){var E=a[N];if(_=l[N],a.hasOwnProperty(N)&&(E!=null||_!=null))switch(N){case"type":i=E;break;case"name":n=E;break;case"checked":z=E;break;case"defaultChecked":A=E;break;case"value":c=E;break;case"defaultValue":f=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,t));break;default:E!==_&&he(e,t,N,E,a,_)}}Bu(e,c,f,m,z,A,i,n);return;case"select":E=c=f=N=null;for(i in l)if(m=l[i],l.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":E=m;default:a.hasOwnProperty(i)||he(e,t,i,null,a,m)}for(n in a)if(i=a[n],m=l[n],a.hasOwnProperty(n)&&(i!=null||m!=null))switch(n){case"value":N=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==m&&he(e,t,n,i,a,m)}t=f,l=c,a=E,N!=null?la(e,!!l,N,!1):!!a!=!!l&&(t!=null?la(e,!!l,t,!0):la(e,!!l,l?[]:"",!1));return;case"textarea":E=N=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:he(e,t,f,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":N=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&he(e,t,c,n,a,i)}Es(e,N,E);return;case"option":for(var W in l)if(N=l[W],l.hasOwnProperty(W)&&N!=null&&!a.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:he(e,t,W,null,a,N)}for(m in a)if(N=a[m],E=l[m],a.hasOwnProperty(m)&&N!==E&&(N!=null||E!=null))switch(m){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:he(e,t,m,N,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in l)N=l[K],l.hasOwnProperty(K)&&N!=null&&!a.hasOwnProperty(K)&&he(e,t,K,null,a,N);for(z in a)if(N=a[z],E=l[z],a.hasOwnProperty(z)&&N!==E&&(N!=null||E!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:he(e,t,z,N,a,E)}return;default:if(ku(t)){for(var me in l)N=l[me],l.hasOwnProperty(me)&&N!==void 0&&!a.hasOwnProperty(me)&&Sc(e,t,me,void 0,a,N);for(A in a)N=a[A],E=l[A],!a.hasOwnProperty(A)||N===E||N===void 0&&E===void 0||Sc(e,t,A,N,a,E);return}}for(var S in l)N=l[S],l.hasOwnProperty(S)&&N!=null&&!a.hasOwnProperty(S)&&he(e,t,S,null,a,N);for(_ in a)N=a[_],E=l[_],!a.hasOwnProperty(_)||N===E||N==null&&E==null||he(e,t,_,N,a,E)}var jc=null,zc=null;function Ki(e){return e.nodeType===9?e:e.ownerDocument}function Rd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Md(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ec=null;function ah(){var e=window.event;return e&&e.type==="popstate"?e===Ec?!1:(Ec=e,!0):(Ec=null,!1)}var Dd=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(uh)}:Dd;function uh(e){setTimeout(function(){throw e})}function bl(e){return e==="head"}function Od(e,t){var l=t,a=0,n=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var c=e.ownerDocument;if(l&1&&An(c.documentElement),l&2&&An(c.body),l&4)for(l=c.head,An(l),c=l.firstChild;c;){var f=c.nextSibling,m=c.nodeName;c[Ga]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=f}}if(n===0){e.removeChild(i),Un(t);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);Un(t)}function wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":wc(l),Du(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function rh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ga])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function ch(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=wt(e.nextSibling),e===null))return null;return e}function Tc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function sh(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Ac=null;function Cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function Bd(e,t,l){switch(t=Ki(l),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function An(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Du(e)}var zt=new Map,Ud=new Set;function Ji(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=q.d;q.d={f:oh,r:fh,D:dh,C:ph,L:hh,m:mh,X:xh,S:gh,M:vh};function oh(){var e=Ft.f(),t=Hi();return e||t}function fh(e){var t=Pl(e);t!==null&&t.tag===5&&t.type==="form"?tf(t):Ft.r(e)}var _a=typeof document>"u"?null:document;function kd(e,t,l){var a=_a;if(a&&typeof t=="string"&&t){var n=gt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ud.has(n)||(Ud.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Qe(t,"link",e),ke(t),a.head.appendChild(t)))}}function dh(e){Ft.D(e),kd("dns-prefetch",e,null)}function ph(e,t){Ft.C(e,t),kd("preconnect",e,t)}function hh(e,t,l){Ft.L(e,t,l);var a=_a;if(a&&e&&t){var n='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+gt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+gt(l.imageSizes)+'"]')):n+='[href="'+gt(e)+'"]';var i=n;switch(t){case"style":i=Oa(e);break;case"script":i=Ca(e)}zt.has(i)||(e=R({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),zt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Rn(i))||t==="script"&&a.querySelector(Mn(i))||(t=a.createElement("link"),Qe(t,"link",e),ke(t),a.head.appendChild(t)))}}function mh(e,t){Ft.m(e,t);var l=_a;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+gt(a)+'"][href="'+gt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ca(e)}if(!zt.has(i)&&(e=R({rel:"modulepreload",href:e},t),zt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Mn(i)))return}a=l.createElement("link"),Qe(a,"link",e),ke(a),l.head.appendChild(a)}}}function gh(e,t,l){Ft.S(e,t,l);var a=_a;if(a&&e){var n=Il(a).hoistableStyles,i=Oa(e);t=t||"default";var c=n.get(i);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(Rn(i)))f.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},l),(l=zt.get(i))&&Rc(e,l);var m=c=a.createElement("link");ke(m),Qe(m,"link",e),m._p=new Promise(function(z,A){m.onload=z,m.onerror=A}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,$i(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(i,c)}}}function xh(e,t){Ft.X(e,t);var l=_a;if(l&&e){var a=Il(l).hoistableScripts,n=Ca(e),i=a.get(n);i||(i=l.querySelector(Mn(n)),i||(e=R({src:e,async:!0},t),(t=zt.get(n))&&Mc(e,t),i=l.createElement("script"),ke(i),Qe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function vh(e,t){Ft.M(e,t);var l=_a;if(l&&e){var a=Il(l).hoistableScripts,n=Ca(e),i=a.get(n);i||(i=l.querySelector(Mn(n)),i||(e=R({src:e,async:!0,type:"module"},t),(t=zt.get(n))&&Mc(e,t),i=l.createElement("script"),ke(i),Qe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function qd(e,t,l,a){var n=(n=P.current)?Ji(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Oa(l.href),l=Il(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Oa(l.href);var i=Il(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Rn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),zt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},zt.set(e,l),i||yh(n,e,l,c.state))),t&&a===null)throw Error(s(528,""));return c}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ca(l),l=Il(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Oa(e){return'href="'+gt(e)+'"'}function Rn(e){return'link[rel="stylesheet"]['+e+"]"}function Hd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function yh(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Qe(t,"link",l),ke(t),e.head.appendChild(t))}function Ca(e){return'[src="'+gt(e)+'"]'}function Mn(e){return"script[async]"+e}function Ld(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+gt(l.href)+'"]');if(a)return t.instance=a,ke(a),a;var n=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ke(a),Qe(a,"style",n),$i(a,l.precedence,e),t.instance=a;case"stylesheet":n=Oa(l.href);var i=e.querySelector(Rn(n));if(i)return t.state.loading|=4,t.instance=i,ke(i),i;a=Hd(l),(n=zt.get(n))&&Rc(a,n),i=(e.ownerDocument||e).createElement("link"),ke(i);var c=i;return c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),Qe(i,"link",a),t.state.loading|=4,$i(i,l.precedence,e),t.instance=i;case"script":return i=Ca(l.src),(n=e.querySelector(Mn(i)))?(t.instance=n,ke(n),n):(a=l,(n=zt.get(i))&&(a=R({},l),Mc(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),ke(n),Qe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,$i(a,l.precedence,e));return t.instance}function $i(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wi=null;function Yd(e,t,l){if(Wi===null){var a=new Map,n=Wi=new Map;n.set(l,a)}else n=Wi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Ga]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=a.get(c);f?f.push(i):a.set(c,[i])}}return a}function Gd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function bh(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Dn=null;function Sh(){}function jh(e,t,l){if(Dn===null)throw Error(s(475));var a=Dn;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Oa(l.href),i=e.querySelector(Rn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Fi.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=i,ke(i);return}i=e.ownerDocument||e,l=Hd(l),(n=zt.get(n))&&Rc(l,n),i=i.createElement("link"),ke(i);var c=i;c._p=new Promise(function(f,m){c.onload=f,c.onerror=m}),Qe(i,"link",l),t.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Fi.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function zh(){if(Dn===null)throw Error(s(475));var e=Dn;return e.stylesheets&&e.count===0&&Dc(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&Dc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Fi(){if(this.count--,this.count===0){if(this.stylesheets)Dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pi=null;function Dc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pi=new Map,t.forEach(Nh,e),Pi=null,Fi.call(e))}function Nh(e,t){if(!(t.state.loading&4)){var l=Pi.get(e);if(l)var a=l.get(null);else{l=new Map,Pi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=Fi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var _n={$$typeof:I,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Eh(e,t,l,a,n,i,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tu(0),this.hiddenUpdates=Tu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Xd(e,t,l,a,n,i,c,f,m,z,A,_){return e=new Eh(e,t,l,c,f,m,z,_),t=1,i===!0&&(t|=24),i=rt(3,null,null,t),e.current=i,i.stateNode=e,t=dr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},gr(i),e}function Vd(e){return e?(e=fa,e):fa}function Zd(e,t,l,a,n,i){n=Vd(n),a.context===null?a.context=n:a.pendingContext=n,a=rl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=cl(e,a,t),l!==null&&(dt(l,e,t),cn(l,e,t))}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function _c(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function Jd(e){if(e.tag===13){var t=oa(e,67108864);t!==null&&dt(t,e,67108864),_c(e,67108864)}}var Ii=!0;function wh(e,t,l,a){var n=M.T;M.T=null;var i=q.p;try{q.p=2,Oc(e,t,l,a)}finally{q.p=i,M.T=n}}function Th(e,t,l,a){var n=M.T;M.T=null;var i=q.p;try{q.p=8,Oc(e,t,l,a)}finally{q.p=i,M.T=n}}function Oc(e,t,l,a){if(Ii){var n=Cc(a);if(n===null)bc(e,t,a,eu,l),Wd(e,a);else if(Rh(n,e,t,l,a))a.stopPropagation();else if(Wd(e,a),t&4&&-1<Ah.indexOf(e)){for(;n!==null;){var i=Pl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ml(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var m=1<<31-it(c);f.entanglements[1]|=m,c&=~m}_t(i),(fe&6)===0&&(ki=Tt()+500,En(0))}}break;case 13:f=oa(i,2),f!==null&&dt(f,i,2),Hi(),_c(i,2)}if(i=Cc(a),i===null&&bc(e,t,a,eu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else bc(e,t,a,null,l)}}function Cc(e){return e=Hu(e),Bc(e)}var eu=null;function Bc(e){if(eu=null,e=Fl(e),e!==null){var t=h(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=b(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return eu=e,null}function $d(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p1()){case rs:return 2;case cs:return 8;case Zn:case h1:return 32;case ss:return 268435456;default:return 32}default:return 32}}var Uc=!1,Sl=null,jl=null,zl=null,On=new Map,Cn=new Map,Nl=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wd(e,t){switch(e){case"focusin":case"focusout":Sl=null;break;case"dragenter":case"dragleave":jl=null;break;case"mouseover":case"mouseout":zl=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function Bn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Pl(t),t!==null&&Jd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Rh(e,t,l,a,n){switch(t){case"focusin":return Sl=Bn(Sl,e,t,l,a,n),!0;case"dragenter":return jl=Bn(jl,e,t,l,a,n),!0;case"mouseover":return zl=Bn(zl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return On.set(i,Bn(On.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,Bn(Cn.get(i)||null,e,t,l,a,n)),!0}return!1}function Fd(e){var t=Fl(e.target);if(t!==null){var l=h(t);if(l!==null){if(t=l.tag,t===13){if(t=b(l),t!==null){e.blockedOn=t,j1(e.priority,function(){if(l.tag===13){var a=ft();a=Au(a);var n=oa(l,a);n!==null&&dt(n,l,a),_c(l,a)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Cc(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);qu=a,l.target.dispatchEvent(a),qu=null}else return t=Pl(l),t!==null&&Jd(t),e.blockedOn=l,!1;t.shift()}return!0}function Pd(e,t,l){tu(e)&&l.delete(t)}function Mh(){Uc=!1,Sl!==null&&tu(Sl)&&(Sl=null),jl!==null&&tu(jl)&&(jl=null),zl!==null&&tu(zl)&&(zl=null),On.forEach(Pd),Cn.forEach(Pd)}function lu(e,t){e.blockedOn===t&&(e.blockedOn=null,Uc||(Uc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Mh)))}var au=null;function Id(e){au!==e&&(au=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){au===e&&(au=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Bc(a||l)===null)continue;break}var i=Pl(l);i!==null&&(e.splice(t,3),t-=3,Br(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Un(e){function t(m){return lu(m,e)}Sl!==null&&lu(Sl,e),jl!==null&&lu(jl,e),zl!==null&&lu(zl,e),On.forEach(t),Cn.forEach(t);for(var l=0;l<Nl.length;l++){var a=Nl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Nl.length&&(l=Nl[0],l.blockedOn===null);)Fd(l),l.blockedOn===null&&Nl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[We]||null;if(typeof i=="function")c||Id(l);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[We]||null)f=c.formAction;else if(Bc(n)!==null)continue}else f=c.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),Id(l)}}}function kc(e){this._internalRoot=e}nu.prototype.render=kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var l=t.current,a=ft();Zd(l,a,e,t,null,null)},nu.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zd(e.current,2,null,e,null,null),Hi(),t[Wl]=null}};function nu(e){this._internalRoot=e}nu.prototype.unstable_scheduleHydration=function(e){if(e){var t=hs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Nl.length&&t!==0&&t<Nl[l].priority;l++);Nl.splice(l,0,e),l===0&&Fd(e)}};var ep=o.version;if(ep!=="19.1.1")throw Error(s(527,ep,"19.1.1"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Dh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Ha=iu.inject(Dh),nt=iu}catch{}}return qn.createRoot=function(e,t){if(!p(e))throw Error(s(299));var l=!1,a="",n=gf,i=xf,c=vf,f=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks)),t=Xd(e,1,!1,null,null,l,a,n,i,c,f,null),e[Wl]=t.current,yc(e),new kc(t)},qn.hydrateRoot=function(e,t,l){if(!p(e))throw Error(s(299));var a=!1,n="",i=gf,c=xf,f=vf,m=null,z=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(m=l.unstable_transitionCallbacks),l.formState!==void 0&&(z=l.formState)),t=Xd(e,1,!0,t,l??null,a,n,i,c,f,m,z),t.context=Vd(null),l=t.current,a=ft(),a=Au(a),n=rl(a),n.callback=null,cl(l,n,a),l=a,t.current.lanes=l,Ya(t,l),_t(t),e[Wl]=t.current,yc(e),new nu(t)},qn.version="19.1.1",qn}var op;function Yh(){if(op)return Lc.exports;op=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Lc.exports=Lh(),Lc.exports}var Gh=Yh();const Qh=Cp(Gh);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fp="popstate";function Xh(u={}){function o(s,p){let{pathname:h,search:b,hash:w}=s.location;return Fc("",{pathname:h,search:b,hash:w},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(s,p){return typeof p=="string"?p:Yn(p)}return Zh(o,d,null,u)}function Ne(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Ct(u,o){if(!u){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Vh(){return Math.random().toString(36).substring(2,10)}function dp(u,o){return{usr:u.state,key:u.key,idx:o}}function Fc(u,o,d=null,s){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof o=="string"?ka(o):o,state:d,key:o&&o.key||s||Vh()}}function Yn({pathname:u="/",search:o="",hash:d=""}){return o&&o!=="?"&&(u+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function ka(u){let o={};if(u){let d=u.indexOf("#");d>=0&&(o.hash=u.substring(d),u=u.substring(0,d));let s=u.indexOf("?");s>=0&&(o.search=u.substring(s),u=u.substring(0,s)),u&&(o.pathname=u)}return o}function Zh(u,o,d,s={}){let{window:p=document.defaultView,v5Compat:h=!1}=s,b=p.history,w="POP",y=null,g=R();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function R(){return(b.state||{idx:null}).idx}function C(){w="POP";let G=R(),U=G==null?null:G-g;g=G,y&&y({action:w,location:Y.location,delta:U})}function B(G,U){w="PUSH";let ue=Fc(Y.location,G,U);g=R()+1;let I=dp(ue,g),je=Y.createHref(ue);try{b.pushState(I,"",je)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;p.location.assign(je)}h&&y&&y({action:w,location:Y.location,delta:1})}function V(G,U){w="REPLACE";let ue=Fc(Y.location,G,U);g=R();let I=dp(ue,g),je=Y.createHref(ue);b.replaceState(I,"",je),h&&y&&y({action:w,location:Y.location,delta:0})}function X(G){return Kh(G)}let Y={get action(){return w},get location(){return u(p,b)},listen(G){if(y)throw new Error("A history only accepts one active listener");return p.addEventListener(fp,C),y=G,()=>{p.removeEventListener(fp,C),y=null}},createHref(G){return o(p,G)},createURL:X,encodeLocation(G){let U=X(G);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:B,replace:V,go(G){return b.go(G)}};return Y}function Kh(u,o=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(d,"No window.location.(origin|href) available to create URL");let s=typeof u=="string"?u:Yn(u);return s=s.replace(/ $/,"%20"),!o&&s.startsWith("//")&&(s=d+s),new URL(s,d)}function Bp(u,o,d="/"){return Jh(u,o,d,!1)}function Jh(u,o,d,s){let p=typeof o=="string"?ka(o):o,h=el(p.pathname||"/",d);if(h==null)return null;let b=Up(u);$h(b);let w=null;for(let y=0;w==null&&y<b.length;++y){let g=um(h);w=nm(b[y],g,s)}return w}function Up(u,o=[],d=[],s=""){let p=(h,b,w)=>{let y={relativePath:w===void 0?h.path||"":w,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};y.relativePath.startsWith("/")&&(Ne(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length));let g=It([s,y.relativePath]),R=d.concat(y);h.children&&h.children.length>0&&(Ne(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Up(h.children,o,R,g)),!(h.path==null&&!h.index)&&o.push({path:g,score:lm(g,h.index),routesMeta:R})};return u.forEach((h,b)=>{if(h.path===""||!h.path?.includes("?"))p(h,b);else for(let w of kp(h.path))p(h,b,w)}),o}function kp(u){let o=u.split("/");if(o.length===0)return[];let[d,...s]=o,p=d.endsWith("?"),h=d.replace(/\?$/,"");if(s.length===0)return p?[h,""]:[h];let b=kp(s.join("/")),w=[];return w.push(...b.map(y=>y===""?h:[h,y].join("/"))),p&&w.push(...b),w.map(y=>u.startsWith("/")&&y===""?"/":y)}function $h(u){u.sort((o,d)=>o.score!==d.score?d.score-o.score:am(o.routesMeta.map(s=>s.childrenIndex),d.routesMeta.map(s=>s.childrenIndex)))}var Wh=/^:[\w-]+$/,Fh=3,Ph=2,Ih=1,em=10,tm=-2,pp=u=>u==="*";function lm(u,o){let d=u.split("/"),s=d.length;return d.some(pp)&&(s+=tm),o&&(s+=Ph),d.filter(p=>!pp(p)).reduce((p,h)=>p+(Wh.test(h)?Fh:h===""?Ih:em),s)}function am(u,o){return u.length===o.length&&u.slice(0,-1).every((s,p)=>s===o[p])?u[u.length-1]-o[o.length-1]:0}function nm(u,o,d=!1){let{routesMeta:s}=u,p={},h="/",b=[];for(let w=0;w<s.length;++w){let y=s[w],g=w===s.length-1,R=h==="/"?o:o.slice(h.length)||"/",C=hu({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},R),B=y.route;if(!C&&g&&d&&!s[s.length-1].route.index&&(C=hu({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},R)),!C)return null;Object.assign(p,C.params),b.push({params:p,pathname:It([h,C.pathname]),pathnameBase:om(It([h,C.pathnameBase])),route:B}),C.pathnameBase!=="/"&&(h=It([h,C.pathnameBase]))}return b}function hu(u,o){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[d,s]=im(u.path,u.caseSensitive,u.end),p=o.match(d);if(!p)return null;let h=p[0],b=h.replace(/(.)\/+$/,"$1"),w=p.slice(1);return{params:s.reduce((g,{paramName:R,isOptional:C},B)=>{if(R==="*"){let X=w[B]||"";b=h.slice(0,h.length-X.length).replace(/(.)\/+$/,"$1")}const V=w[B];return C&&!V?g[R]=void 0:g[R]=(V||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:b,pattern:u}}function im(u,o=!1,d=!0){Ct(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let s=[],p="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,w,y)=>(s.push({paramName:w,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return u.endsWith("*")?(s.push({paramName:"*"}),p+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?p+="\\/*$":u!==""&&u!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,o?void 0:"i"),s]}function um(u){try{return u.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ct(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),u}}function el(u,o){if(o==="/")return u;if(!u.toLowerCase().startsWith(o.toLowerCase()))return null;let d=o.endsWith("/")?o.length-1:o.length,s=u.charAt(d);return s&&s!=="/"?null:u.slice(d)||"/"}function rm(u,o="/"){let{pathname:d,search:s="",hash:p=""}=typeof u=="string"?ka(u):u;return{pathname:d?d.startsWith("/")?d:cm(d,o):o,search:fm(s),hash:dm(p)}}function cm(u,o){let d=o.replace(/\/+$/,"").split("/");return u.split("/").forEach(p=>{p===".."?d.length>1&&d.pop():p!=="."&&d.push(p)}),d.length>1?d.join("/"):"/"}function Xc(u,o,d,s){return`Cannot include a '${u}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sm(u){return u.filter((o,d)=>d===0||o.route.path&&o.route.path.length>0)}function qp(u){let o=sm(u);return o.map((d,s)=>s===o.length-1?d.pathname:d.pathnameBase)}function Hp(u,o,d,s=!1){let p;typeof u=="string"?p=ka(u):(p={...u},Ne(!p.pathname||!p.pathname.includes("?"),Xc("?","pathname","search",p)),Ne(!p.pathname||!p.pathname.includes("#"),Xc("#","pathname","hash",p)),Ne(!p.search||!p.search.includes("#"),Xc("#","search","hash",p)));let h=u===""||p.pathname==="",b=h?"/":p.pathname,w;if(b==null)w=d;else{let C=o.length-1;if(!s&&b.startsWith("..")){let B=b.split("/");for(;B[0]==="..";)B.shift(),C-=1;p.pathname=B.join("/")}w=C>=0?o[C]:"/"}let y=rm(p,w),g=b&&b!=="/"&&b.endsWith("/"),R=(h||b===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(g||R)&&(y.pathname+="/"),y}var It=u=>u.join("/").replace(/\/\/+/g,"/"),om=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),fm=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,dm=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function pm(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var Lp=["POST","PUT","PATCH","DELETE"];new Set(Lp);var hm=["GET",...Lp];new Set(hm);var qa=T.createContext(null);qa.displayName="DataRouter";var yu=T.createContext(null);yu.displayName="DataRouterState";T.createContext(!1);var Yp=T.createContext({isTransitioning:!1});Yp.displayName="ViewTransition";var mm=T.createContext(new Map);mm.displayName="Fetchers";var gm=T.createContext(null);gm.displayName="Await";var Bt=T.createContext(null);Bt.displayName="Navigation";var Gn=T.createContext(null);Gn.displayName="Location";var Ut=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var ls=T.createContext(null);ls.displayName="RouteError";function xm(u,{relative:o}={}){Ne(Qn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:s}=T.useContext(Bt),{hash:p,pathname:h,search:b}=Xn(u,{relative:o}),w=h;return d!=="/"&&(w=h==="/"?d:It([d,h])),s.createHref({pathname:w,search:b,hash:p})}function Qn(){return T.useContext(Gn)!=null}function $l(){return Ne(Qn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Gn).location}var Gp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qp(u){T.useContext(Bt).static||T.useLayoutEffect(u)}function vm(){let{isDataRoute:u}=T.useContext(Ut);return u?_m():ym()}function ym(){Ne(Qn(),"useNavigate() may be used only in the context of a <Router> component.");let u=T.useContext(qa),{basename:o,navigator:d}=T.useContext(Bt),{matches:s}=T.useContext(Ut),{pathname:p}=$l(),h=JSON.stringify(qp(s)),b=T.useRef(!1);return Qp(()=>{b.current=!0}),T.useCallback((y,g={})=>{if(Ct(b.current,Gp),!b.current)return;if(typeof y=="number"){d.go(y);return}let R=Hp(y,JSON.parse(h),p,g.relative==="path");u==null&&o!=="/"&&(R.pathname=R.pathname==="/"?o:It([o,R.pathname])),(g.replace?d.replace:d.push)(R,g.state,g)},[o,d,h,p,u])}T.createContext(null);function bm(){let{matches:u}=T.useContext(Ut),o=u[u.length-1];return o?o.params:{}}function Xn(u,{relative:o}={}){let{matches:d}=T.useContext(Ut),{pathname:s}=$l(),p=JSON.stringify(qp(d));return T.useMemo(()=>Hp(u,JSON.parse(p),s,o==="path"),[u,p,s,o])}function Sm(u,o){return Xp(u,o)}function Xp(u,o,d,s){Ne(Qn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=T.useContext(Bt),{matches:h}=T.useContext(Ut),b=h[h.length-1],w=b?b.params:{},y=b?b.pathname:"/",g=b?b.pathnameBase:"/",R=b&&b.route;{let U=R&&R.path||"";Vp(y,!R||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let C=$l(),B;if(o){let U=typeof o=="string"?ka(o):o;Ne(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),B=U}else B=C;let V=B.pathname||"/",X=V;if(g!=="/"){let U=g.replace(/^\//,"").split("/");X="/"+V.replace(/^\//,"").split("/").slice(U.length).join("/")}let Y=Bp(u,{pathname:X});Ct(R||Y!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Ct(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=wm(Y&&Y.map(U=>Object.assign({},U,{params:Object.assign({},w,U.params),pathname:It([g,p.encodeLocation?p.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:It([g,p.encodeLocation?p.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),h,d,s);return o&&G?T.createElement(Gn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},G):G}function jm(){let u=Dm(),o=pm(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),d=u instanceof Error?u.stack:null,s="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:s},h={padding:"2px 4px",backgroundColor:s},b=null;return console.error("Error handled by React Router default ErrorBoundary:",u),b=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:h},"ErrorBoundary")," or"," ",T.createElement("code",{style:h},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},o),d?T.createElement("pre",{style:p},d):null,b)}var zm=T.createElement(jm,null),Nm=class extends T.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,o){return o.location!==u.location||o.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:o.error,location:o.location,revalidation:u.revalidation||o.revalidation}}componentDidCatch(u,o){console.error("React Router caught the following error during render",u,o)}render(){return this.state.error!==void 0?T.createElement(Ut.Provider,{value:this.props.routeContext},T.createElement(ls.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Em({routeContext:u,match:o,children:d}){let s=T.useContext(qa);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),T.createElement(Ut.Provider,{value:u},d)}function wm(u,o=[],d=null,s=null){if(u==null){if(!d)return null;if(d.errors)u=d.matches;else if(o.length===0&&!d.initialized&&d.matches.length>0)u=d.matches;else return null}let p=u,h=d?.errors;if(h!=null){let y=p.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);Ne(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,y+1))}let b=!1,w=-1;if(d)for(let y=0;y<p.length;y++){let g=p[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(w=y),g.route.id){let{loaderData:R,errors:C}=d,B=g.route.loader&&!R.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||B){b=!0,w>=0?p=p.slice(0,w+1):p=[p[0]];break}}}return p.reduceRight((y,g,R)=>{let C,B=!1,V=null,X=null;d&&(C=h&&g.route.id?h[g.route.id]:void 0,V=g.route.errorElement||zm,b&&(w<0&&R===0?(Vp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,X=null):w===R&&(B=!0,X=g.route.hydrateFallbackElement||null)));let Y=o.concat(p.slice(0,R+1)),G=()=>{let U;return C?U=V:B?U=X:g.route.Component?U=T.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=y,T.createElement(Em,{match:g,routeContext:{outlet:y,matches:Y,isDataRoute:d!=null},children:U})};return d&&(g.route.ErrorBoundary||g.route.errorElement||R===0)?T.createElement(Nm,{location:d.location,revalidation:d.revalidation,component:V,error:C,children:G(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):G()},null)}function as(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tm(u){let o=T.useContext(qa);return Ne(o,as(u)),o}function Am(u){let o=T.useContext(yu);return Ne(o,as(u)),o}function Rm(u){let o=T.useContext(Ut);return Ne(o,as(u)),o}function ns(u){let o=Rm(u),d=o.matches[o.matches.length-1];return Ne(d.route.id,`${u} can only be used on routes that contain a unique "id"`),d.route.id}function Mm(){return ns("useRouteId")}function Dm(){let u=T.useContext(ls),o=Am("useRouteError"),d=ns("useRouteError");return u!==void 0?u:o.errors?.[d]}function _m(){let{router:u}=Tm("useNavigate"),o=ns("useNavigate"),d=T.useRef(!1);return Qp(()=>{d.current=!0}),T.useCallback(async(p,h={})=>{Ct(d.current,Gp),d.current&&(typeof p=="number"?u.navigate(p):await u.navigate(p,{fromRouteId:o,...h}))},[u,o])}var hp={};function Vp(u,o,d){!o&&!hp[u]&&(hp[u]=!0,Ct(!1,d))}T.memo(Om);function Om({routes:u,future:o,state:d}){return Xp(u,void 0,d,o)}function wl(u){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cm({basename:u="/",children:o=null,location:d,navigationType:s="POP",navigator:p,static:h=!1}){Ne(!Qn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=u.replace(/^\/*/,"/"),w=T.useMemo(()=>({basename:b,navigator:p,static:h,future:{}}),[b,p,h]);typeof d=="string"&&(d=ka(d));let{pathname:y="/",search:g="",hash:R="",state:C=null,key:B="default"}=d,V=T.useMemo(()=>{let X=el(y,b);return X==null?null:{location:{pathname:X,search:g,hash:R,state:C,key:B},navigationType:s}},[b,y,g,R,C,B,s]);return Ct(V!=null,`<Router basename="${b}"> is not able to match the URL "${y}${g}${R}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:T.createElement(Bt.Provider,{value:w},T.createElement(Gn.Provider,{children:o,value:V}))}function Bm({children:u,location:o}){return Sm(Pc(u),o)}function Pc(u,o=[]){let d=[];return T.Children.forEach(u,(s,p)=>{if(!T.isValidElement(s))return;let h=[...o,p];if(s.type===T.Fragment){d.push.apply(d,Pc(s.props.children,h));return}Ne(s.type===wl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!s.props.index||!s.props.children,"An index route cannot have child routes.");let b={id:s.props.id||h.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(b.children=Pc(s.props.children,h)),d.push(b)}),d}var su="get",ou="application/x-www-form-urlencoded";function bu(u){return u!=null&&typeof u.tagName=="string"}function Um(u){return bu(u)&&u.tagName.toLowerCase()==="button"}function km(u){return bu(u)&&u.tagName.toLowerCase()==="form"}function qm(u){return bu(u)&&u.tagName.toLowerCase()==="input"}function Hm(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Lm(u,o){return u.button===0&&(!o||o==="_self")&&!Hm(u)}var uu=null;function Ym(){if(uu===null)try{new FormData(document.createElement("form"),0),uu=!1}catch{uu=!0}return uu}var Gm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vc(u){return u!=null&&!Gm.has(u)?(Ct(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`),null):u}function Qm(u,o){let d,s,p,h,b;if(km(u)){let w=u.getAttribute("action");s=w?el(w,o):null,d=u.getAttribute("method")||su,p=Vc(u.getAttribute("enctype"))||ou,h=new FormData(u)}else if(Um(u)||qm(u)&&(u.type==="submit"||u.type==="image")){let w=u.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=u.getAttribute("formaction")||w.getAttribute("action");if(s=y?el(y,o):null,d=u.getAttribute("formmethod")||w.getAttribute("method")||su,p=Vc(u.getAttribute("formenctype"))||Vc(w.getAttribute("enctype"))||ou,h=new FormData(w,u),!Ym()){let{name:g,type:R,value:C}=u;if(R==="image"){let B=g?`${g}.`:"";h.append(`${B}x`,"0"),h.append(`${B}y`,"0")}else g&&h.append(g,C)}}else{if(bu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=su,s=null,p=ou,b=u}return h&&p==="text/plain"&&(b=h,h=void 0),{action:s,method:d.toLowerCase(),encType:p,formData:h,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function is(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Xm(u,o,d){let s=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s.pathname==="/"?s.pathname=`_root.${d}`:o&&el(s.pathname,o)==="/"?s.pathname=`${o.replace(/\/$/,"")}/_root.${d}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${d}`,s}async function Vm(u,o){if(u.id in o)return o[u.id];try{let d=await import(u.module);return o[u.id]=d,d}catch(d){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zm(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Km(u,o,d){let s=await Promise.all(u.map(async p=>{let h=o.routes[p.route.id];if(h){let b=await Vm(h,d);return b.links?b.links():[]}return[]}));return Fm(s.flat(1).filter(Zm).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function mp(u,o,d,s,p,h){let b=(y,g)=>d[g]?y.route.id!==d[g].route.id:!0,w=(y,g)=>d[g].pathname!==y.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==y.params["*"];return h==="assets"?o.filter((y,g)=>b(y,g)||w(y,g)):h==="data"?o.filter((y,g)=>{let R=s.routes[y.route.id];if(!R||!R.hasLoader)return!1;if(b(y,g)||w(y,g))return!0;if(y.route.shouldRevalidate){let C=y.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function Jm(u,o,{includeHydrateFallback:d}={}){return $m(u.map(s=>{let p=o.routes[s.route.id];if(!p)return[];let h=[p.module];return p.clientActionModule&&(h=h.concat(p.clientActionModule)),p.clientLoaderModule&&(h=h.concat(p.clientLoaderModule)),d&&p.hydrateFallbackModule&&(h=h.concat(p.hydrateFallbackModule)),p.imports&&(h=h.concat(p.imports)),h}).flat(1))}function $m(u){return[...new Set(u)]}function Wm(u){let o={},d=Object.keys(u).sort();for(let s of d)o[s]=u[s];return o}function Fm(u,o){let d=new Set;return new Set(o),u.reduce((s,p)=>{let h=JSON.stringify(Wm(p));return d.has(h)||(d.add(h),s.push({key:h,link:p})),s},[])}function Zp(){let u=T.useContext(qa);return is(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Pm(){let u=T.useContext(yu);return is(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var us=T.createContext(void 0);us.displayName="FrameworkContext";function Kp(){let u=T.useContext(us);return is(u,"You must render this element inside a <HydratedRouter> element"),u}function Im(u,o){let d=T.useContext(us),[s,p]=T.useState(!1),[h,b]=T.useState(!1),{onFocus:w,onBlur:y,onMouseEnter:g,onMouseLeave:R,onTouchStart:C}=o,B=T.useRef(null);T.useEffect(()=>{if(u==="render"&&b(!0),u==="viewport"){let Y=U=>{U.forEach(ue=>{b(ue.isIntersecting)})},G=new IntersectionObserver(Y,{threshold:.5});return B.current&&G.observe(B.current),()=>{G.disconnect()}}},[u]),T.useEffect(()=>{if(s){let Y=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(Y)}}},[s]);let V=()=>{p(!0)},X=()=>{p(!1),b(!1)};return d?u!=="intent"?[h,B,{}]:[h,B,{onFocus:Hn(w,V),onBlur:Hn(y,X),onMouseEnter:Hn(g,V),onMouseLeave:Hn(R,X),onTouchStart:Hn(C,V)}]:[!1,B,{}]}function Hn(u,o){return d=>{u&&u(d),d.defaultPrevented||o(d)}}function e2({page:u,...o}){let{router:d}=Zp(),s=T.useMemo(()=>Bp(d.routes,u,d.basename),[d.routes,u,d.basename]);return s?T.createElement(l2,{page:u,matches:s,...o}):null}function t2(u){let{manifest:o,routeModules:d}=Kp(),[s,p]=T.useState([]);return T.useEffect(()=>{let h=!1;return Km(u,o,d).then(b=>{h||p(b)}),()=>{h=!0}},[u,o,d]),s}function l2({page:u,matches:o,...d}){let s=$l(),{manifest:p,routeModules:h}=Kp(),{basename:b}=Zp(),{loaderData:w,matches:y}=Pm(),g=T.useMemo(()=>mp(u,o,y,p,s,"data"),[u,o,y,p,s]),R=T.useMemo(()=>mp(u,o,y,p,s,"assets"),[u,o,y,p,s]),C=T.useMemo(()=>{if(u===s.pathname+s.search+s.hash)return[];let X=new Set,Y=!1;if(o.forEach(U=>{let ue=p.routes[U.route.id];!ue||!ue.hasLoader||(!g.some(I=>I.route.id===U.route.id)&&U.route.id in w&&h[U.route.id]?.shouldRevalidate||ue.hasClientLoader?Y=!0:X.add(U.route.id))}),X.size===0)return[];let G=Xm(u,b,"data");return Y&&X.size>0&&G.searchParams.set("_routes",o.filter(U=>X.has(U.route.id)).map(U=>U.route.id).join(",")),[G.pathname+G.search]},[b,w,s,p,g,o,u,h]),B=T.useMemo(()=>Jm(R,p),[R,p]),V=t2(R);return T.createElement(T.Fragment,null,C.map(X=>T.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...d})),B.map(X=>T.createElement("link",{key:X,rel:"modulepreload",href:X,...d})),V.map(({key:X,link:Y})=>T.createElement("link",{key:X,...Y})))}function a2(...u){return o=>{u.forEach(d=>{typeof d=="function"?d(o):d!=null&&(d.current=o)})}}var Jp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jp&&(window.__reactRouterVersion="7.7.1")}catch{}function n2({basename:u,children:o,window:d}){let s=T.useRef();s.current==null&&(s.current=Xh({window:d,v5Compat:!0}));let p=s.current,[h,b]=T.useState({action:p.action,location:p.location}),w=T.useCallback(y=>{T.startTransition(()=>b(y))},[b]);return T.useLayoutEffect(()=>p.listen(w),[p,w]),T.createElement(Cm,{basename:u,children:o,location:h.location,navigationType:h.action,navigator:p})}var $p=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=T.forwardRef(function({onClick:o,discover:d="render",prefetch:s="none",relative:p,reloadDocument:h,replace:b,state:w,target:y,to:g,preventScrollReset:R,viewTransition:C,...B},V){let{basename:X}=T.useContext(Bt),Y=typeof g=="string"&&$p.test(g),G,U=!1;if(typeof g=="string"&&Y&&(G=g,Jp))try{let Ee=new URL(window.location.href),lt=g.startsWith("//")?new URL(Ee.protocol+g):new URL(g),ht=el(lt.pathname,X);lt.origin===Ee.origin&&ht!=null?g=ht+lt.search+lt.hash:U=!0}catch{Ct(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ue=xm(g,{relative:p}),[I,je,F]=Im(s,B),Be=c2(g,{replace:b,state:w,target:y,preventScrollReset:R,relative:p,viewTransition:C});function _e(Ee){o&&o(Ee),Ee.defaultPrevented||Be(Ee)}let Ue=T.createElement("a",{...B,...F,href:G||ue,onClick:U||h?o:_e,ref:a2(V,je),target:y,"data-discover":!Y&&d==="render"?"true":void 0});return I&&!Y?T.createElement(T.Fragment,null,Ue,T.createElement(e2,{page:ue})):Ue});Se.displayName="Link";var i2=T.forwardRef(function({"aria-current":o="page",caseSensitive:d=!1,className:s="",end:p=!1,style:h,to:b,viewTransition:w,children:y,...g},R){let C=Xn(b,{relative:g.relative}),B=$l(),V=T.useContext(yu),{navigator:X,basename:Y}=T.useContext(Bt),G=V!=null&&p2(C)&&w===!0,U=X.encodeLocation?X.encodeLocation(C).pathname:C.pathname,ue=B.pathname,I=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;d||(ue=ue.toLowerCase(),I=I?I.toLowerCase():null,U=U.toLowerCase()),I&&Y&&(I=el(I,Y)||I);const je=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let F=ue===U||!p&&ue.startsWith(U)&&ue.charAt(je)==="/",Be=I!=null&&(I===U||!p&&I.startsWith(U)&&I.charAt(U.length)==="/"),_e={isActive:F,isPending:Be,isTransitioning:G},Ue=F?o:void 0,Ee;typeof s=="function"?Ee=s(_e):Ee=[s,F?"active":null,Be?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let lt=typeof h=="function"?h(_e):h;return T.createElement(Se,{...g,"aria-current":Ue,className:Ee,ref:R,style:lt,to:b,viewTransition:w},typeof y=="function"?y(_e):y)});i2.displayName="NavLink";var u2=T.forwardRef(({discover:u="render",fetcherKey:o,navigate:d,reloadDocument:s,replace:p,state:h,method:b=su,action:w,onSubmit:y,relative:g,preventScrollReset:R,viewTransition:C,...B},V)=>{let X=f2(),Y=d2(w,{relative:g}),G=b.toLowerCase()==="get"?"get":"post",U=typeof w=="string"&&$p.test(w),ue=I=>{if(y&&y(I),I.defaultPrevented)return;I.preventDefault();let je=I.nativeEvent.submitter,F=je?.getAttribute("formmethod")||b;X(je||I.currentTarget,{fetcherKey:o,method:F,navigate:d,replace:p,state:h,relative:g,preventScrollReset:R,viewTransition:C})};return T.createElement("form",{ref:V,method:G,action:Y,onSubmit:s?y:ue,...B,"data-discover":!U&&u==="render"?"true":void 0})});u2.displayName="Form";function r2(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wp(u){let o=T.useContext(qa);return Ne(o,r2(u)),o}function c2(u,{target:o,replace:d,state:s,preventScrollReset:p,relative:h,viewTransition:b}={}){let w=vm(),y=$l(),g=Xn(u,{relative:h});return T.useCallback(R=>{if(Lm(R,o)){R.preventDefault();let C=d!==void 0?d:Yn(y)===Yn(g);w(u,{replace:C,state:s,preventScrollReset:p,relative:h,viewTransition:b})}},[y,w,g,d,s,o,u,p,h,b])}var s2=0,o2=()=>`__${String(++s2)}__`;function f2(){let{router:u}=Wp("useSubmit"),{basename:o}=T.useContext(Bt),d=Mm();return T.useCallback(async(s,p={})=>{let{action:h,method:b,encType:w,formData:y,body:g}=Qm(s,o);if(p.navigate===!1){let R=p.fetcherKey||o2();await u.fetch(R,d,p.action||h,{preventScrollReset:p.preventScrollReset,formData:y,body:g,formMethod:p.method||b,formEncType:p.encType||w,flushSync:p.flushSync})}else await u.navigate(p.action||h,{preventScrollReset:p.preventScrollReset,formData:y,body:g,formMethod:p.method||b,formEncType:p.encType||w,replace:p.replace,state:p.state,fromRouteId:d,flushSync:p.flushSync,viewTransition:p.viewTransition})},[u,o,d])}function d2(u,{relative:o}={}){let{basename:d}=T.useContext(Bt),s=T.useContext(Ut);Ne(s,"useFormAction must be used inside a RouteContext");let[p]=s.matches.slice(-1),h={...Xn(u||".",{relative:o})},b=$l();if(u==null){h.search=b.search;let w=new URLSearchParams(h.search),y=w.getAll("index");if(y.some(R=>R==="")){w.delete("index"),y.filter(C=>C).forEach(C=>w.append("index",C));let R=w.toString();h.search=R?`?${R}`:""}}return(!u||u===".")&&p.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:It([d,h.pathname])),Yn(h)}function p2(u,{relative:o}={}){let d=T.useContext(Yp);Ne(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Wp("useViewTransitionState"),p=Xn(u,{relative:o});if(!d.isTransitioning)return!1;let h=el(d.currentLocation.pathname,s)||d.currentLocation.pathname,b=el(d.nextLocation.pathname,s)||d.nextLocation.pathname;return hu(p.pathname,b)!=null||hu(p.pathname,h)!=null}var Fp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gp=Tl.createContext&&Tl.createContext(Fp),h2=["attr","size","title"];function m2(u,o){if(u==null)return{};var d=g2(u,o),s,p;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(u);for(p=0;p<h.length;p++)s=h[p],!(o.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(u,s)&&(d[s]=u[s])}return d}function g2(u,o){if(u==null)return{};var d={};for(var s in u)if(Object.prototype.hasOwnProperty.call(u,s)){if(o.indexOf(s)>=0)continue;d[s]=u[s]}return d}function mu(){return mu=Object.assign?Object.assign.bind():function(u){for(var o=1;o<arguments.length;o++){var d=arguments[o];for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&(u[s]=d[s])}return u},mu.apply(this,arguments)}function xp(u,o){var d=Object.keys(u);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(u);o&&(s=s.filter(function(p){return Object.getOwnPropertyDescriptor(u,p).enumerable})),d.push.apply(d,s)}return d}function gu(u){for(var o=1;o<arguments.length;o++){var d=arguments[o]!=null?arguments[o]:{};o%2?xp(Object(d),!0).forEach(function(s){x2(u,s,d[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(d)):xp(Object(d)).forEach(function(s){Object.defineProperty(u,s,Object.getOwnPropertyDescriptor(d,s))})}return u}function x2(u,o,d){return o=v2(o),o in u?Object.defineProperty(u,o,{value:d,enumerable:!0,configurable:!0,writable:!0}):u[o]=d,u}function v2(u){var o=y2(u,"string");return typeof o=="symbol"?o:o+""}function y2(u,o){if(typeof u!="object"||!u)return u;var d=u[Symbol.toPrimitive];if(d!==void 0){var s=d.call(u,o);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(u)}function Pp(u){return u&&u.map((o,d)=>Tl.createElement(o.tag,gu({key:d},o.attr),Pp(o.child)))}function oe(u){return o=>Tl.createElement(b2,mu({attr:gu({},u.attr)},o),Pp(u.child))}function b2(u){var o=d=>{var{attr:s,size:p,title:h}=u,b=m2(u,h2),w=p||d.size||"1em",y;return d.className&&(y=d.className),u.className&&(y=(y?y+" ":"")+u.className),Tl.createElement("svg",mu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,s,b,{className:y,style:gu(gu({color:u.color||d.color},d.style),u.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),h&&Tl.createElement("title",null,h),u.children)};return gp!==void 0?Tl.createElement(gp.Consumer,null,d=>o(d)):o(Fp)}function S2(u){return oe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(u)}function j2(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(u)}function z2(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(u)}function Ic(u){return oe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(u)}function Ip(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(u)}function N2(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(u)}function e1(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(u)}function E2(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(u)}function w2(u){return oe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(u)}function T2(u){return oe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(u)}function A2(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(u)}function t1(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(u)}function xu(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(u)}function l1(u){return oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(u)}function R2(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(u)}function vu(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(u)}function Ot(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(u)}function Su(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(u)}function a1(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"},child:[]}]})(u)}function n1(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(u)}function i1(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(u)}function u1(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(u)}function r1(u){return oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(u)}function c1(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(u)}function M2(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(u)}function s1(u){return oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(u)}function D2(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M144 32S94.11 69.4 96 96c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zM73.293 201c1.43 63.948 18.943 179.432 74.707 238h152c55.764-58.568 73.278-174.052 74.707-238H73.293zm319.598.445c-.186 9.152-.652 19.252-1.472 30.057C419.312 235.162 441 259.142 441 288c0 31.374-25.626 57-57 57-4.387 0-8.656-.517-12.764-1.465-2.912 9.62-6.176 19.165-9.84 28.51C368.602 373.97 376.176 375 384 375c48.155 0 87-38.845 87-87 0-45.153-34.153-82.12-78.11-86.555zM42.763 457c1.507 5.193 3.854 11.2 6.955 16.37 2.637 4.394 5.69 8.207 8.428 10.58C60.882 486.32 63 487 64 487h320c1 0 3.118-.678 5.855-3.05 2.738-2.373 5.79-6.186 8.428-10.58 3.1-5.17 5.448-11.177 6.955-16.37H42.762z"},child:[]}]})(u)}function _2(u){return oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M238.406 26.844c-9.653.12-18.926 2.69-30.437 7.062l-157.282 57c-20.984 7.65-21.587 11.834-22.344 33.28L20.937 358.22c-1.207 27.514-.654 33.187 23.25 43.56L229.97 483.19c19.34 8.29 31.906 7.655 45.186 3.218l181.938-56.53c21.95-7.295 25.04-9.627 25.875-36.845l7.686-250.155c.662-17.37-5.667-24.695-18.78-29.625L271.062 34.375c-12.977-5.344-23.003-7.653-32.657-7.53zm.813 24.875c23.637-.053 45.564 8.434 87.874 24.874 95.545 37.123 131.71 53.8 69.687 77.937-74.002 28.802-128.175 45.115-172.28 25.814L113.47 131.75c-34.57-15.127-44.69-27.46 17.843-50.094 55.64-20.14 82.742-29.882 107.906-29.937zm44.718 43.75c-38.284.402-55.285 21.205-56.813 38.936-.873 10.132 2.95 19.6 12.406 26.25 9.456 6.65 25.355 10.56 48.97 5.938 35.817-7.01 61.536-15.056 77.5-22.844 7.982-3.894 13.464-7.737 16.5-10.844 3.036-3.107 3.453-4.942 3.438-6-.016-1.057-.44-2.675-3.313-5.406-2.873-2.73-8.03-6.04-15.22-9.156-14.378-6.233-36.757-11.877-65.717-15.72-6.355-.842-12.28-1.213-17.75-1.155zM59.25 134c10.372-.29 29.217 7.2 63.906 22.656 140.925 62.786 140.52 65.876 130.97 200.656-7.783 109.81-8.797 109.85-128.47 59.282-73.15-30.91-86.806-40.853-85.187-88.97l5.468-162.937c.674-20.034 1.557-30.358 13.312-30.687zm381.938 30.906c29.172-.384 29.1 28.075 26.75 105.25-4.118 135.132-9.05 140.184-120.375 173.72-70.42 21.21-81.49 25.614-78.97-12.032l11-164.156c3.217-48.034 7.588-51.508 94.813-83.907 31.323-11.633 52.534-18.686 66.78-18.874zm-20.438 40.688c-.332-.002-.674.015-1 .03-5.22.263-10.226 2.77-14.188 8.407-3.96 5.638-6.81 14.71-5.687 27.907 1.448 17.033-4.507 38.11-15.156 56.938-10.65 18.827-26.502 35.91-47.814 38.813-29.127 3.968-42.41 23.58-43.5 42.062-.545 9.24 2.108 18.03 7.688 24.594s14.088 11.335 27.187 12.03c41.146 2.185 71.336-10.766 91.595-39.155 20.26-28.39 30.396-73.76 25.875-136.595-1.876-26.076-14.708-34.977-25-35.03zm-246.25 8.844c-.644 0-1.218.063-1.72.187-2.003.494-3.685 1.53-5.655 4.813-1.913 3.186-3.688 8.618-4.406 16.343l-.064.657c-1.388 16.732-8.098 28.602-17.844 35.063-9.745 6.46-20.794 7.808-31.125 9.094-10.33 1.286-20.177 2.39-28.156 5.75-7.977 3.36-14.36 8.38-19.468 19.78-7.2 16.076-7.143 28.027-3.124 38.563 4.018 10.537 12.688 20.106 24.687 28.75 23.998 17.29 60.27 29.956 88.906 41.844 11.386 4.727 20.496 6.484 27.282 6.126 6.787-.358 11.278-2.423 15.375-6.562 8.195-8.28 14.057-27.692 15-57.344 2.024-63.623-18.84-110.284-38.656-130.875-8.668-9.008-16.52-12.193-21.03-12.188zm184.22 6.812c-.95-.003-1.927.035-2.97.094-35.464 1.99-48.477 12.867-52.5 24.062-4.023 11.196.826 27.07 10.844 39.78 11.488 14.58 20.59 15.736 30.437 12.283 9.848-3.455 20.542-14.108 27.376-26.908s9.512-27.397 7.188-36.28c-1.163-4.443-3.144-7.422-6.47-9.626-2.908-1.928-7.274-3.388-13.905-3.406z"},child:[]}]})(u)}function O2(u){return oe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(u)}function C2(u){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(u)}function B2(u){return oe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},child:[]}]})(u)}const Zc=14,U2=Array.from({length:Zc},(u,o)=>({id:o,left:`${o/Zc*100+Math.random()*(100/Zc)}%`,size:18+Math.floor(Math.random()*22),duration:12+Math.random()*16,delay:-(Math.random()*20),opacity:.08+Math.random()*.14})),k2=`
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
`;function q2(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:k2}),U2.map(u=>r.jsx("div",{className:"floater",style:{left:u.left,fontSize:u.size,opacity:u.opacity,animationDuration:`${u.duration}s, ${u.duration*.6}s`,animationDelay:`${u.delay}s, ${u.delay*.4}s`},children:r.jsx(D2,{})},u.id))]})}const H2=`
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
`,vp=["Software Engineer","Gamer","Coffee Connoisseur","Frenchie dad"];function L2(){const[u,o]=T.useState(""),[d,s]=T.useState(0),[p,h]=T.useState(0),[b,w]=T.useState(!1);return T.useEffect(()=>{document.title="Rosendo Inzunza | Portfolio",document.documentElement.classList.add("dark")},[]),T.useEffect(()=>{const y=vp[d%vp.length],g=setTimeout(()=>{b?(o(y.slice(0,p-1)),h(p-1)):(o(y.slice(0,p+1)),h(p+1)),!b&&p===y.length?setTimeout(()=>w(!0),1e3):b&&p===0&&(w(!1),s(d+1))},b?50:100);return()=>clearTimeout(g)},[p,b,d]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:H2}),r.jsxs("div",{className:"home-page",children:[r.jsx(q2,{}),r.jsxs("div",{className:"home-card",style:{position:"relative",zIndex:1},children:[r.jsxs("div",{className:"home-profile",children:[r.jsx("img",{src:"./ro.jpg",alt:"Rosendo Inzunza",className:"home-avatar"}),r.jsxs("div",{children:[r.jsx("div",{className:"home-name",children:"Rosendo Inzunza"}),r.jsxs("div",{className:"home-typewriter",children:[u,r.jsx("span",{style:{opacity:.6},children:"|"})]})]})]}),r.jsx("div",{className:"home-divider"}),r.jsxs("div",{className:"home-info",children:[r.jsxs("div",{className:"home-info-item",children:[r.jsx(C2,{size:14})," Software Engineer at Cloudflare"]}),r.jsxs("div",{className:"home-info-item",children:[r.jsx(O2,{size:14})," Based in California, US"]}),r.jsxs("div",{className:"home-info-item",children:[r.jsx(B2,{size:14})," rosendoinzunza@gmail.com"]}),r.jsxs("div",{className:"home-info-item",children:[r.jsx(_2,{size:14})," Fueled by coffee"]})]}),r.jsx("div",{className:"home-divider"}),r.jsxs("div",{className:"home-socials",children:[r.jsx("a",{href:"https://github.com/roinzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:r.jsx(S2,{})}),r.jsx("a",{href:"https://www.linkedin.com/in/rosendoinzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:r.jsx(z2,{})}),r.jsx("a",{href:"https://instagram.com/ro.inzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:r.jsx(j2,{})})]}),r.jsxs("div",{className:"home-nav",children:[r.jsx(Se,{to:"/about",className:"home-nav-link",children:"About Me →"}),r.jsx(Se,{to:"/resume",className:"home-nav-link",children:"Resume →"}),r.jsx(Se,{to:"/projects",className:"home-nav-link",children:"What I'm Building →"})]})]})]})]})}const Y2={whoami:["Rosendo Inzunza is a software engineer who loves solving real-world problems through thoughtful design and performant code.","I enjoy building beautiful user experiences, contributing to impactful projects, and sipping cold brew while learning new things."],projects:["SideQuest (iOS/Swift + Rust) – A local job discovery platform with swiping, messaging, and profile matching."],skills:["Skills/Tools:","- Rust, Python, TypeScript","- Docker, Sentry, Grafana","- Axum, Actix, Poem, FastAPI, Flask","- PostgreSQL, Diesel, Alembic, SeaORM","- AWS (SNS, S3, EC2)","","*** Pulls a great double shot of espresso"],contact:["📧 rosendoinzunza@gmail.com","🔗 linkedin.com/in/rosendoinzunza","🐙 github.com/roinzunza","📍 Based in California, US"],coffee:["Between an oatmilk cortado and an iced latte with almond milk ☕"],ascii:["    _______  ________  ________  ________ ","  ╱╱       ╲╱        ╲╱        ╲╱    ╱   ╲"," ╱╱        ╱         _╱       ╱╱         ╱","╱        _╱         ╱         ╱         ╱ ","╲____╱___╱╲________╱╲________╱╲__╱_____╱  "],help:["Available commands:","- whoami     → About Rosendo","- projects   → Current projects","- skills     → Technical background","- contact    → Contact information","- coffee     → Coffee order","- ascii      → ASCII logo","- help       → This menu"]},G2=`
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
`;function Q2(){const[u,o]=T.useState([]),[d,s]=T.useState(""),[p,h]=T.useState(""),b=T.useRef(null),w=T.useRef(null),y="➜ ~ whoami";T.useEffect(()=>{let C=0;const B=setInterval(()=>{h(y.slice(0,C+1)),C++,C===y.length&&(clearInterval(B),setTimeout(()=>g("whoami"),600))},80);return()=>clearInterval(B)},[]);const g=C=>{const B=C.trim().toLowerCase(),V=Y2[B],X=typeof V=="string"?[V]:V||[`zsh: command not found: ${C} — try 'help'`];o(Y=>[...Y,`➜ ~ ${C}`]),X.forEach((Y,G)=>{setTimeout(()=>{o(U=>[...U,Y])},150*G)})},R=C=>{C.preventDefault(),d.trim()&&(g(d),s(""))};return T.useEffect(()=>{w.current&&(w.current.scrollTop=w.current.scrollHeight)},[u]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:G2}),r.jsx("div",{className:"about-page",children:r.jsxs("div",{className:"about-inner",children:[r.jsx("div",{className:"about-title",children:"About Me"}),r.jsxs("div",{className:"terminal",children:[r.jsxs("div",{className:"terminal-bar",children:[r.jsx("div",{className:"terminal-dot",style:{background:"#ff5f57"}}),r.jsx("div",{className:"terminal-dot",style:{background:"#febc2e"}}),r.jsx("div",{className:"terminal-dot",style:{background:"#28c840"}})]}),r.jsxs("div",{className:"terminal-body",ref:w,children:[r.jsxs("div",{children:[r.jsx("span",{className:"terminal-prompt",children:p}),p.length<y.length&&r.jsx("span",{style:{opacity:.6},children:"|"})]}),u.map((C,B)=>r.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap"},children:C.startsWith("➜ ~")?r.jsx(r.Fragment,{children:r.jsx("span",{className:"terminal-prompt",children:C})}):C},B)),r.jsxs("form",{onSubmit:R,className:"terminal-input-row",children:[r.jsx("span",{className:"terminal-prompt",children:"➜ ~"}),r.jsx("input",{type:"text",ref:b,autoFocus:!0,value:d,onChange:C=>s(C.target.value),className:"terminal-input",placeholder:"type a command (try 'help')..."})]})]})]}),r.jsx(Se,{to:"/",className:"about-back",children:"← Back to Home"})]})})]})}const ju={name:"Rosendo Inzunza",email:"RosendoInzunza@gmail.com",website:"www.rosendoinzunza.com",phone:"714-342-7492",summary:"Systems Engineer specializing in critical infrastructure at global scale—fleet control planes, distributed systems, ML training and inference. Driving complex architectural changes end to end, from RFC authorship and stakeholder alignment to production delivery, consistently unblocking initiatives that stalled due to scale or blast radius risk.",experience:[{title:"Systems Engineer - Infrastructure",company:"Cloudflare",logo:"Cloudflare.png",coverBg:"#ffffff",location:"Remote, US",period:"07/2024 – 05/2026",summary:"Owned reliability, performance, and architectural evolution of the infrastructure control plane — the authoritative system for fleet configuration and asset management across Cloudflare's global network.",bullets:["Improved control plane API performance 10x (5s to 500ms) by rearchitecting the data-fetching layer to parallelize requests, with an automatic fallback to serial processing under database load.","Led the Ray ID redesign end to end: identified the exhaustion risk, wrote the RFC, designed a backward-compatible migration, with zero customer impact, retiring 3 years of deferred technical debt.","Drove consolidation of the company's logical asset data model, authoring the RFC and leading cross-team alignment to unify legacy and modern systems under a single authoritative control plane — reducing sync errors and manual provisioning intervention by 80%.","Eliminated a critical circular dependency between the control plane and Release Manager by defining a new cross-team deployment contract, including automated migration halts and a full-stack recovery path for outage scenarios.","Built high-throughput reconciliation workers to sync DCIM systems and automate orphan asset cleanup, ending persistent manual drift that had required ongoing operational intervention.","Expanded internal platform adoption by building an MCP server over the control plane API, enabling teams to integrate without writing custom clients or CLI tooling.","Established an AI-assisted development workflow across the team — covering codebase context indexing, pre-commit verification, and test generation — materially reducing onboarding and review cycle time."]},{title:"Site Reliability Engineer - Applied Machine Learning",company:"TikTok",logo:"tiktok.jpg",coverBg:"#ffffff",location:"Remote, US",period:"07/2022 – 07/2024",bullets:["Designed and shipped a diagnostics platform adopted by 200+ engineers, reducing mean time to resolution by 72% (80 min to 22 min) by centralizing root cause analysis workflows.","Authored the RFC and implemented self-healing automation for parameter servers and distributed training jobs, reducing manual incident volume by 25%.","Consolidated 4 divergent regional codebases for the parameter server observability system into a single unified release with per-region DNS routing — ending configuration drift and simplifying cross-region deployments.","Served as primary on-call for ML training and parameter server infrastructure, owning incident response for Ads and Video Recommendation systems supporting millions of users."]},{title:"Full Stack Software Engineer",company:"Digital Force Technologies",logo:"digital_force_technologies.jpg",coverBg:"#000000",location:"Remote, US",period:"10/2021 – 07/2022",bullets:["Built and maintained a Flask API for hardware configuration management in radar systems.","Automated the ARM64 Debian package release process, integrating with legacy build infrastructure."]},{title:"Automation Engineer",company:"CoreLogic",logo:"corelogic.png",coverBg:"#ffffff",location:"Irvine, CA",period:"09/2020 – 10/2021",bullets:["Built data pipelines to parse and reconcile multi-schema customer files into a unified format.","Trained a CNN on home images to predict property value.","Established GitLab CI/CD for the team."]}],skills:{Languages:["Rust","Python","Go","TypeScript","Swift","C++"],"Frameworks / Libraries":["Axum","Actix","SeaORM","Diesel","FastAPI","Flask","Django","React"],Infrastructure:["Kubernetes","Docker","SaltStack","gRPC","Protobuf","PostgreSQL","Redis"],Observability:["Prometheus","Grafana","Splunk","Sentry"],"Machine Learning":["TensorFlow","PyTorch"],Tools:["Claude","Codex","OpenCode"]},project:{name:"SideQuest",logo:"sidequest_logo.png",coverBg:"#000000",role:"Founder & Full-Stack Engineer",tech:"iOS · Swift · Rust · Axum · SeaORM · PostgreSQL",url:"https://www.sidequestapp.io/",bullets:["Founded and shipped a two-sided iOS job marketplace connecting local businesses with hourly workers — live on the App Store.","Architected a Rust/Axum backend with a service-oriented route pattern, PostgreSQL via SeaORM, JWT auth, and Apple/Google SSO with PKCE.","Built real-time in-app messaging using WebSockets with a concurrent DashMap hub and APNs push notification delivery.","Integrated Stripe and RevenueCat for tiered subscriptions, IAP add-ons, and entitlement management across business and applicant roles."]},education:{degree:"Bachelor of Science in Computer Science",school:"California State University, Fullerton"}},{name:X2,email:yp,website:bp,phone:V2,summary:Z2,experience:K2,skills:J2,project:Ba,education:Sp}=ju,$2=`
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
`;function W2(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:$2}),r.jsx("div",{className:"rv-page",children:r.jsxs("div",{className:"rv-inner",children:[r.jsxs("div",{className:"rv-card",children:[r.jsx("div",{className:"rv-name",children:X2}),r.jsxs("div",{className:"rv-contact",children:[r.jsx("a",{href:`mailto:${yp}`,children:yp}),r.jsx("a",{href:`https://${bp}`,target:"_blank",rel:"noopener noreferrer",children:bp}),r.jsx("span",{children:V2})]})]}),r.jsxs("div",{className:"rv-card",children:[r.jsx("div",{className:"rv-section-label",children:"Summary"}),r.jsx("div",{className:"rv-summary",children:Z2})]}),r.jsxs("div",{className:"rv-card",children:[r.jsx("div",{className:"rv-section-label",children:"Experience"}),K2.map((u,o)=>r.jsxs("div",{className:"rv-job",children:[r.jsxs("div",{className:"rv-job-header",children:[r.jsx("div",{className:"rv-job-title",children:u.title}),r.jsx("div",{className:"rv-job-period",children:u.period})]}),r.jsxs("div",{className:"rv-job-company",children:[u.company," · ",u.location]}),u.summary&&r.jsx("div",{className:"rv-job-summary",children:u.summary}),r.jsx("ul",{className:"rv-bullets",children:u.bullets.map((d,s)=>r.jsxs("li",{children:[r.jsx("span",{className:"rv-bullet-dash",children:"—"}),r.jsx("span",{children:d})]},s))})]},o))]}),r.jsxs("div",{className:"rv-card",children:[r.jsx("div",{className:"rv-section-label",children:"Technical Skills"}),Object.entries(J2).map(([u,o])=>r.jsxs("div",{className:"rv-skill-group",children:[r.jsx("div",{className:"rv-skill-label",children:u}),r.jsx("div",{className:"rv-chips",children:o.map(d=>r.jsx("span",{className:"rv-chip",children:d},d))})]},u))]}),r.jsxs("div",{className:"rv-card",children:[r.jsx("div",{className:"rv-section-label",children:"Startup Project"}),r.jsxs("div",{className:"rv-project-header",children:[r.jsx("div",{className:"rv-project-name",children:Ba.name}),r.jsx("a",{href:Ba.url,target:"_blank",rel:"noopener noreferrer",className:"rv-project-url",children:Ba.url.replace("https://","")})]}),r.jsxs("div",{className:"rv-project-role",children:[Ba.role," · ",Ba.tech]}),r.jsx("ul",{className:"rv-bullets",children:Ba.bullets.map((u,o)=>r.jsxs("li",{children:[r.jsx("span",{className:"rv-bullet-dash",children:"—"}),r.jsx("span",{children:u})]},o))})]}),r.jsxs("div",{className:"rv-card",children:[r.jsx("div",{className:"rv-section-label",children:"Education"}),r.jsx("div",{className:"rv-edu-degree",children:Sp.degree}),r.jsx("div",{className:"rv-edu-school",children:Sp.school})]}),r.jsx(Se,{to:"/",className:"rv-back",children:"← Back to Home"})]})})]})}const{name:Ln,email:jp,website:zp,phone:F2,summary:P2,experience:Ua,skills:I2,project:tt,education:Kc}=ju,Jc=Object.values(I2).flat(),fu=u=>u.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Np=fu(tt.name),eg=`
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
      padding: 88px 20px 20px;
    }
    .sp-hero-avatar { width: 160px; height: 160px; }
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
`,Jl=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Ep=["linear-gradient(135deg, #1DB954 0%, #064E3B 100%)","linear-gradient(135deg, #FBBF24 0%, #92400E 100%)","linear-gradient(135deg, #38BDF8 0%, #0C4A6E 100%)","linear-gradient(135deg, #F472B6 0%, #831843 100%)"];function wp(u){const o=u*47+123,d=Math.floor(o/60),s=o%60;return`${d}:${s.toString().padStart(2,"0")}`}function tg(u){return([2847193,1402557,894201,612488,320115][u]??15e4).toLocaleString()}function lg(){const[u,o]=T.useState(!1),[d,s]=T.useState(!0);T.useEffect(()=>{document.title=`${Ln} | Spotify Resume`},[]);const p=12847392 .toLocaleString();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:eg}),r.jsxs("div",{className:"sp-page",children:[r.jsxs("aside",{className:"sp-sidebar",children:[r.jsxs("div",{className:"sp-sidebar-card",children:[r.jsxs(Se,{to:"/",className:"sp-nav-item",children:[r.jsx(l1,{})," Home"]}),r.jsxs("div",{className:"sp-nav-item",children:[r.jsx(i1,{})," Search"]})]}),r.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[r.jsxs("div",{className:"sp-library-header",children:[r.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[r.jsx(Ip,{})," Your Library"]}),r.jsx("button",{className:"sp-icon-btn",children:r.jsx(Su,{})})]}),r.jsxs("div",{style:{marginTop:8},children:[r.jsxs("div",{className:"sp-playlist-item",children:[r.jsx("div",{className:"sp-playlist-cover",style:{background:Ep[0]},children:r.jsx(xu,{})}),r.jsxs("div",{className:"sp-playlist-meta",children:[r.jsx("div",{className:"sp-playlist-title",children:"Liked Songs"}),r.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",Ua.length+1," songs"]})]})]}),Ua.map((h,b)=>r.jsxs(Se,{to:`/spotify/${fu(h.company)}`,className:"sp-playlist-item",children:[r.jsx("div",{className:"sp-playlist-cover",style:{background:h.coverBg??Jl[b%Jl.length]},children:h.logo?r.jsx("img",{src:`./${h.logo}`,alt:h.company}):h.company}),r.jsxs("div",{className:"sp-playlist-meta",children:[r.jsx("div",{className:"sp-playlist-title",children:h.company}),r.jsxs("div",{className:"sp-playlist-sub",children:["Album · ",h.bullets.length," tracks"]})]})]},h.company)),r.jsxs(Se,{to:`/spotify/${Np}`,className:"sp-playlist-item",children:[r.jsx("div",{className:"sp-playlist-cover",style:{background:tt.coverBg},children:r.jsx("img",{src:`./${tt.logo}`,alt:tt.name})}),r.jsxs("div",{className:"sp-playlist-meta",children:[r.jsx("div",{className:"sp-playlist-title",children:tt.name}),r.jsxs("div",{className:"sp-playlist-sub",children:["Single · ",Ln]})]})]}),r.jsxs("div",{className:"sp-playlist-item",children:[r.jsx("div",{className:"sp-playlist-cover",style:{background:Ep[2]},children:"Tech Stack"}),r.jsxs("div",{className:"sp-playlist-meta",children:[r.jsx("div",{className:"sp-playlist-title",children:"Tech Stack"}),r.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",Jc.length," tracks"]})]})]}),r.jsxs("div",{className:"sp-playlist-item",children:[r.jsx("div",{className:"sp-playlist-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)"},children:"Education"}),r.jsxs("div",{className:"sp-playlist-meta",children:[r.jsx("div",{className:"sp-playlist-title",children:"Education"}),r.jsxs("div",{className:"sp-playlist-sub",children:["EP · ",Kc.school.split(",")[0]]})]})]})]})]})]}),r.jsxs("main",{className:"sp-main",children:[r.jsxs("div",{className:"sp-topbar",children:[r.jsx(Se,{to:"/",className:"sp-back-btn",children:"← Back to Home"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[r.jsx(Ic,{size:18})," Open in Web Player"]})]}),r.jsxs("section",{className:"sp-hero",children:[r.jsx("img",{src:"./ro.jpg",alt:Ln,className:"sp-hero-avatar"}),r.jsxs("div",{className:"sp-hero-meta",children:[r.jsxs("div",{className:"sp-verified",children:[r.jsx(N2,{size:16})," Verified Engineer"]}),r.jsx("h1",{className:"sp-hero-name",children:Ln}),r.jsxs("div",{className:"sp-hero-stats",children:[p," monthly listeners"]})]})]}),r.jsxs("div",{className:"sp-action-bar",children:[r.jsx("button",{className:"sp-play-btn",onClick:()=>o(!u),children:u?r.jsx(vu,{}):r.jsx(Ot,{style:{marginLeft:3}})}),r.jsx("button",{className:"sp-follow-btn",children:"Follow"}),r.jsx("button",{className:"sp-icon-btn-lg",children:r.jsx(t1,{})})]}),r.jsxs("section",{className:"sp-section",children:[r.jsx("h2",{className:"sp-section-title",children:"Popular"}),r.jsx("div",{className:"sp-track-list",children:Ua.map((h,b)=>r.jsxs(Se,{to:`/spotify/${fu(h.company)}`,className:"sp-track",children:[r.jsx("div",{className:"sp-track-num",children:b+1}),r.jsxs("div",{className:"sp-track-info",children:[r.jsx("div",{className:"sp-track-cover",style:{background:h.coverBg??Jl[b%Jl.length]},children:h.logo?r.jsx("img",{src:`./${h.logo}`,alt:h.company}):h.company}),r.jsxs("div",{className:"sp-track-text",children:[r.jsx("div",{className:"sp-track-title",children:h.title}),r.jsxs("div",{className:"sp-track-artist",children:[h.company," · ",h.location]})]})]}),r.jsx("div",{className:"sp-track-plays",children:tg(b)}),r.jsx("div",{className:"sp-track-duration",children:wp(h.bullets.length)})]},b))})]}),r.jsxs("section",{className:"sp-section",children:[r.jsx("h2",{className:"sp-section-title",children:"About"}),r.jsxs("div",{className:"sp-about",children:[r.jsx("div",{className:"sp-about-text",children:P2}),r.jsxs("div",{className:"sp-about-stats",children:[r.jsxs("div",{className:"sp-stat",children:[r.jsx("div",{className:"sp-stat-value",children:p}),r.jsx("div",{className:"sp-stat-label",children:"Monthly Listeners"})]}),r.jsxs("div",{className:"sp-stat",children:[r.jsx("div",{className:"sp-stat-value",children:Ua.length}),r.jsx("div",{className:"sp-stat-label",children:"Albums"})]}),r.jsxs("div",{className:"sp-stat",children:[r.jsx("div",{className:"sp-stat-value",children:Jc.length}),r.jsx("div",{className:"sp-stat-label",children:"Genres"})]})]})]})]}),r.jsxs("section",{className:"sp-section",children:[r.jsx("h2",{className:"sp-section-title",children:"Discography"}),r.jsx("div",{className:"sp-album-grid",children:Ua.map((h,b)=>r.jsxs(Se,{to:`/spotify/${fu(h.company)}`,className:"sp-album-card",children:[r.jsxs("div",{className:"sp-album-cover",style:{background:h.coverBg??Jl[b%Jl.length]},children:[h.logo?r.jsx("img",{src:`./${h.logo}`,alt:h.company}):h.company,r.jsx("button",{className:"sp-album-play",children:r.jsx(Ot,{style:{marginLeft:2}})})]}),r.jsx("div",{className:"sp-album-title",children:h.company}),r.jsxs("div",{className:"sp-album-sub",children:[h.period.split("–")[0].trim().split("/")[1]," · ",h.bullets.length," tracks"]})]},b))})]}),r.jsxs("section",{className:"sp-section",children:[r.jsx("h2",{className:"sp-section-title",children:"Featured Release"}),r.jsx("div",{className:"sp-album-grid",children:r.jsxs("div",{className:"sp-album-card",style:{background:"#1a1a1a",gridColumn:"span 2"},children:[r.jsxs(Se,{to:`/spotify/${Np}`,style:{display:"flex",gap:20,alignItems:"flex-start",textDecoration:"none",color:"inherit"},children:[r.jsxs("div",{className:"sp-album-cover",style:{background:tt.coverBg,width:160,height:160,flexShrink:0,marginBottom:0,position:"relative",fontSize:28},children:[r.jsx("img",{src:`./${tt.logo}`,alt:tt.name}),r.jsx("button",{className:"sp-album-play",children:r.jsx(Ot,{style:{marginLeft:2}})})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,minWidth:0},children:[r.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5},children:"Album · 2025"}),r.jsx("div",{style:{fontSize:22,fontWeight:800,color:"#fff"},children:tt.name}),r.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:tt.role}),r.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:tt.tech})]})]}),r.jsxs("a",{href:tt.url,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),style:{fontSize:13,color:"#1ED760",fontWeight:600,textDecoration:"none",marginTop:12,display:"inline-block"},children:[tt.url.replace("https://","").replace(/\/$/,"")," ↗"]}),r.jsx("div",{style:{marginTop:20,display:"flex",flexDirection:"column",gap:4},children:tt.bullets.map((h,b)=>r.jsxs("div",{className:"sp-track",style:{gridTemplateColumns:"32px 1fr auto"},children:[r.jsx("div",{className:"sp-track-num",children:b+1}),r.jsx("div",{className:"sp-track-text",children:r.jsx("div",{className:"sp-track-title",style:{whiteSpace:"normal"},children:h})}),r.jsx("div",{className:"sp-track-duration",children:wp(b+2)})]},b))})]})})]}),r.jsxs("section",{className:"sp-section",children:[r.jsx("h2",{className:"sp-section-title",children:"Genres"}),r.jsx("div",{className:"sp-chips",children:Jc.map(h=>r.jsx("span",{className:"sp-chip",children:h},h))})]}),r.jsxs("section",{className:"sp-section",children:[r.jsx("h2",{className:"sp-section-title",children:"Education"}),r.jsx("div",{className:"sp-about",style:{background:"linear-gradient(135deg, #1a1a1a 0%, #7c2d12 200%)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20},children:[r.jsx("div",{className:"sp-album-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)",width:96,height:96,fontSize:20,marginBottom:0,flexShrink:0},children:"ED"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:"EP"}),r.jsx("div",{style:{fontSize:20,fontWeight:800,color:"#fff",marginBottom:4},children:Kc.degree}),r.jsx("div",{style:{fontSize:14,color:"#b3b3b3"},children:Kc.school})]})]})})]}),r.jsx("section",{className:"sp-section",children:r.jsxs("div",{style:{fontSize:12,color:"#6a6a6a",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",paddingBottom:24},children:[r.jsx("a",{href:`mailto:${jp}`,style:{color:"#6a6a6a",textDecoration:"none"},children:jp}),r.jsx("a",{href:`https://${zp}`,target:"_blank",rel:"noopener noreferrer",style:{color:"#6a6a6a",textDecoration:"none"},children:zp}),r.jsx("span",{children:F2})]})})]}),r.jsxs("footer",{className:"sp-player",children:[r.jsxs("div",{className:"sp-player-track",children:[r.jsx("div",{className:"sp-player-cover",style:{background:Jl[0]}}),r.jsxs("div",{className:"sp-player-meta",children:[r.jsx("div",{className:"sp-player-title",children:Ua[0].title}),r.jsx("div",{className:"sp-player-artist",children:Ln})]}),r.jsx("button",{className:`sp-player-heart ${d?"liked":""}`,onClick:()=>s(!d),"aria-label":"Like",children:r.jsx(xu,{})})]}),r.jsxs("div",{className:"sp-player-controls",children:[r.jsxs("div",{className:"sp-player-buttons",children:[r.jsx("button",{children:r.jsx(a1,{})}),r.jsx("button",{children:r.jsx(u1,{})}),r.jsx("button",{className:"sp-player-play",onClick:()=>o(!u),children:u?r.jsx(vu,{}):r.jsx(Ot,{style:{marginLeft:2}})}),r.jsx("button",{children:r.jsx(r1,{})}),r.jsx("button",{children:r.jsx(n1,{})})]}),r.jsxs("div",{className:"sp-progress",children:[r.jsx("span",{className:"sp-progress-time",children:"1:42"}),r.jsx("div",{className:"sp-progress-bar",children:r.jsx("div",{className:"sp-progress-fill"})}),r.jsx("span",{className:"sp-progress-time",children:"4:51"})]})]}),r.jsxs("div",{className:"sp-player-extras",children:[r.jsx("button",{children:r.jsx(s1,{})}),r.jsx("div",{className:"sp-volume",children:r.jsx("div",{className:"sp-volume-bar",children:r.jsx("div",{className:"sp-volume-fill"})})})]})]})]})]})}const{name:du,experience:ag,project:Pt}=ju,Tp=u=>u.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),es=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Ap=["linear-gradient(180deg, #B91C1C 0%, #5b1414 55%, #121212 100%)","linear-gradient(180deg, #1D4ED8 0%, #1e2c5b 55%, #121212 100%)","linear-gradient(180deg, #6D28D9 0%, #2c1d5b 55%, #121212 100%)","linear-gradient(180deg, #BE185D 0%, #5b1f3e 55%, #121212 100%)"],ng="linear-gradient(180deg, #1DB954 0%, #0a5d2b 55%, #121212 100%)",Rp=[...ag.map((u,o)=>({type:"job",slug:Tp(u.company),title:u.title,artist:u.company,initials:u.company,logo:u.logo,period:u.period,description:u.summary,bullets:u.bullets,cover:u.coverBg??es[o%es.length],heroGrad:Ap[o%Ap.length],meta:`${u.location} · ${u.period}`})),{type:"project",slug:Tp(Pt.name),title:Pt.name,artist:du,initials:Pt.name,logo:Pt.logo,period:"2025",bullets:Pt.bullets,cover:Pt.coverBg,heroGrad:ng,externalUrl:Pt.url,meta:`${Pt.role} · ${Pt.tech}`}];function ig(u){const o=165+u*53%180,d=Math.floor(o/60),s=o%60;return`${d}:${s.toString().padStart(2,"0")}`}function ug(u){let o=0;for(let p=0;p<u;p++)o+=165+p*53%180;const d=Math.floor(o/60),s=o%60;return`${d} min ${s} sec`}const Mp=`
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
    .sp-album-hero { flex-direction: column; align-items: flex-start; padding: 88px 20px 20px; }
    .sp-album-art { width: 180px; height: 180px; font-size: 48px; }
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
`;function rg(){const{slug:u}=bm(),o=Rp.find(y=>y.slug===u),[d,s]=T.useState(!1),[p,h]=T.useState(!0);T.useEffect(()=>{document.title=o?`${o.title} | ${du}`:"Not Found"},[o]);const b=r.jsxs("aside",{className:"sp-sidebar",children:[r.jsxs("div",{className:"sp-sidebar-card",children:[r.jsxs(Se,{to:"/",className:"sp-nav-item",children:[r.jsx(l1,{})," Home"]}),r.jsxs("div",{className:"sp-nav-item",children:[r.jsx(i1,{})," Search"]}),r.jsxs(Se,{to:"/spotify",className:"sp-nav-item",children:[r.jsx(Ic,{})," Your Resume"]})]}),r.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[r.jsxs("div",{className:"sp-library-header",children:[r.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[r.jsx(Ip,{})," Your Library"]}),r.jsx("button",{className:"sp-icon-btn",children:r.jsx(Su,{})})]}),r.jsx("div",{style:{marginTop:8},children:Rp.map(y=>{const g=y.slug===u;return r.jsxs(Se,{to:`/spotify/${y.slug}`,className:`sp-playlist-item ${g?"active":""}`,children:[r.jsx("div",{className:"sp-playlist-cover",style:{background:y.cover},children:y.logo?r.jsx("img",{src:`./${y.logo}`,alt:y.artist}):y.initials}),r.jsxs("div",{className:"sp-playlist-meta",children:[r.jsx("div",{className:`sp-playlist-title ${g?"active":""}`,children:y.title}),r.jsxs("div",{className:"sp-playlist-sub",children:[y.type==="job"?"Album":"Single"," · ",y.artist]})]})]},y.slug)})})]})]}),w=r.jsxs("footer",{className:"sp-player",children:[r.jsxs("div",{className:"sp-player-track",children:[r.jsx("div",{className:"sp-player-cover",style:{background:o?.cover??es[0]},children:o?.logo?r.jsx("img",{src:`./${o.logo}`,alt:o.artist}):o?.initials??"??"}),r.jsxs("div",{className:"sp-player-meta",children:[r.jsx("div",{className:"sp-player-title",children:o?.title??"—"}),r.jsx("div",{className:"sp-player-artist",children:o?.artist??du})]}),r.jsx("button",{className:"sp-player-heart",children:r.jsx(xu,{})})]}),r.jsxs("div",{className:"sp-player-controls",children:[r.jsxs("div",{className:"sp-player-buttons",children:[r.jsx("button",{children:r.jsx(a1,{})}),r.jsx("button",{children:r.jsx(u1,{})}),r.jsx("button",{className:"sp-player-play",onClick:()=>s(!d),children:d?r.jsx(vu,{}):r.jsx(Ot,{style:{marginLeft:2}})}),r.jsx("button",{children:r.jsx(r1,{})}),r.jsx("button",{children:r.jsx(n1,{})})]}),r.jsxs("div",{className:"sp-progress",children:[r.jsx("span",{className:"sp-progress-time",children:"0:48"}),r.jsx("div",{className:"sp-progress-bar",children:r.jsx("div",{className:"sp-progress-fill"})}),r.jsx("span",{className:"sp-progress-time",children:"3:32"})]})]}),r.jsxs("div",{className:"sp-player-extras",children:[r.jsx("button",{children:r.jsx(s1,{})}),r.jsx("div",{className:"sp-volume",children:r.jsx("div",{className:"sp-volume-bar",children:r.jsx("div",{className:"sp-volume-fill"})})})]})]});return o?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Mp}),r.jsxs("div",{className:"sp-page",children:[b,r.jsxs("main",{className:"sp-main",children:[r.jsxs("div",{className:"sp-topbar",children:[r.jsx(Se,{to:"/spotify",className:"sp-back-btn",children:"← Back to Resume"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[r.jsx(Ic,{size:18})," Open in Web Player"]})]}),r.jsxs("section",{className:"sp-album-hero",style:{background:o.heroGrad},children:[r.jsx("div",{className:"sp-album-art",style:{background:o.cover},children:o.logo?r.jsx("img",{src:`./${o.logo}`,alt:o.artist}):o.initials}),r.jsxs("div",{className:"sp-album-meta",children:[r.jsx("div",{className:"sp-album-type",children:o.type==="job"?"Album":"Featured Single"}),r.jsx("h1",{className:"sp-album-title",children:o.title}),r.jsxs("div",{className:"sp-album-byline",children:[r.jsx("strong",{children:o.artist}),r.jsx("span",{className:"dot",children:"·"}),r.jsx("span",{children:o.period}),r.jsx("span",{className:"dot",children:"·"}),r.jsxs("span",{children:[o.bullets.length," songs, ",ug(o.bullets.length)]})]}),r.jsx("div",{className:"sp-album-extra",children:o.meta})]})]}),r.jsxs("div",{className:"sp-action-bar",children:[r.jsx("button",{className:"sp-play-btn",onClick:()=>s(!d),children:d?r.jsx(vu,{}):r.jsx(Ot,{style:{marginLeft:3}})}),r.jsx("button",{className:`sp-heart-btn ${p?"liked":""}`,onClick:()=>h(!p),"aria-label":"Like",children:r.jsx(xu,{})}),r.jsx("button",{className:"sp-icon-btn-lg",children:r.jsx(t1,{})}),o.externalUrl&&r.jsxs("a",{href:o.externalUrl,target:"_blank",rel:"noopener noreferrer",className:"sp-external",style:{marginLeft:"auto"},children:[o.externalUrl.replace("https://","").replace(/\/$/,"")," ↗"]})]}),r.jsxs("div",{className:"sp-track-table",children:[r.jsxs("div",{className:"sp-track-header",children:[r.jsx("span",{className:"col-num",children:"#"}),r.jsx("span",{children:"Title"}),r.jsx("span",{className:"col-dur",children:r.jsx(A2,{})})]}),o.bullets.map((y,g)=>r.jsxs("div",{className:"sp-track-row",children:[r.jsxs("div",{className:"sp-track-num",children:[r.jsx("span",{className:"num",children:g+1}),r.jsx("span",{className:"play",children:r.jsx(Ot,{size:10,style:{marginLeft:2}})})]}),r.jsxs("div",{className:"sp-track-text",children:[r.jsx("div",{className:"sp-track-title",children:y}),r.jsx("div",{className:"sp-track-sub",children:o.artist})]}),r.jsx("div",{className:"sp-track-dur",children:ig(g+1)})]},g))]}),o.description&&r.jsxs("section",{className:"sp-section",children:[r.jsx("h2",{className:"sp-section-title",children:"About this album"}),r.jsx("div",{className:"sp-about",children:o.description})]})]}),w]})]}):r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Mp}),r.jsxs("div",{className:"sp-page",children:[b,r.jsxs("main",{className:"sp-main",children:[r.jsx("div",{className:"sp-topbar",children:r.jsx(Se,{to:"/spotify",className:"sp-back-btn",children:"← Back"})}),r.jsxs("div",{className:"sp-notfound",children:[r.jsx("h1",{children:"Album not found"}),r.jsxs("p",{children:["This playlist doesn't exist in ",du,"'s library."]}),r.jsx(Se,{to:"/spotify",className:"sp-external",children:"← Return to your resume"})]})]}),w]})]})}const{name:pu,summary:cg,experience:o1,skills:sg,project:pt,education:Dp}=ju,og=`
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

  .nf-card:hover {
    transform: scale(1.18);
    z-index: 10;
    box-shadow: 0 16px 48px rgba(0,0,0,0.7);
    transition: transform 0.3s, box-shadow 0.3s, z-index 0s;
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

  .nf-card:hover .nf-card-overlay { opacity: 1; }

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
`,_p=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],Op=o1.map((u,o)=>({title:u.title,artist:u.company,initials:u.company,logo:u.logo,cover:u.coverBg??_p[o%_p.length],period:u.period,summary:u.summary,bullets:u.bullets,match:98-o*3,tag:o===0?"Now Playing":o===1?"Limited Series":"Documentary",type:"job"}));function $c({id:u,title:o,rank:d,children:s}){const p=T.useRef(null),h=b=>{p.current&&p.current.scrollBy({left:b==="left"?-p.current.clientWidth*.8:p.current.clientWidth*.8})};return r.jsxs("div",{className:"nf-row",id:u,children:[r.jsxs("div",{className:"nf-row-header",children:[r.jsx("h2",{className:"nf-row-title",children:o}),d&&r.jsx("span",{className:"nf-explore",children:"Explore all →"})]}),r.jsx("button",{className:"nf-scroll-btn left",onClick:()=>h("left"),"aria-label":"Scroll left",children:r.jsx(w2,{})}),r.jsx("div",{className:"nf-row-scroller",ref:p,children:s}),r.jsx("button",{className:"nf-scroll-btn right",onClick:()=>h("right"),"aria-label":"Scroll right",children:r.jsx(T2,{})})]})}function Wc({show:u,rank:o,wide:d,progress:s,onOpen:p,inList:h,onToggleList:b}){return r.jsxs("div",{className:`nf-card ${d?"nf-continue":""}`,style:o?{marginLeft:56,flex:"0 0 240px"}:void 0,onClick:p,children:[o&&r.jsx("span",{className:"nf-card-rank",children:o}),r.jsx("div",{className:"nf-card-cover",style:{background:u.cover},children:u.logo?r.jsx("img",{src:`./${u.logo}`,alt:u.artist}):u.initials}),s!==void 0&&r.jsx("div",{className:"nf-progress",children:r.jsx("div",{className:"nf-progress-fill",style:{width:`${s}%`}})}),r.jsxs("div",{className:"nf-card-overlay",children:[r.jsx("div",{className:"nf-card-title",children:u.title}),r.jsxs("div",{className:"nf-card-meta",children:[r.jsxs("span",{className:"nf-tag",children:[u.match,"% Match"]}),r.jsx("span",{className:"nf-match",children:"HD"}),r.jsx("span",{children:u.period})]}),r.jsxs("div",{className:"nf-card-actions",children:[r.jsx("button",{className:"nf-icon-btn primary",onClick:w=>{w.stopPropagation(),p()},"aria-label":"Play",children:r.jsx(Ot,{size:10})}),r.jsx("button",{className:"nf-icon-btn",onClick:b,"aria-label":"Add to list",children:h?r.jsx(e1,{size:10}):r.jsx(Su,{size:10})}),r.jsx("button",{className:"nf-icon-btn",onClick:w=>w.stopPropagation(),"aria-label":"Like",children:r.jsx(c1,{size:10})}),r.jsx("button",{className:"nf-icon-btn",style:{marginLeft:"auto"},onClick:w=>{w.stopPropagation(),p()},"aria-label":"More info",children:r.jsx(E2,{size:10})})]})]})]})}const ru={title:pt.name,artist:pu,initials:pt.name,logo:pt.logo,cover:pt.coverBg,period:"2025",bullets:pt.bullets,match:99,tag:"Original Film",type:"project"};function fg(){const[u,o]=T.useState(null),[d,s]=T.useState(new Set);T.useEffect(()=>{document.title=`${pu} | RO+`},[]),T.useEffect(()=>(document.body.style.overflow=u?"hidden":"",()=>{document.body.style.overflow=""}),[u]);const p=b=>w=>{w.stopPropagation(),s(y=>{const g=new Set(y);return g.has(b.title)?g.delete(b.title):g.add(b.title),g})},h=Op[0];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:og}),r.jsxs("div",{className:"nf-page",children:[r.jsxs("section",{className:"nf-hero",children:[r.jsx("div",{className:"nf-hero-photo",style:{backgroundImage:"url(./ro.jpg)"}}),r.jsxs("div",{className:"nf-hero-content",children:[r.jsxs("div",{className:"nf-hero-badge",children:[r.jsx("span",{className:"n-mark",children:"N"})," SERIES"]}),r.jsx("h1",{className:"nf-hero-title",children:pu}),r.jsxs("div",{className:"nf-hero-meta",children:[r.jsx("span",{className:"nf-tag",children:"98% Match"}),r.jsx("span",{children:"2020 – Present"}),r.jsx("span",{className:"nf-match",children:"TV-MA"}),r.jsx("span",{className:"nf-match",children:"HD"}),r.jsxs("span",{children:[o1.length," Seasons"]})]}),r.jsx("p",{className:"nf-hero-desc",children:cg}),r.jsxs("div",{className:"nf-hero-actions",children:[r.jsxs("button",{className:"nf-btn nf-btn-play",onClick:()=>o(h),children:[r.jsx(Ot,{})," Play"]}),r.jsxs("button",{className:"nf-btn nf-btn-info",onClick:()=>o(h),children:[r.jsx(R2,{})," More Info"]})]})]})]}),r.jsxs("div",{className:"nf-rows",children:[r.jsxs($c,{title:"Continue Watching",children:[r.jsx(Wc,{show:h,wide:!0,progress:72,onOpen:()=>o(h),inList:d.has(h.title),onToggleList:p(h)}),r.jsx(Wc,{show:ru,wide:!0,progress:45,onOpen:()=>o(ru),inList:d.has(ru.title),onToggleList:p(ru)})]}),r.jsx($c,{title:"Trending Now",children:Op.map(b=>r.jsx(Wc,{show:b,onOpen:()=>o(b),inList:d.has(b.title),onToggleList:p(b)},`t-${b.title}`))}),r.jsx($c,{title:"Browse by Genre",children:Object.entries(sg).map(([b,w])=>r.jsxs("div",{className:"nf-skill-card",children:[r.jsxs("div",{children:[r.jsx("div",{className:"nf-skill-category",children:b}),r.jsx("div",{className:"nf-skill-list",children:w.join(" · ")})]}),r.jsxs("div",{style:{fontSize:11,color:"#666"},children:[w.length," titles"]})]},b))}),r.jsx("div",{className:"nf-row-header",children:r.jsx("h2",{className:"nf-row-title",children:"RO+ Originals"})}),r.jsxs("div",{className:"nf-featured",children:[r.jsx("div",{className:"nf-featured-cover",style:{background:pt.coverBg},children:r.jsx("img",{src:`./${pt.logo}`,alt:pt.name})}),r.jsxs("div",{className:"nf-featured-body",children:[r.jsx("div",{className:"nf-featured-tag",children:"RO+ Original"}),r.jsx("div",{className:"nf-featured-title",children:pt.name}),r.jsxs("div",{className:"nf-featured-meta",children:["2025 · ",pt.role]}),r.jsx("div",{className:"nf-featured-desc",children:pt.bullets[0]}),r.jsxs("a",{href:pt.url,target:"_blank",rel:"noopener noreferrer",className:"nf-featured-link",children:[pt.url.replace("https://","").replace(/\/$/,"")," ↗"]})]})]}),r.jsx("div",{className:"nf-row-header",children:r.jsx("h2",{className:"nf-row-title",children:"Academy Award Nominees"})}),r.jsxs("div",{className:"nf-edu",children:[r.jsxs("div",{className:"nf-edu-badge",children:["CSUF",r.jsx("br",{}),"Computer Science"]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#E50914",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6},children:"Limited Series · 4 Seasons"}),r.jsx("div",{style:{fontSize:22,fontWeight:800,marginBottom:4},children:Dp.degree}),r.jsx("div",{style:{fontSize:14,color:"#999"},children:Dp.school})]})]}),r.jsxs("div",{className:"nf-footer",children:[r.jsxs("div",{style:{marginBottom:16},children:[r.jsx(Se,{to:"/",children:"Home"}),r.jsx(Se,{to:"/resume",children:"Resume"}),r.jsx(Se,{to:"/spotify",children:"Spotify Resume"}),r.jsx(Se,{to:"/projects",children:"Projects"})]}),r.jsxs("div",{children:["RO+ is a parody. © ",new Date().getFullYear()," ",pu,"."]})]})]}),u&&r.jsx("div",{className:"nf-modal-backdrop",onClick:()=>o(null),children:r.jsxs("div",{className:"nf-modal",onClick:b=>b.stopPropagation(),children:[r.jsx("button",{className:"nf-modal-close",onClick:()=>o(null),"aria-label":"Close",children:"✕"}),r.jsx("div",{className:"nf-modal-hero",style:{background:u.cover},children:r.jsxs("div",{className:"nf-modal-title-stack",children:[r.jsx("h2",{className:"nf-modal-title",children:u.title}),r.jsxs("div",{className:"nf-modal-actions",children:[r.jsxs("button",{className:"nf-btn nf-btn-play",children:[r.jsx(Ot,{})," Play"]}),r.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},onClick:()=>{s(b=>{const w=new Set(b);return w.has(u.title)?w.delete(u.title):w.add(u.title),w})},children:d.has(u.title)?r.jsx(e1,{}):r.jsx(Su,{})}),r.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},children:r.jsx(c1,{})}),r.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40,marginLeft:"auto"},children:r.jsx(M2,{})})]})]})}),r.jsxs("div",{className:"nf-modal-content",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"nf-modal-meta-line",children:[r.jsxs("span",{className:"nf-tag",children:[u.match,"% Match"]}),r.jsx("span",{children:u.period}),r.jsx("span",{className:"nf-match",children:"TV-MA"}),r.jsx("span",{className:"nf-match",children:"HD"}),r.jsxs("span",{children:[u.bullets.length," Episodes"]})]}),u.summary&&r.jsx("div",{className:"nf-modal-summary",children:u.summary}),r.jsx("ul",{className:"nf-modal-bullets",children:u.bullets.map((b,w)=>r.jsx("li",{children:b},w))})]}),r.jsxs("div",{className:"nf-modal-side",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"Starring:"})," ",u.artist]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Genre:"})," ",u.tag]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Period:"})," ",u.period]}),r.jsxs("div",{style:{marginTop:12,color:"#666",fontSize:11},children:["This series is: ",r.jsx("strong",{style:{color:"#999"},children:"Ambitious, Technical, Inspiring"})]})]})]})]})})]})]})}const dg=`
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
`,cu="./";function pg(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:dg}),r.jsx("div",{className:"sq-page",children:r.jsxs("div",{className:"sq-inner",children:[r.jsxs("div",{className:"sq-header",children:[r.jsxs("div",{className:"sq-header-left",children:[r.jsxs("div",{className:"sq-app-name",children:["Side",r.jsx("span",{children:"Quest"})]}),r.jsx("div",{className:"sq-tagline",children:"iOS Job Marketplace - Full-Stack Solo Project"})]}),r.jsxs("div",{className:"sq-header-right",children:[r.jsx("div",{className:"sq-role-badge",children:"iOS + Backend"}),r.jsx("p",{children:"sidequestapp.io"}),r.jsx("p",{children:"rosendoinzunza@gmail.com"}),r.jsx("p",{children:"Beta Launch - May 2026"})]})]}),r.jsxs("div",{className:"sq-sections",children:[r.jsxs("div",{className:"sq-section layout-full",children:[r.jsxs("div",{className:"sq-section-text",children:[r.jsx("div",{className:"sq-section-number",children:"01 - Discover Jobs"}),r.jsx("div",{className:"sq-section-title",children:"Swipe to Apply"}),r.jsx("div",{className:"sq-section-desc",children:"Applicants browse job listings through a swipeable card deck. Swipe right to apply, left to pass - a familiar, low-friction interaction that makes job hunting feel less like work."})]}),r.jsx("div",{className:"sq-screenshot tall",children:r.jsx("img",{src:`${cu}Applicant_feed_view.png`,alt:"Applicant feed view"})})]}),r.jsx("div",{className:"sq-divider"}),r.jsxs("div",{className:"sq-section-text",children:[r.jsx("div",{className:"sq-section-number",children:"02 - Two-Sided Marketplace"}),r.jsx("div",{className:"sq-section-title",children:"Built for Both Sides"}),r.jsx("div",{className:"sq-section-desc",children:"Businesses post listings and move applicants through a hiring pipeline (Interested → Hired). Applicants track every application in one place, with active and archived views."})]}),r.jsxs("div",{className:"sq-two-up",children:[r.jsxs("div",{children:[r.jsx("div",{className:"sq-two-up-label",children:"Business - Listings"}),r.jsx("div",{className:"sq-screenshot medium",children:r.jsx("img",{src:`${cu}biz_listings.view.png`,alt:"Business listings view"})})]}),r.jsxs("div",{children:[r.jsx("div",{className:"sq-two-up-label",children:"Applicant - Quests"}),r.jsx("div",{className:"sq-screenshot medium",children:r.jsx("img",{src:`${cu}applicant_quests_view.png`,alt:"Applicant quests view"})})]})]}),r.jsx("div",{className:"sq-divider"}),r.jsxs("div",{className:"sq-section layout-chat",children:[r.jsx("div",{className:"sq-screenshot short",children:r.jsx("img",{src:`${cu}conversation_view.png`,alt:"Conversation view"})}),r.jsxs("div",{className:"sq-section-text",children:[r.jsx("div",{className:"sq-section-number",children:"03 - Real-Time Messaging"}),r.jsx("div",{className:"sq-section-title",children:"Chat When It Clicks"}),r.jsx("div",{className:"sq-section-desc",children:"In-app messaging connects businesses and applicants the moment there's mutual interest. Live updates via WebSocket, typing indicators, read receipts, and push notifications keep conversations moving."})]})]})]}),r.jsx("div",{className:"sq-divider"}),r.jsxs("div",{children:[r.jsx("div",{className:"sq-stack-label",children:"Under the Hood"}),r.jsxs("div",{className:"sq-hood-grid",children:[r.jsxs("div",{className:"sq-hood-item",children:[r.jsx("div",{className:"sq-hood-title",children:"JWT + Refresh Token Rotation"}),r.jsx("div",{className:"sq-hood-desc",children:"Short-lived access tokens with silent refresh - users stay logged in without re-authenticating."})]}),r.jsxs("div",{className:"sq-hood-item",children:[r.jsx("div",{className:"sq-hood-title",children:"Apple & Google SSO"}),r.jsx("div",{className:"sq-hood-desc",children:"Native OAuth flows on iOS alongside email/password auth, all sharing the same session pipeline."})]}),r.jsxs("div",{className:"sq-hood-item",children:[r.jsx("div",{className:"sq-hood-title",children:"WebSocket Messaging"}),r.jsx("div",{className:"sq-hood-desc",children:"Live chat with a polling fallback - messages arrive instantly without requiring a page refresh."})]}),r.jsxs("div",{className:"sq-hood-item",children:[r.jsx("div",{className:"sq-hood-title",children:"Per-Route Rate Limiting"}),r.jsx("div",{className:"sq-hood-desc",children:"Sliding window limiter keyed by IP, with separate thresholds for auth vs. registration routes."})]}),r.jsxs("div",{className:"sq-hood-item",children:[r.jsx("div",{className:"sq-hood-title",children:"Stripe + RevenueCat"}),r.jsx("div",{className:"sq-hood-desc",children:"Stripe for business subscriptions, RevenueCat for applicant in-app purchases - two billing surfaces, one codebase."})]}),r.jsxs("div",{className:"sq-hood-item",children:[r.jsx("div",{className:"sq-hood-title",children:"AWS S3 Media Uploads"}),r.jsx("div",{className:"sq-hood-desc",children:"Profile photos and video intros upload directly to S3, keeping the API server stateless."})]})]})]}),r.jsx("div",{className:"sq-divider"}),r.jsxs("div",{children:[r.jsx("div",{className:"sq-stack-label",children:"Built with"}),r.jsx("div",{className:"sq-stack-chips",children:["SwiftUI (MVVM)","Rust / Axum","PostgreSQL","JWT Auth","Stripe","RevenueCat","WebSockets","Push Notifications","AWS S3","TestFlight"].map(u=>r.jsx("span",{className:"sq-chip",children:u},u))})]})]})})]})}Qh.createRoot(document.getElementById("root")).render(r.jsx(Tl.StrictMode,{children:r.jsx(n2,{basename:"/",children:r.jsxs(Bm,{children:[r.jsx(wl,{path:"/",element:r.jsx(L2,{})}),r.jsx(wl,{path:"/about",element:r.jsx(Q2,{})}),r.jsx(wl,{path:"/resume",element:r.jsx(W2,{})}),r.jsx(wl,{path:"/spotify",element:r.jsx(lg,{})}),r.jsx(wl,{path:"/spotify/:slug",element:r.jsx(rg,{})}),r.jsx(wl,{path:"/netflix",element:r.jsx(fg,{})}),r.jsx(wl,{path:"/projects",element:r.jsx(pg,{})})]})})}));
