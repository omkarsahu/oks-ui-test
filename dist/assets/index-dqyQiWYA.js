(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function c(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(u){if(u.ep)return;u.ep=!0;const p=c(u);fetch(u.href,p)}})();function Dv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xd={exports:{}},ys={};var Vh;function Tv(){if(Vh)return ys;Vh=1;var r=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function c(d,u,p){var m=null;if(p!==void 0&&(m=""+p),u.key!==void 0&&(m=""+u.key),"key"in u){p={};for(var y in u)y!=="key"&&(p[y]=u[y])}else p=u;return u=p.ref,{$$typeof:r,type:d,key:m,ref:u!==void 0?u:null,props:p}}return ys.Fragment=l,ys.jsx=c,ys.jsxs=c,ys}var Gh;function Nv(){return Gh||(Gh=1,xd.exports=Tv()),xd.exports}var n=Nv(),gd={exports:{}},Ke={};var Yh;function Bv(){if(Yh)return Ke;Yh=1;var r=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),S=Symbol.iterator;function F(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function R(k,B,E){this.props=k,this.context=B,this.refs=N,this.updater=E||C}R.prototype.isReactComponent={},R.prototype.setState=function(k,B){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,B,"setState")},R.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Z(){}Z.prototype=R.prototype;function M(k,B,E){this.props=k,this.context=B,this.refs=N,this.updater=E||C}var $=M.prototype=new Z;$.constructor=M,T($,R.prototype),$.isPureReactComponent=!0;var G=Array.isArray;function I(){}var Y={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function K(k,B,E){var j=E.ref;return{$$typeof:r,type:k,key:B,ref:j!==void 0?j:null,props:E}}function he(k,B){return K(k.type,B,k.props)}function ee(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function ge(k){var B={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(E){return B[E]})}var re=/\/+/g;function be(k,B){return typeof k=="object"&&k!==null&&k.key!=null?ge(""+k.key):B.toString(36)}function se(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(I,I):(k.status="pending",k.then(function(B){k.status==="pending"&&(k.status="fulfilled",k.value=B)},function(B){k.status==="pending"&&(k.status="rejected",k.reason=B)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function D(k,B,E,j,W){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var ie=!1;if(k===null)ie=!0;else switch(te){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(k.$$typeof){case r:case l:ie=!0;break;case b:return ie=k._init,D(ie(k._payload),B,E,j,W)}}if(ie)return W=W(k),ie=j===""?"."+be(k,0):j,G(W)?(E="",ie!=null&&(E=ie.replace(re,"$&/")+"/"),D(W,B,E,"",function(ne){return ne})):W!=null&&(ee(W)&&(W=he(W,E+(W.key==null||k&&k.key===W.key?"":(""+W.key).replace(re,"$&/")+"/")+ie)),B.push(W)),1;ie=0;var De=j===""?".":j+":";if(G(k))for(var ae=0;ae<k.length;ae++)j=k[ae],te=De+be(j,ae),ie+=D(j,B,E,te,W);else if(ae=F(k),typeof ae=="function")for(k=ae.call(k),ae=0;!(j=k.next()).done;)j=j.value,te=De+be(j,ae++),ie+=D(j,B,E,te,W);else if(te==="object"){if(typeof k.then=="function")return D(se(k),B,E,j,W);throw B=String(k),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ie}function _(k,B,E){if(k==null)return k;var j=[],W=0;return D(k,j,"","",function(te){return B.call(E,te,W++)}),j}function Q(k){if(k._status===-1){var B=k._result;B=B(),B.then(function(E){(k._status===0||k._status===-1)&&(k._status=1,k._result=E)},function(E){(k._status===0||k._status===-1)&&(k._status=2,k._result=E)}),k._status===-1&&(k._status=0,k._result=B)}if(k._status===1)return k._result.default;throw k._result}var pe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},fe={map:_,forEach:function(k,B,E){_(k,function(){B.apply(this,arguments)},E)},count:function(k){var B=0;return _(k,function(){B++}),B},toArray:function(k){return _(k,function(B){return B})||[]},only:function(k){if(!ee(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Ke.Activity=w,Ke.Children=fe,Ke.Component=R,Ke.Fragment=c,Ke.Profiler=u,Ke.PureComponent=M,Ke.StrictMode=d,Ke.Suspense=x,Ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,Ke.__COMPILER_RUNTIME={__proto__:null,c:function(k){return Y.H.useMemoCache(k)}},Ke.cache=function(k){return function(){return k.apply(null,arguments)}},Ke.cacheSignal=function(){return null},Ke.cloneElement=function(k,B,E){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var j=T({},k.props),W=k.key;if(B!=null)for(te in B.key!==void 0&&(W=""+B.key),B)!V.call(B,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&B.ref===void 0||(j[te]=B[te]);var te=arguments.length-2;if(te===1)j.children=E;else if(1<te){for(var ie=Array(te),De=0;De<te;De++)ie[De]=arguments[De+2];j.children=ie}return K(k.type,W,j)},Ke.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:p,_context:k},k},Ke.createElement=function(k,B,E){var j,W={},te=null;if(B!=null)for(j in B.key!==void 0&&(te=""+B.key),B)V.call(B,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(W[j]=B[j]);var ie=arguments.length-2;if(ie===1)W.children=E;else if(1<ie){for(var De=Array(ie),ae=0;ae<ie;ae++)De[ae]=arguments[ae+2];W.children=De}if(k&&k.defaultProps)for(j in ie=k.defaultProps,ie)W[j]===void 0&&(W[j]=ie[j]);return K(k,te,W)},Ke.createRef=function(){return{current:null}},Ke.forwardRef=function(k){return{$$typeof:y,render:k}},Ke.isValidElement=ee,Ke.lazy=function(k){return{$$typeof:b,_payload:{_status:-1,_result:k},_init:Q}},Ke.memo=function(k,B){return{$$typeof:v,type:k,compare:B===void 0?null:B}},Ke.startTransition=function(k){var B=Y.T,E={};Y.T=E;try{var j=k(),W=Y.S;W!==null&&W(E,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(I,pe)}catch(te){pe(te)}finally{B!==null&&E.types!==null&&(B.types=E.types),Y.T=B}},Ke.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},Ke.use=function(k){return Y.H.use(k)},Ke.useActionState=function(k,B,E){return Y.H.useActionState(k,B,E)},Ke.useCallback=function(k,B){return Y.H.useCallback(k,B)},Ke.useContext=function(k){return Y.H.useContext(k)},Ke.useDebugValue=function(){},Ke.useDeferredValue=function(k,B){return Y.H.useDeferredValue(k,B)},Ke.useEffect=function(k,B){return Y.H.useEffect(k,B)},Ke.useEffectEvent=function(k){return Y.H.useEffectEvent(k)},Ke.useId=function(){return Y.H.useId()},Ke.useImperativeHandle=function(k,B,E){return Y.H.useImperativeHandle(k,B,E)},Ke.useInsertionEffect=function(k,B){return Y.H.useInsertionEffect(k,B)},Ke.useLayoutEffect=function(k,B){return Y.H.useLayoutEffect(k,B)},Ke.useMemo=function(k,B){return Y.H.useMemo(k,B)},Ke.useOptimistic=function(k,B){return Y.H.useOptimistic(k,B)},Ke.useReducer=function(k,B,E){return Y.H.useReducer(k,B,E)},Ke.useRef=function(k){return Y.H.useRef(k)},Ke.useState=function(k){return Y.H.useState(k)},Ke.useSyncExternalStore=function(k,B,E){return Y.H.useSyncExternalStore(k,B,E)},Ke.useTransition=function(){return Y.H.useTransition()},Ke.version="19.2.4",Ke}var qh;function qd(){return qh||(qh=1,gd.exports=Bv()),gd.exports}var h=qd();const xe=Dv(h);var vd={exports:{}},ws={},bd={exports:{}},kd={};var $h;function Av(){return $h||($h=1,(function(r){function l(D,_){var Q=D.length;D.push(_);e:for(;0<Q;){var pe=Q-1>>>1,fe=D[pe];if(0<u(fe,_))D[pe]=_,D[Q]=fe,Q=pe;else break e}}function c(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var _=D[0],Q=D.pop();if(Q!==_){D[0]=Q;e:for(var pe=0,fe=D.length,k=fe>>>1;pe<k;){var B=2*(pe+1)-1,E=D[B],j=B+1,W=D[j];if(0>u(E,Q))j<fe&&0>u(W,E)?(D[pe]=W,D[j]=Q,pe=j):(D[pe]=E,D[B]=Q,pe=B);else if(j<fe&&0>u(W,Q))D[pe]=W,D[j]=Q,pe=j;else break e}}return _}function u(D,_){var Q=D.sortIndex-_.sortIndex;return Q!==0?Q:D.id-_.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var m=Date,y=m.now();r.unstable_now=function(){return m.now()-y}}var x=[],v=[],b=1,w=null,S=3,F=!1,C=!1,T=!1,N=!1,R=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function $(D){for(var _=c(v);_!==null;){if(_.callback===null)d(v);else if(_.startTime<=D)d(v),_.sortIndex=_.expirationTime,l(x,_);else break;_=c(v)}}function G(D){if(T=!1,$(D),!C)if(c(x)!==null)C=!0,I||(I=!0,ge());else{var _=c(v);_!==null&&se(G,_.startTime-D)}}var I=!1,Y=-1,V=5,K=-1;function he(){return N?!0:!(r.unstable_now()-K<V)}function ee(){if(N=!1,I){var D=r.unstable_now();K=D;var _=!0;try{e:{C=!1,T&&(T=!1,Z(Y),Y=-1),F=!0;var Q=S;try{t:{for($(D),w=c(x);w!==null&&!(w.expirationTime>D&&he());){var pe=w.callback;if(typeof pe=="function"){w.callback=null,S=w.priorityLevel;var fe=pe(w.expirationTime<=D);if(D=r.unstable_now(),typeof fe=="function"){w.callback=fe,$(D),_=!0;break t}w===c(x)&&d(x),$(D)}else d(x);w=c(x)}if(w!==null)_=!0;else{var k=c(v);k!==null&&se(G,k.startTime-D),_=!1}}break e}finally{w=null,S=Q,F=!1}_=void 0}}finally{_?ge():I=!1}}}var ge;if(typeof M=="function")ge=function(){M(ee)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,be=re.port2;re.port1.onmessage=ee,ge=function(){be.postMessage(null)}}else ge=function(){R(ee,0)};function se(D,_){Y=R(function(){D(r.unstable_now())},_)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(D){switch(S){case 1:case 2:case 3:var _=3;break;default:_=S}var Q=S;S=_;try{return D()}finally{S=Q}},r.unstable_requestPaint=function(){N=!0},r.unstable_runWithPriority=function(D,_){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=S;S=D;try{return _()}finally{S=Q}},r.unstable_scheduleCallback=function(D,_,Q){var pe=r.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?pe+Q:pe):Q=pe,D){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Q+fe,D={id:b++,callback:_,priorityLevel:D,startTime:Q,expirationTime:fe,sortIndex:-1},Q>pe?(D.sortIndex=Q,l(v,D),c(x)===null&&D===c(v)&&(T?(Z(Y),Y=-1):T=!0,se(G,Q-pe))):(D.sortIndex=fe,l(x,D),C||F||(C=!0,I||(I=!0,ge()))),D},r.unstable_shouldYield=he,r.unstable_wrapCallback=function(D){var _=S;return function(){var Q=S;S=_;try{return D.apply(this,arguments)}finally{S=Q}}}})(kd)),kd}var Kh;function Ov(){return Kh||(Kh=1,bd.exports=Av()),bd.exports}var yd={exports:{}},dn={};var Xh;function zv(){if(Xh)return dn;Xh=1;var r=qd();function l(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var d={d:{f:c,r:function(){throw Error(l(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function p(x,v,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:x,containerInfo:v,implementation:b}}var m=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,dn.createPortal=function(x,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(l(299));return p(x,v,null,b)},dn.flushSync=function(x){var v=m.T,b=d.p;try{if(m.T=null,d.p=2,x)return x()}finally{m.T=v,d.p=b,d.d.f()}},dn.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(x,v))},dn.prefetchDNS=function(x){typeof x=="string"&&d.d.D(x)},dn.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var b=v.as,w=y(b,v.crossOrigin),S=typeof v.integrity=="string"?v.integrity:void 0,F=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?d.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:F}):b==="script"&&d.d.X(x,{crossOrigin:w,integrity:S,fetchPriority:F,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},dn.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=y(v.as,v.crossOrigin);d.d.M(x,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&d.d.M(x)},dn.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,w=y(b,v.crossOrigin);d.d.L(x,b,{crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},dn.preloadModule=function(x,v){if(typeof x=="string")if(v){var b=y(v.as,v.crossOrigin);d.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else d.d.m(x)},dn.requestFormReset=function(x){d.d.r(x)},dn.unstable_batchedUpdates=function(x,v){return x(v)},dn.useFormState=function(x,v,b){return m.H.useFormState(x,v,b)},dn.useFormStatus=function(){return m.H.useHostTransitionStatus()},dn.version="19.2.4",dn}var Zh;function Bm(){if(Zh)return yd.exports;Zh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),yd.exports=zv(),yd.exports}var Qh;function Ev(){if(Qh)return ws;Qh=1;var r=Ov(),l=qd(),c=Bm();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(d(188))}function v(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,o=t;;){var s=a.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){a=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===a)return x(s),e;if(i===o)return x(s),t;i=i.sibling}throw Error(d(188))}if(a.return!==o.return)a=s,o=i;else{for(var f=!1,g=s.child;g;){if(g===a){f=!0,a=s,o=i;break}if(g===o){f=!0,o=s,a=i;break}g=g.sibling}if(!f){for(g=i.child;g;){if(g===a){f=!0,a=i,o=s;break}if(g===o){f=!0,o=i,a=s;break}g=g.sibling}if(!f)throw Error(d(189))}}if(a.alternate!==o)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,S=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),M=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case R:return"Profiler";case N:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case M:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case V:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var se=Array.isArray,D=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},pe=[],fe=-1;function k(e){return{current:e}}function B(e){0>fe||(e.current=pe[fe],pe[fe]=null,fe--)}function E(e,t){fe++,pe[fe]=e.current,e.current=t}var j=k(null),W=k(null),te=k(null),ie=k(null);function De(e,t){switch(E(te,t),E(W,e),E(j,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ph(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ph(t),e=fh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(j),E(j,e)}function ae(){B(j),B(W),B(te)}function ne(e){e.memoizedState!==null&&E(ie,e);var t=j.current,a=fh(t,e.type);t!==a&&(E(W,e),E(j,a))}function Fe(e){W.current===e&&(B(j),B(W)),ie.current===e&&(B(ie),gs._currentValue=Q)}var we,Te;function ze(e){if(we===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||"",Te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+e+Te}var Oe=!1;function de(e,t){if(!e||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(J){var q=J}Reflect.construct(e,[],me)}else{try{me.call()}catch(J){q=J}e.call(me.prototype)}}else{try{throw Error()}catch(J){q=J}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(J){if(J&&q&&typeof J.stack=="string")return[J.stack,q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=o.DetermineComponentFrameRoot(),f=i[0],g=i[1];if(f&&g){var A=f.split(`
`),H=g.split(`
`);for(s=o=0;o<A.length&&!A[o].includes("DetermineComponentFrameRoot");)o++;for(;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;if(o===A.length||s===H.length)for(o=A.length-1,s=H.length-1;1<=o&&0<=s&&A[o]!==H[s];)s--;for(;1<=o&&0<=s;o--,s--)if(A[o]!==H[s]){if(o!==1||s!==1)do if(o--,s--,0>s||A[o]!==H[s]){var oe=`
`+A[o].replace(" at new "," at ");return e.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",e.displayName)),oe}while(1<=o&&0<=s);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ze(a):""}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return ze(e.type);case 16:return ze("Lazy");case 13:return e.child!==t&&t!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return ze("Activity");default:return""}}function ve(e){try{var t="",a=null;do t+=ke(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var le=Object.prototype.hasOwnProperty,je=r.unstable_scheduleCallback,Pe=r.unstable_cancelCallback,Ze=r.unstable_shouldYield,Ne=r.unstable_requestPaint,Ye=r.unstable_now,Le=r.unstable_getCurrentPriorityLevel,He=r.unstable_ImmediatePriority,qe=r.unstable_UserBlockingPriority,Je=r.unstable_NormalPriority,Ie=r.unstable_LowPriority,$e=r.unstable_IdlePriority,jt=r.log,Jt=r.unstable_setDisableYieldValue,ue=null,ye=null;function Ae(e){if(typeof jt=="function"&&Jt(e),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(ue,e)}catch{}}var Ve=Math.clz32?Math.clz32:et,pt=Math.log,Se=Math.LN2;function et(e){return e>>>=0,e===0?32:31-(pt(e)/Se|0)|0}var it=256,Et=262144,St=4194304;function fn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function en(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var s=0,i=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=o&134217727;return g!==0?(o=g&~i,o!==0?s=fn(o):(f&=g,f!==0?s=fn(f):a||(a=g&~e,a!==0&&(s=fn(a))))):(g=o&~i,g!==0?s=fn(g):f!==0?s=fn(f):a||(a=o&~e,a!==0&&(s=fn(a)))),s===0?0:t!==0&&t!==s&&(t&i)===0&&(i=s&-s,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:s}function aa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jn(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zn(){var e=St;return St<<=1,(St&62914560)===0&&(St=4194304),e}function Uo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Pa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function La(e,t,a,o,s,i){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,A=e.expirationTimes,H=e.hiddenUpdates;for(a=f&~a;0<a;){var oe=31-Ve(a),me=1<<oe;g[oe]=0,A[oe]=-1;var q=H[oe];if(q!==null)for(H[oe]=null,oe=0;oe<q.length;oe++){var J=q[oe];J!==null&&(J.lane&=-536870913)}a&=~me}o!==0&&hn(e,o,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(f&~t))}function hn(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Ve(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ar(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Ve(a),s=1<<o;s&t|e[o]&t&&(e[o]|=t),a&=~s}}function Or(e,t){var a=t&-t;return a=(a&42)!==0?1:Ia(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ia(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rs(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:Mh(e.type))}function vo(e,t){var a=_.p;try{return _.p=e,t()}finally{_.p=a}}var En=Math.random().toString(36).slice(2),It="__reactFiber$"+En,Ft="__reactProps$"+En,P="__reactContainer$"+En,Be="__reactEvents$"+En,Re="__reactListeners$"+En,tt="__reactHandles$"+En,tn="__reactResources$"+En,Kt="__reactMarker$"+En;function cn(e){delete e[It],delete e[Ft],delete e[Be],delete e[Re],delete e[tt]}function mn(e){var t=e[It];if(t)return t;for(var a=e.parentNode;a;){if(t=a[P]||a[It]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=kh(e);e!==null;){if(a=e[It])return a;e=kh(e)}return t}e=a,a=e.parentNode}return null}function Xt(e){if(e=e[It]||e[P]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Rn(e){var t=e[tn];return t||(t=e[tn]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Nt(e){e[Kt]=!0}var oa=new Set,Mn={};function Qn(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(Mn[e]=t,e=0;e<t.length;e++)oa.add(t[e])}var _a=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ho={},Er={};function Ua(e){return le.call(Er,e)?!0:le.call(Ho,e)?!1:_a.test(e)?Er[e]=!0:(Ho[e]=!0,!1)}function Ha(e,t,a){if(Ua(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ms(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function fa(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function au(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bx(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,i=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(f){a=""+f,i.call(this,f)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ci(e){if(!e._valueTracker){var t=au(e)?"checked":"value";e._valueTracker=bx(e,t,""+e[t])}}function ou(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=au(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kx=/[\n"\\]/g;function Ln(e){return e.replace(kx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function di(e,t,a,o,s,i,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pn(t)):e.value!==""+Pn(t)&&(e.value=""+Pn(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?ui(e,f,Pn(t)):a!=null?ui(e,f,Pn(a)):o!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Pn(g):e.removeAttribute("name")}function ru(e,t,a,o,s,i,f,g){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ci(e);return}a=a!=null?""+Pn(a):"",t=t!=null?""+Pn(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}o=o??s,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=g?e.checked:!!o,e.defaultChecked=!!o,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),ci(e)}function ui(e,t,a){t==="number"&&Ps(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Vo(e,t,a,o){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Pn(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function su(e,t,a){if(t!=null&&(t=""+Pn(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Pn(a):""}function lu(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(d(92));if(se(o)){if(1<o.length)throw Error(d(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Pn(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ci(e)}function Go(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var yx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iu(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||yx.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function cu(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var s in t)o=t[s],t.hasOwnProperty(s)&&a[s]!==o&&iu(e,s,o)}else for(var i in t)t.hasOwnProperty(i)&&iu(e,i,t[i])}function pi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ls(e){return jx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ha(){}var fi=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,qo=null;function du(e){var t=Xt(e);if(t&&(e=t.stateNode)){var a=e[Ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(di(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ln(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var s=o[Ft]||null;if(!s)throw Error(d(90));di(o,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&ou(o)}break e;case"textarea":su(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Vo(e,!!a.multiple,t,!1)}}}var mi=!1;function uu(e,t,a){if(mi)return e(t,a);mi=!0;try{var o=e(t);return o}finally{if(mi=!1,(Yo!==null||qo!==null)&&(Cl(),Yo&&(t=Yo,e=qo,qo=Yo=null,du(t),e)))for(t=0;t<e.length;t++)du(e[t])}}function Fr(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Ft]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xi=!1;if(ma)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){xi=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{xi=!1}var Va=null,gi=null,Is=null;function pu(){if(Is)return Is;var e,t=gi,a=t.length,o,s="value"in Va?Va.value:Va.textContent,i=s.length;for(e=0;e<a&&t[e]===s[e];e++);var f=a-e;for(o=1;o<=f&&t[a-o]===s[i-o];o++);return Is=s.slice(e,1<o?1-o:void 0)}function _s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Us(){return!0}function fu(){return!1}function gn(e){function t(a,o,s,i,f){this._reactName=a,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(i):i[g]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Us:fu,this.isPropagationStopped=fu,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),t}var bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=gn(bo),Mr=w({},bo,{view:0,detail:0}),Sx=gn(Mr),vi,bi,Pr,Vs=w({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(vi=e.screenX-Pr.screenX,bi=e.screenY-Pr.screenY):bi=vi=0,Pr=e),vi)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),hu=gn(Vs),Cx=w({},Vs,{dataTransfer:0}),Dx=gn(Cx),Tx=w({},Mr,{relatedTarget:0}),ki=gn(Tx),Nx=w({},bo,{animationName:0,elapsedTime:0,pseudoElement:0}),Bx=gn(Nx),Ax=w({},bo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ox=gn(Ax),zx=w({},bo,{data:0}),mu=gn(zx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rx[e])?!!t[e]:!1}function yi(){return Mx}var Px=w({},Mr,{key:function(e){if(e.key){var t=Ex[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yi,charCode:function(e){return e.type==="keypress"?_s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lx=gn(Px),Ix=w({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=gn(Ix),_x=w({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yi}),Ux=gn(_x),Hx=w({},bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=gn(Hx),Gx=w({},Vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=gn(Gx),qx=w({},bo,{newState:0,oldState:0}),$x=gn(qx),Kx=[9,13,27,32],wi=ma&&"CompositionEvent"in window,Lr=null;ma&&"documentMode"in document&&(Lr=document.documentMode);var Xx=ma&&"TextEvent"in window&&!Lr,gu=ma&&(!wi||Lr&&8<Lr&&11>=Lr),vu=" ",bu=!1;function ku(e,t){switch(e){case"keyup":return Kx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $o=!1;function Zx(e,t){switch(e){case"compositionend":return yu(t);case"keypress":return t.which!==32?null:(bu=!0,vu);case"textInput":return e=t.data,e===vu&&bu?null:e;default:return null}}function Qx(e,t){if($o)return e==="compositionend"||!wi&&ku(e,t)?(e=pu(),Is=gi=Va=null,$o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gu&&t.locale!=="ko"?null:t.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wx[e.type]:t==="textarea"}function ju(e,t,a,o){Yo?qo?qo.push(o):qo=[o]:Yo=o,t=zl(t,"onChange"),0<t.length&&(a=new Hs("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ir=null,_r=null;function Jx(e){sh(e,0)}function Gs(e){var t=Fn(e);if(ou(t))return e}function Su(e,t){if(e==="change")return t}var Cu=!1;if(ma){var ji;if(ma){var Si="oninput"in document;if(!Si){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),Si=typeof Du.oninput=="function"}ji=Si}else ji=!1;Cu=ji&&(!document.documentMode||9<document.documentMode)}function Tu(){Ir&&(Ir.detachEvent("onpropertychange",Nu),_r=Ir=null)}function Nu(e){if(e.propertyName==="value"&&Gs(_r)){var t=[];ju(t,_r,e,hi(e)),uu(Jx,t)}}function eg(e,t,a){e==="focusin"?(Tu(),Ir=t,_r=a,Ir.attachEvent("onpropertychange",Nu)):e==="focusout"&&Tu()}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(_r)}function ng(e,t){if(e==="click")return Gs(t)}function ag(e,t){if(e==="input"||e==="change")return Gs(t)}function og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Sn=typeof Object.is=="function"?Object.is:og;function Ur(e,t){if(Sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var s=a[o];if(!le.call(t,s)||!Sn(e[s],t[s]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var a=Bu(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bu(a)}}function Ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ps(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ps(e.document)}return t}function Ci(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var rg=ma&&"documentMode"in document&&11>=document.documentMode,Ko=null,Di=null,Hr=null,Ti=!1;function Eu(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ti||Ko==null||Ko!==Ps(o)||(o=Ko,"selectionStart"in o&&Ci(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Hr&&Ur(Hr,o)||(Hr=o,o=zl(Di,"onSelect"),0<o.length&&(t=new Hs("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Ko)))}function ko(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Xo={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionrun:ko("Transition","TransitionRun"),transitionstart:ko("Transition","TransitionStart"),transitioncancel:ko("Transition","TransitionCancel"),transitionend:ko("Transition","TransitionEnd")},Ni={},Fu={};ma&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function yo(e){if(Ni[e])return Ni[e];if(!Xo[e])return e;var t=Xo[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Fu)return Ni[e]=t[a];return e}var Ru=yo("animationend"),Mu=yo("animationiteration"),Pu=yo("animationstart"),sg=yo("transitionrun"),lg=yo("transitionstart"),ig=yo("transitioncancel"),Lu=yo("transitionend"),Iu=new Map,Bi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bi.push("scrollEnd");function Wn(e,t){Iu.set(e,t),Qn(t,[e])}var Ys=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},In=[],Zo=0,Ai=0;function qs(){for(var e=Zo,t=Ai=Zo=0;t<e;){var a=In[t];In[t++]=null;var o=In[t];In[t++]=null;var s=In[t];In[t++]=null;var i=In[t];if(In[t++]=null,o!==null&&s!==null){var f=o.pending;f===null?s.next=s:(s.next=f.next,f.next=s),o.pending=s}i!==0&&_u(a,s,i)}}function $s(e,t,a,o){In[Zo++]=e,In[Zo++]=t,In[Zo++]=a,In[Zo++]=o,Ai|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Oi(e,t,a,o){return $s(e,t,a,o),Ks(e)}function wo(e,t){return $s(e,null,null,t),Ks(e)}function _u(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var s=!1,i=e.return;i!==null;)i.childLanes|=a,o=i.alternate,o!==null&&(o.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&t!==null&&(s=31-Ve(a),e=i.hiddenUpdates,o=e[s],o===null?e[s]=[t]:o.push(t),t.lane=a|536870912),i):null}function Ks(e){if(50<ds)throw ds=0,_c=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qo={};function cg(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,t,a,o){return new cg(e,t,a,o)}function zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,t){var a=e.alternate;return a===null?(a=Cn(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Uu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xs(e,t,a,o,s,i){var f=0;if(o=e,typeof e=="function")zi(e)&&(f=1);else if(typeof e=="string")f=hv(e,a,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=Cn(31,a,t,s),e.elementType=K,e.lanes=i,e;case T:return jo(a.children,s,i,t);case N:f=8,s|=24;break;case R:return e=Cn(12,a,t,s|2),e.elementType=R,e.lanes=i,e;case G:return e=Cn(13,a,t,s),e.elementType=G,e.lanes=i,e;case I:return e=Cn(19,a,t,s),e.elementType=I,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:f=10;break e;case Z:f=9;break e;case $:f=11;break e;case Y:f=14;break e;case V:f=16,o=null;break e}f=29,a=Error(d(130,e===null?"null":typeof e,"")),o=null}return t=Cn(f,a,t,s),t.elementType=e,t.type=o,t.lanes=i,t}function jo(e,t,a,o){return e=Cn(7,e,o,t),e.lanes=a,e}function Ei(e,t,a){return e=Cn(6,e,null,t),e.lanes=a,e}function Hu(e){var t=Cn(18,null,null,0);return t.stateNode=e,t}function Fi(e,t,a){return t=Cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vu=new WeakMap;function _n(e,t){if(typeof e=="object"&&e!==null){var a=Vu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ve(t)},Vu.set(e,t),t)}return{value:e,source:t,stack:ve(t)}}var Wo=[],Jo=0,Zs=null,Vr=0,Un=[],Hn=0,Ga=null,ra=1,sa="";function ga(e,t){Wo[Jo++]=Vr,Wo[Jo++]=Zs,Zs=e,Vr=t}function Gu(e,t,a){Un[Hn++]=ra,Un[Hn++]=sa,Un[Hn++]=Ga,Ga=e;var o=ra;e=sa;var s=32-Ve(o)-1;o&=~(1<<s),a+=1;var i=32-Ve(t)+s;if(30<i){var f=s-s%5;i=(o&(1<<f)-1).toString(32),o>>=f,s-=f,ra=1<<32-Ve(t)+s|a<<s|o,sa=i+e}else ra=1<<i|a<<s|o,sa=e}function Ri(e){e.return!==null&&(ga(e,1),Gu(e,1,0))}function Mi(e){for(;e===Zs;)Zs=Wo[--Jo],Wo[Jo]=null,Vr=Wo[--Jo],Wo[Jo]=null;for(;e===Ga;)Ga=Un[--Hn],Un[Hn]=null,sa=Un[--Hn],Un[Hn]=null,ra=Un[--Hn],Un[Hn]=null}function Yu(e,t){Un[Hn++]=ra,Un[Hn++]=sa,Un[Hn++]=Ga,ra=t.id,sa=t.overflow,Ga=e}var nn=null,Bt=null,ct=!1,Ya=null,Vn=!1,Pi=Error(d(519));function qa(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gr(_n(t,e)),Pi}function qu(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[It]=e,t[Ft]=o,a){case"dialog":ot("cancel",t),ot("close",t);break;case"iframe":case"object":case"embed":ot("load",t);break;case"video":case"audio":for(a=0;a<ps.length;a++)ot(ps[a],t);break;case"source":ot("error",t);break;case"img":case"image":case"link":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"input":ot("invalid",t),ru(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ot("invalid",t);break;case"textarea":ot("invalid",t),lu(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||dh(t.textContent,a)?(o.popover!=null&&(ot("beforetoggle",t),ot("toggle",t)),o.onScroll!=null&&ot("scroll",t),o.onScrollEnd!=null&&ot("scrollend",t),o.onClick!=null&&(t.onclick=ha),t=!0):t=!1,t||qa(e,!0)}function $u(e){for(nn=e.return;nn;)switch(nn.tag){case 5:case 31:case 13:Vn=!1;return;case 27:case 3:Vn=!0;return;default:nn=nn.return}}function er(e){if(e!==nn)return!1;if(!ct)return $u(e),ct=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||td(e.type,e.memoizedProps)),a=!a),a&&Bt&&qa(e),$u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Bt=bh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Bt=bh(e)}else t===27?(t=Bt,so(e.type)?(e=sd,sd=null,Bt=e):Bt=t):Bt=nn?Yn(e.stateNode.nextSibling):null;return!0}function So(){Bt=nn=null,ct=!1}function Li(){var e=Ya;return e!==null&&(yn===null?yn=e:yn.push.apply(yn,e),Ya=null),e}function Gr(e){Ya===null?Ya=[e]:Ya.push(e)}var Ii=k(null),Co=null,va=null;function $a(e,t,a){E(Ii,t._currentValue),t._currentValue=a}function ba(e){e._currentValue=Ii.current,B(Ii)}function _i(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Ui(e,t,a,o){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var f=s.child;i=i.firstContext;e:for(;i!==null;){var g=i;i=s;for(var A=0;A<t.length;A++)if(g.context===t[A]){i.lanes|=a,g=i.alternate,g!==null&&(g.lanes|=a),_i(i.return,a,e),o||(f=null);break e}i=g.next}}else if(s.tag===18){if(f=s.return,f===null)throw Error(d(341));f.lanes|=a,i=f.alternate,i!==null&&(i.lanes|=a),_i(f,a,e),f=null}else f=s.child;if(f!==null)f.return=s;else for(f=s;f!==null;){if(f===e){f=null;break}if(s=f.sibling,s!==null){s.return=f.return,f=s;break}f=f.return}s=f}}function tr(e,t,a,o){e=null;for(var s=t,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var f=s.alternate;if(f===null)throw Error(d(387));if(f=f.memoizedProps,f!==null){var g=s.type;Sn(s.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(s===ie.current){if(f=s.alternate,f===null)throw Error(d(387));f.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(gs):e=[gs])}s=s.return}e!==null&&Ui(t,e,a,o),t.flags|=262144}function Qs(e){for(e=e.firstContext;e!==null;){if(!Sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Do(e){Co=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function an(e){return Ku(Co,e)}function Ws(e,t){return Co===null&&Do(e),Ku(e,t)}function Ku(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},va===null){if(e===null)throw Error(d(308));va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else va=va.next=t;return a}var dg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ug=r.unstable_scheduleCallback,pg=r.unstable_NormalPriority,Ht={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hi(){return{controller:new dg,data:new Map,refCount:0}}function Yr(e){e.refCount--,e.refCount===0&&ug(pg,function(){e.controller.abort()})}var qr=null,Vi=0,nr=0,ar=null;function fg(e,t){if(qr===null){var a=qr=[];Vi=0,nr=qc(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vi++,t.then(Xu,Xu),t}function Xu(){if(--Vi===0&&qr!==null){ar!==null&&(ar.status="fulfilled");var e=qr;qr=null,nr=0,ar=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hg(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(o.status="rejected",o.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),o}var Zu=D.S;D.S=function(e,t){Ff=Ye(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&fg(e,t),Zu!==null&&Zu(e,t)};var To=k(null);function Gi(){var e=To.current;return e!==null?e:Ct.pooledCache}function Js(e,t){t===null?E(To,To.current):E(To,t.pool)}function Qu(){var e=Gi();return e===null?null:{parent:Ht._currentValue,pool:e}}var or=Error(d(460)),Yi=Error(d(474)),el=Error(d(542)),tl={then:function(){}};function Wu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ju(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ha,ha),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tp(e),e;default:if(typeof t.status=="string")t.then(ha,ha);else{if(e=Ct,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=o}},function(o){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tp(e),e}throw Bo=t,or}}function No(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Bo=a,or):a}}var Bo=null;function ep(){if(Bo===null)throw Error(d(459));var e=Bo;return Bo=null,e}function tp(e){if(e===or||e===el)throw Error(d(483))}var rr=null,$r=0;function nl(e){var t=$r;return $r+=1,rr===null&&(rr=[]),Ju(rr,e,t)}function Kr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function al(e,t){throw t.$$typeof===S?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function np(e){function t(L,z){if(e){var U=L.deletions;U===null?(L.deletions=[z],L.flags|=16):U.push(z)}}function a(L,z){if(!e)return null;for(;z!==null;)t(L,z),z=z.sibling;return null}function o(L){for(var z=new Map;L!==null;)L.key!==null?z.set(L.key,L):z.set(L.index,L),L=L.sibling;return z}function s(L,z){return L=xa(L,z),L.index=0,L.sibling=null,L}function i(L,z,U){return L.index=U,e?(U=L.alternate,U!==null?(U=U.index,U<z?(L.flags|=67108866,z):U):(L.flags|=67108866,z)):(L.flags|=1048576,z)}function f(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function g(L,z,U,ce){return z===null||z.tag!==6?(z=Ei(U,L.mode,ce),z.return=L,z):(z=s(z,U),z.return=L,z)}function A(L,z,U,ce){var _e=U.type;return _e===T?oe(L,z,U.props.children,ce,U.key):z!==null&&(z.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===V&&No(_e)===z.type)?(z=s(z,U.props),Kr(z,U),z.return=L,z):(z=Xs(U.type,U.key,U.props,null,L.mode,ce),Kr(z,U),z.return=L,z)}function H(L,z,U,ce){return z===null||z.tag!==4||z.stateNode.containerInfo!==U.containerInfo||z.stateNode.implementation!==U.implementation?(z=Fi(U,L.mode,ce),z.return=L,z):(z=s(z,U.children||[]),z.return=L,z)}function oe(L,z,U,ce,_e){return z===null||z.tag!==7?(z=jo(U,L.mode,ce,_e),z.return=L,z):(z=s(z,U),z.return=L,z)}function me(L,z,U){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Ei(""+z,L.mode,U),z.return=L,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case F:return U=Xs(z.type,z.key,z.props,null,L.mode,U),Kr(U,z),U.return=L,U;case C:return z=Fi(z,L.mode,U),z.return=L,z;case V:return z=No(z),me(L,z,U)}if(se(z)||ge(z))return z=jo(z,L.mode,U,null),z.return=L,z;if(typeof z.then=="function")return me(L,nl(z),U);if(z.$$typeof===M)return me(L,Ws(L,z),U);al(L,z)}return null}function q(L,z,U,ce){var _e=z!==null?z.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return _e!==null?null:g(L,z,""+U,ce);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case F:return U.key===_e?A(L,z,U,ce):null;case C:return U.key===_e?H(L,z,U,ce):null;case V:return U=No(U),q(L,z,U,ce)}if(se(U)||ge(U))return _e!==null?null:oe(L,z,U,ce,null);if(typeof U.then=="function")return q(L,z,nl(U),ce);if(U.$$typeof===M)return q(L,z,Ws(L,U),ce);al(L,U)}return null}function J(L,z,U,ce,_e){if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return L=L.get(U)||null,g(z,L,""+ce,_e);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case F:return L=L.get(ce.key===null?U:ce.key)||null,A(z,L,ce,_e);case C:return L=L.get(ce.key===null?U:ce.key)||null,H(z,L,ce,_e);case V:return ce=No(ce),J(L,z,U,ce,_e)}if(se(ce)||ge(ce))return L=L.get(U)||null,oe(z,L,ce,_e,null);if(typeof ce.then=="function")return J(L,z,U,nl(ce),_e);if(ce.$$typeof===M)return J(L,z,U,Ws(z,ce),_e);al(z,ce)}return null}function Ee(L,z,U,ce){for(var _e=null,dt=null,Me=z,We=z=0,lt=null;Me!==null&&We<U.length;We++){Me.index>We?(lt=Me,Me=null):lt=Me.sibling;var ut=q(L,Me,U[We],ce);if(ut===null){Me===null&&(Me=lt);break}e&&Me&&ut.alternate===null&&t(L,Me),z=i(ut,z,We),dt===null?_e=ut:dt.sibling=ut,dt=ut,Me=lt}if(We===U.length)return a(L,Me),ct&&ga(L,We),_e;if(Me===null){for(;We<U.length;We++)Me=me(L,U[We],ce),Me!==null&&(z=i(Me,z,We),dt===null?_e=Me:dt.sibling=Me,dt=Me);return ct&&ga(L,We),_e}for(Me=o(Me);We<U.length;We++)lt=J(Me,L,We,U[We],ce),lt!==null&&(e&&lt.alternate!==null&&Me.delete(lt.key===null?We:lt.key),z=i(lt,z,We),dt===null?_e=lt:dt.sibling=lt,dt=lt);return e&&Me.forEach(function(po){return t(L,po)}),ct&&ga(L,We),_e}function Ge(L,z,U,ce){if(U==null)throw Error(d(151));for(var _e=null,dt=null,Me=z,We=z=0,lt=null,ut=U.next();Me!==null&&!ut.done;We++,ut=U.next()){Me.index>We?(lt=Me,Me=null):lt=Me.sibling;var po=q(L,Me,ut.value,ce);if(po===null){Me===null&&(Me=lt);break}e&&Me&&po.alternate===null&&t(L,Me),z=i(po,z,We),dt===null?_e=po:dt.sibling=po,dt=po,Me=lt}if(ut.done)return a(L,Me),ct&&ga(L,We),_e;if(Me===null){for(;!ut.done;We++,ut=U.next())ut=me(L,ut.value,ce),ut!==null&&(z=i(ut,z,We),dt===null?_e=ut:dt.sibling=ut,dt=ut);return ct&&ga(L,We),_e}for(Me=o(Me);!ut.done;We++,ut=U.next())ut=J(Me,L,We,ut.value,ce),ut!==null&&(e&&ut.alternate!==null&&Me.delete(ut.key===null?We:ut.key),z=i(ut,z,We),dt===null?_e=ut:dt.sibling=ut,dt=ut);return e&&Me.forEach(function(Cv){return t(L,Cv)}),ct&&ga(L,We),_e}function yt(L,z,U,ce){if(typeof U=="object"&&U!==null&&U.type===T&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case F:e:{for(var _e=U.key;z!==null;){if(z.key===_e){if(_e=U.type,_e===T){if(z.tag===7){a(L,z.sibling),ce=s(z,U.props.children),ce.return=L,L=ce;break e}}else if(z.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===V&&No(_e)===z.type){a(L,z.sibling),ce=s(z,U.props),Kr(ce,U),ce.return=L,L=ce;break e}a(L,z);break}else t(L,z);z=z.sibling}U.type===T?(ce=jo(U.props.children,L.mode,ce,U.key),ce.return=L,L=ce):(ce=Xs(U.type,U.key,U.props,null,L.mode,ce),Kr(ce,U),ce.return=L,L=ce)}return f(L);case C:e:{for(_e=U.key;z!==null;){if(z.key===_e)if(z.tag===4&&z.stateNode.containerInfo===U.containerInfo&&z.stateNode.implementation===U.implementation){a(L,z.sibling),ce=s(z,U.children||[]),ce.return=L,L=ce;break e}else{a(L,z);break}else t(L,z);z=z.sibling}ce=Fi(U,L.mode,ce),ce.return=L,L=ce}return f(L);case V:return U=No(U),yt(L,z,U,ce)}if(se(U))return Ee(L,z,U,ce);if(ge(U)){if(_e=ge(U),typeof _e!="function")throw Error(d(150));return U=_e.call(U),Ge(L,z,U,ce)}if(typeof U.then=="function")return yt(L,z,nl(U),ce);if(U.$$typeof===M)return yt(L,z,Ws(L,U),ce);al(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,z!==null&&z.tag===6?(a(L,z.sibling),ce=s(z,U),ce.return=L,L=ce):(a(L,z),ce=Ei(U,L.mode,ce),ce.return=L,L=ce),f(L)):a(L,z)}return function(L,z,U,ce){try{$r=0;var _e=yt(L,z,U,ce);return rr=null,_e}catch(Me){if(Me===or||Me===el)throw Me;var dt=Cn(29,Me,null,L.mode);return dt.lanes=ce,dt.return=L,dt}}}var Ao=np(!0),ap=np(!1),Ka=!1;function qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $i(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ft&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,t=Ks(e),_u(e,null,a),t}return $s(e,o,t,a),Ks(e)}function Xr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Ar(e,a)}}function Ki(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var s=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?s=i=f:i=i.next=f,a=a.next}while(a!==null);i===null?s=i=t:i=i.next=t}else s=i=t;a={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Xi=!1;function Zr(){if(Xi){var e=ar;if(e!==null)throw e}}function Qr(e,t,a,o){Xi=!1;var s=e.updateQueue;Ka=!1;var i=s.firstBaseUpdate,f=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var A=g,H=A.next;A.next=null,f===null?i=H:f.next=H,f=A;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,g=oe.lastBaseUpdate,g!==f&&(g===null?oe.firstBaseUpdate=H:g.next=H,oe.lastBaseUpdate=A))}if(i!==null){var me=s.baseState;f=0,oe=H=A=null,g=i;do{var q=g.lane&-536870913,J=q!==g.lane;if(J?(st&q)===q:(o&q)===q){q!==0&&q===nr&&(Xi=!0),oe!==null&&(oe=oe.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var Ee=e,Ge=g;q=t;var yt=a;switch(Ge.tag){case 1:if(Ee=Ge.payload,typeof Ee=="function"){me=Ee.call(yt,me,q);break e}me=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Ge.payload,q=typeof Ee=="function"?Ee.call(yt,me,q):Ee,q==null)break e;me=w({},me,q);break e;case 2:Ka=!0}}q=g.callback,q!==null&&(e.flags|=64,J&&(e.flags|=8192),J=s.callbacks,J===null?s.callbacks=[q]:J.push(q))}else J={lane:q,tag:g.tag,payload:g.payload,callback:g.callback,next:null},oe===null?(H=oe=J,A=me):oe=oe.next=J,f|=q;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;J=g,g=J.next,J.next=null,s.lastBaseUpdate=J,s.shared.pending=null}}while(!0);oe===null&&(A=me),s.baseState=A,s.firstBaseUpdate=H,s.lastBaseUpdate=oe,i===null&&(s.shared.lanes=0),to|=f,e.lanes=f,e.memoizedState=me}}function op(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function rp(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)op(a[e],t)}var sr=k(null),ol=k(0);function sp(e,t){e=Na,E(ol,e),E(sr,t),Na=e|t.baseLanes}function Zi(){E(ol,Na),E(sr,sr.current)}function Qi(){Na=ol.current,B(sr),B(ol)}var Dn=k(null),Gn=null;function Qa(e){var t=e.alternate;E(_t,_t.current&1),E(Dn,e),Gn===null&&(t===null||sr.current!==null||t.memoizedState!==null)&&(Gn=e)}function Wi(e){E(_t,_t.current),E(Dn,e),Gn===null&&(Gn=e)}function lp(e){e.tag===22?(E(_t,_t.current),E(Dn,e),Gn===null&&(Gn=e)):Wa()}function Wa(){E(_t,_t.current),E(Dn,Dn.current)}function Tn(e){B(Dn),Gn===e&&(Gn=null),B(_t)}var _t=k(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||rd(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ka=0,Qe=null,bt=null,Vt=null,sl=!1,lr=!1,Oo=!1,ll=0,Wr=0,ir=null,mg=0;function Pt(){throw Error(d(321))}function Ji(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Sn(e[a],t[a]))return!1;return!0}function ec(e,t,a,o,s,i){return ka=i,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Gp:mc,Oo=!1,i=a(o,s),Oo=!1,lr&&(i=cp(t,a,o,s)),ip(e),i}function ip(e){D.H=ts;var t=bt!==null&&bt.next!==null;if(ka=0,Vt=bt=Qe=null,sl=!1,Wr=0,ir=null,t)throw Error(d(300));e===null||Gt||(e=e.dependencies,e!==null&&Qs(e)&&(Gt=!0))}function cp(e,t,a,o){Qe=e;var s=0;do{if(lr&&(ir=null),Wr=0,lr=!1,25<=s)throw Error(d(301));if(s+=1,Vt=bt=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Yp,i=t(a,o)}while(lr);return i}function xg(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Jr(t):t,e=e.useState()[0],(bt!==null?bt.memoizedState:null)!==e&&(Qe.flags|=1024),t}function tc(){var e=ll!==0;return ll=0,e}function nc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ac(e){if(sl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}sl=!1}ka=0,Vt=bt=Qe=null,lr=!1,Wr=ll=0,ir=null}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Qe.memoizedState=Vt=e:Vt=Vt.next=e,Vt}function Ut(){if(bt===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=bt.next;var t=Vt===null?Qe.memoizedState:Vt.next;if(t!==null)Vt=t,bt=e;else{if(e===null)throw Qe.alternate===null?Error(d(467)):Error(d(310));bt=e,e={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Vt===null?Qe.memoizedState=Vt=e:Vt=Vt.next=e}return Vt}function il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(e){var t=Wr;return Wr+=1,ir===null&&(ir=[]),e=Ju(ir,e,t),t=Qe,(Vt===null?t.memoizedState:Vt.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Gp:mc),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===M)return an(e)}throw Error(d(438,String(e)))}function oc(e){var t=null,a=Qe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=Qe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=il(),Qe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=he;return t.index++,a}function ya(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=Ut();return rc(t,bt,e)}function rc(e,t,a){var o=e.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=a;var s=e.baseQueue,i=o.pending;if(i!==null){if(s!==null){var f=s.next;s.next=i.next,i.next=f}t.baseQueue=s=i,o.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{t=s.next;var g=f=null,A=null,H=t,oe=!1;do{var me=H.lane&-536870913;if(me!==H.lane?(st&me)===me:(ka&me)===me){var q=H.revertLane;if(q===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),me===nr&&(oe=!0);else if((ka&q)===q){H=H.next,q===nr&&(oe=!0);continue}else me={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},A===null?(g=A=me,f=i):A=A.next=me,Qe.lanes|=q,to|=q;me=H.action,Oo&&a(i,me),i=H.hasEagerState?H.eagerState:a(i,me)}else q={lane:me,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},A===null?(g=A=q,f=i):A=A.next=q,Qe.lanes|=me,to|=me;H=H.next}while(H!==null&&H!==t);if(A===null?f=i:A.next=g,!Sn(i,e.memoizedState)&&(Gt=!0,oe&&(a=ar,a!==null)))throw a;e.memoizedState=i,e.baseState=f,e.baseQueue=A,o.lastRenderedState=i}return s===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sc(e){var t=Ut(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var o=a.dispatch,s=a.pending,i=t.memoizedState;if(s!==null){a.pending=null;var f=s=s.next;do i=e(i,f.action),f=f.next;while(f!==s);Sn(i,t.memoizedState)||(Gt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,o]}function dp(e,t,a){var o=Qe,s=Ut(),i=ct;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=t();var f=!Sn((bt||s).memoizedState,a);if(f&&(s.memoizedState=a,Gt=!0),s=s.queue,cc(fp.bind(null,o,s,e),[e]),s.getSnapshot!==t||f||Vt!==null&&Vt.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},pp.bind(null,o,s,a,t),null),Ct===null)throw Error(d(349));i||(ka&127)!==0||up(o,t,a)}return a}function up(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Qe.updateQueue,t===null?(t=il(),Qe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function pp(e,t,a,o){t.value=a,t.getSnapshot=o,hp(t)&&mp(e)}function fp(e,t,a){return a(function(){hp(t)&&mp(e)})}function hp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Sn(e,a)}catch{return!0}}function mp(e){var t=wo(e,2);t!==null&&wn(t,e,2)}function lc(e){var t=un();if(typeof e=="function"){var a=e;if(e=a(),Oo){Ae(!0);try{a()}finally{Ae(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},t}function xp(e,t,a,o){return e.baseState=a,rc(e,bt,typeof o=="function"?o:ya)}function gg(e,t,a,o,s){if(fl(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){i.listeners.push(f)}};D.T!==null?a(!0):i.isTransition=!1,o(i),a=t.pending,a===null?(i.next=t.pending=i,gp(t,i)):(i.next=a.next,t.pending=a.next=i)}}function gp(e,t){var a=t.action,o=t.payload,s=e.state;if(t.isTransition){var i=D.T,f={};D.T=f;try{var g=a(s,o),A=D.S;A!==null&&A(f,g),vp(e,t,g)}catch(H){ic(e,t,H)}finally{i!==null&&f.types!==null&&(i.types=f.types),D.T=i}}else try{i=a(s,o),vp(e,t,i)}catch(H){ic(e,t,H)}}function vp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bp(e,t,o)},function(o){return ic(e,t,o)}):bp(e,t,a)}function bp(e,t,a){t.status="fulfilled",t.value=a,kp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,gp(e,a)))}function ic(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,kp(t),t=t.next;while(t!==o)}e.action=null}function kp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yp(e,t){return t}function wp(e,t){if(ct){var a=Ct.formState;if(a!==null){e:{var o=Qe;if(ct){if(Bt){t:{for(var s=Bt,i=Vn;s.nodeType!==8;){if(!i){s=null;break t}if(s=Yn(s.nextSibling),s===null){s=null;break t}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){Bt=Yn(s.nextSibling),o=s.data==="F!";break e}}qa(o)}o=!1}o&&(t=a[0])}}return a=un(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yp,lastRenderedState:t},a.queue=o,a=Up.bind(null,Qe,o),o.dispatch=a,o=lc(!1),i=hc.bind(null,Qe,!1,o.queue),o=un(),s={state:t,dispatch:null,action:e,pending:null},o.queue=s,a=gg.bind(null,Qe,s,i,a),s.dispatch=a,o.memoizedState=e,[t,a,!1]}function jp(e){var t=Ut();return Sp(t,bt,e)}function Sp(e,t,a){if(t=rc(e,t,yp)[0],e=dl(ya)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Jr(t)}catch(f){throw f===or?el:f}else o=t;t=Ut();var s=t.queue,i=s.dispatch;return a!==t.memoizedState&&(Qe.flags|=2048,cr(9,{destroy:void 0},vg.bind(null,s,a),null)),[o,i,e]}function vg(e,t){e.action=t}function Cp(e){var t=Ut(),a=bt;if(a!==null)return Sp(t,a,e);Ut(),t=t.memoizedState,a=Ut();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function cr(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=Qe.updateQueue,t===null&&(t=il(),Qe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function Dp(){return Ut().memoizedState}function ul(e,t,a,o){var s=un();Qe.flags|=e,s.memoizedState=cr(1|t,{destroy:void 0},a,o===void 0?null:o)}function pl(e,t,a,o){var s=Ut();o=o===void 0?null:o;var i=s.memoizedState.inst;bt!==null&&o!==null&&Ji(o,bt.memoizedState.deps)?s.memoizedState=cr(t,i,a,o):(Qe.flags|=e,s.memoizedState=cr(1|t,i,a,o))}function Tp(e,t){ul(8390656,8,e,t)}function cc(e,t){pl(2048,8,e,t)}function bg(e){Qe.flags|=4;var t=Qe.updateQueue;if(t===null)t=il(),Qe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Np(e){var t=Ut().memoizedState;return bg({ref:t,nextImpl:e}),function(){if((ft&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Bp(e,t){return pl(4,2,e,t)}function Ap(e,t){return pl(4,4,e,t)}function Op(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zp(e,t,a){a=a!=null?a.concat([e]):null,pl(4,4,Op.bind(null,t,e),a)}function dc(){}function Ep(e,t){var a=Ut();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Ji(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Fp(e,t){var a=Ut();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Ji(t,o[1]))return o[0];if(o=e(),Oo){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[o,t],o}function uc(e,t,a){return a===void 0||(ka&1073741824)!==0&&(st&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Mf(),Qe.lanes|=e,to|=e,a)}function Rp(e,t,a,o){return Sn(a,t)?a:sr.current!==null?(e=uc(e,a,o),Sn(e,t)||(Gt=!0),e):(ka&42)===0||(ka&1073741824)!==0&&(st&261930)===0?(Gt=!0,e.memoizedState=a):(e=Mf(),Qe.lanes|=e,to|=e,t)}function Mp(e,t,a,o,s){var i=_.p;_.p=i!==0&&8>i?i:8;var f=D.T,g={};D.T=g,hc(e,!1,t,a);try{var A=s(),H=D.S;if(H!==null&&H(g,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var oe=hg(A,o);es(e,t,oe,An(e))}else es(e,t,o,An(e))}catch(me){es(e,t,{then:function(){},status:"rejected",reason:me},An())}finally{_.p=i,f!==null&&g.types!==null&&(f.types=g.types),D.T=f}}function kg(){}function pc(e,t,a,o){if(e.tag!==5)throw Error(d(476));var s=Pp(e).queue;Mp(e,s,t,Q,a===null?kg:function(){return Lp(e),a(o)})}function Pp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:Q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lp(e){var t=Pp(e);t.next===null&&(t=e.alternate.memoizedState),es(e,t.next.queue,{},An())}function fc(){return an(gs)}function Ip(){return Ut().memoizedState}function _p(){return Ut().memoizedState}function yg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=An();e=Xa(a);var o=Za(t,e,a);o!==null&&(wn(o,t,a),Xr(o,t,a)),t={cache:Hi()},e.payload=t;return}t=t.return}}function wg(e,t,a){var o=An();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fl(e)?Hp(t,a):(a=Oi(e,t,a,o),a!==null&&(wn(a,e,o),Vp(a,t,o)))}function Up(e,t,a){var o=An();es(e,t,a,o)}function es(e,t,a,o){var s={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(e))Hp(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var f=t.lastRenderedState,g=i(f,a);if(s.hasEagerState=!0,s.eagerState=g,Sn(g,f))return $s(e,t,s,0),Ct===null&&qs(),!1}catch{}if(a=Oi(e,t,s,o),a!==null)return wn(a,e,o),Vp(a,t,o),!0}return!1}function hc(e,t,a,o){if(o={lane:2,revertLane:qc(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(t)throw Error(d(479))}else t=Oi(e,a,o,2),t!==null&&wn(t,e,2)}function fl(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function Hp(e,t){lr=sl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Vp(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Ar(e,a)}}var ts={readContext:an,use:cl,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt,useHostTransitionStatus:Pt,useFormState:Pt,useActionState:Pt,useOptimistic:Pt,useMemoCache:Pt,useCacheRefresh:Pt};ts.useEffectEvent=Pt;var Gp={readContext:an,use:cl,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:Tp,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ul(4194308,4,Op.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ul(4194308,4,e,t)},useInsertionEffect:function(e,t){ul(4,2,e,t)},useMemo:function(e,t){var a=un();t=t===void 0?null:t;var o=e();if(Oo){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=un();if(a!==void 0){var s=a(t);if(Oo){Ae(!0);try{a(t)}finally{Ae(!1)}}}else s=t;return o.memoizedState=o.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},o.queue=e,e=e.dispatch=wg.bind(null,Qe,e),[o.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:function(e){e=lc(e);var t=e.queue,a=Up.bind(null,Qe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:dc,useDeferredValue:function(e,t){var a=un();return uc(a,e,t)},useTransition:function(){var e=lc(!1);return e=Mp.bind(null,Qe,e.queue,!0,!1),un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=Qe,s=un();if(ct){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Ct===null)throw Error(d(349));(st&127)!==0||up(o,t,a)}s.memoizedState=a;var i={value:a,getSnapshot:t};return s.queue=i,Tp(fp.bind(null,o,i,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},pp.bind(null,o,i,a,t),null),a},useId:function(){var e=un(),t=Ct.identifierPrefix;if(ct){var a=sa,o=ra;a=(o&~(1<<32-Ve(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ll++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=mg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fc,useFormState:wp,useActionState:wp,useOptimistic:function(e){var t=un();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=hc.bind(null,Qe,!0,a),a.dispatch=t,[e,t]},useMemoCache:oc,useCacheRefresh:function(){return un().memoizedState=yg.bind(null,Qe)},useEffectEvent:function(e){var t=un(),a={impl:e};return t.memoizedState=a,function(){if((ft&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},mc={readContext:an,use:cl,useCallback:Ep,useContext:an,useEffect:cc,useImperativeHandle:zp,useInsertionEffect:Bp,useLayoutEffect:Ap,useMemo:Fp,useReducer:dl,useRef:Dp,useState:function(){return dl(ya)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Ut();return Rp(a,bt.memoizedState,e,t)},useTransition:function(){var e=dl(ya)[0],t=Ut().memoizedState;return[typeof e=="boolean"?e:Jr(e),t]},useSyncExternalStore:dp,useId:Ip,useHostTransitionStatus:fc,useFormState:jp,useActionState:jp,useOptimistic:function(e,t){var a=Ut();return xp(a,bt,e,t)},useMemoCache:oc,useCacheRefresh:_p};mc.useEffectEvent=Np;var Yp={readContext:an,use:cl,useCallback:Ep,useContext:an,useEffect:cc,useImperativeHandle:zp,useInsertionEffect:Bp,useLayoutEffect:Ap,useMemo:Fp,useReducer:sc,useRef:Dp,useState:function(){return sc(ya)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Ut();return bt===null?uc(a,e,t):Rp(a,bt.memoizedState,e,t)},useTransition:function(){var e=sc(ya)[0],t=Ut().memoizedState;return[typeof e=="boolean"?e:Jr(e),t]},useSyncExternalStore:dp,useId:Ip,useHostTransitionStatus:fc,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,t){var a=Ut();return bt!==null?xp(a,bt,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:oc,useCacheRefresh:_p};Yp.useEffectEvent=Np;function xc(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gc={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=An(),s=Xa(o);s.payload=t,a!=null&&(s.callback=a),t=Za(e,s,o),t!==null&&(wn(t,e,o),Xr(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=An(),s=Xa(o);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=Za(e,s,o),t!==null&&(wn(t,e,o),Xr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=An(),o=Xa(a);o.tag=2,t!=null&&(o.callback=t),t=Za(e,o,a),t!==null&&(wn(t,e,a),Xr(t,e,a))}};function qp(e,t,a,o,s,i,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,f):t.prototype&&t.prototype.isPureReactComponent?!Ur(a,o)||!Ur(s,i):!0}function $p(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function zo(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function Kp(e){Ys(e)}function Xp(e){console.error(e)}function Zp(e){Ys(e)}function hl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Qp(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function vc(e,t,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(e,t)},a}function Wp(e){return e=Xa(e),e.tag=3,e}function Jp(e,t,a,o){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var i=o.value;e.payload=function(){return s(i)},e.callback=function(){Qp(t,a,o)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Qp(t,a,o),typeof s!="function"&&(no===null?no=new Set([this]):no.add(this));var g=o.stack;this.componentDidCatch(o.value,{componentStack:g!==null?g:""})})}function jg(e,t,a,o,s){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&tr(t,a,s,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:return Gn===null?Dl():a.alternate===null&&Lt===0&&(Lt=3),a.flags&=-257,a.flags|=65536,a.lanes=s,o===tl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Vc(e,o,s)),!1;case 22:return a.flags|=65536,o===tl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Vc(e,o,s)),!1}throw Error(d(435,a.tag))}return Vc(e,o,s),Dl(),!1}if(ct)return t=Dn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,o!==Pi&&(e=Error(d(422),{cause:o}),Gr(_n(e,a)))):(o!==Pi&&(t=Error(d(423),{cause:o}),Gr(_n(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,o=_n(o,a),s=vc(e.stateNode,o,s),Ki(e,s),Lt!==4&&(Lt=2)),!1;var i=Error(d(520),{cause:o});if(i=_n(i,a),cs===null?cs=[i]:cs.push(i),Lt!==4&&(Lt=2),t===null)return!0;o=_n(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=vc(a.stateNode,o,e),Ki(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(no===null||!no.has(i))))return a.flags|=65536,s&=-s,a.lanes|=s,s=Wp(s),Jp(s,e,a,o),Ki(a,s),!1}a=a.return}while(a!==null);return!1}var bc=Error(d(461)),Gt=!1;function on(e,t,a,o){t.child=e===null?ap(t,null,a,o):Ao(t,e.child,a,o)}function ef(e,t,a,o,s){a=a.render;var i=t.ref;if("ref"in o){var f={};for(var g in o)g!=="ref"&&(f[g]=o[g])}else f=o;return Do(t),o=ec(e,t,a,f,i,s),g=tc(),e!==null&&!Gt?(nc(e,t,s),wa(e,t,s)):(ct&&g&&Ri(t),t.flags|=1,on(e,t,o,s),t.child)}function tf(e,t,a,o,s){if(e===null){var i=a.type;return typeof i=="function"&&!zi(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,nf(e,t,i,o,s)):(e=Xs(a.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Tc(e,s)){var f=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ur,a(f,o)&&e.ref===t.ref)return wa(e,t,s)}return t.flags|=1,e=xa(i,o),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,a,o,s){if(e!==null){var i=e.memoizedProps;if(Ur(i,o)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=o=i,Tc(e,s))(e.flags&131072)!==0&&(Gt=!0);else return t.lanes=e.lanes,wa(e,t,s)}return kc(e,t,a,o,s)}function af(e,t,a,o){var s=o.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(o=t.child=e.child,s=0;o!==null;)s=s|o.lanes|o.childLanes,o=o.sibling;o=s&~i}else o=0,t.child=null;return of(e,t,i,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Js(t,i!==null?i.cachePool:null),i!==null?sp(t,i):Zi(),lp(t);else return o=t.lanes=536870912,of(e,t,i!==null?i.baseLanes|a:a,a,o)}else i!==null?(Js(t,i.cachePool),sp(t,i),Wa(),t.memoizedState=null):(e!==null&&Js(t,null),Zi(),Wa());return on(e,t,s,a),t.child}function ns(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function of(e,t,a,o,s){var i=Gi();return i=i===null?null:{parent:Ht._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Js(t,null),Zi(),lp(t),e!==null&&tr(e,t,o,!0),t.childLanes=s,null}function ml(e,t){return t=gl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rf(e,t,a){return Ao(t,e.child,null,a),e=ml(t,t.pendingProps),e.flags|=2,Tn(t),t.memoizedState=null,e}function Sg(e,t,a){var o=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ct){if(o.mode==="hidden")return e=ml(t,o),t.lanes=536870912,ns(null,e);if(Wi(t),(e=Bt)?(e=vh(e,Vn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=Hu(e),a.return=t,t.child=a,nn=t,Bt=null)):e=null,e===null)throw qa(t);return t.lanes=536870912,null}return ml(t,o)}var i=e.memoizedState;if(i!==null){var f=i.dehydrated;if(Wi(t),s)if(t.flags&256)t.flags&=-257,t=rf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Gt||tr(e,t,a,!1),s=(a&e.childLanes)!==0,Gt||s){if(o=Ct,o!==null&&(f=Or(o,a),f!==0&&f!==i.retryLane))throw i.retryLane=f,wo(e,f),wn(o,e,f),bc;Dl(),t=rf(e,t,a)}else e=i.treeContext,Bt=Yn(f.nextSibling),nn=t,ct=!0,Ya=null,Vn=!1,e!==null&&Yu(t,e),t=ml(t,o),t.flags|=4096;return t}return e=xa(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function kc(e,t,a,o,s){return Do(t),a=ec(e,t,a,o,void 0,s),o=tc(),e!==null&&!Gt?(nc(e,t,s),wa(e,t,s)):(ct&&o&&Ri(t),t.flags|=1,on(e,t,a,s),t.child)}function sf(e,t,a,o,s,i){return Do(t),t.updateQueue=null,a=cp(t,o,a,s),ip(e),o=tc(),e!==null&&!Gt?(nc(e,t,i),wa(e,t,i)):(ct&&o&&Ri(t),t.flags|=1,on(e,t,a,i),t.child)}function lf(e,t,a,o,s){if(Do(t),t.stateNode===null){var i=Qo,f=a.contextType;typeof f=="object"&&f!==null&&(i=an(f)),i=new a(o,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=o,i.state=t.memoizedState,i.refs={},qi(t),f=a.contextType,i.context=typeof f=="object"&&f!==null?an(f):Qo,i.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(xc(t,a,f,o),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(f=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),f!==i.state&&gc.enqueueReplaceState(i,i.state,null),Qr(t,o,i,s),Zr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){i=t.stateNode;var g=t.memoizedProps,A=zo(a,g);i.props=A;var H=i.context,oe=a.contextType;f=Qo,typeof oe=="object"&&oe!==null&&(f=an(oe));var me=a.getDerivedStateFromProps;oe=typeof me=="function"||typeof i.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,oe||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(g||H!==f)&&$p(t,i,o,f),Ka=!1;var q=t.memoizedState;i.state=q,Qr(t,o,i,s),Zr(),H=t.memoizedState,g||q!==H||Ka?(typeof me=="function"&&(xc(t,a,me,o),H=t.memoizedState),(A=Ka||qp(t,a,A,o,q,H,f))?(oe||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=H),i.props=o,i.state=H,i.context=f,o=A):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,$i(e,t),f=t.memoizedProps,oe=zo(a,f),i.props=oe,me=t.pendingProps,q=i.context,H=a.contextType,A=Qo,typeof H=="object"&&H!==null&&(A=an(H)),g=a.getDerivedStateFromProps,(H=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f!==me||q!==A)&&$p(t,i,o,A),Ka=!1,q=t.memoizedState,i.state=q,Qr(t,o,i,s),Zr();var J=t.memoizedState;f!==me||q!==J||Ka||e!==null&&e.dependencies!==null&&Qs(e.dependencies)?(typeof g=="function"&&(xc(t,a,g,o),J=t.memoizedState),(oe=Ka||qp(t,a,oe,o,q,J,A)||e!==null&&e.dependencies!==null&&Qs(e.dependencies))?(H||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,J,A),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,J,A)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||f===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=J),i.props=o,i.state=J,i.context=A,o=oe):(typeof i.componentDidUpdate!="function"||f===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),o=!1)}return i=o,xl(e,t),o=(t.flags&128)!==0,i||o?(i=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&o?(t.child=Ao(t,e.child,null,s),t.child=Ao(t,null,a,s)):on(e,t,a,s),t.memoizedState=i.state,e=t.child):e=wa(e,t,s),e}function cf(e,t,a,o){return So(),t.flags|=256,on(e,t,a,o),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Qu()}}function jc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Bn),e}function df(e,t,a){var o=t.pendingProps,s=!1,i=(t.flags&128)!==0,f;if((f=i)||(f=e!==null&&e.memoizedState===null?!1:(_t.current&2)!==0),f&&(s=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ct){if(s?Qa(t):Wa(),(e=Bt)?(e=vh(e,Vn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=Hu(e),a.return=t,t.child=a,nn=t,Bt=null)):e=null,e===null)throw qa(t);return rd(e)?t.lanes=32:t.lanes=536870912,null}var g=o.children;return o=o.fallback,s?(Wa(),s=t.mode,g=gl({mode:"hidden",children:g},s),o=jo(o,s,a,null),g.return=t,o.return=t,g.sibling=o,t.child=g,o=t.child,o.memoizedState=wc(a),o.childLanes=jc(e,f,a),t.memoizedState=yc,ns(null,o)):(Qa(t),Sc(t,g))}var A=e.memoizedState;if(A!==null&&(g=A.dehydrated,g!==null)){if(i)t.flags&256?(Qa(t),t.flags&=-257,t=Cc(e,t,a)):t.memoizedState!==null?(Wa(),t.child=e.child,t.flags|=128,t=null):(Wa(),g=o.fallback,s=t.mode,o=gl({mode:"visible",children:o.children},s),g=jo(g,s,a,null),g.flags|=2,o.return=t,g.return=t,o.sibling=g,t.child=o,Ao(t,e.child,null,a),o=t.child,o.memoizedState=wc(a),o.childLanes=jc(e,f,a),t.memoizedState=yc,t=ns(null,o));else if(Qa(t),rd(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var H=f.dgst;f=H,o=Error(d(419)),o.stack="",o.digest=f,Gr({value:o,source:null,stack:null}),t=Cc(e,t,a)}else if(Gt||tr(e,t,a,!1),f=(a&e.childLanes)!==0,Gt||f){if(f=Ct,f!==null&&(o=Or(f,a),o!==0&&o!==A.retryLane))throw A.retryLane=o,wo(e,o),wn(f,e,o),bc;od(g)||Dl(),t=Cc(e,t,a)}else od(g)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Bt=Yn(g.nextSibling),nn=t,ct=!0,Ya=null,Vn=!1,e!==null&&Yu(t,e),t=Sc(t,o.children),t.flags|=4096);return t}return s?(Wa(),g=o.fallback,s=t.mode,A=e.child,H=A.sibling,o=xa(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&65011712,H!==null?g=xa(H,g):(g=jo(g,s,a,null),g.flags|=2),g.return=t,o.return=t,o.sibling=g,t.child=o,ns(null,o),o=t.child,g=e.child.memoizedState,g===null?g=wc(a):(s=g.cachePool,s!==null?(A=Ht._currentValue,s=s.parent!==A?{parent:A,pool:A}:s):s=Qu(),g={baseLanes:g.baseLanes|a,cachePool:s}),o.memoizedState=g,o.childLanes=jc(e,f,a),t.memoizedState=yc,ns(e.child,o)):(Qa(t),a=e.child,e=a.sibling,a=xa(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Sc(e,t){return t=gl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gl(e,t){return e=Cn(22,e,null,t),e.lanes=0,e}function Cc(e,t,a){return Ao(t,e.child,null,a),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),_i(e.return,t,a)}function Dc(e,t,a,o,s,i){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:s,treeForkCount:i}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=s,f.treeForkCount=i)}function pf(e,t,a){var o=t.pendingProps,s=o.revealOrder,i=o.tail;o=o.children;var f=_t.current,g=(f&2)!==0;if(g?(f=f&1|2,t.flags|=128):f&=1,E(_t,f),on(e,t,o,a),o=ct?Vr:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uf(e,a,t);else if(e.tag===19)uf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&rl(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),Dc(t,!1,s,a,i,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&rl(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}Dc(t,!0,a,null,i,o);break;case"together":Dc(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function wa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),to|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(tr(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=xa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=xa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Tc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qs(e)))}function Cg(e,t,a){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),$a(t,Ht,e.memoizedState.cache),So();break;case 27:case 5:ne(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:$a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Wi(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?df(e,t,a):(Qa(t),e=wa(e,t,a),e!==null?e.sibling:null);Qa(t);break;case 19:var s=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(tr(e,t,a,!1),o=(a&t.childLanes)!==0),s){if(o)return pf(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),E(_t,_t.current),o)break;return null;case 22:return t.lanes=0,af(e,t,a,t.pendingProps);case 24:$a(t,Ht,e.memoizedState.cache)}return wa(e,t,a)}function ff(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Gt=!0;else{if(!Tc(e,a)&&(t.flags&128)===0)return Gt=!1,Cg(e,t,a);Gt=(e.flags&131072)!==0}else Gt=!1,ct&&(t.flags&1048576)!==0&&Gu(t,Vr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=No(t.elementType),t.type=e,typeof e=="function")zi(e)?(o=zo(e,o),t.tag=1,t=lf(null,t,e,o,a)):(t.tag=0,t=kc(null,t,e,o,a));else{if(e!=null){var s=e.$$typeof;if(s===$){t.tag=11,t=ef(null,t,e,o,a);break e}else if(s===Y){t.tag=14,t=tf(null,t,e,o,a);break e}}throw t=be(e)||e,Error(d(306,t,""))}}return t;case 0:return kc(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,s=zo(o,t.pendingProps),lf(e,t,o,s,a);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(d(387));o=t.pendingProps;var i=t.memoizedState;s=i.element,$i(e,t),Qr(t,o,null,a);var f=t.memoizedState;if(o=f.cache,$a(t,Ht,o),o!==i.cache&&Ui(t,[Ht],a,!0),Zr(),o=f.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=cf(e,t,o,a);break e}else if(o!==s){s=_n(Error(d(424)),t),Gr(s),t=cf(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Bt=Yn(e.firstChild),nn=t,ct=!0,Ya=null,Vn=!0,a=ap(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(So(),o===s){t=wa(e,t,a);break e}on(e,t,o,a)}t=t.child}return t;case 26:return xl(e,t),e===null?(a=Sh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ct||(a=t.type,e=t.pendingProps,o=El(te.current).createElement(a),o[It]=t,o[Ft]=e,rn(o,a,e),Nt(o),t.stateNode=o):t.memoizedState=Sh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ne(t),e===null&&ct&&(o=t.stateNode=yh(t.type,t.pendingProps,te.current),nn=t,Vn=!0,s=Bt,so(t.type)?(sd=s,Bt=Yn(o.firstChild)):Bt=s),on(e,t,t.pendingProps.children,a),xl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ct&&((s=o=Bt)&&(o=tv(o,t.type,t.pendingProps,Vn),o!==null?(t.stateNode=o,nn=t,Bt=Yn(o.firstChild),Vn=!1,s=!0):s=!1),s||qa(t)),ne(t),s=t.type,i=t.pendingProps,f=e!==null?e.memoizedProps:null,o=i.children,td(s,i)?o=null:f!==null&&td(s,f)&&(t.flags|=32),t.memoizedState!==null&&(s=ec(e,t,xg,null,null,a),gs._currentValue=s),xl(e,t),on(e,t,o,a),t.child;case 6:return e===null&&ct&&((e=a=Bt)&&(a=nv(a,t.pendingProps,Vn),a!==null?(t.stateNode=a,nn=t,Bt=null,e=!0):e=!1),e||qa(t)),null;case 13:return df(e,t,a);case 4:return De(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ao(t,null,o,a):on(e,t,o,a),t.child;case 11:return ef(e,t,t.type,t.pendingProps,a);case 7:return on(e,t,t.pendingProps,a),t.child;case 8:return on(e,t,t.pendingProps.children,a),t.child;case 12:return on(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,$a(t,t.type,o.value),on(e,t,o.children,a),t.child;case 9:return s=t.type._context,o=t.pendingProps.children,Do(t),s=an(s),o=o(s),t.flags|=1,on(e,t,o,a),t.child;case 14:return tf(e,t,t.type,t.pendingProps,a);case 15:return nf(e,t,t.type,t.pendingProps,a);case 19:return pf(e,t,a);case 31:return Sg(e,t,a);case 22:return af(e,t,a,t.pendingProps);case 24:return Do(t),o=an(Ht),e===null?(s=Gi(),s===null&&(s=Ct,i=Hi(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=a),s=i),t.memoizedState={parent:o,cache:s},qi(t),$a(t,Ht,s)):((e.lanes&a)!==0&&($i(e,t),Qr(t,null,null,a),Zr()),s=e.memoizedState,i=t.memoizedState,s.parent!==o?(s={parent:o,cache:o},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),$a(t,Ht,o)):(o=i.cache,$a(t,Ht,o),o!==s.cache&&Ui(t,[Ht],a,!0))),on(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function ja(e){e.flags|=4}function Nc(e,t,a,o,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_f())e.flags|=8192;else throw Bo=tl,Yi}else e.flags&=-16777217}function hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bh(t))if(_f())e.flags|=8192;else throw Bo=tl,Yi}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zn():536870912,e.lanes|=t,fr|=t)}function as(e,t){if(!ct)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function At(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags&65011712,o|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function Dg(e,t,a){var o=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(t),null;case 1:return At(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ba(Ht),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(er(t)?ja(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Li())),At(t),null;case 26:var s=t.type,i=t.memoizedState;return e===null?(ja(t),i!==null?(At(t),hf(t,i)):(At(t),Nc(t,s,null,o,a))):i?i!==e.memoizedState?(ja(t),At(t),hf(t,i)):(At(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&ja(t),At(t),Nc(t,s,e,o,a)),null;case 27:if(Fe(t),a=te.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ja(t);else{if(!o){if(t.stateNode===null)throw Error(d(166));return At(t),null}e=j.current,er(t)?qu(t):(e=yh(s,o,a),t.stateNode=e,ja(t))}return At(t),null;case 5:if(Fe(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ja(t);else{if(!o){if(t.stateNode===null)throw Error(d(166));return At(t),null}if(i=j.current,er(t))qu(t);else{var f=El(te.current);switch(i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof o.is=="string"?f.createElement("select",{is:o.is}):f.createElement("select"),o.multiple?i.multiple=!0:o.size&&(i.size=o.size);break;default:i=typeof o.is=="string"?f.createElement(s,{is:o.is}):f.createElement(s)}}i[It]=t,i[Ft]=o;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=i;e:switch(rn(i,s,o),s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ja(t)}}return At(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&ja(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(d(166));if(e=te.current,er(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,s=nn,s!==null)switch(s.tag){case 27:case 5:o=s.memoizedProps}e[It]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||dh(e.nodeValue,a)),e||qa(t,!0)}else e=El(e).createTextNode(o),e[It]=t,t.stateNode=e}return At(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=er(t),a!==null){if(e===null){if(!o)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[It]=t}else So(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;At(t),e=!1}else a=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Tn(t),t):(Tn(t),null);if((t.flags&128)!==0)throw Error(d(558))}return At(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=er(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(d(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(d(317));s[It]=t}else So(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;At(t),s=!1}else s=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Tn(t),t):(Tn(t),null)}return Tn(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,s=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(s=o.alternate.memoizedState.cachePool.pool),i=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(i=o.memoizedState.cachePool.pool),i!==s&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),vl(t,t.updateQueue),At(t),null);case 4:return ae(),e===null&&Zc(t.stateNode.containerInfo),At(t),null;case 10:return ba(t.type),At(t),null;case 19:if(B(_t),o=t.memoizedState,o===null)return At(t),null;if(s=(t.flags&128)!==0,i=o.rendering,i===null)if(s)as(o,!1);else{if(Lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=rl(e),i!==null){for(t.flags|=128,as(o,!1),e=i.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Uu(a,e),a=a.sibling;return E(_t,_t.current&1|2),ct&&ga(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Ye()>jl&&(t.flags|=128,s=!0,as(o,!1),t.lanes=4194304)}else{if(!s)if(e=rl(i),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),as(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!ct)return At(t),null}else 2*Ye()-o.renderingStartTime>jl&&a!==536870912&&(t.flags|=128,s=!0,as(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(e=o.last,e!==null?e.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ye(),e.sibling=null,a=_t.current,E(_t,s?a&1|2:a&1),ct&&ga(t,o.treeForkCount),e):(At(t),null);case 22:case 23:return Tn(t),Qi(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(At(t),t.subtreeFlags&6&&(t.flags|=8192)):At(t),a=t.updateQueue,a!==null&&vl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&B(To),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ba(Ht),At(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Tg(e,t){switch(Mi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ba(Ht),ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fe(t),null;case 31:if(t.memoizedState!==null){if(Tn(t),t.alternate===null)throw Error(d(340));So()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));So()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(_t),null;case 4:return ae(),null;case 10:return ba(t.type),null;case 22:case 23:return Tn(t),Qi(),e!==null&&B(To),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ba(Ht),null;case 25:return null;default:return null}}function mf(e,t){switch(Mi(t),t.tag){case 3:ba(Ht),ae();break;case 26:case 27:case 5:Fe(t);break;case 4:ae();break;case 31:t.memoizedState!==null&&Tn(t);break;case 13:Tn(t);break;case 19:B(_t);break;case 10:ba(t.type);break;case 22:case 23:Tn(t),Qi(),e!==null&&B(To);break;case 24:ba(Ht)}}function os(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){o=void 0;var i=a.create,f=a.inst;o=i(),f.destroy=o}a=a.next}while(a!==s)}}catch(g){gt(t,t.return,g)}}function Ja(e,t,a){try{var o=t.updateQueue,s=o!==null?o.lastEffect:null;if(s!==null){var i=s.next;o=i;do{if((o.tag&e)===e){var f=o.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,s=t;var A=a,H=g;try{H()}catch(oe){gt(s,A,oe)}}}o=o.next}while(o!==i)}}catch(oe){gt(t,t.return,oe)}}function xf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{rp(t,a)}catch(o){gt(e,e.return,o)}}}function gf(e,t,a){a.props=zo(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){gt(e,t,o)}}function rs(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(s){gt(e,t,s)}}function la(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(s){gt(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){gt(e,t,s)}else a.current=null}function vf(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(s){gt(e,e.return,s)}}function Bc(e,t,a){try{var o=e.stateNode;Xg(o,e.type,a,t),o[Ft]=t}catch(s){gt(e,e.return,s)}}function bf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&so(e.type)||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&so(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ha));else if(o!==4&&(o===27&&so(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Oc(e,t,a),e=e.sibling;e!==null;)Oc(e,t,a),e=e.sibling}function bl(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&so(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,t,a),e=e.sibling;e!==null;)bl(e,t,a),e=e.sibling}function kf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);rn(t,o,a),t[It]=e,t[Ft]=a}catch(i){gt(e,e.return,i)}}var Sa=!1,Yt=!1,zc=!1,yf=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function Ng(e,t){if(e=e.containerInfo,Jc=_l,e=zu(e),Ci(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var f=0,g=-1,A=-1,H=0,oe=0,me=e,q=null;t:for(;;){for(var J;me!==a||s!==0&&me.nodeType!==3||(g=f+s),me!==i||o!==0&&me.nodeType!==3||(A=f+o),me.nodeType===3&&(f+=me.nodeValue.length),(J=me.firstChild)!==null;)q=me,me=J;for(;;){if(me===e)break t;if(q===a&&++H===s&&(g=f),q===i&&++oe===o&&(A=f),(J=me.nextSibling)!==null)break;me=q,q=me.parentNode}me=J}a=g===-1||A===-1?null:{start:g,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(ed={focusedElem:e,selectionRange:a},_l=!1,Qt=t;Qt!==null;)if(t=Qt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qt=e;else for(;Qt!==null;){switch(t=Qt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,s=i.memoizedProps,i=i.memoizedState,o=a.stateNode;try{var Ee=zo(a.type,s);e=o.getSnapshotBeforeUpdate(Ee,i),o.__reactInternalSnapshotBeforeUpdate=e}catch(Ge){gt(a,a.return,Ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ad(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ad(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Qt=e;break}Qt=t.return}}function wf(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Da(e,a),o&4&&os(5,a);break;case 1:if(Da(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){gt(a,a.return,f)}else{var s=zo(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){gt(a,a.return,f)}}o&64&&xf(a),o&512&&rs(a,a.return);break;case 3:if(Da(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{rp(e,t)}catch(f){gt(a,a.return,f)}}break;case 27:t===null&&o&4&&kf(a);case 26:case 5:Da(e,a),t===null&&o&4&&vf(a),o&512&&rs(a,a.return);break;case 12:Da(e,a);break;case 31:Da(e,a),o&4&&Cf(e,a);break;case 13:Da(e,a),o&4&&Df(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Pg.bind(null,a),av(e,a))));break;case 22:if(o=a.memoizedState!==null||Sa,!o){t=t!==null&&t.memoizedState!==null||Yt,s=Sa;var i=Yt;Sa=o,(Yt=t)&&!i?Ta(e,a,(a.subtreeFlags&8772)!==0):Da(e,a),Sa=s,Yt=i}break;case 30:break;default:Da(e,a)}}function jf(e){var t=e.alternate;t!==null&&(e.alternate=null,jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&cn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Rt=null,vn=!1;function Ca(e,t,a){for(a=a.child;a!==null;)Sf(e,t,a),a=a.sibling}function Sf(e,t,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:Yt||la(a,t),Ca(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yt||la(a,t);var o=Rt,s=vn;so(a.type)&&(Rt=a.stateNode,vn=!1),Ca(e,t,a),hs(a.stateNode),Rt=o,vn=s;break;case 5:Yt||la(a,t);case 6:if(o=Rt,s=vn,Rt=null,Ca(e,t,a),Rt=o,vn=s,Rt!==null)if(vn)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(a.stateNode)}catch(i){gt(a,t,i)}else try{Rt.removeChild(a.stateNode)}catch(i){gt(a,t,i)}break;case 18:Rt!==null&&(vn?(e=Rt,xh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):xh(Rt,a.stateNode));break;case 4:o=Rt,s=vn,Rt=a.stateNode.containerInfo,vn=!0,Ca(e,t,a),Rt=o,vn=s;break;case 0:case 11:case 14:case 15:Ja(2,a,t),Yt||Ja(4,a,t),Ca(e,t,a);break;case 1:Yt||(la(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&gf(a,t,o)),Ca(e,t,a);break;case 21:Ca(e,t,a);break;case 22:Yt=(o=Yt)||a.memoizedState!==null,Ca(e,t,a),Yt=o;break;default:Ca(e,t,a)}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){gt(t,t.return,a)}}}function Df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){gt(t,t.return,a)}}function Bg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yf),t;default:throw Error(d(435,e.tag))}}function kl(e,t){var a=Bg(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var s=Lg.bind(null,e,o);o.then(s,s)}})}function bn(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var s=a[o],i=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(so(g.type)){Rt=g.stateNode,vn=!1;break e}break;case 5:Rt=g.stateNode,vn=!1;break e;case 3:case 4:Rt=g.stateNode.containerInfo,vn=!0;break e}g=g.return}if(Rt===null)throw Error(d(160));Sf(i,f,s),Rt=null,vn=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tf(t,e),t=t.sibling}var Jn=null;function Tf(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bn(t,e),kn(e),o&4&&(Ja(3,e,e.return),os(3,e),Ja(5,e,e.return));break;case 1:bn(t,e),kn(e),o&512&&(Yt||a===null||la(a,a.return)),o&64&&Sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var s=Jn;if(bn(t,e),kn(e),o&512&&(Yt||a===null||la(a,a.return)),o&4){var i=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(o){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Kt]||i[It]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(o),s.head.insertBefore(i,s.querySelector("head > title"))),rn(i,o,a),i[It]=e,Nt(i),o=i;break e;case"link":var f=Th("link","href",s).get(o+(a.href||""));if(f){for(var g=0;g<f.length;g++)if(i=f[g],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(g,1);break t}}i=s.createElement(o),rn(i,o,a),s.head.appendChild(i);break;case"meta":if(f=Th("meta","content",s).get(o+(a.content||""))){for(g=0;g<f.length;g++)if(i=f[g],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(g,1);break t}}i=s.createElement(o),rn(i,o,a),s.head.appendChild(i);break;default:throw Error(d(468,o))}i[It]=e,Nt(i),o=i}e.stateNode=o}else Nh(s,e.type,e.stateNode);else e.stateNode=Dh(s,o,e.memoizedProps);else i!==o?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,o===null?Nh(s,e.type,e.stateNode):Dh(s,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Bc(e,e.memoizedProps,a.memoizedProps)}break;case 27:bn(t,e),kn(e),o&512&&(Yt||a===null||la(a,a.return)),a!==null&&o&4&&Bc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(bn(t,e),kn(e),o&512&&(Yt||a===null||la(a,a.return)),e.flags&32){s=e.stateNode;try{Go(s,"")}catch(Ee){gt(e,e.return,Ee)}}o&4&&e.stateNode!=null&&(s=e.memoizedProps,Bc(e,s,a!==null?a.memoizedProps:s)),o&1024&&(zc=!0);break;case 6:if(bn(t,e),kn(e),o&4){if(e.stateNode===null)throw Error(d(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ee){gt(e,e.return,Ee)}}break;case 3:if(Ml=null,s=Jn,Jn=Fl(t.containerInfo),bn(t,e),Jn=s,kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(Ee){gt(e,e.return,Ee)}zc&&(zc=!1,Nf(e));break;case 4:o=Jn,Jn=Fl(e.stateNode.containerInfo),bn(t,e),kn(e),Jn=o;break;case 12:bn(t,e),kn(e);break;case 31:bn(t,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:bn(t,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=Ye()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:s=e.memoizedState!==null;var A=a!==null&&a.memoizedState!==null,H=Sa,oe=Yt;if(Sa=H||s,Yt=oe||A,bn(t,e),Yt=oe,Sa=H,kn(e),o&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||A||Sa||Yt||Eo(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){A=a=t;try{if(i=A.stateNode,s)f=i.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=A.stateNode;var me=A.memoizedProps.style,q=me!=null&&me.hasOwnProperty("display")?me.display:null;g.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(Ee){gt(A,A.return,Ee)}}}else if(t.tag===6){if(a===null){A=t;try{A.stateNode.nodeValue=s?"":A.memoizedProps}catch(Ee){gt(A,A.return,Ee)}}}else if(t.tag===18){if(a===null){A=t;try{var J=A.stateNode;s?gh(J,!0):gh(A.stateNode,!1)}catch(Ee){gt(A,A.return,Ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:bn(t,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:bn(t,e),kn(e)}}function kn(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(bf(o)){a=o;break}o=o.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var s=a.stateNode,i=Ac(e);bl(e,i,s);break;case 5:var f=a.stateNode;a.flags&32&&(Go(f,""),a.flags&=-33);var g=Ac(e);bl(e,g,f);break;case 3:case 4:var A=a.stateNode.containerInfo,H=Ac(e);Oc(e,H,A);break;default:throw Error(d(161))}}catch(oe){gt(e,e.return,oe)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wf(e,t.alternate,t),t=t.sibling}function Eo(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ja(4,t,t.return),Eo(t);break;case 1:la(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&gf(t,t.return,a),Eo(t);break;case 27:hs(t.stateNode);case 26:case 5:la(t,t.return),Eo(t);break;case 22:t.memoizedState===null&&Eo(t);break;case 30:Eo(t);break;default:Eo(t)}e=e.sibling}}function Ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,s=e,i=t,f=i.flags;switch(i.tag){case 0:case 11:case 15:Ta(s,i,a),os(4,i);break;case 1:if(Ta(s,i,a),o=i,s=o.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(H){gt(o,o.return,H)}if(o=i,s=o.updateQueue,s!==null){var g=o.stateNode;try{var A=s.shared.hiddenCallbacks;if(A!==null)for(s.shared.hiddenCallbacks=null,s=0;s<A.length;s++)op(A[s],g)}catch(H){gt(o,o.return,H)}}a&&f&64&&xf(i),rs(i,i.return);break;case 27:kf(i);case 26:case 5:Ta(s,i,a),a&&o===null&&f&4&&vf(i),rs(i,i.return);break;case 12:Ta(s,i,a);break;case 31:Ta(s,i,a),a&&f&4&&Cf(s,i);break;case 13:Ta(s,i,a),a&&f&4&&Df(s,i);break;case 22:i.memoizedState===null&&Ta(s,i,a),rs(i,i.return);break;case 30:break;default:Ta(s,i,a)}t=t.sibling}}function Ec(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yr(a))}function Fc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yr(e))}function ea(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bf(e,t,a,o),t=t.sibling}function Bf(e,t,a,o){var s=t.flags;switch(t.tag){case 0:case 11:case 15:ea(e,t,a,o),s&2048&&os(9,t);break;case 1:ea(e,t,a,o);break;case 3:ea(e,t,a,o),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yr(e)));break;case 12:if(s&2048){ea(e,t,a,o),e=t.stateNode;try{var i=t.memoizedProps,f=i.id,g=i.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){gt(t,t.return,A)}}else ea(e,t,a,o);break;case 31:ea(e,t,a,o);break;case 13:ea(e,t,a,o);break;case 23:break;case 22:i=t.stateNode,f=t.alternate,t.memoizedState!==null?i._visibility&2?ea(e,t,a,o):ss(e,t):i._visibility&2?ea(e,t,a,o):(i._visibility|=2,dr(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Ec(f,t);break;case 24:ea(e,t,a,o),s&2048&&Fc(t.alternate,t);break;default:ea(e,t,a,o)}}function dr(e,t,a,o,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,f=t,g=a,A=o,H=f.flags;switch(f.tag){case 0:case 11:case 15:dr(i,f,g,A,s),os(8,f);break;case 23:break;case 22:var oe=f.stateNode;f.memoizedState!==null?oe._visibility&2?dr(i,f,g,A,s):ss(i,f):(oe._visibility|=2,dr(i,f,g,A,s)),s&&H&2048&&Ec(f.alternate,f);break;case 24:dr(i,f,g,A,s),s&&H&2048&&Fc(f.alternate,f);break;default:dr(i,f,g,A,s)}t=t.sibling}}function ss(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,s=o.flags;switch(o.tag){case 22:ss(a,o),s&2048&&Ec(o.alternate,o);break;case 24:ss(a,o),s&2048&&Fc(o.alternate,o);break;default:ss(a,o)}t=t.sibling}}var ls=8192;function ur(e,t,a){if(e.subtreeFlags&ls)for(e=e.child;e!==null;)Af(e,t,a),e=e.sibling}function Af(e,t,a){switch(e.tag){case 26:ur(e,t,a),e.flags&ls&&e.memoizedState!==null&&mv(a,Jn,e.memoizedState,e.memoizedProps);break;case 5:ur(e,t,a);break;case 3:case 4:var o=Jn;Jn=Fl(e.stateNode.containerInfo),ur(e,t,a),Jn=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ls,ls=16777216,ur(e,t,a),ls=o):ur(e,t,a));break;default:ur(e,t,a)}}function Of(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function is(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Qt=o,Ef(o,e)}Of(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zf(e),e=e.sibling}function zf(e){switch(e.tag){case 0:case 11:case 15:is(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:is(e);break;case 12:is(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yl(e)):is(e);break;default:is(e)}}function yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Qt=o,Ef(o,e)}Of(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ja(8,t,t.return),yl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,yl(t));break;default:yl(t)}e=e.sibling}}function Ef(e,t){for(;Qt!==null;){var a=Qt;switch(a.tag){case 0:case 11:case 15:Ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Qt=o;else e:for(a=e;Qt!==null;){o=Qt;var s=o.sibling,i=o.return;if(jf(o),o===a){Qt=null;break e}if(s!==null){s.return=i,Qt=s;break e}Qt=i}}}var Ag={getCacheForType:function(e){var t=an(Ht),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return an(Ht).controller.signal}},Og=typeof WeakMap=="function"?WeakMap:Map,ft=0,Ct=null,at=null,st=0,xt=0,Nn=null,eo=!1,pr=!1,Rc=!1,Na=0,Lt=0,to=0,Fo=0,Mc=0,Bn=0,fr=0,cs=null,yn=null,Pc=!1,wl=0,Ff=0,jl=1/0,Sl=null,no=null,Zt=0,ao=null,hr=null,Ba=0,Lc=0,Ic=null,Rf=null,ds=0,_c=null;function An(){return(ft&2)!==0&&st!==0?st&-st:D.T!==null?qc():Rs()}function Mf(){if(Bn===0)if((st&536870912)===0||ct){var e=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),Bn=e}else Bn=536870912;return e=Dn.current,e!==null&&(e.flags|=32),Bn}function wn(e,t,a){(e===Ct&&(xt===2||xt===9)||e.cancelPendingCommit!==null)&&(mr(e,0),oo(e,st,Bn,!1)),Pa(e,a),((ft&2)===0||e!==Ct)&&(e===Ct&&((ft&2)===0&&(Fo|=a),Lt===4&&oo(e,st,Bn,!1)),ia(e))}function Pf(e,t,a){if((ft&6)!==0)throw Error(d(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||aa(e,t),s=o?Fg(e,t):Hc(e,t,!0),i=o;do{if(s===0){pr&&!o&&oo(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!zg(a)){s=Hc(e,t,!1),i=!1;continue}if(s===2){if(i=t,e.errorRecoveryDisabledLanes&i)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;s=cs;var A=g.current.memoizedState.isDehydrated;if(A&&(mr(g,f).flags|=256),f=Hc(g,f,!1),f!==2){if(Rc&&!A){g.errorRecoveryDisabledLanes|=i,Fo|=i,s=4;break e}i=yn,yn=s,i!==null&&(yn===null?yn=i:yn.push.apply(yn,i))}s=f}if(i=!1,s!==2)continue}}if(s===1){mr(e,0),oo(e,t,0,!0);break}e:{switch(o=e,i=s,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:oo(o,t,Bn,!eo);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(s=wl+300-Ye(),10<s)){if(oo(o,t,Bn,!eo),en(o,0,!0)!==0)break e;Ba=t,o.timeoutHandle=hh(Lf.bind(null,o,a,yn,Sl,Pc,t,Bn,Fo,fr,eo,i,"Throttled",-0,0),s);break e}Lf(o,a,yn,Sl,Pc,t,Bn,Fo,fr,eo,i,null,-0,0)}}break}while(!0);ia(e)}function Lf(e,t,a,o,s,i,f,g,A,H,oe,me,q,J){if(e.timeoutHandle=-1,me=t.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},Af(t,i,me);var Ee=(i&62914560)===i?wl-Ye():(i&4194048)===i?Ff-Ye():0;if(Ee=xv(me,Ee),Ee!==null){Ba=i,e.cancelPendingCommit=Ee(qf.bind(null,e,t,i,a,o,s,f,g,A,oe,me,null,q,J)),oo(e,i,f,!H);return}}qf(e,t,i,a,o,s,f,g,A)}function zg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var s=a[o],i=s.getSnapshot;s=s.value;try{if(!Sn(i(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oo(e,t,a,o){t&=~Mc,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var s=t;0<s;){var i=31-Ve(s),f=1<<i;o[i]=-1,s&=~f}a!==0&&hn(e,a,t)}function Cl(){return(ft&6)===0?(us(0),!1):!0}function Uc(){if(at!==null){if(xt===0)var e=at.return;else e=at,va=Co=null,ac(e),rr=null,$r=0,e=at;for(;e!==null;)mf(e.alternate,e),e=e.return;at=null}}function mr(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Wg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ba=0,Uc(),Ct=e,at=a=xa(e.current,null),st=t,xt=0,Nn=null,eo=!1,pr=aa(e,t),Rc=!1,fr=Bn=Mc=Fo=to=Lt=0,yn=cs=null,Pc=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var s=31-Ve(o),i=1<<s;t|=e[s],o&=~i}return Na=t,qs(),a}function If(e,t){Qe=null,D.H=ts,t===or||t===el?(t=ep(),xt=3):t===Yi?(t=ep(),xt=4):xt=t===bc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nn=t,at===null&&(Lt=1,hl(e,_n(t,e.current)))}function _f(){var e=Dn.current;return e===null?!0:(st&4194048)===st?Gn===null:(st&62914560)===st||(st&536870912)!==0?e===Gn:!1}function Uf(){var e=D.H;return D.H=ts,e===null?ts:e}function Hf(){var e=D.A;return D.A=Ag,e}function Dl(){Lt=4,eo||(st&4194048)!==st&&Dn.current!==null||(pr=!0),(to&134217727)===0&&(Fo&134217727)===0||Ct===null||oo(Ct,st,Bn,!1)}function Hc(e,t,a){var o=ft;ft|=2;var s=Uf(),i=Hf();(Ct!==e||st!==t)&&(Sl=null,mr(e,t)),t=!1;var f=Lt;e:do try{if(xt!==0&&at!==null){var g=at,A=Nn;switch(xt){case 8:Uc(),f=6;break e;case 3:case 2:case 9:case 6:Dn.current===null&&(t=!0);var H=xt;if(xt=0,Nn=null,xr(e,g,A,H),a&&pr){f=0;break e}break;default:H=xt,xt=0,Nn=null,xr(e,g,A,H)}}Eg(),f=Lt;break}catch(oe){If(e,oe)}while(!0);return t&&e.shellSuspendCounter++,va=Co=null,ft=o,D.H=s,D.A=i,at===null&&(Ct=null,st=0,qs()),f}function Eg(){for(;at!==null;)Vf(at)}function Fg(e,t){var a=ft;ft|=2;var o=Uf(),s=Hf();Ct!==e||st!==t?(Sl=null,jl=Ye()+500,mr(e,t)):pr=aa(e,t);e:do try{if(xt!==0&&at!==null){t=at;var i=Nn;t:switch(xt){case 1:xt=0,Nn=null,xr(e,t,i,1);break;case 2:case 9:if(Wu(i)){xt=0,Nn=null,Gf(t);break}t=function(){xt!==2&&xt!==9||Ct!==e||(xt=7),ia(e)},i.then(t,t);break e;case 3:xt=7;break e;case 4:xt=5;break e;case 7:Wu(i)?(xt=0,Nn=null,Gf(t)):(xt=0,Nn=null,xr(e,t,i,7));break;case 5:var f=null;switch(at.tag){case 26:f=at.memoizedState;case 5:case 27:var g=at;if(f?Bh(f):g.stateNode.complete){xt=0,Nn=null;var A=g.sibling;if(A!==null)at=A;else{var H=g.return;H!==null?(at=H,Tl(H)):at=null}break t}}xt=0,Nn=null,xr(e,t,i,5);break;case 6:xt=0,Nn=null,xr(e,t,i,6);break;case 8:Uc(),Lt=6;break e;default:throw Error(d(462))}}Rg();break}catch(oe){If(e,oe)}while(!0);return va=Co=null,D.H=o,D.A=s,ft=a,at!==null?0:(Ct=null,st=0,qs(),Lt)}function Rg(){for(;at!==null&&!Ze();)Vf(at)}function Vf(e){var t=ff(e.alternate,e,Na);e.memoizedProps=e.pendingProps,t===null?Tl(e):at=t}function Gf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=sf(a,t,t.pendingProps,t.type,void 0,st);break;case 11:t=sf(a,t,t.pendingProps,t.type.render,t.ref,st);break;case 5:ac(t);default:mf(a,t),t=at=Uu(t,Na),t=ff(a,t,Na)}e.memoizedProps=e.pendingProps,t===null?Tl(e):at=t}function xr(e,t,a,o){va=Co=null,ac(t),rr=null,$r=0;var s=t.return;try{if(jg(e,s,t,a,st)){Lt=1,hl(e,_n(a,e.current)),at=null;return}}catch(i){if(s!==null)throw at=s,i;Lt=1,hl(e,_n(a,e.current)),at=null;return}t.flags&32768?(ct||o===1?e=!0:pr||(st&536870912)!==0?e=!1:(eo=e=!0,(o===2||o===9||o===3||o===6)&&(o=Dn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Yf(t,e)):Tl(t)}function Tl(e){var t=e;do{if((t.flags&32768)!==0){Yf(t,eo);return}e=t.return;var a=Dg(t.alternate,t,Na);if(a!==null){at=a;return}if(t=t.sibling,t!==null){at=t;return}at=t=e}while(t!==null);Lt===0&&(Lt=5)}function Yf(e,t){do{var a=Tg(e.alternate,e);if(a!==null){a.flags&=32767,at=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){at=e;return}at=e=a}while(e!==null);Lt=6,at=null}function qf(e,t,a,o,s,i,f,g,A){e.cancelPendingCommit=null;do Nl();while(Zt!==0);if((ft&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=Ai,La(e,a,i,f,g,A),e===Ct&&(at=Ct=null,st=0),hr=t,ao=e,Ba=a,Lc=i,Ic=s,Rf=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ig(Je,function(){return Qf(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,s=_.p,_.p=2,f=ft,ft|=4;try{Ng(e,t,a)}finally{ft=f,_.p=s,D.T=o}}Zt=1,$f(),Kf(),Xf()}}function $f(){if(Zt===1){Zt=0;var e=ao,t=hr,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=_.p;_.p=2;var s=ft;ft|=4;try{Tf(t,e);var i=ed,f=zu(e.containerInfo),g=i.focusedElem,A=i.selectionRange;if(f!==g&&g&&g.ownerDocument&&Ou(g.ownerDocument.documentElement,g)){if(A!==null&&Ci(g)){var H=A.start,oe=A.end;if(oe===void 0&&(oe=H),"selectionStart"in g)g.selectionStart=H,g.selectionEnd=Math.min(oe,g.value.length);else{var me=g.ownerDocument||document,q=me&&me.defaultView||window;if(q.getSelection){var J=q.getSelection(),Ee=g.textContent.length,Ge=Math.min(A.start,Ee),yt=A.end===void 0?Ge:Math.min(A.end,Ee);!J.extend&&Ge>yt&&(f=yt,yt=Ge,Ge=f);var L=Au(g,Ge),z=Au(g,yt);if(L&&z&&(J.rangeCount!==1||J.anchorNode!==L.node||J.anchorOffset!==L.offset||J.focusNode!==z.node||J.focusOffset!==z.offset)){var U=me.createRange();U.setStart(L.node,L.offset),J.removeAllRanges(),Ge>yt?(J.addRange(U),J.extend(z.node,z.offset)):(U.setEnd(z.node,z.offset),J.addRange(U))}}}}for(me=[],J=g;J=J.parentNode;)J.nodeType===1&&me.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<me.length;g++){var ce=me[g];ce.element.scrollLeft=ce.left,ce.element.scrollTop=ce.top}}_l=!!Jc,ed=Jc=null}finally{ft=s,_.p=o,D.T=a}}e.current=t,Zt=2}}function Kf(){if(Zt===2){Zt=0;var e=ao,t=hr,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=_.p;_.p=2;var s=ft;ft|=4;try{wf(e,t.alternate,t)}finally{ft=s,_.p=o,D.T=a}}Zt=3}}function Xf(){if(Zt===4||Zt===3){Zt=0,Ne();var e=ao,t=hr,a=Ba,o=Rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Zt=5:(Zt=0,hr=ao=null,Zf(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(no=null),zr(a),t=t.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(ue,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=D.T,s=_.p,_.p=2,D.T=null;try{for(var i=e.onRecoverableError,f=0;f<o.length;f++){var g=o[f];i(g.value,{componentStack:g.stack})}}finally{D.T=t,_.p=s}}(Ba&3)!==0&&Nl(),ia(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===_c?ds++:(ds=0,_c=e):ds=0,us(0)}}function Zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yr(t)))}function Nl(){return $f(),Kf(),Xf(),Qf()}function Qf(){if(Zt!==5)return!1;var e=ao,t=Lc;Lc=0;var a=zr(Ba),o=D.T,s=_.p;try{_.p=32>a?32:a,D.T=null,a=Ic,Ic=null;var i=ao,f=Ba;if(Zt=0,hr=ao=null,Ba=0,(ft&6)!==0)throw Error(d(331));var g=ft;if(ft|=4,zf(i.current),Bf(i,i.current,f,a),ft=g,us(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(ue,i)}catch{}return!0}finally{_.p=s,D.T=o,Zf(e,t)}}function Wf(e,t,a){t=_n(a,t),t=vc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(Pa(e,2),ia(e))}function gt(e,t,a){if(e.tag===3)Wf(e,e,a);else for(;t!==null;){if(t.tag===3){Wf(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(no===null||!no.has(o))){e=_n(a,e),a=Wp(2),o=Za(t,a,2),o!==null&&(Jp(a,o,t,e),Pa(o,2),ia(o));break}}t=t.return}}function Vc(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Og;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(a)||(Rc=!0,s.add(a),e=Mg.bind(null,e,t,a),t.then(e,e))}function Mg(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ct===e&&(st&a)===a&&(Lt===4||Lt===3&&(st&62914560)===st&&300>Ye()-wl?(ft&2)===0&&mr(e,0):Mc|=a,fr===st&&(fr=0)),ia(e)}function Jf(e,t){t===0&&(t=zn()),e=wo(e,t),e!==null&&(Pa(e,t),ia(e))}function Pg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Jf(e,a)}function Lg(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(d(314))}o!==null&&o.delete(t),Jf(e,a)}function Ig(e,t){return je(e,t)}var Bl=null,gr=null,Gc=!1,Al=!1,Yc=!1,ro=0;function ia(e){e!==gr&&e.next===null&&(gr===null?Bl=gr=e:gr=gr.next=e),Al=!0,Gc||(Gc=!0,Ug())}function us(e,t){if(!Yc&&Al){Yc=!0;do for(var a=!1,o=Bl;o!==null;){if(e!==0){var s=o.pendingLanes;if(s===0)var i=0;else{var f=o.suspendedLanes,g=o.pingedLanes;i=(1<<31-Ve(42|e)+1)-1,i&=s&~(f&~g),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,ah(o,i))}else i=st,i=en(o,o===Ct?i:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(i&3)===0||aa(o,i)||(a=!0,ah(o,i));o=o.next}while(a);Yc=!1}}function _g(){eh()}function eh(){Al=Gc=!1;var e=0;ro!==0&&Qg()&&(e=ro);for(var t=Ye(),a=null,o=Bl;o!==null;){var s=o.next,i=th(o,t);i===0?(o.next=null,a===null?Bl=s:a.next=s,s===null&&(gr=a)):(a=o,(e!==0||(i&3)!==0)&&(Al=!0)),o=s}Zt!==0&&Zt!==5||us(e),ro!==0&&(ro=0)}function th(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var f=31-Ve(i),g=1<<f,A=s[f];A===-1?((g&a)===0||(g&o)!==0)&&(s[f]=jn(g,t)):A<=t&&(e.expiredLanes|=g),i&=~g}if(t=Ct,a=st,a=en(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(xt===2||xt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Pe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||aa(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Pe(o),zr(a)){case 2:case 8:a=qe;break;case 32:a=Je;break;case 268435456:a=$e;break;default:a=Je}return o=nh.bind(null,e),a=je(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Pe(o),e.callbackPriority=2,e.callbackNode=null,2}function nh(e,t){if(Zt!==0&&Zt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nl()&&e.callbackNode!==a)return null;var o=st;return o=en(e,e===Ct?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Pf(e,o,t),th(e,Ye()),e.callbackNode!=null&&e.callbackNode===a?nh.bind(null,e):null)}function ah(e,t){if(Nl())return null;Pf(e,t,!0)}function Ug(){Jg(function(){(ft&6)!==0?je(He,_g):eh()})}function qc(){if(ro===0){var e=nr;e===0&&(e=it,it<<=1,(it&261888)===0&&(it=256)),ro=e}return ro}function oh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ls(""+e)}function rh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Hg(e,t,a,o,s){if(t==="submit"&&a&&a.stateNode===s){var i=oh((s[Ft]||null).action),f=o.submitter;f&&(t=(t=f[Ft]||null)?oh(t.formAction):f.getAttribute("formAction"),t!==null&&(i=t,f=null));var g=new Hs("action","action",null,o,s);e.push({event:g,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ro!==0){var A=f?rh(s,f):new FormData(s);pc(a,{pending:!0,data:A,method:s.method,action:i},null,A)}}else typeof i=="function"&&(g.preventDefault(),A=f?rh(s,f):new FormData(s),pc(a,{pending:!0,data:A,method:s.method,action:i},i,A))},currentTarget:s}]})}}for(var $c=0;$c<Bi.length;$c++){var Kc=Bi[$c],Vg=Kc.toLowerCase(),Gg=Kc[0].toUpperCase()+Kc.slice(1);Wn(Vg,"on"+Gg)}Wn(Ru,"onAnimationEnd"),Wn(Mu,"onAnimationIteration"),Wn(Pu,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(sg,"onTransitionRun"),Wn(lg,"onTransitionStart"),Wn(ig,"onTransitionCancel"),Wn(Lu,"onTransitionEnd"),xn("onMouseEnter",["mouseout","mouseover"]),xn("onMouseLeave",["mouseout","mouseover"]),xn("onPointerEnter",["pointerout","pointerover"]),xn("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ps));function sh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],s=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var f=o.length-1;0<=f;f--){var g=o[f],A=g.instance,H=g.currentTarget;if(g=g.listener,A!==i&&s.isPropagationStopped())break e;i=g,s.currentTarget=H;try{i(s)}catch(oe){Ys(oe)}s.currentTarget=null,i=A}else for(f=0;f<o.length;f++){if(g=o[f],A=g.instance,H=g.currentTarget,g=g.listener,A!==i&&s.isPropagationStopped())break e;i=g,s.currentTarget=H;try{i(s)}catch(oe){Ys(oe)}s.currentTarget=null,i=A}}}}function ot(e,t){var a=t[Be];a===void 0&&(a=t[Be]=new Set);var o=e+"__bubble";a.has(o)||(lh(t,e,2,!1),a.add(o))}function Xc(e,t,a){var o=0;t&&(o|=4),lh(a,e,o,t)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Zc(e){if(!e[Ol]){e[Ol]=!0,oa.forEach(function(a){a!=="selectionchange"&&(Yg.has(a)||Xc(a,!1,e),Xc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ol]||(t[Ol]=!0,Xc("selectionchange",!1,t))}}function lh(e,t,a,o){switch(Mh(t)){case 2:var s=bv;break;case 8:s=kv;break;default:s=ud}a=s.bind(null,t,a,e),s=void 0,!xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Qc(e,t,a,o,s){var i=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var g=o.stateNode.containerInfo;if(g===s)break;if(f===4)for(f=o.return;f!==null;){var A=f.tag;if((A===3||A===4)&&f.stateNode.containerInfo===s)return;f=f.return}for(;g!==null;){if(f=mn(g),f===null)return;if(A=f.tag,A===5||A===6||A===26||A===27){o=i=f;continue e}g=g.parentNode}}o=o.return}uu(function(){var H=i,oe=hi(a),me=[];e:{var q=Iu.get(e);if(q!==void 0){var J=Hs,Ee=e;switch(e){case"keypress":if(_s(a)===0)break e;case"keydown":case"keyup":J=Lx;break;case"focusin":Ee="focus",J=ki;break;case"focusout":Ee="blur",J=ki;break;case"beforeblur":case"afterblur":J=ki;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Ux;break;case Ru:case Mu:case Pu:J=Bx;break;case Lu:J=Vx;break;case"scroll":case"scrollend":J=Sx;break;case"wheel":J=Yx;break;case"copy":case"cut":case"paste":J=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=xu;break;case"toggle":case"beforetoggle":J=$x}var Ge=(t&4)!==0,yt=!Ge&&(e==="scroll"||e==="scrollend"),L=Ge?q!==null?q+"Capture":null:q;Ge=[];for(var z=H,U;z!==null;){var ce=z;if(U=ce.stateNode,ce=ce.tag,ce!==5&&ce!==26&&ce!==27||U===null||L===null||(ce=Fr(z,L),ce!=null&&Ge.push(fs(z,ce,U))),yt)break;z=z.return}0<Ge.length&&(q=new J(q,Ee,null,a,oe),me.push({event:q,listeners:Ge}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",q&&a!==fi&&(Ee=a.relatedTarget||a.fromElement)&&(mn(Ee)||Ee[P]))break e;if((J||q)&&(q=oe.window===oe?oe:(q=oe.ownerDocument)?q.defaultView||q.parentWindow:window,J?(Ee=a.relatedTarget||a.toElement,J=H,Ee=Ee?mn(Ee):null,Ee!==null&&(yt=p(Ee),Ge=Ee.tag,Ee!==yt||Ge!==5&&Ge!==27&&Ge!==6)&&(Ee=null)):(J=null,Ee=H),J!==Ee)){if(Ge=hu,ce="onMouseLeave",L="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(Ge=xu,ce="onPointerLeave",L="onPointerEnter",z="pointer"),yt=J==null?q:Fn(J),U=Ee==null?q:Fn(Ee),q=new Ge(ce,z+"leave",J,a,oe),q.target=yt,q.relatedTarget=U,ce=null,mn(oe)===H&&(Ge=new Ge(L,z+"enter",Ee,a,oe),Ge.target=U,Ge.relatedTarget=yt,ce=Ge),yt=ce,J&&Ee)t:{for(Ge=qg,L=J,z=Ee,U=0,ce=L;ce;ce=Ge(ce))U++;ce=0;for(var _e=z;_e;_e=Ge(_e))ce++;for(;0<U-ce;)L=Ge(L),U--;for(;0<ce-U;)z=Ge(z),ce--;for(;U--;){if(L===z||z!==null&&L===z.alternate){Ge=L;break t}L=Ge(L),z=Ge(z)}Ge=null}else Ge=null;J!==null&&ih(me,q,J,Ge,!1),Ee!==null&&yt!==null&&ih(me,yt,Ee,Ge,!0)}}e:{if(q=H?Fn(H):window,J=q.nodeName&&q.nodeName.toLowerCase(),J==="select"||J==="input"&&q.type==="file")var dt=Su;else if(wu(q))if(Cu)dt=ag;else{dt=tg;var Me=eg}else J=q.nodeName,!J||J.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?H&&pi(H.elementType)&&(dt=Su):dt=ng;if(dt&&(dt=dt(e,H))){ju(me,dt,a,oe);break e}Me&&Me(e,q,H),e==="focusout"&&H&&q.type==="number"&&H.memoizedProps.value!=null&&ui(q,"number",q.value)}switch(Me=H?Fn(H):window,e){case"focusin":(wu(Me)||Me.contentEditable==="true")&&(Ko=Me,Di=H,Hr=null);break;case"focusout":Hr=Di=Ko=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,Eu(me,a,oe);break;case"selectionchange":if(rg)break;case"keydown":case"keyup":Eu(me,a,oe)}var We;if(wi)e:{switch(e){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else $o?ku(e,a)&&(lt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(gu&&a.locale!=="ko"&&($o||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&$o&&(We=pu()):(Va=oe,gi="value"in Va?Va.value:Va.textContent,$o=!0)),Me=zl(H,lt),0<Me.length&&(lt=new mu(lt,e,null,a,oe),me.push({event:lt,listeners:Me}),We?lt.data=We:(We=yu(a),We!==null&&(lt.data=We)))),(We=Xx?Zx(e,a):Qx(e,a))&&(lt=zl(H,"onBeforeInput"),0<lt.length&&(Me=new mu("onBeforeInput","beforeinput",null,a,oe),me.push({event:Me,listeners:lt}),Me.data=We)),Hg(me,e,H,a,oe)}sh(me,t)})}function fs(e,t,a){return{instance:e,listener:t,currentTarget:a}}function zl(e,t){for(var a=t+"Capture",o=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=Fr(e,a),s!=null&&o.unshift(fs(e,s,i)),s=Fr(e,t),s!=null&&o.push(fs(e,s,i))),e.tag===3)return o;e=e.return}return[]}function qg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ih(e,t,a,o,s){for(var i=t._reactName,f=[];a!==null&&a!==o;){var g=a,A=g.alternate,H=g.stateNode;if(g=g.tag,A!==null&&A===o)break;g!==5&&g!==26&&g!==27||H===null||(A=H,s?(H=Fr(a,i),H!=null&&f.unshift(fs(a,H,A))):s||(H=Fr(a,i),H!=null&&f.push(fs(a,H,A)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var $g=/\r\n?/g,Kg=/\u0000|\uFFFD/g;function ch(e){return(typeof e=="string"?e:""+e).replace($g,`
`).replace(Kg,"")}function dh(e,t){return t=ch(t),ch(e)===t}function kt(e,t,a,o,s,i){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Go(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Go(e,""+o);break;case"className":Ms(e,"class",o);break;case"tabIndex":Ms(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ms(e,a,o);break;case"style":cu(e,o,i);break;case"data":if(t!=="object"){Ms(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ls(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&kt(e,t,"name",s.name,s,null),kt(e,t,"formEncType",s.formEncType,s,null),kt(e,t,"formMethod",s.formMethod,s,null),kt(e,t,"formTarget",s.formTarget,s,null)):(kt(e,t,"encType",s.encType,s,null),kt(e,t,"method",s.method,s,null),kt(e,t,"target",s.target,s,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ls(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ha);break;case"onScroll":o!=null&&ot("scroll",e);break;case"onScrollEnd":o!=null&&ot("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(d(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ls(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ot("beforetoggle",e),ot("toggle",e),Ha(e,"popover",o);break;case"xlinkActuate":fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":fa(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":fa(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":fa(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":fa(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ha(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wx.get(a)||a,Ha(e,a,o))}}function Wc(e,t,a,o,s,i){switch(a){case"style":cu(e,o,i);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(d(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Go(e,o):(typeof o=="number"||typeof o=="bigint")&&Go(e,""+o);break;case"onScroll":o!=null&&ot("scroll",e);break;case"onScrollEnd":o!=null&&ot("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),i=e[Ft]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,s),typeof o=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,s);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ha(e,a,o)}}}function rn(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",e),ot("load",e);var o=!1,s=!1,i;for(i in a)if(a.hasOwnProperty(i)){var f=a[i];if(f!=null)switch(i){case"src":o=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:kt(e,t,i,f,a,null)}}s&&kt(e,t,"srcSet",a.srcSet,a,null),o&&kt(e,t,"src",a.src,a,null);return;case"input":ot("invalid",e);var g=i=f=s=null,A=null,H=null;for(o in a)if(a.hasOwnProperty(o)){var oe=a[o];if(oe!=null)switch(o){case"name":s=oe;break;case"type":f=oe;break;case"checked":A=oe;break;case"defaultChecked":H=oe;break;case"value":i=oe;break;case"defaultValue":g=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(d(137,t));break;default:kt(e,t,o,oe,a,null)}}ru(e,i,g,A,H,f,s,!1);return;case"select":ot("invalid",e),o=f=i=null;for(s in a)if(a.hasOwnProperty(s)&&(g=a[s],g!=null))switch(s){case"value":i=g;break;case"defaultValue":f=g;break;case"multiple":o=g;default:kt(e,t,s,g,a,null)}t=i,a=f,e.multiple=!!o,t!=null?Vo(e,!!o,t,!1):a!=null&&Vo(e,!!o,a,!0);return;case"textarea":ot("invalid",e),i=s=o=null;for(f in a)if(a.hasOwnProperty(f)&&(g=a[f],g!=null))switch(f){case"value":o=g;break;case"defaultValue":s=g;break;case"children":i=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:kt(e,t,f,g,a,null)}lu(e,o,s,i);return;case"option":for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null)&&(A==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":kt(e,t,A,o,a,null));return;case"dialog":ot("beforetoggle",e),ot("toggle",e),ot("cancel",e),ot("close",e);break;case"iframe":case"object":ot("load",e);break;case"video":case"audio":for(o=0;o<ps.length;o++)ot(ps[o],e);break;case"image":ot("error",e),ot("load",e);break;case"details":ot("toggle",e);break;case"embed":case"source":case"link":ot("error",e),ot("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:kt(e,t,H,o,a,null)}return;default:if(pi(t)){for(oe in a)a.hasOwnProperty(oe)&&(o=a[oe],o!==void 0&&Wc(e,t,oe,o,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(o=a[g],o!=null&&kt(e,t,g,o,a,null))}function Xg(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,f=null,g=null,A=null,H=null,oe=null;for(J in a){var me=a[J];if(a.hasOwnProperty(J)&&me!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":A=me;default:o.hasOwnProperty(J)||kt(e,t,J,null,o,me)}}for(var q in o){var J=o[q];if(me=a[q],o.hasOwnProperty(q)&&(J!=null||me!=null))switch(q){case"type":i=J;break;case"name":s=J;break;case"checked":H=J;break;case"defaultChecked":oe=J;break;case"value":f=J;break;case"defaultValue":g=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,t));break;default:J!==me&&kt(e,t,q,J,o,me)}}di(e,f,g,A,H,oe,i,s);return;case"select":J=f=g=q=null;for(i in a)if(A=a[i],a.hasOwnProperty(i)&&A!=null)switch(i){case"value":break;case"multiple":J=A;default:o.hasOwnProperty(i)||kt(e,t,i,null,o,A)}for(s in o)if(i=o[s],A=a[s],o.hasOwnProperty(s)&&(i!=null||A!=null))switch(s){case"value":q=i;break;case"defaultValue":g=i;break;case"multiple":f=i;default:i!==A&&kt(e,t,s,i,o,A)}t=g,a=f,o=J,q!=null?Vo(e,!!a,q,!1):!!o!=!!a&&(t!=null?Vo(e,!!a,t,!0):Vo(e,!!a,a?[]:"",!1));return;case"textarea":J=q=null;for(g in a)if(s=a[g],a.hasOwnProperty(g)&&s!=null&&!o.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:kt(e,t,g,null,o,s)}for(f in o)if(s=o[f],i=a[f],o.hasOwnProperty(f)&&(s!=null||i!=null))switch(f){case"value":q=s;break;case"defaultValue":J=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:s!==i&&kt(e,t,f,s,o,i)}su(e,q,J);return;case"option":for(var Ee in a)q=a[Ee],a.hasOwnProperty(Ee)&&q!=null&&!o.hasOwnProperty(Ee)&&(Ee==="selected"?e.selected=!1:kt(e,t,Ee,null,o,q));for(A in o)q=o[A],J=a[A],o.hasOwnProperty(A)&&q!==J&&(q!=null||J!=null)&&(A==="selected"?e.selected=q&&typeof q!="function"&&typeof q!="symbol":kt(e,t,A,q,o,J));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ge in a)q=a[Ge],a.hasOwnProperty(Ge)&&q!=null&&!o.hasOwnProperty(Ge)&&kt(e,t,Ge,null,o,q);for(H in o)if(q=o[H],J=a[H],o.hasOwnProperty(H)&&q!==J&&(q!=null||J!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(d(137,t));break;default:kt(e,t,H,q,o,J)}return;default:if(pi(t)){for(var yt in a)q=a[yt],a.hasOwnProperty(yt)&&q!==void 0&&!o.hasOwnProperty(yt)&&Wc(e,t,yt,void 0,o,q);for(oe in o)q=o[oe],J=a[oe],!o.hasOwnProperty(oe)||q===J||q===void 0&&J===void 0||Wc(e,t,oe,q,o,J);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!o.hasOwnProperty(L)&&kt(e,t,L,null,o,q);for(me in o)q=o[me],J=a[me],!o.hasOwnProperty(me)||q===J||q==null&&J==null||kt(e,t,me,q,o,J)}function uh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var s=a[o],i=s.transferSize,f=s.initiatorType,g=s.duration;if(i&&g&&uh(f)){for(f=0,g=s.responseEnd,o+=1;o<a.length;o++){var A=a[o],H=A.startTime;if(H>g)break;var oe=A.transferSize,me=A.initiatorType;oe&&uh(me)&&(A=A.responseEnd,f+=oe*(A<g?1:(g-H)/(A-H)))}if(--o,t+=8*(i+f)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jc=null,ed=null;function El(e){return e.nodeType===9?e:e.ownerDocument}function ph(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function td(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nd=null;function Qg(){var e=window.event;return e&&e.type==="popstate"?e===nd?!1:(nd=e,!0):(nd=null,!1)}var hh=typeof setTimeout=="function"?setTimeout:void 0,Wg=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(e){return mh.resolve(null).then(e).catch(ev)}:hh;function ev(e){setTimeout(function(){throw e})}function so(e){return e==="head"}function xh(e,t){var a=t,o=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(s),yr(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")hs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,hs(a);for(var i=a.firstChild;i;){var f=i.nextSibling,g=i.nodeName;i[Kt]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=f}}else a==="body"&&hs(e.ownerDocument.body);a=s}while(a);yr(t)}function gh(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ad(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ad(a),cn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tv(e,t,a,o){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Kt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function nv(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yn(e.nextSibling),e===null))return null;return e}function vh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yn(e.nextSibling),e===null))return null;return e}function od(e){return e.data==="$?"||e.data==="$~"}function rd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function av(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var sd=null;function bh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Yn(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function kh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function yh(e,t,a){switch(t=El(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function hs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);cn(e)}var qn=new Map,wh=new Set;function Fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=_.d;_.d={f:ov,r:rv,D:sv,C:lv,L:iv,m:cv,X:uv,S:dv,M:pv};function ov(){var e=Aa.f(),t=Cl();return e||t}function rv(e){var t=Xt(e);t!==null&&t.tag===5&&t.type==="form"?Lp(t):Aa.r(e)}var vr=typeof document>"u"?null:document;function jh(e,t,a){var o=vr;if(o&&typeof t=="string"&&t){var s=Ln(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),wh.has(s)||(wh.add(s),e={rel:e,crossOrigin:a,href:t},o.querySelector(s)===null&&(t=o.createElement("link"),rn(t,"link",e),Nt(t),o.head.appendChild(t)))}}function sv(e){Aa.D(e),jh("dns-prefetch",e,null)}function lv(e,t){Aa.C(e,t),jh("preconnect",e,t)}function iv(e,t,a){Aa.L(e,t,a);var o=vr;if(o&&e&&t){var s='link[rel="preload"][as="'+Ln(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Ln(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Ln(a.imageSizes)+'"]')):s+='[href="'+Ln(e)+'"]';var i=s;switch(t){case"style":i=br(e);break;case"script":i=kr(e)}qn.has(i)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qn.set(i,e),o.querySelector(s)!==null||t==="style"&&o.querySelector(ms(i))||t==="script"&&o.querySelector(xs(i))||(t=o.createElement("link"),rn(t,"link",e),Nt(t),o.head.appendChild(t)))}}function cv(e,t){Aa.m(e,t);var a=vr;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Ln(o)+'"][href="'+Ln(e)+'"]',i=s;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kr(e)}if(!qn.has(i)&&(e=w({rel:"modulepreload",href:e},t),qn.set(i,e),a.querySelector(s)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xs(i)))return}o=a.createElement("link"),rn(o,"link",e),Nt(o),a.head.appendChild(o)}}}function dv(e,t,a){Aa.S(e,t,a);var o=vr;if(o&&e){var s=Rn(o).hoistableStyles,i=br(e);t=t||"default";var f=s.get(i);if(!f){var g={loading:0,preload:null};if(f=o.querySelector(ms(i)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qn.get(i))&&ld(e,a);var A=f=o.createElement("link");Nt(A),rn(A,"link",e),A._p=new Promise(function(H,oe){A.onload=H,A.onerror=oe}),A.addEventListener("load",function(){g.loading|=1}),A.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Rl(f,t,o)}f={type:"stylesheet",instance:f,count:1,state:g},s.set(i,f)}}}function uv(e,t){Aa.X(e,t);var a=vr;if(a&&e){var o=Rn(a).hoistableScripts,s=kr(e),i=o.get(s);i||(i=a.querySelector(xs(s)),i||(e=w({src:e,async:!0},t),(t=qn.get(s))&&id(e,t),i=a.createElement("script"),Nt(i),rn(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},o.set(s,i))}}function pv(e,t){Aa.M(e,t);var a=vr;if(a&&e){var o=Rn(a).hoistableScripts,s=kr(e),i=o.get(s);i||(i=a.querySelector(xs(s)),i||(e=w({src:e,async:!0,type:"module"},t),(t=qn.get(s))&&id(e,t),i=a.createElement("script"),Nt(i),rn(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},o.set(s,i))}}function Sh(e,t,a,o){var s=(s=te.current)?Fl(s):null;if(!s)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=br(a.href),a=Rn(s).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var i=Rn(s).hoistableStyles,f=i.get(e);if(f||(s=s.ownerDocument||s,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,f),(i=s.querySelector(ms(e)))&&!i._p&&(f.instance=i,f.state.loading=5),qn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qn.set(e,a),i||fv(s,e,a,f.state))),t&&o===null)throw Error(d(528,""));return f}if(t&&o!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kr(a),a=Rn(s).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function br(e){return'href="'+Ln(e)+'"'}function ms(e){return'link[rel="stylesheet"]['+e+"]"}function Ch(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function fv(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),rn(t,"link",a),Nt(t),e.head.appendChild(t))}function kr(e){return'[src="'+Ln(e)+'"]'}function xs(e){return"script[async]"+e}function Dh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ln(a.href)+'"]');if(o)return t.instance=o,Nt(o),o;var s=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Nt(o),rn(o,"style",s),Rl(o,a.precedence,e),t.instance=o;case"stylesheet":s=br(a.href);var i=e.querySelector(ms(s));if(i)return t.state.loading|=4,t.instance=i,Nt(i),i;o=Ch(a),(s=qn.get(s))&&ld(o,s),i=(e.ownerDocument||e).createElement("link"),Nt(i);var f=i;return f._p=new Promise(function(g,A){f.onload=g,f.onerror=A}),rn(i,"link",o),t.state.loading|=4,Rl(i,a.precedence,e),t.instance=i;case"script":return i=kr(a.src),(s=e.querySelector(xs(i)))?(t.instance=s,Nt(s),s):(o=a,(s=qn.get(i))&&(o=w({},a),id(o,s)),e=e.ownerDocument||e,s=e.createElement("script"),Nt(s),rn(s,"link",o),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Rl(o,a.precedence,e));return t.instance}function Rl(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=o.length?o[o.length-1]:null,i=s,f=0;f<o.length;f++){var g=o[f];if(g.dataset.precedence===t)i=g;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ld(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function id(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ml=null;function Th(e,t,a){if(Ml===null){var o=new Map,s=Ml=new Map;s.set(a,o)}else s=Ml,o=s.get(a),o||(o=new Map,s.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var i=a[s];if(!(i[Kt]||i[It]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var f=i.getAttribute(t)||"";f=e+f;var g=o.get(f);g?g.push(i):o.set(f,[i])}}return o}function Nh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function hv(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function mv(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=br(o.href),i=t.querySelector(ms(s));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Pl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Nt(i);return}i=t.ownerDocument||t,o=Ch(o),(s=qn.get(s))&&ld(o,s),i=i.createElement("link"),Nt(i);var f=i;f._p=new Promise(function(g,A){f.onload=g,f.onerror=A}),rn(i,"link",o),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Pl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var cd=0;function xv(e,t){return e.stylesheets&&e.count===0&&Il(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Il(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&cd===0&&(cd=62500*Zg());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Il(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>cd?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(s)}}:null}function Pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Il(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ll=null;function Il(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ll=new Map,t.forEach(gv,e),Ll=null,Pl.call(e))}function gv(e,t){if(!(t.state.loading&4)){var a=Ll.get(e);if(a)var o=a.get(null);else{a=new Map,Ll.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var f=s[i];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),o=f)}o&&a.set(null,o)}s=t.instance,f=s.getAttribute("data-precedence"),i=a.get(f)||o,i===o&&a.set(null,s),a.set(f,s),this.count++,o=Pl.bind(this),s.addEventListener("load",o),s.addEventListener("error",o),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var gs={$$typeof:M,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function vv(e,t,a,o,s,i,f,g,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.hiddenUpdates=Uo(null),this.identifierPrefix=o,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Ah(e,t,a,o,s,i,f,g,A,H,oe,me){return e=new vv(e,t,a,f,A,H,oe,me,g),t=1,i===!0&&(t|=24),i=Cn(3,null,null,t),e.current=i,i.stateNode=e,t=Hi(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:o,isDehydrated:a,cache:t},qi(i),e}function Oh(e){return e?(e=Qo,e):Qo}function zh(e,t,a,o,s,i){s=Oh(s),o.context===null?o.context=s:o.pendingContext=s,o=Xa(t),o.payload={element:a},i=i===void 0?null:i,i!==null&&(o.callback=i),a=Za(e,o,t),a!==null&&(wn(a,e,t),Xr(a,e,t))}function Eh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function dd(e,t){Eh(e,t),(e=e.alternate)&&Eh(e,t)}function Fh(e){if(e.tag===13||e.tag===31){var t=wo(e,67108864);t!==null&&wn(t,e,67108864),dd(e,67108864)}}function Rh(e){if(e.tag===13||e.tag===31){var t=An();t=Ia(t);var a=wo(e,t);a!==null&&wn(a,e,t),dd(e,t)}}var _l=!0;function bv(e,t,a,o){var s=D.T;D.T=null;var i=_.p;try{_.p=2,ud(e,t,a,o)}finally{_.p=i,D.T=s}}function kv(e,t,a,o){var s=D.T;D.T=null;var i=_.p;try{_.p=8,ud(e,t,a,o)}finally{_.p=i,D.T=s}}function ud(e,t,a,o){if(_l){var s=pd(o);if(s===null)Qc(e,t,o,Ul,a),Ph(e,o);else if(wv(s,e,t,a,o))o.stopPropagation();else if(Ph(e,o),t&4&&-1<yv.indexOf(e)){for(;s!==null;){var i=Xt(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var f=fn(i.pendingLanes);if(f!==0){var g=i;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var A=1<<31-Ve(f);g.entanglements[1]|=A,f&=~A}ia(i),(ft&6)===0&&(jl=Ye()+500,us(0))}}break;case 31:case 13:g=wo(i,2),g!==null&&wn(g,i,2),Cl(),dd(i,2)}if(i=pd(o),i===null&&Qc(e,t,o,Ul,a),i===s)break;s=i}s!==null&&o.stopPropagation()}else Qc(e,t,o,null,a)}}function pd(e){return e=hi(e),fd(e)}var Ul=null;function fd(e){if(Ul=null,e=mn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=m(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ul=e,null}function Mh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Le()){case He:return 2;case qe:return 8;case Je:case Ie:return 32;case $e:return 268435456;default:return 32}default:return 32}}var hd=!1,lo=null,io=null,co=null,vs=new Map,bs=new Map,uo=[],yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ph(e,t){switch(e){case"focusin":case"focusout":lo=null;break;case"dragenter":case"dragleave":io=null;break;case"mouseover":case"mouseout":co=null;break;case"pointerover":case"pointerout":vs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(t.pointerId)}}function ks(e,t,a,o,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Xt(t),t!==null&&Fh(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function wv(e,t,a,o,s){switch(t){case"focusin":return lo=ks(lo,e,t,a,o,s),!0;case"dragenter":return io=ks(io,e,t,a,o,s),!0;case"mouseover":return co=ks(co,e,t,a,o,s),!0;case"pointerover":var i=s.pointerId;return vs.set(i,ks(vs.get(i)||null,e,t,a,o,s)),!0;case"gotpointercapture":return i=s.pointerId,bs.set(i,ks(bs.get(i)||null,e,t,a,o,s)),!0}return!1}function Lh(e){var t=mn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=m(a),t!==null){e.blockedOn=t,vo(e.priority,function(){Rh(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,vo(e.priority,function(){Rh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);fi=o,a.target.dispatchEvent(o),fi=null}else return t=Xt(a),t!==null&&Fh(t),e.blockedOn=a,!1;t.shift()}return!0}function Ih(e,t,a){Hl(e)&&a.delete(t)}function jv(){hd=!1,lo!==null&&Hl(lo)&&(lo=null),io!==null&&Hl(io)&&(io=null),co!==null&&Hl(co)&&(co=null),vs.forEach(Ih),bs.forEach(Ih)}function Vl(e,t){e.blockedOn===t&&(e.blockedOn=null,hd||(hd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jv)))}var Gl=null;function _h(e){Gl!==e&&(Gl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Gl===e&&(Gl=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],s=e[t+2];if(typeof o!="function"){if(fd(o||a)===null)continue;break}var i=Xt(a);i!==null&&(e.splice(t,3),t-=3,pc(i,{pending:!0,data:s,method:a.method,action:o},o,s))}}))}function yr(e){function t(A){return Vl(A,e)}lo!==null&&Vl(lo,e),io!==null&&Vl(io,e),co!==null&&Vl(co,e),vs.forEach(t),bs.forEach(t);for(var a=0;a<uo.length;a++){var o=uo[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<uo.length&&(a=uo[0],a.blockedOn===null);)Lh(a),a.blockedOn===null&&uo.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var s=a[o],i=a[o+1],f=s[Ft]||null;if(typeof i=="function")f||_h(a);else if(f){var g=null;if(i&&i.hasAttribute("formAction")){if(s=i,f=i[Ft]||null)g=f.formAction;else if(fd(s)!==null)continue}else g=f.action;typeof g=="function"?a[o+1]=g:(a.splice(o,3),o-=3),_h(a)}}}function Uh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(f){return s=f})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function md(e){this._internalRoot=e}Yl.prototype.render=md.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,o=An();zh(a,o,e,t,null,null)},Yl.prototype.unmount=md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zh(e.current,2,null,e,null,null),Cl(),t[P]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<uo.length&&t!==0&&t<uo[a].priority;a++);uo.splice(a,0,e),a===0&&Lh(e)}};var Hh=l.version;if(Hh!=="19.2.4")throw Error(d(527,Hh,"19.2.4"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=v(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Sv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{ue=ql.inject(Sv),ye=ql}catch{}}return ws.createRoot=function(e,t){if(!u(e))throw Error(d(299));var a=!1,o="",s=Kp,i=Xp,f=Zp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Ah(e,1,!1,null,null,a,o,null,s,i,f,Uh),e[P]=t.current,Zc(e),new md(t)},ws.hydrateRoot=function(e,t,a){if(!u(e))throw Error(d(299));var o=!1,s="",i=Kp,f=Xp,g=Zp,A=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(A=a.formState)),t=Ah(e,1,!0,t,a??null,o,s,A,i,f,g,Uh),t.context=Oh(null),a=t.current,o=An(),o=Ia(o),s=Xa(o),s.callback=null,Za(a,s,o),a=o,t.current.lanes=a,Pa(t,a),ia(t),e[P]=t.current,Zc(e),new Yl(t)},ws.version="19.2.4",ws}var Wh;function Fv(){if(Wh)return vd.exports;Wh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),vd.exports=Ev(),vd.exports}var Rv=Fv();var Jh="popstate";function em(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Mv(r={}){function l(d,u){let p=u.state?.masked,{pathname:m,search:y,hash:x}=p||d.location;return Ld("",{pathname:m,search:y,hash:x},u.state&&u.state.usr||null,u.state&&u.state.key||"default",p?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function c(d,u){return typeof u=="string"?u:Os(u)}return Lv(l,c,null,r)}function Mt(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function pa(r,l){if(!r){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Pv(){return Math.random().toString(36).substring(2,10)}function tm(r,l){return{usr:r.state,key:r.key,idx:l,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Ld(r,l,c=null,d,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof l=="string"?Tr(l):l,state:c,key:l&&l.key||d||Pv(),unstable_mask:u}}function Os({pathname:r="/",search:l="",hash:c=""}){return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function Tr(r){let l={};if(r){let c=r.indexOf("#");c>=0&&(l.hash=r.substring(c),r=r.substring(0,c));let d=r.indexOf("?");d>=0&&(l.search=r.substring(d),r=r.substring(0,d)),r&&(l.pathname=r)}return l}function Lv(r,l,c,d={}){let{window:u=document.defaultView,v5Compat:p=!1}=d,m=u.history,y="POP",x=null,v=b();v==null&&(v=0,m.replaceState({...m.state,idx:v},""));function b(){return(m.state||{idx:null}).idx}function w(){y="POP";let N=b(),R=N==null?null:N-v;v=N,x&&x({action:y,location:T.location,delta:R})}function S(N,R){y="PUSH";let Z=em(N)?N:Ld(T.location,N,R);v=b()+1;let M=tm(Z,v),$=T.createHref(Z.unstable_mask||Z);try{m.pushState(M,"",$)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;u.location.assign($)}p&&x&&x({action:y,location:T.location,delta:1})}function F(N,R){y="REPLACE";let Z=em(N)?N:Ld(T.location,N,R);v=b();let M=tm(Z,v),$=T.createHref(Z.unstable_mask||Z);m.replaceState(M,"",$),p&&x&&x({action:y,location:T.location,delta:0})}function C(N){return Iv(N)}let T={get action(){return y},get location(){return r(u,m)},listen(N){if(x)throw new Error("A history only accepts one active listener");return u.addEventListener(Jh,w),x=N,()=>{u.removeEventListener(Jh,w),x=null}},createHref(N){return l(u,N)},createURL:C,encodeLocation(N){let R=C(N);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:S,replace:F,go(N){return m.go(N)}};return T}function Iv(r,l=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Mt(c,"No window.location.(origin|href) available to create URL");let d=typeof r=="string"?r:Os(r);return d=d.replace(/ $/,"%20"),!l&&d.startsWith("//")&&(d=c+d),new URL(d,c)}function Am(r,l,c="/"){return _v(r,l,c,!1)}function _v(r,l,c,d){let u=typeof l=="string"?Tr(l):l,p=Ea(u.pathname||"/",c);if(p==null)return null;let m=Om(r);Uv(m);let y=null;for(let x=0;y==null&&x<m.length;++x){let v=Wv(p);y=Zv(m[x],v,d)}return y}function Om(r,l=[],c=[],d="",u=!1){let p=(m,y,x=u,v)=>{let b={relativePath:v===void 0?m.path||"":v,caseSensitive:m.caseSensitive===!0,childrenIndex:y,route:m};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(d)&&x)return;Mt(b.relativePath.startsWith(d),`Absolute route path "${b.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(d.length)}let w=da([d,b.relativePath]),S=c.concat(b);m.children&&m.children.length>0&&(Mt(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Om(m.children,l,S,w,x)),!(m.path==null&&!m.index)&&l.push({path:w,score:Kv(w,m.index),routesMeta:S})};return r.forEach((m,y)=>{if(m.path===""||!m.path?.includes("?"))p(m,y);else for(let x of zm(m.path))p(m,y,!0,x)}),l}function zm(r){let l=r.split("/");if(l.length===0)return[];let[c,...d]=l,u=c.endsWith("?"),p=c.replace(/\?$/,"");if(d.length===0)return u?[p,""]:[p];let m=zm(d.join("/")),y=[];return y.push(...m.map(x=>x===""?p:[p,x].join("/"))),u&&y.push(...m),y.map(x=>r.startsWith("/")&&x===""?"/":x)}function Uv(r){r.sort((l,c)=>l.score!==c.score?c.score-l.score:Xv(l.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}var Hv=/^:[\w-]+$/,Vv=3,Gv=2,Yv=1,qv=10,$v=-2,nm=r=>r==="*";function Kv(r,l){let c=r.split("/"),d=c.length;return c.some(nm)&&(d+=$v),l&&(d+=Gv),c.filter(u=>!nm(u)).reduce((u,p)=>u+(Hv.test(p)?Vv:p===""?Yv:qv),d)}function Xv(r,l){return r.length===l.length&&r.slice(0,-1).every((d,u)=>d===l[u])?r[r.length-1]-l[l.length-1]:0}function Zv(r,l,c=!1){let{routesMeta:d}=r,u={},p="/",m=[];for(let y=0;y<d.length;++y){let x=d[y],v=y===d.length-1,b=p==="/"?l:l.slice(p.length)||"/",w=ai({path:x.relativePath,caseSensitive:x.caseSensitive,end:v},b),S=x.route;if(!w&&v&&c&&!d[d.length-1].route.index&&(w=ai({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},b)),!w)return null;Object.assign(u,w.params),m.push({params:u,pathname:da([p,w.pathname]),pathnameBase:nb(da([p,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(p=da([p,w.pathnameBase]))}return m}function ai(r,l){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[c,d]=Qv(r.path,r.caseSensitive,r.end),u=l.match(c);if(!u)return null;let p=u[0],m=p.replace(/(.)\/+$/,"$1"),y=u.slice(1);return{params:d.reduce((v,{paramName:b,isOptional:w},S)=>{if(b==="*"){let C=y[S]||"";m=p.slice(0,p.length-C.length).replace(/(.)\/+$/,"$1")}const F=y[S];return w&&!F?v[b]=void 0:v[b]=(F||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:m,pattern:r}}function Qv(r,l=!1,c=!0){pa(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let d=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,x,v,b)=>{if(d.push({paramName:y,isOptional:x!=null}),x){let w=b.charAt(v+m.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(d.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,l?void 0:"i"),d]}function Wv(r){try{return r.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return pa(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),r}}function Ea(r,l){if(l==="/")return r;if(!r.toLowerCase().startsWith(l.toLowerCase()))return null;let c=l.endsWith("/")?l.length-1:l.length,d=r.charAt(c);return d&&d!=="/"?null:r.slice(c)||"/"}var Jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function eb(r,l="/"){let{pathname:c,search:d="",hash:u=""}=typeof r=="string"?Tr(r):r,p;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?p=am(c.substring(1),"/"):p=am(c,l)):p=l,{pathname:p,search:ab(d),hash:ob(u)}}function am(r,l){let c=l.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?c.length>1&&c.pop():u!=="."&&c.push(u)}),c.length>1?c.join("/"):"/"}function wd(r,l,c,d){return`Cannot include a '${r}' character in a manually specified \`to.${l}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tb(r){return r.filter((l,c)=>c===0||l.route.path&&l.route.path.length>0)}function Em(r){let l=tb(r);return l.map((c,d)=>d===l.length-1?c.pathname:c.pathnameBase)}function $d(r,l,c,d=!1){let u;typeof r=="string"?u=Tr(r):(u={...r},Mt(!u.pathname||!u.pathname.includes("?"),wd("?","pathname","search",u)),Mt(!u.pathname||!u.pathname.includes("#"),wd("#","pathname","hash",u)),Mt(!u.search||!u.search.includes("#"),wd("#","search","hash",u)));let p=r===""||u.pathname==="",m=p?"/":u.pathname,y;if(m==null)y=c;else{let w=l.length-1;if(!d&&m.startsWith("..")){let S=m.split("/");for(;S[0]==="..";)S.shift(),w-=1;u.pathname=S.join("/")}y=w>=0?l[w]:"/"}let x=eb(u,y),v=m&&m!=="/"&&m.endsWith("/"),b=(p||m===".")&&c.endsWith("/");return!x.pathname.endsWith("/")&&(v||b)&&(x.pathname+="/"),x}var da=r=>r.join("/").replace(/\/\/+/g,"/"),nb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ab=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,ob=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,rb=class{constructor(r,l,c,d=!1){this.status=r,this.statusText=l||"",this.internal=d,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function sb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function lb(r){return r.map(l=>l.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rm(r,l){let c=r;if(typeof c!="string"||!Jv.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let d=c,u=!1;if(Fm)try{let p=new URL(window.location.href),m=c.startsWith("//")?new URL(p.protocol+c):new URL(c),y=Ea(m.pathname,l);m.origin===p.origin&&y!=null?c=y+m.search+m.hash:u=!0}catch{pa(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:u,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mm=["POST","PUT","PATCH","DELETE"];new Set(Mm);var ib=["GET",...Mm];new Set(ib);var Nr=h.createContext(null);Nr.displayName="DataRouter";var ri=h.createContext(null);ri.displayName="DataRouterState";var cb=h.createContext(!1),Pm=h.createContext({isTransitioning:!1});Pm.displayName="ViewTransition";var db=h.createContext(new Map);db.displayName="Fetchers";var ub=h.createContext(null);ub.displayName="Await";var Zn=h.createContext(null);Zn.displayName="Navigation";var zs=h.createContext(null);zs.displayName="Location";var Fa=h.createContext({outlet:null,matches:[],isDataRoute:!1});Fa.displayName="Route";var Kd=h.createContext(null);Kd.displayName="RouteError";var Lm="REACT_ROUTER_ERROR",pb="REDIRECT",fb="ROUTE_ERROR_RESPONSE";function hb(r){if(r.startsWith(`${Lm}:${pb}:{`))try{let l=JSON.parse(r.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function mb(r){if(r.startsWith(`${Lm}:${fb}:{`))try{let l=JSON.parse(r.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new rb(l.status,l.statusText,l.data)}catch{}}function xb(r,{relative:l}={}){Mt(Es(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:d}=h.useContext(Zn),{hash:u,pathname:p,search:m}=Fs(r,{relative:l}),y=p;return c!=="/"&&(y=p==="/"?c:da([c,p])),d.createHref({pathname:y,search:m,hash:u})}function Es(){return h.useContext(zs)!=null}function xo(){return Mt(Es(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(zs).location}var Im="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _m(r){h.useContext(Zn).static||h.useLayoutEffect(r)}function gb(){let{isDataRoute:r}=h.useContext(Fa);return r?Ab():vb()}function vb(){Mt(Es(),"useNavigate() may be used only in the context of a <Router> component.");let r=h.useContext(Nr),{basename:l,navigator:c}=h.useContext(Zn),{matches:d}=h.useContext(Fa),{pathname:u}=xo(),p=JSON.stringify(Em(d)),m=h.useRef(!1);return _m(()=>{m.current=!0}),h.useCallback((x,v={})=>{if(pa(m.current,Im),!m.current)return;if(typeof x=="number"){c.go(x);return}let b=$d(x,JSON.parse(p),u,v.relative==="path");r==null&&l!=="/"&&(b.pathname=b.pathname==="/"?l:da([l,b.pathname])),(v.replace?c.replace:c.push)(b,v.state,v)},[l,c,p,u,r])}h.createContext(null);function Fs(r,{relative:l}={}){let{matches:c}=h.useContext(Fa),{pathname:d}=xo(),u=JSON.stringify(Em(c));return h.useMemo(()=>$d(r,JSON.parse(u),d,l==="path"),[r,u,d,l])}function bb(r,l){return Um(r,l)}function Um(r,l,c){Mt(Es(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=h.useContext(Zn),{matches:u}=h.useContext(Fa),p=u[u.length-1],m=p?p.params:{},y=p?p.pathname:"/",x=p?p.pathnameBase:"/",v=p&&p.route;{let N=v&&v.path||"";Vm(y,!v||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let b=xo(),w;if(l){let N=typeof l=="string"?Tr(l):l;Mt(x==="/"||N.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${N.pathname}" was given in the \`location\` prop.`),w=N}else w=b;let S=w.pathname||"/",F=S;if(x!=="/"){let N=x.replace(/^\//,"").split("/");F="/"+S.replace(/^\//,"").split("/").slice(N.length).join("/")}let C=Am(r,{pathname:F});pa(v||C!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),pa(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=Sb(C&&C.map(N=>Object.assign({},N,{params:Object.assign({},m,N.params),pathname:da([x,d.encodeLocation?d.encodeLocation(N.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?x:da([x,d.encodeLocation?d.encodeLocation(N.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),u,c);return l&&T?h.createElement(zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},T):T}function kb(){let r=Bb(),l=sb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),c=r instanceof Error?r.stack:null,d="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:d},p={padding:"2px 4px",backgroundColor:d},m=null;return console.error("Error handled by React Router default ErrorBoundary:",r),m=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:p},"ErrorBoundary")," or"," ",h.createElement("code",{style:p},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},l),c?h.createElement("pre",{style:u},c):null,m)}var yb=h.createElement(kb,null),Hm=class extends h.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){this.props.onError?this.props.onError(r,l):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const c=mb(r.digest);c&&(r=c)}let l=r!==void 0?h.createElement(Fa.Provider,{value:this.props.routeContext},h.createElement(Kd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?h.createElement(wb,{error:r},l):l}};Hm.contextType=cb;var jd=new WeakMap;function wb({children:r,error:l}){let{basename:c}=h.useContext(Zn);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let d=hb(l.digest);if(d){let u=jd.get(l);if(u)throw u;let p=Rm(d.location,c);if(Fm&&!jd.get(l))if(p.isExternal||d.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:d.replace}));throw jd.set(l,m),m}return h.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function jb({routeContext:r,match:l,children:c}){let d=h.useContext(Nr);return d&&d.static&&d.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=l.route.id),h.createElement(Fa.Provider,{value:r},c)}function Sb(r,l=[],c){let d=c?.state;if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(l.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let u=r,p=d?.errors;if(p!=null){let b=u.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);Mt(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),u=u.slice(0,Math.min(u.length,b+1))}let m=!1,y=-1;if(c&&d){m=d.renderFallback;for(let b=0;b<u.length;b++){let w=u[b];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=b),w.route.id){let{loaderData:S,errors:F}=d,C=w.route.loader&&!S.hasOwnProperty(w.route.id)&&(!F||F[w.route.id]===void 0);if(w.route.lazy||C){c.isStatic&&(m=!0),y>=0?u=u.slice(0,y+1):u=[u[0]];break}}}}let x=c?.onError,v=d&&x?(b,w)=>{x(b,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:lb(d.matches),errorInfo:w})}:void 0;return u.reduceRight((b,w,S)=>{let F,C=!1,T=null,N=null;d&&(F=p&&w.route.id?p[w.route.id]:void 0,T=w.route.errorElement||yb,m&&(y<0&&S===0?(Vm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,N=null):y===S&&(C=!0,N=w.route.hydrateFallbackElement||null)));let R=l.concat(u.slice(0,S+1)),Z=()=>{let M;return F?M=T:C?M=N:w.route.Component?M=h.createElement(w.route.Component,null):w.route.element?M=w.route.element:M=b,h.createElement(jb,{match:w,routeContext:{outlet:b,matches:R,isDataRoute:d!=null},children:M})};return d&&(w.route.ErrorBoundary||w.route.errorElement||S===0)?h.createElement(Hm,{location:d.location,revalidation:d.revalidation,component:T,error:F,children:Z(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:v}):Z()},null)}function Xd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cb(r){let l=h.useContext(Nr);return Mt(l,Xd(r)),l}function Db(r){let l=h.useContext(ri);return Mt(l,Xd(r)),l}function Tb(r){let l=h.useContext(Fa);return Mt(l,Xd(r)),l}function Zd(r){let l=Tb(r),c=l.matches[l.matches.length-1];return Mt(c.route.id,`${r} can only be used on routes that contain a unique "id"`),c.route.id}function Nb(){return Zd("useRouteId")}function Bb(){let r=h.useContext(Kd),l=Db("useRouteError"),c=Zd("useRouteError");return r!==void 0?r:l.errors?.[c]}function Ab(){let{router:r}=Cb("useNavigate"),l=Zd("useNavigate"),c=h.useRef(!1);return _m(()=>{c.current=!0}),h.useCallback(async(u,p={})=>{pa(c.current,Im),c.current&&(typeof u=="number"?await r.navigate(u):await r.navigate(u,{fromRouteId:l,...p}))},[r,l])}var om={};function Vm(r,l,c){!l&&!om[r]&&(om[r]=!0,pa(!1,c))}h.memo(Ob);function Ob({routes:r,future:l,state:c,isStatic:d,onError:u}){return Um(r,void 0,{state:c,isStatic:d,onError:u})}function Gm(r){Mt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zb({basename:r="/",children:l=null,location:c,navigationType:d="POP",navigator:u,static:p=!1,unstable_useTransitions:m}){Mt(!Es(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=r.replace(/^\/*/,"/"),x=h.useMemo(()=>({basename:y,navigator:u,static:p,unstable_useTransitions:m,future:{}}),[y,u,p,m]);typeof c=="string"&&(c=Tr(c));let{pathname:v="/",search:b="",hash:w="",state:S=null,key:F="default",unstable_mask:C}=c,T=h.useMemo(()=>{let N=Ea(v,y);return N==null?null:{location:{pathname:N,search:b,hash:w,state:S,key:F,unstable_mask:C},navigationType:d}},[y,v,b,w,S,F,d,C]);return pa(T!=null,`<Router basename="${y}"> is not able to match the URL "${v}${b}${w}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:h.createElement(Zn.Provider,{value:x},h.createElement(zs.Provider,{children:l,value:T}))}function Eb({children:r,location:l}){return bb(Id(r),l)}function Id(r,l=[]){let c=[];return h.Children.forEach(r,(d,u)=>{if(!h.isValidElement(d))return;let p=[...l,u];if(d.type===h.Fragment){c.push.apply(c,Id(d.props.children,p));return}Mt(d.type===Gm,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Mt(!d.props.index||!d.props.children,"An index route cannot have child routes.");let m={id:d.props.id||p.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=Id(d.props.children,p)),c.push(m)}),c}var ti="get",ni="application/x-www-form-urlencoded";function si(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Fb(r){return si(r)&&r.tagName.toLowerCase()==="button"}function Rb(r){return si(r)&&r.tagName.toLowerCase()==="form"}function Mb(r){return si(r)&&r.tagName.toLowerCase()==="input"}function Pb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Lb(r,l){return r.button===0&&(!l||l==="_self")&&!Pb(r)}var $l=null;function Ib(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var _b=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sd(r){return r!=null&&!_b.has(r)?(pa(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ni}"`),null):r}function Ub(r,l){let c,d,u,p,m;if(Rb(r)){let y=r.getAttribute("action");d=y?Ea(y,l):null,c=r.getAttribute("method")||ti,u=Sd(r.getAttribute("enctype"))||ni,p=new FormData(r)}else if(Fb(r)||Mb(r)&&(r.type==="submit"||r.type==="image")){let y=r.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||y.getAttribute("action");if(d=x?Ea(x,l):null,c=r.getAttribute("formmethod")||y.getAttribute("method")||ti,u=Sd(r.getAttribute("formenctype"))||Sd(y.getAttribute("enctype"))||ni,p=new FormData(y,r),!Ib()){let{name:v,type:b,value:w}=r;if(b==="image"){let S=v?`${v}.`:"";p.append(`${S}x`,"0"),p.append(`${S}y`,"0")}else v&&p.append(v,w)}}else{if(si(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ti,d=null,u=ni,m=r}return p&&u==="text/plain"&&(m=p,p=void 0),{action:d,method:c.toLowerCase(),encType:u,formData:p,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qd(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function Hb(r,l,c,d){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return c?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${d}`:u.pathname=`${u.pathname}.${d}`:u.pathname==="/"?u.pathname=`_root.${d}`:l&&Ea(u.pathname,l)==="/"?u.pathname=`${l.replace(/\/$/,"")}/_root.${d}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${d}`,u}async function Vb(r,l){if(r.id in l)return l[r.id];try{let c=await import(r.module);return l[r.id]=c,c}catch(c){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Yb(r,l,c){let d=await Promise.all(r.map(async u=>{let p=l.routes[u.route.id];if(p){let m=await Vb(p,c);return m.links?m.links():[]}return[]}));return Xb(d.flat(1).filter(Gb).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function rm(r,l,c,d,u,p){let m=(x,v)=>c[v]?x.route.id!==c[v].route.id:!0,y=(x,v)=>c[v].pathname!==x.pathname||c[v].route.path?.endsWith("*")&&c[v].params["*"]!==x.params["*"];return p==="assets"?l.filter((x,v)=>m(x,v)||y(x,v)):p==="data"?l.filter((x,v)=>{let b=d.routes[x.route.id];if(!b||!b.hasLoader)return!1;if(m(x,v)||y(x,v))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function qb(r,l,{includeHydrateFallback:c}={}){return $b(r.map(d=>{let u=l.routes[d.route.id];if(!u)return[];let p=[u.module];return u.clientActionModule&&(p=p.concat(u.clientActionModule)),u.clientLoaderModule&&(p=p.concat(u.clientLoaderModule)),c&&u.hydrateFallbackModule&&(p=p.concat(u.hydrateFallbackModule)),u.imports&&(p=p.concat(u.imports)),p}).flat(1))}function $b(r){return[...new Set(r)]}function Kb(r){let l={},c=Object.keys(r).sort();for(let d of c)l[d]=r[d];return l}function Xb(r,l){let c=new Set;return new Set(l),r.reduce((d,u)=>{let p=JSON.stringify(Kb(u));return c.has(p)||(c.add(p),d.push({key:p,link:u})),d},[])}function Ym(){let r=h.useContext(Nr);return Qd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Zb(){let r=h.useContext(ri);return Qd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Wd=h.createContext(void 0);Wd.displayName="FrameworkContext";function qm(){let r=h.useContext(Wd);return Qd(r,"You must render this element inside a <HydratedRouter> element"),r}function Qb(r,l){let c=h.useContext(Wd),[d,u]=h.useState(!1),[p,m]=h.useState(!1),{onFocus:y,onBlur:x,onMouseEnter:v,onMouseLeave:b,onTouchStart:w}=l,S=h.useRef(null);h.useEffect(()=>{if(r==="render"&&m(!0),r==="viewport"){let T=R=>{R.forEach(Z=>{m(Z.isIntersecting)})},N=new IntersectionObserver(T,{threshold:.5});return S.current&&N.observe(S.current),()=>{N.disconnect()}}},[r]),h.useEffect(()=>{if(d){let T=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(T)}}},[d]);let F=()=>{u(!0)},C=()=>{u(!1),m(!1)};return c?r!=="intent"?[p,S,{}]:[p,S,{onFocus:js(y,F),onBlur:js(x,C),onMouseEnter:js(v,F),onMouseLeave:js(b,C),onTouchStart:js(w,F)}]:[!1,S,{}]}function js(r,l){return c=>{r&&r(c),c.defaultPrevented||l(c)}}function Wb({page:r,...l}){let{router:c}=Ym(),d=h.useMemo(()=>Am(c.routes,r,c.basename),[c.routes,r,c.basename]);return d?h.createElement(ek,{page:r,matches:d,...l}):null}function Jb(r){let{manifest:l,routeModules:c}=qm(),[d,u]=h.useState([]);return h.useEffect(()=>{let p=!1;return Yb(r,l,c).then(m=>{p||u(m)}),()=>{p=!0}},[r,l,c]),d}function ek({page:r,matches:l,...c}){let d=xo(),{future:u,manifest:p,routeModules:m}=qm(),{basename:y}=Ym(),{loaderData:x,matches:v}=Zb(),b=h.useMemo(()=>rm(r,l,v,p,d,"data"),[r,l,v,p,d]),w=h.useMemo(()=>rm(r,l,v,p,d,"assets"),[r,l,v,p,d]),S=h.useMemo(()=>{if(r===d.pathname+d.search+d.hash)return[];let T=new Set,N=!1;if(l.forEach(Z=>{let M=p.routes[Z.route.id];!M||!M.hasLoader||(!b.some($=>$.route.id===Z.route.id)&&Z.route.id in x&&m[Z.route.id]?.shouldRevalidate||M.hasClientLoader?N=!0:T.add(Z.route.id))}),T.size===0)return[];let R=Hb(r,y,u.unstable_trailingSlashAwareDataRequests,"data");return N&&T.size>0&&R.searchParams.set("_routes",l.filter(Z=>T.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[R.pathname+R.search]},[y,u.unstable_trailingSlashAwareDataRequests,x,d,p,b,l,r,m]),F=h.useMemo(()=>qb(w,p),[w,p]),C=Jb(w);return h.createElement(h.Fragment,null,S.map(T=>h.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...c})),F.map(T=>h.createElement("link",{key:T,rel:"modulepreload",href:T,...c})),C.map(({key:T,link:N})=>h.createElement("link",{key:T,nonce:c.nonce,...N,crossOrigin:N.crossOrigin??c.crossOrigin})))}function tk(...r){return l=>{r.forEach(c=>{typeof c=="function"?c(l):c!=null&&(c.current=l)})}}var nk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nk&&(window.__reactRouterVersion="7.13.1")}catch{}function ak({basename:r,children:l,unstable_useTransitions:c,window:d}){let u=h.useRef();u.current==null&&(u.current=Mv({window:d,v5Compat:!0}));let p=u.current,[m,y]=h.useState({action:p.action,location:p.location}),x=h.useCallback(v=>{c===!1?y(v):h.startTransition(()=>y(v))},[c]);return h.useLayoutEffect(()=>p.listen(x),[p,x]),h.createElement(zb,{basename:r,children:l,location:m.location,navigationType:m.action,navigator:p,unstable_useTransitions:c})}var $m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Km=h.forwardRef(function({onClick:l,discover:c="render",prefetch:d="none",relative:u,reloadDocument:p,replace:m,unstable_mask:y,state:x,target:v,to:b,preventScrollReset:w,viewTransition:S,unstable_defaultShouldRevalidate:F,...C},T){let{basename:N,navigator:R,unstable_useTransitions:Z}=h.useContext(Zn),M=typeof b=="string"&&$m.test(b),$=Rm(b,N);b=$.to;let G=xb(b,{relative:u}),I=xo(),Y=null;if(y){let se=$d(y,[],I.unstable_mask?I.unstable_mask.pathname:"/",!0);N!=="/"&&(se.pathname=se.pathname==="/"?N:da([N,se.pathname])),Y=R.createHref(se)}let[V,K,he]=Qb(d,C),ee=lk(b,{replace:m,unstable_mask:y,state:x,target:v,preventScrollReset:w,relative:u,viewTransition:S,unstable_defaultShouldRevalidate:F,unstable_useTransitions:Z});function ge(se){l&&l(se),se.defaultPrevented||ee(se)}let re=!($.isExternal||p),be=h.createElement("a",{...C,...he,href:(re?Y:void 0)||$.absoluteURL||G,onClick:re?ge:l,ref:tk(T,K),target:v,"data-discover":!M&&c==="render"?"true":void 0});return V&&!M?h.createElement(h.Fragment,null,be,h.createElement(Wb,{page:G})):be});Km.displayName="Link";var ok=h.forwardRef(function({"aria-current":l="page",caseSensitive:c=!1,className:d="",end:u=!1,style:p,to:m,viewTransition:y,children:x,...v},b){let w=Fs(m,{relative:v.relative}),S=xo(),F=h.useContext(ri),{navigator:C,basename:T}=h.useContext(Zn),N=F!=null&&pk(w)&&y===!0,R=C.encodeLocation?C.encodeLocation(w).pathname:w.pathname,Z=S.pathname,M=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;c||(Z=Z.toLowerCase(),M=M?M.toLowerCase():null,R=R.toLowerCase()),M&&T&&(M=Ea(M,T)||M);const $=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let G=Z===R||!u&&Z.startsWith(R)&&Z.charAt($)==="/",I=M!=null&&(M===R||!u&&M.startsWith(R)&&M.charAt(R.length)==="/"),Y={isActive:G,isPending:I,isTransitioning:N},V=G?l:void 0,K;typeof d=="function"?K=d(Y):K=[d,G?"active":null,I?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let he=typeof p=="function"?p(Y):p;return h.createElement(Km,{...v,"aria-current":V,className:K,ref:b,style:he,to:m,viewTransition:y},typeof x=="function"?x(Y):x)});ok.displayName="NavLink";var rk=h.forwardRef(({discover:r="render",fetcherKey:l,navigate:c,reloadDocument:d,replace:u,state:p,method:m=ti,action:y,onSubmit:x,relative:v,preventScrollReset:b,viewTransition:w,unstable_defaultShouldRevalidate:S,...F},C)=>{let{unstable_useTransitions:T}=h.useContext(Zn),N=dk(),R=uk(y,{relative:v}),Z=m.toLowerCase()==="get"?"get":"post",M=typeof y=="string"&&$m.test(y),$=G=>{if(x&&x(G),G.defaultPrevented)return;G.preventDefault();let I=G.nativeEvent.submitter,Y=I?.getAttribute("formmethod")||m,V=()=>N(I||G.currentTarget,{fetcherKey:l,method:Y,navigate:c,replace:u,state:p,relative:v,preventScrollReset:b,viewTransition:w,unstable_defaultShouldRevalidate:S});T&&c!==!1?h.startTransition(()=>V()):V()};return h.createElement("form",{ref:C,method:Z,action:R,onSubmit:d?x:$,...F,"data-discover":!M&&r==="render"?"true":void 0})});rk.displayName="Form";function sk(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xm(r){let l=h.useContext(Nr);return Mt(l,sk(r)),l}function lk(r,{target:l,replace:c,unstable_mask:d,state:u,preventScrollReset:p,relative:m,viewTransition:y,unstable_defaultShouldRevalidate:x,unstable_useTransitions:v}={}){let b=gb(),w=xo(),S=Fs(r,{relative:m});return h.useCallback(F=>{if(Lb(F,l)){F.preventDefault();let C=c!==void 0?c:Os(w)===Os(S),T=()=>b(r,{replace:C,unstable_mask:d,state:u,preventScrollReset:p,relative:m,viewTransition:y,unstable_defaultShouldRevalidate:x});v?h.startTransition(()=>T()):T()}},[w,b,S,c,d,u,l,r,p,m,y,x,v])}var ik=0,ck=()=>`__${String(++ik)}__`;function dk(){let{router:r}=Xm("useSubmit"),{basename:l}=h.useContext(Zn),c=Nb(),d=r.fetch,u=r.navigate;return h.useCallback(async(p,m={})=>{let{action:y,method:x,encType:v,formData:b,body:w}=Ub(p,l);if(m.navigate===!1){let S=m.fetcherKey||ck();await d(S,c,m.action||y,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:b,body:w,formMethod:m.method||x,formEncType:m.encType||v,flushSync:m.flushSync})}else await u(m.action||y,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:b,body:w,formMethod:m.method||x,formEncType:m.encType||v,replace:m.replace,state:m.state,fromRouteId:c,flushSync:m.flushSync,viewTransition:m.viewTransition})},[d,u,l,c])}function uk(r,{relative:l}={}){let{basename:c}=h.useContext(Zn),d=h.useContext(Fa);Mt(d,"useFormAction must be used inside a RouteContext");let[u]=d.matches.slice(-1),p={...Fs(r||".",{relative:l})},m=xo();if(r==null){p.search=m.search;let y=new URLSearchParams(p.search),x=y.getAll("index");if(x.some(b=>b==="")){y.delete("index"),x.filter(w=>w).forEach(w=>y.append("index",w));let b=y.toString();p.search=b?`?${b}`:""}}return(!r||r===".")&&u.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(p.pathname=p.pathname==="/"?c:da([c,p.pathname])),Os(p)}function pk(r,{relative:l}={}){let c=h.useContext(Pm);Mt(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Xm("useViewTransitionState"),u=Fs(r,{relative:l});if(!c.isTransitioning)return!1;let p=Ea(c.currentLocation.pathname,d)||c.currentLocation.pathname,m=Ea(c.nextLocation.pathname,d)||c.nextLocation.pathname;return ai(u.pathname,m)!=null||ai(u.pathname,p)!=null}var fk=Bm();function Jd({type:r,size:l=18,...c}){const d={width:l,height:l,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,...c};return r==="default"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M10 10h.01",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round"})]}):r==="success"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"m6.1 10.3 2.2 2.2 5.6-5.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}):r==="warning"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 2.2 18 17.8H2L10 2.2Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),n.jsx("path",{d:"M10 7v4.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M10 14.2h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):r==="error"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M7.2 7.2 12.8 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M12.8 7.2 7.2 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}):r==="loading"?n.jsx("svg",{...d,children:n.jsx("path",{d:"M10 3.2a6.8 6.8 0 1 0 6.8 6.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}):r==="info"?n.jsxs("svg",{...d,children:[n.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M10 8.2V14",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M10 6h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):null}function Zm({size:r=16,...l}){return n.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...l,children:[n.jsx("path",{d:"M6.2 6.2 13.8 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("path",{d:"M13.8 6.2 6.2 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}function hk({size:r=18,...l}){return n.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...l,children:[n.jsx("path",{d:"M2.2 10s2.8-5.8 7.8-5.8S17.8 10 17.8 10s-2.8 5.8-7.8 5.8S2.2 10 2.2 10Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),n.jsx("path",{d:"M10 12.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z",stroke:"currentColor",strokeWidth:"1.6"})]})}function mk({size:r=18,...l}){return n.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...l,children:[n.jsx("path",{d:"M3.3 4.2 16.7 17.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M7.2 7.6A2.8 2.8 0 0 0 12.4 13",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M4.1 7.3C2.9 8.7 2.2 10 2.2 10s2.8 5.8 7.8 5.8c1.4 0 2.6-.3 3.6-.8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M6 4.9C7.2 4.4 8.5 4.2 10 4.2c5 0 7.8 5.8 7.8 5.8s-.8 1.7-2.3 3.3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}function zt(r,{insertAt:l}={}){if(!r||typeof document>"u")return;const c=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",l==="top"&&c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d),d.styleSheet?d.styleSheet.cssText=r:d.appendChild(document.createTextNode(r))}zt(`@layer components {
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
`);function Oa(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}function xk(r){return r==="success"?"success":r==="warning"?"warning":r==="danger"?"error":r==="default"?"default":"info"}function Kl(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}var wt=h.forwardRef((r,l)=>{const{title:c,description:d,color:u="default",variant:p="flat",radius:m="md",icon:y,startContent:x,endContent:v,isVisible:b,isClosable:w=!1,hideIcon:S=!1,hideIconWrapper:F=!1,closeButtonProps:C,onClose:T,onVisibleChange:N,classNames:R,className:Z,style:M,...$}=r,[G,I]=h.useState(!0),Y=typeof b=="boolean",V=Y?b:G,K=c!=null,he=d!=null,ee=h.useMemo(()=>({"--oks-alert-accent":Kl(u,600),"--oks-alert-bg-50":Kl(u,50),"--oks-alert-bg-100":Kl(u,100),"--oks-alert-fg-900":Kl(u,900)}),[u]),ge=h.useMemo(()=>n.jsx(Jd,{type:xk(u),size:18}),[u]),re=h.useCallback(()=>{N?.(!1),Y||I(!1),T?.()},[Y,T,N]);if(!V)return null;const be=y??ge,se=!S&&be!==null,D=se?n.jsx("span",{className:Oa("oksAlertIcon",R?.alertIcon),children:be}):null,_=se?F?D:n.jsx("span",{className:Oa("oksAlertIconWrapper",R?.iconWrapper),children:D}):null,Q=Oa(Oa("oksAlertCloseButton",R?.closeButton),C?.className),pe=w===!0?n.jsx("button",{type:"button","aria-label":"Close",...C,className:Q,onClick:fe=>{C?.onClick?.(fe),fe.defaultPrevented||re()},children:n.jsx(Zm,{size:16})}):null;return n.jsxs("div",{...$,ref:l,role:"alert","data-visible":"true","data-closeable":w?"true":"false","data-has-title":K?"true":"false","data-has-description":he?"true":"false","data-color":u,"data-variant":p,"data-radius":m,className:Oa(Oa("oksAlert",R?.base),Z),style:{...ee,...M},children:[_,x,n.jsxs("div",{className:Oa("oksAlertMainWrapper",R?.mainWrapper),children:[K?n.jsx("div",{className:Oa("oksAlertTitle",R?.title),children:c}):null,he?n.jsx("div",{className:Oa("oksAlertDescription",R?.description),children:d}):null]}),v,pe]})});wt.displayName="Alert";function Kn(r,l,c){return Math.min(c,Math.max(l,r))}function Ss(r,l){return c=>{r?.(c),l(c)}}function gk(...r){return l=>{for(const c of r)c&&(typeof c=="function"?c(l):c.current=l)}}function eu(){const[r,l]=h.useState(!1);return h.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const c=window.matchMedia("(prefers-reduced-motion: reduce)"),d=()=>l(!!c.matches);return d(),typeof c.addEventListener=="function"?(c.addEventListener("change",d),()=>c.removeEventListener("change",d)):(c.addListener(d),()=>c.removeListener(d))},[]),r}function Br({children:r,container:l}){if(typeof document>"u")return null;const c=l??document.body;return c?fk.createPortal(r,c):null}function vk(){return typeof window>"u"?{width:0,height:0,scrollX:0,scrollY:0}:{width:window.innerWidth,height:window.innerHeight,scrollX:window.scrollX??window.pageXOffset??0,scrollY:window.scrollY??window.pageYOffset??0}}function li(r){const{triggerRect:l,tooltipRect:c,side:d,align:u,offset:p,collisionPadding:m,crossOffset:y=0,shouldFlip:x=!0,arrowSize:v=10,arrowPaddingX:b=12,arrowPaddingY:w=8,arrowCornerInset:S=0,strategy:F}=r,C=vk(),T=l.top-m,N=C.height-m-l.bottom,R=l.left-m,Z=C.width-m-l.right,M={top:c.height+p,bottom:c.height+p,left:c.width+p,right:c.width+p},$={top:T,bottom:N,left:R,right:Z},G={top:$.top>=M.top,bottom:$.bottom>=M.bottom,left:$.left>=M.left,right:$.right>=M.right},I=W=>W==="top"?"bottom":W==="bottom"?"top":W==="left"?"right":"left",V=(()=>{if(!x||G[d])return d;const W=I(d);if(G[W])return W;const te=["top","bottom","left","right"];let ie="top",De=$[ie]-M[ie];for(const ae of te){const ne=$[ae]-M[ae];ne>De&&(ie=ae,De=ne)}return ie})();let K=0,he=0;const ee=u==="start"?l.left:u==="end"?l.right-c.width:l.left+l.width/2-c.width/2,ge=u==="start"?l.top:u==="end"?l.bottom-c.height:l.top+l.height/2-c.height/2;V==="top"?(K=l.top-c.height-p,he=ee):V==="bottom"?(K=l.bottom+p,he=ee):V==="left"?(K=ge,he=l.left-c.width-p):(K=ge,he=l.right+p),V==="top"||V==="bottom"?he+=y:K+=y;const re=m,be=C.width-m-c.width,se=m,D=C.height-m-c.height,_=c.width<=C.width-m*2,Q=c.height<=C.height-m*2;G[V]?V==="top"||V==="bottom"?(he=Kn(he,re,be),Q||(K=Kn(K,se,D))):(K=Kn(K,se,D),_||(he=Kn(he,re,be))):(he=Kn(he,re,be),K=Kn(K,se,D)),F==="absolute"&&(he+=C.scrollX,K+=C.scrollY);const pe=v/2,fe=l.left+l.width/2+(F==="absolute"?C.scrollX:0),k=l.top+l.height/2+(F==="absolute"?C.scrollY:0);let B,E;if(V==="top"||V==="bottom"){const W=fe-he,te=Math.max(b,S),ie=te+pe,De=c.width-te-pe;B=De>=ie?Kn(W,ie,De):c.width/2}else{const W=k-K,te=Math.max(w,S),ie=te+pe,De=c.height-te-pe;E=De>=ie?Kn(W,ie,De):c.height/2}const j={top:K,left:he,placedSide:V};return B!==void 0&&(j.arrowX=B),E!==void 0&&(j.arrowY=E),j}zt(`@layer components {
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
`);function Xl(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}var sm=[50,100,200,300,400,500,600,700,800,900,950];function bk(r){const l=Kn(r,50,950);let d=sm[0]??100,u=Math.abs(d-l);for(const p of sm){const m=Math.abs(p-l);m<u&&(d=p,u=m)}return d}function kk(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}function Xe(r){const{children:l,content:c,size:d="md",color:u="default",colorDepth:p=100,radius:m="md",shadow:y="sm",placement:x="top",delay:v=0,closeDelay:b=500,isOpen:w,defaultOpen:S=!1,onOpenChange:F,onClose:C,offset:T=7,containerPadding:N=12,crossOffset:R=0,showArrow:Z=!1,shouldFlip:M=!0,triggerScaleOnOpen:$=!1,isKeyboardDismissDisabled:G=!1,isDismissable:I=!1,shouldCloseOnBlur:Y=!0,portalContainer:V,updatePositionDeps:K,isDisabled:he=!1,disableAnimation:ee=!1,className:ge,classNames:re,shouldCloseOnInteractOutside:be}=r,D=`oks-tooltip-${h.useId().replace(/[:]/g,"")}`,_=w!==void 0,[Q,pe]=h.useState(S),fe=!he&&(_?w:Q),[k,B]=h.useState(!1),E=eu(),j=h.useRef(null),W=h.useRef(null),te=h.useRef(null),ie=h.useRef(null),[De,ae]=h.useState(null),ne=Ie=>{F?.(Ie),_||pe(Ie),Ie||C?.()},Fe=()=>{te.current!==null&&(window.clearTimeout(te.current),te.current=null)},we=()=>{ie.current!==null&&(window.clearTimeout(ie.current),ie.current=null)},Te=Ie=>{if(he)return;const $e=Ie?.currentTarget;$e instanceof HTMLElement&&(j.current=$e),we(),Fe(),ve(),te.current=window.setTimeout(()=>ne(!0),v)},ze=()=>{Fe(),we(),ie.current=window.setTimeout(()=>ne(!1),b)},Oe=()=>{Fe(),we(),ne(!1)},{side:de,align:ke}=h.useMemo(()=>{const[Ie,$e]=x.split("-");return{side:Ie==="top"||Ie==="bottom"||Ie==="left"||Ie==="right"?Ie:"top",align:$e==="start"||$e==="end"?$e:"center"}},[x]),ve=()=>{const Ie=j.current,$e=W.current;if(!Ie||!$e)return;const jt=Ie.getBoundingClientRect(),Jt=$e.getBoundingClientRect(),ue=Z?$e.querySelector(".oksTooltipArrow"):null,ye=$e.querySelector(".oksTooltipContent"),Ae=ue?Number.parseFloat(window.getComputedStyle(ue).width):Number.NaN,Ve=Number.isFinite(Ae)&&Ae>0?Ae:10,pt=ye?Number.parseFloat(window.getComputedStyle(ye).paddingLeft):Number.NaN,Se=Number.isFinite(pt)&&pt>0?pt:12,et=ye?Number.parseFloat(window.getComputedStyle(ye).paddingTop):Number.NaN,it=Number.isFinite(et)&&et>0?et:8,Et=m==="full"?Math.min(Jt.width,Jt.height)/2:0;ae(li({triggerRect:jt,tooltipRect:Jt,side:de,align:ke,offset:T,collisionPadding:N,crossOffset:R,shouldFlip:M,arrowSize:Ve,arrowPaddingX:Se,arrowPaddingY:it,arrowCornerInset:Et,strategy:"fixed"}))};h.useEffect(()=>(B(!0),()=>{typeof window>"u"||(Fe(),we())}),[]),h.useEffect(()=>{if(!k||!fe||(ve(),typeof window>"u"))return;const Ie=window.requestAnimationFrame(()=>ve()),$e=()=>ve();window.addEventListener("scroll",$e,!0),window.addEventListener("resize",$e);let jt=null;return typeof ResizeObserver<"u"&&(jt=new ResizeObserver($e),j.current&&jt.observe(j.current),W.current&&jt.observe(W.current)),()=>{window.cancelAnimationFrame(Ie),window.removeEventListener("scroll",$e,!0),window.removeEventListener("resize",$e),jt?.disconnect()}},[k,fe,de,ke,T,N,R,M,K]),h.useEffect(()=>{if(!k||!fe||typeof document>"u")return;const Ie=$e=>{G||$e.key==="Escape"&&Oe()};return document.addEventListener("keydown",Ie),()=>document.removeEventListener("keydown",Ie)},[k,fe,G]),h.useEffect(()=>{if(!k||!fe||!I||typeof document>"u")return;const Ie=$e=>{const jt=$e.target;if(!(jt instanceof Node)||j.current?.contains(jt)||W.current?.contains(jt))return;const Jt=jt instanceof HTMLElement?jt:null;Jt&&be&&!be(Jt)||Oe()};return document.addEventListener("pointerdown",Ie,!0),()=>document.removeEventListener("pointerdown",Ie,!0)},[k,fe,I,be]);const le=Ie=>({"aria-describedby":fe?D:void 0,onPointerEnter:Ss(Ie?.onPointerEnter,$e=>Te($e)),onPointerLeave:Ss(Ie?.onPointerLeave,()=>ze()),onFocus:Ss(Ie?.onFocus,$e=>Te($e)),onBlur:Ss(Ie?.onBlur,()=>{Y&&ze()}),onKeyDown:Ss(Ie?.onKeyDown,$e=>{G||$e?.key==="Escape"&&Oe()})}),je=fe&&De===null,Pe={position:"fixed",top:De?.top??0,left:De?.left??0,visibility:je?"hidden":void 0,...De?.arrowX!==void 0?{"--oks-tooltip-arrow-x":`${De.arrowX}px`}:null,...De?.arrowY!==void 0?{"--oks-tooltip-arrow-y":`${De.arrowY}px`}:null},Ze=typeof p=="number"?bk(p):100,Ne=Ze<=400?"#000":"#fff",Ye={"--oks-tooltip-bg":kk(u,Ze),"--oks-tooltip-fg":Ne},Le=h.isValidElement(l)?(()=>{const Ie=l,$e=Ie.ref;return h.cloneElement(Ie,{ref:gk($e,jt=>{j.current=jt}),...le(Ie.props)})})():n.jsx("span",{ref:Ie=>{j.current=Ie},...le(),children:l}),He=ee||E?"reduced":fe?"open":"closed",qe=h.useMemo(()=>{const Ie=De?.placedSide??de,$e=ke==="center"?"":`-${ke}`;return`${Ie}${$e}`},[De?.placedSide,de,ke]),Je=k&&!he?n.jsxs("div",{ref:Ie=>{W.current=Ie},id:D,role:"tooltip","aria-hidden":!fe,"data-open":fe?"true":"false","data-placement":qe,"data-disabled":he?"true":"false","data-size":d,"data-color":u,"data-radius":m,"data-shadow":y,"data-motion":He,className:Xl(Xl("oksTooltipBase",re?.base),ge),style:{...Ye,...Pe},children:[Z?n.jsx("span",{className:Xl("oksTooltipArrow",re?.arrow)}):null,n.jsx("div",{className:Xl("oksTooltipContent",re?.content),children:c})]}):null;return n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"oksTooltipTrigger","data-open":fe?"true":"false","data-trigger-scale":$?"true":"false","data-motion":ee||E?"reduced":"default",children:Le}),n.jsx(Br,{container:V,children:Je})]})}function yk({size:r=18,...l}){return n.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...l,children:[n.jsx("path",{d:"M10 10.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z",stroke:"currentColor",strokeWidth:"1.6"}),n.jsx("path",{d:"M3.6 17.2c1.6-3.1 4-4.4 6.4-4.4s4.8 1.3 6.4 4.4",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}zt(`@layer components {
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
`);function ca(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}var lm=[50,100,200,300,400,500,600,700,800,900,950];function wk(r){const l=Kn(r,50,950);let d=lm[0]??500,u=Math.abs(d-l);for(const p of lm){const m=Math.abs(p-l);m<u&&(d=p,u=m)}return d}function oi(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}function jk(r,l){return oi(r,l)}function Sk(r){const l=typeof r=="string"?r.trim():"";if(!l)return"";const c=l.split(/\s+/).filter(Boolean);if(c.length===0)return"";const d=c[0]?.[0]??"",u=c.length>1?c[c.length-1]?.[0]??"":"";return(d+u).toUpperCase()}function Ck(r){const l=Math.floor(Math.abs(r));return l<1e3?`+${l}`:l<1e6?`+${Math.floor(l/1e3)}K`:l<1e9?`+${Math.floor(l/1e6)}M`:`+${Math.floor(l/1e9)}B`}var Ce=h.forwardRef((r,l)=>{const{name:c,src:d,size:u="md",color:p="default",radius:m="full",colorDepth:y=500,isBordered:x=!1,isDisabled:v=!1,isFocusable:b=!1,showFallback:w=!1,icon:S,fallback:F,tooltip:C=!1,ImgComponent:T="img",imgProps:N,classNames:R,className:Z,style:M,...$}=r,G=typeof c=="string"?c:"",I=v,Y=p,V=typeof y=="number"?wk(y):500,K=V<=400?"#000":"#fff",[he,ee]=h.useState(!1);h.useEffect(()=>ee(!1),[d]);const ge=d?he?w===!0:!1:!0,be={...{"--oks-avatar-bg":oi(Y,V),"--oks-avatar-bg-50":oi(Y,50),"--oks-avatar-fg":K,"--oks-avatar-border":jk(Y,V)},...M??{}},se=$["aria-label"],D=typeof se=="string"?se:G||void 0,_=b===!0&&$.tabIndex===void 0?0:$.tabIndex,Q=ca(ca("oksAvatar",R?.base),Z),pe=F??(G.trim().length>0?n.jsx("span",{className:ca("oksAvatarInitials",R?.name),"aria-hidden":"true",children:Sk(G)}):n.jsx("span",{className:ca("oksAvatarFallbackIcon",R?.icon),"aria-hidden":"true",children:S??n.jsx(yk,{})})),fe=n.jsx("div",{...$,ref:l,className:Q,"data-size":u,"data-color":Y,"data-radius":m,"data-bordered":x?"true":void 0,"data-focusable":b?"true":void 0,"data-disabled":I?"true":void 0,role:ge?"img":$.role,"aria-label":ge?D:$["aria-label"],tabIndex:I?$.tabIndex:_,style:be,children:ge?n.jsx("span",{className:ca("oksAvatarFallback",R?.fallback),children:pe}):n.jsx(T,{...N,className:ca(ca("oksAvatarImage",R?.img),N?.className),src:d,alt:N?.alt??G,draggable:!1,onError:W=>{ee(!0),N?.onError?.(W)}})}),k=C===!0?G:typeof C=="object"&&C!==null?"content"in C?C.content??G:G:null,B=typeof C=="object"&&C!==null?"props"in C?C.props:C:void 0;if(!((C===!0||typeof C=="object"&&C!==null)&&typeof k=="string"?k.trim().length>0:k!=null))return fe;const j=I?n.jsx("span",{className:"oksAvatarTooltipWrapper",children:fe}):fe;return n.jsx(Xe,{...B,content:k,children:j})});Ce.displayName="Avatar";var Po=h.forwardRef((r,l)=>{const{children:c,max:d=5,total:u,size:p="md",color:m="default",radius:y="full",isGrid:x=!1,isDisabled:v,isBordered:b=!1,renderCount:w,classNames:S,className:F,style:C,...T}=r,N=xe.Children.toArray(c),R=Math.max(0,Math.floor(d)),Z=typeof u=="number"?u-R:N.length-R,M=Z>0?Z:0,$={...C??{}},G=ca(ca("oksAvatarGroup",S?.base),F);return n.jsxs("div",{...T,ref:l,className:G,"data-grid":x?"true":void 0,"data-color":m,"data-radius":y,"data-bordered":b?"true":void 0,"data-disabled":v?"true":void 0,style:$,children:[n.jsx("div",{className:"oksAvatarGroupStack","data-grid":x?"true":void 0,children:N.slice(0,R).map((I,Y)=>{if(xe.isValidElement(I)){const V=I,K={size:p};return V.props?.radius===void 0&&(K.radius=y),V.props?.isBordered===void 0&&(K.isBordered=b),V.props?.isDisabled===void 0&&(K.isDisabled=v),V.props?.color===void 0&&(K.color=m),n.jsx("div",{className:"oksAvatarGroupItem",children:xe.cloneElement(I,K)},Y)}return n.jsx("div",{className:"oksAvatarGroupItem",children:I},Y)})}),M>0?n.jsx("span",{className:ca("oksAvatarGroupOverflowText",S?.count),style:{"--oks-avatar-group-count-color":oi(m,600)},children:w?w(M):Ck(M)}):null]})});Po.displayName="AvatarGroup";zt(`@layer components {
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
`);function im(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}var Cs=0,Zl=null;function Dk(){if(typeof document>"u")return()=>{};const r=document.documentElement;return Cs+=1,Cs===1&&(Zl=r.style.overflow,r.style.overflow="hidden"),()=>{if(typeof document>"u")return;const l=document.documentElement;Cs=Math.max(0,Cs-1),Cs===0&&(Zl?l.style.overflow=Zl:l.style.removeProperty("overflow"),Zl=null)}}function cm(r,l,c){const d=typeof r=="number"&&Number.isFinite(r)?r:l;return Math.min(c,Math.max(l,d))}function Tk(r){return r==="easeIn"?"ease-in":r==="easeOut"?"ease-out":r==="easeInOut"?"ease-in-out":"ease"}function Xn(r){const{isOpen:l,onClose:c,children:d,zIndex:u=40,closeOnOutsideClick:p=!0,closeOnEscape:m=!0,lockScroll:y=!0,blur:x=!0,backgroundColor:v="var(--oks-palette-neutral-950, #000)",backgroundOpacity:b=80,animationDuration:w=.3,animationType:S="fade",easing:F="ease",portal:C=!0,container:T,className:N,style:R,contentFullSize:Z=!1,contentClassName:M,contentStyle:$}=r,G=eu(),[I,Y]=h.useState(l),[V,K]=h.useState("closed"),[he,ee]=h.useState("closed"),ge=h.useRef({}),re=h.useMemo(()=>G?0:Math.round(cm(w,0,10)*1e3),[w,G]),be=h.useMemo(()=>{const pe=cm(b,0,100);return String(pe/100)},[b]),se=h.useMemo(()=>({zIndex:u,...R,"--oks-backdrop-duration":`${re}ms`,"--oks-backdrop-easing":Tk(F),"--oks-backdrop-opacity":be}),[re,F,be,R,u]);h.useEffect(()=>{if(y&&I)return Dk()},[y,I]),h.useEffect(()=>{if(!l||!m||typeof document>"u")return;const pe=fe=>{fe.key==="Escape"&&c()};return document.addEventListener("keydown",pe),()=>document.removeEventListener("keydown",pe)},[m,l,c]),h.useEffect(()=>{const pe=ge.current;typeof window<"u"&&(pe.openContent!==void 0&&window.clearTimeout(pe.openContent),pe.closeBackdrop!==void 0&&window.clearTimeout(pe.closeBackdrop),pe.unmount!==void 0&&window.clearTimeout(pe.unmount)),pe.raf!==void 0&&typeof window<"u"&&window.cancelAnimationFrame(pe.raf),ge.current={}},[re]),h.useEffect(()=>{const pe={};if(G){Y(l),K(l?"open":"closed"),ee(l?"open":"closed");return}if(typeof window>"u"){Y(l),K(l?"open":"closed"),ee(l?"open":"closed");return}return l?(Y(!0),K("closed"),ee("closed"),pe.raf=window.requestAnimationFrame(()=>K("open")),pe.openContent=window.setTimeout(()=>ee("open"),re)):(ee("closed"),pe.closeBackdrop=window.setTimeout(()=>K("closed"),re),pe.unmount=window.setTimeout(()=>Y(!1),re*2)),ge.current=pe,()=>{typeof window>"u"||(pe.openContent!==void 0&&window.clearTimeout(pe.openContent),pe.closeBackdrop!==void 0&&window.clearTimeout(pe.closeBackdrop),pe.unmount!==void 0&&window.clearTimeout(pe.unmount),pe.raf!==void 0&&window.cancelAnimationFrame(pe.raf))}},[re,l,G]);const D=n.jsx("div",{className:"oksBackdropOverlay","data-blur":x?"true":"false",style:{backgroundColor:v},onPointerDown:p?c:void 0,"aria-hidden":"true"}),_=d!=null?n.jsx("div",{className:im("oksBackdropContent",M),style:$,children:d}):null,Q=I?n.jsxs("div",{className:im("oksBackdrop",N),style:se,"data-state":V,"data-content-state":he,"data-animation":S,"data-motion":G?"reduced":"full","data-content-size":Z?"full":"auto",children:[D,_]}):null;return C?n.jsx(Br,{container:T,children:Q}):Q}zt(`@layer components {
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
`);function Cd(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}function Ql(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}var rt=h.forwardRef((r,l)=>{const{children:c,content:d,max:u,variant:p="solid",color:m="default",size:y="md",shape:x="rectangle",placement:v="top-right",showOutline:b=!0,disableOutline:w=!1,disableAnimation:S=!1,isInvisible:F=!1,isOneChar:C=!1,isDot:T=!1,classNames:N,className:R,style:Z,...M}=r,$=w?!1:b,G=d!=null,I=!F&&(T||G),Y=typeof u=="number"&&Number.isFinite(u)&&u>0?Math.floor(u):void 0,V=!T&&typeof d=="number"&&Y!==void 0&&d>Y?`${Y}+`:d,K={"--oks-badge-tone":Ql(m,500),"--oks-badge-tone-50":Ql(m,50),"--oks-badge-tone-100":Ql(m,100),"--oks-badge-tone-700":Ql(m,700),"--oks-badge-solid-fg":"#fff"},he=I?n.jsx("span",{className:Cd("oksBadgeBadge",N?.badge),children:T?null:V}):null;return n.jsxs("span",{...M,ref:l,"data-variant":p,"data-color":m,"data-size":y,"data-shape":x,"data-placement":v,"data-outline":$?"true":"false","data-dot":T?"true":"false","data-one-char":C?"true":"false","data-invisible":F?"true":"false","data-disable-animation":S?"true":"false",className:Cd(Cd("oksBadge",N?.base),R),style:{...K,...Z},children:[c,he]})});rt.displayName="Badge";zt(`@layer components {
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
`);function Nk(r,l){return[r,typeof l=="string"?l:""].filter(Boolean).join(" ")}function wr(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}var O=h.forwardRef((r,l)=>{const{children:c,variant:d="solid",size:u="md",color:p="default",radius:m="md",startContent:y,endContent:x,spinner:v,spinnerPlacement:b="start",fullWidth:w=!1,isIconOnly:S=!1,isDisabled:F=!1,isLoading:C=!1,disableRipple:T=!1,disableAnimation:N=!1,className:R,type:Z="button",style:M,disabled:$,onMouseDown:G,onPointerDown:I,onPointerEnter:Y,onPointerLeave:V,onPointerUp:K,onPointerCancel:he,onClick:ee,onKeyDown:ge,onKeyUp:re,onPress:be,onPressStart:se,onPressEnd:D,onPressChange:_,onPressUp:Q,onFocus:pe,onBlur:fe,...k}=r,B=$||F,[E,j]=h.useState([]),W=h.useRef(!1),te=k["aria-label"];k["aria-labelledby"];const ie=typeof te=="string"?te:void 0,De={"--oks-button-tone":wr(p,500),"--oks-button-tone-hover":wr(p,600),"--oks-button-tone-active":wr(p,700),"--oks-button-tone-50":wr(p,50),"--oks-button-tone-100":wr(p,100),"--oks-button-tone-700":wr(p,700)},ae=()=>{const Se=globalThis?.crypto?.randomUUID?.();return typeof Se=="string"?Se:`${Date.now()}-${Math.random()}`},ne=typeof globalThis.matchMedia=="function"&&globalThis.matchMedia("(prefers-reduced-motion: reduce)")?.matches,[Fe,we]=h.useState(!1),[Te,ze]=h.useState(!1),[Oe,de]=h.useState(!1),[ke,ve]=h.useState(!1),le=Se=>{B||C||(ke||(se?.(Se),_?.(!0)),ve(!0))},je=Se=>{ke&&(D?.(Se),_?.(!1)),ve(!1)},Pe=h.useCallback((Se,et,it)=>{if(N||ne)return;const Et=Se.getBoundingClientRect(),St=Math.max(et,Et.width-et),fn=Math.max(it,Et.height-it),en=Math.ceil(Math.sqrt(St*St+fn*fn)*2),aa=ae();j(jn=>{const zn=[...jn,{id:aa,x:et,y:it,size:en}];return zn.length>10&&zn.splice(0,zn.length-10),zn})},[N,ne]),Ze=h.useCallback(Se=>{j(et=>et.filter(it=>it.id!==Se))},[]),Ne=Se=>{if(le(Se),!B&&!C&&!T){W.current=!0,globalThis.setTimeout(()=>{W.current=!1},0);const et=Se.currentTarget,it=et.getBoundingClientRect();if(typeof Se.clientX=="number"&&typeof Se.clientY=="number"){const Et=Se.clientX-it.left,St=Se.clientY-it.top;Pe(et,Et,St)}}I?.(Se)},Ye=Se=>{if(!B&&!C&&!T){if(W.current){G?.(Se);return}const et=Se.currentTarget,it=et.getBoundingClientRect(),Et=Se.clientX-it.left,St=Se.clientY-it.top;Pe(et,Et,St)}G?.(Se)},Le=Se=>{if((Se.key==="Enter"||Se.key===" ")&&le(Se),!B&&!C&&!T&&(Se.key==="Enter"||Se.key===" ")){const et=Se.currentTarget,it=et.getBoundingClientRect();Pe(et,it.width/2,it.height/2)}ge?.(Se)},He=Se=>{(Se.key==="Enter"||Se.key===" ")&&(!B&&!C&&Q?.(Se),je(Se)),re?.(Se)},qe=Se=>{if(B||C){Se.preventDefault(),Se.stopPropagation();return}be?.(Se),ee?.(Se)},Je=Se=>{we(!0),Y?.(Se)},Ie=Se=>{we(!1),je(Se),V?.(Se)},$e=Se=>{!B&&!C&&Q?.(Se),je(Se),K?.(Se)},jt=Se=>{je(Se),he?.(Se)},Jt=Se=>{ze(!1),de(!1),je(Se),fe?.(Se)},ue=Se=>{ze(!0);const et=Se?.currentTarget,it=typeof et?.matches=="function"?et.matches(":focus-visible"):!1;de(it),pe?.(Se)},Ae=v??n.jsx("span",{className:"oksButtonSpinner","aria-hidden":"true"}),Ve=S&&C;return n.jsxs("button",{...k,"aria-label":ie,ref:l,type:Z,disabled:B,onClick:qe,onMouseDown:Ye,onPointerDown:Ne,onPointerEnter:Je,onPointerLeave:Ie,onPointerUp:$e,onPointerCancel:jt,onKeyDown:Le,onKeyUp:He,onFocus:ue,onBlur:Jt,"data-hover":Fe?"true":"false","data-focus":Te?"true":"false","data-focus-visible":Oe?"true":"false","data-disabled":B?"true":"false","data-pressed":ke?"true":"false","data-loading":C?"true":"false","data-motion":N||ne?"reduced":"default","data-variant":d,"data-color":p,"data-size":u,"data-radius":m,"data-icon-only":S?"true":"false","data-full-width":w?"true":"false",className:Nk("oksButton",R),style:{...De,...M},children:[E.map(Se=>n.jsx("span",{className:"oksButtonRipple","aria-hidden":"true",style:{left:`${Se.x}px`,top:`${Se.y}px`,width:`${Se.size}px`,height:`${Se.size}px`},onAnimationEnd:()=>Ze(Se.id)},Se.id)),C&&b==="start"&&!Ve?n.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"start",children:Ae}):null,y!==void 0?n.jsx("span",{className:"oksButtonStartContent",children:y}):null,Ve?n.jsx("span",{className:"oksButtonIconOnly","aria-hidden":"true",children:Ae}):S?n.jsx("span",{className:"oksButtonIconOnly",children:c}):c!=null?n.jsx("span",{className:"oksButtonLabel",children:c}):null,x!==void 0?n.jsx("span",{className:"oksButtonEndContent",children:x}):null,C&&b==="end"&&!Ve?n.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"end",children:Ae}):null]})});O.displayName="Button";zt(`@layer components {
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
`);function Bk(r,l){return[r,typeof l=="string"?l:""].filter(Boolean).join(" ")}var _d=h.forwardRef((r,l)=>{const{children:c,variant:d="solid",color:u="default",size:p="md",radius:m="md",fullWidth:y=!1,isDisabled:x=!1,className:v,role:b="group",style:w,...S}=r,F=h.Children.map(c,C=>{if(!h.isValidElement(C)||C.type!==O)return C;const T={};return C.props.variant===void 0&&(T.variant=d),C.props.color===void 0&&(T.color=u),C.props.size===void 0&&(T.size=p),C.props.radius===void 0&&(T.radius=m),C.props.fullWidth===void 0&&(T.fullWidth=y),C.props.isDisabled===void 0&&(T.isDisabled=x),h.cloneElement(C,T)});return n.jsx("div",{...S,ref:l,role:b,"data-variant":d,"data-color":u,"data-size":p,"data-radius":m,"data-full-width":y?"true":"false","data-disabled":x?"true":"false",className:Bk("oksButtonGroup",v),style:w,children:F})});_d.displayName="ButtonGroup";zt(`@layer components {
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
`);function jr(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}var dm=[50,100,200,300,400,500,600,700,800,900,950];function Dd(r){const l=Kn(r,50,950);let d=dm[0]??500,u=Math.abs(d-l);for(const p of dm){const m=Math.abs(p-l);m<u&&(d=p,u=m)}return d}function Sr(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}var nt=h.forwardRef((r,l)=>{const{children:c,variant:d="solid",size:u="md",color:p="default",radius:m="full",colorDepth:y=500,avatar:x,startContent:v,endContent:b,isDisabled:w=!1,onClose:S,classNames:F,className:C,style:T,...N}=r,R=w,Z=typeof y=="number"?Dd(y):500,M=Dd(Z+100),$=Dd(Z+200),G=Z<=400?"#000":"#fff",I={"--oks-chip-tone":Sr(p,Z),"--oks-chip-tone-hover":Sr(p,M),"--oks-chip-tone-active":Sr(p,$),"--oks-chip-tone-50":Sr(p,50),"--oks-chip-tone-100":Sr(p,100),"--oks-chip-tone-700":Sr(p,700),"--oks-chip-solid-fg":G},Y=b??n.jsx("span",{"aria-hidden":"true",children:"×"}),V=typeof S=="function"?n.jsx("button",{type:"button",className:jr("oksChipCloseButton",F?.closeButton),"aria-label":"Close",disabled:R,onClick:he=>{he.stopPropagation(),R||S(he)},children:Y}):null;return n.jsxs("div",{...N,ref:l,"aria-disabled":R?"true":void 0,"data-variant":d,"data-size":u,"data-color":p,"data-radius":m,"data-disabled":R?"true":"false",className:jr(jr("oksChip",F?.base),C),style:{...I,...T},children:[d==="dot"?n.jsx("span",{className:jr("oksChipDot",F?.dot),"aria-hidden":"true"}):null,x!=null?n.jsx("span",{className:jr("oksChipAvatar",F?.avatar),children:x}):null,v,c!=null?n.jsx("span",{className:jr("oksChipContent",F?.content),children:c}):null,V??b]})});nt.displayName="Chip";zt(`@layer components {
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
`);function Ak(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}var um=[50,100,200,300,400,500,600,700,800,900,950];function Ok(r){const l=Kn(r,50,950);let d=um[0]??500,u=Math.abs(d-l);for(const p of um){const m=Math.abs(p-l);m<u&&(d=p,u=m)}return d}function zk(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #d1d5db))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}var ua=h.forwardRef((r,l)=>{const{orientation:c="horizontal",variant:d="fullWidth",color:u,colorDepth:p=300,thickness:m,children:y,className:x,style:v,...b}=r,w=u??"primary",S=typeof p=="number"?Ok(p):300,F=m!==void 0?{"--oks-divider-thickness":typeof m=="number"?`${m}px`:m}:{},C={"--oks-divider-border":zk(w,S),...F},T=b["aria-label"],N=typeof T=="string"?T:typeof y=="string"?y:void 0,R={...C,...v??{}},Z=Ak(y&&c==="horizontal"?"oksDivider oksDividerWithText":"oksDivider",x);return c==="vertical"?n.jsx("div",{...b,role:"separator","aria-orientation":"vertical","aria-label":N,ref:l,className:Z,"data-orientation":"vertical","data-variant":d,"data-color":w,style:R}):y?n.jsxs("div",{...b,role:"separator","aria-orientation":"horizontal","aria-label":N,ref:l,className:Z,"data-orientation":"horizontal","data-variant":d,"data-color":w,style:R,children:[n.jsx("span",{className:"oksDividerLine","aria-hidden":"true"}),n.jsx("span",{className:"oksDividerLabel",children:y}),n.jsx("span",{className:"oksDividerLine","aria-hidden":"true"})]}):n.jsx("hr",{...b,role:"separator","aria-orientation":"horizontal","aria-label":N,ref:l,className:Z,"data-orientation":"horizontal","data-variant":d,"data-color":w,style:R})});ua.displayName="Divider";zt(`@layer components {
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
`);function Ds(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}var pm=[50,100,200,300,400,500,600,700,800,900,950];function Ek(r){const l=Math.min(950,Math.max(50,r));let d=pm[0]??500,u=Math.abs(d-l);for(const p of pm){const m=Math.abs(p-l);m<u&&(d=p,u=m)}return d}function Fk(r){return r==="end"||r==="after"?"end":"start"}function Rk(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}function Mk(r,l){return r==="black"||r==="white"?r:Rk(r,l)}function Pk(r){return typeof r=="object"&&r!==null&&"message"in r&&r.message!==void 0}function $t(r){const{title:l="Title",as:c,tag:d,color:u,colorDepth:p=500,icon:m,iconPosition:y="start",tooltip:x,className:v,titleClassName:b,classNames:w,style:S}=r,F=Ek(p),C=Fk(y),T=c??d??"h4",N=u??"black",R=(()=>{if(x==null||x===!1)return null;if(Pk(x)){if(x.message===void 0||x.message===null)return null;const I=x.side===void 0?void 0:x.align==="start"?`${x.side}-start`:x.align==="end"?`${x.side}-end`:x.side,Y={...x.disabled!==void 0?{isDisabled:x.disabled}:{},...I!==void 0?{placement:I}:{},...x.openDelay!==void 0?{delay:x.openDelay}:{},...x.closeDelay!==void 0?{closeDelay:x.closeDelay}:{},...x.className!==void 0?{className:x.className}:{}};return{content:x.message,props:Y}}const G=typeof l=="string"&&l.trim().length>0?l:null;if(x===!0)return G?{content:G,props:{}}:null;if(typeof x=="object"){if("props"in x||"content"in x){const Y=x,V=Y.content!==void 0?Y.content:G;return V?{content:V,props:Y.props??{}}:null}return G?{content:G,props:x}:null}return null})(),Z=R!==null,M=()=>m==null?null:n.jsx("span",{className:Ds("oksPageTitleIcon",w?.icon),children:m}),$=n.jsxs("div",{className:Ds(Ds("oksPageTitle",w?.base),v),style:{color:Mk(N,F),...S},"data-color":N,"data-icon-position":C,"data-has-tooltip":Z?"true":"false",children:[C==="start"?M():null,n.jsx(T,{className:Ds(Ds("oksPageTitleTitle",w?.title),b),children:l}),C==="end"?M():null]});if(R){const G={...R.props,content:R.content};return n.jsx(Xe,{...G,children:$})}return $}function Lk(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}var ii=h.forwardRef(({ariaLabel:r,iconSize:l=16,icon:c,iconClassName:d,...u},p)=>{const m=c===void 0?n.jsx(Zm,{size:l,className:d}):d?h.isValidElement(c)?h.cloneElement(c,{className:Lk(c.props.className,d)}):n.jsx("span",{className:d,children:c}):c;return n.jsx("button",{ref:p,type:"button","aria-label":r,...u,children:m})});ii.displayName="CloseButton";zt(`@layer components {
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
`);function Ik(r,l){return[r,typeof l=="string"?l:""].filter(Boolean).join(" ")}function _k(r){return typeof r=="number"?`${r}px`:r==="sm"?"360px":r==="md"?"420px":r==="lg"?"520px":typeof r=="string"?r:"420px"}function Uk(r){return typeof r=="number"?`${r}px`:r==="sm"?"280px":r==="md"?"360px":r==="lg"?"480px":typeof r=="string"?r:"360px"}function Hk(r){return r==="left"?"slideRight":r==="right"?"slideLeft":r==="top"?"slideDown":"slideUp"}function go(r){const{isOpen:l,onClose:c,position:d="right",title:u,children:p,actions:m,dismissible:y=!0,closeLabel:x="Close drawer",ariaLabel:v="Drawer",width:b,height:w,closeOnOutsideClick:S=!0,closeOnEscape:F=!0,portal:C=!0,container:T,zIndex:N,blur:R,backgroundOpacity:Z,animationDuration:M,easing:$,initialFocusRef:G,backdrop:I,headers:Y,className:V,style:K}=r,ee=`oks-drawer-title-${h.useId().replace(/[:]/g,"")}`,ge=h.useRef(null),re=h.useRef(null);h.useEffect(()=>{if(!l||typeof document>"u")return;re.current=document.activeElement;let ie=!1;const De=()=>{if(ie)return;const ae=G?.current??ge.current;if(ae){ae.focus?.();return}typeof window<"u"&&window.requestAnimationFrame(De)};return De(),()=>{ie=!0;const ae=re.current;ae instanceof HTMLElement&&document.contains(ae)&&ae.focus()}},[G,l]);const be=h.useMemo(()=>_k(b),[b]),se=h.useMemo(()=>Uk(w),[w]),_={...h.useMemo(()=>({"--oks-drawer-width":be,"--oks-drawer-height":se}),[se,be]),...K??{}},Q=h.useMemo(()=>{if(!I)return{};const{isOpen:ie,onClose:De,children:ae,...ne}=I;return ne},[I]),pe={closeOnOutsideClick:S,closeOnEscape:F,portal:C,...T!==void 0?{container:T}:{},...N!==void 0?{zIndex:N}:{},...R!==void 0?{blur:R}:{},...Z!==void 0?{backgroundOpacity:Z}:{},...M!==void 0?{animationDuration:M}:{},...$!==void 0?{easing:$}:{},animationType:Hk(d),contentFullSize:!0,contentClassName:"oksDrawerBackdropContent",...Q},fe=Y?.title??u,{title:k,...B}=Y??{},E={as:"h4",...B,...fe!=null?{title:n.jsx("span",{id:ee,children:fe})}:{}},j=y||E.title!==void 0,W=fe!=null?ee:void 0,te=W!==void 0?{"aria-labelledby":W}:{"aria-label":v};return n.jsx(Xn,{isOpen:l,onClose:c,...pe,children:n.jsxs("div",{ref:ge,role:"dialog","aria-modal":"true",tabIndex:-1,"data-position":d,className:Ik("oksDrawer",V),style:_,...te,children:[j?n.jsxs("div",{className:"oksDrawerHeader",children:[n.jsx("div",{className:"oksDrawerHeaderTitle",children:E.title!==void 0&&E.title!==null?n.jsx($t,{...E}):null}),y?n.jsx(ii,{className:"oksDrawerClose",ariaLabel:x,onClick:()=>c?.()}):null]}):null,n.jsx("div",{className:"oksDrawerBody",children:p}),m!=null?n.jsx("div",{className:"oksDrawerFooter",children:m}):null]})})}zt(`@layer components {
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
`);function vt(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}function fm(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}function Qm(...r){return l=>{for(const c of r)c&&(typeof c=="function"?c(l):c.current=l)}}function Vk(r){return r.startsWith(".$")?r.slice(2):r}function Gk(r){const[l,c]=r.split("-");return{side:l==="top"||l==="bottom"||l==="left"||l==="right"?l:"bottom",align:c==="start"||c==="end"?c:"center"}}var Wm=h.createContext(null);function Jm(){const r=h.useContext(Wm);if(!r)throw new Error("oks-ui Dropdown: missing context.");return r}var ex=h.createContext(null);function Yk(){const r=h.useContext(ex);if(!r)throw new Error("oks-ui DropdownMenu: missing context.");return r}function Wl(r){return h.isValidElement(r)&&r.type===Ue}function qk(r){return h.isValidElement(r)&&r.type===Ns}function $k(r,l){return typeof l.textValue=="string"?l.textValue:typeof l.title=="string"?l.title:typeof l.children=="string"?l.children:String(r)}function Jl(r){const l=r.key;if(l==null)return null;if(typeof l=="string"){const c=Vk(l).trim();return c.length>0?c:null}return l}function hm(r,l){for(const c of r)if(!l.has(c))return c;return null}function mm(r,l){for(let c=r.length-1;c>=0;c--){const d=r[c];if(d&&!l.has(d))return d}return null}function xm(r,l,c,d,u){if(r.length===0)return null;const p=c!==null?r.indexOf(c):-1;if(!u){for(let y=p+d;y>=0&&y<r.length;y+=d){const x=r[y];if(x!=null&&!l.has(x))return x}return null}let m=p;for(let y=0;y<r.length;y++){m=(m+d+r.length)%r.length;const x=r[m];if(x!=null&&!l.has(x))return x}return null}function Kk(r){return!(r.key.length!==1||r.ctrlKey||r.metaKey||r.altKey)}function Td(r){const l=new Set;for(const c of r??[])l.add(c);return l}var Dt=h.forwardRef((r,l)=>{const{children:c,isOpen:d,defaultOpen:u=!1,onOpenChange:p,placement:m="bottom-start",offset:y=8,containerPadding:x=8,shouldFlip:v=!0,portalContainer:b,isDismissable:w=!0,isKeyboardDismissDisabled:S=!1,shouldCloseOnInteractOutside:F,closeOnSelect:C=!0,classNames:T,className:N,style:R}=r,[Z,M]=h.useState(u),$=d!==void 0?d:Z,G=h.useRef(null),I=h.useRef(null),Y=h.useRef("programmatic"),V=h.useRef(void 0),K=h.useId(),he=`oks-dropdown-trigger-${K}`,ee=`oks-dropdown-menu-${K}`,ge=h.useCallback((se,D=!0)=>{if(se||V.current?.(),d===void 0&&M(se),p?.(se),!se&&D){const _=G.current;_&&window.requestAnimationFrame(()=>{_.focus?.()})}},[d,p]),re=h.useCallback(()=>ge(!$,!1),[$,ge]);h.useEffect(()=>{if(!$)return;const se=_=>{_.key==="Escape"&&(S||(_.preventDefault(),ge(!1,!0)))},D=_=>{if(!w)return;const Q=_.target;if(!(Q instanceof Element))return;const pe=G.current,fe=I.current;pe&&pe.contains(Q)||fe&&fe.contains(Q)||F&&!F(Q)||ge(!1,!0)};return document.addEventListener("keydown",se),document.addEventListener("pointerdown",D,{capture:!0}),()=>{document.removeEventListener("keydown",se),document.removeEventListener("pointerdown",D,{capture:!0})}},[$,w,S,ge,F]);const be={open:$,setOpen:ge,toggle:re,openSourceRef:Y,menuOnCloseRef:V,placement:m,offset:y,containerPadding:x,shouldFlip:v,portalContainer:b,isDismissable:w,isKeyboardDismissDisabled:S,...F?{shouldCloseOnInteractOutside:F}:{},closeOnSelect:C,triggerRef:G,menuRef:I,triggerId:he,menuId:ee,...T?{baseClassNames:T}:{}};return n.jsx(Wm.Provider,{value:be,children:n.jsx("div",{ref:l,className:vt(vt("oksDropdown",T?.base),N),style:R,children:n.jsx("div",{className:vt("oksDropdownContent",T?.content),children:c})})})});Dt.displayName="Dropdown";var Tt=h.forwardRef((r,l)=>{const{children:c}=r,d=Jm(),u=c,p=u?.ref,m=x=>{u?.props?.onClick?.(x),!x?.defaultPrevented&&(d.openSourceRef.current="pointer",d.toggle())},y=x=>{u?.props?.onKeyDown?.(x),!x?.defaultPrevented&&(x.key==="Enter"||x.key===" "||x.key==="ArrowDown")&&(x.preventDefault(),d.openSourceRef.current="keyboard",d.setOpen(!0,!1))};return h.cloneElement(c,{id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open?"true":"false","aria-controls":d.menuId,onClick:m,onKeyDown:y,ref:Qm(p,l,x=>{d.triggerRef.current=x instanceof HTMLElement?x:null}),className:vt("oksDropdownTrigger",u?.props?.className)})});Tt.displayName="DropdownTrigger";var Ot=r=>{const{children:l,items:c,onAction:d,disabledKeys:u,onClose:p,selectionMode:m="none",selectedKeys:y,defaultSelectedKeys:x,onSelectionChange:v,disallowEmptySelection:b=!1,variant:w="solid",color:S="default",autoFocus:F=!1,hideEmptyContent:C=!1,hideSelectedIcon:T=!1,shouldFocusWrap:N=!1,closeOnSelect:R,disableAnimation:Z=!1,classNames:M,itemClasses:$,topContent:G,bottomContent:I,emptyContent:Y="No items."}=r,V=Jm(),K=R??V.closeOnSelect,he=h.useMemo(()=>Td(u),[u]),ee=h.useMemo(()=>({"--oks-dropdown-tone":fm(S,500),"--oks-dropdown-tone-600":fm(S,600)}),[S]),[ge,re]=h.useState(()=>x==="all"?"all":Td(x)),be=h.useMemo(()=>y==="all"?"all":y!==void 0?Td(y):ge,[y,ge]),se=h.useCallback(le=>{y===void 0&&re(le)},[y]),{side:D,align:_}=h.useMemo(()=>Gk(V.placement),[V.placement]),[Q,pe]=h.useState(null),fe=h.useRef(new Map),k=h.useRef(new Map),B=h.useRef({buffer:"",timer:null}),E=h.useRef(null);h.useEffect(()=>{if(V.open)return V.menuOnCloseRef.current=p,()=>{V.menuOnCloseRef.current===p&&(V.menuOnCloseRef.current=void 0)}},[V.menuOnCloseRef,V.open,p]);const j=h.useCallback(()=>{const le=V.triggerRef.current,je=V.menuRef.current;if(!le||!je)return;const Pe=le.getBoundingClientRect(),Ze=je.getBoundingClientRect(),Ne=li({triggerRect:Pe,tooltipRect:Ze,side:D,align:_,offset:V.offset,collisionPadding:V.containerPadding,shouldFlip:V.shouldFlip,arrowSize:0,arrowPaddingX:0,arrowPaddingY:0,strategy:"fixed"});pe({top:Ne.top,left:Ne.left,placedSide:Ne.placedSide,placedAlign:_})},[_,V.containerPadding,V.offset,V.shouldFlip,V.triggerRef,V.menuRef,D]);h.useEffect(()=>{if(!V.open)return;j();const le=()=>j(),je=()=>j();return window.addEventListener("scroll",le,{passive:!0,capture:!0}),window.addEventListener("resize",je,{passive:!0}),()=>{window.removeEventListener("scroll",le,{capture:!0}),window.removeEventListener("resize",je)}},[V.open,j]),h.useEffect(()=>{if(!V.open)return;const le=V.menuRef.current;if(!le||typeof ResizeObserver>"u")return;const je=new ResizeObserver(()=>j());return je.observe(le),()=>je.disconnect()},[V.open,j]);const W=h.useMemo(()=>{if(c!==void 0){const Ne=l;if(typeof Ne!="function")return[];const Ye=[];for(const Le of c){const He=Ne(Le);if(!Wl(He))continue;const qe=Jl(He);qe&&Ye.push({key:qe,element:He})}return Ye.length>0?[{implicit:!0,items:Ye}]:[]}const le=h.Children.toArray(l),je=[],Pe=[];for(const Ne of le){if(qk(Ne)){const Ye=[];if(Ne.props.items!==void 0){const Le=Ne.props.children;if(typeof Le=="function")for(const He of Ne.props.items){const qe=Le(He);if(!Wl(qe))continue;const Je=Jl(qe);Je&&Ye.push({key:Je,element:qe})}}else for(const Le of h.Children.toArray(Ne.props.children)){if(!Wl(Le))continue;const He=Jl(Le);He&&Ye.push({key:He,element:Le})}Pe.push({...Ne.props.title!==void 0?{title:Ne.props.title}:{},...typeof Ne.props["aria-label"]=="string"?{ariaLabel:Ne.props["aria-label"]}:{},...Ne.props.hideSelectedIcon!==void 0?{hideSelectedIcon:Ne.props.hideSelectedIcon}:{},...Ne.props.showDivider!==void 0?{showDivider:Ne.props.showDivider}:{},...Ne.props.classNames?{classNames:Ne.props.classNames}:{},...Ne.props.itemClasses?{itemClasses:Ne.props.itemClasses}:{},items:Ye});continue}if(Wl(Ne)){const Ye=Jl(Ne);if(!Ye)continue;je.push({key:Ye,element:Ne})}}const Ze=[];je.length>0&&Ze.push({implicit:!0,items:je});for(const Ne of Pe)Ze.push(Ne);return Ze},[l,c]),te=h.useMemo(()=>{const le=[];for(const je of W)for(const Pe of je.items)le.push(Pe);return le},[W]),ie=h.useMemo(()=>te.map(le=>le.key),[te]),De=h.useMemo(()=>{const le=new Map;for(const je of te)le.set(je.key,je.element.props);return le},[te]),ae=h.useMemo(()=>{const le=new Set(he);for(const je of te)je.element.props.isDisabled&&le.add(je.key);return le},[he,te]),[ne,Fe]=h.useState(null),we=h.useCallback((le,je,Pe)=>{je?fe.current.set(le,je):fe.current.delete(le),k.current.set(le,Pe)},[]),Te=h.useCallback(le=>{if(Fe(le),le===null)return;const je=fe.current.get(le);je&&je.focus()},[Fe]);h.useEffect(()=>{if(!V.open)return;const je=V.openSourceRef.current==="keyboard"&&F===!1?"first":F,Pe=je===!0||je==="first"?hm(ie,ae):je==="last"?mm(ie,ae):null;Fe(Pe),window.requestAnimationFrame(()=>{Pe!==null?fe.current.get(Pe)?.focus():E.current?.focus()})},[F,ae,V.open,V.openSourceRef,ie]);const ze=h.useCallback((le,je)=>{if(ae.has(le))return;if(je.onAction?.(),d?.(le),m!=="none"&&je.isReadOnly!==!0){const Ze=ie.filter(Le=>!ae.has(Le)),Ne=be==="all"?new Set(Ze):new Set(be);let Ye=Ne;if(m==="single"){const Le=Ne.has(le);Ne.clear(),Le&&b===!1||Ne.add(le)}else Ne.has(le)?(b===!1||Ne.size>1)&&Ne.delete(le):Ne.add(le);if(Ye=Ne,se(Ye),v){const Le=Ye;Le.anchorKey=le,Le.currentKey=le,v(Le)}}(je.closeOnSelect??K)&&(V.setOpen(!1,!0),je.onClose?.())},[K,ae,b,V,ie,d,p,v,be,m,se]),Oe=le=>{if(le.key==="ArrowDown"){le.preventDefault(),Te(xm(ie,ae,ne,1,N));return}if(le.key==="ArrowUp"){le.preventDefault(),Te(xm(ie,ae,ne,-1,N));return}if(le.key==="Home"){le.preventDefault(),Te(hm(ie,ae));return}if(le.key==="End"){le.preventDefault(),Te(mm(ie,ae));return}if(le.key==="Enter"||le.key===" "){if(le.preventDefault(),ne!==null){const je=De.get(ne);je&&ze(ne,je)}return}if(Kk(le)){const je=`${B.current.buffer}${le.key}`.toLowerCase();B.current.timer&&window.clearTimeout(B.current.timer),B.current.buffer=je,B.current.timer=window.setTimeout(()=>{B.current.buffer="",B.current.timer=null},350);const Pe=ne!==null?ie.indexOf(ne):-1,Ze=ie.length;for(let Ne=1;Ne<=Ze;Ne++){const Ye=(Pe+Ne)%Ze,Le=ie[Ye];if(Le==null||ae.has(Le))continue;if((k.current.get(Le)?.textValue??String(Le)).toLowerCase().startsWith(je)){Te(Le);break}}}},de={disabledKeys:ae,selectionMode:m,selectedKeys:be,setSelectedKeys:se,disallowEmptySelection:b,...d?{onAction:d}:{},...v?{onSelectionChange:v}:{},...p?{onClose:p}:{},onItemAction:ze,closeOnSelect:K,hideSelectedIcon:T,setOpen:V.setOpen,focusedKey:ne,setFocusedKey:Fe,registerItemRef:we,...$?{itemClasses:$}:{},menuVariant:w,menuColor:S,shouldFocusWrap:N,disableAnimation:Z};if(!V.open)return null;const ke=te.length>0,ve=Q===null?V.placement:`${Q.placedSide}-${Q.placedAlign}`;return n.jsx(Br,{container:V.portalContainer,children:n.jsx(ex.Provider,{value:de,children:n.jsxs("div",{ref:le=>{V.menuRef.current=le},id:V.menuId,className:vt("oksDropdownMenu",M?.base),"data-open":"true","data-placement":ve,"data-variant":w,"data-color":S,style:{...ee,position:"fixed",top:Q?.top??-9999,left:Q?.left??-9999},children:[G!=null?n.jsx("div",{className:"oksDropdownTopContent",children:G}):null,n.jsx("div",{ref:E,role:"menu","aria-labelledby":V.triggerId,className:vt("oksDropdownList",M?.list),tabIndex:-1,onKeyDown:Oe,children:ke?W.map((le,je)=>n.jsx(Xk,{section:le},je)):C?null:n.jsx("div",{className:vt("oksDropdownEmpty",M?.emptyContent),children:Y??null})}),I!=null?n.jsx("div",{className:"oksDropdownBottomContent",children:I}):null]})})})};function Xk({section:r}){const c=(r.implicit===!0?!1:r.title===void 0||r.title===null)?r.ariaLabel:void 0,d=r.title!==void 0&&r.title!==null?n.jsx("div",{className:vt("oksDropdownSectionHeading",r.classNames?.heading),children:r.title}):null,u=r.showDivider===!0;return n.jsxs("div",{className:vt("oksDropdownSection",r.classNames?.base),children:[d,n.jsx("div",{role:"group","aria-label":c,className:vt("oksDropdownSectionGroup",r.classNames?.group),children:r.items.map(({key:p,element:m})=>h.cloneElement(m,{itemKey:p,...r.hideSelectedIcon!==void 0?{__sectionHideSelectedIcon:r.hideSelectedIcon}:{},...r.itemClasses?{__sectionItemClasses:r.itemClasses}:{}}))}),u?n.jsx("div",{className:vt("oksDropdownSectionDivider",r.classNames?.divider)}):null]})}var Ue=h.forwardRef((r,l)=>{const{children:c,title:d,description:u,shortcut:p,startContent:m,endContent:y,selectedIcon:x,showDivider:v=!1,href:b,target:w,rel:S,download:F,ping:C,referrerPolicy:T,isDisabled:N=!1,isSelected:R,isReadOnly:Z=!1,hideSelectedIcon:M,closeOnSelect:$,classNames:G,onPress:I,onPressStart:Y,onPressEnd:V,onPressChange:K,onPressUp:he,onKeyDown:ee,onKeyUp:ge,onClick:re,itemKey:be}=r,se=Yk(),D=be??null,_=D!=null&&String(D).trim().length>0,Q=!_||N===!0||se.disabledKeys.has(D),pe=se.selectionMode==="none"?!1:se.selectedKeys==="all"?!0:se.selectedKeys.has(D),fe=typeof R=="boolean"?R:pe,k=se.focusedKey===D,B=se.selectionMode==="multiple"?"menuitemcheckbox":se.selectionMode==="single"?"menuitemradio":"menuitem",E=se.selectionMode==="none"?void 0:fe?"true":"false",j=r.__sectionItemClasses,W=r.__sectionHideSelectedIcon,te=M??W??se.hideSelectedIcon,ie=d??c,De=$k(D??"",r),ae=vt(vt(vt("oksDropdownItem",se.itemClasses?.base),j?.base),G?.base),[ne,Fe]=h.useState(!1),we=ke=>{Q||(ne||(Y?.(ke),K?.(!0)),Fe(!0))},Te=ke=>{ne&&(V?.(ke),K?.(!1)),Fe(!1)},ze=()=>{Q||_&&(se.setFocusedKey(D),se.onItemAction(D,r))},Oe=b?"a":"div",de=n.jsxs(Oe,{ref:Qm(l,ke=>{_&&se.registerItemRef(D,ke instanceof HTMLElement?ke:null,{key:D,disabled:Q,textValue:De})}),role:B,"aria-checked":E,"aria-disabled":Q?"true":void 0,tabIndex:-1,"data-disabled":Q?"true":"false","data-selected":fe?"true":"false","data-focused":k?"true":"false",className:ae,href:b,target:w,rel:S,download:F,ping:C,referrerPolicy:T,onMouseMove:()=>{Q||se.setFocusedKey(D)},onFocus:()=>{Q||se.setFocusedKey(D)},onPointerDown:ke=>{we(ke)},onPointerUp:ke=>{Q||(he?.(ke),Te(ke))},onPointerLeave:ke=>{Te(ke)},onPointerCancel:ke=>{Te(ke)},onKeyDown:ke=>{ee?.(ke),!ke.defaultPrevented&&(ke.key==="Enter"||ke.key===" ")&&we(ke)},onKeyUp:ke=>{if(ge?.(ke),!ke.defaultPrevented&&(ke.key==="Enter"||ke.key===" ")){if(Q)return;he?.(ke),Te(ke)}},onBlur:ke=>{Te(ke)},onClick:ke=>{re?.(ke),!ke.defaultPrevented&&(Q||(I?.(ke),ze()))},children:[m!=null?n.jsx("span",{className:"oksDropdownItemStartContent","aria-hidden":"true",children:m}):null,n.jsxs("span",{className:vt(vt(vt("oksDropdownItemWrapper",se.itemClasses?.wrapper),j?.wrapper),G?.wrapper),children:[n.jsx("span",{className:vt(vt(vt("oksDropdownItemTitle",se.itemClasses?.title),j?.title),G?.title),children:ie}),u!=null?n.jsx("span",{className:vt(vt(vt("oksDropdownItemDescription",se.itemClasses?.description),j?.description),G?.description),children:u}):null]}),p!=null?n.jsx("span",{className:vt(vt(vt("oksDropdownItemShortcut",se.itemClasses?.shortcut),j?.shortcut),G?.shortcut),children:p}):null,y!=null?n.jsx("span",{className:"oksDropdownItemEndContent","aria-hidden":"true",children:y}):fe&&te!==!0?n.jsx("span",{className:vt(vt(vt("oksDropdownItemSelectedIcon",se.itemClasses?.selectedIcon),j?.selectedIcon),G?.selectedIcon),"aria-hidden":"true",children:x??"✓"}):null]});return v?n.jsxs(n.Fragment,{children:[de,n.jsx("div",{className:"oksDropdownItemDivider","aria-hidden":"true"})]}):de});Ue.displayName="DropdownItem";var Ns=r=>null;Ns.displayName="DropdownSection";zt(`@layer components {
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
`);function Zk(r,l){return[r,typeof l=="string"?l:""].filter(Boolean).join(" ")}function Qk(r){return typeof r=="number"?`${r}px`:r==="sm"?"420px":r==="md"?"640px":r==="lg"?"860px":typeof r=="string"?r:"640px"}function _o(r){const{isOpen:l,onClose:c,title:d,children:u,actions:p,size:m="md",dismissible:y=!0,closeLabel:x="Close modal",closeOnOutsideClick:v=!0,closeOnEscape:b=!0,portal:w=!0,container:S,zIndex:F,blur:C,backgroundOpacity:T,animationDuration:N,animationType:R,easing:Z,initialFocusRef:M,backdrop:$,headers:G,divider:I,className:Y,style:V}=r,he=`oks-modal-title-${h.useId().replace(/[:]/g,"")}`,ee=h.useRef(null),ge=h.useRef(null);h.useEffect(()=>{if(!l||typeof document>"u")return;ge.current=document.activeElement;let W=!1;const te=()=>{if(W)return;const ie=M?.current??ee.current;if(ie){ie.focus?.();return}typeof window<"u"&&window.requestAnimationFrame(te)};return te(),()=>{W=!0;const ie=ge.current;ie instanceof HTMLElement&&document.contains(ie)&&ie.focus()}},[l,M]);const re=h.useMemo(()=>Qk(m),[m]),se={...h.useMemo(()=>({"--oks-modal-width":re}),[re]),...V??{}},D=h.useMemo(()=>{if(!$)return{};const{isOpen:W,onClose:te,children:ie,...De}=$;return De},[$]),_={closeOnOutsideClick:v,closeOnEscape:b,portal:w,...S!==void 0?{container:S}:{},...F!==void 0?{zIndex:F}:{},...C!==void 0?{blur:C}:{},...T!==void 0?{backgroundOpacity:T}:{},...N!==void 0?{animationDuration:N}:{},...R!==void 0?{animationType:R}:{},...Z!==void 0?{easing:Z}:{},...D},Q=G?.title??d,{title:pe,...fe}=G??{},k={as:"h4",...fe,...Q!=null?{title:n.jsx("span",{id:he,children:Q})}:{}},B=y||k.title!==void 0,E=Q!=null?he:void 0,j={color:"secondary",colorDepth:200,...I??{}};return n.jsx(Xn,{isOpen:l,onClose:c,..._,children:n.jsxs("div",{ref:ee,role:"dialog","aria-modal":"true","aria-labelledby":E,tabIndex:-1,className:Zk("oksModal",Y),style:se,children:[B?n.jsxs("div",{className:"oksModalHeader",children:[n.jsx("div",{className:"oksModalHeaderTitle",children:k.title!==void 0&&k.title!==null?n.jsx($t,{...k}):null}),y?n.jsx(ii,{className:"oksModalClose",ariaLabel:x,onClick:()=>c?.()}):null]}):null,B?n.jsx(ua,{...j}):null,n.jsx("div",{className:"oksModalBody",children:u}),p!=null?n.jsx("div",{className:"oksModalFooter",children:p}):null]})})}function ln(r){return null}ln.displayName="Tab";zt(`@layer components {
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
`);function fo(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}function Nd(r,l){const c=`var(--oks-color-default-${l}, var(--oks-color-primary-${l}, #3b82f6))`;return r==="default"?c:`var(--oks-color-${r}-${l}, ${c})`}function Bd(r){return String(r).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function gm(r){return h.isValidElement(r)&&r.type===ln}function vm(r){return r.startsWith(".$")?r.slice(2):r}function bm(r,l){for(const c of r)if(!l.has(c))return c}var tu=h.forwardRef(function(l,c){const{children:d,variant:u="solid",color:p="default",size:m="md",radius:y="full",fullWidth:x=!1,items:v,disabledKeys:b,selectedKey:w,defaultSelectedKey:S,shouldSelectOnPressUp:F=!0,keyboardActivation:C="automatic",disableCursorAnimation:T=!1,isDisabled:N=!1,disableAnimation:R=!1,classNames:Z,className:M,placement:$="top",isVertical:G=!1,destroyInactiveTabPanel:I=!0,onSelectionChange:Y,...V}=l,K=h.useMemo(()=>{if(v!==void 0){const ke=d;if(typeof ke!="function")return[];const ve=[];for(const le of v){const je=ke(le);if(!gm(je))continue;const Pe=je.key;Pe!=null&&ve.push({key:typeof Pe=="string"?vm(Pe):Pe,props:je.props})}return ve}const de=[];for(const ke of h.Children.toArray(d)){if(!gm(ke))continue;const ve=ke.key;ve!=null&&de.push({key:typeof ve=="string"?vm(ve):ve,props:ke.props})}return de},[d,v]),he=h.useMemo(()=>{const de=new Set;for(const ke of b??[])de.add(ke);for(const ke of K)ke.props.isDisabled&&de.add(ke.key);return de},[b,K]),ee=h.useMemo(()=>K.map(de=>de.key),[K]),ge=w!==void 0,[re,be]=h.useState(()=>S!==void 0?S:bm(ee,he)),se=h.useMemo(()=>G?!0:$==="start"||$==="end",[G,$]),D=h.useMemo(()=>G?"start":$,[G,$]),_=h.useMemo(()=>{const de=ge?w:re;return de!=null&&ee.includes(de)&&!he.has(de)?de:bm(ee,he)},[ge,he,re,ee,w]),Q=h.useCallback(de=>{N||he.has(de)||ee.includes(de)&&(ge||be(de),Y?.(de))},[ge,he,N,ee,Y]),pe=h.useRef(new Map),fe=h.useCallback((de,ke)=>{pe.current.set(de,ke)},[]),k=h.useId(),B=h.useMemo(()=>`oks-${V.id?Bd(V.id):Bd(`tabs-${k}`)}`,[k,V.id]),E=h.useCallback(de=>{const ke=Bd(de);return{tab:`${B}-tab-${ke}`,panel:`${B}-panel-${ke}`}},[B]),j=h.useRef(null),W=h.useRef(null),te=h.useCallback(()=>{if(u!=="underlined")return;const de=j.current,ke=W.current;if(!de||!ke)return;const ve=_;if(ve===void 0)return;const le=pe.current.get(ve);if(!le)return;const je=de.getBoundingClientRect(),Pe=le.getBoundingClientRect();if(se){const Ze=Math.max(0,Pe.top-je.top),Ne=Pe.height;ke.style.setProperty("--oks-tabs-cursor-y",`${Ze}px`),ke.style.setProperty("--oks-tabs-cursor-h",`${Ne}px`)}else{const Ze=Math.max(0,Pe.left-je.left),Ne=Pe.width;ke.style.setProperty("--oks-tabs-cursor-x",`${Ze}px`),ke.style.setProperty("--oks-tabs-cursor-w",`${Ne}px`)}},[se,_,u]);h.useEffect(()=>{te()},[te]),h.useEffect(()=>{if(u!=="underlined")return;const de=()=>te();return window.addEventListener("resize",de),()=>window.removeEventListener("resize",de)},[te,u]);const ie=de=>{if(N||!j.current)return;const ve=ee;if(ve.length===0)return;const le=globalThis.document?.activeElement,je=(()=>{for(const He of ve){const qe=pe.current.get(He);if(qe&&le&&qe===le)return He}return _})(),Pe=je!==void 0?ve.indexOf(je):-1,Ze=He=>{if(ve.length===0)return;let qe=Pe>=0?Pe:0;for(let Je=0;Je<ve.length;Je++){qe=(qe+He+ve.length)%ve.length;const Ie=ve[qe];if(he.has(Ie))continue;pe.current.get(Ie)?.focus(),C==="automatic"&&Q(Ie);return}},Ne=He=>{const qe=He==="start"?ve:[...ve].reverse();for(const Je of qe){if(he.has(Je))continue;pe.current.get(Je)?.focus(),C==="automatic"&&Q(Je);return}},Ye=!se,Le=de.key;if(Le==="Home"){de.preventDefault(),Ne("start");return}if(Le==="End"){de.preventDefault(),Ne("end");return}if(Ye&&Le==="ArrowRight"||!Ye&&Le==="ArrowDown"){de.preventDefault(),Ze(1);return}if(Ye&&Le==="ArrowLeft"||!Ye&&Le==="ArrowUp"){de.preventDefault(),Ze(-1);return}if(C==="manual"&&(Le==="Enter"||Le===" ")){if(!le)return;for(const He of ve){const qe=pe.current.get(He);if(qe&&qe===le){de.preventDefault(),Q(He);return}}}},De=fo(fo("oksTabsRoot",Z?.base),M),ae=fo("oksTablist",Z?.tabList),ne=fo("oksTabsCursor",Z?.cursor),Fe="oksTabsPanels",we=fo("oksTabsPanel",Z?.panel),ze={...{"--oks-tabs-tone":Nd(p,500),"--oks-tabs-tone-50":Nd(p,50),"--oks-tabs-tone-700":Nd(p,700)},...V.style??{}},Oe=h.useMemo(()=>{if(_!==void 0)return K.find(de=>de.key===_)},[K,_]);return n.jsxs("div",{...V,ref:c,className:De,style:ze,"data-variant":u,"data-color":p,"data-size":m,"data-radius":y,"data-full-width":x?"true":"false","data-placement":D,"data-vertical":se?"true":"false","data-disabled":N?"true":"false","data-motion":R?"reduced":"default","data-disable-cursor-animation":T?"true":"false",children:[n.jsxs("div",{className:ae,role:"tablist","aria-orientation":se?"vertical":"horizontal",ref:j,onKeyDown:ie,children:[u==="underlined"?n.jsx("div",{className:ne,ref:W,"aria-hidden":"true"}):null,K.map(de=>{const ke=de.key===_,ve=N||he.has(de.key),le=E(de.key),je=fo("oksTabsTabWrapper",Z?.tabWrapper),Pe=fo("oksTabsTab",Z?.tab),Ze=fo("oksTabsTabContent",Z?.tabContent),Ne=de.props.shouldSelectOnPressUp??F,Ye=()=>Q(de.key),Le=Je=>{fe(de.key,Je),de.props.tabRef&&(de.props.tabRef.current=Je)},He={role:"tab",id:le.tab,"aria-selected":ke,"aria-controls":le.panel,tabIndex:ke?0:-1,"data-selected":ke?"true":void 0,"data-disabled":ve?"true":void 0},qe=n.jsx("span",{className:Ze,children:de.props.title});return n.jsx("div",{className:je,children:de.props.href?n.jsx("a",{...He,className:Pe,href:de.props.href,target:de.props.target,rel:de.props.rel,download:de.props.download,ping:de.props.ping,referrerPolicy:de.props.referrerPolicy,"aria-disabled":ve?"true":void 0,onClick:ve?Je=>{Je.preventDefault()}:Ne?()=>Ye():void 0,onMouseDown:ve||Ne?void 0:Je=>{Je.preventDefault(),Ye()},ref:Le,children:qe}):n.jsx("button",{...He,type:"button",className:Pe,disabled:ve,onClick:Ne?Ye:void 0,onMouseDown:Ne?void 0:Je=>{Je.preventDefault(),Ye()},ref:Le,children:qe})},String(de.key))})]}),n.jsx("div",{className:Fe,children:I?Oe?n.jsx("div",{className:we,role:"tabpanel",id:E(Oe.key).panel,"aria-labelledby":E(Oe.key).tab,children:Oe.props.children}):null:K.map(de=>{const ke=de.key===_,ve=E(de.key);return n.jsx("div",{className:we,role:"tabpanel",id:ve.panel,"aria-labelledby":ve.tab,hidden:!ke,children:de.props.children},String(de.key))})})]})});tu.displayName="Tabs";function Wk(r){return r.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")}function Ad(){return typeof window<"u"&&typeof document<"u"}function Jk(r){const l=h.useCallback(()=>!Ad()||!r?null:new URL(window.location.href).searchParams.get(r),[r]),c=h.useCallback(u=>{if(!Ad()||!r)return;const p=new URL(window.location.href),m=p.searchParams;u==null||u===""?m.delete(r):m.set(r,u);const y=`${p.pathname}?${m.toString()}${p.hash??""}`;window.history.pushState({},"",y);const x=new PopStateEvent("popstate");window.dispatchEvent(x)},[r]),d=h.useCallback(u=>{if(!Ad()||!r)return()=>{};const p=()=>u(l());return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[l,r]);return{get:l,set:c,subscribe:d}}function e0(r,l){return{...r??{},...l??{}}}var t0=h.forwardRef(function(l,c){const{data:d,defaultTab:u=0,value:p,onChange:m,className:y,orientation:x="horizontal",tablistPosition:v="start",mode:b="basic",tabId:w="tab",variant:S,size:F,radius:C,triggerProps:T,activeTriggerProps:N,allowKeyboardNavigation:R=!0,renderLazy:Z=!0,idStrategy:M}=l,$=h.useMemo(()=>d.map(ae=>({...ae,id:ae.id??(M?M(ae.title):Wk(ae.title))})),[d,M]),G=Jk(b==="url"?w:void 0),I=h.useCallback(ae=>ae>=0&&ae<$.length?ae:0,[$.length]),Y=h.useCallback(()=>{if(b!=="url")return null;const ae=G.get();if(!ae)return null;const ne=$.findIndex(Fe=>Fe.id===ae);return ne>=0?ne:null},[$,b,G]),V=h.useMemo(()=>{const ae=Y();return ae!==null?ae:I(u)},[u,I,Y]),K=typeof p=="number",[he,ee]=h.useState(V),ge=K?p:he;h.useEffect(()=>b!=="url"?void 0:G.subscribe(ne=>{const Fe=ne?$.findIndex(we=>we.id===ne):-1;if(Fe>=0)K||ee(Fe),m?.(Fe);else{const we=I(u);K||ee(we),m?.(we)}}),[u,I,K,$,b,m,G]);const re=["oksTabsRoot",y].filter(Boolean).join(" "),be=h.useRef([]);be.current=[];const se=ae=>{be.current[ae]?.focus()},D=ae=>{if(K||ee(ae),m?.(ae),b==="url"){const ne=$[ae]?.id;ne&&G.set(ne)}},_=ae=>ne=>{ne.preventDefault(),D(ae)},Q=ae=>ne=>{if(!R)return;const Fe=x==="horizontal",we=ne.key;if(we==="Home"){ne.preventDefault(),se(0);return}if(we==="End"){ne.preventDefault(),se($.length-1);return}if(Fe&&we==="ArrowRight"||!Fe&&we==="ArrowDown"){ne.preventDefault();const Te=(ae+1)%$.length;se(Te);return}if(Fe&&we==="ArrowLeft"||!Fe&&we==="ArrowUp"){ne.preventDefault();const Te=(ae-1+$.length)%$.length;se(Te);return}(we==="Enter"||we===" ")&&(ne.preventDefault(),D(ae))},pe=F??"comfortable",fe=pe==="compact"?"sm":"md";let k="underline",B={height:4},E={underline:{}};const j=S;j&&(j==="underlineThick"&&(k="underline"),j==="segmented"&&(k="segmented"),j==="pill"&&(k="pill"),j==="dot"&&(k="dot"),j==="outline"&&(k="outline"),j==="underlineThick"?(B={height:4,...B},E={underline:{widthStrategy:"tab"}}):j==="outline"&&(E={outline:{activeEmphasis:"stroke"}}));const W=ae=>ae?e0(T,N):T??{},te=h.useRef(null),ie=h.useRef(null);h.useEffect(()=>{if(k!=="underline")return;const ae=te.current,ne=ie.current,Fe=be.current[ge];if(!ae||!ne||!Fe)return;const we=ae.getBoundingClientRect(),Te=Fe.getBoundingClientRect();if(x==="horizontal"){const ze=Math.max(0,Te.left-we.left),Oe=Te.width,de=typeof B?.height=="number"?`${B?.height}px`:B?.height??"2px";ne.style.setProperty("--oks-tabs-indicator-x",`${ze}px`),ne.style.setProperty("--oks-tabs-indicator-w",`${Oe}px`),ne.style.setProperty("--oks-tabs-indicator-h",de),B?.color&&ne.style.setProperty("--oks-tabs-indicator-color",B.color)}else{const ze=Math.max(0,Te.top-we.top),Oe=Te.height,de=typeof B?.height=="number"?`${B?.height}px`:B?.height??"2px";ne.style.setProperty("--oks-tabs-indicator-y",`${ze}px`),ne.style.setProperty("--oks-tabs-indicator-h",`${Oe}px`),ne.style.setProperty("--oks-tabs-indicator-w",de),B?.color&&ne.style.setProperty("--oks-tabs-indicator-color",B.color)}},[ge,k,B,x]),h.useEffect(()=>{if(k!=="underline")return;const ae=()=>{const ne=ie.current;if(!ne)return;const Fe=ge,we=be.current[Fe],Te=te.current;if(!we||!Te)return;const ze=Te.getBoundingClientRect(),Oe=we.getBoundingClientRect();if(x==="horizontal"){const de=Math.max(0,Oe.left-ze.left),ke=Oe.width;ne.style.setProperty("--oks-tabs-indicator-x",`${de}px`),ne.style.setProperty("--oks-tabs-indicator-w",`${ke}px`)}else{const de=Math.max(0,Oe.top-ze.top),ke=Oe.height;ne.style.setProperty("--oks-tabs-indicator-y",`${de}px`),ne.style.setProperty("--oks-tabs-indicator-h",`${ke}px`)}};return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[ge,k,x]);const De=ae=>typeof ae=="function"?ae():ae;return n.jsxs("div",{className:re,"data-orientation":x,"data-tablist-position":v,"data-density":pe,style:{...C!==void 0?{"--oks-tabs-radius":typeof C=="number"?`${C}px`:C==="none"?"0px":C==="sm"?"0.25rem":C==="md"?"0.5rem":C==="lg"?"0.75rem":C==="full"?"9999px":void 0}:void 0},ref:c,children:[n.jsxs("div",{className:"oksTablist",role:"tablist","aria-orientation":x,"data-appearance":k,"data-underline-position":E?.underline?.position,"data-outline-active":E?.outline?.activeEmphasis,ref:te,children:[k==="underline"?n.jsx("div",{className:"oksTabsIndicator",ref:ie,"aria-hidden":"true"}):null,$.map((ae,ne)=>{const Fe=ne===ge,we=W(Fe),Te=`oks-tab-${ae.id}`,ze=`oks-panel-${ae.id}`;return n.jsx("button",{...we,ref:Oe=>{be.current[ne]=Oe},role:"tab","aria-selected":Fe,"aria-controls":ze,id:Te,tabIndex:Fe?0:-1,title:ae.title,onClick:_(ne),onKeyDown:Q(ne),"data-active":Fe?"true":"false","data-size":fe,"data-elevated":k==="pill"&&E?.pill?.elevated&&Fe?"true":void 0,className:["oksTabTrigger",we?.className].filter(Boolean).join(" "),children:ae.title},ae.id)})]}),n.jsx("div",{className:"oksTabsPanels",children:Z?n.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${$[ge]?.id}`,"aria-labelledby":`oks-tab-${$[ge]?.id}`,children:De($[ge]?.content)}):$.map((ae,ne)=>n.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${ae.id}`,"aria-labelledby":`oks-tab-${ae.id}`,hidden:ne!==ge,children:De(ae.content)},ae.id))})]})});t0.displayName="TabsLegacy";var tx=h.createContext(null);function nu(){const r=h.useContext(tx);if(!r)throw new Error("oks-ui Tabs: TabsRoot is required");return r}function Od(r){return String(r).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function zd(){return typeof window<"u"&&typeof document<"u"}function n0(r){const l=h.useCallback(()=>!zd()||!r?null:new URL(window.location.href).searchParams.get(r),[r]),c=h.useCallback(u=>{if(!zd()||!r)return;const p=new URL(window.location.href),m=p.searchParams;u==null||u===""?m.delete(r):m.set(r,u);const y=`${p.pathname}?${m.toString()}${p.hash??""}`;window.history.pushState({},"",y);const x=new PopStateEvent("popstate");window.dispatchEvent(x)},[r]),d=h.useCallback(u=>{if(!zd()||!r)return()=>{};const p=()=>u(l());return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[l,r]);return{get:l,set:c,subscribe:d}}var a0=h.forwardRef(function(l,c){const{id:d,value:u,defaultValue:p,onChange:m,mode:y="basic",tabId:x="tab",orientation:v="horizontal",tablistPosition:b="start",variant:w,size:S="comfortable",radius:F,renderLazy:C=!0,className:T,children:N}=l,R=n0(y==="url"?x:void 0),Z=h.useMemo(()=>{if(y==="url"){const re=R.get();if(re!==null)return re}return p},[p,y,R]),M=u!==void 0,[$,G]=h.useState(Z),I=M?u:$;h.useEffect(()=>y!=="url"?void 0:R.subscribe(be=>{be!==null&&(M||G(be),m?.(be))}),[M,y,m,R]);const Y=h.useCallback(re=>{M||G(re),m?.(re),y==="url"&&R.set(String(re))},[M,y,m,R]),V=h.useId(),K=h.useMemo(()=>`oks-${Od(d||`tabs-${V}`)}`,[V,d]),he=h.useCallback(re=>{const be=Od(re);return{tab:`${K}-tab-${be}`,panel:`${K}-panel-${be}`}},[K]),ee=h.useMemo(()=>{let re="underline",be={height:4},se={underline:{widthStrategy:"tab"}};const D=w;return D&&(D==="underlineThick"&&(re="underline"),D==="segmented"&&(re="segmented"),D==="pill"&&(re="pill"),D==="dot"&&(re="dot"),D==="outline"&&(re="outline"),D==="underlineThick"?(be={height:4},se={underline:{widthStrategy:"tab"}}):D==="outline"&&(se={outline:{activeEmphasis:"stroke"}})),{value:I,setValue:Y,orientation:v,appearance:re,density:S,radius:F,indicator:be,appearanceOptions:se,renderLazy:C,getIds:he,isActive:_=>_===I}},[w,S,I,he,v,F,C,Y]),ge=["oksTabsRoot",T].filter(Boolean).join(" ");return n.jsx(tx.Provider,{value:ee,children:n.jsx("div",{ref:c,id:d,className:ge,"data-orientation":v,"data-tablist-position":b,"data-density":S,"data-underline-position":ee.appearanceOptions?.underline?.position==="top"?"top":void 0,style:{...F!==void 0?{"--oks-tabs-radius":typeof F=="number"?`${F}px`:F==="none"?"0px":F==="sm"?"0.25rem":F==="md"?"0.5rem":F==="lg"?"0.75rem":F==="full"?"9999px":void 0}:void 0},children:N})})});a0.displayName="TabsRoot";var o0=h.forwardRef(function(l,c){const{className:d,...u}=l,p=nu(),m=h.useRef(null),y=["oksTablist",d].filter(Boolean).join(" "),x=h.useRef(null),v=b=>{const w=m.current;if(!w)return;const S=Array.from(w.querySelectorAll('[role="tab"]'));if(S.length===0)return;const F=p.orientation==="horizontal",C=S.findIndex(N=>N.getAttribute("aria-selected")==="true"),T=b.key;if(T==="Home"){b.preventDefault(),S[0]?.focus();return}if(T==="End"){b.preventDefault(),S[S.length-1]?.focus();return}if(F&&T==="ArrowRight"||!F&&T==="ArrowDown"){b.preventDefault();const N=(C+1)%S.length;S[N]?.focus();return}if(F&&T==="ArrowLeft"||!F&&T==="ArrowUp"){b.preventDefault();const N=(C-1+S.length)%S.length;S[N]?.focus();return}};return h.useEffect(()=>{if(p.appearance!=="underline")return;const b=m.current,w=x.current;if(!b||!w)return;const S=b.querySelector('[role="tab"][aria-selected="true"]');if(!S)return;const F=b.getBoundingClientRect(),C=S.getBoundingClientRect(),T=S.querySelector(".oksTabLabel"),R=(p.appearanceOptions?.underline?.widthStrategy??"tab")==="label"&&T?T.getBoundingClientRect().width:C.width,Z=p.appearanceOptions?.underline?.offset??0,M=p.appearanceOptions?.underline?.cap??"square";if(p.orientation==="horizontal"){const $=Math.max(0,C.left-F.left),G=R,I=typeof p.indicator?.height=="number"?`${p.indicator.height}px`:p.indicator?.height??"2px";w.style.setProperty("--oks-tabs-indicator-x",`${$}px`),w.style.setProperty("--oks-tabs-indicator-w",`${G}px`),w.style.setProperty("--oks-tabs-indicator-h",I),p.indicator?.color&&w.style.setProperty("--oks-tabs-indicator-color",p.indicator.color),w.style.setProperty("--oks-tabs-indicator-offset-y",`${Z}px`),w.style.setProperty("--oks-tabs-indicator-radius",M==="round"?"9999px":"0px")}else{const $=Math.max(0,C.top-F.top),G=C.height,I=typeof p.indicator?.height=="number"?`${p.indicator.height}px`:p.indicator?.height??"2px";w.style.setProperty("--oks-tabs-indicator-y",`${$}px`),w.style.setProperty("--oks-tabs-indicator-h",`${G}px`),w.style.setProperty("--oks-tabs-indicator-w",I),p.indicator?.color&&w.style.setProperty("--oks-tabs-indicator-color",p.indicator.color),w.style.setProperty("--oks-tabs-indicator-offset-x",`${Z}px`),w.style.setProperty("--oks-tabs-indicator-radius",M==="round"?"9999px":"0px")}},[p.value,p.appearance,p.indicator,p.orientation]),h.useEffect(()=>{if(p.appearance!=="underline")return;const b=()=>{const w=m.current,S=x.current;if(!w||!S)return;const F=w.querySelector('[role="tab"][aria-selected="true"]');if(!F)return;const C=w.getBoundingClientRect(),T=F.getBoundingClientRect();if(p.orientation==="horizontal"){const N=Math.max(0,T.left-C.left),R=T.width;S.style.setProperty("--oks-tabs-indicator-x",`${N}px`),S.style.setProperty("--oks-tabs-indicator-w",`${R}px`)}else{const N=Math.max(0,T.top-C.top),R=T.height;S.style.setProperty("--oks-tabs-indicator-y",`${N}px`),S.style.setProperty("--oks-tabs-indicator-h",`${R}px`)}};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[p.appearance,p.orientation,p.value]),n.jsxs("div",{...u,className:y,role:"tablist","aria-orientation":p.orientation,"data-appearance":p.appearance,"data-outline-active":p.appearanceOptions?.outline?.activeEmphasis,"data-underline-position":p.appearanceOptions?.underline?.position,ref:b=>{m.current=b,typeof c=="function"?c(b):c&&"current"in c&&(c.current=b)},onKeyDown:v,children:[p.appearance==="underline"?n.jsx("div",{className:"oksTabsIndicator",ref:x,"aria-hidden":"true"}):null,l.children]})});o0.displayName="TabList";var r0=h.forwardRef(function(l,c){const{value:d,disabled:u,className:p,children:m}=l,y=nu(),x=y.isActive(d),v=y.getIds(d),b=y.density==="compact"?"sm":"md",w=["oksTabTrigger",p].filter(Boolean).join(" ");return n.jsx("button",{ref:c,className:w,role:"tab",id:v.tab,"aria-selected":x,"aria-controls":v.panel,tabIndex:x?0:-1,disabled:u,"data-active":x?"true":"false","data-size":b,"data-elevated":y.appearance==="pill"&&y.appearanceOptions?.pill?.elevated&&x?"true":void 0,onClick:()=>y.setValue(d),children:n.jsx("span",{className:"oksTabLabel",children:m})})});r0.displayName="TabTrigger";var s0=h.forwardRef(function(l,c){const{value:d,keepMounted:u,className:p,children:m}=l,y=nu(),x=y.getIds(d),v=y.isActive(d),b=["oksTabsPanel",p].filter(Boolean).join(" ");return!v&&u===void 0&&y.renderLazy?null:n.jsx("div",{ref:c,role:"tabpanel",id:x.panel,"aria-labelledby":x.tab,hidden:!v,className:b,children:m})});s0.displayName="TabPanel";zt(`@layer components {
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
`);var nx=h.createContext(null);function sn(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}function l0(r){if(!r||typeof r!="object"||h.isValidElement(r))return!1;const l=r;return"type"in l||"tone"in l||"color"in l||"severity"in l||"variant"in l||"radius"in l||"size"in l||"position"in l||"placement"in l||"duration"in l||"timeout"in l||"persistent"in l||"dismissible"in l||"hideCloseButton"in l||"action"in l||"title"in l||"message"in l||"description"in l||"icon"in l||"showIcon"in l||"hideIcon"in l||"endContent"in l||"closeIcon"in l||"loadingComponent"in l||"promise"in l||"classNames"in l||"id"in l||"className"in l||"style"in l}function i0(r){const l={};for(const c in r)Object.prototype.hasOwnProperty.call(r,c)&&r[c]!==void 0&&(l[c]=r[c]);return l}function c0(r,l){return l0(r)?{...r,...l??{}}:{message:r,...l??{}}}function d0(r){return r==="success"?"success":r==="warning"?"warning":r==="error"?"danger":r==="info"?"info":"primary"}function ax(r){return!0}function u0(r){return"alert"}function ox(r){return r==="flat"?"soft":r==="bordered"?"outline":r}function rx(r){return r==="success"?"success":r==="warning"?"warning":r==="danger"?"error":"default"}function sx(r){if(!(!r||r==="default"))return r}function p0(r,l){const c=ox(r),d=`var(--oks-color-${l}-600, var(--oks-color-primary-600, #2563eb))`,u=`var(--oks-color-${l}-50, var(--oks-color-primary-50, #eff6ff))`,p=`var(--oks-color-${l}-900, var(--oks-color-primary-900, #0b1220))`;return c==="solid"?{accent:d,bg:d,fg:"white",border:d}:c==="outline"?{accent:d,bg:"transparent",fg:p,border:d}:{accent:d,bg:u,fg:p,border:d}}function f0(r,l){return l.type==="UPSERT"?[l.item,...r.filter(d=>d.id!==l.item.id)].slice(0,Math.max(1,l.maxToasts)):l.type==="PATCH"?r.map(c=>{if(c.id!==l.id)return c;const d=i0(l.patch),u=d.severity??d.color,p=d.type??(u!==void 0?rx(u):c.type),m=d.tone??(u!==void 0?sx(u)??c.tone:c.tone),y=d.variant??c.variant,x=d.size??c.size,v=d.placement??d.position??c.position,b=d.persistent===!0?null:d.timeout!==void 0?d.timeout:d.duration!==void 0?d.duration:c.duration,w=d.hideIcon!==void 0?!d.hideIcon:d.showIcon!==void 0?d.showIcon:d.type!==void 0||u!==void 0?ax():c.showIcon,S=d.shouldShowTimeoutProgress??d.showDurationBar;return{...c,...d,type:p,tone:m,variant:y,size:x,position:v,duration:b,message:d.message!==void 0?d.message:c.message,description:d.description!==void 0?d.description:c.description,showDurationBar:!!S&&b!=null,dismissible:d.dismissible??(d.hideCloseButton!==void 0?!d.hideCloseButton:c.dismissible),showIcon:w,state:c.state}}):l.type==="MARK_CLOSING"?r.map(c=>c.id===l.id?{...c,state:"closing",duration:null}:c):l.type==="MARK_ALL_CLOSING"?r.map(c=>({...c,state:"closing",duration:null})):l.type==="REMOVE"?r.filter(c=>c.id!==l.id):r}function h0(){const r=h.useContext(nx);if(!r)throw new Error("useToast must be used inside ToastProvider");return r}var On=null,Lo=((r,l)=>On?On.show(r,l):(console.warn("Toast provider not configured"),-1)),m0=((r,l)=>Lo(r,l)),mt=Object.assign(m0,{show:Lo,info:(r,l)=>Lo(r,{...l??{},type:"info"}),success:(r,l)=>Lo(r,{...l??{},type:"success"}),warning:(r,l)=>Lo(r,{...l??{},type:"warning"}),error:(r,l)=>Lo(r,{...l??{},type:"error"}),update:(r,l)=>{if(!On){console.warn("Toast provider not configured");return}On.update(r,l)},dismiss:r=>{if(!On){console.warn("Toast provider not configured");return}On.dismiss(r)},dismissAll:()=>{if(!On){console.warn("Toast provider not configured");return}On.dismissAll()},promise:(r,l)=>On?On.promise(r,l):(console.warn("Toast provider not configured"),-1)});function Ud(r){return Lo(r)}function x0({item:r,dataMotion:l,onDismiss:c,stackIndex:d=0}){const u=r.duration,p=h.useRef(null),m=h.useRef(0),y=h.useRef(u??0),x=h.useRef(null),v=d===0&&r.showDurationBar&&u!=null,b=h.useCallback((ee,ge)=>{const re=x.current;if(re){if(re.style.transform=`scaleX(${Math.max(0,Math.min(1,ee))})`,l==="reduced"||ge==null){re.style.transition="none";return}re.style.transition=`transform ${ge}ms linear`}},[l]),w=h.useCallback(ee=>{v&&(b(1,null),l!=="reduced"&&requestAnimationFrame(()=>b(0,ee)))},[v,l,b]),S=h.useCallback(()=>{p.current!=null&&clearTimeout(p.current),p.current=null},[]),F=h.useCallback(ee=>{S(),!(ee<=0)&&(m.current=Date.now(),p.current=setTimeout(()=>c(r.id),ee))},[S,r.id,c]),C=h.useCallback(()=>{if(u==null||p.current==null)return;const ee=Date.now()-m.current;if(y.current=Math.max(0,y.current-ee),S(),v){const ge=u>0?y.current/u:0;b(ge,null)}},[v,S,u,b]),T=h.useCallback(()=>{u!=null&&r.state==="open"&&(F(y.current),v&&b(0,y.current))},[F,v,u,r.state,b]);h.useEffect(()=>{if(S(),u!=null)return y.current=u,d===0&&r.state==="open"&&(F(u),w(u)),()=>S()},[F,S,u,r.state,d,w]),h.useEffect(()=>{r.state!=="open"&&S()},[S,r.state]);const N=u0(r.type),R=p0(r.variant,r.tone),Z=ox(r.variant),M=Z==="solid"?R.fg:R.accent,$=Z==="solid"?`color-mix(in srgb, ${R.fg} 14%, transparent)`:`color-mix(in srgb, ${R.accent} 12%, transparent)`,G=(r.title??null)!==null&&r.title!==void 0,I=r.description??r.message,Y=(I??null)!==null&&I!==void 0,V=r.state==="closing"?"exiting":"entering",K=r.classNames,he={"--oks-toast-accent":R.accent,"--oks-toast-bg":R.bg,"--oks-toast-fg":R.fg,"--oks-toast-border":R.border,"--oks-toast-icon-fg":M,"--oks-toast-icon-bg":$,"--oks-toast-stack-index":String(d),...r.style};return n.jsx("div",{role:N,"aria-atomic":"true","data-has-title":G?"true":"false","data-has-description":Y?"true":"false","data-animation":V,"data-placement":r.position,"data-drag-value":"0","data-motion":l,"data-state":r.state,"data-size":r.size,"data-radius":r.radius??"md","data-stack-index":String(d),className:sn(sn(sn("oksToast",d>0?"oksToastStacked":""),K?.base),r.className),style:he,...d===0?{onMouseEnter:C,onMouseLeave:T,onFocusCapture:C,onBlurCapture:T}:{},children:n.jsxs("div",{className:sn(sn("oksToastSurface",K?.motionDiv),sn(K?.base,r.className)),children:[r.type==="loading"&&r.loadingComponent?n.jsx("div",{className:sn("oksToastLoading",K?.loadingComponent),"aria-hidden":"true",children:r.loadingComponent}):r.showIcon?n.jsx("div",{className:sn("oksToastIcon",K?.icon),"aria-hidden":"true",children:r.icon??n.jsx(Jd,{type:r.type})}):null,n.jsxs("div",{className:sn("oksToastBody",K?.content),children:[G&&n.jsx("div",{className:sn("oksToastTitle",K?.title),children:r.title}),Y&&n.jsx("div",{className:sn("oksToastMessage",K?.description),children:I})]}),d===0&&(r.action||r.endContent||r.dismissible)&&n.jsxs("div",{className:sn("oksToastControls",K?.wrapper),children:[r.action&&n.jsx("button",{type:"button",className:"oksToastAction",onClick:()=>r.action?.onClick?.(),children:r.action.label}),r.endContent,r.dismissible&&n.jsx(ii,{ariaLabel:"Close",className:sn("oksToastClose",K?.closeButton),...r.closeIcon!==void 0?{icon:r.closeIcon}:{},...K?.closeIcon!==void 0?{iconClassName:K.closeIcon}:{},onClick:()=>c(r.id)})]}),v&&n.jsx("div",{className:sn("oksToastProgressTrack",K?.progressTrack),"aria-hidden":"true",children:n.jsx("div",{ref:x,className:sn("oksToastProgressIndicator",K?.progressIndicator)})})]})})}function g0({children:r,position:l,placement:c,maxToasts:d,maxVisibleToasts:u,defaultDuration:p=6e3,container:m,motion:y="auto",disableAnimation:x,toastOffset:v=0,toastProps:b,regionProps:w,className:S,style:F}){const C=eu(),T=c??l??"bottom-right",N=u??d??3,R=d!==void 0?d:Math.max(N,12),Z=x===!0||y==="reduced"||y==="auto"&&C?"reduced":"default",M=Z==="reduced"?0:260,$=h.useRef(0),G=h.useRef(new Map),[I,Y]=h.useReducer(f0,[]),V=h.useRef([]);V.current=I;const K=h.useCallback(k=>{const B=G.current.get(k);if(B!=null&&clearTimeout(B),M<=0){Y({type:"REMOVE",id:k});return}const E=setTimeout(()=>{G.current.delete(k),Y({type:"REMOVE",id:k})},M);G.current.set(k,E)},[M]),he=h.useCallback(k=>{const B=V.current.find(E=>E.id===k);B&&B.state!=="closing"&&B.onDismiss?.(k),Y({type:"MARK_CLOSING",id:k}),K(k)},[K]),ee=h.useCallback(()=>{const k=V.current;for(const B of k)B.state!=="closing"&&B.onDismiss?.(B.id);Y({type:"MARK_ALL_CLOSING"});for(const B of k)K(B.id)},[K]),ge=h.useCallback((k,B)=>{Y({type:"PATCH",id:k,patch:B})},[]),re=h.useCallback(((k,B)=>{const E=c0(k,B),j={...b??{},...E},W=j.severity??j.color,te=j.type??(W?rx(W):"default"),ie=j.tone??(W?sx(W):void 0)??d0(te),De=j.variant??"flat",ae=j.size??"md",ne=j.placement??j.position??T,Fe=j.hideCloseButton!==void 0?!j.hideCloseButton:j.dismissible??!0,we=!!j.persistent,Te=j.timeout??j.duration,ze=we?null:Te!==void 0?Te:p,Oe=!!(j.shouldShowTimeoutProgress??j.showDurationBar)&&ze!=null,de=j.hideIcon!==void 0?!j.hideIcon:j.showIcon??ax(),ke=j.id??++$.current,le={...{id:ke,createdAt:Date.now(),state:"open",type:te,tone:ie,variant:De,radius:j.radius??"md",size:ae,position:ne,duration:ze,showDurationBar:Oe,dismissible:Fe,showIcon:de},...j.title!==void 0?{title:j.title}:{},...j.message!==void 0?{message:j.message}:{},...j.description!==void 0?{description:j.description}:{},...j.action!==void 0?{action:j.action}:{},...j.icon!==void 0?{icon:j.icon}:{},...j.endContent!==void 0?{endContent:j.endContent}:{},...j.closeIcon!==void 0?{closeIcon:j.closeIcon}:{},...j.loadingComponent!==void 0?{loadingComponent:j.loadingComponent}:{},...j.classNames!==void 0?{classNames:j.classNames}:{},...j.onDismiss!==void 0?{onDismiss:j.onDismiss}:{},...j.className!==void 0?{className:j.className}:{},...j.style!==void 0?{style:j.style}:{}};if(j.promise){const je=j.promise,Pe=Te!==void 0?Te:p,Ze=j.shouldShowTimeoutProgress??j.showDurationBar;return Y({type:"UPSERT",item:{...le,type:"loading",duration:null,showDurationBar:!1,dismissible:Fe},maxToasts:R}),je.then(()=>ge(ke,{type:"success",timeout:Pe,...Ze!==void 0?{shouldShowTimeoutProgress:Ze}:{},dismissible:Fe}),()=>ge(ke,{type:"error",timeout:Pe,...Ze!==void 0?{shouldShowTimeoutProgress:Ze}:{},dismissible:Fe})),ke}return Y({type:"UPSERT",item:le,maxToasts:R}),ke}),[p,T,R,b,ge]),be=h.useCallback((k,B)=>{const E=typeof k=="function"?k():k,j=re({...B.loading??{},type:B.loading?.type??"loading",persistent:!0,dismissible:B.loading?.dismissible??!1});return E.then(W=>{const te=B.success?.(W)??{};ge(j,{...te,type:te.type??"success",persistent:!1})},W=>{const te=B.error?.(W)??{};ge(j,{...te,type:te.type??"error",persistent:!1})}),j},[re,ge]),se=h.useMemo(()=>({show:re,info:(k,B)=>re(k,{...B??{},type:"info"}),success:(k,B)=>re(k,{...B??{},type:"success"}),warning:(k,B)=>re(k,{...B??{},type:"warning"}),error:(k,B)=>re(k,{...B??{},type:"error"}),update:ge,dismiss:he,dismissAll:ee,promise:be}),[he,ee,be,re,ge]);h.useEffect(()=>(On=se,()=>{On===se&&(On=null)}),[se]),h.useEffect(()=>{if(typeof window>"u")return;const k=B=>{if(B.key!=="Escape")return;const E=I[0];E&&he(E.id)};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[he,I]),h.useEffect(()=>()=>{for(const k of G.current.values())clearTimeout(k);G.current.clear()},[]);const D=h.useMemo(()=>{const k={};for(const B of I){const E=B.position,j=k[E]??[];j.push(B),k[E]=j}return k},[I]),{classNames:_,style:Q,...pe}=w??{},fe={"--oks-toast-offset":`${v}px`,...F??{},...Q??{}};return n.jsxs(nx.Provider,{value:se,children:[r,n.jsx(Br,{container:m,children:Object.entries(D).map(([k,B])=>{const E=k,j=Math.max(1,N),te=B.slice(0,j),ie=Math.max(0,B.length-j);return n.jsx("div",{"data-position":E,className:sn(sn("oksToastViewport",_?.base),S),style:fe,"aria-live":"polite",...pe,children:n.jsx("div",{className:"oksToastStack","data-position":E,"data-has-overflow":ie>0?"true":"false","data-overflow-count":String(ie),children:te.map((De,ae)=>n.jsx(x0,{item:De,dataMotion:Z,onDismiss:he,stackIndex:ae},De.id))})},k)})})]})}function Ra(r,l){return[typeof r=="string"?r:"",typeof l=="string"?l:""].filter(Boolean).join(" ")}function Ma(r,l){return`var(--oks-color-${r}-${l}, var(--oks-color-primary-${l}, #3b82f6))`}zt(`@layer components {
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
`);var lx=h.forwardRef((r,l)=>{const{label:c,labelPlacement:d,description:u,error:p,size:m="md",tone:y="primary",colorDepth:x=500,className:v,id:b,required:w,disabled:S,options:F,value:C,defaultValue:T,onChange:N,style:R,...Z}=r,M=h.useId(),$=b??`oks-checkbox-group-${M}`,G=!!p,I=u?`${$}-description`:void 0,Y=p&&p!==!0?`${$}-error-message`:void 0,V=[I,Y].filter(Boolean).join(" "),K=C!==void 0,he=D=>Array.isArray(D)?D.map(String):[],[ee,ge]=h.useState(()=>he(T));h.useEffect(()=>{K&&ge(he(C))},[K,C]);const re=K?he(C):ee,be={"--oks-checkbox-tone":Ma(y,x)},se=D=>{if(S)return;const Q=re.includes(D)?re.filter(pe=>pe!==D):[...re,D];K||ge(Q),N?.(Q)};return n.jsxs("div",{ref:l,className:Ra("oksCheckboxGroupField",v),"data-size":m,"data-tone":y,"data-invalid":G?"true":"false","data-disabled":S?"true":"false",style:{...be,...R},children:[c?n.jsxs("div",{className:"oksCheckboxGroupFieldLabel",children:[c,w?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsx("div",{role:"group","aria-describedby":V||void 0,children:n.jsx("div",{className:"oksCheckboxGroupFieldItems",children:F.map((D,_)=>{const Q=`${$}-${D.key??`${_}-${D.value}`}`,pe=re.includes(D.value);return n.jsxs("label",{className:"oksCheckboxGroupFieldItem","data-disabled":S||D.disabled?"true":"false",children:[n.jsx("input",{...Z,id:Q,type:"checkbox",disabled:S||D.disabled,checked:pe,onChange:()=>se(D.value),className:"oksCheckboxGroupFieldInput","aria-invalid":G?"true":void 0}),n.jsx("span",{className:"oksCheckboxGroupFieldItemLabel",children:D.label})]},D.key??`${_}-${D.value}`)})})}),u?n.jsx("div",{id:I,className:"oksCheckboxGroupFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:Y,className:"oksCheckboxGroupFieldError",role:"alert",children:p}):null]})});lx.displayName="CheckboxGroupField";zt(`@layer components {
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
`);var $n=h.forwardRef((r,l)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:m="md",variant:y="outline",color:x,tone:v,colorDepth:b=500,radius:w,rounded:S,className:F,id:C,required:T,disabled:N,options:R=[],placeholderOption:Z="Select…",native:M=!1,onValueChange:$,style:G,...I}=r,Y=x??v??"default",V=w??S??"md",K=h.useId(),he=C??`oks-select-${K}`,ee=I["aria-describedby"],ge=u?`${he}-description`:void 0,re=p&&p!==!0?`${he}-error-message`:void 0,be=[ee,ge,re].filter(Boolean).join(" "),se=!!p,D=!!I.multiple,_=M,Q=!D&&Z!==null&&Z!==void 0,pe=ue=>D?Array.isArray(ue)?ue.map(ye=>String(ye)):[]:ue==null?"":Array.isArray(ue)?String(ue[0]??""):String(ue),[fe,k]=h.useState(()=>I.value!==void 0?pe(I.value):I.defaultValue!==void 0?pe(I.defaultValue):D?[]:"");h.useEffect(()=>{I.value!==void 0&&k(pe(I.value))},[I.value,D]);const B=I.value!==void 0?pe(I.value):fe,E=D?Array.isArray(B)?B:[]:[],j=D?"":String(B),W=h.useMemo(()=>D?E.length===0:j==="",[D,j,E.length]),te={"--oks-select-tone":Ma(Y,b)},ie=h.useMemo(()=>{const ue={...te};if(G&&typeof G=="object")for(const[ye,Ae]of Object.entries(G))ye.startsWith("--")&&(ue[ye]=Ae);return ue},[G,te]),De=d==="top"?c:null,ae=d==="floating"?c:null,ne=h.useRef(null),Fe=h.useRef(null),we=h.useRef({value:"",timer:null}),[Te,ze]=h.useState(!1),[Oe,de]=h.useState(0),[ke,ve]=h.useState(null),[le,je]=h.useState(""),Pe=h.useMemo(()=>{const ue=new Map;for(const ye of R)ue.set(String(ye.value),ye.label);return ue},[R]),Ze=h.useMemo(()=>{const ue=le.trim().toLowerCase();return ue?R.map((ye,Ae)=>({opt:ye,idx:Ae})).filter(({opt:ye})=>`${typeof ye.label=="string"?ye.label:""} ${String(ye.value??"")}`.toLowerCase().includes(ue)):R.map((ye,Ae)=>({opt:ye,idx:Ae}))},[le,R]),Ne=h.useMemo(()=>Ze.map(ue=>ue.idx),[Ze]);h.useEffect(()=>{if(!Te||Ne.length<1)return;const ue=Ne.includes(Oe),ye=!R[Oe]?.disabled;if(ue&&ye)return;const Ae=Ne.find(Ve=>!R[Ve]?.disabled)??Ne[0]??0;de(Ae)},[Oe,Te,R,Ne]),h.useEffect(()=>{const ue=D?E[0]:j,ye=R.findIndex(Ae=>String(Ae.value)===String(ue));ye>=0&&de(ye)},[D,R,j,E,B]);const Ye=!N&&!_&&R.length>0,Le=(ue,ye)=>{const Ae=Ne.filter(et=>!R[et]?.disabled);if(Ae.length<1)return ue;const Ve=Ae.indexOf(ue),Se=((Ve>=0?Ve:0)+ye+Ae.length)%Ae.length;return Ae[Se]??ue},He=()=>{ze(!1),je("")},qe=()=>{if(!Ye)return;ze(!0);const ue=D?E[0]:j,ye=R.findIndex(pt=>String(pt.value)===String(ue)),Ae=ye>=0?ye:0,Ve=R[Ae]?.disabled?Le(Ae,1):Ae;de(Ve)},Je=(ue,ye)=>{if(I.value===void 0&&k(ue),$?.(ue),D){const Ve={target:{value:ue}};I.onChange?.(Ve);return}if(ye){I.onChange?.(ye);return}const Ae={target:{value:ue}};I.onChange?.(Ae)},Ie=ue=>{if(!ue)return;const ye=ue.toLowerCase(),Ae=we.current.value+ye;we.current.value=Ae,we.current.timer&&window.clearTimeout(we.current.timer),we.current.timer=window.setTimeout(()=>{we.current.value="",we.current.timer=null},350);const pt=(()=>{const Se=Ne.filter(Et=>!R[Et]?.disabled);if(Se.length<1)return-1;const et=Math.max(0,Se.indexOf(Oe)),it=[...Se.slice(et),...Se.slice(0,et)];for(const Et of it){const St=R[Et];if(!St)continue;if((typeof St.label=="string"?St.label:String(St.value??"")).toLowerCase().startsWith(Ae))return Et}return-1})();pt>=0&&de(pt)};h.useEffect(()=>{if(!Te)return;const ue=Ae=>{const Ve=Ae.target;Ve&&(ne.current?.contains(Ve)||Fe.current?.contains(Ve)||He())},ye=Ae=>{Ae.key==="Escape"&&(Ae.preventDefault(),He(),ne.current?.focus())};return document.addEventListener("pointerdown",ue,!0),document.addEventListener("keydown",ye,!0),()=>{document.removeEventListener("pointerdown",ue,!0),document.removeEventListener("keydown",ye,!0)}},[Te]),h.useEffect(()=>{if(!Te)return;const ue=()=>{const pt=ne.current,Se=Fe.current;if(!pt||!Se)return;const et=pt.getBoundingClientRect(),it=Se.getBoundingClientRect(),Et=li({triggerRect:et,tooltipRect:it,side:"bottom",align:"start",offset:6,collisionPadding:8,strategy:"fixed"});ve({position:"fixed",top:Et.top,left:Et.left,minWidth:et.width})},ye=requestAnimationFrame(ue),Ae=()=>ue(),Ve=()=>ue();return window.addEventListener("scroll",Ae,!0),window.addEventListener("resize",Ve),()=>{cancelAnimationFrame(ye),window.removeEventListener("scroll",Ae,!0),window.removeEventListener("resize",Ve)}},[Te]);const $e=()=>{const ue=R.find(ye=>String(ye.value)===String(j));return ue?ue.label:null},jt=`${he}-opt-${Oe}`,Jt=`${he}-menu`;return n.jsxs("div",{className:Ra("oksSelectField",F),"data-size":m,"data-variant":y,"data-color":Y,"data-radius":V,"data-label-placement":d,"data-placeholder-shown":W?"true":"false","data-invalid":se?"true":"false","data-disabled":N?"true":"false",style:{...te,...G},children:[De?n.jsxs("label",{className:"oksSelectFieldLabel",htmlFor:he,children:[De,T?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksSelectFieldControl",children:[_?n.jsxs("select",{...I,ref:l,id:he,required:T,disabled:N,className:"oksSelectFieldInput","aria-invalid":se?"true":void 0,"aria-describedby":be||void 0,"aria-errormessage":re,value:D?E:j,onChange:ue=>{if(D){const ye=Array.from(ue.currentTarget.selectedOptions).map(Ae=>String(Ae.value));Je(ye,ue);return}Je(String(ue.currentTarget.value),ue)},children:[Q?n.jsx("option",{value:"",disabled:T,children:Z}):null,R.map((ue,ye)=>n.jsx("option",{value:ue.value,disabled:ue.disabled,children:ue.label},ue.key??`${ye}-${ue.value}`))]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{ref:ne,id:he,type:"button",className:"oksSelectFieldTrigger",disabled:N,"aria-label":I["aria-label"],"aria-labelledby":I["aria-labelledby"],"aria-invalid":se?"true":void 0,"aria-describedby":be||void 0,"aria-errormessage":re,"aria-haspopup":"listbox","aria-expanded":Te?"true":"false","aria-controls":Te?Jt:void 0,"aria-activedescendant":Te?jt:void 0,onClick:()=>Te?He():qe(),onBlur:ue=>{I.onBlur?.(ue),requestAnimationFrame(()=>{const ye=document.activeElement;ye&&(ne.current?.contains(ye)||Fe.current?.contains(ye)||He())})},onKeyDown:ue=>{if(!N){if(ue.key.length===1&&!ue.ctrlKey&&!ue.metaKey&&!ue.altKey){Te||qe(),Ie(ue.key);return}if(ue.key==="ArrowDown"){if(ue.preventDefault(),!Te){qe();return}de(ye=>Le(ye,1));return}if(ue.key==="ArrowUp"){if(ue.preventDefault(),!Te){qe();return}de(ye=>Le(ye,-1));return}if(ue.key==="Enter"||ue.key===" "){if(ue.preventDefault(),!Te){qe();return}const ye=R[Oe];if(ye&&!ye.disabled)if(D){const Ae=String(ye.value),Ve=E.includes(Ae)?E.filter(pt=>pt!==Ae):[...E,Ae];Je(Ve)}else Je(String(ye.value)),He();return}if(ue.key==="Escape"){Te&&(ue.preventDefault(),He());return}}},children:n.jsx("span",{className:"oksSelectFieldTriggerValue",children:D?E.length<1?Z:n.jsx("span",{className:"oksSelectFieldChips",children:E.map(ue=>n.jsx(nt,{size:"sm",variant:"flat",endContent:n.jsx("span",{className:"oksSelectFieldChipRemove",role:"button",tabIndex:-1,"aria-label":"Remove",onMouseDown:ye=>{ye.preventDefault(),ye.stopPropagation()},onClick:ye=>{ye.preventDefault(),ye.stopPropagation(),Je(E.filter(Ae=>Ae!==ue))},children:"×"}),onMouseDown:ye=>{ye.preventDefault(),ye.stopPropagation()},children:Pe.get(ue)??ue},ue))}):W?Z:$e()})}),Te?n.jsx(Br,{children:n.jsxs("div",{ref:Fe,id:Jt,className:"oksSelectFieldMenu",role:"listbox","aria-multiselectable":D?"true":void 0,style:ke?{...ie,...ke}:ie,children:[n.jsx("div",{className:"oksSelectFieldFilter",children:n.jsx("input",{className:"oksSelectFieldFilterInput",value:le,onChange:ue=>je(String(ue.currentTarget.value)),placeholder:"Filter…","aria-label":"Filter options",onKeyDown:ue=>{if(ue.key==="ArrowDown"){ue.preventDefault(),de(ye=>Le(ye,1));return}if(ue.key==="ArrowUp"){ue.preventDefault(),de(ye=>Le(ye,-1));return}if(ue.key==="Enter"||ue.key===" "){ue.preventDefault();const ye=R[Oe];if(ye&&!ye.disabled)if(D){const Ae=String(ye.value),Ve=E.includes(Ae)?E.filter(pt=>pt!==Ae):[...E,Ae];Je(Ve)}else Je(String(ye.value)),He(),ne.current?.focus();return}ue.key==="Escape"&&(ue.preventDefault(),He(),ne.current?.focus())}})}),Ze.map(({opt:ue,idx:ye})=>{const Ae=D?E.includes(String(ue.value)):String(ue.value)===String(j),Ve=ye===Oe;return n.jsx("div",{id:`${he}-opt-${ye}`,role:"option","aria-selected":Ae?"true":"false","data-selected":Ae?"true":"false","data-active":Ve?"true":"false","data-disabled":ue.disabled?"true":"false",className:"oksSelectFieldOption",onMouseEnter:()=>{ue.disabled||de(ye)},onMouseDown:pt=>pt.preventDefault(),onClick:()=>{if(!ue.disabled){if(D){const pt=String(ue.value),Se=E.includes(pt)?E.filter(et=>et!==pt):[...E,pt];Je(Se);return}Je(String(ue.value)),He(),ne.current?.focus()}},children:ue.label},ue.key??`${ye}-${ue.value}`)})]})}):null]}),ae?n.jsxs("label",{className:"oksSelectFieldLabel",htmlFor:he,children:[ae,T?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),u?n.jsx("div",{id:ge,className:"oksSelectFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:re,className:"oksSelectFieldError",role:"alert",children:p}):null]})});$n.displayName="SelectField";zt(`@layer components {
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
`);var Dr=r=>String(r).padStart(2,"0"),ht=r=>`${r.getFullYear()}-${Dr(r.getMonth()+1)}-${Dr(r.getDate())}`,pn=r=>`${ht(r)}T${Dr(r.getHours())}:${Dr(r.getMinutes())}`,Cr=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0,0),za=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate(),23,59,0,0),Hd=r=>{const l=r.getDay();return Cr(mo(r,-l))},v0=r=>za(mo(Hd(r),6)),km=r=>new Date(r.getFullYear(),r.getMonth(),1,0,0,0,0),b0=r=>new Date(r.getFullYear(),r.getMonth()+1,0,23,59,0,0),ym=r=>new Date(r.getFullYear(),0,1,0,0,0,0),k0=r=>new Date(r.getFullYear(),11,31,23,59,0,0),mo=(r,l)=>{const c=new Date(r);return c.setDate(c.getDate()+l),c},Io=(r,l)=>{const c=new Date(r);return c.setMonth(c.getMonth()+l),c},y0={today:"Today",yesterday:"Yesterday",thisWeek:"This Week",lastWeek:"Last Week",fortnight:"Fortnight",thisMonth:"This month",lastMonth:"Last month",last3Months:"Last 3 months",thisYear:"This year",lastYear:"Last year",custom:"Custom Dates"},w0=(r,l,c,d)=>{const u=(()=>{if(r==="today")return{start:Cr(l),end:za(l)};if(r==="yesterday"){const p=mo(l,-1);return{start:Cr(p),end:za(p)}}if(r==="thisWeek")return{start:Hd(l),end:za(l)};if(r==="lastWeek"){const p=mo(l,-7);return{start:Hd(p),end:v0(p)}}if(r==="fortnight")return{start:Cr(mo(l,-13)),end:za(l)};if(r==="thisMonth")return{start:km(l),end:za(l)};if(r==="lastMonth"){const p=Io(l,-1);return{start:km(p),end:b0(p)}}if(r==="last3Months")return{start:Cr(Io(l,-3)),end:za(l)};if(r==="thisYear")return{start:ym(l),end:za(l)};if(r==="lastYear"){const p=new Date(l.getFullYear()-1,l.getMonth(),l.getDate(),l.getHours(),l.getMinutes());return{start:ym(p),end:k0(p)}}return{start:Cr(l),end:za(l)}})();return{start:c?pn(u.start):ht(u.start),end:c?pn(u.end):ht(u.end)}},Vd=r=>{if(r&&typeof r=="object"){const l=r;return{start:String(l.start??""),end:String(l.end??"")}}return{start:"",end:""}},na=r=>{const l=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(r||""));if(!l)return null;const c=Number(l[1]),d=Number(l[2]),u=Number(l[3]);if(!Number.isFinite(c)||!Number.isFinite(d)||!Number.isFinite(u))return null;const p=new Date(c,d-1,u,0,0,0,0);return p.getFullYear()!==c||p.getMonth()!==d-1||p.getDate()!==u?null:p},Wt=r=>{const l=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(String(r||""));if(!l)return null;const c=Number(l[1]),d=Number(l[2]),u=Number(l[3]),p=Number(l[4]),m=Number(l[5]);if(![c,d,u,p,m].every(x=>Number.isFinite(x)))return null;const y=new Date(c,d-1,u,p,m,0,0);return y.getFullYear()!==c||y.getMonth()!==d-1||y.getDate()!==u||y.getHours()!==p||y.getMinutes()!==m?null:y},j0=new Intl.DateTimeFormat("en",{month:"short"}),wm=r=>`${r.getDate()} ${j0.format(r)}, ${r.getFullYear()}`,Ed=r=>{if(!r)return"";if(r instanceof Date)return ht(r);const l=String(r),c=na(l);if(c)return ht(c);const d=Wt(l);if(d)return ht(d);const u=/^(\d{4})-(\d{2})-(\d{2})/.exec(l);if(!u)return"";const p=`${u[1]}-${u[2]}-${u[3]}`;return na(p)?p:""},ho=r=>{const l=r.getHours(),c=l>=12?"PM":"AM",d=l%12===0?12:l%12;return{hour:String(d),minute:Dr(r.getMinutes()),period:c}},S0=r=>{const l=Number(r.hour),c=r.period==="PM"?12:0;return l%12+c},ta=(r,l)=>{const c=new Date(r);return c.setHours(S0(l),Number(l.minute),0,0),c},Fd=(r,l,c,d)=>{const u=x=>{if(!x)return"";if(d==="iso"){if(!c)return x;const w=Wt(x);if(!w)return x;const S=ho(w);return`${ht(w)} ${S.hour}:${S.minute} ${S.period}`}if(!c){const w=na(x);return w?wm(w):x}const v=Wt(x);if(!v)return x;const b=ho(v);return`${wm(v)} ${b.hour}:${b.minute} ${b.period}`};if(!l){const x=String(r??"");return u(x)}const p=Vd(r),m=p.start||"",y=p.end||"";return!m&&!y?"":`${u(m)}${y?` to ${u(y)}`:""}`},ix=h.forwardRef((r,l)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:m="md",variant:y="outline",tone:x="primary",colorDepth:v=500,className:b,id:w,name:S,required:F,disabled:C,range:T=!1,withTime:N=!1,showPresets:R=!1,presets:Z,displayFormat:M="pretty",clearable:$=!1,onClear:G,rangeTrigger:I="single",monthsToShow:Y,minDate:V,maxDate:K,blockedDates:he,value:ee,defaultValue:ge,onChange:re,onBlur:be,style:se}=r,D=h.useId(),_=w??`oks-datepicker-${D}`,Q=!!p,pe=u?`${_}-description`:void 0,fe=p&&p!==!0?`${_}-error-message`:void 0,k=[pe,fe].filter(Boolean).join(" "),B={"--oks-date-picker-tone":Ma(x,v)},E=ee??ge??(T?{start:"",end:""}:""),j=T?Vd(E):{start:"",end:""},W=T?"":String(E??""),te=h.useRef(null),ie=h.useRef(null),De=h.useRef(null),ae=h.useRef(null),[ne,Fe]=h.useState(!1),[we,Te]=h.useState(null),ze=!C,Oe=!!(T&&R),[de,ke]=h.useState(Oe?"presets":"calendar");h.useEffect(()=>{ne&&ke(Oe?"presets":"calendar")},[ne,Oe]);const ve=h.useMemo(()=>Z&&Z.length>0?Z:T?["today","yesterday","thisWeek","lastWeek","thisMonth","lastMonth","thisYear","custom"]:["today","yesterday","thisMonth","lastMonth","thisYear"],[Z,T]),le=h.useMemo(()=>{const P={...B};if(se&&typeof se=="object")for(const[Be,Re]of Object.entries(se))Be.startsWith("--")&&(P[Be]=Re);return P},[se,B]),je=h.useMemo(()=>{const P=Number(Y);return P===1||P===2?P:T?2:1},[Y,T]),Pe=h.useMemo(()=>Fd(E,T,N,M),[E,T,N,M]),Ze=T?"Select date range":"Select date",Ne=h.useMemo(()=>T?Fd(j.start||"",!1,N,M):"",[T,j.start,N,M]),Ye=h.useMemo(()=>T?Fd(j.end||"",!1,N,M):"",[T,j.end,N,M]),Le=h.useMemo(()=>T?!!(j.start||j.end):!!String(E??""),[E,T,j.start,j.end]),He=h.useMemo(()=>Ed(V),[V]),qe=h.useMemo(()=>Ed(K),[K]),Je=h.useMemo(()=>{const P=new Set;for(const Be of he??[]){const Re=Ed(Be);Re&&P.add(Re)}return P},[he]),Ie=h.useCallback(P=>{const Be=ht(P);return!!(He&&Be<He||qe&&Be>qe||Je.has(Be))},[Je,qe,He]),$e=h.useMemo(()=>He?na(He):null,[He]),jt=h.useMemo(()=>qe?na(qe):null,[qe]),Jt=h.useCallback(P=>{const Be=ht(P);return He&&$e&&Be<He?new Date($e.getFullYear(),$e.getMonth(),$e.getDate(),P.getHours(),P.getMinutes(),0,0):qe&&jt&&Be>qe?new Date(jt.getFullYear(),jt.getMonth(),jt.getDate(),P.getHours(),P.getMinutes(),0,0):P},[jt,qe,$e,He]),ue=h.useCallback((P,Be)=>{let Re=Jt(P);for(let tt=0;tt<370;tt++){if(!Ie(Re))return Re;Re=mo(Re,Be);const tn=ht(Re);if(He&&tn<He||qe&&tn>qe)return null}return null},[Jt,Ie,qe,He]),ye=h.useCallback(P=>{const Be=Vd(P),Re=N?Wt:na,tt=Re(Be.start),tn=Re(Be.end);if(!tt||!tn)return P;const Kt=ue(tt,1),cn=ue(tn,-1);return!Kt||!cn?{start:"",end:""}:ht(Kt)>ht(cn)?{start:"",end:""}:{start:N?pn(Kt):ht(Kt),end:N?pn(cn):ht(cn)}},[ue,N]),Ae=h.useMemo(()=>T?null:N?Wt(W):na(W),[T,N,W]),Ve=h.useMemo(()=>T?N?Wt(j.start):na(j.start):null,[T,N,j.start]),pt=h.useMemo(()=>T?N?Wt(j.end):na(j.end):null,[T,N,j.end]),[Se,et]=h.useState("start"),[it,Et]=h.useState(()=>{const P=Wt(W);return P?ho(P):{hour:"12",minute:"00",period:"AM"}}),[St,fn]=h.useState(()=>{const P=Wt(j.start);return P?ho(P):{hour:"12",minute:"00",period:"AM"}}),[en,aa]=h.useState(()=>{const P=Wt(j.end);return P?ho(P):{hour:"11",minute:"59",period:"PM"}});h.useEffect(()=>{if(N)if(T){const P=Wt(j.start),Be=Wt(j.end);P&&fn(ho(P)),Be&&aa(ho(Be))}else{const P=Wt(W);P&&Et(ho(P))}},[N,T,W,j.start,j.end]);const[jn,zn]=h.useState(()=>{const P=Ve??Ae??new Date;return new Date(P.getFullYear(),P.getMonth(),1,0,0,0,0)}),Uo=h.useRef(!1),Pa=h.useRef("start");h.useEffect(()=>{const P=Uo.current,Be=Pa.current;if(Uo.current=ne,Pa.current=Se,!ne||!(!P||T&&I==="dual"&&Be!==Se))return;const tt=T&&I==="dual"&&Se==="end"?pt??Ve??new Date:Ve??Ae??new Date;zn(new Date(tt.getFullYear(),tt.getMonth(),1,0,0,0,0))},[ne,T,Se,I,pt,Ve,Ae]);const La=()=>{ze&&Fe(!0)},hn=()=>Fe(!1),Ar=d==="top"?c:null,Or=d==="floating"?c:null;h.useEffect(()=>{if(!ne)return;const P=Re=>{const tt=Re.target;tt&&(te.current?.contains(tt)||ae.current?.contains(tt)||hn())},Be=Re=>{Re.key==="Escape"&&(Re.preventDefault(),hn(),T&&I==="dual"?(Se==="end"?De.current:ie.current)?.focus():ie.current?.focus())};return document.addEventListener("pointerdown",P,!0),document.addEventListener("keydown",Be,!0),()=>{document.removeEventListener("pointerdown",P,!0),document.removeEventListener("keydown",Be,!0)}},[ne]),h.useEffect(()=>{if(!ne)return;const P=()=>{const tn=te.current,Kt=ae.current;if(!tn||!Kt)return;const cn=tn.getBoundingClientRect(),mn=Kt.getBoundingClientRect(),Xt=li({triggerRect:cn,tooltipRect:mn,side:"bottom",align:"start",offset:6,collisionPadding:8,strategy:"fixed"});Te({position:"fixed",top:Xt.top,left:Xt.left,minWidth:cn.width})},Be=requestAnimationFrame(P),Re=()=>P(),tt=()=>P();return window.addEventListener("scroll",Re,!0),window.addEventListener("resize",tt),()=>{cancelAnimationFrame(Be),window.removeEventListener("scroll",Re,!0),window.removeEventListener("resize",tt)}},[ne]);const Ia=`${_}-popover`,zr=h.useMemo(()=>{const P=ht(new Date),Be=Ve?ht(Ve):"",Re=pt?ht(pt):"",tt=Ae?ht(Ae):"",tn=Be&&Re?Be<=Re?Be:Re:"",Kt=Be&&Re?Be<=Re?Re:Be:"",cn=mn=>{const Xt=new Date(mn.getFullYear(),mn.getMonth(),1,0,0,0,0),Fn=mo(Xt,-Xt.getDay()),Rn=[];for(let Nt=0;Nt<42;Nt++){const oa=mo(Fn,Nt),Mn=ht(oa),Qn=oa.getMonth()===Xt.getMonth(),xn=Mn===P,_a=T?Mn===Be:Mn===tt,Ho=T?Mn===Re:!1,Er=!!(tn&&Kt&&Mn>=tn&&Mn<=Kt),Ua=Ie(oa);Rn.push({date:oa,key:Mn,inMonth:Qn,isToday:xn,isStart:_a,isEnd:Ho,inRange:Er,isDisabled:Ua})}return Rn};return Array.from({length:je},(mn,Xt)=>{const Fn=Io(jn,Xt);return{month:Fn,cells:cn(Fn)}})},[je,T,pt,Ae,Ve,Ie,jn]),Rs=P=>{if(C||Ie(P))return;if(!T){const xn=N?ta(P,it):P,_a=N?pn(xn):ht(xn);re?.(_a),N||hn();return}const Be=j.start||"",Re=j.end||"",tt=N?Wt(Be):na(Be),tn=N?Wt(Re):na(Re),Kt=ht(P);if(I==="dual"){if(Se==="start"){const Ua=N?ta(P,St):P,Ha=N?pn(Ua):ht(Ua);re?.({start:Ha,end:""}),et("end");return}const xn=N?ta(P,en):P,_a=N?pn(xn):ht(xn);if(!tt){re?.({start:_a,end:""});return}const Ho=ht(tt);if(Kt<Ho){const Ua=N?pn(ta(P,St)):ht(P),Ha=N?pn(ta(tt,en)):ht(tt);re?.({start:Ua,end:Ha})}else re?.({start:Be,end:_a});N||hn();return}const cn=N?ta(P,tt&&!tn?en:St):P,mn=N?pn(cn):ht(cn);if(!tt||tt&&tn){re?.({start:mn,end:""});return}const Xt=tt,Fn=ht(Xt),Rn=Kt<Fn,Nt=Rn?P:Xt,oa=Rn?Xt:P,Mn=N?pn(ta(Nt,St)):ht(Nt),Qn=N?pn(ta(oa,en)):ht(oa);re?.({start:Mn,end:Qn}),N||hn()},vo=()=>{C||Le&&(re?.(T?{start:"",end:""}:""),G?.(),et("start"),hn())},En=h.useMemo(()=>Array.from({length:12},(P,Be)=>String(Be+1)),[]),It=h.useMemo(()=>Array.from({length:60},(P,Be)=>Dr(Be)),[]),Ft=(P,Be)=>{if(P==="single"){Et(Be);const tt=Wt(W);tt&&re?.(pn(ta(tt,Be)));return}if(P==="start"){fn(Be);const tt=Wt(j.start);tt&&re?.({start:pn(ta(tt,Be)),end:j.end});return}aa(Be);const Re=Wt(j.end);Re&&re?.({start:j.start,end:pn(ta(Re,Be))})};return n.jsxs("div",{className:Ra("oksDatePickerField",b),"data-size":m,"data-variant":y,"data-tone":x,"data-label-placement":d,"data-invalid":Q?"true":"false","data-disabled":C?"true":"false","data-range":T?"true":"false","data-range-trigger":I,"data-months":String(je),"data-has-value":Le?"true":"false","data-clear-button":$&&Le?"true":"false",style:{...B,...se},children:[Ar?n.jsxs("label",{className:"oksDatePickerFieldLabel",htmlFor:_,children:[Ar,F?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksDatePickerFieldControl",children:[n.jsxs("div",{ref:te,className:"oksDatePickerFieldTriggerWrap","data-trigger":T&&I==="dual"?"dual":"single",children:[T&&I==="dual"?n.jsxs("div",{className:"oksDatePickerFieldDualTrigger",children:[n.jsx("input",{ref:P=>{ie.current=P,typeof l=="function"?l(P):l&&(l.current=P)},id:_,name:S?`${S}-start`:void 0,type:"text",readOnly:!0,disabled:C,required:F,placeholder:"Start",className:"oksDatePickerFieldDualInput","aria-invalid":Q?"true":void 0,"aria-describedby":k||void 0,"aria-errormessage":fe,"aria-haspopup":"dialog","aria-expanded":ne?"true":"false","aria-controls":ne?Ia:void 0,value:Ne,onClick:()=>{ze&&(et("start"),La())},onKeyDown:P=>{ze&&((P.key==="Enter"||P.key===" "||P.key==="ArrowDown")&&(P.preventDefault(),et("start"),La()),(P.key==="Backspace"||P.key==="Delete")&&$&&Le&&(P.preventDefault(),vo()))},onBlur:P=>{be?.(P),requestAnimationFrame(()=>{const Be=document.activeElement;Be&&(te.current?.contains(Be)||ae.current?.contains(Be)||hn())})}}),n.jsx("span",{className:"oksDatePickerFieldDualArrow","aria-hidden":"true",children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M4 10h12m0 0-4-4m4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsx("input",{ref:P=>{De.current=P},id:`${_}-end`,name:S?`${S}-end`:void 0,type:"text",readOnly:!0,disabled:C,required:F,placeholder:"End",className:"oksDatePickerFieldDualInput","aria-invalid":Q?"true":void 0,"aria-describedby":k||void 0,"aria-errormessage":fe,"aria-haspopup":"dialog","aria-expanded":ne?"true":"false","aria-controls":ne?Ia:void 0,value:Ye,onClick:()=>{ze&&(et("end"),La())},onKeyDown:P=>{ze&&((P.key==="Enter"||P.key===" "||P.key==="ArrowDown")&&(P.preventDefault(),et("end"),La()),(P.key==="Backspace"||P.key==="Delete")&&$&&Le&&(P.preventDefault(),vo()))},onBlur:P=>{be?.(P),requestAnimationFrame(()=>{const Be=document.activeElement;Be&&(te.current?.contains(Be)||ae.current?.contains(Be)||hn())})}})]}):n.jsx("input",{ref:P=>{ie.current=P,typeof l=="function"?l(P):l&&(l.current=P)},id:_,name:S,type:"text",readOnly:!0,disabled:C,required:F,placeholder:Ze,className:"oksDatePickerFieldInput","aria-invalid":Q?"true":void 0,"aria-describedby":k||void 0,"aria-errormessage":fe,"aria-haspopup":"dialog","aria-expanded":ne?"true":"false","aria-controls":ne?Ia:void 0,value:Pe,onClick:()=>{ze&&Fe(P=>!P)},onKeyDown:P=>{ze&&((P.key==="Enter"||P.key===" ")&&(P.preventDefault(),ne?hn():La()),P.key==="ArrowDown"&&(P.preventDefault(),La()),(P.key==="Backspace"||P.key==="Delete")&&$&&Le&&(P.preventDefault(),vo()))},onBlur:P=>{be?.(P),requestAnimationFrame(()=>{const Be=document.activeElement;Be&&(te.current?.contains(Be)||ae.current?.contains(Be)||hn())})}}),Or?n.jsxs("label",{className:"oksDatePickerFieldLabel",htmlFor:_,children:[Or,F?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,$&&Le?n.jsx("button",{type:"button",className:"oksDatePickerFieldClearButton","aria-label":"Clear",onMouseDown:P=>P.preventDefault(),onClick:vo,children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M5 5l10 10M15 5 5 15",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})})}):null,n.jsx("span",{className:"oksDatePickerFieldIcon","aria-hidden":"true",children:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[n.jsx("path",{d:"M6.2 3.6V2.6M13.8 3.6V2.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M3.6 7.2h12.8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("path",{d:"M4.6 5.6h10.8c.6 0 1 .4 1 1v9.2c0 .6-.4 1-1 1H4.6c-.6 0-1-.4-1-1V6.6c0-.6.4-1 1-1Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"})]})})]}),ne?n.jsx(Br,{children:n.jsxs("div",{ref:ae,id:Ia,className:"oksDatePickerFieldPopover",role:"dialog","aria-label":T?"Date range picker":"Date picker","data-range":T?"true":"false","data-range-trigger":I,"data-months":String(je),style:we?{...le,...we}:le,children:[Oe&&de==="presets"?n.jsx("div",{className:"oksDatePickerFieldPresetsList",role:"listbox","aria-label":"Presets",children:ve.map(P=>n.jsx("button",{type:"button",className:"oksDatePickerFieldPresetItem",onMouseDown:Be=>Be.preventDefault(),onClick:()=>{if(P==="custom"){ke("calendar");return}const Re=ye(w0(P,new Date,N));re?.(Re),hn(),(T&&I==="dual"&&Se==="end"?De.current:ie.current)?.focus()},children:y0[P]},P))}):n.jsxs("div",{className:"oksDatePickerFieldCalendar","data-months":String(je),children:[n.jsxs("div",{className:"oksDatePickerFieldCalendarHeader","data-months":String(je),children:[n.jsx("button",{type:"button",className:"oksDatePickerFieldNavButton","aria-label":"Previous month",onMouseDown:P=>P.preventDefault(),onClick:()=>zn(P=>Io(P,-1)),children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M12.6 4.6 7.4 10l5.2 5.4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),je===1?n.jsxs("div",{className:"oksDatePickerFieldMonthLabel",children:[jn.toLocaleString(void 0,{month:"long"})," ",jn.getFullYear()]}):n.jsxs("div",{className:"oksDatePickerFieldMonthLabels",children:[n.jsxs("div",{className:"oksDatePickerFieldMonthLabel",children:[jn.toLocaleString(void 0,{month:"long"})," ",jn.getFullYear()]}),n.jsxs("div",{className:"oksDatePickerFieldMonthLabel",children:[Io(jn,1).toLocaleString(void 0,{month:"long"})," ",Io(jn,1).getFullYear()]})]}),n.jsx("button",{type:"button",className:"oksDatePickerFieldNavButton","aria-label":"Next month",onMouseDown:P=>P.preventDefault(),onClick:()=>zn(P=>Io(P,1)),children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M7.4 4.6 12.6 10l-5.2 5.4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsx("input",{className:"oksDatePickerFieldYearInput",type:"number",inputMode:"numeric",value:jn.getFullYear(),min:1900,max:2100,onChange:P=>{const Be=Number(P.currentTarget.value);Number.isFinite(Be)&&zn(Re=>new Date(Be,Re.getMonth(),1,0,0,0,0))}})]}),n.jsx("div",{className:"oksDatePickerFieldMonths","data-months":String(je),children:zr.map(({month:P,cells:Be})=>n.jsxs("div",{className:"oksDatePickerFieldMonth",children:[n.jsx("div",{className:"oksDatePickerFieldWeekdays","aria-hidden":"true",children:["S","M","T","W","T","F","S"].map((Re,tt)=>n.jsx("div",{className:"oksDatePickerFieldWeekday",children:Re},`${tt}-${Re}`))}),n.jsx("div",{className:"oksDatePickerFieldGrid",role:"grid","aria-label":`Calendar ${P.toLocaleString(void 0,{month:"long"})} ${P.getFullYear()}`,children:Be.map(Re=>n.jsx("button",{type:"button",role:"gridcell",className:"oksDatePickerFieldDay","data-outside":Re.inMonth?"false":"true","data-today":Re.isToday?"true":"false","data-selected":Re.isStart||Re.isEnd?"true":"false","data-range":T&&Re.inRange?"true":"false","data-range-start":T&&Re.isStart?"true":"false","data-range-end":T&&Re.isEnd?"true":"false","data-disabled":Re.isDisabled?"true":"false","aria-selected":Re.isStart||Re.isEnd?"true":"false","aria-label":Re.date.toDateString(),onMouseDown:tt=>tt.preventDefault(),onClick:()=>Rs(Re.date),disabled:C||Re.isDisabled,children:Re.date.getDate()},Re.key))})]},`${P.getFullYear()}-${P.getMonth()}`))}),N?n.jsxs("div",{className:"oksDatePickerFieldTime",children:[n.jsx("div",{className:"oksDatePickerFieldTimeTitle",children:"Select Time"}),T?n.jsxs("div",{className:"oksDatePickerFieldTimeRange",children:[n.jsxs("div",{className:"oksDatePickerFieldTimeRangeBlock",children:[n.jsx("div",{className:"oksDatePickerFieldTimeSubTitle",children:"Start"}),n.jsxs("div",{className:"oksDatePickerFieldTimeRow",children:[n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Hours"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:St.hour,onValueChange:P=>Ft("start",{...St,hour:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:En.map(P=>({value:P,label:P}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Minutes"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:St.minute,onValueChange:P=>Ft("start",{...St,minute:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:It.map(P=>({value:P,label:P}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Period"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:St.period,onValueChange:P=>Ft("start",{...St,period:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:[{value:"AM",label:"AM"},{value:"PM",label:"PM"}]})]})]})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeRangeBlock",children:[n.jsx("div",{className:"oksDatePickerFieldTimeSubTitle",children:"End"}),n.jsxs("div",{className:"oksDatePickerFieldTimeRow",children:[n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Hours"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:en.hour,onValueChange:P=>Ft("end",{...en,hour:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:En.map(P=>({value:P,label:P}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Minutes"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:en.minute,onValueChange:P=>Ft("end",{...en,minute:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:It.map(P=>({value:P,label:P}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Period"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:en.period,onValueChange:P=>Ft("end",{...en,period:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:[{value:"AM",label:"AM"},{value:"PM",label:"PM"}]})]})]})]})]}):n.jsxs("div",{className:"oksDatePickerFieldTimeRow",children:[n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Hours"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:it.hour,onValueChange:P=>Ft("single",{...it,hour:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:En.map(P=>({value:P,label:P}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Minutes"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:it.minute,onValueChange:P=>Ft("single",{...it,minute:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:It.map(P=>({value:P,label:P}))})]}),n.jsxs("div",{className:"oksDatePickerFieldTimeCol",children:[n.jsx("div",{className:"oksDatePickerFieldTimeLabel",children:"Period"}),n.jsx($n,{native:!0,size:"xs-sm",variant:y,tone:x,colorDepth:v,value:it.period,onValueChange:P=>Ft("single",{...it,period:String(P)}),placeholderOption:null,className:"oksDatePickerFieldTimeSelect",options:[{value:"AM",label:"AM"},{value:"PM",label:"PM"}]})]})]})]}):null]}),Oe&&de==="calendar"?n.jsx("div",{className:"oksDatePickerFieldBackToPresets",children:n.jsx("button",{type:"button",className:"oksDatePickerFieldBackButton",onMouseDown:P=>P.preventDefault(),onClick:()=>ke("presets"),children:"Back"})}):null]})}):null]}),u?n.jsx("div",{id:pe,className:"oksDatePickerFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:fe,className:"oksDatePickerFieldError",role:"alert",children:p}):null]})});ix.displayName="DatePickerField";var C0={required:"This field is required",email:"Please enter a valid email address",minLength:r=>`Must be at least ${r} characters`,maxLength:r=>`Must be no more than ${r} characters`,pattern:"Please match the required format",alpha:"Only letters are allowed",alphanumeric:"Only letters and numbers are allowed",numeric:"Please enter a valid number",min:r=>`Must be at least ${r}`,max:r=>`Must be no more than ${r}`,strongPassword:"Weak password. Must contain required items.",matchField:"Fields do not match",accept:"Unsupported file type",maxFileSize:r=>`File must be ${r} bytes or less`,maxFiles:r=>`Must select no more than ${r} files`},Ro=r=>String(r??"").replace(/\D+/g,""),Mo=r=>{if(Array.isArray(r)&&r.length>0){const l=r[0];if(l&&typeof l=="object"){const c=l;return{code:c.code??"",phone:c.phone??""}}return null}if(r&&typeof r=="object"){const l=r;if("phone"in l||"code"in l)return{code:l.code??"",phone:l.phone??""}}return null},D0=r=>{if(r&&typeof r=="object"){const l=r;if("start"in l||"end"in l)return{start:l.start??"",end:l.end??""}}return null},cx=r=>typeof FileList>"u"?!1:r instanceof FileList,jm=r=>typeof File>"u"?!1:r instanceof File,ei=r=>r?jm(r)?[r]:cx(r)?Array.from(r):Array.isArray(r)&&r.every(l=>jm(l))?r:[]:[],T0=(r,l)=>{if(!l)return;if(Object.prototype.hasOwnProperty.call(r,l))return r[l];const c=l.split(".").filter(Boolean);let d=r;for(const u of c){if(!d||typeof d!="object")return;d=d[u]}return d},N0=r=>(Array.isArray(r)?r.join(","):r).split(",").map(c=>c.trim()).filter(Boolean),B0=(r,l)=>{const c=l.toLowerCase();if(c.startsWith("."))return r.name.toLowerCase().endsWith(c);if(c.endsWith("/*")){const d=c.slice(0,-1);return r.type.toLowerCase().startsWith(d)}return r.type.toLowerCase()===c},A0=r=>{const l=r&&typeof r=="object"?r:{},c=typeof l.minLength=="number"?l.minLength:8,d=typeof l.minUpper=="number"?l.minUpper:1,u=typeof l.minLower=="number"?l.minLower:1,p=typeof l.minNumber=="number"?l.minNumber:1,m=typeof l.minSpecial=="number"?l.minSpecial:1;return{minLength:c,minUpper:d,minLower:u,minNumber:p,minSpecial:m}};function dx(r,l){const{minLength:c,minUpper:d,minLower:u,minNumber:p,minSpecial:m}=A0(l),y=String(r??""),x=y.length,v=(y.match(/[A-Z]/g)||[]).length,b=(y.match(/[a-z]/g)||[]).length,w=(y.match(/[0-9]/g)||[]).length,S=(y.match(/[^A-Za-z0-9]/g)||[]).length,F=x>=c,C=v>=d,T=b>=u,N=w>=p,R=S>=m;return{ok:F&&C&&T&&N&&R,minLength:c,minUpper:d,minLower:u,minNumber:p,minSpecial:m,length:x,uppers:v,lowers:b,numbers:w,specials:S,minLengthOk:F,upperOk:C,lowerOk:T,numberOk:N,specialOk:R}}var O0={required:r=>{if(r==null)return!1;if(typeof r=="string")return r.trim().length>0;const l=Mo(r);if(l)return Ro(l.phone).length>0;const c=D0(r);return c?String(c.start??"").trim().length>0&&String(c.end??"").trim().length>0:ei(r).length>0?!0:cx(r)||Array.isArray(r)?r.length>0:typeof r=="boolean"?r===!0:typeof r=="number"?Number.isFinite(r):!!r},email:r=>r?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(r)):!0,minLength:(r,l)=>{if(!r)return!0;const c=Mo(r);return c?Ro(c.phone).length>=l:String(r).length>=l},maxLength:(r,l)=>{if(!r)return!0;const c=Mo(r);return c?Ro(c.phone).length<=l:String(r).length<=l},pattern:(r,l)=>{if(!r||!(l instanceof RegExp))return!0;const c=Mo(r);if(c){const d=Ro(c.phone),p=`${String(c.code??"")}${d}`;return l.test(p)||l.test(d)}return l.test(String(r))},alpha:r=>r?/^[A-Za-z]+$/.test(String(r)):!0,alphanumeric:r=>r?/^[A-Za-z0-9]+$/.test(String(r)):!0,numeric:r=>{if(!r)return!0;const l=Mo(r),c=l?Ro(l.phone):r;if(c==="")return!0;const d=Number(c);return!Number.isNaN(d)&&Number.isFinite(d)},min:(r,l)=>{if(!r)return!0;const c=Mo(r),d=c?Ro(c.phone):r;if(d==="")return!0;const u=Number(d);return!Number.isNaN(u)&&Number.isFinite(u)&&u>=l},max:(r,l)=>{if(!r)return!0;const c=Mo(r),d=c?Ro(c.phone):r;if(d==="")return!0;const u=Number(d);return!Number.isNaN(u)&&Number.isFinite(u)&&u<=l},strongPassword:(r,l)=>r?dx(String(r),l).ok:!0,matchField:(r,l,c)=>{if(!c?.formData||!l||typeof l!="string")return!0;const d=T0(c.formData,l);return r===d},accept:(r,l)=>{const c=ei(r);if(c.length<1||!l)return!0;const d=N0(l);return d.length<1?!0:c.every(u=>d.some(p=>B0(u,p)))},maxFileSize:(r,l)=>{const c=ei(r);return c.length<1||typeof l!="number"||!Number.isFinite(l)?!0:c.every(d=>typeof d.size=="number"?d.size<=l:!0)},maxFiles:(r,l)=>{const c=ei(r);return c.length<1||typeof l!="number"||!Number.isFinite(l)?!0:c.length<=l}};function Bs(r,l,c={},d){const u={};if(!l)return u;if(Object.keys(l).forEach(p=>{const m=l[p];if(m===!1||m===void 0||p==="custom")return;const y=O0[p];if(!y||y(r,m,d))return;const v=c[p];if(typeof v=="string"&&v.length>0){u[p]=v;return}const b=C0[p];if(typeof b=="function"){u[p]=b(m);return}u[p]=typeof b=="string"&&b.length>0?b:"Validation failed"}),typeof l.custom=="function"){const p=l.custom(r,d);p!==!0&&(u.custom=typeof p=="string"?p:c.custom||"Custom validation failed")}return u}function As(r){const l=Object.keys(r);if(l.length<1)return null;const c=l[0];return r[c]??null}function Sm(r,l){const c={};return Object.keys(l).forEach(d=>{const u=l[d],p=r[d],m=Bs(p,u?.rules,u?.message??{},{formData:r,fieldName:d});Object.keys(m).length>0&&(c[d]=As(m))}),c}zt(`@layer components {
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
`);var Ts=(r,l)=>r===1?l:`${l}s`,ux=h.forwardRef((r,l)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:m="md",variant:y="outline",color:x,tone:v,colorDepth:b=500,radius:w,rounded:S,startIcon:F,endIcon:C,prefix:T,suffix:N,className:R,id:Z,required:M,disabled:$,placeholder:G,style:I,value:Y,defaultValue:V,onFocus:K,onBlur:he,strongPassword:ee,revealToggle:ge=!0,...re}=r,be=x??v??"default",se=w??S??"md",D=h.useId(),_=Z??`oks-password-field-${D}`,[Q,pe]=h.useState(!1),[fe,k]=h.useState(!1),B=re["aria-describedby"],E=u?`${_}-description`:void 0,j=p&&p!==!0?`${_}-error-message`:void 0,W=`${_}-requirements`,te=!!ee&&fe,ie=[B,E,te?W:void 0,te?void 0:j].filter(Boolean).join(" "),De=!!p,ae=h.useMemo(()=>d!=="floating"||!c||G!==void 0?G:" ",[d,c,G]),ne={"--oks-text-field-tone":Ma(be,b)},Fe=d==="top"?c:null,we=d==="floating"?c:null,Te=F!=null||T!=null,ze=C!=null||N!=null||ge,Oe=h.useMemo(()=>{if(!ee)return null;const ve=Y!==void 0?String(Y??""):V!==void 0?String(V??""):"";return dx(ve,ee)},[Y,V,ee]),de=h.useMemo(()=>{const ve=[];if(ee&&Oe){const le=typeof ee.minLength=="number"?ee.minLength:8,je=typeof ee.minUpper=="number"?ee.minUpper:1,Pe=typeof ee.minLower=="number"?ee.minLower:1,Ze=typeof ee.minNumber=="number"?ee.minNumber:1,Ne=typeof ee.minSpecial=="number"?ee.minSpecial:1;Ze>0&&ve.push({key:"number",met:Oe.numberOk,label:`At least ${Ze} ${Ts(Ze,"number")}`}),je>0&&ve.unshift({key:"upper",met:Oe.upperOk,label:`At least ${je} uppercase ${Ts(je,"letter")}`}),Ne>0&&ve.push({key:"special",met:Oe.specialOk,label:`At least ${Ne} special ${Ts(Ne,"character")}`}),le>0&&ve.push({key:"length",met:Oe.minLengthOk,label:`At least ${le} ${Ts(le,"character")}`}),Pe>0&&ve.push({key:"lower",met:Oe.lowerOk,label:`At least ${Pe} lowercase ${Ts(Pe,"letter")}`})}return ve},[ee,Oe]),ke=h.useMemo(()=>ee?Oe?Oe.ok?"Strong password.":"Weak password. Must contain;":"Must contain;":null,[ee,Oe]);return n.jsxs("div",{className:Ra("oksTextField oksPasswordField",R),"data-size":m,"data-variant":y,"data-color":be,"data-radius":se,"data-label-placement":d,"data-invalid":De?"true":"false","data-disabled":$?"true":"false","data-has-start":Te?"true":"false","data-has-end":ze?"true":"false",style:{...ne,...I},children:[Fe?n.jsxs("label",{className:"oksTextFieldLabel",htmlFor:_,children:[Fe,M?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksTextFieldControl",onFocusCapture:()=>k(!0),onBlurCapture:ve=>{const le=ve.relatedTarget??null;le&&ve.currentTarget.contains(le)||k(!1)},children:[Te?n.jsxs("span",{className:"oksTextFieldAdornment oksTextFieldStart",children:[F!=null?n.jsx("span",{className:"oksTextFieldIcon",children:F}):null,T!=null?n.jsx("span",{className:"oksTextFieldAffix",children:T}):null]}):null,n.jsxs("div",{className:"oksTextFieldInputSlot",children:[n.jsx("input",{...re,ref:l,id:_,required:M,disabled:$,type:Q?"text":"password",value:Y,defaultValue:V,placeholder:ae,className:"oksTextFieldInput","aria-invalid":De?"true":void 0,"aria-describedby":ie||void 0,"aria-errormessage":te?void 0:j,onFocus:ve=>{K?.(ve)},onBlur:ve=>{he?.(ve)}}),we?n.jsxs("label",{className:"oksTextFieldLabel",htmlFor:_,children:[we,M?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),ze?n.jsxs("span",{className:"oksTextFieldAdornment oksTextFieldEnd",children:[N!=null?n.jsx("span",{className:"oksTextFieldAffix",children:N}):null,C!=null?n.jsx("span",{className:"oksTextFieldIcon",children:C}):null,ge?n.jsx("button",{type:"button",className:"oksPasswordFieldRevealButton","aria-label":Q?"Hide password":"Show password","aria-pressed":Q,disabled:$,tabIndex:$?-1:0,onClick:()=>pe(ve=>!ve),children:Q?n.jsx(mk,{}):n.jsx(hk,{})}):null]}):null,te&&de.length>0?n.jsxs("div",{id:W,className:"oksPasswordFieldRequirements",children:[ke?n.jsx("div",{className:"oksPasswordFieldRequirementsTitle",children:ke}):null,n.jsx("ul",{className:"oksPasswordFieldRequirementsList",children:de.map(ve=>n.jsxs("li",{className:"oksPasswordFieldRequirement","data-met":ve.met?"true":"false",children:[n.jsx("span",{className:"oksPasswordFieldRequirementIcon","aria-hidden":"true",children:n.jsx(Jd,{type:ve.met?"success":"error"})}),n.jsx("span",{children:ve.label})]},ve.key))})]}):null]}),u?n.jsx("div",{id:E,className:"oksTextFieldDescription",children:u}):null,te?null:p&&p!==!0?n.jsx("div",{id:j,className:"oksTextFieldError",role:"alert",children:p}):null]})});ux.displayName="PasswordField";zt(`@layer components {
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
`);var z0=[{name:"United States",code:"+1",flag:"🇺🇸",shortCode:"US"},{name:"India",code:"+91",flag:"🇮🇳",shortCode:"IN"},{name:"United Kingdom",code:"+44",flag:"🇬🇧",shortCode:"GB"},{name:"United Arab Emirates",code:"+971",flag:"🇦🇪",shortCode:"AE"}],Rd=(r,l)=>{if(r&&typeof r=="object"){const c=r;return{code:String(c.code||l),phone:String(c.phone??"")}}return{code:l,phone:""}},px=h.forwardRef((r,l)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:m="md",variant:y="outline",tone:x="primary",colorDepth:v=500,className:b,id:w,name:S,required:F,disabled:C,value:T,defaultValue:N,defaultCountryCode:R,countryCodeMode:Z="select",countryOptions:M,numbersOnly:$=!0,onChange:G,phonePlaceholder:I="Phone number",style:Y,onBlur:V,...K}=r,he=h.useId(),ee=w??`oks-phone-${he}`,ge=K["aria-describedby"],re=u?`${ee}-description`:void 0,be=p&&p!==!0?`${ee}-error-message`:void 0,se=[ge,re,be].filter(Boolean).join(" "),D=!!p,_={"--oks-phone-tone":Ma(x,v)},Q=M&&M.length>0?M:z0,pe=R??Q[0]?.code??"",[fe,k]=h.useState(()=>Rd(T??N,pe));h.useEffect(()=>{T!==void 0&&k(Rd(T,pe))},[T,pe]);const B=T!==void 0?Rd(T,pe):fe,E=we=>{if(we.name)return String(we.name);if(we.label){const Te=String(we.label),ze=Te.match(/^\s*(.*?)\s*\(/);return ze?.[1]?ze[1].trim():Te.trim()}return""},j=we=>{if(we.shortCode)return String(we.shortCode);if(we.label){const ze=String(we.label).match(/^\s*([A-Za-z]{2,3})\s*\(/);if(ze?.[1])return ze[1].trim()}return""},W=h.useMemo(()=>Q.map(we=>({label:n.jsxs("span",{className:"oksPhoneCountryOption",children:[we.flag?n.jsx("span",{className:"oksPhoneCountryFlag",children:we.flag}):j(we)?n.jsx("span",{className:"oksPhoneCountryShort",children:j(we)}):null,E(we)?n.jsx("span",{className:"oksPhoneCountryName",children:E(we)}):null,n.jsx("span",{className:"oksPhoneCountryCode",children:we.code})]}),value:we.code,key:we.key??we.code})),[Q]),te=h.useMemo(()=>d!=="floating"||!c||I!==void 0?I:" ",[d,c,I]),ie=d==="top"?c:null,De=d==="floating"?c:null,ae=we=>{T===void 0&&k(we),G?.(we)},ne=$&&K.inputMode===void 0?"numeric":K.inputMode,Fe=$&&K.pattern===void 0?"\\d*":K.pattern;return n.jsxs("div",{className:Ra("oksPhoneField",b),"data-size":m,"data-variant":y,"data-tone":x,"data-country-code-mode":Z,"data-label-placement":d,"data-invalid":D?"true":"false","data-disabled":C?"true":"false",style:{..._,...Y},children:[ie?n.jsxs("label",{className:"oksPhoneFieldLabel",htmlFor:`${ee}-phone`,children:[ie,F?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksPhoneFieldControl",children:[Z==="select"?n.jsxs("div",{className:"oksPhoneFieldCode",children:[n.jsx($n,{"aria-label":"Country code",size:m,variant:y,tone:x,colorDepth:v,options:W,value:String(B.code??""),disabled:C,onChange:we=>ae({code:String(we?.target?.value??""),phone:B.phone}),onBlur:V}),n.jsx("span",{className:"oksPhoneDialCode","aria-hidden":"true",children:String(B.code??"")})]}):null,n.jsxs("div",{className:"oksPhoneFieldInputWrap",children:[n.jsx("input",{...K,ref:l,id:`${ee}-phone`,name:S,type:"tel",disabled:C,required:F,className:"oksPhoneFieldInput",placeholder:te,"aria-invalid":D?"true":void 0,"aria-describedby":se||void 0,"aria-errormessage":be,value:String(B.phone??""),inputMode:ne,pattern:Fe,onChange:we=>{const Te=we.currentTarget.value,ze=$?Te.replace(/[^\d]/g,""):Te,Oe=K.maxLength,de=typeof Oe=="number"&&Number.isFinite(Oe)&&Oe>=0?ze.slice(0,Oe):ze;ae({code:B.code,phone:de})},onBlur:V}),De?n.jsxs("label",{className:"oksPhoneFieldLabel",htmlFor:`${ee}-phone`,children:[De,F?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]})]}),u?n.jsx("div",{id:re,className:"oksPhoneFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:be,className:"oksPhoneFieldError",role:"alert",children:p}):null]})});px.displayName="PhoneField";zt(`@layer components {
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
`);var fx=h.forwardRef((r,l)=>{const{label:c,description:d,error:u,size:p="md",tone:m="primary",colorDepth:y=500,className:x,id:v,name:b,required:w,disabled:S,options:F,value:C,defaultValue:T,onChange:N,style:R}=r,Z=h.useId(),M=v??`oks-radio-group-${Z}`,$=b??M,G=d?`${M}-description`:void 0,I=u&&u!==!0?`${M}-error-message`:void 0,Y=[G,I].filter(Boolean).join(" "),V=!!u,K=C!==void 0,[he,ee]=h.useState(()=>T??"");h.useEffect(()=>{K&&ee(C??"")},[K,C]);const ge=K?String(C??""):he,re={"--oks-radio-tone":Ma(m,y)};return n.jsxs("div",{ref:l,className:Ra("oksRadioGroupField",x),"data-size":p,"data-tone":m,"data-invalid":V?"true":"false","data-disabled":S?"true":"false",style:{...re,...R},children:[c?n.jsxs("div",{className:"oksRadioGroupFieldLabel",children:[c,w?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsx("div",{role:"radiogroup","aria-describedby":Y||void 0,children:n.jsx("div",{className:"oksRadioGroupFieldItems",children:F.map((be,se)=>{const D=`${M}-${be.key??`${se}-${be.value}`}`,_=S||be.disabled,Q=String(ge)===be.value;return n.jsxs("label",{className:"oksRadioGroupFieldItem","data-disabled":_?"true":"false",children:[n.jsx("input",{id:D,type:"radio",name:$,disabled:_,value:be.value,checked:Q,onChange:()=>{_||(K||ee(be.value),N?.(be.value))},className:"oksRadioGroupFieldInput","aria-invalid":V?"true":void 0}),n.jsx("span",{className:"oksRadioGroupFieldItemLabel",children:be.label})]},be.key??`${se}-${be.value}`)})})}),d?n.jsx("div",{id:G,className:"oksRadioGroupFieldDescription",children:d}):null,u&&u!==!0?n.jsx("div",{id:I,className:"oksRadioGroupFieldError",role:"alert",children:u}):null]})});fx.displayName="RadioGroupField";zt(`@layer components {
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
`);var hx=h.forwardRef((r,l)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:m="md",tone:y="primary",colorDepth:x=500,className:v,id:b,required:w,disabled:S,checked:F,defaultChecked:C,onChange:T,showStateText:N=!1,checkedText:R="On",uncheckedText:Z="Off",stateTextPlacement:M="after",style:$,...G}=r,I=h.useId(),Y=b??`oks-switch-${I}`,V=d==="floating"?"top":d,K=u?`${Y}-description`:void 0,he=p&&p!==!0?`${Y}-error-message`:void 0,ee=[K,he].filter(Boolean).join(" "),ge=!!p,re={"--oks-switch-tone":Ma(y,x)};return n.jsxs("div",{className:Ra("oksSwitchField",v),"data-size":m,"data-tone":y,"data-label-placement":V,"data-invalid":ge?"true":"false","data-disabled":S?"true":"false",style:{...re,...$},children:[n.jsxs("label",{ref:l,className:"oksSwitchFieldRow",htmlFor:Y,children:[V==="top"&&c?n.jsxs("span",{className:"oksSwitchFieldLabel",children:[c,w?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("span",{className:"oksSwitchFieldControl",children:[n.jsx("input",{...G,id:Y,type:"checkbox",role:"switch",required:w,disabled:S,checked:F,defaultChecked:C,onChange:be=>T?.(be.currentTarget.checked),className:"oksSwitchFieldInput","aria-invalid":ge?"true":void 0,"aria-describedby":ee||void 0,"aria-errormessage":he}),n.jsxs("span",{className:"oksSwitchFieldControlInner","data-state-text-placement":M,children:[n.jsx("span",{className:"oksSwitchFieldTrack","aria-hidden":"true",children:n.jsx("span",{className:"oksSwitchFieldThumb"})}),N?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"oksSwitchFieldStateText","data-state":"unchecked",children:Z}),n.jsx("span",{className:"oksSwitchFieldStateText","data-state":"checked",children:R})]}):null]})]}),V!=="top"&&c?n.jsxs("span",{className:"oksSwitchFieldLabel",children:[c,w?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),u?n.jsx("div",{id:K,className:"oksSwitchFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:he,className:"oksSwitchFieldError",role:"alert",children:p}):null]})});hx.displayName="SwitchField";zt(`@layer components {
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
`);var mx=h.forwardRef((r,l)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:m="md",variant:y="outline",tone:x="primary",colorDepth:v=500,className:b,id:w,required:S,disabled:F,placeholder:C,rows:T=4,style:N,...R}=r,Z=h.useId(),M=w??`oks-text-area-${Z}`,$=R["aria-describedby"],G=u?`${M}-description`:void 0,I=p&&p!==!0?`${M}-error-message`:void 0,Y=[$,G,I].filter(Boolean).join(" "),V=!!p,K=h.useMemo(()=>d!=="floating"||!c||C!==void 0?C:" ",[d,c,C]),he={"--oks-text-area-tone":Ma(x,v)},ee=d==="top"?c:null,ge=d==="floating"?c:null;return n.jsxs("div",{className:Ra("oksTextAreaField",b),"data-size":m,"data-variant":y,"data-tone":x,"data-label-placement":d,"data-invalid":V?"true":"false","data-disabled":F?"true":"false",style:{...he,...N},children:[ee?n.jsxs("label",{className:"oksTextAreaFieldLabel",htmlFor:M,children:[ee,S?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksTextAreaFieldControl",children:[n.jsx("textarea",{...R,ref:l,id:M,required:S,disabled:F,placeholder:K,rows:T,className:"oksTextAreaFieldInput","aria-invalid":V?"true":void 0,"aria-describedby":Y||void 0,"aria-errormessage":I}),ge?n.jsxs("label",{className:"oksTextAreaFieldLabel",htmlFor:M,children:[ge,S?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),u?n.jsx("div",{id:G,className:"oksTextAreaFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:I,className:"oksTextAreaFieldError",role:"alert",children:p}):null]})});mx.displayName="TextAreaField";var Gd=h.forwardRef((r,l)=>{const{label:c,labelPlacement:d="top",description:u,error:p,size:m="md",variant:y="outline",color:x,tone:v,colorDepth:b=500,radius:w,rounded:S,startIcon:F,endIcon:C,prefix:T,suffix:N,className:R,id:Z,required:M,disabled:$,placeholder:G,style:I,...Y}=r,V=x??v??"default",K=w??S??"md",he=h.useId(),ee=Z??`oks-text-field-${he}`,ge=Y["aria-describedby"],re=u?`${ee}-description`:void 0,be=p&&p!==!0?`${ee}-error-message`:void 0,se=[ge,re,be].filter(Boolean).join(" "),D=!!p,_=h.useMemo(()=>d!=="floating"||!c||G!==void 0?G:" ",[d,c,G]),Q={"--oks-text-field-tone":Ma(V,b)},pe=d==="top"?c:null,fe=d==="floating"?c:null,k=F!=null||T!=null,B=C!=null||N!=null;return n.jsxs("div",{className:Ra("oksTextField",R),"data-size":m,"data-variant":y,"data-color":V,"data-radius":K,"data-label-placement":d,"data-invalid":D?"true":"false","data-disabled":$?"true":"false","data-has-start":k?"true":"false","data-has-end":B?"true":"false",style:{...Q,...I},children:[pe?n.jsxs("label",{className:"oksTextFieldLabel",htmlFor:ee,children:[pe,M?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null,n.jsxs("div",{className:"oksTextFieldControl",children:[k?n.jsxs("span",{className:"oksTextFieldAdornment oksTextFieldStart",children:[F!=null?n.jsx("span",{className:"oksTextFieldIcon",children:F}):null,T!=null?n.jsx("span",{className:"oksTextFieldAffix",children:T}):null]}):null,n.jsxs("div",{className:"oksTextFieldInputSlot",children:[n.jsx("input",{...Y,ref:l,id:ee,required:M,disabled:$,placeholder:_,className:"oksTextFieldInput","aria-invalid":D?"true":void 0,"aria-describedby":se||void 0,"aria-errormessage":be}),fe?n.jsxs("label",{className:"oksTextFieldLabel",htmlFor:ee,children:[fe,M?n.jsx("span",{"aria-hidden":"true",children:"*"}):null]}):null]}),B?n.jsxs("span",{className:"oksTextFieldAdornment oksTextFieldEnd",children:[N!=null?n.jsx("span",{className:"oksTextFieldAffix",children:N}):null,C!=null?n.jsx("span",{className:"oksTextFieldIcon",children:C}):null]}):null]}),u?n.jsx("div",{id:re,className:"oksTextFieldDescription",children:u}):null,p&&p!==!0?n.jsx("div",{id:be,className:"oksTextFieldError",role:"alert",children:p}):null]})});Gd.displayName="TextField";var xx=h.createContext(void 0),E0=()=>h.useContext(xx),gx=h.forwardRef((r,l)=>{const{children:c,onSubmit:d,onError:u,validationMode:p="blur",showErrorsOn:m="blur",className:y="",validateOnMount:x=!1,initialValues:v={},disableAutofill:b=!0,...w}=r,{autoComplete:S,...F}=w,C=S??(b?"off":void 0),[T,N]=h.useState(()=>v||{}),[R,Z]=h.useState({}),[M,$]=h.useState({}),[G,I]=h.useState(!1),[Y,V]=h.useState({}),K=h.useRef(v||{}),he=h.useRef({}),ee=h.useRef(new Set),ge=h.useRef({}),re=h.useRef(v||{});h.useEffect(()=>{re.current=v||{}},[v]),h.useEffect(()=>{K.current=T},[T]);const be=h.useCallback(E=>{const j=String(E||"field").trim()||"field",W=ee.current,te=ge.current;if(!W.has(j))return W.add(j),te[j]=1,j;let ie=(te[j]||1)+1,De=`${j}_${ie}`;for(;W.has(De);)ie+=1,De=`${j}_${ie}`;return te[j]=ie,W.add(De),De},[]),se=h.useCallback((E,j)=>{!j||!j.rules||Object.keys(j.rules).length<1||V(W=>{const te=W[E],ie=te?JSON.stringify(te):"",De=JSON.stringify(j);return ie===De?W:{...W,[E]:j}})},[]),D=h.useCallback(E=>{V(j=>{const W={...j};return delete W[E],W}),ee.current.delete(E),Z(j=>{const W={...j};return delete W[E],W}),$(j=>{const W={...j};return delete W[E],W})},[]),_=h.useCallback((E,j,W)=>{if(!W||!W.rules)return null;const te=Bs(j,W.rules,W.message??{},{formData:K.current,fieldName:E}),ie=As(te);return Z(De=>({...De,[E]:ie})),ie},[]),Q=h.useCallback((E,j)=>{if(N(te=>({...te,[E]:j})),(!!M[E]||p==="change")&&Y[E]){const te=he.current;te[E]&&clearTimeout(te[E]),te[E]=setTimeout(()=>{const ie=Y[E];ie&&_(E,j,ie),te[E]=void 0},400)}},[M,p,Y,_]),pe=h.useCallback(E=>{$(W=>({...W,[E]:!0}));const j=Y[E];if(j){const W=T[E];_(E,W,j)}},[Y,T,_]),fe=h.useCallback(async E=>{E.preventDefault(),I(!0);const j=Sm(T,Y);if(Z(j),Object.keys(j).some(te=>j[te]!==null)){const te={};Object.keys(Y).forEach(ie=>{te[ie]=!0}),$(te),I(!1),u?.(j);return}try{await d(T)}catch(te){const ie=te instanceof Error?te.message:"Submit failed";u?.({submit:ie})}finally{I(!1)}},[T,Y,d,u]),k=h.useCallback(E=>{const j=E&&typeof E=="object"?E:re.current||{};N(j),Z({}),$({}),I(!1)},[]);h.useImperativeHandle(l,()=>({reset:k}),[k]),h.useEffect(()=>{if(x&&Object.keys(Y).length>0){const E=Sm(T,Y);Z(E)}},[x,Y,T]);const B={formData:T,errors:R,touched:M,isSubmitting:G,disableAutofill:b,validationMode:p,showErrorsOn:m,validationSchema:Y,registerField:se,unregisterField:D,validateFieldValue:_,handleFieldChange:Q,handleFieldBlur:pe,getUniqueFieldName:be,setFormData:N,setErrors:Z,setTouched:$};return n.jsx(xx.Provider,{value:B,children:n.jsxs("form",{onSubmit:fe,className:y,noValidate:!0,autoComplete:C,...F,children:[b?n.jsxs(n.Fragment,{children:[n.jsx("input",{tabIndex:-1,"aria-hidden":"true",type:"text",name:"__oks_autofill_username",autoComplete:"username",style:{position:"absolute",top:0,left:-9999,width:1,height:1,opacity:0,pointerEvents:"none"}}),n.jsx("input",{tabIndex:-1,"aria-hidden":"true",type:"password",name:"__oks_autofill_password",autoComplete:"new-password",style:{position:"absolute",top:0,left:-9999,width:1,height:1,opacity:0,pointerEvents:"none"}})]}):null,c]})})});gx.displayName="Form";var Md=r=>String(r||"").toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"");function F0(r,l){if(r)return r[l]}function R0(r,l){if(r)return r[l]}var M0=r=>{const{type:l="text",label:c,description:d,labelPlacement:u,size:p="md",variant:m="outline",color:y,tone:x,colorDepth:v=500,name:b,id:w,validation:S,error:F,touched:C,...T}=r,N=y??x??"default",{onChange:R,onBlur:Z,value:M,defaultValue:$,...G}=T,I=E0(),Y=!!I?.disableAutofill,{autoComplete:V,...K}=G??{},he=V??(Y?l==="password"?"new-password":"off":void 0),ee=he===void 0?K:{...K,autoComplete:he},ge=h.useId(),re=h.useMemo(()=>String(ge).replace(/[^a-z0-9_-]/gi,""),[ge]),be=ee?.placeholder,se=h.useMemo(()=>w?Md(w):c?Md(c):be?Md(be):"field",[w,c,be]),D=h.useRef(null);D.current===null&&(b?D.current=b:typeof I?.getUniqueFieldName=="function"?D.current=I.getUniqueFieldName(se):D.current=se);const _=h.useRef(null);if(_.current===null)if(w)_.current=w;else{const ve=re||"id";_.current=`${se}_${ve}`}const Q=D.current??se,pe=_.current??`${se}_${re||"id"}`,fe=h.useMemo(()=>S&&S.rules&&Object.keys(S.rules).length>0?S:null,[S]),k=I?.registerField,B=I?.unregisterField,E=h.useRef(!1);h.useEffect(()=>(k&&fe&&!E.current&&(k(Q,fe),E.current=!0),()=>{B&&E.current&&(B(Q),E.current=!1)}),[Q,fe,k,B]),h.useEffect(()=>{k&&fe&&E.current&&k(Q,fe)},[fe,Q,k]);const[j,W]=h.useState(()=>M!==void 0?M:$!==void 0?$:l==="checkbox"?[]:l==="switch"?!1:l==="file"?null:""),[te,ie]=h.useState(!1),[De,ae]=h.useState(null);h.useEffect(()=>{if(!I&&fe?.rules){const ve=Bs(j,fe.rules,fe.message??{});ae(As(ve))}},[I,j,fe]);const ne=(()=>{if(I){const ve=F0(I.formData,Q);if(ve!==void 0)return ve}return M!==void 0?M:j})(),Fe=C!==void 0?C:I?!!I.touched[Q]:te,we=F!==void 0?F:I?R0(I.errors,Q):De,Te=!!we&&!!Fe,ze=ve=>{const le=(()=>{if(ve&&typeof ve=="object"&&"target"in ve){const je=ve.target;return l==="file"?je.files??null:je.value}return ve})();if(I)I.handleFieldChange(Q,le),I.validationMode==="change"&&fe?.rules&&I.validateFieldValue(Q,le,fe);else if(W(le),fe?.rules){const je=Bs(le,fe.rules,fe.message??{});ae(As(je))}R?.(ve)},Oe=ve=>{if(I)I.handleFieldBlur(Q);else if(ie(!0),fe?.rules){const le=Bs(j,fe.rules,fe.message??{});ae(As(le))}Z?.(ve)},de={label:c,description:d,labelPlacement:u,size:p,variant:m,color:N,colorDepth:v,id:pe,name:Q,disabled:ee.disabled,required:ee.required};if(l==="textarea"){const ve=ne==null?"":String(ne);return n.jsx(mx,{...ee,...de,value:ve,onChange:ze,onBlur:Oe,error:Te?we:!1})}if(l==="select"){const{placeholder:ve,placeholderOption:le,...je}=ee,Ze=!!ee.multiple?Array.isArray(ne)?ne.map(Ne=>String(Ne)):[]:ne==null?"":String(ne);return n.jsx($n,{...je,...de,placeholderOption:le??ve,value:Ze,onChange:ze,onBlur:Oe,error:Te?we:!1})}if(l==="radio"){const ve=ne==null?"":String(ne);return n.jsx(fx,{...ee,...de,value:ve,onChange:le=>ze(le),error:Te?we:!1})}if(l==="checkbox"){const ve=Array.isArray(ne)?ne.map(le=>String(le)):[];return n.jsx(lx,{...ee,...de,value:ve,onChange:le=>ze(le),error:Te?we:!1})}if(l==="switch")return n.jsx(hx,{...ee,...de,checked:!!ne,onChange:ve=>ze(ve),error:Te?we:!1});if(l==="datepicker"){const le=!!ee.range?ne&&typeof ne=="object"?{start:String(ne.start??""),end:String(ne.end??"")}:{start:"",end:""}:ne==null?"":String(ne);return n.jsx(ix,{...ee,...de,value:le,onChange:je=>ze(je),onBlur:Oe,error:Te?we:!1})}if(l==="phone"){const ve=ee.defaultCountryCode,le=String(ve??"+1"),je=ne&&typeof ne=="object"?{code:String(ne.code||le),phone:String(ne.phone??"")}:{code:le,phone:""};return n.jsx(px,{...ee,...de,value:je,onChange:Pe=>ze(Pe),onBlur:Oe,error:Te?we:!1})}if(l==="password"){const ve=ne==null?"":String(ne),le=fe?.rules?.strongPassword;return n.jsx(ux,{...ee,...de,value:ve,onChange:ze,onBlur:Oe,error:Te?we:!1,strongPassword:le})}if(l==="file")return n.jsx(Gd,{...ee,...de,type:"file",onChange:ze,onBlur:Oe,error:Te?we:!1});const ke=ne==null?"":String(ne);return n.jsx(Gd,{...ee,...de,type:l,value:ke,onChange:ze,onBlur:Oe,error:Te?we:!1})};function Yd(r){return typeof r=="string"?r:Array.isArray(r)?r.map(Yd).join(""):xe.isValidElement(r)?Yd(r.props.children):""}function P0(r,l){return r.split(`
`).map(c=>c.length?`${l}${c}`:c).join(`
`)}function L0(r){const l=(r??"").trim();if(!l)return"";if(/^\s*import\s/m.test(l)||/export\s+default\s/m.test(l))return!/import\s+React\b/.test(l)&&/\bReact\./.test(l)?`import React from "react";
${l}`:l;const c=[...l.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)],d=Array.from(new Set(c.map(m=>m[1]).filter(m=>m!=="React"))),u=d.length?`import { ${d.join(", ")} } from "oks-ui";
`:"",p=P0(l,"      ");return`import React from "react";
${u}
export default function Example() {
  return (
    <>
${p}
    </>
  );
}`}const X=({title:r,preview:l,code:c})=>{const d=Yd(c),u=L0(d);return n.jsxs("div",{className:"w-full",children:[n.jsx("h3",{className:"text-lg font-bold",children:r}),n.jsxs(tu,{defaultSelectedKey:"preview",variant:"underlined",color:"primary",children:[n.jsx(ln,{title:"Preview",children:n.jsx("div",{className:"w-full h-full p-5 border border-gray-300 rounded-md",children:l})},"preview"),n.jsx(ln,{title:"Code",children:n.jsx("pre",{className:"w-full h-full p-5 bg-gray-900 rounded-md text-white overflow-x-auto text-sm font-mono",children:n.jsx("code",{children:u})})},"code")]})]})},I0=()=>n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(wt,{title:"Heads up",description:"Something happened."}),n.jsx(wt,{title:"Title only"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Heads up" description="Something happened." />
<Alert title="Title only" />`})}),_0=()=>n.jsx(X,{title:"Colors",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(wt,{color:"default",title:"Default",description:"Default color"}),n.jsx(wt,{color:"primary",title:"Primary",description:"Primary color"}),n.jsx(wt,{color:"secondary",title:"Secondary",description:"Secondary color"}),n.jsx(wt,{color:"info",title:"Info",description:"Info color"}),n.jsx(wt,{color:"success",title:"Success",description:"Success color"}),n.jsx(wt,{color:"warning",title:"Warning",description:"Warning color"}),n.jsx(wt,{color:"danger",title:"Danger",description:"Danger color"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert color="default" title="Default" description="Default color" />
<Alert color="primary" title="Primary" description="Primary color" />
<Alert color="secondary" title="Secondary" description="Secondary color" />
<Alert color="info" title="Info" description="Info color" />
<Alert color="success" title="Success" description="Success color" />
<Alert color="warning" title="Warning" description="Warning color" />
<Alert color="danger" title="Danger" description="Danger color" />`})}),U0=()=>n.jsx(X,{title:"Variants",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(wt,{variant:"flat",title:"Flat",description:"Default variant"}),n.jsx(wt,{variant:"solid",title:"Solid",description:"Solid variant"}),n.jsx(wt,{variant:"bordered",title:"Bordered",description:"Bordered variant"}),n.jsx(wt,{variant:"faded",title:"Faded",description:"Faded variant"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert variant="flat" title="Flat" description="Default variant" />
<Alert variant="solid" title="Solid" description="Solid variant" />
<Alert variant="bordered" title="Bordered" description="Bordered variant" />
<Alert variant="faded" title="Faded" description="Faded variant" />`})}),H0=()=>n.jsx(X,{title:"Radius",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(wt,{radius:"none",title:"None",description:"radius=none"}),n.jsx(wt,{radius:"sm",title:"Small",description:"radius=sm"}),n.jsx(wt,{radius:"md",title:"Medium",description:"radius=md"}),n.jsx(wt,{radius:"lg",title:"Large",description:"radius=lg"}),n.jsx(wt,{radius:"full",title:"Full",description:"radius=full"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert radius="none" title="None" description="radius=none" />
<Alert radius="sm" title="Small" description="radius=sm" />
<Alert radius="md" title="Medium" description="radius=md" />
<Alert radius="lg" title="Large" description="radius=lg" />
<Alert radius="full" title="Full" description="radius=full" />`})}),V0=()=>n.jsx(X,{title:"Icons",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(wt,{title:"Default icon",description:"Icon is derived from color",color:"primary"}),n.jsx(wt,{title:"Hide icon",description:"hideIcon=true",hideIcon:!0}),n.jsx(wt,{title:"Hide icon wrapper",description:"hideIconWrapper=true",hideIconWrapper:!0}),n.jsx(wt,{title:"Custom icon",description:"Use icon prop",icon:n.jsx("span",{"aria-hidden":!0,className:"text-lg leading-none",children:"★"})})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Default icon" description="Icon is derived from color" color="primary" />
<Alert title="Hide icon" description="hideIcon=true" hideIcon />
<Alert title="Hide icon wrapper" description="hideIconWrapper=true" hideIconWrapper />
<Alert title="Custom icon" description="Use icon prop" icon={<span aria-hidden>★</span>} />`})}),G0=()=>n.jsx(X,{title:"With Action",preview:n.jsx("div",{className:"flex flex-col gap-3",children:n.jsx(wt,{title:"Update available",description:"A newer version is ready to install.",color:"primary",endContent:n.jsx(O,{size:"sm",children:"Update"})})}),code:n.jsx(n.Fragment,{children:`import { Alert, Button } from "oks-ui";

<Alert
  title="Update available"
  description="A newer version is ready to install."
  color="primary"
  endContent={<Button size="sm">Update</Button>}
/>`})}),Y0=()=>n.jsx(X,{title:"Closable",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(wt,{title:"Closable alert",description:"Click Close to hide (uncontrolled).",isClosable:!0}),n.jsx(wt,{title:"Closable (custom close button)",description:"closeButtonProps example",isClosable:!0,closeButtonProps:{className:"bg-white/15 hover:bg-white/20"},color:"danger",variant:"solid"})]}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

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
/>`})}),q0=()=>{const[r,l]=h.useState(!0);return n.jsx(X,{title:"Controlled Visibility",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(O,{size:"sm",variant:"bordered",onClick:()=>l(!0),children:"Show"}),n.jsx(O,{size:"sm",variant:"bordered",onClick:()=>l(!1),children:"Hide"}),n.jsxs("div",{className:"text-sm text-gray-700",children:["isVisible: ",String(r)]})]}),n.jsx(wt,{title:"Controlled alert",description:"Uses isVisible and onVisibleChange.",isClosable:!0,isVisible:r,onVisibleChange:l,color:"success"})]}),code:n.jsx(n.Fragment,{children:`import { useState } from "react";
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
}`})})},$0=()=>n.jsx(X,{title:"ClassNames",preview:n.jsx("div",{className:"flex flex-col gap-3",children:n.jsx(wt,{title:"Custom slots",description:"Uses classNames slots to style parts.",classNames:{base:"ring-2 ring-purple-400/60",title:"text-purple-900",description:"text-purple-900/80",iconWrapper:"text-purple-900",closeButton:"text-purple-900"},isClosable:!0,color:"secondary",variant:"flat"})}),code:n.jsx(n.Fragment,{children:`import { Alert } from "oks-ui";

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
/>`})}),qt=({title:r,rows:l,footnote:c})=>n.jsxs("div",{className:"w-full",children:[n.jsx("h3",{className:"text-lg font-bold",children:r}),n.jsx("div",{className:"w-full overflow-x-auto border border-gray-200 rounded-md",children:n.jsxs("table",{className:"min-w-[760px] w-full text-sm",children:[n.jsx("thead",{className:"bg-gray-50 text-gray-700",children:n.jsxs("tr",{children:[n.jsx("th",{className:"text-left font-semibold px-4 py-3",children:"Prop"}),n.jsx("th",{className:"text-left font-semibold px-4 py-3",children:"Type"}),n.jsx("th",{className:"text-left font-semibold px-4 py-3",children:"Default"}),n.jsx("th",{className:"text-left font-semibold px-4 py-3",children:"Description"})]})}),n.jsx("tbody",{className:"divide-y divide-gray-200",children:l.map(d=>n.jsxs("tr",{className:"bg-white",children:[n.jsx("td",{className:"px-4 py-3 align-top",children:n.jsx("code",{className:"text-xs bg-gray-100 px-2 py-1 rounded",children:d.prop})}),n.jsx("td",{className:"px-4 py-3 align-top",children:n.jsx("code",{className:"text-xs bg-gray-100 px-2 py-1 rounded",children:d.type})}),n.jsx("td",{className:"px-4 py-3 align-top",children:n.jsx("code",{className:"text-xs bg-gray-100 px-2 py-1 rounded",children:d.default})}),n.jsx("td",{className:"px-4 py-3 align-top text-gray-700",children:d.description})]},d.prop))})]})}),c?n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:c}):null]}),K0=()=>{const r=[{prop:"title",type:"ReactNode",default:"—",description:"Alert title content."},{prop:"description",type:"ReactNode",default:"—",description:"Alert description content."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color. Also drives the default icon."},{prop:"variant",type:'"solid" | "bordered" | "flat" | "faded"',default:'"flat"',description:"Visual style variant."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:"Border radius."},{prop:"icon",type:"ReactNode",default:"—",description:"Custom icon. When omitted, a default status icon is shown based on color."},{prop:"hideIcon",type:"boolean",default:"false",description:"Hides the icon."},{prop:"hideIconWrapper",type:"boolean",default:"false",description:"Renders the icon without its wrapper."},{prop:"startContent",type:"ReactNode",default:"—",description:"Additional content rendered after the icon (before the title/description)."},{prop:"endContent",type:"ReactNode",default:"—",description:"Additional content rendered after the title/description (before the close button)."},{prop:"isClosable",type:"boolean",default:"false",description:"Shows a close button."},{prop:"isVisible",type:"boolean",default:"—",description:"Controlled visibility. When false, alert is removed from the DOM. When omitted, the alert is visible by default."},{prop:"onVisibleChange",type:"(isVisible: boolean) => void",default:"—",description:"Called when visibility should change (e.g. close button click)."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the close button is used."},{prop:"closeButtonProps",type:'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">',default:"—",description:'Props passed to the close button (type="button" is always used).'},{prop:"classNames",type:"Partial<Record<AlertSlot, string>>",default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element. Merged with internal CSS variables."}];return n.jsx(qt,{title:"Alert Props",rows:r,footnote:"Alert also supports standard div props such as className, id, style, and aria-*."})},X0=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(I0,{}),n.jsx(_0,{}),n.jsx(U0,{}),n.jsx(H0,{}),n.jsx(V0,{}),n.jsx(G0,{}),n.jsx(Y0,{}),n.jsx(q0,{}),n.jsx($0,{}),n.jsx(K0,{})]}),Z0=()=>n.jsx(X,{title:"How to usage",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{name:"Omkar Sahu"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{name:"Manav"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
            
            <Avatar name="Omkar Sahu" />
            <Avatar src="https://i.pravatar.cc/150?img=5" />
            <Avatar name="Manav" />`})}),Q0=()=>n.jsx(X,{title:"Sizes",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{className:"w-6 h-6 text-tiny",src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{size:"sm",src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{size:"md",src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{size:"lg",src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{className:"w-20 h-20 text-large",src:"https://i.pravatar.cc/150?img=5"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar className="w-6 h-6 text-tiny" name="Omkar Sahu" />
<Avatar size="sm" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="lg" src="https://i.pravatar.cc/150?img=5" />
<Avatar className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?img=5" />`})}),W0=()=>n.jsx(X,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"Default",color:"default"}),n.jsx(Ce,{name:"Primary",color:"primary"}),n.jsx(Ce,{name:"Secondary",color:"secondary"}),n.jsx(Ce,{name:"Info",color:"info"}),n.jsx(Ce,{name:"Success",color:"success"}),n.jsx(Ce,{name:"Warning",color:"warning"}),n.jsx(Ce,{name:"Danger",color:"danger"})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="Default" color="default" />
<Avatar name="Primary" color="primary" />
<Avatar name="Secondary" color="secondary" />
<Avatar name="Info" color="info" />
<Avatar name="Success" color="success" />
<Avatar name="Warning" color="warning" />
<Avatar name="Danger" color="danger" />`})}),J0=()=>n.jsx(X,{title:"Color depth",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"50",colorDepth:50}),n.jsx(Ce,{name:"100",colorDepth:100}),n.jsx(Ce,{name:"200",colorDepth:200}),n.jsx(Ce,{name:"3000",colorDepth:300}),n.jsx(Ce,{name:"400",colorDepth:400}),n.jsx(Ce,{name:"500",colorDepth:500}),n.jsx(Ce,{name:"600",colorDepth:600}),n.jsx(Ce,{name:"700",colorDepth:700}),n.jsx(Ce,{name:"800",colorDepth:800}),n.jsx(Ce,{name:"900",colorDepth:900})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="50" colorDepth={50} />
<Avatar name="100" colorDepth={100} />
<Avatar name="200" colorDepth={200} />
<Avatar name="3000" colorDepth={300} />
<Avatar name="400" colorDepth={400} />
<Avatar name="500" colorDepth={500} />
<Avatar name="600" colorDepth={600} />
<Avatar name="700" colorDepth={700} />
<Avatar name="800" colorDepth={800} />
<Avatar name="900" colorDepth={900} />`})}),ey=()=>n.jsx(X,{title:"Disabled",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{isDisabled:!0,name:"Omkar Sahu"}),n.jsx(Ce,{isDisabled:!0,src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{isDisabled:!0,name:"Manav"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar isDisabled name="Omkar Sahu" />
<Avatar isDisabled src="https://i.pravatar.cc/150?img=5" />
<Avatar isDisabled name="Manav" />`})}),ty=()=>n.jsx(X,{title:"Border",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{isBordered:!0,name:"Omkar Sahu"}),n.jsx(Ce,{isBordered:!0,src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{isBordered:!0,name:"Manav"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
                
    <Avatar isBordered name="Omkar Sahu" />
    <Avatar isBordered src="https://i.pravatar.cc/150?img=5" />
    <Avatar isBordered name="Manav" />`})}),ny=()=>n.jsx(X,{title:"Radius",preview:n.jsx(n.Fragment,{children:n.jsxs("div",{className:"flex gap-3 items-center",children:[n.jsx(Ce,{radius:"none"}),n.jsx(Ce,{radius:"sm"}),n.jsx(Ce,{radius:"md"}),n.jsx(Ce,{radius:"lg"}),n.jsx(Ce,{radius:"full"})]})}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar radius="none" />
<Avatar radius="sm" />
<Avatar radius="md" />
<Avatar radius="lg" />
<Avatar radius="full" />`})}),ay=()=>n.jsx(X,{title:"Tooltip",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"Hover me",tooltip:!0}),n.jsx(Ce,{name:"Custom content",tooltip:{content:n.jsxs("div",{className:"flex flex-col",children:[n.jsx("span",{className:"font-semibold",children:"Custom tooltip"}),n.jsx("span",{className:"text-xs opacity-80",children:"Any ReactNode"})]})}}),n.jsx(Ce,{name:"Placement",tooltip:{props:{placement:"bottom",showArrow:!0}}}),n.jsx(Ce,{isDisabled:!0,name:"Disabled + tooltip",tooltip:!0})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

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

<Avatar isDisabled name="Disabled + tooltip" tooltip />`})}),Pd="https://example.com/does-not-exist.png",oy=()=>n.jsx(X,{title:"Fallbacks",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"Omkar Sahu"}),n.jsx(Ce,{}),n.jsx(Ce,{src:Pd,name:"Broken (no fallback)"}),n.jsx(Ce,{src:Pd,name:"Broken + showFallback",showFallback:!0}),n.jsx(Ce,{src:Pd,name:"Custom fallback",showFallback:!0,fallback:n.jsx("span",{className:"text-xs font-semibold",children:"FB"})}),n.jsx(Ce,{name:"Custom icon",icon:n.jsx("span",{className:"text-sm",children:"★"})})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

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
<Avatar name="Custom icon" icon={<span className="text-sm">★</span>} />`})}),ry=()=>n.jsx(X,{title:"Focusable",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"text-sm opacity-80",children:"Use Tab to see focus ring"}),n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{isFocusable:!0,name:"Focusable"}),n.jsx(Ce,{isFocusable:!0,isBordered:!0,name:"Bordered"}),n.jsx(Ce,{isFocusable:!0,tooltip:!0,name:"Focusable + tooltip"}),n.jsx(Ce,{isFocusable:!0,tabIndex:-1,name:"tabIndex -1"})]})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar isFocusable name="Focusable" />
<Avatar isFocusable isBordered name="Bordered" />
<Avatar isFocusable tooltip name="Focusable + tooltip" />
<Avatar isFocusable tabIndex={-1} name="tabIndex -1" />`})}),vx=xe.forwardRef((r,l)=>n.jsx("img",{...r,ref:l,style:{filter:"grayscale(1)",...r.style??{}}}));vx.displayName="GrayscaleImg";const sy=()=>n.jsx(X,{title:"Custom image",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"imgProps",src:"https://i.pravatar.cc/150?img=5",imgProps:{loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",alt:"Avatar photo"}}),n.jsx(Ce,{name:"ImgComponent",src:"https://i.pravatar.cc/150?img=5",ImgComponent:vx,imgProps:{referrerPolicy:"no-referrer"}})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
/>`})}),ly=()=>n.jsx(X,{title:"classNames (slots)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Ce,{name:"Slot styles",classNames:{base:"ring-2 ring-pink-500 ring-offset-2 ring-offset-white",name:"text-black",fallback:"bg-white/30"}}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=5",classNames:{base:"ring-2 ring-emerald-500 ring-offset-2 ring-offset-white",img:"scale-110"}}),n.jsx(Ce,{classNames:{base:"ring-2 ring-sky-500 ring-offset-2 ring-offset-white",icon:"text-yellow-200"},icon:n.jsx("span",{className:"text-sm",children:"★"})})]}),code:n.jsx(n.Fragment,{children:`import { Avatar } from "oks-ui";

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
/>`})}),iy=n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsxs(Po,{children:[n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=5"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=6"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=7"})]}),n.jsxs(Po,{max:3,total:8,children:[n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=8"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=9"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=10"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=11"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=12"})]}),n.jsxs(Po,{max:2,total:5,renderCount:r=>`+${r} more`,children:[n.jsx(Ce,{name:"A"}),n.jsx(Ce,{name:"B"}),n.jsx(Ce,{name:"C"}),n.jsx(Ce,{name:"D"})]})]}),n.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:n.jsxs(Po,{isGrid:!0,children:[n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=13"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=14"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=15"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=16"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=17"}),n.jsx(Ce,{src:"https://i.pravatar.cc/150?img=18"})]})}),n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsxs(Po,{size:"sm",radius:"md",color:"success",isBordered:!0,children:[n.jsx(Ce,{name:"Group"}),n.jsx(Ce,{name:"Styles"}),n.jsx(Ce,{name:"Override",color:"danger"}),n.jsx(Ce,{name:"Own radius",radius:"full"})]}),n.jsxs(Po,{isDisabled:!0,size:"sm",color:"secondary",children:[n.jsx(Ce,{name:"Disabled"}),n.jsx(Ce,{name:"Group"}),n.jsx(Ce,{name:"Avatars"})]})]})]}),cy=`import { Avatar, AvatarGroup } from "oks-ui";

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
</AvatarGroup>`,dy=()=>n.jsx(X,{title:"AvatarGroup",preview:iy,code:cy}),uy=()=>{const r=[{prop:"name",type:"string",default:"—",description:"Name used for initials fallback and default aria-label."},{prop:"src",type:"string",default:"—",description:"Image source URL."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Avatar size."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color for background/border."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"full"',description:"Border radius."},{prop:"colorDepth",type:"50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",default:"500",description:"Color intensity used to compute CSS variables."},{prop:"isBordered",type:"boolean",default:"false",description:"Shows a border ring."},{prop:"isDisabled",type:"boolean",default:"false",description:"Marks the avatar as disabled and prevents focus."},{prop:"isFocusable",type:"boolean",default:"false",description:"Makes the avatar focusable (tabIndex=0 by default)."},{prop:"showFallback",type:"boolean",default:"false",description:"When true, shows fallback content if the image fails."},{prop:"icon",type:"ReactNode",default:"—",description:"Fallback icon when there is no name and no custom fallback."},{prop:"fallback",type:"ReactNode",default:"—",description:"Custom fallback content (replaces initials/default icon)."},{prop:"tooltip",type:"boolean | TooltipProps (without children/content) | { props?: TooltipProps; content?: ReactNode }",default:"false",description:"Shows a tooltip with the name or custom content."},{prop:"ImgComponent",type:"React.ElementType",default:'"img"',description:"Custom component used for the image element."},{prop:"imgProps",type:"object",default:"—",description:"Props passed to ImgComponent (excluding src/children)."},{prop:"classNames",type:'Partial<Record<"base" | "img" | "fallback" | "name" | "icon", string>>',default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}],l=[{prop:"children",type:"ReactNode",default:"—",description:"Avatars to render inside the group."},{prop:"max",type:"number",default:"5",description:"Maximum avatars to show before overflowing into a count."},{prop:"total",type:"number",default:"—",description:"Total count used to compute the overflow count."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Avatar size for the group."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color applied to the group."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"full"',description:"Border radius applied to group items."},{prop:"isGrid",type:"boolean",default:"false",description:"Uses a grid layout instead of an overlapping stack."},{prop:"isDisabled",type:"boolean",default:"—",description:"Marks the group as disabled."},{prop:"isBordered",type:"boolean",default:"false",description:"Shows borders on items in the group."},{prop:"renderCount",type:"(count: number) => ReactNode",default:"—",description:"Custom renderer for the overflow count badge."},{prop:"classNames",type:'Partial<Record<"base" | "count", string>>',default:"—",description:"Slot class overrides for group root/count."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the group root element."}],c=[{prop:"size",type:"number",default:"18",description:"Icon size in pixels."}];return n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(qt,{title:"Avatar Props",rows:r,footnote:"Avatar also supports standard div props such as className, id, aria-*, and data-*."}),n.jsx(qt,{title:"AvatarGroup Props",rows:l,footnote:"AvatarGroup also supports standard div props such as className, id, aria-*, and data-*."}),n.jsx(qt,{title:"AvatarIcon Props",rows:c,footnote:"AvatarIcon also supports standard svg props."})]})},py=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Z0,{}),n.jsx(Q0,{}),n.jsx(W0,{}),n.jsx(J0,{}),n.jsx(ny,{}),n.jsx(ty,{}),n.jsx(ey,{}),n.jsx(ay,{}),n.jsx(oy,{}),n.jsx(ry,{}),n.jsx(sy,{}),n.jsx(ly,{}),n.jsx(dy,{}),n.jsx(uy,{})]}),fy=()=>n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[n.jsx(rt,{content:5,"aria-label":"5 unread notifications",children:n.jsx(O,{variant:"bordered",children:"Notifications"})}),n.jsx(rt,{isDot:!0,"aria-label":"Has new activity",children:n.jsx(O,{variant:"bordered",children:"Activity"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={5} aria-label="5 unread notifications">
  <Button variant="bordered">Notifications</Button>
</Badge>

<Badge isDot aria-label="Has new activity">
  <Button variant="bordered">Activity</Button>
</Badge>`})}),hy=()=>n.jsxs(n.Fragment,{children:[n.jsx(X,{title:"Variants",preview:n.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[n.jsx(rt,{content:3,variant:"solid","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"solid"})}),n.jsx(rt,{content:3,variant:"bordered","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"bordered"})}),n.jsx(rt,{content:3,variant:"light","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"light"})}),n.jsx(rt,{content:3,variant:"flat","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"flat"})}),n.jsx(rt,{content:3,variant:"faded","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"faded"})}),n.jsx(rt,{content:3,variant:"shadow","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"shadow"})}),n.jsx(rt,{content:3,variant:"ghost","aria-label":"3 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"ghost"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={3} variant="solid">...</Badge>
<Badge content={3} variant="bordered">...</Badge>
<Badge content={3} variant="light">...</Badge>
<Badge content={3} variant="flat">...</Badge>
<Badge content={3} variant="faded">...</Badge>
<Badge content={3} variant="shadow">...</Badge>
<Badge content={3} variant="ghost">...</Badge>`})}),n.jsx(X,{title:"Max",preview:n.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[n.jsx(rt,{content:9,max:9,"aria-label":"9 notifications",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"max=9"})}),n.jsx(rt,{content:10,max:9,"aria-label":"10 notifications",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"10 → 9+"})}),n.jsx(rt,{content:4890,max:999,"aria-label":"4890 notifications",children:n.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"4890 → 999+"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} max={9} aria-label="9 notifications">...</Badge>
<Badge content={10} max={9} aria-label="10 notifications">...</Badge>
<Badge content={4890} max={999} aria-label="4890 notifications">...</Badge>`})})]}),my=()=>n.jsx(X,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[n.jsx(rt,{content:1,color:"default","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"default"})}),n.jsx(rt,{content:1,color:"primary","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"primary"})}),n.jsx(rt,{content:1,color:"secondary","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"secondary"})}),n.jsx(rt,{content:1,color:"info","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"info"})}),n.jsx(rt,{content:1,color:"success","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"success"})}),n.jsx(rt,{content:1,color:"warning","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"warning"})}),n.jsx(rt,{content:1,color:"danger","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"danger"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} color="default">...</Badge>
<Badge content={1} color="primary">...</Badge>
<Badge content={1} color="secondary">...</Badge>
<Badge content={1} color="success">...</Badge>
<Badge content={1} color="warning">...</Badge>
<Badge content={1} color="danger">...</Badge>`})}),xy=()=>n.jsx(X,{title:"Sizes",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(rt,{content:7,size:"sm","aria-label":"7 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"sm"})}),n.jsx(rt,{content:7,size:"md","aria-label":"7 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"md"})}),n.jsx(rt,{content:7,size:"lg","aria-label":"7 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"lg"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={7} size="sm">...</Badge>
<Badge content={7} size="md">...</Badge>
<Badge content={7} size="lg">...</Badge>`})}),gy=()=>n.jsx(X,{title:"Placements",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(rt,{content:1,placement:"top-left","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-left"})}),n.jsx(rt,{content:1,placement:"top-right","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-right"})}),n.jsx(rt,{content:1,placement:"bottom-left","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-left"})}),n.jsx(rt,{content:1,placement:"bottom-right","aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-right"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} placement="top-left">...</Badge>
<Badge content={1} placement="top-right">...</Badge>
<Badge content={1} placement="bottom-left">...</Badge>
<Badge content={1} placement="bottom-right">...</Badge>`})}),vy=()=>n.jsx(X,{title:"Shapes",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(rt,{content:9,shape:"rectangle","aria-label":"9 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"rectangle"})}),n.jsx(rt,{content:9,shape:"circle","aria-label":"9 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"circle"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} shape="rectangle">...</Badge>
<Badge content={9} shape="circle">...</Badge>`})}),by=()=>n.jsx(X,{title:"Outline",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(rt,{content:2,"aria-label":"2 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline"})}),n.jsx(rt,{content:2,showOutline:!1,"aria-label":"2 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline=false"})}),n.jsx(rt,{content:2,disableOutline:!0,"aria-label":"2 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"disableOutline"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={2}>...</Badge>
<Badge content={2} showOutline={false}>...</Badge>
<Badge content={2} disableOutline>...</Badge>`})}),ky=()=>n.jsx(X,{title:"Badge visibility",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(rt,{content:1,"aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"visible"})}),n.jsx(rt,{content:1,isInvisible:!0,"aria-label":"1 item",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isInvisible"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1}>...</Badge>
<Badge content={1} isInvisible>...</Badge>`})}),yy=()=>n.jsx(X,{title:"Dot and one-character",preview:n.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[n.jsx(rt,{content:"9",isOneChar:!0,"aria-label":"9 items",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isOneChar"})}),n.jsx(rt,{isDot:!0,shape:"circle","aria-label":"Has updates",children:n.jsx("span",{className:"px-3 py-2 rounded-md border",children:"dot"})})]}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content="9" isOneChar>...</Badge>
<Badge isDot shape="circle">...</Badge>`})}),wy=()=>n.jsx(X,{title:"Slot styling (classNames)",preview:n.jsx("div",{className:"flex gap-6 items-center flex-wrap",children:n.jsx(rt,{content:12,color:"success","aria-label":"12 items",classNames:{base:"ring-1 ring-green-400/50 rounded-md",badge:"bg-green-600 text-white"},children:n.jsx("button",{type:"button",className:"px-3 py-2 rounded-md border",children:"Custom slots"})})}),code:n.jsx(n.Fragment,{children:`import { Badge } from "oks-ui";

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
</Badge>`})}),jy=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"Element the badge is attached to."},{prop:"content",type:"string | number | ReactNode",default:"—",description:"Badge content. Ignored when isDot is true."},{prop:"max",type:"number",default:"—",description:"Caps numeric content to `${max}+` when exceeded."},{prop:"variant",type:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"',default:'"solid"',description:"Visual style variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Badge size."},{prop:"shape",type:'"circle" | "rectangle"',default:'"rectangle"',description:"Badge shape."},{prop:"placement",type:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',default:'"top-right"',description:"Badge placement relative to children."},{prop:"showOutline",type:"boolean",default:"true",description:"Adds an outline ring around the badge."},{prop:"disableOutline",type:"boolean",default:"false",description:"Disables the outline ring (takes precedence)."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Disables badge transitions."},{prop:"isInvisible",type:"boolean",default:"false",description:"When true, badge is not rendered."},{prop:"isOneChar",type:"boolean",default:"false",description:"Optimizes badge sizing for single-character content."},{prop:"isDot",type:"boolean",default:"false",description:"Renders a dot badge and ignores content."},{prop:"classNames",type:"Partial<Record<BadgeSlot, string>>",default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(qt,{title:"Badge Props",rows:r,footnote:"Badge also supports standard span props such as className, id, aria-*, and data-*."})},Sy=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(fy,{}),n.jsx(hy,{}),n.jsx(my,{}),n.jsx(xy,{}),n.jsx(gy,{}),n.jsx(vy,{}),n.jsx(by,{}),n.jsx(ky,{}),n.jsx(yy,{}),n.jsx(wy,{}),n.jsx(jy,{})]}),Cy=()=>n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{children:"Save"}),n.jsx(O,{variant:"bordered",children:"Cancel"})]}),code:n.jsx(n.Fragment,{children:`import { Button } from "oks-ui";

<Button>Save</Button>
<Button variant="bordered">Cancel</Button>`})}),Dy=()=>n.jsx(X,{title:"Disabled",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{isDisabled:!0,children:"Disabled"}),n.jsx(O,{color:"primary",isDisabled:!0,children:"Primary Disabled"})]}),code:n.jsx(n.Fragment,{children:`<Button isDisabled>Disabled</Button>
<Button color="primary" isDisabled>
  Primary Disabled
</Button>`})}),Ty=()=>n.jsx(X,{title:"Sizes",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{size:"sm",children:"Small"}),n.jsx(O,{size:"md",children:"Medium"}),n.jsx(O,{size:"lg",children:"Large"})]}),code:n.jsx(n.Fragment,{children:`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`})}),Ny=()=>n.jsx(X,{title:"Radius",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{radius:"none",children:"None"}),n.jsx(O,{radius:"sm",children:"SM"}),n.jsx(O,{radius:"md",children:"MD"}),n.jsx(O,{radius:"lg",children:"LG"}),n.jsx(O,{radius:"full",children:"Full"})]}),code:n.jsx(n.Fragment,{children:`<Button radius="none">None</Button>
<Button radius="sm">SM</Button>
<Button radius="md">MD</Button>
<Button radius="lg">LG</Button>
<Button radius="full">Full</Button>`})}),By=()=>n.jsx(X,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{color:"default",children:"Default"}),n.jsx(O,{color:"primary",children:"Primary"}),n.jsx(O,{color:"secondary",children:"Secondary"}),n.jsx(O,{color:"info",children:"Info"}),n.jsx(O,{color:"success",children:"Success"}),n.jsx(O,{color:"warning",children:"Warning"}),n.jsx(O,{color:"danger",children:"Danger"})]}),code:n.jsx(n.Fragment,{children:`<Button color="default">Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`})}),Ay=()=>n.jsx(X,{title:"Variants",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"solid",children:"Solid"}),n.jsx(O,{variant:"bordered",children:"Bordered"}),n.jsx(O,{variant:"flat",children:"Flat"}),n.jsx(O,{variant:"light",children:"Light"}),n.jsx(O,{variant:"faded",children:"Faded"}),n.jsx(O,{variant:"shadow",children:"Shadow"}),n.jsx(O,{variant:"ghost",children:"Ghost"})]}),code:n.jsx(n.Fragment,{children:`<Button variant="solid">Solid</Button>
<Button variant="bordered">Bordered</Button>
<Button variant="flat">Flat</Button>
<Button variant="light">Light</Button>
<Button variant="faded">Faded</Button>
<Button variant="shadow">Shadow</Button>
<Button variant="ghost">Ghost</Button>`})}),Oy=()=>n.jsx(X,{title:"Full width",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"w-full max-w-sm",children:n.jsx(O,{fullWidth:!0,children:"Submit"})}),n.jsxs("div",{className:"flex gap-3 items-center w-full max-w-sm",children:[n.jsx(O,{variant:"bordered",children:"Back"}),n.jsx(O,{fullWidth:!0,children:"Continue"}),n.jsx(O,{variant:"bordered",children:"Next"})]})]}),code:n.jsx(n.Fragment,{children:`<Button fullWidth>Submit</Button>

<div style={{ display: "flex", gap: 8 }}>
  <Button>Back</Button>
  <Button fullWidth>Continue</Button>
  <Button>Next</Button>
</div>`})}),zy=()=>n.jsx(X,{title:"Loading",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{isLoading:!0,children:"Saving"}),n.jsx(O,{isLoading:!0,spinnerPlacement:"end",children:"Saving"}),n.jsx(O,{isLoading:!0,spinner:n.jsx("span",{"aria-hidden":"true",children:"⏳"}),children:"Saving"})]}),code:n.jsx(n.Fragment,{children:`<Button isLoading>Saving</Button>
<Button isLoading spinnerPlacement="end">Saving</Button>
<Button isLoading spinner={<span aria-hidden="true">⏳</span>}>Saving</Button>`})}),Ey=()=>n.jsx(X,{title:"With icons",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{startContent:n.jsx("span",{"aria-hidden":"true",children:"←"}),children:"Back"}),n.jsx(O,{endContent:n.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Next"})]}),code:n.jsx(n.Fragment,{children:`<Button startContent={<span aria-hidden="true">←</span>}>Back</Button>
<Button endContent={<span aria-hidden="true">→</span>}>Next</Button>`})}),Fy=()=>n.jsx(X,{title:"Icon only",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{isIconOnly:!0,"aria-label":"Settings",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})}),n.jsx(O,{isIconOnly:!0,"aria-label":"Search",variant:"bordered",children:n.jsx("span",{"aria-hidden":"true",children:"⌕"})})]}),code:n.jsx(n.Fragment,{children:`<Button isIconOnly aria-label="Settings">
  <span aria-hidden="true">⚙</span>
</Button>
<Button isIconOnly aria-label="Search" variant="bordered">
  <span aria-hidden="true">⌕</span>
</Button>`})}),Ry=()=>n.jsx(X,{title:"Icon only + loading",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})}),n.jsx(O,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading bordered",variant:"bordered",children:n.jsx("span",{"aria-hidden":"true",children:"⌛"})})]}),code:n.jsx(n.Fragment,{children:`<Button isIconOnly isLoading aria-label="Loading">
  <span aria-hidden="true">⚙</span>
</Button>`})}),My=()=>n.jsx(X,{title:"ButtonGroup",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(_d,{variant:"bordered",color:"primary","aria-label":"Pagination",children:[n.jsx(O,{children:"Prev"}),n.jsx(O,{children:"Next"})]}),n.jsxs(_d,{variant:"solid",color:"secondary","aria-label":"Actions",children:[n.jsx(O,{children:"Left"}),n.jsx(O,{children:"Middle"}),n.jsx(O,{children:"Right"})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, ButtonGroup } from "oks-ui";

<ButtonGroup variant="bordered" color="primary" aria-label="Pagination">
  <Button>Prev</Button>
  <Button>Next</Button>
</ButtonGroup>`})}),Py=()=>{const[r,l]=h.useState("-"),[c,d]=h.useState(!1);return n.jsx(X,{title:"Press events",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPressStart:()=>l("onPressStart"),onPressEnd:()=>l("onPressEnd"),onPressUp:()=>l("onPressUp"),onPress:()=>l("onPress"),onPressChange:u=>d(u),children:"Press me"}),n.jsxs("div",{className:"text-sm",children:["Last event: ",r]}),n.jsxs("div",{className:"text-sm",children:["Pressed: ",String(c)]})]}),code:n.jsx(n.Fragment,{children:`<Button
  onPressStart={() => {}}
  onPressEnd={() => {}}
  onPressUp={() => {}}
  onPress={() => {}}
  onPressChange={(isPressed) => {}}
>
  Press me
</Button>`})})},Ly=()=>{const[r,l]=h.useState(!1),[c,d]=h.useState(!1);return n.jsx(X,{title:"Ripple and animation",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(O,{variant:"bordered",onPress:()=>l(u=>!u),children:["disableRipple: ",String(r)]}),n.jsxs(O,{variant:"bordered",onPress:()=>d(u=>!u),children:["disableAnimation: ",String(c)]})]}),n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{color:"primary",disableRipple:r,disableAnimation:c,children:"Try click"}),n.jsx(O,{variant:"bordered",disableRipple:r,disableAnimation:c,children:"Try click"})]})]}),code:n.jsx(n.Fragment,{children:"<Button disableRipple disableAnimation>Try click</Button>"})})},Iy=()=>n.jsx(X,{title:"ClassName and style",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{className:"bg-indigo-600 text-white hover:bg-indigo-500",children:"className"}),n.jsx(O,{style:{background:"linear-gradient(90deg, #14b8a6, #3b82f6)",color:"white"},children:"style"})]}),code:n.jsx(n.Fragment,{children:`<Button className="bg-indigo-600 text-white hover:bg-indigo-500">
  className
</Button>

<Button style={{ background: "linear-gradient(90deg, #14b8a6, #3b82f6)", color: "white" }}>
  style
</Button>`})}),_y=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"Button content."},{prop:"variant",type:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"',default:'"solid"',description:"Visual style variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Button size."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:"Border radius."},{prop:"startContent",type:"ReactNode",default:"—",description:"Content placed before the children."},{prop:"endContent",type:"ReactNode",default:"—",description:"Content placed after the children."},{prop:"spinner",type:"ReactNode",default:"—",description:"Custom spinner shown when isLoading is true."},{prop:"spinnerPlacement",type:'"start" | "end"',default:'"start"',description:"Where the spinner appears when loading."},{prop:"fullWidth",type:"boolean",default:"false",description:"Makes the button take full container width."},{prop:"isIconOnly",type:"boolean",default:"false",description:"Optimizes padding/shape for icon-only buttons."},{prop:"isDisabled",type:"boolean",default:"false",description:"Disables interactions."},{prop:"isLoading",type:"boolean",default:"false",description:"Shows a spinner and prevents press actions."},{prop:"onPress",type:"(e: PressEvent) => void",default:"—",description:"Called for pointer/mouse/keyboard press."},{prop:"onPressStart",type:"(e: PressEvent) => void",default:"—",description:"Called when a press starts."},{prop:"onPressEnd",type:"(e: PressEvent) => void",default:"—",description:"Called when a press ends."},{prop:"onPressChange",type:"(isPressed: boolean) => void",default:"—",description:"Called when pressed state changes."},{prop:"onPressUp",type:"(e: PressEvent) => void",default:"—",description:"Called when press is released."},{prop:"disableRipple",type:"boolean",default:"false",description:"Disables the ripple effect."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Disables transition animations."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(qt,{title:"Button Props",rows:r,footnote:'Button also supports standard button props such as type, onClick, disabled, aria-*, and data-*. (type defaults to "button".)'})},Uy=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Cy,{}),n.jsx(Dy,{}),n.jsx(Ty,{}),n.jsx(Ny,{}),n.jsx(By,{}),n.jsx(Ay,{}),n.jsx(Oy,{}),n.jsx(zy,{}),n.jsx(Ey,{}),n.jsx(Fy,{}),n.jsx(Ry,{}),n.jsx(My,{}),n.jsx(Py,{}),n.jsx(Ly,{}),n.jsx(Iy,{}),n.jsx(_y,{})]}),Hy=()=>n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{children:"Chip"}),n.jsx(nt,{variant:"bordered",children:"Bordered"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip>Chip</Chip>
<Chip variant="bordered">Bordered</Chip>`})}),Vy=()=>n.jsx(X,{title:"Variants",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{variant:"solid",color:"primary",children:"solid"}),n.jsx(nt,{variant:"bordered",color:"primary",children:"bordered"}),n.jsx(nt,{variant:"light",color:"primary",children:"light"}),n.jsx(nt,{variant:"flat",color:"primary",children:"flat"}),n.jsx(nt,{variant:"faded",color:"primary",children:"faded"}),n.jsx(nt,{variant:"shadow",color:"primary",children:"shadow"}),n.jsx(nt,{variant:"dot",color:"primary",children:"dot"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip variant="solid" color="primary">solid</Chip>
<Chip variant="bordered" color="primary">bordered</Chip>
<Chip variant="light" color="primary">light</Chip>
<Chip variant="flat" color="primary">flat</Chip>
<Chip variant="faded" color="primary">faded</Chip>
<Chip variant="shadow" color="primary">shadow</Chip>
<Chip variant="dot" color="primary">dot</Chip>`})}),Gy=()=>n.jsx(X,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{color:"default",children:"default"}),n.jsx(nt,{color:"primary",children:"primary"}),n.jsx(nt,{color:"secondary",children:"secondary"}),n.jsx(nt,{color:"success",children:"success"}),n.jsx(nt,{color:"warning",children:"warning"}),n.jsx(nt,{color:"danger",children:"danger"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="default">default</Chip>
<Chip color="primary">primary</Chip>
<Chip color="secondary">secondary</Chip>
<Chip color="success">success</Chip>
<Chip color="warning">warning</Chip>
<Chip color="danger">danger</Chip>`})}),Yy=()=>n.jsx(X,{title:"Color depth",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{color:"primary",colorDepth:300,children:"300"}),n.jsx(nt,{color:"primary",colorDepth:500,children:"500"}),n.jsx(nt,{color:"primary",colorDepth:700,children:"700"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="primary" colorDepth={300}>300</Chip>
<Chip color="primary" colorDepth={500}>500</Chip>
<Chip color="primary" colorDepth={700}>700</Chip>`})}),qy=()=>n.jsx(X,{title:"Sizes",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{size:"sm",children:"sm"}),n.jsx(nt,{size:"md",children:"md"}),n.jsx(nt,{size:"lg",children:"lg"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip size="sm">sm</Chip>
<Chip size="md">md</Chip>
<Chip size="lg">lg</Chip>`})}),$y=()=>n.jsx(X,{title:"Radius",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{radius:"none",children:"none"}),n.jsx(nt,{radius:"sm",children:"sm"}),n.jsx(nt,{radius:"md",children:"md"}),n.jsx(nt,{radius:"lg",children:"lg"}),n.jsx(nt,{radius:"full",children:"full"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip radius="none">none</Chip>
<Chip radius="sm">sm</Chip>
<Chip radius="md">md</Chip>
<Chip radius="lg">lg</Chip>
<Chip radius="full">full</Chip>`})}),Ky=()=>n.jsx(X,{title:"Disabled",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{isDisabled:!0,children:"Disabled"}),n.jsx(nt,{isDisabled:!0,onClose:()=>{},children:"Disabled close"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip isDisabled>Disabled</Chip>
<Chip isDisabled onClose={() => {}}>Disabled close</Chip>`})}),Xy=()=>n.jsx(X,{title:"Start & end content",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{startContent:n.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Start"}),n.jsx(nt,{endContent:n.jsx("span",{"aria-hidden":"true",children:"→"}),children:"End"}),n.jsx(nt,{startContent:n.jsx("span",{"aria-hidden":"true",children:"★"}),endContent:n.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Both"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip startContent={<span aria-hidden="true">★</span>}>Start</Chip>
<Chip endContent={<span aria-hidden="true">→</span>}>End</Chip>
<Chip
  startContent={<span aria-hidden="true">★</span>}
  endContent={<span aria-hidden="true">→</span>}
>
  Both
</Chip>`})}),Zy=()=>n.jsx(X,{title:"With avatar",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{avatar:n.jsx("img",{src:"https://i.pravatar.cc/32?img=1",alt:"avatar",width:24,height:24}),children:"Avatar"}),n.jsx(nt,{variant:"faded",color:"secondary",avatar:n.jsx("img",{src:"https://i.pravatar.cc/32?img=2",alt:"avatar",width:24,height:24}),children:"Faded"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip avatar={<img src="https://i.pravatar.cc/32?img=1" alt="avatar" />}>
  Avatar
</Chip>`})}),Qy=()=>n.jsx(X,{title:"With close button",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(nt,{onClose:()=>{},children:"Closable"}),n.jsx(nt,{onClose:()=>{},endContent:n.jsx("span",{"aria-hidden":"true",children:"×"}),color:"danger",variant:"flat",children:"Custom close icon"})]}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

<Chip onClose={() => {}}>Closable</Chip>
<Chip onClose={() => {}} endContent={<span aria-hidden="true">×</span>}>
  Custom close icon
</Chip>`})}),Wy=()=>n.jsx(X,{title:"Slot styling (classNames)",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(nt,{variant:"dot",color:"success",onClose:()=>{},avatar:n.jsx("img",{src:"https://i.pravatar.cc/32?img=3",alt:"avatar"}),classNames:{base:"ring-1 ring-green-400/60",content:"font-semibold",dot:"bg-green-600",avatar:"ring-1 ring-green-300 rounded-full",closeButton:"hover:bg-green-200/40"},children:"Custom slots"})}),code:n.jsx(n.Fragment,{children:`import { Chip } from "oks-ui";

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
</Chip>`})}),Jy=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"Chip content."},{prop:"variant",type:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot"',default:'"solid"',description:"Visual style variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Chip size."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"full"',description:"Border radius."},{prop:"colorDepth",type:"50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",default:"500",description:"Color intensity used to compute CSS variables."},{prop:"avatar",type:"ReactNode",default:"—",description:"Avatar element rendered at the start."},{prop:"startContent",type:"ReactNode",default:"—",description:"Content rendered before the children."},{prop:"endContent",type:"ReactNode",default:"—",description:"Content rendered after the children."},{prop:"isDisabled",type:"boolean",default:"false",description:"Disables interactions and reduces emphasis."},{prop:"onClose",type:"(e: PressEvent) => void",default:"—",description:"Shows a close button and is called when it is pressed."},{prop:"classNames",type:'Partial<Record<"base" | "content" | "dot" | "avatar" | "closeButton", string>>',default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(qt,{title:"Chip Props",rows:r,footnote:"Chip also supports standard div props such as className, id, aria-*, and data-*."})},ew=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Hy,{}),n.jsx(Vy,{}),n.jsx(Gy,{}),n.jsx(Yy,{}),n.jsx(qy,{}),n.jsx($y,{}),n.jsx(Ky,{}),n.jsx(Xy,{}),n.jsx(Zy,{}),n.jsx(Qy,{}),n.jsx(Wy,{}),n.jsx(Jy,{})]}),tw=()=>n.jsx(X,{title:"How to use",preview:n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{children:"Open"})}),n.jsxs(Ot,{variant:"solid",color:"primary",autoFocus:"first",onAction:r=>console.log("onAction:",r),onClose:()=>console.log("onClose"),children:[n.jsx(Ue,{children:"New"},"new"),n.jsx(Ue,{children:"Edit"},"edit")]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),nw=()=>{const[r,l]=xe.useState(!1);return n.jsx(X,{title:"Controlled open (isOpen / onOpenChange)",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>l(c=>!c),children:"Toggle (external)"}),n.jsxs(Dt,{isOpen:r,onOpenChange:l,children:[n.jsx(Tt,{children:n.jsx(O,{children:"Open"})}),n.jsxs(Ot,{onAction:c=>console.log("onAction:",c),children:[n.jsx(Ue,{children:"New"},"new"),n.jsx(Ue,{children:"Edit"},"edit")]})]})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
}`})})},aw=["bottom-start","bottom-end","top-start","right"],ow=()=>n.jsx(X,{title:"Placement",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:aw.map(r=>n.jsxs(Dt,{placement:r,children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:r})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Item A"},"a"),n.jsx(Ue,{children:"Item B"},"b")]})]},r))}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</div>`})}),rw=()=>n.jsx(X,{title:"Offset / containerPadding / shouldFlip",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Dt,{offset:0,children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"offset=0"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Item A"},"a"),n.jsx(Ue,{children:"Item B"},"b")]})]}),n.jsxs(Dt,{offset:16,children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"offset=16"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Item A"},"a"),n.jsx(Ue,{children:"Item B"},"b")]})]}),n.jsxs(Dt,{containerPadding:0,shouldFlip:!1,placement:"bottom-end",children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"no flip"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Item A"},"a"),n.jsx(Ue,{children:"Item B"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),sw=()=>n.jsx(X,{title:"Dismiss behavior (isDismissable / isKeyboardDismissDisabled)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Default"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Outside click closes"},"a"),n.jsx(Ue,{children:"Escape closes"},"b")]})]}),n.jsxs(Dt,{isDismissable:!1,children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"No outside close"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Try clicking outside"},"a"),n.jsx(Ue,{children:"Use item or Escape"},"b")]})]}),n.jsxs(Dt,{isKeyboardDismissDisabled:!0,children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"No Escape"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Try pressing Escape"},"a"),n.jsx(Ue,{children:"Outside click still works"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),lw=()=>{const r=xe.useRef(null);return n.jsx(X,{title:"shouldCloseOnInteractOutside",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx("div",{ref:r,className:"px-3 py-2 border border-dashed border-gray-400 rounded-md",children:"Safe zone (clicking here won't close)"}),n.jsxs(Dt,{shouldCloseOnInteractOutside:l=>!r.current?.contains(l),children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Item A"},"a"),n.jsx(Ue,{children:"Item B"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
}`})})},iw=()=>{const r=xe.useRef(null),[l,c]=xe.useState(null);return xe.useEffect(()=>{c(r.current)},[]),n.jsx(X,{title:"portalContainer",preview:n.jsxs("div",{className:"flex gap-3 items-start flex-wrap",children:[n.jsx("div",{ref:r,className:"w-72 h-40 border border-gray-300 rounded-md p-2",children:"Portal container box"}),n.jsxs(Dt,{portalContainer:l,placement:"bottom-start",children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{children:"Item A"},"a"),n.jsx(Ue,{children:"Item B"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
}`})})},cw=()=>n.jsx(X,{title:"closeOnSelect (Dropdown default)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Default (closes)"})}),n.jsxs(Ot,{onAction:r=>console.log("default onAction:",r),children:[n.jsx(Ue,{children:"Select me"},"a"),n.jsx(Ue,{children:"Select me"},"b")]})]}),n.jsxs(Dt,{closeOnSelect:!1,children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"closeOnSelect=false"})}),n.jsxs(Ot,{onAction:r=>console.log("no close onAction:",r),children:[n.jsx(Ue,{children:"Menu stays open"},"a"),n.jsx(Ue,{children:"Menu stays open"},"b")]})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown closeOnSelect={false}>
  <DropdownTrigger>
    <Button variant="bordered">closeOnSelect=false</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => console.log(key)}>
    <DropdownItem key="a">Menu stays open</DropdownItem>
    <DropdownItem key="b">Menu stays open</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),dw=()=>n.jsx(X,{title:"Menu content (topContent / bottomContent / emptyContent)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Top + bottom"})}),n.jsxs(Ot,{topContent:n.jsx("div",{className:"px-2 py-1 text-sm",children:"Top content"}),bottomContent:n.jsx("div",{className:"px-2 py-1 text-sm",children:"Bottom content"}),children:[n.jsx(Ue,{children:"Item A"},"a"),n.jsx(Ue,{children:"Item B"},"b")]})]}),n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Empty list"})}),n.jsx(Ot,{items:[],emptyContent:"Nothing here",children:r=>n.jsx(Ue,{children:r.label},r.key)})]}),n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Hide empty"})}),n.jsx(Ot,{items:[],emptyContent:"Nothing here",hideEmptyContent:!0,children:r=>n.jsx(Ue,{children:r.label},r.key)})]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),uw=()=>n.jsx(X,{title:"classNames / itemClasses",preview:n.jsxs(Dt,{classNames:{base:"inline-flex",content:"outline outline-1 outline-purple-500"},children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Ot,{classNames:{base:"rounded-lg border-2 border-purple-500",list:"p-2",emptyContent:"text-purple-300"},itemClasses:{base:"rounded-md",title:"font-semibold",description:"text-xs opacity-80"},children:[n.jsx(Ue,{title:"Item A",description:"Custom slot classes"},"a"),n.jsx(Ue,{title:"Item B",description:"Custom slot classes"},"b")]})]}),code:n.jsx(n.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),pw=()=>n.jsx(X,{title:"Variants",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:["solid","bordered","light","flat","faded","shadow"].map(r=>n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:r})}),n.jsxs(Ot,{variant:r,children:[n.jsx(Ue,{children:"Item A"},"a"),n.jsx(Ue,{children:"Item B"},"b")]})]},r))}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">solid</Button>
  </DropdownTrigger>
  <DropdownMenu variant="solid">
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),fw=()=>n.jsx(X,{title:"Disabled keys",preview:n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Ot,{disabledKeys:["delete"],children:[n.jsx(Ue,{children:"Copy"},"copy"),n.jsx(Ue,{children:"Rename"},"rename"),n.jsx(Ue,{children:"Delete"},"delete")]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu disabledKeys={["delete"]}>
    <DropdownItem key="copy">Copy</DropdownItem>
    <DropdownItem key="rename">Rename</DropdownItem>
    <DropdownItem key="delete">Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),hw=()=>n.jsx(X,{title:"With icons",preview:n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{children:"Open"})}),n.jsxs(Ot,{children:[n.jsx(Ue,{startContent:n.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Star"},"star"),n.jsx(Ue,{endContent:n.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Arrow"},"arrow")]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),mw=()=>n.jsx(X,{title:"With description and shortcut",preview:n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Open"})}),n.jsxs(Ot,{onClose:()=>console.log("closed"),children:[n.jsx(Ue,{title:"Profile",description:"Manage your profile",shortcut:"P"},"profile"),n.jsx(Ue,{title:"Settings",description:"App settings",shortcut:"S",showDivider:!0},"settings"),n.jsx(Ue,{title:"Log out",closeOnSelect:!1},"logout")]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu onClose={() => console.log("closed")}>
    <DropdownItem key="profile" title="Profile" description="Manage your profile" shortcut="P" />
    <DropdownItem key="settings" title="Settings" description="App settings" shortcut="S" showDivider />
    <DropdownItem key="logout" title="Log out" closeOnSelect={false} />
  </DropdownMenu>
</Dropdown>`})}),xw=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"}],gw=()=>n.jsx(X,{title:"With sections",preview:n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{children:"Open"})}),n.jsxs(Ot,{onAction:r=>console.log(r),children:[n.jsxs(Ns,{title:"Actions",children:[n.jsx(Ue,{children:"Copy"},"copy"),n.jsx(Ue,{children:"Move"},"move")]}),n.jsx(Ns,{title:"Account",items:xw,showDivider:!0,children:r=>n.jsx(Ue,{children:r.label},r.key)}),n.jsx(Ns,{"aria-label":"Danger zone",children:n.jsx(Ue,{children:"Delete"},"delete")})]})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),vw=()=>{const[r,l]=xe.useState(new Set(["a"])),[c,d]=xe.useState(new Set(["a","c"]));return n.jsx(X,{title:"Selection",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Single"})}),n.jsxs(Ot,{selectionMode:"single",closeOnSelect:!1,shouldFocusWrap:!0,selectedKeys:r,onSelectionChange:u=>{l(new Set(u)),console.log("single onSelectionChange:",u)},children:[n.jsx(Ue,{children:"A"},"a"),n.jsx(Ue,{children:"B"},"b"),n.jsx(Ue,{children:"C"},"c")]})]}),n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{variant:"bordered",children:"Multiple"})}),n.jsxs(Ot,{selectionMode:"multiple",closeOnSelect:!1,hideSelectedIcon:!0,selectedKeys:c,onSelectionChange:u=>{d(new Set(u)),console.log("multiple onSelectionChange:",u)},children:[n.jsx(Ue,{selectedIcon:"✓",children:"A"},"a"),n.jsx(Ue,{children:"B"},"b"),n.jsx(Ue,{children:"C"},"c")]})]})]}),code:n.jsx(n.Fragment,{children:`import React from "react";
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
}`})})},bw=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"},{key:"logout",label:"Log out"}],kw=()=>n.jsx(X,{title:"Dynamic items",preview:n.jsxs(Dt,{children:[n.jsx(Tt,{children:n.jsx(O,{children:"Open"})}),n.jsx(Ot,{items:bw,onAction:r=>console.log(r),children:r=>n.jsx(Ue,{children:r.label},r.key)})]}),code:n.jsx(n.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),yw=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"DropdownTrigger + DropdownMenu composition."},{prop:"isOpen",type:"boolean",default:"—",description:"Controlled open state."},{prop:"defaultOpen",type:"boolean",default:"false",description:"Initial open state when uncontrolled."},{prop:"onOpenChange",type:"(isOpen: boolean) => void",default:"—",description:"Called when open state changes."},{prop:"placement",type:"DropdownPlacement",default:'"bottom-start"',description:"Menu placement relative to trigger."},{prop:"offset",type:"number",default:"8",description:"Distance (px) between trigger and menu."},{prop:"containerPadding",type:"number",default:"8",description:"Viewport padding used by positioning logic."},{prop:"shouldFlip",type:"boolean",default:"true",description:"Flips placement to keep menu in viewport."},{prop:"portalContainer",type:"Element | DocumentFragment | null",default:"—",description:"Portal container for the menu."},{prop:"isDismissable",type:"boolean",default:"true",description:"Allows dismissing on outside click."},{prop:"isKeyboardDismissDisabled",type:"boolean",default:"false",description:"Disables dismissing via Escape key."},{prop:"shouldCloseOnInteractOutside",type:"(target: Element) => boolean",default:"—",description:"Custom outside-interaction close predicate."},{prop:"closeOnSelect",type:"boolean",default:"true",description:"Whether selecting an item closes the menu."},{prop:"classNames",type:'Partial<Record<"base" | "content", string>>',default:"—",description:"Slot class overrides for root/content."},{prop:"className",type:"string",default:"—",description:"Class name for the root element."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}],l=[{prop:"children",type:"ReactElement",default:"—",description:"Trigger element that opens the dropdown."}],c=[{prop:"items",type:"Iterable<T>",default:"—",description:"Items for render-prop children."},{prop:"children",type:"ReactNode | (item: T) => ReactElement",default:"—",description:"Menu items or render function."},{prop:"variant",type:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow"',default:'"solid"',description:"Menu visual variant."},{prop:"color",type:'"default" | "primary" | "secondary" | "success" | "warning" | "danger"',default:'"default"',description:"Menu color."},{prop:"selectionMode",type:'"none" | "single" | "multiple"',default:'"none"',description:"Selection behavior."},{prop:"selectedKeys",type:'"all" | Iterable<React.Key>',default:"—",description:"Controlled selected keys."},{prop:"disabledKeys",type:"Iterable<React.Key>",default:"—",description:"Keys that are disabled."},{prop:"defaultSelectedKeys",type:'"all" | Iterable<React.Key>',default:"—",description:"Uncontrolled initial selected keys."},{prop:"disallowEmptySelection",type:"boolean",default:"false",description:"Prevents clearing selection."},{prop:"autoFocus",type:'boolean | "first" | "last"',default:"false",description:"Auto focus behavior when opening."},{prop:"topContent",type:"ReactNode",default:"—",description:"Content rendered above the items."},{prop:"bottomContent",type:"ReactNode",default:"—",description:"Content rendered below the items."},{prop:"emptyContent",type:"ReactNode",default:'"No items."',description:"Content shown when there are no items."},{prop:"hideEmptyContent",type:"boolean",default:"false",description:"Hides the empty state."},{prop:"hideSelectedIcon",type:"boolean",default:"false",description:"Hides the selected icon indicator."},{prop:"shouldFocusWrap",type:"boolean",default:"false",description:"Wrap focus when navigating with keyboard."},{prop:"closeOnSelect",type:"boolean",default:"true",description:"Whether selecting an item closes the menu."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Disables menu animations."},{prop:"classNames",type:'Partial<Record<"base" | "list" | "emptyContent", string>>',default:"—",description:"Slot class overrides for menu."},{prop:"itemClasses",type:"Partial<Record<DropdownItemSlot, string>>",default:"—",description:"Default slot overrides applied to items."},{prop:"onAction",type:"(key: React.Key) => void",default:"—",description:"Called when an item is activated."},{prop:"onSelectionChange",type:'(keys: "all" | Set<React.Key>) => void',default:"—",description:"Called when selection changes."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the menu requests to close."}],d=[{prop:"children",type:"ReactNode",default:"—",description:"Item content."},{prop:"title",type:"string | ReactNode",default:"—",description:"Primary label."},{prop:"textValue",type:"string",default:"—",description:"Text value for typeahead/selection."},{prop:"description",type:"string | ReactNode",default:"—",description:"Secondary description."},{prop:"shortcut",type:"string | ReactNode",default:"—",description:"Shortcut hint content."},{prop:"startContent",type:"ReactNode",default:"—",description:"Leading content."},{prop:"endContent",type:"ReactNode",default:"—",description:"Trailing content."},{prop:"selectedIcon",type:"ReactNode",default:"—",description:"Custom selected icon."},{prop:"showDivider",type:"boolean",default:"false",description:"Shows a divider line after the item."},{prop:"href",type:"string",default:"—",description:"Renders as a link when provided."},{prop:"target",type:"string",default:"—",description:"Link target."},{prop:"rel",type:"string",default:"—",description:"Link rel attribute."},{prop:"download",type:"boolean | string",default:"—",description:"Link download attribute."},{prop:"ping",type:"string",default:"—",description:"Link ping attribute."},{prop:"referrerPolicy",type:"string",default:"—",description:"Link referrerPolicy attribute."},{prop:"isDisabled",type:"boolean",default:"false",description:"Disables the item."},{prop:"isSelected",type:"boolean",default:"—",description:"Controlled selected state."},{prop:"isReadOnly",type:"boolean",default:"false",description:"Prevents changing selection state."},{prop:"hideSelectedIcon",type:"boolean",default:"false",description:"Hides the selected icon indicator."},{prop:"closeOnSelect",type:"boolean",default:"—",description:"Overrides closeOnSelect for this item."},{prop:"itemKey",type:"React.Key",default:"—",description:"Key used for selection/action when used directly."},{prop:"classNames",type:"Partial<Record<DropdownItemSlot, string>>",default:"—",description:"Slot class overrides for this item."},{prop:"onAction",type:"() => void",default:"—",description:"Called when item is activated."},{prop:"onClose",type:"() => void",default:"—",description:"Called when menu should close."},{prop:"onPress",type:"(e: DropdownPressEvent) => void",default:"—",description:"Press handler."},{prop:"onPressStart",type:"(e: DropdownPressEvent) => void",default:"—",description:"Press start handler."},{prop:"onPressEnd",type:"(e: DropdownPressEvent) => void",default:"—",description:"Press end handler."},{prop:"onPressChange",type:"(isPressed: boolean) => void",default:"—",description:"Pressed state change handler."},{prop:"onPressUp",type:"(e: DropdownPressEvent) => void",default:"—",description:"Press up handler."},{prop:"onKeyDown",type:"(e: KeyboardEvent) => void",default:"—",description:"Key down handler."},{prop:"onKeyUp",type:"(e: KeyboardEvent) => void",default:"—",description:"Key up handler."},{prop:"onClick",type:"(e: MouseEvent) => void",default:"—",description:"Click handler."}],u=[{prop:"title",type:"string",default:"—",description:"Section heading."},{prop:"aria-label",type:"string",default:"—",description:"Accessible label for the section."},{prop:"items",type:"Iterable<T>",default:"—",description:"Items for render-prop children."},{prop:"children",type:"ReactNode | (item: T) => ReactElement",default:"—",description:"Section items or render function."},{prop:"hideSelectedIcon",type:"boolean",default:"false",description:"Hides the selected icon indicator."},{prop:"showDivider",type:"boolean",default:"false",description:"Shows a divider before the section."},{prop:"dividerProps",type:"unknown",default:"—",description:"Props forwarded to the divider element."},{prop:"classNames",type:'Partial<Record<"base" | "heading" | "group" | "divider", string>>',default:"—",description:"Slot class overrides for the section."},{prop:"itemClasses",type:"Partial<Record<DropdownItemSlot, string>>",default:"—",description:"Default slot overrides applied to section items."}];return n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(qt,{title:"Dropdown Props",rows:r,footnote:"Dropdown composes DropdownTrigger and DropdownMenu."}),n.jsx(qt,{title:"DropdownTrigger Props",rows:l}),n.jsx(qt,{title:"DropdownMenu Props",rows:c}),n.jsx(qt,{title:"DropdownItem Props",rows:d}),n.jsx(qt,{title:"DropdownSection Props",rows:u})]})},ww=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(tw,{}),n.jsx(nw,{}),n.jsx(ow,{}),n.jsx(rw,{}),n.jsx(sw,{}),n.jsx(lw,{}),n.jsx(iw,{}),n.jsx(cw,{}),n.jsx(dw,{}),n.jsx(uw,{}),n.jsx(pw,{}),n.jsx(fw,{}),n.jsx(hw,{}),n.jsx(mw,{}),n.jsx(gw,{}),n.jsx(vw,{}),n.jsx(kw,{}),n.jsx(yw,{})]}),jw=()=>n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"Hello",placement:"top",delay:0,children:n.jsx(O,{children:"Hover me"})}),n.jsx(Xe,{content:"No delay",placement:"right",delay:0,closeDelay:0,children:n.jsx(O,{variant:"bordered",children:"Focus me"})})]}),code:n.jsx(n.Fragment,{children:`import { Tooltip } from "oks-ui";

<Tooltip content="Hello" placement="top" delay={0}>
  <button type="button">Hover me</button>
</Tooltip>`})}),Sw=()=>{const[r,l]=h.useState(!1);return n.jsx(X,{title:"Controlled",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>l(c=>!c),children:r?"Close tooltip":"Open tooltip"}),n.jsx(Xe,{content:"Hello",isOpen:r,onOpenChange:l,children:n.jsx(O,{variant:"bordered",children:"Hover / Focus"})})]}),code:`import React from "react";
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
}`})},Cw=()=>{const[r,l]=h.useState(0);return n.jsx(X,{title:"Default open / onClose",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"I start open",defaultOpen:!0,onClose:()=>l(c=>c+1),showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Focus / hover"})}),n.jsxs("div",{className:"text-sm",children:["Closed count: ",r]})]}),code:n.jsx(n.Fragment,{children:'<Tooltip content="..." defaultOpen onClose={() => {}}>...</Tooltip>'})})},Dw=()=>n.jsx(X,{title:"Sizes",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"Small",size:"sm",children:n.jsx(O,{variant:"bordered",children:"sm"})}),n.jsx(Xe,{content:"Medium",size:"md",children:n.jsx(O,{variant:"bordered",children:"md"})}),n.jsx(Xe,{content:"Large",size:"lg",children:n.jsx(O,{variant:"bordered",children:"lg"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Small" size="sm">...</Tooltip>
<Tooltip content="Medium" size="md">...</Tooltip>
<Tooltip content="Large" size="lg">...</Tooltip>`})}),Tw=()=>n.jsx(X,{title:"Colors",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"Default",color:"default",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"default"})}),n.jsx(Xe,{content:"Primary",color:"primary",showArrow:!0,children:n.jsx(O,{color:"primary",children:"primary"})}),n.jsx(Xe,{content:"Secondary",color:"secondary",showArrow:!0,children:n.jsx(O,{color:"secondary",children:"secondary"})}),n.jsx(Xe,{content:"Info",color:"info",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"info"})}),n.jsx(Xe,{content:"Success",color:"success",showArrow:!0,children:n.jsx(O,{color:"success",children:"success"})}),n.jsx(Xe,{content:"Warning",color:"warning",showArrow:!0,children:n.jsx(O,{color:"warning",children:"warning"})}),n.jsx(Xe,{content:"Danger",color:"danger",showArrow:!0,children:n.jsx(O,{color:"danger",children:"danger"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Primary" color="primary" showArrow>...</Tooltip>
<Tooltip content="Success" color="success" showArrow>...</Tooltip>`})}),Nw=()=>n.jsx(X,{title:"Color depth",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"Depth 100",color:"primary",colorDepth:100,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"100"})}),n.jsx(Xe,{content:"Depth 500",color:"primary",colorDepth:500,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"500"})}),n.jsx(Xe,{content:"Depth 900",color:"primary",colorDepth:900,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"900"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Depth 100" color="primary" colorDepth={100} showArrow>...</Tooltip>
<Tooltip content="Depth 900" color="primary" colorDepth={900} showArrow>...</Tooltip>`})}),Bw=()=>n.jsx(X,{title:"Radius and shadow",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"radius=none",radius:"none",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"none"})}),n.jsx(Xe,{content:"radius=full",radius:"full",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"full"})}),n.jsx(Xe,{content:"shadow=none",shadow:"none",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"shadow none"})}),n.jsx(Xe,{content:"shadow=lg",shadow:"lg",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"shadow lg"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="radius=full" radius="full" showArrow>...</Tooltip>
<Tooltip content="shadow=lg" shadow="lg" showArrow>...</Tooltip>`})}),Aw=()=>n.jsx(X,{title:"Placement",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"Top start",placement:"top-start",children:n.jsx(O,{variant:"bordered",children:"Top-start"})}),n.jsx(Xe,{content:"Right",placement:"right",offset:10,children:n.jsx(O,{variant:"bordered",children:"Right (offset)"})}),n.jsx(Xe,{content:"Bottom end",placement:"bottom-end",containerPadding:20,children:n.jsx(O,{variant:"bordered",children:"Bottom-end"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Top start" placement="top-start">
  <button type="button">Top-start</button>
</Tooltip>

<Tooltip content="Right" placement="right" offset={10}>
  <button type="button">Right</button>
</Tooltip>`})}),Ow=()=>n.jsx(X,{title:"Advanced positioning",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"crossOffset=16",placement:"top",crossOffset:16,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"crossOffset"})}),n.jsx(Xe,{content:"Close on outside click only",isDismissable:!0,shouldCloseOnInteractOutside:r=>r.tagName!=="BUTTON",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Interact outside"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="crossOffset=16" crossOffset={16} showArrow>...</Tooltip>
<Tooltip
  content="Close on outside click only"
  isDismissable
  shouldCloseOnInteractOutside={(el) => el.tagName !== "BUTTON"}
>...</Tooltip>`})}),zw=()=>n.jsx(X,{title:"Delay and closeDelay",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"delay=0",delay:0,children:n.jsx(O,{variant:"bordered",children:"delay 0"})}),n.jsx(Xe,{content:"delay=600",delay:600,children:n.jsx(O,{variant:"bordered",children:"delay 600"})}),n.jsx(Xe,{content:"closeDelay=0",closeDelay:0,children:n.jsx(O,{variant:"bordered",children:"close 0"})}),n.jsx(Xe,{content:"closeDelay=1500",closeDelay:1500,children:n.jsx(O,{variant:"bordered",children:"close 1500"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="delay=600" delay={600}>...</Tooltip>
<Tooltip content="closeDelay=1500" closeDelay={1500}>...</Tooltip>`})}),Ew=()=>n.jsx(X,{title:"Arrow",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"With arrow",showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Hover me"})}),n.jsx(Xe,{content:"Primary",showArrow:!0,color:"primary",children:n.jsx(O,{color:"primary",children:"Primary"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="With arrow" showArrow>
  <button type="button">Hover me</button>
</Tooltip>`})}),Fw=()=>n.jsx(X,{title:"Behavior",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"No flip",placement:"right",shouldFlip:!1,containerPadding:0,children:n.jsx(O,{variant:"bordered",children:"shouldFlip=false"})}),n.jsx(Xe,{content:"Dismissable",isDismissable:!0,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"isDismissable"})}),n.jsx(Xe,{content:"No blur close",shouldCloseOnBlur:!1,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"shouldCloseOnBlur=false"})}),n.jsx(Xe,{content:"Esc disabled",isKeyboardDismissDisabled:!0,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Esc disabled"})}),n.jsx(Xe,{content:"Scale trigger",triggerScaleOnOpen:!0,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"triggerScaleOnOpen"})})]}),code:n.jsx(n.Fragment,{children:`<Tooltip content="Dismissable" isDismissable showArrow>...</Tooltip>
<Tooltip content="Esc disabled" isKeyboardDismissDisabled showArrow>...</Tooltip>`})}),Rw=()=>n.jsx(X,{title:"Disabled",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(Xe,{content:"You won't see this",isDisabled:!0,children:n.jsx(O,{variant:"bordered",children:"Disabled tooltip"})}),n.jsx(Xe,{content:"Disabled tooltip",isDisabled:!0,showArrow:!0,children:n.jsx(O,{color:"danger",children:"Danger"})})]}),code:`import React from "react";
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
}`}),Mw=()=>n.jsx(X,{title:"Class names",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(Xe,{content:"Custom slot classes",showArrow:!0,classNames:{content:"border border-red-400",arrow:"text-red-400"},children:n.jsx(O,{variant:"bordered",children:"Hover me"})})}),code:n.jsx(n.Fragment,{children:`<Tooltip
  content="Custom slot classes"
  showArrow
  classNames={{
    content: "border border-red-400",
    arrow: "text-red-400",
  }}
>
  <button type="button">Hover me</button>
</Tooltip>`})}),Pw=()=>{const[r,l]=h.useState(null);return n.jsx(X,{title:"Portal container",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsxs("div",{className:"relative border border-white/10 rounded-md p-3",ref:l,children:[n.jsx("div",{className:"text-sm opacity-80",children:"Custom container"}),n.jsx("div",{className:"mt-2",children:n.jsx(Xe,{content:"Portaled into the bordered box",portalContainer:r,showArrow:!0,children:n.jsx(O,{variant:"bordered",children:"Hover"})})})]})}),code:`import React from "react";
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
}`})},Lw=()=>{const[r,l]=h.useState(!1);return n.jsx(X,{title:"Animation",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsxs(O,{variant:"bordered",onPress:()=>l(c=>!c),children:["disableAnimation: ",String(r)]}),n.jsx(Xe,{content:"Hover me",disableAnimation:r,showArrow:!0,children:n.jsx(O,{children:"Trigger"})})]}),code:`import React from "react";
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
}`})},Iw=()=>{const r=[{prop:"children",type:"ReactNode",default:"required",description:"Trigger element/content."},{prop:"content",type:"ReactNode",default:"required",description:"Tooltip content."},{prop:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Tooltip size."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger"',default:'"default"',description:"Semantic color."},{prop:"colorDepth",type:"50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950",default:"100",description:"Color intensity used to compute CSS variables."},{prop:"radius",type:'"none" | "sm" | "md" | "lg" | "full"',default:'"md"',description:"Border radius."},{prop:"shadow",type:'"none" | "sm" | "md" | "lg"',default:'"sm"',description:"Shadow size."},{prop:"placement",type:"TooltipPlacement",default:'"top"',description:"Tooltip placement relative to the trigger."},{prop:"delay",type:"number",default:"0",description:"Open delay (ms)."},{prop:"closeDelay",type:"number",default:"500",description:"Close delay (ms)."},{prop:"isOpen",type:"boolean",default:"—",description:"Controlled open state."},{prop:"defaultOpen",type:"boolean",default:"false",description:"Initial open state when uncontrolled."},{prop:"onOpenChange",type:"(isOpen: boolean) => void",default:"—",description:"Called when open state changes."},{prop:"onClose",type:"() => void",default:"—",description:"Called on close."},{prop:"offset",type:"number",default:"7",description:"Distance (px) between trigger and tooltip."},{prop:"containerPadding",type:"number",default:"12",description:"Viewport padding used by positioning logic."},{prop:"crossOffset",type:"number",default:"0",description:"Cross-axis offset (px)."},{prop:"showArrow",type:"boolean",default:"false",description:"Shows an arrow pointing to the trigger."},{prop:"shouldFlip",type:"boolean",default:"true",description:"Flips placement to keep tooltip in viewport."},{prop:"triggerScaleOnOpen",type:"boolean",default:"false",description:"Applies a subtle scale effect to the trigger on open."},{prop:"isKeyboardDismissDisabled",type:"boolean",default:"false",description:"Disables closing via Escape key."},{prop:"isDismissable",type:"boolean",default:"false",description:"Allows dismissing on outside click."},{prop:"shouldCloseOnBlur",type:"boolean",default:"true",description:"Closes when focus leaves the trigger/content."},{prop:"shouldCloseOnInteractOutside",type:"(element: HTMLElement) => boolean",default:"—",description:"Custom outside-interaction close predicate."},{prop:"portalContainer",type:"Element | DocumentFragment | null",default:"—",description:"Portal container for the tooltip."},{prop:"updatePositionDeps",type:"any[]",default:"—",description:"Dependencies that trigger repositioning."},{prop:"isDisabled",type:"boolean",default:"false",description:"Disables tooltip."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Disables tooltip animations."},{prop:"className",type:"string",default:"—",description:"Root class name."},{prop:"classNames",type:"{ base?: string; content?: string; arrow?: string }",default:"—",description:"Slot class overrides."},{prop:"motionProps",type:"unknown",default:"—",description:"Reserved for optional motion integration."}];return n.jsx(qt,{title:"Tooltip Props",rows:r,footnote:"Tooltip also supports standard div props such as id, aria-*, and data-*."})},_w=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(jw,{}),n.jsx(Sw,{}),n.jsx(Cw,{}),n.jsx(Dw,{}),n.jsx(Tw,{}),n.jsx(Nw,{}),n.jsx(Bw,{}),n.jsx(Aw,{}),n.jsx(Ow,{}),n.jsx(zw,{}),n.jsx(Ew,{}),n.jsx(Fw,{}),n.jsx(Rw,{}),n.jsx(Mw,{}),n.jsx(Pw,{}),n.jsx(Lw,{}),n.jsx(Iw,{})]}),Uw=()=>n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>mt("Saved"),children:"Simple"}),n.jsx(O,{variant:"bordered",onPress:()=>mt({title:"Saved",message:"Profile updated",type:"success"}),children:"With title"})]}),code:n.jsx(n.Fragment,{children:`import { toast } from "oks-ui";

toast("Saved");
toast({ title: "Saved", message: "Profile updated", type: "success" });`})}),Hw=()=>n.jsx(X,{title:"ToastProvider (mounted in main.jsx)",preview:n.jsx("div",{className:"text-sm opacity-80",children:"ToastProvider is already mounted at the playground root, so the toast APIs work anywhere."}),code:n.jsx(n.Fragment,{children:`import { ToastProvider } from "oks-ui";

<ToastProvider placement="bottom-right" maxVisibleToasts={3}>
  <App />
</ToastProvider>`})}),Vw=()=>n.jsx(X,{title:"addToast (HeroUI-style)",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>Ud({title:"Saved",description:"Your changes have been saved.",color:"success"}),children:"Success"}),n.jsx(O,{variant:"bordered",onPress:()=>Ud({title:"Network",description:"Something went wrong.",color:"danger"}),children:"Error"})]}),code:n.jsx(n.Fragment,{children:`import { addToast } from "oks-ui";

addToast({ title: "Saved", description: "Your changes have been saved.", color: "success" });`})});function Gw(){return new Promise((r,l)=>{setTimeout(()=>{Math.random()>.4?r(!0):l(new Error("Failed"))},900)})}const Yw=()=>n.jsx(X,{title:"addToast with promise",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(O,{onPress:()=>Ud({description:"Saving…",promise:Gw(),loadingComponent:n.jsx("span",{className:"text-sm",children:"⏳"})}),children:"Save demo"})}),code:n.jsx(n.Fragment,{children:'addToast({ description: "Saving…", promise, loadingComponent: <span>⏳</span> });'})}),qw=()=>n.jsx(X,{title:"Types",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>mt.info("Heads up"),children:"Info"}),n.jsx(O,{color:"success",onPress:()=>mt.success("Saved"),children:"Success"}),n.jsx(O,{color:"warning",onPress:()=>mt.warning("Be careful"),children:"Warning"}),n.jsx(O,{color:"danger",onPress:()=>mt.error("Something went wrong"),children:"Error"})]}),code:n.jsx(n.Fragment,{children:`toast.info("Heads up");
toast.success("Saved");
toast.warning("Be careful");
toast.error("Something went wrong");`})}),$w=()=>n.jsx(X,{title:"Placement",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>mt("Top left",{position:"top-left"}),children:"Top-left"}),n.jsx(O,{variant:"bordered",onPress:()=>mt("Top center",{position:"top-center"}),children:"Top-center"}),n.jsx(O,{variant:"bordered",onPress:()=>mt("Bottom center",{position:"bottom-center"}),children:"Bottom-center"})]}),code:n.jsx(n.Fragment,{children:`toast("Top left", { position: "top-left" });
toast("Top center", { position: "top-center" });
toast("Bottom center", { position: "bottom-center" });`})}),Kw=()=>n.jsx(X,{title:"Variants",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>mt("Solid",{variant:"solid",color:"primary"}),children:"Solid"}),n.jsx(O,{variant:"bordered",onPress:()=>mt("Soft",{variant:"soft",color:"secondary"}),children:"Soft"}),n.jsx(O,{variant:"bordered",onPress:()=>mt("Outline",{variant:"outline",color:"warning"}),children:"Outline"})]}),code:n.jsx(n.Fragment,{children:`toast("Solid", { variant: "solid", color: "primary" });
toast("Soft", { variant: "soft", color: "secondary" });
toast("Outline", { variant: "outline", color: "warning" });`})}),Xw=()=>n.jsx(X,{title:"Tone and size",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>mt({title:"Tone: secondary",description:"Toast size: xl",tone:"secondary",size:"xl"}),children:"secondary + xl"}),n.jsx(O,{color:"danger",onPress:()=>mt({title:"Tone: danger",description:"Toast size: sm",tone:"danger",size:"sm"}),children:"danger + sm"})]}),code:n.jsx(n.Fragment,{children:'toast({ title: "Tone", description: "Size", tone: "secondary", size: "xl" });'})}),Zw=()=>{const r=h.useRef(null);return n.jsx(X,{title:"Duration and progress",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>{r.current=mt("Auto dismiss (2s)",{timeout:2e3,shouldShowTimeoutProgress:!0})},children:"timeout=2000"}),n.jsx(O,{variant:"bordered",onPress:()=>{r.current=mt("Persistent (manual close)",{persistent:!0,dismissible:!0})},children:"persistent"}),n.jsx(O,{variant:"bordered",onPress:()=>{typeof r.current=="number"&&mt.dismiss(r.current)},children:"Dismiss last"})]}),code:n.jsx(n.Fragment,{children:`toast("Auto dismiss (2s)", { timeout: 2000, shouldShowTimeoutProgress: true });
toast("Persistent", { persistent: true, dismissible: true });`})})},Qw=()=>n.jsx(X,{title:"Action",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(O,{onPress:()=>mt({title:"Undo?",description:"Item deleted.",color:"warning",action:{label:"Undo",onClick:()=>mt.success("Undone")}}),children:"With action"})}),code:n.jsx(n.Fragment,{children:`toast({
  title: "Undo?",
  description: "Item deleted.",
  action: { label: "Undo", onClick: () => {} },
});`})}),Ww=()=>n.jsx(X,{title:"Icons and close button",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>mt({description:"No icon",hideIcon:!0}),children:"hideIcon"}),n.jsx(O,{variant:"bordered",onPress:()=>mt({description:"No close button",hideCloseButton:!0}),children:"hideCloseButton"}),n.jsx(O,{variant:"bordered",onPress:()=>mt({description:"Custom close icon",closeIcon:n.jsx("span",{"aria-hidden":"true",children:"×"})}),children:"closeIcon"})]}),code:n.jsx(n.Fragment,{children:`toast({ description: "No icon", hideIcon: true });
toast({ description: "No close button", hideCloseButton: true });
toast({ description: "Custom close icon", closeIcon: <span aria-hidden="true">×</span> });`})}),Jw=()=>n.jsx(X,{title:"End content and loading component",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>mt({title:"Export ready",description:"Download your file",endContent:n.jsx("span",{className:"text-sm",children:"⬇"})}),children:"endContent"}),n.jsx(O,{onPress:()=>mt({type:"loading",message:"Uploading...",persistent:!0,dismissible:!1,loadingComponent:n.jsx("span",{className:"text-sm",children:"⏳"})}),children:"loadingComponent"})]}),code:n.jsx(n.Fragment,{children:`toast({ title: "Export ready", endContent: <span>⬇</span> });
toast({ type: "loading", message: "Uploading...", loadingComponent: <span>⏳</span> });`})}),ej=()=>n.jsx(X,{title:"Update and dismiss",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>{const r=mt("Uploading...",{type:"loading",persistent:!0,dismissible:!1});setTimeout(()=>{mt.update(r,{type:"success",message:"Uploaded",persistent:!1})},900)},children:"Upload demo"}),n.jsx(O,{variant:"bordered",onPress:()=>mt.dismissAll(),children:"Dismiss all"})]}),code:n.jsx(n.Fragment,{children:`const id = toast("Uploading...", { type: "loading", persistent: true, dismissible: false });
toast.update(id, { type: "success", message: "Uploaded", persistent: false });
toast.dismiss(id);
toast.dismissAll();`})}),tj=()=>{const[r,l]=h.useState(0),[c,d]=h.useState("-");return n.jsx(X,{title:"id and onDismiss",preview:n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>{const u=r+1;l(u),mt({id:42,title:"Single toast (id=42)",description:`Updated count: ${u}`,shouldShowTimeoutProgress:!0,timeout:2500,onDismiss:p=>d(String(p))})},children:"Update same id"}),n.jsxs("div",{className:"text-sm",children:["Last dismissed: ",c]})]}),code:n.jsx(n.Fragment,{children:'toast({ id: 42, description: "This replaces the existing toast with id=42", onDismiss: (id) => {} });'})})};function nj(){return new Promise((r,l)=>{setTimeout(()=>{Math.random()>.4?r(!0):l(new Error("Failed"))},800)})}const aj=()=>n.jsx(X,{title:"Promise helper",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(O,{onPress:()=>mt.promise(nj(),{loading:{message:"Saving...",persistent:!0,dismissible:!1},success:()=>({message:"Saved",type:"success",persistent:!1}),error:()=>({message:"Failed",type:"error",persistent:!1})}),children:"Save demo"})}),code:n.jsx(n.Fragment,{children:`toast.promise(promise, {
  loading: { message: "Saving...", persistent: true, dismissible: false },
  success: () => ({ message: "Saved", type: "success", persistent: false }),
  error: () => ({ message: "Failed", type: "error", persistent: false }),
});`})}),oj=()=>{const r=h0();return n.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[n.jsx(O,{onPress:()=>r.success("Saved"),children:"Success"}),n.jsx(O,{color:"danger",onPress:()=>r.error("Failed"),children:"Error"})]})},rj=()=>n.jsx(X,{title:"useToast() hook",preview:n.jsx(oj,{}),code:n.jsx(n.Fragment,{children:`import { useToast } from "oks-ui";

const t = useToast();
t.success("Saved");
t.error("Failed");`})}),sj=()=>n.jsx(X,{title:"Class names",preview:n.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:n.jsx(O,{variant:"bordered",onPress:()=>mt({title:"Custom styles",description:"Slots customized via classNames",classNames:{base:"border border-blue-400",title:"text-blue-300",description:"text-blue-200",progressIndicator:"bg-blue-400"},shouldShowTimeoutProgress:!0,timeout:3500}),children:"Show toast"})}),code:n.jsx(n.Fragment,{children:`toast({
  title: "Custom styles",
  description: "Slots customized via classNames",
  classNames: { base: "...", title: "...", description: "..." },
});`})}),lj=()=>{const r=[{prop:"children",type:"ReactNode",default:"—",description:"Application tree to render within the provider."},{prop:"placement",type:"ToastPlacement",default:'"bottom-right"',description:"Toast placement. Alias: position."},{prop:"position",type:"ToastPosition",default:"—",description:"Alias for placement."},{prop:"maxVisibleToasts",type:"number",default:"3",description:"Max toasts fully visible per region."},{prop:"maxToasts",type:"number",default:"12",description:"Caps queued toasts (includes non-visible toasts)."},{prop:"defaultDuration",type:"number",default:"6000",description:"Default toast duration (ms)."},{prop:"container",type:"Element | DocumentFragment | null",default:"—",description:"Portal container for toast regions."},{prop:"motion",type:'"auto" | "reduced" | "default"',default:'"auto"',description:"Controls motion mode."},{prop:"disableAnimation",type:"boolean",default:"false",description:"Forces reduced motion."},{prop:"toastOffset",type:"number",default:"0",description:"Extra offset (px) from viewport edges."},{prop:"toastProps",type:"ToastOptions",default:"—",description:"Default options applied to every toast."},{prop:"regionProps",type:"ToastRegionProps",default:"—",description:"Props applied to each toast region container."},{prop:"className",type:"string",default:"—",description:"Class name for the provider root."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the provider root."}],l=[{prop:"title",type:"ReactNode",default:"—",description:"Toast title."},{prop:"description",type:"ReactNode",default:"—",description:"Preferred body content."},{prop:"message",type:"ReactNode",default:"—",description:"Body content alias (used if description is not provided)."},{prop:"type",type:"ToastType",default:'"default" (computed)',description:"Toast type (default/success/error/loading) - can be derived from color/severity."},{prop:"tone",type:"ToastTone",default:"computed",description:"Tone used for styling (can be derived from type/color)."},{prop:"color",type:"ToastColor",default:"—",description:"Semantic color (alias: severity)."},{prop:"severity",type:"ToastSeverity",default:"—",description:"Alias for color."},{prop:"variant",type:"ToastVariant",default:'"flat"',description:"Visual variant."},{prop:"radius",type:"ToastRadius",default:'"md"',description:"Border radius."},{prop:"size",type:"ToastSize",default:'"md"',description:"Toast size."},{prop:"placement",type:"ToastPlacement",default:"provider placement",description:"Overrides provider placement for this toast. Alias: position."},{prop:"position",type:"ToastPosition",default:"—",description:"Alias for placement."},{prop:"duration",type:"number | null",default:"provider defaultDuration",description:"Auto-dismiss duration in ms. null disables auto-dismiss."},{prop:"timeout",type:"number | null",default:"—",description:"Alias for duration."},{prop:"persistent",type:"boolean",default:"false",description:"When true, duration becomes null (no auto-dismiss)."},{prop:"showDurationBar",type:"boolean",default:"false",description:"Shows a duration progress bar. Alias: shouldShowTimeoutProgress."},{prop:"shouldShowTimeoutProgress",type:"boolean",default:"false",description:"Alias for showDurationBar."},{prop:"dismissible",type:"boolean",default:"true",description:"Shows a close button and allows dismissal."},{prop:"hideCloseButton",type:"boolean",default:"false",description:"Hides the close button."},{prop:"action",type:"{ label: string; onClick?: () => void }",default:"—",description:"Optional action button."},{prop:"icon",type:"ReactNode",default:"—",description:"Custom icon content."},{prop:"showIcon",type:"boolean",default:"computed",description:"Controls icon visibility (unless hideIcon is provided)."},{prop:"hideIcon",type:"boolean",default:"false",description:"Hides the icon."},{prop:"endContent",type:"ReactNode",default:"—",description:"Extra trailing content."},{prop:"closeIcon",type:"ReactNode",default:"—",description:"Custom close icon."},{prop:"loadingComponent",type:"ReactNode",default:"—",description:"Custom loading indicator component."},{prop:"promise",type:"Promise<unknown>",default:"—",description:"Turns the toast into a promise toast (loading → success/error)."},{prop:"classNames",type:"ToastClassNames",default:"—",description:"Slot class overrides."},{prop:"id",type:"ToastId",default:"auto",description:"Custom toast id (used for updates)."},{prop:"onDismiss",type:"(id: ToastId) => void",default:"—",description:"Called when the toast is dismissed."},{prop:"className",type:"string",default:"—",description:"Class name for the toast root."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the toast root."}];return n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(qt,{title:"ToastProvider Props",rows:r}),n.jsx(qt,{title:"Toast Options (ToastOptions)",rows:l})]})},ij=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Hw,{}),n.jsx(Uw,{}),n.jsx(Vw,{}),n.jsx(Yw,{}),n.jsx(qw,{}),n.jsx($w,{}),n.jsx(Kw,{}),n.jsx(Xw,{}),n.jsx(Zw,{}),n.jsx(Qw,{}),n.jsx(Ww,{}),n.jsx(Jw,{}),n.jsx(ej,{}),n.jsx(tj,{}),n.jsx(aj,{}),n.jsx(rj,{}),n.jsx(sj,{}),n.jsx(lj,{})]}),cj=()=>{const[r,l]=xe.useState(!1);return n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open backdrop"}),n.jsx(Xn,{isOpen:r,onClose:()=>l(!1),children:n.jsx("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Backdrop content"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Click outside or press Escape to close."}),n.jsxs("div",{className:"flex gap-3 justify-end",children:[n.jsx(O,{variant:"bordered",onPress:()=>l(!1),children:"Cancel"}),n.jsx(O,{color:"primary",onPress:()=>l(!1),children:"Confirm"})]})]})})})]}),code:n.jsx(n.Fragment,{children:`import { Backdrop, Button } from "oks-ui";

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
}`})})},dj=["fade","zoom","slideUp","slideDown","slideLeft","slideRight"],uj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState("fade");return n.jsx(X,{title:"Animation types",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[dj.map(u=>n.jsx(O,{variant:c===u?"solid":"bordered",color:"primary",onPress:()=>{d(u),l(!0)},children:u},u)),n.jsx(Xn,{isOpen:r,onClose:()=>l(!1),animationType:c,animationDuration:.25,children:n.jsx("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>l(!1),children:"Close"})]})})})]}),code:`import React from "react";
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
}`})},pj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!0);return n.jsx(X,{title:"blur",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:u=>d(u.target.checked)}),n.jsx("span",{children:"blur"})]}),n.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"})}),n.jsx(Xn,{isOpen:r,onClose:()=>l(!1),blur:c,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Blur"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>l(!1),children:"Close"})]}),n.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["blur: ",c?"true":"false"]})]})})]}),code:`import React from "react";
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
}`})},fj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0);return n.jsx(X,{title:"Dismiss behavior",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:m=>d(m.target.checked)}),n.jsx("span",{children:"closeOnOutsideClick"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:m=>p(m.target.checked)}),n.jsx("span",{children:"closeOnEscape"})]})]}),n.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"})}),n.jsx(Xn,{isOpen:r,onClose:()=>l(!1),closeOnOutsideClick:c,closeOnEscape:u,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Dismiss behavior"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>l(!1),children:"Close"})]}),n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:"Try clicking outside or pressing Escape based on your toggles."})]})})]}),code:`import React from "react";
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
}`})},hj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!0);return n.jsx(X,{title:"lockScroll",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:u=>d(u.target.checked)}),n.jsx("span",{children:"lockScroll"})]}),n.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"})}),n.jsx("div",{className:"text-sm text-gray-600",children:"With lockScroll enabled, the document should not scroll while the backdrop is open."}),n.jsxs("div",{className:"h-40 overflow-y-auto border border-gray-200 rounded-md p-3",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Scrollable area"}),n.jsx("div",{className:"text-sm text-gray-600 mt-2",children:"This box can scroll independently, but lockScroll affects document scrolling."}),n.jsx("div",{className:"h-64"}),n.jsx("div",{className:"text-xs text-gray-500",children:"End"})]}),n.jsx(Xn,{isOpen:r,onClose:()=>l(!1),lockScroll:c,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Scroll lock"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>l(!1),children:"Close"})]}),n.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["lockScroll: ",c?"true":"false"]})]})})]}),code:`import React from "react";
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
}`})},mj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(80),[u,p]=xe.useState("var(--oks-palette-neutral-950, #000)"),[m,y]=xe.useState(40);return n.jsx(X,{title:"Background + zIndex",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("div",{className:"text-sm font-semibold text-gray-700 min-w-24",children:"Colors"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-neutral-950, #000)"),children:"Neutral"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-primary-700, #2563eb)"),children:"Primary"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-secondary-700, #6d28d9)"),children:"Secondary"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-success-700, #16a34a)"),children:"Success"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-warning-700, #d97706)"),children:"Warning"}),n.jsx(O,{variant:"bordered",onPress:()=>p("var(--oks-palette-danger-700, #dc2626)"),children:"Danger"})]}),n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("div",{className:"text-sm font-semibold text-gray-700 min-w-24",children:"zIndex"}),n.jsx(O,{variant:"bordered",onPress:()=>y(10),children:"10"}),n.jsx(O,{variant:"bordered",onPress:()=>y(40),children:"40"}),n.jsx(O,{variant:"bordered",onPress:()=>y(60),children:"60"}),n.jsx(O,{variant:"bordered",onPress:()=>y(100),children:"100"}),n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"})]})]}),n.jsxs("label",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("span",{className:"min-w-40",children:"backgroundOpacity"}),n.jsx("input",{type:"range",min:0,max:100,value:c,onChange:x=>d(Number(x.target.value))}),n.jsx("span",{className:"w-10 text-right",children:c})]}),n.jsxs("label",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("span",{className:"min-w-40",children:"zIndex"}),n.jsx("input",{type:"range",min:0,max:100,value:m,onChange:x=>y(Number(x.target.value))}),n.jsx("span",{className:"w-10 text-right",children:m})]}),n.jsx("div",{className:"text-sm text-gray-600",children:"Tip: the red badge uses z-index 50. Set backdrop zIndex above 50 to cover it."}),n.jsx("div",{className:"fixed bottom-4 right-4 z-50 bg-red-600 text-white text-xs px-3 py-2 rounded-md shadow-lg",children:"z-50 badge"}),n.jsx(Xn,{isOpen:r,onClose:()=>l(!1),backgroundColor:u,backgroundOpacity:c,zIndex:m,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Backdrop"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>l(!1),children:"Close"})]}),n.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["backgroundOpacity: ",c,", zIndex: ",m]})]})})]}),code:`import React from "react";
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
}`})},xj=["ease","easeIn","easeOut","easeInOut"],gj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState("ease");return n.jsx(X,{title:"Easing",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[xj.map(u=>n.jsx(O,{variant:c===u?"solid":"bordered",color:"primary",onPress:()=>{d(u),l(!0)},children:u},u)),n.jsx(Xn,{isOpen:r,onClose:()=>l(!1),animationType:"zoom",animationDuration:.35,easing:c,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>l(!1),children:"Close"})]}),n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:"easing controls the CSS transition timing function."})]})})]}),code:`import React from "react";
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
}`})},vj=()=>{const r=xe.useRef(null),[l,c]=xe.useState(null),[d,u]=xe.useState(!1),[p,m]=xe.useState("container");return xe.useEffect(()=>{c(r.current)},[]),n.jsx(X,{title:"portal + container",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{variant:"bordered",onPress:()=>{m("inline"),u(!0)},children:"Open (portal=false)"}),n.jsx(O,{color:"primary",onPress:()=>{m("container"),u(!0)},children:"Open (custom container)"})]}),n.jsxs("div",{ref:r,className:"w-full max-w-xl h-56 border border-gray-300 rounded-md p-3 bg-gray-50 overflow-hidden relative",style:{transform:"translateZ(0)"},children:[n.jsx("div",{className:"text-sm text-gray-700 font-medium",children:"Custom portal container box"}),n.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Backdrop can be portaled into this element using container."})]}),p==="inline"?n.jsx(Xn,{isOpen:d,onClose:()=>u(!1),portal:!1,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Inline render"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>u(!1),children:"Close"})]}),n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:"This Backdrop is not rendered via a portal."})]})}):n.jsx(Xn,{isOpen:d,onClose:()=>u(!1),portal:!0,container:l,children:n.jsxs("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Portaled"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>u(!1),children:"Close"})]}),n.jsx("div",{className:"mt-2 text-sm text-gray-600",children:"This Backdrop is portaled into the gray box."})]})})]}),code:`import React from "react";
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
}`})},bj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!1),[u,p]=xe.useState(!0);return n.jsx(X,{title:"Content layout",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:m=>d(m.target.checked)}),n.jsx("span",{children:"contentFullSize"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:m=>p(m.target.checked)}),n.jsx("span",{children:"contentStyle (padding)"})]}),n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"})]}),n.jsx(Xn,{isOpen:r,onClose:()=>l(!1),contentFullSize:c,contentClassName:"flex items-center justify-center",contentStyle:{padding:u?24:0},children:n.jsxs("div",{className:c?"w-full h-full bg-white rounded-md shadow-xl flex flex-col":"w-full max-w-md bg-white rounded-md shadow-xl p-6",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsx("div",{className:"text-lg font-semibold",children:"Content"}),n.jsx(O,{size:"sm",variant:"bordered",onPress:()=>l(!1),children:"Close"})]}),n.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["contentFullSize: ",c?"true":"false"]}),c?n.jsx("div",{className:"mt-4 flex-1 border border-dashed border-gray-300 rounded-md flex items-center justify-center text-sm text-gray-600",children:"Full-size area"}):null]})})]}),code:`import React from "react";
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
}`})},kj=()=>{const r=[{prop:"isOpen",type:"boolean",default:"—",description:"Controls whether the backdrop is shown."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the backdrop requests to close (escape/outside click)."},{prop:"children",type:"ReactNode",default:"—",description:"Content rendered centered on top of the backdrop."},{prop:"zIndex",type:"number",default:"40",description:"CSS z-index for the backdrop layer."},{prop:"closeOnOutsideClick",type:"boolean",default:"true",description:"Closes when clicking outside the content."},{prop:"closeOnEscape",type:"boolean",default:"true",description:"Closes when pressing Escape."},{prop:"lockScroll",type:"boolean",default:"true",description:"Locks document scrolling while open."},{prop:"blur",type:"boolean",default:"true",description:"Applies a blur effect to the backdrop."},{prop:"backgroundColor",type:"string",default:'"var(--oks-palette-neutral-950, #000)"',description:"Backdrop background color."},{prop:"backgroundOpacity",type:"number",default:"80",description:"Backdrop opacity (0–100)."},{prop:"animationDuration",type:"number",default:"0.3",description:"Animation duration in seconds."},{prop:"animationType",type:'"fade" | "zoom" | "slideUp" | "slideDown" | "slideLeft" | "slideRight"',default:'"fade"',description:"Backdrop/content animation type."},{prop:"easing",type:'"ease" | "easeIn" | "easeOut" | "easeInOut"',default:'"ease"',description:"Animation easing."},{prop:"portal",type:"boolean",default:"true",description:"Renders via a portal when true."},{prop:"container",type:"Element | DocumentFragment | null",default:"—",description:"Portal container when portal is enabled."},{prop:"className",type:"string",default:"—",description:"Class name for the backdrop root."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the backdrop root."},{prop:"contentFullSize",type:"boolean",default:"false",description:"Makes the content container full-size."},{prop:"contentClassName",type:"string",default:"—",description:"Class name for the content container."},{prop:"contentStyle",type:"CSSProperties",default:"—",description:"Inline styles for the content container."}];return n.jsx(qt,{title:"Backdrop Props",rows:r,footnote:"Backdrop is a controlled component: provide isOpen and onClose."})},yj=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(cj,{}),n.jsx(pj,{}),n.jsx(fj,{}),n.jsx(hj,{}),n.jsx(mj,{}),n.jsx(uj,{}),n.jsx(gj,{}),n.jsx(vj,{}),n.jsx(bj,{}),n.jsx(kj,{})]}),wj=()=>n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"w-full max-w-xl bg-white rounded-md border border-gray-200 overflow-hidden",children:[n.jsx("div",{className:"p-4 font-semibold",children:"Account"}),n.jsx(ua,{}),n.jsx("div",{className:"p-4 text-sm text-gray-600",children:"Profile settings and security options."}),n.jsx(ua,{}),n.jsxs("div",{className:"p-4 flex items-center justify-between",children:[n.jsx("span",{className:"text-sm",children:"Notifications"}),n.jsx("span",{className:"text-sm text-gray-500",children:"Enabled"})]})]}),code:n.jsx(n.Fragment,{children:`import { Divider } from "oks-ui";

<div>
  <div>Section A</div>
  <Divider />
  <div>Section B</div>
</div>`})}),jj=["fullWidth","inset","middle"],Sj=["primary","secondary","success","warning","danger"],Cj=()=>n.jsx(X,{title:"Variants and colors",preview:n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Variants"}),jj.map(r=>n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("div",{className:"text-xs text-gray-600",children:r}),n.jsx(ua,{variant:r})]},r))]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"text-sm font-semibold",children:"With text"}),n.jsx(ua,{color:"secondary",colorDepth:300,children:"OR"})]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Colors"}),n.jsx("div",{className:"flex flex-col gap-3",children:Sj.map(r=>n.jsx(ua,{color:r,colorDepth:300},r))})]})]}),code:n.jsx(n.Fragment,{children:`<Divider variant="inset" />
<Divider color="secondary" colorDepth={300}>OR</Divider>
<Divider orientation="vertical" />`})}),Dj=()=>n.jsx(X,{title:"Vertical",preview:n.jsxs("div",{className:"flex items-stretch gap-4 h-24",children:[n.jsx("div",{className:"flex-1 bg-white rounded-md border border-gray-200 p-4",children:"Left"}),n.jsx(ua,{orientation:"vertical",color:"secondary",colorDepth:200}),n.jsx("div",{className:"flex-1 bg-white rounded-md border border-gray-200 p-4",children:"Right"})]}),code:n.jsx(n.Fragment,{children:`<div className="flex items-stretch h-24">
  <div className="flex-1">Left</div>
  <Divider orientation="vertical" color="secondary" colorDepth={200} />
  <div className="flex-1">Right</div>
</div>`})}),Tj=()=>{const[r,l]=xe.useState(1),[c,d]=xe.useState(300);return n.jsx(X,{title:"Thickness & label",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-20",children:"thickness"}),n.jsx("input",{type:"range",min:1,max:8,step:1,value:r,onChange:u=>l(Number(u.target.value))}),n.jsx("span",{className:"w-8 text-right",children:r})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-20",children:"colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:c,onChange:u=>d(Number(u.target.value))}),n.jsx("span",{className:"w-12 text-right",children:c})]})]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx(ua,{color:"secondary",colorDepth:c,thickness:r}),n.jsx(ua,{color:"secondary",colorDepth:c,thickness:r,children:"OR"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Use children to render a labeled divider (horizontal only)."})]})]}),code:`import { Divider } from "oks-ui";

<Divider thickness={2} />
<Divider color="secondary" colorDepth={300} thickness={2}>OR</Divider>`})},Nj=()=>{const r=[{prop:"orientation",type:'"horizontal" | "vertical"',default:'"horizontal"',description:"Divider orientation."},{prop:"variant",type:'"fullWidth" | "inset" | "middle"',default:'"fullWidth"',description:"Layout variant."},{prop:"color",type:'DividerColor (e.g. "primary" | "secondary" | "success" | ... | string)',default:'"primary"',description:"Semantic color for divider line."},{prop:"colorDepth",type:"DividerColorDepth",default:"300",description:"Color intensity (snapped to 50..950)."},{prop:"thickness",type:"number | string",default:"—",description:"Line thickness (e.g. 1, 2, '2px')."},{prop:"children",type:"ReactNode",default:"—",description:"Optional content rendered within the divider."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(qt,{title:"Divider Props",rows:r,footnote:"Divider also supports standard element props such as className, id, aria-*, and data-*."})},Bj=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(wj,{}),n.jsx(Cj,{}),n.jsx(Dj,{}),n.jsx(Tj,{}),n.jsx(Nj,{})]}),Aj=()=>{const[r,l]=xe.useState(!1),c=xe.useRef(null);return n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open drawer"}),n.jsx(go,{isOpen:r,onClose:()=>l(!1),title:"Drawer title",initialFocusRef:c,actions:n.jsxs("div",{className:"flex justify-end gap-3",children:[n.jsx(O,{variant:"bordered",onPress:()=>l(!1),children:"Cancel"}),n.jsx(O,{color:"primary",onPress:()=>l(!1),children:"Save"})]}),children:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"text-sm text-gray-600",children:"This drawer uses Backdrop internally. Press Escape or click outside to close."}),n.jsx("input",{ref:c,className:"w-full border border-gray-300 rounded-md px-3 py-2",placeholder:"Initial focus"}),n.jsx("div",{className:"text-sm",children:"Content area supports any React nodes."})]})})]}),code:n.jsx(n.Fragment,{children:`import { Drawer, Button } from "oks-ui";

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
}`})})},Oj=["left","right","top","bottom"],zj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState("right");return n.jsx(X,{title:"Positions",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[Oj.map(u=>n.jsx(O,{color:"primary",variant:c===u?"solid":"bordered",onPress:()=>{d(u),l(!0)},children:u},u)),n.jsx(go,{isOpen:r,onClose:()=>l(!1),position:c,title:`Position: ${c}`,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Drawer slides based on the selected position."})})]}),code:`import React from "react";
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
}`})},Ej=["left","right","top","bottom"],Cm=["sm","md","lg"],Fj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState("right"),[u,p]=xe.useState("md"),[m,y]=xe.useState("md"),[x,v]=xe.useState("600px"),[b,w]=xe.useState("420px"),[S,F]=xe.useState(!1),[C,T]=xe.useState(!1),N=c==="left"||c==="right",R=S?x:u,Z=C?b:m;return n.jsx(X,{title:"Sizing (width/height)",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"flex items-center gap-4 flex-wrap",children:n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm min-w-16",children:"position"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:c,onChange:M=>d(M.target.value),children:Ej.map(M=>n.jsx("option",{value:M,children:M},M))})]})}),N?n.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:S,onChange:M=>F(M.target.checked)}),n.jsx("span",{className:"text-sm",children:"custom width"})]}),S?n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:x,onChange:M=>v(M.target.value),placeholder:'e.g. "600px"'}):n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:u,onChange:M=>p(M.target.value),children:Cm.map(M=>n.jsx("option",{value:M,children:M},M))})]}):n.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:C,onChange:M=>T(M.target.checked)}),n.jsx("span",{className:"text-sm",children:"custom height"})]}),C?n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:b,onChange:M=>w(M.target.value),placeholder:'e.g. "420px"'}):n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:m,onChange:M=>y(M.target.value),children:Cm.map(M=>n.jsx("option",{value:M,children:M},M))})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:N?`width: ${R}`:`height: ${Z}`})]}),n.jsx(go,{isOpen:r,onClose:()=>l(!1),position:c,title:"Sizing demo",...N?{width:R}:{height:Z},children:n.jsx("div",{className:"text-sm text-gray-600",children:"For left/right drawers, use width. For top/bottom drawers, use height."})})]}),code:`import React from "react";
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
}`})},Rj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!1),[u,p]=xe.useState(!0),[m,y]=xe.useState("Account drawer"),[x,v]=xe.useState("Close account drawer"),[b,w]=xe.useState(!0),[S,F]=xe.useState(!0);return n.jsx(X,{title:"Accessibility & labels",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:C=>d(C.target.checked)}),n.jsx("span",{children:"title"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:C=>p(C.target.checked)}),n.jsx("span",{children:"dismissible"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:b,onChange:C=>w(C.target.checked)}),n.jsx("span",{children:"closeOnOutsideClick"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:S,onChange:C=>F(C.target.checked)}),n.jsx("span",{children:"closeOnEscape"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[n.jsxs("label",{className:"flex flex-col gap-1",children:[n.jsx("span",{className:"text-sm text-gray-600",children:"ariaLabel"}),n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:m,onChange:C=>y(C.target.value),disabled:c})]}),n.jsxs("label",{className:"flex flex-col gap-1",children:[n.jsx("span",{className:"text-sm text-gray-600",children:"closeLabel"}),n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:x,onChange:C=>v(C.target.value),disabled:!u})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:c?"Title is used for aria-labelledby.":"ariaLabel is used when no title is provided."})]}),n.jsx(go,{isOpen:r,onClose:()=>l(!1),dismissible:u,closeLabel:x,closeOnOutsideClick:b,closeOnEscape:S,...c?{title:"Account"}:{ariaLabel:m},children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle title/dismissible to see how labeling and the close button behave."})})]}),code:`import React from "react";
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
}`})},Mj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0),[m,y]=xe.useState(!0),[x,v]=xe.useState(!0),[b,w]=xe.useState(80);return n.jsx(X,{title:"Options",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:S=>d(S.target.checked)}),n.jsx("span",{children:"dismissible"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:S=>p(S.target.checked)}),n.jsx("span",{children:"blur"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:m,onChange:S=>y(S.target.checked)}),n.jsx("span",{children:"closeOnOutsideClick"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:x,onChange:S=>v(S.target.checked)}),n.jsx("span",{children:"closeOnEscape"})]})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-36",children:"backgroundOpacity"}),n.jsx("input",{type:"range",min:0,max:100,value:b,onChange:S=>w(Number(S.target.value))}),n.jsx("span",{className:"w-10 text-right",children:b})]}),n.jsx("div",{className:"flex items-center gap-3",children:n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"})}),n.jsx(go,{isOpen:r,onClose:()=>l(!1),title:"Drawer options",dismissible:c,blur:u,closeOnOutsideClick:m,closeOnEscape:x,backgroundOpacity:b,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle options above and reopen to see changes."})})]}),code:`import React from "react";
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
}`})},Pj=["ease","easeIn","easeOut","easeInOut"],Dm=[{label:"Neutral",value:"var(--oks-palette-neutral-950, #000)"},{label:"Indigo",value:"rgba(79, 70, 229, 1)"},{label:"Emerald",value:"rgba(5, 150, 105, 1)"}],Lj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(.3),[u,p]=xe.useState("ease"),[m,y]=xe.useState(!0),[x,v]=xe.useState(Dm[0].value);return n.jsx(X,{title:"Motion & backdrop overrides",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-32",children:"animationDuration"}),n.jsx("input",{type:"range",min:0,max:1.2,step:.05,value:c,onChange:b=>d(Number(b.target.value))}),n.jsxs("span",{className:"w-12 text-right",children:[c.toFixed(2),"s"]})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"easing"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:u,onChange:b=>p(b.target.value),children:Pj.map(b=>n.jsx("option",{value:b,children:b},b))})]})]}),n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:m,onChange:b=>y(b.target.checked)}),n.jsx("span",{children:"backdrop.lockScroll"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"backdrop.backgroundColor"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:x,onChange:b=>v(b.target.value),children:Dm.map(b=>n.jsx("option",{value:b.value,children:b.label},b.label))})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Drawer composes Backdrop; advanced overlay behavior can be customized via the backdrop prop."})]}),n.jsx(go,{isOpen:r,onClose:()=>l(!1),title:"Motion demo",animationDuration:c,easing:u,backdrop:{lockScroll:m,backgroundColor:x},children:n.jsx("div",{className:"text-sm text-gray-600",children:"Change animation duration/easing and backdrop overrides, then reopen."})})]}),code:`import React from "react";
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
}`})},Ij=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0),[m,y]=xe.useState(60),x=xe.useRef(null),v=c&&u?x.current:void 0;return n.jsx(X,{title:"Portal, container, and zIndex",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:b=>d(b.target.checked)}),n.jsx("span",{children:"portal"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:b=>p(b.target.checked),disabled:!c}),n.jsx("span",{children:"container"})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-12",children:"zIndex"}),n.jsx("input",{type:"range",min:10,max:200,value:m,onChange:b=>y(Number(b.target.value))}),n.jsx("span",{className:"w-10 text-right",children:m})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:c?u?"Portaled into the container below.":"Portaled to document.body.":"Rendered inline (no portal)."})]}),n.jsxs("div",{ref:x,className:"relative border border-dashed border-gray-300 rounded-md p-4 h-56 overflow-hidden bg-white",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Portal container"}),n.jsx("div",{className:"text-xs text-gray-600",children:"When container is enabled, the drawer/backdrop portal into this element."})]}),n.jsx(go,{isOpen:r,onClose:()=>l(!1),title:"Portal demo",portal:c,container:v,zIndex:m,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle portal/container to see where the drawer renders."})})]}),code:`import React from "react";
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
}`})},_j=["default","primary","secondary","info","success","warning","danger","black","white"],Uj=n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[n.jsx("path",{d:"M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z",stroke:"currentColor",strokeWidth:"2"}),n.jsx("path",{d:"M12 10.5v6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M12 7.5h.01",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),Hj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState("secondary"),[u,p]=xe.useState(600),[m,y]=xe.useState(!0),[x,v]=xe.useState(!0),[b,w]=xe.useState(!1),S={color:c,colorDepth:u,icon:m?Uj:void 0,tooltip:x?{content:"Header tooltip"}:!1,...b?{title:"Overridden header title"}:{}};return n.jsx(X,{title:"Header customization (headers)",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"color"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:c,onChange:F=>d(F.target.value),children:_j.map(F=>n.jsx("option",{value:F,children:F},F))})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-20",children:"colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:u,onChange:F=>p(Number(F.target.value))}),n.jsx("span",{className:"w-12 text-right",children:u})]})]}),n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:m,onChange:F=>y(F.target.checked)}),n.jsx("span",{children:"icon"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:x,onChange:F=>v(F.target.checked)}),n.jsx("span",{children:"tooltip"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:b,onChange:F=>w(F.target.checked)}),n.jsx("span",{children:"headers.title"})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"headers lets you customize the internal PageTitle."})]}),n.jsx(go,{isOpen:r,onClose:()=>l(!1),title:"Drawer title",headers:S,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle header settings, then reopen to see changes."})})]}),code:`import React from "react";
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
}`})},Vj=()=>{const r=[{prop:"isOpen",type:"boolean",default:"—",description:"Controls whether the drawer is open."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the drawer requests to close."},{prop:"position",type:'"left" | "right" | "top" | "bottom"',default:'"right"',description:"Which side the drawer slides from."},{prop:"title",type:"ReactNode",default:"—",description:"Header title content."},{prop:"children",type:"ReactNode",default:"—",description:"Drawer body content."},{prop:"actions",type:"ReactNode",default:"—",description:"Footer actions area."},{prop:"dismissible",type:"boolean",default:"true",description:"Shows a close button and allows dismiss interactions."},{prop:"closeLabel",type:"string",default:'"Close drawer"',description:"Accessible label for the close button."},{prop:"ariaLabel",type:"string",default:'"Drawer"',description:"Accessible label for the drawer dialog region."},{prop:"width",type:'"sm" | "md" | "lg" | string | number',default:'"md" (420px)',description:"Drawer width for left/right positions."},{prop:"height",type:'"sm" | "md" | "lg" | string | number',default:'"md" (360px)',description:"Drawer height for top/bottom positions."},{prop:"closeOnOutsideClick",type:"boolean",default:"true",description:"Closes when clicking outside the drawer panel."},{prop:"closeOnEscape",type:"boolean",default:"true",description:"Closes when pressing Escape."},{prop:"portal",type:"boolean",default:"true",description:"Renders via a portal when true."},{prop:"container",type:"Element | DocumentFragment | null",default:"—",description:"Portal container when portal is enabled."},{prop:"zIndex",type:"number",default:"—",description:"Overrides the Backdrop z-index."},{prop:"blur",type:"boolean",default:"—",description:"Overrides Backdrop blur."},{prop:"backgroundOpacity",type:"number",default:"—",description:"Overrides Backdrop backgroundOpacity (0–100)."},{prop:"animationDuration",type:"number",default:"—",description:"Overrides Backdrop animationDuration (seconds)."},{prop:"easing",type:'BackdropProps["easing"]',default:"—",description:"Overrides Backdrop easing."},{prop:"initialFocusRef",type:"RefObject<HTMLElement | null>",default:"—",description:"Element to focus when the drawer opens."},{prop:"backdrop",type:"Partial<BackdropProps> (without isOpen/onClose/children)",default:"—",description:"Additional Backdrop overrides."},{prop:"headers",type:"Partial<PageTitleProps>",default:"—",description:"Header PageTitle overrides."},{prop:"className",type:"string",default:"—",description:"Class name for the drawer panel."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the drawer panel."}];return n.jsx(qt,{title:"Drawer Props",rows:r,footnote:"Drawer is controlled (isOpen/onClose). Advanced overlay behavior can be customized via the backdrop prop."})},Gj=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Aj,{}),n.jsx(zj,{}),n.jsx(Fj,{}),n.jsx(Rj,{}),n.jsx(Mj,{}),n.jsx(Lj,{}),n.jsx(Ij,{}),n.jsx(Hj,{}),n.jsx(Vj,{})]}),Yj=()=>{const[r,l]=xe.useState(!1),c=xe.useRef(null);return n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open modal"}),n.jsx(_o,{isOpen:r,onClose:()=>l(!1),title:"Modal title",initialFocusRef:c,actions:n.jsxs("div",{className:"flex justify-end gap-3",children:[n.jsx(O,{variant:"bordered",onPress:()=>l(!1),children:"Cancel"}),n.jsx(O,{color:"primary",onPress:()=>l(!1),children:"Confirm"})]}),children:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"text-sm text-gray-600",children:"Click outside or press Escape to close."}),n.jsx("input",{ref:c,className:"w-full border border-gray-300 rounded-md px-3 py-2",placeholder:"Initial focus"})]})})]}),code:n.jsx(n.Fragment,{children:`import { Modal, Button } from "oks-ui";

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
}`})})},qj=["sm","md","lg"],$j=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState("md");return n.jsx(X,{title:"Sizes",preview:n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[qj.map(u=>n.jsx(O,{color:"primary",variant:c===u?"solid":"bordered",onPress:()=>{d(u),l(!0)},children:u},u)),n.jsx(_o,{isOpen:r,onClose:()=>l(!1),title:`Size: ${c}`,size:c,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Modal width is controlled by the size prop."})})]}),code:`import React from "react";
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
}`})},Kj=["fade","zoom","slideUp","slideDown","slideLeft","slideRight"],Xj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0),[m,y]=xe.useState(!0),[x,v]=xe.useState(!0),[b,w]=xe.useState(80),[S,F]=xe.useState("slideUp");return n.jsx(X,{title:"Options",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:C=>d(C.target.checked)}),n.jsx("span",{children:"dismissible"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:C=>p(C.target.checked)}),n.jsx("span",{children:"blur"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:m,onChange:C=>y(C.target.checked)}),n.jsx("span",{children:"closeOnOutsideClick"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:x,onChange:C=>v(C.target.checked)}),n.jsx("span",{children:"closeOnEscape"})]})]}),n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsx("span",{className:"text-sm min-w-28",children:"animationType"}),Kj.map(C=>n.jsx(O,{size:"sm",color:"primary",variant:S===C?"solid":"bordered",onPress:()=>F(C),children:C},C))]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-36",children:"backgroundOpacity"}),n.jsx("input",{type:"range",min:0,max:100,value:b,onChange:C=>w(Number(C.target.value))}),n.jsx("span",{className:"w-10 text-right",children:b})]}),n.jsx("div",{className:"flex items-center gap-3",children:n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"})}),n.jsx(_o,{isOpen:r,onClose:()=>l(!1),title:"Modal options",dismissible:c,blur:u,closeOnOutsideClick:m,closeOnEscape:x,backgroundOpacity:b,animationType:S,animationDuration:.25,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle options above and reopen to see changes."})})]}),code:`import React from "react";
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
}`})},Zj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState("Close modal");return n.jsx(X,{title:"Close button label",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:m=>d(m.target.checked)}),n.jsx("span",{children:"dismissible"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"closeLabel"}),n.jsx("input",{className:"border border-gray-300 rounded-md px-2 py-1",value:u,onChange:m=>p(m.target.value),disabled:!c})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"closeLabel sets the close button aria-label."})]}),n.jsx(_o,{isOpen:r,onClose:()=>l(!1),title:"Close label demo",dismissible:c,closeLabel:u,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle dismissible to hide/show the close button."})})]}),code:`import React from "react";
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
}`})},Qj=["ease","easeIn","easeOut","easeInOut"],Tm=[{label:"Neutral",value:"var(--oks-palette-neutral-950, #000)"},{label:"Indigo",value:"rgba(79, 70, 229, 1)"},{label:"Emerald",value:"rgba(5, 150, 105, 1)"}],Wj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(.3),[u,p]=xe.useState("ease"),[m,y]=xe.useState(!0),[x,v]=xe.useState(Tm[0].value);return n.jsx(X,{title:"Motion & backdrop overrides",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-32",children:"animationDuration"}),n.jsx("input",{type:"range",min:0,max:1.2,step:.05,value:c,onChange:b=>d(Number(b.target.value))}),n.jsxs("span",{className:"w-12 text-right",children:[c.toFixed(2),"s"]})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"easing"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:u,onChange:b=>p(b.target.value),children:Qj.map(b=>n.jsx("option",{value:b,children:b},b))})]})]}),n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:m,onChange:b=>y(b.target.checked)}),n.jsx("span",{children:"backdrop.lockScroll"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"backdrop.backgroundColor"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:x,onChange:b=>v(b.target.value),children:Tm.map(b=>n.jsx("option",{value:b.value,children:b.label},b.label))})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Modal composes Backdrop; customize overlay behavior via the backdrop prop when needed."})]}),n.jsx(_o,{isOpen:r,onClose:()=>l(!1),title:"Motion demo",animationDuration:c,easing:u,backdrop:{lockScroll:m,backgroundColor:x},children:n.jsx("div",{className:"text-sm text-gray-600",children:"Change animation duration/easing and backdrop overrides, then reopen."})})]}),code:`import React from "react";
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
}`})},Jj=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState(!0),[u,p]=xe.useState(!0),[m,y]=xe.useState(60),x=xe.useRef(null),v=c&&u?x.current:void 0;return n.jsx(X,{title:"Portal, container, and zIndex",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:b=>d(b.target.checked)}),n.jsx("span",{children:"portal"})]}),n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:b=>p(b.target.checked),disabled:!c}),n.jsx("span",{children:"container"})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-12",children:"zIndex"}),n.jsx("input",{type:"range",min:10,max:200,value:m,onChange:b=>y(Number(b.target.value))}),n.jsx("span",{className:"w-10 text-right",children:m})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:c?u?"Portaled into the container below.":"Portaled to document.body.":"Rendered inline (no portal)."})]}),n.jsxs("div",{ref:x,className:"relative border border-dashed border-gray-300 rounded-md p-4 h-56 overflow-hidden bg-white",children:[n.jsx("div",{className:"text-sm font-semibold",children:"Portal container"}),n.jsx("div",{className:"text-xs text-gray-600",children:"When container is enabled, the modal/backdrop portal into this element."})]}),n.jsx(_o,{isOpen:r,onClose:()=>l(!1),title:"Portal demo",portal:c,container:v,zIndex:m,children:n.jsx("div",{className:"text-sm text-gray-600",children:"Toggle portal/container to see where the modal renders."})})]}),code:`import React from "react";
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
}`})},Nm=["default","primary","secondary","info","success","warning","danger"],e1=n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[n.jsx("path",{d:"M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z",stroke:"currentColor",strokeWidth:"2"}),n.jsx("path",{d:"M12 10.5v6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M12 7.5h.01",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),t1=()=>{const[r,l]=xe.useState(!1),[c,d]=xe.useState("secondary"),[u,p]=xe.useState(600),[m,y]=xe.useState("secondary"),[x,v]=xe.useState(200),[b,w]=xe.useState(1);return n.jsx(X,{title:"Header & divider overrides",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"headers.color"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:c,onChange:S=>d(S.target.value),children:Nm.map(S=>n.jsx("option",{value:S,children:S},S))})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-28",children:"headers.colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:u,onChange:S=>p(Number(S.target.value))}),n.jsx("span",{className:"w-12 text-right",children:u})]})]}),n.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm",children:"divider.color"}),n.jsx("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:m,onChange:S=>y(S.target.value),children:Nm.map(S=>n.jsx("option",{value:S,children:S},S))})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-28",children:"divider.colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:x,onChange:S=>v(Number(S.target.value))}),n.jsx("span",{className:"w-12 text-right",children:x})]}),n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-24",children:"thickness"}),n.jsx("input",{type:"range",min:1,max:6,step:1,value:b,onChange:S=>w(Number(S.target.value))}),n.jsx("span",{className:"w-8 text-right",children:b})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(O,{color:"primary",onPress:()=>l(!0),children:"Open"}),n.jsx("div",{className:"text-sm text-gray-600",children:"Modal header uses PageTitle and Divider internally."})]}),n.jsx(_o,{isOpen:r,onClose:()=>l(!1),title:"Modal title",headers:{color:c,colorDepth:u,icon:e1,tooltip:{content:"Header tooltip"}},divider:{color:m,colorDepth:x,thickness:b},children:n.jsx("div",{className:"text-sm text-gray-600",children:"Use headers to customize the title, and divider to customize the separator line."})})]}),code:`import React from "react";
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
}`})},n1=()=>{const r=[{prop:"isOpen",type:"boolean",default:"—",description:"Controls whether the modal is open."},{prop:"onClose",type:"() => void",default:"—",description:"Called when the modal requests to close."},{prop:"title",type:"ReactNode",default:"—",description:"Header title content."},{prop:"children",type:"ReactNode",default:"—",description:"Modal body content."},{prop:"actions",type:"ReactNode",default:"—",description:"Footer actions area."},{prop:"size",type:'"sm" | "md" | "lg" | string | number',default:'"md" (640px)',description:"Modal width."},{prop:"dismissible",type:"boolean",default:"true",description:"Shows a close button and allows dismiss interactions."},{prop:"closeLabel",type:"string",default:'"Close modal"',description:"Accessible label for the close button."},{prop:"closeOnOutsideClick",type:"boolean",default:"true",description:"Closes when clicking outside the modal panel."},{prop:"closeOnEscape",type:"boolean",default:"true",description:"Closes when pressing Escape."},{prop:"portal",type:"boolean",default:"true",description:"Renders via a portal when true."},{prop:"container",type:"Element | DocumentFragment | null",default:"—",description:"Portal container when portal is enabled."},{prop:"zIndex",type:"number",default:"—",description:"Overrides the Backdrop z-index."},{prop:"blur",type:"boolean",default:"—",description:"Overrides Backdrop blur."},{prop:"backgroundOpacity",type:"number",default:"—",description:"Overrides Backdrop backgroundOpacity (0–100)."},{prop:"animationDuration",type:"number",default:"—",description:"Overrides Backdrop animationDuration (seconds)."},{prop:"animationType",type:'BackdropProps["animationType"]',default:"—",description:"Overrides Backdrop animationType."},{prop:"easing",type:'BackdropProps["easing"]',default:"—",description:"Overrides Backdrop easing."},{prop:"initialFocusRef",type:"RefObject<HTMLElement | null>",default:"—",description:"Element to focus when the modal opens."},{prop:"backdrop",type:"Partial<BackdropProps> (without isOpen/onClose/children)",default:"—",description:"Additional Backdrop overrides."},{prop:"headers",type:"Partial<PageTitleProps>",default:"—",description:"Header PageTitle overrides."},{prop:"divider",type:"Partial<DividerProps>",default:"—",description:"Divider overrides (between header and body)."},{prop:"className",type:"string",default:"—",description:"Class name for the modal panel."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the modal panel."}];return n.jsx(qt,{title:"Modal Props",rows:r,footnote:"Modal is a controlled component: provide isOpen and onClose."})},a1=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(Yj,{}),n.jsx($j,{}),n.jsx(Xj,{}),n.jsx(Zj,{}),n.jsx(Wj,{}),n.jsx(Jj,{}),n.jsx(t1,{}),n.jsx(n1,{})]}),o1=()=>n.jsx(X,{title:"How to usage",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx($t,{title:"Dashboard",as:"h2"}),n.jsx($t,{title:"Billing",as:"h4",color:"primary",icon:n.jsx("span",{className:"text-base",children:"★"}),iconPosition:"start"}),n.jsx($t,{title:"Settings",as:"h5",color:"secondary",icon:n.jsx("span",{className:"text-base",children:"→"}),iconPosition:"end"}),n.jsx($t,{title:"Slot classNames",as:"h6",color:"info",icon:n.jsx("span",{className:"text-base",children:"i"}),classNames:{base:"gap-1",title:"uppercase tracking-wide",icon:"text-blue-600"}})]}),code:n.jsx(n.Fragment,{children:`import { PageTitle } from "oks-ui";

<PageTitle title="Dashboard" as="h2" />
<PageTitle title="Billing" as="h4" color="primary" />`})}),r1=["black","default","primary","secondary","success","warning","danger","info"],s1=()=>n.jsx(X,{title:"Colors",preview:n.jsx("div",{className:"flex flex-col gap-3",children:r1.map(r=>n.jsx($t,{as:"h5",title:`color="${r}"`,color:r},r))}),code:n.jsx(n.Fragment,{children:`<PageTitle title="Primary title" color="primary" />
<PageTitle title="Danger title" color="danger" colorDepth={600} />`})}),l1=()=>{const[r,l]=xe.useState("h3");return n.jsx(X,{title:"as vs tag",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("label",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm min-w-10",children:"h"}),n.jsxs("select",{className:"border border-gray-300 rounded-md px-2 py-1",value:r,onChange:c=>l(c.target.value),children:[n.jsx("option",{value:"h1",children:"h1"}),n.jsx("option",{value:"h2",children:"h2"}),n.jsx("option",{value:"h3",children:"h3"}),n.jsx("option",{value:"h4",children:"h4"}),n.jsx("option",{value:"h5",children:"h5"}),n.jsx("option",{value:"h6",children:"h6"})]})]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx($t,{title:`as="${r}"`,as:r}),n.jsx($t,{title:`tag="${r}"`,tag:r})]})]}),code:`import { PageTitle } from "oks-ui";

<PageTitle title="Heading" as="h3" />
<PageTitle title="Heading" tag="h3" />`})},i1=()=>{const[r,l]=xe.useState(500);return n.jsx(X,{title:"Color depth",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("label",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"min-w-20",children:"colorDepth"}),n.jsx("input",{type:"range",min:50,max:950,step:50,value:r,onChange:c=>l(Number(c.target.value))}),n.jsx("span",{className:"w-12 text-right",children:r})]}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx($t,{as:"h4",title:`primary @ ${r}`,color:"primary",colorDepth:r}),n.jsx($t,{as:"h4",title:`secondary @ ${r}`,color:"secondary",colorDepth:r})]})]}),code:`import { PageTitle } from "oks-ui";

<PageTitle title="Primary" color="primary" colorDepth={600} />
<PageTitle title="Secondary" color="secondary" colorDepth={300} />`})},c1=()=>n.jsx(X,{title:"className vs titleClassName",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx($t,{title:"Root className (layout)",as:"h4",className:"gap-1 items-end",icon:n.jsx("span",{className:"text-base",children:"★"})}),n.jsx($t,{title:"titleClassName (typography)",as:"h4",color:"secondary",icon:n.jsx("span",{className:"text-base",children:"→"}),titleClassName:"uppercase tracking-wide"}),n.jsx($t,{title:"Slot classNames",as:"h4",color:"info",icon:n.jsx("span",{className:"text-base",children:"i"}),classNames:{base:"gap-2",title:"font-semibold",icon:"text-blue-600"}})]}),code:`import { PageTitle } from "oks-ui";

<PageTitle
  title="Root layout"
  className="gap-1 items-end"
  icon={<span>★</span>}
/>

<PageTitle
  title="Title typography"
  titleClassName="uppercase tracking-wide"
/>
`}),d1=()=>n.jsx(X,{title:"Tooltip",preview:n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx($t,{title:"Hover me",as:"h4",tooltip:{message:"This tooltip comes from PageTitle.tooltip",side:"top",align:"center"}}),n.jsx($t,{title:"Derived from title",as:"h5",tooltip:{delay:0,closeDelay:0}}),n.jsx($t,{title:"Custom content",as:"h5",tooltip:{props:{delay:0,closeDelay:0},content:"This uses Avatar-style { props, content }"}}),n.jsx($t,{title:"Disabled tooltip",as:"h5",tooltip:{message:"Hidden",disabled:!0}})]}),code:n.jsx(n.Fragment,{children:`<PageTitle
  title="Hover me"
  tooltip={{ message: "Tooltip text", side: "top", align: "center" }}
/>

<PageTitle title="Derived from title" tooltip={{ delay: 0, closeDelay: 0 }} />

<PageTitle
  title="Custom content"
  tooltip={{ props: { delay: 0 }, content: "Custom tooltip" }}
/>`})}),u1=()=>n.jsx(X,{title:"Inline style",preview:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx($t,{title:"Default",as:"h4"}),n.jsx($t,{title:"Custom style",as:"h4",color:"primary",style:{opacity:.85,transform:"translateY(1px)",letterSpacing:"0.02em"}})]}),code:`import { PageTitle } from "oks-ui";

<PageTitle
  title="Custom style"
  color="primary"
  style={{ opacity: 0.85, transform: "translateY(1px)" }}
/>`}),p1=()=>{const r=[{prop:"title",type:"ReactNode",default:'"Title"',description:"Title content."},{prop:"as",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',default:"—",description:"Heading element to render."},{prop:"tag",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',default:"—",description:"Alias for as."},{prop:"color",type:'"default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger" | "black" | "white" | string',default:"—",description:"Text/icon color."},{prop:"colorDepth",type:"number",default:"500",description:"Color intensity (snapped to 50..950)."},{prop:"icon",type:"ReactNode",default:"—",description:"Optional icon."},{prop:"iconPosition",type:'"start" | "end" | "before" | "after"',default:'"start"',description:"Where the icon is placed relative to the title."},{prop:"tooltip",type:"boolean | Tooltip props | { props?: Tooltip props; content?: ReactNode }",default:"—",description:"Enables a tooltip on hover/focus."},{prop:"className",type:"string",default:"—",description:"Root class name."},{prop:"titleClassName",type:"string",default:"—",description:"Class name applied to the title text element."},{prop:"classNames",type:'Partial<Record<"base" | "title" | "icon", string>>',default:"—",description:"Slot class overrides."},{prop:"style",type:"CSSProperties",default:"—",description:"Inline styles for the root element."}];return n.jsx(qt,{title:"PageTitle Props",rows:r,footnote:"PageTitle also supports standard div props such as id, aria-*, and data-*."})},f1=()=>n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsx(o1,{}),n.jsx(s1,{}),n.jsx(i1,{}),n.jsx(l1,{}),n.jsx(c1,{}),n.jsx(d1,{}),n.jsx(u1,{}),n.jsx(p1,{})]}),h1=()=>n.jsxs("div",{className:"p-3",children:[n.jsxs(gx,{onSubmit:r=>console.log("submit",r),children:[n.jsx(M0,{type:"text",label:"Name",name:"name",placeholder:"Enter your name",validation:{rules:{required:!0,minLength:3}}}),n.jsx(O,{type:"submit",children:"Submit"})]}),n.jsxs(tu,{defaultSelectedKey:"alert",color:"primary",children:[n.jsx(ln,{title:"Alert",children:n.jsx(X0,{})},"alert"),n.jsx(ln,{title:"Avatar",children:n.jsx(py,{})},"avatar"),n.jsx(ln,{title:"Backdrop",children:n.jsx(yj,{})},"backdrop"),n.jsx(ln,{title:"Badge",children:n.jsx(Sy,{})},"badge"),n.jsx(ln,{title:"Button",children:n.jsx(Uy,{})},"button"),n.jsx(ln,{title:"Chip",children:n.jsx(ew,{})},"chip"),n.jsx(ln,{title:"Divider",children:n.jsx(Bj,{})},"divider"),n.jsx(ln,{title:"Drawer",children:n.jsx(Gj,{})},"drawer"),n.jsx(ln,{title:"Dropdown",children:n.jsx(ww,{})},"dropdown"),n.jsx(ln,{title:"Modal",children:n.jsx(a1,{})},"modal"),n.jsx(ln,{title:"PageTitle",children:n.jsx(f1,{})},"pageTitle"),n.jsx(ln,{title:"Tooltip",children:n.jsx(_w,{})},"tooltip"),n.jsx(ln,{title:"Toast",children:n.jsx(ij,{})},"toast")]})]}),m1=()=>n.jsx(Eb,{children:n.jsx(Gm,{path:"/",element:n.jsx(h1,{})})});Rv.createRoot(document.getElementById("root")).render(n.jsx(g0,{placement:"bottom-right",maxVisibleToasts:3,children:n.jsx(h.StrictMode,{children:n.jsx(ak,{children:n.jsx(m1,{})})})}));
