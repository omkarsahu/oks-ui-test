(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function d(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(f){if(f.ep)return;f.ep=!0;const m=d(f);fetch(f.href,m)}})();function xg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var jc={exports:{}},Nl={};var Jp;function yg(){if(Jp)return Nl;Jp=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function d(c,f,m){var g=null;if(m!==void 0&&(g=""+m),f.key!==void 0&&(g=""+f.key),"key"in f){m={};for(var k in f)k!=="key"&&(m[k]=f[k])}else m=f;return f=m.ref,{$$typeof:r,type:c,key:g,ref:f!==void 0?f:null,props:m}}return Nl.Fragment=i,Nl.jsx=d,Nl.jsxs=d,Nl}var Wp;function wg(){return Wp||(Wp=1,jc.exports=yg()),jc.exports}var o=wg(),Sc={exports:{}},Re={};var Pp;function kg(){if(Pp)return Re;Pp=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),z=Symbol.iterator;function L(v){return v===null||typeof v!="object"?null:(v=z&&v[z]||v["@@iterator"],typeof v=="function"?v:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,_={};function Y(v,S,V){this.props=v,this.context=S,this.refs=_,this.updater=V||R}Y.prototype.isReactComponent={},Y.prototype.setState=function(v,S){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,S,"setState")},Y.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function ee(){}ee.prototype=Y.prototype;function Z(v,S,V){this.props=v,this.context=S,this.refs=_,this.updater=V||R}var $=Z.prototype=new ee;$.constructor=Z,U($,Y.prototype),$.isPureReactComponent=!0;var J=Array.isArray;function ie(){}var W={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function I(v,S,V){var A=V.ref;return{$$typeof:r,type:v,key:S,ref:A!==void 0?A:null,props:V}}function pe(v,S){return I(v.type,S,v.props)}function we(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function de(v){var S={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(V){return S[V]})}var ve=/\/+/g;function ke(v,S){return typeof v=="object"&&v!==null&&v.key!=null?de(""+v.key):S.toString(36)}function ne(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ie,ie):(v.status="pending",v.then(function(S){v.status==="pending"&&(v.status="fulfilled",v.value=S)},function(S){v.status==="pending"&&(v.status="rejected",v.reason=S)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function C(v,S,V,A,ae){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var ce=!1;if(v===null)ce=!0;else switch(re){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(v.$$typeof){case r:case i:ce=!0;break;case T:return ce=v._init,C(ce(v._payload),S,V,A,ae)}}if(ce)return ae=ae(v),ce=A===""?"."+ke(v,0):A,J(ae)?(V="",ce!=null&&(V=ce.replace(ve,"$&/")+"/"),C(ae,S,V,"",function(ue){return ue})):ae!=null&&(we(ae)&&(ae=pe(ae,V+(ae.key==null||v&&v.key===ae.key?"":(""+ae.key).replace(ve,"$&/")+"/")+ce)),S.push(ae)),1;ce=0;var De=A===""?".":A+":";if(J(v))for(var F=0;F<v.length;F++)A=v[F],re=De+ke(A,F),ce+=C(A,S,V,re,ae);else if(F=L(v),typeof F=="function")for(v=F.call(v),F=0;!(A=v.next()).done;)A=A.value,re=De+ke(A,F++),ce+=C(A,S,V,re,ae);else if(re==="object"){if(typeof v.then=="function")return C(ne(v),S,V,A,ae);throw S=String(v),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return ce}function q(v,S,V){if(v==null)return v;var A=[],ae=0;return C(v,A,"","",function(re){return S.call(V,re,ae++)}),A}function P(v){if(v._status===-1){var S=v._result;S=S(),S.then(function(V){(v._status===0||v._status===-1)&&(v._status=1,v._result=V)},function(V){(v._status===0||v._status===-1)&&(v._status=2,v._result=V)}),v._status===-1&&(v._status=0,v._result=S)}if(v._status===1)return v._result.default;throw v._result}var ye=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},me={map:q,forEach:function(v,S,V){q(v,function(){S.apply(this,arguments)},V)},count:function(v){var S=0;return q(v,function(){S++}),S},toArray:function(v){return q(v,function(S){return S})||[]},only:function(v){if(!we(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return Re.Activity=w,Re.Children=me,Re.Component=Y,Re.Fragment=d,Re.Profiler=f,Re.PureComponent=Z,Re.StrictMode=c,Re.Suspense=b,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Re.__COMPILER_RUNTIME={__proto__:null,c:function(v){return W.H.useMemoCache(v)}},Re.cache=function(v){return function(){return v.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(v,S,V){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var A=U({},v.props),ae=v.key;if(S!=null)for(re in S.key!==void 0&&(ae=""+S.key),S)!K.call(S,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&S.ref===void 0||(A[re]=S[re]);var re=arguments.length-2;if(re===1)A.children=V;else if(1<re){for(var ce=Array(re),De=0;De<re;De++)ce[De]=arguments[De+2];A.children=ce}return I(v.type,ae,A)},Re.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},Re.createElement=function(v,S,V){var A,ae={},re=null;if(S!=null)for(A in S.key!==void 0&&(re=""+S.key),S)K.call(S,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(ae[A]=S[A]);var ce=arguments.length-2;if(ce===1)ae.children=V;else if(1<ce){for(var De=Array(ce),F=0;F<ce;F++)De[F]=arguments[F+2];ae.children=De}if(v&&v.defaultProps)for(A in ce=v.defaultProps,ce)ae[A]===void 0&&(ae[A]=ce[A]);return I(v,re,ae)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(v){return{$$typeof:k,render:v}},Re.isValidElement=we,Re.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:P}},Re.memo=function(v,S){return{$$typeof:x,type:v,compare:S===void 0?null:S}},Re.startTransition=function(v){var S=W.T,V={};W.T=V;try{var A=v(),ae=W.S;ae!==null&&ae(V,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(ie,ye)}catch(re){ye(re)}finally{S!==null&&V.types!==null&&(S.types=V.types),W.T=S}},Re.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Re.use=function(v){return W.H.use(v)},Re.useActionState=function(v,S,V){return W.H.useActionState(v,S,V)},Re.useCallback=function(v,S){return W.H.useCallback(v,S)},Re.useContext=function(v){return W.H.useContext(v)},Re.useDebugValue=function(){},Re.useDeferredValue=function(v,S){return W.H.useDeferredValue(v,S)},Re.useEffect=function(v,S){return W.H.useEffect(v,S)},Re.useEffectEvent=function(v){return W.H.useEffectEvent(v)},Re.useId=function(){return W.H.useId()},Re.useImperativeHandle=function(v,S,V){return W.H.useImperativeHandle(v,S,V)},Re.useInsertionEffect=function(v,S){return W.H.useInsertionEffect(v,S)},Re.useLayoutEffect=function(v,S){return W.H.useLayoutEffect(v,S)},Re.useMemo=function(v,S){return W.H.useMemo(v,S)},Re.useOptimistic=function(v,S){return W.H.useOptimistic(v,S)},Re.useReducer=function(v,S,V){return W.H.useReducer(v,S,V)},Re.useRef=function(v){return W.H.useRef(v)},Re.useState=function(v){return W.H.useState(v)},Re.useSyncExternalStore=function(v,S,V){return W.H.useSyncExternalStore(v,S,V)},Re.useTransition=function(){return W.H.useTransition()},Re.version="19.2.4",Re}var em;function Kc(){return em||(em=1,Sc.exports=kg()),Sc.exports}var h=Kc();const Tn=xg(h);var Tc={exports:{}},zl={},Dc={exports:{}},Cc={};var tm;function jg(){return tm||(tm=1,(function(r){function i(C,q){var P=C.length;C.push(q);e:for(;0<P;){var ye=P-1>>>1,me=C[ye];if(0<f(me,q))C[ye]=q,C[P]=me,P=ye;else break e}}function d(C){return C.length===0?null:C[0]}function c(C){if(C.length===0)return null;var q=C[0],P=C.pop();if(P!==q){C[0]=P;e:for(var ye=0,me=C.length,v=me>>>1;ye<v;){var S=2*(ye+1)-1,V=C[S],A=S+1,ae=C[A];if(0>f(V,P))A<me&&0>f(ae,V)?(C[ye]=ae,C[A]=P,ye=A):(C[ye]=V,C[S]=P,ye=S);else if(A<me&&0>f(ae,P))C[ye]=ae,C[A]=P,ye=A;else break e}}return q}function f(C,q){var P=C.sortIndex-q.sortIndex;return P!==0?P:C.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var g=Date,k=g.now();r.unstable_now=function(){return g.now()-k}}var b=[],x=[],T=1,w=null,z=3,L=!1,R=!1,U=!1,_=!1,Y=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function $(C){for(var q=d(x);q!==null;){if(q.callback===null)c(x);else if(q.startTime<=C)c(x),q.sortIndex=q.expirationTime,i(b,q);else break;q=d(x)}}function J(C){if(U=!1,$(C),!R)if(d(b)!==null)R=!0,ie||(ie=!0,de());else{var q=d(x);q!==null&&ne(J,q.startTime-C)}}var ie=!1,W=-1,K=5,I=-1;function pe(){return _?!0:!(r.unstable_now()-I<K)}function we(){if(_=!1,ie){var C=r.unstable_now();I=C;var q=!0;try{e:{R=!1,U&&(U=!1,ee(W),W=-1),L=!0;var P=z;try{t:{for($(C),w=d(b);w!==null&&!(w.expirationTime>C&&pe());){var ye=w.callback;if(typeof ye=="function"){w.callback=null,z=w.priorityLevel;var me=ye(w.expirationTime<=C);if(C=r.unstable_now(),typeof me=="function"){w.callback=me,$(C),q=!0;break t}w===d(b)&&c(b),$(C)}else c(b);w=d(b)}if(w!==null)q=!0;else{var v=d(x);v!==null&&ne(J,v.startTime-C),q=!1}}break e}finally{w=null,z=P,L=!1}q=void 0}}finally{q?de():ie=!1}}}var de;if(typeof Z=="function")de=function(){Z(we)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ke=ve.port2;ve.port1.onmessage=we,de=function(){ke.postMessage(null)}}else de=function(){Y(we,0)};function ne(C,q){W=Y(function(){C(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return z},r.unstable_next=function(C){switch(z){case 1:case 2:case 3:var q=3;break;default:q=z}var P=z;z=q;try{return C()}finally{z=P}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(C,q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=z;z=C;try{return q()}finally{z=P}},r.unstable_scheduleCallback=function(C,q,P){var ye=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ye+P:ye):P=ye,C){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=P+me,C={id:T++,callback:q,priorityLevel:C,startTime:P,expirationTime:me,sortIndex:-1},P>ye?(C.sortIndex=P,i(x,C),d(b)===null&&C===d(x)&&(U?(ee(W),W=-1):U=!0,ne(J,P-ye))):(C.sortIndex=me,i(b,C),R||L||(R=!0,ie||(ie=!0,de()))),C},r.unstable_shouldYield=pe,r.unstable_wrapCallback=function(C){var q=z;return function(){var P=z;z=q;try{return C.apply(this,arguments)}finally{z=P}}}})(Cc)),Cc}var nm;function Sg(){return nm||(nm=1,Dc.exports=jg()),Dc.exports}var Ac={exports:{}},Yt={};var am;function Tg(){if(am)return Yt;am=1;var r=Kc();function i(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)x+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(i(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(b,x,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:b,containerInfo:x,implementation:T}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Yt.createPortal=function(b,x){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return m(b,x,null,T)},Yt.flushSync=function(b){var x=g.T,T=c.p;try{if(g.T=null,c.p=2,b)return b()}finally{g.T=x,c.p=T,c.d.f()}},Yt.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(b,x))},Yt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},Yt.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var T=x.as,w=k(T,x.crossOrigin),z=typeof x.integrity=="string"?x.integrity:void 0,L=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;T==="style"?c.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:L}):T==="script"&&c.d.X(b,{crossOrigin:w,integrity:z,fetchPriority:L,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Yt.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var T=k(x.as,x.crossOrigin);c.d.M(b,{crossOrigin:T,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(b)},Yt.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var T=x.as,w=k(T,x.crossOrigin);c.d.L(b,T,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Yt.preloadModule=function(b,x){if(typeof b=="string")if(x){var T=k(x.as,x.crossOrigin);c.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:T,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(b)},Yt.requestFormReset=function(b){c.d.r(b)},Yt.unstable_batchedUpdates=function(b,x){return b(x)},Yt.useFormState=function(b,x,T){return g.H.useFormState(b,x,T)},Yt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Yt.version="19.2.4",Yt}var om;function Sm(){if(om)return Ac.exports;om=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Ac.exports=Tg(),Ac.exports}var lm;function Dg(){if(lm)return zl;lm=1;var r=Sg(),i=Kc(),d=Sm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return b(l),e;if(s===a)return b(l),t;s=s.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=s;else{for(var u=!1,p=l.child;p;){if(p===n){u=!0,n=l,a=s;break}if(p===a){u=!0,a=l,n=s;break}p=p.sibling}if(!u){for(p=s.child;p;){if(p===n){u=!0,n=s,a=l;break}if(p===a){u=!0,a=s,n=l;break}p=p.sibling}if(!u)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,z=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case Y:return"Profiler";case _:return"StrictMode";case J:return"Suspense";case ie:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case Z:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var ne=Array.isArray,C=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ye=[],me=-1;function v(e){return{current:e}}function S(e){0>me||(e.current=ye[me],ye[me]=null,me--)}function V(e,t){me++,ye[me]=e.current,e.current=t}var A=v(null),ae=v(null),re=v(null),ce=v(null);function De(e,t){switch(V(re,t),V(ae,e),V(A,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yp(t),e=wp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(A),V(A,e)}function F(){S(A),S(ae),S(re)}function ue(e){e.memoizedState!==null&&V(ce,e);var t=A.current,n=wp(t,e.type);t!==n&&(V(ae,e),V(A,n))}function Ce(e){ae.current===e&&(S(A),S(ae)),ce.current===e&&(S(ce),Cl._currentValue=P)}var Ne,He;function Ze(e){if(Ne===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ne=t&&t[1]||"",He=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+e+He}var $e=!1;function te(e,t){if(!e||$e)return"";$e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(O){var M=O}Reflect.construct(e,[],X)}else{try{X.call()}catch(O){M=O}e.call(X.prototype)}}else{try{throw Error()}catch(O){M=O}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(O){if(O&&M&&typeof O.stack=="string")return[O.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),u=s[0],p=s[1];if(u&&p){var y=u.split(`
`),N=p.split(`
`);for(l=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(a===y.length||l===N.length)for(a=y.length-1,l=N.length-1;1<=a&&0<=l&&y[a]!==N[l];)l--;for(;1<=a&&0<=l;a--,l--)if(y[a]!==N[l]){if(a!==1||l!==1)do if(a--,l--,0>l||y[a]!==N[l]){var H=`
`+y[a].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=a&&0<=l);break}}}finally{$e=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ze(n):""}function le(e,t){switch(e.tag){case 26:case 27:case 5:return Ze(e.type);case 16:return Ze("Lazy");case 13:return e.child!==t&&t!==null?Ze("Suspense Fallback"):Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return Ze("Activity");default:return""}}function Be(e){try{var t="",n=null;do t+=le(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var oe=Object.prototype.hasOwnProperty,he=r.unstable_scheduleCallback,Ee=r.unstable_cancelCallback,Je=r.unstable_shouldYield,be=r.unstable_requestPaint,ze=r.unstable_now,_e=r.unstable_getCurrentPriorityLevel,et=r.unstable_ImmediatePriority,ot=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,Ae=r.unstable_LowPriority,Le=r.unstable_IdlePriority,At=r.log,bn=r.unstable_setDisableYieldValue,xn=null,Bt=null;function Gt(e){if(typeof At=="function"&&bn(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(xn,e)}catch{}}var Et=Math.clz32?Math.clz32:gt,Ia=Math.log,fe=Math.LN2;function gt(e){return e>>>=0,e===0?32:31-(Ia(e)/fe|0)|0}var bt=256,$t=262144,yn=4194304;function Cn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $a(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,s=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~s,a!==0?l=Cn(a):(u&=p,u!==0?l=Cn(u):n||(n=p&~e,n!==0&&(l=Cn(n))))):(p=a&~s,p!==0?l=Cn(p):u!==0?l=Cn(u):n||(n=a&~e,n!==0&&(l=Cn(n)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:l}function Aa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function us(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ba(){var e=yn;return yn<<=1,(yn&62914560)===0&&(yn=4194304),e}function ds(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sh(e,t,n,a,l,s){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,y=e.expirationTimes,N=e.hiddenUpdates;for(n=u&~n;0<n;){var H=31-Et(n),X=1<<H;p[H]=0,y[H]=-1;var M=N[H];if(M!==null)for(N[H]=null,H=0;H<M.length;H++){var O=M[H];O!==null&&(O.lane&=-536870913)}n&=~X}a!==0&&tu(e,a,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(u&~t))}function tu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Et(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Et(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function au(e,t){var n=t&-t;return n=(n&42)!==0?1:fs(n),(n&(e.suspendedLanes|t))!==0?0:n}function fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ps(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ou(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Xp(e.type))}function lu(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var na=Math.random().toString(36).slice(2),Mt="__reactFiber$"+na,Vt="__reactProps$"+na,Ja="__reactContainer$"+na,ms="__reactEvents$"+na,ih="__reactListeners$"+na,ch="__reactHandles$"+na,ru="__reactResources$"+na,qo="__reactMarker$"+na;function hs(e){delete e[Mt],delete e[Vt],delete e[ms],delete e[ih],delete e[ch]}function Wa(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ja]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ap(e);e!==null;){if(n=e[Mt])return n;e=Ap(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){if(e=e[Mt]||e[Ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function eo(e){var t=e[ru];return t||(t=e[ru]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function zt(e){e[qo]=!0}var su=new Set,iu={};function Ea(e,t){to(e,t),to(e+"Capture",t)}function to(e,t){for(iu[e]=t,e=0;e<t.length;e++)su.add(t[e])}var uh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cu={},uu={};function dh(e){return oe.call(uu,e)?!0:oe.call(cu,e)?!1:uh.test(e)?uu[e]=!0:(cu[e]=!0,!1)}function Gl(e,t,n){if(dh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Yl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function On(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function ln(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fh(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){if(!e._valueTracker){var t=du(e)?"checked":"value";e._valueTracker=fh(e,t,""+e[t])}}function fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=du(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ph=/[\n"\\]/g;function rn(e){return e.replace(ph,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gs(e,t,n,a,l,s,u,p){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ln(t)):e.value!==""+ln(t)&&(e.value=""+ln(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?bs(e,u,ln(t)):n!=null?bs(e,u,ln(n)):a!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+ln(p):e.removeAttribute("name")}function pu(e,t,n,a,l,s,u,p){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){vs(e);return}n=n!=null?""+ln(n):"",t=t!=null?""+ln(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),vs(e)}function bs(e,t,n){t==="number"&&ql(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function no(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mu(e,t,n){if(t!=null&&(t=""+ln(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ln(n):""}function hu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(ne(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=ln(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),vs(e)}function ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||mh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gu(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&vu(e,l,a)}else for(var s in t)t.hasOwnProperty(s)&&vu(e,s,t[s])}function xs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(e){return vh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _n(){}var ys=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,lo=null;function bu(e){var t=Pa(e);if(t&&(e=t.stateNode)){var n=e[Vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(gs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+rn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Vt]||null;if(!l)throw Error(c(90));gs(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&fu(a)}break e;case"textarea":mu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&no(e,!!n.multiple,t,!1)}}}var ks=!1;function xu(e,t,n){if(ks)return e(t,n);ks=!0;try{var a=e(t);return a}finally{if(ks=!1,(oo!==null||lo!==null)&&(Er(),oo&&(t=oo,e=lo,lo=oo=null,bu(t),e)))for(t=0;t<e.length;t++)bu(e[t])}}function Xo(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Vt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),js=!1;if(Un)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){js=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{js=!1}var aa=null,Ss=null,Xl=null;function yu(){if(Xl)return Xl;var e,t=Ss,n=t.length,a,l="value"in aa?aa.value:aa.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(a=1;a<=u&&t[n-a]===l[s-a];a++);return Xl=l.slice(e,1<a?1-a:void 0)}function Kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ql(){return!0}function wu(){return!1}function Xt(e){function t(n,a,l,s,u){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ql:wu,this.isPropagationStopped=wu,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Xt(Na),Qo=w({},Na,{view:0,detail:0}),gh=Xt(Qo),Ts,Ds,Zo,Fl=w({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zo&&(Zo&&e.type==="mousemove"?(Ts=e.screenX-Zo.screenX,Ds=e.screenY-Zo.screenY):Ds=Ts=0,Zo=e),Ts)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),ku=Xt(Fl),bh=w({},Fl,{dataTransfer:0}),xh=Xt(bh),yh=w({},Qo,{relatedTarget:0}),Cs=Xt(yh),wh=w({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),kh=Xt(wh),jh=w({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sh=Xt(jh),Th=w({},Na,{data:0}),ju=Xt(Th),Dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ah[e])?!!t[e]:!1}function As(){return Bh}var Eh=w({},Qo,{key:function(e){if(e.key){var t=Dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nh=Xt(Eh),zh=w({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=Xt(zh),Rh=w({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),Mh=Xt(Rh),Oh=w({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),_h=Xt(Oh),Uh=w({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hh=Xt(Uh),Lh=w({},Na,{newState:0,oldState:0}),Gh=Xt(Lh),Yh=[9,13,27,32],Bs=Un&&"CompositionEvent"in window,Fo=null;Un&&"documentMode"in document&&(Fo=document.documentMode);var qh=Un&&"TextEvent"in window&&!Fo,Tu=Un&&(!Bs||Fo&&8<Fo&&11>=Fo),Du=" ",Cu=!1;function Au(e,t){switch(e){case"keyup":return Yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ro=!1;function Vh(e,t){switch(e){case"compositionend":return Bu(t);case"keypress":return t.which!==32?null:(Cu=!0,Du);case"textInput":return e=t.data,e===Du&&Cu?null:e;default:return null}}function Xh(e,t){if(ro)return e==="compositionend"||!Bs&&Au(e,t)?(e=yu(),Xl=Ss=aa=null,ro=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kh[e.type]:t==="textarea"}function Nu(e,t,n,a){oo?lo?lo.push(a):lo=[a]:oo=a,t=Ur(t,"onChange"),0<t.length&&(n=new Zl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Io=null,$o=null;function Qh(e){mp(e,0)}function Il(e){var t=Vo(e);if(fu(t))return e}function zu(e,t){if(e==="change")return t}var Ru=!1;if(Un){var Es;if(Un){var Ns="oninput"in document;if(!Ns){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Ns=typeof Mu.oninput=="function"}Es=Ns}else Es=!1;Ru=Es&&(!document.documentMode||9<document.documentMode)}function Ou(){Io&&(Io.detachEvent("onpropertychange",_u),$o=Io=null)}function _u(e){if(e.propertyName==="value"&&Il($o)){var t=[];Nu(t,$o,e,ws(e)),xu(Qh,t)}}function Zh(e,t,n){e==="focusin"?(Ou(),Io=t,$o=n,Io.attachEvent("onpropertychange",_u)):e==="focusout"&&Ou()}function Fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il($o)}function Ih(e,t){if(e==="click")return Il(t)}function $h(e,t){if(e==="input"||e==="change")return Il(t)}function Jh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:Jh;function Jo(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!oe.call(t,l)||!Jt(e[l],t[l]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Uu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ql(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ql(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Wh=Un&&"documentMode"in document&&11>=document.documentMode,so=null,Rs=null,Wo=null,Ms=!1;function Yu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ms||so==null||so!==ql(a)||(a=so,"selectionStart"in a&&zs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wo&&Jo(Wo,a)||(Wo=a,a=Ur(Rs,"onSelect"),0<a.length&&(t=new Zl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=so)))}function za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var io={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Os={},qu={};Un&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Ra(e){if(Os[e])return Os[e];if(!io[e])return e;var t=io[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qu)return Os[e]=t[n];return e}var Vu=Ra("animationend"),Xu=Ra("animationiteration"),Ku=Ra("animationstart"),Ph=Ra("transitionrun"),ev=Ra("transitionstart"),tv=Ra("transitioncancel"),Qu=Ra("transitionend"),Zu=new Map,_s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_s.push("scrollEnd");function wn(e,t){Zu.set(e,t),Ea(t,[e])}var $l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sn=[],co=0,Us=0;function Jl(){for(var e=co,t=Us=co=0;t<e;){var n=sn[t];sn[t++]=null;var a=sn[t];sn[t++]=null;var l=sn[t];sn[t++]=null;var s=sn[t];if(sn[t++]=null,a!==null&&l!==null){var u=a.pending;u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l}s!==0&&Fu(n,l,s)}}function Wl(e,t,n,a){sn[co++]=e,sn[co++]=t,sn[co++]=n,sn[co++]=a,Us|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Hs(e,t,n,a){return Wl(e,t,n,a),Pl(e)}function Ma(e,t){return Wl(e,null,null,t),Pl(e)}function Fu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-Et(n),e=s.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),s):null}function Pl(e){if(50<yl)throw yl=0,Zi=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var uo={};function nv(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,a){return new nv(e,t,n,a)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hn(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Iu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function er(e,t,n,a,l,s){var u=0;if(a=e,typeof e=="function")Ls(e)&&(u=1);else if(typeof e=="string")u=sg(e,n,A.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=Wt(31,n,t,l),e.elementType=I,e.lanes=s,e;case U:return Oa(n.children,l,s,t);case _:u=8,l|=24;break;case Y:return e=Wt(12,n,t,l|2),e.elementType=Y,e.lanes=s,e;case J:return e=Wt(13,n,t,l),e.elementType=J,e.lanes=s,e;case ie:return e=Wt(19,n,t,l),e.elementType=ie,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:u=10;break e;case ee:u=9;break e;case $:u=11;break e;case W:u=14;break e;case K:u=16,a=null;break e}u=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Wt(u,n,t,l),t.elementType=e,t.type=a,t.lanes=s,t}function Oa(e,t,n,a){return e=Wt(7,e,a,t),e.lanes=n,e}function Gs(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function $u(e){var t=Wt(18,null,null,0);return t.stateNode=e,t}function Ys(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ju=new WeakMap;function cn(e,t){if(typeof e=="object"&&e!==null){var n=Ju.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Be(t)},Ju.set(e,t),t)}return{value:e,source:t,stack:Be(t)}}var fo=[],po=0,tr=null,Po=0,un=[],dn=0,oa=null,An=1,Bn="";function Ln(e,t){fo[po++]=Po,fo[po++]=tr,tr=e,Po=t}function Wu(e,t,n){un[dn++]=An,un[dn++]=Bn,un[dn++]=oa,oa=e;var a=An;e=Bn;var l=32-Et(a)-1;a&=~(1<<l),n+=1;var s=32-Et(t)+l;if(30<s){var u=l-l%5;s=(a&(1<<u)-1).toString(32),a>>=u,l-=u,An=1<<32-Et(t)+l|n<<l|a,Bn=s+e}else An=1<<s|n<<l|a,Bn=e}function qs(e){e.return!==null&&(Ln(e,1),Wu(e,1,0))}function Vs(e){for(;e===tr;)tr=fo[--po],fo[po]=null,Po=fo[--po],fo[po]=null;for(;e===oa;)oa=un[--dn],un[dn]=null,Bn=un[--dn],un[dn]=null,An=un[--dn],un[dn]=null}function Pu(e,t){un[dn++]=An,un[dn++]=Bn,un[dn++]=oa,An=t.id,Bn=t.overflow,oa=e}var Ot=null,pt=null,Qe=!1,la=null,fn=!1,Xs=Error(c(519));function ra(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(cn(t,e)),Xs}function ed(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Mt]=e,t[Vt]=a,n){case"dialog":Ye("cancel",t),Ye("close",t);break;case"iframe":case"object":case"embed":Ye("load",t);break;case"video":case"audio":for(n=0;n<kl.length;n++)Ye(kl[n],t);break;case"source":Ye("error",t);break;case"img":case"image":case"link":Ye("error",t),Ye("load",t);break;case"details":Ye("toggle",t);break;case"input":Ye("invalid",t),pu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ye("invalid",t);break;case"textarea":Ye("invalid",t),hu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||bp(t.textContent,n)?(a.popover!=null&&(Ye("beforetoggle",t),Ye("toggle",t)),a.onScroll!=null&&Ye("scroll",t),a.onScrollEnd!=null&&Ye("scrollend",t),a.onClick!=null&&(t.onclick=_n),t=!0):t=!1,t||ra(e,!0)}function td(e){for(Ot=e.return;Ot;)switch(Ot.tag){case 5:case 31:case 13:fn=!1;return;case 27:case 3:fn=!0;return;default:Ot=Ot.return}}function mo(e){if(e!==Ot)return!1;if(!Qe)return td(e),Qe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ic(e.type,e.memoizedProps)),n=!n),n&&pt&&ra(e),td(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));pt=Cp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));pt=Cp(e)}else t===27?(t=pt,ya(e.type)?(e=pc,pc=null,pt=e):pt=t):pt=Ot?mn(e.stateNode.nextSibling):null;return!0}function _a(){pt=Ot=null,Qe=!1}function Ks(){var e=la;return e!==null&&(Ft===null?Ft=e:Ft.push.apply(Ft,e),la=null),e}function el(e){la===null?la=[e]:la.push(e)}var Qs=v(null),Ua=null,Gn=null;function sa(e,t,n){V(Qs,t._currentValue),t._currentValue=n}function Yn(e){e._currentValue=Qs.current,S(Qs)}function Zs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Fs(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var u=l.child;s=s.firstContext;e:for(;s!==null;){var p=s;s=l;for(var y=0;y<t.length;y++)if(p.context===t[y]){s.lanes|=n,p=s.alternate,p!==null&&(p.lanes|=n),Zs(s.return,n,e),a||(u=null);break e}s=p.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=n,s=u.alternate,s!==null&&(s.lanes|=n),Zs(u,n,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ho(e,t,n,a){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var p=l.type;Jt(l.pendingProps.value,u.value)||(e!==null?e.push(p):e=[p])}}else if(l===ce.current){if(u=l.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Cl):e=[Cl])}l=l.return}e!==null&&Fs(t,e,n,a),t.flags|=262144}function nr(e){for(e=e.firstContext;e!==null;){if(!Jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ua=e,Gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _t(e){return nd(Ua,e)}function ar(e,t){return Ua===null&&Ha(e),nd(e,t)}function nd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gn===null){if(e===null)throw Error(c(308));Gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gn=Gn.next=t;return n}var av=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ov=r.unstable_scheduleCallback,lv=r.unstable_NormalPriority,St={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Is(){return{controller:new av,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&ov(lv,function(){e.controller.abort()})}var nl=null,$s=0,vo=0,go=null;function rv(e,t){if(nl===null){var n=nl=[];$s=0,vo=Pi(),go={status:"pending",value:void 0,then:function(a){n.push(a)}}}return $s++,t.then(ad,ad),t}function ad(){if(--$s===0&&nl!==null){go!==null&&(go.status="fulfilled");var e=nl;nl=null,vo=0,go=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sv(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var od=C.S;C.S=function(e,t){qf=ze(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&rv(e,t),od!==null&&od(e,t)};var La=v(null);function Js(){var e=La.current;return e!==null?e:ut.pooledCache}function or(e,t){t===null?V(La,La.current):V(La,t.pool)}function ld(){var e=Js();return e===null?null:{parent:St._currentValue,pool:e}}var bo=Error(c(460)),Ws=Error(c(474)),lr=Error(c(542)),rr={then:function(){}};function rd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_n,_n),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cd(e),e;default:if(typeof t.status=="string")t.then(_n,_n);else{if(e=ut,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cd(e),e}throw Ya=t,bo}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ya=n,bo):n}}var Ya=null;function id(){if(Ya===null)throw Error(c(459));var e=Ya;return Ya=null,e}function cd(e){if(e===bo||e===lr)throw Error(c(483))}var xo=null,al=0;function sr(e){var t=al;return al+=1,xo===null&&(xo=[]),sd(xo,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ir(e,t){throw t.$$typeof===z?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ud(e){function t(D,j){if(e){var E=D.deletions;E===null?(D.deletions=[j],D.flags|=16):E.push(j)}}function n(D,j){if(!e)return null;for(;j!==null;)t(D,j),j=j.sibling;return null}function a(D){for(var j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function l(D,j){return D=Hn(D,j),D.index=0,D.sibling=null,D}function s(D,j,E){return D.index=E,e?(E=D.alternate,E!==null?(E=E.index,E<j?(D.flags|=67108866,j):E):(D.flags|=67108866,j)):(D.flags|=1048576,j)}function u(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function p(D,j,E,G){return j===null||j.tag!==6?(j=Gs(E,D.mode,G),j.return=D,j):(j=l(j,E),j.return=D,j)}function y(D,j,E,G){var je=E.type;return je===U?H(D,j,E.props.children,G,E.key):j!==null&&(j.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===K&&Ga(je)===j.type)?(j=l(j,E.props),ol(j,E),j.return=D,j):(j=er(E.type,E.key,E.props,null,D.mode,G),ol(j,E),j.return=D,j)}function N(D,j,E,G){return j===null||j.tag!==4||j.stateNode.containerInfo!==E.containerInfo||j.stateNode.implementation!==E.implementation?(j=Ys(E,D.mode,G),j.return=D,j):(j=l(j,E.children||[]),j.return=D,j)}function H(D,j,E,G,je){return j===null||j.tag!==7?(j=Oa(E,D.mode,G,je),j.return=D,j):(j=l(j,E),j.return=D,j)}function X(D,j,E){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Gs(""+j,D.mode,E),j.return=D,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case L:return E=er(j.type,j.key,j.props,null,D.mode,E),ol(E,j),E.return=D,E;case R:return j=Ys(j,D.mode,E),j.return=D,j;case K:return j=Ga(j),X(D,j,E)}if(ne(j)||de(j))return j=Oa(j,D.mode,E,null),j.return=D,j;if(typeof j.then=="function")return X(D,sr(j),E);if(j.$$typeof===Z)return X(D,ar(D,j),E);ir(D,j)}return null}function M(D,j,E,G){var je=j!==null?j.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return je!==null?null:p(D,j,""+E,G);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case L:return E.key===je?y(D,j,E,G):null;case R:return E.key===je?N(D,j,E,G):null;case K:return E=Ga(E),M(D,j,E,G)}if(ne(E)||de(E))return je!==null?null:H(D,j,E,G,null);if(typeof E.then=="function")return M(D,j,sr(E),G);if(E.$$typeof===Z)return M(D,j,ar(D,E),G);ir(D,E)}return null}function O(D,j,E,G,je){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return D=D.get(E)||null,p(j,D,""+G,je);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return D=D.get(G.key===null?E:G.key)||null,y(j,D,G,je);case R:return D=D.get(G.key===null?E:G.key)||null,N(j,D,G,je);case K:return G=Ga(G),O(D,j,E,G,je)}if(ne(G)||de(G))return D=D.get(E)||null,H(j,D,G,je,null);if(typeof G.then=="function")return O(D,j,E,sr(G),je);if(G.$$typeof===Z)return O(D,j,E,ar(j,G),je);ir(j,G)}return null}function ge(D,j,E,G){for(var je=null,Fe=null,xe=j,Ue=j=0,Ke=null;xe!==null&&Ue<E.length;Ue++){xe.index>Ue?(Ke=xe,xe=null):Ke=xe.sibling;var Ie=M(D,xe,E[Ue],G);if(Ie===null){xe===null&&(xe=Ke);break}e&&xe&&Ie.alternate===null&&t(D,xe),j=s(Ie,j,Ue),Fe===null?je=Ie:Fe.sibling=Ie,Fe=Ie,xe=Ke}if(Ue===E.length)return n(D,xe),Qe&&Ln(D,Ue),je;if(xe===null){for(;Ue<E.length;Ue++)xe=X(D,E[Ue],G),xe!==null&&(j=s(xe,j,Ue),Fe===null?je=xe:Fe.sibling=xe,Fe=xe);return Qe&&Ln(D,Ue),je}for(xe=a(xe);Ue<E.length;Ue++)Ke=O(xe,D,Ue,E[Ue],G),Ke!==null&&(e&&Ke.alternate!==null&&xe.delete(Ke.key===null?Ue:Ke.key),j=s(Ke,j,Ue),Fe===null?je=Ke:Fe.sibling=Ke,Fe=Ke);return e&&xe.forEach(function(Ta){return t(D,Ta)}),Qe&&Ln(D,Ue),je}function Te(D,j,E,G){if(E==null)throw Error(c(151));for(var je=null,Fe=null,xe=j,Ue=j=0,Ke=null,Ie=E.next();xe!==null&&!Ie.done;Ue++,Ie=E.next()){xe.index>Ue?(Ke=xe,xe=null):Ke=xe.sibling;var Ta=M(D,xe,Ie.value,G);if(Ta===null){xe===null&&(xe=Ke);break}e&&xe&&Ta.alternate===null&&t(D,xe),j=s(Ta,j,Ue),Fe===null?je=Ta:Fe.sibling=Ta,Fe=Ta,xe=Ke}if(Ie.done)return n(D,xe),Qe&&Ln(D,Ue),je;if(xe===null){for(;!Ie.done;Ue++,Ie=E.next())Ie=X(D,Ie.value,G),Ie!==null&&(j=s(Ie,j,Ue),Fe===null?je=Ie:Fe.sibling=Ie,Fe=Ie);return Qe&&Ln(D,Ue),je}for(xe=a(xe);!Ie.done;Ue++,Ie=E.next())Ie=O(xe,D,Ue,Ie.value,G),Ie!==null&&(e&&Ie.alternate!==null&&xe.delete(Ie.key===null?Ue:Ie.key),j=s(Ie,j,Ue),Fe===null?je=Ie:Fe.sibling=Ie,Fe=Ie);return e&&xe.forEach(function(bg){return t(D,bg)}),Qe&&Ln(D,Ue),je}function st(D,j,E,G){if(typeof E=="object"&&E!==null&&E.type===U&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case L:e:{for(var je=E.key;j!==null;){if(j.key===je){if(je=E.type,je===U){if(j.tag===7){n(D,j.sibling),G=l(j,E.props.children),G.return=D,D=G;break e}}else if(j.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===K&&Ga(je)===j.type){n(D,j.sibling),G=l(j,E.props),ol(G,E),G.return=D,D=G;break e}n(D,j);break}else t(D,j);j=j.sibling}E.type===U?(G=Oa(E.props.children,D.mode,G,E.key),G.return=D,D=G):(G=er(E.type,E.key,E.props,null,D.mode,G),ol(G,E),G.return=D,D=G)}return u(D);case R:e:{for(je=E.key;j!==null;){if(j.key===je)if(j.tag===4&&j.stateNode.containerInfo===E.containerInfo&&j.stateNode.implementation===E.implementation){n(D,j.sibling),G=l(j,E.children||[]),G.return=D,D=G;break e}else{n(D,j);break}else t(D,j);j=j.sibling}G=Ys(E,D.mode,G),G.return=D,D=G}return u(D);case K:return E=Ga(E),st(D,j,E,G)}if(ne(E))return ge(D,j,E,G);if(de(E)){if(je=de(E),typeof je!="function")throw Error(c(150));return E=je.call(E),Te(D,j,E,G)}if(typeof E.then=="function")return st(D,j,sr(E),G);if(E.$$typeof===Z)return st(D,j,ar(D,E),G);ir(D,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,j!==null&&j.tag===6?(n(D,j.sibling),G=l(j,E),G.return=D,D=G):(n(D,j),G=Gs(E,D.mode,G),G.return=D,D=G),u(D)):n(D,j)}return function(D,j,E,G){try{al=0;var je=st(D,j,E,G);return xo=null,je}catch(xe){if(xe===bo||xe===lr)throw xe;var Fe=Wt(29,xe,null,D.mode);return Fe.lanes=G,Fe.return=D,Fe}}}var qa=ud(!0),dd=ud(!1),ia=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ei(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(We&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Pl(e),Fu(e,null,n),t}return Wl(e,a,t,n),Pl(e)}function ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,nu(e,n)}}function ti(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=u:s=s.next=u,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ni=!1;function rl(){if(ni){var e=go;if(e!==null)throw e}}function sl(e,t,n,a){ni=!1;var l=e.updateQueue;ia=!1;var s=l.firstBaseUpdate,u=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var y=p,N=y.next;y.next=null,u===null?s=N:u.next=N,u=y;var H=e.alternate;H!==null&&(H=H.updateQueue,p=H.lastBaseUpdate,p!==u&&(p===null?H.firstBaseUpdate=N:p.next=N,H.lastBaseUpdate=y))}if(s!==null){var X=l.baseState;u=0,H=N=y=null,p=s;do{var M=p.lane&-536870913,O=M!==p.lane;if(O?(Xe&M)===M:(a&M)===M){M!==0&&M===vo&&(ni=!0),H!==null&&(H=H.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ge=e,Te=p;M=t;var st=n;switch(Te.tag){case 1:if(ge=Te.payload,typeof ge=="function"){X=ge.call(st,X,M);break e}X=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Te.payload,M=typeof ge=="function"?ge.call(st,X,M):ge,M==null)break e;X=w({},X,M);break e;case 2:ia=!0}}M=p.callback,M!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[M]:O.push(M))}else O={lane:M,tag:p.tag,payload:p.payload,callback:p.callback,next:null},H===null?(N=H=O,y=X):H=H.next=O,u|=M;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;O=p,p=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);H===null&&(y=X),l.baseState=y,l.firstBaseUpdate=N,l.lastBaseUpdate=H,s===null&&(l.shared.lanes=0),ha|=u,e.lanes=u,e.memoizedState=X}}function fd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function pd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)fd(n[e],t)}var yo=v(null),cr=v(0);function md(e,t){e=$n,V(cr,e),V(yo,t),$n=e|t.baseLanes}function ai(){V(cr,$n),V(yo,yo.current)}function oi(){$n=cr.current,S(yo),S(cr)}var Pt=v(null),pn=null;function da(e){var t=e.alternate;V(kt,kt.current&1),V(Pt,e),pn===null&&(t===null||yo.current!==null||t.memoizedState!==null)&&(pn=e)}function li(e){V(kt,kt.current),V(Pt,e),pn===null&&(pn=e)}function hd(e){e.tag===22?(V(kt,kt.current),V(Pt,e),pn===null&&(pn=e)):fa()}function fa(){V(kt,kt.current),V(Pt,Pt.current)}function en(e){S(Pt),pn===e&&(pn=null),S(kt)}var kt=v(0);function ur(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||dc(n)||fc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qn=0,Oe=null,lt=null,Tt=null,dr=!1,wo=!1,Va=!1,fr=0,il=0,ko=null,iv=0;function yt(){throw Error(c(321))}function ri(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function si(e,t,n,a,l,s){return qn=s,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Wd:ki,Va=!1,s=n(a,l),Va=!1,wo&&(s=gd(t,n,a,l)),vd(e),s}function vd(e){C.H=dl;var t=lt!==null&&lt.next!==null;if(qn=0,Tt=lt=Oe=null,dr=!1,il=0,ko=null,t)throw Error(c(300));e===null||Dt||(e=e.dependencies,e!==null&&nr(e)&&(Dt=!0))}function gd(e,t,n,a){Oe=e;var l=0;do{if(wo&&(ko=null),il=0,wo=!1,25<=l)throw Error(c(301));if(l+=1,Tt=lt=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}C.H=Pd,s=t(n,a)}while(wo);return s}function cv(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?cl(t):t,e=e.useState()[0],(lt!==null?lt.memoizedState:null)!==e&&(Oe.flags|=1024),t}function ii(){var e=fr!==0;return fr=0,e}function ci(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ui(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}qn=0,Tt=lt=Oe=null,wo=!1,il=fr=0,ko=null}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Oe.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function jt(){if(lt===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var t=Tt===null?Oe.memoizedState:Tt.next;if(t!==null)Tt=t,lt=e;else{if(e===null)throw Oe.alternate===null?Error(c(467)):Error(c(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},Tt===null?Oe.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}function pr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(e){var t=il;return il+=1,ko===null&&(ko=[]),e=sd(ko,e,t),t=Oe,(Tt===null?t.memoizedState:Tt.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Wd:ki),e}function mr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cl(e);if(e.$$typeof===Z)return _t(e)}throw Error(c(438,String(e)))}function di(e){var t=null,n=Oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=pr(),Oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=pe;return t.index++,n}function Vn(e,t){return typeof t=="function"?t(e):t}function hr(e){var t=jt();return fi(t,lt,e)}function fi(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,s=a.pending;if(s!==null){if(l!==null){var u=l.next;l.next=s.next,s.next=u}t.baseQueue=l=s,a.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var p=u=null,y=null,N=t,H=!1;do{var X=N.lane&-536870913;if(X!==N.lane?(Xe&X)===X:(qn&X)===X){var M=N.revertLane;if(M===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),X===vo&&(H=!0);else if((qn&M)===M){N=N.next,M===vo&&(H=!0);continue}else X={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},y===null?(p=y=X,u=s):y=y.next=X,Oe.lanes|=M,ha|=M;X=N.action,Va&&n(s,X),s=N.hasEagerState?N.eagerState:n(s,X)}else M={lane:X,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},y===null?(p=y=M,u=s):y=y.next=M,Oe.lanes|=X,ha|=X;N=N.next}while(N!==null&&N!==t);if(y===null?u=s:y.next=p,!Jt(s,e.memoizedState)&&(Dt=!0,H&&(n=go,n!==null)))throw n;e.memoizedState=s,e.baseState=u,e.baseQueue=y,a.lastRenderedState=s}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function pi(e){var t=jt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do s=e(s,u.action),u=u.next;while(u!==l);Jt(s,t.memoizedState)||(Dt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function bd(e,t,n){var a=Oe,l=jt(),s=Qe;if(s){if(n===void 0)throw Error(c(407));n=n()}else n=t();var u=!Jt((lt||l).memoizedState,n);if(u&&(l.memoizedState=n,Dt=!0),l=l.queue,vi(wd.bind(null,a,l,e),[e]),l.getSnapshot!==t||u||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,jo(9,{destroy:void 0},yd.bind(null,a,l,n,t),null),ut===null)throw Error(c(349));s||(qn&127)!==0||xd(a,t,n)}return n}function xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t=pr(),Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yd(e,t,n,a){t.value=n,t.getSnapshot=a,kd(t)&&jd(e)}function wd(e,t,n){return n(function(){kd(t)&&jd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jt(e,n)}catch{return!0}}function jd(e){var t=Ma(e,2);t!==null&&It(t,e,2)}function mi(e){var t=qt();if(typeof e=="function"){var n=e;if(e=n(),Va){Gt(!0);try{n()}finally{Gt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t}function Sd(e,t,n,a){return e.baseState=n,fi(e,lt,typeof a=="function"?a:Vn)}function uv(e,t,n,a,l){if(br(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){s.listeners.push(u)}};C.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,Td(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Td(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var s=C.T,u={};C.T=u;try{var p=n(l,a),y=C.S;y!==null&&y(u,p),Dd(e,t,p)}catch(N){hi(e,t,N)}finally{s!==null&&u.types!==null&&(s.types=u.types),C.T=s}}else try{s=n(l,a),Dd(e,t,s)}catch(N){hi(e,t,N)}}function Dd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Cd(e,t,a)},function(a){return hi(e,t,a)}):Cd(e,t,n)}function Cd(e,t,n){t.status="fulfilled",t.value=n,Ad(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Td(e,n)))}function hi(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Ad(t),t=t.next;while(t!==a)}e.action=null}function Ad(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bd(e,t){return t}function Ed(e,t){if(Qe){var n=ut.formState;if(n!==null){e:{var a=Oe;if(Qe){if(pt){t:{for(var l=pt,s=fn;l.nodeType!==8;){if(!s){l=null;break t}if(l=mn(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){pt=mn(l.nextSibling),a=l.data==="F!";break e}}ra(a)}a=!1}a&&(t=n[0])}}return n=qt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bd,lastRenderedState:t},n.queue=a,n=Id.bind(null,Oe,a),a.dispatch=n,a=mi(!1),s=wi.bind(null,Oe,!1,a.queue),a=qt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=uv.bind(null,Oe,l,s,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Nd(e){var t=jt();return zd(t,lt,e)}function zd(e,t,n){if(t=fi(e,t,Bd)[0],e=hr(Vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=cl(t)}catch(u){throw u===bo?lr:u}else a=t;t=jt();var l=t.queue,s=l.dispatch;return n!==t.memoizedState&&(Oe.flags|=2048,jo(9,{destroy:void 0},dv.bind(null,l,n),null)),[a,s,e]}function dv(e,t){e.action=t}function Rd(e){var t=jt(),n=lt;if(n!==null)return zd(t,n,e);jt(),t=t.memoizedState,n=jt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function jo(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Oe.updateQueue,t===null&&(t=pr(),Oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Md(){return jt().memoizedState}function vr(e,t,n,a){var l=qt();Oe.flags|=e,l.memoizedState=jo(1|t,{destroy:void 0},n,a===void 0?null:a)}function gr(e,t,n,a){var l=jt();a=a===void 0?null:a;var s=l.memoizedState.inst;lt!==null&&a!==null&&ri(a,lt.memoizedState.deps)?l.memoizedState=jo(t,s,n,a):(Oe.flags|=e,l.memoizedState=jo(1|t,s,n,a))}function Od(e,t){vr(8390656,8,e,t)}function vi(e,t){gr(2048,8,e,t)}function fv(e){Oe.flags|=4;var t=Oe.updateQueue;if(t===null)t=pr(),Oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _d(e){var t=jt().memoizedState;return fv({ref:t,nextImpl:e}),function(){if((We&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Ud(e,t){return gr(4,2,e,t)}function Hd(e,t){return gr(4,4,e,t)}function Ld(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,n){n=n!=null?n.concat([e]):null,gr(4,4,Ld.bind(null,t,e),n)}function gi(){}function Yd(e,t){var n=jt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ri(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function qd(e,t){var n=jt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ri(t,a[1]))return a[0];if(a=e(),Va){Gt(!0);try{e()}finally{Gt(!1)}}return n.memoizedState=[a,t],a}function bi(e,t,n){return n===void 0||(qn&1073741824)!==0&&(Xe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Xf(),Oe.lanes|=e,ha|=e,n)}function Vd(e,t,n,a){return Jt(n,t)?n:yo.current!==null?(e=bi(e,n,a),Jt(e,t)||(Dt=!0),e):(qn&42)===0||(qn&1073741824)!==0&&(Xe&261930)===0?(Dt=!0,e.memoizedState=n):(e=Xf(),Oe.lanes|=e,ha|=e,t)}function Xd(e,t,n,a,l){var s=q.p;q.p=s!==0&&8>s?s:8;var u=C.T,p={};C.T=p,wi(e,!1,t,n);try{var y=l(),N=C.S;if(N!==null&&N(p,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var H=sv(y,a);ul(e,t,H,an(e))}else ul(e,t,a,an(e))}catch(X){ul(e,t,{then:function(){},status:"rejected",reason:X},an())}finally{q.p=s,u!==null&&p.types!==null&&(u.types=p.types),C.T=u}}function pv(){}function xi(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=Kd(e).queue;Xd(e,l,t,P,n===null?pv:function(){return Qd(e),n(a)})}function Kd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qd(e){var t=Kd(e);t.next===null&&(t=e.alternate.memoizedState),ul(e,t.next.queue,{},an())}function yi(){return _t(Cl)}function Zd(){return jt().memoizedState}function Fd(){return jt().memoizedState}function mv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=an();e=ca(n);var a=ua(t,e,n);a!==null&&(It(a,t,n),ll(a,t,n)),t={cache:Is()},e.payload=t;return}t=t.return}}function hv(e,t,n){var a=an();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},br(e)?$d(t,n):(n=Hs(e,t,n,a),n!==null&&(It(n,e,a),Jd(n,t,a)))}function Id(e,t,n){var a=an();ul(e,t,n,a)}function ul(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(br(e))$d(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,p=s(u,n);if(l.hasEagerState=!0,l.eagerState=p,Jt(p,u))return Wl(e,t,l,0),ut===null&&Jl(),!1}catch{}if(n=Hs(e,t,l,a),n!==null)return It(n,e,a),Jd(n,t,a),!0}return!1}function wi(e,t,n,a){if(a={lane:2,revertLane:Pi(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},br(e)){if(t)throw Error(c(479))}else t=Hs(e,n,a,2),t!==null&&It(t,e,2)}function br(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function $d(e,t){wo=dr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,nu(e,n)}}var dl={readContext:_t,use:mr,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt};dl.useEffectEvent=yt;var Wd={readContext:_t,use:mr,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Od,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,vr(4194308,4,Ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vr(4194308,4,e,t)},useInsertionEffect:function(e,t){vr(4,2,e,t)},useMemo:function(e,t){var n=qt();t=t===void 0?null:t;var a=e();if(Va){Gt(!0);try{e()}finally{Gt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=qt();if(n!==void 0){var l=n(t);if(Va){Gt(!0);try{n(t)}finally{Gt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=hv.bind(null,Oe,e),[a.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:function(e){e=mi(e);var t=e.queue,n=Id.bind(null,Oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gi,useDeferredValue:function(e,t){var n=qt();return bi(n,e,t)},useTransition:function(){var e=mi(!1);return e=Xd.bind(null,Oe,e.queue,!0,!1),qt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Oe,l=qt();if(Qe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ut===null)throw Error(c(349));(Xe&127)!==0||xd(a,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,Od(wd.bind(null,a,s,e),[e]),a.flags|=2048,jo(9,{destroy:void 0},yd.bind(null,a,s,n,t),null),n},useId:function(){var e=qt(),t=ut.identifierPrefix;if(Qe){var n=Bn,a=An;n=(a&~(1<<32-Et(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=iv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:yi,useFormState:Ed,useActionState:Ed,useOptimistic:function(e){var t=qt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wi.bind(null,Oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:di,useCacheRefresh:function(){return qt().memoizedState=mv.bind(null,Oe)},useEffectEvent:function(e){var t=qt(),n={impl:e};return t.memoizedState=n,function(){if((We&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},ki={readContext:_t,use:mr,useCallback:Yd,useContext:_t,useEffect:vi,useImperativeHandle:Gd,useInsertionEffect:Ud,useLayoutEffect:Hd,useMemo:qd,useReducer:hr,useRef:Md,useState:function(){return hr(Vn)},useDebugValue:gi,useDeferredValue:function(e,t){var n=jt();return Vd(n,lt.memoizedState,e,t)},useTransition:function(){var e=hr(Vn)[0],t=jt().memoizedState;return[typeof e=="boolean"?e:cl(e),t]},useSyncExternalStore:bd,useId:Zd,useHostTransitionStatus:yi,useFormState:Nd,useActionState:Nd,useOptimistic:function(e,t){var n=jt();return Sd(n,lt,e,t)},useMemoCache:di,useCacheRefresh:Fd};ki.useEffectEvent=_d;var Pd={readContext:_t,use:mr,useCallback:Yd,useContext:_t,useEffect:vi,useImperativeHandle:Gd,useInsertionEffect:Ud,useLayoutEffect:Hd,useMemo:qd,useReducer:pi,useRef:Md,useState:function(){return pi(Vn)},useDebugValue:gi,useDeferredValue:function(e,t){var n=jt();return lt===null?bi(n,e,t):Vd(n,lt.memoizedState,e,t)},useTransition:function(){var e=pi(Vn)[0],t=jt().memoizedState;return[typeof e=="boolean"?e:cl(e),t]},useSyncExternalStore:bd,useId:Zd,useHostTransitionStatus:yi,useFormState:Rd,useActionState:Rd,useOptimistic:function(e,t){var n=jt();return lt!==null?Sd(n,lt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:di,useCacheRefresh:Fd};Pd.useEffectEvent=_d;function ji(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=an(),l=ca(a);l.payload=t,n!=null&&(l.callback=n),t=ua(e,l,a),t!==null&&(It(t,e,a),ll(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=an(),l=ca(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ua(e,l,a),t!==null&&(It(t,e,a),ll(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=an(),a=ca(n);a.tag=2,t!=null&&(a.callback=t),t=ua(e,a,n),t!==null&&(It(t,e,n),ll(t,e,n))}};function ef(e,t,n,a,l,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,u):t.prototype&&t.prototype.isPureReactComponent?!Jo(n,a)||!Jo(l,s):!0}function tf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function Xa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function nf(e){$l(e)}function af(e){console.error(e)}function of(e){$l(e)}function xr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function lf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ti(e,t,n){return n=ca(n),n.tag=3,n.payload={element:null},n.callback=function(){xr(e,t)},n}function rf(e){return e=ca(e),e.tag=3,e}function sf(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=a.value;e.payload=function(){return l(s)},e.callback=function(){lf(t,n,a)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){lf(t,n,a),typeof l!="function"&&(va===null?va=new Set([this]):va.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function vv(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ho(t,n,l,!0),n=Pt.current,n!==null){switch(n.tag){case 31:case 13:return pn===null?Nr():n.alternate===null&&wt===0&&(wt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),$i(e,a,l)),!1;case 22:return n.flags|=65536,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),$i(e,a,l)),!1}throw Error(c(435,n.tag))}return $i(e,a,l),Nr(),!1}if(Qe)return t=Pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Xs&&(e=Error(c(422),{cause:a}),el(cn(e,n)))):(a!==Xs&&(t=Error(c(423),{cause:a}),el(cn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=cn(a,n),l=Ti(e.stateNode,a,l),ti(e,l),wt!==4&&(wt=2)),!1;var s=Error(c(520),{cause:a});if(s=cn(s,n),xl===null?xl=[s]:xl.push(s),wt!==4&&(wt=2),t===null)return!0;a=cn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ti(n.stateNode,a,e),ti(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(va===null||!va.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=rf(l),sf(l,e,n,a),ti(n,l),!1}n=n.return}while(n!==null);return!1}var Di=Error(c(461)),Dt=!1;function Ut(e,t,n,a){t.child=e===null?dd(t,null,n,a):qa(t,e.child,n,a)}function cf(e,t,n,a,l){n=n.render;var s=t.ref;if("ref"in a){var u={};for(var p in a)p!=="ref"&&(u[p]=a[p])}else u=a;return Ha(t),a=si(e,t,n,u,s,l),p=ii(),e!==null&&!Dt?(ci(e,t,l),Xn(e,t,l)):(Qe&&p&&qs(t),t.flags|=1,Ut(e,t,a,l),t.child)}function uf(e,t,n,a,l){if(e===null){var s=n.type;return typeof s=="function"&&!Ls(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,df(e,t,s,a,l)):(e=er(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Mi(e,l)){var u=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(u,a)&&e.ref===t.ref)return Xn(e,t,l)}return t.flags|=1,e=Hn(s,a),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,n,a,l){if(e!==null){var s=e.memoizedProps;if(Jo(s,a)&&e.ref===t.ref)if(Dt=!1,t.pendingProps=a=s,Mi(e,l))(e.flags&131072)!==0&&(Dt=!0);else return t.lanes=e.lanes,Xn(e,t,l)}return Ci(e,t,n,a,l)}function ff(e,t,n,a){var l=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~s}else a=0,t.child=null;return pf(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&or(t,s!==null?s.cachePool:null),s!==null?md(t,s):ai(),hd(t);else return a=t.lanes=536870912,pf(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(or(t,s.cachePool),md(t,s),fa(),t.memoizedState=null):(e!==null&&or(t,null),ai(),fa());return Ut(e,t,l,n),t.child}function fl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pf(e,t,n,a,l){var s=Js();return s=s===null?null:{parent:St._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&or(t,null),ai(),hd(t),e!==null&&ho(e,t,a,!0),t.childLanes=l,null}function yr(e,t){return t=kr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mf(e,t,n){return qa(t,e.child,null,n),e=yr(t,t.pendingProps),e.flags|=2,en(t),t.memoizedState=null,e}function gv(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Qe){if(a.mode==="hidden")return e=yr(t,a),t.lanes=536870912,fl(null,e);if(li(t),(e=pt)?(e=Dp(e,fn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:An,overflow:Bn}:null,retryLane:536870912,hydrationErrors:null},n=$u(e),n.return=t,t.child=n,Ot=t,pt=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return yr(t,a)}var s=e.memoizedState;if(s!==null){var u=s.dehydrated;if(li(t),l)if(t.flags&256)t.flags&=-257,t=mf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Dt||ho(e,t,n,!1),l=(n&e.childLanes)!==0,Dt||l){if(a=ut,a!==null&&(u=au(a,n),u!==0&&u!==s.retryLane))throw s.retryLane=u,Ma(e,u),It(a,e,u),Di;Nr(),t=mf(e,t,n)}else e=s.treeContext,pt=mn(u.nextSibling),Ot=t,Qe=!0,la=null,fn=!1,e!==null&&Pu(t,e),t=yr(t,a),t.flags|=4096;return t}return e=Hn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ci(e,t,n,a,l){return Ha(t),n=si(e,t,n,a,void 0,l),a=ii(),e!==null&&!Dt?(ci(e,t,l),Xn(e,t,l)):(Qe&&a&&qs(t),t.flags|=1,Ut(e,t,n,l),t.child)}function hf(e,t,n,a,l,s){return Ha(t),t.updateQueue=null,n=gd(t,a,n,l),vd(e),a=ii(),e!==null&&!Dt?(ci(e,t,s),Xn(e,t,s)):(Qe&&a&&qs(t),t.flags|=1,Ut(e,t,n,s),t.child)}function vf(e,t,n,a,l){if(Ha(t),t.stateNode===null){var s=uo,u=n.contextType;typeof u=="object"&&u!==null&&(s=_t(u)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Si,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},Ps(t),u=n.contextType,s.context=typeof u=="object"&&u!==null?_t(u):uo,s.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(ji(t,n,u,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(u=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),u!==s.state&&Si.enqueueReplaceState(s,s.state,null),sl(t,a,s,l),rl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var p=t.memoizedProps,y=Xa(n,p);s.props=y;var N=s.context,H=n.contextType;u=uo,typeof H=="object"&&H!==null&&(u=_t(H));var X=n.getDerivedStateFromProps;H=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,H||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p||N!==u)&&tf(t,s,a,u),ia=!1;var M=t.memoizedState;s.state=M,sl(t,a,s,l),rl(),N=t.memoizedState,p||M!==N||ia?(typeof X=="function"&&(ji(t,n,X,a),N=t.memoizedState),(y=ia||ef(t,n,y,a,M,N,u))?(H||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=N),s.props=a,s.state=N,s.context=u,a=y):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,ei(e,t),u=t.memoizedProps,H=Xa(n,u),s.props=H,X=t.pendingProps,M=s.context,N=n.contextType,y=uo,typeof N=="object"&&N!==null&&(y=_t(N)),p=n.getDerivedStateFromProps,(N=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==X||M!==y)&&tf(t,s,a,y),ia=!1,M=t.memoizedState,s.state=M,sl(t,a,s,l),rl();var O=t.memoizedState;u!==X||M!==O||ia||e!==null&&e.dependencies!==null&&nr(e.dependencies)?(typeof p=="function"&&(ji(t,n,p,a),O=t.memoizedState),(H=ia||ef(t,n,H,a,M,O,y)||e!==null&&e.dependencies!==null&&nr(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,O,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,O,y)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),s.props=a,s.state=O,s.context=y,a=H):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,wr(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=qa(t,e.child,null,l),t.child=qa(t,null,n,l)):Ut(e,t,n,l),t.memoizedState=s.state,e=t.child):e=Xn(e,t,l),e}function gf(e,t,n,a){return _a(),t.flags|=256,Ut(e,t,n,a),t.child}var Ai={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bi(e){return{baseLanes:e,cachePool:ld()}}function Ei(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=nn),e}function bf(e,t,n){var a=t.pendingProps,l=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(kt.current&2)!==0),u&&(l=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Qe){if(l?da(t):fa(),(e=pt)?(e=Dp(e,fn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:An,overflow:Bn}:null,retryLane:536870912,hydrationErrors:null},n=$u(e),n.return=t,t.child=n,Ot=t,pt=null)):e=null,e===null)throw ra(t);return fc(e)?t.lanes=32:t.lanes=536870912,null}var p=a.children;return a=a.fallback,l?(fa(),l=t.mode,p=kr({mode:"hidden",children:p},l),a=Oa(a,l,n,null),p.return=t,a.return=t,p.sibling=a,t.child=p,a=t.child,a.memoizedState=Bi(n),a.childLanes=Ei(e,u,n),t.memoizedState=Ai,fl(null,a)):(da(t),Ni(t,p))}var y=e.memoizedState;if(y!==null&&(p=y.dehydrated,p!==null)){if(s)t.flags&256?(da(t),t.flags&=-257,t=zi(e,t,n)):t.memoizedState!==null?(fa(),t.child=e.child,t.flags|=128,t=null):(fa(),p=a.fallback,l=t.mode,a=kr({mode:"visible",children:a.children},l),p=Oa(p,l,n,null),p.flags|=2,a.return=t,p.return=t,a.sibling=p,t.child=a,qa(t,e.child,null,n),a=t.child,a.memoizedState=Bi(n),a.childLanes=Ei(e,u,n),t.memoizedState=Ai,t=fl(null,a));else if(da(t),fc(p)){if(u=p.nextSibling&&p.nextSibling.dataset,u)var N=u.dgst;u=N,a=Error(c(419)),a.stack="",a.digest=u,el({value:a,source:null,stack:null}),t=zi(e,t,n)}else if(Dt||ho(e,t,n,!1),u=(n&e.childLanes)!==0,Dt||u){if(u=ut,u!==null&&(a=au(u,n),a!==0&&a!==y.retryLane))throw y.retryLane=a,Ma(e,a),It(u,e,a),Di;dc(p)||Nr(),t=zi(e,t,n)}else dc(p)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,pt=mn(p.nextSibling),Ot=t,Qe=!0,la=null,fn=!1,e!==null&&Pu(t,e),t=Ni(t,a.children),t.flags|=4096);return t}return l?(fa(),p=a.fallback,l=t.mode,y=e.child,N=y.sibling,a=Hn(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,N!==null?p=Hn(N,p):(p=Oa(p,l,n,null),p.flags|=2),p.return=t,a.return=t,a.sibling=p,t.child=a,fl(null,a),a=t.child,p=e.child.memoizedState,p===null?p=Bi(n):(l=p.cachePool,l!==null?(y=St._currentValue,l=l.parent!==y?{parent:y,pool:y}:l):l=ld(),p={baseLanes:p.baseLanes|n,cachePool:l}),a.memoizedState=p,a.childLanes=Ei(e,u,n),t.memoizedState=Ai,fl(e.child,a)):(da(t),n=e.child,e=n.sibling,n=Hn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function Ni(e,t){return t=kr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function kr(e,t){return e=Wt(22,e,null,t),e.lanes=0,e}function zi(e,t,n){return qa(t,e.child,null,n),e=Ni(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Zs(e.return,t,n)}function Ri(e,t,n,a,l,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=l,u.treeForkCount=s)}function yf(e,t,n){var a=t.pendingProps,l=a.revealOrder,s=a.tail;a=a.children;var u=kt.current,p=(u&2)!==0;if(p?(u=u&1|2,t.flags|=128):u&=1,V(kt,u),Ut(e,t,a,n),a=Qe?Po:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,n,t);else if(e.tag===19)xf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ur(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ri(t,!1,l,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ur(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ri(t,!0,n,null,s,a);break;case"together":Ri(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ho(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mi(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nr(e)))}function bv(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),sa(t,St,e.memoizedState.cache),_a();break;case 27:case 5:ue(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,li(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(da(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bf(e,t,n):(da(t),e=Xn(e,t,n),e!==null?e.sibling:null);da(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ho(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return yf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(kt,kt.current),a)break;return null;case 22:return t.lanes=0,ff(e,t,n,t.pendingProps);case 24:sa(t,St,e.memoizedState.cache)}return Xn(e,t,n)}function wf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Dt=!0;else{if(!Mi(e,n)&&(t.flags&128)===0)return Dt=!1,bv(e,t,n);Dt=(e.flags&131072)!==0}else Dt=!1,Qe&&(t.flags&1048576)!==0&&Wu(t,Po,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e=="function")Ls(e)?(a=Xa(e,a),t.tag=1,t=vf(null,t,e,a,n)):(t.tag=0,t=Ci(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===$){t.tag=11,t=cf(null,t,e,a,n);break e}else if(l===W){t.tag=14,t=uf(null,t,e,a,n);break e}}throw t=ke(e)||e,Error(c(306,t,""))}}return t;case 0:return Ci(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Xa(a,t.pendingProps),vf(e,t,a,l,n);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var s=t.memoizedState;l=s.element,ei(e,t),sl(t,a,null,n);var u=t.memoizedState;if(a=u.cache,sa(t,St,a),a!==s.cache&&Fs(t,[St],n,!0),rl(),a=u.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=gf(e,t,a,n);break e}else if(a!==l){l=cn(Error(c(424)),t),el(l),t=gf(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,pt=mn(e.firstChild),Ot=t,Qe=!0,la=null,fn=!0,n=dd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_a(),a===l){t=Xn(e,t,n);break e}Ut(e,t,a,n)}t=t.child}return t;case 26:return wr(e,t),e===null?(n=zp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Qe||(n=t.type,e=t.pendingProps,a=Hr(re.current).createElement(n),a[Mt]=t,a[Vt]=e,Ht(a,n,e),zt(a),t.stateNode=a):t.memoizedState=zp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ue(t),e===null&&Qe&&(a=t.stateNode=Bp(t.type,t.pendingProps,re.current),Ot=t,fn=!0,l=pt,ya(t.type)?(pc=l,pt=mn(a.firstChild)):pt=l),Ut(e,t,t.pendingProps.children,n),wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Qe&&((l=a=pt)&&(a=Fv(a,t.type,t.pendingProps,fn),a!==null?(t.stateNode=a,Ot=t,pt=mn(a.firstChild),fn=!1,l=!0):l=!1),l||ra(t)),ue(t),l=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,a=s.children,ic(l,s)?a=null:u!==null&&ic(l,u)&&(t.flags|=32),t.memoizedState!==null&&(l=si(e,t,cv,null,null,n),Cl._currentValue=l),wr(e,t),Ut(e,t,a,n),t.child;case 6:return e===null&&Qe&&((e=n=pt)&&(n=Iv(n,t.pendingProps,fn),n!==null?(t.stateNode=n,Ot=t,pt=null,e=!0):e=!1),e||ra(t)),null;case 13:return bf(e,t,n);case 4:return De(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=qa(t,null,a,n):Ut(e,t,a,n),t.child;case 11:return cf(e,t,t.type,t.pendingProps,n);case 7:return Ut(e,t,t.pendingProps,n),t.child;case 8:return Ut(e,t,t.pendingProps.children,n),t.child;case 12:return Ut(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,sa(t,t.type,a.value),Ut(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Ha(t),l=_t(l),a=a(l),t.flags|=1,Ut(e,t,a,n),t.child;case 14:return uf(e,t,t.type,t.pendingProps,n);case 15:return df(e,t,t.type,t.pendingProps,n);case 19:return yf(e,t,n);case 31:return gv(e,t,n);case 22:return ff(e,t,n,t.pendingProps);case 24:return Ha(t),a=_t(St),e===null?(l=Js(),l===null&&(l=ut,s=Is(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),t.memoizedState={parent:a,cache:l},Ps(t),sa(t,St,l)):((e.lanes&n)!==0&&(ei(e,t),sl(t,null,null,n),rl()),l=e.memoizedState,s=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),sa(t,St,a)):(a=s.cache,sa(t,St,a),a!==l.cache&&Fs(t,[St],n,!0))),Ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Kn(e){e.flags|=4}function Oi(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Ff())e.flags|=8192;else throw Ya=rr,Ws}else e.flags&=-16777217}function kf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Up(t))if(Ff())e.flags|=8192;else throw Ya=rr,Ws}function jr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ba():536870912,e.lanes|=t,Co|=t)}function pl(e,t){if(!Qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function xv(e,t,n){var a=t.pendingProps;switch(Vs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return mt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yn(St),F(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(mo(t)?Kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ks())),mt(t),null;case 26:var l=t.type,s=t.memoizedState;return e===null?(Kn(t),s!==null?(mt(t),kf(t,s)):(mt(t),Oi(t,l,null,a,n))):s?s!==e.memoizedState?(Kn(t),mt(t),kf(t,s)):(mt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Kn(t),mt(t),Oi(t,l,e,a,n)),null;case 27:if(Ce(t),n=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Kn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return mt(t),null}e=A.current,mo(t)?ed(t):(e=Bp(l,a,n),t.stateNode=e,Kn(t))}return mt(t),null;case 5:if(Ce(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Kn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return mt(t),null}if(s=A.current,mo(t))ed(t);else{var u=Hr(re.current);switch(s){case 1:s=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=u.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}s[Mt]=t,s[Vt]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=s;e:switch(Ht(s,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Kn(t)}}return mt(t),Oi(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Kn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,mo(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Ot,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||bp(e.nodeValue,n)),e||ra(t,!0)}else e=Hr(e).createTextNode(a),e[Mt]=t,t.stateNode=e}return mt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=mo(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Mt]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;mt(t),e=!1}else n=Ks(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(en(t),t):(en(t),null);if((t.flags&128)!==0)throw Error(c(558))}return mt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=mo(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Mt]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;mt(t),l=!1}else l=Ks(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(en(t),t):(en(t),null)}return en(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jr(t,t.updateQueue),mt(t),null);case 4:return F(),e===null&&ac(t.stateNode.containerInfo),mt(t),null;case 10:return Yn(t.type),mt(t),null;case 19:if(S(kt),a=t.memoizedState,a===null)return mt(t),null;if(l=(t.flags&128)!==0,s=a.rendering,s===null)if(l)pl(a,!1);else{if(wt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ur(e),s!==null){for(t.flags|=128,pl(a,!1),e=s.updateQueue,t.updateQueue=e,jr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Iu(n,e),n=n.sibling;return V(kt,kt.current&1|2),Qe&&Ln(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ze()>Ar&&(t.flags|=128,l=!0,pl(a,!1),t.lanes=4194304)}else{if(!l)if(e=ur(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,jr(t,e),pl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Qe)return mt(t),null}else 2*ze()-a.renderingStartTime>Ar&&n!==536870912&&(t.flags|=128,l=!0,pl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ze(),e.sibling=null,n=kt.current,V(kt,l?n&1|2:n&1),Qe&&Ln(t,a.treeForkCount),e):(mt(t),null);case 22:case 23:return en(t),oi(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),n=t.updateQueue,n!==null&&jr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&S(La),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yn(St),mt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function yv(e,t){switch(Vs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(St),F(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(en(t),t.alternate===null)throw Error(c(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(en(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(kt),null;case 4:return F(),null;case 10:return Yn(t.type),null;case 22:case 23:return en(t),oi(),e!==null&&S(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yn(St),null;case 25:return null;default:return null}}function jf(e,t){switch(Vs(t),t.tag){case 3:Yn(St),F();break;case 26:case 27:case 5:Ce(t);break;case 4:F();break;case 31:t.memoizedState!==null&&en(t);break;case 13:en(t);break;case 19:S(kt);break;case 10:Yn(t.type);break;case 22:case 23:en(t),oi(),e!==null&&S(La);break;case 24:Yn(St)}}function ml(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var s=n.create,u=n.inst;a=s(),u.destroy=a}n=n.next}while(n!==l)}}catch(p){nt(t,t.return,p)}}function pa(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){var u=a.inst,p=u.destroy;if(p!==void 0){u.destroy=void 0,l=t;var y=n,N=p;try{N()}catch(H){nt(l,y,H)}}}a=a.next}while(a!==s)}}catch(H){nt(t,t.return,H)}}function Sf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{pd(t,n)}catch(a){nt(e,e.return,a)}}}function Tf(e,t,n){n.props=Xa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){nt(e,t,a)}}function hl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){nt(e,t,l)}}function En(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){nt(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){nt(e,t,l)}else n.current=null}function Df(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){nt(e,e.return,l)}}function _i(e,t,n){try{var a=e.stateNode;qv(a,e.type,n,t),a[Vt]=t}catch(l){nt(e,e.return,l)}}function Cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function Ui(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_n));else if(a!==4&&(a===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Sr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Sr(e,t,n),e=e.sibling;e!==null;)Sr(e,t,n),e=e.sibling}function Af(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ht(t,a,n),t[Mt]=e,t[Vt]=n}catch(s){nt(e,e.return,s)}}var Qn=!1,Ct=!1,Li=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function wv(e,t){if(e=e.containerInfo,rc=Kr,e=Gu(e),zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var u=0,p=-1,y=-1,N=0,H=0,X=e,M=null;t:for(;;){for(var O;X!==n||l!==0&&X.nodeType!==3||(p=u+l),X!==s||a!==0&&X.nodeType!==3||(y=u+a),X.nodeType===3&&(u+=X.nodeValue.length),(O=X.firstChild)!==null;)M=X,X=O;for(;;){if(X===e)break t;if(M===n&&++N===l&&(p=u),M===s&&++H===a&&(y=u),(O=X.nextSibling)!==null)break;X=M,M=X.parentNode}X=O}n=p===-1||y===-1?null:{start:p,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:e,selectionRange:n},Kr=!1,Rt=t;Rt!==null;)if(t=Rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Rt=e;else for(;Rt!==null;){switch(t=Rt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,l=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var ge=Xa(n.type,l);e=a.getSnapshotBeforeUpdate(ge,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(Te){nt(n,n.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)uc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Rt=e;break}Rt=t.return}}function Ef(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Fn(e,n),a&4&&ml(5,n);break;case 1:if(Fn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(u){nt(n,n.return,u)}else{var l=Xa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){nt(n,n.return,u)}}a&64&&Sf(n),a&512&&hl(n,n.return);break;case 3:if(Fn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{pd(e,t)}catch(u){nt(n,n.return,u)}}break;case 27:t===null&&a&4&&Af(n);case 26:case 5:Fn(e,n),t===null&&a&4&&Df(n),a&512&&hl(n,n.return);break;case 12:Fn(e,n);break;case 31:Fn(e,n),a&4&&Rf(e,n);break;case 13:Fn(e,n),a&4&&Mf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ev.bind(null,n),$v(e,n))));break;case 22:if(a=n.memoizedState!==null||Qn,!a){t=t!==null&&t.memoizedState!==null||Ct,l=Qn;var s=Ct;Qn=a,(Ct=t)&&!s?In(e,n,(n.subtreeFlags&8772)!==0):Fn(e,n),Qn=l,Ct=s}break;case 30:break;default:Fn(e,n)}}function Nf(e){var t=e.alternate;t!==null&&(e.alternate=null,Nf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vt=null,Kt=!1;function Zn(e,t,n){for(n=n.child;n!==null;)zf(e,t,n),n=n.sibling}function zf(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(xn,n)}catch{}switch(n.tag){case 26:Ct||En(n,t),Zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ct||En(n,t);var a=vt,l=Kt;ya(n.type)&&(vt=n.stateNode,Kt=!1),Zn(e,t,n),Sl(n.stateNode),vt=a,Kt=l;break;case 5:Ct||En(n,t);case 6:if(a=vt,l=Kt,vt=null,Zn(e,t,n),vt=a,Kt=l,vt!==null)if(Kt)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(n.stateNode)}catch(s){nt(n,t,s)}else try{vt.removeChild(n.stateNode)}catch(s){nt(n,t,s)}break;case 18:vt!==null&&(Kt?(e=vt,Sp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Oo(e)):Sp(vt,n.stateNode));break;case 4:a=vt,l=Kt,vt=n.stateNode.containerInfo,Kt=!0,Zn(e,t,n),vt=a,Kt=l;break;case 0:case 11:case 14:case 15:pa(2,n,t),Ct||pa(4,n,t),Zn(e,t,n);break;case 1:Ct||(En(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Tf(n,t,a)),Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:Ct=(a=Ct)||n.memoizedState!==null,Zn(e,t,n),Ct=a;break;default:Zn(e,t,n)}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oo(e)}catch(n){nt(t,t.return,n)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oo(e)}catch(n){nt(t,t.return,n)}}function kv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bf),t;default:throw Error(c(435,e.tag))}}function Tr(e,t){var n=kv(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Nv.bind(null,e,a);a.then(l,l)}})}function Qt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],s=e,u=t,p=u;e:for(;p!==null;){switch(p.tag){case 27:if(ya(p.type)){vt=p.stateNode,Kt=!1;break e}break;case 5:vt=p.stateNode,Kt=!1;break e;case 3:case 4:vt=p.stateNode.containerInfo,Kt=!0;break e}p=p.return}if(vt===null)throw Error(c(160));zf(s,u,l),vt=null,Kt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Of(t,e),t=t.sibling}var kn=null;function Of(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qt(t,e),Zt(e),a&4&&(pa(3,e,e.return),ml(3,e),pa(5,e,e.return));break;case 1:Qt(t,e),Zt(e),a&512&&(Ct||n===null||En(n,n.return)),a&64&&Qn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=kn;if(Qt(t,e),Zt(e),a&512&&(Ct||n===null||En(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":s=l.getElementsByTagName("title")[0],(!s||s[qo]||s[Mt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(a),l.head.insertBefore(s,l.querySelector("head > title"))),Ht(s,a,n),s[Mt]=e,zt(s),a=s;break e;case"link":var u=Op("link","href",l).get(a+(n.href||""));if(u){for(var p=0;p<u.length;p++)if(s=u[p],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(p,1);break t}}s=l.createElement(a),Ht(s,a,n),l.head.appendChild(s);break;case"meta":if(u=Op("meta","content",l).get(a+(n.content||""))){for(p=0;p<u.length;p++)if(s=u[p],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(p,1);break t}}s=l.createElement(a),Ht(s,a,n),l.head.appendChild(s);break;default:throw Error(c(468,a))}s[Mt]=e,zt(s),a=s}e.stateNode=a}else _p(l,e.type,e.stateNode);else e.stateNode=Mp(l,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?_p(l,e.type,e.stateNode):Mp(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&_i(e,e.memoizedProps,n.memoizedProps)}break;case 27:Qt(t,e),Zt(e),a&512&&(Ct||n===null||En(n,n.return)),n!==null&&a&4&&_i(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Qt(t,e),Zt(e),a&512&&(Ct||n===null||En(n,n.return)),e.flags&32){l=e.stateNode;try{ao(l,"")}catch(ge){nt(e,e.return,ge)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,_i(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Li=!0);break;case 6:if(Qt(t,e),Zt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ge){nt(e,e.return,ge)}}break;case 3:if(Yr=null,l=kn,kn=Lr(t.containerInfo),Qt(t,e),kn=l,Zt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(ge){nt(e,e.return,ge)}Li&&(Li=!1,_f(e));break;case 4:a=kn,kn=Lr(e.stateNode.containerInfo),Qt(t,e),Zt(e),kn=a;break;case 12:Qt(t,e),Zt(e);break;case 31:Qt(t,e),Zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tr(e,a)));break;case 13:Qt(t,e),Zt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Cr=ze()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tr(e,a)));break;case 22:l=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,N=Qn,H=Ct;if(Qn=N||l,Ct=H||y,Qt(t,e),Ct=H,Qn=N,Zt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||y||Qn||Ct||Ka(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(s=y.stateNode,l)u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{p=y.stateNode;var X=y.memoizedProps.style,M=X!=null&&X.hasOwnProperty("display")?X.display:null;p.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(ge){nt(y,y.return,ge)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=l?"":y.memoizedProps}catch(ge){nt(y,y.return,ge)}}}else if(t.tag===18){if(n===null){y=t;try{var O=y.stateNode;l?Tp(O,!0):Tp(y.stateNode,!1)}catch(ge){nt(y,y.return,ge)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Tr(e,n))));break;case 19:Qt(t,e),Zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tr(e,a)));break;case 30:break;case 21:break;default:Qt(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Cf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,s=Ui(e);Sr(e,s,l);break;case 5:var u=n.stateNode;n.flags&32&&(ao(u,""),n.flags&=-33);var p=Ui(e);Sr(e,p,u);break;case 3:case 4:var y=n.stateNode.containerInfo,N=Ui(e);Hi(e,N,y);break;default:throw Error(c(161))}}catch(H){nt(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_f(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ef(e,t.alternate,t),t=t.sibling}function Ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:pa(4,t,t.return),Ka(t);break;case 1:En(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Tf(t,t.return,n),Ka(t);break;case 27:Sl(t.stateNode);case 26:case 5:En(t,t.return),Ka(t);break;case 22:t.memoizedState===null&&Ka(t);break;case 30:Ka(t);break;default:Ka(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,s=t,u=s.flags;switch(s.tag){case 0:case 11:case 15:In(l,s,n),ml(4,s);break;case 1:if(In(l,s,n),a=s,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){nt(a,a.return,N)}if(a=s,l=a.updateQueue,l!==null){var p=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)fd(y[l],p)}catch(N){nt(a,a.return,N)}}n&&u&64&&Sf(s),hl(s,s.return);break;case 27:Af(s);case 26:case 5:In(l,s,n),n&&a===null&&u&4&&Df(s),hl(s,s.return);break;case 12:In(l,s,n);break;case 31:In(l,s,n),n&&u&4&&Rf(l,s);break;case 13:In(l,s,n),n&&u&4&&Mf(l,s);break;case 22:s.memoizedState===null&&In(l,s,n),hl(s,s.return);break;case 30:break;default:In(l,s,n)}t=t.sibling}}function Gi(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&tl(n))}function Yi(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e))}function jn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(e,t,n,a),t=t.sibling}function Uf(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:jn(e,t,n,a),l&2048&&ml(9,t);break;case 1:jn(e,t,n,a);break;case 3:jn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e)));break;case 12:if(l&2048){jn(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,u=s.id,p=s.onPostCommit;typeof p=="function"&&p(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){nt(t,t.return,y)}}else jn(e,t,n,a);break;case 31:jn(e,t,n,a);break;case 13:jn(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,u=t.alternate,t.memoizedState!==null?s._visibility&2?jn(e,t,n,a):vl(e,t):s._visibility&2?jn(e,t,n,a):(s._visibility|=2,So(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Gi(u,t);break;case 24:jn(e,t,n,a),l&2048&&Yi(t.alternate,t);break;default:jn(e,t,n,a)}}function So(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,u=t,p=n,y=a,N=u.flags;switch(u.tag){case 0:case 11:case 15:So(s,u,p,y,l),ml(8,u);break;case 23:break;case 22:var H=u.stateNode;u.memoizedState!==null?H._visibility&2?So(s,u,p,y,l):vl(s,u):(H._visibility|=2,So(s,u,p,y,l)),l&&N&2048&&Gi(u.alternate,u);break;case 24:So(s,u,p,y,l),l&&N&2048&&Yi(u.alternate,u);break;default:So(s,u,p,y,l)}t=t.sibling}}function vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:vl(n,a),l&2048&&Gi(a.alternate,a);break;case 24:vl(n,a),l&2048&&Yi(a.alternate,a);break;default:vl(n,a)}t=t.sibling}}var gl=8192;function To(e,t,n){if(e.subtreeFlags&gl)for(e=e.child;e!==null;)Hf(e,t,n),e=e.sibling}function Hf(e,t,n){switch(e.tag){case 26:To(e,t,n),e.flags&gl&&e.memoizedState!==null&&ig(n,kn,e.memoizedState,e.memoizedProps);break;case 5:To(e,t,n);break;case 3:case 4:var a=kn;kn=Lr(e.stateNode.containerInfo),To(e,t,n),kn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=gl,gl=16777216,To(e,t,n),gl=a):To(e,t,n));break;default:To(e,t,n)}}function Lf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Rt=a,Yf(a,e)}Lf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gf(e),e=e.sibling}function Gf(e){switch(e.tag){case 0:case 11:case 15:bl(e),e.flags&2048&&pa(9,e,e.return);break;case 3:bl(e);break;case 12:bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dr(e)):bl(e);break;default:bl(e)}}function Dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Rt=a,Yf(a,e)}Lf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:pa(8,t,t.return),Dr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Dr(t));break;default:Dr(t)}e=e.sibling}}function Yf(e,t){for(;Rt!==null;){var n=Rt;switch(n.tag){case 0:case 11:case 15:pa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:tl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Rt=a;else e:for(n=e;Rt!==null;){a=Rt;var l=a.sibling,s=a.return;if(Nf(a),a===n){Rt=null;break e}if(l!==null){l.return=s,Rt=l;break e}Rt=s}}}var jv={getCacheForType:function(e){var t=_t(St),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _t(St).controller.signal}},Sv=typeof WeakMap=="function"?WeakMap:Map,We=0,ut=null,Ge=null,Xe=0,tt=0,tn=null,ma=!1,Do=!1,qi=!1,$n=0,wt=0,ha=0,Qa=0,Vi=0,nn=0,Co=0,xl=null,Ft=null,Xi=!1,Cr=0,qf=0,Ar=1/0,Br=null,va=null,Nt=0,ga=null,Ao=null,Jn=0,Ki=0,Qi=null,Vf=null,yl=0,Zi=null;function an(){return(We&2)!==0&&Xe!==0?Xe&-Xe:C.T!==null?Pi():ou()}function Xf(){if(nn===0)if((Xe&536870912)===0||Qe){var e=$t;$t<<=1,($t&3932160)===0&&($t=262144),nn=e}else nn=536870912;return e=Pt.current,e!==null&&(e.flags|=32),nn}function It(e,t,n){(e===ut&&(tt===2||tt===9)||e.cancelPendingCommit!==null)&&(Bo(e,0),ba(e,Xe,nn,!1)),Yo(e,n),((We&2)===0||e!==ut)&&(e===ut&&((We&2)===0&&(Qa|=n),wt===4&&ba(e,Xe,nn,!1)),Nn(e))}function Kf(e,t,n){if((We&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Aa(e,t),l=a?Cv(e,t):Ii(e,t,!0),s=a;do{if(l===0){Do&&!a&&ba(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Tv(n)){l=Ii(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var p=e;l=xl;var y=p.current.memoizedState.isDehydrated;if(y&&(Bo(p,u).flags|=256),u=Ii(p,u,!1),u!==2){if(qi&&!y){p.errorRecoveryDisabledLanes|=s,Qa|=s,l=4;break e}s=Ft,Ft=l,s!==null&&(Ft===null?Ft=s:Ft.push.apply(Ft,s))}l=u}if(s=!1,l!==2)continue}}if(l===1){Bo(e,0),ba(e,t,0,!0);break}e:{switch(a=e,s=l,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ba(a,t,nn,!ma);break e;case 2:Ft=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Cr+300-ze(),10<l)){if(ba(a,t,nn,!ma),$a(a,0,!0)!==0)break e;Jn=t,a.timeoutHandle=kp(Qf.bind(null,a,n,Ft,Br,Xi,t,nn,Qa,Co,ma,s,"Throttled",-0,0),l);break e}Qf(a,n,Ft,Br,Xi,t,nn,Qa,Co,ma,s,null,-0,0)}}break}while(!0);Nn(e)}function Qf(e,t,n,a,l,s,u,p,y,N,H,X,M,O){if(e.timeoutHandle=-1,X=t.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_n},Hf(t,s,X);var ge=(s&62914560)===s?Cr-ze():(s&4194048)===s?qf-ze():0;if(ge=cg(X,ge),ge!==null){Jn=s,e.cancelPendingCommit=ge(ep.bind(null,e,t,s,n,a,l,u,p,y,H,X,null,M,O)),ba(e,s,u,!N);return}}ep(e,t,s,n,a,l,u,p,y)}function Tv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],s=l.getSnapshot;l=l.value;try{if(!Jt(s(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ba(e,t,n,a){t&=~Vi,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var s=31-Et(l),u=1<<s;a[s]=-1,l&=~u}n!==0&&tu(e,n,t)}function Er(){return(We&6)===0?(wl(0),!1):!0}function Fi(){if(Ge!==null){if(tt===0)var e=Ge.return;else e=Ge,Gn=Ua=null,ui(e),xo=null,al=0,e=Ge;for(;e!==null;)jf(e.alternate,e),e=e.return;Ge=null}}function Bo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Kv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Jn=0,Fi(),ut=e,Ge=n=Hn(e.current,null),Xe=t,tt=0,tn=null,ma=!1,Do=Aa(e,t),qi=!1,Co=nn=Vi=Qa=ha=wt=0,Ft=xl=null,Xi=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-Et(a),s=1<<l;t|=e[l],a&=~s}return $n=t,Jl(),n}function Zf(e,t){Oe=null,C.H=dl,t===bo||t===lr?(t=id(),tt=3):t===Ws?(t=id(),tt=4):tt=t===Di?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,tn=t,Ge===null&&(wt=1,xr(e,cn(t,e.current)))}function Ff(){var e=Pt.current;return e===null?!0:(Xe&4194048)===Xe?pn===null:(Xe&62914560)===Xe||(Xe&536870912)!==0?e===pn:!1}function If(){var e=C.H;return C.H=dl,e===null?dl:e}function $f(){var e=C.A;return C.A=jv,e}function Nr(){wt=4,ma||(Xe&4194048)!==Xe&&Pt.current!==null||(Do=!0),(ha&134217727)===0&&(Qa&134217727)===0||ut===null||ba(ut,Xe,nn,!1)}function Ii(e,t,n){var a=We;We|=2;var l=If(),s=$f();(ut!==e||Xe!==t)&&(Br=null,Bo(e,t)),t=!1;var u=wt;e:do try{if(tt!==0&&Ge!==null){var p=Ge,y=tn;switch(tt){case 8:Fi(),u=6;break e;case 3:case 2:case 9:case 6:Pt.current===null&&(t=!0);var N=tt;if(tt=0,tn=null,Eo(e,p,y,N),n&&Do){u=0;break e}break;default:N=tt,tt=0,tn=null,Eo(e,p,y,N)}}Dv(),u=wt;break}catch(H){Zf(e,H)}while(!0);return t&&e.shellSuspendCounter++,Gn=Ua=null,We=a,C.H=l,C.A=s,Ge===null&&(ut=null,Xe=0,Jl()),u}function Dv(){for(;Ge!==null;)Jf(Ge)}function Cv(e,t){var n=We;We|=2;var a=If(),l=$f();ut!==e||Xe!==t?(Br=null,Ar=ze()+500,Bo(e,t)):Do=Aa(e,t);e:do try{if(tt!==0&&Ge!==null){t=Ge;var s=tn;t:switch(tt){case 1:tt=0,tn=null,Eo(e,t,s,1);break;case 2:case 9:if(rd(s)){tt=0,tn=null,Wf(t);break}t=function(){tt!==2&&tt!==9||ut!==e||(tt=7),Nn(e)},s.then(t,t);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:rd(s)?(tt=0,tn=null,Wf(t)):(tt=0,tn=null,Eo(e,t,s,7));break;case 5:var u=null;switch(Ge.tag){case 26:u=Ge.memoizedState;case 5:case 27:var p=Ge;if(u?Up(u):p.stateNode.complete){tt=0,tn=null;var y=p.sibling;if(y!==null)Ge=y;else{var N=p.return;N!==null?(Ge=N,zr(N)):Ge=null}break t}}tt=0,tn=null,Eo(e,t,s,5);break;case 6:tt=0,tn=null,Eo(e,t,s,6);break;case 8:Fi(),wt=6;break e;default:throw Error(c(462))}}Av();break}catch(H){Zf(e,H)}while(!0);return Gn=Ua=null,C.H=a,C.A=l,We=n,Ge!==null?0:(ut=null,Xe=0,Jl(),wt)}function Av(){for(;Ge!==null&&!Je();)Jf(Ge)}function Jf(e){var t=wf(e.alternate,e,$n);e.memoizedProps=e.pendingProps,t===null?zr(e):Ge=t}function Wf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hf(n,t,t.pendingProps,t.type,void 0,Xe);break;case 11:t=hf(n,t,t.pendingProps,t.type.render,t.ref,Xe);break;case 5:ui(t);default:jf(n,t),t=Ge=Iu(t,$n),t=wf(n,t,$n)}e.memoizedProps=e.pendingProps,t===null?zr(e):Ge=t}function Eo(e,t,n,a){Gn=Ua=null,ui(t),xo=null,al=0;var l=t.return;try{if(vv(e,l,t,n,Xe)){wt=1,xr(e,cn(n,e.current)),Ge=null;return}}catch(s){if(l!==null)throw Ge=l,s;wt=1,xr(e,cn(n,e.current)),Ge=null;return}t.flags&32768?(Qe||a===1?e=!0:Do||(Xe&536870912)!==0?e=!1:(ma=e=!0,(a===2||a===9||a===3||a===6)&&(a=Pt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Pf(t,e)):zr(t)}function zr(e){var t=e;do{if((t.flags&32768)!==0){Pf(t,ma);return}e=t.return;var n=xv(t.alternate,t,$n);if(n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);wt===0&&(wt=5)}function Pf(e,t){do{var n=yv(e.alternate,e);if(n!==null){n.flags&=32767,Ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ge=e;return}Ge=e=n}while(e!==null);wt=6,Ge=null}function ep(e,t,n,a,l,s,u,p,y){e.cancelPendingCommit=null;do Rr();while(Nt!==0);if((We&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Us,sh(e,n,s,u,p,y),e===ut&&(Ge=ut=null,Xe=0),Ao=t,ga=e,Jn=n,Ki=s,Qi=l,Vf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zv(ct,function(){return lp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,l=q.p,q.p=2,u=We,We|=4;try{wv(e,t,n)}finally{We=u,q.p=l,C.T=a}}Nt=1,tp(),np(),ap()}}function tp(){if(Nt===1){Nt=0;var e=ga,t=Ao,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=q.p;q.p=2;var l=We;We|=4;try{Of(t,e);var s=sc,u=Gu(e.containerInfo),p=s.focusedElem,y=s.selectionRange;if(u!==p&&p&&p.ownerDocument&&Lu(p.ownerDocument.documentElement,p)){if(y!==null&&zs(p)){var N=y.start,H=y.end;if(H===void 0&&(H=N),"selectionStart"in p)p.selectionStart=N,p.selectionEnd=Math.min(H,p.value.length);else{var X=p.ownerDocument||document,M=X&&X.defaultView||window;if(M.getSelection){var O=M.getSelection(),ge=p.textContent.length,Te=Math.min(y.start,ge),st=y.end===void 0?Te:Math.min(y.end,ge);!O.extend&&Te>st&&(u=st,st=Te,Te=u);var D=Hu(p,Te),j=Hu(p,st);if(D&&j&&(O.rangeCount!==1||O.anchorNode!==D.node||O.anchorOffset!==D.offset||O.focusNode!==j.node||O.focusOffset!==j.offset)){var E=X.createRange();E.setStart(D.node,D.offset),O.removeAllRanges(),Te>st?(O.addRange(E),O.extend(j.node,j.offset)):(E.setEnd(j.node,j.offset),O.addRange(E))}}}}for(X=[],O=p;O=O.parentNode;)O.nodeType===1&&X.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<X.length;p++){var G=X[p];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Kr=!!rc,sc=rc=null}finally{We=l,q.p=a,C.T=n}}e.current=t,Nt=2}}function np(){if(Nt===2){Nt=0;var e=ga,t=Ao,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=q.p;q.p=2;var l=We;We|=4;try{Ef(e,t.alternate,t)}finally{We=l,q.p=a,C.T=n}}Nt=3}}function ap(){if(Nt===4||Nt===3){Nt=0,be();var e=ga,t=Ao,n=Jn,a=Vf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Nt=5:(Nt=0,Ao=ga=null,op(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(va=null),ps(n),t=t.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(xn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=C.T,l=q.p,q.p=2,C.T=null;try{for(var s=e.onRecoverableError,u=0;u<a.length;u++){var p=a[u];s(p.value,{componentStack:p.stack})}}finally{C.T=t,q.p=l}}(Jn&3)!==0&&Rr(),Nn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Zi?yl++:(yl=0,Zi=e):yl=0,wl(0)}}function op(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tl(t)))}function Rr(){return tp(),np(),ap(),lp()}function lp(){if(Nt!==5)return!1;var e=ga,t=Ki;Ki=0;var n=ps(Jn),a=C.T,l=q.p;try{q.p=32>n?32:n,C.T=null,n=Qi,Qi=null;var s=ga,u=Jn;if(Nt=0,Ao=ga=null,Jn=0,(We&6)!==0)throw Error(c(331));var p=We;if(We|=4,Gf(s.current),Uf(s,s.current,u,n),We=p,wl(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(xn,s)}catch{}return!0}finally{q.p=l,C.T=a,op(e,t)}}function rp(e,t,n){t=cn(n,t),t=Ti(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(Yo(e,2),Nn(e))}function nt(e,t,n){if(e.tag===3)rp(e,e,n);else for(;t!==null;){if(t.tag===3){rp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(va===null||!va.has(a))){e=cn(n,e),n=rf(2),a=ua(t,n,2),a!==null&&(sf(n,a,t,e),Yo(a,2),Nn(a));break}}t=t.return}}function $i(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Sv;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(qi=!0,l.add(n),e=Bv.bind(null,e,t,n),t.then(e,e))}function Bv(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ut===e&&(Xe&n)===n&&(wt===4||wt===3&&(Xe&62914560)===Xe&&300>ze()-Cr?(We&2)===0&&Bo(e,0):Vi|=n,Co===Xe&&(Co=0)),Nn(e)}function sp(e,t){t===0&&(t=Ba()),e=Ma(e,t),e!==null&&(Yo(e,t),Nn(e))}function Ev(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sp(e,n)}function Nv(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),sp(e,n)}function zv(e,t){return he(e,t)}var Mr=null,No=null,Ji=!1,Or=!1,Wi=!1,xa=0;function Nn(e){e!==No&&e.next===null&&(No===null?Mr=No=e:No=No.next=e),Or=!0,Ji||(Ji=!0,Mv())}function wl(e,t){if(!Wi&&Or){Wi=!0;do for(var n=!1,a=Mr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var s=0;else{var u=a.suspendedLanes,p=a.pingedLanes;s=(1<<31-Et(42|e)+1)-1,s&=l&~(u&~p),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,dp(a,s))}else s=Xe,s=$a(a,a===ut?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Aa(a,s)||(n=!0,dp(a,s));a=a.next}while(n);Wi=!1}}function Rv(){ip()}function ip(){Or=Ji=!1;var e=0;xa!==0&&Xv()&&(e=xa);for(var t=ze(),n=null,a=Mr;a!==null;){var l=a.next,s=cp(a,t);s===0?(a.next=null,n===null?Mr=l:n.next=l,l===null&&(No=n)):(n=a,(e!==0||(s&3)!==0)&&(Or=!0)),a=l}Nt!==0&&Nt!==5||wl(e),xa!==0&&(xa=0)}function cp(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var u=31-Et(s),p=1<<u,y=l[u];y===-1?((p&n)===0||(p&a)!==0)&&(l[u]=us(p,t)):y<=t&&(e.expiredLanes|=p),s&=~p}if(t=ut,n=Xe,n=$a(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(tt===2||tt===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ee(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Aa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ee(a),ps(n)){case 2:case 8:n=ot;break;case 32:n=ct;break;case 268435456:n=Le;break;default:n=ct}return a=up.bind(null,e),n=he(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ee(a),e.callbackPriority=2,e.callbackNode=null,2}function up(e,t){if(Nt!==0&&Nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var a=Xe;return a=$a(e,e===ut?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Kf(e,a,t),cp(e,ze()),e.callbackNode!=null&&e.callbackNode===n?up.bind(null,e):null)}function dp(e,t){if(Rr())return null;Kf(e,t,!0)}function Mv(){Qv(function(){(We&6)!==0?he(et,Rv):ip()})}function Pi(){if(xa===0){var e=vo;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),xa=e}return xa}function fp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vl(""+e)}function pp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ov(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var s=fp((l[Vt]||null).action),u=a.submitter;u&&(t=(t=u[Vt]||null)?fp(t.formAction):u.getAttribute("formAction"),t!==null&&(s=t,u=null));var p=new Zl("action","action",null,a,l);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(xa!==0){var y=u?pp(l,u):new FormData(l);xi(n,{pending:!0,data:y,method:l.method,action:s},null,y)}}else typeof s=="function"&&(p.preventDefault(),y=u?pp(l,u):new FormData(l),xi(n,{pending:!0,data:y,method:l.method,action:s},s,y))},currentTarget:l}]})}}for(var ec=0;ec<_s.length;ec++){var tc=_s[ec],_v=tc.toLowerCase(),Uv=tc[0].toUpperCase()+tc.slice(1);wn(_v,"on"+Uv)}wn(Vu,"onAnimationEnd"),wn(Xu,"onAnimationIteration"),wn(Ku,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Ph,"onTransitionRun"),wn(ev,"onTransitionStart"),wn(tv,"onTransitionCancel"),wn(Qu,"onTransitionEnd"),to("onMouseEnter",["mouseout","mouseover"]),to("onMouseLeave",["mouseout","mouseover"]),to("onPointerEnter",["pointerout","pointerover"]),to("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function mp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var u=a.length-1;0<=u;u--){var p=a[u],y=p.instance,N=p.currentTarget;if(p=p.listener,y!==s&&l.isPropagationStopped())break e;s=p,l.currentTarget=N;try{s(l)}catch(H){$l(H)}l.currentTarget=null,s=y}else for(u=0;u<a.length;u++){if(p=a[u],y=p.instance,N=p.currentTarget,p=p.listener,y!==s&&l.isPropagationStopped())break e;s=p,l.currentTarget=N;try{s(l)}catch(H){$l(H)}l.currentTarget=null,s=y}}}}function Ye(e,t){var n=t[ms];n===void 0&&(n=t[ms]=new Set);var a=e+"__bubble";n.has(a)||(hp(t,e,2,!1),n.add(a))}function nc(e,t,n){var a=0;t&&(a|=4),hp(n,e,a,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function ac(e){if(!e[_r]){e[_r]=!0,su.forEach(function(n){n!=="selectionchange"&&(Hv.has(n)||nc(n,!1,e),nc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,nc("selectionchange",!1,t))}}function hp(e,t,n,a){switch(Xp(t)){case 2:var l=fg;break;case 8:l=pg;break;default:l=bc}n=l.bind(null,t,n,e),l=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function oc(e,t,n,a,l){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var p=a.stateNode.containerInfo;if(p===l)break;if(u===4)for(u=a.return;u!==null;){var y=u.tag;if((y===3||y===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;p!==null;){if(u=Wa(p),u===null)return;if(y=u.tag,y===5||y===6||y===26||y===27){a=s=u;continue e}p=p.parentNode}}a=a.return}xu(function(){var N=s,H=ws(n),X=[];e:{var M=Zu.get(e);if(M!==void 0){var O=Zl,ge=e;switch(e){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":O=Nh;break;case"focusin":ge="focus",O=Cs;break;case"focusout":ge="blur",O=Cs;break;case"beforeblur":case"afterblur":O=Cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Mh;break;case Vu:case Xu:case Ku:O=kh;break;case Qu:O=_h;break;case"scroll":case"scrollend":O=gh;break;case"wheel":O=Hh;break;case"copy":case"cut":case"paste":O=Sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Su;break;case"toggle":case"beforetoggle":O=Gh}var Te=(t&4)!==0,st=!Te&&(e==="scroll"||e==="scrollend"),D=Te?M!==null?M+"Capture":null:M;Te=[];for(var j=N,E;j!==null;){var G=j;if(E=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||E===null||D===null||(G=Xo(j,D),G!=null&&Te.push(jl(j,G,E))),st)break;j=j.return}0<Te.length&&(M=new O(M,ge,null,n,H),X.push({event:M,listeners:Te}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",M&&n!==ys&&(ge=n.relatedTarget||n.fromElement)&&(Wa(ge)||ge[Ja]))break e;if((O||M)&&(M=H.window===H?H:(M=H.ownerDocument)?M.defaultView||M.parentWindow:window,O?(ge=n.relatedTarget||n.toElement,O=N,ge=ge?Wa(ge):null,ge!==null&&(st=m(ge),Te=ge.tag,ge!==st||Te!==5&&Te!==27&&Te!==6)&&(ge=null)):(O=null,ge=N),O!==ge)){if(Te=ku,G="onMouseLeave",D="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Te=Su,G="onPointerLeave",D="onPointerEnter",j="pointer"),st=O==null?M:Vo(O),E=ge==null?M:Vo(ge),M=new Te(G,j+"leave",O,n,H),M.target=st,M.relatedTarget=E,G=null,Wa(H)===N&&(Te=new Te(D,j+"enter",ge,n,H),Te.target=E,Te.relatedTarget=st,G=Te),st=G,O&&ge)t:{for(Te=Lv,D=O,j=ge,E=0,G=D;G;G=Te(G))E++;G=0;for(var je=j;je;je=Te(je))G++;for(;0<E-G;)D=Te(D),E--;for(;0<G-E;)j=Te(j),G--;for(;E--;){if(D===j||j!==null&&D===j.alternate){Te=D;break t}D=Te(D),j=Te(j)}Te=null}else Te=null;O!==null&&vp(X,M,O,Te,!1),ge!==null&&st!==null&&vp(X,st,ge,Te,!0)}}e:{if(M=N?Vo(N):window,O=M.nodeName&&M.nodeName.toLowerCase(),O==="select"||O==="input"&&M.type==="file")var Fe=zu;else if(Eu(M))if(Ru)Fe=$h;else{Fe=Fh;var xe=Zh}else O=M.nodeName,!O||O.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?N&&xs(N.elementType)&&(Fe=zu):Fe=Ih;if(Fe&&(Fe=Fe(e,N))){Nu(X,Fe,n,H);break e}xe&&xe(e,M,N),e==="focusout"&&N&&M.type==="number"&&N.memoizedProps.value!=null&&bs(M,"number",M.value)}switch(xe=N?Vo(N):window,e){case"focusin":(Eu(xe)||xe.contentEditable==="true")&&(so=xe,Rs=N,Wo=null);break;case"focusout":Wo=Rs=so=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,Yu(X,n,H);break;case"selectionchange":if(Wh)break;case"keydown":case"keyup":Yu(X,n,H)}var Ue;if(Bs)e:{switch(e){case"compositionstart":var Ke="onCompositionStart";break e;case"compositionend":Ke="onCompositionEnd";break e;case"compositionupdate":Ke="onCompositionUpdate";break e}Ke=void 0}else ro?Au(e,n)&&(Ke="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ke="onCompositionStart");Ke&&(Tu&&n.locale!=="ko"&&(ro||Ke!=="onCompositionStart"?Ke==="onCompositionEnd"&&ro&&(Ue=yu()):(aa=H,Ss="value"in aa?aa.value:aa.textContent,ro=!0)),xe=Ur(N,Ke),0<xe.length&&(Ke=new ju(Ke,e,null,n,H),X.push({event:Ke,listeners:xe}),Ue?Ke.data=Ue:(Ue=Bu(n),Ue!==null&&(Ke.data=Ue)))),(Ue=qh?Vh(e,n):Xh(e,n))&&(Ke=Ur(N,"onBeforeInput"),0<Ke.length&&(xe=new ju("onBeforeInput","beforeinput",null,n,H),X.push({event:xe,listeners:Ke}),xe.data=Ue)),Ov(X,e,N,n,H)}mp(X,t)})}function jl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Xo(e,n),l!=null&&a.unshift(jl(e,l,s)),l=Xo(e,t),l!=null&&a.push(jl(e,l,s))),e.tag===3)return a;e=e.return}return[]}function Lv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vp(e,t,n,a,l){for(var s=t._reactName,u=[];n!==null&&n!==a;){var p=n,y=p.alternate,N=p.stateNode;if(p=p.tag,y!==null&&y===a)break;p!==5&&p!==26&&p!==27||N===null||(y=N,l?(N=Xo(n,s),N!=null&&u.unshift(jl(n,N,y))):l||(N=Xo(n,s),N!=null&&u.push(jl(n,N,y)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Gv=/\r\n?/g,Yv=/\u0000|\uFFFD/g;function gp(e){return(typeof e=="string"?e:""+e).replace(Gv,`
`).replace(Yv,"")}function bp(e,t){return t=gp(t),gp(e)===t}function rt(e,t,n,a,l,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ao(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ao(e,""+a);break;case"className":Yl(e,"class",a);break;case"tabIndex":Yl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Yl(e,n,a);break;case"style":gu(e,a,s);break;case"data":if(t!=="object"){Yl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&rt(e,t,"name",l.name,l,null),rt(e,t,"formEncType",l.formEncType,l,null),rt(e,t,"formMethod",l.formMethod,l,null),rt(e,t,"formTarget",l.formTarget,l,null)):(rt(e,t,"encType",l.encType,l,null),rt(e,t,"method",l.method,l,null),rt(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=_n);break;case"onScroll":a!=null&&Ye("scroll",e);break;case"onScrollEnd":a!=null&&Ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Vl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ye("beforetoggle",e),Ye("toggle",e),Gl(e,"popover",a);break;case"xlinkActuate":On(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":On(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":On(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":On(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":On(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":On(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":On(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":On(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":On(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Gl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hh.get(n)||n,Gl(e,n,a))}}function lc(e,t,n,a,l,s){switch(n){case"style":gu(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ao(e,a):(typeof a=="number"||typeof a=="bigint")&&ao(e,""+a);break;case"onScroll":a!=null&&Ye("scroll",e);break;case"onScrollEnd":a!=null&&Ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=_n);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!iu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),s=e[Vt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Gl(e,n,a)}}}function Ht(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",e),Ye("load",e);var a=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var u=n[s];if(u!=null)switch(s){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:rt(e,t,s,u,n,null)}}l&&rt(e,t,"srcSet",n.srcSet,n,null),a&&rt(e,t,"src",n.src,n,null);return;case"input":Ye("invalid",e);var p=s=u=l=null,y=null,N=null;for(a in n)if(n.hasOwnProperty(a)){var H=n[a];if(H!=null)switch(a){case"name":l=H;break;case"type":u=H;break;case"checked":y=H;break;case"defaultChecked":N=H;break;case"value":s=H;break;case"defaultValue":p=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:rt(e,t,a,H,n,null)}}pu(e,s,p,y,N,u,l,!1);return;case"select":Ye("invalid",e),a=u=s=null;for(l in n)if(n.hasOwnProperty(l)&&(p=n[l],p!=null))switch(l){case"value":s=p;break;case"defaultValue":u=p;break;case"multiple":a=p;default:rt(e,t,l,p,n,null)}t=s,n=u,e.multiple=!!a,t!=null?no(e,!!a,t,!1):n!=null&&no(e,!!a,n,!0);return;case"textarea":Ye("invalid",e),s=l=a=null;for(u in n)if(n.hasOwnProperty(u)&&(p=n[u],p!=null))switch(u){case"value":a=p;break;case"defaultValue":l=p;break;case"children":s=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:rt(e,t,u,p,n,null)}hu(e,a,l,s);return;case"option":for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null)&&(y==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":rt(e,t,y,a,n,null));return;case"dialog":Ye("beforetoggle",e),Ye("toggle",e),Ye("cancel",e),Ye("close",e);break;case"iframe":case"object":Ye("load",e);break;case"video":case"audio":for(a=0;a<kl.length;a++)Ye(kl[a],e);break;case"image":Ye("error",e),Ye("load",e);break;case"details":Ye("toggle",e);break;case"embed":case"source":case"link":Ye("error",e),Ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(a=n[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:rt(e,t,N,a,n,null)}return;default:if(xs(t)){for(H in n)n.hasOwnProperty(H)&&(a=n[H],a!==void 0&&lc(e,t,H,a,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!=null&&rt(e,t,p,a,n,null))}function qv(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,u=null,p=null,y=null,N=null,H=null;for(O in n){var X=n[O];if(n.hasOwnProperty(O)&&X!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":y=X;default:a.hasOwnProperty(O)||rt(e,t,O,null,a,X)}}for(var M in a){var O=a[M];if(X=n[M],a.hasOwnProperty(M)&&(O!=null||X!=null))switch(M){case"type":s=O;break;case"name":l=O;break;case"checked":N=O;break;case"defaultChecked":H=O;break;case"value":u=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:O!==X&&rt(e,t,M,O,a,X)}}gs(e,u,p,y,N,H,s,l);return;case"select":O=u=p=M=null;for(s in n)if(y=n[s],n.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":O=y;default:a.hasOwnProperty(s)||rt(e,t,s,null,a,y)}for(l in a)if(s=a[l],y=n[l],a.hasOwnProperty(l)&&(s!=null||y!=null))switch(l){case"value":M=s;break;case"defaultValue":p=s;break;case"multiple":u=s;default:s!==y&&rt(e,t,l,s,a,y)}t=p,n=u,a=O,M!=null?no(e,!!n,M,!1):!!a!=!!n&&(t!=null?no(e,!!n,t,!0):no(e,!!n,n?[]:"",!1));return;case"textarea":O=M=null;for(p in n)if(l=n[p],n.hasOwnProperty(p)&&l!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:rt(e,t,p,null,a,l)}for(u in a)if(l=a[u],s=n[u],a.hasOwnProperty(u)&&(l!=null||s!=null))switch(u){case"value":M=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==s&&rt(e,t,u,l,a,s)}mu(e,M,O);return;case"option":for(var ge in n)M=n[ge],n.hasOwnProperty(ge)&&M!=null&&!a.hasOwnProperty(ge)&&(ge==="selected"?e.selected=!1:rt(e,t,ge,null,a,M));for(y in a)M=a[y],O=n[y],a.hasOwnProperty(y)&&M!==O&&(M!=null||O!=null)&&(y==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":rt(e,t,y,M,a,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in n)M=n[Te],n.hasOwnProperty(Te)&&M!=null&&!a.hasOwnProperty(Te)&&rt(e,t,Te,null,a,M);for(N in a)if(M=a[N],O=n[N],a.hasOwnProperty(N)&&M!==O&&(M!=null||O!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:rt(e,t,N,M,a,O)}return;default:if(xs(t)){for(var st in n)M=n[st],n.hasOwnProperty(st)&&M!==void 0&&!a.hasOwnProperty(st)&&lc(e,t,st,void 0,a,M);for(H in a)M=a[H],O=n[H],!a.hasOwnProperty(H)||M===O||M===void 0&&O===void 0||lc(e,t,H,M,a,O);return}}for(var D in n)M=n[D],n.hasOwnProperty(D)&&M!=null&&!a.hasOwnProperty(D)&&rt(e,t,D,null,a,M);for(X in a)M=a[X],O=n[X],!a.hasOwnProperty(X)||M===O||M==null&&O==null||rt(e,t,X,M,a,O)}function xp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],s=l.transferSize,u=l.initiatorType,p=l.duration;if(s&&p&&xp(u)){for(u=0,p=l.responseEnd,a+=1;a<n.length;a++){var y=n[a],N=y.startTime;if(N>p)break;var H=y.transferSize,X=y.initiatorType;H&&xp(X)&&(y=y.responseEnd,u+=H*(y<p?1:(p-N)/(y-N)))}if(--a,t+=8*(s+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rc=null,sc=null;function Hr(e){return e.nodeType===9?e:e.ownerDocument}function yp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ic(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=null;function Xv(){var e=window.event;return e&&e.type==="popstate"?e===cc?!1:(cc=e,!0):(cc=null,!1)}var kp=typeof setTimeout=="function"?setTimeout:void 0,Kv=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(e){return jp.resolve(null).then(e).catch(Zv)}:kp;function Zv(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function Sp(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Oo(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Sl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Sl(n);for(var s=n.firstChild;s;){var u=s.nextSibling,p=s.nodeName;s[qo]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=u}}else n==="body"&&Sl(e.ownerDocument.body);n=l}while(n);Oo(t)}function Tp(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function uc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":uc(n),hs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Fv(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[qo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=mn(e.nextSibling),e===null)break}return null}function Iv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mn(e.nextSibling),e===null))return null;return e}function Dp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mn(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$?"||e.data==="$~"}function fc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $v(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pc=null;function Cp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return mn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ap(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Bp(e,t,n){switch(t=Hr(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Sl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hs(e)}var hn=new Map,Ep=new Set;function Lr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wn=q.d;q.d={f:Jv,r:Wv,D:Pv,C:eg,L:tg,m:ng,X:og,S:ag,M:lg};function Jv(){var e=Wn.f(),t=Er();return e||t}function Wv(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Qd(t):Wn.r(e)}var zo=typeof document>"u"?null:document;function Np(e,t,n){var a=zo;if(a&&typeof t=="string"&&t){var l=rn(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Ep.has(l)||(Ep.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Ht(t,"link",e),zt(t),a.head.appendChild(t)))}}function Pv(e){Wn.D(e),Np("dns-prefetch",e,null)}function eg(e,t){Wn.C(e,t),Np("preconnect",e,t)}function tg(e,t,n){Wn.L(e,t,n);var a=zo;if(a&&e&&t){var l='link[rel="preload"][as="'+rn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+rn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+rn(n.imageSizes)+'"]')):l+='[href="'+rn(e)+'"]';var s=l;switch(t){case"style":s=Ro(e);break;case"script":s=Mo(e)}hn.has(s)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hn.set(s,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Tl(s))||t==="script"&&a.querySelector(Dl(s))||(t=a.createElement("link"),Ht(t,"link",e),zt(t),a.head.appendChild(t)))}}function ng(e,t){Wn.m(e,t);var n=zo;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+rn(a)+'"][href="'+rn(e)+'"]',s=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Mo(e)}if(!hn.has(s)&&(e=w({rel:"modulepreload",href:e},t),hn.set(s,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Dl(s)))return}a=n.createElement("link"),Ht(a,"link",e),zt(a),n.head.appendChild(a)}}}function ag(e,t,n){Wn.S(e,t,n);var a=zo;if(a&&e){var l=eo(a).hoistableStyles,s=Ro(e);t=t||"default";var u=l.get(s);if(!u){var p={loading:0,preload:null};if(u=a.querySelector(Tl(s)))p.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hn.get(s))&&mc(e,n);var y=u=a.createElement("link");zt(y),Ht(y,"link",e),y._p=new Promise(function(N,H){y.onload=N,y.onerror=H}),y.addEventListener("load",function(){p.loading|=1}),y.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Gr(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:p},l.set(s,u)}}}function og(e,t){Wn.X(e,t);var n=zo;if(n&&e){var a=eo(n).hoistableScripts,l=Mo(e),s=a.get(l);s||(s=n.querySelector(Dl(l)),s||(e=w({src:e,async:!0},t),(t=hn.get(l))&&hc(e,t),s=n.createElement("script"),zt(s),Ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function lg(e,t){Wn.M(e,t);var n=zo;if(n&&e){var a=eo(n).hoistableScripts,l=Mo(e),s=a.get(l);s||(s=n.querySelector(Dl(l)),s||(e=w({src:e,async:!0,type:"module"},t),(t=hn.get(l))&&hc(e,t),s=n.createElement("script"),zt(s),Ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function zp(e,t,n,a){var l=(l=re.current)?Lr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ro(n.href),n=eo(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ro(n.href);var s=eo(l).hoistableStyles,u=s.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,u),(s=l.querySelector(Tl(e)))&&!s._p&&(u.instance=s,u.state.loading=5),hn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hn.set(e,n),s||rg(l,e,n,u.state))),t&&a===null)throw Error(c(528,""));return u}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Mo(n),n=eo(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ro(e){return'href="'+rn(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function Rp(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function rg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ht(t,"link",n),zt(t),e.head.appendChild(t))}function Mo(e){return'[src="'+rn(e)+'"]'}function Dl(e){return"script[async]"+e}function Mp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+rn(n.href)+'"]');if(a)return t.instance=a,zt(a),a;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),zt(a),Ht(a,"style",l),Gr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Ro(n.href);var s=e.querySelector(Tl(l));if(s)return t.state.loading|=4,t.instance=s,zt(s),s;a=Rp(n),(l=hn.get(l))&&mc(a,l),s=(e.ownerDocument||e).createElement("link"),zt(s);var u=s;return u._p=new Promise(function(p,y){u.onload=p,u.onerror=y}),Ht(s,"link",a),t.state.loading|=4,Gr(s,n.precedence,e),t.instance=s;case"script":return s=Mo(n.src),(l=e.querySelector(Dl(s)))?(t.instance=l,zt(l),l):(a=n,(l=hn.get(s))&&(a=w({},n),hc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),zt(l),Ht(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Gr(a,n.precedence,e));return t.instance}function Gr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,s=l,u=0;u<a.length;u++){var p=a[u];if(p.dataset.precedence===t)s=p;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yr=null;function Op(e,t,n){if(Yr===null){var a=new Map,l=Yr=new Map;l.set(n,a)}else l=Yr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[qo]||s[Mt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var u=s.getAttribute(t)||"";u=e+u;var p=a.get(u);p?p.push(s):a.set(u,[s])}}return a}function _p(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function sg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Up(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ig(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ro(a.href),s=t.querySelector(Tl(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=qr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,zt(s);return}s=t.ownerDocument||t,a=Rp(a),(l=hn.get(l))&&mc(a,l),s=s.createElement("link"),zt(s);var u=s;u._p=new Promise(function(p,y){u.onload=p,u.onerror=y}),Ht(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=qr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var vc=0;function cg(e,t){return e.stylesheets&&e.count===0&&Xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&vc===0&&(vc=62500*Vv());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>vc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function qr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Xr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,t.forEach(ug,e),Vr=null,qr.call(e))}function ug(e,t){if(!(t.state.loading&4)){var n=Vr.get(e);if(n)var a=n.get(null);else{n=new Map,Vr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var u=l[s];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),a=u)}a&&n.set(null,a)}l=t.instance,u=l.getAttribute("data-precedence"),s=n.get(u)||a,s===a&&n.set(null,l),n.set(u,l),this.count++,a=qr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Cl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function dg(e,t,n,a,l,s,u,p,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ds(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ds(0),this.hiddenUpdates=ds(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Hp(e,t,n,a,l,s,u,p,y,N,H,X){return e=new dg(e,t,n,u,y,N,H,X,p),t=1,s===!0&&(t|=24),s=Wt(3,null,null,t),e.current=s,s.stateNode=e,t=Is(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},Ps(s),e}function Lp(e){return e?(e=uo,e):uo}function Gp(e,t,n,a,l,s){l=Lp(l),a.context===null?a.context=l:a.pendingContext=l,a=ca(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=ua(e,a,t),n!==null&&(It(n,e,t),ll(n,e,t))}function Yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){Yp(e,t),(e=e.alternate)&&Yp(e,t)}function qp(e){if(e.tag===13||e.tag===31){var t=Ma(e,67108864);t!==null&&It(t,e,67108864),gc(e,67108864)}}function Vp(e){if(e.tag===13||e.tag===31){var t=an();t=fs(t);var n=Ma(e,t);n!==null&&It(n,e,t),gc(e,t)}}var Kr=!0;function fg(e,t,n,a){var l=C.T;C.T=null;var s=q.p;try{q.p=2,bc(e,t,n,a)}finally{q.p=s,C.T=l}}function pg(e,t,n,a){var l=C.T;C.T=null;var s=q.p;try{q.p=8,bc(e,t,n,a)}finally{q.p=s,C.T=l}}function bc(e,t,n,a){if(Kr){var l=xc(a);if(l===null)oc(e,t,a,Qr,n),Kp(e,a);else if(hg(l,e,t,n,a))a.stopPropagation();else if(Kp(e,a),t&4&&-1<mg.indexOf(e)){for(;l!==null;){var s=Pa(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var u=Cn(s.pendingLanes);if(u!==0){var p=s;for(p.pendingLanes|=2,p.entangledLanes|=2;u;){var y=1<<31-Et(u);p.entanglements[1]|=y,u&=~y}Nn(s),(We&6)===0&&(Ar=ze()+500,wl(0))}}break;case 31:case 13:p=Ma(s,2),p!==null&&It(p,s,2),Er(),gc(s,2)}if(s=xc(a),s===null&&oc(e,t,a,Qr,n),s===l)break;l=s}l!==null&&a.stopPropagation()}else oc(e,t,a,null,n)}}function xc(e){return e=ws(e),yc(e)}var Qr=null;function yc(e){if(Qr=null,e=Wa(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=k(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qr=e,null}function Xp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case et:return 2;case ot:return 8;case ct:case Ae:return 32;case Le:return 268435456;default:return 32}default:return 32}}var wc=!1,wa=null,ka=null,ja=null,Al=new Map,Bl=new Map,Sa=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kp(e,t){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(t.pointerId)}}function El(e,t,n,a,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[l]},t!==null&&(t=Pa(t),t!==null&&qp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function hg(e,t,n,a,l){switch(t){case"focusin":return wa=El(wa,e,t,n,a,l),!0;case"dragenter":return ka=El(ka,e,t,n,a,l),!0;case"mouseover":return ja=El(ja,e,t,n,a,l),!0;case"pointerover":var s=l.pointerId;return Al.set(s,El(Al.get(s)||null,e,t,n,a,l)),!0;case"gotpointercapture":return s=l.pointerId,Bl.set(s,El(Bl.get(s)||null,e,t,n,a,l)),!0}return!1}function Qp(e){var t=Wa(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,lu(e.priority,function(){Vp(n)});return}}else if(t===31){if(t=k(n),t!==null){e.blockedOn=t,lu(e.priority,function(){Vp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ys=a,n.target.dispatchEvent(a),ys=null}else return t=Pa(n),t!==null&&qp(t),e.blockedOn=n,!1;t.shift()}return!0}function Zp(e,t,n){Zr(e)&&n.delete(t)}function vg(){wc=!1,wa!==null&&Zr(wa)&&(wa=null),ka!==null&&Zr(ka)&&(ka=null),ja!==null&&Zr(ja)&&(ja=null),Al.forEach(Zp),Bl.forEach(Zp)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,wc||(wc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,vg)))}var Ir=null;function Fp(e){Ir!==e&&(Ir=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ir===e&&(Ir=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(yc(a||n)===null)continue;break}var s=Pa(n);s!==null&&(e.splice(t,3),t-=3,xi(s,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Oo(e){function t(y){return Fr(y,e)}wa!==null&&Fr(wa,e),ka!==null&&Fr(ka,e),ja!==null&&Fr(ja,e),Al.forEach(t),Bl.forEach(t);for(var n=0;n<Sa.length;n++){var a=Sa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Sa.length&&(n=Sa[0],n.blockedOn===null);)Qp(n),n.blockedOn===null&&Sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],s=n[a+1],u=l[Vt]||null;if(typeof s=="function")u||Fp(n);else if(u){var p=null;if(s&&s.hasAttribute("formAction")){if(l=s,u=s[Vt]||null)p=u.formAction;else if(yc(l)!==null)continue}else p=u.action;typeof p=="function"?n[a+1]=p:(n.splice(a,3),a-=3),Fp(n)}}}function Ip(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function kc(e){this._internalRoot=e}$r.prototype.render=kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=an();Gp(n,a,e,t,null,null)},$r.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gp(e.current,2,null,e,null,null),Er(),t[Ja]=null}};function $r(e){this._internalRoot=e}$r.prototype.unstable_scheduleHydration=function(e){if(e){var t=ou();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sa.length&&t!==0&&t<Sa[n].priority;n++);Sa.splice(n,0,e),n===0&&Qp(e)}};var $p=i.version;if($p!=="19.2.4")throw Error(c(527,$p,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var gg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jr.isDisabled&&Jr.supportsFiber)try{xn=Jr.inject(gg),Bt=Jr}catch{}}return zl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,a="",l=nf,s=af,u=of;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Hp(e,1,!1,null,null,n,a,null,l,s,u,Ip),e[Ja]=t.current,ac(e),new kc(t)},zl.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var a=!1,l="",s=nf,u=af,p=of,y=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),t=Hp(e,1,!0,t,n??null,a,l,y,s,u,p,Ip),t.context=Lp(null),n=t.current,a=an(),a=fs(a),l=ca(a),l.callback=null,ua(n,l,a),n=a,t.current.lanes=n,Yo(t,n),Nn(t),e[Ja]=t.current,ac(e),new $r(t)},zl.version="19.2.4",zl}var rm;function Cg(){if(rm)return Tc.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Tc.exports=Dg(),Tc.exports}var Ag=Cg();var sm="popstate";function im(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Bg(r={}){function i(c,f){let m=f.state?.masked,{pathname:g,search:k,hash:b}=m||c.location;return Yc("",{pathname:g,search:k,hash:b},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function d(c,f){return typeof f=="string"?f:_l(f)}return Ng(i,d,null,r)}function xt(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}function Mn(r,i){if(!r){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Eg(){return Math.random().toString(36).substring(2,10)}function cm(r,i){return{usr:r.state,key:r.key,idx:i,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Yc(r,i,d=null,c,f){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof i=="string"?Lo(i):i,state:d,key:i&&i.key||c||Eg(),unstable_mask:f}}function _l({pathname:r="/",search:i="",hash:d=""}){return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Lo(r){let i={};if(r){let d=r.indexOf("#");d>=0&&(i.hash=r.substring(d),r=r.substring(0,d));let c=r.indexOf("?");c>=0&&(i.search=r.substring(c),r=r.substring(0,c)),r&&(i.pathname=r)}return i}function Ng(r,i,d,c={}){let{window:f=document.defaultView,v5Compat:m=!1}=c,g=f.history,k="POP",b=null,x=T();x==null&&(x=0,g.replaceState({...g.state,idx:x},""));function T(){return(g.state||{idx:null}).idx}function w(){k="POP";let _=T(),Y=_==null?null:_-x;x=_,b&&b({action:k,location:U.location,delta:Y})}function z(_,Y){k="PUSH";let ee=im(_)?_:Yc(U.location,_,Y);x=T()+1;let Z=cm(ee,x),$=U.createHref(ee.unstable_mask||ee);try{g.pushState(Z,"",$)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;f.location.assign($)}m&&b&&b({action:k,location:U.location,delta:1})}function L(_,Y){k="REPLACE";let ee=im(_)?_:Yc(U.location,_,Y);x=T();let Z=cm(ee,x),$=U.createHref(ee.unstable_mask||ee);g.replaceState(Z,"",$),m&&b&&b({action:k,location:U.location,delta:0})}function R(_){return zg(_)}let U={get action(){return k},get location(){return r(f,g)},listen(_){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(sm,w),b=_,()=>{f.removeEventListener(sm,w),b=null}},createHref(_){return i(f,_)},createURL:R,encodeLocation(_){let Y=R(_);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:z,replace:L,go(_){return g.go(_)}};return U}function zg(r,i=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),xt(d,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:_l(r);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function Tm(r,i,d="/"){return Rg(r,i,d,!1)}function Rg(r,i,d,c){let f=typeof i=="string"?Lo(i):i,m=ea(f.pathname||"/",d);if(m==null)return null;let g=Dm(r);Mg(g);let k=null;for(let b=0;k==null&&b<g.length;++b){let x=Kg(m);k=Vg(g[b],x,c)}return k}function Dm(r,i=[],d=[],c="",f=!1){let m=(g,k,b=f,x)=>{let T={relativePath:x===void 0?g.path||"":x,caseSensitive:g.caseSensitive===!0,childrenIndex:k,route:g};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(c)&&b)return;xt(T.relativePath.startsWith(c),`Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(c.length)}let w=Rn([c,T.relativePath]),z=d.concat(T);g.children&&g.children.length>0&&(xt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Dm(g.children,i,z,w,b)),!(g.path==null&&!g.index)&&i.push({path:w,score:Yg(w,g.index),routesMeta:z})};return r.forEach((g,k)=>{if(g.path===""||!g.path?.includes("?"))m(g,k);else for(let b of Cm(g.path))m(g,k,!0,b)}),i}function Cm(r){let i=r.split("/");if(i.length===0)return[];let[d,...c]=i,f=d.endsWith("?"),m=d.replace(/\?$/,"");if(c.length===0)return f?[m,""]:[m];let g=Cm(c.join("/")),k=[];return k.push(...g.map(b=>b===""?m:[m,b].join("/"))),f&&k.push(...g),k.map(b=>r.startsWith("/")&&b===""?"/":b)}function Mg(r){r.sort((i,d)=>i.score!==d.score?d.score-i.score:qg(i.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var Og=/^:[\w-]+$/,_g=3,Ug=2,Hg=1,Lg=10,Gg=-2,um=r=>r==="*";function Yg(r,i){let d=r.split("/"),c=d.length;return d.some(um)&&(c+=Gg),i&&(c+=Ug),d.filter(f=>!um(f)).reduce((f,m)=>f+(Og.test(m)?_g:m===""?Hg:Lg),c)}function qg(r,i){return r.length===i.length&&r.slice(0,-1).every((c,f)=>c===i[f])?r[r.length-1]-i[i.length-1]:0}function Vg(r,i,d=!1){let{routesMeta:c}=r,f={},m="/",g=[];for(let k=0;k<c.length;++k){let b=c[k],x=k===c.length-1,T=m==="/"?i:i.slice(m.length)||"/",w=rs({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},T),z=b.route;if(!w&&x&&d&&!c[c.length-1].route.index&&(w=rs({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},T)),!w)return null;Object.assign(f,w.params),g.push({params:f,pathname:Rn([m,w.pathname]),pathnameBase:Ig(Rn([m,w.pathnameBase])),route:z}),w.pathnameBase!=="/"&&(m=Rn([m,w.pathnameBase]))}return g}function rs(r,i){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,c]=Xg(r.path,r.caseSensitive,r.end),f=i.match(d);if(!f)return null;let m=f[0],g=m.replace(/(.)\/+$/,"$1"),k=f.slice(1);return{params:c.reduce((x,{paramName:T,isOptional:w},z)=>{if(T==="*"){let R=k[z]||"";g=m.slice(0,m.length-R.length).replace(/(.)\/+$/,"$1")}const L=k[z];return w&&!L?x[T]=void 0:x[T]=(L||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:g,pattern:r}}function Xg(r,i=!1,d=!0){Mn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,k,b,x,T)=>{if(c.push({paramName:k,isOptional:b!=null}),b){let w=T.charAt(x+g.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),c]}function Kg(r){try{return r.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Mn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),r}}function ea(r,i){if(i==="/")return r;if(!r.toLowerCase().startsWith(i.toLowerCase()))return null;let d=i.endsWith("/")?i.length-1:i.length,c=r.charAt(d);return c&&c!=="/"?null:r.slice(d)||"/"}var Qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Zg(r,i="/"){let{pathname:d,search:c="",hash:f=""}=typeof r=="string"?Lo(r):r,m;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?m=dm(d.substring(1),"/"):m=dm(d,i)):m=i,{pathname:m,search:$g(c),hash:Jg(f)}}function dm(r,i){let d=i.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?d.length>1&&d.pop():f!=="."&&d.push(f)}),d.length>1?d.join("/"):"/"}function Bc(r,i,d,c){return`Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Fg(r){return r.filter((i,d)=>d===0||i.route.path&&i.route.path.length>0)}function Am(r){let i=Fg(r);return i.map((d,c)=>c===i.length-1?d.pathname:d.pathnameBase)}function Qc(r,i,d,c=!1){let f;typeof r=="string"?f=Lo(r):(f={...r},xt(!f.pathname||!f.pathname.includes("?"),Bc("?","pathname","search",f)),xt(!f.pathname||!f.pathname.includes("#"),Bc("#","pathname","hash",f)),xt(!f.search||!f.search.includes("#"),Bc("#","search","hash",f)));let m=r===""||f.pathname==="",g=m?"/":f.pathname,k;if(g==null)k=d;else{let w=i.length-1;if(!c&&g.startsWith("..")){let z=g.split("/");for(;z[0]==="..";)z.shift(),w-=1;f.pathname=z.join("/")}k=w>=0?i[w]:"/"}let b=Zg(f,k),x=g&&g!=="/"&&g.endsWith("/"),T=(m||g===".")&&d.endsWith("/");return!b.pathname.endsWith("/")&&(x||T)&&(b.pathname+="/"),b}var Rn=r=>r.join("/").replace(/\/\/+/g,"/"),Ig=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),$g=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Jg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Wg=class{constructor(r,i,d,c=!1){this.status=r,this.statusText=i||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Pg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function e0(r){return r.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Em(r,i){let d=r;if(typeof d!="string"||!Qg.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,f=!1;if(Bm)try{let m=new URL(window.location.href),g=d.startsWith("//")?new URL(m.protocol+d):new URL(d),k=ea(g.pathname,i);g.origin===m.origin&&k!=null?d=k+g.search+g.hash:f=!0}catch{Mn(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Nm=["POST","PUT","PATCH","DELETE"];new Set(Nm);var t0=["GET",...Nm];new Set(t0);var Go=h.createContext(null);Go.displayName="DataRouter";var is=h.createContext(null);is.displayName="DataRouterState";var n0=h.createContext(!1),zm=h.createContext({isTransitioning:!1});zm.displayName="ViewTransition";var a0=h.createContext(new Map);a0.displayName="Fetchers";var o0=h.createContext(null);o0.displayName="Await";var gn=h.createContext(null);gn.displayName="Navigation";var Ul=h.createContext(null);Ul.displayName="Location";var ta=h.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var Zc=h.createContext(null);Zc.displayName="RouteError";var Rm="REACT_ROUTER_ERROR",l0="REDIRECT",r0="ROUTE_ERROR_RESPONSE";function s0(r){if(r.startsWith(`${Rm}:${l0}:{`))try{let i=JSON.parse(r.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function i0(r){if(r.startsWith(`${Rm}:${r0}:{`))try{let i=JSON.parse(r.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new Wg(i.status,i.statusText,i.data)}catch{}}function c0(r,{relative:i}={}){xt(Hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=h.useContext(gn),{hash:f,pathname:m,search:g}=Ll(r,{relative:i}),k=m;return d!=="/"&&(k=m==="/"?d:Rn([d,m])),c.createHref({pathname:k,search:g,hash:f})}function Hl(){return h.useContext(Ul)!=null}function Ca(){return xt(Hl(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(Ul).location}var Mm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Om(r){h.useContext(gn).static||h.useLayoutEffect(r)}function u0(){let{isDataRoute:r}=h.useContext(ta);return r?j0():d0()}function d0(){xt(Hl(),"useNavigate() may be used only in the context of a <Router> component.");let r=h.useContext(Go),{basename:i,navigator:d}=h.useContext(gn),{matches:c}=h.useContext(ta),{pathname:f}=Ca(),m=JSON.stringify(Am(c)),g=h.useRef(!1);return Om(()=>{g.current=!0}),h.useCallback((b,x={})=>{if(Mn(g.current,Mm),!g.current)return;if(typeof b=="number"){d.go(b);return}let T=Qc(b,JSON.parse(m),f,x.relative==="path");r==null&&i!=="/"&&(T.pathname=T.pathname==="/"?i:Rn([i,T.pathname])),(x.replace?d.replace:d.push)(T,x.state,x)},[i,d,m,f,r])}h.createContext(null);function Ll(r,{relative:i}={}){let{matches:d}=h.useContext(ta),{pathname:c}=Ca(),f=JSON.stringify(Am(d));return h.useMemo(()=>Qc(r,JSON.parse(f),c,i==="path"),[r,f,c,i])}function f0(r,i){return _m(r,i)}function _m(r,i,d){xt(Hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=h.useContext(gn),{matches:f}=h.useContext(ta),m=f[f.length-1],g=m?m.params:{},k=m?m.pathname:"/",b=m?m.pathnameBase:"/",x=m&&m.route;{let _=x&&x.path||"";Hm(k,!x||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${k}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let T=Ca(),w;if(i){let _=typeof i=="string"?Lo(i):i;xt(b==="/"||_.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${_.pathname}" was given in the \`location\` prop.`),w=_}else w=T;let z=w.pathname||"/",L=z;if(b!=="/"){let _=b.replace(/^\//,"").split("/");L="/"+z.replace(/^\//,"").split("/").slice(_.length).join("/")}let R=Tm(r,{pathname:L});Mn(x||R!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Mn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=g0(R&&R.map(_=>Object.assign({},_,{params:Object.assign({},g,_.params),pathname:Rn([b,c.encodeLocation?c.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?b:Rn([b,c.encodeLocation?c.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),f,d);return i&&U?h.createElement(Ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},U):U}function p0(){let r=k0(),i=Pg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:m},"ErrorBoundary")," or"," ",h.createElement("code",{style:m},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},i),d?h.createElement("pre",{style:f},d):null,g)}var m0=h.createElement(p0,null),Um=class extends h.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){this.props.onError?this.props.onError(r,i):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=i0(r.digest);d&&(r=d)}let i=r!==void 0?h.createElement(ta.Provider,{value:this.props.routeContext},h.createElement(Zc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?h.createElement(h0,{error:r},i):i}};Um.contextType=n0;var Ec=new WeakMap;function h0({children:r,error:i}){let{basename:d}=h.useContext(gn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let c=s0(i.digest);if(c){let f=Ec.get(i);if(f)throw f;let m=Em(c.location,d);if(Bm&&!Ec.get(i))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Ec.set(i,g),g}return h.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return r}function v0({routeContext:r,match:i,children:d}){let c=h.useContext(Go);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),h.createElement(ta.Provider,{value:r},d)}function g0(r,i=[],d){let c=d?.state;if(r==null){if(!c)return null;if(c.errors)r=c.matches;else if(i.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let f=r,m=c?.errors;if(m!=null){let T=f.findIndex(w=>w.route.id&&m?.[w.route.id]!==void 0);xt(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,T+1))}let g=!1,k=-1;if(d&&c){g=c.renderFallback;for(let T=0;T<f.length;T++){let w=f[T];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(k=T),w.route.id){let{loaderData:z,errors:L}=c,R=w.route.loader&&!z.hasOwnProperty(w.route.id)&&(!L||L[w.route.id]===void 0);if(w.route.lazy||R){d.isStatic&&(g=!0),k>=0?f=f.slice(0,k+1):f=[f[0]];break}}}}let b=d?.onError,x=c&&b?(T,w)=>{b(T,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:e0(c.matches),errorInfo:w})}:void 0;return f.reduceRight((T,w,z)=>{let L,R=!1,U=null,_=null;c&&(L=m&&w.route.id?m[w.route.id]:void 0,U=w.route.errorElement||m0,g&&(k<0&&z===0?(Hm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,_=null):k===z&&(R=!0,_=w.route.hydrateFallbackElement||null)));let Y=i.concat(f.slice(0,z+1)),ee=()=>{let Z;return L?Z=U:R?Z=_:w.route.Component?Z=h.createElement(w.route.Component,null):w.route.element?Z=w.route.element:Z=T,h.createElement(v0,{match:w,routeContext:{outlet:T,matches:Y,isDataRoute:c!=null},children:Z})};return c&&(w.route.ErrorBoundary||w.route.errorElement||z===0)?h.createElement(Um,{location:c.location,revalidation:c.revalidation,component:U,error:L,children:ee(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:x}):ee()},null)}function Fc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function b0(r){let i=h.useContext(Go);return xt(i,Fc(r)),i}function x0(r){let i=h.useContext(is);return xt(i,Fc(r)),i}function y0(r){let i=h.useContext(ta);return xt(i,Fc(r)),i}function Ic(r){let i=y0(r),d=i.matches[i.matches.length-1];return xt(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function w0(){return Ic("useRouteId")}function k0(){let r=h.useContext(Zc),i=x0("useRouteError"),d=Ic("useRouteError");return r!==void 0?r:i.errors?.[d]}function j0(){let{router:r}=b0("useNavigate"),i=Ic("useNavigate"),d=h.useRef(!1);return Om(()=>{d.current=!0}),h.useCallback(async(f,m={})=>{Mn(d.current,Mm),d.current&&(typeof f=="number"?await r.navigate(f):await r.navigate(f,{fromRouteId:i,...m}))},[r,i])}var fm={};function Hm(r,i,d){!i&&!fm[r]&&(fm[r]=!0,Mn(!1,d))}h.memo(S0);function S0({routes:r,future:i,state:d,isStatic:c,onError:f}){return _m(r,void 0,{state:d,isStatic:c,onError:f})}function Lm(r){xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function T0({basename:r="/",children:i=null,location:d,navigationType:c="POP",navigator:f,static:m=!1,unstable_useTransitions:g}){xt(!Hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let k=r.replace(/^\/*/,"/"),b=h.useMemo(()=>({basename:k,navigator:f,static:m,unstable_useTransitions:g,future:{}}),[k,f,m,g]);typeof d=="string"&&(d=Lo(d));let{pathname:x="/",search:T="",hash:w="",state:z=null,key:L="default",unstable_mask:R}=d,U=h.useMemo(()=>{let _=ea(x,k);return _==null?null:{location:{pathname:_,search:T,hash:w,state:z,key:L,unstable_mask:R},navigationType:c}},[k,x,T,w,z,L,c,R]);return Mn(U!=null,`<Router basename="${k}"> is not able to match the URL "${x}${T}${w}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:h.createElement(gn.Provider,{value:b},h.createElement(Ul.Provider,{children:i,value:U}))}function D0({children:r,location:i}){return f0(qc(r),i)}function qc(r,i=[]){let d=[];return h.Children.forEach(r,(c,f)=>{if(!h.isValidElement(c))return;let m=[...i,f];if(c.type===h.Fragment){d.push.apply(d,qc(c.props.children,m));return}xt(c.type===Lm,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xt(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=qc(c.props.children,m)),d.push(g)}),d}var os="get",ls="application/x-www-form-urlencoded";function cs(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function C0(r){return cs(r)&&r.tagName.toLowerCase()==="button"}function A0(r){return cs(r)&&r.tagName.toLowerCase()==="form"}function B0(r){return cs(r)&&r.tagName.toLowerCase()==="input"}function E0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function N0(r,i){return r.button===0&&(!i||i==="_self")&&!E0(r)}var Wr=null;function z0(){if(Wr===null)try{new FormData(document.createElement("form"),0),Wr=!1}catch{Wr=!0}return Wr}var R0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nc(r){return r!=null&&!R0.has(r)?(Mn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ls}"`),null):r}function M0(r,i){let d,c,f,m,g;if(A0(r)){let k=r.getAttribute("action");c=k?ea(k,i):null,d=r.getAttribute("method")||os,f=Nc(r.getAttribute("enctype"))||ls,m=new FormData(r)}else if(C0(r)||B0(r)&&(r.type==="submit"||r.type==="image")){let k=r.form;if(k==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||k.getAttribute("action");if(c=b?ea(b,i):null,d=r.getAttribute("formmethod")||k.getAttribute("method")||os,f=Nc(r.getAttribute("formenctype"))||Nc(k.getAttribute("enctype"))||ls,m=new FormData(k,r),!z0()){let{name:x,type:T,value:w}=r;if(T==="image"){let z=x?`${x}.`:"";m.append(`${z}x`,"0"),m.append(`${z}y`,"0")}else x&&m.append(x,w)}}else{if(cs(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=os,c=null,f=ls,g=r}return m&&f==="text/plain"&&(g=m,m=void 0),{action:c,method:d.toLowerCase(),encType:f,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $c(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}function O0(r,i,d,c){let f=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:i&&ea(f.pathname,i)==="/"?f.pathname=`${i.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function _0(r,i){if(r.id in i)return i[r.id];try{let d=await import(r.module);return i[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function U0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function H0(r,i,d){let c=await Promise.all(r.map(async f=>{let m=i.routes[f.route.id];if(m){let g=await _0(m,d);return g.links?g.links():[]}return[]}));return q0(c.flat(1).filter(U0).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function pm(r,i,d,c,f,m){let g=(b,x)=>d[x]?b.route.id!==d[x].route.id:!0,k=(b,x)=>d[x].pathname!==b.pathname||d[x].route.path?.endsWith("*")&&d[x].params["*"]!==b.params["*"];return m==="assets"?i.filter((b,x)=>g(b,x)||k(b,x)):m==="data"?i.filter((b,x)=>{let T=c.routes[b.route.id];if(!T||!T.hasLoader)return!1;if(g(b,x)||k(b,x))return!0;if(b.route.shouldRevalidate){let w=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function L0(r,i,{includeHydrateFallback:d}={}){return G0(r.map(c=>{let f=i.routes[c.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),d&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function G0(r){return[...new Set(r)]}function Y0(r){let i={},d=Object.keys(r).sort();for(let c of d)i[c]=r[c];return i}function q0(r,i){let d=new Set;return new Set(i),r.reduce((c,f)=>{let m=JSON.stringify(Y0(f));return d.has(m)||(d.add(m),c.push({key:m,link:f})),c},[])}function Gm(){let r=h.useContext(Go);return $c(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function V0(){let r=h.useContext(is);return $c(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Jc=h.createContext(void 0);Jc.displayName="FrameworkContext";function Ym(){let r=h.useContext(Jc);return $c(r,"You must render this element inside a <HydratedRouter> element"),r}function X0(r,i){let d=h.useContext(Jc),[c,f]=h.useState(!1),[m,g]=h.useState(!1),{onFocus:k,onBlur:b,onMouseEnter:x,onMouseLeave:T,onTouchStart:w}=i,z=h.useRef(null);h.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let U=Y=>{Y.forEach(ee=>{g(ee.isIntersecting)})},_=new IntersectionObserver(U,{threshold:.5});return z.current&&_.observe(z.current),()=>{_.disconnect()}}},[r]),h.useEffect(()=>{if(c){let U=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(U)}}},[c]);let L=()=>{f(!0)},R=()=>{f(!1),g(!1)};return d?r!=="intent"?[m,z,{}]:[m,z,{onFocus:Rl(k,L),onBlur:Rl(b,R),onMouseEnter:Rl(x,L),onMouseLeave:Rl(T,R),onTouchStart:Rl(w,L)}]:[!1,z,{}]}function Rl(r,i){return d=>{r&&r(d),d.defaultPrevented||i(d)}}function K0({page:r,...i}){let{router:d}=Gm(),c=h.useMemo(()=>Tm(d.routes,r,d.basename),[d.routes,r,d.basename]);return c?h.createElement(Z0,{page:r,matches:c,...i}):null}function Q0(r){let{manifest:i,routeModules:d}=Ym(),[c,f]=h.useState([]);return h.useEffect(()=>{let m=!1;return H0(r,i,d).then(g=>{m||f(g)}),()=>{m=!0}},[r,i,d]),c}function Z0({page:r,matches:i,...d}){let c=Ca(),{future:f,manifest:m,routeModules:g}=Ym(),{basename:k}=Gm(),{loaderData:b,matches:x}=V0(),T=h.useMemo(()=>pm(r,i,x,m,c,"data"),[r,i,x,m,c]),w=h.useMemo(()=>pm(r,i,x,m,c,"assets"),[r,i,x,m,c]),z=h.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let U=new Set,_=!1;if(i.forEach(ee=>{let Z=m.routes[ee.route.id];!Z||!Z.hasLoader||(!T.some($=>$.route.id===ee.route.id)&&ee.route.id in b&&g[ee.route.id]?.shouldRevalidate||Z.hasClientLoader?_=!0:U.add(ee.route.id))}),U.size===0)return[];let Y=O0(r,k,f.unstable_trailingSlashAwareDataRequests,"data");return _&&U.size>0&&Y.searchParams.set("_routes",i.filter(ee=>U.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[Y.pathname+Y.search]},[k,f.unstable_trailingSlashAwareDataRequests,b,c,m,T,i,r,g]),L=h.useMemo(()=>L0(w,m),[w,m]),R=Q0(w);return h.createElement(h.Fragment,null,z.map(U=>h.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...d})),L.map(U=>h.createElement("link",{key:U,rel:"modulepreload",href:U,...d})),R.map(({key:U,link:_})=>h.createElement("link",{key:U,nonce:d.nonce,..._,crossOrigin:_.crossOrigin??d.crossOrigin})))}function F0(...r){return i=>{r.forEach(d=>{typeof d=="function"?d(i):d!=null&&(d.current=i)})}}var I0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{I0&&(window.__reactRouterVersion="7.13.1")}catch{}function $0({basename:r,children:i,unstable_useTransitions:d,window:c}){let f=h.useRef();f.current==null&&(f.current=Bg({window:c,v5Compat:!0}));let m=f.current,[g,k]=h.useState({action:m.action,location:m.location}),b=h.useCallback(x=>{d===!1?k(x):h.startTransition(()=>k(x))},[d]);return h.useLayoutEffect(()=>m.listen(b),[m,b]),h.createElement(T0,{basename:r,children:i,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:d})}var qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vm=h.forwardRef(function({onClick:i,discover:d="render",prefetch:c="none",relative:f,reloadDocument:m,replace:g,unstable_mask:k,state:b,target:x,to:T,preventScrollReset:w,viewTransition:z,unstable_defaultShouldRevalidate:L,...R},U){let{basename:_,navigator:Y,unstable_useTransitions:ee}=h.useContext(gn),Z=typeof T=="string"&&qm.test(T),$=Em(T,_);T=$.to;let J=c0(T,{relative:f}),ie=Ca(),W=null;if(k){let ne=Qc(k,[],ie.unstable_mask?ie.unstable_mask.pathname:"/",!0);_!=="/"&&(ne.pathname=ne.pathname==="/"?_:Rn([_,ne.pathname])),W=Y.createHref(ne)}let[K,I,pe]=X0(c,R),we=eb(T,{replace:g,unstable_mask:k,state:b,target:x,preventScrollReset:w,relative:f,viewTransition:z,unstable_defaultShouldRevalidate:L,unstable_useTransitions:ee});function de(ne){i&&i(ne),ne.defaultPrevented||we(ne)}let ve=!($.isExternal||m),ke=h.createElement("a",{...R,...pe,href:(ve?W:void 0)||$.absoluteURL||J,onClick:ve?de:i,ref:F0(U,I),target:x,"data-discover":!Z&&d==="render"?"true":void 0});return K&&!Z?h.createElement(h.Fragment,null,ke,h.createElement(K0,{page:J})):ke});Vm.displayName="Link";var J0=h.forwardRef(function({"aria-current":i="page",caseSensitive:d=!1,className:c="",end:f=!1,style:m,to:g,viewTransition:k,children:b,...x},T){let w=Ll(g,{relative:x.relative}),z=Ca(),L=h.useContext(is),{navigator:R,basename:U}=h.useContext(gn),_=L!=null&&lb(w)&&k===!0,Y=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,ee=z.pathname,Z=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;d||(ee=ee.toLowerCase(),Z=Z?Z.toLowerCase():null,Y=Y.toLowerCase()),Z&&U&&(Z=ea(Z,U)||Z);const $=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let J=ee===Y||!f&&ee.startsWith(Y)&&ee.charAt($)==="/",ie=Z!=null&&(Z===Y||!f&&Z.startsWith(Y)&&Z.charAt(Y.length)==="/"),W={isActive:J,isPending:ie,isTransitioning:_},K=J?i:void 0,I;typeof c=="function"?I=c(W):I=[c,J?"active":null,ie?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let pe=typeof m=="function"?m(W):m;return h.createElement(Vm,{...x,"aria-current":K,className:I,ref:T,style:pe,to:g,viewTransition:k},typeof b=="function"?b(W):b)});J0.displayName="NavLink";var W0=h.forwardRef(({discover:r="render",fetcherKey:i,navigate:d,reloadDocument:c,replace:f,state:m,method:g=os,action:k,onSubmit:b,relative:x,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:z,...L},R)=>{let{unstable_useTransitions:U}=h.useContext(gn),_=ab(),Y=ob(k,{relative:x}),ee=g.toLowerCase()==="get"?"get":"post",Z=typeof k=="string"&&qm.test(k),$=J=>{if(b&&b(J),J.defaultPrevented)return;J.preventDefault();let ie=J.nativeEvent.submitter,W=ie?.getAttribute("formmethod")||g,K=()=>_(ie||J.currentTarget,{fetcherKey:i,method:W,navigate:d,replace:f,state:m,relative:x,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:z});U&&d!==!1?h.startTransition(()=>K()):K()};return h.createElement("form",{ref:R,method:ee,action:Y,onSubmit:c?b:$,...L,"data-discover":!Z&&r==="render"?"true":void 0})});W0.displayName="Form";function P0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xm(r){let i=h.useContext(Go);return xt(i,P0(r)),i}function eb(r,{target:i,replace:d,unstable_mask:c,state:f,preventScrollReset:m,relative:g,viewTransition:k,unstable_defaultShouldRevalidate:b,unstable_useTransitions:x}={}){let T=u0(),w=Ca(),z=Ll(r,{relative:g});return h.useCallback(L=>{if(N0(L,i)){L.preventDefault();let R=d!==void 0?d:_l(w)===_l(z),U=()=>T(r,{replace:R,unstable_mask:c,state:f,preventScrollReset:m,relative:g,viewTransition:k,unstable_defaultShouldRevalidate:b});x?h.startTransition(()=>U()):U()}},[w,T,z,d,c,f,i,r,m,g,k,b,x])}var tb=0,nb=()=>`__${String(++tb)}__`;function ab(){let{router:r}=Xm("useSubmit"),{basename:i}=h.useContext(gn),d=w0(),c=r.fetch,f=r.navigate;return h.useCallback(async(m,g={})=>{let{action:k,method:b,encType:x,formData:T,body:w}=M0(m,i);if(g.navigate===!1){let z=g.fetcherKey||nb();await c(z,d,g.action||k,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:w,formMethod:g.method||b,formEncType:g.encType||x,flushSync:g.flushSync})}else await f(g.action||k,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:w,formMethod:g.method||b,formEncType:g.encType||x,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,f,i,d])}function ob(r,{relative:i}={}){let{basename:d}=h.useContext(gn),c=h.useContext(ta);xt(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),m={...Ll(r||".",{relative:i})},g=Ca();if(r==null){m.search=g.search;let k=new URLSearchParams(m.search),b=k.getAll("index");if(b.some(T=>T==="")){k.delete("index"),b.filter(w=>w).forEach(w=>k.append("index",w));let T=k.toString();m.search=T?`?${T}`:""}}return(!r||r===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(m.pathname=m.pathname==="/"?d:Rn([d,m.pathname])),_l(m)}function lb(r,{relative:i}={}){let d=h.useContext(zm);xt(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Xm("useViewTransitionState"),f=Ll(r,{relative:i});if(!d.isTransitioning)return!1;let m=ea(d.currentLocation.pathname,c)||d.currentLocation.pathname,g=ea(d.nextLocation.pathname,c)||d.nextLocation.pathname;return rs(f.pathname,g)!=null||rs(f.pathname,m)!=null}var rb=Sm();function Dn(r,{insertAt:i}={}){if(!r||typeof document>"u")return;const d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",i==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=r:c.appendChild(document.createTextNode(r))}Dn(`@layer components {
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
`);function sb(r,i){return[r,typeof i=="string"?i:""].filter(Boolean).join(" ")}function _o(r,i){const d=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return r==="default"?d:`var(--oks-color-${r}-${i}, ${d})`}var B=h.forwardRef((r,i)=>{const{children:d,variant:c="solid",size:f="md",color:m="default",radius:g="md",startContent:k,endContent:b,spinner:x,spinnerPlacement:T="start",fullWidth:w=!1,isIconOnly:z=!1,isDisabled:L=!1,isLoading:R=!1,disableRipple:U=!1,disableAnimation:_=!1,className:Y,type:ee="button",style:Z,disabled:$,onMouseDown:J,onPointerDown:ie,onPointerEnter:W,onPointerLeave:K,onPointerUp:I,onPointerCancel:pe,onClick:we,onKeyDown:de,onKeyUp:ve,onPress:ke,onPressStart:ne,onPressEnd:C,onPressChange:q,onPressUp:P,onFocus:ye,onBlur:me,...v}=r,S=$||L,[V,A]=h.useState([]),ae=h.useRef(!1),re=v["aria-label"];v["aria-labelledby"];const ce=typeof re=="string"?re:void 0,De={"--oks-button-tone":_o(m,500),"--oks-button-tone-hover":_o(m,600),"--oks-button-tone-active":_o(m,700),"--oks-button-tone-50":_o(m,50),"--oks-button-tone-100":_o(m,100),"--oks-button-tone-700":_o(m,700)},F=()=>{const fe=globalThis?.crypto?.randomUUID?.();return typeof fe=="string"?fe:`${Date.now()}-${Math.random()}`},ue=typeof globalThis.matchMedia=="function"&&globalThis.matchMedia("(prefers-reduced-motion: reduce)")?.matches,[Ce,Ne]=h.useState(!1),[He,Ze]=h.useState(!1),[$e,te]=h.useState(!1),[le,Be]=h.useState(!1),oe=fe=>{S||R||(le||(ne?.(fe),q?.(!0)),Be(!0))},he=fe=>{le&&(C?.(fe),q?.(!1)),Be(!1)},Ee=h.useCallback((fe,gt,bt)=>{if(_||ue)return;const $t=fe.getBoundingClientRect(),yn=Math.max(gt,$t.width-gt),Cn=Math.max(bt,$t.height-bt),$a=Math.ceil(Math.sqrt(yn*yn+Cn*Cn)*2),Aa=F();A(us=>{const Ba=[...us,{id:Aa,x:gt,y:bt,size:$a}];return Ba.length>10&&Ba.splice(0,Ba.length-10),Ba})},[_,ue]),Je=h.useCallback(fe=>{A(gt=>gt.filter(bt=>bt.id!==fe))},[]),be=fe=>{if(oe(fe),!S&&!R&&!U){ae.current=!0,globalThis.setTimeout(()=>{ae.current=!1},0);const gt=fe.currentTarget,bt=gt.getBoundingClientRect();if(typeof fe.clientX=="number"&&typeof fe.clientY=="number"){const $t=fe.clientX-bt.left,yn=fe.clientY-bt.top;Ee(gt,$t,yn)}}ie?.(fe)},ze=fe=>{if(!S&&!R&&!U){if(ae.current){J?.(fe);return}const gt=fe.currentTarget,bt=gt.getBoundingClientRect(),$t=fe.clientX-bt.left,yn=fe.clientY-bt.top;Ee(gt,$t,yn)}J?.(fe)},_e=fe=>{if((fe.key==="Enter"||fe.key===" ")&&oe(fe),!S&&!R&&!U&&(fe.key==="Enter"||fe.key===" ")){const gt=fe.currentTarget,bt=gt.getBoundingClientRect();Ee(gt,bt.width/2,bt.height/2)}de?.(fe)},et=fe=>{(fe.key==="Enter"||fe.key===" ")&&(!S&&!R&&P?.(fe),he(fe)),ve?.(fe)},ot=fe=>{if(S||R){fe.preventDefault(),fe.stopPropagation();return}ke?.(fe),we?.(fe)},ct=fe=>{Ne(!0),W?.(fe)},Ae=fe=>{Ne(!1),he(fe),K?.(fe)},Le=fe=>{!S&&!R&&P?.(fe),he(fe),I?.(fe)},At=fe=>{he(fe),pe?.(fe)},bn=fe=>{Ze(!1),te(!1),he(fe),me?.(fe)},xn=fe=>{Ze(!0);const gt=fe?.currentTarget,bt=typeof gt?.matches=="function"?gt.matches(":focus-visible"):!1;te(bt),ye?.(fe)},Gt=x??o.jsx("span",{className:"oksButtonSpinner","aria-hidden":"true"}),Et=z&&R;return o.jsxs("button",{...v,"aria-label":ce,ref:i,type:ee,disabled:S,onClick:ot,onMouseDown:ze,onPointerDown:be,onPointerEnter:ct,onPointerLeave:Ae,onPointerUp:Le,onPointerCancel:At,onKeyDown:_e,onKeyUp:et,onFocus:xn,onBlur:bn,"data-hover":Ce?"true":"false","data-focus":He?"true":"false","data-focus-visible":$e?"true":"false","data-disabled":S?"true":"false","data-pressed":le?"true":"false","data-loading":R?"true":"false","data-motion":_||ue?"reduced":"default","data-variant":c,"data-color":m,"data-size":f,"data-radius":g,"data-icon-only":z?"true":"false","data-full-width":w?"true":"false",className:sb("oksButton",Y),style:{...De,...Z},children:[V.map(fe=>o.jsx("span",{className:"oksButtonRipple","aria-hidden":"true",style:{left:`${fe.x}px`,top:`${fe.y}px`,width:`${fe.size}px`,height:`${fe.size}px`},onAnimationEnd:()=>Je(fe.id)},fe.id)),R&&T==="start"&&!Et?o.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"start",children:Gt}):null,k!==void 0?o.jsx("span",{className:"oksButtonStartContent",children:k}):null,Et?o.jsx("span",{className:"oksButtonIconOnly","aria-hidden":"true",children:Gt}):z?o.jsx("span",{className:"oksButtonIconOnly",children:d}):d!=null?o.jsx("span",{className:"oksButtonLabel",children:d}):null,b!==void 0?o.jsx("span",{className:"oksButtonEndContent",children:b}):null,R&&T==="end"&&!Et?o.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"end",children:Gt}):null]})});B.displayName="Button";Dn(`@layer components {
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
`);function ib(r,i){return[r,typeof i=="string"?i:""].filter(Boolean).join(" ")}var Vc=h.forwardRef((r,i)=>{const{children:d,variant:c="solid",color:f="default",size:m="md",radius:g="md",fullWidth:k=!1,isDisabled:b=!1,className:x,role:T="group",style:w,...z}=r,L=h.Children.map(d,R=>{if(!h.isValidElement(R)||R.type!==B)return R;const U={};return R.props.variant===void 0&&(U.variant=c),R.props.color===void 0&&(U.color=f),R.props.size===void 0&&(U.size=m),R.props.radius===void 0&&(U.radius=g),R.props.fullWidth===void 0&&(U.fullWidth=k),R.props.isDisabled===void 0&&(U.isDisabled=b),h.cloneElement(R,U)});return o.jsx("div",{...z,ref:i,role:T,"data-variant":c,"data-color":f,"data-size":m,"data-radius":g,"data-full-width":k?"true":"false","data-disabled":b?"true":"false",className:ib("oksButtonGroup",x),style:w,children:L})});Vc.displayName="ButtonGroup";function Km(){const[r,i]=h.useState(!1);return h.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const d=window.matchMedia("(prefers-reduced-motion: reduce)"),c=()=>i(!!d.matches);return c(),typeof d.addEventListener=="function"?(d.addEventListener("change",c),()=>d.removeEventListener("change",c)):(d.addListener(c),()=>d.removeListener(c))},[]),r}function Wc({children:r,container:i}){if(typeof document>"u")return null;const d=i??document.body;return d?rb.createPortal(r,d):null}function Qm({type:r,size:i=18,...d}){const c={width:i,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,...d};return r==="default"?o.jsxs("svg",{...c,children:[o.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"M10 10h.01",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round"})]}):r==="success"?o.jsxs("svg",{...c,children:[o.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"m6.1 10.3 2.2 2.2 5.6-5.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}):r==="warning"?o.jsxs("svg",{...c,children:[o.jsx("path",{d:"M10 2.2 18 17.8H2L10 2.2Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 7v4.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),o.jsx("path",{d:"M10 14.2h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):r==="error"?o.jsxs("svg",{...c,children:[o.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"M7.2 7.2 12.8 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),o.jsx("path",{d:"M12.8 7.2 7.2 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}):r==="loading"?o.jsx("svg",{...c,children:o.jsx("path",{d:"M10 3.2a6.8 6.8 0 1 0 6.8 6.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}):r==="info"?o.jsxs("svg",{...c,children:[o.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"M10 8.2V14",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),o.jsx("path",{d:"M10 6h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):null}function Zm({size:r=16,...i}){return o.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...i,children:[o.jsx("path",{d:"M6.2 6.2 13.8 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),o.jsx("path",{d:"M13.8 6.2 6.2 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}function cb(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var Fm=h.forwardRef(({ariaLabel:r,iconSize:i=16,icon:d,iconClassName:c,...f},m)=>{const g=d===void 0?o.jsx(Zm,{size:i,className:c}):c?h.isValidElement(d)?h.cloneElement(d,{className:cb(d.props.className,c)}):o.jsx("span",{className:c,children:d}):d;return o.jsx("button",{ref:m,type:"button","aria-label":r,...f,children:g})});Fm.displayName="CloseButton";Dn(`@layer components {
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
`);var Im=h.createContext(null);function Lt(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function ub(r){if(!r||typeof r!="object"||h.isValidElement(r))return!1;const i=r;return"type"in i||"tone"in i||"color"in i||"severity"in i||"variant"in i||"radius"in i||"size"in i||"position"in i||"placement"in i||"duration"in i||"timeout"in i||"persistent"in i||"dismissible"in i||"hideCloseButton"in i||"action"in i||"title"in i||"message"in i||"description"in i||"icon"in i||"showIcon"in i||"hideIcon"in i||"endContent"in i||"closeIcon"in i||"loadingComponent"in i||"promise"in i||"classNames"in i||"id"in i||"className"in i||"style"in i}function db(r){const i={};for(const d in r)Object.prototype.hasOwnProperty.call(r,d)&&r[d]!==void 0&&(i[d]=r[d]);return i}function fb(r,i){return ub(r)?{...r,...i??{}}:{message:r,...i??{}}}function pb(r){return r==="success"?"success":r==="warning"?"warning":r==="error"?"danger":r==="info"?"info":"primary"}function $m(r){return!0}function mb(r){return"alert"}function Jm(r){return r==="flat"?"soft":r==="bordered"?"outline":r}function Wm(r){return r==="success"?"success":r==="warning"?"warning":r==="danger"?"error":"default"}function Pm(r){if(!(!r||r==="default"))return r}function hb(r,i){const d=Jm(r),c=`var(--oks-color-${i}-600, var(--oks-color-primary-600, #2563eb))`,f=`var(--oks-color-${i}-50, var(--oks-color-primary-50, #eff6ff))`,m=`var(--oks-color-${i}-900, var(--oks-color-primary-900, #0b1220))`;return d==="solid"?{accent:c,bg:c,fg:"white",border:c}:d==="outline"?{accent:c,bg:"transparent",fg:m,border:c}:{accent:c,bg:f,fg:m,border:c}}function vb(r,i){return i.type==="UPSERT"?[i.item,...r.filter(c=>c.id!==i.item.id)].slice(0,Math.max(1,i.maxToasts)):i.type==="PATCH"?r.map(d=>{if(d.id!==i.id)return d;const c=db(i.patch),f=c.severity??c.color,m=c.type??(f!==void 0?Wm(f):d.type),g=c.tone??(f!==void 0?Pm(f)??d.tone:d.tone),k=c.variant??d.variant,b=c.size??d.size,x=c.placement??c.position??d.position,T=c.persistent===!0?null:c.timeout!==void 0?c.timeout:c.duration!==void 0?c.duration:d.duration,w=c.hideIcon!==void 0?!c.hideIcon:c.showIcon!==void 0?c.showIcon:c.type!==void 0||f!==void 0?$m():d.showIcon,z=c.shouldShowTimeoutProgress??c.showDurationBar;return{...d,...c,type:m,tone:g,variant:k,size:b,position:x,duration:T,message:c.message!==void 0?c.message:d.message,description:c.description!==void 0?c.description:d.description,showDurationBar:!!z&&T!=null,dismissible:c.dismissible??(c.hideCloseButton!==void 0?!c.hideCloseButton:d.dismissible),showIcon:w,state:d.state}}):i.type==="MARK_CLOSING"?r.map(d=>d.id===i.id?{...d,state:"closing",duration:null}:d):i.type==="MARK_ALL_CLOSING"?r.map(d=>({...d,state:"closing",duration:null})):i.type==="REMOVE"?r.filter(d=>d.id!==i.id):r}function gb(){const r=h.useContext(Im);if(!r)throw new Error("useToast must be used inside ToastProvider");return r}var on=null,Fa=((r,i)=>on?on.show(r,i):(console.warn("Toast provider not configured"),-1)),bb=((r,i)=>Fa(r,i)),Pe=Object.assign(bb,{show:Fa,info:(r,i)=>Fa(r,{...i??{},type:"info"}),success:(r,i)=>Fa(r,{...i??{},type:"success"}),warning:(r,i)=>Fa(r,{...i??{},type:"warning"}),error:(r,i)=>Fa(r,{...i??{},type:"error"}),update:(r,i)=>{if(!on){console.warn("Toast provider not configured");return}on.update(r,i)},dismiss:r=>{if(!on){console.warn("Toast provider not configured");return}on.dismiss(r)},dismissAll:()=>{if(!on){console.warn("Toast provider not configured");return}on.dismissAll()},promise:(r,i)=>on?on.promise(r,i):(console.warn("Toast provider not configured"),-1)});function Xc(r){return Fa(r)}function xb({item:r,dataMotion:i,onDismiss:d,stackIndex:c=0}){const f=r.duration,m=h.useRef(null),g=h.useRef(0),k=h.useRef(f??0),b=h.useRef(null),x=c===0&&r.showDurationBar&&f!=null,T=h.useCallback((we,de)=>{const ve=b.current;if(ve){if(ve.style.transform=`scaleX(${Math.max(0,Math.min(1,we))})`,i==="reduced"||de==null){ve.style.transition="none";return}ve.style.transition=`transform ${de}ms linear`}},[i]),w=h.useCallback(we=>{x&&(T(1,null),i!=="reduced"&&requestAnimationFrame(()=>T(0,we)))},[x,i,T]),z=h.useCallback(()=>{m.current!=null&&clearTimeout(m.current),m.current=null},[]),L=h.useCallback(we=>{z(),!(we<=0)&&(g.current=Date.now(),m.current=setTimeout(()=>d(r.id),we))},[z,r.id,d]),R=h.useCallback(()=>{if(f==null||m.current==null)return;const we=Date.now()-g.current;if(k.current=Math.max(0,k.current-we),z(),x){const de=f>0?k.current/f:0;T(de,null)}},[x,z,f,T]),U=h.useCallback(()=>{f!=null&&r.state==="open"&&(L(k.current),x&&T(0,k.current))},[L,x,f,r.state,T]);h.useEffect(()=>{if(z(),f!=null)return k.current=f,c===0&&r.state==="open"&&(L(f),w(f)),()=>z()},[L,z,f,r.state,c,w]),h.useEffect(()=>{r.state!=="open"&&z()},[z,r.state]);const _=mb(r.type),Y=hb(r.variant,r.tone),ee=Jm(r.variant),Z=ee==="solid"?Y.fg:Y.accent,$=ee==="solid"?`color-mix(in srgb, ${Y.fg} 14%, transparent)`:`color-mix(in srgb, ${Y.accent} 12%, transparent)`,J=(r.title??null)!==null&&r.title!==void 0,ie=r.description??r.message,W=(ie??null)!==null&&ie!==void 0,K=r.state==="closing"?"exiting":"entering",I=r.classNames,pe={"--oks-toast-accent":Y.accent,"--oks-toast-bg":Y.bg,"--oks-toast-fg":Y.fg,"--oks-toast-border":Y.border,"--oks-toast-icon-fg":Z,"--oks-toast-icon-bg":$,"--oks-toast-stack-index":String(c),...r.style};return o.jsx("div",{role:_,"aria-atomic":"true","data-has-title":J?"true":"false","data-has-description":W?"true":"false","data-animation":K,"data-placement":r.position,"data-drag-value":"0","data-motion":i,"data-state":r.state,"data-size":r.size,"data-radius":r.radius??"md","data-stack-index":String(c),className:Lt(Lt(Lt("oksToast",c>0?"oksToastStacked":""),I?.base),r.className),style:pe,...c===0?{onMouseEnter:R,onMouseLeave:U,onFocusCapture:R,onBlurCapture:U}:{},children:o.jsxs("div",{className:Lt(Lt("oksToastSurface",I?.motionDiv),Lt(I?.base,r.className)),children:[r.type==="loading"&&r.loadingComponent?o.jsx("div",{className:Lt("oksToastLoading",I?.loadingComponent),"aria-hidden":"true",children:r.loadingComponent}):r.showIcon?o.jsx("div",{className:Lt("oksToastIcon",I?.icon),"aria-hidden":"true",children:r.icon??o.jsx(Qm,{type:r.type})}):null,o.jsxs("div",{className:Lt("oksToastBody",I?.content),children:[J&&o.jsx("div",{className:Lt("oksToastTitle",I?.title),children:r.title}),W&&o.jsx("div",{className:Lt("oksToastMessage",I?.description),children:ie})]}),c===0&&(r.action||r.endContent||r.dismissible)&&o.jsxs("div",{className:Lt("oksToastControls",I?.wrapper),children:[r.action&&o.jsx("button",{type:"button",className:"oksToastAction",onClick:()=>r.action?.onClick?.(),children:r.action.label}),r.endContent,r.dismissible&&o.jsx(Fm,{ariaLabel:"Close",className:Lt("oksToastClose",I?.closeButton),...r.closeIcon!==void 0?{icon:r.closeIcon}:{},...I?.closeIcon!==void 0?{iconClassName:I.closeIcon}:{},onClick:()=>d(r.id)})]}),x&&o.jsx("div",{className:Lt("oksToastProgressTrack",I?.progressTrack),"aria-hidden":"true",children:o.jsx("div",{ref:b,className:Lt("oksToastProgressIndicator",I?.progressIndicator)})})]})})}function yb({children:r,position:i,placement:d,maxToasts:c,maxVisibleToasts:f,defaultDuration:m=6e3,container:g,motion:k="auto",disableAnimation:b,toastOffset:x=0,toastProps:T,regionProps:w,className:z,style:L}){const R=Km(),U=d??i??"bottom-right",_=f??c??3,Y=c!==void 0?c:Math.max(_,12),ee=b===!0||k==="reduced"||k==="auto"&&R?"reduced":"default",Z=ee==="reduced"?0:260,$=h.useRef(0),J=h.useRef(new Map),[ie,W]=h.useReducer(vb,[]),K=h.useRef([]);K.current=ie;const I=h.useCallback(v=>{const S=J.current.get(v);if(S!=null&&clearTimeout(S),Z<=0){W({type:"REMOVE",id:v});return}const V=setTimeout(()=>{J.current.delete(v),W({type:"REMOVE",id:v})},Z);J.current.set(v,V)},[Z]),pe=h.useCallback(v=>{const S=K.current.find(V=>V.id===v);S&&S.state!=="closing"&&S.onDismiss?.(v),W({type:"MARK_CLOSING",id:v}),I(v)},[I]),we=h.useCallback(()=>{const v=K.current;for(const S of v)S.state!=="closing"&&S.onDismiss?.(S.id);W({type:"MARK_ALL_CLOSING"});for(const S of v)I(S.id)},[I]),de=h.useCallback((v,S)=>{W({type:"PATCH",id:v,patch:S})},[]),ve=h.useCallback(((v,S)=>{const V=fb(v,S),A={...T??{},...V},ae=A.severity??A.color,re=A.type??(ae?Wm(ae):"default"),ce=A.tone??(ae?Pm(ae):void 0)??pb(re),De=A.variant??"flat",F=A.size??"md",ue=A.placement??A.position??U,Ce=A.hideCloseButton!==void 0?!A.hideCloseButton:A.dismissible??!0,Ne=!!A.persistent,He=A.timeout??A.duration,Ze=Ne?null:He!==void 0?He:m,$e=!!(A.shouldShowTimeoutProgress??A.showDurationBar)&&Ze!=null,te=A.hideIcon!==void 0?!A.hideIcon:A.showIcon??$m(),le=A.id??++$.current,oe={...{id:le,createdAt:Date.now(),state:"open",type:re,tone:ce,variant:De,radius:A.radius??"md",size:F,position:ue,duration:Ze,showDurationBar:$e,dismissible:Ce,showIcon:te},...A.title!==void 0?{title:A.title}:{},...A.message!==void 0?{message:A.message}:{},...A.description!==void 0?{description:A.description}:{},...A.action!==void 0?{action:A.action}:{},...A.icon!==void 0?{icon:A.icon}:{},...A.endContent!==void 0?{endContent:A.endContent}:{},...A.closeIcon!==void 0?{closeIcon:A.closeIcon}:{},...A.loadingComponent!==void 0?{loadingComponent:A.loadingComponent}:{},...A.classNames!==void 0?{classNames:A.classNames}:{},...A.onDismiss!==void 0?{onDismiss:A.onDismiss}:{},...A.className!==void 0?{className:A.className}:{},...A.style!==void 0?{style:A.style}:{}};if(A.promise){const he=A.promise,Ee=He!==void 0?He:m,Je=A.shouldShowTimeoutProgress??A.showDurationBar;return W({type:"UPSERT",item:{...oe,type:"loading",duration:null,showDurationBar:!1,dismissible:Ce},maxToasts:Y}),he.then(()=>de(le,{type:"success",timeout:Ee,...Je!==void 0?{shouldShowTimeoutProgress:Je}:{},dismissible:Ce}),()=>de(le,{type:"error",timeout:Ee,...Je!==void 0?{shouldShowTimeoutProgress:Je}:{},dismissible:Ce})),le}return W({type:"UPSERT",item:oe,maxToasts:Y}),le}),[m,U,Y,T,de]),ke=h.useCallback((v,S)=>{const V=typeof v=="function"?v():v,A=ve({...S.loading??{},type:S.loading?.type??"loading",persistent:!0,dismissible:S.loading?.dismissible??!1});return V.then(ae=>{const re=S.success?.(ae)??{};de(A,{...re,type:re.type??"success",persistent:!1})},ae=>{const re=S.error?.(ae)??{};de(A,{...re,type:re.type??"error",persistent:!1})}),A},[ve,de]),ne=h.useMemo(()=>({show:ve,info:(v,S)=>ve(v,{...S??{},type:"info"}),success:(v,S)=>ve(v,{...S??{},type:"success"}),warning:(v,S)=>ve(v,{...S??{},type:"warning"}),error:(v,S)=>ve(v,{...S??{},type:"error"}),update:de,dismiss:pe,dismissAll:we,promise:ke}),[pe,we,ke,ve,de]);h.useEffect(()=>(on=ne,()=>{on===ne&&(on=null)}),[ne]),h.useEffect(()=>{if(typeof window>"u")return;const v=S=>{if(S.key!=="Escape")return;const V=ie[0];V&&pe(V.id)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[pe,ie]),h.useEffect(()=>()=>{for(const v of J.current.values())clearTimeout(v);J.current.clear()},[]);const C=h.useMemo(()=>{const v={};for(const S of ie){const V=S.position,A=v[V]??[];A.push(S),v[V]=A}return v},[ie]),{classNames:q,style:P,...ye}=w??{},me={"--oks-toast-offset":`${x}px`,...L??{},...P??{}};return o.jsxs(Im.Provider,{value:ne,children:[r,o.jsx(Wc,{container:g,children:Object.entries(C).map(([v,S])=>{const V=v,A=Math.max(1,_),re=S.slice(0,A),ce=Math.max(0,S.length-A);return o.jsx("div",{"data-position":V,className:Lt(Lt("oksToastViewport",q?.base),z),style:me,"aria-live":"polite",...ye,children:o.jsx("div",{className:"oksToastStack","data-position":V,"data-has-overflow":ce>0?"true":"false","data-overflow-count":String(ce),children:re.map((De,F)=>o.jsx(xb,{item:De,dataMotion:ee,onDismiss:pe,stackIndex:F},De.id))})},v)})})]})}function Sn(r,i,d){return Math.min(d,Math.max(i,r))}function Ml(r,i){return d=>{r?.(d),i(d)}}function wb(...r){return i=>{for(const d of r)d&&(typeof d=="function"?d(i):d.current=i)}}function kb(){return typeof window>"u"?{width:0,height:0,scrollX:0,scrollY:0}:{width:window.innerWidth,height:window.innerHeight,scrollX:window.scrollX??window.pageXOffset??0,scrollY:window.scrollY??window.pageYOffset??0}}function eh(r){const{triggerRect:i,tooltipRect:d,side:c,align:f,offset:m,collisionPadding:g,crossOffset:k=0,shouldFlip:b=!0,arrowSize:x=10,arrowPaddingX:T=12,arrowPaddingY:w=8,arrowCornerInset:z=0,strategy:L}=r,R=kb(),U=i.top-g,_=R.height-g-i.bottom,Y=i.left-g,ee=R.width-g-i.right,Z={top:d.height+m,bottom:d.height+m,left:d.width+m,right:d.width+m},$={top:U,bottom:_,left:Y,right:ee},J={top:$.top>=Z.top,bottom:$.bottom>=Z.bottom,left:$.left>=Z.left,right:$.right>=Z.right},ie=ae=>ae==="top"?"bottom":ae==="bottom"?"top":ae==="left"?"right":"left",K=(()=>{if(!b||J[c])return c;const ae=ie(c);if(J[ae])return ae;const re=["top","bottom","left","right"];let ce="top",De=$[ce]-Z[ce];for(const F of re){const ue=$[F]-Z[F];ue>De&&(ce=F,De=ue)}return ce})();let I=0,pe=0;const we=f==="start"?i.left:f==="end"?i.right-d.width:i.left+i.width/2-d.width/2,de=f==="start"?i.top:f==="end"?i.bottom-d.height:i.top+i.height/2-d.height/2;K==="top"?(I=i.top-d.height-m,pe=we):K==="bottom"?(I=i.bottom+m,pe=we):K==="left"?(I=de,pe=i.left-d.width-m):(I=de,pe=i.right+m),K==="top"||K==="bottom"?pe+=k:I+=k;const ve=g,ke=R.width-g-d.width,ne=g,C=R.height-g-d.height,q=d.width<=R.width-g*2,P=d.height<=R.height-g*2;J[K]?K==="top"||K==="bottom"?(pe=Sn(pe,ve,ke),P||(I=Sn(I,ne,C))):(I=Sn(I,ne,C),q||(pe=Sn(pe,ve,ke))):(pe=Sn(pe,ve,ke),I=Sn(I,ne,C)),L==="absolute"&&(pe+=R.scrollX,I+=R.scrollY);const ye=x/2,me=i.left+i.width/2+(L==="absolute"?R.scrollX:0),v=i.top+i.height/2+(L==="absolute"?R.scrollY:0);let S,V;if(K==="top"||K==="bottom"){const ae=me-pe,re=Math.max(T,z),ce=re+ye,De=d.width-re-ye;S=De>=ce?Sn(ae,ce,De):d.width/2}else{const ae=v-I,re=Math.max(w,z),ce=re+ye,De=d.height-re-ye;V=De>=ce?Sn(ae,ce,De):d.height/2}const A={top:I,left:pe,placedSide:K};return S!==void 0&&(A.arrowX=S),V!==void 0&&(A.arrowY=V),A}Dn(`@layer components {
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
`);function Pr(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var mm=[50,100,200,300,400,500,600,700,800,900,950];function jb(r){const i=Sn(r,50,950);let c=mm[0]??100,f=Math.abs(c-i);for(const m of mm){const g=Math.abs(m-i);g<f&&(c=m,f=g)}return c}function Sb(r,i){const d=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return r==="default"?d:`var(--oks-color-${r}-${i}, ${d})`}function Me(r){const{children:i,content:d,size:c="md",color:f="default",colorDepth:m=100,radius:g="md",shadow:k="sm",placement:b="top",delay:x=0,closeDelay:T=500,isOpen:w,defaultOpen:z=!1,onOpenChange:L,onClose:R,offset:U=7,containerPadding:_=12,crossOffset:Y=0,showArrow:ee=!1,shouldFlip:Z=!0,triggerScaleOnOpen:$=!1,isKeyboardDismissDisabled:J=!1,isDismissable:ie=!1,shouldCloseOnBlur:W=!0,portalContainer:K,updatePositionDeps:I,isDisabled:pe=!1,disableAnimation:we=!1,className:de,classNames:ve,shouldCloseOnInteractOutside:ke}=r,C=`oks-tooltip-${h.useId().replace(/[:]/g,"")}`,q=w!==void 0,[P,ye]=h.useState(z),me=!pe&&(q?w:P),[v,S]=h.useState(!1),V=Km(),A=h.useRef(null),ae=h.useRef(null),re=h.useRef(null),ce=h.useRef(null),[De,F]=h.useState(null),ue=Ae=>{L?.(Ae),q||ye(Ae),Ae||R?.()},Ce=()=>{re.current!==null&&(window.clearTimeout(re.current),re.current=null)},Ne=()=>{ce.current!==null&&(window.clearTimeout(ce.current),ce.current=null)},He=Ae=>{if(pe)return;const Le=Ae?.currentTarget;Le instanceof HTMLElement&&(A.current=Le),Ne(),Ce(),Be(),re.current=window.setTimeout(()=>ue(!0),x)},Ze=()=>{Ce(),Ne(),ce.current=window.setTimeout(()=>ue(!1),T)},$e=()=>{Ce(),Ne(),ue(!1)},{side:te,align:le}=h.useMemo(()=>{const[Ae,Le]=b.split("-");return{side:Ae==="top"||Ae==="bottom"||Ae==="left"||Ae==="right"?Ae:"top",align:Le==="start"||Le==="end"?Le:"center"}},[b]),Be=()=>{const Ae=A.current,Le=ae.current;if(!Ae||!Le)return;const At=Ae.getBoundingClientRect(),bn=Le.getBoundingClientRect(),xn=ee?Le.querySelector(".oksTooltipArrow"):null,Bt=Le.querySelector(".oksTooltipContent"),Gt=xn?Number.parseFloat(window.getComputedStyle(xn).width):Number.NaN,Et=Number.isFinite(Gt)&&Gt>0?Gt:10,Ia=Bt?Number.parseFloat(window.getComputedStyle(Bt).paddingLeft):Number.NaN,fe=Number.isFinite(Ia)&&Ia>0?Ia:12,gt=Bt?Number.parseFloat(window.getComputedStyle(Bt).paddingTop):Number.NaN,bt=Number.isFinite(gt)&&gt>0?gt:8,$t=g==="full"?Math.min(bn.width,bn.height)/2:0;F(eh({triggerRect:At,tooltipRect:bn,side:te,align:le,offset:U,collisionPadding:_,crossOffset:Y,shouldFlip:Z,arrowSize:Et,arrowPaddingX:fe,arrowPaddingY:bt,arrowCornerInset:$t,strategy:"fixed"}))};h.useEffect(()=>(S(!0),()=>{typeof window>"u"||(Ce(),Ne())}),[]),h.useEffect(()=>{if(!v||!me||(Be(),typeof window>"u"))return;const Ae=window.requestAnimationFrame(()=>Be()),Le=()=>Be();window.addEventListener("scroll",Le,!0),window.addEventListener("resize",Le);let At=null;return typeof ResizeObserver<"u"&&(At=new ResizeObserver(Le),A.current&&At.observe(A.current),ae.current&&At.observe(ae.current)),()=>{window.cancelAnimationFrame(Ae),window.removeEventListener("scroll",Le,!0),window.removeEventListener("resize",Le),At?.disconnect()}},[v,me,te,le,U,_,Y,Z,I]),h.useEffect(()=>{if(!v||!me||typeof document>"u")return;const Ae=Le=>{J||Le.key==="Escape"&&$e()};return document.addEventListener("keydown",Ae),()=>document.removeEventListener("keydown",Ae)},[v,me,J]),h.useEffect(()=>{if(!v||!me||!ie||typeof document>"u")return;const Ae=Le=>{const At=Le.target;if(!(At instanceof Node)||A.current?.contains(At)||ae.current?.contains(At))return;const bn=At instanceof HTMLElement?At:null;bn&&ke&&!ke(bn)||$e()};return document.addEventListener("pointerdown",Ae,!0),()=>document.removeEventListener("pointerdown",Ae,!0)},[v,me,ie,ke]);const oe=Ae=>({"aria-describedby":me?C:void 0,onPointerEnter:Ml(Ae?.onPointerEnter,Le=>He(Le)),onPointerLeave:Ml(Ae?.onPointerLeave,()=>Ze()),onFocus:Ml(Ae?.onFocus,Le=>He(Le)),onBlur:Ml(Ae?.onBlur,()=>{W&&Ze()}),onKeyDown:Ml(Ae?.onKeyDown,Le=>{J||Le?.key==="Escape"&&$e()})}),he=me&&De===null,Ee={position:"fixed",top:De?.top??0,left:De?.left??0,visibility:he?"hidden":void 0,...De?.arrowX!==void 0?{"--oks-tooltip-arrow-x":`${De.arrowX}px`}:null,...De?.arrowY!==void 0?{"--oks-tooltip-arrow-y":`${De.arrowY}px`}:null},Je=typeof m=="number"?jb(m):100,be=Je<=400?"#000":"#fff",ze={"--oks-tooltip-bg":Sb(f,Je),"--oks-tooltip-fg":be},_e=h.isValidElement(i)?(()=>{const Ae=i,Le=Ae.ref;return h.cloneElement(Ae,{ref:wb(Le,At=>{A.current=At}),...oe(Ae.props)})})():o.jsx("span",{ref:Ae=>{A.current=Ae},...oe(),children:i}),et=we||V?"reduced":me?"open":"closed",ot=h.useMemo(()=>{const Ae=De?.placedSide??te,Le=le==="center"?"":`-${le}`;return`${Ae}${Le}`},[De?.placedSide,te,le]),ct=v&&!pe?o.jsxs("div",{ref:Ae=>{ae.current=Ae},id:C,role:"tooltip","aria-hidden":!me,"data-open":me?"true":"false","data-placement":ot,"data-disabled":pe?"true":"false","data-size":c,"data-color":f,"data-radius":g,"data-shadow":k,"data-motion":et,className:Pr(Pr("oksTooltipBase",ve?.base),de),style:{...ze,...Ee},children:[ee?o.jsx("span",{className:Pr("oksTooltipArrow",ve?.arrow)}):null,o.jsx("div",{className:Pr("oksTooltipContent",ve?.content),children:d})]}):null;return o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"oksTooltipTrigger","data-open":me?"true":"false","data-trigger-scale":$?"true":"false","data-motion":we||V?"reduced":"default",children:_e}),o.jsx(Wc,{container:K,children:ct})]})}function Tb({size:r=18,...i}){return o.jsxs("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...i,children:[o.jsx("path",{d:"M10 10.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z",stroke:"currentColor",strokeWidth:"1.6"}),o.jsx("path",{d:"M3.6 17.2c1.6-3.1 4-4.4 6.4-4.4s4.8 1.3 6.4 4.4",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}Dn(`@layer components {
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
`);Dn(`@layer components {
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
`);function zn(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var hm=[50,100,200,300,400,500,600,700,800,900,950];function Db(r){const i=Sn(r,50,950);let c=hm[0]??500,f=Math.abs(c-i);for(const m of hm){const g=Math.abs(m-i);g<f&&(c=m,f=g)}return c}function ss(r,i){const d=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return r==="default"?d:`var(--oks-color-${r}-${i}, ${d})`}function Cb(r,i){return ss(r,i)}function Ab(r){const i=typeof r=="string"?r.trim():"";if(!i)return"";const d=i.split(/\s+/).filter(Boolean);if(d.length===0)return"";const c=d[0]?.[0]??"",f=d.length>1?d[d.length-1]?.[0]??"":"";return(c+f).toUpperCase()}function Bb(r){const i=Math.floor(Math.abs(r));return i<1e3?`+${i}`:i<1e6?`+${Math.floor(i/1e3)}K`:i<1e9?`+${Math.floor(i/1e6)}M`:`+${Math.floor(i/1e9)}B`}var se=h.forwardRef((r,i)=>{const{name:d,src:c,size:f="md",color:m="default",radius:g="full",colorDepth:k=500,isBordered:b=!1,isDisabled:x=!1,isFocusable:T=!1,showFallback:w=!1,icon:z,fallback:L,tooltip:R=!1,ImgComponent:U="img",imgProps:_,classNames:Y,className:ee,style:Z,...$}=r,J=typeof d=="string"?d:"",ie=x,W=m,K=typeof k=="number"?Db(k):500,I=K<=400?"#000":"#fff",[pe,we]=h.useState(!1);h.useEffect(()=>we(!1),[c]);const de=c?pe?w===!0:!1:!0,ke={...{"--oks-avatar-bg":ss(W,K),"--oks-avatar-bg-50":ss(W,50),"--oks-avatar-fg":I,"--oks-avatar-border":Cb(W,K)},...Z??{}},ne=$["aria-label"],C=typeof ne=="string"?ne:J||void 0,q=T===!0&&$.tabIndex===void 0?0:$.tabIndex,P=zn(zn("oksAvatar",Y?.base),ee),ye=L??(J.trim().length>0?o.jsx("span",{className:zn("oksAvatarInitials",Y?.name),"aria-hidden":"true",children:Ab(J)}):o.jsx("span",{className:zn("oksAvatarFallbackIcon",Y?.icon),"aria-hidden":"true",children:z??o.jsx(Tb,{})})),me=o.jsx("div",{...$,ref:i,className:P,"data-size":f,"data-color":W,"data-radius":g,"data-bordered":b?"true":void 0,"data-focusable":T?"true":void 0,"data-disabled":ie?"true":void 0,role:de?"img":$.role,"aria-label":de?C:$["aria-label"],tabIndex:ie?$.tabIndex:q,style:ke,children:de?o.jsx("span",{className:zn("oksAvatarFallback",Y?.fallback),children:ye}):o.jsx(U,{..._,className:zn(zn("oksAvatarImage",Y?.img),_?.className),src:c,alt:_?.alt??J,draggable:!1,onError:ae=>{we(!0),_?.onError?.(ae)}})}),v=R===!0?J:typeof R=="object"&&R!==null?"content"in R?R.content??J:J:null,S=typeof R=="object"&&R!==null?"props"in R?R.props:R:void 0;if(!((R===!0||typeof R=="object"&&R!==null)&&typeof v=="string"?v.trim().length>0:v!=null))return me;const A=ie?o.jsx("span",{className:"oksAvatarTooltipWrapper",children:me}):me;return o.jsx(Me,{...S,content:v,children:A})});se.displayName="Avatar";var Za=h.forwardRef((r,i)=>{const{children:d,max:c=5,total:f,size:m="md",color:g="default",radius:k="full",isGrid:b=!1,isDisabled:x,isBordered:T=!1,renderCount:w,classNames:z,className:L,style:R,...U}=r,_=Tn.Children.toArray(d),Y=Math.max(0,Math.floor(c)),ee=typeof f=="number"?f-Y:_.length-Y,Z=ee>0?ee:0,$={...R??{}},J=zn(zn("oksAvatarGroup",z?.base),L);return o.jsxs("div",{...U,ref:i,className:J,"data-grid":b?"true":void 0,"data-color":g,"data-radius":k,"data-bordered":T?"true":void 0,"data-disabled":x?"true":void 0,style:$,children:[o.jsx("div",{className:"oksAvatarGroupStack","data-grid":b?"true":void 0,children:_.slice(0,Y).map((ie,W)=>{if(Tn.isValidElement(ie)){const K=ie,I={size:m};return K.props?.radius===void 0&&(I.radius=k),K.props?.isBordered===void 0&&(I.isBordered=T),K.props?.isDisabled===void 0&&(I.isDisabled=x),K.props?.color===void 0&&(I.color=g),o.jsx("div",{className:"oksAvatarGroupItem",children:Tn.cloneElement(ie,I)},W)}return o.jsx("div",{className:"oksAvatarGroupItem",children:ie},W)})}),Z>0?o.jsx("span",{className:zn("oksAvatarGroupOverflowText",z?.count),style:{"--oks-avatar-group-count-color":ss(g,600)},children:w?w(Z):Bb(Z)}):null]})});Za.displayName="AvatarGroup";Dn(`@layer components {
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
`);function zc(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function es(r,i){const d=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return r==="default"?d:`var(--oks-color-${r}-${i}, ${d})`}var qe=h.forwardRef((r,i)=>{const{children:d,content:c,max:f,variant:m="solid",color:g="default",size:k="md",shape:b="rectangle",placement:x="top-right",showOutline:T=!0,disableOutline:w=!1,disableAnimation:z=!1,isInvisible:L=!1,isOneChar:R=!1,isDot:U=!1,classNames:_,className:Y,style:ee,...Z}=r,$=w?!1:T,J=c!=null,ie=!L&&(U||J),W=typeof f=="number"&&Number.isFinite(f)&&f>0?Math.floor(f):void 0,K=!U&&typeof c=="number"&&W!==void 0&&c>W?`${W}+`:c,I={"--oks-badge-tone":es(g,500),"--oks-badge-tone-50":es(g,50),"--oks-badge-tone-100":es(g,100),"--oks-badge-tone-700":es(g,700),"--oks-badge-solid-fg":"#fff"},pe=ie?o.jsx("span",{className:zc("oksBadgeBadge",_?.badge),children:U?null:K}):null;return o.jsxs("span",{...Z,ref:i,"data-variant":m,"data-color":g,"data-size":k,"data-shape":b,"data-placement":x,"data-outline":$?"true":"false","data-dot":U?"true":"false","data-one-char":R?"true":"false","data-invisible":L?"true":"false","data-disable-animation":z?"true":"false",className:zc(zc("oksBadge",_?.base),Y),style:{...I,...ee},children:[d,pe]})});qe.displayName="Badge";function vn(r){return null}vn.displayName="Tab";Dn(`@layer components {
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
`);function Da(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function Rc(r,i){const d=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return r==="default"?d:`var(--oks-color-${r}-${i}, ${d})`}function Mc(r){return String(r).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function vm(r){return h.isValidElement(r)&&r.type===vn}function gm(r){return r.startsWith(".$")?r.slice(2):r}function bm(r,i){for(const d of r)if(!i.has(d))return d}var Pc=h.forwardRef(function(i,d){const{children:c,variant:f="solid",color:m="default",size:g="md",radius:k="full",fullWidth:b=!1,items:x,disabledKeys:T,selectedKey:w,defaultSelectedKey:z,shouldSelectOnPressUp:L=!0,keyboardActivation:R="automatic",disableCursorAnimation:U=!1,isDisabled:_=!1,disableAnimation:Y=!1,classNames:ee,className:Z,placement:$="top",isVertical:J=!1,destroyInactiveTabPanel:ie=!0,onSelectionChange:W,...K}=i,I=h.useMemo(()=>{const te=new Set;for(const le of T??[])te.add(le);return te},[T]),pe=h.useMemo(()=>{if(x!==void 0){const le=c;if(typeof le!="function")return[];const Be=[];for(const oe of x){const he=le(oe);if(!vm(he))continue;const Ee=he.key;Ee!=null&&Be.push({key:typeof Ee=="string"?gm(Ee):Ee,props:he.props})}return Be}const te=[];for(const le of h.Children.toArray(c)){if(!vm(le))continue;const Be=le.key;Be!=null&&te.push({key:typeof Be=="string"?gm(Be):Be,props:le.props})}return te},[c,x]),we=h.useMemo(()=>pe.map(te=>te.key),[pe]),de=w!==void 0,[ve,ke]=h.useState(()=>z!==void 0?z:bm(we,I)),ne=h.useMemo(()=>J?!0:$==="start"||$==="end",[J,$]),C=h.useMemo(()=>J?"start":$,[J,$]),q=h.useMemo(()=>{const te=de?w:ve;return te!=null&&we.includes(te)&&!I.has(te)?te:bm(we,I)},[de,I,ve,we,w]),P=h.useCallback(te=>{_||I.has(te)||we.includes(te)&&(de||ke(te),W?.(te))},[de,I,_,we,W]),ye=h.useRef(new Map),me=h.useCallback((te,le)=>{ye.current.set(te,le)},[]),v=h.useId(),S=h.useMemo(()=>`oks-${K.id?Mc(K.id):Mc(`tabs-${v}`)}`,[v,K.id]),V=h.useCallback(te=>{const le=Mc(te);return{tab:`${S}-tab-${le}`,panel:`${S}-panel-${le}`}},[S]),A=h.useRef(null),ae=h.useRef(null),re=h.useCallback(()=>{if(f!=="underlined")return;const te=A.current,le=ae.current;if(!te||!le)return;const Be=q;if(Be===void 0)return;const oe=ye.current.get(Be);if(!oe)return;const he=te.getBoundingClientRect(),Ee=oe.getBoundingClientRect();if(ne){const Je=Math.max(0,Ee.top-he.top),be=Ee.height;le.style.setProperty("--oks-tabs-cursor-y",`${Je}px`),le.style.setProperty("--oks-tabs-cursor-h",`${be}px`)}else{const Je=Math.max(0,Ee.left-he.left),be=Ee.width;le.style.setProperty("--oks-tabs-cursor-x",`${Je}px`),le.style.setProperty("--oks-tabs-cursor-w",`${be}px`)}},[ne,q,f]);h.useEffect(()=>{re()},[re]),h.useEffect(()=>{if(f!=="underlined")return;const te=()=>re();return window.addEventListener("resize",te),()=>window.removeEventListener("resize",te)},[re,f]);const ce=te=>{if(_||!A.current)return;const Be=we;if(Be.length===0)return;const oe=globalThis.document?.activeElement,he=(()=>{for(const et of Be){const ot=ye.current.get(et);if(ot&&oe&&ot===oe)return et}return q})(),Ee=he!==void 0?Be.indexOf(he):-1,Je=et=>{if(Be.length===0)return;let ot=Ee>=0?Ee:0;for(let ct=0;ct<Be.length;ct++){ot=(ot+et+Be.length)%Be.length;const Ae=Be[ot];if(I.has(Ae))continue;ye.current.get(Ae)?.focus(),R==="automatic"&&P(Ae);return}},be=et=>{const ot=et==="start"?Be:[...Be].reverse();for(const ct of ot){if(I.has(ct))continue;ye.current.get(ct)?.focus(),R==="automatic"&&P(ct);return}},ze=!ne,_e=te.key;if(_e==="Home"){te.preventDefault(),be("start");return}if(_e==="End"){te.preventDefault(),be("end");return}if(ze&&_e==="ArrowRight"||!ze&&_e==="ArrowDown"){te.preventDefault(),Je(1);return}if(ze&&_e==="ArrowLeft"||!ze&&_e==="ArrowUp"){te.preventDefault(),Je(-1);return}if(R==="manual"&&(_e==="Enter"||_e===" ")){if(!oe)return;for(const et of Be){const ot=ye.current.get(et);if(ot&&ot===oe){te.preventDefault(),P(et);return}}}},De=Da(Da("oksTabsRoot",ee?.base),Z),F=Da("oksTablist",ee?.tabList),ue=Da("oksTabsCursor",ee?.cursor),Ce="oksTabsPanels",Ne=Da("oksTabsPanel",ee?.panel),Ze={...{"--oks-tabs-tone":Rc(m,500),"--oks-tabs-tone-50":Rc(m,50),"--oks-tabs-tone-700":Rc(m,700)},...K.style??{}},$e=h.useMemo(()=>{if(q!==void 0)return pe.find(te=>te.key===q)},[pe,q]);return o.jsxs("div",{...K,ref:d,className:De,style:Ze,"data-variant":f,"data-color":m,"data-size":g,"data-radius":k,"data-full-width":b?"true":"false","data-placement":C,"data-vertical":ne?"true":"false","data-disabled":_?"true":"false","data-motion":Y?"reduced":"default","data-disable-cursor-animation":U?"true":"false",children:[o.jsxs("div",{className:F,role:"tablist","aria-orientation":ne?"vertical":"horizontal",ref:A,onKeyDown:ce,children:[f==="underlined"?o.jsx("div",{className:ue,ref:ae,"aria-hidden":"true"}):null,pe.map(te=>{const le=te.key===q,Be=_||I.has(te.key),oe=V(te.key),he=Da("oksTabsTabWrapper",ee?.tabWrapper),Ee=Da("oksTabsTab",ee?.tab),Je=Da("oksTabsTabContent",ee?.tabContent),be=te.props.shouldSelectOnPressUp??L,ze=()=>P(te.key),_e=ct=>{me(te.key,ct),te.props.tabRef&&(te.props.tabRef.current=ct)},et={role:"tab",id:oe.tab,"aria-selected":le,"aria-controls":oe.panel,tabIndex:le?0:-1,"data-selected":le?"true":void 0,"data-disabled":Be?"true":void 0},ot=o.jsx("span",{className:Je,children:te.props.title});return o.jsx("div",{className:he,children:te.props.href?o.jsx("a",{...et,className:Ee,href:te.props.href,target:te.props.target,rel:te.props.rel,download:te.props.download,ping:te.props.ping,referrerPolicy:te.props.referrerPolicy,"aria-disabled":Be?"true":void 0,onClick:Be?ct=>{ct.preventDefault()}:be?()=>ze():void 0,onMouseDown:Be||be?void 0:ct=>{ct.preventDefault(),ze()},ref:_e,children:ot}):o.jsx("button",{...et,type:"button",className:Ee,disabled:Be,onClick:be?ze:void 0,onMouseDown:be?void 0:ct=>{ct.preventDefault(),ze()},ref:_e,children:ot})},String(te.key))})]}),o.jsx("div",{className:Ce,children:ie?$e?o.jsx("div",{className:Ne,role:"tabpanel",id:V($e.key).panel,"aria-labelledby":V($e.key).tab,children:$e.props.children}):null:pe.map(te=>{const le=te.key===q,Be=V(te.key);return o.jsx("div",{className:Ne,role:"tabpanel",id:Be.panel,"aria-labelledby":Be.tab,hidden:!le,children:te.props.children},String(te.key))})})]})});Pc.displayName="Tabs";function Eb(r){return r.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")}function Oc(){return typeof window<"u"&&typeof document<"u"}function Nb(r){const i=h.useCallback(()=>!Oc()||!r?null:new URL(window.location.href).searchParams.get(r),[r]),d=h.useCallback(f=>{if(!Oc()||!r)return;const m=new URL(window.location.href),g=m.searchParams;f==null||f===""?g.delete(r):g.set(r,f);const k=`${m.pathname}?${g.toString()}${m.hash??""}`;window.history.pushState({},"",k);const b=new PopStateEvent("popstate");window.dispatchEvent(b)},[r]),c=h.useCallback(f=>{if(!Oc()||!r)return()=>{};const m=()=>f(i());return window.addEventListener("popstate",m),()=>window.removeEventListener("popstate",m)},[i,r]);return{get:i,set:d,subscribe:c}}function zb(r,i){return{...r??{},...i??{}}}var Rb=h.forwardRef(function(i,d){const{data:c,defaultTab:f=0,value:m,onChange:g,className:k,orientation:b="horizontal",tablistPosition:x="start",mode:T="basic",tabId:w="tab",variant:z,size:L,radius:R,triggerProps:U,activeTriggerProps:_,allowKeyboardNavigation:Y=!0,renderLazy:ee=!0,idStrategy:Z}=i,$=h.useMemo(()=>c.map(F=>({...F,id:F.id??(Z?Z(F.title):Eb(F.title))})),[c,Z]),J=Nb(T==="url"?w:void 0),ie=h.useCallback(F=>F>=0&&F<$.length?F:0,[$.length]),W=h.useCallback(()=>{if(T!=="url")return null;const F=J.get();if(!F)return null;const ue=$.findIndex(Ce=>Ce.id===F);return ue>=0?ue:null},[$,T,J]),K=h.useMemo(()=>{const F=W();return F!==null?F:ie(f)},[f,ie,W]),I=typeof m=="number",[pe,we]=h.useState(K),de=I?m:pe;h.useEffect(()=>T!=="url"?void 0:J.subscribe(ue=>{const Ce=ue?$.findIndex(Ne=>Ne.id===ue):-1;if(Ce>=0)I||we(Ce),g?.(Ce);else{const Ne=ie(f);I||we(Ne),g?.(Ne)}}),[f,ie,I,$,T,g,J]);const ve=["oksTabsRoot",k].filter(Boolean).join(" "),ke=h.useRef([]);ke.current=[];const ne=F=>{ke.current[F]?.focus()},C=F=>{if(I||we(F),g?.(F),T==="url"){const ue=$[F]?.id;ue&&J.set(ue)}},q=F=>ue=>{ue.preventDefault(),C(F)},P=F=>ue=>{if(!Y)return;const Ce=b==="horizontal",Ne=ue.key;if(Ne==="Home"){ue.preventDefault(),ne(0);return}if(Ne==="End"){ue.preventDefault(),ne($.length-1);return}if(Ce&&Ne==="ArrowRight"||!Ce&&Ne==="ArrowDown"){ue.preventDefault();const He=(F+1)%$.length;ne(He);return}if(Ce&&Ne==="ArrowLeft"||!Ce&&Ne==="ArrowUp"){ue.preventDefault();const He=(F-1+$.length)%$.length;ne(He);return}(Ne==="Enter"||Ne===" ")&&(ue.preventDefault(),C(F))},ye=L??"comfortable",me=ye==="compact"?"sm":"md";let v="underline",S={height:4},V={underline:{}};const A=z;A&&(A==="underlineThick"&&(v="underline"),A==="segmented"&&(v="segmented"),A==="pill"&&(v="pill"),A==="dot"&&(v="dot"),A==="outline"&&(v="outline"),A==="underlineThick"?(S={height:4,...S},V={underline:{widthStrategy:"tab"}}):A==="outline"&&(V={outline:{activeEmphasis:"stroke"}}));const ae=F=>F?zb(U,_):U??{},re=h.useRef(null),ce=h.useRef(null);h.useEffect(()=>{if(v!=="underline")return;const F=re.current,ue=ce.current,Ce=ke.current[de];if(!F||!ue||!Ce)return;const Ne=F.getBoundingClientRect(),He=Ce.getBoundingClientRect();if(b==="horizontal"){const Ze=Math.max(0,He.left-Ne.left),$e=He.width,te=typeof S?.height=="number"?`${S?.height}px`:S?.height??"2px";ue.style.setProperty("--oks-tabs-indicator-x",`${Ze}px`),ue.style.setProperty("--oks-tabs-indicator-w",`${$e}px`),ue.style.setProperty("--oks-tabs-indicator-h",te),S?.color&&ue.style.setProperty("--oks-tabs-indicator-color",S.color)}else{const Ze=Math.max(0,He.top-Ne.top),$e=He.height,te=typeof S?.height=="number"?`${S?.height}px`:S?.height??"2px";ue.style.setProperty("--oks-tabs-indicator-y",`${Ze}px`),ue.style.setProperty("--oks-tabs-indicator-h",`${$e}px`),ue.style.setProperty("--oks-tabs-indicator-w",te),S?.color&&ue.style.setProperty("--oks-tabs-indicator-color",S.color)}},[de,v,S,b]),h.useEffect(()=>{if(v!=="underline")return;const F=()=>{const ue=ce.current;if(!ue)return;const Ce=de,Ne=ke.current[Ce],He=re.current;if(!Ne||!He)return;const Ze=He.getBoundingClientRect(),$e=Ne.getBoundingClientRect();if(b==="horizontal"){const te=Math.max(0,$e.left-Ze.left),le=$e.width;ue.style.setProperty("--oks-tabs-indicator-x",`${te}px`),ue.style.setProperty("--oks-tabs-indicator-w",`${le}px`)}else{const te=Math.max(0,$e.top-Ze.top),le=$e.height;ue.style.setProperty("--oks-tabs-indicator-y",`${te}px`),ue.style.setProperty("--oks-tabs-indicator-h",`${le}px`)}};return window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[de,v,b]);const De=F=>typeof F=="function"?F():F;return o.jsxs("div",{className:ve,"data-orientation":b,"data-tablist-position":x,"data-density":ye,style:{...R!==void 0?{"--oks-tabs-radius":typeof R=="number"?`${R}px`:R==="none"?"0px":R==="sm"?"0.25rem":R==="md"?"0.5rem":R==="lg"?"0.75rem":R==="full"?"9999px":void 0}:void 0},ref:d,children:[o.jsxs("div",{className:"oksTablist",role:"tablist","aria-orientation":b,"data-appearance":v,"data-underline-position":V?.underline?.position,"data-outline-active":V?.outline?.activeEmphasis,ref:re,children:[v==="underline"?o.jsx("div",{className:"oksTabsIndicator",ref:ce,"aria-hidden":"true"}):null,$.map((F,ue)=>{const Ce=ue===de,Ne=ae(Ce),He=`oks-tab-${F.id}`,Ze=`oks-panel-${F.id}`;return o.jsx("button",{...Ne,ref:$e=>{ke.current[ue]=$e},role:"tab","aria-selected":Ce,"aria-controls":Ze,id:He,tabIndex:Ce?0:-1,title:F.title,onClick:q(ue),onKeyDown:P(ue),"data-active":Ce?"true":"false","data-size":me,"data-elevated":v==="pill"&&V?.pill?.elevated&&Ce?"true":void 0,className:["oksTabTrigger",Ne?.className].filter(Boolean).join(" "),children:F.title},F.id)})]}),o.jsx("div",{className:"oksTabsPanels",children:ee?o.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${$[de]?.id}`,"aria-labelledby":`oks-tab-${$[de]?.id}`,children:De($[de]?.content)}):$.map((F,ue)=>o.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${F.id}`,"aria-labelledby":`oks-tab-${F.id}`,hidden:ue!==de,children:De(F.content)},F.id))})]})});Rb.displayName="TabsLegacy";var th=h.createContext(null);function eu(){const r=h.useContext(th);if(!r)throw new Error("oks-ui Tabs: TabsRoot is required");return r}function _c(r){return String(r).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function Uc(){return typeof window<"u"&&typeof document<"u"}function Mb(r){const i=h.useCallback(()=>!Uc()||!r?null:new URL(window.location.href).searchParams.get(r),[r]),d=h.useCallback(f=>{if(!Uc()||!r)return;const m=new URL(window.location.href),g=m.searchParams;f==null||f===""?g.delete(r):g.set(r,f);const k=`${m.pathname}?${g.toString()}${m.hash??""}`;window.history.pushState({},"",k);const b=new PopStateEvent("popstate");window.dispatchEvent(b)},[r]),c=h.useCallback(f=>{if(!Uc()||!r)return()=>{};const m=()=>f(i());return window.addEventListener("popstate",m),()=>window.removeEventListener("popstate",m)},[i,r]);return{get:i,set:d,subscribe:c}}var Ob=h.forwardRef(function(i,d){const{id:c,value:f,defaultValue:m,onChange:g,mode:k="basic",tabId:b="tab",orientation:x="horizontal",tablistPosition:T="start",variant:w,size:z="comfortable",radius:L,renderLazy:R=!0,className:U,children:_}=i,Y=Mb(k==="url"?b:void 0),ee=h.useMemo(()=>{if(k==="url"){const ve=Y.get();if(ve!==null)return ve}return m},[m,k,Y]),Z=f!==void 0,[$,J]=h.useState(ee),ie=Z?f:$;h.useEffect(()=>k!=="url"?void 0:Y.subscribe(ke=>{ke!==null&&(Z||J(ke),g?.(ke))}),[Z,k,g,Y]);const W=h.useCallback(ve=>{Z||J(ve),g?.(ve),k==="url"&&Y.set(String(ve))},[Z,k,g,Y]),K=h.useId(),I=h.useMemo(()=>`oks-${_c(c||`tabs-${K}`)}`,[K,c]),pe=h.useCallback(ve=>{const ke=_c(ve);return{tab:`${I}-tab-${ke}`,panel:`${I}-panel-${ke}`}},[I]),we=h.useMemo(()=>{let ve="underline",ke={height:4},ne={underline:{widthStrategy:"tab"}};const C=w;return C&&(C==="underlineThick"&&(ve="underline"),C==="segmented"&&(ve="segmented"),C==="pill"&&(ve="pill"),C==="dot"&&(ve="dot"),C==="outline"&&(ve="outline"),C==="underlineThick"?(ke={height:4},ne={underline:{widthStrategy:"tab"}}):C==="outline"&&(ne={outline:{activeEmphasis:"stroke"}})),{value:ie,setValue:W,orientation:x,appearance:ve,density:z,radius:L,indicator:ke,appearanceOptions:ne,renderLazy:R,getIds:pe,isActive:q=>q===ie}},[w,z,ie,pe,x,L,R,W]),de=["oksTabsRoot",U].filter(Boolean).join(" ");return o.jsx(th.Provider,{value:we,children:o.jsx("div",{ref:d,id:c,className:de,"data-orientation":x,"data-tablist-position":T,"data-density":z,"data-underline-position":we.appearanceOptions?.underline?.position==="top"?"top":void 0,style:{...L!==void 0?{"--oks-tabs-radius":typeof L=="number"?`${L}px`:L==="none"?"0px":L==="sm"?"0.25rem":L==="md"?"0.5rem":L==="lg"?"0.75rem":L==="full"?"9999px":void 0}:void 0},children:_})})});Ob.displayName="TabsRoot";var _b=h.forwardRef(function(i,d){const{className:c,...f}=i,m=eu(),g=h.useRef(null),k=["oksTablist",c].filter(Boolean).join(" "),b=h.useRef(null),x=T=>{const w=g.current;if(!w)return;const z=Array.from(w.querySelectorAll('[role="tab"]'));if(z.length===0)return;const L=m.orientation==="horizontal",R=z.findIndex(_=>_.getAttribute("aria-selected")==="true"),U=T.key;if(U==="Home"){T.preventDefault(),z[0]?.focus();return}if(U==="End"){T.preventDefault(),z[z.length-1]?.focus();return}if(L&&U==="ArrowRight"||!L&&U==="ArrowDown"){T.preventDefault();const _=(R+1)%z.length;z[_]?.focus();return}if(L&&U==="ArrowLeft"||!L&&U==="ArrowUp"){T.preventDefault();const _=(R-1+z.length)%z.length;z[_]?.focus();return}};return h.useEffect(()=>{if(m.appearance!=="underline")return;const T=g.current,w=b.current;if(!T||!w)return;const z=T.querySelector('[role="tab"][aria-selected="true"]');if(!z)return;const L=T.getBoundingClientRect(),R=z.getBoundingClientRect(),U=z.querySelector(".oksTabLabel"),Y=(m.appearanceOptions?.underline?.widthStrategy??"tab")==="label"&&U?U.getBoundingClientRect().width:R.width,ee=m.appearanceOptions?.underline?.offset??0,Z=m.appearanceOptions?.underline?.cap??"square";if(m.orientation==="horizontal"){const $=Math.max(0,R.left-L.left),J=Y,ie=typeof m.indicator?.height=="number"?`${m.indicator.height}px`:m.indicator?.height??"2px";w.style.setProperty("--oks-tabs-indicator-x",`${$}px`),w.style.setProperty("--oks-tabs-indicator-w",`${J}px`),w.style.setProperty("--oks-tabs-indicator-h",ie),m.indicator?.color&&w.style.setProperty("--oks-tabs-indicator-color",m.indicator.color),w.style.setProperty("--oks-tabs-indicator-offset-y",`${ee}px`),w.style.setProperty("--oks-tabs-indicator-radius",Z==="round"?"9999px":"0px")}else{const $=Math.max(0,R.top-L.top),J=R.height,ie=typeof m.indicator?.height=="number"?`${m.indicator.height}px`:m.indicator?.height??"2px";w.style.setProperty("--oks-tabs-indicator-y",`${$}px`),w.style.setProperty("--oks-tabs-indicator-h",`${J}px`),w.style.setProperty("--oks-tabs-indicator-w",ie),m.indicator?.color&&w.style.setProperty("--oks-tabs-indicator-color",m.indicator.color),w.style.setProperty("--oks-tabs-indicator-offset-x",`${ee}px`),w.style.setProperty("--oks-tabs-indicator-radius",Z==="round"?"9999px":"0px")}},[m.value,m.appearance,m.indicator,m.orientation]),h.useEffect(()=>{if(m.appearance!=="underline")return;const T=()=>{const w=g.current,z=b.current;if(!w||!z)return;const L=w.querySelector('[role="tab"][aria-selected="true"]');if(!L)return;const R=w.getBoundingClientRect(),U=L.getBoundingClientRect();if(m.orientation==="horizontal"){const _=Math.max(0,U.left-R.left),Y=U.width;z.style.setProperty("--oks-tabs-indicator-x",`${_}px`),z.style.setProperty("--oks-tabs-indicator-w",`${Y}px`)}else{const _=Math.max(0,U.top-R.top),Y=U.height;z.style.setProperty("--oks-tabs-indicator-y",`${_}px`),z.style.setProperty("--oks-tabs-indicator-h",`${Y}px`)}};return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[m.appearance,m.orientation,m.value]),o.jsxs("div",{...f,className:k,role:"tablist","aria-orientation":m.orientation,"data-appearance":m.appearance,"data-outline-active":m.appearanceOptions?.outline?.activeEmphasis,"data-underline-position":m.appearanceOptions?.underline?.position,ref:T=>{g.current=T,typeof d=="function"?d(T):d&&"current"in d&&(d.current=T)},onKeyDown:x,children:[m.appearance==="underline"?o.jsx("div",{className:"oksTabsIndicator",ref:b,"aria-hidden":"true"}):null,i.children]})});_b.displayName="TabList";var Ub=h.forwardRef(function(i,d){const{value:c,disabled:f,className:m,children:g}=i,k=eu(),b=k.isActive(c),x=k.getIds(c),T=k.density==="compact"?"sm":"md",w=["oksTabTrigger",m].filter(Boolean).join(" ");return o.jsx("button",{ref:d,className:w,role:"tab",id:x.tab,"aria-selected":b,"aria-controls":x.panel,tabIndex:b?0:-1,disabled:f,"data-active":b?"true":"false","data-size":T,"data-elevated":k.appearance==="pill"&&k.appearanceOptions?.pill?.elevated&&b?"true":void 0,onClick:()=>k.setValue(c),children:o.jsx("span",{className:"oksTabLabel",children:g})})});Ub.displayName="TabTrigger";var Hb=h.forwardRef(function(i,d){const{value:c,keepMounted:f,className:m,children:g}=i,k=eu(),b=k.getIds(c),x=k.isActive(c),T=["oksTabsPanel",m].filter(Boolean).join(" ");return!x&&f===void 0&&k.renderLazy?null:o.jsx("div",{ref:d,role:"tabpanel",id:b.panel,"aria-labelledby":b.tab,hidden:!x,className:T,children:g})});Hb.displayName="TabPanel";Dn(`@layer components {
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
`);function Uo(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var xm=[50,100,200,300,400,500,600,700,800,900,950];function Hc(r){const i=Sn(r,50,950);let c=xm[0]??500,f=Math.abs(c-i);for(const m of xm){const g=Math.abs(m-i);g<f&&(c=m,f=g)}return c}function Ho(r,i){const d=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return r==="default"?d:`var(--oks-color-${r}-${i}, ${d})`}var Ve=h.forwardRef((r,i)=>{const{children:d,variant:c="solid",size:f="md",color:m="default",radius:g="full",colorDepth:k=500,avatar:b,startContent:x,endContent:T,isDisabled:w=!1,onClose:z,classNames:L,className:R,style:U,..._}=r,Y=w,ee=typeof k=="number"?Hc(k):500,Z=Hc(ee+100),$=Hc(ee+200),J=ee<=400?"#000":"#fff",ie={"--oks-chip-tone":Ho(m,ee),"--oks-chip-tone-hover":Ho(m,Z),"--oks-chip-tone-active":Ho(m,$),"--oks-chip-tone-50":Ho(m,50),"--oks-chip-tone-100":Ho(m,100),"--oks-chip-tone-700":Ho(m,700),"--oks-chip-solid-fg":J},W=T??o.jsx("span",{"aria-hidden":"true",children:"×"}),K=typeof z=="function"?o.jsx("button",{type:"button",className:Uo("oksChipCloseButton",L?.closeButton),"aria-label":"Close",disabled:Y,onClick:pe=>{pe.stopPropagation(),Y||z(pe)},children:W}):null;return o.jsxs("div",{..._,ref:i,"aria-disabled":Y?"true":void 0,"data-variant":c,"data-size":f,"data-color":m,"data-radius":g,"data-disabled":Y?"true":"false",className:Uo(Uo("oksChip",L?.base),R),style:{...ie,...U},children:[c==="dot"?o.jsx("span",{className:Uo("oksChipDot",L?.dot),"aria-hidden":"true"}):null,b!=null?o.jsx("span",{className:Uo("oksChipAvatar",L?.avatar),children:b}):null,x,d!=null?o.jsx("span",{className:Uo("oksChipContent",L?.content),children:d}):null,K??T]})});Ve.displayName="Chip";Dn(`@layer components {
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
`);function at(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function ym(r,i){const d=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return r==="default"?d:`var(--oks-color-${r}-${i}, ${d})`}function nh(...r){return i=>{for(const d of r)d&&(typeof d=="function"?d(i):d.current=i)}}function Lb(r){return r.startsWith(".$")?r.slice(2):r}function Gb(r){const[i,d]=r.split("-");return{side:i==="top"||i==="bottom"||i==="left"||i==="right"?i:"bottom",align:d==="start"||d==="end"?d:"center"}}var ah=h.createContext(null);function oh(){const r=h.useContext(ah);if(!r)throw new Error("oks-ui Dropdown: missing context.");return r}var lh=h.createContext(null);function Yb(){const r=h.useContext(lh);if(!r)throw new Error("oks-ui DropdownMenu: missing context.");return r}function ts(r){return h.isValidElement(r)&&r.type===Se}function qb(r){return h.isValidElement(r)&&r.type===Ol}function Vb(r,i){return typeof i.textValue=="string"?i.textValue:typeof i.title=="string"?i.title:typeof i.children=="string"?i.children:String(r)}function ns(r){const i=r.key;if(i==null)return null;if(typeof i=="string"){const d=Lb(i).trim();return d.length>0?d:null}return i}function wm(r,i){for(const d of r)if(!i.has(d))return d;return null}function km(r,i){for(let d=r.length-1;d>=0;d--){const c=r[d];if(c&&!i.has(c))return c}return null}function jm(r,i,d,c,f){if(r.length===0)return null;const m=d!==null?r.indexOf(d):-1;if(!f){for(let k=m+c;k>=0&&k<r.length;k+=c){const b=r[k];if(b!=null&&!i.has(b))return b}return null}let g=m;for(let k=0;k<r.length;k++){g=(g+c+r.length)%r.length;const b=r[g];if(b!=null&&!i.has(b))return b}return null}function Xb(r){return!(r.key.length!==1||r.ctrlKey||r.metaKey||r.altKey)}function Lc(r){const i=new Set;for(const d of r??[])i.add(d);return i}var dt=h.forwardRef((r,i)=>{const{children:d,isOpen:c,defaultOpen:f=!1,onOpenChange:m,placement:g="bottom-start",offset:k=8,containerPadding:b=8,shouldFlip:x=!0,portalContainer:T,isDismissable:w=!0,isKeyboardDismissDisabled:z=!1,shouldCloseOnInteractOutside:L,closeOnSelect:R=!0,classNames:U,className:_,style:Y}=r,[ee,Z]=h.useState(f),$=c!==void 0?c:ee,J=h.useRef(null),ie=h.useRef(null),W=h.useRef("programmatic"),K=h.useRef(void 0),I=h.useId(),pe=`oks-dropdown-trigger-${I}`,we=`oks-dropdown-menu-${I}`,de=h.useCallback((ne,C=!0)=>{if(ne||K.current?.(),c===void 0&&Z(ne),m?.(ne),!ne&&C){const q=J.current;q&&window.requestAnimationFrame(()=>{q.focus?.()})}},[c,m]),ve=h.useCallback(()=>de(!$,!1),[$,de]);h.useEffect(()=>{if(!$)return;const ne=q=>{q.key==="Escape"&&(z||(q.preventDefault(),de(!1,!0)))},C=q=>{if(!w)return;const P=q.target;if(!(P instanceof Element))return;const ye=J.current,me=ie.current;ye&&ye.contains(P)||me&&me.contains(P)||L&&!L(P)||de(!1,!0)};return document.addEventListener("keydown",ne),document.addEventListener("pointerdown",C,{capture:!0}),()=>{document.removeEventListener("keydown",ne),document.removeEventListener("pointerdown",C,{capture:!0})}},[$,w,z,de,L]);const ke={open:$,setOpen:de,toggle:ve,openSourceRef:W,menuOnCloseRef:K,placement:g,offset:k,containerPadding:b,shouldFlip:x,portalContainer:T,isDismissable:w,isKeyboardDismissDisabled:z,...L?{shouldCloseOnInteractOutside:L}:{},closeOnSelect:R,triggerRef:J,menuRef:ie,triggerId:pe,menuId:we,...U?{baseClassNames:U}:{}};return o.jsx(ah.Provider,{value:ke,children:o.jsx("div",{ref:i,className:at(at("oksDropdown",U?.base),_),style:Y,children:o.jsx("div",{className:at("oksDropdownContent",U?.content),children:d})})})});dt.displayName="Dropdown";var ft=h.forwardRef((r,i)=>{const{children:d}=r,c=oh(),f=d,m=f?.ref,g=b=>{f?.props?.onClick?.(b),!b?.defaultPrevented&&(c.openSourceRef.current="pointer",c.toggle())},k=b=>{f?.props?.onKeyDown?.(b),!b?.defaultPrevented&&(b.key==="Enter"||b.key===" "||b.key==="ArrowDown")&&(b.preventDefault(),c.openSourceRef.current="keyboard",c.setOpen(!0,!1))};return h.cloneElement(d,{id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open?"true":"false","aria-controls":c.menuId,onClick:g,onKeyDown:k,ref:nh(m,i,b=>{c.triggerRef.current=b instanceof HTMLElement?b:null}),className:at("oksDropdownTrigger",f?.props?.className)})});ft.displayName="DropdownTrigger";var ht=r=>{const{children:i,items:d,onAction:c,disabledKeys:f,onClose:m,selectionMode:g="none",selectedKeys:k,defaultSelectedKeys:b,onSelectionChange:x,disallowEmptySelection:T=!1,variant:w="solid",color:z="default",autoFocus:L=!1,hideEmptyContent:R=!1,hideSelectedIcon:U=!1,shouldFocusWrap:_=!1,closeOnSelect:Y,disableAnimation:ee=!1,classNames:Z,itemClasses:$,topContent:J,bottomContent:ie,emptyContent:W="No items."}=r,K=oh(),I=Y??K.closeOnSelect,pe=h.useMemo(()=>Lc(f),[f]),we=h.useMemo(()=>({"--oks-dropdown-tone":ym(z,500),"--oks-dropdown-tone-600":ym(z,600)}),[z]),[de,ve]=h.useState(()=>b==="all"?"all":Lc(b)),ke=h.useMemo(()=>k==="all"?"all":k!==void 0?Lc(k):de,[k,de]),ne=h.useCallback(oe=>{k===void 0&&ve(oe)},[k]),{side:C,align:q}=h.useMemo(()=>Gb(K.placement),[K.placement]),[P,ye]=h.useState(null),me=h.useRef(new Map),v=h.useRef(new Map),S=h.useRef({buffer:"",timer:null}),V=h.useRef(null);h.useEffect(()=>{if(K.open)return K.menuOnCloseRef.current=m,()=>{K.menuOnCloseRef.current===m&&(K.menuOnCloseRef.current=void 0)}},[K.menuOnCloseRef,K.open,m]);const A=h.useCallback(()=>{const oe=K.triggerRef.current,he=K.menuRef.current;if(!oe||!he)return;const Ee=oe.getBoundingClientRect(),Je=he.getBoundingClientRect(),be=eh({triggerRect:Ee,tooltipRect:Je,side:C,align:q,offset:K.offset,collisionPadding:K.containerPadding,shouldFlip:K.shouldFlip,arrowSize:0,arrowPaddingX:0,arrowPaddingY:0,strategy:"fixed"});ye({top:be.top,left:be.left,placedSide:be.placedSide,placedAlign:q})},[q,K.containerPadding,K.offset,K.shouldFlip,K.triggerRef,K.menuRef,C]);h.useEffect(()=>{if(!K.open)return;A();const oe=()=>A(),he=()=>A();return window.addEventListener("scroll",oe,{passive:!0,capture:!0}),window.addEventListener("resize",he,{passive:!0}),()=>{window.removeEventListener("scroll",oe,{capture:!0}),window.removeEventListener("resize",he)}},[K.open,A]),h.useEffect(()=>{if(!K.open)return;const oe=K.menuRef.current;if(!oe||typeof ResizeObserver>"u")return;const he=new ResizeObserver(()=>A());return he.observe(oe),()=>he.disconnect()},[K.open,A]);const ae=h.useMemo(()=>{if(d!==void 0){const be=i;if(typeof be!="function")return[];const ze=[];for(const _e of d){const et=be(_e);if(!ts(et))continue;const ot=ns(et);ot&&ze.push({key:ot,element:et})}return ze.length>0?[{implicit:!0,items:ze}]:[]}const oe=h.Children.toArray(i),he=[],Ee=[];for(const be of oe){if(qb(be)){const ze=[];if(be.props.items!==void 0){const _e=be.props.children;if(typeof _e=="function")for(const et of be.props.items){const ot=_e(et);if(!ts(ot))continue;const ct=ns(ot);ct&&ze.push({key:ct,element:ot})}}else for(const _e of h.Children.toArray(be.props.children)){if(!ts(_e))continue;const et=ns(_e);et&&ze.push({key:et,element:_e})}Ee.push({...be.props.title!==void 0?{title:be.props.title}:{},...typeof be.props["aria-label"]=="string"?{ariaLabel:be.props["aria-label"]}:{},...be.props.hideSelectedIcon!==void 0?{hideSelectedIcon:be.props.hideSelectedIcon}:{},...be.props.showDivider!==void 0?{showDivider:be.props.showDivider}:{},...be.props.classNames?{classNames:be.props.classNames}:{},...be.props.itemClasses?{itemClasses:be.props.itemClasses}:{},items:ze});continue}if(ts(be)){const ze=ns(be);if(!ze)continue;he.push({key:ze,element:be})}}const Je=[];he.length>0&&Je.push({implicit:!0,items:he});for(const be of Ee)Je.push(be);return Je},[i,d]),re=h.useMemo(()=>{const oe=[];for(const he of ae)for(const Ee of he.items)oe.push(Ee);return oe},[ae]),ce=h.useMemo(()=>re.map(oe=>oe.key),[re]),De=h.useMemo(()=>{const oe=new Map;for(const he of re)oe.set(he.key,he.element.props);return oe},[re]),F=h.useMemo(()=>{const oe=new Set(pe);for(const he of re)he.element.props.isDisabled&&oe.add(he.key);return oe},[pe,re]),[ue,Ce]=h.useState(null),Ne=h.useCallback((oe,he,Ee)=>{he?me.current.set(oe,he):me.current.delete(oe),v.current.set(oe,Ee)},[]),He=h.useCallback(oe=>{if(Ce(oe),oe===null)return;const he=me.current.get(oe);he&&he.focus()},[Ce]);h.useEffect(()=>{if(!K.open)return;const he=K.openSourceRef.current==="keyboard"&&L===!1?"first":L,Ee=he===!0||he==="first"?wm(ce,F):he==="last"?km(ce,F):null;Ce(Ee),window.requestAnimationFrame(()=>{Ee!==null?me.current.get(Ee)?.focus():V.current?.focus()})},[L,F,K.open,K.openSourceRef,ce]);const Ze=h.useCallback((oe,he)=>{if(F.has(oe))return;if(he.onAction?.(),c?.(oe),g!=="none"&&he.isReadOnly!==!0){const Je=ce.filter(_e=>!F.has(_e)),be=ke==="all"?new Set(Je):new Set(ke);let ze=be;if(g==="single"){const _e=be.has(oe);be.clear(),_e&&T===!1||be.add(oe)}else be.has(oe)?(T===!1||be.size>1)&&be.delete(oe):be.add(oe);if(ze=be,ne(ze),x){const _e=ze;_e.anchorKey=oe,_e.currentKey=oe,x(_e)}}(he.closeOnSelect??I)&&(K.setOpen(!1,!0),he.onClose?.())},[I,F,T,K,ce,c,m,x,ke,g,ne]),$e=oe=>{if(oe.key==="ArrowDown"){oe.preventDefault(),He(jm(ce,F,ue,1,_));return}if(oe.key==="ArrowUp"){oe.preventDefault(),He(jm(ce,F,ue,-1,_));return}if(oe.key==="Home"){oe.preventDefault(),He(wm(ce,F));return}if(oe.key==="End"){oe.preventDefault(),He(km(ce,F));return}if(oe.key==="Enter"||oe.key===" "){if(oe.preventDefault(),ue!==null){const he=De.get(ue);he&&Ze(ue,he)}return}if(Xb(oe)){const he=`${S.current.buffer}${oe.key}`.toLowerCase();S.current.timer&&window.clearTimeout(S.current.timer),S.current.buffer=he,S.current.timer=window.setTimeout(()=>{S.current.buffer="",S.current.timer=null},350);const Ee=ue!==null?ce.indexOf(ue):-1,Je=ce.length;for(let be=1;be<=Je;be++){const ze=(Ee+be)%Je,_e=ce[ze];if(_e==null||F.has(_e))continue;if((v.current.get(_e)?.textValue??String(_e)).toLowerCase().startsWith(he)){He(_e);break}}}},te={disabledKeys:F,selectionMode:g,selectedKeys:ke,setSelectedKeys:ne,disallowEmptySelection:T,...c?{onAction:c}:{},...x?{onSelectionChange:x}:{},...m?{onClose:m}:{},onItemAction:Ze,closeOnSelect:I,hideSelectedIcon:U,setOpen:K.setOpen,focusedKey:ue,setFocusedKey:Ce,registerItemRef:Ne,...$?{itemClasses:$}:{},menuVariant:w,menuColor:z,shouldFocusWrap:_,disableAnimation:ee};if(!K.open)return null;const le=re.length>0,Be=P===null?K.placement:`${P.placedSide}-${P.placedAlign}`;return o.jsx(Wc,{container:K.portalContainer,children:o.jsx(lh.Provider,{value:te,children:o.jsxs("div",{ref:oe=>{K.menuRef.current=oe},id:K.menuId,className:at("oksDropdownMenu",Z?.base),"data-open":"true","data-placement":Be,"data-variant":w,"data-color":z,style:{...we,position:"fixed",top:P?.top??-9999,left:P?.left??-9999},children:[J!=null?o.jsx("div",{className:"oksDropdownTopContent",children:J}):null,o.jsx("div",{ref:V,role:"menu","aria-labelledby":K.triggerId,className:at("oksDropdownList",Z?.list),tabIndex:-1,onKeyDown:$e,children:le?ae.map((oe,he)=>o.jsx(Kb,{section:oe},he)):R?null:o.jsx("div",{className:at("oksDropdownEmpty",Z?.emptyContent),children:W??null})}),ie!=null?o.jsx("div",{className:"oksDropdownBottomContent",children:ie}):null]})})})};function Kb({section:r}){const d=(r.implicit===!0?!1:r.title===void 0||r.title===null)?r.ariaLabel:void 0,c=r.title!==void 0&&r.title!==null?o.jsx("div",{className:at("oksDropdownSectionHeading",r.classNames?.heading),children:r.title}):null,f=r.showDivider===!0;return o.jsxs("div",{className:at("oksDropdownSection",r.classNames?.base),children:[c,o.jsx("div",{role:"group","aria-label":d,className:at("oksDropdownSectionGroup",r.classNames?.group),children:r.items.map(({key:m,element:g})=>h.cloneElement(g,{itemKey:m,...r.hideSelectedIcon!==void 0?{__sectionHideSelectedIcon:r.hideSelectedIcon}:{},...r.itemClasses?{__sectionItemClasses:r.itemClasses}:{}}))}),f?o.jsx("div",{className:at("oksDropdownSectionDivider",r.classNames?.divider)}):null]})}var Se=h.forwardRef((r,i)=>{const{children:d,title:c,description:f,shortcut:m,startContent:g,endContent:k,selectedIcon:b,showDivider:x=!1,href:T,target:w,rel:z,download:L,ping:R,referrerPolicy:U,isDisabled:_=!1,isSelected:Y,isReadOnly:ee=!1,hideSelectedIcon:Z,closeOnSelect:$,classNames:J,onPress:ie,onPressStart:W,onPressEnd:K,onPressChange:I,onPressUp:pe,onKeyDown:we,onKeyUp:de,onClick:ve,itemKey:ke}=r,ne=Yb(),C=ke??null,q=C!=null&&String(C).trim().length>0,P=!q||_===!0||ne.disabledKeys.has(C),ye=ne.selectionMode==="none"?!1:ne.selectedKeys==="all"?!0:ne.selectedKeys.has(C),me=typeof Y=="boolean"?Y:ye,v=ne.focusedKey===C,S=ne.selectionMode==="multiple"?"menuitemcheckbox":ne.selectionMode==="single"?"menuitemradio":"menuitem",V=ne.selectionMode==="none"?void 0:me?"true":"false",A=r.__sectionItemClasses,ae=r.__sectionHideSelectedIcon,re=Z??ae??ne.hideSelectedIcon,ce=c??d,De=Vb(C??"",r),F=at(at(at("oksDropdownItem",ne.itemClasses?.base),A?.base),J?.base),[ue,Ce]=h.useState(!1),Ne=le=>{P||(ue||(W?.(le),I?.(!0)),Ce(!0))},He=le=>{ue&&(K?.(le),I?.(!1)),Ce(!1)},Ze=()=>{P||q&&(ne.setFocusedKey(C),ne.onItemAction(C,r))},$e=T?"a":"div",te=o.jsxs($e,{ref:nh(i,le=>{q&&ne.registerItemRef(C,le instanceof HTMLElement?le:null,{key:C,disabled:P,textValue:De})}),role:S,"aria-checked":V,"aria-disabled":P?"true":void 0,tabIndex:-1,"data-disabled":P?"true":"false","data-selected":me?"true":"false","data-focused":v?"true":"false",className:F,href:T,target:w,rel:z,download:L,ping:R,referrerPolicy:U,onMouseMove:()=>{P||ne.setFocusedKey(C)},onFocus:()=>{P||ne.setFocusedKey(C)},onPointerDown:le=>{Ne(le)},onPointerUp:le=>{P||(pe?.(le),He(le))},onPointerLeave:le=>{He(le)},onPointerCancel:le=>{He(le)},onKeyDown:le=>{we?.(le),!le.defaultPrevented&&(le.key==="Enter"||le.key===" ")&&Ne(le)},onKeyUp:le=>{if(de?.(le),!le.defaultPrevented&&(le.key==="Enter"||le.key===" ")){if(P)return;pe?.(le),He(le)}},onBlur:le=>{He(le)},onClick:le=>{ve?.(le),!le.defaultPrevented&&(P||(ie?.(le),Ze()))},children:[g!=null?o.jsx("span",{className:"oksDropdownItemStartContent","aria-hidden":"true",children:g}):null,o.jsxs("span",{className:at(at(at("oksDropdownItemWrapper",ne.itemClasses?.wrapper),A?.wrapper),J?.wrapper),children:[o.jsx("span",{className:at(at(at("oksDropdownItemTitle",ne.itemClasses?.title),A?.title),J?.title),children:ce}),f!=null?o.jsx("span",{className:at(at(at("oksDropdownItemDescription",ne.itemClasses?.description),A?.description),J?.description),children:f}):null]}),m!=null?o.jsx("span",{className:at(at(at("oksDropdownItemShortcut",ne.itemClasses?.shortcut),A?.shortcut),J?.shortcut),children:m}):null,k!=null?o.jsx("span",{className:"oksDropdownItemEndContent","aria-hidden":"true",children:k}):me&&re!==!0?o.jsx("span",{className:at(at(at("oksDropdownItemSelectedIcon",ne.itemClasses?.selectedIcon),A?.selectedIcon),J?.selectedIcon),"aria-hidden":"true",children:b??"✓"}):null]});return x?o.jsxs(o.Fragment,{children:[te,o.jsx("div",{className:"oksDropdownItemDivider","aria-hidden":"true"})]}):te});Se.displayName="DropdownItem";var Ol=r=>null;Ol.displayName="DropdownSection";Dn(`@layer components {
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
`);function Pn(r,i){return[typeof r=="string"?r:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function Qb(r){return r==="success"?"success":r==="warning"?"warning":r==="danger"?"error":r==="default"?"default":"info"}function as(r,i){const d=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return r==="default"?d:`var(--oks-color-${r}-${i}, ${d})`}var it=h.forwardRef((r,i)=>{const{title:d,description:c,color:f="default",variant:m="flat",radius:g="md",icon:k,startContent:b,endContent:x,isVisible:T,isClosable:w=!1,hideIcon:z=!1,hideIconWrapper:L=!1,closeButtonProps:R,onClose:U,onVisibleChange:_,classNames:Y,className:ee,style:Z,...$}=r,[J,ie]=h.useState(!0),W=typeof T=="boolean",K=W?T:J,I=d!=null,pe=c!=null,we=h.useMemo(()=>({"--oks-alert-accent":as(f,600),"--oks-alert-bg-50":as(f,50),"--oks-alert-bg-100":as(f,100),"--oks-alert-fg-900":as(f,900)}),[f]),de=h.useMemo(()=>o.jsx(Qm,{type:Qb(f),size:18}),[f]),ve=h.useCallback(()=>{_?.(!1),W||ie(!1),U?.()},[W,U,_]);if(!K)return null;const ke=k??de,ne=!z&&ke!==null,C=ne?o.jsx("span",{className:Pn("oksAlertIcon",Y?.alertIcon),children:ke}):null,q=ne?L?C:o.jsx("span",{className:Pn("oksAlertIconWrapper",Y?.iconWrapper),children:C}):null,P=Pn(Pn("oksAlertCloseButton",Y?.closeButton),R?.className),ye=w===!0?o.jsx("button",{type:"button","aria-label":"Close",...R,className:P,onClick:me=>{R?.onClick?.(me),me.defaultPrevented||ve()},children:o.jsx(Zm,{size:16})}):null;return o.jsxs("div",{...$,ref:i,role:"alert","data-visible":"true","data-closeable":w?"true":"false","data-has-title":I?"true":"false","data-has-description":pe?"true":"false","data-color":f,"data-variant":m,"data-radius":g,className:Pn(Pn("oksAlert",Y?.base),ee),style:{...we,...Z},children:[q,b,o.jsxs("div",{className:Pn("oksAlertMainWrapper",Y?.mainWrapper),children:[I?o.jsx("div",{className:Pn("oksAlertTitle",Y?.title),children:d}):null,pe?o.jsx("div",{className:Pn("oksAlertDescription",Y?.description),children:c}):null]}),x,ye]})});it.displayName="Alert";const Q=({title:r,preview:i,code:d})=>o.jsxs("div",{className:"w-full",children:[o.jsx("h3",{className:"text-lg font-bold",children:r}),o.jsxs(Pc,{defaultSelectedKey:"preview",variant:"underlined",color:"primary",children:[o.jsx(vn,{title:"Preview",children:o.jsx("div",{className:"w-full h-full p-5 border border-gray-300 rounded-md",children:i})},"preview"),o.jsx(vn,{title:"Code",children:o.jsx("pre",{className:"w-full h-full p-5 bg-gray-900 rounded-md text-white",children:o.jsx("code",{children:d})})},"code")]})]}),Zb=()=>o.jsx(Q,{title:"How to usage",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(it,{title:"Heads up",description:"Something happened."}),o.jsx(it,{title:"Title only"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Heads up" description="Something happened." />
<Alert title="Title only" />`})}),Fb=()=>o.jsx(Q,{title:"Colors",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(it,{color:"default",title:"Default",description:"Default color"}),o.jsx(it,{color:"primary",title:"Primary",description:"Primary color"}),o.jsx(it,{color:"secondary",title:"Secondary",description:"Secondary color"}),o.jsx(it,{color:"info",title:"Info",description:"Info color"}),o.jsx(it,{color:"success",title:"Success",description:"Success color"}),o.jsx(it,{color:"warning",title:"Warning",description:"Warning color"}),o.jsx(it,{color:"danger",title:"Danger",description:"Danger color"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert color="default" title="Default" description="Default color" />
<Alert color="primary" title="Primary" description="Primary color" />
<Alert color="secondary" title="Secondary" description="Secondary color" />
<Alert color="info" title="Info" description="Info color" />
<Alert color="success" title="Success" description="Success color" />
<Alert color="warning" title="Warning" description="Warning color" />
<Alert color="danger" title="Danger" description="Danger color" />`})}),Ib=()=>o.jsx(Q,{title:"Variants",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(it,{variant:"flat",title:"Flat",description:"Default variant"}),o.jsx(it,{variant:"solid",title:"Solid",description:"Solid variant"}),o.jsx(it,{variant:"bordered",title:"Bordered",description:"Bordered variant"}),o.jsx(it,{variant:"faded",title:"Faded",description:"Faded variant"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert variant="flat" title="Flat" description="Default variant" />
<Alert variant="solid" title="Solid" description="Solid variant" />
<Alert variant="bordered" title="Bordered" description="Bordered variant" />
<Alert variant="faded" title="Faded" description="Faded variant" />`})}),$b=()=>o.jsx(Q,{title:"Radius",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(it,{radius:"none",title:"None",description:"radius=none"}),o.jsx(it,{radius:"sm",title:"Small",description:"radius=sm"}),o.jsx(it,{radius:"md",title:"Medium",description:"radius=md"}),o.jsx(it,{radius:"lg",title:"Large",description:"radius=lg"}),o.jsx(it,{radius:"full",title:"Full",description:"radius=full"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert radius="none" title="None" description="radius=none" />
<Alert radius="sm" title="Small" description="radius=sm" />
<Alert radius="md" title="Medium" description="radius=md" />
<Alert radius="lg" title="Large" description="radius=lg" />
<Alert radius="full" title="Full" description="radius=full" />`})}),Jb=()=>o.jsx(Q,{title:"Icons",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(it,{title:"Default icon",description:"Icon is derived from color",color:"primary"}),o.jsx(it,{title:"Hide icon",description:"hideIcon=true",hideIcon:!0}),o.jsx(it,{title:"Hide icon wrapper",description:"hideIconWrapper=true",hideIconWrapper:!0}),o.jsx(it,{title:"Custom icon",description:"Use icon prop",icon:o.jsx("span",{"aria-hidden":!0,className:"text-lg leading-none",children:"★"})})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Default icon" description="Icon is derived from color" color="primary" />
<Alert title="Hide icon" description="hideIcon=true" hideIcon />
<Alert title="Hide icon wrapper" description="hideIconWrapper=true" hideIconWrapper />
<Alert title="Custom icon" description="Use icon prop" icon={<span aria-hidden>★</span>} />`})}),Wb=()=>o.jsx(Q,{title:"With Action",preview:o.jsx("div",{className:"flex flex-col gap-3",children:o.jsx(it,{title:"Update available",description:"A newer version is ready to install.",color:"primary",endContent:o.jsx(B,{size:"sm",children:"Update"})})}),code:o.jsx(o.Fragment,{children:`import { Alert, Button } from "oks-ui";

<Alert
  title="Update available"
  description="A newer version is ready to install."
  color="primary"
  endContent={<Button size="sm">Update</Button>}
/>`})}),Pb=()=>o.jsx(Q,{title:"Closable",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(it,{title:"Closable alert",description:"Click Close to hide (uncontrolled).",isClosable:!0}),o.jsx(it,{title:"Closable (custom close button)",description:"closeButtonProps example",isClosable:!0,closeButtonProps:{className:"bg-white/15 hover:bg-white/20"},color:"danger",variant:"solid"})]}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

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
/>`})}),ex=()=>{const[r,i]=h.useState(!0);return o.jsx(Q,{title:"Controlled Visibility",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(B,{size:"sm",variant:"bordered",onClick:()=>i(!0),children:"Show"}),o.jsx(B,{size:"sm",variant:"bordered",onClick:()=>i(!1),children:"Hide"}),o.jsxs("div",{className:"text-sm text-gray-700",children:["isVisible: ",String(r)]})]}),o.jsx(it,{title:"Controlled alert",description:"Uses isVisible and onVisibleChange.",isClosable:!0,isVisible:r,onVisibleChange:i,color:"success"})]}),code:o.jsx(o.Fragment,{children:`import { useState } from "react";
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
}`})})},tx=()=>o.jsx(Q,{title:"ClassNames",preview:o.jsx("div",{className:"flex flex-col gap-3",children:o.jsx(it,{title:"Custom slots",description:"Uses classNames slots to style parts.",classNames:{base:"ring-2 ring-purple-400/60",title:"text-purple-900",description:"text-purple-900/80",iconWrapper:"text-purple-900",closeButton:"text-purple-900"},isClosable:!0,color:"secondary",variant:"flat"})}),code:o.jsx(o.Fragment,{children:`import { Alert } from "oks-ui";

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
/>`})}),nx=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(Zb,{}),o.jsx(Fb,{}),o.jsx(Ib,{}),o.jsx($b,{}),o.jsx(Jb,{}),o.jsx(Wb,{}),o.jsx(Pb,{}),o.jsx(ex,{}),o.jsx(tx,{})]}),ax=()=>o.jsx(Q,{title:"How to usage",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(se,{name:"Omkar Sahu"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=5"}),o.jsx(se,{name:"Manav"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
            
            <Avatar name="Omkar Sahu" />
            <Avatar src="https://i.pravatar.cc/150?img=5" />
            <Avatar name="Manav" />`})}),ox=()=>o.jsx(Q,{title:"Sizes",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(se,{className:"w-6 h-6 text-tiny",src:"https://i.pravatar.cc/150?img=5"}),o.jsx(se,{size:"sm",src:"https://i.pravatar.cc/150?img=5"}),o.jsx(se,{size:"md",src:"https://i.pravatar.cc/150?img=5"}),o.jsx(se,{size:"lg",src:"https://i.pravatar.cc/150?img=5"}),o.jsx(se,{className:"w-20 h-20 text-large",src:"https://i.pravatar.cc/150?img=5"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar className="w-6 h-6 text-tiny" name="Omkar Sahu" />
<Avatar size="sm" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="lg" src="https://i.pravatar.cc/150?img=5" />
<Avatar className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?img=5" />`})}),lx=()=>o.jsx(Q,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(se,{name:"Default",color:"default"}),o.jsx(se,{name:"Primary",color:"primary"}),o.jsx(se,{name:"Secondary",color:"secondary"}),o.jsx(se,{name:"Info",color:"info"}),o.jsx(se,{name:"Success",color:"success"}),o.jsx(se,{name:"Warning",color:"warning"}),o.jsx(se,{name:"Danger",color:"danger"})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="Default" color="default" />
<Avatar name="Primary" color="primary" />
<Avatar name="Secondary" color="secondary" />
<Avatar name="Info" color="info" />
<Avatar name="Success" color="success" />
<Avatar name="Warning" color="warning" />
<Avatar name="Danger" color="danger" />`})}),rx=()=>o.jsx(Q,{title:"Color depth",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(se,{name:"50",colorDepth:50}),o.jsx(se,{name:"100",colorDepth:100}),o.jsx(se,{name:"200",colorDepth:200}),o.jsx(se,{name:"3000",colorDepth:300}),o.jsx(se,{name:"400",colorDepth:400}),o.jsx(se,{name:"500",colorDepth:500}),o.jsx(se,{name:"600",colorDepth:600}),o.jsx(se,{name:"700",colorDepth:700}),o.jsx(se,{name:"800",colorDepth:800}),o.jsx(se,{name:"900",colorDepth:900})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="50" colorDepth={50} />
<Avatar name="100" colorDepth={100} />
<Avatar name="200" colorDepth={200} />
<Avatar name="3000" colorDepth={300} />
<Avatar name="400" colorDepth={400} />
<Avatar name="500" colorDepth={500} />
<Avatar name="600" colorDepth={600} />
<Avatar name="700" colorDepth={700} />
<Avatar name="800" colorDepth={800} />
<Avatar name="900" colorDepth={900} />`})}),sx=()=>o.jsx(Q,{title:"Disabled",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(se,{isDisabled:!0,name:"Omkar Sahu"}),o.jsx(se,{isDisabled:!0,src:"https://i.pravatar.cc/150?img=5"}),o.jsx(se,{isDisabled:!0,name:"Manav"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar isDisabled name="Omkar Sahu" />
<Avatar isDisabled src="https://i.pravatar.cc/150?img=5" />
<Avatar isDisabled name="Manav" />`})}),ix=()=>o.jsx(Q,{title:"Border",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(se,{isBordered:!0,name:"Omkar Sahu"}),o.jsx(se,{isBordered:!0,src:"https://i.pravatar.cc/150?img=5"}),o.jsx(se,{isBordered:!0,name:"Manav"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
                
    <Avatar isBordered name="Omkar Sahu" />
    <Avatar isBordered src="https://i.pravatar.cc/150?img=5" />
    <Avatar isBordered name="Manav" />`})}),cx=()=>o.jsx(Q,{title:"Radius",preview:o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-3 items-center",children:[o.jsx(se,{radius:"none"}),o.jsx(se,{radius:"sm"}),o.jsx(se,{radius:"md"}),o.jsx(se,{radius:"lg"}),o.jsx(se,{radius:"full"})]})}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar radius="none" />
<Avatar radius="sm" />
<Avatar radius="md" />
<Avatar radius="lg" />
<Avatar radius="full" />`})}),ux=()=>o.jsx(Q,{title:"Tooltip",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(se,{name:"Hover me",tooltip:!0}),o.jsx(se,{name:"Custom content",tooltip:{content:o.jsxs("div",{className:"flex flex-col",children:[o.jsx("span",{className:"font-semibold",children:"Custom tooltip"}),o.jsx("span",{className:"text-xs opacity-80",children:"Any ReactNode"})]})}}),o.jsx(se,{name:"Placement",tooltip:{props:{placement:"bottom",showArrow:!0}}}),o.jsx(se,{isDisabled:!0,name:"Disabled + tooltip",tooltip:!0})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

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

<Avatar isDisabled name="Disabled + tooltip" tooltip />`})}),Gc="https://example.com/does-not-exist.png",dx=()=>o.jsx(Q,{title:"Fallbacks",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(se,{name:"Omkar Sahu"}),o.jsx(se,{}),o.jsx(se,{src:Gc,name:"Broken (no fallback)"}),o.jsx(se,{src:Gc,name:"Broken + showFallback",showFallback:!0}),o.jsx(se,{src:Gc,name:"Custom fallback",showFallback:!0,fallback:o.jsx("span",{className:"text-xs font-semibold",children:"FB"})}),o.jsx(se,{name:"Custom icon",icon:o.jsx("span",{className:"text-sm",children:"★"})})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

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
<Avatar name="Custom icon" icon={<span className="text-sm">★</span>} />`})}),fx=()=>o.jsx(Q,{title:"Focusable",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("div",{className:"text-sm opacity-80",children:"Use Tab to see focus ring"}),o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(se,{isFocusable:!0,name:"Focusable"}),o.jsx(se,{isFocusable:!0,isBordered:!0,name:"Bordered"}),o.jsx(se,{isFocusable:!0,tooltip:!0,name:"Focusable + tooltip"}),o.jsx(se,{isFocusable:!0,tabIndex:-1,name:"tabIndex -1"})]})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar isFocusable name="Focusable" />
<Avatar isFocusable isBordered name="Bordered" />
<Avatar isFocusable tooltip name="Focusable + tooltip" />
<Avatar isFocusable tabIndex={-1} name="tabIndex -1" />`})}),rh=Tn.forwardRef((r,i)=>o.jsx("img",{...r,ref:i,style:{filter:"grayscale(1)",...r.style??{}}}));rh.displayName="GrayscaleImg";const px=()=>o.jsx(Q,{title:"Custom image",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(se,{name:"imgProps",src:"https://i.pravatar.cc/150?img=5",imgProps:{loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",alt:"Avatar photo"}}),o.jsx(se,{name:"ImgComponent",src:"https://i.pravatar.cc/150?img=5",ImgComponent:rh,imgProps:{referrerPolicy:"no-referrer"}})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
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
/>`})}),mx=()=>o.jsx(Q,{title:"classNames (slots)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(se,{name:"Slot styles",classNames:{base:"ring-2 ring-pink-500 ring-offset-2 ring-offset-white",name:"text-black",fallback:"bg-white/30"}}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=5",classNames:{base:"ring-2 ring-emerald-500 ring-offset-2 ring-offset-white",img:"scale-110"}}),o.jsx(se,{classNames:{base:"ring-2 ring-sky-500 ring-offset-2 ring-offset-white",icon:"text-yellow-200"},icon:o.jsx("span",{className:"text-sm",children:"★"})})]}),code:o.jsx(o.Fragment,{children:`import { Avatar } from "oks-ui";

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
/>`})}),hx=o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsxs(Za,{children:[o.jsx(se,{src:"https://i.pravatar.cc/150?img=5"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=6"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=7"})]}),o.jsxs(Za,{max:3,total:8,children:[o.jsx(se,{src:"https://i.pravatar.cc/150?img=8"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=9"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=10"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=11"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=12"})]}),o.jsxs(Za,{max:2,total:5,renderCount:r=>`+${r} more`,children:[o.jsx(se,{name:"A"}),o.jsx(se,{name:"B"}),o.jsx(se,{name:"C"}),o.jsx(se,{name:"D"})]})]}),o.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:o.jsxs(Za,{isGrid:!0,children:[o.jsx(se,{src:"https://i.pravatar.cc/150?img=13"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=14"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=15"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=16"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=17"}),o.jsx(se,{src:"https://i.pravatar.cc/150?img=18"})]})}),o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsxs(Za,{size:"sm",radius:"md",color:"success",isBordered:!0,children:[o.jsx(se,{name:"Group"}),o.jsx(se,{name:"Styles"}),o.jsx(se,{name:"Override",color:"danger"}),o.jsx(se,{name:"Own radius",radius:"full"})]}),o.jsxs(Za,{isDisabled:!0,size:"sm",color:"secondary",children:[o.jsx(se,{name:"Disabled"}),o.jsx(se,{name:"Group"}),o.jsx(se,{name:"Avatars"})]})]})]}),vx=`import { Avatar, AvatarGroup } from "oks-ui";

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
</AvatarGroup>`,gx=()=>o.jsx(Q,{title:"AvatarGroup",preview:hx,code:vx}),bx=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(ax,{}),o.jsx(ox,{}),o.jsx(lx,{}),o.jsx(rx,{}),o.jsx(cx,{}),o.jsx(ix,{}),o.jsx(sx,{}),o.jsx(ux,{}),o.jsx(dx,{}),o.jsx(fx,{}),o.jsx(px,{}),o.jsx(mx,{}),o.jsx(gx,{})]}),xx=()=>o.jsx(Q,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[o.jsx(qe,{content:5,"aria-label":"5 unread notifications",children:o.jsx(B,{variant:"bordered",children:"Notifications"})}),o.jsx(qe,{isDot:!0,"aria-label":"Has new activity",children:o.jsx(B,{variant:"bordered",children:"Activity"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={5} aria-label="5 unread notifications">
  <Button variant="bordered">Notifications</Button>
</Badge>

<Badge isDot aria-label="Has new activity">
  <Button variant="bordered">Activity</Button>
</Badge>`})}),yx=()=>o.jsxs(o.Fragment,{children:[o.jsx(Q,{title:"Variants",preview:o.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[o.jsx(qe,{content:3,variant:"solid","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"solid"})}),o.jsx(qe,{content:3,variant:"bordered","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"bordered"})}),o.jsx(qe,{content:3,variant:"light","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"light"})}),o.jsx(qe,{content:3,variant:"flat","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"flat"})}),o.jsx(qe,{content:3,variant:"faded","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"faded"})}),o.jsx(qe,{content:3,variant:"shadow","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"shadow"})}),o.jsx(qe,{content:3,variant:"ghost","aria-label":"3 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"ghost"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={3} variant="solid">...</Badge>
<Badge content={3} variant="bordered">...</Badge>
<Badge content={3} variant="light">...</Badge>
<Badge content={3} variant="flat">...</Badge>
<Badge content={3} variant="faded">...</Badge>
<Badge content={3} variant="shadow">...</Badge>
<Badge content={3} variant="ghost">...</Badge>`})}),o.jsx(Q,{title:"Max",preview:o.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[o.jsx(qe,{content:9,max:9,"aria-label":"9 notifications",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"max=9"})}),o.jsx(qe,{content:10,max:9,"aria-label":"10 notifications",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"10 → 9+"})}),o.jsx(qe,{content:4890,max:999,"aria-label":"4890 notifications",children:o.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"4890 → 999+"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} max={9} aria-label="9 notifications">...</Badge>
<Badge content={10} max={9} aria-label="10 notifications">...</Badge>
<Badge content={4890} max={999} aria-label="4890 notifications">...</Badge>`})})]}),wx=()=>o.jsx(Q,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[o.jsx(qe,{content:1,color:"default","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"default"})}),o.jsx(qe,{content:1,color:"primary","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"primary"})}),o.jsx(qe,{content:1,color:"secondary","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"secondary"})}),o.jsx(qe,{content:1,color:"info","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"info"})}),o.jsx(qe,{content:1,color:"success","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"success"})}),o.jsx(qe,{content:1,color:"warning","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"warning"})}),o.jsx(qe,{content:1,color:"danger","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"danger"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} color="default">...</Badge>
<Badge content={1} color="primary">...</Badge>
<Badge content={1} color="secondary">...</Badge>
<Badge content={1} color="success">...</Badge>
<Badge content={1} color="warning">...</Badge>
<Badge content={1} color="danger">...</Badge>`})}),kx=()=>o.jsx(Q,{title:"Sizes",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(qe,{content:7,size:"sm","aria-label":"7 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"sm"})}),o.jsx(qe,{content:7,size:"md","aria-label":"7 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"md"})}),o.jsx(qe,{content:7,size:"lg","aria-label":"7 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"lg"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={7} size="sm">...</Badge>
<Badge content={7} size="md">...</Badge>
<Badge content={7} size="lg">...</Badge>`})}),jx=()=>o.jsx(Q,{title:"Placements",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(qe,{content:1,placement:"top-left","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-left"})}),o.jsx(qe,{content:1,placement:"top-right","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-right"})}),o.jsx(qe,{content:1,placement:"bottom-left","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-left"})}),o.jsx(qe,{content:1,placement:"bottom-right","aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-right"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} placement="top-left">...</Badge>
<Badge content={1} placement="top-right">...</Badge>
<Badge content={1} placement="bottom-left">...</Badge>
<Badge content={1} placement="bottom-right">...</Badge>`})}),Sx=()=>o.jsx(Q,{title:"Shapes",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(qe,{content:9,shape:"rectangle","aria-label":"9 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"rectangle"})}),o.jsx(qe,{content:9,shape:"circle","aria-label":"9 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"circle"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} shape="rectangle">...</Badge>
<Badge content={9} shape="circle">...</Badge>`})}),Tx=()=>o.jsx(Q,{title:"Outline",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(qe,{content:2,"aria-label":"2 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline"})}),o.jsx(qe,{content:2,showOutline:!1,"aria-label":"2 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline=false"})}),o.jsx(qe,{content:2,disableOutline:!0,"aria-label":"2 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"disableOutline"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={2}>...</Badge>
<Badge content={2} showOutline={false}>...</Badge>
<Badge content={2} disableOutline>...</Badge>`})}),Dx=()=>o.jsx(Q,{title:"Badge visibility",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(qe,{content:1,"aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"visible"})}),o.jsx(qe,{content:1,isInvisible:!0,"aria-label":"1 item",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isInvisible"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1}>...</Badge>
<Badge content={1} isInvisible>...</Badge>`})}),Cx=()=>o.jsx(Q,{title:"Dot and one-character",preview:o.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[o.jsx(qe,{content:"9",isOneChar:!0,"aria-label":"9 items",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isOneChar"})}),o.jsx(qe,{isDot:!0,shape:"circle","aria-label":"Has updates",children:o.jsx("span",{className:"px-3 py-2 rounded-md border",children:"dot"})})]}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content="9" isOneChar>...</Badge>
<Badge isDot shape="circle">...</Badge>`})}),Ax=()=>o.jsx(Q,{title:"Slot styling (classNames)",preview:o.jsx("div",{className:"flex gap-6 items-center flex-wrap",children:o.jsx(qe,{content:12,color:"success","aria-label":"12 items",classNames:{base:"ring-1 ring-green-400/50 rounded-md",badge:"bg-green-600 text-white"},children:o.jsx("button",{type:"button",className:"px-3 py-2 rounded-md border",children:"Custom slots"})})}),code:o.jsx(o.Fragment,{children:`import { Badge } from "oks-ui";

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
</Badge>`})}),Bx=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(xx,{}),o.jsx(yx,{}),o.jsx(wx,{}),o.jsx(kx,{}),o.jsx(jx,{}),o.jsx(Sx,{}),o.jsx(Tx,{}),o.jsx(Dx,{}),o.jsx(Cx,{}),o.jsx(Ax,{})]}),Ex=()=>o.jsx(Q,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{children:"Save"}),o.jsx(B,{variant:"bordered",children:"Cancel"})]}),code:o.jsx(o.Fragment,{children:`import { Button } from "oks-ui";

<Button>Save</Button>
<Button variant="bordered">Cancel</Button>`})}),Nx=()=>o.jsx(Q,{title:"Disabled",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{isDisabled:!0,children:"Disabled"}),o.jsx(B,{color:"primary",isDisabled:!0,children:"Primary Disabled"})]}),code:o.jsx(o.Fragment,{children:`<Button isDisabled>Disabled</Button>
<Button color="primary" isDisabled>
  Primary Disabled
</Button>`})}),zx=()=>o.jsx(Q,{title:"Sizes",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{size:"sm",children:"Small"}),o.jsx(B,{size:"md",children:"Medium"}),o.jsx(B,{size:"lg",children:"Large"})]}),code:o.jsx(o.Fragment,{children:`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`})}),Rx=()=>o.jsx(Q,{title:"Radius",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{radius:"none",children:"None"}),o.jsx(B,{radius:"sm",children:"SM"}),o.jsx(B,{radius:"md",children:"MD"}),o.jsx(B,{radius:"lg",children:"LG"}),o.jsx(B,{radius:"full",children:"Full"})]}),code:o.jsx(o.Fragment,{children:`<Button radius="none">None</Button>
<Button radius="sm">SM</Button>
<Button radius="md">MD</Button>
<Button radius="lg">LG</Button>
<Button radius="full">Full</Button>`})}),Mx=()=>o.jsx(Q,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{color:"default",children:"Default"}),o.jsx(B,{color:"primary",children:"Primary"}),o.jsx(B,{color:"secondary",children:"Secondary"}),o.jsx(B,{color:"info",children:"Info"}),o.jsx(B,{color:"success",children:"Success"}),o.jsx(B,{color:"warning",children:"Warning"}),o.jsx(B,{color:"danger",children:"Danger"})]}),code:o.jsx(o.Fragment,{children:`<Button color="default">Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`})}),Ox=()=>o.jsx(Q,{title:"Variants",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{variant:"solid",children:"Solid"}),o.jsx(B,{variant:"bordered",children:"Bordered"}),o.jsx(B,{variant:"flat",children:"Flat"}),o.jsx(B,{variant:"light",children:"Light"}),o.jsx(B,{variant:"faded",children:"Faded"}),o.jsx(B,{variant:"shadow",children:"Shadow"}),o.jsx(B,{variant:"ghost",children:"Ghost"})]}),code:o.jsx(o.Fragment,{children:`<Button variant="solid">Solid</Button>
<Button variant="bordered">Bordered</Button>
<Button variant="flat">Flat</Button>
<Button variant="light">Light</Button>
<Button variant="faded">Faded</Button>
<Button variant="shadow">Shadow</Button>
<Button variant="ghost">Ghost</Button>`})}),_x=()=>o.jsx(Q,{title:"Full width",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("div",{className:"w-full max-w-sm",children:o.jsx(B,{fullWidth:!0,children:"Submit"})}),o.jsxs("div",{className:"flex gap-3 items-center w-full max-w-sm",children:[o.jsx(B,{variant:"bordered",children:"Back"}),o.jsx(B,{fullWidth:!0,children:"Continue"}),o.jsx(B,{variant:"bordered",children:"Next"})]})]}),code:o.jsx(o.Fragment,{children:`<Button fullWidth>Submit</Button>

<div style={{ display: "flex", gap: 8 }}>
  <Button>Back</Button>
  <Button fullWidth>Continue</Button>
  <Button>Next</Button>
</div>`})}),Ux=()=>o.jsx(Q,{title:"Loading",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{isLoading:!0,children:"Saving"}),o.jsx(B,{isLoading:!0,spinnerPlacement:"end",children:"Saving"}),o.jsx(B,{isLoading:!0,spinner:o.jsx("span",{"aria-hidden":"true",children:"⏳"}),children:"Saving"})]}),code:o.jsx(o.Fragment,{children:`<Button isLoading>Saving</Button>
<Button isLoading spinnerPlacement="end">Saving</Button>
<Button isLoading spinner={<span aria-hidden="true">⏳</span>}>Saving</Button>`})}),Hx=()=>o.jsx(Q,{title:"With icons",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{startContent:o.jsx("span",{"aria-hidden":"true",children:"←"}),children:"Back"}),o.jsx(B,{endContent:o.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Next"})]}),code:o.jsx(o.Fragment,{children:`<Button startContent={<span aria-hidden="true">←</span>}>Back</Button>
<Button endContent={<span aria-hidden="true">→</span>}>Next</Button>`})}),Lx=()=>o.jsx(Q,{title:"Icon only",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{isIconOnly:!0,"aria-label":"Settings",children:o.jsx("span",{"aria-hidden":"true",children:"⚙"})}),o.jsx(B,{isIconOnly:!0,"aria-label":"Search",variant:"bordered",children:o.jsx("span",{"aria-hidden":"true",children:"⌕"})})]}),code:o.jsx(o.Fragment,{children:`<Button isIconOnly aria-label="Settings">
  <span aria-hidden="true">⚙</span>
</Button>
<Button isIconOnly aria-label="Search" variant="bordered">
  <span aria-hidden="true">⌕</span>
</Button>`})}),Gx=()=>o.jsx(Q,{title:"Icon only + loading",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading",children:o.jsx("span",{"aria-hidden":"true",children:"⚙"})}),o.jsx(B,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading bordered",variant:"bordered",children:o.jsx("span",{"aria-hidden":"true",children:"⌛"})})]}),code:o.jsx(o.Fragment,{children:`<Button isIconOnly isLoading aria-label="Loading">
  <span aria-hidden="true">⚙</span>
</Button>`})}),Yx=()=>o.jsx(Q,{title:"ButtonGroup",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(Vc,{variant:"bordered",color:"primary","aria-label":"Pagination",children:[o.jsx(B,{children:"Prev"}),o.jsx(B,{children:"Next"})]}),o.jsxs(Vc,{variant:"solid",color:"secondary","aria-label":"Actions",children:[o.jsx(B,{children:"Left"}),o.jsx(B,{children:"Middle"}),o.jsx(B,{children:"Right"})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, ButtonGroup } from "oks-ui";

<ButtonGroup variant="bordered" color="primary" aria-label="Pagination">
  <Button>Prev</Button>
  <Button>Next</Button>
</ButtonGroup>`})}),qx=()=>{const[r,i]=h.useState("-"),[d,c]=h.useState(!1);return o.jsx(Q,{title:"Press events",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPressStart:()=>i("onPressStart"),onPressEnd:()=>i("onPressEnd"),onPressUp:()=>i("onPressUp"),onPress:()=>i("onPress"),onPressChange:f=>c(f),children:"Press me"}),o.jsxs("div",{className:"text-sm",children:["Last event: ",r]}),o.jsxs("div",{className:"text-sm",children:["Pressed: ",String(d)]})]}),code:o.jsx(o.Fragment,{children:`<Button
  onPressStart={() => {}}
  onPressEnd={() => {}}
  onPressUp={() => {}}
  onPress={() => {}}
  onPressChange={(isPressed) => {}}
>
  Press me
</Button>`})})},Vx=()=>{const[r,i]=h.useState(!1),[d,c]=h.useState(!1);return o.jsx(Q,{title:"Ripple and animation",preview:o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(B,{variant:"bordered",onPress:()=>i(f=>!f),children:["disableRipple: ",String(r)]}),o.jsxs(B,{variant:"bordered",onPress:()=>c(f=>!f),children:["disableAnimation: ",String(d)]})]}),o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{color:"primary",disableRipple:r,disableAnimation:d,children:"Try click"}),o.jsx(B,{variant:"bordered",disableRipple:r,disableAnimation:d,children:"Try click"})]})]}),code:o.jsx(o.Fragment,{children:"<Button disableRipple disableAnimation>Try click</Button>"})})},Xx=()=>o.jsx(Q,{title:"ClassName and style",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{className:"bg-indigo-600 text-white hover:bg-indigo-500",children:"className"}),o.jsx(B,{style:{background:"linear-gradient(90deg, #14b8a6, #3b82f6)",color:"white"},children:"style"})]}),code:o.jsx(o.Fragment,{children:`<Button className="bg-indigo-600 text-white hover:bg-indigo-500">
  className
</Button>

<Button style={{ background: "linear-gradient(90deg, #14b8a6, #3b82f6)", color: "white" }}>
  style
</Button>`})}),Kx=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(Ex,{}),o.jsx(Nx,{}),o.jsx(zx,{}),o.jsx(Rx,{}),o.jsx(Mx,{}),o.jsx(Ox,{}),o.jsx(_x,{}),o.jsx(Ux,{}),o.jsx(Hx,{}),o.jsx(Lx,{}),o.jsx(Gx,{}),o.jsx(Yx,{}),o.jsx(qx,{}),o.jsx(Vx,{}),o.jsx(Xx,{})]}),Qx=()=>o.jsx(Q,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{children:"Chip"}),o.jsx(Ve,{variant:"bordered",children:"Bordered"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip>Chip</Chip>
<Chip variant="bordered">Bordered</Chip>`})}),Zx=()=>o.jsx(Q,{title:"Variants",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{variant:"solid",color:"primary",children:"solid"}),o.jsx(Ve,{variant:"bordered",color:"primary",children:"bordered"}),o.jsx(Ve,{variant:"light",color:"primary",children:"light"}),o.jsx(Ve,{variant:"flat",color:"primary",children:"flat"}),o.jsx(Ve,{variant:"faded",color:"primary",children:"faded"}),o.jsx(Ve,{variant:"shadow",color:"primary",children:"shadow"}),o.jsx(Ve,{variant:"dot",color:"primary",children:"dot"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip variant="solid" color="primary">solid</Chip>
<Chip variant="bordered" color="primary">bordered</Chip>
<Chip variant="light" color="primary">light</Chip>
<Chip variant="flat" color="primary">flat</Chip>
<Chip variant="faded" color="primary">faded</Chip>
<Chip variant="shadow" color="primary">shadow</Chip>
<Chip variant="dot" color="primary">dot</Chip>`})}),Fx=()=>o.jsx(Q,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{color:"default",children:"default"}),o.jsx(Ve,{color:"primary",children:"primary"}),o.jsx(Ve,{color:"secondary",children:"secondary"}),o.jsx(Ve,{color:"success",children:"success"}),o.jsx(Ve,{color:"warning",children:"warning"}),o.jsx(Ve,{color:"danger",children:"danger"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="default">default</Chip>
<Chip color="primary">primary</Chip>
<Chip color="secondary">secondary</Chip>
<Chip color="success">success</Chip>
<Chip color="warning">warning</Chip>
<Chip color="danger">danger</Chip>`})}),Ix=()=>o.jsx(Q,{title:"Color depth",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{color:"primary",colorDepth:300,children:"300"}),o.jsx(Ve,{color:"primary",colorDepth:500,children:"500"}),o.jsx(Ve,{color:"primary",colorDepth:700,children:"700"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="primary" colorDepth={300}>300</Chip>
<Chip color="primary" colorDepth={500}>500</Chip>
<Chip color="primary" colorDepth={700}>700</Chip>`})}),$x=()=>o.jsx(Q,{title:"Sizes",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{size:"sm",children:"sm"}),o.jsx(Ve,{size:"md",children:"md"}),o.jsx(Ve,{size:"lg",children:"lg"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip size="sm">sm</Chip>
<Chip size="md">md</Chip>
<Chip size="lg">lg</Chip>`})}),Jx=()=>o.jsx(Q,{title:"Radius",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{radius:"none",children:"none"}),o.jsx(Ve,{radius:"sm",children:"sm"}),o.jsx(Ve,{radius:"md",children:"md"}),o.jsx(Ve,{radius:"lg",children:"lg"}),o.jsx(Ve,{radius:"full",children:"full"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip radius="none">none</Chip>
<Chip radius="sm">sm</Chip>
<Chip radius="md">md</Chip>
<Chip radius="lg">lg</Chip>
<Chip radius="full">full</Chip>`})}),Wx=()=>o.jsx(Q,{title:"Disabled",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{isDisabled:!0,children:"Disabled"}),o.jsx(Ve,{isDisabled:!0,onClose:()=>{},children:"Disabled close"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip isDisabled>Disabled</Chip>
<Chip isDisabled onClose={() => {}}>Disabled close</Chip>`})}),Px=()=>o.jsx(Q,{title:"Start & end content",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{startContent:o.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Start"}),o.jsx(Ve,{endContent:o.jsx("span",{"aria-hidden":"true",children:"→"}),children:"End"}),o.jsx(Ve,{startContent:o.jsx("span",{"aria-hidden":"true",children:"★"}),endContent:o.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Both"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip startContent={<span aria-hidden="true">★</span>}>Start</Chip>
<Chip endContent={<span aria-hidden="true">→</span>}>End</Chip>
<Chip
  startContent={<span aria-hidden="true">★</span>}
  endContent={<span aria-hidden="true">→</span>}
>
  Both
</Chip>`})}),ey=()=>o.jsx(Q,{title:"With avatar",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{avatar:o.jsx("img",{src:"https://i.pravatar.cc/32?img=1",alt:"avatar",width:24,height:24}),children:"Avatar"}),o.jsx(Ve,{variant:"faded",color:"secondary",avatar:o.jsx("img",{src:"https://i.pravatar.cc/32?img=2",alt:"avatar",width:24,height:24}),children:"Faded"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip avatar={<img src="https://i.pravatar.cc/32?img=1" alt="avatar" />}>
  Avatar
</Chip>`})}),ty=()=>o.jsx(Q,{title:"With close button",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Ve,{onClose:()=>{},children:"Closable"}),o.jsx(Ve,{onClose:()=>{},endContent:o.jsx("span",{"aria-hidden":"true",children:"×"}),color:"danger",variant:"flat",children:"Custom close icon"})]}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

<Chip onClose={() => {}}>Closable</Chip>
<Chip onClose={() => {}} endContent={<span aria-hidden="true">×</span>}>
  Custom close icon
</Chip>`})}),ny=()=>o.jsx(Q,{title:"Slot styling (classNames)",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(Ve,{variant:"dot",color:"success",onClose:()=>{},avatar:o.jsx("img",{src:"https://i.pravatar.cc/32?img=3",alt:"avatar"}),classNames:{base:"ring-1 ring-green-400/60",content:"font-semibold",dot:"bg-green-600",avatar:"ring-1 ring-green-300 rounded-full",closeButton:"hover:bg-green-200/40"},children:"Custom slots"})}),code:o.jsx(o.Fragment,{children:`import { Chip } from "oks-ui";

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
</Chip>`})}),ay=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(Qx,{}),o.jsx(Zx,{}),o.jsx(Fx,{}),o.jsx(Ix,{}),o.jsx($x,{}),o.jsx(Jx,{}),o.jsx(Wx,{}),o.jsx(Px,{}),o.jsx(ey,{}),o.jsx(ty,{}),o.jsx(ny,{})]}),oy=()=>o.jsx(Q,{title:"How to use",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{children:"Open"})}),o.jsxs(ht,{variant:"solid",color:"primary",autoFocus:"first",onAction:r=>console.log("onAction:",r),onClose:()=>console.log("onClose"),children:[o.jsx(Se,{children:"New"},"new"),o.jsx(Se,{children:"Edit"},"edit")]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),ly=()=>{const[r,i]=Tn.useState(!1);return o.jsx(Q,{title:"Controlled open (isOpen / onOpenChange)",preview:o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsx(B,{variant:"bordered",onPress:()=>i(d=>!d),children:"Toggle (external)"}),o.jsxs(dt,{isOpen:r,onOpenChange:i,children:[o.jsx(ft,{children:o.jsx(B,{children:"Open"})}),o.jsxs(ht,{onAction:d=>console.log("onAction:",d),children:[o.jsx(Se,{children:"New"},"new"),o.jsx(Se,{children:"Edit"},"edit")]})]})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
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
}`})})},ry=["bottom-start","bottom-end","top-start","right"],sy=()=>o.jsx(Q,{title:"Placement",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:ry.map(r=>o.jsxs(dt,{placement:r,children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:r})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Item A"},"a"),o.jsx(Se,{children:"Item B"},"b")]})]},r))}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</div>`})}),iy=()=>o.jsx(Q,{title:"Offset / containerPadding / shouldFlip",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{offset:0,children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"offset=0"})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Item A"},"a"),o.jsx(Se,{children:"Item B"},"b")]})]}),o.jsxs(dt,{offset:16,children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"offset=16"})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Item A"},"a"),o.jsx(Se,{children:"Item B"},"b")]})]}),o.jsxs(dt,{containerPadding:0,shouldFlip:!1,placement:"bottom-end",children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"no flip"})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Item A"},"a"),o.jsx(Se,{children:"Item B"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),cy=()=>o.jsx(Q,{title:"Dismiss behavior (isDismissable / isKeyboardDismissDisabled)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Default"})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Outside click closes"},"a"),o.jsx(Se,{children:"Escape closes"},"b")]})]}),o.jsxs(dt,{isDismissable:!1,children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"No outside close"})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Try clicking outside"},"a"),o.jsx(Se,{children:"Use item or Escape"},"b")]})]}),o.jsxs(dt,{isKeyboardDismissDisabled:!0,children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"No Escape"})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Try pressing Escape"},"a"),o.jsx(Se,{children:"Outside click still works"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),uy=()=>{const r=Tn.useRef(null);return o.jsx(Q,{title:"shouldCloseOnInteractOutside",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx("div",{ref:r,className:"px-3 py-2 border border-dashed border-gray-400 rounded-md",children:"Safe zone (clicking here won't close)"}),o.jsxs(dt,{shouldCloseOnInteractOutside:i=>!r.current?.contains(i),children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Item A"},"a"),o.jsx(Se,{children:"Item B"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
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
}`})})},dy=()=>{const r=Tn.useRef(null),[i,d]=Tn.useState(null);return Tn.useEffect(()=>{d(r.current)},[]),o.jsx(Q,{title:"portalContainer",preview:o.jsxs("div",{className:"flex gap-3 items-start flex-wrap",children:[o.jsx("div",{ref:r,className:"w-72 h-40 border border-gray-300 rounded-md p-2",children:"Portal container box"}),o.jsxs(dt,{portalContainer:i,placement:"bottom-start",children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{children:[o.jsx(Se,{children:"Item A"},"a"),o.jsx(Se,{children:"Item B"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
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
}`})})},fy=()=>o.jsx(Q,{title:"closeOnSelect (Dropdown default)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Default (closes)"})}),o.jsxs(ht,{onAction:r=>console.log("default onAction:",r),children:[o.jsx(Se,{children:"Select me"},"a"),o.jsx(Se,{children:"Select me"},"b")]})]}),o.jsxs(dt,{closeOnSelect:!1,children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"closeOnSelect=false"})}),o.jsxs(ht,{onAction:r=>console.log("no close onAction:",r),children:[o.jsx(Se,{children:"Menu stays open"},"a"),o.jsx(Se,{children:"Menu stays open"},"b")]})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown closeOnSelect={false}>
  <DropdownTrigger>
    <Button variant="bordered">closeOnSelect=false</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => console.log(key)}>
    <DropdownItem key="a">Menu stays open</DropdownItem>
    <DropdownItem key="b">Menu stays open</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),py=()=>o.jsx(Q,{title:"Menu content (topContent / bottomContent / emptyContent)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Top + bottom"})}),o.jsxs(ht,{topContent:o.jsx("div",{className:"px-2 py-1 text-sm",children:"Top content"}),bottomContent:o.jsx("div",{className:"px-2 py-1 text-sm",children:"Bottom content"}),children:[o.jsx(Se,{children:"Item A"},"a"),o.jsx(Se,{children:"Item B"},"b")]})]}),o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Empty list"})}),o.jsx(ht,{items:[],emptyContent:"Nothing here",children:r=>o.jsx(Se,{children:r.label},r.key)})]}),o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Hide empty"})}),o.jsx(ht,{items:[],emptyContent:"Nothing here",hideEmptyContent:!0,children:r=>o.jsx(Se,{children:r.label},r.key)})]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),my=()=>o.jsx(Q,{title:"classNames / itemClasses",preview:o.jsxs(dt,{classNames:{base:"inline-flex",content:"outline outline-1 outline-purple-500"},children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{classNames:{base:"rounded-lg border-2 border-purple-500",list:"p-2",emptyContent:"text-purple-300"},itemClasses:{base:"rounded-md",title:"font-semibold",description:"text-xs opacity-80"},children:[o.jsx(Se,{title:"Item A",description:"Custom slot classes"},"a"),o.jsx(Se,{title:"Item B",description:"Custom slot classes"},"b")]})]}),code:o.jsx(o.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),hy=()=>o.jsx(Q,{title:"Variants",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:["solid","bordered","light","flat","faded","shadow"].map(r=>o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:r})}),o.jsxs(ht,{variant:r,children:[o.jsx(Se,{children:"Item A"},"a"),o.jsx(Se,{children:"Item B"},"b")]})]},r))}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">solid</Button>
  </DropdownTrigger>
  <DropdownMenu variant="solid">
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),vy=()=>o.jsx(Q,{title:"Disabled keys",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{disabledKeys:["delete"],children:[o.jsx(Se,{children:"Copy"},"copy"),o.jsx(Se,{children:"Rename"},"rename"),o.jsx(Se,{children:"Delete"},"delete")]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu disabledKeys={["delete"]}>
    <DropdownItem key="copy">Copy</DropdownItem>
    <DropdownItem key="rename">Rename</DropdownItem>
    <DropdownItem key="delete">Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),gy=()=>o.jsx(Q,{title:"With icons",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{children:"Open"})}),o.jsxs(ht,{children:[o.jsx(Se,{startContent:o.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Star"},"star"),o.jsx(Se,{endContent:o.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Arrow"},"arrow")]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),by=()=>o.jsx(Q,{title:"With description and shortcut",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Open"})}),o.jsxs(ht,{onClose:()=>console.log("closed"),children:[o.jsx(Se,{title:"Profile",description:"Manage your profile",shortcut:"P"},"profile"),o.jsx(Se,{title:"Settings",description:"App settings",shortcut:"S",showDivider:!0},"settings"),o.jsx(Se,{title:"Log out",closeOnSelect:!1},"logout")]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu onClose={() => console.log("closed")}>
    <DropdownItem key="profile" title="Profile" description="Manage your profile" shortcut="P" />
    <DropdownItem key="settings" title="Settings" description="App settings" shortcut="S" showDivider />
    <DropdownItem key="logout" title="Log out" closeOnSelect={false} />
  </DropdownMenu>
</Dropdown>`})}),xy=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"}],yy=()=>o.jsx(Q,{title:"With sections",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{children:"Open"})}),o.jsxs(ht,{onAction:r=>console.log(r),children:[o.jsxs(Ol,{title:"Actions",children:[o.jsx(Se,{children:"Copy"},"copy"),o.jsx(Se,{children:"Move"},"move")]}),o.jsx(Ol,{title:"Account",items:xy,showDivider:!0,children:r=>o.jsx(Se,{children:r.label},r.key)}),o.jsx(Ol,{"aria-label":"Danger zone",children:o.jsx(Se,{children:"Delete"},"delete")})]})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),wy=()=>{const[r,i]=Tn.useState(new Set(["a"])),[d,c]=Tn.useState(new Set(["a","c"]));return o.jsx(Q,{title:"Selection",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Single"})}),o.jsxs(ht,{selectionMode:"single",closeOnSelect:!1,shouldFocusWrap:!0,selectedKeys:r,onSelectionChange:f=>{i(new Set(f)),console.log("single onSelectionChange:",f)},children:[o.jsx(Se,{children:"A"},"a"),o.jsx(Se,{children:"B"},"b"),o.jsx(Se,{children:"C"},"c")]})]}),o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{variant:"bordered",children:"Multiple"})}),o.jsxs(ht,{selectionMode:"multiple",closeOnSelect:!1,hideSelectedIcon:!0,selectedKeys:d,onSelectionChange:f=>{c(new Set(f)),console.log("multiple onSelectionChange:",f)},children:[o.jsx(Se,{selectedIcon:"✓",children:"A"},"a"),o.jsx(Se,{children:"B"},"b"),o.jsx(Se,{children:"C"},"c")]})]})]}),code:o.jsx(o.Fragment,{children:`import React from "react";
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
}`})})},ky=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"},{key:"logout",label:"Log out"}],jy=()=>o.jsx(Q,{title:"Dynamic items",preview:o.jsxs(dt,{children:[o.jsx(ft,{children:o.jsx(B,{children:"Open"})}),o.jsx(ht,{items:ky,onAction:r=>console.log(r),children:r=>o.jsx(Se,{children:r.label},r.key)})]}),code:o.jsx(o.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),Sy=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(oy,{}),o.jsx(ly,{}),o.jsx(sy,{}),o.jsx(iy,{}),o.jsx(cy,{}),o.jsx(uy,{}),o.jsx(dy,{}),o.jsx(fy,{}),o.jsx(py,{}),o.jsx(my,{}),o.jsx(hy,{}),o.jsx(vy,{}),o.jsx(gy,{}),o.jsx(by,{}),o.jsx(yy,{}),o.jsx(wy,{}),o.jsx(jy,{})]}),Ty=()=>o.jsx(Q,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"Hello",placement:"top",delay:0,children:o.jsx(B,{children:"Hover me"})}),o.jsx(Me,{content:"No delay",placement:"right",delay:0,closeDelay:0,children:o.jsx(B,{variant:"bordered",children:"Focus me"})})]}),code:o.jsx(o.Fragment,{children:`import { Tooltip } from "oks-ui";

<Tooltip content="Hello" placement="top" delay={0}>
  <button type="button">Hover me</button>
</Tooltip>`})}),Dy=()=>{const[r,i]=h.useState(!1);return o.jsx(Q,{title:"Controlled",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>i(d=>!d),children:r?"Close tooltip":"Open tooltip"}),o.jsx(Me,{content:"Hello",isOpen:r,onOpenChange:i,children:o.jsx(B,{variant:"bordered",children:"Hover / Focus"})})]}),code:o.jsx(o.Fragment,{children:`import { useState } from "react";
import { Tooltip } from "oks-ui";

const [open, setOpen] = useState(false);

<Tooltip content="Hello" isOpen={open} onOpenChange={setOpen}>
  <button type="button">Hover / Focus</button>
</Tooltip>`})})},Cy=()=>{const[r,i]=h.useState(0);return o.jsx(Q,{title:"Default open / onClose",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"I start open",defaultOpen:!0,onClose:()=>i(d=>d+1),showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"Focus / hover"})}),o.jsxs("div",{className:"text-sm",children:["Closed count: ",r]})]}),code:o.jsx(o.Fragment,{children:'<Tooltip content="..." defaultOpen onClose={() => {}}>...</Tooltip>'})})},Ay=()=>o.jsx(Q,{title:"Sizes",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"Small",size:"sm",children:o.jsx(B,{variant:"bordered",children:"sm"})}),o.jsx(Me,{content:"Medium",size:"md",children:o.jsx(B,{variant:"bordered",children:"md"})}),o.jsx(Me,{content:"Large",size:"lg",children:o.jsx(B,{variant:"bordered",children:"lg"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Small" size="sm">...</Tooltip>
<Tooltip content="Medium" size="md">...</Tooltip>
<Tooltip content="Large" size="lg">...</Tooltip>`})}),By=()=>o.jsx(Q,{title:"Colors",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"Default",color:"default",showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"default"})}),o.jsx(Me,{content:"Primary",color:"primary",showArrow:!0,children:o.jsx(B,{color:"primary",children:"primary"})}),o.jsx(Me,{content:"Secondary",color:"secondary",showArrow:!0,children:o.jsx(B,{color:"secondary",children:"secondary"})}),o.jsx(Me,{content:"Info",color:"info",showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"info"})}),o.jsx(Me,{content:"Success",color:"success",showArrow:!0,children:o.jsx(B,{color:"success",children:"success"})}),o.jsx(Me,{content:"Warning",color:"warning",showArrow:!0,children:o.jsx(B,{color:"warning",children:"warning"})}),o.jsx(Me,{content:"Danger",color:"danger",showArrow:!0,children:o.jsx(B,{color:"danger",children:"danger"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Primary" color="primary" showArrow>...</Tooltip>
<Tooltip content="Success" color="success" showArrow>...</Tooltip>`})}),Ey=()=>o.jsx(Q,{title:"Color depth",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"Depth 100",color:"primary",colorDepth:100,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"100"})}),o.jsx(Me,{content:"Depth 500",color:"primary",colorDepth:500,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"500"})}),o.jsx(Me,{content:"Depth 900",color:"primary",colorDepth:900,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"900"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Depth 100" color="primary" colorDepth={100} showArrow>...</Tooltip>
<Tooltip content="Depth 900" color="primary" colorDepth={900} showArrow>...</Tooltip>`})}),Ny=()=>o.jsx(Q,{title:"Radius and shadow",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"radius=none",radius:"none",showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"none"})}),o.jsx(Me,{content:"radius=full",radius:"full",showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"full"})}),o.jsx(Me,{content:"shadow=none",shadow:"none",showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"shadow none"})}),o.jsx(Me,{content:"shadow=lg",shadow:"lg",showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"shadow lg"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="radius=full" radius="full" showArrow>...</Tooltip>
<Tooltip content="shadow=lg" shadow="lg" showArrow>...</Tooltip>`})}),zy=()=>o.jsx(Q,{title:"Placement",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"Top start",placement:"top-start",children:o.jsx(B,{variant:"bordered",children:"Top-start"})}),o.jsx(Me,{content:"Right",placement:"right",offset:10,children:o.jsx(B,{variant:"bordered",children:"Right (offset)"})}),o.jsx(Me,{content:"Bottom end",placement:"bottom-end",containerPadding:20,children:o.jsx(B,{variant:"bordered",children:"Bottom-end"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Top start" placement="top-start">
  <button type="button">Top-start</button>
</Tooltip>

<Tooltip content="Right" placement="right" offset={10}>
  <button type="button">Right</button>
</Tooltip>`})}),Ry=()=>o.jsx(Q,{title:"Advanced positioning",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"crossOffset=16",placement:"top",crossOffset:16,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"crossOffset"})}),o.jsx(Me,{content:"Close on outside click only",isDismissable:!0,shouldCloseOnInteractOutside:r=>r.tagName!=="BUTTON",showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"Interact outside"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="crossOffset=16" crossOffset={16} showArrow>...</Tooltip>
<Tooltip
  content="Close on outside click only"
  isDismissable
  shouldCloseOnInteractOutside={(el) => el.tagName !== "BUTTON"}
>...</Tooltip>`})}),My=()=>o.jsx(Q,{title:"Delay and closeDelay",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"delay=0",delay:0,children:o.jsx(B,{variant:"bordered",children:"delay 0"})}),o.jsx(Me,{content:"delay=600",delay:600,children:o.jsx(B,{variant:"bordered",children:"delay 600"})}),o.jsx(Me,{content:"closeDelay=0",closeDelay:0,children:o.jsx(B,{variant:"bordered",children:"close 0"})}),o.jsx(Me,{content:"closeDelay=1500",closeDelay:1500,children:o.jsx(B,{variant:"bordered",children:"close 1500"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="delay=600" delay={600}>...</Tooltip>
<Tooltip content="closeDelay=1500" closeDelay={1500}>...</Tooltip>`})}),Oy=()=>o.jsx(Q,{title:"Arrow",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"With arrow",showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"Hover me"})}),o.jsx(Me,{content:"Primary",showArrow:!0,color:"primary",children:o.jsx(B,{color:"primary",children:"Primary"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="With arrow" showArrow>
  <button type="button">Hover me</button>
</Tooltip>`})}),_y=()=>o.jsx(Q,{title:"Behavior",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"No flip",placement:"right",shouldFlip:!1,containerPadding:0,children:o.jsx(B,{variant:"bordered",children:"shouldFlip=false"})}),o.jsx(Me,{content:"Dismissable",isDismissable:!0,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"isDismissable"})}),o.jsx(Me,{content:"No blur close",shouldCloseOnBlur:!1,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"shouldCloseOnBlur=false"})}),o.jsx(Me,{content:"Esc disabled",isKeyboardDismissDisabled:!0,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"Esc disabled"})}),o.jsx(Me,{content:"Scale trigger",triggerScaleOnOpen:!0,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"triggerScaleOnOpen"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Dismissable" isDismissable showArrow>...</Tooltip>
<Tooltip content="Esc disabled" isKeyboardDismissDisabled showArrow>...</Tooltip>`})}),Uy=()=>o.jsx(Q,{title:"Disabled",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(Me,{content:"You won't see this",isDisabled:!0,children:o.jsx(B,{variant:"bordered",children:"Disabled tooltip"})}),o.jsx(Me,{content:"Disabled tooltip",isDisabled:!0,showArrow:!0,children:o.jsx(B,{color:"danger",children:"Danger"})})]}),code:o.jsx(o.Fragment,{children:`<Tooltip content="Disabled tooltip" isDisabled>
  <button type="button">Disabled tooltip</button>
</Tooltip>`})}),Hy=()=>o.jsx(Q,{title:"Class names",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(Me,{content:"Custom slot classes",showArrow:!0,classNames:{content:"border border-red-400",arrow:"text-red-400"},children:o.jsx(B,{variant:"bordered",children:"Hover me"})})}),code:o.jsx(o.Fragment,{children:`<Tooltip
  content="Custom slot classes"
  showArrow
  classNames={{
    content: "border border-red-400",
    arrow: "text-red-400",
  }}
>
  <button type="button">Hover me</button>
</Tooltip>`})}),Ly=()=>{const[r,i]=h.useState(null);return o.jsx(Q,{title:"Portal container",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsxs("div",{className:"relative border border-white/10 rounded-md p-3",ref:i,children:[o.jsx("div",{className:"text-sm opacity-80",children:"Custom container"}),o.jsx("div",{className:"mt-2",children:o.jsx(Me,{content:"Portaled into the bordered box",portalContainer:r,showArrow:!0,children:o.jsx(B,{variant:"bordered",children:"Hover"})})})]})}),code:o.jsx(o.Fragment,{children:'<Tooltip content="..." portalContainer={element}>...</Tooltip>'})})},Gy=()=>{const[r,i]=h.useState(!1);return o.jsx(Q,{title:"Animation",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsxs(B,{variant:"bordered",onPress:()=>i(d=>!d),children:["disableAnimation: ",String(r)]}),o.jsx(Me,{content:"Hover me",disableAnimation:r,showArrow:!0,children:o.jsx(B,{children:"Trigger"})})]}),code:o.jsx(o.Fragment,{children:'<Tooltip content="..." disableAnimation>...</Tooltip>'})})},Yy=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(Ty,{}),o.jsx(Dy,{}),o.jsx(Cy,{}),o.jsx(Ay,{}),o.jsx(By,{}),o.jsx(Ey,{}),o.jsx(Ny,{}),o.jsx(zy,{}),o.jsx(Ry,{}),o.jsx(My,{}),o.jsx(Oy,{}),o.jsx(_y,{}),o.jsx(Uy,{}),o.jsx(Hy,{}),o.jsx(Ly,{}),o.jsx(Gy,{})]}),qy=()=>o.jsx(Q,{title:"How to usage",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>Pe("Saved"),children:"Simple"}),o.jsx(B,{variant:"bordered",onPress:()=>Pe({title:"Saved",message:"Profile updated",type:"success"}),children:"With title"})]}),code:o.jsx(o.Fragment,{children:`import { toast } from "oks-ui";

toast("Saved");
toast({ title: "Saved", message: "Profile updated", type: "success" });`})}),Vy=()=>o.jsx(Q,{title:"ToastProvider (mounted in main.jsx)",preview:o.jsx("div",{className:"text-sm opacity-80",children:"ToastProvider is already mounted at the playground root, so the toast APIs work anywhere."}),code:o.jsx(o.Fragment,{children:`import { ToastProvider } from "oks-ui";

<ToastProvider placement="bottom-right" maxVisibleToasts={3}>
  <App />
</ToastProvider>`})}),Xy=()=>o.jsx(Q,{title:"addToast (HeroUI-style)",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>Xc({title:"Saved",description:"Your changes have been saved.",color:"success"}),children:"Success"}),o.jsx(B,{variant:"bordered",onPress:()=>Xc({title:"Network",description:"Something went wrong.",color:"danger"}),children:"Error"})]}),code:o.jsx(o.Fragment,{children:`import { addToast } from "oks-ui";

addToast({ title: "Saved", description: "Your changes have been saved.", color: "success" });`})});function Ky(){return new Promise((r,i)=>{setTimeout(()=>{Math.random()>.4?r(!0):i(new Error("Failed"))},900)})}const Qy=()=>o.jsx(Q,{title:"addToast with promise",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(B,{onPress:()=>Xc({description:"Saving…",promise:Ky(),loadingComponent:o.jsx("span",{className:"text-sm",children:"⏳"})}),children:"Save demo"})}),code:o.jsx(o.Fragment,{children:'addToast({ description: "Saving…", promise, loadingComponent: <span>⏳</span> });'})}),Zy=()=>o.jsx(Q,{title:"Types",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>Pe.info("Heads up"),children:"Info"}),o.jsx(B,{color:"success",onPress:()=>Pe.success("Saved"),children:"Success"}),o.jsx(B,{color:"warning",onPress:()=>Pe.warning("Be careful"),children:"Warning"}),o.jsx(B,{color:"danger",onPress:()=>Pe.error("Something went wrong"),children:"Error"})]}),code:o.jsx(o.Fragment,{children:`toast.info("Heads up");
toast.success("Saved");
toast.warning("Be careful");
toast.error("Something went wrong");`})}),Fy=()=>o.jsx(Q,{title:"Placement",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{variant:"bordered",onPress:()=>Pe("Top left",{position:"top-left"}),children:"Top-left"}),o.jsx(B,{variant:"bordered",onPress:()=>Pe("Top center",{position:"top-center"}),children:"Top-center"}),o.jsx(B,{variant:"bordered",onPress:()=>Pe("Bottom center",{position:"bottom-center"}),children:"Bottom-center"})]}),code:o.jsx(o.Fragment,{children:`toast("Top left", { position: "top-left" });
toast("Top center", { position: "top-center" });
toast("Bottom center", { position: "bottom-center" });`})}),Iy=()=>o.jsx(Q,{title:"Variants",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{variant:"bordered",onPress:()=>Pe("Solid",{variant:"solid",color:"primary"}),children:"Solid"}),o.jsx(B,{variant:"bordered",onPress:()=>Pe("Soft",{variant:"soft",color:"secondary"}),children:"Soft"}),o.jsx(B,{variant:"bordered",onPress:()=>Pe("Outline",{variant:"outline",color:"warning"}),children:"Outline"})]}),code:o.jsx(o.Fragment,{children:`toast("Solid", { variant: "solid", color: "primary" });
toast("Soft", { variant: "soft", color: "secondary" });
toast("Outline", { variant: "outline", color: "warning" });`})}),$y=()=>o.jsx(Q,{title:"Tone and size",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>Pe({title:"Tone: secondary",description:"Toast size: xl",tone:"secondary",size:"xl"}),children:"secondary + xl"}),o.jsx(B,{color:"danger",onPress:()=>Pe({title:"Tone: danger",description:"Toast size: sm",tone:"danger",size:"sm"}),children:"danger + sm"})]}),code:o.jsx(o.Fragment,{children:'toast({ title: "Tone", description: "Size", tone: "secondary", size: "xl" });'})}),Jy=()=>{const r=h.useRef(null);return o.jsx(Q,{title:"Duration and progress",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>{r.current=Pe("Auto dismiss (2s)",{timeout:2e3,shouldShowTimeoutProgress:!0})},children:"timeout=2000"}),o.jsx(B,{variant:"bordered",onPress:()=>{r.current=Pe("Persistent (manual close)",{persistent:!0,dismissible:!0})},children:"persistent"}),o.jsx(B,{variant:"bordered",onPress:()=>{typeof r.current=="number"&&Pe.dismiss(r.current)},children:"Dismiss last"})]}),code:o.jsx(o.Fragment,{children:`toast("Auto dismiss (2s)", { timeout: 2000, shouldShowTimeoutProgress: true });
toast("Persistent", { persistent: true, dismissible: true });`})})},Wy=()=>o.jsx(Q,{title:"Action",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(B,{onPress:()=>Pe({title:"Undo?",description:"Item deleted.",color:"warning",action:{label:"Undo",onClick:()=>Pe.success("Undone")}}),children:"With action"})}),code:o.jsx(o.Fragment,{children:`toast({
  title: "Undo?",
  description: "Item deleted.",
  action: { label: "Undo", onClick: () => {} },
});`})}),Py=()=>o.jsx(Q,{title:"Icons and close button",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{variant:"bordered",onPress:()=>Pe({description:"No icon",hideIcon:!0}),children:"hideIcon"}),o.jsx(B,{variant:"bordered",onPress:()=>Pe({description:"No close button",hideCloseButton:!0}),children:"hideCloseButton"}),o.jsx(B,{variant:"bordered",onPress:()=>Pe({description:"Custom close icon",closeIcon:o.jsx("span",{"aria-hidden":"true",children:"×"})}),children:"closeIcon"})]}),code:o.jsx(o.Fragment,{children:`toast({ description: "No icon", hideIcon: true });
toast({ description: "No close button", hideCloseButton: true });
toast({ description: "Custom close icon", closeIcon: <span aria-hidden="true">×</span> });`})}),ew=()=>o.jsx(Q,{title:"End content and loading component",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{variant:"bordered",onPress:()=>Pe({title:"Export ready",description:"Download your file",endContent:o.jsx("span",{className:"text-sm",children:"⬇"})}),children:"endContent"}),o.jsx(B,{onPress:()=>Pe({type:"loading",message:"Uploading...",persistent:!0,dismissible:!1,loadingComponent:o.jsx("span",{className:"text-sm",children:"⏳"})}),children:"loadingComponent"})]}),code:o.jsx(o.Fragment,{children:`toast({ title: "Export ready", endContent: <span>⬇</span> });
toast({ type: "loading", message: "Uploading...", loadingComponent: <span>⏳</span> });`})}),tw=()=>o.jsx(Q,{title:"Update and dismiss",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>{const r=Pe("Uploading...",{type:"loading",persistent:!0,dismissible:!1});setTimeout(()=>{Pe.update(r,{type:"success",message:"Uploaded",persistent:!1})},900)},children:"Upload demo"}),o.jsx(B,{variant:"bordered",onPress:()=>Pe.dismissAll(),children:"Dismiss all"})]}),code:o.jsx(o.Fragment,{children:`const id = toast("Uploading...", { type: "loading", persistent: true, dismissible: false });
toast.update(id, { type: "success", message: "Uploaded", persistent: false });
toast.dismiss(id);
toast.dismissAll();`})}),nw=()=>{const[r,i]=h.useState(0),[d,c]=h.useState("-");return o.jsx(Q,{title:"id and onDismiss",preview:o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>{const f=r+1;i(f),Pe({id:42,title:"Single toast (id=42)",description:`Updated count: ${f}`,shouldShowTimeoutProgress:!0,timeout:2500,onDismiss:m=>c(String(m))})},children:"Update same id"}),o.jsxs("div",{className:"text-sm",children:["Last dismissed: ",d]})]}),code:o.jsx(o.Fragment,{children:'toast({ id: 42, description: "This replaces the existing toast with id=42", onDismiss: (id) => {} });'})})};function aw(){return new Promise((r,i)=>{setTimeout(()=>{Math.random()>.4?r(!0):i(new Error("Failed"))},800)})}const ow=()=>o.jsx(Q,{title:"Promise helper",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(B,{onPress:()=>Pe.promise(aw(),{loading:{message:"Saving...",persistent:!0,dismissible:!1},success:()=>({message:"Saved",type:"success",persistent:!1}),error:()=>({message:"Failed",type:"error",persistent:!1})}),children:"Save demo"})}),code:o.jsx(o.Fragment,{children:`toast.promise(promise, {
  loading: { message: "Saving...", persistent: true, dismissible: false },
  success: () => ({ message: "Saved", type: "success", persistent: false }),
  error: () => ({ message: "Failed", type: "error", persistent: false }),
});`})}),lw=()=>{const r=gb();return o.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[o.jsx(B,{onPress:()=>r.success("Saved"),children:"Success"}),o.jsx(B,{color:"danger",onPress:()=>r.error("Failed"),children:"Error"})]})},rw=()=>o.jsx(Q,{title:"useToast() hook",preview:o.jsx(lw,{}),code:o.jsx(o.Fragment,{children:`import { useToast } from "oks-ui";

const t = useToast();
t.success("Saved");
t.error("Failed");`})}),sw=()=>o.jsx(Q,{title:"Class names",preview:o.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:o.jsx(B,{variant:"bordered",onPress:()=>Pe({title:"Custom styles",description:"Slots customized via classNames",classNames:{base:"border border-blue-400",title:"text-blue-300",description:"text-blue-200",progressIndicator:"bg-blue-400"},shouldShowTimeoutProgress:!0,timeout:3500}),children:"Show toast"})}),code:o.jsx(o.Fragment,{children:`toast({
  title: "Custom styles",
  description: "Slots customized via classNames",
  classNames: { base: "...", title: "...", description: "..." },
});`})}),iw=()=>o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(Vy,{}),o.jsx(qy,{}),o.jsx(Xy,{}),o.jsx(Qy,{}),o.jsx(Zy,{}),o.jsx(Fy,{}),o.jsx(Iy,{}),o.jsx($y,{}),o.jsx(Jy,{}),o.jsx(Wy,{}),o.jsx(Py,{}),o.jsx(ew,{}),o.jsx(tw,{}),o.jsx(nw,{}),o.jsx(ow,{}),o.jsx(rw,{}),o.jsx(sw,{})]}),cw=()=>o.jsx("div",{className:"p-3",children:o.jsxs(Pc,{defaultSelectedKey:"alert",color:"primary",children:[o.jsx(vn,{title:"Alert",children:o.jsx(nx,{})},"alert"),o.jsx(vn,{title:"Avatar",children:o.jsx(bx,{})},"avatar"),o.jsx(vn,{title:"Badge",children:o.jsx(Bx,{})},"badge"),o.jsx(vn,{title:"Button",children:o.jsx(Kx,{})},"button"),o.jsx(vn,{title:"Chip",children:o.jsx(ay,{})},"chip"),o.jsx(vn,{title:"Dropdown",children:o.jsx(Sy,{})},"dropdown"),o.jsx(vn,{title:"Tooltip",children:o.jsx(Yy,{})},"tooltip"),o.jsx(vn,{title:"Toast",children:o.jsx(iw,{})},"toast")]})}),uw=()=>o.jsx(D0,{children:o.jsx(Lm,{path:"/",element:o.jsx(cw,{})})});Ag.createRoot(document.getElementById("root")).render(o.jsx(yb,{placement:"bottom-right",maxVisibleToasts:3,children:o.jsx(h.StrictMode,{children:o.jsx($0,{children:o.jsx(uw,{})})})}));
