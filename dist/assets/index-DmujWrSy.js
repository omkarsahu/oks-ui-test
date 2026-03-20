(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function c(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(u){if(u.ep)return;u.ep=!0;const p=c(u);fetch(u.href,p)}})();function zv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var kd={exports:{}},js={};var Xm;function Rv(){if(Xm)return js;Xm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(d,u,p){var h=null;if(p!==void 0&&(h=""+p),u.key!==void 0&&(h=""+u.key),"key"in u){p={};for(var y in u)y!=="key"&&(p[y]=u[y])}else p=u;return u=p.ref,{$$typeof:r,type:d,key:h,ref:u!==void 0?u:null,props:p}}return js.Fragment=s,js.jsx=c,js.jsxs=c,js}var Zm;function Mv(){return Zm||(Zm=1,kd.exports=Rv()),kd.exports}var n=Mv(),yd={exports:{}},Ze={};var Qm;function Pv(){if(Qm)return Ze;Qm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),S=Symbol.iterator;function z(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function M(k,F,E){this.props=k,this.context=F,this.refs=N,this.updater=E||C}M.prototype.isReactComponent={},M.prototype.setState=function(k,F){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,F,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Z(){}Z.prototype=M.prototype;function P(k,F,E){this.props=k,this.context=F,this.refs=N,this.updater=E||C}var K=P.prototype=new Z;K.constructor=P,T(K,M.prototype),K.isPureReactComponent=!0;var q=Array.isArray;function I(){}var G={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function X(k,F,E){var j=E.ref;return{$$typeof:r,type:k,key:F,ref:j!==void 0?j:null,props:E}}function me(k,F){return X(k.type,F,k.props)}function ee(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function ge(k){var F={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(E){return F[E]})}var re=/\/+/g;function be(k,F){return typeof k=="object"&&k!==null&&k.key!=null?ge(""+k.key):F.toString(36)}function se(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(I,I):(k.status="pending",k.then(function(F){k.status==="pending"&&(k.status="fulfilled",k.value=F)},function(F){k.status==="pending"&&(k.status="rejected",k.reason=F)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function D(k,F,E,j,W){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var ie=!1;if(k===null)ie=!0;else switch(te){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(k.$$typeof){case r:case s:ie=!0;break;case b:return ie=k._init,D(ie(k._payload),F,E,j,W)}}if(ie)return W=W(k),ie=j===""?"."+be(k,0):j,q(W)?(E="",ie!=null&&(E=ie.replace(re,"$&/")+"/"),D(W,F,E,"",function(ne){return ne})):W!=null&&(ee(W)&&(W=me(W,E+(W.key==null||k&&k.key===W.key?"":(""+W.key).replace(re,"$&/")+"/")+ie)),F.push(W)),1;ie=0;var De=j===""?".":j+":";if(q(k))for(var ae=0;ae<k.length;ae++)j=k[ae],te=De+be(j,ae),ie+=D(j,F,E,te,W);else if(ae=z(k),typeof ae=="function")for(k=ae.call(k),ae=0;!(j=k.next()).done;)j=j.value,te=De+be(j,ae++),ie+=D(j,F,E,te,W);else if(te==="object"){if(typeof k.then=="function")return D(se(k),F,E,j,W);throw F=String(k),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return ie}function U(k,F,E){if(k==null)return k;var j=[],W=0;return D(k,j,"","",function(te){return F.call(E,te,W++)}),j}function Q(k){if(k._status===-1){var F=k._result;F=F(),F.then(function(E){(k._status===0||k._status===-1)&&(k._status=1,k._result=E)},function(E){(k._status===0||k._status===-1)&&(k._status=2,k._result=E)}),k._status===-1&&(k._status=0,k._result=F)}if(k._status===1)return k._result.default;throw k._result}var pe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},fe={map:U,forEach:function(k,F,E){U(k,function(){F.apply(this,arguments)},E)},count:function(k){var F=0;return U(k,function(){F++}),F},toArray:function(k){return U(k,function(F){return F})||[]},only:function(k){if(!ee(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Ze.Activity=w,Ze.Children=fe,Ze.Component=M,Ze.Fragment=c,Ze.Profiler=u,Ze.PureComponent=P,Ze.StrictMode=d,Ze.Suspense=x,Ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,Ze.__COMPILER_RUNTIME={__proto__:null,c:function(k){return G.H.useMemoCache(k)}},Ze.cache=function(k){return function(){return k.apply(null,arguments)}},Ze.cacheSignal=function(){return null},Ze.cloneElement=function(k,F,E){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var j=T({},k.props),W=k.key;if(F!=null)for(te in F.key!==void 0&&(W=""+F.key),F)!$.call(F,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&F.ref===void 0||(j[te]=F[te]);var te=arguments.length-2;if(te===1)j.children=E;else if(1<te){for(var ie=Array(te),De=0;De<te;De++)ie[De]=arguments[De+2];j.children=ie}return X(k.type,W,j)},Ze.createContext=function(k){return k={$$typeof:h,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:p,_context:k},k},Ze.createElement=function(k,F,E){var j,W={},te=null;if(F!=null)for(j in F.key!==void 0&&(te=""+F.key),F)$.call(F,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(W[j]=F[j]);var ie=arguments.length-2;if(ie===1)W.children=E;else if(1<ie){for(var De=Array(ie),ae=0;ae<ie;ae++)De[ae]=arguments[ae+2];W.children=De}if(k&&k.defaultProps)for(j in ie=k.defaultProps,ie)W[j]===void 0&&(W[j]=ie[j]);return X(k,te,W)},Ze.createRef=function(){return{current:null}},Ze.forwardRef=function(k){return{$$typeof:y,render:k}},Ze.isValidElement=ee,Ze.lazy=function(k){return{$$typeof:b,_payload:{_status:-1,_result:k},_init:Q}},Ze.memo=function(k,F){return{$$typeof:v,type:k,compare:F===void 0?null:F}},Ze.startTransition=function(k){var F=G.T,E={};G.T=E;try{var j=k(),W=G.S;W!==null&&W(E,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(I,pe)}catch(te){pe(te)}finally{F!==null&&E.types!==null&&(F.types=E.types),G.T=F}},Ze.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},Ze.use=function(k){return G.H.use(k)},Ze.useActionState=function(k,F,E){return G.H.useActionState(k,F,E)},Ze.useCallback=function(k,F){return G.H.useCallback(k,F)},Ze.useContext=function(k){return G.H.useContext(k)},Ze.useDebugValue=function(){},Ze.useDeferredValue=function(k,F){return G.H.useDeferredValue(k,F)},Ze.useEffect=function(k,F){return G.H.useEffect(k,F)},Ze.useEffectEvent=function(k){return G.H.useEffectEvent(k)},Ze.useId=function(){return G.H.useId()},Ze.useImperativeHandle=function(k,F,E){return G.H.useImperativeHandle(k,F,E)},Ze.useInsertionEffect=function(k,F){return G.H.useInsertionEffect(k,F)},Ze.useLayoutEffect=function(k,F){return G.H.useLayoutEffect(k,F)},Ze.useMemo=function(k,F){return G.H.useMemo(k,F)},Ze.useOptimistic=function(k,F){return G.H.useOptimistic(k,F)},Ze.useReducer=function(k,F,E){return G.H.useReducer(k,F,E)},Ze.useRef=function(k){return G.H.useRef(k)},Ze.useState=function(k){return G.H.useState(k)},Ze.useSyncExternalStore=function(k,F,E){return G.H.useSyncExternalStore(k,F,E)},Ze.useTransition=function(){return G.H.useTransition()},Ze.version="19.2.4",Ze}var Wm;function Jd(){return Wm||(Wm=1,yd.exports=Pv()),yd.exports}var m=Jd();const xe=zv(m);var wd={exports:{}},Ss={},jd={exports:{}},Sd={};var Jm;function Lv(){return Jm||(Jm=1,(function(r){function s(D,U){var Q=D.length;D.push(U);e:for(;0<Q;){var pe=Q-1>>>1,fe=D[pe];if(0<u(fe,U))D[pe]=U,D[Q]=fe,Q=pe;else break e}}function c(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var U=D[0],Q=D.pop();if(Q!==U){D[0]=Q;e:for(var pe=0,fe=D.length,k=fe>>>1;pe<k;){var F=2*(pe+1)-1,E=D[F],j=F+1,W=D[j];if(0>u(E,Q))j<fe&&0>u(W,E)?(D[pe]=W,D[j]=Q,pe=j):(D[pe]=E,D[F]=Q,pe=F);else if(j<fe&&0>u(W,Q))D[pe]=W,D[j]=Q,pe=j;else break e}}return U}function u(D,U){var Q=D.sortIndex-U.sortIndex;return Q!==0?Q:D.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var h=Date,y=h.now();r.unstable_now=function(){return h.now()-y}}var x=[],v=[],b=1,w=null,S=3,z=!1,C=!1,T=!1,N=!1,M=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function K(D){for(var U=c(v);U!==null;){if(U.callback===null)d(v);else if(U.startTime<=D)d(v),U.sortIndex=U.expirationTime,s(x,U);else break;U=c(v)}}function q(D){if(T=!1,K(D),!C)if(c(x)!==null)C=!0,I||(I=!0,ge());else{var U=c(v);U!==null&&se(q,U.startTime-D)}}var I=!1,G=-1,$=5,X=-1;function me(){return N?!0:!(r.unstable_now()-X<$)}function ee(){if(N=!1,I){var D=r.unstable_now();X=D;var U=!0;try{e:{C=!1,T&&(T=!1,Z(G),G=-1),z=!0;var Q=S;try{t:{for(K(D),w=c(x);w!==null&&!(w.expirationTime>D&&me());){var pe=w.callback;if(typeof pe=="function"){w.callback=null,S=w.priorityLevel;var fe=pe(w.expirationTime<=D);if(D=r.unstable_now(),typeof fe=="function"){w.callback=fe,K(D),U=!0;break t}w===c(x)&&d(x),K(D)}else d(x);w=c(x)}if(w!==null)U=!0;else{var k=c(v);k!==null&&se(q,k.startTime-D),U=!1}}break e}finally{w=null,S=Q,z=!1}U=void 0}}finally{U?ge():I=!1}}}var ge;if(typeof P=="function")ge=function(){P(ee)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,be=re.port2;re.port1.onmessage=ee,ge=function(){be.postMessage(null)}}else ge=function(){M(ee,0)};function se(D,U){G=M(function(){D(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(D){switch(S){case 1:case 2:case 3:var U=3;break;default:U=S}var Q=S;S=U;try{return D()}finally{S=Q}},r.unstable_requestPaint=function(){N=!0},r.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=S;S=D;try{return U()}finally{S=Q}},r.unstable_scheduleCallback=function(D,U,Q){var pe=r.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?pe+Q:pe):Q=pe,D){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Q+fe,D={id:b++,callback:U,priorityLevel:D,startTime:Q,expirationTime:fe,sortIndex:-1},Q>pe?(D.sortIndex=Q,s(v,D),c(x)===null&&D===c(v)&&(T?(Z(G),G=-1):T=!0,se(q,Q-pe))):(D.sortIndex=fe,s(x,D),C||z||(C=!0,I||(I=!0,ge()))),D},r.unstable_shouldYield=me,r.unstable_wrapCallback=function(D){var U=S;return function(){var Q=S;S=U;try{return D.apply(this,arguments)}finally{S=Q}}}})(Sd)),Sd}var eh;function _v(){return eh||(eh=1,jd.exports=Lv()),jd.exports}var Cd={exports:{}},pn={};var th;function Iv(){if(th)return pn;th=1;var r=Jd();function s(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var d={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function p(x,v,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:x,containerInfo:v,implementation:b}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,pn.createPortal=function(x,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(s(299));return p(x,v,null,b)},pn.flushSync=function(x){var v=h.T,b=d.p;try{if(h.T=null,d.p=2,x)return x()}finally{h.T=v,d.p=b,d.d.f()}},pn.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(x,v))},pn.prefetchDNS=function(x){typeof x=="string"&&d.d.D(x)},pn.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var b=v.as,w=y(b,v.crossOrigin),S=typeof v.integrity=="string"?v.integrity:void 0,z=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?d.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:z}):b==="script"&&d.d.X(x,{crossOrigin:w,integrity:S,fetchPriority:z,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},pn.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=y(v.as,v.crossOrigin);d.d.M(x,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&d.d.M(x)},pn.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,w=y(b,v.crossOrigin);d.d.L(x,b,{crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},pn.preloadModule=function(x,v){if(typeof x=="string")if(v){var b=y(v.as,v.crossOrigin);d.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else d.d.m(x)},pn.requestFormReset=function(x){d.d.r(x)},pn.unstable_batchedUpdates=function(x,v){return x(v)},pn.useFormState=function(x,v,b){return h.H.useFormState(x,v,b)},pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},pn.version="19.2.4",pn}var nh;function Lh(){if(nh)return Cd.exports;nh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Cd.exports=Iv(),Cd.exports}var ah;function Uv(){if(ah)return Ss;ah=1;var r=_v(),s=Jd(),c=Lh();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(d(188))}function v(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,o=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(o=l.return,o!==null){a=o;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return x(l),e;if(i===o)return x(l),t;i=i.sibling}throw Error(d(188))}if(a.return!==o.return)a=l,o=i;else{for(var f=!1,g=l.child;g;){if(g===a){f=!0,a=l,o=i;break}if(g===o){f=!0,o=l,a=i;break}g=g.sibling}if(!f){for(g=i.child;g;){if(g===a){f=!0,a=i,o=l;break}if(g===o){f=!0,o=i,a=l;break}g=g.sibling}if(!f)throw Error(d(189))}}if(a.alternate!==o)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,S=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),P=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case N:return"StrictMode";case q:return"Suspense";case I:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case P:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var se=Array.isArray,D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},pe=[],fe=-1;function k(e){return{current:e}}function F(e){0>fe||(e.current=pe[fe],pe[fe]=null,fe--)}function E(e,t){fe++,pe[fe]=e.current,e.current=t}var j=k(null),W=k(null),te=k(null),ie=k(null);function De(e,t){switch(E(te,t),E(W,e),E(j,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vm(t),e=bm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(j),E(j,e)}function ae(){F(j),F(W),F(te)}function ne(e){e.memoizedState!==null&&E(ie,e);var t=j.current,a=bm(t,e.type);t!==a&&(E(W,e),E(j,a))}function Re(e){W.current===e&&(F(j),F(W)),ie.current===e&&(F(ie),bs._currentValue=Q)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||"",Te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+e+Te}var Ae=!1;function de(e,t){if(!e||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var he=function(){throw Error()};if(Object.defineProperty(he.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(he,[])}catch(J){var Y=J}Reflect.construct(e,[],he)}else{try{he.call()}catch(J){Y=J}e.call(he.prototype)}}else{try{throw Error()}catch(J){Y=J}(he=e())&&typeof he.catch=="function"&&he.catch(function(){})}}catch(J){if(J&&Y&&typeof J.stack=="string")return[J.stack,Y.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=o.DetermineComponentFrameRoot(),f=i[0],g=i[1];if(f&&g){var B=f.split(`
`),V=g.split(`
`);for(l=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;if(o===B.length||l===V.length)for(o=B.length-1,l=V.length-1;1<=o&&0<=l&&B[o]!==V[l];)l--;for(;1<=o&&0<=l;o--,l--)if(B[o]!==V[l]){if(o!==1||l!==1)do if(o--,l--,0>l||B[o]!==V[l]){var oe=`
`+B[o].replace(" at new "," at ");return e.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",e.displayName)),oe}while(1<=o&&0<=l);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ee(a):""}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee("Lazy");case 13:return e.child!==t&&t!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return Ee("Activity");default:return""}}function ve(e){try{var t="",a=null;do t+=ke(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var le=Object.prototype.hasOwnProperty,je=r.unstable_scheduleCallback,Le=r.unstable_cancelCallback,We=r.unstable_shouldYield,Ne=r.unstable_requestPaint,Ge=r.unstable_now,_e=r.unstable_getCurrentPriorityLevel,Ve=r.unstable_ImmediatePriority,Ye=r.unstable_UserBlockingPriority,tt=r.unstable_NormalPriority,Ie=r.unstable_LowPriority,Xe=r.unstable_IdlePriority,Ct=r.log,nn=r.unstable_setDisableYieldValue,ue=null,ye=null;function Oe(e){if(typeof Ct=="function"&&nn(e),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(ue,e)}catch{}}var $e=Math.clz32?Math.clz32:nt,mt=Math.log,Se=Math.LN2;function nt(e){return e>>>=0,e===0?32:31-(mt(e)/Se|0)|0}var dt=256,Rt=262144,Dt=4194304;function hn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function an(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var l=0,i=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=o&134217727;return g!==0?(o=g&~i,o!==0?l=hn(o):(f&=g,f!==0?l=hn(f):a||(a=g&~e,a!==0&&(l=hn(a))))):(g=o&~i,g!==0?l=hn(g):f!==0?l=hn(f):a||(a=o&~e,a!==0&&(l=hn(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function ra(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cn(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zn(){var e=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),e}function Vo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _a(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ia(e,t,a,o,l,i){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,B=e.expirationTimes,V=e.hiddenUpdates;for(a=f&~a;0<a;){var oe=31-$e(a),he=1<<oe;g[oe]=0,B[oe]=-1;var Y=V[oe];if(Y!==null)for(V[oe]=null,oe=0;oe<Y.length;oe++){var J=Y[oe];J!==null&&(J.lane&=-536870913)}a&=~he}o!==0&&xn(e,o,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(f&~t))}function xn(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-$e(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ar(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-$e(a),l=1<<o;l&t|e[o]&t&&(e[o]|=t),a&=~l}}function Er(e,t){var a=t&-t;return a=(a&42)!==0?1:Ua(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ua(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ps(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Hm(e.type))}function ko(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var Rn=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Rn,Mt="__reactProps$"+Rn,L="__reactContainer$"+Rn,Be="__reactEvents$"+Rn,Me="__reactListeners$"+Rn,at="__reactHandles$"+Rn,on="__reactResources$"+Rn,Qt="__reactMarker$"+Rn;function un(e){delete e[Vt],delete e[Mt],delete e[Be],delete e[Me],delete e[at]}function gn(e){var t=e[Vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[L]||a[Vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Dm(e);e!==null;){if(a=e[Vt])return a;e=Dm(e)}return t}e=a,a=e.parentNode}return null}function Wt(e){if(e=e[Vt]||e[L]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Pn(e){var t=e[on];return t||(t=e[on]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Bt(e){e[Qt]=!0}var sa=new Set,Ln={};function Jn(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Ln[e]=t,e=0;e<t.length;e++)sa.add(t[e])}var Ha=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$o={},Rr={};function Va(e){return le.call(Rr,e)?!0:le.call($o,e)?!1:Ha.test(e)?Rr[e]=!0:($o[e]=!0,!1)}function $a(e,t,a){if(Va(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ls(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ha(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function _n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tx(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,i=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,i.call(this,f)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){if(!e._valueTracker){var t=cu(e)?"checked":"value";e._valueTracker=Tx(e,t,""+e[t])}}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=cu(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function _s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nx=/[\n"\\]/g;function In(e){return e.replace(Nx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mi(e,t,a,o,l,i,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_n(t)):e.value!==""+_n(t)&&(e.value=""+_n(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?hi(e,f,_n(t)):a!=null?hi(e,f,_n(a)):o!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+_n(g):e.removeAttribute("name")}function uu(e,t,a,o,l,i,f,g){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){fi(e);return}a=a!=null?""+_n(a):"",t=t!=null?""+_n(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=g?e.checked:!!o,e.defaultChecked=!!o,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),fi(e)}function hi(e,t,a){t==="number"&&_s(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qo(e,t,a,o){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_n(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function pu(e,t,a){if(t!=null&&(t=""+_n(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+_n(a):""}function fu(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(d(92));if(se(o)){if(1<o.length)throw Error(d(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=_n(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),fi(e)}function Go(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mu(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||Fx.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hu(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&a[l]!==o&&mu(e,l,o)}else for(var i in t)t.hasOwnProperty(i)&&mu(e,i,t[i])}function xi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Is(e){return Ox.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xa(){}var gi=null;function vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,Ko=null;function xu(e){var t=Wt(e);if(t&&(e=t.stateNode)){var a=e[Mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(mi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+In(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var l=o[Mt]||null;if(!l)throw Error(d(90));mi(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&du(o)}break e;case"textarea":pu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&qo(e,!!a.multiple,t,!1)}}}var bi=!1;function gu(e,t,a){if(bi)return e(t,a);bi=!0;try{var o=e(t);return o}finally{if(bi=!1,(Yo!==null||Ko!==null)&&(Tl(),Yo&&(t=Yo,e=Ko,Ko=Yo=null,xu(t),e)))for(t=0;t<e.length;t++)xu(e[t])}}function Mr(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Mt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ki=!1;if(ga)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){ki=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{ki=!1}var qa=null,yi=null,Us=null;function vu(){if(Us)return Us;var e,t=yi,a=t.length,o,l="value"in qa?qa.value:qa.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var f=a-e;for(o=1;o<=f&&t[a-o]===l[i-o];o++);return Us=l.slice(e,1<o?1-o:void 0)}function Hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function bu(){return!1}function bn(e){function t(a,o,l,i,f){this._reactName=a,this._targetInst=l,this.type=o,this.nativeEvent=i,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(i):i[g]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vs:bu,this.isPropagationStopped=bu,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=bn(yo),Lr=w({},yo,{view:0,detail:0}),Ax=bn(Lr),wi,ji,_r,qs=w({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(wi=e.screenX-_r.screenX,ji=e.screenY-_r.screenY):ji=wi=0,_r=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:ji}}),ku=bn(qs),Ex=w({},qs,{dataTransfer:0}),zx=bn(Ex),Rx=w({},Lr,{relatedTarget:0}),Si=bn(Rx),Mx=w({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),Px=bn(Mx),Lx=w({},yo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_x=bn(Lx),Ix=w({},yo,{data:0}),yu=bn(Ix),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vx[e])?!!t[e]:!1}function Ci(){return $x}var qx=w({},Lr,{key:function(e){if(e.key){var t=Ux[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ci,charCode:function(e){return e.type==="keypress"?Hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=bn(qx),Yx=w({},qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=bn(Yx),Kx=w({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ci}),Xx=bn(Kx),Zx=w({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=bn(Zx),Wx=w({},qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jx=bn(Wx),eg=w({},yo,{newState:0,oldState:0}),tg=bn(eg),ng=[9,13,27,32],Di=ga&&"CompositionEvent"in window,Ir=null;ga&&"documentMode"in document&&(Ir=document.documentMode);var ag=ga&&"TextEvent"in window&&!Ir,ju=ga&&(!Di||Ir&&8<Ir&&11>=Ir),Su=" ",Cu=!1;function Du(e,t){switch(e){case"keyup":return ng.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xo=!1;function og(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Cu=!0,Su);case"textInput":return e=t.data,e===Su&&Cu?null:e;default:return null}}function rg(e,t){if(Xo)return e==="compositionend"||!Di&&Du(e,t)?(e=vu(),Us=yi=qa=null,Xo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ju&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function Fu(e,t,a,o){Yo?Ko?Ko.push(o):Ko=[o]:Yo=o,t=zl(t,"onChange"),0<t.length&&(a=new $s("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ur=null,Hr=null;function lg(e){pm(e,0)}function Gs(e){var t=Mn(e);if(du(t))return e}function Bu(e,t){if(e==="change")return t}var Ou=!1;if(ga){var Ti;if(ga){var Ni="oninput"in document;if(!Ni){var Au=document.createElement("div");Au.setAttribute("oninput","return;"),Ni=typeof Au.oninput=="function"}Ti=Ni}else Ti=!1;Ou=Ti&&(!document.documentMode||9<document.documentMode)}function Eu(){Ur&&(Ur.detachEvent("onpropertychange",zu),Hr=Ur=null)}function zu(e){if(e.propertyName==="value"&&Gs(Hr)){var t=[];Fu(t,Hr,e,vi(e)),gu(lg,t)}}function ig(e,t,a){e==="focusin"?(Eu(),Ur=t,Hr=a,Ur.attachEvent("onpropertychange",zu)):e==="focusout"&&Eu()}function cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(Hr)}function dg(e,t){if(e==="click")return Gs(t)}function ug(e,t){if(e==="input"||e==="change")return Gs(t)}function pg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dn=typeof Object.is=="function"?Object.is:pg;function Vr(e,t){if(Dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var l=a[o];if(!le.call(t,l)||!Dn(e[l],t[l]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,t){var a=Ru(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ru(a)}}function Pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_s(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=_s(e.document)}return t}function Fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fg=ga&&"documentMode"in document&&11>=document.documentMode,Zo=null,Bi=null,$r=null,Oi=!1;function _u(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oi||Zo==null||Zo!==_s(o)||(o=Zo,"selectionStart"in o&&Fi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$r&&Vr($r,o)||($r=o,o=zl(Bi,"onSelect"),0<o.length&&(t=new $s("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Zo)))}function wo(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Qo={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionrun:wo("Transition","TransitionRun"),transitionstart:wo("Transition","TransitionStart"),transitioncancel:wo("Transition","TransitionCancel"),transitionend:wo("Transition","TransitionEnd")},Ai={},Iu={};ga&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete Qo.animationend.animation,delete Qo.animationiteration.animation,delete Qo.animationstart.animation),"TransitionEvent"in window||delete Qo.transitionend.transition);function jo(e){if(Ai[e])return Ai[e];if(!Qo[e])return e;var t=Qo[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Iu)return Ai[e]=t[a];return e}var Uu=jo("animationend"),Hu=jo("animationiteration"),Vu=jo("animationstart"),mg=jo("transitionrun"),hg=jo("transitionstart"),xg=jo("transitioncancel"),$u=jo("transitionend"),qu=new Map,Ei="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ei.push("scrollEnd");function ea(e,t){qu.set(e,t),Jn(t,[e])}var Ys=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Un=[],Wo=0,zi=0;function Ks(){for(var e=Wo,t=zi=Wo=0;t<e;){var a=Un[t];Un[t++]=null;var o=Un[t];Un[t++]=null;var l=Un[t];Un[t++]=null;var i=Un[t];if(Un[t++]=null,o!==null&&l!==null){var f=o.pending;f===null?l.next=l:(l.next=f.next,f.next=l),o.pending=l}i!==0&&Gu(a,l,i)}}function Xs(e,t,a,o){Un[Wo++]=e,Un[Wo++]=t,Un[Wo++]=a,Un[Wo++]=o,zi|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ri(e,t,a,o){return Xs(e,t,a,o),Zs(e)}function So(e,t){return Xs(e,null,null,t),Zs(e)}function Gu(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,o=i.alternate,o!==null&&(o.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-$e(a),e=i.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=a|536870912),i):null}function Zs(e){if(50<ps)throw ps=0,$c=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jo={};function gg(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,t,a,o){return new gg(e,t,a,o)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,t){var a=e.alternate;return a===null?(a=Tn(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qs(e,t,a,o,l,i){var f=0;if(o=e,typeof e=="function")Mi(e)&&(f=1);else if(typeof e=="string")f=wv(e,a,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case X:return e=Tn(31,a,t,l),e.elementType=X,e.lanes=i,e;case T:return Co(a.children,l,i,t);case N:f=8,l|=24;break;case M:return e=Tn(12,a,t,l|2),e.elementType=M,e.lanes=i,e;case q:return e=Tn(13,a,t,l),e.elementType=q,e.lanes=i,e;case I:return e=Tn(19,a,t,l),e.elementType=I,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:f=10;break e;case Z:f=9;break e;case K:f=11;break e;case G:f=14;break e;case $:f=16,o=null;break e}f=29,a=Error(d(130,e===null?"null":typeof e,"")),o=null}return t=Tn(f,a,t,l),t.elementType=e,t.type=o,t.lanes=i,t}function Co(e,t,a,o){return e=Tn(7,e,o,t),e.lanes=a,e}function Pi(e,t,a){return e=Tn(6,e,null,t),e.lanes=a,e}function Ku(e){var t=Tn(18,null,null,0);return t.stateNode=e,t}function Li(e,t,a){return t=Tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xu=new WeakMap;function Hn(e,t){if(typeof e=="object"&&e!==null){var a=Xu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ve(t)},Xu.set(e,t),t)}return{value:e,source:t,stack:ve(t)}}var er=[],tr=0,Ws=null,qr=0,Vn=[],$n=0,Ga=null,la=1,ia="";function ba(e,t){er[tr++]=qr,er[tr++]=Ws,Ws=e,qr=t}function Zu(e,t,a){Vn[$n++]=la,Vn[$n++]=ia,Vn[$n++]=Ga,Ga=e;var o=la;e=ia;var l=32-$e(o)-1;o&=~(1<<l),a+=1;var i=32-$e(t)+l;if(30<i){var f=l-l%5;i=(o&(1<<f)-1).toString(32),o>>=f,l-=f,la=1<<32-$e(t)+l|a<<l|o,ia=i+e}else la=1<<i|a<<l|o,ia=e}function _i(e){e.return!==null&&(ba(e,1),Zu(e,1,0))}function Ii(e){for(;e===Ws;)Ws=er[--tr],er[tr]=null,qr=er[--tr],er[tr]=null;for(;e===Ga;)Ga=Vn[--$n],Vn[$n]=null,ia=Vn[--$n],Vn[$n]=null,la=Vn[--$n],Vn[$n]=null}function Qu(e,t){Vn[$n++]=la,Vn[$n++]=ia,Vn[$n++]=Ga,la=t.id,ia=t.overflow,Ga=e}var rn=null,Ot=null,ut=!1,Ya=null,qn=!1,Ui=Error(d(519));function Ka(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gr(Hn(t,e)),Ui}function Wu(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Vt]=e,t[Mt]=o,a){case"dialog":st("cancel",t),st("close",t);break;case"iframe":case"object":case"embed":st("load",t);break;case"video":case"audio":for(a=0;a<ms.length;a++)st(ms[a],t);break;case"source":st("error",t);break;case"img":case"image":case"link":st("error",t),st("load",t);break;case"details":st("toggle",t);break;case"input":st("invalid",t),uu(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":st("invalid",t);break;case"textarea":st("invalid",t),fu(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||xm(t.textContent,a)?(o.popover!=null&&(st("beforetoggle",t),st("toggle",t)),o.onScroll!=null&&st("scroll",t),o.onScrollEnd!=null&&st("scrollend",t),o.onClick!=null&&(t.onclick=xa),t=!0):t=!1,t||Ka(e,!0)}function Ju(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 31:case 13:qn=!1;return;case 27:case 3:qn=!0;return;default:rn=rn.return}}function nr(e){if(e!==rn)return!1;if(!ut)return Ju(e),ut=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rd(e.type,e.memoizedProps)),a=!a),a&&Ot&&Ka(e),Ju(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ot=Cm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ot=Cm(e)}else t===27?(t=Ot,io(e.type)?(e=dd,dd=null,Ot=e):Ot=t):Ot=rn?Yn(e.stateNode.nextSibling):null;return!0}function Do(){Ot=rn=null,ut=!1}function Hi(){var e=Ya;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ya=null),e}function Gr(e){Ya===null?Ya=[e]:Ya.push(e)}var Vi=k(null),To=null,ka=null;function Xa(e,t,a){E(Vi,t._currentValue),t._currentValue=a}function ya(e){e._currentValue=Vi.current,F(Vi)}function $i(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function qi(e,t,a,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var f=l.child;i=i.firstContext;e:for(;i!==null;){var g=i;i=l;for(var B=0;B<t.length;B++)if(g.context===t[B]){i.lanes|=a,g=i.alternate,g!==null&&(g.lanes|=a),$i(i.return,a,e),o||(f=null);break e}i=g.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(d(341));f.lanes|=a,i=f.alternate,i!==null&&(i.lanes|=a),$i(f,a,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function ar(e,t,a,o){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(d(387));if(f=f.memoizedProps,f!==null){var g=l.type;Dn(l.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(l===ie.current){if(f=l.alternate,f===null)throw Error(d(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(bs):e=[bs])}l=l.return}e!==null&&qi(t,e,a,o),t.flags|=262144}function Js(e){for(e=e.firstContext;e!==null;){if(!Dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function No(e){To=e,ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return ep(To,e)}function el(e,t){return To===null&&No(e),ep(e,t)}function ep(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ka===null){if(e===null)throw Error(d(308));ka=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ka=ka.next=t;return a}var vg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bg=r.unstable_scheduleCallback,kg=r.unstable_NormalPriority,Gt={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gi(){return{controller:new vg,data:new Map,refCount:0}}function Yr(e){e.refCount--,e.refCount===0&&bg(kg,function(){e.controller.abort()})}var Kr=null,Yi=0,or=0,rr=null;function yg(e,t){if(Kr===null){var a=Kr=[];Yi=0,or=Zc(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Yi++,t.then(tp,tp),t}function tp(){if(--Yi===0&&Kr!==null){rr!==null&&(rr.status="fulfilled");var e=Kr;Kr=null,or=0,rr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wg(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),o}var np=D.S;D.S=function(e,t){If=Ge(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&yg(e,t),np!==null&&np(e,t)};var Fo=k(null);function Ki(){var e=Fo.current;return e!==null?e:Tt.pooledCache}function tl(e,t){t===null?E(Fo,Fo.current):E(Fo,t.pool)}function ap(){var e=Ki();return e===null?null:{parent:Gt._currentValue,pool:e}}var sr=Error(d(460)),Xi=Error(d(474)),nl=Error(d(542)),al={then:function(){}};function op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rp(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(xa,xa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lp(e),e;default:if(typeof t.status=="string")t.then(xa,xa);else{if(e=Tt,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lp(e),e}throw Oo=t,sr}}function Bo(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Oo=a,sr):a}}var Oo=null;function sp(){if(Oo===null)throw Error(d(459));var e=Oo;return Oo=null,e}function lp(e){if(e===sr||e===nl)throw Error(d(483))}var lr=null,Xr=0;function ol(e){var t=Xr;return Xr+=1,lr===null&&(lr=[]),rp(lr,e,t)}function Zr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rl(e,t){throw t.$$typeof===S?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ip(e){function t(_,A){if(e){var H=_.deletions;H===null?(_.deletions=[A],_.flags|=16):H.push(A)}}function a(_,A){if(!e)return null;for(;A!==null;)t(_,A),A=A.sibling;return null}function o(_){for(var A=new Map;_!==null;)_.key!==null?A.set(_.key,_):A.set(_.index,_),_=_.sibling;return A}function l(_,A){return _=va(_,A),_.index=0,_.sibling=null,_}function i(_,A,H){return _.index=H,e?(H=_.alternate,H!==null?(H=H.index,H<A?(_.flags|=67108866,A):H):(_.flags|=67108866,A)):(_.flags|=1048576,A)}function f(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function g(_,A,H,ce){return A===null||A.tag!==6?(A=Pi(H,_.mode,ce),A.return=_,A):(A=l(A,H),A.return=_,A)}function B(_,A,H,ce){var Ue=H.type;return Ue===T?oe(_,A,H.props.children,ce,H.key):A!==null&&(A.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===$&&Bo(Ue)===A.type)?(A=l(A,H.props),Zr(A,H),A.return=_,A):(A=Qs(H.type,H.key,H.props,null,_.mode,ce),Zr(A,H),A.return=_,A)}function V(_,A,H,ce){return A===null||A.tag!==4||A.stateNode.containerInfo!==H.containerInfo||A.stateNode.implementation!==H.implementation?(A=Li(H,_.mode,ce),A.return=_,A):(A=l(A,H.children||[]),A.return=_,A)}function oe(_,A,H,ce,Ue){return A===null||A.tag!==7?(A=Co(H,_.mode,ce,Ue),A.return=_,A):(A=l(A,H),A.return=_,A)}function he(_,A,H){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Pi(""+A,_.mode,H),A.return=_,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case z:return H=Qs(A.type,A.key,A.props,null,_.mode,H),Zr(H,A),H.return=_,H;case C:return A=Li(A,_.mode,H),A.return=_,A;case $:return A=Bo(A),he(_,A,H)}if(se(A)||ge(A))return A=Co(A,_.mode,H,null),A.return=_,A;if(typeof A.then=="function")return he(_,ol(A),H);if(A.$$typeof===P)return he(_,el(_,A),H);rl(_,A)}return null}function Y(_,A,H,ce){var Ue=A!==null?A.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return Ue!==null?null:g(_,A,""+H,ce);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case z:return H.key===Ue?B(_,A,H,ce):null;case C:return H.key===Ue?V(_,A,H,ce):null;case $:return H=Bo(H),Y(_,A,H,ce)}if(se(H)||ge(H))return Ue!==null?null:oe(_,A,H,ce,null);if(typeof H.then=="function")return Y(_,A,ol(H),ce);if(H.$$typeof===P)return Y(_,A,el(_,H),ce);rl(_,H)}return null}function J(_,A,H,ce,Ue){if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return _=_.get(H)||null,g(A,_,""+ce,Ue);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case z:return _=_.get(ce.key===null?H:ce.key)||null,B(A,_,ce,Ue);case C:return _=_.get(ce.key===null?H:ce.key)||null,V(A,_,ce,Ue);case $:return ce=Bo(ce),J(_,A,H,ce,Ue)}if(se(ce)||ge(ce))return _=_.get(H)||null,oe(A,_,ce,Ue,null);if(typeof ce.then=="function")return J(_,A,H,ol(ce),Ue);if(ce.$$typeof===P)return J(_,A,H,el(A,ce),Ue);rl(A,ce)}return null}function ze(_,A,H,ce){for(var Ue=null,pt=null,Pe=A,et=A=0,ct=null;Pe!==null&&et<H.length;et++){Pe.index>et?(ct=Pe,Pe=null):ct=Pe.sibling;var ft=Y(_,Pe,H[et],ce);if(ft===null){Pe===null&&(Pe=ct);break}e&&Pe&&ft.alternate===null&&t(_,Pe),A=i(ft,A,et),pt===null?Ue=ft:pt.sibling=ft,pt=ft,Pe=ct}if(et===H.length)return a(_,Pe),ut&&ba(_,et),Ue;if(Pe===null){for(;et<H.length;et++)Pe=he(_,H[et],ce),Pe!==null&&(A=i(Pe,A,et),pt===null?Ue=Pe:pt.sibling=Pe,pt=Pe);return ut&&ba(_,et),Ue}for(Pe=o(Pe);et<H.length;et++)ct=J(Pe,_,et,H[et],ce),ct!==null&&(e&&ct.alternate!==null&&Pe.delete(ct.key===null?et:ct.key),A=i(ct,A,et),pt===null?Ue=ct:pt.sibling=ct,pt=ct);return e&&Pe.forEach(function(mo){return t(_,mo)}),ut&&ba(_,et),Ue}function qe(_,A,H,ce){if(H==null)throw Error(d(151));for(var Ue=null,pt=null,Pe=A,et=A=0,ct=null,ft=H.next();Pe!==null&&!ft.done;et++,ft=H.next()){Pe.index>et?(ct=Pe,Pe=null):ct=Pe.sibling;var mo=Y(_,Pe,ft.value,ce);if(mo===null){Pe===null&&(Pe=ct);break}e&&Pe&&mo.alternate===null&&t(_,Pe),A=i(mo,A,et),pt===null?Ue=mo:pt.sibling=mo,pt=mo,Pe=ct}if(ft.done)return a(_,Pe),ut&&ba(_,et),Ue;if(Pe===null){for(;!ft.done;et++,ft=H.next())ft=he(_,ft.value,ce),ft!==null&&(A=i(ft,A,et),pt===null?Ue=ft:pt.sibling=ft,pt=ft);return ut&&ba(_,et),Ue}for(Pe=o(Pe);!ft.done;et++,ft=H.next())ft=J(Pe,_,et,ft.value,ce),ft!==null&&(e&&ft.alternate!==null&&Pe.delete(ft.key===null?et:ft.key),A=i(ft,A,et),pt===null?Ue=ft:pt.sibling=ft,pt=ft);return e&&Pe.forEach(function(Ev){return t(_,Ev)}),ut&&ba(_,et),Ue}function jt(_,A,H,ce){if(typeof H=="object"&&H!==null&&H.type===T&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case z:e:{for(var Ue=H.key;A!==null;){if(A.key===Ue){if(Ue=H.type,Ue===T){if(A.tag===7){a(_,A.sibling),ce=l(A,H.props.children),ce.return=_,_=ce;break e}}else if(A.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===$&&Bo(Ue)===A.type){a(_,A.sibling),ce=l(A,H.props),Zr(ce,H),ce.return=_,_=ce;break e}a(_,A);break}else t(_,A);A=A.sibling}H.type===T?(ce=Co(H.props.children,_.mode,ce,H.key),ce.return=_,_=ce):(ce=Qs(H.type,H.key,H.props,null,_.mode,ce),Zr(ce,H),ce.return=_,_=ce)}return f(_);case C:e:{for(Ue=H.key;A!==null;){if(A.key===Ue)if(A.tag===4&&A.stateNode.containerInfo===H.containerInfo&&A.stateNode.implementation===H.implementation){a(_,A.sibling),ce=l(A,H.children||[]),ce.return=_,_=ce;break e}else{a(_,A);break}else t(_,A);A=A.sibling}ce=Li(H,_.mode,ce),ce.return=_,_=ce}return f(_);case $:return H=Bo(H),jt(_,A,H,ce)}if(se(H))return ze(_,A,H,ce);if(ge(H)){if(Ue=ge(H),typeof Ue!="function")throw Error(d(150));return H=Ue.call(H),qe(_,A,H,ce)}if(typeof H.then=="function")return jt(_,A,ol(H),ce);if(H.$$typeof===P)return jt(_,A,el(_,H),ce);rl(_,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,A!==null&&A.tag===6?(a(_,A.sibling),ce=l(A,H),ce.return=_,_=ce):(a(_,A),ce=Pi(H,_.mode,ce),ce.return=_,_=ce),f(_)):a(_,A)}return function(_,A,H,ce){try{Xr=0;var Ue=jt(_,A,H,ce);return lr=null,Ue}catch(Pe){if(Pe===sr||Pe===nl)throw Pe;var pt=Tn(29,Pe,null,_.mode);return pt.lanes=ce,pt.return=_,pt}}}var Ao=ip(!0),cp=ip(!1),Za=!1;function Zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ht&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=Zs(e),Gu(e,null,a),t}return Xs(e,o,t,a),Zs(e)}function Qr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Ar(e,a)}}function Wi(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=f:i=i.next=f,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ji=!1;function Wr(){if(Ji){var e=rr;if(e!==null)throw e}}function Jr(e,t,a,o){Ji=!1;var l=e.updateQueue;Za=!1;var i=l.firstBaseUpdate,f=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var B=g,V=B.next;B.next=null,f===null?i=V:f.next=V,f=B;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,g=oe.lastBaseUpdate,g!==f&&(g===null?oe.firstBaseUpdate=V:g.next=V,oe.lastBaseUpdate=B))}if(i!==null){var he=l.baseState;f=0,oe=V=B=null,g=i;do{var Y=g.lane&-536870913,J=Y!==g.lane;if(J?(it&Y)===Y:(o&Y)===Y){Y!==0&&Y===or&&(Ji=!0),oe!==null&&(oe=oe.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ze=e,qe=g;Y=t;var jt=a;switch(qe.tag){case 1:if(ze=qe.payload,typeof ze=="function"){he=ze.call(jt,he,Y);break e}he=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=qe.payload,Y=typeof ze=="function"?ze.call(jt,he,Y):ze,Y==null)break e;he=w({},he,Y);break e;case 2:Za=!0}}Y=g.callback,Y!==null&&(e.flags|=64,J&&(e.flags|=8192),J=l.callbacks,J===null?l.callbacks=[Y]:J.push(Y))}else J={lane:Y,tag:g.tag,payload:g.payload,callback:g.callback,next:null},oe===null?(V=oe=J,B=he):oe=oe.next=J,f|=Y;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;J=g,g=J.next,J.next=null,l.lastBaseUpdate=J,l.shared.pending=null}}while(!0);oe===null&&(B=he),l.baseState=B,l.firstBaseUpdate=V,l.lastBaseUpdate=oe,i===null&&(l.shared.lanes=0),ao|=f,e.lanes=f,e.memoizedState=he}}function dp(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function up(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dp(a[e],t)}var ir=k(null),sl=k(0);function pp(e,t){e=Ba,E(sl,e),E(ir,t),Ba=e|t.baseLanes}function ec(){E(sl,Ba),E(ir,ir.current)}function tc(){Ba=sl.current,F(ir),F(sl)}var Nn=k(null),Gn=null;function Ja(e){var t=e.alternate;E($t,$t.current&1),E(Nn,e),Gn===null&&(t===null||ir.current!==null||t.memoizedState!==null)&&(Gn=e)}function nc(e){E($t,$t.current),E(Nn,e),Gn===null&&(Gn=e)}function fp(e){e.tag===22?(E($t,$t.current),E(Nn,e),Gn===null&&(Gn=e)):eo()}function eo(){E($t,$t.current),E(Nn,Nn.current)}function Fn(e){F(Nn),Gn===e&&(Gn=null),F($t)}var $t=k(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||id(a)||cd(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=0,Je=null,yt=null,Yt=null,il=!1,cr=!1,Eo=!1,cl=0,es=0,dr=null,jg=0;function It(){throw Error(d(321))}function ac(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Dn(e[a],t[a]))return!1;return!0}function oc(e,t,a,o,l,i){return wa=i,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Zp:bc,Eo=!1,i=a(o,l),Eo=!1,cr&&(i=hp(t,a,o,l)),mp(e),i}function mp(e){D.H=as;var t=yt!==null&&yt.next!==null;if(wa=0,Yt=yt=Je=null,il=!1,es=0,dr=null,t)throw Error(d(300));e===null||Kt||(e=e.dependencies,e!==null&&Js(e)&&(Kt=!0))}function hp(e,t,a,o){Je=e;var l=0;do{if(cr&&(dr=null),es=0,cr=!1,25<=l)throw Error(d(301));if(l+=1,Yt=yt=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Qp,i=t(a,o)}while(cr);return i}function Sg(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?ts(t):t,e=e.useState()[0],(yt!==null?yt.memoizedState:null)!==e&&(Je.flags|=1024),t}function rc(){var e=cl!==0;return cl=0,e}function sc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function lc(e){if(il){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}il=!1}wa=0,Yt=yt=Je=null,cr=!1,es=cl=0,dr=null}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Je.memoizedState=Yt=e:Yt=Yt.next=e,Yt}function qt(){if(yt===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=yt.next;var t=Yt===null?Je.memoizedState:Yt.next;if(t!==null)Yt=t,yt=e;else{if(e===null)throw Je.alternate===null?Error(d(467)):Error(d(310));yt=e,e={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Yt===null?Je.memoizedState=Yt=e:Yt=Yt.next=e}return Yt}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(e){var t=es;return es+=1,dr===null&&(dr=[]),e=rp(dr,e,t),t=Je,(Yt===null?t.memoizedState:Yt.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Zp:bc),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ts(e);if(e.$$typeof===P)return sn(e)}throw Error(d(438,String(e)))}function ic(e){var t=null,a=Je.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=Je.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=dl(),Je.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=me;return t.index++,a}function ja(e,t){return typeof t=="function"?t(e):t}function pl(e){var t=qt();return cc(t,yt,e)}function cc(e,t,a){var o=e.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=a;var l=e.baseQueue,i=o.pending;if(i!==null){if(l!==null){var f=l.next;l.next=i.next,i.next=f}t.baseQueue=l=i,o.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var g=f=null,B=null,V=t,oe=!1;do{var he=V.lane&-536870913;if(he!==V.lane?(it&he)===he:(wa&he)===he){var Y=V.revertLane;if(Y===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),he===or&&(oe=!0);else if((wa&Y)===Y){V=V.next,Y===or&&(oe=!0);continue}else he={lane:0,revertLane:V.revertLane,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},B===null?(g=B=he,f=i):B=B.next=he,Je.lanes|=Y,ao|=Y;he=V.action,Eo&&a(i,he),i=V.hasEagerState?V.eagerState:a(i,he)}else Y={lane:he,revertLane:V.revertLane,gesture:V.gesture,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},B===null?(g=B=Y,f=i):B=B.next=Y,Je.lanes|=he,ao|=he;V=V.next}while(V!==null&&V!==t);if(B===null?f=i:B.next=g,!Dn(i,e.memoizedState)&&(Kt=!0,oe&&(a=rr,a!==null)))throw a;e.memoizedState=i,e.baseState=f,e.baseQueue=B,o.lastRenderedState=i}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function dc(e){var t=qt(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var o=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var f=l=l.next;do i=e(i,f.action),f=f.next;while(f!==l);Dn(i,t.memoizedState)||(Kt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,o]}function xp(e,t,a){var o=Je,l=qt(),i=ut;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=t();var f=!Dn((yt||l).memoizedState,a);if(f&&(l.memoizedState=a,Kt=!0),l=l.queue,fc(bp.bind(null,o,l,e),[e]),l.getSnapshot!==t||f||Yt!==null&&Yt.memoizedState.tag&1){if(o.flags|=2048,ur(9,{destroy:void 0},vp.bind(null,o,l,a,t),null),Tt===null)throw Error(d(349));i||(wa&127)!==0||gp(o,t,a)}return a}function gp(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Je.updateQueue,t===null?(t=dl(),Je.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vp(e,t,a,o){t.value=a,t.getSnapshot=o,kp(t)&&yp(e)}function bp(e,t,a){return a(function(){kp(t)&&yp(e)})}function kp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Dn(e,a)}catch{return!0}}function yp(e){var t=So(e,2);t!==null&&Sn(t,e,2)}function uc(e){var t=fn();if(typeof e=="function"){var a=e;if(e=a(),Eo){Oe(!0);try{a()}finally{Oe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:e},t}function wp(e,t,a,o){return e.baseState=a,cc(e,yt,typeof o=="function"?o:ja)}function Cg(e,t,a,o,l){if(hl(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){i.listeners.push(f)}};D.T!==null?a(!0):i.isTransition=!1,o(i),a=t.pending,a===null?(i.next=t.pending=i,jp(t,i)):(i.next=a.next,t.pending=a.next=i)}}function jp(e,t){var a=t.action,o=t.payload,l=e.state;if(t.isTransition){var i=D.T,f={};D.T=f;try{var g=a(l,o),B=D.S;B!==null&&B(f,g),Sp(e,t,g)}catch(V){pc(e,t,V)}finally{i!==null&&f.types!==null&&(i.types=f.types),D.T=i}}else try{i=a(l,o),Sp(e,t,i)}catch(V){pc(e,t,V)}}function Sp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Cp(e,t,o)},function(o){return pc(e,t,o)}):Cp(e,t,a)}function Cp(e,t,a){t.status="fulfilled",t.value=a,Dp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,jp(e,a)))}function pc(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Dp(t),t=t.next;while(t!==o)}e.action=null}function Dp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tp(e,t){return t}function Np(e,t){if(ut){var a=Tt.formState;if(a!==null){e:{var o=Je;if(ut){if(Ot){t:{for(var l=Ot,i=qn;l.nodeType!==8;){if(!i){l=null;break t}if(l=Yn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Ot=Yn(l.nextSibling),o=l.data==="F!";break e}}Ka(o)}o=!1}o&&(t=a[0])}}return a=fn(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:t},a.queue=o,a=Yp.bind(null,Je,o),o.dispatch=a,o=uc(!1),i=vc.bind(null,Je,!1,o.queue),o=fn(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,a=Cg.bind(null,Je,l,i,a),l.dispatch=a,o.memoizedState=e,[t,a,!1]}function Fp(e){var t=qt();return Bp(t,yt,e)}function Bp(e,t,a){if(t=cc(e,t,Tp)[0],e=pl(ja)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ts(t)}catch(f){throw f===sr?nl:f}else o=t;t=qt();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(Je.flags|=2048,ur(9,{destroy:void 0},Dg.bind(null,l,a),null)),[o,i,e]}function Dg(e,t){e.action=t}function Op(e){var t=qt(),a=yt;if(a!==null)return Bp(t,a,e);qt(),t=t.memoizedState,a=qt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function ur(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=Je.updateQueue,t===null&&(t=dl(),Je.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function Ap(){return qt().memoizedState}function fl(e,t,a,o){var l=fn();Je.flags|=e,l.memoizedState=ur(1|t,{destroy:void 0},a,o===void 0?null:o)}function ml(e,t,a,o){var l=qt();o=o===void 0?null:o;var i=l.memoizedState.inst;yt!==null&&o!==null&&ac(o,yt.memoizedState.deps)?l.memoizedState=ur(t,i,a,o):(Je.flags|=e,l.memoizedState=ur(1|t,i,a,o))}function Ep(e,t){fl(8390656,8,e,t)}function fc(e,t){ml(2048,8,e,t)}function Tg(e){Je.flags|=4;var t=Je.updateQueue;if(t===null)t=dl(),Je.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function zp(e){var t=qt().memoizedState;return Tg({ref:t,nextImpl:e}),function(){if((ht&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Rp(e,t){return ml(4,2,e,t)}function Mp(e,t){return ml(4,4,e,t)}function Pp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lp(e,t,a){a=a!=null?a.concat([e]):null,ml(4,4,Pp.bind(null,t,e),a)}function mc(){}function _p(e,t){var a=qt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&ac(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Ip(e,t){var a=qt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&ac(t,o[1]))return o[0];if(o=e(),Eo){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[o,t],o}function hc(e,t,a){return a===void 0||(wa&1073741824)!==0&&(it&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Hf(),Je.lanes|=e,ao|=e,a)}function Up(e,t,a,o){return Dn(a,t)?a:ir.current!==null?(e=hc(e,a,o),Dn(e,t)||(Kt=!0),e):(wa&42)===0||(wa&1073741824)!==0&&(it&261930)===0?(Kt=!0,e.memoizedState=a):(e=Hf(),Je.lanes|=e,ao|=e,t)}function Hp(e,t,a,o,l){var i=U.p;U.p=i!==0&&8>i?i:8;var f=D.T,g={};D.T=g,vc(e,!1,t,a);try{var B=l(),V=D.S;if(V!==null&&V(g,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=wg(B,o);ns(e,t,oe,An(e))}else ns(e,t,o,An(e))}catch(he){ns(e,t,{then:function(){},status:"rejected",reason:he},An())}finally{U.p=i,f!==null&&g.types!==null&&(f.types=g.types),D.T=f}}function Ng(){}function xc(e,t,a,o){if(e.tag!==5)throw Error(d(476));var l=Vp(e).queue;Hp(e,l,t,Q,a===null?Ng:function(){return $p(e),a(o)})}function Vp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:Q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $p(e){var t=Vp(e);t.next===null&&(t=e.alternate.memoizedState),ns(e,t.next.queue,{},An())}function gc(){return sn(bs)}function qp(){return qt().memoizedState}function Gp(){return qt().memoizedState}function Fg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=An();e=Qa(a);var o=Wa(t,e,a);o!==null&&(Sn(o,t,a),Qr(o,t,a)),t={cache:Gi()},e.payload=t;return}t=t.return}}function Bg(e,t,a){var o=An();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hl(e)?Kp(t,a):(a=Ri(e,t,a,o),a!==null&&(Sn(a,e,o),Xp(a,t,o)))}function Yp(e,t,a){var o=An();ns(e,t,a,o)}function ns(e,t,a,o){var l={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(e))Kp(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var f=t.lastRenderedState,g=i(f,a);if(l.hasEagerState=!0,l.eagerState=g,Dn(g,f))return Xs(e,t,l,0),Tt===null&&Ks(),!1}catch{}if(a=Ri(e,t,l,o),a!==null)return Sn(a,e,o),Xp(a,t,o),!0}return!1}function vc(e,t,a,o){if(o={lane:2,revertLane:Zc(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(t)throw Error(d(479))}else t=Ri(e,a,o,2),t!==null&&Sn(t,e,2)}function hl(e){var t=e.alternate;return e===Je||t!==null&&t===Je}function Kp(e,t){cr=il=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Xp(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Ar(e,a)}}var as={readContext:sn,use:ul,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useInsertionEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useSyncExternalStore:It,useId:It,useHostTransitionStatus:It,useFormState:It,useActionState:It,useOptimistic:It,useMemoCache:It,useCacheRefresh:It};as.useEffectEvent=It;var Zp={readContext:sn,use:ul,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:Ep,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,fl(4194308,4,Pp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return fl(4194308,4,e,t)},useInsertionEffect:function(e,t){fl(4,2,e,t)},useMemo:function(e,t){var a=fn();t=t===void 0?null:t;var o=e();if(Eo){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=fn();if(a!==void 0){var l=a(t);if(Eo){Oe(!0);try{a(t)}finally{Oe(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=Bg.bind(null,Je,e),[o.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:function(e){e=uc(e);var t=e.queue,a=Yp.bind(null,Je,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:mc,useDeferredValue:function(e,t){var a=fn();return hc(a,e,t)},useTransition:function(){var e=uc(!1);return e=Hp.bind(null,Je,e.queue,!0,!1),fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=Je,l=fn();if(ut){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Tt===null)throw Error(d(349));(it&127)!==0||gp(o,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Ep(bp.bind(null,o,i,e),[e]),o.flags|=2048,ur(9,{destroy:void 0},vp.bind(null,o,i,a,t),null),a},useId:function(){var e=fn(),t=Tt.identifierPrefix;if(ut){var a=ia,o=la;a=(o&~(1<<32-$e(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=cl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=jg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gc,useFormState:Np,useActionState:Np,useOptimistic:function(e){var t=fn();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=vc.bind(null,Je,!0,a),a.dispatch=t,[e,t]},useMemoCache:ic,useCacheRefresh:function(){return fn().memoizedState=Fg.bind(null,Je)},useEffectEvent:function(e){var t=fn(),a={impl:e};return t.memoizedState=a,function(){if((ht&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},bc={readContext:sn,use:ul,useCallback:_p,useContext:sn,useEffect:fc,useImperativeHandle:Lp,useInsertionEffect:Rp,useLayoutEffect:Mp,useMemo:Ip,useReducer:pl,useRef:Ap,useState:function(){return pl(ja)},useDebugValue:mc,useDeferredValue:function(e,t){var a=qt();return Up(a,yt.memoizedState,e,t)},useTransition:function(){var e=pl(ja)[0],t=qt().memoizedState;return[typeof e=="boolean"?e:ts(e),t]},useSyncExternalStore:xp,useId:qp,useHostTransitionStatus:gc,useFormState:Fp,useActionState:Fp,useOptimistic:function(e,t){var a=qt();return wp(a,yt,e,t)},useMemoCache:ic,useCacheRefresh:Gp};bc.useEffectEvent=zp;var Qp={readContext:sn,use:ul,useCallback:_p,useContext:sn,useEffect:fc,useImperativeHandle:Lp,useInsertionEffect:Rp,useLayoutEffect:Mp,useMemo:Ip,useReducer:dc,useRef:Ap,useState:function(){return dc(ja)},useDebugValue:mc,useDeferredValue:function(e,t){var a=qt();return yt===null?hc(a,e,t):Up(a,yt.memoizedState,e,t)},useTransition:function(){var e=dc(ja)[0],t=qt().memoizedState;return[typeof e=="boolean"?e:ts(e),t]},useSyncExternalStore:xp,useId:qp,useHostTransitionStatus:gc,useFormState:Op,useActionState:Op,useOptimistic:function(e,t){var a=qt();return yt!==null?wp(a,yt,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ic,useCacheRefresh:Gp};Qp.useEffectEvent=zp;function kc(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yc={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=An(),l=Qa(o);l.payload=t,a!=null&&(l.callback=a),t=Wa(e,l,o),t!==null&&(Sn(t,e,o),Qr(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=An(),l=Qa(o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Wa(e,l,o),t!==null&&(Sn(t,e,o),Qr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=An(),o=Qa(a);o.tag=2,t!=null&&(o.callback=t),t=Wa(e,o,a),t!==null&&(Sn(t,e,a),Qr(t,e,a))}};function Wp(e,t,a,o,l,i,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,f):t.prototype&&t.prototype.isPureReactComponent?!Vr(a,o)||!Vr(l,i):!0}function Jp(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function zo(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function ef(e){Ys(e)}function tf(e){console.error(e)}function nf(e){Ys(e)}function xl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function af(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wc(e,t,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(e,t)},a}function of(e){return e=Qa(e),e.tag=3,e}function rf(e,t,a,o){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=o.value;e.payload=function(){return l(i)},e.callback=function(){af(t,a,o)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){af(t,a,o),typeof l!="function"&&(oo===null?oo=new Set([this]):oo.add(this));var g=o.stack;this.componentDidCatch(o.value,{componentStack:g!==null?g:""})})}function Og(e,t,a,o,l){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&ar(t,a,l,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:return Gn===null?Nl():a.alternate===null&&Ut===0&&(Ut=3),a.flags&=-257,a.flags|=65536,a.lanes=l,o===al?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Yc(e,o,l)),!1;case 22:return a.flags|=65536,o===al?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Yc(e,o,l)),!1}throw Error(d(435,a.tag))}return Yc(e,o,l),Nl(),!1}if(ut)return t=Nn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==Ui&&(e=Error(d(422),{cause:o}),Gr(Hn(e,a)))):(o!==Ui&&(t=Error(d(423),{cause:o}),Gr(Hn(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=Hn(o,a),l=wc(e.stateNode,o,l),Wi(e,l),Ut!==4&&(Ut=2)),!1;var i=Error(d(520),{cause:o});if(i=Hn(i,a),us===null?us=[i]:us.push(i),Ut!==4&&(Ut=2),t===null)return!0;o=Hn(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=wc(a.stateNode,o,e),Wi(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(oo===null||!oo.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=of(l),rf(l,e,a,o),Wi(a,l),!1}a=a.return}while(a!==null);return!1}var jc=Error(d(461)),Kt=!1;function ln(e,t,a,o){t.child=e===null?cp(t,null,a,o):Ao(t,e.child,a,o)}function sf(e,t,a,o,l){a=a.render;var i=t.ref;if("ref"in o){var f={};for(var g in o)g!=="ref"&&(f[g]=o[g])}else f=o;return No(t),o=oc(e,t,a,f,i,l),g=rc(),e!==null&&!Kt?(sc(e,t,l),Sa(e,t,l)):(ut&&g&&_i(t),t.flags|=1,ln(e,t,o,l),t.child)}function lf(e,t,a,o,l){if(e===null){var i=a.type;return typeof i=="function"&&!Mi(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,cf(e,t,i,o,l)):(e=Qs(a.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Oc(e,l)){var f=i.memoizedProps;if(a=a.compare,a=a!==null?a:Vr,a(f,o)&&e.ref===t.ref)return Sa(e,t,l)}return t.flags|=1,e=va(i,o),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,a,o,l){if(e!==null){var i=e.memoizedProps;if(Vr(i,o)&&e.ref===t.ref)if(Kt=!1,t.pendingProps=o=i,Oc(e,l))(e.flags&131072)!==0&&(Kt=!0);else return t.lanes=e.lanes,Sa(e,t,l)}return Sc(e,t,a,o,l)}function df(e,t,a,o){var l=o.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~i}else o=0,t.child=null;return uf(e,t,i,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&tl(t,i!==null?i.cachePool:null),i!==null?pp(t,i):ec(),fp(t);else return o=t.lanes=536870912,uf(e,t,i!==null?i.baseLanes|a:a,a,o)}else i!==null?(tl(t,i.cachePool),pp(t,i),eo(),t.memoizedState=null):(e!==null&&tl(t,null),ec(),eo());return ln(e,t,l,a),t.child}function os(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uf(e,t,a,o,l){var i=Ki();return i=i===null?null:{parent:Gt._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&tl(t,null),ec(),fp(t),e!==null&&ar(e,t,o,!0),t.childLanes=l,null}function gl(e,t){return t=bl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pf(e,t,a){return Ao(t,e.child,null,a),e=gl(t,t.pendingProps),e.flags|=2,Fn(t),t.memoizedState=null,e}function Ag(e,t,a){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ut){if(o.mode==="hidden")return e=gl(t,o),t.lanes=536870912,os(null,e);if(nc(t),(e=Ot)?(e=Sm(e,qn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:la,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},a=Ku(e),a.return=t,t.child=a,rn=t,Ot=null)):e=null,e===null)throw Ka(t);return t.lanes=536870912,null}return gl(t,o)}var i=e.memoizedState;if(i!==null){var f=i.dehydrated;if(nc(t),l)if(t.flags&256)t.flags&=-257,t=pf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Kt||ar(e,t,a,!1),l=(a&e.childLanes)!==0,Kt||l){if(o=Tt,o!==null&&(f=Er(o,a),f!==0&&f!==i.retryLane))throw i.retryLane=f,So(e,f),Sn(o,e,f),jc;Nl(),t=pf(e,t,a)}else e=i.treeContext,Ot=Yn(f.nextSibling),rn=t,ut=!0,Ya=null,qn=!1,e!==null&&Qu(t,e),t=gl(t,o),t.flags|=4096;return t}return e=va(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Sc(e,t,a,o,l){return No(t),a=oc(e,t,a,o,void 0,l),o=rc(),e!==null&&!Kt?(sc(e,t,l),Sa(e,t,l)):(ut&&o&&_i(t),t.flags|=1,ln(e,t,a,l),t.child)}function ff(e,t,a,o,l,i){return No(t),t.updateQueue=null,a=hp(t,o,a,l),mp(e),o=rc(),e!==null&&!Kt?(sc(e,t,i),Sa(e,t,i)):(ut&&o&&_i(t),t.flags|=1,ln(e,t,a,i),t.child)}function mf(e,t,a,o,l){if(No(t),t.stateNode===null){var i=Jo,f=a.contextType;typeof f=="object"&&f!==null&&(i=sn(f)),i=new a(o,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=yc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=o,i.state=t.memoizedState,i.refs={},Zi(t),f=a.contextType,i.context=typeof f=="object"&&f!==null?sn(f):Jo,i.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(kc(t,a,f,o),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(f=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),f!==i.state&&yc.enqueueReplaceState(i,i.state,null),Jr(t,o,i,l),Wr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){i=t.stateNode;var g=t.memoizedProps,B=zo(a,g);i.props=B;var V=i.context,oe=a.contextType;f=Jo,typeof oe=="object"&&oe!==null&&(f=sn(oe));var he=a.getDerivedStateFromProps;oe=typeof he=="function"||typeof i.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,oe||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(g||V!==f)&&Jp(t,i,o,f),Za=!1;var Y=t.memoizedState;i.state=Y,Jr(t,o,i,l),Wr(),V=t.memoizedState,g||Y!==V||Za?(typeof he=="function"&&(kc(t,a,he,o),V=t.memoizedState),(B=Za||Wp(t,a,B,o,Y,V,f))?(oe||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=V),i.props=o,i.state=V,i.context=f,o=B):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Qi(e,t),f=t.memoizedProps,oe=zo(a,f),i.props=oe,he=t.pendingProps,Y=i.context,V=a.contextType,B=Jo,typeof V=="object"&&V!==null&&(B=sn(V)),g=a.getDerivedStateFromProps,(V=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f!==he||Y!==B)&&Jp(t,i,o,B),Za=!1,Y=t.memoizedState,i.state=Y,Jr(t,o,i,l),Wr();var J=t.memoizedState;f!==he||Y!==J||Za||e!==null&&e.dependencies!==null&&Js(e.dependencies)?(typeof g=="function"&&(kc(t,a,g,o),J=t.memoizedState),(oe=Za||Wp(t,a,oe,o,Y,J,B)||e!==null&&e.dependencies!==null&&Js(e.dependencies))?(V||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,J,B),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,J,B)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=J),i.props=o,i.state=J,i.context=B,o=oe):(typeof i.componentDidUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),o=!1)}return i=o,vl(e,t),o=(t.flags&128)!==0,i||o?(i=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&o?(t.child=Ao(t,e.child,null,l),t.child=Ao(t,null,a,l)):ln(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Sa(e,t,l),e}function hf(e,t,a,o){return Do(),t.flags|=256,ln(e,t,a,o),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dc(e){return{baseLanes:e,cachePool:ap()}}function Tc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=On),e}function xf(e,t,a){var o=t.pendingProps,l=!1,i=(t.flags&128)!==0,f;if((f=i)||(f=e!==null&&e.memoizedState===null?!1:($t.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ut){if(l?Ja(t):eo(),(e=Ot)?(e=Sm(e,qn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:la,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},a=Ku(e),a.return=t,t.child=a,rn=t,Ot=null)):e=null,e===null)throw Ka(t);return cd(e)?t.lanes=32:t.lanes=536870912,null}var g=o.children;return o=o.fallback,l?(eo(),l=t.mode,g=bl({mode:"hidden",children:g},l),o=Co(o,l,a,null),g.return=t,o.return=t,g.sibling=o,t.child=g,o=t.child,o.memoizedState=Dc(a),o.childLanes=Tc(e,f,a),t.memoizedState=Cc,os(null,o)):(Ja(t),Nc(t,g))}var B=e.memoizedState;if(B!==null&&(g=B.dehydrated,g!==null)){if(i)t.flags&256?(Ja(t),t.flags&=-257,t=Fc(e,t,a)):t.memoizedState!==null?(eo(),t.child=e.child,t.flags|=128,t=null):(eo(),g=o.fallback,l=t.mode,o=bl({mode:"visible",children:o.children},l),g=Co(g,l,a,null),g.flags|=2,o.return=t,g.return=t,o.sibling=g,t.child=o,Ao(t,e.child,null,a),o=t.child,o.memoizedState=Dc(a),o.childLanes=Tc(e,f,a),t.memoizedState=Cc,t=os(null,o));else if(Ja(t),cd(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var V=f.dgst;f=V,o=Error(d(419)),o.stack="",o.digest=f,Gr({value:o,source:null,stack:null}),t=Fc(e,t,a)}else if(Kt||ar(e,t,a,!1),f=(a&e.childLanes)!==0,Kt||f){if(f=Tt,f!==null&&(o=Er(f,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,So(e,o),Sn(f,e,o),jc;id(g)||Nl(),t=Fc(e,t,a)}else id(g)?(t.flags|=192,t.child=e.child,t=null):(e=B.treeContext,Ot=Yn(g.nextSibling),rn=t,ut=!0,Ya=null,qn=!1,e!==null&&Qu(t,e),t=Nc(t,o.children),t.flags|=4096);return t}return l?(eo(),g=o.fallback,l=t.mode,B=e.child,V=B.sibling,o=va(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,V!==null?g=va(V,g):(g=Co(g,l,a,null),g.flags|=2),g.return=t,o.return=t,o.sibling=g,t.child=o,os(null,o),o=t.child,g=e.child.memoizedState,g===null?g=Dc(a):(l=g.cachePool,l!==null?(B=Gt._currentValue,l=l.parent!==B?{parent:B,pool:B}:l):l=ap(),g={baseLanes:g.baseLanes|a,cachePool:l}),o.memoizedState=g,o.childLanes=Tc(e,f,a),t.memoizedState=Cc,os(e.child,o)):(Ja(t),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Nc(e,t){return t=bl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bl(e,t){return e=Tn(22,e,null,t),e.lanes=0,e}function Fc(e,t,a){return Ao(t,e.child,null,a),e=Nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),$i(e.return,t,a)}function Bc(e,t,a,o,l,i){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:l,treeForkCount:i}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=l,f.treeForkCount=i)}function vf(e,t,a){var o=t.pendingProps,l=o.revealOrder,i=o.tail;o=o.children;var f=$t.current,g=(f&2)!==0;if(g?(f=f&1|2,t.flags|=128):f&=1,E($t,f),ln(e,t,o,a),o=ut?qr:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gf(e,a,t);else if(e.tag===19)gf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ll(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Bc(t,!1,l,a,i,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Bc(t,!0,a,null,i,o);break;case"together":Bc(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Sa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ao|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ar(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=va(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Js(e)))}function Eg(e,t,a){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),Xa(t,Gt,e.memoizedState.cache),Do();break;case 27:case 5:ne(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:Xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,nc(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(t),t.flags|=128,null):(a&t.child.childLanes)!==0?xf(e,t,a):(Ja(t),e=Sa(e,t,a),e!==null?e.sibling:null);Ja(t);break;case 19:var l=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(ar(e,t,a,!1),o=(a&t.childLanes)!==0),l){if(o)return vf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),E($t,$t.current),o)break;return null;case 22:return t.lanes=0,df(e,t,a,t.pendingProps);case 24:Xa(t,Gt,e.memoizedState.cache)}return Sa(e,t,a)}function bf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Kt=!0;else{if(!Oc(e,a)&&(t.flags&128)===0)return Kt=!1,Eg(e,t,a);Kt=(e.flags&131072)!==0}else Kt=!1,ut&&(t.flags&1048576)!==0&&Zu(t,qr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Bo(t.elementType),t.type=e,typeof e=="function")Mi(e)?(o=zo(e,o),t.tag=1,t=mf(null,t,e,o,a)):(t.tag=0,t=Sc(null,t,e,o,a));else{if(e!=null){var l=e.$$typeof;if(l===K){t.tag=11,t=sf(null,t,e,o,a);break e}else if(l===G){t.tag=14,t=lf(null,t,e,o,a);break e}}throw t=be(e)||e,Error(d(306,t,""))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,l=zo(o,t.pendingProps),mf(e,t,o,l,a);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(d(387));o=t.pendingProps;var i=t.memoizedState;l=i.element,Qi(e,t),Jr(t,o,null,a);var f=t.memoizedState;if(o=f.cache,Xa(t,Gt,o),o!==i.cache&&qi(t,[Gt],a,!0),Wr(),o=f.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=hf(e,t,o,a);break e}else if(o!==l){l=Hn(Error(d(424)),t),Gr(l),t=hf(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ot=Yn(e.firstChild),rn=t,ut=!0,Ya=null,qn=!0,a=cp(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Do(),o===l){t=Sa(e,t,a);break e}ln(e,t,o,a)}t=t.child}return t;case 26:return vl(e,t),e===null?(a=Bm(t.type,null,t.pendingProps,null))?t.memoizedState=a:ut||(a=t.type,e=t.pendingProps,o=Rl(te.current).createElement(a),o[Vt]=t,o[Mt]=e,cn(o,a,e),Bt(o),t.stateNode=o):t.memoizedState=Bm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ne(t),e===null&&ut&&(o=t.stateNode=Tm(t.type,t.pendingProps,te.current),rn=t,qn=!0,l=Ot,io(t.type)?(dd=l,Ot=Yn(o.firstChild)):Ot=l),ln(e,t,t.pendingProps.children,a),vl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ut&&((l=o=Ot)&&(o=cv(o,t.type,t.pendingProps,qn),o!==null?(t.stateNode=o,rn=t,Ot=Yn(o.firstChild),qn=!1,l=!0):l=!1),l||Ka(t)),ne(t),l=t.type,i=t.pendingProps,f=e!==null?e.memoizedProps:null,o=i.children,rd(l,i)?o=null:f!==null&&rd(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=oc(e,t,Sg,null,null,a),bs._currentValue=l),vl(e,t),ln(e,t,o,a),t.child;case 6:return e===null&&ut&&((e=a=Ot)&&(a=dv(a,t.pendingProps,qn),a!==null?(t.stateNode=a,rn=t,Ot=null,e=!0):e=!1),e||Ka(t)),null;case 13:return xf(e,t,a);case 4:return De(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ao(t,null,o,a):ln(e,t,o,a),t.child;case 11:return sf(e,t,t.type,t.pendingProps,a);case 7:return ln(e,t,t.pendingProps,a),t.child;case 8:return ln(e,t,t.pendingProps.children,a),t.child;case 12:return ln(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Xa(t,t.type,o.value),ln(e,t,o.children,a),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,No(t),l=sn(l),o=o(l),t.flags|=1,ln(e,t,o,a),t.child;case 14:return lf(e,t,t.type,t.pendingProps,a);case 15:return cf(e,t,t.type,t.pendingProps,a);case 19:return vf(e,t,a);case 31:return Ag(e,t,a);case 22:return df(e,t,a,t.pendingProps);case 24:return No(t),o=sn(Gt),e===null?(l=Ki(),l===null&&(l=Tt,i=Gi(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:o,cache:l},Zi(t),Xa(t,Gt,l)):((e.lanes&a)!==0&&(Qi(e,t),Jr(t,null,null,a),Wr()),l=e.memoizedState,i=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Xa(t,Gt,o)):(o=i.cache,Xa(t,Gt,o),o!==l.cache&&qi(t,[Gt],a,!0))),ln(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Ca(e){e.flags|=4}function Ac(e,t,a,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Gf())e.flags|=8192;else throw Oo=al,Xi}else e.flags&=-16777217}function kf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rm(t))if(Gf())e.flags|=8192;else throw Oo=al,Xi}function kl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zn():536870912,e.lanes|=t,hr|=t)}function rs(e,t){if(!ut)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function At(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function zg(e,t,a){var o=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(t),null;case 1:return At(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ya(Gt),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(t)?Ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hi())),At(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Ca(t),i!==null?(At(t),kf(t,i)):(At(t),Ac(t,l,null,o,a))):i?i!==e.memoizedState?(Ca(t),At(t),kf(t,i)):(At(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ca(t),At(t),Ac(t,l,e,o,a)),null;case 27:if(Re(t),a=te.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Ca(t);else{if(!o){if(t.stateNode===null)throw Error(d(166));return At(t),null}e=j.current,nr(t)?Wu(t):(e=Tm(l,o,a),t.stateNode=e,Ca(t))}return At(t),null;case 5:if(Re(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Ca(t);else{if(!o){if(t.stateNode===null)throw Error(d(166));return At(t),null}if(i=j.current,nr(t))Wu(t);else{var f=Rl(te.current);switch(i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof o.is=="string"?f.createElement("select",{is:o.is}):f.createElement("select"),o.multiple?i.multiple=!0:o.size&&(i.size=o.size);break;default:i=typeof o.is=="string"?f.createElement(l,{is:o.is}):f.createElement(l)}}i[Vt]=t,i[Mt]=o;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=i;e:switch(cn(i,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ca(t)}}return At(t),Ac(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Ca(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(d(166));if(e=te.current,nr(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,l=rn,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[Vt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||xm(e.nodeValue,a)),e||Ka(t,!0)}else e=Rl(e).createTextNode(o),e[Vt]=t,t.stateNode=e}return At(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=nr(t),a!==null){if(e===null){if(!o)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Vt]=t}else Do(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;At(t),e=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Fn(t),t):(Fn(t),null);if((t.flags&128)!==0)throw Error(d(558))}return At(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=nr(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[Vt]=t}else Do(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;At(t),l=!1}else l=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Fn(t),t):(Fn(t),null)}return Fn(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),i=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(i=o.memoizedState.cachePool.pool),i!==l&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),kl(t,t.updateQueue),At(t),null);case 4:return ae(),e===null&&ed(t.stateNode.containerInfo),At(t),null;case 10:return ya(t.type),At(t),null;case 19:if(F($t),o=t.memoizedState,o===null)return At(t),null;if(l=(t.flags&128)!==0,i=o.rendering,i===null)if(l)rs(o,!1);else{if(Ut!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ll(e),i!==null){for(t.flags|=128,rs(o,!1),e=i.updateQueue,t.updateQueue=e,kl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Yu(a,e),a=a.sibling;return E($t,$t.current&1|2),ut&&ba(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Ge()>Cl&&(t.flags|=128,l=!0,rs(o,!1),t.lanes=4194304)}else{if(!l)if(e=ll(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,kl(t,e),rs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!ut)return At(t),null}else 2*Ge()-o.renderingStartTime>Cl&&a!==536870912&&(t.flags|=128,l=!0,rs(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(e=o.last,e!==null?e.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ge(),e.sibling=null,a=$t.current,E($t,l?a&1|2:a&1),ut&&ba(t,o.treeForkCount),e):(At(t),null);case 22:case 23:return Fn(t),tc(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(At(t),t.subtreeFlags&6&&(t.flags|=8192)):At(t),a=t.updateQueue,a!==null&&kl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&F(Fo),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ya(Gt),At(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Rg(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(Gt),ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Re(t),null;case 31:if(t.memoizedState!==null){if(Fn(t),t.alternate===null)throw Error(d(340));Do()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Fn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Do()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F($t),null;case 4:return ae(),null;case 10:return ya(t.type),null;case 22:case 23:return Fn(t),tc(),e!==null&&F(Fo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(Gt),null;case 25:return null;default:return null}}function yf(e,t){switch(Ii(t),t.tag){case 3:ya(Gt),ae();break;case 26:case 27:case 5:Re(t);break;case 4:ae();break;case 31:t.memoizedState!==null&&Fn(t);break;case 13:Fn(t);break;case 19:F($t);break;case 10:ya(t.type);break;case 22:case 23:Fn(t),tc(),e!==null&&F(Fo);break;case 24:ya(Gt)}}function ss(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){o=void 0;var i=a.create,f=a.inst;o=i(),f.destroy=o}a=a.next}while(a!==l)}}catch(g){bt(t,t.return,g)}}function to(e,t,a){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var i=l.next;o=i;do{if((o.tag&e)===e){var f=o.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,l=t;var B=a,V=g;try{V()}catch(oe){bt(l,B,oe)}}}o=o.next}while(o!==i)}}catch(oe){bt(t,t.return,oe)}}function wf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{up(t,a)}catch(o){bt(e,e.return,o)}}}function jf(e,t,a){a.props=zo(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){bt(e,t,o)}}function ls(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(l){bt(e,t,l)}}function ca(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(l){bt(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){bt(e,t,l)}else a.current=null}function Sf(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(l){bt(e,e.return,l)}}function Ec(e,t,a){try{var o=e.stateNode;av(o,e.type,a,t),o[Mt]=t}catch(l){bt(e,e.return,l)}}function Cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&io(e.type)||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&io(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rc(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=xa));else if(o!==4&&(o===27&&io(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Rc(e,t,a),e=e.sibling;e!==null;)Rc(e,t,a),e=e.sibling}function yl(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&io(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(yl(e,t,a),e=e.sibling;e!==null;)yl(e,t,a),e=e.sibling}function Df(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);cn(t,o,a),t[Vt]=e,t[Mt]=a}catch(i){bt(e,e.return,i)}}var Da=!1,Xt=!1,Mc=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,en=null;function Mg(e,t){if(e=e.containerInfo,ad=Hl,e=Lu(e),Fi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var f=0,g=-1,B=-1,V=0,oe=0,he=e,Y=null;t:for(;;){for(var J;he!==a||l!==0&&he.nodeType!==3||(g=f+l),he!==i||o!==0&&he.nodeType!==3||(B=f+o),he.nodeType===3&&(f+=he.nodeValue.length),(J=he.firstChild)!==null;)Y=he,he=J;for(;;){if(he===e)break t;if(Y===a&&++V===l&&(g=f),Y===i&&++oe===o&&(B=f),(J=he.nextSibling)!==null)break;he=Y,Y=he.parentNode}he=J}a=g===-1||B===-1?null:{start:g,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:e,selectionRange:a},Hl=!1,en=t;en!==null;)if(t=en,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,en=e;else for(;en!==null;){switch(t=en,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,o=a.stateNode;try{var ze=zo(a.type,l);e=o.getSnapshotBeforeUpdate(ze,i),o.__reactInternalSnapshotBeforeUpdate=e}catch(qe){bt(a,a.return,qe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ld(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,en=e;break}en=t.return}}function Nf(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Na(e,a),o&4&&ss(5,a);break;case 1:if(Na(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){bt(a,a.return,f)}else{var l=zo(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){bt(a,a.return,f)}}o&64&&wf(a),o&512&&ls(a,a.return);break;case 3:if(Na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{up(e,t)}catch(f){bt(a,a.return,f)}}break;case 27:t===null&&o&4&&Df(a);case 26:case 5:Na(e,a),t===null&&o&4&&Sf(a),o&512&&ls(a,a.return);break;case 12:Na(e,a);break;case 31:Na(e,a),o&4&&Of(e,a);break;case 13:Na(e,a),o&4&&Af(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qg.bind(null,a),uv(e,a))));break;case 22:if(o=a.memoizedState!==null||Da,!o){t=t!==null&&t.memoizedState!==null||Xt,l=Da;var i=Xt;Da=o,(Xt=t)&&!i?Fa(e,a,(a.subtreeFlags&8772)!==0):Na(e,a),Da=l,Xt=i}break;case 30:break;default:Na(e,a)}}function Ff(e){var t=e.alternate;t!==null&&(e.alternate=null,Ff(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&un(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pt=null,kn=!1;function Ta(e,t,a){for(a=a.child;a!==null;)Bf(e,t,a),a=a.sibling}function Bf(e,t,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:Xt||ca(a,t),Ta(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xt||ca(a,t);var o=Pt,l=kn;io(a.type)&&(Pt=a.stateNode,kn=!1),Ta(e,t,a),xs(a.stateNode),Pt=o,kn=l;break;case 5:Xt||ca(a,t);case 6:if(o=Pt,l=kn,Pt=null,Ta(e,t,a),Pt=o,kn=l,Pt!==null)if(kn)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(a.stateNode)}catch(i){bt(a,t,i)}else try{Pt.removeChild(a.stateNode)}catch(i){bt(a,t,i)}break;case 18:Pt!==null&&(kn?(e=Pt,wm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),jr(e)):wm(Pt,a.stateNode));break;case 4:o=Pt,l=kn,Pt=a.stateNode.containerInfo,kn=!0,Ta(e,t,a),Pt=o,kn=l;break;case 0:case 11:case 14:case 15:to(2,a,t),Xt||to(4,a,t),Ta(e,t,a);break;case 1:Xt||(ca(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&jf(a,t,o)),Ta(e,t,a);break;case 21:Ta(e,t,a);break;case 22:Xt=(o=Xt)||a.memoizedState!==null,Ta(e,t,a),Xt=o;break;default:Ta(e,t,a)}}function Of(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jr(e)}catch(a){bt(t,t.return,a)}}}function Af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jr(e)}catch(a){bt(t,t.return,a)}}function Pg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tf),t;default:throw Error(d(435,e.tag))}}function wl(e,t){var a=Pg(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var l=Gg.bind(null,e,o);o.then(l,l)}})}function yn(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],i=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(io(g.type)){Pt=g.stateNode,kn=!1;break e}break;case 5:Pt=g.stateNode,kn=!1;break e;case 3:case 4:Pt=g.stateNode.containerInfo,kn=!0;break e}g=g.return}if(Pt===null)throw Error(d(160));Bf(i,f,l),Pt=null,kn=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ef(t,e),t=t.sibling}var ta=null;function Ef(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(t,e),wn(e),o&4&&(to(3,e,e.return),ss(3,e),to(5,e,e.return));break;case 1:yn(t,e),wn(e),o&512&&(Xt||a===null||ca(a,a.return)),o&64&&Da&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var l=ta;if(yn(t,e),wn(e),o&512&&(Xt||a===null||ca(a,a.return)),o&4){var i=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Qt]||i[Vt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(o),l.head.insertBefore(i,l.querySelector("head > title"))),cn(i,o,a),i[Vt]=e,Bt(i),o=i;break e;case"link":var f=Em("link","href",l).get(o+(a.href||""));if(f){for(var g=0;g<f.length;g++)if(i=f[g],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(g,1);break t}}i=l.createElement(o),cn(i,o,a),l.head.appendChild(i);break;case"meta":if(f=Em("meta","content",l).get(o+(a.content||""))){for(g=0;g<f.length;g++)if(i=f[g],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(g,1);break t}}i=l.createElement(o),cn(i,o,a),l.head.appendChild(i);break;default:throw Error(d(468,o))}i[Vt]=e,Bt(i),o=i}e.stateNode=o}else zm(l,e.type,e.stateNode);else e.stateNode=Am(l,o,e.memoizedProps);else i!==o?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,o===null?zm(l,e.type,e.stateNode):Am(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,a.memoizedProps)}break;case 27:yn(t,e),wn(e),o&512&&(Xt||a===null||ca(a,a.return)),a!==null&&o&4&&Ec(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yn(t,e),wn(e),o&512&&(Xt||a===null||ca(a,a.return)),e.flags&32){l=e.stateNode;try{Go(l,"")}catch(ze){bt(e,e.return,ze)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,Ec(e,l,a!==null?a.memoizedProps:l)),o&1024&&(Mc=!0);break;case 6:if(yn(t,e),wn(e),o&4){if(e.stateNode===null)throw Error(d(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ze){bt(e,e.return,ze)}}break;case 3:if(Ll=null,l=ta,ta=Ml(t.containerInfo),yn(t,e),ta=l,wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(ze){bt(e,e.return,ze)}Mc&&(Mc=!1,zf(e));break;case 4:o=ta,ta=Ml(e.stateNode.containerInfo),yn(t,e),wn(e),ta=o;break;case 12:yn(t,e),wn(e);break;case 31:yn(t,e),wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 13:yn(t,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sl=Ge()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 22:l=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,V=Da,oe=Xt;if(Da=V||l,Xt=oe||B,yn(t,e),Xt=oe,Da=V,wn(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||B||Da||Xt||Ro(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){B=a=t;try{if(i=B.stateNode,l)f=i.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=B.stateNode;var he=B.memoizedProps.style,Y=he!=null&&he.hasOwnProperty("display")?he.display:null;g.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(ze){bt(B,B.return,ze)}}}else if(t.tag===6){if(a===null){B=t;try{B.stateNode.nodeValue=l?"":B.memoizedProps}catch(ze){bt(B,B.return,ze)}}}else if(t.tag===18){if(a===null){B=t;try{var J=B.stateNode;l?jm(J,!0):jm(B.stateNode,!1)}catch(ze){bt(B,B.return,ze)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wl(e,a))));break;case 19:yn(t,e),wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 30:break;case 21:break;default:yn(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Cf(o)){a=o;break}o=o.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var l=a.stateNode,i=zc(e);yl(e,i,l);break;case 5:var f=a.stateNode;a.flags&32&&(Go(f,""),a.flags&=-33);var g=zc(e);yl(e,g,f);break;case 3:case 4:var B=a.stateNode.containerInfo,V=zc(e);Rc(e,V,B);break;default:throw Error(d(161))}}catch(oe){bt(e,e.return,oe)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nf(e,t.alternate,t),t=t.sibling}function Ro(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:to(4,t,t.return),Ro(t);break;case 1:ca(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&jf(t,t.return,a),Ro(t);break;case 27:xs(t.stateNode);case 26:case 5:ca(t,t.return),Ro(t);break;case 22:t.memoizedState===null&&Ro(t);break;case 30:Ro(t);break;default:Ro(t)}e=e.sibling}}function Fa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,i=t,f=i.flags;switch(i.tag){case 0:case 11:case 15:Fa(l,i,a),ss(4,i);break;case 1:if(Fa(l,i,a),o=i,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(V){bt(o,o.return,V)}if(o=i,l=o.updateQueue,l!==null){var g=o.stateNode;try{var B=l.shared.hiddenCallbacks;if(B!==null)for(l.shared.hiddenCallbacks=null,l=0;l<B.length;l++)dp(B[l],g)}catch(V){bt(o,o.return,V)}}a&&f&64&&wf(i),ls(i,i.return);break;case 27:Df(i);case 26:case 5:Fa(l,i,a),a&&o===null&&f&4&&Sf(i),ls(i,i.return);break;case 12:Fa(l,i,a);break;case 31:Fa(l,i,a),a&&f&4&&Of(l,i);break;case 13:Fa(l,i,a),a&&f&4&&Af(l,i);break;case 22:i.memoizedState===null&&Fa(l,i,a),ls(i,i.return);break;case 30:break;default:Fa(l,i,a)}t=t.sibling}}function Pc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yr(a))}function Lc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yr(e))}function na(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rf(e,t,a,o),t=t.sibling}function Rf(e,t,a,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:na(e,t,a,o),l&2048&&ss(9,t);break;case 1:na(e,t,a,o);break;case 3:na(e,t,a,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yr(e)));break;case 12:if(l&2048){na(e,t,a,o),e=t.stateNode;try{var i=t.memoizedProps,f=i.id,g=i.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){bt(t,t.return,B)}}else na(e,t,a,o);break;case 31:na(e,t,a,o);break;case 13:na(e,t,a,o);break;case 23:break;case 22:i=t.stateNode,f=t.alternate,t.memoizedState!==null?i._visibility&2?na(e,t,a,o):is(e,t):i._visibility&2?na(e,t,a,o):(i._visibility|=2,pr(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Pc(f,t);break;case 24:na(e,t,a,o),l&2048&&Lc(t.alternate,t);break;default:na(e,t,a,o)}}function pr(e,t,a,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,f=t,g=a,B=o,V=f.flags;switch(f.tag){case 0:case 11:case 15:pr(i,f,g,B,l),ss(8,f);break;case 23:break;case 22:var oe=f.stateNode;f.memoizedState!==null?oe._visibility&2?pr(i,f,g,B,l):is(i,f):(oe._visibility|=2,pr(i,f,g,B,l)),l&&V&2048&&Pc(f.alternate,f);break;case 24:pr(i,f,g,B,l),l&&V&2048&&Lc(f.alternate,f);break;default:pr(i,f,g,B,l)}t=t.sibling}}function is(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,l=o.flags;switch(o.tag){case 22:is(a,o),l&2048&&Pc(o.alternate,o);break;case 24:is(a,o),l&2048&&Lc(o.alternate,o);break;default:is(a,o)}t=t.sibling}}var cs=8192;function fr(e,t,a){if(e.subtreeFlags&cs)for(e=e.child;e!==null;)Mf(e,t,a),e=e.sibling}function Mf(e,t,a){switch(e.tag){case 26:fr(e,t,a),e.flags&cs&&e.memoizedState!==null&&jv(a,ta,e.memoizedState,e.memoizedProps);break;case 5:fr(e,t,a);break;case 3:case 4:var o=ta;ta=Ml(e.stateNode.containerInfo),fr(e,t,a),ta=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=cs,cs=16777216,fr(e,t,a),cs=o):fr(e,t,a));break;default:fr(e,t,a)}}function Pf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ds(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];en=o,_f(o,e)}Pf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lf(e),e=e.sibling}function Lf(e){switch(e.tag){case 0:case 11:case 15:ds(e),e.flags&2048&&to(9,e,e.return);break;case 3:ds(e);break;case 12:ds(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):ds(e);break;default:ds(e)}}function jl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];en=o,_f(o,e)}Pf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:to(8,t,t.return),jl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function _f(e,t){for(;en!==null;){var a=en;switch(a.tag){case 0:case 11:case 15:to(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,en=o;else e:for(a=e;en!==null;){o=en;var l=o.sibling,i=o.return;if(Ff(o),o===a){en=null;break e}if(l!==null){l.return=i,en=l;break e}en=i}}}var Lg={getCacheForType:function(e){var t=sn(Gt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return sn(Gt).controller.signal}},_g=typeof WeakMap=="function"?WeakMap:Map,ht=0,Tt=null,rt=null,it=0,vt=0,Bn=null,no=!1,mr=!1,_c=!1,Ba=0,Ut=0,ao=0,Mo=0,Ic=0,On=0,hr=0,us=null,jn=null,Uc=!1,Sl=0,If=0,Cl=1/0,Dl=null,oo=null,Jt=0,ro=null,xr=null,Oa=0,Hc=0,Vc=null,Uf=null,ps=0,$c=null;function An(){return(ht&2)!==0&&it!==0?it&-it:D.T!==null?Zc():Ps()}function Hf(){if(On===0)if((it&536870912)===0||ut){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),On=e}else On=536870912;return e=Nn.current,e!==null&&(e.flags|=32),On}function Sn(e,t,a){(e===Tt&&(vt===2||vt===9)||e.cancelPendingCommit!==null)&&(gr(e,0),so(e,it,On,!1)),_a(e,a),((ht&2)===0||e!==Tt)&&(e===Tt&&((ht&2)===0&&(Mo|=a),Ut===4&&so(e,it,On,!1)),da(e))}function Vf(e,t,a){if((ht&6)!==0)throw Error(d(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ra(e,t),l=o?Hg(e,t):Gc(e,t,!0),i=o;do{if(l===0){mr&&!o&&so(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Ig(a)){l=Gc(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;l=us;var B=g.current.memoizedState.isDehydrated;if(B&&(gr(g,f).flags|=256),f=Gc(g,f,!1),f!==2){if(_c&&!B){g.errorRecoveryDisabledLanes|=i,Mo|=i,l=4;break e}i=jn,jn=l,i!==null&&(jn===null?jn=i:jn.push.apply(jn,i))}l=f}if(i=!1,l!==2)continue}}if(l===1){gr(e,0),so(e,t,0,!0);break}e:{switch(o=e,i=l,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:so(o,t,On,!no);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(l=Sl+300-Ge(),10<l)){if(so(o,t,On,!no),an(o,0,!0)!==0)break e;Oa=t,o.timeoutHandle=km($f.bind(null,o,a,jn,Dl,Uc,t,On,Mo,hr,no,i,"Throttled",-0,0),l);break e}$f(o,a,jn,Dl,Uc,t,On,Mo,hr,no,i,null,-0,0)}}break}while(!0);da(e)}function $f(e,t,a,o,l,i,f,g,B,V,oe,he,Y,J){if(e.timeoutHandle=-1,he=t.subtreeFlags,he&8192||(he&16785408)===16785408){he={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},Mf(t,i,he);var ze=(i&62914560)===i?Sl-Ge():(i&4194048)===i?If-Ge():0;if(ze=Sv(he,ze),ze!==null){Oa=i,e.cancelPendingCommit=ze(Wf.bind(null,e,t,i,a,o,l,f,g,B,oe,he,null,Y,J)),so(e,i,f,!V);return}}Wf(e,t,i,a,o,l,f,g,B)}function Ig(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var l=a[o],i=l.getSnapshot;l=l.value;try{if(!Dn(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function so(e,t,a,o){t&=~Ic,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var i=31-$e(l),f=1<<i;o[i]=-1,l&=~f}a!==0&&xn(e,a,t)}function Tl(){return(ht&6)===0?(fs(0),!1):!0}function qc(){if(rt!==null){if(vt===0)var e=rt.return;else e=rt,ka=To=null,lc(e),lr=null,Xr=0,e=rt;for(;e!==null;)yf(e.alternate,e),e=e.return;rt=null}}function gr(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Oa=0,qc(),Tt=e,rt=a=va(e.current,null),it=t,vt=0,Bn=null,no=!1,mr=ra(e,t),_c=!1,hr=On=Ic=Mo=ao=Ut=0,jn=us=null,Uc=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-$e(o),i=1<<l;t|=e[l],o&=~i}return Ba=t,Ks(),a}function qf(e,t){Je=null,D.H=as,t===sr||t===nl?(t=sp(),vt=3):t===Xi?(t=sp(),vt=4):vt=t===jc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bn=t,rt===null&&(Ut=1,xl(e,Hn(t,e.current)))}function Gf(){var e=Nn.current;return e===null?!0:(it&4194048)===it?Gn===null:(it&62914560)===it||(it&536870912)!==0?e===Gn:!1}function Yf(){var e=D.H;return D.H=as,e===null?as:e}function Kf(){var e=D.A;return D.A=Lg,e}function Nl(){Ut=4,no||(it&4194048)!==it&&Nn.current!==null||(mr=!0),(ao&134217727)===0&&(Mo&134217727)===0||Tt===null||so(Tt,it,On,!1)}function Gc(e,t,a){var o=ht;ht|=2;var l=Yf(),i=Kf();(Tt!==e||it!==t)&&(Dl=null,gr(e,t)),t=!1;var f=Ut;e:do try{if(vt!==0&&rt!==null){var g=rt,B=Bn;switch(vt){case 8:qc(),f=6;break e;case 3:case 2:case 9:case 6:Nn.current===null&&(t=!0);var V=vt;if(vt=0,Bn=null,vr(e,g,B,V),a&&mr){f=0;break e}break;default:V=vt,vt=0,Bn=null,vr(e,g,B,V)}}Ug(),f=Ut;break}catch(oe){qf(e,oe)}while(!0);return t&&e.shellSuspendCounter++,ka=To=null,ht=o,D.H=l,D.A=i,rt===null&&(Tt=null,it=0,Ks()),f}function Ug(){for(;rt!==null;)Xf(rt)}function Hg(e,t){var a=ht;ht|=2;var o=Yf(),l=Kf();Tt!==e||it!==t?(Dl=null,Cl=Ge()+500,gr(e,t)):mr=ra(e,t);e:do try{if(vt!==0&&rt!==null){t=rt;var i=Bn;t:switch(vt){case 1:vt=0,Bn=null,vr(e,t,i,1);break;case 2:case 9:if(op(i)){vt=0,Bn=null,Zf(t);break}t=function(){vt!==2&&vt!==9||Tt!==e||(vt=7),da(e)},i.then(t,t);break e;case 3:vt=7;break e;case 4:vt=5;break e;case 7:op(i)?(vt=0,Bn=null,Zf(t)):(vt=0,Bn=null,vr(e,t,i,7));break;case 5:var f=null;switch(rt.tag){case 26:f=rt.memoizedState;case 5:case 27:var g=rt;if(f?Rm(f):g.stateNode.complete){vt=0,Bn=null;var B=g.sibling;if(B!==null)rt=B;else{var V=g.return;V!==null?(rt=V,Fl(V)):rt=null}break t}}vt=0,Bn=null,vr(e,t,i,5);break;case 6:vt=0,Bn=null,vr(e,t,i,6);break;case 8:qc(),Ut=6;break e;default:throw Error(d(462))}}Vg();break}catch(oe){qf(e,oe)}while(!0);return ka=To=null,D.H=o,D.A=l,ht=a,rt!==null?0:(Tt=null,it=0,Ks(),Ut)}function Vg(){for(;rt!==null&&!We();)Xf(rt)}function Xf(e){var t=bf(e.alternate,e,Ba);e.memoizedProps=e.pendingProps,t===null?Fl(e):rt=t}function Zf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ff(a,t,t.pendingProps,t.type,void 0,it);break;case 11:t=ff(a,t,t.pendingProps,t.type.render,t.ref,it);break;case 5:lc(t);default:yf(a,t),t=rt=Yu(t,Ba),t=bf(a,t,Ba)}e.memoizedProps=e.pendingProps,t===null?Fl(e):rt=t}function vr(e,t,a,o){ka=To=null,lc(t),lr=null,Xr=0;var l=t.return;try{if(Og(e,l,t,a,it)){Ut=1,xl(e,Hn(a,e.current)),rt=null;return}}catch(i){if(l!==null)throw rt=l,i;Ut=1,xl(e,Hn(a,e.current)),rt=null;return}t.flags&32768?(ut||o===1?e=!0:mr||(it&536870912)!==0?e=!1:(no=e=!0,(o===2||o===9||o===3||o===6)&&(o=Nn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qf(t,e)):Fl(t)}function Fl(e){var t=e;do{if((t.flags&32768)!==0){Qf(t,no);return}e=t.return;var a=zg(t.alternate,t,Ba);if(a!==null){rt=a;return}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);Ut===0&&(Ut=5)}function Qf(e,t){do{var a=Rg(e.alternate,e);if(a!==null){a.flags&=32767,rt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){rt=e;return}rt=e=a}while(e!==null);Ut=6,rt=null}function Wf(e,t,a,o,l,i,f,g,B){e.cancelPendingCommit=null;do Bl();while(Jt!==0);if((ht&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=zi,Ia(e,a,i,f,g,B),e===Tt&&(rt=Tt=null,it=0),xr=t,ro=e,Oa=a,Hc=i,Vc=l,Uf=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Yg(tt,function(){return am(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,l=U.p,U.p=2,f=ht,ht|=4;try{Mg(e,t,a)}finally{ht=f,U.p=l,D.T=o}}Jt=1,Jf(),em(),tm()}}function Jf(){if(Jt===1){Jt=0;var e=ro,t=xr,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=U.p;U.p=2;var l=ht;ht|=4;try{Ef(t,e);var i=od,f=Lu(e.containerInfo),g=i.focusedElem,B=i.selectionRange;if(f!==g&&g&&g.ownerDocument&&Pu(g.ownerDocument.documentElement,g)){if(B!==null&&Fi(g)){var V=B.start,oe=B.end;if(oe===void 0&&(oe=V),"selectionStart"in g)g.selectionStart=V,g.selectionEnd=Math.min(oe,g.value.length);else{var he=g.ownerDocument||document,Y=he&&he.defaultView||window;if(Y.getSelection){var J=Y.getSelection(),ze=g.textContent.length,qe=Math.min(B.start,ze),jt=B.end===void 0?qe:Math.min(B.end,ze);!J.extend&&qe>jt&&(f=jt,jt=qe,qe=f);var _=Mu(g,qe),A=Mu(g,jt);if(_&&A&&(J.rangeCount!==1||J.anchorNode!==_.node||J.anchorOffset!==_.offset||J.focusNode!==A.node||J.focusOffset!==A.offset)){var H=he.createRange();H.setStart(_.node,_.offset),J.removeAllRanges(),qe>jt?(J.addRange(H),J.extend(A.node,A.offset)):(H.setEnd(A.node,A.offset),J.addRange(H))}}}}for(he=[],J=g;J=J.parentNode;)J.nodeType===1&&he.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<he.length;g++){var ce=he[g];ce.element.scrollLeft=ce.left,ce.element.scrollTop=ce.top}}Hl=!!ad,od=ad=null}finally{ht=l,U.p=o,D.T=a}}e.current=t,Jt=2}}function em(){if(Jt===2){Jt=0;var e=ro,t=xr,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=U.p;U.p=2;var l=ht;ht|=4;try{Nf(e,t.alternate,t)}finally{ht=l,U.p=o,D.T=a}}Jt=3}}function tm(){if(Jt===4||Jt===3){Jt=0,Ne();var e=ro,t=xr,a=Oa,o=Uf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Jt=5:(Jt=0,xr=ro=null,nm(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(oo=null),zr(a),t=t.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(ue,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=D.T,l=U.p,U.p=2,D.T=null;try{for(var i=e.onRecoverableError,f=0;f<o.length;f++){var g=o[f];i(g.value,{componentStack:g.stack})}}finally{D.T=t,U.p=l}}(Oa&3)!==0&&Bl(),da(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===$c?ps++:(ps=0,$c=e):ps=0,fs(0)}}function nm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yr(t)))}function Bl(){return Jf(),em(),tm(),am()}function am(){if(Jt!==5)return!1;var e=ro,t=Hc;Hc=0;var a=zr(Oa),o=D.T,l=U.p;try{U.p=32>a?32:a,D.T=null,a=Vc,Vc=null;var i=ro,f=Oa;if(Jt=0,xr=ro=null,Oa=0,(ht&6)!==0)throw Error(d(331));var g=ht;if(ht|=4,Lf(i.current),Rf(i,i.current,f,a),ht=g,fs(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(ue,i)}catch{}return!0}finally{U.p=l,D.T=o,nm(e,t)}}function om(e,t,a){t=Hn(a,t),t=wc(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(_a(e,2),da(e))}function bt(e,t,a){if(e.tag===3)om(e,e,a);else for(;t!==null;){if(t.tag===3){om(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(oo===null||!oo.has(o))){e=Hn(a,e),a=of(2),o=Wa(t,a,2),o!==null&&(rf(a,o,t,e),_a(o,2),da(o));break}}t=t.return}}function Yc(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new _g;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(a)||(_c=!0,l.add(a),e=$g.bind(null,e,t,a),t.then(e,e))}function $g(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Tt===e&&(it&a)===a&&(Ut===4||Ut===3&&(it&62914560)===it&&300>Ge()-Sl?(ht&2)===0&&gr(e,0):Ic|=a,hr===it&&(hr=0)),da(e)}function rm(e,t){t===0&&(t=zn()),e=So(e,t),e!==null&&(_a(e,t),da(e))}function qg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),rm(e,a)}function Gg(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(d(314))}o!==null&&o.delete(t),rm(e,a)}function Yg(e,t){return je(e,t)}var Ol=null,br=null,Kc=!1,Al=!1,Xc=!1,lo=0;function da(e){e!==br&&e.next===null&&(br===null?Ol=br=e:br=br.next=e),Al=!0,Kc||(Kc=!0,Xg())}function fs(e,t){if(!Xc&&Al){Xc=!0;do for(var a=!1,o=Ol;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var i=0;else{var f=o.suspendedLanes,g=o.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=l&~(f&~g),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,cm(o,i))}else i=it,i=an(o,o===Tt?i:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(i&3)===0||ra(o,i)||(a=!0,cm(o,i));o=o.next}while(a);Xc=!1}}function Kg(){sm()}function sm(){Al=Kc=!1;var e=0;lo!==0&&rv()&&(e=lo);for(var t=Ge(),a=null,o=Ol;o!==null;){var l=o.next,i=lm(o,t);i===0?(o.next=null,a===null?Ol=l:a.next=l,l===null&&(br=a)):(a=o,(e!==0||(i&3)!==0)&&(Al=!0)),o=l}Jt!==0&&Jt!==5||fs(e),lo!==0&&(lo=0)}function lm(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var f=31-$e(i),g=1<<f,B=l[f];B===-1?((g&a)===0||(g&o)!==0)&&(l[f]=Cn(g,t)):B<=t&&(e.expiredLanes|=g),i&=~g}if(t=Tt,a=it,a=an(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(vt===2||vt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ra(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Le(o),zr(a)){case 2:case 8:a=Ye;break;case 32:a=tt;break;case 268435456:a=Xe;break;default:a=tt}return o=im.bind(null,e),a=je(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function im(e,t){if(Jt!==0&&Jt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bl()&&e.callbackNode!==a)return null;var o=it;return o=an(e,e===Tt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Vf(e,o,t),lm(e,Ge()),e.callbackNode!=null&&e.callbackNode===a?im.bind(null,e):null)}function cm(e,t){if(Bl())return null;Vf(e,t,!0)}function Xg(){lv(function(){(ht&6)!==0?je(Ve,Kg):sm()})}function Zc(){if(lo===0){var e=or;e===0&&(e=dt,dt<<=1,(dt&261888)===0&&(dt=256)),lo=e}return lo}function dm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Is(""+e)}function um(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Zg(e,t,a,o,l){if(t==="submit"&&a&&a.stateNode===l){var i=dm((l[Mt]||null).action),f=o.submitter;f&&(t=(t=f[Mt]||null)?dm(t.formAction):f.getAttribute("formAction"),t!==null&&(i=t,f=null));var g=new $s("action","action",null,o,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(lo!==0){var B=f?um(l,f):new FormData(l);xc(a,{pending:!0,data:B,method:l.method,action:i},null,B)}}else typeof i=="function"&&(g.preventDefault(),B=f?um(l,f):new FormData(l),xc(a,{pending:!0,data:B,method:l.method,action:i},i,B))},currentTarget:l}]})}}for(var Qc=0;Qc<Ei.length;Qc++){var Wc=Ei[Qc],Qg=Wc.toLowerCase(),Wg=Wc[0].toUpperCase()+Wc.slice(1);ea(Qg,"on"+Wg)}ea(Uu,"onAnimationEnd"),ea(Hu,"onAnimationIteration"),ea(Vu,"onAnimationStart"),ea("dblclick","onDoubleClick"),ea("focusin","onFocus"),ea("focusout","onBlur"),ea(mg,"onTransitionRun"),ea(hg,"onTransitionStart"),ea(xg,"onTransitionCancel"),ea($u,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ms));function pm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],l=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var f=o.length-1;0<=f;f--){var g=o[f],B=g.instance,V=g.currentTarget;if(g=g.listener,B!==i&&l.isPropagationStopped())break e;i=g,l.currentTarget=V;try{i(l)}catch(oe){Ys(oe)}l.currentTarget=null,i=B}else for(f=0;f<o.length;f++){if(g=o[f],B=g.instance,V=g.currentTarget,g=g.listener,B!==i&&l.isPropagationStopped())break e;i=g,l.currentTarget=V;try{i(l)}catch(oe){Ys(oe)}l.currentTarget=null,i=B}}}}function st(e,t){var a=t[Be];a===void 0&&(a=t[Be]=new Set);var o=e+"__bubble";a.has(o)||(fm(t,e,2,!1),a.add(o))}function Jc(e,t,a){var o=0;t&&(o|=4),fm(a,e,o,t)}var El="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[El]){e[El]=!0,sa.forEach(function(a){a!=="selectionchange"&&(Jg.has(a)||Jc(a,!1,e),Jc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[El]||(t[El]=!0,Jc("selectionchange",!1,t))}}function fm(e,t,a,o){switch(Hm(t)){case 2:var l=Tv;break;case 8:l=Nv;break;default:l=hd}a=l.bind(null,t,a,e),l=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function td(e,t,a,o,l){var i=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var g=o.stateNode.containerInfo;if(g===l)break;if(f===4)for(f=o.return;f!==null;){var B=f.tag;if((B===3||B===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;g!==null;){if(f=gn(g),f===null)return;if(B=f.tag,B===5||B===6||B===26||B===27){o=i=f;continue e}g=g.parentNode}}o=o.return}gu(function(){var V=i,oe=vi(a),he=[];e:{var Y=qu.get(e);if(Y!==void 0){var J=$s,ze=e;switch(e){case"keypress":if(Hs(a)===0)break e;case"keydown":case"keyup":J=Gx;break;case"focusin":ze="focus",J=Si;break;case"focusout":ze="blur",J=Si;break;case"beforeblur":case"afterblur":J=Si;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Xx;break;case Uu:case Hu:case Vu:J=Px;break;case $u:J=Qx;break;case"scroll":case"scrollend":J=Ax;break;case"wheel":J=Jx;break;case"copy":case"cut":case"paste":J=_x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=wu;break;case"toggle":case"beforetoggle":J=tg}var qe=(t&4)!==0,jt=!qe&&(e==="scroll"||e==="scrollend"),_=qe?Y!==null?Y+"Capture":null:Y;qe=[];for(var A=V,H;A!==null;){var ce=A;if(H=ce.stateNode,ce=ce.tag,ce!==5&&ce!==26&&ce!==27||H===null||_===null||(ce=Mr(A,_),ce!=null&&qe.push(hs(A,ce,H))),jt)break;A=A.return}0<qe.length&&(Y=new J(Y,ze,null,a,oe),he.push({event:Y,listeners:qe}))}}if((t&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",Y&&a!==gi&&(ze=a.relatedTarget||a.fromElement)&&(gn(ze)||ze[L]))break e;if((J||Y)&&(Y=oe.window===oe?oe:(Y=oe.ownerDocument)?Y.defaultView||Y.parentWindow:window,J?(ze=a.relatedTarget||a.toElement,J=V,ze=ze?gn(ze):null,ze!==null&&(jt=p(ze),qe=ze.tag,ze!==jt||qe!==5&&qe!==27&&qe!==6)&&(ze=null)):(J=null,ze=V),J!==ze)){if(qe=ku,ce="onMouseLeave",_="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(qe=wu,ce="onPointerLeave",_="onPointerEnter",A="pointer"),jt=J==null?Y:Mn(J),H=ze==null?Y:Mn(ze),Y=new qe(ce,A+"leave",J,a,oe),Y.target=jt,Y.relatedTarget=H,ce=null,gn(oe)===V&&(qe=new qe(_,A+"enter",ze,a,oe),qe.target=H,qe.relatedTarget=jt,ce=qe),jt=ce,J&&ze)t:{for(qe=ev,_=J,A=ze,H=0,ce=_;ce;ce=qe(ce))H++;ce=0;for(var Ue=A;Ue;Ue=qe(Ue))ce++;for(;0<H-ce;)_=qe(_),H--;for(;0<ce-H;)A=qe(A),ce--;for(;H--;){if(_===A||A!==null&&_===A.alternate){qe=_;break t}_=qe(_),A=qe(A)}qe=null}else qe=null;J!==null&&mm(he,Y,J,qe,!1),ze!==null&&jt!==null&&mm(he,jt,ze,qe,!0)}}e:{if(Y=V?Mn(V):window,J=Y.nodeName&&Y.nodeName.toLowerCase(),J==="select"||J==="input"&&Y.type==="file")var pt=Bu;else if(Nu(Y))if(Ou)pt=ug;else{pt=cg;var Pe=ig}else J=Y.nodeName,!J||J.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?V&&xi(V.elementType)&&(pt=Bu):pt=dg;if(pt&&(pt=pt(e,V))){Fu(he,pt,a,oe);break e}Pe&&Pe(e,Y,V),e==="focusout"&&V&&Y.type==="number"&&V.memoizedProps.value!=null&&hi(Y,"number",Y.value)}switch(Pe=V?Mn(V):window,e){case"focusin":(Nu(Pe)||Pe.contentEditable==="true")&&(Zo=Pe,Bi=V,$r=null);break;case"focusout":$r=Bi=Zo=null;break;case"mousedown":Oi=!0;break;case"contextmenu":case"mouseup":case"dragend":Oi=!1,_u(he,a,oe);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":_u(he,a,oe)}var et;if(Di)e:{switch(e){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Xo?Du(e,a)&&(ct="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(ju&&a.locale!=="ko"&&(Xo||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Xo&&(et=vu()):(qa=oe,yi="value"in qa?qa.value:qa.textContent,Xo=!0)),Pe=zl(V,ct),0<Pe.length&&(ct=new yu(ct,e,null,a,oe),he.push({event:ct,listeners:Pe}),et?ct.data=et:(et=Tu(a),et!==null&&(ct.data=et)))),(et=ag?og(e,a):rg(e,a))&&(ct=zl(V,"onBeforeInput"),0<ct.length&&(Pe=new yu("onBeforeInput","beforeinput",null,a,oe),he.push({event:Pe,listeners:ct}),Pe.data=et)),Zg(he,e,V,a,oe)}pm(he,t)})}function hs(e,t,a){return{instance:e,listener:t,currentTarget:a}}function zl(e,t){for(var a=t+"Capture",o=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Mr(e,a),l!=null&&o.unshift(hs(e,l,i)),l=Mr(e,t),l!=null&&o.push(hs(e,l,i))),e.tag===3)return o;e=e.return}return[]}function ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mm(e,t,a,o,l){for(var i=t._reactName,f=[];a!==null&&a!==o;){var g=a,B=g.alternate,V=g.stateNode;if(g=g.tag,B!==null&&B===o)break;g!==5&&g!==26&&g!==27||V===null||(B=V,l?(V=Mr(a,i),V!=null&&f.unshift(hs(a,V,B))):l||(V=Mr(a,i),V!=null&&f.push(hs(a,V,B)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function hm(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(nv,"")}function xm(e,t){return t=hm(t),hm(e)===t}function wt(e,t,a,o,l,i){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Go(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Go(e,""+o);break;case"className":Ls(e,"class",o);break;case"tabIndex":Ls(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ls(e,a,o);break;case"style":hu(e,o,i);break;case"data":if(t!=="object"){Ls(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Is(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&wt(e,t,"name",l.name,l,null),wt(e,t,"formEncType",l.formEncType,l,null),wt(e,t,"formMethod",l.formMethod,l,null),wt(e,t,"formTarget",l.formTarget,l,null)):(wt(e,t,"encType",l.encType,l,null),wt(e,t,"method",l.method,l,null),wt(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Is(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=xa);break;case"onScroll":o!=null&&st("scroll",e);break;case"onScrollEnd":o!=null&&st("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(d(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Is(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":st("beforetoggle",e),st("toggle",e),$a(e,"popover",o);break;case"xlinkActuate":ha(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ha(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ha(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ha(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ha(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ha(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ha(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ha(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ha(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$a(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bx.get(a)||a,$a(e,a,o))}}function nd(e,t,a,o,l,i){switch(a){case"style":hu(e,o,i);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(d(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Go(e,o):(typeof o=="number"||typeof o=="bigint")&&Go(e,""+o);break;case"onScroll":o!=null&&st("scroll",e);break;case"onScrollEnd":o!=null&&st("scrollend",e);break;case"onClick":o!=null&&(e.onclick=xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ln.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[Mt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof o=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,l);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):$a(e,a,o)}}}function cn(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":st("error",e),st("load",e);var o=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var f=a[i];if(f!=null)switch(i){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:wt(e,t,i,f,a,null)}}l&&wt(e,t,"srcSet",a.srcSet,a,null),o&&wt(e,t,"src",a.src,a,null);return;case"input":st("invalid",e);var g=i=f=l=null,B=null,V=null;for(o in a)if(a.hasOwnProperty(o)){var oe=a[o];if(oe!=null)switch(o){case"name":l=oe;break;case"type":f=oe;break;case"checked":B=oe;break;case"defaultChecked":V=oe;break;case"value":i=oe;break;case"defaultValue":g=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(d(137,t));break;default:wt(e,t,o,oe,a,null)}}uu(e,i,g,B,V,f,l,!1);return;case"select":st("invalid",e),o=f=i=null;for(l in a)if(a.hasOwnProperty(l)&&(g=a[l],g!=null))switch(l){case"value":i=g;break;case"defaultValue":f=g;break;case"multiple":o=g;default:wt(e,t,l,g,a,null)}t=i,a=f,e.multiple=!!o,t!=null?qo(e,!!o,t,!1):a!=null&&qo(e,!!o,a,!0);return;case"textarea":st("invalid",e),i=l=o=null;for(f in a)if(a.hasOwnProperty(f)&&(g=a[f],g!=null))switch(f){case"value":o=g;break;case"defaultValue":l=g;break;case"children":i=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:wt(e,t,f,g,a,null)}fu(e,o,l,i);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":wt(e,t,B,o,a,null));return;case"dialog":st("beforetoggle",e),st("toggle",e),st("cancel",e),st("close",e);break;case"iframe":case"object":st("load",e);break;case"video":case"audio":for(o=0;o<ms.length;o++)st(ms[o],e);break;case"image":st("error",e),st("load",e);break;case"details":st("toggle",e);break;case"embed":case"source":case"link":st("error",e),st("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:wt(e,t,V,o,a,null)}return;default:if(xi(t)){for(oe in a)a.hasOwnProperty(oe)&&(o=a[oe],o!==void 0&&nd(e,t,oe,o,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(o=a[g],o!=null&&wt(e,t,g,o,a,null))}function av(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,f=null,g=null,B=null,V=null,oe=null;for(J in a){var he=a[J];if(a.hasOwnProperty(J)&&he!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":B=he;default:o.hasOwnProperty(J)||wt(e,t,J,null,o,he)}}for(var Y in o){var J=o[Y];if(he=a[Y],o.hasOwnProperty(Y)&&(J!=null||he!=null))switch(Y){case"type":i=J;break;case"name":l=J;break;case"checked":V=J;break;case"defaultChecked":oe=J;break;case"value":f=J;break;case"defaultValue":g=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,t));break;default:J!==he&&wt(e,t,Y,J,o,he)}}mi(e,f,g,B,V,oe,i,l);return;case"select":J=f=g=Y=null;for(i in a)if(B=a[i],a.hasOwnProperty(i)&&B!=null)switch(i){case"value":break;case"multiple":J=B;default:o.hasOwnProperty(i)||wt(e,t,i,null,o,B)}for(l in o)if(i=o[l],B=a[l],o.hasOwnProperty(l)&&(i!=null||B!=null))switch(l){case"value":Y=i;break;case"defaultValue":g=i;break;case"multiple":f=i;default:i!==B&&wt(e,t,l,i,o,B)}t=g,a=f,o=J,Y!=null?qo(e,!!a,Y,!1):!!o!=!!a&&(t!=null?qo(e,!!a,t,!0):qo(e,!!a,a?[]:"",!1));return;case"textarea":J=Y=null;for(g in a)if(l=a[g],a.hasOwnProperty(g)&&l!=null&&!o.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:wt(e,t,g,null,o,l)}for(f in o)if(l=o[f],i=a[f],o.hasOwnProperty(f)&&(l!=null||i!=null))switch(f){case"value":Y=l;break;case"defaultValue":J=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==i&&wt(e,t,f,l,o,i)}pu(e,Y,J);return;case"option":for(var ze in a)Y=a[ze],a.hasOwnProperty(ze)&&Y!=null&&!o.hasOwnProperty(ze)&&(ze==="selected"?e.selected=!1:wt(e,t,ze,null,o,Y));for(B in o)Y=o[B],J=a[B],o.hasOwnProperty(B)&&Y!==J&&(Y!=null||J!=null)&&(B==="selected"?e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol":wt(e,t,B,Y,o,J));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qe in a)Y=a[qe],a.hasOwnProperty(qe)&&Y!=null&&!o.hasOwnProperty(qe)&&wt(e,t,qe,null,o,Y);for(V in o)if(Y=o[V],J=a[V],o.hasOwnProperty(V)&&Y!==J&&(Y!=null||J!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(d(137,t));break;default:wt(e,t,V,Y,o,J)}return;default:if(xi(t)){for(var jt in a)Y=a[jt],a.hasOwnProperty(jt)&&Y!==void 0&&!o.hasOwnProperty(jt)&&nd(e,t,jt,void 0,o,Y);for(oe in o)Y=o[oe],J=a[oe],!o.hasOwnProperty(oe)||Y===J||Y===void 0&&J===void 0||nd(e,t,oe,Y,o,J);return}}for(var _ in a)Y=a[_],a.hasOwnProperty(_)&&Y!=null&&!o.hasOwnProperty(_)&&wt(e,t,_,null,o,Y);for(he in o)Y=o[he],J=a[he],!o.hasOwnProperty(he)||Y===J||Y==null&&J==null||wt(e,t,he,Y,o,J)}function gm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ov(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var l=a[o],i=l.transferSize,f=l.initiatorType,g=l.duration;if(i&&g&&gm(f)){for(f=0,g=l.responseEnd,o+=1;o<a.length;o++){var B=a[o],V=B.startTime;if(V>g)break;var oe=B.transferSize,he=B.initiatorType;oe&&gm(he)&&(B=B.responseEnd,f+=oe*(B<g?1:(g-V)/(B-V)))}if(--o,t+=8*(i+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ad=null,od=null;function Rl(e){return e.nodeType===9?e:e.ownerDocument}function vm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sd=null;function rv(){var e=window.event;return e&&e.type==="popstate"?e===sd?!1:(sd=e,!0):(sd=null,!1)}var km=typeof setTimeout=="function"?setTimeout:void 0,sv=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,lv=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(e){return ym.resolve(null).then(e).catch(iv)}:km;function iv(e){setTimeout(function(){throw e})}function io(e){return e==="head"}function wm(e,t){var a=t,o=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(l),jr(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")xs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xs(a);for(var i=a.firstChild;i;){var f=i.nextSibling,g=i.nodeName;i[Qt]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=f}}else a==="body"&&xs(e.ownerDocument.body);a=l}while(a);jr(t)}function jm(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ld(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),un(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function cv(e,t,a,o){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Qt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function dv(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yn(e.nextSibling),e===null))return null;return e}function Sm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yn(e.nextSibling),e===null))return null;return e}function id(e){return e.data==="$?"||e.data==="$~"}function cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uv(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var dd=null;function Cm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Yn(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Dm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Tm(e,t,a){switch(t=Rl(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function xs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);un(e)}var Kn=new Map,Nm=new Set;function Ml(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=U.d;U.d={f:pv,r:fv,D:mv,C:hv,L:xv,m:gv,X:bv,S:vv,M:kv};function pv(){var e=Aa.f(),t=Tl();return e||t}function fv(e){var t=Wt(e);t!==null&&t.tag===5&&t.type==="form"?$p(t):Aa.r(e)}var kr=typeof document>"u"?null:document;function Fm(e,t,a){var o=kr;if(o&&typeof t=="string"&&t){var l=In(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Nm.has(l)||(Nm.add(l),e={rel:e,crossOrigin:a,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),cn(t,"link",e),Bt(t),o.head.appendChild(t)))}}function mv(e){Aa.D(e),Fm("dns-prefetch",e,null)}function hv(e,t){Aa.C(e,t),Fm("preconnect",e,t)}function xv(e,t,a){Aa.L(e,t,a);var o=kr;if(o&&e&&t){var l='link[rel="preload"][as="'+In(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+In(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+In(a.imageSizes)+'"]')):l+='[href="'+In(e)+'"]';var i=l;switch(t){case"style":i=yr(e);break;case"script":i=wr(e)}Kn.has(i)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Kn.set(i,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(gs(i))||t==="script"&&o.querySelector(vs(i))||(t=o.createElement("link"),cn(t,"link",e),Bt(t),o.head.appendChild(t)))}}function gv(e,t){Aa.m(e,t);var a=kr;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+In(o)+'"][href="'+In(e)+'"]',i=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=wr(e)}if(!Kn.has(i)&&(e=w({rel:"modulepreload",href:e},t),Kn.set(i,e),a.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vs(i)))return}o=a.createElement("link"),cn(o,"link",e),Bt(o),a.head.appendChild(o)}}}function vv(e,t,a){Aa.S(e,t,a);var o=kr;if(o&&e){var l=Pn(o).hoistableStyles,i=yr(e);t=t||"default";var f=l.get(i);if(!f){var g={loading:0,preload:null};if(f=o.querySelector(gs(i)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Kn.get(i))&&ud(e,a);var B=f=o.createElement("link");Bt(B),cn(B,"link",e),B._p=new Promise(function(V,oe){B.onload=V,B.onerror=oe}),B.addEventListener("load",function(){g.loading|=1}),B.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Pl(f,t,o)}f={type:"stylesheet",instance:f,count:1,state:g},l.set(i,f)}}}function bv(e,t){Aa.X(e,t);var a=kr;if(a&&e){var o=Pn(a).hoistableScripts,l=wr(e),i=o.get(l);i||(i=a.querySelector(vs(l)),i||(e=w({src:e,async:!0},t),(t=Kn.get(l))&&pd(e,t),i=a.createElement("script"),Bt(i),cn(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},o.set(l,i))}}function kv(e,t){Aa.M(e,t);var a=kr;if(a&&e){var o=Pn(a).hoistableScripts,l=wr(e),i=o.get(l);i||(i=a.querySelector(vs(l)),i||(e=w({src:e,async:!0,type:"module"},t),(t=Kn.get(l))&&pd(e,t),i=a.createElement("script"),Bt(i),cn(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},o.set(l,i))}}function Bm(e,t,a,o){var l=(l=te.current)?Ml(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=yr(a.href),a=Pn(l).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var i=Pn(l).hoistableStyles,f=i.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,f),(i=l.querySelector(gs(e)))&&!i._p&&(f.instance=i,f.state.loading=5),Kn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Kn.set(e,a),i||yv(l,e,a,f.state))),t&&o===null)throw Error(d(528,""));return f}if(t&&o!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wr(a),a=Pn(l).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function yr(e){return'href="'+In(e)+'"'}function gs(e){return'link[rel="stylesheet"]['+e+"]"}function Om(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function yv(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),cn(t,"link",a),Bt(t),e.head.appendChild(t))}function wr(e){return'[src="'+In(e)+'"]'}function vs(e){return"script[async]"+e}function Am(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+In(a.href)+'"]');if(o)return t.instance=o,Bt(o),o;var l=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Bt(o),cn(o,"style",l),Pl(o,a.precedence,e),t.instance=o;case"stylesheet":l=yr(a.href);var i=e.querySelector(gs(l));if(i)return t.state.loading|=4,t.instance=i,Bt(i),i;o=Om(a),(l=Kn.get(l))&&ud(o,l),i=(e.ownerDocument||e).createElement("link"),Bt(i);var f=i;return f._p=new Promise(function(g,B){f.onload=g,f.onerror=B}),cn(i,"link",o),t.state.loading|=4,Pl(i,a.precedence,e),t.instance=i;case"script":return i=wr(a.src),(l=e.querySelector(vs(i)))?(t.instance=l,Bt(l),l):(o=a,(l=Kn.get(i))&&(o=w({},a),pd(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),Bt(l),cn(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Pl(o,a.precedence,e));return t.instance}function Pl(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,i=l,f=0;f<o.length;f++){var g=o[f];if(g.dataset.precedence===t)i=g;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ud(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ll=null;function Em(e,t,a){if(Ll===null){var o=new Map,l=Ll=new Map;l.set(a,o)}else l=Ll,o=l.get(a),o||(o=new Map,l.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[Qt]||i[Vt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var f=i.getAttribute(t)||"";f=e+f;var g=o.get(f);g?g.push(i):o.set(f,[i])}}return o}function zm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function wv(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jv(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=yr(o.href),i=t.querySelector(gs(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_l.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Bt(i);return}i=t.ownerDocument||t,o=Om(o),(l=Kn.get(l))&&ud(o,l),i=i.createElement("link"),Bt(i);var f=i;f._p=new Promise(function(g,B){f.onload=g,f.onerror=B}),cn(i,"link",o),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_l.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var fd=0;function Sv(e,t){return e.stylesheets&&e.count===0&&Ul(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ul(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&fd===0&&(fd=62500*ov());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ul(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>fd?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function _l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ul(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function Ul(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,t.forEach(Cv,e),Il=null,_l.call(e))}function Cv(e,t){if(!(t.state.loading&4)){var a=Il.get(e);if(a)var o=a.get(null);else{a=new Map,Il.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var f=l[i];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),o=f)}o&&a.set(null,o)}l=t.instance,f=l.getAttribute("data-precedence"),i=a.get(f)||o,i===o&&a.set(null,l),a.set(f,l),this.count++,o=_l.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var bs={$$typeof:P,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Dv(e,t,a,o,l,i,f,g,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.hiddenUpdates=Vo(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Mm(e,t,a,o,l,i,f,g,B,V,oe,he){return e=new Dv(e,t,a,f,B,V,oe,he,g),t=1,i===!0&&(t|=24),i=Tn(3,null,null,t),e.current=i,i.stateNode=e,t=Gi(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:o,isDehydrated:a,cache:t},Zi(i),e}function Pm(e){return e?(e=Jo,e):Jo}function Lm(e,t,a,o,l,i){l=Pm(l),o.context===null?o.context=l:o.pendingContext=l,o=Qa(t),o.payload={element:a},i=i===void 0?null:i,i!==null&&(o.callback=i),a=Wa(e,o,t),a!==null&&(Sn(a,e,t),Qr(a,e,t))}function _m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function md(e,t){_m(e,t),(e=e.alternate)&&_m(e,t)}function Im(e){if(e.tag===13||e.tag===31){var t=So(e,67108864);t!==null&&Sn(t,e,67108864),md(e,67108864)}}function Um(e){if(e.tag===13||e.tag===31){var t=An();t=Ua(t);var a=So(e,t);a!==null&&Sn(a,e,t),md(e,t)}}var Hl=!0;function Tv(e,t,a,o){var l=D.T;D.T=null;var i=U.p;try{U.p=2,hd(e,t,a,o)}finally{U.p=i,D.T=l}}function Nv(e,t,a,o){var l=D.T;D.T=null;var i=U.p;try{U.p=8,hd(e,t,a,o)}finally{U.p=i,D.T=l}}function hd(e,t,a,o){if(Hl){var l=xd(o);if(l===null)td(e,t,o,Vl,a),Vm(e,o);else if(Bv(l,e,t,a,o))o.stopPropagation();else if(Vm(e,o),t&4&&-1<Fv.indexOf(e)){for(;l!==null;){var i=Wt(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var f=hn(i.pendingLanes);if(f!==0){var g=i;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var B=1<<31-$e(f);g.entanglements[1]|=B,f&=~B}da(i),(ht&6)===0&&(Cl=Ge()+500,fs(0))}}break;case 31:case 13:g=So(i,2),g!==null&&Sn(g,i,2),Tl(),md(i,2)}if(i=xd(o),i===null&&td(e,t,o,Vl,a),i===l)break;l=i}l!==null&&o.stopPropagation()}else td(e,t,o,null,a)}}function xd(e){return e=vi(e),gd(e)}var Vl=null;function gd(e){if(Vl=null,e=gn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vl=e,null}function Hm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case Ve:return 2;case Ye:return 8;case tt:case Ie:return 32;case Xe:return 268435456;default:return 32}default:return 32}}var vd=!1,co=null,uo=null,po=null,ks=new Map,ys=new Map,fo=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vm(e,t){switch(e){case"focusin":case"focusout":co=null;break;case"dragenter":case"dragleave":uo=null;break;case"mouseover":case"mouseout":po=null;break;case"pointerover":case"pointerout":ks.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ys.delete(t.pointerId)}}function ws(e,t,a,o,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Wt(t),t!==null&&Im(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Bv(e,t,a,o,l){switch(t){case"focusin":return co=ws(co,e,t,a,o,l),!0;case"dragenter":return uo=ws(uo,e,t,a,o,l),!0;case"mouseover":return po=ws(po,e,t,a,o,l),!0;case"pointerover":var i=l.pointerId;return ks.set(i,ws(ks.get(i)||null,e,t,a,o,l)),!0;case"gotpointercapture":return i=l.pointerId,ys.set(i,ws(ys.get(i)||null,e,t,a,o,l)),!0}return!1}function $m(e){var t=gn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,ko(e.priority,function(){Um(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,ko(e.priority,function(){Um(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=xd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gi=o,a.target.dispatchEvent(o),gi=null}else return t=Wt(a),t!==null&&Im(t),e.blockedOn=a,!1;t.shift()}return!0}function qm(e,t,a){$l(e)&&a.delete(t)}function Ov(){vd=!1,co!==null&&$l(co)&&(co=null),uo!==null&&$l(uo)&&(uo=null),po!==null&&$l(po)&&(po=null),ks.forEach(qm),ys.forEach(qm)}function ql(e,t){e.blockedOn===t&&(e.blockedOn=null,vd||(vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ov)))}var Gl=null;function Gm(e){Gl!==e&&(Gl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Gl===e&&(Gl=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var i=Wt(a);i!==null&&(e.splice(t,3),t-=3,xc(i,{pending:!0,data:l,method:a.method,action:o},o,l))}}))}function jr(e){function t(B){return ql(B,e)}co!==null&&ql(co,e),uo!==null&&ql(uo,e),po!==null&&ql(po,e),ks.forEach(t),ys.forEach(t);for(var a=0;a<fo.length;a++){var o=fo[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<fo.length&&(a=fo[0],a.blockedOn===null);)$m(a),a.blockedOn===null&&fo.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var l=a[o],i=a[o+1],f=l[Mt]||null;if(typeof i=="function")f||Gm(a);else if(f){var g=null;if(i&&i.hasAttribute("formAction")){if(l=i,f=i[Mt]||null)g=f.formAction;else if(gd(l)!==null)continue}else g=f.action;typeof g=="function"?a[o+1]=g:(a.splice(o,3),o-=3),Gm(a)}}}function Ym(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function bd(e){this._internalRoot=e}Yl.prototype.render=bd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,o=An();Lm(a,o,e,t,null,null)},Yl.prototype.unmount=bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lm(e.current,2,null,e,null,null),Tl(),t[L]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ps();e={blockedOn:null,target:e,priority:t};for(var a=0;a<fo.length&&t!==0&&t<fo[a].priority;a++);fo.splice(a,0,e),a===0&&$m(e)}};var Km=s.version;if(Km!=="19.2.4")throw Error(d(527,Km,"19.2.4"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=v(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Av={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{ue=Kl.inject(Av),ye=Kl}catch{}}return Ss.createRoot=function(e,t){if(!u(e))throw Error(d(299));var a=!1,o="",l=ef,i=tf,f=nf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Mm(e,1,!1,null,null,a,o,null,l,i,f,Ym),e[L]=t.current,ed(e),new bd(t)},Ss.hydrateRoot=function(e,t,a){if(!u(e))throw Error(d(299));var o=!1,l="",i=ef,f=tf,g=nf,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),t=Mm(e,1,!0,t,a??null,o,l,B,i,f,g,Ym),t.context=Pm(null),a=t.current,o=An(),o=Ua(o),l=Qa(o),l.callback=null,Wa(a,l,o),a=o,t.current.lanes=a,_a(t,a),da(t),e[L]=t.current,ed(e),new Yl(t)},Ss.version="19.2.4",Ss}var oh;function Hv(){if(oh)return wd.exports;oh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),wd.exports=Uv(),wd.exports}var Vv=Hv();var rh="popstate";function sh(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function $v(r={}){function s(d,u){let p=u.state?.masked,{pathname:h,search:y,hash:x}=p||d.location;return qd("",{pathname:h,search:y,hash:x},u.state&&u.state.usr||null,u.state&&u.state.key||"default",p?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function c(d,u){return typeof u=="string"?u:Es(u)}return Gv(s,c,null,r)}function _t(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function ma(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function qv(){return Math.random().toString(36).substring(2,10)}function lh(r,s){return{usr:r.state,key:r.key,idx:s,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function qd(r,s,c=null,d,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?Fr(s):s,state:c,key:s&&s.key||d||qv(),unstable_mask:u}}function Es({pathname:r="/",search:s="",hash:c=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function Fr(r){let s={};if(r){let c=r.indexOf("#");c>=0&&(s.hash=r.substring(c),r=r.substring(0,c));let d=r.indexOf("?");d>=0&&(s.search=r.substring(d),r=r.substring(0,d)),r&&(s.pathname=r)}return s}function Gv(r,s,c,d={}){let{window:u=document.defaultView,v5Compat:p=!1}=d,h=u.history,y="POP",x=null,v=b();v==null&&(v=0,h.replaceState({...h.state,idx:v},""));function b(){return(h.state||{idx:null}).idx}function w(){y="POP";let N=b(),M=N==null?null:N-v;v=N,x&&x({action:y,location:T.location,delta:M})}function S(N,M){y="PUSH";let Z=sh(N)?N:qd(T.location,N,M);v=b()+1;let P=lh(Z,v),K=T.createHref(Z.unstable_mask||Z);try{h.pushState(P,"",K)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;u.location.assign(K)}p&&x&&x({action:y,location:T.location,delta:1})}function z(N,M){y="REPLACE";let Z=sh(N)?N:qd(T.location,N,M);v=b();let P=lh(Z,v),K=T.createHref(Z.unstable_mask||Z);h.replaceState(P,"",K),p&&x&&x({action:y,location:T.location,delta:0})}function C(N){return Yv(N)}let T={get action(){return y},get location(){return r(u,h)},listen(N){if(x)throw new Error("A history only accepts one active listener");return u.addEventListener(rh,w),x=N,()=>{u.removeEventListener(rh,w),x=null}},createHref(N){return s(u,N)},createURL:C,encodeLocation(N){let M=C(N);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:S,replace:z,go(N){return h.go(N)}};return T}function Yv(r,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),_t(c,"No window.location.(origin|href) available to create URL");let d=typeof r=="string"?r:Es(r);return d=d.replace(/ $/,"%20"),!s&&d.startsWith("//")&&(d=c+d),new URL(d,c)}function _h(r,s,c="/"){return Kv(r,s,c,!1)}function Kv(r,s,c,d){let u=typeof s=="string"?Fr(s):s,p=Ra(u.pathname||"/",c);if(p==null)return null;let h=Ih(r);Xv(h);let y=null;for(let x=0;y==null&&x<h.length;++x){let v=sb(p);y=ob(h[x],v,d)}return y}function Ih(r,s=[],c=[],d="",u=!1){let p=(h,y,x=u,v)=>{let b={relativePath:v===void 0?h.path||"":v,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(d)&&x)return;_t(b.relativePath.startsWith(d),`Absolute route path "${b.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(d.length)}let w=pa([d,b.relativePath]),S=c.concat(b);h.children&&h.children.length>0&&(_t(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Ih(h.children,s,S,w,x)),!(h.path==null&&!h.index)&&s.push({path:w,score:nb(w,h.index),routesMeta:S})};return r.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))p(h,y);else for(let x of Uh(h.path))p(h,y,!0,x)}),s}function Uh(r){let s=r.split("/");if(s.length===0)return[];let[c,...d]=s,u=c.endsWith("?"),p=c.replace(/\?$/,"");if(d.length===0)return u?[p,""]:[p];let h=Uh(d.join("/")),y=[];return y.push(...h.map(x=>x===""?p:[p,x].join("/"))),u&&y.push(...h),y.map(x=>r.startsWith("/")&&x===""?"/":x)}function Xv(r){r.sort((s,c)=>s.score!==c.score?c.score-s.score:ab(s.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}var Zv=/^:[\w-]+$/,Qv=3,Wv=2,Jv=1,eb=10,tb=-2,ih=r=>r==="*";function nb(r,s){let c=r.split("/"),d=c.length;return c.some(ih)&&(d+=tb),s&&(d+=Wv),c.filter(u=>!ih(u)).reduce((u,p)=>u+(Zv.test(p)?Qv:p===""?Jv:eb),d)}function ab(r,s){return r.length===s.length&&r.slice(0,-1).every((d,u)=>d===s[u])?r[r.length-1]-s[s.length-1]:0}function ob(r,s,c=!1){let{routesMeta:d}=r,u={},p="/",h=[];for(let y=0;y<d.length;++y){let x=d[y],v=y===d.length-1,b=p==="/"?s:s.slice(p.length)||"/",w=si({path:x.relativePath,caseSensitive:x.caseSensitive,end:v},b),S=x.route;if(!w&&v&&c&&!d[d.length-1].route.index&&(w=si({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},b)),!w)return null;Object.assign(u,w.params),h.push({params:u,pathname:pa([p,w.pathname]),pathnameBase:db(pa([p,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(p=pa([p,w.pathnameBase]))}return h}function si(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[c,d]=rb(r.path,r.caseSensitive,r.end),u=s.match(c);if(!u)return null;let p=u[0],h=p.replace(/(.)\/+$/,"$1"),y=u.slice(1);return{params:d.reduce((v,{paramName:b,isOptional:w},S)=>{if(b==="*"){let C=y[S]||"";h=p.slice(0,p.length-C.length).replace(/(.)\/+$/,"$1")}const z=y[S];return w&&!z?v[b]=void 0:v[b]=(z||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:h,pattern:r}}function rb(r,s=!1,c=!0){ma(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let d=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,y,x,v,b)=>{if(d.push({paramName:y,isOptional:x!=null}),x){let w=b.charAt(v+h.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(d.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,s?void 0:"i"),d]}function sb(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return ma(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function Ra(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,d=r.charAt(c);return d&&d!=="/"?null:r.slice(c)||"/"}var lb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ib(r,s="/"){let{pathname:c,search:d="",hash:u=""}=typeof r=="string"?Fr(r):r,p;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?p=ch(c.substring(1),"/"):p=ch(c,s)):p=s,{pathname:p,search:ub(d),hash:pb(u)}}function ch(r,s){let c=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?c.length>1&&c.pop():u!=="."&&c.push(u)}),c.length>1?c.join("/"):"/"}function Dd(r,s,c,d){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cb(r){return r.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function Hh(r){let s=cb(r);return s.map((c,d)=>d===s.length-1?c.pathname:c.pathnameBase)}function eu(r,s,c,d=!1){let u;typeof r=="string"?u=Fr(r):(u={...r},_t(!u.pathname||!u.pathname.includes("?"),Dd("?","pathname","search",u)),_t(!u.pathname||!u.pathname.includes("#"),Dd("#","pathname","hash",u)),_t(!u.search||!u.search.includes("#"),Dd("#","search","hash",u)));let p=r===""||u.pathname==="",h=p?"/":u.pathname,y;if(h==null)y=c;else{let w=s.length-1;if(!d&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),w-=1;u.pathname=S.join("/")}y=w>=0?s[w]:"/"}let x=ib(u,y),v=h&&h!=="/"&&h.endsWith("/"),b=(p||h===".")&&c.endsWith("/");return!x.pathname.endsWith("/")&&(v||b)&&(x.pathname+="/"),x}var pa=r=>r.join("/").replace(/\/\/+/g,"/"),db=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ub=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,pb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,fb=class{constructor(r,s,c,d=!1){this.status=r,this.statusText=s||"",this.internal=d,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function mb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function hb(r){return r.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Vh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $h(r,s){let c=r;if(typeof c!="string"||!lb.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let d=c,u=!1;if(Vh)try{let p=new URL(window.location.href),h=c.startsWith("//")?new URL(p.protocol+c):new URL(c),y=Ra(h.pathname,s);h.origin===p.origin&&y!=null?c=y+h.search+h.hash:u=!0}catch{ma(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:u,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var qh=["POST","PUT","PATCH","DELETE"];new Set(qh);var xb=["GET",...qh];new Set(xb);var Br=m.createContext(null);Br.displayName="DataRouter";var ii=m.createContext(null);ii.displayName="DataRouterState";var gb=m.createContext(!1),Gh=m.createContext({isTransitioning:!1});Gh.displayName="ViewTransition";var vb=m.createContext(new Map);vb.displayName="Fetchers";var bb=m.createContext(null);bb.displayName="Await";var Wn=m.createContext(null);Wn.displayName="Navigation";var zs=m.createContext(null);zs.displayName="Location";var Ma=m.createContext({outlet:null,matches:[],isDataRoute:!1});Ma.displayName="Route";var tu=m.createContext(null);tu.displayName="RouteError";var Yh="REACT_ROUTER_ERROR",kb="REDIRECT",yb="ROUTE_ERROR_RESPONSE";function wb(r){if(r.startsWith(`${Yh}:${kb}:{`))try{let s=JSON.parse(r.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function jb(r){if(r.startsWith(`${Yh}:${yb}:{`))try{let s=JSON.parse(r.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new fb(s.status,s.statusText,s.data)}catch{}}function Sb(r,{relative:s}={}){_t(Rs(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:d}=m.useContext(Wn),{hash:u,pathname:p,search:h}=Ms(r,{relative:s}),y=p;return c!=="/"&&(y=p==="/"?c:pa([c,p])),d.createHref({pathname:y,search:h,hash:u})}function Rs(){return m.useContext(zs)!=null}function vo(){return _t(Rs(),"useLocation() may be used only in the context of a <Router> component."),m.useContext(zs).location}var Kh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xh(r){m.useContext(Wn).static||m.useLayoutEffect(r)}function Cb(){let{isDataRoute:r}=m.useContext(Ma);return r?Lb():Db()}function Db(){_t(Rs(),"useNavigate() may be used only in the context of a <Router> component.");let r=m.useContext(Br),{basename:s,navigator:c}=m.useContext(Wn),{matches:d}=m.useContext(Ma),{pathname:u}=vo(),p=JSON.stringify(Hh(d)),h=m.useRef(!1);return Xh(()=>{h.current=!0}),m.useCallback((x,v={})=>{if(ma(h.current,Kh),!h.current)return;if(typeof x=="number"){c.go(x);return}let b=eu(x,JSON.parse(p),u,v.relative==="path");r==null&&s!=="/"&&(b.pathname=b.pathname==="/"?s:pa([s,b.pathname])),(v.replace?c.replace:c.push)(b,v.state,v)},[s,c,p,u,r])}m.createContext(null);function Ms(r,{relative:s}={}){let{matches:c}=m.useContext(Ma),{pathname:d}=vo(),u=JSON.stringify(Hh(c));return m.useMemo(()=>eu(r,JSON.parse(u),d,s==="path"),[r,u,d,s])}function Tb(r,s){return Zh(r,s)}function Zh(r,s,c){_t(Rs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=m.useContext(Wn),{matches:u}=m.useContext(Ma),p=u[u.length-1],h=p?p.params:{},y=p?p.pathname:"/",x=p?p.pathnameBase:"/",v=p&&p.route;{let N=v&&v.path||"";Wh(y,!v||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let b=vo(),w;if(s){let N=typeof s=="string"?Fr(s):s;_t(x==="/"||N.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${N.pathname}" was given in the \`location\` prop.`),w=N}else w=b;let S=w.pathname||"/",z=S;if(x!=="/"){let N=x.replace(/^\//,"").split("/");z="/"+S.replace(/^\//,"").split("/").slice(N.length).join("/")}let C=_h(r,{pathname:z});ma(v||C!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),ma(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=Ab(C&&C.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:pa([x,d.encodeLocation?d.encodeLocation(N.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?x:pa([x,d.encodeLocation?d.encodeLocation(N.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),u,c);return s&&T?m.createElement(zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},T):T}function Nb(){let r=Pb(),s=mb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),c=r instanceof Error?r.stack:null,d="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:d},p={padding:"2px 4px",backgroundColor:d},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=m.createElement(m.Fragment,null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:p},"ErrorBoundary")," or"," ",m.createElement("code",{style:p},"errorElement")," prop on your route.")),m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},s),c?m.createElement("pre",{style:u},c):null,h)}var Fb=m.createElement(Nb,null),Qh=class extends m.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){this.props.onError?this.props.onError(r,s):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const c=jb(r.digest);c&&(r=c)}let s=r!==void 0?m.createElement(Ma.Provider,{value:this.props.routeContext},m.createElement(tu.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?m.createElement(Bb,{error:r},s):s}};Qh.contextType=gb;var Td=new WeakMap;function Bb({children:r,error:s}){let{basename:c}=m.useContext(Wn);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let d=wb(s.digest);if(d){let u=Td.get(s);if(u)throw u;let p=$h(d.location,c);if(Vh&&!Td.get(s))if(p.isExternal||d.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:d.replace}));throw Td.set(s,h),h}return m.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function Ob({routeContext:r,match:s,children:c}){let d=m.useContext(Br);return d&&d.static&&d.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=s.route.id),m.createElement(Ma.Provider,{value:r},c)}function Ab(r,s=[],c){let d=c?.state;if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let u=r,p=d?.errors;if(p!=null){let b=u.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);_t(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),u=u.slice(0,Math.min(u.length,b+1))}let h=!1,y=-1;if(c&&d){h=d.renderFallback;for(let b=0;b<u.length;b++){let w=u[b];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=b),w.route.id){let{loaderData:S,errors:z}=d,C=w.route.loader&&!S.hasOwnProperty(w.route.id)&&(!z||z[w.route.id]===void 0);if(w.route.lazy||C){c.isStatic&&(h=!0),y>=0?u=u.slice(0,y+1):u=[u[0]];break}}}}let x=c?.onError,v=d&&x?(b,w)=>{x(b,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:hb(d.matches),errorInfo:w})}:void 0;return u.reduceRight((b,w,S)=>{let z,C=!1,T=null,N=null;d&&(z=p&&w.route.id?p[w.route.id]:void 0,T=w.route.errorElement||Fb,h&&(y<0&&S===0?(Wh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,N=null):y===S&&(C=!0,N=w.route.hydrateFallbackElement||null)));let M=s.concat(u.slice(0,S+1)),Z=()=>{let P;return z?P=T:C?P=N:w.route.Component?P=m.createElement(w.route.Component,null):w.route.element?P=w.route.element:P=b,m.createElement(Ob,{match:w,routeContext:{outlet:b,matches:M,isDataRoute:d!=null},children:P})};return d&&(w.route.ErrorBoundary||w.route.errorElement||S===0)?m.createElement(Qh,{location:d.location,revalidation:d.revalidation,component:T,error:z,children:Z(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:v}):Z()},null)}function nu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eb(r){let s=m.useContext(Br);return _t(s,nu(r)),s}function zb(r){let s=m.useContext(ii);return _t(s,nu(r)),s}function Rb(r){let s=m.useContext(Ma);return _t(s,nu(r)),s}function au(r){let s=Rb(r),c=s.matches[s.matches.length-1];return _t(c.route.id,`${r} can only be used on routes that contain a unique "id"`),c.route.id}function Mb(){return au("useRouteId")}function Pb(){let r=m.useContext(tu),s=zb("useRouteError"),c=au("useRouteError");return r!==void 0?r:s.errors?.[c]}function Lb(){let{router:r}=Eb("useNavigate"),s=au("useNavigate"),c=m.useRef(!1);return Xh(()=>{c.current=!0}),m.useCallback(async(u,p={})=>{ma(c.current,Kh),c.current&&(typeof u=="number"?await r.navigate(u):await r.navigate(u,{fromRouteId:s,...p}))},[r,s])}var dh={};function Wh(r,s,c){!s&&!dh[r]&&(dh[r]=!0,ma(!1,c))}m.memo(_b);function _b({routes:r,future:s,state:c,isStatic:d,onError:u}){return Zh(r,void 0,{state:c,isStatic:d,onError:u})}function Jh(r){_t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ib({basename:r="/",children:s=null,location:c,navigationType:d="POP",navigator:u,static:p=!1,unstable_useTransitions:h}){_t(!Rs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=r.replace(/^\/*/,"/"),x=m.useMemo(()=>({basename:y,navigator:u,static:p,unstable_useTransitions:h,future:{}}),[y,u,p,h]);typeof c=="string"&&(c=Fr(c));let{pathname:v="/",search:b="",hash:w="",state:S=null,key:z="default",unstable_mask:C}=c,T=m.useMemo(()=>{let N=Ra(v,y);return N==null?null:{location:{pathname:N,search:b,hash:w,state:S,key:z,unstable_mask:C},navigationType:d}},[y,v,b,w,S,z,d,C]);return ma(T!=null,`<Router basename="${y}"> is not able to match the URL "${v}${b}${w}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:m.createElement(Wn.Provider,{value:x},m.createElement(zs.Provider,{children:s,value:T}))}function Ub({children:r,location:s}){return Tb(Gd(r),s)}function Gd(r,s=[]){let c=[];return m.Children.forEach(r,(d,u)=>{if(!m.isValidElement(d))return;let p=[...s,u];if(d.type===m.Fragment){c.push.apply(c,Gd(d.props.children,p));return}_t(d.type===Jh,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_t(!d.props.index||!d.props.children,"An index route cannot have child routes.");let h={id:d.props.id||p.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(h.children=Gd(d.props.children,p)),c.push(h)}),c}var oi="get",ri="application/x-www-form-urlencoded";function ci(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Hb(r){return ci(r)&&r.tagName.toLowerCase()==="button"}function Vb(r){return ci(r)&&r.tagName.toLowerCase()==="form"}function $b(r){return ci(r)&&r.tagName.toLowerCase()==="input"}function qb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Gb(r,s){return r.button===0&&(!s||s==="_self")&&!qb(r)}var Xl=null;function Yb(){if(Xl===null)try{new FormData(document.createElement("form"),0),Xl=!1}catch{Xl=!0}return Xl}var Kb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nd(r){return r!=null&&!Kb.has(r)?(ma(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ri}"`),null):r}function Xb(r,s){let c,d,u,p,h;if(Vb(r)){let y=r.getAttribute("action");d=y?Ra(y,s):null,c=r.getAttribute("method")||oi,u=Nd(r.getAttribute("enctype"))||ri,p=new FormData(r)}else if(Hb(r)||$b(r)&&(r.type==="submit"||r.type==="image")){let y=r.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||y.getAttribute("action");if(d=x?Ra(x,s):null,c=r.getAttribute("formmethod")||y.getAttribute("method")||oi,u=Nd(r.getAttribute("formenctype"))||Nd(y.getAttribute("enctype"))||ri,p=new FormData(y,r),!Yb()){let{name:v,type:b,value:w}=r;if(b==="image"){let S=v?`${v}.`:"";p.append(`${S}x`,"0"),p.append(`${S}y`,"0")}else v&&p.append(v,w)}}else{if(ci(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=oi,d=null,u=ri,h=r}return p&&u==="text/plain"&&(h=p,p=void 0),{action:d,method:c.toLowerCase(),encType:u,formData:p,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ou(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Zb(r,s,c,d){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return c?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${d}`:u.pathname=`${u.pathname}.${d}`:u.pathname==="/"?u.pathname=`_root.${d}`:s&&Ra(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.${d}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${d}`,u}async function Qb(r,s){if(r.id in s)return s[r.id];try{let c=await import(r.module);return s[r.id]=c,c}catch(c){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Wb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Jb(r,s,c){let d=await Promise.all(r.map(async u=>{let p=s.routes[u.route.id];if(p){let h=await Qb(p,c);return h.links?h.links():[]}return[]}));return ak(d.flat(1).filter(Wb).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function uh(r,s,c,d,u,p){let h=(x,v)=>c[v]?x.route.id!==c[v].route.id:!0,y=(x,v)=>c[v].pathname!==x.pathname||c[v].route.path?.endsWith("*")&&c[v].params["*"]!==x.params["*"];return p==="assets"?s.filter((x,v)=>h(x,v)||y(x,v)):p==="data"?s.filter((x,v)=>{let b=d.routes[x.route.id];if(!b||!b.hasLoader)return!1;if(h(x,v)||y(x,v))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function ek(r,s,{includeHydrateFallback:c}={}){return tk(r.map(d=>{let u=s.routes[d.route.id];if(!u)return[];let p=[u.module];return u.clientActionModule&&(p=p.concat(u.clientActionModule)),u.clientLoaderModule&&(p=p.concat(u.clientLoaderModule)),c&&u.hydrateFallbackModule&&(p=p.concat(u.hydrateFallbackModule)),u.imports&&(p=p.concat(u.imports)),p}).flat(1))}function tk(r){return[...new Set(r)]}function nk(r){let s={},c=Object.keys(r).sort();for(let d of c)s[d]=r[d];return s}function ak(r,s){let c=new Set;return new Set(s),r.reduce((d,u)=>{let p=JSON.stringify(nk(u));return c.has(p)||(c.add(p),d.push({key:p,link:u})),d},[])}function ex(){let r=m.useContext(Br);return ou(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ok(){let r=m.useContext(ii);return ou(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ru=m.createContext(void 0);ru.displayName="FrameworkContext";function tx(){let r=m.useContext(ru);return ou(r,"You must render this element inside a <HydratedRouter> element"),r}function rk(r,s){let c=m.useContext(ru),[d,u]=m.useState(!1),[p,h]=m.useState(!1),{onFocus:y,onBlur:x,onMouseEnter:v,onMouseLeave:b,onTouchStart:w}=s,S=m.useRef(null);m.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let T=M=>{M.forEach(Z=>{h(Z.isIntersecting)})},N=new IntersectionObserver(T,{threshold:.5});return S.current&&N.observe(S.current),()=>{N.disconnect()}}},[r]),m.useEffect(()=>{if(d){let T=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(T)}}},[d]);let z=()=>{u(!0)},C=()=>{u(!1),h(!1)};return c?r!=="intent"?[p,S,{}]:[p,S,{onFocus:Cs(y,z),onBlur:Cs(x,C),onMouseEnter:Cs(v,z),onMouseLeave:Cs(b,C),onTouchStart:Cs(w,z)}]:[!1,S,{}]}function Cs(r,s){return c=>{r&&r(c),c.defaultPrevented||s(c)}}function sk({page:r,...s}){let{router:c}=ex(),d=m.useMemo(()=>_h(c.routes,r,c.basename),[c.routes,r,c.basename]);return d?m.createElement(ik,{page:r,matches:d,...s}):null}function lk(r){let{manifest:s,routeModules:c}=tx(),[d,u]=m.useState([]);return m.useEffect(()=>{let p=!1;return Jb(r,s,c).then(h=>{p||u(h)}),()=>{p=!0}},[r,s,c]),d}function ik({page:r,matches:s,...c}){let d=vo(),{future:u,manifest:p,routeModules:h}=tx(),{basename:y}=ex(),{loaderData:x,matches:v}=ok(),b=m.useMemo(()=>uh(r,s,v,p,d,"data"),[r,s,v,p,d]),w=m.useMemo(()=>uh(r,s,v,p,d,"assets"),[r,s,v,p,d]),S=m.useMemo(()=>{if(r===d.pathname+d.search+d.hash)return[];let T=new Set,N=!1;if(s.forEach(Z=>{let P=p.routes[Z.route.id];!P||!P.hasLoader||(!b.some(K=>K.route.id===Z.route.id)&&Z.route.id in x&&h[Z.route.id]?.shouldRevalidate||P.hasClientLoader?N=!0:T.add(Z.route.id))}),T.size===0)return[];let M=Zb(r,y,u.unstable_trailingSlashAwareDataRequests,"data");return N&&T.size>0&&M.searchParams.set("_routes",s.filter(Z=>T.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[M.pathname+M.search]},[y,u.unstable_trailingSlashAwareDataRequests,x,d,p,b,s,r,h]),z=m.useMemo(()=>ek(w,p),[w,p]),C=lk(w);return m.createElement(m.Fragment,null,S.map(T=>m.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...c})),z.map(T=>m.createElement("link",{key:T,rel:"modulepreload",href:T,...c})),C.map(({key:T,link:N})=>m.createElement("link",{key:T,nonce:c.nonce,...N,crossOrigin:N.crossOrigin??c.crossOrigin})))}function ck(...r){return s=>{r.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dk&&(window.__reactRouterVersion="7.13.1")}catch{}function uk({basename:r,children:s,unstable_useTransitions:c,window:d}){let u=m.useRef();u.current==null&&(u.current=$v({window:d,v5Compat:!0}));let p=u.current,[h,y]=m.useState({action:p.action,location:p.location}),x=m.useCallback(v=>{c===!1?y(v):m.startTransition(()=>y(v))},[c]);return m.useLayoutEffect(()=>p.listen(x),[p,x]),m.createElement(Ib,{basename:r,children:s,location:h.location,navigationType:h.action,navigator:p,unstable_useTransitions:c})}var nx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ax=m.forwardRef(function({onClick:s,discover:c="render",prefetch:d="none",relative:u,reloadDocument:p,replace:h,unstable_mask:y,state:x,target:v,to:b,preventScrollReset:w,viewTransition:S,unstable_defaultShouldRevalidate:z,...C},T){let{basename:N,navigator:M,unstable_useTransitions:Z}=m.useContext(Wn),P=typeof b=="string"&&nx.test(b),K=$h(b,N);b=K.to;let q=Sb(b,{relative:u}),I=vo(),G=null;if(y){let se=eu(y,[],I.unstable_mask?I.unstable_mask.pathname:"/",!0);N!=="/"&&(se.pathname=se.pathname==="/"?N:pa([N,se.pathname])),G=M.createHref(se)}let[$,X,me]=rk(d,C),ee=hk(b,{replace:h,unstable_mask:y,state:x,target:v,preventScrollReset:w,relative:u,viewTransition:S,unstable_defaultShouldRevalidate:z,unstable_useTransitions:Z});function ge(se){s&&s(se),se.defaultPrevented||ee(se)}let re=!(K.isExternal||p),be=m.createElement("a",{...C,...me,href:(re?G:void 0)||K.absoluteURL||q,onClick:re?ge:s,ref:ck(T,X),target:v,"data-discover":!P&&c==="render"?"true":void 0});return $&&!P?m.createElement(m.Fragment,null,be,m.createElement(sk,{page:q})):be});ax.displayName="Link";var pk=m.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:d="",end:u=!1,style:p,to:h,viewTransition:y,children:x,...v},b){let w=Ms(h,{relative:v.relative}),S=vo(),z=m.useContext(ii),{navigator:C,basename:T}=m.useContext(Wn),N=z!=null&&kk(w)&&y===!0,M=C.encodeLocation?C.encodeLocation(w).pathname:w.pathname,Z=S.pathname,P=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;c||(Z=Z.toLowerCase(),P=P?P.toLowerCase():null,M=M.toLowerCase()),P&&T&&(P=Ra(P,T)||P);const K=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let q=Z===M||!u&&Z.startsWith(M)&&Z.charAt(K)==="/",I=P!=null&&(P===M||!u&&P.startsWith(M)&&P.charAt(M.length)==="/"),G={isActive:q,isPending:I,isTransitioning:N},$=q?s:void 0,X;typeof d=="function"?X=d(G):X=[d,q?"active":null,I?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let me=typeof p=="function"?p(G):p;return m.createElement(ax,{...v,"aria-current":$,className:X,ref:b,style:me,to:h,viewTransition:y},typeof x=="function"?x(G):x)});pk.displayName="NavLink";var fk=m.forwardRef(({discover:r="render",fetcherKey:s,navigate:c,reloadDocument:d,replace:u,state:p,method:h=oi,action:y,onSubmit:x,relative:v,preventScrollReset:b,viewTransition:w,unstable_defaultShouldRevalidate:S,...z},C)=>{let{unstable_useTransitions:T}=m.useContext(Wn),N=vk(),M=bk(y,{relative:v}),Z=h.toLowerCase()==="get"?"get":"post",P=typeof y=="string"&&nx.test(y),K=q=>{if(x&&x(q),q.defaultPrevented)return;q.preventDefault();let I=q.nativeEvent.submitter,G=I?.getAttribute("formmethod")||h,$=()=>N(I||q.currentTarget,{fetcherKey:s,method:G,navigate:c,replace:u,state:p,relative:v,preventScrollReset:b,viewTransition:w,unstable_defaultShouldRevalidate:S});T&&c!==!1?m.startTransition(()=>$()):$()};return m.createElement("form",{ref:C,method:Z,action:M,onSubmit:d?x:K,...z,"data-discover":!P&&r==="render"?"true":void 0})});fk.displayName="Form";function mk(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ox(r){let s=m.useContext(Br);return _t(s,mk(r)),s}function hk(r,{target:s,replace:c,unstable_mask:d,state:u,preventScrollReset:p,relative:h,viewTransition:y,unstable_defaultShouldRevalidate:x,unstable_useTransitions:v}={}){let b=Cb(),w=vo(),S=Ms(r,{relative:h});return m.useCallback(z=>{if(Gb(z,s)){z.preventDefault();let C=c!==void 0?c:Es(w)===Es(S),T=()=>b(r,{replace:C,unstable_mask:d,state:u,preventScrollReset:p,relative:h,viewTransition:y,unstable_defaultShouldRevalidate:x});v?m.startTransition(()=>T()):T()}},[w,b,S,c,d,u,s,r,p,h,y,x,v])}var xk=0,gk=()=>`__${String(++xk)}__`;function vk(){let{router:r}=ox("useSubmit"),{basename:s}=m.useContext(Wn),c=Mb(),d=r.fetch,u=r.navigate;return m.useCallback(async(p,h={})=>{let{action:y,method:x,encType:v,formData:b,body:w}=Xb(p,s);if(h.navigate===!1){let S=h.fetcherKey||gk();await d(S,c,h.action||y,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:w,formMethod:h.method||x,formEncType:h.encType||v,flushSync:h.flushSync})}else await u(h.action||y,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:w,formMethod:h.method||x,formEncType:h.encType||v,replace:h.replace,state:h.state,fromRouteId:c,flushSync:h.flushSync,viewTransition:h.viewTransition})},[d,u,s,c])}function bk(r,{relative:s}={}){let{basename:c}=m.useContext(Wn),d=m.useContext(Ma);_t(d,"useFormAction must be used inside a RouteContext");let[u]=d.matches.slice(-1),p={...Ms(r||".",{relative:s})},h=vo();if(r==null){p.search=h.search;let y=new URLSearchParams(p.search),x=y.getAll("index");if(x.some(b=>b==="")){y.delete("index"),x.filter(w=>w).forEach(w=>y.append("index",w));let b=y.toString();p.search=b?`?${b}`:""}}return(!r||r===".")&&u.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(p.pathname=p.pathname==="/"?c:pa([c,p.pathname])),Es(p)}function kk(r,{relative:s}={}){let c=m.useContext(Gh);_t(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=ox("useViewTransitionState"),u=Ms(r,{relative:s});if(!c.isTransitioning)return!1;let p=Ra(c.currentLocation.pathname,d)||c.currentLocation.pathname,h=Ra(c.nextLocation.pathname,d)||c.nextLocation.pathname;return si(u.pathname,h)!=null||si(u.pathname,p)!=null}var yk=Lh();function su({type:r,size:s=18,...c}){const d={width:s,height:s,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,...c};return r==="default"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M10 10h.01",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round"})]}):r==="success"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"m6.1 10.3 2.2 2.2 5.6-5.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}):r==="warning"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 2.2 18 17.8H2L10 2.2Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),n.jsx("path",{d:"M10 7v4.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M10 14.2h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):r==="error"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M7.2 7.2 12.8 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M12.8 7.2 7.2 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}):r==="loading"?n.jsx("svg",{...d,children:n.jsx("path",{d:"M10 3.2a6.8 6.8 0 1 0 6.8 6.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}):r==="info"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M10 8.2V14",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M10 6h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):null}function rx({size:r=16,...s}){return n.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...s,children:[n.jsx("path",{d:"M6.2 6.2 13.8 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M13.8 6.2 6.2 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}function wk({size:r=18,...s}){return n.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...s,children:[n.jsx("path",{d:"M2.2 10s2.8-5.8 7.8-5.8S17.8 10 17.8 10s-2.8 5.8-7.8 5.8S2.2 10 2.2 10Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),n.jsx("path",{d:"M10 12.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z",stroke:"currentColor",strokeWidth:"1.6"})]})}function jk({size:r=18,...s}){return n.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...s,children:[n.jsx("path",{d:"M3.3 4.2 16.7 17.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M7.2 7.6A2.8 2.8 0 0 0 12.4 13",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M4.1 7.3C2.9 8.7 2.2 10 2.2 10s2.8 5.8 7.8 5.8c1.4 0 2.6-.3 3.6-.8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M6 4.9C7.2 4.4 8.5 4.2 10 4.2c5 0 7.8 5.8 7.8 5.8s-.8 1.7-2.3 3.3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}function zt(r,{insertAt:s}={}){if(!r||typeof document>"u")return;const c=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",s==="top"&&c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d),d.styleSheet?d.styleSheet.cssText=r:d.appendChild(document.createTextNode(r))}zt(`@layer components {
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
`);function Ea(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}function Sk(r){return r==="success"?"success":r==="warning"?"warning":r==="danger"?"error":r==="default"?"default":"info"}function Zl(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}var St=m.forwardRef((r,s)=>{const{title:c,description:d,color:u="default",variant:p="flat",radius:h="md",icon:y,startContent:x,endContent:v,isVisible:b,isClosable:w=!1,hideIcon:S=!1,hideIconWrapper:z=!1,closeButtonProps:C,onClose:T,onVisibleChange:N,classNames:M,className:Z,style:P,...K}=r,[q,I]=m.useState(!0),G=typeof b=="boolean",$=G?b:q,X=c!=null,me=d!=null,ee=m.useMemo(()=>({"--oks-alert-accent":Zl(u,600),"--oks-alert-bg-50":Zl(u,50),"--oks-alert-bg-100":Zl(u,100),"--oks-alert-fg-900":Zl(u,900)}),[u]),ge=m.useMemo(()=>n.jsx(su,{type:Sk(u),size:18}),[u]),re=m.useCallback(()=>{N?.(!1),G||I(!1),T?.()},[G,T,N]);if(!$)return null;const be=y??ge,se=!S&&be!==null,D=se?n.jsx("span",{className:Ea("oksAlertIcon",M?.alertIcon),children:be}):null,U=se?z?D:n.jsx("span",{className:Ea("oksAlertIconWrapper",M?.iconWrapper),children:D}):null,Q=Ea(Ea("oksAlertCloseButton",M?.closeButton),C?.className),pe=w===!0?n.jsx("button",{type:"button","aria-label":"Close",...C,className:Q,onClick:fe=>{C?.onClick?.(fe),fe.defaultPrevented||re()},children:n.jsx(rx,{size:16})}):null;return n.jsxs("div",{...K,ref:s,role:"alert","data-visible":"true","data-closeable":w?"true":"false","data-has-title":X?"true":"false","data-has-description":me?"true":"false","data-color":u,"data-variant":p,"data-radius":h,className:Ea(Ea("oksAlert",M?.base),Z),style:{...ee,...P},children:[U,x,n.jsxs("div",{className:Ea("oksAlertMainWrapper",M?.mainWrapper),children:[X?n.jsx("div",{className:Ea("oksAlertTitle",M?.title),children:c}):null,me?n.jsx("div",{className:Ea("oksAlertDescription",M?.description),children:d}):null]}),v,pe]})});St.displayName="Alert";function Zn(r,s,c){return Math.min(c,Math.max(s,r))}function Ds(r,s){return c=>{r?.(c),s(c)}}function Ck(...r){return s=>{for(const c of r)c&&(typeof c=="function"?c(s):c.current=s)}}function lu(){const[r,s]=m.useState(!1);return m.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const c=window.matchMedia("(prefers-reduced-motion: reduce)"),d=()=>s(!!c.matches);return d(),typeof c.addEventListener=="function"?(c.addEventListener("change",d),()=>c.removeEventListener("change",d)):(c.addListener(d),()=>c.removeListener(d))},[]),r}function Or({children:r,container:s}){if(typeof document>"u")return null;const c=s??document.body;return c?yk.createPortal(r,c):null}function Dk(){return typeof window>"u"?{width:0,height:0,scrollX:0,scrollY:0}:{width:window.innerWidth,height:window.innerHeight,scrollX:window.scrollX??window.pageXOffset??0,scrollY:window.scrollY??window.pageYOffset??0}}function di(r){const{triggerRect:s,tooltipRect:c,side:d,align:u,offset:p,collisionPadding:h,crossOffset:y=0,shouldFlip:x=!0,arrowSize:v=10,arrowPaddingX:b=12,arrowPaddingY:w=8,arrowCornerInset:S=0,strategy:z}=r,C=Dk(),T=s.top-h,N=C.height-h-s.bottom,M=s.left-h,Z=C.width-h-s.right,P={top:c.height+p,bottom:c.height+p,left:c.width+p,right:c.width+p},K={top:T,bottom:N,left:M,right:Z},q={top:K.top>=P.top,bottom:K.bottom>=P.bottom,left:K.left>=P.left,right:K.right>=P.right},I=W=>W==="top"?"bottom":W==="bottom"?"top":W==="left"?"right":"left",$=(()=>{if(!x||q[d])return d;const W=I(d);if(q[W])return W;const te=["top","bottom","left","right"];let ie="top",De=K[ie]-P[ie];for(const ae of te){const ne=K[ae]-P[ae];ne>De&&(ie=ae,De=ne)}return ie})();let X=0,me=0;const ee=u==="start"?s.left:u==="end"?s.right-c.width:s.left+s.width/2-c.width/2,ge=u==="start"?s.top:u==="end"?s.bottom-c.height:s.top+s.height/2-c.height/2;$==="top"?(X=s.top-c.height-p,me=ee):$==="bottom"?(X=s.bottom+p,me=ee):$==="left"?(X=ge,me=s.left-c.width-p):(X=ge,me=s.right+p),$==="top"||$==="bottom"?me+=y:X+=y;const re=h,be=C.width-h-c.width,se=h,D=C.height-h-c.height,U=c.width<=C.width-h*2,Q=c.height<=C.height-h*2;q[$]?$==="top"||$==="bottom"?(me=Zn(me,re,be),Q||(X=Zn(X,se,D))):(X=Zn(X,se,D),U||(me=Zn(me,re,be))):(me=Zn(me,re,be),X=Zn(X,se,D)),z==="absolute"&&(me+=C.scrollX,X+=C.scrollY);const pe=v/2,fe=s.left+s.width/2+(z==="absolute"?C.scrollX:0),k=s.top+s.height/2+(z==="absolute"?C.scrollY:0);let F,E;if($==="top"||$==="bottom"){const W=fe-me,te=Math.max(b,S),ie=te+pe,De=c.width-te-pe;F=De>=ie?Zn(W,ie,De):c.width/2}else{const W=k-X,te=Math.max(w,S),ie=te+pe,De=c.height-te-pe;E=De>=ie?Zn(W,ie,De):c.height/2}const j={top:X,left:me,placedSide:$};return F!==void 0&&(j.arrowX=F),E!==void 0&&(j.arrowY=E),j}zt(`@layer components {
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
`);function Ql(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}var ph=[50,100,200,300,400,500,600,700,800,900,950];function Tk(r){const s=Zn(r,50,950);let d=ph[0]??100,u=Math.abs(d-s);for(const p of ph){const h=Math.abs(p-s);h<u&&(d=p,u=h)}return d}function Nk(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}function Qe(r){const{children:s,content:c,size:d="md",color:u="default",colorDepth:p=100,radius:h="md",shadow:y="sm",placement:x="top",delay:v=0,closeDelay:b=500,isOpen:w,defaultOpen:S=!1,onOpenChange:z,onClose:C,offset:T=7,containerPadding:N=12,crossOffset:M=0,showArrow:Z=!1,shouldFlip:P=!0,triggerScaleOnOpen:K=!1,isKeyboardDismissDisabled:q=!1,isDismissable:I=!1,shouldCloseOnBlur:G=!0,portalContainer:$,updatePositionDeps:X,isDisabled:me=!1,disableAnimation:ee=!1,className:ge,classNames:re,shouldCloseOnInteractOutside:be}=r,D=`oks-tooltip-${m.useId().replace(/[:]/g,"")}`,U=w!==void 0,[Q,pe]=m.useState(S),fe=!me&&(U?w:Q),[k,F]=m.useState(!1),E=lu(),j=m.useRef(null),W=m.useRef(null),te=m.useRef(null),ie=m.useRef(null),[De,ae]=m.useState(null),ne=Ie=>{z?.(Ie),U||pe(Ie),Ie||C?.()},Re=()=>{te.current!==null&&(window.clearTimeout(te.current),te.current=null)},we=()=>{ie.current!==null&&(window.clearTimeout(ie.current),ie.current=null)},Te=Ie=>{if(me)return;const Xe=Ie?.currentTarget;Xe instanceof HTMLElement&&(j.current=Xe),we(),Re(),ve(),te.current=window.setTimeout(()=>ne(!0),v)},Ee=()=>{Re(),we(),ie.current=window.setTimeout(()=>ne(!1),b)},Ae=()=>{Re(),we(),ne(!1)},{side:de,align:ke}=m.useMemo(()=>{const[Ie,Xe]=x.split("-");return{side:Ie==="top"||Ie==="bottom"||Ie==="left"||Ie==="right"?Ie:"top",align:Xe==="start"||Xe==="end"?Xe:"center"}},[x]),ve=()=>{const Ie=j.current,Xe=W.current;if(!Ie||!Xe)return;const Ct=Ie.getBoundingClientRect(),nn=Xe.getBoundingClientRect(),ue=Z?Xe.querySelector(".oksTooltipArrow"):null,ye=Xe.querySelector(".oksTooltipContent"),Oe=ue?Number.parseFloat(window.getComputedStyle(ue).width):Number.NaN,$e=Number.isFinite(Oe)&&Oe>0?Oe:10,mt=ye?Number.parseFloat(window.getComputedStyle(ye).paddingLeft):Number.NaN,Se=Number.isFinite(mt)&&mt>0?mt:12,nt=ye?Number.parseFloat(window.getComputedStyle(ye).paddingTop):Number.NaN,dt=Number.isFinite(nt)&&nt>0?nt:8,Rt=h==="full"?Math.min(nn.width,nn.height)/2:0;ae(di({triggerRect:Ct,tooltipRect:nn,side:de,align:ke,offset:T,collisionPadding:N,crossOffset:M,shouldFlip:P,arrowSize:$e,arrowPaddingX:Se,arrowPaddingY:dt,arrowCornerInset:Rt,strategy:"fixed"}))};m.useEffect(()=>(F(!0),()=>{typeof window>"u"||(Re(),we())}),[]),m.useEffect(()=>{if(!k||!fe||(ve(),typeof window>"u"))return;const Ie=window.requestAnimationFrame(()=>ve()),Xe=()=>ve();window.addEventListener("scroll",Xe,!0),window.addEventListener("resize",Xe);let Ct=null;return typeof ResizeObserver<"u"&&(Ct=new ResizeObserver(Xe),j.current&&Ct.observe(j.current),W.current&&Ct.observe(W.current)),()=>{window.cancelAnimationFrame(Ie),window.removeEventListener("scroll",Xe,!0),window.removeEventListener("resize",Xe),Ct?.disconnect()}},[k,fe,de,ke,T,N,M,P,X]),m.useEffect(()=>{if(!k||!fe||typeof document>"u")return;const Ie=Xe=>{q||Xe.key==="Escape"&&Ae()};return document.addEventListener("keydown",Ie),()=>document.removeEventListener("keydown",Ie)},[k,fe,q]),m.useEffect(()=>{if(!k||!fe||!I||typeof document>"u")return;const Ie=Xe=>{const Ct=Xe.target;if(!(Ct instanceof Node)||j.current?.contains(Ct)||W.current?.contains(Ct))return;const nn=Ct instanceof HTMLElement?Ct:null;nn&&be&&!be(nn)||Ae()};return document.addEventListener("pointerdown",Ie,!0),()=>document.removeEventListener("pointerdown",Ie,!0)},[k,fe,I,be]);const le=Ie=>({"aria-describedby":fe?D:void 0,onPointerEnter:Ds(Ie?.onPointerEnter,Xe=>Te(Xe)),onPointerLeave:Ds(Ie?.onPointerLeave,()=>Ee()),onFocus:Ds(Ie?.onFocus,Xe=>Te(Xe)),onBlur:Ds(Ie?.onBlur,()=>{G&&Ee()}),onKeyDown:Ds(Ie?.onKeyDown,Xe=>{q||Xe?.key==="Escape"&&Ae()})}),je=fe&&De===null,Le={position:"fixed",top:De?.top??0,left:De?.left??0,visibility:je?"hidden":void 0,...De?.arrowX!==void 0?{"--oks-tooltip-arrow-x":`${De.arrowX}px`}:null,...De?.arrowY!==void 0?{"--oks-tooltip-arrow-y":`${De.arrowY}px`}:null},We=typeof p=="number"?Tk(p):100,Ne=We<=400?"#000":"#fff",Ge={"--oks-tooltip-bg":Nk(u,We),"--oks-tooltip-fg":Ne},_e=m.isValidElement(s)?(()=>{const Ie=s,Xe=Ie.ref;return m.cloneElement(Ie,{ref:Ck(Xe,Ct=>{j.current=Ct}),...le(Ie.props)})})():n.jsx("span",{ref:Ie=>{j.current=Ie},...le(),children:s}),Ve=ee||E?"reduced":fe?"open":"closed",Ye=m.useMemo(()=>{const Ie=De?.placedSide??de,Xe=ke==="center"?"":`-${ke}`;return`${Ie}${Xe}`},[De?.placedSide,de,ke]),tt=k&&!me?n.jsxs("div",{ref:Ie=>{W.current=Ie},id:D,role:"tooltip","aria-hidden":!fe,"data-open":fe?"true":"false","data-placement":Ye,"data-disabled":me?"true":"false","data-size":d,"data-color":u,"data-radius":h,"data-shadow":y,"data-motion":Ve,className:Ql(Ql("oksTooltipBase",re?.base),ge),style:{...Ge,...Le},children:[Z?n.jsx("span",{className:Ql("oksTooltipArrow",re?.arrow)}):null,n.jsx("div",{className:Ql("oksTooltipContent",re?.content),children:c})]}):null;return n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"oksTooltipTrigger","data-open":fe?"true":"false","data-trigger-scale":K?"true":"false","data-motion":ee||E?"reduced":"default",children:_e}),n.jsx(Or,{container:$,children:tt})]})}function Fk({size:r=18,...s}){return n.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...s,children:[n.jsx("path",{d:"M10 10.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M3.6 17.2c1.6-3.1 4-4.4 6.4-4.4s4.8 1.3 6.4 4.4",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}zt(`@layer components {
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
`);zt(`@layer components {
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
`);function ua(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}var fh=[50,100,200,300,400,500,600,700,800,900,950];function Bk(r){const s=Zn(r,50,950);let d=fh[0]??500,u=Math.abs(d-s);for(const p of fh){const h=Math.abs(p-s);h<u&&(d=p,u=h)}return d}function li(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}function Ok(r,s){return li(r,s)}function Ak(r){const s=typeof r=="string"?r.trim():"";if(!s)return"";const c=s.split(/\s+/).filter(Boolean);if(c.length===0)return"";const d=c[0]?.[0]??"",u=c.length>1?c[c.length-1]?.[0]??"":"";return(d+u).toUpperCase()}function Ek(r){const s=Math.floor(Math.abs(r));return s<1e3?`+${s}`:s<1e6?`+${Math.floor(s/1e3)}K`:s<1e9?`+${Math.floor(s/1e6)}M`:`+${Math.floor(s/1e9)}B`}var Ce=m.forwardRef((r,s)=>{const{name:c,src:d,size:u="md",color:p="default",radius:h="full",colorDepth:y=500,isBordered:x=!1,isDisabled:v=!1,isFocusable:b=!1,showFallback:w=!1,icon:S,fallback:z,tooltip:C=!1,ImgComponent:T="img",imgProps:N,classNames:M,className:Z,style:P,...K}=r,q=typeof c=="string"?c:"",I=v,G=p,$=typeof y=="number"?Bk(y):500,X=$<=400?"#000":"#fff",[me,ee]=m.useState(!1);m.useEffect(()=>ee(!1),[d]);const ge=d?me?w===!0:!1:!0,be={...{"--oks-avatar-bg":li(G,$),"--oks-avatar-bg-50":li(G,50),"--oks-avatar-fg":X,"--oks-avatar-border":Ok(G,$)},...P??{}},se=K["aria-label"],D=typeof se=="string"?se:q||void 0,U=b===!0&&K.tabIndex===void 0?0:K.tabIndex,Q=ua(ua("oksAvatar",M?.base),Z),pe=z??(q.trim().length>0?n.jsx("span",{className:ua("oksAvatarInitials",M?.name),"aria-hidden":"true",children:Ak(q)}):n.jsx("span",{className:ua("oksAvatarFallbackIcon",M?.icon),"aria-hidden":"true",children:S??n.jsx(Fk,{})})),fe=n.jsx("div",{...K,ref:s,className:Q,"data-size":u,"data-color":G,"data-radius":h,"data-bordered":x?"true":void 0,"data-focusable":b?"true":void 0,"data-disabled":I?"true":void 0,role:ge?"img":K.role,"aria-label":ge?D:K["aria-label"],tabIndex:I?K.tabIndex:U,style:be,children:ge?n.jsx("span",{className:ua("oksAvatarFallback",M?.fallback),children:pe}):n.jsx(T,{...N,className:ua(ua("oksAvatarImage",M?.img),N?.className),src:d,alt:N?.alt??q,draggable:!1,onError:W=>{ee(!0),N?.onError?.(W)}})}),k=C===!0?q:typeof C=="object"&&C!==null?"content"in C?C.content??q:q:null,F=typeof C=="object"&&C!==null?"props"in C?C.props:C:void 0;if(!((C===!0||typeof C=="object"&&C!==null)&&typeof k=="string"?k.trim().length>0:k!=null))return fe;const j=I?n.jsx("span",{className:"oksAvatarTooltipWrapper",children:fe}):fe;return n.jsx(Qe,{...F,content:k,children:j})});Ce.displayName="Avatar";var _o=m.forwardRef((r,s)=>{const{children:c,max:d=5,total:u,size:p="md",color:h="default",radius:y="full",isGrid:x=!1,isDisabled:v,isBordered:b=!1,renderCount:w,classNames:S,className:z,style:C,...T}=r,N=xe.Children.toArray(c),M=Math.max(0,Math.floor(d)),Z=typeof u=="number"?u-M:N.length-M,P=Z>0?Z:0,K={...C??{}},q=ua(ua("oksAvatarGroup",S?.base),z);return n.jsxs("div",{...T,ref:s,className:q,"data-grid":x?"true":void 0,"data-color":h,"data-radius":y,"data-bordered":b?"true":void 0,"data-disabled":v?"true":void 0,style:K,children:[n.jsx("div",{className:"oksAvatarGroupStack","data-grid":x?"true":void 0,children:N.slice(0,M).map((I,G)=>{if(xe.isValidElement(I)){const $=I,X={size:p};return $.props?.radius===void 0&&(X.radius=y),$.props?.isBordered===void 0&&(X.isBordered=b),$.props?.isDisabled===void 0&&(X.isDisabled=v),$.props?.color===void 0&&(X.color=h),n.jsx("div",{className:"oksAvatarGroupItem",children:xe.cloneElement(I,X)},G)}return n.jsx("div",{className:"oksAvatarGroupItem",children:I},G)})}),P>0?n.jsx("span",{className:ua("oksAvatarGroupOverflowText",S?.count),style:{"--oks-avatar-group-count-color":li(h,600)},children:w?w(P):Ek(P)}):null]})});_o.displayName="AvatarGroup";zt(`@layer components {
  .oksBackdrop {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .oksBackdropOverlay {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition-property: opacity;
    transition-duration: var(--oks-backdrop-duration, 300ms);
    transition-timing-function: var(--oks-backdrop-easing, ease);
  }
  .oksBackdropOverlay[data-blur=true] {
    backdrop-filter: blur(8px);
  }
  .oksBackdrop[data-state=open] .oksBackdropOverlay {
    opacity: var(--oks-backdrop-opacity, 0.8);
  }
  .oksBackdropContent {
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition-property: opacity, transform;
    transition-duration: var(--oks-backdrop-duration, 300ms);
    transition-timing-function: var(--oks-backdrop-easing, ease);
  }
  .oksBackdrop[data-content-size=full] .oksBackdropContent {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .oksBackdrop[data-content-size=full] .oksBackdropContent > * {
    pointer-events: auto;
  }
  .oksBackdrop[data-content-state=open] .oksBackdropContent {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .oksBackdrop[data-animation=fade][data-content-state=closed] .oksBackdropContent {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  .oksBackdrop[data-animation=zoom][data-content-state=closed] .oksBackdropContent {
    opacity: 0;
    transform: scale(0.98);
  }
  .oksBackdrop[data-animation=slideUp][data-content-state=closed] .oksBackdropContent {
    opacity: 0;
    transform: translate3d(0, 16px, 0);
  }
  .oksBackdrop[data-animation=slideDown][data-content-state=closed] .oksBackdropContent {
    opacity: 0;
    transform: translate3d(0, -16px, 0);
  }
  .oksBackdrop[data-animation=slideLeft][data-content-state=closed] .oksBackdropContent {
    opacity: 0;
    transform: translate3d(16px, 0, 0);
  }
  .oksBackdrop[data-animation=slideRight][data-content-state=closed] .oksBackdropContent {
    opacity: 0;
    transform: translate3d(-16px, 0, 0);
  }
  .oksBackdrop[data-motion=reduced] .oksBackdropOverlay,
  .oksBackdrop[data-motion=reduced] .oksBackdropContent {
    transition-duration: 0ms;
  }
}
`);function mh(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}var Ts=0,Wl=null;function zk(){if(typeof document>"u")return()=>{};const r=document.documentElement;return Ts+=1,Ts===1&&(Wl=r.style.overflow,r.style.overflow="hidden"),()=>{if(typeof document>"u")return;const s=document.documentElement;Ts=Math.max(0,Ts-1),Ts===0&&(Wl?s.style.overflow=Wl:s.style.removeProperty("overflow"),Wl=null)}}function hh(r,s,c){const d=typeof r=="number"&&Number.isFinite(r)?r:s;return Math.min(c,Math.max(s,d))}function Rk(r){return r==="easeIn"?"ease-in":r==="easeOut"?"ease-out":r==="easeInOut"?"ease-in-out":"ease"}function Qn(r){const{isOpen:s,onClose:c,children:d,zIndex:u=40,closeOnOutsideClick:p=!0,closeOnEscape:h=!0,lockScroll:y=!0,blur:x=!0,backgroundColor:v="var(--oks-palette-neutral-950, #000)",backgroundOpacity:b=80,animationDuration:w=.3,animationType:S="fade",easing:z="ease",portal:C=!0,container:T,className:N,style:M,contentFullSize:Z=!1,contentClassName:P,contentStyle:K}=r,q=lu(),[I,G]=m.useState(s),[$,X]=m.useState("closed"),[me,ee]=m.useState("closed"),ge=m.useRef({}),re=m.useMemo(()=>q?0:Math.round(hh(w,0,10)*1e3),[w,q]),be=m.useMemo(()=>{const pe=hh(b,0,100);return String(pe/100)},[b]),se=m.useMemo(()=>({zIndex:u,...M,"--oks-backdrop-duration":`${re}ms`,"--oks-backdrop-easing":Rk(z),"--oks-backdrop-opacity":be}),[re,z,be,M,u]);m.useEffect(()=>{if(y&&I)return zk()},[y,I]),m.useEffect(()=>{if(!s||!h||typeof document>"u")return;const pe=fe=>{fe.key==="Escape"&&c()};return document.addEventListener("keydown",pe),()=>document.removeEventListener("keydown",pe)},[h,s,c]),m.useEffect(()=>{const pe=ge.current;typeof window<"u"&&(pe.openContent!==void 0&&window.clearTimeout(pe.openContent),pe.closeBackdrop!==void 0&&window.clearTimeout(pe.closeBackdrop),pe.unmount!==void 0&&window.clearTimeout(pe.unmount)),pe.raf!==void 0&&typeof window<"u"&&window.cancelAnimationFrame(pe.raf),ge.current={}},[re]),m.useEffect(()=>{const pe={};if(q){G(s),X(s?"open":"closed"),ee(s?"open":"closed");return}if(typeof window>"u"){G(s),X(s?"open":"closed"),ee(s?"open":"closed");return}return s?(G(!0),X("closed"),ee("closed"),pe.raf=window.requestAnimationFrame(()=>X("open")),pe.openContent=window.setTimeout(()=>ee("open"),re)):(ee("closed"),pe.closeBackdrop=window.setTimeout(()=>X("closed"),re),pe.unmount=window.setTimeout(()=>G(!1),re*2)),ge.current=pe,()=>{typeof window>"u"||(pe.openContent!==void 0&&window.clearTimeout(pe.openContent),pe.closeBackdrop!==void 0&&window.clearTimeout(pe.closeBackdrop),pe.unmount!==void 0&&window.clearTimeout(pe.unmount),pe.raf!==void 0&&window.cancelAnimationFrame(pe.raf))}},[re,s,q]);const D=n.jsx("div",{className:"oksBackdropOverlay","data-blur":x?"true":"false",style:{backgroundColor:v},onPointerDown:p?c:void 0,"aria-hidden":"true"}),U=d!=null?n.jsx("div",{className:mh("oksBackdropContent",P),style:K,children:d}):null,Q=I?n.jsxs("div",{className:mh("oksBackdrop",N),style:se,"data-state":$,"data-content-state":me,"data-animation":S,"data-motion":q?"reduced":"full","data-content-size":Z?"full":"auto",children:[D,U]}):null;return C?n.jsx(Or,{container:T,children:Q}):Q}zt(`@layer components {
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
    --oks-badge-border-width: 0px;
    --oks-badge-border-color: transparent;
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
    border: var(--oks-badge-border-width) solid var(--oks-badge-border-color);
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
  :where(.oksBadge[data-variant=bordered]) {
    --oks-badge-bg: var(--oks-badge-outline, var(--oks-color-surface, #fff));
    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-badge-border-width: 1px;
    --oks-badge-border-color: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));
  }
  :where(.oksBadge[data-variant=light]) {
    --oks-badge-bg: var(--oks-badge-tone-50, var(--oks-color-primary-50, #eff6ff));
    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));
  }
  :where(.oksBadge[data-variant=flat]) {
    --oks-badge-bg: var(--oks-badge-tone-100, var(--oks-color-primary-100, #dbeafe));
    --oks-badge-fg: var(--oks-badge-tone-700, var(--oks-color-primary-700, #1d4ed8));
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
  :where(.oksBadge[data-variant=ghost]) {
    --oks-badge-bg: var(--oks-badge-outline, var(--oks-color-surface, #fff));
    --oks-badge-fg: var(--oks-badge-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-badge-border-width: 1px;
    --oks-badge-border-color: var(--oks-badge-tone-100, var(--oks-color-primary-100, #dbeafe));
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
`);function Fd(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}function Jl(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}var lt=m.forwardRef((r,s)=>{const{children:c,content:d,max:u,variant:p="solid",color:h="default",size:y="md",shape:x="rectangle",placement:v="top-right",showOutline:b=!0,disableOutline:w=!1,disableAnimation:S=!1,isInvisible:z=!1,isOneChar:C=!1,isDot:T=!1,classNames:N,className:M,style:Z,...P}=r,K=w?!1:b,q=d!=null,I=!z&&(T||q),G=typeof u=="number"&&Number.isFinite(u)&&u>0?Math.floor(u):void 0,$=!T&&typeof d=="number"&&G!==void 0&&d>G?`${G}+`:d,X={"--oks-badge-tone":Jl(h,500),"--oks-badge-tone-50":Jl(h,50),"--oks-badge-tone-100":Jl(h,100),"--oks-badge-tone-700":Jl(h,700),"--oks-badge-solid-fg":"#fff"},me=I?n.jsx("span",{className:Fd("oksBadgeBadge",N?.badge),children:T?null:$}):null;return n.jsxs("span",{...P,ref:s,"data-variant":p,"data-color":h,"data-size":y,"data-shape":x,"data-placement":v,"data-outline":K?"true":"false","data-dot":T?"true":"false","data-one-char":C?"true":"false","data-invisible":z?"true":"false","data-disable-animation":S?"true":"false",className:Fd(Fd("oksBadge",N?.base),M),style:{...X,...Z},children:[c,me]})});lt.displayName="Badge";zt(`@layer components {
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
`);function Mk(r,s){return[r,typeof s=="string"?s:""].filter(Boolean).join(" ")}function Sr(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}var O=m.forwardRef((r,s)=>{const{children:c,variant:d="solid",size:u="md",color:p="default",radius:h="md",startContent:y,endContent:x,spinner:v,spinnerPlacement:b="start",fullWidth:w=!1,isIconOnly:S=!1,isDisabled:z=!1,isLoading:C=!1,disableRipple:T=!1,disableAnimation:N=!1,className:M,type:Z="button",style:P,disabled:K,onMouseDown:q,onPointerDown:I,onPointerEnter:G,onPointerLeave:$,onPointerUp:X,onPointerCancel:me,onClick:ee,onKeyDown:ge,onKeyUp:re,onPress:be,onPressStart:se,onPressEnd:D,onPressChange:U,onPressUp:Q,onFocus:pe,onBlur:fe,...k}=r,F=K||z,[E,j]=m.useState([]),W=m.useRef(!1),te=k["aria-label"];k["aria-labelledby"];const ie=typeof te=="string"?te:void 0,De={"--oks-button-tone":Sr(p,500),"--oks-button-tone-hover":Sr(p,600),"--oks-button-tone-active":Sr(p,700),"--oks-button-tone-50":Sr(p,50),"--oks-button-tone-100":Sr(p,100),"--oks-button-tone-700":Sr(p,700)},ae=()=>{const Se=globalThis?.crypto?.randomUUID?.();return typeof Se=="string"?Se:`${Date.now()}-${Math.random()}`},ne=typeof globalThis.matchMedia=="function"&&globalThis.matchMedia("(prefers-reduced-motion: reduce)")?.matches,[Re,we]=m.useState(!1),[Te,Ee]=m.useState(!1),[Ae,de]=m.useState(!1),[ke,ve]=m.useState(!1),le=Se=>{F||C||(ke||(se?.(Se),U?.(!0)),ve(!0))},je=Se=>{ke&&(D?.(Se),U?.(!1)),ve(!1)},Le=m.useCallback((Se,nt,dt)=>{if(N||ne)return;const Rt=Se.getBoundingClientRect(),Dt=Math.max(nt,Rt.width-nt),hn=Math.max(dt,Rt.height-dt),an=Math.ceil(Math.sqrt(Dt*Dt+hn*hn)*2),ra=ae();j(Cn=>{const zn=[...Cn,{id:ra,x:nt,y:dt,size:an}];return zn.length>10&&zn.splice(0,zn.length-10),zn})},[N,ne]),We=m.useCallback(Se=>{j(nt=>nt.filter(dt=>dt.id!==Se))},[]),Ne=Se=>{if(le(Se),!F&&!C&&!T){W.current=!0,globalThis.setTimeout(()=>{W.current=!1},0);const nt=Se.currentTarget,dt=nt.getBoundingClientRect();if(typeof Se.clientX=="number"&&typeof Se.clientY=="number"){const Rt=Se.clientX-dt.left,Dt=Se.clientY-dt.top;Le(nt,Rt,Dt)}}I?.(Se)},Ge=Se=>{if(!F&&!C&&!T){if(W.current){q?.(Se);return}const nt=Se.currentTarget,dt=nt.getBoundingClientRect(),Rt=Se.clientX-dt.left,Dt=Se.clientY-dt.top;Le(nt,Rt,Dt)}q?.(Se)},_e=Se=>{if((Se.key==="Enter"||Se.key===" ")&&le(Se),!F&&!C&&!T&&(Se.key==="Enter"||Se.key===" ")){const nt=Se.currentTarget,dt=nt.getBoundingClientRect();Le(nt,dt.width/2,dt.height/2)}ge?.(Se)},Ve=Se=>{(Se.key==="Enter"||Se.key===" ")&&(!F&&!C&&Q?.(Se),je(Se)),re?.(Se)},Ye=Se=>{if(F||C){Se.preventDefault(),Se.stopPropagation();return}be?.(Se),ee?.(Se)},tt=Se=>{we(!0),G?.(Se)},Ie=Se=>{we(!1),je(Se),$?.(Se)},Xe=Se=>{!F&&!C&&Q?.(Se),je(Se),X?.(Se)},Ct=Se=>{je(Se),me?.(Se)},nn=Se=>{Ee(!1),de(!1),je(Se),fe?.(Se)},ue=Se=>{Ee(!0);const nt=Se?.currentTarget,dt=typeof nt?.matches=="function"?nt.matches(":focus-visible"):!1;de(dt),pe?.(Se)},Oe=v??n.jsx("span",{className:"oksButtonSpinner","aria-hidden":"true"}),$e=S&&C;return n.jsxs("button",{...k,"aria-label":ie,ref:s,type:Z,disabled:F,onClick:Ye,onMouseDown:Ge,onPointerDown:Ne,onPointerEnter:tt,onPointerLeave:Ie,onPointerUp:Xe,onPointerCancel:Ct,onKeyDown:_e,onKeyUp:Ve,onFocus:ue,onBlur:nn,"data-hover":Re?"true":"false","data-focus":Te?"true":"false","data-focus-visible":Ae?"true":"false","data-disabled":F?"true":"false","data-pressed":ke?"true":"false","data-loading":C?"true":"false","data-motion":N||ne?"reduced":"default","data-variant":d,"data-color":p,"data-size":u,"data-radius":h,"data-icon-only":S?"true":"false","data-full-width":w?"true":"false",className:Mk("oksButton",M),style:{...De,...P},children:[E.map(Se=>n.jsx("span",{className:"oksButtonRipple","aria-hidden":"true",style:{left:`${Se.x}px`,top:`${Se.y}px`,width:`${Se.size}px`,height:`${Se.size}px`},onAnimationEnd:()=>We(Se.id)},Se.id)),C&&b==="start"&&!$e?n.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"start",children:Oe}):null,y!==void 0?n.jsx("span",{className:"oksButtonStartContent",children:y}):null,$e?n.jsx("span",{className:"oksButtonIconOnly","aria-hidden":"true",children:Oe}):S?n.jsx("span",{className:"oksButtonIconOnly",children:c}):c!=null?n.jsx("span",{className:"oksButtonLabel",children:c}):null,x!==void 0?n.jsx("span",{className:"oksButtonEndContent",children:x}):null,C&&b==="end"&&!$e?n.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"end",children:Oe}):null]})});O.displayName="Button";zt(`@layer components {
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
`);function Pk(r,s){return[r,typeof s=="string"?s:""].filter(Boolean).join(" ")}var Yd=m.forwardRef((r,s)=>{const{children:c,variant:d="solid",color:u="default",size:p="md",radius:h="md",fullWidth:y=!1,isDisabled:x=!1,className:v,role:b="group",style:w,...S}=r,z=m.Children.map(c,C=>{if(!m.isValidElement(C)||C.type!==O)return C;const T={};return C.props.variant===void 0&&(T.variant=d),C.props.color===void 0&&(T.color=u),C.props.size===void 0&&(T.size=p),C.props.radius===void 0&&(T.radius=h),C.props.fullWidth===void 0&&(T.fullWidth=y),C.props.isDisabled===void 0&&(T.isDisabled=x),m.cloneElement(C,T)});return n.jsx("div",{...S,ref:s,role:b,"data-variant":d,"data-color":u,"data-size":p,"data-radius":h,"data-full-width":y?"true":"false","data-disabled":x?"true":"false",className:Pk("oksButtonGroup",v),style:w,children:z})});Yd.displayName="ButtonGroup";zt(`@layer components {
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
`);function Cr(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}var xh=[50,100,200,300,400,500,600,700,800,900,950];function Bd(r){const s=Zn(r,50,950);let d=xh[0]??500,u=Math.abs(d-s);for(const p of xh){const h=Math.abs(p-s);h<u&&(d=p,u=h)}return d}function Dr(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}var ot=m.forwardRef((r,s)=>{const{children:c,variant:d="solid",size:u="md",color:p="default",radius:h="full",colorDepth:y=500,avatar:x,startContent:v,endContent:b,isDisabled:w=!1,onClose:S,classNames:z,className:C,style:T,...N}=r,M=w,Z=typeof y=="number"?Bd(y):500,P=Bd(Z+100),K=Bd(Z+200),q=Z<=400?"#000":"#fff",I={"--oks-chip-tone":Dr(p,Z),"--oks-chip-tone-hover":Dr(p,P),"--oks-chip-tone-active":Dr(p,K),"--oks-chip-tone-50":Dr(p,50),"--oks-chip-tone-100":Dr(p,100),"--oks-chip-tone-700":Dr(p,700),"--oks-chip-solid-fg":q},G=b??n.jsx("span",{"aria-hidden":"true",children:"×"}),$=typeof S=="function"?n.jsx("button",{type:"button",className:Cr("oksChipCloseButton",z?.closeButton),"aria-label":"Close",disabled:M,onClick:me=>{me.stopPropagation(),M||S(me)},children:G}):null;return n.jsxs("div",{...N,ref:s,"aria-disabled":M?"true":void 0,"data-variant":d,"data-size":u,"data-color":p,"data-radius":h,"data-disabled":M?"true":"false",className:Cr(Cr("oksChip",z?.base),C),style:{...I,...T},children:[d==="dot"?n.jsx("span",{className:Cr("oksChipDot",z?.dot),"aria-hidden":"true"}):null,x!=null?n.jsx("span",{className:Cr("oksChipAvatar",z?.avatar),children:x}):null,v,c!=null?n.jsx("span",{className:Cr("oksChipContent",z?.content),children:c}):null,$??b]})});ot.displayName="Chip";zt(`@layer components {
  :where(.oksDivider) {
    --oks-divider-thickness: 1px;
    --oks-divider-inset: 0px;
    --oks-divider-gap: var(--oks-space-3, 12px);
    box-sizing: border-box;
  }
  :where(.oksDivider[data-variant=middle]) {
    --oks-divider-inset: 32px;
  }
  :where(.oksDivider[data-variant=inset]) {
    --oks-divider-inset: 64px;
  }
  :where(hr.oksDivider[data-orientation=horizontal]) {
    width: 100%;
    height: 0;
    margin: 0;
    margin-inline: var(--oks-divider-inset);
    border: 0;
    border-top: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));
  }
  :where(.oksDivider[data-orientation=vertical]) {
    display: inline-block;
    height: auto;
    align-self: stretch;
    margin-inline: var(--oks-divider-inset);
    border-left: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));
  }
  :where(.oksDividerWithText) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--oks-divider-gap);
    padding-inline: var(--oks-divider-inset);
  }
  :where(.oksDividerWithText .oksDividerLine) {
    flex: 1;
    min-width: 0;
    border-top: var(--oks-divider-thickness) solid var(--oks-divider-border, rgba(0, 0, 0, 0.12));
  }
  :where(.oksDividerWithText .oksDividerLabel) {
    font-size: 12px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    opacity: 0.8;
  }
}
`);function Lk(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}var gh=[50,100,200,300,400,500,600,700,800,900,950];function _k(r){const s=Zn(r,50,950);let d=gh[0]??500,u=Math.abs(d-s);for(const p of gh){const h=Math.abs(p-s);h<u&&(d=p,u=h)}return d}function Ik(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #d1d5db))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}var fa=m.forwardRef((r,s)=>{const{orientation:c="horizontal",variant:d="fullWidth",color:u,colorDepth:p=300,thickness:h,children:y,className:x,style:v,...b}=r,w=u??"primary",S=typeof p=="number"?_k(p):300,z=h!==void 0?{"--oks-divider-thickness":typeof h=="number"?`${h}px`:h}:{},C={"--oks-divider-border":Ik(w,S),...z},T=b["aria-label"],N=typeof T=="string"?T:typeof y=="string"?y:void 0,M={...C,...v??{}},Z=Lk(y&&c==="horizontal"?"oksDivider oksDividerWithText":"oksDivider",x);return c==="vertical"?n.jsx("div",{...b,role:"separator","aria-orientation":"vertical","aria-label":N,ref:s,className:Z,"data-orientation":"vertical","data-variant":d,"data-color":w,style:M}):y?n.jsxs("div",{...b,role:"separator","aria-orientation":"horizontal","aria-label":N,ref:s,className:Z,"data-orientation":"horizontal","data-variant":d,"data-color":w,style:M,children:[n.jsx("span",{className:"oksDividerLine","aria-hidden":"true"}),n.jsx("span",{className:"oksDividerLabel",children:y}),n.jsx("span",{className:"oksDividerLine","aria-hidden":"true"})]}):n.jsx("hr",{...b,role:"separator","aria-orientation":"horizontal","aria-label":N,ref:s,className:Z,"data-orientation":"horizontal","data-variant":d,"data-color":w,style:M})});fa.displayName="Divider";zt(`@layer components {
  :where(.oksPageTitle) {
    display: inline-flex;
    align-items: center;
    gap: var(--oks-space-2, 8px);
    color: inherit;
  }
  :where(.oksPageTitleIcon) {
    display: inline-flex;
    align-items: center;
  }
  :where(.oksPageTitleTitle) {
    margin: 0;
    padding: 0;
    color: inherit;
    line-height: 1.2;
    font-weight: 600;
  }
  :where(h1.oksPageTitleTitle) {
    font-size: var(--oks-page-title-h1-font-size, 32px);
  }
  :where(h2.oksPageTitleTitle) {
    font-size: var(--oks-page-title-h2-font-size, 28px);
  }
  :where(h3.oksPageTitleTitle) {
    font-size: var(--oks-page-title-h3-font-size, 24px);
  }
  :where(h4.oksPageTitleTitle) {
    font-size: var(--oks-page-title-h4-font-size, 20px);
  }
  :where(h5.oksPageTitleTitle) {
    font-size: var(--oks-page-title-h5-font-size, 18px);
  }
  :where(h6.oksPageTitleTitle) {
    font-size: var(--oks-page-title-h6-font-size, 16px);
  }
}
`);function Ns(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}var vh=[50,100,200,300,400,500,600,700,800,900,950];function Uk(r){const s=Math.min(950,Math.max(50,r));let d=vh[0]??500,u=Math.abs(d-s);for(const p of vh){const h=Math.abs(p-s);h<u&&(d=p,u=h)}return d}function Hk(r){return r==="end"||r==="after"?"end":"start"}function Vk(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}function $k(r,s){return r==="black"||r==="white"?r:Vk(r,s)}function qk(r){return typeof r=="object"&&r!==null&&"message"in r&&r.message!==void 0}function Zt(r){const{title:s="Title",as:c,tag:d,color:u,colorDepth:p=500,icon:h,iconPosition:y="start",tooltip:x,className:v,titleClassName:b,classNames:w,style:S}=r,z=Uk(p),C=Hk(y),T=c??d??"h4",N=u??"black",M=(()=>{if(x==null||x===!1)return null;if(qk(x)){if(x.message===void 0||x.message===null)return null;const I=x.side===void 0?void 0:x.align==="start"?`${x.side}-start`:x.align==="end"?`${x.side}-end`:x.side,G={...x.disabled!==void 0?{isDisabled:x.disabled}:{},...I!==void 0?{placement:I}:{},...x.openDelay!==void 0?{delay:x.openDelay}:{},...x.closeDelay!==void 0?{closeDelay:x.closeDelay}:{},...x.className!==void 0?{className:x.className}:{}};return{content:x.message,props:G}}const q=typeof s=="string"&&s.trim().length>0?s:null;if(x===!0)return q?{content:q,props:{}}:null;if(typeof x=="object"){if("props"in x||"content"in x){const G=x,$=G.content!==void 0?G.content:q;return $?{content:$,props:G.props??{}}:null}return q?{content:q,props:x}:null}return null})(),Z=M!==null,P=()=>h==null?null:n.jsx("span",{className:Ns("oksPageTitleIcon",w?.icon),children:h}),K=n.jsxs("div",{className:Ns(Ns("oksPageTitle",w?.base),v),style:{color:$k(N,z),...S},"data-color":N,"data-icon-position":C,"data-has-tooltip":Z?"true":"false",children:[C==="start"?P():null,n.jsx(T,{className:Ns(Ns("oksPageTitleTitle",w?.title),b),children:s}),C==="end"?P():null]});if(M){const q={...M.props,content:M.content};return n.jsx(Qe,{...q,children:K})}return K}function Gk(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}var ui=m.forwardRef(({ariaLabel:r,iconSize:s=16,icon:c,iconClassName:d,...u},p)=>{const h=c===void 0?n.jsx(rx,{size:s,className:d}):d?m.isValidElement(c)?m.cloneElement(c,{className:Gk(c.props.className,d)}):n.jsx("span",{className:d,children:c}):c;return n.jsx("button",{ref:p,type:"button","aria-label":r,...u,children:h})});ui.displayName="CloseButton";zt(`@layer components {
  :where(.oksDrawerBackdropContent) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  :where(.oksDrawer) {
    --oks-drawer-width: 420px;
    --oks-drawer-height: 360px;
    --oks-drawer-radius: var(--oks-radius-lg, 0.5rem);
    --oks-drawer-bg: var(--oks-palette-neutral-0, #fff);
    --oks-drawer-shadow: 0 16px 40px rgba(0, 0, 0, 0.18), 0 8px 20px rgba(0, 0, 0, 0.12);
    position: absolute;
    background-color: var(--oks-drawer-bg);
    box-shadow: var(--oks-drawer-shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  :where(.oksDrawer:focus),
  :where(.oksDrawer:focus-visible) {
    outline: none;
  }
  :where(.oksDrawer[data-position=left]) {
    top: 0;
    left: 0;
    bottom: 0;
    width: var(--oks-drawer-width);
    max-width: calc(100vw - var(--oks-space-6, 24px));
  }
  :where(.oksDrawer[data-position=right]) {
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--oks-drawer-width);
    max-width: calc(100vw - var(--oks-space-6, 24px));
  }
  :where(.oksDrawer[data-position=top]) {
    top: 0;
    left: 0;
    right: 0;
    height: var(--oks-drawer-height);
    max-height: calc(100vh - var(--oks-space-6, 24px));
  }
  :where(.oksDrawer[data-position=bottom]) {
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--oks-drawer-height);
    max-height: calc(100vh - var(--oks-space-6, 24px));
  }
  :where(.oksDrawer[data-position=left]),
  :where(.oksDrawer[data-position=right]) {
    border-radius: 0;
  }
  :where(.oksDrawer[data-position=top]),
  :where(.oksDrawer[data-position=bottom]) {
    border-radius: 0;
  }
  :where(.oksDrawerHeader) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--oks-space-3, 12px);
    padding: var(--oks-space-4, 16px);
  }
  :where(.oksDrawerHeaderTitle) {
    min-width: 0;
    flex: 1;
  }
  :where(.oksDrawerBody) {
    padding: var(--oks-space-4, 16px);
    overflow: auto;
    min-height: 0;
    flex: 1;
  }
  :where(.oksDrawerFooter) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--oks-space-2, 8px);
    padding: var(--oks-space-4, 16px);
  }
  :where(.oksDrawerClose) {
    appearance: none;
    border: 0;
    background: transparent;
    color: inherit;
    padding: var(--oks-space-2, 8px);
    margin: calc(var(--oks-space-2, 8px) * -1);
    border-radius: var(--oks-radius-sm, 0.25rem);
    cursor: pointer;
    flex: 0 0 auto;
  }
  :where(.oksDrawerClose:focus-visible) {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
}
`);function Yk(r,s){return[r,typeof s=="string"?s:""].filter(Boolean).join(" ")}function Kk(r){return typeof r=="number"?`${r}px`:r==="sm"?"360px":r==="md"?"420px":r==="lg"?"520px":typeof r=="string"?r:"420px"}function Xk(r){return typeof r=="number"?`${r}px`:r==="sm"?"280px":r==="md"?"360px":r==="lg"?"480px":typeof r=="string"?r:"360px"}function Zk(r){return r==="left"?"slideRight":r==="right"?"slideLeft":r==="top"?"slideDown":"slideUp"}function bo(r){const{isOpen:s,onClose:c,position:d="right",title:u,children:p,actions:h,dismissible:y=!0,closeLabel:x="Close drawer",ariaLabel:v="Drawer",width:b,height:w,closeOnOutsideClick:S=!0,closeOnEscape:z=!0,portal:C=!0,container:T,zIndex:N,blur:M,backgroundOpacity:Z,animationDuration:P,easing:K,initialFocusRef:q,backdrop:I,headers:G,className:$,style:X}=r,ee=`oks-drawer-title-${m.useId().replace(/[:]/g,"")}`,ge=m.useRef(null),re=m.useRef(null);m.useEffect(()=>{if(!s||typeof document>"u")return;re.current=document.activeElement;let ie=!1;const De=()=>{if(ie)return;const ae=q?.current??ge.current;if(ae){ae.focus?.();return}typeof window<"u"&&window.requestAnimationFrame(De)};return De(),()=>{ie=!0;const ae=re.current;ae instanceof HTMLElement&&document.contains(ae)&&ae.focus()}},[q,s]);const be=m.useMemo(()=>Kk(b),[b]),se=m.useMemo(()=>Xk(w),[w]),U={...m.useMemo(()=>({"--oks-drawer-width":be,"--oks-drawer-height":se}),[se,be]),...X??{}},Q=m.useMemo(()=>{if(!I)return{};const{isOpen:ie,onClose:De,children:ae,...ne}=I;return ne},[I]),pe={closeOnOutsideClick:S,closeOnEscape:z,portal:C,...T!==void 0?{container:T}:{},...N!==void 0?{zIndex:N}:{},...M!==void 0?{blur:M}:{},...Z!==void 0?{backgroundOpacity:Z}:{},...P!==void 0?{animationDuration:P}:{},...K!==void 0?{easing:K}:{},animationType:Zk(d),contentFullSize:!0,contentClassName:"oksDrawerBackdropContent",...Q},fe=G?.title??u,{title:k,...F}=G??{},E={as:"h4",...F,...fe!=null?{title:n.jsx("span",{id:ee,children:fe})}:{}},j=y||E.title!==void 0,W=fe!=null?ee:void 0,te=W!==void 0?{"aria-labelledby":W}:{"aria-label":v};return n.jsx(Qn,{isOpen:s,onClose:c,...pe,children:n.jsxs("div",{ref:ge,role:"dialog","aria-modal":"true",tabIndex:-1,"data-position":d,className:Yk("oksDrawer",$),style:U,...te,children:[j?n.jsxs("div",{className:"oksDrawerHeader",children:[n.jsx("div",{className:"oksDrawerHeaderTitle",children:E.title!==void 0&&E.title!==null?n.jsx(Zt,{...E}):null}),y?n.jsx(ui,{className:"oksDrawerClose",ariaLabel:x,onClick:()=>c?.()}):null]}):null,n.jsx("div",{className:"oksDrawerBody",children:p}),h!=null?n.jsx("div",{className:"oksDrawerFooter",children:h}):null]})})}zt(`@layer components {
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
`);function kt(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}function bh(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}function sx(...r){return s=>{for(const c of r)c&&(typeof c=="function"?c(s):c.current=s)}}function Qk(r){return r.startsWith(".$")?r.slice(2):r}function Wk(r){const[s,c]=r.split("-");return{side:s==="top"||s==="bottom"||s==="left"||s==="right"?s:"bottom",align:c==="start"||c==="end"?c:"center"}}var lx=m.createContext(null);function ix(){const r=m.useContext(lx);if(!r)throw new Error("oks-ui Dropdown: missing context.");return r}var cx=m.createContext(null);function Jk(){const r=m.useContext(cx);if(!r)throw new Error("oks-ui DropdownMenu: missing context.");return r}function ei(r){return m.isValidElement(r)&&r.type===He}function e0(r){return m.isValidElement(r)&&r.type===Bs}function t0(r,s){return typeof s.textValue=="string"?s.textValue:typeof s.title=="string"?s.title:typeof s.children=="string"?s.children:String(r)}function ti(r){const s=r.key;if(s==null)return null;if(typeof s=="string"){const c=Qk(s).trim();return c.length>0?c:null}return s}function kh(r,s){for(const c of r)if(!s.has(c))return c;return null}function yh(r,s){for(let c=r.length-1;c>=0;c--){const d=r[c];if(d&&!s.has(d))return d}return null}function wh(r,s,c,d,u){if(r.length===0)return null;const p=c!==null?r.indexOf(c):-1;if(!u){for(let y=p+d;y>=0&&y<r.length;y+=d){const x=r[y];if(x!=null&&!s.has(x))return x}return null}let h=p;for(let y=0;y<r.length;y++){h=(h+d+r.length)%r.length;const x=r[h];if(x!=null&&!s.has(x))return x}return null}function n0(r){return!(r.key.length!==1||r.ctrlKey||r.metaKey||r.altKey)}function Od(r){const s=new Set;for(const c of r??[])s.add(c);return s}var Nt=m.forwardRef((r,s)=>{const{children:c,isOpen:d,defaultOpen:u=!1,onOpenChange:p,placement:h="bottom-start",offset:y=8,containerPadding:x=8,shouldFlip:v=!0,portalContainer:b,isDismissable:w=!0,isKeyboardDismissDisabled:S=!1,shouldCloseOnInteractOutside:z,closeOnSelect:C=!0,classNames:T,className:N,style:M}=r,[Z,P]=m.useState(u),K=d!==void 0?d:Z,q=m.useRef(null),I=m.useRef(null),G=m.useRef("programmatic"),$=m.useRef(void 0),X=m.useId(),me=`oks-dropdown-trigger-${X}`,ee=`oks-dropdown-menu-${X}`,ge=m.useCallback((se,D=!0)=>{if(se||$.current?.(),d===void 0&&P(se),p?.(se),!se&&D){const U=q.current;U&&window.requestAnimationFrame(()=>{U.focus?.()})}},[d,p]),re=m.useCallback(()=>ge(!K,!1),[K,ge]);m.useEffect(()=>{if(!K)return;const se=U=>{U.key==="Escape"&&(S||(U.preventDefault(),ge(!1,!0)))},D=U=>{if(!w)return;const Q=U.target;if(!(Q instanceof Element))return;const pe=q.current,fe=I.current;pe&&pe.contains(Q)||fe&&fe.contains(Q)||z&&!z(Q)||ge(!1,!0)};return document.addEventListener("keydown",se),document.addEventListener("pointerdown",D,{capture:!0}),()=>{document.removeEventListener("keydown",se),document.removeEventListener("pointerdown",D,{capture:!0})}},[K,w,S,ge,z]);const be={open:K,setOpen:ge,toggle:re,openSourceRef:G,menuOnCloseRef:$,placement:h,offset:y,containerPadding:x,shouldFlip:v,portalContainer:b,isDismissable:w,isKeyboardDismissDisabled:S,...z?{shouldCloseOnInteractOutside:z}:{},closeOnSelect:C,triggerRef:q,menuRef:I,triggerId:me,menuId:ee,...T?{baseClassNames:T}:{}};return n.jsx(lx.Provider,{value:be,children:n.jsx("div",{ref:s,className:kt(kt("oksDropdown",T?.base),N),style:M,children:n.jsx("div",{className:kt("oksDropdownContent",T?.content),children:c})})})});Nt.displayName="Dropdown";var Ft=m.forwardRef((r,s)=>{const{children:c}=r,d=ix(),u=c,p=u?.ref,h=x=>{u?.props?.onClick?.(x),!x?.defaultPrevented&&(d.openSourceRef.current="pointer",d.toggle())},y=x=>{u?.props?.onKeyDown?.(x),!x?.defaultPrevented&&(x.key==="Enter"||x.key===" "||x.key==="ArrowDown")&&(x.preventDefault(),d.openSourceRef.current="keyboard",d.setOpen(!0,!1))};return m.cloneElement(c,{id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open?"true":"false","aria-controls":d.menuId,onClick:h,onKeyDown:y,ref:sx(p,s,x=>{d.triggerRef.current=x instanceof HTMLElement?x:null}),className:kt("oksDropdownTrigger",u?.props?.className)})});Ft.displayName="DropdownTrigger";var Et=r=>{const{children:s,items:c,onAction:d,disabledKeys:u,onClose:p,selectionMode:h="none",selectedKeys:y,defaultSelectedKeys:x,onSelectionChange:v,disallowEmptySelection:b=!1,variant:w="solid",color:S="default",autoFocus:z=!1,hideEmptyContent:C=!1,hideSelectedIcon:T=!1,shouldFocusWrap:N=!1,closeOnSelect:M,disableAnimation:Z=!1,classNames:P,itemClasses:K,topContent:q,bottomContent:I,emptyContent:G="No items."}=r,$=ix(),X=M??$.closeOnSelect,me=m.useMemo(()=>Od(u),[u]),ee=m.useMemo(()=>({"--oks-dropdown-tone":bh(S,500),"--oks-dropdown-tone-600":bh(S,600)}),[S]),[ge,re]=m.useState(()=>x==="all"?"all":Od(x)),be=m.useMemo(()=>y==="all"?"all":y!==void 0?Od(y):ge,[y,ge]),se=m.useCallback(le=>{y===void 0&&re(le)},[y]),{side:D,align:U}=m.useMemo(()=>Wk($.placement),[$.placement]),[Q,pe]=m.useState(null),fe=m.useRef(new Map),k=m.useRef(new Map),F=m.useRef({buffer:"",timer:null}),E=m.useRef(null);m.useEffect(()=>{if($.open)return $.menuOnCloseRef.current=p,()=>{$.menuOnCloseRef.current===p&&($.menuOnCloseRef.current=void 0)}},[$.menuOnCloseRef,$.open,p]);const j=m.useCallback(()=>{const le=$.triggerRef.current,je=$.menuRef.current;if(!le||!je)return;const Le=le.getBoundingClientRect(),We=je.getBoundingClientRect(),Ne=di({triggerRect:Le,tooltipRect:We,side:D,align:U,offset:$.offset,collisionPadding:$.containerPadding,shouldFlip:$.shouldFlip,arrowSize:0,arrowPaddingX:0,arrowPaddingY:0,strategy:"fixed"});pe({top:Ne.top,left:Ne.left,placedSide:Ne.placedSide,placedAlign:U})},[U,$.containerPadding,$.offset,$.shouldFlip,$.triggerRef,$.menuRef,D]);m.useEffect(()=>{if(!$.open)return;j();const le=()=>j(),je=()=>j();return window.addEventListener("scroll",le,{passive:!0,capture:!0}),window.addEventListener("resize",je,{passive:!0}),()=>{window.removeEventListener("scroll",le,{capture:!0}),window.removeEventListener("resize",je)}},[$.open,j]),m.useEffect(()=>{if(!$.open)return;const le=$.menuRef.current;if(!le||typeof ResizeObserver>"u")return;const je=new ResizeObserver(()=>j());return je.observe(le),()=>je.disconnect()},[$.open,j]);const W=m.useMemo(()=>{if(c!==void 0){const Ne=s;if(typeof Ne!="function")return[];const Ge=[];for(const _e of c){const Ve=Ne(_e);if(!ei(Ve))continue;const Ye=ti(Ve);Ye&&Ge.push({key:Ye,element:Ve})}return Ge.length>0?[{implicit:!0,items:Ge}]:[]}const le=m.Children.toArray(s),je=[],Le=[];for(const Ne of le){if(e0(Ne)){const Ge=[];if(Ne.props.items!==void 0){const _e=Ne.props.children;if(typeof _e=="function")for(const Ve of Ne.props.items){const Ye=_e(Ve);if(!ei(Ye))continue;const tt=ti(Ye);tt&&Ge.push({key:tt,element:Ye})}}else for(const _e of m.Children.toArray(Ne.props.children)){if(!ei(_e))continue;const Ve=ti(_e);Ve&&Ge.push({key:Ve,element:_e})}Le.push({...Ne.props.title!==void 0?{title:Ne.props.title}:{},...typeof Ne.props["aria-label"]=="string"?{ariaLabel:Ne.props["aria-label"]}:{},...Ne.props.hideSelectedIcon!==void 0?{hideSelectedIcon:Ne.props.hideSelectedIcon}:{},...Ne.props.showDivider!==void 0?{showDivider:Ne.props.showDivider}:{},...Ne.props.classNames?{classNames:Ne.props.classNames}:{},...Ne.props.itemClasses?{itemClasses:Ne.props.itemClasses}:{},items:Ge});continue}if(ei(Ne)){const Ge=ti(Ne);if(!Ge)continue;je.push({key:Ge,element:Ne})}}const We=[];je.length>0&&We.push({implicit:!0,items:je});for(const Ne of Le)We.push(Ne);return We},[s,c]),te=m.useMemo(()=>{const le=[];for(const je of W)for(const Le of je.items)le.push(Le);return le},[W]),ie=m.useMemo(()=>te.map(le=>le.key),[te]),De=m.useMemo(()=>{const le=new Map;for(const je of te)le.set(je.key,je.element.props);return le},[te]),ae=m.useMemo(()=>{const le=new Set(me);for(const je of te)je.element.props.isDisabled&&le.add(je.key);return le},[me,te]),[ne,Re]=m.useState(null),we=m.useCallback((le,je,Le)=>{je?fe.current.set(le,je):fe.current.delete(le),k.current.set(le,Le)},[]),Te=m.useCallback(le=>{if(Re(le),le===null)return;const je=fe.current.get(le);je&&je.focus()},[Re]);m.useEffect(()=>{if(!$.open)return;const je=$.openSourceRef.current==="keyboard"&&z===!1?"first":z,Le=je===!0||je==="first"?kh(ie,ae):je==="last"?yh(ie,ae):null;Re(Le),window.requestAnimationFrame(()=>{Le!==null?fe.current.get(Le)?.focus():E.current?.focus()})},[z,ae,$.open,$.openSourceRef,ie]);const Ee=m.useCallback((le,je)=>{if(ae.has(le))return;if(je.onAction?.(),d?.(le),h!=="none"&&je.isReadOnly!==!0){const We=ie.filter(_e=>!ae.has(_e)),Ne=be==="all"?new Set(We):new Set(be);let Ge=Ne;if(h==="single"){const _e=Ne.has(le);Ne.clear(),_e&&b===!1||Ne.add(le)}else Ne.has(le)?(b===!1||Ne.size>1)&&Ne.delete(le):Ne.add(le);if(Ge=Ne,se(Ge),v){const _e=Ge;_e.anchorKey=le,_e.currentKey=le,v(_e)}}(je.closeOnSelect??X)&&($.setOpen(!1,!0),je.onClose?.())},[X,ae,b,$,ie,d,p,v,be,h,se]),Ae=le=>{if(le.key==="ArrowDown"){le.preventDefault(),Te(wh(ie,ae,ne,1,N));return}if(le.key==="ArrowUp"){le.preventDefault(),Te(wh(ie,ae,ne,-1,N));return}if(le.key==="Home"){le.preventDefault(),Te(kh(ie,ae));return}if(le.key==="End"){le.preventDefault(),Te(yh(ie,ae));return}if(le.key==="Enter"||le.key===" "){if(le.preventDefault(),ne!==null){const je=De.get(ne);je&&Ee(ne,je)}return}if(n0(le)){const je=`${F.current.buffer}${le.key}`.toLowerCase();F.current.timer&&window.clearTimeout(F.current.timer),F.current.buffer=je,F.current.timer=window.setTimeout(()=>{F.current.buffer="",F.current.timer=null},350);const Le=ne!==null?ie.indexOf(ne):-1,We=ie.length;for(let Ne=1;Ne<=We;Ne++){const Ge=(Le+Ne)%We,_e=ie[Ge];if(_e==null||ae.has(_e))continue;if((k.current.get(_e)?.textValue??String(_e)).toLowerCase().startsWith(je)){Te(_e);break}}}},de={disabledKeys:ae,selectionMode:h,selectedKeys:be,setSelectedKeys:se,disallowEmptySelection:b,...d?{onAction:d}:{},...v?{onSelectionChange:v}:{},...p?{onClose:p}:{},onItemAction:Ee,closeOnSelect:X,hideSelectedIcon:T,setOpen:$.setOpen,focusedKey:ne,setFocusedKey:Re,registerItemRef:we,...K?{itemClasses:K}:{},menuVariant:w,menuColor:S,shouldFocusWrap:N,disableAnimation:Z};if(!$.open)return null;const ke=te.length>0,ve=Q===null?$.placement:`${Q.placedSide}-${Q.placedAlign}`;return n.jsx(Or,{container:$.portalContainer,children:n.jsx(cx.Provider,{value:de,children:n.jsxs("div",{ref:le=>{$.menuRef.current=le},id:$.menuId,className:kt("oksDropdownMenu",P?.base),"data-open":"true","data-placement":ve,"data-variant":w,"data-color":S,style:{...ee,position:"fixed",top:Q?.top??-9999,left:Q?.left??-9999},children:[q!=null?n.jsx("div",{className:"oksDropdownTopContent",children:q}):null,n.jsx("div",{ref:E,role:"menu","aria-labelledby":$.triggerId,className:kt("oksDropdownList",P?.list),tabIndex:-1,onKeyDown:Ae,children:ke?W.map((le,je)=>n.jsx(a0,{section:le},je)):C?null:n.jsx("div",{className:kt("oksDropdownEmpty",P?.emptyContent),children:G??null})}),I!=null?n.jsx("div",{className:"oksDropdownBottomContent",children:I}):null]})})})};function a0({section:r}){const c=(r.implicit===!0?!1:r.title===void 0||r.title===null)?r.ariaLabel:void 0,d=r.title!==void 0&&r.title!==null?n.jsx("div",{className:kt("oksDropdownSectionHeading",r.classNames?.heading),children:r.title}):null,u=r.showDivider===!0;return n.jsxs("div",{className:kt("oksDropdownSection",r.classNames?.base),children:[d,n.jsx("div",{role:"group","aria-label":c,className:kt("oksDropdownSectionGroup",r.classNames?.group),children:r.items.map(({key:p,element:h})=>m.cloneElement(h,{itemKey:p,...r.hideSelectedIcon!==void 0?{__sectionHideSelectedIcon:r.hideSelectedIcon}:{},...r.itemClasses?{__sectionItemClasses:r.itemClasses}:{}}))}),u?n.jsx("div",{className:kt("oksDropdownSectionDivider",r.classNames?.divider)}):null]})}var He=m.forwardRef((r,s)=>{const{children:c,title:d,description:u,shortcut:p,startContent:h,endContent:y,selectedIcon:x,showDivider:v=!1,href:b,target:w,rel:S,download:z,ping:C,referrerPolicy:T,isDisabled:N=!1,isSelected:M,isReadOnly:Z=!1,hideSelectedIcon:P,closeOnSelect:K,classNames:q,onPress:I,onPressStart:G,onPressEnd:$,onPressChange:X,onPressUp:me,onKeyDown:ee,onKeyUp:ge,onClick:re,itemKey:be}=r,se=Jk(),D=be??null,U=D!=null&&String(D).trim().length>0,Q=!U||N===!0||se.disabledKeys.has(D),pe=se.selectionMode==="none"?!1:se.selectedKeys==="all"?!0:se.selectedKeys.has(D),fe=typeof M=="boolean"?M:pe,k=se.focusedKey===D,F=se.selectionMode==="multiple"?"menuitemcheckbox":se.selectionMode==="single"?"menuitemradio":"menuitem",E=se.selectionMode==="none"?void 0:fe?"true":"false",j=r.__sectionItemClasses,W=r.__sectionHideSelectedIcon,te=P??W??se.hideSelectedIcon,ie=d??c,De=t0(D??"",r),ae=kt(kt(kt("oksDropdownItem",se.itemClasses?.base),j?.base),q?.base),[ne,Re]=m.useState(!1),we=ke=>{Q||(ne||(G?.(ke),X?.(!0)),Re(!0))},Te=ke=>{ne&&($?.(ke),X?.(!1)),Re(!1)},Ee=()=>{Q||U&&(se.setFocusedKey(D),se.onItemAction(D,r))},Ae=b?"a":"div",de=n.jsxs(Ae,{ref:sx(s,ke=>{U&&se.registerItemRef(D,ke instanceof HTMLElement?ke:null,{key:D,disabled:Q,textValue:De})}),role:F,"aria-checked":E,"aria-disabled":Q?"true":void 0,tabIndex:-1,"data-disabled":Q?"true":"false","data-selected":fe?"true":"false","data-focused":k?"true":"false",className:ae,href:b,target:w,rel:S,download:z,ping:C,referrerPolicy:T,onMouseMove:()=>{Q||se.setFocusedKey(D)},onFocus:()=>{Q||se.setFocusedKey(D)},onPointerDown:ke=>{we(ke)},onPointerUp:ke=>{Q||(me?.(ke),Te(ke))},onPointerLeave:ke=>{Te(ke)},onPointerCancel:ke=>{Te(ke)},onKeyDown:ke=>{ee?.(ke),!ke.defaultPrevented&&(ke.key==="Enter"||ke.key===" ")&&we(ke)},onKeyUp:ke=>{if(ge?.(ke),!ke.defaultPrevented&&(ke.key==="Enter"||ke.key===" ")){if(Q)return;me?.(ke),Te(ke)}},onBlur:ke=>{Te(ke)},onClick:ke=>{re?.(ke),!ke.defaultPrevented&&(Q||(I?.(ke),Ee()))},children:[h!=null?n.jsx("span",{className:"oksDropdownItemStartContent","aria-hidden":"true",children:h}):null,n.jsxs("span",{className:kt(kt(kt("oksDropdownItemWrapper",se.itemClasses?.wrapper),j?.wrapper),q?.wrapper),children:[n.jsx("span",{className:kt(kt(kt("oksDropdownItemTitle",se.itemClasses?.title),j?.title),q?.title),children:ie}),u!=null?n.jsx("span",{className:kt(kt(kt("oksDropdownItemDescription",se.itemClasses?.description),j?.description),q?.description),children:u}):null]}),p!=null?n.jsx("span",{className:kt(kt(kt("oksDropdownItemShortcut",se.itemClasses?.shortcut),j?.shortcut),q?.shortcut),children:p}):null,y!=null?n.jsx("span",{className:"oksDropdownItemEndContent","aria-hidden":"true",children:y}):fe&&te!==!0?n.jsx("span",{className:kt(kt(kt("oksDropdownItemSelectedIcon",se.itemClasses?.selectedIcon),j?.selectedIcon),q?.selectedIcon),"aria-hidden":"true",children:x??"✓"}):null]});return v?n.jsxs(n.Fragment,{children:[de,n.jsx("div",{className:"oksDropdownItemDivider","aria-hidden":"true"})]}):de});He.displayName="DropdownItem";var Bs=r=>null;Bs.displayName="DropdownSection";zt(`@layer components {
  :where(.oksModal) {
    --oks-modal-width: 640px;
    --oks-modal-radius: var(--oks-radius-lg, 0.5rem);
    --oks-modal-bg: var(--oks-palette-neutral-0, #fff);
    --oks-modal-shadow: 0 16px 40px rgba(0, 0, 0, 0.18), 0 8px 20px rgba(0, 0, 0, 0.12);
    width: var(--oks-modal-width);
    max-width: calc(100vw - var(--oks-space-6, 24px));
    max-height: calc(100vh - var(--oks-space-6, 24px));
    background-color: var(--oks-modal-bg);
    border-radius: var(--oks-modal-radius);
    box-shadow: var(--oks-modal-shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  :where(.oksModal:focus),
  :where(.oksModal:focus-visible) {
    outline: none;
  }
  :where(.oksModalHeader) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--oks-space-3, 12px);
    padding: var(--oks-space-4, 16px);
  }
  :where(.oksModalHeaderTitle) {
    min-width: 0;
    flex: 1;
  }
  :where(.oksModalBody) {
    padding: var(--oks-space-4, 16px);
    overflow: auto;
    min-height: 0;
    flex: 1;
  }
  :where(.oksModalFooter) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--oks-space-2, 8px);
    padding: var(--oks-space-4, 16px);
  }
  :where(.oksModalClose) {
    appearance: none;
    border: 0;
    background: transparent;
    color: inherit;
    padding: var(--oks-space-2, 8px);
    margin: calc(var(--oks-space-2, 8px) * -1);
    border-radius: var(--oks-radius-sm, 0.25rem);
    cursor: pointer;
    flex: 0 0 auto;
  }
  :where(.oksModalClose:focus-visible) {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
}
`);function o0(r,s){return[r,typeof s=="string"?s:""].filter(Boolean).join(" ")}function r0(r){return typeof r=="number"?`${r}px`:r==="sm"?"420px":r==="md"?"640px":r==="lg"?"860px":typeof r=="string"?r:"640px"}function Ho(r){const{isOpen:s,onClose:c,title:d,children:u,actions:p,size:h="md",dismissible:y=!0,closeLabel:x="Close modal",closeOnOutsideClick:v=!0,closeOnEscape:b=!0,portal:w=!0,container:S,zIndex:z,blur:C,backgroundOpacity:T,animationDuration:N,animationType:M,easing:Z,initialFocusRef:P,backdrop:K,headers:q,divider:I,className:G,style:$}=r,me=`oks-modal-title-${m.useId().replace(/[:]/g,"")}`,ee=m.useRef(null),ge=m.useRef(null);m.useEffect(()=>{if(!s||typeof document>"u")return;ge.current=document.activeElement;let W=!1;const te=()=>{if(W)return;const ie=P?.current??ee.current;if(ie){ie.focus?.();return}typeof window<"u"&&window.requestAnimationFrame(te)};return te(),()=>{W=!0;const ie=ge.current;ie instanceof HTMLElement&&document.contains(ie)&&ie.focus()}},[s,P]);const re=m.useMemo(()=>r0(h),[h]),se={...m.useMemo(()=>({"--oks-modal-width":re}),[re]),...$??{}},D=m.useMemo(()=>{if(!K)return{};const{isOpen:W,onClose:te,children:ie,...De}=K;return De},[K]),U={closeOnOutsideClick:v,closeOnEscape:b,portal:w,...S!==void 0?{container:S}:{},...z!==void 0?{zIndex:z}:{},...C!==void 0?{blur:C}:{},...T!==void 0?{backgroundOpacity:T}:{},...N!==void 0?{animationDuration:N}:{},...M!==void 0?{animationType:M}:{},...Z!==void 0?{easing:Z}:{},...D},Q=q?.title??d,{title:pe,...fe}=q??{},k={as:"h4",...fe,...Q!=null?{title:n.jsx("span",{id:me,children:Q})}:{}},F=y||k.title!==void 0,E=Q!=null?me:void 0,j={color:"secondary",colorDepth:200,...I??{}};return n.jsx(Qn,{isOpen:s,onClose:c,...U,children:n.jsxs("div",{ref:ee,role:"dialog","aria-modal":"true","aria-labelledby":E,tabIndex:-1,className:o0("oksModal",G),style:se,children:[F?n.jsxs("div",{className:"oksModalHeader",children:[n.jsx("div",{className:"oksModalHeaderTitle",children:k.title!==void 0&&k.title!==null?n.jsx(Zt,{...k}):null}),y?n.jsx(ui,{className:"oksModalClose",ariaLabel:x,onClick:()=>c?.()}):null]}):null,F?n.jsx(fa,{...j}):null,n.jsx("div",{className:"oksModalBody",children:u}),p!=null?n.jsx("div",{className:"oksModalFooter",children:p}):null]})})}function Ht(r){return null}Ht.displayName="Tab";zt(`@layer components {
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
`);function ho(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}function Ad(r,s){const c=`var(--oks-color-default-${s}, var(--oks-color-primary-${s}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${s}, ${c})`}function Ed(r){return String(r).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function jh(r){return m.isValidElement(r)&&r.type===Ht}function Sh(r){return r.startsWith(".$")?r.slice(2):r}function Ch(r,s){for(const c of r)if(!s.has(c))return c}var pi=m.forwardRef(function(s,c){const{children:d,variant:u="solid",color:p="default",size:h="md",radius:y="full",fullWidth:x=!1,items:v,disabledKeys:b,selectedKey:w,defaultSelectedKey:S,shouldSelectOnPressUp:z=!0,keyboardActivation:C="automatic",disableCursorAnimation:T=!1,isDisabled:N=!1,disableAnimation:M=!1,classNames:Z,className:P,placement:K="top",isVertical:q=!1,destroyInactiveTabPanel:I=!0,onSelectionChange:G,...$}=s,X=m.useMemo(()=>{if(v!==void 0){const ke=d;if(typeof ke!="function")return[];const ve=[];for(const le of v){const je=ke(le);if(!jh(je))continue;const Le=je.key;Le!=null&&ve.push({key:typeof Le=="string"?Sh(Le):Le,props:je.props})}return ve}const de=[];for(const ke of m.Children.toArray(d)){if(!jh(ke))continue;const ve=ke.key;ve!=null&&de.push({key:typeof ve=="string"?Sh(ve):ve,props:ke.props})}return de},[d,v]),me=m.useMemo(()=>{const de=new Set;for(const ke of b??[])de.add(ke);for(const ke of X)ke.props.isDisabled&&de.add(ke.key);return de},[b,X]),ee=m.useMemo(()=>X.map(de=>de.key),[X]),ge=w!==void 0,[re,be]=m.useState(()=>S!==void 0?S:Ch(ee,me)),se=m.useMemo(()=>q?!0:K==="start"||K==="end",[q,K]),D=m.useMemo(()=>q?"start":K,[q,K]),U=m.useMemo(()=>{const de=ge?w:re;return de!=null&&ee.includes(de)&&!me.has(de)?de:Ch(ee,me)},[ge,me,re,ee,w]),Q=m.useCallback(de=>{N||me.has(de)||ee.includes(de)&&(ge||be(de),G?.(de))},[ge,me,N,ee,G]),pe=m.useRef(new Map),fe=m.useCallback((de,ke)=>{pe.current.set(de,ke)},[]),k=m.useId(),F=m.useMemo(()=>`oks-${$.id?Ed($.id):Ed(`tabs-${k}`)}`,[k,$.id]),E=m.useCallback(de=>{const ke=Ed(de);return{tab:`${F}-tab-${ke}`,panel:`${F}-panel-${ke}`}},[F]),j=m.useRef(null),W=m.useRef(null),te=m.useCallback(()=>{if(u!=="underlined")return;const de=j.current,ke=W.current;if(!de||!ke)return;const ve=U;if(ve===void 0)return;const le=pe.current.get(ve);if(!le)return;const je=de.getBoundingClientRect(),Le=le.getBoundingClientRect();if(se){const We=Math.max(0,Le.top-je.top),Ne=Le.height;ke.style.setProperty("--oks-tabs-cursor-y",`${We}px`),ke.style.setProperty("--oks-tabs-cursor-h",`${Ne}px`)}else{const We=Math.max(0,Le.left-je.left),Ne=Le.width;ke.style.setProperty("--oks-tabs-cursor-x",`${We}px`),ke.style.setProperty("--oks-tabs-cursor-w",`${Ne}px`)}},[se,U,u]);m.useEffect(()=>{te()},[te]),m.useEffect(()=>{if(u!=="underlined")return;const de=()=>te();return window.addEventListener("resize",de),()=>window.removeEventListener("resize",de)},[te,u]);const ie=de=>{if(N||!j.current)return;const ve=ee;if(ve.length===0)return;const le=globalThis.document?.activeElement,je=(()=>{for(const Ve of ve){const Ye=pe.current.get(Ve);if(Ye&&le&&Ye===le)return Ve}return U})(),Le=je!==void 0?ve.indexOf(je):-1,We=Ve=>{if(ve.length===0)return;let Ye=Le>=0?Le:0;for(let tt=0;tt<ve.length;tt++){Ye=(Ye+Ve+ve.length)%ve.length;const Ie=ve[Ye];if(me.has(Ie))continue;pe.current.get(Ie)?.focus(),C==="automatic"&&Q(Ie);return}},Ne=Ve=>{const Ye=Ve==="start"?ve:[...ve].reverse();for(const tt of Ye){if(me.has(tt))continue;pe.current.get(tt)?.focus(),C==="automatic"&&Q(tt);return}},Ge=!se,_e=de.key;if(_e==="Home"){de.preventDefault(),Ne("start");return}if(_e==="End"){de.preventDefault(),Ne("end");return}if(Ge&&_e==="ArrowRight"||!Ge&&_e==="ArrowDown"){de.preventDefault(),We(1);return}if(Ge&&_e==="ArrowLeft"||!Ge&&_e==="ArrowUp"){de.preventDefault(),We(-1);return}if(C==="manual"&&(_e==="Enter"||_e===" ")){if(!le)return;for(const Ve of ve){const Ye=pe.current.get(Ve);if(Ye&&Ye===le){de.preventDefault(),Q(Ve);return}}}},De=ho(ho("oksTabsRoot",Z?.base),P),ae=ho("oksTablist",Z?.tabList),ne=ho("oksTabsCursor",Z?.cursor),Re="oksTabsPanels",we=ho("oksTabsPanel",Z?.panel),Ee={...{"--oks-tabs-tone":Ad(p,500),"--oks-tabs-tone-50":Ad(p,50),"--oks-tabs-tone-700":Ad(p,700)},...$.style??{}},Ae=m.useMemo(()=>{if(U!==void 0)return X.find(de=>de.key===U)},[X,U]);return n.jsxs("div",{...$,ref:c,className:De,style:Ee,"data-variant":u,"data-color":p,"data-size":h,"data-radius":y,"data-full-width":x?"true":"false","data-placement":D,"data-vertical":se?"true":"false","data-disabled":N?"true":"false","data-motion":M?"reduced":"default","data-disable-cursor-animation":T?"true":"false",children:[n.jsxs("div",{className:ae,role:"tablist","aria-orientation":se?"vertical":"horizontal",ref:j,onKeyDown:ie,children:[u==="underlined"?n.jsx("div",{className:ne,ref:W,"aria-hidden":"true"}):null,X.map(de=>{const ke=de.key===U,ve=N||me.has(de.key),le=E(de.key),je=ho("oksTabsTabWrapper",Z?.tabWrapper),Le=ho("oksTabsTab",Z?.tab),We=ho("oksTabsTabContent",Z?.tabContent),Ne=de.props.shouldSelectOnPressUp??z,Ge=()=>Q(de.key),_e=tt=>{fe(de.key,tt),de.props.tabRef&&(de.props.tabRef.current=tt)},Ve={role:"tab",id:le.tab,"aria-selected":ke,"aria-controls":le.panel,tabIndex:ke?0:-1,"data-selected":ke?"true":void 0,"data-disabled":ve?"true":void 0},Ye=n.jsx("span",{className:We,children:de.props.title});return n.jsx("div",{className:je,children:de.props.href?n.jsx("a",{...Ve,className:Le,href:de.props.href,target:de.props.target,rel:de.props.rel,download:de.props.download,ping:de.props.ping,referrerPolicy:de.props.referrerPolicy,"aria-disabled":ve?"true":void 0,onClick:ve?tt=>{tt.preventDefault()}:Ne?()=>Ge():void 0,onMouseDown:ve||Ne?void 0:tt=>{tt.preventDefault(),Ge()},ref:_e,children:Ye}):n.jsx("button",{...Ve,type:"button",className:Le,disabled:ve,onClick:Ne?Ge:void 0,onMouseDown:Ne?void 0:tt=>{tt.preventDefault(),Ge()},ref:_e,children:Ye})},String(de.key))})]}),n.jsx("div",{className:Re,children:I?Ae?n.jsx("div",{className:we,role:"tabpanel",id:E(Ae.key).panel,"aria-labelledby":E(Ae.key).tab,children:Ae.props.children}):null:X.map(de=>{const ke=de.key===U,ve=E(de.key);return n.jsx("div",{className:we,role:"tabpanel",id:ve.panel,"aria-labelledby":ve.tab,hidden:!ke,children:de.props.children},String(de.key))})})]})});pi.displayName="Tabs";function s0(r){return r.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")}function zd(){return typeof window<"u"&&typeof document<"u"}function l0(r){const s=m.useCallback(()=>!zd()||!r?null:new URL(window.location.href).searchParams.get(r),[r]),c=m.useCallback(u=>{if(!zd()||!r)return;const p=new URL(window.location.href),h=p.searchParams;u==null||u===""?h.delete(r):h.set(r,u);const y=`${p.pathname}?${h.toString()}${p.hash??""}`;window.history.pushState({},"",y);const x=new PopStateEvent("popstate");window.dispatchEvent(x)},[r]),d=m.useCallback(u=>{if(!zd()||!r)return()=>{};const p=()=>u(s());return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[s,r]);return{get:s,set:c,subscribe:d}}function i0(r,s){return{...r??{},...s??{}}}var c0=m.forwardRef(function(s,c){const{data:d,defaultTab:u=0,value:p,onChange:h,className:y,orientation:x="horizontal",tablistPosition:v="start",mode:b="basic",tabId:w="tab",variant:S,size:z,radius:C,triggerProps:T,activeTriggerProps:N,allowKeyboardNavigation:M=!0,renderLazy:Z=!0,idStrategy:P}=s,K=m.useMemo(()=>d.map(ae=>({...ae,id:ae.id??(P?P(ae.title):s0(ae.title))})),[d,P]),q=l0(b==="url"?w:void 0),I=m.useCallback(ae=>ae>=0&&ae<K.length?ae:0,[K.length]),G=m.useCallback(()=>{if(b!=="url")return null;const ae=q.get();if(!ae)return null;const ne=K.findIndex(Re=>Re.id===ae);return ne>=0?ne:null},[K,b,q]),$=m.useMemo(()=>{const ae=G();return ae!==null?ae:I(u)},[u,I,G]),X=typeof p=="number",[me,ee]=m.useState($),ge=X?p:me;m.useEffect(()=>b!=="url"?void 0:q.subscribe(ne=>{const Re=ne?K.findIndex(we=>we.id===ne):-1;if(Re>=0)X||ee(Re),h?.(Re);else{const we=I(u);X||ee(we),h?.(we)}}),[u,I,X,K,b,h,q]);const re=["oksTabsRoot",y].filter(Boolean).join(" "),be=m.useRef([]);be.current=[];const se=ae=>{be.current[ae]?.focus()},D=ae=>{if(X||ee(ae),h?.(ae),b==="url"){const ne=K[ae]?.id;ne&&q.set(ne)}},U=ae=>ne=>{ne.preventDefault(),D(ae)},Q=ae=>ne=>{if(!M)return;const Re=x==="horizontal",we=ne.key;if(we==="Home"){ne.preventDefault(),se(0);return}if(we==="End"){ne.preventDefault(),se(K.length-1);return}if(Re&&we==="ArrowRight"||!Re&&we==="ArrowDown"){ne.preventDefault();const Te=(ae+1)%K.length;se(Te);return}if(Re&&we==="ArrowLeft"||!Re&&we==="ArrowUp"){ne.preventDefault();const Te=(ae-1+K.length)%K.length;se(Te);return}(we==="Enter"||we===" ")&&(ne.preventDefault(),D(ae))},pe=z??"comfortable",fe=pe==="compact"?"sm":"md";let k="underline",F={height:4},E={underline:{}};const j=S;j&&(j==="underlineThick"&&(k="underline"),j==="segmented"&&(k="segmented"),j==="pill"&&(k="pill"),j==="dot"&&(k="dot"),j==="outline"&&(k="outline"),j==="underlineThick"?(F={height:4,...F},E={underline:{widthStrategy:"tab"}}):j==="outline"&&(E={outline:{activeEmphasis:"stroke"}}));const W=ae=>ae?i0(T,N):T??{},te=m.useRef(null),ie=m.useRef(null);m.useEffect(()=>{if(k!=="underline")return;const ae=te.current,ne=ie.current,Re=be.current[ge];if(!ae||!ne||!Re)return;const we=ae.getBoundingClientRect(),Te=Re.getBoundingClientRect();if(x==="horizontal"){const Ee=Math.max(0,Te.left-we.left),Ae=Te.width,de=typeof F?.height=="number"?`${F?.height}px`:F?.height??"2px";ne.style.setProperty("--oks-tabs-indicator-x",`${Ee}px`),ne.style.setProperty("--oks-tabs-indicator-w",`${Ae}px`),ne.style.setProperty("--oks-tabs-indicator-h",de),F?.color&&ne.style.setProperty("--oks-tabs-indicator-color",F.color)}else{const Ee=Math.max(0,Te.top-we.top),Ae=Te.height,de=typeof F?.height=="number"?`${F?.height}px`:F?.height??"2px";ne.style.setProperty("--oks-tabs-indicator-y",`${Ee}px`),ne.style.setProperty("--oks-tabs-indicator-h",`${Ae}px`),ne.style.setProperty("--oks-tabs-indicator-w",de),F?.color&&ne.style.setProperty("--oks-tabs-indicator-color",F.color)}},[ge,k,F,x]),m.useEffect(()=>{if(k!=="underline")return;const ae=()=>{const ne=ie.current;if(!ne)return;const Re=ge,we=be.current[Re],Te=te.current;if(!we||!Te)return;const Ee=Te.getBoundingClientRect(),Ae=we.getBoundingClientRect();if(x==="horizontal"){const de=Math.max(0,Ae.left-Ee.left),ke=Ae.width;ne.style.setProperty("--oks-tabs-indicator-x",`${de}px`),ne.style.setProperty("--oks-tabs-indicator-w",`${ke}px`)}else{const de=Math.max(0,Ae.top-Ee.top),ke=Ae.height;ne.style.setProperty("--oks-tabs-indicator-y",`${de}px`),ne.style.setProperty("--oks-tabs-indicator-h",`${ke}px`)}};return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[ge,k,x]);const De=ae=>typeof ae=="function"?ae():ae;return n.jsxs("div",{className:re,"data-orientation":x,"data-tablist-position":v,"data-density":pe,style:{...C!==void 0?{"--oks-tabs-radius":typeof C=="number"?`${C}px`:C==="none"?"0px":C==="sm"?"0.25rem":C==="md"?"0.5rem":C==="lg"?"0.75rem":C==="full"?"9999px":void 0}:void 0},ref:c,children:[n.jsxs("div",{className:"oksTablist",role:"tablist","aria-orientation":x,"data-appearance":k,"data-underline-position":E?.underline?.position,"data-outline-active":E?.outline?.activeEmphasis,ref:te,children:[k==="underline"?n.jsx("div",{className:"oksTabsIndicator",ref:ie,"aria-hidden":"true"}):null,K.map((ae,ne)=>{const Re=ne===ge,we=W(Re),Te=`oks-tab-${ae.id}`,Ee=`oks-panel-${ae.id}`;return n.jsx("button",{...we,ref:Ae=>{be.current[ne]=Ae},role:"tab","aria-selected":Re,"aria-controls":Ee,id:Te,tabIndex:Re?0:-1,title:ae.title,onClick:U(ne),onKeyDown:Q(ne),"data-active":Re?"true":"false","data-size":fe,"data-elevated":k==="pill"&&E?.pill?.elevated&&Re?"true":void 0,className:["oksTabTrigger",we?.className].filter(Boolean).join(" "),children:ae.title},ae.id)})]}),n.jsx("div",{className:"oksTabsPanels",children:Z?n.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${K[ge]?.id}`,"aria-labelledby":`oks-tab-${K[ge]?.id}`,children:De(K[ge]?.content)}):K.map((ae,ne)=>n.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${ae.id}`,"aria-labelledby":`oks-tab-${ae.id}`,hidden:ne!==ge,children:De(ae.content)},ae.id))})]})});c0.displayName="TabsLegacy";var dx=m.createContext(null);function iu(){const r=m.useContext(dx);if(!r)throw new Error("oks-ui Tabs: TabsRoot is required");return r}function Rd(r){return String(r).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function Md(){return typeof window<"u"&&typeof document<"u"}function d0(r){const s=m.useCallback(()=>!Md()||!r?null:new URL(window.location.href).searchParams.get(r),[r]),c=m.useCallback(u=>{if(!Md()||!r)return;const p=new URL(window.location.href),h=p.searchParams;u==null||u===""?h.delete(r):h.set(r,u);const y=`${p.pathname}?${h.toString()}${p.hash??""}`;window.history.pushState({},"",y);const x=new PopStateEvent("popstate");window.dispatchEvent(x)},[r]),d=m.useCallback(u=>{if(!Md()||!r)return()=>{};const p=()=>u(s());return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[s,r]);return{get:s,set:c,subscribe:d}}var u0=m.forwardRef(function(s,c){const{id:d,value:u,defaultValue:p,onChange:h,mode:y="basic",tabId:x="tab",orientation:v="horizontal",tablistPosition:b="start",variant:w,size:S="comfortable",radius:z,renderLazy:C=!0,className:T,children:N}=s,M=d0(y==="url"?x:void 0),Z=m.useMemo(()=>{if(y==="url"){const re=M.get();if(re!==null)return re}return p},[p,y,M]),P=u!==void 0,[K,q]=m.useState(Z),I=P?u:K;m.useEffect(()=>y!=="url"?void 0:M.subscribe(be=>{be!==null&&(P||q(be),h?.(be))}),[P,y,h,M]);const G=m.useCallback(re=>{P||q(re),h?.(re),y==="url"&&M.set(String(re))},[P,y,h,M]),$=m.useId(),X=m.useMemo(()=>`oks-${Rd(d||`tabs-${$}`)}`,[$,d]),me=m.useCallback(re=>{const be=Rd(re);return{tab:`${X}-tab-${be}`,panel:`${X}-panel-${be}`}},[X]),ee=m.useMemo(()=>{let re="underline",be={height:4},se={underline:{widthStrategy:"tab"}};const D=w;return D&&(D==="underlineThick"&&(re="underline"),D==="segmented"&&(re="segmented"),D==="pill"&&(re="pill"),D==="dot"&&(re="dot"),D==="outline"&&(re="outline"),D==="underlineThick"?(be={height:4},se={underline:{widthStrategy:"tab"}}):D==="outline"&&(se={outline:{activeEmphasis:"stroke"}})),{value:I,setValue:G,orientation:v,appearance:re,density:S,radius:z,indicator:be,appearanceOptions:se,renderLazy:C,getIds:me,isActive:U=>U===I}},[w,S,I,me,v,z,C,G]),ge=["oksTabsRoot",T].filter(Boolean).join(" ");return n.jsx(dx.Provider,{value:ee,children:n.jsx("div",{ref:c,id:d,className:ge,"data-orientation":v,"data-tablist-position":b,"data-density":S,"data-underline-position":ee.appearanceOptions?.underline?.position==="top"?"top":void 0,style:{...z!==void 0?{"--oks-tabs-radius":typeof z=="number"?`${z}px`:z==="none"?"0px":z==="sm"?"0.25rem":z==="md"?"0.5rem":z==="lg"?"0.75rem":z==="full"?"9999px":void 0}:void 0},children:N})})});u0.displayName="TabsRoot";var p0=m.forwardRef(function(s,c){const{className:d,...u}=s,p=iu(),h=m.useRef(null),y=["oksTablist",d].filter(Boolean).join(" "),x=m.useRef(null),v=b=>{const w=h.current;if(!w)return;const S=Array.from(w.querySelectorAll('[role="tab"]'));if(S.length===0)return;const z=p.orientation==="horizontal",C=S.findIndex(N=>N.getAttribute("aria-selected")==="true"),T=b.key;if(T==="Home"){b.preventDefault(),S[0]?.focus();return}if(T==="End"){b.preventDefault(),S[S.length-1]?.focus();return}if(z&&T==="ArrowRight"||!z&&T==="ArrowDown"){b.preventDefault();const N=(C+1)%S.length;S[N]?.focus();return}if(z&&T==="ArrowLeft"||!z&&T==="ArrowUp"){b.preventDefault();const N=(C-1+S.length)%S.length;S[N]?.focus();return}};return m.useEffect(()=>{if(p.appearance!=="underline")return;const b=h.current,w=x.current;if(!b||!w)return;const S=b.querySelector('[role="tab"][aria-selected="true"]');if(!S)return;const z=b.getBoundingClientRect(),C=S.getBoundingClientRect(),T=S.querySelector(".oksTabLabel"),M=(p.appearanceOptions?.underline?.widthStrategy??"tab")==="label"&&T?T.getBoundingClientRect().width:C.width,Z=p.appearanceOptions?.underline?.offset??0,P=p.appearanceOptions?.underline?.cap??"square";if(p.orientation==="horizontal"){const K=Math.max(0,C.left-z.left),q=M,I=typeof p.indicator?.height=="number"?`${p.indicator.height}px`:p.indicator?.height??"2px";w.style.setProperty("--oks-tabs-indicator-x",`${K}px`),w.style.setProperty("--oks-tabs-indicator-w",`${q}px`),w.style.setProperty("--oks-tabs-indicator-h",I),p.indicator?.color&&w.style.setProperty("--oks-tabs-indicator-color",p.indicator.color),w.style.setProperty("--oks-tabs-indicator-offset-y",`${Z}px`),w.style.setProperty("--oks-tabs-indicator-radius",P==="round"?"9999px":"0px")}else{const K=Math.max(0,C.top-z.top),q=C.height,I=typeof p.indicator?.height=="number"?`${p.indicator.height}px`:p.indicator?.height??"2px";w.style.setProperty("--oks-tabs-indicator-y",`${K}px`),w.style.setProperty("--oks-tabs-indicator-h",`${q}px`),w.style.setProperty("--oks-tabs-indicator-w",I),p.indicator?.color&&w.style.setProperty("--oks-tabs-indicator-color",p.indicator.color),w.style.setProperty("--oks-tabs-indicator-offset-x",`${Z}px`),w.style.setProperty("--oks-tabs-indicator-radius",P==="round"?"9999px":"0px")}},[p.value,p.appearance,p.indicator,p.orientation]),m.useEffect(()=>{if(p.appearance!=="underline")return;const b=()=>{const w=h.current,S=x.current;if(!w||!S)return;const z=w.querySelector('[role="tab"][aria-selected="true"]');if(!z)return;const C=w.getBoundingClientRect(),T=z.getBoundingClientRect();if(p.orientation==="horizontal"){const N=Math.max(0,T.left-C.left),M=T.width;S.style.setProperty("--oks-tabs-indicator-x",`${N}px`),S.style.setProperty("--oks-tabs-indicator-w",`${M}px`)}else{const N=Math.max(0,T.top-C.top),M=T.height;S.style.setProperty("--oks-tabs-indicator-y",`${N}px`),S.style.setProperty("--oks-tabs-indicator-h",`${M}px`)}};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[p.appearance,p.orientation,p.value]),n.jsxs("div",{...u,className:y,role:"tablist","aria-orientation":p.orientation,"data-appearance":p.appearance,"data-outline-active":p.appearanceOptions?.outline?.activeEmphasis,"data-underline-position":p.appearanceOptions?.underline?.position,ref:b=>{h.current=b,typeof c=="function"?c(b):c&&"current"in c&&(c.current=b)},onKeyDown:v,children:[p.appearance==="underline"?n.jsx("div",{className:"oksTabsIndicator",ref:x,"aria-hidden":"true"}):null,s.children]})});p0.displayName="TabList";var f0=m.forwardRef(function(s,c){const{value:d,disabled:u,className:p,children:h}=s,y=iu(),x=y.isActive(d),v=y.getIds(d),b=y.density==="compact"?"sm":"md",w=["oksTabTrigger",p].filter(Boolean).join(" ");return n.jsx("button",{ref:c,className:w,role:"tab",id:v.tab,"aria-selected":x,"aria-controls":v.panel,tabIndex:x?0:-1,disabled:u,"data-active":x?"true":"false","data-size":b,"data-elevated":y.appearance==="pill"&&y.appearanceOptions?.pill?.elevated&&x?"true":void 0,onClick:()=>y.setValue(d),children:n.jsx("span",{className:"oksTabLabel",children:h})})});f0.displayName="TabTrigger";var m0=m.forwardRef(function(s,c){const{value:d,keepMounted:u,className:p,children:h}=s,y=iu(),x=y.getIds(d),v=y.isActive(d),b=["oksTabsPanel",p].filter(Boolean).join(" ");return!v&&u===void 0&&y.renderLazy?null:n.jsx("div",{ref:c,role:"tabpanel",id:x.panel,"aria-labelledby":x.tab,hidden:!v,className:b,children:h})});m0.displayName="TabPanel";zt(`@layer components {
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
`);var ux=m.createContext(null);function dn(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}function h0(r){if(!r||typeof r!="object"||m.isValidElement(r))return!1;const s=r;return"type"in s||"tone"in s||"color"in s||"severity"in s||"variant"in s||"radius"in s||"size"in s||"position"in s||"placement"in s||"duration"in s||"timeout"in s||"persistent"in s||"dismissible"in s||"hideCloseButton"in s||"action"in s||"title"in s||"message"in s||"description"in s||"icon"in s||"showIcon"in s||"hideIcon"in s||"endContent"in s||"closeIcon"in s||"loadingComponent"in s||"promise"in s||"classNames"in s||"id"in s||"className"in s||"style"in s}function x0(r){const s={};for(const c in r)Object.prototype.hasOwnProperty.call(r,c)&&r[c]!==void 0&&(s[c]=r[c]);return s}function g0(r,s){return h0(r)?{...r,...s??{}}:{message:r,...s??{}}}function v0(r){return r==="success"?"success":r==="warning"?"warning":r==="error"?"danger":r==="info"?"info":"primary"}function px(r){return!0}function b0(r){return"alert"}function fx(r){return r==="flat"?"soft":r==="bordered"?"outline":r}function mx(r){return r==="success"?"success":r==="warning"?"warning":r==="danger"?"error":"default"}function hx(r){if(!(!r||r==="default"))return r}function k0(r,s){const c=fx(r),d=`var(--oks-color-${s}-600, var(--oks-color-primary-600, #2563eb))`,u=`var(--oks-color-${s}-50, var(--oks-color-primary-50, #eff6ff))`,p=`var(--oks-color-${s}-900, var(--oks-color-primary-900, #0b1220))`;return c==="solid"?{accent:d,bg:d,fg:"white",border:d}:c==="outline"?{accent:d,bg:"transparent",fg:p,border:d}:{accent:d,bg:u,fg:p,border:d}}function y0(r,s){return s.type==="UPSERT"?[s.item,...r.filter(d=>d.id!==s.item.id)].slice(0,Math.max(1,s.maxToasts)):s.type==="PATCH"?r.map(c=>{if(c.id!==s.id)return c;const d=x0(s.patch),u=d.severity??d.color,p=d.type??(u!==void 0?mx(u):c.type),h=d.tone??(u!==void 0?hx(u)??c.tone:c.tone),y=d.variant??c.variant,x=d.size??c.size,v=d.placement??d.position??c.position,b=d.persistent===!0?null:d.timeout!==void 0?d.timeout:d.duration!==void 0?d.duration:c.duration,w=d.hideIcon!==void 0?!d.hideIcon:d.showIcon!==void 0?d.showIcon:d.type!==void 0||u!==void 0?px():c.showIcon,S=d.shouldShowTimeoutProgress??d.showDurationBar;return{...c,...d,type:p,tone:h,variant:y,size:x,position:v,duration:b,message:d.message!==void 0?d.message:c.message,description:d.description!==void 0?d.description:c.description,showDurationBar:!!S&&b!=null,dismissible:d.dismissible??(d.hideCloseButton!==void 0?!d.hideCloseButton:c.dismissible),showIcon:w,state:c.state}}):s.type==="MARK_CLOSING"?r.map(c=>c.id===s.id?{...c,state:"closing",duration:null}:c):s.type==="MARK_ALL_CLOSING"?r.map(c=>({...c,state:"closing",duration:null})):s.type==="REMOVE"?r.filter(c=>c.id!==s.id):r}function w0(){const r=m.useContext(ux);if(!r)throw new Error("useToast must be used inside ToastProvider");return r}var En=null,Io=((r,s)=>En?En.show(r,s):(console.warn("Toast provider not configured"),-1)),j0=((r,s)=>Io(r,s)),gt=Object.assign(j0,{show:Io,info:(r,s)=>Io(r,{...s??{},type:"info"}),success:(r,s)=>Io(r,{...s??{},type:"success"}),warning:(r,s)=>Io(r,{...s??{},type:"warning"}),error:(r,s)=>Io(r,{...s??{},type:"error"}),update:(r,s)=>{if(!En){console.warn("Toast provider not configured");return}En.update(r,s)},dismiss:r=>{if(!En){console.warn("Toast provider not configured");return}En.dismiss(r)},dismissAll:()=>{if(!En){console.warn("Toast provider not configured");return}En.dismissAll()},promise:(r,s)=>En?En.promise(r,s):(console.warn("Toast provider not configured"),-1)});function Kd(r){return Io(r)}function S0({item:r,dataMotion:s,onDismiss:c,stackIndex:d=0}){const u=r.duration,p=m.useRef(null),h=m.useRef(0),y=m.useRef(u??0),x=m.useRef(null),v=d===0&&r.showDurationBar&&u!=null,b=m.useCallback((ee,ge)=>{const re=x.current;if(re){if(re.style.transform=`scaleX(${Math.max(0,Math.min(1,ee))})`,s==="reduced"||ge==null){re.style.transition="none";return}re.style.transition=`transform ${ge}ms linear`}},[s]),w=m.useCallback(ee=>{v&&(b(1,null),s!=="reduced"&&requestAnimationFrame(()=>b(0,ee)))},[v,s,b]),S=m.useCallback(()=>{p.current!=null&&clearTimeout(p.current),p.current=null},[]),z=m.useCallback(ee=>{S(),!(ee<=0)&&(h.current=Date.now(),p.current=setTimeout(()=>c(r.id),ee))},[S,r.id,c]),C=m.useCallback(()=>{if(u==null||p.current==null)return;const ee=Date.now()-h.current;if(y.current=Math.max(0,y.current-ee),S(),v){const ge=u>0?y.current/u:0;b(ge,null)}},[v,S,u,b]),T=m.useCallback(()=>{u!=null&&r.state==="open"&&(z(y.current),v&&b(0,y.current))},[z,v,u,r.state,b]);m.useEffect(()=>{if(S(),u!=null)return y.current=u,d===0&&r.state==="open"&&(z(u),w(u)),()=>S()},[z,S,u,r.state,d,w]),m.useEffect(()=>{r.state!=="open"&&S()},[S,r.state]);const N=b0(r.type),M=k0(r.variant,r.tone),Z=fx(r.variant),P=Z==="solid"?M.fg:M.accent,K=Z==="solid"?`color-mix(in srgb, ${M.fg} 14%, transparent)`:`color-mix(in srgb, ${M.accent} 12%, transparent)`,q=(r.title??null)!==null&&r.title!==void 0,I=r.description??r.message,G=(I??null)!==null&&I!==void 0,$=r.state==="closing"?"exiting":"entering",X=r.classNames,me={"--oks-toast-accent":M.accent,"--oks-toast-bg":M.bg,"--oks-toast-fg":M.fg,"--oks-toast-border":M.border,"--oks-toast-icon-fg":P,"--oks-toast-icon-bg":K,"--oks-toast-stack-index":String(d),...r.style};return n.jsx("div",{role:N,"aria-atomic":"true","data-has-title":q?"true":"false","data-has-description":G?"true":"false","data-animation":$,"data-placement":r.position,"data-drag-value":"0","data-motion":s,"data-state":r.state,"data-size":r.size,"data-radius":r.radius??"md","data-stack-index":String(d),className:dn(dn(dn("oksToast",d>0?"oksToastStacked":""),X?.base),r.className),style:me,...d===0?{onMouseEnter:C,onMouseLeave:T,onFocusCapture:C,onBlurCapture:T}:{},children:n.jsxs("div",{className:dn(dn("oksToastSurface",X?.motionDiv),dn(X?.base,r.className)),children:[r.type==="loading"&&r.loadingComponent?n.jsx("div",{className:dn("oksToastLoading",X?.loadingComponent),"aria-hidden":"true",children:r.loadingComponent}):r.showIcon?n.jsx("div",{className:dn("oksToastIcon",X?.icon),"aria-hidden":"true",children:r.icon??n.jsx(su,{type:r.type})}):null,n.jsxs("div",{className:dn("oksToastBody",X?.content),children:[q&&n.jsx("div",{className:dn("oksToastTitle",X?.title),children:r.title}),G&&n.jsx("div",{className:dn("oksToastMessage",X?.description),children:I})]}),d===0&&(r.action||r.endContent||r.dismissible)&&n.jsxs("div",{className:dn("oksToastControls",X?.wrapper),children:[r.action&&n.jsx("button",{type:"button",className:"oksToastAction",onClick:()=>r.action?.onClick?.(),children:r.action.label}),r.endContent,r.dismissible&&n.jsx(ui,{ariaLabel:"Close",className:dn("oksToastClose",X?.closeButton),...r.closeIcon!==void 0?{icon:r.closeIcon}:{},...X?.closeIcon!==void 0?{iconClassName:X.closeIcon}:{},onClick:()=>c(r.id)})]}),v&&n.jsx("div",{className:dn("oksToastProgressTrack",X?.progressTrack),"aria-hidden":"true",children:n.jsx("div",{ref:x,className:dn("oksToastProgressIndicator",X?.progressIndicator)})})]})})}function C0({children:r,position:s,placement:c,maxToasts:d,maxVisibleToasts:u,defaultDuration:p=6e3,container:h,motion:y="auto",disableAnimation:x,toastOffset:v=0,toastProps:b,regionProps:w,className:S,style:z}){const C=lu(),T=c??s??"bottom-right",N=u??d??3,M=d!==void 0?d:Math.max(N,12),Z=x===!0||y==="reduced"||y==="auto"&&C?"reduced":"default",P=Z==="reduced"?0:260,K=m.useRef(0),q=m.useRef(new Map),[I,G]=m.useReducer(y0,[]),$=m.useRef([]);$.current=I;const X=m.useCallback(k=>{const F=q.current.get(k);if(F!=null&&clearTimeout(F),P<=0){G({type:"REMOVE",id:k});return}const E=setTimeout(()=>{q.current.delete(k),G({type:"REMOVE",id:k})},P);q.current.set(k,E)},[P]),me=m.useCallback(k=>{const F=$.current.find(E=>E.id===k);F&&F.state!=="closing"&&F.onDismiss?.(k),G({type:"MARK_CLOSING",id:k}),X(k)},[X]),ee=m.useCallback(()=>{const k=$.current;for(const F of k)F.state!=="closing"&&F.onDismiss?.(F.id);G({type:"MARK_ALL_CLOSING"});for(const F of k)X(F.id)},[X]),ge=m.useCallback((k,F)=>{G({type:"PATCH",id:k,patch:F})},[]),re=m.useCallback(((k,F)=>{const E=g0(k,F),j={...b??{},...E},W=j.severity??j.color,te=j.type??(W?mx(W):"default"),ie=j.tone??(W?hx(W):void 0)??v0(te),De=j.variant??"flat",ae=j.size??"md",ne=j.placement??j.position??T,Re=j.hideCloseButton!==void 0?!j.hideCloseButton:j.dismissible??!0,we=!!j.persistent,Te=j.timeout??j.duration,Ee=we?null:Te!==void 0?Te:p,Ae=!!(j.shouldShowTimeoutProgress??j.showDurationBar)&&Ee!=null,de=j.hideIcon!==void 0?!j.hideIcon:j.showIcon??px(),ke=j.id??++K.current,le={...{id:ke,createdAt:Date.now(),state:"open",type:te,tone:ie,variant:De,radius:j.radius??"md",size:ae,position:ne,duration:Ee,showDurationBar:Ae,dismissible:Re,showIcon:de},...j.title!==void 0?{title:j.title}:{},...j.message!==void 0?{message:j.message}:{},...j.description!==void 0?{description:j.description}:{},...j.action!==void 0?{action:j.action}:{},...j.icon!==void 0?{icon:j.icon}:{},...j.endContent!==void 0?{endContent:j.endContent}:{},...j.closeIcon!==void 0?{closeIcon:j.closeIcon}:{},...j.loadingComponent!==void 0?{loadingComponent:j.loadingComponent}:{},...j.classNames!==void 0?{classNames:j.classNames}:{},...j.onDismiss!==void 0?{onDismiss:j.onDismiss}:{},...j.className!==void 0?{className:j.className}:{},...j.style!==void 0?{style:j.style}:{}};if(j.promise){const je=j.promise,Le=Te!==void 0?Te:p,We=j.shouldShowTimeoutProgress??j.showDurationBar;return G({type:"UPSERT",item:{...le,type:"loading",duration:null,showDurationBar:!1,dismissible:Re},maxToasts:M}),je.then(()=>ge(ke,{type:"success",timeout:Le,...We!==void 0?{shouldShowTimeoutProgress:We}:{},dismissible:Re}),()=>ge(ke,{type:"error",timeout:Le,...We!==void 0?{shouldShowTimeoutProgress:We}:{},dismissible:Re})),ke}return G({type:"UPSERT",item:le,maxToasts:M}),ke}),[p,T,M,b,ge]),be=m.useCallback((k,F)=>{const E=typeof k=="function"?k():k,j=re({...F.loading??{},type:F.loading?.type??"loading",persistent:!0,dismissible:F.loading?.dismissible??!1});return E.then(W=>{const te=F.success?.(W)??{};ge(j,{...te,type:te.type??"success",persistent:!1})},W=>{const te=F.error?.(W)??{};ge(j,{...te,type:te.type??"error",persistent:!1})}),j},[re,ge]),se=m.useMemo(()=>({show:re,info:(k,F)=>re(k,{...F??{},type:"info"}),success:(k,F)=>re(k,{...F??{},type:"success"}),warning:(k,F)=>re(k,{...F??{},type:"warning"}),error:(k,F)=>re(k,{...F??{},type:"error"}),update:ge,dismiss:me,dismissAll:ee,promise:be}),[me,ee,be,re,ge]);m.useEffect(()=>(En=se,()=>{En===se&&(En=null)}),[se]),m.useEffect(()=>{if(typeof window>"u")return;const k=F=>{if(F.key!=="Escape")return;const E=I[0];E&&me(E.id)};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[me,I]),m.useEffect(()=>()=>{for(const k of q.current.values())clearTimeout(k);q.current.clear()},[]);const D=m.useMemo(()=>{const k={};for(const F of I){const E=F.position,j=k[E]??[];j.push(F),k[E]=j}return k},[I]),{classNames:U,style:Q,...pe}=w??{},fe={"--oks-toast-offset":`${v}px`,...z??{},...Q??{}};return n.jsxs(ux.Provider,{value:se,children:[r,n.jsx(Or,{container:h,children:Object.entries(D).map(([k,F])=>{const E=k,j=Math.max(1,N),te=F.slice(0,j),ie=Math.max(0,F.length-j);return n.jsx("div",{"data-position":E,className:dn(dn("oksToastViewport",U?.base),S),style:fe,"aria-live":"polite",...pe,children:n.jsx("div",{className:"oksToastStack","data-position":E,"data-has-overflow":ie>0?"true":"false","data-overflow-count":String(ie),children:te.map((De,ae)=>n.jsx(S0,{item:De,dataMotion:Z,onDismiss:me,stackIndex:ae},De.id))})},k)})})]})}function Pa(r,s){return[typeof r=="string"?r:"",typeof s=="string"?s:""].filter(Boolean).join(" ")}function La(r,s){return`var(--oks-color-${r}-${s}, var(--oks-color-primary-${s}, #3b82f6))`}zt(`@layer components {
  :where(.oksCheckboxGroupField) {
    --oks-checkbox-fg: var(--oks-palette-neutral-950, #0a0a0a);
    --oks-checkbox-muted: var(--oks-palette-neutral-700, #404040);
    --oks-checkbox-border: var(--oks-palette-neutral-300, #d4d4d4);
    --oks-checkbox-border-focus: var(--oks-checkbox-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-checkbox-error: var(--oks-color-danger-500, #e20202);
    --oks-checkbox-radius: var(--oks-radius-sm, 0.25rem);
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
    color: var(--oks-checkbox-fg);
  }
  :where(.oksCheckboxGroupFieldLabel) {
    font-size: 14px;
    line-height: 1.2;
  }
  :where(.oksCheckboxGroupFieldItems) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksCheckboxGroupFieldItem) {
    display: inline-flex;
    align-items: center;
    gap: var(--oks-space-2, 8px);
    user-select: none;
    cursor: pointer;
  }
  :where(.oksCheckboxGroupFieldItem[data-disabled=true]) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksCheckboxGroupFieldInput) {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid var(--oks-checkbox-border);
    border-radius: var(--oks-checkbox-radius);
    background: #fff;
    display: inline-block;
    position: relative;
    outline: none;
  }
  :where(.oksCheckboxGroupFieldInput:checked) {
    background: var(--oks-checkbox-border-focus);
    border-color: var(--oks-checkbox-border-focus);
  }
  :where(.oksCheckboxGroupFieldInput:focus-visible) {
    border-color: var(--oks-checkbox-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-checkbox-border-focus) 28%, transparent);
  }
  :where(.oksCheckboxGroupField[data-invalid=true] .oksCheckboxGroupFieldInput) {
    border-color: var(--oks-checkbox-error);
  }
  :where(.oksCheckboxGroupField[data-invalid=true] .oksCheckboxGroupFieldInput:focus-visible) {
    border-color: var(--oks-checkbox-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-checkbox-error) 22%, transparent);
  }
  :where(.oksCheckboxGroupFieldItemLabel) {
    font-size: 14px;
    line-height: 1.2;
    color: var(--oks-checkbox-muted);
  }
  :where(.oksCheckboxGroupFieldDescription) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-checkbox-muted);
  }
  :where(.oksCheckboxGroupFieldError) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-checkbox-error);
  }
}
`);var xx=m.forwardRef((r,s)=>{const{label:c,labelPlacement:d,description:u,error:p,size:h="md",tone:y="primary",colorDepth:x=500,className:v,id:b,required:w,disabled:S,options:z,value:C,defaultValue:T,onChange:N,style:M,...Z}=r,P=m.useId(),K=b??`oks-checkbox-group-${P}`,q=!!p,I=u?`${K}-description`:void 0,G=p&&p!==!0?`${K}-error-message`:void 0,$=[I,G].filter(Boolean).join(" "),X=C!==void 0,me=D=>Array.isArray(D)?D.map(String):[],[ee,ge]=m.useState(()=>me(T));m.useEffect(()=>{X&&ge(me(C))},[X,C]);const re=X?me(C):ee,be={"--oks-checkbox-tone":La(y,x)},se=D=>{if(S)return;const Q=re.includes(D)?re.filter(pe=>pe!==D):[...re,D];X||ge(Q),N?.(Q)};return n.jsxs("div",{ref:s,className:Pa("oksCheckboxGroupField",v),"data-size":h,"data-tone":y,"data-invalid":q?"true":"false","data-disabled":S?"true":"false",style:{...be,...M},children:[c?n.jsxs("div",{className:"oksCheckboxGroupFieldLabel",children:[c,w?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsx("div",{role:"group","aria-describedby":$||void 0,children:n.jsx("div",{className:"oksCheckboxGroupFieldItems",children:z.map((D,U)=>{const Q=`${K}-${D.key??`${U}-${D.value}`}`,pe=re.includes(D.value);return n.jsxs("label",{className:"oksCheckboxGroupFieldItem","data-disabled":S||D.disabled?"true":"false",children:[n.jsx("input",{...Z,id:Q,type:"checkbox",disabled:S||D.disabled,checked:pe,onChange:()=>se(D.value),className:"oksCheckboxGroupFieldInput","aria-invalid":q?"true":void 0}),n.jsx("span",{className:"oksCheckboxGroupFieldItemLabel",children:D.label})]},D.key??`${U}-${D.value}`)})})}),u?n.jsx("div",{id:I,className:"oksCheckboxGroupFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:G,className:"oksCheckboxGroupFieldError",role:"alert",children:p}):null]})});xx.displayName="CheckboxGroupField";zt(`@layer components {
  :where(.oksSelectField) {
    --oks-select-bg: #fff;
    --oks-select-fg: var(--oks-palette-neutral-950, #0a0a0a);
    --oks-select-border: var(--oks-palette-neutral-300, #d4d4d4);
    --oks-select-border-hover: var(--oks-palette-neutral-400, #a3a3a3);
    --oks-select-border-focus: var(--oks-select-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-select-error: var(--oks-color-danger-500, #e20202);
    --oks-select-radius: var(--oks-radius-md, 0.375rem);
    --oks-select-height: 40px;
    --oks-select-font-size: 14px;
    --oks-select-pad-x: var(--oks-space-3, 12px);
    --oks-select-pad-y: var(--oks-space-2, 8px);
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
    color: var(--oks-select-fg);
  }
  :where(.oksSelectField[data-size=xs]) {
    --oks-select-height: 32px;
    --oks-select-font-size: 12px;
    --oks-select-pad-x: var(--oks-space-2, 8px);
    --oks-select-pad-y: var(--oks-space-1, 4px);
  }
  :where(.oksSelectField[data-size=xs-sm]) {
    --oks-select-height: 36px;
    --oks-select-font-size: 13px;
  }
  :where(.oksSelectField[data-size=sm]) {
    --oks-select-height: 38px;
    --oks-select-font-size: 14px;
  }
  :where(.oksSelectField[data-size=md]) {
    --oks-select-height: 44px;
    --oks-select-font-size: 14px;
  }
  :where(.oksSelectField[data-size=lg]) {
    --oks-select-height: 48px;
    --oks-select-font-size: 16px;
    --oks-select-pad-x: var(--oks-space-4, 16px);
  }
  :where(.oksSelectField[data-size=xl]) {
    --oks-select-height: 52px;
    --oks-select-font-size: 18px;
    --oks-select-pad-x: var(--oks-space-4, 16px);
    --oks-select-pad-y: var(--oks-space-3, 12px);
  }
  :where(.oksSelectField[data-radius=none]) {
    --oks-select-radius: 0;
  }
  :where(.oksSelectField[data-radius=sm]) {
    --oks-select-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksSelectField[data-radius=md]) {
    --oks-select-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksSelectField[data-radius=lg]) {
    --oks-select-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksSelectField[data-radius=full]) {
    --oks-select-radius: 9999px;
  }
  :where(.oksSelectFieldLabel) {
    font-size: 14px;
    line-height: 1.2;
    color: var(--oks-palette-neutral-950, #0a0a0a);
  }
  :where(.oksSelectFieldControl) {
    position: relative;
    min-width: 0;
    width: 100%;
  }
  :where(.oksSelectFieldInput) {
    appearance: none;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    height: var(--oks-select-height);
    padding: var(--oks-select-pad-y) var(--oks-select-pad-x);
    border-radius: var(--oks-select-radius);
    border: 1px solid var(--oks-select-border);
    background: var(--oks-select-bg);
    color: inherit;
    font-size: var(--oks-select-font-size);
    line-height: 1.2;
    outline: none;
  }
  :where(.oksSelectFieldTrigger) {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    height: var(--oks-select-height);
    padding: var(--oks-select-pad-y) var(--oks-select-pad-x);
    border-radius: var(--oks-select-radius);
    border: 1px solid var(--oks-select-border);
    background: var(--oks-select-bg);
    color: inherit;
    font-size: var(--oks-select-font-size);
    line-height: 1.2;
    outline: none;
    text-align: left;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksSelectFieldTriggerValue) {
    min-width: 0;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :where(.oksSelectFieldChips) {
    min-width: 0;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: var(--oks-space-2, 8px);
    overflow: hidden;
  }
  :where(.oksSelectFieldChipRemove) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 9999px;
    cursor: pointer;
    color: inherit;
    opacity: 0.8;
  }
  :where(.oksSelectFieldChipRemove:hover) {
    opacity: 1;
    background: color-mix(in srgb, currentColor 10%, transparent);
  }
  :where(.oksSelectField[data-placeholder-shown=true] .oksSelectFieldInput) {
    color: var(--oks-palette-neutral-500, #737373);
  }
  :where(.oksSelectField[data-placeholder-shown=true] .oksSelectFieldTrigger) {
    color: var(--oks-palette-neutral-500, #737373);
  }
  :where(.oksSelectField[data-variant=soft] .oksSelectFieldInput) {
    background: var(--oks-palette-neutral-50, #fafafa);
    border: none;
  }
  :where(.oksSelectField[data-variant=soft] .oksSelectFieldTrigger) {
    background: var(--oks-palette-neutral-50, #fafafa);
    border: none;
  }
  :where(.oksSelectFieldInput:hover) {
    border-color: var(--oks-select-border-hover);
  }
  :where(.oksSelectFieldTrigger:hover) {
    border-color: var(--oks-select-border-hover);
  }
  :where(.oksSelectFieldInput:focus-visible),
  :where(.oksSelectFieldControl:focus-within .oksSelectFieldInput) {
    border-color: var(--oks-select-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-border-focus) 28%, transparent);
  }
  :where(.oksSelectFieldTrigger:focus-visible),
  :where(.oksSelectFieldControl:focus-within .oksSelectFieldTrigger) {
    border-color: var(--oks-select-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-border-focus) 28%, transparent);
  }
  :where(.oksSelectField[data-invalid=true] .oksSelectFieldInput) {
    border-color: var(--oks-select-error);
  }
  :where(.oksSelectField[data-invalid=true] .oksSelectFieldTrigger) {
    border-color: var(--oks-select-error);
  }
  :where(.oksSelectField[data-invalid=true] .oksSelectFieldInput:focus-visible),
  :where(.oksSelectField[data-invalid=true] .oksSelectFieldControl:focus-within .oksSelectFieldInput) {
    border-color: var(--oks-select-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-error) 22%, transparent);
  }
  :where(.oksSelectField[data-invalid=true] .oksSelectFieldTrigger:focus-visible),
  :where(.oksSelectField[data-invalid=true] .oksSelectFieldControl:focus-within .oksSelectFieldTrigger) {
    border-color: var(--oks-select-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-error) 22%, transparent);
  }
  :where(.oksSelectField[data-disabled=true] .oksSelectFieldInput) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksSelectField[data-disabled=true] .oksSelectFieldTrigger) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldControl) {
    position: relative;
  }
  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldInput),
  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldTrigger) {
    padding-top: calc(var(--oks-select-pad-y) + 10px);
  }
  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldControl > .oksSelectFieldLabel) {
    position: absolute;
    left: var(--oks-select-pad-x);
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--oks-select-font-size);
    line-height: 1;
    color: var(--oks-palette-neutral-500, #737373);
    pointer-events: none;
    max-width: calc(100% - (2 * var(--oks-select-pad-x)));
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition:
      top 140ms ease,
      transform 140ms ease,
      font-size 140ms ease,
      color 140ms ease;
  }
  .oksSelectField[data-label-placement=floating][data-placeholder-shown=true] .oksSelectFieldInput {
    color: transparent;
  }
  .oksSelectField[data-label-placement=floating][data-placeholder-shown=true] .oksSelectFieldTriggerValue {
    color: transparent;
  }
  .oksSelectField[data-label-placement=floating][data-placeholder-shown=true] .oksSelectFieldControl:focus-within .oksSelectFieldInput {
    color: var(--oks-palette-neutral-500, #737373);
  }
  .oksSelectField[data-label-placement=floating][data-placeholder-shown=true] .oksSelectFieldControl:focus-within .oksSelectFieldTriggerValue {
    color: var(--oks-palette-neutral-500, #737373);
  }
  :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldControl:focus-within > .oksSelectFieldLabel),
  :where(.oksSelectField[data-label-placement=floating][data-placeholder-shown=false] .oksSelectFieldControl > .oksSelectFieldLabel) {
    top: 10px;
    transform: translateY(0);
    font-size: 12px;
    color: var(--oks-select-border-focus);
  }
  :where(.oksSelectField[data-label-placement=floating][data-invalid=true] .oksSelectFieldControl:focus-within > .oksSelectFieldLabel) {
    color: var(--oks-select-error);
  }
  @media (prefers-reduced-motion: reduce) {
    :where(.oksSelectField[data-label-placement=floating] .oksSelectFieldControl > .oksSelectFieldLabel) {
      transition: none;
    }
  }
  :where(.oksSelectField[data-variant=underline] .oksSelectFieldInput) {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--oks-select-border);
    background: transparent;
  }
  :where(.oksSelectField[data-variant=underline] .oksSelectFieldTrigger) {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--oks-select-border);
    background: transparent;
  }
  :where(.oksSelectField[data-variant=underline] .oksSelectFieldInput:hover) {
    border-bottom-color: var(--oks-select-border-hover);
  }
  :where(.oksSelectField[data-variant=underline] .oksSelectFieldTrigger:hover) {
    border-bottom-color: var(--oks-select-border-hover);
  }
  :where(.oksSelectField[data-variant=underline] .oksSelectFieldInput:focus-visible),
  :where(.oksSelectField[data-variant=underline] .oksSelectFieldControl:focus-within .oksSelectFieldInput) {
    border-bottom-color: var(--oks-select-border-focus);
    box-shadow: none;
  }
  :where(.oksSelectField[data-variant=underline] .oksSelectFieldTrigger:focus-visible),
  :where(.oksSelectField[data-variant=underline] .oksSelectFieldControl:focus-within .oksSelectFieldTrigger) {
    border-bottom-color: var(--oks-select-border-focus);
    box-shadow: none;
  }
  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldInput) {
    border-bottom-color: var(--oks-select-error);
  }
  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldTrigger) {
    border-bottom-color: var(--oks-select-error);
  }
  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldInput:focus-visible),
  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldControl:focus-within .oksSelectFieldInput) {
    border-bottom-color: var(--oks-select-error);
    box-shadow: none;
  }
  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldTrigger:focus-visible),
  :where(.oksSelectField[data-variant=underline][data-invalid=true] .oksSelectFieldControl:focus-within .oksSelectFieldTrigger) {
    border-bottom-color: var(--oks-select-error);
    box-shadow: none;
  }
  :where(.oksSelectFieldMenu) {
    position: fixed;
    z-index: var(--oks-z-popover, 60);
    background: var(--oks-select-bg, #fff);
    border: 1px solid var(--oks-select-border, var(--oks-palette-neutral-300, #d4d4d4));
    border-radius: var(--oks-select-radius, var(--oks-radius-md, 0.375rem));
    padding: var(--oks-space-1, 4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    max-height: 260px;
    overflow: auto;
  }
  :where(.oksSelectFieldFilter) {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--oks-select-bg, #fff);
    padding: var(--oks-space-1, 4px);
    margin: calc(-1 * var(--oks-space-1, 4px)) calc(-1 * var(--oks-space-1, 4px)) var(--oks-space-1, 4px);
    border-bottom: 1px solid var(--oks-select-border, var(--oks-palette-neutral-300, #d4d4d4));
  }
  :where(.oksSelectFieldFilterInput) {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    height: 34px;
    padding: 0 var(--oks-space-2, 8px);
    border-radius: calc(var(--oks-select-radius, var(--oks-radius-md, 0.375rem)) - 2px);
    border: 1px solid var(--oks-select-border, var(--oks-palette-neutral-300, #d4d4d4));
    background: var(--oks-select-bg, #fff);
    color: var(--oks-select-fg, var(--oks-palette-neutral-950, #0a0a0a));
    font-size: 13px;
    outline: none;
  }
  :where(.oksSelectFieldFilterInput:focus-visible) {
    border-color: var(--oks-select-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-select-border-focus) 20%, transparent);
  }
  :where(.oksSelectFieldOption) {
    padding: 8px 10px;
    border-radius: calc(var(--oks-select-radius, var(--oks-radius-md, 0.375rem)) - 2px);
    cursor: pointer;
    user-select: none;
    color: var(--oks-select-fg, var(--oks-palette-neutral-950, #0a0a0a));
  }
  :where(.oksSelectFieldOption[data-disabled=true]) {
    cursor: not-allowed;
    opacity: 0.55;
  }
  :where(.oksSelectFieldOption[data-active=true]) {
    background: color-mix(in srgb, var( --oks-select-border-focus, var(--oks-select-tone, var(--oks-color-primary-500, #3b82f6)) ) 18%, transparent);
  }
  :where(.oksSelectFieldOption[data-selected=true]) {
    background: color-mix(in srgb, var( --oks-select-border-focus, var(--oks-select-tone, var(--oks-color-primary-500, #3b82f6)) ) 26%, transparent);
  }
  :where(.oksSelectFieldDescription) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-palette-neutral-700, #404040);
  }
  :where(.oksSelectFieldError) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-select-error);
  }
}
`);var Xn=m.forwardRef((r,s)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:h="md",variant:y="outline",color:x,tone:v,colorDepth:b=500,radius:w,rounded:S,className:z,id:C,required:T,disabled:N,options:M=[],placeholderOption:Z="Select…",native:P=!1,onValueChange:K,style:q,...I}=r,G=x??v??"default",$=w??S??"md",X=m.useId(),me=C??`oks-select-${X}`,ee=I["aria-describedby"],ge=u?`${me}-description`:void 0,re=p&&p!==!0?`${me}-error-message`:void 0,be=[ee,ge,re].filter(Boolean).join(" "),se=!!p,D=!!I.multiple,U=P,Q=!D&&Z!==null&&Z!==void 0,pe=ue=>D?Array.isArray(ue)?ue.map(ye=>String(ye)):[]:ue==null?"":Array.isArray(ue)?String(ue[0]??""):String(ue),[fe,k]=m.useState(()=>I.value!==void 0?pe(I.value):I.defaultValue!==void 0?pe(I.defaultValue):D?[]:"");m.useEffect(()=>{I.value!==void 0&&k(pe(I.value))},[I.value,D]);const F=I.value!==void 0?pe(I.value):fe,E=D?Array.isArray(F)?F:[]:[],j=D?"":String(F),W=m.useMemo(()=>D?E.length===0:j==="",[D,j,E.length]),te={"--oks-select-tone":La(G,b)},ie=m.useMemo(()=>{const ue={...te};if(q&&typeof q=="object")for(const[ye,Oe]of Object.entries(q))ye.startsWith("--")&&(ue[ye]=Oe);return ue},[q,te]),De=d==="top"?c:null,ae=d==="floating"?c:null,ne=m.useRef(null),Re=m.useRef(null),we=m.useRef({value:"",timer:null}),[Te,Ee]=m.useState(!1),[Ae,de]=m.useState(0),[ke,ve]=m.useState(null),[le,je]=m.useState(""),Le=m.useMemo(()=>{const ue=new Map;for(const ye of M)ue.set(String(ye.value),ye.label);return ue},[M]),We=m.useMemo(()=>{const ue=le.trim().toLowerCase();return ue?M.map((ye,Oe)=>({opt:ye,idx:Oe})).filter(({opt:ye})=>`${typeof ye.label=="string"?ye.label:""} ${String(ye.value??"")}`.toLowerCase().includes(ue)):M.map((ye,Oe)=>({opt:ye,idx:Oe}))},[le,M]),Ne=m.useMemo(()=>We.map(ue=>ue.idx),[We]);m.useEffect(()=>{if(!Te||Ne.length<1)return;const ue=Ne.includes(Ae),ye=!M[Ae]?.disabled;if(ue&&ye)return;const Oe=Ne.find($e=>!M[$e]?.disabled)??Ne[0]??0;de(Oe)},[Ae,Te,M,Ne]),m.useEffect(()=>{const ue=D?E[0]:j,ye=M.findIndex(Oe=>String(Oe.value)===String(ue));ye>=0&&de(ye)},[D,M,j,E,F]);const Ge=!N&&!U&&M.length>0,_e=(ue,ye)=>{const Oe=Ne.filter(nt=>!M[nt]?.disabled);if(Oe.length<1)return ue;const $e=Oe.indexOf(ue),Se=(($e>=0?$e:0)+ye+Oe.length)%Oe.length;return Oe[Se]??ue},Ve=()=>{Ee(!1),je("")},Ye=()=>{if(!Ge)return;Ee(!0);const ue=D?E[0]:j,ye=M.findIndex(mt=>String(mt.value)===String(ue)),Oe=ye>=0?ye:0,$e=M[Oe]?.disabled?_e(Oe,1):Oe;de($e)},tt=(ue,ye)=>{if(I.value===void 0&&k(ue),K?.(ue),D){const $e={target:{value:ue}};I.onChange?.($e);return}if(ye){I.onChange?.(ye);return}const Oe={target:{value:ue}};I.onChange?.(Oe)},Ie=ue=>{if(!ue)return;const ye=ue.toLowerCase(),Oe=we.current.value+ye;we.current.value=Oe,we.current.timer&&window.clearTimeout(we.current.timer),we.current.timer=window.setTimeout(()=>{we.current.value="",we.current.timer=null},350);const mt=(()=>{const Se=Ne.filter(Rt=>!M[Rt]?.disabled);if(Se.length<1)return-1;const nt=Math.max(0,Se.indexOf(Ae)),dt=[...Se.slice(nt),...Se.slice(0,nt)];for(const Rt of dt){const Dt=M[Rt];if(!Dt)continue;if((typeof Dt.label=="string"?Dt.label:String(Dt.value??"")).toLowerCase().startsWith(Oe))return Rt}return-1})();mt>=0&&de(mt)};m.useEffect(()=>{if(!Te)return;const ue=Oe=>{const $e=Oe.target;$e&&(ne.current?.contains($e)||Re.current?.contains($e)||Ve())},ye=Oe=>{Oe.key==="Escape"&&(Oe.preventDefault(),Ve(),ne.current?.focus())};return document.addEventListener("pointerdown",ue,!0),document.addEventListener("keydown",ye,!0),()=>{document.removeEventListener("pointerdown",ue,!0),document.removeEventListener("keydown",ye,!0)}},[Te]),m.useEffect(()=>{if(!Te)return;const ue=()=>{const mt=ne.current,Se=Re.current;if(!mt||!Se)return;const nt=mt.getBoundingClientRect(),dt=Se.getBoundingClientRect(),Rt=di({triggerRect:nt,tooltipRect:dt,side:"bottom",align:"start",offset:6,collisionPadding:8,strategy:"fixed"});ve({position:"fixed",top:Rt.top,left:Rt.left,minWidth:nt.width})},ye=requestAnimationFrame(ue),Oe=()=>ue(),$e=()=>ue();return window.addEventListener("scroll",Oe,!0),window.addEventListener("resize",$e),()=>{cancelAnimationFrame(ye),window.removeEventListener("scroll",Oe,!0),window.removeEventListener("resize",$e)}},[Te]);const Xe=()=>{const ue=M.find(ye=>String(ye.value)===String(j));return ue?ue.label:null},Ct=`${me}-opt-${Ae}`,nn=`${me}-menu`;return n.jsxs("div",{className:Pa("oksSelectField",z),"data-size":h,"data-variant":y,"data-color":G,"data-radius":$,"data-label-placement":d,"data-placeholder-shown":W?"true":"false","data-invalid":se?"true":"false","data-disabled":N?"true":"false",style:{...te,...q},children:[De?n.jsxs("label",{className:"oksSelectFieldLabel",htmlFor:me,children:[De,T?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksSelectFieldControl",children:[U?n.jsxs("select",{...I,ref:s,id:me,required:T,disabled:N,className:"oksSelectFieldInput","aria-invalid":se?"true":void 0,"aria-describedby":be||void 0,"aria-errormessage":re,value:D?E:j,onChange:ue=>{if(D){const ye=Array.from(ue.currentTarget.selectedOptions).map(Oe=>String(Oe.value));tt(ye,ue);return}tt(String(ue.currentTarget.value),ue)},children:[Q?n.jsx("option",{value:"",disabled:T,children:Z}):null,M.map((ue,ye)=>n.jsx("option",{value:ue.value,disabled:ue.disabled,children:ue.label},ue.key??`${ye}-${ue.value}`))]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{ref:ne,id:me,type:"button",className:"oksSelectFieldTrigger",disabled:N,"aria-label":I["aria-label"],"aria-labelledby":I["aria-labelledby"],"aria-invalid":se?"true":void 0,"aria-describedby":be||void 0,"aria-errormessage":re,"aria-haspopup":"listbox","aria-expanded":Te?"true":"false","aria-controls":Te?nn:void 0,"aria-activedescendant":Te?Ct:void 0,onClick:()=>Te?Ve():Ye(),onBlur:ue=>{I.onBlur?.(ue),requestAnimationFrame(()=>{const ye=document.activeElement;ye&&(ne.current?.contains(ye)||Re.current?.contains(ye)||Ve())})},onKeyDown:ue=>{if(!N){if(ue.key.length===1&&!ue.ctrlKey&&!ue.metaKey&&!ue.altKey){Te||Ye(),Ie(ue.key);return}if(ue.key==="ArrowDown"){if(ue.preventDefault(),!Te){Ye();return}de(ye=>_e(ye,1));return}if(ue.key==="ArrowUp"){if(ue.preventDefault(),!Te){Ye();return}de(ye=>_e(ye,-1));return}if(ue.key==="Enter"||ue.key===" "){if(ue.preventDefault(),!Te){Ye();return}const ye=M[Ae];if(ye&&!ye.disabled)if(D){const Oe=String(ye.value),$e=E.includes(Oe)?E.filter(mt=>mt!==Oe):[...E,Oe];tt($e)}else tt(String(ye.value)),Ve();return}if(ue.key==="Escape"){Te&&(ue.preventDefault(),Ve());return}}},children:n.jsx("span",{className:"oksSelectFieldTriggerValue",children:D?E.length<1?Z:n.jsx("span",{className:"oksSelectFieldChips",children:E.map(ue=>n.jsx(ot,{size:"sm",variant:"flat",endContent:n.jsx("span",{className:"oksSelectFieldChipRemove",role:"button",tabIndex:-1,"aria-label":"Remove",onMouseDown:ye=>{ye.preventDefault(),ye.stopPropagation()},onClick:ye=>{ye.preventDefault(),ye.stopPropagation(),tt(E.filter(Oe=>Oe!==ue))},children:"×"}),onMouseDown:ye=>{ye.preventDefault(),ye.stopPropagation()},children:Le.get(ue)??ue},ue))}):W?Z:Xe()})}),Te?n.jsx(Or,{children:n.jsxs("div",{ref:Re,id:nn,className:"oksSelectFieldMenu",role:"listbox","aria-multiselectable":D?"true":void 0,style:ke?{...ie,...ke}:ie,children:[n.jsx("div",{className:"oksSelectFieldFilter",children:n.jsx("input",{className:"oksSelectFieldFilterInput",value:le,onChange:ue=>je(String(ue.currentTarget.value)),placeholder:"Filter…","aria-label":"Filter options",onKeyDown:ue=>{if(ue.key==="ArrowDown"){ue.preventDefault(),de(ye=>_e(ye,1));return}if(ue.key==="ArrowUp"){ue.preventDefault(),de(ye=>_e(ye,-1));return}if(ue.key==="Enter"||ue.key===" "){ue.preventDefault();const ye=M[Ae];if(ye&&!ye.disabled)if(D){const Oe=String(ye.value),$e=E.includes(Oe)?E.filter(mt=>mt!==Oe):[...E,Oe];tt($e)}else tt(String(ye.value)),Ve(),ne.current?.focus();return}ue.key==="Escape"&&(ue.preventDefault(),Ve(),ne.current?.focus())}})}),We.map(({opt:ue,idx:ye})=>{const Oe=D?E.includes(String(ue.value)):String(ue.value)===String(j),$e=ye===Ae;return n.jsx("div",{id:`${me}-opt-${ye}`,role:"option","aria-selected":Oe?"true":"false","data-selected":Oe?"true":"false","data-active":$e?"true":"false","data-disabled":ue.disabled?"true":"false",className:"oksSelectFieldOption",onMouseEnter:()=>{ue.disabled||de(ye)},onMouseDown:mt=>mt.preventDefault(),onClick:()=>{if(!ue.disabled){if(D){const mt=String(ue.value),Se=E.includes(mt)?E.filter(nt=>nt!==mt):[...E,mt];tt(Se);return}tt(String(ue.value)),Ve(),ne.current?.focus()}},children:ue.label},ue.key??`${ye}-${ue.value}`)})]})}):null]}),ae?n.jsxs("label",{className:"oksSelectFieldLabel",htmlFor:me,children:[ae,T?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),u?n.jsx("div",{id:ge,className:"oksSelectFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:re,className:"oksSelectFieldError",role:"alert",children:p}):null]})});Xn.displayName="SelectField";zt(`@layer components {
  :where(.oksDatePickerField, .oksDatePickerFieldPopover) {
    --oks-date-picker-bg: #fff;
    --oks-date-picker-fg: var(--oks-palette-neutral-950, #0a0a0a);
    --oks-date-picker-border: var(--oks-palette-neutral-300, #d4d4d4);
    --oks-date-picker-border-hover: var(--oks-palette-neutral-400, #a3a3a3);
    --oks-date-picker-border-focus: var( --oks-date-picker-tone, var(--oks-color-primary-500, #3b82f6) );
    --oks-date-picker-error: var(--oks-color-danger-500, #e20202);
    --oks-date-picker-radius: var(--oks-radius-md, 0.375rem);
    --oks-date-picker-popover-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    --oks-date-picker-accent: var( --oks-date-picker-tone, var(--oks-color-primary-500, #3b82f6) );
  }
  :where(.oksDatePickerField) {
    --oks-date-picker-height: 40px;
    --oks-date-picker-font-size: 14px;
    --oks-date-picker-pad-x: var(--oks-space-3, 12px);
    --oks-date-picker-pad-y: var(--oks-space-2, 8px);
    --oks-date-picker-icon-pad: 40px;
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
    color: var(--oks-date-picker-fg);
  }
  :where(.oksDatePickerField[data-size=xs]) {
    --oks-date-picker-height: 32px;
    --oks-date-picker-font-size: 12px;
    --oks-date-picker-pad-x: var(--oks-space-2, 8px);
    --oks-date-picker-pad-y: var(--oks-space-1, 4px);
  }
  :where(.oksDatePickerField[data-size=xs-sm]) {
    --oks-date-picker-height: 36px;
    --oks-date-picker-font-size: 13px;
  }
  :where(.oksDatePickerField[data-size=sm]) {
    --oks-date-picker-height: 38px;
    --oks-date-picker-font-size: 14px;
  }
  :where(.oksDatePickerField[data-size=md]) {
    --oks-date-picker-height: 44px;
    --oks-date-picker-font-size: 14px;
  }
  :where(.oksDatePickerField[data-size=lg]) {
    --oks-date-picker-height: 48px;
    --oks-date-picker-font-size: 16px;
    --oks-date-picker-pad-x: var(--oks-space-4, 16px);
  }
  :where(.oksDatePickerField[data-size=xl]) {
    --oks-date-picker-height: 52px;
    --oks-date-picker-font-size: 18px;
    --oks-date-picker-pad-x: var(--oks-space-4, 16px);
    --oks-date-picker-pad-y: var(--oks-space-3, 12px);
  }
  :where(.oksDatePickerFieldLabel) {
    font-size: 14px;
    line-height: 1.2;
    color: var(--oks-palette-neutral-950, #0a0a0a);
  }
  :where(.oksDatePickerFieldControl) {
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksDatePickerFieldInput) {
    appearance: none;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    height: var(--oks-date-picker-height);
    padding: var(--oks-date-picker-pad-y) var(--oks-date-picker-pad-x);
    padding-right: var(--oks-date-picker-icon-pad);
    border-radius: var(--oks-date-picker-radius);
    border: 1px solid var(--oks-date-picker-border);
    background: var(--oks-date-picker-bg);
    color: inherit;
    font-size: var(--oks-date-picker-font-size);
    line-height: 1.2;
    outline: none;
  }
  :where(.oksDatePickerFieldRange) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--oks-space-2, 8px);
    min-width: 0;
  }
  :where(.oksDatePickerField[data-variant=soft] .oksDatePickerFieldInput) {
    background: var(--oks-palette-neutral-50, #fafafa);
    border: none;
  }
  :where(.oksDatePickerFieldInput:hover) {
    border-color: var(--oks-date-picker-border-hover);
  }
  :where(.oksDatePickerFieldInput:focus-visible),
  :where(.oksDatePickerFieldControl:focus-within .oksDatePickerFieldInput) {
    border-color: var(--oks-date-picker-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 28%, transparent);
  }
  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldInput) {
    border-color: var(--oks-date-picker-error);
  }
  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldInput:focus-visible),
  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldControl:focus-within .oksDatePickerFieldInput) {
    border-color: var(--oks-date-picker-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-error) 22%, transparent);
  }
  :where(.oksDatePickerField[data-disabled=true] .oksDatePickerFieldInput) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksDatePickerFieldPresets) {
    width: 100%;
  }
  :where(.oksDatePickerFieldDescription) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-palette-neutral-700, #404040);
  }
  :where(.oksDatePickerFieldError) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-date-picker-error);
  }
  :where(.oksDatePickerFieldTriggerWrap) {
    position: relative;
  }
  :where(.oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap > .oksDatePickerFieldLabel) {
    position: absolute;
    left: var(--oks-date-picker-pad-x);
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--oks-date-picker-font-size);
    line-height: 1;
    color: var(--oks-palette-neutral-500, #737373);
    pointer-events: none;
    max-width: calc(100% - (2 * var(--oks-date-picker-pad-x)) - var(--oks-date-picker-icon-pad));
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition:
      top 140ms ease,
      transform 140ms ease,
      font-size 140ms ease,
      color 140ms ease;
  }
  .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldInput {
    padding-top: calc(var(--oks-date-picker-pad-y) + 10px);
  }
  .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap[data-trigger=single] .oksDatePickerFieldInput::placeholder {
    color: transparent;
    opacity: 1;
    transition: color 140ms ease;
  }
  .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap[data-trigger=single]:focus-within .oksDatePickerFieldInput::placeholder {
    color: var(--oks-palette-neutral-500, #737373);
  }
  :where(.oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap[data-trigger=dual] > .oksDatePickerFieldLabel) {
    top: 10px;
    transform: translateY(0);
    font-size: 12px;
  }
  :where(.oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap:focus-within > .oksDatePickerFieldLabel),
  :where(.oksDatePickerField[data-label-placement=floating][data-has-value=true] .oksDatePickerFieldTriggerWrap > .oksDatePickerFieldLabel) {
    top: 10px;
    transform: translateY(0);
    font-size: 12px;
    color: var(--oks-date-picker-border-focus);
  }
  :where(.oksDatePickerField[data-label-placement=floating][data-invalid=true] .oksDatePickerFieldTriggerWrap:focus-within > .oksDatePickerFieldLabel) {
    color: var(--oks-date-picker-error);
  }
  @media (prefers-reduced-motion: reduce) {
    .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap > .oksDatePickerFieldLabel,
    .oksDatePickerField[data-label-placement=floating] .oksDatePickerFieldTriggerWrap[data-trigger=single] .oksDatePickerFieldInput::placeholder {
      transition: none;
    }
  }
  :where(.oksDatePickerField[data-clear-button=true] .oksDatePickerFieldInput) {
    padding-right: calc(var(--oks-date-picker-icon-pad) + 28px);
  }
  :where(.oksDatePickerFieldDualTrigger) {
    width: 100%;
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--oks-space-2, 8px);
    align-items: center;
    box-sizing: border-box;
    height: var(--oks-date-picker-height);
    border-radius: var(--oks-date-picker-radius);
    border: 1px solid var(--oks-date-picker-border);
    background: var(--oks-date-picker-bg);
    padding-right: var(--oks-date-picker-icon-pad);
  }
  :where(.oksDatePickerField[data-clear-button=true] .oksDatePickerFieldDualTrigger) {
    padding-right: calc(var(--oks-date-picker-icon-pad) + 28px);
  }
  :where(.oksDatePickerField[data-variant=soft] .oksDatePickerFieldDualTrigger) {
    background: var(--oks-palette-neutral-50, #fafafa);
    border: none;
  }
  :where(.oksDatePickerFieldDualTrigger:hover) {
    border-color: var(--oks-date-picker-border-hover);
  }
  :where(.oksDatePickerFieldDualTrigger:focus-within) {
    border-color: var(--oks-date-picker-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 28%, transparent);
  }
  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldDualTrigger) {
    border-color: var(--oks-date-picker-error);
  }
  :where(.oksDatePickerField[data-invalid=true] .oksDatePickerFieldDualTrigger:focus-within) {
    border-color: var(--oks-date-picker-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-error) 22%, transparent);
  }
  :where(.oksDatePickerField[data-disabled=true] .oksDatePickerFieldDualTrigger) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldInput) {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--oks-date-picker-border);
    background: transparent;
  }
  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldInput:hover) {
    border-bottom-color: var(--oks-date-picker-border-hover);
  }
  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldInput:focus-visible),
  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldControl:focus-within .oksDatePickerFieldInput) {
    border-bottom-color: var(--oks-date-picker-border-focus);
    box-shadow: none;
  }
  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldInput) {
    border-bottom-color: var(--oks-date-picker-error);
  }
  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldInput:focus-visible),
  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldControl:focus-within .oksDatePickerFieldInput) {
    border-bottom-color: var(--oks-date-picker-error);
    box-shadow: none;
  }
  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldDualTrigger) {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--oks-date-picker-border);
    background: transparent;
  }
  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldDualTrigger:hover) {
    border-bottom-color: var(--oks-date-picker-border-hover);
  }
  :where(.oksDatePickerField[data-variant=underline] .oksDatePickerFieldDualTrigger:focus-within) {
    border-bottom-color: var(--oks-date-picker-border-focus);
    box-shadow: none;
  }
  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldDualTrigger) {
    border-bottom-color: var(--oks-date-picker-error);
  }
  :where(.oksDatePickerField[data-variant=underline][data-invalid=true] .oksDatePickerFieldDualTrigger:focus-within) {
    border-bottom-color: var(--oks-date-picker-error);
    box-shadow: none;
  }
  :where(.oksDatePickerFieldDualInput) {
    appearance: none;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    height: calc(var(--oks-date-picker-height) - 2px);
    padding: 0 var(--oks-date-picker-pad-x);
    border: 0;
    background: transparent;
    color: inherit;
    font-size: var(--oks-date-picker-font-size);
    line-height: 1.2;
    outline: none;
  }
  :where(.oksDatePickerFieldDualInput::placeholder) {
    color: var(--oks-palette-neutral-500, #737373);
  }
  :where(.oksDatePickerFieldDualArrow) {
    color: var(--oks-palette-neutral-500, #737373);
    user-select: none;
    white-space: nowrap;
    display: inline-flex;
  }
  :where(.oksDatePickerFieldClearButton) {
    appearance: none;
    border: 0;
    background: transparent;
    color: var(--oks-palette-neutral-500, #737373);
    position: absolute;
    right: 36px;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
  }
  :where(.oksDatePickerFieldClearButton:hover) {
    background: var(--oks-palette-neutral-50, #fafafa);
    color: var(--oks-palette-neutral-700, #404040);
  }
  :where(.oksDatePickerFieldClearButton:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 22%, transparent);
  }
  :where(.oksDatePickerFieldIcon) {
    position: absolute;
    right: var(--oks-space-3, 12px);
    top: 50%;
    transform: translateY(-50%);
    color: var(--oks-palette-neutral-500, #737373);
    pointer-events: none;
    display: inline-flex;
  }
  :where(.oksDatePickerFieldPopover) {
    z-index: var(--oks-z-popover, 60);
    background: var(--oks-date-picker-bg);
    color: var(--oks-date-picker-fg);
    border: 1px solid var(--oks-date-picker-border);
    border-radius: calc(var(--oks-date-picker-radius) + 2px);
    box-shadow: var(--oks-date-picker-popover-shadow);
    padding: var(--oks-space-3, 12px);
    max-width: min(760px, calc(100vw - 16px));
  }
  :where(.oksDatePickerFieldPresetsList) {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 280px;
    overflow: auto;
    padding: 4px;
  }
  :where(.oksDatePickerFieldPresetItem) {
    appearance: none;
    border: 0;
    background: transparent;
    text-align: left;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 14px;
    color: inherit;
    cursor: pointer;
  }
  :where(.oksDatePickerFieldPresetItem:hover) {
    background: var(--oks-palette-neutral-50, #fafafa);
  }
  :where(.oksDatePickerFieldPresetItem:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-accent) 22%, transparent);
  }
  :where(.oksDatePickerFieldCalendar) {
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-3, 12px);
  }
  :where(.oksDatePickerFieldCalendarHeader) {
    display: grid;
    grid-template-columns: 32px 1fr 32px 88px;
    align-items: center;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksDatePickerFieldCalendarHeader[data-months="2"]) {
    grid-template-columns: 32px 1fr 32px 96px;
  }
  :where(.oksDatePickerFieldMonthLabels) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--oks-space-3, 12px);
    align-items: center;
  }
  :where(.oksDatePickerFieldMonths) {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--oks-space-3, 12px);
  }
  :where(.oksDatePickerFieldMonths[data-months="2"]) {
    grid-template-columns: 1fr 1fr;
    gap: var(--oks-space-4, 16px);
  }
  :where(.oksDatePickerFieldMonth) {
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksDatePickerFieldNavButton) {
    appearance: none;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    border: 1px solid var(--oks-date-picker-border);
    background: var(--oks-date-picker-bg);
    color: var(--oks-palette-neutral-700, #404040);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  :where(.oksDatePickerFieldNavButton:hover) {
    border-color: var(--oks-date-picker-border-hover);
  }
  :where(.oksDatePickerFieldNavButton:focus-visible) {
    outline: none;
    border-color: var(--oks-date-picker-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 22%, transparent);
  }
  :where(.oksDatePickerFieldMonthLabel) {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  :where(.oksDatePickerFieldYearInput) {
    width: 100%;
    height: 32px;
    padding: 0 10px;
    border-radius: 10px;
    border: 1px solid var(--oks-date-picker-border);
    background: var(--oks-date-picker-bg);
    color: inherit;
    font-size: 14px;
    outline: none;
  }
  :where(.oksDatePickerFieldYearInput:focus-visible) {
    border-color: var(--oks-date-picker-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 22%, transparent);
  }
  :where(.oksDatePickerFieldWeekdays) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    color: var(--oks-palette-neutral-500, #737373);
    font-size: 12px;
  }
  :where(.oksDatePickerFieldWeekday) {
    text-align: center;
    padding: 4px 0;
  }
  :where(.oksDatePickerFieldGrid) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }
  :where(.oksDatePickerFieldDay) {
    appearance: none;
    border: 0;
    background: transparent;
    width: 36px;
    height: 36px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: inherit;
    cursor: pointer;
  }
  :where(.oksDatePickerFieldDay:disabled),
  :where(.oksDatePickerFieldDay[data-disabled=true]) {
    opacity: 0.4;
    cursor: not-allowed;
  }
  :where(.oksDatePickerFieldDay:disabled:hover),
  :where(.oksDatePickerFieldDay[data-disabled=true]:hover) {
    background: transparent;
  }
  :where(.oksDatePickerFieldDay[data-outside=true]) {
    color: var(--oks-palette-neutral-400, #a3a3a3);
  }
  :where(.oksDatePickerFieldDay[data-today=true]:not([data-selected=true]):not([data-range-start=true]):not([data-range-end=true])) {
    box-shadow: inset 0 0 0 1px var(--oks-date-picker-accent);
  }
  :where(.oksDatePickerFieldDay[data-range=true]) {
    background: color-mix(in srgb, var(--oks-date-picker-accent) 10%, transparent);
    border-radius: 10px;
  }
  :where(.oksDatePickerFieldDay[data-range-start=true]),
  :where(.oksDatePickerFieldDay[data-range-end=true]),
  :where(.oksDatePickerFieldDay[data-selected=true]) {
    background: var(--oks-date-picker-accent);
    color: #fff;
    border-radius: 999px;
  }
  :where(.oksDatePickerFieldDay:not([data-range=true]):not(:disabled):hover) {
    background: var(--oks-palette-neutral-50, #fafafa);
  }
  :where(.oksDatePickerFieldDay[data-selected=true]:hover),
  :where(.oksDatePickerFieldDay[data-range-start=true]:hover),
  :where(.oksDatePickerFieldDay[data-range-end=true]:hover) {
    background: var(--oks-date-picker-accent);
  }
  :where(.oksDatePickerFieldDay:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-accent) 22%, transparent);
  }
  :where(.oksDatePickerFieldDay[data-today=true]:focus-visible) {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-accent) 22%, transparent), inset 0 0 0 1px var(--oks-date-picker-accent);
  }
  :where(.oksDatePickerFieldTime) {
    border-top: 1px solid var(--oks-date-picker-border);
    padding-top: var(--oks-space-3, 12px);
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksDatePickerFieldTimeTitle) {
    font-weight: 600;
    font-size: 14px;
  }
  :where(.oksDatePickerFieldTimeSubTitle) {
    font-weight: 600;
    font-size: 13px;
    color: var(--oks-palette-neutral-700, #404040);
    margin-bottom: 6px;
  }
  :where(.oksDatePickerFieldTimeRow) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksDatePickerFieldTimeRange) {
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-3, 12px);
  }
  :where(.oksDatePickerFieldPopover[data-range=true][data-months="2"] .oksDatePickerFieldTimeRange) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--oks-space-4, 16px);
    align-items: start;
  }
  :where(.oksDatePickerFieldPopover[data-range=true][data-range-trigger=dual] .oksDatePickerFieldTimeSubTitle) {
    margin-bottom: 8px;
  }
  :where(.oksDatePickerFieldPopover[data-range=true][data-range-trigger=dual] .oksDatePickerFieldTimeRow) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  :where(.oksDatePickerFieldPopover[data-range=true][data-range-trigger=dual] .oksDatePickerFieldTimeCol) {
    gap: 8px;
  }
  :where(.oksDatePickerFieldPopover[data-range=true][data-range-trigger=dual] .oksDatePickerFieldTimeSelect.oksSelectField) {
    gap: 0;
  }
  :where(.oksDatePickerFieldTimeCol) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  :where(.oksDatePickerFieldTimeLabel) {
    font-size: 12px;
    color: var(--oks-palette-neutral-700, #404040);
  }
  :where(.oksDatePickerFieldTimeSelect) {
    width: 100%;
  }
  :where(.oksDatePickerFieldBackToPresets) {
    margin-top: var(--oks-space-2, 8px);
    display: flex;
    justify-content: flex-end;
  }
  :where(.oksDatePickerFieldBackButton) {
    appearance: none;
    border: 1px solid var(--oks-date-picker-border);
    background: var(--oks-date-picker-bg);
    color: inherit;
    border-radius: 10px;
    padding: 8px 10px;
    font-size: 13px;
    cursor: pointer;
  }
  :where(.oksDatePickerFieldBackButton:hover) {
    border-color: var(--oks-date-picker-border-hover);
  }
  :where(.oksDatePickerFieldBackButton:focus-visible) {
    outline: none;
    border-color: var(--oks-date-picker-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-date-picker-border-focus) 22%, transparent);
  }
}
`);var Nr=r=>String(r).padStart(2,"0"),xt=r=>`${r.getFullYear()}-${Nr(r.getMonth()+1)}-${Nr(r.getDate())}`,mn=r=>`${xt(r)}T${Nr(r.getHours())}:${Nr(r.getMinutes())}`,Tr=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0,0),za=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate(),23,59,0,0),Xd=r=>{const s=r.getDay();return Tr(go(r,-s))},D0=r=>za(go(Xd(r),6)),Dh=r=>new Date(r.getFullYear(),r.getMonth(),1,0,0,0,0),T0=r=>new Date(r.getFullYear(),r.getMonth()+1,0,23,59,0,0),Th=r=>new Date(r.getFullYear(),0,1,0,0,0,0),N0=r=>new Date(r.getFullYear(),11,31,23,59,0,0),go=(r,s)=>{const c=new Date(r);return c.setDate(c.getDate()+s),c},Uo=(r,s)=>{const c=new Date(r);return c.setMonth(c.getMonth()+s),c},F0={today:"Today",yesterday:"Yesterday",thisWeek:"This Week",lastWeek:"Last Week",fortnight:"Fortnight",thisMonth:"This month",lastMonth:"Last month",last3Months:"Last 3 months",thisYear:"This year",lastYear:"Last year",custom:"Custom Dates"},B0=(r,s,c,d)=>{const u=(()=>{if(r==="today")return{start:Tr(s),end:za(s)};if(r==="yesterday"){const p=go(s,-1);return{start:Tr(p),end:za(p)}}if(r==="thisWeek")return{start:Xd(s),end:za(s)};if(r==="lastWeek"){const p=go(s,-7);return{start:Xd(p),end:D0(p)}}if(r==="fortnight")return{start:Tr(go(s,-13)),end:za(s)};if(r==="thisMonth")return{start:Dh(s),end:za(s)};if(r==="lastMonth"){const p=Uo(s,-1);return{start:Dh(p),end:T0(p)}}if(r==="last3Months")return{start:Tr(Uo(s,-3)),end:za(s)};if(r==="thisYear")return{start:Th(s),end:za(s)};if(r==="lastYear"){const p=new Date(s.getFullYear()-1,s.getMonth(),s.getDate(),s.getHours(),s.getMinutes());return{start:Th(p),end:N0(p)}}return{start:Tr(s),end:za(s)}})();return{start:c?mn(u.start):xt(u.start),end:c?mn(u.end):xt(u.end)}},Zd=r=>{if(r&&typeof r=="object"){const s=r;return{start:String(s.start??""),end:String(s.end??"")}}return{start:"",end:""}},oa=r=>{const s=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(r||""));if(!s)return null;const c=Number(s[1]),d=Number(s[2]),u=Number(s[3]);if(!Number.isFinite(c)||!Number.isFinite(d)||!Number.isFinite(u))return null;const p=new Date(c,d-1,u,0,0,0,0);return p.getFullYear()!==c||p.getMonth()!==d-1||p.getDate()!==u?null:p},tn=r=>{const s=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(String(r||""));if(!s)return null;const c=Number(s[1]),d=Number(s[2]),u=Number(s[3]),p=Number(s[4]),h=Number(s[5]);if(![c,d,u,p,h].every(x=>Number.isFinite(x)))return null;const y=new Date(c,d-1,u,p,h,0,0);return y.getFullYear()!==c||y.getMonth()!==d-1||y.getDate()!==u||y.getHours()!==p||y.getMinutes()!==h?null:y},O0=new Intl.DateTimeFormat("en",{month:"short"}),Nh=r=>`${r.getDate()} ${O0.format(r)}, ${r.getFullYear()}`,Pd=r=>{if(!r)return"";if(r instanceof Date)return xt(r);const s=String(r),c=oa(s);if(c)return xt(c);const d=tn(s);if(d)return xt(d);const u=/^(\d{4})-(\d{2})-(\d{2})/.exec(s);if(!u)return"";const p=`${u[1]}-${u[2]}-${u[3]}`;return oa(p)?p:""},xo=r=>{const s=r.getHours(),c=s>=12?"PM":"AM",d=s%12===0?12:s%12;return{hour:String(d),minute:Nr(r.getMinutes()),period:c}},A0=r=>{const s=Number(r.hour),c=r.period==="PM"?12:0;return s%12+c},aa=(r,s)=>{const c=new Date(r);return c.setHours(A0(s),Number(s.minute),0,0),c},Ld=(r,s,c,d)=>{const u=x=>{if(!x)return"";if(d==="iso"){if(!c)return x;const w=tn(x);if(!w)return x;const S=xo(w);return`${xt(w)} ${S.hour}:${S.minute} ${S.period}`}if(!c){const w=oa(x);return w?Nh(w):x}const v=tn(x);if(!v)return x;const b=xo(v);return`${Nh(v)} ${b.hour}:${b.minute} ${b.period}`};if(!s){const x=String(r??"");return u(x)}const p=Zd(r),h=p.start||"",y=p.end||"";return!h&&!y?"":`${u(h)}${y?` to ${u(y)}`:""}`},gx=m.forwardRef((r,s)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:h="md",variant:y="outline",tone:x="primary",colorDepth:v=500,className:b,id:w,name:S,required:z,disabled:C,range:T=!1,withTime:N=!1,showPresets:M=!1,presets:Z,displayFormat:P="pretty",clearable:K=!1,onClear:q,rangeTrigger:I="single",monthsToShow:G,minDate:$,maxDate:X,blockedDates:me,value:ee,defaultValue:ge,onChange:re,onBlur:be,style:se}=r,D=m.useId(),U=w??`oks-datepicker-${D}`,Q=!!p,pe=u?`${U}-description`:void 0,fe=p&&p!==!0?`${U}-error-message`:void 0,k=[pe,fe].filter(Boolean).join(" "),F={"--oks-date-picker-tone":La(x,v)},E=ee??ge??(T?{start:"",end:""}:""),j=T?Zd(E):{start:"",end:""},W=T?"":String(E??""),te=m.useRef(null),ie=m.useRef(null),De=m.useRef(null),ae=m.useRef(null),[ne,Re]=m.useState(!1),[we,Te]=m.useState(null),Ee=!C,Ae=!!(T&&M),[de,ke]=m.useState(Ae?"presets":"calendar");m.useEffect(()=>{ne&&ke(Ae?"presets":"calendar")},[ne,Ae]);const ve=m.useMemo(()=>Z&&Z.length>0?Z:T?["today","yesterday","thisWeek","lastWeek","thisMonth","lastMonth","thisYear","custom"]:["today","yesterday","thisMonth","lastMonth","thisYear"],[Z,T]),le=m.useMemo(()=>{const L={...F};if(se&&typeof se=="object")for(const[Be,Me]of Object.entries(se))Be.startsWith("--")&&(L[Be]=Me);return L},[se,F]),je=m.useMemo(()=>{const L=Number(G);return L===1||L===2?L:T?2:1},[G,T]),Le=m.useMemo(()=>Ld(E,T,N,P),[E,T,N,P]),We=T?"Select date range":"Select date",Ne=m.useMemo(()=>T?Ld(j.start||"",!1,N,P):"",[T,j.start,N,P]),Ge=m.useMemo(()=>T?Ld(j.end||"",!1,N,P):"",[T,j.end,N,P]),_e=m.useMemo(()=>T?!!(j.start||j.end):!!String(E??""),[E,T,j.start,j.end]),Ve=m.useMemo(()=>Pd($),[$]),Ye=m.useMemo(()=>Pd(X),[X]),tt=m.useMemo(()=>{const L=new Set;for(const Be of me??[]){const Me=Pd(Be);Me&&L.add(Me)}return L},[me]),Ie=m.useCallback(L=>{const Be=xt(L);return!!(Ve&&Be<Ve||Ye&&Be>Ye||tt.has(Be))},[tt,Ye,Ve]),Xe=m.useMemo(()=>Ve?oa(Ve):null,[Ve]),Ct=m.useMemo(()=>Ye?oa(Ye):null,[Ye]),nn=m.useCallback(L=>{const Be=xt(L);return Ve&&Xe&&Be<Ve?new Date(Xe.getFullYear(),Xe.getMonth(),Xe.getDate(),L.getHours(),L.getMinutes(),0,0):Ye&&Ct&&Be>Ye?new Date(Ct.getFullYear(),Ct.getMonth(),Ct.getDate(),L.getHours(),L.getMinutes(),0,0):L},[Ct,Ye,Xe,Ve]),ue=m.useCallback((L,Be)=>{let Me=nn(L);for(let at=0;at<370;at++){if(!Ie(Me))return Me;Me=go(Me,Be);const on=xt(Me);if(Ve&&on<Ve||Ye&&on>Ye)return null}return null},[nn,Ie,Ye,Ve]),ye=m.useCallback(L=>{const Be=Zd(L),Me=N?tn:oa,at=Me(Be.start),on=Me(Be.end);if(!at||!on)return L;const Qt=ue(at,1),un=ue(on,-1);return!Qt||!un?{start:"",end:""}:xt(Qt)>xt(un)?{start:"",end:""}:{start:N?mn(Qt):xt(Qt),end:N?mn(un):xt(un)}},[ue,N]),Oe=m.useMemo(()=>T?null:N?tn(W):oa(W),[T,N,W]),$e=m.useMemo(()=>T?N?tn(j.start):oa(j.start):null,[T,N,j.start]),mt=m.useMemo(()=>T?N?tn(j.end):oa(j.end):null,[T,N,j.end]),[Se,nt]=m.useState("start"),[dt,Rt]=m.useState(()=>{const L=tn(W);return L?xo(L):{hour:"12",minute:"00",period:"AM"}}),[Dt,hn]=m.useState(()=>{const L=tn(j.start);return L?xo(L):{hour:"12",minute:"00",period:"AM"}}),[an,ra]=m.useState(()=>{const L=tn(j.end);return L?xo(L):{hour:"11",minute:"59",period:"PM"}});m.useEffect(()=>{if(N)if(T){const L=tn(j.start),Be=tn(j.end);L&&hn(xo(L)),Be&&ra(xo(Be))}else{const L=tn(W);L&&Rt(xo(L))}},[N,T,W,j.start,j.end]);const[Cn,zn]=m.useState(()=>{const L=$e??Oe??new Date;return new Date(L.getFullYear(),L.getMonth(),1,0,0,0,0)}),Vo=m.useRef(!1),_a=m.useRef("start");m.useEffect(()=>{const L=Vo.current,Be=_a.current;if(Vo.current=ne,_a.current=Se,!ne||!(!L||T&&I==="dual"&&Be!==Se))return;const at=T&&I==="dual"&&Se==="end"?mt??$e??new Date:$e??Oe??new Date;zn(new Date(at.getFullYear(),at.getMonth(),1,0,0,0,0))},[ne,T,Se,I,mt,$e,Oe]);const Ia=()=>{Ee&&Re(!0)},xn=()=>Re(!1),Ar=d==="top"?c:null,Er=d==="floating"?c:null;m.useEffect(()=>{if(!ne)return;const L=Me=>{const at=Me.target;at&&(te.current?.contains(at)||ae.current?.contains(at)||xn())},Be=Me=>{Me.key==="Escape"&&(Me.preventDefault(),xn(),T&&I==="dual"?(Se==="end"?De.current:ie.current)?.focus():ie.current?.focus())};return document.addEventListener("pointerdown",L,!0),document.addEventListener("keydown",Be,!0),()=>{document.removeEventListener("pointerdown",L,!0),document.removeEventListener("keydown",Be,!0)}},[ne]),m.useEffect(()=>{if(!ne)return;const L=()=>{const on=te.current,Qt=ae.current;if(!on||!Qt)return;const un=on.getBoundingClientRect(),gn=Qt.getBoundingClientRect(),Wt=di({triggerRect:un,tooltipRect:gn,side:"bottom",align:"start",offset:6,collisionPadding:8,strategy:"fixed"});Te({position:"fixed",top:Wt.top,left:Wt.left,minWidth:un.width})},Be=requestAnimationFrame(L),Me=()=>L(),at=()=>L();return window.addEventListener("scroll",Me,!0),window.addEventListener("resize",at),()=>{cancelAnimationFrame(Be),window.removeEventListener("scroll",Me,!0),window.removeEventListener("resize",at)}},[ne]);const Ua=`${U}-popover`,zr=m.useMemo(()=>{const L=xt(new Date),Be=$e?xt($e):"",Me=mt?xt(mt):"",at=Oe?xt(Oe):"",on=Be&&Me?Be<=Me?Be:Me:"",Qt=Be&&Me?Be<=Me?Me:Be:"",un=gn=>{const Wt=new Date(gn.getFullYear(),gn.getMonth(),1,0,0,0,0),Mn=go(Wt,-Wt.getDay()),Pn=[];for(let Bt=0;Bt<42;Bt++){const sa=go(Mn,Bt),Ln=xt(sa),Jn=sa.getMonth()===Wt.getMonth(),vn=Ln===L,Ha=T?Ln===Be:Ln===at,$o=T?Ln===Me:!1,Rr=!!(on&&Qt&&Ln>=on&&Ln<=Qt),Va=Ie(sa);Pn.push({date:sa,key:Ln,inMonth:Jn,isToday:vn,isStart:Ha,isEnd:$o,inRange:Rr,isDisabled:Va})}return Pn};return Array.from({length:je},(gn,Wt)=>{const Mn=Uo(Cn,Wt);return{month:Mn,cells:un(Mn)}})},[je,T,mt,Oe,$e,Ie,Cn]),Ps=L=>{if(C||Ie(L))return;if(!T){const vn=N?aa(L,dt):L,Ha=N?mn(vn):xt(vn);re?.(Ha),N||xn();return}const Be=j.start||"",Me=j.end||"",at=N?tn(Be):oa(Be),on=N?tn(Me):oa(Me),Qt=xt(L);if(I==="dual"){if(Se==="start"){const Va=N?aa(L,Dt):L,$a=N?mn(Va):xt(Va);re?.({start:$a,end:""}),nt("end");return}const vn=N?aa(L,an):L,Ha=N?mn(vn):xt(vn);if(!at){re?.({start:Ha,end:""});return}const $o=xt(at);if(Qt<$o){const Va=N?mn(aa(L,Dt)):xt(L),$a=N?mn(aa(at,an)):xt(at);re?.({start:Va,end:$a})}else re?.({start:Be,end:Ha});N||xn();return}const un=N?aa(L,at&&!on?an:Dt):L,gn=N?mn(un):xt(un);if(!at||at&&on){re?.({start:gn,end:""});return}const Wt=at,Mn=xt(Wt),Pn=Qt<Mn,Bt=Pn?L:Wt,sa=Pn?Wt:L,Ln=N?mn(aa(Bt,Dt)):xt(Bt),Jn=N?mn(aa(sa,an)):xt(sa);re?.({start:Ln,end:Jn}),N||xn()},ko=()=>{C||_e&&(re?.(T?{start:"",end:""}:""),q?.(),nt("start"),xn())},Rn=m.useMemo(()=>Array.from({length:12},(L,Be)=>String(Be+1)),[]),Vt=m.useMemo(()=>Array.from({length:60},(L,Be)=>Nr(Be)),[]),Mt=(L,Be)=>{if(L==="single"){Rt(Be);const at=tn(W);at&&re?.(mn(aa(at,Be)));return}if(L==="start"){hn(Be);const at=tn(j.start);at&&re?.({start:mn(aa(at,Be)),end:j.end});return}ra(Be);const Me=tn(j.end);Me&&re?.({start:j.start,end:mn(aa(Me,Be))})};return n.jsxs("div",{className:Pa("oksDatePickerField",b),"data-size":h,"data-variant":y,"data-tone":x,"data-label-placement":d,"data-invalid":Q?"true":"false","data-disabled":C?"true":"false","data-range":T?"true":"false","data-range-trigger":I,"data-months":String(je),"data-has-value":_e?"true":"false","data-clear-button":K&&_e?"true":"false",style:{...F,...se},children:[Ar?n.jsxs("label",{className:"oksDatePickerFieldLabel",htmlFor:U,children:[Ar,z?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksDatePickerFieldControl",children:[n.jsxs("div",{ref:te,className:"oksDatePickerFieldTriggerWrap","data-trigger":T&&I==="dual"?"dual":"single",children:[T&&I==="dual"?n.jsxs("div",{className:"oksDatePickerFieldDualTrigger",children:[n.jsx("input",{ref:L=>{ie.current=L,typeof s=="function"?s(L):s&&(s.current=L)},id:U,name:S?`${S}-start`:void 0,type:"text",readOnly:!0,disabled:C,required:z,placeholder:"Start",className:"oksDatePickerFieldDualInput","aria-invalid":Q?"true":void 0,"aria-describedby":k||void 0,"aria-errormessage":fe,"aria-haspopup":"dialog","aria-expanded":ne?"true":"false","aria-controls":ne?Ua:void 0,value:Ne,onClick:()=>{Ee&&(nt("start"),Ia())},onKeyDown:L=>{Ee&&((L.key==="Enter"||L.key===" "||L.key==="ArrowDown")&&(L.preventDefault(),nt("start"),Ia()),(L.key==="Backspace"||L.key==="Delete")&&K&&_e&&(L.preventDefault(),ko()))},onBlur:L=>{be?.(L),requestAnimationFrame(()=>{const Be=document.activeElement;Be&&(te.current?.contains(Be)||ae.current?.contains(Be)||xn())})}}),n.jsx("span",{className:"oksDatePickerFieldDualArrow","aria-hidden":"true",children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M4 10h12m0 0-4-4m4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsx("input",{ref:L=>{De.current=L},id:`${U}-end`,name:S?`${S}-end`:void 0,type:"text",readOnly:!0,disabled:C,required:z,placeholder:"End",className:"oksDatePickerFieldDualInput","aria-invalid":Q?"true":void 0,"aria-describedby":k||void 0,"aria-errormessage":fe,"aria-haspopup":"dialog","aria-expanded":ne?"true":"false","aria-controls":ne?Ua:void 0,value:Ge,onClick:()=>{Ee&&(nt("end"),Ia())},onKeyDown:L=>{Ee&&((L.key==="Enter"||L.key===" "||L.key==="ArrowDown")&&(L.preventDefault(),nt("end"),Ia()),(L.key==="Backspace"||L.key==="Delete")&&K&&_e&&(L.preventDefault(),ko()))},onBlur:L=>{be?.(L),requestAnimationFrame(()=>{const Be=document.activeElement;Be&&(te.current?.contains(Be)||ae.current?.contains(Be)||xn())})}})]}):n.jsx("input",{ref:L=>{ie.current=L,typeof s=="function"?s(L):s&&(s.current=L)},id:U,name:S,type:"text",readOnly:!0,disabled:C,required:z,placeholder:We,className:"oksDatePickerFieldInput","aria-invalid":Q?"true":void 0,"aria-describedby":k||void 0,"aria-errormessage":fe,"aria-haspopup":"dialog","aria-expanded":ne?"true":"false","aria-controls":ne?Ua:void 0,value:Le,onClick:()=>{Ee&&Re(L=>!L)},onKeyDown:L=>{Ee&&((L.key==="Enter"||L.key===" ")&&(L.preventDefault(),ne?xn():Ia()),L.key==="ArrowDown"&&(L.preventDefault(),Ia()),(L.key==="Backspace"||L.key==="Delete")&&K&&_e&&(L.preventDefault(),ko()))},onBlur:L=>{be?.(L),requestAnimationFrame(()=>{const Be=document.activeElement;Be&&(te.current?.contains(Be)||ae.current?.contains(Be)||xn())})}}),Er?n.jsxs("label",{className:"oksDatePickerFieldLabel",htmlFor:U,children:[Er,z?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,K&&_e?n.jsx("button",{type:"button",className:"oksDatePickerFieldClearButton","aria-label":"Clear",onMouseDown:L=>L.preventDefault(),onClick:ko,children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M5 5l10 10M15 5 5 15",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})})}):null,n.jsx("span",{className:"oksDatePickerFieldIcon","aria-hidden":"true",children:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[n.jsx("path",{d:"M6.2 3.6V2.6M13.8 3.6V2.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M3.6 7.2h12.8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M4.6 5.6h10.8c.6 0 1 .4 1 1v9.2c0 .6-.4 1-1 1H4.6c-.6 0-1-.4-1-1V6.6c0-.6.4-1 1-1Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"})]})})]}),ne?n.jsx(Or,{children:n.jsxs("div",{ref:ae,id:Ua,className:"oksDatePickerFieldPopover",role:"dialog","aria-label":T?"Date range picker":"Date picker","data-range":T?"true":"false","data-range-trigger":I,"data-months":String(je),style:we?{...le,...we}:le,children:[Ae&&de==="presets"?n.jsx("div",{className:"oksDatePickerFieldPresetsList",role:"listbox","aria-label":"Presets",children:ve.map(L=>n.jsx("button",{type:"button",className:"oksDatePickerFieldPresetItem",onMouseDown:Be=>Be.preventDefault(),onClick:()=>{if(L==="custom"){ke("calendar");return}const Me=ye(B0(L,new Date,N));re?.(Me),xn(),(T&&I==="dual"&&Se==="end"?De.current:ie.current)?.focus()},children:F0[L]},L))}):n.jsxs("div",{className:"oksDatePickerFieldCalendar","data-months":String(je),children:[n.jsxs("div",{className:"oksDatePickerFieldCalendarHeader","data-months":String(je),children:[n.jsx("button",{type:"button",className:"oksDatePickerFieldNavButton","aria-label":"Previous month",onMouseDown:L=>L.preventDefault(),onClick:()=>zn(L=>Uo(L,-1)),children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M12.6 4.6 7.4 10l5.2 5.4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),je===1?n.jsxs("div",{className:"oksDatePickerFieldMonthLabel",children:[Cn.toLocaleString(void 0,{month:"long"})," ",Cn.getFullYear()]}):n.jsxs("div",{className:"oksDatePickerFieldMonthLabels",children:[n.jsxs("div",{className:"oksDatePickerFieldMonthLabel",children:[Cn.toLocaleString(void 0,{month:"long"})," ",Cn.getFullYear()]}),n.jsxs("div",{className:"oksDatePickerFieldMonthLabel",children:[Uo(Cn,1).toLocaleString(void 0,{month:"long"})," ",Uo(Cn,1).getFullYear()]})]}),n.jsx("button",{type:"button",className:"oksDatePickerFieldNavButton","aria-label":"Next month",onMouseDown:L=>L.preventDefault(),onClick:()=>zn(L=>Uo(L,1)),children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M7.4 4.6 12.6 10l-5.2 5.4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsx("input",{className:"oksDatePickerFieldYearInput",type:"number",inputMode:"numeric",value:Cn.getFullYear(),min:1900,max:2100,onChange:L=>{const Be=Number(L.currentTarget.value);Number.isFinite(Be)&&zn(Me=>new Date(Be,Me.getMonth(),1,0,0,0,0))}})]}),n.jsx("div",{className:"oksDatePickerFieldMonths","data-months":String(je),children:zr.map(({month:L,cells:Be})=>n.jsxs("div",{className:"oksDatePickerFieldMonth",children:[n.jsx("div",{className:"oksDatePickerFieldWeekdays","aria-hidden":"true",children:["S","M","T","W","T","F","S"].map((Me,at)=>n.jsx("div",{className:"oksDatePickerFieldWeekday",children:Me},`${at}-${Me}`))}),n.jsx("div",{className:"oksDatePickerFieldGrid",role:"grid","aria-label":`Calendar ${L.toLocaleString(void 0,{month:"long"})} ${L.getFullYear()}`,children:Be.map(Me=>n.jsx("button",{type:"button",role:"gridcell",className:"oksDatePickerFieldDay","data-outside":Me.inMonth?"false":"true","data-today":Me.isToday?"true":"false","data-selected":Me.isStart||Me.isEnd?"true":"false","data-range":T&&Me.inRange?"true":"false","data-range-start":T&&Me.isStart?"true":"false","data-range-end":T&&Me.isEnd?"true":"false","data-disabled":Me.isDisabled?"true":"false","aria-selected":Me.isStart||Me.isEnd?"true":"false","aria-label":Me.date.toDateString(),onMouseDown:at=>at.preventDefault(),onClick:()=>Ps(Me.date),disabled:C||Me.isDisabled,children:Me.date.getDate()},Me.key))})]},`${L.getFullYear()}-${L.getMonth()}`))}),N?n.jsxs("div",{className:"oksDatePickerFieldTime",children:[n.jsx("div",{className:"oksDatePickerFieldTimeTitle",children:"Select Time"}),T?n.jsxs("div",{className:"oksDatePickerFieldTimeRange",children:[n.jsxs("div",{className:"oksDatePickerFieldTimeRangeBlock",children:[n.jsx("div",{className:"oksDatePickerFieldTimeSubTitle",children:"Start"}),n.jsxs("div",{className:"oksDatePickerFieldTimeRow",children:[n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Hours"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:Dt.hour,onValueChange:L=>Mt("start",{...Dt,hour:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:Rn.map(L=>({value:L,label:L}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Minutes"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:Dt.minute,onValueChange:L=>Mt("start",{...Dt,minute:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:Vt.map(L=>({value:L,label:L}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Period"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:Dt.period,onValueChange:L=>Mt("start",{...Dt,period:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:[{value:"AM",label:"AM"},{value:"PM",label:"PM"}]})]})]})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeRangeBlock",children:[n.jsx("div",{className:"oksDatePickerFieldTimeSubTitle",children:"End"}),n.jsxs("div",{className:"oksDatePickerFieldTimeRow",children:[n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Hours"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:an.hour,onValueChange:L=>Mt("end",{...an,hour:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:Rn.map(L=>({value:L,label:L}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Minutes"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:an.minute,onValueChange:L=>Mt("end",{...an,minute:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:Vt.map(L=>({value:L,label:L}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Period"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:an.period,onValueChange:L=>Mt("end",{...an,period:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:[{value:"AM",label:"AM"},{value:"PM",label:"PM"}]})]})]})]})]}):n.jsxs("div",{className:"oksDatePickerFieldTimeRow",children:[n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Hours"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:dt.hour,onValueChange:L=>Mt("single",{...dt,hour:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:Rn.map(L=>({value:L,label:L}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Minutes"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:dt.minute,onValueChange:L=>Mt("single",{...dt,minute:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:Vt.map(L=>({value:L,label:L}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Period"}),n.jsx(Xn,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:dt.period,onValueChange:L=>Mt("single",{...dt,period:String(L)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:[{value:"AM",label:"AM"},{value:"PM",label:"PM"}]})]})]})]}):null]}),Ae&&de==="calendar"?n.jsx("div",{className:"oksDatePickerFieldBackToPresets",children:n.jsx("button",{type:"button",className:"oksDatePickerFieldBackButton",onMouseDown:L=>L.preventDefault(),onClick:()=>ke("presets"),children:"Back"})}):null]})}):null]}),u?n.jsx("div",{id:pe,className:"oksDatePickerFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:fe,className:"oksDatePickerFieldError",role:"alert",children:p}):null]})});gx.displayName="DatePickerField";var E0={required:"This field is required",email:"Please enter a valid email address",minLength:r=>`Must be at least ${r} characters`,maxLength:r=>`Must be no more than ${r} characters`,pattern:"Please match the required format",alpha:"Only letters are allowed",alphanumeric:"Only letters and numbers are allowed",numeric:"Please enter a valid number",min:r=>`Must be at least ${r}`,max:r=>`Must be no more than ${r}`,strongPassword:"Weak password. Must contain required items.",matchField:"Fields do not match",accept:"Unsupported file type",maxFileSize:r=>`File must be ${r} bytes or less`,maxFiles:r=>`Must select no more than ${r} files`},Po=r=>String(r??"").replace(/\D+/g,""),Lo=r=>{if(Array.isArray(r)&&r.length>0){const s=r[0];if(s&&typeof s=="object"){const c=s;return{code:c.code??"",phone:c.phone??""}}return null}if(r&&typeof r=="object"){const s=r;if("phone"in s||"code"in s)return{code:s.code??"",phone:s.phone??""}}return null},z0=r=>{if(r&&typeof r=="object"){const s=r;if("start"in s||"end"in s)return{start:s.start??"",end:s.end??""}}return null},vx=r=>typeof FileList>"u"?!1:r instanceof FileList,Fh=r=>typeof File>"u"?!1:r instanceof File,ni=r=>r?Fh(r)?[r]:vx(r)?Array.from(r):Array.isArray(r)&&r.every(s=>Fh(s))?r:[]:[],R0=(r,s)=>{if(!s)return;if(Object.prototype.hasOwnProperty.call(r,s))return r[s];const c=s.split(".").filter(Boolean);let d=r;for(const u of c){if(!d||typeof d!="object")return;d=d[u]}return d},M0=r=>(Array.isArray(r)?r.join(","):r).split(",").map(c=>c.trim()).filter(Boolean),P0=(r,s)=>{const c=s.toLowerCase();if(c.startsWith("."))return r.name.toLowerCase().endsWith(c);if(c.endsWith("/*")){const d=c.slice(0,-1);return r.type.toLowerCase().startsWith(d)}return r.type.toLowerCase()===c},L0=r=>{const s=r&&typeof r=="object"?r:{},c=typeof s.minLength=="number"?s.minLength:8,d=typeof s.minUpper=="number"?s.minUpper:1,u=typeof s.minLower=="number"?s.minLower:1,p=typeof s.minNumber=="number"?s.minNumber:1,h=typeof s.minSpecial=="number"?s.minSpecial:1;return{minLength:c,minUpper:d,minLower:u,minNumber:p,minSpecial:h}};function bx(r,s){const{minLength:c,minUpper:d,minLower:u,minNumber:p,minSpecial:h}=L0(s),y=String(r??""),x=y.length,v=(y.match(/[A-Z]/g)||[]).length,b=(y.match(/[a-z]/g)||[]).length,w=(y.match(/[0-9]/g)||[]).length,S=(y.match(/[^A-Za-z0-9]/g)||[]).length,z=x>=c,C=v>=d,T=b>=u,N=w>=p,M=S>=h;return{ok:z&&C&&T&&N&&M,minLength:c,minUpper:d,minLower:u,minNumber:p,minSpecial:h,length:x,uppers:v,lowers:b,numbers:w,specials:S,minLengthOk:z,upperOk:C,lowerOk:T,numberOk:N,specialOk:M}}var _0={required:r=>{if(r==null)return!1;if(typeof r=="string")return r.trim().length>0;const s=Lo(r);if(s)return Po(s.phone).length>0;const c=z0(r);return c?String(c.start??"").trim().length>0&&String(c.end??"").trim().length>0:ni(r).length>0?!0:vx(r)||Array.isArray(r)?r.length>0:typeof r=="boolean"?r===!0:typeof r=="number"?Number.isFinite(r):!!r},email:r=>r?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(r)):!0,minLength:(r,s)=>{if(!r)return!0;const c=Lo(r);return c?Po(c.phone).length>=s:String(r).length>=s},maxLength:(r,s)=>{if(!r)return!0;const c=Lo(r);return c?Po(c.phone).length<=s:String(r).length<=s},pattern:(r,s)=>{if(!r||!(s instanceof RegExp))return!0;const c=Lo(r);if(c){const d=Po(c.phone),p=`${String(c.code??"")}${d}`;return s.test(p)||s.test(d)}return s.test(String(r))},alpha:r=>r?/^[A-Za-z]+$/.test(String(r)):!0,alphanumeric:r=>r?/^[A-Za-z0-9]+$/.test(String(r)):!0,numeric:r=>{if(!r)return!0;const s=Lo(r),c=s?Po(s.phone):r;if(c==="")return!0;const d=Number(c);return!Number.isNaN(d)&&Number.isFinite(d)},min:(r,s)=>{if(!r)return!0;const c=Lo(r),d=c?Po(c.phone):r;if(d==="")return!0;const u=Number(d);return!Number.isNaN(u)&&Number.isFinite(u)&&u>=s},max:(r,s)=>{if(!r)return!0;const c=Lo(r),d=c?Po(c.phone):r;if(d==="")return!0;const u=Number(d);return!Number.isNaN(u)&&Number.isFinite(u)&&u<=s},strongPassword:(r,s)=>r?bx(String(r),s).ok:!0,matchField:(r,s,c)=>{if(!c?.formData||!s||typeof s!="string")return!0;const d=R0(c.formData,s);return r===d},accept:(r,s)=>{const c=ni(r);if(c.length<1||!s)return!0;const d=M0(s);return d.length<1?!0:c.every(u=>d.some(p=>P0(u,p)))},maxFileSize:(r,s)=>{const c=ni(r);return c.length<1||typeof s!="number"||!Number.isFinite(s)?!0:c.every(d=>typeof d.size=="number"?d.size<=s:!0)},maxFiles:(r,s)=>{const c=ni(r);return c.length<1||typeof s!="number"||!Number.isFinite(s)?!0:c.length<=s}};function Os(r,s,c={},d){const u={};if(!s)return u;if(Object.keys(s).forEach(p=>{const h=s[p];if(h===!1||h===void 0||p==="custom")return;const y=_0[p];if(!y||y(r,h,d))return;const v=c[p];if(typeof v=="string"&&v.length>0){u[p]=v;return}const b=E0[p];if(typeof b=="function"){u[p]=b(h);return}u[p]=typeof b=="string"&&b.length>0?b:"Validation failed"}),typeof s.custom=="function"){const p=s.custom(r,d);p!==!0&&(u.custom=typeof p=="string"?p:c.custom||"Custom validation failed")}return u}function As(r){const s=Object.keys(r);if(s.length<1)return null;const c=s[0];return r[c]??null}function Bh(r,s){const c={};return Object.keys(s).forEach(d=>{const u=s[d],p=r[d],h=Os(p,u?.rules,u?.message??{},{formData:r,fieldName:d});Object.keys(h).length>0&&(c[d]=As(h))}),c}zt(`@layer components {
  :where(.oksPasswordFieldRevealButton) {
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
    border-radius: 999px;
    color: var(--oks-palette-neutral-600, #525252);
    cursor: pointer;
    flex: 0 0 auto;
  }
  :where(.oksPasswordFieldRevealButton:hover) {
    color: var(--oks-palette-neutral-800, #262626);
    background: color-mix(in srgb, var(--oks-palette-neutral-900, #171717) 8%, transparent);
  }
  :where(.oksPasswordFieldRevealButton:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-field-border-focus) 28%, transparent);
  }
  :where(.oksPasswordFieldRequirements) {
    position: absolute;
    top: calc(100% + var(--oks-space-2, 8px));
    left: 0;
    width: 100%;
    z-index: 50;
    border: 1px solid var(--oks-palette-neutral-200, #e5e5e5);
    border-radius: var(--oks-radius-md, 0.375rem);
    padding: var(--oks-space-3, 12px);
    background: var(--oks-palette-neutral-0, #fff);
    color: var(--oks-palette-neutral-800, #262626);
    box-shadow: 0 10px 22px color-mix(in srgb, var(--oks-palette-neutral-950, #0a0a0a) 12%, transparent), 0 2px 6px color-mix(in srgb, var(--oks-palette-neutral-950, #0a0a0a) 10%, transparent);
  }
  :where(.oksPasswordFieldRequirementsTitle) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-palette-neutral-700, #404040);
    margin: 0 0 var(--oks-space-2, 8px) 0;
  }
  :where(.oksPasswordFieldRequirementsList) {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksPasswordFieldRequirement) {
    display: flex;
    align-items: center;
    gap: var(--oks-space-2, 8px);
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-palette-dangeer-500, #e20202);
  }
  :where(.oksPasswordFieldRequirement[data-met=true]) {
    color: var(--oks-palette-success-500, #18a605);
  }
  :where(.oksPasswordFieldRequirementIcon) {
    width: 18px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }
}
`);zt(`@layer components {
  :where(.oksTextField) {
    --oks-text-field-bg: #fff;
    --oks-text-field-fg: var(--oks-palette-neutral-950, #0a0a0a);
    --oks-text-field-border: var(--oks-palette-neutral-300, #d4d4d4);
    --oks-text-field-border-hover: var(--oks-palette-neutral-400, #a3a3a3);
    --oks-text-field-border-focus: var(--oks-text-field-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-text-field-error: var(--oks-color-danger-500, #e20202);
    --oks-text-field-radius: var(--oks-radius-md, 0.375rem);
    --oks-text-field-height: 40px;
    --oks-text-field-font-size: 14px;
    --oks-text-field-pad-x: var(--oks-space-3, 12px);
    --oks-text-field-pad-y: var(--oks-space-2, 8px);
    --oks-text-field-slot-pad-left: var(--oks-text-field-pad-x);
    --oks-text-field-slot-pad-right: var(--oks-text-field-pad-x);
    --oks-text-field-adornment-gap: var(--oks-space-2, 8px);
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
    color: var(--oks-text-field-fg);
  }
  :where(.oksTextField[data-size=xs]) {
    --oks-text-field-height: 32px;
    --oks-text-field-font-size: 12px;
    --oks-text-field-pad-x: var(--oks-space-2, 8px);
    --oks-text-field-pad-y: var(--oks-space-1, 4px);
  }
  :where(.oksTextField[data-size=xs-sm]) {
    --oks-text-field-height: 36px;
    --oks-text-field-font-size: 13px;
    --oks-text-field-pad-x: var(--oks-space-3, 12px);
    --oks-text-field-pad-y: var(--oks-space-2, 8px);
  }
  :where(.oksTextField[data-size=sm]) {
    --oks-text-field-height: 38px;
    --oks-text-field-font-size: 14px;
    --oks-text-field-pad-x: var(--oks-space-3, 12px);
    --oks-text-field-pad-y: var(--oks-space-2, 8px);
  }
  :where(.oksTextField[data-size=md]) {
    --oks-text-field-height: 44px;
    --oks-text-field-font-size: 14px;
    --oks-text-field-pad-x: var(--oks-space-3, 12px);
    --oks-text-field-pad-y: var(--oks-space-2, 8px);
  }
  :where(.oksTextField[data-size=lg]) {
    --oks-text-field-height: 48px;
    --oks-text-field-font-size: 16px;
    --oks-text-field-pad-x: var(--oks-space-4, 16px);
    --oks-text-field-pad-y: var(--oks-space-2, 8px);
  }
  :where(.oksTextField[data-size=xl]) {
    --oks-text-field-height: 52px;
    --oks-text-field-font-size: 18px;
    --oks-text-field-pad-x: var(--oks-space-4, 16px);
    --oks-text-field-pad-y: var(--oks-space-3, 12px);
  }
  :where(.oksTextField[data-has-start=true]) {
    --oks-text-field-slot-pad-left: var(--oks-space-2, 8px);
  }
  :where(.oksTextField[data-has-end=true]) {
    --oks-text-field-slot-pad-right: var(--oks-space-2, 8px);
  }
  :where(.oksTextField[data-radius=none]) {
    --oks-text-field-radius: 0;
  }
  :where(.oksTextField[data-radius=sm]) {
    --oks-text-field-radius: var(--oks-radius-sm, 0.25rem);
  }
  :where(.oksTextField[data-radius=md]) {
    --oks-text-field-radius: var(--oks-radius-md, 0.375rem);
  }
  :where(.oksTextField[data-radius=lg]) {
    --oks-text-field-radius: var(--oks-radius-lg, 0.5rem);
  }
  :where(.oksTextField[data-radius=full]) {
    --oks-text-field-radius: 9999px;
  }
  :where(.oksTextFieldLabel) {
    font-size: 14px;
    line-height: 1.2;
    color: var(--oks-palette-neutral-950, #0a0a0a);
  }
  :where(.oksTextFieldControl) {
    position: relative;
    min-width: 0;
    width: 100%;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    min-height: var(--oks-text-field-height);
    border-radius: var(--oks-text-field-radius);
    border: 1px solid var(--oks-text-field-border);
    background: var(--oks-text-field-bg);
  }
  :where(.oksTextFieldInputSlot) {
    position: relative;
    min-width: 0;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    padding: var(--oks-text-field-pad-y) var(--oks-text-field-slot-pad-right) var(--oks-text-field-pad-y) var(--oks-text-field-slot-pad-left);
  }
  :where(.oksTextFieldAdornment) {
    display: inline-flex;
    align-items: center;
    gap: var(--oks-text-field-adornment-gap);
    color: var(--oks-palette-neutral-600, #525252);
    flex: 0 0 auto;
    user-select: none;
  }
  :where(.oksTextFieldStart) {
    padding-left: var(--oks-text-field-pad-x);
  }
  :where(.oksTextFieldEnd) {
    padding-right: var(--oks-text-field-pad-x);
  }
  :where(.oksTextFieldAffix) {
    font-size: var(--oks-text-field-font-size);
    line-height: 1;
    white-space: nowrap;
  }
  :where(.oksTextFieldIcon) {
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }
  :where(.oksTextFieldInput) {
    appearance: none;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    height: calc(var(--oks-text-field-height) - (2 * var(--oks-text-field-pad-y)));
    padding: 0;
    border-radius: 0;
    border: none;
    background: transparent;
    color: inherit;
    font-size: var(--oks-text-field-font-size);
    line-height: 1.2;
    outline: none;
  }
  :where(.oksTextFieldInput:-webkit-autofill),
  :where(.oksTextFieldInput:-webkit-autofill:hover),
  :where(.oksTextFieldInput:-webkit-autofill:active) {
    box-shadow: 0 0 0 1000px var(--oks-text-field-bg) inset;
    -webkit-text-fill-color: var(--oks-text-field-fg);
    caret-color: var(--oks-text-field-fg);
  }
  :where(.oksTextFieldControl:hover) {
    border-color: var(--oks-text-field-border-hover);
  }
  :where(.oksTextFieldControl:focus-within) {
    border-color: var(--oks-text-field-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-field-border-focus) 28%, transparent);
  }
  :where(.oksTextField[data-invalid=true] .oksTextFieldControl) {
    border-color: var(--oks-text-field-error);
  }
  :where(.oksTextField[data-invalid=true] .oksTextFieldControl:focus-within) {
    border-color: var(--oks-text-field-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-field-error) 22%, transparent);
  }
  :where(.oksTextField[data-disabled=true] .oksTextFieldControl) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksTextField[data-variant=soft]) {
    --oks-text-field-bg: var(--oks-palette-neutral-50, #fafafa);
  }
  :where(.oksTextField[data-variant=soft] .oksTextFieldControl) {
    background: var(--oks-palette-neutral-50, #fafafa);
    border: none;
  }
  :where(.oksTextField[data-variant=underline] .oksTextFieldControl) {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--oks-text-field-border);
    background: transparent;
  }
  :where(.oksTextField[data-variant=underline] .oksTextFieldControl:hover) {
    border-bottom-color: var(--oks-text-field-border-hover);
  }
  :where(.oksTextField[data-variant=underline] .oksTextFieldControl:focus-within) {
    border-bottom-color: var(--oks-text-field-border-focus);
    box-shadow: none;
  }
  :where(.oksTextField[data-variant=underline][data-invalid=true] .oksTextFieldControl) {
    border-bottom-color: var(--oks-text-field-error);
  }
  :where(.oksTextField[data-variant=underline][data-invalid=true] .oksTextFieldControl:focus-within) {
    border-bottom-color: var(--oks-text-field-error);
    box-shadow: none;
  }
  :where(.oksTextFieldDescription) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-palette-neutral-700, #404040);
  }
  :where(.oksTextFieldError) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-text-field-error);
  }
  :where(.oksTextField[data-label-placement=floating] .oksTextFieldInputSlot > .oksTextFieldLabel) {
    position: absolute;
    left: var(--oks-text-field-slot-pad-left);
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--oks-text-field-font-size);
    line-height: 1;
    color: var(--oks-palette-neutral-500, #737373);
    pointer-events: none;
    max-width: calc(100% - var(--oks-text-field-slot-pad-left) - var(--oks-text-field-slot-pad-right));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: transparent;
    padding: 0;
    transition:
      top 140ms ease,
      transform 140ms ease,
      font-size 140ms ease,
      color 140ms ease;
  }
  :where(.oksTextField[data-label-placement=floating]) .oksTextFieldInput::placeholder {
    color: transparent;
    opacity: 1;
    transition: color 140ms ease;
    transition-delay: 0ms;
  }
  :where(.oksTextField[data-label-placement=floating] .oksTextFieldControl:focus-within) .oksTextFieldInput::placeholder {
    color: var(--oks-palette-neutral-500, #737373);
    transition-delay: 90ms;
  }
  :where(.oksTextField[data-label-placement=floating] .oksTextFieldControl:focus-within .oksTextFieldInputSlot > .oksTextFieldLabel),
  :where(.oksTextField[data-label-placement=floating] .oksTextFieldInputSlot > .oksTextFieldInput:not(:placeholder-shown) + .oksTextFieldLabel) {
    top: 10px;
    transform: translateY(0);
    font-size: 12px;
    color: var(--oks-text-field-border-focus);
  }
  :where(.oksTextField[data-variant=outline][data-label-placement=floating] .oksTextFieldControl:focus-within .oksTextFieldInputSlot > .oksTextFieldLabel),
  :where(.oksTextField[data-variant=outline][data-label-placement=floating] .oksTextFieldInputSlot > .oksTextFieldInput:not(:placeholder-shown) + .oksTextFieldLabel) {
    top: 0;
    transform: translateY(-50%);
    background: var(--oks-text-field-bg);
    padding: 0 4px;
  }
  :where(.oksTextField[data-variant=outline][data-label-placement=floating] .oksTextFieldControl:focus-within .oksTextFieldInputSlot > .oksTextFieldLabel) {
    left: calc(var(--oks-text-field-slot-pad-left) - 4px);
  }
  :where(.oksTextField[data-label-placement=floating][data-invalid=true] .oksTextFieldControl:focus-within .oksTextFieldInputSlot > .oksTextFieldLabel) {
    color: var(--oks-text-field-error);
  }
  @media (prefers-reduced-motion: reduce) {
    :where(.oksTextField[data-label-placement=floating] .oksTextFieldInputSlot > .oksTextFieldLabel),
    :where(.oksTextField[data-label-placement=floating]) .oksTextFieldInput::placeholder {
      transition: none;
    }
  }
}
`);var Fs=(r,s)=>r===1?s:`${s}s`,kx=m.forwardRef((r,s)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:h="md",variant:y="outline",color:x,tone:v,colorDepth:b=500,radius:w,rounded:S,startIcon:z,endIcon:C,prefix:T,suffix:N,className:M,id:Z,required:P,disabled:K,placeholder:q,style:I,value:G,defaultValue:$,onFocus:X,onBlur:me,strongPassword:ee,revealToggle:ge=!0,...re}=r,be=x??v??"default",se=w??S??"md",D=m.useId(),U=Z??`oks-password-field-${D}`,[Q,pe]=m.useState(!1),[fe,k]=m.useState(!1),F=re["aria-describedby"],E=u?`${U}-description`:void 0,j=p&&p!==!0?`${U}-error-message`:void 0,W=`${U}-requirements`,te=!!ee&&fe,ie=[F,E,te?W:void 0,te?void 0:j].filter(Boolean).join(" "),De=!!p,ae=m.useMemo(()=>d!=="floating"||!c||q!==void 0?q:" ",[d,c,q]),ne={"--oks-text-field-tone":La(be,b)},Re=d==="top"?c:null,we=d==="floating"?c:null,Te=z!=null||T!=null,Ee=C!=null||N!=null||ge,Ae=m.useMemo(()=>{if(!ee)return null;const ve=G!==void 0?String(G??""):$!==void 0?String($??""):"";return bx(ve,ee)},[G,$,ee]),de=m.useMemo(()=>{const ve=[];if(ee&&Ae){const le=typeof ee.minLength=="number"?ee.minLength:8,je=typeof ee.minUpper=="number"?ee.minUpper:1,Le=typeof ee.minLower=="number"?ee.minLower:1,We=typeof ee.minNumber=="number"?ee.minNumber:1,Ne=typeof ee.minSpecial=="number"?ee.minSpecial:1;We>0&&ve.push({key:"number",met:Ae.numberOk,label:`At least ${We} ${Fs(We,"number")}`}),je>0&&ve.unshift({key:"upper",met:Ae.upperOk,label:`At least ${je} uppercase ${Fs(je,"letter")}`}),Ne>0&&ve.push({key:"special",met:Ae.specialOk,label:`At least ${Ne} special ${Fs(Ne,"character")}`}),le>0&&ve.push({key:"length",met:Ae.minLengthOk,label:`At least ${le} ${Fs(le,"character")}`}),Le>0&&ve.push({key:"lower",met:Ae.lowerOk,label:`At least ${Le} lowercase ${Fs(Le,"letter")}`})}return ve},[ee,Ae]),ke=m.useMemo(()=>ee?Ae?Ae.ok?"Strong password.":"Weak password. Must contain;":"Must contain;":null,[ee,Ae]);return n.jsxs("div",{className:Pa("oksTextField oksPasswordField",M),"data-size":h,"data-variant":y,"data-color":be,"data-radius":se,"data-label-placement":d,"data-invalid":De?"true":"false","data-disabled":K?"true":"false","data-has-start":Te?"true":"false","data-has-end":Ee?"true":"false",style:{...ne,...I},children:[Re?n.jsxs("label",{className:"oksTextFieldLabel",htmlFor:U,children:[Re,P?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksTextFieldControl",onFocusCapture:()=>k(!0),onBlurCapture:ve=>{const le=ve.relatedTarget??null;le&&ve.currentTarget.contains(le)||k(!1)},children:[Te?n.jsxs("span",{className:"oksTextFieldAdornment oksTextFieldStart",children:[z!=null?n.jsx("span",{className:"oksTextFieldIcon",children:z}):null,T!=null?n.jsx("span",{className:"oksTextFieldAffix",children:T}):null]}):null,n.jsxs("div",{className:"oksTextFieldInputSlot",children:[n.jsx("input",{...re,ref:s,id:U,required:P,disabled:K,type:Q?"text":"password",value:G,defaultValue:$,placeholder:ae,className:"oksTextFieldInput","aria-invalid":De?"true":void 0,"aria-describedby":ie||void 0,"aria-errormessage":te?void 0:j,onFocus:ve=>{X?.(ve)},onBlur:ve=>{me?.(ve)}}),we?n.jsxs("label",{className:"oksTextFieldLabel",htmlFor:U,children:[we,P?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),Ee?n.jsxs("span",{className:"oksTextFieldAdornment oksTextFieldEnd",children:[N!=null?n.jsx("span",{className:"oksTextFieldAffix",children:N}):null,C!=null?n.jsx("span",{className:"oksTextFieldIcon",children:C}):null,ge?n.jsx("button",{type:"button",className:"oksPasswordFieldRevealButton","aria-label":Q?"Hide password":"Show password","aria-pressed":Q,disabled:K,tabIndex:K?-1:0,onClick:()=>pe(ve=>!ve),children:Q?n.jsx(jk,{}):n.jsx(wk,{})}):null]}):null,te&&de.length>0?n.jsxs("div",{id:W,className:"oksPasswordFieldRequirements",children:[ke?n.jsx("div",{className:"oksPasswordFieldRequirementsTitle",children:ke}):null,n.jsx("ul",{className:"oksPasswordFieldRequirementsList",children:de.map(ve=>n.jsxs("li",{className:"oksPasswordFieldRequirement","data-met":ve.met?"true":"false",children:[n.jsx("span",{className:"oksPasswordFieldRequirementIcon","aria-hidden":"true",children:n.jsx(su,{type:ve.met?"success":"error"})}),n.jsx("span",{children:ve.label})]},ve.key))})]}):null]}),u?n.jsx("div",{id:E,className:"oksTextFieldDescription",children:u}):null,te?null:p&&p!==!0?n.jsx("div",{id:j,className:"oksTextFieldError",role:"alert",children:p}):null]})});kx.displayName="PasswordField";zt(`@layer components {
  :where(.oksPhoneField) {
    --oks-phone-bg: #fff;
    --oks-phone-fg: var(--oks-palette-neutral-950, #0a0a0a);
    --oks-phone-border: var(--oks-palette-neutral-300, #d4d4d4);
    --oks-phone-border-hover: var(--oks-palette-neutral-400, #a3a3a3);
    --oks-phone-border-focus: var( --oks-phone-tone, var(--oks-color-primary-500, #3b82f6) );
    --oks-phone-error: var(--oks-color-danger-500, #e20202);
    --oks-phone-radius: var(--oks-radius-md, 0.375rem);
    --oks-phone-height: 40px;
    --oks-phone-font-size: 14px;
    --oks-phone-pad-x: var(--oks-space-3, 12px);
    --oks-phone-pad-y: var(--oks-space-2, 8px);
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
    color: var(--oks-phone-fg);
  }
  :where(.oksPhoneField[data-size=xs]) {
    --oks-phone-height: 32px;
    --oks-phone-font-size: 12px;
    --oks-phone-pad-x: var(--oks-space-2, 8px);
    --oks-phone-pad-y: var(--oks-space-1, 4px);
  }
  :where(.oksPhoneField[data-size=xs-sm]) {
    --oks-phone-height: 36px;
    --oks-phone-font-size: 13px;
  }
  :where(.oksPhoneField[data-size=sm]) {
    --oks-phone-height: 38px;
    --oks-phone-font-size: 14px;
  }
  :where(.oksPhoneField[data-size=md]) {
    --oks-phone-height: 44px;
    --oks-phone-font-size: 14px;
  }
  :where(.oksPhoneField[data-size=lg]) {
    --oks-phone-height: 48px;
    --oks-phone-font-size: 16px;
    --oks-phone-pad-x: var(--oks-space-4, 16px);
  }
  :where(.oksPhoneField[data-size=xl]) {
    --oks-phone-height: 52px;
    --oks-phone-font-size: 18px;
    --oks-phone-pad-x: var(--oks-space-4, 16px);
    --oks-phone-pad-y: var(--oks-space-3, 12px);
  }
  :where(.oksPhoneFieldLabel) {
    font-size: 14px;
    line-height: 1.2;
    color: var(--oks-palette-neutral-950, #0a0a0a);
  }
  :where(.oksPhoneFieldControl) {
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: stretch;
    border-radius: var(--oks-phone-radius);
    border: 1px solid var(--oks-phone-border);
    background: var(--oks-phone-bg);
    overflow: hidden;
  }
  :where(.oksPhoneFieldControl:hover) {
    border-color: var(--oks-phone-border-hover);
  }
  :where(.oksPhoneFieldControl:focus-within) {
    border-color: var(--oks-phone-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-phone-border-focus) 28%, transparent);
  }
  :where(.oksPhoneField[data-invalid=true] .oksPhoneFieldControl) {
    border-color: var(--oks-phone-error);
  }
  :where(.oksPhoneField[data-invalid=true] .oksPhoneFieldControl:focus-within) {
    border-color: var(--oks-phone-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-phone-error) 22%, transparent);
  }
  :where(.oksPhoneField[data-disabled=true] .oksPhoneFieldControl) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksPhoneField[data-variant=soft]) {
    --oks-phone-bg: var(--oks-palette-neutral-50, #fafafa);
  }
  :where(.oksPhoneField[data-variant=soft] .oksPhoneFieldControl) {
    background: var(--oks-palette-neutral-50, #fafafa);
    border: none;
  }
  :where(.oksPhoneField[data-variant=underline] .oksPhoneFieldControl) {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--oks-phone-border);
    background: transparent;
  }
  :where(.oksPhoneField[data-variant=underline] .oksPhoneFieldControl:hover) {
    border-bottom-color: var(--oks-phone-border-hover);
  }
  :where(.oksPhoneField[data-variant=underline] .oksPhoneFieldControl:focus-within) {
    border-bottom-color: var(--oks-phone-border-focus);
    box-shadow: none;
  }
  :where(.oksPhoneField[data-variant=underline][data-invalid=true] .oksPhoneFieldControl) {
    border-bottom-color: var(--oks-phone-error);
  }
  :where(.oksPhoneField[data-variant=underline][data-invalid=true] .oksPhoneFieldControl:focus-within) {
    border-bottom-color: var(--oks-phone-error);
    box-shadow: none;
  }
  :where(.oksPhoneFieldCode) {
    min-width: 0;
    display: flex;
    align-items: stretch;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksPhoneField[data-country-code-mode=hidden] .oksPhoneFieldCode) {
    display: none;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectField)) {
    width: auto;
    min-width: 0;
    display: block;
    gap: 0;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldControl)) {
    width: auto;
    display: flex;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger)) {
    border: 0;
    border-radius: 0;
    height: var(--oks-phone-height);
    padding: var(--oks-phone-pad-y) var(--oks-phone-pad-x);
    background: transparent;
    box-shadow: none;
    justify-content: flex-start;
    width: auto;
    min-width: 72px;
    gap: 6px;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldTriggerValue)) {
    display: inline-flex;
    align-items: center;
    overflow: visible;
    text-overflow: clip;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger:hover)) {
    border-color: transparent;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldControl:focus-within .oksSelectFieldTrigger)) {
    border-color: transparent;
    box-shadow: none;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger)::after) {
    content: "";
    width: 6px;
    height: 6px;
    margin-left: 0;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg);
    opacity: 0.9;
    flex: 0 0 auto;
  }
  :where(.oksPhoneDialCode) {
    height: var(--oks-phone-height);
    display: inline-flex;
    align-items: center;
    padding: 0 var(--oks-phone-pad-x);
    font-size: var(--oks-phone-font-size);
    color: inherit;
    font-variant-numeric: tabular-nums;
    font-weight: 600;
    flex: 0 0 auto;
  }
  :where(.oksPhoneCountryOption) {
    display: inline-flex;
    align-items: center;
    gap: var(--oks-space-2, 8px);
    min-width: 0;
  }
  :where(.oksPhoneCountryFlag) {
    width: 18px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }
  :where(.oksPhoneCountryShort) {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
    flex: 0 0 auto;
  }
  :where(.oksPhoneCountryName) {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :where(.oksPhoneCountryCode) {
    flex: 0 0 auto;
    font-variant-numeric: tabular-nums;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger) .oksPhoneCountryName) {
    display: none;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldTrigger) .oksPhoneCountryCode) {
    display: none;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldMenu) .oksPhoneCountryOption) {
    width: 100%;
  }
  :where(.oksPhoneFieldCode :where(.oksSelectFieldMenu) .oksPhoneCountryName) {
    flex: 1 1 auto;
  }
  :where(.oksPhoneFieldInputWrap) {
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
  }
  :where(.oksPhoneFieldInput) {
    appearance: none;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    height: var(--oks-phone-height);
    padding: var(--oks-phone-pad-y) var(--oks-phone-pad-x);
    border-radius: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font-size: var(--oks-phone-font-size);
    line-height: 1.2;
    outline: none;
  }
  :where(.oksPhoneFieldInput::placeholder) {
    color: var(--oks-palette-neutral-400, #a3a3a3);
  }
  :where(.oksPhoneField[data-variant=soft] .oksPhoneFieldInput) {
    background: transparent;
  }
  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInput {
    padding-top: calc(var(--oks-phone-pad-y) + 10px);
  }
  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInput::placeholder {
    color: transparent;
    opacity: 1;
    transition: color 140ms ease;
  }
  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap:focus-within .oksPhoneFieldInput::placeholder {
    color: var(--oks-palette-neutral-500, #737373);
  }
  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap > .oksPhoneFieldLabel {
    position: absolute;
    left: var(--oks-phone-pad-x);
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--oks-phone-font-size);
    line-height: 1;
    color: var(--oks-palette-neutral-500, #737373);
    pointer-events: none;
    max-width: calc(100% - (2 * var(--oks-phone-pad-x)));
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition:
      top 140ms ease,
      transform 140ms ease,
      font-size 140ms ease,
      color 140ms ease;
  }
  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap:focus-within > .oksPhoneFieldLabel,
  .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap > .oksPhoneFieldInput:not(:placeholder-shown) + .oksPhoneFieldLabel {
    top: 10px;
    transform: translateY(0);
    font-size: 12px;
    color: var(--oks-phone-border-focus);
  }
  .oksPhoneField[data-label-placement=floating][data-invalid=true] .oksPhoneFieldInputWrap:focus-within > .oksPhoneFieldLabel {
    color: var(--oks-phone-error);
  }
  @media (prefers-reduced-motion: reduce) {
    .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInput::placeholder,
    .oksPhoneField[data-label-placement=floating] .oksPhoneFieldInputWrap > .oksPhoneFieldLabel {
      transition: none;
    }
  }
  :where(.oksPhoneFieldDescription) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-palette-neutral-700, #404040);
  }
  :where(.oksPhoneFieldError) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-phone-error);
  }
}
`);var I0=[{name:"United States",code:"+1",flag:"🇺🇸",shortCode:"US"},{name:"India",code:"+91",flag:"🇮🇳",shortCode:"IN"},{name:"United Kingdom",code:"+44",flag:"🇬🇧",shortCode:"GB"},{name:"United Arab Emirates",code:"+971",flag:"🇦🇪",shortCode:"AE"}],_d=(r,s)=>{if(r&&typeof r=="object"){const c=r;return{code:String(c.code||s),phone:String(c.phone??"")}}return{code:s,phone:""}},yx=m.forwardRef((r,s)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:h="md",variant:y="outline",tone:x="primary",colorDepth:v=500,className:b,id:w,name:S,required:z,disabled:C,value:T,defaultValue:N,defaultCountryCode:M,countryCodeMode:Z="select",countryOptions:P,numbersOnly:K=!0,onChange:q,phonePlaceholder:I="Phone number",style:G,onBlur:$,...X}=r,me=m.useId(),ee=w??`oks-phone-${me}`,ge=X["aria-describedby"],re=u?`${ee}-description`:void 0,be=p&&p!==!0?`${ee}-error-message`:void 0,se=[ge,re,be].filter(Boolean).join(" "),D=!!p,U={"--oks-phone-tone":La(x,v)},Q=P&&P.length>0?P:I0,pe=M??Q[0]?.code??"",[fe,k]=m.useState(()=>_d(T??N,pe));m.useEffect(()=>{T!==void 0&&k(_d(T,pe))},[T,pe]);const F=T!==void 0?_d(T,pe):fe,E=we=>{if(we.name)return String(we.name);if(we.label){const Te=String(we.label),Ee=Te.match(/^\s*(.*?)\s*\(/);return Ee?.[1]?Ee[1].trim():Te.trim()}return""},j=we=>{if(we.shortCode)return String(we.shortCode);if(we.label){const Ee=String(we.label).match(/^\s*([A-Za-z]{2,3})\s*\(/);if(Ee?.[1])return Ee[1].trim()}return""},W=m.useMemo(()=>Q.map(we=>({label:n.jsxs("span",{className:"oksPhoneCountryOption",children:[we.flag?n.jsx("span",{className:"oksPhoneCountryFlag",children:we.flag}):j(we)?n.jsx("span",{className:"oksPhoneCountryShort",children:j(we)}):null,E(we)?n.jsx("span",{className:"oksPhoneCountryName",children:E(we)}):null,n.jsx("span",{className:"oksPhoneCountryCode",children:we.code})]}),value:we.code,key:we.key??we.code})),[Q]),te=m.useMemo(()=>d!=="floating"||!c||I!==void 0?I:" ",[d,c,I]),ie=d==="top"?c:null,De=d==="floating"?c:null,ae=we=>{T===void 0&&k(we),q?.(we)},ne=K&&X.inputMode===void 0?"numeric":X.inputMode,Re=K&&X.pattern===void 0?"\\d*":X.pattern;return n.jsxs("div",{className:Pa("oksPhoneField",b),"data-size":h,"data-variant":y,"data-tone":x,"data-country-code-mode":Z,"data-label-placement":d,"data-invalid":D?"true":"false","data-disabled":C?"true":"false",style:{...U,...G},children:[ie?n.jsxs("label",{className:"oksPhoneFieldLabel",htmlFor:`${ee}-phone`,children:[ie,z?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksPhoneFieldControl",children:[Z==="select"?n.jsxs("div",{className:"oksPhoneFieldCode",children:[n.jsx(Xn,{"aria-label":"Country code",size:h,variant:y,tone:x,colorDepth:v,options:W,value:String(F.code??""),disabled:C,onChange:we=>ae({code:String(we?.target?.value??""),phone:F.phone}),onBlur:$}),n.jsx("span",{className:"oksPhoneDialCode","aria-hidden":"true",children:String(F.code??"")})]}):null,n.jsxs("div",{className:"oksPhoneFieldInputWrap",children:[n.jsx("input",{...X,ref:s,id:`${ee}-phone`,name:S,type:"tel",disabled:C,required:z,className:"oksPhoneFieldInput",placeholder:te,"aria-invalid":D?"true":void 0,"aria-describedby":se||void 0,"aria-errormessage":be,value:String(F.phone??""),inputMode:ne,pattern:Re,onChange:we=>{const Te=we.currentTarget.value,Ee=K?Te.replace(/[^\d]/g,""):Te,Ae=X.maxLength,de=typeof Ae=="number"&&Number.isFinite(Ae)&&Ae>=0?Ee.slice(0,Ae):Ee;ae({code:F.code,phone:de})},onBlur:$}),De?n.jsxs("label",{className:"oksPhoneFieldLabel",htmlFor:`${ee}-phone`,children:[De,z?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]})]}),u?n.jsx("div",{id:re,className:"oksPhoneFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:be,className:"oksPhoneFieldError",role:"alert",children:p}):null]})});yx.displayName="PhoneField";zt(`@layer components {
  :where(.oksRadioGroupField) {
    --oks-radio-fg: var(--oks-palette-neutral-950, #0a0a0a);
    --oks-radio-muted: var(--oks-palette-neutral-700, #404040);
    --oks-radio-border: var(--oks-palette-neutral-300, #d4d4d4);
    --oks-radio-border-focus: var(--oks-radio-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-radio-error: var(--oks-color-danger-500, #e20202);
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
    color: var(--oks-radio-fg);
  }
  :where(.oksRadioGroupFieldLabel) {
    font-size: 14px;
    line-height: 1.2;
  }
  :where(.oksRadioGroupFieldItems) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksRadioGroupFieldItem) {
    display: inline-flex;
    align-items: center;
    gap: var(--oks-space-2, 8px);
    user-select: none;
    cursor: pointer;
  }
  :where(.oksRadioGroupFieldItem[data-disabled=true]) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksRadioGroupFieldInput) {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid var(--oks-radio-border);
    border-radius: 999px;
    background: #fff;
    display: inline-grid;
    place-items: center;
    outline: none;
  }
  :where(.oksRadioGroupFieldInput:checked) {
    border-color: var(--oks-radio-border-focus);
  }
  :where(.oksRadioGroupFieldInput:checked::after) {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--oks-radio-border-focus);
  }
  :where(.oksRadioGroupFieldInput:focus-visible) {
    border-color: var(--oks-radio-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-radio-border-focus) 28%, transparent);
  }
  :where(.oksRadioGroupField[data-invalid=true] .oksRadioGroupFieldInput) {
    border-color: var(--oks-radio-error);
  }
  :where(.oksRadioGroupField[data-invalid=true] .oksRadioGroupFieldInput:checked::after) {
    background: var(--oks-radio-error);
  }
  :where(.oksRadioGroupField[data-invalid=true] .oksRadioGroupFieldInput:focus-visible) {
    border-color: var(--oks-radio-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-radio-error) 22%, transparent);
  }
  :where(.oksRadioGroupFieldItemLabel) {
    font-size: 14px;
    line-height: 1.2;
    color: var(--oks-radio-muted);
  }
  :where(.oksRadioGroupFieldDescription) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-radio-muted);
  }
  :where(.oksRadioGroupFieldError) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-radio-error);
  }
}
`);var wx=m.forwardRef((r,s)=>{const{label:c,description:d,error:u,size:p="md",tone:h="primary",colorDepth:y=500,className:x,id:v,name:b,required:w,disabled:S,options:z,value:C,defaultValue:T,onChange:N,style:M}=r,Z=m.useId(),P=v??`oks-radio-group-${Z}`,K=b??P,q=d?`${P}-description`:void 0,I=u&&u!==!0?`${P}-error-message`:void 0,G=[q,I].filter(Boolean).join(" "),$=!!u,X=C!==void 0,[me,ee]=m.useState(()=>T??"");m.useEffect(()=>{X&&ee(C??"")},[X,C]);const ge=X?String(C??""):me,re={"--oks-radio-tone":La(h,y)};return n.jsxs("div",{ref:s,className:Pa("oksRadioGroupField",x),"data-size":p,"data-tone":h,"data-invalid":$?"true":"false","data-disabled":S?"true":"false",style:{...re,...M},children:[c?n.jsxs("div",{className:"oksRadioGroupFieldLabel",children:[c,w?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsx("div",{role:"radiogroup","aria-describedby":G||void 0,children:n.jsx("div",{className:"oksRadioGroupFieldItems",children:z.map((be,se)=>{const D=`${P}-${be.key??`${se}-${be.value}`}`,U=S||be.disabled,Q=String(ge)===be.value;return n.jsxs("label",{className:"oksRadioGroupFieldItem","data-disabled":U?"true":"false",children:[n.jsx("input",{id:D,type:"radio",name:K,disabled:U,value:be.value,checked:Q,onChange:()=>{U||(X||ee(be.value),N?.(be.value))},className:"oksRadioGroupFieldInput","aria-invalid":$?"true":void 0}),n.jsx("span",{className:"oksRadioGroupFieldItemLabel",children:be.label})]},be.key??`${se}-${be.value}`)})})}),d?n.jsx("div",{id:q,className:"oksRadioGroupFieldDescription",children:d}):null,u&&u!==!0?n.jsx("div",{id:I,className:"oksRadioGroupFieldError",role:"alert",children:u}):null]})});wx.displayName="RadioGroupField";zt(`@layer components {
  :where(.oksSwitchField) {
    --oks-switch-fg: var(--oks-palette-neutral-950, #0a0a0a);
    --oks-switch-muted: var(--oks-palette-neutral-700, #404040);
    --oks-switch-border-focus: var(--oks-switch-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-switch-error: var(--oks-color-danger-500, #e20202);
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
    color: var(--oks-switch-fg);
  }
  :where(.oksSwitchFieldRow) {
    display: inline-flex;
    align-items: center;
    gap: var(--oks-space-2, 8px);
    cursor: pointer;
    user-select: none;
  }
  :where(.oksSwitchField[data-label-placement=top] .oksSwitchFieldRow) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--oks-space-1, 4px);
  }
  :where(.oksSwitchField[data-disabled=true] .oksSwitchFieldRow) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksSwitchFieldControl) {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  :where(.oksSwitchFieldControlInner) {
    display: inline-flex;
    align-items: center;
    gap: var(--oks-space-2, 8px);
  }
  :where(.oksSwitchFieldInput) {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    pointer-events: none;
  }
  :where(.oksSwitchFieldTrack) {
    width: 36px;
    height: 20px;
    border-radius: 999px;
    background: var(--oks-palette-neutral-300, #d4d4d4);
    display: inline-flex;
    align-items: center;
    padding: 2px;
    box-sizing: border-box;
    transition: background 140ms ease;
  }
  :where(.oksSwitchFieldThumb) {
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: #fff;
    transform: translateX(0);
    transition: transform 140ms ease;
  }
  :where(.oksSwitchFieldInput:checked + .oksSwitchFieldControlInner .oksSwitchFieldTrack) {
    background: var(--oks-switch-border-focus);
  }
  :where(.oksSwitchFieldInput:checked + .oksSwitchFieldControlInner .oksSwitchFieldTrack .oksSwitchFieldThumb) {
    transform: translateX(16px);
  }
  :where(.oksSwitchFieldInput:focus-visible + .oksSwitchFieldControlInner .oksSwitchFieldTrack) {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-switch-border-focus) 28%, transparent);
  }
  :where(.oksSwitchField[data-invalid=true] .oksSwitchFieldTrack) {
    background: color-mix(in srgb, var(--oks-switch-error) 40%, #fff);
  }
  :where(.oksSwitchField[data-invalid=true] .oksSwitchFieldInput:checked + .oksSwitchFieldControlInner .oksSwitchFieldTrack) {
    background: var(--oks-switch-error);
  }
  :where(.oksSwitchField[data-invalid=true] .oksSwitchFieldInput:focus-visible + .oksSwitchFieldControlInner .oksSwitchFieldTrack) {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-switch-error) 22%, transparent);
  }
  :where(.oksSwitchFieldStateText) {
    display: inline-flex;
    font-size: 13px;
    line-height: 1.2;
    color: var(--oks-switch-muted);
    white-space: nowrap;
  }
  :where(.oksSwitchFieldControlInner[data-state-text-placement=before] .oksSwitchFieldTrack) {
    order: 2;
  }
  :where(.oksSwitchFieldControlInner[data-state-text-placement=before] .oksSwitchFieldStateText) {
    order: 1;
    display: none;
  }
  :where(.oksSwitchFieldControlInner[data-state-text-placement=after] .oksSwitchFieldTrack) {
    order: 2;
  }
  :where(.oksSwitchFieldControlInner[data-state-text-placement=after] .oksSwitchFieldStateText) {
    order: 3;
    display: none;
  }
  :where(.oksSwitchFieldControlInner[data-state-text-placement=both] .oksSwitchFieldTrack) {
    order: 2;
  }
  :where(.oksSwitchFieldControlInner[data-state-text-placement=both] .oksSwitchFieldStateText[data-state=unchecked]) {
    order: 1;
  }
  :where(.oksSwitchFieldControlInner[data-state-text-placement=both] .oksSwitchFieldStateText[data-state=checked]) {
    order: 3;
  }
  :where(.oksSwitchFieldControlInner[data-state-text-placement=both] .oksSwitchFieldStateText) {
    opacity: 0.7;
  }
  :where(.oksSwitchFieldInput:not(:checked) + .oksSwitchFieldControlInner .oksSwitchFieldStateText[data-state=unchecked]) {
    display: inline-flex;
    opacity: 1;
    color: var(--oks-switch-fg);
  }
  :where(.oksSwitchFieldInput:checked + .oksSwitchFieldControlInner .oksSwitchFieldStateText[data-state=checked]) {
    display: inline-flex;
    opacity: 1;
    color: var(--oks-switch-fg);
  }
  :where(.oksSwitchFieldLabel) {
    font-size: 14px;
    line-height: 1.2;
    color: var(--oks-switch-muted);
  }
  :where(.oksSwitchField[data-label-placement=top] .oksSwitchFieldLabel) {
    color: var(--oks-palette-neutral-950, #0a0a0a);
  }
  :where(.oksSwitchFieldDescription) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-switch-muted);
  }
  :where(.oksSwitchFieldError) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-switch-error);
  }
  @media (prefers-reduced-motion: reduce) {
    :where(.oksSwitchFieldTrack),
    :where(.oksSwitchFieldThumb) {
      transition: none;
    }
  }
}
`);var jx=m.forwardRef((r,s)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:h="md",tone:y="primary",colorDepth:x=500,className:v,id:b,required:w,disabled:S,checked:z,defaultChecked:C,onChange:T,showStateText:N=!1,checkedText:M="On",uncheckedText:Z="Off",stateTextPlacement:P="after",style:K,...q}=r,I=m.useId(),G=b??`oks-switch-${I}`,$=d==="floating"?"top":d,X=u?`${G}-description`:void 0,me=p&&p!==!0?`${G}-error-message`:void 0,ee=[X,me].filter(Boolean).join(" "),ge=!!p,re={"--oks-switch-tone":La(y,x)};return n.jsxs("div",{className:Pa("oksSwitchField",v),"data-size":h,"data-tone":y,"data-label-placement":$,"data-invalid":ge?"true":"false","data-disabled":S?"true":"false",style:{...re,...K},children:[n.jsxs("label",{ref:s,className:"oksSwitchFieldRow",htmlFor:G,children:[$==="top"&&c?n.jsxs("span",{className:"oksSwitchFieldLabel",children:[c,w?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("span",{className:"oksSwitchFieldControl",children:[n.jsx("input",{...q,id:G,type:"checkbox",role:"switch",required:w,disabled:S,checked:z,defaultChecked:C,onChange:be=>T?.(be.currentTarget.checked),className:"oksSwitchFieldInput","aria-invalid":ge?"true":void 0,"aria-describedby":ee||void 0,"aria-errormessage":me}),n.jsxs("span",{className:"oksSwitchFieldControlInner","data-state-text-placement":P,children:[n.jsx("span",{className:"oksSwitchFieldTrack","aria-hidden":"true",children:n.jsx("span",{className:"oksSwitchFieldThumb"})}),N?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"oksSwitchFieldStateText","data-state":"unchecked",children:Z}),n.jsx("span",{className:"oksSwitchFieldStateText","data-state":"checked",children:M})]}):null]})]}),$!=="top"&&c?n.jsxs("span",{className:"oksSwitchFieldLabel",children:[c,w?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),u?n.jsx("div",{id:X,className:"oksSwitchFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:me,className:"oksSwitchFieldError",role:"alert",children:p}):null]})});jx.displayName="SwitchField";zt(`@layer components {
  :where(.oksTextAreaField) {
    --oks-text-area-bg: #fff;
    --oks-text-area-fg: var(--oks-palette-neutral-950, #0a0a0a);
    --oks-text-area-border: var(--oks-palette-neutral-300, #d4d4d4);
    --oks-text-area-border-hover: var(--oks-palette-neutral-400, #a3a3a3);
    --oks-text-area-border-focus: var(--oks-text-area-tone, var(--oks-color-primary-500, #3b82f6));
    --oks-text-area-error: var(--oks-color-danger-500, #e20202);
    --oks-text-area-radius: var(--oks-radius-md, 0.375rem);
    --oks-text-area-font-size: 14px;
    --oks-text-area-pad-x: var(--oks-space-3, 12px);
    --oks-text-area-pad-y: var(--oks-space-2, 8px);
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--oks-space-1, 4px);
    color: var(--oks-text-area-fg);
  }
  :where(.oksTextAreaField[data-size=xs]) {
    --oks-text-area-font-size: 12px;
    --oks-text-area-pad-x: var(--oks-space-2, 8px);
    --oks-text-area-pad-y: var(--oks-space-1, 4px);
  }
  :where(.oksTextAreaField[data-size=xs-sm]) {
    --oks-text-area-font-size: 13px;
  }
  :where(.oksTextAreaField[data-size=sm]) {
    --oks-text-area-font-size: 14px;
  }
  :where(.oksTextAreaField[data-size=md]) {
    --oks-text-area-font-size: 14px;
  }
  :where(.oksTextAreaField[data-size=lg]) {
    --oks-text-area-font-size: 16px;
    --oks-text-area-pad-x: var(--oks-space-4, 16px);
  }
  :where(.oksTextAreaField[data-size=xl]) {
    --oks-text-area-font-size: 18px;
    --oks-text-area-pad-x: var(--oks-space-4, 16px);
    --oks-text-area-pad-y: var(--oks-space-3, 12px);
  }
  :where(.oksTextAreaFieldLabel) {
    font-size: 14px;
    line-height: 1.2;
    color: var(--oks-palette-neutral-950, #0a0a0a);
  }
  :where(.oksTextAreaFieldControl) {
    position: relative;
    min-width: 0;
    width: 100%;
  }
  :where(.oksTextAreaFieldInput) {
    appearance: none;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: var(--oks-text-area-pad-y) var(--oks-text-area-pad-x);
    border-radius: var(--oks-text-area-radius);
    border: 1px solid var(--oks-text-area-border);
    background: var(--oks-text-area-bg);
    color: inherit;
    font-size: var(--oks-text-area-font-size);
    line-height: 1.35;
    outline: none;
    resize: vertical;
  }
  :where(.oksTextAreaField[data-variant=soft]) {
    --oks-text-area-bg: var(--oks-palette-neutral-50, #fafafa);
  }
  :where(.oksTextAreaField[data-variant=soft] .oksTextAreaFieldInput) {
    background: var(--oks-palette-neutral-50, #fafafa);
    border: none;
  }
  :where(.oksTextAreaFieldInput:-webkit-autofill),
  :where(.oksTextAreaFieldInput:-webkit-autofill:hover),
  :where(.oksTextAreaFieldInput:-webkit-autofill:active) {
    box-shadow: 0 0 0 1000px var(--oks-text-area-bg) inset;
    -webkit-text-fill-color: var(--oks-text-area-fg);
    caret-color: var(--oks-text-area-fg);
  }
  :where(.oksTextAreaFieldInput:-webkit-autofill:focus-visible),
  :where(.oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput:-webkit-autofill) {
    border-color: var(--oks-text-area-border-focus);
    box-shadow: 0 0 0 1000px var(--oks-text-area-bg) inset, 0 0 0 3px color-mix(in srgb, var(--oks-text-area-border-focus) 28%, transparent);
  }
  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldInput:-webkit-autofill:focus-visible),
  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput:-webkit-autofill) {
    border-color: var(--oks-text-area-error);
    box-shadow: 0 0 0 1000px var(--oks-text-area-bg) inset, 0 0 0 3px color-mix(in srgb, var(--oks-text-area-error) 22%, transparent);
  }
  :where(.oksTextAreaFieldInput:hover) {
    border-color: var(--oks-text-area-border-hover);
  }
  :where(.oksTextAreaFieldInput:focus-visible),
  :where(.oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput) {
    border-color: var(--oks-text-area-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-area-border-focus) 28%, transparent);
  }
  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldInput) {
    border-color: var(--oks-text-area-error);
  }
  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldInput:focus-visible),
  :where(.oksTextAreaField[data-invalid=true] .oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput) {
    border-color: var(--oks-text-area-error);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--oks-text-area-error) 22%, transparent);
  }
  :where(.oksTextAreaField[data-disabled=true] .oksTextAreaFieldInput) {
    cursor: not-allowed;
    opacity: 0.72;
  }
  :where(.oksTextAreaField[data-variant=underline] .oksTextAreaFieldInput) {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--oks-text-area-border);
    background: transparent;
  }
  :where(.oksTextAreaField[data-variant=underline] .oksTextAreaFieldInput:hover) {
    border-bottom-color: var(--oks-text-area-border-hover);
  }
  :where(.oksTextAreaField[data-variant=underline] .oksTextAreaFieldInput:focus-visible),
  :where(.oksTextAreaField[data-variant=underline] .oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput) {
    border-bottom-color: var(--oks-text-area-border-focus);
    box-shadow: none;
  }
  :where(.oksTextAreaField[data-variant=underline][data-invalid=true] .oksTextAreaFieldInput) {
    border-bottom-color: var(--oks-text-area-error);
  }
  :where(.oksTextAreaField[data-variant=underline][data-invalid=true] .oksTextAreaFieldInput:focus-visible),
  :where(.oksTextAreaField[data-variant=underline][data-invalid=true] .oksTextAreaFieldControl:focus-within .oksTextAreaFieldInput) {
    border-bottom-color: var(--oks-text-area-error);
    box-shadow: none;
  }
  :where(.oksTextAreaFieldDescription) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-palette-neutral-700, #404040);
  }
  :where(.oksTextAreaFieldError) {
    font-size: 13px;
    line-height: 1.35;
    color: var(--oks-text-area-error);
  }
  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldInput) {
    padding-top: calc(var(--oks-text-area-pad-y) + 10px);
  }
  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl > .oksTextAreaFieldLabel) {
    position: absolute;
    left: var(--oks-text-area-pad-x);
    top: 18px;
    transform: translateY(-50%);
    font-size: var(--oks-text-area-font-size);
    color: var(--oks-palette-neutral-500, #737373);
    pointer-events: none;
    max-width: calc(100% - (2 * var(--oks-text-area-pad-x)));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition:
      top 140ms ease,
      transform 140ms ease,
      font-size 140ms ease,
      color 140ms ease;
  }
  :where(.oksTextAreaField[data-label-placement=floating]) .oksTextAreaFieldInput::placeholder {
    opacity: 0;
    transition: opacity 140ms ease;
  }
  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl:focus-within) .oksTextAreaFieldInput::placeholder {
    opacity: 0.72;
  }
  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl:focus-within > .oksTextAreaFieldLabel),
  :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl > .oksTextAreaFieldInput:not(:placeholder-shown) + .oksTextAreaFieldLabel) {
    top: 8px;
    transform: translateY(0);
    font-size: 12px;
    color: var(--oks-text-area-border-focus);
  }
  :where(.oksTextAreaField[data-label-placement=floating][data-invalid=true] .oksTextAreaFieldControl:focus-within > .oksTextAreaFieldLabel) {
    color: var(--oks-text-area-error);
  }
  @media (prefers-reduced-motion: reduce) {
    :where(.oksTextAreaField[data-label-placement=floating] .oksTextAreaFieldControl > .oksTextAreaFieldLabel),
    :where(.oksTextAreaField[data-label-placement=floating]) .oksTextAreaFieldInput::placeholder {
      transition: none;
    }
  }
}
`);var Sx=m.forwardRef((r,s)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:h="md",variant:y="outline",tone:x="primary",colorDepth:v=500,className:b,id:w,required:S,disabled:z,placeholder:C,rows:T=4,style:N,...M}=r,Z=m.useId(),P=w??`oks-text-area-${Z}`,K=M["aria-describedby"],q=u?`${P}-description`:void 0,I=p&&p!==!0?`${P}-error-message`:void 0,G=[K,q,I].filter(Boolean).join(" "),$=!!p,X=m.useMemo(()=>d!=="floating"||!c||C!==void 0?C:" ",[d,c,C]),me={"--oks-text-area-tone":La(x,v)},ee=d==="top"?c:null,ge=d==="floating"?c:null;return n.jsxs("div",{className:Pa("oksTextAreaField",b),"data-size":h,"data-variant":y,"data-tone":x,"data-label-placement":d,"data-invalid":$?"true":"false","data-disabled":z?"true":"false",style:{...me,...N},children:[ee?n.jsxs("label",{className:"oksTextAreaFieldLabel",htmlFor:P,children:[ee,S?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksTextAreaFieldControl",children:[n.jsx("textarea",{...M,ref:s,id:P,required:S,disabled:z,placeholder:X,rows:T,className:"oksTextAreaFieldInput","aria-invalid":$?"true":void 0,"aria-describedby":G||void 0,"aria-errormessage":I}),ge?n.jsxs("label",{className:"oksTextAreaFieldLabel",htmlFor:P,children:[ge,S?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),u?n.jsx("div",{id:q,className:"oksTextAreaFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:I,className:"oksTextAreaFieldError",role:"alert",children:p}):null]})});Sx.displayName="TextAreaField";var Qd=m.forwardRef((r,s)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:h="md",variant:y="outline",color:x,tone:v,colorDepth:b=500,radius:w,rounded:S,startIcon:z,endIcon:C,prefix:T,suffix:N,className:M,id:Z,required:P,disabled:K,placeholder:q,style:I,...G}=r,$=x??v??"default",X=w??S??"md",me=m.useId(),ee=Z??`oks-text-field-${me}`,ge=G["aria-describedby"],re=u?`${ee}-description`:void 0,be=p&&p!==!0?`${ee}-error-message`:void 0,se=[ge,re,be].filter(Boolean).join(" "),D=!!p,U=m.useMemo(()=>d!=="floating"||!c||q!==void 0?q:" ",[d,c,q]),Q={"--oks-text-field-tone":La($,b)},pe=d==="top"?c:null,fe=d==="floating"?c:null,k=z!=null||T!=null,F=C!=null||N!=null;return n.jsxs("div",{className:Pa("oksTextField",M),"data-size":h,"data-variant":y,"data-color":$,"data-radius":X,"data-label-placement":d,"data-invalid":D?"true":"false","data-disabled":K?"true":"false","data-has-start":k?"true":"false","data-has-end":F?"true":"false",style:{...Q,...I},children:[pe?n.jsxs("label",{className:"oksTextFieldLabel",htmlFor:ee,children:[pe,P?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksTextFieldControl",children:[k?n.jsxs("span",{className:"oksTextFieldAdornment oksTextFieldStart",children:[z!=null?n.jsx("span",{className:"oksTextFieldIcon",children:z}):null,T!=null?n.jsx("span",{className:"oksTextFieldAffix",children:T}):null]}):null,n.jsxs("div",{className:"oksTextFieldInputSlot",children:[n.jsx("input",{...G,ref:s,id:ee,required:P,disabled:K,placeholder:U,className:"oksTextFieldInput","aria-invalid":D?"true":void 0,"aria-describedby":se||void 0,"aria-errormessage":be}),fe?n.jsxs("label",{className:"oksTextFieldLabel",htmlFor:ee,children:[fe,P?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),F?n.jsxs("span",{className:"oksTextFieldAdornment oksTextFieldEnd",children:[N!=null?n.jsx("span",{className:"oksTextFieldAffix",children:N}):null,C!=null?n.jsx("span",{className:"oksTextFieldIcon",children:C}):null]}):null]}),u?n.jsx("div",{id:re,className:"oksTextFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:be,className:"oksTextFieldError",role:"alert",children:p}):null]})});Qd.displayName="TextField";var Cx=m.createContext(void 0),U0=()=>m.useContext(Cx),Ke=m.forwardRef((r,s)=>{const{children:c,onSubmit:d,onError:u,validationMode:p="blur",showErrorsOn:h="blur",className:y="",validateOnMount:x=!1,initialValues:v={},disableAutofill:b=!0,...w}=r,{autoComplete:S,...z}=w,C=S??(b?"off":void 0),[T,N]=m.useState(()=>v||{}),[M,Z]=m.useState({}),[P,K]=m.useState({}),[q,I]=m.useState(!1),[G,$]=m.useState({}),X=m.useRef(v||{}),me=m.useRef({}),ee=m.useRef(new Set),ge=m.useRef({}),re=m.useRef(v||{});m.useEffect(()=>{re.current=v||{}},[v]),m.useEffect(()=>{X.current=T},[T]);const be=m.useCallback(E=>{const j=String(E||"field").trim()||"field",W=ee.current,te=ge.current;if(!W.has(j))return W.add(j),te[j]=1,j;let ie=(te[j]||1)+1,De=`${j}_${ie}`;for(;W.has(De);)ie+=1,De=`${j}_${ie}`;return te[j]=ie,W.add(De),De},[]),se=m.useCallback((E,j)=>{!j||!j.rules||Object.keys(j.rules).length<1||$(W=>{const te=W[E],ie=te?JSON.stringify(te):"",De=JSON.stringify(j);return ie===De?W:{...W,[E]:j}})},[]),D=m.useCallback(E=>{$(j=>{const W={...j};return delete W[E],W}),ee.current.delete(E),Z(j=>{const W={...j};return delete W[E],W}),K(j=>{const W={...j};return delete W[E],W})},[]),U=m.useCallback((E,j,W)=>{if(!W||!W.rules)return null;const te=Os(j,W.rules,W.message??{},{formData:X.current,fieldName:E}),ie=As(te);return Z(De=>({...De,[E]:ie})),ie},[]),Q=m.useCallback((E,j)=>{if(N(te=>({...te,[E]:j})),(!!P[E]||p==="change")&&G[E]){const te=me.current;te[E]&&clearTimeout(te[E]),te[E]=setTimeout(()=>{const ie=G[E];ie&&U(E,j,ie),te[E]=void 0},400)}},[P,p,G,U]),pe=m.useCallback(E=>{K(W=>({...W,[E]:!0}));const j=G[E];if(j){const W=T[E];U(E,W,j)}},[G,T,U]),fe=m.useCallback(async E=>{E.preventDefault(),I(!0);const j=Bh(T,G);if(Z(j),Object.keys(j).some(te=>j[te]!==null)){const te={};Object.keys(G).forEach(ie=>{te[ie]=!0}),K(te),I(!1),u?.(j);return}try{await d(T)}catch(te){const ie=te instanceof Error?te.message:"Submit failed";u?.({submit:ie})}finally{I(!1)}},[T,G,d,u]),k=m.useCallback(E=>{const j=E&&typeof E=="object"?E:re.current||{};N(j),Z({}),K({}),I(!1)},[]);m.useImperativeHandle(s,()=>({reset:k}),[k]),m.useEffect(()=>{if(x&&Object.keys(G).length>0){const E=Bh(T,G);Z(E)}},[x,G,T]);const F={formData:T,errors:M,touched:P,isSubmitting:q,disableAutofill:b,validationMode:p,showErrorsOn:h,validationSchema:G,registerField:se,unregisterField:D,validateFieldValue:U,handleFieldChange:Q,handleFieldBlur:pe,getUniqueFieldName:be,setFormData:N,setErrors:Z,setTouched:K};return n.jsx(Cx.Provider,{value:F,children:n.jsxs("form",{onSubmit:fe,className:y,noValidate:!0,autoComplete:C,...z,children:[b?n.jsxs(n.Fragment,{children:[n.jsx("input",{tabIndex:-1,"aria-hidden":"true",type:"text",name:"__oks_autofill_username",autoComplete:"username",style:{position:"absolute",top:0,left:-9999,width:1,height:1,opacity:0,pointerEvents:"none"}}),n.jsx("input",{tabIndex:-1,"aria-hidden":"true",type:"password",name:"__oks_autofill_password",autoComplete:"new-password",style:{position:"absolute",top:0,left:-9999,width:1,height:1,opacity:0,pointerEvents:"none"}})]}):null,c]})})});Ke.displayName="Form";var Id=r=>String(r||"").toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"");function H0(r,s){if(r)return r[s]}function V0(r,s){if(r)return r[s]}var Fe=r=>{const{type:s="text",label:c,description:d,labelPlacement:u,size:p="md",variant:h="outline",color:y,tone:x,colorDepth:v=500,name:b,id:w,validation:S,error:z,touched:C,...T}=r,N=y??x??"default",{onChange:M,onBlur:Z,value:P,defaultValue:K,...q}=T,I=U0(),G=!!I?.disableAutofill,{autoComplete:$,...X}=q??{},me=$??(G?s==="password"?"new-password":"off":void 0),ee=me===void 0?X:{...X,autoComplete:me},ge=m.useId(),re=m.useMemo(()=>String(ge).replace(/[^a-z0-9_-]/gi,""),[ge]),be=ee?.placeholder,se=m.useMemo(()=>w?Id(w):c?Id(c):be?Id(be):"field",[w,c,be]),D=m.useRef(null);D.current===null&&(b?D.current=b:typeof I?.getUniqueFieldName=="function"?D.current=I.getUniqueFieldName(se):D.current=se);const U=m.useRef(null);if(U.current===null)if(w)U.current=w;else{const ve=re||"id";U.current=`${se}_${ve}`}const Q=D.current??se,pe=U.current??`${se}_${re||"id"}`,fe=m.useMemo(()=>S&&S.rules&&Object.keys(S.rules).length>0?S:null,[S]),k=I?.registerField,F=I?.unregisterField,E=m.useRef(!1);m.useEffect(()=>(k&&fe&&!E.current&&(k(Q,fe),E.current=!0),()=>{F&&E.current&&(F(Q),E.current=!1)}),[Q,fe,k,F]),m.useEffect(()=>{k&&fe&&E.current&&k(Q,fe)},[fe,Q,k]);const[j,W]=m.useState(()=>P!==void 0?P:K!==void 0?K:s==="checkbox"?[]:s==="switch"?!1:s==="file"?null:""),[te,ie]=m.useState(!1),[De,ae]=m.useState(null);m.useEffect(()=>{if(!I&&fe?.rules){const ve=Os(j,fe.rules,fe.message??{});ae(As(ve))}},[I,j,fe]);const ne=(()=>{if(I){const ve=H0(I.formData,Q);if(ve!==void 0)return ve}return P!==void 0?P:j})(),Re=C!==void 0?C:I?!!I.touched[Q]:te,we=z!==void 0?z:I?V0(I.errors,Q):De,Te=!!we&&!!Re,Ee=ve=>{const le=(()=>{if(ve&&typeof ve=="object"&&"target"in ve){const je=ve.target;return s==="file"?je.files??null:je.value}return ve})();if(I)I.handleFieldChange(Q,le),I.validationMode==="change"&&fe?.rules&&I.validateFieldValue(Q,le,fe);else if(W(le),fe?.rules){const je=Os(le,fe.rules,fe.message??{});ae(As(je))}M?.(ve)},Ae=ve=>{if(I)I.handleFieldBlur(Q);else if(ie(!0),fe?.rules){const le=Os(j,fe.rules,fe.message??{});ae(As(le))}Z?.(ve)},de={label:c,description:d,labelPlacement:u,size:p,variant:h,color:N,colorDepth:v,id:pe,name:Q,disabled:ee.disabled,required:ee.required};if(s==="textarea"){const ve=ne==null?"":String(ne);return n.jsx(Sx,{...ee,...de,value:ve,onChange:Ee,onBlur:Ae,error:Te?we:!1})}if(s==="select"){const{placeholder:ve,placeholderOption:le,...je}=ee,We=!!ee.multiple?Array.isArray(ne)?ne.map(Ne=>String(Ne)):[]:ne==null?"":String(ne);return n.jsx(Xn,{...je,...de,placeholderOption:le??ve,value:We,onChange:Ee,onBlur:Ae,error:Te?we:!1})}if(s==="radio"){const ve=ne==null?"":String(ne);return n.jsx(wx,{...ee,...de,value:ve,onChange:le=>Ee(le),error:Te?we:!1})}if(s==="checkbox"){const ve=Array.isArray(ne)?ne.map(le=>String(le)):[];return n.jsx(xx,{...ee,...de,value:ve,onChange:le=>Ee(le),error:Te?we:!1})}if(s==="switch")return n.jsx(jx,{...ee,...de,checked:!!ne,onChange:ve=>Ee(ve),error:Te?we:!1});if(s==="datepicker"){const le=!!ee.range?ne&&typeof ne=="object"?{start:String(ne.start??""),end:String(ne.end??"")}:{start:"",end:""}:ne==null?"":String(ne);return n.jsx(gx,{...ee,...de,value:le,onChange:je=>Ee(je),onBlur:Ae,error:Te?we:!1})}if(s==="phone"){const ve=ee.defaultCountryCode,le=String(ve??"+1"),je=ne&&typeof ne=="object"?{code:String(ne.code||le),phone:String(ne.phone??"")}:{code:le,phone:""};return n.jsx(yx,{...ee,...de,value:je,onChange:Le=>Ee(Le),onBlur:Ae,error:Te?we:!1})}if(s==="password"){const ve=ne==null?"":String(ne),le=fe?.rules?.strongPassword;return n.jsx(kx,{...ee,...de,value:ve,onChange:Ee,onBlur:Ae,error:Te?we:!1,strongPassword:le})}if(s==="file")return n.jsx(Qd,{...ee,...de,type:"file",onChange:Ee,onBlur:Ae,error:Te?we:!1});const ke=ne==null?"":String(ne);return n.jsx(Qd,{...ee,...de,type:s,value:ke,onChange:Ee,onBlur:Ae,error:Te?we:!1})};function Wd(r){return typeof r=="string"?r:Array.isArray(r)?r.map(Wd).join(""):xe.isValidElement(r)?Wd(r.props.children):""}function $0(r,s){return r.split(`
`).map(c=>c.length?`${s}${c}`:c).join(`
`)}function q0(r){const s=(r??"").trim();if(!s)return"";if(/^\s*import\s/m.test(s)||/export\s+default\s/m.test(s))return!/import\s+React\b/.test(s)&&/\bReact\./.test(s)?`import React from "react";
${s}`:s;const c=[...s.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)],d=Array.from(new Set(c.map(h=>h[1]).filter(h=>h!=="React"))),u=d.length?`import { ${d.join(", ")} } from "oks-ui";
`:"",p=$0(s,"      ");return`import React from "react";
${u}
export default function Example() {
  return (
    <>
${p}
    </>
  );
}`}const R=({title:r,preview:s,code:c})=>{const d=Wd(c),u=q0(d);return n.jsxs("div",{className:"w-full",children:[n.jsx("h3",{className:"text-lg font-bold",children:r}),n.jsxs(pi,{defaultSelectedKey:"preview",variant:"underlined",color:"primary",children:[n.jsx(Ht,{title:"Preview",children:n.jsx("div",{className:"w-full h-full p-5 border border-gray-300 rounded-md",children:s})},"preview"),n.jsx(Ht,{title:"Code",children:n.jsx("pre",{className:"w-full h-full p-5 bg-gray-900 rounded-md text-white overflow-x-auto text-sm font-mono",children:n.jsx("code",{children:u})})},"code")]})]})},G0=()=>n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(St,{title:"Heads up",description:"Something happened."}),n.jsx(St,{title:"Title only"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Heads up" description="Something happened." />
<Alert title="Title only" />`})}),Y0=()=>n.jsx(R,{title:"Colors",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(St,{color:"default",title:"Default",description:"Default color"}),n.jsx(St,{color:"primary",title:"Primary",description:"Primary color"}),n.jsx(St,{color:"secondary",title:"Secondary",description:"Secondary color"}),n.jsx(St,{color:"info",title:"Info",description:"Info color"}),n.jsx(St,{color:"success",title:"Success",description:"Success color"}),n.jsx(St,{color:"warning",title:"Warning",description:"Warning color"}),n.jsx(St,{color:"danger",title:"Danger",description:"Danger color"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert color="default" title="Default" description="Default color" />
<Alert color="primary" title="Primary" description="Primary color" />
<Alert color="secondary" title="Secondary" description="Secondary color" />
<Alert color="info" title="Info" description="Info color" />
<Alert color="success" title="Success" description="Success color" />
<Alert color="warning" title="Warning" description="Warning color" />
<Alert color="danger" title="Danger" description="Danger color" />`})}),K0=()=>n.jsx(R,{title:"Variants",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(St,{variant:"flat",title:"Flat",description:"Default variant"}),n.jsx(St,{variant:"solid",title:"Solid",description:"Solid variant"}),n.jsx(St,{variant:"bordered",title:"Bordered",description:"Bordered variant"}),n.jsx(St,{variant:"faded",title:"Faded",description:"Faded variant"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert variant="flat" title="Flat" description="Default variant" />
<Alert variant="solid" title="Solid" description="Solid variant" />
<Alert variant="bordered" title="Bordered" description="Bordered variant" />
<Alert variant="faded" title="Faded" description="Faded variant" />`})}),X0=()=>n.jsx(R,{title:"Radius",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(St,{radius:"none",title:"None",description:"radius=none"}),n.jsx(St,{radius:"sm",title:"Small",description:"radius=sm"}),n.jsx(St,{radius:"md",title:"Medium",description:"radius=md"}),n.jsx(St,{radius:"lg",title:"Large",description:"radius=lg"}),n.jsx(St,{radius:"full",title:"Full",description:"radius=full"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert radius="none" title="None" description="radius=none" />
<Alert radius="sm" title="Small" description="radius=sm" />
<Alert radius="md" title="Medium" description="radius=md" />
<Alert radius="lg" title="Large" description="radius=lg" />
<Alert radius="full" title="Full" description="radius=full" />`})}),Z0=()=>n.jsx(R,{title:"Icons",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(St,{title:"Default icon",description:"Icon is derived from color",color:"primary"}),n.jsx(St,{title:"Hide icon",description:"hideIcon=true",hideIcon:!0}),n.jsx(St,{title:"Hide icon wrapper",description:"hideIconWrapper=true",hideIconWrapper:!0}),n.jsx(St,{title:"Custom icon",description:"Use icon prop",icon:n.jsx("span",{"aria-hidden":!0,className:"text-lg leading-none",children:"★"})})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Default icon" description="Icon is derived from color" color="primary" />
<Alert title="Hide icon" description="hideIcon=true" hideIcon />
<Alert title="Hide icon wrapper" description="hideIconWrapper=true" hideIconWrapper />
<Alert title="Custom icon" description="Use icon prop" icon={<span aria-hidden>★</span>} />`})}),Q0=()=>n.jsx(R,{title:"With Action",preview:n.jsx("div",{className:"flex flex-col gap-3",children:n.jsx(St,{title:"Update available",description:"A newer version is ready to install.",color:"primary",endContent:n.jsx(O,{size:"sm",children:"Update"})})}),code:n.jsx(n.Fragment,{children:`import { Alert, Button } from "oks-ui";

<Alert
  title="Update available"
  description="A newer version is ready to install."
  color="primary"
  endContent={<Button size="sm">Update</Button>}
/>`})}),W0=()=>n.jsx(R,{title:"Closable",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(St,{title:"Closable alert",description:"Click Close to hide (uncontrolled).",isClosable:!0}),n.jsx(St,{title:"Closable (custom close button)",description:"closeButtonProps example",isClosable:!0,closeButtonProps:{className:"bg-white/15 hover:bg-white/20"},color:"danger",variant:"solid"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

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
/>`})}),J0=()=>{const[r,s]=m.useState(!0);return n.jsx(R,{title:"Controlled Visibility",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(O,{size:"sm",variant:"bordered",onClick:()=>s(!0),children:"Show"}),n.jsx(O,{size:"sm",variant:"bordered",onClick:()=>s(!1),children:"Hide"}),n.jsxs("div",{className:"text-sm text-gray-700",children:["isVisible: ",String(r)]})]}),n.jsx(St,{title:"Controlled alert",description:"Uses isVisible and onVisibleChange.",isClosable:!0,isVisible:r,onVisibleChange:s,color:"success"})]}),code:n.jsx(n.Fragment,{children:`import { useState } from "react";
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
}`})})},ey=()=>n.jsx(R,{title:"ClassNames",preview:n.jsx("div",{className:"flex flex-col gap-3",children:n.jsx(St,{title:"Custom slots",description:"Uses classNames slots to style parts.",classNames:{base:"ring-2 ring-purple-400/60",title:"text-purple-900",description:"text-purple-900/80",iconWrapper:"text-purple-900",closeButton:"text-purple-900"},isClosable:!0,color:"secondary",variant:"flat"})}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

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
/>`})}),Lt=({title:r,rows:s,footnote:c})=>n.jsxs("div",{className:"w-full",children:[n.jsx("h3",{className:"text-lg font-bold",children:r}),n.jsx("div",{className:"w-full overflow-x-auto border border-gray-200 rounded-md",children:n.jsxs("table",{className:"min-w-[760px] w-full text-sm",children:[n.jsx("thead",{className:"bg-gray-50 text-gray-700",children:n.jsxs("tr",{children:[n.jsx("th",{className:"text-left font-semibold px-4 py-3",children:"Prop"}),n.jsx("th",{className:"text-left font-semibold px-4 py-3",children:"Type"}),n.jsx("th",{className:"text-left font-semibold px-4 py-3",children:"Default"}),n.jsx("th",{className:"text-left font-semibold px-4 py-3",children:"Description"})]})}),n.jsx("tbody",{className:"divide-y divide-gray-200",children:s.map(d=>n.jsxs("tr",{className:"bg-white",children:[n.jsx("td",{className:"px-4 py-3 align-top",children:n.jsx("code",{className:"text-xs bg-gray-100 px-2 py-1 rounded",children:d.prop})}),n.jsx("td",{className:"px-4 py-3 align-top",children:n.jsx("code",{className:"text-xs bg-gray-100 px-2 py-1 rounded",children:d.type})}),n.jsx("td",{className:"px-4 py-3 align-top",children:n.jsx("code",{className:"text-xs bg-gray-100 px-2 py-1 rounded",children:d.default})}),n.jsx("td",{className:"px-4 py-3 align-top text-gray-700",children:d.description})]},d.prop))})]})}),c?n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:c}):null]}),ty=()=>{const r=[{prop:"title",type:"ReactNode",default:"—",description:"Alert title content."},{prop:"description",type:"ReactNode",default:"—",description:"Alert description content."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color. Also drives the default icon."},{prop:"variant",type:'"solid" | "bordered" | "flat" | "faded"',default:'"flat"',description:"Visual style variant."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:"Border radius."},{prop:"icon",type:"ReactNode",default:"—",description:"Custom icon. When omitted, a default status icon is shown based on color."},{prop:"hideIcon",type:"boolean",default:"false",description:"Hides the icon."},{prop:"hideIconWrapper",type:"boolean",default:"false",description:"Renders the icon without its wrapper."},{prop:"startContent",type:"ReactNode",default:"—",description:"Additional content rendered after the icon (before the title/description)."},{prop:"endContent",type:"ReactNode",default:"—",description:"Additional content rendered after the title/description (before the close button)."},{prop:"isClosable",type:"boolean",default:"false",description:"Shows a close button."},{prop:"isVisible",type:"boolean",default:"—",description:"Controlled visibility. When false, alert is removed from the DOM. When omitted, the alert is visible by default."},{prop:"onVisibleChange",type:"(isVisible: boolean) => void",default:"—",description:"Called when visibility should change (e.g. close button click)."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the close button is used."},{prop:"closeButtonProps",type:'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">',default:"—",description:'Props passed to the close button (type="button" is always used).'},{prop:"classNames",type:"Partial<Record<AlertSlot, string>>",default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element. Merged with internal CSS variables."}];return n.jsx(Lt,{title:"Alert Props",rows:r,footnote:"Alert also supports standard div props such as className, id, style, and aria-*."})},ny=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(G0,{}),n.jsx(Y0,{}),n.jsx(K0,{}),n.jsx(X0,{}),n.jsx(Z0,{}),n.jsx(Q0,{}),n.jsx(W0,{}),n.jsx(J0,{}),n.jsx(ey,{}),n.jsx(ty,{})]}),ay=()=>n.jsx(R,{title:"How to usage",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{name:"Omkar Sahu"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{name:"Manav"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
            
            <Avatar name="Omkar Sahu" />
            <Avatar src="https://i.pravatar.cc/150?img=5" />
            <Avatar name="Manav" />`})}),oy=()=>n.jsx(R,{title:"Sizes",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{className:"w-6 h-6 text-tiny",src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{size:"sm",src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{size:"md",src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{size:"lg",src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{className:"w-20 h-20 text-large",src:"https://i.pravatar.cc/150?img=5"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar className="w-6 h-6 text-tiny" name="Omkar Sahu" />
<Avatar size="sm" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="lg" src="https://i.pravatar.cc/150?img=5" />
<Avatar className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?img=5" />`})}),ry=()=>n.jsx(R,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"Default",color:"default"}),n.jsx(Ce,{name:"Primary",color:"primary"}),n.jsx(Ce,{name:"Secondary",color:"secondary"}),n.jsx(Ce,{name:"Info",color:"info"}),n.jsx(Ce,{name:"Success",color:"success"}),n.jsx(Ce,{name:"Warning",color:"warning"}),n.jsx(Ce,{name:"Danger",color:"danger"})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="Default" color="default" />
<Avatar name="Primary" color="primary" />
<Avatar name="Secondary" color="secondary" />
<Avatar name="Info" color="info" />
<Avatar name="Success" color="success" />
<Avatar name="Warning" color="warning" />
<Avatar name="Danger" color="danger" />`})}),sy=()=>n.jsx(R,{title:"Color depth",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"50",colorDepth:50}),n.jsx(Ce,{name:"100",colorDepth:100}),n.jsx(Ce,{name:"200",colorDepth:200}),n.jsx(Ce,{name:"3000",colorDepth:300}),n.jsx(Ce,{name:"400",colorDepth:400}),n.jsx(Ce,{name:"500",colorDepth:500}),n.jsx(Ce,{name:"600",colorDepth:600}),n.jsx(Ce,{name:"700",colorDepth:700}),n.jsx(Ce,{name:"800",colorDepth:800}),n.jsx(Ce,{name:"900",colorDepth:900})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="50" colorDepth={50} />
<Avatar name="100" colorDepth={100} />
<Avatar name="200" colorDepth={200} />
<Avatar name="3000" colorDepth={300} />
<Avatar name="400" colorDepth={400} />
<Avatar name="500" colorDepth={500} />
<Avatar name="600" colorDepth={600} />
<Avatar name="700" colorDepth={700} />
<Avatar name="800" colorDepth={800} />
<Avatar name="900" colorDepth={900} />`})}),ly=()=>n.jsx(R,{title:"Disabled",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{isDisabled:!0,name:"Omkar Sahu"}),n.jsx(Ce,{isDisabled:!0,src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{isDisabled:!0,name:"Manav"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar isDisabled name="Omkar Sahu" />
<Avatar isDisabled src="https://i.pravatar.cc/150?img=5" />
<Avatar isDisabled name="Manav" />`})}),iy=()=>n.jsx(R,{title:"Border",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{isBordered:!0,name:"Omkar Sahu"}),n.jsx(Ce,{isBordered:!0,src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{isBordered:!0,name:"Manav"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
                
    <Avatar isBordered name="Omkar Sahu" />
    <Avatar isBordered src="https://i.pravatar.cc/150?img=5" />
    <Avatar isBordered name="Manav" />`})}),cy=()=>n.jsx(R,{title:"Radius",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{radius:"none"}),n.jsx(Ce,{radius:"sm"}),n.jsx(Ce,{radius:"md"}),n.jsx(Ce,{radius:"lg"}),n.jsx(Ce,{radius:"full"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar radius="none" />
<Avatar radius="sm" />
<Avatar radius="md" />
<Avatar radius="lg" />
<Avatar radius="full" />`})}),dy=()=>n.jsx(R,{title:"Tooltip",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"Hover me",tooltip:!0}),n.jsx(Ce,{name:"Custom content",tooltip:{content:n.jsxs("div",{className:"flex flex-col",children:[n.jsx("span",{className:"font-semibold",children:"Custom tooltip"}),n.jsx("span",{className:"text-xs opacity-80",children:"Any ReactNode"})]})}}),n.jsx(Ce,{name:"Placement",tooltip:{props:{placement:"bottom",showArrow:!0}}}),n.jsx(Ce,{isDisabled:!0,name:"Disabled + tooltip",tooltip:!0})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

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

<Avatar isDisabled name="Disabled + tooltip" tooltip />`})}),Ud="https://example.com/does-not-exist.png",uy=()=>n.jsx(R,{title:"Fallbacks",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"Omkar Sahu"}),n.jsx(Ce,{}),n.jsx(Ce,{src:Ud,name:"Broken (no fallback)"}),n.jsx(Ce,{src:Ud,name:"Broken + showFallback",showFallback:!0}),n.jsx(Ce,{src:Ud,name:"Custom fallback",showFallback:!0,fallback:n.jsx("span",{className:"text-xs font-semibold",children:"FB"})}),n.jsx(Ce,{name:"Custom icon",icon:n.jsx("span",{className:"text-sm",children:"★"})})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

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
<Avatar name="Custom icon" icon={<span className="text-sm">★</span>} />`})}),py=()=>n.jsx(R,{title:"Focusable",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"text-sm opacity-80",children:"Use Tab to see focus ring"}),n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{isFocusable:!0,name:"Focusable"}),n.jsx(Ce,{isFocusable:!0,isBordered:!0,name:"Bordered"}),n.jsx(Ce,{isFocusable:!0,tooltip:!0,name:"Focusable + tooltip"}),n.jsx(Ce,{isFocusable:!0,tabIndex:-1,name:"tabIndex -1"})]})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar isFocusable name="Focusable" />
<Avatar isFocusable isBordered name="Bordered" />
<Avatar isFocusable tooltip name="Focusable + tooltip" />
<Avatar isFocusable tabIndex={-1} name="tabIndex -1" />`})}),Dx=xe.forwardRef((r,s)=>n.jsx("img",{...r,ref:s,style:{filter:"grayscale(1)",...r.style??{}}}));Dx.displayName="GrayscaleImg";const fy=()=>n.jsx(R,{title:"Custom image",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"imgProps",src:"https://i.pravatar.cc/150?img=5",imgProps:{loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",alt:"Avatar photo"}}),n.jsx(Ce,{name:"ImgComponent",src:"https://i.pravatar.cc/150?img=5",ImgComponent:Dx,imgProps:{referrerPolicy:"no-referrer"}})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
/>`})}),my=()=>n.jsx(R,{title:"classNames (slots)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"Slot styles",classNames:{base:"ring-2 ring-pink-500 ring-offset-2 ring-offset-white",name:"text-black",fallback:"bg-white/30"}}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=5",classNames:{base:"ring-2 ring-emerald-500 ring-offset-2 ring-offset-white",img:"scale-110"}}),n.jsx(Ce,{classNames:{base:"ring-2 ring-sky-500 ring-offset-2 ring-offset-white",icon:"text-yellow-200"},icon:n.jsx("span",{className:"text-sm",children:"★"})})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

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
/>`})}),hy=n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsxs(_o,{children:[n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=6"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=7"})]}),n.jsxs(_o,{max:3,total:8,children:[n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=8"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=9"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=10"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=11"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=12"})]}),n.jsxs(_o,{max:2,total:5,renderCount:r=>`+${r} more`,children:[n.jsx(Ce,{name:"A"}),n.jsx(Ce,{name:"B"}),n.jsx(Ce,{name:"C"}),n.jsx(Ce,{name:"D"})]})]}),n.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:n.jsxs(_o,{isGrid:!0,children:[n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=13"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=14"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=15"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=16"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=17"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=18"})]})}),n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsxs(_o,{size:"sm",radius:"md",color:"success",isBordered:!0,children:[n.jsx(Ce,{name:"Group"}),n.jsx(Ce,{name:"Styles"}),n.jsx(Ce,{name:"Override",color:"danger"}),n.jsx(Ce,{name:"Own radius",radius:"full"})]}),n.jsxs(_o,{isDisabled:!0,size:"sm",color:"secondary",children:[n.jsx(Ce,{name:"Disabled"}),n.jsx(Ce,{name:"Group"}),n.jsx(Ce,{name:"Avatars"})]})]})]}),xy=`import { Avatar, AvatarGroup } from "oks-ui";

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
</AvatarGroup>

<AvatarGroup isDisabled size="sm" color="secondary">
  <Avatar name="Disabled" />
  <Avatar name="Group" />
  <Avatar name="Avatars" />
</AvatarGroup>`,gy=()=>n.jsx(R,{title:"AvatarGroup",preview:hy,code:xy}),vy=()=>{const r=[{prop:"name",type:"string",default:"—",description:"Name used for initials fallback and default aria-label."},{prop:"src",type:"string",default:"—",description:"Image source URL."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Avatar size."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color for background/border."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"full"',description:"Border radius."},{prop:"colorDepth",type:"50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",default:"500",description:"Color intensity used to compute CSS variables."},{prop:"isBordered",type:"boolean",default:"false",description:"Shows a border ring."},{prop:"isDisabled",type:"boolean",default:"false",description:"Marks the avatar as disabled and prevents focus."},{prop:"isFocusable",type:"boolean",default:"false",description:"Makes the avatar focusable (tabIndex=0 by default)."},{prop:"showFallback",type:"boolean",default:"false",description:"When true, shows fallback content if the image fails."},{prop:"icon",type:"ReactNode",default:"—",description:"Fallback icon when there is no name and no custom fallback."},{prop:"fallback",type:"ReactNode",default:"—",description:"Custom fallback content (replaces initials/default icon)."},{prop:"tooltip",type:"boolean | TooltipProps (without children/content) | { props?: TooltipProps; content?: ReactNode }",default:"false",description:"Shows a tooltip with the name or custom content."},{prop:"ImgComponent",type:"React.ElementType",default:'"img"',description:"Custom component used for the image element."},{prop:"imgProps",type:"object",default:"—",description:"Props passed to ImgComponent (excluding src/children)."},{prop:"classNames",type:'Partial<Record<"base" | "img" | "fallback" | "name" | "icon", string>>',default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}],s=[{prop:"children",type:"ReactNode",default:"—",description:"Avatars to render inside the group."},{prop:"max",type:"number",default:"5",description:"Maximum avatars to show before overflowing into a count."},{prop:"total",type:"number",default:"—",description:"Total count used to compute the overflow count."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Avatar size for the group."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color applied to the group."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"full"',description:"Border radius applied to group items."},{prop:"isGrid",type:"boolean",default:"false",description:"Uses a grid layout instead of an overlapping stack."},{prop:"isDisabled",type:"boolean",default:"—",description:"Marks the group as disabled."},{prop:"isBordered",type:"boolean",default:"false",description:"Shows borders on items in the group."},{prop:"renderCount",type:"(count: number) => ReactNode",default:"—",description:"Custom renderer for the overflow count badge."},{prop:"classNames",type:'Partial<Record<"base" | "count", string>>',default:"—",description:"Slot class overrides for group root/count."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the group root element."}],c=[{prop:"size",type:"number",default:"18",description:"Icon size in pixels."}];return n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(Lt,{title:"Avatar Props",rows:r,footnote:"Avatar also supports standard div props such as className, id, aria-*, and data-*."}),n.jsx(Lt,{title:"AvatarGroup Props",rows:s,footnote:"AvatarGroup also supports standard div props such as className, id, aria-*, and data-*."}),n.jsx(Lt,{title:"AvatarIcon Props",rows:c,footnote:"AvatarIcon also supports standard svg props."})]})},by=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(ay,{}),n.jsx(oy,{}),n.jsx(ry,{}),n.jsx(sy,{}),n.jsx(cy,{}),n.jsx(iy,{}),n.jsx(ly,{}),n.jsx(dy,{}),n.jsx(uy,{}),n.jsx(py,{}),n.jsx(fy,{}),n.jsx(my,{}),n.jsx(gy,{}),n.jsx(vy,{})]}),ky=()=>n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[n.jsx(lt,{content:5,"aria-label":"5 unread notifications",children:n.jsx(O,{variant:"bordered",children:"Notifications"})}),n.jsx(lt,{isDot:!0,"aria-label":"Has new activity",children:n.jsx(O,{variant:"bordered",children:"Activity"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={5} aria-label="5 unread notifications">
  <Button variant="bordered">Notifications</Button>
</Badge>

<Badge isDot aria-label="Has new activity">
  <Button variant="bordered">Activity</Button>
</Badge>`})}),yy=()=>n.jsxs(n.Fragment,{children:[n.jsx(R,{title:"Variants",preview:n.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[n.jsx(lt,{content:3,variant:"solid","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"solid"})}),n.jsx(lt,{content:3,variant:"bordered","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"bordered"})}),n.jsx(lt,{content:3,variant:"light","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"light"})}),n.jsx(lt,{content:3,variant:"flat","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"flat"})}),n.jsx(lt,{content:3,variant:"faded","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"faded"})}),n.jsx(lt,{content:3,variant:"shadow","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"shadow"})}),n.jsx(lt,{content:3,variant:"ghost","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"ghost"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={3} variant="solid">...</Badge>
<Badge content={3} variant="bordered">...</Badge>
<Badge content={3} variant="light">...</Badge>
<Badge content={3} variant="flat">...</Badge>
<Badge content={3} variant="faded">...</Badge>
<Badge content={3} variant="shadow">...</Badge>
<Badge content={3} variant="ghost">...</Badge>`})}),n.jsx(R,{title:"Max",preview:n.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[n.jsx(lt,{content:9,max:9,"aria-label":"9 notifications",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"max=9"})}),n.jsx(lt,{content:10,max:9,"aria-label":"10 notifications",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"10 → 9+"})}),n.jsx(lt,{content:4890,max:999,"aria-label":"4890 notifications",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"4890 → 999+"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} max={9} aria-label="9 notifications">...</Badge>
<Badge content={10} max={9} aria-label="10 notifications">...</Badge>
<Badge content={4890} max={999} aria-label="4890 notifications">...</Badge>`})})]}),wy=()=>n.jsx(R,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[n.jsx(lt,{content:1,color:"default","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"default"})}),n.jsx(lt,{content:1,color:"primary","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"primary"})}),n.jsx(lt,{content:1,color:"secondary","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"secondary"})}),n.jsx(lt,{content:1,color:"info","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"info"})}),n.jsx(lt,{content:1,color:"success","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"success"})}),n.jsx(lt,{content:1,color:"warning","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"warning"})}),n.jsx(lt,{content:1,color:"danger","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"danger"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} color="default">...</Badge>
<Badge content={1} color="primary">...</Badge>
<Badge content={1} color="secondary">...</Badge>
<Badge content={1} color="success">...</Badge>
<Badge content={1} color="warning">...</Badge>
<Badge content={1} color="danger">...</Badge>`})}),jy=()=>n.jsx(R,{title:"Sizes",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(lt,{content:7,size:"sm","aria-label":"7 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"sm"})}),n.jsx(lt,{content:7,size:"md","aria-label":"7 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"md"})}),n.jsx(lt,{content:7,size:"lg","aria-label":"7 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"lg"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={7} size="sm">...</Badge>
<Badge content={7} size="md">...</Badge>
<Badge content={7} size="lg">...</Badge>`})}),Sy=()=>n.jsx(R,{title:"Placements",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(lt,{content:1,placement:"top-left","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-left"})}),n.jsx(lt,{content:1,placement:"top-right","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-right"})}),n.jsx(lt,{content:1,placement:"bottom-left","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-left"})}),n.jsx(lt,{content:1,placement:"bottom-right","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-right"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} placement="top-left">...</Badge>
<Badge content={1} placement="top-right">...</Badge>
<Badge content={1} placement="bottom-left">...</Badge>
<Badge content={1} placement="bottom-right">...</Badge>`})}),Cy=()=>n.jsx(R,{title:"Shapes",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(lt,{content:9,shape:"rectangle","aria-label":"9 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"rectangle"})}),n.jsx(lt,{content:9,shape:"circle","aria-label":"9 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"circle"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} shape="rectangle">...</Badge>
<Badge content={9} shape="circle">...</Badge>`})}),Dy=()=>n.jsx(R,{title:"Outline",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(lt,{content:2,"aria-label":"2 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline"})}),n.jsx(lt,{content:2,showOutline:!1,"aria-label":"2 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline=false"})}),n.jsx(lt,{content:2,disableOutline:!0,"aria-label":"2 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"disableOutline"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={2}>...</Badge>
<Badge content={2} showOutline={false}>...</Badge>
<Badge content={2} disableOutline>...</Badge>`})}),Ty=()=>n.jsx(R,{title:"Badge visibility",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(lt,{content:1,"aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"visible"})}),n.jsx(lt,{content:1,isInvisible:!0,"aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isInvisible"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1}>...</Badge>
<Badge content={1} isInvisible>...</Badge>`})}),Ny=()=>n.jsx(R,{title:"Dot and one-character",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(lt,{content:"9",isOneChar:!0,"aria-label":"9 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isOneChar"})}),n.jsx(lt,{isDot:!0,shape:"circle","aria-label":"Has updates",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"dot"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content="9" isOneChar>...</Badge>
<Badge isDot shape="circle">...</Badge>`})}),Fy=()=>n.jsx(R,{title:"Slot styling (classNames)",preview:n.jsx("div",{className:"flex gap-6 items-center flex-wrap",children:n.jsx(lt,{content:12,color:"success","aria-label":"12 items",classNames:{base:"ring-1 ring-green-400/50 rounded-md",badge:"bg-green-600 text-white"},children:n.jsx("button",{type:"button",className:"px-3 py-2 rounded-md border",children:"Custom slots"})})}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

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
</Badge>`})}),By=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"Element the badge is attached to."},{prop:"content",type:"string | number | ReactNode",default:"—",description:"Badge content. Ignored when isDot is true."},{prop:"max",type:"number",default:"—",description:"Caps numeric content to `${max}+` when exceeded."},{prop:"variant",type:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"',default:'"solid"',description:"Visual style variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Badge size."},{prop:"shape",type:'"circle" | "rectangle"',default:'"rectangle"',description:"Badge shape."},{prop:"placement",type:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',default:'"top-right"',description:"Badge placement relative to children."},{prop:"showOutline",type:"boolean",default:"true",description:"Adds an outline ring around the badge."},{prop:"disableOutline",type:"boolean",default:"false",description:"Disables the outline ring (takes precedence)."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Disables badge transitions."},{prop:"isInvisible",type:"boolean",default:"false",description:"When true, badge is not rendered."},{prop:"isOneChar",type:"boolean",default:"false",description:"Optimizes badge sizing for single-character content."},{prop:"isDot",type:"boolean",default:"false",description:"Renders a dot badge and ignores content."},{prop:"classNames",type:"Partial<Record<BadgeSlot, string>>",default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(Lt,{title:"Badge Props",rows:r,footnote:"Badge also supports standard span props such as className, id, aria-*, and data-*."})},Oy=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(ky,{}),n.jsx(yy,{}),n.jsx(wy,{}),n.jsx(jy,{}),n.jsx(Sy,{}),n.jsx(Cy,{}),n.jsx(Dy,{}),n.jsx(Ty,{}),n.jsx(Ny,{}),n.jsx(Fy,{}),n.jsx(By,{})]}),Ay=()=>n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{children:"Save"}),n.jsx(O,{variant:"bordered",children:"Cancel"})]}),code:n.jsx(n.Fragment,{children:`import { Button } from "oks-ui";

<Button>Save</Button>
<Button variant="bordered">Cancel</Button>`})}),Ey=()=>n.jsx(R,{title:"Disabled",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{isDisabled:!0,children:"Disabled"}),n.jsx(O,{color:"primary",isDisabled:!0,children:"Primary Disabled"})]}),code:n.jsx(n.Fragment,{children:`<Button isDisabled>Disabled</Button>
<Button color="primary" isDisabled>
  Primary Disabled
</Button>`})}),zy=()=>n.jsx(R,{title:"Sizes",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{size:"sm",children:"Small"}),n.jsx(O,{size:"md",children:"Medium"}),n.jsx(O,{size:"lg",children:"Large"})]}),code:n.jsx(n.Fragment,{children:`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`})}),Ry=()=>n.jsx(R,{title:"Radius",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{radius:"none",children:"None"}),n.jsx(O,{radius:"sm",children:"SM"}),n.jsx(O,{radius:"md",children:"MD"}),n.jsx(O,{radius:"lg",children:"LG"}),n.jsx(O,{radius:"full",children:"Full"})]}),code:n.jsx(n.Fragment,{children:`<Button radius="none">None</Button>
<Button radius="sm">SM</Button>
<Button radius="md">MD</Button>
<Button radius="lg">LG</Button>
<Button radius="full">Full</Button>`})}),My=()=>n.jsx(R,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{color:"default",children:"Default"}),n.jsx(O,{color:"primary",children:"Primary"}),n.jsx(O,{color:"secondary",children:"Secondary"}),n.jsx(O,{color:"info",children:"Info"}),n.jsx(O,{color:"success",children:"Success"}),n.jsx(O,{color:"warning",children:"Warning"}),n.jsx(O,{color:"danger",children:"Danger"})]}),code:n.jsx(n.Fragment,{children:`<Button color="default">Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`})}),Py=()=>n.jsx(R,{title:"Variants",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"solid",children:"Solid"}),n.jsx(O,{variant:"bordered",children:"Bordered"}),n.jsx(O,{variant:"flat",children:"Flat"}),n.jsx(O,{variant:"light",children:"Light"}),n.jsx(O,{variant:"faded",children:"Faded"}),n.jsx(O,{variant:"shadow",children:"Shadow"}),n.jsx(O,{variant:"ghost",children:"Ghost"})]}),code:n.jsx(n.Fragment,{children:`<Button variant="solid">Solid</Button>
<Button variant="bordered">Bordered</Button>
<Button variant="flat">Flat</Button>
<Button variant="light">Light</Button>
<Button variant="faded">Faded</Button>
<Button variant="shadow">Shadow</Button>
<Button variant="ghost">Ghost</Button>`})}),Ly=()=>n.jsx(R,{title:"Full width",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"w-full max-w-sm",children:n.jsx(O,{fullWidth:!0,children:"Submit"})}),n.jsxs("div",{className:"flex gap-3 items-center w-full max-w-sm",children:[n.jsx(O,{variant:"bordered",children:"Back"}),n.jsx(O,{fullWidth:!0,children:"Continue"}),n.jsx(O,{variant:"bordered",children:"Next"})]})]}),code:n.jsx(n.Fragment,{children:`<Button fullWidth>Submit</Button>

<div style={{ display: "flex", gap: 8 }}>
  <Button>Back</Button>
  <Button fullWidth>Continue</Button>
  <Button>Next</Button>
</div>`})}),_y=()=>n.jsx(R,{title:"Loading",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{isLoading:!0,children:"Saving"}),n.jsx(O,{isLoading:!0,spinnerPlacement:"end",children:"Saving"}),n.jsx(O,{isLoading:!0,spinner:n.jsx("span",{"aria-hidden":"true",children:"⏳"}),children:"Saving"})]}),code:n.jsx(n.Fragment,{children:`<Button isLoading>Saving</Button>
<Button isLoading spinnerPlacement="end">Saving</Button>
<Button isLoading spinner={<span aria-hidden="true">⏳</span>}>Saving</Button>`})}),Iy=()=>n.jsx(R,{title:"With icons",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{startContent:n.jsx("span",{"aria-hidden":"true",children:"←"}),children:"Back"}),n.jsx(O,{endContent:n.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Next"})]}),code:n.jsx(n.Fragment,{children:`<Button startContent={<span aria-hidden="true">←</span>}>Back</Button>
<Button endContent={<span aria-hidden="true">→</span>}>Next</Button>`})}),Uy=()=>n.jsx(R,{title:"Icon only",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{isIconOnly:!0,"aria-label":"Settings",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})}),n.jsx(O,{isIconOnly:!0,"aria-label":"Search",variant:"bordered",children:n.jsx("span",{"aria-hidden":"true",children:"⌕"})})]}),code:n.jsx(n.Fragment,{children:`<Button isIconOnly aria-label="Settings">
  <span aria-hidden="true">⚙</span>
</Button>
<Button isIconOnly aria-label="Search" variant="bordered">
  <span aria-hidden="true">⌕</span>
</Button>`})}),Hy=()=>n.jsx(R,{title:"Icon only + loading",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})}),n.jsx(O,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading bordered",variant:"bordered",children:n.jsx("span",{"aria-hidden":"true",children:"⌛"})})]}),code:n.jsx(n.Fragment,{children:`<Button isIconOnly isLoading aria-label="Loading">
  <span aria-hidden="true">⚙</span>
</Button>`})}),Vy=()=>n.jsx(R,{title:"ButtonGroup",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Yd,{variant:"bordered",color:"primary","aria-label":"Pagination",children:[n.jsx(O,{children:"Prev"}),n.jsx(O,{children:"Next"})]}),n.jsxs(Yd,{variant:"solid",color:"secondary","aria-label":"Actions",children:[n.jsx(O,{children:"Left"}),n.jsx(O,{children:"Middle"}),n.jsx(O,{children:"Right"})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, ButtonGroup } from "oks-ui";

<ButtonGroup variant="bordered" color="primary" aria-label="Pagination">
  <Button>Prev</Button>
  <Button>Next</Button>
</ButtonGroup>`})}),$y=()=>{const[r,s]=m.useState("-"),[c,d]=m.useState(!1);return n.jsx(R,{title:"Press events",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPressStart:()=>s("onPressStart"),onPressEnd:()=>s("onPressEnd"),onPressUp:()=>s("onPressUp"),onPress:()=>s("onPress"),onPressChange:u=>d(u),children:"Press me"}),n.jsxs("div",{className:"text-sm",children:["Last event: ",r]}),n.jsxs("div",{className:"text-sm",children:["Pressed: ",String(c)]})]}),code:n.jsx(n.Fragment,{children:`<Button
  onPressStart={() => {}}
  onPressEnd={() => {}}
  onPressUp={() => {}}
  onPress={() => {}}
  onPressChange={(isPressed) => {}}
>
  Press me
</Button>`})})},qy=()=>{const[r,s]=m.useState(!1),[c,d]=m.useState(!1);return n.jsx(R,{title:"Ripple and animation",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(O,{variant:"bordered",onPress:()=>s(u=>!u),children:["disableRipple: ",String(r)]}),n.jsxs(O,{variant:"bordered",onPress:()=>d(u=>!u),children:["disableAnimation: ",String(c)]})]}),n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{color:"primary",disableRipple:r,disableAnimation:c,children:"Try click"}),n.jsx(O,{variant:"bordered",disableRipple:r,disableAnimation:c,children:"Try click"})]})]}),code:n.jsx(n.Fragment,{children:"<Button disableRipple disableAnimation>Try click</Button>"})})},Gy=()=>n.jsx(R,{title:"ClassName and style",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{className:"bg-indigo-600 text-white hover:bg-indigo-500",children:"className"}),n.jsx(O,{style:{background:"linear-gradient(90deg, #14b8a6, #3b82f6)",color:"white"},children:"style"})]}),code:n.jsx(n.Fragment,{children:`<Button className="bg-indigo-600 text-white hover:bg-indigo-500">
  className
</Button>

<Button style={{ background: "linear-gradient(90deg, #14b8a6, #3b82f6)", color: "white" }}>
  style
</Button>`})}),Yy=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"Button content."},{prop:"variant",type:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"',default:'"solid"',description:"Visual style variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Button size."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:"Border radius."},{prop:"startContent",type:"ReactNode",default:"—",description:"Content placed before the children."},{prop:"endContent",type:"ReactNode",default:"—",description:"Content placed after the children."},{prop:"spinner",type:"ReactNode",default:"—",description:"Custom spinner shown when isLoading is true."},{prop:"spinnerPlacement",type:'"start" | "end"',default:'"start"',description:"Where the spinner appears when loading."},{prop:"fullWidth",type:"boolean",default:"false",description:"Makes the button take full container width."},{prop:"isIconOnly",type:"boolean",default:"false",description:"Optimizes padding/shape for icon-only buttons."},{prop:"isDisabled",type:"boolean",default:"false",description:"Disables interactions."},{prop:"isLoading",type:"boolean",default:"false",description:"Shows a spinner and prevents press actions."},{prop:"onPress",type:"(e: PressEvent) => void",default:"—",description:"Called for pointer/mouse/keyboard press."},{prop:"onPressStart",type:"(e: PressEvent) => void",default:"—",description:"Called when a press starts."},{prop:"onPressEnd",type:"(e: PressEvent) => void",default:"—",description:"Called when a press ends."},{prop:"onPressChange",type:"(isPressed: boolean) => void",default:"—",description:"Called when pressed state changes."},{prop:"onPressUp",type:"(e: PressEvent) => void",default:"—",description:"Called when press is released."},{prop:"disableRipple",type:"boolean",default:"false",description:"Disables the ripple effect."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Disables transition animations."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(Lt,{title:"Button Props",rows:r,footnote:'Button also supports standard button props such as type, onClick, disabled, aria-*, and data-*. (type defaults to "button".)'})},Ky=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Ay,{}),n.jsx(Ey,{}),n.jsx(zy,{}),n.jsx(Ry,{}),n.jsx(My,{}),n.jsx(Py,{}),n.jsx(Ly,{}),n.jsx(_y,{}),n.jsx(Iy,{}),n.jsx(Uy,{}),n.jsx(Hy,{}),n.jsx(Vy,{}),n.jsx($y,{}),n.jsx(qy,{}),n.jsx(Gy,{}),n.jsx(Yy,{})]}),Xy=()=>n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{children:"Chip"}),n.jsx(ot,{variant:"bordered",children:"Bordered"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip>Chip</Chip>
<Chip variant="bordered">Bordered</Chip>`})}),Zy=()=>n.jsx(R,{title:"Variants",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{variant:"solid",color:"primary",children:"solid"}),n.jsx(ot,{variant:"bordered",color:"primary",children:"bordered"}),n.jsx(ot,{variant:"light",color:"primary",children:"light"}),n.jsx(ot,{variant:"flat",color:"primary",children:"flat"}),n.jsx(ot,{variant:"faded",color:"primary",children:"faded"}),n.jsx(ot,{variant:"shadow",color:"primary",children:"shadow"}),n.jsx(ot,{variant:"dot",color:"primary",children:"dot"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip variant="solid" color="primary">solid</Chip>
<Chip variant="bordered" color="primary">bordered</Chip>
<Chip variant="light" color="primary">light</Chip>
<Chip variant="flat" color="primary">flat</Chip>
<Chip variant="faded" color="primary">faded</Chip>
<Chip variant="shadow" color="primary">shadow</Chip>
<Chip variant="dot" color="primary">dot</Chip>`})}),Qy=()=>n.jsx(R,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{color:"default",children:"default"}),n.jsx(ot,{color:"primary",children:"primary"}),n.jsx(ot,{color:"secondary",children:"secondary"}),n.jsx(ot,{color:"success",children:"success"}),n.jsx(ot,{color:"warning",children:"warning"}),n.jsx(ot,{color:"danger",children:"danger"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="default">default</Chip>
<Chip color="primary">primary</Chip>
<Chip color="secondary">secondary</Chip>
<Chip color="success">success</Chip>
<Chip color="warning">warning</Chip>
<Chip color="danger">danger</Chip>`})}),Wy=()=>n.jsx(R,{title:"Color depth",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{color:"primary",colorDepth:300,children:"300"}),n.jsx(ot,{color:"primary",colorDepth:500,children:"500"}),n.jsx(ot,{color:"primary",colorDepth:700,children:"700"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="primary" colorDepth={300}>300</Chip>
<Chip color="primary" colorDepth={500}>500</Chip>
<Chip color="primary" colorDepth={700}>700</Chip>`})}),Jy=()=>n.jsx(R,{title:"Sizes",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{size:"sm",children:"sm"}),n.jsx(ot,{size:"md",children:"md"}),n.jsx(ot,{size:"lg",children:"lg"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip size="sm">sm</Chip>
<Chip size="md">md</Chip>
<Chip size="lg">lg</Chip>`})}),ew=()=>n.jsx(R,{title:"Radius",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{radius:"none",children:"none"}),n.jsx(ot,{radius:"sm",children:"sm"}),n.jsx(ot,{radius:"md",children:"md"}),n.jsx(ot,{radius:"lg",children:"lg"}),n.jsx(ot,{radius:"full",children:"full"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip radius="none">none</Chip>
<Chip radius="sm">sm</Chip>
<Chip radius="md">md</Chip>
<Chip radius="lg">lg</Chip>
<Chip radius="full">full</Chip>`})}),tw=()=>n.jsx(R,{title:"Disabled",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{isDisabled:!0,children:"Disabled"}),n.jsx(ot,{isDisabled:!0,onClose:()=>{},children:"Disabled close"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip isDisabled>Disabled</Chip>
<Chip isDisabled onClose={() => {}}>Disabled close</Chip>`})}),nw=()=>n.jsx(R,{title:"Start & end content",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{startContent:n.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Start"}),n.jsx(ot,{endContent:n.jsx("span",{"aria-hidden":"true",children:"→"}),children:"End"}),n.jsx(ot,{startContent:n.jsx("span",{"aria-hidden":"true",children:"★"}),endContent:n.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Both"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip startContent={<span aria-hidden="true">★</span>}>Start</Chip>
<Chip endContent={<span aria-hidden="true">→</span>}>End</Chip>
<Chip
  startContent={<span aria-hidden="true">★</span>}
  endContent={<span aria-hidden="true">→</span>}
>
  Both
</Chip>`})}),aw=()=>n.jsx(R,{title:"With avatar",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{avatar:n.jsx("img",{src:"https://i.pravatar.cc/32?img=1",alt:"avatar",width:24,height:24}),children:"Avatar"}),n.jsx(ot,{variant:"faded",color:"secondary",avatar:n.jsx("img",{src:"https://i.pravatar.cc/32?img=2",alt:"avatar",width:24,height:24}),children:"Faded"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip avatar={<img src="https://i.pravatar.cc/32?img=1" alt="avatar" />}>
  Avatar
</Chip>`})}),ow=()=>n.jsx(R,{title:"With close button",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(ot,{onClose:()=>{},children:"Closable"}),n.jsx(ot,{onClose:()=>{},endContent:n.jsx("span",{"aria-hidden":"true",children:"×"}),color:"danger",variant:"flat",children:"Custom close icon"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip onClose={() => {}}>Closable</Chip>
<Chip onClose={() => {}} endContent={<span aria-hidden="true">×</span>}>
  Custom close icon
</Chip>`})}),rw=()=>n.jsx(R,{title:"Slot styling (classNames)",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(ot,{variant:"dot",color:"success",onClose:()=>{},avatar:n.jsx("img",{src:"https://i.pravatar.cc/32?img=3",alt:"avatar"}),classNames:{base:"ring-1 ring-green-400/60",content:"font-semibold",dot:"bg-green-600",avatar:"ring-1 ring-green-300 rounded-full",closeButton:"hover:bg-green-200/40"},children:"Custom slots"})}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

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
</Chip>`})}),sw=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"Chip content."},{prop:"variant",type:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot"',default:'"solid"',description:"Visual style variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Chip size."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"full"',description:"Border radius."},{prop:"colorDepth",type:"50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",default:"500",description:"Color intensity used to compute CSS variables."},{prop:"avatar",type:"ReactNode",default:"—",description:"Avatar element rendered at the start."},{prop:"startContent",type:"ReactNode",default:"—",description:"Content rendered before the children."},{prop:"endContent",type:"ReactNode",default:"—",description:"Content rendered after the children."},{prop:"isDisabled",type:"boolean",default:"false",description:"Disables interactions and reduces emphasis."},{prop:"onClose",type:"(e: PressEvent) => void",default:"—",description:"Shows a close button and is called when it is pressed."},{prop:"classNames",type:'Partial<Record<"base" | "content" | "dot" | "avatar" | "closeButton", string>>',default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(Lt,{title:"Chip Props",rows:r,footnote:"Chip also supports standard div props such as className, id, aria-*, and data-*."})},lw=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Xy,{}),n.jsx(Zy,{}),n.jsx(Qy,{}),n.jsx(Wy,{}),n.jsx(Jy,{}),n.jsx(ew,{}),n.jsx(tw,{}),n.jsx(nw,{}),n.jsx(aw,{}),n.jsx(ow,{}),n.jsx(rw,{}),n.jsx(sw,{})]}),iw=()=>n.jsx(R,{title:"How to use",preview:n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{children:"Open"})}),n.jsxs(Et,{variant:"solid",color:"primary",autoFocus:"first",onAction:r=>console.log("onAction:",r),onClose:()=>console.log("onClose"),children:[n.jsx(He,{children:"New"},"new"),n.jsx(He,{children:"Edit"},"edit")]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),cw=()=>{const[r,s]=xe.useState(!1);return n.jsx(R,{title:"Controlled open (isOpen / onOpenChange)",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>s(c=>!c),children:"Toggle (external)"}),n.jsxs(Nt,{isOpen:r,onOpenChange:s,children:[n.jsx(Ft,{children:n.jsx(O,{children:"Open"})}),n.jsxs(Et,{onAction:c=>console.log("onAction:",c),children:[n.jsx(He,{children:"New"},"new"),n.jsx(He,{children:"Edit"},"edit")]})]})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
}`})})},dw=["bottom-start","bottom-end","top-start","right"],uw=()=>n.jsx(R,{title:"Placement",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:dw.map(r=>n.jsxs(Nt,{placement:r,children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:r})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Item A"},"a"),n.jsx(He,{children:"Item B"},"b")]})]},r))}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</div>`})}),pw=()=>n.jsx(R,{title:"Offset / containerPadding / shouldFlip",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Nt,{offset:0,children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"offset=0"})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Item A"},"a"),n.jsx(He,{children:"Item B"},"b")]})]}),n.jsxs(Nt,{offset:16,children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"offset=16"})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Item A"},"a"),n.jsx(He,{children:"Item B"},"b")]})]}),n.jsxs(Nt,{containerPadding:0,shouldFlip:!1,placement:"bottom-end",children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"no flip"})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Item A"},"a"),n.jsx(He,{children:"Item B"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),fw=()=>n.jsx(R,{title:"Dismiss behavior (isDismissable / isKeyboardDismissDisabled)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Default"})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Outside click closes"},"a"),n.jsx(He,{children:"Escape closes"},"b")]})]}),n.jsxs(Nt,{isDismissable:!1,children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"No outside close"})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Try clicking outside"},"a"),n.jsx(He,{children:"Use item or Escape"},"b")]})]}),n.jsxs(Nt,{isKeyboardDismissDisabled:!0,children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"No Escape"})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Try pressing Escape"},"a"),n.jsx(He,{children:"Outside click still works"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),mw=()=>{const r=xe.useRef(null);return n.jsx(R,{title:"shouldCloseOnInteractOutside",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx("div",{ref:r,className:"px-3 py-2 border border-dashed border-gray-400 rounded-md",children:"Safe zone (clicking here won't close)"}),n.jsxs(Nt,{shouldCloseOnInteractOutside:s=>!r.current?.contains(s),children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Item A"},"a"),n.jsx(He,{children:"Item B"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
}`})})},hw=()=>{const r=xe.useRef(null),[s,c]=xe.useState(null);return xe.useEffect(()=>{c(r.current)},[]),n.jsx(R,{title:"portalContainer",preview:n.jsxs("div",{className:"flex gap-3 items-start flex-wrap",children:[n.jsx("div",{ref:r,className:"w-72 h-40 border border-gray-300 rounded-md p-2",children:"Portal container box"}),n.jsxs(Nt,{portalContainer:s,placement:"bottom-start",children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Et,{children:[n.jsx(He,{children:"Item A"},"a"),n.jsx(He,{children:"Item B"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
}`})})},xw=()=>n.jsx(R,{title:"closeOnSelect (Dropdown default)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Default (closes)"})}),n.jsxs(Et,{onAction:r=>console.log("default onAction:",r),children:[n.jsx(He,{children:"Select me"},"a"),n.jsx(He,{children:"Select me"},"b")]})]}),n.jsxs(Nt,{closeOnSelect:!1,children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"closeOnSelect=false"})}),n.jsxs(Et,{onAction:r=>console.log("no close onAction:",r),children:[n.jsx(He,{children:"Menu stays open"},"a"),n.jsx(He,{children:"Menu stays open"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown closeOnSelect={false}>
  <DropdownTrigger>
    <Button variant="bordered">closeOnSelect=false</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => console.log(key)}>
    <DropdownItem key="a">Menu stays open</DropdownItem>
    <DropdownItem key="b">Menu stays open</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),gw=()=>n.jsx(R,{title:"Menu content (topContent / bottomContent / emptyContent)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Top + bottom"})}),n.jsxs(Et,{topContent:n.jsx("div",{className:"px-2 py-1 text-sm",children:"Top content"}),bottomContent:n.jsx("div",{className:"px-2 py-1 text-sm",children:"Bottom content"}),children:[n.jsx(He,{children:"Item A"},"a"),n.jsx(He,{children:"Item B"},"b")]})]}),n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Empty list"})}),n.jsx(Et,{items:[],emptyContent:"Nothing here",children:r=>n.jsx(He,{children:r.label},r.key)})]}),n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Hide empty"})}),n.jsx(Et,{items:[],emptyContent:"Nothing here",hideEmptyContent:!0,children:r=>n.jsx(He,{children:r.label},r.key)})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),vw=()=>n.jsx(R,{title:"classNames / itemClasses",preview:n.jsxs(Nt,{classNames:{base:"inline-flex",content:"outline outline-1 outline-purple-500"},children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Et,{classNames:{base:"rounded-lg border-2 border-purple-500",list:"p-2",emptyContent:"text-purple-300"},itemClasses:{base:"rounded-md",title:"font-semibold",description:"text-xs opacity-80"},children:[n.jsx(He,{title:"Item A",description:"Custom slot classes"},"a"),n.jsx(He,{title:"Item B",description:"Custom slot classes"},"b")]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),bw=()=>n.jsx(R,{title:"Variants",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:["solid","bordered","light","flat","faded","shadow"].map(r=>n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:r})}),n.jsxs(Et,{variant:r,children:[n.jsx(He,{children:"Item A"},"a"),n.jsx(He,{children:"Item B"},"b")]})]},r))}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">solid</Button>
  </DropdownTrigger>
  <DropdownMenu variant="solid">
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),kw=()=>n.jsx(R,{title:"Disabled keys",preview:n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Et,{disabledKeys:["delete"],children:[n.jsx(He,{children:"Copy"},"copy"),n.jsx(He,{children:"Rename"},"rename"),n.jsx(He,{children:"Delete"},"delete")]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu disabledKeys={["delete"]}>
    <DropdownItem key="copy">Copy</DropdownItem>
    <DropdownItem key="rename">Rename</DropdownItem>
    <DropdownItem key="delete">Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),yw=()=>n.jsx(R,{title:"With icons",preview:n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{children:"Open"})}),n.jsxs(Et,{children:[n.jsx(He,{startContent:n.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Star"},"star"),n.jsx(He,{endContent:n.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Arrow"},"arrow")]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),ww=()=>n.jsx(R,{title:"With description and shortcut",preview:n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Et,{onClose:()=>console.log("closed"),children:[n.jsx(He,{title:"Profile",description:"Manage your profile",shortcut:"P"},"profile"),n.jsx(He,{title:"Settings",description:"App settings",shortcut:"S",showDivider:!0},"settings"),n.jsx(He,{title:"Log out",closeOnSelect:!1},"logout")]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu onClose={() => console.log("closed")}>
    <DropdownItem key="profile" title="Profile" description="Manage your profile" shortcut="P" />
    <DropdownItem key="settings" title="Settings" description="App settings" shortcut="S" showDivider />
    <DropdownItem key="logout" title="Log out" closeOnSelect={false} />
  </DropdownMenu>
</Dropdown>`})}),jw=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"}],Sw=()=>n.jsx(R,{title:"With sections",preview:n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{children:"Open"})}),n.jsxs(Et,{onAction:r=>console.log(r),children:[n.jsxs(Bs,{title:"Actions",children:[n.jsx(He,{children:"Copy"},"copy"),n.jsx(He,{children:"Move"},"move")]}),n.jsx(Bs,{title:"Account",items:jw,showDivider:!0,children:r=>n.jsx(He,{children:r.label},r.key)}),n.jsx(Bs,{"aria-label":"Danger zone",children:n.jsx(He,{children:"Delete"},"delete")})]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),Cw=()=>{const[r,s]=xe.useState(new Set(["a"])),[c,d]=xe.useState(new Set(["a","c"]));return n.jsx(R,{title:"Selection",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Single"})}),n.jsxs(Et,{selectionMode:"single",closeOnSelect:!1,shouldFocusWrap:!0,selectedKeys:r,onSelectionChange:u=>{s(new Set(u)),console.log("single onSelectionChange:",u)},children:[n.jsx(He,{children:"A"},"a"),n.jsx(He,{children:"B"},"b"),n.jsx(He,{children:"C"},"c")]})]}),n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{variant:"bordered",children:"Multiple"})}),n.jsxs(Et,{selectionMode:"multiple",closeOnSelect:!1,hideSelectedIcon:!0,selectedKeys:c,onSelectionChange:u=>{d(new Set(u)),console.log("multiple onSelectionChange:",u)},children:[n.jsx(He,{selectedIcon:"✓",children:"A"},"a"),n.jsx(He,{children:"B"},"b"),n.jsx(He,{children:"C"},"c")]})]})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
}`})})},Dw=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"},{key:"logout",label:"Log out"}],Tw=()=>n.jsx(R,{title:"Dynamic items",preview:n.jsxs(Nt,{children:[n.jsx(Ft,{children:n.jsx(O,{children:"Open"})}),n.jsx(Et,{items:Dw,onAction:r=>console.log(r),children:r=>n.jsx(He,{children:r.label},r.key)})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),Nw=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"DropdownTrigger + DropdownMenu composition."},{prop:"isOpen",type:"boolean",default:"—",description:"Controlled open state."},{prop:"defaultOpen",type:"boolean",default:"false",description:"Initial open state when uncontrolled."},{prop:"onOpenChange",type:"(isOpen: boolean) => void",default:"—",description:"Called when open state changes."},{prop:"placement",type:"DropdownPlacement",default:'"bottom-start"',description:"Menu placement relative to trigger."},{prop:"offset",type:"number",default:"8",description:"Distance (px) between trigger and menu."},{prop:"containerPadding",type:"number",default:"8",description:"Viewport padding used by positioning logic."},{prop:"shouldFlip",type:"boolean",default:"true",description:"Flips placement to keep menu in viewport."},{prop:"portalContainer",type:"Element | DocumentFragment | null",default:"—",description:"Portal container for the menu."},{prop:"isDismissable",type:"boolean",default:"true",description:"Allows dismissing on outside click."},{prop:"isKeyboardDismissDisabled",type:"boolean",default:"false",description:"Disables dismissing via Escape key."},{prop:"shouldCloseOnInteractOutside",type:"(target: Element) => boolean",default:"—",description:"Custom outside-interaction close predicate."},{prop:"closeOnSelect",type:"boolean",default:"true",description:"Whether selecting an item closes the menu."},{prop:"classNames",type:'Partial<Record<"base" | "content", string>>',default:"—",description:"Slot class overrides for root/content."},{prop:"className",type:"string",default:"—",description:"Class name for the root element."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}],s=[{prop:"children",type:"ReactElement",default:"—",description:"Trigger element that opens the dropdown."}],c=[{prop:"items",type:"Iterable<T>",default:"—",description:"Items for render-prop children."},{prop:"children",type:"ReactNode | (item: T) => ReactElement",default:"—",description:"Menu items or render function."},{prop:"variant",type:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow"',default:'"solid"',description:"Menu visual variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "success" | "warning" | "danger"',default:'"default"',description:"Menu color."},{prop:"selectionMode",type:'"none" | "single" | "multiple"',default:'"none"',description:"Selection behavior."},{prop:"selectedKeys",type:'"all" | Iterable<React.Key>',default:"—",description:"Controlled selected keys."},{prop:"disabledKeys",type:"Iterable<React.Key>",default:"—",description:"Keys that are disabled."},{prop:"defaultSelectedKeys",type:'"all" | Iterable<React.Key>',default:"—",description:"Uncontrolled initial selected keys."},{prop:"disallowEmptySelection",type:"boolean",default:"false",description:"Prevents clearing selection."},{prop:"autoFocus",type:'boolean | "first" | "last"',default:"false",description:"Auto focus behavior when opening."},{prop:"topContent",type:"ReactNode",default:"—",description:"Content rendered above the items."},{prop:"bottomContent",type:"ReactNode",default:"—",description:"Content rendered below the items."},{prop:"emptyContent",type:"ReactNode",default:'"No items."',description:"Content shown when there are no items."},{prop:"hideEmptyContent",type:"boolean",default:"false",description:"Hides the empty state."},{prop:"hideSelectedIcon",type:"boolean",default:"false",description:"Hides the selected icon indicator."},{prop:"shouldFocusWrap",type:"boolean",default:"false",description:"Wrap focus when navigating with keyboard."},{prop:"closeOnSelect",type:"boolean",default:"true",description:"Whether selecting an item closes the menu."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Disables menu animations."},{prop:"classNames",type:'Partial<Record<"base" | "list" | "emptyContent", string>>',default:"—",description:"Slot class overrides for menu."},{prop:"itemClasses",type:"Partial<Record<DropdownItemSlot, string>>",default:"—",description:"Default slot overrides applied to items."},{prop:"onAction",type:"(key: React.Key) => void",default:"—",description:"Called when an item is activated."},{prop:"onSelectionChange",type:'(keys: "all" | Set<React.Key>) => void',default:"—",description:"Called when selection changes."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the menu requests to close."}],d=[{prop:"children",type:"ReactNode",default:"—",description:"Item content."},{prop:"title",type:"string | ReactNode",default:"—",description:"Primary label."},{prop:"textValue",type:"string",default:"—",description:"Text value for typeahead/selection."},{prop:"description",type:"string | ReactNode",default:"—",description:"Secondary description."},{prop:"shortcut",type:"string | ReactNode",default:"—",description:"Shortcut hint content."},{prop:"startContent",type:"ReactNode",default:"—",description:"Leading content."},{prop:"endContent",type:"ReactNode",default:"—",description:"Trailing content."},{prop:"selectedIcon",type:"ReactNode",default:"—",description:"Custom selected icon."},{prop:"showDivider",type:"boolean",default:"false",description:"Shows a divider line after the item."},{prop:"href",type:"string",default:"—",description:"Renders as a link when provided."},{prop:"target",type:"string",default:"—",description:"Link target."},{prop:"rel",type:"string",default:"—",description:"Link rel attribute."},{prop:"download",type:"boolean | string",default:"—",description:"Link download attribute."},{prop:"ping",type:"string",default:"—",description:"Link ping attribute."},{prop:"referrerPolicy",type:"string",default:"—",description:"Link referrerPolicy attribute."},{prop:"isDisabled",type:"boolean",default:"false",description:"Disables the item."},{prop:"isSelected",type:"boolean",default:"—",description:"Controlled selected state."},{prop:"isReadOnly",type:"boolean",default:"false",description:"Prevents changing selection state."},{prop:"hideSelectedIcon",type:"boolean",default:"false",description:"Hides the selected icon indicator."},{prop:"closeOnSelect",type:"boolean",default:"—",description:"Overrides closeOnSelect for this item."},{prop:"itemKey",type:"React.Key",default:"—",description:"Key used for selection/action when used directly."},{prop:"classNames",type:"Partial<Record<DropdownItemSlot, string>>",default:"—",description:"Slot class overrides for this item."},{prop:"onAction",type:"() => void",default:"—",description:"Called when item is activated."},{prop:"onClose",type:"() => void",default:"—",description:"Called when menu should close."},{prop:"onPress",type:"(e: DropdownPressEvent) => void",default:"—",description:"Press handler."},{prop:"onPressStart",type:"(e: DropdownPressEvent) => void",default:"—",description:"Press start handler."},{prop:"onPressEnd",type:"(e: DropdownPressEvent) => void",default:"—",description:"Press end handler."},{prop:"onPressChange",type:"(isPressed: boolean) => void",default:"—",description:"Pressed state change handler."},{prop:"onPressUp",type:"(e: DropdownPressEvent) => void",default:"—",description:"Press up handler."},{prop:"onKeyDown",type:"(e: KeyboardEvent) => void",default:"—",description:"Key down handler."},{prop:"onKeyUp",type:"(e: KeyboardEvent) => void",default:"—",description:"Key up handler."},{prop:"onClick",type:"(e: MouseEvent) => void",default:"—",description:"Click handler."}],u=[{prop:"title",type:"string",default:"—",description:"Section heading."},{prop:"aria-label",type:"string",default:"—",description:"Accessible label for the section."},{prop:"items",type:"Iterable<T>",default:"—",description:"Items for render-prop children."},{prop:"children",type:"ReactNode | (item: T) => ReactElement",default:"—",description:"Section items or render function."},{prop:"hideSelectedIcon",type:"boolean",default:"false",description:"Hides the selected icon indicator."},{prop:"showDivider",type:"boolean",default:"false",description:"Shows a divider before the section."},{prop:"dividerProps",type:"unknown",default:"—",description:"Props forwarded to the divider element."},{prop:"classNames",type:'Partial<Record<"base" | "heading" | "group" | "divider", string>>',default:"—",description:"Slot class overrides for the section."},{prop:"itemClasses",type:"Partial<Record<DropdownItemSlot, string>>",default:"—",description:"Default slot overrides applied to section items."}];return n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(Lt,{title:"Dropdown Props",rows:r,footnote:"Dropdown composes DropdownTrigger and DropdownMenu."}),n.jsx(Lt,{title:"DropdownTrigger Props",rows:s}),n.jsx(Lt,{title:"DropdownMenu Props",rows:c}),n.jsx(Lt,{title:"DropdownItem Props",rows:d}),n.jsx(Lt,{title:"DropdownSection Props",rows:u})]})},Fw=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(iw,{}),n.jsx(cw,{}),n.jsx(uw,{}),n.jsx(pw,{}),n.jsx(fw,{}),n.jsx(mw,{}),n.jsx(hw,{}),n.jsx(xw,{}),n.jsx(gw,{}),n.jsx(vw,{}),n.jsx(bw,{}),n.jsx(kw,{}),n.jsx(yw,{}),n.jsx(ww,{}),n.jsx(Sw,{}),n.jsx(Cw,{}),n.jsx(Tw,{}),n.jsx(Nw,{})]}),Bw=()=>n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"Hello",placement:"top",delay:0,children:n.jsx(O,{children:"Hover me"})}),n.jsx(Qe,{content:"No delay",placement:"right",delay:0,closeDelay:0,children:n.jsx(O,{variant:"bordered",children:"Focus me"})})]}),code:n.jsx(n.Fragment,{children:`import { Tooltip } from "oks-ui";

<Tooltip content="Hello" placement="top" delay={0}>
  <button type="button">Hover me</button>
</Tooltip>`})}),Ow=()=>{const[r,s]=m.useState(!1);return n.jsx(R,{title:"Controlled",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>s(c=>!c),children:r?"Close tooltip":"Open tooltip"}),n.jsx(Qe,{content:"Hello",isOpen:r,onOpenChange:s,children:n.jsx(O,{variant:"bordered",children:"Hover / Focus"})})]}),code:`import React from "react";
import { Button, Tooltip } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Button onPress={() => setOpen((v) => !v)}>
        {open ? "Close tooltip" : "Open tooltip"}
      </Button>
      <Tooltip content="Hello" isOpen={open} onOpenChange={setOpen}>
        <Button variant="bordered">Hover / Focus</Button>
      </Tooltip>
    </div>
  );
}`})},Aw=()=>{const[r,s]=m.useState(0);return n.jsx(R,{title:"Default open / onClose",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"I start open",defaultOpen:!0,onClose:()=>s(c=>c+1),showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Focus / hover"})}),n.jsxs("div",{className:"text-sm",children:["Closed count: ",r]})]}),code:n.jsx(n.Fragment,{children:'<Tooltip content="..." defaultOpen onClose={() => {}}>...</Tooltip>'})})},Ew=()=>n.jsx(R,{title:"Sizes",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"Small",size:"sm",children:n.jsx(O,{variant:"bordered",children:"sm"})}),n.jsx(Qe,{content:"Medium",size:"md",children:n.jsx(O,{variant:"bordered",children:"md"})}),n.jsx(Qe,{content:"Large",size:"lg",children:n.jsx(O,{variant:"bordered",children:"lg"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Small" size="sm">...</Tooltip>
<Tooltip content="Medium" size="md">...</Tooltip>
<Tooltip content="Large" size="lg">...</Tooltip>`})}),zw=()=>n.jsx(R,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"Default",color:"default",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"default"})}),n.jsx(Qe,{content:"Primary",color:"primary",showArrow:!0,children:n.jsx(O,{color:"primary",children:"primary"})}),n.jsx(Qe,{content:"Secondary",color:"secondary",showArrow:!0,children:n.jsx(O,{color:"secondary",children:"secondary"})}),n.jsx(Qe,{content:"Info",color:"info",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"info"})}),n.jsx(Qe,{content:"Success",color:"success",showArrow:!0,children:n.jsx(O,{color:"success",children:"success"})}),n.jsx(Qe,{content:"Warning",color:"warning",showArrow:!0,children:n.jsx(O,{color:"warning",children:"warning"})}),n.jsx(Qe,{content:"Danger",color:"danger",showArrow:!0,children:n.jsx(O,{color:"danger",children:"danger"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Primary" color="primary" showArrow>...</Tooltip>
<Tooltip content="Success" color="success" showArrow>...</Tooltip>`})}),Rw=()=>n.jsx(R,{title:"Color depth",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"Depth 100",color:"primary",colorDepth:100,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"100"})}),n.jsx(Qe,{content:"Depth 500",color:"primary",colorDepth:500,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"500"})}),n.jsx(Qe,{content:"Depth 900",color:"primary",colorDepth:900,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"900"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Depth 100" color="primary" colorDepth={100} showArrow>...</Tooltip>
<Tooltip content="Depth 900" color="primary" colorDepth={900} showArrow>...</Tooltip>`})}),Mw=()=>n.jsx(R,{title:"Radius and shadow",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"radius=none",radius:"none",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"none"})}),n.jsx(Qe,{content:"radius=full",radius:"full",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"full"})}),n.jsx(Qe,{content:"shadow=none",shadow:"none",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"shadow none"})}),n.jsx(Qe,{content:"shadow=lg",shadow:"lg",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"shadow lg"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="radius=full" radius="full" showArrow>...</Tooltip>
<Tooltip content="shadow=lg" shadow="lg" showArrow>...</Tooltip>`})}),Pw=()=>n.jsx(R,{title:"Placement",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"Top start",placement:"top-start",children:n.jsx(O,{variant:"bordered",children:"Top-start"})}),n.jsx(Qe,{content:"Right",placement:"right",offset:10,children:n.jsx(O,{variant:"bordered",children:"Right (offset)"})}),n.jsx(Qe,{content:"Bottom end",placement:"bottom-end",containerPadding:20,children:n.jsx(O,{variant:"bordered",children:"Bottom-end"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Top start" placement="top-start">
  <button type="button">Top-start</button>
</Tooltip>

<Tooltip content="Right" placement="right" offset={10}>
  <button type="button">Right</button>
</Tooltip>`})}),Lw=()=>n.jsx(R,{title:"Advanced positioning",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"crossOffset=16",placement:"top",crossOffset:16,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"crossOffset"})}),n.jsx(Qe,{content:"Close on outside click only",isDismissable:!0,shouldCloseOnInteractOutside:r=>r.tagName!=="BUTTON",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Interact outside"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="crossOffset=16" crossOffset={16} showArrow>...</Tooltip>
<Tooltip
  content="Close on outside click only"
  isDismissable
  shouldCloseOnInteractOutside={(el) => el.tagName !== "BUTTON"}
>...</Tooltip>`})}),_w=()=>n.jsx(R,{title:"Delay and closeDelay",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"delay=0",delay:0,children:n.jsx(O,{variant:"bordered",children:"delay 0"})}),n.jsx(Qe,{content:"delay=600",delay:600,children:n.jsx(O,{variant:"bordered",children:"delay 600"})}),n.jsx(Qe,{content:"closeDelay=0",closeDelay:0,children:n.jsx(O,{variant:"bordered",children:"close 0"})}),n.jsx(Qe,{content:"closeDelay=1500",closeDelay:1500,children:n.jsx(O,{variant:"bordered",children:"close 1500"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="delay=600" delay={600}>...</Tooltip>
<Tooltip content="closeDelay=1500" closeDelay={1500}>...</Tooltip>`})}),Iw=()=>n.jsx(R,{title:"Arrow",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"With arrow",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Hover me"})}),n.jsx(Qe,{content:"Primary",showArrow:!0,color:"primary",children:n.jsx(O,{color:"primary",children:"Primary"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="With arrow" showArrow>
  <button type="button">Hover me</button>
</Tooltip>`})}),Uw=()=>n.jsx(R,{title:"Behavior",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"No flip",placement:"right",shouldFlip:!1,containerPadding:0,children:n.jsx(O,{variant:"bordered",children:"shouldFlip=false"})}),n.jsx(Qe,{content:"Dismissable",isDismissable:!0,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"isDismissable"})}),n.jsx(Qe,{content:"No blur close",shouldCloseOnBlur:!1,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"shouldCloseOnBlur=false"})}),n.jsx(Qe,{content:"Esc disabled",isKeyboardDismissDisabled:!0,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Esc disabled"})}),n.jsx(Qe,{content:"Scale trigger",triggerScaleOnOpen:!0,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"triggerScaleOnOpen"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Dismissable" isDismissable showArrow>...</Tooltip>
<Tooltip content="Esc disabled" isKeyboardDismissDisabled showArrow>...</Tooltip>`})}),Hw=()=>n.jsx(R,{title:"Disabled",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Qe,{content:"You won't see this",isDisabled:!0,children:n.jsx(O,{variant:"bordered",children:"Disabled tooltip"})}),n.jsx(Qe,{content:"Disabled tooltip",isDisabled:!0,showArrow:!0,children:n.jsx(O,{color:"danger",children:"Danger"})})]}),code:`import React from "react";
import { Button, Tooltip } from "oks-ui";

export default function Example() {
  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Tooltip content="You won't see this" isDisabled>
        <Button variant="bordered">Disabled tooltip</Button>
      </Tooltip>

      <Tooltip content="Disabled tooltip" isDisabled showArrow>
        <Button color="danger">Danger</Button>
      </Tooltip>
    </div>
  );
}`}),Vw=()=>n.jsx(R,{title:"Class names",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(Qe,{content:"Custom slot classes",showArrow:!0,classNames:{content:"border border-red-400",arrow:"text-red-400"},children:n.jsx(O,{variant:"bordered",children:"Hover me"})})}),code:n.jsx(n.Fragment,{children:`<Tooltip
  content="Custom slot classes"
  showArrow
  classNames={{
    content: "border border-red-400",
    arrow: "text-red-400",
  }}
>
  <button type="button">Hover me</button>
</Tooltip>`})}),$w=()=>{const[r,s]=m.useState(null);return n.jsx(R,{title:"Portal container",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsxs("div",{className:"relative border border-white/10 rounded-md p-3",ref:s,children:[n.jsx("div",{className:"text-sm opacity-80",children:"Custom container"}),n.jsx("div",{className:"mt-2",children:n.jsx(Qe,{content:"Portaled into the bordered box",portalContainer:r,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Hover"})})})]})}),code:`import React from "react";
import { Button, Tooltip } from "oks-ui";

export default function Example() {
  const [container, setContainer] = React.useState(null);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <div
        className="relative border border-white/10 rounded-md p-3"
        ref={setContainer}
      >
        <div className="text-sm opacity-80">Custom container</div>
        <div className="mt-2">
          <Tooltip
            content="Portaled into the bordered box"
            portalContainer={container}
            showArrow
          >
            <Button variant="bordered">Hover</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}`})},qw=()=>{const[r,s]=m.useState(!1);return n.jsx(R,{title:"Animation",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(O,{variant:"bordered",onPress:()=>s(c=>!c),children:["disableAnimation: ",String(r)]}),n.jsx(Qe,{content:"Hover me",disableAnimation:r,showArrow:!0,children:n.jsx(O,{children:"Trigger"})})]}),code:`import React from "react";
import { Button, Tooltip } from "oks-ui";

export default function Example() {
  const [disableAnimation, setDisableAnimation] = React.useState(false);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Button variant="bordered" onPress={() => setDisableAnimation((v) => !v)}>
        disableAnimation: {String(disableAnimation)}
      </Button>

      <Tooltip content="Hover me" disableAnimation={disableAnimation} showArrow>
        <Button>Trigger</Button>
      </Tooltip>
    </div>
  );
}`})},Gw=()=>{const r=[{prop:"children",type:"ReactNode",default:"required",description:"Trigger element/content."},{prop:"content",type:"ReactNode",default:"required",description:"Tooltip content."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Tooltip size."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color."},{prop:"colorDepth",type:"50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",default:"100",description:"Color intensity used to compute CSS variables."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:"Border radius."},{prop:"shadow",type:'"none" | "sm" | "md" | "lg"',default:'"sm"',description:"Shadow size."},{prop:"placement",type:"TooltipPlacement",default:'"top"',description:"Tooltip placement relative to the trigger."},{prop:"delay",type:"number",default:"0",description:"Open delay (ms)."},{prop:"closeDelay",type:"number",default:"500",description:"Close delay (ms)."},{prop:"isOpen",type:"boolean",default:"—",description:"Controlled open state."},{prop:"defaultOpen",type:"boolean",default:"false",description:"Initial open state when uncontrolled."},{prop:"onOpenChange",type:"(isOpen: boolean) => void",default:"—",description:"Called when open state changes."},{prop:"onClose",type:"() => void",default:"—",description:"Called on close."},{prop:"offset",type:"number",default:"7",description:"Distance (px) between trigger and tooltip."},{prop:"containerPadding",type:"number",default:"12",description:"Viewport padding used by positioning logic."},{prop:"crossOffset",type:"number",default:"0",description:"Cross-axis offset (px)."},{prop:"showArrow",type:"boolean",default:"false",description:"Shows an arrow pointing to the trigger."},{prop:"shouldFlip",type:"boolean",default:"true",description:"Flips placement to keep tooltip in viewport."},{prop:"triggerScaleOnOpen",type:"boolean",default:"false",description:"Applies a subtle scale effect to the trigger on open."},{prop:"isKeyboardDismissDisabled",type:"boolean",default:"false",description:"Disables closing via Escape key."},{prop:"isDismissable",type:"boolean",default:"false",description:"Allows dismissing on outside click."},{prop:"shouldCloseOnBlur",type:"boolean",default:"true",description:"Closes when focus leaves the trigger/content."},{prop:"shouldCloseOnInteractOutside",type:"(element: HTMLElement) => boolean",default:"—",description:"Custom outside-interaction close predicate."},{prop:"portalContainer",type:"Element | DocumentFragment | null",default:"—",description:"Portal container for the tooltip."},{prop:"updatePositionDeps",type:"any[]",default:"—",description:"Dependencies that trigger repositioning."},{prop:"isDisabled",type:"boolean",default:"false",description:"Disables tooltip."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Disables tooltip animations."},{prop:"className",type:"string",default:"—",description:"Root class name."},{prop:"classNames",type:"{ base?: string; content?: string; arrow?: string }",default:"—",description:"Slot class overrides."},{prop:"motionProps",type:"unknown",default:"—",description:"Reserved for optional motion integration."}];return n.jsx(Lt,{title:"Tooltip Props",rows:r,footnote:"Tooltip also supports standard div props such as id, aria-*, and data-*."})},Yw=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Bw,{}),n.jsx(Ow,{}),n.jsx(Aw,{}),n.jsx(Ew,{}),n.jsx(zw,{}),n.jsx(Rw,{}),n.jsx(Mw,{}),n.jsx(Pw,{}),n.jsx(Lw,{}),n.jsx(_w,{}),n.jsx(Iw,{}),n.jsx(Uw,{}),n.jsx(Hw,{}),n.jsx(Vw,{}),n.jsx($w,{}),n.jsx(qw,{}),n.jsx(Gw,{})]}),Kw=()=>n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>gt("Saved"),children:"Simple"}),n.jsx(O,{variant:"bordered",onPress:()=>gt({title:"Saved",message:"Profile updated",type:"success"}),children:"With title"})]}),code:n.jsx(n.Fragment,{children:`import { toast } from "oks-ui";

toast("Saved");
toast({ title: "Saved", message: "Profile updated", type: "success" });`})}),Xw=()=>n.jsx(R,{title:"ToastProvider (mounted in main.jsx)",preview:n.jsx("div",{className:"text-sm opacity-80",children:"ToastProvider is already mounted at the playground root, so the toast APIs work anywhere."}),code:n.jsx(n.Fragment,{children:`import { ToastProvider } from "oks-ui";

<ToastProvider placement="bottom-right" maxVisibleToasts={3}>
  <App />
</ToastProvider>`})}),Zw=()=>n.jsx(R,{title:"addToast (HeroUI-style)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>Kd({title:"Saved",description:"Your changes have been saved.",color:"success"}),children:"Success"}),n.jsx(O,{variant:"bordered",onPress:()=>Kd({title:"Network",description:"Something went wrong.",color:"danger"}),children:"Error"})]}),code:n.jsx(n.Fragment,{children:`import { addToast } from "oks-ui";

addToast({ title: "Saved", description: "Your changes have been saved.", color: "success" });`})});function Qw(){return new Promise((r,s)=>{setTimeout(()=>{Math.random()>.4?r(!0):s(new Error("Failed"))},900)})}const Ww=()=>n.jsx(R,{title:"addToast with promise",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(O,{onPress:()=>Kd({description:"Saving…",promise:Qw(),loadingComponent:n.jsx("span",{className:"text-sm",children:"⏳"})}),children:"Save demo"})}),code:n.jsx(n.Fragment,{children:'addToast({ description: "Saving…", promise, loadingComponent: <span>⏳</span> });'})}),Jw=()=>n.jsx(R,{title:"Types",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>gt.info("Heads up"),children:"Info"}),n.jsx(O,{color:"success",onPress:()=>gt.success("Saved"),children:"Success"}),n.jsx(O,{color:"warning",onPress:()=>gt.warning("Be careful"),children:"Warning"}),n.jsx(O,{color:"danger",onPress:()=>gt.error("Something went wrong"),children:"Error"})]}),code:n.jsx(n.Fragment,{children:`toast.info("Heads up");
toast.success("Saved");
toast.warning("Be careful");
toast.error("Something went wrong");`})}),ej=()=>n.jsx(R,{title:"Placement",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>gt("Top left",{position:"top-left"}),children:"Top-left"}),n.jsx(O,{variant:"bordered",onPress:()=>gt("Top center",{position:"top-center"}),children:"Top-center"}),n.jsx(O,{variant:"bordered",onPress:()=>gt("Bottom center",{position:"bottom-center"}),children:"Bottom-center"})]}),code:n.jsx(n.Fragment,{children:`toast("Top left", { position: "top-left" });
toast("Top center", { position: "top-center" });
toast("Bottom center", { position: "bottom-center" });`})}),tj=()=>n.jsx(R,{title:"Variants",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>gt("Solid",{variant:"solid",color:"primary"}),children:"Solid"}),n.jsx(O,{variant:"bordered",onPress:()=>gt("Soft",{variant:"soft",color:"secondary"}),children:"Soft"}),n.jsx(O,{variant:"bordered",onPress:()=>gt("Outline",{variant:"outline",color:"warning"}),children:"Outline"})]}),code:n.jsx(n.Fragment,{children:`toast("Solid", { variant: "solid", color: "primary" });
toast("Soft", { variant: "soft", color: "secondary" });
toast("Outline", { variant: "outline", color: "warning" });`})}),nj=()=>n.jsx(R,{title:"Tone and size",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>gt({title:"Tone: secondary",description:"Toast size: xl",tone:"secondary",size:"xl"}),children:"secondary + xl"}),n.jsx(O,{color:"danger",onPress:()=>gt({title:"Tone: danger",description:"Toast size: sm",tone:"danger",size:"sm"}),children:"danger + sm"})]}),code:n.jsx(n.Fragment,{children:'toast({ title: "Tone", description: "Size", tone: "secondary", size: "xl" });'})}),aj=()=>{const r=m.useRef(null);return n.jsx(R,{title:"Duration and progress",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>{r.current=gt("Auto dismiss (2s)",{timeout:2e3,shouldShowTimeoutProgress:!0})},children:"timeout=2000"}),n.jsx(O,{variant:"bordered",onPress:()=>{r.current=gt("Persistent (manual close)",{persistent:!0,dismissible:!0})},children:"persistent"}),n.jsx(O,{variant:"bordered",onPress:()=>{typeof r.current=="number"&&gt.dismiss(r.current)},children:"Dismiss last"})]}),code:n.jsx(n.Fragment,{children:`toast("Auto dismiss (2s)", { timeout: 2000, shouldShowTimeoutProgress: true });
toast("Persistent", { persistent: true, dismissible: true });`})})},oj=()=>n.jsx(R,{title:"Action",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(O,{onPress:()=>gt({title:"Undo?",description:"Item deleted.",color:"warning",action:{label:"Undo",onClick:()=>gt.success("Undone")}}),children:"With action"})}),code:n.jsx(n.Fragment,{children:`toast({
  title: "Undo?",
  description: "Item deleted.",
  action: { label: "Undo", onClick: () => {} },
});`})}),rj=()=>n.jsx(R,{title:"Icons and close button",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>gt({description:"No icon",hideIcon:!0}),children:"hideIcon"}),n.jsx(O,{variant:"bordered",onPress:()=>gt({description:"No close button",hideCloseButton:!0}),children:"hideCloseButton"}),n.jsx(O,{variant:"bordered",onPress:()=>gt({description:"Custom close icon",closeIcon:n.jsx("span",{"aria-hidden":"true",children:"×"})}),children:"closeIcon"})]}),code:n.jsx(n.Fragment,{children:`toast({ description: "No icon", hideIcon: true });
toast({ description: "No close button", hideCloseButton: true });
toast({ description: "Custom close icon", closeIcon: <span aria-hidden="true">×</span> });`})}),sj=()=>n.jsx(R,{title:"End content and loading component",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>gt({title:"Export ready",description:"Download your file",endContent:n.jsx("span",{className:"text-sm",children:"⬇"})}),children:"endContent"}),n.jsx(O,{onPress:()=>gt({type:"loading",message:"Uploading...",persistent:!0,dismissible:!1,loadingComponent:n.jsx("span",{className:"text-sm",children:"⏳"})}),children:"loadingComponent"})]}),code:n.jsx(n.Fragment,{children:`toast({ title: "Export ready", endContent: <span>⬇</span> });
toast({ type: "loading", message: "Uploading...", loadingComponent: <span>⏳</span> });`})}),lj=()=>n.jsx(R,{title:"Update and dismiss",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>{const r=gt("Uploading...",{type:"loading",persistent:!0,dismissible:!1});setTimeout(()=>{gt.update(r,{type:"success",message:"Uploaded",persistent:!1})},900)},children:"Upload demo"}),n.jsx(O,{variant:"bordered",onPress:()=>gt.dismissAll(),children:"Dismiss all"})]}),code:n.jsx(n.Fragment,{children:`const id = toast("Uploading...", { type: "loading", persistent: true, dismissible: false });
toast.update(id, { type: "success", message: "Uploaded", persistent: false });
toast.dismiss(id);
toast.dismissAll();`})}),ij=()=>{const[r,s]=m.useState(0),[c,d]=m.useState("-");return n.jsx(R,{title:"id and onDismiss",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>{const u=r+1;s(u),gt({id:42,title:"Single toast (id=42)",description:`Updated count: ${u}`,shouldShowTimeoutProgress:!0,timeout:2500,onDismiss:p=>d(String(p))})},children:"Update same id"}),n.jsxs("div",{className:"text-sm",children:["Last dismissed: ",c]})]}),code:n.jsx(n.Fragment,{children:'toast({ id: 42, description: "This replaces the existing toast with id=42", onDismiss: (id) => {} });'})})};function cj(){return new Promise((r,s)=>{setTimeout(()=>{Math.random()>.4?r(!0):s(new Error("Failed"))},800)})}const dj=()=>n.jsx(R,{title:"Promise helper",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(O,{onPress:()=>gt.promise(cj(),{loading:{message:"Saving...",persistent:!0,dismissible:!1},success:()=>({message:"Saved",type:"success",persistent:!1}),error:()=>({message:"Failed",type:"error",persistent:!1})}),children:"Save demo"})}),code:n.jsx(n.Fragment,{children:`toast.promise(promise, {
  loading: { message: "Saving...", persistent: true, dismissible: false },
  success: () => ({ message: "Saved", type: "success", persistent: false }),
  error: () => ({ message: "Failed", type: "error", persistent: false }),
});`})}),uj=()=>{const r=w0();return n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>r.success("Saved"),children:"Success"}),n.jsx(O,{color:"danger",onPress:()=>r.error("Failed"),children:"Error"})]})},pj=()=>n.jsx(R,{title:"useToast() hook",preview:n.jsx(uj,{}),code:n.jsx(n.Fragment,{children:`import { useToast } from "oks-ui";

const t = useToast();
t.success("Saved");
t.error("Failed");`})}),fj=()=>n.jsx(R,{title:"Class names",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(O,{variant:"bordered",onPress:()=>gt({title:"Custom styles",description:"Slots customized via classNames",classNames:{base:"border border-blue-400",title:"text-blue-300",description:"text-blue-200",progressIndicator:"bg-blue-400"},shouldShowTimeoutProgress:!0,timeout:3500}),children:"Show toast"})}),code:n.jsx(n.Fragment,{children:`toast({
  title: "Custom styles",
  description: "Slots customized via classNames",
  classNames: { base: "...", title: "...", description: "..." },
});`})}),mj=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"Application tree to render within the provider."},{prop:"placement",type:"ToastPlacement",default:'"bottom-right"',description:"Toast placement. Alias: position."},{prop:"position",type:"ToastPosition",default:"—",description:"Alias for placement."},{prop:"maxVisibleToasts",type:"number",default:"3",description:"Max toasts fully visible per region."},{prop:"maxToasts",type:"number",default:"12",description:"Caps queued toasts (includes non-visible toasts)."},{prop:"defaultDuration",type:"number",default:"6000",description:"Default toast duration (ms)."},{prop:"container",type:"Element | DocumentFragment | null",default:"—",description:"Portal container for toast regions."},{prop:"motion",type:'"auto" | "reduced" | "default"',default:'"auto"',description:"Controls motion mode."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Forces reduced motion."},{prop:"toastOffset",type:"number",default:"0",description:"Extra offset (px) from viewport edges."},{prop:"toastProps",type:"ToastOptions",default:"—",description:"Default options applied to every toast."},{prop:"regionProps",type:"ToastRegionProps",default:"—",description:"Props applied to each toast region container."},{prop:"className",type:"string",default:"—",description:"Class name for the provider root."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the provider root."}],s=[{prop:"title",type:"ReactNode",default:"—",description:"Toast title."},{prop:"description",type:"ReactNode",default:"—",description:"Preferred body content."},{prop:"message",type:"ReactNode",default:"—",description:"Body content alias (used if description is not provided)."},{prop:"type",type:"ToastType",default:'"default" (computed)',description:"Toast type (default/success/error/loading) - can be derived from color/severity."},{prop:"tone",type:"ToastTone",default:"computed",description:"Tone used for styling (can be derived from type/color)."},{prop:"color",type:"ToastColor",default:"—",description:"Semantic color (alias: severity)."},{prop:"severity",type:"ToastSeverity",default:"—",description:"Alias for color."},{prop:"variant",type:"ToastVariant",default:'"flat"',description:"Visual variant."},{prop:"radius",type:"ToastRadius",default:'"md"',description:"Border radius."},{prop:"size",type:"ToastSize",default:'"md"',description:"Toast size."},{prop:"placement",type:"ToastPlacement",default:"provider placement",description:"Overrides provider placement for this toast. Alias: position."},{prop:"position",type:"ToastPosition",default:"—",description:"Alias for placement."},{prop:"duration",type:"number | null",default:"provider defaultDuration",description:"Auto-dismiss duration in ms. null disables auto-dismiss."},{prop:"timeout",type:"number | null",default:"—",description:"Alias for duration."},{prop:"persistent",type:"boolean",default:"false",description:"When true, duration becomes null (no auto-dismiss)."},{prop:"showDurationBar",type:"boolean",default:"false",description:"Shows a duration progress bar. Alias: shouldShowTimeoutProgress."},{prop:"shouldShowTimeoutProgress",type:"boolean",default:"false",description:"Alias for showDurationBar."},{prop:"dismissible",type:"boolean",default:"true",description:"Shows a close button and allows dismissal."},{prop:"hideCloseButton",type:"boolean",default:"false",description:"Hides the close button."},{prop:"action",type:"{ label: string; onClick?: () => void }",default:"—",description:"Optional action button."},{prop:"icon",type:"ReactNode",default:"—",description:"Custom icon content."},{prop:"showIcon",type:"boolean",default:"computed",description:"Controls icon visibility (unless hideIcon is provided)."},{prop:"hideIcon",type:"boolean",default:"false",description:"Hides the icon."},{prop:"endContent",type:"ReactNode",default:"—",description:"Extra trailing content."},{prop:"closeIcon",type:"ReactNode",default:"—",description:"Custom close icon."},{prop:"loadingComponent",type:"ReactNode",default:"—",description:"Custom loading indicator component."},{prop:"promise",type:"Promise<unknown>",default:"—",description:"Turns the toast into a promise toast (loading → success/error)."},{prop:"classNames",type:"ToastClassNames",default:"—",description:"Slot class overrides."},{prop:"id",type:"ToastId",default:"auto",description:"Custom toast id (used for updates)."},{prop:"onDismiss",type:"(id: ToastId) => void",default:"—",description:"Called when the toast is dismissed."},{prop:"className",type:"string",default:"—",description:"Class name for the toast root."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the toast root."}];return n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(Lt,{title:"ToastProvider Props",rows:r}),n.jsx(Lt,{title:"Toast Options (ToastOptions)",rows:s})]})},hj=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Xw,{}),n.jsx(Kw,{}),n.jsx(Zw,{}),n.jsx(Ww,{}),n.jsx(Jw,{}),n.jsx(ej,{}),n.jsx(tj,{}),n.jsx(nj,{}),n.jsx(aj,{}),n.jsx(oj,{}),n.jsx(rj,{}),n.jsx(sj,{}),n.jsx(lj,{}),n.jsx(ij,{}),n.jsx(dj,{}),n.jsx(pj,{}),n.jsx(fj,{}),n.jsx(mj,{})]}),xj=()=>{const[r,s]=xe.useState(!1);return n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open backdrop"}),n.jsx(Qn,{isOpen:r,onClose:()=>s(!1),children:n.jsx("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Backdrop content"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Click outside or press Escape to close."}),n.jsxs("div",{className:"flex gap-3 justify-end",children:[n.jsx(O,{variant:"bordered",onPress:()=>s(!1),children:"Cancel"}),n.jsx(O,{color:"primary",onPress:()=>s(!1),children:"Confirm"})]})]})})})]}),code:n.jsx(n.Fragment,{children:`import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open backdrop</Button>

      <Backdrop isOpen={open} onClose={() => setOpen(false)}>
        <div className="bg-white rounded-md p-6 w-full max-w-md">
          Backdrop content
        </div>
      </Backdrop>
    </>
  );
}`})})},gj=["fade","zoom","slideUp","slideDown","slideLeft","slideRight"],vj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState("fade");return n.jsx(R,{title:"Animation types",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[gj.map(u=>n.jsx(O,{variant:c===u?"solid":"bordered",color:"primary",onPress:()=>{d(u),s(!0)},children:u},u)),n.jsx(Qn,{isOpen:r,onClose:()=>s(!1),animationType:c,animationDuration:.25,children:n.jsx("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>s(!1),children:"Close"})]})})})]}),code:`import React from "react";
import { Backdrop, Button } from "oks-ui";

const animationTypes = ["fade", "zoom", "slideUp", "slideDown", "slideLeft", "slideRight"];

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [animationType, setAnimationType] = React.useState("fade");

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {animationTypes.map((type) => (
        <Button
          key={type}
          variant={animationType === type ? "solid" : "bordered"}
          color="primary"
          onPress={() => {
            setAnimationType(type);
            setOpen(true);
          }}
        >
          {type}
        </Button>
      ))}

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        animationType={animationType}
        animationDuration={0.25}
      >
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">{animationType}</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}`})},bj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!0);return n.jsx(R,{title:"blur",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:u=>d(u.target.checked)}),n.jsx("span",{children:"blur"})]}),n.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"})}),n.jsx(Qn,{isOpen:r,onClose:()=>s(!1),blur:c,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Blur"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>s(!1),children:"Close"})]}),n.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["blur: ",c?"true":"false"]})]})})]}),code:`import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [blur, setBlur] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={blur}
          onChange={(e) => setBlur(e.target.checked)}
        />
        <span>blur</span>
      </label>

      <div className="flex items-center gap-3 flex-wrap">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Backdrop isOpen={open} onClose={() => setOpen(false)} blur={blur}>
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Blur</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            blur: {blur ? "true" : "false"}
          </div>
        </div>
      </Backdrop>
    </div>
  );
}`})},kj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0);return n.jsx(R,{title:"Dismiss behavior",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:h=>d(h.target.checked)}),n.jsx("span",{children:"closeOnOutsideClick"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:h=>p(h.target.checked)}),n.jsx("span",{children:"closeOnEscape"})]})]}),n.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"})}),n.jsx(Qn,{isOpen:r,onClose:()=>s(!1),closeOnOutsideClick:c,closeOnEscape:u,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Dismiss behavior"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>s(!1),children:"Close"})]}),n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:"Try clicking outside or pressing Escape based on your toggles."})]})})]}),code:`import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 flex-wrap">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={closeOnOutsideClick}
            onChange={(e) => setCloseOnOutsideClick(e.target.checked)}
          />
          <span>closeOnOutsideClick</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={closeOnEscape}
            onChange={(e) => setCloseOnEscape(e.target.checked)}
          />
          <span>closeOnEscape</span>
        </label>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        closeOnOutsideClick={closeOnOutsideClick}
        closeOnEscape={closeOnEscape}
      >
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Dismiss behavior</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Try clicking outside or pressing Escape based on your toggles.
          </div>
        </div>
      </Backdrop>
    </div>
  );
}`})},yj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!0);return n.jsx(R,{title:"lockScroll",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:u=>d(u.target.checked)}),n.jsx("span",{children:"lockScroll"})]}),n.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"})}),n.jsx("div",{className:"text-sm text-gray-600",children:"With lockScroll enabled, the document should not scroll while the backdrop is open."}),n.jsxs("div",{className:"h-40 overflow-y-auto border border-gray-200 rounded-md p-3",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Scrollable area"}),n.jsx("div",{className:"text-sm text-gray-600 mt-2",children:"This box can scroll independently, but lockScroll affects document scrolling."}),n.jsx("div",{className:"h-64"}),n.jsx("div",{className:"text-xs text-gray-500",children:"End"})]}),n.jsx(Qn,{isOpen:r,onClose:()=>s(!1),lockScroll:c,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Scroll lock"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>s(!1),children:"Close"})]}),n.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["lockScroll: ",c?"true":"false"]})]})})]}),code:`import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [lockScroll, setLockScroll] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={lockScroll}
          onChange={(e) => setLockScroll(e.target.checked)}
        />
        <span>lockScroll</span>
      </label>

      <div className="flex items-center gap-3 flex-wrap">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <div className="text-sm text-gray-600">
        With lockScroll enabled, the document should not scroll while the backdrop is open.
      </div>

      <div className="h-40 overflow-y-auto border border-gray-200 rounded-md p-3">
        <div className="text-sm font-semibold">Scrollable area</div>
        <div className="text-sm text-gray-600 mt-2">
          This box can scroll independently, but lockScroll affects document scrolling.
        </div>
        <div className="h-64" />
        <div className="text-xs text-gray-500">End</div>
      </div>

      <Backdrop isOpen={open} onClose={() => setOpen(false)} lockScroll={lockScroll}>
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Scroll lock</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            lockScroll: {lockScroll ? "true" : "false"}
          </div>
        </div>
      </Backdrop>
    </div>
  );
}`})},wj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(80),[u,p]=xe.useState("var(--oks-palette-neutral-950, #000)"),[h,y]=xe.useState(40);return n.jsx(R,{title:"Background + zIndex",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("div",{className:"text-sm font-semibold text-gray-700 min-w-24",children:"Colors"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-neutral-950, #000)"),children:"Neutral"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-primary-700, #2563eb)"),children:"Primary"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-secondary-700, #6d28d9)"),children:"Secondary"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-success-700, #16a34a)"),children:"Success"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-warning-700, #d97706)"),children:"Warning"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-danger-700, #dc2626)"),children:"Danger"})]}),n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("div",{className:"text-sm font-semibold text-gray-700 min-w-24",children:"zIndex"}),n.jsx(O,{variant:"bordered",onPress:()=>y(10),children:"10"}),n.jsx(O,{variant:"bordered",onPress:()=>y(40),children:"40"}),n.jsx(O,{variant:"bordered",onPress:()=>y(60),children:"60"}),n.jsx(O,{variant:"bordered",onPress:()=>y(100),children:"100"}),n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"})]})]}),n.jsxs("label",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("span",{className:"min-w-40",children:"backgroundOpacity"}),n.jsx("input",{type:"range",min:0,max:100,value:c,onChange:x=>d(Number(x.target.value))}),n.jsx("span",{className:"w-10 text-right",children:c})]}),n.jsxs("label",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("span",{className:"min-w-40",children:"zIndex"}),n.jsx("input",{type:"range",min:0,max:100,value:h,onChange:x=>y(Number(x.target.value))}),n.jsx("span",{className:"w-10 text-right",children:h})]}),n.jsx("div",{className:"text-sm text-gray-600",children:"Tip: the red badge uses z-index 50. Set backdrop zIndex above 50 to cover it."}),n.jsx("div",{className:"fixed bottom-4 right-4 z-50 bg-red-600 text-white text-xs px-3 py-2 rounded-md shadow-lg",children:"z-50 badge"}),n.jsx(Qn,{isOpen:r,onClose:()=>s(!1),backgroundColor:u,backgroundOpacity:c,zIndex:h,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Backdrop"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>s(!1),children:"Close"})]}),n.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["backgroundOpacity: ",c,", zIndex: ",h]})]})})]}),code:`import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);
  const [backgroundColor, setBackgroundColor] = React.useState(
    "var(--oks-palette-neutral-950, #000)",
  );
  const [zIndex, setZIndex] = React.useState(40);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-sm font-semibold text-gray-700 min-w-24">Colors</div>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-neutral-950, #000)")}
          >
            Neutral
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-primary-700, #2563eb)")}
          >
            Primary
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-secondary-700, #6d28d9)")}
          >
            Secondary
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-success-700, #16a34a)")}
          >
            Success
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-warning-700, #d97706)")}
          >
            Warning
          </Button>
          <Button
            variant="bordered"
            onPress={() => setBackgroundColor("var(--oks-palette-danger-700, #dc2626)")}
          >
            Danger
          </Button>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-sm font-semibold text-gray-700 min-w-24">zIndex</div>
          <Button variant="bordered" onPress={() => setZIndex(10)}>
            10
          </Button>
          <Button variant="bordered" onPress={() => setZIndex(40)}>
            40
          </Button>
          <Button variant="bordered" onPress={() => setZIndex(60)}>
            60
          </Button>
          <Button variant="bordered" onPress={() => setZIndex(100)}>
            100
          </Button>
          <Button color="primary" onPress={() => setOpen(true)}>
            Open
          </Button>
        </div>
      </div>

      <label className="flex items-center gap-3 flex-wrap">
        <span className="min-w-40">backgroundOpacity</span>
        <input
          type="range"
          min={0}
          max={100}
          value={backgroundOpacity}
          onChange={(e) => setBackgroundOpacity(Number(e.target.value))}
        />
        <span className="w-10 text-right">{backgroundOpacity}</span>
      </label>

      <label className="flex items-center gap-3 flex-wrap">
        <span className="min-w-40">zIndex</span>
        <input
          type="range"
          min={0}
          max={100}
          value={zIndex}
          onChange={(e) => setZIndex(Number(e.target.value))}
        />
        <span className="w-10 text-right">{zIndex}</span>
      </label>

      <div className="text-sm text-gray-600">
        Tip: the red badge uses z-index 50. Set backdrop zIndex above 50 to cover it.
      </div>

      <div className="fixed bottom-4 right-4 z-50 bg-red-600 text-white text-xs px-3 py-2 rounded-md shadow-lg">
        z-50 badge
      </div>

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        backgroundColor={backgroundColor}
        backgroundOpacity={backgroundOpacity}
        zIndex={zIndex}
      >
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Backdrop</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            backgroundOpacity: {backgroundOpacity}, zIndex: {zIndex}
          </div>
        </div>
      </Backdrop>
    </div>
  );
}`})},jj=["ease","easeIn","easeOut","easeInOut"],Sj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState("ease");return n.jsx(R,{title:"Easing",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[jj.map(u=>n.jsx(O,{variant:c===u?"solid":"bordered",color:"primary",onPress:()=>{d(u),s(!0)},children:u},u)),n.jsx(Qn,{isOpen:r,onClose:()=>s(!1),animationType:"zoom",animationDuration:.35,easing:c,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>s(!1),children:"Close"})]}),n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:"easing controls the CSS transition timing function."})]})})]}),code:`import React from "react";
import { Backdrop, Button } from "oks-ui";

const easings = ["ease", "easeIn", "easeOut", "easeInOut"];

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [easing, setEasing] = React.useState("ease");

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {easings.map((value) => (
        <Button
          key={value}
          variant={easing === value ? "solid" : "bordered"}
          color="primary"
          onPress={() => {
            setEasing(value);
            setOpen(true);
          }}
        >
          {value}
        </Button>
      ))}

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        animationType="zoom"
        animationDuration={0.35}
        easing={easing}
      >
        <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">{easing}</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            easing controls the CSS transition timing function.
          </div>
        </div>
      </Backdrop>
    </div>
  );
}`})},Cj=()=>{const r=xe.useRef(null),[s,c]=xe.useState(null),[d,u]=xe.useState(!1),[p,h]=xe.useState("container");return xe.useEffect(()=>{c(r.current)},[]),n.jsx(R,{title:"portal + container",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>{h("inline"),u(!0)},children:"Open (portal=false)"}),n.jsx(O,{color:"primary",onPress:()=>{h("container"),u(!0)},children:"Open (custom container)"})]}),n.jsxs("div",{ref:r,className:"w-full max-w-xl h-56 border border-gray-300 rounded-md p-3 bg-gray-50 overflow-hidden relative",style:{transform:"translateZ(0)"},children:[n.jsx("div",{className:"text-sm text-gray-700 font-medium",children:"Custom portal container box"}),n.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Backdrop can be portaled into this element using container."})]}),p==="inline"?n.jsx(Qn,{isOpen:d,onClose:()=>u(!1),portal:!1,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Inline render"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>u(!1),children:"Close"})]}),n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:"This Backdrop is not rendered via a portal."})]})}):n.jsx(Qn,{isOpen:d,onClose:()=>u(!1),portal:!0,container:s,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Portaled"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>u(!1),children:"Close"})]}),n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:"This Backdrop is portaled into the gray box."})]})})]}),code:`import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const boxRef = React.useRef(null);
  const [containerEl, setContainerEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState("container");

  React.useEffect(() => {
    setContainerEl(boxRef.current);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 flex-wrap">
        <Button
          variant="bordered"
          onPress={() => {
            setMode("inline");
            setOpen(true);
          }}
        >
          Open (portal=false)
        </Button>
        <Button
          color="primary"
          onPress={() => {
            setMode("container");
            setOpen(true);
          }}
        >
          Open (custom container)
        </Button>
      </div>

      <div
        ref={boxRef}
        className="w-full max-w-xl h-56 border border-gray-300 rounded-md p-3 bg-gray-50 overflow-hidden relative"
        style={{ transform: "translateZ(0)" }}
      >
        <div className="text-sm text-gray-700 font-medium">
          Custom portal container box
        </div>
        <div className="text-xs text-gray-600 mt-1">
          Backdrop can be portaled into this element using container.
        </div>
      </div>

      {mode === "inline" ? (
        <Backdrop isOpen={open} onClose={() => setOpen(false)} portal={false}>
          <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">Inline render</div>
              <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
                Close
              </Button>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              This Backdrop is not rendered via a portal.
            </div>
          </div>
        </Backdrop>
      ) : (
        <Backdrop
          isOpen={open}
          onClose={() => setOpen(false)}
          portal
          container={containerEl}
        >
          <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">Portaled</div>
              <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
                Close
              </Button>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              This Backdrop is portaled into the gray box.
            </div>
          </div>
        </Backdrop>
      )}
    </div>
  );
}`})},Dj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!1),[u,p]=xe.useState(!0);return n.jsx(R,{title:"Content layout",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:h=>d(h.target.checked)}),n.jsx("span",{children:"contentFullSize"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:h=>p(h.target.checked)}),n.jsx("span",{children:"contentStyle (padding)"})]}),n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"})]}),n.jsx(Qn,{isOpen:r,onClose:()=>s(!1),contentFullSize:c,contentClassName:"flex items-center justify-center",contentStyle:{padding:u?24:0},children:n.jsxs("div",{className:c?"w-full h-full bg-white rounded-md shadow-xl flex flex-col":"w-full max-w-md bg-white rounded-md shadow-xl p-6",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Content"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>s(!1),children:"Close"})]}),n.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["contentFullSize: ",c?"true":"false"]}),c?n.jsx("div",{className:"mt-4 flex-1 border border-dashed border-gray-300 rounded-md flex items-center justify-center text-sm text-gray-600",children:"Full-size area"}):null]})})]}),code:`import React from "react";
import { Backdrop, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [fullSize, setFullSize] = React.useState(false);
  const [padded, setPadded] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 flex-wrap">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={fullSize}
            onChange={(e) => setFullSize(e.target.checked)}
          />
          <span>contentFullSize</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={padded}
            onChange={(e) => setPadded(e.target.checked)}
          />
          <span>contentStyle (padding)</span>
        </label>
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Backdrop
        isOpen={open}
        onClose={() => setOpen(false)}
        contentFullSize={fullSize}
        contentClassName="flex items-center justify-center"
        contentStyle={{ padding: padded ? 24 : 0 }}
      >
        <div
          className={
            fullSize
              ? "w-full h-full bg-white rounded-md shadow-xl flex flex-col"
              : "w-full max-w-md bg-white rounded-md shadow-xl p-6"
          }
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Content</div>
            <Button size="sm" variant="bordered" onPress={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            contentFullSize: {fullSize ? "true" : "false"}
          </div>
          {fullSize ? (
            <div className="mt-4 flex-1 border border-dashed border-gray-300 rounded-md flex items-center justify-center text-sm text-gray-600">
              Full-size area
            </div>
          ) : null}
        </div>
      </Backdrop>
    </div>
  );
}`})},Tj=()=>{const r=[{prop:"isOpen",type:"boolean",default:"—",description:"Controls whether the backdrop is shown."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the backdrop requests to close (escape/outside click)."},{prop:"children",type:"ReactNode",default:"—",description:"Content rendered centered on top of the backdrop."},{prop:"zIndex",type:"number",default:"40",description:"CSS z-index for the backdrop layer."},{prop:"closeOnOutsideClick",type:"boolean",default:"true",description:"Closes when clicking outside the content."},{prop:"closeOnEscape",type:"boolean",default:"true",description:"Closes when pressing Escape."},{prop:"lockScroll",type:"boolean",default:"true",description:"Locks document scrolling while open."},{prop:"blur",type:"boolean",default:"true",description:"Applies a blur effect to the backdrop."},{prop:"backgroundColor",type:"string",default:'"var(--oks-palette-neutral-950, #000)"',description:"Backdrop background color."},{prop:"backgroundOpacity",type:"number",default:"80",description:"Backdrop opacity (0–100)."},{prop:"animationDuration",type:"number",default:"0.3",description:"Animation duration in seconds."},{prop:"animationType",type:'"fade" | "zoom" | "slideUp" | "slideDown" | "slideLeft" | "slideRight"',default:'"fade"',description:"Backdrop/content animation type."},{prop:"easing",type:'"ease" | "easeIn" | "easeOut" | "easeInOut"',default:'"ease"',description:"Animation easing."},{prop:"portal",type:"boolean",default:"true",description:"Renders via a portal when true."},{prop:"container",type:"Element | DocumentFragment | null",default:"—",description:"Portal container when portal is enabled."},{prop:"className",type:"string",default:"—",description:"Class name for the backdrop root."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the backdrop root."},{prop:"contentFullSize",type:"boolean",default:"false",description:"Makes the content container full-size."},{prop:"contentClassName",type:"string",default:"—",description:"Class name for the content container."},{prop:"contentStyle",type:"CSSProperties",default:"—",description:"Inline styles for the content container."}];return n.jsx(Lt,{title:"Backdrop Props",rows:r,footnote:"Backdrop is a controlled component: provide isOpen and onClose."})},Nj=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(xj,{}),n.jsx(bj,{}),n.jsx(kj,{}),n.jsx(yj,{}),n.jsx(wj,{}),n.jsx(vj,{}),n.jsx(Sj,{}),n.jsx(Cj,{}),n.jsx(Dj,{}),n.jsx(Tj,{})]}),Fj=()=>n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"w-full max-w-xl bg-white rounded-md border border-gray-200 overflow-hidden",children:[n.jsx("div",{className:"p-4 font-semibold",children:"Account"}),n.jsx(fa,{}),n.jsx("div",{className:"p-4 text-sm text-gray-600",children:"Profile settings and security options."}),n.jsx(fa,{}),n.jsxs("div",{className:"p-4 flex items-center justify-between",children:[n.jsx("span",{className:"text-sm",children:"Notifications"}),n.jsx("span",{className:"text-sm text-gray-500",children:"Enabled"})]})]}),code:n.jsx(n.Fragment,{children:`import { Divider } from "oks-ui";

<div>
  <div>Section A</div>
  <Divider />
  <div>Section B</div>
</div>`})}),Bj=["fullWidth","inset","middle"],Oj=["primary","secondary","success","warning","danger"],Aj=()=>n.jsx(R,{title:"Variants and colors",preview:n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Variants"}),Bj.map(r=>n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("div",{className:"text-xs text-gray-600",children:r}),n.jsx(fa,{variant:r})]},r))]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"text-sm font-semibold",children:"With text"}),n.jsx(fa,{color:"secondary",colorDepth:300,children:"OR"})]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Colors"}),n.jsx("div",{className:"flex flex-col gap-3",children:Oj.map(r=>n.jsx(fa,{color:r,colorDepth:300},r))})]})]}),code:n.jsx(n.Fragment,{children:`<Divider variant="inset" />
<Divider color="secondary" colorDepth={300}>OR</Divider>
<Divider orientation="vertical" />`})}),Ej=()=>n.jsx(R,{title:"Vertical",preview:n.jsxs("div",{className:"flex items-stretch gap-4 h-24",children:[n.jsx("div",{className:"flex-1 bg-white rounded-md border border-gray-200 p-4",children:"Left"}),n.jsx(fa,{orientation:"vertical",color:"secondary",colorDepth:200}),n.jsx("div",{className:"flex-1 bg-white rounded-md border border-gray-200 p-4",children:"Right"})]}),code:n.jsx(n.Fragment,{children:`<div className="flex items-stretch h-24">
  <div className="flex-1">Left</div>
  <Divider orientation="vertical" color="secondary" colorDepth={200} />
  <div className="flex-1">Right</div>
</div>`})}),zj=()=>{const[r,s]=xe.useState(1),[c,d]=xe.useState(300);return n.jsx(R,{title:"Thickness & label",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-20",children:"thickness"}),n.jsx("input",{type:"range",min:1,max:8,step:1,value:r,onChange:u=>s(Number(u.target.value))}),n.jsx("span",{className:"w-8 text-right",children:r})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-20",children:"colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:c,onChange:u=>d(Number(u.target.value))}),n.jsx("span",{className:"w-12 text-right",children:c})]})]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(fa,{color:"secondary",colorDepth:c,thickness:r}),n.jsx(fa,{color:"secondary",colorDepth:c,thickness:r,children:"OR"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Use children to render a labeled divider (horizontal only)."})]})]}),code:`import { Divider } from "oks-ui";

<Divider thickness={2} />
<Divider color="secondary" colorDepth={300} thickness={2}>OR</Divider>`})},Rj=()=>{const r=[{prop:"orientation",type:'"horizontal" | "vertical"',default:'"horizontal"',description:"Divider orientation."},{prop:"variant",type:'"fullWidth" | "inset" | "middle"',default:'"fullWidth"',description:"Layout variant."},{prop:"color",type:'DividerColor (e.g. "primary" | "secondary" | "success" | ... | string)',default:'"primary"',description:"Semantic color for divider line."},{prop:"colorDepth",type:"DividerColorDepth",default:"300",description:"Color intensity (snapped to 50..950)."},{prop:"thickness",type:"number | string",default:"—",description:"Line thickness (e.g. 1, 2, '2px')."},{prop:"children",type:"ReactNode",default:"—",description:"Optional content rendered within the divider."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(Lt,{title:"Divider Props",rows:r,footnote:"Divider also supports standard element props such as className, id, aria-*, and data-*."})},Mj=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Fj,{}),n.jsx(Aj,{}),n.jsx(Ej,{}),n.jsx(zj,{}),n.jsx(Rj,{})]}),Pj=()=>{const[r,s]=xe.useState(!1),c=xe.useRef(null);return n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open drawer"}),n.jsx(bo,{isOpen:r,onClose:()=>s(!1),title:"Drawer title",initialFocusRef:c,actions:n.jsxs("div",{className:"flex justify-end gap-3",children:[n.jsx(O,{variant:"bordered",onPress:()=>s(!1),children:"Cancel"}),n.jsx(O,{color:"primary",onPress:()=>s(!1),children:"Save"})]}),children:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"text-sm text-gray-600",children:"This drawer uses Backdrop internally. Press Escape or click outside to close."}),n.jsx("input",{ref:c,className:"w-full border border-gray-300 rounded-md px-3 py-2",placeholder:"Initial focus"}),n.jsx("div",{className:"text-sm",children:"Content area supports any React nodes."})]})})]}),code:n.jsx(n.Fragment,{children:`import { Drawer, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open drawer</Button>
      <Drawer isOpen={open} onClose={() => setOpen(false)} title="Drawer title">
        Drawer content
      </Drawer>
    </>
  );
}`})})},Lj=["left","right","top","bottom"],_j=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState("right");return n.jsx(R,{title:"Positions",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[Lj.map(u=>n.jsx(O,{color:"primary",variant:c===u?"solid":"bordered",onPress:()=>{d(u),s(!0)},children:u},u)),n.jsx(bo,{isOpen:r,onClose:()=>s(!1),position:c,title:`Position: ${c}`,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Drawer slides based on the selected position."})})]}),code:`import React from "react";
import { Button, Drawer } from "oks-ui";

const positions = ["left", "right", "top", "bottom"];

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState("right");

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {positions.map((p) => (
        <Button
          key={p}
          color="primary"
          variant={position === p ? "solid" : "bordered"}
          onPress={() => {
            setPosition(p);
            setOpen(true);
          }}
        >
          {p}
        </Button>
      ))}

      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        position={position}
        title={\`Position: \${position}\`}
      >
        <div className="text-sm text-gray-600">
          Drawer slides based on the selected position.
        </div>
      </Drawer>
    </div>
  );
}`})},Ij=["left","right","top","bottom"],Oh=["sm","md","lg"],Uj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState("right"),[u,p]=xe.useState("md"),[h,y]=xe.useState("md"),[x,v]=xe.useState("600px"),[b,w]=xe.useState("420px"),[S,z]=xe.useState(!1),[C,T]=xe.useState(!1),N=c==="left"||c==="right",M=S?x:u,Z=C?b:h;return n.jsx(R,{title:"Sizing (width/height)",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"flex items-center gap-4 flex-wrap",children:n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm min-w-16",children:"position"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:c,onChange:P=>d(P.target.value),children:Ij.map(P=>n.jsx("option",{value:P,children:P},P))})]})}),N?n.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:S,onChange:P=>z(P.target.checked)}),n.jsx("span",{className:"text-sm",children:"custom width"})]}),S?n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:x,onChange:P=>v(P.target.value),placeholder:'e.g. "600px"'}):n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:u,onChange:P=>p(P.target.value),children:Oh.map(P=>n.jsx("option",{value:P,children:P},P))})]}):n.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:C,onChange:P=>T(P.target.checked)}),n.jsx("span",{className:"text-sm",children:"custom height"})]}),C?n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:b,onChange:P=>w(P.target.value),placeholder:'e.g. "420px"'}):n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:h,onChange:P=>y(P.target.value),children:Oh.map(P=>n.jsx("option",{value:P,children:P},P))})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:N?`width: ${M}`:`height: ${Z}`})]}),n.jsx(bo,{isOpen:r,onClose:()=>s(!1),position:c,title:"Sizing demo",...N?{width:M}:{height:Z},children:n.jsx("div",{className:"text-sm text-gray-600",children:"For left/right drawers, use width. For top/bottom drawers, use height."})})]}),code:`import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        position="right"
        width="lg"
        title="Sizing demo"
      >
        Drawer content
      </Drawer>
    </>
  );
}`})},Hj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!1),[u,p]=xe.useState(!0),[h,y]=xe.useState("Account drawer"),[x,v]=xe.useState("Close account drawer"),[b,w]=xe.useState(!0),[S,z]=xe.useState(!0);return n.jsx(R,{title:"Accessibility & labels",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:C=>d(C.target.checked)}),n.jsx("span",{children:"title"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:C=>p(C.target.checked)}),n.jsx("span",{children:"dismissible"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:b,onChange:C=>w(C.target.checked)}),n.jsx("span",{children:"closeOnOutsideClick"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:S,onChange:C=>z(C.target.checked)}),n.jsx("span",{children:"closeOnEscape"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[n.jsxs("label",{className:"flex flex-col gap-1",children:[n.jsx("span",{className:"text-sm text-gray-600",children:"ariaLabel"}),n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:h,onChange:C=>y(C.target.value),disabled:c})]}),n.jsxs("label",{className:"flex flex-col gap-1",children:[n.jsx("span",{className:"text-sm text-gray-600",children:"closeLabel"}),n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:x,onChange:C=>v(C.target.value),disabled:!u})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:c?"Title is used for aria-labelledby.":"ariaLabel is used when no title is provided."})]}),n.jsx(bo,{isOpen:r,onClose:()=>s(!1),dismissible:u,closeLabel:x,closeOnOutsideClick:b,closeOnEscape:S,...c?{title:"Account"}:{ariaLabel:h},children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle title/dismissible to see how labeling and the close button behave."})})]}),code:`import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        ariaLabel="Account drawer"
        closeLabel="Close account drawer"
        dismissible
      >
        Drawer content
      </Drawer>
    </>
  );
}`})},Vj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0),[h,y]=xe.useState(!0),[x,v]=xe.useState(!0),[b,w]=xe.useState(80);return n.jsx(R,{title:"Options",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:S=>d(S.target.checked)}),n.jsx("span",{children:"dismissible"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:S=>p(S.target.checked)}),n.jsx("span",{children:"blur"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:h,onChange:S=>y(S.target.checked)}),n.jsx("span",{children:"closeOnOutsideClick"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:x,onChange:S=>v(S.target.checked)}),n.jsx("span",{children:"closeOnEscape"})]})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-36",children:"backgroundOpacity"}),n.jsx("input",{type:"range",min:0,max:100,value:b,onChange:S=>w(Number(S.target.value))}),n.jsx("span",{className:"w-10 text-right",children:b})]}),n.jsx("div",{className:"flex items-center gap-3",children:n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"})}),n.jsx(bo,{isOpen:r,onClose:()=>s(!1),title:"Drawer options",dismissible:c,blur:u,closeOnOutsideClick:h,closeOnEscape:x,backgroundOpacity:b,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle options above and reopen to see changes."})})]}),code:`import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [dismissible, setDismissible] = React.useState(true);
  const [blur, setBlur] = React.useState(true);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 flex-wrap">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={dismissible}
            onChange={(e) => setDismissible(e.target.checked)}
          />
          <span>dismissible</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={blur}
            onChange={(e) => setBlur(e.target.checked)}
          />
          <span>blur</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={closeOnOutsideClick}
            onChange={(e) => setCloseOnOutsideClick(e.target.checked)}
          />
          <span>closeOnOutsideClick</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={closeOnEscape}
            onChange={(e) => setCloseOnEscape(e.target.checked)}
          />
          <span>closeOnEscape</span>
        </label>
      </div>

      <label className="flex items-center gap-3">
        <span className="min-w-36">backgroundOpacity</span>
        <input
          type="range"
          min={0}
          max={100}
          value={backgroundOpacity}
          onChange={(e) => setBackgroundOpacity(Number(e.target.value))}
        />
        <span className="w-10 text-right">{backgroundOpacity}</span>
      </label>

      <div className="flex items-center gap-3">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Drawer options"
        dismissible={dismissible}
        blur={blur}
        closeOnOutsideClick={closeOnOutsideClick}
        closeOnEscape={closeOnEscape}
        backgroundOpacity={backgroundOpacity}
      >
        <div className="text-sm text-gray-600">
          Toggle options above and reopen to see changes.
        </div>
      </Drawer>
    </div>
  );
}`})},$j=["ease","easeIn","easeOut","easeInOut"],Ah=[{label:"Neutral",value:"var(--oks-palette-neutral-950, #000)"},{label:"Indigo",value:"rgba(79, 70, 229, 1)"},{label:"Emerald",value:"rgba(5, 150, 105, 1)"}],qj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(.3),[u,p]=xe.useState("ease"),[h,y]=xe.useState(!0),[x,v]=xe.useState(Ah[0].value);return n.jsx(R,{title:"Motion & backdrop overrides",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-32",children:"animationDuration"}),n.jsx("input",{type:"range",min:0,max:1.2,step:.05,value:c,onChange:b=>d(Number(b.target.value))}),n.jsxs("span",{className:"w-12 text-right",children:[c.toFixed(2),"s"]})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"easing"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:u,onChange:b=>p(b.target.value),children:$j.map(b=>n.jsx("option",{value:b,children:b},b))})]})]}),n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:h,onChange:b=>y(b.target.checked)}),n.jsx("span",{children:"backdrop.lockScroll"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"backdrop.backgroundColor"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:x,onChange:b=>v(b.target.value),children:Ah.map(b=>n.jsx("option",{value:b.value,children:b.label},b.label))})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Drawer composes Backdrop; advanced overlay behavior can be customized via the backdrop prop."})]}),n.jsx(bo,{isOpen:r,onClose:()=>s(!1),title:"Motion demo",animationDuration:c,easing:u,backdrop:{lockScroll:h,backgroundColor:x},children:n.jsx("div",{className:"text-sm text-gray-600",children:"Change animation duration/easing and backdrop overrides, then reopen."})})]}),code:`import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        animationDuration={0.5}
        easing="easeInOut"
        backdrop={{ lockScroll: false, backgroundColor: "rgba(79, 70, 229, 1)" }}
        title="Motion demo"
      >
        Drawer content
      </Drawer>
    </>
  );
}`})},Gj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0),[h,y]=xe.useState(60),x=xe.useRef(null),v=c&&u?x.current:void 0;return n.jsx(R,{title:"Portal, container, and zIndex",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:b=>d(b.target.checked)}),n.jsx("span",{children:"portal"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:b=>p(b.target.checked),disabled:!c}),n.jsx("span",{children:"container"})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-12",children:"zIndex"}),n.jsx("input",{type:"range",min:10,max:200,value:h,onChange:b=>y(Number(b.target.value))}),n.jsx("span",{className:"w-10 text-right",children:h})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:c?u?"Portaled into the container below.":"Portaled to document.body.":"Rendered inline (no portal)."})]}),n.jsxs("div",{ref:x,className:"relative border border-dashed border-gray-300 rounded-md p-4 h-56 overflow-hidden bg-white",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Portal container"}),n.jsx("div",{className:"text-xs text-gray-600",children:"When container is enabled, the drawer/backdrop portal into this element."})]}),n.jsx(bo,{isOpen:r,onClose:()=>s(!1),title:"Portal demo",portal:c,container:v,zIndex:h,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle portal/container to see where the drawer renders."})})]}),code:`import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <div ref={containerRef} />
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        portal
        container={containerRef.current}
        zIndex={60}
        title="Portal demo"
      >
        Drawer content
      </Drawer>
    </>
  );
}`})},Yj=["default","primary","secondary","info","success","warning","danger","black","white"],Kj=n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[n.jsx("path",{d:"M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z",stroke:"currentColor",strokeWidth:"2"}),n.jsx("path",{d:"M12 10.5v6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M12 7.5h.01",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),Xj=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState("secondary"),[u,p]=xe.useState(600),[h,y]=xe.useState(!0),[x,v]=xe.useState(!0),[b,w]=xe.useState(!1),S={color:c,colorDepth:u,icon:h?Kj:void 0,tooltip:x?{content:"Header tooltip"}:!1,...b?{title:"Overridden header title"}:{}};return n.jsx(R,{title:"Header customization (headers)",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"color"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:c,onChange:z=>d(z.target.value),children:Yj.map(z=>n.jsx("option",{value:z,children:z},z))})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-20",children:"colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:u,onChange:z=>p(Number(z.target.value))}),n.jsx("span",{className:"w-12 text-right",children:u})]})]}),n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:h,onChange:z=>y(z.target.checked)}),n.jsx("span",{children:"icon"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:x,onChange:z=>v(z.target.checked)}),n.jsx("span",{children:"tooltip"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:b,onChange:z=>w(z.target.checked)}),n.jsx("span",{children:"headers.title"})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"headers lets you customize the internal PageTitle."})]}),n.jsx(bo,{isOpen:r,onClose:()=>s(!1),title:"Drawer title",headers:S,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle header settings, then reopen to see changes."})})]}),code:`import React from "react";
import { Button, Drawer } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Drawer title"
        headers={{ color: "secondary", colorDepth: 600 }}
      >
        Drawer content
      </Drawer>
    </>
  );
}`})},Zj=()=>{const r=[{prop:"isOpen",type:"boolean",default:"—",description:"Controls whether the drawer is open."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the drawer requests to close."},{prop:"position",type:'"left" | "right" | "top" | "bottom"',default:'"right"',description:"Which side the drawer slides from."},{prop:"title",type:"ReactNode",default:"—",description:"Header title content."},{prop:"children",type:"ReactNode",default:"—",description:"Drawer body content."},{prop:"actions",type:"ReactNode",default:"—",description:"Footer actions area."},{prop:"dismissible",type:"boolean",default:"true",description:"Shows a close button and allows dismiss interactions."},{prop:"closeLabel",type:"string",default:'"Close drawer"',description:"Accessible label for the close button."},{prop:"ariaLabel",type:"string",default:'"Drawer"',description:"Accessible label for the drawer dialog region."},{prop:"width",type:'"sm" | "md" | "lg" | string | number',default:'"md" (420px)',description:"Drawer width for left/right positions."},{prop:"height",type:'"sm" | "md" | "lg" | string | number',default:'"md" (360px)',description:"Drawer height for top/bottom positions."},{prop:"closeOnOutsideClick",type:"boolean",default:"true",description:"Closes when clicking outside the drawer panel."},{prop:"closeOnEscape",type:"boolean",default:"true",description:"Closes when pressing Escape."},{prop:"portal",type:"boolean",default:"true",description:"Renders via a portal when true."},{prop:"container",type:"Element | DocumentFragment | null",default:"—",description:"Portal container when portal is enabled."},{prop:"zIndex",type:"number",default:"—",description:"Overrides the Backdrop z-index."},{prop:"blur",type:"boolean",default:"—",description:"Overrides Backdrop blur."},{prop:"backgroundOpacity",type:"number",default:"—",description:"Overrides Backdrop backgroundOpacity (0–100)."},{prop:"animationDuration",type:"number",default:"—",description:"Overrides Backdrop animationDuration (seconds)."},{prop:"easing",type:'BackdropProps["easing"]',default:"—",description:"Overrides Backdrop easing."},{prop:"initialFocusRef",type:"RefObject<HTMLElement | null>",default:"—",description:"Element to focus when the drawer opens."},{prop:"backdrop",type:"Partial<BackdropProps> (without isOpen/onClose/children)",default:"—",description:"Additional Backdrop overrides."},{prop:"headers",type:"Partial<PageTitleProps>",default:"—",description:"Header PageTitle overrides."},{prop:"className",type:"string",default:"—",description:"Class name for the drawer panel."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the drawer panel."}];return n.jsx(Lt,{title:"Drawer Props",rows:r,footnote:"Drawer is controlled (isOpen/onClose). Advanced overlay behavior can be customized via the backdrop prop."})},Qj=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Pj,{}),n.jsx(_j,{}),n.jsx(Uj,{}),n.jsx(Hj,{}),n.jsx(Vj,{}),n.jsx(qj,{}),n.jsx(Gj,{}),n.jsx(Xj,{}),n.jsx(Zj,{})]}),Wj=()=>{const[r,s]=xe.useState(!1),c=xe.useRef(null);return n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open modal"}),n.jsx(Ho,{isOpen:r,onClose:()=>s(!1),title:"Modal title",initialFocusRef:c,actions:n.jsxs("div",{className:"flex justify-end gap-3",children:[n.jsx(O,{variant:"bordered",onPress:()=>s(!1),children:"Cancel"}),n.jsx(O,{color:"primary",onPress:()=>s(!1),children:"Confirm"})]}),children:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"text-sm text-gray-600",children:"Click outside or press Escape to close."}),n.jsx("input",{ref:c,className:"w-full border border-gray-300 rounded-md px-3 py-2",placeholder:"Initial focus"})]})})]}),code:n.jsx(n.Fragment,{children:`import { Modal, Button } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Modal title">
        Modal content
      </Modal>
    </>
  );
}`})})},Jj=["sm","md","lg"],eS=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState("md");return n.jsx(R,{title:"Sizes",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[Jj.map(u=>n.jsx(O,{color:"primary",variant:c===u?"solid":"bordered",onPress:()=>{d(u),s(!0)},children:u},u)),n.jsx(Ho,{isOpen:r,onClose:()=>s(!1),title:`Size: ${c}`,size:c,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Modal width is controlled by the size prop."})})]}),code:`import React from "react";
import { Button, Modal } from "oks-ui";

const sizes = ["sm", "md", "lg"];

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState("md");

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {sizes.map((s) => (
        <Button
          key={s}
          color="primary"
          variant={size === s ? "solid" : "bordered"}
          onPress={() => {
            setSize(s);
            setOpen(true);
          }}
        >
          {s}
        </Button>
      ))}

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={\`Size: \${size}\`}
        size={size}
      >
        <div className="text-sm text-gray-600">
          Modal width is controlled by the size prop.
        </div>
      </Modal>
    </div>
  );
}`})},tS=["fade","zoom","slideUp","slideDown","slideLeft","slideRight"],nS=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0),[h,y]=xe.useState(!0),[x,v]=xe.useState(!0),[b,w]=xe.useState(80),[S,z]=xe.useState("slideUp");return n.jsx(R,{title:"Options",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:C=>d(C.target.checked)}),n.jsx("span",{children:"dismissible"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:C=>p(C.target.checked)}),n.jsx("span",{children:"blur"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:h,onChange:C=>y(C.target.checked)}),n.jsx("span",{children:"closeOnOutsideClick"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:x,onChange:C=>v(C.target.checked)}),n.jsx("span",{children:"closeOnEscape"})]})]}),n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("span",{className:"text-sm min-w-28",children:"animationType"}),tS.map(C=>n.jsx(O,{size:"sm",color:"primary",variant:S===C?"solid":"bordered",onPress:()=>z(C),children:C},C))]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-36",children:"backgroundOpacity"}),n.jsx("input",{type:"range",min:0,max:100,value:b,onChange:C=>w(Number(C.target.value))}),n.jsx("span",{className:"w-10 text-right",children:b})]}),n.jsx("div",{className:"flex items-center gap-3",children:n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"})}),n.jsx(Ho,{isOpen:r,onClose:()=>s(!1),title:"Modal options",dismissible:c,blur:u,closeOnOutsideClick:h,closeOnEscape:x,backgroundOpacity:b,animationType:S,animationDuration:.25,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle options above and reopen to see changes."})})]}),code:`import React from "react";
import { Button, Modal } from "oks-ui";

const animationTypes = ["fade", "zoom", "slideUp", "slideDown", "slideLeft", "slideRight"];

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const [dismissible, setDismissible] = React.useState(true);
  const [blur, setBlur] = React.useState(true);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = React.useState(true);
  const [closeOnEscape, setCloseOnEscape] = React.useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(80);
  const [animationType, setAnimationType] = React.useState("slideUp");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 flex-wrap">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={dismissible}
            onChange={(e) => setDismissible(e.target.checked)}
          />
          <span>dismissible</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={blur}
            onChange={(e) => setBlur(e.target.checked)}
          />
          <span>blur</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={closeOnOutsideClick}
            onChange={(e) => setCloseOnOutsideClick(e.target.checked)}
          />
          <span>closeOnOutsideClick</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={closeOnEscape}
            onChange={(e) => setCloseOnEscape(e.target.checked)}
          />
          <span>closeOnEscape</span>
        </label>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm min-w-28">animationType</span>
        {animationTypes.map((type) => (
          <Button
            key={type}
            size="sm"
            color="primary"
            variant={animationType === type ? "solid" : "bordered"}
            onPress={() => setAnimationType(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      <label className="flex items-center gap-3">
        <span className="min-w-36">backgroundOpacity</span>
        <input
          type="range"
          min={0}
          max={100}
          value={backgroundOpacity}
          onChange={(e) => setBackgroundOpacity(Number(e.target.value))}
        />
        <span className="w-10 text-right">{backgroundOpacity}</span>
      </label>

      <div className="flex items-center gap-3">
        <Button color="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Modal options"
        dismissible={dismissible}
        blur={blur}
        closeOnOutsideClick={closeOnOutsideClick}
        closeOnEscape={closeOnEscape}
        backgroundOpacity={backgroundOpacity}
        animationType={animationType}
        animationDuration={0.25}
      >
        <div className="text-sm text-gray-600">
          Toggle options above and reopen to see changes.
        </div>
      </Modal>
    </div>
  );
}`})},aS=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState("Close modal");return n.jsx(R,{title:"Close button label",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:h=>d(h.target.checked)}),n.jsx("span",{children:"dismissible"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"closeLabel"}),n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:u,onChange:h=>p(h.target.value),disabled:!c})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"closeLabel sets the close button aria-label."})]}),n.jsx(Ho,{isOpen:r,onClose:()=>s(!1),title:"Close label demo",dismissible:c,closeLabel:u,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle dismissible to hide/show the close button."})})]}),code:`import React from "react";
import { Button, Modal } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Close label demo"
        closeLabel="Dismiss dialog"
      >
        Modal content
      </Modal>
    </>
  );
}`})},oS=["ease","easeIn","easeOut","easeInOut"],Eh=[{label:"Neutral",value:"var(--oks-palette-neutral-950, #000)"},{label:"Indigo",value:"rgba(79, 70, 229, 1)"},{label:"Emerald",value:"rgba(5, 150, 105, 1)"}],rS=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(.3),[u,p]=xe.useState("ease"),[h,y]=xe.useState(!0),[x,v]=xe.useState(Eh[0].value);return n.jsx(R,{title:"Motion & backdrop overrides",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-32",children:"animationDuration"}),n.jsx("input",{type:"range",min:0,max:1.2,step:.05,value:c,onChange:b=>d(Number(b.target.value))}),n.jsxs("span",{className:"w-12 text-right",children:[c.toFixed(2),"s"]})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"easing"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:u,onChange:b=>p(b.target.value),children:oS.map(b=>n.jsx("option",{value:b,children:b},b))})]})]}),n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:h,onChange:b=>y(b.target.checked)}),n.jsx("span",{children:"backdrop.lockScroll"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"backdrop.backgroundColor"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:x,onChange:b=>v(b.target.value),children:Eh.map(b=>n.jsx("option",{value:b.value,children:b.label},b.label))})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Modal composes Backdrop; customize overlay behavior via the backdrop prop when needed."})]}),n.jsx(Ho,{isOpen:r,onClose:()=>s(!1),title:"Motion demo",animationDuration:c,easing:u,backdrop:{lockScroll:h,backgroundColor:x},children:n.jsx("div",{className:"text-sm text-gray-600",children:"Change animation duration/easing and backdrop overrides, then reopen."})})]}),code:`import React from "react";
import { Button, Modal } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        animationDuration={0.5}
        easing="easeInOut"
        backdrop={{ lockScroll: false, backgroundColor: "rgba(79, 70, 229, 1)" }}
        title="Motion demo"
      >
        Modal content
      </Modal>
    </>
  );
}`})},sS=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0),[h,y]=xe.useState(60),x=xe.useRef(null),v=c&&u?x.current:void 0;return n.jsx(R,{title:"Portal, container, and zIndex",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:b=>d(b.target.checked)}),n.jsx("span",{children:"portal"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:b=>p(b.target.checked),disabled:!c}),n.jsx("span",{children:"container"})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-12",children:"zIndex"}),n.jsx("input",{type:"range",min:10,max:200,value:h,onChange:b=>y(Number(b.target.value))}),n.jsx("span",{className:"w-10 text-right",children:h})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:c?u?"Portaled into the container below.":"Portaled to document.body.":"Rendered inline (no portal)."})]}),n.jsxs("div",{ref:x,className:"relative border border-dashed border-gray-300 rounded-md p-4 h-56 overflow-hidden bg-white",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Portal container"}),n.jsx("div",{className:"text-xs text-gray-600",children:"When container is enabled, the modal/backdrop portal into this element."})]}),n.jsx(Ho,{isOpen:r,onClose:()=>s(!1),title:"Portal demo",portal:c,container:v,zIndex:h,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle portal/container to see where the modal renders."})})]}),code:`import React from "react";
import { Button, Modal } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <div ref={containerRef} />
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        portal
        container={containerRef.current}
        zIndex={60}
        title="Portal demo"
      >
        Modal content
      </Modal>
    </>
  );
}`})},zh=["default","primary","secondary","info","success","warning","danger"],lS=n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[n.jsx("path",{d:"M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z",stroke:"currentColor",strokeWidth:"2"}),n.jsx("path",{d:"M12 10.5v6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M12 7.5h.01",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),iS=()=>{const[r,s]=xe.useState(!1),[c,d]=xe.useState("secondary"),[u,p]=xe.useState(600),[h,y]=xe.useState("secondary"),[x,v]=xe.useState(200),[b,w]=xe.useState(1);return n.jsx(R,{title:"Header & divider overrides",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"headers.color"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:c,onChange:S=>d(S.target.value),children:zh.map(S=>n.jsx("option",{value:S,children:S},S))})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-28",children:"headers.colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:u,onChange:S=>p(Number(S.target.value))}),n.jsx("span",{className:"w-12 text-right",children:u})]})]}),n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"divider.color"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:h,onChange:S=>y(S.target.value),children:zh.map(S=>n.jsx("option",{value:S,children:S},S))})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-28",children:"divider.colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:x,onChange:S=>v(Number(S.target.value))}),n.jsx("span",{className:"w-12 text-right",children:x})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-24",children:"thickness"}),n.jsx("input",{type:"range",min:1,max:6,step:1,value:b,onChange:S=>w(Number(S.target.value))}),n.jsx("span",{className:"w-8 text-right",children:b})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>s(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Modal header uses PageTitle and Divider internally."})]}),n.jsx(Ho,{isOpen:r,onClose:()=>s(!1),title:"Modal title",headers:{color:c,colorDepth:u,icon:lS,tooltip:{content:"Header tooltip"}},divider:{color:h,colorDepth:x,thickness:b},children:n.jsx("div",{className:"text-sm text-gray-600",children:"Use headers to customize the title, and divider to customize the separator line."})})]}),code:`import React from "react";
import { Button, Modal } from "oks-ui";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Modal title"
        headers={{ color: "secondary", colorDepth: 600 }}
        divider={{ color: "secondary", colorDepth: 200, thickness: 2 }}
      >
        Modal content
      </Modal>
    </>
  );
}`})},cS=()=>{const r=[{prop:"isOpen",type:"boolean",default:"—",description:"Controls whether the modal is open."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the modal requests to close."},{prop:"title",type:"ReactNode",default:"—",description:"Header title content."},{prop:"children",type:"ReactNode",default:"—",description:"Modal body content."},{prop:"actions",type:"ReactNode",default:"—",description:"Footer actions area."},{prop:"size",type:'"sm" | "md" | "lg" | string | number',default:'"md" (640px)',description:"Modal width."},{prop:"dismissible",type:"boolean",default:"true",description:"Shows a close button and allows dismiss interactions."},{prop:"closeLabel",type:"string",default:'"Close modal"',description:"Accessible label for the close button."},{prop:"closeOnOutsideClick",type:"boolean",default:"true",description:"Closes when clicking outside the modal panel."},{prop:"closeOnEscape",type:"boolean",default:"true",description:"Closes when pressing Escape."},{prop:"portal",type:"boolean",default:"true",description:"Renders via a portal when true."},{prop:"container",type:"Element | DocumentFragment | null",default:"—",description:"Portal container when portal is enabled."},{prop:"zIndex",type:"number",default:"—",description:"Overrides the Backdrop z-index."},{prop:"blur",type:"boolean",default:"—",description:"Overrides Backdrop blur."},{prop:"backgroundOpacity",type:"number",default:"—",description:"Overrides Backdrop backgroundOpacity (0–100)."},{prop:"animationDuration",type:"number",default:"—",description:"Overrides Backdrop animationDuration (seconds)."},{prop:"animationType",type:'BackdropProps["animationType"]',default:"—",description:"Overrides Backdrop animationType."},{prop:"easing",type:'BackdropProps["easing"]',default:"—",description:"Overrides Backdrop easing."},{prop:"initialFocusRef",type:"RefObject<HTMLElement | null>",default:"—",description:"Element to focus when the modal opens."},{prop:"backdrop",type:"Partial<BackdropProps> (without isOpen/onClose/children)",default:"—",description:"Additional Backdrop overrides."},{prop:"headers",type:"Partial<PageTitleProps>",default:"—",description:"Header PageTitle overrides."},{prop:"divider",type:"Partial<DividerProps>",default:"—",description:"Divider overrides (between header and body)."},{prop:"className",type:"string",default:"—",description:"Class name for the modal panel."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the modal panel."}];return n.jsx(Lt,{title:"Modal Props",rows:r,footnote:"Modal is a controlled component: provide isOpen and onClose."})},dS=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Wj,{}),n.jsx(eS,{}),n.jsx(nS,{}),n.jsx(aS,{}),n.jsx(rS,{}),n.jsx(sS,{}),n.jsx(iS,{}),n.jsx(cS,{})]}),uS=()=>n.jsx(R,{title:"How to usage",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(Zt,{title:"Dashboard",as:"h2"}),n.jsx(Zt,{title:"Billing",as:"h4",color:"primary",icon:n.jsx("span",{className:"text-base",children:"★"}),iconPosition:"start"}),n.jsx(Zt,{title:"Settings",as:"h5",color:"secondary",icon:n.jsx("span",{className:"text-base",children:"→"}),iconPosition:"end"}),n.jsx(Zt,{title:"Slot classNames",as:"h6",color:"info",icon:n.jsx("span",{className:"text-base",children:"i"}),classNames:{base:"gap-1",title:"uppercase tracking-wide",icon:"text-blue-600"}})]}),code:n.jsx(n.Fragment,{children:`import { PageTitle } from "oks-ui";

<PageTitle title="Dashboard" as="h2" />
<PageTitle title="Billing" as="h4" color="primary" />`})}),pS=["black","default","primary","secondary","success","warning","danger","info"],fS=()=>n.jsx(R,{title:"Colors",preview:n.jsx("div",{className:"flex flex-col gap-3",children:pS.map(r=>n.jsx(Zt,{as:"h5",title:`color="${r}"`,color:r},r))}),code:n.jsx(n.Fragment,{children:`<PageTitle title="Primary title" color="primary" />
<PageTitle title="Danger title" color="danger" colorDepth={600} />`})}),mS=()=>{const[r,s]=xe.useState("h3");return n.jsx(R,{title:"as vs tag",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm min-w-10",children:"h"}),n.jsxs("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:r,onChange:c=>s(c.target.value),children:[n.jsx("option",{value:"h1",children:"h1"}),n.jsx("option",{value:"h2",children:"h2"}),n.jsx("option",{value:"h3",children:"h3"}),n.jsx("option",{value:"h4",children:"h4"}),n.jsx("option",{value:"h5",children:"h5"}),n.jsx("option",{value:"h6",children:"h6"})]})]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(Zt,{title:`as="${r}"`,as:r}),n.jsx(Zt,{title:`tag="${r}"`,tag:r})]})]}),code:`import { PageTitle } from "oks-ui";

<PageTitle title="Heading" as="h3" />
<PageTitle title="Heading" tag="h3" />`})},hS=()=>{const[r,s]=xe.useState(500);return n.jsx(R,{title:"Color depth",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-20",children:"colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:r,onChange:c=>s(Number(c.target.value))}),n.jsx("span",{className:"w-12 text-right",children:r})]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(Zt,{as:"h4",title:`primary @ ${r}`,color:"primary",colorDepth:r}),n.jsx(Zt,{as:"h4",title:`secondary @ ${r}`,color:"secondary",colorDepth:r})]})]}),code:`import { PageTitle } from "oks-ui";

<PageTitle title="Primary" color="primary" colorDepth={600} />
<PageTitle title="Secondary" color="secondary" colorDepth={300} />`})},xS=()=>n.jsx(R,{title:"className vs titleClassName",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(Zt,{title:"Root className (layout)",as:"h4",className:"gap-1 items-end",icon:n.jsx("span",{className:"text-base",children:"★"})}),n.jsx(Zt,{title:"titleClassName (typography)",as:"h4",color:"secondary",icon:n.jsx("span",{className:"text-base",children:"→"}),titleClassName:"uppercase tracking-wide"}),n.jsx(Zt,{title:"Slot classNames",as:"h4",color:"info",icon:n.jsx("span",{className:"text-base",children:"i"}),classNames:{base:"gap-2",title:"font-semibold",icon:"text-blue-600"}})]}),code:`import { PageTitle } from "oks-ui";

<PageTitle
  title="Root layout"
  className="gap-1 items-end"
  icon={<span>★</span>}
/>

<PageTitle
  title="Title typography"
  titleClassName="uppercase tracking-wide"
/>
`}),gS=()=>n.jsx(R,{title:"Tooltip",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(Zt,{title:"Hover me",as:"h4",tooltip:{message:"This tooltip comes from PageTitle.tooltip",side:"top",align:"center"}}),n.jsx(Zt,{title:"Derived from title",as:"h5",tooltip:{delay:0,closeDelay:0}}),n.jsx(Zt,{title:"Custom content",as:"h5",tooltip:{props:{delay:0,closeDelay:0},content:"This uses Avatar-style { props, content }"}}),n.jsx(Zt,{title:"Disabled tooltip",as:"h5",tooltip:{message:"Hidden",disabled:!0}})]}),code:n.jsx(n.Fragment,{children:`<PageTitle
  title="Hover me"
  tooltip={{ message: "Tooltip text", side: "top", align: "center" }}
/>

<PageTitle title="Derived from title" tooltip={{ delay: 0, closeDelay: 0 }} />

<PageTitle
  title="Custom content"
  tooltip={{ props: { delay: 0 }, content: "Custom tooltip" }}
/>`})}),vS=()=>n.jsx(R,{title:"Inline style",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(Zt,{title:"Default",as:"h4"}),n.jsx(Zt,{title:"Custom style",as:"h4",color:"primary",style:{opacity:.85,transform:"translateY(1px)",letterSpacing:"0.02em"}})]}),code:`import { PageTitle } from "oks-ui";

<PageTitle
  title="Custom style"
  color="primary"
  style={{ opacity: 0.85, transform: "translateY(1px)" }}
/>`}),bS=()=>{const r=[{prop:"title",type:"ReactNode",default:'"Title"',description:"Title content."},{prop:"as",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',default:"—",description:"Heading element to render."},{prop:"tag",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',default:"—",description:"Alias for as."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | "black" | "white" | string',default:"—",description:"Text/icon color."},{prop:"colorDepth",type:"number",default:"500",description:"Color intensity (snapped to 50..950)."},{prop:"icon",type:"ReactNode",default:"—",description:"Optional icon."},{prop:"iconPosition",type:'"start" | "end" | "before" | "after"',default:'"start"',description:"Where the icon is placed relative to the title."},{prop:"tooltip",type:"boolean | Tooltip props | { props?: Tooltip props; content?: ReactNode }",default:"—",description:"Enables a tooltip on hover/focus."},{prop:"className",type:"string",default:"—",description:"Root class name."},{prop:"titleClassName",type:"string",default:"—",description:"Class name applied to the title text element."},{prop:"classNames",type:'Partial<Record<"base" | "title" | "icon", string>>',default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(Lt,{title:"PageTitle Props",rows:r,footnote:"PageTitle also supports standard div props such as id, aria-*, and data-*."})},kS=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(uS,{}),n.jsx(fS,{}),n.jsx(hS,{}),n.jsx(mS,{}),n.jsx(xS,{}),n.jsx(gS,{}),n.jsx(vS,{}),n.jsx(bS,{})]}),yS=()=>n.jsx(R,{title:"Email: how to use",preview:n.jsx(Ke,{onSubmit:r=>{console.log("submit",r)},children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"email",label:"Email",name:"email",placeholder:"Enter your email",validation:{rules:{required:!0,email:!0}}}),n.jsx(O,{type:"submit",children:"Submit"})]})}),code:n.jsx(n.Fragment,{children:`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={(data) => console.log("submit", data)}>
      <FormFieldSet
        type="email"
        label="Email"
        name="email"
        placeholder="Enter your email"
        validation={{ rules: { required: true, email: true } }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})}),wS=()=>{const r=["xs","xs-sm","sm","md","lg","xl"];return n.jsx(R,{title:"Email: size",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"email",label:`Size: ${s}`,name:`size_${s}`,size:s,placeholder:"Enter your email"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="email" label="XS" name="xs" size="xs" />
      <FormFieldSet type="email" label="MD" name="md" size="md" />
      <FormFieldSet type="email" label="XL" name="xl" size="xl" />
    </Form>
  );
}`})})},jS=()=>{const r=["outline","soft","underline"];return n.jsx(R,{title:"Email: variant",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"email",label:`Variant: ${s}`,name:`variant_${s}`,variant:s,placeholder:"Enter your email"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="email" label="Outline" name="a" variant="outline" />
      <FormFieldSet type="email" label="Soft" name="b" variant="soft" />
    </Form>
  );
}`})})},Hd=()=>n.jsx("span",{"aria-hidden":"true",className:"inline-flex w-5 h-5 rounded-full bg-slate-300"}),SS=()=>n.jsx(R,{title:"Email: adornments",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsx(Fe,{type:"email",label:"Start icon",name:"email_start_icon",startIcon:n.jsx(Hd,{}),placeholder:"Enter your email",autoComplete:"email"}),n.jsx(Fe,{type:"email",label:"Suffix",name:"email_suffix",suffix:"@company.com",placeholder:"username",autoComplete:"email"}),n.jsx(Fe,{type:"email",label:"Icon + prefix",name:"email_icon_prefix",startIcon:n.jsx(Hd,{}),prefix:"mailto:",placeholder:"user@domain.com",autoComplete:"email"}),n.jsx(Fe,{type:"email",label:"Suffix + icon",name:"email_suffix_icon",suffix:".com",endIcon:n.jsx(Hd,{}),placeholder:"user@domain",autoComplete:"email"})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

const DotIcon = () => (
  <span aria-hidden="true" className="inline-flex w-5 h-5 rounded-full bg-slate-300" />
);

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="email" label="Start icon" name="a" startIcon={<DotIcon />} />
      <FormFieldSet type="email" label="Suffix" name="b" suffix="@company.com" />
    </Form>
  );
}`})}),CS=()=>{const r=["none","sm","md","lg","full"];return n.jsx(R,{title:"Email: radius",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"email",label:`Radius: ${s}`,name:`email_radius_${s}`,...s==="sm"?{rounded:s}:{radius:s},placeholder:"Enter your email",autoComplete:"email"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="email" label="None" name="a" radius="none" />
      <FormFieldSet type="email" label="Full" name="b" radius="full" />
    </Form>
  );
}`})})},DS=()=>{const r=["top","floating"];return n.jsx(R,{title:"Email: labelPlacement",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"email",label:`Label: ${s}`,name:`label_${s}`,labelPlacement:s,placeholder:"Enter your email"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="email" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="email" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`})})},TS=()=>{const r=["default","primary","secondary","info","success","warning","danger"];return n.jsx(R,{title:"Email: color",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"email",label:"Default (implicit)",name:"color_default_implicit",placeholder:"Enter your email",autoComplete:"email"}),r.map(s=>n.jsx(Fe,{type:"email",label:`Color: ${s}`,name:`color_${s}`,color:s,placeholder:"Enter your email"},s))]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="email" label="Default (implicit)" name="z" />
      <FormFieldSet type="email" label="Default (explicit)" name="y" color="default" />
      <FormFieldSet type="email" label="Primary" name="a" color="primary" />
      <FormFieldSet type="email" label="Success" name="b" color="success" />
      <FormFieldSet type="email" label="Danger" name="c" color="danger" />
    </Form>
  );
}`})})},NS=()=>n.jsx(R,{title:"Email: autoComplete",preview:n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"email",label:'Per-field: autoComplete="email"',name:"ac_email",autoComplete:"email",placeholder:"name@company.com"}),n.jsx(Fe,{type:"email",label:'Per-field: autoComplete="off"',name:"ac_off",autoComplete:"off",placeholder:"name@company.com"})]})}),n.jsx(Ke,{disableAutofill:!1,autoComplete:"on",onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"email",label:'Form autoComplete="on"',name:"form_on",autoComplete:"email",placeholder:"Browser can suggest"}),n.jsx(Fe,{type:"email",label:'Form autoComplete="on" + autoComplete="off"',name:"form_on_field_off",autoComplete:"off",placeholder:"Still off"})]})})]}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <>
      <Form onSubmit={() => {}}>
        <FormFieldSet type="email" label="Email" name="a" autoComplete="email" />
        <FormFieldSet type="email" label="No autofill" name="b" autoComplete="off" />
      </Form>

      <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
        <FormFieldSet type="email" label="Browser can suggest" name="c" autoComplete="email" />
      </Form>
    </>
  );
}`})}),FS=()=>n.jsx(R,{title:"Email: validation and error",preview:n.jsx(Ke,{onSubmit:()=>{},validationMode:"blur",showErrorsOn:"blur",onError:r=>console.log("errors",r),children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"email",label:"Email",name:"email",placeholder:"name@company.com",description:"Must be a valid email address.",validation:{rules:{required:!0,email:!0}}}),n.jsx(O,{type:"submit",children:"Submit"})]})}),code:n.jsx(n.Fragment,{children:`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
      <FormFieldSet
        type="email"
        label="Email"
        name="email"
        placeholder="name@company.com"
        description="Must be a valid email address."
        validation={{ rules: { required: true, email: true } }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})}),BS=()=>{const r=[{prop:"type",type:'"email"',default:'"text"',description:"Renders an email input (HTML input type=email)."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | string',default:'"default"',description:"Semantic color."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:'Border radius. ("rounded" is supported as an alias.)'},{prop:"startIcon / endIcon",type:"ReactNode",default:"—",description:"Start/end icon content."},{prop:"prefix / suffix",type:"ReactNode",default:"—",description:"Start/end text content."},{prop:"validation",type:"{ rules: Record<string, unknown> }",default:"—",description:"Common rules: { required: true, email: true }."},{prop:"autoComplete",type:"string",default:"derived",description:'Use "email" to allow autofill, or "off" to disable for this field.'},{prop:"size / variant / labelPlacement / colorDepth",type:"various",default:"md / outline / top / 500",description:"Shared visual options for FormFieldSet."},{prop:"placeholder / disabled / required",type:"various",default:"— / false / false",description:"Standard input props, passed through."}];return n.jsx(Lt,{title:"FormFieldSet (email) Props",rows:r,footnote:"Also supports standard input props (e.g. inputMode, maxLength, aria-*, data-*)."})},OS=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(yS,{}),n.jsx(wS,{}),n.jsx(jS,{}),n.jsx(SS,{}),n.jsx(CS,{}),n.jsx(DS,{}),n.jsx(TS,{}),n.jsx(NS,{}),n.jsx(FS,{}),n.jsx(BS,{})]}),AS=()=>n.jsx(R,{title:"Password: how to use",preview:n.jsx(Ke,{onSubmit:r=>console.log("submit",r),children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"password",label:"Password",name:"password",placeholder:"Enter your password",validation:{rules:{required:!0,minLength:6}}}),n.jsx(O,{type:"submit",children:"Submit"})]})}),code:n.jsx(n.Fragment,{children:`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={(data) => console.log("submit", data)}>
      <FormFieldSet
        type="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
        validation={{ rules: { required: true, minLength: 6 } }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})}),ES=()=>{const r=["xs","xs-sm","sm","md","lg","xl"];return n.jsx(R,{title:"Password: size",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"password",label:`Size: ${s}`,name:`size_${s}`,size:s,placeholder:"Enter password"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="XS" name="xs" size="xs" />
      <FormFieldSet type="password" label="MD" name="md" size="md" />
      <FormFieldSet type="password" label="XL" name="xl" size="xl" />
    </Form>
  );
}`})})},zS=()=>{const r=["outline","soft","underline"];return n.jsx(R,{title:"Password: variant",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"password",label:`Variant: ${s}`,name:`variant_${s}`,variant:s,placeholder:"Enter password"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="Outline" name="a" variant="outline" />
      <FormFieldSet type="password" label="Soft" name="b" variant="soft" />
    </Form>
  );
}`})})},Vd=()=>n.jsx("span",{"aria-hidden":"true",className:"inline-flex w-5 h-5 rounded-full bg-slate-300"}),RS=()=>n.jsx(R,{title:"Password: adornments",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsx(Fe,{type:"password",label:"Start icon + prefix",name:"password_start_prefix",startIcon:n.jsx(Vd,{}),prefix:"key",placeholder:"Enter password",revealToggle:!1}),n.jsx(Fe,{type:"password",label:"Suffix + end icon",name:"password_suffix_end_icon",suffix:"123",endIcon:n.jsx(Vd,{}),placeholder:"Enter password",revealToggle:!1}),n.jsx(Fe,{type:"password",label:"Reveal toggle + suffix",name:"password_reveal_suffix",suffix:"kg",placeholder:"Enter password"}),n.jsx(Fe,{type:"password",label:"Reveal toggle + end icon",name:"password_reveal_end_icon",endIcon:n.jsx(Vd,{}),placeholder:"Enter password"})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

const DotIcon = () => (
  <span aria-hidden="true" className="inline-flex w-5 h-5 rounded-full bg-slate-300" />
);

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="Prefix" name="a" prefix="key" revealToggle={false} />
      <FormFieldSet type="password" label="Reveal + suffix" name="b" suffix="kg" />
      <FormFieldSet type="password" label="Reveal + end icon" name="c" endIcon={<DotIcon />} />
    </Form>
  );
}`})}),MS=()=>{const r=["none","sm","md","lg","full"];return n.jsx(R,{title:"Password: radius",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"password",label:`Radius: ${s}`,name:`password_radius_${s}`,...s==="sm"?{rounded:s}:{radius:s},placeholder:"Enter password"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="None" name="a" radius="none" />
      <FormFieldSet type="password" label="Full" name="b" radius="full" />
    </Form>
  );
}`})})},PS=()=>{const r=["top","floating"];return n.jsx(R,{title:"Password: labelPlacement",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"password",label:`Label: ${s}`,name:`label_${s}`,labelPlacement:s,placeholder:"Enter password"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="password" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`})})},LS=()=>{const r=["default","primary","secondary","info","success","warning","danger"];return n.jsx(R,{title:"Password: color",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"password",label:"Default (implicit)",name:"password_color_default_implicit",placeholder:"Enter password",revealToggle:!1}),r.map(s=>n.jsx(Fe,{type:"password",label:`Color: ${s}`,name:`password_color_${s}`,color:s,placeholder:"Enter password",revealToggle:!1},s))]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="Default (implicit)" name="z" revealToggle={false} />
      <FormFieldSet type="password" label="Default (explicit)" name="y" color="default" revealToggle={false} />
      <FormFieldSet type="password" label="Primary" name="a" color="primary" revealToggle={false} />
      <FormFieldSet type="password" label="Danger" name="b" color="danger" revealToggle={false} />
    </Form>
  );
}`})})},_S=()=>n.jsx(R,{title:"Password: autoComplete",preview:n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"password",label:'Per-field: "current-password"',name:"ac_current",autoComplete:"current-password",placeholder:"Login password"}),n.jsx(Fe,{type:"password",label:'Per-field: "new-password"',name:"ac_new",autoComplete:"new-password",placeholder:"New password"})]})}),n.jsx(Ke,{disableAutofill:!1,autoComplete:"on",onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"password",label:'Form autoComplete="on"',name:"form_on",autoComplete:"current-password",placeholder:"Browser can suggest"}),n.jsx(Fe,{type:"password",label:'Form autoComplete="on" + "new-password"',name:"form_on_new",autoComplete:"new-password",placeholder:"Signup password"})]})})]}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <>
      <Form onSubmit={() => {}}>
        <FormFieldSet type="password" label="Login" name="a" autoComplete="current-password" />
        <FormFieldSet type="password" label="Signup" name="b" autoComplete="new-password" />
      </Form>

      <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
        <FormFieldSet type="password" label="Allow autofill" name="c" autoComplete="current-password" />
      </Form>
    </>
  );
}`})}),IS=()=>n.jsx(R,{title:"Password: revealToggle",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"password",label:"Reveal toggle on",name:"on",revealToggle:!0,placeholder:"With eye icon"}),n.jsx(Fe,{type:"password",label:"Reveal toggle off",name:"off",revealToggle:!1,placeholder:"No eye icon"})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="On" name="a" revealToggle />
      <FormFieldSet type="password" label="Off" name="b" revealToggle={false} />
    </Form>
  );
}`})}),US=()=>n.jsx(R,{title:"Password: disabled",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"password",label:"Disabled",name:"disabled",disabled:!0,placeholder:"Disabled"}),n.jsx(Fe,{type:"password",label:"Enabled",name:"enabled",placeholder:"Enabled"})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="password" label="Disabled" name="a" disabled />
      <FormFieldSet type="password" label="Enabled" name="b" />
    </Form>
  );
}`})}),HS=()=>n.jsx(R,{title:"Password: validation and error",preview:n.jsx(Ke,{onSubmit:()=>{},validationMode:"blur",showErrorsOn:"blur",children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"password",label:"Password",name:"password",placeholder:"Try: Aa1!aaaa",description:"Focus the field to see requirements.",validation:{rules:{required:!0,strongPassword:{minLength:8,minUpper:1,minLower:1,minNumber:1,minSpecial:1}}}}),n.jsx(O,{type:"submit",children:"Submit"})]})}),code:n.jsx(n.Fragment,{children:`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
      <FormFieldSet
        type="password"
        label="Password"
        name="password"
        validation={{
          rules: {
            required: true,
            strongPassword: {
              minLength: 8,
              minUpper: 1,
              minLower: 1,
              minNumber: 1,
              minSpecial: 1,
            },
          },
        }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})}),VS=()=>{const r=[{prop:"type",type:'"password"',default:'"text"',description:"Renders a password input with optional reveal toggle."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | string',default:'"default"',description:"Semantic color."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:'Border radius. ("rounded" is supported as an alias.)'},{prop:"startIcon / endIcon",type:"ReactNode",default:"—",description:"Start/end icon content."},{prop:"prefix / suffix",type:"ReactNode",default:"—",description:"Start/end text content."},{prop:"revealToggle",type:"boolean",default:"true",description:"Shows/hides the eye icon to reveal the password."},{prop:"validation.rules.strongPassword",type:"{ minLength?; minUpper?; minLower?; minNumber?; minSpecial? }",default:"—",description:"When provided, shows password requirements UI on focus and validates strength."},{prop:"autoComplete",type:'"current-password" | "new-password" | string',default:"derived",description:"Use current-password for login, new-password for signup."},{prop:"size / variant / labelPlacement / colorDepth",type:"various",default:"md / outline / top / 500",description:"Shared visual options for FormFieldSet."}];return n.jsx(Lt,{title:"FormFieldSet (password) Props",rows:r,footnote:"Also supports standard input props (e.g. placeholder, disabled, required, aria-*, data-*)."})},$S=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(AS,{}),n.jsx(ES,{}),n.jsx(zS,{}),n.jsx(RS,{}),n.jsx(MS,{}),n.jsx(PS,{}),n.jsx(LS,{}),n.jsx(_S,{}),n.jsx(IS,{}),n.jsx(US,{}),n.jsx(HS,{}),n.jsx(VS,{})]}),qS=()=>n.jsx(R,{title:"Text: how to use",preview:n.jsx(Ke,{onSubmit:r=>{console.log("submit",r)},children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"text",label:"Name",name:"name",placeholder:"Enter your name",validation:{rules:{required:!0,minLength:3}}}),n.jsx(O,{type:"submit",children:"Submit"})]})}),code:n.jsx(n.Fragment,{children:`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={(data) => console.log("submit", data)}>
      <FormFieldSet
        type="text"
        label="Name"
        name="name"
        placeholder="Enter your name"
        validation={{ rules: { required: true, minLength: 3 } }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})}),GS=()=>{const r=["xs","xs-sm","sm","md","lg","xl"];return n.jsx(R,{title:"Text: size",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"text",label:`Size: ${s}`,name:`size_${s}`,size:s,placeholder:"Type here"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="XS" name="xs" size="xs" />
      <FormFieldSet type="text" label="MD" name="md" size="md" />
      <FormFieldSet type="text" label="XL" name="xl" size="xl" />
    </Form>
  );
}`})})},YS=()=>{const r=["outline","soft","underline"];return n.jsx(R,{title:"Text: variant",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"text",label:`Variant: ${s}`,name:`variant_${s}`,variant:s,placeholder:"Type here"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="Outline" name="a" variant="outline" />
      <FormFieldSet type="text" label="Soft" name="b" variant="soft" />
    </Form>
  );
}`})})},ai=()=>n.jsx("span",{"aria-hidden":"true",className:"inline-flex w-5 h-5 rounded-full bg-slate-300"}),KS=()=>n.jsx(R,{title:"Text: adornments",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsx(Fe,{type:"text",label:"Prefix",name:"text_prefix",prefix:"kg",placeholder:"0"}),n.jsx(Fe,{type:"text",label:"Suffix",name:"text_suffix",suffix:"kg",placeholder:"0"}),n.jsx(Fe,{type:"text",label:"Start icon",name:"text_start_icon",startIcon:n.jsx(ai,{}),placeholder:"Type here"}),n.jsx(Fe,{type:"text",label:"End icon",name:"text_end_icon",endIcon:n.jsx(ai,{}),placeholder:"Type here"}),n.jsx(Fe,{type:"text",label:"Icon + prefix",name:"text_icon_prefix",startIcon:n.jsx(ai,{}),prefix:"kg",placeholder:"0"}),n.jsx(Fe,{type:"text",label:"Suffix + icon",name:"text_suffix_icon",suffix:"kg",endIcon:n.jsx(ai,{}),placeholder:"0"})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

const DotIcon = () => (
  <span aria-hidden="true" className="inline-flex w-5 h-5 rounded-full bg-slate-300" />
);

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="Prefix" name="a" prefix="kg" />
      <FormFieldSet type="text" label="Suffix" name="b" suffix="kg" />
      <FormFieldSet type="text" label="Start icon" name="c" startIcon={<DotIcon />} />
      <FormFieldSet type="text" label="End icon" name="d" endIcon={<DotIcon />} />
    </Form>
  );
}`})}),XS=()=>{const r=["none","sm","md","lg","full"];return n.jsx(R,{title:"Text: radius",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"text",label:`Radius: ${s}`,name:`text_radius_${s}`,...s==="sm"?{rounded:s}:{radius:s},placeholder:"Type here"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="None" name="a" radius="none" />
      <FormFieldSet type="text" label="Full" name="b" radius="full" />
    </Form>
  );
}`})})},ZS=()=>{const r=["top","floating"];return n.jsx(R,{title:"Text: labelPlacement",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>n.jsx(Fe,{type:"text",label:`Label: ${s}`,name:`label_${s}`,labelPlacement:s,placeholder:"Type here"},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="Top" name="a" labelPlacement="top" />
      <FormFieldSet type="text" label="Floating" name="b" labelPlacement="floating" />
    </Form>
  );
}`})})},QS=()=>{const r=["default","primary","secondary","info","success","warning","danger"];return n.jsx(R,{title:"Text: color",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"text",label:"Default (implicit)",name:"color_default_implicit",placeholder:"Type here"}),r.map(s=>n.jsx(Fe,{type:"text",label:`Color: ${s}`,name:`color_${s}`,color:s,placeholder:"Type here"},s))]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="Default (implicit)" name="z" />
      <FormFieldSet type="text" label="Default (explicit)" name="y" color="default" />
      <FormFieldSet type="text" label="Primary" name="a" color="primary" />
      <FormFieldSet type="text" label="Success" name="b" color="success" />
      <FormFieldSet type="text" label="Danger" name="c" color="danger" />
    </Form>
  );
}`})})},WS=()=>{const r=[300,500,700];return n.jsx(R,{title:"Text: colorDepth",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[r.map(s=>n.jsx(Fe,{type:"text",label:`Primary: ${s}`,name:`primary_${s}`,color:"primary",colorDepth:s,placeholder:"Type here"},s)),r.map(s=>n.jsx(Fe,{type:"text",label:`Success: ${s}`,name:`success_${s}`,color:"success",colorDepth:s,placeholder:"Type here"},`success_${s}`))]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="Primary 300" name="a" color="primary" colorDepth={300} />
      <FormFieldSet type="text" label="Primary 700" name="b" color="primary" colorDepth={700} />
    </Form>
  );
}`})})},JS=()=>n.jsx(R,{title:"Text: autoComplete",preview:n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"text",label:'Per-field: autoComplete="name"',name:"ac_name",autoComplete:"name",placeholder:"Full name"}),n.jsx(Fe,{type:"text",label:'Per-field: autoComplete="off"',name:"ac_off",autoComplete:"off",placeholder:"No autofill"})]})}),n.jsx(Ke,{disableAutofill:!1,autoComplete:"on",onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(Fe,{type:"text",label:'Form autoComplete="on"',name:"form_on",autoComplete:"name",placeholder:"Browser can suggest"}),n.jsx(Fe,{type:"text",label:'Form autoComplete="on" + autoComplete="off"',name:"form_on_field_off",autoComplete:"off",placeholder:"Still off"})]})})]}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <>
      <Form onSubmit={() => {}}>
        <FormFieldSet type="text" label="Name" name="a" autoComplete="name" />
        <FormFieldSet type="text" label="No autofill" name="b" autoComplete="off" />
      </Form>

      <Form disableAutofill={false} autoComplete="on" onSubmit={() => {}}>
        <FormFieldSet type="text" label="Browser can suggest" name="c" autoComplete="name" />
      </Form>
    </>
  );
}`})}),e1=()=>{const[r,s]=m.useState("Controlled value");return n.jsx(R,{title:"Text: value vs defaultValue",preview:n.jsx(Ke,{onSubmit:c=>{console.log("submit",c)},children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"text",label:'Uncontrolled (defaultValue="Hello")',name:"uncontrolled",defaultValue:"Hello"}),n.jsx(Fe,{type:"text",label:"Controlled (value + onChange)",name:"controlled",value:r,onChange:c=>s(c.target.value)}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx(O,{type:"button",onPress:()=>s("Preset value"),children:"Set preset"}),n.jsx(O,{type:"submit",children:"Submit"})]})]})}),code:n.jsx(n.Fragment,{children:`import React, { useState } from "react";
import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const [value, setValue] = useState("Controlled value");

  return (
    <Form onSubmit={(data) => console.log("submit", data)}>
      <FormFieldSet
        type="text"
        label='Uncontrolled (defaultValue="Hello")'
        name="uncontrolled"
        defaultValue="Hello"
      />

      <FormFieldSet
        type="text"
        label="Controlled"
        name="controlled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button type="button" onPress={() => setValue("Preset value")}>
        Set preset
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})})},t1=()=>n.jsx(R,{title:"Text: disabled / required",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsx(Fe,{type:"text",label:"Disabled",name:"disabled",disabled:!0,placeholder:"Disabled"}),n.jsx(Fe,{type:"text",label:"Required",name:"required",required:!0,placeholder:"Required"})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="text" label="Disabled" name="a" disabled />
      <FormFieldSet type="text" label="Required" name="b" required />
    </Form>
  );
}`})}),n1=()=>n.jsx(R,{title:"Text: validation and error",preview:n.jsx(Ke,{onSubmit:()=>{},onError:r=>{console.log("errors",r)},validationMode:"blur",showErrorsOn:"blur",children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"text",label:"Username",name:"username",placeholder:"At least 3 characters",description:"This is shown under the field.",validation:{rules:{required:!0,minLength:3}}}),n.jsx(O,{type:"submit",children:"Submit"})]})}),code:n.jsx(n.Fragment,{children:`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form
      onSubmit={() => {}}
      validationMode="blur"
      showErrorsOn="blur"
    >
      <FormFieldSet
        type="text"
        label="Username"
        name="username"
        placeholder="At least 3 characters"
        description="This is shown under the field."
        validation={{ rules: { required: true, minLength: 3 } }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})}),a1=()=>{const r=[{prop:"type",type:'"text"',default:'"text"',description:"Renders a text input via FormFieldSet."},{prop:"label",type:"ReactNode",default:"—",description:"Field label."},{prop:"description",type:"ReactNode",default:"—",description:"Help text under the field."},{prop:"labelPlacement",type:'"top" | "floating"',default:'"top"',description:"Label placement style."},{prop:"size",type:'"xs" | "xs-sm" | "sm" | "md" | "lg" | "xl"',default:'"md"',description:"Control sizing."},{prop:"variant",type:'"outline" | "soft" | "underline"',default:'"outline"',description:"Visual variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | string',default:'"default"',description:"Semantic color; can be a custom token name."},{prop:"colorDepth",type:"number",default:"500",description:"Tone intensity (typically 50–950)."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:'Border radius. ("rounded" is supported as an alias.)'},{prop:"startIcon / endIcon",type:"ReactNode",default:"—",description:"Start/end icon content."},{prop:"prefix / suffix",type:"ReactNode",default:"—",description:"Start/end text content."},{prop:"name",type:"string",default:"derived",description:"Form field key used in formData."},{prop:"id",type:"string",default:"derived",description:"Input id used for label association."},{prop:"validation",type:"{ rules: Record<string, unknown>; message?: Record<string, string> }",default:"—",description:"Validation rules for this field."},{prop:"error",type:"ReactNode",default:"—",description:"Controlled error content override."},{prop:"touched",type:"boolean",default:"—",description:"Controlled touched state override."},{prop:"placeholder",type:"string",default:"—",description:"Input placeholder."},{prop:"autoComplete",type:"string",default:"derived",description:"Autocomplete hint. When Form disables autofill, defaults to off for non-password inputs."},{prop:"disabled / required / readOnly",type:"boolean",default:"false",description:"Standard input flags, passed through."},{prop:"value / defaultValue",type:"string",default:"''",description:"Controlled/uncontrolled value."},{prop:"onChange / onBlur",type:"(event) => void",default:"—",description:"Input event handlers (also updates Form context when inside Form)."}];return n.jsx(Lt,{title:"FormFieldSet (text) Props",rows:r,footnote:"Also supports standard input props (e.g. maxLength, inputMode, pattern, aria-*, data-*)."})},o1=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(qS,{}),n.jsx(GS,{}),n.jsx(YS,{}),n.jsx(KS,{}),n.jsx(XS,{}),n.jsx(ZS,{}),n.jsx(QS,{}),n.jsx(WS,{}),n.jsx(JS,{}),n.jsx(e1,{}),n.jsx(t1,{}),n.jsx(n1,{}),n.jsx(a1,{})]}),r1=()=>n.jsx(R,{title:"Select: how to use",preview:n.jsx(Ke,{onSubmit:r=>console.log("submit",r),children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"select",label:"Country",name:"country",placeholder:"Pick a country",color:"primary",radius:"lg",options:[{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"India",value:"in"}],validation:{rules:{required:!0}}}),n.jsx(O,{type:"submit",children:"Submit"})]})}),code:n.jsx(n.Fragment,{children:`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={(data) => console.log("submit", data)}>
      <FormFieldSet
        type="select"
        label="Country"
        name="country"
        placeholder="Pick a country"
        color="primary"
        radius="lg"
        options={[
          { label: "United States", value: "us" },
          { label: "Canada", value: "ca" },
          { label: "India", value: "in" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})}),Rh=[{label:"Option 1",value:"one"},{label:"Option 2",value:"two"},{label:"Option 3",value:"three",disabled:!0}],s1=()=>n.jsx(R,{title:"Select: custom vs native",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsx(Fe,{type:"select",label:"Custom select",name:"custom",placeholder:"Select…",options:Rh}),n.jsx(Fe,{type:"select",label:"Native select",name:"native",native:!0,placeholder:"Select…",options:Rh})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Custom" name="a" options={options} />
      <FormFieldSet type="select" label="Native" name="b" native options={options} />
    </Form>
  );
}`})}),$d=[{label:"Option 1",value:"one"},{label:"Option 2",value:"two"},{label:"Option 3",value:"three"}],l1=()=>n.jsx(R,{title:"Select: multiple",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsx(Fe,{type:"select",label:"Single (custom)",name:"single",placeholder:"Select…",options:$d}),n.jsx(Fe,{type:"select",label:"Multiple (custom)",name:"multiple",multiple:!0,defaultValue:["one","three"],options:$d}),n.jsx(Fe,{type:"select",label:"Multiple (native)",name:"multipleNative",native:!0,multiple:!0,options:$d})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
    { label: "Option 3", value: "three" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Multiple (custom)" name="a" multiple defaultValue={["one", "three"]} options={options} />
      <FormFieldSet type="select" label="Multiple (native)" name="b" native multiple options={options} />
    </Form>
  );
}`})}),Mh=[{label:"Option 1",value:"one"},{label:"Option 2",value:"two"}],i1=()=>n.jsx(R,{title:"Select: placeholder",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsx(Fe,{type:"select",label:"With placeholder",name:"withPlaceholder",placeholder:"Select a value",options:Mh}),n.jsx(Fe,{type:"select",label:"No placeholder",name:"noPlaceholder",placeholder:null,options:Mh})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="With placeholder" name="a" placeholder="Select a value" options={options} />
      <FormFieldSet type="select" label="No placeholder" name="b" placeholder={null} options={options} />
    </Form>
  );
}`})}),Ph=[{label:"Option 1",value:"one"},{label:"Option 2 (disabled)",value:"two",disabled:!0},{label:"Option 3",value:"three"}],c1=()=>n.jsx(R,{title:"Select: disabled",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsx(Fe,{type:"select",label:"Disabled select",name:"disabled",disabled:!0,placeholder:"Select…",options:Ph}),n.jsx(Fe,{type:"select",label:"Disabled option",name:"disabledOption",placeholder:"Select…",options:Ph})]})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Disabled" name="a" disabled options={[{ label: "One", value: "one" }]} />
    </Form>
  );
}`})}),d1=[{label:"Option 1",value:"one"},{label:"Option 2",value:"two"}],u1=()=>{const r=["xs","xs-sm","sm","md","lg","xl"];return n.jsx(R,{title:"Select: size",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(s=>n.jsx(Fe,{type:"select",label:`Size: ${s}`,name:`size_${s}`,size:s,placeholder:"Select…",options:d1},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="SM" name="a" size="sm" options={options} />
      <FormFieldSet type="select" label="LG" name="b" size="lg" options={options} />
    </Form>
  );
}`})})},p1=[{label:"Option 1",value:"one"},{label:"Option 2",value:"two"}],f1=()=>{const r=["outline","soft","underline"];return n.jsx(R,{title:"Select: variant",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(s=>n.jsx(Fe,{type:"select",label:`Variant: ${s}`,name:`variant_${s}`,variant:s,placeholder:"Select…",options:p1},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Outline" name="a" variant="outline" options={options} />
      <FormFieldSet type="select" label="Soft" name="b" variant="soft" options={options} />
      <FormFieldSet type="select" label="Underline" name="c" variant="underline" options={options} />
    </Form>
  );
}`})})},m1=[{label:"Option 1",value:"one"},{label:"Option 2",value:"two"}],h1=()=>{const r=["top","floating"];return n.jsx(R,{title:"Select: labelPlacement",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(s=>n.jsx(Fe,{type:"select",label:`Label: ${s}`,name:`label_${s}`,labelPlacement:s,placeholder:"Select…",options:m1},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Top" name="a" labelPlacement="top" options={options} />
      <FormFieldSet type="select" label="Floating" name="b" labelPlacement="floating" options={options} />
    </Form>
  );
}`})})},x1=[{label:"Option 1",value:"one"},{label:"Option 2",value:"two"}],g1=()=>{const r=["primary","secondary","info","success","warning","danger"];return n.jsx(R,{title:"Select: color",preview:n.jsx(Ke,{onSubmit:()=>{},children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(s=>n.jsx(Fe,{type:"select",label:`Color: ${s}`,name:`color_${s}`,color:s,placeholder:"Select…",options:x1},s))})}),code:n.jsx(n.Fragment,{children:`import { Form, FormFieldSet } from "oks-ui";

export default function Example() {
  const options = [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: "two" },
  ];

  return (
    <Form onSubmit={() => {}}>
      <FormFieldSet type="select" label="Primary" name="a" color="primary" options={options} />
      <FormFieldSet type="select" label="Success" name="b" color="success" options={options} />
      <FormFieldSet type="select" label="Danger" name="c" color="danger" options={options} />
    </Form>
  );
}`})})},v1=[{label:"Option 1",value:"one"},{label:"Option 2",value:"two"}],b1=()=>n.jsx(R,{title:"Select: validation and error",preview:n.jsx(Ke,{onSubmit:()=>{},validationMode:"blur",showErrorsOn:"blur",children:n.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[n.jsx(Fe,{type:"select",label:"Pick one",name:"pick",placeholder:"Select…",options:v1,validation:{rules:{required:!0}}}),n.jsx(O,{type:"submit",children:"Submit"})]})}),code:n.jsx(n.Fragment,{children:`import { Button, Form, FormFieldSet } from "oks-ui";

export default function Example() {
  return (
    <Form onSubmit={() => {}} validationMode="blur" showErrorsOn="blur">
      <FormFieldSet
        type="select"
        label="Pick one"
        name="pick"
        placeholder="Select…"
        options={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        validation={{ rules: { required: true } }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`})}),k1=()=>{const r=[{prop:"type",type:'"select"',default:"—",description:"Renders a select input (custom by default)."},{prop:"options",type:"Array<{ label: ReactNode; value: string; disabled?: boolean }>",default:"[]",description:"List of selectable options."},{prop:"placeholder",type:"ReactNode",default:'"Select…"',description:"Shown when no value is selected (single select)."},{prop:"native",type:"boolean",default:"false",description:"Use native <select> rendering."},{prop:"multiple",type:"boolean",default:"false",description:"Enables multi-select (custom by default; native when native is true)."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | string',default:'"default"',description:"Controls focus/accent color (tone is an alias)."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:"Controls corner radius (rounded is an alias)."}];return n.jsx(Lt,{title:"FormFieldSet (select) Props",rows:r,footnote:"Also supports disabled, required, size, variant, labelPlacement, and aria-*."})},y1=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(r1,{}),n.jsx(s1,{}),n.jsx(l1,{}),n.jsx(i1,{}),n.jsx(c1,{}),n.jsx(u1,{}),n.jsx(f1,{}),n.jsx(h1,{}),n.jsx(g1,{}),n.jsx(b1,{}),n.jsx(k1,{})]}),w1=()=>n.jsx("div",{children:n.jsxs(pi,{defaultValue:"text",children:[n.jsx(Ht,{value:"text",title:"Text",children:n.jsx(o1,{})}),n.jsx(Ht,{value:"email",title:"Email",children:n.jsx(OS,{})}),n.jsx(Ht,{value:"password",title:"Password",children:n.jsx($S,{})}),n.jsx(Ht,{value:"select",title:"Select",children:n.jsx(y1,{})})]})}),j1=()=>n.jsx("div",{className:"p-3",children:n.jsxs(pi,{defaultSelectedKey:"formFieldSet",color:"primary",variant:"bordered",children:[n.jsx(Ht,{title:"FormFieldSet",children:n.jsx(w1,{})},"formFieldSet"),n.jsx(Ht,{title:"Alert",children:n.jsx(ny,{})},"alert"),n.jsx(Ht,{title:"Avatar",children:n.jsx(by,{})},"avatar"),n.jsx(Ht,{title:"Backdrop",children:n.jsx(Nj,{})},"backdrop"),n.jsx(Ht,{title:"Badge",children:n.jsx(Oy,{})},"badge"),n.jsx(Ht,{title:"Button",children:n.jsx(Ky,{})},"button"),n.jsx(Ht,{title:"Chip",children:n.jsx(lw,{})},"chip"),n.jsx(Ht,{title:"Divider",children:n.jsx(Mj,{})},"divider"),n.jsx(Ht,{title:"Drawer",children:n.jsx(Qj,{})},"drawer"),n.jsx(Ht,{title:"Dropdown",children:n.jsx(Fw,{})},"dropdown"),n.jsx(Ht,{title:"Modal",children:n.jsx(dS,{})},"modal"),n.jsx(Ht,{title:"PageTitle",children:n.jsx(kS,{})},"pageTitle"),n.jsx(Ht,{title:"Tooltip",children:n.jsx(Yw,{})},"tooltip"),n.jsx(Ht,{title:"Toast",children:n.jsx(hj,{})},"toast")]})}),S1=()=>n.jsx(Ub,{children:n.jsx(Jh,{path:"/",element:n.jsx(j1,{})})});Vv.createRoot(document.getElementById("root")).render(n.jsx(C0,{placement:"bottom-right",maxVisibleToasts:3,children:n.jsx(m.StrictMode,{children:n.jsx(uk,{children:n.jsx(S1,{})})})}));
