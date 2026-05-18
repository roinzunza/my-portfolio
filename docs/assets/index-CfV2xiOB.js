(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function f(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(p){if(p.ep)return;p.ep=!0;const h=f(p);fetch(p.href,h)}})();function h1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ic={exports:{}},$n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function ph(){if(Np)return $n;Np=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(u,p,h){var y=null;if(h!==void 0&&(y=""+h),p.key!==void 0&&(y=""+p.key),"key"in p){h={};for(var E in p)E!=="key"&&(h[E]=p[E])}else h=p;return p=h.ref,{$$typeof:r,type:u,key:y,ref:p!==void 0?p:null,props:h}}return $n.Fragment=o,$n.jsx=f,$n.jsxs=f,$n}var wp;function hh(){return wp||(wp=1,Ic.exports=ph()),Ic.exports}var i=hh(),eo={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function mh(){if(Ep)return te;Ep=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),_=Symbol.iterator;function O(v){return v===null||typeof v!="object"?null:(v=_&&v[_]||v["@@iterator"],typeof v=="function"?v:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,X={};function V(v,C,Y){this.props=v,this.context=C,this.refs=X,this.updater=Y||B}V.prototype.isReactComponent={},V.prototype.setState=function(v,C){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,C,"setState")},V.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function H(){}H.prototype=V.prototype;function oe(v,C,Y){this.props=v,this.context=C,this.refs=X,this.updater=Y||B}var ee=oe.prototype=new H;ee.constructor=oe,L(ee,V.prototype),ee.isPureReactComponent=!0;var ze=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},Be=Object.prototype.hasOwnProperty;function Ce(v,C,Y,U,$,ue){return Y=ue.ref,{$$typeof:r,type:v,key:C,ref:Y!==void 0?Y:null,props:ue}}function He(v,C){return Ce(v.type,C,void 0,void 0,void 0,v.props)}function Ee(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function nt(v){var C={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Y){return C[Y]})}var gt=/\/+/g;function Ze(v,C){return typeof v=="object"&&v!==null&&v.key!=null?nt(""+v.key):C.toString(36)}function Ca(){}function _a(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Ca,Ca):(v.status="pending",v.then(function(C){v.status==="pending"&&(v.status="fulfilled",v.value=C)},function(C){v.status==="pending"&&(v.status="rejected",v.reason=C)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function Ke(v,C,Y,U,$){var ue=typeof v;(ue==="undefined"||ue==="boolean")&&(v=null);var I=!1;if(v===null)I=!0;else switch(ue){case"bigint":case"string":case"number":I=!0;break;case"object":switch(v.$$typeof){case r:case o:I=!0;break;case k:return I=v._init,Ke(I(v._payload),C,Y,U,$)}}if(I)return $=$(v),I=U===""?"."+Ze(v,0):U,ze($)?(Y="",I!=null&&(Y=I.replace(gt,"$&/")+"/"),Ke($,C,Y,"",function(ra){return ra})):$!=null&&(Ee($)&&($=He($,Y+($.key==null||v&&v.key===$.key?"":(""+$.key).replace(gt,"$&/")+"/")+I)),C.push($)),1;I=0;var it=U===""?".":U+":";if(ze(v))for(var je=0;je<v.length;je++)U=v[je],ue=it+Ze(U,je),I+=Ke(U,C,Y,ue,$);else if(je=O(v),typeof je=="function")for(v=je.call(v),je=0;!(U=v.next()).done;)U=U.value,ue=it+Ze(U,je++),I+=Ke(U,C,Y,ue,$);else if(ue==="object"){if(typeof v.then=="function")return Ke(_a(v),C,Y,U,$);throw C=String(v),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return I}function A(v,C,Y){if(v==null)return v;var U=[],$=0;return Ke(v,U,"","",function(ue){return C.call(Y,ue,$++)}),U}function q(v){if(v._status===-1){var C=v._result;C=C(),C.then(function(Y){(v._status===0||v._status===-1)&&(v._status=1,v._result=Y)},function(Y){(v._status===0||v._status===-1)&&(v._status=2,v._result=Y)}),v._status===-1&&(v._status=0,v._result=C)}if(v._status===1)return v._result.default;throw v._result}var F=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function ve(){}return te.Children={map:A,forEach:function(v,C,Y){A(v,function(){C.apply(this,arguments)},Y)},count:function(v){var C=0;return A(v,function(){C++}),C},toArray:function(v){return A(v,function(C){return C})||[]},only:function(v){if(!Ee(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},te.Component=V,te.Fragment=f,te.Profiler=p,te.PureComponent=oe,te.StrictMode=u,te.Suspense=x,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,te.__COMPILER_RUNTIME={__proto__:null,c:function(v){return P.H.useMemoCache(v)}},te.cache=function(v){return function(){return v.apply(null,arguments)}},te.cloneElement=function(v,C,Y){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var U=L({},v.props),$=v.key,ue=void 0;if(C!=null)for(I in C.ref!==void 0&&(ue=void 0),C.key!==void 0&&($=""+C.key),C)!Be.call(C,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&C.ref===void 0||(U[I]=C[I]);var I=arguments.length-2;if(I===1)U.children=Y;else if(1<I){for(var it=Array(I),je=0;je<I;je++)it[je]=arguments[je+2];U.children=it}return Ce(v.type,$,void 0,void 0,ue,U)},te.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},te.createElement=function(v,C,Y){var U,$={},ue=null;if(C!=null)for(U in C.key!==void 0&&(ue=""+C.key),C)Be.call(C,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&($[U]=C[U]);var I=arguments.length-2;if(I===1)$.children=Y;else if(1<I){for(var it=Array(I),je=0;je<I;je++)it[je]=arguments[je+2];$.children=it}if(v&&v.defaultProps)for(U in I=v.defaultProps,I)$[U]===void 0&&($[U]=I[U]);return Ce(v,ue,void 0,void 0,null,$)},te.createRef=function(){return{current:null}},te.forwardRef=function(v){return{$$typeof:E,render:v}},te.isValidElement=Ee,te.lazy=function(v){return{$$typeof:k,_payload:{_status:-1,_result:v},_init:q}},te.memo=function(v,C){return{$$typeof:m,type:v,compare:C===void 0?null:C}},te.startTransition=function(v){var C=P.T,Y={};P.T=Y;try{var U=v(),$=P.S;$!==null&&$(Y,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(ve,F)}catch(ue){F(ue)}finally{P.T=C}},te.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},te.use=function(v){return P.H.use(v)},te.useActionState=function(v,C,Y){return P.H.useActionState(v,C,Y)},te.useCallback=function(v,C){return P.H.useCallback(v,C)},te.useContext=function(v){return P.H.useContext(v)},te.useDebugValue=function(){},te.useDeferredValue=function(v,C){return P.H.useDeferredValue(v,C)},te.useEffect=function(v,C,Y){var U=P.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(v,C)},te.useId=function(){return P.H.useId()},te.useImperativeHandle=function(v,C,Y){return P.H.useImperativeHandle(v,C,Y)},te.useInsertionEffect=function(v,C){return P.H.useInsertionEffect(v,C)},te.useLayoutEffect=function(v,C){return P.H.useLayoutEffect(v,C)},te.useMemo=function(v,C){return P.H.useMemo(v,C)},te.useOptimistic=function(v,C){return P.H.useOptimistic(v,C)},te.useReducer=function(v,C,Y){return P.H.useReducer(v,C,Y)},te.useRef=function(v){return P.H.useRef(v)},te.useState=function(v){return P.H.useState(v)},te.useSyncExternalStore=function(v,C,Y){return P.H.useSyncExternalStore(v,C,Y)},te.useTransition=function(){return P.H.useTransition()},te.version="19.1.1",te}var Tp;function wo(){return Tp||(Tp=1,eo.exports=mh()),eo.exports}var T=wo();const Da=h1(T);var to={exports:{}},Zn={},ao={exports:{}},lo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function gh(){return kp||(kp=1,function(r){function o(A,q){var F=A.length;A.push(q);e:for(;0<F;){var ve=F-1>>>1,v=A[ve];if(0<p(v,q))A[ve]=q,A[F]=v,F=ve;else break e}}function f(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var q=A[0],F=A.pop();if(F!==q){A[0]=F;e:for(var ve=0,v=A.length,C=v>>>1;ve<C;){var Y=2*(ve+1)-1,U=A[Y],$=Y+1,ue=A[$];if(0>p(U,F))$<v&&0>p(ue,U)?(A[ve]=ue,A[$]=F,ve=$):(A[ve]=U,A[Y]=F,ve=Y);else if($<v&&0>p(ue,F))A[ve]=ue,A[$]=F,ve=$;else break e}}return q}function p(A,q){var F=A.sortIndex-q.sortIndex;return F!==0?F:A.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var y=Date,E=y.now();r.unstable_now=function(){return y.now()-E}}var x=[],m=[],k=1,_=null,O=3,B=!1,L=!1,X=!1,V=!1,H=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ze(A){for(var q=f(m);q!==null;){if(q.callback===null)u(m);else if(q.startTime<=A)u(m),q.sortIndex=q.expirationTime,o(x,q);else break;q=f(m)}}function P(A){if(X=!1,ze(A),!L)if(f(x)!==null)L=!0,Be||(Be=!0,Ze());else{var q=f(m);q!==null&&Ke(P,q.startTime-A)}}var Be=!1,Ce=-1,He=5,Ee=-1;function nt(){return V?!0:!(r.unstable_now()-Ee<He)}function gt(){if(V=!1,Be){var A=r.unstable_now();Ee=A;var q=!0;try{e:{L=!1,X&&(X=!1,oe(Ce),Ce=-1),B=!0;var F=O;try{t:{for(ze(A),_=f(x);_!==null&&!(_.expirationTime>A&&nt());){var ve=_.callback;if(typeof ve=="function"){_.callback=null,O=_.priorityLevel;var v=ve(_.expirationTime<=A);if(A=r.unstable_now(),typeof v=="function"){_.callback=v,ze(A),q=!0;break t}_===f(x)&&u(x),ze(A)}else u(x);_=f(x)}if(_!==null)q=!0;else{var C=f(m);C!==null&&Ke(P,C.startTime-A),q=!1}}break e}finally{_=null,O=F,B=!1}q=void 0}}finally{q?Ze():Be=!1}}}var Ze;if(typeof ee=="function")Ze=function(){ee(gt)};else if(typeof MessageChannel<"u"){var Ca=new MessageChannel,_a=Ca.port2;Ca.port1.onmessage=gt,Ze=function(){_a.postMessage(null)}}else Ze=function(){H(gt,0)};function Ke(A,q){Ce=H(function(){A(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(A){A.callback=null},r.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<A?Math.floor(1e3/A):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_next=function(A){switch(O){case 1:case 2:case 3:var q=3;break;default:q=O}var F=O;O=q;try{return A()}finally{O=F}},r.unstable_requestPaint=function(){V=!0},r.unstable_runWithPriority=function(A,q){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var F=O;O=A;try{return q()}finally{O=F}},r.unstable_scheduleCallback=function(A,q,F){var ve=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ve+F:ve):F=ve,A){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=F+v,A={id:k++,callback:q,priorityLevel:A,startTime:F,expirationTime:v,sortIndex:-1},F>ve?(A.sortIndex=F,o(m,A),f(x)===null&&A===f(m)&&(X?(oe(Ce),Ce=-1):X=!0,Ke(P,F-ve))):(A.sortIndex=v,o(x,A),L||B||(L=!0,Be||(Be=!0,Ze()))),A},r.unstable_shouldYield=nt,r.unstable_wrapCallback=function(A){var q=O;return function(){var F=O;O=q;try{return A.apply(this,arguments)}finally{O=F}}}}(lo)),lo}var Mp;function xh(){return Mp||(Mp=1,ao.exports=gh()),ao.exports}var no={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function vh(){if(Ap)return We;Ap=1;var r=wo();function o(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)m+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(x,m,k){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:_==null?null:""+_,children:x,containerInfo:m,implementation:k}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,We.createPortal=function(x,m){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(o(299));return h(x,m,null,k)},We.flushSync=function(x){var m=y.T,k=u.p;try{if(y.T=null,u.p=2,x)return x()}finally{y.T=m,u.p=k,u.d.f()}},We.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(x,m))},We.prefetchDNS=function(x){typeof x=="string"&&u.d.D(x)},We.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var k=m.as,_=E(k,m.crossOrigin),O=typeof m.integrity=="string"?m.integrity:void 0,B=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;k==="style"?u.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:O,fetchPriority:B}):k==="script"&&u.d.X(x,{crossOrigin:_,integrity:O,fetchPriority:B,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},We.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var k=E(m.as,m.crossOrigin);u.d.M(x,{crossOrigin:k,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(x)},We.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var k=m.as,_=E(k,m.crossOrigin);u.d.L(x,k,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},We.preloadModule=function(x,m){if(typeof x=="string")if(m){var k=E(m.as,m.crossOrigin);u.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:k,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(x)},We.requestFormReset=function(x){u.d.r(x)},We.unstable_batchedUpdates=function(x,m){return x(m)},We.useFormState=function(x,m,k){return y.H.useFormState(x,m,k)},We.useFormStatus=function(){return y.H.useHostTransitionStatus()},We.version="19.1.1",We}var Rp;function bh(){if(Rp)return no.exports;Rp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),no.exports=vh(),no.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function yh(){if(Dp)return Zn;Dp=1;var r=xh(),o=wo(),f=bh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(h(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var s=n.alternate;if(s===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===a)return E(n),e;if(s===l)return E(n),t;s=s.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=s;else{for(var c=!1,d=n.child;d;){if(d===a){c=!0,a=n,l=s;break}if(d===l){c=!0,l=n,a=s;break}d=d.sibling}if(!c){for(d=s.child;d;){if(d===a){c=!0,a=s,l=n;break}if(d===l){c=!0,l=s,a=n;break}d=d.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,_=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),oe=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=gt&&e[gt]||e["@@iterator"],typeof e=="function"?e:null)}var Ca=Symbol.for("react.client.reference");function _a(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ca?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case V:return"Profiler";case X:return"StrictMode";case P:return"Suspense";case Be:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case oe:return(e._context.displayName||"Context")+".Consumer";case ze:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:_a(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return _a(e(t))}catch{}}return null}var Ke=Array.isArray,A=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],v=-1;function C(e){return{current:e}}function Y(e){0>v||(e.current=ve[v],ve[v]=null,v--)}function U(e,t){v++,ve[v]=e.current,e.current=t}var $=C(null),ue=C(null),I=C(null),it=C(null);function je(e,t){switch(U(I,t),U(ue,e),U($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Pf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Pf(t),e=If(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y($),U($,e)}function ra(){Y($),Y(ue),Y(I)}function Us(e){e.memoizedState!==null&&U(it,e);var t=$.current,a=If(t,e.type);t!==a&&(U(ue,e),U($,a))}function ii(e){ue.current===e&&(Y($),Y(ue)),it.current===e&&(Y(it),Yn._currentValue=F)}var qs=Object.prototype.hasOwnProperty,Ls=r.unstable_scheduleCallback,Ys=r.unstable_cancelCallback,Q1=r.unstable_shouldYield,$1=r.unstable_requestPaint,At=r.unstable_now,Z1=r.unstable_getCurrentPriorityLevel,Ro=r.unstable_ImmediatePriority,Do=r.unstable_UserBlockingPriority,si=r.unstable_NormalPriority,K1=r.unstable_LowPriority,Co=r.unstable_IdlePriority,J1=r.log,F1=r.unstable_setDisableYieldValue,Kl=null,st=null;function ca(e){if(typeof J1=="function"&&F1(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(Kl,e)}catch{}}var rt=Math.clz32?Math.clz32:I1,W1=Math.log,P1=Math.LN2;function I1(e){return e>>>=0,e===0?32:31-(W1(e)/P1|0)|0}var ri=256,ci=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~s,l!==0?n=Oa(l):(c&=d,c!==0?n=Oa(c):a||(a=d&~e,a!==0&&(n=Oa(a))))):(d=l&~s,d!==0?n=Oa(d):c!==0?n=Oa(c):a||(a=l&~e,a!==0&&(n=Oa(a)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:n}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function e0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var e=ri;return ri<<=1,(ri&4194048)===0&&(ri=256),e}function Oo(){var e=ci;return ci<<=1,(ci&62914560)===0&&(ci=4194304),e}function Gs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Fl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function t0(e,t,a,l,n,s){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,g=e.expirationTimes,z=e.hiddenUpdates;for(a=c&~a;0<a;){var M=31-rt(a),D=1<<M;d[M]=0,g[M]=-1;var N=z[M];if(N!==null)for(z[M]=null,M=0;M<N.length;M++){var w=N[M];w!==null&&(w.lane&=-536870913)}a&=~D}l!==0&&Bo(e,l,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~t))}function Bo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Ho(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-rt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Uo(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:vp(e.type))}function a0(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var oa=Math.random().toString(36).slice(2),Je="__reactFiber$"+oa,Ie="__reactProps$"+oa,al="__reactContainer$"+oa,Qs="__reactEvents$"+oa,l0="__reactListeners$"+oa,n0="__reactHandles$"+oa,qo="__reactResources$"+oa,Wl="__reactMarker$"+oa;function $s(e){delete e[Je],delete e[Ie],delete e[Qs],delete e[l0],delete e[n0]}function ll(e){var t=e[Je];if(t)return t;for(var a=e.parentNode;a;){if(t=a[al]||a[Je]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=lp(e);e!==null;){if(a=e[Je])return a;e=lp(e)}return t}e=a,a=e.parentNode}return null}function nl(e){if(e=e[Je]||e[al]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function il(e){var t=e[qo];return t||(t=e[qo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Wl]=!0}var Lo=new Set,Yo={};function Ba(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(Yo[e]=t,e=0;e<t.length;e++)Lo.add(t[e])}var i0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Go={},Vo={};function s0(e){return qs.call(Vo,e)?!0:qs.call(Go,e)?!1:i0.test(e)?Vo[e]=!0:(Go[e]=!0,!1)}function ui(e,t,a){if(s0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function di(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var Zs,Xo;function rl(e){if(Zs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Zs=t&&t[1]||"",Xo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zs+e+Xo}var Ks=!1;function Js(e,t){if(!e||Ks)return"";Ks=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(w){var N=w}Reflect.construct(e,[],D)}else{try{D.call()}catch(w){N=w}e.call(D.prototype)}}else{try{throw Error()}catch(w){N=w}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(w){if(w&&N&&typeof w.stack=="string")return[w.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),c=s[0],d=s[1];if(c&&d){var g=c.split(`
`),z=d.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===z.length)for(l=g.length-1,n=z.length-1;1<=l&&0<=n&&g[l]!==z[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==z[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==z[n]){var M=`
`+g[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=n);break}}}finally{Ks=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rl(a):""}function r0(e){switch(e.tag){case 26:case 27:case 5:return rl(e.type);case 16:return rl("Lazy");case 13:return rl("Suspense");case 19:return rl("SuspenseList");case 0:case 15:return Js(e.type,!1);case 11:return Js(e.type.render,!1);case 1:return Js(e.type,!0);case 31:return rl("Activity");default:return""}}function Qo(e){try{var t="";do t+=r0(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $o(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function c0(e){var t=$o(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=c0(e))}function Zo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=$o(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var o0=/[\n"\\]/g;function vt(e){return e.replace(o0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fs(e,t,a,l,n,s,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Ws(e,c,xt(t)):a!=null?Ws(e,c,xt(a)):l!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+xt(d):e.removeAttribute("name")}function Ko(e,t,a,l,n,s,c,d){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Ws(e,t,a){t==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Jo(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function Fo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(Ke(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var u0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||u0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Po(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Wo(e,n,l)}else for(var s in t)t.hasOwnProperty(s)&&Wo(e,s,t[s])}function Ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),f0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hi(e){return f0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Is=null;function er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,dl=null;function Io(e){var t=nl(e);if(t&&(e=t.stateNode)){var a=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ie]||null;if(!n)throw Error(u(90));Fs(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Zo(l)}break e;case"textarea":Jo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var tr=!1;function eu(e,t,a){if(tr)return e(t,a);tr=!0;try{var l=e(t);return l}finally{if(tr=!1,(ul!==null||dl!==null)&&(Ii(),ul&&(t=ul,e=dl,dl=ul=null,Io(t),e)))for(t=0;t<e.length;t++)Io(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ie]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ar=!1;if(Gt)try{var en={};Object.defineProperty(en,"passive",{get:function(){ar=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch{ar=!1}var ua=null,lr=null,mi=null;function tu(){if(mi)return mi;var e,t=lr,a=t.length,l,n="value"in ua?ua.value:ua.textContent,s=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[s-l];l++);return mi=n.slice(e,1<l?1-l:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function au(){return!1}function et(e){function t(a,l,n,s,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xi:au,this.isPropagationStopped=au,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=et(Ha),tn=k({},Ha,{view:0,detail:0}),p0=et(tn),nr,ir,an,bi=k({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&e.type==="mousemove"?(nr=e.screenX-an.screenX,ir=e.screenY-an.screenY):ir=nr=0,an=e),nr)},movementY:function(e){return"movementY"in e?e.movementY:ir}}),lu=et(bi),h0=k({},bi,{dataTransfer:0}),m0=et(h0),g0=k({},tn,{relatedTarget:0}),sr=et(g0),x0=k({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=et(x0),b0=k({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y0=et(b0),j0=k({},Ha,{data:0}),nu=et(j0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N0[e])?!!t[e]:!1}function rr(){return w0}var E0=k({},tn,{key:function(e){if(e.key){var t=S0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rr,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T0=et(E0),k0=k({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=et(k0),M0=k({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rr}),A0=et(M0),R0=k({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),D0=et(R0),C0=k({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=et(C0),O0=k({},Ha,{newState:0,oldState:0}),B0=et(O0),H0=[9,13,27,32],cr=Gt&&"CompositionEvent"in window,ln=null;Gt&&"documentMode"in document&&(ln=document.documentMode);var U0=Gt&&"TextEvent"in window&&!ln,su=Gt&&(!cr||ln&&8<ln&&11>=ln),ru=" ",cu=!1;function ou(e,t){switch(e){case"keyup":return H0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function q0(e,t){switch(e){case"compositionend":return uu(t);case"keypress":return t.which!==32?null:(cu=!0,ru);case"textInput":return e=t.data,e===ru&&cu?null:e;default:return null}}function L0(e,t){if(fl)return e==="compositionend"||!cr&&ou(e,t)?(e=tu(),mi=lr=ua=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return su&&t.locale!=="ko"?null:t.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Y0[e.type]:t==="textarea"}function fu(e,t,a,l){ul?dl?dl.push(l):dl=[l]:ul=l,t=is(t,"onChange"),0<t.length&&(a=new vi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var nn=null,sn=null;function G0(e){Zf(e,0)}function yi(e){var t=Pl(e);if(Zo(t))return e}function pu(e,t){if(e==="change")return t}var hu=!1;if(Gt){var or;if(Gt){var ur="oninput"in document;if(!ur){var mu=document.createElement("div");mu.setAttribute("oninput","return;"),ur=typeof mu.oninput=="function"}or=ur}else or=!1;hu=or&&(!document.documentMode||9<document.documentMode)}function gu(){nn&&(nn.detachEvent("onpropertychange",xu),sn=nn=null)}function xu(e){if(e.propertyName==="value"&&yi(sn)){var t=[];fu(t,sn,e,er(e)),eu(G0,t)}}function V0(e,t,a){e==="focusin"?(gu(),nn=t,sn=a,nn.attachEvent("onpropertychange",xu)):e==="focusout"&&gu()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(sn)}function Q0(e,t){if(e==="click")return yi(t)}function $0(e,t){if(e==="input"||e==="change")return yi(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Z0;function rn(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!qs.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var a=vu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vu(a)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ju(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=pi(e.document)}return t}function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var K0=Gt&&"documentMode"in document&&11>=document.documentMode,pl=null,fr=null,cn=null,pr=!1;function Su(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pr||pl==null||pl!==pi(l)||(l=pl,"selectionStart"in l&&dr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cn&&rn(cn,l)||(cn=l,l=is(fr,"onSelect"),0<l.length&&(t=new vi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=pl)))}function Ua(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var hl={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},hr={},zu={};Gt&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete hl.animationend.animation,delete hl.animationiteration.animation,delete hl.animationstart.animation),"TransitionEvent"in window||delete hl.transitionend.transition);function qa(e){if(hr[e])return hr[e];if(!hl[e])return e;var t=hl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zu)return hr[e]=t[a];return e}var Nu=qa("animationend"),wu=qa("animationiteration"),Eu=qa("animationstart"),J0=qa("transitionrun"),F0=qa("transitionstart"),W0=qa("transitioncancel"),Tu=qa("transitionend"),ku=new Map,mr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mr.push("scrollEnd");function Tt(e,t){ku.set(e,t),Ba(t,[e])}var Mu=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=Mu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Qo(t)},Mu.set(e,t),t)}return{value:e,source:t,stack:Qo(t)}}var yt=[],ml=0,gr=0;function ji(){for(var e=ml,t=gr=ml=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var s=yt[t];if(yt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}s!==0&&Au(a,n,s)}}function Si(e,t,a,l){yt[ml++]=e,yt[ml++]=t,yt[ml++]=a,yt[ml++]=l,gr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xr(e,t,a,l){return Si(e,t,a,l),zi(e)}function gl(e,t){return Si(e,null,null,t),zi(e)}function Au(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-rt(a),e=s.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),s):null}function zi(e){if(50<Cn)throw Cn=0,zc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xl={};function P0(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,l){return new P0(e,t,a,l)}function vr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ru(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ni(e,t,a,l,n,s){var c=0;if(l=e,typeof e=="function")vr(e)&&(c=1);else if(typeof e=="string")c=eh(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=ot(31,a,t,n),e.elementType=Ee,e.lanes=s,e;case L:return La(a.children,n,s,t);case X:c=8,n|=24;break;case V:return e=ot(12,a,t,n|2),e.elementType=V,e.lanes=s,e;case P:return e=ot(13,a,t,n),e.elementType=P,e.lanes=s,e;case Be:return e=ot(19,a,t,n),e.elementType=Be,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case ee:c=10;break e;case oe:c=9;break e;case ze:c=11;break e;case Ce:c=14;break e;case He:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=ot(c,a,t,n),t.elementType=e,t.type=l,t.lanes=s,t}function La(e,t,a,l){return e=ot(7,e,l,t),e.lanes=a,e}function br(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function yr(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vl=[],bl=0,wi=null,Ei=0,jt=[],St=0,Ya=null,Xt=1,Qt="";function Ga(e,t){vl[bl++]=Ei,vl[bl++]=wi,wi=e,Ei=t}function Du(e,t,a){jt[St++]=Xt,jt[St++]=Qt,jt[St++]=Ya,Ya=e;var l=Xt;e=Qt;var n=32-rt(l)-1;l&=~(1<<n),a+=1;var s=32-rt(t)+n;if(30<s){var c=n-n%5;s=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Xt=1<<32-rt(t)+n|a<<n|l,Qt=s+e}else Xt=1<<s|a<<n|l,Qt=e}function jr(e){e.return!==null&&(Ga(e,1),Du(e,1,0))}function Sr(e){for(;e===wi;)wi=vl[--bl],vl[bl]=null,Ei=vl[--bl],vl[bl]=null;for(;e===Ya;)Ya=jt[--St],jt[St]=null,Qt=jt[--St],jt[St]=null,Xt=jt[--St],jt[St]=null}var Pe=null,Te=null,fe=!1,Va=null,Rt=!1,zr=Error(u(519));function Xa(e){var t=Error(u(418,""));throw dn(bt(t,e)),zr}function Cu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Je]=e,t[Ie]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<On.length;a++)se(On[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Ko(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),fi(t);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Fo(t,l.value,l.defaultValue,l.children),fi(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wf(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=ss),t=!0):t=!1,t||Xa(e)}function _u(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Pe=Pe.return}}function on(e){if(e!==Pe)return!1;if(!fe)return _u(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||qc(e.type,e.memoizedProps)),a=!a),a&&Te&&Xa(e),_u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Te=Mt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Te=null}}else t===27?(t=Te,Ea(e.type)?(e=Vc,Vc=null,Te=e):Te=t):Te=Pe?Mt(e.stateNode.nextSibling):null;return!0}function un(){Te=Pe=null,fe=!1}function Ou(){var e=Va;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),Va=null),e}function dn(e){Va===null?Va=[e]:Va.push(e)}var Nr=C(null),Qa=null,$t=null;function da(e,t,a){U(Nr,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=Nr.current,Y(Nr)}function wr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Er(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var c=n.child;s=s.firstContext;e:for(;s!==null;){var d=s;s=n;for(var g=0;g<t.length;g++)if(d.context===t[g]){s.lanes|=a,d=s.alternate,d!==null&&(d.lanes|=a),wr(s.return,a,e),l||(c=null);break e}s=d.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(u(341));c.lanes|=a,s=c.alternate,s!==null&&(s.lanes|=a),wr(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function fn(e,t,a,l){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var d=n.type;ct(n.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(n===it.current){if(c=n.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Yn):e=[Yn])}n=n.return}e!==null&&Er(t,e,a,l),t.flags|=262144}function Ti(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Qa=e,$t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return Bu(Qa,e)}function ki(e,t){return Qa===null&&$a(e),Bu(e,t)}function Bu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},$t===null){if(e===null)throw Error(u(308));$t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $t=$t.next=t;return a}var I0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},e2=r.unstable_scheduleCallback,t2=r.unstable_NormalPriority,_e={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tr(){return{controller:new I0,data:new Map,refCount:0}}function pn(e){e.refCount--,e.refCount===0&&e2(t2,function(){e.controller.abort()})}var hn=null,kr=0,yl=0,jl=null;function a2(e,t){if(hn===null){var a=hn=[];kr=0,yl=Ac(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return kr++,t.then(Hu,Hu),t}function Hu(){if(--kr===0&&hn!==null){jl!==null&&(jl.status="fulfilled");var e=hn;hn=null,yl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function l2(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Uu=A.S;A.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&a2(e,t),Uu!==null&&Uu(e,t)};var Za=C(null);function Mr(){var e=Za.current;return e!==null?e:ye.pooledCache}function Mi(e,t){t===null?U(Za,Za.current):U(Za,t.pool)}function qu(){var e=Mr();return e===null?null:{parent:_e._currentValue,pool:e}}var mn=Error(u(460)),Lu=Error(u(474)),Ai=Error(u(542)),Ar={then:function(){}};function Yu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ri(){}function Gu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ri,Ri),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e;default:if(typeof t.status=="string")t.then(Ri,Ri);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e}throw gn=t,mn}}var gn=null;function Vu(){if(gn===null)throw Error(u(459));var e=gn;return gn=null,e}function Xu(e){if(e===mn||e===Ai)throw Error(u(483))}var fa=!1;function Rr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=zi(e),Au(e,null,a),t}return Si(e,l,t,a),zi(e)}function xn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ho(e,a)}}function Cr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?n=s=c:s=s.next=c,a=a.next}while(a!==null);s===null?n=s=t:s=s.next=t}else n=s=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var _r=!1;function vn(){if(_r){var e=jl;if(e!==null)throw e}}function bn(e,t,a,l){_r=!1;var n=e.updateQueue;fa=!1;var s=n.firstBaseUpdate,c=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var g=d,z=g.next;g.next=null,c===null?s=z:c.next=z,c=g;var M=e.alternate;M!==null&&(M=M.updateQueue,d=M.lastBaseUpdate,d!==c&&(d===null?M.firstBaseUpdate=z:d.next=z,M.lastBaseUpdate=g))}if(s!==null){var D=n.baseState;c=0,M=z=g=null,d=s;do{var N=d.lane&-536870913,w=N!==d.lane;if(w?(ce&N)===N:(l&N)===N){N!==0&&N===yl&&(_r=!0),M!==null&&(M=M.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var W=e,Z=d;N=t;var xe=a;switch(Z.tag){case 1:if(W=Z.payload,typeof W=="function"){D=W.call(xe,D,N);break e}D=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=Z.payload,N=typeof W=="function"?W.call(xe,D,N):W,N==null)break e;D=k({},D,N);break e;case 2:fa=!0}}N=d.callback,N!==null&&(e.flags|=64,w&&(e.flags|=8192),w=n.callbacks,w===null?n.callbacks=[N]:w.push(N))}else w={lane:N,tag:d.tag,payload:d.payload,callback:d.callback,next:null},M===null?(z=M=w,g=D):M=M.next=w,c|=N;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;w=d,d=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);M===null&&(g=D),n.baseState=g,n.firstBaseUpdate=z,n.lastBaseUpdate=M,s===null&&(n.shared.lanes=0),Sa|=c,e.lanes=c,e.memoizedState=D}}function Qu(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function $u(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Qu(a[e],t)}var Sl=C(null),Di=C(0);function Zu(e,t){e=ea,U(Di,e),U(Sl,t),ea=e|t.baseLanes}function Or(){U(Di,ea),U(Sl,Sl.current)}function Br(){ea=Di.current,Y(Sl),Y(Di)}var ma=0,ae=null,me=null,Re=null,Ci=!1,zl=!1,Ka=!1,_i=0,yn=0,Nl=null,n2=0;function Me(){throw Error(u(321))}function Hr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function Ur(e,t,a,l,n,s){return ma=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Ad:Rd,Ka=!1,s=a(l,n),Ka=!1,zl&&(s=Ju(t,a,l,n)),Ku(e),s}function Ku(e){A.H=Li;var t=me!==null&&me.next!==null;if(ma=0,Re=me=ae=null,Ci=!1,yn=0,Nl=null,t)throw Error(u(300));e===null||qe||(e=e.dependencies,e!==null&&Ti(e)&&(qe=!0))}function Ju(e,t,a,l){ae=e;var n=0;do{if(zl&&(Nl=null),yn=0,zl=!1,25<=n)throw Error(u(301));if(n+=1,Re=me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}A.H=d2,s=t(a,l)}while(zl);return s}function i2(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?jn(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(ae.flags|=1024),t}function qr(){var e=_i!==0;return _i=0,e}function Lr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Yr(e){if(Ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ci=!1}ma=0,Re=me=ae=null,zl=!1,yn=_i=0,Nl=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ae.memoizedState=Re=e:Re=Re.next=e,Re}function De(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=Re===null?ae.memoizedState:Re.next;if(t!==null)Re=t,me=e;else{if(e===null)throw ae.alternate===null?Error(u(467)):Error(u(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Re===null?ae.memoizedState=Re=e:Re=Re.next=e}return Re}function Gr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jn(e){var t=yn;return yn+=1,Nl===null&&(Nl=[]),e=Gu(Nl,e,t),t=ae,(Re===null?t.memoizedState:Re.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Ad:Rd),e}function Oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jn(e);if(e.$$typeof===ee)return Fe(e)}throw Error(u(438,String(e)))}function Vr(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Gr(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=nt;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=De();return Xr(t,me,e)}function Xr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,s=l.pending;if(s!==null){if(n!==null){var c=n.next;n.next=s.next,s.next=c}t.baseQueue=n=s,l.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var d=c=null,g=null,z=t,M=!1;do{var D=z.lane&-536870913;if(D!==z.lane?(ce&D)===D:(ma&D)===D){var N=z.revertLane;if(N===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),D===yl&&(M=!0);else if((ma&N)===N){z=z.next,N===yl&&(M=!0);continue}else D={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(d=g=D,c=s):g=g.next=D,ae.lanes|=N,Sa|=N;D=z.action,Ka&&a(s,D),s=z.hasEagerState?z.eagerState:a(s,D)}else N={lane:D,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(d=g=N,c=s):g=g.next=N,ae.lanes|=D,Sa|=D;z=z.next}while(z!==null&&z!==t);if(g===null?c=s:g.next=d,!ct(s,e.memoizedState)&&(qe=!0,M&&(a=jl,a!==null)))throw a;e.memoizedState=s,e.baseState=c,e.baseQueue=g,l.lastRenderedState=s}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Qr(e){var t=De(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,s=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do s=e(s,c.action),c=c.next;while(c!==n);ct(s,t.memoizedState)||(qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function Fu(e,t,a){var l=ae,n=De(),s=fe;if(s){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!ct((me||n).memoizedState,a);c&&(n.memoizedState=a,qe=!0),n=n.queue;var d=Iu.bind(null,l,n,e);if(Sn(2048,8,d,[e]),n.getSnapshot!==t||c||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,wl(9,Hi(),Pu.bind(null,l,n,a,t),null),ye===null)throw Error(u(349));s||(ma&124)!==0||Wu(l,t,a)}return a}function Wu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=Gr(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Pu(e,t,a,l){t.value=a,t.getSnapshot=l,ed(t)&&td(e)}function Iu(e,t,a){return a(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch{return!0}}function td(e){var t=gl(e,2);t!==null&&ht(t,e,2)}function $r(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),Ka){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function ad(e,t,a,l){return e.baseState=a,Xr(e,me,typeof l=="function"?l:Kt)}function s2(e,t,a,l,n){if(qi(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};A.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,ld(t,s)):(s.next=a.next,t.pending=a.next=s)}}function ld(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var s=A.T,c={};A.T=c;try{var d=a(n,l),g=A.S;g!==null&&g(c,d),nd(e,t,d)}catch(z){Zr(e,t,z)}finally{A.T=s}}else try{s=a(n,l),nd(e,t,s)}catch(z){Zr(e,t,z)}}function nd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){id(e,t,l)},function(l){return Zr(e,t,l)}):id(e,t,a)}function id(e,t,a){t.status="fulfilled",t.value=a,sd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ld(e,a)))}function Zr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,sd(t),t=t.next;while(t!==l)}e.action=null}function sd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rd(e,t){return t}function cd(e,t){if(fe){var a=ye.formState;if(a!==null){e:{var l=ae;if(fe){if(Te){t:{for(var n=Te,s=Rt;n.nodeType!==8;){if(!s){n=null;break t}if(n=Mt(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){Te=Mt(n.nextSibling),l=n.data==="F!";break e}}Xa(l)}l=!1}l&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rd,lastRenderedState:t},a.queue=l,a=Td.bind(null,ae,l),l.dispatch=a,l=$r(!1),s=Pr.bind(null,ae,!1,l.queue),l=tt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=s2.bind(null,ae,n,s,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function od(e){var t=De();return ud(t,me,e)}function ud(e,t,a){if(t=Xr(e,t,rd)[0],e=Bi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=jn(t)}catch(c){throw c===mn?Ai:c}else l=t;t=De();var n=t.queue,s=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,wl(9,Hi(),r2.bind(null,n,a),null)),[l,s,e]}function r2(e,t){e.action=t}function dd(e){var t=De(),a=me;if(a!==null)return ud(t,a,e);De(),t=t.memoizedState,a=De();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function wl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Gr(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Hi(){return{destroy:void 0,resource:void 0}}function fd(){return De().memoizedState}function Ui(e,t,a,l){var n=tt();l=l===void 0?null:l,ae.flags|=e,n.memoizedState=wl(1|t,Hi(),a,l)}function Sn(e,t,a,l){var n=De();l=l===void 0?null:l;var s=n.memoizedState.inst;me!==null&&l!==null&&Hr(l,me.memoizedState.deps)?n.memoizedState=wl(t,s,a,l):(ae.flags|=e,n.memoizedState=wl(1|t,s,a,l))}function pd(e,t){Ui(8390656,8,e,t)}function hd(e,t){Sn(2048,8,e,t)}function md(e,t){return Sn(4,2,e,t)}function gd(e,t){return Sn(4,4,e,t)}function xd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vd(e,t,a){a=a!=null?a.concat([e]):null,Sn(4,4,xd.bind(null,t,e),a)}function Kr(){}function bd(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Hr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function yd(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Hr(t,l[1]))return l[0];if(l=e(),Ka){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l}function Jr(e,t,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Nf(),ae.lanes|=e,Sa|=e,a)}function jd(e,t,a,l){return ct(a,t)?a:Sl.current!==null?(e=Jr(e,a,l),ct(e,t)||(qe=!0),e):(ma&42)===0?(qe=!0,e.memoizedState=a):(e=Nf(),ae.lanes|=e,Sa|=e,t)}function Sd(e,t,a,l,n){var s=q.p;q.p=s!==0&&8>s?s:8;var c=A.T,d={};A.T=d,Pr(e,!1,t,a);try{var g=n(),z=A.S;if(z!==null&&z(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=l2(g,l);zn(e,t,M,pt(e))}else zn(e,t,l,pt(e))}catch(D){zn(e,t,{then:function(){},status:"rejected",reason:D},pt())}finally{q.p=s,A.T=c}}function c2(){}function Fr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=zd(e).queue;Sd(e,n,t,F,a===null?c2:function(){return Nd(e),a(l)})}function zd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nd(e){var t=zd(e).next.queue;zn(e,t,{},pt())}function Wr(){return Fe(Yn)}function wd(){return De().memoizedState}function Ed(){return De().memoizedState}function o2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=pa(a);var l=ha(t,e,a);l!==null&&(ht(l,t,a),xn(l,t,a)),t={cache:Tr()},e.payload=t;return}t=t.return}}function u2(e,t,a){var l=pt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)?kd(t,a):(a=xr(e,t,a,l),a!==null&&(ht(a,e,l),Md(a,t,l)))}function Td(e,t,a){var l=pt();zn(e,t,a,l)}function zn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(qi(e))kd(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,d=s(c,a);if(n.hasEagerState=!0,n.eagerState=d,ct(d,c))return Si(e,t,n,0),ye===null&&ji(),!1}catch{}finally{}if(a=xr(e,t,n,l),a!==null)return ht(a,e,l),Md(a,t,l),!0}return!1}function Pr(e,t,a,l){if(l={lane:2,revertLane:Ac(),action:l,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(u(479))}else t=xr(e,a,l,2),t!==null&&ht(t,e,2)}function qi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function kd(e,t){zl=Ci=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Md(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ho(e,a)}}var Li={readContext:Fe,use:Oi,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me},Ad={readContext:Fe,use:Oi,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:pd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ui(4194308,4,xd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var l=e();if(Ka){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=tt();if(a!==void 0){var n=a(t);if(Ka){ca(!0);try{a(t)}finally{ca(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=u2.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=$r(e);var t=e.queue,a=Td.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Kr,useDeferredValue:function(e,t){var a=tt();return Jr(a,e,t)},useTransition:function(){var e=$r(!1);return e=Sd.bind(null,ae,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=tt();if(fe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),ye===null)throw Error(u(349));(ce&124)!==0||Wu(l,t,a)}n.memoizedState=a;var s={value:a,getSnapshot:t};return n.queue=s,pd(Iu.bind(null,l,s,e),[e]),l.flags|=2048,wl(9,Hi(),Pu.bind(null,l,s,a,t),null),a},useId:function(){var e=tt(),t=ye.identifierPrefix;if(fe){var a=Qt,l=Xt;a=(l&~(1<<32-rt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=_i++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=n2++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Wr,useFormState:cd,useActionState:cd,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Pr.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vr,useCacheRefresh:function(){return tt().memoizedState=o2.bind(null,ae)}},Rd={readContext:Fe,use:Oi,useCallback:bd,useContext:Fe,useEffect:hd,useImperativeHandle:vd,useInsertionEffect:md,useLayoutEffect:gd,useMemo:yd,useReducer:Bi,useRef:fd,useState:function(){return Bi(Kt)},useDebugValue:Kr,useDeferredValue:function(e,t){var a=De();return jd(a,me.memoizedState,e,t)},useTransition:function(){var e=Bi(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:jn(e),t]},useSyncExternalStore:Fu,useId:wd,useHostTransitionStatus:Wr,useFormState:od,useActionState:od,useOptimistic:function(e,t){var a=De();return ad(a,me,e,t)},useMemoCache:Vr,useCacheRefresh:Ed},d2={readContext:Fe,use:Oi,useCallback:bd,useContext:Fe,useEffect:hd,useImperativeHandle:vd,useInsertionEffect:md,useLayoutEffect:gd,useMemo:yd,useReducer:Qr,useRef:fd,useState:function(){return Qr(Kt)},useDebugValue:Kr,useDeferredValue:function(e,t){var a=De();return me===null?Jr(a,e,t):jd(a,me.memoizedState,e,t)},useTransition:function(){var e=Qr(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:jn(e),t]},useSyncExternalStore:Fu,useId:wd,useHostTransitionStatus:Wr,useFormState:dd,useActionState:dd,useOptimistic:function(e,t){var a=De();return me!==null?ad(a,me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vr,useCacheRefresh:Ed},El=null,Nn=0;function Yi(e){var t=Nn;return Nn+=1,El===null&&(El=[]),Gu(El,e,t)}function wn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gi(e,t){throw t.$$typeof===_?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dd(e){var t=e._init;return t(e._payload)}function Cd(e){function t(j,b){if(e){var S=j.deletions;S===null?(j.deletions=[b],j.flags|=16):S.push(b)}}function a(j,b){if(!e)return null;for(;b!==null;)t(j,b),b=b.sibling;return null}function l(j){for(var b=new Map;j!==null;)j.key!==null?b.set(j.key,j):b.set(j.index,j),j=j.sibling;return b}function n(j,b){return j=Vt(j,b),j.index=0,j.sibling=null,j}function s(j,b,S){return j.index=S,e?(S=j.alternate,S!==null?(S=S.index,S<b?(j.flags|=67108866,b):S):(j.flags|=67108866,b)):(j.flags|=1048576,b)}function c(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function d(j,b,S,R){return b===null||b.tag!==6?(b=br(S,j.mode,R),b.return=j,b):(b=n(b,S),b.return=j,b)}function g(j,b,S,R){var G=S.type;return G===L?M(j,b,S.props.children,R,S.key):b!==null&&(b.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===He&&Dd(G)===b.type)?(b=n(b,S.props),wn(b,S),b.return=j,b):(b=Ni(S.type,S.key,S.props,null,j.mode,R),wn(b,S),b.return=j,b)}function z(j,b,S,R){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=yr(S,j.mode,R),b.return=j,b):(b=n(b,S.children||[]),b.return=j,b)}function M(j,b,S,R,G){return b===null||b.tag!==7?(b=La(S,j.mode,R,G),b.return=j,b):(b=n(b,S),b.return=j,b)}function D(j,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=br(""+b,j.mode,S),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case O:return S=Ni(b.type,b.key,b.props,null,j.mode,S),wn(S,b),S.return=j,S;case B:return b=yr(b,j.mode,S),b.return=j,b;case He:var R=b._init;return b=R(b._payload),D(j,b,S)}if(Ke(b)||Ze(b))return b=La(b,j.mode,S,null),b.return=j,b;if(typeof b.then=="function")return D(j,Yi(b),S);if(b.$$typeof===ee)return D(j,ki(j,b),S);Gi(j,b)}return null}function N(j,b,S,R){var G=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return G!==null?null:d(j,b,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case O:return S.key===G?g(j,b,S,R):null;case B:return S.key===G?z(j,b,S,R):null;case He:return G=S._init,S=G(S._payload),N(j,b,S,R)}if(Ke(S)||Ze(S))return G!==null?null:M(j,b,S,R,null);if(typeof S.then=="function")return N(j,b,Yi(S),R);if(S.$$typeof===ee)return N(j,b,ki(j,S),R);Gi(j,S)}return null}function w(j,b,S,R,G){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return j=j.get(S)||null,d(b,j,""+R,G);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case O:return j=j.get(R.key===null?S:R.key)||null,g(b,j,R,G);case B:return j=j.get(R.key===null?S:R.key)||null,z(b,j,R,G);case He:var le=R._init;return R=le(R._payload),w(j,b,S,R,G)}if(Ke(R)||Ze(R))return j=j.get(S)||null,M(b,j,R,G,null);if(typeof R.then=="function")return w(j,b,S,Yi(R),G);if(R.$$typeof===ee)return w(j,b,S,ki(b,R),G);Gi(b,R)}return null}function W(j,b,S,R){for(var G=null,le=null,Q=b,J=b=0,Ye=null;Q!==null&&J<S.length;J++){Q.index>J?(Ye=Q,Q=null):Ye=Q.sibling;var de=N(j,Q,S[J],R);if(de===null){Q===null&&(Q=Ye);break}e&&Q&&de.alternate===null&&t(j,Q),b=s(de,b,J),le===null?G=de:le.sibling=de,le=de,Q=Ye}if(J===S.length)return a(j,Q),fe&&Ga(j,J),G;if(Q===null){for(;J<S.length;J++)Q=D(j,S[J],R),Q!==null&&(b=s(Q,b,J),le===null?G=Q:le.sibling=Q,le=Q);return fe&&Ga(j,J),G}for(Q=l(Q);J<S.length;J++)Ye=w(Q,j,J,S[J],R),Ye!==null&&(e&&Ye.alternate!==null&&Q.delete(Ye.key===null?J:Ye.key),b=s(Ye,b,J),le===null?G=Ye:le.sibling=Ye,le=Ye);return e&&Q.forEach(function(Ra){return t(j,Ra)}),fe&&Ga(j,J),G}function Z(j,b,S,R){if(S==null)throw Error(u(151));for(var G=null,le=null,Q=b,J=b=0,Ye=null,de=S.next();Q!==null&&!de.done;J++,de=S.next()){Q.index>J?(Ye=Q,Q=null):Ye=Q.sibling;var Ra=N(j,Q,de.value,R);if(Ra===null){Q===null&&(Q=Ye);break}e&&Q&&Ra.alternate===null&&t(j,Q),b=s(Ra,b,J),le===null?G=Ra:le.sibling=Ra,le=Ra,Q=Ye}if(de.done)return a(j,Q),fe&&Ga(j,J),G;if(Q===null){for(;!de.done;J++,de=S.next())de=D(j,de.value,R),de!==null&&(b=s(de,b,J),le===null?G=de:le.sibling=de,le=de);return fe&&Ga(j,J),G}for(Q=l(Q);!de.done;J++,de=S.next())de=w(Q,j,J,de.value,R),de!==null&&(e&&de.alternate!==null&&Q.delete(de.key===null?J:de.key),b=s(de,b,J),le===null?G=de:le.sibling=de,le=de);return e&&Q.forEach(function(fh){return t(j,fh)}),fe&&Ga(j,J),G}function xe(j,b,S,R){if(typeof S=="object"&&S!==null&&S.type===L&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case O:e:{for(var G=S.key;b!==null;){if(b.key===G){if(G=S.type,G===L){if(b.tag===7){a(j,b.sibling),R=n(b,S.props.children),R.return=j,j=R;break e}}else if(b.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===He&&Dd(G)===b.type){a(j,b.sibling),R=n(b,S.props),wn(R,S),R.return=j,j=R;break e}a(j,b);break}else t(j,b);b=b.sibling}S.type===L?(R=La(S.props.children,j.mode,R,S.key),R.return=j,j=R):(R=Ni(S.type,S.key,S.props,null,j.mode,R),wn(R,S),R.return=j,j=R)}return c(j);case B:e:{for(G=S.key;b!==null;){if(b.key===G)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){a(j,b.sibling),R=n(b,S.children||[]),R.return=j,j=R;break e}else{a(j,b);break}else t(j,b);b=b.sibling}R=yr(S,j.mode,R),R.return=j,j=R}return c(j);case He:return G=S._init,S=G(S._payload),xe(j,b,S,R)}if(Ke(S))return W(j,b,S,R);if(Ze(S)){if(G=Ze(S),typeof G!="function")throw Error(u(150));return S=G.call(S),Z(j,b,S,R)}if(typeof S.then=="function")return xe(j,b,Yi(S),R);if(S.$$typeof===ee)return xe(j,b,ki(j,S),R);Gi(j,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,b!==null&&b.tag===6?(a(j,b.sibling),R=n(b,S),R.return=j,j=R):(a(j,b),R=br(S,j.mode,R),R.return=j,j=R),c(j)):a(j,b)}return function(j,b,S,R){try{Nn=0;var G=xe(j,b,S,R);return El=null,G}catch(Q){if(Q===mn||Q===Ai)throw Q;var le=ot(29,Q,null,j.mode);return le.lanes=R,le.return=j,le}finally{}}}var Tl=Cd(!0),_d=Cd(!1),zt=C(null),Dt=null;function ga(e){var t=e.alternate;U(Oe,Oe.current&1),U(zt,e),Dt===null&&(t===null||Sl.current!==null||t.memoizedState!==null)&&(Dt=e)}function Od(e){if(e.tag===22){if(U(Oe,Oe.current),U(zt,e),Dt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Dt=e)}}else xa()}function xa(){U(Oe,Oe.current),U(zt,zt.current)}function Jt(e){Y(zt),Dt===e&&(Dt=null),Y(Oe)}var Oe=C(0);function Vi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ir(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:k({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ec={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),n=pa(l);n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(ht(t,e,l),xn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),n=pa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(ht(t,e,l),xn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(ht(t,e,a),xn(t,e,a))}};function Bd(e,t,a,l,n,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,c):t.prototype&&t.prototype.isPureReactComponent?!rn(a,l)||!rn(n,s):!0}function Hd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ec.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=k({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ud(e){Xi(e)}function qd(e){console.error(e)}function Ld(e){Xi(e)}function Qi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Yd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function tc(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Qi(e,t)},a}function Gd(e){return e=pa(e),e.tag=3,e}function Vd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var s=l.value;e.payload=function(){return n(s)},e.callback=function(){Yd(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Yd(t,a,l),typeof n!="function"&&(za===null?za=new Set([this]):za.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function f2(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&fn(t,a,n,!0),a=zt.current,a!==null){switch(a.tag){case 13:return Dt===null?wc():a.alternate===null&&ke===0&&(ke=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ar?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Tc(e,l,n)),!1;case 22:return a.flags|=65536,l===Ar?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Tc(e,l,n)),!1}throw Error(u(435,a.tag))}return Tc(e,l,n),wc(),!1}if(fe)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==zr&&(e=Error(u(422),{cause:l}),dn(bt(e,a)))):(l!==zr&&(t=Error(u(423),{cause:l}),dn(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=tc(e.stateNode,l,n),Cr(e,n),ke!==4&&(ke=2)),!1;var s=Error(u(520),{cause:l});if(s=bt(s,a),Dn===null?Dn=[s]:Dn.push(s),ke!==4&&(ke=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=tc(a.stateNode,l,e),Cr(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Gd(n),Vd(n,e,a,l),Cr(a,n),!1}a=a.return}while(a!==null);return!1}var Xd=Error(u(461)),qe=!1;function Ve(e,t,a,l){t.child=e===null?_d(t,null,a,l):Tl(t,e.child,a,l)}function Qd(e,t,a,l,n){a=a.render;var s=t.ref;if("ref"in l){var c={};for(var d in l)d!=="ref"&&(c[d]=l[d])}else c=l;return $a(t),l=Ur(e,t,a,c,s,n),d=qr(),e!==null&&!qe?(Lr(e,t,n),Ft(e,t,n)):(fe&&d&&jr(t),t.flags|=1,Ve(e,t,l,n),t.child)}function $d(e,t,a,l,n){if(e===null){var s=a.type;return typeof s=="function"&&!vr(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Zd(e,t,s,l,n)):(e=Ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!oc(e,n)){var c=s.memoizedProps;if(a=a.compare,a=a!==null?a:rn,a(c,l)&&e.ref===t.ref)return Ft(e,t,n)}return t.flags|=1,e=Vt(s,l),e.ref=t.ref,e.return=t,t.child=e}function Zd(e,t,a,l,n){if(e!==null){var s=e.memoizedProps;if(rn(s,l)&&e.ref===t.ref)if(qe=!1,t.pendingProps=l=s,oc(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Ft(e,t,n)}return ac(e,t,a,l,n)}function Kd(e,t,a){var l=t.pendingProps,n=l.children,s=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,s=0;n!==null;)s=s|n.lanes|n.childLanes,n=n.sibling;t.childLanes=s&~l}else t.childLanes=0,t.child=null;return Jd(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mi(t,s!==null?s.cachePool:null),s!==null?Zu(t,s):Or(),Od(t);else return t.lanes=t.childLanes=536870912,Jd(e,t,s!==null?s.baseLanes|a:a,a)}else s!==null?(Mi(t,s.cachePool),Zu(t,s),xa(),t.memoizedState=null):(e!==null&&Mi(t,null),Or(),xa());return Ve(e,t,n,a),t.child}function Jd(e,t,a,l){var n=Mr();return n=n===null?null:{parent:_e._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Mi(t,null),Or(),Od(t),e!==null&&fn(e,t,l,!0),null}function $i(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ac(e,t,a,l,n){return $a(t),a=Ur(e,t,a,l,void 0,n),l=qr(),e!==null&&!qe?(Lr(e,t,n),Ft(e,t,n)):(fe&&l&&jr(t),t.flags|=1,Ve(e,t,a,n),t.child)}function Fd(e,t,a,l,n,s){return $a(t),t.updateQueue=null,a=Ju(t,l,a,n),Ku(e),l=qr(),e!==null&&!qe?(Lr(e,t,s),Ft(e,t,s)):(fe&&l&&jr(t),t.flags|=1,Ve(e,t,a,s),t.child)}function Wd(e,t,a,l,n){if($a(t),t.stateNode===null){var s=xl,c=a.contextType;typeof c=="object"&&c!==null&&(s=Fe(c)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ec,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},Rr(t),c=a.contextType,s.context=typeof c=="object"&&c!==null?Fe(c):xl,s.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Ir(t,a,c,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&ec.enqueueReplaceState(s,s.state,null),bn(t,l,s,n),vn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var d=t.memoizedProps,g=Ja(a,d);s.props=g;var z=s.context,M=a.contextType;c=xl,typeof M=="object"&&M!==null&&(c=Fe(M));var D=a.getDerivedStateFromProps;M=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,M||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d||z!==c)&&Hd(t,s,l,c),fa=!1;var N=t.memoizedState;s.state=N,bn(t,l,s,n),vn(),z=t.memoizedState,d||N!==z||fa?(typeof D=="function"&&(Ir(t,a,D,l),z=t.memoizedState),(g=fa||Bd(t,a,g,l,N,z,c))?(M||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),s.props=l,s.state=z,s.context=c,l=g):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,Dr(e,t),c=t.memoizedProps,M=Ja(a,c),s.props=M,D=t.pendingProps,N=s.context,z=a.contextType,g=xl,typeof z=="object"&&z!==null&&(g=Fe(z)),d=a.getDerivedStateFromProps,(z=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==D||N!==g)&&Hd(t,s,l,g),fa=!1,N=t.memoizedState,s.state=N,bn(t,l,s,n),vn();var w=t.memoizedState;c!==D||N!==w||fa||e!==null&&e.dependencies!==null&&Ti(e.dependencies)?(typeof d=="function"&&(Ir(t,a,d,l),w=t.memoizedState),(M=fa||Bd(t,a,M,l,N,w,g)||e!==null&&e.dependencies!==null&&Ti(e.dependencies))?(z||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,w,g),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,w,g)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),s.props=l,s.state=w,s.context=g,l=M):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,$i(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=Tl(t,e.child,null,n),t.child=Tl(t,null,a,n)):Ve(e,t,a,n),t.memoizedState=s.state,e=t.child):e=Ft(e,t,n),e}function Pd(e,t,a,l){return un(),t.flags|=256,Ve(e,t,a,l),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nc(e){return{baseLanes:e,cachePool:qu()}}function ic(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function Id(e,t,a){var l=t.pendingProps,n=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?ga(t):xa(),fe){var d=Te,g;if(g=d){e:{for(g=d,d=Rt;g.nodeType!==8;){if(!d){d=null;break e}if(g=Mt(g.nextSibling),g===null){d=null;break e}}d=g}d!==null?(t.memoizedState={dehydrated:d,treeContext:Ya!==null?{id:Xt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},g=ot(18,null,null,0),g.stateNode=d,g.return=t,t.child=g,Pe=t,Te=null,g=!0):g=!1}g||Xa(t)}if(d=t.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Gc(d)?t.lanes=32:t.lanes=536870912,null;Jt(t)}return d=l.children,l=l.fallback,n?(xa(),n=t.mode,d=Zi({mode:"hidden",children:d},n),l=La(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,n=t.child,n.memoizedState=nc(a),n.childLanes=ic(e,c,a),t.memoizedState=lc,l):(ga(t),sc(t,d))}if(g=e.memoizedState,g!==null&&(d=g.dehydrated,d!==null)){if(s)t.flags&256?(ga(t),t.flags&=-257,t=rc(e,t,a)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),n=l.fallback,d=t.mode,l=Zi({mode:"visible",children:l.children},d),n=La(n,d,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,Tl(t,e.child,null,a),l=t.child,l.memoizedState=nc(a),l.childLanes=ic(e,c,a),t.memoizedState=lc,t=n);else if(ga(t),Gc(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var z=c.dgst;c=z,l=Error(u(419)),l.stack="",l.digest=c,dn({value:l,source:null,stack:null}),t=rc(e,t,a)}else if(qe||fn(e,t,a,!1),c=(a&e.childLanes)!==0,qe||c){if(c=ye,c!==null&&(l=a&-a,l=(l&42)!==0?1:Vs(l),l=(l&(c.suspendedLanes|a))!==0?0:l,l!==0&&l!==g.retryLane))throw g.retryLane=l,gl(e,l),ht(c,e,l),Xd;d.data==="$?"||wc(),t=rc(e,t,a)}else d.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Te=Mt(d.nextSibling),Pe=t,fe=!0,Va=null,Rt=!1,e!==null&&(jt[St++]=Xt,jt[St++]=Qt,jt[St++]=Ya,Xt=e.id,Qt=e.overflow,Ya=t),t=sc(t,l.children),t.flags|=4096);return t}return n?(xa(),n=l.fallback,d=t.mode,g=e.child,z=g.sibling,l=Vt(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,z!==null?n=Vt(z,n):(n=La(n,d,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,d=e.child.memoizedState,d===null?d=nc(a):(g=d.cachePool,g!==null?(z=_e._currentValue,g=g.parent!==z?{parent:z,pool:z}:g):g=qu(),d={baseLanes:d.baseLanes|a,cachePool:g}),n.memoizedState=d,n.childLanes=ic(e,c,a),t.memoizedState=lc,l):(ga(t),a=e.child,e=a.sibling,a=Vt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function sc(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=ot(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function rc(e,t,a){return Tl(t,e.child,null,a),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ef(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),wr(e.return,t,a)}function cc(e,t,a,l,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n)}function tf(e,t,a){var l=t.pendingProps,n=l.revealOrder,s=l.tail;if(Ve(e,t,l.children,a),l=Oe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ef(e,a,t);else if(e.tag===19)ef(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(U(Oe,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Vi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),cc(t,!1,n,a,s);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Vi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}cc(t,!0,a,null,s);break;case"together":cc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ft(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(fn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Vt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Vt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ti(e)))}function p2(e,t,a){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),da(t,_e,e.memoizedState.cache),un();break;case 27:case 5:Us(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Id(e,t,a):(ga(t),e=Ft(e,t,a),e!==null?e.sibling:null);ga(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(fn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return tf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Oe,Oe.current),l)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,a);case 24:da(t,_e,e.memoizedState.cache)}return Ft(e,t,a)}function af(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!oc(e,a)&&(t.flags&128)===0)return qe=!1,p2(e,t,a);qe=(e.flags&131072)!==0}else qe=!1,fe&&(t.flags&1048576)!==0&&Du(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")vr(l)?(e=Ja(l,e),t.tag=1,t=Wd(null,t,l,e,a)):(t.tag=0,t=ac(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===ze){t.tag=11,t=Qd(null,t,l,e,a);break e}else if(n===Ce){t.tag=14,t=$d(null,t,l,e,a);break e}}throw t=_a(l)||l,Error(u(306,t,""))}}return t;case 0:return ac(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ja(l,t.pendingProps),Wd(e,t,l,n,a);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var s=t.memoizedState;n=s.element,Dr(e,t),bn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,da(t,_e,l),l!==s.cache&&Er(t,[_e],a,!0),vn(),l=c.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Pd(e,t,l,a);break e}else if(l!==n){n=bt(Error(u(424)),t),dn(n),t=Pd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=Mt(e.firstChild),Pe=t,fe=!0,Va=null,Rt=!0,a=_d(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(un(),l===n){t=Ft(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return $i(e,t),e===null?(a=rp(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,l=rs(I.current).createElement(a),l[Je]=t,l[Ie]=e,Qe(l,a,e),Ue(l),t.stateNode=l):t.memoizedState=rp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Us(t),e===null&&fe&&(l=t.stateNode=np(t.type,t.pendingProps,I.current),Pe=t,Rt=!0,n=Te,Ea(t.type)?(Vc=n,Te=Mt(l.firstChild)):Te=n),Ve(e,t,t.pendingProps.children,a),$i(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=l=Te)&&(l=Y2(l,t.type,t.pendingProps,Rt),l!==null?(t.stateNode=l,Pe=t,Te=Mt(l.firstChild),Rt=!1,n=!0):n=!1),n||Xa(t)),Us(t),n=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,l=s.children,qc(n,s)?l=null:c!==null&&qc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Ur(e,t,i2,null,null,a),Yn._currentValue=n),$i(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&fe&&((e=a=Te)&&(a=G2(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Pe=t,Te=null,e=!0):e=!1),e||Xa(t)),null;case 13:return Id(e,t,a);case 4:return je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Tl(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return Qd(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,da(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,$a(t),n=Fe(n),l=l(n),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return $d(e,t,t.type,t.pendingProps,a);case 15:return Zd(e,t,t.type,t.pendingProps,a);case 19:return tf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Zi(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Vt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Kd(e,t,a);case 24:return $a(t),l=Fe(_e),e===null?(n=Mr(),n===null&&(n=ye,s=Tr(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=a),n=s),t.memoizedState={parent:l,cache:n},Rr(t),da(t,_e,n)):((e.lanes&a)!==0&&(Dr(e,t),bn(t,null,null,a),vn()),n=e.memoizedState,s=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),da(t,_e,l)):(l=s.cache,da(t,_e,l),l!==n.cache&&Er(t,[_e],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Wt(e){e.flags|=4}function lf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fp(t)){if(t=zt.current,t!==null&&((ce&4194048)===ce?Dt!==null:(ce&62914560)!==ce&&(ce&536870912)===0||t!==Dt))throw gn=Ar,Lu;e.flags|=8192}}function Ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Oo():536870912,e.lanes|=t,Rl|=t)}function En(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function h2(e,t,a){var l=t.pendingProps;switch(Sr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(_e),ra(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(on(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ou())),Ne(t),null;case 26:return a=t.memoizedState,e===null?(Wt(t),a!==null?(Ne(t),lf(t,a)):(Ne(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Wt(t),Ne(t),lf(t,a)):(Ne(t),t.flags&=-16777217):(e.memoizedProps!==l&&Wt(t),Ne(t),t.flags&=-16777217),null;case 27:ii(t),a=I.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ne(t),null}e=$.current,on(t)?Cu(t):(e=np(n,l,a),t.stateNode=e,Wt(t))}return Ne(t),null;case 5:if(ii(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ne(t),null}if(e=$.current,on(t))Cu(t);else{switch(n=rs(I.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Je]=t,e[Ie]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Wt(t)}}return Ne(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=I.current,on(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Pe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Je]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wf(e.nodeValue,a)),e||Xa(t)}else e=rs(e).createTextNode(l),e[Je]=t,t.stateNode=e}return Ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=on(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Je]=t}else un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else n=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Jt(t),t):(Jt(t),null)}if(Jt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var s=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ki(t,t.updateQueue),Ne(t),null;case 4:return ra(),e===null&&_c(t.stateNode.containerInfo),Ne(t),null;case 10:return Zt(t.type),Ne(t),null;case 19:if(Y(Oe),n=t.memoizedState,n===null)return Ne(t),null;if(l=(t.flags&128)!==0,s=n.rendering,s===null)if(l)En(n,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Vi(e),s!==null){for(t.flags|=128,En(n,!1),e=s.updateQueue,t.updateQueue=e,Ki(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ru(a,e),a=a.sibling;return U(Oe,Oe.current&1|2),t.child}e=e.sibling}n.tail!==null&&At()>Wi&&(t.flags|=128,l=!0,En(n,!1),t.lanes=4194304)}else{if(!l)if(e=Vi(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ki(t,e),En(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!fe)return Ne(t),null}else 2*At()-n.renderingStartTime>Wi&&a!==536870912&&(t.flags|=128,l=!0,En(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=At(),t.sibling=null,e=Oe.current,U(Oe,l?e&1|2:e&1),t):(Ne(t),null);case 22:case 23:return Jt(t),Br(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&Ki(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Y(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(_e),Ne(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function m2(e,t){switch(Sr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(_e),ra(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ii(t),null;case 13:if(Jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Oe),null;case 4:return ra(),null;case 10:return Zt(t.type),null;case 22:case 23:return Jt(t),Br(),e!==null&&Y(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(_e),null;case 25:return null;default:return null}}function nf(e,t){switch(Sr(t),t.tag){case 3:Zt(_e),ra();break;case 26:case 27:case 5:ii(t);break;case 4:ra();break;case 13:Jt(t);break;case 19:Y(Oe);break;case 10:Zt(t.type);break;case 22:case 23:Jt(t),Br(),e!==null&&Y(Za);break;case 24:Zt(_e)}}function Tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var s=a.create,c=a.inst;l=s(),c.destroy=l}a=a.next}while(a!==n)}}catch(d){be(t,t.return,d)}}function va(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var s=n.next;l=s;do{if((l.tag&e)===e){var c=l.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,n=t;var g=a,z=d;try{z()}catch(M){be(n,g,M)}}}l=l.next}while(l!==s)}}catch(M){be(t,t.return,M)}}function sf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{$u(t,a)}catch(l){be(e,e.return,l)}}}function rf(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){be(e,t,l)}}function kn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){be(e,t,n)}}function Ct(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){be(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){be(e,t,n)}else a.current=null}function cf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){be(e,e.return,n)}}function uc(e,t,a){try{var l=e.stateNode;B2(l,e.type,a,t),l[Ie]=t}catch(n){be(e,e.return,n)}}function of(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ss));else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(fc(e,t,a),e=e.sibling;e!==null;)fc(e,t,a),e=e.sibling}function Ji(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ji(e,t,a),e=e.sibling;e!==null;)Ji(e,t,a),e=e.sibling}function uf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qe(t,l,a),t[Je]=e,t[Ie]=a}catch(s){be(e,e.return,s)}}var Pt=!1,Ae=!1,pc=!1,df=typeof WeakSet=="function"?WeakSet:Set,Le=null;function g2(e,t){if(e=e.containerInfo,Hc=ps,e=ju(e),dr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var c=0,d=-1,g=-1,z=0,M=0,D=e,N=null;t:for(;;){for(var w;D!==a||n!==0&&D.nodeType!==3||(d=c+n),D!==s||l!==0&&D.nodeType!==3||(g=c+l),D.nodeType===3&&(c+=D.nodeValue.length),(w=D.firstChild)!==null;)N=D,D=w;for(;;){if(D===e)break t;if(N===a&&++z===n&&(d=c),N===s&&++M===l&&(g=c),(w=D.nextSibling)!==null)break;D=N,N=D.parentNode}D=w}a=d===-1||g===-1?null:{start:d,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:e,selectionRange:a},ps=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){switch(t=Le,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,n=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var W=Ja(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(W,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(Z){be(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Yc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}}function ff(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),l&4&&Tn(5,a);break;case 1:if(ba(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){be(a,a.return,c)}else{var n=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){be(a,a.return,c)}}l&64&&sf(a),l&512&&kn(a,a.return);break;case 3:if(ba(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{$u(e,t)}catch(c){be(a,a.return,c)}}break;case 27:t===null&&l&4&&uf(a);case 26:case 5:ba(e,a),t===null&&l&4&&cf(a),l&512&&kn(a,a.return);break;case 12:ba(e,a);break;case 13:ba(e,a),l&4&&mf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=w2.bind(null,a),V2(e,a))));break;case 22:if(l=a.memoizedState!==null||Pt,!l){t=t!==null&&t.memoizedState!==null||Ae,n=Pt;var s=Ae;Pt=l,(Ae=t)&&!s?ya(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),Pt=n,Ae=s}break;case 30:break;default:ba(e,a)}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$s(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,at=!1;function It(e,t,a){for(a=a.child;a!==null;)hf(e,t,a),a=a.sibling}function hf(e,t,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Kl,a)}catch{}switch(a.tag){case 26:Ae||Ct(a,t),It(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||Ct(a,t);var l=Se,n=at;Ea(a.type)&&(Se=a.stateNode,at=!1),It(e,t,a),Hn(a.stateNode),Se=l,at=n;break;case 5:Ae||Ct(a,t);case 6:if(l=Se,n=at,Se=null,It(e,t,a),Se=l,at=n,Se!==null)if(at)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(s){be(a,t,s)}else try{Se.removeChild(a.stateNode)}catch(s){be(a,t,s)}break;case 18:Se!==null&&(at?(e=Se,ap(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qn(e)):ap(Se,a.stateNode));break;case 4:l=Se,n=at,Se=a.stateNode.containerInfo,at=!0,It(e,t,a),Se=l,at=n;break;case 0:case 11:case 14:case 15:Ae||va(2,a,t),Ae||va(4,a,t),It(e,t,a);break;case 1:Ae||(Ct(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&rf(a,t,l)),It(e,t,a);break;case 21:It(e,t,a);break;case 22:Ae=(l=Ae)||a.memoizedState!==null,It(e,t,a),Ae=l;break;default:It(e,t,a)}}function mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qn(e)}catch(a){be(t,t.return,a)}}function x2(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new df),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new df),t;default:throw Error(u(435,e.tag))}}function hc(e,t){var a=x2(e);t.forEach(function(l){var n=E2.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function ut(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],s=e,c=t,d=c;e:for(;d!==null;){switch(d.tag){case 27:if(Ea(d.type)){Se=d.stateNode,at=!1;break e}break;case 5:Se=d.stateNode,at=!1;break e;case 3:case 4:Se=d.stateNode.containerInfo,at=!0;break e}d=d.return}if(Se===null)throw Error(u(160));hf(s,c,n),Se=null,at=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}var kt=null;function gf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),dt(e),l&4&&(va(3,e,e.return),Tn(3,e),va(5,e,e.return));break;case 1:ut(t,e),dt(e),l&512&&(Ae||a===null||Ct(a,a.return)),l&64&&Pt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=kt;if(ut(t,e),dt(e),l&512&&(Ae||a===null||Ct(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":s=n.getElementsByTagName("title")[0],(!s||s[Wl]||s[Je]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(l),n.head.insertBefore(s,n.querySelector("head > title"))),Qe(s,l,a),s[Je]=e,Ue(s),l=s;break e;case"link":var c=up("link","href",n).get(l+(a.href||""));if(c){for(var d=0;d<c.length;d++)if(s=c[d],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(d,1);break t}}s=n.createElement(l),Qe(s,l,a),n.head.appendChild(s);break;case"meta":if(c=up("meta","content",n).get(l+(a.content||""))){for(d=0;d<c.length;d++)if(s=c[d],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(d,1);break t}}s=n.createElement(l),Qe(s,l,a),n.head.appendChild(s);break;default:throw Error(u(468,l))}s[Je]=e,Ue(s),l=s}e.stateNode=l}else dp(n,e.type,e.stateNode);else e.stateNode=op(n,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?dp(n,e.type,e.stateNode):op(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&uc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),dt(e),l&512&&(Ae||a===null||Ct(a,a.return)),a!==null&&l&4&&uc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),dt(e),l&512&&(Ae||a===null||Ct(a,a.return)),e.flags&32){n=e.stateNode;try{ol(n,"")}catch(w){be(e,e.return,w)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,uc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(pc=!0);break;case 6:if(ut(t,e),dt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(w){be(e,e.return,w)}}break;case 3:if(us=null,n=kt,kt=cs(t.containerInfo),ut(t,e),kt=n,dt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(w){be(e,e.return,w)}pc&&(pc=!1,xf(e));break;case 4:l=kt,kt=cs(e.stateNode.containerInfo),ut(t,e),dt(e),kt=l;break;case 12:ut(t,e),dt(e);break;case 13:ut(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yc=At()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,hc(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,z=Pt,M=Ae;if(Pt=z||n,Ae=M||g,ut(t,e),Ae=M,Pt=z,dt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||Pt||Ae||Fa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(s=g.stateNode,n)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=g.stateNode;var D=g.memoizedProps.style,N=D!=null&&D.hasOwnProperty("display")?D.display:null;d.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(w){be(g,g.return,w)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(w){be(g,g.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,hc(e,a))));break;case 19:ut(t,e),dt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,hc(e,l)));break;case 30:break;case 21:break;default:ut(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(of(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,s=dc(e);Ji(e,s,n);break;case 5:var c=a.stateNode;a.flags&32&&(ol(c,""),a.flags&=-33);var d=dc(e);Ji(e,d,c);break;case 3:case 4:var g=a.stateNode.containerInfo,z=dc(e);fc(e,z,g);break;default:throw Error(u(161))}}catch(M){be(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ff(e,t.alternate,t),t=t.sibling}function Fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),Fa(t);break;case 1:Ct(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&rf(t,t.return,a),Fa(t);break;case 27:Hn(t.stateNode);case 26:case 5:Ct(t,t.return),Fa(t);break;case 22:t.memoizedState===null&&Fa(t);break;case 30:Fa(t);break;default:Fa(t)}e=e.sibling}}function ya(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,s=t,c=s.flags;switch(s.tag){case 0:case 11:case 15:ya(n,s,a),Tn(4,s);break;case 1:if(ya(n,s,a),l=s,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){be(l,l.return,z)}if(l=s,n=l.updateQueue,n!==null){var d=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)Qu(g[n],d)}catch(z){be(l,l.return,z)}}a&&c&64&&sf(s),kn(s,s.return);break;case 27:uf(s);case 26:case 5:ya(n,s,a),a&&l===null&&c&4&&cf(s),kn(s,s.return);break;case 12:ya(n,s,a);break;case 13:ya(n,s,a),a&&c&4&&mf(n,s);break;case 22:s.memoizedState===null&&ya(n,s,a),kn(s,s.return);break;case 30:break;default:ya(n,s,a)}t=t.sibling}}function mc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&pn(a))}function gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pn(e))}function _t(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vf(e,t,a,l),t=t.sibling}function vf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,a,l),n&2048&&Tn(9,t);break;case 1:_t(e,t,a,l);break;case 3:_t(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pn(e)));break;case 12:if(n&2048){_t(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,c=s.id,d=s.onPostCommit;typeof d=="function"&&d(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){be(t,t.return,g)}}else _t(e,t,a,l);break;case 13:_t(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,c=t.alternate,t.memoizedState!==null?s._visibility&2?_t(e,t,a,l):Mn(e,t):s._visibility&2?_t(e,t,a,l):(s._visibility|=2,kl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&mc(c,t);break;case 24:_t(e,t,a,l),n&2048&&gc(t.alternate,t);break;default:_t(e,t,a,l)}}function kl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,c=t,d=a,g=l,z=c.flags;switch(c.tag){case 0:case 11:case 15:kl(s,c,d,g,n),Tn(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?kl(s,c,d,g,n):Mn(s,c):(M._visibility|=2,kl(s,c,d,g,n)),n&&z&2048&&mc(c.alternate,c);break;case 24:kl(s,c,d,g,n),n&&z&2048&&gc(c.alternate,c);break;default:kl(s,c,d,g,n)}t=t.sibling}}function Mn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Mn(a,l),n&2048&&mc(l.alternate,l);break;case 24:Mn(a,l),n&2048&&gc(l.alternate,l);break;default:Mn(a,l)}t=t.sibling}}var An=8192;function Ml(e){if(e.subtreeFlags&An)for(e=e.child;e!==null;)bf(e),e=e.sibling}function bf(e){switch(e.tag){case 26:Ml(e),e.flags&An&&e.memoizedState!==null&&ah(kt,e.memoizedState,e.memoizedProps);break;case 5:Ml(e);break;case 3:case 4:var t=kt;kt=cs(e.stateNode.containerInfo),Ml(e),kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=An,An=16777216,Ml(e),An=t):Ml(e));break;default:Ml(e)}}function yf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Le=l,Sf(l,e)}yf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jf(e),e=e.sibling}function jf(e){switch(e.tag){case 0:case 11:case 15:Rn(e),e.flags&2048&&va(9,e,e.return);break;case 3:Rn(e);break;case 12:Rn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fi(e)):Rn(e);break;default:Rn(e)}}function Fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Le=l,Sf(l,e)}yf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),Fi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Fi(t));break;default:Fi(t)}e=e.sibling}}function Sf(e,t){for(;Le!==null;){var a=Le;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:pn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Le=l;else e:for(a=e;Le!==null;){l=Le;var n=l.sibling,s=l.return;if(pf(l),l===a){Le=null;break e}if(n!==null){n.return=s,Le=n;break e}Le=s}}}var v2={getCacheForType:function(e){var t=Fe(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},b2=typeof WeakMap=="function"?WeakMap:Map,pe=0,ye=null,ie=null,ce=0,he=0,ft=null,ja=!1,Al=!1,xc=!1,ea=0,ke=0,Sa=0,Wa=0,vc=0,Nt=0,Rl=0,Dn=null,lt=null,bc=!1,yc=0,Wi=1/0,Pi=null,za=null,Xe=0,Na=null,Dl=null,Cl=0,jc=0,Sc=null,zf=null,Cn=0,zc=null;function pt(){if((pe&2)!==0&&ce!==0)return ce&-ce;if(A.T!==null){var e=yl;return e!==0?e:Ac()}return Uo()}function Nf(){Nt===0&&(Nt=(ce&536870912)===0||fe?_o():536870912);var e=zt.current;return e!==null&&(e.flags|=32),Nt}function ht(e,t,a){(e===ye&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(_l(e,0),wa(e,ce,Nt,!1)),Fl(e,a),((pe&2)===0||e!==ye)&&(e===ye&&((pe&2)===0&&(Wa|=a),ke===4&&wa(e,ce,Nt,!1)),Ot(e))}function wf(e,t,a){if((pe&6)!==0)throw Error(u(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Jl(e,t),n=l?S2(e,t):Ec(e,t,!0),s=l;do{if(n===0){Al&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!y2(a)){n=Ec(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var d=e;n=Dn;var g=d.current.memoizedState.isDehydrated;if(g&&(_l(d,c).flags|=256),c=Ec(d,c,!1),c!==2){if(xc&&!g){d.errorRecoveryDisabledLanes|=s,Wa|=s,n=4;break e}s=lt,lt=n,s!==null&&(lt===null?lt=s:lt.push.apply(lt,s))}n=c}if(s=!1,n!==2)continue}}if(n===1){_l(e,0),wa(e,t,0,!0);break}e:{switch(l=e,s=n,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,Nt,!ja);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=yc+300-At(),10<n)){if(wa(l,t,Nt,!ja),oi(l,0,!0)!==0)break e;l.timeoutHandle=ep(Ef.bind(null,l,a,lt,Pi,bc,t,Nt,Wa,Rl,ja,s,2,-0,0),n);break e}Ef(l,a,lt,Pi,bc,t,Nt,Wa,Rl,ja,s,0,-0,0)}}break}while(!0);Ot(e)}function Ef(e,t,a,l,n,s,c,d,g,z,M,D,N,w){if(e.timeoutHandle=-1,D=t.subtreeFlags,(D&8192||(D&16785408)===16785408)&&(Ln={stylesheets:null,count:0,unsuspend:th},bf(t),D=lh(),D!==null)){e.cancelPendingCommit=D(Cf.bind(null,e,t,s,a,l,n,c,d,g,M,1,N,w)),wa(e,s,c,!z);return}Cf(e,t,s,a,l,n,c,d,g)}function y2(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],s=n.getSnapshot;n=n.value;try{if(!ct(s(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~vc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var s=31-rt(n),c=1<<s;l[s]=-1,n&=~c}a!==0&&Bo(e,a,t)}function Ii(){return(pe&6)===0?(_n(0),!1):!0}function Nc(){if(ie!==null){if(he===0)var e=ie.return;else e=ie,$t=Qa=null,Yr(e),El=null,Nn=0,e=ie;for(;e!==null;)nf(e.alternate,e),e=e.return;ie=null}}function _l(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,U2(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Nc(),ye=e,ie=a=Vt(e.current,null),ce=t,he=0,ft=null,ja=!1,Al=Jl(e,t),xc=!1,Rl=Nt=vc=Wa=Sa=ke=0,lt=Dn=null,bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-rt(l),s=1<<n;t|=e[n],l&=~s}return ea=t,ji(),a}function Tf(e,t){ae=null,A.H=Li,t===mn||t===Ai?(t=Vu(),he=3):t===Lu?(t=Vu(),he=4):he=t===Xd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,ie===null&&(ke=1,Qi(e,bt(t,e.current)))}function kf(){var e=A.H;return A.H=Li,e===null?Li:e}function Mf(){var e=A.A;return A.A=v2,e}function wc(){ke=4,ja||(ce&4194048)!==ce&&zt.current!==null||(Al=!0),(Sa&134217727)===0&&(Wa&134217727)===0||ye===null||wa(ye,ce,Nt,!1)}function Ec(e,t,a){var l=pe;pe|=2;var n=kf(),s=Mf();(ye!==e||ce!==t)&&(Pi=null,_l(e,t)),t=!1;var c=ke;e:do try{if(he!==0&&ie!==null){var d=ie,g=ft;switch(he){case 8:Nc(),c=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var z=he;if(he=0,ft=null,Ol(e,d,g,z),a&&Al){c=0;break e}break;default:z=he,he=0,ft=null,Ol(e,d,g,z)}}j2(),c=ke;break}catch(M){Tf(e,M)}while(!0);return t&&e.shellSuspendCounter++,$t=Qa=null,pe=l,A.H=n,A.A=s,ie===null&&(ye=null,ce=0,ji()),c}function j2(){for(;ie!==null;)Af(ie)}function S2(e,t){var a=pe;pe|=2;var l=kf(),n=Mf();ye!==e||ce!==t?(Pi=null,Wi=At()+500,_l(e,t)):Al=Jl(e,t);e:do try{if(he!==0&&ie!==null){t=ie;var s=ft;t:switch(he){case 1:he=0,ft=null,Ol(e,t,s,1);break;case 2:case 9:if(Yu(s)){he=0,ft=null,Rf(t);break}t=function(){he!==2&&he!==9||ye!==e||(he=7),Ot(e)},s.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:Yu(s)?(he=0,ft=null,Rf(t)):(he=0,ft=null,Ol(e,t,s,7));break;case 5:var c=null;switch(ie.tag){case 26:c=ie.memoizedState;case 5:case 27:var d=ie;if(!c||fp(c)){he=0,ft=null;var g=d.sibling;if(g!==null)ie=g;else{var z=d.return;z!==null?(ie=z,es(z)):ie=null}break t}}he=0,ft=null,Ol(e,t,s,5);break;case 6:he=0,ft=null,Ol(e,t,s,6);break;case 8:Nc(),ke=6;break e;default:throw Error(u(462))}}z2();break}catch(M){Tf(e,M)}while(!0);return $t=Qa=null,A.H=l,A.A=n,pe=a,ie!==null?0:(ye=null,ce=0,ji(),ke)}function z2(){for(;ie!==null&&!Q1();)Af(ie)}function Af(e){var t=af(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?es(e):ie=t}function Rf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Fd(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=Fd(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:Yr(t);default:nf(a,t),t=ie=Ru(t,ea),t=af(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?es(e):ie=t}function Ol(e,t,a,l){$t=Qa=null,Yr(t),El=null,Nn=0;var n=t.return;try{if(f2(e,n,t,a,ce)){ke=1,Qi(e,bt(a,e.current)),ie=null;return}}catch(s){if(n!==null)throw ie=n,s;ke=1,Qi(e,bt(a,e.current)),ie=null;return}t.flags&32768?(fe||l===1?e=!0:Al||(ce&536870912)!==0?e=!1:(ja=e=!0,(l===2||l===9||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Df(t,e)):es(t)}function es(e){var t=e;do{if((t.flags&32768)!==0){Df(t,ja);return}e=t.return;var a=h2(t.alternate,t,ea);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ke===0&&(ke=5)}function Df(e,t){do{var a=m2(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);ke=6,ie=null}function Cf(e,t,a,l,n,s,c,d,g){e.cancelPendingCommit=null;do ts();while(Xe!==0);if((pe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=gr,t0(e,a,s,c,d,g),e===ye&&(ie=ye=null,ce=0),Dl=t,Na=e,Cl=a,jc=s,Sc=n,zf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,T2(si,function(){return Uf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,n=q.p,q.p=2,c=pe,pe|=4;try{g2(e,t,a)}finally{pe=c,q.p=n,A.T=l}}Xe=1,_f(),Of(),Bf()}}function _f(){if(Xe===1){Xe=0;var e=Na,t=Dl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var l=q.p;q.p=2;var n=pe;pe|=4;try{gf(t,e);var s=Uc,c=ju(e.containerInfo),d=s.focusedElem,g=s.selectionRange;if(c!==d&&d&&d.ownerDocument&&yu(d.ownerDocument.documentElement,d)){if(g!==null&&dr(d)){var z=g.start,M=g.end;if(M===void 0&&(M=z),"selectionStart"in d)d.selectionStart=z,d.selectionEnd=Math.min(M,d.value.length);else{var D=d.ownerDocument||document,N=D&&D.defaultView||window;if(N.getSelection){var w=N.getSelection(),W=d.textContent.length,Z=Math.min(g.start,W),xe=g.end===void 0?Z:Math.min(g.end,W);!w.extend&&Z>xe&&(c=xe,xe=Z,Z=c);var j=bu(d,Z),b=bu(d,xe);if(j&&b&&(w.rangeCount!==1||w.anchorNode!==j.node||w.anchorOffset!==j.offset||w.focusNode!==b.node||w.focusOffset!==b.offset)){var S=D.createRange();S.setStart(j.node,j.offset),w.removeAllRanges(),Z>xe?(w.addRange(S),w.extend(b.node,b.offset)):(S.setEnd(b.node,b.offset),w.addRange(S))}}}}for(D=[],w=d;w=w.parentNode;)w.nodeType===1&&D.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<D.length;d++){var R=D[d];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}ps=!!Hc,Uc=Hc=null}finally{pe=n,q.p=l,A.T=a}}e.current=t,Xe=2}}function Of(){if(Xe===2){Xe=0;var e=Na,t=Dl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var l=q.p;q.p=2;var n=pe;pe|=4;try{ff(e,t.alternate,t)}finally{pe=n,q.p=l,A.T=a}}Xe=3}}function Bf(){if(Xe===4||Xe===3){Xe=0,$1();var e=Na,t=Dl,a=Cl,l=zf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Dl=Na=null,Hf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(za=null),Xs(a),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=A.T,n=q.p,q.p=2,A.T=null;try{for(var s=e.onRecoverableError,c=0;c<l.length;c++){var d=l[c];s(d.value,{componentStack:d.stack})}}finally{A.T=t,q.p=n}}(Cl&3)!==0&&ts(),Ot(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===zc?Cn++:(Cn=0,zc=e):Cn=0,_n(0)}}function Hf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pn(t)))}function ts(e){return _f(),Of(),Bf(),Uf()}function Uf(){if(Xe!==5)return!1;var e=Na,t=jc;jc=0;var a=Xs(Cl),l=A.T,n=q.p;try{q.p=32>a?32:a,A.T=null,a=Sc,Sc=null;var s=Na,c=Cl;if(Xe=0,Dl=Na=null,Cl=0,(pe&6)!==0)throw Error(u(331));var d=pe;if(pe|=4,jf(s.current),vf(s,s.current,c,a),pe=d,_n(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Kl,s)}catch{}return!0}finally{q.p=n,A.T=l,Hf(e,t)}}function qf(e,t,a){t=bt(a,t),t=tc(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Fl(e,2),Ot(e))}function be(e,t,a){if(e.tag===3)qf(e,e,a);else for(;t!==null;){if(t.tag===3){qf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(za===null||!za.has(l))){e=bt(a,e),a=Gd(2),l=ha(t,a,2),l!==null&&(Vd(a,l,t,e),Fl(l,2),Ot(l));break}}t=t.return}}function Tc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new b2;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(xc=!0,n.add(a),e=N2.bind(null,e,t,a),t.then(e,e))}function N2(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(ce&a)===a&&(ke===4||ke===3&&(ce&62914560)===ce&&300>At()-yc?(pe&2)===0&&_l(e,0):vc|=a,Rl===ce&&(Rl=0)),Ot(e)}function Lf(e,t){t===0&&(t=Oo()),e=gl(e,t),e!==null&&(Fl(e,t),Ot(e))}function w2(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Lf(e,a)}function E2(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Lf(e,a)}function T2(e,t){return Ls(e,t)}var as=null,Bl=null,kc=!1,ls=!1,Mc=!1,Pa=0;function Ot(e){e!==Bl&&e.next===null&&(Bl===null?as=Bl=e:Bl=Bl.next=e),ls=!0,kc||(kc=!0,M2())}function _n(e,t){if(!Mc&&ls){Mc=!0;do for(var a=!1,l=as;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var s=0;else{var c=l.suspendedLanes,d=l.pingedLanes;s=(1<<31-rt(42|e)+1)-1,s&=n&~(c&~d),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Xf(l,s))}else s=ce,s=oi(l,l===ye?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Jl(l,s)||(a=!0,Xf(l,s));l=l.next}while(a);Mc=!1}}function k2(){Yf()}function Yf(){ls=kc=!1;var e=0;Pa!==0&&(H2()&&(e=Pa),Pa=0);for(var t=At(),a=null,l=as;l!==null;){var n=l.next,s=Gf(l,t);s===0?(l.next=null,a===null?as=n:a.next=n,n===null&&(Bl=a)):(a=l,(e!==0||(s&3)!==0)&&(ls=!0)),l=n}_n(e)}function Gf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-rt(s),d=1<<c,g=n[c];g===-1?((d&a)===0||(d&l)!==0)&&(n[c]=e0(d,t)):g<=t&&(e.expiredLanes|=d),s&=~d}if(t=ye,a=ce,a=oi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ys(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ys(l),Xs(a)){case 2:case 8:a=Do;break;case 32:a=si;break;case 268435456:a=Co;break;default:a=si}return l=Vf.bind(null,e),a=Ls(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ys(l),e.callbackPriority=2,e.callbackNode=null,2}function Vf(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ts()&&e.callbackNode!==a)return null;var l=ce;return l=oi(e,e===ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(wf(e,l,t),Gf(e,At()),e.callbackNode!=null&&e.callbackNode===a?Vf.bind(null,e):null)}function Xf(e,t){if(ts())return null;wf(e,t,!0)}function M2(){q2(function(){(pe&6)!==0?Ls(Ro,k2):Yf()})}function Ac(){return Pa===0&&(Pa=_o()),Pa}function Qf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hi(""+e)}function $f(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function A2(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var s=Qf((n[Ie]||null).action),c=l.submitter;c&&(t=(t=c[Ie]||null)?Qf(t.formAction):c.getAttribute("formAction"),t!==null&&(s=t,c=null));var d=new vi("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pa!==0){var g=c?$f(n,c):new FormData(n);Fr(a,{pending:!0,data:g,method:n.method,action:s},null,g)}}else typeof s=="function"&&(d.preventDefault(),g=c?$f(n,c):new FormData(n),Fr(a,{pending:!0,data:g,method:n.method,action:s},s,g))},currentTarget:n}]})}}for(var Rc=0;Rc<mr.length;Rc++){var Dc=mr[Rc],R2=Dc.toLowerCase(),D2=Dc[0].toUpperCase()+Dc.slice(1);Tt(R2,"on"+D2)}Tt(Nu,"onAnimationEnd"),Tt(wu,"onAnimationIteration"),Tt(Eu,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(J0,"onTransitionRun"),Tt(F0,"onTransitionStart"),Tt(W0,"onTransitionCancel"),Tt(Tu,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));function Zf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var c=l.length-1;0<=c;c--){var d=l[c],g=d.instance,z=d.currentTarget;if(d=d.listener,g!==s&&n.isPropagationStopped())break e;s=d,n.currentTarget=z;try{s(n)}catch(M){Xi(M)}n.currentTarget=null,s=g}else for(c=0;c<l.length;c++){if(d=l[c],g=d.instance,z=d.currentTarget,d=d.listener,g!==s&&n.isPropagationStopped())break e;s=d,n.currentTarget=z;try{s(n)}catch(M){Xi(M)}n.currentTarget=null,s=g}}}}function se(e,t){var a=t[Qs];a===void 0&&(a=t[Qs]=new Set);var l=e+"__bubble";a.has(l)||(Kf(t,e,2,!1),a.add(l))}function Cc(e,t,a){var l=0;t&&(l|=4),Kf(a,e,l,t)}var ns="_reactListening"+Math.random().toString(36).slice(2);function _c(e){if(!e[ns]){e[ns]=!0,Lo.forEach(function(a){a!=="selectionchange"&&(C2.has(a)||Cc(a,!1,e),Cc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ns]||(t[ns]=!0,Cc("selectionchange",!1,t))}}function Kf(e,t,a,l){switch(vp(t)){case 2:var n=sh;break;case 8:n=rh;break;default:n=Kc}a=n.bind(null,t,a,e),n=void 0,!ar||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Oc(e,t,a,l,n){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var d=l.stateNode.containerInfo;if(d===n)break;if(c===4)for(c=l.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;d!==null;){if(c=ll(d),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){l=s=c;continue e}d=d.parentNode}}l=l.return}eu(function(){var z=s,M=er(a),D=[];e:{var N=ku.get(e);if(N!==void 0){var w=vi,W=e;switch(e){case"keypress":if(gi(a)===0)break e;case"keydown":case"keyup":w=T0;break;case"focusin":W="focus",w=sr;break;case"focusout":W="blur",w=sr;break;case"beforeblur":case"afterblur":w=sr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=A0;break;case Nu:case wu:case Eu:w=v0;break;case Tu:w=D0;break;case"scroll":case"scrollend":w=p0;break;case"wheel":w=_0;break;case"copy":case"cut":case"paste":w=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=iu;break;case"toggle":case"beforetoggle":w=B0}var Z=(t&4)!==0,xe=!Z&&(e==="scroll"||e==="scrollend"),j=Z?N!==null?N+"Capture":null:N;Z=[];for(var b=z,S;b!==null;){var R=b;if(S=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||S===null||j===null||(R=Il(b,j),R!=null&&Z.push(Bn(b,R,S))),xe)break;b=b.return}0<Z.length&&(N=new w(N,W,null,a,M),D.push({event:N,listeners:Z}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",N&&a!==Is&&(W=a.relatedTarget||a.fromElement)&&(ll(W)||W[al]))break e;if((w||N)&&(N=M.window===M?M:(N=M.ownerDocument)?N.defaultView||N.parentWindow:window,w?(W=a.relatedTarget||a.toElement,w=z,W=W?ll(W):null,W!==null&&(xe=h(W),Z=W.tag,W!==xe||Z!==5&&Z!==27&&Z!==6)&&(W=null)):(w=null,W=z),w!==W)){if(Z=lu,R="onMouseLeave",j="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(Z=iu,R="onPointerLeave",j="onPointerEnter",b="pointer"),xe=w==null?N:Pl(w),S=W==null?N:Pl(W),N=new Z(R,b+"leave",w,a,M),N.target=xe,N.relatedTarget=S,R=null,ll(M)===z&&(Z=new Z(j,b+"enter",W,a,M),Z.target=S,Z.relatedTarget=xe,R=Z),xe=R,w&&W)t:{for(Z=w,j=W,b=0,S=Z;S;S=Hl(S))b++;for(S=0,R=j;R;R=Hl(R))S++;for(;0<b-S;)Z=Hl(Z),b--;for(;0<S-b;)j=Hl(j),S--;for(;b--;){if(Z===j||j!==null&&Z===j.alternate)break t;Z=Hl(Z),j=Hl(j)}Z=null}else Z=null;w!==null&&Jf(D,N,w,Z,!1),W!==null&&xe!==null&&Jf(D,xe,W,Z,!0)}}e:{if(N=z?Pl(z):window,w=N.nodeName&&N.nodeName.toLowerCase(),w==="select"||w==="input"&&N.type==="file")var G=pu;else if(du(N))if(hu)G=$0;else{G=X0;var le=V0}else w=N.nodeName,!w||w.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?z&&Ps(z.elementType)&&(G=pu):G=Q0;if(G&&(G=G(e,z))){fu(D,G,a,M);break e}le&&le(e,N,z),e==="focusout"&&z&&N.type==="number"&&z.memoizedProps.value!=null&&Ws(N,"number",N.value)}switch(le=z?Pl(z):window,e){case"focusin":(du(le)||le.contentEditable==="true")&&(pl=le,fr=z,cn=null);break;case"focusout":cn=fr=pl=null;break;case"mousedown":pr=!0;break;case"contextmenu":case"mouseup":case"dragend":pr=!1,Su(D,a,M);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":Su(D,a,M)}var Q;if(cr)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else fl?ou(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(su&&a.locale!=="ko"&&(fl||J!=="onCompositionStart"?J==="onCompositionEnd"&&fl&&(Q=tu()):(ua=M,lr="value"in ua?ua.value:ua.textContent,fl=!0)),le=is(z,J),0<le.length&&(J=new nu(J,e,null,a,M),D.push({event:J,listeners:le}),Q?J.data=Q:(Q=uu(a),Q!==null&&(J.data=Q)))),(Q=U0?q0(e,a):L0(e,a))&&(J=is(z,"onBeforeInput"),0<J.length&&(le=new nu("onBeforeInput","beforeinput",null,a,M),D.push({event:le,listeners:J}),le.data=Q)),A2(D,e,z,a,M)}Zf(D,t)})}function Bn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function is(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=Il(e,a),n!=null&&l.unshift(Bn(e,n,s)),n=Il(e,t),n!=null&&l.push(Bn(e,n,s))),e.tag===3)return l;e=e.return}return[]}function Hl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,t,a,l,n){for(var s=t._reactName,c=[];a!==null&&a!==l;){var d=a,g=d.alternate,z=d.stateNode;if(d=d.tag,g!==null&&g===l)break;d!==5&&d!==26&&d!==27||z===null||(g=z,n?(z=Il(a,s),z!=null&&c.unshift(Bn(a,z,g))):n||(z=Il(a,s),z!=null&&c.push(Bn(a,z,g)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var _2=/\r\n?/g,O2=/\u0000|\uFFFD/g;function Ff(e){return(typeof e=="string"?e:""+e).replace(_2,`
`).replace(O2,"")}function Wf(e,t){return t=Ff(t),Ff(e)===t}function ss(){}function ge(e,t,a,l,n,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ol(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ol(e,""+l);break;case"className":di(e,"class",l);break;case"tabIndex":di(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":di(e,a,l);break;case"style":Po(e,l,s);break;case"data":if(t!=="object"){di(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&ge(e,t,"name",n.name,n,null),ge(e,t,"formEncType",n.formEncType,n,null),ge(e,t,"formMethod",n.formMethod,n,null),ge(e,t,"formTarget",n.formTarget,n,null)):(ge(e,t,"encType",n.encType,n,null),ge(e,t,"method",n.method,n,null),ge(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ss);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=hi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),ui(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ui(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=d0.get(a)||a,ui(e,a,l))}}function Bc(e,t,a,l,n,s){switch(a){case"style":Po(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ol(e,l):(typeof l=="number"||typeof l=="bigint")&&ol(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ss);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),s=e[Ie]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ui(e,a,l)}}}function Qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,s;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];if(c!=null)switch(s){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ge(e,t,s,c,a,null)}}n&&ge(e,t,"srcSet",a.srcSet,a,null),l&&ge(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var d=s=c=n=null,g=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":n=M;break;case"type":c=M;break;case"checked":g=M;break;case"defaultChecked":z=M;break;case"value":s=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:ge(e,t,l,M,a,null)}}Ko(e,s,d,g,z,c,n,!1),fi(e);return;case"select":se("invalid",e),l=c=s=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":s=d;break;case"defaultValue":c=d;break;case"multiple":l=d;default:ge(e,t,n,d,a,null)}t=s,a=c,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":se("invalid",e),s=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(d=a[c],d!=null))switch(c){case"value":l=d;break;case"defaultValue":n=d;break;case"children":s=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:ge(e,t,c,d,a,null)}Fo(e,l,n,s),fi(e);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ge(e,t,g,l,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<On.length;l++)se(On[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ge(e,t,z,l,a,null)}return;default:if(Ps(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&Bc(e,t,M,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&ge(e,t,d,l,a,null))}function B2(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,c=null,d=null,g=null,z=null,M=null;for(w in a){var D=a[w];if(a.hasOwnProperty(w)&&D!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":g=D;default:l.hasOwnProperty(w)||ge(e,t,w,null,l,D)}}for(var N in l){var w=l[N];if(D=a[N],l.hasOwnProperty(N)&&(w!=null||D!=null))switch(N){case"type":s=w;break;case"name":n=w;break;case"checked":z=w;break;case"defaultChecked":M=w;break;case"value":c=w;break;case"defaultValue":d=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:w!==D&&ge(e,t,N,w,l,D)}}Fs(e,c,d,g,z,M,s,n);return;case"select":w=c=d=N=null;for(s in a)if(g=a[s],a.hasOwnProperty(s)&&g!=null)switch(s){case"value":break;case"multiple":w=g;default:l.hasOwnProperty(s)||ge(e,t,s,null,l,g)}for(n in l)if(s=l[n],g=a[n],l.hasOwnProperty(n)&&(s!=null||g!=null))switch(n){case"value":N=s;break;case"defaultValue":d=s;break;case"multiple":c=s;default:s!==g&&ge(e,t,n,s,l,g)}t=d,a=c,l=w,N!=null?cl(e,!!a,N,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":w=N=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ge(e,t,d,null,l,n)}for(c in l)if(n=l[c],s=a[c],l.hasOwnProperty(c)&&(n!=null||s!=null))switch(c){case"value":N=n;break;case"defaultValue":w=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==s&&ge(e,t,c,n,l,s)}Jo(e,N,w);return;case"option":for(var W in a)if(N=a[W],a.hasOwnProperty(W)&&N!=null&&!l.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:ge(e,t,W,null,l,N)}for(g in l)if(N=l[g],w=a[g],l.hasOwnProperty(g)&&N!==w&&(N!=null||w!=null))switch(g){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:ge(e,t,g,N,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)N=a[Z],a.hasOwnProperty(Z)&&N!=null&&!l.hasOwnProperty(Z)&&ge(e,t,Z,null,l,N);for(z in l)if(N=l[z],w=a[z],l.hasOwnProperty(z)&&N!==w&&(N!=null||w!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:ge(e,t,z,N,l,w)}return;default:if(Ps(t)){for(var xe in a)N=a[xe],a.hasOwnProperty(xe)&&N!==void 0&&!l.hasOwnProperty(xe)&&Bc(e,t,xe,void 0,l,N);for(M in l)N=l[M],w=a[M],!l.hasOwnProperty(M)||N===w||N===void 0&&w===void 0||Bc(e,t,M,N,l,w);return}}for(var j in a)N=a[j],a.hasOwnProperty(j)&&N!=null&&!l.hasOwnProperty(j)&&ge(e,t,j,null,l,N);for(D in l)N=l[D],w=a[D],!l.hasOwnProperty(D)||N===w||N==null&&w==null||ge(e,t,D,N,l,w)}var Hc=null,Uc=null;function rs(e){return e.nodeType===9?e:e.ownerDocument}function Pf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function If(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lc=null;function H2(){var e=window.event;return e&&e.type==="popstate"?e===Lc?!1:(Lc=e,!0):(Lc=null,!1)}var ep=typeof setTimeout=="function"?setTimeout:void 0,U2=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,q2=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(e){return tp.resolve(null).then(e).catch(L2)}:ep;function L2(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function ap(e,t){var a=t,l=0,n=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(0<l&&8>l){a=l;var c=e.ownerDocument;if(a&1&&Hn(c.documentElement),a&2&&Hn(c.body),a&4)for(a=c.head,Hn(a),c=a.firstChild;c;){var d=c.nextSibling,g=c.nodeName;c[Wl]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=d}}if(n===0){e.removeChild(s),Qn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=s}while(a);Qn(t)}function Yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yc(a),$s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Y2(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function G2(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function V2(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Vc=null;function lp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function np(e,t,a){switch(t=rs(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Hn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$s(e)}var wt=new Map,ip=new Set;function cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=q.d;q.d={f:X2,r:Q2,D:$2,C:Z2,L:K2,m:J2,X:W2,S:F2,M:P2};function X2(){var e=ta.f(),t=Ii();return e||t}function Q2(e){var t=nl(e);t!==null&&t.tag===5&&t.type==="form"?Nd(t):ta.r(e)}var Ul=typeof document>"u"?null:document;function sp(e,t,a){var l=Ul;if(l&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),ip.has(n)||(ip.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Qe(t,"link",e),Ue(t),l.head.appendChild(t)))}}function $2(e){ta.D(e),sp("dns-prefetch",e,null)}function Z2(e,t){ta.C(e,t),sp("preconnect",e,t)}function K2(e,t,a){ta.L(e,t,a);var l=Ul;if(l&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+vt(a.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var s=n;switch(t){case"style":s=ql(e);break;case"script":s=Ll(e)}wt.has(s)||(e=k({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),wt.set(s,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Un(s))||t==="script"&&l.querySelector(qn(s))||(t=l.createElement("link"),Qe(t,"link",e),Ue(t),l.head.appendChild(t)))}}function J2(e,t){ta.m(e,t);var a=Ul;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(e)+'"]',s=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ll(e)}if(!wt.has(s)&&(e=k({rel:"modulepreload",href:e},t),wt.set(s,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qn(s)))return}l=a.createElement("link"),Qe(l,"link",e),Ue(l),a.head.appendChild(l)}}}function F2(e,t,a){ta.S(e,t,a);var l=Ul;if(l&&e){var n=il(l).hoistableStyles,s=ql(e);t=t||"default";var c=n.get(s);if(!c){var d={loading:0,preload:null};if(c=l.querySelector(Un(s)))d.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},a),(a=wt.get(s))&&Xc(e,a);var g=c=l.createElement("link");Ue(g),Qe(g,"link",e),g._p=new Promise(function(z,M){g.onload=z,g.onerror=M}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,os(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:d},n.set(s,c)}}}function W2(e,t){ta.X(e,t);var a=Ul;if(a&&e){var l=il(a).hoistableScripts,n=Ll(e),s=l.get(n);s||(s=a.querySelector(qn(n)),s||(e=k({src:e,async:!0},t),(t=wt.get(n))&&Qc(e,t),s=a.createElement("script"),Ue(s),Qe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function P2(e,t){ta.M(e,t);var a=Ul;if(a&&e){var l=il(a).hoistableScripts,n=Ll(e),s=l.get(n);s||(s=a.querySelector(qn(n)),s||(e=k({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&Qc(e,t),s=a.createElement("script"),Ue(s),Qe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function rp(e,t,a,l){var n=(n=I.current)?cs(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ql(a.href),a=il(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ql(a.href);var s=il(n).hoistableStyles,c=s.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=n.querySelector(Un(e)))&&!s._p&&(c.instance=s,c.state.loading=5),wt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wt.set(e,a),s||I2(n,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ll(a),a=il(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ql(e){return'href="'+vt(e)+'"'}function Un(e){return'link[rel="stylesheet"]['+e+"]"}function cp(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function I2(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Qe(t,"link",a),Ue(t),e.head.appendChild(t))}function Ll(e){return'[src="'+vt(e)+'"]'}function qn(e){return"script[async]"+e}function op(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,Ue(l),l;var n=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ue(l),Qe(l,"style",n),os(l,a.precedence,e),t.instance=l;case"stylesheet":n=ql(a.href);var s=e.querySelector(Un(n));if(s)return t.state.loading|=4,t.instance=s,Ue(s),s;l=cp(a),(n=wt.get(n))&&Xc(l,n),s=(e.ownerDocument||e).createElement("link"),Ue(s);var c=s;return c._p=new Promise(function(d,g){c.onload=d,c.onerror=g}),Qe(s,"link",l),t.state.loading|=4,os(s,a.precedence,e),t.instance=s;case"script":return s=Ll(a.src),(n=e.querySelector(qn(s)))?(t.instance=n,Ue(n),n):(l=a,(n=wt.get(s))&&(l=k({},a),Qc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ue(n),Qe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,os(l,a.precedence,e));return t.instance}function os(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,s=n,c=0;c<l.length;c++){var d=l[c];if(d.dataset.precedence===t)s=d;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var us=null;function up(e,t,a){if(us===null){var l=new Map,n=us=new Map;n.set(a,l)}else n=us,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var s=a[n];if(!(s[Wl]||s[Je]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(t)||"";c=e+c;var d=l.get(c);d?d.push(s):l.set(c,[s])}}return l}function dp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function eh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function fp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ln=null;function th(){}function ah(e,t,a){if(Ln===null)throw Error(u(475));var l=Ln;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=ql(a.href),s=e.querySelector(Un(n));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ds.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=s,Ue(s);return}s=e.ownerDocument||e,a=cp(a),(n=wt.get(n))&&Xc(a,n),s=s.createElement("link"),Ue(s);var c=s;c._p=new Promise(function(d,g){c.onload=d,c.onerror=g}),Qe(s,"link",a),t.instance=s}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=ds.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function lh(){if(Ln===null)throw Error(u(475));var e=Ln;return e.stylesheets&&e.count===0&&$c(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ds(){if(this.count--,this.count===0){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fs=null;function $c(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fs=new Map,t.forEach(nh,e),fs=null,ds.call(e))}function nh(e,t){if(!(t.state.loading&4)){var a=fs.get(e);if(a)var l=a.get(null);else{a=new Map,fs.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var c=n[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),s=a.get(c)||l,s===l&&a.set(null,n),a.set(c,n),this.count++,l=ds.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Yn={$$typeof:ee,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function ih(e,t,a,l,n,s,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.hiddenUpdates=Gs(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function pp(e,t,a,l,n,s,c,d,g,z,M,D){return e=new ih(e,t,a,c,d,g,z,D),t=1,s===!0&&(t|=24),s=ot(3,null,null,t),e.current=s,s.stateNode=e,t=Tr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},Rr(s),e}function hp(e){return e?(e=xl,e):xl}function mp(e,t,a,l,n,s){n=hp(n),l.context===null?l.context=n:l.pendingContext=n,l=pa(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=ha(e,l,t),a!==null&&(ht(a,e,t),xn(a,e,t))}function gp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Zc(e,t){gp(e,t),(e=e.alternate)&&gp(e,t)}function xp(e){if(e.tag===13){var t=gl(e,67108864);t!==null&&ht(t,e,67108864),Zc(e,67108864)}}var ps=!0;function sh(e,t,a,l){var n=A.T;A.T=null;var s=q.p;try{q.p=2,Kc(e,t,a,l)}finally{q.p=s,A.T=n}}function rh(e,t,a,l){var n=A.T;A.T=null;var s=q.p;try{q.p=8,Kc(e,t,a,l)}finally{q.p=s,A.T=n}}function Kc(e,t,a,l){if(ps){var n=Jc(l);if(n===null)Oc(e,t,l,hs,a),bp(e,l);else if(oh(n,e,t,a,l))l.stopPropagation();else if(bp(e,l),t&4&&-1<ch.indexOf(e)){for(;n!==null;){var s=nl(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=Oa(s.pendingLanes);if(c!==0){var d=s;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var g=1<<31-rt(c);d.entanglements[1]|=g,c&=~g}Ot(s),(pe&6)===0&&(Wi=At()+500,_n(0))}}break;case 13:d=gl(s,2),d!==null&&ht(d,s,2),Ii(),Zc(s,2)}if(s=Jc(l),s===null&&Oc(e,t,l,hs,a),s===n)break;n=s}n!==null&&l.stopPropagation()}else Oc(e,t,l,null,a)}}function Jc(e){return e=er(e),Fc(e)}var hs=null;function Fc(e){if(hs=null,e=ll(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hs=e,null}function vp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z1()){case Ro:return 2;case Do:return 8;case si:case K1:return 32;case Co:return 268435456;default:return 32}default:return 32}}var Wc=!1,Ta=null,ka=null,Ma=null,Gn=new Map,Vn=new Map,Aa=[],ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bp(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Xn(e,t,a,l,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[n]},t!==null&&(t=nl(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function oh(e,t,a,l,n){switch(t){case"focusin":return Ta=Xn(Ta,e,t,a,l,n),!0;case"dragenter":return ka=Xn(ka,e,t,a,l,n),!0;case"mouseover":return Ma=Xn(Ma,e,t,a,l,n),!0;case"pointerover":var s=n.pointerId;return Gn.set(s,Xn(Gn.get(s)||null,e,t,a,l,n)),!0;case"gotpointercapture":return s=n.pointerId,Vn.set(s,Xn(Vn.get(s)||null,e,t,a,l,n)),!0}return!1}function yp(e){var t=ll(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,a0(e.priority,function(){if(a.tag===13){var l=pt();l=Vs(l);var n=gl(a,l);n!==null&&ht(n,a,l),Zc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Jc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Is=l,a.target.dispatchEvent(l),Is=null}else return t=nl(a),t!==null&&xp(t),e.blockedOn=a,!1;t.shift()}return!0}function jp(e,t,a){ms(e)&&a.delete(t)}function uh(){Wc=!1,Ta!==null&&ms(Ta)&&(Ta=null),ka!==null&&ms(ka)&&(ka=null),Ma!==null&&ms(Ma)&&(Ma=null),Gn.forEach(jp),Vn.forEach(jp)}function gs(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uh)))}var xs=null;function Sp(e){xs!==e&&(xs=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xs===e&&(xs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Fc(l||a)===null)continue;break}var s=nl(a);s!==null&&(e.splice(t,3),t-=3,Fr(s,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Qn(e){function t(g){return gs(g,e)}Ta!==null&&gs(Ta,e),ka!==null&&gs(ka,e),Ma!==null&&gs(Ma,e),Gn.forEach(t),Vn.forEach(t);for(var a=0;a<Aa.length;a++){var l=Aa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)yp(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],s=a[l+1],c=n[Ie]||null;if(typeof s=="function")c||Sp(a);else if(c){var d=null;if(s&&s.hasAttribute("formAction")){if(n=s,c=s[Ie]||null)d=c.formAction;else if(Fc(n)!==null)continue}else d=c.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),Sp(a)}}}function Pc(e){this._internalRoot=e}vs.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=pt();mp(a,l,e,t,null,null)},vs.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mp(e.current,2,null,e,null,null),Ii(),t[al]=null}};function vs(e){this._internalRoot=e}vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Aa.length&&t!==0&&t<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&yp(e)}};var zp=o.version;if(zp!=="19.1.1")throw Error(u(527,zp,"19.1.1"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var dh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{Kl=bs.inject(dh),st=bs}catch{}}return Zn.createRoot=function(e,t){if(!p(e))throw Error(u(299));var a=!1,l="",n=Ud,s=qd,c=Ld,d=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks)),t=pp(e,1,!1,null,null,a,l,n,s,c,d,null),e[al]=t.current,_c(e),new Pc(t)},Zn.hydrateRoot=function(e,t,a){if(!p(e))throw Error(u(299));var l=!1,n="",s=Ud,c=qd,d=Ld,g=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),t=pp(e,1,!0,t,a??null,l,n,s,c,d,g,z),t.context=hp(null),a=t.current,l=pt(),l=Vs(l),n=pa(l),n.callback=null,ha(a,n,l),a=l,t.current.lanes=a,Fl(t,a),Ot(t),e[al]=t.current,_c(e),new vs(t)},Zn.version="19.1.1",Zn}var Cp;function jh(){if(Cp)return to.exports;Cp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),to.exports=yh(),to.exports}var Sh=jh();const zh=h1(Sh);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _p="popstate";function Nh(r={}){function o(u,p){let{pathname:h,search:y,hash:E}=u.location;return vo("",{pathname:h,search:y,hash:E},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function f(u,p){return typeof p=="string"?p:ei(p)}return Eh(o,f,null,r)}function we(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Ut(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function wh(){return Math.random().toString(36).substring(2,10)}function Op(r,o){return{usr:r.state,key:r.key,idx:o}}function vo(r,o,f=null,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?Ql(o):o,state:f,key:o&&o.key||u||wh()}}function ei({pathname:r="/",search:o="",hash:f=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function Ql(r){let o={};if(r){let f=r.indexOf("#");f>=0&&(o.hash=r.substring(f),r=r.substring(0,f));let u=r.indexOf("?");u>=0&&(o.search=r.substring(u),r=r.substring(0,u)),r&&(o.pathname=r)}return o}function Eh(r,o,f,u={}){let{window:p=document.defaultView,v5Compat:h=!1}=u,y=p.history,E="POP",x=null,m=k();m==null&&(m=0,y.replaceState({...y.state,idx:m},""));function k(){return(y.state||{idx:null}).idx}function _(){E="POP";let V=k(),H=V==null?null:V-m;m=V,x&&x({action:E,location:X.location,delta:H})}function O(V,H){E="PUSH";let oe=vo(X.location,V,H);m=k()+1;let ee=Op(oe,m),ze=X.createHref(oe);try{y.pushState(ee,"",ze)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;p.location.assign(ze)}h&&x&&x({action:E,location:X.location,delta:1})}function B(V,H){E="REPLACE";let oe=vo(X.location,V,H);m=k();let ee=Op(oe,m),ze=X.createHref(oe);y.replaceState(ee,"",ze),h&&x&&x({action:E,location:X.location,delta:0})}function L(V){return Th(V)}let X={get action(){return E},get location(){return r(p,y)},listen(V){if(x)throw new Error("A history only accepts one active listener");return p.addEventListener(_p,_),x=V,()=>{p.removeEventListener(_p,_),x=null}},createHref(V){return o(p,V)},createURL:L,encodeLocation(V){let H=L(V);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:O,replace:B,go(V){return y.go(V)}};return X}function Th(r,o=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),we(f,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:ei(r);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function m1(r,o,f="/"){return kh(r,o,f,!1)}function kh(r,o,f,u){let p=typeof o=="string"?Ql(o):o,h=sa(p.pathname||"/",f);if(h==null)return null;let y=g1(r);Mh(y);let E=null;for(let x=0;E==null&&x<y.length;++x){let m=Lh(h);E=Uh(y[x],m,u)}return E}function g1(r,o=[],f=[],u=""){let p=(h,y,E)=>{let x={relativePath:E===void 0?h.path||"":E,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};x.relativePath.startsWith("/")&&(we(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length));let m=ia([u,x.relativePath]),k=f.concat(x);h.children&&h.children.length>0&&(we(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),g1(h.children,o,k,m)),!(h.path==null&&!h.index)&&o.push({path:m,score:Bh(m,h.index),routesMeta:k})};return r.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))p(h,y);else for(let E of x1(h.path))p(h,y,E)}),o}function x1(r){let o=r.split("/");if(o.length===0)return[];let[f,...u]=o,p=f.endsWith("?"),h=f.replace(/\?$/,"");if(u.length===0)return p?[h,""]:[h];let y=x1(u.join("/")),E=[];return E.push(...y.map(x=>x===""?h:[h,x].join("/"))),p&&E.push(...y),E.map(x=>r.startsWith("/")&&x===""?"/":x)}function Mh(r){r.sort((o,f)=>o.score!==f.score?f.score-o.score:Hh(o.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var Ah=/^:[\w-]+$/,Rh=3,Dh=2,Ch=1,_h=10,Oh=-2,Bp=r=>r==="*";function Bh(r,o){let f=r.split("/"),u=f.length;return f.some(Bp)&&(u+=Oh),o&&(u+=Dh),f.filter(p=>!Bp(p)).reduce((p,h)=>p+(Ah.test(h)?Rh:h===""?Ch:_h),u)}function Hh(r,o){return r.length===o.length&&r.slice(0,-1).every((u,p)=>u===o[p])?r[r.length-1]-o[o.length-1]:0}function Uh(r,o,f=!1){let{routesMeta:u}=r,p={},h="/",y=[];for(let E=0;E<u.length;++E){let x=u[E],m=E===u.length-1,k=h==="/"?o:o.slice(h.length)||"/",_=Ms({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},k),O=x.route;if(!_&&m&&f&&!u[u.length-1].route.index&&(_=Ms({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},k)),!_)return null;Object.assign(p,_.params),y.push({params:p,pathname:ia([h,_.pathname]),pathnameBase:Xh(ia([h,_.pathnameBase])),route:O}),_.pathnameBase!=="/"&&(h=ia([h,_.pathnameBase]))}return y}function Ms(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,u]=qh(r.path,r.caseSensitive,r.end),p=o.match(f);if(!p)return null;let h=p[0],y=h.replace(/(.)\/+$/,"$1"),E=p.slice(1);return{params:u.reduce((m,{paramName:k,isOptional:_},O)=>{if(k==="*"){let L=E[O]||"";y=h.slice(0,h.length-L.length).replace(/(.)\/+$/,"$1")}const B=E[O];return _&&!B?m[k]=void 0:m[k]=(B||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:y,pattern:r}}function qh(r,o=!1,f=!0){Ut(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],p="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,x)=>(u.push({paramName:E,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(u.push({paramName:"*"}),p+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?p+="\\/*$":r!==""&&r!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,o?void 0:"i"),u]}function Lh(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ut(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function sa(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let f=o.endsWith("/")?o.length-1:o.length,u=r.charAt(f);return u&&u!=="/"?null:r.slice(f)||"/"}function Yh(r,o="/"){let{pathname:f,search:u="",hash:p=""}=typeof r=="string"?Ql(r):r;return{pathname:f?f.startsWith("/")?f:Gh(f,o):o,search:Qh(u),hash:$h(p)}}function Gh(r,o){let f=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(p=>{p===".."?f.length>1&&f.pop():p!=="."&&f.push(p)}),f.length>1?f.join("/"):"/"}function io(r,o,f,u){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vh(r){return r.filter((o,f)=>f===0||o.route.path&&o.route.path.length>0)}function v1(r){let o=Vh(r);return o.map((f,u)=>u===o.length-1?f.pathname:f.pathnameBase)}function b1(r,o,f,u=!1){let p;typeof r=="string"?p=Ql(r):(p={...r},we(!p.pathname||!p.pathname.includes("?"),io("?","pathname","search",p)),we(!p.pathname||!p.pathname.includes("#"),io("#","pathname","hash",p)),we(!p.search||!p.search.includes("#"),io("#","search","hash",p)));let h=r===""||p.pathname==="",y=h?"/":p.pathname,E;if(y==null)E=f;else{let _=o.length-1;if(!u&&y.startsWith("..")){let O=y.split("/");for(;O[0]==="..";)O.shift(),_-=1;p.pathname=O.join("/")}E=_>=0?o[_]:"/"}let x=Yh(p,E),m=y&&y!=="/"&&y.endsWith("/"),k=(h||y===".")&&f.endsWith("/");return!x.pathname.endsWith("/")&&(m||k)&&(x.pathname+="/"),x}var ia=r=>r.join("/").replace(/\/\/+/g,"/"),Xh=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Qh=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,$h=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Zh(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var y1=["POST","PUT","PATCH","DELETE"];new Set(y1);var Kh=["GET",...y1];new Set(Kh);var $l=T.createContext(null);$l.displayName="DataRouter";var Os=T.createContext(null);Os.displayName="DataRouterState";T.createContext(!1);var j1=T.createContext({isTransitioning:!1});j1.displayName="ViewTransition";var Jh=T.createContext(new Map);Jh.displayName="Fetchers";var Fh=T.createContext(null);Fh.displayName="Await";var qt=T.createContext(null);qt.displayName="Navigation";var ai=T.createContext(null);ai.displayName="Location";var Lt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var Eo=T.createContext(null);Eo.displayName="RouteError";function Wh(r,{relative:o}={}){we(li(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=T.useContext(qt),{hash:p,pathname:h,search:y}=ni(r,{relative:o}),E=h;return f!=="/"&&(E=h==="/"?f:ia([f,h])),u.createHref({pathname:E,search:y,hash:p})}function li(){return T.useContext(ai)!=null}function tl(){return we(li(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(ai).location}var S1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function z1(r){T.useContext(qt).static||T.useLayoutEffect(r)}function Ph(){let{isDataRoute:r}=T.useContext(Lt);return r?fm():Ih()}function Ih(){we(li(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext($l),{basename:o,navigator:f}=T.useContext(qt),{matches:u}=T.useContext(Lt),{pathname:p}=tl(),h=JSON.stringify(v1(u)),y=T.useRef(!1);return z1(()=>{y.current=!0}),T.useCallback((x,m={})=>{if(Ut(y.current,S1),!y.current)return;if(typeof x=="number"){f.go(x);return}let k=b1(x,JSON.parse(h),p,m.relative==="path");r==null&&o!=="/"&&(k.pathname=k.pathname==="/"?o:ia([o,k.pathname])),(m.replace?f.replace:f.push)(k,m.state,m)},[o,f,h,p,r])}T.createContext(null);function em(){let{matches:r}=T.useContext(Lt),o=r[r.length-1];return o?o.params:{}}function ni(r,{relative:o}={}){let{matches:f}=T.useContext(Lt),{pathname:u}=tl(),p=JSON.stringify(v1(f));return T.useMemo(()=>b1(r,JSON.parse(p),u,o==="path"),[r,p,u,o])}function tm(r,o){return N1(r,o)}function N1(r,o,f,u){we(li(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=T.useContext(qt),{matches:h}=T.useContext(Lt),y=h[h.length-1],E=y?y.params:{},x=y?y.pathname:"/",m=y?y.pathnameBase:"/",k=y&&y.route;{let H=k&&k.path||"";w1(x,!k||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let _=tl(),O;if(o){let H=typeof o=="string"?Ql(o):o;we(m==="/"||H.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${H.pathname}" was given in the \`location\` prop.`),O=H}else O=_;let B=O.pathname||"/",L=B;if(m!=="/"){let H=m.replace(/^\//,"").split("/");L="/"+B.replace(/^\//,"").split("/").slice(H.length).join("/")}let X=m1(r,{pathname:L});Ut(k||X!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),Ut(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=sm(X&&X.map(H=>Object.assign({},H,{params:Object.assign({},E,H.params),pathname:ia([m,p.encodeLocation?p.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?m:ia([m,p.encodeLocation?p.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),h,f,u);return o&&V?T.createElement(ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},V):V}function am(){let r=dm(),o=Zh(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",r),y=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:h},"ErrorBoundary")," or"," ",T.createElement("code",{style:h},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},o),f?T.createElement("pre",{style:p},f):null,y)}var lm=T.createElement(am,null),nm=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){console.error("React Router caught the following error during render",r,o)}render(){return this.state.error!==void 0?T.createElement(Lt.Provider,{value:this.props.routeContext},T.createElement(Eo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function im({routeContext:r,match:o,children:f}){let u=T.useContext($l);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),T.createElement(Lt.Provider,{value:r},f)}function sm(r,o=[],f=null,u=null){if(r==null){if(!f)return null;if(f.errors)r=f.matches;else if(o.length===0&&!f.initialized&&f.matches.length>0)r=f.matches;else return null}let p=r,h=f?.errors;if(h!=null){let x=p.findIndex(m=>m.route.id&&h?.[m.route.id]!==void 0);we(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,x+1))}let y=!1,E=-1;if(f)for(let x=0;x<p.length;x++){let m=p[x];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(E=x),m.route.id){let{loaderData:k,errors:_}=f,O=m.route.loader&&!k.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||O){y=!0,E>=0?p=p.slice(0,E+1):p=[p[0]];break}}}return p.reduceRight((x,m,k)=>{let _,O=!1,B=null,L=null;f&&(_=h&&m.route.id?h[m.route.id]:void 0,B=m.route.errorElement||lm,y&&(E<0&&k===0?(w1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,L=null):E===k&&(O=!0,L=m.route.hydrateFallbackElement||null)));let X=o.concat(p.slice(0,k+1)),V=()=>{let H;return _?H=B:O?H=L:m.route.Component?H=T.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=x,T.createElement(im,{match:m,routeContext:{outlet:x,matches:X,isDataRoute:f!=null},children:H})};return f&&(m.route.ErrorBoundary||m.route.errorElement||k===0)?T.createElement(nm,{location:f.location,revalidation:f.revalidation,component:B,error:_,children:V(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):V()},null)}function To(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rm(r){let o=T.useContext($l);return we(o,To(r)),o}function cm(r){let o=T.useContext(Os);return we(o,To(r)),o}function om(r){let o=T.useContext(Lt);return we(o,To(r)),o}function ko(r){let o=om(r),f=o.matches[o.matches.length-1];return we(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function um(){return ko("useRouteId")}function dm(){let r=T.useContext(Eo),o=cm("useRouteError"),f=ko("useRouteError");return r!==void 0?r:o.errors?.[f]}function fm(){let{router:r}=rm("useNavigate"),o=ko("useNavigate"),f=T.useRef(!1);return z1(()=>{f.current=!0}),T.useCallback(async(p,h={})=>{Ut(f.current,S1),f.current&&(typeof p=="number"?r.navigate(p):await r.navigate(p,{fromRouteId:o,...h}))},[r,o])}var Hp={};function w1(r,o,f){!o&&!Hp[r]&&(Hp[r]=!0,Ut(!1,f))}T.memo(pm);function pm({routes:r,future:o,state:f}){return N1(r,void 0,f,o)}function Ht(r){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hm({basename:r="/",children:o=null,location:f,navigationType:u="POP",navigator:p,static:h=!1}){we(!li(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=r.replace(/^\/*/,"/"),E=T.useMemo(()=>({basename:y,navigator:p,static:h,future:{}}),[y,p,h]);typeof f=="string"&&(f=Ql(f));let{pathname:x="/",search:m="",hash:k="",state:_=null,key:O="default"}=f,B=T.useMemo(()=>{let L=sa(x,y);return L==null?null:{location:{pathname:L,search:m,hash:k,state:_,key:O},navigationType:u}},[y,x,m,k,_,O,u]);return Ut(B!=null,`<Router basename="${y}"> is not able to match the URL "${x}${m}${k}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:T.createElement(qt.Provider,{value:E},T.createElement(ai.Provider,{children:o,value:B}))}function mm({children:r,location:o}){return tm(bo(r),o)}function bo(r,o=[]){let f=[];return T.Children.forEach(r,(u,p)=>{if(!T.isValidElement(u))return;let h=[...o,p];if(u.type===T.Fragment){f.push.apply(f,bo(u.props.children,h));return}we(u.type===Ht,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=bo(u.props.children,h)),f.push(y)}),f}var ws="get",Es="application/x-www-form-urlencoded";function Bs(r){return r!=null&&typeof r.tagName=="string"}function gm(r){return Bs(r)&&r.tagName.toLowerCase()==="button"}function xm(r){return Bs(r)&&r.tagName.toLowerCase()==="form"}function vm(r){return Bs(r)&&r.tagName.toLowerCase()==="input"}function bm(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ym(r,o){return r.button===0&&(!o||o==="_self")&&!bm(r)}var ys=null;function jm(){if(ys===null)try{new FormData(document.createElement("form"),0),ys=!1}catch{ys=!0}return ys}var Sm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function so(r){return r!=null&&!Sm.has(r)?(Ut(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Es}"`),null):r}function zm(r,o){let f,u,p,h,y;if(xm(r)){let E=r.getAttribute("action");u=E?sa(E,o):null,f=r.getAttribute("method")||ws,p=so(r.getAttribute("enctype"))||Es,h=new FormData(r)}else if(gm(r)||vm(r)&&(r.type==="submit"||r.type==="image")){let E=r.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||E.getAttribute("action");if(u=x?sa(x,o):null,f=r.getAttribute("formmethod")||E.getAttribute("method")||ws,p=so(r.getAttribute("formenctype"))||so(E.getAttribute("enctype"))||Es,h=new FormData(E,r),!jm()){let{name:m,type:k,value:_}=r;if(k==="image"){let O=m?`${m}.`:"";h.append(`${O}x`,"0"),h.append(`${O}y`,"0")}else m&&h.append(m,_)}}else{if(Bs(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=ws,u=null,p=Es,y=r}return h&&p==="text/plain"&&(y=h,h=void 0),{action:u,method:f.toLowerCase(),encType:p,formData:h,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mo(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Nm(r,o,f){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname=`_root.${f}`:o&&sa(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${f}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${f}`,u}async function wm(r,o){if(r.id in o)return o[r.id];try{let f=await import(r.module);return o[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Em(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Tm(r,o,f){let u=await Promise.all(r.map(async p=>{let h=o.routes[p.route.id];if(h){let y=await wm(h,f);return y.links?y.links():[]}return[]}));return Rm(u.flat(1).filter(Em).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Up(r,o,f,u,p,h){let y=(x,m)=>f[m]?x.route.id!==f[m].route.id:!0,E=(x,m)=>f[m].pathname!==x.pathname||f[m].route.path?.endsWith("*")&&f[m].params["*"]!==x.params["*"];return h==="assets"?o.filter((x,m)=>y(x,m)||E(x,m)):h==="data"?o.filter((x,m)=>{let k=u.routes[x.route.id];if(!k||!k.hasLoader)return!1;if(y(x,m)||E(x,m))return!0;if(x.route.shouldRevalidate){let _=x.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function km(r,o,{includeHydrateFallback:f}={}){return Mm(r.map(u=>{let p=o.routes[u.route.id];if(!p)return[];let h=[p.module];return p.clientActionModule&&(h=h.concat(p.clientActionModule)),p.clientLoaderModule&&(h=h.concat(p.clientLoaderModule)),f&&p.hydrateFallbackModule&&(h=h.concat(p.hydrateFallbackModule)),p.imports&&(h=h.concat(p.imports)),h}).flat(1))}function Mm(r){return[...new Set(r)]}function Am(r){let o={},f=Object.keys(r).sort();for(let u of f)o[u]=r[u];return o}function Rm(r,o){let f=new Set;return new Set(o),r.reduce((u,p)=>{let h=JSON.stringify(Am(p));return f.has(h)||(f.add(h),u.push({key:h,link:p})),u},[])}function E1(){let r=T.useContext($l);return Mo(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Dm(){let r=T.useContext(Os);return Mo(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ao=T.createContext(void 0);Ao.displayName="FrameworkContext";function T1(){let r=T.useContext(Ao);return Mo(r,"You must render this element inside a <HydratedRouter> element"),r}function Cm(r,o){let f=T.useContext(Ao),[u,p]=T.useState(!1),[h,y]=T.useState(!1),{onFocus:E,onBlur:x,onMouseEnter:m,onMouseLeave:k,onTouchStart:_}=o,O=T.useRef(null);T.useEffect(()=>{if(r==="render"&&y(!0),r==="viewport"){let X=H=>{H.forEach(oe=>{y(oe.isIntersecting)})},V=new IntersectionObserver(X,{threshold:.5});return O.current&&V.observe(O.current),()=>{V.disconnect()}}},[r]),T.useEffect(()=>{if(u){let X=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(X)}}},[u]);let B=()=>{p(!0)},L=()=>{p(!1),y(!1)};return f?r!=="intent"?[h,O,{}]:[h,O,{onFocus:Kn(E,B),onBlur:Kn(x,L),onMouseEnter:Kn(m,B),onMouseLeave:Kn(k,L),onTouchStart:Kn(_,B)}]:[!1,O,{}]}function Kn(r,o){return f=>{r&&r(f),f.defaultPrevented||o(f)}}function _m({page:r,...o}){let{router:f}=E1(),u=T.useMemo(()=>m1(f.routes,r,f.basename),[f.routes,r,f.basename]);return u?T.createElement(Bm,{page:r,matches:u,...o}):null}function Om(r){let{manifest:o,routeModules:f}=T1(),[u,p]=T.useState([]);return T.useEffect(()=>{let h=!1;return Tm(r,o,f).then(y=>{h||p(y)}),()=>{h=!0}},[r,o,f]),u}function Bm({page:r,matches:o,...f}){let u=tl(),{manifest:p,routeModules:h}=T1(),{basename:y}=E1(),{loaderData:E,matches:x}=Dm(),m=T.useMemo(()=>Up(r,o,x,p,u,"data"),[r,o,x,p,u]),k=T.useMemo(()=>Up(r,o,x,p,u,"assets"),[r,o,x,p,u]),_=T.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let L=new Set,X=!1;if(o.forEach(H=>{let oe=p.routes[H.route.id];!oe||!oe.hasLoader||(!m.some(ee=>ee.route.id===H.route.id)&&H.route.id in E&&h[H.route.id]?.shouldRevalidate||oe.hasClientLoader?X=!0:L.add(H.route.id))}),L.size===0)return[];let V=Nm(r,y,"data");return X&&L.size>0&&V.searchParams.set("_routes",o.filter(H=>L.has(H.route.id)).map(H=>H.route.id).join(",")),[V.pathname+V.search]},[y,E,u,p,m,o,r,h]),O=T.useMemo(()=>km(k,p),[k,p]),B=Om(k);return T.createElement(T.Fragment,null,_.map(L=>T.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...f})),O.map(L=>T.createElement("link",{key:L,rel:"modulepreload",href:L,...f})),B.map(({key:L,link:X})=>T.createElement("link",{key:L,...X})))}function Hm(...r){return o=>{r.forEach(f=>{typeof f=="function"?f(o):f!=null&&(f.current=o)})}}var k1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{k1&&(window.__reactRouterVersion="7.7.1")}catch{}function Um({basename:r,children:o,window:f}){let u=T.useRef();u.current==null&&(u.current=Nh({window:f,v5Compat:!0}));let p=u.current,[h,y]=T.useState({action:p.action,location:p.location}),E=T.useCallback(x=>{T.startTransition(()=>y(x))},[y]);return T.useLayoutEffect(()=>p.listen(E),[p,E]),T.createElement(hm,{basename:r,children:o,location:h.location,navigationType:h.action,navigator:p})}var M1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=T.forwardRef(function({onClick:o,discover:f="render",prefetch:u="none",relative:p,reloadDocument:h,replace:y,state:E,target:x,to:m,preventScrollReset:k,viewTransition:_,...O},B){let{basename:L}=T.useContext(qt),X=typeof m=="string"&&M1.test(m),V,H=!1;if(typeof m=="string"&&X&&(V=m,k1))try{let Ee=new URL(window.location.href),nt=m.startsWith("//")?new URL(Ee.protocol+m):new URL(m),gt=sa(nt.pathname,L);nt.origin===Ee.origin&&gt!=null?m=gt+nt.search+nt.hash:H=!0}catch{Ut(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let oe=Wh(m,{relative:p}),[ee,ze,P]=Cm(u,O),Be=Gm(m,{replace:y,state:E,target:x,preventScrollReset:k,relative:p,viewTransition:_});function Ce(Ee){o&&o(Ee),Ee.defaultPrevented||Be(Ee)}let He=T.createElement("a",{...O,...P,href:V||oe,onClick:H||h?o:Ce,ref:Hm(B,ze),target:x,"data-discover":!X&&f==="render"?"true":void 0});return ee&&!X?T.createElement(T.Fragment,null,He,T.createElement(_m,{page:oe})):He});ne.displayName="Link";var qm=T.forwardRef(function({"aria-current":o="page",caseSensitive:f=!1,className:u="",end:p=!1,style:h,to:y,viewTransition:E,children:x,...m},k){let _=ni(y,{relative:m.relative}),O=tl(),B=T.useContext(Os),{navigator:L,basename:X}=T.useContext(qt),V=B!=null&&Zm(_)&&E===!0,H=L.encodeLocation?L.encodeLocation(_).pathname:_.pathname,oe=O.pathname,ee=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;f||(oe=oe.toLowerCase(),ee=ee?ee.toLowerCase():null,H=H.toLowerCase()),ee&&X&&(ee=sa(ee,X)||ee);const ze=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let P=oe===H||!p&&oe.startsWith(H)&&oe.charAt(ze)==="/",Be=ee!=null&&(ee===H||!p&&ee.startsWith(H)&&ee.charAt(H.length)==="/"),Ce={isActive:P,isPending:Be,isTransitioning:V},He=P?o:void 0,Ee;typeof u=="function"?Ee=u(Ce):Ee=[u,P?"active":null,Be?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let nt=typeof h=="function"?h(Ce):h;return T.createElement(ne,{...m,"aria-current":He,className:Ee,ref:k,style:nt,to:y,viewTransition:E},typeof x=="function"?x(Ce):x)});qm.displayName="NavLink";var Lm=T.forwardRef(({discover:r="render",fetcherKey:o,navigate:f,reloadDocument:u,replace:p,state:h,method:y=ws,action:E,onSubmit:x,relative:m,preventScrollReset:k,viewTransition:_,...O},B)=>{let L=Qm(),X=$m(E,{relative:m}),V=y.toLowerCase()==="get"?"get":"post",H=typeof E=="string"&&M1.test(E),oe=ee=>{if(x&&x(ee),ee.defaultPrevented)return;ee.preventDefault();let ze=ee.nativeEvent.submitter,P=ze?.getAttribute("formmethod")||y;L(ze||ee.currentTarget,{fetcherKey:o,method:P,navigate:f,replace:p,state:h,relative:m,preventScrollReset:k,viewTransition:_})};return T.createElement("form",{ref:B,method:V,action:X,onSubmit:u?x:oe,...O,"data-discover":!H&&r==="render"?"true":void 0})});Lm.displayName="Form";function Ym(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A1(r){let o=T.useContext($l);return we(o,Ym(r)),o}function Gm(r,{target:o,replace:f,state:u,preventScrollReset:p,relative:h,viewTransition:y}={}){let E=Ph(),x=tl(),m=ni(r,{relative:h});return T.useCallback(k=>{if(ym(k,o)){k.preventDefault();let _=f!==void 0?f:ei(x)===ei(m);E(r,{replace:_,state:u,preventScrollReset:p,relative:h,viewTransition:y})}},[x,E,m,f,u,o,r,p,h,y])}var Vm=0,Xm=()=>`__${String(++Vm)}__`;function Qm(){let{router:r}=A1("useSubmit"),{basename:o}=T.useContext(qt),f=um();return T.useCallback(async(u,p={})=>{let{action:h,method:y,encType:E,formData:x,body:m}=zm(u,o);if(p.navigate===!1){let k=p.fetcherKey||Xm();await r.fetch(k,f,p.action||h,{preventScrollReset:p.preventScrollReset,formData:x,body:m,formMethod:p.method||y,formEncType:p.encType||E,flushSync:p.flushSync})}else await r.navigate(p.action||h,{preventScrollReset:p.preventScrollReset,formData:x,body:m,formMethod:p.method||y,formEncType:p.encType||E,replace:p.replace,state:p.state,fromRouteId:f,flushSync:p.flushSync,viewTransition:p.viewTransition})},[r,o,f])}function $m(r,{relative:o}={}){let{basename:f}=T.useContext(qt),u=T.useContext(Lt);we(u,"useFormAction must be used inside a RouteContext");let[p]=u.matches.slice(-1),h={...ni(r||".",{relative:o})},y=tl();if(r==null){h.search=y.search;let E=new URLSearchParams(h.search),x=E.getAll("index");if(x.some(k=>k==="")){E.delete("index"),x.filter(_=>_).forEach(_=>E.append("index",_));let k=E.toString();h.search=k?`?${k}`:""}}return(!r||r===".")&&p.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:ia([f,h.pathname])),ei(h)}function Zm(r,{relative:o}={}){let f=T.useContext(j1);we(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=A1("useViewTransitionState"),p=ni(r,{relative:o});if(!f.isTransitioning)return!1;let h=sa(f.currentLocation.pathname,u)||f.currentLocation.pathname,y=sa(f.nextLocation.pathname,u)||f.nextLocation.pathname;return Ms(p.pathname,y)!=null||Ms(p.pathname,h)!=null}var R1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qp=Da.createContext&&Da.createContext(R1),Km=["attr","size","title"];function Jm(r,o){if(r==null)return{};var f=Fm(r,o),u,p;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(p=0;p<h.length;p++)u=h[p],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(f[u]=r[u])}return f}function Fm(r,o){if(r==null)return{};var f={};for(var u in r)if(Object.prototype.hasOwnProperty.call(r,u)){if(o.indexOf(u)>=0)continue;f[u]=r[u]}return f}function As(){return As=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var f=arguments[o];for(var u in f)Object.prototype.hasOwnProperty.call(f,u)&&(r[u]=f[u])}return r},As.apply(this,arguments)}function Lp(r,o){var f=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);o&&(u=u.filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable})),f.push.apply(f,u)}return f}function Rs(r){for(var o=1;o<arguments.length;o++){var f=arguments[o]!=null?arguments[o]:{};o%2?Lp(Object(f),!0).forEach(function(u){Wm(r,u,f[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(f)):Lp(Object(f)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(f,u))})}return r}function Wm(r,o,f){return o=Pm(o),o in r?Object.defineProperty(r,o,{value:f,enumerable:!0,configurable:!0,writable:!0}):r[o]=f,r}function Pm(r){var o=Im(r,"string");return typeof o=="symbol"?o:o+""}function Im(r,o){if(typeof r!="object"||!r)return r;var f=r[Symbol.toPrimitive];if(f!==void 0){var u=f.call(r,o);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function D1(r){return r&&r.map((o,f)=>Da.createElement(o.tag,Rs({key:f},o.attr),D1(o.child)))}function K(r){return o=>Da.createElement(eg,As({attr:Rs({},r.attr)},o),D1(r.child))}function eg(r){var o=f=>{var{attr:u,size:p,title:h}=r,y=Jm(r,Km),E=p||f.size||"1em",x;return f.className&&(x=f.className),r.className&&(x=(x?x+" ":"")+r.className),Da.createElement("svg",As({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},f.attr,u,y,{className:x,style:Rs(Rs({color:r.color||f.color},f.style),r.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),h&&Da.createElement("title",null,h),r.children)};return qp!==void 0?Da.createElement(qp.Consumer,null,f=>o(f)):o(R1)}function tg(r){return K({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function C1(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(r)}function ag(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function yo(r){return K({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(r)}function lg(r){return K({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(r)}function _1(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(r)}function Pn(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function O1(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(r)}function ng(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(r)}function ig(r){return K({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function sg(r){return K({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function rg(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"},child:[]}]})(r)}function cg(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(r)}function Yp(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(r)}function og(r){return K({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z"},child:[]}]})(r)}function ug(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(r)}function Ds(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(r)}function Xl(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(r)}function ti(r){return K({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(r)}function dg(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(r)}function fg(r){return K({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z"},child:[]}]})(r)}function Gp(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"},child:[]}]})(r)}function Cs(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(r)}function Et(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function Vp(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(r)}function Hs(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function B1(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"},child:[]}]})(r)}function H1(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(r)}function _s(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(r)}function Xp(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(r)}function U1(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(r)}function q1(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(r)}function pg(r){return K({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}function hg(r){return K({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},child:[]}]})(r)}function mg(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"},child:[]}]})(r)}function gg(r){return K({attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"},child:[]}]})(r)}function L1(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(r)}function xg(r){return K({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function vg(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(r)}function Y1(r){return K({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(r)}function bg(r){return K({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"},child:[]}]})(r)}function Qp(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"},child:[]}]})(r)}function yg(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(r)}function $p(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"},child:[]}]})(r)}function Zp(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"},child:[]}]})(r)}function Kp(r){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"},child:[]}]})(r)}function jg(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M144 32S94.11 69.4 96 96c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zM73.293 201c1.43 63.948 18.943 179.432 74.707 238h152c55.764-58.568 73.278-174.052 74.707-238H73.293zm319.598.445c-.186 9.152-.652 19.252-1.472 30.057C419.312 235.162 441 259.142 441 288c0 31.374-25.626 57-57 57-4.387 0-8.656-.517-12.764-1.465-2.912 9.62-6.176 19.165-9.84 28.51C368.602 373.97 376.176 375 384 375c48.155 0 87-38.845 87-87 0-45.153-34.153-82.12-78.11-86.555zM42.763 457c1.507 5.193 3.854 11.2 6.955 16.37 2.637 4.394 5.69 8.207 8.428 10.58C60.882 486.32 63 487 64 487h320c1 0 3.118-.678 5.855-3.05 2.738-2.373 5.79-6.186 8.428-10.58 3.1-5.17 5.448-11.177 6.955-16.37H42.762z"},child:[]}]})(r)}function Sg(r){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M238.406 26.844c-9.653.12-18.926 2.69-30.437 7.062l-157.282 57c-20.984 7.65-21.587 11.834-22.344 33.28L20.937 358.22c-1.207 27.514-.654 33.187 23.25 43.56L229.97 483.19c19.34 8.29 31.906 7.655 45.186 3.218l181.938-56.53c21.95-7.295 25.04-9.627 25.875-36.845l7.686-250.155c.662-17.37-5.667-24.695-18.78-29.625L271.062 34.375c-12.977-5.344-23.003-7.653-32.657-7.53zm.813 24.875c23.637-.053 45.564 8.434 87.874 24.874 95.545 37.123 131.71 53.8 69.687 77.937-74.002 28.802-128.175 45.115-172.28 25.814L113.47 131.75c-34.57-15.127-44.69-27.46 17.843-50.094 55.64-20.14 82.742-29.882 107.906-29.937zm44.718 43.75c-38.284.402-55.285 21.205-56.813 38.936-.873 10.132 2.95 19.6 12.406 26.25 9.456 6.65 25.355 10.56 48.97 5.938 35.817-7.01 61.536-15.056 77.5-22.844 7.982-3.894 13.464-7.737 16.5-10.844 3.036-3.107 3.453-4.942 3.438-6-.016-1.057-.44-2.675-3.313-5.406-2.873-2.73-8.03-6.04-15.22-9.156-14.378-6.233-36.757-11.877-65.717-15.72-6.355-.842-12.28-1.213-17.75-1.155zM59.25 134c10.372-.29 29.217 7.2 63.906 22.656 140.925 62.786 140.52 65.876 130.97 200.656-7.783 109.81-8.797 109.85-128.47 59.282-73.15-30.91-86.806-40.853-85.187-88.97l5.468-162.937c.674-20.034 1.557-30.358 13.312-30.687zm381.938 30.906c29.172-.384 29.1 28.075 26.75 105.25-4.118 135.132-9.05 140.184-120.375 173.72-70.42 21.21-81.49 25.614-78.97-12.032l11-164.156c3.217-48.034 7.588-51.508 94.813-83.907 31.323-11.633 52.534-18.686 66.78-18.874zm-20.438 40.688c-.332-.002-.674.015-1 .03-5.22.263-10.226 2.77-14.188 8.407-3.96 5.638-6.81 14.71-5.687 27.907 1.448 17.033-4.507 38.11-15.156 56.938-10.65 18.827-26.502 35.91-47.814 38.813-29.127 3.968-42.41 23.58-43.5 42.062-.545 9.24 2.108 18.03 7.688 24.594s14.088 11.335 27.187 12.03c41.146 2.185 71.336-10.766 91.595-39.155 20.26-28.39 30.396-73.76 25.875-136.595-1.876-26.076-14.708-34.977-25-35.03zm-246.25 8.844c-.644 0-1.218.063-1.72.187-2.003.494-3.685 1.53-5.655 4.813-1.913 3.186-3.688 8.618-4.406 16.343l-.064.657c-1.388 16.732-8.098 28.602-17.844 35.063-9.745 6.46-20.794 7.808-31.125 9.094-10.33 1.286-20.177 2.39-28.156 5.75-7.977 3.36-14.36 8.38-19.468 19.78-7.2 16.076-7.143 28.027-3.124 38.563 4.018 10.537 12.688 20.106 24.687 28.75 23.998 17.29 60.27 29.956 88.906 41.844 11.386 4.727 20.496 6.484 27.282 6.126 6.787-.358 11.278-2.423 15.375-6.562 8.195-8.28 14.057-27.692 15-57.344 2.024-63.623-18.84-110.284-38.656-130.875-8.668-9.008-16.52-12.193-21.03-12.188zm184.22 6.812c-.95-.003-1.927.035-2.97.094-35.464 1.99-48.477 12.867-52.5 24.062-4.023 11.196.826 27.07 10.844 39.78 11.488 14.58 20.59 15.736 30.437 12.283 9.848-3.455 20.542-14.108 27.376-26.908s9.512-27.397 7.188-36.28c-1.163-4.443-3.144-7.422-6.47-9.626-2.908-1.928-7.274-3.388-13.905-3.406z"},child:[]}]})(r)}function zg(r){return K({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(r)}function Ng(r){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(r)}function wg(r){return K({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},child:[]}]})(r)}const ro=14,Eg=Array.from({length:ro},(r,o)=>({id:o,left:`${o/ro*100+Math.random()*(100/ro)}%`,size:18+Math.floor(Math.random()*22),duration:12+Math.random()*16,delay:-(Math.random()*20),opacity:.08+Math.random()*.14})),Tg=`
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
`;function kg(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Tg}),Eg.map(r=>i.jsx("div",{className:"floater",style:{left:r.left,fontSize:r.size,opacity:r.opacity,animationDuration:`${r.duration}s, ${r.duration*.6}s`,animationDelay:`${r.delay}s, ${r.delay*.4}s`},children:i.jsx(jg,{})},r.id))]})}const Mg=`
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
`,Jp=["Software Engineer","Gamer","Coffee Connoisseur","Frenchie dad"];function Ag(){const[r,o]=T.useState(""),[f,u]=T.useState(0),[p,h]=T.useState(0),[y,E]=T.useState(!1);return T.useEffect(()=>{document.title="Rosendo Inzunza | Portfolio",document.documentElement.classList.add("dark")},[]),T.useEffect(()=>{const x=Jp[f%Jp.length],m=setTimeout(()=>{y?(o(x.slice(0,p-1)),h(p-1)):(o(x.slice(0,p+1)),h(p+1)),!y&&p===x.length?setTimeout(()=>E(!0),1e3):y&&p===0&&(E(!1),u(f+1))},y?50:100);return()=>clearTimeout(m)},[p,y,f]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Mg}),i.jsxs("div",{className:"home-page",children:[i.jsx(kg,{}),i.jsxs("div",{className:"home-card",style:{position:"relative",zIndex:1},children:[i.jsxs("div",{className:"home-profile",children:[i.jsx("img",{src:"/ro.jpg",alt:"Rosendo Inzunza",className:"home-avatar"}),i.jsxs("div",{children:[i.jsx("div",{className:"home-name",children:"Rosendo Inzunza"}),i.jsxs("div",{className:"home-typewriter",children:[r,i.jsx("span",{style:{opacity:.6},children:"|"})]})]})]}),i.jsx("div",{className:"home-divider"}),i.jsxs("div",{className:"home-info",children:[i.jsxs("div",{className:"home-info-item",children:[i.jsx(Ng,{size:14})," Systems Engineer"]}),i.jsxs("div",{className:"home-info-item",children:[i.jsx(zg,{size:14})," Based in California, US"]}),i.jsxs("div",{className:"home-info-item",children:[i.jsx(wg,{size:14})," rosendoinzunza@gmail.com"]}),i.jsxs("div",{className:"home-info-item",children:[i.jsx(Sg,{size:14})," Fueled by coffee"]})]}),i.jsx("div",{className:"home-divider"}),i.jsxs("div",{className:"home-socials",children:[i.jsx("a",{href:"https://github.com/roinzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:i.jsx(tg,{})}),i.jsx("a",{href:"https://www.linkedin.com/in/rosendoinzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:i.jsx(ag,{})}),i.jsx("a",{href:"https://instagram.com/ro.inzunza",target:"_blank",rel:"noopener noreferrer",className:"home-social-btn",children:i.jsx(C1,{})})]}),i.jsxs("div",{className:"home-nav",children:[i.jsx(ne,{to:"/about",className:"home-nav-link",children:"About Me →"}),i.jsx(ne,{to:"/resume",className:"home-nav-link",children:"Resume →"}),i.jsx(ne,{to:"/projects",className:"home-nav-link",children:"What I'm Building →"})]})]})]})]})}const Rg={whoami:["Rosendo Inzunza is a software engineer who loves solving real-world problems through thoughtful design and performant code.","I enjoy building beautiful user experiences, contributing to impactful projects, and sipping cold brew while learning new things."],projects:["SideQuest (iOS/Swift + Rust) – A local job discovery platform with swiping, messaging, and profile matching."],skills:["Skills/Tools:","- Rust, Python, TypeScript","- Docker, Sentry, Grafana","- Axum, Actix, Poem, FastAPI, Flask","- PostgreSQL, Diesel, Alembic, SeaORM","- AWS (SNS, S3, EC2)","","*** Pulls a great double shot of espresso"],contact:["📧 rosendoinzunza@gmail.com","🔗 linkedin.com/in/rosendoinzunza","🐙 github.com/roinzunza","📍 Based in California, US"],coffee:["Between an oatmilk cortado and an iced latte with almond milk ☕"],ascii:["    _______  ________  ________  ________ ","  ╱╱       ╲╱        ╲╱        ╲╱    ╱   ╲"," ╱╱        ╱         _╱       ╱╱         ╱","╱        _╱         ╱         ╱         ╱ ","╲____╱___╱╲________╱╲________╱╲__╱_____╱  "],help:["Available commands:","- whoami     → About Rosendo","- projects   → Current projects","- skills     → Technical background","- contact    → Contact information","- coffee     → Coffee order","- ascii      → ASCII logo","- help       → This menu"]},Dg=`
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
`;function Cg(){const[r,o]=T.useState([]),[f,u]=T.useState(""),[p,h]=T.useState(""),y=T.useRef(null),E=T.useRef(null),x="➜ ~ whoami";T.useEffect(()=>{let _=0;const O=setInterval(()=>{h(x.slice(0,_+1)),_++,_===x.length&&(clearInterval(O),setTimeout(()=>m("whoami"),600))},80);return()=>clearInterval(O)},[]);const m=_=>{const O=_.trim().toLowerCase(),B=Rg[O],L=typeof B=="string"?[B]:B||[`zsh: command not found: ${_} — try 'help'`];o(X=>[...X,`➜ ~ ${_}`]),L.forEach((X,V)=>{setTimeout(()=>{o(H=>[...H,X])},150*V)})},k=_=>{_.preventDefault(),f.trim()&&(m(f),u(""))};return T.useEffect(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},[r]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Dg}),i.jsx("div",{className:"about-page",children:i.jsxs("div",{className:"about-inner",children:[i.jsx("div",{className:"about-title",children:"About Me"}),i.jsxs("div",{className:"terminal",children:[i.jsxs("div",{className:"terminal-bar",children:[i.jsx("div",{className:"terminal-dot",style:{background:"#ff5f57"}}),i.jsx("div",{className:"terminal-dot",style:{background:"#febc2e"}}),i.jsx("div",{className:"terminal-dot",style:{background:"#28c840"}})]}),i.jsxs("div",{className:"terminal-body",ref:E,children:[i.jsxs("div",{children:[i.jsx("span",{className:"terminal-prompt",children:p}),p.length<x.length&&i.jsx("span",{style:{opacity:.6},children:"|"})]}),r.map((_,O)=>i.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap"},children:_.startsWith("➜ ~")?i.jsx(i.Fragment,{children:i.jsx("span",{className:"terminal-prompt",children:_})}):_},O)),i.jsxs("form",{onSubmit:k,className:"terminal-input-row",children:[i.jsx("span",{className:"terminal-prompt",children:"➜ ~"}),i.jsx("input",{type:"text",ref:y,autoFocus:!0,value:f,onChange:_=>u(_.target.value),className:"terminal-input",placeholder:"type a command (try 'help')..."})]})]})]}),i.jsx(ne,{to:"/",className:"about-back",children:"← Back to Home"})]})})]})}const Zl={name:"Rosendo Inzunza",email:"RosendoInzunza@gmail.com",website:"www.rosendoinzunza.com",phone:"714-342-7492",summary:"Systems Engineer specializing in critical infrastructure at global scale—fleet control planes, distributed systems, ML training and inference. Driving complex architectural changes end to end, from RFC authorship and stakeholder alignment to production delivery, consistently unblocking initiatives that stalled due to scale or blast radius risk.",experience:[{title:"Systems Engineer - Infrastructure",company:"Cloudflare",logo:"Cloudflare.png",coverBg:"#ffffff",location:"Remote, US",period:"07/2024 – 05/2026",summary:"Owned reliability, performance, and architectural evolution of the infrastructure control plane — the authoritative system for fleet configuration and asset management across Cloudflare's global network.",bullets:["Improved control plane API performance 10x (5s to 500ms) by rearchitecting the data-fetching layer to parallelize requests, with an automatic fallback to serial processing under database load.","Led the Ray ID redesign end to end: identified the exhaustion risk, wrote the RFC, designed a backward-compatible migration, with zero customer impact, retiring 3 years of deferred technical debt.","Drove consolidation of the company's logical asset data model, authoring the RFC and leading cross-team alignment to unify legacy and modern systems under a single authoritative control plane — reducing sync errors and manual provisioning intervention by 80%.","Eliminated a critical circular dependency between the control plane and Release Manager by defining a new cross-team deployment contract, including automated migration halts and a full-stack recovery path for outage scenarios.","Built high-throughput reconciliation workers to sync DCIM systems and automate orphan asset cleanup, ending persistent manual drift that had required ongoing operational intervention.","Expanded internal platform adoption by building an MCP server over the control plane API, enabling teams to integrate without writing custom clients or CLI tooling.","Established an AI-assisted development workflow across the team — covering codebase context indexing, pre-commit verification, and test generation — materially reducing onboarding and review cycle time."]},{title:"Site Reliability Engineer - Applied Machine Learning",company:"TikTok",logo:"tiktok.jpg",coverBg:"#ffffff",location:"Remote, US",period:"07/2022 – 07/2024",bullets:["Designed and shipped a diagnostics platform adopted by 200+ engineers, reducing mean time to resolution by 72% (80 min to 22 min) by centralizing root cause analysis workflows.","Authored the RFC and implemented self-healing automation for parameter servers and distributed training jobs, reducing manual incident volume by 25%.","Consolidated 4 divergent regional codebases for the parameter server observability system into a single unified release with per-region DNS routing — ending configuration drift and simplifying cross-region deployments.","Served as primary on-call for ML training and parameter server infrastructure, owning incident response for Ads and Video Recommendation systems supporting millions of users."]},{title:"Full Stack Software Engineer",company:"Digital Force Technologies",logo:"digital_force_technologies.jpg",coverBg:"#000000",location:"Remote, US",period:"10/2021 – 07/2022",bullets:["Built and maintained a Flask API for hardware configuration management in radar systems.","Automated the ARM64 Debian package release process, integrating with legacy build infrastructure."]},{title:"Automation Engineer",company:"CoreLogic",logo:"corelogic.png",coverBg:"#ffffff",location:"Irvine, CA",period:"09/2020 – 10/2021",bullets:["Built data pipelines to parse and reconcile multi-schema customer files into a unified format.","Trained a CNN on home images to predict property value.","Established GitLab CI/CD for the team."]}],skills:{Languages:["Rust","Python","Go","TypeScript","Swift","C++"],"Frameworks / Libraries":["Axum","Actix","SeaORM","Diesel","FastAPI","Flask","Django","React"],Infrastructure:["Kubernetes","Docker","SaltStack","gRPC","Protobuf","PostgreSQL","Redis"],Observability:["Prometheus","Grafana","Splunk","Sentry"],"Machine Learning":["TensorFlow","PyTorch"],Tools:["Claude","Codex","OpenCode"]},project:{name:"SideQuest",logo:"sidequest_logo.png",coverBg:"#000000",role:"Founder & Full-Stack Engineer",tech:"iOS · Swift · Rust · Axum · SeaORM · PostgreSQL",url:"https://www.sidequestapp.io/",bullets:["Founded and shipped a two-sided iOS job marketplace connecting local businesses with hourly workers — live on the App Store.","Architected a Rust/Axum backend with a service-oriented route pattern, PostgreSQL via SeaORM, JWT auth, and Apple/Google SSO with PKCE.","Built real-time in-app messaging using WebSockets with a concurrent DashMap hub and APNs push notification delivery.","Integrated Stripe and RevenueCat for tiered subscriptions, IAP add-ons, and entitlement management across business and applicant roles."]},education:{degree:"Bachelor of Science in Computer Science",school:"California State University, Fullerton"}},{name:_g,email:Fp,website:Wp,phone:Og,summary:Bg,experience:Hg,skills:Ug,project:Yl,education:Pp}=Zl,qg=`
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
`;function Lg(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:qg}),i.jsx("div",{className:"rv-page",children:i.jsxs("div",{className:"rv-inner",children:[i.jsxs("div",{className:"rv-card",children:[i.jsx("div",{className:"rv-name",children:_g}),i.jsxs("div",{className:"rv-contact",children:[i.jsx("a",{href:`mailto:${Fp}`,children:Fp}),i.jsx("a",{href:`https://${Wp}`,target:"_blank",rel:"noopener noreferrer",children:Wp}),i.jsx("span",{children:Og})]})]}),i.jsxs("div",{className:"rv-card",children:[i.jsx("div",{className:"rv-section-label",children:"Summary"}),i.jsx("div",{className:"rv-summary",children:Bg})]}),i.jsxs("div",{className:"rv-card",children:[i.jsx("div",{className:"rv-section-label",children:"Experience"}),Hg.map((r,o)=>i.jsxs("div",{className:"rv-job",children:[i.jsxs("div",{className:"rv-job-header",children:[i.jsx("div",{className:"rv-job-title",children:r.title}),i.jsx("div",{className:"rv-job-period",children:r.period})]}),i.jsxs("div",{className:"rv-job-company",children:[r.company," · ",r.location]}),r.summary&&i.jsx("div",{className:"rv-job-summary",children:r.summary}),i.jsx("ul",{className:"rv-bullets",children:r.bullets.map((f,u)=>i.jsxs("li",{children:[i.jsx("span",{className:"rv-bullet-dash",children:"—"}),i.jsx("span",{children:f})]},u))})]},o))]}),i.jsxs("div",{className:"rv-card",children:[i.jsx("div",{className:"rv-section-label",children:"Technical Skills"}),Object.entries(Ug).map(([r,o])=>i.jsxs("div",{className:"rv-skill-group",children:[i.jsx("div",{className:"rv-skill-label",children:r}),i.jsx("div",{className:"rv-chips",children:o.map(f=>i.jsx("span",{className:"rv-chip",children:f},f))})]},r))]}),i.jsxs("div",{className:"rv-card",children:[i.jsx("div",{className:"rv-section-label",children:"Startup Project"}),i.jsxs("div",{className:"rv-project-header",children:[i.jsx("div",{className:"rv-project-name",children:Yl.name}),i.jsx("a",{href:Yl.url,target:"_blank",rel:"noopener noreferrer",className:"rv-project-url",children:Yl.url.replace("https://","")})]}),i.jsxs("div",{className:"rv-project-role",children:[Yl.role," · ",Yl.tech]}),i.jsx("ul",{className:"rv-bullets",children:Yl.bullets.map((r,o)=>i.jsxs("li",{children:[i.jsx("span",{className:"rv-bullet-dash",children:"—"}),i.jsx("span",{children:r})]},o))})]}),i.jsxs("div",{className:"rv-card",children:[i.jsx("div",{className:"rv-section-label",children:"Education"}),i.jsx("div",{className:"rv-edu-degree",children:Pp.degree}),i.jsx("div",{className:"rv-edu-school",children:Pp.school})]}),i.jsx(ne,{to:"/",className:"rv-back",children:"← Back to Home"})]})})]})}const{name:Jn,email:Ip,website:e1,phone:Yg,summary:Gg,experience:Ia,skills:Vg,project:Ge,education:co}=Zl,oo=Object.values(Vg).flat(),Wn=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),uo=Wn(Ge.name),Xg=`
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
`,aa=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],t1=["linear-gradient(135deg, #1DB954 0%, #064E3B 100%)","linear-gradient(135deg, #FBBF24 0%, #92400E 100%)","linear-gradient(135deg, #38BDF8 0%, #0C4A6E 100%)","linear-gradient(135deg, #F472B6 0%, #831843 100%)"];function a1(r){const o=r*47+123,f=Math.floor(o/60),u=o%60;return`${f}:${u.toString().padStart(2,"0")}`}function Qg(r){return([2847193,1402557,894201,612488,320115][r]??15e4).toLocaleString()}function $g(){const[r,o]=T.useState(!1),[f,u]=T.useState(!0);T.useEffect(()=>{document.title=`${Jn} | Spotify Resume`},[]);const p=12847392 .toLocaleString();return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Xg}),i.jsxs("div",{className:"sp-page",children:[i.jsxs("aside",{className:"sp-sidebar",children:[i.jsxs("div",{className:"sp-sidebar-card",children:[i.jsxs(ne,{to:"/",className:"sp-nav-item",children:[i.jsx(ti,{})," Home"]}),i.jsxs("div",{className:"sp-nav-item",children:[i.jsx(_s,{})," Search"]})]}),i.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[i.jsxs("div",{className:"sp-library-header",children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx(_1,{})," Your Library"]}),i.jsx("button",{className:"sp-icon-btn",children:i.jsx(Hs,{})})]}),i.jsxs("div",{style:{marginTop:8},children:[i.jsxs("div",{className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:t1[0]},children:i.jsx(Xl,{})}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:"Liked Songs"}),i.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",Ia.length+1," songs"]})]})]}),Ia.map((h,y)=>i.jsxs(ne,{to:`/spotify/${Wn(h.company)}`,className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:h.coverBg??aa[y%aa.length]},children:h.logo?i.jsx("img",{src:`/${h.logo}`,alt:h.company}):h.company}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:h.company}),i.jsxs("div",{className:"sp-playlist-sub",children:["Album · ",h.bullets.length," tracks"]})]})]},h.company)),i.jsxs(ne,{to:`/spotify/${uo}`,className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:Ge.coverBg},children:i.jsx("img",{src:`/${Ge.logo}`,alt:Ge.name})}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:Ge.name}),i.jsxs("div",{className:"sp-playlist-sub",children:["Single · ",Jn]})]})]}),i.jsxs("div",{className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:t1[2]},children:"Tech Stack"}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:"Tech Stack"}),i.jsxs("div",{className:"sp-playlist-sub",children:["Playlist · ",oo.length," tracks"]})]})]}),i.jsxs("div",{className:"sp-playlist-item",children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)"},children:"Education"}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:"sp-playlist-title",children:"Education"}),i.jsxs("div",{className:"sp-playlist-sub",children:["EP · ",co.school.split(",")[0]]})]})]})]})]})]}),i.jsxs("main",{className:"sp-main",children:[i.jsxs("div",{className:"sp-mobile-nav",children:[Ia.map((h,y)=>i.jsxs(ne,{to:`/spotify/${Wn(h.company)}`,className:"sp-chip",children:[i.jsx("div",{className:"sp-chip-cover",style:{background:h.coverBg??aa[y%aa.length]},children:h.logo?i.jsx("img",{src:`/${h.logo}`,alt:h.company}):h.company.slice(0,2)}),h.company]},`m-${h.company}`)),i.jsxs(ne,{to:`/spotify/${uo}`,className:"sp-chip",children:[i.jsx("div",{className:"sp-chip-cover",style:{background:Ge.coverBg},children:i.jsx("img",{src:`/${Ge.logo}`,alt:Ge.name})}),Ge.name]})]}),i.jsxs("div",{className:"sp-topbar",children:[i.jsx(ne,{to:"/",className:"sp-back-btn",children:"← Back to Home"}),i.jsxs("div",{className:"sp-topbar-pill",style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[i.jsx(yo,{size:18})," Open in Web Player"]})]}),i.jsxs("section",{className:"sp-hero",children:[i.jsx("img",{src:"/ro.jpg",alt:Jn,className:"sp-hero-avatar"}),i.jsxs("div",{className:"sp-hero-meta",children:[i.jsxs("div",{className:"sp-verified",children:[i.jsx(Pn,{size:16})," Verified Engineer"]}),i.jsx("h1",{className:"sp-hero-name",children:Jn}),i.jsxs("div",{className:"sp-hero-stats",children:[p," monthly listeners"]})]})]}),i.jsxs("div",{className:"sp-action-bar",children:[i.jsx("button",{className:"sp-play-btn",onClick:()=>o(!r),children:r?i.jsx(Cs,{}):i.jsx(Et,{style:{marginLeft:3}})}),i.jsx("button",{className:"sp-follow-btn",children:"Follow"}),i.jsx("button",{className:"sp-icon-btn-lg",children:i.jsx(Ds,{})})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Popular"}),i.jsx("div",{className:"sp-track-list",children:Ia.map((h,y)=>i.jsxs(ne,{to:`/spotify/${Wn(h.company)}`,className:"sp-track",children:[i.jsx("div",{className:"sp-track-num",children:y+1}),i.jsxs("div",{className:"sp-track-info",children:[i.jsx("div",{className:"sp-track-cover",style:{background:h.coverBg??aa[y%aa.length]},children:h.logo?i.jsx("img",{src:`/${h.logo}`,alt:h.company}):h.company}),i.jsxs("div",{className:"sp-track-text",children:[i.jsx("div",{className:"sp-track-title",children:h.title}),i.jsxs("div",{className:"sp-track-artist",children:[h.company," · ",h.location]})]})]}),i.jsx("div",{className:"sp-track-plays",children:Qg(y)}),i.jsx("div",{className:"sp-track-duration",children:a1(h.bullets.length)})]},y))})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"About"}),i.jsxs("div",{className:"sp-about",children:[i.jsx("div",{className:"sp-about-text",children:Gg}),i.jsxs("div",{className:"sp-about-stats",children:[i.jsxs("div",{className:"sp-stat",children:[i.jsx("div",{className:"sp-stat-value",children:p}),i.jsx("div",{className:"sp-stat-label",children:"Monthly Listeners"})]}),i.jsxs("div",{className:"sp-stat",children:[i.jsx("div",{className:"sp-stat-value",children:Ia.length}),i.jsx("div",{className:"sp-stat-label",children:"Albums"})]}),i.jsxs("div",{className:"sp-stat",children:[i.jsx("div",{className:"sp-stat-value",children:oo.length}),i.jsx("div",{className:"sp-stat-label",children:"Genres"})]})]})]})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Discography"}),i.jsx("div",{className:"sp-album-grid",children:Ia.map((h,y)=>i.jsxs(ne,{to:`/spotify/${Wn(h.company)}`,className:"sp-album-card",children:[i.jsxs("div",{className:"sp-album-cover",style:{background:h.coverBg??aa[y%aa.length]},children:[h.logo?i.jsx("img",{src:`/${h.logo}`,alt:h.company}):h.company,i.jsx("button",{className:"sp-album-play",children:i.jsx(Et,{style:{marginLeft:2}})})]}),i.jsx("div",{className:"sp-album-title",children:h.company}),i.jsxs("div",{className:"sp-album-sub",children:[h.period.split("–")[0].trim().split("/")[1]," · ",h.bullets.length," tracks"]})]},y))})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Featured Release"}),i.jsx("div",{className:"sp-album-grid",children:i.jsxs("div",{className:"sp-album-card sp-featured-card",style:{background:"#1a1a1a"},children:[i.jsxs(ne,{to:`/spotify/${uo}`,style:{display:"flex",gap:20,alignItems:"flex-start",textDecoration:"none",color:"inherit"},children:[i.jsxs("div",{className:"sp-album-cover sp-featured-cover",style:{background:Ge.coverBg,marginBottom:0,position:"relative",fontSize:28},children:[i.jsx("img",{src:`/${Ge.logo}`,alt:Ge.name}),i.jsx("button",{className:"sp-album-play",children:i.jsx(Et,{style:{marginLeft:2}})})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,minWidth:0},children:[i.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5},children:"Album · 2025"}),i.jsx("div",{style:{fontSize:22,fontWeight:800,color:"#fff"},children:Ge.name}),i.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:Ge.role}),i.jsx("div",{style:{fontSize:13,color:"#b3b3b3"},children:Ge.tech})]})]}),i.jsxs("a",{href:Ge.url,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),style:{fontSize:13,color:"#1ED760",fontWeight:600,textDecoration:"none",marginTop:12,display:"inline-block"},children:[Ge.url.replace("https://","").replace(/\/$/,"")," ↗"]}),i.jsx("div",{style:{marginTop:20,display:"flex",flexDirection:"column",gap:4},children:Ge.bullets.map((h,y)=>i.jsxs("div",{className:"sp-track",style:{gridTemplateColumns:"32px 1fr auto"},children:[i.jsx("div",{className:"sp-track-num",children:y+1}),i.jsx("div",{className:"sp-track-text",children:i.jsx("div",{className:"sp-track-title",style:{whiteSpace:"normal"},children:h})}),i.jsx("div",{className:"sp-track-duration",children:a1(y+2)})]},y))})]})})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Genres"}),i.jsx("div",{className:"sp-chips",children:oo.map(h=>i.jsx("span",{className:"sp-chip",children:h},h))})]}),i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"Education"}),i.jsx("div",{className:"sp-about",style:{background:"linear-gradient(135deg, #1a1a1a 0%, #7c2d12 200%)"},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20},children:[i.jsx("div",{className:"sp-album-cover",style:{background:"linear-gradient(135deg, #f59e0b, #7c2d12)",width:96,height:96,fontSize:20,marginBottom:0,flexShrink:0},children:"ED"}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:11,color:"#b3b3b3",fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:"EP"}),i.jsx("div",{style:{fontSize:20,fontWeight:800,color:"#fff",marginBottom:4},children:co.degree}),i.jsx("div",{style:{fontSize:14,color:"#b3b3b3"},children:co.school})]})]})})]}),i.jsx("section",{className:"sp-section",children:i.jsxs("div",{style:{fontSize:12,color:"#6a6a6a",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",paddingBottom:24},children:[i.jsx("a",{href:`mailto:${Ip}`,style:{color:"#6a6a6a",textDecoration:"none"},children:Ip}),i.jsx("a",{href:`https://${e1}`,target:"_blank",rel:"noopener noreferrer",style:{color:"#6a6a6a",textDecoration:"none"},children:e1}),i.jsx("span",{children:Yg})]})})]}),i.jsxs("footer",{className:"sp-player",children:[i.jsxs("div",{className:"sp-player-track",children:[i.jsx("div",{className:"sp-player-cover",style:{background:aa[0]}}),i.jsxs("div",{className:"sp-player-meta",children:[i.jsx("div",{className:"sp-player-title",children:Ia[0].title}),i.jsx("div",{className:"sp-player-artist",children:Jn})]}),i.jsx("button",{className:`sp-player-heart ${f?"liked":""}`,onClick:()=>u(!f),"aria-label":"Like",children:i.jsx(Xl,{})})]}),i.jsxs("div",{className:"sp-player-controls",children:[i.jsxs("div",{className:"sp-player-buttons",children:[i.jsx("button",{children:i.jsx(B1,{})}),i.jsx("button",{children:i.jsx(U1,{})}),i.jsx("button",{className:"sp-player-play",onClick:()=>o(!r),children:r?i.jsx(Cs,{}):i.jsx(Et,{style:{marginLeft:2}})}),i.jsx("button",{children:i.jsx(q1,{})}),i.jsx("button",{children:i.jsx(H1,{})})]}),i.jsxs("div",{className:"sp-progress",children:[i.jsx("span",{className:"sp-progress-time",children:"1:42"}),i.jsx("div",{className:"sp-progress-bar",children:i.jsx("div",{className:"sp-progress-fill"})}),i.jsx("span",{className:"sp-progress-time",children:"4:51"})]})]}),i.jsxs("div",{className:"sp-player-extras",children:[i.jsx("button",{children:i.jsx(Y1,{})}),i.jsx("div",{className:"sp-volume",children:i.jsx("div",{className:"sp-volume-bar",children:i.jsx("div",{className:"sp-volume-fill"})})})]})]})]})]})}const{name:Ts,experience:Zg,project:la}=Zl,l1=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),jo=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],n1=["linear-gradient(180deg, #B91C1C 0%, #5b1414 55%, #121212 100%)","linear-gradient(180deg, #1D4ED8 0%, #1e2c5b 55%, #121212 100%)","linear-gradient(180deg, #6D28D9 0%, #2c1d5b 55%, #121212 100%)","linear-gradient(180deg, #BE185D 0%, #5b1f3e 55%, #121212 100%)"],Kg="linear-gradient(180deg, #1DB954 0%, #0a5d2b 55%, #121212 100%)",fo=[...Zg.map((r,o)=>({type:"job",slug:l1(r.company),title:r.title,artist:r.company,initials:r.company,logo:r.logo,period:r.period,description:r.summary,bullets:r.bullets,cover:r.coverBg??jo[o%jo.length],heroGrad:n1[o%n1.length],meta:`${r.location} · ${r.period}`})),{type:"project",slug:l1(la.name),title:la.name,artist:Ts,initials:la.name,logo:la.logo,period:"2025",bullets:la.bullets,cover:la.coverBg,heroGrad:Kg,externalUrl:la.url,meta:`${la.role} · ${la.tech}`}];function Jg(r){const o=165+r*53%180,f=Math.floor(o/60),u=o%60;return`${f}:${u.toString().padStart(2,"0")}`}function Fg(r){let o=0;for(let p=0;p<r;p++)o+=165+p*53%180;const f=Math.floor(o/60),u=o%60;return`${f} min ${u} sec`}const i1=`
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
`;function Wg(){const{slug:r}=em(),o=fo.find(x=>x.slug===r),[f,u]=T.useState(!1),[p,h]=T.useState(!0);T.useEffect(()=>{document.title=o?`${o.title} | ${Ts}`:"Not Found"},[o]);const y=i.jsxs("aside",{className:"sp-sidebar",children:[i.jsxs("div",{className:"sp-sidebar-card",children:[i.jsxs(ne,{to:"/",className:"sp-nav-item",children:[i.jsx(ti,{})," Home"]}),i.jsxs("div",{className:"sp-nav-item",children:[i.jsx(_s,{})," Search"]}),i.jsxs(ne,{to:"/spotify",className:"sp-nav-item",children:[i.jsx(yo,{})," Your Resume"]})]}),i.jsxs("div",{className:"sp-sidebar-card",style:{flex:1,overflowY:"auto"},children:[i.jsxs("div",{className:"sp-library-header",children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx(_1,{})," Your Library"]}),i.jsx("button",{className:"sp-icon-btn",children:i.jsx(Hs,{})})]}),i.jsx("div",{style:{marginTop:8},children:fo.map(x=>{const m=x.slug===r;return i.jsxs(ne,{to:`/spotify/${x.slug}`,className:`sp-playlist-item ${m?"active":""}`,children:[i.jsx("div",{className:"sp-playlist-cover",style:{background:x.cover},children:x.logo?i.jsx("img",{src:`/${x.logo}`,alt:x.artist}):x.initials}),i.jsxs("div",{className:"sp-playlist-meta",children:[i.jsx("div",{className:`sp-playlist-title ${m?"active":""}`,children:x.title}),i.jsxs("div",{className:"sp-playlist-sub",children:[x.type==="job"?"Album":"Single"," · ",x.artist]})]})]},x.slug)})})]})]}),E=i.jsxs("footer",{className:"sp-player",children:[i.jsxs("div",{className:"sp-player-track",children:[i.jsx("div",{className:"sp-player-cover",style:{background:o?.cover??jo[0]},children:o?.logo?i.jsx("img",{src:`/${o.logo}`,alt:o.artist}):o?.initials??"??"}),i.jsxs("div",{className:"sp-player-meta",children:[i.jsx("div",{className:"sp-player-title",children:o?.title??"—"}),i.jsx("div",{className:"sp-player-artist",children:o?.artist??Ts})]}),i.jsx("button",{className:"sp-player-heart",children:i.jsx(Xl,{})})]}),i.jsxs("div",{className:"sp-player-controls",children:[i.jsxs("div",{className:"sp-player-buttons",children:[i.jsx("button",{children:i.jsx(B1,{})}),i.jsx("button",{children:i.jsx(U1,{})}),i.jsx("button",{className:"sp-player-play",onClick:()=>u(!f),children:f?i.jsx(Cs,{}):i.jsx(Et,{style:{marginLeft:2}})}),i.jsx("button",{children:i.jsx(q1,{})}),i.jsx("button",{children:i.jsx(H1,{})})]}),i.jsxs("div",{className:"sp-progress",children:[i.jsx("span",{className:"sp-progress-time",children:"0:48"}),i.jsx("div",{className:"sp-progress-bar",children:i.jsx("div",{className:"sp-progress-fill"})}),i.jsx("span",{className:"sp-progress-time",children:"3:32"})]})]}),i.jsxs("div",{className:"sp-player-extras",children:[i.jsx("button",{children:i.jsx(Y1,{})}),i.jsx("div",{className:"sp-volume",children:i.jsx("div",{className:"sp-volume-bar",children:i.jsx("div",{className:"sp-volume-fill"})})})]})]});return o?i.jsxs(i.Fragment,{children:[i.jsx("style",{children:i1}),i.jsxs("div",{className:"sp-page",children:[y,i.jsxs("main",{className:"sp-main",children:[i.jsx("div",{className:"sp-mobile-nav",children:fo.map(x=>i.jsxs(ne,{to:`/spotify/${x.slug}`,className:`sp-chip ${x.slug===r?"active":""}`,children:[i.jsx("div",{className:"sp-chip-cover",style:{background:x.cover},children:x.logo?i.jsx("img",{src:`/${x.logo}`,alt:x.artist}):x.initials.slice(0,2)}),x.artist]},`m-${x.slug}`))}),i.jsxs("div",{className:"sp-topbar",children:[i.jsx(ne,{to:"/spotify",className:"sp-back-btn",children:"← Back to Resume"}),i.jsxs("div",{className:"sp-topbar-pill",style:{display:"flex",alignItems:"center",gap:8,color:"#1ED760",fontWeight:700,fontSize:14},children:[i.jsx(yo,{size:18})," Open in Web Player"]})]}),i.jsxs("section",{className:"sp-album-hero",style:{background:o.heroGrad},children:[i.jsx("div",{className:"sp-album-art",style:{background:o.cover},children:o.logo?i.jsx("img",{src:`/${o.logo}`,alt:o.artist}):o.initials}),i.jsxs("div",{className:"sp-album-meta",children:[i.jsx("div",{className:"sp-album-type",children:o.type==="job"?"Album":"Featured Single"}),i.jsx("h1",{className:"sp-album-title",children:o.title}),i.jsxs("div",{className:"sp-album-byline",children:[i.jsx("strong",{children:o.artist}),i.jsx("span",{className:"dot",children:"·"}),i.jsx("span",{children:o.period}),i.jsx("span",{className:"dot",children:"·"}),i.jsxs("span",{children:[o.bullets.length," songs, ",Fg(o.bullets.length)]})]}),i.jsx("div",{className:"sp-album-extra",children:o.meta})]})]}),i.jsxs("div",{className:"sp-action-bar",children:[i.jsx("button",{className:"sp-play-btn",onClick:()=>u(!f),children:f?i.jsx(Cs,{}):i.jsx(Et,{style:{marginLeft:3}})}),i.jsx("button",{className:`sp-heart-btn ${p?"liked":""}`,onClick:()=>h(!p),"aria-label":"Like",children:i.jsx(Xl,{})}),i.jsx("button",{className:"sp-icon-btn-lg",children:i.jsx(Ds,{})}),o.externalUrl&&i.jsxs("a",{href:o.externalUrl,target:"_blank",rel:"noopener noreferrer",className:"sp-external",style:{marginLeft:"auto"},children:[o.externalUrl.replace("https://","").replace(/\/$/,"")," ↗"]})]}),i.jsxs("div",{className:"sp-track-table",children:[i.jsxs("div",{className:"sp-track-header",children:[i.jsx("span",{className:"col-num",children:"#"}),i.jsx("span",{children:"Title"}),i.jsx("span",{className:"col-dur",children:i.jsx(cg,{})})]}),o.bullets.map((x,m)=>i.jsxs("div",{className:"sp-track-row",children:[i.jsxs("div",{className:"sp-track-num",children:[i.jsx("span",{className:"num",children:m+1}),i.jsx("span",{className:"play",children:i.jsx(Et,{size:10,style:{marginLeft:2}})})]}),i.jsxs("div",{className:"sp-track-text",children:[i.jsx("div",{className:"sp-track-title",children:x}),i.jsx("div",{className:"sp-track-sub",children:o.artist})]}),i.jsx("div",{className:"sp-track-dur",children:Jg(m+1)})]},m))]}),o.description&&i.jsxs("section",{className:"sp-section",children:[i.jsx("h2",{className:"sp-section-title",children:"About this album"}),i.jsx("div",{className:"sp-about",children:o.description})]})]}),E]})]}):i.jsxs(i.Fragment,{children:[i.jsx("style",{children:i1}),i.jsxs("div",{className:"sp-page",children:[y,i.jsxs("main",{className:"sp-main",children:[i.jsx("div",{className:"sp-topbar",children:i.jsx(ne,{to:"/spotify",className:"sp-back-btn",children:"← Back"})}),i.jsxs("div",{className:"sp-notfound",children:[i.jsx("h1",{children:"Album not found"}),i.jsxs("p",{children:["This playlist doesn't exist in ",Ts,"'s library."]}),i.jsx(ne,{to:"/spotify",className:"sp-external",children:"← Return to your resume"})]})]}),E]})]})}const{name:ks,summary:Pg,experience:G1,skills:Ig,project:mt,education:s1}=Zl,ex=`
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
`,r1=["linear-gradient(135deg, #F97316 0%, #DC2626 100%)","linear-gradient(135deg, #06B6D4 0%, #1D4ED8 100%)","linear-gradient(135deg, #8B5CF6 0%, #1E1B4B 100%)","linear-gradient(135deg, #EC4899 0%, #6B21A8 100%)"],c1=G1.map((r,o)=>({title:r.title,artist:r.company,initials:r.company,logo:r.logo,cover:r.coverBg??r1[o%r1.length],period:r.period,summary:r.summary,bullets:r.bullets,match:98-o*3,tag:o===0?"Now Playing":o===1?"Limited Series":"Documentary",type:"job"}));function po({id:r,title:o,rank:f,children:u}){const p=T.useRef(null),h=y=>{p.current&&p.current.scrollBy({left:y==="left"?-p.current.clientWidth*.8:p.current.clientWidth*.8})};return i.jsxs("div",{className:"nf-row",id:r,children:[i.jsxs("div",{className:"nf-row-header",children:[i.jsx("h2",{className:"nf-row-title",children:o}),f&&i.jsx("span",{className:"nf-explore",children:"Explore all →"})]}),i.jsx("button",{className:"nf-scroll-btn left",onClick:()=>h("left"),"aria-label":"Scroll left",children:i.jsx(ig,{})}),i.jsx("div",{className:"nf-row-scroller",ref:p,children:u}),i.jsx("button",{className:"nf-scroll-btn right",onClick:()=>h("right"),"aria-label":"Scroll right",children:i.jsx(sg,{})})]})}function ho({show:r,rank:o,wide:f,progress:u,onOpen:p,inList:h,onToggleList:y}){return i.jsxs("div",{className:`nf-card ${f?"nf-continue":""}`,style:o?{marginLeft:56,flex:"0 0 240px"}:void 0,onClick:p,children:[o&&i.jsx("span",{className:"nf-card-rank",children:o}),i.jsx("div",{className:"nf-card-cover",style:{background:r.cover},children:r.logo?i.jsx("img",{src:`/${r.logo}`,alt:r.artist}):r.initials}),u!==void 0&&i.jsx("div",{className:"nf-progress",children:i.jsx("div",{className:"nf-progress-fill",style:{width:`${u}%`}})}),i.jsxs("div",{className:"nf-card-overlay",children:[i.jsx("div",{className:"nf-card-title",children:r.title}),i.jsxs("div",{className:"nf-card-meta",children:[i.jsxs("span",{className:"nf-tag",children:[r.match,"% Match"]}),i.jsx("span",{className:"nf-match",children:"HD"}),i.jsx("span",{children:r.period})]}),i.jsxs("div",{className:"nf-card-actions",children:[i.jsx("button",{className:"nf-icon-btn primary",onClick:E=>{E.stopPropagation(),p()},"aria-label":"Play",children:i.jsx(Et,{size:10})}),i.jsx("button",{className:"nf-icon-btn",onClick:y,"aria-label":"Add to list",children:h?i.jsx(O1,{size:10}):i.jsx(Hs,{size:10})}),i.jsx("button",{className:"nf-icon-btn",onClick:E=>E.stopPropagation(),"aria-label":"Like",children:i.jsx(L1,{size:10})}),i.jsx("button",{className:"nf-icon-btn",style:{marginLeft:"auto"},onClick:E=>{E.stopPropagation(),p()},"aria-label":"More info",children:i.jsx(ng,{size:10})})]})]})]})}const js={title:mt.name,artist:ks,initials:mt.name,logo:mt.logo,cover:mt.coverBg,period:"2025",bullets:mt.bullets,match:99,tag:"Original Film",type:"project"};function tx(){const[r,o]=T.useState(null),[f,u]=T.useState(new Set);T.useEffect(()=>{document.title=`${ks} | RO+`},[]),T.useEffect(()=>(document.body.style.overflow=r?"hidden":"",()=>{document.body.style.overflow=""}),[r]);const p=y=>E=>{E.stopPropagation(),u(x=>{const m=new Set(x);return m.has(y.title)?m.delete(y.title):m.add(y.title),m})},h=c1[0];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:ex}),i.jsxs("div",{className:"nf-page",children:[i.jsxs("section",{className:"nf-hero",children:[i.jsx("div",{className:"nf-hero-photo",style:{backgroundImage:"url(/ro.jpg)"}}),i.jsxs("div",{className:"nf-hero-content",children:[i.jsxs("div",{className:"nf-hero-badge",children:[i.jsx("span",{className:"n-mark",children:"N"})," SERIES"]}),i.jsx("h1",{className:"nf-hero-title",children:ks}),i.jsxs("div",{className:"nf-hero-meta",children:[i.jsx("span",{className:"nf-tag",children:"98% Match"}),i.jsx("span",{children:"2020 – Present"}),i.jsx("span",{className:"nf-match",children:"TV-MA"}),i.jsx("span",{className:"nf-match",children:"HD"}),i.jsxs("span",{children:[G1.length," Seasons"]})]}),i.jsx("p",{className:"nf-hero-desc",children:Pg}),i.jsxs("div",{className:"nf-hero-actions",children:[i.jsxs("button",{className:"nf-btn nf-btn-play",onClick:()=>o(h),children:[i.jsx(Et,{})," Play"]}),i.jsxs("button",{className:"nf-btn nf-btn-info",onClick:()=>o(h),children:[i.jsx(dg,{})," More Info"]})]})]})]}),i.jsxs("div",{className:"nf-rows",children:[i.jsxs(po,{title:"Continue Watching",children:[i.jsx(ho,{show:h,wide:!0,progress:72,onOpen:()=>o(h),inList:f.has(h.title),onToggleList:p(h)}),i.jsx(ho,{show:js,wide:!0,progress:45,onOpen:()=>o(js),inList:f.has(js.title),onToggleList:p(js)})]}),i.jsx(po,{title:"Trending Now",children:c1.map(y=>i.jsx(ho,{show:y,onOpen:()=>o(y),inList:f.has(y.title),onToggleList:p(y)},`t-${y.title}`))}),i.jsx(po,{title:"Browse by Genre",children:Object.entries(Ig).map(([y,E])=>i.jsxs("div",{className:"nf-skill-card",children:[i.jsxs("div",{children:[i.jsx("div",{className:"nf-skill-category",children:y}),i.jsx("div",{className:"nf-skill-list",children:E.join(" · ")})]}),i.jsxs("div",{style:{fontSize:11,color:"#666"},children:[E.length," titles"]})]},y))}),i.jsx("div",{className:"nf-row-header",children:i.jsx("h2",{className:"nf-row-title",children:"RO+ Originals"})}),i.jsxs("div",{className:"nf-featured",children:[i.jsx("div",{className:"nf-featured-cover",style:{background:mt.coverBg},children:i.jsx("img",{src:`/${mt.logo}`,alt:mt.name})}),i.jsxs("div",{className:"nf-featured-body",children:[i.jsx("div",{className:"nf-featured-tag",children:"RO+ Original"}),i.jsx("div",{className:"nf-featured-title",children:mt.name}),i.jsxs("div",{className:"nf-featured-meta",children:["2025 · ",mt.role]}),i.jsx("div",{className:"nf-featured-desc",children:mt.bullets[0]}),i.jsxs("a",{href:mt.url,target:"_blank",rel:"noopener noreferrer",className:"nf-featured-link",children:[mt.url.replace("https://","").replace(/\/$/,"")," ↗"]})]})]}),i.jsx("div",{className:"nf-row-header",children:i.jsx("h2",{className:"nf-row-title",children:"Academy Award Nominees"})}),i.jsxs("div",{className:"nf-edu",children:[i.jsxs("div",{className:"nf-edu-badge",children:["CSUF",i.jsx("br",{}),"Computer Science"]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:12,color:"#E50914",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6},children:"Limited Series · 4 Seasons"}),i.jsx("div",{style:{fontSize:22,fontWeight:800,marginBottom:4},children:s1.degree}),i.jsx("div",{style:{fontSize:14,color:"#999"},children:s1.school})]})]}),i.jsxs("div",{className:"nf-footer",children:[i.jsxs("div",{style:{marginBottom:16},children:[i.jsx(ne,{to:"/",children:"Home"}),i.jsx(ne,{to:"/resume",children:"Resume"}),i.jsx(ne,{to:"/spotify",children:"Spotify Resume"}),i.jsx(ne,{to:"/projects",children:"Projects"})]}),i.jsxs("div",{children:["RO+ is a parody. © ",new Date().getFullYear()," ",ks,"."]})]})]}),r&&i.jsx("div",{className:"nf-modal-backdrop",onClick:()=>o(null),children:i.jsxs("div",{className:"nf-modal",onClick:y=>y.stopPropagation(),children:[i.jsx("button",{className:"nf-modal-close",onClick:()=>o(null),"aria-label":"Close",children:"✕"}),i.jsxs("div",{className:"nf-modal-hero",style:{background:r.cover},children:[r.logo&&i.jsx("div",{className:"nf-modal-hero-logo",children:i.jsx("img",{src:`/${r.logo}`,alt:r.artist})}),i.jsxs("div",{className:"nf-modal-title-stack",children:[i.jsx("h2",{className:"nf-modal-title",children:r.title}),i.jsxs("div",{className:"nf-modal-actions",children:[i.jsxs("button",{className:"nf-btn nf-btn-play",children:[i.jsx(Et,{})," Play"]}),i.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},onClick:()=>{u(y=>{const E=new Set(y);return E.has(r.title)?E.delete(r.title):E.add(r.title),E})},children:f.has(r.title)?i.jsx(O1,{}):i.jsx(Hs,{})}),i.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40},children:i.jsx(L1,{})}),i.jsx("button",{className:"nf-icon-btn",style:{width:40,height:40,marginLeft:"auto"},children:i.jsx(vg,{})})]})]})]}),i.jsxs("div",{className:"nf-modal-content",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"nf-modal-meta-line",children:[i.jsxs("span",{className:"nf-tag",children:[r.match,"% Match"]}),i.jsx("span",{children:r.period}),i.jsx("span",{className:"nf-match",children:"TV-MA"}),i.jsx("span",{className:"nf-match",children:"HD"}),i.jsxs("span",{children:[r.bullets.length," Episodes"]})]}),r.summary&&i.jsx("div",{className:"nf-modal-summary",children:r.summary}),i.jsx("ul",{className:"nf-modal-bullets",children:r.bullets.map((y,E)=>i.jsx("li",{children:y},E))})]}),i.jsxs("div",{className:"nf-modal-side",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Starring:"})," ",r.artist]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Genre:"})," ",r.tag]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Period:"})," ",r.period]}),i.jsxs("div",{style:{marginTop:12,color:"#666",fontSize:11},children:["This series is: ",i.jsx("strong",{style:{color:"#999"},children:"Ambitious, Technical, Inspiring"})]})]})]})]})})]})]})}const{name:Fn,email:mo,website:o1,phone:ax,summary:lx,experience:So,skills:zo,project:na,education:u1}=Zl,re="#76B900",go="#5a8f00",Gl="#1a1a1a",d1="#0f0f0f",$e="#2a2a2a",nx=`
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
    border-bottom: 1px solid ${$e};
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
    background: radial-gradient(circle at 30% 30%, ${re} 0%, ${go} 50%, #1a3300 100%);
    box-shadow: 0 0 12px rgba(118, 185, 0, 0.5);
  }

  .nv-brand-text {
    font-weight: 900;
    font-size: 18px;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }

  .nv-brand-text span { color: ${re}; }

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
  .nv-tab.active { color: ${re}; border-bottom: 2px solid ${re}; border-radius: 0; }

  .nv-user {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 12px;
    background: ${Gl};
    border: 1px solid ${$e};
    border-radius: 4px;
    font-size: 12px;
    color: #d6d6d6;
  }

  .nv-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${re};
    box-shadow: 0 0 8px ${re};
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
    border: 1px solid ${$e};
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
    background: ${re};
    box-shadow: 0 0 24px ${re};
  }

  .nv-hero-eyebrow {
    font-size: 11px;
    font-weight: 700;
    color: ${re};
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
    color: ${re};
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
    background: ${re};
    color: #000;
  }

  .nv-btn-primary:hover { background: #84d100; }
  .nv-btn-primary:active { transform: translateY(1px); }

  .nv-btn-ghost {
    background: transparent;
    color: #fff;
    border: 1px solid ${$e};
  }

  .nv-btn-ghost:hover { border-color: ${re}; color: ${re}; }

  /* Benchmark score */
  .nv-score {
    background: ${d1};
    border: 1px solid ${$e};
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
    color: ${re};
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
    background: linear-gradient(90deg, ${go}, ${re});
    border-radius: 3px;
    box-shadow: 0 0 8px ${re};
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
    border: 1px solid ${$e};
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
    background: ${re};
    opacity: 0.6;
  }

  .nv-stat-icon {
    color: ${re};
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
    background: ${re};
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
    border: 1px solid ${$e};
    border-radius: 6px;
    padding: 20px;
    transition: border-color 0.15s, transform 0.15s;
  }

  .nv-bench:hover {
    border-color: ${re};
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
    border: 1px solid ${$e};
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
    color: ${re};
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
    color: ${re};
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
    background: linear-gradient(90deg, ${go}, ${re});
    border-radius: 2px;
    transition: width 1s ease-out;
    box-shadow: 0 0 6px ${re};
  }

  .nv-bench-summary {
    font-size: 13px;
    color: #d6d6d6;
    line-height: 1.6;
    padding: 12px;
    background: ${d1};
    border-left: 2px solid ${re};
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
    color: ${re};
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
    border: 1px solid ${$e};
    border-radius: 6px;
    padding: 16px;
  }

  .nv-spec-head {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 700;
    color: ${re};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${$e};
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
    border: 1px solid ${$e};
    padding: 4px 10px;
    border-radius: 2px;
    font-weight: 600;
    transition: border-color 0.15s, color 0.15s;
  }

  .nv-spec-chip:hover {
    border-color: ${re};
    color: ${re};
  }

  /* ============ Process / Project ============ */
  .nv-process {
    background: ${Gl};
    border: 1px solid ${$e};
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
    border: 1px solid ${$e};
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
    color: ${re};
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
    color: ${re};
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

  .nv-gauge-bg { stroke: ${$e}; }
  .nv-gauge-fg { stroke: ${re}; filter: drop-shadow(0 0 4px ${re}); }

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
    color: ${re};
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
    border: 1px solid ${$e};
    border-radius: 6px;
    padding: 16px;
  }

  .nv-info-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid ${$e};
    font-size: 13px;
  }

  .nv-info-row:last-child { border-bottom: none; }
  .nv-info-row .lbl { color: #b3b3b3; }
  .nv-info-row .val { color: #fff; font-weight: 600; }

  .nv-info-row .val a { color: ${re}; text-decoration: none; }
  .nv-info-row .val a:hover { text-decoration: underline; }

  /* ============ Footer ============ */
  .nv-footer {
    text-align: center;
    padding: 24px;
    font-size: 11px;
    color: #5a5a5a;
    border-top: 1px solid ${$e};
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
`,ix=[1.6,1.3,1,.9];function sx(r,o){const f=ix[o]??.8;return Math.round(r*600*f)}const In=So.map((r,o)=>sx(r.bullets.length,o)),rx=Math.max(...In,1),V1=Object.values(zo).flat().length,cx=In.reduce((r,o)=>r+o,0)+V1*30+na.bullets.length*150;function f1({value:r,label:o}){const u=2*Math.PI*40,p=u-r/100*u;return i.jsxs("div",{className:"nv-gauge",children:[i.jsxs("svg",{viewBox:"0 0 96 96",children:[i.jsx("circle",{cx:"48",cy:"48",r:40,fill:"none",strokeWidth:"8",className:"nv-gauge-bg"}),i.jsx("circle",{cx:"48",cy:"48",r:40,fill:"none",strokeWidth:"8",className:"nv-gauge-fg",strokeDasharray:u,strokeDashoffset:p,strokeLinecap:"round"})]}),i.jsxs("div",{className:"nv-gauge-text",children:[i.jsxs("span",{className:"nv-gauge-num",children:[r,"%"]}),i.jsx("span",{className:"nv-gauge-unit",children:o})]})]})}function ox(){const[r,o]=T.useState(0),f=Object.values(zo).flat().length,u=6;T.useEffect(()=>{document.title=`${Fn} | RTX Engineering Edition`;const h=setTimeout(()=>o(87),300);return()=>clearTimeout(h)},[]);const p={Languages:i.jsx(hg,{}),"Frameworks / Libraries":i.jsx(Yp,{}),Infrastructure:i.jsx(Xp,{}),Observability:i.jsx(pg,{}),"Machine Learning":i.jsx(Gp,{}),Tools:i.jsx(lg,{})};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:nx}),i.jsxs("div",{className:"nv-page",children:[i.jsxs("header",{className:"nv-header",children:[i.jsxs(ne,{to:"/",className:"nv-brand",children:[i.jsx("div",{className:"nv-brand-eye"}),i.jsxs("div",{className:"nv-brand-text",children:[i.jsx("span",{children:"RTX"})," ENGINE"]})]}),i.jsxs("nav",{className:"nv-tabs",children:[i.jsx("a",{className:"nv-tab active",href:"#dashboard",children:"Dashboard"}),i.jsx("a",{className:"nv-tab",href:"#performance",children:"Performance"}),i.jsx("a",{className:"nv-tab",href:"#specs",children:"Specifications"}),i.jsx("a",{className:"nv-tab",href:"#workload",children:"Workload"}),i.jsx("a",{className:"nv-tab",href:"#system",children:"System"})]}),i.jsxs("div",{className:"nv-user",children:[i.jsx("span",{className:"nv-status-dot"}),"ONLINE · ",Fn.split(" ")[0].toUpperCase()]})]}),i.jsxs("div",{className:"nv-container",children:[i.jsxs("section",{className:"nv-hero",id:"dashboard",children:[i.jsxs("div",{children:[i.jsx("div",{className:"nv-hero-eyebrow",children:"RTX RO · Engineering Edition"}),i.jsxs("h1",{className:"nv-hero-title",children:[Fn.split(" ")[0]," ",i.jsx("em",{children:Fn.split(" ")[1]})]}),i.jsx("p",{className:"nv-hero-sub",children:lx}),i.jsxs("div",{className:"nv-hero-cta",children:[i.jsxs("a",{href:`mailto:${mo}`,className:"nv-btn nv-btn-primary",children:[i.jsx(Et,{})," Launch Contact"]}),i.jsxs(ne,{to:"/resume",className:"nv-btn nv-btn-ghost",children:[i.jsx(ug,{})," Download Resume"]})]})]}),i.jsxs("div",{className:"nv-score",children:[i.jsx("div",{className:"nv-score-label",children:"Benchmark Score"}),i.jsxs("div",{children:[i.jsx("span",{className:"nv-score-value",children:cx.toLocaleString()}),i.jsx("span",{className:"nv-score-unit",children:"pts"})]}),i.jsxs("div",{className:"nv-score-sub",children:[In.length," deployments · ",V1," compute cores"]}),i.jsx("div",{className:"nv-score-bar",children:i.jsx("div",{className:"nv-score-fill"})})]})]}),i.jsxs("section",{className:"nv-stats",children:[i.jsxs("div",{className:"nv-stat-card",children:[i.jsx("div",{className:"nv-stat-icon",children:i.jsx(Gp,{})}),i.jsx("div",{className:"nv-stat-label",children:"Compute Cores"}),i.jsxs("div",{className:"nv-stat-value",children:[f,i.jsx("span",{className:"nv-stat-unit",children:"tech"})]})]}),i.jsxs("div",{className:"nv-stat-card",children:[i.jsx("div",{className:"nv-stat-icon",children:i.jsx(fg,{})}),i.jsx("div",{className:"nv-stat-label",children:"Years Active"}),i.jsxs("div",{className:"nv-stat-value",children:[u,i.jsx("span",{className:"nv-stat-unit",children:"yrs"})]})]}),i.jsxs("div",{className:"nv-stat-card",children:[i.jsx("div",{className:"nv-stat-icon",children:i.jsx(Xp,{})}),i.jsx("div",{className:"nv-stat-label",children:"Deployments"}),i.jsxs("div",{className:"nv-stat-value",children:[So.length+1,i.jsx("span",{className:"nv-stat-unit",children:"prod"})]})]}),i.jsxs("div",{className:"nv-stat-card",children:[i.jsx("div",{className:"nv-stat-icon",children:i.jsx(gg,{})}),i.jsx("div",{className:"nv-stat-label",children:"Thermals"}),i.jsx("div",{className:"nv-stat-value",style:{color:re},children:"NOMINAL"})]})]}),i.jsxs("section",{className:"nv-section",id:"performance",children:[i.jsxs("div",{className:"nv-section-header",children:[i.jsx("h2",{className:"nv-section-title",children:"Performance Benchmarks"}),i.jsx("span",{className:"nv-section-sub",children:"Per-deployment results · synthetic + real-world"})]}),i.jsx("div",{className:"nv-benchmarks",children:So.map((h,y)=>i.jsxs("div",{className:"nv-bench",children:[i.jsxs("div",{className:"nv-bench-head",children:[i.jsx("div",{className:"nv-bench-logo",style:{background:h.coverBg},children:h.logo&&i.jsx("img",{src:`/${h.logo}`,alt:h.company})}),i.jsxs("div",{className:"nv-bench-meta",children:[i.jsx("h3",{className:"nv-bench-title",children:h.title}),i.jsx("div",{className:"nv-bench-company",children:h.company}),i.jsxs("div",{className:"nv-bench-loc",children:[h.location," · ",h.period]})]}),i.jsxs("div",{className:"nv-bench-score",children:[i.jsx("div",{className:"nv-bench-score-num",children:In[y].toLocaleString()}),i.jsx("div",{className:"nv-bench-score-label",children:"benchmark"})]})]}),i.jsx("div",{className:"nv-bench-bar",children:i.jsx("div",{className:"nv-bench-bar-fill",style:{width:`${Math.round(In[y]/rx*100)}%`}})}),h.summary&&i.jsx("div",{className:"nv-bench-summary",children:h.summary}),i.jsx("ul",{className:"nv-bench-bullets",children:h.bullets.map((E,x)=>i.jsx("li",{children:E},x))})]},h.company))})]}),i.jsxs("section",{className:"nv-section",id:"specs",children:[i.jsxs("div",{className:"nv-section-header",children:[i.jsx("h2",{className:"nv-section-title",children:"System Specifications"}),i.jsx("span",{className:"nv-section-sub",children:"Driver version: 2026.05"})]}),i.jsx("div",{className:"nv-specs",children:Object.entries(zo).map(([h,y])=>i.jsxs("div",{className:"nv-spec-card",children:[i.jsxs("div",{className:"nv-spec-head",children:[p[h]??i.jsx(Yp,{})," ",h]}),i.jsx("div",{className:"nv-spec-list",children:y.map(E=>i.jsx("span",{className:"nv-spec-chip",children:E},E))})]},h))})]}),i.jsxs("section",{className:"nv-section",id:"workload",children:[i.jsxs("div",{className:"nv-section-header",children:[i.jsxs("h2",{className:"nv-section-title",children:[i.jsx(rg,{style:{color:re,fontSize:8,marginRight:4}}),"Active Workload"]}),i.jsx("span",{className:"nv-section-sub",children:"PID 0x01 · live process"})]}),i.jsxs("div",{className:"nv-process",children:[i.jsx("div",{className:"nv-proc-logo",style:{background:na.coverBg},children:i.jsx("img",{src:`/${na.logo}`,alt:na.name})}),i.jsxs("div",{className:"nv-proc-info",children:[i.jsx("h3",{className:"nv-proc-title",children:na.name}),i.jsx("div",{className:"nv-proc-role",children:na.role}),i.jsx("div",{className:"nv-proc-tech",children:na.tech}),i.jsx("ul",{className:"nv-proc-bullets",children:na.bullets.map((h,y)=>i.jsx("li",{children:h},y))}),i.jsxs("a",{href:na.url,target:"_blank",rel:"noopener noreferrer",className:"nv-btn nv-btn-ghost",style:{marginTop:16},children:[i.jsx(Et,{})," Open Process"]})]}),i.jsxs("div",{className:"nv-proc-gauge",children:[i.jsx(f1,{value:r,label:"Utilization"}),i.jsx(f1,{value:92,label:"Memory"})]})]})]}),i.jsxs("section",{className:"nv-section",id:"system",children:[i.jsx("div",{className:"nv-section-header",children:i.jsx("h2",{className:"nv-section-title",children:"System Information"})}),i.jsxs("div",{className:"nv-sysinfo",children:[i.jsxs("div",{className:"nv-info-card",children:[i.jsxs("div",{className:"nv-spec-head",children:[i.jsx(Pn,{})," Training Data"]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Degree"}),i.jsx("span",{className:"val",children:u1.degree})]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Institution"}),i.jsx("span",{className:"val",children:u1.school})]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Architecture"}),i.jsx("span",{className:"val",children:"Computer Science"})]})]}),i.jsxs("div",{className:"nv-info-card",children:[i.jsxs("div",{className:"nv-spec-head",children:[i.jsx(ti,{})," Contact Interfaces"]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Email"}),i.jsx("span",{className:"val",children:i.jsx("a",{href:`mailto:${mo}`,children:mo})})]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Website"}),i.jsx("span",{className:"val",children:i.jsx("a",{href:`https://${o1}`,target:"_blank",rel:"noopener noreferrer",children:o1})})]}),i.jsxs("div",{className:"nv-info-row",children:[i.jsx("span",{className:"lbl",children:"Phone"}),i.jsx("span",{className:"val",children:ax})]})]})]})]})]}),i.jsxs("footer",{className:"nv-footer",children:["© ",new Date().getFullYear()," ",Fn," · RTX Engineering Edition · Driver build 2026.05"]})]})]})}const{name:el,email:p1,summary:ux,experience:No,skills:X1,project:Bt,education:xo}=Zl,Vl="linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",dx="linear-gradient(90deg, #0064E0 0%, #0082FB 50%, #00C6FF 100%)",fx=`
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
    background: ${dx};
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
`;function px(r){return r.split(/\s+/).filter(Boolean).slice(0,2).map(o=>o[0]).join("").toUpperCase()}function hx(r){return r.toLowerCase().replace(/[^a-z0-9]/g,"")}const mx=No.map((r,o)=>({id:`job-${o}`,cover:r.coverBg||Vl,logo:r.logo,pill:o===0?"Pinned":"Post",caption:r.summary??`Shipped ${r.bullets.length} workstreams as ${r.title} @ ${r.company}.`,company:r.company,title:r.title,period:r.period,location:r.location,summary:r.summary,bullets:r.bullets,likes:980+(4-o)*314+r.bullets.length*27,url:void 0})),gx={id:"project",cover:Bt.coverBg,logo:Bt.logo,pill:"Reel",caption:`Building ${Bt.name} — ${Bt.role}.`,company:Bt.name,title:Bt.role,period:"Now",location:Bt.tech,summary:Bt.bullets[0],bullets:Bt.bullets,likes:4127,url:Bt.url},xx={id:"edu",cover:"linear-gradient(135deg, #f09433 0%, #bc1888 100%)",pill:"Throwback",caption:xo.degree,company:xo.school,title:xo.degree,period:"2016 – 2020",location:"Fullerton, CA",summary:"Where the foundation got laid — CS at CSUF.",bullets:["B.S. Computer Science with a focus on systems and ML.","Built the muscle memory for the production-scale work that came after."],likes:612,url:void 0},Ss=[gx,...mx,xx],zs=Object.values(X1).flat().length;function vx(){const[r,o]=T.useState("posts"),[f,u]=T.useState(null),[p,h]=T.useState(new Set),[y,E]=T.useState(new Set),[x,m]=T.useState(!1);T.useEffect(()=>{document.title=`${el} (@ro.inzunza) · Engineering`},[]),T.useEffect(()=>(document.body.style.overflow=f?"hidden":"",()=>{document.body.style.overflow=""}),[f]);const k=(B,L,X)=>{const V=new Set(B);V.has(L)?V.delete(L):V.add(L),X(V)},_=Ss.filter(B=>B.pill==="Reel"||B.id==="project"),O=r==="reels"?_:r==="tagged"?[]:Ss;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:fx}),i.jsxs("div",{className:"ig-page",children:[i.jsxs("header",{className:"ig-nav",children:[i.jsxs(ne,{to:"/",className:"ig-brand",children:[i.jsx("span",{className:"ig-brand-logo",children:i.jsx(C1,{})}),i.jsx("span",{className:"ig-brand-text",children:"Instagram"})]}),i.jsxs("div",{className:"ig-search",children:[i.jsx(_s,{size:12})," Search"]}),i.jsxs("div",{className:"ig-nav-icons",children:[i.jsx(ne,{to:"/","aria-label":"Home",className:"desktop-only",children:i.jsx(ti,{})}),i.jsx("button",{"aria-label":"Messages",className:"desktop-only",children:i.jsx($p,{})}),i.jsx("button",{"aria-label":"New post",className:"desktop-only",children:i.jsx(Vp,{})}),i.jsx("button",{"aria-label":"Explore",className:"desktop-only",children:i.jsx(og,{})}),i.jsx("button",{"aria-label":"Profile",children:i.jsx(Kp,{})})]})]}),i.jsxs("main",{className:"ig-container",children:[i.jsxs("section",{className:"ig-profile",children:[i.jsx("div",{className:"ig-avatar-wrap",children:i.jsx("div",{className:"ig-avatar-ring",children:i.jsx("img",{src:"/ro.jpg",alt:el,className:"ig-avatar"})})}),i.jsxs("div",{className:"ig-profile-info",children:[i.jsxs("div",{className:"ig-handle-row",children:[i.jsxs("span",{className:"ig-handle",children:["ro.inzunza",i.jsx(Pn,{className:"ig-verified"})]}),i.jsxs("div",{className:"ig-actions",children:[i.jsx("button",{className:x?"ig-btn ig-btn-secondary":"ig-btn ig-btn-primary",onClick:()=>m(B=>!B),children:x?"Following":"Follow"}),i.jsx("a",{href:`mailto:${p1}`,className:"ig-btn ig-btn-secondary",children:"Message"}),i.jsx("button",{className:"ig-icon-btn","aria-label":"More options",children:i.jsx(Ds,{size:12})})]})]}),i.jsxs("div",{className:"ig-stats",children:[i.jsxs("span",{children:[i.jsx("strong",{children:Ss.length})," posts"]}),i.jsxs("span",{children:[i.jsx("strong",{children:No.length*1200+zs*87})," followers"]}),i.jsxs("span",{children:[i.jsx("strong",{children:zs})," following"]})]}),i.jsxs("div",{className:"ig-bio",children:[i.jsxs("div",{className:"ig-bio-name",children:[el," ",i.jsx(Pn,{style:{color:"#1d9bf0",marginLeft:4},size:12})]}),i.jsx("div",{className:"ig-bio-title",children:"Systems Engineer · Founder @ SideQuest"}),i.jsx("div",{children:ux}),i.jsx("div",{style:{marginTop:8},children:"📍 California, US · ☕ Coffee · 🎮 Gamer · 🐕 Frenchie dad"}),i.jsx("a",{href:"https://www.rosendoinzunza.com",target:"_blank",rel:"noopener noreferrer",className:"ig-bio-link",style:{marginTop:6,display:"inline-block"},children:"rosendoinzunza.com"})]})]})]}),i.jsxs("div",{className:"ig-mobile-stats",children:[i.jsxs("div",{children:[i.jsx("strong",{children:Ss.length}),i.jsx("span",{children:"posts"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:No.length*1200+zs*87}),i.jsx("span",{children:"followers"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:zs}),i.jsx("span",{children:"following"})]})]}),i.jsxs("div",{className:"ig-meta-banner",children:[i.jsxs("div",{className:"ig-meta-banner-text",children:[i.jsx("span",{className:"ig-meta-banner-title",children:"Hello, Meta 👋"}),i.jsx("span",{className:"ig-meta-banner-sub",children:"This profile was built for your team. Tap any post to see the receipts."})]}),i.jsx("a",{href:`mailto:${p1}`,className:"ig-meta-banner-btn",children:"Reach out →"})]}),i.jsx("div",{className:"ig-highlights",children:Object.entries(X1).map(([B,L])=>i.jsxs("button",{className:"ig-highlight",onClick:()=>u({id:`skill-${B}`,cover:Vl,pill:"Highlight",caption:`${B}: ${L.length} tools`,company:B,title:B,period:"Stack",bullets:L,likes:L.length*142}),children:[i.jsx("div",{className:"ig-highlight-ring",children:i.jsx("div",{className:"ig-highlight-bubble",children:px(B)})}),i.jsx("span",{className:"ig-highlight-label",children:B})]},B))}),i.jsxs("div",{className:"ig-tabs",children:[i.jsxs("button",{className:`ig-tab ${r==="posts"?"active":""}`,onClick:()=>o("posts"),children:[i.jsx(mg,{})," ",i.jsx("span",{children:"Posts"})]}),i.jsxs("button",{className:`ig-tab ${r==="reels"?"active":""}`,onClick:()=>o("reels"),children:[i.jsx(Zp,{})," ",i.jsx("span",{children:"Reels"})]}),i.jsxs("button",{className:`ig-tab ${r==="tagged"?"active":""}`,onClick:()=>o("tagged"),children:[i.jsx(Kp,{})," ",i.jsx("span",{children:"Tagged"})]})]}),r==="tagged"?i.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"#737373"},children:[i.jsx("div",{style:{fontSize:18,fontWeight:700,color:"#fafafa",marginBottom:8},children:"Photos of you"}),i.jsx("div",{style:{fontSize:14},children:"When people tag you in photos, they'll appear here."})]}):i.jsx("div",{className:"ig-grid",children:O.map(B=>i.jsxs("div",{className:"ig-post",onClick:()=>u(B),style:{background:B.cover},children:[i.jsx("div",{className:"ig-post-cover",style:{background:B.cover},children:B.logo?i.jsx("img",{src:`/${B.logo}`,alt:B.company}):i.jsx("span",{children:B.company})}),i.jsx("span",{className:"ig-post-pill",children:B.pill}),i.jsxs("div",{className:"ig-post-hover",children:[i.jsxs("span",{className:"ig-post-hover-item",children:[i.jsx(Xl,{})," ",B.likes.toLocaleString()]}),i.jsxs("span",{className:"ig-post-hover-item",children:[i.jsx(Qp,{})," ",B.bullets.length]})]})]},B.id))}),i.jsxs("footer",{className:"ig-footer",children:[i.jsxs("div",{style:{marginBottom:8},children:[i.jsx(ne,{to:"/",children:"Home"}),"·",i.jsx(ne,{to:"/resume",children:"Resume"}),"·",i.jsx(ne,{to:"/projects",children:"Projects"}),"·",i.jsx(ne,{to:"/spotify",children:"Spotify"}),"·",i.jsx(ne,{to:"/netflix",children:"Netflix"}),"·",i.jsx(ne,{to:"/nvidia",children:"Nvidia"})]}),i.jsxs("div",{children:["© ",new Date().getFullYear()," ",el," · Unofficial Instagram-style résumé. Not affiliated with Meta."]})]})]}),i.jsxs("nav",{className:"ig-bottom-nav",children:[i.jsx(ne,{to:"/","aria-label":"Home",children:i.jsx(ti,{})}),i.jsx("button",{"aria-label":"Search",children:i.jsx(_s,{})}),i.jsx("button",{"aria-label":"New",children:i.jsx(Vp,{})}),i.jsx("button",{"aria-label":"Reels",children:i.jsx(Zp,{})}),i.jsx("button",{className:"me-avatar","aria-label":"Profile",children:i.jsx("img",{src:"/ro.jpg",alt:el})})]}),f&&i.jsxs("div",{className:"ig-modal-backdrop",onClick:()=>u(null),children:[i.jsx("button",{className:"ig-modal-close",onClick:()=>u(null),"aria-label":"Close",children:i.jsx(xg,{})}),i.jsxs("div",{className:"ig-modal",onClick:B=>B.stopPropagation(),children:[i.jsx("div",{className:"ig-modal-image",style:{background:f.cover},children:f.logo?i.jsx("img",{src:`/${f.logo}`,alt:f.company}):i.jsx("span",{children:f.company})}),i.jsxs("div",{className:"ig-modal-side",children:[i.jsxs("div",{className:"ig-modal-head",children:[i.jsx("div",{className:"ig-modal-head-avatar",children:i.jsx("img",{src:"/ro.jpg",alt:el})}),i.jsxs("div",{className:"ig-modal-head-meta",children:[i.jsxs("div",{className:"ig-modal-head-name",children:["ro.inzunza ",i.jsx(Pn,{className:"ig-verified",size:12})]}),i.jsx("div",{className:"ig-modal-head-sub",children:f.location??f.company})]}),i.jsx("button",{className:"ig-icon-btn",style:{background:"transparent"},"aria-label":"More",children:i.jsx(Ds,{size:12})})]}),i.jsxs("div",{className:"ig-modal-comments",children:[i.jsxs("div",{className:"ig-comment",children:[i.jsx("div",{className:"ig-comment-avatar",children:i.jsx("div",{className:"ig-comment-avatar-inner",children:i.jsx("img",{src:"/ro.jpg",alt:el,style:{width:"100%",height:"100%",borderRadius:"50%",objectFit:"cover"}})})}),i.jsxs("div",{className:"ig-comment-body",children:[i.jsx("span",{className:"ig-comment-handle",children:"ro.inzunza"}),i.jsxs("span",{className:"ig-comment-text",children:[i.jsx("strong",{children:f.title})," · ",i.jsx("span",{style:{color:"#a8a8a8"},children:f.period})]}),f.summary&&i.jsx("div",{className:"ig-comment-text",style:{marginTop:6},children:f.summary}),f.url&&i.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"ig-bio-link",style:{display:"inline-block",marginTop:6},children:[f.url.replace(/^https?:\/\//,"").replace(/\/$/,"")," ↗"]})]})]}),f.bullets.map((B,L)=>i.jsxs("div",{className:"ig-comment",children:[i.jsx("div",{className:"ig-comment-avatar",children:i.jsx("div",{className:"ig-comment-avatar-inner",children:(L+1).toString()})}),i.jsxs("div",{className:"ig-comment-body",children:[i.jsxs("span",{className:"ig-comment-handle",children:[hx(f.company)||"ship",".team"]}),i.jsx("span",{className:"ig-comment-text",children:B}),i.jsxs("div",{className:"ig-comment-meta",children:[i.jsxs("span",{children:[Math.round(f.likes/(L+3)).toLocaleString()," likes"]}),i.jsx("span",{children:"Reply"})]})]})]},L))]}),i.jsxs("div",{className:"ig-modal-actions",children:[i.jsx("button",{onClick:()=>k(p,f.id,h),"aria-label":"Like",className:p.has(f.id)?"liked":"",children:p.has(f.id)?i.jsx(Xl,{}):i.jsx(yg,{})}),i.jsx("button",{"aria-label":"Comment",children:i.jsx(Qp,{})}),i.jsx("button",{"aria-label":"Share",children:i.jsx($p,{})}),i.jsx("button",{className:"right",onClick:()=>k(y,f.id,E),"aria-label":"Save",children:i.jsx(bg,{style:{color:y.has(f.id)?"#fafafa":void 0}})})]}),i.jsxs("div",{className:"ig-modal-likes",children:[(f.likes+(p.has(f.id)?1:0)).toLocaleString()," likes"]}),i.jsx("div",{className:"ig-modal-time",children:f.period})]})]})]})]})]})}const bx=`
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
`,Ns="/";function yx(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:bx}),i.jsx("div",{className:"sq-page",children:i.jsxs("div",{className:"sq-inner",children:[i.jsxs("div",{className:"sq-header",children:[i.jsxs("div",{className:"sq-header-left",children:[i.jsxs("div",{className:"sq-app-name",children:["Side",i.jsx("span",{children:"Quest"})]}),i.jsx("div",{className:"sq-tagline",children:"iOS Job Marketplace - Full-Stack Solo Project"})]}),i.jsxs("div",{className:"sq-header-right",children:[i.jsx("div",{className:"sq-role-badge",children:"iOS + Backend"}),i.jsx("p",{children:"sidequestapp.io"}),i.jsx("p",{children:"rosendoinzunza@gmail.com"}),i.jsx("p",{children:"Beta Launch - May 2026"})]})]}),i.jsxs("div",{className:"sq-sections",children:[i.jsxs("div",{className:"sq-section layout-full",children:[i.jsxs("div",{className:"sq-section-text",children:[i.jsx("div",{className:"sq-section-number",children:"01 - Discover Jobs"}),i.jsx("div",{className:"sq-section-title",children:"Swipe to Apply"}),i.jsx("div",{className:"sq-section-desc",children:"Applicants browse job listings through a swipeable card deck. Swipe right to apply, left to pass - a familiar, low-friction interaction that makes job hunting feel less like work."})]}),i.jsx("div",{className:"sq-screenshot tall",children:i.jsx("img",{src:`${Ns}Applicant_feed_view.png`,alt:"Applicant feed view"})})]}),i.jsx("div",{className:"sq-divider"}),i.jsxs("div",{className:"sq-section-text",children:[i.jsx("div",{className:"sq-section-number",children:"02 - Two-Sided Marketplace"}),i.jsx("div",{className:"sq-section-title",children:"Built for Both Sides"}),i.jsx("div",{className:"sq-section-desc",children:"Businesses post listings and move applicants through a hiring pipeline (Interested → Hired). Applicants track every application in one place, with active and archived views."})]}),i.jsxs("div",{className:"sq-two-up",children:[i.jsxs("div",{children:[i.jsx("div",{className:"sq-two-up-label",children:"Business - Listings"}),i.jsx("div",{className:"sq-screenshot medium",children:i.jsx("img",{src:`${Ns}biz_listings.view.png`,alt:"Business listings view"})})]}),i.jsxs("div",{children:[i.jsx("div",{className:"sq-two-up-label",children:"Applicant - Quests"}),i.jsx("div",{className:"sq-screenshot medium",children:i.jsx("img",{src:`${Ns}applicant_quests_view.png`,alt:"Applicant quests view"})})]})]}),i.jsx("div",{className:"sq-divider"}),i.jsxs("div",{className:"sq-section layout-chat",children:[i.jsx("div",{className:"sq-screenshot short",children:i.jsx("img",{src:`${Ns}conversation_view.png`,alt:"Conversation view"})}),i.jsxs("div",{className:"sq-section-text",children:[i.jsx("div",{className:"sq-section-number",children:"03 - Real-Time Messaging"}),i.jsx("div",{className:"sq-section-title",children:"Chat When It Clicks"}),i.jsx("div",{className:"sq-section-desc",children:"In-app messaging connects businesses and applicants the moment there's mutual interest. Live updates via WebSocket, typing indicators, read receipts, and push notifications keep conversations moving."})]})]})]}),i.jsx("div",{className:"sq-divider"}),i.jsxs("div",{children:[i.jsx("div",{className:"sq-stack-label",children:"Under the Hood"}),i.jsxs("div",{className:"sq-hood-grid",children:[i.jsxs("div",{className:"sq-hood-item",children:[i.jsx("div",{className:"sq-hood-title",children:"JWT + Refresh Token Rotation"}),i.jsx("div",{className:"sq-hood-desc",children:"Short-lived access tokens with silent refresh - users stay logged in without re-authenticating."})]}),i.jsxs("div",{className:"sq-hood-item",children:[i.jsx("div",{className:"sq-hood-title",children:"Apple & Google SSO"}),i.jsx("div",{className:"sq-hood-desc",children:"Native OAuth flows on iOS alongside email/password auth, all sharing the same session pipeline."})]}),i.jsxs("div",{className:"sq-hood-item",children:[i.jsx("div",{className:"sq-hood-title",children:"WebSocket Messaging"}),i.jsx("div",{className:"sq-hood-desc",children:"Live chat with a polling fallback - messages arrive instantly without requiring a page refresh."})]}),i.jsxs("div",{className:"sq-hood-item",children:[i.jsx("div",{className:"sq-hood-title",children:"Per-Route Rate Limiting"}),i.jsx("div",{className:"sq-hood-desc",children:"Sliding window limiter keyed by IP, with separate thresholds for auth vs. registration routes."})]}),i.jsxs("div",{className:"sq-hood-item",children:[i.jsx("div",{className:"sq-hood-title",children:"Stripe + RevenueCat"}),i.jsx("div",{className:"sq-hood-desc",children:"Stripe for business subscriptions, RevenueCat for applicant in-app purchases - two billing surfaces, one codebase."})]}),i.jsxs("div",{className:"sq-hood-item",children:[i.jsx("div",{className:"sq-hood-title",children:"AWS S3 Media Uploads"}),i.jsx("div",{className:"sq-hood-desc",children:"Profile photos and video intros upload directly to S3, keeping the API server stateless."})]})]})]}),i.jsx("div",{className:"sq-divider"}),i.jsxs("div",{children:[i.jsx("div",{className:"sq-stack-label",children:"Built with"}),i.jsx("div",{className:"sq-stack-chips",children:["SwiftUI (MVVM)","Rust / Axum","PostgreSQL","JWT Auth","Stripe","RevenueCat","WebSockets","Push Notifications","AWS S3","TestFlight"].map(r=>i.jsx("span",{className:"sq-chip",children:r},r))})]})]})})]})}zh.createRoot(document.getElementById("root")).render(i.jsx(Da.StrictMode,{children:i.jsx(Um,{basename:"/",children:i.jsxs(mm,{children:[i.jsx(Ht,{path:"/",element:i.jsx(Ag,{})}),i.jsx(Ht,{path:"/about",element:i.jsx(Cg,{})}),i.jsx(Ht,{path:"/resume",element:i.jsx(Lg,{})}),i.jsx(Ht,{path:"/spotify",element:i.jsx($g,{})}),i.jsx(Ht,{path:"/spotify/:slug",element:i.jsx(Wg,{})}),i.jsx(Ht,{path:"/netflix",element:i.jsx(tx,{})}),i.jsx(Ht,{path:"/nvidia",element:i.jsx(ox,{})}),i.jsx(Ht,{path:"/meta",element:i.jsx(vx,{})}),i.jsx(Ht,{path:"/projects",element:i.jsx(yx,{})})]})})}));
