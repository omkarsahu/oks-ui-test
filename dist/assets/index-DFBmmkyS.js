(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))d(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const E of b.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&d(E)}).observe(document,{childList:!0,subtree:!0});function p(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function d(y){if(y.ep)return;y.ep=!0;const b=p(y);fetch(y.href,b)}})();function hv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ac={exports:{}},wl={};var yp;function vv(){if(yp)return wl;yp=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function p(d,y,b){var E=null;if(b!==void 0&&(E=""+b),y.key!==void 0&&(E=""+y.key),"key"in y){b={};for(var Y in y)Y!=="key"&&(b[Y]=y[Y])}else b=y;return y=b.ref,{$$typeof:i,type:d,key:E,ref:y!==void 0?y:null,props:b}}return wl.Fragment=c,wl.jsx=p,wl.jsxs=p,wl}var kp;function gv(){return kp||(kp=1,ac.exports=vv()),ac.exports}var o=gv(),oc={exports:{}},Me={};var wp;function bv(){if(wp)return Me;wp=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),E=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),G=Symbol.iterator;function I(f){return f===null||typeof f!="object"?null:(f=G&&f[G]||f["@@iterator"],typeof f=="function"?f:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,pe={};function W(f,v,R){this.props=f,this.context=v,this.refs=pe,this.updater=R||U}W.prototype.isReactComponent={},W.prototype.setState=function(f,v){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,v,"setState")},W.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function ke(){}ke.prototype=W.prototype;function de(f,v,R){this.props=f,this.context=v,this.refs=pe,this.updater=R||U}var P=de.prototype=new ke;P.constructor=de,te(P,W.prototype),P.isPureReactComponent=!0;var ne=Array.isArray;function ie(){}var ee={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function X(f,v,R){var w=R.ref;return{$$typeof:i,type:f,key:v,ref:w!==void 0?w:null,props:R}}function he(f,v){return X(f.type,v,f.props)}function ye(f){return typeof f=="object"&&f!==null&&f.$$typeof===i}function ce(f){var v={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(R){return v[R]})}var ve=/\/+/g;function Se(f,v){return typeof f=="object"&&f!==null&&f.key!=null?ce(""+f.key):v.toString(36)}function ae(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(ie,ie):(f.status="pending",f.then(function(v){f.status==="pending"&&(f.status="fulfilled",f.value=v)},function(v){f.status==="pending"&&(f.status="rejected",f.reason=v)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function k(f,v,R,w,Z){var $=typeof f;($==="undefined"||$==="boolean")&&(f=null);var le=!1;if(f===null)le=!0;else switch($){case"bigint":case"string":case"number":le=!0;break;case"object":switch(f.$$typeof){case i:case c:le=!0;break;case H:return le=f._init,k(le(f._payload),v,R,w,Z)}}if(le)return Z=Z(f),le=w===""?"."+Se(f,0):w,ne(Z)?(R="",le!=null&&(R=le.replace(ve,"$&/")+"/"),k(Z,v,R,"",function(se){return se})):Z!=null&&(ye(Z)&&(Z=he(Z,R+(Z.key==null||f&&f.key===Z.key?"":(""+Z.key).replace(ve,"$&/")+"/")+le)),v.push(Z)),1;le=0;var De=w===""?".":w+":";if(ne(f))for(var V=0;V<f.length;V++)w=f[V],$=De+Se(w,V),le+=k(w,v,R,$,Z);else if(V=I(f),typeof V=="function")for(f=V.call(f),V=0;!(w=f.next()).done;)w=w.value,$=De+Se(w,V++),le+=k(w,v,R,$,Z);else if($==="object"){if(typeof f.then=="function")return k(ae(f),v,R,w,Z);throw v=String(f),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return le}function O(f,v,R){if(f==null)return f;var w=[],Z=0;return k(f,w,"","",function($){return v.call(R,$,Z++)}),w}function K(f){if(f._status===-1){var v=f._result;v=v(),v.then(function(R){(f._status===0||f._status===-1)&&(f._status=1,f._result=R)},function(R){(f._status===0||f._status===-1)&&(f._status=2,f._result=R)}),f._status===-1&&(f._status=0,f._result=v)}if(f._status===1)return f._result.default;throw f._result}var xe=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},ue={map:O,forEach:function(f,v,R){O(f,function(){v.apply(this,arguments)},R)},count:function(f){var v=0;return O(f,function(){v++}),v},toArray:function(f){return O(f,function(v){return v})||[]},only:function(f){if(!ye(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return Me.Activity=M,Me.Children=ue,Me.Component=W,Me.Fragment=p,Me.Profiler=y,Me.PureComponent=de,Me.StrictMode=d,Me.Suspense=A,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,Me.__COMPILER_RUNTIME={__proto__:null,c:function(f){return ee.H.useMemoCache(f)}},Me.cache=function(f){return function(){return f.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(f,v,R){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var w=te({},f.props),Z=f.key;if(v!=null)for($ in v.key!==void 0&&(Z=""+v.key),v)!q.call(v,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&v.ref===void 0||(w[$]=v[$]);var $=arguments.length-2;if($===1)w.children=R;else if(1<$){for(var le=Array($),De=0;De<$;De++)le[De]=arguments[De+2];w.children=le}return X(f.type,Z,w)},Me.createContext=function(f){return f={$$typeof:E,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:b,_context:f},f},Me.createElement=function(f,v,R){var w,Z={},$=null;if(v!=null)for(w in v.key!==void 0&&($=""+v.key),v)q.call(v,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(Z[w]=v[w]);var le=arguments.length-2;if(le===1)Z.children=R;else if(1<le){for(var De=Array(le),V=0;V<le;V++)De[V]=arguments[V+2];Z.children=De}if(f&&f.defaultProps)for(w in le=f.defaultProps,le)Z[w]===void 0&&(Z[w]=le[w]);return X(f,$,Z)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(f){return{$$typeof:Y,render:f}},Me.isValidElement=ye,Me.lazy=function(f){return{$$typeof:H,_payload:{_status:-1,_result:f},_init:K}},Me.memo=function(f,v){return{$$typeof:j,type:f,compare:v===void 0?null:v}},Me.startTransition=function(f){var v=ee.T,R={};ee.T=R;try{var w=f(),Z=ee.S;Z!==null&&Z(R,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(ie,xe)}catch($){xe($)}finally{v!==null&&R.types!==null&&(v.types=R.types),ee.T=v}},Me.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},Me.use=function(f){return ee.H.use(f)},Me.useActionState=function(f,v,R){return ee.H.useActionState(f,v,R)},Me.useCallback=function(f,v){return ee.H.useCallback(f,v)},Me.useContext=function(f){return ee.H.useContext(f)},Me.useDebugValue=function(){},Me.useDeferredValue=function(f,v){return ee.H.useDeferredValue(f,v)},Me.useEffect=function(f,v){return ee.H.useEffect(f,v)},Me.useEffectEvent=function(f){return ee.H.useEffectEvent(f)},Me.useId=function(){return ee.H.useId()},Me.useImperativeHandle=function(f,v,R){return ee.H.useImperativeHandle(f,v,R)},Me.useInsertionEffect=function(f,v){return ee.H.useInsertionEffect(f,v)},Me.useLayoutEffect=function(f,v){return ee.H.useLayoutEffect(f,v)},Me.useMemo=function(f,v){return ee.H.useMemo(f,v)},Me.useOptimistic=function(f,v){return ee.H.useOptimistic(f,v)},Me.useReducer=function(f,v,R){return ee.H.useReducer(f,v,R)},Me.useRef=function(f){return ee.H.useRef(f)},Me.useState=function(f){return ee.H.useState(f)},Me.useSyncExternalStore=function(f,v,R){return ee.H.useSyncExternalStore(f,v,R)},Me.useTransition=function(){return ee.H.useTransition()},Me.version="19.2.4",Me}var jp;function yc(){return jp||(jp=1,oc.exports=bv()),oc.exports}var g=yc();const jn=hv(g);var lc={exports:{}},jl={},sc={exports:{}},rc={};var Sp;function xv(){return Sp||(Sp=1,(function(i){function c(k,O){var K=k.length;k.push(O);e:for(;0<K;){var xe=K-1>>>1,ue=k[xe];if(0<y(ue,O))k[xe]=O,k[K]=ue,K=xe;else break e}}function p(k){return k.length===0?null:k[0]}function d(k){if(k.length===0)return null;var O=k[0],K=k.pop();if(K!==O){k[0]=K;e:for(var xe=0,ue=k.length,f=ue>>>1;xe<f;){var v=2*(xe+1)-1,R=k[v],w=v+1,Z=k[w];if(0>y(R,K))w<ue&&0>y(Z,R)?(k[xe]=Z,k[w]=K,xe=w):(k[xe]=R,k[v]=K,xe=v);else if(w<ue&&0>y(Z,K))k[xe]=Z,k[w]=K,xe=w;else break e}}return O}function y(k,O){var K=k.sortIndex-O.sortIndex;return K!==0?K:k.id-O.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;i.unstable_now=function(){return b.now()}}else{var E=Date,Y=E.now();i.unstable_now=function(){return E.now()-Y}}var A=[],j=[],H=1,M=null,G=3,I=!1,U=!1,te=!1,pe=!1,W=typeof setTimeout=="function"?setTimeout:null,ke=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function P(k){for(var O=p(j);O!==null;){if(O.callback===null)d(j);else if(O.startTime<=k)d(j),O.sortIndex=O.expirationTime,c(A,O);else break;O=p(j)}}function ne(k){if(te=!1,P(k),!U)if(p(A)!==null)U=!0,ie||(ie=!0,ce());else{var O=p(j);O!==null&&ae(ne,O.startTime-k)}}var ie=!1,ee=-1,q=5,X=-1;function he(){return pe?!0:!(i.unstable_now()-X<q)}function ye(){if(pe=!1,ie){var k=i.unstable_now();X=k;var O=!0;try{e:{U=!1,te&&(te=!1,ke(ee),ee=-1),I=!0;var K=G;try{t:{for(P(k),M=p(A);M!==null&&!(M.expirationTime>k&&he());){var xe=M.callback;if(typeof xe=="function"){M.callback=null,G=M.priorityLevel;var ue=xe(M.expirationTime<=k);if(k=i.unstable_now(),typeof ue=="function"){M.callback=ue,P(k),O=!0;break t}M===p(A)&&d(A),P(k)}else d(A);M=p(A)}if(M!==null)O=!0;else{var f=p(j);f!==null&&ae(ne,f.startTime-k),O=!1}}break e}finally{M=null,G=K,I=!1}O=void 0}}finally{O?ce():ie=!1}}}var ce;if(typeof de=="function")ce=function(){de(ye)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Se=ve.port2;ve.port1.onmessage=ye,ce=function(){Se.postMessage(null)}}else ce=function(){W(ye,0)};function ae(k,O){ee=W(function(){k(i.unstable_now())},O)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(k){k.callback=null},i.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<k?Math.floor(1e3/k):5},i.unstable_getCurrentPriorityLevel=function(){return G},i.unstable_next=function(k){switch(G){case 1:case 2:case 3:var O=3;break;default:O=G}var K=G;G=O;try{return k()}finally{G=K}},i.unstable_requestPaint=function(){pe=!0},i.unstable_runWithPriority=function(k,O){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var K=G;G=k;try{return O()}finally{G=K}},i.unstable_scheduleCallback=function(k,O,K){var xe=i.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xe+K:xe):K=xe,k){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=K+ue,k={id:H++,callback:O,priorityLevel:k,startTime:K,expirationTime:ue,sortIndex:-1},K>xe?(k.sortIndex=K,c(j,k),p(A)===null&&k===p(j)&&(te?(ke(ee),ee=-1):te=!0,ae(ne,K-xe))):(k.sortIndex=ue,c(A,k),U||I||(U=!0,ie||(ie=!0,ce()))),k},i.unstable_shouldYield=he,i.unstable_wrapCallback=function(k){var O=G;return function(){var K=G;G=O;try{return k.apply(this,arguments)}finally{G=K}}}})(rc)),rc}var Tp;function yv(){return Tp||(Tp=1,sc.exports=xv()),sc.exports}var ic={exports:{}},Gt={};var Dp;function kv(){if(Dp)return Gt;Dp=1;var i=yc();function c(A){var j="https://react.dev/errors/"+A;if(1<arguments.length){j+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)j+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+A+"; visit "+j+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var d={d:{f:p,r:function(){throw Error(c(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},y=Symbol.for("react.portal");function b(A,j,H){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:M==null?null:""+M,children:A,containerInfo:j,implementation:H}}var E=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Y(A,j){if(A==="font")return"";if(typeof j=="string")return j==="use-credentials"?j:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Gt.createPortal=function(A,j){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j||j.nodeType!==1&&j.nodeType!==9&&j.nodeType!==11)throw Error(c(299));return b(A,j,null,H)},Gt.flushSync=function(A){var j=E.T,H=d.p;try{if(E.T=null,d.p=2,A)return A()}finally{E.T=j,d.p=H,d.d.f()}},Gt.preconnect=function(A,j){typeof A=="string"&&(j?(j=j.crossOrigin,j=typeof j=="string"?j==="use-credentials"?j:"":void 0):j=null,d.d.C(A,j))},Gt.prefetchDNS=function(A){typeof A=="string"&&d.d.D(A)},Gt.preinit=function(A,j){if(typeof A=="string"&&j&&typeof j.as=="string"){var H=j.as,M=Y(H,j.crossOrigin),G=typeof j.integrity=="string"?j.integrity:void 0,I=typeof j.fetchPriority=="string"?j.fetchPriority:void 0;H==="style"?d.d.S(A,typeof j.precedence=="string"?j.precedence:void 0,{crossOrigin:M,integrity:G,fetchPriority:I}):H==="script"&&d.d.X(A,{crossOrigin:M,integrity:G,fetchPriority:I,nonce:typeof j.nonce=="string"?j.nonce:void 0})}},Gt.preinitModule=function(A,j){if(typeof A=="string")if(typeof j=="object"&&j!==null){if(j.as==null||j.as==="script"){var H=Y(j.as,j.crossOrigin);d.d.M(A,{crossOrigin:H,integrity:typeof j.integrity=="string"?j.integrity:void 0,nonce:typeof j.nonce=="string"?j.nonce:void 0})}}else j==null&&d.d.M(A)},Gt.preload=function(A,j){if(typeof A=="string"&&typeof j=="object"&&j!==null&&typeof j.as=="string"){var H=j.as,M=Y(H,j.crossOrigin);d.d.L(A,H,{crossOrigin:M,integrity:typeof j.integrity=="string"?j.integrity:void 0,nonce:typeof j.nonce=="string"?j.nonce:void 0,type:typeof j.type=="string"?j.type:void 0,fetchPriority:typeof j.fetchPriority=="string"?j.fetchPriority:void 0,referrerPolicy:typeof j.referrerPolicy=="string"?j.referrerPolicy:void 0,imageSrcSet:typeof j.imageSrcSet=="string"?j.imageSrcSet:void 0,imageSizes:typeof j.imageSizes=="string"?j.imageSizes:void 0,media:typeof j.media=="string"?j.media:void 0})}},Gt.preloadModule=function(A,j){if(typeof A=="string")if(j){var H=Y(j.as,j.crossOrigin);d.d.m(A,{as:typeof j.as=="string"&&j.as!=="script"?j.as:void 0,crossOrigin:H,integrity:typeof j.integrity=="string"?j.integrity:void 0})}else d.d.m(A)},Gt.requestFormReset=function(A){d.d.r(A)},Gt.unstable_batchedUpdates=function(A,j){return A(j)},Gt.useFormState=function(A,j,H){return E.H.useFormState(A,j,H)},Gt.useFormStatus=function(){return E.H.useHostTransitionStatus()},Gt.version="19.2.4",Gt}var Cp;function Gp(){if(Cp)return ic.exports;Cp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),ic.exports=kv(),ic.exports}var Ap;function wv(){if(Ap)return jl;Ap=1;var i=yv(),c=yc(),p=Gp();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(b(e)!==e)throw Error(d(188))}function j(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return A(l),e;if(s===a)return A(l),t;s=s.sibling}throw Error(d(188))}if(n.return!==a.return)n=l,a=s;else{for(var r=!1,u=l.child;u;){if(u===n){r=!0,n=l,a=s;break}if(u===a){r=!0,a=l,n=s;break}u=u.sibling}if(!r){for(u=s.child;u;){if(u===n){r=!0,n=s,a=l;break}if(u===a){r=!0,a=s,n=l;break}u=u.sibling}if(!r)throw Error(d(189))}}if(n.alternate!==a)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function H(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=H(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,G=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),ke=Symbol.for("react.consumer"),de=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function Se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case W:return"Profiler";case pe:return"StrictMode";case ne:return"Suspense";case ie:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case de:return e.displayName||"Context";case ke:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Se(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}var ae=Array.isArray,k=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},xe=[],ue=-1;function f(e){return{current:e}}function v(e){0>ue||(e.current=xe[ue],xe[ue]=null,ue--)}function R(e,t){ue++,xe[ue]=e.current,e.current=t}var w=f(null),Z=f(null),$=f(null),le=f(null);function De(e,t){switch(R($,t),R(Z,e),R(w,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vf(t),e=Xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}v(w),R(w,e)}function V(){v(w),v(Z),v($)}function se(e){e.memoizedState!==null&&R(le,e);var t=w.current,n=Xf(t,e.type);t!==n&&(R(Z,e),R(w,n))}function Ce(e){Z.current===e&&(v(w),v(Z)),le.current===e&&(v(le),bl._currentValue=K)}var Ne,He;function Qe(e){if(Ne===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ne=t&&t[1]||"",He=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+e+He}var Fe=!1;function Q(e,t){if(!e||Fe)return"";Fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(B){var C=B}Reflect.construct(e,[],_)}else{try{_.call()}catch(B){C=B}e.call(_.prototype)}}else{try{throw Error()}catch(B){C=B}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(B){if(B&&C&&typeof B.stack=="string")return[B.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),r=s[0],u=s[1];if(r&&u){var m=r.split(`
`),D=u.split(`
`);for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===D.length)for(a=m.length-1,l=D.length-1;1<=a&&0<=l&&m[a]!==D[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==D[l]){if(a!==1||l!==1)do if(a--,l--,0>l||m[a]!==D[l]){var z=`
`+m[a].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=a&&0<=l);break}}}finally{Fe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qe(n):""}function F(e,t){switch(e.tag){case 26:case 27:case 5:return Qe(e.type);case 16:return Qe("Lazy");case 13:return e.child!==t&&t!==null?Qe("Suspense Fallback"):Qe("Suspense");case 19:return Qe("SuspenseList");case 0:case 15:return Q(e.type,!1);case 11:return Q(e.type.render,!1);case 1:return Q(e.type,!0);case 31:return Qe("Activity");default:return""}}function Be(e){try{var t="",n=null;do t+=F(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var J=Object.prototype.hasOwnProperty,fe=i.unstable_scheduleCallback,ze=i.unstable_cancelCallback,Ie=i.unstable_shouldYield,ge=i.unstable_requestPaint,Ee=i.unstable_now,_e=i.unstable_getCurrentPriorityLevel,et=i.unstable_ImmediatePriority,ot=i.unstable_UserBlockingPriority,it=i.unstable_NormalPriority,Ae=i.unstable_LowPriority,Le=i.unstable_IdlePriority,Ct=i.log,vn=i.unstable_setDisableYieldValue,gn=null,At=null;function Lt(e){if(typeof Ct=="function"&&vn(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(gn,e)}catch{}}var Bt=Math.clz32?Math.clz32:gt,qa=Math.log,re=Math.LN2;function gt(e){return e>>>=0,e===0?32:31-(qa(e)/re|0)|0}var bt=256,Ft=262144,bn=4194304;function Tn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Va(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~s,a!==0?l=Tn(a):(r&=u,r!==0?l=Tn(r):n||(n=u&~e,n!==0&&(l=Tn(n))))):(u=a&~s,u!==0?l=Tn(u):r!==0?l=Tn(r):n||(n=a&~e,n!==0&&(l=Tn(n)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:l}function ka(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xs(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wa(){var e=bn;return bn<<=1,(bn&62914560)===0&&(bn=4194304),e}function Ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Eo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function am(e,t,n,a,l,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,m=e.expirationTimes,D=e.hiddenUpdates;for(n=r&~n;0<n;){var z=31-Bt(n),_=1<<z;u[z]=0,m[z]=-1;var C=D[z];if(C!==null)for(D[z]=null,z=0;z<C.length;z++){var B=C[z];B!==null&&(B.lane&=-536870913)}n&=~_}a!==0&&Sc(e,a,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function Sc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Bt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Bt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Dc(e,t){var n=t&-t;return n=(n&42)!==0?1:Qs(n),(n&(e.suspendedLanes|t))!==0?0:n}function Qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cc(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:pp(e.type))}function Ac(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var In=Math.random().toString(36).slice(2),Mt="__reactFiber$"+In,qt="__reactProps$"+In,Xa="__reactContainer$"+In,Js="__reactEvents$"+In,om="__reactListeners$"+In,lm="__reactHandles$"+In,Bc="__reactResources$"+In,Mo="__reactMarker$"+In;function Fs(e){delete e[Mt],delete e[qt],delete e[Js],delete e[om],delete e[lm]}function Ka(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xa]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$f(e);e!==null;){if(n=e[Mt])return n;e=$f(e)}return t}e=n,n=e.parentNode}return null}function Qa(e){if(e=e[Mt]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Oo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Za(e){var t=e[Bc];return t||(t=e[Bc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Nt(e){e[Mo]=!0}var zc=new Set,Nc={};function ja(e,t){Ja(e,t),Ja(e+"Capture",t)}function Ja(e,t){for(Nc[e]=t,e=0;e<t.length;e++)zc.add(t[e])}var sm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ec={},Mc={};function rm(e){return J.call(Mc,e)?!0:J.call(Ec,e)?!1:sm.test(e)?Mc[e]=!0:(Ec[e]=!0,!1)}function Dl(e,t,n){if(rm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Cl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Nn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function on(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function im(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Is(e){if(!e._valueTracker){var t=Oc(e)?"checked":"value";e._valueTracker=im(e,t,""+e[t])}}function Rc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Oc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cm=/[\n"\\]/g;function ln(e){return e.replace(cm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $s(e,t,n,a,l,s,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+on(t)):e.value!==""+on(t)&&(e.value=""+on(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ws(e,r,on(t)):n!=null?Ws(e,r,on(n)):a!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+on(u):e.removeAttribute("name")}function _c(e,t,n,a,l,s,r,u){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Is(e);return}n=n!=null?""+on(n):"",t=t!=null?""+on(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Is(e)}function Ws(e,t,n){t==="number"&&Al(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Fa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Uc(e,t,n){if(t!=null&&(t=""+on(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+on(n):""}function Hc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(d(92));if(ae(a)){if(1<a.length)throw Error(d(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=on(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Is(e)}function Ia(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var um=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||um.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Gc(e,t,n){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Lc(e,l,a)}else for(var s in t)t.hasOwnProperty(s)&&Lc(e,s,t[s])}function Ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bl(e){return fm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function En(){}var er=null;function tr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Wa=null;function Yc(e){var t=Qa(e);if(t&&(e=t.stateNode)){var n=e[qt]||null;e:switch(e=t.stateNode,t.type){case"input":if($s(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ln(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[qt]||null;if(!l)throw Error(d(90));$s(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Rc(a)}break e;case"textarea":Uc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Fa(e,!!n.multiple,t,!1)}}}var nr=!1;function qc(e,t,n){if(nr)return e(t,n);nr=!0;try{var a=e(t);return a}finally{if(nr=!1,($a!==null||Wa!==null)&&(vs(),$a&&(t=$a,e=Wa,Wa=$a=null,Yc(t),e)))for(t=0;t<e.length;t++)Yc(e[t])}}function Ro(e,t){var n=e.stateNode;if(n===null)return null;var a=n[qt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ar=!1;if(Mn)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){ar=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{ar=!1}var $n=null,or=null,zl=null;function Vc(){if(zl)return zl;var e,t=or,n=t.length,a,l="value"in $n?$n.value:$n.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===l[s-a];a++);return zl=l.slice(e,1<a?1-a:void 0)}function Nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function El(){return!0}function Xc(){return!1}function Vt(e){function t(n,a,l,s,r){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:Xc,this.isPropagationStopped=Xc,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),t}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Vt(Sa),Uo=M({},Sa,{view:0,detail:0}),pm=Vt(Uo),lr,sr,Ho,Ol=M({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ho&&(Ho&&e.type==="mousemove"?(lr=e.screenX-Ho.screenX,sr=e.screenY-Ho.screenY):sr=lr=0,Ho=e),lr)},movementY:function(e){return"movementY"in e?e.movementY:sr}}),Kc=Vt(Ol),mm=M({},Ol,{dataTransfer:0}),hm=Vt(mm),vm=M({},Uo,{relatedTarget:0}),rr=Vt(vm),gm=M({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),bm=Vt(gm),xm=M({},Sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ym=Vt(xm),km=M({},Sa,{data:0}),Qc=Vt(km),wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sm[e])?!!t[e]:!1}function ir(){return Tm}var Dm=M({},Uo,{key:function(e){if(e.key){var t=wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cm=Vt(Dm),Am=M({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=Vt(Am),Bm=M({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),zm=Vt(Bm),Nm=M({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=Vt(Nm),Mm=M({},Ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Vt(Mm),Rm=M({},Sa,{newState:0,oldState:0}),_m=Vt(Rm),Um=[9,13,27,32],cr=Mn&&"CompositionEvent"in window,Lo=null;Mn&&"documentMode"in document&&(Lo=document.documentMode);var Hm=Mn&&"TextEvent"in window&&!Lo,Jc=Mn&&(!cr||Lo&&8<Lo&&11>=Lo),Fc=" ",Ic=!1;function $c(e,t){switch(e){case"keyup":return Um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function Lm(e,t){switch(e){case"compositionend":return Wc(t);case"keypress":return t.which!==32?null:(Ic=!0,Fc);case"textInput":return e=t.data,e===Fc&&Ic?null:e;default:return null}}function Gm(e,t){if(Pa)return e==="compositionend"||!cr&&$c(e,t)?(e=Vc(),zl=or=$n=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jc&&t.locale!=="ko"?null:t.data;default:return null}}var Ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ym[e.type]:t==="textarea"}function eu(e,t,n,a){$a?Wa?Wa.push(a):Wa=[a]:$a=a,t=js(t,"onChange"),0<t.length&&(n=new Ml("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Go=null,Yo=null;function qm(e){Uf(e,0)}function Rl(e){var t=Oo(e);if(Rc(t))return e}function tu(e,t){if(e==="change")return t}var nu=!1;if(Mn){var ur;if(Mn){var dr="oninput"in document;if(!dr){var au=document.createElement("div");au.setAttribute("oninput","return;"),dr=typeof au.oninput=="function"}ur=dr}else ur=!1;nu=ur&&(!document.documentMode||9<document.documentMode)}function ou(){Go&&(Go.detachEvent("onpropertychange",lu),Yo=Go=null)}function lu(e){if(e.propertyName==="value"&&Rl(Yo)){var t=[];eu(t,Yo,e,tr(e)),qc(qm,t)}}function Vm(e,t,n){e==="focusin"?(ou(),Go=t,Yo=n,Go.attachEvent("onpropertychange",lu)):e==="focusout"&&ou()}function Xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(Yo)}function Km(e,t){if(e==="click")return Rl(t)}function Qm(e,t){if(e==="input"||e==="change")return Rl(t)}function Zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Zm;function qo(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!J.call(t,l)||!It(e[l],t[l]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ru(e,t){var n=su(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=su(n)}}function iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Al(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Al(e.document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jm=Mn&&"documentMode"in document&&11>=document.documentMode,eo=null,pr=null,Vo=null,mr=!1;function uu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mr||eo==null||eo!==Al(a)||(a=eo,"selectionStart"in a&&fr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vo&&qo(Vo,a)||(Vo=a,a=js(pr,"onSelect"),0<a.length&&(t=new Ml("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=eo)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var to={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},hr={},du={};Mn&&(du=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Da(e){if(hr[e])return hr[e];if(!to[e])return e;var t=to[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in du)return hr[e]=t[n];return e}var fu=Da("animationend"),pu=Da("animationiteration"),mu=Da("animationstart"),Fm=Da("transitionrun"),Im=Da("transitionstart"),$m=Da("transitioncancel"),hu=Da("transitionend"),vu=new Map,vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vr.push("scrollEnd");function xn(e,t){vu.set(e,t),ja(t,[e])}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sn=[],no=0,gr=0;function Ul(){for(var e=no,t=gr=no=0;t<e;){var n=sn[t];sn[t++]=null;var a=sn[t];sn[t++]=null;var l=sn[t];sn[t++]=null;var s=sn[t];if(sn[t++]=null,a!==null&&l!==null){var r=a.pending;r===null?l.next=l:(l.next=r.next,r.next=l),a.pending=l}s!==0&&gu(n,l,s)}}function Hl(e,t,n,a){sn[no++]=e,sn[no++]=t,sn[no++]=n,sn[no++]=a,gr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function br(e,t,n,a){return Hl(e,t,n,a),Ll(e)}function Ca(e,t){return Hl(e,null,null,t),Ll(e)}function gu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-Bt(n),e=s.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),s):null}function Ll(e){if(50<dl)throw dl=0,Ci=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ao={};function Wm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,a){return new Wm(e,t,n,a)}function xr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function On(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gl(e,t,n,a,l,s){var r=0;if(a=e,typeof e=="function")xr(e)&&(r=1);else if(typeof e=="string")r=av(e,n,w.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case X:return e=$t(31,n,t,l),e.elementType=X,e.lanes=s,e;case te:return Aa(n.children,l,s,t);case pe:r=8,l|=24;break;case W:return e=$t(12,n,t,l|2),e.elementType=W,e.lanes=s,e;case ne:return e=$t(13,n,t,l),e.elementType=ne,e.lanes=s,e;case ie:return e=$t(19,n,t,l),e.elementType=ie,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:r=10;break e;case ke:r=9;break e;case P:r=11;break e;case ee:r=14;break e;case q:r=16,a=null;break e}r=29,n=Error(d(130,e===null?"null":typeof e,"")),a=null}return t=$t(r,n,t,l),t.elementType=e,t.type=a,t.lanes=s,t}function Aa(e,t,n,a){return e=$t(7,e,a,t),e.lanes=n,e}function yr(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function xu(e){var t=$t(18,null,null,0);return t.stateNode=e,t}function kr(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yu=new WeakMap;function rn(e,t){if(typeof e=="object"&&e!==null){var n=yu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Be(t)},yu.set(e,t),t)}return{value:e,source:t,stack:Be(t)}}var oo=[],lo=0,Yl=null,Xo=0,cn=[],un=0,Wn=null,Dn=1,Cn="";function Rn(e,t){oo[lo++]=Xo,oo[lo++]=Yl,Yl=e,Xo=t}function ku(e,t,n){cn[un++]=Dn,cn[un++]=Cn,cn[un++]=Wn,Wn=e;var a=Dn;e=Cn;var l=32-Bt(a)-1;a&=~(1<<l),n+=1;var s=32-Bt(t)+l;if(30<s){var r=l-l%5;s=(a&(1<<r)-1).toString(32),a>>=r,l-=r,Dn=1<<32-Bt(t)+l|n<<l|a,Cn=s+e}else Dn=1<<s|n<<l|a,Cn=e}function wr(e){e.return!==null&&(Rn(e,1),ku(e,1,0))}function jr(e){for(;e===Yl;)Yl=oo[--lo],oo[lo]=null,Xo=oo[--lo],oo[lo]=null;for(;e===Wn;)Wn=cn[--un],cn[un]=null,Cn=cn[--un],cn[un]=null,Dn=cn[--un],cn[un]=null}function wu(e,t){cn[un++]=Dn,cn[un++]=Cn,cn[un++]=Wn,Dn=t.id,Cn=t.overflow,Wn=e}var Ot=null,pt=null,Ke=!1,Pn=null,dn=!1,Sr=Error(d(519));function ea(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ko(rn(t,e)),Sr}function ju(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Mt]=e,t[qt]=a,n){case"dialog":Ye("cancel",t),Ye("close",t);break;case"iframe":case"object":case"embed":Ye("load",t);break;case"video":case"audio":for(n=0;n<pl.length;n++)Ye(pl[n],t);break;case"source":Ye("error",t);break;case"img":case"image":case"link":Ye("error",t),Ye("load",t);break;case"details":Ye("toggle",t);break;case"input":Ye("invalid",t),_c(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ye("invalid",t);break;case"textarea":Ye("invalid",t),Hc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Yf(t.textContent,n)?(a.popover!=null&&(Ye("beforetoggle",t),Ye("toggle",t)),a.onScroll!=null&&Ye("scroll",t),a.onScrollEnd!=null&&Ye("scrollend",t),a.onClick!=null&&(t.onclick=En),t=!0):t=!1,t||ea(e,!0)}function Su(e){for(Ot=e.return;Ot;)switch(Ot.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:Ot=Ot.return}}function so(e){if(e!==Ot)return!1;if(!Ke)return Su(e),Ke=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||qi(e.type,e.memoizedProps)),n=!n),n&&pt&&ea(e),Su(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));pt=If(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));pt=If(e)}else t===27?(t=pt,ma(e.type)?(e=Zi,Zi=null,pt=e):pt=t):pt=Ot?pn(e.stateNode.nextSibling):null;return!0}function Ba(){pt=Ot=null,Ke=!1}function Tr(){var e=Pn;return e!==null&&(Zt===null?Zt=e:Zt.push.apply(Zt,e),Pn=null),e}function Ko(e){Pn===null?Pn=[e]:Pn.push(e)}var Dr=f(null),za=null,_n=null;function ta(e,t,n){R(Dr,t._currentValue),t._currentValue=n}function Un(e){e._currentValue=Dr.current,v(Dr)}function Cr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var r=l.child;s=s.firstContext;e:for(;s!==null;){var u=s;s=l;for(var m=0;m<t.length;m++)if(u.context===t[m]){s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Cr(s.return,n,e),a||(r=null);break e}s=u.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(d(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Cr(r,n,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function ro(e,t,n,a){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var u=l.type;It(l.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(l===le.current){if(r=l.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}l=l.return}e!==null&&Ar(t,e,n,a),t.flags|=262144}function ql(e){for(e=e.firstContext;e!==null;){if(!It(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){za=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rt(e){return Tu(za,e)}function Vl(e,t){return za===null&&Na(e),Tu(e,t)}function Tu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_n===null){if(e===null)throw Error(d(308));_n=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _n=_n.next=t;return n}var Pm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},eh=i.unstable_scheduleCallback,th=i.unstable_NormalPriority,jt={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Br(){return{controller:new Pm,data:new Map,refCount:0}}function Qo(e){e.refCount--,e.refCount===0&&eh(th,function(){e.controller.abort()})}var Zo=null,zr=0,io=0,co=null;function nh(e,t){if(Zo===null){var n=Zo=[];zr=0,io=Mi(),co={status:"pending",value:void 0,then:function(a){n.push(a)}}}return zr++,t.then(Du,Du),t}function Du(){if(--zr===0&&Zo!==null){co!==null&&(co.status="fulfilled");var e=Zo;Zo=null,io=0,co=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ah(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Cu=k.S;k.S=function(e,t){df=Ee(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&nh(e,t),Cu!==null&&Cu(e,t)};var Ea=f(null);function Nr(){var e=Ea.current;return e!==null?e:ct.pooledCache}function Xl(e,t){t===null?R(Ea,Ea.current):R(Ea,t.pool)}function Au(){var e=Nr();return e===null?null:{parent:jt._currentValue,pool:e}}var uo=Error(d(460)),Er=Error(d(474)),Kl=Error(d(542)),Ql={then:function(){}};function Bu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(En,En),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Eu(e),e;default:if(typeof t.status=="string")t.then(En,En);else{if(e=ct,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Eu(e),e}throw Oa=t,uo}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Oa=n,uo):n}}var Oa=null;function Nu(){if(Oa===null)throw Error(d(459));var e=Oa;return Oa=null,e}function Eu(e){if(e===uo||e===Kl)throw Error(d(483))}var fo=null,Jo=0;function Zl(e){var t=Jo;return Jo+=1,fo===null&&(fo=[]),zu(fo,e,t)}function Fo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Jl(e,t){throw t.$$typeof===G?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mu(e){function t(x,h){if(e){var S=x.deletions;S===null?(x.deletions=[h],x.flags|=16):S.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function a(x){for(var h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function l(x,h){return x=On(x,h),x.index=0,x.sibling=null,x}function s(x,h,S){return x.index=S,e?(S=x.alternate,S!==null?(S=S.index,S<h?(x.flags|=67108866,h):S):(x.flags|=67108866,h)):(x.flags|=1048576,h)}function r(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function u(x,h,S,N){return h===null||h.tag!==6?(h=yr(S,x.mode,N),h.return=x,h):(h=l(h,S),h.return=x,h)}function m(x,h,S,N){var we=S.type;return we===te?z(x,h,S.props.children,N,S.key):h!==null&&(h.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===q&&Ma(we)===h.type)?(h=l(h,S.props),Fo(h,S),h.return=x,h):(h=Gl(S.type,S.key,S.props,null,x.mode,N),Fo(h,S),h.return=x,h)}function D(x,h,S,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==S.containerInfo||h.stateNode.implementation!==S.implementation?(h=kr(S,x.mode,N),h.return=x,h):(h=l(h,S.children||[]),h.return=x,h)}function z(x,h,S,N,we){return h===null||h.tag!==7?(h=Aa(S,x.mode,N,we),h.return=x,h):(h=l(h,S),h.return=x,h)}function _(x,h,S){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=yr(""+h,x.mode,S),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case I:return S=Gl(h.type,h.key,h.props,null,x.mode,S),Fo(S,h),S.return=x,S;case U:return h=kr(h,x.mode,S),h.return=x,h;case q:return h=Ma(h),_(x,h,S)}if(ae(h)||ce(h))return h=Aa(h,x.mode,S,null),h.return=x,h;if(typeof h.then=="function")return _(x,Zl(h),S);if(h.$$typeof===de)return _(x,Vl(x,h),S);Jl(x,h)}return null}function C(x,h,S,N){var we=h!==null?h.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return we!==null?null:u(x,h,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case I:return S.key===we?m(x,h,S,N):null;case U:return S.key===we?D(x,h,S,N):null;case q:return S=Ma(S),C(x,h,S,N)}if(ae(S)||ce(S))return we!==null?null:z(x,h,S,N,null);if(typeof S.then=="function")return C(x,h,Zl(S),N);if(S.$$typeof===de)return C(x,h,Vl(x,S),N);Jl(x,S)}return null}function B(x,h,S,N,we){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return x=x.get(S)||null,u(h,x,""+N,we);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case I:return x=x.get(N.key===null?S:N.key)||null,m(h,x,N,we);case U:return x=x.get(N.key===null?S:N.key)||null,D(h,x,N,we);case q:return N=Ma(N),B(x,h,S,N,we)}if(ae(N)||ce(N))return x=x.get(S)||null,z(h,x,N,we,null);if(typeof N.then=="function")return B(x,h,S,Zl(N),we);if(N.$$typeof===de)return B(x,h,S,Vl(h,N),we);Jl(h,N)}return null}function me(x,h,S,N){for(var we=null,Ze=null,be=h,Ue=h=0,Xe=null;be!==null&&Ue<S.length;Ue++){be.index>Ue?(Xe=be,be=null):Xe=be.sibling;var Je=C(x,be,S[Ue],N);if(Je===null){be===null&&(be=Xe);break}e&&be&&Je.alternate===null&&t(x,be),h=s(Je,h,Ue),Ze===null?we=Je:Ze.sibling=Je,Ze=Je,be=Xe}if(Ue===S.length)return n(x,be),Ke&&Rn(x,Ue),we;if(be===null){for(;Ue<S.length;Ue++)be=_(x,S[Ue],N),be!==null&&(h=s(be,h,Ue),Ze===null?we=be:Ze.sibling=be,Ze=be);return Ke&&Rn(x,Ue),we}for(be=a(be);Ue<S.length;Ue++)Xe=B(be,x,Ue,S[Ue],N),Xe!==null&&(e&&Xe.alternate!==null&&be.delete(Xe.key===null?Ue:Xe.key),h=s(Xe,h,Ue),Ze===null?we=Xe:Ze.sibling=Xe,Ze=Xe);return e&&be.forEach(function(xa){return t(x,xa)}),Ke&&Rn(x,Ue),we}function Te(x,h,S,N){if(S==null)throw Error(d(151));for(var we=null,Ze=null,be=h,Ue=h=0,Xe=null,Je=S.next();be!==null&&!Je.done;Ue++,Je=S.next()){be.index>Ue?(Xe=be,be=null):Xe=be.sibling;var xa=C(x,be,Je.value,N);if(xa===null){be===null&&(be=Xe);break}e&&be&&xa.alternate===null&&t(x,be),h=s(xa,h,Ue),Ze===null?we=xa:Ze.sibling=xa,Ze=xa,be=Xe}if(Je.done)return n(x,be),Ke&&Rn(x,Ue),we;if(be===null){for(;!Je.done;Ue++,Je=S.next())Je=_(x,Je.value,N),Je!==null&&(h=s(Je,h,Ue),Ze===null?we=Je:Ze.sibling=Je,Ze=Je);return Ke&&Rn(x,Ue),we}for(be=a(be);!Je.done;Ue++,Je=S.next())Je=B(be,x,Ue,Je.value,N),Je!==null&&(e&&Je.alternate!==null&&be.delete(Je.key===null?Ue:Je.key),h=s(Je,h,Ue),Ze===null?we=Je:Ze.sibling=Je,Ze=Je);return e&&be.forEach(function(mv){return t(x,mv)}),Ke&&Rn(x,Ue),we}function rt(x,h,S,N){if(typeof S=="object"&&S!==null&&S.type===te&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case I:e:{for(var we=S.key;h!==null;){if(h.key===we){if(we=S.type,we===te){if(h.tag===7){n(x,h.sibling),N=l(h,S.props.children),N.return=x,x=N;break e}}else if(h.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===q&&Ma(we)===h.type){n(x,h.sibling),N=l(h,S.props),Fo(N,S),N.return=x,x=N;break e}n(x,h);break}else t(x,h);h=h.sibling}S.type===te?(N=Aa(S.props.children,x.mode,N,S.key),N.return=x,x=N):(N=Gl(S.type,S.key,S.props,null,x.mode,N),Fo(N,S),N.return=x,x=N)}return r(x);case U:e:{for(we=S.key;h!==null;){if(h.key===we)if(h.tag===4&&h.stateNode.containerInfo===S.containerInfo&&h.stateNode.implementation===S.implementation){n(x,h.sibling),N=l(h,S.children||[]),N.return=x,x=N;break e}else{n(x,h);break}else t(x,h);h=h.sibling}N=kr(S,x.mode,N),N.return=x,x=N}return r(x);case q:return S=Ma(S),rt(x,h,S,N)}if(ae(S))return me(x,h,S,N);if(ce(S)){if(we=ce(S),typeof we!="function")throw Error(d(150));return S=we.call(S),Te(x,h,S,N)}if(typeof S.then=="function")return rt(x,h,Zl(S),N);if(S.$$typeof===de)return rt(x,h,Vl(x,S),N);Jl(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,h!==null&&h.tag===6?(n(x,h.sibling),N=l(h,S),N.return=x,x=N):(n(x,h),N=yr(S,x.mode,N),N.return=x,x=N),r(x)):n(x,h)}return function(x,h,S,N){try{Jo=0;var we=rt(x,h,S,N);return fo=null,we}catch(be){if(be===uo||be===Kl)throw be;var Ze=$t(29,be,null,x.mode);return Ze.lanes=N,Ze.return=x,Ze}}}var Ra=Mu(!0),Ou=Mu(!1),na=!1;function Mr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Or(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,($e&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Ll(e),gu(e,null,n),t}return Hl(e,a,t,n),Ll(e)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Tc(e,n)}}function Rr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var _r=!1;function $o(){if(_r){var e=co;if(e!==null)throw e}}function Wo(e,t,n,a){_r=!1;var l=e.updateQueue;na=!1;var s=l.firstBaseUpdate,r=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var m=u,D=m.next;m.next=null,r===null?s=D:r.next=D,r=m;var z=e.alternate;z!==null&&(z=z.updateQueue,u=z.lastBaseUpdate,u!==r&&(u===null?z.firstBaseUpdate=D:u.next=D,z.lastBaseUpdate=m))}if(s!==null){var _=l.baseState;r=0,z=D=m=null,u=s;do{var C=u.lane&-536870913,B=C!==u.lane;if(B?(Ve&C)===C:(a&C)===C){C!==0&&C===io&&(_r=!0),z!==null&&(z=z.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var me=e,Te=u;C=t;var rt=n;switch(Te.tag){case 1:if(me=Te.payload,typeof me=="function"){_=me.call(rt,_,C);break e}_=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=Te.payload,C=typeof me=="function"?me.call(rt,_,C):me,C==null)break e;_=M({},_,C);break e;case 2:na=!0}}C=u.callback,C!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[C]:B.push(C))}else B={lane:C,tag:u.tag,payload:u.payload,callback:u.callback,next:null},z===null?(D=z=B,m=_):z=z.next=B,r|=C;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;B=u,u=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);z===null&&(m=_),l.baseState=m,l.firstBaseUpdate=D,l.lastBaseUpdate=z,s===null&&(l.shared.lanes=0),ca|=r,e.lanes=r,e.memoizedState=_}}function Ru(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function _u(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ru(n[e],t)}var po=f(null),Fl=f(0);function Uu(e,t){e=Qn,R(Fl,e),R(po,t),Qn=e|t.baseLanes}function Ur(){R(Fl,Qn),R(po,po.current)}function Hr(){Qn=Fl.current,v(po),v(Fl)}var Wt=f(null),fn=null;function la(e){var t=e.alternate;R(kt,kt.current&1),R(Wt,e),fn===null&&(t===null||po.current!==null||t.memoizedState!==null)&&(fn=e)}function Lr(e){R(kt,kt.current),R(Wt,e),fn===null&&(fn=e)}function Hu(e){e.tag===22?(R(kt,kt.current),R(Wt,e),fn===null&&(fn=e)):sa()}function sa(){R(kt,kt.current),R(Wt,Wt.current)}function Pt(e){v(Wt),fn===e&&(fn=null),v(kt)}var kt=f(0);function Il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ki(n)||Qi(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hn=0,Re=null,lt=null,St=null,$l=!1,mo=!1,_a=!1,Wl=0,Po=0,ho=null,oh=0;function xt(){throw Error(d(321))}function Gr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function Yr(e,t,n,a,l,s){return Hn=s,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?kd:ni,_a=!1,s=n(a,l),_a=!1,mo&&(s=Gu(t,n,a,l)),Lu(e),s}function Lu(e){k.H=nl;var t=lt!==null&&lt.next!==null;if(Hn=0,St=lt=Re=null,$l=!1,Po=0,ho=null,t)throw Error(d(300));e===null||Tt||(e=e.dependencies,e!==null&&ql(e)&&(Tt=!0))}function Gu(e,t,n,a){Re=e;var l=0;do{if(mo&&(ho=null),Po=0,mo=!1,25<=l)throw Error(d(301));if(l+=1,St=lt=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}k.H=wd,s=t(n,a)}while(mo);return s}function lh(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?el(t):t,e=e.useState()[0],(lt!==null?lt.memoizedState:null)!==e&&(Re.flags|=1024),t}function qr(){var e=Wl!==0;return Wl=0,e}function Vr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xr(e){if($l){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$l=!1}Hn=0,St=lt=Re=null,mo=!1,Po=Wl=0,ho=null}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Re.memoizedState=St=e:St=St.next=e,St}function wt(){if(lt===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var t=St===null?Re.memoizedState:St.next;if(t!==null)St=t,lt=e;else{if(e===null)throw Re.alternate===null?Error(d(467)):Error(d(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},St===null?Re.memoizedState=St=e:St=St.next=e}return St}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var t=Po;return Po+=1,ho===null&&(ho=[]),e=zu(ho,e,t),t=Re,(St===null?t.memoizedState:St.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?kd:ni),e}function es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===de)return Rt(e)}throw Error(d(438,String(e)))}function Kr(e){var t=null,n=Re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Re.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Pl(),Re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=he;return t.index++,n}function Ln(e,t){return typeof t=="function"?t(e):t}function ts(e){var t=wt();return Qr(t,lt,e)}function Qr(e,t,n){var a=e.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=n;var l=e.baseQueue,s=a.pending;if(s!==null){if(l!==null){var r=l.next;l.next=s.next,s.next=r}t.baseQueue=l=s,a.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var u=r=null,m=null,D=t,z=!1;do{var _=D.lane&-536870913;if(_!==D.lane?(Ve&_)===_:(Hn&_)===_){var C=D.revertLane;if(C===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),_===io&&(z=!0);else if((Hn&C)===C){D=D.next,C===io&&(z=!0);continue}else _={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},m===null?(u=m=_,r=s):m=m.next=_,Re.lanes|=C,ca|=C;_=D.action,_a&&n(s,_),s=D.hasEagerState?D.eagerState:n(s,_)}else C={lane:_,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},m===null?(u=m=C,r=s):m=m.next=C,Re.lanes|=_,ca|=_;D=D.next}while(D!==null&&D!==t);if(m===null?r=s:m.next=u,!It(s,e.memoizedState)&&(Tt=!0,z&&(n=co,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=m,a.lastRenderedState=s}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Zr(e){var t=wt(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var r=l=l.next;do s=e(s,r.action),r=r.next;while(r!==l);It(s,t.memoizedState)||(Tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Yu(e,t,n){var a=Re,l=wt(),s=Ke;if(s){if(n===void 0)throw Error(d(407));n=n()}else n=t();var r=!It((lt||l).memoizedState,n);if(r&&(l.memoizedState=n,Tt=!0),l=l.queue,Ir(Xu.bind(null,a,l,e),[e]),l.getSnapshot!==t||r||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,vo(9,{destroy:void 0},Vu.bind(null,a,l,n,t),null),ct===null)throw Error(d(349));s||(Hn&127)!==0||qu(a,t,n)}return n}function qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t=Pl(),Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,a){t.value=n,t.getSnapshot=a,Ku(t)&&Qu(e)}function Xu(e,t,n){return n(function(){Ku(t)&&Qu(e)})}function Ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Qu(e){var t=Ca(e,2);t!==null&&Jt(t,e,2)}function Jr(e){var t=Yt();if(typeof e=="function"){var n=e;if(e=n(),_a){Lt(!0);try{n()}finally{Lt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:e},t}function Zu(e,t,n,a){return e.baseState=n,Qr(e,lt,typeof a=="function"?a:Ln)}function sh(e,t,n,a,l){if(os(e))throw Error(d(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};k.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,Ju(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Ju(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var s=k.T,r={};k.T=r;try{var u=n(l,a),m=k.S;m!==null&&m(r,u),Fu(e,t,u)}catch(D){Fr(e,t,D)}finally{s!==null&&r.types!==null&&(s.types=r.types),k.T=s}}else try{s=n(l,a),Fu(e,t,s)}catch(D){Fr(e,t,D)}}function Fu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Iu(e,t,a)},function(a){return Fr(e,t,a)}):Iu(e,t,n)}function Iu(e,t,n){t.status="fulfilled",t.value=n,$u(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ju(e,n)))}function Fr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,$u(t),t=t.next;while(t!==a)}e.action=null}function $u(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Wu(e,t){return t}function Pu(e,t){if(Ke){var n=ct.formState;if(n!==null){e:{var a=Re;if(Ke){if(pt){t:{for(var l=pt,s=dn;l.nodeType!==8;){if(!s){l=null;break t}if(l=pn(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){pt=pn(l.nextSibling),a=l.data==="F!";break e}}ea(a)}a=!1}a&&(t=n[0])}}return n=Yt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wu,lastRenderedState:t},n.queue=a,n=bd.bind(null,Re,a),a.dispatch=n,a=Jr(!1),s=ti.bind(null,Re,!1,a.queue),a=Yt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=sh.bind(null,Re,l,s,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function ed(e){var t=wt();return td(t,lt,e)}function td(e,t,n){if(t=Qr(e,t,Wu)[0],e=ts(Ln)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=el(t)}catch(r){throw r===uo?Kl:r}else a=t;t=wt();var l=t.queue,s=l.dispatch;return n!==t.memoizedState&&(Re.flags|=2048,vo(9,{destroy:void 0},rh.bind(null,l,n),null)),[a,s,e]}function rh(e,t){e.action=t}function nd(e){var t=wt(),n=lt;if(n!==null)return td(t,n,e);wt(),t=t.memoizedState,n=wt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function vo(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Re.updateQueue,t===null&&(t=Pl(),Re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ad(){return wt().memoizedState}function ns(e,t,n,a){var l=Yt();Re.flags|=e,l.memoizedState=vo(1|t,{destroy:void 0},n,a===void 0?null:a)}function as(e,t,n,a){var l=wt();a=a===void 0?null:a;var s=l.memoizedState.inst;lt!==null&&a!==null&&Gr(a,lt.memoizedState.deps)?l.memoizedState=vo(t,s,n,a):(Re.flags|=e,l.memoizedState=vo(1|t,s,n,a))}function od(e,t){ns(8390656,8,e,t)}function Ir(e,t){as(2048,8,e,t)}function ih(e){Re.flags|=4;var t=Re.updateQueue;if(t===null)t=Pl(),Re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ld(e){var t=wt().memoizedState;return ih({ref:t,nextImpl:e}),function(){if(($e&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function sd(e,t){return as(4,2,e,t)}function rd(e,t){return as(4,4,e,t)}function id(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,n){n=n!=null?n.concat([e]):null,as(4,4,id.bind(null,t,e),n)}function $r(){}function ud(e,t){var n=wt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Gr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function dd(e,t){var n=wt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Gr(t,a[1]))return a[0];if(a=e(),_a){Lt(!0);try{e()}finally{Lt(!1)}}return n.memoizedState=[a,t],a}function Wr(e,t,n){return n===void 0||(Hn&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=pf(),Re.lanes|=e,ca|=e,n)}function fd(e,t,n,a){return It(n,t)?n:po.current!==null?(e=Wr(e,n,a),It(e,t)||(Tt=!0),e):(Hn&42)===0||(Hn&1073741824)!==0&&(Ve&261930)===0?(Tt=!0,e.memoizedState=n):(e=pf(),Re.lanes|=e,ca|=e,t)}function pd(e,t,n,a,l){var s=O.p;O.p=s!==0&&8>s?s:8;var r=k.T,u={};k.T=u,ti(e,!1,t,n);try{var m=l(),D=k.S;if(D!==null&&D(u,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var z=ah(m,a);tl(e,t,z,nn(e))}else tl(e,t,a,nn(e))}catch(_){tl(e,t,{then:function(){},status:"rejected",reason:_},nn())}finally{O.p=s,r!==null&&u.types!==null&&(r.types=u.types),k.T=r}}function ch(){}function Pr(e,t,n,a){if(e.tag!==5)throw Error(d(476));var l=md(e).queue;pd(e,l,t,K,n===null?ch:function(){return hd(e),n(a)})}function md(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:K},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hd(e){var t=md(e);t.next===null&&(t=e.alternate.memoizedState),tl(e,t.next.queue,{},nn())}function ei(){return Rt(bl)}function vd(){return wt().memoizedState}function gd(){return wt().memoizedState}function uh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=nn();e=aa(n);var a=oa(t,e,n);a!==null&&(Jt(a,t,n),Io(a,t,n)),t={cache:Br()},e.payload=t;return}t=t.return}}function dh(e,t,n){var a=nn();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},os(e)?xd(t,n):(n=br(e,t,n,a),n!==null&&(Jt(n,e,a),yd(n,t,a)))}function bd(e,t,n){var a=nn();tl(e,t,n,a)}function tl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(os(e))xd(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,u=s(r,n);if(l.hasEagerState=!0,l.eagerState=u,It(u,r))return Hl(e,t,l,0),ct===null&&Ul(),!1}catch{}if(n=br(e,t,l,a),n!==null)return Jt(n,e,a),yd(n,t,a),!0}return!1}function ti(e,t,n,a){if(a={lane:2,revertLane:Mi(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},os(e)){if(t)throw Error(d(479))}else t=br(e,n,a,2),t!==null&&Jt(t,e,2)}function os(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function xd(e,t){mo=$l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Tc(e,n)}}var nl={readContext:Rt,use:es,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt};nl.useEffectEvent=xt;var kd={readContext:Rt,use:es,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:od,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ns(4194308,4,id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){ns(4,2,e,t)},useMemo:function(e,t){var n=Yt();t=t===void 0?null:t;var a=e();if(_a){Lt(!0);try{e()}finally{Lt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Yt();if(n!==void 0){var l=n(t);if(_a){Lt(!0);try{n(t)}finally{Lt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=dh.bind(null,Re,e),[a.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Jr(e);var t=e.queue,n=bd.bind(null,Re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$r,useDeferredValue:function(e,t){var n=Yt();return Wr(n,e,t)},useTransition:function(){var e=Jr(!1);return e=pd.bind(null,Re,e.queue,!0,!1),Yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Re,l=Yt();if(Ke){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),ct===null)throw Error(d(349));(Ve&127)!==0||qu(a,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,od(Xu.bind(null,a,s,e),[e]),a.flags|=2048,vo(9,{destroy:void 0},Vu.bind(null,a,s,n,t),null),n},useId:function(){var e=Yt(),t=ct.identifierPrefix;if(Ke){var n=Cn,a=Dn;n=(a&~(1<<32-Bt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Wl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=oh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ei,useFormState:Pu,useActionState:Pu,useOptimistic:function(e){var t=Yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ti.bind(null,Re,!0,n),n.dispatch=t,[e,t]},useMemoCache:Kr,useCacheRefresh:function(){return Yt().memoizedState=uh.bind(null,Re)},useEffectEvent:function(e){var t=Yt(),n={impl:e};return t.memoizedState=n,function(){if(($e&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},ni={readContext:Rt,use:es,useCallback:ud,useContext:Rt,useEffect:Ir,useImperativeHandle:cd,useInsertionEffect:sd,useLayoutEffect:rd,useMemo:dd,useReducer:ts,useRef:ad,useState:function(){return ts(Ln)},useDebugValue:$r,useDeferredValue:function(e,t){var n=wt();return fd(n,lt.memoizedState,e,t)},useTransition:function(){var e=ts(Ln)[0],t=wt().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:Yu,useId:vd,useHostTransitionStatus:ei,useFormState:ed,useActionState:ed,useOptimistic:function(e,t){var n=wt();return Zu(n,lt,e,t)},useMemoCache:Kr,useCacheRefresh:gd};ni.useEffectEvent=ld;var wd={readContext:Rt,use:es,useCallback:ud,useContext:Rt,useEffect:Ir,useImperativeHandle:cd,useInsertionEffect:sd,useLayoutEffect:rd,useMemo:dd,useReducer:Zr,useRef:ad,useState:function(){return Zr(Ln)},useDebugValue:$r,useDeferredValue:function(e,t){var n=wt();return lt===null?Wr(n,e,t):fd(n,lt.memoizedState,e,t)},useTransition:function(){var e=Zr(Ln)[0],t=wt().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:Yu,useId:vd,useHostTransitionStatus:ei,useFormState:nd,useActionState:nd,useOptimistic:function(e,t){var n=wt();return lt!==null?Zu(n,lt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Kr,useCacheRefresh:gd};wd.useEffectEvent=ld;function ai(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oi={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=nn(),l=aa(a);l.payload=t,n!=null&&(l.callback=n),t=oa(e,l,a),t!==null&&(Jt(t,e,a),Io(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=nn(),l=aa(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=oa(e,l,a),t!==null&&(Jt(t,e,a),Io(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nn(),a=aa(n);a.tag=2,t!=null&&(a.callback=t),t=oa(e,a,n),t!==null&&(Jt(t,e,n),Io(t,e,n))}};function jd(e,t,n,a,l,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,r):t.prototype&&t.prototype.isPureReactComponent?!qo(n,a)||!qo(l,s):!0}function Sd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&oi.enqueueReplaceState(t,t.state,null)}function Ua(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=M({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Td(e){_l(e)}function Dd(e){console.error(e)}function Cd(e){_l(e)}function ls(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ad(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function li(e,t,n){return n=aa(n),n.tag=3,n.payload={element:null},n.callback=function(){ls(e,t)},n}function Bd(e){return e=aa(e),e.tag=3,e}function zd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=a.value;e.payload=function(){return l(s)},e.callback=function(){Ad(t,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Ad(t,n,a),typeof l!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function fh(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ro(t,n,l,!0),n=Wt.current,n!==null){switch(n.tag){case 31:case 13:return fn===null?gs():n.alternate===null&&yt===0&&(yt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Ql?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),zi(e,a,l)),!1;case 22:return n.flags|=65536,a===Ql?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),zi(e,a,l)),!1}throw Error(d(435,n.tag))}return zi(e,a,l),gs(),!1}if(Ke)return t=Wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Sr&&(e=Error(d(422),{cause:a}),Ko(rn(e,n)))):(a!==Sr&&(t=Error(d(423),{cause:a}),Ko(rn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=rn(a,n),l=li(e.stateNode,a,l),Rr(e,l),yt!==4&&(yt=2)),!1;var s=Error(d(520),{cause:a});if(s=rn(s,n),ul===null?ul=[s]:ul.push(s),yt!==4&&(yt=2),t===null)return!0;a=rn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=li(n.stateNode,a,e),Rr(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ua===null||!ua.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Bd(l),zd(l,e,n,a),Rr(n,l),!1}n=n.return}while(n!==null);return!1}var si=Error(d(461)),Tt=!1;function _t(e,t,n,a){t.child=e===null?Ou(t,null,n,a):Ra(t,e.child,n,a)}function Nd(e,t,n,a,l){n=n.render;var s=t.ref;if("ref"in a){var r={};for(var u in a)u!=="ref"&&(r[u]=a[u])}else r=a;return Na(t),a=Yr(e,t,n,r,s,l),u=qr(),e!==null&&!Tt?(Vr(e,t,l),Gn(e,t,l)):(Ke&&u&&wr(t),t.flags|=1,_t(e,t,a,l),t.child)}function Ed(e,t,n,a,l){if(e===null){var s=n.type;return typeof s=="function"&&!xr(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Md(e,t,s,a,l)):(e=Gl(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!mi(e,l)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(r,a)&&e.ref===t.ref)return Gn(e,t,l)}return t.flags|=1,e=On(s,a),e.ref=t.ref,e.return=t,t.child=e}function Md(e,t,n,a,l){if(e!==null){var s=e.memoizedProps;if(qo(s,a)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=a=s,mi(e,l))(e.flags&131072)!==0&&(Tt=!0);else return t.lanes=e.lanes,Gn(e,t,l)}return ri(e,t,n,a,l)}function Od(e,t,n,a){var l=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~s}else a=0,t.child=null;return Rd(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xl(t,s!==null?s.cachePool:null),s!==null?Uu(t,s):Ur(),Hu(t);else return a=t.lanes=536870912,Rd(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(Xl(t,s.cachePool),Uu(t,s),sa(),t.memoizedState=null):(e!==null&&Xl(t,null),Ur(),sa());return _t(e,t,l,n),t.child}function al(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rd(e,t,n,a,l){var s=Nr();return s=s===null?null:{parent:jt._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Xl(t,null),Ur(),Hu(t),e!==null&&ro(e,t,a,!0),t.childLanes=l,null}function ss(e,t){return t=is({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _d(e,t,n){return Ra(t,e.child,null,n),e=ss(t,t.pendingProps),e.flags|=2,Pt(t),t.memoizedState=null,e}function ph(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ke){if(a.mode==="hidden")return e=ss(t,a),t.lanes=536870912,al(null,e);if(Lr(t),(e=pt)?(e=Ff(e,dn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wn!==null?{id:Dn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},n=xu(e),n.return=t,t.child=n,Ot=t,pt=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return ss(t,a)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Lr(t),l)if(t.flags&256)t.flags&=-257,t=_d(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Tt||ro(e,t,n,!1),l=(n&e.childLanes)!==0,Tt||l){if(a=ct,a!==null&&(r=Dc(a,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ca(e,r),Jt(a,e,r),si;gs(),t=_d(e,t,n)}else e=s.treeContext,pt=pn(r.nextSibling),Ot=t,Ke=!0,Pn=null,dn=!1,e!==null&&wu(t,e),t=ss(t,a),t.flags|=4096;return t}return e=On(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ri(e,t,n,a,l){return Na(t),n=Yr(e,t,n,a,void 0,l),a=qr(),e!==null&&!Tt?(Vr(e,t,l),Gn(e,t,l)):(Ke&&a&&wr(t),t.flags|=1,_t(e,t,n,l),t.child)}function Ud(e,t,n,a,l,s){return Na(t),t.updateQueue=null,n=Gu(t,a,n,l),Lu(e),a=qr(),e!==null&&!Tt?(Vr(e,t,s),Gn(e,t,s)):(Ke&&a&&wr(t),t.flags|=1,_t(e,t,n,s),t.child)}function Hd(e,t,n,a,l){if(Na(t),t.stateNode===null){var s=ao,r=n.contextType;typeof r=="object"&&r!==null&&(s=Rt(r)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=oi,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},Mr(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?Rt(r):ao,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ai(t,n,r,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&oi.enqueueReplaceState(s,s.state,null),Wo(t,a,s,l),$o(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var u=t.memoizedProps,m=Ua(n,u);s.props=m;var D=s.context,z=n.contextType;r=ao,typeof z=="object"&&z!==null&&(r=Rt(z));var _=n.getDerivedStateFromProps;z=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,z||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u||D!==r)&&Sd(t,s,a,r),na=!1;var C=t.memoizedState;s.state=C,Wo(t,a,s,l),$o(),D=t.memoizedState,u||C!==D||na?(typeof _=="function"&&(ai(t,n,_,a),D=t.memoizedState),(m=na||jd(t,n,m,a,C,D,r))?(z||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=D),s.props=a,s.state=D,s.context=r,a=m):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,Or(e,t),r=t.memoizedProps,z=Ua(n,r),s.props=z,_=t.pendingProps,C=s.context,D=n.contextType,m=ao,typeof D=="object"&&D!==null&&(m=Rt(D)),u=n.getDerivedStateFromProps,(D=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==_||C!==m)&&Sd(t,s,a,m),na=!1,C=t.memoizedState,s.state=C,Wo(t,a,s,l),$o();var B=t.memoizedState;r!==_||C!==B||na||e!==null&&e.dependencies!==null&&ql(e.dependencies)?(typeof u=="function"&&(ai(t,n,u,a),B=t.memoizedState),(z=na||jd(t,n,z,a,C,B,m)||e!==null&&e.dependencies!==null&&ql(e.dependencies))?(D||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,B,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,B,m)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=B),s.props=a,s.state=B,s.context=m,a=z):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,rs(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Ra(t,e.child,null,l),t.child=Ra(t,null,n,l)):_t(e,t,n,l),t.memoizedState=s.state,e=t.child):e=Gn(e,t,l),e}function Ld(e,t,n,a){return Ba(),t.flags|=256,_t(e,t,n,a),t.child}var ii={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ci(e){return{baseLanes:e,cachePool:Au()}}function ui(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=tn),e}function Gd(e,t,n){var a=t.pendingProps,l=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(kt.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ke){if(l?la(t):sa(),(e=pt)?(e=Ff(e,dn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wn!==null?{id:Dn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},n=xu(e),n.return=t,t.child=n,Ot=t,pt=null)):e=null,e===null)throw ea(t);return Qi(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(sa(),l=t.mode,u=is({mode:"hidden",children:u},l),a=Aa(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=ci(n),a.childLanes=ui(e,r,n),t.memoizedState=ii,al(null,a)):(la(t),di(t,u))}var m=e.memoizedState;if(m!==null&&(u=m.dehydrated,u!==null)){if(s)t.flags&256?(la(t),t.flags&=-257,t=fi(e,t,n)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),u=a.fallback,l=t.mode,a=is({mode:"visible",children:a.children},l),u=Aa(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,Ra(t,e.child,null,n),a=t.child,a.memoizedState=ci(n),a.childLanes=ui(e,r,n),t.memoizedState=ii,t=al(null,a));else if(la(t),Qi(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var D=r.dgst;r=D,a=Error(d(419)),a.stack="",a.digest=r,Ko({value:a,source:null,stack:null}),t=fi(e,t,n)}else if(Tt||ro(e,t,n,!1),r=(n&e.childLanes)!==0,Tt||r){if(r=ct,r!==null&&(a=Dc(r,n),a!==0&&a!==m.retryLane))throw m.retryLane=a,Ca(e,a),Jt(r,e,a),si;Ki(u)||gs(),t=fi(e,t,n)}else Ki(u)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,pt=pn(u.nextSibling),Ot=t,Ke=!0,Pn=null,dn=!1,e!==null&&wu(t,e),t=di(t,a.children),t.flags|=4096);return t}return l?(sa(),u=a.fallback,l=t.mode,m=e.child,D=m.sibling,a=On(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,D!==null?u=On(D,u):(u=Aa(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,al(null,a),a=t.child,u=e.child.memoizedState,u===null?u=ci(n):(l=u.cachePool,l!==null?(m=jt._currentValue,l=l.parent!==m?{parent:m,pool:m}:l):l=Au(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=ui(e,r,n),t.memoizedState=ii,al(e.child,a)):(la(t),n=e.child,e=n.sibling,n=On(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function di(e,t){return t=is({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function is(e,t){return e=$t(22,e,null,t),e.lanes=0,e}function fi(e,t,n){return Ra(t,e.child,null,n),e=di(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Cr(e.return,t,n)}function pi(e,t,n,a,l,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l,r.treeForkCount=s)}function qd(e,t,n){var a=t.pendingProps,l=a.revealOrder,s=a.tail;a=a.children;var r=kt.current,u=(r&2)!==0;if(u?(r=r&1|2,t.flags|=128):r&=1,R(kt,r),_t(e,t,a,n),a=Ke?Xo:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yd(e,n,t);else if(e.tag===19)Yd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),pi(t,!1,l,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}pi(t,!0,n,null,s,a);break;case"together":pi(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ro(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mi(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ql(e)))}function mh(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),ta(t,jt,e.memoizedState.cache),Ba();break;case 27:case 5:se(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(la(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Gd(e,t,n):(la(t),e=Gn(e,t,n),e!==null?e.sibling:null);la(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ro(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return qd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(kt,kt.current),a)break;return null;case 22:return t.lanes=0,Od(e,t,n,t.pendingProps);case 24:ta(t,jt,e.memoizedState.cache)}return Gn(e,t,n)}function Vd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Tt=!0;else{if(!mi(e,n)&&(t.flags&128)===0)return Tt=!1,mh(e,t,n);Tt=(e.flags&131072)!==0}else Tt=!1,Ke&&(t.flags&1048576)!==0&&ku(t,Xo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e=="function")xr(e)?(a=Ua(e,a),t.tag=1,t=Hd(null,t,e,a,n)):(t.tag=0,t=ri(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===P){t.tag=11,t=Nd(null,t,e,a,n);break e}else if(l===ee){t.tag=14,t=Ed(null,t,e,a,n);break e}}throw t=Se(e)||e,Error(d(306,t,""))}}return t;case 0:return ri(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Ua(a,t.pendingProps),Hd(e,t,a,l,n);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(d(387));a=t.pendingProps;var s=t.memoizedState;l=s.element,Or(e,t),Wo(t,a,null,n);var r=t.memoizedState;if(a=r.cache,ta(t,jt,a),a!==s.cache&&Ar(t,[jt],n,!0),$o(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Ld(e,t,a,n);break e}else if(a!==l){l=rn(Error(d(424)),t),Ko(l),t=Ld(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,pt=pn(e.firstChild),Ot=t,Ke=!0,Pn=null,dn=!0,n=Ou(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ba(),a===l){t=Gn(e,t,n);break e}_t(e,t,a,n)}t=t.child}return t;case 26:return rs(e,t),e===null?(n=tp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ke||(n=t.type,e=t.pendingProps,a=Ss($.current).createElement(n),a[Mt]=t,a[qt]=e,Ut(a,n,e),Nt(a),t.stateNode=a):t.memoizedState=tp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return se(t),e===null&&Ke&&(a=t.stateNode=Wf(t.type,t.pendingProps,$.current),Ot=t,dn=!0,l=pt,ma(t.type)?(Zi=l,pt=pn(a.firstChild)):pt=l),_t(e,t,t.pendingProps.children,n),rs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ke&&((l=a=pt)&&(a=Xh(a,t.type,t.pendingProps,dn),a!==null?(t.stateNode=a,Ot=t,pt=pn(a.firstChild),dn=!1,l=!0):l=!1),l||ea(t)),se(t),l=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,a=s.children,qi(l,s)?a=null:r!==null&&qi(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=Yr(e,t,lh,null,null,n),bl._currentValue=l),rs(e,t),_t(e,t,a,n),t.child;case 6:return e===null&&Ke&&((e=n=pt)&&(n=Kh(n,t.pendingProps,dn),n!==null?(t.stateNode=n,Ot=t,pt=null,e=!0):e=!1),e||ea(t)),null;case 13:return Gd(e,t,n);case 4:return De(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ra(t,null,a,n):_t(e,t,a,n),t.child;case 11:return Nd(e,t,t.type,t.pendingProps,n);case 7:return _t(e,t,t.pendingProps,n),t.child;case 8:return _t(e,t,t.pendingProps.children,n),t.child;case 12:return _t(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,ta(t,t.type,a.value),_t(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Na(t),l=Rt(l),a=a(l),t.flags|=1,_t(e,t,a,n),t.child;case 14:return Ed(e,t,t.type,t.pendingProps,n);case 15:return Md(e,t,t.type,t.pendingProps,n);case 19:return qd(e,t,n);case 31:return ph(e,t,n);case 22:return Od(e,t,n,t.pendingProps);case 24:return Na(t),a=Rt(jt),e===null?(l=Nr(),l===null&&(l=ct,s=Br(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),t.memoizedState={parent:a,cache:l},Mr(t),ta(t,jt,l)):((e.lanes&n)!==0&&(Or(e,t),Wo(t,null,null,n),$o()),l=e.memoizedState,s=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,jt,a)):(a=s.cache,ta(t,jt,a),a!==l.cache&&Ar(t,[jt],n,!0))),_t(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Yn(e){e.flags|=4}function hi(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(gf())e.flags|=8192;else throw Oa=Ql,Er}else e.flags&=-16777217}function Xd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sp(t))if(gf())e.flags|=8192;else throw Oa=Ql,Er}function cs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?wa():536870912,e.lanes|=t,yo|=t)}function ol(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function hh(e,t,n){var a=t.pendingProps;switch(jr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return mt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Un(jt),V(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(so(t)?Yn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Tr())),mt(t),null;case 26:var l=t.type,s=t.memoizedState;return e===null?(Yn(t),s!==null?(mt(t),Xd(t,s)):(mt(t),hi(t,l,null,a,n))):s?s!==e.memoizedState?(Yn(t),mt(t),Xd(t,s)):(mt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Yn(t),mt(t),hi(t,l,e,a,n)),null;case 27:if(Ce(t),n=$.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Yn(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return mt(t),null}e=w.current,so(t)?ju(t):(e=Wf(l,a,n),t.stateNode=e,Yn(t))}return mt(t),null;case 5:if(Ce(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Yn(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return mt(t),null}if(s=w.current,so(t))ju(t);else{var r=Ss($.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?r.createElement(l,{is:a.is}):r.createElement(l)}}s[Mt]=t,s[qt]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;e:switch(Ut(s,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Yn(t)}}return mt(t),hi(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Yn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(d(166));if(e=$.current,so(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Ot,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Yf(e.nodeValue,n)),e||ea(t,!0)}else e=Ss(e).createTextNode(a),e[Mt]=t,t.stateNode=e}return mt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=so(t),n!==null){if(e===null){if(!a)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Mt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;mt(t),e=!1}else n=Tr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Pt(t),t):(Pt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return mt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=so(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[Mt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;mt(t),l=!1}else l=Tr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Pt(t),t):(Pt(t),null)}return Pt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cs(t,t.updateQueue),mt(t),null);case 4:return V(),e===null&&Ui(t.stateNode.containerInfo),mt(t),null;case 10:return Un(t.type),mt(t),null;case 19:if(v(kt),a=t.memoizedState,a===null)return mt(t),null;if(l=(t.flags&128)!==0,s=a.rendering,s===null)if(l)ol(a,!1);else{if(yt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Il(e),s!==null){for(t.flags|=128,ol(a,!1),e=s.updateQueue,t.updateQueue=e,cs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bu(n,e),n=n.sibling;return R(kt,kt.current&1|2),Ke&&Rn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Ee()>ms&&(t.flags|=128,l=!0,ol(a,!1),t.lanes=4194304)}else{if(!l)if(e=Il(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,cs(t,e),ol(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ke)return mt(t),null}else 2*Ee()-a.renderingStartTime>ms&&n!==536870912&&(t.flags|=128,l=!0,ol(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ee(),e.sibling=null,n=kt.current,R(kt,l?n&1|2:n&1),Ke&&Rn(t,a.treeForkCount),e):(mt(t),null);case 22:case 23:return Pt(t),Hr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),n=t.updateQueue,n!==null&&cs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&v(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Un(jt),mt(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function vh(e,t){switch(jr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(jt),V(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(Pt(t),t.alternate===null)throw Error(d(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return v(kt),null;case 4:return V(),null;case 10:return Un(t.type),null;case 22:case 23:return Pt(t),Hr(),e!==null&&v(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Un(jt),null;case 25:return null;default:return null}}function Kd(e,t){switch(jr(t),t.tag){case 3:Un(jt),V();break;case 26:case 27:case 5:Ce(t);break;case 4:V();break;case 31:t.memoizedState!==null&&Pt(t);break;case 13:Pt(t);break;case 19:v(kt);break;case 10:Un(t.type);break;case 22:case 23:Pt(t),Hr(),e!==null&&v(Ea);break;case 24:Un(jt)}}function ll(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var s=n.create,r=n.inst;a=s(),r.destroy=a}n=n.next}while(n!==l)}}catch(u){nt(t,t.return,u)}}function ra(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){var r=a.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,l=t;var m=n,D=u;try{D()}catch(z){nt(l,m,z)}}}a=a.next}while(a!==s)}}catch(z){nt(t,t.return,z)}}function Qd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_u(t,n)}catch(a){nt(e,e.return,a)}}}function Zd(e,t,n){n.props=Ua(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){nt(e,t,a)}}function sl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){nt(e,t,l)}}function An(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){nt(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){nt(e,t,l)}else n.current=null}function Jd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){nt(e,e.return,l)}}function vi(e,t,n){try{var a=e.stateNode;Hh(a,e.type,n,t),a[qt]=t}catch(l){nt(e,e.return,l)}}function Fd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function gi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=En));else if(a!==4&&(a===27&&ma(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}function us(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ma(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(us(e,t,n),e=e.sibling;e!==null;)us(e,t,n),e=e.sibling}function Id(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ut(t,a,n),t[Mt]=e,t[qt]=n}catch(s){nt(e,e.return,s)}}var qn=!1,Dt=!1,xi=!1,$d=typeof WeakSet=="function"?WeakSet:Set,Et=null;function gh(e,t){if(e=e.containerInfo,Gi=Ns,e=cu(e),fr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,u=-1,m=-1,D=0,z=0,_=e,C=null;t:for(;;){for(var B;_!==n||l!==0&&_.nodeType!==3||(u=r+l),_!==s||a!==0&&_.nodeType!==3||(m=r+a),_.nodeType===3&&(r+=_.nodeValue.length),(B=_.firstChild)!==null;)C=_,_=B;for(;;){if(_===e)break t;if(C===n&&++D===l&&(u=r),C===s&&++z===a&&(m=r),(B=_.nextSibling)!==null)break;_=C,C=_.parentNode}_=B}n=u===-1||m===-1?null:{start:u,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yi={focusedElem:e,selectionRange:n},Ns=!1,Et=t;Et!==null;)if(t=Et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Et=e;else for(;Et!==null;){switch(t=Et,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,l=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var me=Ua(n.type,l);e=a.getSnapshotBeforeUpdate(me,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(Te){nt(n,n.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Xi(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xi(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Et=e;break}Et=t.return}}function Wd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Xn(e,n),a&4&&ll(5,n);break;case 1:if(Xn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){nt(n,n.return,r)}else{var l=Ua(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){nt(n,n.return,r)}}a&64&&Qd(n),a&512&&sl(n,n.return);break;case 3:if(Xn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_u(e,t)}catch(r){nt(n,n.return,r)}}break;case 27:t===null&&a&4&&Id(n);case 26:case 5:Xn(e,n),t===null&&a&4&&Jd(n),a&512&&sl(n,n.return);break;case 12:Xn(e,n);break;case 31:Xn(e,n),a&4&&tf(e,n);break;case 13:Xn(e,n),a&4&&nf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Dh.bind(null,n),Qh(e,n))));break;case 22:if(a=n.memoizedState!==null||qn,!a){t=t!==null&&t.memoizedState!==null||Dt,l=qn;var s=Dt;qn=a,(Dt=t)&&!s?Kn(e,n,(n.subtreeFlags&8772)!==0):Xn(e,n),qn=l,Dt=s}break;case 30:break;default:Xn(e,n)}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vt=null,Xt=!1;function Vn(e,t,n){for(n=n.child;n!==null;)ef(e,t,n),n=n.sibling}function ef(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(gn,n)}catch{}switch(n.tag){case 26:Dt||An(n,t),Vn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Dt||An(n,t);var a=vt,l=Xt;ma(n.type)&&(vt=n.stateNode,Xt=!1),Vn(e,t,n),hl(n.stateNode),vt=a,Xt=l;break;case 5:Dt||An(n,t);case 6:if(a=vt,l=Xt,vt=null,Vn(e,t,n),vt=a,Xt=l,vt!==null)if(Xt)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(n.stateNode)}catch(s){nt(n,t,s)}else try{vt.removeChild(n.stateNode)}catch(s){nt(n,t,s)}break;case 18:vt!==null&&(Xt?(e=vt,Zf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ao(e)):Zf(vt,n.stateNode));break;case 4:a=vt,l=Xt,vt=n.stateNode.containerInfo,Xt=!0,Vn(e,t,n),vt=a,Xt=l;break;case 0:case 11:case 14:case 15:ra(2,n,t),Dt||ra(4,n,t),Vn(e,t,n);break;case 1:Dt||(An(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Zd(n,t,a)),Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:Dt=(a=Dt)||n.memoizedState!==null,Vn(e,t,n),Dt=a;break;default:Vn(e,t,n)}}function tf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ao(e)}catch(n){nt(t,t.return,n)}}}function nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(n){nt(t,t.return,n)}}function bh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $d),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $d),t;default:throw Error(d(435,e.tag))}}function ds(e,t){var n=bh(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Ch.bind(null,e,a);a.then(l,l)}})}function Kt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],s=e,r=t,u=r;e:for(;u!==null;){switch(u.tag){case 27:if(ma(u.type)){vt=u.stateNode,Xt=!1;break e}break;case 5:vt=u.stateNode,Xt=!1;break e;case 3:case 4:vt=u.stateNode.containerInfo,Xt=!0;break e}u=u.return}if(vt===null)throw Error(d(160));ef(s,r,l),vt=null,Xt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)af(t,e),t=t.sibling}var yn=null;function af(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kt(t,e),Qt(e),a&4&&(ra(3,e,e.return),ll(3,e),ra(5,e,e.return));break;case 1:Kt(t,e),Qt(e),a&512&&(Dt||n===null||An(n,n.return)),a&64&&qn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=yn;if(Kt(t,e),Qt(e),a&512&&(Dt||n===null||An(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Mo]||s[Mt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(a),l.head.insertBefore(s,l.querySelector("head > title"))),Ut(s,a,n),s[Mt]=e,Nt(s),a=s;break e;case"link":var r=op("link","href",l).get(a+(n.href||""));if(r){for(var u=0;u<r.length;u++)if(s=r[u],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(u,1);break t}}s=l.createElement(a),Ut(s,a,n),l.head.appendChild(s);break;case"meta":if(r=op("meta","content",l).get(a+(n.content||""))){for(u=0;u<r.length;u++)if(s=r[u],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(u,1);break t}}s=l.createElement(a),Ut(s,a,n),l.head.appendChild(s);break;default:throw Error(d(468,a))}s[Mt]=e,Nt(s),a=s}e.stateNode=a}else lp(l,e.type,e.stateNode);else e.stateNode=ap(l,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?lp(l,e.type,e.stateNode):ap(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&vi(e,e.memoizedProps,n.memoizedProps)}break;case 27:Kt(t,e),Qt(e),a&512&&(Dt||n===null||An(n,n.return)),n!==null&&a&4&&vi(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Kt(t,e),Qt(e),a&512&&(Dt||n===null||An(n,n.return)),e.flags&32){l=e.stateNode;try{Ia(l,"")}catch(me){nt(e,e.return,me)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,vi(e,l,n!==null?n.memoizedProps:l)),a&1024&&(xi=!0);break;case 6:if(Kt(t,e),Qt(e),a&4){if(e.stateNode===null)throw Error(d(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(me){nt(e,e.return,me)}}break;case 3:if(Cs=null,l=yn,yn=Ts(t.containerInfo),Kt(t,e),yn=l,Qt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(me){nt(e,e.return,me)}xi&&(xi=!1,of(e));break;case 4:a=yn,yn=Ts(e.stateNode.containerInfo),Kt(t,e),Qt(e),yn=a;break;case 12:Kt(t,e),Qt(e);break;case 31:Kt(t,e),Qt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ds(e,a)));break;case 13:Kt(t,e),Qt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ps=Ee()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ds(e,a)));break;case 22:l=e.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,D=qn,z=Dt;if(qn=D||l,Dt=z||m,Kt(t,e),Dt=z,qn=D,Qt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||m||qn||Dt||Ha(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){m=n=t;try{if(s=m.stateNode,l)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{u=m.stateNode;var _=m.memoizedProps.style,C=_!=null&&_.hasOwnProperty("display")?_.display:null;u.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(me){nt(m,m.return,me)}}}else if(t.tag===6){if(n===null){m=t;try{m.stateNode.nodeValue=l?"":m.memoizedProps}catch(me){nt(m,m.return,me)}}}else if(t.tag===18){if(n===null){m=t;try{var B=m.stateNode;l?Jf(B,!0):Jf(m.stateNode,!1)}catch(me){nt(m,m.return,me)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ds(e,n))));break;case 19:Kt(t,e),Qt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ds(e,a)));break;case 30:break;case 21:break;default:Kt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Fd(a)){n=a;break}a=a.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var l=n.stateNode,s=gi(e);us(e,s,l);break;case 5:var r=n.stateNode;n.flags&32&&(Ia(r,""),n.flags&=-33);var u=gi(e);us(e,u,r);break;case 3:case 4:var m=n.stateNode.containerInfo,D=gi(e);bi(e,D,m);break;default:throw Error(d(161))}}catch(z){nt(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Wd(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ha(t);break;case 1:An(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Zd(t,t.return,n),Ha(t);break;case 27:hl(t.stateNode);case 26:case 5:An(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function Kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Kn(l,s,n),ll(4,s);break;case 1:if(Kn(l,s,n),a=s,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){nt(a,a.return,D)}if(a=s,l=a.updateQueue,l!==null){var u=a.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)Ru(m[l],u)}catch(D){nt(a,a.return,D)}}n&&r&64&&Qd(s),sl(s,s.return);break;case 27:Id(s);case 26:case 5:Kn(l,s,n),n&&a===null&&r&4&&Jd(s),sl(s,s.return);break;case 12:Kn(l,s,n);break;case 31:Kn(l,s,n),n&&r&4&&tf(l,s);break;case 13:Kn(l,s,n),n&&r&4&&nf(l,s);break;case 22:s.memoizedState===null&&Kn(l,s,n),sl(s,s.return);break;case 30:break;default:Kn(l,s,n)}t=t.sibling}}function yi(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Qo(n))}function ki(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qo(e))}function kn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lf(e,t,n,a),t=t.sibling}function lf(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:kn(e,t,n,a),l&2048&&ll(9,t);break;case 1:kn(e,t,n,a);break;case 3:kn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qo(e)));break;case 12:if(l&2048){kn(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,u=s.onPostCommit;typeof u=="function"&&u(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){nt(t,t.return,m)}}else kn(e,t,n,a);break;case 31:kn(e,t,n,a);break;case 13:kn(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?kn(e,t,n,a):rl(e,t):s._visibility&2?kn(e,t,n,a):(s._visibility|=2,go(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&yi(r,t);break;case 24:kn(e,t,n,a),l&2048&&ki(t.alternate,t);break;default:kn(e,t,n,a)}}function go(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,u=n,m=a,D=r.flags;switch(r.tag){case 0:case 11:case 15:go(s,r,u,m,l),ll(8,r);break;case 23:break;case 22:var z=r.stateNode;r.memoizedState!==null?z._visibility&2?go(s,r,u,m,l):rl(s,r):(z._visibility|=2,go(s,r,u,m,l)),l&&D&2048&&yi(r.alternate,r);break;case 24:go(s,r,u,m,l),l&&D&2048&&ki(r.alternate,r);break;default:go(s,r,u,m,l)}t=t.sibling}}function rl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:rl(n,a),l&2048&&yi(a.alternate,a);break;case 24:rl(n,a),l&2048&&ki(a.alternate,a);break;default:rl(n,a)}t=t.sibling}}var il=8192;function bo(e,t,n){if(e.subtreeFlags&il)for(e=e.child;e!==null;)sf(e,t,n),e=e.sibling}function sf(e,t,n){switch(e.tag){case 26:bo(e,t,n),e.flags&il&&e.memoizedState!==null&&ov(n,yn,e.memoizedState,e.memoizedProps);break;case 5:bo(e,t,n);break;case 3:case 4:var a=yn;yn=Ts(e.stateNode.containerInfo),bo(e,t,n),yn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=il,il=16777216,bo(e,t,n),il=a):bo(e,t,n));break;default:bo(e,t,n)}}function rf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Et=a,uf(a,e)}rf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cf(e),e=e.sibling}function cf(e){switch(e.tag){case 0:case 11:case 15:cl(e),e.flags&2048&&ra(9,e,e.return);break;case 3:cl(e);break;case 12:cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fs(e)):cl(e);break;default:cl(e)}}function fs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Et=a,uf(a,e)}rf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),fs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,fs(t));break;default:fs(t)}e=e.sibling}}function uf(e,t){for(;Et!==null;){var n=Et;switch(n.tag){case 0:case 11:case 15:ra(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qo(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Et=a;else e:for(n=e;Et!==null;){a=Et;var l=a.sibling,s=a.return;if(Pd(a),a===n){Et=null;break e}if(l!==null){l.return=s,Et=l;break e}Et=s}}}var xh={getCacheForType:function(e){var t=Rt(jt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Rt(jt).controller.signal}},yh=typeof WeakMap=="function"?WeakMap:Map,$e=0,ct=null,Ge=null,Ve=0,tt=0,en=null,ia=!1,xo=!1,wi=!1,Qn=0,yt=0,ca=0,La=0,ji=0,tn=0,yo=0,ul=null,Zt=null,Si=!1,ps=0,df=0,ms=1/0,hs=null,ua=null,zt=0,da=null,ko=null,Zn=0,Ti=0,Di=null,ff=null,dl=0,Ci=null;function nn(){return($e&2)!==0&&Ve!==0?Ve&-Ve:k.T!==null?Mi():Cc()}function pf(){if(tn===0)if((Ve&536870912)===0||Ke){var e=Ft;Ft<<=1,(Ft&3932160)===0&&(Ft=262144),tn=e}else tn=536870912;return e=Wt.current,e!==null&&(e.flags|=32),tn}function Jt(e,t,n){(e===ct&&(tt===2||tt===9)||e.cancelPendingCommit!==null)&&(wo(e,0),fa(e,Ve,tn,!1)),Eo(e,n),(($e&2)===0||e!==ct)&&(e===ct&&(($e&2)===0&&(La|=n),yt===4&&fa(e,Ve,tn,!1)),Bn(e))}function mf(e,t,n){if(($e&6)!==0)throw Error(d(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ka(e,t),l=a?jh(e,t):Bi(e,t,!0),s=a;do{if(l===0){xo&&!a&&fa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!kh(n)){l=Bi(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var u=e;l=ul;var m=u.current.memoizedState.isDehydrated;if(m&&(wo(u,r).flags|=256),r=Bi(u,r,!1),r!==2){if(wi&&!m){u.errorRecoveryDisabledLanes|=s,La|=s,l=4;break e}s=Zt,Zt=l,s!==null&&(Zt===null?Zt=s:Zt.push.apply(Zt,s))}l=r}if(s=!1,l!==2)continue}}if(l===1){wo(e,0),fa(e,t,0,!0);break}e:{switch(a=e,s=l,s){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:fa(a,t,tn,!ia);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(l=ps+300-Ee(),10<l)){if(fa(a,t,tn,!ia),Va(a,0,!0)!==0)break e;Zn=t,a.timeoutHandle=Kf(hf.bind(null,a,n,Zt,hs,Si,t,tn,La,yo,ia,s,"Throttled",-0,0),l);break e}hf(a,n,Zt,hs,Si,t,tn,La,yo,ia,s,null,-0,0)}}break}while(!0);Bn(e)}function hf(e,t,n,a,l,s,r,u,m,D,z,_,C,B){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:En},sf(t,s,_);var me=(s&62914560)===s?ps-Ee():(s&4194048)===s?df-Ee():0;if(me=lv(_,me),me!==null){Zn=s,e.cancelPendingCommit=me(jf.bind(null,e,t,s,n,a,l,r,u,m,z,_,null,C,B)),fa(e,s,r,!D);return}}jf(e,t,s,n,a,l,r,u,m)}function kh(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],s=l.getSnapshot;l=l.value;try{if(!It(s(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fa(e,t,n,a){t&=~ji,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var s=31-Bt(l),r=1<<s;a[s]=-1,l&=~r}n!==0&&Sc(e,n,t)}function vs(){return($e&6)===0?(fl(0),!1):!0}function Ai(){if(Ge!==null){if(tt===0)var e=Ge.return;else e=Ge,_n=za=null,Xr(e),fo=null,Jo=0,e=Ge;for(;e!==null;)Kd(e.alternate,e),e=e.return;Ge=null}}function wo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Zn=0,Ai(),ct=e,Ge=n=On(e.current,null),Ve=t,tt=0,en=null,ia=!1,xo=ka(e,t),wi=!1,yo=tn=ji=La=ca=yt=0,Zt=ul=null,Si=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-Bt(a),s=1<<l;t|=e[l],a&=~s}return Qn=t,Ul(),n}function vf(e,t){Re=null,k.H=nl,t===uo||t===Kl?(t=Nu(),tt=3):t===Er?(t=Nu(),tt=4):tt=t===si?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,en=t,Ge===null&&(yt=1,ls(e,rn(t,e.current)))}function gf(){var e=Wt.current;return e===null?!0:(Ve&4194048)===Ve?fn===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===fn:!1}function bf(){var e=k.H;return k.H=nl,e===null?nl:e}function xf(){var e=k.A;return k.A=xh,e}function gs(){yt=4,ia||(Ve&4194048)!==Ve&&Wt.current!==null||(xo=!0),(ca&134217727)===0&&(La&134217727)===0||ct===null||fa(ct,Ve,tn,!1)}function Bi(e,t,n){var a=$e;$e|=2;var l=bf(),s=xf();(ct!==e||Ve!==t)&&(hs=null,wo(e,t)),t=!1;var r=yt;e:do try{if(tt!==0&&Ge!==null){var u=Ge,m=en;switch(tt){case 8:Ai(),r=6;break e;case 3:case 2:case 9:case 6:Wt.current===null&&(t=!0);var D=tt;if(tt=0,en=null,jo(e,u,m,D),n&&xo){r=0;break e}break;default:D=tt,tt=0,en=null,jo(e,u,m,D)}}wh(),r=yt;break}catch(z){vf(e,z)}while(!0);return t&&e.shellSuspendCounter++,_n=za=null,$e=a,k.H=l,k.A=s,Ge===null&&(ct=null,Ve=0,Ul()),r}function wh(){for(;Ge!==null;)yf(Ge)}function jh(e,t){var n=$e;$e|=2;var a=bf(),l=xf();ct!==e||Ve!==t?(hs=null,ms=Ee()+500,wo(e,t)):xo=ka(e,t);e:do try{if(tt!==0&&Ge!==null){t=Ge;var s=en;t:switch(tt){case 1:tt=0,en=null,jo(e,t,s,1);break;case 2:case 9:if(Bu(s)){tt=0,en=null,kf(t);break}t=function(){tt!==2&&tt!==9||ct!==e||(tt=7),Bn(e)},s.then(t,t);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:Bu(s)?(tt=0,en=null,kf(t)):(tt=0,en=null,jo(e,t,s,7));break;case 5:var r=null;switch(Ge.tag){case 26:r=Ge.memoizedState;case 5:case 27:var u=Ge;if(r?sp(r):u.stateNode.complete){tt=0,en=null;var m=u.sibling;if(m!==null)Ge=m;else{var D=u.return;D!==null?(Ge=D,bs(D)):Ge=null}break t}}tt=0,en=null,jo(e,t,s,5);break;case 6:tt=0,en=null,jo(e,t,s,6);break;case 8:Ai(),yt=6;break e;default:throw Error(d(462))}}Sh();break}catch(z){vf(e,z)}while(!0);return _n=za=null,k.H=a,k.A=l,$e=n,Ge!==null?0:(ct=null,Ve=0,Ul(),yt)}function Sh(){for(;Ge!==null&&!Ie();)yf(Ge)}function yf(e){var t=Vd(e.alternate,e,Qn);e.memoizedProps=e.pendingProps,t===null?bs(e):Ge=t}function kf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ud(n,t,t.pendingProps,t.type,void 0,Ve);break;case 11:t=Ud(n,t,t.pendingProps,t.type.render,t.ref,Ve);break;case 5:Xr(t);default:Kd(n,t),t=Ge=bu(t,Qn),t=Vd(n,t,Qn)}e.memoizedProps=e.pendingProps,t===null?bs(e):Ge=t}function jo(e,t,n,a){_n=za=null,Xr(t),fo=null,Jo=0;var l=t.return;try{if(fh(e,l,t,n,Ve)){yt=1,ls(e,rn(n,e.current)),Ge=null;return}}catch(s){if(l!==null)throw Ge=l,s;yt=1,ls(e,rn(n,e.current)),Ge=null;return}t.flags&32768?(Ke||a===1?e=!0:xo||(Ve&536870912)!==0?e=!1:(ia=e=!0,(a===2||a===9||a===3||a===6)&&(a=Wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),wf(t,e)):bs(t)}function bs(e){var t=e;do{if((t.flags&32768)!==0){wf(t,ia);return}e=t.return;var n=hh(t.alternate,t,Qn);if(n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);yt===0&&(yt=5)}function wf(e,t){do{var n=vh(e.alternate,e);if(n!==null){n.flags&=32767,Ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ge=e;return}Ge=e=n}while(e!==null);yt=6,Ge=null}function jf(e,t,n,a,l,s,r,u,m){e.cancelPendingCommit=null;do xs();while(zt!==0);if(($e&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(s=t.lanes|t.childLanes,s|=gr,am(e,n,s,r,u,m),e===ct&&(Ge=ct=null,Ve=0),ko=t,da=e,Zn=n,Ti=s,Di=l,ff=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ah(it,function(){return Af(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,l=O.p,O.p=2,r=$e,$e|=4;try{gh(e,t,n)}finally{$e=r,O.p=l,k.T=a}}zt=1,Sf(),Tf(),Df()}}function Sf(){if(zt===1){zt=0;var e=da,t=ko,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var a=O.p;O.p=2;var l=$e;$e|=4;try{af(t,e);var s=Yi,r=cu(e.containerInfo),u=s.focusedElem,m=s.selectionRange;if(r!==u&&u&&u.ownerDocument&&iu(u.ownerDocument.documentElement,u)){if(m!==null&&fr(u)){var D=m.start,z=m.end;if(z===void 0&&(z=D),"selectionStart"in u)u.selectionStart=D,u.selectionEnd=Math.min(z,u.value.length);else{var _=u.ownerDocument||document,C=_&&_.defaultView||window;if(C.getSelection){var B=C.getSelection(),me=u.textContent.length,Te=Math.min(m.start,me),rt=m.end===void 0?Te:Math.min(m.end,me);!B.extend&&Te>rt&&(r=rt,rt=Te,Te=r);var x=ru(u,Te),h=ru(u,rt);if(x&&h&&(B.rangeCount!==1||B.anchorNode!==x.node||B.anchorOffset!==x.offset||B.focusNode!==h.node||B.focusOffset!==h.offset)){var S=_.createRange();S.setStart(x.node,x.offset),B.removeAllRanges(),Te>rt?(B.addRange(S),B.extend(h.node,h.offset)):(S.setEnd(h.node,h.offset),B.addRange(S))}}}}for(_=[],B=u;B=B.parentNode;)B.nodeType===1&&_.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<_.length;u++){var N=_[u];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Ns=!!Gi,Yi=Gi=null}finally{$e=l,O.p=a,k.T=n}}e.current=t,zt=2}}function Tf(){if(zt===2){zt=0;var e=da,t=ko,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var a=O.p;O.p=2;var l=$e;$e|=4;try{Wd(e,t.alternate,t)}finally{$e=l,O.p=a,k.T=n}}zt=3}}function Df(){if(zt===4||zt===3){zt=0,ge();var e=da,t=ko,n=Zn,a=ff;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?zt=5:(zt=0,ko=da=null,Cf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ua=null),Zs(n),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(gn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=k.T,l=O.p,O.p=2,k.T=null;try{for(var s=e.onRecoverableError,r=0;r<a.length;r++){var u=a[r];s(u.value,{componentStack:u.stack})}}finally{k.T=t,O.p=l}}(Zn&3)!==0&&xs(),Bn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Ci?dl++:(dl=0,Ci=e):dl=0,fl(0)}}function Cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qo(t)))}function xs(){return Sf(),Tf(),Df(),Af()}function Af(){if(zt!==5)return!1;var e=da,t=Ti;Ti=0;var n=Zs(Zn),a=k.T,l=O.p;try{O.p=32>n?32:n,k.T=null,n=Di,Di=null;var s=da,r=Zn;if(zt=0,ko=da=null,Zn=0,($e&6)!==0)throw Error(d(331));var u=$e;if($e|=4,cf(s.current),lf(s,s.current,r,n),$e=u,fl(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(gn,s)}catch{}return!0}finally{O.p=l,k.T=a,Cf(e,t)}}function Bf(e,t,n){t=rn(n,t),t=li(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(Eo(e,2),Bn(e))}function nt(e,t,n){if(e.tag===3)Bf(e,e,n);else for(;t!==null;){if(t.tag===3){Bf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ua===null||!ua.has(a))){e=rn(n,e),n=Bd(2),a=oa(t,n,2),a!==null&&(zd(n,a,t,e),Eo(a,2),Bn(a));break}}t=t.return}}function zi(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new yh;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(wi=!0,l.add(n),e=Th.bind(null,e,t,n),t.then(e,e))}function Th(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ct===e&&(Ve&n)===n&&(yt===4||yt===3&&(Ve&62914560)===Ve&&300>Ee()-ps?($e&2)===0&&wo(e,0):ji|=n,yo===Ve&&(yo=0)),Bn(e)}function zf(e,t){t===0&&(t=wa()),e=Ca(e,t),e!==null&&(Eo(e,t),Bn(e))}function Dh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zf(e,n)}function Ch(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(t),zf(e,n)}function Ah(e,t){return fe(e,t)}var ys=null,So=null,Ni=!1,ks=!1,Ei=!1,pa=0;function Bn(e){e!==So&&e.next===null&&(So===null?ys=So=e:So=So.next=e),ks=!0,Ni||(Ni=!0,zh())}function fl(e,t){if(!Ei&&ks){Ei=!0;do for(var n=!1,a=ys;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var s=0;else{var r=a.suspendedLanes,u=a.pingedLanes;s=(1<<31-Bt(42|e)+1)-1,s&=l&~(r&~u),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Of(a,s))}else s=Ve,s=Va(a,a===ct?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||ka(a,s)||(n=!0,Of(a,s));a=a.next}while(n);Ei=!1}}function Bh(){Nf()}function Nf(){ks=Ni=!1;var e=0;pa!==0&&Gh()&&(e=pa);for(var t=Ee(),n=null,a=ys;a!==null;){var l=a.next,s=Ef(a,t);s===0?(a.next=null,n===null?ys=l:n.next=l,l===null&&(So=n)):(n=a,(e!==0||(s&3)!==0)&&(ks=!0)),a=l}zt!==0&&zt!==5||fl(e),pa!==0&&(pa=0)}function Ef(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Bt(s),u=1<<r,m=l[r];m===-1?((u&n)===0||(u&a)!==0)&&(l[r]=Xs(u,t)):m<=t&&(e.expiredLanes|=u),s&=~u}if(t=ct,n=Ve,n=Va(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(tt===2||tt===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ze(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ka(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ze(a),Zs(n)){case 2:case 8:n=ot;break;case 32:n=it;break;case 268435456:n=Le;break;default:n=it}return a=Mf.bind(null,e),n=fe(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ze(a),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(zt!==0&&zt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xs()&&e.callbackNode!==n)return null;var a=Ve;return a=Va(e,e===ct?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(mf(e,a,t),Ef(e,Ee()),e.callbackNode!=null&&e.callbackNode===n?Mf.bind(null,e):null)}function Of(e,t){if(xs())return null;mf(e,t,!0)}function zh(){qh(function(){($e&6)!==0?fe(et,Bh):Nf()})}function Mi(){if(pa===0){var e=io;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),pa=e}return pa}function Rf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bl(""+e)}function _f(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Nh(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var s=Rf((l[qt]||null).action),r=a.submitter;r&&(t=(t=r[qt]||null)?Rf(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var u=new Ml("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pa!==0){var m=r?_f(l,r):new FormData(l);Pr(n,{pending:!0,data:m,method:l.method,action:s},null,m)}}else typeof s=="function"&&(u.preventDefault(),m=r?_f(l,r):new FormData(l),Pr(n,{pending:!0,data:m,method:l.method,action:s},s,m))},currentTarget:l}]})}}for(var Oi=0;Oi<vr.length;Oi++){var Ri=vr[Oi],Eh=Ri.toLowerCase(),Mh=Ri[0].toUpperCase()+Ri.slice(1);xn(Eh,"on"+Mh)}xn(fu,"onAnimationEnd"),xn(pu,"onAnimationIteration"),xn(mu,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(Fm,"onTransitionRun"),xn(Im,"onTransitionStart"),xn($m,"onTransitionCancel"),xn(hu,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ja("onBeforeInput",["compositionend","keypress","textInput","paste"]),ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function Uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var r=a.length-1;0<=r;r--){var u=a[r],m=u.instance,D=u.currentTarget;if(u=u.listener,m!==s&&l.isPropagationStopped())break e;s=u,l.currentTarget=D;try{s(l)}catch(z){_l(z)}l.currentTarget=null,s=m}else for(r=0;r<a.length;r++){if(u=a[r],m=u.instance,D=u.currentTarget,u=u.listener,m!==s&&l.isPropagationStopped())break e;s=u,l.currentTarget=D;try{s(l)}catch(z){_l(z)}l.currentTarget=null,s=m}}}}function Ye(e,t){var n=t[Js];n===void 0&&(n=t[Js]=new Set);var a=e+"__bubble";n.has(a)||(Hf(t,e,2,!1),n.add(a))}function _i(e,t,n){var a=0;t&&(a|=4),Hf(n,e,a,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function Ui(e){if(!e[ws]){e[ws]=!0,zc.forEach(function(n){n!=="selectionchange"&&(Oh.has(n)||_i(n,!1,e),_i(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,_i("selectionchange",!1,t))}}function Hf(e,t,n,a){switch(pp(t)){case 2:var l=iv;break;case 8:l=cv;break;default:l=Wi}n=l.bind(null,t,n,e),l=void 0,!ar||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Hi(e,t,n,a,l){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var u=a.stateNode.containerInfo;if(u===l)break;if(r===4)for(r=a.return;r!==null;){var m=r.tag;if((m===3||m===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;u!==null;){if(r=Ka(u),r===null)return;if(m=r.tag,m===5||m===6||m===26||m===27){a=s=r;continue e}u=u.parentNode}}a=a.return}qc(function(){var D=s,z=tr(n),_=[];e:{var C=vu.get(e);if(C!==void 0){var B=Ml,me=e;switch(e){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":B=Cm;break;case"focusin":me="focus",B=rr;break;case"focusout":me="blur",B=rr;break;case"beforeblur":case"afterblur":B=rr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=zm;break;case fu:case pu:case mu:B=bm;break;case hu:B=Em;break;case"scroll":case"scrollend":B=pm;break;case"wheel":B=Om;break;case"copy":case"cut":case"paste":B=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Zc;break;case"toggle":case"beforetoggle":B=_m}var Te=(t&4)!==0,rt=!Te&&(e==="scroll"||e==="scrollend"),x=Te?C!==null?C+"Capture":null:C;Te=[];for(var h=D,S;h!==null;){var N=h;if(S=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||S===null||x===null||(N=Ro(h,x),N!=null&&Te.push(ml(h,N,S))),rt)break;h=h.return}0<Te.length&&(C=new B(C,me,null,n,z),_.push({event:C,listeners:Te}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",C&&n!==er&&(me=n.relatedTarget||n.fromElement)&&(Ka(me)||me[Xa]))break e;if((B||C)&&(C=z.window===z?z:(C=z.ownerDocument)?C.defaultView||C.parentWindow:window,B?(me=n.relatedTarget||n.toElement,B=D,me=me?Ka(me):null,me!==null&&(rt=b(me),Te=me.tag,me!==rt||Te!==5&&Te!==27&&Te!==6)&&(me=null)):(B=null,me=D),B!==me)){if(Te=Kc,N="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Te=Zc,N="onPointerLeave",x="onPointerEnter",h="pointer"),rt=B==null?C:Oo(B),S=me==null?C:Oo(me),C=new Te(N,h+"leave",B,n,z),C.target=rt,C.relatedTarget=S,N=null,Ka(z)===D&&(Te=new Te(x,h+"enter",me,n,z),Te.target=S,Te.relatedTarget=rt,N=Te),rt=N,B&&me)t:{for(Te=Rh,x=B,h=me,S=0,N=x;N;N=Te(N))S++;N=0;for(var we=h;we;we=Te(we))N++;for(;0<S-N;)x=Te(x),S--;for(;0<N-S;)h=Te(h),N--;for(;S--;){if(x===h||h!==null&&x===h.alternate){Te=x;break t}x=Te(x),h=Te(h)}Te=null}else Te=null;B!==null&&Lf(_,C,B,Te,!1),me!==null&&rt!==null&&Lf(_,rt,me,Te,!0)}}e:{if(C=D?Oo(D):window,B=C.nodeName&&C.nodeName.toLowerCase(),B==="select"||B==="input"&&C.type==="file")var Ze=tu;else if(Pc(C))if(nu)Ze=Qm;else{Ze=Xm;var be=Vm}else B=C.nodeName,!B||B.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Ps(D.elementType)&&(Ze=tu):Ze=Km;if(Ze&&(Ze=Ze(e,D))){eu(_,Ze,n,z);break e}be&&be(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Ws(C,"number",C.value)}switch(be=D?Oo(D):window,e){case"focusin":(Pc(be)||be.contentEditable==="true")&&(eo=be,pr=D,Vo=null);break;case"focusout":Vo=pr=eo=null;break;case"mousedown":mr=!0;break;case"contextmenu":case"mouseup":case"dragend":mr=!1,uu(_,n,z);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":uu(_,n,z)}var Ue;if(cr)e:{switch(e){case"compositionstart":var Xe="onCompositionStart";break e;case"compositionend":Xe="onCompositionEnd";break e;case"compositionupdate":Xe="onCompositionUpdate";break e}Xe=void 0}else Pa?$c(e,n)&&(Xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Xe="onCompositionStart");Xe&&(Jc&&n.locale!=="ko"&&(Pa||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&Pa&&(Ue=Vc()):($n=z,or="value"in $n?$n.value:$n.textContent,Pa=!0)),be=js(D,Xe),0<be.length&&(Xe=new Qc(Xe,e,null,n,z),_.push({event:Xe,listeners:be}),Ue?Xe.data=Ue:(Ue=Wc(n),Ue!==null&&(Xe.data=Ue)))),(Ue=Hm?Lm(e,n):Gm(e,n))&&(Xe=js(D,"onBeforeInput"),0<Xe.length&&(be=new Qc("onBeforeInput","beforeinput",null,n,z),_.push({event:be,listeners:Xe}),be.data=Ue)),Nh(_,e,D,n,z)}Uf(_,t)})}function ml(e,t,n){return{instance:e,listener:t,currentTarget:n}}function js(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Ro(e,n),l!=null&&a.unshift(ml(e,l,s)),l=Ro(e,t),l!=null&&a.push(ml(e,l,s))),e.tag===3)return a;e=e.return}return[]}function Rh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lf(e,t,n,a,l){for(var s=t._reactName,r=[];n!==null&&n!==a;){var u=n,m=u.alternate,D=u.stateNode;if(u=u.tag,m!==null&&m===a)break;u!==5&&u!==26&&u!==27||D===null||(m=D,l?(D=Ro(n,s),D!=null&&r.unshift(ml(n,D,m))):l||(D=Ro(n,s),D!=null&&r.push(ml(n,D,m)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var _h=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(_h,`
`).replace(Uh,"")}function Yf(e,t){return t=Gf(t),Gf(e)===t}function st(e,t,n,a,l,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ia(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ia(e,""+a);break;case"className":Cl(e,"class",a);break;case"tabIndex":Cl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Cl(e,n,a);break;case"style":Gc(e,a,s);break;case"data":if(t!=="object"){Cl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Bl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&st(e,t,"name",l.name,l,null),st(e,t,"formEncType",l.formEncType,l,null),st(e,t,"formMethod",l.formMethod,l,null),st(e,t,"formTarget",l.formTarget,l,null)):(st(e,t,"encType",l.encType,l,null),st(e,t,"method",l.method,l,null),st(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Bl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=En);break;case"onScroll":a!=null&&Ye("scroll",e);break;case"onScrollEnd":a!=null&&Ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Bl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ye("beforetoggle",e),Ye("toggle",e),Dl(e,"popover",a);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Dl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dm.get(n)||n,Dl(e,n,a))}}function Li(e,t,n,a,l,s){switch(n){case"style":Gc(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ia(e,a):(typeof a=="number"||typeof a=="bigint")&&Ia(e,""+a);break;case"onScroll":a!=null&&Ye("scroll",e);break;case"onScrollEnd":a!=null&&Ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=En);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),s=e[qt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Dl(e,n,a)}}}function Ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",e),Ye("load",e);var a=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:st(e,t,s,r,n,null)}}l&&st(e,t,"srcSet",n.srcSet,n,null),a&&st(e,t,"src",n.src,n,null);return;case"input":Ye("invalid",e);var u=s=r=l=null,m=null,D=null;for(a in n)if(n.hasOwnProperty(a)){var z=n[a];if(z!=null)switch(a){case"name":l=z;break;case"type":r=z;break;case"checked":m=z;break;case"defaultChecked":D=z;break;case"value":s=z;break;case"defaultValue":u=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(d(137,t));break;default:st(e,t,a,z,n,null)}}_c(e,s,u,m,D,r,l,!1);return;case"select":Ye("invalid",e),a=r=s=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":s=u;break;case"defaultValue":r=u;break;case"multiple":a=u;default:st(e,t,l,u,n,null)}t=s,n=r,e.multiple=!!a,t!=null?Fa(e,!!a,t,!1):n!=null&&Fa(e,!!a,n,!0);return;case"textarea":Ye("invalid",e),s=l=a=null;for(r in n)if(n.hasOwnProperty(r)&&(u=n[r],u!=null))switch(r){case"value":a=u;break;case"defaultValue":l=u;break;case"children":s=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:st(e,t,r,u,n,null)}Hc(e,a,l,s);return;case"option":for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null)&&(m==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":st(e,t,m,a,n,null));return;case"dialog":Ye("beforetoggle",e),Ye("toggle",e),Ye("cancel",e),Ye("close",e);break;case"iframe":case"object":Ye("load",e);break;case"video":case"audio":for(a=0;a<pl.length;a++)Ye(pl[a],e);break;case"image":Ye("error",e),Ye("load",e);break;case"details":Ye("toggle",e);break;case"embed":case"source":case"link":Ye("error",e),Ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(a=n[D],a!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:st(e,t,D,a,n,null)}return;default:if(Ps(t)){for(z in n)n.hasOwnProperty(z)&&(a=n[z],a!==void 0&&Li(e,t,z,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&st(e,t,u,a,n,null))}function Hh(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,r=null,u=null,m=null,D=null,z=null;for(B in n){var _=n[B];if(n.hasOwnProperty(B)&&_!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":m=_;default:a.hasOwnProperty(B)||st(e,t,B,null,a,_)}}for(var C in a){var B=a[C];if(_=n[C],a.hasOwnProperty(C)&&(B!=null||_!=null))switch(C){case"type":s=B;break;case"name":l=B;break;case"checked":D=B;break;case"defaultChecked":z=B;break;case"value":r=B;break;case"defaultValue":u=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(d(137,t));break;default:B!==_&&st(e,t,C,B,a,_)}}$s(e,r,u,m,D,z,s,l);return;case"select":B=r=u=C=null;for(s in n)if(m=n[s],n.hasOwnProperty(s)&&m!=null)switch(s){case"value":break;case"multiple":B=m;default:a.hasOwnProperty(s)||st(e,t,s,null,a,m)}for(l in a)if(s=a[l],m=n[l],a.hasOwnProperty(l)&&(s!=null||m!=null))switch(l){case"value":C=s;break;case"defaultValue":u=s;break;case"multiple":r=s;default:s!==m&&st(e,t,l,s,a,m)}t=u,n=r,a=B,C!=null?Fa(e,!!n,C,!1):!!a!=!!n&&(t!=null?Fa(e,!!n,t,!0):Fa(e,!!n,n?[]:"",!1));return;case"textarea":B=C=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:st(e,t,u,null,a,l)}for(r in a)if(l=a[r],s=n[r],a.hasOwnProperty(r)&&(l!=null||s!=null))switch(r){case"value":C=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==s&&st(e,t,r,l,a,s)}Uc(e,C,B);return;case"option":for(var me in n)C=n[me],n.hasOwnProperty(me)&&C!=null&&!a.hasOwnProperty(me)&&(me==="selected"?e.selected=!1:st(e,t,me,null,a,C));for(m in a)C=a[m],B=n[m],a.hasOwnProperty(m)&&C!==B&&(C!=null||B!=null)&&(m==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":st(e,t,m,C,a,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in n)C=n[Te],n.hasOwnProperty(Te)&&C!=null&&!a.hasOwnProperty(Te)&&st(e,t,Te,null,a,C);for(D in a)if(C=a[D],B=n[D],a.hasOwnProperty(D)&&C!==B&&(C!=null||B!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(d(137,t));break;default:st(e,t,D,C,a,B)}return;default:if(Ps(t)){for(var rt in n)C=n[rt],n.hasOwnProperty(rt)&&C!==void 0&&!a.hasOwnProperty(rt)&&Li(e,t,rt,void 0,a,C);for(z in a)C=a[z],B=n[z],!a.hasOwnProperty(z)||C===B||C===void 0&&B===void 0||Li(e,t,z,C,a,B);return}}for(var x in n)C=n[x],n.hasOwnProperty(x)&&C!=null&&!a.hasOwnProperty(x)&&st(e,t,x,null,a,C);for(_ in a)C=a[_],B=n[_],!a.hasOwnProperty(_)||C===B||C==null&&B==null||st(e,t,_,C,a,B)}function qf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],s=l.transferSize,r=l.initiatorType,u=l.duration;if(s&&u&&qf(r)){for(r=0,u=l.responseEnd,a+=1;a<n.length;a++){var m=n[a],D=m.startTime;if(D>u)break;var z=m.transferSize,_=m.initiatorType;z&&qf(_)&&(m=m.responseEnd,r+=z*(m<u?1:(u-D)/(m-D)))}if(--a,t+=8*(s+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gi=null,Yi=null;function Ss(e){return e.nodeType===9?e:e.ownerDocument}function Vf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vi=null;function Gh(){var e=window.event;return e&&e.type==="popstate"?e===Vi?!1:(Vi=e,!0):(Vi=null,!1)}var Kf=typeof setTimeout=="function"?setTimeout:void 0,Yh=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,qh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(Vh)}:Kf;function Vh(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function Zf(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Ao(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")hl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,hl(n);for(var s=n.firstChild;s;){var r=s.nextSibling,u=s.nodeName;s[Mo]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&hl(e.ownerDocument.body);n=l}while(n);Ao(t)}function Jf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Xi(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Xi(n),Fs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Xh(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Mo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=pn(e.nextSibling),e===null)break}return null}function Kh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pn(e.nextSibling),e===null))return null;return e}function Ff(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pn(e.nextSibling),e===null))return null;return e}function Ki(e){return e.data==="$?"||e.data==="$~"}function Qi(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Qh(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zi=null;function If(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return pn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Wf(e,t,n){switch(t=Ss(n),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fs(e)}var mn=new Map,Pf=new Set;function Ts(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jn=O.d;O.d={f:Zh,r:Jh,D:Fh,C:Ih,L:$h,m:Wh,X:ev,S:Ph,M:tv};function Zh(){var e=Jn.f(),t=vs();return e||t}function Jh(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?hd(t):Jn.r(e)}var To=typeof document>"u"?null:document;function ep(e,t,n){var a=To;if(a&&typeof t=="string"&&t){var l=ln(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Pf.has(l)||(Pf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Ut(t,"link",e),Nt(t),a.head.appendChild(t)))}}function Fh(e){Jn.D(e),ep("dns-prefetch",e,null)}function Ih(e,t){Jn.C(e,t),ep("preconnect",e,t)}function $h(e,t,n){Jn.L(e,t,n);var a=To;if(a&&e&&t){var l='link[rel="preload"][as="'+ln(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+ln(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+ln(n.imageSizes)+'"]')):l+='[href="'+ln(e)+'"]';var s=l;switch(t){case"style":s=Do(e);break;case"script":s=Co(e)}mn.has(s)||(e=M({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),mn.set(s,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(vl(s))||t==="script"&&a.querySelector(gl(s))||(t=a.createElement("link"),Ut(t,"link",e),Nt(t),a.head.appendChild(t)))}}function Wh(e,t){Jn.m(e,t);var n=To;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ln(a)+'"][href="'+ln(e)+'"]',s=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Co(e)}if(!mn.has(s)&&(e=M({rel:"modulepreload",href:e},t),mn.set(s,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gl(s)))return}a=n.createElement("link"),Ut(a,"link",e),Nt(a),n.head.appendChild(a)}}}function Ph(e,t,n){Jn.S(e,t,n);var a=To;if(a&&e){var l=Za(a).hoistableStyles,s=Do(e);t=t||"default";var r=l.get(s);if(!r){var u={loading:0,preload:null};if(r=a.querySelector(vl(s)))u.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},n),(n=mn.get(s))&&Ji(e,n);var m=r=a.createElement("link");Nt(m),Ut(m,"link",e),m._p=new Promise(function(D,z){m.onload=D,m.onerror=z}),m.addEventListener("load",function(){u.loading|=1}),m.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ds(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:u},l.set(s,r)}}}function ev(e,t){Jn.X(e,t);var n=To;if(n&&e){var a=Za(n).hoistableScripts,l=Co(e),s=a.get(l);s||(s=n.querySelector(gl(l)),s||(e=M({src:e,async:!0},t),(t=mn.get(l))&&Fi(e,t),s=n.createElement("script"),Nt(s),Ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function tv(e,t){Jn.M(e,t);var n=To;if(n&&e){var a=Za(n).hoistableScripts,l=Co(e),s=a.get(l);s||(s=n.querySelector(gl(l)),s||(e=M({src:e,async:!0,type:"module"},t),(t=mn.get(l))&&Fi(e,t),s=n.createElement("script"),Nt(s),Ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function tp(e,t,n,a){var l=(l=$.current)?Ts(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Do(n.href),n=Za(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Do(n.href);var s=Za(l).hoistableStyles,r=s.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=l.querySelector(vl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),mn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mn.set(e,n),s||nv(l,e,n,r.state))),t&&a===null)throw Error(d(528,""));return r}if(t&&a!==null)throw Error(d(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Co(n),n=Za(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Do(e){return'href="'+ln(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function np(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function nv(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ut(t,"link",n),Nt(t),e.head.appendChild(t))}function Co(e){return'[src="'+ln(e)+'"]'}function gl(e){return"script[async]"+e}function ap(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ln(n.href)+'"]');if(a)return t.instance=a,Nt(a),a;var l=M({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Nt(a),Ut(a,"style",l),Ds(a,n.precedence,e),t.instance=a;case"stylesheet":l=Do(n.href);var s=e.querySelector(vl(l));if(s)return t.state.loading|=4,t.instance=s,Nt(s),s;a=np(n),(l=mn.get(l))&&Ji(a,l),s=(e.ownerDocument||e).createElement("link"),Nt(s);var r=s;return r._p=new Promise(function(u,m){r.onload=u,r.onerror=m}),Ut(s,"link",a),t.state.loading|=4,Ds(s,n.precedence,e),t.instance=s;case"script":return s=Co(n.src),(l=e.querySelector(gl(s)))?(t.instance=l,Nt(l),l):(a=n,(l=mn.get(s))&&(a=M({},n),Fi(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Nt(l),Ut(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ds(a,n.precedence,e));return t.instance}function Ds(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,s=l,r=0;r<a.length;r++){var u=a[r];if(u.dataset.precedence===t)s=u;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ji(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fi(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cs=null;function op(e,t,n){if(Cs===null){var a=new Map,l=Cs=new Map;l.set(n,a)}else l=Cs,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[Mo]||s[Mt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var u=a.get(r);u?u.push(s):a.set(r,[s])}}return a}function lp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function av(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ov(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Do(a.href),s=t.querySelector(vl(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=As.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Nt(s);return}s=t.ownerDocument||t,a=np(a),(l=mn.get(l))&&Ji(a,l),s=s.createElement("link"),Nt(s);var r=s;r._p=new Promise(function(u,m){r.onload=u,r.onerror=m}),Ut(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=As.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ii=0;function lv(e,t){return e.stylesheets&&e.count===0&&zs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&zs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ii===0&&(Ii=62500*Lh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ii?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function As(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bs=null;function zs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bs=new Map,t.forEach(sv,e),Bs=null,As.call(e))}function sv(e,t){if(!(t.state.loading&4)){var n=Bs.get(e);if(n)var a=n.get(null);else{n=new Map,Bs.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var r=l[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}l=t.instance,r=l.getAttribute("data-precedence"),s=n.get(r)||a,s===a&&n.set(null,l),n.set(r,l),this.count++,a=As.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var bl={$$typeof:de,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function rv(e,t,n,a,l,s,r,u,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ks(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.hiddenUpdates=Ks(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function rp(e,t,n,a,l,s,r,u,m,D,z,_){return e=new rv(e,t,n,r,m,D,z,_,u),t=1,s===!0&&(t|=24),s=$t(3,null,null,t),e.current=s,s.stateNode=e,t=Br(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},Mr(s),e}function ip(e){return e?(e=ao,e):ao}function cp(e,t,n,a,l,s){l=ip(l),a.context===null?a.context=l:a.pendingContext=l,a=aa(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=oa(e,a,t),n!==null&&(Jt(n,e,t),Io(n,e,t))}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $i(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function dp(e){if(e.tag===13||e.tag===31){var t=Ca(e,67108864);t!==null&&Jt(t,e,67108864),$i(e,67108864)}}function fp(e){if(e.tag===13||e.tag===31){var t=nn();t=Qs(t);var n=Ca(e,t);n!==null&&Jt(n,e,t),$i(e,t)}}var Ns=!0;function iv(e,t,n,a){var l=k.T;k.T=null;var s=O.p;try{O.p=2,Wi(e,t,n,a)}finally{O.p=s,k.T=l}}function cv(e,t,n,a){var l=k.T;k.T=null;var s=O.p;try{O.p=8,Wi(e,t,n,a)}finally{O.p=s,k.T=l}}function Wi(e,t,n,a){if(Ns){var l=Pi(a);if(l===null)Hi(e,t,a,Es,n),mp(e,a);else if(dv(l,e,t,n,a))a.stopPropagation();else if(mp(e,a),t&4&&-1<uv.indexOf(e)){for(;l!==null;){var s=Qa(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Tn(s.pendingLanes);if(r!==0){var u=s;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var m=1<<31-Bt(r);u.entanglements[1]|=m,r&=~m}Bn(s),($e&6)===0&&(ms=Ee()+500,fl(0))}}break;case 31:case 13:u=Ca(s,2),u!==null&&Jt(u,s,2),vs(),$i(s,2)}if(s=Pi(a),s===null&&Hi(e,t,a,Es,n),s===l)break;l=s}l!==null&&a.stopPropagation()}else Hi(e,t,a,null,n)}}function Pi(e){return e=tr(e),ec(e)}var Es=null;function ec(e){if(Es=null,e=Ka(e),e!==null){var t=b(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=E(t),e!==null)return e;e=null}else if(n===31){if(e=Y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Es=e,null}function pp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case et:return 2;case ot:return 8;case it:case Ae:return 32;case Le:return 268435456;default:return 32}default:return 32}}var tc=!1,ha=null,va=null,ga=null,xl=new Map,yl=new Map,ba=[],uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mp(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":xl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(t.pointerId)}}function kl(e,t,n,a,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[l]},t!==null&&(t=Qa(t),t!==null&&dp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function dv(e,t,n,a,l){switch(t){case"focusin":return ha=kl(ha,e,t,n,a,l),!0;case"dragenter":return va=kl(va,e,t,n,a,l),!0;case"mouseover":return ga=kl(ga,e,t,n,a,l),!0;case"pointerover":var s=l.pointerId;return xl.set(s,kl(xl.get(s)||null,e,t,n,a,l)),!0;case"gotpointercapture":return s=l.pointerId,yl.set(s,kl(yl.get(s)||null,e,t,n,a,l)),!0}return!1}function hp(e){var t=Ka(e.target);if(t!==null){var n=b(t);if(n!==null){if(t=n.tag,t===13){if(t=E(n),t!==null){e.blockedOn=t,Ac(e.priority,function(){fp(n)});return}}else if(t===31){if(t=Y(n),t!==null){e.blockedOn=t,Ac(e.priority,function(){fp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pi(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);er=a,n.target.dispatchEvent(a),er=null}else return t=Qa(n),t!==null&&dp(t),e.blockedOn=n,!1;t.shift()}return!0}function vp(e,t,n){Ms(e)&&n.delete(t)}function fv(){tc=!1,ha!==null&&Ms(ha)&&(ha=null),va!==null&&Ms(va)&&(va=null),ga!==null&&Ms(ga)&&(ga=null),xl.forEach(vp),yl.forEach(vp)}function Os(e,t){e.blockedOn===t&&(e.blockedOn=null,tc||(tc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,fv)))}var Rs=null;function gp(e){Rs!==e&&(Rs=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Rs===e&&(Rs=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(ec(a||n)===null)continue;break}var s=Qa(n);s!==null&&(e.splice(t,3),t-=3,Pr(s,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Ao(e){function t(m){return Os(m,e)}ha!==null&&Os(ha,e),va!==null&&Os(va,e),ga!==null&&Os(ga,e),xl.forEach(t),yl.forEach(t);for(var n=0;n<ba.length;n++){var a=ba[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ba.length&&(n=ba[0],n.blockedOn===null);)hp(n),n.blockedOn===null&&ba.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],s=n[a+1],r=l[qt]||null;if(typeof s=="function")r||gp(n);else if(r){var u=null;if(s&&s.hasAttribute("formAction")){if(l=s,r=s[qt]||null)u=r.formAction;else if(ec(l)!==null)continue}else u=r.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),gp(n)}}}function bp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function nc(e){this._internalRoot=e}_s.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var n=t.current,a=nn();cp(n,a,e,t,null,null)},_s.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cp(e.current,2,null,e,null,null),vs(),t[Xa]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ba.length&&t!==0&&t<ba[n].priority;n++);ba.splice(n,0,e),n===0&&hp(e)}};var xp=c.version;if(xp!=="19.2.4")throw Error(d(527,xp,"19.2.4"));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=j(t),e=e!==null?H(e):null,e=e===null?null:e.stateNode,e};var pv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{gn=Us.inject(pv),At=Us}catch{}}return jl.createRoot=function(e,t){if(!y(e))throw Error(d(299));var n=!1,a="",l=Td,s=Dd,r=Cd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=rp(e,1,!1,null,null,n,a,null,l,s,r,bp),e[Xa]=t.current,Ui(e),new nc(t)},jl.hydrateRoot=function(e,t,n){if(!y(e))throw Error(d(299));var a=!1,l="",s=Td,r=Dd,u=Cd,m=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(m=n.formState)),t=rp(e,1,!0,t,n??null,a,l,m,s,r,u,bp),t.context=ip(null),n=t.current,a=nn(),a=Qs(a),l=aa(a),l.callback=null,oa(n,l,a),n=a,t.current.lanes=n,Eo(t,n),Bn(t),e[Xa]=t.current,Ui(e),new _s(t)},jl.version="19.2.4",jl}var Bp;function jv(){if(Bp)return lc.exports;Bp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),lc.exports=wv(),lc.exports}var Sv=jv(),Tv=Gp();function Sn(i,{insertAt:c}={}){if(!i||typeof document>"u")return;const p=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",c==="top"&&p.firstChild?p.insertBefore(d,p.firstChild):p.appendChild(d),d.styleSheet?d.styleSheet.cssText=i:d.appendChild(document.createTextNode(i))}Sn(`@layer components {
  :where(.oksButton) {
    --oks-button-height: 40px;
    --oks-button-padding-x: var(--oks-space-4, 16px);
    --oks-button-padding-y: var(--oks-space-2, 8px);
    --oks-button-gap: var(--oks-space-2, 8px);
    --oks-button-font-size: 14px;
    --oks-button-icon-size: 18px;
    --oks-button-radius: var(--oks-radius-md, 0.375rem);
    --oks-button-border-width: 1px;
    --oks-button-ripple-color: color-mix(in srgb, currentColor 35%, transparent);
    --oks-button-bg: transparent;
    --oks-button-fg: currentColor;
    --oks-button-border: transparent;
    --oks-button-shadow: none;
    appearance: none;
    border: var(--oks-button-border-width) solid var(--oks-button-border);
    border-radius: var(--oks-button-radius);
    background-color: var(--oks-button-bg);
    color: var(--oks-button-fg);
    box-shadow: var(--oks-button-shadow);
    font: inherit;
    font-size: var(--oks-button-font-size);
    font-weight: 400;
    line-height: 1.1;
    height: var(--oks-button-height);
    padding: var(--oks-button-padding-y) var(--oks-button-padding-x);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--oks-button-gap);
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    transition:
      background-color 140ms ease,
      border-color 140ms ease,
      box-shadow 140ms ease,
      color 140ms ease,
      opacity 140ms ease,
      transform 140ms ease;
  }
  :where(.oksButton[data-motion=reduced]) {
    transition: none;
    transform: none;
  }
  :where(.oksButton[data-full-width=true]) {
    width: 100%;
    flex: 1 1 0%;
    min-width: 0;
  }
  :where(.oksButton[data-disabled=true]),
  :where(.oksButton:disabled) {
    opacity: 0.65;
    cursor: not-allowed;
  }
  :where(.oksButton[data-radius=none]) {
    --oks-button-radius: 0;
  }
  :where(.oksButton[data-radius=sm]) {
    --oks-button-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksButton[data-radius=md]) {
    --oks-button-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksButton[data-radius=lg]) {
    --oks-button-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksButton[data-radius=full]) {
    --oks-button-radius: 9999px;
  }
  :where(.oksButton[data-focus-visible=true]),
  :where(.oksButton:focus-visible) {
    outline: 2px solid var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));
    outline-offset: 2px;
  }
  :where(.oksButton[data-size=sm]) {
    --oks-button-height: 36px;
    --oks-button-padding-x: var(--oks-space-3, 12px);
    --oks-button-padding-y: var(--oks-space-2, 8px);
    --oks-button-font-size: 13px;
    --oks-button-icon-size: 18px;
  }
  :where(.oksButton[data-size=md]) {
    --oks-button-height: 40px;
    --oks-button-padding-x: var(--oks-space-4, 16px);
    --oks-button-padding-y: var(--oks-space-2, 8px);
    --oks-button-font-size: 14px;
    --oks-button-icon-size: 20px;
  }
  :where(.oksButton[data-size=lg]) {
    --oks-button-height: 44px;
    --oks-button-padding-x: var(--oks-space-5, 20px);
    --oks-button-padding-y: var(--oks-space-3, 12px);
    --oks-button-font-size: 15px;
    --oks-button-icon-size: 22px;
  }
  :where(.oksButton[data-icon-only=true]) {
    width: var(--oks-button-height);
    padding: 0;
    flex: none;
  }
  :where(.oksButtonStartContent),
  :where(.oksButtonEndContent),
  :where(.oksButtonIconOnly) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    font-size: var(--oks-button-icon-size);
    line-height: 0;
  }
  :where(.oksButtonStartContent) :where(svg),
  :where(.oksButtonEndContent) :where(svg),
  :where(.oksButtonIconOnly) :where(svg) {
    width: 1em;
    height: 1em;
    display: block;
  }
  :where(.oksButtonLabel) {
    display: inline-block;
    min-width: 0;
  }
  :where(.oksButtonSpinnerSlot) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
  }
  :where(.oksButtonSpinner) {
    width: 1em;
    height: 1em;
    border-radius: 9999px;
    border: 2px solid color-mix(in srgb, currentColor 25%, transparent);
    border-top-color: currentColor;
    animation: oksButtonSpinner 700ms linear infinite;
  }
  @keyframes oksButtonSpinner {
    to {
      transform: rotate(360deg);
    }
  }
  :where(.oksButton[data-loading=true]) {
    cursor: progress;
  }
  :where(.oksButton[data-variant=solid]) {
    --oks-button-bg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-button-fg: #fff;
    --oks-button-border: transparent;
    --oks-button-ripple-color: color-mix(in srgb, white 55%, transparent);
  }
  :where(.oksButton[data-variant=solid][data-hover=true]:not([data-disabled=true])) {
    --oks-button-bg: var(--oks-button-tone-hover, var(--oks-color-primary-600, #2563eb));
  }
  :where(.oksButton[data-variant=solid][data-pressed=true]:not([data-disabled=true])) {
    --oks-button-bg: var(--oks-button-tone-active, var(--oks-color-primary-700, #1d4ed8));
  }
  :where(.oksButton[data-variant=shadow]) {
    --oks-button-bg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-button-fg: #fff;
    --oks-button-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);
    --oks-button-ripple-color: color-mix(in srgb, white 55%, transparent);
  }
  :where(.oksButton[data-variant=shadow][data-hover=true]:not([data-disabled=true])) {
    --oks-button-bg: var(--oks-button-tone-hover, var(--oks-color-primary-600, #2563eb));
    --oks-button-shadow: 0 12px 28px rgba(0, 0, 0, 0.26);
  }
  :where(.oksButton[data-variant=bordered]) {
    --oks-button-bg: transparent;
    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-button-border: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));
  }
  :where(.oksButton[data-variant=bordered][data-hover=true]:not([data-disabled=true])) {
    --oks-button-bg: var(--oks-button-tone-50, var(--oks-color-primary-50, #eff6ff));
  }
  :where(.oksButton[data-variant=bordered][data-pressed=true]:not([data-disabled=true])) {
    --oks-button-bg: var(--oks-button-tone-100, var(--oks-color-primary-100, #dbeafe));
  }
  :where(.oksButton[data-variant=flat]) {
    --oks-button-bg: var(--oks-button-tone-50, var(--oks-color-primary-50, #eff6ff));
    --oks-button-fg: var(--oks-button-tone-700, var(--oks-color-primary-700, #1d4ed8));
  }
  :where(.oksButton[data-variant=flat][data-hover=true]:not([data-disabled=true])) {
    --oks-button-bg: var(--oks-button-tone-100, var(--oks-color-primary-100, #dbeafe));
  }
  :where(.oksButton[data-variant=flat][data-pressed=true]:not([data-disabled=true])) {
    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 20%, transparent );
  }
  :where(.oksButton[data-variant=light]) {
    --oks-button-bg: transparent;
    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));
  }
  :where(.oksButton[data-variant=light][data-hover=true]:not([data-disabled=true])) {
    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 12%, transparent );
  }
  :where(.oksButton[data-variant=light][data-pressed=true]:not([data-disabled=true])) {
    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 18%, transparent );
  }
  :where(.oksButton[data-variant=faded]) {
    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 10%, transparent );
    --oks-button-fg: var(--oks-button-tone-700, var(--oks-color-primary-700, #1d4ed8));
    --oks-button-border: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 22%, transparent );
  }
  :where(.oksButton[data-variant=ghost]) {
    --oks-button-bg: transparent;
    --oks-button-fg: var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-button-border: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 35%, transparent );
  }
  :where(.oksButton[data-variant=ghost][data-hover=true]:not([data-disabled=true])) {
    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 10%, transparent );
  }
  :where(.oksButton[data-variant=ghost][data-pressed=true]:not([data-disabled=true])) {
    --oks-button-bg: color-mix( in srgb, var(--oks-button-tone, var(--oks-color-primary-500, #3b82f6)) 16%, transparent );
  }
  :where(.oksButtonRipple) {
    position: absolute;
    border-radius: 9999px;
    background:
      radial-gradient(
        circle,
        var(--oks-button-ripple-color, rgba(255, 255, 255, 0.35)) 0%,
        color-mix(in srgb, var(--oks-button-ripple-color, rgba(255, 255, 255, 0.35)) 65%, transparent) 60%,
        transparent 75%);
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    pointer-events: none;
    z-index: 0;
    will-change: transform, opacity;
    animation: oksButtonRipple 600ms ease-out;
  }
  :where(.oksButton) :where(.oksButtonStartContent),
  :where(.oksButton) :where(.oksButtonEndContent),
  :where(.oksButton) :where(.oksButtonIconOnly),
  :where(.oksButton) :where(.oksButtonSpinnerSlot),
  :where(.oksButton) :where(.oksButtonLabel) {
    position: relative;
    z-index: 1;
  }
}
@keyframes oksButtonRipple {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.45;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  :where(.oksButton) {
    transition: none;
    transform: none;
  }
  :where(.oksButtonRipple) {
    display: none;
  }
  :where(.oksButtonSpinner) {
    animation: none;
  }
}
`);function Dv(i,c){return[i,typeof c=="string"?c:""].filter(Boolean).join(" ")}function Bo(i,c){const p=`var(--oks-color-default-${c}, var(--oks-color-primary-${c}, #3b82f6))`;return i==="default"?p:`var(--oks-color-${i}-${c}, ${p})`}var T=g.forwardRef((i,c)=>{const{children:p,variant:d="solid",size:y="md",color:b="default",radius:E="md",startContent:Y,endContent:A,spinner:j,spinnerPlacement:H="start",fullWidth:M=!1,isIconOnly:G=!1,isDisabled:I=!1,isLoading:U=!1,disableRipple:te=!1,disableAnimation:pe=!1,className:W,type:ke="button",style:de,disabled:P,onMouseDown:ne,onPointerDown:ie,onPointerEnter:ee,onPointerLeave:q,onPointerUp:X,onPointerCancel:he,onClick:ye,onKeyDown:ce,onKeyUp:ve,onPress:Se,onPressStart:ae,onPressEnd:k,onPressChange:O,onPressUp:K,onFocus:xe,onBlur:ue,...f}=i,v=P||I,[R,w]=g.useState([]),Z=g.useRef(!1),$=f["aria-label"];f["aria-labelledby"];const le=typeof $=="string"?$:void 0,De={"--oks-button-tone":Bo(b,500),"--oks-button-tone-hover":Bo(b,600),"--oks-button-tone-active":Bo(b,700),"--oks-button-tone-50":Bo(b,50),"--oks-button-tone-100":Bo(b,100),"--oks-button-tone-700":Bo(b,700)},V=()=>{const re=globalThis?.crypto?.randomUUID?.();return typeof re=="string"?re:`${Date.now()}-${Math.random()}`},se=typeof globalThis.matchMedia=="function"&&globalThis.matchMedia("(prefers-reduced-motion: reduce)")?.matches,[Ce,Ne]=g.useState(!1),[He,Qe]=g.useState(!1),[Fe,Q]=g.useState(!1),[F,Be]=g.useState(!1),J=re=>{v||U||(F||(ae?.(re),O?.(!0)),Be(!0))},fe=re=>{F&&(k?.(re),O?.(!1)),Be(!1)},ze=g.useCallback((re,gt,bt)=>{if(pe||se)return;const Ft=re.getBoundingClientRect(),bn=Math.max(gt,Ft.width-gt),Tn=Math.max(bt,Ft.height-bt),Va=Math.ceil(Math.sqrt(bn*bn+Tn*Tn)*2),ka=V();w(Xs=>{const wa=[...Xs,{id:ka,x:gt,y:bt,size:Va}];return wa.length>10&&wa.splice(0,wa.length-10),wa})},[pe,se]),Ie=g.useCallback(re=>{w(gt=>gt.filter(bt=>bt.id!==re))},[]),ge=re=>{if(J(re),!v&&!U&&!te){Z.current=!0,globalThis.setTimeout(()=>{Z.current=!1},0);const gt=re.currentTarget,bt=gt.getBoundingClientRect();if(typeof re.clientX=="number"&&typeof re.clientY=="number"){const Ft=re.clientX-bt.left,bn=re.clientY-bt.top;ze(gt,Ft,bn)}}ie?.(re)},Ee=re=>{if(!v&&!U&&!te){if(Z.current){ne?.(re);return}const gt=re.currentTarget,bt=gt.getBoundingClientRect(),Ft=re.clientX-bt.left,bn=re.clientY-bt.top;ze(gt,Ft,bn)}ne?.(re)},_e=re=>{if((re.key==="Enter"||re.key===" ")&&J(re),!v&&!U&&!te&&(re.key==="Enter"||re.key===" ")){const gt=re.currentTarget,bt=gt.getBoundingClientRect();ze(gt,bt.width/2,bt.height/2)}ce?.(re)},et=re=>{(re.key==="Enter"||re.key===" ")&&(!v&&!U&&K?.(re),fe(re)),ve?.(re)},ot=re=>{if(v||U){re.preventDefault(),re.stopPropagation();return}Se?.(re),ye?.(re)},it=re=>{Ne(!0),ee?.(re)},Ae=re=>{Ne(!1),fe(re),q?.(re)},Le=re=>{!v&&!U&&K?.(re),fe(re),X?.(re)},Ct=re=>{fe(re),he?.(re)},vn=re=>{Qe(!1),Q(!1),fe(re),ue?.(re)},gn=re=>{Qe(!0);const gt=re?.currentTarget,bt=typeof gt?.matches=="function"?gt.matches(":focus-visible"):!1;Q(bt),xe?.(re)},Lt=j??o.jsx("span",{className:"oksButtonSpinner","aria-hidden":"true"}),Bt=G&&U;return o.jsxs("button",{...f,"aria-label":le,ref:c,type:ke,disabled:v,onClick:ot,onMouseDown:Ee,onPointerDown:ge,onPointerEnter:it,onPointerLeave:Ae,onPointerUp:Le,onPointerCancel:Ct,onKeyDown:_e,onKeyUp:et,onFocus:gn,onBlur:vn,"data-hover":Ce?"true":"false","data-focus":He?"true":"false","data-focus-visible":Fe?"true":"false","data-disabled":v?"true":"false","data-pressed":F?"true":"false","data-loading":U?"true":"false","data-motion":pe||se?"reduced":"default","data-variant":d,"data-color":b,"data-size":y,"data-radius":E,"data-icon-only":G?"true":"false","data-full-width":M?"true":"false",className:Dv("oksButton",W),style:{...De,...de},children:[R.map(re=>o.jsx("span",{className:"oksButtonRipple","aria-hidden":"true",style:{left:`${re.x}px`,top:`${re.y}px`,width:`${re.size}px`,height:`${re.size}px`},onAnimationEnd:()=>Ie(re.id)},re.id)),U&&H==="start"&&!Bt?o.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"start",children:Lt}):null,Y!==void 0?o.jsx("span",{className:"oksButtonStartContent",children:Y}):null,Bt?o.jsx("span",{className:"oksButtonIconOnly","aria-hidden":"true",children:Lt}):G?o.jsx("span",{className:"oksButtonIconOnly",children:p}):p!=null?o.jsx("span",{className:"oksButtonLabel",children:p}):null,A!==void 0?o.jsx("span",{className:"oksButtonEndContent",children:A}):null,U&&H==="end"&&!Bt?o.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"end",children:Lt}):null]})});T.displayName="Button";Sn(`@layer components {
  :where(.oksButtonGroup) {
    display: inline-flex;
    align-items: stretch;
  }
  :where(.oksButtonGroup[data-full-width=true]) {
    width: 100%;
  }
  :where(.oksButtonGroup) > :where(.oksButton) {
    border-radius: 0;
  }
  :where(.oksButtonGroup) > :where(.oksButton:not(:first-child)) {
    margin-left: calc(var(--oks-button-border-width, 1px) * -1);
  }
  :where(.oksButtonGroup) > :where(.oksButton:only-child) {
    border-radius: var(--oks-button-radius);
  }
  :where(.oksButtonGroup) > :where(.oksButton:first-child) {
    border-top-left-radius: var(--oks-button-radius);
    border-bottom-left-radius: var(--oks-button-radius);
  }
  :where(.oksButtonGroup) > :where(.oksButton:last-child) {
    border-top-right-radius: var(--oks-button-radius);
    border-bottom-right-radius: var(--oks-button-radius);
  }
  :where(.oksButtonGroup[data-full-width=true]) > :where(.oksButton) {
    flex: 1 1 0%;
    min-width: 0;
  }
  :where(.oksButtonGroup) > :where(.oksButton[data-hover=true]),
  :where(.oksButtonGroup) > :where(.oksButton[data-focus-visible=true]) {
    z-index: 1;
  }
}
`);function Cv(i,c){return[i,typeof c=="string"?c:""].filter(Boolean).join(" ")}var bc=g.forwardRef((i,c)=>{const{children:p,variant:d="solid",color:y="default",size:b="md",radius:E="md",fullWidth:Y=!1,isDisabled:A=!1,className:j,role:H="group",style:M,...G}=i,I=g.Children.map(p,U=>{if(!g.isValidElement(U)||U.type!==T)return U;const te={};return U.props.variant===void 0&&(te.variant=d),U.props.color===void 0&&(te.color=y),U.props.size===void 0&&(te.size=b),U.props.radius===void 0&&(te.radius=E),U.props.fullWidth===void 0&&(te.fullWidth=Y),U.props.isDisabled===void 0&&(te.isDisabled=A),g.cloneElement(U,te)});return o.jsx("div",{...G,ref:c,role:H,"data-variant":d,"data-color":y,"data-size":b,"data-radius":E,"data-full-width":Y?"true":"false","data-disabled":A?"true":"false",className:Cv("oksButtonGroup",j),style:M,children:I})});bc.displayName="ButtonGroup";function Yp(){const[i,c]=g.useState(!1);return g.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const p=window.matchMedia("(prefers-reduced-motion: reduce)"),d=()=>c(!!p.matches);return d(),typeof p.addEventListener=="function"?(p.addEventListener("change",d),()=>p.removeEventListener("change",d)):(p.addListener(d),()=>p.removeListener(d))},[]),i}function kc({children:i,container:c}){if(typeof document>"u")return null;const p=c??document.body;return p?Tv.createPortal(i,p):null}function qp({type:i,size:c=18,...p}){const d={width:c,height:c,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,...p};return i==="default"?o.jsxs("svg",{...d,children:[o.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"M10 10h.01",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round"})]}):i==="success"?o.jsxs("svg",{...d,children:[o.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"m6.1 10.3 2.2 2.2 5.6-5.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}):i==="warning"?o.jsxs("svg",{...d,children:[o.jsx("path",{d:"M10 2.2 18 17.8H2L10 2.2Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 7v4.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),o.jsx("path",{d:"M10 14.2h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):i==="error"?o.jsxs("svg",{...d,children:[o.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"M7.2 7.2 12.8 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),o.jsx("path",{d:"M12.8 7.2 7.2 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}):i==="loading"?o.jsx("svg",{...d,children:o.jsx("path",{d:"M10 3.2a6.8 6.8 0 1 0 6.8 6.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}):i==="info"?o.jsxs("svg",{...d,children:[o.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"M10 8.2V14",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),o.jsx("path",{d:"M10 6h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):null}function Vp({size:i=16,...c}){return o.jsxs("svg",{width:i,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...c,children:[o.jsx("path",{d:"M6.2 6.2 13.8 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),o.jsx("path",{d:"M13.8 6.2 6.2 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}function Av(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}var Xp=g.forwardRef(({ariaLabel:i,iconSize:c=16,icon:p,iconClassName:d,...y},b)=>{const E=p===void 0?o.jsx(Vp,{size:c,className:d}):d?g.isValidElement(p)?g.cloneElement(p,{className:Av(p.props.className,d)}):o.jsx("span",{className:d,children:p}):p;return o.jsx("button",{ref:b,type:"button","aria-label":i,...y,children:E})});Xp.displayName="CloseButton";Sn(`@layer components {
  :where(.oksToastViewport) {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    padding: calc(var(--oks-space-2, 8px) + var(--oks-toast-offset, 0px));
    pointer-events: none;
  }
  :where(.oksToastViewport[data-position^=top]) {
    align-items: flex-start;
  }
  :where(.oksToastViewport[data-position^=bottom]) {
    align-items: flex-end;
  }
  :where(.oksToastViewport[data-position$=left]) {
    justify-content: flex-start;
  }
  :where(.oksToastViewport[data-position$=right]) {
    justify-content: flex-end;
  }
  :where(.oksToastViewport[data-position$=center]) {
    justify-content: center;
  }
  :where(.oksToastStack) {
    --oks-toast-stack-dir: -1;
    --oks-toast-stack-collapsed: 10px;
    --oks-toast-stack-expanded: 64px;
    --oks-toast-stack-overlap: var(--oks-toast-stack-collapsed);
    --oks-toast-stack-scale-step: 0.03;
    --oks-toast-ease: cubic-bezier(0.16, 1, 0.3, 1);
    --oks-toast-stack-duration: 320ms;
    --oks-toast-enter-duration: 280ms;
    --oks-toast-exit-duration: 260ms;
    width: min(300px, calc(100vw - 24px));
    pointer-events: auto;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
  }
  :where(.oksToastStack[data-position^=top]) {
    --oks-toast-stack-dir: 1;
  }
  :where(.oksToastStack[data-position^=bottom] .oksToast) {
    align-self: end;
  }
  :where(.oksToastStack[data-position^=top] .oksToast) {
    align-self: start;
  }
  :where(.oksToast) {
    --oks-toast-gap: var(--oks-space-3, 12px);
    --oks-toast-padding-y: var(--oks-space-3, 12px);
    --oks-toast-padding-x: var(--oks-space-3, 12px);
    --oks-toast-title-font-size: 14px;
    --oks-toast-message-font-size: 13px;
    --oks-toast-message-margin-top: var(--oks-space-1, 4px);
    --oks-toast-icon-box: 28px;
    --oks-toast-icon-glyph: 18px;
    --oks-toast-enter-x: 0px;
    --oks-toast-enter-y: 12px;
    grid-area: 1 / 1;
    width: 100%;
    z-index: calc(100 - var(--oks-toast-stack-index, 0));
    transition: transform var(--oks-toast-stack-duration) var(--oks-toast-ease);
    transform: translateY(calc(var(--oks-toast-stack-dir) * (var(--oks-toast-stack-index, 0) * var(--oks-toast-stack-overlap)))) scale(calc(1 - (var(--oks-toast-stack-index, 0) * var(--oks-toast-stack-scale-step))));
    will-change: transform;
  }
  :where(.oksToastSurface) {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: var(--oks-toast-gap);
    padding: var(--oks-toast-padding-y) var(--oks-toast-padding-x);
    border-radius: var(--oks-toast-radius, var(--oks-radius-md, 0.375rem));
    background-color: var(--oks-toast-bg, rgba(15, 23, 42, 0.92));
    color: var(--oks-toast-fg, white);
    border: 1px solid var(--oks-toast-border, rgba(255, 255, 255, 0.12));
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    will-change: transform, opacity;
  }
  :where(.oksToast[data-placement^=top]) {
    --oks-toast-enter-y: -12px;
  }
  :where(.oksToast[data-placement$=right]) {
    --oks-toast-enter-x: 12px;
    --oks-toast-enter-y: 0px;
  }
  :where(.oksToast[data-placement$=left]) {
    --oks-toast-enter-x: -12px;
    --oks-toast-enter-y: 0px;
  }
  :where(.oksToastStack:is(:hover, :focus-within)) {
    --oks-toast-stack-overlap: var(--oks-toast-stack-expanded);
    --oks-toast-stack-scale-step: 0;
  }
  :where(.oksToast[data-motion=default][data-animation=entering] .oksToastSurface) {
    animation: oksToastIn var(--oks-toast-enter-duration) var(--oks-toast-ease) both;
  }
  :where(.oksToast[data-motion=default][data-animation=exiting] .oksToastSurface) {
    animation: oksToastOut var(--oks-toast-exit-duration) var(--oks-toast-ease) forwards;
  }
  @keyframes oksToastIn {
    from {
      opacity: 0;
      transform: translate3d(var(--oks-toast-enter-x), var(--oks-toast-enter-y), 0) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes oksToastOut {
    from {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      opacity: 0;
      transform: translate3d(var(--oks-toast-enter-x), var(--oks-toast-enter-y), 0) scale(0.98);
    }
  }
  :where(.oksToast[data-radius=none]) {
    --oks-toast-radius: 0px;
  }
  :where(.oksToast[data-radius=sm]) {
    --oks-toast-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksToast[data-radius=md]) {
    --oks-toast-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksToast[data-radius=lg]) {
    --oks-toast-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksToast[data-radius=full]) {
    --oks-toast-radius: var(--oks-radius-full, 9999px);
  }
  :where(.oksToast[data-state=closing]) {
    pointer-events: none;
  }
  :where(.oksToast[data-motion=reduced]) {
    transition: none;
  }
  :where(.oksToast[data-stack-index]:not([data-stack-index="0"])) {
    pointer-events: none;
  }
  :where(.oksToast[data-motion=reduced] .oksToastSurface) {
    animation: none;
    transition: none;
    transform: none;
  }
  :where(.oksToastStack:is(:hover, :focus-within) .oksToast[data-stack-index]) {
    pointer-events: auto;
  }
  :where(.oksToast[data-size=xs]) {
    --oks-toast-gap: var(--oks-space-1, 4px);
    --oks-toast-padding-y: var(--oks-space-2, 8px);
    --oks-toast-padding-x: var(--oks-space-2, 8px);
    --oks-toast-message-font-size: 12px;
    --oks-toast-icon-box: 22px;
    --oks-toast-icon-glyph: 14px;
  }
  :where(.oksToast[data-size=xs-sm]) {
    --oks-toast-gap: var(--oks-space-2, 8px);
    --oks-toast-padding-y: var(--oks-space-2, 8px);
    --oks-toast-padding-x: var(--oks-space-2, 8px);
    --oks-toast-message-font-size: 12px;
    --oks-toast-icon-box: 24px;
    --oks-toast-icon-glyph: 16px;
  }
  :where(.oksToast[data-size=sm]) {
    --oks-toast-gap: var(--oks-space-3, 12px);
    --oks-toast-padding-y: var(--oks-space-2, 8px);
    --oks-toast-padding-x: var(--oks-space-3, 12px);
    --oks-toast-message-font-size: 13px;
    --oks-toast-icon-box: 26px;
    --oks-toast-icon-glyph: 18px;
  }
  :where(.oksToast[data-size=lg]) {
    --oks-toast-gap: var(--oks-space-4, 16px);
    --oks-toast-padding-y: var(--oks-space-4, 16px);
    --oks-toast-padding-x: var(--oks-space-4, 16px);
    --oks-toast-title-font-size: 15px;
    --oks-toast-message-font-size: 14px;
    --oks-toast-icon-box: 32px;
    --oks-toast-icon-glyph: 20px;
  }
  :where(.oksToast[data-size=xl]) {
    --oks-toast-gap: var(--oks-space-4, 16px);
    --oks-toast-padding-y: var(--oks-space-5, 20px);
    --oks-toast-padding-x: var(--oks-space-5, 20px);
    --oks-toast-title-font-size: 16px;
    --oks-toast-message-font-size: 15px;
    --oks-toast-icon-box: 36px;
    --oks-toast-icon-glyph: 22px;
  }
  :where(.oksToastIcon) {
    color: var(--oks-toast-icon-fg, var(--oks-toast-accent, currentColor));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--oks-toast-icon-box);
    height: var(--oks-toast-icon-box);
    border-radius: var(--oks-radius-sm, 0.25rem);
    background-color: var( --oks-toast-icon-bg, color-mix(in srgb, var(--oks-toast-accent, #2563eb) 12%, transparent) );
    flex: none;
  }
  :where(.oksToastIcon svg) {
    width: var(--oks-toast-icon-glyph);
    height: var(--oks-toast-icon-glyph);
  }
  :where(.oksToastLoading) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
  }
  :where(.oksToastProgressTrack) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: color-mix(in srgb, var(--oks-toast-fg, currentColor) 20%, transparent);
    pointer-events: none;
  }
  :where(.oksToastProgressIndicator) {
    height: 100%;
    width: 100%;
    background-color: var(--oks-toast-fg, currentColor);
    opacity: 0.6;
    transform-origin: left;
    transform: scaleX(1);
    pointer-events: none;
  }
  :where(.oksToast[data-motion=reduced] .oksToastProgressIndicator) {
    transition: none !important;
  }
  :where(.oksToastBody) {
    flex: 1;
    min-width: 0;
  }
  :where(.oksToastTitle) {
    font-weight: 600;
    font-size: var(--oks-toast-title-font-size);
    line-height: 1.2;
  }
  :where(.oksToastMessage) {
    font-size: var(--oks-toast-message-font-size);
    line-height: 1.35;
    opacity: 0.95;
    word-wrap: break-word;
  }
  :where(.oksToastControls) {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: var(--oks-space-2, 8px);
    flex: none;
  }
  :where(.oksToastAction) {
    appearance: none;
    border: 0;
    background: transparent;
    color: inherit;
    padding: 0;
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  :where(.oksToastClose) {
    appearance: none;
    border: 0;
    background: transparent;
    color: inherit;
    width: 28px;
    height: 28px;
    border-radius: var(--oks-radius-sm, 0.25rem);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  :where(.oksToastClose:hover) {
    background-color: rgba(0, 0, 0, 0.06);
  }
  :where(.oksToastClose:focus-visible),
  :where(.oksToastAction:focus-visible) {
    outline: 2px solid var(--oks-color-primary-500, #3b82f6);
    outline-offset: 2px;
  }
}
`);var Kp=g.createContext(null);function Ht(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}function Bv(i){if(!i||typeof i!="object"||g.isValidElement(i))return!1;const c=i;return"type"in c||"tone"in c||"color"in c||"severity"in c||"variant"in c||"radius"in c||"size"in c||"position"in c||"placement"in c||"duration"in c||"timeout"in c||"persistent"in c||"dismissible"in c||"hideCloseButton"in c||"action"in c||"title"in c||"message"in c||"description"in c||"icon"in c||"showIcon"in c||"hideIcon"in c||"endContent"in c||"closeIcon"in c||"loadingComponent"in c||"promise"in c||"classNames"in c||"id"in c||"className"in c||"style"in c}function zv(i){const c={};for(const p in i)Object.prototype.hasOwnProperty.call(i,p)&&i[p]!==void 0&&(c[p]=i[p]);return c}function Nv(i,c){return Bv(i)?{...i,...c??{}}:{message:i,...c??{}}}function Ev(i){return i==="success"?"success":i==="warning"?"warning":i==="error"?"danger":i==="info"?"info":"primary"}function Qp(i){return!0}function Mv(i){return"alert"}function Zp(i){return i==="flat"?"soft":i==="bordered"?"outline":i}function Jp(i){return i==="success"?"success":i==="warning"?"warning":i==="danger"?"error":"default"}function Fp(i){if(!(!i||i==="default"))return i}function Ov(i,c){const p=Zp(i),d=`var(--oks-color-${c}-600, var(--oks-color-primary-600, #2563eb))`,y=`var(--oks-color-${c}-50, var(--oks-color-primary-50, #eff6ff))`,b=`var(--oks-color-${c}-900, var(--oks-color-primary-900, #0b1220))`;return p==="solid"?{accent:d,bg:d,fg:"white",border:d}:p==="outline"?{accent:d,bg:"transparent",fg:b,border:d}:{accent:d,bg:y,fg:b,border:d}}function Rv(i,c){return c.type==="UPSERT"?[c.item,...i.filter(d=>d.id!==c.item.id)].slice(0,Math.max(1,c.maxToasts)):c.type==="PATCH"?i.map(p=>{if(p.id!==c.id)return p;const d=zv(c.patch),y=d.severity??d.color,b=d.type??(y!==void 0?Jp(y):p.type),E=d.tone??(y!==void 0?Fp(y)??p.tone:p.tone),Y=d.variant??p.variant,A=d.size??p.size,j=d.placement??d.position??p.position,H=d.persistent===!0?null:d.timeout!==void 0?d.timeout:d.duration!==void 0?d.duration:p.duration,M=d.hideIcon!==void 0?!d.hideIcon:d.showIcon!==void 0?d.showIcon:d.type!==void 0||y!==void 0?Qp():p.showIcon,G=d.shouldShowTimeoutProgress??d.showDurationBar;return{...p,...d,type:b,tone:E,variant:Y,size:A,position:j,duration:H,message:d.message!==void 0?d.message:p.message,description:d.description!==void 0?d.description:p.description,showDurationBar:!!G&&H!=null,dismissible:d.dismissible??(d.hideCloseButton!==void 0?!d.hideCloseButton:p.dismissible),showIcon:M,state:p.state}}):c.type==="MARK_CLOSING"?i.map(p=>p.id===c.id?{...p,state:"closing",duration:null}:p):c.type==="MARK_ALL_CLOSING"?i.map(p=>({...p,state:"closing",duration:null})):c.type==="REMOVE"?i.filter(p=>p.id!==c.id):i}function _v(){const i=g.useContext(Kp);if(!i)throw new Error("useToast must be used inside ToastProvider");return i}var an=null,Ya=((i,c)=>an?an.show(i,c):(console.warn("Toast provider not configured"),-1)),Uv=((i,c)=>Ya(i,c)),Pe=Object.assign(Uv,{show:Ya,info:(i,c)=>Ya(i,{...c??{},type:"info"}),success:(i,c)=>Ya(i,{...c??{},type:"success"}),warning:(i,c)=>Ya(i,{...c??{},type:"warning"}),error:(i,c)=>Ya(i,{...c??{},type:"error"}),update:(i,c)=>{if(!an){console.warn("Toast provider not configured");return}an.update(i,c)},dismiss:i=>{if(!an){console.warn("Toast provider not configured");return}an.dismiss(i)},dismissAll:()=>{if(!an){console.warn("Toast provider not configured");return}an.dismissAll()},promise:(i,c)=>an?an.promise(i,c):(console.warn("Toast provider not configured"),-1)});function xc(i){return Ya(i)}function Hv({item:i,dataMotion:c,onDismiss:p,stackIndex:d=0}){const y=i.duration,b=g.useRef(null),E=g.useRef(0),Y=g.useRef(y??0),A=g.useRef(null),j=d===0&&i.showDurationBar&&y!=null,H=g.useCallback((ye,ce)=>{const ve=A.current;if(ve){if(ve.style.transform=`scaleX(${Math.max(0,Math.min(1,ye))})`,c==="reduced"||ce==null){ve.style.transition="none";return}ve.style.transition=`transform ${ce}ms linear`}},[c]),M=g.useCallback(ye=>{j&&(H(1,null),c!=="reduced"&&requestAnimationFrame(()=>H(0,ye)))},[j,c,H]),G=g.useCallback(()=>{b.current!=null&&clearTimeout(b.current),b.current=null},[]),I=g.useCallback(ye=>{G(),!(ye<=0)&&(E.current=Date.now(),b.current=setTimeout(()=>p(i.id),ye))},[G,i.id,p]),U=g.useCallback(()=>{if(y==null||b.current==null)return;const ye=Date.now()-E.current;if(Y.current=Math.max(0,Y.current-ye),G(),j){const ce=y>0?Y.current/y:0;H(ce,null)}},[j,G,y,H]),te=g.useCallback(()=>{y!=null&&i.state==="open"&&(I(Y.current),j&&H(0,Y.current))},[I,j,y,i.state,H]);g.useEffect(()=>{if(G(),y!=null)return Y.current=y,d===0&&i.state==="open"&&(I(y),M(y)),()=>G()},[I,G,y,i.state,d,M]),g.useEffect(()=>{i.state!=="open"&&G()},[G,i.state]);const pe=Mv(i.type),W=Ov(i.variant,i.tone),ke=Zp(i.variant),de=ke==="solid"?W.fg:W.accent,P=ke==="solid"?`color-mix(in srgb, ${W.fg} 14%, transparent)`:`color-mix(in srgb, ${W.accent} 12%, transparent)`,ne=(i.title??null)!==null&&i.title!==void 0,ie=i.description??i.message,ee=(ie??null)!==null&&ie!==void 0,q=i.state==="closing"?"exiting":"entering",X=i.classNames,he={"--oks-toast-accent":W.accent,"--oks-toast-bg":W.bg,"--oks-toast-fg":W.fg,"--oks-toast-border":W.border,"--oks-toast-icon-fg":de,"--oks-toast-icon-bg":P,"--oks-toast-stack-index":String(d),...i.style};return o.jsx("div",{role:pe,"aria-atomic":"true","data-has-title":ne?"true":"false","data-has-description":ee?"true":"false","data-animation":q,"data-placement":i.position,"data-drag-value":"0","data-motion":c,"data-state":i.state,"data-size":i.size,"data-radius":i.radius??"md","data-stack-index":String(d),className:Ht(Ht(Ht("oksToast",d>0?"oksToastStacked":""),X?.base),i.className),style:he,...d===0?{onMouseEnter:U,onMouseLeave:te,onFocusCapture:U,onBlurCapture:te}:{},children:o.jsxs("div",{className:Ht(Ht("oksToastSurface",X?.motionDiv),Ht(X?.base,i.className)),children:[i.type==="loading"&&i.loadingComponent?o.jsx("div",{className:Ht("oksToastLoading",X?.loadingComponent),"aria-hidden":"true",children:i.loadingComponent}):i.showIcon?o.jsx("div",{className:Ht("oksToastIcon",X?.icon),"aria-hidden":"true",children:i.icon??o.jsx(qp,{type:i.type})}):null,o.jsxs("div",{className:Ht("oksToastBody",X?.content),children:[ne&&o.jsx("div",{className:Ht("oksToastTitle",X?.title),children:i.title}),ee&&o.jsx("div",{className:Ht("oksToastMessage",X?.description),children:ie})]}),d===0&&(i.action||i.endContent||i.dismissible)&&o.jsxs("div",{className:Ht("oksToastControls",X?.wrapper),children:[i.action&&o.jsx("button",{type:"button",className:"oksToastAction",onClick:()=>i.action?.onClick?.(),children:i.action.label}),i.endContent,i.dismissible&&o.jsx(Xp,{ariaLabel:"Close",className:Ht("oksToastClose",X?.closeButton),...i.closeIcon!==void 0?{icon:i.closeIcon}:{},...X?.closeIcon!==void 0?{iconClassName:X.closeIcon}:{},onClick:()=>p(i.id)})]}),j&&o.jsx("div",{className:Ht("oksToastProgressTrack",X?.progressTrack),"aria-hidden":"true",children:o.jsx("div",{ref:A,className:Ht("oksToastProgressIndicator",X?.progressIndicator)})})]})})}function Lv({children:i,position:c,placement:p,maxToasts:d,maxVisibleToasts:y,defaultDuration:b=6e3,container:E,motion:Y="auto",disableAnimation:A,toastOffset:j=0,toastProps:H,regionProps:M,className:G,style:I}){const U=Yp(),te=p??c??"bottom-right",pe=y??d??3,W=d!==void 0?d:Math.max(pe,12),ke=A===!0||Y==="reduced"||Y==="auto"&&U?"reduced":"default",de=ke==="reduced"?0:260,P=g.useRef(0),ne=g.useRef(new Map),[ie,ee]=g.useReducer(Rv,[]),q=g.useRef([]);q.current=ie;const X=g.useCallback(f=>{const v=ne.current.get(f);if(v!=null&&clearTimeout(v),de<=0){ee({type:"REMOVE",id:f});return}const R=setTimeout(()=>{ne.current.delete(f),ee({type:"REMOVE",id:f})},de);ne.current.set(f,R)},[de]),he=g.useCallback(f=>{const v=q.current.find(R=>R.id===f);v&&v.state!=="closing"&&v.onDismiss?.(f),ee({type:"MARK_CLOSING",id:f}),X(f)},[X]),ye=g.useCallback(()=>{const f=q.current;for(const v of f)v.state!=="closing"&&v.onDismiss?.(v.id);ee({type:"MARK_ALL_CLOSING"});for(const v of f)X(v.id)},[X]),ce=g.useCallback((f,v)=>{ee({type:"PATCH",id:f,patch:v})},[]),ve=g.useCallback(((f,v)=>{const R=Nv(f,v),w={...H??{},...R},Z=w.severity??w.color,$=w.type??(Z?Jp(Z):"default"),le=w.tone??(Z?Fp(Z):void 0)??Ev($),De=w.variant??"flat",V=w.size??"md",se=w.placement??w.position??te,Ce=w.hideCloseButton!==void 0?!w.hideCloseButton:w.dismissible??!0,Ne=!!w.persistent,He=w.timeout??w.duration,Qe=Ne?null:He!==void 0?He:b,Fe=!!(w.shouldShowTimeoutProgress??w.showDurationBar)&&Qe!=null,Q=w.hideIcon!==void 0?!w.hideIcon:w.showIcon??Qp(),F=w.id??++P.current,J={...{id:F,createdAt:Date.now(),state:"open",type:$,tone:le,variant:De,radius:w.radius??"md",size:V,position:se,duration:Qe,showDurationBar:Fe,dismissible:Ce,showIcon:Q},...w.title!==void 0?{title:w.title}:{},...w.message!==void 0?{message:w.message}:{},...w.description!==void 0?{description:w.description}:{},...w.action!==void 0?{action:w.action}:{},...w.icon!==void 0?{icon:w.icon}:{},...w.endContent!==void 0?{endContent:w.endContent}:{},...w.closeIcon!==void 0?{closeIcon:w.closeIcon}:{},...w.loadingComponent!==void 0?{loadingComponent:w.loadingComponent}:{},...w.classNames!==void 0?{classNames:w.classNames}:{},...w.onDismiss!==void 0?{onDismiss:w.onDismiss}:{},...w.className!==void 0?{className:w.className}:{},...w.style!==void 0?{style:w.style}:{}};if(w.promise){const fe=w.promise,ze=He!==void 0?He:b,Ie=w.shouldShowTimeoutProgress??w.showDurationBar;return ee({type:"UPSERT",item:{...J,type:"loading",duration:null,showDurationBar:!1,dismissible:Ce},maxToasts:W}),fe.then(()=>ce(F,{type:"success",timeout:ze,...Ie!==void 0?{shouldShowTimeoutProgress:Ie}:{},dismissible:Ce}),()=>ce(F,{type:"error",timeout:ze,...Ie!==void 0?{shouldShowTimeoutProgress:Ie}:{},dismissible:Ce})),F}return ee({type:"UPSERT",item:J,maxToasts:W}),F}),[b,te,W,H,ce]),Se=g.useCallback((f,v)=>{const R=typeof f=="function"?f():f,w=ve({...v.loading??{},type:v.loading?.type??"loading",persistent:!0,dismissible:v.loading?.dismissible??!1});return R.then(Z=>{const $=v.success?.(Z)??{};ce(w,{...$,type:$.type??"success",persistent:!1})},Z=>{const $=v.error?.(Z)??{};ce(w,{...$,type:$.type??"error",persistent:!1})}),w},[ve,ce]),ae=g.useMemo(()=>({show:ve,info:(f,v)=>ve(f,{...v??{},type:"info"}),success:(f,v)=>ve(f,{...v??{},type:"success"}),warning:(f,v)=>ve(f,{...v??{},type:"warning"}),error:(f,v)=>ve(f,{...v??{},type:"error"}),update:ce,dismiss:he,dismissAll:ye,promise:Se}),[he,ye,Se,ve,ce]);g.useEffect(()=>(an=ae,()=>{an===ae&&(an=null)}),[ae]),g.useEffect(()=>{if(typeof window>"u")return;const f=v=>{if(v.key!=="Escape")return;const R=ie[0];R&&he(R.id)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[he,ie]),g.useEffect(()=>()=>{for(const f of ne.current.values())clearTimeout(f);ne.current.clear()},[]);const k=g.useMemo(()=>{const f={};for(const v of ie){const R=v.position,w=f[R]??[];w.push(v),f[R]=w}return f},[ie]),{classNames:O,style:K,...xe}=M??{},ue={"--oks-toast-offset":`${j}px`,...I??{},...K??{}};return o.jsxs(Kp.Provider,{value:ae,children:[i,o.jsx(kc,{container:E,children:Object.entries(k).map(([f,v])=>{const R=f,w=Math.max(1,pe),$=v.slice(0,w),le=Math.max(0,v.length-w);return o.jsx("div",{"data-position":R,className:Ht(Ht("oksToastViewport",O?.base),G),style:ue,"aria-live":"polite",...xe,children:o.jsx("div",{className:"oksToastStack","data-position":R,"data-has-overflow":le>0?"true":"false","data-overflow-count":String(le),children:$.map((De,V)=>o.jsx(Hv,{item:De,dataMotion:ke,onDismiss:he,stackIndex:V},De.id))})},f)})})]})}function wn(i,c,p){return Math.min(p,Math.max(c,i))}function Sl(i,c){return p=>{i?.(p),c(p)}}function Gv(...i){return c=>{for(const p of i)p&&(typeof p=="function"?p(c):p.current=c)}}function Yv(){return typeof window>"u"?{width:0,height:0,scrollX:0,scrollY:0}:{width:window.innerWidth,height:window.innerHeight,scrollX:window.scrollX??window.pageXOffset??0,scrollY:window.scrollY??window.pageYOffset??0}}function Ip(i){const{triggerRect:c,tooltipRect:p,side:d,align:y,offset:b,collisionPadding:E,crossOffset:Y=0,shouldFlip:A=!0,arrowSize:j=10,arrowPaddingX:H=12,arrowPaddingY:M=8,arrowCornerInset:G=0,strategy:I}=i,U=Yv(),te=c.top-E,pe=U.height-E-c.bottom,W=c.left-E,ke=U.width-E-c.right,de={top:p.height+b,bottom:p.height+b,left:p.width+b,right:p.width+b},P={top:te,bottom:pe,left:W,right:ke},ne={top:P.top>=de.top,bottom:P.bottom>=de.bottom,left:P.left>=de.left,right:P.right>=de.right},ie=Z=>Z==="top"?"bottom":Z==="bottom"?"top":Z==="left"?"right":"left",q=(()=>{if(!A||ne[d])return d;const Z=ie(d);if(ne[Z])return Z;const $=["top","bottom","left","right"];let le="top",De=P[le]-de[le];for(const V of $){const se=P[V]-de[V];se>De&&(le=V,De=se)}return le})();let X=0,he=0;const ye=y==="start"?c.left:y==="end"?c.right-p.width:c.left+c.width/2-p.width/2,ce=y==="start"?c.top:y==="end"?c.bottom-p.height:c.top+c.height/2-p.height/2;q==="top"?(X=c.top-p.height-b,he=ye):q==="bottom"?(X=c.bottom+b,he=ye):q==="left"?(X=ce,he=c.left-p.width-b):(X=ce,he=c.right+b),q==="top"||q==="bottom"?he+=Y:X+=Y;const ve=E,Se=U.width-E-p.width,ae=E,k=U.height-E-p.height,O=p.width<=U.width-E*2,K=p.height<=U.height-E*2;ne[q]?q==="top"||q==="bottom"?(he=wn(he,ve,Se),K||(X=wn(X,ae,k))):(X=wn(X,ae,k),O||(he=wn(he,ve,Se))):(he=wn(he,ve,Se),X=wn(X,ae,k)),I==="absolute"&&(he+=U.scrollX,X+=U.scrollY);const xe=j/2,ue=c.left+c.width/2+(I==="absolute"?U.scrollX:0),f=c.top+c.height/2+(I==="absolute"?U.scrollY:0);let v,R;if(q==="top"||q==="bottom"){const Z=ue-he,$=Math.max(H,G),le=$+xe,De=p.width-$-xe;v=De>=le?wn(Z,le,De):p.width/2}else{const Z=f-X,$=Math.max(M,G),le=$+xe,De=p.height-$-xe;R=De>=le?wn(Z,le,De):p.height/2}const w={top:X,left:he,placedSide:q};return v!==void 0&&(w.arrowX=v),R!==void 0&&(w.arrowY=R),w}Sn(`@layer components {
  :where(.oksTooltipTrigger) {
    display: inline-flex;
    transform-origin: center;
  }
  :where(.oksTooltipTrigger[data-trigger-scale=true]) {
    transition: transform 120ms ease;
  }
  :where(.oksTooltipTrigger[data-open=true][data-trigger-scale=true]) {
    transform: scale(0.97);
  }
  :where(.oksTooltipTrigger[data-motion=reduced]) {
    transition: none;
    transform: none;
  }
  :where(.oksTooltipBase) {
    --oks-tooltip-bg: var(--oks-color-default-100, rgba(238, 238, 240, 1));
    --oks-tooltip-fg: var(--oks-color-default-900, #42424a);
    --oks-tooltip-radius: var(--oks-radius-md, 0.375rem);
    --oks-tooltip-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    --oks-tooltip-font-size: 12px;
    --oks-tooltip-padding-y: var(--oks-space-2, 8px);
    --oks-tooltip-padding-x: var(--oks-space-3, 12px);
    z-index: 50;
    max-width: 320px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2px);
    transition: opacity 120ms ease, transform 120ms ease;
  }
  :where(.oksTooltipBase[data-open=true]) {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  :where(.oksTooltipBase[data-motion=reduced]) {
    transition: none;
    transform: none;
  }
  :where(.oksTooltipBase[data-color=primary]) {
    --oks-tooltip-bg: var(--oks-color-primary-100, #ffd0b0);
  }
  :where(.oksTooltipBase[data-color=secondary]) {
    --oks-tooltip-bg: var(--oks-color-secondary-100, #e7e7e7);
  }
  :where(.oksTooltipBase[data-color=info]) {
    --oks-tooltip-bg: var(--oks-color-info-100, #b0d1f6);
  }
  :where(.oksTooltipBase[data-color=success]) {
    --oks-tooltip-bg: var(--oks-color-success-100, #b7e3b2);
  }
  :where(.oksTooltipBase[data-color=warning]) {
    --oks-tooltip-bg: var(--oks-color-warning-100, #f6d3b1);
  }
  :where(.oksTooltipBase[data-color=danger]) {
    --oks-tooltip-bg: var(--oks-color-danger-100, #f6b1b1);
  }
  :where(.oksTooltipBase[data-radius=none]) {
    --oks-tooltip-radius: 0;
  }
  :where(.oksTooltipBase[data-radius=sm]) {
    --oks-tooltip-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksTooltipBase[data-radius=md]) {
    --oks-tooltip-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksTooltipBase[data-radius=lg]) {
    --oks-tooltip-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksTooltipBase[data-radius=full]) {
    --oks-tooltip-radius: var(--oks-radius-full, 9999px);
  }
  :where(.oksTooltipBase[data-shadow=none]) {
    --oks-tooltip-shadow: none;
  }
  :where(.oksTooltipBase[data-shadow=sm]) {
    --oks-tooltip-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }
  :where(.oksTooltipBase[data-shadow=md]) {
    --oks-tooltip-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
  }
  :where(.oksTooltipBase[data-shadow=lg]) {
    --oks-tooltip-shadow: 0 18px 56px rgba(0, 0, 0, 0.32);
  }
  :where(.oksTooltipContent) {
    background: var(--oks-tooltip-bg);
    background-color: var(--oks-tooltip-bg);
    color: var(--oks-tooltip-fg);
    border-radius: var(--oks-tooltip-radius);
    box-shadow: var(--oks-tooltip-shadow);
    font-size: var(--oks-tooltip-font-size);
    line-height: 1.2;
    padding: var(--oks-tooltip-padding-y) var(--oks-tooltip-padding-x);
  }
  :where(.oksTooltipBase[data-size=sm]) {
    --oks-tooltip-font-size: 11px;
    --oks-tooltip-padding-y: var(--oks-space-1, 4px);
    --oks-tooltip-padding-x: var(--oks-space-2, 8px);
  }
  :where(.oksTooltipBase[data-size=lg]) {
    --oks-tooltip-font-size: 13px;
    --oks-tooltip-padding-y: var(--oks-space-3, 12px);
    --oks-tooltip-padding-x: var(--oks-space-4, 16px);
  }
  :where(.oksTooltipBase[data-radius=full]) {
    --oks-tooltip-padding-x: var(--oks-space-5, 20px);
  }
  :where(.oksTooltipBase[data-radius=full][data-size=sm]) {
    --oks-tooltip-padding-x: var(--oks-space-5, 20px);
  }
  :where(.oksTooltipBase[data-radius=full][data-size=lg]) {
    --oks-tooltip-padding-x: var(--oks-space-5, 20px);
  }
  :where(.oksTooltipArrow) {
    --oks-tooltip-arrow-size: 10px;
    position: absolute;
    width: var(--oks-tooltip-arrow-size);
    height: var(--oks-tooltip-arrow-size);
    background-color: var(--oks-tooltip-bg);
  }
  :where(.oksTooltipBase[data-placement^=top]) :where(.oksTooltipArrow) {
    left: var(--oks-tooltip-arrow-x, 50%);
    bottom: 0;
    transform: translate(-50%, 50%) rotate(45deg);
  }
  :where(.oksTooltipBase[data-placement^=bottom]) :where(.oksTooltipArrow) {
    left: var(--oks-tooltip-arrow-x, 50%);
    top: 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  :where(.oksTooltipBase[data-placement^=left]) :where(.oksTooltipArrow) {
    top: var(--oks-tooltip-arrow-y, 50%);
    right: 0;
    transform: translate(50%, -50%) rotate(45deg);
  }
  :where(.oksTooltipBase[data-placement^=right]) :where(.oksTooltipArrow) {
    top: var(--oks-tooltip-arrow-y, 50%);
    left: 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
}
`);function Hs(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}var zp=[50,100,200,300,400,500,600,700,800,900,950];function qv(i){const c=wn(i,50,950);let d=zp[0]??100,y=Math.abs(d-c);for(const b of zp){const E=Math.abs(b-c);E<y&&(d=b,y=E)}return d}function Vv(i,c){const p=`var(--oks-color-default-${c}, var(--oks-color-primary-${c}, #3b82f6))`;return i==="default"?p:`var(--oks-color-${i}-${c}, ${p})`}function Oe(i){const{children:c,content:p,size:d="md",color:y="default",colorDepth:b=100,radius:E="md",shadow:Y="sm",placement:A="top",delay:j=0,closeDelay:H=500,isOpen:M,defaultOpen:G=!1,onOpenChange:I,onClose:U,offset:te=7,containerPadding:pe=12,crossOffset:W=0,showArrow:ke=!1,shouldFlip:de=!0,triggerScaleOnOpen:P=!1,isKeyboardDismissDisabled:ne=!1,isDismissable:ie=!1,shouldCloseOnBlur:ee=!0,portalContainer:q,updatePositionDeps:X,isDisabled:he=!1,disableAnimation:ye=!1,className:ce,classNames:ve,shouldCloseOnInteractOutside:Se}=i,k=`oks-tooltip-${g.useId().replace(/[:]/g,"")}`,O=M!==void 0,[K,xe]=g.useState(G),ue=!he&&(O?M:K),[f,v]=g.useState(!1),R=Yp(),w=g.useRef(null),Z=g.useRef(null),$=g.useRef(null),le=g.useRef(null),[De,V]=g.useState(null),se=Ae=>{I?.(Ae),O||xe(Ae),Ae||U?.()},Ce=()=>{$.current!==null&&(window.clearTimeout($.current),$.current=null)},Ne=()=>{le.current!==null&&(window.clearTimeout(le.current),le.current=null)},He=Ae=>{if(he)return;const Le=Ae?.currentTarget;Le instanceof HTMLElement&&(w.current=Le),Ne(),Ce(),Be(),$.current=window.setTimeout(()=>se(!0),j)},Qe=()=>{Ce(),Ne(),le.current=window.setTimeout(()=>se(!1),H)},Fe=()=>{Ce(),Ne(),se(!1)},{side:Q,align:F}=g.useMemo(()=>{const[Ae,Le]=A.split("-");return{side:Ae==="top"||Ae==="bottom"||Ae==="left"||Ae==="right"?Ae:"top",align:Le==="start"||Le==="end"?Le:"center"}},[A]),Be=()=>{const Ae=w.current,Le=Z.current;if(!Ae||!Le)return;const Ct=Ae.getBoundingClientRect(),vn=Le.getBoundingClientRect(),gn=ke?Le.querySelector(".oksTooltipArrow"):null,At=Le.querySelector(".oksTooltipContent"),Lt=gn?Number.parseFloat(window.getComputedStyle(gn).width):Number.NaN,Bt=Number.isFinite(Lt)&&Lt>0?Lt:10,qa=At?Number.parseFloat(window.getComputedStyle(At).paddingLeft):Number.NaN,re=Number.isFinite(qa)&&qa>0?qa:12,gt=At?Number.parseFloat(window.getComputedStyle(At).paddingTop):Number.NaN,bt=Number.isFinite(gt)&&gt>0?gt:8,Ft=E==="full"?Math.min(vn.width,vn.height)/2:0;V(Ip({triggerRect:Ct,tooltipRect:vn,side:Q,align:F,offset:te,collisionPadding:pe,crossOffset:W,shouldFlip:de,arrowSize:Bt,arrowPaddingX:re,arrowPaddingY:bt,arrowCornerInset:Ft,strategy:"fixed"}))};g.useEffect(()=>(v(!0),()=>{typeof window>"u"||(Ce(),Ne())}),[]),g.useEffect(()=>{if(!f||!ue||(Be(),typeof window>"u"))return;const Ae=window.requestAnimationFrame(()=>Be()),Le=()=>Be();window.addEventListener("scroll",Le,!0),window.addEventListener("resize",Le);let Ct=null;return typeof ResizeObserver<"u"&&(Ct=new ResizeObserver(Le),w.current&&Ct.observe(w.current),Z.current&&Ct.observe(Z.current)),()=>{window.cancelAnimationFrame(Ae),window.removeEventListener("scroll",Le,!0),window.removeEventListener("resize",Le),Ct?.disconnect()}},[f,ue,Q,F,te,pe,W,de,X]),g.useEffect(()=>{if(!f||!ue||typeof document>"u")return;const Ae=Le=>{ne||Le.key==="Escape"&&Fe()};return document.addEventListener("keydown",Ae),()=>document.removeEventListener("keydown",Ae)},[f,ue,ne]),g.useEffect(()=>{if(!f||!ue||!ie||typeof document>"u")return;const Ae=Le=>{const Ct=Le.target;if(!(Ct instanceof Node)||w.current?.contains(Ct)||Z.current?.contains(Ct))return;const vn=Ct instanceof HTMLElement?Ct:null;vn&&Se&&!Se(vn)||Fe()};return document.addEventListener("pointerdown",Ae,!0),()=>document.removeEventListener("pointerdown",Ae,!0)},[f,ue,ie,Se]);const J=Ae=>({"aria-describedby":ue?k:void 0,onPointerEnter:Sl(Ae?.onPointerEnter,Le=>He(Le)),onPointerLeave:Sl(Ae?.onPointerLeave,()=>Qe()),onFocus:Sl(Ae?.onFocus,Le=>He(Le)),onBlur:Sl(Ae?.onBlur,()=>{ee&&Qe()}),onKeyDown:Sl(Ae?.onKeyDown,Le=>{ne||Le?.key==="Escape"&&Fe()})}),fe=ue&&De===null,ze={position:"fixed",top:De?.top??0,left:De?.left??0,visibility:fe?"hidden":void 0,...De?.arrowX!==void 0?{"--oks-tooltip-arrow-x":`${De.arrowX}px`}:null,...De?.arrowY!==void 0?{"--oks-tooltip-arrow-y":`${De.arrowY}px`}:null},Ie=typeof b=="number"?qv(b):100,ge=Ie<=400?"#000":"#fff",Ee={"--oks-tooltip-bg":Vv(y,Ie),"--oks-tooltip-fg":ge},_e=g.isValidElement(c)?(()=>{const Ae=c,Le=Ae.ref;return g.cloneElement(Ae,{ref:Gv(Le,Ct=>{w.current=Ct}),...J(Ae.props)})})():o.jsx("span",{ref:Ae=>{w.current=Ae},...J(),children:c}),et=ye||R?"reduced":ue?"open":"closed",ot=g.useMemo(()=>{const Ae=De?.placedSide??Q,Le=F==="center"?"":`-${F}`;return`${Ae}${Le}`},[De?.placedSide,Q,F]),it=f&&!he?o.jsxs("div",{ref:Ae=>{Z.current=Ae},id:k,role:"tooltip","aria-hidden":!ue,"data-open":ue?"true":"false","data-placement":ot,"data-disabled":he?"true":"false","data-size":d,"data-color":y,"data-radius":E,"data-shadow":Y,"data-motion":et,className:Hs(Hs("oksTooltipBase",ve?.base),ce),style:{...Ee,...ze},children:[ke?o.jsx("span",{className:Hs("oksTooltipArrow",ve?.arrow)}):null,o.jsx("div",{className:Hs("oksTooltipContent",ve?.content),children:p})]}):null;return o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"oksTooltipTrigger","data-open":ue?"true":"false","data-trigger-scale":P?"true":"false","data-motion":ye||R?"reduced":"default",children:_e}),o.jsx(kc,{container:q,children:it})]})}function Xv({size:i=18,...c}){return o.jsxs("svg",{width:i,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...c,children:[o.jsx("path",{d:"M10 10.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"M3.6 17.2c1.6-3.1 4-4.4 6.4-4.4s4.8 1.3 6.4 4.4",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}Sn(`@layer components {
  :where(.oksAvatar) {
    --oks-avatar-size: 40px;
    --oks-avatar-font-size: 14px;
    --oks-avatar-radius: 9999px;
    --oks-avatar-border: var(--oks-color-default-300, #d1d5db);
    --oks-avatar-border-gap: var(--oks-palette-neutral-0, #fff);
    --oks-avatar-border-gap-width: 2px;
    --oks-avatar-border-width: 2px;
    --oks-avatar-bg: var(--oks-color-default-500, var(--oks-color-primary-500, #3b82f6));
    --oks-avatar-fg: #fff;
    width: var(--oks-avatar-size);
    height: var(--oks-avatar-size);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: var(--oks-avatar-radius);
    box-sizing: border-box;
    font-size: var(--oks-avatar-font-size);
    line-height: 1;
    font-weight: 600;
    user-select: none;
    flex-shrink: 0;
    background-color: var(--oks-avatar-bg);
    color: var(--oks-avatar-fg);
  }
  :where(.oksAvatar[data-radius=none]) {
    --oks-avatar-radius: 0;
  }
  :where(.oksAvatar[data-radius=sm]) {
    --oks-avatar-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksAvatar[data-radius=md]) {
    --oks-avatar-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksAvatar[data-radius=lg]) {
    --oks-avatar-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksAvatar[data-radius=full]) {
    --oks-avatar-radius: 9999px;
  }
  :where(.oksAvatar[data-size=sm]) {
    --oks-avatar-size: 32px;
    --oks-avatar-font-size: 12px;
  }
  :where(.oksAvatar[data-size=md]) {
    --oks-avatar-size: 40px;
    --oks-avatar-font-size: 14px;
  }
  :where(.oksAvatar[data-size=lg]) {
    --oks-avatar-size: 48px;
    --oks-avatar-font-size: 16px;
  }
  :where(.oksAvatar[data-disabled=true]) {
    opacity: 0.5;
    pointer-events: none;
  }
  :where(.oksAvatar[data-bordered=true]) {
    box-shadow: 0 0 0 var(--oks-avatar-border-gap-width) var(--oks-avatar-border-gap), 0 0 0 calc(var(--oks-avatar-border-gap-width) + var(--oks-avatar-border-width)) var(--oks-avatar-border);
  }
  :where(.oksAvatar[data-focusable=true]:focus-visible) {
    box-shadow:
      0 0 0 3px color-mix(in srgb, var(--oks-avatar-bg, var(--oks-color-primary-500, #3b82f6)) 28%, transparent),
      0 0 0 calc(3px + var(--oks-avatar-border-gap-width)) var(--oks-avatar-border-gap),
      0 0 0 calc(3px + var(--oks-avatar-border-gap-width) + var(--oks-avatar-border-width)) var(--oks-avatar-border);
  }
  :where(.oksAvatarImage) {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  :where(.oksAvatarFallback) {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  :where(.oksAvatarInitials) {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  :where(.oksAvatarFallbackIcon) {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  :where(.oksAvatarFallbackIcon > svg) {
    width: 60%;
    height: 60%;
  }
  :where(.oksAvatarTooltipWrapper) {
    display: inline-flex;
  }
}
`);Sn(`@layer components {
  :where(.oksAvatarGroup) {
    --oks-avatar-group-item-radius: 9999px;
    --oks-avatar-group-border-color: var(--oks-palette-neutral-0, #fff);
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  :where(.oksAvatarGroup[data-radius=none]) {
    --oks-avatar-group-item-radius: 0;
  }
  :where(.oksAvatarGroup[data-radius=sm]) {
    --oks-avatar-group-item-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksAvatarGroup[data-radius=md]) {
    --oks-avatar-group-item-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksAvatarGroup[data-radius=lg]) {
    --oks-avatar-group-item-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksAvatarGroup[data-radius=full]) {
    --oks-avatar-group-item-radius: 9999px;
  }
  :where(.oksAvatarGroup[data-disabled=true]) {
    opacity: 0.6;
    pointer-events: none;
  }
  :where(.oksAvatarGroupStack) {
    display: inline-flex;
    align-items: center;
    --oks-avatar-group-overlap: 14px;
  }
  :where(.oksAvatarGroupStack[data-grid=true]) {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  :where(.oksAvatarGroupItem),
  :where(.oksAvatarGroupItem) {
    border-radius: var(--oks-avatar-group-item-radius);
    box-sizing: border-box;
  }
  :where(.oksAvatarGroup[data-bordered=true] .oksAvatarGroupItem) {
    box-shadow: 0 0 0 2px var(--oks-avatar-group-border-color);
  }
  :where(.oksAvatarGroupItem:not(:first-child)) {
    margin-left: calc(var(--oks-avatar-group-overlap, 14px) * -1);
  }
  :where(.oksAvatarGroupStack[data-grid=true] .oksAvatarGroupItem:not(:first-child)) {
    margin-left: 0;
  }
  :where(.oksAvatarGroupOverflowText) {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--oks-avatar-group-count-color, var(--oks-color-primary-600, #4f46e5));
  }
}
`);function zn(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}var Np=[50,100,200,300,400,500,600,700,800,900,950];function Kv(i){const c=wn(i,50,950);let d=Np[0]??500,y=Math.abs(d-c);for(const b of Np){const E=Math.abs(b-c);E<y&&(d=b,y=E)}return d}function Vs(i,c){const p=`var(--oks-color-default-${c}, var(--oks-color-primary-${c}, #3b82f6))`;return i==="default"?p:`var(--oks-color-${i}-${c}, ${p})`}function Qv(i,c){return Vs(i,c)}function Zv(i){const c=typeof i=="string"?i.trim():"";if(!c)return"";const p=c.split(/\s+/).filter(Boolean);if(p.length===0)return"";const d=p[0]?.[0]??"",y=p.length>1?p[p.length-1]?.[0]??"":"";return(d+y).toUpperCase()}function Jv(i){const c=Math.floor(Math.abs(i));return c<1e3?`+${c}`:c<1e6?`+${Math.floor(c/1e3)}K`:c<1e9?`+${Math.floor(c/1e6)}M`:`+${Math.floor(c/1e9)}B`}var oe=g.forwardRef((i,c)=>{const{name:p,src:d,size:y="md",color:b="default",radius:E="full",colorDepth:Y=500,isBordered:A=!1,isDisabled:j=!1,isFocusable:H=!1,showFallback:M=!1,icon:G,fallback:I,tooltip:U=!1,ImgComponent:te="img",imgProps:pe,classNames:W,className:ke,style:de,...P}=i,ne=typeof p=="string"?p:"",ie=j,ee=b,q=typeof Y=="number"?Kv(Y):500,X=q<=400?"#000":"#fff",[he,ye]=g.useState(!1);g.useEffect(()=>ye(!1),[d]);const ce=d?he?M===!0:!1:!0,Se={...{"--oks-avatar-bg":Vs(ee,q),"--oks-avatar-bg-50":Vs(ee,50),"--oks-avatar-fg":X,"--oks-avatar-border":Qv(ee,q)},...de??{}},ae=P["aria-label"],k=typeof ae=="string"?ae:ne||void 0,O=H===!0&&P.tabIndex===void 0?0:P.tabIndex,K=zn(zn("oksAvatar",W?.base),ke),xe=I??(ne.trim().length>0?o.jsx("span",{className:zn("oksAvatarInitials",W?.name),"aria-hidden":"true",children:Zv(ne)}):o.jsx("span",{className:zn("oksAvatarFallbackIcon",W?.icon),"aria-hidden":"true",children:G??o.jsx(Xv,{})})),ue=o.jsx("div",{...P,ref:c,className:K,"data-size":y,"data-color":ee,"data-radius":E,"data-bordered":A?"true":void 0,"data-focusable":H?"true":void 0,"data-disabled":ie?"true":void 0,role:ce?"img":P.role,"aria-label":ce?k:P["aria-label"],tabIndex:ie?P.tabIndex:O,style:Se,children:ce?o.jsx("span",{className:zn("oksAvatarFallback",W?.fallback),children:xe}):o.jsx(te,{...pe,className:zn(zn("oksAvatarImage",W?.img),pe?.className),src:d,alt:pe?.alt??ne,draggable:!1,onError:Z=>{ye(!0),pe?.onError?.(Z)}})}),f=U===!0?ne:typeof U=="object"&&U!==null?"content"in U?U.content??ne:ne:null,v=typeof U=="object"&&U!==null?"props"in U?U.props:U:void 0;if(!((U===!0||typeof U=="object"&&U!==null)&&typeof f=="string"?f.trim().length>0:f!=null))return ue;const w=ie?o.jsx("span",{className:"oksAvatarTooltipWrapper",children:ue}):ue;return o.jsx(Oe,{...v,content:f,children:w})});oe.displayName="Avatar";var Ga=g.forwardRef((i,c)=>{const{children:p,max:d=5,total:y,size:b="md",color:E="default",radius:Y="full",isGrid:A=!1,isDisabled:j,isBordered:H=!1,renderCount:M,classNames:G,className:I,style:U,...te}=i,pe=jn.Children.toArray(p),W=Math.max(0,Math.floor(d)),ke=typeof y=="number"?y-W:pe.length-W,de=ke>0?ke:0,P={...U??{}},ne=zn(zn("oksAvatarGroup",G?.base),I);return o.jsxs("div",{...te,ref:c,className:ne,"data-grid":A?"true":void 0,"data-color":E,"data-radius":Y,"data-bordered":H?"true":void 0,"data-disabled":j?"true":void 0,style:P,children:[o.jsx("div",{className:"oksAvatarGroupStack","data-grid":A?"true":void 0,children:pe.slice(0,W).map((ie,ee)=>{if(jn.isValidElement(ie)){const q=ie,X={size:b};return q.props?.radius===void 0&&(X.radius=Y),q.props?.isBordered===void 0&&(X.isBordered=H),q.props?.isDisabled===void 0&&(X.isDisabled=j),q.props?.color===void 0&&(X.color=E),o.jsx("div",{className:"oksAvatarGroupItem",children:jn.cloneElement(ie,X)},ee)}return o.jsx("div",{className:"oksAvatarGroupItem",children:ie},ee)})}),de>0?o.jsx("span",{className:zn("oksAvatarGroupOverflowText",G?.count),style:{"--oks-avatar-group-count-color":Vs(E,600)},children:M?M(de):Jv(de)}):null]})});Ga.displayName="AvatarGroup";Sn(`@layer components {
  :where(.oksBadge) {
    --oks-badge-min-size: 20px;
    --oks-badge-padding-x: 7px;
    --oks-badge-font-size: 12px;
    --oks-badge-font-weight: 600;
    --oks-badge-border-radius: var(--oks-radius-md, 0.375rem);
    --oks-badge-outline-width: 2px;
    --oks-badge-offset: 0px;
    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);
    --oks-badge-shadow: none;
    --oks-badge-outline: var(--oks-color-surface, #fff);
    position: relative;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
  }
  :where(.oksBadgeBadge) {
    min-width: var(--oks-badge-min-size);
    height: var(--oks-badge-min-size);
    padding: 0 var(--oks-badge-padding-x);
    border-radius: var(--oks-badge-border-radius);
    background-color: var(--oks-badge-bg);
    color: var(--oks-badge-fg);
    box-shadow: var(--oks-badge-shadow);
    font: inherit;
    font-size: var(--oks-badge-font-size);
    font-weight: var(--oks-badge-font-weight);
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    white-space: nowrap;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
  }
  :where(.oksBadge[data-outline=true]) :where(.oksBadgeBadge) {
    box-shadow: 0 0 0 var(--oks-badge-outline-width) var(--oks-badge-outline), var(--oks-badge-shadow);
  }
  :where(.oksBadge[data-shape=circle]) :where(.oksBadgeBadge) {
    --oks-badge-border-radius: 9999px;
  }
  :where(.oksBadge[data-one-char=true]) :where(.oksBadgeBadge) {
    --oks-badge-padding-x: 0px;
    width: var(--oks-badge-min-size);
  }
  :where(.oksBadge[data-dot=true]) :where(.oksBadgeBadge) {
    --oks-badge-min-size: 10px;
    --oks-badge-padding-x: 0px;
    width: var(--oks-badge-min-size);
  }
  :where(.oksBadge[data-size=sm]) {
    --oks-badge-min-size: 18px;
    --oks-badge-padding-x: 6px;
    --oks-badge-font-size: 11px;
  }
  :where(.oksBadge[data-size=md]) {
    --oks-badge-min-size: 20px;
    --oks-badge-padding-x: 7px;
    --oks-badge-font-size: 12px;
  }
  :where(.oksBadge[data-size=lg]) {
    --oks-badge-min-size: 24px;
    --oks-badge-padding-x: 8px;
    --oks-badge-font-size: 13px;
  }
  :where(.oksBadge[data-placement=top-right]) :where(.oksBadgeBadge) {
    top: var(--oks-badge-offset);
    right: var(--oks-badge-offset);
    transform: translate(50%, -50%);
  }
  :where(.oksBadge[data-placement=top-left]) :where(.oksBadgeBadge) {
    top: var(--oks-badge-offset);
    left: var(--oks-badge-offset);
    transform: translate(-50%, -50%);
  }
  :where(.oksBadge[data-placement=bottom-right]) :where(.oksBadgeBadge) {
    bottom: var(--oks-badge-offset);
    right: var(--oks-badge-offset);
    transform: translate(50%, 50%);
  }
  :where(.oksBadge[data-placement=bottom-left]) :where(.oksBadgeBadge) {
    bottom: var(--oks-badge-offset);
    left: var(--oks-badge-offset);
    transform: translate(-50%, 50%);
  }
  :where(.oksBadge[data-variant=solid]) {
    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);
  }
  :where(.oksBadge[data-variant=flat]) {
    --oks-badge-bg: color-mix( in srgb, var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6)) 16%, transparent );
    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));
  }
  :where(.oksBadge[data-variant=faded]) {
    --oks-badge-bg: var(--oks-badge-tone-50, var(--oks-color-primary-50, #eff6ff));
    --oks-badge-fg: var(--oks-badge-tone-700, var(--oks-color-primary-700, #1d4ed8));
  }
  :where(.oksBadge[data-variant=shadow]) {
    --oks-badge-bg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-badge-fg: var(--oks-badge-solid-fg, #fff);
    --oks-badge-shadow: 0 10px 18px color-mix(in srgb, #000 18%, transparent);
  }
  :where(.oksBadge[data-disable-animation=false]) :where(.oksBadgeBadge) {
    transition:
      transform 140ms ease,
      opacity 140ms ease,
      background-color 140ms ease,
      color 140ms ease,
      box-shadow 140ms ease;
  }
  :where(.oksBadge[data-disable-animation=true]) :where(.oksBadgeBadge) {
    transition: none;
  }
  @media (prefers-reduced-motion: reduce) {
    :where(.oksBadgeBadge) {
      transition: none;
    }
  }
}
`);function cc(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}function Ls(i,c){const p=`var(--oks-color-default-${c}, var(--oks-color-primary-${c}, #3b82f6))`;return i==="default"?p:`var(--oks-color-${i}-${c}, ${p})`}var We=g.forwardRef((i,c)=>{const{children:p,content:d,variant:y="solid",color:b="default",size:E="md",shape:Y="rectangle",placement:A="top-right",showOutline:j=!0,disableOutline:H=!1,disableAnimation:M=!1,isInvisible:G=!1,isOneChar:I=!1,isDot:U=!1,classNames:te,className:pe,style:W,...ke}=i,de=H?!1:j,P=d!=null,ne=!G&&(U||P),ie={"--oks-badge-tone":Ls(b,500),"--oks-badge-tone-50":Ls(b,50),"--oks-badge-tone-100":Ls(b,100),"--oks-badge-tone-700":Ls(b,700),"--oks-badge-solid-fg":"#fff"},ee=ne?o.jsx("span",{className:cc("oksBadgeBadge",te?.badge),children:U?null:d}):null;return o.jsxs("span",{...ke,ref:c,"data-variant":y,"data-color":b,"data-size":E,"data-shape":Y,"data-placement":A,"data-outline":de?"true":"false","data-dot":U?"true":"false","data-one-char":I?"true":"false","data-invisible":G?"true":"false","data-disable-animation":M?"true":"false",className:cc(cc("oksBadge",te?.base),pe),style:{...ie,...W},children:[p,ee]})});We.displayName="Badge";function hn(i){return null}hn.displayName="Tab";Sn(`@layer components {
  .oksTabsRoot {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
  }
  .oksTabsRoot[data-radius=none] {
    --oks-tabs-radius: 0px;
  }
  .oksTabsRoot[data-radius=sm] {
    --oks-tabs-radius: 0.25rem;
  }
  .oksTabsRoot[data-radius=md] {
    --oks-tabs-radius: 0.5rem;
  }
  .oksTabsRoot[data-radius=lg] {
    --oks-tabs-radius: 0.75rem;
  }
  .oksTabsRoot[data-radius=full] {
    --oks-tabs-radius: 9999px;
  }
  .oksTabsRoot[data-placement=bottom][data-vertical=false] {
    flex-direction: column-reverse;
  }
  .oksTabsRoot[data-vertical=true] {
    flex-direction: row;
  }
  .oksTabsRoot[data-vertical=true][data-placement=end] {
    flex-direction: row-reverse;
  }
  .oksTablist {
    display: flex;
    gap: var(--oks-space-1, 0.25rem);
    border-bottom: 1px solid var(--oks-color-neutral-200, #e5e7eb);
    overflow: auto;
    position: relative;
  }
  .oksTabsRoot[data-vertical=true] > .oksTablist {
    flex-direction: column;
    border-bottom: 0;
    border-inline-end: 1px solid var(--oks-color-neutral-200, #e5e7eb);
  }
  .oksTabsRoot[data-vertical=true][data-placement=end] > .oksTablist {
    border-inline-end: 0;
    border-inline-start: 1px solid var(--oks-color-neutral-200, #e5e7eb);
  }
  .oksTabsRoot[data-vertical=true] > .oksTabsPanels {
    flex: 1 1 auto;
    padding-inline-start: var(--oks-space-3, 0.75rem);
  }
  .oksTabsRoot[data-vertical=true][data-placement=end] > .oksTabsPanels {
    padding-inline-start: 0;
    padding-inline-end: var(--oks-space-3, 0.75rem);
  }
  .oksTabsRoot[data-full-width=true] > .oksTablist {
    width: 100%;
  }
  .oksTabsTabWrapper {
    display: inline-flex;
  }
  .oksTabsRoot[data-full-width=true] > .oksTablist .oksTabsTabWrapper {
    flex: 1 1 0;
  }
  .oksTabsTab {
    appearance: none;
    border: 0;
    background-color: transparent;
    color: inherit;
    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);
    border-radius: var(--oks-tabs-radius, 0.5rem);
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
  }
  .oksTabsRoot[data-full-width=true] > .oksTablist .oksTabsTab {
    width: 100%;
  }
  .oksTabsRoot[data-size=sm] > .oksTablist .oksTabsTab {
    padding: var(--oks-space-1_5, 0.375rem) var(--oks-space-2, 0.5rem);
    font-size: 0.875rem;
  }
  .oksTabsRoot[data-size=md] > .oksTablist .oksTabsTab {
    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);
    font-size: 0.95rem;
  }
  .oksTabsRoot[data-size=lg] > .oksTablist .oksTabsTab {
    padding: var(--oks-space-2_5, 0.625rem) var(--oks-space-4, 1rem);
    font-size: 1rem;
  }
  .oksTabsTab[aria-disabled=true],
  .oksTabsTab:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .oksTabsTabContent {
    display: inline-flex;
    min-width: 0;
  }
  .oksTabsCursor {
    position: absolute;
    left: 0;
    right: auto;
    bottom: 0;
    height: 2px;
    width: var(--oks-tabs-cursor-w, 0px);
    transform: translateX(var(--oks-tabs-cursor-x, 0px));
    background-color: var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));
    border-radius: 9999px;
  }
  .oksTabsRoot[data-vertical=true] > .oksTablist .oksTabsCursor {
    top: 0;
    bottom: auto;
    left: 0;
    width: 2px;
    height: var(--oks-tabs-cursor-h, 0px);
    transform: translateY(var(--oks-tabs-cursor-y, 0px));
  }
  @media (prefers-reduced-motion: no-preference) {
    .oksTabsRoot[data-motion=default]:not([data-disable-cursor-animation=true]) > .oksTablist .oksTabsCursor {
      transition:
        transform 120ms ease,
        width 120ms ease,
        height 120ms ease;
    }
  }
  .oksTabsRoot[data-variant=solid] > .oksTablist {
    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);
    background-color: var(--oks-color-neutral-50, #f9fafb);
    padding: var(--oks-space-1_5, 0.375rem);
    border-radius: var(--oks-tabs-radius, 0.5rem);
    gap: var(--oks-space-1, 0.25rem);
    border-bottom: 0;
  }
  .oksTabsRoot[data-variant=solid][data-size=sm] > .oksTablist {
    padding: var(--oks-space-1, 0.25rem);
    gap: var(--oks-space-0_5, 0.125rem);
  }
  .oksTabsRoot[data-variant=solid] > .oksTablist .oksTabsTab[data-selected=true] {
    background-color: var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));
    color: #fff;
  }
  .oksTabsRoot[data-variant=solid] > .oksTablist .oksTabsTab[data-selected=false] {
    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));
    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));
  }
  .oksTabsRoot[data-variant=bordered] > .oksTablist {
    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);
    border-bottom: 0;
    border-radius: var(--oks-tabs-radius, 0.5rem);
    padding: var(--oks-space-1_5, 0.375rem);
    gap: var(--oks-space-1, 0.25rem);
  }
  .oksTabsRoot[data-variant=bordered][data-size=sm] > .oksTablist {
    padding: var(--oks-space-1, 0.25rem);
    gap: var(--oks-space-0_5, 0.125rem);
  }
  .oksTabsRoot[data-variant=bordered] > .oksTablist .oksTabsTab[data-selected=false] {
    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);
    background-color: var(--oks-color-neutral-50, #f9fafb);
  }
  .oksTabsRoot[data-variant=bordered] > .oksTablist .oksTabsTab[data-selected=true] {
    border: 1px solid var(--oks-tabs-tone, var(--oks-color-primary-500, #3b82f6));
    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));
    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));
  }
  .oksTabsRoot[data-variant=light] > .oksTablist {
    border-bottom: 0;
  }
  .oksTabsRoot[data-variant=light] > .oksTablist .oksTabsTab[data-selected=true] {
    background-color: var(--oks-tabs-tone-50, var(--oks-color-primary-50, #eff6ff));
    color: var(--oks-tabs-tone-700, var(--oks-color-primary-700, #1d4ed8));
  }
  .oksTabsRoot[data-variant=light] > .oksTablist .oksTabsTab[data-selected=false] {
    background-color: transparent;
  }
  .oksTabsRoot[data-variant=underlined] > .oksTablist {
    border-bottom: 1px solid var(--oks-color-neutral-200, #e5e7eb);
  }
  .oksTabsRoot[data-variant=underlined] > .oksTablist .oksTabsTab {
    border-radius: var(--oks-tabs-radius, 0.5rem);
  }
  .oksTablist[data-appearance=segmented] {
    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);
    background-color: var(--oks-color-neutral-50, #f9fafb);
    padding: var(--oks-space-1_5, 0.375rem);
    border-radius: var(--oks-tabs-radius, 0.5rem);
    gap: var(--oks-space-1, 0.25rem);
    border-bottom: 0;
  }
  .oksTablist[data-appearance=segmented] > * {
    border-radius: var(--oks-tabs-radius, 0.5rem);
  }
  .oksTabsRoot[data-density=compact] > .oksTablist[data-appearance=segmented] {
    padding: var(--oks-space-1, 0.25rem);
    gap: var(--oks-space-0_5, 0.125rem);
  }
  .oksTabsRoot[data-orientation=vertical] .oksTablist[data-appearance=segmented] {
    flex-direction: column;
  }
  .oksTablist[data-appearance=pill] {
    border-bottom: 0;
  }
  .oksTablist[data-appearance=pill] > * {
    border-radius: var(--oks-tabs-radius, 9999px);
  }
  .oksTablist[data-appearance=pill] .oksTabTrigger {
    padding: var(--oks-space-2, 0.5rem) var(--oks-space-4, 1rem);
  }
  .oksTablist[data-appearance=outline] {
    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);
    border-bottom: 0;
    border-radius: var(--oks-tabs-radius, 0.5rem);
    padding: var(--oks-space-1_5, 0.375rem);
    gap: var(--oks-space-1, 0.25rem);
  }
  .oksTabsRoot[data-density=compact] > .oksTablist[data-appearance=outline] {
    padding: var(--oks-space-1, 0.25rem);
    gap: var(--oks-space-0_5, 0.125rem);
  }
  .oksTablist[data-appearance=dot] {
    border-bottom: 0;
  }
  .oksTablist[data-appearance=dot] > .oksButton[data-active=true]::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background-color: var(--oks-color-primary-500, #3b82f6);
    margin-inline-end: 6px;
    transform: translateY(-1px);
  }
  .oksTabsIndicator {
    position: absolute;
    left: 0;
    right: auto;
    bottom: 0;
    height: var(--oks-tabs-indicator-h, 2px);
    width: var(--oks-tabs-indicator-w, 0px);
    transform: translateX(var(--oks-tabs-indicator-x, 0px)) translateY(var(--oks-tabs-indicator-offset-y, 0px));
    background-color: var( --oks-tabs-indicator-color, var(--oks-color-primary-500, #3b82f6) );
    border-radius: var(--oks-tabs-indicator-radius, 0px);
  }
  @media (prefers-reduced-motion: no-preference) {
    .oksTabsIndicator {
      transition: transform 120ms ease, width 120ms ease;
    }
  }
  .oksTabsRoot[data-orientation=vertical] .oksTabsIndicator {
    top: 0;
    bottom: auto;
    left: 0;
    width: var(--oks-tabs-indicator-w, 2px);
    height: var(--oks-tabs-indicator-h, 0px);
    transform: translateY(var(--oks-tabs-indicator-y, 0px)) translateX(var(--oks-tabs-indicator-offset-x, 0px));
  }
  .oksTablist[data-underline-position=top] .oksTabsIndicator {
    top: 0;
    bottom: auto;
  }
  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=true][data-elevated=true] {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12), 0 0 0 4px rgba(147, 197, 253, 0.45);
  }
  .oksTablist[data-appearance=outline][data-outline-active=stroke] .oksTabTrigger[data-active=true] {
    border: 2px solid var(--oks-color-primary-500, #3b82f6);
    background-color: transparent;
    color: var(--oks-color-primary-700, #1d4ed8);
  }
  .oksTabsPanels {
    display: block;
    width: 100%;
    min-width: 0;
  }
  .oksTabsPanel {
    padding: var(--oks-space-3, 0.75rem) 0 0 0;
    width: 100%;
    min-width: 0;
  }
  .oksTabTrigger {
    appearance: none;
    border: 0;
    background-color: transparent;
    color: inherit;
    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);
    border-radius: var(--oks-tabs-radius, 0.5rem);
    cursor: pointer;
  }
  .oksTabTrigger[data-size=sm] {
    padding: var(--oks-space-1_5, 0.375rem) var(--oks-space-2, 0.5rem);
    font-size: 0.875rem;
  }
  .oksTabTrigger[data-size=md] {
    padding: var(--oks-space-2, 0.5rem) var(--oks-space-3, 0.75rem);
    font-size: 0.95rem;
  }
  .oksTablist[data-appearance=segmented] .oksTabTrigger[data-active=true],
  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=true] {
    background-color: var(--oks-color-primary-500, #3b82f6);
    color: #fff;
  }
  .oksTablist[data-appearance=segmented] .oksTabTrigger[data-active=false],
  .oksTablist[data-appearance=pill] .oksTabTrigger[data-active=false] {
    background-color: var(--oks-color-primary-50, #eff6ff);
    color: var(--oks-color-primary-700, #1d4ed8);
  }
  .oksTablist[data-appearance=outline] .oksTabTrigger[data-active=false] {
    border: 1px solid var(--oks-color-neutral-200, #e5e7eb);
    background-color: var(--oks-color-neutral-50, #f9fafb);
  }
  .oksTablist[data-appearance=outline] .oksTabTrigger[data-active=true] {
    border: 1px solid var(--oks-color-primary-500, #3b82f6);
    background-color: var(--oks-color-primary-50, #eff6ff);
    color: var(--oks-color-primary-700, #1d4ed8);
  }
  .oksTablist[data-appearance=dot] .oksTabTrigger[data-active=true]::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background-color: var(--oks-color-primary-500, #3b82f6);
    margin-inline-end: 6px;
    transform: translateY(-1px);
  }
  .oksTabsRoot[data-orientation=vertical] {
    flex-direction: row;
  }
  .oksTabsRoot[data-orientation=vertical] > .oksTablist {
    flex-direction: column;
    gap: var(--oks-space-1, 0.25rem);
    border-bottom: 0;
    border-inline-end: 1px solid var(--oks-color-neutral-200, #e5e7eb);
  }
  .oksTabsRoot[data-orientation=vertical][data-tablist-position=end] {
    flex-direction: row-reverse;
  }
  .oksTabsRoot[data-orientation=vertical] > .oksTabsPanels {
    flex: 1 1 auto;
    padding-inline-start: var(--oks-space-3, 0.75rem);
  }
}
`);function ya(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}function uc(i,c){const p=`var(--oks-color-default-${c}, var(--oks-color-primary-${c}, #3b82f6))`;return i==="default"?p:`var(--oks-color-${i}-${c}, ${p})`}function dc(i){return String(i).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function Ep(i){return g.isValidElement(i)&&i.type===hn}function Mp(i){return i.startsWith(".$")?i.slice(2):i}function Op(i,c){for(const p of i)if(!c.has(p))return p}var wc=g.forwardRef(function(c,p){const{children:d,variant:y="solid",color:b="default",size:E="md",radius:Y="full",fullWidth:A=!1,items:j,disabledKeys:H,selectedKey:M,defaultSelectedKey:G,shouldSelectOnPressUp:I=!0,keyboardActivation:U="automatic",disableCursorAnimation:te=!1,isDisabled:pe=!1,disableAnimation:W=!1,classNames:ke,className:de,placement:P="top",isVertical:ne=!1,destroyInactiveTabPanel:ie=!0,onSelectionChange:ee,...q}=c,X=g.useMemo(()=>{const Q=new Set;for(const F of H??[])Q.add(F);return Q},[H]),he=g.useMemo(()=>{if(j!==void 0){const F=d;if(typeof F!="function")return[];const Be=[];for(const J of j){const fe=F(J);if(!Ep(fe))continue;const ze=fe.key;ze!=null&&Be.push({key:typeof ze=="string"?Mp(ze):ze,props:fe.props})}return Be}const Q=[];for(const F of g.Children.toArray(d)){if(!Ep(F))continue;const Be=F.key;Be!=null&&Q.push({key:typeof Be=="string"?Mp(Be):Be,props:F.props})}return Q},[d,j]),ye=g.useMemo(()=>he.map(Q=>Q.key),[he]),ce=M!==void 0,[ve,Se]=g.useState(()=>G!==void 0?G:Op(ye,X)),ae=g.useMemo(()=>ne?!0:P==="start"||P==="end",[ne,P]),k=g.useMemo(()=>ne?"start":P,[ne,P]),O=g.useMemo(()=>{const Q=ce?M:ve;return Q!=null&&ye.includes(Q)&&!X.has(Q)?Q:Op(ye,X)},[ce,X,ve,ye,M]),K=g.useCallback(Q=>{pe||X.has(Q)||ye.includes(Q)&&(ce||Se(Q),ee?.(Q))},[ce,X,pe,ye,ee]),xe=g.useRef(new Map),ue=g.useCallback((Q,F)=>{xe.current.set(Q,F)},[]),f=g.useId(),v=g.useMemo(()=>`oks-${q.id?dc(q.id):dc(`tabs-${f}`)}`,[f,q.id]),R=g.useCallback(Q=>{const F=dc(Q);return{tab:`${v}-tab-${F}`,panel:`${v}-panel-${F}`}},[v]),w=g.useRef(null),Z=g.useRef(null),$=g.useCallback(()=>{if(y!=="underlined")return;const Q=w.current,F=Z.current;if(!Q||!F)return;const Be=O;if(Be===void 0)return;const J=xe.current.get(Be);if(!J)return;const fe=Q.getBoundingClientRect(),ze=J.getBoundingClientRect();if(ae){const Ie=Math.max(0,ze.top-fe.top),ge=ze.height;F.style.setProperty("--oks-tabs-cursor-y",`${Ie}px`),F.style.setProperty("--oks-tabs-cursor-h",`${ge}px`)}else{const Ie=Math.max(0,ze.left-fe.left),ge=ze.width;F.style.setProperty("--oks-tabs-cursor-x",`${Ie}px`),F.style.setProperty("--oks-tabs-cursor-w",`${ge}px`)}},[ae,O,y]);g.useEffect(()=>{$()},[$]),g.useEffect(()=>{if(y!=="underlined")return;const Q=()=>$();return window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[$,y]);const le=Q=>{if(pe||!w.current)return;const Be=ye;if(Be.length===0)return;const J=globalThis.document?.activeElement,fe=(()=>{for(const et of Be){const ot=xe.current.get(et);if(ot&&J&&ot===J)return et}return O})(),ze=fe!==void 0?Be.indexOf(fe):-1,Ie=et=>{if(Be.length===0)return;let ot=ze>=0?ze:0;for(let it=0;it<Be.length;it++){ot=(ot+et+Be.length)%Be.length;const Ae=Be[ot];if(X.has(Ae))continue;xe.current.get(Ae)?.focus(),U==="automatic"&&K(Ae);return}},ge=et=>{const ot=et==="start"?Be:[...Be].reverse();for(const it of ot){if(X.has(it))continue;xe.current.get(it)?.focus(),U==="automatic"&&K(it);return}},Ee=!ae,_e=Q.key;if(_e==="Home"){Q.preventDefault(),ge("start");return}if(_e==="End"){Q.preventDefault(),ge("end");return}if(Ee&&_e==="ArrowRight"||!Ee&&_e==="ArrowDown"){Q.preventDefault(),Ie(1);return}if(Ee&&_e==="ArrowLeft"||!Ee&&_e==="ArrowUp"){Q.preventDefault(),Ie(-1);return}if(U==="manual"&&(_e==="Enter"||_e===" ")){if(!J)return;for(const et of Be){const ot=xe.current.get(et);if(ot&&ot===J){Q.preventDefault(),K(et);return}}}},De=ya(ya("oksTabsRoot",ke?.base),de),V=ya("oksTablist",ke?.tabList),se=ya("oksTabsCursor",ke?.cursor),Ce="oksTabsPanels",Ne=ya("oksTabsPanel",ke?.panel),Qe={...{"--oks-tabs-tone":uc(b,500),"--oks-tabs-tone-50":uc(b,50),"--oks-tabs-tone-700":uc(b,700)},...q.style??{}},Fe=g.useMemo(()=>{if(O!==void 0)return he.find(Q=>Q.key===O)},[he,O]);return o.jsxs("div",{...q,ref:p,className:De,style:Qe,"data-variant":y,"data-color":b,"data-size":E,"data-radius":Y,"data-full-width":A?"true":"false","data-placement":k,"data-vertical":ae?"true":"false","data-disabled":pe?"true":"false","data-motion":W?"reduced":"default","data-disable-cursor-animation":te?"true":"false",children:[o.jsxs("div",{className:V,role:"tablist","aria-orientation":ae?"vertical":"horizontal",ref:w,onKeyDown:le,children:[y==="underlined"?o.jsx("div",{className:se,ref:Z,"aria-hidden":"true"}):null,he.map(Q=>{const F=Q.key===O,Be=pe||X.has(Q.key),J=R(Q.key),fe=ya("oksTabsTabWrapper",ke?.tabWrapper),ze=ya("oksTabsTab",ke?.tab),Ie=ya("oksTabsTabContent",ke?.tabContent),ge=Q.props.shouldSelectOnPressUp??I,Ee=()=>K(Q.key),_e=it=>{ue(Q.key,it),Q.props.tabRef&&(Q.props.tabRef.current=it)},et={role:"tab",id:J.tab,"aria-selected":F,"aria-controls":J.panel,tabIndex:F?0:-1,"data-selected":F?"true":void 0,"data-disabled":Be?"true":void 0},ot=o.jsx("span",{className:Ie,children:Q.props.title});return o.jsx("div",{className:fe,children:Q.props.href?o.jsx("a",{...et,className:ze,href:Q.props.href,target:Q.props.target,rel:Q.props.rel,download:Q.props.download,ping:Q.props.ping,referrerPolicy:Q.props.referrerPolicy,"aria-disabled":Be?"true":void 0,onClick:Be?it=>{it.preventDefault()}:ge?()=>Ee():void 0,onMouseDown:Be||ge?void 0:it=>{it.preventDefault(),Ee()},ref:_e,children:ot}):o.jsx("button",{...et,type:"button",className:ze,disabled:Be,onClick:ge?Ee:void 0,onMouseDown:ge?void 0:it=>{it.preventDefault(),Ee()},ref:_e,children:ot})},String(Q.key))})]}),o.jsx("div",{className:Ce,children:ie?Fe?o.jsx("div",{className:Ne,role:"tabpanel",id:R(Fe.key).panel,"aria-labelledby":R(Fe.key).tab,children:Fe.props.children}):null:he.map(Q=>{const F=Q.key===O,Be=R(Q.key);return o.jsx("div",{className:Ne,role:"tabpanel",id:Be.panel,"aria-labelledby":Be.tab,hidden:!F,children:Q.props.children},String(Q.key))})})]})});wc.displayName="Tabs";function Fv(i){return i.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")}function fc(){return typeof window<"u"&&typeof document<"u"}function Iv(i){const c=g.useCallback(()=>!fc()||!i?null:new URL(window.location.href).searchParams.get(i),[i]),p=g.useCallback(y=>{if(!fc()||!i)return;const b=new URL(window.location.href),E=b.searchParams;y==null||y===""?E.delete(i):E.set(i,y);const Y=`${b.pathname}?${E.toString()}${b.hash??""}`;window.history.pushState({},"",Y);const A=new PopStateEvent("popstate");window.dispatchEvent(A)},[i]),d=g.useCallback(y=>{if(!fc()||!i)return()=>{};const b=()=>y(c());return window.addEventListener("popstate",b),()=>window.removeEventListener("popstate",b)},[c,i]);return{get:c,set:p,subscribe:d}}function $v(i,c){return{...i??{},...c??{}}}var Wv=g.forwardRef(function(c,p){const{data:d,defaultTab:y=0,value:b,onChange:E,className:Y,orientation:A="horizontal",tablistPosition:j="start",mode:H="basic",tabId:M="tab",variant:G,size:I,radius:U,triggerProps:te,activeTriggerProps:pe,allowKeyboardNavigation:W=!0,renderLazy:ke=!0,idStrategy:de}=c,P=g.useMemo(()=>d.map(V=>({...V,id:V.id??(de?de(V.title):Fv(V.title))})),[d,de]),ne=Iv(H==="url"?M:void 0),ie=g.useCallback(V=>V>=0&&V<P.length?V:0,[P.length]),ee=g.useCallback(()=>{if(H!=="url")return null;const V=ne.get();if(!V)return null;const se=P.findIndex(Ce=>Ce.id===V);return se>=0?se:null},[P,H,ne]),q=g.useMemo(()=>{const V=ee();return V!==null?V:ie(y)},[y,ie,ee]),X=typeof b=="number",[he,ye]=g.useState(q),ce=X?b:he;g.useEffect(()=>H!=="url"?void 0:ne.subscribe(se=>{const Ce=se?P.findIndex(Ne=>Ne.id===se):-1;if(Ce>=0)X||ye(Ce),E?.(Ce);else{const Ne=ie(y);X||ye(Ne),E?.(Ne)}}),[y,ie,X,P,H,E,ne]);const ve=["oksTabsRoot",Y].filter(Boolean).join(" "),Se=g.useRef([]);Se.current=[];const ae=V=>{Se.current[V]?.focus()},k=V=>{if(X||ye(V),E?.(V),H==="url"){const se=P[V]?.id;se&&ne.set(se)}},O=V=>se=>{se.preventDefault(),k(V)},K=V=>se=>{if(!W)return;const Ce=A==="horizontal",Ne=se.key;if(Ne==="Home"){se.preventDefault(),ae(0);return}if(Ne==="End"){se.preventDefault(),ae(P.length-1);return}if(Ce&&Ne==="ArrowRight"||!Ce&&Ne==="ArrowDown"){se.preventDefault();const He=(V+1)%P.length;ae(He);return}if(Ce&&Ne==="ArrowLeft"||!Ce&&Ne==="ArrowUp"){se.preventDefault();const He=(V-1+P.length)%P.length;ae(He);return}(Ne==="Enter"||Ne===" ")&&(se.preventDefault(),k(V))},xe=I??"comfortable",ue=xe==="compact"?"sm":"md";let f="underline",v={height:4},R={underline:{}};const w=G;w&&(w==="underlineThick"&&(f="underline"),w==="segmented"&&(f="segmented"),w==="pill"&&(f="pill"),w==="dot"&&(f="dot"),w==="outline"&&(f="outline"),w==="underlineThick"?(v={height:4,...v},R={underline:{widthStrategy:"tab"}}):w==="outline"&&(R={outline:{activeEmphasis:"stroke"}}));const Z=V=>V?$v(te,pe):te??{},$=g.useRef(null),le=g.useRef(null);g.useEffect(()=>{if(f!=="underline")return;const V=$.current,se=le.current,Ce=Se.current[ce];if(!V||!se||!Ce)return;const Ne=V.getBoundingClientRect(),He=Ce.getBoundingClientRect();if(A==="horizontal"){const Qe=Math.max(0,He.left-Ne.left),Fe=He.width,Q=typeof v?.height=="number"?`${v?.height}px`:v?.height??"2px";se.style.setProperty("--oks-tabs-indicator-x",`${Qe}px`),se.style.setProperty("--oks-tabs-indicator-w",`${Fe}px`),se.style.setProperty("--oks-tabs-indicator-h",Q),v?.color&&se.style.setProperty("--oks-tabs-indicator-color",v.color)}else{const Qe=Math.max(0,He.top-Ne.top),Fe=He.height,Q=typeof v?.height=="number"?`${v?.height}px`:v?.height??"2px";se.style.setProperty("--oks-tabs-indicator-y",`${Qe}px`),se.style.setProperty("--oks-tabs-indicator-h",`${Fe}px`),se.style.setProperty("--oks-tabs-indicator-w",Q),v?.color&&se.style.setProperty("--oks-tabs-indicator-color",v.color)}},[ce,f,v,A]),g.useEffect(()=>{if(f!=="underline")return;const V=()=>{const se=le.current;if(!se)return;const Ce=ce,Ne=Se.current[Ce],He=$.current;if(!Ne||!He)return;const Qe=He.getBoundingClientRect(),Fe=Ne.getBoundingClientRect();if(A==="horizontal"){const Q=Math.max(0,Fe.left-Qe.left),F=Fe.width;se.style.setProperty("--oks-tabs-indicator-x",`${Q}px`),se.style.setProperty("--oks-tabs-indicator-w",`${F}px`)}else{const Q=Math.max(0,Fe.top-Qe.top),F=Fe.height;se.style.setProperty("--oks-tabs-indicator-y",`${Q}px`),se.style.setProperty("--oks-tabs-indicator-h",`${F}px`)}};return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[ce,f,A]);const De=V=>typeof V=="function"?V():V;return o.jsxs("div",{className:ve,"data-orientation":A,"data-tablist-position":j,"data-density":xe,style:{...U!==void 0?{"--oks-tabs-radius":typeof U=="number"?`${U}px`:U==="none"?"0px":U==="sm"?"0.25rem":U==="md"?"0.5rem":U==="lg"?"0.75rem":U==="full"?"9999px":void 0}:void 0},ref:p,children:[o.jsxs("div",{className:"oksTablist",role:"tablist","aria-orientation":A,"data-appearance":f,"data-underline-position":R?.underline?.position,"data-outline-active":R?.outline?.activeEmphasis,ref:$,children:[f==="underline"?o.jsx("div",{className:"oksTabsIndicator",ref:le,"aria-hidden":"true"}):null,P.map((V,se)=>{const Ce=se===ce,Ne=Z(Ce),He=`oks-tab-${V.id}`,Qe=`oks-panel-${V.id}`;return o.jsx("button",{...Ne,ref:Fe=>{Se.current[se]=Fe},role:"tab","aria-selected":Ce,"aria-controls":Qe,id:He,tabIndex:Ce?0:-1,title:V.title,onClick:O(se),onKeyDown:K(se),"data-active":Ce?"true":"false","data-size":ue,"data-elevated":f==="pill"&&R?.pill?.elevated&&Ce?"true":void 0,className:["oksTabTrigger",Ne?.className].filter(Boolean).join(" "),children:V.title},V.id)})]}),o.jsx("div",{className:"oksTabsPanels",children:ke?o.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${P[ce]?.id}`,"aria-labelledby":`oks-tab-${P[ce]?.id}`,children:De(P[ce]?.content)}):P.map((V,se)=>o.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${V.id}`,"aria-labelledby":`oks-tab-${V.id}`,hidden:se!==ce,children:De(V.content)},V.id))})]})});Wv.displayName="TabsLegacy";var $p=g.createContext(null);function jc(){const i=g.useContext($p);if(!i)throw new Error("oks-ui Tabs: TabsRoot is required");return i}function pc(i){return String(i).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function mc(){return typeof window<"u"&&typeof document<"u"}function Pv(i){const c=g.useCallback(()=>!mc()||!i?null:new URL(window.location.href).searchParams.get(i),[i]),p=g.useCallback(y=>{if(!mc()||!i)return;const b=new URL(window.location.href),E=b.searchParams;y==null||y===""?E.delete(i):E.set(i,y);const Y=`${b.pathname}?${E.toString()}${b.hash??""}`;window.history.pushState({},"",Y);const A=new PopStateEvent("popstate");window.dispatchEvent(A)},[i]),d=g.useCallback(y=>{if(!mc()||!i)return()=>{};const b=()=>y(c());return window.addEventListener("popstate",b),()=>window.removeEventListener("popstate",b)},[c,i]);return{get:c,set:p,subscribe:d}}var eg=g.forwardRef(function(c,p){const{id:d,value:y,defaultValue:b,onChange:E,mode:Y="basic",tabId:A="tab",orientation:j="horizontal",tablistPosition:H="start",variant:M,size:G="comfortable",radius:I,renderLazy:U=!0,className:te,children:pe}=c,W=Pv(Y==="url"?A:void 0),ke=g.useMemo(()=>{if(Y==="url"){const ve=W.get();if(ve!==null)return ve}return b},[b,Y,W]),de=y!==void 0,[P,ne]=g.useState(ke),ie=de?y:P;g.useEffect(()=>Y!=="url"?void 0:W.subscribe(Se=>{Se!==null&&(de||ne(Se),E?.(Se))}),[de,Y,E,W]);const ee=g.useCallback(ve=>{de||ne(ve),E?.(ve),Y==="url"&&W.set(String(ve))},[de,Y,E,W]),q=g.useId(),X=g.useMemo(()=>`oks-${pc(d||`tabs-${q}`)}`,[q,d]),he=g.useCallback(ve=>{const Se=pc(ve);return{tab:`${X}-tab-${Se}`,panel:`${X}-panel-${Se}`}},[X]),ye=g.useMemo(()=>{let ve="underline",Se={height:4},ae={underline:{widthStrategy:"tab"}};const k=M;return k&&(k==="underlineThick"&&(ve="underline"),k==="segmented"&&(ve="segmented"),k==="pill"&&(ve="pill"),k==="dot"&&(ve="dot"),k==="outline"&&(ve="outline"),k==="underlineThick"?(Se={height:4},ae={underline:{widthStrategy:"tab"}}):k==="outline"&&(ae={outline:{activeEmphasis:"stroke"}})),{value:ie,setValue:ee,orientation:j,appearance:ve,density:G,radius:I,indicator:Se,appearanceOptions:ae,renderLazy:U,getIds:he,isActive:O=>O===ie}},[M,G,ie,he,j,I,U,ee]),ce=["oksTabsRoot",te].filter(Boolean).join(" ");return o.jsx($p.Provider,{value:ye,children:o.jsx("div",{ref:p,id:d,className:ce,"data-orientation":j,"data-tablist-position":H,"data-density":G,"data-underline-position":ye.appearanceOptions?.underline?.position==="top"?"top":void 0,style:{...I!==void 0?{"--oks-tabs-radius":typeof I=="number"?`${I}px`:I==="none"?"0px":I==="sm"?"0.25rem":I==="md"?"0.5rem":I==="lg"?"0.75rem":I==="full"?"9999px":void 0}:void 0},children:pe})})});eg.displayName="TabsRoot";var tg=g.forwardRef(function(c,p){const{className:d,...y}=c,b=jc(),E=g.useRef(null),Y=["oksTablist",d].filter(Boolean).join(" "),A=g.useRef(null),j=H=>{const M=E.current;if(!M)return;const G=Array.from(M.querySelectorAll('[role="tab"]'));if(G.length===0)return;const I=b.orientation==="horizontal",U=G.findIndex(pe=>pe.getAttribute("aria-selected")==="true"),te=H.key;if(te==="Home"){H.preventDefault(),G[0]?.focus();return}if(te==="End"){H.preventDefault(),G[G.length-1]?.focus();return}if(I&&te==="ArrowRight"||!I&&te==="ArrowDown"){H.preventDefault();const pe=(U+1)%G.length;G[pe]?.focus();return}if(I&&te==="ArrowLeft"||!I&&te==="ArrowUp"){H.preventDefault();const pe=(U-1+G.length)%G.length;G[pe]?.focus();return}};return g.useEffect(()=>{if(b.appearance!=="underline")return;const H=E.current,M=A.current;if(!H||!M)return;const G=H.querySelector('[role="tab"][aria-selected="true"]');if(!G)return;const I=H.getBoundingClientRect(),U=G.getBoundingClientRect(),te=G.querySelector(".oksTabLabel"),W=(b.appearanceOptions?.underline?.widthStrategy??"tab")==="label"&&te?te.getBoundingClientRect().width:U.width,ke=b.appearanceOptions?.underline?.offset??0,de=b.appearanceOptions?.underline?.cap??"square";if(b.orientation==="horizontal"){const P=Math.max(0,U.left-I.left),ne=W,ie=typeof b.indicator?.height=="number"?`${b.indicator.height}px`:b.indicator?.height??"2px";M.style.setProperty("--oks-tabs-indicator-x",`${P}px`),M.style.setProperty("--oks-tabs-indicator-w",`${ne}px`),M.style.setProperty("--oks-tabs-indicator-h",ie),b.indicator?.color&&M.style.setProperty("--oks-tabs-indicator-color",b.indicator.color),M.style.setProperty("--oks-tabs-indicator-offset-y",`${ke}px`),M.style.setProperty("--oks-tabs-indicator-radius",de==="round"?"9999px":"0px")}else{const P=Math.max(0,U.top-I.top),ne=U.height,ie=typeof b.indicator?.height=="number"?`${b.indicator.height}px`:b.indicator?.height??"2px";M.style.setProperty("--oks-tabs-indicator-y",`${P}px`),M.style.setProperty("--oks-tabs-indicator-h",`${ne}px`),M.style.setProperty("--oks-tabs-indicator-w",ie),b.indicator?.color&&M.style.setProperty("--oks-tabs-indicator-color",b.indicator.color),M.style.setProperty("--oks-tabs-indicator-offset-x",`${ke}px`),M.style.setProperty("--oks-tabs-indicator-radius",de==="round"?"9999px":"0px")}},[b.value,b.appearance,b.indicator,b.orientation]),g.useEffect(()=>{if(b.appearance!=="underline")return;const H=()=>{const M=E.current,G=A.current;if(!M||!G)return;const I=M.querySelector('[role="tab"][aria-selected="true"]');if(!I)return;const U=M.getBoundingClientRect(),te=I.getBoundingClientRect();if(b.orientation==="horizontal"){const pe=Math.max(0,te.left-U.left),W=te.width;G.style.setProperty("--oks-tabs-indicator-x",`${pe}px`),G.style.setProperty("--oks-tabs-indicator-w",`${W}px`)}else{const pe=Math.max(0,te.top-U.top),W=te.height;G.style.setProperty("--oks-tabs-indicator-y",`${pe}px`),G.style.setProperty("--oks-tabs-indicator-h",`${W}px`)}};return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[b.appearance,b.orientation,b.value]),o.jsxs("div",{...y,className:Y,role:"tablist","aria-orientation":b.orientation,"data-appearance":b.appearance,"data-outline-active":b.appearanceOptions?.outline?.activeEmphasis,"data-underline-position":b.appearanceOptions?.underline?.position,ref:H=>{E.current=H,typeof p=="function"?p(H):p&&"current"in p&&(p.current=H)},onKeyDown:j,children:[b.appearance==="underline"?o.jsx("div",{className:"oksTabsIndicator",ref:A,"aria-hidden":"true"}):null,c.children]})});tg.displayName="TabList";var ng=g.forwardRef(function(c,p){const{value:d,disabled:y,className:b,children:E}=c,Y=jc(),A=Y.isActive(d),j=Y.getIds(d),H=Y.density==="compact"?"sm":"md",M=["oksTabTrigger",b].filter(Boolean).join(" ");return o.jsx("button",{ref:p,className:M,role:"tab",id:j.tab,"aria-selected":A,"aria-controls":j.panel,tabIndex:A?0:-1,disabled:y,"data-active":A?"true":"false","data-size":H,"data-elevated":Y.appearance==="pill"&&Y.appearanceOptions?.pill?.elevated&&A?"true":void 0,onClick:()=>Y.setValue(d),children:o.jsx("span",{className:"oksTabLabel",children:E})})});ng.displayName="TabTrigger";var ag=g.forwardRef(function(c,p){const{value:d,keepMounted:y,className:b,children:E}=c,Y=jc(),A=Y.getIds(d),j=Y.isActive(d),H=["oksTabsPanel",b].filter(Boolean).join(" ");return!j&&y===void 0&&Y.renderLazy?null:o.jsx("div",{ref:p,role:"tabpanel",id:A.panel,"aria-labelledby":A.tab,hidden:!j,className:H,children:E})});ag.displayName="TabPanel";Sn(`@layer components {
  :where(.oksChip) {
    --oks-chip-height: 28px;
    --oks-chip-padding-x: var(--oks-space-3, 12px);
    --oks-chip-gap: var(--oks-space-2, 8px);
    --oks-chip-font-size: 13px;
    --oks-chip-radius: 9999px;
    --oks-chip-border-width: 1px;
    --oks-chip-bg: transparent;
    --oks-chip-fg: currentColor;
    --oks-chip-border: transparent;
    --oks-chip-shadow: none;
    display: inline-flex;
    align-items: center;
    gap: var(--oks-chip-gap);
    height: var(--oks-chip-height);
    padding: 0 var(--oks-chip-padding-x);
    border-radius: var(--oks-chip-radius);
    border: var(--oks-chip-border-width) solid var(--oks-chip-border);
    background-color: var(--oks-chip-bg);
    color: var(--oks-chip-fg);
    box-shadow: var(--oks-chip-shadow);
    font: inherit;
    font-size: var(--oks-chip-font-size);
    line-height: 1;
    user-select: none;
    white-space: nowrap;
    box-sizing: border-box;
    transition:
      background-color 140ms ease,
      border-color 140ms ease,
      box-shadow 140ms ease,
      color 140ms ease,
      opacity 140ms ease;
  }
  :where(.oksChip[data-disabled=true]) {
    opacity: 0.65;
    cursor: not-allowed;
  }
  :where(.oksChipContent) {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :where(.oksChipDot) {
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background-color: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));
    flex: none;
  }
  :where(.oksChipAvatar) {
    width: calc(var(--oks-chip-height) - 8px);
    height: calc(var(--oks-chip-height) - 8px);
    border-radius: 9999px;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
  }
  :where(.oksChipAvatar) :where(img) {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  :where(.oksChipCloseButton) {
    width: calc(var(--oks-chip-height) - 6px);
    height: calc(var(--oks-chip-height) - 6px);
    border-radius: 9999px;
    border: 1px solid transparent;
    background-color: transparent;
    color: currentColor;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    margin-right: calc(var(--oks-chip-padding-x) * -0.6);
    opacity: 0.7;
  }
  :where(.oksChipCloseButton:hover) {
    opacity: 1;
    background-color: color-mix(in srgb, currentColor 12%, transparent);
  }
  :where(.oksChipCloseButton:active) {
    opacity: 1;
    background-color: color-mix(in srgb, currentColor 20%, transparent);
  }
  :where(.oksChipCloseButton:focus-visible) {
    outline: 2px solid var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));
    outline-offset: 2px;
  }
  :where(.oksChipCloseButton:disabled),
  :where(.oksChip[data-disabled=true]) :where(.oksChipCloseButton) {
    opacity: 0.5;
    cursor: not-allowed;
  }
  :where(.oksChip[data-radius=none]) {
    --oks-chip-radius: 0;
  }
  :where(.oksChip[data-radius=sm]) {
    --oks-chip-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksChip[data-radius=md]) {
    --oks-chip-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksChip[data-radius=lg]) {
    --oks-chip-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksChip[data-radius=full]) {
    --oks-chip-radius: 9999px;
  }
  :where(.oksChip[data-size=sm]) {
    --oks-chip-height: 24px;
    --oks-chip-padding-x: var(--oks-space-2, 8px);
    --oks-chip-gap: var(--oks-space-1, 4px);
    --oks-chip-font-size: 12px;
  }
  :where(.oksChip[data-size=md]) {
    --oks-chip-height: 28px;
    --oks-chip-padding-x: var(--oks-space-3, 12px);
    --oks-chip-gap: var(--oks-space-2, 8px);
    --oks-chip-font-size: 13px;
  }
  :where(.oksChip[data-size=lg]) {
    --oks-chip-height: 32px;
    --oks-chip-padding-x: var(--oks-space-4, 16px);
    --oks-chip-gap: var(--oks-space-2, 8px);
    --oks-chip-font-size: 14px;
  }
  :where(.oksChip[data-variant=solid]) {
    --oks-chip-bg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-chip-fg: var(--oks-chip-solid-fg, white);
  }
  :where(.oksChip[data-variant=bordered]) {
    --oks-chip-border: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));
  }
  :where(.oksChip[data-variant=light]) {
    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));
  }
  :where(.oksChip[data-variant=flat]) {
    --oks-chip-bg: color-mix( in srgb, var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6)) 16%, transparent );
    --oks-chip-fg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));
  }
  :where(.oksChip[data-variant=faded]) {
    --oks-chip-bg: var(--oks-chip-tone-50, var(--oks-color-primary-50, #eff6ff));
    --oks-chip-border: var(--oks-chip-tone-100, var(--oks-color-primary-100, #dbeafe));
    --oks-chip-fg: var(--oks-chip-tone-700, var(--oks-color-primary-700, #1d4ed8));
  }
  :where(.oksChip[data-variant=shadow]) {
    --oks-chip-bg: var(--oks-chip-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-chip-fg: var(--oks-chip-solid-fg, white);
    --oks-chip-shadow: 0 10px 18px color-mix(in srgb, #000 20%, transparent);
  }
  :where(.oksChip[data-variant=dot]) {
    --oks-chip-bg: var(--oks-chip-tone-50, var(--oks-color-primary-50, #eff6ff));
    --oks-chip-border: var(--oks-chip-tone-100, var(--oks-color-primary-100, #dbeafe));
    --oks-chip-fg: var(--oks-chip-tone-700, var(--oks-color-primary-700, #1d4ed8));
  }
  @media (prefers-reduced-motion: reduce) {
    :where(.oksChip) {
      transition: none;
    }
  }
}
`);function zo(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}var Rp=[50,100,200,300,400,500,600,700,800,900,950];function hc(i){const c=wn(i,50,950);let d=Rp[0]??500,y=Math.abs(d-c);for(const b of Rp){const E=Math.abs(b-c);E<y&&(d=b,y=E)}return d}function No(i,c){const p=`var(--oks-color-default-${c}, var(--oks-color-primary-${c}, #3b82f6))`;return i==="default"?p:`var(--oks-color-${i}-${c}, ${p})`}var qe=g.forwardRef((i,c)=>{const{children:p,variant:d="solid",size:y="md",color:b="default",radius:E="full",colorDepth:Y=500,avatar:A,startContent:j,endContent:H,isDisabled:M=!1,onClose:G,classNames:I,className:U,style:te,...pe}=i,W=M,ke=typeof Y=="number"?hc(Y):500,de=hc(ke+100),P=hc(ke+200),ne=ke<=400?"#000":"#fff",ie={"--oks-chip-tone":No(b,ke),"--oks-chip-tone-hover":No(b,de),"--oks-chip-tone-active":No(b,P),"--oks-chip-tone-50":No(b,50),"--oks-chip-tone-100":No(b,100),"--oks-chip-tone-700":No(b,700),"--oks-chip-solid-fg":ne},ee=H??o.jsx("span",{"aria-hidden":"true",children:"×"}),q=typeof G=="function"?o.jsx("button",{type:"button",className:zo("oksChipCloseButton",I?.closeButton),"aria-label":"Close",disabled:W,onClick:he=>{he.stopPropagation(),W||G(he)},children:ee}):null;return o.jsxs("div",{...pe,ref:c,"aria-disabled":W?"true":void 0,"data-variant":d,"data-size":y,"data-color":b,"data-radius":E,"data-disabled":W?"true":"false",className:zo(zo("oksChip",I?.base),U),style:{...ie,...te},children:[d==="dot"?o.jsx("span",{className:zo("oksChipDot",I?.dot),"aria-hidden":"true"}):null,A!=null?o.jsx("span",{className:zo("oksChipAvatar",I?.avatar),children:A}):null,j,p!=null?o.jsx("span",{className:zo("oksChipContent",I?.content),children:p}):null,q??H]})});qe.displayName="Chip";Sn(`@layer components {
  :where(.oksDropdown) {
    display: inline-block;
  }
  :where(.oksDropdownContent) {
    display: inline-block;
  }
  :where(.oksDropdownMenu) {
    --oks-dropdown-radius: var(--oks-radius-md, 0.375rem);
    --oks-dropdown-bg: #fff;
    --oks-dropdown-fg: #111827;
    --oks-dropdown-border: color-mix(in srgb, #000 10%, transparent);
    --oks-dropdown-shadow: 0 18px 32px color-mix(in srgb, #000 18%, transparent);
    --oks-dropdown-padding: var(--oks-space-2, 8px);
    --oks-dropdown-gap: 4px;
    min-width: 220px;
    max-width: min(90vw, 420px);
    max-height: min(70vh, 480px);
    overflow: auto;
    z-index: var(--oks-z-popover, 60);
    border-radius: var(--oks-dropdown-radius);
    border: 1px solid var(--oks-dropdown-border);
    background-color: var(--oks-dropdown-bg);
    color: var(--oks-dropdown-fg);
    box-shadow: var(--oks-dropdown-shadow);
    padding: var(--oks-dropdown-padding);
  }
  :where(.oksDropdownMenu[data-variant=bordered]) {
    --oks-dropdown-shadow: none;
    --oks-dropdown-border: color-mix(in srgb, currentColor 22%, transparent);
  }
  :where(.oksDropdownMenu[data-variant=flat]) {
    --oks-dropdown-shadow: none;
    --oks-dropdown-border: color-mix(in srgb, currentColor 10%, transparent);
  }
  :where(.oksDropdownMenu[data-variant=light]) {
    --oks-dropdown-shadow: 0 12px 24px color-mix(in srgb, #000 12%, transparent);
    --oks-dropdown-border: color-mix(in srgb, currentColor 10%, transparent);
    --oks-dropdown-bg: color-mix(in srgb, currentColor 2%, #fff);
  }
  :where(.oksDropdownMenu[data-variant=faded]) {
    --oks-dropdown-shadow: 0 14px 28px color-mix(in srgb, #000 14%, transparent);
    --oks-dropdown-border: color-mix(in srgb, currentColor 12%, transparent);
    --oks-dropdown-bg: color-mix(in srgb, currentColor 3%, #fff);
  }
  :where(.oksDropdownMenu[data-variant=shadow]) {
    --oks-dropdown-shadow: 0 26px 56px color-mix(in srgb, #000 22%, transparent);
    --oks-dropdown-border: color-mix(in srgb, #000 6%, transparent);
  }
  :where(.oksDropdownTopContent),
  :where(.oksDropdownBottomContent) {
    padding: 6px 8px;
  }
  :where(.oksDropdownList) {
    display: flex;
    flex-direction: column;
    gap: var(--oks-dropdown-gap);
    outline: none;
  }
  :where(.oksDropdownEmpty) {
    padding: 10px 12px;
    opacity: 0.75;
  }
  :where(.oksDropdownSection) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  :where(.oksDropdownSectionHeading) {
    font-size: 12px;
    font-weight: 600;
    opacity: 0.7;
    padding: 6px 10px 0 10px;
  }
  :where(.oksDropdownSectionGroup) {
    display: flex;
    flex-direction: column;
    gap: var(--oks-dropdown-gap);
  }
  :where(.oksDropdownSectionDivider) {
    height: 1px;
    background-color: color-mix(in srgb, currentColor 12%, transparent);
    margin: 6px 0;
    opacity: 0.5;
  }
  :where(.oksDropdownItem) {
    --oks-dropdown-item-radius: calc(var(--oks-dropdown-radius) - 4px);
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-radius: var(--oks-dropdown-item-radius);
    padding: 8px 10px;
    cursor: pointer;
    user-select: none;
    outline: none;
  }
  :where(.oksDropdownItem[data-disabled=true]) {
    opacity: 0.55;
    cursor: not-allowed;
  }
  :where(.oksDropdownItemWrapper) {
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1 1 0%;
    gap: 2px;
  }
  :where(.oksDropdownItemTitle) {
    font-size: 14px;
    line-height: 1.1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :where(.oksDropdownItemDescription) {
    font-size: 12px;
    line-height: 1.2;
    opacity: 0.75;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :where(.oksDropdownItemShortcut) {
    font-size: 12px;
    opacity: 0.6;
    flex: none;
    margin-left: 10px;
  }
  :where(.oksDropdownItemStartContent),
  :where(.oksDropdownItemEndContent),
  :where(.oksDropdownItemSelectedIcon) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    line-height: 0;
  }
  :where(.oksDropdownItemSelectedIcon) {
    opacity: 0.9;
    font-size: 14px;
    color: var(--oks-dropdown-tone, currentColor);
  }
  :where(.oksDropdownItem:focus-visible) {
    outline: 2px solid var(--oks-dropdown-tone, var(--oks-color-primary-500, #3b82f6));
    outline-offset: 2px;
  }
  :where(.oksDropdownItemDivider) {
    height: 1px;
    background-color: color-mix(in srgb, currentColor 12%, transparent);
    margin: 6px 0;
    opacity: 0.5;
  }
  :where(.oksDropdownMenu[data-variant=solid]) :where(.oksDropdownItem:hover),
  :where(.oksDropdownMenu[data-variant=solid]) :where(.oksDropdownItem[data-focused=true]) {
    background-color: color-mix(in srgb, currentColor 10%, transparent);
  }
  :where(.oksDropdownMenu[data-variant=light]) :where(.oksDropdownItem:hover),
  :where(.oksDropdownMenu[data-variant=light]) :where(.oksDropdownItem[data-focused=true]) {
    background-color: color-mix(in srgb, currentColor 7%, transparent);
  }
  :where(.oksDropdownMenu[data-variant=flat]) :where(.oksDropdownItem:hover),
  :where(.oksDropdownMenu[data-variant=flat]) :where(.oksDropdownItem[data-focused=true]) {
    background-color: color-mix(in srgb, currentColor 12%, transparent);
  }
  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem) {
    background-color: color-mix(in srgb, currentColor 3%, transparent);
  }
  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem:hover),
  :where(.oksDropdownMenu[data-variant=faded]) :where(.oksDropdownItem[data-focused=true]) {
    background-color: color-mix(in srgb, currentColor 10%, transparent);
  }
  :where(.oksDropdownMenu[data-variant=bordered]) :where(.oksDropdownItem:hover),
  :where(.oksDropdownMenu[data-variant=bordered]) :where(.oksDropdownItem[data-focused=true]) {
    background-color: transparent;
    box-shadow: 0 0 0 1px color-mix(in srgb, currentColor 22%, transparent) inset;
  }
  :where(.oksDropdownMenu[data-variant=shadow]) :where(.oksDropdownItem:hover),
  :where(.oksDropdownMenu[data-variant=shadow]) :where(.oksDropdownItem[data-focused=true]) {
    background-color: transparent;
    box-shadow: 0 0 0 1px color-mix(in srgb, currentColor 12%, transparent) inset, 0 10px 18px color-mix(in srgb, #000 14%, transparent);
  }
  @media (prefers-reduced-motion: reduce) {
    :where(.oksDropdownMenu) {
      scroll-behavior: auto;
    }
  }
}
`);function at(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}function _p(i,c){const p=`var(--oks-color-default-${c}, var(--oks-color-primary-${c}, #3b82f6))`;return i==="default"?p:`var(--oks-color-${i}-${c}, ${p})`}function Wp(...i){return c=>{for(const p of i)p&&(typeof p=="function"?p(c):p.current=c)}}function og(i){return i.startsWith(".$")?i.slice(2):i}function lg(i){const[c,p]=i.split("-");return{side:c==="top"||c==="bottom"||c==="left"||c==="right"?c:"bottom",align:p==="start"||p==="end"?p:"center"}}var Pp=g.createContext(null);function em(){const i=g.useContext(Pp);if(!i)throw new Error("oks-ui Dropdown: missing context.");return i}var tm=g.createContext(null);function sg(){const i=g.useContext(tm);if(!i)throw new Error("oks-ui DropdownMenu: missing context.");return i}function Gs(i){return g.isValidElement(i)&&i.type===je}function rg(i){return g.isValidElement(i)&&i.type===Tl}function ig(i,c){return typeof c.textValue=="string"?c.textValue:typeof c.title=="string"?c.title:typeof c.children=="string"?c.children:String(i)}function Ys(i){const c=i.key;if(c==null)return null;if(typeof c=="string"){const p=og(c).trim();return p.length>0?p:null}return c}function Up(i,c){for(const p of i)if(!c.has(p))return p;return null}function Hp(i,c){for(let p=i.length-1;p>=0;p--){const d=i[p];if(d&&!c.has(d))return d}return null}function Lp(i,c,p,d,y){if(i.length===0)return null;const b=p!==null?i.indexOf(p):-1;if(!y){for(let Y=b+d;Y>=0&&Y<i.length;Y+=d){const A=i[Y];if(A!=null&&!c.has(A))return A}return null}let E=b;for(let Y=0;Y<i.length;Y++){E=(E+d+i.length)%i.length;const A=i[E];if(A!=null&&!c.has(A))return A}return null}function cg(i){return!(i.key.length!==1||i.ctrlKey||i.metaKey||i.altKey)}function vc(i){const c=new Set;for(const p of i??[])c.add(p);return c}var dt=g.forwardRef((i,c)=>{const{children:p,isOpen:d,defaultOpen:y=!1,onOpenChange:b,placement:E="bottom-start",offset:Y=8,containerPadding:A=8,shouldFlip:j=!0,portalContainer:H,isDismissable:M=!0,isKeyboardDismissDisabled:G=!1,shouldCloseOnInteractOutside:I,closeOnSelect:U=!0,classNames:te,className:pe,style:W}=i,[ke,de]=g.useState(y),P=d!==void 0?d:ke,ne=g.useRef(null),ie=g.useRef(null),ee=g.useRef("programmatic"),q=g.useRef(void 0),X=g.useId(),he=`oks-dropdown-trigger-${X}`,ye=`oks-dropdown-menu-${X}`,ce=g.useCallback((ae,k=!0)=>{if(ae||q.current?.(),d===void 0&&de(ae),b?.(ae),!ae&&k){const O=ne.current;O&&window.requestAnimationFrame(()=>{O.focus?.()})}},[d,b]),ve=g.useCallback(()=>ce(!P,!1),[P,ce]);g.useEffect(()=>{if(!P)return;const ae=O=>{O.key==="Escape"&&(G||(O.preventDefault(),ce(!1,!0)))},k=O=>{if(!M)return;const K=O.target;if(!(K instanceof Element))return;const xe=ne.current,ue=ie.current;xe&&xe.contains(K)||ue&&ue.contains(K)||I&&!I(K)||ce(!1,!0)};return document.addEventListener("keydown",ae),document.addEventListener("pointerdown",k,{capture:!0}),()=>{document.removeEventListener("keydown",ae),document.removeEventListener("pointerdown",k,{capture:!0})}},[P,M,G,ce,I]);const Se={open:P,setOpen:ce,toggle:ve,openSourceRef:ee,menuOnCloseRef:q,placement:E,offset:Y,containerPadding:A,shouldFlip:j,portalContainer:H,isDismissable:M,isKeyboardDismissDisabled:G,...I?{shouldCloseOnInteractOutside:I}:{},closeOnSelect:U,triggerRef:ne,menuRef:ie,triggerId:he,menuId:ye,...te?{baseClassNames:te}:{}};return o.jsx(Pp.Provider,{value:Se,children:o.jsx("div",{ref:c,className:at(at("oksDropdown",te?.base),pe),style:W,children:o.jsx("div",{className:at("oksDropdownContent",te?.content),children:p})})})});dt.displayName="Dropdown";var ft=g.forwardRef((i,c)=>{const{children:p}=i,d=em(),y=p,b=y?.ref,E=A=>{y?.props?.onClick?.(A),!A?.defaultPrevented&&(d.openSourceRef.current="pointer",d.toggle())},Y=A=>{y?.props?.onKeyDown?.(A),!A?.defaultPrevented&&(A.key==="Enter"||A.key===" "||A.key==="ArrowDown")&&(A.preventDefault(),d.openSourceRef.current="keyboard",d.setOpen(!0,!1))};return g.cloneElement(p,{id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open?"true":"false","aria-controls":d.menuId,onClick:E,onKeyDown:Y,ref:Wp(b,c,A=>{d.triggerRef.current=A instanceof HTMLElement?A:null}),className:at("oksDropdownTrigger",y?.props?.className)})});ft.displayName="DropdownTrigger";var ht=i=>{const{children:c,items:p,onAction:d,disabledKeys:y,onClose:b,selectionMode:E="none",selectedKeys:Y,defaultSelectedKeys:A,onSelectionChange:j,disallowEmptySelection:H=!1,variant:M="solid",color:G="default",autoFocus:I=!1,hideEmptyContent:U=!1,hideSelectedIcon:te=!1,shouldFocusWrap:pe=!1,closeOnSelect:W,disableAnimation:ke=!1,classNames:de,itemClasses:P,topContent:ne,bottomContent:ie,emptyContent:ee="No items."}=i,q=em(),X=W??q.closeOnSelect,he=g.useMemo(()=>vc(y),[y]),ye=g.useMemo(()=>({"--oks-dropdown-tone":_p(G,500),"--oks-dropdown-tone-600":_p(G,600)}),[G]),[ce,ve]=g.useState(()=>A==="all"?"all":vc(A)),Se=g.useMemo(()=>Y==="all"?"all":Y!==void 0?vc(Y):ce,[Y,ce]),ae=g.useCallback(J=>{Y===void 0&&ve(J)},[Y]),{side:k,align:O}=g.useMemo(()=>lg(q.placement),[q.placement]),[K,xe]=g.useState(null),ue=g.useRef(new Map),f=g.useRef(new Map),v=g.useRef({buffer:"",timer:null}),R=g.useRef(null);g.useEffect(()=>{if(q.open)return q.menuOnCloseRef.current=b,()=>{q.menuOnCloseRef.current===b&&(q.menuOnCloseRef.current=void 0)}},[q.menuOnCloseRef,q.open,b]);const w=g.useCallback(()=>{const J=q.triggerRef.current,fe=q.menuRef.current;if(!J||!fe)return;const ze=J.getBoundingClientRect(),Ie=fe.getBoundingClientRect(),ge=Ip({triggerRect:ze,tooltipRect:Ie,side:k,align:O,offset:q.offset,collisionPadding:q.containerPadding,shouldFlip:q.shouldFlip,arrowSize:0,arrowPaddingX:0,arrowPaddingY:0,strategy:"fixed"});xe({top:ge.top,left:ge.left,placedSide:ge.placedSide,placedAlign:O})},[O,q.containerPadding,q.offset,q.shouldFlip,q.triggerRef,q.menuRef,k]);g.useEffect(()=>{if(!q.open)return;w();const J=()=>w(),fe=()=>w();return window.addEventListener("scroll",J,{passive:!0,capture:!0}),window.addEventListener("resize",fe,{passive:!0}),()=>{window.removeEventListener("scroll",J,{capture:!0}),window.removeEventListener("resize",fe)}},[q.open,w]),g.useEffect(()=>{if(!q.open)return;const J=q.menuRef.current;if(!J||typeof ResizeObserver>"u")return;const fe=new ResizeObserver(()=>w());return fe.observe(J),()=>fe.disconnect()},[q.open,w]);const Z=g.useMemo(()=>{if(p!==void 0){const ge=c;if(typeof ge!="function")return[];const Ee=[];for(const _e of p){const et=ge(_e);if(!Gs(et))continue;const ot=Ys(et);ot&&Ee.push({key:ot,element:et})}return Ee.length>0?[{implicit:!0,items:Ee}]:[]}const J=g.Children.toArray(c),fe=[],ze=[];for(const ge of J){if(rg(ge)){const Ee=[];if(ge.props.items!==void 0){const _e=ge.props.children;if(typeof _e=="function")for(const et of ge.props.items){const ot=_e(et);if(!Gs(ot))continue;const it=Ys(ot);it&&Ee.push({key:it,element:ot})}}else for(const _e of g.Children.toArray(ge.props.children)){if(!Gs(_e))continue;const et=Ys(_e);et&&Ee.push({key:et,element:_e})}ze.push({...ge.props.title!==void 0?{title:ge.props.title}:{},...typeof ge.props["aria-label"]=="string"?{ariaLabel:ge.props["aria-label"]}:{},...ge.props.hideSelectedIcon!==void 0?{hideSelectedIcon:ge.props.hideSelectedIcon}:{},...ge.props.showDivider!==void 0?{showDivider:ge.props.showDivider}:{},...ge.props.classNames?{classNames:ge.props.classNames}:{},...ge.props.itemClasses?{itemClasses:ge.props.itemClasses}:{},items:Ee});continue}if(Gs(ge)){const Ee=Ys(ge);if(!Ee)continue;fe.push({key:Ee,element:ge})}}const Ie=[];fe.length>0&&Ie.push({implicit:!0,items:fe});for(const ge of ze)Ie.push(ge);return Ie},[c,p]),$=g.useMemo(()=>{const J=[];for(const fe of Z)for(const ze of fe.items)J.push(ze);return J},[Z]),le=g.useMemo(()=>$.map(J=>J.key),[$]),De=g.useMemo(()=>{const J=new Map;for(const fe of $)J.set(fe.key,fe.element.props);return J},[$]),V=g.useMemo(()=>{const J=new Set(he);for(const fe of $)fe.element.props.isDisabled&&J.add(fe.key);return J},[he,$]),[se,Ce]=g.useState(null),Ne=g.useCallback((J,fe,ze)=>{fe?ue.current.set(J,fe):ue.current.delete(J),f.current.set(J,ze)},[]),He=g.useCallback(J=>{if(Ce(J),J===null)return;const fe=ue.current.get(J);fe&&fe.focus()},[Ce]);g.useEffect(()=>{if(!q.open)return;const fe=q.openSourceRef.current==="keyboard"&&I===!1?"first":I,ze=fe===!0||fe==="first"?Up(le,V):fe==="last"?Hp(le,V):null;Ce(ze),window.requestAnimationFrame(()=>{ze!==null?ue.current.get(ze)?.focus():R.current?.focus()})},[I,V,q.open,q.openSourceRef,le]);const Qe=g.useCallback((J,fe)=>{if(V.has(J))return;if(fe.onAction?.(),d?.(J),E!=="none"&&fe.isReadOnly!==!0){const Ie=le.filter(_e=>!V.has(_e)),ge=Se==="all"?new Set(Ie):new Set(Se);let Ee=ge;if(E==="single"){const _e=ge.has(J);ge.clear(),_e&&H===!1||ge.add(J)}else ge.has(J)?(H===!1||ge.size>1)&&ge.delete(J):ge.add(J);if(Ee=ge,ae(Ee),j){const _e=Ee;_e.anchorKey=J,_e.currentKey=J,j(_e)}}(fe.closeOnSelect??X)&&(q.setOpen(!1,!0),fe.onClose?.())},[X,V,H,q,le,d,b,j,Se,E,ae]),Fe=J=>{if(J.key==="ArrowDown"){J.preventDefault(),He(Lp(le,V,se,1,pe));return}if(J.key==="ArrowUp"){J.preventDefault(),He(Lp(le,V,se,-1,pe));return}if(J.key==="Home"){J.preventDefault(),He(Up(le,V));return}if(J.key==="End"){J.preventDefault(),He(Hp(le,V));return}if(J.key==="Enter"||J.key===" "){if(J.preventDefault(),se!==null){const fe=De.get(se);fe&&Qe(se,fe)}return}if(cg(J)){const fe=`${v.current.buffer}${J.key}`.toLowerCase();v.current.timer&&window.clearTimeout(v.current.timer),v.current.buffer=fe,v.current.timer=window.setTimeout(()=>{v.current.buffer="",v.current.timer=null},350);const ze=se!==null?le.indexOf(se):-1,Ie=le.length;for(let ge=1;ge<=Ie;ge++){const Ee=(ze+ge)%Ie,_e=le[Ee];if(_e==null||V.has(_e))continue;if((f.current.get(_e)?.textValue??String(_e)).toLowerCase().startsWith(fe)){He(_e);break}}}},Q={disabledKeys:V,selectionMode:E,selectedKeys:Se,setSelectedKeys:ae,disallowEmptySelection:H,...d?{onAction:d}:{},...j?{onSelectionChange:j}:{},...b?{onClose:b}:{},onItemAction:Qe,closeOnSelect:X,hideSelectedIcon:te,setOpen:q.setOpen,focusedKey:se,setFocusedKey:Ce,registerItemRef:Ne,...P?{itemClasses:P}:{},menuVariant:M,menuColor:G,shouldFocusWrap:pe,disableAnimation:ke};if(!q.open)return null;const F=$.length>0,Be=K===null?q.placement:`${K.placedSide}-${K.placedAlign}`;return o.jsx(kc,{container:q.portalContainer,children:o.jsx(tm.Provider,{value:Q,children:o.jsxs("div",{ref:J=>{q.menuRef.current=J},id:q.menuId,className:at("oksDropdownMenu",de?.base),"data-open":"true","data-placement":Be,"data-variant":M,"data-color":G,style:{...ye,position:"fixed",top:K?.top??-9999,left:K?.left??-9999},children:[ne!=null?o.jsx("div",{className:"oksDropdownTopContent",children:ne}):null,o.jsx("div",{ref:R,role:"menu","aria-labelledby":q.triggerId,className:at("oksDropdownList",de?.list),tabIndex:-1,onKeyDown:Fe,children:F?Z.map((J,fe)=>o.jsx(ug,{section:J},fe)):U?null:o.jsx("div",{className:at("oksDropdownEmpty",de?.emptyContent),children:ee??null})}),ie!=null?o.jsx("div",{className:"oksDropdownBottomContent",children:ie}):null]})})})};function ug({section:i}){const p=(i.implicit===!0?!1:i.title===void 0||i.title===null)?i.ariaLabel:void 0,d=i.title!==void 0&&i.title!==null?o.jsx("div",{className:at("oksDropdownSectionHeading",i.classNames?.heading),children:i.title}):null,y=i.showDivider===!0;return o.jsxs("div",{className:at("oksDropdownSection",i.classNames?.base),children:[d,o.jsx("div",{role:"group","aria-label":p,className:at("oksDropdownSectionGroup",i.classNames?.group),children:i.items.map(({key:b,element:E})=>g.cloneElement(E,{itemKey:b,...i.hideSelectedIcon!==void 0?{__sectionHideSelectedIcon:i.hideSelectedIcon}:{},...i.itemClasses?{__sectionItemClasses:i.itemClasses}:{}}))}),y?o.jsx("div",{className:at("oksDropdownSectionDivider",i.classNames?.divider)}):null]})}var je=g.forwardRef((i,c)=>{const{children:p,title:d,description:y,shortcut:b,startContent:E,endContent:Y,selectedIcon:A,showDivider:j=!1,href:H,target:M,rel:G,download:I,ping:U,referrerPolicy:te,isDisabled:pe=!1,isSelected:W,isReadOnly:ke=!1,hideSelectedIcon:de,closeOnSelect:P,classNames:ne,onPress:ie,onPressStart:ee,onPressEnd:q,onPressChange:X,onPressUp:he,onKeyDown:ye,onKeyUp:ce,onClick:ve,itemKey:Se}=i,ae=sg(),k=Se??null,O=k!=null&&String(k).trim().length>0,K=!O||pe===!0||ae.disabledKeys.has(k),xe=ae.selectionMode==="none"?!1:ae.selectedKeys==="all"?!0:ae.selectedKeys.has(k),ue=typeof W=="boolean"?W:xe,f=ae.focusedKey===k,v=ae.selectionMode==="multiple"?"menuitemcheckbox":ae.selectionMode==="single"?"menuitemradio":"menuitem",R=ae.selectionMode==="none"?void 0:ue?"true":"false",w=i.__sectionItemClasses,Z=i.__sectionHideSelectedIcon,$=de??Z??ae.hideSelectedIcon,le=d??p,De=ig(k??"",i),V=at(at(at("oksDropdownItem",ae.itemClasses?.base),w?.base),ne?.base),[se,Ce]=g.useState(!1),Ne=F=>{K||(se||(ee?.(F),X?.(!0)),Ce(!0))},He=F=>{se&&(q?.(F),X?.(!1)),Ce(!1)},Qe=()=>{K||O&&(ae.setFocusedKey(k),ae.onItemAction(k,i))},Fe=H?"a":"div",Q=o.jsxs(Fe,{ref:Wp(c,F=>{O&&ae.registerItemRef(k,F instanceof HTMLElement?F:null,{key:k,disabled:K,textValue:De})}),role:v,"aria-checked":R,"aria-disabled":K?"true":void 0,tabIndex:-1,"data-disabled":K?"true":"false","data-selected":ue?"true":"false","data-focused":f?"true":"false",className:V,href:H,target:M,rel:G,download:I,ping:U,referrerPolicy:te,onMouseMove:()=>{K||ae.setFocusedKey(k)},onFocus:()=>{K||ae.setFocusedKey(k)},onPointerDown:F=>{Ne(F)},onPointerUp:F=>{K||(he?.(F),He(F))},onPointerLeave:F=>{He(F)},onPointerCancel:F=>{He(F)},onKeyDown:F=>{ye?.(F),!F.defaultPrevented&&(F.key==="Enter"||F.key===" ")&&Ne(F)},onKeyUp:F=>{if(ce?.(F),!F.defaultPrevented&&(F.key==="Enter"||F.key===" ")){if(K)return;he?.(F),He(F)}},onBlur:F=>{He(F)},onClick:F=>{ve?.(F),!F.defaultPrevented&&(K||(ie?.(F),Qe()))},children:[E!=null?o.jsx("span",{className:"oksDropdownItemStartContent","aria-hidden":"true",children:E}):null,o.jsxs("span",{className:at(at(at("oksDropdownItemWrapper",ae.itemClasses?.wrapper),w?.wrapper),ne?.wrapper),children:[o.jsx("span",{className:at(at(at("oksDropdownItemTitle",ae.itemClasses?.title),w?.title),ne?.title),children:le}),y!=null?o.jsx("span",{className:at(at(at("oksDropdownItemDescription",ae.itemClasses?.description),w?.description),ne?.description),children:y}):null]}),b!=null?o.jsx("span",{className:at(at(at("oksDropdownItemShortcut",ae.itemClasses?.shortcut),w?.shortcut),ne?.shortcut),children:b}):null,Y!=null?o.jsx("span",{className:"oksDropdownItemEndContent","aria-hidden":"true",children:Y}):ue&&$!==!0?o.jsx("span",{className:at(at(at("oksDropdownItemSelectedIcon",ae.itemClasses?.selectedIcon),w?.selectedIcon),ne?.selectedIcon),"aria-hidden":"true",children:A??"✓"}):null]});return j?o.jsxs(o.Fragment,{children:[Q,o.jsx("div",{className:"oksDropdownItemDivider","aria-hidden":"true"})]}):Q});je.displayName="DropdownItem";var Tl=i=>null;Tl.displayName="DropdownSection";Sn(`@layer components {
  :where(.oksAlert) {
    --oks-alert-accent: var(--oks-color-primary-600, #2563eb);
    --oks-alert-bg-50: var(--oks-color-primary-50, #eff6ff);
    --oks-alert-bg-100: var(--oks-color-primary-100, #dbeafe);
    --oks-alert-fg-900: var(--oks-color-primary-900, #1e3a8a);
    display: flex;
    align-items: center;
    gap: var(--oks-space-3, 12px);
    padding: var(--oks-space-4, 16px);
    border-radius: var(--oks-radius-md, 0.375rem);
    border: 1px solid transparent;
    background-color: var(--oks-alert-bg-50);
    color: var(--oks-alert-fg-900);
  }
  :where(.oksAlert[data-variant=solid]) {
    background-color: var(--oks-alert-accent);
    border-color: var(--oks-alert-accent);
    color: #fff;
  }
  :where(.oksAlert[data-variant=bordered]) {
    background-color: transparent;
    border-color: var(--oks-alert-accent);
  }
  :where(.oksAlert[data-variant=flat]) {
    background-color: var(--oks-alert-bg-50);
    border-color: transparent;
  }
  :where(.oksAlert[data-variant=faded]) {
    background-color: var(--oks-alert-bg-100);
    border-color: transparent;
  }
  :where(.oksAlert[data-radius=none]) {
    border-radius: 0;
  }
  :where(.oksAlert[data-radius=sm]) {
    border-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksAlert[data-radius=md]) {
    border-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksAlert[data-radius=lg]) {
    border-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksAlert[data-radius=full]) {
    border-radius: var(--oks-radius-full, 9999px);
  }
  :where(.oksAlertMainWrapper) {
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
  }
  :where(.oksAlertTitle) {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  }
  :where(.oksAlertDescription) {
    font-size: 14px;
    line-height: 1.4;
    opacity: 0.92;
  }
  :where(.oksAlertIconWrapper) {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :where(.oksAlertIcon) {
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  :where(.oksAlertCloseButton) {
    appearance: none;
    border: 0;
    background: transparent;
    color: inherit;
    padding: var(--oks-space-1, 4px);
    margin: calc(var(--oks-space-1, 4px) * -1);
    border-radius: var(--oks-radius-sm, 0.25rem);
    cursor: pointer;
  }
  :where(.oksAlertCloseButton:focus-visible) {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
}
`);function Fn(i,c){return[typeof i=="string"?i:"",typeof c=="string"?c:""].filter(Boolean).join(" ")}function dg(i){return i==="success"?"success":i==="warning"?"warning":i==="danger"?"error":i==="default"?"default":"info"}function qs(i,c){const p=`var(--oks-color-default-${c}, var(--oks-color-primary-${c}, #3b82f6))`;return i==="default"?p:`var(--oks-color-${i}-${c}, ${p})`}var ut=g.forwardRef((i,c)=>{const{title:p,description:d,color:y="default",variant:b="flat",radius:E="md",icon:Y,startContent:A,endContent:j,isVisible:H,isClosable:M=!1,hideIcon:G=!1,hideIconWrapper:I=!1,closeButtonProps:U,onClose:te,onVisibleChange:pe,classNames:W,className:ke,style:de,...P}=i,[ne,ie]=g.useState(!0),ee=typeof H=="boolean",q=ee?H:ne,X=p!=null,he=d!=null,ye=g.useMemo(()=>({"--oks-alert-accent":qs(y,600),"--oks-alert-bg-50":qs(y,50),"--oks-alert-bg-100":qs(y,100),"--oks-alert-fg-900":qs(y,900)}),[y]),ce=g.useMemo(()=>o.jsx(qp,{type:dg(y),size:18}),[y]),ve=g.useCallback(()=>{pe?.(!1),ee||ie(!1),te?.()},[ee,te,pe]);if(!q)return null;const Se=Y??ce,ae=!G&&Se!==null,k=ae?o.jsx("span",{className:Fn("oksAlertIcon",W?.alertIcon),children:Se}):null,O=ae?I?k:o.jsx("span",{className:Fn("oksAlertIconWrapper",W?.iconWrapper),children:k}):null,K=Fn(Fn("oksAlertCloseButton",W?.closeButton),U?.className),xe=M===!0?o.jsx("button",{type:"button","aria-label":"Close",...U,className:K,onClick:ue=>{U?.onClick?.(ue),ue.defaultPrevented||ve()},children:o.jsx(Vp,{size:16})}):null;return o.jsxs("div",{...P,ref:c,role:"alert","data-visible":"true","data-closeable":M?"true":"false","data-has-title":X?"true":"false","data-has-description":he?"true":"false","data-color":y,"data-variant":b,"data-radius":E,className:Fn(Fn("oksAlert",W?.base),ke),style:{...ye,...de},children:[O,A,o.jsxs("div",{className:Fn("oksAlertMainWrapper",W?.mainWrapper),children:[X?o.jsx("div",{className:Fn("oksAlertTitle",W?.title),children:p}):null,he?o.jsx("div",{className:Fn("oksAlertDescription",W?.description),children:d}):null]}),j,xe]})});ut.displayName="Alert";const L=({title:i,preview:c,code:p})=>o.jsxs("div",{className:"w-full",children:[o.jsx("h3",{className:"text-lg font-bold",children:i}),o.jsxs(wc,{defaultSelectedKey:"preview",variant:"underlined",color:"primary",children:[o.jsx(hn,{title:"Preview",children:o.jsx("div",{className:"w-full h-full p-5 border border-gray-300 rounded-md",children:c})},"preview"),o.jsx(hn,{title:"Code",children:o.jsx("pre",{className:"w-full h-full p-5 bg-gray-900 rounded-md text-white",children:o.jsx("code",{children:p})})},"code")]})]}),fg=()=>o.jsx(L,{title:"How to usage",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(ut,{title:"Heads up",description:"Something happened."}),o.jsx(ut,{title:"Title only"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Heads up" description="Something happened." />
<Alert title="Title only" />`})}),pg=()=>o.jsx(L,{title:"Colors",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(ut,{color:"default",title:"Default",description:"Default color"}),o.jsx(ut,{color:"primary",title:"Primary",description:"Primary color"}),o.jsx(ut,{color:"secondary",title:"Secondary",description:"Secondary color"}),o.jsx(ut,{color:"success",title:"Success",description:"Success color"}),o.jsx(ut,{color:"warning",title:"Warning",description:"Warning color"}),o.jsx(ut,{color:"danger",title:"Danger",description:"Danger color"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert color="default" title="Default" description="Default color" />
<Alert color="primary" title="Primary" description="Primary color" />
<Alert color="secondary" title="Secondary" description="Secondary color" />
<Alert color="success" title="Success" description="Success color" />
<Alert color="warning" title="Warning" description="Warning color" />
<Alert color="danger" title="Danger" description="Danger color" />`})}),mg=()=>o.jsx(L,{title:"Variants",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(ut,{variant:"flat",title:"Flat",description:"Default variant"}),o.jsx(ut,{variant:"solid",color:"primary",title:"Solid",description:"Solid variant"}),o.jsx(ut,{variant:"bordered",color:"success",title:"Bordered",description:"Bordered variant"}),o.jsx(ut,{variant:"faded",color:"warning",title:"Faded",description:"Faded variant"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert variant="flat" title="Flat" description="Default variant" />
<Alert variant="solid" color="primary" title="Solid" description="Solid variant" />
<Alert variant="bordered" color="success" title="Bordered" description="Bordered variant" />
<Alert variant="faded" color="warning" title="Faded" description="Faded variant" />`})}),hg=()=>o.jsx(L,{title:"Radius",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(ut,{radius:"none",title:"None",description:"radius=none"}),o.jsx(ut,{radius:"sm",title:"Small",description:"radius=sm"}),o.jsx(ut,{radius:"md",title:"Medium",description:"radius=md"}),o.jsx(ut,{radius:"lg",title:"Large",description:"radius=lg"}),o.jsx(ut,{radius:"full",title:"Full",description:"radius=full"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert radius="none" title="None" description="radius=none" />
<Alert radius="sm" title="Small" description="radius=sm" />
<Alert radius="md" title="Medium" description="radius=md" />
<Alert radius="lg" title="Large" description="radius=lg" />
<Alert radius="full" title="Full" description="radius=full" />`})}),vg=()=>o.jsx(L,{title:"Icons",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(ut,{title:"Default icon",description:"Icon is derived from color",color:"primary"}),o.jsx(ut,{title:"Hide icon",description:"hideIcon=true",hideIcon:!0}),o.jsx(ut,{title:"Hide icon wrapper",description:"hideIconWrapper=true",hideIconWrapper:!0}),o.jsx(ut,{title:"Custom icon",description:"Use icon prop",icon:o.jsx("span",{"aria-hidden":!0,className:"text-lg leading-none",children:"★"})})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Default icon" description="Icon is derived from color" color="primary" />
<Alert title="Hide icon" description="hideIcon=true" hideIcon />
<Alert title="Hide icon wrapper" description="hideIconWrapper=true" hideIconWrapper />
<Alert title="Custom icon" description="Use icon prop" icon={<span aria-hidden>★</span>} />`})}),gg=()=>o.jsx(L,{title:"With Action",preview:o.jsx("div",{className:"flex flex-col gap-3",children:o.jsx(ut,{title:"Update available",description:"A newer version is ready to install.",color:"primary",endContent:o.jsx(T,{size:"sm",children:"Update"})})}),code:o.jsx(o.Fragment,{children:`import { Alert, Button } from "oks-ui";

<Alert
  title="Update available"
  description="A newer version is ready to install."
  color="primary"
  endContent={<Button size="sm">Update</Button>}
/>`})}),bg=()=>o.jsx(L,{title:"Closable",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(ut,{title:"Closable alert",description:"Click Close to hide (uncontrolled).",isClosable:!0}),o.jsx(ut,{title:"Closable (custom close button)",description:"closeButtonProps example",isClosable:!0,closeButtonProps:{className:"bg-white/15 hover:bg-white/20"},color:"danger",variant:"solid"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert
  title="Closable alert"
  description="Click Close to hide (uncontrolled)."
  isClosable
/>

<Alert
  title="Closable (custom close button)"
  description="closeButtonProps example"
  isClosable
  closeButtonProps={{ className: "bg-white/15 hover:bg-white/20" }}
  color="danger"
  variant="solid"
/>`})}),xg=()=>{const[i,c]=g.useState(!0);return o.jsx(L,{title:"Controlled Visibility",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(T,{size:"sm",variant:"bordered",onClick:()=>c(!0),children:"Show"}),o.jsx(T,{size:"sm",variant:"bordered",onClick:()=>c(!1),children:"Hide"}),o.jsxs("div",{className:"text-sm text-gray-700",children:["isVisible: ",String(i)]})]}),o.jsx(ut,{title:"Controlled alert",description:"Uses isVisible and onVisibleChange.",isClosable:!0,isVisible:i,onVisibleChange:c,color:"success"})]}),code:o.jsx(o.Fragment,{children:`import { useState } from "react";
import { Alert, Button } from "oks-ui";

export function Example() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Button size="sm" variant="bordered" onClick={() => setVisible(true)}>
        Show
      </Button>
      <Button size="sm" variant="bordered" onClick={() => setVisible(false)}>
        Hide
      </Button>

      <Alert
        title="Controlled alert"
        description="Uses isVisible and onVisibleChange."
        isClosable
        isVisible={visible}
        onVisibleChange={setVisible}
        color="success"
      />
    </>
  );
}`})})},yg=()=>o.jsx(L,{title:"ClassNames",preview:o.jsx("div",{className:"flex flex-col gap-3",children:o.jsx(ut,{title:"Custom slots",description:"Uses classNames slots to style parts.",classNames:{base:"ring-2 ring-purple-400/60",title:"text-purple-900",description:"text-purple-900/80",iconWrapper:"text-purple-900",closeButton:"text-purple-900"},isClosable:!0,color:"secondary",variant:"flat"})}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert
  title="Custom slots"
  description="Uses classNames slots to style parts."
  isClosable
  color="secondary"
  variant="flat"
  classNames={{
    base: "ring-2 ring-purple-400/60",
    title: "text-purple-900",
    description: "text-purple-900/80",
    iconWrapper: "text-purple-900",
    closeButton: "text-purple-900",
  }}
/>`})}),kg=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(fg,{}),o.jsx(pg,{}),o.jsx(mg,{}),o.jsx(hg,{}),o.jsx(vg,{}),o.jsx(gg,{}),o.jsx(bg,{}),o.jsx(xg,{}),o.jsx(yg,{})]}),wg=()=>o.jsx(L,{title:"How to usage",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(oe,{name:"Omkar Sahu"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=5"}),o.jsx(oe,{name:"Manav"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
            
            <Avatar name="Omkar Sahu" />
            <Avatar src="https://i.pravatar.cc/150?img=5" />
            <Avatar name="Manav" />`})}),jg=()=>o.jsx(L,{title:"Sizes",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(oe,{className:"w-6 h-6 text-tiny",src:"https://i.pravatar.cc/150?img=5"}),o.jsx(oe,{size:"sm",src:"https://i.pravatar.cc/150?img=5"}),o.jsx(oe,{size:"md",src:"https://i.pravatar.cc/150?img=5"}),o.jsx(oe,{size:"lg",src:"https://i.pravatar.cc/150?img=5"}),o.jsx(oe,{className:"w-20 h-20 text-large",src:"https://i.pravatar.cc/150?img=5"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar className="w-6 h-6 text-tiny" name="Omkar Sahu" />
<Avatar size="sm" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="lg" src="https://i.pravatar.cc/150?img=5" />
<Avatar className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?img=5" />`})}),Sg=()=>o.jsx(L,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(oe,{name:"Default",color:"default"}),o.jsx(oe,{name:"Primary",color:"primary"}),o.jsx(oe,{name:"Secondary",color:"secondary"}),o.jsx(oe,{name:"Success",color:"success"}),o.jsx(oe,{name:"Warning",color:"warning"}),o.jsx(oe,{name:"Danger",color:"danger"})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="Default" color="default" />
<Avatar name="Primary" color="primary" />
<Avatar name="Secondary" color="secondary" />
<Avatar name="Success" color="success" />
<Avatar name="Warning" color="warning" />
<Avatar name="Danger" color="danger" />`})}),Tg=()=>o.jsx(L,{title:"Color depth",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(oe,{name:"50",color:"primary",colorDepth:50}),o.jsx(oe,{name:"200",color:"primary",colorDepth:200}),o.jsx(oe,{name:"400",color:"primary",colorDepth:400}),o.jsx(oe,{name:"500",color:"primary",colorDepth:500}),o.jsx(oe,{name:"700",color:"primary",colorDepth:700}),o.jsx(oe,{name:"900",color:"primary",colorDepth:900})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="50" color="primary" colorDepth={50} />
<Avatar name="200" color="primary" colorDepth={200} />
<Avatar name="400" color="primary" colorDepth={400} />
<Avatar name="500" color="primary" colorDepth={500} />
<Avatar name="700" color="primary" colorDepth={700} />
<Avatar name="900" color="primary" colorDepth={900} />`})}),Dg=()=>o.jsx(L,{title:"Disabled",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(oe,{isDisabled:!0,name:"Omkar Sahu"}),o.jsx(oe,{isDisabled:!0,src:"https://i.pravatar.cc/150?img=5"}),o.jsx(oe,{isDisabled:!0,name:"Manav"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar isDisabled name="Omkar Sahu" />
<Avatar isDisabled src="https://i.pravatar.cc/150?img=5" />
<Avatar isDisabled name="Manav" />`})}),Cg=()=>o.jsx(L,{title:"Border",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(oe,{isBordered:!0,name:"Omkar Sahu"}),o.jsx(oe,{isBordered:!0,src:"https://i.pravatar.cc/150?img=5"}),o.jsx(oe,{isBordered:!0,name:"Manav"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
                
    <Avatar isBordered name="Omkar Sahu" />
    <Avatar isBordered src="https://i.pravatar.cc/150?img=5" />
    <Avatar isBordered name="Manav" />`})}),Ag=()=>o.jsx(L,{title:"Radius",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(oe,{radius:"none"}),o.jsx(oe,{radius:"sm"}),o.jsx(oe,{radius:"md"}),o.jsx(oe,{radius:"lg"}),o.jsx(oe,{radius:"full"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar radius="none" />
<Avatar radius="sm" />
<Avatar radius="md" />
<Avatar radius="lg" />
<Avatar radius="full" />`})}),Bg=()=>o.jsx(L,{title:"Tooltip",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(oe,{name:"Hover me",tooltip:!0}),o.jsx(oe,{name:"Custom content",tooltip:{content:o.jsxs("div",{className:"flex flex-col",children:[o.jsx("span",{className:"font-semibold",children:"Custom tooltip"}),o.jsx("span",{className:"text-xs opacity-80",children:"Any ReactNode"})]})}}),o.jsx(oe,{name:"Placement",tooltip:{props:{placement:"bottom",showArrow:!0}}}),o.jsx(oe,{isDisabled:!0,name:"Disabled + tooltip",tooltip:!0})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="Hover me" tooltip />

<Avatar
  name="Custom content"
  tooltip={{
    content: (
      <div className="flex flex-col">
        <span className="font-semibold">Custom tooltip</span>
        <span className="text-xs opacity-80">Any ReactNode</span>
      </div>
    ),
  }}
/>

<Avatar
  name="Placement"
  tooltip={{
    props: { placement: "bottom", showArrow: true },
  }}
/>

<Avatar isDisabled name="Disabled + tooltip" tooltip />`})}),gc="https://example.com/does-not-exist.png",zg=()=>o.jsx(L,{title:"Fallbacks",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(oe,{name:"Omkar Sahu"}),o.jsx(oe,{}),o.jsx(oe,{src:gc,name:"Broken (no fallback)"}),o.jsx(oe,{src:gc,name:"Broken + showFallback",showFallback:!0}),o.jsx(oe,{src:gc,name:"Custom fallback",showFallback:!0,fallback:o.jsx("span",{className:"text-xs font-semibold",children:"FB"})}),o.jsx(oe,{name:"Custom icon",icon:o.jsx("span",{className:"text-sm",children:"★"})})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

const brokenSrc = "https://example.com/does-not-exist.png";

<Avatar name="Omkar Sahu" />
<Avatar />
<Avatar src={brokenSrc} name="Broken (no fallback)" />
<Avatar src={brokenSrc} name="Broken + showFallback" showFallback />
<Avatar
  src={brokenSrc}
  name="Custom fallback"
  showFallback
  fallback={<span className="text-xs font-semibold">FB</span>}
/>
<Avatar name="Custom icon" icon={<span className="text-sm">★</span>} />`})}),Ng=()=>o.jsx(L,{title:"Focusable",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("div",{className:"text-sm opacity-80",children:"Use Tab to see focus ring"}),o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(oe,{isFocusable:!0,name:"Focusable"}),o.jsx(oe,{isFocusable:!0,isBordered:!0,name:"Bordered"}),o.jsx(oe,{isFocusable:!0,tooltip:!0,name:"Focusable + tooltip"}),o.jsx(oe,{isFocusable:!0,tabIndex:-1,name:"tabIndex -1"})]})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar isFocusable name="Focusable" />
<Avatar isFocusable isBordered name="Bordered" />
<Avatar isFocusable tooltip name="Focusable + tooltip" />
<Avatar isFocusable tabIndex={-1} name="tabIndex -1" />`})}),nm=jn.forwardRef((i,c)=>o.jsx("img",{...i,ref:c,style:{filter:"grayscale(1)",...i.style??{}}}));nm.displayName="GrayscaleImg";const Eg=()=>o.jsx(L,{title:"Custom image",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(oe,{name:"imgProps",src:"https://i.pravatar.cc/150?img=5",imgProps:{loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",alt:"Avatar photo"}}),o.jsx(oe,{name:"ImgComponent",src:"https://i.pravatar.cc/150?img=5",ImgComponent:nm,imgProps:{referrerPolicy:"no-referrer"}})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
import { Avatar } from "oks-ui";

const GrayscaleImg = React.forwardRef((props, ref) => {
  return (
    <img
      {...props}
      ref={ref}
      style={{ filter: "grayscale(1)", ...(props.style ?? {}) }}
    />
  );
});

GrayscaleImg.displayName = "GrayscaleImg";

<Avatar
  name="imgProps"
  src="https://i.pravatar.cc/150?img=5"
  imgProps={{
    loading: "lazy",
    decoding: "async",
    referrerPolicy: "no-referrer",
    alt: "Avatar photo",
  }}
/>

<Avatar
  name="ImgComponent"
  src="https://i.pravatar.cc/150?img=5"
  ImgComponent={GrayscaleImg}
  imgProps={{
    referrerPolicy: "no-referrer",
  }}
/>`})}),Mg=()=>o.jsx(L,{title:"classNames (slots)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(oe,{name:"Slot styles",classNames:{base:"ring-2 ring-pink-500 ring-offset-2 ring-offset-white",name:"text-black",fallback:"bg-white/30"}}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=5",classNames:{base:"ring-2 ring-emerald-500 ring-offset-2 ring-offset-white",img:"scale-110"}}),o.jsx(oe,{classNames:{base:"ring-2 ring-sky-500 ring-offset-2 ring-offset-white",icon:"text-yellow-200"},icon:o.jsx("span",{className:"text-sm",children:"★"})})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar
  name="Slot styles"
  classNames={{
    base: "ring-2 ring-pink-500 ring-offset-2 ring-offset-white",
    name: "text-black",
    fallback: "bg-white/30",
  }}
/>

<Avatar
  src="https://i.pravatar.cc/150?img=5"
  classNames={{
    base: "ring-2 ring-emerald-500 ring-offset-2 ring-offset-white",
    img: "scale-110",
  }}
/>

<Avatar
  classNames={{
    base: "ring-2 ring-sky-500 ring-offset-2 ring-offset-white",
    icon: "text-yellow-200",
  }}
  icon={<span className="text-sm">★</span>}
/>`})}),Og=()=>o.jsx(L,{title:"AvatarGroup",preview:o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsxs(Ga,{children:[o.jsx(oe,{src:"https://i.pravatar.cc/150?img=5"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=6"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=7"})]}),o.jsxs(Ga,{max:3,total:8,children:[o.jsx(oe,{src:"https://i.pravatar.cc/150?img=8"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=9"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=10"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=11"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=12"})]}),o.jsxs(Ga,{max:2,total:5,renderCount:i=>`+${i} more`,children:[o.jsx(oe,{name:"A"}),o.jsx(oe,{name:"B"}),o.jsx(oe,{name:"C"}),o.jsx(oe,{name:"D"})]})]}),o.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:o.jsxs(Ga,{isGrid:!0,children:[o.jsx(oe,{src:"https://i.pravatar.cc/150?img=13"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=14"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=15"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=16"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=17"}),o.jsx(oe,{src:"https://i.pravatar.cc/150?img=18"})]})}),o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsxs(Ga,{size:"sm",radius:"md",color:"success",isBordered:!0,children:[o.jsx(oe,{name:"Group"}),o.jsx(oe,{name:"Styles"}),o.jsx(oe,{name:"Override",color:"danger"}),o.jsx(oe,{name:"Own radius",radius:"full"})]}),o.jsxs(Ga,{isDisabled:!0,size:"sm",color:"secondary",children:[o.jsx(oe,{name:"Disabled"}),o.jsx(oe,{name:"Group"}),o.jsx(oe,{name:"Avatars"})]})]})]}),code:o.jsx(o.Fragment,{children:`import { Avatar, AvatarGroup } from "oks-ui";

<AvatarGroup>
  <Avatar src="https://i.pravatar.cc/150?img=5" />
  <Avatar src="https://i.pravatar.cc/150?img=6" />
  <Avatar src="https://i.pravatar.cc/150?img=7" />
</AvatarGroup>

<AvatarGroup max={3} total={8}>
  <Avatar src="https://i.pravatar.cc/150?img=8" />
  <Avatar src="https://i.pravatar.cc/150?img=9" />
  <Avatar src="https://i.pravatar.cc/150?img=10" />
  <Avatar src="https://i.pravatar.cc/150?img=11" />
  <Avatar src="https://i.pravatar.cc/150?img=12" />
</AvatarGroup>

<AvatarGroup max={2} total={5} renderCount={(count) => \`+\${count} more\`}>
  <Avatar name="A" />
  <Avatar name="B" />
  <Avatar name="C" />
  <Avatar name="D" />
</AvatarGroup>

<AvatarGroup isGrid>
  <Avatar src="https://i.pravatar.cc/150?img=13" />
  <Avatar src="https://i.pravatar.cc/150?img=14" />
  <Avatar src="https://i.pravatar.cc/150?img=15" />
  <Avatar src="https://i.pravatar.cc/150?img=16" />
  <Avatar src="https://i.pravatar.cc/150?img=17" />
  <Avatar src="https://i.pravatar.cc/150?img=18" />
</AvatarGroup>

<AvatarGroup size="sm" radius="md" color="success" isBordered>
  <Avatar name="Group" />
  <Avatar name="Styles" />
  <Avatar name="Override" color="danger" />
  <Avatar name="Own radius" radius="full" />
</AvatarGroup>`})}),Rg=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(wg,{}),o.jsx(jg,{}),o.jsx(Sg,{}),o.jsx(Tg,{}),o.jsx(Ag,{}),o.jsx(Cg,{}),o.jsx(Dg,{}),o.jsx(Bg,{}),o.jsx(zg,{}),o.jsx(Ng,{}),o.jsx(Eg,{}),o.jsx(Mg,{}),o.jsx(Og,{})]}),_g=()=>o.jsx(L,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[o.jsx(We,{content:5,"aria-label":"5 unread notifications",children:o.jsx("button",{type:"button",className:"px-3 py-2 rounded-md border",children:"Notifications"})}),o.jsx(We,{isDot:!0,"aria-label":"Has new activity",children:o.jsx("button",{type:"button",className:"px-3 py-2 rounded-md border",children:"Activity"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={5} aria-label="5 unread notifications">
  <button type="button">Notifications</button>
</Badge>

<Badge isDot aria-label="Has new activity">
  <button type="button">Activity</button>
</Badge>`})}),Ug=()=>o.jsx(L,{title:"Variants",preview:o.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[o.jsx(We,{content:3,variant:"solid","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"solid"})}),o.jsx(We,{content:3,variant:"flat","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"flat"})}),o.jsx(We,{content:3,variant:"faded","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"faded"})}),o.jsx(We,{content:3,variant:"shadow","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"shadow"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={3} variant="solid">...</Badge>
<Badge content={3} variant="flat">...</Badge>
<Badge content={3} variant="faded">...</Badge>
<Badge content={3} variant="shadow">...</Badge>`})}),Hg=()=>o.jsx(L,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[o.jsx(We,{content:1,color:"default","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"default"})}),o.jsx(We,{content:1,color:"primary","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"primary"})}),o.jsx(We,{content:1,color:"secondary","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"secondary"})}),o.jsx(We,{content:1,color:"success","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"success"})}),o.jsx(We,{content:1,color:"warning","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"warning"})}),o.jsx(We,{content:1,color:"danger","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"danger"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} color="default">...</Badge>
<Badge content={1} color="primary">...</Badge>
<Badge content={1} color="secondary">...</Badge>
<Badge content={1} color="success">...</Badge>
<Badge content={1} color="warning">...</Badge>
<Badge content={1} color="danger">...</Badge>`})}),Lg=()=>o.jsx(L,{title:"Sizes",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(We,{content:7,size:"sm","aria-label":"7 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"sm"})}),o.jsx(We,{content:7,size:"md","aria-label":"7 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"md"})}),o.jsx(We,{content:7,size:"lg","aria-label":"7 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"lg"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={7} size="sm">...</Badge>
<Badge content={7} size="md">...</Badge>
<Badge content={7} size="lg">...</Badge>`})}),Gg=()=>o.jsx(L,{title:"Placements",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(We,{content:1,placement:"top-left","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-left"})}),o.jsx(We,{content:1,placement:"top-right","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-right"})}),o.jsx(We,{content:1,placement:"bottom-left","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-left"})}),o.jsx(We,{content:1,placement:"bottom-right","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-right"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} placement="top-left">...</Badge>
<Badge content={1} placement="top-right">...</Badge>
<Badge content={1} placement="bottom-left">...</Badge>
<Badge content={1} placement="bottom-right">...</Badge>`})}),Yg=()=>o.jsx(L,{title:"Shapes",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(We,{content:9,shape:"rectangle","aria-label":"9 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"rectangle"})}),o.jsx(We,{content:9,shape:"circle","aria-label":"9 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"circle"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} shape="rectangle">...</Badge>
<Badge content={9} shape="circle">...</Badge>`})}),qg=()=>o.jsx(L,{title:"Outline",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(We,{content:2,"aria-label":"2 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline"})}),o.jsx(We,{content:2,showOutline:!1,"aria-label":"2 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline=false"})}),o.jsx(We,{content:2,disableOutline:!0,"aria-label":"2 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"disableOutline"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={2}>...</Badge>
<Badge content={2} showOutline={false}>...</Badge>
<Badge content={2} disableOutline>...</Badge>`})}),Vg=()=>o.jsx(L,{title:"Badge visibility",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(We,{content:1,"aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"visible"})}),o.jsx(We,{content:1,isInvisible:!0,"aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isInvisible"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1}>...</Badge>
<Badge content={1} isInvisible>...</Badge>`})}),Xg=()=>o.jsx(L,{title:"Dot and one-character",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(We,{content:"9",isOneChar:!0,"aria-label":"9 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isOneChar"})}),o.jsx(We,{isDot:!0,shape:"circle","aria-label":"Has updates",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"dot"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content="9" isOneChar>...</Badge>
<Badge isDot shape="circle">...</Badge>`})}),Kg=()=>o.jsx(L,{title:"Slot styling (classNames)",preview:o.jsx("div",{className:"flex gap-6 items-center flex-wrap",children:o.jsx(We,{content:12,color:"success","aria-label":"12 items",classNames:{base:"ring-1 ring-green-400/50 rounded-md",badge:"bg-green-600 text-white"},children:o.jsx("button",{type:"button",className:"px-3 py-2 rounded-md border",children:"Custom slots"})})}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge
  content={12}
  color="success"
  aria-label="12 items"
  classNames={{
    base: "ring-1 ring-green-400/50 rounded-md",
    badge: "bg-green-600 text-white",
  }}
>
  <button type="button">Custom slots</button>
</Badge>`})}),Qg=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(_g,{}),o.jsx(Ug,{}),o.jsx(Hg,{}),o.jsx(Lg,{}),o.jsx(Gg,{}),o.jsx(Yg,{}),o.jsx(qg,{}),o.jsx(Vg,{}),o.jsx(Xg,{}),o.jsx(Kg,{})]}),Zg=()=>o.jsx(L,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{children:"Save"}),o.jsx(T,{variant:"bordered",children:"Cancel"})]}),code:o.jsx(o.Fragment,{children:`import { Button } from "oks-ui";

<Button>Save</Button>
<Button variant="bordered">Cancel</Button>`})}),Jg=()=>o.jsx(L,{title:"Disabled",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{isDisabled:!0,children:"Disabled"}),o.jsx(T,{color:"primary",isDisabled:!0,children:"Primary Disabled"})]}),code:o.jsx(o.Fragment,{children:`<Button isDisabled>Disabled</Button>
<Button color="primary" isDisabled>
  Primary Disabled
</Button>`})}),Fg=()=>o.jsx(L,{title:"Sizes",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{size:"sm",children:"Small"}),o.jsx(T,{size:"md",children:"Medium"}),o.jsx(T,{size:"lg",children:"Large"})]}),code:o.jsx(o.Fragment,{children:`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`})}),Ig=()=>o.jsx(L,{title:"Radius",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{radius:"none",children:"None"}),o.jsx(T,{radius:"sm",children:"SM"}),o.jsx(T,{radius:"md",children:"MD"}),o.jsx(T,{radius:"lg",children:"LG"}),o.jsx(T,{radius:"full",children:"Full"})]}),code:o.jsx(o.Fragment,{children:`<Button radius="none">None</Button>
<Button radius="sm">SM</Button>
<Button radius="md">MD</Button>
<Button radius="lg">LG</Button>
<Button radius="full">Full</Button>`})}),$g=()=>o.jsx(L,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{color:"default",children:"Default"}),o.jsx(T,{color:"primary",children:"Primary"}),o.jsx(T,{color:"secondary",children:"Secondary"}),o.jsx(T,{color:"info",children:"Info"}),o.jsx(T,{color:"success",children:"Success"}),o.jsx(T,{color:"warning",children:"Warning"}),o.jsx(T,{color:"danger",children:"Danger"})]}),code:o.jsx(o.Fragment,{children:`<Button color="default">Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`})}),Wg=()=>o.jsx(L,{title:"Variants",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{variant:"solid",children:"Solid"}),o.jsx(T,{variant:"bordered",children:"Bordered"}),o.jsx(T,{variant:"flat",children:"Flat"}),o.jsx(T,{variant:"light",children:"Light"}),o.jsx(T,{variant:"faded",children:"Faded"}),o.jsx(T,{variant:"shadow",children:"Shadow"}),o.jsx(T,{variant:"ghost",children:"Ghost"})]}),code:o.jsx(o.Fragment,{children:`<Button variant="solid">Solid</Button>
<Button variant="bordered">Bordered</Button>
<Button variant="flat">Flat</Button>
<Button variant="light">Light</Button>
<Button variant="faded">Faded</Button>
<Button variant="shadow">Shadow</Button>
<Button variant="ghost">Ghost</Button>`})}),Pg=()=>o.jsx(L,{title:"Full width",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("div",{className:"w-full max-w-sm",children:o.jsx(T,{fullWidth:!0,children:"Submit"})}),o.jsxs("div",{className:"flex gap-3 items-center w-full max-w-sm",children:[o.jsx(T,{variant:"bordered",children:"Back"}),o.jsx(T,{fullWidth:!0,children:"Continue"}),o.jsx(T,{variant:"bordered",children:"Next"})]})]}),code:o.jsx(o.Fragment,{children:`<Button fullWidth>Submit</Button>

<div style={{ display: "flex", gap: 8 }}>
  <Button>Back</Button>
  <Button fullWidth>Continue</Button>
  <Button>Next</Button>
</div>`})}),e0=()=>o.jsx(L,{title:"Loading",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{isLoading:!0,children:"Saving"}),o.jsx(T,{isLoading:!0,spinnerPlacement:"end",children:"Saving"}),o.jsx(T,{isLoading:!0,spinner:o.jsx("span",{"aria-hidden":"true",children:"⏳"}),children:"Saving"})]}),code:o.jsx(o.Fragment,{children:`<Button isLoading>Saving</Button>
<Button isLoading spinnerPlacement="end">Saving</Button>
<Button isLoading spinner={<span aria-hidden="true">⏳</span>}>Saving</Button>`})}),t0=()=>o.jsx(L,{title:"With icons",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{startContent:o.jsx("span",{"aria-hidden":"true",children:"←"}),children:"Back"}),o.jsx(T,{endContent:o.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Next"})]}),code:o.jsx(o.Fragment,{children:`<Button startContent={<span aria-hidden="true">←</span>}>Back</Button>
<Button endContent={<span aria-hidden="true">→</span>}>Next</Button>`})}),n0=()=>o.jsx(L,{title:"Icon only",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{isIconOnly:!0,"aria-label":"Settings",children:o.jsx("span",{"aria-hidden":"true",children:"⚙"})}),o.jsx(T,{isIconOnly:!0,"aria-label":"Search",variant:"bordered",children:o.jsx("span",{"aria-hidden":"true",children:"⌕"})})]}),code:o.jsx(o.Fragment,{children:`<Button isIconOnly aria-label="Settings">
  <span aria-hidden="true">⚙</span>
</Button>
<Button isIconOnly aria-label="Search" variant="bordered">
  <span aria-hidden="true">⌕</span>
</Button>`})}),a0=()=>o.jsx(L,{title:"Icon only + loading",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading",children:o.jsx("span",{"aria-hidden":"true",children:"⚙"})}),o.jsx(T,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading bordered",variant:"bordered",children:o.jsx("span",{"aria-hidden":"true",children:"⌛"})})]}),code:o.jsx(o.Fragment,{children:`<Button isIconOnly isLoading aria-label="Loading">
  <span aria-hidden="true">⚙</span>
</Button>`})}),o0=()=>o.jsx(L,{title:"ButtonGroup",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(bc,{variant:"bordered",color:"primary","aria-label":"Pagination",children:[o.jsx(T,{children:"Prev"}),o.jsx(T,{children:"Next"})]}),o.jsxs(bc,{variant:"solid",color:"secondary","aria-label":"Actions",children:[o.jsx(T,{children:"Left"}),o.jsx(T,{children:"Middle"}),o.jsx(T,{children:"Right"})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, ButtonGroup } from "oks-ui";

<ButtonGroup variant="bordered" color="primary" aria-label="Pagination">
  <Button>Prev</Button>
  <Button>Next</Button>
</ButtonGroup>`})}),l0=()=>{const[i,c]=g.useState("-"),[p,d]=g.useState(!1);return o.jsx(L,{title:"Press events",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPressStart:()=>c("onPressStart"),onPressEnd:()=>c("onPressEnd"),onPressUp:()=>c("onPressUp"),onPress:()=>c("onPress"),onPressChange:y=>d(y),children:"Press me"}),o.jsxs("div",{className:"text-sm",children:["Last event: ",i]}),o.jsxs("div",{className:"text-sm",children:["Pressed: ",String(p)]})]}),code:o.jsx(o.Fragment,{children:`<Button
  onPressStart={() => {}}
  onPressEnd={() => {}}
  onPressUp={() => {}}
  onPress={() => {}}
  onPressChange={(isPressed) => {}}
>
  Press me
</Button>`})})},s0=()=>{const[i,c]=g.useState(!1),[p,d]=g.useState(!1);return o.jsx(L,{title:"Ripple and animation",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(T,{variant:"bordered",onPress:()=>c(y=>!y),children:["disableRipple: ",String(i)]}),o.jsxs(T,{variant:"bordered",onPress:()=>d(y=>!y),children:["disableAnimation: ",String(p)]})]}),o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{color:"primary",disableRipple:i,disableAnimation:p,children:"Try click"}),o.jsx(T,{variant:"bordered",disableRipple:i,disableAnimation:p,children:"Try click"})]})]}),code:o.jsx(o.Fragment,{children:"<Button disableRipple disableAnimation>Try click</Button>"})})},r0=()=>o.jsx(L,{title:"ClassName and style",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{className:"bg-indigo-600 text-white hover:bg-indigo-500",children:"className"}),o.jsx(T,{style:{background:"linear-gradient(90deg, #14b8a6, #3b82f6)",color:"white"},children:"style"})]}),code:o.jsx(o.Fragment,{children:`<Button className="bg-indigo-600 text-white hover:bg-indigo-500">
  className
</Button>

<Button style={{ background: "linear-gradient(90deg, #14b8a6, #3b82f6)", color: "white" }}>
  style
</Button>`})}),i0=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(Zg,{}),o.jsx(Jg,{}),o.jsx(Fg,{}),o.jsx(Ig,{}),o.jsx($g,{}),o.jsx(Wg,{}),o.jsx(Pg,{}),o.jsx(e0,{}),o.jsx(t0,{}),o.jsx(n0,{}),o.jsx(a0,{}),o.jsx(o0,{}),o.jsx(l0,{}),o.jsx(s0,{}),o.jsx(r0,{})]}),c0=()=>o.jsx(L,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{children:"Chip"}),o.jsx(qe,{variant:"bordered",children:"Bordered"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip>Chip</Chip>
<Chip variant="bordered">Bordered</Chip>`})}),u0=()=>o.jsx(L,{title:"Variants",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{variant:"solid",color:"primary",children:"solid"}),o.jsx(qe,{variant:"bordered",color:"primary",children:"bordered"}),o.jsx(qe,{variant:"light",color:"primary",children:"light"}),o.jsx(qe,{variant:"flat",color:"primary",children:"flat"}),o.jsx(qe,{variant:"faded",color:"primary",children:"faded"}),o.jsx(qe,{variant:"shadow",color:"primary",children:"shadow"}),o.jsx(qe,{variant:"dot",color:"primary",children:"dot"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip variant="solid" color="primary">solid</Chip>
<Chip variant="bordered" color="primary">bordered</Chip>
<Chip variant="light" color="primary">light</Chip>
<Chip variant="flat" color="primary">flat</Chip>
<Chip variant="faded" color="primary">faded</Chip>
<Chip variant="shadow" color="primary">shadow</Chip>
<Chip variant="dot" color="primary">dot</Chip>`})}),d0=()=>o.jsx(L,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{color:"default",children:"default"}),o.jsx(qe,{color:"primary",children:"primary"}),o.jsx(qe,{color:"secondary",children:"secondary"}),o.jsx(qe,{color:"success",children:"success"}),o.jsx(qe,{color:"warning",children:"warning"}),o.jsx(qe,{color:"danger",children:"danger"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="default">default</Chip>
<Chip color="primary">primary</Chip>
<Chip color="secondary">secondary</Chip>
<Chip color="success">success</Chip>
<Chip color="warning">warning</Chip>
<Chip color="danger">danger</Chip>`})}),f0=()=>o.jsx(L,{title:"Color depth",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{color:"primary",colorDepth:300,children:"300"}),o.jsx(qe,{color:"primary",colorDepth:500,children:"500"}),o.jsx(qe,{color:"primary",colorDepth:700,children:"700"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="primary" colorDepth={300}>300</Chip>
<Chip color="primary" colorDepth={500}>500</Chip>
<Chip color="primary" colorDepth={700}>700</Chip>`})}),p0=()=>o.jsx(L,{title:"Sizes",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{size:"sm",children:"sm"}),o.jsx(qe,{size:"md",children:"md"}),o.jsx(qe,{size:"lg",children:"lg"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip size="sm">sm</Chip>
<Chip size="md">md</Chip>
<Chip size="lg">lg</Chip>`})}),m0=()=>o.jsx(L,{title:"Radius",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{radius:"none",children:"none"}),o.jsx(qe,{radius:"sm",children:"sm"}),o.jsx(qe,{radius:"md",children:"md"}),o.jsx(qe,{radius:"lg",children:"lg"}),o.jsx(qe,{radius:"full",children:"full"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip radius="none">none</Chip>
<Chip radius="sm">sm</Chip>
<Chip radius="md">md</Chip>
<Chip radius="lg">lg</Chip>
<Chip radius="full">full</Chip>`})}),h0=()=>o.jsx(L,{title:"Disabled",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{isDisabled:!0,children:"Disabled"}),o.jsx(qe,{isDisabled:!0,onClose:()=>{},children:"Disabled close"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip isDisabled>Disabled</Chip>
<Chip isDisabled onClose={() => {}}>Disabled close</Chip>`})}),v0=()=>o.jsx(L,{title:"Start & end content",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{startContent:o.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Start"}),o.jsx(qe,{endContent:o.jsx("span",{"aria-hidden":"true",children:"→"}),children:"End"}),o.jsx(qe,{startContent:o.jsx("span",{"aria-hidden":"true",children:"★"}),endContent:o.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Both"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip startContent={<span aria-hidden="true">★</span>}>Start</Chip>
<Chip endContent={<span aria-hidden="true">→</span>}>End</Chip>
<Chip
  startContent={<span aria-hidden="true">★</span>}
  endContent={<span aria-hidden="true">→</span>}
>
  Both
</Chip>`})}),g0=()=>o.jsx(L,{title:"With avatar",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{avatar:o.jsx("img",{src:"https://i.pravatar.cc/32?img=1",alt:"avatar",width:24,height:24}),children:"Avatar"}),o.jsx(qe,{variant:"faded",color:"secondary",avatar:o.jsx("img",{src:"https://i.pravatar.cc/32?img=2",alt:"avatar",width:24,height:24}),children:"Faded"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip avatar={<img src="https://i.pravatar.cc/32?img=1" alt="avatar" />}>
  Avatar
</Chip>`})}),b0=()=>o.jsx(L,{title:"With close button",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(qe,{onClose:()=>{},children:"Closable"}),o.jsx(qe,{onClose:()=>{},endContent:o.jsx("span",{"aria-hidden":"true",children:"×"}),color:"danger",variant:"flat",children:"Custom close icon"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip onClose={() => {}}>Closable</Chip>
<Chip onClose={() => {}} endContent={<span aria-hidden="true">×</span>}>
  Custom close icon
</Chip>`})}),x0=()=>o.jsx(L,{title:"Slot styling (classNames)",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(qe,{variant:"dot",color:"success",onClose:()=>{},avatar:o.jsx("img",{src:"https://i.pravatar.cc/32?img=3",alt:"avatar"}),classNames:{base:"ring-1 ring-green-400/60",content:"font-semibold",dot:"bg-green-600",avatar:"ring-1 ring-green-300 rounded-full",closeButton:"hover:bg-green-200/40"},children:"Custom slots"})}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip
  variant="dot"
  color="success"
  onClose={() => {}}
  avatar={<img src="https://i.pravatar.cc/32?img=3" alt="avatar" />}
  classNames={{
    base: "ring-1 ring-green-400/60",
    content: "font-semibold",
    dot: "bg-green-600",
    avatar: "ring-1 ring-green-300 rounded-full",
    closeButton: "hover:bg-green-200/40",
  }}
>
  Custom slots
</Chip>`})}),y0=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(c0,{}),o.jsx(u0,{}),o.jsx(d0,{}),o.jsx(f0,{}),o.jsx(p0,{}),o.jsx(m0,{}),o.jsx(h0,{}),o.jsx(v0,{}),o.jsx(g0,{}),o.jsx(b0,{}),o.jsx(x0,{})]}),k0=()=>o.jsx(L,{title:"How to use",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{children:"Open"})}),o.jsxs(ht,{variant:"solid",color:"primary",autoFocus:"first",onAction:i=>console.log("onAction:",i),onClose:()=>console.log("onClose"),children:[o.jsx(je,{children:"New"},"new"),o.jsx(je,{children:"Edit"},"edit")]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownMenu
    variant="solid"
    color="primary"
    autoFocus="first"
    onAction={(key) => console.log("onAction:", key)}
    onClose={() => console.log("onClose")}
  >
    <DropdownItem key="new">New</DropdownItem>
    <DropdownItem key="edit">Edit</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),w0=()=>{const[i,c]=jn.useState(!1);return o.jsx(L,{title:"Controlled open (isOpen / onOpenChange)",preview:o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsx(T,{variant:"bordered",onPress:()=>c(p=>!p),children:"Toggle (external)"}),o.jsxs(dt,{isOpen:i,onOpenChange:c,children:[o.jsx(ft,{children:o.jsx(T,{children:"Open"})}),o.jsxs(ht,{onAction:p=>console.log("onAction:",p),children:[o.jsx(je,{children:"New"},"new"),o.jsx(je,{children:"Edit"},"edit")]})]})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Button variant="bordered" onPress={() => setOpen((v) => !v)}>
        Toggle (external)
      </Button>

      <Dropdown isOpen={open} onOpenChange={setOpen}>
        <DropdownTrigger>
          <Button>Open</Button>
        </DropdownTrigger>
        <DropdownMenu onAction={(key) => console.log("onAction:", key)}>
          <DropdownItem key="new">New</DropdownItem>
          <DropdownItem key="edit">Edit</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}`})})},j0=["bottom-start","bottom-end","top-start","right"],S0=()=>o.jsx(L,{title:"Placement",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:j0.map(i=>o.jsxs(dt,{placement:i,children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:i})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Item A"},"a"),o.jsx(je,{children:"Item B"},"b")]})]},i))}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

const placements = ["bottom-start", "bottom-end", "top-start", "right"];

<div className="flex gap-3 items-center flex-wrap">
  {placements.map((placement) => (
    <Dropdown key={placement} placement={placement}>
      <DropdownTrigger>
        <Button variant="bordered">{placement}</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="a">Item A</DropdownItem>
        <DropdownItem key="b">Item B</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ))}
</div>`})}),T0=()=>o.jsx(L,{title:"Offset / containerPadding / shouldFlip",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{offset:0,children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"offset=0"})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Item A"},"a"),o.jsx(je,{children:"Item B"},"b")]})]}),o.jsxs(dt,{offset:16,children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"offset=16"})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Item A"},"a"),o.jsx(je,{children:"Item B"},"b")]})]}),o.jsxs(dt,{containerPadding:0,shouldFlip:!1,placement:"bottom-end",children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"no flip"})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Item A"},"a"),o.jsx(je,{children:"Item B"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown offset={0}>
  <DropdownTrigger>
    <Button variant="bordered">offset=0</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown offset={16}>
  <DropdownTrigger>
    <Button variant="bordered">offset=16</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown containerPadding={0} shouldFlip={false} placement="bottom-end">
  <DropdownTrigger>
    <Button variant="bordered">no flip</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),D0=()=>o.jsx(L,{title:"Dismiss behavior (isDismissable / isKeyboardDismissDisabled)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Default"})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Outside click closes"},"a"),o.jsx(je,{children:"Escape closes"},"b")]})]}),o.jsxs(dt,{isDismissable:!1,children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"No outside close"})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Try clicking outside"},"a"),o.jsx(je,{children:"Use item or Escape"},"b")]})]}),o.jsxs(dt,{isKeyboardDismissDisabled:!0,children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"No Escape"})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Try pressing Escape"},"a"),o.jsx(je,{children:"Outside click still works"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown isDismissable={false}>
  <DropdownTrigger>
    <Button variant="bordered">No outside close</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Try clicking outside</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown isKeyboardDismissDisabled>
  <DropdownTrigger>
    <Button variant="bordered">No Escape</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="a">Try pressing Escape</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),C0=()=>{const i=jn.useRef(null);return o.jsx(L,{title:"shouldCloseOnInteractOutside",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx("div",{ref:i,className:"px-3 py-2 border border-dashed border-gray-400 rounded-md",children:"Safe zone (clicking here won't close)"}),o.jsxs(dt,{shouldCloseOnInteractOutside:c=>!i.current?.contains(c),children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Item A"},"a"),o.jsx(je,{children:"Item B"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

export default function Example() {
  const safeRef = React.useRef(null);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <div ref={safeRef} className="px-3 py-2 border border-dashed border-gray-400 rounded-md">
        Safe zone
      </div>

      <Dropdown shouldCloseOnInteractOutside={(target) => !safeRef.current?.contains(target)}>
        <DropdownTrigger>
          <Button variant="bordered">Open</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="a">Item A</DropdownItem>
          <DropdownItem key="b">Item B</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}`})})},A0=()=>{const i=jn.useRef(null),[c,p]=jn.useState(null);return jn.useEffect(()=>{p(i.current)},[]),o.jsx(L,{title:"portalContainer",preview:o.jsxs("div",{className:"flex gap-3 items-start flex-wrap",children:[o.jsx("div",{ref:i,className:"w-72 h-40 border border-gray-300 rounded-md p-2",children:"Portal container box"}),o.jsxs(dt,{portalContainer:c,placement:"bottom-start",children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{children:[o.jsx(je,{children:"Item A"},"a"),o.jsx(je,{children:"Item B"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

export default function Example() {
  const boxRef = React.useRef(null);
  const [portalEl, setPortalEl] = React.useState(null);

  React.useEffect(() => {
    setPortalEl(boxRef.current);
  }, []);

  return (
    <div className="flex gap-3 items-start flex-wrap">
      <div ref={boxRef} className="w-72 h-40 border border-gray-300 rounded-md p-2">
        Portal container box
      </div>

      <Dropdown portalContainer={portalEl}>
        <DropdownTrigger>
          <Button variant="bordered">Open</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="a">Item A</DropdownItem>
          <DropdownItem key="b">Item B</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}`})})},B0=()=>o.jsx(L,{title:"closeOnSelect (Dropdown default)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Default (closes)"})}),o.jsxs(ht,{onAction:i=>console.log("default onAction:",i),children:[o.jsx(je,{children:"Select me"},"a"),o.jsx(je,{children:"Select me"},"b")]})]}),o.jsxs(dt,{closeOnSelect:!1,children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"closeOnSelect=false"})}),o.jsxs(ht,{onAction:i=>console.log("no close onAction:",i),children:[o.jsx(je,{children:"Menu stays open"},"a"),o.jsx(je,{children:"Menu stays open"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown closeOnSelect={false}>
  <DropdownTrigger>
    <Button variant="bordered">closeOnSelect=false</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => console.log(key)}>
    <DropdownItem key="a">Menu stays open</DropdownItem>
    <DropdownItem key="b">Menu stays open</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),z0=()=>o.jsx(L,{title:"Menu content (topContent / bottomContent / emptyContent)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Top + bottom"})}),o.jsxs(ht,{topContent:o.jsx("div",{className:"px-2 py-1 text-sm",children:"Top content"}),bottomContent:o.jsx("div",{className:"px-2 py-1 text-sm",children:"Bottom content"}),children:[o.jsx(je,{children:"Item A"},"a"),o.jsx(je,{children:"Item B"},"b")]})]}),o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Empty list"})}),o.jsx(ht,{items:[],emptyContent:"Nothing here",children:i=>o.jsx(je,{children:i.label},i.key)})]}),o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Hide empty"})}),o.jsx(ht,{items:[],emptyContent:"Nothing here",hideEmptyContent:!0,children:i=>o.jsx(je,{children:i.label},i.key)})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Top + bottom</Button>
  </DropdownTrigger>
  <DropdownMenu
    topContent={<div className="px-2 py-1 text-sm">Top content</div>}
    bottomContent={<div className="px-2 py-1 text-sm">Bottom content</div>}
  >
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Empty list</Button>
  </DropdownTrigger>
  <DropdownMenu items={[]} emptyContent="Nothing here">
    {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
  </DropdownMenu>
</Dropdown>`})}),N0=()=>o.jsx(L,{title:"classNames / itemClasses",preview:o.jsxs(dt,{classNames:{base:"inline-flex",content:"outline outline-1 outline-purple-500"},children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{classNames:{base:"rounded-lg border-2 border-purple-500",list:"p-2",emptyContent:"text-purple-300"},itemClasses:{base:"rounded-md",title:"font-semibold",description:"text-xs opacity-80"},children:[o.jsx(je,{title:"Item A",description:"Custom slot classes"},"a"),o.jsx(je,{title:"Item B",description:"Custom slot classes"},"b")]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown
  classNames={{
    base: "inline-flex",
    content: "outline outline-1 outline-purple-500",
  }}
>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu
    classNames={{
      base: "rounded-lg border-2 border-purple-500",
      list: "p-2",
    }}
    itemClasses={{
      base: "rounded-md",
      title: "font-semibold",
      description: "text-xs opacity-80",
    }}
  >
    <DropdownItem key="a" title="Item A" description="Custom slot classes" />
    <DropdownItem key="b" title="Item B" description="Custom slot classes" />
  </DropdownMenu>
</Dropdown>`})}),E0=()=>o.jsx(L,{title:"Variants",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:["solid","bordered","light","flat","faded","shadow"].map(i=>o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:i})}),o.jsxs(ht,{variant:i,children:[o.jsx(je,{children:"Item A"},"a"),o.jsx(je,{children:"Item B"},"b")]})]},i))}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">solid</Button>
  </DropdownTrigger>
  <DropdownMenu variant="solid">
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),M0=()=>o.jsx(L,{title:"Disabled keys",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{disabledKeys:["delete"],children:[o.jsx(je,{children:"Copy"},"copy"),o.jsx(je,{children:"Rename"},"rename"),o.jsx(je,{children:"Delete"},"delete")]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu disabledKeys={["delete"]}>
    <DropdownItem key="copy">Copy</DropdownItem>
    <DropdownItem key="rename">Rename</DropdownItem>
    <DropdownItem key="delete">Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),O0=()=>o.jsx(L,{title:"With icons",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{children:"Open"})}),o.jsxs(ht,{children:[o.jsx(je,{startContent:o.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Star"},"star"),o.jsx(je,{endContent:o.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Arrow"},"arrow")]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="star" startContent={<span aria-hidden="true">★</span>}>
      Star
    </DropdownItem>
    <DropdownItem key="arrow" endContent={<span aria-hidden="true">→</span>}>
      Arrow
    </DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),R0=()=>o.jsx(L,{title:"With description and shortcut",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{onClose:()=>console.log("closed"),children:[o.jsx(je,{title:"Profile",description:"Manage your profile",shortcut:"P"},"profile"),o.jsx(je,{title:"Settings",description:"App settings",shortcut:"S",showDivider:!0},"settings"),o.jsx(je,{title:"Log out",closeOnSelect:!1},"logout")]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu onClose={() => console.log("closed")}>
    <DropdownItem key="profile" title="Profile" description="Manage your profile" shortcut="P" />
    <DropdownItem key="settings" title="Settings" description="App settings" shortcut="S" showDivider />
    <DropdownItem key="logout" title="Log out" closeOnSelect={false} />
  </DropdownMenu>
</Dropdown>`})}),_0=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"}],U0=()=>o.jsx(L,{title:"With sections",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{children:"Open"})}),o.jsxs(ht,{onAction:i=>console.log(i),children:[o.jsxs(Tl,{title:"Actions",children:[o.jsx(je,{children:"Copy"},"copy"),o.jsx(je,{children:"Move"},"move")]}),o.jsx(Tl,{title:"Account",items:_0,showDivider:!0,children:i=>o.jsx(je,{children:i.label},i.key)}),o.jsx(Tl,{"aria-label":"Danger zone",children:o.jsx(je,{children:"Delete"},"delete")})]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "oks-ui";

const accountItems = [
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings" },
];

<Dropdown>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => console.log(key)}>
    <DropdownSection title="Actions">
      <DropdownItem key="copy">Copy</DropdownItem>
      <DropdownItem key="move">Move</DropdownItem>
    </DropdownSection>
    <DropdownSection title="Account" items={accountItems} showDivider>
      {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
    </DropdownSection>
    <DropdownSection aria-label="Danger zone">
      <DropdownItem key="delete">Delete</DropdownItem>
    </DropdownSection>
  </DropdownMenu>
</Dropdown>`})}),H0=()=>{const[i,c]=jn.useState(new Set(["a"])),[p,d]=jn.useState(new Set(["a","c"]));return o.jsx(L,{title:"Selection",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Single"})}),o.jsxs(ht,{selectionMode:"single",closeOnSelect:!1,shouldFocusWrap:!0,selectedKeys:i,onSelectionChange:y=>{c(new Set(y)),console.log("single onSelectionChange:",y)},children:[o.jsx(je,{children:"A"},"a"),o.jsx(je,{children:"B"},"b"),o.jsx(je,{children:"C"},"c")]})]}),o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{variant:"bordered",children:"Multiple"})}),o.jsxs(ht,{selectionMode:"multiple",closeOnSelect:!1,hideSelectedIcon:!0,selectedKeys:p,onSelectionChange:y=>{d(new Set(y)),console.log("multiple onSelectionChange:",y)},children:[o.jsx(je,{selectedIcon:"✓",children:"A"},"a"),o.jsx(je,{children:"B"},"b"),o.jsx(je,{children:"C"},"c")]})]})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

export default function Example() {
  const [singleSelected, setSingleSelected] = React.useState(new Set(["a"]));
  const [multipleSelected, setMultipleSelected] = React.useState(new Set(["a", "c"]));

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Single</Button>
        </DropdownTrigger>
        <DropdownMenu
          selectionMode="single"
          closeOnSelect={false}
          shouldFocusWrap
          selectedKeys={singleSelected}
          onSelectionChange={(keys) => setSingleSelected(new Set(keys))}
        >
          <DropdownItem key="a">A</DropdownItem>
          <DropdownItem key="b">B</DropdownItem>
          <DropdownItem key="c">C</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Multiple</Button>
        </DropdownTrigger>
        <DropdownMenu
          selectionMode="multiple"
          closeOnSelect={false}
          hideSelectedIcon
          selectedKeys={multipleSelected}
          onSelectionChange={(keys) => setMultipleSelected(new Set(keys))}
        >
          <DropdownItem key="a" selectedIcon="✓">
            A
          </DropdownItem>
          <DropdownItem key="b">B</DropdownItem>
          <DropdownItem key="c">C</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}`})})},L0=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"},{key:"logout",label:"Log out"}],G0=()=>o.jsx(L,{title:"Dynamic items",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(T,{children:"Open"})}),o.jsx(ht,{items:L0,onAction:i=>console.log(i),children:i=>o.jsx(je,{children:i.label},i.key)})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

const items = [
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings" },
  { key: "logout", label: "Log out" },
];

<Dropdown>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownMenu items={items} onAction={(key) => console.log(key)}>
    {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
  </DropdownMenu>
</Dropdown>`})}),Y0=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(k0,{}),o.jsx(w0,{}),o.jsx(S0,{}),o.jsx(T0,{}),o.jsx(D0,{}),o.jsx(C0,{}),o.jsx(A0,{}),o.jsx(B0,{}),o.jsx(z0,{}),o.jsx(N0,{}),o.jsx(E0,{}),o.jsx(M0,{}),o.jsx(O0,{}),o.jsx(R0,{}),o.jsx(U0,{}),o.jsx(H0,{}),o.jsx(G0,{})]}),q0=()=>o.jsx(L,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"Hello",placement:"top",delay:0,children:o.jsx(T,{children:"Hover me"})}),o.jsx(Oe,{content:"No delay",placement:"right",delay:0,closeDelay:0,children:o.jsx(T,{variant:"bordered",children:"Focus me"})})]}),code:o.jsx(o.Fragment,{children:`import { Tooltip } from "oks-ui";

<Tooltip content="Hello" placement="top" delay={0}>
  <button type="button">Hover me</button>
</Tooltip>`})}),V0=()=>{const[i,c]=g.useState(!1);return o.jsx(L,{title:"Controlled",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>c(p=>!p),children:i?"Close tooltip":"Open tooltip"}),o.jsx(Oe,{content:"Hello",isOpen:i,onOpenChange:c,children:o.jsx(T,{variant:"bordered",children:"Hover / Focus"})})]}),code:o.jsx(o.Fragment,{children:`import { useState } from "react";
import { Tooltip } from "oks-ui";

const [open, setOpen] = useState(false);

<Tooltip content="Hello" isOpen={open} onOpenChange={setOpen}>
  <button type="button">Hover / Focus</button>
</Tooltip>`})})},X0=()=>{const[i,c]=g.useState(0);return o.jsx(L,{title:"Default open / onClose",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"I start open",defaultOpen:!0,onClose:()=>c(p=>p+1),showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"Focus / hover"})}),o.jsxs("div",{className:"text-sm",children:["Closed count: ",i]})]}),code:o.jsx(o.Fragment,{children:'<Tooltip content="..." defaultOpen onClose={() => {}}>...</Tooltip>'})})},K0=()=>o.jsx(L,{title:"Sizes",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"Small",size:"sm",children:o.jsx(T,{variant:"bordered",children:"sm"})}),o.jsx(Oe,{content:"Medium",size:"md",children:o.jsx(T,{variant:"bordered",children:"md"})}),o.jsx(Oe,{content:"Large",size:"lg",children:o.jsx(T,{variant:"bordered",children:"lg"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Small" size="sm">...</Tooltip>
<Tooltip content="Medium" size="md">...</Tooltip>
<Tooltip content="Large" size="lg">...</Tooltip>`})}),Q0=()=>o.jsx(L,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"Default",color:"default",showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"default"})}),o.jsx(Oe,{content:"Primary",color:"primary",showArrow:!0,children:o.jsx(T,{color:"primary",children:"primary"})}),o.jsx(Oe,{content:"Secondary",color:"secondary",showArrow:!0,children:o.jsx(T,{color:"secondary",children:"secondary"})}),o.jsx(Oe,{content:"Info",color:"info",showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"info"})}),o.jsx(Oe,{content:"Success",color:"success",showArrow:!0,children:o.jsx(T,{color:"success",children:"success"})}),o.jsx(Oe,{content:"Warning",color:"warning",showArrow:!0,children:o.jsx(T,{color:"warning",children:"warning"})}),o.jsx(Oe,{content:"Danger",color:"danger",showArrow:!0,children:o.jsx(T,{color:"danger",children:"danger"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Primary" color="primary" showArrow>...</Tooltip>
<Tooltip content="Success" color="success" showArrow>...</Tooltip>`})}),Z0=()=>o.jsx(L,{title:"Color depth",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"Depth 100",color:"primary",colorDepth:100,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"100"})}),o.jsx(Oe,{content:"Depth 500",color:"primary",colorDepth:500,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"500"})}),o.jsx(Oe,{content:"Depth 900",color:"primary",colorDepth:900,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"900"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Depth 100" color="primary" colorDepth={100} showArrow>...</Tooltip>
<Tooltip content="Depth 900" color="primary" colorDepth={900} showArrow>...</Tooltip>`})}),J0=()=>o.jsx(L,{title:"Radius and shadow",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"radius=none",radius:"none",showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"none"})}),o.jsx(Oe,{content:"radius=full",radius:"full",showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"full"})}),o.jsx(Oe,{content:"shadow=none",shadow:"none",showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"shadow none"})}),o.jsx(Oe,{content:"shadow=lg",shadow:"lg",showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"shadow lg"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="radius=full" radius="full" showArrow>...</Tooltip>
<Tooltip content="shadow=lg" shadow="lg" showArrow>...</Tooltip>`})}),F0=()=>o.jsx(L,{title:"Placement",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"Top start",placement:"top-start",children:o.jsx(T,{variant:"bordered",children:"Top-start"})}),o.jsx(Oe,{content:"Right",placement:"right",offset:10,children:o.jsx(T,{variant:"bordered",children:"Right (offset)"})}),o.jsx(Oe,{content:"Bottom end",placement:"bottom-end",containerPadding:20,children:o.jsx(T,{variant:"bordered",children:"Bottom-end"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Top start" placement="top-start">
  <button type="button">Top-start</button>
</Tooltip>

<Tooltip content="Right" placement="right" offset={10}>
  <button type="button">Right</button>
</Tooltip>`})}),I0=()=>o.jsx(L,{title:"Advanced positioning",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"crossOffset=16",placement:"top",crossOffset:16,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"crossOffset"})}),o.jsx(Oe,{content:"Close on outside click only",isDismissable:!0,shouldCloseOnInteractOutside:i=>i.tagName!=="BUTTON",showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"Interact outside"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="crossOffset=16" crossOffset={16} showArrow>...</Tooltip>
<Tooltip
  content="Close on outside click only"
  isDismissable
  shouldCloseOnInteractOutside={(el) => el.tagName !== "BUTTON"}
>...</Tooltip>`})}),$0=()=>o.jsx(L,{title:"Delay and closeDelay",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"delay=0",delay:0,children:o.jsx(T,{variant:"bordered",children:"delay 0"})}),o.jsx(Oe,{content:"delay=600",delay:600,children:o.jsx(T,{variant:"bordered",children:"delay 600"})}),o.jsx(Oe,{content:"closeDelay=0",closeDelay:0,children:o.jsx(T,{variant:"bordered",children:"close 0"})}),o.jsx(Oe,{content:"closeDelay=1500",closeDelay:1500,children:o.jsx(T,{variant:"bordered",children:"close 1500"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="delay=600" delay={600}>...</Tooltip>
<Tooltip content="closeDelay=1500" closeDelay={1500}>...</Tooltip>`})}),W0=()=>o.jsx(L,{title:"Arrow",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"With arrow",showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"Hover me"})}),o.jsx(Oe,{content:"Primary",showArrow:!0,color:"primary",children:o.jsx(T,{color:"primary",children:"Primary"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="With arrow" showArrow>
  <button type="button">Hover me</button>
</Tooltip>`})}),P0=()=>o.jsx(L,{title:"Behavior",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"No flip",placement:"right",shouldFlip:!1,containerPadding:0,children:o.jsx(T,{variant:"bordered",children:"shouldFlip=false"})}),o.jsx(Oe,{content:"Dismissable",isDismissable:!0,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"isDismissable"})}),o.jsx(Oe,{content:"No blur close",shouldCloseOnBlur:!1,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"shouldCloseOnBlur=false"})}),o.jsx(Oe,{content:"Esc disabled",isKeyboardDismissDisabled:!0,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"Esc disabled"})}),o.jsx(Oe,{content:"Scale trigger",triggerScaleOnOpen:!0,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"triggerScaleOnOpen"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Dismissable" isDismissable showArrow>...</Tooltip>
<Tooltip content="Esc disabled" isKeyboardDismissDisabled showArrow>...</Tooltip>`})}),eb=()=>o.jsx(L,{title:"Disabled",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Oe,{content:"You won't see this",isDisabled:!0,children:o.jsx(T,{variant:"bordered",children:"Disabled tooltip"})}),o.jsx(Oe,{content:"Disabled tooltip",isDisabled:!0,showArrow:!0,children:o.jsx(T,{color:"danger",children:"Danger"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Disabled tooltip" isDisabled>
  <button type="button">Disabled tooltip</button>
</Tooltip>`})}),tb=()=>o.jsx(L,{title:"Class names",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(Oe,{content:"Custom slot classes",showArrow:!0,classNames:{content:"border border-red-400",arrow:"text-red-400"},children:o.jsx(T,{variant:"bordered",children:"Hover me"})})}),code:o.jsx(o.Fragment,{children:`<Tooltip
  content="Custom slot classes"
  showArrow
  classNames={{
    content: "border border-red-400",
    arrow: "text-red-400",
  }}
>
  <button type="button">Hover me</button>
</Tooltip>`})}),nb=()=>{const[i,c]=g.useState(null);return o.jsx(L,{title:"Portal container",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsxs("div",{className:"relative border border-white/10 rounded-md p-3",ref:c,children:[o.jsx("div",{className:"text-sm opacity-80",children:"Custom container"}),o.jsx("div",{className:"mt-2",children:o.jsx(Oe,{content:"Portaled into the bordered box",portalContainer:i,showArrow:!0,children:o.jsx(T,{variant:"bordered",children:"Hover"})})})]})}),code:o.jsx(o.Fragment,{children:'<Tooltip content="..." portalContainer={element}>...</Tooltip>'})})},ab=()=>{const[i,c]=g.useState(!1);return o.jsx(L,{title:"Animation",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(T,{variant:"bordered",onPress:()=>c(p=>!p),children:["disableAnimation: ",String(i)]}),o.jsx(Oe,{content:"Hover me",disableAnimation:i,showArrow:!0,children:o.jsx(T,{children:"Trigger"})})]}),code:o.jsx(o.Fragment,{children:'<Tooltip content="..." disableAnimation>...</Tooltip>'})})},ob=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(q0,{}),o.jsx(V0,{}),o.jsx(X0,{}),o.jsx(K0,{}),o.jsx(Q0,{}),o.jsx(Z0,{}),o.jsx(J0,{}),o.jsx(F0,{}),o.jsx(I0,{}),o.jsx($0,{}),o.jsx(W0,{}),o.jsx(P0,{}),o.jsx(eb,{}),o.jsx(tb,{}),o.jsx(nb,{}),o.jsx(ab,{})]}),lb=()=>o.jsx(L,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>Pe("Saved"),children:"Simple"}),o.jsx(T,{variant:"bordered",onPress:()=>Pe({title:"Saved",message:"Profile updated",type:"success"}),children:"With title"})]}),code:o.jsx(o.Fragment,{children:`import { toast } from "oks-ui";

toast("Saved");
toast({ title: "Saved", message: "Profile updated", type: "success" });`})}),sb=()=>o.jsx(L,{title:"ToastProvider (mounted in main.jsx)",preview:o.jsx("div",{className:"text-sm opacity-80",children:"ToastProvider is already mounted at the playground root, so the toast APIs work anywhere."}),code:o.jsx(o.Fragment,{children:`import { ToastProvider } from "oks-ui";

<ToastProvider placement="bottom-right" maxVisibleToasts={3}>
  <App />
</ToastProvider>`})}),rb=()=>o.jsx(L,{title:"addToast (HeroUI-style)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>xc({title:"Saved",description:"Your changes have been saved.",color:"success"}),children:"Success"}),o.jsx(T,{variant:"bordered",onPress:()=>xc({title:"Network",description:"Something went wrong.",color:"danger"}),children:"Error"})]}),code:o.jsx(o.Fragment,{children:`import { addToast } from "oks-ui";

addToast({ title: "Saved", description: "Your changes have been saved.", color: "success" });`})});function ib(){return new Promise((i,c)=>{setTimeout(()=>{Math.random()>.4?i(!0):c(new Error("Failed"))},900)})}const cb=()=>o.jsx(L,{title:"addToast with promise",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(T,{onPress:()=>xc({description:"Saving…",promise:ib(),loadingComponent:o.jsx("span",{className:"text-sm",children:"⏳"})}),children:"Save demo"})}),code:o.jsx(o.Fragment,{children:'addToast({ description: "Saving…", promise, loadingComponent: <span>⏳</span> });'})}),ub=()=>o.jsx(L,{title:"Types",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>Pe.info("Heads up"),children:"Info"}),o.jsx(T,{color:"success",onPress:()=>Pe.success("Saved"),children:"Success"}),o.jsx(T,{color:"warning",onPress:()=>Pe.warning("Be careful"),children:"Warning"}),o.jsx(T,{color:"danger",onPress:()=>Pe.error("Something went wrong"),children:"Error"})]}),code:o.jsx(o.Fragment,{children:`toast.info("Heads up");
toast.success("Saved");
toast.warning("Be careful");
toast.error("Something went wrong");`})}),db=()=>o.jsx(L,{title:"Placement",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{variant:"bordered",onPress:()=>Pe("Top left",{position:"top-left"}),children:"Top-left"}),o.jsx(T,{variant:"bordered",onPress:()=>Pe("Top center",{position:"top-center"}),children:"Top-center"}),o.jsx(T,{variant:"bordered",onPress:()=>Pe("Bottom center",{position:"bottom-center"}),children:"Bottom-center"})]}),code:o.jsx(o.Fragment,{children:`toast("Top left", { position: "top-left" });
toast("Top center", { position: "top-center" });
toast("Bottom center", { position: "bottom-center" });`})}),fb=()=>o.jsx(L,{title:"Variants",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{variant:"bordered",onPress:()=>Pe("Solid",{variant:"solid",color:"primary"}),children:"Solid"}),o.jsx(T,{variant:"bordered",onPress:()=>Pe("Soft",{variant:"soft",color:"secondary"}),children:"Soft"}),o.jsx(T,{variant:"bordered",onPress:()=>Pe("Outline",{variant:"outline",color:"warning"}),children:"Outline"})]}),code:o.jsx(o.Fragment,{children:`toast("Solid", { variant: "solid", color: "primary" });
toast("Soft", { variant: "soft", color: "secondary" });
toast("Outline", { variant: "outline", color: "warning" });`})}),pb=()=>o.jsx(L,{title:"Tone and size",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>Pe({title:"Tone: secondary",description:"Toast size: xl",tone:"secondary",size:"xl"}),children:"secondary + xl"}),o.jsx(T,{color:"danger",onPress:()=>Pe({title:"Tone: danger",description:"Toast size: sm",tone:"danger",size:"sm"}),children:"danger + sm"})]}),code:o.jsx(o.Fragment,{children:'toast({ title: "Tone", description: "Size", tone: "secondary", size: "xl" });'})}),mb=()=>{const i=g.useRef(null);return o.jsx(L,{title:"Duration and progress",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>{i.current=Pe("Auto dismiss (2s)",{timeout:2e3,shouldShowTimeoutProgress:!0})},children:"timeout=2000"}),o.jsx(T,{variant:"bordered",onPress:()=>{i.current=Pe("Persistent (manual close)",{persistent:!0,dismissible:!0})},children:"persistent"}),o.jsx(T,{variant:"bordered",onPress:()=>{typeof i.current=="number"&&Pe.dismiss(i.current)},children:"Dismiss last"})]}),code:o.jsx(o.Fragment,{children:`toast("Auto dismiss (2s)", { timeout: 2000, shouldShowTimeoutProgress: true });
toast("Persistent", { persistent: true, dismissible: true });`})})},hb=()=>o.jsx(L,{title:"Action",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(T,{onPress:()=>Pe({title:"Undo?",description:"Item deleted.",color:"warning",action:{label:"Undo",onClick:()=>Pe.success("Undone")}}),children:"With action"})}),code:o.jsx(o.Fragment,{children:`toast({
  title: "Undo?",
  description: "Item deleted.",
  action: { label: "Undo", onClick: () => {} },
});`})}),vb=()=>o.jsx(L,{title:"Icons and close button",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{variant:"bordered",onPress:()=>Pe({description:"No icon",hideIcon:!0}),children:"hideIcon"}),o.jsx(T,{variant:"bordered",onPress:()=>Pe({description:"No close button",hideCloseButton:!0}),children:"hideCloseButton"}),o.jsx(T,{variant:"bordered",onPress:()=>Pe({description:"Custom close icon",closeIcon:o.jsx("span",{"aria-hidden":"true",children:"×"})}),children:"closeIcon"})]}),code:o.jsx(o.Fragment,{children:`toast({ description: "No icon", hideIcon: true });
toast({ description: "No close button", hideCloseButton: true });
toast({ description: "Custom close icon", closeIcon: <span aria-hidden="true">×</span> });`})}),gb=()=>o.jsx(L,{title:"End content and loading component",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{variant:"bordered",onPress:()=>Pe({title:"Export ready",description:"Download your file",endContent:o.jsx("span",{className:"text-sm",children:"⬇"})}),children:"endContent"}),o.jsx(T,{onPress:()=>Pe({type:"loading",message:"Uploading...",persistent:!0,dismissible:!1,loadingComponent:o.jsx("span",{className:"text-sm",children:"⏳"})}),children:"loadingComponent"})]}),code:o.jsx(o.Fragment,{children:`toast({ title: "Export ready", endContent: <span>⬇</span> });
toast({ type: "loading", message: "Uploading...", loadingComponent: <span>⏳</span> });`})}),bb=()=>o.jsx(L,{title:"Update and dismiss",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>{const i=Pe("Uploading...",{type:"loading",persistent:!0,dismissible:!1});setTimeout(()=>{Pe.update(i,{type:"success",message:"Uploaded",persistent:!1})},900)},children:"Upload demo"}),o.jsx(T,{variant:"bordered",onPress:()=>Pe.dismissAll(),children:"Dismiss all"})]}),code:o.jsx(o.Fragment,{children:`const id = toast("Uploading...", { type: "loading", persistent: true, dismissible: false });
toast.update(id, { type: "success", message: "Uploaded", persistent: false });
toast.dismiss(id);
toast.dismissAll();`})}),xb=()=>{const[i,c]=g.useState(0),[p,d]=g.useState("-");return o.jsx(L,{title:"id and onDismiss",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>{const y=i+1;c(y),Pe({id:42,title:"Single toast (id=42)",description:`Updated count: ${y}`,shouldShowTimeoutProgress:!0,timeout:2500,onDismiss:b=>d(String(b))})},children:"Update same id"}),o.jsxs("div",{className:"text-sm",children:["Last dismissed: ",p]})]}),code:o.jsx(o.Fragment,{children:'toast({ id: 42, description: "This replaces the existing toast with id=42", onDismiss: (id) => {} });'})})};function yb(){return new Promise((i,c)=>{setTimeout(()=>{Math.random()>.4?i(!0):c(new Error("Failed"))},800)})}const kb=()=>o.jsx(L,{title:"Promise helper",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(T,{onPress:()=>Pe.promise(yb(),{loading:{message:"Saving...",persistent:!0,dismissible:!1},success:()=>({message:"Saved",type:"success",persistent:!1}),error:()=>({message:"Failed",type:"error",persistent:!1})}),children:"Save demo"})}),code:o.jsx(o.Fragment,{children:`toast.promise(promise, {
  loading: { message: "Saving...", persistent: true, dismissible: false },
  success: () => ({ message: "Saved", type: "success", persistent: false }),
  error: () => ({ message: "Failed", type: "error", persistent: false }),
});`})}),wb=()=>{const i=_v();return o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(T,{onPress:()=>i.success("Saved"),children:"Success"}),o.jsx(T,{color:"danger",onPress:()=>i.error("Failed"),children:"Error"})]})},jb=()=>o.jsx(L,{title:"useToast() hook",preview:o.jsx(wb,{}),code:o.jsx(o.Fragment,{children:`import { useToast } from "oks-ui";

const t = useToast();
t.success("Saved");
t.error("Failed");`})}),Sb=()=>o.jsx(L,{title:"Class names",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(T,{variant:"bordered",onPress:()=>Pe({title:"Custom styles",description:"Slots customized via classNames",classNames:{base:"border border-blue-400",title:"text-blue-300",description:"text-blue-200",progressIndicator:"bg-blue-400"},shouldShowTimeoutProgress:!0,timeout:3500}),children:"Show toast"})}),code:o.jsx(o.Fragment,{children:`toast({
  title: "Custom styles",
  description: "Slots customized via classNames",
  classNames: { base: "...", title: "...", description: "..." },
});`})}),Tb=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(sb,{}),o.jsx(lb,{}),o.jsx(rb,{}),o.jsx(cb,{}),o.jsx(ub,{}),o.jsx(db,{}),o.jsx(fb,{}),o.jsx(pb,{}),o.jsx(mb,{}),o.jsx(hb,{}),o.jsx(vb,{}),o.jsx(gb,{}),o.jsx(bb,{}),o.jsx(xb,{}),o.jsx(kb,{}),o.jsx(jb,{}),o.jsx(Sb,{})]}),Db=()=>o.jsx("div",{className:"p-3",children:o.jsxs(wc,{defaultSelectedKey:"avatar",variant:"light",color:"primary",children:[o.jsx(hn,{title:"Alert",children:o.jsx(kg,{})},"alert"),o.jsx(hn,{title:"Avatar",children:o.jsx(Rg,{})},"avatar"),o.jsx(hn,{title:"Badge",children:o.jsx(Qg,{})},"badge"),o.jsx(hn,{title:"Button",children:o.jsx(i0,{})},"button"),o.jsx(hn,{title:"Chip",children:o.jsx(y0,{})},"chip"),o.jsx(hn,{title:"Dropdown",children:o.jsx(Y0,{})},"dropdown"),o.jsx(hn,{title:"Tooltip",children:o.jsx(ob,{})},"tooltip"),o.jsx(hn,{title:"Toast",children:o.jsx(Tb,{})},"toast")]})});Sv.createRoot(document.getElementById("root")).render(o.jsx(Lv,{placement:"bottom-right",maxVisibleToasts:3,children:o.jsx(g.StrictMode,{children:o.jsx(Db,{})})}));
