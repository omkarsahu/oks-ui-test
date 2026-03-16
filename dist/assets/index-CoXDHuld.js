(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function u(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=u(f);fetch(f.href,p)}})();function Eg(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ec={exports:{}},Or={};var sm;function zg(){if(sm)return Or;sm=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(c,f,p){var g=null;if(p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),"key"in f){p={};for(var w in f)w!=="key"&&(p[w]=f[w])}else p=f;return f=p.ref,{$$typeof:l,type:c,key:g,ref:f!==void 0?f:null,props:p}}return Or.Fragment=i,Or.jsx=u,Or.jsxs=u,Or}var im;function Og(){return im||(im=1,Ec.exports=zg()),Ec.exports}var a=Og(),zc={exports:{}},Oe={};var cm;function Rg(){if(cm)return Oe;cm=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),D=Symbol.iterator;function L(x){return x===null||typeof x!="object"?null:(x=D&&x[D]||x["@@iterator"],typeof x=="function"?x:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,R={};function H(x,T,V){this.props=x,this.context=T,this.refs=R,this.updater=V||C}H.prototype.isReactComponent={},H.prototype.setState=function(x,T){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,T,"setState")},H.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function P(){}P.prototype=H.prototype;function Q(x,T,V){this.props=x,this.context=T,this.refs=R,this.updater=V||C}var $=Q.prototype=new P;$.constructor=Q,_($,H.prototype),$.isPureReactComponent=!0;var Z=Array.isArray;function te(){}var I={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function W(x,T,V){var E=V.ref;return{$$typeof:l,type:x,key:T,ref:E!==void 0?E:null,props:V}}function me(x,T){return W(x.type,T,x.props)}function ge(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function ue(x){var T={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(V){return T[V]})}var fe=/\/+/g;function ye(x,T){return typeof x=="object"&&x!==null&&x.key!=null?ue(""+x.key):T.toString(36)}function ne(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(te,te):(x.status="pending",x.then(function(T){x.status==="pending"&&(x.status="fulfilled",x.value=T)},function(T){x.status==="pending"&&(x.status="rejected",x.reason=T)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function B(x,T,V,E,ae){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var se=!1;if(x===null)se=!0;else switch(re){case"bigint":case"string":case"number":se=!0;break;case"object":switch(x.$$typeof){case l:case i:se=!0;break;case j:return se=x._init,B(se(x._payload),T,V,E,ae)}}if(se)return ae=ae(x),se=E===""?"."+ye(x,0):E,Z(ae)?(V="",se!=null&&(V=se.replace(fe,"$&/")+"/"),B(ae,T,V,"",function(he){return he})):ae!=null&&(ge(ae)&&(ae=me(ae,V+(ae.key==null||x&&x.key===ae.key?"":(""+ae.key).replace(fe,"$&/")+"/")+se)),T.push(ae)),1;se=0;var je=E===""?".":E+":";if(Z(x))for(var J=0;J<x.length;J++)E=x[J],re=je+ye(E,J),se+=B(E,T,V,re,ae);else if(J=L(x),typeof J=="function")for(x=J.call(x),J=0;!(E=x.next()).done;)E=E.value,re=je+ye(E,J++),se+=B(E,T,V,re,ae);else if(re==="object"){if(typeof x.then=="function")return B(ne(x),T,V,E,ae);throw T=String(x),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return se}function q(x,T,V){if(x==null)return x;var E=[],ae=0;return B(x,E,"","",function(re){return T.call(V,re,ae++)}),E}function ee(x){if(x._status===-1){var T=x._result;T=T(),T.then(function(V){(x._status===0||x._status===-1)&&(x._status=1,x._result=V)},function(V){(x._status===0||x._status===-1)&&(x._status=2,x._result=V)}),x._status===-1&&(x._status=0,x._result=T)}if(x._status===1)return x._result.default;throw x._result}var oe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},pe={map:q,forEach:function(x,T,V){q(x,function(){T.apply(this,arguments)},V)},count:function(x){var T=0;return q(x,function(){T++}),T},toArray:function(x){return q(x,function(T){return T})||[]},only:function(x){if(!ge(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return Oe.Activity=y,Oe.Children=pe,Oe.Component=H,Oe.Fragment=u,Oe.Profiler=f,Oe.PureComponent=Q,Oe.StrictMode=c,Oe.Suspense=v,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return I.H.useMemoCache(x)}},Oe.cache=function(x){return function(){return x.apply(null,arguments)}},Oe.cacheSignal=function(){return null},Oe.cloneElement=function(x,T,V){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var E=_({},x.props),ae=x.key;if(T!=null)for(re in T.key!==void 0&&(ae=""+T.key),T)!X.call(T,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&T.ref===void 0||(E[re]=T[re]);var re=arguments.length-2;if(re===1)E.children=V;else if(1<re){for(var se=Array(re),je=0;je<re;je++)se[je]=arguments[je+2];E.children=se}return W(x.type,ae,E)},Oe.createContext=function(x){return x={$$typeof:g,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:p,_context:x},x},Oe.createElement=function(x,T,V){var E,ae={},re=null;if(T!=null)for(E in T.key!==void 0&&(re=""+T.key),T)X.call(T,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(ae[E]=T[E]);var se=arguments.length-2;if(se===1)ae.children=V;else if(1<se){for(var je=Array(se),J=0;J<se;J++)je[J]=arguments[J+2];ae.children=je}if(x&&x.defaultProps)for(E in se=x.defaultProps,se)ae[E]===void 0&&(ae[E]=se[E]);return W(x,re,ae)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(x){return{$$typeof:w,render:x}},Oe.isValidElement=ge,Oe.lazy=function(x){return{$$typeof:j,_payload:{_status:-1,_result:x},_init:ee}},Oe.memo=function(x,T){return{$$typeof:b,type:x,compare:T===void 0?null:T}},Oe.startTransition=function(x){var T=I.T,V={};I.T=V;try{var E=x(),ae=I.S;ae!==null&&ae(V,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(te,oe)}catch(re){oe(re)}finally{T!==null&&V.types!==null&&(T.types=V.types),I.T=T}},Oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},Oe.use=function(x){return I.H.use(x)},Oe.useActionState=function(x,T,V){return I.H.useActionState(x,T,V)},Oe.useCallback=function(x,T){return I.H.useCallback(x,T)},Oe.useContext=function(x){return I.H.useContext(x)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(x,T){return I.H.useDeferredValue(x,T)},Oe.useEffect=function(x,T){return I.H.useEffect(x,T)},Oe.useEffectEvent=function(x){return I.H.useEffectEvent(x)},Oe.useId=function(){return I.H.useId()},Oe.useImperativeHandle=function(x,T,V){return I.H.useImperativeHandle(x,T,V)},Oe.useInsertionEffect=function(x,T){return I.H.useInsertionEffect(x,T)},Oe.useLayoutEffect=function(x,T){return I.H.useLayoutEffect(x,T)},Oe.useMemo=function(x,T){return I.H.useMemo(x,T)},Oe.useOptimistic=function(x,T){return I.H.useOptimistic(x,T)},Oe.useReducer=function(x,T,V){return I.H.useReducer(x,T,V)},Oe.useRef=function(x){return I.H.useRef(x)},Oe.useState=function(x){return I.H.useState(x)},Oe.useSyncExternalStore=function(x,T,V){return I.H.useSyncExternalStore(x,T,V)},Oe.useTransition=function(){return I.H.useTransition()},Oe.version="19.2.4",Oe}var um;function Pc(){return um||(um=1,zc.exports=Rg()),zc.exports}var h=Pc();const Le=Eg(h);var Oc={exports:{}},Rr={},Rc={exports:{}},Mc={};var dm;function Mg(){return dm||(dm=1,(function(l){function i(B,q){var ee=B.length;B.push(q);e:for(;0<ee;){var oe=ee-1>>>1,pe=B[oe];if(0<f(pe,q))B[oe]=q,B[ee]=pe,ee=oe;else break e}}function u(B){return B.length===0?null:B[0]}function c(B){if(B.length===0)return null;var q=B[0],ee=B.pop();if(ee!==q){B[0]=ee;e:for(var oe=0,pe=B.length,x=pe>>>1;oe<x;){var T=2*(oe+1)-1,V=B[T],E=T+1,ae=B[E];if(0>f(V,ee))E<pe&&0>f(ae,V)?(B[oe]=ae,B[E]=ee,oe=E):(B[oe]=V,B[T]=ee,oe=T);else if(E<pe&&0>f(ae,ee))B[oe]=ae,B[E]=ee,oe=E;else break e}}return q}function f(B,q){var ee=B.sortIndex-q.sortIndex;return ee!==0?ee:B.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var g=Date,w=g.now();l.unstable_now=function(){return g.now()-w}}var v=[],b=[],j=1,y=null,D=3,L=!1,C=!1,_=!1,R=!1,H=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function $(B){for(var q=u(b);q!==null;){if(q.callback===null)c(b);else if(q.startTime<=B)c(b),q.sortIndex=q.expirationTime,i(v,q);else break;q=u(b)}}function Z(B){if(_=!1,$(B),!C)if(u(v)!==null)C=!0,te||(te=!0,ue());else{var q=u(b);q!==null&&ne(Z,q.startTime-B)}}var te=!1,I=-1,X=5,W=-1;function me(){return R?!0:!(l.unstable_now()-W<X)}function ge(){if(R=!1,te){var B=l.unstable_now();W=B;var q=!0;try{e:{C=!1,_&&(_=!1,P(I),I=-1),L=!0;var ee=D;try{t:{for($(B),y=u(v);y!==null&&!(y.expirationTime>B&&me());){var oe=y.callback;if(typeof oe=="function"){y.callback=null,D=y.priorityLevel;var pe=oe(y.expirationTime<=B);if(B=l.unstable_now(),typeof pe=="function"){y.callback=pe,$(B),q=!0;break t}y===u(v)&&c(v),$(B)}else c(v);y=u(v)}if(y!==null)q=!0;else{var x=u(b);x!==null&&ne(Z,x.startTime-B),q=!1}}break e}finally{y=null,D=ee,L=!1}q=void 0}}finally{q?ue():te=!1}}}var ue;if(typeof Q=="function")ue=function(){Q(ge)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ye=fe.port2;fe.port1.onmessage=ge,ue=function(){ye.postMessage(null)}}else ue=function(){H(ge,0)};function ne(B,q){I=H(function(){B(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_next=function(B){switch(D){case 1:case 2:case 3:var q=3;break;default:q=D}var ee=D;D=q;try{return B()}finally{D=ee}},l.unstable_requestPaint=function(){R=!0},l.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=D;D=B;try{return q()}finally{D=ee}},l.unstable_scheduleCallback=function(B,q,ee){var oe=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?oe+ee:oe):ee=oe,B){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ee+pe,B={id:j++,callback:q,priorityLevel:B,startTime:ee,expirationTime:pe,sortIndex:-1},ee>oe?(B.sortIndex=ee,i(b,B),u(v)===null&&B===u(b)&&(_?(P(I),I=-1):_=!0,ne(Z,ee-oe))):(B.sortIndex=pe,i(v,B),C||L||(C=!0,te||(te=!0,ue()))),B},l.unstable_shouldYield=me,l.unstable_wrapCallback=function(B){var q=D;return function(){var ee=D;D=q;try{return B.apply(this,arguments)}finally{D=ee}}}})(Mc)),Mc}var fm;function _g(){return fm||(fm=1,Rc.exports=Mg()),Rc.exports}var _c={exports:{}},Vt={};var pm;function Ug(){if(pm)return Vt;pm=1;var l=Pc();function i(v){var b="https://react.dev/errors/"+v;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)b+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+v+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(v,b,j){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:y==null?null:""+y,children:v,containerInfo:b,implementation:j}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(v,b){if(v==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Vt.createPortal=function(v,b){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(i(299));return p(v,b,null,j)},Vt.flushSync=function(v){var b=g.T,j=c.p;try{if(g.T=null,c.p=2,v)return v()}finally{g.T=b,c.p=j,c.d.f()}},Vt.preconnect=function(v,b){typeof v=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(v,b))},Vt.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Vt.preinit=function(v,b){if(typeof v=="string"&&b&&typeof b.as=="string"){var j=b.as,y=w(j,b.crossOrigin),D=typeof b.integrity=="string"?b.integrity:void 0,L=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;j==="style"?c.d.S(v,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:y,integrity:D,fetchPriority:L}):j==="script"&&c.d.X(v,{crossOrigin:y,integrity:D,fetchPriority:L,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Vt.preinitModule=function(v,b){if(typeof v=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var j=w(b.as,b.crossOrigin);c.d.M(v,{crossOrigin:j,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(v)},Vt.preload=function(v,b){if(typeof v=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var j=b.as,y=w(j,b.crossOrigin);c.d.L(v,j,{crossOrigin:y,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Vt.preloadModule=function(v,b){if(typeof v=="string")if(b){var j=w(b.as,b.crossOrigin);c.d.m(v,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:j,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(v)},Vt.requestFormReset=function(v){c.d.r(v)},Vt.unstable_batchedUpdates=function(v,b){return v(b)},Vt.useFormState=function(v,b,j){return g.H.useFormState(v,b,j)},Vt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Vt.version="19.2.4",Vt}var mm;function Lm(){if(mm)return _c.exports;mm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),_c.exports=Ug(),_c.exports}var hm;function Lg(){if(hm)return Rr;hm=1;var l=_g(),i=Pc(),u=Lm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(p(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return v(r),e;if(s===o)return v(r),t;s=s.sibling}throw Error(c(188))}if(n.return!==o.return)n=r,o=s;else{for(var d=!1,m=r.child;m;){if(m===n){d=!0,n=r,o=s;break}if(m===o){d=!0,o=r,n=s;break}m=m.sibling}if(!d){for(m=s.child;m;){if(m===n){d=!0,n=s,o=r;break}if(m===o){d=!0,o=s,n=r;break}m=m.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==o)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,D=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),ge=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=ge&&e[ge]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case H:return"Profiler";case R:return"StrictMode";case Z:return"Suspense";case te:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case Q:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var ne=Array.isArray,B=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},oe=[],pe=-1;function x(e){return{current:e}}function T(e){0>pe||(e.current=oe[pe],oe[pe]=null,pe--)}function V(e,t){pe++,oe[pe]=e.current,e.current=t}var E=x(null),ae=x(null),re=x(null),se=x(null);function je(e,t){switch(V(re,t),V(ae,e),V(E,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ap(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ap(t),e=Ep(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(E),V(E,e)}function J(){T(E),T(ae),T(re)}function he(e){e.memoizedState!==null&&V(se,e);var t=E.current,n=Ep(t,e.type);t!==n&&(V(ae,e),V(E,n))}function Ce(e){ae.current===e&&(T(E),T(ae)),se.current===e&&(T(se),Nr._currentValue=ee)}var Ee,He;function Fe(e){if(Ee===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ee=t&&t[1]||"",He=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ee+e+He}var Je=!1;function le(e,t){if(!e||Je)return"";Je=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(U){var M=U}Reflect.construct(e,[],F)}else{try{F.call()}catch(U){M=U}e.call(F.prototype)}}else{try{throw Error()}catch(U){M=U}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(U){if(U&&M&&typeof U.stack=="string")return[U.stack,M.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=o.DetermineComponentFrameRoot(),d=s[0],m=s[1];if(d&&m){var k=d.split(`
`),O=m.split(`
`);for(r=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(o===k.length||r===O.length)for(o=k.length-1,r=O.length-1;1<=o&&0<=r&&k[o]!==O[r];)r--;for(;1<=o&&0<=r;o--,r--)if(k[o]!==O[r]){if(o!==1||r!==1)do if(o--,r--,0>r||k[o]!==O[r]){var G=`
`+k[o].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=o&&0<=r);break}}}finally{Je=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Fe(n):""}function ce(e,t){switch(e.tag){case 26:case 27:case 5:return Fe(e.type);case 16:return Fe("Lazy");case 13:return e.child!==t&&t!==null?Fe("Suspense Fallback"):Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Fe("Activity");default:return""}}function Ne(e){try{var t="",n=null;do t+=ce(e,n),n=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ie=Object.prototype.hasOwnProperty,xe=l.unstable_scheduleCallback,Ae=l.unstable_cancelCallback,We=l.unstable_shouldYield,ke=l.unstable_requestPaint,ze=l.unstable_now,_e=l.unstable_getCurrentPriorityLevel,tt=l.unstable_ImmediatePriority,rt=l.unstable_UserBlockingPriority,ut=l.unstable_NormalPriority,Be=l.unstable_LowPriority,Ge=l.unstable_IdlePriority,Nt=l.log,kn=l.unstable_setDisableYieldValue,wn=null,At=null;function qt(e){if(typeof Nt=="function"&&kn(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(wn,e)}catch{}}var Et=Math.clz32?Math.clz32:xt,Ja=Math.log,ve=Math.LN2;function xt(e){return e>>>=0,e===0?32:31-(Ja(e)/ve|0)|0}var bt=256,Pt=262144,jn=4194304;function Bn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wa(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=o&134217727;return m!==0?(o=m&~s,o!==0?r=Bn(o):(d&=m,d!==0?r=Bn(d):n||(n=m&~e,n!==0&&(r=Bn(n))))):(m=o&~s,m!==0?r=Bn(m):d!==0?r=Bn(d):n||(n=o&~e,n!==0&&(r=Bn(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Aa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xs(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ea(){var e=jn;return jn<<=1,(jn&62914560)===0&&(jn=4194304),e}function bs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bh(e,t,n,o,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,k=e.expirationTimes,O=e.hiddenUpdates;for(n=d&~n;0<n;){var G=31-Et(n),F=1<<G;m[G]=0,k[G]=-1;var M=O[G];if(M!==null)for(O[G]=null,G=0;G<M.length;G++){var U=M[G];U!==null&&(U.lane&=-536870913)}n&=~F}o!==0&&du(e,o,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function du(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Et(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Et(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}function pu(e,t){var n=t&-t;return n=(n&42)!==0?1:ys(n),(n&(e.suspendedLanes|t))!==0?0:n}function ys(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mu(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:em(e.type))}function hu(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var aa=Math.random().toString(36).slice(2),Mt="__reactFiber$"+aa,Qt="__reactProps$"+aa,Pa="__reactContainer$"+aa,ws="__reactEvents$"+aa,yh="__reactListeners$"+aa,kh="__reactHandles$"+aa,vu="__reactResources$"+aa,Xo="__reactMarker$"+aa;function js(e){delete e[Mt],delete e[Qt],delete e[ws],delete e[yh],delete e[kh]}function eo(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pa]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lp(e);e!==null;){if(n=e[Mt])return n;e=Lp(e)}return t}e=n,n=e.parentNode}return null}function to(e){if(e=e[Mt]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ko(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function no(e){var t=e[vu];return t||(t=e[vu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ot(e){e[Xo]=!0}var gu=new Set,xu={};function za(e,t){ao(e,t),ao(e+"Capture",t)}function ao(e,t){for(xu[e]=t,e=0;e<t.length;e++)gu.add(t[e])}var wh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bu={},yu={};function jh(e){return ie.call(yu,e)?!0:ie.call(bu,e)?!1:wh.test(e)?yu[e]=!0:(bu[e]=!0,!1)}function Kr(e,t,n){if(jh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function _n(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}function cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sh(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var r=o.get,s=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ss(e){if(!e._valueTracker){var t=ku(e)?"checked":"value";e._valueTracker=Sh(e,t,""+e[t])}}function wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=ku(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Th=/[\n"\\]/g;function un(e){return e.replace(Th,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ts(e,t,n,o,r,s,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+cn(t)):e.value!==""+cn(t)&&(e.value=""+cn(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ds(e,d,cn(t)):n!=null?Ds(e,d,cn(n)):o!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+cn(m):e.removeAttribute("name")}function ju(e,t,n,o,r,s,d,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Ss(e);return}n=n!=null?""+cn(n):"",t=t!=null?""+cn(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=m?e.checked:!!o,e.defaultChecked=!!o,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Ss(e)}function Ds(e,t,n){t==="number"&&Zr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function oo(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Su(e,t,n){if(t!=null&&(t=""+cn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+cn(n):""}function Tu(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(c(92));if(ne(o)){if(1<o.length)throw Error(c(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=cn(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),Ss(e)}function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Du(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||Dh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cu(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var r in t)o=t[r],t.hasOwnProperty(r)&&n[r]!==o&&Du(e,r,o)}else for(var s in t)t.hasOwnProperty(s)&&Du(e,s,t[s])}function Cs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fr(e){return Bh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Un(){}var Bs=null;function Ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,so=null;function Bu(e){var t=to(e);if(t&&(e=t.stateNode)){var n=e[Qt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ts(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+un(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=o[Qt]||null;if(!r)throw Error(c(90));Ts(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&wu(o)}break e;case"textarea":Su(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&oo(e,!!n.multiple,t,!1)}}}var As=!1;function Nu(e,t,n){if(As)return e(t,n);As=!0;try{var o=e(t);return o}finally{if(As=!1,(lo!==null||so!==null)&&(Ml(),lo&&(t=lo,e=so,so=lo=null,Bu(t),e)))for(t=0;t<e.length;t++)Bu(e[t])}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var o=n[Qt]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=!1;if(Ln)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{Es=!1}var oa=null,zs=null,$r=null;function Au(){if($r)return $r;var e,t=zs,n=t.length,o,r="value"in oa?oa.value:oa.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===r[s-o];o++);return $r=r.slice(e,1<o?1-o:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Eu(){return!1}function Zt(e){function t(n,o,r,s,d){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jr:Eu,this.isPropagationStopped=Eu,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wr=Zt(Oa),Fo=y({},Oa,{view:0,detail:0}),Nh=Zt(Fo),Os,Rs,$o,Pr=y({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$o&&($o&&e.type==="mousemove"?(Os=e.screenX-$o.screenX,Rs=e.screenY-$o.screenY):Rs=Os=0,$o=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:Rs}}),zu=Zt(Pr),Ah=y({},Pr,{dataTransfer:0}),Eh=Zt(Ah),zh=y({},Fo,{relatedTarget:0}),Ms=Zt(zh),Oh=y({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Rh=Zt(Oh),Mh=y({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_h=Zt(Mh),Uh=y({},Oa,{data:0}),Ou=Zt(Uh),Lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gh[e])?!!t[e]:!1}function _s(){return Yh}var qh=y({},Fo,{key:function(e){if(e.key){var t=Lh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vh=Zt(qh),Xh=y({},Pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=Zt(Xh),Kh=y({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),Qh=Zt(Kh),Zh=y({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=Zt(Zh),$h=y({},Pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ih=Zt($h),Jh=y({},Oa,{newState:0,oldState:0}),Wh=Zt(Jh),Ph=[9,13,27,32],Us=Ln&&"CompositionEvent"in window,Io=null;Ln&&"documentMode"in document&&(Io=document.documentMode);var ev=Ln&&"TextEvent"in window&&!Io,Mu=Ln&&(!Us||Io&&8<Io&&11>=Io),_u=" ",Uu=!1;function Lu(e,t){switch(e){case"keyup":return Ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var io=!1;function tv(e,t){switch(e){case"compositionend":return Hu(t);case"keypress":return t.which!==32?null:(Uu=!0,_u);case"textInput":return e=t.data,e===_u&&Uu?null:e;default:return null}}function nv(e,t){if(io)return e==="compositionend"||!Us&&Lu(e,t)?(e=Au(),$r=zs=oa=null,io=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mu&&t.locale!=="ko"?null:t.data;default:return null}}var av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!av[e.type]:t==="textarea"}function Yu(e,t,n,o){lo?so?so.push(o):so=[o]:lo=o,t=ql(t,"onChange"),0<t.length&&(n=new Wr("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Jo=null,Wo=null;function ov(e){Sp(e,0)}function el(e){var t=Ko(e);if(wu(t))return e}function qu(e,t){if(e==="change")return t}var Vu=!1;if(Ln){var Ls;if(Ln){var Hs="oninput"in document;if(!Hs){var Xu=document.createElement("div");Xu.setAttribute("oninput","return;"),Hs=typeof Xu.oninput=="function"}Ls=Hs}else Ls=!1;Vu=Ls&&(!document.documentMode||9<document.documentMode)}function Ku(){Jo&&(Jo.detachEvent("onpropertychange",Qu),Wo=Jo=null)}function Qu(e){if(e.propertyName==="value"&&el(Wo)){var t=[];Yu(t,Wo,e,Ns(e)),Nu(ov,t)}}function rv(e,t,n){e==="focusin"?(Ku(),Jo=t,Wo=n,Jo.attachEvent("onpropertychange",Qu)):e==="focusout"&&Ku()}function lv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Wo)}function sv(e,t){if(e==="click")return el(t)}function iv(e,t){if(e==="input"||e==="change")return el(t)}function cv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:cv;function Po(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!ie.call(t,r)||!en(e[r],t[r]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,t){var n=Zu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zu(n)}}function $u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var uv=Ln&&"documentMode"in document&&11>=document.documentMode,co=null,Ys=null,er=null,qs=!1;function Ju(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qs||co==null||co!==Zr(o)||(o=co,"selectionStart"in o&&Gs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),er&&Po(er,o)||(er=o,o=ql(Ys,"onSelect"),0<o.length&&(t=new Wr("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=co)))}function Ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var uo={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},Vs={},Wu={};Ln&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function Ma(e){if(Vs[e])return Vs[e];if(!uo[e])return e;var t=uo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wu)return Vs[e]=t[n];return e}var Pu=Ma("animationend"),ed=Ma("animationiteration"),td=Ma("animationstart"),dv=Ma("transitionrun"),fv=Ma("transitionstart"),pv=Ma("transitioncancel"),nd=Ma("transitionend"),ad=new Map,Xs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xs.push("scrollEnd");function Sn(e,t){ad.set(e,t),za(t,[e])}var tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},dn=[],fo=0,Ks=0;function nl(){for(var e=fo,t=Ks=fo=0;t<e;){var n=dn[t];dn[t++]=null;var o=dn[t];dn[t++]=null;var r=dn[t];dn[t++]=null;var s=dn[t];if(dn[t++]=null,o!==null&&r!==null){var d=o.pending;d===null?r.next=r:(r.next=d.next,d.next=r),o.pending=r}s!==0&&od(n,r,s)}}function al(e,t,n,o){dn[fo++]=e,dn[fo++]=t,dn[fo++]=n,dn[fo++]=o,Ks|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Qs(e,t,n,o){return al(e,t,n,o),ol(e)}function _a(e,t){return al(e,null,null,t),ol(e)}function od(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,o=s.alternate,o!==null&&(o.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Et(n),e=s.hiddenUpdates,o=e[r],o===null?e[r]=[t]:o.push(t),t.lane=n|536870912),s):null}function ol(e){if(50<wr)throw wr=0,tc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var po={};function mv(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,t,n,o){return new mv(e,t,n,o)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hn(e,t){var n=e.alternate;return n===null?(n=tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function rd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rl(e,t,n,o,r,s){var d=0;if(o=e,typeof e=="function")Zs(e)&&(d=1);else if(typeof e=="string")d=bg(e,n,E.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=tn(31,n,t,r),e.elementType=W,e.lanes=s,e;case _:return Ua(n.children,r,s,t);case R:d=8,r|=24;break;case H:return e=tn(12,n,t,r|2),e.elementType=H,e.lanes=s,e;case Z:return e=tn(13,n,t,r),e.elementType=Z,e.lanes=s,e;case te:return e=tn(19,n,t,r),e.elementType=te,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:d=10;break e;case P:d=9;break e;case $:d=11;break e;case I:d=14;break e;case X:d=16,o=null;break e}d=29,n=Error(c(130,e===null?"null":typeof e,"")),o=null}return t=tn(d,n,t,r),t.elementType=e,t.type=o,t.lanes=s,t}function Ua(e,t,n,o){return e=tn(7,e,o,t),e.lanes=n,e}function Fs(e,t,n){return e=tn(6,e,null,t),e.lanes=n,e}function ld(e){var t=tn(18,null,null,0);return t.stateNode=e,t}function $s(e,t,n){return t=tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sd=new WeakMap;function fn(e,t){if(typeof e=="object"&&e!==null){var n=sd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ne(t)},sd.set(e,t),t)}return{value:e,source:t,stack:Ne(t)}}var mo=[],ho=0,ll=null,tr=0,pn=[],mn=0,ra=null,Nn=1,An="";function Gn(e,t){mo[ho++]=tr,mo[ho++]=ll,ll=e,tr=t}function id(e,t,n){pn[mn++]=Nn,pn[mn++]=An,pn[mn++]=ra,ra=e;var o=Nn;e=An;var r=32-Et(o)-1;o&=~(1<<r),n+=1;var s=32-Et(t)+r;if(30<s){var d=r-r%5;s=(o&(1<<d)-1).toString(32),o>>=d,r-=d,Nn=1<<32-Et(t)+r|n<<r|o,An=s+e}else Nn=1<<s|n<<r|o,An=e}function Is(e){e.return!==null&&(Gn(e,1),id(e,1,0))}function Js(e){for(;e===ll;)ll=mo[--ho],mo[ho]=null,tr=mo[--ho],mo[ho]=null;for(;e===ra;)ra=pn[--mn],pn[mn]=null,An=pn[--mn],pn[mn]=null,Nn=pn[--mn],pn[mn]=null}function cd(e,t){pn[mn++]=Nn,pn[mn++]=An,pn[mn++]=ra,Nn=t.id,An=t.overflow,ra=e}var _t=null,mt=null,Ze=!1,la=null,hn=!1,Ws=Error(c(519));function sa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nr(fn(t,e)),Ws}function ud(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[Mt]=e,t[Qt]=o,n){case"dialog":qe("cancel",t),qe("close",t);break;case"iframe":case"object":case"embed":qe("load",t);break;case"video":case"audio":for(n=0;n<Sr.length;n++)qe(Sr[n],t);break;case"source":qe("error",t);break;case"img":case"image":case"link":qe("error",t),qe("load",t);break;case"details":qe("toggle",t);break;case"input":qe("invalid",t),ju(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":qe("invalid",t);break;case"textarea":qe("invalid",t),Tu(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||Bp(t.textContent,n)?(o.popover!=null&&(qe("beforetoggle",t),qe("toggle",t)),o.onScroll!=null&&qe("scroll",t),o.onScrollEnd!=null&&qe("scrollend",t),o.onClick!=null&&(t.onclick=Un),t=!0):t=!1,t||sa(e,!0)}function dd(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 31:case 13:hn=!1;return;case 27:case 3:hn=!0;return;default:_t=_t.return}}function vo(e){if(e!==_t)return!1;if(!Ze)return dd(e),Ze=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vc(e.type,e.memoizedProps)),n=!n),n&&mt&&sa(e),dd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));mt=Up(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));mt=Up(e)}else t===27?(t=mt,ka(e.type)?(e=kc,kc=null,mt=e):mt=t):mt=_t?gn(e.stateNode.nextSibling):null;return!0}function La(){mt=_t=null,Ze=!1}function Ps(){var e=la;return e!==null&&(Jt===null?Jt=e:Jt.push.apply(Jt,e),la=null),e}function nr(e){la===null?la=[e]:la.push(e)}var ei=x(null),Ha=null,Yn=null;function ia(e,t,n){V(ei,t._currentValue),t._currentValue=n}function qn(e){e._currentValue=ei.current,T(ei)}function ti(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function ni(e,t,n,o){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=r;for(var k=0;k<t.length;k++)if(m.context===t[k]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),ti(s.return,n,e),o||(d=null);break e}s=m.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(c(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),ti(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function go(e,t,n,o){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var m=r.type;en(r.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(r===se.current){if(d=r.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Nr):e=[Nr])}r=r.return}e!==null&&ni(t,e,n,o),t.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!en(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ha=e,Yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ut(e){return fd(Ha,e)}function il(e,t){return Ha===null&&Ga(e),fd(e,t)}function fd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yn===null){if(e===null)throw Error(c(308));Yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yn=Yn.next=t;return n}var hv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},vv=l.unstable_scheduleCallback,gv=l.unstable_NormalPriority,Tt={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ai(){return{controller:new hv,data:new Map,refCount:0}}function ar(e){e.refCount--,e.refCount===0&&vv(gv,function(){e.controller.abort()})}var or=null,oi=0,xo=0,bo=null;function xv(e,t){if(or===null){var n=or=[];oi=0,xo=sc(),bo={status:"pending",value:void 0,then:function(o){n.push(o)}}}return oi++,t.then(pd,pd),t}function pd(){if(--oi===0&&or!==null){bo!==null&&(bo.status="fulfilled");var e=or;or=null,xo=0,bo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bv(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(o.status="rejected",o.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),o}var md=B.S;B.S=function(e,t){Wf=ze(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xv(e,t),md!==null&&md(e,t)};var Ya=x(null);function ri(){var e=Ya.current;return e!==null?e:dt.pooledCache}function cl(e,t){t===null?V(Ya,Ya.current):V(Ya,t.pool)}function hd(){var e=ri();return e===null?null:{parent:Tt._currentValue,pool:e}}var yo=Error(c(460)),li=Error(c(474)),ul=Error(c(542)),dl={then:function(){}};function vd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Un,Un),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bd(e),e;default:if(typeof t.status=="string")t.then(Un,Un);else{if(e=dt,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=o}},function(o){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bd(e),e}throw Va=t,yo}}function qa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Va=n,yo):n}}var Va=null;function xd(){if(Va===null)throw Error(c(459));var e=Va;return Va=null,e}function bd(e){if(e===yo||e===ul)throw Error(c(483))}var ko=null,rr=0;function fl(e){var t=rr;return rr+=1,ko===null&&(ko=[]),gd(ko,e,t)}function lr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pl(e,t){throw t.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function yd(e){function t(A,S){if(e){var z=A.deletions;z===null?(A.deletions=[S],A.flags|=16):z.push(S)}}function n(A,S){if(!e)return null;for(;S!==null;)t(A,S),S=S.sibling;return null}function o(A){for(var S=new Map;A!==null;)A.key!==null?S.set(A.key,A):S.set(A.index,A),A=A.sibling;return S}function r(A,S){return A=Hn(A,S),A.index=0,A.sibling=null,A}function s(A,S,z){return A.index=z,e?(z=A.alternate,z!==null?(z=z.index,z<S?(A.flags|=67108866,S):z):(A.flags|=67108866,S)):(A.flags|=1048576,S)}function d(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function m(A,S,z,K){return S===null||S.tag!==6?(S=Fs(z,A.mode,K),S.return=A,S):(S=r(S,z),S.return=A,S)}function k(A,S,z,K){var Se=z.type;return Se===_?G(A,S,z.props.children,K,z.key):S!==null&&(S.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===X&&qa(Se)===S.type)?(S=r(S,z.props),lr(S,z),S.return=A,S):(S=rl(z.type,z.key,z.props,null,A.mode,K),lr(S,z),S.return=A,S)}function O(A,S,z,K){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=$s(z,A.mode,K),S.return=A,S):(S=r(S,z.children||[]),S.return=A,S)}function G(A,S,z,K,Se){return S===null||S.tag!==7?(S=Ua(z,A.mode,K,Se),S.return=A,S):(S=r(S,z),S.return=A,S)}function F(A,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Fs(""+S,A.mode,z),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case L:return z=rl(S.type,S.key,S.props,null,A.mode,z),lr(z,S),z.return=A,z;case C:return S=$s(S,A.mode,z),S.return=A,S;case X:return S=qa(S),F(A,S,z)}if(ne(S)||ue(S))return S=Ua(S,A.mode,z,null),S.return=A,S;if(typeof S.then=="function")return F(A,fl(S),z);if(S.$$typeof===Q)return F(A,il(A,S),z);pl(A,S)}return null}function M(A,S,z,K){var Se=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return Se!==null?null:m(A,S,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return z.key===Se?k(A,S,z,K):null;case C:return z.key===Se?O(A,S,z,K):null;case X:return z=qa(z),M(A,S,z,K)}if(ne(z)||ue(z))return Se!==null?null:G(A,S,z,K,null);if(typeof z.then=="function")return M(A,S,fl(z),K);if(z.$$typeof===Q)return M(A,S,il(A,z),K);pl(A,z)}return null}function U(A,S,z,K,Se){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return A=A.get(z)||null,m(S,A,""+K,Se);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case L:return A=A.get(K.key===null?z:K.key)||null,k(S,A,K,Se);case C:return A=A.get(K.key===null?z:K.key)||null,O(S,A,K,Se);case X:return K=qa(K),U(A,S,z,K,Se)}if(ne(K)||ue(K))return A=A.get(z)||null,G(S,A,K,Se,null);if(typeof K.then=="function")return U(A,S,z,fl(K),Se);if(K.$$typeof===Q)return U(A,S,z,il(S,K),Se);pl(S,K)}return null}function be(A,S,z,K){for(var Se=null,$e=null,we=S,Ue=S=0,Qe=null;we!==null&&Ue<z.length;Ue++){we.index>Ue?(Qe=we,we=null):Qe=we.sibling;var Ie=M(A,we,z[Ue],K);if(Ie===null){we===null&&(we=Qe);break}e&&we&&Ie.alternate===null&&t(A,we),S=s(Ie,S,Ue),$e===null?Se=Ie:$e.sibling=Ie,$e=Ie,we=Qe}if(Ue===z.length)return n(A,we),Ze&&Gn(A,Ue),Se;if(we===null){for(;Ue<z.length;Ue++)we=F(A,z[Ue],K),we!==null&&(S=s(we,S,Ue),$e===null?Se=we:$e.sibling=we,$e=we);return Ze&&Gn(A,Ue),Se}for(we=o(we);Ue<z.length;Ue++)Qe=U(we,A,Ue,z[Ue],K),Qe!==null&&(e&&Qe.alternate!==null&&we.delete(Qe.key===null?Ue:Qe.key),S=s(Qe,S,Ue),$e===null?Se=Qe:$e.sibling=Qe,$e=Qe);return e&&we.forEach(function(Da){return t(A,Da)}),Ze&&Gn(A,Ue),Se}function De(A,S,z,K){if(z==null)throw Error(c(151));for(var Se=null,$e=null,we=S,Ue=S=0,Qe=null,Ie=z.next();we!==null&&!Ie.done;Ue++,Ie=z.next()){we.index>Ue?(Qe=we,we=null):Qe=we.sibling;var Da=M(A,we,Ie.value,K);if(Da===null){we===null&&(we=Qe);break}e&&we&&Da.alternate===null&&t(A,we),S=s(Da,S,Ue),$e===null?Se=Da:$e.sibling=Da,$e=Da,we=Qe}if(Ie.done)return n(A,we),Ze&&Gn(A,Ue),Se;if(we===null){for(;!Ie.done;Ue++,Ie=z.next())Ie=F(A,Ie.value,K),Ie!==null&&(S=s(Ie,S,Ue),$e===null?Se=Ie:$e.sibling=Ie,$e=Ie);return Ze&&Gn(A,Ue),Se}for(we=o(we);!Ie.done;Ue++,Ie=z.next())Ie=U(we,A,Ue,Ie.value,K),Ie!==null&&(e&&Ie.alternate!==null&&we.delete(Ie.key===null?Ue:Ie.key),S=s(Ie,S,Ue),$e===null?Se=Ie:$e.sibling=Ie,$e=Ie);return e&&we.forEach(function(Ag){return t(A,Ag)}),Ze&&Gn(A,Ue),Se}function it(A,S,z,K){if(typeof z=="object"&&z!==null&&z.type===_&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case L:e:{for(var Se=z.key;S!==null;){if(S.key===Se){if(Se=z.type,Se===_){if(S.tag===7){n(A,S.sibling),K=r(S,z.props.children),K.return=A,A=K;break e}}else if(S.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===X&&qa(Se)===S.type){n(A,S.sibling),K=r(S,z.props),lr(K,z),K.return=A,A=K;break e}n(A,S);break}else t(A,S);S=S.sibling}z.type===_?(K=Ua(z.props.children,A.mode,K,z.key),K.return=A,A=K):(K=rl(z.type,z.key,z.props,null,A.mode,K),lr(K,z),K.return=A,A=K)}return d(A);case C:e:{for(Se=z.key;S!==null;){if(S.key===Se)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){n(A,S.sibling),K=r(S,z.children||[]),K.return=A,A=K;break e}else{n(A,S);break}else t(A,S);S=S.sibling}K=$s(z,A.mode,K),K.return=A,A=K}return d(A);case X:return z=qa(z),it(A,S,z,K)}if(ne(z))return be(A,S,z,K);if(ue(z)){if(Se=ue(z),typeof Se!="function")throw Error(c(150));return z=Se.call(z),De(A,S,z,K)}if(typeof z.then=="function")return it(A,S,fl(z),K);if(z.$$typeof===Q)return it(A,S,il(A,z),K);pl(A,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(n(A,S.sibling),K=r(S,z),K.return=A,A=K):(n(A,S),K=Fs(z,A.mode,K),K.return=A,A=K),d(A)):n(A,S)}return function(A,S,z,K){try{rr=0;var Se=it(A,S,z,K);return ko=null,Se}catch(we){if(we===yo||we===ul)throw we;var $e=tn(29,we,null,A.mode);return $e.lanes=K,$e.return=A,$e}}}var Xa=yd(!0),kd=yd(!1),ca=!1;function si(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,t=ol(e),od(e,null,n),t}return al(e,o,t,n),ol(e)}function sr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,fu(e,n)}}function ci(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ui=!1;function ir(){if(ui){var e=bo;if(e!==null)throw e}}function cr(e,t,n,o){ui=!1;var r=e.updateQueue;ca=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var k=m,O=k.next;k.next=null,d===null?s=O:d.next=O,d=k;var G=e.alternate;G!==null&&(G=G.updateQueue,m=G.lastBaseUpdate,m!==d&&(m===null?G.firstBaseUpdate=O:m.next=O,G.lastBaseUpdate=k))}if(s!==null){var F=r.baseState;d=0,G=O=k=null,m=s;do{var M=m.lane&-536870913,U=M!==m.lane;if(U?(Ke&M)===M:(o&M)===M){M!==0&&M===xo&&(ui=!0),G!==null&&(G=G.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var be=e,De=m;M=t;var it=n;switch(De.tag){case 1:if(be=De.payload,typeof be=="function"){F=be.call(it,F,M);break e}F=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=De.payload,M=typeof be=="function"?be.call(it,F,M):be,M==null)break e;F=y({},F,M);break e;case 2:ca=!0}}M=m.callback,M!==null&&(e.flags|=64,U&&(e.flags|=8192),U=r.callbacks,U===null?r.callbacks=[M]:U.push(M))}else U={lane:M,tag:m.tag,payload:m.payload,callback:m.callback,next:null},G===null?(O=G=U,k=F):G=G.next=U,d|=M;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;U=m,m=U.next,U.next=null,r.lastBaseUpdate=U,r.shared.pending=null}}while(!0);G===null&&(k=F),r.baseState=k,r.firstBaseUpdate=O,r.lastBaseUpdate=G,s===null&&(r.shared.lanes=0),va|=d,e.lanes=d,e.memoizedState=F}}function wd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function jd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)wd(n[e],t)}var wo=x(null),ml=x(0);function Sd(e,t){e=Jn,V(ml,e),V(wo,t),Jn=e|t.baseLanes}function di(){V(ml,Jn),V(wo,wo.current)}function fi(){Jn=ml.current,T(wo),T(ml)}var nn=x(null),vn=null;function fa(e){var t=e.alternate;V(jt,jt.current&1),V(nn,e),vn===null&&(t===null||wo.current!==null||t.memoizedState!==null)&&(vn=e)}function pi(e){V(jt,jt.current),V(nn,e),vn===null&&(vn=e)}function Td(e){e.tag===22?(V(jt,jt.current),V(nn,e),vn===null&&(vn=e)):pa()}function pa(){V(jt,jt.current),V(nn,nn.current)}function an(e){T(nn),vn===e&&(vn=null),T(jt)}var jt=x(0);function hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||bc(n)||yc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vn=0,Me=null,lt=null,Dt=null,vl=!1,jo=!1,Ka=!1,gl=0,ur=0,So=null,yv=0;function kt(){throw Error(c(321))}function mi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function hi(e,t,n,o,r,s){return Vn=s,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?cf:Ai,Ka=!1,s=n(o,r),Ka=!1,jo&&(s=Cd(t,n,o,r)),Dd(e),s}function Dd(e){B.H=pr;var t=lt!==null&&lt.next!==null;if(Vn=0,Dt=lt=Me=null,vl=!1,ur=0,So=null,t)throw Error(c(300));e===null||Ct||(e=e.dependencies,e!==null&&sl(e)&&(Ct=!0))}function Cd(e,t,n,o){Me=e;var r=0;do{if(jo&&(So=null),ur=0,jo=!1,25<=r)throw Error(c(301));if(r+=1,Dt=lt=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}B.H=uf,s=t(n,o)}while(jo);return s}function kv(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?dr(t):t,e=e.useState()[0],(lt!==null?lt.memoizedState:null)!==e&&(Me.flags|=1024),t}function vi(){var e=gl!==0;return gl=0,e}function gi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xi(e){if(vl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vl=!1}Vn=0,Dt=lt=Me=null,jo=!1,ur=gl=0,So=null}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Me.memoizedState=Dt=e:Dt=Dt.next=e,Dt}function St(){if(lt===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var t=Dt===null?Me.memoizedState:Dt.next;if(t!==null)Dt=t,lt=e;else{if(e===null)throw Me.alternate===null?Error(c(467)):Error(c(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},Dt===null?Me.memoizedState=Dt=e:Dt=Dt.next=e}return Dt}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dr(e){var t=ur;return ur+=1,So===null&&(So=[]),e=gd(So,e,t),t=Me,(Dt===null?t.memoizedState:Dt.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?cf:Ai),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dr(e);if(e.$$typeof===Q)return Ut(e)}throw Error(c(438,String(e)))}function bi(e){var t=null,n=Me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=Me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xl(),Me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=me;return t.index++,n}function Xn(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=St();return yi(t,lt,e)}function yi(e,t,n){var o=e.queue;if(o===null)throw Error(c(311));o.lastRenderedReducer=n;var r=e.baseQueue,s=o.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,o.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var m=d=null,k=null,O=t,G=!1;do{var F=O.lane&-536870913;if(F!==O.lane?(Ke&F)===F:(Vn&F)===F){var M=O.revertLane;if(M===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),F===xo&&(G=!0);else if((Vn&M)===M){O=O.next,M===xo&&(G=!0);continue}else F={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},k===null?(m=k=F,d=s):k=k.next=F,Me.lanes|=M,va|=M;F=O.action,Ka&&n(s,F),s=O.hasEagerState?O.eagerState:n(s,F)}else M={lane:F,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},k===null?(m=k=M,d=s):k=k.next=M,Me.lanes|=F,va|=F;O=O.next}while(O!==null&&O!==t);if(k===null?d=s:k.next=m,!en(s,e.memoizedState)&&(Ct=!0,G&&(n=bo,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=k,o.lastRenderedState=s}return r===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ki(e){var t=St(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);en(s,t.memoizedState)||(Ct=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function Bd(e,t,n){var o=Me,r=St(),s=Ze;if(s){if(n===void 0)throw Error(c(407));n=n()}else n=t();var d=!en((lt||r).memoizedState,n);if(d&&(r.memoizedState=n,Ct=!0),r=r.queue,Si(Ed.bind(null,o,r,e),[e]),r.getSnapshot!==t||d||Dt!==null&&Dt.memoizedState.tag&1){if(o.flags|=2048,To(9,{destroy:void 0},Ad.bind(null,o,r,n,t),null),dt===null)throw Error(c(349));s||(Vn&127)!==0||Nd(o,t,n)}return n}function Nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t=xl(),Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ad(e,t,n,o){t.value=n,t.getSnapshot=o,zd(t)&&Od(e)}function Ed(e,t,n){return n(function(){zd(t)&&Od(e)})}function zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function Od(e){var t=_a(e,2);t!==null&&Wt(t,e,2)}function wi(e){var t=Kt();if(typeof e=="function"){var n=e;if(e=n(),Ka){qt(!0);try{n()}finally{qt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t}function Rd(e,t,n,o){return e.baseState=n,yi(e,lt,typeof o=="function"?o:Xn)}function wv(e,t,n,o,r){if(jl(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};B.T!==null?n(!0):s.isTransition=!1,o(s),n=t.pending,n===null?(s.next=t.pending=s,Md(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Md(e,t){var n=t.action,o=t.payload,r=e.state;if(t.isTransition){var s=B.T,d={};B.T=d;try{var m=n(r,o),k=B.S;k!==null&&k(d,m),_d(e,t,m)}catch(O){ji(e,t,O)}finally{s!==null&&d.types!==null&&(s.types=d.types),B.T=s}}else try{s=n(r,o),_d(e,t,s)}catch(O){ji(e,t,O)}}function _d(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Ud(e,t,o)},function(o){return ji(e,t,o)}):Ud(e,t,n)}function Ud(e,t,n){t.status="fulfilled",t.value=n,Ld(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Md(e,n)))}function ji(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,Ld(t),t=t.next;while(t!==o)}e.action=null}function Ld(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Hd(e,t){return t}function Gd(e,t){if(Ze){var n=dt.formState;if(n!==null){e:{var o=Me;if(Ze){if(mt){t:{for(var r=mt,s=hn;r.nodeType!==8;){if(!s){r=null;break t}if(r=gn(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){mt=gn(r.nextSibling),o=r.data==="F!";break e}}sa(o)}o=!1}o&&(t=n[0])}}return n=Kt(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:t},n.queue=o,n=rf.bind(null,Me,o),o.dispatch=n,o=wi(!1),s=Ni.bind(null,Me,!1,o.queue),o=Kt(),r={state:t,dispatch:null,action:e,pending:null},o.queue=r,n=wv.bind(null,Me,r,s,n),r.dispatch=n,o.memoizedState=e,[t,n,!1]}function Yd(e){var t=St();return qd(t,lt,e)}function qd(e,t,n){if(t=yi(e,t,Hd)[0],e=yl(Xn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=dr(t)}catch(d){throw d===yo?ul:d}else o=t;t=St();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(Me.flags|=2048,To(9,{destroy:void 0},jv.bind(null,r,n),null)),[o,s,e]}function jv(e,t){e.action=t}function Vd(e){var t=St(),n=lt;if(n!==null)return qd(t,n,e);St(),t=t.memoizedState,n=St();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function To(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=Me.updateQueue,t===null&&(t=xl(),Me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function Xd(){return St().memoizedState}function kl(e,t,n,o){var r=Kt();Me.flags|=e,r.memoizedState=To(1|t,{destroy:void 0},n,o===void 0?null:o)}function wl(e,t,n,o){var r=St();o=o===void 0?null:o;var s=r.memoizedState.inst;lt!==null&&o!==null&&mi(o,lt.memoizedState.deps)?r.memoizedState=To(t,s,n,o):(Me.flags|=e,r.memoizedState=To(1|t,s,n,o))}function Kd(e,t){kl(8390656,8,e,t)}function Si(e,t){wl(2048,8,e,t)}function Sv(e){Me.flags|=4;var t=Me.updateQueue;if(t===null)t=xl(),Me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Qd(e){var t=St().memoizedState;return Sv({ref:t,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Zd(e,t){return wl(4,2,e,t)}function Fd(e,t){return wl(4,4,e,t)}function $d(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Id(e,t,n){n=n!=null?n.concat([e]):null,wl(4,4,$d.bind(null,t,e),n)}function Ti(){}function Jd(e,t){var n=St();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&mi(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Wd(e,t){var n=St();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&mi(t,o[1]))return o[0];if(o=e(),Ka){qt(!0);try{e()}finally{qt(!1)}}return n.memoizedState=[o,t],o}function Di(e,t,n){return n===void 0||(Vn&1073741824)!==0&&(Ke&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ep(),Me.lanes|=e,va|=e,n)}function Pd(e,t,n,o){return en(n,t)?n:wo.current!==null?(e=Di(e,n,o),en(e,t)||(Ct=!0),e):(Vn&42)===0||(Vn&1073741824)!==0&&(Ke&261930)===0?(Ct=!0,e.memoizedState=n):(e=ep(),Me.lanes|=e,va|=e,t)}function ef(e,t,n,o,r){var s=q.p;q.p=s!==0&&8>s?s:8;var d=B.T,m={};B.T=m,Ni(e,!1,t,n);try{var k=r(),O=B.S;if(O!==null&&O(m,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var G=bv(k,o);fr(e,t,G,ln(e))}else fr(e,t,o,ln(e))}catch(F){fr(e,t,{then:function(){},status:"rejected",reason:F},ln())}finally{q.p=s,d!==null&&m.types!==null&&(d.types=m.types),B.T=d}}function Tv(){}function Ci(e,t,n,o){if(e.tag!==5)throw Error(c(476));var r=tf(e).queue;ef(e,r,t,ee,n===null?Tv:function(){return nf(e),n(o)})}function tf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nf(e){var t=tf(e);t.next===null&&(t=e.alternate.memoizedState),fr(e,t.next.queue,{},ln())}function Bi(){return Ut(Nr)}function af(){return St().memoizedState}function of(){return St().memoizedState}function Dv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ln();e=ua(n);var o=da(t,e,n);o!==null&&(Wt(o,t,n),sr(o,t,n)),t={cache:ai()},e.payload=t;return}t=t.return}}function Cv(e,t,n){var o=ln();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},jl(e)?lf(t,n):(n=Qs(e,t,n,o),n!==null&&(Wt(n,e,o),sf(n,t,o)))}function rf(e,t,n){var o=ln();fr(e,t,n,o)}function fr(e,t,n,o){var r={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(jl(e))lf(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,m=s(d,n);if(r.hasEagerState=!0,r.eagerState=m,en(m,d))return al(e,t,r,0),dt===null&&nl(),!1}catch{}if(n=Qs(e,t,r,o),n!==null)return Wt(n,e,o),sf(n,t,o),!0}return!1}function Ni(e,t,n,o){if(o={lane:2,revertLane:sc(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(e)){if(t)throw Error(c(479))}else t=Qs(e,n,o,2),t!==null&&Wt(t,e,2)}function jl(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function lf(e,t){jo=vl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sf(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,fu(e,n)}}var pr={readContext:Ut,use:bl,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt};pr.useEffectEvent=kt;var cf={readContext:Ut,use:bl,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:Kd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,kl(4194308,4,$d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kl(4194308,4,e,t)},useInsertionEffect:function(e,t){kl(4,2,e,t)},useMemo:function(e,t){var n=Kt();t=t===void 0?null:t;var o=e();if(Ka){qt(!0);try{e()}finally{qt(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=Kt();if(n!==void 0){var r=n(t);if(Ka){qt(!0);try{n(t)}finally{qt(!1)}}}else r=t;return o.memoizedState=o.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Cv.bind(null,Me,e),[o.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:function(e){e=wi(e);var t=e.queue,n=rf.bind(null,Me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ti,useDeferredValue:function(e,t){var n=Kt();return Di(n,e,t)},useTransition:function(){var e=wi(!1);return e=ef.bind(null,Me,e.queue,!0,!1),Kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=Me,r=Kt();if(Ze){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),dt===null)throw Error(c(349));(Ke&127)!==0||Nd(o,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Kd(Ed.bind(null,o,s,e),[e]),o.flags|=2048,To(9,{destroy:void 0},Ad.bind(null,o,s,n,t),null),n},useId:function(){var e=Kt(),t=dt.identifierPrefix;if(Ze){var n=An,o=Nn;n=(o&~(1<<32-Et(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=gl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=yv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bi,useFormState:Gd,useActionState:Gd,useOptimistic:function(e){var t=Kt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ni.bind(null,Me,!0,n),n.dispatch=t,[e,t]},useMemoCache:bi,useCacheRefresh:function(){return Kt().memoizedState=Dv.bind(null,Me)},useEffectEvent:function(e){var t=Kt(),n={impl:e};return t.memoizedState=n,function(){if((Pe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ai={readContext:Ut,use:bl,useCallback:Jd,useContext:Ut,useEffect:Si,useImperativeHandle:Id,useInsertionEffect:Zd,useLayoutEffect:Fd,useMemo:Wd,useReducer:yl,useRef:Xd,useState:function(){return yl(Xn)},useDebugValue:Ti,useDeferredValue:function(e,t){var n=St();return Pd(n,lt.memoizedState,e,t)},useTransition:function(){var e=yl(Xn)[0],t=St().memoizedState;return[typeof e=="boolean"?e:dr(e),t]},useSyncExternalStore:Bd,useId:af,useHostTransitionStatus:Bi,useFormState:Yd,useActionState:Yd,useOptimistic:function(e,t){var n=St();return Rd(n,lt,e,t)},useMemoCache:bi,useCacheRefresh:of};Ai.useEffectEvent=Qd;var uf={readContext:Ut,use:bl,useCallback:Jd,useContext:Ut,useEffect:Si,useImperativeHandle:Id,useInsertionEffect:Zd,useLayoutEffect:Fd,useMemo:Wd,useReducer:ki,useRef:Xd,useState:function(){return ki(Xn)},useDebugValue:Ti,useDeferredValue:function(e,t){var n=St();return lt===null?Di(n,e,t):Pd(n,lt.memoizedState,e,t)},useTransition:function(){var e=ki(Xn)[0],t=St().memoizedState;return[typeof e=="boolean"?e:dr(e),t]},useSyncExternalStore:Bd,useId:af,useHostTransitionStatus:Bi,useFormState:Vd,useActionState:Vd,useOptimistic:function(e,t){var n=St();return lt!==null?Rd(n,lt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:bi,useCacheRefresh:of};uf.useEffectEvent=Qd;function Ei(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=ln(),r=ua(o);r.payload=t,n!=null&&(r.callback=n),t=da(e,r,o),t!==null&&(Wt(t,e,o),sr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=ln(),r=ua(o);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=da(e,r,o),t!==null&&(Wt(t,e,o),sr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ln(),o=ua(n);o.tag=2,t!=null&&(o.callback=t),t=da(e,o,n),t!==null&&(Wt(t,e,n),sr(t,e,n))}};function df(e,t,n,o,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,d):t.prototype&&t.prototype.isPureReactComponent?!Po(n,o)||!Po(r,s):!0}function ff(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&zi.enqueueReplaceState(t,t.state,null)}function Qa(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function pf(e){tl(e)}function mf(e){console.error(e)}function hf(e){tl(e)}function Sl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function vf(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Oi(e,t,n){return n=ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Sl(e,t)},n}function gf(e){return e=ua(e),e.tag=3,e}function xf(e,t,n,o){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=o.value;e.payload=function(){return r(s)},e.callback=function(){vf(t,n,o)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){vf(t,n,o),typeof r!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var m=o.stack;this.componentDidCatch(o.value,{componentStack:m!==null?m:""})})}function Bv(e,t,n,o,r){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&go(t,n,r,!0),n=nn.current,n!==null){switch(n.tag){case 31:case 13:return vn===null?_l():n.alternate===null&&wt===0&&(wt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,o===dl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),oc(e,o,r)),!1;case 22:return n.flags|=65536,o===dl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),oc(e,o,r)),!1}throw Error(c(435,n.tag))}return oc(e,o,r),_l(),!1}if(Ze)return t=nn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,o!==Ws&&(e=Error(c(422),{cause:o}),nr(fn(e,n)))):(o!==Ws&&(t=Error(c(423),{cause:o}),nr(fn(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,o=fn(o,n),r=Oi(e.stateNode,o,r),ci(e,r),wt!==4&&(wt=2)),!1;var s=Error(c(520),{cause:o});if(s=fn(s,n),kr===null?kr=[s]:kr.push(s),wt!==4&&(wt=2),t===null)return!0;o=fn(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Oi(n.stateNode,o,e),ci(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ga===null||!ga.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=gf(r),xf(r,e,n,o),ci(n,r),!1}n=n.return}while(n!==null);return!1}var Ri=Error(c(461)),Ct=!1;function Lt(e,t,n,o){t.child=e===null?kd(t,null,n,o):Xa(t,e.child,n,o)}function bf(e,t,n,o,r){n=n.render;var s=t.ref;if("ref"in o){var d={};for(var m in o)m!=="ref"&&(d[m]=o[m])}else d=o;return Ga(t),o=hi(e,t,n,d,s,r),m=vi(),e!==null&&!Ct?(gi(e,t,r),Kn(e,t,r)):(Ze&&m&&Is(t),t.flags|=1,Lt(e,t,o,r),t.child)}function yf(e,t,n,o,r){if(e===null){var s=n.type;return typeof s=="function"&&!Zs(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,kf(e,t,s,o,r)):(e=rl(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!qi(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(d,o)&&e.ref===t.ref)return Kn(e,t,r)}return t.flags|=1,e=Hn(s,o),e.ref=t.ref,e.return=t,t.child=e}function kf(e,t,n,o,r){if(e!==null){var s=e.memoizedProps;if(Po(s,o)&&e.ref===t.ref)if(Ct=!1,t.pendingProps=o=s,qi(e,r))(e.flags&131072)!==0&&(Ct=!0);else return t.lanes=e.lanes,Kn(e,t,r)}return Mi(e,t,n,o,r)}function wf(e,t,n,o){var r=o.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(o=t.child=e.child,r=0;o!==null;)r=r|o.lanes|o.childLanes,o=o.sibling;o=r&~s}else o=0,t.child=null;return jf(e,t,s,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cl(t,s!==null?s.cachePool:null),s!==null?Sd(t,s):di(),Td(t);else return o=t.lanes=536870912,jf(e,t,s!==null?s.baseLanes|n:n,n,o)}else s!==null?(cl(t,s.cachePool),Sd(t,s),pa(),t.memoizedState=null):(e!==null&&cl(t,null),di(),pa());return Lt(e,t,r,n),t.child}function mr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jf(e,t,n,o,r){var s=ri();return s=s===null?null:{parent:Tt._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&cl(t,null),di(),Td(t),e!==null&&go(e,t,o,!0),t.childLanes=r,null}function Tl(e,t){return t=Cl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sf(e,t,n){return Xa(t,e.child,null,n),e=Tl(t,t.pendingProps),e.flags|=2,an(t),t.memoizedState=null,e}function Nv(e,t,n){var o=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ze){if(o.mode==="hidden")return e=Tl(t,o),t.lanes=536870912,mr(null,e);if(pi(t),(e=mt)?(e=_p(e,hn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Nn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},n=ld(e),n.return=t,t.child=n,_t=t,mt=null)):e=null,e===null)throw sa(t);return t.lanes=536870912,null}return Tl(t,o)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(pi(t),r)if(t.flags&256)t.flags&=-257,t=Sf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ct||go(e,t,n,!1),r=(n&e.childLanes)!==0,Ct||r){if(o=dt,o!==null&&(d=pu(o,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,_a(e,d),Wt(o,e,d),Ri;_l(),t=Sf(e,t,n)}else e=s.treeContext,mt=gn(d.nextSibling),_t=t,Ze=!0,la=null,hn=!1,e!==null&&cd(t,e),t=Tl(t,o),t.flags|=4096;return t}return e=Hn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Dl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Mi(e,t,n,o,r){return Ga(t),n=hi(e,t,n,o,void 0,r),o=vi(),e!==null&&!Ct?(gi(e,t,r),Kn(e,t,r)):(Ze&&o&&Is(t),t.flags|=1,Lt(e,t,n,r),t.child)}function Tf(e,t,n,o,r,s){return Ga(t),t.updateQueue=null,n=Cd(t,o,n,r),Dd(e),o=vi(),e!==null&&!Ct?(gi(e,t,s),Kn(e,t,s)):(Ze&&o&&Is(t),t.flags|=1,Lt(e,t,n,s),t.child)}function Df(e,t,n,o,r){if(Ga(t),t.stateNode===null){var s=po,d=n.contextType;typeof d=="object"&&d!==null&&(s=Ut(d)),s=new n(o,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zi,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=o,s.state=t.memoizedState,s.refs={},si(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?Ut(d):po,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Ei(t,n,d,o),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&zi.enqueueReplaceState(s,s.state,null),cr(t,o,s,r),ir(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,k=Qa(n,m);s.props=k;var O=s.context,G=n.contextType;d=po,typeof G=="object"&&G!==null&&(d=Ut(G));var F=n.getDerivedStateFromProps;G=typeof F=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,G||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||O!==d)&&ff(t,s,o,d),ca=!1;var M=t.memoizedState;s.state=M,cr(t,o,s,r),ir(),O=t.memoizedState,m||M!==O||ca?(typeof F=="function"&&(Ei(t,n,F,o),O=t.memoizedState),(k=ca||df(t,n,k,o,M,O,d))?(G||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=O),s.props=o,s.state=O,s.context=d,o=k):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,ii(e,t),d=t.memoizedProps,G=Qa(n,d),s.props=G,F=t.pendingProps,M=s.context,O=n.contextType,k=po,typeof O=="object"&&O!==null&&(k=Ut(O)),m=n.getDerivedStateFromProps,(O=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==F||M!==k)&&ff(t,s,o,k),ca=!1,M=t.memoizedState,s.state=M,cr(t,o,s,r),ir();var U=t.memoizedState;d!==F||M!==U||ca||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof m=="function"&&(Ei(t,n,m,o),U=t.memoizedState),(G=ca||df(t,n,G,o,M,U,k)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(O||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,U,k),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,U,k)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=U),s.props=o,s.state=U,s.context=k,o=G):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),o=!1)}return s=o,Dl(e,t),o=(t.flags&128)!==0,s||o?(s=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&o?(t.child=Xa(t,e.child,null,r),t.child=Xa(t,null,n,r)):Lt(e,t,n,r),t.memoizedState=s.state,e=t.child):e=Kn(e,t,r),e}function Cf(e,t,n,o){return La(),t.flags|=256,Lt(e,t,n,o),t.child}var _i={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ui(e){return{baseLanes:e,cachePool:hd()}}function Li(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=rn),e}function Bf(e,t,n){var o=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(jt.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ze){if(r?fa(t):pa(),(e=mt)?(e=_p(e,hn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Nn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},n=ld(e),n.return=t,t.child=n,_t=t,mt=null)):e=null,e===null)throw sa(t);return yc(e)?t.lanes=32:t.lanes=536870912,null}var m=o.children;return o=o.fallback,r?(pa(),r=t.mode,m=Cl({mode:"hidden",children:m},r),o=Ua(o,r,n,null),m.return=t,o.return=t,m.sibling=o,t.child=m,o=t.child,o.memoizedState=Ui(n),o.childLanes=Li(e,d,n),t.memoizedState=_i,mr(null,o)):(fa(t),Hi(t,m))}var k=e.memoizedState;if(k!==null&&(m=k.dehydrated,m!==null)){if(s)t.flags&256?(fa(t),t.flags&=-257,t=Gi(e,t,n)):t.memoizedState!==null?(pa(),t.child=e.child,t.flags|=128,t=null):(pa(),m=o.fallback,r=t.mode,o=Cl({mode:"visible",children:o.children},r),m=Ua(m,r,n,null),m.flags|=2,o.return=t,m.return=t,o.sibling=m,t.child=o,Xa(t,e.child,null,n),o=t.child,o.memoizedState=Ui(n),o.childLanes=Li(e,d,n),t.memoizedState=_i,t=mr(null,o));else if(fa(t),yc(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var O=d.dgst;d=O,o=Error(c(419)),o.stack="",o.digest=d,nr({value:o,source:null,stack:null}),t=Gi(e,t,n)}else if(Ct||go(e,t,n,!1),d=(n&e.childLanes)!==0,Ct||d){if(d=dt,d!==null&&(o=pu(d,n),o!==0&&o!==k.retryLane))throw k.retryLane=o,_a(e,o),Wt(d,e,o),Ri;bc(m)||_l(),t=Gi(e,t,n)}else bc(m)?(t.flags|=192,t.child=e.child,t=null):(e=k.treeContext,mt=gn(m.nextSibling),_t=t,Ze=!0,la=null,hn=!1,e!==null&&cd(t,e),t=Hi(t,o.children),t.flags|=4096);return t}return r?(pa(),m=o.fallback,r=t.mode,k=e.child,O=k.sibling,o=Hn(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,O!==null?m=Hn(O,m):(m=Ua(m,r,n,null),m.flags|=2),m.return=t,o.return=t,o.sibling=m,t.child=o,mr(null,o),o=t.child,m=e.child.memoizedState,m===null?m=Ui(n):(r=m.cachePool,r!==null?(k=Tt._currentValue,r=r.parent!==k?{parent:k,pool:k}:r):r=hd(),m={baseLanes:m.baseLanes|n,cachePool:r}),o.memoizedState=m,o.childLanes=Li(e,d,n),t.memoizedState=_i,mr(e.child,o)):(fa(t),n=e.child,e=n.sibling,n=Hn(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Hi(e,t){return t=Cl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Cl(e,t){return e=tn(22,e,null,t),e.lanes=0,e}function Gi(e,t,n){return Xa(t,e.child,null,n),e=Hi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ti(e.return,t,n)}function Yi(e,t,n,o,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function Af(e,t,n){var o=t.pendingProps,r=o.revealOrder,s=o.tail;o=o.children;var d=jt.current,m=(d&2)!==0;if(m?(d=d&1|2,t.flags|=128):d&=1,V(jt,d),Lt(e,t,o,n),o=Ze?tr:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,n,t);else if(e.tag===19)Nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&hl(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Yi(t,!1,r,n,s,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&hl(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Yi(t,!0,n,null,s,o);break;case"together":Yi(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),va|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(go(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qi(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function Av(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),ia(t,Tt,e.memoizedState.cache),La();break;case 27:case 5:he(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pi(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(fa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Bf(e,t,n):(fa(t),e=Kn(e,t,n),e!==null?e.sibling:null);fa(t);break;case 19:var r=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(go(e,t,n,!1),o=(n&t.childLanes)!==0),r){if(o)return Af(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(jt,jt.current),o)break;return null;case 22:return t.lanes=0,wf(e,t,n,t.pendingProps);case 24:ia(t,Tt,e.memoizedState.cache)}return Kn(e,t,n)}function Ef(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ct=!0;else{if(!qi(e,n)&&(t.flags&128)===0)return Ct=!1,Av(e,t,n);Ct=(e.flags&131072)!==0}else Ct=!1,Ze&&(t.flags&1048576)!==0&&id(t,tr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")Zs(e)?(o=Qa(e,o),t.tag=1,t=Df(null,t,e,o,n)):(t.tag=0,t=Mi(null,t,e,o,n));else{if(e!=null){var r=e.$$typeof;if(r===$){t.tag=11,t=bf(null,t,e,o,n);break e}else if(r===I){t.tag=14,t=yf(null,t,e,o,n);break e}}throw t=ye(e)||e,Error(c(306,t,""))}}return t;case 0:return Mi(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,r=Qa(o,t.pendingProps),Df(e,t,o,r,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(c(387));o=t.pendingProps;var s=t.memoizedState;r=s.element,ii(e,t),cr(t,o,null,n);var d=t.memoizedState;if(o=d.cache,ia(t,Tt,o),o!==s.cache&&ni(t,[Tt],n,!0),ir(),o=d.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Cf(e,t,o,n);break e}else if(o!==r){r=fn(Error(c(424)),t),nr(r),t=Cf(e,t,o,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,mt=gn(e.firstChild),_t=t,Ze=!0,la=null,hn=!0,n=kd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(La(),o===r){t=Kn(e,t,n);break e}Lt(e,t,o,n)}t=t.child}return t;case 26:return Dl(e,t),e===null?(n=qp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ze||(n=t.type,e=t.pendingProps,o=Vl(re.current).createElement(n),o[Mt]=t,o[Qt]=e,Ht(o,n,e),Ot(o),t.stateNode=o):t.memoizedState=qp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),e===null&&Ze&&(o=t.stateNode=Hp(t.type,t.pendingProps,re.current),_t=t,hn=!0,r=mt,ka(t.type)?(kc=r,mt=gn(o.firstChild)):mt=r),Lt(e,t,t.pendingProps.children,n),Dl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ze&&((r=o=mt)&&(o=lg(o,t.type,t.pendingProps,hn),o!==null?(t.stateNode=o,_t=t,mt=gn(o.firstChild),hn=!1,r=!0):r=!1),r||sa(t)),he(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,o=s.children,vc(r,s)?o=null:d!==null&&vc(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=hi(e,t,kv,null,null,n),Nr._currentValue=r),Dl(e,t),Lt(e,t,o,n),t.child;case 6:return e===null&&Ze&&((e=n=mt)&&(n=sg(n,t.pendingProps,hn),n!==null?(t.stateNode=n,_t=t,mt=null,e=!0):e=!1),e||sa(t)),null;case 13:return Bf(e,t,n);case 4:return je(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Xa(t,null,o,n):Lt(e,t,o,n),t.child;case 11:return bf(e,t,t.type,t.pendingProps,n);case 7:return Lt(e,t,t.pendingProps,n),t.child;case 8:return Lt(e,t,t.pendingProps.children,n),t.child;case 12:return Lt(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,ia(t,t.type,o.value),Lt(e,t,o.children,n),t.child;case 9:return r=t.type._context,o=t.pendingProps.children,Ga(t),r=Ut(r),o=o(r),t.flags|=1,Lt(e,t,o,n),t.child;case 14:return yf(e,t,t.type,t.pendingProps,n);case 15:return kf(e,t,t.type,t.pendingProps,n);case 19:return Af(e,t,n);case 31:return Nv(e,t,n);case 22:return wf(e,t,n,t.pendingProps);case 24:return Ga(t),o=Ut(Tt),e===null?(r=ri(),r===null&&(r=dt,s=ai(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:o,cache:r},si(t),ia(t,Tt,r)):((e.lanes&n)!==0&&(ii(e,t),cr(t,null,null,n),ir()),r=e.memoizedState,s=t.memoizedState,r.parent!==o?(r={parent:o,cache:o},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ia(t,Tt,o)):(o=s.cache,ia(t,Tt,o),o!==r.cache&&ni(t,[Tt],n,!0))),Lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Qn(e){e.flags|=4}function Vi(e,t,n,o,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(op())e.flags|=8192;else throw Va=dl,li}else e.flags&=-16777217}function zf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zp(t))if(op())e.flags|=8192;else throw Va=dl,li}function Bl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ea():536870912,e.lanes|=t,No|=t)}function hr(e,t){if(!Ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Ev(e,t,n){var o=t.pendingProps;switch(Js(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return ht(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),qn(Tt),J(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(vo(t)?Qn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ps())),ht(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Qn(t),s!==null?(ht(t),zf(t,s)):(ht(t),Vi(t,r,null,o,n))):s?s!==e.memoizedState?(Qn(t),ht(t),zf(t,s)):(ht(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Qn(t),ht(t),Vi(t,r,e,o,n)),null;case 27:if(Ce(t),n=re.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Qn(t);else{if(!o){if(t.stateNode===null)throw Error(c(166));return ht(t),null}e=E.current,vo(t)?ud(t):(e=Hp(r,o,n),t.stateNode=e,Qn(t))}return ht(t),null;case 5:if(Ce(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Qn(t);else{if(!o){if(t.stateNode===null)throw Error(c(166));return ht(t),null}if(s=E.current,vo(t))ud(t);else{var d=Vl(re.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof o.is=="string"?d.createElement("select",{is:o.is}):d.createElement("select"),o.multiple?s.multiple=!0:o.size&&(s.size=o.size);break;default:s=typeof o.is=="string"?d.createElement(r,{is:o.is}):d.createElement(r)}}s[Mt]=t,s[Qt]=o;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(Ht(s,r,o),r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Qn(t)}}return ht(t),Vi(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Qn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,vo(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,r=_t,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Bp(e.nodeValue,n)),e||sa(t,!0)}else e=Vl(e).createTextNode(o),e[Mt]=t,t.stateNode=e}return ht(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=vo(t),n!==null){if(e===null){if(!o)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Mt]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ht(t),e=!1}else n=Ps(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(an(t),t):(an(t),null);if((t.flags&128)!==0)throw Error(c(558))}return ht(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=vo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[Mt]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ht(t),r=!1}else r=Ps(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(an(t),t):(an(t),null)}return an(t),(t.flags&128)!==0?(t.lanes=n,t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool),s=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(s=o.memoizedState.cachePool.pool),s!==r&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bl(t,t.updateQueue),ht(t),null);case 4:return J(),e===null&&dc(t.stateNode.containerInfo),ht(t),null;case 10:return qn(t.type),ht(t),null;case 19:if(T(jt),o=t.memoizedState,o===null)return ht(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)hr(o,!1);else{if(wt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=hl(e),s!==null){for(t.flags|=128,hr(o,!1),e=s.updateQueue,t.updateQueue=e,Bl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)rd(n,e),n=n.sibling;return V(jt,jt.current&1|2),Ze&&Gn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&ze()>Ol&&(t.flags|=128,r=!0,hr(o,!1),t.lanes=4194304)}else{if(!r)if(e=hl(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Bl(t,e),hr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ze)return ht(t),null}else 2*ze()-o.renderingStartTime>Ol&&n!==536870912&&(t.flags|=128,r=!0,hr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(e=o.last,e!==null?e.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ze(),e.sibling=null,n=jt.current,V(jt,r?n&1|2:n&1),Ze&&Gn(t,o.treeForkCount),e):(ht(t),null);case 22:case 23:return an(t),fi(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),n=t.updateQueue,n!==null&&Bl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&T(Ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qn(Tt),ht(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function zv(e,t){switch(Js(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(Tt),J(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(an(t),t.alternate===null)throw Error(c(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(an(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(jt),null;case 4:return J(),null;case 10:return qn(t.type),null;case 22:case 23:return an(t),fi(),e!==null&&T(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qn(Tt),null;case 25:return null;default:return null}}function Of(e,t){switch(Js(t),t.tag){case 3:qn(Tt),J();break;case 26:case 27:case 5:Ce(t);break;case 4:J();break;case 31:t.memoizedState!==null&&an(t);break;case 13:an(t);break;case 19:T(jt);break;case 10:qn(t.type);break;case 22:case 23:an(t),fi(),e!==null&&T(Ya);break;case 24:qn(Tt)}}function vr(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var r=o.next;n=r;do{if((n.tag&e)===e){o=void 0;var s=n.create,d=n.inst;o=s(),d.destroy=o}n=n.next}while(n!==r)}}catch(m){at(t,t.return,m)}}function ma(e,t,n){try{var o=t.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var s=r.next;o=s;do{if((o.tag&e)===e){var d=o.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,r=t;var k=n,O=m;try{O()}catch(G){at(r,k,G)}}}o=o.next}while(o!==s)}}catch(G){at(t,t.return,G)}}function Rf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jd(t,n)}catch(o){at(e,e.return,o)}}}function Mf(e,t,n){n.props=Qa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){at(e,t,o)}}function gr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(r){at(e,t,r)}}function En(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(r){at(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){at(e,t,r)}else n.current=null}function _f(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(r){at(e,e.return,r)}}function Xi(e,t,n){try{var o=e.stateNode;eg(o,e.type,n,t),o[Qt]=t}catch(r){at(e,e.return,r)}}function Uf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Ki(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Un));else if(o!==4&&(o===27&&ka(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}function Nl(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function Lf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Ht(t,o,n),t[Mt]=e,t[Qt]=n}catch(s){at(e,e.return,s)}}var Zn=!1,Bt=!1,Zi=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function Ov(e,t){if(e=e.containerInfo,mc=Il,e=Iu(e),Gs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,m=-1,k=-1,O=0,G=0,F=e,M=null;t:for(;;){for(var U;F!==n||r!==0&&F.nodeType!==3||(m=d+r),F!==s||o!==0&&F.nodeType!==3||(k=d+o),F.nodeType===3&&(d+=F.nodeValue.length),(U=F.firstChild)!==null;)M=F,F=U;for(;;){if(F===e)break t;if(M===n&&++O===r&&(m=d),M===s&&++G===o&&(k=d),(U=F.nextSibling)!==null)break;F=M,M=F.parentNode}F=U}n=m===-1||k===-1?null:{start:m,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:e,selectionRange:n},Il=!1,Rt=t;Rt!==null;)if(t=Rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Rt=e;else for(;Rt!==null;){switch(t=Rt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,o=n.stateNode;try{var be=Qa(n.type,r);e=o.getSnapshotBeforeUpdate(be,s),o.__reactInternalSnapshotBeforeUpdate=e}catch(De){at(n,n.return,De)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Rt=e;break}Rt=t.return}}function Gf(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:$n(e,n),o&4&&vr(5,n);break;case 1:if($n(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){at(n,n.return,d)}else{var r=Qa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){at(n,n.return,d)}}o&64&&Rf(n),o&512&&gr(n,n.return);break;case 3:if($n(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jd(e,t)}catch(d){at(n,n.return,d)}}break;case 27:t===null&&o&4&&Lf(n);case 26:case 5:$n(e,n),t===null&&o&4&&_f(n),o&512&&gr(n,n.return);break;case 12:$n(e,n);break;case 31:$n(e,n),o&4&&Vf(e,n);break;case 13:$n(e,n),o&4&&Xf(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qv.bind(null,n),ig(e,n))));break;case 22:if(o=n.memoizedState!==null||Zn,!o){t=t!==null&&t.memoizedState!==null||Bt,r=Zn;var s=Bt;Zn=o,(Bt=t)&&!s?In(e,n,(n.subtreeFlags&8772)!==0):$n(e,n),Zn=r,Bt=s}break;case 30:break;default:$n(e,n)}}function Yf(e){var t=e.alternate;t!==null&&(e.alternate=null,Yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&js(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gt=null,Ft=!1;function Fn(e,t,n){for(n=n.child;n!==null;)qf(e,t,n),n=n.sibling}function qf(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(wn,n)}catch{}switch(n.tag){case 26:Bt||En(n,t),Fn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Bt||En(n,t);var o=gt,r=Ft;ka(n.type)&&(gt=n.stateNode,Ft=!1),Fn(e,t,n),Dr(n.stateNode),gt=o,Ft=r;break;case 5:Bt||En(n,t);case 6:if(o=gt,r=Ft,gt=null,Fn(e,t,n),gt=o,Ft=r,gt!==null)if(Ft)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(n.stateNode)}catch(s){at(n,t,s)}else try{gt.removeChild(n.stateNode)}catch(s){at(n,t,s)}break;case 18:gt!==null&&(Ft?(e=gt,Rp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Uo(e)):Rp(gt,n.stateNode));break;case 4:o=gt,r=Ft,gt=n.stateNode.containerInfo,Ft=!0,Fn(e,t,n),gt=o,Ft=r;break;case 0:case 11:case 14:case 15:ma(2,n,t),Bt||ma(4,n,t),Fn(e,t,n);break;case 1:Bt||(En(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&Mf(n,t,o)),Fn(e,t,n);break;case 21:Fn(e,t,n);break;case 22:Bt=(o=Bt)||n.memoizedState!==null,Fn(e,t,n),Bt=o;break;default:Fn(e,t,n)}}function Vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Uo(e)}catch(n){at(t,t.return,n)}}}function Xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uo(e)}catch(n){at(t,t.return,n)}}function Rv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hf),t;default:throw Error(c(435,e.tag))}}function Al(e,t){var n=Rv(e);t.forEach(function(o){if(!n.has(o)){n.add(o);var r=Vv.bind(null,e,o);o.then(r,r)}})}function $t(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o],s=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(ka(m.type)){gt=m.stateNode,Ft=!1;break e}break;case 5:gt=m.stateNode,Ft=!1;break e;case 3:case 4:gt=m.stateNode.containerInfo,Ft=!0;break e}m=m.return}if(gt===null)throw Error(c(160));qf(s,d,r),gt=null,Ft=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}var Tn=null;function Kf(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$t(t,e),It(e),o&4&&(ma(3,e,e.return),vr(3,e),ma(5,e,e.return));break;case 1:$t(t,e),It(e),o&512&&(Bt||n===null||En(n,n.return)),o&64&&Zn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var r=Tn;if($t(t,e),It(e),o&512&&(Bt||n===null||En(n,n.return)),o&4){var s=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(o){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Xo]||s[Mt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(o),r.head.insertBefore(s,r.querySelector("head > title"))),Ht(s,o,n),s[Mt]=e,Ot(s),o=s;break e;case"link":var d=Kp("link","href",r).get(o+(n.href||""));if(d){for(var m=0;m<d.length;m++)if(s=d[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(m,1);break t}}s=r.createElement(o),Ht(s,o,n),r.head.appendChild(s);break;case"meta":if(d=Kp("meta","content",r).get(o+(n.content||""))){for(m=0;m<d.length;m++)if(s=d[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(m,1);break t}}s=r.createElement(o),Ht(s,o,n),r.head.appendChild(s);break;default:throw Error(c(468,o))}s[Mt]=e,Ot(s),o=s}e.stateNode=o}else Qp(r,e.type,e.stateNode);else e.stateNode=Xp(r,o,e.memoizedProps);else s!==o?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,o===null?Qp(r,e.type,e.stateNode):Xp(r,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Xi(e,e.memoizedProps,n.memoizedProps)}break;case 27:$t(t,e),It(e),o&512&&(Bt||n===null||En(n,n.return)),n!==null&&o&4&&Xi(e,e.memoizedProps,n.memoizedProps);break;case 5:if($t(t,e),It(e),o&512&&(Bt||n===null||En(n,n.return)),e.flags&32){r=e.stateNode;try{ro(r,"")}catch(be){at(e,e.return,be)}}o&4&&e.stateNode!=null&&(r=e.memoizedProps,Xi(e,r,n!==null?n.memoizedProps:r)),o&1024&&(Zi=!0);break;case 6:if($t(t,e),It(e),o&4){if(e.stateNode===null)throw Error(c(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(be){at(e,e.return,be)}}break;case 3:if(Ql=null,r=Tn,Tn=Xl(t.containerInfo),$t(t,e),Tn=r,It(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(t.containerInfo)}catch(be){at(e,e.return,be)}Zi&&(Zi=!1,Qf(e));break;case 4:o=Tn,Tn=Xl(e.stateNode.containerInfo),$t(t,e),It(e),Tn=o;break;case 12:$t(t,e),It(e);break;case 31:$t(t,e),It(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Al(e,o)));break;case 13:$t(t,e),It(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zl=ze()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Al(e,o)));break;case 22:r=e.memoizedState!==null;var k=n!==null&&n.memoizedState!==null,O=Zn,G=Bt;if(Zn=O||r,Bt=G||k,$t(t,e),Bt=G,Zn=O,It(e),o&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||k||Zn||Bt||Za(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){k=n=t;try{if(s=k.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=k.stateNode;var F=k.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null;m.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(be){at(k,k.return,be)}}}else if(t.tag===6){if(n===null){k=t;try{k.stateNode.nodeValue=r?"":k.memoizedProps}catch(be){at(k,k.return,be)}}}else if(t.tag===18){if(n===null){k=t;try{var U=k.stateNode;r?Mp(U,!0):Mp(k.stateNode,!1)}catch(be){at(k,k.return,be)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Al(e,n))));break;case 19:$t(t,e),It(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Al(e,o)));break;case 30:break;case 21:break;default:$t(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(Uf(o)){n=o;break}o=o.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,s=Ki(e);Nl(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(ro(d,""),n.flags&=-33);var m=Ki(e);Nl(e,m,d);break;case 3:case 4:var k=n.stateNode.containerInfo,O=Ki(e);Qi(e,O,k);break;default:throw Error(c(161))}}catch(G){at(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $n(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gf(e,t.alternate,t),t=t.sibling}function Za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),Za(t);break;case 1:En(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Mf(t,t.return,n),Za(t);break;case 27:Dr(t.stateNode);case 26:case 5:En(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:In(r,s,n),vr(4,s);break;case 1:if(In(r,s,n),o=s,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){at(o,o.return,O)}if(o=s,r=o.updateQueue,r!==null){var m=o.stateNode;try{var k=r.shared.hiddenCallbacks;if(k!==null)for(r.shared.hiddenCallbacks=null,r=0;r<k.length;r++)wd(k[r],m)}catch(O){at(o,o.return,O)}}n&&d&64&&Rf(s),gr(s,s.return);break;case 27:Lf(s);case 26:case 5:In(r,s,n),n&&o===null&&d&4&&_f(s),gr(s,s.return);break;case 12:In(r,s,n);break;case 31:In(r,s,n),n&&d&4&&Vf(r,s);break;case 13:In(r,s,n),n&&d&4&&Xf(r,s);break;case 22:s.memoizedState===null&&In(r,s,n),gr(s,s.return);break;case 30:break;default:In(r,s,n)}t=t.sibling}}function Fi(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ar(n))}function $i(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e))}function Dn(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zf(e,t,n,o),t=t.sibling}function Zf(e,t,n,o){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Dn(e,t,n,o),r&2048&&vr(9,t);break;case 1:Dn(e,t,n,o);break;case 3:Dn(e,t,n,o),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e)));break;case 12:if(r&2048){Dn(e,t,n,o),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,m=s.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){at(t,t.return,k)}}else Dn(e,t,n,o);break;case 31:Dn(e,t,n,o);break;case 13:Dn(e,t,n,o);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Dn(e,t,n,o):xr(e,t):s._visibility&2?Dn(e,t,n,o):(s._visibility|=2,Do(e,t,n,o,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Fi(d,t);break;case 24:Dn(e,t,n,o),r&2048&&$i(t.alternate,t);break;default:Dn(e,t,n,o)}}function Do(e,t,n,o,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,m=n,k=o,O=d.flags;switch(d.tag){case 0:case 11:case 15:Do(s,d,m,k,r),vr(8,d);break;case 23:break;case 22:var G=d.stateNode;d.memoizedState!==null?G._visibility&2?Do(s,d,m,k,r):xr(s,d):(G._visibility|=2,Do(s,d,m,k,r)),r&&O&2048&&Fi(d.alternate,d);break;case 24:Do(s,d,m,k,r),r&&O&2048&&$i(d.alternate,d);break;default:Do(s,d,m,k,r)}t=t.sibling}}function xr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,r=o.flags;switch(o.tag){case 22:xr(n,o),r&2048&&Fi(o.alternate,o);break;case 24:xr(n,o),r&2048&&$i(o.alternate,o);break;default:xr(n,o)}t=t.sibling}}var br=8192;function Co(e,t,n){if(e.subtreeFlags&br)for(e=e.child;e!==null;)Ff(e,t,n),e=e.sibling}function Ff(e,t,n){switch(e.tag){case 26:Co(e,t,n),e.flags&br&&e.memoizedState!==null&&yg(n,Tn,e.memoizedState,e.memoizedProps);break;case 5:Co(e,t,n);break;case 3:case 4:var o=Tn;Tn=Xl(e.stateNode.containerInfo),Co(e,t,n),Tn=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=br,br=16777216,Co(e,t,n),br=o):Co(e,t,n));break;default:Co(e,t,n)}}function $f(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Rt=o,Jf(o,e)}$f(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)If(e),e=e.sibling}function If(e){switch(e.tag){case 0:case 11:case 15:yr(e),e.flags&2048&&ma(9,e,e.return);break;case 3:yr(e);break;case 12:yr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,El(e)):yr(e);break;default:yr(e)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Rt=o,Jf(o,e)}$f(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),El(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,El(t));break;default:El(t)}e=e.sibling}}function Jf(e,t){for(;Rt!==null;){var n=Rt;switch(n.tag){case 0:case 11:case 15:ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ar(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Rt=o;else e:for(n=e;Rt!==null;){o=Rt;var r=o.sibling,s=o.return;if(Yf(o),o===n){Rt=null;break e}if(r!==null){r.return=s,Rt=r;break e}Rt=s}}}var Mv={getCacheForType:function(e){var t=Ut(Tt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ut(Tt).controller.signal}},_v=typeof WeakMap=="function"?WeakMap:Map,Pe=0,dt=null,Ye=null,Ke=0,nt=0,on=null,ha=!1,Bo=!1,Ii=!1,Jn=0,wt=0,va=0,Fa=0,Ji=0,rn=0,No=0,kr=null,Jt=null,Wi=!1,zl=0,Wf=0,Ol=1/0,Rl=null,ga=null,zt=0,xa=null,Ao=null,Wn=0,Pi=0,ec=null,Pf=null,wr=0,tc=null;function ln(){return(Pe&2)!==0&&Ke!==0?Ke&-Ke:B.T!==null?sc():mu()}function ep(){if(rn===0)if((Ke&536870912)===0||Ze){var e=Pt;Pt<<=1,(Pt&3932160)===0&&(Pt=262144),rn=e}else rn=536870912;return e=nn.current,e!==null&&(e.flags|=32),rn}function Wt(e,t,n){(e===dt&&(nt===2||nt===9)||e.cancelPendingCommit!==null)&&(Eo(e,0),ba(e,Ke,rn,!1)),Vo(e,n),((Pe&2)===0||e!==dt)&&(e===dt&&((Pe&2)===0&&(Fa|=n),wt===4&&ba(e,Ke,rn,!1)),zn(e))}function tp(e,t,n){if((Pe&6)!==0)throw Error(c(327));var o=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Aa(e,t),r=o?Hv(e,t):ac(e,t,!0),s=o;do{if(r===0){Bo&&!o&&ba(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Uv(n)){r=ac(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;r=kr;var k=m.current.memoizedState.isDehydrated;if(k&&(Eo(m,d).flags|=256),d=ac(m,d,!1),d!==2){if(Ii&&!k){m.errorRecoveryDisabledLanes|=s,Fa|=s,r=4;break e}s=Jt,Jt=r,s!==null&&(Jt===null?Jt=s:Jt.push.apply(Jt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){Eo(e,0),ba(e,t,0,!0);break}e:{switch(o=e,s=r,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ba(o,t,rn,!ha);break e;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=zl+300-ze(),10<r)){if(ba(o,t,rn,!ha),Wa(o,0,!0)!==0)break e;Wn=t,o.timeoutHandle=zp(np.bind(null,o,n,Jt,Rl,Wi,t,rn,Fa,No,ha,s,"Throttled",-0,0),r);break e}np(o,n,Jt,Rl,Wi,t,rn,Fa,No,ha,s,null,-0,0)}}break}while(!0);zn(e)}function np(e,t,n,o,r,s,d,m,k,O,G,F,M,U){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Un},Ff(t,s,F);var be=(s&62914560)===s?zl-ze():(s&4194048)===s?Wf-ze():0;if(be=kg(F,be),be!==null){Wn=s,e.cancelPendingCommit=be(up.bind(null,e,t,s,n,o,r,d,m,k,G,F,null,M,U)),ba(e,s,d,!O);return}}up(e,t,s,n,o,r,d,m,k)}function Uv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var r=n[o],s=r.getSnapshot;r=r.value;try{if(!en(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ba(e,t,n,o){t&=~Ji,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var r=t;0<r;){var s=31-Et(r),d=1<<s;o[s]=-1,r&=~d}n!==0&&du(e,n,t)}function Ml(){return(Pe&6)===0?(jr(0),!1):!0}function nc(){if(Ye!==null){if(nt===0)var e=Ye.return;else e=Ye,Yn=Ha=null,xi(e),ko=null,rr=0,e=Ye;for(;e!==null;)Of(e.alternate,e),e=e.return;Ye=null}}function Eo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ag(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Wn=0,nc(),dt=e,Ye=n=Hn(e.current,null),Ke=t,nt=0,on=null,ha=!1,Bo=Aa(e,t),Ii=!1,No=rn=Ji=Fa=va=wt=0,Jt=kr=null,Wi=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var r=31-Et(o),s=1<<r;t|=e[r],o&=~s}return Jn=t,nl(),n}function ap(e,t){Me=null,B.H=pr,t===yo||t===ul?(t=xd(),nt=3):t===li?(t=xd(),nt=4):nt=t===Ri?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,on=t,Ye===null&&(wt=1,Sl(e,fn(t,e.current)))}function op(){var e=nn.current;return e===null?!0:(Ke&4194048)===Ke?vn===null:(Ke&62914560)===Ke||(Ke&536870912)!==0?e===vn:!1}function rp(){var e=B.H;return B.H=pr,e===null?pr:e}function lp(){var e=B.A;return B.A=Mv,e}function _l(){wt=4,ha||(Ke&4194048)!==Ke&&nn.current!==null||(Bo=!0),(va&134217727)===0&&(Fa&134217727)===0||dt===null||ba(dt,Ke,rn,!1)}function ac(e,t,n){var o=Pe;Pe|=2;var r=rp(),s=lp();(dt!==e||Ke!==t)&&(Rl=null,Eo(e,t)),t=!1;var d=wt;e:do try{if(nt!==0&&Ye!==null){var m=Ye,k=on;switch(nt){case 8:nc(),d=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(t=!0);var O=nt;if(nt=0,on=null,zo(e,m,k,O),n&&Bo){d=0;break e}break;default:O=nt,nt=0,on=null,zo(e,m,k,O)}}Lv(),d=wt;break}catch(G){ap(e,G)}while(!0);return t&&e.shellSuspendCounter++,Yn=Ha=null,Pe=o,B.H=r,B.A=s,Ye===null&&(dt=null,Ke=0,nl()),d}function Lv(){for(;Ye!==null;)sp(Ye)}function Hv(e,t){var n=Pe;Pe|=2;var o=rp(),r=lp();dt!==e||Ke!==t?(Rl=null,Ol=ze()+500,Eo(e,t)):Bo=Aa(e,t);e:do try{if(nt!==0&&Ye!==null){t=Ye;var s=on;t:switch(nt){case 1:nt=0,on=null,zo(e,t,s,1);break;case 2:case 9:if(vd(s)){nt=0,on=null,ip(t);break}t=function(){nt!==2&&nt!==9||dt!==e||(nt=7),zn(e)},s.then(t,t);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:vd(s)?(nt=0,on=null,ip(t)):(nt=0,on=null,zo(e,t,s,7));break;case 5:var d=null;switch(Ye.tag){case 26:d=Ye.memoizedState;case 5:case 27:var m=Ye;if(d?Zp(d):m.stateNode.complete){nt=0,on=null;var k=m.sibling;if(k!==null)Ye=k;else{var O=m.return;O!==null?(Ye=O,Ul(O)):Ye=null}break t}}nt=0,on=null,zo(e,t,s,5);break;case 6:nt=0,on=null,zo(e,t,s,6);break;case 8:nc(),wt=6;break e;default:throw Error(c(462))}}Gv();break}catch(G){ap(e,G)}while(!0);return Yn=Ha=null,B.H=o,B.A=r,Pe=n,Ye!==null?0:(dt=null,Ke=0,nl(),wt)}function Gv(){for(;Ye!==null&&!We();)sp(Ye)}function sp(e){var t=Ef(e.alternate,e,Jn);e.memoizedProps=e.pendingProps,t===null?Ul(e):Ye=t}function ip(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Tf(n,t,t.pendingProps,t.type,void 0,Ke);break;case 11:t=Tf(n,t,t.pendingProps,t.type.render,t.ref,Ke);break;case 5:xi(t);default:Of(n,t),t=Ye=rd(t,Jn),t=Ef(n,t,Jn)}e.memoizedProps=e.pendingProps,t===null?Ul(e):Ye=t}function zo(e,t,n,o){Yn=Ha=null,xi(t),ko=null,rr=0;var r=t.return;try{if(Bv(e,r,t,n,Ke)){wt=1,Sl(e,fn(n,e.current)),Ye=null;return}}catch(s){if(r!==null)throw Ye=r,s;wt=1,Sl(e,fn(n,e.current)),Ye=null;return}t.flags&32768?(Ze||o===1?e=!0:Bo||(Ke&536870912)!==0?e=!1:(ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=nn.current,o!==null&&o.tag===13&&(o.flags|=16384))),cp(t,e)):Ul(t)}function Ul(e){var t=e;do{if((t.flags&32768)!==0){cp(t,ha);return}e=t.return;var n=Ev(t.alternate,t,Jn);if(n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);wt===0&&(wt=5)}function cp(e,t){do{var n=zv(e.alternate,e);if(n!==null){n.flags&=32767,Ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=n}while(e!==null);wt=6,Ye=null}function up(e,t,n,o,r,s,d,m,k){e.cancelPendingCommit=null;do Ll();while(zt!==0);if((Pe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Ks,bh(e,n,s,d,m,k),e===dt&&(Ye=dt=null,Ke=0),Ao=t,xa=e,Wn=n,Pi=s,ec=r,Pf=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xv(ut,function(){return hp(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,r=q.p,q.p=2,d=Pe,Pe|=4;try{Ov(e,t,n)}finally{Pe=d,q.p=r,B.T=o}}zt=1,dp(),fp(),pp()}}function dp(){if(zt===1){zt=0;var e=xa,t=Ao,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var o=q.p;q.p=2;var r=Pe;Pe|=4;try{Kf(t,e);var s=hc,d=Iu(e.containerInfo),m=s.focusedElem,k=s.selectionRange;if(d!==m&&m&&m.ownerDocument&&$u(m.ownerDocument.documentElement,m)){if(k!==null&&Gs(m)){var O=k.start,G=k.end;if(G===void 0&&(G=O),"selectionStart"in m)m.selectionStart=O,m.selectionEnd=Math.min(G,m.value.length);else{var F=m.ownerDocument||document,M=F&&F.defaultView||window;if(M.getSelection){var U=M.getSelection(),be=m.textContent.length,De=Math.min(k.start,be),it=k.end===void 0?De:Math.min(k.end,be);!U.extend&&De>it&&(d=it,it=De,De=d);var A=Fu(m,De),S=Fu(m,it);if(A&&S&&(U.rangeCount!==1||U.anchorNode!==A.node||U.anchorOffset!==A.offset||U.focusNode!==S.node||U.focusOffset!==S.offset)){var z=F.createRange();z.setStart(A.node,A.offset),U.removeAllRanges(),De>it?(U.addRange(z),U.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),U.addRange(z))}}}}for(F=[],U=m;U=U.parentNode;)U.nodeType===1&&F.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<F.length;m++){var K=F[m];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Il=!!mc,hc=mc=null}finally{Pe=r,q.p=o,B.T=n}}e.current=t,zt=2}}function fp(){if(zt===2){zt=0;var e=xa,t=Ao,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var o=q.p;q.p=2;var r=Pe;Pe|=4;try{Gf(e,t.alternate,t)}finally{Pe=r,q.p=o,B.T=n}}zt=3}}function pp(){if(zt===4||zt===3){zt=0,ke();var e=xa,t=Ao,n=Wn,o=Pf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?zt=5:(zt=0,Ao=xa=null,mp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ga=null),ks(n),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(wn,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=B.T,r=q.p,q.p=2,B.T=null;try{for(var s=e.onRecoverableError,d=0;d<o.length;d++){var m=o[d];s(m.value,{componentStack:m.stack})}}finally{B.T=t,q.p=r}}(Wn&3)!==0&&Ll(),zn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===tc?wr++:(wr=0,tc=e):wr=0,jr(0)}}function mp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ar(t)))}function Ll(){return dp(),fp(),pp(),hp()}function hp(){if(zt!==5)return!1;var e=xa,t=Pi;Pi=0;var n=ks(Wn),o=B.T,r=q.p;try{q.p=32>n?32:n,B.T=null,n=ec,ec=null;var s=xa,d=Wn;if(zt=0,Ao=xa=null,Wn=0,(Pe&6)!==0)throw Error(c(331));var m=Pe;if(Pe|=4,If(s.current),Zf(s,s.current,d,n),Pe=m,jr(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(wn,s)}catch{}return!0}finally{q.p=r,B.T=o,mp(e,t)}}function vp(e,t,n){t=fn(n,t),t=Oi(e.stateNode,t,2),e=da(e,t,2),e!==null&&(Vo(e,2),zn(e))}function at(e,t,n){if(e.tag===3)vp(e,e,n);else for(;t!==null;){if(t.tag===3){vp(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ga===null||!ga.has(o))){e=fn(n,e),n=gf(2),o=da(t,n,2),o!==null&&(xf(n,o,t,e),Vo(o,2),zn(o));break}}t=t.return}}function oc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new _v;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(Ii=!0,r.add(n),e=Yv.bind(null,e,t,n),t.then(e,e))}function Yv(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,dt===e&&(Ke&n)===n&&(wt===4||wt===3&&(Ke&62914560)===Ke&&300>ze()-zl?(Pe&2)===0&&Eo(e,0):Ji|=n,No===Ke&&(No=0)),zn(e)}function gp(e,t){t===0&&(t=Ea()),e=_a(e,t),e!==null&&(Vo(e,t),zn(e))}function qv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gp(e,n)}function Vv(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(c(314))}o!==null&&o.delete(t),gp(e,n)}function Xv(e,t){return xe(e,t)}var Hl=null,Oo=null,rc=!1,Gl=!1,lc=!1,ya=0;function zn(e){e!==Oo&&e.next===null&&(Oo===null?Hl=Oo=e:Oo=Oo.next=e),Gl=!0,rc||(rc=!0,Qv())}function jr(e,t){if(!lc&&Gl){lc=!0;do for(var n=!1,o=Hl;o!==null;){if(e!==0){var r=o.pendingLanes;if(r===0)var s=0;else{var d=o.suspendedLanes,m=o.pingedLanes;s=(1<<31-Et(42|e)+1)-1,s&=r&~(d&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,kp(o,s))}else s=Ke,s=Wa(o,o===dt?s:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(s&3)===0||Aa(o,s)||(n=!0,kp(o,s));o=o.next}while(n);lc=!1}}function Kv(){xp()}function xp(){Gl=rc=!1;var e=0;ya!==0&&ng()&&(e=ya);for(var t=ze(),n=null,o=Hl;o!==null;){var r=o.next,s=bp(o,t);s===0?(o.next=null,n===null?Hl=r:n.next=r,r===null&&(Oo=n)):(n=o,(e!==0||(s&3)!==0)&&(Gl=!0)),o=r}zt!==0&&zt!==5||jr(e),ya!==0&&(ya=0)}function bp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Et(s),m=1<<d,k=r[d];k===-1?((m&n)===0||(m&o)!==0)&&(r[d]=xs(m,t)):k<=t&&(e.expiredLanes|=m),s&=~m}if(t=dt,n=Ke,n=Wa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(nt===2||nt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Aa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&Ae(o),ks(n)){case 2:case 8:n=rt;break;case 32:n=ut;break;case 268435456:n=Ge;break;default:n=ut}return o=yp.bind(null,e),n=xe(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function yp(e,t){if(zt!==0&&zt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var o=Ke;return o=Wa(e,e===dt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(tp(e,o,t),bp(e,ze()),e.callbackNode!=null&&e.callbackNode===n?yp.bind(null,e):null)}function kp(e,t){if(Ll())return null;tp(e,t,!0)}function Qv(){og(function(){(Pe&6)!==0?xe(tt,Kv):xp()})}function sc(){if(ya===0){var e=xo;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),ya=e}return ya}function wp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fr(""+e)}function jp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Zv(e,t,n,o,r){if(t==="submit"&&n&&n.stateNode===r){var s=wp((r[Qt]||null).action),d=o.submitter;d&&(t=(t=d[Qt]||null)?wp(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var m=new Wr("action","action",null,o,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ya!==0){var k=d?jp(r,d):new FormData(r);Ci(n,{pending:!0,data:k,method:r.method,action:s},null,k)}}else typeof s=="function"&&(m.preventDefault(),k=d?jp(r,d):new FormData(r),Ci(n,{pending:!0,data:k,method:r.method,action:s},s,k))},currentTarget:r}]})}}for(var ic=0;ic<Xs.length;ic++){var cc=Xs[ic],Fv=cc.toLowerCase(),$v=cc[0].toUpperCase()+cc.slice(1);Sn(Fv,"on"+$v)}Sn(Pu,"onAnimationEnd"),Sn(ed,"onAnimationIteration"),Sn(td,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(dv,"onTransitionRun"),Sn(fv,"onTransitionStart"),Sn(pv,"onTransitionCancel"),Sn(nd,"onTransitionEnd"),ao("onMouseEnter",["mouseout","mouseover"]),ao("onMouseLeave",["mouseout","mouseover"]),ao("onPointerEnter",["pointerout","pointerover"]),ao("onPointerLeave",["pointerout","pointerover"]),za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),za("onBeforeInput",["compositionend","keypress","textInput","paste"]),za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sr));function Sp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var d=o.length-1;0<=d;d--){var m=o[d],k=m.instance,O=m.currentTarget;if(m=m.listener,k!==s&&r.isPropagationStopped())break e;s=m,r.currentTarget=O;try{s(r)}catch(G){tl(G)}r.currentTarget=null,s=k}else for(d=0;d<o.length;d++){if(m=o[d],k=m.instance,O=m.currentTarget,m=m.listener,k!==s&&r.isPropagationStopped())break e;s=m,r.currentTarget=O;try{s(r)}catch(G){tl(G)}r.currentTarget=null,s=k}}}}function qe(e,t){var n=t[ws];n===void 0&&(n=t[ws]=new Set);var o=e+"__bubble";n.has(o)||(Tp(t,e,2,!1),n.add(o))}function uc(e,t,n){var o=0;t&&(o|=4),Tp(n,e,o,t)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function dc(e){if(!e[Yl]){e[Yl]=!0,gu.forEach(function(n){n!=="selectionchange"&&(Iv.has(n)||uc(n,!1,e),uc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yl]||(t[Yl]=!0,uc("selectionchange",!1,t))}}function Tp(e,t,n,o){switch(em(t)){case 2:var r=Sg;break;case 8:r=Tg;break;default:r=Dc}n=r.bind(null,t,n,e),r=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function fc(e,t,n,o,r){var s=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var m=o.stateNode.containerInfo;if(m===r)break;if(d===4)for(d=o.return;d!==null;){var k=d.tag;if((k===3||k===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;m!==null;){if(d=eo(m),d===null)return;if(k=d.tag,k===5||k===6||k===26||k===27){o=s=d;continue e}m=m.parentNode}}o=o.return}Nu(function(){var O=s,G=Ns(n),F=[];e:{var M=ad.get(e);if(M!==void 0){var U=Wr,be=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":U=Vh;break;case"focusin":be="focus",U=Ms;break;case"focusout":be="blur",U=Ms;break;case"beforeblur":case"afterblur":U=Ms;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Qh;break;case Pu:case ed:case td:U=Rh;break;case nd:U=Fh;break;case"scroll":case"scrollend":U=Nh;break;case"wheel":U=Ih;break;case"copy":case"cut":case"paste":U=_h;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Ru;break;case"toggle":case"beforetoggle":U=Wh}var De=(t&4)!==0,it=!De&&(e==="scroll"||e==="scrollend"),A=De?M!==null?M+"Capture":null:M;De=[];for(var S=O,z;S!==null;){var K=S;if(z=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||z===null||A===null||(K=Qo(S,A),K!=null&&De.push(Tr(S,K,z))),it)break;S=S.return}0<De.length&&(M=new U(M,be,null,n,G),F.push({event:M,listeners:De}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",M&&n!==Bs&&(be=n.relatedTarget||n.fromElement)&&(eo(be)||be[Pa]))break e;if((U||M)&&(M=G.window===G?G:(M=G.ownerDocument)?M.defaultView||M.parentWindow:window,U?(be=n.relatedTarget||n.toElement,U=O,be=be?eo(be):null,be!==null&&(it=p(be),De=be.tag,be!==it||De!==5&&De!==27&&De!==6)&&(be=null)):(U=null,be=O),U!==be)){if(De=zu,K="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(De=Ru,K="onPointerLeave",A="onPointerEnter",S="pointer"),it=U==null?M:Ko(U),z=be==null?M:Ko(be),M=new De(K,S+"leave",U,n,G),M.target=it,M.relatedTarget=z,K=null,eo(G)===O&&(De=new De(A,S+"enter",be,n,G),De.target=z,De.relatedTarget=it,K=De),it=K,U&&be)t:{for(De=Jv,A=U,S=be,z=0,K=A;K;K=De(K))z++;K=0;for(var Se=S;Se;Se=De(Se))K++;for(;0<z-K;)A=De(A),z--;for(;0<K-z;)S=De(S),K--;for(;z--;){if(A===S||S!==null&&A===S.alternate){De=A;break t}A=De(A),S=De(S)}De=null}else De=null;U!==null&&Dp(F,M,U,De,!1),be!==null&&it!==null&&Dp(F,it,be,De,!0)}}e:{if(M=O?Ko(O):window,U=M.nodeName&&M.nodeName.toLowerCase(),U==="select"||U==="input"&&M.type==="file")var $e=qu;else if(Gu(M))if(Vu)$e=iv;else{$e=lv;var we=rv}else U=M.nodeName,!U||U.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?O&&Cs(O.elementType)&&($e=qu):$e=sv;if($e&&($e=$e(e,O))){Yu(F,$e,n,G);break e}we&&we(e,M,O),e==="focusout"&&O&&M.type==="number"&&O.memoizedProps.value!=null&&Ds(M,"number",M.value)}switch(we=O?Ko(O):window,e){case"focusin":(Gu(we)||we.contentEditable==="true")&&(co=we,Ys=O,er=null);break;case"focusout":er=Ys=co=null;break;case"mousedown":qs=!0;break;case"contextmenu":case"mouseup":case"dragend":qs=!1,Ju(F,n,G);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Ju(F,n,G)}var Ue;if(Us)e:{switch(e){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else io?Lu(e,n)&&(Qe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Qe="onCompositionStart");Qe&&(Mu&&n.locale!=="ko"&&(io||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&io&&(Ue=Au()):(oa=G,zs="value"in oa?oa.value:oa.textContent,io=!0)),we=ql(O,Qe),0<we.length&&(Qe=new Ou(Qe,e,null,n,G),F.push({event:Qe,listeners:we}),Ue?Qe.data=Ue:(Ue=Hu(n),Ue!==null&&(Qe.data=Ue)))),(Ue=ev?tv(e,n):nv(e,n))&&(Qe=ql(O,"onBeforeInput"),0<Qe.length&&(we=new Ou("onBeforeInput","beforeinput",null,n,G),F.push({event:we,listeners:Qe}),we.data=Ue)),Zv(F,e,O,n,G)}Sp(F,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ql(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Qo(e,n),r!=null&&o.unshift(Tr(e,r,s)),r=Qo(e,t),r!=null&&o.push(Tr(e,r,s))),e.tag===3)return o;e=e.return}return[]}function Jv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dp(e,t,n,o,r){for(var s=t._reactName,d=[];n!==null&&n!==o;){var m=n,k=m.alternate,O=m.stateNode;if(m=m.tag,k!==null&&k===o)break;m!==5&&m!==26&&m!==27||O===null||(k=O,r?(O=Qo(n,s),O!=null&&d.unshift(Tr(n,O,k))):r||(O=Qo(n,s),O!=null&&d.push(Tr(n,O,k)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Wv=/\r\n?/g,Pv=/\u0000|\uFFFD/g;function Cp(e){return(typeof e=="string"?e:""+e).replace(Wv,`
`).replace(Pv,"")}function Bp(e,t){return t=Cp(t),Cp(e)===t}function st(e,t,n,o,r,s){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ro(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ro(e,""+o);break;case"className":Qr(e,"class",o);break;case"tabIndex":Qr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qr(e,n,o);break;case"style":Cu(e,o,s);break;case"data":if(t!=="object"){Qr(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=Fr(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&st(e,t,"name",r.name,r,null),st(e,t,"formEncType",r.formEncType,r,null),st(e,t,"formMethod",r.formMethod,r,null),st(e,t,"formTarget",r.formTarget,r,null)):(st(e,t,"encType",r.encType,r,null),st(e,t,"method",r.method,r,null),st(e,t,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=Fr(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=Un);break;case"onScroll":o!=null&&qe("scroll",e);break;case"onScrollEnd":o!=null&&qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=Fr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":qe("beforetoggle",e),qe("toggle",e),Kr(e,"popover",o);break;case"xlinkActuate":_n(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":_n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":_n(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":_n(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":_n(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":_n(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":_n(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":_n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":_n(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Kr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ch.get(n)||n,Kr(e,n,o))}}function pc(e,t,n,o,r,s){switch(n){case"style":Cu(e,o,s);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof o=="string"?ro(e,o):(typeof o=="number"||typeof o=="bigint")&&ro(e,""+o);break;case"onScroll":o!=null&&qe("scroll",e);break;case"onScrollEnd":o!=null&&qe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[Qt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof o=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,r);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):Kr(e,n,o)}}}function Ht(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",e),qe("load",e);var o=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:st(e,t,s,d,n,null)}}r&&st(e,t,"srcSet",n.srcSet,n,null),o&&st(e,t,"src",n.src,n,null);return;case"input":qe("invalid",e);var m=s=d=r=null,k=null,O=null;for(o in n)if(n.hasOwnProperty(o)){var G=n[o];if(G!=null)switch(o){case"name":r=G;break;case"type":d=G;break;case"checked":k=G;break;case"defaultChecked":O=G;break;case"value":s=G;break;case"defaultValue":m=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(c(137,t));break;default:st(e,t,o,G,n,null)}}ju(e,s,m,k,O,d,r,!1);return;case"select":qe("invalid",e),o=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(m=n[r],m!=null))switch(r){case"value":s=m;break;case"defaultValue":d=m;break;case"multiple":o=m;default:st(e,t,r,m,n,null)}t=s,n=d,e.multiple=!!o,t!=null?oo(e,!!o,t,!1):n!=null&&oo(e,!!o,n,!0);return;case"textarea":qe("invalid",e),s=r=o=null;for(d in n)if(n.hasOwnProperty(d)&&(m=n[d],m!=null))switch(d){case"value":o=m;break;case"defaultValue":r=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:st(e,t,d,m,n,null)}Tu(e,o,r,s);return;case"option":for(k in n)n.hasOwnProperty(k)&&(o=n[k],o!=null)&&(k==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":st(e,t,k,o,n,null));return;case"dialog":qe("beforetoggle",e),qe("toggle",e),qe("cancel",e),qe("close",e);break;case"iframe":case"object":qe("load",e);break;case"video":case"audio":for(o=0;o<Sr.length;o++)qe(Sr[o],e);break;case"image":qe("error",e),qe("load",e);break;case"details":qe("toggle",e);break;case"embed":case"source":case"link":qe("error",e),qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(o=n[O],o!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:st(e,t,O,o,n,null)}return;default:if(Cs(t)){for(G in n)n.hasOwnProperty(G)&&(o=n[G],o!==void 0&&pc(e,t,G,o,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(o=n[m],o!=null&&st(e,t,m,o,n,null))}function eg(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,m=null,k=null,O=null,G=null;for(U in n){var F=n[U];if(n.hasOwnProperty(U)&&F!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":k=F;default:o.hasOwnProperty(U)||st(e,t,U,null,o,F)}}for(var M in o){var U=o[M];if(F=n[M],o.hasOwnProperty(M)&&(U!=null||F!=null))switch(M){case"type":s=U;break;case"name":r=U;break;case"checked":O=U;break;case"defaultChecked":G=U;break;case"value":d=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:U!==F&&st(e,t,M,U,o,F)}}Ts(e,d,m,k,O,G,s,r);return;case"select":U=d=m=M=null;for(s in n)if(k=n[s],n.hasOwnProperty(s)&&k!=null)switch(s){case"value":break;case"multiple":U=k;default:o.hasOwnProperty(s)||st(e,t,s,null,o,k)}for(r in o)if(s=o[r],k=n[r],o.hasOwnProperty(r)&&(s!=null||k!=null))switch(r){case"value":M=s;break;case"defaultValue":m=s;break;case"multiple":d=s;default:s!==k&&st(e,t,r,s,o,k)}t=m,n=d,o=U,M!=null?oo(e,!!n,M,!1):!!o!=!!n&&(t!=null?oo(e,!!n,t,!0):oo(e,!!n,n?[]:"",!1));return;case"textarea":U=M=null;for(m in n)if(r=n[m],n.hasOwnProperty(m)&&r!=null&&!o.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:st(e,t,m,null,o,r)}for(d in o)if(r=o[d],s=n[d],o.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":M=r;break;case"defaultValue":U=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==s&&st(e,t,d,r,o,s)}Su(e,M,U);return;case"option":for(var be in n)M=n[be],n.hasOwnProperty(be)&&M!=null&&!o.hasOwnProperty(be)&&(be==="selected"?e.selected=!1:st(e,t,be,null,o,M));for(k in o)M=o[k],U=n[k],o.hasOwnProperty(k)&&M!==U&&(M!=null||U!=null)&&(k==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":st(e,t,k,M,o,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in n)M=n[De],n.hasOwnProperty(De)&&M!=null&&!o.hasOwnProperty(De)&&st(e,t,De,null,o,M);for(O in o)if(M=o[O],U=n[O],o.hasOwnProperty(O)&&M!==U&&(M!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:st(e,t,O,M,o,U)}return;default:if(Cs(t)){for(var it in n)M=n[it],n.hasOwnProperty(it)&&M!==void 0&&!o.hasOwnProperty(it)&&pc(e,t,it,void 0,o,M);for(G in o)M=o[G],U=n[G],!o.hasOwnProperty(G)||M===U||M===void 0&&U===void 0||pc(e,t,G,M,o,U);return}}for(var A in n)M=n[A],n.hasOwnProperty(A)&&M!=null&&!o.hasOwnProperty(A)&&st(e,t,A,null,o,M);for(F in o)M=o[F],U=n[F],!o.hasOwnProperty(F)||M===U||M==null&&U==null||st(e,t,F,M,o,U)}function Np(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var r=n[o],s=r.transferSize,d=r.initiatorType,m=r.duration;if(s&&m&&Np(d)){for(d=0,m=r.responseEnd,o+=1;o<n.length;o++){var k=n[o],O=k.startTime;if(O>m)break;var G=k.transferSize,F=k.initiatorType;G&&Np(F)&&(k=k.responseEnd,d+=G*(k<m?1:(m-O)/(k-O)))}if(--o,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mc=null,hc=null;function Vl(e){return e.nodeType===9?e:e.ownerDocument}function Ap(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ep(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gc=null;function ng(){var e=window.event;return e&&e.type==="popstate"?e===gc?!1:(gc=e,!0):(gc=null,!1)}var zp=typeof setTimeout=="function"?setTimeout:void 0,ag=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(e){return Op.resolve(null).then(e).catch(rg)}:zp;function rg(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Rp(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(o===0){e.removeChild(r),Uo(t);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")Dr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Dr(n);for(var s=n.firstChild;s;){var d=s.nextSibling,m=s.nodeName;s[Xo]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&Dr(e.ownerDocument.body);n=r}while(n);Uo(t)}function Mp(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=o}while(n)}function xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xc(n),js(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function lg(e,t,n,o){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Xo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=gn(e.nextSibling),e===null)break}return null}function sg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gn(e.nextSibling),e===null))return null;return e}function _p(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gn(e.nextSibling),e===null))return null;return e}function bc(e){return e.data==="$?"||e.data==="$~"}function yc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ig(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var kc=null;function Up(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return gn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Lp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Hp(e,t,n){switch(t=Vl(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Dr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);js(e)}var xn=new Map,Gp=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pn=q.d;q.d={f:cg,r:ug,D:dg,C:fg,L:pg,m:mg,X:vg,S:hg,M:gg};function cg(){var e=Pn.f(),t=Ml();return e||t}function ug(e){var t=to(e);t!==null&&t.tag===5&&t.type==="form"?nf(t):Pn.r(e)}var Ro=typeof document>"u"?null:document;function Yp(e,t,n){var o=Ro;if(o&&typeof t=="string"&&t){var r=un(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Gp.has(r)||(Gp.add(r),e={rel:e,crossOrigin:n,href:t},o.querySelector(r)===null&&(t=o.createElement("link"),Ht(t,"link",e),Ot(t),o.head.appendChild(t)))}}function dg(e){Pn.D(e),Yp("dns-prefetch",e,null)}function fg(e,t){Pn.C(e,t),Yp("preconnect",e,t)}function pg(e,t,n){Pn.L(e,t,n);var o=Ro;if(o&&e&&t){var r='link[rel="preload"][as="'+un(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+un(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+un(n.imageSizes)+'"]')):r+='[href="'+un(e)+'"]';var s=r;switch(t){case"style":s=Mo(e);break;case"script":s=_o(e)}xn.has(s)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),xn.set(s,e),o.querySelector(r)!==null||t==="style"&&o.querySelector(Cr(s))||t==="script"&&o.querySelector(Br(s))||(t=o.createElement("link"),Ht(t,"link",e),Ot(t),o.head.appendChild(t)))}}function mg(e,t){Pn.m(e,t);var n=Ro;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+un(o)+'"][href="'+un(e)+'"]',s=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=_o(e)}if(!xn.has(s)&&(e=y({rel:"modulepreload",href:e},t),xn.set(s,e),n.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Br(s)))return}o=n.createElement("link"),Ht(o,"link",e),Ot(o),n.head.appendChild(o)}}}function hg(e,t,n){Pn.S(e,t,n);var o=Ro;if(o&&e){var r=no(o).hoistableStyles,s=Mo(e);t=t||"default";var d=r.get(s);if(!d){var m={loading:0,preload:null};if(d=o.querySelector(Cr(s)))m.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=xn.get(s))&&wc(e,n);var k=d=o.createElement("link");Ot(k),Ht(k,"link",e),k._p=new Promise(function(O,G){k.onload=O,k.onerror=G}),k.addEventListener("load",function(){m.loading|=1}),k.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Kl(d,t,o)}d={type:"stylesheet",instance:d,count:1,state:m},r.set(s,d)}}}function vg(e,t){Pn.X(e,t);var n=Ro;if(n&&e){var o=no(n).hoistableScripts,r=_o(e),s=o.get(r);s||(s=n.querySelector(Br(r)),s||(e=y({src:e,async:!0},t),(t=xn.get(r))&&jc(e,t),s=n.createElement("script"),Ot(s),Ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},o.set(r,s))}}function gg(e,t){Pn.M(e,t);var n=Ro;if(n&&e){var o=no(n).hoistableScripts,r=_o(e),s=o.get(r);s||(s=n.querySelector(Br(r)),s||(e=y({src:e,async:!0,type:"module"},t),(t=xn.get(r))&&jc(e,t),s=n.createElement("script"),Ot(s),Ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},o.set(r,s))}}function qp(e,t,n,o){var r=(r=re.current)?Xl(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Mo(n.href),n=no(r).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Mo(n.href);var s=no(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(Cr(e)))&&!s._p&&(d.instance=s,d.state.loading=5),xn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xn.set(e,n),s||xg(r,e,n,d.state))),t&&o===null)throw Error(c(528,""));return d}if(t&&o!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_o(n),n=no(r).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Mo(e){return'href="'+un(e)+'"'}function Cr(e){return'link[rel="stylesheet"]['+e+"]"}function Vp(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function xg(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Ht(t,"link",n),Ot(t),e.head.appendChild(t))}function _o(e){return'[src="'+un(e)+'"]'}function Br(e){return"script[async]"+e}function Xp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+un(n.href)+'"]');if(o)return t.instance=o,Ot(o),o;var r=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ot(o),Ht(o,"style",r),Kl(o,n.precedence,e),t.instance=o;case"stylesheet":r=Mo(n.href);var s=e.querySelector(Cr(r));if(s)return t.state.loading|=4,t.instance=s,Ot(s),s;o=Vp(n),(r=xn.get(r))&&wc(o,r),s=(e.ownerDocument||e).createElement("link"),Ot(s);var d=s;return d._p=new Promise(function(m,k){d.onload=m,d.onerror=k}),Ht(s,"link",o),t.state.loading|=4,Kl(s,n.precedence,e),t.instance=s;case"script":return s=_o(n.src),(r=e.querySelector(Br(s)))?(t.instance=r,Ot(r),r):(o=n,(r=xn.get(s))&&(o=y({},n),jc(o,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ot(r),Ht(r,"link",o),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Kl(o,n.precedence,e));return t.instance}function Kl(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,s=r,d=0;d<o.length;d++){var m=o[d];if(m.dataset.precedence===t)s=m;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ql=null;function Kp(e,t,n){if(Ql===null){var o=new Map,r=Ql=new Map;r.set(n,o)}else r=Ql,o=r.get(n),o||(o=new Map,r.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Xo]||s[Mt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var m=o.get(d);m?m.push(s):o.set(d,[s])}}return o}function Qp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function bg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yg(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Mo(o.href),s=t.querySelector(Cr(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Ot(s);return}s=t.ownerDocument||t,o=Vp(o),(r=xn.get(r))&&wc(o,r),s=s.createElement("link"),Ot(s);var d=s;d._p=new Promise(function(m,k){d.onload=m,d.onerror=k}),Ht(s,"link",o),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Zl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Sc=0;function kg(e,t){return e.stylesheets&&e.count===0&&$l(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Sc===0&&(Sc=62500*tg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Sc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(r)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fl=null;function $l(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fl=new Map,t.forEach(wg,e),Fl=null,Zl.call(e))}function wg(e,t){if(!(t.state.loading&4)){var n=Fl.get(e);if(n)var o=n.get(null);else{n=new Map,Fl.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),o=d)}o&&n.set(null,o)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||o,s===o&&n.set(null,r),n.set(d,r),this.count++,o=Zl.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Nr={$$typeof:Q,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function jg(e,t,n,o,r,s,d,m,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.hiddenUpdates=bs(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Fp(e,t,n,o,r,s,d,m,k,O,G,F){return e=new jg(e,t,n,d,k,O,G,F,m),t=1,s===!0&&(t|=24),s=tn(3,null,null,t),e.current=s,s.stateNode=e,t=ai(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:o,isDehydrated:n,cache:t},si(s),e}function $p(e){return e?(e=po,e):po}function Ip(e,t,n,o,r,s){r=$p(r),o.context===null?o.context=r:o.pendingContext=r,o=ua(t),o.payload={element:n},s=s===void 0?null:s,s!==null&&(o.callback=s),n=da(e,o,t),n!==null&&(Wt(n,e,t),sr(n,e,t))}function Jp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tc(e,t){Jp(e,t),(e=e.alternate)&&Jp(e,t)}function Wp(e){if(e.tag===13||e.tag===31){var t=_a(e,67108864);t!==null&&Wt(t,e,67108864),Tc(e,67108864)}}function Pp(e){if(e.tag===13||e.tag===31){var t=ln();t=ys(t);var n=_a(e,t);n!==null&&Wt(n,e,t),Tc(e,t)}}var Il=!0;function Sg(e,t,n,o){var r=B.T;B.T=null;var s=q.p;try{q.p=2,Dc(e,t,n,o)}finally{q.p=s,B.T=r}}function Tg(e,t,n,o){var r=B.T;B.T=null;var s=q.p;try{q.p=8,Dc(e,t,n,o)}finally{q.p=s,B.T=r}}function Dc(e,t,n,o){if(Il){var r=Cc(o);if(r===null)fc(e,t,o,Jl,n),tm(e,o);else if(Cg(r,e,t,n,o))o.stopPropagation();else if(tm(e,o),t&4&&-1<Dg.indexOf(e)){for(;r!==null;){var s=to(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Bn(s.pendingLanes);if(d!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var k=1<<31-Et(d);m.entanglements[1]|=k,d&=~k}zn(s),(Pe&6)===0&&(Ol=ze()+500,jr(0))}}break;case 31:case 13:m=_a(s,2),m!==null&&Wt(m,s,2),Ml(),Tc(s,2)}if(s=Cc(o),s===null&&fc(e,t,o,Jl,n),s===r)break;r=s}r!==null&&o.stopPropagation()}else fc(e,t,o,null,n)}}function Cc(e){return e=Ns(e),Bc(e)}var Jl=null;function Bc(e){if(Jl=null,e=eo(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=w(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jl=e,null}function em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case tt:return 2;case rt:return 8;case ut:case Be:return 32;case Ge:return 268435456;default:return 32}default:return 32}}var Nc=!1,wa=null,ja=null,Sa=null,Ar=new Map,Er=new Map,Ta=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tm(e,t){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function zr(e,t,n,o,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[r]},t!==null&&(t=to(t),t!==null&&Wp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Cg(e,t,n,o,r){switch(t){case"focusin":return wa=zr(wa,e,t,n,o,r),!0;case"dragenter":return ja=zr(ja,e,t,n,o,r),!0;case"mouseover":return Sa=zr(Sa,e,t,n,o,r),!0;case"pointerover":var s=r.pointerId;return Ar.set(s,zr(Ar.get(s)||null,e,t,n,o,r)),!0;case"gotpointercapture":return s=r.pointerId,Er.set(s,zr(Er.get(s)||null,e,t,n,o,r)),!0}return!1}function nm(e){var t=eo(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,hu(e.priority,function(){Pp(n)});return}}else if(t===31){if(t=w(n),t!==null){e.blockedOn=t,hu(e.priority,function(){Pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cc(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Bs=o,n.target.dispatchEvent(o),Bs=null}else return t=to(n),t!==null&&Wp(t),e.blockedOn=n,!1;t.shift()}return!0}function am(e,t,n){Wl(e)&&n.delete(t)}function Bg(){Nc=!1,wa!==null&&Wl(wa)&&(wa=null),ja!==null&&Wl(ja)&&(ja=null),Sa!==null&&Wl(Sa)&&(Sa=null),Ar.forEach(am),Er.forEach(am)}function Pl(e,t){e.blockedOn===t&&(e.blockedOn=null,Nc||(Nc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Bg)))}var es=null;function om(e){es!==e&&(es=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){es===e&&(es=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],r=e[t+2];if(typeof o!="function"){if(Bc(o||n)===null)continue;break}var s=to(n);s!==null&&(e.splice(t,3),t-=3,Ci(s,{pending:!0,data:r,method:n.method,action:o},o,r))}}))}function Uo(e){function t(k){return Pl(k,e)}wa!==null&&Pl(wa,e),ja!==null&&Pl(ja,e),Sa!==null&&Pl(Sa,e),Ar.forEach(t),Er.forEach(t);for(var n=0;n<Ta.length;n++){var o=Ta[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ta.length&&(n=Ta[0],n.blockedOn===null);)nm(n),n.blockedOn===null&&Ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var r=n[o],s=n[o+1],d=r[Qt]||null;if(typeof s=="function")d||om(n);else if(d){var m=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[Qt]||null)m=d.formAction;else if(Bc(r)!==null)continue}else m=d.action;typeof m=="function"?n[o+1]=m:(n.splice(o,3),o-=3),om(n)}}}function rm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Ac(e){this._internalRoot=e}ts.prototype.render=Ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,o=ln();Ip(n,o,e,t,null,null)},ts.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ip(e.current,2,null,e,null,null),Ml(),t[Pa]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ta.length&&t!==0&&t<Ta[n].priority;n++);Ta.splice(n,0,e),n===0&&nm(e)}};var lm=i.version;if(lm!=="19.2.4")throw Error(c(527,lm,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var Ng={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{wn=ns.inject(Ng),At=ns}catch{}}return Rr.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,o="",r=pf,s=mf,d=hf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Fp(e,1,!1,null,null,n,o,null,r,s,d,rm),e[Pa]=t.current,dc(e),new Ac(t)},Rr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var o=!1,r="",s=pf,d=mf,m=hf,k=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(k=n.formState)),t=Fp(e,1,!0,t,n??null,o,r,k,s,d,m,rm),t.context=$p(null),n=t.current,o=ln(),o=ys(o),r=ua(o),r.callback=null,da(n,r,o),n=o,t.current.lanes=n,Vo(t,n),zn(t),e[Pa]=t.current,dc(e),new ts(t)},Rr.version="19.2.4",Rr}var vm;function Hg(){if(vm)return Oc.exports;vm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Oc.exports=Lg(),Oc.exports}var Gg=Hg();var gm="popstate";function xm(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function Yg(l={}){function i(c,f){let p=f.state?.masked,{pathname:g,search:w,hash:v}=p||c.location;return $c("",{pathname:g,search:w,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default",p?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function u(c,f){return typeof f=="string"?f:Gr(f)}return Vg(i,u,null,l)}function yt(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function Mn(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function qg(){return Math.random().toString(36).substring(2,10)}function bm(l,i){return{usr:l.state,key:l.key,idx:i,masked:l.unstable_mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function $c(l,i,u=null,c,f){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?Yo(i):i,state:u,key:i&&i.key||c||qg(),unstable_mask:f}}function Gr({pathname:l="/",search:i="",hash:u=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Yo(l){let i={};if(l){let u=l.indexOf("#");u>=0&&(i.hash=l.substring(u),l=l.substring(0,u));let c=l.indexOf("?");c>=0&&(i.search=l.substring(c),l=l.substring(0,c)),l&&(i.pathname=l)}return i}function Vg(l,i,u,c={}){let{window:f=document.defaultView,v5Compat:p=!1}=c,g=f.history,w="POP",v=null,b=j();b==null&&(b=0,g.replaceState({...g.state,idx:b},""));function j(){return(g.state||{idx:null}).idx}function y(){w="POP";let R=j(),H=R==null?null:R-b;b=R,v&&v({action:w,location:_.location,delta:H})}function D(R,H){w="PUSH";let P=xm(R)?R:$c(_.location,R,H);b=j()+1;let Q=bm(P,b),$=_.createHref(P.unstable_mask||P);try{g.pushState(Q,"",$)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;f.location.assign($)}p&&v&&v({action:w,location:_.location,delta:1})}function L(R,H){w="REPLACE";let P=xm(R)?R:$c(_.location,R,H);b=j();let Q=bm(P,b),$=_.createHref(P.unstable_mask||P);g.replaceState(Q,"",$),p&&v&&v({action:w,location:_.location,delta:0})}function C(R){return Xg(R)}let _={get action(){return w},get location(){return l(f,g)},listen(R){if(v)throw new Error("A history only accepts one active listener");return f.addEventListener(gm,y),v=R,()=>{f.removeEventListener(gm,y),v=null}},createHref(R){return i(f,R)},createURL:C,encodeLocation(R){let H=C(R);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:D,replace:L,go(R){return g.go(R)}};return _}function Xg(l,i=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),yt(u,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Gr(l);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function Hm(l,i,u="/"){return Kg(l,i,u,!1)}function Kg(l,i,u,c){let f=typeof i=="string"?Yo(i):i,p=ta(f.pathname||"/",u);if(p==null)return null;let g=Gm(l);Qg(g);let w=null;for(let v=0;w==null&&v<g.length;++v){let b=a0(p);w=t0(g[v],b,c)}return w}function Gm(l,i=[],u=[],c="",f=!1){let p=(g,w,v=f,b)=>{let j={relativePath:b===void 0?g.path||"":b,caseSensitive:g.caseSensitive===!0,childrenIndex:w,route:g};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(c)&&v)return;yt(j.relativePath.startsWith(c),`Absolute route path "${j.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(c.length)}let y=Rn([c,j.relativePath]),D=u.concat(j);g.children&&g.children.length>0&&(yt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Gm(g.children,i,D,y,v)),!(g.path==null&&!g.index)&&i.push({path:y,score:Pg(y,g.index),routesMeta:D})};return l.forEach((g,w)=>{if(g.path===""||!g.path?.includes("?"))p(g,w);else for(let v of Ym(g.path))p(g,w,!0,v)}),i}function Ym(l){let i=l.split("/");if(i.length===0)return[];let[u,...c]=i,f=u.endsWith("?"),p=u.replace(/\?$/,"");if(c.length===0)return f?[p,""]:[p];let g=Ym(c.join("/")),w=[];return w.push(...g.map(v=>v===""?p:[p,v].join("/"))),f&&w.push(...g),w.map(v=>l.startsWith("/")&&v===""?"/":v)}function Qg(l){l.sort((i,u)=>i.score!==u.score?u.score-i.score:e0(i.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Zg=/^:[\w-]+$/,Fg=3,$g=2,Ig=1,Jg=10,Wg=-2,ym=l=>l==="*";function Pg(l,i){let u=l.split("/"),c=u.length;return u.some(ym)&&(c+=Wg),i&&(c+=$g),u.filter(f=>!ym(f)).reduce((f,p)=>f+(Zg.test(p)?Fg:p===""?Ig:Jg),c)}function e0(l,i){return l.length===i.length&&l.slice(0,-1).every((c,f)=>c===i[f])?l[l.length-1]-i[i.length-1]:0}function t0(l,i,u=!1){let{routesMeta:c}=l,f={},p="/",g=[];for(let w=0;w<c.length;++w){let v=c[w],b=w===c.length-1,j=p==="/"?i:i.slice(p.length)||"/",y=fs({path:v.relativePath,caseSensitive:v.caseSensitive,end:b},j),D=v.route;if(!y&&b&&u&&!c[c.length-1].route.index&&(y=fs({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},j)),!y)return null;Object.assign(f,y.params),g.push({params:f,pathname:Rn([p,y.pathname]),pathnameBase:s0(Rn([p,y.pathnameBase])),route:D}),y.pathnameBase!=="/"&&(p=Rn([p,y.pathnameBase]))}return g}function fs(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,c]=n0(l.path,l.caseSensitive,l.end),f=i.match(u);if(!f)return null;let p=f[0],g=p.replace(/(.)\/+$/,"$1"),w=f.slice(1);return{params:c.reduce((b,{paramName:j,isOptional:y},D)=>{if(j==="*"){let C=w[D]||"";g=p.slice(0,p.length-C.length).replace(/(.)\/+$/,"$1")}const L=w[D];return y&&!L?b[j]=void 0:b[j]=(L||"").replace(/%2F/g,"/"),b},{}),pathname:p,pathnameBase:g,pattern:l}}function n0(l,i=!1,u=!0){Mn(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,w,v,b,j)=>{if(c.push({paramName:w,isOptional:v!=null}),v){let y=j.charAt(b+g.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),c]}function a0(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Mn(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function ta(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,c=l.charAt(u);return c&&c!=="/"?null:l.slice(u)||"/"}var o0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function r0(l,i="/"){let{pathname:u,search:c="",hash:f=""}=typeof l=="string"?Yo(l):l,p;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?p=km(u.substring(1),"/"):p=km(u,i)):p=i,{pathname:p,search:i0(c),hash:c0(f)}}function km(l,i){let u=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Uc(l,i,u,c){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function l0(l){return l.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function qm(l){let i=l0(l);return i.map((u,c)=>c===i.length-1?u.pathname:u.pathnameBase)}function eu(l,i,u,c=!1){let f;typeof l=="string"?f=Yo(l):(f={...l},yt(!f.pathname||!f.pathname.includes("?"),Uc("?","pathname","search",f)),yt(!f.pathname||!f.pathname.includes("#"),Uc("#","pathname","hash",f)),yt(!f.search||!f.search.includes("#"),Uc("#","search","hash",f)));let p=l===""||f.pathname==="",g=p?"/":f.pathname,w;if(g==null)w=u;else{let y=i.length-1;if(!c&&g.startsWith("..")){let D=g.split("/");for(;D[0]==="..";)D.shift(),y-=1;f.pathname=D.join("/")}w=y>=0?i[y]:"/"}let v=r0(f,w),b=g&&g!=="/"&&g.endsWith("/"),j=(p||g===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(b||j)&&(v.pathname+="/"),v}var Rn=l=>l.join("/").replace(/\/\/+/g,"/"),s0=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),i0=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,c0=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,u0=class{constructor(l,i,u,c=!1){this.status=l,this.statusText=i||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function d0(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function f0(l){return l.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xm(l,i){let u=l;if(typeof u!="string"||!o0.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,f=!1;if(Vm)try{let p=new URL(window.location.href),g=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=ta(g.pathname,i);g.origin===p.origin&&w!=null?u=w+g.search+g.hash:f=!0}catch{Mn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Km=["POST","PUT","PATCH","DELETE"];new Set(Km);var p0=["GET",...Km];new Set(p0);var qo=h.createContext(null);qo.displayName="DataRouter";var ms=h.createContext(null);ms.displayName="DataRouterState";var m0=h.createContext(!1),Qm=h.createContext({isTransitioning:!1});Qm.displayName="ViewTransition";var h0=h.createContext(new Map);h0.displayName="Fetchers";var v0=h.createContext(null);v0.displayName="Await";var yn=h.createContext(null);yn.displayName="Navigation";var Yr=h.createContext(null);Yr.displayName="Location";var na=h.createContext({outlet:null,matches:[],isDataRoute:!1});na.displayName="Route";var tu=h.createContext(null);tu.displayName="RouteError";var Zm="REACT_ROUTER_ERROR",g0="REDIRECT",x0="ROUTE_ERROR_RESPONSE";function b0(l){if(l.startsWith(`${Zm}:${g0}:{`))try{let i=JSON.parse(l.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function y0(l){if(l.startsWith(`${Zm}:${x0}:{`))try{let i=JSON.parse(l.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new u0(i.status,i.statusText,i.data)}catch{}}function k0(l,{relative:i}={}){yt(qr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=h.useContext(yn),{hash:f,pathname:p,search:g}=Vr(l,{relative:i}),w=p;return u!=="/"&&(w=p==="/"?u:Rn([u,p])),c.createHref({pathname:w,search:g,hash:f})}function qr(){return h.useContext(Yr)!=null}function Na(){return yt(qr(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(Yr).location}var Fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $m(l){h.useContext(yn).static||h.useLayoutEffect(l)}function w0(){let{isDataRoute:l}=h.useContext(na);return l?M0():j0()}function j0(){yt(qr(),"useNavigate() may be used only in the context of a <Router> component.");let l=h.useContext(qo),{basename:i,navigator:u}=h.useContext(yn),{matches:c}=h.useContext(na),{pathname:f}=Na(),p=JSON.stringify(qm(c)),g=h.useRef(!1);return $m(()=>{g.current=!0}),h.useCallback((v,b={})=>{if(Mn(g.current,Fm),!g.current)return;if(typeof v=="number"){u.go(v);return}let j=eu(v,JSON.parse(p),f,b.relative==="path");l==null&&i!=="/"&&(j.pathname=j.pathname==="/"?i:Rn([i,j.pathname])),(b.replace?u.replace:u.push)(j,b.state,b)},[i,u,p,f,l])}h.createContext(null);function Vr(l,{relative:i}={}){let{matches:u}=h.useContext(na),{pathname:c}=Na(),f=JSON.stringify(qm(u));return h.useMemo(()=>eu(l,JSON.parse(f),c,i==="path"),[l,f,c,i])}function S0(l,i){return Im(l,i)}function Im(l,i,u){yt(qr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=h.useContext(yn),{matches:f}=h.useContext(na),p=f[f.length-1],g=p?p.params:{},w=p?p.pathname:"/",v=p?p.pathnameBase:"/",b=p&&p.route;{let R=b&&b.path||"";Wm(w,!b||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let j=Na(),y;if(i){let R=typeof i=="string"?Yo(i):i;yt(v==="/"||R.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${R.pathname}" was given in the \`location\` prop.`),y=R}else y=j;let D=y.pathname||"/",L=D;if(v!=="/"){let R=v.replace(/^\//,"").split("/");L="/"+D.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=Hm(l,{pathname:L});Mn(b||C!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Mn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=N0(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},g,R.params),pathname:Rn([v,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?v:Rn([v,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,u);return i&&_?h.createElement(Yr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},_):_}function T0(){let l=R0(),i=d0(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",l),g=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:p},"ErrorBoundary")," or"," ",h.createElement("code",{style:p},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},i),u?h.createElement("pre",{style:f},u):null,g)}var D0=h.createElement(T0,null),Jm=class extends h.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){this.props.onError?this.props.onError(l,i):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=y0(l.digest);u&&(l=u)}let i=l!==void 0?h.createElement(na.Provider,{value:this.props.routeContext},h.createElement(tu.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?h.createElement(C0,{error:l},i):i}};Jm.contextType=m0;var Lc=new WeakMap;function C0({children:l,error:i}){let{basename:u}=h.useContext(yn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let c=b0(i.digest);if(c){let f=Lc.get(i);if(f)throw f;let p=Xm(c.location,u);if(Vm&&!Lc.get(i))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Lc.set(i,g),g}return h.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return l}function B0({routeContext:l,match:i,children:u}){let c=h.useContext(qo);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),h.createElement(na.Provider,{value:l},u)}function N0(l,i=[],u){let c=u?.state;if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(i.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let f=l,p=c?.errors;if(p!=null){let j=f.findIndex(y=>y.route.id&&p?.[y.route.id]!==void 0);yt(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,j+1))}let g=!1,w=-1;if(u&&c){g=c.renderFallback;for(let j=0;j<f.length;j++){let y=f[j];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(w=j),y.route.id){let{loaderData:D,errors:L}=c,C=y.route.loader&&!D.hasOwnProperty(y.route.id)&&(!L||L[y.route.id]===void 0);if(y.route.lazy||C){u.isStatic&&(g=!0),w>=0?f=f.slice(0,w+1):f=[f[0]];break}}}}let v=u?.onError,b=c&&v?(j,y)=>{v(j,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:f0(c.matches),errorInfo:y})}:void 0;return f.reduceRight((j,y,D)=>{let L,C=!1,_=null,R=null;c&&(L=p&&y.route.id?p[y.route.id]:void 0,_=y.route.errorElement||D0,g&&(w<0&&D===0?(Wm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,R=null):w===D&&(C=!0,R=y.route.hydrateFallbackElement||null)));let H=i.concat(f.slice(0,D+1)),P=()=>{let Q;return L?Q=_:C?Q=R:y.route.Component?Q=h.createElement(y.route.Component,null):y.route.element?Q=y.route.element:Q=j,h.createElement(B0,{match:y,routeContext:{outlet:j,matches:H,isDataRoute:c!=null},children:Q})};return c&&(y.route.ErrorBoundary||y.route.errorElement||D===0)?h.createElement(Jm,{location:c.location,revalidation:c.revalidation,component:_,error:L,children:P(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:b}):P()},null)}function nu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A0(l){let i=h.useContext(qo);return yt(i,nu(l)),i}function E0(l){let i=h.useContext(ms);return yt(i,nu(l)),i}function z0(l){let i=h.useContext(na);return yt(i,nu(l)),i}function au(l){let i=z0(l),u=i.matches[i.matches.length-1];return yt(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function O0(){return au("useRouteId")}function R0(){let l=h.useContext(tu),i=E0("useRouteError"),u=au("useRouteError");return l!==void 0?l:i.errors?.[u]}function M0(){let{router:l}=A0("useNavigate"),i=au("useNavigate"),u=h.useRef(!1);return $m(()=>{u.current=!0}),h.useCallback(async(f,p={})=>{Mn(u.current,Fm),u.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:i,...p}))},[l,i])}var wm={};function Wm(l,i,u){!i&&!wm[l]&&(wm[l]=!0,Mn(!1,u))}h.memo(_0);function _0({routes:l,future:i,state:u,isStatic:c,onError:f}){return Im(l,void 0,{state:u,isStatic:c,onError:f})}function Pm(l){yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function U0({basename:l="/",children:i=null,location:u,navigationType:c="POP",navigator:f,static:p=!1,unstable_useTransitions:g}){yt(!qr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=l.replace(/^\/*/,"/"),v=h.useMemo(()=>({basename:w,navigator:f,static:p,unstable_useTransitions:g,future:{}}),[w,f,p,g]);typeof u=="string"&&(u=Yo(u));let{pathname:b="/",search:j="",hash:y="",state:D=null,key:L="default",unstable_mask:C}=u,_=h.useMemo(()=>{let R=ta(b,w);return R==null?null:{location:{pathname:R,search:j,hash:y,state:D,key:L,unstable_mask:C},navigationType:c}},[w,b,j,y,D,L,c,C]);return Mn(_!=null,`<Router basename="${w}"> is not able to match the URL "${b}${j}${y}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:h.createElement(yn.Provider,{value:v},h.createElement(Yr.Provider,{children:i,value:_}))}function L0({children:l,location:i}){return S0(Ic(l),i)}function Ic(l,i=[]){let u=[];return h.Children.forEach(l,(c,f)=>{if(!h.isValidElement(c))return;let p=[...i,f];if(c.type===h.Fragment){u.push.apply(u,Ic(c.props.children,p));return}yt(c.type===Pm,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),yt(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Ic(c.props.children,p)),u.push(g)}),u}var us="get",ds="application/x-www-form-urlencoded";function hs(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function H0(l){return hs(l)&&l.tagName.toLowerCase()==="button"}function G0(l){return hs(l)&&l.tagName.toLowerCase()==="form"}function Y0(l){return hs(l)&&l.tagName.toLowerCase()==="input"}function q0(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function V0(l,i){return l.button===0&&(!i||i==="_self")&&!q0(l)}var as=null;function X0(){if(as===null)try{new FormData(document.createElement("form"),0),as=!1}catch{as=!0}return as}var K0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hc(l){return l!=null&&!K0.has(l)?(Mn(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ds}"`),null):l}function Q0(l,i){let u,c,f,p,g;if(G0(l)){let w=l.getAttribute("action");c=w?ta(w,i):null,u=l.getAttribute("method")||us,f=Hc(l.getAttribute("enctype"))||ds,p=new FormData(l)}else if(H0(l)||Y0(l)&&(l.type==="submit"||l.type==="image")){let w=l.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||w.getAttribute("action");if(c=v?ta(v,i):null,u=l.getAttribute("formmethod")||w.getAttribute("method")||us,f=Hc(l.getAttribute("formenctype"))||Hc(w.getAttribute("enctype"))||ds,p=new FormData(w,l),!X0()){let{name:b,type:j,value:y}=l;if(j==="image"){let D=b?`${b}.`:"";p.append(`${D}x`,"0"),p.append(`${D}y`,"0")}else b&&p.append(b,y)}}else{if(hs(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=us,c=null,f=ds,g=l}return p&&f==="text/plain"&&(g=p,p=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ou(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function Z0(l,i,u,c){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:i&&ta(f.pathname,i)==="/"?f.pathname=`${i.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function F0(l,i){if(l.id in i)return i[l.id];try{let u=await import(l.module);return i[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $0(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function I0(l,i,u){let c=await Promise.all(l.map(async f=>{let p=i.routes[f.route.id];if(p){let g=await F0(p,u);return g.links?g.links():[]}return[]}));return ex(c.flat(1).filter($0).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function jm(l,i,u,c,f,p){let g=(v,b)=>u[b]?v.route.id!==u[b].route.id:!0,w=(v,b)=>u[b].pathname!==v.pathname||u[b].route.path?.endsWith("*")&&u[b].params["*"]!==v.params["*"];return p==="assets"?i.filter((v,b)=>g(v,b)||w(v,b)):p==="data"?i.filter((v,b)=>{let j=c.routes[v.route.id];if(!j||!j.hasLoader)return!1;if(g(v,b)||w(v,b))return!0;if(v.route.shouldRevalidate){let y=v.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function J0(l,i,{includeHydrateFallback:u}={}){return W0(l.map(c=>{let f=i.routes[c.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function W0(l){return[...new Set(l)]}function P0(l){let i={},u=Object.keys(l).sort();for(let c of u)i[c]=l[c];return i}function ex(l,i){let u=new Set;return new Set(i),l.reduce((c,f)=>{let p=JSON.stringify(P0(f));return u.has(p)||(u.add(p),c.push({key:p,link:f})),c},[])}function eh(){let l=h.useContext(qo);return ou(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function tx(){let l=h.useContext(ms);return ou(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var ru=h.createContext(void 0);ru.displayName="FrameworkContext";function th(){let l=h.useContext(ru);return ou(l,"You must render this element inside a <HydratedRouter> element"),l}function nx(l,i){let u=h.useContext(ru),[c,f]=h.useState(!1),[p,g]=h.useState(!1),{onFocus:w,onBlur:v,onMouseEnter:b,onMouseLeave:j,onTouchStart:y}=i,D=h.useRef(null);h.useEffect(()=>{if(l==="render"&&g(!0),l==="viewport"){let _=H=>{H.forEach(P=>{g(P.isIntersecting)})},R=new IntersectionObserver(_,{threshold:.5});return D.current&&R.observe(D.current),()=>{R.disconnect()}}},[l]),h.useEffect(()=>{if(c){let _=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(_)}}},[c]);let L=()=>{f(!0)},C=()=>{f(!1),g(!1)};return u?l!=="intent"?[p,D,{}]:[p,D,{onFocus:Mr(w,L),onBlur:Mr(v,C),onMouseEnter:Mr(b,L),onMouseLeave:Mr(j,C),onTouchStart:Mr(y,L)}]:[!1,D,{}]}function Mr(l,i){return u=>{l&&l(u),u.defaultPrevented||i(u)}}function ax({page:l,...i}){let{router:u}=eh(),c=h.useMemo(()=>Hm(u.routes,l,u.basename),[u.routes,l,u.basename]);return c?h.createElement(rx,{page:l,matches:c,...i}):null}function ox(l){let{manifest:i,routeModules:u}=th(),[c,f]=h.useState([]);return h.useEffect(()=>{let p=!1;return I0(l,i,u).then(g=>{p||f(g)}),()=>{p=!0}},[l,i,u]),c}function rx({page:l,matches:i,...u}){let c=Na(),{future:f,manifest:p,routeModules:g}=th(),{basename:w}=eh(),{loaderData:v,matches:b}=tx(),j=h.useMemo(()=>jm(l,i,b,p,c,"data"),[l,i,b,p,c]),y=h.useMemo(()=>jm(l,i,b,p,c,"assets"),[l,i,b,p,c]),D=h.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let _=new Set,R=!1;if(i.forEach(P=>{let Q=p.routes[P.route.id];!Q||!Q.hasLoader||(!j.some($=>$.route.id===P.route.id)&&P.route.id in v&&g[P.route.id]?.shouldRevalidate||Q.hasClientLoader?R=!0:_.add(P.route.id))}),_.size===0)return[];let H=Z0(l,w,f.unstable_trailingSlashAwareDataRequests,"data");return R&&_.size>0&&H.searchParams.set("_routes",i.filter(P=>_.has(P.route.id)).map(P=>P.route.id).join(",")),[H.pathname+H.search]},[w,f.unstable_trailingSlashAwareDataRequests,v,c,p,j,i,l,g]),L=h.useMemo(()=>J0(y,p),[y,p]),C=ox(y);return h.createElement(h.Fragment,null,D.map(_=>h.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...u})),L.map(_=>h.createElement("link",{key:_,rel:"modulepreload",href:_,...u})),C.map(({key:_,link:R})=>h.createElement("link",{key:_,nonce:u.nonce,...R,crossOrigin:R.crossOrigin??u.crossOrigin})))}function lx(...l){return i=>{l.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sx&&(window.__reactRouterVersion="7.13.1")}catch{}function ix({basename:l,children:i,unstable_useTransitions:u,window:c}){let f=h.useRef();f.current==null&&(f.current=Yg({window:c,v5Compat:!0}));let p=f.current,[g,w]=h.useState({action:p.action,location:p.location}),v=h.useCallback(b=>{u===!1?w(b):h.startTransition(()=>w(b))},[u]);return h.useLayoutEffect(()=>p.listen(v),[p,v]),h.createElement(U0,{basename:l,children:i,location:g.location,navigationType:g.action,navigator:p,unstable_useTransitions:u})}var nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ah=h.forwardRef(function({onClick:i,discover:u="render",prefetch:c="none",relative:f,reloadDocument:p,replace:g,unstable_mask:w,state:v,target:b,to:j,preventScrollReset:y,viewTransition:D,unstable_defaultShouldRevalidate:L,...C},_){let{basename:R,navigator:H,unstable_useTransitions:P}=h.useContext(yn),Q=typeof j=="string"&&nh.test(j),$=Xm(j,R);j=$.to;let Z=k0(j,{relative:f}),te=Na(),I=null;if(w){let ne=eu(w,[],te.unstable_mask?te.unstable_mask.pathname:"/",!0);R!=="/"&&(ne.pathname=ne.pathname==="/"?R:Rn([R,ne.pathname])),I=H.createHref(ne)}let[X,W,me]=nx(c,C),ge=fx(j,{replace:g,unstable_mask:w,state:v,target:b,preventScrollReset:y,relative:f,viewTransition:D,unstable_defaultShouldRevalidate:L,unstable_useTransitions:P});function ue(ne){i&&i(ne),ne.defaultPrevented||ge(ne)}let fe=!($.isExternal||p),ye=h.createElement("a",{...C,...me,href:(fe?I:void 0)||$.absoluteURL||Z,onClick:fe?ue:i,ref:lx(_,W),target:b,"data-discover":!Q&&u==="render"?"true":void 0});return X&&!Q?h.createElement(h.Fragment,null,ye,h.createElement(ax,{page:Z})):ye});ah.displayName="Link";var cx=h.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:c="",end:f=!1,style:p,to:g,viewTransition:w,children:v,...b},j){let y=Vr(g,{relative:b.relative}),D=Na(),L=h.useContext(ms),{navigator:C,basename:_}=h.useContext(yn),R=L!=null&&gx(y)&&w===!0,H=C.encodeLocation?C.encodeLocation(y).pathname:y.pathname,P=D.pathname,Q=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;u||(P=P.toLowerCase(),Q=Q?Q.toLowerCase():null,H=H.toLowerCase()),Q&&_&&(Q=ta(Q,_)||Q);const $=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Z=P===H||!f&&P.startsWith(H)&&P.charAt($)==="/",te=Q!=null&&(Q===H||!f&&Q.startsWith(H)&&Q.charAt(H.length)==="/"),I={isActive:Z,isPending:te,isTransitioning:R},X=Z?i:void 0,W;typeof c=="function"?W=c(I):W=[c,Z?"active":null,te?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let me=typeof p=="function"?p(I):p;return h.createElement(ah,{...b,"aria-current":X,className:W,ref:j,style:me,to:g,viewTransition:w},typeof v=="function"?v(I):v)});cx.displayName="NavLink";var ux=h.forwardRef(({discover:l="render",fetcherKey:i,navigate:u,reloadDocument:c,replace:f,state:p,method:g=us,action:w,onSubmit:v,relative:b,preventScrollReset:j,viewTransition:y,unstable_defaultShouldRevalidate:D,...L},C)=>{let{unstable_useTransitions:_}=h.useContext(yn),R=hx(),H=vx(w,{relative:b}),P=g.toLowerCase()==="get"?"get":"post",Q=typeof w=="string"&&nh.test(w),$=Z=>{if(v&&v(Z),Z.defaultPrevented)return;Z.preventDefault();let te=Z.nativeEvent.submitter,I=te?.getAttribute("formmethod")||g,X=()=>R(te||Z.currentTarget,{fetcherKey:i,method:I,navigate:u,replace:f,state:p,relative:b,preventScrollReset:j,viewTransition:y,unstable_defaultShouldRevalidate:D});_&&u!==!1?h.startTransition(()=>X()):X()};return h.createElement("form",{ref:C,method:P,action:H,onSubmit:c?v:$,...L,"data-discover":!Q&&l==="render"?"true":void 0})});ux.displayName="Form";function dx(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oh(l){let i=h.useContext(qo);return yt(i,dx(l)),i}function fx(l,{target:i,replace:u,unstable_mask:c,state:f,preventScrollReset:p,relative:g,viewTransition:w,unstable_defaultShouldRevalidate:v,unstable_useTransitions:b}={}){let j=w0(),y=Na(),D=Vr(l,{relative:g});return h.useCallback(L=>{if(V0(L,i)){L.preventDefault();let C=u!==void 0?u:Gr(y)===Gr(D),_=()=>j(l,{replace:C,unstable_mask:c,state:f,preventScrollReset:p,relative:g,viewTransition:w,unstable_defaultShouldRevalidate:v});b?h.startTransition(()=>_()):_()}},[y,j,D,u,c,f,i,l,p,g,w,v,b])}var px=0,mx=()=>`__${String(++px)}__`;function hx(){let{router:l}=oh("useSubmit"),{basename:i}=h.useContext(yn),u=O0(),c=l.fetch,f=l.navigate;return h.useCallback(async(p,g={})=>{let{action:w,method:v,encType:b,formData:j,body:y}=Q0(p,i);if(g.navigate===!1){let D=g.fetcherKey||mx();await c(D,u,g.action||w,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:j,body:y,formMethod:g.method||v,formEncType:g.encType||b,flushSync:g.flushSync})}else await f(g.action||w,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:j,body:y,formMethod:g.method||v,formEncType:g.encType||b,replace:g.replace,state:g.state,fromRouteId:u,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,f,i,u])}function vx(l,{relative:i}={}){let{basename:u}=h.useContext(yn),c=h.useContext(na);yt(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),p={...Vr(l||".",{relative:i})},g=Na();if(l==null){p.search=g.search;let w=new URLSearchParams(p.search),v=w.getAll("index");if(v.some(j=>j==="")){w.delete("index"),v.filter(y=>y).forEach(y=>w.append("index",y));let j=w.toString();p.search=j?`?${j}`:""}}return(!l||l===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:Rn([u,p.pathname])),Gr(p)}function gx(l,{relative:i}={}){let u=h.useContext(Qm);yt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=oh("useViewTransitionState"),f=Vr(l,{relative:i});if(!u.isTransitioning)return!1;let p=ta(u.currentLocation.pathname,c)||u.currentLocation.pathname,g=ta(u.nextLocation.pathname,c)||u.nextLocation.pathname;return fs(f.pathname,g)!=null||fs(f.pathname,p)!=null}var xx=Lm();function Xt(l,{insertAt:i}={}){if(!l||typeof document>"u")return;const u=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",i==="top"&&u.firstChild?u.insertBefore(c,u.firstChild):u.appendChild(c),c.styleSheet?c.styleSheet.cssText=l:c.appendChild(document.createTextNode(l))}Xt(`@layer components {
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
`);function bx(l,i){return[l,typeof i=="string"?i:""].filter(Boolean).join(" ")}function Lo(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}var N=h.forwardRef((l,i)=>{const{children:u,variant:c="solid",size:f="md",color:p="default",radius:g="md",startContent:w,endContent:v,spinner:b,spinnerPlacement:j="start",fullWidth:y=!1,isIconOnly:D=!1,isDisabled:L=!1,isLoading:C=!1,disableRipple:_=!1,disableAnimation:R=!1,className:H,type:P="button",style:Q,disabled:$,onMouseDown:Z,onPointerDown:te,onPointerEnter:I,onPointerLeave:X,onPointerUp:W,onPointerCancel:me,onClick:ge,onKeyDown:ue,onKeyUp:fe,onPress:ye,onPressStart:ne,onPressEnd:B,onPressChange:q,onPressUp:ee,onFocus:oe,onBlur:pe,...x}=l,T=$||L,[V,E]=h.useState([]),ae=h.useRef(!1),re=x["aria-label"];x["aria-labelledby"];const se=typeof re=="string"?re:void 0,je={"--oks-button-tone":Lo(p,500),"--oks-button-tone-hover":Lo(p,600),"--oks-button-tone-active":Lo(p,700),"--oks-button-tone-50":Lo(p,50),"--oks-button-tone-100":Lo(p,100),"--oks-button-tone-700":Lo(p,700)},J=()=>{const ve=globalThis?.crypto?.randomUUID?.();return typeof ve=="string"?ve:`${Date.now()}-${Math.random()}`},he=typeof globalThis.matchMedia=="function"&&globalThis.matchMedia("(prefers-reduced-motion: reduce)")?.matches,[Ce,Ee]=h.useState(!1),[He,Fe]=h.useState(!1),[Je,le]=h.useState(!1),[ce,Ne]=h.useState(!1),ie=ve=>{T||C||(ce||(ne?.(ve),q?.(!0)),Ne(!0))},xe=ve=>{ce&&(B?.(ve),q?.(!1)),Ne(!1)},Ae=h.useCallback((ve,xt,bt)=>{if(R||he)return;const Pt=ve.getBoundingClientRect(),jn=Math.max(xt,Pt.width-xt),Bn=Math.max(bt,Pt.height-bt),Wa=Math.ceil(Math.sqrt(jn*jn+Bn*Bn)*2),Aa=J();E(xs=>{const Ea=[...xs,{id:Aa,x:xt,y:bt,size:Wa}];return Ea.length>10&&Ea.splice(0,Ea.length-10),Ea})},[R,he]),We=h.useCallback(ve=>{E(xt=>xt.filter(bt=>bt.id!==ve))},[]),ke=ve=>{if(ie(ve),!T&&!C&&!_){ae.current=!0,globalThis.setTimeout(()=>{ae.current=!1},0);const xt=ve.currentTarget,bt=xt.getBoundingClientRect();if(typeof ve.clientX=="number"&&typeof ve.clientY=="number"){const Pt=ve.clientX-bt.left,jn=ve.clientY-bt.top;Ae(xt,Pt,jn)}}te?.(ve)},ze=ve=>{if(!T&&!C&&!_){if(ae.current){Z?.(ve);return}const xt=ve.currentTarget,bt=xt.getBoundingClientRect(),Pt=ve.clientX-bt.left,jn=ve.clientY-bt.top;Ae(xt,Pt,jn)}Z?.(ve)},_e=ve=>{if((ve.key==="Enter"||ve.key===" ")&&ie(ve),!T&&!C&&!_&&(ve.key==="Enter"||ve.key===" ")){const xt=ve.currentTarget,bt=xt.getBoundingClientRect();Ae(xt,bt.width/2,bt.height/2)}ue?.(ve)},tt=ve=>{(ve.key==="Enter"||ve.key===" ")&&(!T&&!C&&ee?.(ve),xe(ve)),fe?.(ve)},rt=ve=>{if(T||C){ve.preventDefault(),ve.stopPropagation();return}ye?.(ve),ge?.(ve)},ut=ve=>{Ee(!0),I?.(ve)},Be=ve=>{Ee(!1),xe(ve),X?.(ve)},Ge=ve=>{!T&&!C&&ee?.(ve),xe(ve),W?.(ve)},Nt=ve=>{xe(ve),me?.(ve)},kn=ve=>{Fe(!1),le(!1),xe(ve),pe?.(ve)},wn=ve=>{Fe(!0);const xt=ve?.currentTarget,bt=typeof xt?.matches=="function"?xt.matches(":focus-visible"):!1;le(bt),oe?.(ve)},qt=b??a.jsx("span",{className:"oksButtonSpinner","aria-hidden":"true"}),Et=D&&C;return a.jsxs("button",{...x,"aria-label":se,ref:i,type:P,disabled:T,onClick:rt,onMouseDown:ze,onPointerDown:ke,onPointerEnter:ut,onPointerLeave:Be,onPointerUp:Ge,onPointerCancel:Nt,onKeyDown:_e,onKeyUp:tt,onFocus:wn,onBlur:kn,"data-hover":Ce?"true":"false","data-focus":He?"true":"false","data-focus-visible":Je?"true":"false","data-disabled":T?"true":"false","data-pressed":ce?"true":"false","data-loading":C?"true":"false","data-motion":R||he?"reduced":"default","data-variant":c,"data-color":p,"data-size":f,"data-radius":g,"data-icon-only":D?"true":"false","data-full-width":y?"true":"false",className:bx("oksButton",H),style:{...je,...Q},children:[V.map(ve=>a.jsx("span",{className:"oksButtonRipple","aria-hidden":"true",style:{left:`${ve.x}px`,top:`${ve.y}px`,width:`${ve.size}px`,height:`${ve.size}px`},onAnimationEnd:()=>We(ve.id)},ve.id)),C&&j==="start"&&!Et?a.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"start",children:qt}):null,w!==void 0?a.jsx("span",{className:"oksButtonStartContent",children:w}):null,Et?a.jsx("span",{className:"oksButtonIconOnly","aria-hidden":"true",children:qt}):D?a.jsx("span",{className:"oksButtonIconOnly",children:u}):u!=null?a.jsx("span",{className:"oksButtonLabel",children:u}):null,v!==void 0?a.jsx("span",{className:"oksButtonEndContent",children:v}):null,C&&j==="end"&&!Et?a.jsx("span",{className:"oksButtonSpinnerSlot","data-placement":"end",children:qt}):null]})});N.displayName="Button";Xt(`@layer components {
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
`);function yx(l,i){return[l,typeof i=="string"?i:""].filter(Boolean).join(" ")}var Jc=h.forwardRef((l,i)=>{const{children:u,variant:c="solid",color:f="default",size:p="md",radius:g="md",fullWidth:w=!1,isDisabled:v=!1,className:b,role:j="group",style:y,...D}=l,L=h.Children.map(u,C=>{if(!h.isValidElement(C)||C.type!==N)return C;const _={};return C.props.variant===void 0&&(_.variant=c),C.props.color===void 0&&(_.color=f),C.props.size===void 0&&(_.size=p),C.props.radius===void 0&&(_.radius=g),C.props.fullWidth===void 0&&(_.fullWidth=w),C.props.isDisabled===void 0&&(_.isDisabled=v),h.cloneElement(C,_)});return a.jsx("div",{...D,ref:i,role:j,"data-variant":c,"data-color":f,"data-size":p,"data-radius":g,"data-full-width":w?"true":"false","data-disabled":v?"true":"false",className:yx("oksButtonGroup",b),style:y,children:L})});Jc.displayName="ButtonGroup";function lu(){const[l,i]=h.useState(!1);return h.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const u=window.matchMedia("(prefers-reduced-motion: reduce)"),c=()=>i(!!u.matches);return c(),typeof u.addEventListener=="function"?(u.addEventListener("change",c),()=>u.removeEventListener("change",c)):(u.addListener(c),()=>u.removeListener(c))},[]),l}function vs({children:l,container:i}){if(typeof document>"u")return null;const u=i??document.body;return u?xx.createPortal(l,u):null}function rh({type:l,size:i=18,...u}){const c={width:i,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,...u};return l==="default"?a.jsxs("svg",{...c,children:[a.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),a.jsx("path",{d:"M10 10h.01",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round"})]}):l==="success"?a.jsxs("svg",{...c,children:[a.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),a.jsx("path",{d:"m6.1 10.3 2.2 2.2 5.6-5.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}):l==="warning"?a.jsxs("svg",{...c,children:[a.jsx("path",{d:"M10 2.2 18 17.8H2L10 2.2Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),a.jsx("path",{d:"M10 7v4.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),a.jsx("path",{d:"M10 14.2h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):l==="error"?a.jsxs("svg",{...c,children:[a.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),a.jsx("path",{d:"M7.2 7.2 12.8 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),a.jsx("path",{d:"M12.8 7.2 7.2 12.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}):l==="loading"?a.jsx("svg",{...c,children:a.jsx("path",{d:"M10 3.2a6.8 6.8 0 1 0 6.8 6.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}):l==="info"?a.jsxs("svg",{...c,children:[a.jsx("path",{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",stroke:"currentColor",strokeWidth:"1.6"}),a.jsx("path",{d:"M10 8.2V14",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),a.jsx("path",{d:"M10 6h.01",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]}):null}function lh({size:l=16,...i}){return a.jsxs("svg",{width:l,height:l,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...i,children:[a.jsx("path",{d:"M6.2 6.2 13.8 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),a.jsx("path",{d:"M13.8 6.2 6.2 13.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}function kx(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var gs=h.forwardRef(({ariaLabel:l,iconSize:i=16,icon:u,iconClassName:c,...f},p)=>{const g=u===void 0?a.jsx(lh,{size:i,className:c}):c?h.isValidElement(u)?h.cloneElement(u,{className:kx(u.props.className,c)}):a.jsx("span",{className:c,children:u}):u;return a.jsx("button",{ref:p,type:"button","aria-label":l,...f,children:g})});gs.displayName="CloseButton";Xt(`@layer components {
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
`);var sh=h.createContext(null);function Gt(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function wx(l){if(!l||typeof l!="object"||h.isValidElement(l))return!1;const i=l;return"type"in i||"tone"in i||"color"in i||"severity"in i||"variant"in i||"radius"in i||"size"in i||"position"in i||"placement"in i||"duration"in i||"timeout"in i||"persistent"in i||"dismissible"in i||"hideCloseButton"in i||"action"in i||"title"in i||"message"in i||"description"in i||"icon"in i||"showIcon"in i||"hideIcon"in i||"endContent"in i||"closeIcon"in i||"loadingComponent"in i||"promise"in i||"classNames"in i||"id"in i||"className"in i||"style"in i}function jx(l){const i={};for(const u in l)Object.prototype.hasOwnProperty.call(l,u)&&l[u]!==void 0&&(i[u]=l[u]);return i}function Sx(l,i){return wx(l)?{...l,...i??{}}:{message:l,...i??{}}}function Tx(l){return l==="success"?"success":l==="warning"?"warning":l==="error"?"danger":l==="info"?"info":"primary"}function ih(l){return!0}function Dx(l){return"alert"}function ch(l){return l==="flat"?"soft":l==="bordered"?"outline":l}function uh(l){return l==="success"?"success":l==="warning"?"warning":l==="danger"?"error":"default"}function dh(l){if(!(!l||l==="default"))return l}function Cx(l,i){const u=ch(l),c=`var(--oks-color-${i}-600, var(--oks-color-primary-600, #2563eb))`,f=`var(--oks-color-${i}-50, var(--oks-color-primary-50, #eff6ff))`,p=`var(--oks-color-${i}-900, var(--oks-color-primary-900, #0b1220))`;return u==="solid"?{accent:c,bg:c,fg:"white",border:c}:u==="outline"?{accent:c,bg:"transparent",fg:p,border:c}:{accent:c,bg:f,fg:p,border:c}}function Bx(l,i){return i.type==="UPSERT"?[i.item,...l.filter(c=>c.id!==i.item.id)].slice(0,Math.max(1,i.maxToasts)):i.type==="PATCH"?l.map(u=>{if(u.id!==i.id)return u;const c=jx(i.patch),f=c.severity??c.color,p=c.type??(f!==void 0?uh(f):u.type),g=c.tone??(f!==void 0?dh(f)??u.tone:u.tone),w=c.variant??u.variant,v=c.size??u.size,b=c.placement??c.position??u.position,j=c.persistent===!0?null:c.timeout!==void 0?c.timeout:c.duration!==void 0?c.duration:u.duration,y=c.hideIcon!==void 0?!c.hideIcon:c.showIcon!==void 0?c.showIcon:c.type!==void 0||f!==void 0?ih():u.showIcon,D=c.shouldShowTimeoutProgress??c.showDurationBar;return{...u,...c,type:p,tone:g,variant:w,size:v,position:b,duration:j,message:c.message!==void 0?c.message:u.message,description:c.description!==void 0?c.description:u.description,showDurationBar:!!D&&j!=null,dismissible:c.dismissible??(c.hideCloseButton!==void 0?!c.hideCloseButton:u.dismissible),showIcon:y,state:u.state}}):i.type==="MARK_CLOSING"?l.map(u=>u.id===i.id?{...u,state:"closing",duration:null}:u):i.type==="MARK_ALL_CLOSING"?l.map(u=>({...u,state:"closing",duration:null})):i.type==="REMOVE"?l.filter(u=>u.id!==i.id):l}function Nx(){const l=h.useContext(sh);if(!l)throw new Error("useToast must be used inside ToastProvider");return l}var sn=null,Ia=((l,i)=>sn?sn.show(l,i):(console.warn("Toast provider not configured"),-1)),Ax=((l,i)=>Ia(l,i)),et=Object.assign(Ax,{show:Ia,info:(l,i)=>Ia(l,{...i??{},type:"info"}),success:(l,i)=>Ia(l,{...i??{},type:"success"}),warning:(l,i)=>Ia(l,{...i??{},type:"warning"}),error:(l,i)=>Ia(l,{...i??{},type:"error"}),update:(l,i)=>{if(!sn){console.warn("Toast provider not configured");return}sn.update(l,i)},dismiss:l=>{if(!sn){console.warn("Toast provider not configured");return}sn.dismiss(l)},dismissAll:()=>{if(!sn){console.warn("Toast provider not configured");return}sn.dismissAll()},promise:(l,i)=>sn?sn.promise(l,i):(console.warn("Toast provider not configured"),-1)});function Wc(l){return Ia(l)}function Ex({item:l,dataMotion:i,onDismiss:u,stackIndex:c=0}){const f=l.duration,p=h.useRef(null),g=h.useRef(0),w=h.useRef(f??0),v=h.useRef(null),b=c===0&&l.showDurationBar&&f!=null,j=h.useCallback((ge,ue)=>{const fe=v.current;if(fe){if(fe.style.transform=`scaleX(${Math.max(0,Math.min(1,ge))})`,i==="reduced"||ue==null){fe.style.transition="none";return}fe.style.transition=`transform ${ue}ms linear`}},[i]),y=h.useCallback(ge=>{b&&(j(1,null),i!=="reduced"&&requestAnimationFrame(()=>j(0,ge)))},[b,i,j]),D=h.useCallback(()=>{p.current!=null&&clearTimeout(p.current),p.current=null},[]),L=h.useCallback(ge=>{D(),!(ge<=0)&&(g.current=Date.now(),p.current=setTimeout(()=>u(l.id),ge))},[D,l.id,u]),C=h.useCallback(()=>{if(f==null||p.current==null)return;const ge=Date.now()-g.current;if(w.current=Math.max(0,w.current-ge),D(),b){const ue=f>0?w.current/f:0;j(ue,null)}},[b,D,f,j]),_=h.useCallback(()=>{f!=null&&l.state==="open"&&(L(w.current),b&&j(0,w.current))},[L,b,f,l.state,j]);h.useEffect(()=>{if(D(),f!=null)return w.current=f,c===0&&l.state==="open"&&(L(f),y(f)),()=>D()},[L,D,f,l.state,c,y]),h.useEffect(()=>{l.state!=="open"&&D()},[D,l.state]);const R=Dx(l.type),H=Cx(l.variant,l.tone),P=ch(l.variant),Q=P==="solid"?H.fg:H.accent,$=P==="solid"?`color-mix(in srgb, ${H.fg} 14%, transparent)`:`color-mix(in srgb, ${H.accent} 12%, transparent)`,Z=(l.title??null)!==null&&l.title!==void 0,te=l.description??l.message,I=(te??null)!==null&&te!==void 0,X=l.state==="closing"?"exiting":"entering",W=l.classNames,me={"--oks-toast-accent":H.accent,"--oks-toast-bg":H.bg,"--oks-toast-fg":H.fg,"--oks-toast-border":H.border,"--oks-toast-icon-fg":Q,"--oks-toast-icon-bg":$,"--oks-toast-stack-index":String(c),...l.style};return a.jsx("div",{role:R,"aria-atomic":"true","data-has-title":Z?"true":"false","data-has-description":I?"true":"false","data-animation":X,"data-placement":l.position,"data-drag-value":"0","data-motion":i,"data-state":l.state,"data-size":l.size,"data-radius":l.radius??"md","data-stack-index":String(c),className:Gt(Gt(Gt("oksToast",c>0?"oksToastStacked":""),W?.base),l.className),style:me,...c===0?{onMouseEnter:C,onMouseLeave:_,onFocusCapture:C,onBlurCapture:_}:{},children:a.jsxs("div",{className:Gt(Gt("oksToastSurface",W?.motionDiv),Gt(W?.base,l.className)),children:[l.type==="loading"&&l.loadingComponent?a.jsx("div",{className:Gt("oksToastLoading",W?.loadingComponent),"aria-hidden":"true",children:l.loadingComponent}):l.showIcon?a.jsx("div",{className:Gt("oksToastIcon",W?.icon),"aria-hidden":"true",children:l.icon??a.jsx(rh,{type:l.type})}):null,a.jsxs("div",{className:Gt("oksToastBody",W?.content),children:[Z&&a.jsx("div",{className:Gt("oksToastTitle",W?.title),children:l.title}),I&&a.jsx("div",{className:Gt("oksToastMessage",W?.description),children:te})]}),c===0&&(l.action||l.endContent||l.dismissible)&&a.jsxs("div",{className:Gt("oksToastControls",W?.wrapper),children:[l.action&&a.jsx("button",{type:"button",className:"oksToastAction",onClick:()=>l.action?.onClick?.(),children:l.action.label}),l.endContent,l.dismissible&&a.jsx(gs,{ariaLabel:"Close",className:Gt("oksToastClose",W?.closeButton),...l.closeIcon!==void 0?{icon:l.closeIcon}:{},...W?.closeIcon!==void 0?{iconClassName:W.closeIcon}:{},onClick:()=>u(l.id)})]}),b&&a.jsx("div",{className:Gt("oksToastProgressTrack",W?.progressTrack),"aria-hidden":"true",children:a.jsx("div",{ref:v,className:Gt("oksToastProgressIndicator",W?.progressIndicator)})})]})})}function zx({children:l,position:i,placement:u,maxToasts:c,maxVisibleToasts:f,defaultDuration:p=6e3,container:g,motion:w="auto",disableAnimation:v,toastOffset:b=0,toastProps:j,regionProps:y,className:D,style:L}){const C=lu(),_=u??i??"bottom-right",R=f??c??3,H=c!==void 0?c:Math.max(R,12),P=v===!0||w==="reduced"||w==="auto"&&C?"reduced":"default",Q=P==="reduced"?0:260,$=h.useRef(0),Z=h.useRef(new Map),[te,I]=h.useReducer(Bx,[]),X=h.useRef([]);X.current=te;const W=h.useCallback(x=>{const T=Z.current.get(x);if(T!=null&&clearTimeout(T),Q<=0){I({type:"REMOVE",id:x});return}const V=setTimeout(()=>{Z.current.delete(x),I({type:"REMOVE",id:x})},Q);Z.current.set(x,V)},[Q]),me=h.useCallback(x=>{const T=X.current.find(V=>V.id===x);T&&T.state!=="closing"&&T.onDismiss?.(x),I({type:"MARK_CLOSING",id:x}),W(x)},[W]),ge=h.useCallback(()=>{const x=X.current;for(const T of x)T.state!=="closing"&&T.onDismiss?.(T.id);I({type:"MARK_ALL_CLOSING"});for(const T of x)W(T.id)},[W]),ue=h.useCallback((x,T)=>{I({type:"PATCH",id:x,patch:T})},[]),fe=h.useCallback(((x,T)=>{const V=Sx(x,T),E={...j??{},...V},ae=E.severity??E.color,re=E.type??(ae?uh(ae):"default"),se=E.tone??(ae?dh(ae):void 0)??Tx(re),je=E.variant??"flat",J=E.size??"md",he=E.placement??E.position??_,Ce=E.hideCloseButton!==void 0?!E.hideCloseButton:E.dismissible??!0,Ee=!!E.persistent,He=E.timeout??E.duration,Fe=Ee?null:He!==void 0?He:p,Je=!!(E.shouldShowTimeoutProgress??E.showDurationBar)&&Fe!=null,le=E.hideIcon!==void 0?!E.hideIcon:E.showIcon??ih(),ce=E.id??++$.current,ie={...{id:ce,createdAt:Date.now(),state:"open",type:re,tone:se,variant:je,radius:E.radius??"md",size:J,position:he,duration:Fe,showDurationBar:Je,dismissible:Ce,showIcon:le},...E.title!==void 0?{title:E.title}:{},...E.message!==void 0?{message:E.message}:{},...E.description!==void 0?{description:E.description}:{},...E.action!==void 0?{action:E.action}:{},...E.icon!==void 0?{icon:E.icon}:{},...E.endContent!==void 0?{endContent:E.endContent}:{},...E.closeIcon!==void 0?{closeIcon:E.closeIcon}:{},...E.loadingComponent!==void 0?{loadingComponent:E.loadingComponent}:{},...E.classNames!==void 0?{classNames:E.classNames}:{},...E.onDismiss!==void 0?{onDismiss:E.onDismiss}:{},...E.className!==void 0?{className:E.className}:{},...E.style!==void 0?{style:E.style}:{}};if(E.promise){const xe=E.promise,Ae=He!==void 0?He:p,We=E.shouldShowTimeoutProgress??E.showDurationBar;return I({type:"UPSERT",item:{...ie,type:"loading",duration:null,showDurationBar:!1,dismissible:Ce},maxToasts:H}),xe.then(()=>ue(ce,{type:"success",timeout:Ae,...We!==void 0?{shouldShowTimeoutProgress:We}:{},dismissible:Ce}),()=>ue(ce,{type:"error",timeout:Ae,...We!==void 0?{shouldShowTimeoutProgress:We}:{},dismissible:Ce})),ce}return I({type:"UPSERT",item:ie,maxToasts:H}),ce}),[p,_,H,j,ue]),ye=h.useCallback((x,T)=>{const V=typeof x=="function"?x():x,E=fe({...T.loading??{},type:T.loading?.type??"loading",persistent:!0,dismissible:T.loading?.dismissible??!1});return V.then(ae=>{const re=T.success?.(ae)??{};ue(E,{...re,type:re.type??"success",persistent:!1})},ae=>{const re=T.error?.(ae)??{};ue(E,{...re,type:re.type??"error",persistent:!1})}),E},[fe,ue]),ne=h.useMemo(()=>({show:fe,info:(x,T)=>fe(x,{...T??{},type:"info"}),success:(x,T)=>fe(x,{...T??{},type:"success"}),warning:(x,T)=>fe(x,{...T??{},type:"warning"}),error:(x,T)=>fe(x,{...T??{},type:"error"}),update:ue,dismiss:me,dismissAll:ge,promise:ye}),[me,ge,ye,fe,ue]);h.useEffect(()=>(sn=ne,()=>{sn===ne&&(sn=null)}),[ne]),h.useEffect(()=>{if(typeof window>"u")return;const x=T=>{if(T.key!=="Escape")return;const V=te[0];V&&me(V.id)};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[me,te]),h.useEffect(()=>()=>{for(const x of Z.current.values())clearTimeout(x);Z.current.clear()},[]);const B=h.useMemo(()=>{const x={};for(const T of te){const V=T.position,E=x[V]??[];E.push(T),x[V]=E}return x},[te]),{classNames:q,style:ee,...oe}=y??{},pe={"--oks-toast-offset":`${b}px`,...L??{},...ee??{}};return a.jsxs(sh.Provider,{value:ne,children:[l,a.jsx(vs,{container:g,children:Object.entries(B).map(([x,T])=>{const V=x,E=Math.max(1,R),re=T.slice(0,E),se=Math.max(0,T.length-E);return a.jsx("div",{"data-position":V,className:Gt(Gt("oksToastViewport",q?.base),D),style:pe,"aria-live":"polite",...oe,children:a.jsx("div",{className:"oksToastStack","data-position":V,"data-has-overflow":se>0?"true":"false","data-overflow-count":String(se),children:re.map((je,J)=>a.jsx(Ex,{item:je,dataMotion:P,onDismiss:me,stackIndex:J},je.id))})},x)})})]})}function bn(l,i,u){return Math.min(u,Math.max(i,l))}function _r(l,i){return u=>{l?.(u),i(u)}}function Ox(...l){return i=>{for(const u of l)u&&(typeof u=="function"?u(i):u.current=i)}}function Rx(){return typeof window>"u"?{width:0,height:0,scrollX:0,scrollY:0}:{width:window.innerWidth,height:window.innerHeight,scrollX:window.scrollX??window.pageXOffset??0,scrollY:window.scrollY??window.pageYOffset??0}}function fh(l){const{triggerRect:i,tooltipRect:u,side:c,align:f,offset:p,collisionPadding:g,crossOffset:w=0,shouldFlip:v=!0,arrowSize:b=10,arrowPaddingX:j=12,arrowPaddingY:y=8,arrowCornerInset:D=0,strategy:L}=l,C=Rx(),_=i.top-g,R=C.height-g-i.bottom,H=i.left-g,P=C.width-g-i.right,Q={top:u.height+p,bottom:u.height+p,left:u.width+p,right:u.width+p},$={top:_,bottom:R,left:H,right:P},Z={top:$.top>=Q.top,bottom:$.bottom>=Q.bottom,left:$.left>=Q.left,right:$.right>=Q.right},te=ae=>ae==="top"?"bottom":ae==="bottom"?"top":ae==="left"?"right":"left",X=(()=>{if(!v||Z[c])return c;const ae=te(c);if(Z[ae])return ae;const re=["top","bottom","left","right"];let se="top",je=$[se]-Q[se];for(const J of re){const he=$[J]-Q[J];he>je&&(se=J,je=he)}return se})();let W=0,me=0;const ge=f==="start"?i.left:f==="end"?i.right-u.width:i.left+i.width/2-u.width/2,ue=f==="start"?i.top:f==="end"?i.bottom-u.height:i.top+i.height/2-u.height/2;X==="top"?(W=i.top-u.height-p,me=ge):X==="bottom"?(W=i.bottom+p,me=ge):X==="left"?(W=ue,me=i.left-u.width-p):(W=ue,me=i.right+p),X==="top"||X==="bottom"?me+=w:W+=w;const fe=g,ye=C.width-g-u.width,ne=g,B=C.height-g-u.height,q=u.width<=C.width-g*2,ee=u.height<=C.height-g*2;Z[X]?X==="top"||X==="bottom"?(me=bn(me,fe,ye),ee||(W=bn(W,ne,B))):(W=bn(W,ne,B),q||(me=bn(me,fe,ye))):(me=bn(me,fe,ye),W=bn(W,ne,B)),L==="absolute"&&(me+=C.scrollX,W+=C.scrollY);const oe=b/2,pe=i.left+i.width/2+(L==="absolute"?C.scrollX:0),x=i.top+i.height/2+(L==="absolute"?C.scrollY:0);let T,V;if(X==="top"||X==="bottom"){const ae=pe-me,re=Math.max(j,D),se=re+oe,je=u.width-re-oe;T=je>=se?bn(ae,se,je):u.width/2}else{const ae=x-W,re=Math.max(y,D),se=re+oe,je=u.height-re-oe;V=je>=se?bn(ae,se,je):u.height/2}const E={top:W,left:me,placedSide:X};return T!==void 0&&(E.arrowX=T),V!==void 0&&(E.arrowY=V),E}Xt(`@layer components {
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
`);function os(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var Sm=[50,100,200,300,400,500,600,700,800,900,950];function Mx(l){const i=bn(l,50,950);let c=Sm[0]??100,f=Math.abs(c-i);for(const p of Sm){const g=Math.abs(p-i);g<f&&(c=p,f=g)}return c}function _x(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}function Re(l){const{children:i,content:u,size:c="md",color:f="default",colorDepth:p=100,radius:g="md",shadow:w="sm",placement:v="top",delay:b=0,closeDelay:j=500,isOpen:y,defaultOpen:D=!1,onOpenChange:L,onClose:C,offset:_=7,containerPadding:R=12,crossOffset:H=0,showArrow:P=!1,shouldFlip:Q=!0,triggerScaleOnOpen:$=!1,isKeyboardDismissDisabled:Z=!1,isDismissable:te=!1,shouldCloseOnBlur:I=!0,portalContainer:X,updatePositionDeps:W,isDisabled:me=!1,disableAnimation:ge=!1,className:ue,classNames:fe,shouldCloseOnInteractOutside:ye}=l,B=`oks-tooltip-${h.useId().replace(/[:]/g,"")}`,q=y!==void 0,[ee,oe]=h.useState(D),pe=!me&&(q?y:ee),[x,T]=h.useState(!1),V=lu(),E=h.useRef(null),ae=h.useRef(null),re=h.useRef(null),se=h.useRef(null),[je,J]=h.useState(null),he=Be=>{L?.(Be),q||oe(Be),Be||C?.()},Ce=()=>{re.current!==null&&(window.clearTimeout(re.current),re.current=null)},Ee=()=>{se.current!==null&&(window.clearTimeout(se.current),se.current=null)},He=Be=>{if(me)return;const Ge=Be?.currentTarget;Ge instanceof HTMLElement&&(E.current=Ge),Ee(),Ce(),Ne(),re.current=window.setTimeout(()=>he(!0),b)},Fe=()=>{Ce(),Ee(),se.current=window.setTimeout(()=>he(!1),j)},Je=()=>{Ce(),Ee(),he(!1)},{side:le,align:ce}=h.useMemo(()=>{const[Be,Ge]=v.split("-");return{side:Be==="top"||Be==="bottom"||Be==="left"||Be==="right"?Be:"top",align:Ge==="start"||Ge==="end"?Ge:"center"}},[v]),Ne=()=>{const Be=E.current,Ge=ae.current;if(!Be||!Ge)return;const Nt=Be.getBoundingClientRect(),kn=Ge.getBoundingClientRect(),wn=P?Ge.querySelector(".oksTooltipArrow"):null,At=Ge.querySelector(".oksTooltipContent"),qt=wn?Number.parseFloat(window.getComputedStyle(wn).width):Number.NaN,Et=Number.isFinite(qt)&&qt>0?qt:10,Ja=At?Number.parseFloat(window.getComputedStyle(At).paddingLeft):Number.NaN,ve=Number.isFinite(Ja)&&Ja>0?Ja:12,xt=At?Number.parseFloat(window.getComputedStyle(At).paddingTop):Number.NaN,bt=Number.isFinite(xt)&&xt>0?xt:8,Pt=g==="full"?Math.min(kn.width,kn.height)/2:0;J(fh({triggerRect:Nt,tooltipRect:kn,side:le,align:ce,offset:_,collisionPadding:R,crossOffset:H,shouldFlip:Q,arrowSize:Et,arrowPaddingX:ve,arrowPaddingY:bt,arrowCornerInset:Pt,strategy:"fixed"}))};h.useEffect(()=>(T(!0),()=>{typeof window>"u"||(Ce(),Ee())}),[]),h.useEffect(()=>{if(!x||!pe||(Ne(),typeof window>"u"))return;const Be=window.requestAnimationFrame(()=>Ne()),Ge=()=>Ne();window.addEventListener("scroll",Ge,!0),window.addEventListener("resize",Ge);let Nt=null;return typeof ResizeObserver<"u"&&(Nt=new ResizeObserver(Ge),E.current&&Nt.observe(E.current),ae.current&&Nt.observe(ae.current)),()=>{window.cancelAnimationFrame(Be),window.removeEventListener("scroll",Ge,!0),window.removeEventListener("resize",Ge),Nt?.disconnect()}},[x,pe,le,ce,_,R,H,Q,W]),h.useEffect(()=>{if(!x||!pe||typeof document>"u")return;const Be=Ge=>{Z||Ge.key==="Escape"&&Je()};return document.addEventListener("keydown",Be),()=>document.removeEventListener("keydown",Be)},[x,pe,Z]),h.useEffect(()=>{if(!x||!pe||!te||typeof document>"u")return;const Be=Ge=>{const Nt=Ge.target;if(!(Nt instanceof Node)||E.current?.contains(Nt)||ae.current?.contains(Nt))return;const kn=Nt instanceof HTMLElement?Nt:null;kn&&ye&&!ye(kn)||Je()};return document.addEventListener("pointerdown",Be,!0),()=>document.removeEventListener("pointerdown",Be,!0)},[x,pe,te,ye]);const ie=Be=>({"aria-describedby":pe?B:void 0,onPointerEnter:_r(Be?.onPointerEnter,Ge=>He(Ge)),onPointerLeave:_r(Be?.onPointerLeave,()=>Fe()),onFocus:_r(Be?.onFocus,Ge=>He(Ge)),onBlur:_r(Be?.onBlur,()=>{I&&Fe()}),onKeyDown:_r(Be?.onKeyDown,Ge=>{Z||Ge?.key==="Escape"&&Je()})}),xe=pe&&je===null,Ae={position:"fixed",top:je?.top??0,left:je?.left??0,visibility:xe?"hidden":void 0,...je?.arrowX!==void 0?{"--oks-tooltip-arrow-x":`${je.arrowX}px`}:null,...je?.arrowY!==void 0?{"--oks-tooltip-arrow-y":`${je.arrowY}px`}:null},We=typeof p=="number"?Mx(p):100,ke=We<=400?"#000":"#fff",ze={"--oks-tooltip-bg":_x(f,We),"--oks-tooltip-fg":ke},_e=h.isValidElement(i)?(()=>{const Be=i,Ge=Be.ref;return h.cloneElement(Be,{ref:Ox(Ge,Nt=>{E.current=Nt}),...ie(Be.props)})})():a.jsx("span",{ref:Be=>{E.current=Be},...ie(),children:i}),tt=ge||V?"reduced":pe?"open":"closed",rt=h.useMemo(()=>{const Be=je?.placedSide??le,Ge=ce==="center"?"":`-${ce}`;return`${Be}${Ge}`},[je?.placedSide,le,ce]),ut=x&&!me?a.jsxs("div",{ref:Be=>{ae.current=Be},id:B,role:"tooltip","aria-hidden":!pe,"data-open":pe?"true":"false","data-placement":rt,"data-disabled":me?"true":"false","data-size":c,"data-color":f,"data-radius":g,"data-shadow":w,"data-motion":tt,className:os(os("oksTooltipBase",fe?.base),ue),style:{...ze,...Ae},children:[P?a.jsx("span",{className:os("oksTooltipArrow",fe?.arrow)}):null,a.jsx("div",{className:os("oksTooltipContent",fe?.content),children:u})]}):null;return a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"oksTooltipTrigger","data-open":pe?"true":"false","data-trigger-scale":$?"true":"false","data-motion":ge||V?"reduced":"default",children:_e}),a.jsx(vs,{container:X,children:ut})]})}function Ux({size:l=18,...i}){return a.jsxs("svg",{width:l,height:l,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...i,children:[a.jsx("path",{d:"M10 10.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z",stroke:"currentColor",strokeWidth:"1.6"}),a.jsx("path",{d:"M3.6 17.2c1.6-3.1 4-4.4 6.4-4.4s4.8 1.3 6.4 4.4",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}Xt(`@layer components {
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
`);Xt(`@layer components {
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
`);function On(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var Tm=[50,100,200,300,400,500,600,700,800,900,950];function Lx(l){const i=bn(l,50,950);let c=Tm[0]??500,f=Math.abs(c-i);for(const p of Tm){const g=Math.abs(p-i);g<f&&(c=p,f=g)}return c}function ps(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}function Hx(l,i){return ps(l,i)}function Gx(l){const i=typeof l=="string"?l.trim():"";if(!i)return"";const u=i.split(/\s+/).filter(Boolean);if(u.length===0)return"";const c=u[0]?.[0]??"",f=u.length>1?u[u.length-1]?.[0]??"":"";return(c+f).toUpperCase()}function Yx(l){const i=Math.floor(Math.abs(l));return i<1e3?`+${i}`:i<1e6?`+${Math.floor(i/1e3)}K`:i<1e9?`+${Math.floor(i/1e6)}M`:`+${Math.floor(i/1e9)}B`}var de=h.forwardRef((l,i)=>{const{name:u,src:c,size:f="md",color:p="default",radius:g="full",colorDepth:w=500,isBordered:v=!1,isDisabled:b=!1,isFocusable:j=!1,showFallback:y=!1,icon:D,fallback:L,tooltip:C=!1,ImgComponent:_="img",imgProps:R,classNames:H,className:P,style:Q,...$}=l,Z=typeof u=="string"?u:"",te=b,I=p,X=typeof w=="number"?Lx(w):500,W=X<=400?"#000":"#fff",[me,ge]=h.useState(!1);h.useEffect(()=>ge(!1),[c]);const ue=c?me?y===!0:!1:!0,ye={...{"--oks-avatar-bg":ps(I,X),"--oks-avatar-bg-50":ps(I,50),"--oks-avatar-fg":W,"--oks-avatar-border":Hx(I,X)},...Q??{}},ne=$["aria-label"],B=typeof ne=="string"?ne:Z||void 0,q=j===!0&&$.tabIndex===void 0?0:$.tabIndex,ee=On(On("oksAvatar",H?.base),P),oe=L??(Z.trim().length>0?a.jsx("span",{className:On("oksAvatarInitials",H?.name),"aria-hidden":"true",children:Gx(Z)}):a.jsx("span",{className:On("oksAvatarFallbackIcon",H?.icon),"aria-hidden":"true",children:D??a.jsx(Ux,{})})),pe=a.jsx("div",{...$,ref:i,className:ee,"data-size":f,"data-color":I,"data-radius":g,"data-bordered":v?"true":void 0,"data-focusable":j?"true":void 0,"data-disabled":te?"true":void 0,role:ue?"img":$.role,"aria-label":ue?B:$["aria-label"],tabIndex:te?$.tabIndex:q,style:ye,children:ue?a.jsx("span",{className:On("oksAvatarFallback",H?.fallback),children:oe}):a.jsx(_,{...R,className:On(On("oksAvatarImage",H?.img),R?.className),src:c,alt:R?.alt??Z,draggable:!1,onError:ae=>{ge(!0),R?.onError?.(ae)}})}),x=C===!0?Z:typeof C=="object"&&C!==null?"content"in C?C.content??Z:Z:null,T=typeof C=="object"&&C!==null?"props"in C?C.props:C:void 0;if(!((C===!0||typeof C=="object"&&C!==null)&&typeof x=="string"?x.trim().length>0:x!=null))return pe;const E=te?a.jsx("span",{className:"oksAvatarTooltipWrapper",children:pe}):pe;return a.jsx(Re,{...T,content:x,children:E})});de.displayName="Avatar";var $a=h.forwardRef((l,i)=>{const{children:u,max:c=5,total:f,size:p="md",color:g="default",radius:w="full",isGrid:v=!1,isDisabled:b,isBordered:j=!1,renderCount:y,classNames:D,className:L,style:C,..._}=l,R=Le.Children.toArray(u),H=Math.max(0,Math.floor(c)),P=typeof f=="number"?f-H:R.length-H,Q=P>0?P:0,$={...C??{}},Z=On(On("oksAvatarGroup",D?.base),L);return a.jsxs("div",{..._,ref:i,className:Z,"data-grid":v?"true":void 0,"data-color":g,"data-radius":w,"data-bordered":j?"true":void 0,"data-disabled":b?"true":void 0,style:$,children:[a.jsx("div",{className:"oksAvatarGroupStack","data-grid":v?"true":void 0,children:R.slice(0,H).map((te,I)=>{if(Le.isValidElement(te)){const X=te,W={size:p};return X.props?.radius===void 0&&(W.radius=w),X.props?.isBordered===void 0&&(W.isBordered=j),X.props?.isDisabled===void 0&&(W.isDisabled=b),X.props?.color===void 0&&(W.color=g),a.jsx("div",{className:"oksAvatarGroupItem",children:Le.cloneElement(te,W)},I)}return a.jsx("div",{className:"oksAvatarGroupItem",children:te},I)})}),Q>0?a.jsx("span",{className:On("oksAvatarGroupOverflowText",D?.count),style:{"--oks-avatar-group-count-color":ps(g,600)},children:y?y(Q):Yx(Q)}):null]})});$a.displayName="AvatarGroup";Xt(`@layer components {
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
`);function Gc(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function rs(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}var Ve=h.forwardRef((l,i)=>{const{children:u,content:c,max:f,variant:p="solid",color:g="default",size:w="md",shape:v="rectangle",placement:b="top-right",showOutline:j=!0,disableOutline:y=!1,disableAnimation:D=!1,isInvisible:L=!1,isOneChar:C=!1,isDot:_=!1,classNames:R,className:H,style:P,...Q}=l,$=y?!1:j,Z=c!=null,te=!L&&(_||Z),I=typeof f=="number"&&Number.isFinite(f)&&f>0?Math.floor(f):void 0,X=!_&&typeof c=="number"&&I!==void 0&&c>I?`${I}+`:c,W={"--oks-badge-tone":rs(g,500),"--oks-badge-tone-50":rs(g,50),"--oks-badge-tone-100":rs(g,100),"--oks-badge-tone-700":rs(g,700),"--oks-badge-solid-fg":"#fff"},me=te?a.jsx("span",{className:Gc("oksBadgeBadge",R?.badge),children:_?null:X}):null;return a.jsxs("span",{...Q,ref:i,"data-variant":p,"data-color":g,"data-size":w,"data-shape":v,"data-placement":b,"data-outline":$?"true":"false","data-dot":_?"true":"false","data-one-char":C?"true":"false","data-invisible":L?"true":"false","data-disable-animation":D?"true":"false",className:Gc(Gc("oksBadge",R?.base),H),style:{...W,...P},children:[u,me]})});Ve.displayName="Badge";function Yt(l){return null}Yt.displayName="Tab";Xt(`@layer components {
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
`);function Ca(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function Yc(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}function qc(l){return String(l).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function Dm(l){return h.isValidElement(l)&&l.type===Yt}function Cm(l){return l.startsWith(".$")?l.slice(2):l}function Bm(l,i){for(const u of l)if(!i.has(u))return u}var su=h.forwardRef(function(i,u){const{children:c,variant:f="solid",color:p="default",size:g="md",radius:w="full",fullWidth:v=!1,items:b,disabledKeys:j,selectedKey:y,defaultSelectedKey:D,shouldSelectOnPressUp:L=!0,keyboardActivation:C="automatic",disableCursorAnimation:_=!1,isDisabled:R=!1,disableAnimation:H=!1,classNames:P,className:Q,placement:$="top",isVertical:Z=!1,destroyInactiveTabPanel:te=!0,onSelectionChange:I,...X}=i,W=h.useMemo(()=>{const le=new Set;for(const ce of j??[])le.add(ce);return le},[j]),me=h.useMemo(()=>{if(b!==void 0){const ce=c;if(typeof ce!="function")return[];const Ne=[];for(const ie of b){const xe=ce(ie);if(!Dm(xe))continue;const Ae=xe.key;Ae!=null&&Ne.push({key:typeof Ae=="string"?Cm(Ae):Ae,props:xe.props})}return Ne}const le=[];for(const ce of h.Children.toArray(c)){if(!Dm(ce))continue;const Ne=ce.key;Ne!=null&&le.push({key:typeof Ne=="string"?Cm(Ne):Ne,props:ce.props})}return le},[c,b]),ge=h.useMemo(()=>me.map(le=>le.key),[me]),ue=y!==void 0,[fe,ye]=h.useState(()=>D!==void 0?D:Bm(ge,W)),ne=h.useMemo(()=>Z?!0:$==="start"||$==="end",[Z,$]),B=h.useMemo(()=>Z?"start":$,[Z,$]),q=h.useMemo(()=>{const le=ue?y:fe;return le!=null&&ge.includes(le)&&!W.has(le)?le:Bm(ge,W)},[ue,W,fe,ge,y]),ee=h.useCallback(le=>{R||W.has(le)||ge.includes(le)&&(ue||ye(le),I?.(le))},[ue,W,R,ge,I]),oe=h.useRef(new Map),pe=h.useCallback((le,ce)=>{oe.current.set(le,ce)},[]),x=h.useId(),T=h.useMemo(()=>`oks-${X.id?qc(X.id):qc(`tabs-${x}`)}`,[x,X.id]),V=h.useCallback(le=>{const ce=qc(le);return{tab:`${T}-tab-${ce}`,panel:`${T}-panel-${ce}`}},[T]),E=h.useRef(null),ae=h.useRef(null),re=h.useCallback(()=>{if(f!=="underlined")return;const le=E.current,ce=ae.current;if(!le||!ce)return;const Ne=q;if(Ne===void 0)return;const ie=oe.current.get(Ne);if(!ie)return;const xe=le.getBoundingClientRect(),Ae=ie.getBoundingClientRect();if(ne){const We=Math.max(0,Ae.top-xe.top),ke=Ae.height;ce.style.setProperty("--oks-tabs-cursor-y",`${We}px`),ce.style.setProperty("--oks-tabs-cursor-h",`${ke}px`)}else{const We=Math.max(0,Ae.left-xe.left),ke=Ae.width;ce.style.setProperty("--oks-tabs-cursor-x",`${We}px`),ce.style.setProperty("--oks-tabs-cursor-w",`${ke}px`)}},[ne,q,f]);h.useEffect(()=>{re()},[re]),h.useEffect(()=>{if(f!=="underlined")return;const le=()=>re();return window.addEventListener("resize",le),()=>window.removeEventListener("resize",le)},[re,f]);const se=le=>{if(R||!E.current)return;const Ne=ge;if(Ne.length===0)return;const ie=globalThis.document?.activeElement,xe=(()=>{for(const tt of Ne){const rt=oe.current.get(tt);if(rt&&ie&&rt===ie)return tt}return q})(),Ae=xe!==void 0?Ne.indexOf(xe):-1,We=tt=>{if(Ne.length===0)return;let rt=Ae>=0?Ae:0;for(let ut=0;ut<Ne.length;ut++){rt=(rt+tt+Ne.length)%Ne.length;const Be=Ne[rt];if(W.has(Be))continue;oe.current.get(Be)?.focus(),C==="automatic"&&ee(Be);return}},ke=tt=>{const rt=tt==="start"?Ne:[...Ne].reverse();for(const ut of rt){if(W.has(ut))continue;oe.current.get(ut)?.focus(),C==="automatic"&&ee(ut);return}},ze=!ne,_e=le.key;if(_e==="Home"){le.preventDefault(),ke("start");return}if(_e==="End"){le.preventDefault(),ke("end");return}if(ze&&_e==="ArrowRight"||!ze&&_e==="ArrowDown"){le.preventDefault(),We(1);return}if(ze&&_e==="ArrowLeft"||!ze&&_e==="ArrowUp"){le.preventDefault(),We(-1);return}if(C==="manual"&&(_e==="Enter"||_e===" ")){if(!ie)return;for(const tt of Ne){const rt=oe.current.get(tt);if(rt&&rt===ie){le.preventDefault(),ee(tt);return}}}},je=Ca(Ca("oksTabsRoot",P?.base),Q),J=Ca("oksTablist",P?.tabList),he=Ca("oksTabsCursor",P?.cursor),Ce="oksTabsPanels",Ee=Ca("oksTabsPanel",P?.panel),Fe={...{"--oks-tabs-tone":Yc(p,500),"--oks-tabs-tone-50":Yc(p,50),"--oks-tabs-tone-700":Yc(p,700)},...X.style??{}},Je=h.useMemo(()=>{if(q!==void 0)return me.find(le=>le.key===q)},[me,q]);return a.jsxs("div",{...X,ref:u,className:je,style:Fe,"data-variant":f,"data-color":p,"data-size":g,"data-radius":w,"data-full-width":v?"true":"false","data-placement":B,"data-vertical":ne?"true":"false","data-disabled":R?"true":"false","data-motion":H?"reduced":"default","data-disable-cursor-animation":_?"true":"false",children:[a.jsxs("div",{className:J,role:"tablist","aria-orientation":ne?"vertical":"horizontal",ref:E,onKeyDown:se,children:[f==="underlined"?a.jsx("div",{className:he,ref:ae,"aria-hidden":"true"}):null,me.map(le=>{const ce=le.key===q,Ne=R||W.has(le.key),ie=V(le.key),xe=Ca("oksTabsTabWrapper",P?.tabWrapper),Ae=Ca("oksTabsTab",P?.tab),We=Ca("oksTabsTabContent",P?.tabContent),ke=le.props.shouldSelectOnPressUp??L,ze=()=>ee(le.key),_e=ut=>{pe(le.key,ut),le.props.tabRef&&(le.props.tabRef.current=ut)},tt={role:"tab",id:ie.tab,"aria-selected":ce,"aria-controls":ie.panel,tabIndex:ce?0:-1,"data-selected":ce?"true":void 0,"data-disabled":Ne?"true":void 0},rt=a.jsx("span",{className:We,children:le.props.title});return a.jsx("div",{className:xe,children:le.props.href?a.jsx("a",{...tt,className:Ae,href:le.props.href,target:le.props.target,rel:le.props.rel,download:le.props.download,ping:le.props.ping,referrerPolicy:le.props.referrerPolicy,"aria-disabled":Ne?"true":void 0,onClick:Ne?ut=>{ut.preventDefault()}:ke?()=>ze():void 0,onMouseDown:Ne||ke?void 0:ut=>{ut.preventDefault(),ze()},ref:_e,children:rt}):a.jsx("button",{...tt,type:"button",className:Ae,disabled:Ne,onClick:ke?ze:void 0,onMouseDown:ke?void 0:ut=>{ut.preventDefault(),ze()},ref:_e,children:rt})},String(le.key))})]}),a.jsx("div",{className:Ce,children:te?Je?a.jsx("div",{className:Ee,role:"tabpanel",id:V(Je.key).panel,"aria-labelledby":V(Je.key).tab,children:Je.props.children}):null:me.map(le=>{const ce=le.key===q,Ne=V(le.key);return a.jsx("div",{className:Ee,role:"tabpanel",id:Ne.panel,"aria-labelledby":Ne.tab,hidden:!ce,children:le.props.children},String(le.key))})})]})});su.displayName="Tabs";function qx(l){return l.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")}function Vc(){return typeof window<"u"&&typeof document<"u"}function Vx(l){const i=h.useCallback(()=>!Vc()||!l?null:new URL(window.location.href).searchParams.get(l),[l]),u=h.useCallback(f=>{if(!Vc()||!l)return;const p=new URL(window.location.href),g=p.searchParams;f==null||f===""?g.delete(l):g.set(l,f);const w=`${p.pathname}?${g.toString()}${p.hash??""}`;window.history.pushState({},"",w);const v=new PopStateEvent("popstate");window.dispatchEvent(v)},[l]),c=h.useCallback(f=>{if(!Vc()||!l)return()=>{};const p=()=>f(i());return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[i,l]);return{get:i,set:u,subscribe:c}}function Xx(l,i){return{...l??{},...i??{}}}var Kx=h.forwardRef(function(i,u){const{data:c,defaultTab:f=0,value:p,onChange:g,className:w,orientation:v="horizontal",tablistPosition:b="start",mode:j="basic",tabId:y="tab",variant:D,size:L,radius:C,triggerProps:_,activeTriggerProps:R,allowKeyboardNavigation:H=!0,renderLazy:P=!0,idStrategy:Q}=i,$=h.useMemo(()=>c.map(J=>({...J,id:J.id??(Q?Q(J.title):qx(J.title))})),[c,Q]),Z=Vx(j==="url"?y:void 0),te=h.useCallback(J=>J>=0&&J<$.length?J:0,[$.length]),I=h.useCallback(()=>{if(j!=="url")return null;const J=Z.get();if(!J)return null;const he=$.findIndex(Ce=>Ce.id===J);return he>=0?he:null},[$,j,Z]),X=h.useMemo(()=>{const J=I();return J!==null?J:te(f)},[f,te,I]),W=typeof p=="number",[me,ge]=h.useState(X),ue=W?p:me;h.useEffect(()=>j!=="url"?void 0:Z.subscribe(he=>{const Ce=he?$.findIndex(Ee=>Ee.id===he):-1;if(Ce>=0)W||ge(Ce),g?.(Ce);else{const Ee=te(f);W||ge(Ee),g?.(Ee)}}),[f,te,W,$,j,g,Z]);const fe=["oksTabsRoot",w].filter(Boolean).join(" "),ye=h.useRef([]);ye.current=[];const ne=J=>{ye.current[J]?.focus()},B=J=>{if(W||ge(J),g?.(J),j==="url"){const he=$[J]?.id;he&&Z.set(he)}},q=J=>he=>{he.preventDefault(),B(J)},ee=J=>he=>{if(!H)return;const Ce=v==="horizontal",Ee=he.key;if(Ee==="Home"){he.preventDefault(),ne(0);return}if(Ee==="End"){he.preventDefault(),ne($.length-1);return}if(Ce&&Ee==="ArrowRight"||!Ce&&Ee==="ArrowDown"){he.preventDefault();const He=(J+1)%$.length;ne(He);return}if(Ce&&Ee==="ArrowLeft"||!Ce&&Ee==="ArrowUp"){he.preventDefault();const He=(J-1+$.length)%$.length;ne(He);return}(Ee==="Enter"||Ee===" ")&&(he.preventDefault(),B(J))},oe=L??"comfortable",pe=oe==="compact"?"sm":"md";let x="underline",T={height:4},V={underline:{}};const E=D;E&&(E==="underlineThick"&&(x="underline"),E==="segmented"&&(x="segmented"),E==="pill"&&(x="pill"),E==="dot"&&(x="dot"),E==="outline"&&(x="outline"),E==="underlineThick"?(T={height:4,...T},V={underline:{widthStrategy:"tab"}}):E==="outline"&&(V={outline:{activeEmphasis:"stroke"}}));const ae=J=>J?Xx(_,R):_??{},re=h.useRef(null),se=h.useRef(null);h.useEffect(()=>{if(x!=="underline")return;const J=re.current,he=se.current,Ce=ye.current[ue];if(!J||!he||!Ce)return;const Ee=J.getBoundingClientRect(),He=Ce.getBoundingClientRect();if(v==="horizontal"){const Fe=Math.max(0,He.left-Ee.left),Je=He.width,le=typeof T?.height=="number"?`${T?.height}px`:T?.height??"2px";he.style.setProperty("--oks-tabs-indicator-x",`${Fe}px`),he.style.setProperty("--oks-tabs-indicator-w",`${Je}px`),he.style.setProperty("--oks-tabs-indicator-h",le),T?.color&&he.style.setProperty("--oks-tabs-indicator-color",T.color)}else{const Fe=Math.max(0,He.top-Ee.top),Je=He.height,le=typeof T?.height=="number"?`${T?.height}px`:T?.height??"2px";he.style.setProperty("--oks-tabs-indicator-y",`${Fe}px`),he.style.setProperty("--oks-tabs-indicator-h",`${Je}px`),he.style.setProperty("--oks-tabs-indicator-w",le),T?.color&&he.style.setProperty("--oks-tabs-indicator-color",T.color)}},[ue,x,T,v]),h.useEffect(()=>{if(x!=="underline")return;const J=()=>{const he=se.current;if(!he)return;const Ce=ue,Ee=ye.current[Ce],He=re.current;if(!Ee||!He)return;const Fe=He.getBoundingClientRect(),Je=Ee.getBoundingClientRect();if(v==="horizontal"){const le=Math.max(0,Je.left-Fe.left),ce=Je.width;he.style.setProperty("--oks-tabs-indicator-x",`${le}px`),he.style.setProperty("--oks-tabs-indicator-w",`${ce}px`)}else{const le=Math.max(0,Je.top-Fe.top),ce=Je.height;he.style.setProperty("--oks-tabs-indicator-y",`${le}px`),he.style.setProperty("--oks-tabs-indicator-h",`${ce}px`)}};return window.addEventListener("resize",J),()=>window.removeEventListener("resize",J)},[ue,x,v]);const je=J=>typeof J=="function"?J():J;return a.jsxs("div",{className:fe,"data-orientation":v,"data-tablist-position":b,"data-density":oe,style:{...C!==void 0?{"--oks-tabs-radius":typeof C=="number"?`${C}px`:C==="none"?"0px":C==="sm"?"0.25rem":C==="md"?"0.5rem":C==="lg"?"0.75rem":C==="full"?"9999px":void 0}:void 0},ref:u,children:[a.jsxs("div",{className:"oksTablist",role:"tablist","aria-orientation":v,"data-appearance":x,"data-underline-position":V?.underline?.position,"data-outline-active":V?.outline?.activeEmphasis,ref:re,children:[x==="underline"?a.jsx("div",{className:"oksTabsIndicator",ref:se,"aria-hidden":"true"}):null,$.map((J,he)=>{const Ce=he===ue,Ee=ae(Ce),He=`oks-tab-${J.id}`,Fe=`oks-panel-${J.id}`;return a.jsx("button",{...Ee,ref:Je=>{ye.current[he]=Je},role:"tab","aria-selected":Ce,"aria-controls":Fe,id:He,tabIndex:Ce?0:-1,title:J.title,onClick:q(he),onKeyDown:ee(he),"data-active":Ce?"true":"false","data-size":pe,"data-elevated":x==="pill"&&V?.pill?.elevated&&Ce?"true":void 0,className:["oksTabTrigger",Ee?.className].filter(Boolean).join(" "),children:J.title},J.id)})]}),a.jsx("div",{className:"oksTabsPanels",children:P?a.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${$[ue]?.id}`,"aria-labelledby":`oks-tab-${$[ue]?.id}`,children:je($[ue]?.content)}):$.map((J,he)=>a.jsx("div",{className:"oksTabsPanel",role:"tabpanel",id:`oks-panel-${J.id}`,"aria-labelledby":`oks-tab-${J.id}`,hidden:he!==ue,children:je(J.content)},J.id))})]})});Kx.displayName="TabsLegacy";var ph=h.createContext(null);function iu(){const l=h.useContext(ph);if(!l)throw new Error("oks-ui Tabs: TabsRoot is required");return l}function Xc(l){return String(l).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_:.]/g,"")}function Kc(){return typeof window<"u"&&typeof document<"u"}function Qx(l){const i=h.useCallback(()=>!Kc()||!l?null:new URL(window.location.href).searchParams.get(l),[l]),u=h.useCallback(f=>{if(!Kc()||!l)return;const p=new URL(window.location.href),g=p.searchParams;f==null||f===""?g.delete(l):g.set(l,f);const w=`${p.pathname}?${g.toString()}${p.hash??""}`;window.history.pushState({},"",w);const v=new PopStateEvent("popstate");window.dispatchEvent(v)},[l]),c=h.useCallback(f=>{if(!Kc()||!l)return()=>{};const p=()=>f(i());return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[i,l]);return{get:i,set:u,subscribe:c}}var Zx=h.forwardRef(function(i,u){const{id:c,value:f,defaultValue:p,onChange:g,mode:w="basic",tabId:v="tab",orientation:b="horizontal",tablistPosition:j="start",variant:y,size:D="comfortable",radius:L,renderLazy:C=!0,className:_,children:R}=i,H=Qx(w==="url"?v:void 0),P=h.useMemo(()=>{if(w==="url"){const fe=H.get();if(fe!==null)return fe}return p},[p,w,H]),Q=f!==void 0,[$,Z]=h.useState(P),te=Q?f:$;h.useEffect(()=>w!=="url"?void 0:H.subscribe(ye=>{ye!==null&&(Q||Z(ye),g?.(ye))}),[Q,w,g,H]);const I=h.useCallback(fe=>{Q||Z(fe),g?.(fe),w==="url"&&H.set(String(fe))},[Q,w,g,H]),X=h.useId(),W=h.useMemo(()=>`oks-${Xc(c||`tabs-${X}`)}`,[X,c]),me=h.useCallback(fe=>{const ye=Xc(fe);return{tab:`${W}-tab-${ye}`,panel:`${W}-panel-${ye}`}},[W]),ge=h.useMemo(()=>{let fe="underline",ye={height:4},ne={underline:{widthStrategy:"tab"}};const B=y;return B&&(B==="underlineThick"&&(fe="underline"),B==="segmented"&&(fe="segmented"),B==="pill"&&(fe="pill"),B==="dot"&&(fe="dot"),B==="outline"&&(fe="outline"),B==="underlineThick"?(ye={height:4},ne={underline:{widthStrategy:"tab"}}):B==="outline"&&(ne={outline:{activeEmphasis:"stroke"}})),{value:te,setValue:I,orientation:b,appearance:fe,density:D,radius:L,indicator:ye,appearanceOptions:ne,renderLazy:C,getIds:me,isActive:q=>q===te}},[y,D,te,me,b,L,C,I]),ue=["oksTabsRoot",_].filter(Boolean).join(" ");return a.jsx(ph.Provider,{value:ge,children:a.jsx("div",{ref:u,id:c,className:ue,"data-orientation":b,"data-tablist-position":j,"data-density":D,"data-underline-position":ge.appearanceOptions?.underline?.position==="top"?"top":void 0,style:{...L!==void 0?{"--oks-tabs-radius":typeof L=="number"?`${L}px`:L==="none"?"0px":L==="sm"?"0.25rem":L==="md"?"0.5rem":L==="lg"?"0.75rem":L==="full"?"9999px":void 0}:void 0},children:R})})});Zx.displayName="TabsRoot";var Fx=h.forwardRef(function(i,u){const{className:c,...f}=i,p=iu(),g=h.useRef(null),w=["oksTablist",c].filter(Boolean).join(" "),v=h.useRef(null),b=j=>{const y=g.current;if(!y)return;const D=Array.from(y.querySelectorAll('[role="tab"]'));if(D.length===0)return;const L=p.orientation==="horizontal",C=D.findIndex(R=>R.getAttribute("aria-selected")==="true"),_=j.key;if(_==="Home"){j.preventDefault(),D[0]?.focus();return}if(_==="End"){j.preventDefault(),D[D.length-1]?.focus();return}if(L&&_==="ArrowRight"||!L&&_==="ArrowDown"){j.preventDefault();const R=(C+1)%D.length;D[R]?.focus();return}if(L&&_==="ArrowLeft"||!L&&_==="ArrowUp"){j.preventDefault();const R=(C-1+D.length)%D.length;D[R]?.focus();return}};return h.useEffect(()=>{if(p.appearance!=="underline")return;const j=g.current,y=v.current;if(!j||!y)return;const D=j.querySelector('[role="tab"][aria-selected="true"]');if(!D)return;const L=j.getBoundingClientRect(),C=D.getBoundingClientRect(),_=D.querySelector(".oksTabLabel"),H=(p.appearanceOptions?.underline?.widthStrategy??"tab")==="label"&&_?_.getBoundingClientRect().width:C.width,P=p.appearanceOptions?.underline?.offset??0,Q=p.appearanceOptions?.underline?.cap??"square";if(p.orientation==="horizontal"){const $=Math.max(0,C.left-L.left),Z=H,te=typeof p.indicator?.height=="number"?`${p.indicator.height}px`:p.indicator?.height??"2px";y.style.setProperty("--oks-tabs-indicator-x",`${$}px`),y.style.setProperty("--oks-tabs-indicator-w",`${Z}px`),y.style.setProperty("--oks-tabs-indicator-h",te),p.indicator?.color&&y.style.setProperty("--oks-tabs-indicator-color",p.indicator.color),y.style.setProperty("--oks-tabs-indicator-offset-y",`${P}px`),y.style.setProperty("--oks-tabs-indicator-radius",Q==="round"?"9999px":"0px")}else{const $=Math.max(0,C.top-L.top),Z=C.height,te=typeof p.indicator?.height=="number"?`${p.indicator.height}px`:p.indicator?.height??"2px";y.style.setProperty("--oks-tabs-indicator-y",`${$}px`),y.style.setProperty("--oks-tabs-indicator-h",`${Z}px`),y.style.setProperty("--oks-tabs-indicator-w",te),p.indicator?.color&&y.style.setProperty("--oks-tabs-indicator-color",p.indicator.color),y.style.setProperty("--oks-tabs-indicator-offset-x",`${P}px`),y.style.setProperty("--oks-tabs-indicator-radius",Q==="round"?"9999px":"0px")}},[p.value,p.appearance,p.indicator,p.orientation]),h.useEffect(()=>{if(p.appearance!=="underline")return;const j=()=>{const y=g.current,D=v.current;if(!y||!D)return;const L=y.querySelector('[role="tab"][aria-selected="true"]');if(!L)return;const C=y.getBoundingClientRect(),_=L.getBoundingClientRect();if(p.orientation==="horizontal"){const R=Math.max(0,_.left-C.left),H=_.width;D.style.setProperty("--oks-tabs-indicator-x",`${R}px`),D.style.setProperty("--oks-tabs-indicator-w",`${H}px`)}else{const R=Math.max(0,_.top-C.top),H=_.height;D.style.setProperty("--oks-tabs-indicator-y",`${R}px`),D.style.setProperty("--oks-tabs-indicator-h",`${H}px`)}};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[p.appearance,p.orientation,p.value]),a.jsxs("div",{...f,className:w,role:"tablist","aria-orientation":p.orientation,"data-appearance":p.appearance,"data-outline-active":p.appearanceOptions?.outline?.activeEmphasis,"data-underline-position":p.appearanceOptions?.underline?.position,ref:j=>{g.current=j,typeof u=="function"?u(j):u&&"current"in u&&(u.current=j)},onKeyDown:b,children:[p.appearance==="underline"?a.jsx("div",{className:"oksTabsIndicator",ref:v,"aria-hidden":"true"}):null,i.children]})});Fx.displayName="TabList";var $x=h.forwardRef(function(i,u){const{value:c,disabled:f,className:p,children:g}=i,w=iu(),v=w.isActive(c),b=w.getIds(c),j=w.density==="compact"?"sm":"md",y=["oksTabTrigger",p].filter(Boolean).join(" ");return a.jsx("button",{ref:u,className:y,role:"tab",id:b.tab,"aria-selected":v,"aria-controls":b.panel,tabIndex:v?0:-1,disabled:f,"data-active":v?"true":"false","data-size":j,"data-elevated":w.appearance==="pill"&&w.appearanceOptions?.pill?.elevated&&v?"true":void 0,onClick:()=>w.setValue(c),children:a.jsx("span",{className:"oksTabLabel",children:g})})});$x.displayName="TabTrigger";var Ix=h.forwardRef(function(i,u){const{value:c,keepMounted:f,className:p,children:g}=i,w=iu(),v=w.getIds(c),b=w.isActive(c),j=["oksTabsPanel",p].filter(Boolean).join(" ");return!b&&f===void 0&&w.renderLazy?null:a.jsx("div",{ref:u,role:"tabpanel",id:v.panel,"aria-labelledby":v.tab,hidden:!b,className:j,children:g})});Ix.displayName="TabPanel";Xt(`@layer components {
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
`);function Ho(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var Nm=[50,100,200,300,400,500,600,700,800,900,950];function Qc(l){const i=bn(l,50,950);let c=Nm[0]??500,f=Math.abs(c-i);for(const p of Nm){const g=Math.abs(p-i);g<f&&(c=p,f=g)}return c}function Go(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}var Xe=h.forwardRef((l,i)=>{const{children:u,variant:c="solid",size:f="md",color:p="default",radius:g="full",colorDepth:w=500,avatar:v,startContent:b,endContent:j,isDisabled:y=!1,onClose:D,classNames:L,className:C,style:_,...R}=l,H=y,P=typeof w=="number"?Qc(w):500,Q=Qc(P+100),$=Qc(P+200),Z=P<=400?"#000":"#fff",te={"--oks-chip-tone":Go(p,P),"--oks-chip-tone-hover":Go(p,Q),"--oks-chip-tone-active":Go(p,$),"--oks-chip-tone-50":Go(p,50),"--oks-chip-tone-100":Go(p,100),"--oks-chip-tone-700":Go(p,700),"--oks-chip-solid-fg":Z},I=j??a.jsx("span",{"aria-hidden":"true",children:"×"}),X=typeof D=="function"?a.jsx("button",{type:"button",className:Ho("oksChipCloseButton",L?.closeButton),"aria-label":"Close",disabled:H,onClick:me=>{me.stopPropagation(),H||D(me)},children:I}):null;return a.jsxs("div",{...R,ref:i,"aria-disabled":H?"true":void 0,"data-variant":c,"data-size":f,"data-color":p,"data-radius":g,"data-disabled":H?"true":"false",className:Ho(Ho("oksChip",L?.base),C),style:{...te,..._},children:[c==="dot"?a.jsx("span",{className:Ho("oksChipDot",L?.dot),"aria-hidden":"true"}):null,v!=null?a.jsx("span",{className:Ho("oksChipAvatar",L?.avatar),children:v}):null,b,u!=null?a.jsx("span",{className:Ho("oksChipContent",L?.content),children:u}):null,X??j]})});Xe.displayName="Chip";Xt(`@layer components {
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
`);function ot(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function Am(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}function mh(...l){return i=>{for(const u of l)u&&(typeof u=="function"?u(i):u.current=i)}}function Jx(l){return l.startsWith(".$")?l.slice(2):l}function Wx(l){const[i,u]=l.split("-");return{side:i==="top"||i==="bottom"||i==="left"||i==="right"?i:"bottom",align:u==="start"||u==="end"?u:"center"}}var hh=h.createContext(null);function vh(){const l=h.useContext(hh);if(!l)throw new Error("oks-ui Dropdown: missing context.");return l}var gh=h.createContext(null);function Px(){const l=h.useContext(gh);if(!l)throw new Error("oks-ui DropdownMenu: missing context.");return l}function ls(l){return h.isValidElement(l)&&l.type===Te}function eb(l){return h.isValidElement(l)&&l.type===Hr}function tb(l,i){return typeof i.textValue=="string"?i.textValue:typeof i.title=="string"?i.title:typeof i.children=="string"?i.children:String(l)}function ss(l){const i=l.key;if(i==null)return null;if(typeof i=="string"){const u=Jx(i).trim();return u.length>0?u:null}return i}function Em(l,i){for(const u of l)if(!i.has(u))return u;return null}function zm(l,i){for(let u=l.length-1;u>=0;u--){const c=l[u];if(c&&!i.has(c))return c}return null}function Om(l,i,u,c,f){if(l.length===0)return null;const p=u!==null?l.indexOf(u):-1;if(!f){for(let w=p+c;w>=0&&w<l.length;w+=c){const v=l[w];if(v!=null&&!i.has(v))return v}return null}let g=p;for(let w=0;w<l.length;w++){g=(g+c+l.length)%l.length;const v=l[g];if(v!=null&&!i.has(v))return v}return null}function nb(l){return!(l.key.length!==1||l.ctrlKey||l.metaKey||l.altKey)}function Zc(l){const i=new Set;for(const u of l??[])i.add(u);return i}var ft=h.forwardRef((l,i)=>{const{children:u,isOpen:c,defaultOpen:f=!1,onOpenChange:p,placement:g="bottom-start",offset:w=8,containerPadding:v=8,shouldFlip:b=!0,portalContainer:j,isDismissable:y=!0,isKeyboardDismissDisabled:D=!1,shouldCloseOnInteractOutside:L,closeOnSelect:C=!0,classNames:_,className:R,style:H}=l,[P,Q]=h.useState(f),$=c!==void 0?c:P,Z=h.useRef(null),te=h.useRef(null),I=h.useRef("programmatic"),X=h.useRef(void 0),W=h.useId(),me=`oks-dropdown-trigger-${W}`,ge=`oks-dropdown-menu-${W}`,ue=h.useCallback((ne,B=!0)=>{if(ne||X.current?.(),c===void 0&&Q(ne),p?.(ne),!ne&&B){const q=Z.current;q&&window.requestAnimationFrame(()=>{q.focus?.()})}},[c,p]),fe=h.useCallback(()=>ue(!$,!1),[$,ue]);h.useEffect(()=>{if(!$)return;const ne=q=>{q.key==="Escape"&&(D||(q.preventDefault(),ue(!1,!0)))},B=q=>{if(!y)return;const ee=q.target;if(!(ee instanceof Element))return;const oe=Z.current,pe=te.current;oe&&oe.contains(ee)||pe&&pe.contains(ee)||L&&!L(ee)||ue(!1,!0)};return document.addEventListener("keydown",ne),document.addEventListener("pointerdown",B,{capture:!0}),()=>{document.removeEventListener("keydown",ne),document.removeEventListener("pointerdown",B,{capture:!0})}},[$,y,D,ue,L]);const ye={open:$,setOpen:ue,toggle:fe,openSourceRef:I,menuOnCloseRef:X,placement:g,offset:w,containerPadding:v,shouldFlip:b,portalContainer:j,isDismissable:y,isKeyboardDismissDisabled:D,...L?{shouldCloseOnInteractOutside:L}:{},closeOnSelect:C,triggerRef:Z,menuRef:te,triggerId:me,menuId:ge,..._?{baseClassNames:_}:{}};return a.jsx(hh.Provider,{value:ye,children:a.jsx("div",{ref:i,className:ot(ot("oksDropdown",_?.base),R),style:H,children:a.jsx("div",{className:ot("oksDropdownContent",_?.content),children:u})})})});ft.displayName="Dropdown";var pt=h.forwardRef((l,i)=>{const{children:u}=l,c=vh(),f=u,p=f?.ref,g=v=>{f?.props?.onClick?.(v),!v?.defaultPrevented&&(c.openSourceRef.current="pointer",c.toggle())},w=v=>{f?.props?.onKeyDown?.(v),!v?.defaultPrevented&&(v.key==="Enter"||v.key===" "||v.key==="ArrowDown")&&(v.preventDefault(),c.openSourceRef.current="keyboard",c.setOpen(!0,!1))};return h.cloneElement(u,{id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open?"true":"false","aria-controls":c.menuId,onClick:g,onKeyDown:w,ref:mh(p,i,v=>{c.triggerRef.current=v instanceof HTMLElement?v:null}),className:ot("oksDropdownTrigger",f?.props?.className)})});pt.displayName="DropdownTrigger";var vt=l=>{const{children:i,items:u,onAction:c,disabledKeys:f,onClose:p,selectionMode:g="none",selectedKeys:w,defaultSelectedKeys:v,onSelectionChange:b,disallowEmptySelection:j=!1,variant:y="solid",color:D="default",autoFocus:L=!1,hideEmptyContent:C=!1,hideSelectedIcon:_=!1,shouldFocusWrap:R=!1,closeOnSelect:H,disableAnimation:P=!1,classNames:Q,itemClasses:$,topContent:Z,bottomContent:te,emptyContent:I="No items."}=l,X=vh(),W=H??X.closeOnSelect,me=h.useMemo(()=>Zc(f),[f]),ge=h.useMemo(()=>({"--oks-dropdown-tone":Am(D,500),"--oks-dropdown-tone-600":Am(D,600)}),[D]),[ue,fe]=h.useState(()=>v==="all"?"all":Zc(v)),ye=h.useMemo(()=>w==="all"?"all":w!==void 0?Zc(w):ue,[w,ue]),ne=h.useCallback(ie=>{w===void 0&&fe(ie)},[w]),{side:B,align:q}=h.useMemo(()=>Wx(X.placement),[X.placement]),[ee,oe]=h.useState(null),pe=h.useRef(new Map),x=h.useRef(new Map),T=h.useRef({buffer:"",timer:null}),V=h.useRef(null);h.useEffect(()=>{if(X.open)return X.menuOnCloseRef.current=p,()=>{X.menuOnCloseRef.current===p&&(X.menuOnCloseRef.current=void 0)}},[X.menuOnCloseRef,X.open,p]);const E=h.useCallback(()=>{const ie=X.triggerRef.current,xe=X.menuRef.current;if(!ie||!xe)return;const Ae=ie.getBoundingClientRect(),We=xe.getBoundingClientRect(),ke=fh({triggerRect:Ae,tooltipRect:We,side:B,align:q,offset:X.offset,collisionPadding:X.containerPadding,shouldFlip:X.shouldFlip,arrowSize:0,arrowPaddingX:0,arrowPaddingY:0,strategy:"fixed"});oe({top:ke.top,left:ke.left,placedSide:ke.placedSide,placedAlign:q})},[q,X.containerPadding,X.offset,X.shouldFlip,X.triggerRef,X.menuRef,B]);h.useEffect(()=>{if(!X.open)return;E();const ie=()=>E(),xe=()=>E();return window.addEventListener("scroll",ie,{passive:!0,capture:!0}),window.addEventListener("resize",xe,{passive:!0}),()=>{window.removeEventListener("scroll",ie,{capture:!0}),window.removeEventListener("resize",xe)}},[X.open,E]),h.useEffect(()=>{if(!X.open)return;const ie=X.menuRef.current;if(!ie||typeof ResizeObserver>"u")return;const xe=new ResizeObserver(()=>E());return xe.observe(ie),()=>xe.disconnect()},[X.open,E]);const ae=h.useMemo(()=>{if(u!==void 0){const ke=i;if(typeof ke!="function")return[];const ze=[];for(const _e of u){const tt=ke(_e);if(!ls(tt))continue;const rt=ss(tt);rt&&ze.push({key:rt,element:tt})}return ze.length>0?[{implicit:!0,items:ze}]:[]}const ie=h.Children.toArray(i),xe=[],Ae=[];for(const ke of ie){if(eb(ke)){const ze=[];if(ke.props.items!==void 0){const _e=ke.props.children;if(typeof _e=="function")for(const tt of ke.props.items){const rt=_e(tt);if(!ls(rt))continue;const ut=ss(rt);ut&&ze.push({key:ut,element:rt})}}else for(const _e of h.Children.toArray(ke.props.children)){if(!ls(_e))continue;const tt=ss(_e);tt&&ze.push({key:tt,element:_e})}Ae.push({...ke.props.title!==void 0?{title:ke.props.title}:{},...typeof ke.props["aria-label"]=="string"?{ariaLabel:ke.props["aria-label"]}:{},...ke.props.hideSelectedIcon!==void 0?{hideSelectedIcon:ke.props.hideSelectedIcon}:{},...ke.props.showDivider!==void 0?{showDivider:ke.props.showDivider}:{},...ke.props.classNames?{classNames:ke.props.classNames}:{},...ke.props.itemClasses?{itemClasses:ke.props.itemClasses}:{},items:ze});continue}if(ls(ke)){const ze=ss(ke);if(!ze)continue;xe.push({key:ze,element:ke})}}const We=[];xe.length>0&&We.push({implicit:!0,items:xe});for(const ke of Ae)We.push(ke);return We},[i,u]),re=h.useMemo(()=>{const ie=[];for(const xe of ae)for(const Ae of xe.items)ie.push(Ae);return ie},[ae]),se=h.useMemo(()=>re.map(ie=>ie.key),[re]),je=h.useMemo(()=>{const ie=new Map;for(const xe of re)ie.set(xe.key,xe.element.props);return ie},[re]),J=h.useMemo(()=>{const ie=new Set(me);for(const xe of re)xe.element.props.isDisabled&&ie.add(xe.key);return ie},[me,re]),[he,Ce]=h.useState(null),Ee=h.useCallback((ie,xe,Ae)=>{xe?pe.current.set(ie,xe):pe.current.delete(ie),x.current.set(ie,Ae)},[]),He=h.useCallback(ie=>{if(Ce(ie),ie===null)return;const xe=pe.current.get(ie);xe&&xe.focus()},[Ce]);h.useEffect(()=>{if(!X.open)return;const xe=X.openSourceRef.current==="keyboard"&&L===!1?"first":L,Ae=xe===!0||xe==="first"?Em(se,J):xe==="last"?zm(se,J):null;Ce(Ae),window.requestAnimationFrame(()=>{Ae!==null?pe.current.get(Ae)?.focus():V.current?.focus()})},[L,J,X.open,X.openSourceRef,se]);const Fe=h.useCallback((ie,xe)=>{if(J.has(ie))return;if(xe.onAction?.(),c?.(ie),g!=="none"&&xe.isReadOnly!==!0){const We=se.filter(_e=>!J.has(_e)),ke=ye==="all"?new Set(We):new Set(ye);let ze=ke;if(g==="single"){const _e=ke.has(ie);ke.clear(),_e&&j===!1||ke.add(ie)}else ke.has(ie)?(j===!1||ke.size>1)&&ke.delete(ie):ke.add(ie);if(ze=ke,ne(ze),b){const _e=ze;_e.anchorKey=ie,_e.currentKey=ie,b(_e)}}(xe.closeOnSelect??W)&&(X.setOpen(!1,!0),xe.onClose?.())},[W,J,j,X,se,c,p,b,ye,g,ne]),Je=ie=>{if(ie.key==="ArrowDown"){ie.preventDefault(),He(Om(se,J,he,1,R));return}if(ie.key==="ArrowUp"){ie.preventDefault(),He(Om(se,J,he,-1,R));return}if(ie.key==="Home"){ie.preventDefault(),He(Em(se,J));return}if(ie.key==="End"){ie.preventDefault(),He(zm(se,J));return}if(ie.key==="Enter"||ie.key===" "){if(ie.preventDefault(),he!==null){const xe=je.get(he);xe&&Fe(he,xe)}return}if(nb(ie)){const xe=`${T.current.buffer}${ie.key}`.toLowerCase();T.current.timer&&window.clearTimeout(T.current.timer),T.current.buffer=xe,T.current.timer=window.setTimeout(()=>{T.current.buffer="",T.current.timer=null},350);const Ae=he!==null?se.indexOf(he):-1,We=se.length;for(let ke=1;ke<=We;ke++){const ze=(Ae+ke)%We,_e=se[ze];if(_e==null||J.has(_e))continue;if((x.current.get(_e)?.textValue??String(_e)).toLowerCase().startsWith(xe)){He(_e);break}}}},le={disabledKeys:J,selectionMode:g,selectedKeys:ye,setSelectedKeys:ne,disallowEmptySelection:j,...c?{onAction:c}:{},...b?{onSelectionChange:b}:{},...p?{onClose:p}:{},onItemAction:Fe,closeOnSelect:W,hideSelectedIcon:_,setOpen:X.setOpen,focusedKey:he,setFocusedKey:Ce,registerItemRef:Ee,...$?{itemClasses:$}:{},menuVariant:y,menuColor:D,shouldFocusWrap:R,disableAnimation:P};if(!X.open)return null;const ce=re.length>0,Ne=ee===null?X.placement:`${ee.placedSide}-${ee.placedAlign}`;return a.jsx(vs,{container:X.portalContainer,children:a.jsx(gh.Provider,{value:le,children:a.jsxs("div",{ref:ie=>{X.menuRef.current=ie},id:X.menuId,className:ot("oksDropdownMenu",Q?.base),"data-open":"true","data-placement":Ne,"data-variant":y,"data-color":D,style:{...ge,position:"fixed",top:ee?.top??-9999,left:ee?.left??-9999},children:[Z!=null?a.jsx("div",{className:"oksDropdownTopContent",children:Z}):null,a.jsx("div",{ref:V,role:"menu","aria-labelledby":X.triggerId,className:ot("oksDropdownList",Q?.list),tabIndex:-1,onKeyDown:Je,children:ce?ae.map((ie,xe)=>a.jsx(ab,{section:ie},xe)):C?null:a.jsx("div",{className:ot("oksDropdownEmpty",Q?.emptyContent),children:I??null})}),te!=null?a.jsx("div",{className:"oksDropdownBottomContent",children:te}):null]})})})};function ab({section:l}){const u=(l.implicit===!0?!1:l.title===void 0||l.title===null)?l.ariaLabel:void 0,c=l.title!==void 0&&l.title!==null?a.jsx("div",{className:ot("oksDropdownSectionHeading",l.classNames?.heading),children:l.title}):null,f=l.showDivider===!0;return a.jsxs("div",{className:ot("oksDropdownSection",l.classNames?.base),children:[c,a.jsx("div",{role:"group","aria-label":u,className:ot("oksDropdownSectionGroup",l.classNames?.group),children:l.items.map(({key:p,element:g})=>h.cloneElement(g,{itemKey:p,...l.hideSelectedIcon!==void 0?{__sectionHideSelectedIcon:l.hideSelectedIcon}:{},...l.itemClasses?{__sectionItemClasses:l.itemClasses}:{}}))}),f?a.jsx("div",{className:ot("oksDropdownSectionDivider",l.classNames?.divider)}):null]})}var Te=h.forwardRef((l,i)=>{const{children:u,title:c,description:f,shortcut:p,startContent:g,endContent:w,selectedIcon:v,showDivider:b=!1,href:j,target:y,rel:D,download:L,ping:C,referrerPolicy:_,isDisabled:R=!1,isSelected:H,isReadOnly:P=!1,hideSelectedIcon:Q,closeOnSelect:$,classNames:Z,onPress:te,onPressStart:I,onPressEnd:X,onPressChange:W,onPressUp:me,onKeyDown:ge,onKeyUp:ue,onClick:fe,itemKey:ye}=l,ne=Px(),B=ye??null,q=B!=null&&String(B).trim().length>0,ee=!q||R===!0||ne.disabledKeys.has(B),oe=ne.selectionMode==="none"?!1:ne.selectedKeys==="all"?!0:ne.selectedKeys.has(B),pe=typeof H=="boolean"?H:oe,x=ne.focusedKey===B,T=ne.selectionMode==="multiple"?"menuitemcheckbox":ne.selectionMode==="single"?"menuitemradio":"menuitem",V=ne.selectionMode==="none"?void 0:pe?"true":"false",E=l.__sectionItemClasses,ae=l.__sectionHideSelectedIcon,re=Q??ae??ne.hideSelectedIcon,se=c??u,je=tb(B??"",l),J=ot(ot(ot("oksDropdownItem",ne.itemClasses?.base),E?.base),Z?.base),[he,Ce]=h.useState(!1),Ee=ce=>{ee||(he||(I?.(ce),W?.(!0)),Ce(!0))},He=ce=>{he&&(X?.(ce),W?.(!1)),Ce(!1)},Fe=()=>{ee||q&&(ne.setFocusedKey(B),ne.onItemAction(B,l))},Je=j?"a":"div",le=a.jsxs(Je,{ref:mh(i,ce=>{q&&ne.registerItemRef(B,ce instanceof HTMLElement?ce:null,{key:B,disabled:ee,textValue:je})}),role:T,"aria-checked":V,"aria-disabled":ee?"true":void 0,tabIndex:-1,"data-disabled":ee?"true":"false","data-selected":pe?"true":"false","data-focused":x?"true":"false",className:J,href:j,target:y,rel:D,download:L,ping:C,referrerPolicy:_,onMouseMove:()=>{ee||ne.setFocusedKey(B)},onFocus:()=>{ee||ne.setFocusedKey(B)},onPointerDown:ce=>{Ee(ce)},onPointerUp:ce=>{ee||(me?.(ce),He(ce))},onPointerLeave:ce=>{He(ce)},onPointerCancel:ce=>{He(ce)},onKeyDown:ce=>{ge?.(ce),!ce.defaultPrevented&&(ce.key==="Enter"||ce.key===" ")&&Ee(ce)},onKeyUp:ce=>{if(ue?.(ce),!ce.defaultPrevented&&(ce.key==="Enter"||ce.key===" ")){if(ee)return;me?.(ce),He(ce)}},onBlur:ce=>{He(ce)},onClick:ce=>{fe?.(ce),!ce.defaultPrevented&&(ee||(te?.(ce),Fe()))},children:[g!=null?a.jsx("span",{className:"oksDropdownItemStartContent","aria-hidden":"true",children:g}):null,a.jsxs("span",{className:ot(ot(ot("oksDropdownItemWrapper",ne.itemClasses?.wrapper),E?.wrapper),Z?.wrapper),children:[a.jsx("span",{className:ot(ot(ot("oksDropdownItemTitle",ne.itemClasses?.title),E?.title),Z?.title),children:se}),f!=null?a.jsx("span",{className:ot(ot(ot("oksDropdownItemDescription",ne.itemClasses?.description),E?.description),Z?.description),children:f}):null]}),p!=null?a.jsx("span",{className:ot(ot(ot("oksDropdownItemShortcut",ne.itemClasses?.shortcut),E?.shortcut),Z?.shortcut),children:p}):null,w!=null?a.jsx("span",{className:"oksDropdownItemEndContent","aria-hidden":"true",children:w}):pe&&re!==!0?a.jsx("span",{className:ot(ot(ot("oksDropdownItemSelectedIcon",ne.itemClasses?.selectedIcon),E?.selectedIcon),Z?.selectedIcon),"aria-hidden":"true",children:v??"✓"}):null]});return b?a.jsxs(a.Fragment,{children:[le,a.jsx("div",{className:"oksDropdownItemDivider","aria-hidden":"true"})]}):le});Te.displayName="DropdownItem";var Hr=l=>null;Hr.displayName="DropdownSection";Xt(`@layer components {
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
`);function ea(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}function ob(l){return l==="success"?"success":l==="warning"?"warning":l==="danger"?"error":l==="default"?"default":"info"}function is(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}var ct=h.forwardRef((l,i)=>{const{title:u,description:c,color:f="default",variant:p="flat",radius:g="md",icon:w,startContent:v,endContent:b,isVisible:j,isClosable:y=!1,hideIcon:D=!1,hideIconWrapper:L=!1,closeButtonProps:C,onClose:_,onVisibleChange:R,classNames:H,className:P,style:Q,...$}=l,[Z,te]=h.useState(!0),I=typeof j=="boolean",X=I?j:Z,W=u!=null,me=c!=null,ge=h.useMemo(()=>({"--oks-alert-accent":is(f,600),"--oks-alert-bg-50":is(f,50),"--oks-alert-bg-100":is(f,100),"--oks-alert-fg-900":is(f,900)}),[f]),ue=h.useMemo(()=>a.jsx(rh,{type:ob(f),size:18}),[f]),fe=h.useCallback(()=>{R?.(!1),I||te(!1),_?.()},[I,_,R]);if(!X)return null;const ye=w??ue,ne=!D&&ye!==null,B=ne?a.jsx("span",{className:ea("oksAlertIcon",H?.alertIcon),children:ye}):null,q=ne?L?B:a.jsx("span",{className:ea("oksAlertIconWrapper",H?.iconWrapper),children:B}):null,ee=ea(ea("oksAlertCloseButton",H?.closeButton),C?.className),oe=y===!0?a.jsx("button",{type:"button","aria-label":"Close",...C,className:ee,onClick:pe=>{C?.onClick?.(pe),pe.defaultPrevented||fe()},children:a.jsx(lh,{size:16})}):null;return a.jsxs("div",{...$,ref:i,role:"alert","data-visible":"true","data-closeable":y?"true":"false","data-has-title":W?"true":"false","data-has-description":me?"true":"false","data-color":f,"data-variant":p,"data-radius":g,className:ea(ea("oksAlert",H?.base),P),style:{...ge,...Q},children:[q,v,a.jsxs("div",{className:ea("oksAlertMainWrapper",H?.mainWrapper),children:[W?a.jsx("div",{className:ea("oksAlertTitle",H?.title),children:u}):null,me?a.jsx("div",{className:ea("oksAlertDescription",H?.description),children:c}):null]}),b,oe]})});ct.displayName="Alert";Xt(`@layer components {
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
`);function Rm(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var Ur=0,cs=null;function rb(){if(typeof document>"u")return()=>{};const l=document.documentElement;return Ur+=1,Ur===1&&(cs=l.style.overflow,l.style.overflow="hidden"),()=>{if(typeof document>"u")return;const i=document.documentElement;Ur=Math.max(0,Ur-1),Ur===0&&(cs?i.style.overflow=cs:i.style.removeProperty("overflow"),cs=null)}}function Mm(l,i,u){const c=typeof l=="number"&&Number.isFinite(l)?l:i;return Math.min(u,Math.max(i,c))}function lb(l){return l==="easeIn"?"ease-in":l==="easeOut"?"ease-out":l==="easeInOut"?"ease-in-out":"ease"}function Xr(l){const{isOpen:i,onClose:u,children:c,zIndex:f=40,closeOnOutsideClick:p=!0,closeOnEscape:g=!0,lockScroll:w=!0,blur:v=!0,backgroundColor:b="var(--oks-palette-neutral-950, #000)",backgroundOpacity:j=80,animationDuration:y=.3,animationType:D="fade",easing:L="ease",portal:C=!0,container:_,className:R,style:H,contentFullSize:P=!1,contentClassName:Q,contentStyle:$}=l,Z=lu(),[te,I]=h.useState(i),[X,W]=h.useState("closed"),[me,ge]=h.useState("closed"),ue=h.useRef({}),fe=h.useMemo(()=>Z?0:Math.round(Mm(y,0,10)*1e3),[y,Z]),ye=h.useMemo(()=>{const oe=Mm(j,0,100);return String(oe/100)},[j]),ne=h.useMemo(()=>({zIndex:f,...H,"--oks-backdrop-duration":`${fe}ms`,"--oks-backdrop-easing":lb(L),"--oks-backdrop-opacity":ye}),[fe,L,ye,H,f]);h.useEffect(()=>{if(w&&te)return rb()},[w,te]),h.useEffect(()=>{if(!i||!g||typeof document>"u")return;const oe=pe=>{pe.key==="Escape"&&u()};return document.addEventListener("keydown",oe),()=>document.removeEventListener("keydown",oe)},[g,i,u]),h.useEffect(()=>{const oe=ue.current;typeof window<"u"&&(oe.openContent!==void 0&&window.clearTimeout(oe.openContent),oe.closeBackdrop!==void 0&&window.clearTimeout(oe.closeBackdrop),oe.unmount!==void 0&&window.clearTimeout(oe.unmount)),oe.raf!==void 0&&typeof window<"u"&&window.cancelAnimationFrame(oe.raf),ue.current={}},[fe]),h.useEffect(()=>{const oe={};if(Z){I(i),W(i?"open":"closed"),ge(i?"open":"closed");return}if(typeof window>"u"){I(i),W(i?"open":"closed"),ge(i?"open":"closed");return}return i?(I(!0),W("closed"),ge("closed"),oe.raf=window.requestAnimationFrame(()=>W("open")),oe.openContent=window.setTimeout(()=>ge("open"),fe)):(ge("closed"),oe.closeBackdrop=window.setTimeout(()=>W("closed"),fe),oe.unmount=window.setTimeout(()=>I(!1),fe*2)),ue.current=oe,()=>{typeof window>"u"||(oe.openContent!==void 0&&window.clearTimeout(oe.openContent),oe.closeBackdrop!==void 0&&window.clearTimeout(oe.closeBackdrop),oe.unmount!==void 0&&window.clearTimeout(oe.unmount),oe.raf!==void 0&&window.cancelAnimationFrame(oe.raf))}},[fe,i,Z]);const B=a.jsx("div",{className:"oksBackdropOverlay","data-blur":v?"true":"false",style:{backgroundColor:b},onPointerDown:p?u:void 0,"aria-hidden":"true"}),q=c!=null?a.jsx("div",{className:Rm("oksBackdropContent",Q),style:$,children:c}):null,ee=te?a.jsxs("div",{className:Rm("oksBackdrop",R),style:ne,"data-state":X,"data-content-state":me,"data-animation":D,"data-motion":Z?"reduced":"full","data-content-size":P?"full":"auto",children:[B,q]}):null;return C?a.jsx(vs,{container:_,children:ee}):ee}Xt(`@layer components {
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
`);function sb(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var _m=[50,100,200,300,400,500,600,700,800,900,950];function ib(l){const i=bn(l,50,950);let c=_m[0]??500,f=Math.abs(c-i);for(const p of _m){const g=Math.abs(p-i);g<f&&(c=p,f=g)}return c}function cb(l,i){return`var(--oks-color-${l}-${i}, var(--oks-color-primary-${i}, #d1d5db))`}var Ba=h.forwardRef((l,i)=>{const{orientation:u="horizontal",variant:c="fullWidth",tone:f,color:p,colorDepth:g=300,thickness:w,children:v,className:b,style:j,...y}=l,D=f??p??"primary",L=typeof g=="number"?ib(g):300,C=w!==void 0?{"--oks-divider-thickness":typeof w=="number"?`${w}px`:w}:{},_={"--oks-divider-border":cb(D,L),...C},R=y["aria-label"],H=typeof R=="string"?R:typeof v=="string"?v:void 0,P={..._,...j??{}},Q=sb(v&&u==="horizontal"?"oksDivider oksDividerWithText":"oksDivider",b);return u==="vertical"?a.jsx("div",{...y,role:"separator","aria-orientation":"vertical","aria-label":H,ref:i,className:Q,"data-orientation":"vertical","data-variant":c,"data-tone":D,style:P}):v?a.jsxs("div",{...y,role:"separator","aria-orientation":"horizontal","aria-label":H,ref:i,className:Q,"data-orientation":"horizontal","data-variant":c,"data-tone":D,style:P,children:[a.jsx("span",{className:"oksDividerLine","aria-hidden":"true"}),a.jsx("span",{className:"oksDividerLabel",children:v}),a.jsx("span",{className:"oksDividerLine","aria-hidden":"true"})]}):a.jsx("hr",{...y,role:"separator","aria-orientation":"horizontal","aria-label":H,ref:i,className:Q,"data-orientation":"horizontal","data-variant":c,"data-tone":D,style:P})});Ba.displayName="Divider";Xt(`@layer components {
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
`);function Lr(l,i){return[typeof l=="string"?l:"",typeof i=="string"?i:""].filter(Boolean).join(" ")}var Um=[50,100,200,300,400,500,600,700,800,900,950];function ub(l){const i=Math.min(950,Math.max(50,l));let c=Um[0]??500,f=Math.abs(c-i);for(const p of Um){const g=Math.abs(p-i);g<f&&(c=p,f=g)}return c}function db(l){return l==="end"||l==="after"?"end":"start"}function fb(l,i){const u=`var(--oks-color-default-${i}, var(--oks-color-primary-${i}, #3b82f6))`;return l==="default"?u:`var(--oks-color-${l}-${i}, ${u})`}function pb(l,i){return l==="black"||l==="white"?l:fb(l,i)}function mb(l){return typeof l=="object"&&l!==null&&"message"in l&&l.message!==void 0}function Cn(l){const{title:i="Title",as:u,tag:c,color:f,colorDepth:p=500,icon:g,iconPosition:w="start",tooltip:v,className:b,titleClassName:j,classNames:y,style:D}=l,L=ub(p),C=db(w),_=u??c??"h4",R=f??"black",H=(()=>{if(v==null||v===!1)return null;if(mb(v)){if(v.message===void 0||v.message===null)return null;const te=v.side===void 0?void 0:v.align==="start"?`${v.side}-start`:v.align==="end"?`${v.side}-end`:v.side,I={...v.disabled!==void 0?{isDisabled:v.disabled}:{},...te!==void 0?{placement:te}:{},...v.openDelay!==void 0?{delay:v.openDelay}:{},...v.closeDelay!==void 0?{closeDelay:v.closeDelay}:{},...v.className!==void 0?{className:v.className}:{}};return{content:v.message,props:I}}const Z=typeof i=="string"&&i.trim().length>0?i:null;if(v===!0)return Z?{content:Z,props:{}}:null;if(typeof v=="object"){if("props"in v||"content"in v){const I=v,X=I.content!==void 0?I.content:Z;return X?{content:X,props:I.props??{}}:null}return Z?{content:Z,props:v}:null}return null})(),P=H!==null,Q=()=>g==null?null:a.jsx("span",{className:Lr("oksPageTitleIcon",y?.icon),children:g}),$=a.jsxs("div",{className:Lr(Lr("oksPageTitle",y?.base),b),style:{color:pb(R,L),...D},"data-color":R,"data-icon-position":C,"data-has-tooltip":P?"true":"false",children:[C==="start"?Q():null,a.jsx(_,{className:Lr(Lr("oksPageTitleTitle",y?.title),j),children:i}),C==="end"?Q():null]});if(H){const Z={...H.props,content:H.content};return a.jsx(Re,{...Z,children:$})}return $}Xt(`@layer components {
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
`);function hb(l,i){return[l,typeof i=="string"?i:""].filter(Boolean).join(" ")}function vb(l){return typeof l=="number"?`${l}px`:l==="sm"?"360px":l==="md"?"420px":l==="lg"?"520px":typeof l=="string"?l:"420px"}function gb(l){return typeof l=="number"?`${l}px`:l==="sm"?"280px":l==="md"?"360px":l==="lg"?"480px":typeof l=="string"?l:"360px"}function xb(l){return l==="left"?"slideRight":l==="right"?"slideLeft":l==="top"?"slideDown":"slideUp"}function cu(l){const{isOpen:i,onClose:u,position:c="right",title:f,children:p,actions:g,dismissible:w=!0,closeLabel:v="Close drawer",ariaLabel:b="Drawer",width:j,height:y,closeOnOutsideClick:D=!0,closeOnEscape:L=!0,portal:C=!0,container:_,zIndex:R,blur:H,backgroundOpacity:P,animationDuration:Q,easing:$,initialFocusRef:Z,backdrop:te,headers:I,className:X,style:W}=l,ge=`oks-drawer-title-${h.useId().replace(/[:]/g,"")}`,ue=h.useRef(null),fe=h.useRef(null);h.useEffect(()=>{if(!i||typeof document>"u")return;fe.current=document.activeElement;let se=!1;const je=()=>{if(se)return;const J=Z?.current??ue.current;if(J){J.focus?.();return}typeof window<"u"&&window.requestAnimationFrame(je)};return je(),()=>{se=!0;const J=fe.current;J instanceof HTMLElement&&document.contains(J)&&J.focus()}},[Z,i]);const ye=h.useMemo(()=>vb(j),[j]),ne=h.useMemo(()=>gb(y),[y]),q={...h.useMemo(()=>({"--oks-drawer-width":ye,"--oks-drawer-height":ne}),[ne,ye]),...W??{}},ee=h.useMemo(()=>{if(!te)return{};const{isOpen:se,onClose:je,children:J,...he}=te;return he},[te]),oe={closeOnOutsideClick:D,closeOnEscape:L,portal:C,..._!==void 0?{container:_}:{},...R!==void 0?{zIndex:R}:{},...H!==void 0?{blur:H}:{},...P!==void 0?{backgroundOpacity:P}:{},...Q!==void 0?{animationDuration:Q}:{},...$!==void 0?{easing:$}:{},animationType:xb(c),contentFullSize:!0,contentClassName:"oksDrawerBackdropContent",...ee},pe=I?.title??f,{title:x,...T}=I??{},V={as:"h4",...T,...pe!=null?{title:a.jsx("span",{id:ge,children:pe})}:{}},E=w||V.title!==void 0,ae=pe!=null?ge:void 0,re=ae!==void 0?{"aria-labelledby":ae}:{"aria-label":b};return a.jsx(Xr,{isOpen:i,onClose:u,...oe,children:a.jsxs("div",{ref:ue,role:"dialog","aria-modal":"true",tabIndex:-1,"data-position":c,className:hb("oksDrawer",X),style:q,...re,children:[E?a.jsxs("div",{className:"oksDrawerHeader",children:[a.jsx("div",{className:"oksDrawerHeaderTitle",children:V.title!==void 0&&V.title!==null?a.jsx(Cn,{...V}):null}),w?a.jsx(gs,{className:"oksDrawerClose",ariaLabel:v,onClick:()=>u?.()}):null]}):null,a.jsx("div",{className:"oksDrawerBody",children:p}),g!=null?a.jsx("div",{className:"oksDrawerFooter",children:g}):null]})})}Xt(`@layer components {
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
`);function bb(l,i){return[l,typeof i=="string"?i:""].filter(Boolean).join(" ")}function yb(l){return typeof l=="number"?`${l}px`:l==="sm"?"420px":l==="md"?"640px":l==="lg"?"860px":typeof l=="string"?l:"640px"}function uu(l){const{isOpen:i,onClose:u,title:c,children:f,actions:p,size:g="md",dismissible:w=!0,closeLabel:v="Close modal",closeOnOutsideClick:b=!0,closeOnEscape:j=!0,portal:y=!0,container:D,zIndex:L,blur:C,backgroundOpacity:_,animationDuration:R,animationType:H,easing:P,initialFocusRef:Q,backdrop:$,headers:Z,divider:te,className:I,style:X}=l,me=`oks-modal-title-${h.useId().replace(/[:]/g,"")}`,ge=h.useRef(null),ue=h.useRef(null);h.useEffect(()=>{if(!i||typeof document>"u")return;ue.current=document.activeElement;let ae=!1;const re=()=>{if(ae)return;const se=Q?.current??ge.current;if(se){se.focus?.();return}typeof window<"u"&&window.requestAnimationFrame(re)};return re(),()=>{ae=!0;const se=ue.current;se instanceof HTMLElement&&document.contains(se)&&se.focus()}},[i,Q]);const fe=h.useMemo(()=>yb(g),[g]),ne={...h.useMemo(()=>({"--oks-modal-width":fe}),[fe]),...X??{}},B=h.useMemo(()=>{if(!$)return{};const{isOpen:ae,onClose:re,children:se,...je}=$;return je},[$]),q={closeOnOutsideClick:b,closeOnEscape:j,portal:y,...D!==void 0?{container:D}:{},...L!==void 0?{zIndex:L}:{},...C!==void 0?{blur:C}:{},..._!==void 0?{backgroundOpacity:_}:{},...R!==void 0?{animationDuration:R}:{},...H!==void 0?{animationType:H}:{},...P!==void 0?{easing:P}:{},...B},ee=Z?.title??c,{title:oe,...pe}=Z??{},x={as:"h4",...pe,...ee!=null?{title:a.jsx("span",{id:me,children:ee})}:{}},T=w||x.title!==void 0,V=ee!=null?me:void 0,E={tone:"secondary",colorDepth:200,...te??{}};return a.jsx(Xr,{isOpen:i,onClose:u,...q,children:a.jsxs("div",{ref:ge,role:"dialog","aria-modal":"true","aria-labelledby":V,tabIndex:-1,className:bb("oksModal",I),style:ne,children:[T?a.jsxs("div",{className:"oksModalHeader",children:[a.jsx("div",{className:"oksModalHeaderTitle",children:x.title!==void 0&&x.title!==null?a.jsx(Cn,{...x}):null}),w?a.jsx(gs,{className:"oksModalClose",ariaLabel:v,onClick:()=>u?.()}):null]}):null,T?a.jsx(Ba,{...E}):null,a.jsx("div",{className:"oksModalBody",children:f}),p!=null?a.jsx("div",{className:"oksModalFooter",children:p}):null]})})}const Y=({title:l,preview:i,code:u})=>a.jsxs("div",{className:"w-full",children:[a.jsx("h3",{className:"text-lg font-bold",children:l}),a.jsxs(su,{defaultSelectedKey:"preview",variant:"underlined",color:"primary",children:[a.jsx(Yt,{title:"Preview",children:a.jsx("div",{className:"w-full h-full p-5 border border-gray-300 rounded-md",children:i})},"preview"),a.jsx(Yt,{title:"Code",children:a.jsx("pre",{className:"w-full h-full p-5 bg-gray-900 rounded-md text-white",children:a.jsx("code",{children:u})})},"code")]})]}),kb=()=>a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(ct,{title:"Heads up",description:"Something happened."}),a.jsx(ct,{title:"Title only"})]}),code:a.jsx(a.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Heads up" description="Something happened." />
<Alert title="Title only" />`})}),wb=()=>a.jsx(Y,{title:"Colors",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(ct,{color:"default",title:"Default",description:"Default color"}),a.jsx(ct,{color:"primary",title:"Primary",description:"Primary color"}),a.jsx(ct,{color:"secondary",title:"Secondary",description:"Secondary color"}),a.jsx(ct,{color:"info",title:"Info",description:"Info color"}),a.jsx(ct,{color:"success",title:"Success",description:"Success color"}),a.jsx(ct,{color:"warning",title:"Warning",description:"Warning color"}),a.jsx(ct,{color:"danger",title:"Danger",description:"Danger color"})]}),code:a.jsx(a.Fragment,{children:`import { Alert } from "oks-ui";

<Alert color="default" title="Default" description="Default color" />
<Alert color="primary" title="Primary" description="Primary color" />
<Alert color="secondary" title="Secondary" description="Secondary color" />
<Alert color="info" title="Info" description="Info color" />
<Alert color="success" title="Success" description="Success color" />
<Alert color="warning" title="Warning" description="Warning color" />
<Alert color="danger" title="Danger" description="Danger color" />`})}),jb=()=>a.jsx(Y,{title:"Variants",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(ct,{variant:"flat",title:"Flat",description:"Default variant"}),a.jsx(ct,{variant:"solid",title:"Solid",description:"Solid variant"}),a.jsx(ct,{variant:"bordered",title:"Bordered",description:"Bordered variant"}),a.jsx(ct,{variant:"faded",title:"Faded",description:"Faded variant"})]}),code:a.jsx(a.Fragment,{children:`import { Alert } from "oks-ui";

<Alert variant="flat" title="Flat" description="Default variant" />
<Alert variant="solid" title="Solid" description="Solid variant" />
<Alert variant="bordered" title="Bordered" description="Bordered variant" />
<Alert variant="faded" title="Faded" description="Faded variant" />`})}),Sb=()=>a.jsx(Y,{title:"Radius",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(ct,{radius:"none",title:"None",description:"radius=none"}),a.jsx(ct,{radius:"sm",title:"Small",description:"radius=sm"}),a.jsx(ct,{radius:"md",title:"Medium",description:"radius=md"}),a.jsx(ct,{radius:"lg",title:"Large",description:"radius=lg"}),a.jsx(ct,{radius:"full",title:"Full",description:"radius=full"})]}),code:a.jsx(a.Fragment,{children:`import { Alert } from "oks-ui";

<Alert radius="none" title="None" description="radius=none" />
<Alert radius="sm" title="Small" description="radius=sm" />
<Alert radius="md" title="Medium" description="radius=md" />
<Alert radius="lg" title="Large" description="radius=lg" />
<Alert radius="full" title="Full" description="radius=full" />`})}),Tb=()=>a.jsx(Y,{title:"Icons",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(ct,{title:"Default icon",description:"Icon is derived from color",color:"primary"}),a.jsx(ct,{title:"Hide icon",description:"hideIcon=true",hideIcon:!0}),a.jsx(ct,{title:"Hide icon wrapper",description:"hideIconWrapper=true",hideIconWrapper:!0}),a.jsx(ct,{title:"Custom icon",description:"Use icon prop",icon:a.jsx("span",{"aria-hidden":!0,className:"text-lg leading-none",children:"★"})})]}),code:a.jsx(a.Fragment,{children:`import { Alert } from "oks-ui";

<Alert title="Default icon" description="Icon is derived from color" color="primary" />
<Alert title="Hide icon" description="hideIcon=true" hideIcon />
<Alert title="Hide icon wrapper" description="hideIconWrapper=true" hideIconWrapper />
<Alert title="Custom icon" description="Use icon prop" icon={<span aria-hidden>★</span>} />`})}),Db=()=>a.jsx(Y,{title:"With Action",preview:a.jsx("div",{className:"flex flex-col gap-3",children:a.jsx(ct,{title:"Update available",description:"A newer version is ready to install.",color:"primary",endContent:a.jsx(N,{size:"sm",children:"Update"})})}),code:a.jsx(a.Fragment,{children:`import { Alert, Button } from "oks-ui";

<Alert
  title="Update available"
  description="A newer version is ready to install."
  color="primary"
  endContent={<Button size="sm">Update</Button>}
/>`})}),Cb=()=>a.jsx(Y,{title:"Closable",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(ct,{title:"Closable alert",description:"Click Close to hide (uncontrolled).",isClosable:!0}),a.jsx(ct,{title:"Closable (custom close button)",description:"closeButtonProps example",isClosable:!0,closeButtonProps:{className:"bg-white/15 hover:bg-white/20"},color:"danger",variant:"solid"})]}),code:a.jsx(a.Fragment,{children:`import { Alert } from "oks-ui";

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
/>`})}),Bb=()=>{const[l,i]=h.useState(!0);return a.jsx(Y,{title:"Controlled Visibility",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex gap-3 items-center",children:[a.jsx(N,{size:"sm",variant:"bordered",onClick:()=>i(!0),children:"Show"}),a.jsx(N,{size:"sm",variant:"bordered",onClick:()=>i(!1),children:"Hide"}),a.jsxs("div",{className:"text-sm text-gray-700",children:["isVisible: ",String(l)]})]}),a.jsx(ct,{title:"Controlled alert",description:"Uses isVisible and onVisibleChange.",isClosable:!0,isVisible:l,onVisibleChange:i,color:"success"})]}),code:a.jsx(a.Fragment,{children:`import { useState } from "react";
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
}`})})},Nb=()=>a.jsx(Y,{title:"ClassNames",preview:a.jsx("div",{className:"flex flex-col gap-3",children:a.jsx(ct,{title:"Custom slots",description:"Uses classNames slots to style parts.",classNames:{base:"ring-2 ring-purple-400/60",title:"text-purple-900",description:"text-purple-900/80",iconWrapper:"text-purple-900",closeButton:"text-purple-900"},isClosable:!0,color:"secondary",variant:"flat"})}),code:a.jsx(a.Fragment,{children:`import { Alert } from "oks-ui";

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
/>`})}),Ab=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(kb,{}),a.jsx(wb,{}),a.jsx(jb,{}),a.jsx(Sb,{}),a.jsx(Tb,{}),a.jsx(Db,{}),a.jsx(Cb,{}),a.jsx(Bb,{}),a.jsx(Nb,{})]}),Eb=()=>a.jsx(Y,{title:"How to usage",preview:a.jsx(a.Fragment,{children:a.jsxs("div",{className:"flex gap-3 items-center",children:[a.jsx(de,{name:"Omkar Sahu"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=5"}),a.jsx(de,{name:"Manav"})]})}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";
            
            <Avatar name="Omkar Sahu" />
            <Avatar src="https://i.pravatar.cc/150?img=5" />
            <Avatar name="Manav" />`})}),zb=()=>a.jsx(Y,{title:"Sizes",preview:a.jsx(a.Fragment,{children:a.jsxs("div",{className:"flex gap-3 items-center",children:[a.jsx(de,{className:"w-6 h-6 text-tiny",src:"https://i.pravatar.cc/150?img=5"}),a.jsx(de,{size:"sm",src:"https://i.pravatar.cc/150?img=5"}),a.jsx(de,{size:"md",src:"https://i.pravatar.cc/150?img=5"}),a.jsx(de,{size:"lg",src:"https://i.pravatar.cc/150?img=5"}),a.jsx(de,{className:"w-20 h-20 text-large",src:"https://i.pravatar.cc/150?img=5"})]})}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar className="w-6 h-6 text-tiny" name="Omkar Sahu" />
<Avatar size="sm" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
<Avatar size="lg" src="https://i.pravatar.cc/150?img=5" />
<Avatar className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?img=5" />`})}),Ob=()=>a.jsx(Y,{title:"Colors",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(de,{name:"Default",color:"default"}),a.jsx(de,{name:"Primary",color:"primary"}),a.jsx(de,{name:"Secondary",color:"secondary"}),a.jsx(de,{name:"Info",color:"info"}),a.jsx(de,{name:"Success",color:"success"}),a.jsx(de,{name:"Warning",color:"warning"}),a.jsx(de,{name:"Danger",color:"danger"})]}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="Default" color="default" />
<Avatar name="Primary" color="primary" />
<Avatar name="Secondary" color="secondary" />
<Avatar name="Info" color="info" />
<Avatar name="Success" color="success" />
<Avatar name="Warning" color="warning" />
<Avatar name="Danger" color="danger" />`})}),Rb=()=>a.jsx(Y,{title:"Color depth",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(de,{name:"50",colorDepth:50}),a.jsx(de,{name:"100",colorDepth:100}),a.jsx(de,{name:"200",colorDepth:200}),a.jsx(de,{name:"3000",colorDepth:300}),a.jsx(de,{name:"400",colorDepth:400}),a.jsx(de,{name:"500",colorDepth:500}),a.jsx(de,{name:"600",colorDepth:600}),a.jsx(de,{name:"700",colorDepth:700}),a.jsx(de,{name:"800",colorDepth:800}),a.jsx(de,{name:"900",colorDepth:900})]}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar name="50" colorDepth={50} />
<Avatar name="100" colorDepth={100} />
<Avatar name="200" colorDepth={200} />
<Avatar name="3000" colorDepth={300} />
<Avatar name="400" colorDepth={400} />
<Avatar name="500" colorDepth={500} />
<Avatar name="600" colorDepth={600} />
<Avatar name="700" colorDepth={700} />
<Avatar name="800" colorDepth={800} />
<Avatar name="900" colorDepth={900} />`})}),Mb=()=>a.jsx(Y,{title:"Disabled",preview:a.jsx(a.Fragment,{children:a.jsxs("div",{className:"flex gap-3 items-center",children:[a.jsx(de,{isDisabled:!0,name:"Omkar Sahu"}),a.jsx(de,{isDisabled:!0,src:"https://i.pravatar.cc/150?img=5"}),a.jsx(de,{isDisabled:!0,name:"Manav"})]})}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar isDisabled name="Omkar Sahu" />
<Avatar isDisabled src="https://i.pravatar.cc/150?img=5" />
<Avatar isDisabled name="Manav" />`})}),_b=()=>a.jsx(Y,{title:"Border",preview:a.jsx(a.Fragment,{children:a.jsxs("div",{className:"flex gap-3 items-center",children:[a.jsx(de,{isBordered:!0,name:"Omkar Sahu"}),a.jsx(de,{isBordered:!0,src:"https://i.pravatar.cc/150?img=5"}),a.jsx(de,{isBordered:!0,name:"Manav"})]})}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";
                
    <Avatar isBordered name="Omkar Sahu" />
    <Avatar isBordered src="https://i.pravatar.cc/150?img=5" />
    <Avatar isBordered name="Manav" />`})}),Ub=()=>a.jsx(Y,{title:"Radius",preview:a.jsx(a.Fragment,{children:a.jsxs("div",{className:"flex gap-3 items-center",children:[a.jsx(de,{radius:"none"}),a.jsx(de,{radius:"sm"}),a.jsx(de,{radius:"md"}),a.jsx(de,{radius:"lg"}),a.jsx(de,{radius:"full"})]})}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";
            
<Avatar radius="none" />
<Avatar radius="sm" />
<Avatar radius="md" />
<Avatar radius="lg" />
<Avatar radius="full" />`})}),Lb=()=>a.jsx(Y,{title:"Tooltip",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(de,{name:"Hover me",tooltip:!0}),a.jsx(de,{name:"Custom content",tooltip:{content:a.jsxs("div",{className:"flex flex-col",children:[a.jsx("span",{className:"font-semibold",children:"Custom tooltip"}),a.jsx("span",{className:"text-xs opacity-80",children:"Any ReactNode"})]})}}),a.jsx(de,{name:"Placement",tooltip:{props:{placement:"bottom",showArrow:!0}}}),a.jsx(de,{isDisabled:!0,name:"Disabled + tooltip",tooltip:!0})]}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";

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

<Avatar isDisabled name="Disabled + tooltip" tooltip />`})}),Fc="https://example.com/does-not-exist.png",Hb=()=>a.jsx(Y,{title:"Fallbacks",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(de,{name:"Omkar Sahu"}),a.jsx(de,{}),a.jsx(de,{src:Fc,name:"Broken (no fallback)"}),a.jsx(de,{src:Fc,name:"Broken + showFallback",showFallback:!0}),a.jsx(de,{src:Fc,name:"Custom fallback",showFallback:!0,fallback:a.jsx("span",{className:"text-xs font-semibold",children:"FB"})}),a.jsx(de,{name:"Custom icon",icon:a.jsx("span",{className:"text-sm",children:"★"})})]}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";

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
<Avatar name="Custom icon" icon={<span className="text-sm">★</span>} />`})}),Gb=()=>a.jsx(Y,{title:"Focusable",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"text-sm opacity-80",children:"Use Tab to see focus ring"}),a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(de,{isFocusable:!0,name:"Focusable"}),a.jsx(de,{isFocusable:!0,isBordered:!0,name:"Bordered"}),a.jsx(de,{isFocusable:!0,tooltip:!0,name:"Focusable + tooltip"}),a.jsx(de,{isFocusable:!0,tabIndex:-1,name:"tabIndex -1"})]})]}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";

<Avatar isFocusable name="Focusable" />
<Avatar isFocusable isBordered name="Bordered" />
<Avatar isFocusable tooltip name="Focusable + tooltip" />
<Avatar isFocusable tabIndex={-1} name="tabIndex -1" />`})}),xh=Le.forwardRef((l,i)=>a.jsx("img",{...l,ref:i,style:{filter:"grayscale(1)",...l.style??{}}}));xh.displayName="GrayscaleImg";const Yb=()=>a.jsx(Y,{title:"Custom image",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(de,{name:"imgProps",src:"https://i.pravatar.cc/150?img=5",imgProps:{loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",alt:"Avatar photo"}}),a.jsx(de,{name:"ImgComponent",src:"https://i.pravatar.cc/150?img=5",ImgComponent:xh,imgProps:{referrerPolicy:"no-referrer"}})]}),code:a.jsx(a.Fragment,{children:`import React from "react";
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
/>`})}),qb=()=>a.jsx(Y,{title:"classNames (slots)",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(de,{name:"Slot styles",classNames:{base:"ring-2 ring-pink-500 ring-offset-2 ring-offset-white",name:"text-black",fallback:"bg-white/30"}}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=5",classNames:{base:"ring-2 ring-emerald-500 ring-offset-2 ring-offset-white",img:"scale-110"}}),a.jsx(de,{classNames:{base:"ring-2 ring-sky-500 ring-offset-2 ring-offset-white",icon:"text-yellow-200"},icon:a.jsx("span",{className:"text-sm",children:"★"})})]}),code:a.jsx(a.Fragment,{children:`import { Avatar } from "oks-ui";

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
/>`})}),Vb=a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsxs($a,{children:[a.jsx(de,{src:"https://i.pravatar.cc/150?img=5"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=6"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=7"})]}),a.jsxs($a,{max:3,total:8,children:[a.jsx(de,{src:"https://i.pravatar.cc/150?img=8"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=9"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=10"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=11"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=12"})]}),a.jsxs($a,{max:2,total:5,renderCount:l=>`+${l} more`,children:[a.jsx(de,{name:"A"}),a.jsx(de,{name:"B"}),a.jsx(de,{name:"C"}),a.jsx(de,{name:"D"})]})]}),a.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:a.jsxs($a,{isGrid:!0,children:[a.jsx(de,{src:"https://i.pravatar.cc/150?img=13"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=14"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=15"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=16"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=17"}),a.jsx(de,{src:"https://i.pravatar.cc/150?img=18"})]})}),a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsxs($a,{size:"sm",radius:"md",color:"success",isBordered:!0,children:[a.jsx(de,{name:"Group"}),a.jsx(de,{name:"Styles"}),a.jsx(de,{name:"Override",color:"danger"}),a.jsx(de,{name:"Own radius",radius:"full"})]}),a.jsxs($a,{isDisabled:!0,size:"sm",color:"secondary",children:[a.jsx(de,{name:"Disabled"}),a.jsx(de,{name:"Group"}),a.jsx(de,{name:"Avatars"})]})]})]}),Xb=`import { Avatar, AvatarGroup } from "oks-ui";

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
</AvatarGroup>`,Kb=()=>a.jsx(Y,{title:"AvatarGroup",preview:Vb,code:Xb}),Qb=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(Eb,{}),a.jsx(zb,{}),a.jsx(Ob,{}),a.jsx(Rb,{}),a.jsx(Ub,{}),a.jsx(_b,{}),a.jsx(Mb,{}),a.jsx(Lb,{}),a.jsx(Hb,{}),a.jsx(Gb,{}),a.jsx(Yb,{}),a.jsx(qb,{}),a.jsx(Kb,{})]}),Zb=()=>a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[a.jsx(Ve,{content:5,"aria-label":"5 unread notifications",children:a.jsx(N,{variant:"bordered",children:"Notifications"})}),a.jsx(Ve,{isDot:!0,"aria-label":"Has new activity",children:a.jsx(N,{variant:"bordered",children:"Activity"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={5} aria-label="5 unread notifications">
  <Button variant="bordered">Notifications</Button>
</Badge>

<Badge isDot aria-label="Has new activity">
  <Button variant="bordered">Activity</Button>
</Badge>`})}),Fb=()=>a.jsxs(a.Fragment,{children:[a.jsx(Y,{title:"Variants",preview:a.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[a.jsx(Ve,{content:3,variant:"solid","aria-label":"3 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"solid"})}),a.jsx(Ve,{content:3,variant:"bordered","aria-label":"3 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"bordered"})}),a.jsx(Ve,{content:3,variant:"light","aria-label":"3 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"light"})}),a.jsx(Ve,{content:3,variant:"flat","aria-label":"3 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"flat"})}),a.jsx(Ve,{content:3,variant:"faded","aria-label":"3 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"faded"})}),a.jsx(Ve,{content:3,variant:"shadow","aria-label":"3 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"shadow"})}),a.jsx(Ve,{content:3,variant:"ghost","aria-label":"3 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"ghost"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={3} variant="solid">...</Badge>
<Badge content={3} variant="bordered">...</Badge>
<Badge content={3} variant="light">...</Badge>
<Badge content={3} variant="flat">...</Badge>
<Badge content={3} variant="faded">...</Badge>
<Badge content={3} variant="shadow">...</Badge>
<Badge content={3} variant="ghost">...</Badge>`})}),a.jsx(Y,{title:"Max",preview:a.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[a.jsx(Ve,{content:9,max:9,"aria-label":"9 notifications",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"max=9"})}),a.jsx(Ve,{content:10,max:9,"aria-label":"10 notifications",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"10 → 9+"})}),a.jsx(Ve,{content:4890,max:999,"aria-label":"4890 notifications",children:a.jsx("span",{className:"px-3 py-2 rounded-md border bg-white text-black",children:"4890 → 999+"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} max={9} aria-label="9 notifications">...</Badge>
<Badge content={10} max={9} aria-label="10 notifications">...</Badge>
<Badge content={4890} max={999} aria-label="4890 notifications">...</Badge>`})})]}),$b=()=>a.jsx(Y,{title:"Colors",preview:a.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[a.jsx(Ve,{content:1,color:"default","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"default"})}),a.jsx(Ve,{content:1,color:"primary","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"primary"})}),a.jsx(Ve,{content:1,color:"secondary","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"secondary"})}),a.jsx(Ve,{content:1,color:"info","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"info"})}),a.jsx(Ve,{content:1,color:"success","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"success"})}),a.jsx(Ve,{content:1,color:"warning","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"warning"})}),a.jsx(Ve,{content:1,color:"danger","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"danger"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} color="default">...</Badge>
<Badge content={1} color="primary">...</Badge>
<Badge content={1} color="secondary">...</Badge>
<Badge content={1} color="success">...</Badge>
<Badge content={1} color="warning">...</Badge>
<Badge content={1} color="danger">...</Badge>`})}),Ib=()=>a.jsx(Y,{title:"Sizes",preview:a.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[a.jsx(Ve,{content:7,size:"sm","aria-label":"7 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"sm"})}),a.jsx(Ve,{content:7,size:"md","aria-label":"7 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"md"})}),a.jsx(Ve,{content:7,size:"lg","aria-label":"7 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"lg"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={7} size="sm">...</Badge>
<Badge content={7} size="md">...</Badge>
<Badge content={7} size="lg">...</Badge>`})}),Jb=()=>a.jsx(Y,{title:"Placements",preview:a.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[a.jsx(Ve,{content:1,placement:"top-left","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-left"})}),a.jsx(Ve,{content:1,placement:"top-right","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"top-right"})}),a.jsx(Ve,{content:1,placement:"bottom-left","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-left"})}),a.jsx(Ve,{content:1,placement:"bottom-right","aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"bottom-right"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1} placement="top-left">...</Badge>
<Badge content={1} placement="top-right">...</Badge>
<Badge content={1} placement="bottom-left">...</Badge>
<Badge content={1} placement="bottom-right">...</Badge>`})}),Wb=()=>a.jsx(Y,{title:"Shapes",preview:a.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[a.jsx(Ve,{content:9,shape:"rectangle","aria-label":"9 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"rectangle"})}),a.jsx(Ve,{content:9,shape:"circle","aria-label":"9 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"circle"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={9} shape="rectangle">...</Badge>
<Badge content={9} shape="circle">...</Badge>`})}),Pb=()=>a.jsx(Y,{title:"Outline",preview:a.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[a.jsx(Ve,{content:2,"aria-label":"2 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline"})}),a.jsx(Ve,{content:2,showOutline:!1,"aria-label":"2 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"showOutline=false"})}),a.jsx(Ve,{content:2,disableOutline:!0,"aria-label":"2 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"disableOutline"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={2}>...</Badge>
<Badge content={2} showOutline={false}>...</Badge>
<Badge content={2} disableOutline>...</Badge>`})}),ey=()=>a.jsx(Y,{title:"Badge visibility",preview:a.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[a.jsx(Ve,{content:1,"aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"visible"})}),a.jsx(Ve,{content:1,isInvisible:!0,"aria-label":"1 item",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isInvisible"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content={1}>...</Badge>
<Badge content={1} isInvisible>...</Badge>`})}),ty=()=>a.jsx(Y,{title:"Dot and one-character",preview:a.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[a.jsx(Ve,{content:"9",isOneChar:!0,"aria-label":"9 items",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"isOneChar"})}),a.jsx(Ve,{isDot:!0,shape:"circle","aria-label":"Has updates",children:a.jsx("span",{className:"px-3 py-2 rounded-md border",children:"dot"})})]}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

<Badge content="9" isOneChar>...</Badge>
<Badge isDot shape="circle">...</Badge>`})}),ny=()=>a.jsx(Y,{title:"Slot styling (classNames)",preview:a.jsx("div",{className:"flex gap-6 items-center flex-wrap",children:a.jsx(Ve,{content:12,color:"success","aria-label":"12 items",classNames:{base:"ring-1 ring-green-400/50 rounded-md",badge:"bg-green-600 text-white"},children:a.jsx("button",{type:"button",className:"px-3 py-2 rounded-md border",children:"Custom slots"})})}),code:a.jsx(a.Fragment,{children:`import { Badge } from "oks-ui";

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
</Badge>`})}),ay=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(Zb,{}),a.jsx(Fb,{}),a.jsx($b,{}),a.jsx(Ib,{}),a.jsx(Jb,{}),a.jsx(Wb,{}),a.jsx(Pb,{}),a.jsx(ey,{}),a.jsx(ty,{}),a.jsx(ny,{})]}),oy=()=>a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{children:"Save"}),a.jsx(N,{variant:"bordered",children:"Cancel"})]}),code:a.jsx(a.Fragment,{children:`import { Button } from "oks-ui";

<Button>Save</Button>
<Button variant="bordered">Cancel</Button>`})}),ry=()=>a.jsx(Y,{title:"Disabled",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{isDisabled:!0,children:"Disabled"}),a.jsx(N,{color:"primary",isDisabled:!0,children:"Primary Disabled"})]}),code:a.jsx(a.Fragment,{children:`<Button isDisabled>Disabled</Button>
<Button color="primary" isDisabled>
  Primary Disabled
</Button>`})}),ly=()=>a.jsx(Y,{title:"Sizes",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{size:"sm",children:"Small"}),a.jsx(N,{size:"md",children:"Medium"}),a.jsx(N,{size:"lg",children:"Large"})]}),code:a.jsx(a.Fragment,{children:`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`})}),sy=()=>a.jsx(Y,{title:"Radius",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{radius:"none",children:"None"}),a.jsx(N,{radius:"sm",children:"SM"}),a.jsx(N,{radius:"md",children:"MD"}),a.jsx(N,{radius:"lg",children:"LG"}),a.jsx(N,{radius:"full",children:"Full"})]}),code:a.jsx(a.Fragment,{children:`<Button radius="none">None</Button>
<Button radius="sm">SM</Button>
<Button radius="md">MD</Button>
<Button radius="lg">LG</Button>
<Button radius="full">Full</Button>`})}),iy=()=>a.jsx(Y,{title:"Colors",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{color:"default",children:"Default"}),a.jsx(N,{color:"primary",children:"Primary"}),a.jsx(N,{color:"secondary",children:"Secondary"}),a.jsx(N,{color:"info",children:"Info"}),a.jsx(N,{color:"success",children:"Success"}),a.jsx(N,{color:"warning",children:"Warning"}),a.jsx(N,{color:"danger",children:"Danger"})]}),code:a.jsx(a.Fragment,{children:`<Button color="default">Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`})}),cy=()=>a.jsx(Y,{title:"Variants",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{variant:"solid",children:"Solid"}),a.jsx(N,{variant:"bordered",children:"Bordered"}),a.jsx(N,{variant:"flat",children:"Flat"}),a.jsx(N,{variant:"light",children:"Light"}),a.jsx(N,{variant:"faded",children:"Faded"}),a.jsx(N,{variant:"shadow",children:"Shadow"}),a.jsx(N,{variant:"ghost",children:"Ghost"})]}),code:a.jsx(a.Fragment,{children:`<Button variant="solid">Solid</Button>
<Button variant="bordered">Bordered</Button>
<Button variant="flat">Flat</Button>
<Button variant="light">Light</Button>
<Button variant="faded">Faded</Button>
<Button variant="shadow">Shadow</Button>
<Button variant="ghost">Ghost</Button>`})}),uy=()=>a.jsx(Y,{title:"Full width",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"w-full max-w-sm",children:a.jsx(N,{fullWidth:!0,children:"Submit"})}),a.jsxs("div",{className:"flex gap-3 items-center w-full max-w-sm",children:[a.jsx(N,{variant:"bordered",children:"Back"}),a.jsx(N,{fullWidth:!0,children:"Continue"}),a.jsx(N,{variant:"bordered",children:"Next"})]})]}),code:a.jsx(a.Fragment,{children:`<Button fullWidth>Submit</Button>

<div style={{ display: "flex", gap: 8 }}>
  <Button>Back</Button>
  <Button fullWidth>Continue</Button>
  <Button>Next</Button>
</div>`})}),dy=()=>a.jsx(Y,{title:"Loading",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{isLoading:!0,children:"Saving"}),a.jsx(N,{isLoading:!0,spinnerPlacement:"end",children:"Saving"}),a.jsx(N,{isLoading:!0,spinner:a.jsx("span",{"aria-hidden":"true",children:"⏳"}),children:"Saving"})]}),code:a.jsx(a.Fragment,{children:`<Button isLoading>Saving</Button>
<Button isLoading spinnerPlacement="end">Saving</Button>
<Button isLoading spinner={<span aria-hidden="true">⏳</span>}>Saving</Button>`})}),fy=()=>a.jsx(Y,{title:"With icons",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{startContent:a.jsx("span",{"aria-hidden":"true",children:"←"}),children:"Back"}),a.jsx(N,{endContent:a.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Next"})]}),code:a.jsx(a.Fragment,{children:`<Button startContent={<span aria-hidden="true">←</span>}>Back</Button>
<Button endContent={<span aria-hidden="true">→</span>}>Next</Button>`})}),py=()=>a.jsx(Y,{title:"Icon only",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{isIconOnly:!0,"aria-label":"Settings",children:a.jsx("span",{"aria-hidden":"true",children:"⚙"})}),a.jsx(N,{isIconOnly:!0,"aria-label":"Search",variant:"bordered",children:a.jsx("span",{"aria-hidden":"true",children:"⌕"})})]}),code:a.jsx(a.Fragment,{children:`<Button isIconOnly aria-label="Settings">
  <span aria-hidden="true">⚙</span>
</Button>
<Button isIconOnly aria-label="Search" variant="bordered">
  <span aria-hidden="true">⌕</span>
</Button>`})}),my=()=>a.jsx(Y,{title:"Icon only + loading",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading",children:a.jsx("span",{"aria-hidden":"true",children:"⚙"})}),a.jsx(N,{isIconOnly:!0,isLoading:!0,"aria-label":"Loading bordered",variant:"bordered",children:a.jsx("span",{"aria-hidden":"true",children:"⌛"})})]}),code:a.jsx(a.Fragment,{children:`<Button isIconOnly isLoading aria-label="Loading">
  <span aria-hidden="true">⚙</span>
</Button>`})}),hy=()=>a.jsx(Y,{title:"ButtonGroup",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsxs(Jc,{variant:"bordered",color:"primary","aria-label":"Pagination",children:[a.jsx(N,{children:"Prev"}),a.jsx(N,{children:"Next"})]}),a.jsxs(Jc,{variant:"solid",color:"secondary","aria-label":"Actions",children:[a.jsx(N,{children:"Left"}),a.jsx(N,{children:"Middle"}),a.jsx(N,{children:"Right"})]})]}),code:a.jsx(a.Fragment,{children:`import { Button, ButtonGroup } from "oks-ui";

<ButtonGroup variant="bordered" color="primary" aria-label="Pagination">
  <Button>Prev</Button>
  <Button>Next</Button>
</ButtonGroup>`})}),vy=()=>{const[l,i]=h.useState("-"),[u,c]=h.useState(!1);return a.jsx(Y,{title:"Press events",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPressStart:()=>i("onPressStart"),onPressEnd:()=>i("onPressEnd"),onPressUp:()=>i("onPressUp"),onPress:()=>i("onPress"),onPressChange:f=>c(f),children:"Press me"}),a.jsxs("div",{className:"text-sm",children:["Last event: ",l]}),a.jsxs("div",{className:"text-sm",children:["Pressed: ",String(u)]})]}),code:a.jsx(a.Fragment,{children:`<Button
  onPressStart={() => {}}
  onPressEnd={() => {}}
  onPressUp={() => {}}
  onPress={() => {}}
  onPressChange={(isPressed) => {}}
>
  Press me
</Button>`})})},gy=()=>{const[l,i]=h.useState(!1),[u,c]=h.useState(!1);return a.jsx(Y,{title:"Ripple and animation",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsxs(N,{variant:"bordered",onPress:()=>i(f=>!f),children:["disableRipple: ",String(l)]}),a.jsxs(N,{variant:"bordered",onPress:()=>c(f=>!f),children:["disableAnimation: ",String(u)]})]}),a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{color:"primary",disableRipple:l,disableAnimation:u,children:"Try click"}),a.jsx(N,{variant:"bordered",disableRipple:l,disableAnimation:u,children:"Try click"})]})]}),code:a.jsx(a.Fragment,{children:"<Button disableRipple disableAnimation>Try click</Button>"})})},xy=()=>a.jsx(Y,{title:"ClassName and style",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{className:"bg-indigo-600 text-white hover:bg-indigo-500",children:"className"}),a.jsx(N,{style:{background:"linear-gradient(90deg, #14b8a6, #3b82f6)",color:"white"},children:"style"})]}),code:a.jsx(a.Fragment,{children:`<Button className="bg-indigo-600 text-white hover:bg-indigo-500">
  className
</Button>

<Button style={{ background: "linear-gradient(90deg, #14b8a6, #3b82f6)", color: "white" }}>
  style
</Button>`})}),by=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(oy,{}),a.jsx(ry,{}),a.jsx(ly,{}),a.jsx(sy,{}),a.jsx(iy,{}),a.jsx(cy,{}),a.jsx(uy,{}),a.jsx(dy,{}),a.jsx(fy,{}),a.jsx(py,{}),a.jsx(my,{}),a.jsx(hy,{}),a.jsx(vy,{}),a.jsx(gy,{}),a.jsx(xy,{})]}),yy=()=>a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{children:"Chip"}),a.jsx(Xe,{variant:"bordered",children:"Bordered"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip>Chip</Chip>
<Chip variant="bordered">Bordered</Chip>`})}),ky=()=>a.jsx(Y,{title:"Variants",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{variant:"solid",color:"primary",children:"solid"}),a.jsx(Xe,{variant:"bordered",color:"primary",children:"bordered"}),a.jsx(Xe,{variant:"light",color:"primary",children:"light"}),a.jsx(Xe,{variant:"flat",color:"primary",children:"flat"}),a.jsx(Xe,{variant:"faded",color:"primary",children:"faded"}),a.jsx(Xe,{variant:"shadow",color:"primary",children:"shadow"}),a.jsx(Xe,{variant:"dot",color:"primary",children:"dot"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip variant="solid" color="primary">solid</Chip>
<Chip variant="bordered" color="primary">bordered</Chip>
<Chip variant="light" color="primary">light</Chip>
<Chip variant="flat" color="primary">flat</Chip>
<Chip variant="faded" color="primary">faded</Chip>
<Chip variant="shadow" color="primary">shadow</Chip>
<Chip variant="dot" color="primary">dot</Chip>`})}),wy=()=>a.jsx(Y,{title:"Colors",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{color:"default",children:"default"}),a.jsx(Xe,{color:"primary",children:"primary"}),a.jsx(Xe,{color:"secondary",children:"secondary"}),a.jsx(Xe,{color:"success",children:"success"}),a.jsx(Xe,{color:"warning",children:"warning"}),a.jsx(Xe,{color:"danger",children:"danger"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="default">default</Chip>
<Chip color="primary">primary</Chip>
<Chip color="secondary">secondary</Chip>
<Chip color="success">success</Chip>
<Chip color="warning">warning</Chip>
<Chip color="danger">danger</Chip>`})}),jy=()=>a.jsx(Y,{title:"Color depth",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{color:"primary",colorDepth:300,children:"300"}),a.jsx(Xe,{color:"primary",colorDepth:500,children:"500"}),a.jsx(Xe,{color:"primary",colorDepth:700,children:"700"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip color="primary" colorDepth={300}>300</Chip>
<Chip color="primary" colorDepth={500}>500</Chip>
<Chip color="primary" colorDepth={700}>700</Chip>`})}),Sy=()=>a.jsx(Y,{title:"Sizes",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{size:"sm",children:"sm"}),a.jsx(Xe,{size:"md",children:"md"}),a.jsx(Xe,{size:"lg",children:"lg"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip size="sm">sm</Chip>
<Chip size="md">md</Chip>
<Chip size="lg">lg</Chip>`})}),Ty=()=>a.jsx(Y,{title:"Radius",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{radius:"none",children:"none"}),a.jsx(Xe,{radius:"sm",children:"sm"}),a.jsx(Xe,{radius:"md",children:"md"}),a.jsx(Xe,{radius:"lg",children:"lg"}),a.jsx(Xe,{radius:"full",children:"full"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip radius="none">none</Chip>
<Chip radius="sm">sm</Chip>
<Chip radius="md">md</Chip>
<Chip radius="lg">lg</Chip>
<Chip radius="full">full</Chip>`})}),Dy=()=>a.jsx(Y,{title:"Disabled",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{isDisabled:!0,children:"Disabled"}),a.jsx(Xe,{isDisabled:!0,onClose:()=>{},children:"Disabled close"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip isDisabled>Disabled</Chip>
<Chip isDisabled onClose={() => {}}>Disabled close</Chip>`})}),Cy=()=>a.jsx(Y,{title:"Start & end content",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{startContent:a.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Start"}),a.jsx(Xe,{endContent:a.jsx("span",{"aria-hidden":"true",children:"→"}),children:"End"}),a.jsx(Xe,{startContent:a.jsx("span",{"aria-hidden":"true",children:"★"}),endContent:a.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Both"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip startContent={<span aria-hidden="true">★</span>}>Start</Chip>
<Chip endContent={<span aria-hidden="true">→</span>}>End</Chip>
<Chip
  startContent={<span aria-hidden="true">★</span>}
  endContent={<span aria-hidden="true">→</span>}
>
  Both
</Chip>`})}),By=()=>a.jsx(Y,{title:"With avatar",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{avatar:a.jsx("img",{src:"https://i.pravatar.cc/32?img=1",alt:"avatar",width:24,height:24}),children:"Avatar"}),a.jsx(Xe,{variant:"faded",color:"secondary",avatar:a.jsx("img",{src:"https://i.pravatar.cc/32?img=2",alt:"avatar",width:24,height:24}),children:"Faded"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip avatar={<img src="https://i.pravatar.cc/32?img=1" alt="avatar" />}>
  Avatar
</Chip>`})}),Ny=()=>a.jsx(Y,{title:"With close button",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Xe,{onClose:()=>{},children:"Closable"}),a.jsx(Xe,{onClose:()=>{},endContent:a.jsx("span",{"aria-hidden":"true",children:"×"}),color:"danger",variant:"flat",children:"Custom close icon"})]}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

<Chip onClose={() => {}}>Closable</Chip>
<Chip onClose={() => {}} endContent={<span aria-hidden="true">×</span>}>
  Custom close icon
</Chip>`})}),Ay=()=>a.jsx(Y,{title:"Slot styling (classNames)",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:a.jsx(Xe,{variant:"dot",color:"success",onClose:()=>{},avatar:a.jsx("img",{src:"https://i.pravatar.cc/32?img=3",alt:"avatar"}),classNames:{base:"ring-1 ring-green-400/60",content:"font-semibold",dot:"bg-green-600",avatar:"ring-1 ring-green-300 rounded-full",closeButton:"hover:bg-green-200/40"},children:"Custom slots"})}),code:a.jsx(a.Fragment,{children:`import { Chip } from "oks-ui";

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
</Chip>`})}),Ey=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(yy,{}),a.jsx(ky,{}),a.jsx(wy,{}),a.jsx(jy,{}),a.jsx(Sy,{}),a.jsx(Ty,{}),a.jsx(Dy,{}),a.jsx(Cy,{}),a.jsx(By,{}),a.jsx(Ny,{}),a.jsx(Ay,{})]}),zy=()=>a.jsx(Y,{title:"How to use",preview:a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{children:"Open"})}),a.jsxs(vt,{variant:"solid",color:"primary",autoFocus:"first",onAction:l=>console.log("onAction:",l),onClose:()=>console.log("onClose"),children:[a.jsx(Te,{children:"New"},"new"),a.jsx(Te,{children:"Edit"},"edit")]})]}),code:a.jsx(a.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),Oy=()=>{const[l,i]=Le.useState(!1);return a.jsx(Y,{title:"Controlled open (isOpen / onOpenChange)",preview:a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsx(N,{variant:"bordered",onPress:()=>i(u=>!u),children:"Toggle (external)"}),a.jsxs(ft,{isOpen:l,onOpenChange:i,children:[a.jsx(pt,{children:a.jsx(N,{children:"Open"})}),a.jsxs(vt,{onAction:u=>console.log("onAction:",u),children:[a.jsx(Te,{children:"New"},"new"),a.jsx(Te,{children:"Edit"},"edit")]})]})]}),code:a.jsx(a.Fragment,{children:`import React from "react";
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
}`})})},Ry=["bottom-start","bottom-end","top-start","right"],My=()=>a.jsx(Y,{title:"Placement",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:Ry.map(l=>a.jsxs(ft,{placement:l,children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:l})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Item A"},"a"),a.jsx(Te,{children:"Item B"},"b")]})]},l))}),code:a.jsx(a.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</div>`})}),_y=()=>a.jsx(Y,{title:"Offset / containerPadding / shouldFlip",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsxs(ft,{offset:0,children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"offset=0"})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Item A"},"a"),a.jsx(Te,{children:"Item B"},"b")]})]}),a.jsxs(ft,{offset:16,children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"offset=16"})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Item A"},"a"),a.jsx(Te,{children:"Item B"},"b")]})]}),a.jsxs(ft,{containerPadding:0,shouldFlip:!1,placement:"bottom-end",children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"no flip"})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Item A"},"a"),a.jsx(Te,{children:"Item B"},"b")]})]})]}),code:a.jsx(a.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),Uy=()=>a.jsx(Y,{title:"Dismiss behavior (isDismissable / isKeyboardDismissDisabled)",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Default"})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Outside click closes"},"a"),a.jsx(Te,{children:"Escape closes"},"b")]})]}),a.jsxs(ft,{isDismissable:!1,children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"No outside close"})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Try clicking outside"},"a"),a.jsx(Te,{children:"Use item or Escape"},"b")]})]}),a.jsxs(ft,{isKeyboardDismissDisabled:!0,children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"No Escape"})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Try pressing Escape"},"a"),a.jsx(Te,{children:"Outside click still works"},"b")]})]})]}),code:a.jsx(a.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),Ly=()=>{const l=Le.useRef(null);return a.jsx(Y,{title:"shouldCloseOnInteractOutside",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx("div",{ref:l,className:"px-3 py-2 border border-dashed border-gray-400 rounded-md",children:"Safe zone (clicking here won't close)"}),a.jsxs(ft,{shouldCloseOnInteractOutside:i=>!l.current?.contains(i),children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Open"})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Item A"},"a"),a.jsx(Te,{children:"Item B"},"b")]})]})]}),code:a.jsx(a.Fragment,{children:`import React from "react";
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
}`})})},Hy=()=>{const l=Le.useRef(null),[i,u]=Le.useState(null);return Le.useEffect(()=>{u(l.current)},[]),a.jsx(Y,{title:"portalContainer",preview:a.jsxs("div",{className:"flex gap-3 items-start flex-wrap",children:[a.jsx("div",{ref:l,className:"w-72 h-40 border border-gray-300 rounded-md p-2",children:"Portal container box"}),a.jsxs(ft,{portalContainer:i,placement:"bottom-start",children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Open"})}),a.jsxs(vt,{children:[a.jsx(Te,{children:"Item A"},"a"),a.jsx(Te,{children:"Item B"},"b")]})]})]}),code:a.jsx(a.Fragment,{children:`import React from "react";
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
}`})})},Gy=()=>a.jsx(Y,{title:"closeOnSelect (Dropdown default)",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Default (closes)"})}),a.jsxs(vt,{onAction:l=>console.log("default onAction:",l),children:[a.jsx(Te,{children:"Select me"},"a"),a.jsx(Te,{children:"Select me"},"b")]})]}),a.jsxs(ft,{closeOnSelect:!1,children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"closeOnSelect=false"})}),a.jsxs(vt,{onAction:l=>console.log("no close onAction:",l),children:[a.jsx(Te,{children:"Menu stays open"},"a"),a.jsx(Te,{children:"Menu stays open"},"b")]})]})]}),code:a.jsx(a.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

<Dropdown closeOnSelect={false}>
  <DropdownTrigger>
    <Button variant="bordered">closeOnSelect=false</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => console.log(key)}>
    <DropdownItem key="a">Menu stays open</DropdownItem>
    <DropdownItem key="b">Menu stays open</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),Yy=()=>a.jsx(Y,{title:"Menu content (topContent / bottomContent / emptyContent)",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Top + bottom"})}),a.jsxs(vt,{topContent:a.jsx("div",{className:"px-2 py-1 text-sm",children:"Top content"}),bottomContent:a.jsx("div",{className:"px-2 py-1 text-sm",children:"Bottom content"}),children:[a.jsx(Te,{children:"Item A"},"a"),a.jsx(Te,{children:"Item B"},"b")]})]}),a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Empty list"})}),a.jsx(vt,{items:[],emptyContent:"Nothing here",children:l=>a.jsx(Te,{children:l.label},l.key)})]}),a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Hide empty"})}),a.jsx(vt,{items:[],emptyContent:"Nothing here",hideEmptyContent:!0,children:l=>a.jsx(Te,{children:l.label},l.key)})]})]}),code:a.jsx(a.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),qy=()=>a.jsx(Y,{title:"classNames / itemClasses",preview:a.jsxs(ft,{classNames:{base:"inline-flex",content:"outline outline-1 outline-purple-500"},children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Open"})}),a.jsxs(vt,{classNames:{base:"rounded-lg border-2 border-purple-500",list:"p-2",emptyContent:"text-purple-300"},itemClasses:{base:"rounded-md",title:"font-semibold",description:"text-xs opacity-80"},children:[a.jsx(Te,{title:"Item A",description:"Custom slot classes"},"a"),a.jsx(Te,{title:"Item B",description:"Custom slot classes"},"b")]})]}),code:a.jsx(a.Fragment,{children:`import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "oks-ui";

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
</Dropdown>`})}),Vy=()=>a.jsx(Y,{title:"Variants",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:["solid","bordered","light","flat","faded","shadow"].map(l=>a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:l})}),a.jsxs(vt,{variant:l,children:[a.jsx(Te,{children:"Item A"},"a"),a.jsx(Te,{children:"Item B"},"b")]})]},l))}),code:a.jsx(a.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">solid</Button>
  </DropdownTrigger>
  <DropdownMenu variant="solid">
    <DropdownItem key="a">Item A</DropdownItem>
    <DropdownItem key="b">Item B</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),Xy=()=>a.jsx(Y,{title:"Disabled keys",preview:a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Open"})}),a.jsxs(vt,{disabledKeys:["delete"],children:[a.jsx(Te,{children:"Copy"},"copy"),a.jsx(Te,{children:"Rename"},"rename"),a.jsx(Te,{children:"Delete"},"delete")]})]}),code:a.jsx(a.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu disabledKeys={["delete"]}>
    <DropdownItem key="copy">Copy</DropdownItem>
    <DropdownItem key="rename">Rename</DropdownItem>
    <DropdownItem key="delete">Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>`})}),Ky=()=>a.jsx(Y,{title:"With icons",preview:a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{children:"Open"})}),a.jsxs(vt,{children:[a.jsx(Te,{startContent:a.jsx("span",{"aria-hidden":"true",children:"★"}),children:"Star"},"star"),a.jsx(Te,{endContent:a.jsx("span",{"aria-hidden":"true",children:"→"}),children:"Arrow"},"arrow")]})]}),code:a.jsx(a.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),Qy=()=>a.jsx(Y,{title:"With description and shortcut",preview:a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Open"})}),a.jsxs(vt,{onClose:()=>console.log("closed"),children:[a.jsx(Te,{title:"Profile",description:"Manage your profile",shortcut:"P"},"profile"),a.jsx(Te,{title:"Settings",description:"App settings",shortcut:"S",showDivider:!0},"settings"),a.jsx(Te,{title:"Log out",closeOnSelect:!1},"logout")]})]}),code:a.jsx(a.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open</Button>
  </DropdownTrigger>
  <DropdownMenu onClose={() => console.log("closed")}>
    <DropdownItem key="profile" title="Profile" description="Manage your profile" shortcut="P" />
    <DropdownItem key="settings" title="Settings" description="App settings" shortcut="S" showDivider />
    <DropdownItem key="logout" title="Log out" closeOnSelect={false} />
  </DropdownMenu>
</Dropdown>`})}),Zy=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"}],Fy=()=>a.jsx(Y,{title:"With sections",preview:a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{children:"Open"})}),a.jsxs(vt,{onAction:l=>console.log(l),children:[a.jsxs(Hr,{title:"Actions",children:[a.jsx(Te,{children:"Copy"},"copy"),a.jsx(Te,{children:"Move"},"move")]}),a.jsx(Hr,{title:"Account",items:Zy,showDivider:!0,children:l=>a.jsx(Te,{children:l.label},l.key)}),a.jsx(Hr,{"aria-label":"Danger zone",children:a.jsx(Te,{children:"Delete"},"delete")})]})]}),code:a.jsx(a.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),$y=()=>{const[l,i]=Le.useState(new Set(["a"])),[u,c]=Le.useState(new Set(["a","c"]));return a.jsx(Y,{title:"Selection",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Single"})}),a.jsxs(vt,{selectionMode:"single",closeOnSelect:!1,shouldFocusWrap:!0,selectedKeys:l,onSelectionChange:f=>{i(new Set(f)),console.log("single onSelectionChange:",f)},children:[a.jsx(Te,{children:"A"},"a"),a.jsx(Te,{children:"B"},"b"),a.jsx(Te,{children:"C"},"c")]})]}),a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{variant:"bordered",children:"Multiple"})}),a.jsxs(vt,{selectionMode:"multiple",closeOnSelect:!1,hideSelectedIcon:!0,selectedKeys:u,onSelectionChange:f=>{c(new Set(f)),console.log("multiple onSelectionChange:",f)},children:[a.jsx(Te,{selectedIcon:"✓",children:"A"},"a"),a.jsx(Te,{children:"B"},"b"),a.jsx(Te,{children:"C"},"c")]})]})]}),code:a.jsx(a.Fragment,{children:`import React from "react";
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
}`})})},Iy=[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"},{key:"logout",label:"Log out"}],Jy=()=>a.jsx(Y,{title:"Dynamic items",preview:a.jsxs(ft,{children:[a.jsx(pt,{children:a.jsx(N,{children:"Open"})}),a.jsx(vt,{items:Iy,onAction:l=>console.log(l),children:l=>a.jsx(Te,{children:l.label},l.key)})]}),code:a.jsx(a.Fragment,{children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "oks-ui";

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
</Dropdown>`})}),Wy=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(zy,{}),a.jsx(Oy,{}),a.jsx(My,{}),a.jsx(_y,{}),a.jsx(Uy,{}),a.jsx(Ly,{}),a.jsx(Hy,{}),a.jsx(Gy,{}),a.jsx(Yy,{}),a.jsx(qy,{}),a.jsx(Vy,{}),a.jsx(Xy,{}),a.jsx(Ky,{}),a.jsx(Qy,{}),a.jsx(Fy,{}),a.jsx($y,{}),a.jsx(Jy,{})]}),Py=()=>a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"Hello",placement:"top",delay:0,children:a.jsx(N,{children:"Hover me"})}),a.jsx(Re,{content:"No delay",placement:"right",delay:0,closeDelay:0,children:a.jsx(N,{variant:"bordered",children:"Focus me"})})]}),code:a.jsx(a.Fragment,{children:`import { Tooltip } from "oks-ui";

<Tooltip content="Hello" placement="top" delay={0}>
  <button type="button">Hover me</button>
</Tooltip>`})}),ek=()=>{const[l,i]=h.useState(!1);return a.jsx(Y,{title:"Controlled",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>i(u=>!u),children:l?"Close tooltip":"Open tooltip"}),a.jsx(Re,{content:"Hello",isOpen:l,onOpenChange:i,children:a.jsx(N,{variant:"bordered",children:"Hover / Focus"})})]}),code:a.jsx(a.Fragment,{children:`import { useState } from "react";
import { Tooltip } from "oks-ui";

const [open, setOpen] = useState(false);

<Tooltip content="Hello" isOpen={open} onOpenChange={setOpen}>
  <button type="button">Hover / Focus</button>
</Tooltip>`})})},tk=()=>{const[l,i]=h.useState(0);return a.jsx(Y,{title:"Default open / onClose",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"I start open",defaultOpen:!0,onClose:()=>i(u=>u+1),showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"Focus / hover"})}),a.jsxs("div",{className:"text-sm",children:["Closed count: ",l]})]}),code:a.jsx(a.Fragment,{children:'<Tooltip content="..." defaultOpen onClose={() => {}}>...</Tooltip>'})})},nk=()=>a.jsx(Y,{title:"Sizes",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"Small",size:"sm",children:a.jsx(N,{variant:"bordered",children:"sm"})}),a.jsx(Re,{content:"Medium",size:"md",children:a.jsx(N,{variant:"bordered",children:"md"})}),a.jsx(Re,{content:"Large",size:"lg",children:a.jsx(N,{variant:"bordered",children:"lg"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="Small" size="sm">...</Tooltip>
<Tooltip content="Medium" size="md">...</Tooltip>
<Tooltip content="Large" size="lg">...</Tooltip>`})}),ak=()=>a.jsx(Y,{title:"Colors",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"Default",color:"default",showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"default"})}),a.jsx(Re,{content:"Primary",color:"primary",showArrow:!0,children:a.jsx(N,{color:"primary",children:"primary"})}),a.jsx(Re,{content:"Secondary",color:"secondary",showArrow:!0,children:a.jsx(N,{color:"secondary",children:"secondary"})}),a.jsx(Re,{content:"Info",color:"info",showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"info"})}),a.jsx(Re,{content:"Success",color:"success",showArrow:!0,children:a.jsx(N,{color:"success",children:"success"})}),a.jsx(Re,{content:"Warning",color:"warning",showArrow:!0,children:a.jsx(N,{color:"warning",children:"warning"})}),a.jsx(Re,{content:"Danger",color:"danger",showArrow:!0,children:a.jsx(N,{color:"danger",children:"danger"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="Primary" color="primary" showArrow>...</Tooltip>
<Tooltip content="Success" color="success" showArrow>...</Tooltip>`})}),ok=()=>a.jsx(Y,{title:"Color depth",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"Depth 100",color:"primary",colorDepth:100,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"100"})}),a.jsx(Re,{content:"Depth 500",color:"primary",colorDepth:500,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"500"})}),a.jsx(Re,{content:"Depth 900",color:"primary",colorDepth:900,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"900"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="Depth 100" color="primary" colorDepth={100} showArrow>...</Tooltip>
<Tooltip content="Depth 900" color="primary" colorDepth={900} showArrow>...</Tooltip>`})}),rk=()=>a.jsx(Y,{title:"Radius and shadow",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"radius=none",radius:"none",showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"none"})}),a.jsx(Re,{content:"radius=full",radius:"full",showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"full"})}),a.jsx(Re,{content:"shadow=none",shadow:"none",showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"shadow none"})}),a.jsx(Re,{content:"shadow=lg",shadow:"lg",showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"shadow lg"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="radius=full" radius="full" showArrow>...</Tooltip>
<Tooltip content="shadow=lg" shadow="lg" showArrow>...</Tooltip>`})}),lk=()=>a.jsx(Y,{title:"Placement",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"Top start",placement:"top-start",children:a.jsx(N,{variant:"bordered",children:"Top-start"})}),a.jsx(Re,{content:"Right",placement:"right",offset:10,children:a.jsx(N,{variant:"bordered",children:"Right (offset)"})}),a.jsx(Re,{content:"Bottom end",placement:"bottom-end",containerPadding:20,children:a.jsx(N,{variant:"bordered",children:"Bottom-end"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="Top start" placement="top-start">
  <button type="button">Top-start</button>
</Tooltip>

<Tooltip content="Right" placement="right" offset={10}>
  <button type="button">Right</button>
</Tooltip>`})}),sk=()=>a.jsx(Y,{title:"Advanced positioning",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"crossOffset=16",placement:"top",crossOffset:16,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"crossOffset"})}),a.jsx(Re,{content:"Close on outside click only",isDismissable:!0,shouldCloseOnInteractOutside:l=>l.tagName!=="BUTTON",showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"Interact outside"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="crossOffset=16" crossOffset={16} showArrow>...</Tooltip>
<Tooltip
  content="Close on outside click only"
  isDismissable
  shouldCloseOnInteractOutside={(el) => el.tagName !== "BUTTON"}
>...</Tooltip>`})}),ik=()=>a.jsx(Y,{title:"Delay and closeDelay",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"delay=0",delay:0,children:a.jsx(N,{variant:"bordered",children:"delay 0"})}),a.jsx(Re,{content:"delay=600",delay:600,children:a.jsx(N,{variant:"bordered",children:"delay 600"})}),a.jsx(Re,{content:"closeDelay=0",closeDelay:0,children:a.jsx(N,{variant:"bordered",children:"close 0"})}),a.jsx(Re,{content:"closeDelay=1500",closeDelay:1500,children:a.jsx(N,{variant:"bordered",children:"close 1500"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="delay=600" delay={600}>...</Tooltip>
<Tooltip content="closeDelay=1500" closeDelay={1500}>...</Tooltip>`})}),ck=()=>a.jsx(Y,{title:"Arrow",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"With arrow",showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"Hover me"})}),a.jsx(Re,{content:"Primary",showArrow:!0,color:"primary",children:a.jsx(N,{color:"primary",children:"Primary"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="With arrow" showArrow>
  <button type="button">Hover me</button>
</Tooltip>`})}),uk=()=>a.jsx(Y,{title:"Behavior",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"No flip",placement:"right",shouldFlip:!1,containerPadding:0,children:a.jsx(N,{variant:"bordered",children:"shouldFlip=false"})}),a.jsx(Re,{content:"Dismissable",isDismissable:!0,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"isDismissable"})}),a.jsx(Re,{content:"No blur close",shouldCloseOnBlur:!1,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"shouldCloseOnBlur=false"})}),a.jsx(Re,{content:"Esc disabled",isKeyboardDismissDisabled:!0,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"Esc disabled"})}),a.jsx(Re,{content:"Scale trigger",triggerScaleOnOpen:!0,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"triggerScaleOnOpen"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="Dismissable" isDismissable showArrow>...</Tooltip>
<Tooltip content="Esc disabled" isKeyboardDismissDisabled showArrow>...</Tooltip>`})}),dk=()=>a.jsx(Y,{title:"Disabled",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(Re,{content:"You won't see this",isDisabled:!0,children:a.jsx(N,{variant:"bordered",children:"Disabled tooltip"})}),a.jsx(Re,{content:"Disabled tooltip",isDisabled:!0,showArrow:!0,children:a.jsx(N,{color:"danger",children:"Danger"})})]}),code:a.jsx(a.Fragment,{children:`<Tooltip content="Disabled tooltip" isDisabled>
  <button type="button">Disabled tooltip</button>
</Tooltip>`})}),fk=()=>a.jsx(Y,{title:"Class names",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:a.jsx(Re,{content:"Custom slot classes",showArrow:!0,classNames:{content:"border border-red-400",arrow:"text-red-400"},children:a.jsx(N,{variant:"bordered",children:"Hover me"})})}),code:a.jsx(a.Fragment,{children:`<Tooltip
  content="Custom slot classes"
  showArrow
  classNames={{
    content: "border border-red-400",
    arrow: "text-red-400",
  }}
>
  <button type="button">Hover me</button>
</Tooltip>`})}),pk=()=>{const[l,i]=h.useState(null);return a.jsx(Y,{title:"Portal container",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:a.jsxs("div",{className:"relative border border-white/10 rounded-md p-3",ref:i,children:[a.jsx("div",{className:"text-sm opacity-80",children:"Custom container"}),a.jsx("div",{className:"mt-2",children:a.jsx(Re,{content:"Portaled into the bordered box",portalContainer:l,showArrow:!0,children:a.jsx(N,{variant:"bordered",children:"Hover"})})})]})}),code:a.jsx(a.Fragment,{children:'<Tooltip content="..." portalContainer={element}>...</Tooltip>'})})},mk=()=>{const[l,i]=h.useState(!1);return a.jsx(Y,{title:"Animation",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsxs(N,{variant:"bordered",onPress:()=>i(u=>!u),children:["disableAnimation: ",String(l)]}),a.jsx(Re,{content:"Hover me",disableAnimation:l,showArrow:!0,children:a.jsx(N,{children:"Trigger"})})]}),code:a.jsx(a.Fragment,{children:'<Tooltip content="..." disableAnimation>...</Tooltip>'})})},hk=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(Py,{}),a.jsx(ek,{}),a.jsx(tk,{}),a.jsx(nk,{}),a.jsx(ak,{}),a.jsx(ok,{}),a.jsx(rk,{}),a.jsx(lk,{}),a.jsx(sk,{}),a.jsx(ik,{}),a.jsx(ck,{}),a.jsx(uk,{}),a.jsx(dk,{}),a.jsx(fk,{}),a.jsx(pk,{}),a.jsx(mk,{})]}),vk=()=>a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>et("Saved"),children:"Simple"}),a.jsx(N,{variant:"bordered",onPress:()=>et({title:"Saved",message:"Profile updated",type:"success"}),children:"With title"})]}),code:a.jsx(a.Fragment,{children:`import { toast } from "oks-ui";

toast("Saved");
toast({ title: "Saved", message: "Profile updated", type: "success" });`})}),gk=()=>a.jsx(Y,{title:"ToastProvider (mounted in main.jsx)",preview:a.jsx("div",{className:"text-sm opacity-80",children:"ToastProvider is already mounted at the playground root, so the toast APIs work anywhere."}),code:a.jsx(a.Fragment,{children:`import { ToastProvider } from "oks-ui";

<ToastProvider placement="bottom-right" maxVisibleToasts={3}>
  <App />
</ToastProvider>`})}),xk=()=>a.jsx(Y,{title:"addToast (HeroUI-style)",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>Wc({title:"Saved",description:"Your changes have been saved.",color:"success"}),children:"Success"}),a.jsx(N,{variant:"bordered",onPress:()=>Wc({title:"Network",description:"Something went wrong.",color:"danger"}),children:"Error"})]}),code:a.jsx(a.Fragment,{children:`import { addToast } from "oks-ui";

addToast({ title: "Saved", description: "Your changes have been saved.", color: "success" });`})});function bk(){return new Promise((l,i)=>{setTimeout(()=>{Math.random()>.4?l(!0):i(new Error("Failed"))},900)})}const yk=()=>a.jsx(Y,{title:"addToast with promise",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:a.jsx(N,{onPress:()=>Wc({description:"Saving…",promise:bk(),loadingComponent:a.jsx("span",{className:"text-sm",children:"⏳"})}),children:"Save demo"})}),code:a.jsx(a.Fragment,{children:'addToast({ description: "Saving…", promise, loadingComponent: <span>⏳</span> });'})}),kk=()=>a.jsx(Y,{title:"Types",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>et.info("Heads up"),children:"Info"}),a.jsx(N,{color:"success",onPress:()=>et.success("Saved"),children:"Success"}),a.jsx(N,{color:"warning",onPress:()=>et.warning("Be careful"),children:"Warning"}),a.jsx(N,{color:"danger",onPress:()=>et.error("Something went wrong"),children:"Error"})]}),code:a.jsx(a.Fragment,{children:`toast.info("Heads up");
toast.success("Saved");
toast.warning("Be careful");
toast.error("Something went wrong");`})}),wk=()=>a.jsx(Y,{title:"Placement",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{variant:"bordered",onPress:()=>et("Top left",{position:"top-left"}),children:"Top-left"}),a.jsx(N,{variant:"bordered",onPress:()=>et("Top center",{position:"top-center"}),children:"Top-center"}),a.jsx(N,{variant:"bordered",onPress:()=>et("Bottom center",{position:"bottom-center"}),children:"Bottom-center"})]}),code:a.jsx(a.Fragment,{children:`toast("Top left", { position: "top-left" });
toast("Top center", { position: "top-center" });
toast("Bottom center", { position: "bottom-center" });`})}),jk=()=>a.jsx(Y,{title:"Variants",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{variant:"bordered",onPress:()=>et("Solid",{variant:"solid",color:"primary"}),children:"Solid"}),a.jsx(N,{variant:"bordered",onPress:()=>et("Soft",{variant:"soft",color:"secondary"}),children:"Soft"}),a.jsx(N,{variant:"bordered",onPress:()=>et("Outline",{variant:"outline",color:"warning"}),children:"Outline"})]}),code:a.jsx(a.Fragment,{children:`toast("Solid", { variant: "solid", color: "primary" });
toast("Soft", { variant: "soft", color: "secondary" });
toast("Outline", { variant: "outline", color: "warning" });`})}),Sk=()=>a.jsx(Y,{title:"Tone and size",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>et({title:"Tone: secondary",description:"Toast size: xl",tone:"secondary",size:"xl"}),children:"secondary + xl"}),a.jsx(N,{color:"danger",onPress:()=>et({title:"Tone: danger",description:"Toast size: sm",tone:"danger",size:"sm"}),children:"danger + sm"})]}),code:a.jsx(a.Fragment,{children:'toast({ title: "Tone", description: "Size", tone: "secondary", size: "xl" });'})}),Tk=()=>{const l=h.useRef(null);return a.jsx(Y,{title:"Duration and progress",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>{l.current=et("Auto dismiss (2s)",{timeout:2e3,shouldShowTimeoutProgress:!0})},children:"timeout=2000"}),a.jsx(N,{variant:"bordered",onPress:()=>{l.current=et("Persistent (manual close)",{persistent:!0,dismissible:!0})},children:"persistent"}),a.jsx(N,{variant:"bordered",onPress:()=>{typeof l.current=="number"&&et.dismiss(l.current)},children:"Dismiss last"})]}),code:a.jsx(a.Fragment,{children:`toast("Auto dismiss (2s)", { timeout: 2000, shouldShowTimeoutProgress: true });
toast("Persistent", { persistent: true, dismissible: true });`})})},Dk=()=>a.jsx(Y,{title:"Action",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:a.jsx(N,{onPress:()=>et({title:"Undo?",description:"Item deleted.",color:"warning",action:{label:"Undo",onClick:()=>et.success("Undone")}}),children:"With action"})}),code:a.jsx(a.Fragment,{children:`toast({
  title: "Undo?",
  description: "Item deleted.",
  action: { label: "Undo", onClick: () => {} },
});`})}),Ck=()=>a.jsx(Y,{title:"Icons and close button",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{variant:"bordered",onPress:()=>et({description:"No icon",hideIcon:!0}),children:"hideIcon"}),a.jsx(N,{variant:"bordered",onPress:()=>et({description:"No close button",hideCloseButton:!0}),children:"hideCloseButton"}),a.jsx(N,{variant:"bordered",onPress:()=>et({description:"Custom close icon",closeIcon:a.jsx("span",{"aria-hidden":"true",children:"×"})}),children:"closeIcon"})]}),code:a.jsx(a.Fragment,{children:`toast({ description: "No icon", hideIcon: true });
toast({ description: "No close button", hideCloseButton: true });
toast({ description: "Custom close icon", closeIcon: <span aria-hidden="true">×</span> });`})}),Bk=()=>a.jsx(Y,{title:"End content and loading component",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{variant:"bordered",onPress:()=>et({title:"Export ready",description:"Download your file",endContent:a.jsx("span",{className:"text-sm",children:"⬇"})}),children:"endContent"}),a.jsx(N,{onPress:()=>et({type:"loading",message:"Uploading...",persistent:!0,dismissible:!1,loadingComponent:a.jsx("span",{className:"text-sm",children:"⏳"})}),children:"loadingComponent"})]}),code:a.jsx(a.Fragment,{children:`toast({ title: "Export ready", endContent: <span>⬇</span> });
toast({ type: "loading", message: "Uploading...", loadingComponent: <span>⏳</span> });`})}),Nk=()=>a.jsx(Y,{title:"Update and dismiss",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>{const l=et("Uploading...",{type:"loading",persistent:!0,dismissible:!1});setTimeout(()=>{et.update(l,{type:"success",message:"Uploaded",persistent:!1})},900)},children:"Upload demo"}),a.jsx(N,{variant:"bordered",onPress:()=>et.dismissAll(),children:"Dismiss all"})]}),code:a.jsx(a.Fragment,{children:`const id = toast("Uploading...", { type: "loading", persistent: true, dismissible: false });
toast.update(id, { type: "success", message: "Uploaded", persistent: false });
toast.dismiss(id);
toast.dismissAll();`})}),Ak=()=>{const[l,i]=h.useState(0),[u,c]=h.useState("-");return a.jsx(Y,{title:"id and onDismiss",preview:a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>{const f=l+1;i(f),et({id:42,title:"Single toast (id=42)",description:`Updated count: ${f}`,shouldShowTimeoutProgress:!0,timeout:2500,onDismiss:p=>c(String(p))})},children:"Update same id"}),a.jsxs("div",{className:"text-sm",children:["Last dismissed: ",u]})]}),code:a.jsx(a.Fragment,{children:'toast({ id: 42, description: "This replaces the existing toast with id=42", onDismiss: (id) => {} });'})})};function Ek(){return new Promise((l,i)=>{setTimeout(()=>{Math.random()>.4?l(!0):i(new Error("Failed"))},800)})}const zk=()=>a.jsx(Y,{title:"Promise helper",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:a.jsx(N,{onPress:()=>et.promise(Ek(),{loading:{message:"Saving...",persistent:!0,dismissible:!1},success:()=>({message:"Saved",type:"success",persistent:!1}),error:()=>({message:"Failed",type:"error",persistent:!1})}),children:"Save demo"})}),code:a.jsx(a.Fragment,{children:`toast.promise(promise, {
  loading: { message: "Saving...", persistent: true, dismissible: false },
  success: () => ({ message: "Saved", type: "success", persistent: false }),
  error: () => ({ message: "Failed", type: "error", persistent: false }),
});`})}),Ok=()=>{const l=Nx();return a.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[a.jsx(N,{onPress:()=>l.success("Saved"),children:"Success"}),a.jsx(N,{color:"danger",onPress:()=>l.error("Failed"),children:"Error"})]})},Rk=()=>a.jsx(Y,{title:"useToast() hook",preview:a.jsx(Ok,{}),code:a.jsx(a.Fragment,{children:`import { useToast } from "oks-ui";

const t = useToast();
t.success("Saved");
t.error("Failed");`})}),Mk=()=>a.jsx(Y,{title:"Class names",preview:a.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:a.jsx(N,{variant:"bordered",onPress:()=>et({title:"Custom styles",description:"Slots customized via classNames",classNames:{base:"border border-blue-400",title:"text-blue-300",description:"text-blue-200",progressIndicator:"bg-blue-400"},shouldShowTimeoutProgress:!0,timeout:3500}),children:"Show toast"})}),code:a.jsx(a.Fragment,{children:`toast({
  title: "Custom styles",
  description: "Slots customized via classNames",
  classNames: { base: "...", title: "...", description: "..." },
});`})}),_k=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(gk,{}),a.jsx(vk,{}),a.jsx(xk,{}),a.jsx(yk,{}),a.jsx(kk,{}),a.jsx(wk,{}),a.jsx(jk,{}),a.jsx(Sk,{}),a.jsx(Tk,{}),a.jsx(Dk,{}),a.jsx(Ck,{}),a.jsx(Bk,{}),a.jsx(Nk,{}),a.jsx(Ak,{}),a.jsx(zk,{}),a.jsx(Rk,{}),a.jsx(Mk,{})]}),Uk=()=>{const[l,i]=Le.useState(!1);return a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsx(N,{color:"primary",onPress:()=>i(!0),children:"Open backdrop"}),a.jsx(Xr,{isOpen:l,onClose:()=>i(!1),children:a.jsx("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx("div",{className:"text-lg font-semibold",children:"Backdrop content"}),a.jsx("div",{className:"text-sm text-gray-600",children:"Click outside or press Escape to close."}),a.jsxs("div",{className:"flex gap-3 justify-end",children:[a.jsx(N,{variant:"bordered",onPress:()=>i(!1),children:"Cancel"}),a.jsx(N,{color:"primary",onPress:()=>i(!1),children:"Confirm"})]})]})})})]}),code:a.jsx(a.Fragment,{children:`import { Backdrop, Button } from "oks-ui";

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
}`})})},Lk=["fade","zoom","slideUp","slideDown","slideLeft","slideRight"],Hk=()=>{const[l,i]=Le.useState(!1),[u,c]=Le.useState("fade");return a.jsx(Y,{title:"Animation types",preview:a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[Lk.map(f=>a.jsx(N,{variant:u===f?"solid":"bordered",color:"primary",onPress:()=>{c(f),i(!0)},children:f},f)),a.jsx(Xr,{isOpen:l,onClose:()=>i(!1),animationType:u,animationDuration:.25,children:a.jsx("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:a.jsxs("div",{className:"flex items-center justify-between gap-3",children:[a.jsx("div",{className:"text-lg font-semibold",children:u}),a.jsx(N,{size:"sm",variant:"bordered",onPress:()=>i(!1),children:"Close"})]})})})]}),code:a.jsx(a.Fragment,{children:`<Backdrop
  isOpen={open}
  onClose={() => setOpen(false)}
  animationType="zoom"
  animationDuration={0.25}
>
  <div className="bg-white rounded-md p-6 w-full max-w-md">
    Content
  </div>
</Backdrop>`})})},Gk=()=>{const[l,i]=Le.useState(!1),[u,c]=Le.useState(!0),[f,p]=Le.useState(!0),[g,w]=Le.useState(!0),[v,b]=Le.useState(!0),[j,y]=Le.useState(80);return a.jsx(Y,{title:"Options",preview:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:u,onChange:D=>c(D.target.checked)}),a.jsx("span",{children:"blur"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:f,onChange:D=>p(D.target.checked)}),a.jsx("span",{children:"closeOnOutsideClick"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:g,onChange:D=>w(D.target.checked)}),a.jsx("span",{children:"closeOnEscape"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:v,onChange:D=>b(D.target.checked)}),a.jsx("span",{children:"lockScroll"})]})]}),a.jsxs("label",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"min-w-36",children:"backgroundOpacity"}),a.jsx("input",{type:"range",min:0,max:100,value:j,onChange:D=>y(Number(D.target.value))}),a.jsx("span",{className:"w-10 text-right",children:j})]}),a.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:a.jsx(N,{color:"primary",onPress:()=>i(!0),children:"Open with options"})}),a.jsx(Xr,{isOpen:l,onClose:()=>i(!1),blur:u,closeOnOutsideClick:f,closeOnEscape:g,lockScroll:v,backgroundOpacity:j,children:a.jsx("div",{className:"bg-white rounded-md p-6 w-full max-w-md shadow-xl",children:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"text-lg font-semibold",children:"Options applied"}),a.jsx("div",{className:"text-sm text-gray-600",children:"Try clicking outside or pressing Escape based on your toggles."}),a.jsx("div",{className:"flex justify-end",children:a.jsx(N,{color:"primary",onPress:()=>i(!1),children:"Close"})})]})})})]}),code:a.jsx(a.Fragment,{children:`<Backdrop
  isOpen={open}
  onClose={() => setOpen(false)}
  blur
  closeOnOutsideClick
  closeOnEscape
  lockScroll
  backgroundOpacity={80}
>
  <div className="bg-white rounded-md p-6 w-full max-w-md">
    Content
  </div>
</Backdrop>`})})},Yk=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(Uk,{}),a.jsx(Hk,{}),a.jsx(Gk,{})]}),qk=()=>a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"w-full max-w-xl bg-white rounded-md border border-gray-200 overflow-hidden",children:[a.jsx("div",{className:"p-4 font-semibold",children:"Account"}),a.jsx(Ba,{}),a.jsx("div",{className:"p-4 text-sm text-gray-600",children:"Profile settings and security options."}),a.jsx(Ba,{}),a.jsxs("div",{className:"p-4 flex items-center justify-between",children:[a.jsx("span",{className:"text-sm",children:"Notifications"}),a.jsx("span",{className:"text-sm text-gray-500",children:"Enabled"})]})]}),code:a.jsx(a.Fragment,{children:`import { Divider } from "oks-ui";

<div>
  <div>Section A</div>
  <Divider />
  <div>Section B</div>
</div>`})}),Vk=["fullWidth","inset","middle"],Xk=["primary","secondary","success","warning","danger"],Kk=()=>a.jsx(Y,{title:"Variants and tones",preview:a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"text-sm font-semibold",children:"Variants"}),Vk.map(l=>a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("div",{className:"text-xs text-gray-600",children:l}),a.jsx(Ba,{variant:l})]},l))]}),a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"text-sm font-semibold",children:"With text"}),a.jsx(Ba,{tone:"secondary",colorDepth:300,children:"OR"})]}),a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"text-sm font-semibold",children:"Tones"}),a.jsx("div",{className:"flex flex-col gap-3",children:Xk.map(l=>a.jsx(Ba,{tone:l,colorDepth:300},l))})]})]}),code:a.jsx(a.Fragment,{children:`<Divider variant="inset" />
<Divider tone="secondary" colorDepth={300}>OR</Divider>
<Divider orientation="vertical" />`})}),Qk=()=>a.jsx(Y,{title:"Vertical",preview:a.jsxs("div",{className:"flex items-stretch gap-4 h-24",children:[a.jsx("div",{className:"flex-1 bg-white rounded-md border border-gray-200 p-4",children:"Left"}),a.jsx(Ba,{orientation:"vertical",tone:"secondary",colorDepth:200}),a.jsx("div",{className:"flex-1 bg-white rounded-md border border-gray-200 p-4",children:"Right"})]}),code:a.jsx(a.Fragment,{children:`<div className="flex items-stretch h-24">
  <div className="flex-1">Left</div>
  <Divider orientation="vertical" />
  <div className="flex-1">Right</div>
</div>`})}),Zk=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(qk,{}),a.jsx(Kk,{}),a.jsx(Qk,{})]}),Fk=()=>{const[l,i]=Le.useState(!1),u=Le.useRef(null);return a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsx(N,{color:"primary",onPress:()=>i(!0),children:"Open drawer"}),a.jsx(cu,{isOpen:l,onClose:()=>i(!1),title:"Drawer title",initialFocusRef:u,actions:a.jsxs("div",{className:"flex justify-end gap-3",children:[a.jsx(N,{variant:"bordered",onPress:()=>i(!1),children:"Cancel"}),a.jsx(N,{color:"primary",onPress:()=>i(!1),children:"Save"})]}),children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx("div",{className:"text-sm text-gray-600",children:"This drawer uses Backdrop internally. Press Escape or click outside to close."}),a.jsx("input",{ref:u,className:"w-full border border-gray-300 rounded-md px-3 py-2",placeholder:"Initial focus"}),a.jsx("div",{className:"text-sm",children:"Content area supports any React nodes."})]})})]}),code:a.jsx(a.Fragment,{children:`import { Drawer, Button } from "oks-ui";

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
}`})})},$k=["left","right","top","bottom"],Ik=()=>{const[l,i]=Le.useState(!1),[u,c]=Le.useState("right");return a.jsx(Y,{title:"Positions",preview:a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[$k.map(f=>a.jsx(N,{color:"primary",variant:u===f?"solid":"bordered",onPress:()=>{c(f),i(!0)},children:f},f)),a.jsx(cu,{isOpen:l,onClose:()=>i(!1),position:u,title:`Position: ${u}`,children:a.jsx("div",{className:"text-sm text-gray-600",children:"Drawer slides based on the selected position."})})]}),code:a.jsx(a.Fragment,{children:`<Drawer
  isOpen={open}
  onClose={() => setOpen(false)}
  position="left"
  title="Left drawer"
>
  Content
</Drawer>`})})},Jk=()=>{const[l,i]=Le.useState(!1),[u,c]=Le.useState(!0),[f,p]=Le.useState(!0),[g,w]=Le.useState(!0),[v,b]=Le.useState(!0),[j,y]=Le.useState(80);return a.jsx(Y,{title:"Options",preview:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:u,onChange:D=>c(D.target.checked)}),a.jsx("span",{children:"dismissible"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:f,onChange:D=>p(D.target.checked)}),a.jsx("span",{children:"blur"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:g,onChange:D=>w(D.target.checked)}),a.jsx("span",{children:"closeOnOutsideClick"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:v,onChange:D=>b(D.target.checked)}),a.jsx("span",{children:"closeOnEscape"})]})]}),a.jsxs("label",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"min-w-36",children:"backgroundOpacity"}),a.jsx("input",{type:"range",min:0,max:100,value:j,onChange:D=>y(Number(D.target.value))}),a.jsx("span",{className:"w-10 text-right",children:j})]}),a.jsx("div",{className:"flex items-center gap-3",children:a.jsx(N,{color:"primary",onPress:()=>i(!0),children:"Open"})}),a.jsx(cu,{isOpen:l,onClose:()=>i(!1),title:"Drawer options",dismissible:u,blur:f,closeOnOutsideClick:g,closeOnEscape:v,backgroundOpacity:j,children:a.jsx("div",{className:"text-sm text-gray-600",children:"Toggle options above and reopen to see changes."})})]}),code:a.jsx(a.Fragment,{children:`<Drawer
  isOpen={open}
  onClose={() => setOpen(false)}
  dismissible
  closeOnOutsideClick
  closeOnEscape
  blur
  backgroundOpacity={80}
>
  Content
</Drawer>`})})},Wk=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(Fk,{}),a.jsx(Ik,{}),a.jsx(Jk,{})]}),Pk=()=>{const[l,i]=Le.useState(!1),u=Le.useRef(null);return a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsx(N,{color:"primary",onPress:()=>i(!0),children:"Open modal"}),a.jsx(uu,{isOpen:l,onClose:()=>i(!1),title:"Modal title",initialFocusRef:u,actions:a.jsxs("div",{className:"flex justify-end gap-3",children:[a.jsx(N,{variant:"bordered",onPress:()=>i(!1),children:"Cancel"}),a.jsx(N,{color:"primary",onPress:()=>i(!1),children:"Confirm"})]}),children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx("div",{className:"text-sm text-gray-600",children:"Click outside or press Escape to close."}),a.jsx("input",{ref:u,className:"w-full border border-gray-300 rounded-md px-3 py-2",placeholder:"Initial focus"})]})})]}),code:a.jsx(a.Fragment,{children:`import { Modal, Button } from "oks-ui";

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
}`})})},ew=["sm","md","lg"],tw=()=>{const[l,i]=Le.useState(!1),[u,c]=Le.useState("md");return a.jsx(Y,{title:"Sizes",preview:a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[ew.map(f=>a.jsx(N,{color:"primary",variant:u===f?"solid":"bordered",onPress:()=>{c(f),i(!0)},children:f},f)),a.jsx(uu,{isOpen:l,onClose:()=>i(!1),title:`Size: ${u}`,size:u,children:a.jsx("div",{className:"text-sm text-gray-600",children:"Modal width is controlled by the size prop."})})]}),code:a.jsx(a.Fragment,{children:`<Modal isOpen={open} onClose={onClose} size="lg" title="Large modal">
  Content
</Modal>`})})},nw=["fade","zoom","slideUp","slideDown","slideLeft","slideRight"],aw=()=>{const[l,i]=Le.useState(!1),[u,c]=Le.useState(!0),[f,p]=Le.useState(!0),[g,w]=Le.useState(!0),[v,b]=Le.useState(!0),[j,y]=Le.useState(80),[D,L]=Le.useState("slideUp");return a.jsx(Y,{title:"Options",preview:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:u,onChange:C=>c(C.target.checked)}),a.jsx("span",{children:"dismissible"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:f,onChange:C=>p(C.target.checked)}),a.jsx("span",{children:"blur"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:g,onChange:C=>w(C.target.checked)}),a.jsx("span",{children:"closeOnOutsideClick"})]}),a.jsxs("label",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:v,onChange:C=>b(C.target.checked)}),a.jsx("span",{children:"closeOnEscape"})]})]}),a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsx("span",{className:"text-sm min-w-28",children:"animationType"}),nw.map(C=>a.jsx(N,{size:"sm",color:"primary",variant:D===C?"solid":"bordered",onPress:()=>L(C),children:C},C))]}),a.jsxs("label",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"min-w-36",children:"backgroundOpacity"}),a.jsx("input",{type:"range",min:0,max:100,value:j,onChange:C=>y(Number(C.target.value))}),a.jsx("span",{className:"w-10 text-right",children:j})]}),a.jsx("div",{className:"flex items-center gap-3",children:a.jsx(N,{color:"primary",onPress:()=>i(!0),children:"Open"})}),a.jsx(uu,{isOpen:l,onClose:()=>i(!1),title:"Modal options",dismissible:u,blur:f,closeOnOutsideClick:g,closeOnEscape:v,backgroundOpacity:j,animationType:D,animationDuration:.25,children:a.jsx("div",{className:"text-sm text-gray-600",children:"Toggle options above and reopen to see changes."})})]}),code:a.jsx(a.Fragment,{children:`<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  dismissible
  closeOnOutsideClick
  closeOnEscape
  blur
  backgroundOpacity={80}
  animationType="slideUp"
>
  Content
</Modal>`})})},ow=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(Pk,{}),a.jsx(tw,{}),a.jsx(aw,{})]}),rw=()=>a.jsx(Y,{title:"How to usage",preview:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(Cn,{title:"Dashboard",as:"h2"}),a.jsx(Cn,{title:"Billing",as:"h4",color:"primary",icon:a.jsx("span",{className:"text-base",children:"★"}),iconPosition:"start"}),a.jsx(Cn,{title:"Settings",as:"h5",color:"secondary",icon:a.jsx("span",{className:"text-base",children:"→"}),iconPosition:"end"}),a.jsx(Cn,{title:"Slot classNames",as:"h6",color:"info",icon:a.jsx("span",{className:"text-base",children:"i"}),classNames:{base:"gap-1",title:"uppercase tracking-wide",icon:"text-blue-600"}})]}),code:a.jsx(a.Fragment,{children:`import { PageTitle } from "oks-ui";

<PageTitle title="Dashboard" as="h2" />
<PageTitle title="Billing" as="h4" color="primary" />`})}),lw=["black","default","primary","secondary","success","warning","danger","info"],sw=()=>a.jsx(Y,{title:"Colors",preview:a.jsx("div",{className:"flex flex-col gap-3",children:lw.map(l=>a.jsx(Cn,{as:"h5",title:`color="${l}"`,color:l},l))}),code:a.jsx(a.Fragment,{children:`<PageTitle title="Primary title" color="primary" />
<PageTitle title="Danger title" color="danger" colorDepth={600} />`})}),iw=()=>a.jsx(Y,{title:"Tooltip",preview:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(Cn,{title:"Hover me",as:"h4",tooltip:{message:"This tooltip comes from PageTitle.tooltip",side:"top",align:"center"}}),a.jsx(Cn,{title:"Derived from title",as:"h5",tooltip:{delay:0,closeDelay:0}}),a.jsx(Cn,{title:"Custom content",as:"h5",tooltip:{props:{delay:0,closeDelay:0},content:"This uses Avatar-style { props, content }"}}),a.jsx(Cn,{title:"Disabled tooltip",as:"h5",tooltip:{message:"Hidden",disabled:!0}})]}),code:a.jsx(a.Fragment,{children:`<PageTitle
  title="Hover me"
  tooltip={{ message: "Tooltip text", side: "top", align: "center" }}
/>

<PageTitle title="Derived from title" tooltip={{ delay: 0, closeDelay: 0 }} />

<PageTitle
  title="Custom content"
  tooltip={{ props: { delay: 0 }, content: "Custom tooltip" }}
/>`})}),cw=()=>a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(rw,{}),a.jsx(sw,{}),a.jsx(iw,{})]}),uw=()=>a.jsx("div",{className:"p-3",children:a.jsxs(su,{defaultSelectedKey:"alert",color:"primary",children:[a.jsx(Yt,{title:"Alert",children:a.jsx(Ab,{})},"alert"),a.jsx(Yt,{title:"Avatar",children:a.jsx(Qb,{})},"avatar"),a.jsx(Yt,{title:"Badge",children:a.jsx(ay,{})},"badge"),a.jsx(Yt,{title:"Button",children:a.jsx(by,{})},"button"),a.jsx(Yt,{title:"Chip",children:a.jsx(Ey,{})},"chip"),a.jsx(Yt,{title:"Dropdown",children:a.jsx(Wy,{})},"dropdown"),a.jsx(Yt,{title:"Divider",children:a.jsx(Zk,{})},"divider"),a.jsx(Yt,{title:"Backdrop",children:a.jsx(Yk,{})},"backdrop"),a.jsx(Yt,{title:"Drawer",children:a.jsx(Wk,{})},"drawer"),a.jsx(Yt,{title:"Modal",children:a.jsx(ow,{})},"modal"),a.jsx(Yt,{title:"PageTitle",children:a.jsx(cw,{})},"pageTitle"),a.jsx(Yt,{title:"Tooltip",children:a.jsx(hk,{})},"tooltip"),a.jsx(Yt,{title:"Toast",children:a.jsx(_k,{})},"toast")]})}),dw=()=>a.jsx(L0,{children:a.jsx(Pm,{path:"/",element:a.jsx(uw,{})})});Gg.createRoot(document.getElementById("root")).render(a.jsx(zx,{placement:"bottom-right",maxVisibleToasts:3,children:a.jsx(h.StrictMode,{children:a.jsx(ix,{children:a.jsx(dw,{})})})}));
