<<<<<<< HEAD
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=Q.type(e);return"function"!==n&&!Q.isWindow(e)&&(!(1!==e.nodeType||!t)||"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e,t,n){if(Q.isFunction(t))return Q.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return Q.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(se.test(t))return Q.filter(t,e,n);t=Q.filter(t,e)}return Q.grep(e,function(e){return U.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=de[e]={};return Q.each(e.match(fe)||[],function(e,n){t[n]=!0}),t}function s(){G.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Q.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Q.expando+a.uid++}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ye,"-$1").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:ve.test(n)?Q.parseJSON(n):n)}catch(e){}ge.set(e,t,n)}else n=void 0;return n}function l(){return!0}function c(){return!1}function f(){try{return G.activeElement}catch(e){}}function d(e,t){return Q.nodeName(e,"table")&&Q.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function p(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=qe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,r=e.length;n<r;n++)me.set(e[n],"globalEval",!t||me.get(t[n],"globalEval"))}function g(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(me.hasData(e)&&(o=me.access(e),s=me.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)Q.event.add(t,i,l[i][n])}ge.hasData(e)&&(a=ge.access(e),u=Q.extend({},a),ge.set(t,u))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Q.nodeName(e,t)?Q.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ce.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function b(t,n){var r,i=Q(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Q.css(i[0],"display");return i.detach(),o}function x(e){var t=G,n=He[e];return n||("none"!==(n=b(e,t))&&n||(Fe=(Fe||Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),(t=Fe[0].contentDocument).write(),t.close(),n=b(e,t),Fe.detach()),He[e]=n),n}function w(e,t,n){var r,i,o,s,a=e.style;return(n=n||We(e))&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Q.contains(e.ownerDocument,e)||(s=Q.style(e,t)),Re.test(s)&&Me.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function C(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function T(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Ve.length;i--;)if((t=Ve[i]+n)in e)return t;return r}function k(e,t,n){var r=ze.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function S(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;o<4;o+=2)"margin"===n&&(s+=Q.css(e,n+xe[o],!0,i)),r?("content"===n&&(s-=Q.css(e,"padding"+xe[o],!0,i)),"margin"!==n&&(s-=Q.css(e,"border"+xe[o]+"Width",!0,i))):(s+=Q.css(e,"padding"+xe[o],!0,i),"padding"!==n&&(s+=Q.css(e,"border"+xe[o]+"Width",!0,i)));return s}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=We(e),s="border-box"===Q.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=w(e,t,o))<0||null==i)&&(i=e.style[t]),Re.test(i))return i;r=s&&(Y.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+S(e,t,n||(s?"border":"content"),r,o)+"px"}function P(e,t){for(var n,r,i,o=[],s=0,a=e.length;s<a;s++)(r=e[s]).style&&(o[s]=me.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&we(r)&&(o[s]=me.access(r,"olddisplay",x(r.nodeName)))):(i=we(r),"none"===n&&i||me.set(r,"olddisplay",i?n:Q.css(r,"display"))));for(s=0;s<a;s++)(r=e[s]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function D(e,t,n,r,i){return new D.prototype.init(e,t,n,r,i)}function N(){return setTimeout(function(){Ke=void 0}),Ke=Q.now()}function $(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=xe[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function j(e,t,n){for(var r,i=(et[t]||[]).concat(et["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function _(e,t){var n,r,i,o,s;for(n in e)if(r=Q.camelCase(n),i=t[r],o=e[n],Q.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=Q.cssHooks[r])&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function A(e,t,n){var r,i,o=0,s=Ze.length,a=Q.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Ke||N(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;o<s;o++)l.tweens[o].run(r);return a.notifyWith(e,[l,r,n]),r<1&&s?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:Q.extend({},t),opts:Q.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ke||N(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Q.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(_(c,l.opts.specialEasing);o<s;o++)if(r=Ze[o].call(l,e,c,l.opts))return r;return Q.map(c,j,l),Q.isFunction(l.opts.start)&&l.opts.start.call(e,l),Q.fx.timer(Q.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function q(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(fe)||[];if(Q.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,t,n,r){function i(a){var u;return o[a]=!0,Q.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===gt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function O(e,t){var n,r,i=Q.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Q.extend(!0,e,r),e}function F(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}if(o)return o!==u[0]&&u.unshift(o),n[o]}function H(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function M(e,t,n,r){var i;if(Q.isArray(t))Q.each(t,function(t,i){n||wt.test(e)?r(e,i):M(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==Q.type(t))r(e,t);else for(i in t)M(e+"["+i+"]",t[i],n,r)}function R(e){return Q.isWindow(e)?e:9===e.nodeType&&e.defaultView}var W=[],B=W.slice,z=W.concat,I=W.push,U=W.indexOf,X={},V=X.toString,K=X.hasOwnProperty,Y={},G=e.document,J="2.1.4",Q=function(e,t){return new Q.fn.init(e,t)},Z=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ee=/^-ms-/,te=/-([\da-z])/gi,ne=function(e,t){return t.toUpperCase()};Q.fn=Q.prototype={jquery:J,constructor:Q,selector:"",length:0,toArray:function(){return B.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:B.call(this)},pushStack:function(e){var t=Q.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Q.each(this,e,t)},map:function(e){return this.pushStack(Q.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(B.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:I,sort:W.sort,splice:W.splice},Q.extend=Q.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||Q.isFunction(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(Q.isPlainObject(r)||(i=Q.isArray(r)))?(i?(i=!1,o=n&&Q.isArray(n)?n:[]):o=n&&Q.isPlainObject(n)?n:{},s[t]=Q.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},Q.extend({expando:"jQuery"+(J+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Q.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Q.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return!("object"!==Q.type(e)||e.nodeType||Q.isWindow(e)||e.constructor&&!K.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?X[V.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=Q.trim(e))&&(1===e.indexOf("use strict")?(t=G.createElement("script"),t.text=e,G.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ee,"ms-").replace(te,ne)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i=0,o=e.length,s=n(e);if(r){if(s)for(;i<o&&!1!==t.apply(e[i],r);i++);else for(i in e)if(!1===t.apply(e[i],r))break}else if(s)for(;i<o&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(Z,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?Q.merge(r,"string"==typeof e?[e]:e):I.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:U.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i]);return r},map:function(e,t,r){var i,o=0,s=e.length,a=[];if(n(e))for(;o<s;o++)null!=(i=t(e[o],o,r))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,r))&&a.push(i);return z.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),Q.isFunction(e))return r=B.call(arguments,2),i=function(){return e.apply(t||this,r.concat(B.call(arguments)))},i.guid=e.guid=e.guid||Q.guid++,i},now:Date.now,support:Y}),Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){X["[object "+t+"]"]=t.toLowerCase()});var re=function(e){function t(e,t,n,r){var i,o,s,a,l,f,d,p,h,m;if((t?t.ownerDocument||t:H)!==$&&N(t),t=t||$,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!r&&_){if(11!==a&&(i=ge.exec(e)))if(s=i[1]){if(9===a){if(!(o=t.getElementById(s))||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&O(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return G.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&b.getElementsByClassName)return G.apply(n,t.getElementsByClassName(s)),n}if(b.qsa&&(!A||!A.test(e))){if(p=d=F,h=t,m=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(f=T(e),(d=t.getAttribute("id"))?p=d.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",l=f.length;l--;)f[l]=p+c(f[l]);h=ve.test(e)&&u(t.parentNode)||t,m=f.join(",")}if(m)try{return G.apply(n,h.querySelectorAll(m)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return S(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>x.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=$.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)x.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||U)-(~e.sourceIndex||U);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function u(e){return e&&void 0!==e.getElementsByTagName&&e}function l(){}function c(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function f(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=R++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[M,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[F]||(t[F]={}),(a=u[r])&&a[0]===M&&a[1]===o)return l[2]=a[2];if(u[r]=l,l[2]=e(t,n,s))return!0}}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function p(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function h(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),l&&t.push(a)));return s}function m(e,t,n,i,o,s){return i&&!i[F]&&(i=m(i)),o&&!o[F]&&(o=m(o,s)),r(function(r,s,a,u){var l,c,f,d=[],m=[],g=s.length,v=r||p(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?v:h(v,d,e,a,u),b=n?o||(r?e:g||i)?[]:s:y;if(n&&n(y,b,a,u),i)for(l=h(b,m),i(l,[],a,u),c=l.length;c--;)(f=l[c])&&(b[m[c]]=!(y[m[c]]=f));if(r){if(o||e){if(o){for(l=[],c=b.length;c--;)(f=b[c])&&l.push(y[c]=f);o(null,b=[],l,u)}for(c=b.length;c--;)(f=b[c])&&(l=o?Q(r,f):d[c])>-1&&(r[l]=!(s[l]=f))}}else b=h(b===s?b.splice(g,b.length):b),o?o(null,s,b,u):G.apply(s,b)})}function g(e){for(var t,n,r,i=e.length,o=x.relative[e[0].type],s=o||x.relative[" "],a=o?1:0,u=f(function(e){return e===t},s,!0),l=f(function(e){return Q(t,e)>-1},s,!0),p=[function(e,n,r){var i=!o&&(r||n!==E)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];a<i;a++)if(n=x.relative[e[a].type])p=[f(d(p),n)];else{if((n=x.filter[e[a].type].apply(null,e[a].matches))[F]){for(r=++a;r<i&&!x.relative[e[r].type];r++);return m(a>1&&d(p),a>1&&c(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(se,"$1"),n,a<r&&g(e.slice(a,r)),r<i&&g(e=e.slice(r)),r<i&&c(e))}p.push(n)}return d(p)}function v(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,l){var c,f,d,p=0,m="0",g=r&&[],v=[],y=E,b=r||o&&x.find.TAG("*",l),w=M+=null==y?1:Math.random()||.1,C=b.length;for(l&&(E=s!==$&&s);m!==C&&null!=(c=b[m]);m++){if(o&&c){for(f=0;d=e[f++];)if(d(c,s,a)){u.push(c);break}l&&(M=w)}i&&((c=!d&&c)&&p--,r&&g.push(c))}if(p+=m,i&&m!==p){for(f=0;d=n[f++];)d(g,v,s,a);if(r){if(p>0)for(;m--;)g[m]||v[m]||(v[m]=K.call(u));v=h(v)}G.apply(u,v),l&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(u)}return l&&(M=w,E=y),g};return i?r(s):s}var y,b,x,w,C,T,k,S,E,P,D,N,$,j,_,A,q,L,O,F="sizzle"+1*new Date,H=e.document,M=0,R=0,W=n(),B=n(),z=n(),I=function(e,t){return e===t&&(D=!0),0},U=1<<31,X={}.hasOwnProperty,V=[],K=V.pop,Y=V.push,G=V.push,J=V.slice,Q=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\x20\\t\\r\\n\\f]",te="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ne=te.replace("w","w#"),re="\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ne+"))|)"+ee+"*\\]",ie=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",oe=new RegExp(ee+"+","g"),se=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),ue=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),le=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),ce=new RegExp(ie),fe=new RegExp("^"+ne+"$"),de={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te.replace("w","w*")+")"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+ie),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,ye=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),xe=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},we=function(){N()};try{G.apply(V=J.call(H.childNodes),H.childNodes),V[H.childNodes.length].nodeType}catch(e){G={apply:V.length?function(e,t){Y.apply(e,J.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}b=t.support={},C=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},N=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:H;return r!==$&&9===r.nodeType&&r.documentElement?($=r,j=r.documentElement,(n=r.defaultView)&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",we,!1):n.attachEvent&&n.attachEvent("onunload",we)),_=!C(r),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=me.test(r.getElementsByClassName),b.getById=i(function(e){return j.appendChild(e).id=F,!r.getElementsByName||!r.getElementsByName(F).length}),b.getById?(x.find.ID=function(e,t){if(void 0!==t.getElementById&&_){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},x.filter.ID=function(e){var t=e.replace(be,xe);return function(e){return e.getAttribute("id")===t}}):(delete x.find.ID,x.filter.ID=function(e){var t=e.replace(be,xe);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),x.find.TAG=b.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=b.getElementsByClassName&&function(e,t){if(_)return t.getElementsByClassName(e)},q=[],A=[],(b.qsa=me.test(r.querySelectorAll))&&(i(function(e){j.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&A.push("[*^$]="+ee+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||A.push("\\["+ee+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+F+"-]").length||A.push("~="),e.querySelectorAll(":checked").length||A.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||A.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&A.push("name"+ee+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||A.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),A.push(",.*:")})),(b.matchesSelector=me.test(L=j.matches||j.webkitMatchesSelector||j.mozMatchesSelector||j.oMatchesSelector||j.msMatchesSelector))&&i(function(e){b.disconnectedMatch=L.call(e,"div"),L.call(e,"[s!='']:x"),q.push("!=",ie)}),A=A.length&&new RegExp(A.join("|")),q=q.length&&new RegExp(q.join("|")),t=me.test(j.compareDocumentPosition),O=t||me.test(j.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},I=t?function(e,t){if(e===t)return D=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===H&&O(H,e)?-1:t===r||t.ownerDocument===H&&O(H,t)?1:P?Q(P,e)-Q(P,t):0:4&n?-1:1)}:function(e,t){if(e===t)return D=!0,0;var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:P?Q(P,e)-Q(P,t):0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===H?-1:l[i]===H?1:0},r):$},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==$&&N(e),n=n.replace(le,"='$1']"),b.matchesSelector&&_&&(!q||!q.test(n))&&(!A||!A.test(n)))try{var r=L.call(e,n);if(r||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,$,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==$&&N(e),O(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==$&&N(e);var n=x.attrHandle[t.toLowerCase()],r=n&&X.call(x.attrHandle,t.toLowerCase())?n(e,t,!_):void 0;return void 0!==r?r:b.attributes||!_?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(D=!b.detectDuplicates,P=!b.sortStable&&e.slice(0),e.sort(I),D){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return P=null,e},w=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=w(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=w(t);return n},(x=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(be,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ce.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(oe," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,m=o!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!u&&!a;if(g){if(o){for(;m;){for(f=t;f=f[m];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(p=(l=(c=g[F]||(g[F]={}))[e]||[])[0]===M&&l[1],d=l[0]===M&&l[2],f=p&&g.childNodes[p];f=++p&&f&&f[m]||(d=p=0)||h.pop();)if(1===f.nodeType&&++d&&f===t){c[e]=[M,p,d];break}}else if(y&&(l=(t[F]||(t[F]={}))[e])&&l[0]===M)d=l[1];else for(;(f=++p&&f&&f[m]||(d=p=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++d||(y&&((f[F]||(f[F]={}))[e]=[M,d]),f!==t)););return(d-=i)===r||d%r==0&&d/r>=0}}},PSEUDO:function(e,n){var i,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[F]?o(n):o.length>1?(i=[e,e,"",n],x.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=Q(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=k(e.replace(se,"$1"));return i[F]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(be,xe),function(t){return(t.textContent||t.innerText||w(t)).indexOf(e)>-1}}),lang:r(function(e){return fe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,xe).toLowerCase(),function(t){var n;do{if(n=_?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===j},focus:function(e){return e===$.activeElement&&(!$.hasFocus||$.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:a(function(){return[0]}),last:a(function(e,t){return[t-1]}),eq:a(function(e,t,n){return[n<0?n+t:n]}),even:a(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:a(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:a(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:a(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=x.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[y]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(y);for(y in{submit:!0,reset:!0})x.pseudos[y]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(y);return l.prototype=x.filters=x.pseudos,x.setFilters=new l,T=t.tokenize=function(e,n){var r,i,o,s,a,u,l,c=B[e+" "];if(c)return n?0:c.slice(0);for(a=e,u=[],l=x.preFilter;a;){r&&!(i=ae.exec(a))||(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=ue.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),a=a.slice(r.length));for(s in x.filter)!(i=de[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):B(e,u).slice(0)},k=t.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(t||(t=T(e)),n=t.length;n--;)o=g(t[n]),o[F]?r.push(o):i.push(o);(o=z(e,v(i,r))).selector=e}return o},S=t.select=function(e,t,n,r){var i,o,s,a,l,f="function"==typeof e&&e,d=!r&&T(e=f.selector||e);if(n=n||[],1===d.length){if((o=d[0]=d[0].slice(0)).length>2&&"ID"===(s=o[0]).type&&b.getById&&9===t.nodeType&&_&&x.relative[o[1].type]){if(!(t=(x.find.ID(s.matches[0].replace(be,xe),t)||[])[0]))return n;f&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(s=o[i],!x.relative[a=s.type]);)if((l=x.find[a])&&(r=l(s.matches[0].replace(be,xe),ve.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&c(o)))return G.apply(n,r),n;break}}return(f||k(e,d))(r,t,!_,n,ve.test(e)&&u(t.parentNode)||t),n},b.sortStable=F.split("").sort(I).join("")===F,b.detectDuplicates=!!D,N(),b.sortDetached=i(function(e){return 1&e.compareDocumentPosition($.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);Q.find=re,Q.expr=re.selectors,Q.expr[":"]=Q.expr.pseudos,Q.unique=re.uniqueSort,Q.text=re.getText,Q.isXMLDoc=re.isXML,Q.contains=re.contains;var ie=Q.expr.match.needsContext,oe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,se=/^.[^:#\[\.,]*$/;Q.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Q.find.matchesSelector(r,e)?[r]:[]:Q.find.matches(e,Q.grep(t,function(e){return 1===e.nodeType}))},Q.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(Q(e).filter(function(){for(t=0;t<n;t++)if(Q.contains(i[t],this))return!0}));for(t=0;t<n;t++)Q.find(e,i[t],r);return r=this.pushStack(n>1?Q.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ie.test(e)?Q(e):e||[],!1).length}});var ae,ue=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(Q.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(!(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ue.exec(e))||!n[1]&&t)return!t||t.jquery?(t||ae).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Q?t[0]:t,Q.merge(this,Q.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:G,!0)),oe.test(n[1])&&Q.isPlainObject(t))for(n in t)Q.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(r=G.getElementById(n[2]))&&r.parentNode&&(this.length=1,this[0]=r),this.context=G,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Q.isFunction(e)?void 0!==ae.ready?ae.ready(e):e(Q):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Q.makeArray(e,this))}).prototype=Q.fn,ae=Q(G);var le=/^(?:parents|prev(?:Until|All))/,ce={children:!0,contents:!0,next:!0,prev:!0};Q.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Q(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Q.fn.extend({has:function(e){var t=Q(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(Q.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=ie.test(e)||"string"!=typeof e?Q(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Q.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Q.unique(o):o)},index:function(e){return e?"string"==typeof e?U.call(Q(e),this[0]):U.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Q.unique(Q.merge(this.get(),Q(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Q.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Q.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Q.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Q.dir(e,"nextSibling")},prevAll:function(e){return Q.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Q.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Q.dir(e,"previousSibling",n)},siblings:function(e){return Q.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Q.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Q.merge([],e.childNodes)}},function(e,t){Q.fn[e]=function(n,r){var i=Q.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Q.filter(r,i)),this.length>1&&(ce[e]||Q.unique(i),le.test(e)&&i.reverse()),this.pushStack(i)}});var fe=/\S+/g,de={};Q.Callbacks=function(e){var t,n,r,i,s,a,u=[],l=!(e="string"==typeof e?de[e]||o(e):Q.extend({},e)).once&&[],c=function(o){for(t=e.memory&&o,n=!0,a=i||0,i=0,s=u.length,r=!0;u&&a<s;a++)if(!1===u[a].apply(o[0],o[1])&&e.stopOnFalse){t=!1;break}r=!1,u&&(l?l.length&&c(l.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function t(n){Q.each(n,function(n,r){var i=Q.type(r);"function"===i?e.unique&&f.has(r)||u.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),r?s=u.length:t&&(i=n,c(t))}return this},remove:function(){return u&&Q.each(arguments,function(e,t){for(var n;(n=Q.inArray(t,u,n))>-1;)u.splice(n,1),r&&(n<=s&&s--,n<=a&&a--)}),this},has:function(e){return e?Q.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],s=0,this},disable:function(){return u=l=t=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,t||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||n&&!l||(t=t||[],t=[e,t.slice?t.slice():t],r?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},Q.extend({Deferred:function(e){var t=[["resolve","done",Q.Callbacks("once memory"),"resolved"],["reject","fail",Q.Callbacks("once memory"),"rejected"],["notify","progress",Q.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Q.Deferred(function(n){Q.each(t,function(t,o){var s=Q.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&Q.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Q.extend(e,r):r}},i={};return r.pipe=r.then,Q.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=B.call(arguments),s=o.length,a=1!==s||e&&Q.isFunction(e.promise)?s:0,u=1===a?e:Q.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?B.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);i<s;i++)o[i]&&Q.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--a;return a||u.resolveWith(r,o),u.promise()}});var pe;Q.fn.ready=function(e){return Q.ready.promise().done(e),this},Q.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Q.readyWait++:Q.ready(!0)},ready:function(e){(!0===e?--Q.readyWait:Q.isReady)||(Q.isReady=!0,!0!==e&&--Q.readyWait>0||(pe.resolveWith(G,[Q]),Q.fn.triggerHandler&&(Q(G).triggerHandler("ready"),Q(G).off("ready"))))}}),Q.ready.promise=function(t){return pe||(pe=Q.Deferred(),"complete"===G.readyState?setTimeout(Q.ready):(G.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),pe.promise(t)},Q.ready.promise();var he=Q.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===Q.type(n)){i=!0;for(a in n)Q.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,Q.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(Q(e),n)})),t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};Q.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Q.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Q.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(Q.isEmptyObject(o))Q.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Q.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{Q.isArray(t)?r=t.concat(t.map(Q.camelCase)):(i=Q.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(fe)||[])),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!Q.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var me=new a,ge=new a,ve=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ye=/([A-Z])/g;Q.extend({hasData:function(e){return ge.hasData(e)||me.hasData(e)},data:function(e,t,n){return ge.access(e,t,n)},removeData:function(e,t){ge.remove(e,t)},_data:function(e,t,n){return me.access(e,t,n)},_removeData:function(e,t){me.remove(e,t)}}),Q.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=ge.get(o),1===o.nodeType&&!me.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=Q.camelCase(r.slice(5)),u(o,r,i[r]));me.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){ge.set(this,e)}):he(this,function(t){var n,r=Q.camelCase(e);if(o&&void 0===t){if(void 0!==(n=ge.get(o,e)))return n;if(void 0!==(n=ge.get(o,r)))return n;if(void 0!==(n=u(o,r,void 0)))return n}else this.each(function(){var n=ge.get(this,r);ge.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&ge.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ge.remove(this,e)})}}),Q.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=me.get(e,t),n&&(!r||Q.isArray(n)?r=me.access(e,t,Q.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=Q.queue(e,t),r=n.length,i=n.shift(),o=Q._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){Q.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return me.get(e,n)||me.access(e,n,{empty:Q.Callbacks("once memory").add(function(){me.remove(e,[t+"queue",n])})})}}),Q.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Q.queue(this[0],e):void 0===t?this:this.each(function(){var n=Q.queue(this,e,t);Q._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Q.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Q.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Q.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=me.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,xe=["Top","Right","Bottom","Left"],we=function(e,t){return e=t||e,"none"===Q.css(e,"display")||!Q.contains(e.ownerDocument,e)},Ce=/^(?:checkbox|radio)$/i;!function(){var e=G.createDocumentFragment().appendChild(G.createElement("div")),t=G.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),Y.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var Te="undefined";Y.focusinBubbles="onfocusin"in e;var ke=/^key/,Se=/^(?:mouse|pointer|contextmenu)|click/,Ee=/^(?:focusinfocus|focusoutblur)$/,Pe=/^([^.]*)(?:\.(.+)|)$/;Q.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,d,p,h,m,g=me.get(e);if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Q.guid++),(u=g.events)||(u=g.events={}),(s=g.handle)||(s=g.handle=function(t){return typeof Q!==Te&&Q.event.triggered!==t.type?Q.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(fe)||[""],l=t.length;l--;)a=Pe.exec(t[l])||[],p=m=a[1],h=(a[2]||"").split(".").sort(),p&&(f=Q.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=Q.event.special[p]||{},c=Q.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Q.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=u[p])||(d=u[p]=[],d.delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,s)||e.addEventListener&&e.addEventListener(p,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),Q.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,d,p,h,m,g=me.hasData(e)&&me.get(e);if(g&&(u=g.events)){for(l=(t=(t||"").match(fe)||[""]).length;l--;)if(a=Pe.exec(t[l])||[],p=m=a[1],h=(a[2]||"").split(".").sort(),p){for(f=Q.event.special[p]||{},d=u[p=(r?f.delegateType:f.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)c=d[o],!i&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));s&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||Q.removeEvent(e,p,g.handle),delete u[p])}else for(p in u)Q.event.remove(e,p+t[l],n,r,!0);Q.isEmptyObject(u)&&(delete g.handle,me.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,l,c,f,d=[r||G],p=K.call(t,"type")?t.type:t,h=K.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||G,3!==r.nodeType&&8!==r.nodeType&&!Ee.test(p+Q.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),l=p.indexOf(":")<0&&"on"+p,t=t[Q.expando]?t:new Q.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Q.makeArray(n,[t]),f=Q.event.special[p]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!Q.isWindow(r)){for(u=f.delegateType||p,Ee.test(u+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(r.ownerDocument||G)&&d.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=d[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||p,(c=(me.get(s,"events")||{})[t.type]&&me.get(s,"handle"))&&c.apply(s,n),(c=l&&s[l])&&c.apply&&Q.acceptData(s)&&(t.result=c.apply(s,n),!1===t.result&&t.preventDefault());return t.type=p,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(d.pop(),n)||!Q.acceptData(r)||l&&Q.isFunction(r[p])&&!Q.isWindow(r)&&((a=r[l])&&(r[l]=null),Q.event.triggered=p,r[p](),Q.event.triggered=void 0,a&&(r[l]=a)),t.result}},dispatch:function(e){e=Q.event.fix(e);var t,n,r,i,o,s=[],a=B.call(arguments),u=(me.get(this,"events")||{})[e.type]||[],l=Q.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,e)){for(s=Q.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(r=((Q.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(!0!==u.disabled||"click"!==e.type){for(r=[],n=0;n<a;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Q(i,this).index(u)>=0:Q.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||G,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Q.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=Se.test(i)?this.mouseHooks:ke.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new Q.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=G),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==f()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===f()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&Q.nodeName(this,"input"))return this.click(),!1},_default:function(e){return Q.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Q.extend(new Q.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Q.event.trigger(i,null,t):Q.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Q.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Q.Event=function(e,t){return this instanceof Q.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?l:c):this.type=e,t&&Q.extend(this,t),this.timeStamp=e&&e.timeStamp||Q.now(),void(this[Q.expando]=!0)):new Q.Event(e,t)},Q.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=l,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=l,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=l,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Q.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Q.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||Q.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Y.focusinBubbles||Q.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Q.event.simulate(t,e.target,Q.event.fix(e),!0)};Q.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=me.access(r,t);i||r.addEventListener(e,n,!0),me.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=me.access(r,t)-1;i?me.access(r,t,i):(r.removeEventListener(e,n,!0),me.remove(r,t))}}}),Q.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=c;else if(!r)return this;return 1===i&&(o=r,r=function(e){return Q().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Q.guid++)),this.each(function(){Q.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Q(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=c),this.each(function(){Q.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Q.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return Q.event.trigger(e,t,n,!0)}});var De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ne=/<([\w:]+)/,$e=/<|&#?\w+;/,je=/<(?:script|style|link)/i,_e=/checked\s*(?:[^=]|=\s*.checked.)/i,Ae=/^$|\/(?:java|ecma)script/i,qe=/^true\/(.*)/,Le=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Oe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Oe.optgroup=Oe.option,Oe.tbody=Oe.tfoot=Oe.colgroup=Oe.caption=Oe.thead,Oe.th=Oe.td,Q.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=Q.contains(e.ownerDocument,e);if(!(Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Q.isXMLDoc(e)))for(s=v(a),o=v(e),r=0,i=o.length;r<i;r++)y(o[r],s[r]);if(t)if(n)for(o=o||v(e),s=s||v(a),r=0,i=o.length;r<i;r++)g(o[r],s[r]);else g(e,a);return(s=v(a,"script")).length>0&&m(s,!u&&v(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],d=0,p=e.length;d<p;d++)if((i=e[d])||0===i)if("object"===Q.type(i))Q.merge(f,i.nodeType?[i]:i);else if($e.test(i)){for(o=o||c.appendChild(t.createElement("div")),s=(Ne.exec(i)||["",""])[1].toLowerCase(),a=Oe[s]||Oe._default,o.innerHTML=a[1]+i.replace(De,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild;Q.merge(f,o.childNodes),(o=c.firstChild).textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",d=0;i=f[d++];)if((!r||-1===Q.inArray(i,r))&&(u=Q.contains(i.ownerDocument,i),o=v(c.appendChild(i),"script"),u&&m(o),n))for(l=0;i=o[l++];)Ae.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=Q.event.special,s=0;void 0!==(n=e[s]);s++){if(Q.acceptData(n)&&(i=n[me.expando])&&(t=me.cache[i])){if(t.events)for(r in t.events)o[r]?Q.event.remove(n,r):Q.removeEvent(n,r,t.handle);me.cache[i]&&delete me.cache[i]}delete ge.cache[n[ge.expando]]}}}),Q.fn.extend({text:function(e){return he(this,function(e){return void 0===e?Q.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||d(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Q.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Q.cleanData(v(n)),n.parentNode&&(t&&Q.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Q.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Q.clone(this,e,t)})},html:function(e){return he(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!je.test(e)&&!Oe[(Ne.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(De,"<$1></$2>");try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(Q.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Q.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=z.apply([],e);var n,r,i,o,s,a,u=0,l=this.length,c=this,f=l-1,d=e[0],m=Q.isFunction(d);if(m||l>1&&"string"==typeof d&&!Y.checkClone&&_e.test(d))return this.each(function(n){var r=c.eq(n);m&&(e[0]=d.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=Q.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(o=(i=Q.map(v(n,"script"),p)).length;u<l;u++)s=n,u!==f&&(s=Q.clone(s,!0,!0),o&&Q.merge(i,v(s,"script"))),t.call(this[u],s,u);if(o)for(a=i[i.length-1].ownerDocument,Q.map(i,h),u=0;u<o;u++)s=i[u],Ae.test(s.type||"")&&!me.access(s,"globalEval")&&Q.contains(a,s)&&(s.src?Q._evalUrl&&Q._evalUrl(s.src):Q.globalEval(s.textContent.replace(Le,"")))}return this}}),Q.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Q.fn[e]=function(e){for(var n,r=[],i=Q(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),Q(i[s])[t](n),I.apply(r,n.get());return this.pushStack(r)}});var Fe,He={},Me=/^margin/,Re=new RegExp("^("+be+")(?!px)[a-z%]+$","i"),We=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=G.documentElement,o=G.createElement("div"),s=G.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&Q.extend(Y,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=s.appendChild(G.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),s.removeChild(n),t}}))}(),Q.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var Be=/^(none|table(?!-c[ea]).+)/,ze=new RegExp("^("+be+")(.*)$","i"),Ie=new RegExp("^([+-])=("+be+")","i"),Ue={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"},Ve=["Webkit","O","Moz","ms"];Q.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=w(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=Q.camelCase(t),u=e.style;return t=Q.cssProps[a]||(Q.cssProps[a]=T(u,a)),s=Q.cssHooks[t]||Q.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:("string"===(o=typeof n)&&(i=Ie.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Q.css(e,t)),o="number"),void(null!=n&&n===n&&("number"!==o||Q.cssNumber[a]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=Q.camelCase(t);return t=Q.cssProps[a]||(Q.cssProps[a]=T(e.style,a)),(s=Q.cssHooks[t]||Q.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=w(e,t,r)),"normal"===i&&t in Xe&&(i=Xe[t]),""===n||n?(o=parseFloat(i),!0===n||Q.isNumeric(o)?o||0:i):i}}),Q.each(["height","width"],function(e,t){Q.cssHooks[t]={get:function(e,n,r){if(n)return Be.test(Q.css(e,"display"))&&0===e.offsetWidth?Q.swap(e,Ue,function(){return E(e,t,r)}):E(e,t,r)},set:function(e,n,r){var i=r&&We(e);return k(e,n,r?S(e,t,r,"border-box"===Q.css(e,"boxSizing",!1,i),i):0)}}}),Q.cssHooks.marginRight=C(Y.reliableMarginRight,function(e,t){if(t)return Q.swap(e,{display:"inline-block"},w,[e,"marginRight"])}),Q.each({margin:"",padding:"",border:"Width"},function(e,t){Q.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+xe[r]+t]=o[r]||o[r-2]||o[0];return i}},Me.test(e)||(Q.cssHooks[e+t].set=k)}),Q.fn.extend({css:function(e,t){return he(this,function(e,t,n){var r,i,o={},s=0;if(Q.isArray(t)){for(r=We(e),i=t.length;s<i;s++)o[t[s]]=Q.css(e,t[s],!1,r);return o}return void 0!==n?Q.style(e,t,n):Q.css(e,t)},e,t,arguments.length>1)},show:function(){return P(this,!0)},hide:function(){return P(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){we(this)?Q(this).show():Q(this).hide()})}}),Q.Tween=D,D.prototype={constructor:D,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Q.cssNumber[n]?"":"px")},cur:function(){var e=D.propHooks[this.prop];return e&&e.get?e.get(this):D.propHooks._default.get(this)},run:function(e){var t,n=D.propHooks[this.prop];return this.options.duration?this.pos=t=Q.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):D.propHooks._default.set(this),this}},D.prototype.init.prototype=D.prototype,D.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Q.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Q.fx.step[e.prop]?Q.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Q.cssProps[e.prop]]||Q.cssHooks[e.prop])?Q.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},D.propHooks.scrollTop=D.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Q.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Q.fx=D.prototype.init,Q.fx.step={};var Ke,Ye,Ge=/^(?:toggle|show|hide)$/,Je=new RegExp("^(?:([+-])=|)("+be+")([a-z%]*)$","i"),Qe=/queueHooks$/,Ze=[function(e,t,n){var r,i,o,s,a,u,l,c=this,f={},d=e.style,p=e.nodeType&&we(e),h=me.get(e,"fxshow");n.queue||(null==(a=Q._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,c.always(function(){c.always(function(){a.unqueued--,Q.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=Q.css(e,"display"),"inline"===("none"===l?me.get(e,"olddisplay")||x(e.nodeName):l)&&"none"===Q.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Ge.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue;p=!0}f[r]=h&&h[r]||Q.style(e,r)}else l=void 0;if(Q.isEmptyObject(f))"inline"===("none"===l?x(e.nodeName):l)&&(d.display=l);else{h?"hidden"in h&&(p=h.hidden):h=me.access(e,"fxshow",{}),o&&(h.hidden=!p),p?Q(e).show():c.done(function(){Q(e).hide()}),c.done(function(){var t;me.remove(e,"fxshow");for(t in f)Q.style(e,t,f[t])});for(r in f)s=j(p?h[r]:0,r,c),r in h||(h[r]=s.start,p&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}],et={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Je.exec(t),o=i&&i[3]||(Q.cssNumber[e]?"":"px"),s=(Q.cssNumber[e]||"px"!==o&&+r)&&Je.exec(Q.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do{a=a||".5",s/=a,Q.style(n.elem,e,s+o)}while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};Q.Animation=Q.extend(A,{tweener:function(e,t){Q.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;r<i;r++)n=e[r],et[n]=et[n]||[],et[n].unshift(t)},prefilter:function(e,t){t?Ze.unshift(e):Ze.push(e)}}),Q.speed=function(e,t,n){var r=e&&"object"==typeof e?Q.extend({},e):{complete:n||!n&&t||Q.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Q.isFunction(t)&&t};return r.duration=Q.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Q.fx.speeds?Q.fx.speeds[r.duration]:Q.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){Q.isFunction(r.old)&&r.old.call(this),r.queue&&Q.dequeue(this,r.queue)},r},Q.fn.extend({fadeTo:function(e,t,n,r){return this.filter(we).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Q.isEmptyObject(e),o=Q.speed(t,n,r),s=function(){var t=A(this,Q.extend({},e),o);(i||me.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Q.timers,s=me.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Qe.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||Q.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=me.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Q.timers,s=r?r.length:0;for(n.finish=!0,Q.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),Q.each(["toggle","show","hide"],function(e,t){var n=Q.fn[t];Q.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate($(t,!0),e,r,i)}}),Q.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Q.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Q.timers=[],Q.fx.tick=function(){var e,t=0,n=Q.timers;for(Ke=Q.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||Q.fx.stop(),Ke=void 0},Q.fx.timer=function(e){Q.timers.push(e),e()?Q.fx.start():Q.timers.pop()},Q.fx.interval=13,Q.fx.start=function(){Ye||(Ye=setInterval(Q.fx.tick,Q.fx.interval))},Q.fx.stop=function(){clearInterval(Ye),Ye=null},Q.fx.speeds={slow:600,fast:200,_default:400},Q.fn.delay=function(e,t){return e=Q.fx?Q.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=G.createElement("input"),t=G.createElement("select"),n=t.appendChild(G.createElement("option"));e.type="checkbox",Y.checkOn=""!==e.value,Y.optSelected=n.selected,t.disabled=!0,Y.optDisabled=!n.disabled,(e=G.createElement("input")).value="t",e.type="radio",Y.radioValue="t"===e.value}();var tt,nt=Q.expr.attrHandle;Q.fn.extend({attr:function(e,t){return he(this,Q.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Q.removeAttr(this,e)})}}),Q.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Te?Q.prop(e,t,n):(1===o&&Q.isXMLDoc(e)||(t=t.toLowerCase(),r=Q.attrHooks[t]||(Q.expr.match.bool.test(t)?tt:void 0)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Q.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Q.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(fe);if(o&&1===e.nodeType)for(;n=o[i++];)r=Q.propFix[n]||n,Q.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&Q.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),tt={set:function(e,t,n){return!1===t?Q.removeAttr(e,n):e.setAttribute(n,n),n}},Q.each(Q.expr.match.bool.source.match(/\w+/g),function(e,t){var n=nt[t]||Q.find.attr;nt[t]=function(e,t,r){var i,o;return r||(o=nt[t],nt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,nt[t]=o),i}});var rt=/^(?:input|select|textarea|button)$/i;Q.fn.extend({prop:function(e,t){return he(this,Q.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Q.propFix[e]||e]})}}),Q.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return(1!==o||!Q.isXMLDoc(e))&&(t=Q.propFix[t]||t,i=Q.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||rt.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Y.optSelected||(Q.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Q.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Q.propFix[this.toLowerCase()]=this});var it=/[\t\r\n\f]/g;Q.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,u=0,l=this.length;if(Q.isFunction(e))return this.each(function(t){Q(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(fe)||[];u<l;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(it," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=Q.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(Q.isFunction(e))return this.each(function(t){Q(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(fe)||[];u<l;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(it," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?Q.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):Q.isFunction(e)?this.each(function(n){Q(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,r=0,i=Q(this),o=e.match(fe)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else n!==Te&&"boolean"!==n||(this.className&&me.set(this,"__className__",this.className),this.className=this.className||!1===e?"":me.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(it," ").indexOf(t)>=0)return!0;return!1}});var ot=/\r/g;Q.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=Q.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Q(this).val()):e,null==i?i="":"number"==typeof i?i+="":Q.isArray(i)&&(i=Q.map(i,function(e){return null==e?"":e+""})),(t=Q.valHooks[this.type]||Q.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=Q.valHooks[i.type]||Q.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(ot,""):null==n?"":n)):void 0}}),Q.extend({valHooks:{option:{get:function(e){var t=Q.find.attr(e,"value");return null!=t?t:Q.trim(Q.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,s=o?null:[],a=o?i+1:r.length,u=i<0?a:o?i:0;u<a;u++)if(((n=r[u]).selected||u===i)&&(Y.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!Q.nodeName(n.parentNode,"optgroup"))){if(t=Q(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=Q.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=Q.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Q.each(["radio","checkbox"],function(){Q.valHooks[this]={set:function(e,t){if(Q.isArray(t))return e.checked=Q.inArray(Q(e).val(),t)>=0}},Y.checkOn||(Q.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Q.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Q.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var st=Q.now(),at=/\?/;Q.parseJSON=function(e){return JSON.parse(e+"")},Q.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||Q.error("Invalid XML: "+e),t};var ut=/#.*$/,lt=/([?&])_=[^&]*/,ct=/^(.*?):[ \t]*([^\r\n]*)$/gm,ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,dt=/^(?:GET|HEAD)$/,pt=/^\/\//,ht=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,mt={},gt={},vt="*/".concat("*"),yt=e.location.href,bt=ht.exec(yt.toLowerCase())||[];Q.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yt,type:"GET",isLocal:ft.test(bt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":vt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Q.parseJSON,"text xml":Q.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?O(O(e,Q.ajaxSettings),t):O(Q.ajaxSettings,e)},ajaxPrefilter:q(mt),ajaxTransport:q(gt),ajax:function(e,t){function n(e,t,n,s){var u,c,v,y,x,C=t;2!==b&&(b=2,a&&clearTimeout(a),r=void 0,o=s||"",w.readyState=e>0?4:0,u=e>=200&&e<300||304===e,n&&(y=F(f,w,n)),y=H(f,y,w,u),u?(f.ifModified&&((x=w.getResponseHeader("Last-Modified"))&&(Q.lastModified[i]=x),(x=w.getResponseHeader("etag"))&&(Q.etag[i]=x)),204===e||"HEAD"===f.type?C="nocontent":304===e?C="notmodified":(C=y.state,c=y.data,v=y.error,u=!v)):(v=C,!e&&C||(C="error",e<0&&(e=0))),w.status=e,w.statusText=(t||C)+"",u?h.resolveWith(d,[c,C,w]):h.rejectWith(d,[w,C,v]),w.statusCode(g),g=void 0,l&&p.trigger(u?"ajaxSuccess":"ajaxError",[w,f,u?c:v]),m.fireWith(d,[w,C]),l&&(p.trigger("ajaxComplete",[w,f]),--Q.active||Q.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,u,l,c,f=Q.ajaxSetup({},t),d=f.context||f,p=f.context&&(d.nodeType||d.jquery)?Q(d):Q.event,h=Q.Deferred(),m=Q.Callbacks("once memory"),g=f.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=ct.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return r&&r.abort(t),n(0,t),this}};if(h.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||yt)+"").replace(ut,"").replace(pt,bt[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=Q.trim(f.dataType||"*").toLowerCase().match(fe)||[""],null==f.crossDomain&&(u=ht.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===bt[1]&&u[2]===bt[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(bt[3]||("http:"===bt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=Q.param(f.data,f.traditional)),L(mt,f,t,w),2===b)return w;(l=Q.event&&f.global)&&0==Q.active++&&Q.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!dt.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(at.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=lt.test(i)?i.replace(lt,"$1_="+st++):i+(at.test(i)?"&":"?")+"_="+st++)),f.ifModified&&(Q.lastModified[i]&&w.setRequestHeader("If-Modified-Since",Q.lastModified[i]),Q.etag[i]&&w.setRequestHeader("If-None-Match",Q.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+vt+"; q=0.01":""):f.accepts["*"]);for(c in f.headers)w.setRequestHeader(c,f.headers[c]);if(f.beforeSend&&(!1===f.beforeSend.call(d,w,f)||2===b))return w.abort();x="abort";for(c in{success:1,error:1,complete:1})w[c](f[c]);if(r=L(gt,f,t,w)){w.readyState=1,l&&p.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},f.timeout));try{b=1,r.send(v,n)}catch(e){if(!(b<2))throw e;n(-1,e)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return Q.get(e,t,n,"json")},getScript:function(e,t){return Q.get(e,void 0,t,"script")}}),Q.each(["get","post"],function(e,t){Q[t]=function(e,n,r,i){return Q.isFunction(n)&&(i=i||r,r=n,n=void 0),Q.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Q._evalUrl=function(e){return Q.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},Q.fn.extend({wrapAll:function(e){var t;return Q.isFunction(e)?this.each(function(t){Q(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Q(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return Q.isFunction(e)?this.each(function(t){Q(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Q(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Q.isFunction(e);return this.each(function(n){Q(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Q.nodeName(this,"body")||Q(this).replaceWith(this.childNodes)}).end()}}),Q.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Q.expr.filters.visible=function(e){return!Q.expr.filters.hidden(e)};var xt=/%20/g,wt=/\[\]$/,Ct=/\r?\n/g,Tt=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;Q.param=function(e,t){var n,r=[],i=function(e,t){t=Q.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Q.ajaxSettings&&Q.ajaxSettings.traditional),Q.isArray(e)||e.jquery&&!Q.isPlainObject(e))Q.each(e,function(){i(this.name,this.value)});else for(n in e)M(n,e[n],t,i);return r.join("&").replace(xt,"+")},Q.fn.extend({serialize:function(){return Q.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Q.prop(this,"elements");return e?Q.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Q(this).is(":disabled")&&kt.test(this.nodeName)&&!Tt.test(e)&&(this.checked||!Ce.test(e))}).map(function(e,t){var n=Q(this).val();return null==n?null:Q.isArray(n)?Q.map(n,function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}}):{name:t.name,value:n.replace(Ct,"\r\n")}}).get()}}),Q.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var St=0,Et={},Pt={0:200,1223:204},Dt=Q.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Et)Et[e]()}),Y.cors=!!Dt&&"withCredentials"in Dt,Y.ajax=Dt=!!Dt,Q.ajaxTransport(function(e){var t;if(Y.cors||Dt&&!e.crossDomain)return{send:function(n,r){var i,o=e.xhr(),s=++St;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete Et[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Pt[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Et[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),Q.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Q.globalEval(e),e}}}),Q.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Q.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=Q("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),G.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Nt=[],$t=/(=)\?(?=&|$)|\?\?/;Q.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Nt.pop()||Q.expando+"_"+st++;return this[e]=!0,e}}),Q.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=!1!==t.jsonp&&($t.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&$t.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=Q.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace($t,"$1"+i):!1!==t.jsonp&&(t.url+=(at.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||Q.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Nt.push(i)),s&&Q.isFunction(o)&&o(s[0]),s=o=void 0}),"script"}),Q.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||G;var r=oe.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=Q.buildFragment([e],t,i),i&&i.length&&Q(i).remove(),Q.merge([],r.childNodes))};var jt=Q.fn.load;Q.fn.load=function(e,t,n){if("string"!=typeof e&&jt)return jt.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=Q.trim(e.slice(a)),e=e.slice(0,a)),Q.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&Q.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?Q("<div>").append(Q.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},Q.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Q.fn[t]=function(e){return this.on(t,e)}}),Q.expr.filters.animated=function(e){return Q.grep(Q.timers,function(t){return e===t.elem}).length};var _t=e.document.documentElement;Q.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l=Q.css(e,"position"),c=Q(e),f={};"static"===l&&(e.style.position="relative"),a=c.offset(),o=Q.css(e,"top"),u=Q.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(r=c.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),Q.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):c.css(f)}},Q.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Q.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,Q.contains(t,r)?(typeof r.getBoundingClientRect!==Te&&(i=r.getBoundingClientRect()),n=R(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===Q.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Q.nodeName(e[0],"html")||(r=e.offset()),r.top+=Q.css(e[0],"borderTopWidth",!0),r.left+=Q.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Q.css(n,"marginTop",!0),left:t.left-r.left-Q.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||_t;e&&!Q.nodeName(e,"html")&&"static"===Q.css(e,"position");)e=e.offsetParent;return e||_t})}}),Q.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;Q.fn[t]=function(i){return he(this,function(t,i,o){var s=R(t);return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Q.each(["top","left"],function(e,t){Q.cssHooks[t]=C(Y.pixelPosition,function(e,n){if(n)return n=w(e,t),Re.test(n)?Q(e).position()[t]+"px":n})}),Q.each({Height:"height",Width:"width"},function(e,t){Q.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Q.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(!0===r||!0===i?"margin":"border");return he(this,function(t,n,r){var i;return Q.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Q.css(t,n,s):Q.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),Q.fn.size=function(){return this.length},Q.fn.andSelf=Q.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Q});var At=e.jQuery,qt=e.$;return Q.noConflict=function(t){return e.$===Q&&(e.$=qt),t&&e.jQuery===Q&&(e.jQuery=At),Q},typeof t===Te&&(e.jQuery=e.$=Q),Q}),function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.Pressure=t()}(this,function(){"use strict";function e(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o={set:function(e,t,n){d(e,t,n)},config:function(e){f.set(e)},map:function(){return h.apply(null,arguments)}},s=function(){function e(t,r,i){n(this,e),this.routeEvents(t,r,i),this.preventSelect(t,i)}return i(e,[{key:"routeEvents",value:function(e,t,n){var r=f.get("only",n);this.adapter=!v||"pointer"!==r&&null!==r?!g||"touch"!==r&&null!==r?!m||"mouse"!==r&&null!==r?new a(e,t).bindUnsupportedEvent():new u(e,t,n).bindEvents():new l(e,t,n).bindEvents():new c(e,t,n).bindEvents()}},{key:"preventSelect",value:function(e,t){f.get("preventSelect",t)&&(e.style.webkitTouchCallout="none",e.style.webkitUserSelect="none",e.style.khtmlUserSelect="none",e.style.MozUserSelect="none",e.style.msUserSelect="none",e.style.userSelect="none")}}]),e}(),a=function(){function e(t,r,i){n(this,e),this.el=t,this.block=r,this.options=i,this.pressed=!1,this.deepPressed=!1,this.nativeSupport=!1,this.runningPolyfill=!1,this.runKey=Math.random()}return i(e,[{key:"setPressed",value:function(e){this.pressed=e}},{key:"setDeepPressed",value:function(e){this.deepPressed=e}},{key:"isPressed",value:function(){return this.pressed}},{key:"isDeepPressed",value:function(){return this.deepPressed}},{key:"add",value:function(e,t){this.el.addEventListener(e,t,!1)}},{key:"runClosure",value:function(e){e in this.block&&this.block[e].apply(this.el,Array.prototype.slice.call(arguments,1))}},{key:"fail",value:function(e,t){f.get("polyfill",this.options)?this.runKey===t&&this.runPolyfill(e):this.runClosure("unsupported",e)}},{key:"bindUnsupportedEvent",value:function(){var e=this;this.add(g?"touchstart":"mousedown",function(t){return e.runClosure("unsupported",t)})}},{key:"_startPress",value:function(e){!1===this.isPressed()&&(this.runningPolyfill=!1,this.setPressed(!0),this.runClosure("start",e))}},{key:"_startDeepPress",value:function(e){this.isPressed()&&!1===this.isDeepPressed()&&(this.setDeepPressed(!0),this.runClosure("startDeepPress",e))}},{key:"_changePress",value:function(e,t){this.nativeSupport=!0,this.runClosure("change",e,t)}},{key:"_endDeepPress",value:function(){this.isPressed()&&this.isDeepPressed()&&(this.setDeepPressed(!1),this.runClosure("endDeepPress"))}},{key:"_endPress",value:function(){!1===this.runningPolyfill?(this.isPressed()&&(this._endDeepPress(),this.setPressed(!1),this.runClosure("end")),this.runKey=Math.random(),this.nativeSupport=!1):this.setPressed(!1)}},{key:"deepPress",value:function(e,t){e>=.5?this._startDeepPress(t):this._endDeepPress()}},{key:"runPolyfill",value:function(e){this.increment=0===f.get("polyfillSpeedUp",this.options)?1:10/f.get("polyfillSpeedUp",this.options),this.decrement=0===f.get("polyfillSpeedDown",this.options)?1:10/f.get("polyfillSpeedDown",this.options),this.setPressed(!0),this.runClosure("start",e),!1===this.runningPolyfill&&this.loopPolyfillForce(0,e)}},{key:"loopPolyfillForce",value:function(e,t){!1===this.nativeSupport&&(this.isPressed()?(this.runningPolyfill=!0,e=e+this.increment>1?1:e+this.increment,this.runClosure("change",e,t),this.deepPress(e,t),setTimeout(this.loopPolyfillForce.bind(this,e,t),10)):((e=e-this.decrement<0?0:e-this.decrement)<.5&&this.isDeepPressed()&&(this.setDeepPressed(!1),this.runClosure("endDeepPress")),0===e?(this.runningPolyfill=!1,this.setPressed(!0),this._endPress()):(this.runClosure("change",e,t),this.deepPress(e,t),setTimeout(this.loopPolyfillForce.bind(this,e,t),10))))}}]),e}(),u=function(r){function o(t,r,i){return n(this,o),e(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t,r,i))}return t(o,r),i(o,[{key:"bindEvents",value:function(){this.add("webkitmouseforcewillbegin",this._startPress.bind(this)),this.add("mousedown",this.support.bind(this)),this.add("webkitmouseforcechanged",this.change.bind(this)),this.add("webkitmouseforcedown",this._startDeepPress.bind(this)),this.add("webkitmouseforceup",this._endDeepPress.bind(this)),this.add("mouseleave",this._endPress.bind(this)),this.add("mouseup",this._endPress.bind(this))}},{key:"support",value:function(e){!1===this.isPressed()&&this.fail(e,this.runKey)}},{key:"change",value:function(e){this.isPressed()&&e.webkitForce>0&&this._changePress(this.normalizeForce(e.webkitForce),e)}},{key:"normalizeForce",value:function(e){return this.reachOne(h(e,1,3,0,1))}},{key:"reachOne",value:function(e){return e>.995?1:e}}]),o}(a),l=function(r){function o(t,r,i){return n(this,o),e(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t,r,i))}return t(o,r),i(o,[{key:"bindEvents",value:function(){b?(this.add("touchforcechange",this.start.bind(this)),this.add("touchstart",this.support.bind(this,0)),this.add("touchend",this._endPress.bind(this))):(this.add("touchstart",this.startLegacy.bind(this)),this.add("touchend",this._endPress.bind(this)))}},{key:"start",value:function(e){e.touches.length>0&&(this._startPress(e),this.touch=this.selectTouch(e),this.touch&&this._changePress(this.touch.force,e))}},{key:"support",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.runKey;!1===this.isPressed()&&(e<=6?(e++,setTimeout(this.support.bind(this,e,t,n),10)):this.fail(t,n))}},{key:"startLegacy",value:function(e){this.initialForce=e.touches[0].force,this.supportLegacy(0,e,this.runKey,this.initialForce)}},{key:"supportLegacy",value:function(e,t,n,r){r!==this.initialForce?(this._startPress(t),this.loopForce(t)):e<=6?(e++,setTimeout(this.supportLegacy.bind(this,e,t,n,r),10)):this.fail(t,n)}},{key:"loopForce",value:function(e){this.isPressed()&&(this.touch=this.selectTouch(e),setTimeout(this.loopForce.bind(this,e),10),this._changePress(this.touch.force,e))}},{key:"selectTouch",value:function(e){if(1===e.touches.length)return this.returnTouch(e.touches[0],e);for(var t=0;t<e.touches.length;t++)if(e.touches[t].target===this.el||this.el.contains(e.touches[t].target))return this.returnTouch(e.touches[t],e)}},{key:"returnTouch",value:function(e,t){return this.deepPress(e.force,t),e}}]),o}(a),c=function(r){function o(t,r,i){return n(this,o),e(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t,r,i))}return t(o,r),i(o,[{key:"bindEvents",value:function(){this.add("pointerdown",this.support.bind(this)),this.add("pointermove",this.change.bind(this)),this.add("pointerup",this._endPress.bind(this)),this.add("pointerleave",this._endPress.bind(this))}},{key:"support",value:function(e){!1===this.isPressed()&&(0===e.pressure||.5===e.pressure?this.fail(e,this.runKey):(this._startPress(e),this._changePress(e.pressure,e)))}},{key:"change",value:function(e){this.isPressed()&&e.pressure>0&&.5!==e.pressure&&(this._changePress(e.pressure,e),this.deepPress(e.pressure,e))}}]),o}(a),f={polyfill:!0,polyfillSpeedUp:1e3,polyfillSpeedDown:0,preventSelect:!0,only:null,get:function(e,t){return t.hasOwnProperty(e)?t[e]:this[e]},set:function(e){for(var t in e)e.hasOwnProperty(t)&&this.hasOwnProperty(t)&&"get"!=t&&"set"!=t&&(this[t]=e[t])}},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e||e instanceof String)for(var r=document.querySelectorAll(e),i=0;i<r.length;i++)new s(r[i],t,n);else if(p(e))new s(e,t,n);else for(i=0;i<e.length;i++)new s(e[i],t,n)},p=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":r(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":r(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},h=function(e,t,n,r,i){return(e-t)*(i-r)/(n-t)+r},m=!1,g=!1,v=!1,y=!1,b=!1;if("undefined"!=typeof window){if("undefined"!=typeof Touch)try{(Touch.prototype.hasOwnProperty("force")||"force"in new Touch)&&(y=!0)}catch(e){}g="ontouchstart"in window.document&&y,m="onmousemove"in window.document&&!g,v="onpointermove"in window.document,b="ontouchforcechange"in window.document}return o}),function(e,t,n){function r(e,t){return typeof e===t}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(){var e=t.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var a,u,l,c,f="modernizr",d=i("div"),p=s();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return a=i("style"),a.type="text/css",a.id="s"+f,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),u=n(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=c,x.offsetHeight):d.parentNode.removeChild(d),!!u}function u(e,t){return!!~(""+e).indexOf(t)}function l(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var i;for(var o in e)if(e[o]in t)return!1===n?e[o]:(i=t[e[o]],r(i,"function")?l(i,n||t):i);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;null!==i?r&&(i=i.getPropertyValue(r)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function p(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(f(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+f(t[i])+":"+r+")");return o=o.join(" or "),a("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function h(e,t,s,a){function l(){f&&(delete $.style,delete $.modElem)}if(a=!r(a,"undefined")&&a,!r(s,"undefined")){var c=p(e,s);if(!r(c,"undefined"))return c}for(var f,d,h,m,g,v=["modernizr","tspan","samp"];!$.style&&v.length;)f=!0,$.modElem=i(v.shift()),$.style=$.modElem.style;for(h=e.length,d=0;h>d;d++)if(m=e[d],g=$.style[m],u(m,"-")&&(m=o(m)),$.style[m]!==n){if(a||r(s,"undefined"))return l(),"pfx"!=t||m;try{$.style[m]=s}catch(e){}if($.style[m]!=g)return l(),"pfx"!=t||m}return l(),!1}function m(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,i,o):(a=(e+" "+D.join(s+" ")+s).split(" "),c(a,t,n))}var g=[],v=[],y={_version:"3.4.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){v.push({name:e,fn:t,options:n})},addAsyncTest:function(e){v.push({name:null,fn:e})}},b=function(){};b.prototype=y,b=new b;var x=t.documentElement,w="svg"===x.nodeName.toLowerCase(),C=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=C;var T=function(){var e=!("onblur"in t.documentElement);return function(t,r){var o;return!!t&&(r&&"string"!=typeof r||(r=i(r||"div")),t="on"+t,!(o=t in r)&&e&&(r.setAttribute||(r=i("div")),r.setAttribute(t,""),o="function"==typeof r[t],r[t]!==n&&(r[t]=n),r.removeAttribute(t)),o)}}();y.hasEvent=T;var k=y.testStyles=a;b.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(r,function(e){n=9===e.offsetTop})}return n});var S="Moz O ms Webkit",E=y._config.usePrefixes?S.split(" "):[];y._cssomPrefixes=E;var P=function(t){var r,i=C.length,o=e.CSSRule;if(void 0===o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(r=t.replace(/-/g,"_").toUpperCase()+"_RULE")in o)return"@"+t;for(var s=0;i>s;s++){var a=C[s];if(a.toUpperCase()+"_"+r in o)return"@-"+a.toLowerCase()+"-"+t}return!1};y.atRule=P;var D=y._config.usePrefixes?S.toLowerCase().split(" "):[];y._domPrefixes=D;var N={elem:i("modernizr")};b._q.push(function(){delete N.elem});var $={style:N.elem.style};b._q.unshift(function(){delete $.style}),y.testAllProps=m;var j=y.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=o(e)),t?m(e,t,n):m(e,"pfx"))};b.addTest("forcetouch",function(){return!!T(j("mouseforcewillbegin",e,!1),e)&&MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN}),function(){var e,t,n,i,o,s,a;for(var u in v)if(v.hasOwnProperty(u)){if(e=[],(t=v[u]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?b[a[0]]=i:(!b[a[0]]||b[a[0]]instanceof Boolean||(b[a[0]]=new Boolean(b[a[0]])),b[a[0]][a[1]]=i),g.push((i?"":"no-")+a.join("-"))}}(),function(e){var t=x.className,n=b._config.classPrefix||"";if(w&&(t=t.baseVal),b._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}b._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?x.className.baseVal=t:x.className=t)}(g),delete y.addTest,delete y.addAsyncTest;for(var _=0;_<b._q.length;_++)b._q[_]();e.Modernizr=b}(window,document);var isMobile=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(isMobile=!0),Pressure.config({polyfill:!0,polyfillSpeedUp:50,polyfillSpeedDown:0,preventSelect:!0,only:null}),function(){var e=!0,t={init:function(){isMobile?Touch.prototype.hasOwnProperty("force")||"force"in new Touch?$(".tutorial").addClass("forcetouch"):$(".tutorial").addClass("longtap"):$(".tutorial").addClass("laptop"),setTimeout(function(){$("body").removeClass("pre-intro").addClass("intro")},10),$("document").ready(function(){$(".prelude").remove(),t.explore()})},explore:function(){$("body").removeClass("intro"),setTimeout(function(){t.sceneOne()},1e3),setTimeout(function(){t.sceneTwo()},2e3),setTimeout(function(){t.sceneThree()},5e3),setTimeout(function(){t.sceneFour()},6500),setTimeout(function(){t.positionBlips(!1),t.sceneFinale(),t.addBinders()},7e3),isMobile&&setTimeout(function(){$("body").addClass("tutorial-screen")},1e4)},sceneOne:function(){$(".radar").addClass("scene-one")},sceneTwo:function(){$(".radar").addClass("scene-two")},sceneThree:function(){$(".radar").addClass("scene-three")},sceneFour:function(){$(".radar").addClass("scene-four")},sceneFinale:function(){$(".radar").addClass("scene-finale"),$("body").addClass("complete")},positionBlips:function(){if($(".radar").length){var t=$(".radar__chart").width(),n=0,r=0,i=0,o=0;$($(".blip").get().reverse()).each(function(s){r=$(this).closest("section").width()/2,n=r,i=$(this).attr("data-angle"),o=$(this).attr("data-distance"),r=r-t/8+t/8*o,$(this).addClass($(this).attr("data-ring")),$(this).addClass($(this).attr("data-status"));var a=$(this).attr("data-quadrant");"language"===a?i*=90:"platform"===a?i=90+90*i:"technique"===a?i=180+90*i:"tool"===a&&(i=270+90*i),i=i*Math.PI/180;var u=n+r*Math.cos(i),l=n+r*Math.sin(i);$(this).css({transform:"translate3D("+u+"px, "+l+"px, 0)"});var c=function(){$(this).addClass("loaded")};e?(setTimeout(c.bind(this),50*s),setTimeout(function(){$(this).addClass(a)}.bind(this),1e3+50*s)):setTimeout(c.bind(this),25*s)}),e=!1}else{var s=0,a=0,u=0,l=0,c=0,f=0,d=0,p=0;$($("section").get().reverse()).each(function(){s=$(".blip").width(),a=$(this).innerWidth(),u=$(this).find(".blip"),l=u.length,c=Math.floor(a/s);var e=a%s;d=Math.round(e/2),f=d,p=0,u.each(function(e){$(this).addClass($(this).attr("data-ring")),$(this).addClass($(this).attr("data-status"));var t=$(this).attr("data-quadrant");"language"===t?i*=90:"platform"===t?i=90+90*i:"technique"===t?i=180+90*i:"tool"===t&&(i=270+90*i),i=i*Math.PI/180,e%c==0?(f=d,p+=s):f+=s;var n=f,r=p;setTimeout(function(){$(this).css({transform:"translate3D("+n+"px, "+r+"px, 0)"}).addClass("loaded")}.bind(this),25*e)})})}},addBinders:function(){function e(){new Date-r<o?setTimeout(e,o):(i=!1,t.positionBlips(!0))}var n=!1;$(".blip").mouseover(function(){t.blipHover($(this))}).mouseout(function(){$(".blip").removeClass("muted"),$(".caption").removeClass("active")}),Pressure.set(".blip",{change:function(){t.openBlip($(this))}},{only:"mouse"}),Pressure.set(".blip",{change:function(e){0===e?($(".blip").removeClass("muted"),$(".caption").removeClass("active")):e<1?(t.blipHover($(this)),$(".radar__chart").css("opacity",1-.75*e)):n||t.openBlip($(this))},end:function(){$(".radar__chart").css("opacity",1)}},{only:"touch"}),$(".overlay__back").click(function(){$("body").removeClass("detail"),n=!1}),$(".tutorial a").click(function(){$("body").removeClass("tutorial-screen")}),$(".help a").click(function(){$("body").addClass("tutorial-screen")}),$("#grid").click(function(){$("a.active").removeClass("active"),$(this).addClass("active"),$(".radar").fadeOut(function(){$(this).addClass("grid").removeClass("radar"),setTimeout(function(){$(".grid").fadeIn(),t.positionBlips(!1)},100)})}),$("#radar").click(function(){$("a.active").removeClass("active"),$(this).addClass("active"),$(".grid").fadeOut(function(){$(this).addClass("radar").removeClass("grid"),setTimeout(function(){$(".radar").fadeIn(),t.positionBlips(!1)},100)})});var r,i=!1,o=200;$(window).resize(function(){r=new Date,!1===i&&(i=!0,setTimeout(e,o))})},blipHover:function(e){$(".blip").not(e).addClass("muted");var t=e.attr("data-title"),n=e.attr("data-quadrant"),r=e.attr("data-ring");switch($(".caption h4").html(t),$(".caption .quadrant").attr("class","").addClass("quadrant "+n),$(".caption .ring").html(r),n){case"language":$(".caption .quadrant").html("Languages & Frameworks");break;case"platform":$(".caption .quadrant").html("Platforms");break;case"technique":$(".caption .quadrant").html("Techniques");break;case"tool":$(".caption .quadrant").html("Tools");break;default:$(".caption .quadrant").html("")}$(".caption").addClass("active")},openBlip:function(e){var t=e.attr("data-title"),n=e.attr("data-description"),r=e.attr("data-author"),i=e.attr("data-link-text"),o=e.attr("data-link-url"),s=e.attr("data-ring"),a=e.attr("data-quadrant"),u=e.attr("data-status"),l=e.attr("data-date");switch(rfe=e.attr("data-register"),contact1=e.attr("data-contact1"),contact2=e.attr("data-contact2"),contact3=e.attr("data-contact3"),prizes=e.attr("data-prizes"),$(".overlay").find("h1").html(t),$(".overlay").find(".description").html(n),$(".overlay").find(".link").html(i).attr("href",o),$(".overlay").find(".ring").html(s),$(".overlay .quadrant").attr("class","").addClass("quadrant "+a),a){case"language":case"platform":case"technique":case"tool":$(".overlay .quadrant").html("View Pics!");break;default:$(".overlay .quadrant").html("View Pics!")}switch(r){case"henrik":$(".author__name h3").html("Henrik Sjökvist"),$(".author__name h4").html("Developer + Partner, Sweden");break;case"per":$(".author__name h3").html("Per Sandström"),$(".author__name h4").html("Designer + Partner, Sweden");break;case"eduardo":$(".author__name h3").html("Eduardo Nunes"),$(".author__name h4").html("Designer + Partner, Portugal");break;case"filippos":$(".author__name h3").html("Filippos Vasilakis"),$(".author__name h4").html("Developer, Sweden");break;case"ivan":$(".author__name h3").html("Ivan Novosad"),$(".author__name h4").html("Developer, Slovakia");break;case"filippos":$(".author__name h3").html("Dennis Carlsson"),$(".author__name h4").html("Developer, Sweden");break;case"nikolay":$(".author__name h3").html("Nikolay Lechev"),$(".author__name h4").html("Designer, Bulgaria");break;case"osvaldas":$(".author__name h3").html("Osvaldas Valutis"),$(".author__name h4").html("Developer, Lithuania");break;case"raymall":$(".author__name h3").html("Raymall Pérez"),$(".author__name h4").html("Designer, Dominican Republican");break;default:$(".author__name h3").html("Kollegorna"),$(".author__name h4").html("")}$(".author__photo img").attr("src","images/team/"+r+".png"),$(".overlay .status").attr("class","").addClass("status "+u),"new"===u?$(".overlay .status").html(l):$(".overlay .status").html("Awaited!"),$("body").addClass("detail"),openDetail=!0,$(".registerForEvent").attr("href",rfe),$(".contact1").html(contact1),$(".contact2").html(contact2),$(".contact3").html(contact3),$(".prizes").html(prizes)}};document.addEventListener("DOMContentLoaded",function(){t.init()})}();
=======
/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 *
 */
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return X.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return Z.each(e.match(pe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : be.test(n) ? Z.parseJSON(n) : n)
                } catch (e) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Oe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, r = e.length; n < r; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) Z.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function b(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function x(e) {
        var t = J,
            n = Re[e];
        return n || (n = b(e, t), "none" !== n && n || (Me = (Me || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Me[0].contentDocument, t.write(), t.close(), n = b(e, t), Me.detach()), Re[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || ze(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), We.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function C(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function T(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ye.length; i--;)
            if (t = Ye[i] + n, t in e) return t;
        return r
    }

    function k(e, t, n) {
        var r = Ue.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function S(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += Z.css(e, n + Ce[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Ce[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Ce[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Ce[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Ce[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ze(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = w(e, t, o), (i < 0 || null == i) && (i = e.style[t]), We.test(i)) return i;
            r = s && (G.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + S(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function N(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Te(r) && (o[s] = ve.access(r, "olddisplay", x(r.nodeName)))) : (i = Te(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; s < a; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function P(e, t, n, r, i) {
        return new P.prototype.init(e, t, n, r, i)
    }

    function D() {
        return setTimeout(function() {
            Ge = void 0
        }), Ge = Z.now()
    }

    function $(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ce[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function j(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function _(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
            d = {},
            p = e.style,
            h = e.nodeType && Te(e),
            m = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || x(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Qe.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                d[r] = m && m[r] || Z.style(e, r)
            } else l = void 0;
        if (Z.isEmptyObject(d)) "inline" === ("none" === l ? x(e.nodeName) : l) && (p.display = l);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ve.access(e, "fxshow", {}), o && (m.hidden = !h), h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in d) Z.style(e, t, d[t])
            });
            for (r in d) s = j(h ? m[r] : 0, r, f), r in m || (m[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function A(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function q(e, t, n) {
        var r, i, o = 0,
            s = tt.length,
            a = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Ge || D(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), o < 1 && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ge || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (A(c, l.opts.specialEasing); o < s; o++)
            if (r = tt[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, j, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(pe) || [];
            if (Z.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function O(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === bt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function F(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function H(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function M(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function(t, i) {
            n || kt.test(e) ? r(e, i) : R(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else
            for (i in t) R(e + "[" + i + "]", t[i], n, r)
    }

    function B(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var W = [],
        z = W.slice,
        I = W.concat,
        U = W.push,
        X = W.indexOf,
        V = {},
        K = V.toString,
        Y = V.hasOwnProperty,
        G = {},
        J = e.document,
        Q = "2.1.4",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: Q,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return z.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : z.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: W.sort,
        splice: W.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[K.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e);
            if (r) {
                if (a)
                    for (; o < s && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (a)
                for (; o < s && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : U.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e),
                u = [];
            if (a)
                for (; o < s; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return I.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e)) return r = z.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(z.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i
        },
        now: Date.now,
        support: G
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie =
        /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        function(e) {
            function t(e, t, n, r) {
                var i, o, s, a, u, l, f, p, h, m;
                if ((t ? t.ownerDocument || t : R) !== _ && j(t), t = t || _, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!r && q) {
                    if (11 !== a && (i = ye.exec(e)))
                        if (s = i[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && H(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = i[3]) && w.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (w.qsa && (!L || !L.test(e))) {
                        if (p = f = M, h = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (l = S(e), (f = t.getAttribute("id")) ? p = f.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + d(l[u]);
                            h = be.test(e) && c(t.parentNode) || t, m = l.join(",")
                        }
                        if (m) try {
                            return Q.apply(n, h.querySelectorAll(m)), n
                        } catch (e) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return N(e.replace(ue, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[M] = !0, e
            }

            function i(e) {
                var t = _.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
            }

            function s(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return r(function(t) {
                    return t = +t, r(function(n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function d(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function p(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = W++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, s) {
                    var a, u, l = [B, o];
                    if (s) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) {
                                if (u = t[M] || (t[M] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
                                if (u[r] = l, l[2] = e(t, n, s)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, r) {
                for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                return r
            }

            function g(e, t, n, r, i) {
                for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
                return s
            }

            function v(e, t, n, i, o, s) {
                return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, s)), r(function(r, s, a, u) {
                    var l, c, f, d = [],
                        p = [],
                        h = s.length,
                        v = r || m(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !r && t ? v : g(v, d, e, a, u),
                        b = n ? o || (r ? e : h || i) ? [] : s : y;
                    if (n && n(y, b, a, u), i)
                        for (l = g(b, p), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                                o(null, b = [], l, u)
                            }
                            for (c = b.length; c--;)(f = b[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(s[l] = f))
                        }
                    } else b = g(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, u) : Q.apply(s, b)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, u = p(function(e) {
                        return e === t
                    }, s, !0), l = p(function(e) {
                        return ee(t, e) > -1
                    }, s, !0), c = [function(e, n, r) {
                        var i = !o && (r || n !== P) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                        return t = null, i
                    }]; a < i; a++)
                    if (n = C.relative[e[a].type]) c = [p(h(c), n)];
                    else {
                        if (n = C.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                            for (r = ++a; r < i && !C.relative[e[r].type]; r++);
                            return v(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ue, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && d(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(e, n) {
                var i = n.length > 0,
                    o = e.length > 0,
                    s = function(r, s, a, u, l) {
                        var c, f, d, p = 0,
                            h = "0",
                            m = r && [],
                            v = [],
                            y = P,
                            b = r || o && C.find.TAG("*", l),
                            x = B += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (l && (P = s !== _ && s); h !== w && null != (c = b[h]); h++) {
                            if (o && c) {
                                for (f = 0; d = e[f++];)
                                    if (d(c, s, a)) {
                                        u.push(c);
                                        break
                                    }
                                l && (B = x)
                            }
                            i && ((c = !d && c) && p--, r && m.push(c))
                        }
                        if (p += h, i && h !== p) {
                            for (f = 0; d = n[f++];) d(m, v, s, a);
                            if (r) {
                                if (p > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = G.call(u));
                                v = g(v)
                            }
                            Q.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                        }
                        return l && (B = x, P = y), m
                    };
                return i ? r(s) : s
            }
            var x, w, C, T, k, S, E, N, P, D, $, j, _, A, q, L, O, F, H, M = "sizzle" + 1 * new Date,
                R = e.document,
                B = 0,
                W = 0,
                z = n(),
                I = n(),
                U = n(),
                X = function(e, t) {
                    return e === t && ($ = !0), 0
                },
                V = 1 << 31,
                K = {}.hasOwnProperty,
                Y = [],
                G = Y.pop,
                J = Y.push,
                Q = Y.push,
                Z = Y.slice,
                ee = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ie = re.replace("w", "w#"),
                oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(se),
                pe = new RegExp("^" + ie + "$"),
                he = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                xe = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Ce = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                Te = function() {
                    j()
                };
            try {
                Q.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
            } catch (e) {
                Q = {
                    apply: Y.length ? function(e, t) {
                        J.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, j = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : R;
                return r !== _ && 9 === r.nodeType && r.documentElement ? (_ = r, A = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), q = !k(r), w.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function(e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) {
                    return A.appendChild(e).id = M, !r.getElementsByName || !r.getElementsByName(M).length
                }), w.getById ? (C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && q) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function(e) {
                    var t = e.replace(we, Ce);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function(e) {
                    var t = e.replace(we, Ce);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                    if (q) return t.getElementsByClassName(e)
                }, O = [], L = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
                    A.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || L.push(".#.+[+~]")
                }), i(function(e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (w.matchesSelector = ve.test(F = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function(e) {
                    w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", se)
                }), L = L.length && new RegExp(L.join("|")), O = O.length && new RegExp(O.join("|")), t = ve.test(A.compareDocumentPosition), H = t || ve.test(A.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function(e, t) {
                    if (e === t) return $ = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && H(R, e) ? -1 : t === r || t.ownerDocument === R && H(R, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return $ = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        u = [e],
                        l = [t];
                    if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (o === a) return s(e, t);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; u[i] === l[i];) i++;
                    return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
                }, r) : _
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== _ && j(e), n = n.replace(fe, "='$1']"), w.matchesSelector && q && (!O || !O.test(n)) && (!L || !L.test(n))) try {
                    var r = F.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return t(n, _, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== _ && j(e), H(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== _ && j(e);
                var n = C.attrHandle[t.toLowerCase()],
                    r = n && K.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== r ? r : w.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if ($ = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(X), $) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return D = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += T(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, Ce).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = z[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, d, p, h, m = o !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !u && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (c = g[M] || (g[M] = {}), l = c[e] || [], p = l[0] === B && l[1], d = l[0] === B && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++d && f === t) {
                                            c[e] = [B, p, d];
                                            break
                                        }
                                } else if (y && (l = (t[M] || (t[M] = {}))[e]) && l[0] === B) d = l[1];
                                else
                                    for (;
                                        (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[M] || (f[M] = {}))[e] = [B, d]), f !== t)););
                                return d -= i, d === r || d % r === 0 && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                        }) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            i = E(e.replace(ue, "$1"));
                        return i[M] ? r(function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(we, Ce),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === A
                    },
                    focus: function(e) {
                        return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[x] = u(x);
            return f.prototype = C.filters = C.pseudos, C.setFilters = new f, S = t.tokenize = function(e, n) {
                var r, i, o, s, a, u, l, c = I[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, u = [], l = C.preFilter; a;) {
                    r && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ue, " ")
                    }), a = a.slice(r.length));
                    for (s in C.filter) !(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                    if (!r) break
                }
                return n ? a.length : a ? t.error(e) : I(e, u).slice(0)
            }, E = t.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = U[e + " "];
                if (!o) {
                    for (t || (t = S(e)), n = t.length; n--;) o = y(t[n]), o[M] ? r.push(o) : i.push(o);
                    o = U(e, b(i, r)), o.selector = e
                }
                return o
            }, N = t.select = function(e, t, n, r) {
                var i, o, s, a, u, l = "function" == typeof e && e,
                    f = !r && S(e = l.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && q && C.relative[o[1].type]) {
                        if (t = (C.find.ID(s.matches[0].replace(we, Ce), t) || [])[0], !t) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !C.relative[a = s.type]);)
                        if ((u = C.find[a]) && (r = u(s.matches[0].replace(we, Ce), be.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && d(o), !e) return Q.apply(n, r), n;
                            break
                        }
                }
                return (l || E(e, f))(r, t, !q, n, be.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = M.split("").sort(X).join("") === M, w.detectDuplicates = !!$, j(), w.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(_.createElement("div"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var r;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
    Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = Z.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ce.prototype = Z.fn, ue = Z(J);
    var fe = /^(?:parents|prev(?:Until|All))/,
        de = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? X.call(Z(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (de[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var pe = /\S+/g,
        he = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && a < s; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function t(n) {
                            Z.each(n, function(n, r) {
                                var i = Z.type(r);
                                "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments), r ? s = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (n <= s && s--, n <= a && a--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = z.call(arguments),
                s = o.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : Z.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? z.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var me;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (me.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return me || (me = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), me.promise(t)
    }, Z.ready.promise();
    var ge = Z.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(Z(e), n)
            })), t))
            for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(pe) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : ge(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), e.indexOf("-") !== -1 && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t),
                s = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ce = ["Top", "Right", "Bottom", "Left"],
        Te = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        ke = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = "undefined";
    G.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/,
        Ne = /^(?:mouse|pointer|contextmenu)|click/,
        Pe = /^(?:focusinfocus|focusoutblur)$/,
        De = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, m, g = ve.get(e);
            if (g)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return typeof Z !== Se && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(pe) || [""], l = t.length; l--;) a = De.exec(t[l]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, c = Z.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, m, g = ve.hasData(e) && ve.get(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(pe) || [""], l = t.length; l--;)
                    if (a = De.exec(t[l]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = Z.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) Z.event.remove(e, p + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete g.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, d = [r || J],
                p = Y.call(t, "type") ? t.type : t,
                h = Y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Pe.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || p, Pe.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (r.ownerDocument || J) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[p]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = p, r[p](), Z.event.triggered = void 0, a && (r[l] = a)), t.result;
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [],
                a = z.call(arguments),
                u = (ve.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; n < a; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ne.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && Z.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || Z.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), G.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t);
                i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return Z.event.trigger(e, t, n, !0)
        }
    });
    var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        je = /<([\w:]+)/,
        _e = /<|&#?\w+;/,
        Ae = /<(?:script|style|link)/i,
        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^$|\/(?:java|ecma)script/i,
        Oe = /^true\/(.*)/,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        He = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td, Z.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(a), o = v(e), r = 0, i = o.length; r < i; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), r = 0, i = o.length; r < i; r++) g(o[r], s[r]);
                else g(e, a);
            return s = v(a, "script"), s.length > 0 && m(s, !u && v(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
                if (i = e[d], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (_e.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (je.exec(i) || ["", ""])[1].toLowerCase(), a = He[s] || He._default, o.innerHTML = a[1] + i.replace($e, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", d = 0; i = f[d++];)
                if ((!r || Z.inArray(i, r) === -1) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && m(o), n))
                    for (l = 0; i = o[l++];) Le.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return ge(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return ge(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !He[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace($e, "<$1></$2>");
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = I.apply([], e);
            var n, r, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                d = e[0],
                m = Z.isFunction(d);
            if (m || l > 1 && "string" == typeof d && !G.checkClone && qe.test(d)) return this.each(function(n) {
                var r = c.eq(n);
                m && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), p), o = i.length; u < l; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; u < o; u++) s = i[u], Le.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Fe, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), U.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Me, Re = {},
        Be = /^margin/,
        We = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        ze = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement,
            o = J.createElement("div"),
            s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(G, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
            }
        }))
    }(), Z.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var Ie = /^(none|table(?!-c[ea]).+)/,
        Ue = new RegExp("^(" + we + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + we + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ye = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = T(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Xe.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = T(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return Ie.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                    return E(e, t, r)
                }) : E(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && ze(e);
                return k(e, n, r ? S(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = C(G.reliableMarginRight, function(e, t) {
        if (t) return Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"])
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ce[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Be.test(e) || (Z.cssHooks[e + t].set = k)
    }), Z.fn.extend({
        css: function(e, t) {
            return ge(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Z.isArray(t)) {
                    for (r = ze(e), i = t.length; s < i; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Te(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = P, P.prototype = {
        constructor: P,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = P.prototype.init, Z.fx.step = {};
    var Ge, Je, Qe = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [_],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Ze.exec(t),
                    o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(q, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Te).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Z.isEmptyObject(e),
                    o = Z.speed(t, n, r),
                    s = function() {
                        var t = q(this, Z.extend({}, e), o);
                        (i || ve.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Z.timers,
                        s = ve.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ve.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Z.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
            }
        }), Z.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Ge = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Ge = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Je), Je = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
        }();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return ge(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Se ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(pe);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!G.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return ge(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(pe) || []; u < l; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(pe) || []; u < l; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(pe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else n !== Se && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (n = r[u], (n.selected || u === i) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                if (Z.isArray(t)) return e.checked = Z.inArray(Z(e).val(), t) >= 0
            }
        }, G.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Z.now(),
        ct = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + e), t
    };
    var ft = /#.*$/,
        dt = /([?&])_=[^&]*/,
        pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mt = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yt = {},
        bt = {},
        xt = "*/".concat("*"),
        wt = e.location.href,
        Ct = vt.exec(wt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt,
            type: "GET",
            isLocal: ht.test(Ct[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? F(F(e, Z.ajaxSettings), t) : F(Z.ajaxSettings, e)
        },
        ajaxPrefilter: L(yt),
        ajaxTransport: L(bt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, x, C = t;
                2 !== b && (b = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (y = H(f, w, n)), y = M(f, y, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (Z.etag[i] = x)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, u = !v)) : (v = C, !e && C || (C = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || C) + "", u ? h.resolveWith(d, [c, C, w]) : h.rejectWith(d, [w, C, v]), w.statusCode(g), g = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), m.fireWith(d, [w, C]), l && (p.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
                d = f.context || f,
                p = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                h = Z.Deferred(),
                m = Z.Callbacks("once memory"),
                g = f.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; t = pt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(gt, Ct[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Ct[1] && u[2] === Ct[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), O(yt, f, t, w), 2 === b) return w;
            l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dt.test(i) ? i.replace(dt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](f[c]);
            if (r = O(bt, f, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, r.send(v, n)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var Tt = /%20/g,
        kt = /\[\]$/,
        St = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) R(n, e[n], t, i);
        return r.join("&").replace(Tt, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Nt.test(this.nodeName) && !Et.test(e) && (this.checked || !ke.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Pt = 0,
        Dt = {},
        $t = {
            0: 200,
            1223: 204
        },
        jt = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Dt) Dt[e]()
    }), G.cors = !!jt && "withCredentials" in jt, G.ajax = jt = !!jt, Z.ajaxTransport(function(e) {
        var t;
        if (G.cors || jt && !e.crossDomain) return {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++Pt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete Dt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r($t[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Dt[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (e) {
                    if (t) throw e
                }
            },
            abort: function() {
                t && t()
            }
        }
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var _t = [],
        At = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = _t.pop() || Z.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (At.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && At.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(At, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, _t.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = se.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var qt = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && qt) return qt.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Lt = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"),
                f = Z(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = B(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Lt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Lt
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return ge(this, function(t, i, o) {
                var s = B(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = C(G.pixelPosition, function(e, n) {
            if (n) return n = w(e, t), We.test(n) ? Z(e).position()[t] + "px" : n
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return ge(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Ot = e.jQuery,
        Ft = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Ft), t && e.jQuery === Z && (e.jQuery = Ot), Z
    }, typeof t === Se && (e.jQuery = e.$ = Z), Z
}), ! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Pressure = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function t(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = {
            set: function(e, t, n) {
                d(e, t, n)
            },
            config: function(e) {
                f.set(e)
            },
            map: function() {
                return h.apply(null, arguments)
            }
        },
        s = function() {
            function e(t, r, i) {
                n(this, e), this.routeEvents(t, r, i), this.preventSelect(t, i)
            }
            return i(e, [{
                key: "routeEvents",
                value: function(e, t, n) {
                    var r = f.get("only", n);
                    this.adapter = !v || "pointer" !== r && null !== r ? !g || "touch" !== r && null !== r ? !m || "mouse" !== r && null !== r ? new a(e, t).bindUnsupportedEvent() : new u(e, t, n).bindEvents() : new l(e, t, n).bindEvents() : new c(e, t, n).bindEvents()
                }
            }, {
                key: "preventSelect",
                value: function(e, t) {
                    f.get("preventSelect", t) && (e.style.webkitTouchCallout = "none", e.style.webkitUserSelect = "none", e.style.khtmlUserSelect = "none", e.style.MozUserSelect = "none", e.style.msUserSelect = "none", e.style.userSelect = "none")
                }
            }]), e
        }(),
        a = function() {
            function e(t, r, i) {
                n(this, e), this.el = t, this.block = r, this.options = i, this.pressed = !1, this.deepPressed = !1, this.nativeSupport = !1, this.runningPolyfill = !1, this.runKey = Math.random()
            }
            return i(e, [{
                key: "setPressed",
                value: function(e) {
                    this.pressed = e
                }
            }, {
                key: "setDeepPressed",
                value: function(e) {
                    this.deepPressed = e
                }
            }, {
                key: "isPressed",
                value: function() {
                    return this.pressed
                }
            }, {
                key: "isDeepPressed",
                value: function() {
                    return this.deepPressed
                }
            }, {
                key: "add",
                value: function(e, t) {
                    this.el.addEventListener(e, t, !1)
                }
            }, {
                key: "runClosure",
                value: function(e) {
                    e in this.block && this.block[e].apply(this.el, Array.prototype.slice.call(arguments, 1))
                }
            }, {
                key: "fail",
                value: function(e, t) {
                    f.get("polyfill", this.options) ? this.runKey === t && this.runPolyfill(e) : this.runClosure("unsupported", e)
                }
            }, {
                key: "bindUnsupportedEvent",
                value: function() {
                    var e = this;
                    this.add(g ? "touchstart" : "mousedown", function(t) {
                        return e.runClosure("unsupported", t)
                    })
                }
            }, {
                key: "_startPress",
                value: function(e) {
                    this.isPressed() === !1 && (this.runningPolyfill = !1, this.setPressed(!0), this.runClosure("start", e))
                }
            }, {
                key: "_startDeepPress",
                value: function(e) {
                    this.isPressed() && this.isDeepPressed() === !1 && (this.setDeepPressed(!0), this.runClosure("startDeepPress", e))
                }
            }, {
                key: "_changePress",
                value: function(e, t) {
                    this.nativeSupport = !0, this.runClosure("change", e, t)
                }
            }, {
                key: "_endDeepPress",
                value: function() {
                    this.isPressed() && this.isDeepPressed() && (this.setDeepPressed(!1), this.runClosure("endDeepPress"))
                }
            }, {
                key: "_endPress",
                value: function() {
                    this.runningPolyfill === !1 ? (this.isPressed() && (this._endDeepPress(), this.setPressed(!1), this.runClosure("end")), this.runKey = Math.random(), this.nativeSupport = !1) : this.setPressed(!1)
                }
            }, {
                key: "deepPress",
                value: function(e, t) {
                    e >= .5 ? this._startDeepPress(t) : this._endDeepPress()
                }
            }, {
                key: "runPolyfill",
                value: function(e) {
                    this.increment = 0 === f.get("polyfillSpeedUp", this.options) ? 1 : 10 / f.get("polyfillSpeedUp", this.options), this.decrement = 0 === f.get("polyfillSpeedDown", this.options) ? 1 : 10 / f.get("polyfillSpeedDown", this.options), this.setPressed(!0), this.runClosure("start", e), this.runningPolyfill === !1 && this.loopPolyfillForce(0, e)
                }
            }, {
                key: "loopPolyfillForce",
                value: function(e, t) {
                    this.nativeSupport === !1 && (this.isPressed() ? (this.runningPolyfill = !0, e = e + this.increment > 1 ? 1 : e + this.increment, this.runClosure("change", e, t), this.deepPress(e, t), setTimeout(this.loopPolyfillForce.bind(this, e, t), 10)) : (e = e - this.decrement < 0 ? 0 : e - this.decrement, e < .5 && this.isDeepPressed() && (this.setDeepPressed(!1), this.runClosure("endDeepPress")), 0 === e ? (this.runningPolyfill = !1, this.setPressed(!0), this._endPress()) : (this.runClosure("change", e, t), this.deepPress(e, t), setTimeout(this.loopPolyfillForce.bind(this, e, t), 10))))
                }
            }]), e
        }(),
        u = function(r) {
            function o(t, r, i) {
                return n(this, o), e(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t, r, i))
            }
            return t(o, r), i(o, [{
                key: "bindEvents",
                value: function() {
                    this.add("webkitmouseforcewillbegin", this._startPress.bind(this)), this.add("mousedown", this.support.bind(this)), this.add("webkitmouseforcechanged", this.change.bind(this)), this.add("webkitmouseforcedown", this._startDeepPress.bind(this)), this.add("webkitmouseforceup", this._endDeepPress.bind(this)), this.add("mouseleave", this._endPress.bind(this)), this.add("mouseup", this._endPress.bind(this))
                }
            }, {
                key: "support",
                value: function(e) {
                    this.isPressed() === !1 && this.fail(e, this.runKey)
                }
            }, {
                key: "change",
                value: function(e) {
                    this.isPressed() && e.webkitForce > 0 && this._changePress(this.normalizeForce(e.webkitForce), e)
                }
            }, {
                key: "normalizeForce",
                value: function(e) {
                    return this.reachOne(h(e, 1, 3, 0, 1))
                }
            }, {
                key: "reachOne",
                value: function(e) {
                    return e > .995 ? 1 : e
                }
            }]), o
        }(a),
        l = function(r) {
            function o(t, r, i) {
                return n(this, o), e(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t, r, i))
            }
            return t(o, r), i(o, [{
                key: "bindEvents",
                value: function() {
                    b ? (this.add("touchforcechange", this.start.bind(this)), this.add("touchstart", this.support.bind(this, 0)), this.add("touchend", this._endPress.bind(this))) : (this.add("touchstart", this.startLegacy.bind(this)), this.add("touchend", this._endPress.bind(this)))
                }
            }, {
                key: "start",
                value: function(e) {
                    e.touches.length > 0 && (this._startPress(e), this.touch = this.selectTouch(e), this.touch && this._changePress(this.touch.force, e))
                }
            }, {
                key: "support",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.runKey;
                    this.isPressed() === !1 && (e <= 6 ? (e++, setTimeout(this.support.bind(this, e, t, n), 10)) : this.fail(t, n))
                }
            }, {
                key: "startLegacy",
                value: function(e) {
                    this.initialForce = e.touches[0].force, this.supportLegacy(0, e, this.runKey, this.initialForce)
                }
            }, {
                key: "supportLegacy",
                value: function(e, t, n, r) {
                    r !== this.initialForce ? (this._startPress(t), this.loopForce(t)) : e <= 6 ? (e++, setTimeout(this.supportLegacy.bind(this, e, t, n, r), 10)) : this.fail(t, n)
                }
            }, {
                key: "loopForce",
                value: function(e) {
                    this.isPressed() && (this.touch = this.selectTouch(e), setTimeout(this.loopForce.bind(this, e), 10), this._changePress(this.touch.force, e))
                }
            }, {
                key: "selectTouch",
                value: function(e) {
                    if (1 === e.touches.length) return this.returnTouch(e.touches[0], e);
                    for (var t = 0; t < e.touches.length; t++)
                        if (e.touches[t].target === this.el || this.el.contains(e.touches[t].target)) return this.returnTouch(e.touches[t], e)
                }
            }, {
                key: "returnTouch",
                value: function(e, t) {
                    return this.deepPress(e.force, t), e
                }
            }]), o
        }(a),
        c = function(r) {
            function o(t, r, i) {
                return n(this, o), e(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t, r, i))
            }
            return t(o, r), i(o, [{
                key: "bindEvents",
                value: function() {
                    this.add("pointerdown", this.support.bind(this)), this.add("pointermove", this.change.bind(this)), this.add("pointerup", this._endPress.bind(this)), this.add("pointerleave", this._endPress.bind(this))
                }
            }, {
                key: "support",
                value: function(e) {
                    this.isPressed() === !1 && (0 === e.pressure || .5 === e.pressure ? this.fail(e, this.runKey) : (this._startPress(e), this._changePress(e.pressure, e)))
                }
            }, {
                key: "change",
                value: function(e) {
                    this.isPressed() && e.pressure > 0 && .5 !== e.pressure && (this._changePress(e.pressure, e), this.deepPress(e.pressure, e))
                }
            }]), o
        }(a),
        f = {
            polyfill: !0,
            polyfillSpeedUp: 1e3,
            polyfillSpeedDown: 0,
            preventSelect: !0,
            only: null,
            get: function(e, t) {
                return t.hasOwnProperty(e) ? t[e] : this[e]
            },
            set: function(e) {
                for (var t in e) e.hasOwnProperty(t) && this.hasOwnProperty(t) && "get" != t && "set" != t && (this[t] = e[t])
            }
        },
        d = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("string" == typeof e || e instanceof String)
                for (var r = document.querySelectorAll(e), i = 0; i < r.length; i++) new s(r[i], t, n);
            else if (p(e)) new s(e, t, n);
            else
                for (var i = 0; i < e.length; i++) new s(e[i], t, n)
        },
        p = function(e) {
            return "object" === ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        },
        h = function(e, t, n, r, i) {
            return (e - t) * (i - r) / (n - t) + r
        },
        m = !1,
        g = !1,
        v = !1,
        y = !1,
        b = !1;
    if ("undefined" != typeof window) {
        if ("undefined" != typeof Touch) try {
            (Touch.prototype.hasOwnProperty("force") || "force" in new Touch) && (y = !0)
        } catch (e) {}
        g = "ontouchstart" in window.document && y, m = "onmousemove" in window.document && !g, v = "onpointermove" in window.document, b = "ontouchforcechange" in window.document
    }
    return o
}),
/*! modernizr 3.4.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-forcetouch-touchevents-setclasses !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function i() {
        var e, t, n, i, o, s, a;
        for (var u in b)
            if (b.hasOwnProperty(u)) {
                if (e = [], t = b[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) s = e[o], a = s.split("."), 1 === a.length ? w[a[0]] = i : (!w[a[0]] || w[a[0]] instanceof Boolean || (w[a[0]] = new Boolean(w[a[0]])), w[a[0]][a[1]] = i), y.push((i ? "" : "no-") + a.join("-"))
            }
    }

    function o(e) {
        var t = C.className,
            n = w._config.classPrefix || "";
        if (T && (t = t.baseVal), w._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        w._config.enableClasses && (t += " " + n + e.join(" " + n), T ? C.className.baseVal = t : C.className = t)
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function u() {
        var e = t.body;
        return e || (e = s(T ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, n, r, i) {
        var o, a, l, c, f = "modernizr",
            d = s("div"),
            p = u();
        if (parseInt(r, 10))
            for (; r--;) l = s("div"), l.id = i ? i[r] : f + (r + 1), d.appendChild(l);
        return o = s("style"), o.type = "text/css", o.id = "s" + f, (p.fake ? p : d).appendChild(o), p.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = c, C.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function c(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function d(e, t, n) {
        var i;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? f(i, n || t) : i);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(t, n, r) {
        var i;
        if ("getComputedStyle" in e) {
            i = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== i) r && (i = i.getPropertyValue(r));
            else if (o) {
                var s = o.error ? "error" : "log";
                o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else i = !n && t.currentStyle && t.currentStyle[r];
        return i
    }

    function m(t, r) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;)
                if (e.CSS.supports(p(t[i]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; i--;) o.push("(" + p(t[i]) + ":" + r + ")");
            return o = o.join(" or "), l("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == h(e, null, "position")
            })
        }
        return n
    }

    function g(e, t, i, o) {
        function u() {
            f && (delete _.style, delete _.modElem)
        }
        if (o = !r(o, "undefined") && o, !r(i, "undefined")) {
            var l = m(e, i);
            if (!r(l, "undefined")) return l
        }
        for (var f, d, p, h, g, v = ["modernizr", "tspan", "samp"]; !_.style && v.length;) f = !0, _.modElem = s(v.shift()), _.style = _.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (h = e[d], g = _.style[h], c(h, "-") && (h = a(h)), _.style[h] !== n) {
                if (o || r(i, "undefined")) return u(), "pfx" != t || h;
                try {
                    _.style[h] = i
                } catch (e) {}
                if (_.style[h] != g) return u(), "pfx" != t || h
            }
        return u(), !1
    }

    function v(e, t, n, i, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + P.join(s + " ") + s).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(a, t, i, o) : (a = (e + " " + $.join(s + " ") + s).split(" "), d(a, t, n))
    }
    var y = [],
        b = [],
        x = {
            _version: "3.4.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        w = function() {};
    w.prototype = x, w = new w;
    var C = t.documentElement,
        T = "svg" === C.nodeName.toLowerCase(),
        k = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = k;
    var S = function() {
        function e(e, t) {
            var i;
            return !!e && (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, i = e in t, !i && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i)
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    x.hasEvent = S;
    var E = x.testStyles = l;
    w.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", k.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            E(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var N = "Moz O ms Webkit",
        P = x._config.usePrefixes ? N.split(" ") : [];
    x._cssomPrefixes = P;
    var D = function(t) {
        var r, i = k.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var s = 0; i > s; s++) {
            var a = k[s],
                u = a.toUpperCase() + "_" + r;
            if (u in o) return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    x.atRule = D;
    var $ = x._config.usePrefixes ? N.toLowerCase().split(" ") : [];
    x._domPrefixes = $;
    var j = {
        elem: s("modernizr")
    };
    w._q.push(function() {
        delete j.elem
    });
    var _ = {
        style: j.elem.style
    };
    w._q.unshift(function() {
        delete _.style
    }), x.testAllProps = v;
    var A = x.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? D(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    w.addTest("forcetouch", function() {
        return !!S(A("mouseforcewillbegin", e, !1), e) && (MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN)
    }), i(), o(y), delete x.addTest, delete x.addAsyncTest;
    for (var q = 0; q < w._q.length; q++) w._q[q]();
    e.Modernizr = w
}(window, document);
var isMobile = !1;
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0), Pressure.config({
        polyfill: !0,
        polyfillSpeedUp: 50,
        polyfillSpeedDown: 0,
        preventSelect: !0,
        only: null
    }),
    function() {
        var e = !0,
            t = !1,
            n = {
                init: function() {
                    isMobile ? Touch.prototype.hasOwnProperty("force") || "force" in new Touch ? $(".tutorial").addClass("forcetouch") : $(".tutorial").addClass("longtap") : $(".tutorial").addClass("laptop"), t ? ($("body").removeClass("pre-intro"), $(".radar").addClass("scene-one scene-two scene-three scene-four"), n.positionBlips(!1), n.sceneFinale(), n.addBinders()) : (setTimeout(function() {
                        $("body").removeClass("pre-intro").addClass("intro")
                    }, 10), $("document").ready(function() {
                        $(".prelude").remove();
                        n.explore()
                    }))
                },
                explore: function() {
                    $("body").removeClass("intro"), setTimeout(function() {
                        n.sceneOne()
                    }, 1e3), setTimeout(function() {
                        n.sceneTwo()
                    }, 2e3), setTimeout(function() {
                        n.sceneThree()
                    }, 5e3), setTimeout(function() {
                        n.sceneFour()
                    }, 6500), setTimeout(function() {
                        n.positionBlips(!1), n.sceneFinale(), n.addBinders()
                    }, 7e3), isMobile && setTimeout(function() {
                        $("body").addClass("tutorial-screen")
                    }, 1e4)
                },
                sceneOne: function() {
                    $(".radar").addClass("scene-one")
                },
                sceneTwo: function() {
                    $(".radar").addClass("scene-two")
                },
                sceneThree: function() {
                    $(".radar").addClass("scene-three")
                },
                sceneFour: function() {
                    $(".radar").addClass("scene-four")
                },
                sceneFinale: function() {
                    $(".radar").addClass("scene-finale"), $("body").addClass("complete")
                },
                positionBlips: function() {
                    if ($(".radar").length) {
                        var t = $(".radar__chart").width(),
                            n = 0,
                            r = 0,
                            i = 0,
                            o = 0;
                        $($(".blip").get().reverse()).each(function(s) {
                            r = $(this).closest("section").width() / 2, n = r, i = $(this).attr("data-angle"), o = $(this).attr("data-distance"), r = r - t / 8 + t / 8 * o, $(this).addClass($(this).attr("data-ring")), $(this).addClass($(this).attr("data-status"));
                            var a = $(this).attr("data-quadrant");
                            "language" === a ? i = 90 * i : "platform" === a ? i = 90 + 90 * i : "technique" === a ? i = 180 + 90 * i : "tool" === a && (i = 270 + 90 * i), i = i * Math.PI / 180;
                            var u = n + r * Math.cos(i),
                                l = n + r * Math.sin(i);
                            $(this).css({
                                transform: "translate3D(" + u + "px, " + l + "px, 0)"
                            });
                            var c = function() {
                                    $(this).addClass("loaded")
                                },
                                f = function() {
                                    $(this).addClass(a)
                                };
                            e ? (setTimeout(c.bind(this), 50 * s), setTimeout(f.bind(this), 1e3 + 50 * s)) : setTimeout(c.bind(this), 25 * s)
                        }), e = !1
                    } else {
                        var s = 0,
                            a = 0,
                            u = 0,
                            l = 0,
                            c = 0,
                            f = 0,
                            d = 0,
                            p = 0;
                        $($("section").get().reverse()).each(function() {
                            s = $(".blip").width(), a = $(this).innerWidth(), u = $(this).find(".blip"), l = u.length, c = Math.floor(a / s);
                            var e = a % s;
                            d = Math.round(e / 2), f = d, p = 0, u.each(function(e) {
                                $(this).addClass($(this).attr("data-ring")), $(this).addClass($(this).attr("data-status"));
                                var t = $(this).attr("data-quadrant");
                                "language" === t ? i = 90 * i : "platform" === t ? i = 90 + 90 * i : "technique" === t ? i = 180 + 90 * i : "tool" === t && (i = 270 + 90 * i), i = i * Math.PI / 180, e % c == 0 ? (f = d, p += s) : f += s;
                                var n = f,
                                    r = p,
                                    o = function() {
                                        $(this).css({
                                            transform: "translate3D(" + n + "px, " + r + "px, 0)"
                                        }).addClass("loaded")
                                    };
                                setTimeout(o.bind(this), 25 * e)
                            })
                        })
                    }
                },
                addBinders: function() {
                    function e() {
                        new Date - r < o ? setTimeout(e, o) : (i = !1, n.positionBlips(!0))
                    }
                    var t = !1;
                    $(".blip").mouseover(function() {
                        n.blipHover($(this))
                    }).mouseout(function() {
                        $(".blip").removeClass("muted"), $(".caption").removeClass("active")
                    }), Pressure.set(".blip", {
                        change: function() {
                            n.openBlip($(this))
                        }
                    }, {
                        only: "mouse"
                    }), Pressure.set(".blip", {
                        change: function(e) {
                            0 === e ? ($(".blip").removeClass("muted"), $(".caption").removeClass("active")) : e < 1 ? (n.blipHover($(this)), $(".radar__chart").css("opacity", 1 - .75 * e)) : t || n.openBlip($(this))
                        },
                        end: function() {
                            $(".radar__chart").css("opacity", 1)
                        }
                    }, {
                        only: "touch"
                    }), $(".overlay__back").click(function() {
                        $("body").removeClass("detail"), t = !1
                    }), $(".tutorial a").click(function() {
                        $("body").removeClass("tutorial-screen")
                    }), $(".help a").click(function() {
                        $("body").addClass("tutorial-screen")
                    }), $("#grid").click(function() {
                        $("a.active").removeClass("active"), $(this).addClass("active"), $(".radar").fadeOut(function() {
                            $(this).addClass("grid").removeClass("radar"), setTimeout(function() {
                                $(".grid").fadeIn(), n.positionBlips(!1)
                            }, 100)
                        })
                    }), $("#radar").click(function() {
                        $("a.active").removeClass("active"), $(this).addClass("active"), $(".grid").fadeOut(function() {
                            $(this).addClass("radar").removeClass("grid"), setTimeout(function() {
                                $(".radar").fadeIn(), n.positionBlips(!1)
                            }, 100)
                        })
                    });
                    var r, i = !1,
                        o = 200;
                    $(window).resize(function() {
                        r = new Date, i === !1 && (i = !0, setTimeout(e, o))
                    })
                },
                blipHover: function(e) {
                    $(".blip").not(e).addClass("muted");
                    var t = e.attr("data-title"),
                        n = e.attr("data-quadrant"),
                        r = e.attr("data-ring");
                    switch ($(".caption h4").html(t), $(".caption .quadrant").attr("class", "").addClass("quadrant " + n), $(".caption .ring").html(r), n) {
                        case "language":
                            $(".caption .quadrant").html("Languages & Frameworks");
                            break;
                        case "platform":
                            $(".caption .quadrant").html("Platforms");
                            break;
                        case "technique":
                            $(".caption .quadrant").html("Techniques");
                            break;
                        case "tool":
                            $(".caption .quadrant").html("Tools");
                            break;
                        default:
                            $(".caption .quadrant").html("")
                    }
                    $(".caption").addClass("active")
                },
                openBlip: function(e) {
                    var t = e.attr("data-title"),
                        n = e.attr("data-description"),
                        r = e.attr("data-author"),
                        i = e.attr("data-link-text"),
                        o = e.attr("data-link-url"),
                        s = e.attr("data-ring"),
                        a = e.attr("data-quadrant"),
                        u = e.attr("data-status"),
                        d = e.attr("data-date");
                    rfe = e.attr("data-register"); //register for event
                    contact1=e.attr("data-contact1");
                    contact2=e.attr("data-contact2");
                    contact3=e.attr("data-contact3");
                    prizes = e.attr("data-prizes");
                    switch ($(".overlay").find("h1").html(t), $(".overlay").find(".description").html(n), $(".overlay").find(".link").html(i).attr("href", o), $(".overlay").find(".ring").html(s), $(".overlay .quadrant").attr("class", "").addClass("quadrant " + a), a) {
                        case "language":
                            $(".overlay .quadrant").html("View Pics!");
                            break;
                        case "platform":
                            $(".overlay .quadrant").html("View Pics!");
                            break;
                        case "technique":
                            $(".overlay .quadrant").html("View Pics!");
                            break;
                        case "tool":
                            $(".overlay .quadrant").html("View Pics!");
                            break;
                        default:
                            $(".overlay .quadrant").html("View Pics!")
                    }
                    switch (r) {
                        case "henrik":
                            $(".author__name h3").html("Henrik Sj\xf6kvist"), $(".author__name h4").html("Developer + Partner, Sweden");
                            break;
                        case "per":
                            $(".author__name h3").html("Per Sandstr\xf6m"), $(".author__name h4").html("Designer + Partner, Sweden");
                            break;
                        case "eduardo":
                            $(".author__name h3").html("Eduardo Nunes"), $(".author__name h4").html("Designer + Partner, Portugal");
                            break;
                        case "filippos":
                            $(".author__name h3").html("Filippos Vasilakis"), $(".author__name h4").html("Developer, Sweden");
                            break;
                        case "ivan":
                            $(".author__name h3").html("Ivan Novosad"), $(".author__name h4").html("Developer, Slovakia");
                            break;
                        case "filippos":
                            $(".author__name h3").html("Dennis Carlsson"), $(".author__name h4").html("Developer, Sweden");
                            break;
                        case "nikolay":
                            $(".author__name h3").html("Nikolay Lechev"), $(".author__name h4").html("Designer, Bulgaria");
                            break;
                        case "osvaldas":
                            $(".author__name h3").html("Osvaldas Valutis"), $(".author__name h4").html("Developer, Lithuania");
                            break;
                        case "raymall":
                            $(".author__name h3").html("Raymall P\xe9rez"), $(".author__name h4").html("Designer, Dominican Republican");
                            break;
                        default:
                            $(".author__name h3").html("Kollegorna"), $(".author__name h4").html("")
                    }
                    $(".author__photo img").attr("src", "images/team/" + r + ".png"), $(".overlay .status").attr("class", "").addClass("status " + u), "new" === u ? $(".overlay .status").html(d) : $(".overlay .status").html("Awaited!"), $("body").addClass("detail"), openDetail = !0, $('.registerForEvent').attr('href', rfe),$('.contact1').html(contact1),
                        $('.contact2').html(contact2),$('.contact3').html(contact3),$('.prizes').html(prizes);
                }
            };
        document.addEventListener("DOMContentLoaded", function() {
            n.init()
        })
    }();
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
