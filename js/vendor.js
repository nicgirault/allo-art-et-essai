/*
 AngularJS v1.4.5
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,W,u){'use strict';function G(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.5/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Ya(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===pa&&a?!0:H(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function n(b,a,c){var d,e;if(b)if(B(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(K(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==n)b.forEach(a,c,b);else if(lc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Na.call(b,d)&&a.call(c,b[d],d,b);return b}function mc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function nc(b){return function(a,c){b(c,a)}}function Ud(){return++mb}function oc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(D(g)||B(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var m=h[l],q=g[m];c&&D(q)?ca(q)?b[m]=new Date(q.valueOf()):Oa(q)?
b[m]=new RegExp(q):(D(b[m])||(b[m]=K(q)?[]:{}),Mb(b[m],[q],!0)):b[m]=q}}oc(b,d);return b}function Q(b){return Mb(b,xa.call(arguments,1),!1)}function Vd(b){return Mb(b,xa.call(arguments,1),!0)}function Y(b){return parseInt(b,10)}function Nb(b,a){return Q(Object.create(b),a)}function v(){}function Za(b){return b}function qa(b){return function(){return b}}function pc(b){return B(b.toString)&&b.toString!==Object.prototype.toString}function y(b){return"undefined"===typeof b}function x(b){return"undefined"!==
typeof b}function D(b){return null!==b&&"object"===typeof b}function lc(b){return null!==b&&"object"===typeof b&&!qc(b)}function H(b){return"string"===typeof b}function X(b){return"number"===typeof b}function ca(b){return"[object Date]"===sa.call(b)}function B(b){return"function"===typeof b}function Oa(b){return"[object RegExp]"===sa.call(b)}function Ya(b){return b&&b.window===b}function $a(b){return b&&b.$evalAsync&&b.$watch}function ab(b){return"boolean"===typeof b}function rc(b){return!(!b||!(b.nodeName||
b.prop&&b.attr&&b.find))}function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return I(b.nodeName||b[0]&&b[0].nodeName)}function bb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Ya(b)||$a(b))throw Ea("cpws");if(sc.test(sa.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];D(b)&&(c.push(b),d.push(a));var e;if(K(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;K(a)?
a.length=0:n(a,function(b,c){delete a[c]});if(lc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=fa(b[e],null,c,d));else for(e in b)Na.call(b,e)&&(a[e]=fa(b[e],null,c,d));oc(a,f)}}else if(a=b,D(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(K(b))return fa(b,[],c,d);if(sc.test(sa.call(b)))a=new b.constructor(b);else if(ca(b))a=new Date(b.getTime());else if(Oa(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=
b.lastIndex;else return e=Object.create(qc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(K(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(D(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(ca(b))return ca(a)?
ka(b.getTime(),a.getTime()):!1;if(Oa(b))return Oa(a)?b.toString()==a.toString():!1;if($a(b)||$a(a)||Ya(b)||Ya(a)||K(a)||ca(a)||Oa(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!B(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===u||B(a[d])))return!1;return!0}return!1}function cb(b,a,c){return b.concat(xa.call(a,c))}function tc(b,a){var c=2<arguments.length?xa.call(arguments,2):[];return!B(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,cb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Ya(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":$a(a)&&(c="$SCOPE");return c}function db(b,a){if("undefined"===typeof b)return u;X(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function uc(b){return H(b)?JSON.parse(b):b}function vc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Ob(b,
a,c){c=c?-1:1;var d=vc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ua(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return b[0].nodeType===Pa?I(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+I(b)})}catch(d){return I(c)}}function wc(b){try{return decodeURIComponent(b)}catch(a){}}function xc(b){var a={};n((b||"").split("&"),function(b){var d,e,f;b&&(e=
b=b.replace(/\+/g,"%20"),d=b.indexOf("="),-1!==d&&(e=b.substring(0,d),f=b.substring(d+1)),e=wc(e),x(e)&&(f=x(f)?wc(f):!0,Na.call(a,e)?K(a[e])?a[e].push(f):a[e]=[a[e],f]:a[e]=f))});return a}function Pb(b){var a=[];n(b,function(b,d){K(b)?n(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function nb(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Qa.length;for(d=0;d<e;++d)if(c=Qa[d]+a,H(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};n(Qa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});n(Qa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),
a(c,d?[d]:[],e))}function yc(b,a,c){D(c)||(c={});c=Q({strictDi:!1},c);var d=function(){b=z(b);if(b.injector()){var d=b[0]===W?"document":ua(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;N&&e.test(N.name)&&(c.debugInfoEnabled=!0,N.name=N.name.replace(e,""));if(N&&!f.test(N.name))return d();N.name=N.name.replace(f,"");aa.resumeBootstrap=function(b){n(b,function(b){a.push(b)});return d()};B(aa.resumeDeferredBootstrap)&&aa.resumeDeferredBootstrap()}function $d(){N.name="NG_ENABLE_DEBUG_INFO!"+N.name;N.location.reload()}function ae(b){b=aa.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}
function zc(b,a){a=a||"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Ac){var a=ob();la=N.jQuery;x(a)&&(la=null===a?u:N[a]);la&&la.fn.on?(z=la,Q(la.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Qb)Qb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):z=R;aa.element=
z;Ac=!0}}function pb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&K(b)&&(b=b[b.length-1]);pb(B(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ta(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&B(b)?tc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;
if(!a)break;c.push(a)}while(a!==b);return z(c)}function ga(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=G("$injector"),d=G("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||G;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return E}}function b(a,c){return function(b,
e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return E}}if(!g)throw c("nomod",f);var d=[],e=[],s=[],t=a("$injector","invoke","push",e),E={_invokeQueue:d,_configBlocks:e,_runBlocks:s,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),config:t,run:function(a){s.push(a);return this}};h&&t(h);return E})}})}function ee(b){Q(b,{bootstrap:yc,copy:fa,extend:Q,merge:Vd,equals:ka,element:z,forEach:n,injector:eb,noop:v,bind:tc,toJson:db,fromJson:uc,identity:Za,isUndefined:y,isDefined:x,isString:H,isFunction:B,isObject:D,isNumber:X,isElement:rc,isArray:K,version:fe,isDate:ca,lowercase:I,uppercase:rb,callbacks:{counter:0},getTestability:ae,$$minErr:G,$$csp:Fa,reloadWithDebugInfo:$d});
Rb=de(N);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,
ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(sb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,
$httpBackend:ff,$location:gf,$log:hf,$parse:jf,$rootScope:kf,$q:lf,$$q:mf,$sce:nf,$sceDelegate:of,$sniffer:pf,$templateCache:qf,$templateRequest:rf,$$testability:sf,$timeout:tf,$window:uf,$$rAF:vf,$$jqLite:wf,$$HashMap:xf,$$cookieReader:yf})}])}function fb(b){return b.replace(zf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Af,"Moz$1")}function Kc(b){b=b.nodeType;return b===pa||!b||9===b}function Lc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));
d=(Bf.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Cf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=cb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;H(b)&&(b=T(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=W;var c;b=(c=Df.exec(b))?[a.createElement(c[1])]:
(c=Lc(b,a))?c.childNodes:[]}Mc(this,b)}function Ub(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Nc(b,a,c,d){if(x(d))throw Tb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)n(a.split(" "),function(a){if(x(c)){var d=e[a];bb(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,
a){var c=b.ng339,d=c&&gb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Nc(b)),delete gb[c],b.ng339=u))}function vb(b,a){var c=b.ng339,c=c&&gb[c];a&&!c&&(b.ng339=c=++Ef,c=gb[c]={events:{},data:{},handle:u});return c}function Vb(b,a,c){if(Kc(b)){var d=x(c),e=!d&&a&&!D(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];Q(b,a)}}}function wb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
a+" "):!1}function xb(b,a){a&&b.setAttribute&&n(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function yb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Mc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==
a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Oc(b,a){return zb(b,"$"+(a||"ngController")+"Controller")}function zb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=K(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=z.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Pc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Wb(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ff(b,a){a=a||N;if("complete"===a.document.readyState)a.setTimeout(b);
else z(a).on("load",b)}function Qc(b,a){var c=Ab[a.toLowerCase()];return c&&Rc[ta(b)]&&c}function Gf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Sc[a]}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function wf(){this.$get=function(){return Q(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==
c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Ua(b,a){if(a){var c=0;this.nextUid=function(){return++c}}n(b,this.put,this)}function If(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(b,a){function c(a){return function(b,c){if(D(b))n(b,nc(a));else return a(b,c)}}function d(a,b){Ta(a,"service");if(B(b)||K(b))b=s.instantiate(b);if(!b.$get)throw Ha("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=
E.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){pb(y(a)||K(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{H(a)?(c=Rb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(s.invoke(a)):K(a)?b.push(s.invoke(a)):Sa(a,"module")}catch(e){throw K(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(b,a,g),l,s,m;s=0;for(l=k.length;s<l;s++){m=k[s];if("string"!==
typeof m)throw Ha("itkn",m);h.push(f&&f.hasOwnProperty(m)?f[m]:d(m,g))}K(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((K(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return D(a)||B(a)?a:d},get:d,annotate:eb.$$annotate,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new Ua([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,qa(b),!1)}),constant:c(function(a,b){Ta(a,"constant");q[a]=b;t[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=E.invoke(d,c);return E.invoke(b,null,{$delegate:a})}}}},s=q.$injector=h(q,function(a,b){aa.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),t={},E=t.$injector=h(t,function(a,b){var c=s.get(a+"Provider",b);return E.invoke(c.$get,c,u,a)});n(g(b),function(a){a&&E.invoke(a)});return E}function Qe(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():rc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):X(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=H(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):
(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ff(function(){d.$evalAsync(g)})});return g}]}function hb(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;K(b)&&(b=b.join(" "));K(a)&&(a=a.join(" "));return b+" "+a}function Jf(b){H(b)&&(b=b.split(" "));var a=ga();n(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return D(b)?b:{}}function Kf(b,a,c,d){function e(a){try{a.apply(null,xa.call(arguments,
1))}finally{if(E--,0===E)for(;L.length;)try{L.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{w=m.state;break a}catch(a){}w=void 0}w=y(w)?null:w;ka(w,F)&&(w=F);F=w}function h(){if(A!==l.url()||p!==w)A=l.url(),p=w,n(O,function(a){a(l.url(),w)})}var l=this,k=b.location,m=b.history,q=b.setTimeout,s=b.clearTimeout,t={};l.isMock=!1;var E=0,L=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=function(){E++};l.notifyWhenNoOutstandingRequests=function(a){0===E?a():
L.push(a)};var w,p,A=k.href,r=a.find("base"),M=null;g();p=w;l.url=function(a,c,e){y(e)&&(e=null);k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){var f=p===e;if(A===a&&(!d.history||f))return l;var h=A&&Ja(A)===Ja(a);A=a;p=e;if(!d.history||h&&f){if(!h||M)M=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):k.href=a}else m[c?"replaceState":"pushState"](e,"",a),g(),p=w;return l}return M||k.href.replace(/%27/g,"'")};l.state=function(){return w};var O=[],J=!1,F=
null;l.onUrlChange=function(a){if(!J){if(d.history)z(b).on("popstate",f);z(b).on("hashchange",f);J=!0}O.push(a);return a};l.$$applicationDestroyed=function(){z(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=r.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;E++;c=q(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};l.defer.cancel=function(a){return t[a]?(delete t[a],s(a),e(v),!0):!1}}function Ve(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=q&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw G("$cacheFactory")("iid",b);var g=0,h=Q({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},q=null,s=null;return a[b]={put:function(a,b){if(!y(b)){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);
return b}},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==q&&(q=b.p);b==s&&(s=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};q=s=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return Q({},h,{size:g})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function qf(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function Cc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==I(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function s(a,f){Ta(a,"directive");H(a)?(d(a),pb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];n(e[a],function(e,g){try{var h=b.invoke(e);B(h)?h={compile:qa(h)}:!h.compile&&h.link&&(h.compile=qa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var l=h,k=h,s=h.name,m={isolateScope:null,bindToController:null};D(k.scope)&&(!0===k.bindToController?(m.bindToController=c(k.scope,s,!0),m.isolateScope={}):m.isolateScope=c(k.scope,s,!1));D(k.bindToController)&&(m.bindToController=c(k.bindToController,s,!0));if(D(m.bindToController)){var S=k.controller,E=k.controllerAs;if(!S)throw ea("noctrl",s);var ha;a:if(E&&H(E))ha=E;else{if(H(S)){var n=Vc.exec(S);if(n){ha=n[3];break a}}ha=void 0}if(!ha)throw ea("noident",
s);}var r=l.$$bindings=m;D(r.isolateScope)&&(h.$$isolateBindings=r.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(u){d(u)}});return f}])),e[a].push(f)):n(a,nc(s));return this};this.aHrefSanitizationWhitelist=function(b){return x(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return x(a)?
(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,w,p,A,r,M,O,J){function F(a,b){try{a.addClass(b)}catch(c){}}function V(a,b,c,d,e){a instanceof z||(a=z(a));n(a,function(b,c){b.nodeType==Pa&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);V.$$addScopeClass(a);var g=null;return function(b,c,d){pb(b,"scope");d=d||{};
var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?z(Xb(g,z("<div>").append(a).html())):c?Ra.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);V.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,s,t,O;if(p)for(O=Array(c.length),m=0;m<
h.length;m+=3)f=h[m],O[f]=c[f];else O=c;m=0;for(s=h.length;m<s;)if(k=O[h[m++]],c=h[m++],f=h[m++],c){if(c.scope){if(l=a.$new(),V.$$addScopeInfo(z(k),l),t=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",t)}else l=a;t=c.transcludeOnThisElement?P(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null;c(f,l,k,d,t,c)}else f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,s,p,t=0;t<a.length;t++){k=new aa;l=ha(a[t],[],k,0===t?d:u,e);(f=l.length?C(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&
V.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[t].childNodes)||!m.length?null:S(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(t,f,k),s=!0,p=p||f;f=null}return s?g:null}function P(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case pa:x(b,va(ta(a)),"E",d,e);for(var l,m,s,p=a.attributes,
t=0,O=p&&p.length;t<O;t++){var L=!1,J=!1;l=p[t];k=l.name;m=T(l.value);l=va(k);if(s=ia.test(l))k=k.replace(Xc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var S=l.replace(/(Start|End)$/,"");G(S)&&l===S+"Start"&&(L=k,J=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=va(k.toLowerCase());h[l]=k;if(s||!c.hasOwnProperty(l))c[l]=m,Qc(a,l)&&(c[l]=!0);X(a,b,m,l,s);x(b,l,"A",d,e,L,J)}a=a.className;D(a)&&(a=a.animVal);if(H(a)&&""!==a)for(;k=g.exec(a);)l=va(k[2]),x(b,l,"C",d,
e)&&(c[l]=T(k[3])),a=a.substr(k.index+k[0].length);break;case Pa:if(11===Va)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Pa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);wa(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=va(k[1]),x(b,l,"M",d,e)&&(c[l]=T(k[2]))}catch(E){}}b.sort(za);return b}function ya(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);a.nodeType==pa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&
e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function Wc(a,b,c){return function(d,e,f,g,h){e=ya(e[0],b,c);return a(d,e,f,g,h)}}function C(a,b,d,e,f,g,h,k,m){function s(a,b,c,d){if(a){c&&(a=Wc(a,c,d));a.require=C.require;a.directiveName=x;if(P===C||C.$$isolateScope)a=Z(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Wc(b,c,d));b.require=C.require;b.directiveName=x;if(P===C||C.$$isolateScope)b=Z(b,{isolateScope:!0});k.push(b)}}function t(a,b,c,d){var e;if(H(b)){var f=b.match(l);b=
b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=t(a,b[g],c,d);return e||null}function O(a,b,c,d,e,f){var g=ga(),h;for(h in d){var k=d[h],l={$scope:k===P||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=p(m,l,!0,k.controllerAs);g[k.name]=l;r||a.data("$"+k.name+
"Controller",l.instance)}return g}function L(a,c,e,f,g,l){function m(a,b,c){var d;$a(a)||(c=b,b=a,a=u);r&&(d=A);c||(c=r?ja.parent():ja);return g(a,b,d,c,ya)}var s,p,J,E,A,ha,ja;b===e?(f=d,ja=d.$$element):(ja=z(e),f=new aa(ja,d));P&&(E=c.$new(!0));g&&(ha=m,ha.$$boundTransclude=g);w&&(A=O(ja,f,ha,w,E,c));P&&(V.$$addScopeInfo(ja,E,!0,!(F&&(F===P||F===P.$$originalDirective))),V.$$addScopeClass(ja,!0),E.$$isolateBindings=P.$$isolateBindings,Y(c,f,E,E.$$isolateBindings,P,E));if(A){var n=P||S,M;n&&A[n.name]&&
(p=n.$$bindings.bindToController,(J=A[n.name])&&J.identifier&&p&&(M=J,l.$$destroyBindings=Y(c,f,J.instance,p,n)));for(s in A){J=A[s];var C=J();C!==J.instance&&(J.instance=C,ja.data("$"+s+"Controller",C),J===M&&(l.$$destroyBindings(),l.$$destroyBindings=Y(c,f,C,p,n)))}}s=0;for(l=h.length;s<l;s++)p=h[s],$(p,p.isolateScope?E:c,ja,f,p.require&&t(p.directiveName,p.require,ja,A),ha);var ya=c;P&&(P.template||null===P.templateUrl)&&(ya=E);a&&a(ya,e.childNodes,u,g);for(s=k.length-1;0<=s;s--)p=k[s],$(p,p.isolateScope?
E:c,ja,f,p.require&&t(p.directiveName,p.require,ja,A),ha)}m=m||{};for(var J=-Number.MAX_VALUE,S=m.newScopeDirective,w=m.controllerDirectives,P=m.newIsolateScopeDirective,F=m.templateDirective,A=m.nonTlbTranscludeDirective,n=!1,M=!1,r=m.hasElementTranscludeDirective,ba=d.$$element=z(b),C,x,v,y=e,za,wa=0,G=a.length;wa<G;wa++){C=a[wa];var Bb=C.$$start,I=C.$$end;Bb&&(ba=ya(b,Bb,I));v=u;if(J>C.priority)break;if(v=C.scope)C.templateUrl||(D(v)?(N("new/isolated scope",P||S,C,ba),P=C):N("new/isolated scope",
P,C,ba)),S=S||C;x=C.name;!C.templateUrl&&C.controller&&(v=C.controller,w=w||ga(),N("'"+x+"' controller",w[x],C,ba),w[x]=C);if(v=C.transclude)n=!0,C.$$tlb||(N("transclusion",A,C,ba),A=C),"element"==v?(r=!0,J=C.priority,v=ba,ba=d.$$element=z(W.createComment(" "+x+": "+d[x]+" ")),b=ba[0],U(f,xa.call(v,0),b),y=V(v,e,J,g&&g.name,{nonTlbTranscludeDirective:A})):(v=z(Ub(b)).contents(),ba.empty(),y=V(v,e));if(C.template)if(M=!0,N("template",F,C,ba),F=C,v=B(C.template)?C.template(ba,d):C.template,v=fa(v),
C.replace){g=C;v=Sb.test(v)?Yc(Xb(C.templateNamespace,T(v))):[];b=v[0];if(1!=v.length||b.nodeType!==pa)throw ea("tplrt",x,"");U(f,ba,b);G={$attr:{}};v=ha(b,[],G);var Q=a.splice(wa+1,a.length-(wa+1));P&&Zc(v);a=a.concat(v).concat(Q);$c(d,G);G=a.length}else ba.html(v);if(C.templateUrl)M=!0,N("template",F,C,ba),F=C,C.replace&&(g=C),L=Lf(a.splice(wa,a.length-wa),ba,d,f,n&&y,h,k,{controllerDirectives:w,newScopeDirective:S!==C&&S,newIsolateScopeDirective:P,templateDirective:F,nonTlbTranscludeDirective:A}),
G=a.length;else if(C.compile)try{za=C.compile(ba,d,y),B(za)?s(null,za,Bb,I):za&&s(za.pre,za.post,Bb,I)}catch(R){c(R,ua(ba))}C.terminal&&(L.terminal=!0,J=Math.max(J,C.priority))}L.scope=S&&!0===S.scope;L.transcludeOnThisElement=n;L.templateOnThisElement=M;L.transclude=y;m.hasElementTranscludeDirective=r;return L}function Zc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Nb(a[b],{$$isolateScope:!0})}function x(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=
0,t=d.length;p<t;p++)try{m=d[p],(g===u||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Nb(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(J){c(J)}}return h}function G(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function $c(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(F(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Lf(a,b,c,e,f,g,h,k){var l=[],m,s,p=b[0],t=a.shift(),J=Nb(t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),O=B(t.templateUrl)?t.templateUrl(b,c):t.templateUrl,E=t.templateNamespace;b.empty();d(O).then(function(d){var L,w;d=fa(d);if(t.replace){d=Sb.test(d)?Yc(Xb(E,T(d))):[];L=d[0];if(1!=d.length||L.nodeType!==
pa)throw ea("tplrt",t.name,O);d={$attr:{}};U(e,b,L);var A=ha(L,[],d);D(t.scope)&&Zc(A);a=A.concat(a);$c(c,d)}else L=p,b.html(d);a.unshift(J);m=C(a,L,c,f,b,t,g,h,k);n(e,function(a,c){a==L&&(e[c]=b[0])});for(s=S(b[0].childNodes,f);l.length;){d=l.shift();w=l.shift();var M=l.shift(),V=l.shift(),A=b[0];if(!d.$$destroyed){if(w!==p){var ya=w.className;k.hasElementTranscludeDirective&&t.replace||(A=Ub(L));U(M,z(w),A);F(z(A),ya)}w=m.transcludeOnThisElement?P(d,m.transclude,V):V;m(s,d,A,e,w,m)}}l=null});return function(a,
b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=P(b,m.transclude,e)),m(s,b,c,d,a,m)))}}function za(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function N(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function wa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&V.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||V.$$addBindingClass(e);V.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=I(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return M.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function X(a,c,d,e,
f){var g=R(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var m=h[e];m!==d&&(l=m&&b(m,!0,g,f),d=m);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,
f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);z.hasData(d)&&(z(c).data(z(d).data()),la?(Qb=!0,la.cleanData([d])):delete z.cache[d[z.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return Q(function(){return a.apply(null,
arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function Y(a,c,d,e,f,g){var h;n(e,function(e,g){var k=e.attrName,l=e.optional,m,s,p,L;switch(e.mode){case "@":l||Na.call(c,k)||(d[g]=c[k]=void 0);c.$observe(k,function(a){H(a)&&(d[g]=a)});c.$$observers[k].$$scope=a;H(c[k])&&(d[g]=b(c[k])(a));break;case "=":if(!Na.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;s=w(c[k]);L=s.literal?ka:function(a,b){return a===b||a!==a&&b!==b};p=s.assign||function(){m=d[g]=s(a);throw ea("nonassign",
c[k],f.name);};m=d[g]=s(a);l=function(b){L(b,d[g])||(L(b,m)?p(a,b=d[g]):d[g]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(w(c[k],l),null,s.literal);h=h||[];h.push(l);break;case "&":s=c.hasOwnProperty(k)?w(c[k]):v;if(s===v&&l)break;d[g]=function(b){return s(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var aa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};aa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Qc(f,a),h=Gf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=zc(a,"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=J(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var m=2*l,g=g+J(T(h[m]),!0),g=g+(" "+T(h[m+1]));h=T(h[2*l]).split(/\s/);g+=J(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
n(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);A.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){bb(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Za:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;V.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",
c)}:v;V.$$addBindingClass=m?function(a){F(a,"ng-binding")}:v;V.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;V.$$addScopeClass=m?function(a,b){F(a,b?"ng-isolate-scope":"ng-scope")}:v;return V}]}function va(b){return fb(b.replace(Xc,""))}function ad(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Yc(b){b=z(b);var a=b.length;
if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Mf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ta(a,"controller");D(a)?Q(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!D(a.$scope))throw G("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,m,q;h=!0===h;l&&H(l)&&(q=l);if(H(f)){l=f.match(Vc);if(!l)throw Nf("ctrlfmt",f);m=l[1];q=q||l[3];f=b.hasOwnProperty(m)?b[m]:Bc(g.$scope,
m,!0)||(a?Bc(d,m,!0):u);Sa(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),q&&e(g,q,k,m||f.name),Q(function(){var a=c.invoke(f,k,g,m);a!==k&&(D(a)||B(a))&&(k=a,q&&e(g,q,k,m||f.name));return k},{instance:k,identifier:q});k=c.instantiate(f,g,m);q&&e(g,q,k,m||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return z(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b){return D(b)?
ca(b)?b.toISOString():db(b):b}function df(){this.$get=function(){return function(b){if(!b)return"";var a=[];mc(b,function(b,d){null===b||y(b)||(K(b)?n(b,function(b,c){a.push(ma(d)+"="+ma(Yb(b)))}):a.push(ma(d)+"="+ma(Yb(b))))});return a.join("&")}}}function ef(){this.$get=function(){return function(b){function a(b,e,f){null===b||y(b)||(K(b)?n(b,function(b,c){a(b,e+"["+(D(b)?c:"")+"]")}):D(b)&&!ca(b)?mc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Yb(b))))}if(!b)return"";var c=
[];a(b,"",!0);return c.join("&")}}}function Zb(b,a){if(H(b)){var c=b.replace(Of,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(bd))||(d=(d=c.match(Pf))&&Qf[d[0]].test(c));d&&(b=uc(c))}}return b}function cd(b){var a=ga(),c;H(b)?n(b.split("\n"),function(b){c=b.indexOf(":");var e=I(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):D(b)&&n(b,function(b,c){var f=I(c),g=T(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function dd(b){var a;return function(c){a||(a=cd(b));return c?
(c=a[I(c)],void 0===c&&(c=null),c):a}}function ed(b,a,c,d){if(B(d))return d(b,a,c);n(d,function(d){b=d(b,a,c)});return b}function cf(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return D(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia($b),put:ia($b),patch:ia($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},
a=!1;this.useApplyAsync=function(b){return x(b)?(a=!!b,this):a};var c=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(c=!!a,this):c};var d=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,l,k){function m(a){function d(a){var b=Q({},a);b.data=a.data?ed(a.data,a.headers,a.status,f.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:l.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){B(a)?(c=a(b),null!=
c&&(d[e]=c)):d[e]=a});return d}if(!aa.isObject(a))throw G("$http")("badreq",a);var f=Q({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers=function(a){var c=b.headers,d=Q({},a.headers),f,g,h,c=Q({},c.common,c[I(a.method)]);a:for(f in c){g=I(f);for(h in d)if(I(h)===g)continue a;d[f]=c[f]}return e(d,ia(a))}(a);f.method=rb(f.method);f.paramSerializer=H(f.paramSerializer)?k.get(f.paramSerializer):f.paramSerializer;var g=
[function(a){var c=a.headers,e=ed(a.data,dd(c),u,a.transformRequest);y(e)&&n(c,function(a,b){"content-type"===I(b)&&delete c[b]});y(a.withCredentials)&&!y(b.withCredentials)&&(a.withCredentials=b.withCredentials);return q(a,e).then(d,d)},u],h=l.when(f);for(n(E,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var m=g.shift(),h=h.then(a,m)}c?(h.success=function(a){Sa(a,"fn");h.then(function(b){a(b.data,
b.status,b.headers,f)});return h},h.error=function(a){Sa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function q(c,d){function g(b,c,d,e){function f(){k(c,b,d,e)}F&&(200<=b&&300>b?F.put(P,[b,c,cd(d),e]):F.remove(P));a?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function k(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function q(a){k(a.data,a.status,
ia(a.headers()),a.statusText)}function E(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var O=l.defer(),J=O.promise,F,n,S=c.headers,P=s(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);J.then(E,E);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=D(c.cache)?c.cache:D(b.cache)?b.cache:t);F&&(n=F.get(P),x(n)?n&&B(n.then)?n.then(q,q):K(n)?k(n[1],n[0],ia(n[2]),n[3]):k(n,200,{},"OK"):F.put(P,J));y(n)&&((n=gd(c.url)?f()[c.xsrfCookieName||
b.xsrfCookieName]:u)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=n),e(c.method,P,d,g,S,c.timeout,c.withCredentials,c.responseType));return J}function s(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var t=g("$http");b.paramSerializer=H(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var E=[];n(d,function(a){E.unshift(H(a)?k.get(a):k.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,function(a){m[a]=function(b,c){return m(Q({},c||{},{method:a,url:b}))}})})("get","delete",
"head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=b;return m}]}function Rf(){return new N.XMLHttpRequest}function ff(){this.$get=["$browser","$window","$document",function(b,a,c){return Sf(b,Rf,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",
m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,q,s,t){function E(){p&&p();A&&A.abort()}function L(a,d,e,f,g){M!==u&&c.cancel(M);p=A=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==
I(e)){var w="_"+(d.counter++).toString(36);d[w]=function(a){d[w].data=a;d[w].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+w),w,function(a,b){L(k,a,d[w].data,"",b);d[w]=v})}else{var A=a();A.open(e,h,!0);n(m,function(a,b){x(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);L(k,c,b,A.getAllResponseHeaders(),a)};e=function(){L(k,-1,null,null,
"")};A.onerror=e;A.onabort=e;s&&(A.withCredentials=!0);if(t)try{A.responseType=t}catch(r){if("json"!==t)throw r;}A.send(l)}if(0<q)var M=c(E,q);else q&&B(q.then)&&q.then(E)}}function af(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,b).replace(q,a)}function h(f,h,m,q){function w(a){try{var b=a;a=m?e.getTrusted(m,
b):e.valueOf(b);var c;if(q&&!x(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}q=!!q;for(var p,n,r=0,M=[],O=[],J=f.length,F=[],V=[];r<J;)if(-1!=(p=f.indexOf(b,r))&&-1!=(n=f.indexOf(a,p+l)))r!==p&&F.push(g(f.substring(r,p))),r=f.substring(p+l,n),M.push(r),O.push(c(r,w)),r=n+k,V.push(F.length),F.push("");else{r!==J&&F.push(g(f.substring(r)));break}m&&1<F.length&&Ka.throwNoconcat(f);if(!h||M.length){var S=
function(a){for(var b=0,c=M.length;b<c;b++){if(q&&y(a[b]))return;F[V[b]]=a[b]}return F.join("")};return Q(function(a){var b=0,c=M.length,e=Array(c);try{for(;b<c;b++)e[b]=O[b](a);return S(e)}catch(g){d(Ka.interr(f,g))}},{exp:f,expressions:M,$$watchDelegate:function(a,b){var c;return a.$watchGroup(O,function(d,e){var f=S(d);B(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,m=new RegExp(b.replace(/./g,f),"g"),q=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=
function(){return a};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=4<arguments.length,q=m?xa.call(arguments,4):[],s=a.setInterval,t=a.clearInterval,E=0,L=x(k)&&!k,w=(L?d:c).defer(),p=w.promise;l=x(l)?l:0;p.then(null,null,m?function(){e.apply(null,q)}:e);p.$$intervalId=s(function(){w.notify(E++);0<l&&E>=l&&(w.resolve(E),t(p.$$intervalId),delete f[p.$$intervalId]);L||b.$apply()},h);f[p.$$intervalId]=w;return p}var f={};e.cancel=function(b){return b&&
b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function hd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Y(c.port)||Tf[c.protocol]||null}function id(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=
xc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Cb(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b,a,c){this.$$html5=!0;c=c||"";hd(b,this);this.$$parse=function(b){var c=ra(a,b);if(!H(c))throw Db("ipthprfx",b,a);id(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=
Pb(this.$$search),c=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ra(b,d))!==u?(g=f,g=(f=ra(c,f))!==u?a+(ra("/",f)||f):b+g):(f=ra(a,d))!==u?g=a+f:a==d+"/"&&(g=a);g&&this.$$parse(g);return!!g}}function cc(b,a,c){hd(b,this);this.$$parse=function(d){var e=ra(b,d)||ra(a,d),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(b=d,this.replace())):
(f=ra(c,e),y(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,a,c){this.$$html5=!0;cc.apply(this,arguments);this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ra(a,d))?f=b+c+g:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Eb(b){return function(){return this[b]}}function kd(b,a){return function(c){if(y(c))return this[b];this[b]=a(c);this.$$compose();return this}}function gf(){var b="",a={enabled:!1,requireBase:!0,
rewriteLinks:!0};this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return ab(b)?(a.enabled=b,this):D(b)?(ab(b.enabled)&&(a.enabled=b.enabled),ab(b.requireBase)&&(a.requireBase=b.requireBase),ab(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,
b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var q=d.url(),s;if(a.enabled){if(!m&&a.requireBase)throw Db("nobase");s=q.substring(0,q.indexOf("/",q.indexOf("//")+2))+(m||"/");m=e.history?bc:jd}else s=Ja(q),m=cc;var t=s.substr(0,Ja(s).lastIndexOf("/")+1);k=new m(s,t,"#"+b);k.$$parseLinkUrl(q,q);k.$$state=d.state();var E=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=
z(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);E.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Cb(k.absUrl())!=Cb(q)&&d.url(k.absUrl(),!0);var L=!0;d.onUrlChange(function(a,b){y(ra(t,a))?g.location.href=a:(c.$evalAsync(function(){var d=
k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(L=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),g=k.$$replace,m=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(L||m)L=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=
f):(m&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function hf(){var b=!0,a=this;this.debugEnabled=function(a){return x(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=
[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Wa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw da("isecfld",a);return b}function Ba(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b.window===b)throw da("isecwindow",
a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw da("isecdom",a);if(b===Object)throw da("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw da("isecff",a);}}function Xf(b,a){return"undefined"!==typeof b?b:a}function md(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case r.Program:c=!0;n(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=
c;break;case r.Literal:b.constant=!0;b.toWatch=[];break;case r.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case r.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case r.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case r.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,
a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case r.Identifier:b.constant=!1;b.toWatch=[b];break;case r.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case r.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];n(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&
!a(b.callee.name).$stateful?d:[b];break;case r.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case r.ArrayExpression:c=!0;d=[];n(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case r.ObjectExpression:c=!0;d=[];n(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case r.ThisExpression:b.constant=
!1,b.toWatch=[]}}function nd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:u}}function od(b){return b.type===r.Identifier||b.type===r.MemberExpression}function pd(b){if(1===b.body.length&&od(b.body[0].expression))return{type:r.AssignmentExpression,left:b.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function qd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===r.Literal||b.body[0].expression.type===r.ArrayExpression||
b.body[0].expression.type===r.ObjectExpression)}function rd(b,a){this.astBuilder=b;this.$filter=a}function sd(b,a){this.astBuilder=b;this.$filter=a}function Fb(b){return"constructor"==b}function dc(b){return B(b.valueOf)?b.valueOf():Yf.call(b)}function jf(){var b=ga(),a=ga();this.$get=["$filter",function(c){function d(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,c,e,f){var g=e.inputs,h;if(1===g.length){var k=d,g=g[0];return a.$watch(function(a){var b=
g(a);d(b,k)||(h=e(a,u,u,[b]),k=b&&dc(b));return h},b,c,f)}for(var l=[],m=[],q=0,n=g.length;q<n;q++)l[q]=d,m[q]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!d(k,l[c])))m[c]=k,l[c]=k&&dc(k)}b&&(h=e(a,u,u,m));return h},b,c,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;B(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){x(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;B(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){B(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==g&&c!==f?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,c.inputs=a.inputs?a.inputs:[a]);return c}var k=Fa().noUnsafeEval,m={csp:k,expensiveChecks:!1},q={csp:k,expensiveChecks:!0};return function(d,k,E){var n,w,p;switch(typeof d){case "string":p=d=d.trim();var r=E?a:b;n=r[p];n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),E=E?q:m,n=new ec(E),n=(new fc(n,c,E)).parse(d),n.constant?n.$$watchDelegate=h:w?n.$$watchDelegate=n.literal?g:f:n.inputs&&(n.$$watchDelegate=e),
r[p]=n);return l(n,k);case "function":return l(d,k);default:return v}}}]}function lf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return td(function(a){b.$evalAsync(a)},a)}]}function mf(){this.$get=["$browser","$exceptionHandler",function(b,a){return td(function(a){b.defer(a)},a)}]}function td(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}
function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{B(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=G("$q",TypeError);Q(d.prototype,{then:function(a,b,c){if(y(a)&&
y(b)&&y(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});Q(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,
this.$$reject);try{if(D(b)||B(b))d=b&&b.then;B(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,
e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(B(b)?b(c):c)}catch(h){a(h)}}})}});var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return l(e,!1)}return d&&B(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function t(a){if(!B(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;
a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;b.reject(a);return b.promise};q.when=m;q.resolve=m;q.all=function(a){var b=new g,c=0,d=K(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function vf(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||
b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function kf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;
return b}var a=10,c=G("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function m(){this.$id=++mb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=
null}function q(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function s(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function L(){for(;M.length;)try{M.shift()()}catch(a){g(a)}e=null}function w(){null===e&&(e=l.defer(function(){p.$apply(L)}))}m.prototype={constructor:m,$new:function(a,c){var d;c=c||this;a?(d=new m,d.$root=this.$root):(this.$$ChildScope||
(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,k=g.$$watchers,l={fn:b,last:r,get:f,exp:e||a,eq:!!c};d=null;B(b)||(l.fn=v);k||(k=g.$$watchers=[]);k.unshift(l);s(this,1);return function(){0<=bb(k,l)&&s(g,-1);d=null}},
$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=
a;var b,d,g,h;if(!y(e)){if(D(e))if(Da(e))for(f!==q&&(f=q,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==s&&(f=s={},t=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,m=h(a,c),q=[],s={},p=!0,t=0;return this.$watch(m,
function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(D(e))if(Da(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Na.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,m,s,t=a,n,w=[],C,M;q("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),L());d=null;do{s=!1;for(n=this;u.length;){try{M=u.shift(),M.scope.$eval(M.expression,M.locals)}catch(v){g(v)}d=null}a:do{if(k=n.$$watchers)for(m=k.length;m--;)try{if(b=k[m])if((f=b.get(n))!==(h=b.last)&&
!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))s=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===r?f:h,n),5>t&&(C=4-t,w[C]||(w[C]=[]),w[C].push({msg:B(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){s=!1;break a}}catch(y){g(y)}if(!(k=n.$$watchersCount&&n.$$childHead||n!==this&&n.$$nextSibling))for(;n!==this&&!(k=n.$$nextSibling);)n=n.$parent}while(n=k);if((s||u.length)&&!t--)throw p.$$phase=null,c("infdig",a,w);}while(s||u.length);for(p.$$phase=
null;x.length;)try{x.shift()()}catch(z){g(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();s(this,-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&
(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||u.length||l.defer(function(){u.length&&p.$digest()});u.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){x.push(a)},
$apply:function(a){try{q("$apply");try{return this.$eval(a)}finally{p.$$phase=null}}catch(b){g(b)}finally{try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&M.push(b);w()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(q){g(q)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new m,u=p.$$asyncQueue=[],x=p.$$postDigestQueue=[],M=p.$$applyAsyncQueue=[];return p}]}function ge(){var b=
/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Zf(b){if("self"===b)return b;if(H(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=ud(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+
b+"$")}if(Oa(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function vd(b){var a=[];x(b)&&n(b,function(b){a.push(Zf(b))});return a}function of(){this.SCE_CONTEXTS=oa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=vd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===
u||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===oa.RESOURCE_URL){var g=Aa(e.toString()),q,s,t=!1;q=0;for(s=b.length;q<s;q++)if(d(b[q],g)){t=!0;break}if(t)for(q=0,s=a.length;q<s;q++)if(d(a[q],g)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function nf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Va)throw Ca("iequirks");var d=ia(oa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Za);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,
f=d.getTrusted,g=d.trustAs;n(oa,function(a,b){var c=I(b);d[fb("parse_as_"+c)]=function(b){return e(a,b)};d[fb("get_trusted_"+c)]=function(b){return f(a,b)};d[fb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function pf(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(I((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var q in l)if(k=
h.exec(q)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=H(l.webkitTransition),m=H(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Va)return!1;if(y(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Fa(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function rf(){this.$get=
["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;H(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;K(h)?h=h.filter(function(a){return a!==Zb}):h===Zb&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,a.data);return a.data},function(a){if(!g)throw ea("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;
return e}]}function sf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var d=aa.element(a).data("$binding");d&&n(d,function(d){c?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');
if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function tf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){B(f)||(k=l,l=f,f=v);var m=xa.call(arguments,3),q=x(k)&&!k,s=(q?d:c).defer(),t=s.promise,n;n=a.defer(function(){try{s.resolve(f.apply(null,m))}catch(a){s.reject(a),e(a)}finally{delete g[t.$$timeoutId]}q||
b.$apply()},l);t.$$timeoutId=n;g[n]=s;return t}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Va&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===
Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function gd(b){b=H(b)?Aa(b):b;return b.protocol===wd.protocol&&b.host===wd.host}function uf(){this.$get=qa(N)}function xd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===u&&(d[k]=a(g.substring(l+1))));return d}}function yf(){this.$get=xd}function Jc(b){function a(c,
d){if(D(c)){var e={};n(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",yd);a("date",zd);a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Ad);a("orderBy",Bd);a("uppercase",dg)}function $f(){return function(b,a,c){if(!Da(b)){if(null==b)return b;throw G("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=
!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=D(b)&&"$"in b;!0===a?a=ka:B(a)||(a=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!pc(a))return!1;a=I(""+a);b=I(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!D(e)?La(e,b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=gc(b),g=gc(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(K(b))return b.some(function(b){return La(b,
a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!B(e)&&!y(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function gc(b){return null===b?"null":typeof b}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){y(d)&&(d=a.CURRENCY_SYM);y(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Cd(b,a.PATTERNS[1],a.GROUP_SEP,
a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Cd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Cd(b,a,c,d,e){if(D(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,m=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var q=h.match(/([\d\.]+)e(-?)(\d+)/);q&&"-"==q[2]&&q[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Dd)[1]||"").length;
y(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Dd),h=g[0],g=g[1]||"",q=0,s=a.lgSize,t=a.gSize;if(h.length>=s+t)for(q=h.length-s,k=0;k<q;k++)0===(q-k)%t&&0!==k&&(l+=c),l+=h.charAt(k);for(k=q;k<h.length;k++)0===(h.length-k)%s&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);m.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return m.join("")}function Gb(b,a,c){var d="";
0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-
+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function hc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function zd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),g=Y(b[9]+b[11]));h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;g=Y(b[5]||0)-g;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;H(c)&&(c=fg.test(c)?Y(c):a(c));X(c)&&(c=new Date(c));if(!ca(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(h=cb(h,k,1),e=h.pop()):(h.push(e),e=null);var m=c.getTimezoneOffset();f&&(m=vc(f,c.getTimezoneOffset()),c=Ob(c,f,!0));n(h,function(a){l=hg[a];g+=l?l(c,b.DATETIME_FORMATS,m):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ag(){return function(b,a){y(a)&&(a=2);return db(b,a)}}function bg(){return function(b,
a,c){a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;X(b)&&(b=b.toString());if(!K(b)&&!H(b))return b;c=!c||isNaN(c)?0:Y(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function Bd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=Za;if(B(a))h=a;else if(H(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,
descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(b,e,f){if(!Da(b))return b;K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=a(e,f);g.push({get:function(){return{}},descending:f?-1:1});b=Array.prototype.map.call(b,function(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&
(e=e.valueOf(),c(e)))break a;if(pc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],t=0;c.type===f.type?c.value!==f.value&&(t=c.value<f.value?-1:1):t=c.type<f.type?-1:1;if(c=t*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){B(b)&&(b={link:b});b.restrict=b.restrict||"AC";return qa(b)}function Gd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=
b.parent().controller("form")||Ib;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ta(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=
b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});bb(g,a)};Hd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Xa);d.addClass(b,Jb);
f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Xa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=I(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",
function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",
m)}a.on("change",l);d.$render=function(){var b=d.$isEmpty(d.$viewValue)?"":d.$viewValue;a.val()!==b&&a.val(b)}}function Kb(b,a){return function(c,d){var e,f;if(ca(c))return c;if(H(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,
mm:0,ss:0,sss:0},n(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,m){function q(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return x(a)?ca(a)?a:c(a):u}Id(e,f,g,h);ib(e,f,g,h,l,k);var t=h&&h.$options&&h.$options.timezone,n;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,n),t&&(b=Ob(b,t)),b):u});h.$formatters.push(function(a){if(a&&
!ca(a))throw kb("datefmt",a);if(q(a))return(n=a)&&t&&(n=Ob(n,t,!0)),m("date")(a,d,t);n=null;return""});if(x(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!q(a)||y(r)||c(a)>=r};g.$observe("min",function(a){r=s(a);h.$validate()})}if(x(g.max)||g.ngMax){var w;h.$validators.max=function(a){return!q(a)||y(w)||c(a)<=w};g.$observe("max",function(a){w=s(a);h.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=D(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};
return c.badInput&&!c.typeMismatch?u:b})}function Jd(b,a,c,d,e){if(x(d)){b=b(d);if(!b.constant)throw kb("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(n(a,function(a){b=b.concat(e(a))}),b):H(a)?a.split(" "):D(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var n=l(k,1);h.$addClass(n)}else if(!ka(b,m)){var r=e(m),n=d(k,r),k=d(r,k),n=l(n,1),k=l(k,-1);n&&n.length&&c.addClass(g,n);k&&k.length&&c.removeClass(g,k)}}m=ia(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==
b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+zc(b,"-"):"";a(lb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Kd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,
b,f)):(d.$pending&&h(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=u));ab(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=d.$invalid=u,c("",null)):(a(Md,!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,
I=function(b){return H(b)?b.toLowerCase():b},Na=Object.prototype.hasOwnProperty,rb=function(b){return H(b)?b.toUpperCase():b},Va,z,la,xa=[].slice,Mf=[].splice,kg=[].push,sa=Object.prototype.toString,qc=Object.getPrototypeOf,Ea=G("ng"),aa=N.angular||(N.angular={}),Rb,mb=0;Va=W.documentMode;v.$inject=[];Za.$inject=[];var K=Array.isArray,sc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return H(b)?b.trim():b},ud=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var b=W.querySelector("[ng-csp]")||W.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!a||-1!==a.indexOf("no-unsafe-eval"),noInlineStyle:!a||-1!==a.indexOf("no-inline-style")}}else{b=Fa;try{new Function(""),a=!1}catch(c){a=!0}b.rules={noUnsafeEval:a,noInlineStyle:!1}}}return Fa.rules},ob=function(){if(x(ob.name_))return ob.name_;var b,a,c=Qa.length,d,e;for(a=0;a<
c;++a)if(d=Qa[a],b=W.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return ob.name_=e},Qa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Qb,pa=1,Pa=3,fe={full:"1.4.5",major:1,minor:4,dot:5,codeName:"permanent-internship"};R.expando="ng339";var gb=R.cache={},Ef=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var zf=/([\:\-\_]+(.))/g,Af=/^moz([A-Z])/,lg={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=G("jqLite"),Df=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,
Bf=/<([\w:]+)/,Cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;na.th=na.td;var Ra=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=
!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(N).on("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Ab={};n("multiple selected checked disabled readOnly required open".split(" "),function(b){Ab[I(b)]=b});var Rc={};n("input select option textarea button form details".split(" "),function(b){Rc[b]=!0});var Sc=
{ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Vb,removeData:ub,hasData:function(b){for(var a in gb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});n({data:Vb,inheritedData:zb,scope:function(b){return z.data(b,"$scope")||zb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z.data(b,"$isolateScope")||z.data(b,"$isolateScopeNoTemplate")},controller:Oc,injector:function(b){return zb(b,"$injector")},removeAttr:function(b,
a){b.removeAttribute(a)},hasClass:wb,css:function(b,a,c){a=fb(a);if(x(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Pa&&2!==d&&8!==d)if(d=I(a),Ab[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:u;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:function(){function b(a,
b){if(y(b)){var d=a.nodeType;return d===pa||d===Pa?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(y(a)){if(b.multiple&&"select"===ta(b)){var c=[];n(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(y(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Pc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Pc&&(2==b.length&&b!==wb&&b!==Oc?a:d)===u){if(D(a)){for(e=0;e<
g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});n({removeData:ub,on:function a(c,d,e,f){if(x(f))throw Tb("onargs");if(Kc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Hf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,lg[d],function(a){var c=
a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Nc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);n(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===pa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||
[]},append:function(a,c){var d=a.nodeType;if(d===pa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===pa){var d=a.firstChild;n(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=z(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Wb,detach:function(a){Wb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);
d=h}},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){c&&n(c.split(" "),function(c){var f=d;y(f)&&(f=!wb(a,c));(f?yb:xb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===
this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=Q(e,c)),c=ia(h),f=d?[e].concat(d):[e],n(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)y(g)?(g=a(this[h],c,e,f),x(g)&&(g=z(g))):Mc(g,a(this[h],c,e,f));return x(g)?g:this};R.prototype.bind=
R.prototype.on;R.prototype.unbind=R.prototype.off});Ua.prototype={put:function(a,c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var xf=[function(){this.$get=[function(){return Ua}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=G("$injector");eb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw H(d)&&
d||(d=a.name||If(a)),Ha("strictdi",d);c=a.toString().replace(Tc,"");c=c.match(Uc);n(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else K(a)?(c=a.length-1,Sa(a[c],"fn"),e=a.slice(0,c)):Sa(a,"fn",!0);return e};var Nd=G("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Te=function(){var a=
new Ua,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));d=function(a,c){var d=!1;a&&(a=H(a)?a.split(" "):K(a)?a:[],n(a,function(a){a&&(d=!0,k[a]=c)}));return d};f=d(f,!0);l=d(l,!1);!f&&!l||1<c.length||e.$$postDigest(function(){n(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr("class")),f="",g="";n(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});n(c,function(a){f&&yb(a,f);g&&xb(a,g)});a.remove(c)}});
c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Re=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=
g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ia(l))},move:function(f,g,h,l){g=g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ia(l))},leave:function(c,e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=hb(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=hb(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=hb(l.addClass,
e);l.removeClass=hb(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?Q(k.from,e):e;k.to=k.to?Q(k.to,h):h;k.tempClasses=hb(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,c){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=
c.defer());return this.defer.promise},then:function(a,c){return this.getPromise().then(a,c)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}};return function(c,f){function g(){a(function(){f.addClass&&(c.addClass(f.addClass),f.addClass=null);f.removeClass&&(c.removeClass(f.removeClass),f.removeClass=null);f.to&&(c.css(f.to),f.to=null);h||l.done();h=!0});return l}f.from&&(c.css(f.from),f.from=null);var h,l=new d;return{start:g,
end:g}}}]},ea=G("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Xc=/^((?:x|data)[\:\-_])/i,Nf=G("$controller"),Vc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(c){c?!c.nodeType&&c instanceof z&&(c=c[0]):c=a[0].body;return c.offsetWidth+1}}]},bd="application/json",$b={"Content-Type":bd+";charset=utf-8"},Pf=/^\[|^\{(?!\{)/,Qf={"[":/]$/,"{":/}$/},Of=/^\)\]\}',?\n/,og=G("$http"),fd=function(a){return function(){throw og("legacy",a);}},Ka=aa.$interpolateMinErr=
G("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var pg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Db=G("$location"),qg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var c=pg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Eb("$$protocol"),host:Eb("$$host"),
port:Eb("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(H(a)||X(a))a=a.toString(),this.$$search=xc(a);else if(D(a))a=fa(a,{}),n(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Db("isrcharg");break;default:y(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():
""}),replace:function(){this.$$replace=!0;return this}};n([jd,cc,bc],function(a){a.prototype=Object.create(qg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==bc||!this.$$html5)throw Db("nostate");this.$$state=y(c)?null:c;return this}});var da=G("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Lb=ga();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var rg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v",
"'":"'",'"':'"'},ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+
this.peek(),d=c+this.peek(2),e=Lb[c],f=Lb[d];Lb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===
a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=x(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=I(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&
this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,
value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var r=function(a,c){this.lexer=a;this.options=c};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal=
"Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,
body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?
(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,
operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:c.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:r.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:r.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},
throwError:function(a,c){throw da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw da("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];
var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:r.Literal,value:!0},"false":{type:r.Literal,value:!1},"null":{type:r.Literal,value:null},undefined:{type:r.Literal,value:u},"this":{type:r.ThisExpression}}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=pd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=nd(e.body);d.stage="inputs";n(g,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+
"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Wa,Ba,ld,Xf,md,a);this.state=this.stage=u;f.literal=qd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;n(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},
generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;n(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,m,q;e=e||v;if(!g&&x(a.watchId))c=c||this.nextId(),this.if_("i",
this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case r.Program:n(a.body,function(c,d){k.recurse(c.expression,u,u,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case r.Literal:q=this.escape(a.value);this.assign(c,q);e(q);break;case r.UnaryExpression:this.recurse(a.argument,u,u,function(a){l=a});q=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,q);e(q);break;case r.BinaryExpression:this.recurse(a.left,
u,u,function(a){h=a});this.recurse(a.right,u,u,function(a){l=a});q="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,q);e(q);break;case r.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case r.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);
break;case r.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Wa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",
a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case r.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,u,function(){k.if_(k.notNull(h),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),q=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,q),d&&(d.computed=!0,d.name=l);else{Wa(a.property.name);
f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));q=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))q=k.ensureSafeObject(q);k.assign(c,q);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case r.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),m=[],n(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);m.push(c)}),q=l+
"("+m.join(",")+")",k.assign(c,q),e(c)):(l=k.nextId(),h={},m=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){m.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),q=k.member(h.context,h.name,h.computed)+"("+m.join(",")+")"):q=l+"("+m.join(",")+")";q=k.ensureSafeObject(q);k.assign(c,q)},function(){k.assign(c,"undefined")});e(c)}));break;case r.AssignmentExpression:l=
this.nextId();h={};if(!od(a.left))throw da("lval");this.recurse(a.left,u,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));q=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,q);e(c||q)})},1);break;case r.ArrayExpression:m=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){m.push(a)})});q="["+m.join(",")+"]";this.assign(c,q);e(q);break;case r.ObjectExpression:m=[];n(a.properties,function(a){k.recurse(a.value,
k.nextId(),u,function(c){m.push(k.escape(a.key.type===r.Identifier?a.key.name:""+a.key.value)+":"+c)})});q="{"+m.join(",")+"}";this.assign(c,q);e(q);break;case r.ThisExpression:this.assign(c,"s");e("s");break;case r.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||
(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+
"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+
a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(H(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(X(a))return a.toString();if(!0===a)return"true";
if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw da("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=pd(e))g=this.recurse(f);f=nd(e.body);var h;f&&(h=[],n(f,function(a,c){var e=d.recurse(a);
a.input=e;h.push(e);a.watchId=c}));var l=[];n(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;n(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=h);f.literal=qd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,c);case r.UnaryExpression:return f=
this.recurse(a.argument),this["unary"+a.operator](f,c);case r.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case r.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case r.Identifier:return Wa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),
c,d,g.expression);case r.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Wa(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,g.expensiveChecks,c,d,g.expression);case r.CallExpression:return h=[],n(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var n=
[],t=0;t<h.length;++t)n.push(h[t](a,d,e,g));a=f.apply(u,n,g);return c?{context:u,name:u,value:a}:a}:function(a,d,e,q){var n=f(a,d,e,q),t;if(null!=n.value){Ba(n.context,g.expression);ld(n.value,g.expression);t=[];for(var r=0;r<h.length;++r)t.push(Ba(h[r](a,d,e,q),g.expression));t=Ba(n.value.apply(n.context,t),g.expression)}return c?{value:t}:t};case r.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,q){var n=e(a,d,h,q);a=f(a,d,h,q);Ba(n.value,g.expression);
n.context[n.name]=a;return c?{value:a}:a};case r.ArrayExpression:return h=[],n(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],n=0;n<h.length;++n)g.push(h[n](a,d,e,f));return c?{value:g}:g};case r.ObjectExpression:return h=[],n(a.properties,function(a){h.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},n=0;n<h.length;++n)g[h[n].key]=h[n].value(a,d,e,f);return c?{value:g}:g};case r.ThisExpression:return function(a){return c?
{value:a}:a};case r.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=x(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=x(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=md(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,
f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(x(l)?l:0)-(x(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,
c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?
{context:u,name:u,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:u;c&&Ba(h,f);return d?{context:g,name:a,value:h}:h}},computedMember:function(a,c,d,e,f){return function(g,h,l,k){var m=a(g,h,l,k),q,n;null!=m&&(q=c(g,h,l,k),Wa(q,f),e&&1!==e&&m&&!m[q]&&(m[q]={}),n=m[q],Ba(n,f));return d?{context:m,name:q,value:n}:n}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,m){h=a(h,l,k,m);f&&1!==f&&h&&!h[c]&&(h[c]={});
l=null!=h?h[c]:u;(d||Fb(c))&&Ba(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var fc=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d;this.ast=new r(this.lexer);this.astCompiler=d.csp?new sd(this.ast,c):new rd(this.ast,c)};fc.prototype={constructor:fc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Yf=Object.prototype.valueOf,Ca=G("$sce"),oa={HTML:"html",CSS:"css",URL:"url",
RESOURCE_URL:"resourceUrl",JS:"js"},ea=G("$compile"),Z=W.createElement("a"),wd=Aa(N.location.href);xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var Dd=".",hg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",
1),sss:$("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:hc,GG:hc,GGG:hc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;zd.$inject=["$locale"];var cg=qa(I),dg=qa(rb);Bd.$inject=
["$parse"];var he=qa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===sa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),sb={};n(Ab,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=va("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});sb[e]=function(){return{restrict:"A",
priority:100,link:f}}}});n(Sc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});n(["src","srcset","href"],function(a){var c=va("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Va&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout","$parse",function(c,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",controller:Gd,compile:function(d,
g){d.addClass(Xa).addClass(lb);var h=g.name?"name":a&&g.ngForm?"ngForm":!1;return{pre:function(a,d,f,g){if(!("action"in f)){var n=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var t=g.$$parentForm,r=h?e(g.$name):v;h&&(r(a,g),f.$observe(h,function(c){g.$name!==c&&(r(a,u),t.$$renameControl(g,c),r=e(g.$name),r(a,g))}));d.on("$destroy",
function(){t.$removeControl(g);r(a,u);Q(g,Ib)})}}}}}]},ie=Od(),ve=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,sg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,tg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,
Rd=/^(\d{4})-(\d\d)$/,Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e)},date:jb("date",Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Qd,Kb(Qd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",kc,function(a,c){if(ca(a))return a;if(H(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Ed(e),f=7*(f-1);
c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Id(a,c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!X(a))throw kb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var h;e.$validators.min=
function(a){return e.$isEmpty(a)||y(h)||a>=h};d.$observe("min",function(a){x(a)&&!X(a)&&(a=parseFloat(a,10));h=X(a)&&!isNaN(a)?a:u;e.$validate()})}if(x(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||y(l)||a<=l};d.$observe("max",function(a){x(a)&&!X(a)&&(a=parseFloat(a,10));l=X(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,
c,d,e,f,g){ib(a,c,d,e,f,g);ic(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,d,e){y(d.name)&&c.attr("name",++mb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),m=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,
a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:v,button:v,submit:v,reset:v,file:v},Dc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Td[I(h.type)]||Td.text)(f,g,h,l[0],c,a,d,e)}}}}],vg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,
c){return vg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Me=qa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
qe=jc("",!0),se=jc("Odd",0),re=jc("Even",1),te=Ma({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},wg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);Ic[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
qb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:aa.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,n,s,r){var u=0,v,w,p,A=function(){w&&(w.remove(),w=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){w=null}),w=p,p=null)};e.$watch(g,function(g){var n=function(){!x(l)||l&&!e.$eval(l)||
c()},q=++u;g?(a(g,!0).then(function(a){if(q===u){var c=e.$new();s.template=a;a=r(c,function(a){A();d.enter(a,null,f).then(n)});v=c;p=a;v.$emit("$includeContentLoaded",g);e.$eval(h)}},function(){q===u&&(A(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(A(),s.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(f.template,W).childNodes)(c,function(a){d.append(a)},
{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!y(a)){var c=[];a&&n(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return K(a)?a.join(f):u});e.$isEmpty=function(a){return!a||
!a.length}}}},lb="ng-valid",Kd="ng-invalid",Xa="ng-pristine",Jb="ng-dirty",Md="ng-pending",kb=G("ngModel"),xg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);var q=f(d.ngModel),s=q.assign,r=q,E=s,L=null,w,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");r=function(a){var d=q(a);B(d)&&(d=c(a));return d};E=function(a,c){B(q(a))?g(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!q.assign)throw kb("nonassign",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return y(a)||
""===a||null===a||a!==a};var A=e.inheritedData("$formController")||Ib,z=0;Hd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:A,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Xa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Xa);g.addClass(e,Jb);A.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=
function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(L);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!X(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:u,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d){function e(){var d=!0;n(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(n(p.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;n(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!B(k.then))throw kb("$asyncValidators",k);g(h,u);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===z&&p.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=
p.$$parserName||"parse";if(w===u)g(a,null);else return w||(n(p.$validators,function(a,c){g(c,null)}),n(p.$asyncValidators,function(a,c){g(c,null)})),g(a,w),w;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(L);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(w=y(c)?u:!0)for(var d=
0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),y(c)){w=!1;break}X(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=r(a));var e=p.$modelValue,f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:u,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){E(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&x(e.debounce)&&(e=e.debounce,X(e)?d=e:X(e[c])?d=e[c]:X(e["default"])&&(d=e["default"]));h.cancel(L);d?L=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=r(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=
p.$$rawModelValue=c;w=u;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(c,f,v))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:xg,priority:1,compile:function(c){c.addClass(Xa).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",
function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],yg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));
this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(yg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Ma({terminal:!0,priority:1E3}),zg=G("ngOptions"),Ag=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}function m(a){var c;if(!r&&Da(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var n=a.match(Ag);if(!n)throw zg("iexp",a,ua(d));var s=n[5]||n[7],r=n[6];a=/ as /.test(n[0])&&n[1];var u=n[9];d=c(n[2]?n[1]:s);var v=a&&c(a)||d,w=u&&c(u),p=u?function(a,c){return w(e,c)}:function(a){return Ga(a)},A=function(a,
c){return p(a,B(a,c))},x=c(n[2]||n[1]),z=c(n[3]||""),y=c(n[4]||""),J=c(n[8]),F={},B=r?function(a,c){F[r]=c;F[s]=a;return F}:function(a){F[s]=a;return F};return{trackBy:u,getTrackByValue:A,getWatchables:c(J,function(a){var c=[];a=a||[];for(var d=m(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=B(a[h],h),h=p(a[h],k);c.push(h);if(n[2]||n[1])h=x(e,k),c.push(h);n[4]&&(k=y(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=J(e)||[],g=m(d),h=g.length,n=0;n<h;n++){var q=d===g?n:g[n],s=
B(d[q],q),r=v(e,s),q=p(r,s),t=x(e,s),w=z(e,s),s=y(e,s),r=new f(q,r,t,w,s);a.push(r);c[q]=r}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[A(a)]},getViewValueFromOption:function(a){return u?aa.copy(a.viewValue):a.viewValue}}}}}var e=W.createElement("option"),f=W.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function m(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==
c.label&&(c.label=a.label,c.textContent=a.label)}function q(a,c,d,e){c&&I(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function s(a){for(var c;a;)c=a.nextSibling,Wb(a),a=c}function r(a){var c=p&&p[0],d=J&&J[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function u(){var a=F&&w.readValue();F=D.getOptions();var c={},d=h[0].firstChild;O&&h.prepend(p);d=r(d);F.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=q(h[0],d,"optgroup",f),d=
g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=q(g.groupElement,g.currentOptionElement,"option",e),m(a,k),g.currentOptionElement=k.nextSibling):(k=q(h[0],d,"option",e),m(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){s(c[a].currentOptionElement)});s(d);v.$render();if(!v.$isEmpty(a)){var g=w.readValue();(D.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var w=k[0];k=l.multiple;for(var p,x=0,y=h.children(),B=y.length;x<
B;x++)if(""===y[x].value){p=y.eq(x);break}var O=!!p,J=z(e.cloneNode(!1));J.val("?");var F,D=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},w.writeValue=function(a){F.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=F.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},w.readValue=function(){var a=h.val()||[],c=[];n(a,function(a){(a=F.selectValueMap[a])&&!a.disabled&&c.push(F.getViewValueFromOption(a))});return c},D.trackBy&&c.$watchCollection(function(){if(K(v.$viewValue))return v.$viewValue.map(function(a){return D.getTrackByValue(a)})},
function(){v.$render()})):(w.writeValue=function(a){var c=F.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(J.remove(),O||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||O?(J.remove(),O||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(O||p.remove(),h.prepend(J),h.val("?"),J.prop("selected",!0),J.attr("selected",!0))},w.readValue=function(){var a=F.selectValueMap[h.val()];return a&&!a.disabled?
(O||p.remove(),J.remove(),F.getViewValueFromOption(a)):null},D.trackBy&&c.$watch(function(){return D.getTrackByValue(v.$viewValue)},function(){v.$render()}));O?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=z(e.cloneNode(!1));u();c.$watchCollection(D.getWatchables,u)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var m=l.count,q=l.$attr.when&&h.attr(l.$attr.when),s=l.offset||0,r=g.$eval(q)||{},u=
{},x=c.startSymbol(),w=c.endSymbol(),p=x+m+"-"+s+w,A=aa.noop,z;n(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+I(d[2]),r[d]=h.attr(l.$attr[c]))});n(r,function(a,d){u[d]=c(a.replace(e,p))});g.$watch(m,function(c){var e=parseFloat(c),f=isNaN(e);f||e in r||(e=a.pluralCat(e-s));e===z||f&&X(z)&&isNaN(z)||(A(),f=u[e],y(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+q),A=v,k()):A=g.$watch(f,k),z=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=G("ngRepeat"),e=function(a,c,
d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],q=k[2],r=k[3],t=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
if(!k)throw d("iidexp",m);var v=k[3]||k[1],x=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var w,p,A,y,B={$id:Ga};t?w=a(t):(A=function(a,c){return Ga(c)},y=function(a){return a});return function(a,f,g,k,m){w&&(p=function(c,d,e){x&&(B[x]=c);B[v]=d;B.$index=e;return w(a,B)});var t=ga();a.$watchCollection(q,function(g){var k,q,w=f[0],B,D=ga(),F,H,K,G,M,I,N;r&&(a[r]=g);if(Da(g))M=
g,q=p||A;else for(N in q=p||y,M=[],g)g.hasOwnProperty(N)&&"$"!==N.charAt(0)&&M.push(N);F=M.length;N=Array(F);for(k=0;k<F;k++)if(H=g===M?k:M[k],K=g[H],G=q(H,K,k),t[G])I=t[G],delete t[G],D[G]=I,N[k]=I;else{if(D[G])throw n(N,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,G,K);N[k]={id:G,scope:u,clone:u};D[G]=!0}for(B in t){I=t[B];G=qb(I.clone);c.leave(G);if(G[0].parentNode)for(k=0,q=G.length;k<q;k++)G[k].$$NG_REMOVED=!0;I.scope.$destroy()}for(k=0;k<F;k++)if(H=g===M?k:M[k],K=g[H],I=N[k],I.scope){B=
w;do B=B.nextSibling;while(B&&B.$$NG_REMOVED);I.clone[0]!=B&&c.move(qb(I.clone),null,z(w));w=I.clone[I.clone.length-1];e(I.scope,k,v,K,x,H,F)}else m(function(a,d){I.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,z(w));w=f;I.clone=a;D[I.id]=I;e(I.scope,k,v,K,x,H,F)});t=D})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Ma(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||
e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=qb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&n(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,
f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw G("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:v,$render:v},Cg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ua;e.ngModelCtrl=Bg;e.unknownOption=z(W.createElement("option"));e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=
function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a,c){Ta(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=u)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],
ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});if(d.multiple){g.readValue=function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Ua(a);n(c.find("option"),function(a){a.selected=x(d.get(a.value))})};var h,
l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(y(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&
(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],le=qa({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){H(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",g,a,ua(c));f=a||u;e.$validate()});e.$validators.pattern=function(a,c){return e.$isEmpty(c)||y(f)||f.test(c)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Y(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};N.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(aa),aa.module("ngLocale",[],["$provide",function(a){function c(a){a+="";var c=a.indexOf(".");return-1==
c?0:a.length-c-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",
medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,e){var f=a|0,g=e;u===g&&(g=Math.min(c(a),3));Math.pow(10,g);return 1==
f&&0==g?"one":"other"}})}]),z(W).ready(function(){Zd(W,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){"object"===typeof b?m.push(new f(b)):m.push(b)})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,
x({},w,a),l)};return f}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,
c){f=g.hasOwnProperty(c)?g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,
"/.");s(g,function(a,e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.2 - 2014-09-26
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=a.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=a.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.isActive=function(a){return i.currentSlide===a},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?i.select(b>=j.length?j[b-1]:j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()
});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!y||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?v||(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return v=null,u&&(g.cancel(u),u=null),b.tt_content?(r(),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),z(),b.tt_isOpen=!0,b.$digest(),z):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),v=null,b.tt_animation?u||(u=g(s,500)):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){u=null,t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=angular.isDefined(d[l+"Enable"]),z=function(){var a=j.positionElements(c,t,b.tt_placement,w);a.top+="px",a.left+="px",t.css(a)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)?a:o.placement}),d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var A=function(){c.unbind(x.show,k),c.unbind(x.hide,m)};d.$observe(l+"Trigger",function(a){A(),x=n(a),x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m))});var B=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(B)?!!B:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),A(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=i.$new();i.$on("$destroy",function(){w.$destroy()});var x="typeahead-"+w.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":x});var y=angular.element("<div typeahead-popup></div>");y.attr({id:x,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&y.attr("template-url",k.typeaheadTemplateUrl);var z=function(){w.matches=[],w.activeIdx=-1,j.attr("aria-expanded",!1)},A=function(a){return x+"-option-"+a};w.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",A(a))});var B=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){w.activeIdx=0,w.matches.length=0;for(var e=0;e<c.length;e++)b[v.itemName]=c[e],w.matches.push({id:A(e),label:v.viewMapper(w,b),model:c[e]});w.query=a,w.position=t?f.offset(j):f.position(j),w.position.top=w.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else z();d&&q(i,!1)},function(){z(),q(i,!1)})};z(),w.query=void 0;var C,D=function(a){C=d(function(){B(a)},o)},E=function(){C&&d.cancel(C)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(E(),D(a)):B(a):(q(i,!1),E(),z()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),w.select=function(a){var b,c,e={};e[v.itemName]=c=w.matches[a].model,b=v.modelMapper(i,e),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,e)}),z(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==w.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===a.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===a.which||9===a.which?w.$apply(function(){w.select(w.activeIdx)}):27===a.which&&(a.stopPropagation(),z(),w.$digest()))}),j.bind("blur",function(){m=!1});var F=function(a){j[0]!==a.target&&(z(),w.$digest())};e.bind("click",F),i.$on("$destroy",function(){e.unbind("click",F)});var G=a(y)(w);t?e.find("body").append(G):j.after(G)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]);
(function() {
  var CONFIG, module,
    __hasProp = {}.hasOwnProperty,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module = angular.module('Parse', []);

  CONFIG = {};

  module.factory('persist', function($q, $window) {
    var persist, store;
    store = $window.localStorage;
    return persist = {
      get: function(keys) {
        var key, result, _i, _len;
        if (!angular.isArray(keys)) {
          keys = [keys];
        }
        result = {};
        for (_i = 0, _len = keys.length; _i < _len; _i++) {
          key = keys[_i];
          if (store.key(key)) {
            result[key] = store.getItem(key);
          } else {
            result[key] = void 0;
          }
        }
        return result;
      },
      set: function(obj) {
        var key, val;
        for (key in obj) {
          if (!__hasProp.call(obj, key)) continue;
          val = obj[key];
          store.setItem(key, val);
        }
        return true;
      },
      remove: function(keys) {
        var key, _i, _len;
        if (!angular.isArray(keys)) {
          keys = [keys];
        }
        for (_i = 0, _len = keys.length; _i < _len; _i++) {
          key = keys[_i];
          localStorage.removeItem(key);
        }
        return true;
      }
    };
  });

  module.factory('ParseUtils', function($http, $window) {
    var Parse;
    return Parse = {
      BaseUrl: "https://api.parse.com/1",
      _request: function(method, path, data, params) {
        var headers, id, klass, _ref;
        if (angular.isArray(path)) {
          klass = path[0], id = path[1];
          path = "" + (klass.pathBase()) + "/" + id;
        } else if (path.className) {
          path = "" + (path.pathBase());
        } else if (path.objectId && ((_ref = path.constructor) != null ? _ref.className : void 0)) {
          path = "" + (path.constructor.pathBase()) + "/" + path.objectId;
        }
        headers = {
          "X-Parse-Application-Id": CONFIG.applicationId,
          "X-Parse-REST-API-KEY": CONFIG.apiKey,
          "Content-Type": "application/json"
        };
        if ($window.localStorage.key('PARSE_SESSION_TOKEN')) {
          headers["X-Parse-Session-Token"] = $window.localStorage.getItem('PARSE_SESSION_TOKEN');
        }
        return $http({
          method: method,
          url: this.BaseUrl + path,
          data: data,
          params: params,
          headers: headers
        });
      },
      func: function(name) {
        return function(data) {
          return Parse.callFunction(name, data);
        };
      },
      callFunction: function(name, data) {
        return Parse._request("POST", "/functions/" + name, data).then(function(r) {
          return r.data.result;
        });
      }
    };
  });

  module.factory('ParseAuth', function(persist, ParseUser, ParseUtils, $q) {
    var auth;
    return auth = {
      sessionToken: null,
      currentUser: null,
      _login: function(user) {
        var info;
        auth.currentUser = user;
        auth.sessionToken = user.sessionToken;
        info = user.attributes();
        info.objectId = user.objectId;
        persist.set({
          PARSE_USER_INFO: JSON.stringify(info),
          PARSE_SESSION_TOKEN: user.sessionToken
        });
        return user;
      },
      resumeSession: function() {
        var deferred, e, results, sessionToken, user, userAttrs;
        results = persist.get(['PARSE_SESSION_TOKEN', 'PARSE_USER_INFO']);
        userAttrs = results.PARSE_USER_INFO;
        sessionToken = results.PARSE_SESSION_TOKEN;
        deferred = $q.defer();
        if (userAttrs && sessionToken) {
          try {
            user = new ParseUser(JSON.parse(userAttrs));
            auth.currentUser = user;
            auth.sessionToken = sessionToken;
            deferred.resolve(user.refresh());
          } catch (_error) {
            e = _error;
            deferred.reject('User attributes not parseable');
          }
        } else {
          deferred.reject('User attributes or Session Token not found');
        }
        return deferred.promise;
      },
      register: function(username, password) {
        return new ParseUser({
          username: username,
          password: password
        }).save().then(function(user) {
          return auth._login(user);
        });
      },
      login: function(username, password) {
        return ParseUtils._request("GET", "/login", null, {
          username: username,
          password: password
        }).then(function(response) {
          return auth._login(new ParseUser(response.data));
        });
      },
      logout: function() {
        persist.remove(['PARSE_SESSION_TOKEN', 'PARSE_USER_INFO']);
        auth.currentUser = null;
        return auth.sessionToken = null;
      }
    };
  });

  module.factory('ParseModel', function(ParseUtils) {
    var Model;
    return Model = (function() {
      Model.pathBase = function() {
        return "/classes/" + this.className;
      };

      Model.find = function(id, params) {
        var _this = this;
        return ParseUtils._request('GET', "/classes/" + this.className + "/" + id, null, params).then(function(response) {
          return new _this(response.data);
        });
      };

      Model.query = function(params) {
        var _this = this;
        return ParseUtils._request('GET', this, null, params).then(function(response) {
          var item, _i, _len, _ref, _results;
          _ref = response.data.results;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            _results.push(new _this(item));
          }
          return _results;
        });
      };

      Model.configure = function() {
        var attributes, name;
        name = arguments[0], attributes = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        this.className = name;
        return this.attributes = attributes;
      };

      function Model(data) {
        this.isDirty = __bind(this.isDirty, this);
        this._saveCache = __bind(this._saveCache, this);
        this.encodeParse = __bind(this.encodeParse, this);
        this.attributes = __bind(this.attributes, this);
        this.destroy = __bind(this.destroy, this);
        this.update = __bind(this.update, this);
        this.create = __bind(this.create, this);
        this.refresh = __bind(this.refresh, this);
        this.save = __bind(this.save, this);
        this.isNew = __bind(this.isNew, this);
        var key, value;
        for (key in data) {
          value = data[key];
          this[key] = value;
        }
        this._saveCache();
      }

      Model.prototype.isNew = function() {
        return !this.objectId;
      };

      Model.prototype.save = function() {
        if (this.isNew()) {
          return this.create();
        } else {
          return this.update();
        }
      };

      Model.prototype.refresh = function() {
        var _this = this;
        return ParseUtils._request('GET', this).then(function(response) {
          var key, value, _ref;
          _ref = response.data;
          for (key in _ref) {
            if (!__hasProp.call(_ref, key)) continue;
            value = _ref[key];
            _this[key] = value;
          }
          return _this;
        });
      };

      Model.prototype.create = function() {
        var _this = this;
        return ParseUtils._request('POST', this.constructor, this.encodeParse()).then(function(response) {
          var token;
          _this.objectId = response.data.objectId;
          _this.createdAt = response.data.createdAt;
          if (token = response.data.sessionToken) {
            _this.sessionToken = token;
          }
          _this._saveCache();
          return _this;
        });
      };

      Model.prototype.update = function() {
        var _this = this;
        return ParseUtils._request('PUT', this, this.encodeParse()).then(function(response) {
          _this.updatedAt = response.data.updatedAt;
          _this._saveCache();
          return _this;
        });
      };

      Model.prototype.destroy = function() {
        var _this = this;
        return ParseUtils._request('DELETE', this).then(function(response) {
          _this.objectId = null;
          return _this;
        });
      };

      Model.prototype.attributes = function() {
        var key, result, _i, _len, _ref;
        result = {};
        _ref = this.constructor.attributes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          key = _ref[_i];
          result[key] = this[key];
        }
        return result;
      };

      Model.prototype.encodeParse = function() {
        var key, obj, result, _i, _len, _ref, _ref1;
        result = {};
        _ref = this.constructor.attributes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          key = _ref[_i];
          if (key in this) {
            obj = this[key];
            if ((obj != null) && obj.objectId && ((_ref1 = obj.constructor) != null ? _ref1.className : void 0)) {
              obj = {
                __type: "Pointer",
                className: obj.constructor.className,
                objectId: obj.objectId
              };
            }
            result[key] = obj;
          }
        }
        return result;
      };

      Model.prototype._saveCache = function() {
        return this._cache = angular.copy(this.encodeParse());
      };

      Model.prototype.isDirty = function() {
        return !angular.equals(this._cache, this.encodeParse());
      };

      return Model;

    })();
  });

  module.factory('ParseDefaultUser', function(ParseModel) {
    var User, _ref;
    return User = (function(_super) {
      __extends(User, _super);

      function User() {
        _ref = User.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      User.configure('users', 'username', 'password');

      User.pathBase = function() {
        return "/users";
      };

      User.prototype.save = function() {
        var _this = this;
        return User.__super__.save.call(this).then(function(user) {
          delete user.password;
          return user;
        });
      };

      return User;

    })(ParseModel);
  });

  module.factory('ParseUser', function(ParseDefaultUser, ParseCustomUser) {
    if ((ParseCustomUser != null) && (new ParseCustomUser instanceof ParseDefaultUser)) {
      return ParseCustomUser;
    } else {
      return ParseDefaultUser;
    }
  });

  module.provider('Parse', function() {
    return {
      initialize: function(applicationId, apiKey) {
        CONFIG.apiKey = apiKey;
        return CONFIG.applicationId = applicationId;
      },
      $get: function(ParseModel, ParseUser, ParseAuth, ParseUtils) {
        return {
          BaseUrl: ParseUtils.BaseUrl,
          Model: ParseModel,
          User: ParseUser,
          auth: ParseAuth
        };
      }
    };
  });

  angular.module('Parse').factory('ParseCustomUser', function(ParseDefaultUser) {
    return ParseDefaultUser;
  });

}).call(this);

/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */
(function(angular, analytics) {
'use strict';

var angulartics = window.angulartics || (window.angulartics = {});
angulartics.waitForVendorCount = 0;
angulartics.waitForVendorApi = function (objectName, delay, containsField, registerFn, onTimeout) {
  if (!onTimeout) { angulartics.waitForVendorCount++; }
  if (!registerFn) { registerFn = containsField; containsField = undefined; }
  if (!Object.prototype.hasOwnProperty.call(window, objectName) || (containsField !== undefined && window[objectName][containsField] === undefined)) {
    setTimeout(function () { angulartics.waitForVendorApi(objectName, delay, containsField, registerFn, true); }, delay);
  }
  else {
    angulartics.waitForVendorCount--;
    registerFn(window[objectName]);
  }
};

/**
 * @ngdoc overview
 * @name angulartics
 */
angular.module('angulartics', [])
.provider('$analytics', function () {
  var settings = {
    pageTracking: {
      autoTrackFirstPage: true,
      autoTrackVirtualPages: true,
      trackRelativePath: false,
      autoBasePath: false,
      basePath: ''
    },
    eventTracking: {},
    bufferFlushDelay: 1000, // Support only one configuration for buffer flush delay to simplify buffering
    developerMode: false // Prevent sending data in local/development environment
  };

  // List of known handlers that plugins can register themselves for
  var knownHandlers = [
    'pageTrack',
    'eventTrack',
    'setAlias',
    'setUsername',
    'setAlias',
    'setUserProperties',
    'setUserPropertiesOnce',
    'setSuperProperties',
    'setSuperPropertiesOnce'
  ];
  // Cache and handler properties will match values in 'knownHandlers' as the buffering functons are installed.
  var cache = {};
  var handlers = {};

  // General buffering handler
  var bufferedHandler = function(handlerName){
    return function(){
      if(angulartics.waitForVendorCount){
        if(!cache[handlerName]){ cache[handlerName] = []; }
        cache[handlerName].push(arguments);
      }
    };
  };

  // As handlers are installed by plugins, they get pushed into a list and invoked in order.
  var updateHandlers = function(handlerName, fn){
    if(!handlers[handlerName]){
      handlers[handlerName] = [];
    }
    handlers[handlerName].push(fn);
    return function(){
      var handlerArgs = arguments;
      angular.forEach(handlers[handlerName], function(handler){
        handler.apply(this, handlerArgs);
      }, this);
    };
  };

  // The api (returned by this provider) gets populated with handlers below.
  var api = {
    settings: settings
  };

  // Will run setTimeout if delay is > 0
  // Runs immediately if no delay to make sure cache/buffer is flushed before anything else.
  // Plugins should take care to register handlers by order of precedence.
  var onTimeout = function(fn, delay){
    if(delay){
      setTimeout(fn, delay);
    } else {
      fn();
    }
  };

  var provider = {
    $get: function() { return api; },
    api: api,
    settings: settings,
    virtualPageviews: function (value) { this.settings.pageTracking.autoTrackVirtualPages = value; },
    firstPageview: function (value) { this.settings.pageTracking.autoTrackFirstPage = value; },
    withBase: function (value) { this.settings.pageTracking.basePath = (value) ? angular.element('base').attr('href').slice(0, -1) : ''; },
    withAutoBase: function (value) { this.settings.pageTracking.autoBasePath = value; },
    developerMode: function(value) { this.settings.developerMode = value; }
  };

  // General function to register plugin handlers. Flushes buffers immediately upon registration according to the specified delay.
  var register = function(handlerName, fn){
    api[handlerName] = updateHandlers(handlerName, fn);
    var handlerSettings = settings[handlerName];
    var handlerDelay = (handlerSettings) ? handlerSettings.bufferFlushDelay : null;
    var delay = (handlerDelay !== null) ? handlerDelay : settings.bufferFlushDelay;
    angular.forEach(cache[handlerName], function (args, index) {
      onTimeout(function () { fn.apply(this, args); }, index * delay);
    });
  };

  var capitalize = function (input) {
      return input.replace(/^./, function (match) {
          return match.toUpperCase();
      });
  };

  // Adds to the provider a 'register#{handlerName}' function that manages multiple plugins and buffer flushing.
  var installHandlerRegisterFunction = function(handlerName){
    var registerName = 'register'+capitalize(handlerName);
    provider[registerName] = function(fn){
      register(handlerName, fn);
    };
    api[handlerName] = updateHandlers(handlerName, bufferedHandler(handlerName));
  };

  // Set up register functions for each known handler
  angular.forEach(knownHandlers, installHandlerRegisterFunction);
  return provider;
})

.run(['$rootScope', '$window', '$analytics', '$injector', function ($rootScope, $window, $analytics, $injector) {
  if ($analytics.settings.pageTracking.autoTrackFirstPage) {
    $injector.invoke(['$location', function ($location) {
      /* Only track the 'first page' if there are no routes or states on the page */
      var noRoutesOrStates = true;
      if ($injector.has('$route')) {
         var $route = $injector.get('$route');
         for (var route in $route.routes) {
           noRoutesOrStates = false;
           break;
         }
      } else if ($injector.has('$state')) {
        var $state = $injector.get('$state');
        for (var state in $state.get()) {
          noRoutesOrStates = false;
          break;
        }
      }
      if (noRoutesOrStates) {
        if ($analytics.settings.pageTracking.autoBasePath) {
          $analytics.settings.pageTracking.basePath = $window.location.pathname;
        }
        if ($analytics.settings.trackRelativePath) {
          var url = $analytics.settings.pageTracking.basePath + $location.url();
          $analytics.pageTrack(url, $location);
        } else {
          $analytics.pageTrack($location.absUrl(), $location);
        }
      }
    }]);
  }

  if ($analytics.settings.pageTracking.autoTrackVirtualPages) {
    $injector.invoke(['$location', function ($location) {
      if ($analytics.settings.pageTracking.autoBasePath) {
        /* Add the full route to the base. */
        $analytics.settings.pageTracking.basePath = $window.location.pathname + "#";
      }
      if ($injector.has('$route')) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
          if (current && (current.$$route||current).redirectTo) return;
          var url = $analytics.settings.pageTracking.basePath + $location.url();
          $analytics.pageTrack(url, $location);
        });
      }
      if ($injector.has('$state')) {
        $rootScope.$on('$stateChangeSuccess', function (event, current) {
          var url = $analytics.settings.pageTracking.basePath + $location.url();
          $analytics.pageTrack(url, $location);
        });
      }
    }]);
  }
  if ($analytics.settings.developerMode) {
    angular.forEach($analytics, function(attr, name) {
      if (typeof attr === 'function') {
        $analytics[name] = function(){};
      }
    });
  }
}])

.directive('analyticsOn', ['$analytics', function ($analytics) {
  function isCommand(element) {
    return ['a:','button:','button:button','button:submit','input:button','input:submit'].indexOf(
      element.tagName.toLowerCase()+':'+(element.type||'')) >= 0;
  }

  function inferEventType(element) {
    if (isCommand(element)) return 'click';
    return 'click';
  }

  function inferEventName(element) {
    if (isCommand(element)) return element.innerText || element.value;
    return element.id || element.name || element.tagName;
  }

  function isProperty(name) {
    return name.substr(0, 9) === 'analytics' && ['On', 'Event', 'If', 'Properties', 'EventType'].indexOf(name.substr(9)) === -1;
  }

  function propertyName(name) {
    var s = name.slice(9); // slice off the 'analytics' prefix
    if (typeof s !== 'undefined' && s!==null && s.length > 0) {
      return s.substring(0, 1).toLowerCase() + s.substring(1);
    }
    else {
      return s;
    }
  }

  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      var eventType = $attrs.analyticsOn || inferEventType($element[0]);
      var trackingData = {};

      angular.forEach($attrs.$attr, function(attr, name) {
        if (isProperty(name)) {
          trackingData[propertyName(name)] = $attrs[name];
          $attrs.$observe(name, function(value){
            trackingData[propertyName(name)] = value;
          });
        }
      });

      angular.element($element[0]).bind(eventType, function ($event) {
        var eventName = $attrs.analyticsEvent || inferEventName($element[0]);
        trackingData.eventType = $event.type;

        if($attrs.analyticsIf){
          if(! $scope.$eval($attrs.analyticsIf)){
            return; // Cancel this event if we don't pass the analytics-if condition
          }
        }
        // Allow components to pass through an expression that gets merged on to the event properties
        // eg. analytics-properites='myComponentScope.someConfigExpression.$analyticsProperties'
        if($attrs.analyticsProperties){
          angular.extend(trackingData, $scope.$eval($attrs.analyticsProperties));
        }
        $analytics.eventTrack(eventName, trackingData);
      });
    }
  };
}]);
})(angular);

/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */
(function(angular) {
'use strict';

/**
 * @ngdoc overview
 * @name angulartics.google.analytics
 * Enables analytics support for Google Analytics (http://google.com/analytics)
 */
angular.module('angulartics.google.analytics', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  // GA already supports buffered invocations so we don't need
  // to wrap these inside angulartics.waitForVendorApi

  $analyticsProvider.settings.trackRelativePath = true;
  
  // Set the default settings for this module
  $analyticsProvider.settings.ga = {
    // array of additional account names (only works for analyticsjs)
    additionalAccountNames: undefined
  };

  $analyticsProvider.registerPageTrack(function (path) {
    if (window._gaq) _gaq.push(['_trackPageview', path]);
    if (window.ga) {
      ga('send', 'pageview', path);
      angular.forEach($analyticsProvider.settings.ga.additionalAccountNames, function (accountName){
        ga(accountName +'.send', 'pageview', path);
      });
    }
  });

  /**
   * Track Event in GA
   * @name eventTrack
   *
   * @param {string} action Required 'action' (string) associated with the event
   * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
   *
   * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
   *
   * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
   */
  $analyticsProvider.registerEventTrack(function (action, properties) {

    // do nothing if there is no category (it's required by GA)
    if (!properties || !properties.category) { 
		return; 
	}
    // GA requires that eventValue be an integer, see:
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue
    // https://github.com/luisfarzati/angulartics/issues/81
    if (properties.value) {
      var parsed = parseInt(properties.value, 10);
      properties.value = isNaN(parsed) ? 0 : parsed;
    }

    if (window.ga) {

      var eventOptions = {
        eventCategory: properties.category || null,
        eventAction: action || null,
        eventLabel: properties.label ||  null,
        eventValue: properties.value || null,
        nonInteraction: properties.noninteraction || null
      };

      // add custom dimensions and metrics
      for(var idx = 1; idx<=20;idx++) {
      if (properties['dimension' +idx.toString()]) {
        eventOptions['dimension' +idx.toString()] = properties['dimension' +idx.toString()];
      }
      if (properties['metric' +idx.toString()]) {
        eventOptions['metric' +idx.toString()] = properties['metric' +idx.toString()];
        }
      }
      ga('send', 'event', eventOptions);
      angular.forEach($analyticsProvider.settings.ga.additionalAccountNames, function (accountName){
        ga(accountName +'.send', 'event', eventOptions);
      });
    }

    else if (window._gaq) {
      _gaq.push(['_trackEvent', properties.category, action, properties.label, properties.value, properties.noninteraction]);
    }

  });

}]);
})(angular);

//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "2.6.0",
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for language config files
        languages = {},

        // moment internal properties
        momentProperties = {
            _isAMomentObject: null,
            _i : null,
            _f : null,
            _l : null,
            _strict : null,
            _isUTC : null,
            _offset : null,  // optional. Combine with _isUTC
            _pf : null,
            _lang : null  // optional
        },

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        parseTokenOrdinal = /\d{1,2}/,

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        function printMsg() {
            if (moment.suppressDeprecationWarnings === false &&
                    typeof console !== 'undefined' && console.warn) {
                console.warn("Deprecation warning: " + msg);
            }
        }
        return extend(function () {
            if (firstTime) {
                printMsg();
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        checkOverflow(config);
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }

        if (b.hasOwnProperty("toString")) {
            a.toString = b.toString;
        }

        if (b.hasOwnProperty("valueOf")) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function cloneMoment(m) {
        var result = {}, i;
        for (i in m) {
            if (m.hasOwnProperty(i) && momentProperties.hasOwnProperty(i)) {
                result[i] = m[i];
            }
        }

        return result;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return  Object.prototype.toString.call(input) === '[object Date]' ||
                input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (inputObject.hasOwnProperty(prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment.fn._lang[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment.fn._lang, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLanguage(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        return model._isUTC ? moment(input).zone(model._offset || 0) :
            moment(input).local();
    }

    /************************************
        Languages
    ************************************/


    extend(Language.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Remove a language from the `languages` cache. Mostly useful in tests.
    function unloadLang(key) {
        delete languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        var i = 0, j, lang, next, split,
            get = function (k) {
                if (!languages[k] && hasModule) {
                    try {
                        require('./lang/' + k);
                    } catch (e) { }
                }
                return languages[k];
            };

        if (!key) {
            return moment.fn._lang;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            lang = get(key);
            if (lang) {
                return lang;
            }
            key = [key];
        }

        //pick the language from the array
        //try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        //substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
        while (i < key.length) {
            split = normalizeLanguage(key[i]).split('-');
            j = split.length;
            next = normalizeLanguage(key[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                lang = get(split.slice(0, j).join('-'));
                if (lang) {
                    return lang;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return moment.fn._lang;
    }

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {

        if (!m.isValid()) {
            return m.lang().invalidDate();
        }

        format = expandFormat(format, m.lang());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, lang) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return lang.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) { return parseTokenOneDigit; }
            /* falls through */
        case 'SS':
            if (strict) { return parseTokenTwoDigits; }
            /* falls through */
        case 'SSS':
            if (strict) { return parseTokenThreeDigits; }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return getLangDefinition(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return parseTokenOrdinal;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), "i"));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || "";
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(input, 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = getLangDefinition(config._l).isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'dd':
        case 'ddd':
        case 'dddd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gg':
        case 'gggg':
        case 'GG':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = input;
            }
            break;
        }
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate,
            yearToUse, fixYear, w, temp, lang, weekday, week;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            fixYear = function (val) {
                var intVal = parseInt(val, 10);
                return val ?
                  (val.length < 3 ? (intVal > 68 ? 1900 + intVal : 2000 + intVal) : intVal) :
                  (config._a[YEAR] == null ? moment().weekYear() : config._a[YEAR]);
            };

            w = config._w;
            if (w.GG != null || w.W != null || w.E != null) {
                temp = dayOfYearFromWeeks(fixYear(w.GG), w.W || 1, w.E, 4, 1);
            }
            else {
                lang = getLangDefinition(config._l);
                weekday = w.d != null ?  parseWeekday(w.d, lang) :
                  (w.e != null ?  parseInt(w.e, 10) + lang._week.dow : 0);

                week = parseInt(w.w, 10) || 1;

                //if we're parsing 'd', then the low day numbers may be next week
                if (w.d != null && weekday < lang._week.dow) {
                    week++;
                }

                temp = dayOfYearFromWeeks(fixYear(w.gg), week, weekday, lang._week.doy, lang._week.dow);
            }

            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = config._a[YEAR] == null ? currentDate[YEAR] : config._a[YEAR];

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
        input[HOUR] += toInt((config._tzm || 0) / 60);
        input[MINUTE] += toInt((config._tzm || 0) % 60);

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var lang = getLangDefinition(config._l),
            string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, lang).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = extend({}, config);
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function makeDateFromString(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be "T" or undefined
                    config._f = isoDates[i][0] + (match[6] || " ");
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += "Z";
            }
            makeDateFromStringAndFormat(config);
        }
        else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromConfig(config);
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, language) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = language.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = cloneMoment(input);

            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = lang;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
            "moment construction falls back to js Date. This is " +
            "discouraged and will be removed in upcoming major " +
            "release. Please refer to " +
            "https://github.com/moment/moment/issues/1407 for more info.",
            function (config) {
        config._d = new Date(config._i);
    });

    // creating with utc
    moment.utc = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = lang;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        var r;
        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(normalizeLanguage(key), values);
        } else if (values === null) {
            unloadLang(key);
            key = 'en';
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        r = moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
        return r._abbr;
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null &&  obj.hasOwnProperty('_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().lang('en').format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {

            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function () {
            return this.zone(0);
        },

        local : function () {
            this.zone(0);
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var sod = makeAs(moment(), this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.lang());
                return this.add({ d : input - day });
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf: function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add((units === 'isoWeek' ? 'week' : units), 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = units || 'ms';
            return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
        },

        min: function (other) {
            other = moment.apply(null, arguments);
            return other < this ? this : other;
        },

        max: function (other) {
            other = moment.apply(null, arguments);
            return other > this ? this : other;
        },

        // keepTime = true means only change the timezone, without affecting
        // the local hour. So 5:31:26 +0300 --[zone(2, true)]--> 5:31:26 +0200
        // It is possible that 5:31:26 doesn't exist int zone +0200, so we
        // adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepTime) {
            var offset = this._offset || 0;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                this._offset = input;
                this._isUTC = true;
                if (offset !== input) {
                    if (!keepTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? "UTC" : "";
        },

        zoneName : function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return input == null ? year : this.add("y", (input - year));
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add("y", (input - year));
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.lang()._week.dow) % 7;
            return input == null ? weekday : this.add("d", input - weekday);
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this._lang._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.lang().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate("dates accessor is deprecated. Use date instead.", makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate("years accessor is deprecated. Use year instead.", makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);
            data.days = days % 30;

            months += absRound(days / 30);
            data.months = months % 12;

            years = absRound(months / 12);
            data.years = years;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            units = normalizeUnits(units);
            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
        },

        lang : moment.fn.lang,

        toIsoString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        }
    });

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);
    moment.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
    };


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LANGUAGES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    "Accessing Moment through the global scope is " +
                    "deprecated, and will be removed in an upcoming " +
                    "release.",
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === "function" && define.amd) {
        define("moment", function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);

/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
/*! angular-google-maps 2.1.6 2015-08-27
 *  AngularJS directives for Google Maps
 *  git: https://github.com/angular-ui/angular-google-maps.git
 */
!function(a,b,c){"use strict";(function(){b.module("uiGmapgoogle-maps.providers",[]),b.module("uiGmapgoogle-maps.wrapped",[]),b.module("uiGmapgoogle-maps.extensions",["uiGmapgoogle-maps.wrapped","uiGmapgoogle-maps.providers"]),b.module("uiGmapgoogle-maps.directives.api.utils",["uiGmapgoogle-maps.extensions"]),b.module("uiGmapgoogle-maps.directives.api.managers",[]),b.module("uiGmapgoogle-maps.directives.api.options",["uiGmapgoogle-maps.directives.api.utils"]),b.module("uiGmapgoogle-maps.directives.api.options.builders",[]),b.module("uiGmapgoogle-maps.directives.api.models.child",["uiGmapgoogle-maps.directives.api.utils","uiGmapgoogle-maps.directives.api.options","uiGmapgoogle-maps.directives.api.options.builders"]),b.module("uiGmapgoogle-maps.directives.api.models.parent",["uiGmapgoogle-maps.directives.api.managers","uiGmapgoogle-maps.directives.api.models.child","uiGmapgoogle-maps.providers"]),b.module("uiGmapgoogle-maps.directives.api",["uiGmapgoogle-maps.directives.api.models.parent"]),b.module("uiGmapgoogle-maps",["uiGmapgoogle-maps.directives.api","uiGmapgoogle-maps.providers"])}).call(this),function(){b.module("uiGmapgoogle-maps.providers").factory("uiGmapMapScriptLoader",["$q","uiGmapuuid",function(c,d){var e,f,g,h;return h=void 0,e=function(a){return a.china?"http://maps.google.cn/maps/api/js?":"auto"===a.transport?"//maps.googleapis.com/maps/api/js?":a.transport+"://maps.googleapis.com/maps/api/js?"},f=function(a){var b,c,f;return b=["transport","isGoogleMapsForWork","china"],a.isGoogleMapsForWork&&b.push("key"),c=_.map(_.omit(a,b),function(a,b){return b+"="+a}),h&&document.getElementById(h).remove(),c=c.join("&"),f=document.createElement("script"),f.id=h="ui_gmap_map_load_"+d.generate(),f.type="text/javascript",f.src=e(a)+c,document.body.appendChild(f)},g=function(){return b.isDefined(a.google)&&b.isDefined(a.google.maps)},{load:function(b){var d,e;return d=c.defer(),g()?(d.resolve(a.google.maps),d.promise):(e=b.callback="onGoogleMapsReady"+Math.round(1e3*Math.random()),a[e]=function(){a[e]=null,d.resolve(a.google.maps)},a.navigator.connection&&a.Connection&&a.navigator.connection.type===a.Connection.NONE?document.addEventListener("online",function(){return g()?void 0:f(b)}):f(b),d.promise)}}}]).provider("uiGmapGoogleMapApi",function(){return this.options={transport:"https",isGoogleMapsForWork:!1,china:!1,v:"3",libraries:"",language:"en",sensor:"false"},this.configure=function(a){b.extend(this.options,a)},this.$get=["uiGmapMapScriptLoader",function(a){return function(b){return b.load(a.options)}}(this)],this})}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.extensions").service("uiGmapExtendGWin",function(){return{init:_.once(function(){var b;if(google||("undefined"!=typeof google&&null!==google?google.maps:void 0)||null!=google.maps.InfoWindow)return google.maps.InfoWindow.prototype._open=google.maps.InfoWindow.prototype.open,google.maps.InfoWindow.prototype._close=google.maps.InfoWindow.prototype.close,google.maps.InfoWindow.prototype._isOpen=!1,google.maps.InfoWindow.prototype.open=function(a,b,c){null==c&&(this._isOpen=!0,this._open(a,b,!0))},google.maps.InfoWindow.prototype.close=function(a){null==a&&(this._isOpen=!1,this._close(!0))},google.maps.InfoWindow.prototype.isOpen=function(a){return null==a&&(a=void 0),null==a?this._isOpen:this._isOpen=a},a.InfoBox&&(a.InfoBox.prototype._open=a.InfoBox.prototype.open,a.InfoBox.prototype._close=a.InfoBox.prototype.close,a.InfoBox.prototype._isOpen=!1,a.InfoBox.prototype.open=function(a,b){this._isOpen=!0,this._open(a,b)},a.InfoBox.prototype.close=function(){this._isOpen=!1,this._close()},a.InfoBox.prototype.isOpen=function(a){return null==a&&(a=void 0),null==a?this._isOpen:this._isOpen=a},b=function(b){function e(b){this.getOrigCloseBoxImg_=c(this.getOrigCloseBoxImg_,this),this.getCloseBoxDiv_=c(this.getCloseBoxDiv_,this);var d;d=new a.InfoBox(b),_.extend(this,d),null!=b.closeBoxDiv&&(this.closeBoxDiv_=b.closeBoxDiv)}return d(e,b),e.prototype.getCloseBoxDiv_=function(){return this.closeBoxDiv_},e.prototype.getCloseBoxImg_=function(){var a,b;return a=this.getCloseBoxDiv_(),b=this.getOrigCloseBoxImg_(),a||b},e.prototype.getOrigCloseBoxImg_=function(){var a;return a="",""!==this.closeBoxURL_&&(a="<img",a+=" src='"+this.closeBoxURL_+"'",a+=" align=right",a+=" style='",a+=" position: relative;",a+=" cursor: pointer;",a+=" margin: "+this.closeBoxMargin_+";",a+="'>"),a},e}(a.InfoBox),a.uiGmapInfoBox=b),a.MarkerLabel_?a.MarkerLabel_.prototype.setContent=function(){var a;a=this.marker_.get("labelContent"),a&&!_.isEqual(this.oldContent,a)&&("undefined"==typeof(null!=a?a.nodeType:void 0)?(this.labelDiv_.innerHTML=a,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML,this.oldContent=a):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(a),a=a.cloneNode(!0),this.labelDiv_.innerHTML="",this.eventDiv_.appendChild(a),this.oldContent=a))}:void 0})}})}.call(this),function(){b.module("uiGmapgoogle-maps.extensions").service("uiGmapLodash",function(){var a,b,c,d,e,f,g,h;return null==_.get&&(d=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,e=/^\w*$/,f=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,g=function(a){return _.isObject(a)?a:Object(a)},b=function(a){return null===a?"":a+""},h=function(a){var c;return _.isArray(a)?a:(c=[],b(a).replace(f,function(a,b,d,e){c.push(d?e.replace(reEscapeChar,"$1"):b||a)}),c)},a=function(a,b,c){var d,e;if(null!==a){void 0!==c&&c in g(a)&&(b=[c]),d=0,e=b.length;for(;!_.isUndefined(a)&&e>d;)a=a[b[d++]];return d&&d===e?a:void 0}},c=function(b,c,d){var e;return e=null===b?void 0:a(b,h(c),c+""),void 0===e?d:e},_.get=c),this.intersectionObjects=function(a,b,c){var d;return null==c&&(c=void 0),d=_.map(a,function(a){return function(a){return _.find(b,function(b){return null!=c?c(a,b):_.isEqual(a,b)})}}(this)),_.filter(d,function(a){return null!=a})},this.containsObject=_.includeObject=function(a,b,c){return null==c&&(c=void 0),null===a?!1:_.any(a,function(a){return function(a){return null!=c?c(a,b):_.isEqual(a,b)}}(this))},this.differenceObjects=function(a,b,c){return null==c&&(c=void 0),_.filter(a,function(a){return function(d){return!a.containsObject(b,d,c)}}(this))},this.withoutObjects=this.differenceObjects,this.indexOfObject=function(a,b,c,d){var e,f;if(null==a)return-1;if(e=0,f=a.length,d){if("number"!=typeof d)return e=_.sortedIndex(a,b),a[e]===b?e:-1;e=0>d?Math.max(0,f+d):d}for(;f>e;){if(null!=c){if(c(a[e],b))return e}else if(_.isEqual(a[e],b))return e;e++}return-1},this.isNullOrUndefined=function(a){return _.isNull(a||_.isUndefined(a))},this})}.call(this),function(){b.module("uiGmapgoogle-maps.extensions").factory("uiGmapString",function(){return function(a){return this.contains=function(b,c){return-1!==a.indexOf(b,c)},this}})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmap_sync",[function(){return{fakePromise:function(){var a;return a=void 0,{then:function(b){return a=b},resolve:function(){return a.apply(void 0,arguments)}}}}}]).service("uiGmap_async",["$timeout","uiGmapPromise","uiGmapLogger","$q","uiGmapDataStructures","uiGmapGmapUtil",function(a,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;return y=c.promiseTypes,r=c.isInProgress,x=c.promiseStatus,h=c.ExposedPromise,j=c.SniffedPromise,s=function(a,b){var c;return c=a.promise(),c.promiseType=a.promiseType,c.$$state&&d.debug("promiseType: "+c.promiseType+", state: "+x(c.$$state.status)),c.cancelCb=b,c},o=function(a,b){return a.promiseType===y.create&&b.promiseType!==y["delete"]&&b.promiseType!==y.init?(d.debug("lastPromise.promiseType "+b.promiseType+", newPromiseType: "+a.promiseType+", SKIPPED MUST COME AFTER DELETE ONLY"),!0):!1},w=function(a,b,c){var e;return b.promiseType===y["delete"]&&c.promiseType!==y["delete"]&&null!=c.cancelCb&&_.isFunction(c.cancelCb)&&r(c)&&(d.debug("promiseType: "+b.promiseType+", CANCELING LAST PROMISE type: "+c.promiseType),c.cancelCb("cancel safe"),e=a.peek(),null!=e&&r(e))?e.hasOwnProperty("cancelCb")&&_.isFunction(e.cancelCb)?(d.debug("promiseType: "+e.promiseType+", CANCELING FIRST PROMISE type: "+e.promiseType),e.cancelCb("cancel safe")):d.warn("first promise was not cancelable"):void 0},i=function(a,b,c){var d,e;if(a.existingPieces){if(d=_.last(a.existingPieces._content),o(b,d))return;return w(a.existingPieces,b,d),e=h(d["finally"](function(){return s(b,c)})),e.cancelCb=c,e.promiseType=b.promiseType,a.existingPieces.enqueue(e),d["finally"](function(){return a.existingPieces.dequeue()})}return a.existingPieces=new f.Queue,a.existingPieces.enqueue(s(b,c))},u=function(a,b,c,e,f){var g;return null==c&&(c=""),g=function(a){return d.debug(a+": "+a),null!=e&&_.isFunction(e)?e(a):void 0},i(a,j(f,b),g)},m=80,q={value:null},z=function(a,b,c){var d;try{return a.apply(b,c)}catch(e){return d=e,q.value=d,q}},t=function(a,b,c,e){var f,g;return g=z(a,b,e),g===q&&(f="error within chunking iterator: "+q.value,d.error(f),c.reject(f)),"cancel safe"===g?!1:!0},l=function(a,b,c){var d,e;return d=a===b,e=b[c],d?e:a[e]},k=function(a,c,d,e){var f;return b.isArray(a)?f=a:(f=c?c:Object.keys(_.omit(a,["length","forEach","map"])),c=f),null==e&&(e=d),b.isArray(f)&&(void 0===f||(null!=f?f.length:void 0)<=0)&&e!==d?d():e(f,c)},n=function(c,d,e,f,g,h,i,j){return k(c,j,function(j,k){var m,o,p,q;for(m=d&&d<j.length?d:j.length,o=i,p=!0;p&&m--&&o<(j?j.length:o+1);)q=l(c,j,o),p=b.isFunction(q)?!0:t(f,void 0,h,[q,o]),++o;if(j){if(!(p&&o<j.length))return h.resolve();if(i=o,d)return null!=g&&_.isFunction(g)&&t(g,void 0,h,[]),a(function(){return n(c,d,e,f,g,h,i,k)},e,!1)}})},p=function(a,b,e,f,g,h,i){var j,l,o;return null==e&&(e=m),null==g&&(g=0),null==h&&(h=1),o=void 0,l=c.defer(),o=l.promise,h?k(a,i,function(){return l.resolve(),o},function(c,d){return n(a,e,h,b,f,l,g,d),o}):(j="pause (delay) must be set from _async!",d.error(j),l.reject(j),o)},v=function(a,b,d,e,f,g,h){var i;return i=[],k(a,h,function(){return c.resolve(i)},function(c,h){return p(a,function(a){return i.push(b(a))},d,e,f,g,h).then(function(){return i})})},{each:p,map:v,managePromiseQueue:u,promiseLock:u,defaultChunkSize:m,chunkSizeFrom:function(a,b){return null==b&&(b=void 0),_.isNumber(a)&&(b=a),(g.isFalse(a)||a===!1)&&(b=!1),b}}}])}.call(this),function(){var a=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapBaseObject",function(){var b,c;return c=["extended","included"],b=function(){function b(){}return b.extend=function(b){var d,e,f;for(d in b)f=b[d],a.call(c,d)<0&&(this[d]=f);return null!=(e=b.extended)&&e.apply(this),this},b.include=function(b){var d,e,f;for(d in b)f=b[d],a.call(c,d)<0&&(this.prototype[d]=f);return null!=(e=b.included)&&e.apply(this),this},b}()})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapChildEvents",function(){return{onChildCreation:function(a){}}})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapCtrlHandle",["$q",function(a){var b;return b={handle:function(c,d){return c.$on("$destroy",function(){return b.handle(c)}),c.deferred=a.defer(),{getScope:function(){return c}}},mapPromise:function(a,b){var c;return c=b.getScope(),c.deferred.promise.then(function(b){return a.map=b}),c.deferred.promise}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapEventsHelper",["uiGmapLogger",function(a){var c,d;return d=function(a){return b.isDefined(a.events)&&null!=a.events&&b.isObject(a.events)},c=function(a,b){return d(a)?a:d(b)?b:void 0},{setEvents:function(a,d,e,f){var g;return g=c(d,e),null!=g?_.compact(_.map(g.events,function(c,h){var i;return f&&(i=_(f).contains(h)),g.events.hasOwnProperty(h)&&b.isFunction(g.events[h])&&!i?google.maps.event.addListener(a,h,function(){return d.$evalAsync||(d.$evalAsync=function(){}),d.$evalAsync(c.apply(d,[a,h,e,arguments]))}):void 0})):void 0},removeEvents:function(a){var b,c;if(a)for(b in a)c=a[b],c&&google.maps.event.removeListener(c)}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapFitHelper",["uiGmapLogger",function(a){return{fit:function(a,b){var c,d,e,f,g;if(b&&(null!=a?a.length:void 0)){c=new google.maps.LatLngBounds,d=!1;for(e in a)f=a[e],f&&(d||(d=!0),g=_.isFunction(f.getPosition)?f.getPosition():f),c.extend(g);if(d)return b.fitBounds(c)}}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapGmapUtil",["uiGmapLogger","$compile",function(a,c){var d,e,f,g,h,i;return e=function(a,b,c){return a===b||-1!==c.indexOf(a)},d=function(a){return e(a,!1,["false","FALSE",0,"n","N","no","NO"])},g=function(a){return Array.isArray(a)&&2===a.length?a[1]:b.isDefined(a.type)&&"Point"===a.type?a.coordinates[1]:a.latitude},h=function(a){return Array.isArray(a)&&2===a.length?a[0]:b.isDefined(a.type)&&"Point"===a.type?a.coordinates[0]:a.longitude},f=function(a){return a?Array.isArray(a)&&2===a.length?new google.maps.LatLng(a[1],a[0]):b.isDefined(a.type)&&"Point"===a.type?new google.maps.LatLng(a.coordinates[1],a.coordinates[0]):new google.maps.LatLng(a.latitude,a.longitude):void 0},i=function(a){if(b.isUndefined(a))return!1;if(_.isArray(a)){if(2===a.length)return!0}else if(null!=a&&(null!=a?a.type:void 0)&&"Point"===a.type&&_.isArray(a.coordinates)&&2===a.coordinates.length)return!0;return a&&b.isDefined((null!=a?a.latitude:void 0)&&b.isDefined(null!=a?a.longitude:void 0))?!0:!1},{setCoordsFromEvent:function(a,c){return a?(Array.isArray(a)&&2===a.length?(a[1]=c.lat(),a[0]=c.lng()):b.isDefined(a.type)&&"Point"===a.type?(a.coordinates[1]=c.lat(),a.coordinates[0]=c.lng()):(a.latitude=c.lat(),a.longitude=c.lng()),a):void 0},getLabelPositionPoint:function(a){var b,c;return void 0===a?void 0:(a=/^([-\d\.]+)\s([-\d\.]+)$/.exec(a),b=parseFloat(a[1]),c=parseFloat(a[2]),null!=b&&null!=c?new google.maps.Point(b,c):void 0)},createWindowOptions:function(d,e,g,h){var i;return null!=g&&null!=h&&null!=c?(i=b.extend({},h,{content:this.buildContent(e,h,g),position:null!=h.position?h.position:b.isObject(d)?d.getPosition():f(e.coords)}),null!=d&&null==(null!=i?i.pixelOffset:void 0)&&(null==i.boxClass||(i.pixelOffset={height:0,width:-2})),i):h?h:(a.error("infoWindow defaults not defined"),g?void 0:a.error("infoWindow content not defined"))},buildContent:function(a,b,d){var e,f;return null!=b.content?f=b.content:null!=c?(d=d.replace(/^\s+|\s+$/g,""),e=""===d?"":c(d)(a),e.length>0&&(f=e[0])):f=d,f},defaultDelay:50,isTrue:function(a){return e(a,!0,["true","TRUE",1,"y","Y","yes","YES"])},isFalse:d,isFalsy:function(a){return e(a,!1,[void 0,null])||d(a)},getCoords:f,validateCoords:i,equalCoords:function(a,b){return g(a)===g(b)&&h(a)===h(b)},validatePath:function(a){var c,d,e,f;if(d=0,b.isUndefined(a.type)){if(!Array.isArray(a)||a.length<2)return!1;for(;d<a.length;){if(!(b.isDefined(a[d].latitude)&&b.isDefined(a[d].longitude)||"function"==typeof a[d].lat&&"function"==typeof a[d].lng))return!1;d++}return!0}if(b.isUndefined(a.coordinates))return!1;if("Polygon"===a.type){if(a.coordinates[0].length<4)return!1;c=a.coordinates[0]}else if("MultiPolygon"===a.type){if(f={max:0,index:0},_.forEach(a.coordinates,function(a,b){return a[0].length>this.max?(this.max=a[0].length,this.index=b):void 0},f),e=a.coordinates[f.index],c=e[0],c.length<4)return!1}else{if("LineString"!==a.type)return!1;if(a.coordinates.length<2)return!1;c=a.coordinates}for(;d<c.length;){if(2!==c[d].length)return!1;d++}return!0},convertPathPoints:function(a){var c,d,e,f,g;if(d=0,f=new google.maps.MVCArray,b.isUndefined(a.type))for(;d<a.length;)b.isDefined(a[d].latitude)&&b.isDefined(a[d].longitude)?e=new google.maps.LatLng(a[d].latitude,a[d].longitude):"function"==typeof a[d].lat&&"function"==typeof a[d].lng&&(e=a[d]),f.push(e),d++;else for("Polygon"===a.type?c=a.coordinates[0]:"MultiPolygon"===a.type?(g={max:0,index:0},_.forEach(a.coordinates,function(a,b){return a[0].length>this.max?(this.max=a[0].length,this.index=b):void 0},g),c=a.coordinates[g.index][0]):"LineString"===a.type&&(c=a.coordinates);d<c.length;)f.push(new google.maps.LatLng(c[d][1],c[d][0])),d++;return f},getPath:function(a,b){var c;return null!=b&&_.isString(b)?(c=a,_.each(b.split("."),function(a){return c?c=c[a]:void 0}),c):b},validateBoundPoints:function(a){return b.isUndefined(a.sw.latitude)||b.isUndefined(a.sw.longitude)||b.isUndefined(a.ne.latitude)||b.isUndefined(a.ne.longitude)?!1:!0},convertBoundPoints:function(a){var b;return b=new google.maps.LatLngBounds(new google.maps.LatLng(a.sw.latitude,a.sw.longitude),new google.maps.LatLng(a.ne.latitude,a.ne.longitude))},fitMapBounds:function(a,b){return a.fitBounds(b)}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapIsReady",["$q","$timeout",function(a,b){var c,d,e,f;return d=0,f=[],e=function(){return a.all(f)},c=function(a,f,g){return b(function(){return 0>=g?void a.reject("Your maps are not found we have checked the maximum amount of times. :)"):void(d!==f?c(a,f,g-1):a.resolve(e()))},100)},{spawn:function(){var b;return b=a.defer(),f.push(b.promise),d+=1,{instance:d,deferred:b}},promises:e,instances:function(){return d},promise:function(b,d){var e;return null==b&&(b=1),null==d&&(d=50),e=a.defer(),c(e,b,d),e.promise},reset:function(){d=0,f.length=0},decrement:function(){d>0&&(d-=1),f.length&&(f.length-=1)}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapLinked",["uiGmapBaseObject",function(b){var c;return c=function(b){function c(a,b,c,d){this.scope=a,this.element=b,this.attrs=c,this.ctrls=d}return a(c,b),c}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapLogger",["$log",function(a){var b,c,d,e;return b={log:1,info:2,debug:3,warn:4,error:5,none:6},e=function(a,b,c){return a>=b?c():void 0},d=function(b,c){return null!=a?a[b](c):console[b](c)},new(c=function(){function c(){var a;this.doLog=!0,a={},["log","info","debug","warn","error"].forEach(function(c){return function(f){return a[f]=function(a){return c.doLog?e(b[f],c.currentLevel,function(){return d(f,a)}):void 0}}}(this)),this.LEVELS=b,this.currentLevel=b.error,this.log=a.log,this.info=a.info,this.debug=a.debug,this.warn=a.warn,this.error=a.error}return c.prototype.spawn=function(){return new c},c.prototype.setLog=function(b){return a=b},c}())}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapModelKey",["uiGmapBaseObject","uiGmapGmapUtil","uiGmapPromise","$q","$timeout",function(d,e,f,g,h){var i;return i=function(d){function f(b){this.scope=b,this.modelsLength=a(this.modelsLength,this),this.updateChild=a(this.updateChild,this),this.destroy=a(this.destroy,this),this.onDestroy=a(this.onDestroy,this),this.setChildScope=a(this.setChildScope,this),this.getChanges=a(this.getChanges,this),this.getProp=a(this.getProp,this),this.setIdKey=a(this.setIdKey,this),this.modelKeyComparison=a(this.modelKeyComparison,this),f.__super__.constructor.call(this),this["interface"]={},this["interface"].scopeKeys=[],this.defaultIdKey="id",this.idKey=void 0}return c(f,d),f.prototype.evalModelHandle=function(a,b){return null!=a&&null!=b?"self"===b?a:(_.isFunction(b)&&(b=b()),e.getPath(a,b)):void 0},f.prototype.modelKeyComparison=function(a,b){var c,d,f;if(c=_.contains(this["interface"].scopeKeys,"coords"),(c&&null!=this.scope.coords||!c)&&(f=this.scope),null==f)throw"No scope set!";return c&&(d=e.equalCoords(this.scopeOrModelVal("coords",f,a),this.scopeOrModelVal("coords",f,b)),!d)?d:d=_.every(_.without(this["interface"].scopeKeys,"coords"),function(c){return function(d){return c.scopeOrModelVal(f[d],f,a)===c.scopeOrModelVal(f[d],f,b)}}(this))},f.prototype.setIdKey=function(a){return this.idKey=null!=a.idKey?a.idKey:this.defaultIdKey},f.prototype.setVal=function(a,b,c){var d;return d=this.modelOrKey(a,b),d=c,a},f.prototype.modelOrKey=function(a,b){return null!=b?"self"!==b?e.getPath(a,b):a:void 0},f.prototype.getProp=function(a,b,c){return this.scopeOrModelVal(a,b,c)},f.prototype.getChanges=function(a,b,c){var d,e,f;c&&(b=_.pick(b,c),a=_.pick(a,c)),e={},f={},d={};for(f in a)b&&b[f]===a[f]||(_.isArray(a[f])?e[f]=a[f]:_.isObject(a[f])?(d=this.getChanges(a[f],b?b[f]:null),_.isEmpty(d)||(e[f]=d)):e[f]=a[f]);return e},f.prototype.scopeOrModelVal=function(a,b,c,d){var e,f,g,h;return null==d&&(d=!1),e=function(a,b,c){return null==c&&(c=!1),c?{isScope:a,value:b}:b},h=_.get(b,a),_.isFunction(h)?e(!0,h(c),d):_.isObject(h)?e(!0,h,d):_.isString(h)?(f=h,g=f?"self"===f?c:_.get(c,f):_.get(c,a),_.isFunction(g)?e(!1,g(),d):e(!1,g,d)):e(!0,h,d)},f.prototype.setChildScope=function(a,b,c){var d,e,f,g;for(e in a)f=a[e],d=this.scopeOrModelVal(f,b,c,!0),null!=(null!=d?d.value:void 0)&&(g=d.value,g!==b[f]&&(b[f]=g));return b.model=c},f.prototype.onDestroy=function(a){},f.prototype.destroy=function(a){var b;return null==a&&(a=!1),null==this.scope||(null!=(b=this.scope)?b.$$destroyed:void 0)||!this.needToManualDestroy&&!a?this.clean():this.scope.$destroy()},f.prototype.updateChild=function(a,b){return null==b[this.idKey]?void this.$log.error("Model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):a.updateModel(b)},f.prototype.modelsLength=function(a){var c,d;return null==a&&(a=void 0),c=0,d=a?a:this.scope.models,null==d?c:c=b.isArray(d)||null!=d.length?d.length:Object.keys(d).length},f}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapModelsWatcher",["uiGmapLogger","uiGmap_async","$q","uiGmapPromise",function(a,b,c,d){return{didQueueInitPromise:function(a,c){return 0===c.models.length?(b.promiseLock(a,d.promiseTypes.init,null,null,function(a){return function(){return d.resolve()}}(this)),!0):!1},figureOutState:function(b,c,d,e,f){var g,h,i,j,k;return g=[],i={},j=[],k=[],c.models.forEach(function(f){var h;return null==f[b]?a.error(" id missing for model #{m.toString()},\ncan not use do comparison/insertion"):(i[f[b]]={},null==d.get(f[b])?g.push(f):(h=d.get(f[b]),e(f,h.clonedModel,c)?void 0:k.push({model:f,child:h})))}),h=d.values(),h.forEach(function(c){var d;return null==c?void a.error("child undefined in ModelsWatcher."):null==c.model?void a.error("child.model undefined in ModelsWatcher."):(d=c.model[b],null==i[d]?j.push(c):void 0)}),{adds:g,removals:j,updates:k}}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapPromise",["$q","$timeout","uiGmapLogger",function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;return l={create:"create",update:"update","delete":"delete",init:"init"},k={IN_PROGRESS:0,RESOLVED:1,REJECTED:2},n=function(){var a;return a={},a[""+k.IN_PROGRESS]="in-progress",a[""+k.RESOLVED]="resolved",a[""+k.REJECTED]="rejected",a}(),g=function(a){return a.$$state?a.$$state.status===k.IN_PROGRESS:a.hasOwnProperty("$$v")?void 0:!0},h=function(a){return a.$$state?a.$$state.status===k.RESOLVED:a.hasOwnProperty("$$v")?!0:void 0},j=function(a){return n[a]||"done w error"},d=function(b){var c,d,e;return c=a.defer(),d=a.all([b,c.promise]),e=a.defer(),b.then(c.resolve,function(){},function(a){return c.notify(a),e.notify(a)}),d.then(function(a){return e.resolve(a[0]||a[1])},function(a){return e.reject(a)}),e.promise.cancel=function(a){return null==a&&(a="canceled"),c.reject(a)},e.promise.notify=function(a){return null==a&&(a="cancel safe"),e.notify(a),b.hasOwnProperty("notify")?b.notify(a):void 0},null!=b.promiseType&&(e.promise.promiseType=b.promiseType),e.promise},e=function(a,b){return{promise:a,promiseType:b}},f=function(){return a.defer()},m=function(){var b;return b=a.defer(),b.resolve.apply(void 0,arguments),b.promise},i=function(d){var e;return _.isFunction(d)?(e=a.defer(),b(function(){var a;return a=d(),e.resolve(a)}),e.promise):void c.error("uiGmapPromise.promise() only accepts functions")},{defer:f,promise:i,resolve:m,promiseTypes:l,isInProgress:g,isResolved:h,promiseStatus:j,ExposedPromise:d,SniffedPromise:e}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapPropMap",function(){var b;return b=function(){function b(){this.removeAll=a(this.removeAll,this),this.slice=a(this.slice,this),this.push=a(this.push,this),this.keys=a(this.keys,this),this.values=a(this.values,this),this.remove=a(this.remove,this),this.put=a(this.put,this),this.stateChanged=a(this.stateChanged,this),this.get=a(this.get,this),this.length=0,this.dict={},this.didValsStateChange=!1,this.didKeysStateChange=!1,this.allVals=[],this.allKeys=[]}return b.prototype.get=function(a){return this.dict[a]},b.prototype.stateChanged=function(){return this.didValsStateChange=!0,this.didKeysStateChange=!0},b.prototype.put=function(a,b){return null==this.get(a)&&this.length++,this.stateChanged(),this.dict[a]=b},b.prototype.remove=function(a,b){var c;return null==b&&(b=!1),b&&!this.get(a)?void 0:(c=this.dict[a],delete this.dict[a],this.length--,this.stateChanged(),c)},b.prototype.valuesOrKeys=function(a){var b,c;return null==a&&(a="Keys"),this["did"+a+"StateChange"]?(c=[],b=[],_.each(this.dict,function(a,d){return c.push(a),b.push(d)}),this.didKeysStateChange=!1,this.didValsStateChange=!1,this.allVals=c,this.allKeys=b,this["all"+a]):this["all"+a]},b.prototype.values=function(){return this.valuesOrKeys("Vals")},b.prototype.keys=function(){return this.valuesOrKeys()},b.prototype.push=function(a,b){return null==b&&(b="key"),this.put(a[b],a)},b.prototype.slice=function(){return this.keys().map(function(a){return function(b){return a.remove(b)}}(this))},b.prototype.removeAll=function(){return this.slice()},b.prototype.each=function(a){return _.each(this.dict,function(b,c){return a(b)})},b.prototype.map=function(a){return _.map(this.dict,function(b,c){return a(b)})},b}()})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapPropertyAction",["uiGmapLogger",function(a){var b;return b=function(a){return this.setIfChange=function(b,c){var d;return d=this.exp,_.isEqual(c,b)?void 0:a(d,b)},this.sic=this.setIfChange,this}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapClustererMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap","uiGmapEventsHelper",function(c,d,e,f){var g;return g=function(){function g(b,d,f,h){null==d&&(d={}),this.opt_options=null!=f?f:{},this.opt_events=h,this.checkSync=a(this.checkSync,this),this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.destroy=a(this.destroy,this),this.attachEvents=a(this.attachEvents,this),this.clear=a(this.clear,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=g.type,this.clusterer=new NgMapMarkerClusterer(b,d,this.opt_options),this.propMapGMarkers=new e,this.attachEvents(this.opt_events,"opt_events"),this.clusterer.setIgnoreHidden(!0),this.noDrawOnSingleAddRemoves=!0,c.info(this)}return g.type="ClustererMarkerManager",g.prototype.checkKey=function(a){var b;return null==a.key?(b="gMarker.key undefined and it is REQUIRED!!",c.error(b)):void 0},g.prototype.add=function(a){return this.checkKey(a),this.clusterer.addMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.put(a.key,a),this.checkSync()},g.prototype.update=function(a){return this.remove(a),this.add(a)},g.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},g.prototype.remove=function(a){var b;return this.checkKey(a),b=this.propMapGMarkers.get(a.key),b&&(this.clusterer.removeMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.remove(a.key)),this.checkSync()},g.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},g.prototype.draw=function(){return this.clusterer.repaint()},g.prototype.clear=function(){return this.removeMany(this.getGMarkers()),this.clusterer.repaint()},g.prototype.attachEvents=function(a,d){var e,f,g;if(this.listeners=[],b.isDefined(a)&&null!=a&&b.isObject(a)){g=[];for(f in a)e=a[f],a.hasOwnProperty(f)&&b.isFunction(a[f])?(c.info(d+": Attaching event: "+f+" to clusterer"),g.push(this.listeners.push(google.maps.event.addListener(this.clusterer,f,a[f])))):g.push(void 0);return g}},g.prototype.clearEvents=function(){return f.removeEvents(this.listeners),this.listeners=[]},g.prototype.destroy=function(){return this.clearEvents(),this.clear()},g.prototype.fit=function(){return d.fit(this.getGMarkers(),this.clusterer.getMap())},g.prototype.getGMarkers=function(){return this.clusterer.getMarkers().values()},g.prototype.checkSync=function(){},g}()}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap",function(b,c,d){var e;return e=function(){function e(c,f,g){this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.handleOptDraw=a(this.handleOptDraw,this),this.clear=a(this.clear,this),this.destroy=a(this.destroy,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=e.type,this.gMap=c,this.gMarkers=new d,this.$log=b,this.$log.info(this)}return e.type="MarkerManager",e.prototype.add=function(a,c){var d,e;if(null==c&&(c=!0),null==a.key)throw e="gMarker.key undefined and it is REQUIRED!!",b.error(e),e;return d=this.gMarkers.get(a.key),d?void 0:(this.handleOptDraw(a,c,!0),this.gMarkers.put(a.key,a))},e.prototype.update=function(a,b){return null==b&&(b=!0),this.remove(a,b),this.add(a,b)},e.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},e.prototype.remove=function(a,b){return null==b&&(b=!0),this.handleOptDraw(a,b,!1),this.gMarkers.get(a.key)?this.gMarkers.remove(a.key):void 0},e.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},e.prototype.draw=function(){var a;return a=[],this.gMarkers.each(function(b){return function(c){return c.isDrawn?void 0:c.doAdd?(c.setMap(b.gMap),c.isDrawn=!0):a.push(c)}}(this)),a.forEach(function(a){return function(b){return b.isDrawn=!1,a.remove(b,!0)}}(this))},e.prototype.destroy=function(){return this.clear()},e.prototype.clear=function(){return this.gMarkers.each(function(a){return a.setMap(null)}),delete this.gMarkers,this.gMarkers=new d},e.prototype.handleOptDraw=function(a,b,c){return b===!0?(c?a.setMap(this.gMap):a.setMap(null),a.isDrawn=!0):(a.isDrawn=!1,a.doAdd=c)},e.prototype.fit=function(){return c.fit(this.getGMarkers(),this.gMap)},e.prototype.getGMarkers=function(){return this.gMarkers.values()},e}()}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapSpiderfierMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap","uiGmapMarkerSpiderfier",function(c,d,e,f){var g;return g=function(){
function g(b,d,h,i,j){null==d&&(d={}),this.opt_options=null!=h?h:{},this.opt_events=i,this.scope=j,this.checkSync=a(this.checkSync,this),this.isSpiderfied=a(this.isSpiderfied,this),this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.destroy=a(this.destroy,this),this.attachEvents=a(this.attachEvents,this),this.clear=a(this.clear,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=g.type,this.markerSpiderfier=new f(b,this.opt_options),this.propMapGMarkers=new e,this.attachEvents(this.opt_events,"opt_events"),this.noDrawOnSingleAddRemoves=!0,c.info(this)}return g.type="SpiderfierMarkerManager",g.prototype.checkKey=function(a){var b;return null==a.key?(b="gMarker.key undefined and it is REQUIRED!!",c.error(b)):void 0},g.prototype.add=function(a){return a.setMap(this.markerSpiderfier.map),this.checkKey(a),this.markerSpiderfier.addMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.put(a.key,a),this.checkSync()},g.prototype.update=function(a){return this.remove(a),this.add(a)},g.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},g.prototype.remove=function(a){var b;return this.checkKey(a),b=this.propMapGMarkers.get(a.key),b&&(a.setMap(null),this.markerSpiderfier.removeMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.remove(a.key)),this.checkSync()},g.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},g.prototype.draw=function(){},g.prototype.clear=function(){return this.removeMany(this.getGMarkers())},g.prototype.attachEvents=function(a,d){return b.isDefined(a)&&null!=a&&b.isObject(a)?_.each(a,function(e){return function(f,g){return a.hasOwnProperty(g)&&b.isFunction(a[g])?(c.info(d+": Attaching event: "+g+" to markerSpiderfier"),e.markerSpiderfier.addListener(g,function(){return"spiderfy"===g||"unspiderfy"===g?e.scope.$evalAsync(a[g].apply(a,arguments)):e.scope.$evalAsync(a[g].apply(a,[arguments[0],g,arguments[0].model,arguments]))})):void 0}}(this)):void 0},g.prototype.clearEvents=function(a,d){var e,f;if(b.isDefined(a)&&null!=a&&b.isObject(a))for(f in a)e=a[f],a.hasOwnProperty(f)&&b.isFunction(a[f])&&(c.info(d+": Clearing event: "+f+" to markerSpiderfier"),this.markerSpiderfier.clearListeners(f))},g.prototype.destroy=function(){return this.clearEvents(this.opt_events,"opt_events"),this.clear()},g.prototype.fit=function(){return d.fit(this.getGMarkers(),this.markerSpiderfier.map)},g.prototype.getGMarkers=function(){return this.markerSpiderfier.getMarkers()},g.prototype.isSpiderfied=function(){return _.find(this.getGMarkers(),function(a){return null!=(null!=a?a._omsData:void 0)})},g.prototype.checkSync=function(){},g}()}])}.call(this),function(){b.module("uiGmapgoogle-maps").factory("uiGmapadd-events",["$timeout",function(a){var c,d;return c=function(b,c,d){return google.maps.event.addListener(b,c,function(){return d.apply(this,arguments),a(function(){},!0)})},d=function(a,d,e){var f;return e?c(a,d,e):(f=[],b.forEach(d,function(b,d){return f.push(c(a,d,b))}),function(){return b.forEach(f,function(a){return google.maps.event.removeListener(a)}),f=null})}}])}.call(this),function(){b.module("uiGmapgoogle-maps").factory("uiGmaparray-sync",["uiGmapadd-events",function(a){return function(c,d,e,f){var g,h,i,j,k,l,m,n,o;return j=!1,n=d.$eval(e),d["static"]||(k={set_at:function(a){var b;if(!j&&(b=c.getAt(a)))return b.lng&&b.lat?(n[a].latitude=b.lat(),n[a].longitude=b.lng()):n[a]=b},insert_at:function(a){var b;if(!j&&(b=c.getAt(a)))return b.lng&&b.lat?n.splice(a,0,{latitude:b.lat(),longitude:b.lng()}):n.splice(a,0,b)},remove_at:function(a){return j?void 0:n.splice(a,1)}},"Polygon"===n.type?g=n.coordinates[0]:"LineString"===n.type&&(g=n.coordinates),h={set_at:function(a){var b;if(!j&&(b=c.getAt(a),b&&b.lng&&b.lat))return g[a][1]=b.lat(),g[a][0]=b.lng()},insert_at:function(a){var b;if(!j&&(b=c.getAt(a),b&&b.lng&&b.lat))return g.splice(a,0,[b.lng(),b.lat()])},remove_at:function(a){return j?void 0:g.splice(a,1)}},m=a(c,b.isUndefined(n.type)?k:h)),l=function(a){var b,d,e,g,h,i,k,l;if(j=!0,i=c,b=!1,a){for(d=0,k=i.getLength(),g=a.length,e=Math.min(k,g),h=void 0;e>d;)l=i.getAt(d),h=a[d],"function"==typeof h.equals?h.equals(l)||(i.setAt(d,h),b=!0):(l.lat()!==h.latitude||l.lng()!==h.longitude)&&(i.setAt(d,new google.maps.LatLng(h.latitude,h.longitude)),b=!0),d++;for(;g>d;)h=a[d],"function"==typeof h.lat&&"function"==typeof h.lng?i.push(h):i.push(new google.maps.LatLng(h.latitude,h.longitude)),b=!0,d++;for(;k>d;)i.pop(),b=!0,d++}return j=!1,b?f(i):void 0},i=function(a){var b,d,e,g,h,i,k,l,m;if(j=!0,k=c,d=!1,a){for("Polygon"===n.type?b=a.coordinates[0]:"LineString"===n.type&&(b=a.coordinates),e=0,l=k.getLength(),h=b.length,g=Math.min(l,h),i=void 0;g>e;)m=k.getAt(e),i=b[e],(m.lat()!==i[1]||m.lng()!==i[0])&&(k.setAt(e,new google.maps.LatLng(i[1],i[0])),d=!0),e++;for(;h>e;)i=b[e],k.push(new google.maps.LatLng(i[1],i[0])),d=!0,e++;for(;l>e;)k.pop(),d=!0,e++}return j=!1,d?f(k):void 0},d["static"]||(o=b.isUndefined(n.type)?d.$watchCollection(e,l):d.$watch(e,i,!0)),function(){return m&&(m(),m=null),o?(o(),o=null):void 0}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapChromeFixes",["$timeout",function(a){return{maybeRepaint:function(b){return b?(b.style.opacity=.9,a(function(){return b.style.opacity=1})):void 0}}}])}.call(this),function(){b.module("uiGmapgoogle-maps").service("uiGmapObjectIterators",function(){var a,b,c,d;return a=["length","forEach","map"],b=[],c=function(b){return b.forEach=function(c){return _.each(_.omit(b,a),function(a){return _.isFunction(a)?void 0:c(a)})},b},b.push(c),d=function(b){return b.map=function(c){return _.map(_.omit(b,a),function(a){return _.isFunction(a)?void 0:c(a)})},b},b.push(d),{slapMap:d,slapForEach:c,slapAll:function(a){return b.forEach(function(b){return b(a)}),a}}})}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.options.builders").service("uiGmapCommonOptionsBuilder",["uiGmapBaseObject","uiGmapLogger","uiGmapModelKey",function(d,e,f){var g;return g=function(d){function f(){return this.watchProps=a(this.watchProps,this),this.buildOpts=a(this.buildOpts,this),f.__super__.constructor.apply(this,arguments)}return c(f,d),f.prototype.props=["clickable","draggable","editable","visible",{prop:"stroke",isColl:!0}],f.prototype.getCorrectModel=function(a){return b.isDefined(null!=a?a.model:void 0)?a.model:a},f.prototype.buildOpts=function(a,c,d){var f,g,h;return null==a&&(a={}),null==d&&(d={}),this.scope?this.map?(f=this.getCorrectModel(this.scope),h=this.scopeOrModelVal("stroke",this.scope,f),g=b.extend(a,this.DEFAULTS,{map:this.map,strokeColor:null!=h?h.color:void 0,strokeOpacity:null!=h?h.opacity:void 0,strokeWeight:null!=h?h.weight:void 0}),b.forEach(b.extend(d,{clickable:!0,draggable:!1,editable:!1,"static":!1,fit:!1,visible:!0,zIndex:0,icons:[]}),function(a){return function(d,e){var h;return h=c?c[e]:a.scopeOrModelVal(e,a.scope,f),b.isUndefined(h)?g[e]=d:g[e]=f[e]}}(this)),g["static"]&&(g.editable=!1),g):void e.error("this.map not defined in CommonOptionsBuilder can not buildOpts"):void e.error("this.scope not defined in CommonOptionsBuilder can not buildOpts")},f.prototype.watchProps=function(a){return null==a&&(a=this.props),a.forEach(function(a){return function(b){return null!=a.attrs[b]||null!=a.attrs[null!=b?b.prop:void 0]?(null!=b?b.isColl:void 0)?a.scope.$watchCollection(b.prop,a.setMyOptions):a.scope.$watch(b,a.setMyOptions):void 0}}(this))},f}(f)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.options.builders").factory("uiGmapPolylineOptionsBuilder",["uiGmapCommonOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{path:a},b,{geodesic:!1})},c}(b)}]).factory("uiGmapShapeOptionsBuilder",["uiGmapCommonOptionsBuilder",function(c){var d;return d=function(c){function d(){return d.__super__.constructor.apply(this,arguments)}return a(d,c),d.prototype.buildOpts=function(a,c,e){var f,g;return g=this.getCorrectModel(this.scope),f=c?c.fill:this.scopeOrModelVal("fill",this.scope,g),a=b.extend(a,{fillColor:null!=f?f.color:void 0,fillOpacity:null!=f?f.opacity:void 0}),d.__super__.buildOpts.call(this,a,c,e)},d}(c)}]).factory("uiGmapPolygonOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{path:a},b,{geodesic:!1})},c}(b)}]).factory("uiGmapRectangleOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{bounds:a},b)},c}(b)}]).factory("uiGmapCircleOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b,d){return c.__super__.buildOpts.call(this,{center:a,radius:b},d)},c}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.options").service("uiGmapMarkerOptions",["uiGmapLogger","uiGmapGmapUtil",function(a,c){return _.extend(c,{createOptions:function(a,d,e,f){var g;return null==e&&(e={}),g=b.extend({},e,{position:null!=e.position?e.position:c.getCoords(a),visible:null!=e.visible?e.visible:c.validateCoords(a)}),(null!=e.icon||null!=d)&&(g=b.extend(g,{icon:null!=e.icon?e.icon:d})),null!=f&&(g.map=f),g},isLabel:function(a){return null==a?!1:null!=a.labelContent||null!=a.labelAnchor||null!=a.labelClass||null!=a.labelStyle||null!=a.labelVisible}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapBasePolyChildModel",["uiGmapLogger","$timeout","uiGmaparray-sync","uiGmapGmapUtil","uiGmapEventsHelper",function(d,e,f,g,h){return function(d,e){var i;return i=function(d){function i(c,d,g,i,j,k){var l;this.scope=c,this.attrs=d,this.map=g,this.defaults=i,this.model=j,this.clean=a(this.clean,this),this.clonedModel=_.clone(this.model,!0),this.isDragging=!1,this.internalEvents={dragend:function(a){return function(){return _.defer(function(){return a.isDragging=!1})}}(this),dragstart:function(a){return function(){return a.isDragging=!0}}(this)},l=function(a){return function(){var c;if(!a.isDragging)return a.pathPoints=a.convertPathPoints(a.scope.path),null!=a.gObject&&a.clean(),null!=a.scope.model&&(c=a.scope),a.pathPoints.length>0&&(a.gObject=e(a.buildOpts(a.pathPoints,c))),a.gObject?(f(a.gObject.getPath(),a.scope,"path",function(b){return a.pathPoints=b,null!=k?k():void 0}),b.isDefined(a.scope.events)&&b.isObject(a.scope.events)&&(a.listeners=a.model?h.setEvents(a.gObject,a.scope,a.model):h.setEvents(a.gObject,a.scope,a.scope)),a.internalListeners=a.model?h.setEvents(a.gObject,{events:a.internalEvents},a.model):h.setEvents(a.gObject,{events:a.internalEvents},a.scope)):void 0}}(this),l(),this.scope.$watch("path",function(a){return function(b,c){return _.isEqual(b,c)&&a.gObject?void 0:l()}}(this),!0),!this.scope["static"]&&b.isDefined(this.scope.editable)&&this.scope.$watch("editable",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setEditable(b):void 0):void 0}}(this),!0),b.isDefined(this.scope.draggable)&&this.scope.$watch("draggable",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setDraggable(b):void 0):void 0}}(this),!0),b.isDefined(this.scope.visible)&&this.scope.$watch("visible",function(a){return function(b,c){var d;return b!==c&&(b=!a.isFalse(b)),null!=(d=a.gObject)?d.setVisible(b):void 0}}(this),!0),b.isDefined(this.scope.geodesic)&&this.scope.$watch("geodesic",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.weight)&&this.scope.$watch("stroke.weight",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.color)&&this.scope.$watch("stroke.color",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.opacity)&&this.scope.$watch("stroke.opacity",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.icons)&&this.scope.$watch("icons",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),this.scope.$on("$destroy",function(a){return function(){return a.clean(),a.scope=null}}(this)),b.isDefined(this.scope.fill)&&b.isDefined(this.scope.fill.color)&&this.scope.$watch("fill.color",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this)),b.isDefined(this.scope.fill)&&b.isDefined(this.scope.fill.opacity)&&this.scope.$watch("fill.opacity",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this)),b.isDefined(this.scope.zIndex)&&this.scope.$watch("zIndex",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this))}return c(i,d),i.include(g),i.prototype.clean=function(){var a;return h.removeEvents(this.listeners),h.removeEvents(this.internalListeners),null!=(a=this.gObject)&&a.setMap(null),this.gObject=null},i}(d)}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapDrawFreeHandChildModel",["uiGmapLogger","$q",function(a,b){var c,d;return c=function(a,b,c){var d,e;return e=new google.maps.Polyline({map:a,clickable:!1}),d=google.maps.event.addListener(a,"mousemove",function(a){return e.getPath().push(a.latLng)}),void google.maps.event.addListenerOnce(a,"mouseup",function(f){var g;return google.maps.event.removeListener(d),g=e.getPath(),e.setMap(null),b.push(new google.maps.Polygon({map:a,path:g})),e=null,google.maps.event.clearListeners(a.getDiv(),"mousedown"),c()})},d=function(d,e){var f,g;return this.map=d,f=function(b){return function(){var c;return c={draggable:!1,disableDefaultUI:!0,scrollwheel:!1,disableDoubleClickZoom:!1},a.info("disabling map move"),b.map.setOptions(c)}}(this),g=function(a){return function(){var b,c;return b={draggable:!0,disableDefaultUI:!1,scrollwheel:!0,disableDoubleClickZoom:!0},null!=(c=a.deferred)&&c.resolve(),_.defer(function(){return a.map.setOptions(_.extend(b,e.options))})}}(this),this.engage=function(d){return function(e){return d.polys=e,d.deferred=b.defer(),f(),a.info("DrawFreeHandChildModel is engaged (drawing)."),google.maps.event.addDomListener(d.map.getDiv(),"mousedown",function(a){return c(d.map,d.polys,g)}),d.deferred.promise}}(this),this}}])}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapMarkerChildModel",["uiGmapModelKey","uiGmapGmapUtil","uiGmapLogger","uiGmapEventsHelper","uiGmapPropertyAction","uiGmapMarkerOptions","uiGmapIMarker","uiGmapMarkerManager","uiGmapPromise",function(b,e,f,g,h,i,j,k,l){var m;return m=function(b){function m(a,b,d,e,g,i,j,k,o,p){var q;this.model=b,this.keys=d,this.gMap=e,this.defaults=g,this.doClick=i,this.gManager=j,this.doDrawSelf=null!=k?k:!0,this.trackModel=null!=o?o:!0,this.needRedraw=null!=p?p:!1,this.internalEvents=c(this.internalEvents,this),this.setLabelOptions=c(this.setLabelOptions,this),this.setOptions=c(this.setOptions,this),this.setIcon=c(this.setIcon,this),this.setCoords=c(this.setCoords,this),this.isNotValid=c(this.isNotValid,this),this.maybeSetScopeValue=c(this.maybeSetScopeValue,this),this.createMarker=c(this.createMarker,this),this.setMyScope=c(this.setMyScope,this),this.updateModel=c(this.updateModel,this),this.handleModelChanges=c(this.handleModelChanges,this),this.destroy=c(this.destroy,this),this.clonedModel=_.clone(this.model,!0),this.deferred=l.defer(),_.each(this.keys,function(a){return function(b,c){var d;return d=a.keys[c],null!=d&&!_.isFunction(d)&&_.isString(d)?a[c+"Key"]=d:void 0}}(this)),this.idKey=this.idKeyKey||"id",null!=this.model[this.idKey]&&(this.id=this.model[this.idKey]),m.__super__.constructor.call(this,a),this.scope.getGMarker=function(a){return function(){return a.gObject}}(this),this.firstTime=!0,this.trackModel?(this.scope.model=this.model,this.scope.$watch("model",function(a){return function(b,c){return b!==c?a.handleModelChanges(b,c):void 0}}(this),!0)):(q=new h(function(b){return function(c,d){return b.firstTime?void 0:b.setMyScope(c,a)}}(this),!1),_.each(this.keys,function(b,c){return a.$watch(c,q.sic,!0)})),this.scope.$on("$destroy",function(a){return function(){return n(a)}}(this)),this.createMarker(this.model),f.info(this)}var n;return d(m,b),m.include(e),m.include(g),m.include(i),n=function(a){return null!=(null!=a?a.gObject:void 0)&&(a.removeEvents(a.externalListeners),a.removeEvents(a.internalListeners),null!=a?a.gObject:void 0)?(a.removeFromManager&&a.gManager.remove(a.gObject),a.gObject.setMap(null),a.gObject=null):void 0},m.prototype.destroy=function(a){return null==a&&(a=!0),this.removeFromManager=a,this.scope.$destroy()},m.prototype.handleModelChanges=function(a,b){var c,d,e;return c=this.getChanges(a,b,j.keys),this.firstTime?void 0:(d=0,e=_.keys(c).length,_.each(c,function(c){return function(f,g){var h;return d+=1,h=e===d,c.setMyScope(g,a,b,!1,!0,h),c.needRedraw=!0}}(this)))},m.prototype.updateModel=function(a){return this.clonedModel=_.clone(a,!0),this.setMyScope("all",a,this.model)},m.prototype.renderGMarker=function(b,c){var d,e,g;if(null==b&&(b=!0),d=this.getProp("coords",this.scope,this.model),null!=(null!=(g=this.gManager)?g.isSpiderfied:void 0)&&(e=this.gManager.isSpiderfied()),null!=d){if(!this.validateCoords(d))return void f.debug("MarkerChild does not have coords yet. They may be defined later.");if(null!=c&&c(),b&&this.gObject&&this.gManager.add(this.gObject),e)return this.gManager.markerSpiderfier.spiderListener(this.gObject,a.event)}else if(b&&this.gObject)return this.gManager.remove(this.gObject)},m.prototype.setMyScope=function(a,b,c,d,e){var f;switch(null==c&&(c=void 0),null==d&&(d=!1),null==e&&(e=!0),null==b?b=this.model:this.model=b,this.gObject||(this.setOptions(this.scope,e),f=!0),a){case"all":return _.each(this.keys,function(a){return function(f,g){return a.setMyScope(g,b,c,d,e)}}(this));case"icon":return this.maybeSetScopeValue("icon",b,c,this.iconKey,this.evalModelHandle,d,this.setIcon,e);case"coords":return this.maybeSetScopeValue("coords",b,c,this.coordsKey,this.evalModelHandle,d,this.setCoords,e);case"options":if(!f)return this.createMarker(b,c,d,e)}},m.prototype.createMarker=function(a,b,c,d){return null==b&&(b=void 0),null==c&&(c=!1),null==d&&(d=!0),this.maybeSetScopeValue("options",a,b,this.optionsKey,this.evalModelHandle,c,this.setOptions,d),this.firstTime=!1},m.prototype.maybeSetScopeValue=function(a,b,c,d,e,f,g,h){return null==g&&(g=void 0),null==h&&(h=!0),null!=g?g(this.scope,h):void 0},m.doDrawSelf&&doDraw&&m.gManager.draw(),m.prototype.isNotValid=function(a,b){var c,d;return null==b&&(b=!0),d=b?void 0===this.gObject:!1,c=this.trackModel?!1:a.$id!==this.scope.$id,c||d},m.prototype.setCoords=function(a,b){return null==b&&(b=!0),this.isNotValid(a)||null==this.gObject?void 0:this.renderGMarker(b,function(b){return function(){var c,d,e;return d=b.getProp("coords",a,b.model),c=b.getCoords(d),e=b.gObject.getPosition(),null==e||null==c||c.lng()!==e.lng()||c.lat()!==e.lat()?(b.gObject.setPosition(c),b.gObject.setVisible(b.validateCoords(d))):void 0}}(this))},m.prototype.setIcon=function(a,b){return null==b&&(b=!0),this.isNotValid(a)||null==this.gObject?void 0:this.renderGMarker(b,function(b){return function(){var c,d,e;return e=b.gObject.getIcon(),d=b.getProp("icon",a,b.model),e!==d?(b.gObject.setIcon(d),c=b.getProp("coords",a,b.model),b.gObject.setPosition(b.getCoords(c)),b.gObject.setVisible(b.validateCoords(c))):void 0}}(this))},m.prototype.setOptions=function(a,b){var c;if(null==b&&(b=!0),!this.isNotValid(a,!1)){if(this.renderGMarker(b,function(b){return function(){var c,d,e;return d=b.getProp("coords",a,b.model),e=b.getProp("icon",a,b.model),c=b.getProp("options",a,b.model),b.opts=b.createOptions(d,e,c),b.isLabel(b.gObject)!==b.isLabel(b.opts)&&null!=b.gObject&&(b.gManager.remove(b.gObject),b.gObject=void 0),null!=b.gObject&&b.gObject.setOptions(b.setLabelOptions(b.opts)),b.gObject||(b.isLabel(b.opts)?b.gObject=new MarkerWithLabel(b.setLabelOptions(b.opts)):b.opts.content?(b.gObject=new RichMarker(b.opts),b.gObject.getIcon=b.gObject.getContent,b.gObject.setIcon=b.gObject.setContent):b.gObject=new google.maps.Marker(b.opts),_.extend(b.gObject,{model:b.model})),b.externalListeners&&b.removeEvents(b.externalListeners),b.internalListeners&&b.removeEvents(b.internalListeners),b.externalListeners=b.setEvents(b.gObject,b.scope,b.model,["dragend"]),b.internalListeners=b.setEvents(b.gObject,{events:b.internalEvents(),$evalAsync:function(){}},b.model),null!=b.id?b.gObject.key=b.id:void 0}}(this)),this.gObject&&(this.gObject.getMap()||this.gManager.type!==k.type))this.deferred.resolve(this.gObject);else{if(!this.gObject)return this.deferred.reject("gObject is null");(null!=(c=this.gObject)?c.getMap():0)&&this.gManager.type===k.type||(f.debug("gObject has no map yet"),this.deferred.resolve(this.gObject))}return this.model[this.fitKey]?this.gManager.fit():void 0}},m.prototype.setLabelOptions=function(a){return a.labelAnchor&&(a.labelAnchor=this.getLabelPositionPoint(a.labelAnchor)),a},m.prototype.internalEvents=function(){return{dragend:function(a){return function(b,c,d,e){var f,g,h;return g=a.trackModel?a.scope.model:a.model,h=a.setCoordsFromEvent(a.modelOrKey(g,a.coordsKey),a.gObject.getPosition()),g=a.setVal(d,a.coordsKey,h),f=a.scope.events,null!=(null!=f?f.dragend:void 0)&&f.dragend(b,c,g,e),a.scope.$apply()}}(this),click:function(a){return function(b,c,d,e){var f;return f=a.getProp("click",a.scope,a.model),a.doClick&&null!=f?a.scope.$evalAsync(f(b,c,a.model,e)):void 0}}(this)}},m}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygonChildModel",["uiGmapBasePolyChildModel","uiGmapPolygonOptionsBuilder",function(b,c){var d,e,f;return f=function(a){return new google.maps.Polygon(a)},e=new b(c,f),d=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c}(e)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolylineChildModel",["uiGmapBasePolyChildModel","uiGmapPolylineOptionsBuilder",function(b,c){var d,e,f;return f=function(a){return new google.maps.Polyline(a)},e=b(c,f),d=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c}(e)}])}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapWindowChildModel",["uiGmapBaseObject","uiGmapGmapUtil","uiGmapLogger","$compile","$http","$templateCache","uiGmapChromeFixes","uiGmapEventsHelper",function(e,f,g,h,i,j,k,l){var m;return m=function(e){function m(a,b,d,e,f,h,i,j,k){var l;this.model=a,this.scope=b,this.opts=d,this.isIconVisibleOnClick=e,this.mapCtrl=f,this.markerScope=h,this.element=i,this.needToManualDestroy=null!=j?j:!1,this.markerIsVisibleAfterWindowClose=null!=k?k:!0,this.updateModel=c(this.updateModel,this),this.destroy=c(this.destroy,this),this.remove=c(this.remove,this),this.getLatestPosition=c(this.getLatestPosition,this),this.hideWindow=c(this.hideWindow,this),this.showWindow=c(this.showWindow,this),this.handleClick=c(this.handleClick,this),this.watchOptions=c(this.watchOptions,this),this.watchCoords=c(this.watchCoords,this),this.createGWin=c(this.createGWin,this),this.watchElement=c(this.watchElement,this),this.watchAndDoShow=c(this.watchAndDoShow,this),this.doShow=c(this.doShow,this),this.clonedModel=_.clone(this.model,!0),this.getGmarker=function(){var a,b;return null!=(null!=(a=this.markerScope)?a.getGMarker:void 0)&&null!=(b=this.markerScope)?b.getGMarker():void 0},this.listeners=[],this.createGWin(),l=this.getGmarker(),null!=l&&l.setClickable(!0),this.watchElement(),this.watchOptions(),this.watchCoords(),this.watchAndDoShow(),this.scope.$on("$destroy",function(a){return function(){return a.destroy()}}(this)),g.info(this)}return d(m,e),m.include(f),m.include(l),m.prototype.doShow=function(a){return this.scope.show===!0||a?this.showWindow():this.hideWindow()},m.prototype.watchAndDoShow=function(){return null!=this.model.show&&(this.scope.show=this.model.show),this.scope.$watch("show",this.doShow,!0),this.doShow()},m.prototype.watchElement=function(){return this.scope.$watch(function(a){return function(){var b,c;if(a.element||a.html)return a.html!==a.element.html()&&a.gObject?(null!=(b=a.opts)&&(b.content=void 0),c=a.gObject.isOpen(),a.remove(),a.createGWin(c)):void 0}}(this))},m.prototype.createGWin=function(b){var c,d,e,f,g;return null==b&&(b=!1),e=this.getGmarker(),d={},null!=this.opts&&(this.scope.coords&&(this.opts.position=this.getCoords(this.scope.coords)),d=this.opts),this.element&&(this.html=_.isObject(this.element)?this.element.html():this.element),c=this.scope.options?this.scope.options:d,this.opts=this.createWindowOptions(e,this.markerScope||this.scope,this.html,c),null!=this.opts?(this.gObject||(this.opts.boxClass&&a.InfoBox&&"function"==typeof a.InfoBox?this.gObject=new a.InfoBox(this.opts):this.gObject=new google.maps.InfoWindow(this.opts),this.listeners.push(google.maps.event.addListener(this.gObject,"domready",function(){return k.maybeRepaint(this.content)})),this.listeners.push(google.maps.event.addListener(this.gObject,"closeclick",function(a){return function(){return e&&(e.setAnimation(a.oldMarkerAnimation),a.markerIsVisibleAfterWindowClose&&_.delay(function(){return e.setVisible(!1),e.setVisible(a.markerIsVisibleAfterWindowClose)},250)),a.gObject.close(),a.model.show=!1,null!=a.scope.closeClick?a.scope.$evalAsync(a.scope.closeClick()):a.scope.$evalAsync()}}(this)))),this.gObject.setContent(this.opts.content),this.handleClick((null!=(f=this.scope)&&null!=(g=f.options)?g.forceClick:void 0)||b),this.doShow(this.gObject.isOpen())):void 0},m.prototype.watchCoords=function(){var a;return a=null!=this.markerScope?this.markerScope:this.scope,a.$watch("coords",function(a){return function(b,c){var d;if(b!==c){if(null==b)a.hideWindow();else if(!a.validateCoords(b))return void g.error("WindowChildMarker cannot render marker as scope.coords as no position on marker: "+JSON.stringify(a.model));if(d=a.getCoords(b),a.doShow(),a.gObject.setPosition(d),a.opts)return a.opts.position=d}}}(this),!0)},m.prototype.watchOptions=function(){return this.scope.$watch("options",function(a){return function(b,c){if(b!==c&&(a.opts=b,null!=a.gObject)){if(a.gObject.setOptions(a.opts),null!=a.opts.visible&&a.opts.visible)return a.showWindow();if(null!=a.opts.visible)return a.hideWindow()}}}(this),!0)},m.prototype.handleClick=function(a){var b,c;if(null!=this.gObject)return c=this.getGmarker(),b=function(a){return function(){return null==a.gObject&&a.createGWin(),a.showWindow(),null!=c?(a.initialMarkerVisibility=c.getVisible(),a.oldMarkerAnimation=c.getAnimation(),c.setVisible(a.isIconVisibleOnClick)):void 0}}(this),a&&b(),c?this.listeners=this.listeners.concat(this.setEvents(c,{events:{click:b}},this.model)):void 0},m.prototype.showWindow=function(){var a,c,d;return null!=this.gObject?(c=function(a){return function(){var b,c,d;if(!a.gObject.isOpen()){if(c=a.getGmarker(),null!=a.gObject&&null!=a.gObject.getPosition&&(d=a.gObject.getPosition()),c&&(d=c.getPosition()),!d)return;if(a.gObject.open(a.mapCtrl,c),b=a.gObject.isOpen(),a.model.show!==b)return a.model.show=b}}}(this),this.scope.templateUrl?i.get(this.scope.templateUrl,{cache:j}).then(function(a){return function(d){var e,f;return f=a.scope.$new(),b.isDefined(a.scope.templateParameter)&&(f.parameter=a.scope.templateParameter),e=h(d.data)(f),a.gObject.setContent(e[0]),c()}}(this)):this.scope.template?(d=this.scope.$new(),b.isDefined(this.scope.templateParameter)&&(d.parameter=this.scope.templateParameter),a=h(this.scope.template)(d),this.gObject.setContent(a[0]),c()):c()):void 0},m.prototype.hideWindow=function(){return null!=this.gObject&&this.gObject.isOpen()?this.gObject.close():void 0},m.prototype.getLatestPosition=function(a){var b;return b=this.getGmarker(),null==this.gObject||null==b||a?a?this.gObject.setPosition(a):void 0:this.gObject.setPosition(b.getPosition())},m.prototype.remove=function(){return this.hideWindow(),this.removeEvents(this.listeners),this.listeners.length=0,delete this.gObject,delete this.opts},m.prototype.destroy=function(a){var b;return null==a&&(a=!1),this.remove(),null==this.scope||(null!=(b=this.scope)?b.$$destroyed:void 0)||!this.needToManualDestroy&&!a?void 0:this.scope.$destroy()},m.prototype.updateModel=function(a){return this.clonedModel=_.clone(a,!0),_.extend(this.model,this.clonedModel)},m}(e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapBasePolysParentModel",["$timeout","uiGmapLogger","uiGmapModelKey","uiGmapModelsWatcher","uiGmapPropMap","uiGmap_async","uiGmapPromise","uiGmapFitHelper",function(d,e,f,g,h,i,j,k){return function(d,l,m){var n;return n=function(f){function n(b,c,f,g,i){this.element=c,this.attrs=f,this.gMap=g,this.defaults=i,this.maybeFit=a(this.maybeFit,this),this.createChild=a(this.createChild,this),this.pieceMeal=a(this.pieceMeal,this),this.createAllNew=a(this.createAllNew,this),this.watchIdKey=a(this.watchIdKey,this),this.createChildScopes=a(this.createChildScopes,this),
this.watchDestroy=a(this.watchDestroy,this),this.onDestroy=a(this.onDestroy,this),this.rebuildAll=a(this.rebuildAll,this),this.doINeedToWipe=a(this.doINeedToWipe,this),this.watchModels=a(this.watchModels,this),n.__super__.constructor.call(this,b),this["interface"]=d,this.$log=e,this.plurals=new h,_.each(d.scopeKeys,function(a){return function(b){return a[b+"Key"]=void 0}}(this)),this.models=void 0,this.firstTime=!0,this.$log.info(this),this.createChildScopes()}return c(n,f),n.include(g),n.prototype.watchModels=function(a){return a.$watch("models",function(b){return function(c,d){return c!==d?b.doINeedToWipe(c)||a.doRebuildAll?b.rebuildAll(a,!0,!0):b.createChildScopes(!1):void 0}}(this),!0)},n.prototype.doINeedToWipe=function(a){var b;return b=null!=a?0===a.length:!0,this.plurals.length>0&&b},n.prototype.rebuildAll=function(a,b,c){return this.onDestroy(c).then(function(a){return function(){return b?a.createChildScopes():void 0}}(this))},n.prototype.onDestroy=function(a){return n.__super__.onDestroy.call(this,this.scope),i.promiseLock(this,j.promiseTypes["delete"],void 0,void 0,function(a){return function(){return i.each(a.plurals.values(),function(a){return a.destroy(!0)},i.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){var b;return null!=(b=a.plurals)?b.removeAll():void 0})}}(this))},n.prototype.watchDestroy=function(a){return a.$on("$destroy",function(b){return function(){return b.rebuildAll(a,!1,!0)}}(this))},n.prototype.createChildScopes=function(a){return null==a&&(a=!0),b.isUndefined(this.scope.models)?void this.$log.error("No models to create "+m+"s from! I Need direct models!"):null!=this.gMap&&null!=this.scope.models?(this.watchIdKey(this.scope),a?this.createAllNew(this.scope,!1):this.pieceMeal(this.scope,!1)):void 0},n.prototype.watchIdKey=function(a){return this.setIdKey(a),a.$watch("idKey",function(b){return function(c,d){return c!==d&&null==c?(b.idKey=c,b.rebuildAll(a,!0,!0)):void 0}}(this))},n.prototype.createAllNew=function(a,b){var c;return null==b&&(b=!1),this.models=a.models,this.firstTime&&(this.watchModels(a),this.watchDestroy(a)),this.didQueueInitPromise(this,a)?void 0:(c=null,i.promiseLock(this,j.promiseTypes.create,"createAllNew",function(a){return c=a},function(b){return function(){return i.map(a.models,function(a){var d;return d=b.createChild(a,b.gMap),c&&(e.debug("createNew should fall through safely"),d.isEnabled=!1),d.pathPoints.getArray()},i.chunkSizeFrom(a.chunk)).then(function(a){return b.maybeFit(a),b.firstTime=!1})}}(this)))},n.prototype.pieceMeal=function(a,b){var c,d;return null==b&&(b=!0),a.$$destroyed?void 0:(c=null,d=null,this.models=a.models,null!=a&&this.modelsLength()&&this.plurals.length?i.promiseLock(this,j.promiseTypes.update,"pieceMeal",function(a){return c=a},function(b){return function(){return j.promise(function(){return b.figureOutState(b.idKey,a,b.plurals,b.modelKeyComparison)}).then(function(e){return d=e,d.updates.length&&i.each(d.updates,function(a){return _.extend(a.child.scope,a.model),a.child.model=a.model}),i.each(d.removals,function(a){return null!=a?(a.destroy(),b.plurals.remove(a.model[b.idKey]),c):void 0},i.chunkSizeFrom(a.chunk))}).then(function(){return i.each(d.adds,function(a){return c&&e.debug("pieceMeal should fall through safely"),b.createChild(a,b.gMap),c},i.chunkSizeFrom(a.chunk)).then(function(){return b.maybeFit()})})}}(this)):(this.inProgress=!1,this.rebuildAll(this.scope,!0,!0)))},n.prototype.createChild=function(a,b){var c,e;return e=this.scope.$new(!1),this.setChildScope(d.scopeKeys,e,a),e.$watch("model",function(a){return function(b,c){return b!==c?a.setChildScope(e,b):void 0}}(this),!0),e["static"]=this.scope["static"],c=new l(e,this.attrs,b,this.defaults,a,function(a){return function(){return a.maybeFit()}}(this)),null==a[this.idKey]?void this.$log.error(m+" model has no id to assign a child to.\nThis is required for performance. Please assign id,\nor redirect id to a different key."):(this.plurals.put(a[this.idKey],c),c)},n.prototype.maybeFit=function(a){return null==a&&(a=this.plurals.map(function(a){return a.pathPoints})),this.scope.fit?(a=_.flatten(a),k.fit(a,this.gMap)):void 0},n}(f)}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapCircleParentModel",["uiGmapLogger","$timeout","uiGmapGmapUtil","uiGmapEventsHelper","uiGmapCircleOptionsBuilder",function(c,d,e,f,g){var h,i;return i=function(a,b){return a.settingFromDirective=!0,b(),d(function(){return a.settingFromDirective=!1})},h=function(d){function g(a,d,f,g,h){var j,k,l;this.attrs=f,this.map=g,this.DEFAULTS=h,this.scope=a,l=null,j=function(a){return function(){return l=null,null!=a.listeners?(a.removeEvents(a.listeners),a.listeners=void 0):void 0}}(this),k=new google.maps.Circle(this.buildOpts(e.getCoords(a.center),a.radius)),this.setMyOptions=function(b){return function(c,d){return a.settingFromDirective?void 0:_.isEqual(c,d)?void 0:k.setOptions(b.buildOpts(e.getCoords(a.center),a.radius))}}(this),this.props=this.props.concat([{prop:"center",isColl:!0},{prop:"fill",isColl:!0},"radius","zIndex"]),this.watchProps(),null!=this.scope.control&&(this.scope.control.getCircle=function(){return k}),j(),this.listeners=this.setEvents(k,a,a,["radius_changed"])||[],this.listeners.push(google.maps.event.addListener(k,"radius_changed",function(){var c,d;return c=k.getRadius(),c!==l?(l=c,d=function(){return i(a,function(){var b,d;return c!==a.radius&&(a.radius=c),(null!=(b=a.events)?b.radius_changed:void 0)&&_.isFunction(null!=(d=a.events)?d.radius_changed:void 0)?a.events.radius_changed(k,"radius_changed",a,arguments):void 0})},b.mock?d():a.$evalAsync(function(){return d()})):void 0})),this.listeners.push(google.maps.event.addListener(k,"center_changed",function(){return a.$evalAsync(function(){return i(a,function(){return b.isDefined(a.center.type)?(a.center.coordinates[1]=k.getCenter().lat(),a.center.coordinates[0]=k.getCenter().lng()):(a.center.latitude=k.getCenter().lat(),a.center.longitude=k.getCenter().lng())})})})),a.$on("$destroy",function(a){return function(){return j(),k.setMap(null)}}(this)),c.info(this)}return a(g,d),g.include(e),g.include(f),g}(g)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapDrawingManagerParentModel",["uiGmapLogger","$timeout","uiGmapBaseObject","uiGmapEventsHelper",function(b,c,d,e){var f;return f=function(b){function c(a,b,c,d){var e,f;this.scope=a,this.attrs=c,this.map=d,e=new google.maps.drawing.DrawingManager(this.scope.options),e.setMap(this.map),f=void 0,null!=this.scope.control&&(this.scope.control.getDrawingManager=function(){return e}),!this.scope["static"]&&this.scope.options&&this.scope.$watch("options",function(a){return null!=e?e.setOptions(a):void 0},!0),null!=this.scope.events&&(f=this.setEvents(e,this.scope,this.scope),this.scope.$watch("events",function(a){return function(b,c){return _.isEqual(b,c)?void 0:(null!=f&&a.removeEvents(f),f=a.setEvents(e,a.scope,a.scope))}}(this))),this.scope.$on("$destroy",function(a){return function(){return null!=f&&a.removeEvents(f),e.setMap(null),e=null}}(this))}return a(c,b),c.include(e),c}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapIMarkerParentModel",["uiGmapModelKey","uiGmapLogger",function(d,e){var f;return f=function(d){function f(c,d,g,h){if(this.scope=c,this.element=d,this.attrs=g,this.map=h,this.onWatch=a(this.onWatch,this),this.watch=a(this.watch,this),this.validateScope=a(this.validateScope,this),f.__super__.constructor.call(this,this.scope),this.$log=e,!this.validateScope(this.scope))throw new String("Unable to construct IMarkerParentModel due to invalid scope");this.doClick=b.isDefined(this.attrs.click),null!=this.scope.options&&(this.DEFAULTS=this.scope.options),this.watch("coords",this.scope),this.watch("icon",this.scope),this.watch("options",this.scope),this.scope.$on("$destroy",function(a){return function(){return a.onDestroy(a.scope)}}(this))}return c(f,d),f.prototype.DEFAULTS={},f.prototype.validateScope=function(a){var b;return null==a?(this.$log.error(this.constructor.name+": invalid scope used"),!1):(b=null!=a.coords,b?b:(this.$log.error(this.constructor.name+": no valid coords attribute found"),!1))},f.prototype.watch=function(a,b,c){return null==c&&(c=!0),b.$watch(a,function(c){return function(d,e){return _.isEqual(d,e)?void 0:c.onWatch(a,b,d,e)}}(this),c)},f.prototype.onWatch=function(a,b,c,d){},f}(d)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapIWindowParentModel",["uiGmapModelKey","uiGmapGmapUtil","uiGmapLogger",function(b,c,d){var e;return e=function(b){function e(a,b,c,f,g,h,i,j){e.__super__.constructor.call(this,a),this.$log=d,this.$timeout=g,this.$compile=h,this.$http=i,this.$templateCache=j,this.DEFAULTS={},null!=a.options&&(this.DEFAULTS=a.options)}return a(e,b),e.include(c),e.prototype.getItem=function(a,b,c){return"models"===b?a[b][c]:a[b].get(c)},e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapLayerParentModel",["uiGmapBaseObject","uiGmapLogger","$timeout",function(d,e,f){var g;return g=function(d){function f(c,d,f,g,h,i){return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.onLayerCreated=null!=h?h:void 0,this.$log=null!=i?i:e,this.createGoogleLayer=a(this.createGoogleLayer,this),null==this.attrs.type?void this.$log.info("type attribute for the layer directive is mandatory. Layer creation aborted!!"):(this.createGoogleLayer(),this.doShow=!0,b.isDefined(this.attrs.show)&&(this.doShow=this.scope.show),this.doShow&&null!=this.gMap&&this.gObject.setMap(this.gMap),this.scope.$watch("show",function(a){return function(b,c){return b!==c?(a.doShow=b,b?a.gObject.setMap(a.gMap):a.gObject.setMap(null)):void 0}}(this),!0),this.scope.$watch("options",function(a){return function(b,c){return b!==c&&a.doShow?a.gObject.setOptions(b):void 0}}(this),!0),void this.scope.$on("$destroy",function(a){return function(){return a.gObject.setMap(null)}}(this)))}return c(f,d),f.prototype.createGoogleLayer=function(){var a;return null==this.attrs.options?this.gObject=void 0===this.attrs.namespace?new google.maps[this.attrs.type]:new google.maps[this.attrs.namespace][this.attrs.type]:this.gObject=void 0===this.attrs.namespace?new google.maps[this.attrs.type](this.scope.options):new google.maps[this.attrs.namespace][this.attrs.type](this.scope.options),null!=this.gObject&&this.doShow&&this.gObject.setMap(this.gMap),null!=this.gObject&&null!=this.onLayerCreated&&"function"==typeof(a=this.onLayerCreated(this.scope,this.gObject))?a(this.gObject):void 0},f}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapMapTypeParentModel",["uiGmapBaseObject","uiGmapLogger",function(d,e){var f;return f=function(d){function f(c,d,f,g,h){return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.$log=null!=h?h:e,this.hideOverlay=a(this.hideOverlay,this),this.showOverlay=a(this.showOverlay,this),this.refreshMapType=a(this.refreshMapType,this),this.createMapType=a(this.createMapType,this),null==this.attrs.options?void this.$log.info("options attribute for the map-type directive is mandatory. Map type creation aborted!!"):(this.id=this.gMap.overlayMapTypesCount=this.gMap.overlayMapTypesCount+1||0,this.doShow=!0,this.createMapType(),b.isDefined(this.attrs.show)&&(this.doShow=this.scope.show),this.doShow&&null!=this.gMap&&this.showOverlay(),this.scope.$watch("show",function(a){return function(b,c){return b!==c?(a.doShow=b,b?a.showOverlay():a.hideOverlay()):void 0}}(this),!0),this.scope.$watch("options",function(a){return function(b,c){return _.isEqual(b,c)?void 0:a.refreshMapType()}}(this),!0),b.isDefined(this.attrs.refresh)&&this.scope.$watch("refresh",function(a){return function(b,c){return _.isEqual(b,c)?void 0:a.refreshMapType()}}(this),!0),void this.scope.$on("$destroy",function(a){return function(){return a.hideOverlay(),a.mapType=null}}(this)))}return c(f,d),f.prototype.createMapType=function(){if(null!=this.scope.options.getTile)this.mapType=this.scope.options;else{if(null==this.scope.options.getTileUrl)return void this.$log.info("options should provide either getTile or getTileUrl methods. Map type creation aborted!!");this.mapType=new google.maps.ImageMapType(this.scope.options)}return this.attrs.id&&this.scope.id&&(this.gMap.mapTypes.set(this.scope.id,this.mapType),b.isDefined(this.attrs.show)||(this.doShow=!1)),this.mapType.layerId=this.id},f.prototype.refreshMapType=function(){return this.hideOverlay(),this.mapType=null,this.createMapType(),this.doShow&&null!=this.gMap?this.showOverlay():void 0},f.prototype.showOverlay=function(){return this.gMap.overlayMapTypes.push(this.mapType)},f.prototype.hideOverlay=function(){var a;return a=!1,this.gMap.overlayMapTypes.forEach(function(b){return function(c,d){a||c.layerId!==b.id||(a=!0,b.gMap.overlayMapTypes.removeAt(d))}}(this))},f}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapMarkersParentModel",["uiGmapIMarkerParentModel","uiGmapModelsWatcher","uiGmapPropMap","uiGmapMarkerChildModel","uiGmap_async","uiGmapClustererMarkerManager","uiGmapMarkerManager","$timeout","uiGmapIMarker","uiGmapPromise","uiGmapGmapUtil","uiGmapLogger","uiGmapSpiderfierMarkerManager",function(d,e,f,g,h,i,j,k,l,m,n,o,p){var q,r;return r=function(a,b){return b.plurals=new f,b.scope.plurals=b.plurals,b},q=function(d){function k(b,c,d,e){this.maybeExecMappedEvent=a(this.maybeExecMappedEvent,this),this.onDestroy=a(this.onDestroy,this),this.newChildMarker=a(this.newChildMarker,this),this.pieceMeal=a(this.pieceMeal,this),this.rebuildAll=a(this.rebuildAll,this),this.createAllNew=a(this.createAllNew,this),this.bindToTypeEvents=a(this.bindToTypeEvents,this),this.createChildScopes=a(this.createChildScopes,this),this.validateScope=a(this.validateScope,this),this.onWatch=a(this.onWatch,this);var g;k.__super__.constructor.call(this,b,c,d,e),this["interface"]=l,g=this,r(new f,this),this.scope.pluralsUpdate={updateCtr:0},this.$log.info(this),this.doRebuildAll=null!=this.scope.doRebuildAll?this.scope.doRebuildAll:!1,this.setIdKey(this.scope),this.scope.$watch("doRebuildAll",function(a){return function(b,c){return b!==c?a.doRebuildAll=b:void 0}}(this)),this.modelsLength()||(this.modelsRendered=!1),this.scope.$watch("models",function(a){return function(b,c){if(!_.isEqual(b,c)||!a.modelsRendered){if(0===b.length&&0===c.length)return;return a.modelsRendered=!0,a.onWatch("models",a.scope,b,c)}}}(this),!this.isTrue(d.modelsbyref)),this.watch("doCluster",this.scope),this.watch("type",this.scope),this.watch("clusterOptions",this.scope),this.watch("clusterEvents",this.scope),this.watch("typeOptions",this.scope),this.watch("typeEvents",this.scope),this.watch("fit",this.scope),this.watch("idKey",this.scope),this.gManager=void 0,this.createAllNew(this.scope)}return c(k,d),k.include(n),k.include(e),k.prototype.onWatch=function(a,b,c,d){return"idKey"===a&&c!==d&&(this.idKey=c),this.doRebuildAll||"doCluster"===a||"type"===a?this.rebuildAll(b):this.pieceMeal(b)},k.prototype.validateScope=function(a){var c;return c=b.isUndefined(a.models)||void 0===a.models,c&&this.$log.error(this.constructor.name+": no valid models attribute found"),k.__super__.validateScope.call(this,a)||c},k.prototype.createChildScopes=function(a){return null!=this.gMap&&null!=this.scope.models?a?this.createAllNew(this.scope,!1):this.pieceMeal(this.scope,!1):void 0},k.prototype.bindToTypeEvents=function(a,c){var d,e;return null==c&&(c=["click","mouseout","mouseover"]),e=this,this.origTypeEvents?b.extend(a,this.origTypeEvents):(this.origTypeEvents={},_.each(c,function(b){return function(c){return b.origTypeEvents[c]=null!=a?a[c]:void 0}}(this))),d={},_.each(c,function(a){return function(a){return d[a]=function(b){return e.maybeExecMappedEvent(b,a)}}}(this)),b.extend(a,d)},k.prototype.createAllNew=function(a){var b,c,d,e;return null!=this.gManager&&(this.gManager instanceof p&&(b=this.gManager.isSpiderfied()),this.gManager.clear(),delete this.gManager),d=a.typeEvents||a.clusterEvents,e=a.typeOptions||a.clusterOptions,a.doCluster||"cluster"===a.type?(null!=d&&this.bindToTypeEvents(d),this.gManager=new i(this.map,void 0,e,d)):"spider"===a.type?(null!=d&&this.bindToTypeEvents(d,["spiderfy","unspiderfy"]),this.gManager=new p(this.map,void 0,e,d,this.scope),b&&this.gManager.spiderfy()):this.gManager=new j(this.map),this.didQueueInitPromise(this,a)?void 0:(c=null,h.promiseLock(this,m.promiseTypes.create,"createAllNew",function(a){return c=a},function(b){return function(){return h.each(a.models,function(d){return b.newChildMarker(d,a),c},h.chunkSizeFrom(a.chunk)).then(function(){return b.modelsRendered=!0,a.fit&&b.gManager.fit(),b.gManager.draw(),b.scope.pluralsUpdate.updateCtr+=1},h.chunkSizeFrom(a.chunk))}}(this)))},k.prototype.rebuildAll=function(a){var b;if(a.doRebuild||void 0===a.doRebuild)return(null!=(b=this.scope.plurals)?b.length:void 0)?this.onDestroy(a).then(function(b){return function(){return b.createAllNew(a)}}(this)):this.createAllNew(a)},k.prototype.pieceMeal=function(a){var b,c;if(!a.$$destroyed)return b=null,c=null,this.modelsLength()&&this.scope.plurals.length?h.promiseLock(this,m.promiseTypes.update,"pieceMeal",function(a){return b=a},function(d){return function(){return m.promise(function(){return d.figureOutState(d.idKey,a,d.scope.plurals,d.modelKeyComparison)}).then(function(e){return c=e,h.each(c.removals,function(a){return null!=a?(null!=a.destroy&&a.destroy(),d.scope.plurals.remove(a.id),b):void 0},h.chunkSizeFrom(a.chunk))}).then(function(){return h.each(c.adds,function(c){return d.newChildMarker(c,a),b},h.chunkSizeFrom(a.chunk))}).then(function(){return h.each(c.updates,function(a){return d.updateChild(a.child,a.model),b},h.chunkSizeFrom(a.chunk))}).then(function(){return(c.adds.length>0||c.removals.length>0||c.updates.length>0)&&(a.plurals=d.scope.plurals,a.fit&&d.gManager.fit(),d.gManager.draw()),d.scope.pluralsUpdate.updateCtr+=1})}}(this)):(this.inProgress=!1,this.rebuildAll(a))},k.prototype.newChildMarker=function(a,b){var c,d,e,f;return null==a[this.idKey]?void this.$log.error("Marker model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.$log.info("child",c,"markers",this.scope.markerModels),d=b.$new(!1),d.events=b.events,f={},l.scopeKeys.forEach(function(a){return f[a]=b[a]}),c=new g(d,a,f,this.map,this.DEFAULTS,this.doClick,this.gManager,e=!1),this.scope.plurals.put(a[this.idKey],c),c)},k.prototype.onDestroy=function(a){return k.__super__.onDestroy.call(this,a),h.promiseLock(this,m.promiseTypes["delete"],void 0,void 0,function(a){return function(){return h.each(a.scope.plurals.values(),function(a){return null!=a?a.destroy(!1):void 0},h.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){return null!=a.gManager&&a.gManager.destroy(),a.plurals.removeAll(),a.plurals!==a.scope.plurals&&console.error("plurals out of sync for MarkersParentModel"),a.scope.pluralsUpdate.updateCtr+=1})}}(this))},k.prototype.maybeExecMappedEvent=function(a,b){var c,d;if(!this.scope.$$destroyed)return d=this.scope.typeEvents||this.scope.clusterEvents,_.isFunction(null!=d?d[b]:void 0)&&(c=this.mapTypeToPlurals(a),this.origTypeEvents[b])?this.origTypeEvents[b](c.group,c.mapped):void 0},k.prototype.mapTypeToPlurals=function(a){var b,c,d;return _.isArray(a)?b=a:_.isFunction(a.getMarkers)&&(b=a.getMarkers()),null==b?void o.error("Unable to map event as we cannot find the array group to map"):(c=(null!=(d=this.scope.plurals.values())?d.length:void 0)?b.map(function(a){return function(b){return a.scope.plurals.get(b.key).model}}(this)):[],{cluster:a,mapped:c,group:a})},k.prototype.getItem=function(a,b,c){return"models"===b?a[b][c]:a[b].get(c)},k}(d)}])}.call(this),function(){["Polygon","Polyline"].forEach(function(a){return b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmap"+a+"sParentModel",["uiGmapBasePolysParentModel","uiGmap"+a+"ChildModel","uiGmapI"+a,function(b,c,d){return b(d,c,a)}])})}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapRectangleParentModel",["uiGmapLogger","uiGmapGmapUtil","uiGmapEventsHelper","uiGmapRectangleOptionsBuilder",function(b,c,d,e){var f;return f=function(e){function f(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;this.scope=a,this.attrs=d,this.map=e,this.DEFAULTS=f,g=void 0,j=!1,o=[],n=void 0,k=function(a){return function(){return a.isTrue(a.attrs.fit)?a.fitMapBounds(a.map,g):void 0}}(this),i=function(a){return function(){var c,d,e;return null!=a.scope.bounds&&null!=(null!=(c=a.scope.bounds)?c.sw:void 0)&&null!=(null!=(d=a.scope.bounds)?d.ne:void 0)&&a.validateBoundPoints(a.scope.bounds)?(g=a.convertBoundPoints(a.scope.bounds),b.info("new new bounds created: "+JSON.stringify(g))):null!=a.scope.bounds.getNorthEast&&null!=a.scope.bounds.getSouthWest?g=a.scope.bounds:null!=a.scope.bounds?b.error("Invalid bounds for newValue: "+JSON.stringify(null!=(e=a.scope)?e.bounds:void 0)):void 0}}(this),i(),l=new google.maps.Rectangle(this.buildOpts(g)),b.info("gObject (rectangle) created: "+l),p=!1,q=function(a){return function(){var b,c,d;return b=l.getBounds(),c=b.getNorthEast(),d=b.getSouthWest(),p?void 0:a.scope.$evalAsync(function(a){return null!=a.bounds&&null!=a.bounds.sw&&null!=a.bounds.ne&&(a.bounds.ne={latitude:c.lat(),longitude:c.lng()},a.bounds.sw={latitude:d.lat(),longitude:d.lng()}),null!=a.bounds.getNorthEast&&null!=a.bounds.getSouthWest?a.bounds=b:void 0})}}(this),m=function(a){return function(){return k(),a.removeEvents(o),o.push(google.maps.event.addListener(l,"dragstart",function(){return j=!0})),o.push(google.maps.event.addListener(l,"dragend",function(){return j=!1,q()})),o.push(google.maps.event.addListener(l,"bounds_changed",function(){return j?void 0:q()}))}}(this),h=function(a){return function(){return a.removeEvents(o),null!=n&&a.removeEvents(n),l.setMap(null)}}(this),null!=g&&m(),this.scope.$watch("bounds",function(a,b){var c;if(!(_.isEqual(a,b)&&null!=g||j))return p=!0,null==a?void h():(null==g?c=!0:k(),i(),l.setBounds(g),p=!1,c&&null!=g?m():void 0)},!0),this.setMyOptions=function(a){return function(b,c){return _.isEqual(b,c)||null==g||null==b?void 0:l.setOptions(a.buildOpts(g))}}(this),this.props.push("bounds"),this.watchProps(this.props),null!=this.attrs.events&&(n=this.setEvents(l,this.scope,this.scope),this.scope.$watch("events",function(a){return function(b,c){return _.isEqual(b,c)?void 0:(null!=n&&a.removeEvents(n),n=a.setEvents(l,a.scope,a.scope))}}(this))),this.scope.$on("$destroy",function(a){return function(){return h()}}(this)),b.info(this)}return a(f,e),f.include(c),f.include(d),f}(e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapSearchBoxParentModel",["uiGmapBaseObject","uiGmapLogger","uiGmapEventsHelper","$timeout","$http","$templateCache",function(d,e,f,g,h,i){var j;return j=function(d){function g(c,d,f,g,h,i,j){var k;return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.ctrlPosition=h,this.template=i,this.$log=null!=j?j:e,this.setVisibility=a(this.setVisibility,this),this.getBounds=a(this.getBounds,this),this.setBounds=a(this.setBounds,this),this.createSearchBox=a(this.createSearchBox,this),this.addToParentDiv=a(this.addToParentDiv,this),this.addAsMapControl=a(this.addAsMapControl,this),this.init=a(this.init,this),null==this.attrs.template?void this.$log.error("template attribute for the search-box directive is mandatory. Places Search Box creation aborted!!"):(b.isUndefined(this.scope.options)&&(this.scope.options={},this.scope.options.visible=!0),b.isUndefined(this.scope.options.visible)&&(this.scope.options.visible=!0),b.isUndefined(this.scope.options.autocomplete)&&(this.scope.options.autocomplete=!1),this.visible=this.scope.options.visible,this.autocomplete=this.scope.options.autocomplete,k=b.element("<div></div>"),k.append(this.template),this.input=k.find("input")[0],void this.init())}return c(g,d),g.include(f),g.prototype.init=function(){return this.createSearchBox(),this.scope.$watch("options",function(a){return function(c,d){return b.isObject(c)&&(null!=c.bounds&&a.setBounds(c.bounds),null!=c.visible&&a.visible!==c.visible)?a.setVisibility(c.visible):void 0}}(this),!0),null!=this.attrs.parentdiv?this.addToParentDiv():this.addAsMapControl(),this.autocomplete?this.listener=google.maps.event.addListener(this.gObject,"place_changed",function(a){return function(){return a.places=a.gObject.getPlace()}}(this)):this.listener=google.maps.event.addListener(this.gObject,"places_changed",function(a){return function(){return a.places=a.gObject.getPlaces()}}(this)),this.listeners=this.setEvents(this.gObject,this.scope,this.scope),this.$log.info(this),this.scope.$on("$destroy",function(a){return function(){return a.gObject=null}}(this))},g.prototype.addAsMapControl=function(){return this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].push(this.input)},g.prototype.addToParentDiv=function(){return this.parentDiv=b.element(document.getElementById(this.scope.parentdiv)),this.parentDiv.append(this.input)},g.prototype.createSearchBox=function(){return this.autocomplete?this.gObject=new google.maps.places.Autocomplete(this.input,this.scope.options):this.gObject=new google.maps.places.SearchBox(this.input,this.scope.options)},g.prototype.setBounds=function(a){if(b.isUndefined(a.isEmpty))this.$log.error("Error: SearchBoxParentModel setBounds. Bounds not an instance of LatLngBounds.");else if(a.isEmpty()===!1&&null!=this.gObject)return this.gObject.setBounds(a)},g.prototype.getBounds=function(){return this.gObject.getBounds()},g.prototype.setVisibility=function(a){return null!=this.attrs.parentdiv?a===!1?this.parentDiv.addClass("ng-hide"):this.parentDiv.removeClass("ng-hide"):a===!1?this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].clear():this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].push(this.input),this.visible=a},g}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapWindowsParentModel",["uiGmapIWindowParentModel","uiGmapModelsWatcher","uiGmapPropMap","uiGmapWindowChildModel","uiGmapLinked","uiGmap_async","uiGmapLogger","$timeout","$compile","$http","$templateCache","$interpolate","uiGmapPromise","uiGmapIWindow","uiGmapGmapUtil",function(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s;return s=function(d){function s(b,c,d,e,g,i){this.gMap=g,this.markersScope=i,this.modelKeyComparison=a(this.modelKeyComparison,this),this.interpolateContent=a(this.interpolateContent,this),this.setChildScope=a(this.setChildScope,this),this.createWindow=a(this.createWindow,this),this.setContentKeys=a(this.setContentKeys,this),this.pieceMeal=a(this.pieceMeal,this),this.createAllNew=a(this.createAllNew,this),this.watchIdKey=a(this.watchIdKey,this),this.createChildScopes=a(this.createChildScopes,this),this.watchOurScope=a(this.watchOurScope,this),this.watchDestroy=a(this.watchDestroy,this),this.onDestroy=a(this.onDestroy,this),this.rebuildAll=a(this.rebuildAll,this),this.doINeedToWipe=a(this.doINeedToWipe,this),this.watchModels=a(this.watchModels,this),this.go=a(this.go,this),s.__super__.constructor.call(this,b,c,d,e,k,l,m,n),this["interface"]=q,this.plurals=new f,_.each(q.scopeKeys,function(a){return function(b){return a[b+"Key"]=void 0}}(this)),this.linked=new h(b,c,d,e),this.contentKeys=void 0,this.isIconVisibleOnClick=void 0,this.firstTime=!0,this.firstWatchModels=!0,this.$log.info(self),this.parentScope=void 0,this.go(b)}return c(s,d),s.include(e),s.prototype.go=function(a){return this.watchOurScope(a),this.doRebuildAll=null!=this.scope.doRebuildAll?this.scope.doRebuildAll:!1,a.$watch("doRebuildAll",function(a){return function(b,c){return b!==c?a.doRebuildAll=b:void 0}}(this)),this.createChildScopes()},s.prototype.watchModels=function(a){var b;return b=null!=this.markersScope?"pluralsUpdate":"models",a.$watch(b,function(b){return function(c,d){var e;return!_.isEqual(c,d)||b.firstWatchModels?(b.firstWatchModels=!1,b.doRebuildAll||b.doINeedToWipe(a.models)?b.rebuildAll(a,!0,!0):(e=0===b.plurals.length,null!=b.existingPieces?_.last(b.existingPieces._content).then(function(){return b.createChildScopes(e)}):b.createChildScopes(e))):void 0}}(this),!0)},s.prototype.doINeedToWipe=function(a){var b;return b=null!=a?0===a.length:!0,this.plurals.length>0&&b},s.prototype.rebuildAll=function(a,b,c){return this.onDestroy(c).then(function(a){return function(){return b?a.createChildScopes():void 0}}(this))},s.prototype.onDestroy=function(a){return s.__super__.onDestroy.call(this,this.scope),i.promiseLock(this,p.promiseTypes["delete"],void 0,void 0,function(a){return function(){return i.each(a.plurals.values(),function(a){return a.destroy()},i.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){var b;return null!=(b=a.plurals)?b.removeAll():void 0})}}(this))},s.prototype.watchDestroy=function(a){return a.$on("$destroy",function(b){return function(){return b.firstWatchModels=!0,b.firstTime=!0,b.rebuildAll(a,!1,!0)}}(this))},s.prototype.watchOurScope=function(a){return _.each(q.scopeKeys,function(b){return function(c){var d;return d=c+"Key",b[d]="function"==typeof a[c]?a[c]():a[c]}}(this))},s.prototype.createChildScopes=function(a){var c,d,e;return null==a&&(a=!0),this.isIconVisibleOnClick=!0,b.isDefined(this.linked.attrs.isiconvisibleonclick)&&(this.isIconVisibleOnClick=this.linked.scope.isIconVisibleOnClick),c=b.isUndefined(this.linked.scope.models),!c||void 0!==this.markersScope&&void 0!==(null!=(d=this.markersScope)?d.plurals:void 0)&&void 0!==(null!=(e=this.markersScope)?e.models:void 0)?null!=this.gMap?null!=this.linked.scope.models?(this.watchIdKey(this.linked.scope),
a?this.createAllNew(this.linked.scope,!1):this.pieceMeal(this.linked.scope,!1)):(this.parentScope=this.markersScope,this.watchIdKey(this.parentScope),a?this.createAllNew(this.markersScope,!0,"plurals",!1):this.pieceMeal(this.markersScope,!0,"plurals",!1)):void 0:void this.$log.error("No models to create windows from! Need direct models or models derived from markers!")},s.prototype.watchIdKey=function(a){return this.setIdKey(a),a.$watch("idKey",function(b){return function(c,d){return c!==d&&null==c?(b.idKey=c,b.rebuildAll(a,!0,!0)):void 0}}(this))},s.prototype.createAllNew=function(a,b,c,d){var e;return null==c&&(c="models"),null==d&&(d=!1),this.firstTime&&(this.watchModels(a),this.watchDestroy(a)),this.setContentKeys(a.models),this.didQueueInitPromise(this,a)?void 0:(e=null,i.promiseLock(this,p.promiseTypes.create,"createAllNew",function(a){return e=a},function(d){return function(){return i.each(a.models,function(f){var g,h;return g=b&&null!=(h=d.getItem(a,c,f[d.idKey]))?h.gObject:void 0,e||(!g&&d.markersScope&&j.error("Unable to get gMarker from markersScope!"),d.createWindow(f,g,d.gMap)),e},i.chunkSizeFrom(a.chunk)).then(function(){return d.firstTime=!1})}}(this)))},s.prototype.pieceMeal=function(a,b,c,d){var e,f;return null==c&&(c="models"),null==d&&(d=!0),a.$$destroyed?void 0:(e=null,f=null,null!=a&&this.modelsLength()&&this.plurals.length?i.promiseLock(this,p.promiseTypes.update,"pieceMeal",function(a){return e=a},function(b){return function(){return p.promise(function(){return b.figureOutState(b.idKey,a,b.plurals,b.modelKeyComparison)}).then(function(c){return f=c,i.each(f.removals,function(a){return null!=a?(b.plurals.remove(a.id),null!=a.destroy&&a.destroy(!0),e):void 0},i.chunkSizeFrom(a.chunk))}).then(function(){return i.each(f.adds,function(d){var f,g;if(f=null!=(g=b.getItem(a,c,d[b.idKey]))?g.gObject:void 0,!f)throw"Gmarker undefined";return b.createWindow(d,f,b.gMap),e})}).then(function(){return i.each(f.updates,function(a){return b.updateChild(a.child,a.model),e},i.chunkSizeFrom(a.chunk))})}}(this)):(j.debug("pieceMeal: rebuildAll"),this.rebuildAll(this.scope,!0,!0)))},s.prototype.setContentKeys=function(a){return this.modelsLength(a)?this.contentKeys=Object.keys(a[0]):void 0},s.prototype.createWindow=function(a,b,c){var d,e,f,h,i,j;return e=this.linked.scope.$new(!1),this.setChildScope(e,a),e.$watch("model",function(a){return function(b,c){return b!==c?a.setChildScope(e,b):void 0}}(this),!0),f={html:function(b){return function(){return b.interpolateContent(b.linked.element.html(),a)}}(this)},this.DEFAULTS=this.scopeOrModelVal(this.optionsKey,this.scope,a)||{},h=this.createWindowOptions(b,e,f.html(),this.DEFAULTS),d=new g(a,e,h,this.isIconVisibleOnClick,c,null!=(i=this.markersScope)&&null!=(j=i.plurals.get(a[this.idKey]))?j.scope:void 0,f,!1,!0),null==a[this.idKey]?void this.$log.error("Window model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.plurals.put(a[this.idKey],d),d)},s.prototype.setChildScope=function(a,b){return _.each(q.scopeKeys,function(c){return function(d){var e,f;return e=d+"Key",f="self"===c[e]?b:b[c[e]],f!==a[d]?a[d]=f:void 0}}(this)),a.model=b},s.prototype.interpolateContent=function(a,b){var c,d,e,f,g,h;if(void 0!==this.contentKeys&&0!==this.contentKeys.length){for(c=o(a),e={},h=this.contentKeys,d=0,g=h.length;g>d;d++)f=h[d],e[f]=b[f];return c(e)}},s.prototype.modelKeyComparison=function(a,b){var c,d;if(d=null!=this.scope.coords?this.scope:this.parentScope,null==d)throw"No scope or parentScope set!";return(c=r.equalCoords(this.evalModelHandle(a,d.coords),this.evalModelHandle(b,d.coords)))?c=_.every(_.without(this["interface"].scopeKeys,"coords"),function(c){return function(e){return c.evalModelHandle(a,d[e])===c.evalModelHandle(b,d[e])}}(this)):c},s}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapCircle",["uiGmapICircle","uiGmapCircleParentModel",function(a,b){return _.extend(a,{link:function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new b(a,c,d,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapControl",["uiGmapIControl","$http","$templateCache","$compile","$controller","uiGmapGoogleMapApi",function(d,e,f,g,h,i){var j;return j=function(j){function k(){this.link=a(this.link,this),k.__super__.constructor.call(this)}return c(k,j),k.prototype.link=function(a,c,j,k){return i.then(function(c){return function(i){var j,l;return b.isUndefined(a.template)?void c.$log.error("mapControl: could not find a valid template property"):(j=b.isDefined(a.index&&!isNaN(parseInt(a.index)))?parseInt(a.index):void 0,l=b.isDefined(a.position)?a.position.toUpperCase().replace(/-/g,"_"):"TOP_CENTER",i.ControlPosition[l]?d.mapPromise(a,k).then(function(d){var i,k;return i=void 0,k=b.element("<div></div>"),e.get(a.template,{cache:f}).success(function(c){var d,e;return e=a.$new(),k.append(c),b.isDefined(a.controller)&&(d=h(a.controller,{$scope:e}),k.children().data("$ngControllerController",d)),i=g(k.children())(e),j?i[0].index=j:void 0}).error(function(a){return c.$log.error("mapControl: template could not be found")}).then(function(){return d.controls[google.maps.ControlPosition[l]].push(i[0])})}):void c.$log.error("mapControl: invalid position property"))}}(this))},k}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapDragZoom",["uiGmapCtrlHandle","uiGmapPropertyAction",function(a,b){return{restrict:"EMA",transclude:!0,template:'<div class="angular-google-map-dragzoom" ng-transclude style="display: none"></div>',require:"^uiGmapGoogleMap",scope:{keyboardkey:"=",options:"=",spec:"="},controller:["$scope","$element",function(b,c){return b.ctrlType="uiGmapDragZoom",_.extend(this,a.handle(b,c))}],link:function(c,d,e,f){return a.mapPromise(c,f).then(function(a){var d,e,f;return d=function(b){return a.enableKeyDragZoom(b),c.spec?c.spec.enableKeyDragZoom(b):void 0},e=new b(function(a,b){return b?d({key:b}):d()}),f=new b(function(a,b){return b?d(b):void 0}),c.$watch("keyboardkey",e.sic),e.sic(c.keyboardkey),c.$watch("options",f.sic),f.sic(c.options)})}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapDrawingManager",["uiGmapIDrawingManager","uiGmapDrawingManagerParentModel",function(a,b){return _.extend(a,{link:function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return new b(a,c,d,e)})}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapApiFreeDrawPolygons",["uiGmapLogger","uiGmapBaseObject","uiGmapCtrlHandle","uiGmapDrawFreeHandChildModel","uiGmapLodash",function(b,d,e,f,g){var h;return h=function(d){function h(){return this.link=a(this.link,this),h.__super__.constructor.apply(this,arguments)}return c(h,d),h.include(e),h.prototype.restrict="EMA",h.prototype.replace=!0,h.prototype.require="^uiGmapGoogleMap",h.prototype.scope={polygons:"=",draw:"="},h.prototype.link=function(a,c,d,e){return this.mapPromise(a,e).then(function(c){return function(c){var d,h;return a.polygons?_.isArray(a.polygons)?(d=new f(c,e.getScope()),h=void 0,a.draw=function(){return"function"==typeof h&&h(),d.engage(a.polygons).then(function(){var b;return b=!0,h=a.$watchCollection("polygons",function(a,c){var d;return b||a===c?void(b=!1):(d=g.differenceObjects(c,a),d.forEach(function(a){return a.setMap(null)}))})})}):b.error("Free Draw Polygons must be of type Array!"):b.error("No polygons to bind to!")}}(this))},h}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapICircle",[function(){var a;return a={},{restrict:"EA",replace:!0,require:"^uiGmapGoogleMap",scope:{center:"=center",radius:"=radius",stroke:"=stroke",fill:"=fill",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=icons",visible:"=",events:"=",control:"=",zIndex:"=zindex"}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIControl",["uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d){var e;return e=function(b){function e(){this.restrict="EA",this.replace=!0,this.require="^uiGmapGoogleMap",this.scope={template:"@template",position:"@position",controller:"@controller",index:"@index"},this.$log=c}return a(e,b),e.extend(d),e.prototype.link=function(a,b,c,d){throw new Exception("Not implemented!!")},e}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapIDrawingManager",[function(){return{restrict:"EA",replace:!0,require:"^uiGmapGoogleMap",scope:{"static":"@",control:"=",options:"=",events:"="}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIMarker",["uiGmapBaseObject","uiGmapCtrlHandle",function(b,c){var d;return d=function(b){function d(){this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.replace=!0,this.scope=_.extend(this.scope||{},d.scope)}return a(d,b),d.scope={coords:"=coords",icon:"=icon",click:"&click",options:"=options",events:"=events",fit:"=fit",idKey:"=idkey",control:"=control"},d.scopeKeys=_.keys(d.scope),d.keys=d.scopeKeys,d.extend(c),d}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIPolygon",["uiGmapGmapUtil","uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d,e){var f;return f=function(c){function f(){}return a(f,c),f.scope={path:"=path",stroke:"=stroke",clickable:"=",draggable:"=",editable:"=",geodesic:"=",fill:"=",icons:"=icons",visible:"=","static":"=",events:"=",zIndex:"=zindex",fit:"=",control:"=control"},f.scopeKeys=_.keys(f.scope),f.include(b),f.extend(e),f.prototype.restrict="EMA",f.prototype.replace=!0,f.prototype.require="^uiGmapGoogleMap",f.prototype.scope=f.scope,f.prototype.DEFAULTS={},f.prototype.$log=d,f}(c)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIPolyline",["uiGmapGmapUtil","uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d,e){var f;return f=function(c){function f(){}return a(f,c),f.scope={path:"=",stroke:"=",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=",visible:"=","static":"=",fit:"=",events:"=",zIndex:"=zindex"},f.scopeKeys=_.keys(f.scope),f.include(b),f.extend(e),f.prototype.restrict="EMA",f.prototype.replace=!0,f.prototype.require="^uiGmapGoogleMap",f.prototype.scope=f.scope,f.prototype.DEFAULTS={},f.prototype.$log=d,f}(c)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapIRectangle",[function(){var a;return a={},{restrict:"EMA",require:"^uiGmapGoogleMap",replace:!0,scope:{bounds:"=",stroke:"=",clickable:"=",draggable:"=",editable:"=",fill:"=",visible:"=",events:"="}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIWindow",["uiGmapBaseObject","uiGmapChildEvents","uiGmapCtrlHandle",function(b,c,d){var e;return e=function(b){function e(){this.restrict="EMA",this.template=void 0,this.transclude=!0,this.priority=-100,this.require="^uiGmapGoogleMap",this.replace=!0,this.scope=_.extend(this.scope||{},e.scope)}return a(e,b),e.scope={coords:"=coords",template:"=template",templateUrl:"=templateurl",templateParameter:"=templateparameter",isIconVisibleOnClick:"=isiconvisibleonclick",closeClick:"&closeclick",options:"=options",control:"=control",show:"=show"},e.scopeKeys=_.keys(e.scope),e.include(c),e.extend(d),e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMap",["$timeout","$q","uiGmapLogger","uiGmapGmapUtil","uiGmapBaseObject","uiGmapCtrlHandle","uiGmapIsReady","uiGmapuuid","uiGmapExtendGWin","uiGmapExtendMarkerClusterer","uiGmapGoogleMapsUtilV3","uiGmapGoogleMapApi","uiGmapEventsHelper",function(e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t;return r=void 0,t=[o,m,n],s=function(f){function i(){this.link=a(this.link,this);var b,c;b=function(a){var b,c;return c=void 0,a.$on("$destroy",function(){return k.decrement()}),b=j.handle(a),a.ctrlType="Map",a.deferred.promise.then(function(){return t.forEach(function(a){return a.init()})}),b.getMap=function(){return a.map},c=_.extend(this,b)},this.controller=["$scope",b],c=this}return d(i,f),i.include(h),i.prototype.restrict="EMA",i.prototype.transclude=!0,i.prototype.replace=!1,i.prototype.template='<div class="angular-google-map"><div class="angular-google-map-container"></div><div ng-transclude style="display: none"></div></div>',i.prototype.scope={center:"=",zoom:"=",dragging:"=",control:"=",options:"=",events:"=",eventOpts:"=",styles:"=",bounds:"=",update:"="},i.prototype.link=function(a,d,f){var h,i;return h=[],a.$on("$destroy",function(){return q.removeEvents(h)}),a.idleAndZoomChanged=!1,null==a.center?void(i=a.$watch("center",function(b){return function(){return a.center?(i(),b.link(a,d,f)):void 0}}(this))):p.then(function(i){return function(j){var m,n,o,p,s,t,u,v,w,x,y,z,A,B,C,D,E;if(r={mapTypeId:j.MapTypeId.ROADMAP},B=k.spawn(),z=function(){return B.deferred.resolve({instance:B.instance,map:m})},!i.validateCoords(a.center))return void g.error("angular-google-maps: could not find a valid center property");if(!b.isDefined(a.zoom))return void g.error("angular-google-maps: map zoom property not set");if(s=b.element(d),s.addClass("angular-google-map"),x={options:{}},f.options&&(x.options=a.options),f.styles&&(x.styles=a.styles),f.type&&(C=f.type.toUpperCase(),google.maps.MapTypeId.hasOwnProperty(C)?x.mapTypeId=google.maps.MapTypeId[f.type.toUpperCase()]:g.error("angular-google-maps: invalid map type '"+f.type+"'")),v=b.extend({},r,x,{center:i.getCoords(a.center),zoom:a.zoom,bounds:a.bounds}),m=new google.maps.Map(s.find("div")[1],v),m.uiGmap_id=l.generate(),p=!1,h.push(google.maps.event.addListenerOnce(m,"idle",function(){return a.deferred.resolve(m),z()})),o=f.events&&null!=(null!=(y=a.events)?y.blacklist:void 0)?a.events.blacklist:[],_.isString(o)&&(o=[o]),w=function(b,c,d){return _.contains(o,b)?void 0:(d&&d(),h.push(google.maps.event.addListener(m,b,function(){var b;return(null!=(b=a.update)?b.lazy:void 0)?void 0:c()})))},_.contains(o,"all")||(w("dragstart",function(){return p=!0,a.$evalAsync(function(a){return null!=a.dragging?a.dragging=p:void 0})}),w("dragend",function(){return p=!1,a.$evalAsync(function(a){return null!=a.dragging?a.dragging=p:void 0})}),D=function(c,d){if(null==c&&(c=m.center),null==d&&(d=a),!_.contains(o,"center"))if(b.isDefined(d.center.type)){if(d.center.coordinates[1]!==c.lat()&&(d.center.coordinates[1]=c.lat()),d.center.coordinates[0]!==c.lng())return d.center.coordinates[0]=c.lng()}else if(d.center.latitude!==c.lat()&&(d.center.latitude=c.lat()),d.center.longitude!==c.lng())return d.center.longitude=c.lng()},A=!1,w("idle",function(){var b,d,e;return b=m.getBounds(),d=b.getNorthEast(),e=b.getSouthWest(),A=!0,a.$evalAsync(function(b){return D(),null===b.bounds||b.bounds===c||void 0===b.bounds||_.contains(o,"bounds")||(b.bounds.northeast={latitude:d.lat(),longitude:d.lng()},b.bounds.southwest={latitude:e.lat(),longitude:e.lng()}),_.contains(o,"zoom")||(b.zoom=m.zoom,a.idleAndZoomChanged=!a.idleAndZoomChanged),A=!1})})),b.isDefined(a.events)&&null!==a.events&&b.isObject(a.events)){u=function(b){return function(){return a.events[b].apply(a,[m,b,arguments])}},n=[];for(t in a.events)a.events.hasOwnProperty(t)&&b.isFunction(a.events[t])&&n.push(google.maps.event.addListener(m,t,u(t)));h.concat(n)}return m.getOptions=function(){return v},a.map=m,null!=f.control&&null!=a.control&&(a.control.refresh=function(a){var b,c,d;if(null!=m)return null!=("undefined"!=typeof google&&null!==google&&null!=(c=google.maps)&&null!=(d=c.event)?d.trigger:void 0)&&null!=m&&google.maps.event.trigger(m,"resize"),null!=(null!=a?a.latitude:void 0)&&null!=(null!=a?a.longitude:void 0)?(b=i.getCoords(a),i.isTrue(f.pan)?m.panTo(b):m.setCenter(b)):void 0},a.control.getGMap=function(){return m},a.control.getMapOptions=function(){return v},a.control.getCustomEventListeners=function(){return n},a.control.removeEvents=function(a){return q.removeEvents(a)}),a.$watch("center",function(b,c){var d,e;if(b!==c&&!A&&(d=i.getCoords(a.center),d.lat()!==m.center.lat()||d.lng()!==m.center.lng()))return e=!0,p||(i.validateCoords(b)||g.error("Invalid center for newValue: "+JSON.stringify(b)),i.isTrue(f.pan)&&a.zoom===m.zoom?m.panTo(d):m.setCenter(d)),e=!1},!0),E=null,a.$watch("zoom",function(b,c){var d,f,g;if(null!=b&&!_.isEqual(b,c)&&(null!=m?m.getZoom():void 0)!==(null!=a?a.zoom:void 0)&&!A)return g=!0,null!=E&&e.cancel(E),E=e(function(){return m.setZoom(b),g=!1},(null!=(d=a.eventOpts)&&null!=(f=d.debounce)?f.zoomMs:void 0)+20,!1)}),a.$watch("bounds",function(a,b){var c,d,e,f,h,i,j;if(a!==b)return null==(null!=a&&null!=(e=a.northeast)?e.latitude:void 0)||null==(null!=a&&null!=(f=a.northeast)?f.longitude:void 0)||null==(null!=a&&null!=(h=a.southwest)?h.latitude:void 0)||null==(null!=a&&null!=(i=a.southwest)?i.longitude:void 0)?void g.error("Invalid map bounds for new value: "+JSON.stringify(a)):(d=new google.maps.LatLng(a.northeast.latitude,a.northeast.longitude),j=new google.maps.LatLng(a.southwest.latitude,a.southwest.longitude),c=new google.maps.LatLngBounds(j,d),m.fitBounds(c))}),["options","styles"].forEach(function(b){return a.$watch(b,function(a,b){var c;return c=this.exp,_.isEqual(a,b)?void 0:("options"===c?x.options=a:x.options[c]=a,null!=m?m.setOptions(x):void 0)},!0)})}}(this))},i}(i)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMarker",["uiGmapIMarker","uiGmapMarkerChildModel","uiGmapMarkerManager","uiGmapLogger",function(b,d,e,f){var g;return g=function(g){function h(){this.link=a(this.link,this),h.__super__.constructor.call(this),this.template='<span class="angular-google-map-marker" ng-transclude></span>',f.info(this)}return c(h,g),h.prototype.controller=["$scope","$element",function(a,c){return a.ctrlType="Marker",_.extend(this,b.handle(a,c))}],h.prototype.link=function(a,c,f,g){var h;return h=b.mapPromise(a,g),h.then(function(c){return function(c){var f,g,h,i,j,k;return h=new e(c),i=_.object(b.keys,b.keys),j=new d(a,a,i,c,{},f=!0,h,g=!1,k=!1),j.deferred.promise.then(function(b){return a.deferred.resolve(b)}),null!=a.control?a.control.getGMarkers=h.getGMarkers:void 0}}(this)),a.$on("$destroy",function(a){return function(){var a;return"undefined"!=typeof a&&null!==a&&a.clear(),a=null}}(this))},h}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMarkers",["uiGmapIMarker","uiGmapPlural","uiGmapMarkersParentModel","uiGmap_sync","uiGmapLogger",function(b,c,d,e,f){var g;return g=function(e){function g(){g.__super__.constructor.call(this),this.template='<span class="angular-google-map-markers" ng-transclude></span>',c.extend(this,{doCluster:"=?docluster",clusterOptions:"=clusteroptions",clusterEvents:"=clusterevents",modelsByRef:"=modelsbyref",type:"=?type",typeOptions:"=?typeoptions",typeEvents:"=?typeevents"}),f.info(this)}return a(g,e),g.prototype.controller=["$scope","$element",function(a,c){return a.ctrlType="Markers",_.extend(this,b.handle(a,c))}],g.prototype.link=function(a,e,f,g){var h,i;return h=void 0,i=function(){return a.deferred.resolve()},b.mapPromise(a,g).then(function(b){var j;return j=g.getScope(),j.$watch("idleAndZoomChanged",function(){return _.defer(h.gManager.draw)}),h=new d(a,e,f,b),c.link(a,h),null!=a.control&&(a.control.getGMarkers=function(){var a;return null!=(a=h.gManager)?a.getGMarkers():void 0},a.control.getChildMarkers=function(){return h.plurals}),_.last(h.existingPieces._content).then(function(){return i()})})},g}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapPlural",[function(){var a;return a=function(a,b){return null!=a.control?(a.control.updateModels=function(c){return a.models=c,b.createChildScopes(!1)},a.control.newModels=function(c){return a.models=c,b.rebuildAll(a,!0,!0)},a.control.clean=function(){return b.rebuildAll(a,!1,!0)},a.control.getPlurals=function(){return b.plurals},a.control.getManager=function(){return b.gManager},a.control.hasManager=function(){return null!=b.gManager==!0},a.control.managerDraw=function(){var b;return a.control.hasManager()&&null!=(b=a.control.getManager())?b.draw():void 0}):void 0},{extend:function(a,b){return _.extend(a.scope||{},b||{},{idKey:"=idkey",doRebuildAll:"=dorebuildall",models:"=models",chunk:"=chunk",cleanchunk:"=cleanchunk",control:"=control"})},link:function(b,c){return a(b,c)}}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygon",["uiGmapIPolygon","$timeout","uiGmapPolygonChildModel",function(b,d,e){var f;return f=function(d){function f(){return this.link=a(this.link,this),f.__super__.constructor.apply(this,arguments)}return c(f,d),f.prototype.link=function(a,c,d,f){var g,h;return g=[],h=b.mapPromise(a,f),null!=a.control&&(a.control.getInstance=this,a.control.polygons=g,a.control.promise=h),h.then(function(b){return function(c){return g.push(new e(a,d,c,b.DEFAULTS))}}(this))},f}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygons",["uiGmapIPolygon","$timeout","uiGmapPolygonsParentModel","uiGmapPlural",function(d,e,f,g){var h;return h=function(d){function e(){this.link=a(this.link,this),e.__super__.constructor.call(this),g.extend(this),this.$log.info(this)}return c(e,d),e.prototype.link=function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(h){return(b.isUndefined(a.path)||null===a.path)&&e.$log.warn("polygons: no valid path attribute found"),a.models||e.$log.warn("polygons: no models found to create from"),g.link(a,new f(a,c,d,h,e.DEFAULTS))}}(this))},e}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolyline",["uiGmapIPolyline","$timeout","uiGmapPolylineChildModel",function(d,e,f){var g;return g=function(e){function g(){return this.link=a(this.link,this),g.__super__.constructor.apply(this,arguments)}return c(g,e),g.prototype.link=function(a,c,e,g){return d.mapPromise(a,g).then(function(c){return function(d){return(b.isUndefined(a.path)||null===a.path||!c.validatePath(a.path))&&c.$log.warn("polyline: no valid path attribute found"),new f(a,e,d,c.DEFAULTS)}}(this))},g}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolylines",["uiGmapIPolyline","$timeout","uiGmapPolylinesParentModel","uiGmapPlural",function(d,e,f,g){var h;return h=function(d){function e(){this.link=a(this.link,this),e.__super__.constructor.call(this),g.extend(this),this.$log.info(this)}return c(e,d),e.prototype.link=function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(h){return(b.isUndefined(a.path)||null===a.path)&&e.$log.warn("polylines: no valid path attribute found"),a.models||e.$log.warn("polylines: no models found to create from"),g.link(a,new f(a,c,d,h,e.DEFAULTS))}}(this))},e}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapRectangle",["uiGmapLogger","uiGmapGmapUtil","uiGmapIRectangle","uiGmapRectangleParentModel",function(a,b,c,d){return _.extend(c,{link:function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new d(a,b,c,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapWindow",["uiGmapIWindow","uiGmapGmapUtil","uiGmapWindowChildModel","uiGmapLodash","uiGmapLogger",function(d,e,f,g,h){var i;return i=function(i){function j(){this.link=a(this.link,this),j.__super__.constructor.call(this),this.require=["^uiGmapGoogleMap","^?uiGmapMarker"],this.template='<span class="angular-google-maps-window" ng-transclude></span>',h.debug(this),this.childWindows=[]}return c(j,i),j.include(e),j.prototype.link=function(a,c,e,f){var g,h;return g=f.length>1&&null!=f[1]?f[1]:void 0,h=null!=g?g.getScope():void 0,this.mapPromise=d.mapPromise(a,f[0]),this.mapPromise.then(function(d){return function(f){var i;return i=!0,b.isDefined(e.isiconvisibleonclick)&&(i=a.isIconVisibleOnClick),g?h.deferred.promise.then(function(b){return d.init(a,c,i,f,h)}):void d.init(a,c,i,f)}}(this))},j.prototype.init=function(a,b,c,d,e){var h,i,j,k,l;return i=null!=a.options?a.options:{},k=null!=a&&this.validateCoords(a.coords),null!=(null!=e?e.getGMarker:void 0)&&(j=e.getGMarker()),l=k?this.createWindowOptions(j,a,b.html(),i):i,null!=d&&(h=new f({},a,l,c,d,e,b),this.childWindows.push(h),a.$on("$destroy",function(a){return function(){return a.childWindows=g.withoutObjects(a.childWindows,[h],function(a,b){return a.scope.$id===b.scope.$id}),a.childWindows.length=0}}(this))),null!=a.control&&(a.control.getGWindows=function(a){return function(){return a.childWindows.map(function(a){return a.gObject})}}(this),a.control.getChildWindows=function(a){return function(){return a.childWindows}}(this),a.control.getPlurals=a.control.getChildWindows,a.control.showWindow=function(a){return function(){return a.childWindows.map(function(a){return a.showWindow()})}}(this),a.control.hideWindow=function(a){return function(){return a.childWindows.map(function(a){return a.hideWindow()})}}(this)),null!=this.onChildCreation&&null!=h?this.onChildCreation(h):void 0},j}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapWindows",["uiGmapIWindow","uiGmapPlural","uiGmapWindowsParentModel","uiGmapPromise","uiGmapLogger",function(b,d,e,f,g){var h;return h=function(b){function h(){this.init=a(this.init,this),this.link=a(this.link,this),h.__super__.constructor.call(this),this.require=["^uiGmapGoogleMap","^?uiGmapMarkers"],this.template='<span class="angular-google-maps-windows" ng-transclude></span>',d.extend(this),g.debug(this)}return c(h,b),h.prototype.link=function(a,b,c,d){var e,g,h;return e=d[0].getScope(),g=d.length>1&&null!=d[1]?d[1]:void 0,h=null!=g?g.getScope():void 0,e.deferred.promise.then(function(e){return function(g){var i,j;return i=(null!=h&&null!=(j=h.deferred)?j.promise:void 0)||f.resolve(),i.then(function(){var f,i;return f=null!=(i=e.parentModel)?i.existingPieces:void 0,f?f.then(function(){return e.init(a,b,c,d,g,h)}):e.init(a,b,c,d,g,h)})}}(this))},h.prototype.init=function(a,b,c,f,g,h){var i;return i=new e(a,b,c,f,g,h),d.link(a,i),null!=a.control?(a.control.getGWindows=function(a){return function(){return i.plurals.map(function(a){return a.gObject})}}(this),a.control.getChildWindows=function(a){return function(){return i.plurals}}(this)):void 0},h}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapGoogleMap",["uiGmapMap",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMarker",["$timeout","uiGmapMarker",function(a,b){return new b(a)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMarkers",["$timeout","uiGmapMarkers",function(a,b){return new b(a)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolygon",["uiGmapPolygon",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapCircle",["uiGmapCircle",function(a){return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolyline",["uiGmapPolyline",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolylines",["uiGmapPolylines",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapRectangle",["uiGmapLogger","uiGmapRectangle",function(a,b){return b}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapWindow",["$timeout","$compile","$http","$templateCache","uiGmapWindow",function(a,b,c,d,e){return new e(a,b,c,d)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapWindows",["$timeout","$compile","$http","$templateCache","$interpolate","uiGmapWindows",function(a,b,c,d,e,f){return new f(a,b,c,d,e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapLayer",["$timeout","uiGmapLogger","uiGmapLayerParentModel",function(b,c,d){var e;return new(e=function(){function b(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template="<span class='angular-google-map-layer' ng-transclude></span>",
this.replace=!0,this.scope={show:"=show",type:"=type",namespace:"=namespace",options:"=options",onCreated:"&oncreated"}}return b.prototype.link=function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return null!=a.onCreated?new d(a,b,c,e,a.onCreated):new d(a,b,c,e)}}(this))},b}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMapControl",["uiGmapControl",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapDragZoom",["uiGmapDragZoom",function(a){return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapDrawingManager",["uiGmapDrawingManager",function(a){return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapFreeDrawPolygons",["uiGmapApiFreeDrawPolygons",function(a){return new a}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapMapType",["$timeout","uiGmapLogger","uiGmapMapTypeParentModel",function(b,c,d){var e;return new(e=function(){function b(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template='<span class="angular-google-map-layer" ng-transclude></span>',this.replace=!0,this.scope={show:"=show",options:"=options",refresh:"=refresh",id:"@"}}return b.prototype.link=function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new d(a,b,c,e)}}(this))},b}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolygons",["uiGmapPolygons",function(a){return new a}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapSearchBox",["uiGmapGoogleMapApi","uiGmapLogger","uiGmapSearchBoxParentModel","$http","$templateCache","$compile",function(c,d,e,f,g,h){var i;return new(i=function(){function i(){this.link=a(this.link,this),this.$log=d,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template="<span class='angular-google-map-search' ng-transclude></span>",this.replace=!0,this.scope={template:"=template",events:"=events",position:"=?position",options:"=?options",parentdiv:"=?parentdiv",ngModel:"=?"}}return i.prototype.require="ngModel",i.prototype.link=function(a,d,i,j){return c.then(function(c){return function(k){return null==a.template&&(g.put("uigmap-searchbox-default.tpl.html",'<input type="text">'),a.template="uigmap-searchbox-default.tpl.html"),f.get(a.template,{cache:g}).success(function(f){return b.isUndefined(a.events)?void c.$log.error("searchBox: the events property is required"):j.getScope().deferred.promise.then(function(g){var j;return j=b.isDefined(a.position)?a.position.toUpperCase().replace(/-/g,"_"):"TOP_LEFT",k.ControlPosition[j]?new e(a,d,i,g,j,h(f)(a)):void c.$log.error("searchBox: invalid position property")})})}}(this))},i}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapShow",["$animate","uiGmapLogger",function(a,c){return{scope:{uiGmapShow:"=",uiGmapAfterShow:"&",uiGmapAfterHide:"&"},link:function(d,e){var f,g,h;return f=function(b,c){return a[b](e,"ng-hide").then(function(){return c()})},g=function(b,c){return a[b](e,"ng-hide",c)},h=function(a,d){return b.version.major>1?c.error("uiGmapShow is not supported for Angular Major greater than 1.\nYour Major is "+b.version.major+'"'):1===b.version.major&&b.version.minor<3?g(a,d):f(a,d)},d.$watch("uiGmapShow",function(a){return a&&h("removeClass",d.uiGmapAfterShow),a?void 0:h("addClass",d.uiGmapAfterHide)})}}}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapStreetViewPanorama",["uiGmapGoogleMapApi","uiGmapLogger","uiGmapGmapUtil","uiGmapEventsHelper",function(a,c,d,e){var f;return f="uiGmapStreetViewPanorama",{restrict:"EMA",template:'<div class="angular-google-map-street-view-panorama"></div>',replace:!0,scope:{focalcoord:"=",radius:"=?",events:"=?",options:"=?",control:"=?",povoptions:"=?",imagestatus:"="},link:function(g,h,i){return a.then(function(a){return function(a){var i,j,k,l,m,n,o,p,q,r;return p=void 0,r=void 0,k=!1,n=void 0,o=null,q=null,i=function(){return e.removeEvents(n),null!=p&&(p.unbind("position"),p.setVisible(!1)),null!=r?(null!=(null!=r?r.setVisible:void 0)&&r.setVisible(!1),r=void 0):void 0},m=function(a,c){var d;return d=google.maps.geometry.spherical.computeHeading(a,c),k=!0,g.radius=g.radius||50,q=b.extend({heading:d,zoom:1,pitch:0},g.povoptions||{}),o=o=b.extend({navigationControl:!1,addressControl:!1,linksControl:!1,position:a,pov:q,visible:!0},g.options||{}),k=!1},j=function(){var a;return g.focalcoord?g.radius?(i(),null==r&&(r=new google.maps.StreetViewService),g.events&&(n=e.setEvents(r,g,g)),a=d.getCoords(g.focalcoord),r.getPanoramaByLocation(a,g.radius,function(b,c){var d,e,f;return null!=g.imagestatus&&(g.imagestatus=c),null!=(null!=(f=g.events)?f.image_status_changed:void 0)&&g.events.image_status_changed(r,"image_status_changed",g,c),"OK"===c?(e=b.location.latLng,m(e,a),d=h[0],p=new google.maps.StreetViewPanorama(d,o)):void 0})):void c.error(f+": needs a radius to set the camera view from its focal target."):void c.error(f+": focalCoord needs to be defined")},null!=g.control&&(g.control.getOptions=function(){return o},g.control.getPovOptions=function(){return q},g.control.getGObject=function(){return r},g.control.getGPano=function(){return p}),g.$watch("options",function(a,b){return a===b||a===o||k?void 0:j()}),l=!0,g.$watch("focalcoord",function(a,b){return a===b&&!l||null==a?void 0:(l=!1,j())}),g.$on("$destroy",function(){return i()})}}(this))}}}])}.call(this),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapuuid",function(){function a(){}return a.generate=function(){var b=a._gri,c=a._ha;return c(b(32),8)+"-"+c(b(16),4)+"-"+c(16384|b(12),4)+"-"+c(32768|b(14),4)+"-"+c(b(48),12)},a._gri=function(a){return 0>a?NaN:30>=a?0|Math.random()*(1<<a):53>=a?(0|1073741824*Math.random())+1073741824*(0|Math.random()*(1<<a-30)):NaN},a._ha=function(a,b){for(var c=a.toString(16),d=b-c.length,e="0";d>0;d>>>=1,e+=e)1&d&&(c=e+c);return c},a}),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapGoogleMapsUtilV3",function(){return{init:_.once(function(){function b(a){a=a||{},google.maps.OverlayView.apply(this,arguments),this.content_=a.content||"",this.disableAutoPan_=a.disableAutoPan||!1,this.maxWidth_=a.maxWidth||0,this.pixelOffset_=a.pixelOffset||new google.maps.Size(0,0),this.position_=a.position||new google.maps.LatLng(0,0),this.zIndex_=a.zIndex||null,this.boxClass_=a.boxClass||"infoBox",this.boxStyle_=a.boxStyle||{},this.closeBoxMargin_=a.closeBoxMargin||"2px",this.closeBoxURL_=a.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",""===a.closeBoxURL&&(this.closeBoxURL_=""),this.infoBoxClearance_=a.infoBoxClearance||new google.maps.Size(1,1),"undefined"==typeof a.visible&&("undefined"==typeof a.isHidden?a.visible=!0:a.visible=!a.isHidden),this.isHidden_=!a.visible,this.alignBottom_=a.alignBottom||!1,this.pane_=a.pane||"floatPane",this.enableEventPropagation_=a.enableEventPropagation||!1,this.div_=null,this.closeListener_=null,this.moveListener_=null,this.contextListener_=null,this.eventListeners_=null,this.fixedWidthSet_=null}function d(a,b){a.getMarkerClusterer().extend(d,google.maps.OverlayView),this.cluster_=a,this.className_=a.getMarkerClusterer().getClusterClass(),this.styles_=b,this.center_=null,this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(a.getMap())}function e(a){this.markerClusterer_=a,this.map_=a.getMap(),this.gridSize_=a.getGridSize(),this.minClusterSize_=a.getMinimumClusterSize(),this.averageCenter_=a.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new d(this,a.getStyles())}function f(a,b,d){this.extend(f,google.maps.OverlayView),b=b||[],d=d||{},this.markers_=[],this.clusters_=[],this.listeners_=[],this.activeMap_=null,this.ready_=!1,this.gridSize_=d.gridSize||60,this.minClusterSize_=d.minimumClusterSize||2,this.maxZoom_=d.maxZoom||null,this.styles_=d.styles||[],this.title_=d.title||"",this.zoomOnClick_=!0,d.zoomOnClick!==c&&(this.zoomOnClick_=d.zoomOnClick),this.averageCenter_=!1,d.averageCenter!==c&&(this.averageCenter_=d.averageCenter),this.ignoreHidden_=!1,d.ignoreHidden!==c&&(this.ignoreHidden_=d.ignoreHidden),this.enableRetinaIcons_=!1,d.enableRetinaIcons!==c&&(this.enableRetinaIcons_=d.enableRetinaIcons),this.imagePath_=d.imagePath||f.IMAGE_PATH,this.imageExtension_=d.imageExtension||f.IMAGE_EXTENSION,this.imageSizes_=d.imageSizes||f.IMAGE_SIZES,this.calculator_=d.calculator||f.CALCULATOR,this.batchSize_=d.batchSize||f.BATCH_SIZE,this.batchSizeIE_=d.batchSizeIE||f.BATCH_SIZE_IE,this.clusterClass_=d.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(this.batchSize_=this.batchSizeIE_),this.setupStyles_(),this.addMarkers(b,!0),this.setMap(a)}function g(a,b){function c(){}c.prototype=b.prototype,a.superClass_=b.prototype,a.prototype=new c,a.prototype.constructor=a}function h(a,b,c){this.marker_=a,this.handCursorURL_=a.handCursorURL,this.labelDiv_=document.createElement("div"),this.labelDiv_.style.cssText="position: absolute; overflow: hidden;",this.eventDiv_=document.createElement("div"),this.eventDiv_.style.cssText=this.labelDiv_.style.cssText,this.eventDiv_.setAttribute("onselectstart","return false;"),this.eventDiv_.setAttribute("ondragstart","return false;"),this.crossDiv_=h.getSharedCross(b)}function i(a){a=a||{},a.labelContent=a.labelContent||"",a.labelAnchor=a.labelAnchor||new google.maps.Point(0,0),a.labelClass=a.labelClass||"markerLabels",a.labelStyle=a.labelStyle||{},a.labelInBackground=a.labelInBackground||!1,"undefined"==typeof a.labelVisible&&(a.labelVisible=!0),"undefined"==typeof a.raiseOnDrag&&(a.raiseOnDrag=!0),"undefined"==typeof a.clickable&&(a.clickable=!0),"undefined"==typeof a.draggable&&(a.draggable=!1),"undefined"==typeof a.optimized&&(a.optimized=!1),a.crossImage=a.crossImage||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png",a.handCursor=a.handCursor||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur",a.optimized=!1,this.label=new h(this,a.crossImage,a.handCursor),google.maps.Marker.apply(this,arguments)}function j(a){var b=a||{};this.ready_=!1,this.dragging_=!1,a.visible==c&&(a.visible=!0),a.shadow==c&&(a.shadow="7px -3px 5px rgba(88,88,88,0.7)"),a.anchor==c&&(a.anchor=k.BOTTOM),this.setValues(b)}b.prototype=new google.maps.OverlayView,b.prototype.createInfoBoxDiv_=function(){var a,b,c,d=this,e=function(a){a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()},f=function(a){a.returnValue=!1,a.preventDefault&&a.preventDefault(),d.enableEventPropagation_||e(a)};if(!this.div_){if(this.div_=document.createElement("div"),this.setBoxStyle_(),"undefined"==typeof this.content_.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+this.content_:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(this.content_)),this.getPanes()[this.pane_].appendChild(this.div_),this.addClickHandler_(),this.div_.style.width?this.fixedWidthSet_=!0:0!==this.maxWidth_&&this.div_.offsetWidth>this.maxWidth_?(this.div_.style.width=this.maxWidth_,this.div_.style.overflow="auto",this.fixedWidthSet_=!0):(c=this.getBoxWidths_(),this.div_.style.width=this.div_.offsetWidth-c.left-c.right+"px",this.fixedWidthSet_=!1),this.panBox_(this.disableAutoPan_),!this.enableEventPropagation_){for(this.eventListeners_=[],b=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],a=0;a<b.length;a++)this.eventListeners_.push(google.maps.event.addDomListener(this.div_,b[a],e));this.eventListeners_.push(google.maps.event.addDomListener(this.div_,"mouseover",function(a){this.style.cursor="default"}))}this.contextListener_=google.maps.event.addDomListener(this.div_,"contextmenu",f),google.maps.event.trigger(this,"domready")}},b.prototype.getCloseBoxImg_=function(){var a="";return""!==this.closeBoxURL_&&(a="<img",a+=" src='"+this.closeBoxURL_+"'",a+=" align=right",a+=" style='",a+=" position: relative;",a+=" cursor: pointer;",a+=" margin: "+this.closeBoxMargin_+";",a+="'>"),a},b.prototype.addClickHandler_=function(){var a;""!==this.closeBoxURL_?(a=this.div_.firstChild,this.closeListener_=google.maps.event.addDomListener(a,"click",this.getCloseClickHandler_())):this.closeListener_=null},b.prototype.getCloseClickHandler_=function(){var a=this;return function(b){b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation(),google.maps.event.trigger(a,"closeclick"),a.close()}},b.prototype.panBox_=function(a){var b,c,d=0,e=0;if(!a&&(b=this.getMap(),b instanceof google.maps.Map)){b.getBounds().contains(this.position_)||b.setCenter(this.position_),c=b.getBounds();var f=b.getDiv(),g=f.offsetWidth,h=f.offsetHeight,i=this.pixelOffset_.width,j=this.pixelOffset_.height,k=this.div_.offsetWidth,l=this.div_.offsetHeight,m=this.infoBoxClearance_.width,n=this.infoBoxClearance_.height,o=this.getProjection().fromLatLngToContainerPixel(this.position_);if(o.x<-i+m?d=o.x+i-m:o.x+k+i+m>g&&(d=o.x+k+i+m-g),this.alignBottom_?o.y<-j+n+l?e=o.y+j-n-l:o.y+j+n>h&&(e=o.y+j+n-h):o.y<-j+n?e=o.y+j-n:o.y+l+j+n>h&&(e=o.y+l+j+n-h),0!==d||0!==e){b.getCenter();b.panBy(d,e)}}},b.prototype.setBoxStyle_=function(){var a,b;if(this.div_){this.div_.className=this.boxClass_,this.div_.style.cssText="",b=this.boxStyle_;for(a in b)b.hasOwnProperty(a)&&(this.div_.style[a]=b[a]);this.div_.style.WebkitTransform="translateZ(0)","undefined"!=typeof this.div_.style.opacity&&""!==this.div_.style.opacity&&(this.div_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*this.div_.style.opacity+')"',this.div_.style.filter="alpha(opacity="+100*this.div_.style.opacity+")"),this.div_.style.position="absolute",this.div_.style.visibility="hidden",null!==this.zIndex_&&(this.div_.style.zIndex=this.zIndex_)}},b.prototype.getBoxWidths_=function(){var a,b={top:0,bottom:0,left:0,right:0},c=this.div_;return document.defaultView&&document.defaultView.getComputedStyle?(a=c.ownerDocument.defaultView.getComputedStyle(c,""),a&&(b.top=parseInt(a.borderTopWidth,10)||0,b.bottom=parseInt(a.borderBottomWidth,10)||0,b.left=parseInt(a.borderLeftWidth,10)||0,b.right=parseInt(a.borderRightWidth,10)||0)):document.documentElement.currentStyle&&c.currentStyle&&(b.top=parseInt(c.currentStyle.borderTopWidth,10)||0,b.bottom=parseInt(c.currentStyle.borderBottomWidth,10)||0,b.left=parseInt(c.currentStyle.borderLeftWidth,10)||0,b.right=parseInt(c.currentStyle.borderRightWidth,10)||0),b},b.prototype.onRemove=function(){this.div_&&(this.div_.parentNode.removeChild(this.div_),this.div_=null)},b.prototype.draw=function(){this.createInfoBoxDiv_();var a=this.getProjection().fromLatLngToDivPixel(this.position_);this.div_.style.left=a.x+this.pixelOffset_.width+"px",this.alignBottom_?this.div_.style.bottom=-(a.y+this.pixelOffset_.height)+"px":this.div_.style.top=a.y+this.pixelOffset_.height+"px",this.isHidden_?this.div_.style.visibility="hidden":this.div_.style.visibility="visible"},b.prototype.setOptions=function(a){"undefined"!=typeof a.boxClass&&(this.boxClass_=a.boxClass,this.setBoxStyle_()),"undefined"!=typeof a.boxStyle&&(this.boxStyle_=a.boxStyle,this.setBoxStyle_()),"undefined"!=typeof a.content&&this.setContent(a.content),"undefined"!=typeof a.disableAutoPan&&(this.disableAutoPan_=a.disableAutoPan),"undefined"!=typeof a.maxWidth&&(this.maxWidth_=a.maxWidth),"undefined"!=typeof a.pixelOffset&&(this.pixelOffset_=a.pixelOffset),"undefined"!=typeof a.alignBottom&&(this.alignBottom_=a.alignBottom),"undefined"!=typeof a.position&&this.setPosition(a.position),"undefined"!=typeof a.zIndex&&this.setZIndex(a.zIndex),"undefined"!=typeof a.closeBoxMargin&&(this.closeBoxMargin_=a.closeBoxMargin),"undefined"!=typeof a.closeBoxURL&&(this.closeBoxURL_=a.closeBoxURL),"undefined"!=typeof a.infoBoxClearance&&(this.infoBoxClearance_=a.infoBoxClearance),"undefined"!=typeof a.isHidden&&(this.isHidden_=a.isHidden),"undefined"!=typeof a.visible&&(this.isHidden_=!a.visible),"undefined"!=typeof a.enableEventPropagation&&(this.enableEventPropagation_=a.enableEventPropagation),this.div_&&this.draw()},b.prototype.setContent=function(a){this.content_=a,this.div_&&(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.fixedWidthSet_||(this.div_.style.width=""),"undefined"==typeof a.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+a:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(a)),this.fixedWidthSet_||(this.div_.style.width=this.div_.offsetWidth+"px","undefined"==typeof a.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+a:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(a))),this.addClickHandler_()),google.maps.event.trigger(this,"content_changed")},b.prototype.setPosition=function(a){this.position_=a,this.div_&&this.draw(),google.maps.event.trigger(this,"position_changed")},b.prototype.setZIndex=function(a){this.zIndex_=a,this.div_&&(this.div_.style.zIndex=a),google.maps.event.trigger(this,"zindex_changed")},b.prototype.setVisible=function(a){this.isHidden_=!a,this.div_&&(this.div_.style.visibility=this.isHidden_?"hidden":"visible")},b.prototype.getContent=function(){return this.content_},b.prototype.getPosition=function(){return this.position_},b.prototype.getZIndex=function(){return this.zIndex_},b.prototype.getVisible=function(){var a;return a="undefined"==typeof this.getMap()||null===this.getMap()?!1:!this.isHidden_},b.prototype.show=function(){this.isHidden_=!1,this.div_&&(this.div_.style.visibility="visible")},b.prototype.hide=function(){this.isHidden_=!0,this.div_&&(this.div_.style.visibility="hidden")},b.prototype.open=function(a,b){var c=this;b&&(this.position_=b.getPosition(),this.moveListener_=google.maps.event.addListener(b,"position_changed",function(){c.setPosition(this.getPosition())})),this.setMap(a),this.div_&&this.panBox_()},b.prototype.close=function(){var a;if(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.eventListeners_){for(a=0;a<this.eventListeners_.length;a++)google.maps.event.removeListener(this.eventListeners_[a]);this.eventListeners_=null}this.moveListener_&&(google.maps.event.removeListener(this.moveListener_),this.moveListener_=null),this.contextListener_&&(google.maps.event.removeListener(this.contextListener_),this.contextListener_=null),this.setMap(null)},function(){function b(a,b){var c=this,d=new google.maps.OverlayView;d.onAdd=function(){c.init_(a,b)},d.draw=function(){},d.onRemove=function(){},d.setMap(a),this.prjov_=d}var c=function(a){var b;switch(a){case"thin":b="2px";break;case"medium":b="4px";break;case"thick":b="6px";break;default:b=a}return b},d=function(a){var b,d={};if(document.defaultView&&document.defaultView.getComputedStyle){if(b=a.ownerDocument.defaultView.getComputedStyle(a,""))return d.top=parseInt(b.borderTopWidth,10)||0,d.bottom=parseInt(b.borderBottomWidth,10)||0,d.left=parseInt(b.borderLeftWidth,10)||0,d.right=parseInt(b.borderRightWidth,10)||0,d}else if(document.documentElement.currentStyle&&a.currentStyle)return d.top=parseInt(c(a.currentStyle.borderTopWidth),10)||0,d.bottom=parseInt(c(a.currentStyle.borderBottomWidth),10)||0,d.left=parseInt(c(a.currentStyle.borderLeftWidth),10)||0,d.right=parseInt(c(a.currentStyle.borderRightWidth),10)||0,d;return d.top=parseInt(a.style["border-top-width"],10)||0,d.bottom=parseInt(a.style["border-bottom-width"],10)||0,d.left=parseInt(a.style["border-left-width"],10)||0,d.right=parseInt(a.style["border-right-width"],10)||0,d},e={x:0,y:0},f=function(a){e.x="undefined"!=typeof document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft,e.y="undefined"!=typeof document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop};f();var g=function(b){var c=0,d=0;return b=b||a.event,"undefined"!=typeof b.pageX?(c=b.pageX,d=b.pageY):"undefined"!=typeof b.clientX&&(c=b.clientX+e.x,d=b.clientY+e.y),{left:c,top:d}},h=function(b){for(var c=b.offsetLeft,d=b.offsetTop,e=b.offsetParent;null!==e;){e!==document.body&&e!==document.documentElement&&(c-=e.scrollLeft,d-=e.scrollTop);var f=e,g=f.offsetLeft,h=f.offsetTop;if(!g&&!h&&a.getComputedStyle){var i=document.defaultView.getComputedStyle(f,null).MozTransform||document.defaultView.getComputedStyle(f,null).WebkitTransform;if(i&&"string"==typeof i){var j=i.split(",");g+=parseInt(j[4],10)||0,h+=parseInt(j[5],10)||0}}c+=g,d+=h,e=e.offsetParent}return{left:c,top:d}},i=function(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},j=function(a,b){"undefined"!=typeof b&&(a.style.opacity=b),"undefined"!=typeof a.style.opacity&&""!==a.style.opacity&&(a.style.filter="alpha(opacity="+100*a.style.opacity+")")};b.prototype.init_=function(b,c){var e,g=this;for(this.map_=b,c=c||{},this.key_=c.key||"shift",this.key_=this.key_.toLowerCase(),this.borderWidths_=d(this.map_.getDiv()),this.veilDiv_=[],e=0;4>e;e++)this.veilDiv_[e]=document.createElement("div"),this.veilDiv_[e].onselectstart=function(){return!1},i(this.veilDiv_[e].style,{backgroundColor:"gray",opacity:.25,cursor:"crosshair"}),i(this.veilDiv_[e].style,c.paneStyle),i(this.veilDiv_[e].style,c.veilStyle),i(this.veilDiv_[e].style,{position:"absolute",overflow:"hidden",display:"none"}),"shift"===this.key_&&(this.veilDiv_[e].style.MozUserSelect="none"),j(this.veilDiv_[e]),"transparent"===this.veilDiv_[e].style.backgroundColor&&(this.veilDiv_[e].style.backgroundColor="white",j(this.veilDiv_[e],0)),this.map_.getDiv().appendChild(this.veilDiv_[e]);this.noZoom_=c.noZoom||!1,this.visualEnabled_=c.visualEnabled||!1,this.visualClass_=c.visualClass||"",this.visualPosition_=c.visualPosition||google.maps.ControlPosition.LEFT_TOP,this.visualPositionOffset_=c.visualPositionOffset||new google.maps.Size(35,0),this.visualPositionIndex_=c.visualPositionIndex||null,this.visualSprite_=c.visualSprite||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/mapfiles/ftr/controls/dragzoom_btn.png",this.visualSize_=c.visualSize||new google.maps.Size(20,20),this.visualTips_=c.visualTips||{},this.visualTips_.off=this.visualTips_.off||"Turn on drag zoom mode",this.visualTips_.on=this.visualTips_.on||"Turn off drag zoom mode",this.boxDiv_=document.createElement("div"),i(this.boxDiv_.style,{border:"4px solid #736AFF"}),i(this.boxDiv_.style,c.boxStyle),i(this.boxDiv_.style,{position:"absolute",display:"none"}),j(this.boxDiv_),this.map_.getDiv().appendChild(this.boxDiv_),this.boxBorderWidths_=d(this.boxDiv_),this.listeners_=[google.maps.event.addDomListener(document,"keydown",function(a){g.onKeyDown_(a)}),google.maps.event.addDomListener(document,"keyup",function(a){g.onKeyUp_(a)}),google.maps.event.addDomListener(this.veilDiv_[0],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[1],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[2],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[3],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(document,"mousedown",function(a){g.onMouseDownDocument_(a)}),google.maps.event.addDomListener(document,"mousemove",function(a){g.onMouseMove_(a)}),google.maps.event.addDomListener(document,"mouseup",function(a){g.onMouseUp_(a)}),google.maps.event.addDomListener(a,"scroll",f)],this.hotKeyDown_=!1,this.mouseDown_=!1,this.dragging_=!1,this.startPt_=null,this.endPt_=null,this.mapWidth_=null,this.mapHeight_=null,this.mousePosn_=null,this.mapPosn_=null,this.visualEnabled_&&(this.buttonDiv_=this.initControl_(this.visualPositionOffset_),null!==this.visualPositionIndex_&&(this.buttonDiv_.index=this.visualPositionIndex_),this.map_.controls[this.visualPosition_].push(this.buttonDiv_),this.controlIndex_=this.map_.controls[this.visualPosition_].length-1)},b.prototype.initControl_=function(a){var b,c,d=this;return b=document.createElement("div"),b.className=this.visualClass_,b.style.position="relative",b.style.overflow="hidden",b.style.height=this.visualSize_.height+"px",b.style.width=this.visualSize_.width+"px",b.title=this.visualTips_.off,c=document.createElement("img"),c.src=this.visualSprite_,c.style.position="absolute",c.style.left=-(2*this.visualSize_.width)+"px",c.style.top="0px",b.appendChild(c),b.onclick=function(a){d.hotKeyDown_=!d.hotKeyDown_,d.hotKeyDown_?(d.buttonDiv_.firstChild.style.left=-(0*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.on,d.activatedByControl_=!0,google.maps.event.trigger(d,"activate")):(d.buttonDiv_.firstChild.style.left=-(2*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.off,google.maps.event.trigger(d,"deactivate")),d.onMouseMove_(a)},b.onmouseover=function(){d.buttonDiv_.firstChild.style.left=-(1*d.visualSize_.width)+"px"},b.onmouseout=function(){d.hotKeyDown_?(d.buttonDiv_.firstChild.style.left=-(0*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.on):(d.buttonDiv_.firstChild.style.left=-(2*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.off)},b.ondragstart=function(){return!1},i(b.style,{cursor:"pointer",marginTop:a.height+"px",marginLeft:a.width+"px"}),b},b.prototype.isHotKeyDown_=function(b){var c;if(b=b||a.event,c=b.shiftKey&&"shift"===this.key_||b.altKey&&"alt"===this.key_||b.ctrlKey&&"ctrl"===this.key_,!c)switch(b.keyCode){case 16:"shift"===this.key_&&(c=!0);break;case 17:"ctrl"===this.key_&&(c=!0);break;case 18:"alt"===this.key_&&(c=!0)}return c},b.prototype.isMouseOnMap_=function(){var a=this.mousePosn_;if(a){var b=this.mapPosn_,c=this.map_.getDiv();return a.left>b.left&&a.left<b.left+c.offsetWidth&&a.top>b.top&&a.top<b.top+c.offsetHeight}return!1},b.prototype.setVeilVisibility_=function(){var a;if(this.map_&&this.hotKeyDown_&&this.isMouseOnMap_()){var b=this.map_.getDiv();if(this.mapWidth_=b.offsetWidth-(this.borderWidths_.left+this.borderWidths_.right),this.mapHeight_=b.offsetHeight-(this.borderWidths_.top+this.borderWidths_.bottom),this.activatedByControl_){var c=parseInt(this.buttonDiv_.style.left,10)+this.visualPositionOffset_.width,d=parseInt(this.buttonDiv_.style.top,10)+this.visualPositionOffset_.height,e=this.visualSize_.width,f=this.visualSize_.height;for(this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.width=c+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",this.veilDiv_[1].style.top="0px",this.veilDiv_[1].style.left=c+e+"px",this.veilDiv_[1].style.width=this.mapWidth_-(c+e)+"px",this.veilDiv_[1].style.height=this.mapHeight_+"px",this.veilDiv_[2].style.top="0px",this.veilDiv_[2].style.left=c+"px",this.veilDiv_[2].style.width=e+"px",this.veilDiv_[2].style.height=d+"px",this.veilDiv_[3].style.top=d+f+"px",this.veilDiv_[3].style.left=c+"px",this.veilDiv_[3].style.width=e+"px",this.veilDiv_[3].style.height=this.mapHeight_-(d+f)+"px",a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="block"}else{for(this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.width=this.mapWidth_+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",a=1;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.width="0px",this.veilDiv_[a].style.height="0px";for(a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="block"}}else for(a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="none"},b.prototype.onKeyDown_=function(a){this.map_&&!this.hotKeyDown_&&this.isHotKeyDown_(a)&&(this.mapPosn_=h(this.map_.getDiv()),this.hotKeyDown_=!0,this.activatedByControl_=!1,this.setVeilVisibility_(),google.maps.event.trigger(this,"activate"))},b.prototype.getMousePoint_=function(a){var b=g(a),c=new google.maps.Point;return c.x=b.left-this.mapPosn_.left-this.borderWidths_.left,c.y=b.top-this.mapPosn_.top-this.borderWidths_.top,c.x=Math.min(c.x,this.mapWidth_),c.y=Math.min(c.y,this.mapHeight_),c.x=Math.max(c.x,0),c.y=Math.max(c.y,0),c},b.prototype.onMouseDown_=function(a){if(this.map_&&this.hotKeyDown_){this.mapPosn_=h(this.map_.getDiv()),this.dragging_=!0,this.startPt_=this.endPt_=this.getMousePoint_(a),this.boxDiv_.style.width=this.boxDiv_.style.height="0px";var b=this.prjov_.getProjection(),c=b.fromContainerPixelToLatLng(this.startPt_);google.maps.event.trigger(this,"dragstart",c)}},b.prototype.onMouseDownDocument_=function(a){this.mouseDown_=!0},b.prototype.onMouseMove_=function(a){if(this.mousePosn_=g(a),this.dragging_){this.endPt_=this.getMousePoint_(a);var b=Math.min(this.startPt_.x,this.endPt_.x),c=Math.min(this.startPt_.y,this.endPt_.y),d=Math.abs(this.startPt_.x-this.endPt_.x),e=Math.abs(this.startPt_.y-this.endPt_.y),f=Math.max(0,d-(this.boxBorderWidths_.left+this.boxBorderWidths_.right)),i=Math.max(0,e-(this.boxBorderWidths_.top+this.boxBorderWidths_.bottom));this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.width=b+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",this.veilDiv_[1].style.top="0px",this.veilDiv_[1].style.left=b+d+"px",this.veilDiv_[1].style.width=this.mapWidth_-(b+d)+"px",this.veilDiv_[1].style.height=this.mapHeight_+"px",this.veilDiv_[2].style.top="0px",this.veilDiv_[2].style.left=b+"px",this.veilDiv_[2].style.width=d+"px",this.veilDiv_[2].style.height=c+"px",this.veilDiv_[3].style.top=c+e+"px",this.veilDiv_[3].style.left=b+"px",this.veilDiv_[3].style.width=d+"px",this.veilDiv_[3].style.height=this.mapHeight_-(c+e)+"px",this.boxDiv_.style.top=c+"px",this.boxDiv_.style.left=b+"px",this.boxDiv_.style.width=f+"px",this.boxDiv_.style.height=i+"px",this.boxDiv_.style.display="block",google.maps.event.trigger(this,"drag",new google.maps.Point(b,c+e),new google.maps.Point(b+d,c),this.prjov_.getProjection())}else this.mouseDown_||(this.mapPosn_=h(this.map_.getDiv()),this.setVeilVisibility_())},b.prototype.onMouseUp_=function(a){var b,c=this;if(this.mouseDown_=!1,this.dragging_){if(this.getMousePoint_(a).x===this.startPt_.x&&this.getMousePoint_(a).y===this.startPt_.y)return void this.onKeyUp_(a);var d=Math.min(this.startPt_.x,this.endPt_.x),e=Math.min(this.startPt_.y,this.endPt_.y),f=Math.abs(this.startPt_.x-this.endPt_.x),g=Math.abs(this.startPt_.y-this.endPt_.y),h=!0;h&&(d+=this.borderWidths_.left,e+=this.borderWidths_.top);var i=this.prjov_.getProjection(),j=i.fromContainerPixelToLatLng(new google.maps.Point(d,e+g)),k=i.fromContainerPixelToLatLng(new google.maps.Point(d+f,e)),l=new google.maps.LatLngBounds(j,k);if(this.noZoom_)this.boxDiv_.style.display="none";else{b=this.map_.getZoom(),this.map_.fitBounds(l),this.map_.getZoom()<b&&this.map_.setZoom(b);var m=i.fromLatLngToContainerPixel(j),n=i.fromLatLngToContainerPixel(k);h&&(m.x-=this.borderWidths_.left,m.y-=this.borderWidths_.top,n.x-=this.borderWidths_.left,n.y-=this.borderWidths_.top),this.boxDiv_.style.left=m.x+"px",this.boxDiv_.style.top=n.y+"px",this.boxDiv_.style.width=Math.abs(n.x-m.x)-(this.boxBorderWidths_.left+this.boxBorderWidths_.right)+"px",this.boxDiv_.style.height=Math.abs(n.y-m.y)-(this.boxBorderWidths_.top+this.boxBorderWidths_.bottom)+"px",setTimeout(function(){c.boxDiv_.style.display="none"},1e3)}this.dragging_=!1,this.onMouseMove_(a),google.maps.event.trigger(this,"dragend",l),this.isHotKeyDown_(a)||this.onKeyUp_(a)}},b.prototype.onKeyUp_=function(a){var b,c,d,e,f,g,h,i,j=null;if(this.map_&&this.hotKeyDown_){for(this.hotKeyDown_=!1,this.dragging_&&(this.boxDiv_.style.display="none",this.dragging_=!1,c=Math.min(this.startPt_.x,this.endPt_.x),d=Math.min(this.startPt_.y,this.endPt_.y),e=Math.abs(this.startPt_.x-this.endPt_.x),f=Math.abs(this.startPt_.y-this.endPt_.y),g=this.prjov_.getProjection(),h=g.fromContainerPixelToLatLng(new google.maps.Point(c,d+f)),i=g.fromContainerPixelToLatLng(new google.maps.Point(c+e,d)),j=new google.maps.LatLngBounds(h,i)),b=0;b<this.veilDiv_.length;b++)this.veilDiv_[b].style.display="none";
this.visualEnabled_&&(this.buttonDiv_.firstChild.style.left=-(2*this.visualSize_.width)+"px",this.buttonDiv_.title=this.visualTips_.off,this.buttonDiv_.style.display=""),google.maps.event.trigger(this,"deactivate",j)}},google.maps.Map.prototype.enableKeyDragZoom=function(a){this.dragZoom_=new b(this,a)},google.maps.Map.prototype.disableKeyDragZoom=function(){var a,b=this.dragZoom_;if(b){for(a=0;a<b.listeners_.length;++a)google.maps.event.removeListener(b.listeners_[a]);for(this.getDiv().removeChild(b.boxDiv_),a=0;a<b.veilDiv_.length;a++)this.getDiv().removeChild(b.veilDiv_[a]);b.visualEnabled_&&this.controls[b.visualPosition_].removeAt(b.controlIndex_),b.prjov_.setMap(null),this.dragZoom_=null}},google.maps.Map.prototype.keyDragZoomEnabled=function(){return null!==this.dragZoom_},google.maps.Map.prototype.getDragZoomObject=function(){return this.dragZoom_}}(),d.prototype.onAdd=function(){var a,b,c=this;this.div_=document.createElement("div"),this.div_.className=this.className_,this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",function(){b=a}),google.maps.event.addDomListener(this.div_,"mousedown",function(){a=!0,b=!1}),google.maps.event.addDomListener(this.div_,"click",function(d){if(a=!1,!b){var e,f,g=c.cluster_.getMarkerClusterer();google.maps.event.trigger(g,"click",c.cluster_),google.maps.event.trigger(g,"clusterclick",c.cluster_),g.getZoomOnClick()&&(f=g.getMaxZoom(),e=c.cluster_.getBounds(),g.getMap().fitBounds(e),setTimeout(function(){g.getMap().fitBounds(e),null!==f&&g.getMap().getZoom()>f&&g.getMap().setZoom(f+1)},100)),d.cancelBubble=!0,d.stopPropagation&&d.stopPropagation()}}),google.maps.event.addDomListener(this.div_,"mouseover",function(){var a=c.cluster_.getMarkerClusterer();google.maps.event.trigger(a,"mouseover",c.cluster_)}),google.maps.event.addDomListener(this.div_,"mouseout",function(){var a=c.cluster_.getMarkerClusterer();google.maps.event.trigger(a,"mouseout",c.cluster_)})},d.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},d.prototype.draw=function(){if(this.visible_){var a=this.getPosFromLatLng_(this.center_);this.div_.style.top=a.y+"px",this.div_.style.left=a.x+"px"}},d.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},d.prototype.show=function(){if(this.div_){var a="",b=this.backgroundPosition_.split(" "),c=parseInt(b[0].trim(),10),d=parseInt(b[1].trim(),10),e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),a="<img src='"+this.url_+"' style='position: absolute; top: "+d+"px; left: "+c+"px; ",this.cluster_.getMarkerClusterer().enableRetinaIcons_||(a+="clip: rect("+-1*d+"px, "+(-1*c+this.width_)+"px, "+(-1*d+this.height_)+"px, "+-1*c+"px);"),a+="'>",this.div_.innerHTML=a+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>","undefined"==typeof this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""}this.visible_=!0},d.prototype.useStyle=function(a){this.sums_=a;var b=Math.max(0,a.index-1);b=Math.min(this.styles_.length-1,b);var c=this.styles_[b];this.url_=c.url,this.height_=c.height,this.width_=c.width,this.anchorText_=c.anchorText||[0,0],this.anchorIcon_=c.anchorIcon||[parseInt(this.height_/2,10),parseInt(this.width_/2,10)],this.textColor_=c.textColor||"black",this.textSize_=c.textSize||11,this.textDecoration_=c.textDecoration||"none",this.fontWeight_=c.fontWeight||"bold",this.fontStyle_=c.fontStyle||"normal",this.fontFamily_=c.fontFamily||"Arial,sans-serif",this.backgroundPosition_=c.backgroundPosition||"0 0"},d.prototype.setCenter=function(a){this.center_=a},d.prototype.createCss=function(a){var b=[];return b.push("cursor: pointer;"),b.push("position: absolute; top: "+a.y+"px; left: "+a.x+"px;"),b.push("width: "+this.width_+"px; height: "+this.height_+"px;"),b.join("")},d.prototype.getPosFromLatLng_=function(a){var b=this.getProjection().fromLatLngToDivPixel(a);return b.x-=this.anchorIcon_[1],b.y-=this.anchorIcon_[0],b.x=parseInt(b.x,10),b.y=parseInt(b.y,10),b},e.prototype.getSize=function(){return this.markers_.length},e.prototype.getMarkers=function(){return this.markers_},e.prototype.getCenter=function(){return this.center_},e.prototype.getMap=function(){return this.map_},e.prototype.getMarkerClusterer=function(){return this.markerClusterer_},e.prototype.getBounds=function(){var a,b=new google.maps.LatLngBounds(this.center_,this.center_),c=this.getMarkers();for(a=0;a<c.length;a++)b.extend(c[a].getPosition());return b},e.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},e.prototype.addMarker=function(a){var b,c,d;if(this.isMarkerAlreadyAdded_(a))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,f=(this.center_.lat()*(e-1)+a.getPosition().lat())/e,g=(this.center_.lng()*(e-1)+a.getPosition().lng())/e;this.center_=new google.maps.LatLng(f,g),this.calculateBounds_()}}else this.center_=a.getPosition(),this.calculateBounds_();if(a.isAdded=!0,this.markers_.push(a),c=this.markers_.length,d=this.markerClusterer_.getMaxZoom(),null!==d&&this.map_.getZoom()>d)a.getMap()!==this.map_&&a.setMap(this.map_);else if(c<this.minClusterSize_)a.getMap()!==this.map_&&a.setMap(this.map_);else if(c===this.minClusterSize_)for(b=0;c>b;b++)this.markers_[b].setMap(null);else a.setMap(null);return this.updateIcon_(),!0},e.prototype.isMarkerInClusterBounds=function(a){return this.bounds_.contains(a.getPosition())},e.prototype.calculateBounds_=function(){var a=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(a)},e.prototype.updateIcon_=function(){var a=this.markers_.length,b=this.markerClusterer_.getMaxZoom();if(null!==b&&this.map_.getZoom()>b)return void this.clusterIcon_.hide();if(a<this.minClusterSize_)return void this.clusterIcon_.hide();var c=this.markerClusterer_.getStyles().length,d=this.markerClusterer_.getCalculator()(this.markers_,c);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(d),this.clusterIcon_.show()},e.prototype.isMarkerAlreadyAdded_=function(a){var b;if(this.markers_.indexOf)return-1!==this.markers_.indexOf(a);for(b=0;b<this.markers_.length;b++)if(a===this.markers_[b])return!0;return!1},f.prototype.onAdd=function(){var a=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",function(){a.resetViewport_(!1),(this.getZoom()===(this.get("minZoom")||0)||this.getZoom()===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")}),google.maps.event.addListener(this.getMap(),"idle",function(){a.redraw_()})]},f.prototype.onRemove=function(){var a;for(a=0;a<this.markers_.length;a++)this.markers_[a].getMap()!==this.activeMap_&&this.markers_[a].setMap(this.activeMap_);for(a=0;a<this.clusters_.length;a++)this.clusters_[a].remove();for(this.clusters_=[],a=0;a<this.listeners_.length;a++)google.maps.event.removeListener(this.listeners_[a]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},f.prototype.draw=function(){},f.prototype.setupStyles_=function(){var a,b;if(!(this.styles_.length>0))for(a=0;a<this.imageSizes_.length;a++)b=this.imageSizes_[a],this.styles_.push({url:this.imagePath_+(a+1)+"."+this.imageExtension_,height:b,width:b})},f.prototype.fitMapToMarkers=function(){var a,b=this.getMarkers(),c=new google.maps.LatLngBounds;for(a=0;a<b.length;a++)c.extend(b[a].getPosition());this.getMap().fitBounds(c)},f.prototype.getGridSize=function(){return this.gridSize_},f.prototype.setGridSize=function(a){this.gridSize_=a},f.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},f.prototype.setMinimumClusterSize=function(a){this.minClusterSize_=a},f.prototype.getMaxZoom=function(){return this.maxZoom_},f.prototype.setMaxZoom=function(a){this.maxZoom_=a},f.prototype.getStyles=function(){return this.styles_},f.prototype.setStyles=function(a){this.styles_=a},f.prototype.getTitle=function(){return this.title_},f.prototype.setTitle=function(a){this.title_=a},f.prototype.getZoomOnClick=function(){return this.zoomOnClick_},f.prototype.setZoomOnClick=function(a){this.zoomOnClick_=a},f.prototype.getAverageCenter=function(){return this.averageCenter_},f.prototype.setAverageCenter=function(a){this.averageCenter_=a},f.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},f.prototype.setIgnoreHidden=function(a){this.ignoreHidden_=a},f.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},f.prototype.setEnableRetinaIcons=function(a){this.enableRetinaIcons_=a},f.prototype.getImageExtension=function(){return this.imageExtension_},f.prototype.setImageExtension=function(a){this.imageExtension_=a},f.prototype.getImagePath=function(){return this.imagePath_},f.prototype.setImagePath=function(a){this.imagePath_=a},f.prototype.getImageSizes=function(){return this.imageSizes_},f.prototype.setImageSizes=function(a){this.imageSizes_=a},f.prototype.getCalculator=function(){return this.calculator_},f.prototype.setCalculator=function(a){this.calculator_=a},f.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},f.prototype.setBatchSizeIE=function(a){this.batchSizeIE_=a},f.prototype.getClusterClass=function(){return this.clusterClass_},f.prototype.setClusterClass=function(a){this.clusterClass_=a},f.prototype.getMarkers=function(){return this.markers_},f.prototype.getTotalMarkers=function(){return this.markers_.length},f.prototype.getClusters=function(){return this.clusters_},f.prototype.getTotalClusters=function(){return this.clusters_.length},f.prototype.addMarker=function(a,b){this.pushMarkerTo_(a),b||this.redraw_()},f.prototype.addMarkers=function(a,b){var c;for(c in a)a.hasOwnProperty(c)&&this.pushMarkerTo_(a[c]);b||this.redraw_()},f.prototype.pushMarkerTo_=function(a){if(a.getDraggable()){var b=this;google.maps.event.addListener(a,"dragend",function(){b.ready_&&(this.isAdded=!1,b.repaint())})}a.isAdded=!1,this.markers_.push(a)},f.prototype.removeMarker=function(a,b){var c=this.removeMarker_(a);return!b&&c&&this.repaint(),c},f.prototype.removeMarkers=function(a,b){var c,d,e=!1;for(c=0;c<a.length;c++)d=this.removeMarker_(a[c]),e=e||d;return!b&&e&&this.repaint(),e},f.prototype.removeMarker_=function(a){var b,c=-1;if(this.markers_.indexOf)c=this.markers_.indexOf(a);else for(b=0;b<this.markers_.length;b++)if(a===this.markers_[b]){c=b;break}return-1===c?!1:(a.setMap(null),this.markers_.splice(c,1),!0)},f.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},f.prototype.repaint=function(){var a=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout(function(){var b;for(b=0;b<a.length;b++)a[b].remove()},0)},f.prototype.getExtendedBounds=function(a){var b=this.getProjection(),c=new google.maps.LatLng(a.getNorthEast().lat(),a.getNorthEast().lng()),d=new google.maps.LatLng(a.getSouthWest().lat(),a.getSouthWest().lng()),e=b.fromLatLngToDivPixel(c);e.x+=this.gridSize_,e.y-=this.gridSize_;var f=b.fromLatLngToDivPixel(d);f.x-=this.gridSize_,f.y+=this.gridSize_;var g=b.fromDivPixelToLatLng(e),h=b.fromDivPixelToLatLng(f);return a.extend(g),a.extend(h),a},f.prototype.redraw_=function(){this.createClusters_(0)},f.prototype.resetViewport_=function(a){var b,c;for(b=0;b<this.clusters_.length;b++)this.clusters_[b].remove();for(this.clusters_=[],b=0;b<this.markers_.length;b++)c=this.markers_[b],c.isAdded=!1,a&&c.setMap(null)},f.prototype.distanceBetweenPoints_=function(a,b){var c=6371,d=(b.lat()-a.lat())*Math.PI/180,e=(b.lng()-a.lng())*Math.PI/180,f=Math.sin(d/2)*Math.sin(d/2)+Math.cos(a.lat()*Math.PI/180)*Math.cos(b.lat()*Math.PI/180)*Math.sin(e/2)*Math.sin(e/2),g=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),h=c*g;return h},f.prototype.isMarkerInBounds_=function(a,b){return b.contains(a.getPosition())},f.prototype.addToClosestCluster_=function(a){var b,c,d,f,g=4e4,h=null;for(b=0;b<this.clusters_.length;b++)d=this.clusters_[b],f=d.getCenter(),f&&(c=this.distanceBetweenPoints_(f,a.getPosition()),g>c&&(g=c,h=d));h&&h.isMarkerInClusterBounds(a)?h.addMarker(a):(d=new e(this),d.addMarker(a),this.clusters_.push(d))},f.prototype.createClusters_=function(a){var b,c,d,e=this;if(this.ready_){0===a&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),d=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var f=this.getExtendedBounds(d),g=Math.min(a+this.batchSize_,this.markers_.length);for(b=a;g>b;b++)c=this.markers_[b],!c.isAdded&&this.isMarkerInBounds_(c,f)&&(!this.ignoreHidden_||this.ignoreHidden_&&c.getVisible())&&this.addToClosestCluster_(c);g<this.markers_.length?this.timerRefStatic=setTimeout(function(){e.createClusters_(g)},0):(delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this))}},f.prototype.extend=function(a,b){return function(a){var b;for(b in a.prototype)this.prototype[b]=a.prototype[b];return this}.apply(a,[b])},f.CALCULATOR=function(a,b){for(var c=0,d="",e=a.length.toString(),f=e;0!==f;)f=parseInt(f/10,10),c++;return c=Math.min(c,b),{text:e,index:c,title:d}},f.BATCH_SIZE=2e3,f.BATCH_SIZE_IE=500,f.IMAGE_PATH="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m",f.IMAGE_EXTENSION="png",f.IMAGE_SIZES=[53,56,66,78,90],g(h,google.maps.OverlayView),h.getSharedCross=function(a){var b;return"undefined"==typeof h.getSharedCross.crossDiv&&(b=document.createElement("img"),b.style.cssText="position: absolute; z-index: 1000002; display: none;",b.style.marginLeft="-8px",b.style.marginTop="-9px",b.src=a,h.getSharedCross.crossDiv=b),h.getSharedCross.crossDiv},h.prototype.onAdd=function(){var a,b,c,d,e,f,g,i=this,j=!1,k=!1,l=20,m="url("+this.handCursorURL_+")",n=function(a){a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()},o=function(){i.marker_.setAnimation(null)};this.getPanes().overlayImage.appendChild(this.labelDiv_),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_),"undefined"==typeof h.getSharedCross.processed&&(this.getPanes().overlayImage.appendChild(this.crossDiv_),h.getSharedCross.processed=!0),this.listeners_=[google.maps.event.addDomListener(this.eventDiv_,"mouseover",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(this.style.cursor="pointer",google.maps.event.trigger(i.marker_,"mouseover",a))}),google.maps.event.addDomListener(this.eventDiv_,"mouseout",function(a){!i.marker_.getDraggable()&&!i.marker_.getClickable()||k||(this.style.cursor=i.marker_.getCursor(),google.maps.event.trigger(i.marker_,"mouseout",a))}),google.maps.event.addDomListener(this.eventDiv_,"mousedown",function(a){k=!1,i.marker_.getDraggable()&&(j=!0,this.style.cursor=m),(i.marker_.getDraggable()||i.marker_.getClickable())&&(google.maps.event.trigger(i.marker_,"mousedown",a),n(a))}),google.maps.event.addDomListener(document,"mouseup",function(b){var c;if(j&&(j=!1,i.eventDiv_.style.cursor="pointer",google.maps.event.trigger(i.marker_,"mouseup",b)),k){if(e){c=i.getProjection().fromLatLngToDivPixel(i.marker_.getPosition()),c.y+=l,i.marker_.setPosition(i.getProjection().fromDivPixelToLatLng(c));try{i.marker_.setAnimation(google.maps.Animation.BOUNCE),setTimeout(o,1406)}catch(f){}}i.crossDiv_.style.display="none",i.marker_.setZIndex(a),d=!0,k=!1,b.latLng=i.marker_.getPosition(),google.maps.event.trigger(i.marker_,"dragend",b)}}),google.maps.event.addListener(i.marker_.getMap(),"mousemove",function(d){var h;j&&(k?(d.latLng=new google.maps.LatLng(d.latLng.lat()-b,d.latLng.lng()-c),h=i.getProjection().fromLatLngToDivPixel(d.latLng),e&&(i.crossDiv_.style.left=h.x+"px",i.crossDiv_.style.top=h.y+"px",i.crossDiv_.style.display="",h.y-=l),i.marker_.setPosition(i.getProjection().fromDivPixelToLatLng(h)),e&&(i.eventDiv_.style.top=h.y+l+"px"),google.maps.event.trigger(i.marker_,"drag",d)):(b=d.latLng.lat()-i.marker_.getPosition().lat(),c=d.latLng.lng()-i.marker_.getPosition().lng(),a=i.marker_.getZIndex(),f=i.marker_.getPosition(),g=i.marker_.getMap().getCenter(),e=i.marker_.get("raiseOnDrag"),k=!0,i.marker_.setZIndex(1e6),d.latLng=i.marker_.getPosition(),google.maps.event.trigger(i.marker_,"dragstart",d)))}),google.maps.event.addDomListener(document,"keydown",function(a){k&&27===a.keyCode&&(e=!1,i.marker_.setPosition(f),i.marker_.getMap().setCenter(g),google.maps.event.trigger(document,"mouseup",a))}),google.maps.event.addDomListener(this.eventDiv_,"click",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(d?d=!1:(google.maps.event.trigger(i.marker_,"click",a),n(a)))}),google.maps.event.addDomListener(this.eventDiv_,"dblclick",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(google.maps.event.trigger(i.marker_,"dblclick",a),n(a))}),google.maps.event.addListener(this.marker_,"dragstart",function(a){k||(e=this.get("raiseOnDrag"))}),google.maps.event.addListener(this.marker_,"drag",function(a){k||e&&(i.setPosition(l),i.labelDiv_.style.zIndex=1e6+(this.get("labelInBackground")?-1:1))}),google.maps.event.addListener(this.marker_,"dragend",function(a){k||e&&i.setPosition(0)}),google.maps.event.addListener(this.marker_,"position_changed",function(){i.setPosition()}),google.maps.event.addListener(this.marker_,"zindex_changed",function(){i.setZIndex()}),google.maps.event.addListener(this.marker_,"visible_changed",function(){i.setVisible()}),google.maps.event.addListener(this.marker_,"labelvisible_changed",function(){i.setVisible()}),google.maps.event.addListener(this.marker_,"title_changed",function(){i.setTitle()}),google.maps.event.addListener(this.marker_,"labelcontent_changed",function(){i.setContent()}),google.maps.event.addListener(this.marker_,"labelanchor_changed",function(){i.setAnchor()}),google.maps.event.addListener(this.marker_,"labelclass_changed",function(){i.setStyles()}),google.maps.event.addListener(this.marker_,"labelstyle_changed",function(){i.setStyles()})]},h.prototype.onRemove=function(){var a;for(this.labelDiv_.parentNode.removeChild(this.labelDiv_),this.eventDiv_.parentNode.removeChild(this.eventDiv_),a=0;a<this.listeners_.length;a++)google.maps.event.removeListener(this.listeners_[a])},h.prototype.draw=function(){this.setContent(),this.setTitle(),this.setStyles()},h.prototype.setContent=function(){var a=this.marker_.get("labelContent");"undefined"==typeof a.nodeType?(this.labelDiv_.innerHTML=a,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(a),a=a.cloneNode(!0),this.eventDiv_.innerHTML="",this.eventDiv_.appendChild(a))},h.prototype.setTitle=function(){this.eventDiv_.title=this.marker_.getTitle()||""},h.prototype.setStyles=function(){var a,b;this.labelDiv_.className=this.marker_.get("labelClass"),this.eventDiv_.className=this.labelDiv_.className,this.labelDiv_.style.cssText="",this.eventDiv_.style.cssText="",b=this.marker_.get("labelStyle");for(a in b)b.hasOwnProperty(a)&&(this.labelDiv_.style[a]=b[a],this.eventDiv_.style[a]=b[a]);this.setMandatoryStyles()},h.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute",this.labelDiv_.style.overflow="hidden","undefined"!=typeof this.labelDiv_.style.opacity&&""!==this.labelDiv_.style.opacity&&(this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+100*this.labelDiv_.style.opacity+')"',this.labelDiv_.style.filter="alpha(opacity="+100*this.labelDiv_.style.opacity+")"),this.eventDiv_.style.position=this.labelDiv_.style.position,this.eventDiv_.style.overflow=this.labelDiv_.style.overflow,this.eventDiv_.style.opacity=.01,this.eventDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"',this.eventDiv_.style.filter="alpha(opacity=1)",this.setAnchor(),this.setPosition(),this.setVisible()},h.prototype.setAnchor=function(){var a=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-a.x+"px",this.labelDiv_.style.marginTop=-a.y+"px",this.eventDiv_.style.marginLeft=-a.x+"px",this.eventDiv_.style.marginTop=-a.y+"px"},h.prototype.setPosition=function(a){var b=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());"undefined"==typeof a&&(a=0),this.labelDiv_.style.left=Math.round(b.x)+"px",this.labelDiv_.style.top=Math.round(b.y-a)+"px",this.eventDiv_.style.left=this.labelDiv_.style.left,this.eventDiv_.style.top=this.labelDiv_.style.top,this.setZIndex()},h.prototype.setZIndex=function(){var a=this.marker_.get("labelInBackground")?-1:1;"undefined"==typeof this.marker_.getZIndex()?(this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+a,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex):(this.labelDiv_.style.zIndex=this.marker_.getZIndex()+a,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex)},h.prototype.setVisible=function(){this.marker_.get("labelVisible")?this.labelDiv_.style.display=this.marker_.getVisible()?"block":"none":this.labelDiv_.style.display="none",this.eventDiv_.style.display=this.labelDiv_.style.display},g(i,google.maps.Marker),i.prototype.setMap=function(a){google.maps.Marker.prototype.setMap.apply(this,arguments),this.label.setMap(a)},j.prototype=new google.maps.OverlayView,a.RichMarker=j,j.prototype.getVisible=function(){return this.get("visible")},j.prototype.getVisible=j.prototype.getVisible,j.prototype.setVisible=function(a){this.set("visible",a)},j.prototype.setVisible=j.prototype.setVisible,j.prototype.visible_changed=function(){this.ready_&&(this.markerWrapper_.style.display=this.getVisible()?"":"none",this.draw())},j.prototype.visible_changed=j.prototype.visible_changed,j.prototype.setFlat=function(a){this.set("flat",!!a)},j.prototype.setFlat=j.prototype.setFlat,j.prototype.getFlat=function(){return this.get("flat")},j.prototype.getFlat=j.prototype.getFlat,j.prototype.getWidth=function(){return this.get("width")},j.prototype.getWidth=j.prototype.getWidth,j.prototype.getHeight=function(){return this.get("height")},j.prototype.getHeight=j.prototype.getHeight,j.prototype.setShadow=function(a){this.set("shadow",a),this.flat_changed()},j.prototype.setShadow=j.prototype.setShadow,j.prototype.getShadow=function(){return this.get("shadow")},j.prototype.getShadow=j.prototype.getShadow,j.prototype.flat_changed=function(){this.ready_&&(this.markerWrapper_.style.boxShadow=this.markerWrapper_.style.webkitBoxShadow=this.markerWrapper_.style.MozBoxShadow=this.getFlat()?"":this.getShadow())},j.prototype.flat_changed=j.prototype.flat_changed,j.prototype.setZIndex=function(a){this.set("zIndex",a)},j.prototype.setZIndex=j.prototype.setZIndex,j.prototype.getZIndex=function(){return this.get("zIndex")},j.prototype.getZIndex=j.prototype.getZIndex,j.prototype.zIndex_changed=function(){this.getZIndex()&&this.ready_&&(this.markerWrapper_.style.zIndex=this.getZIndex())},j.prototype.zIndex_changed=j.prototype.zIndex_changed,j.prototype.getDraggable=function(){return this.get("draggable")},j.prototype.getDraggable=j.prototype.getDraggable,j.prototype.setDraggable=function(a){this.set("draggable",!!a)},j.prototype.setDraggable=j.prototype.setDraggable,j.prototype.draggable_changed=function(){this.ready_&&(this.getDraggable()?this.addDragging_(this.markerWrapper_):this.removeDragListeners_())},j.prototype.draggable_changed=j.prototype.draggable_changed,j.prototype.getPosition=function(){return this.get("position")},j.prototype.getPosition=j.prototype.getPosition,j.prototype.setPosition=function(a){this.set("position",a)},j.prototype.setPosition=j.prototype.setPosition,j.prototype.position_changed=function(){this.draw()},j.prototype.position_changed=j.prototype.position_changed,j.prototype.getAnchor=function(){return this.get("anchor")},j.prototype.getAnchor=j.prototype.getAnchor,j.prototype.setAnchor=function(a){this.set("anchor",a)},j.prototype.setAnchor=j.prototype.setAnchor,j.prototype.anchor_changed=function(){this.draw()},j.prototype.anchor_changed=j.prototype.anchor_changed,j.prototype.htmlToDocumentFragment_=function(a){var b=document.createElement("DIV");if(b.innerHTML=a,1==b.childNodes.length)return b.removeChild(b.firstChild);for(var c=document.createDocumentFragment();b.firstChild;)c.appendChild(b.firstChild);return c},j.prototype.removeChildren_=function(a){if(a)for(var b;b=a.firstChild;)a.removeChild(b)},j.prototype.setContent=function(a){this.set("content",a)},j.prototype.setContent=j.prototype.setContent,j.prototype.getContent=function(){return this.get("content")},j.prototype.getContent=j.prototype.getContent,j.prototype.content_changed=function(){if(this.markerContent_){this.removeChildren_(this.markerContent_);var a=this.getContent();if(a){"string"==typeof a&&(a=a.replace(/^\s*([\S\s]*)\b\s*$/,"$1"),a=this.htmlToDocumentFragment_(a)),this.markerContent_.appendChild(a);for(var b,c=this,d=this.markerContent_.getElementsByTagName("IMG"),e=0;b=d[e];e++)google.maps.event.addDomListener(b,"mousedown",function(a){c.getDraggable()&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1)}),google.maps.event.addDomListener(b,"load",function(){c.draw()});google.maps.event.trigger(this,"domready")}this.ready_&&this.draw()}},j.prototype.content_changed=j.prototype.content_changed,j.prototype.setCursor_=function(a){if(this.ready_){var b="";-1!==navigator.userAgent.indexOf("Gecko/")?("dragging"==a&&(b="-moz-grabbing"),"dragready"==a&&(b="-moz-grab"),"draggable"==a&&(b="pointer")):(("dragging"==a||"dragready"==a)&&(b="move"),"draggable"==a&&(b="pointer")),this.markerWrapper_.style.cursor!=b&&(this.markerWrapper_.style.cursor=b)}},j.prototype.startDrag=function(a){if(this.getDraggable()&&!this.dragging_){this.dragging_=!0;var b=this.getMap();this.mapDraggable_=b.get("draggable"),b.set("draggable",!1),this.mouseX_=a.clientX,this.mouseY_=a.clientY,this.setCursor_("dragready"),this.markerWrapper_.style.MozUserSelect="none",this.markerWrapper_.style.KhtmlUserSelect="none",this.markerWrapper_.style.WebkitUserSelect="none",this.markerWrapper_.unselectable="on",this.markerWrapper_.onselectstart=function(){return!1},this.addDraggingListeners_(),google.maps.event.trigger(this,"dragstart")}},j.prototype.stopDrag=function(){this.getDraggable()&&this.dragging_&&(this.dragging_=!1,this.getMap().set("draggable",this.mapDraggable_),this.mouseX_=this.mouseY_=this.mapDraggable_=null,this.markerWrapper_.style.MozUserSelect="",this.markerWrapper_.style.KhtmlUserSelect="",this.markerWrapper_.style.WebkitUserSelect="",this.markerWrapper_.unselectable="off",this.markerWrapper_.onselectstart=function(){},this.removeDraggingListeners_(),this.setCursor_("draggable"),google.maps.event.trigger(this,"dragend"),this.draw())},j.prototype.drag=function(a){if(!this.getDraggable()||!this.dragging_)return void this.stopDrag();var b=this.mouseX_-a.clientX,c=this.mouseY_-a.clientY;this.mouseX_=a.clientX,this.mouseY_=a.clientY;var d=parseInt(this.markerWrapper_.style.left,10)-b,e=parseInt(this.markerWrapper_.style.top,10)-c;this.markerWrapper_.style.left=d+"px",this.markerWrapper_.style.top=e+"px";var f=this.getOffset_(),g=new google.maps.Point(d-f.width,e-f.height),h=this.getProjection();this.setPosition(h.fromDivPixelToLatLng(g)),this.setCursor_("dragging"),google.maps.event.trigger(this,"drag")},j.prototype.removeDragListeners_=function(){this.draggableListener_&&(google.maps.event.removeListener(this.draggableListener_),delete this.draggableListener_),this.setCursor_("")},j.prototype.addDragging_=function(a){if(a){var b=this;this.draggableListener_=google.maps.event.addDomListener(a,"mousedown",function(a){b.startDrag(a)}),this.setCursor_("draggable")}},j.prototype.addDraggingListeners_=function(){var b=this;this.markerWrapper_.setCapture?(this.markerWrapper_.setCapture(!0),this.draggingListeners_=[google.maps.event.addDomListener(this.markerWrapper_,"mousemove",function(a){b.drag(a)},!0),google.maps.event.addDomListener(this.markerWrapper_,"mouseup",function(){b.stopDrag(),b.markerWrapper_.releaseCapture()},!0)]):this.draggingListeners_=[google.maps.event.addDomListener(a,"mousemove",function(a){b.drag(a)},!0),google.maps.event.addDomListener(a,"mouseup",function(){b.stopDrag()},!0)]},j.prototype.removeDraggingListeners_=function(){if(this.draggingListeners_){for(var a,b=0;a=this.draggingListeners_[b];b++)google.maps.event.removeListener(a);this.draggingListeners_.length=0}},j.prototype.getOffset_=function(){var a=this.getAnchor();if("object"==typeof a)return a;var b=new google.maps.Size(0,0);if(!this.markerContent_)return b;var c=this.markerContent_.offsetWidth,d=this.markerContent_.offsetHeight;switch(a){case k.TOP_LEFT:break;case k.TOP:b.width=-c/2;break;case k.TOP_RIGHT:b.width=-c;break;case k.LEFT:b.height=-d/2;break;case k.MIDDLE:b.width=-c/2,b.height=-d/2;break;case k.RIGHT:b.width=-c,b.height=-d/2;break;case k.BOTTOM_LEFT:b.height=-d;break;case k.BOTTOM:b.width=-c/2,b.height=-d;break;case k.BOTTOM_RIGHT:b.width=-c,b.height=-d}return b},j.prototype.onAdd=function(){if(this.markerWrapper_||(this.markerWrapper_=document.createElement("DIV"),this.markerWrapper_.style.position="absolute"),this.getZIndex()&&(this.markerWrapper_.style.zIndex=this.getZIndex()),this.markerWrapper_.style.display=this.getVisible()?"":"none",!this.markerContent_){this.markerContent_=document.createElement("DIV"),this.markerWrapper_.appendChild(this.markerContent_);var a=this;google.maps.event.addDomListener(this.markerContent_,"click",function(b){google.maps.event.trigger(a,"click")}),google.maps.event.addDomListener(this.markerContent_,"mouseover",function(b){google.maps.event.trigger(a,"mouseover")}),google.maps.event.addDomListener(this.markerContent_,"mouseout",function(b){google.maps.event.trigger(a,"mouseout")})}this.ready_=!0,this.content_changed(),this.flat_changed(),this.draggable_changed();var b=this.getPanes();b&&b.overlayMouseTarget.appendChild(this.markerWrapper_),google.maps.event.trigger(this,"ready")},j.prototype.onAdd=j.prototype.onAdd,j.prototype.draw=function(){if(this.ready_&&!this.dragging_){var a=this.getProjection();if(a){var b=this.get("position"),c=a.fromLatLngToDivPixel(b),d=this.getOffset_();this.markerWrapper_.style.top=c.y+d.height+"px",this.markerWrapper_.style.left=c.x+d.width+"px";var e=this.markerContent_.offsetHeight,f=this.markerContent_.offsetWidth;f!=this.get("width")&&this.set("width",f),e!=this.get("height")&&this.set("height",e)}}},j.prototype.draw=j.prototype.draw,j.prototype.onRemove=function(){this.markerWrapper_&&this.markerWrapper_.parentNode&&this.markerWrapper_.parentNode.removeChild(this.markerWrapper_),this.removeDragListeners_()},j.prototype.onRemove=j.prototype.onRemove;var k={TOP_LEFT:1,TOP:2,TOP_RIGHT:3,LEFT:4,MIDDLE:5,RIGHT:6,BOTTOM_LEFT:7,BOTTOM:8,BOTTOM_RIGHT:9};a.RichMarkerPosition=k,a.InfoBox=b,a.Cluster=e,a.ClusterIcon=d,a.MarkerClusterer=f,a.MarkerLabel_=h,a.MarkerWithLabel=i,a.RichMarker=j})}}),function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,c,d){b.module("uiGmapgoogle-maps.wrapped").service("uiGmapDataStructures",function(){return{Graph:d(1).Graph,Queue:d(1).Queue}})},function(a,b,c){(function(){
a.exports={Graph:c(2),Heap:c(3),LinkedList:c(4),Map:c(5),Queue:c(6),RedBlackTree:c(7),Trie:c(8)}}).call(this)},function(a,b){(function(){var b,c={}.hasOwnProperty;b=function(){function a(){this._nodes={},this.nodeSize=0,this.edgeSize=0}return a.prototype.addNode=function(a){return this._nodes[a]?void 0:(this.nodeSize++,this._nodes[a]={_outEdges:{},_inEdges:{}})},a.prototype.getNode=function(a){return this._nodes[a]},a.prototype.removeNode=function(a){var b,d,e,f,g;if(d=this._nodes[a]){f=d._outEdges;for(e in f)c.call(f,e)&&this.removeEdge(a,e);g=d._inEdges;for(b in g)c.call(g,b)&&this.removeEdge(b,a);return this.nodeSize--,delete this._nodes[a],d}},a.prototype.addEdge=function(a,b,c){var d,e,f;return null==c&&(c=1),!this.getEdge(a,b)&&(e=this._nodes[a],f=this._nodes[b],e&&f)?(d={weight:c},e._outEdges[b]=d,f._inEdges[a]=d,this.edgeSize++,d):void 0},a.prototype.getEdge=function(a,b){var c,d;return c=this._nodes[a],d=this._nodes[b],c&&d?c._outEdges[b]:void 0},a.prototype.removeEdge=function(a,b){var c,d,e;return d=this._nodes[a],e=this._nodes[b],(c=this.getEdge(a,b))?(delete d._outEdges[b],delete e._inEdges[a],this.edgeSize--,c):void 0},a.prototype.getInEdgesOf=function(a){var b,d,e,f;e=this._nodes[a],d=[],f=null!=e?e._inEdges:void 0;for(b in f)c.call(f,b)&&d.push(this.getEdge(b,a));return d},a.prototype.getOutEdgesOf=function(a){var b,d,e,f;b=this._nodes[a],d=[],f=null!=b?b._outEdges:void 0;for(e in f)c.call(f,e)&&d.push(this.getEdge(a,e));return d},a.prototype.getAllEdgesOf=function(a){var b,c,d,e,f,g,h;if(c=this.getInEdgesOf(a),d=this.getOutEdgesOf(a),0===c.length)return d;for(e=this.getEdge(a,a),b=f=0,g=c.length;g>=0?g>f:f>g;b=g>=0?++f:--f)if(c[b]===e){h=[c[c.length-1],c[b]],c[b]=h[0],c[c.length-1]=h[1],c.pop();break}return c.concat(d)},a.prototype.forEachNode=function(a){var b,d,e;e=this._nodes;for(b in e)c.call(e,b)&&(d=e[b],a(d,b))},a.prototype.forEachEdge=function(a){var b,d,e,f,g,h;g=this._nodes;for(d in g)if(c.call(g,d)){e=g[d],h=e._outEdges;for(f in h)c.call(h,f)&&(b=h[f],a(b))}},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e;b=function(){function a(a){var b,c,d,e,f,g;for(null==a&&(a=[]),this._data=[void 0],d=0,f=a.length;f>d;d++)c=a[d],null!=c&&this._data.push(c);if(this._data.length>1)for(b=e=2,g=this._data.length;g>=2?g>e:e>g;b=g>=2?++e:--e)this._upHeap(b);this.size=this._data.length-1}return a.prototype.add=function(a){return null!=a?(this._data.push(a),this._upHeap(this._data.length-1),this.size++,a):void 0},a.prototype.removeMin=function(){var a;if(1!==this._data.length)return this.size--,2===this._data.length?this._data.pop():(a=this._data[1],this._data[1]=this._data.pop(),this._downHeap(),a)},a.prototype.peekMin=function(){return this._data[1]},a.prototype._upHeap=function(a){var b,c;for(b=this._data[a];this._data[a]<this._data[d(a)]&&a>1;)c=[this._data[d(a)],this._data[a]],this._data[a]=c[0],this._data[d(a)]=c[1],a=d(a)},a.prototype._downHeap=function(){var a,b,d;for(a=1;c(a<this._data.length)&&(b=c(a),b<this._data.length-1&&this._data[e(a)]<this._data[b]&&(b=e(a)),this._data[b]<this._data[a]);)d=[this._data[a],this._data[b]],this._data[b]=d[0],this._data[a]=d[1],a=b},a}(),d=function(a){return a>>1},c=function(a){return a<<1},e=function(a){return(a<<1)+1},a.exports=b}).call(this)},function(a,b){(function(){var b;b=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this.head={prev:void 0,value:void 0,next:void 0},this.tail={prev:void 0,value:void 0,next:void 0},this.size=0,c=0,d=a.length;d>c;c++)b=a[c],this.add(b)}return a.prototype.at=function(a){var b,c,d,e,f;if(-this.size<=a&&a<this.size){if(a=this._adjust(a),2*a<this.size)for(b=this.head,c=d=1;a>=d;c=d+=1)b=b.next;else for(b=this.tail,c=e=1,f=this.size-a-1;f>=e;c=e+=1)b=b.prev;return b}},a.prototype.add=function(a,b){var c,d,e,f,g;return null==b&&(b=this.size),-this.size<=b&&b<=this.size?(d={value:a},b=this._adjust(b),0===this.size?this.head=d:0===b?(e=[d,this.head,d],this.head.prev=e[0],d.next=e[1],this.head=e[2]):(c=this.at(b-1),f=[c.next,d,d,c],d.next=f[0],null!=(g=c.next)?g.prev=f[1]:void 0,c.next=f[2],d.prev=f[3]),b===this.size&&(this.tail=d),this.size++,a):void 0},a.prototype.removeAt=function(a){var b,c,d;return null==a&&(a=this.size-1),-this.size<=a&&a<this.size&&0!==this.size?(a=this._adjust(a),1===this.size?(c=this.head.value,this.head.value=this.tail.value=void 0):0===a?(c=this.head.value,this.head=this.head.next,this.head.prev=void 0):(b=this.at(a),c=b.value,b.prev.next=b.next,null!=(d=b.next)&&(d.prev=b.prev),a===this.size-1&&(this.tail=b.prev)),this.size--,c):void 0},a.prototype.remove=function(a){var b;if(null!=a){for(b=this.head;b&&b.value!==a;)b=b.next;if(b)return 1===this.size?this.head.value=this.tail.value=void 0:b===this.head?(this.head=this.head.next,this.head.prev=void 0):b===this.tail?(this.tail=this.tail.prev,this.tail.next=void 0):(b.prev.next=b.next,b.next.prev=b.prev),this.size--,a}},a.prototype.indexOf=function(a,b){var c,d;if(null==b&&(b=0),null==this.head.value&&!this.head.next||b>=this.size)return-1;for(b=Math.max(0,this._adjust(b)),c=this.at(b),d=b;c&&c.value!==a;)c=c.next,d++;return d===this.size?-1:d},a.prototype._adjust=function(a){return 0>a?this.size+a:a},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e,f={}.hasOwnProperty;c="_mapId_",b=function(){function a(b){var c,d;this._content={},this._itemId=0,this._id=a._newMapId(),this.size=0;for(c in b)f.call(b,c)&&(d=b[c],this.set(c,d))}return a._mapIdTracker=0,a._newMapId=function(){return this._mapIdTracker++},a.prototype.hash=function(a,b){var f,g;return null==b&&(b=!1),g=d(a),e(a)?(f=c+this._id,b&&!a[f]&&(a[f]=this._itemId++),f+"_"+a[f]):g+"_"+a},a.prototype.set=function(a,b){return this.has(a)||this.size++,this._content[this.hash(a,!0)]=[b,a],b},a.prototype.get=function(a){var b;return null!=(b=this._content[this.hash(a)])?b[0]:void 0},a.prototype.has=function(a){return this.hash(a)in this._content},a.prototype["delete"]=function(a){var b;return b=this.hash(a),b in this._content?(delete this._content[b],e(a)&&delete a[c+this._id],this.size--,!0):!1},a.prototype.forEach=function(a){var b,c,d;d=this._content;for(b in d)f.call(d,b)&&(c=d[b],a(c[1],c[0]))},a}(),e=function(a){var b,c,e,f,g;for(b=["Boolean","Number","String","Undefined","Null","RegExp","Function"],e=d(a),f=0,g=b.length;g>f;f++)if(c=b[f],e===c)return!1;return!0},d=function(a){return Object.prototype.toString.apply(a).match(/\[object (.+)\]/)[1]},a.exports=b}).call(this)},function(a,b){(function(){var b;b=function(){function a(a){null==a&&(a=[]),this._content=a,this._dequeueIndex=0,this.size=this._content.length}return a.prototype.enqueue=function(a){return this.size++,this._content.push(a),a},a.prototype.dequeue=function(){var a;if(0!==this.size)return this.size--,a=this._content[this._dequeueIndex],this._dequeueIndex++,2*this._dequeueIndex>this._content.length&&(this._content=this._content.slice(this._dequeueIndex),this._dequeueIndex=0),a},a.prototype.peek=function(){return this._content[this._dequeueIndex]},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=0,d=1,e=2,h=3,f=1,b=2,g=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this._root,this.size=0,c=0,d=a.length;d>c;c++)b=a[c],null!=b&&this.add(b)}return a.prototype.add=function(a){var g,l,m,n;if(null!=a){if(this.size++,m={value:a,_color:f},this._root){if(l=i(this._root,function(b){return a===b.value?c:a<b.value?b._left?d:(m._parent=b,b._left=m,h):b._right?e:(m._parent=b,b._right=m,h)}),null!=l)return}else this._root=m;for(g=m;;){if(g===this._root){g._color=b;break}if(g._parent._color===b)break;{if((null!=(n=p(g))?n._color:void 0)!==f){!k(g)&&k(g._parent)?(this._rotateLeft(g._parent),g=g._left):k(g)&&!k(g._parent)&&(this._rotateRight(g._parent),g=g._right),g._parent._color=b,j(g)._color=f,k(g)?this._rotateRight(j(g)):this._rotateLeft(j(g));break}g._parent._color=b,p(g)._color=b,j(g)._color=f,g=j(g)}}return a}},a.prototype.has=function(a){var b;return b=i(this._root,function(b){return a===b.value?c:a<b.value?d:e}),b?!0:!1},a.prototype.peekMin=function(){var a;return null!=(a=n(this._root))?a.value:void 0},a.prototype.peekMax=function(){var a;return null!=(a=m(this._root))?a.value:void 0},a.prototype.remove=function(a){var b;return(b=i(this._root,function(b){return a===b.value?c:a<b.value?d:e}))?(this._removeNode(this._root,b),this.size--,a):void 0},a.prototype.removeMin=function(){var a,b;return(a=n(this._root))?(b=a.value,this._removeNode(this._root,a),b):void 0},a.prototype.removeMax=function(){var a,b;return(a=m(this._root))?(b=a.value,this._removeNode(this._root,a),b):void 0},a.prototype._removeNode=function(a,c){var d,e,g,h,i,j,m,p,q,r;if(c._left&&c._right&&(e=n(c._right),c.value=e.value,c=e),e=c._left||c._right,e||(e={color:b,_right:void 0,_left:void 0,isLeaf:!0}),e._parent=c._parent,null!=(g=c._parent)&&(g[l(c)]=e),c._color===b)if(e._color===f)e._color=b,e._parent||(this._root=e);else for(;;){if(!e._parent){e.isLeaf?this._root=void 0:this._root=e;break}if(d=o(e),(null!=d?d._color:void 0)===f&&(e._parent._color=f,d._color=b,k(e)?this._rotateLeft(e._parent):this._rotateRight(e._parent)),d=o(e),e._parent._color!==b||d&&(d._color!==b||d._left&&d._left._color!==b||d._right&&d._right._color!==b)){if(!(e._parent._color!==f||d&&(d._color!==b||d._left&&(null!=(h=d._left)?h._color:void 0)!==b||d._right&&(null!=(i=d._right)?i._color:void 0)!==b))){null!=d&&(d._color=f),e._parent._color=b;break}if((null!=d?d._color:void 0)===b){!k(e)||d._right&&d._right._color!==b||(null!=(j=d._left)?j._color:void 0)!==f?k(e)||d._left&&d._left._color!==b||(null!=(p=d._right)?p._color:void 0)!==f||(d._color=f,null!=(q=d._right)&&(q._color=b),this._rotateLeft(d)):(d._color=f,null!=(m=d._left)&&(m._color=b),this._rotateRight(d));break}d=o(e),d._color=e._parent._color,k(e)?(d._right._color=b,this._rotateRight(e._parent)):(d._left._color=b,this._rotateLeft(e._parent))}else null!=d&&(d._color=f),e.isLeaf&&(e._parent[l(e)]=void 0),e=e._parent}return e.isLeaf&&null!=(r=e._parent)?r[l(e)]=void 0:void 0},a.prototype._rotateLeft=function(a){var b,c;return null!=(b=a._parent)&&(b[l(a)]=a._right),a._right._parent=a._parent,a._parent=a._right,a._right=a._right._left,a._parent._left=a,null!=(c=a._right)&&(c._parent=a),null==a._parent._parent?this._root=a._parent:void 0},a.prototype._rotateRight=function(a){var b,c;return null!=(b=a._parent)&&(b[l(a)]=a._left),a._left._parent=a._parent,a._parent=a._left,a._left=a._left._right,a._parent._right=a,null!=(c=a._left)&&(c._parent=a),null==a._parent._parent?this._root=a._parent:void 0},a}(),k=function(a){return a===a._parent._left},l=function(a){return k(a)?"_left":"_right"},i=function(a,b){var f,g,i;for(g=a,i=void 0;g;){if(f=b(g),f===c){i=g;break}if(f===d)g=g._left;else if(f===e)g=g._right;else if(f===h)break}return i},n=function(a){return i(a,function(a){return a._left?d:c})},m=function(a){return i(a,function(a){return a._right?e:c})},j=function(a){var b;return null!=(b=a._parent)?b._parent:void 0},p=function(a){return j(a)?k(a._parent)?j(a)._right:j(a)._left:void 0},o=function(a){return k(a)?a._parent._right:a._parent._left},a.exports=g}).call(this)},function(a,b,c){(function(){var b,d,e,f,g={}.hasOwnProperty;b=c(6),e="end",d=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this._root={},this.size=0,c=0,d=a.length;d>c;c++)b=a[c],this.add(b)}return a.prototype.add=function(a){var b,c,d,f;if(null!=a){for(this.size++,b=this._root,d=0,f=a.length;f>d;d++)c=a[d],null==b[c]&&(b[c]={}),b=b[c];return b[e]=!0,a}},a.prototype.has=function(a){var b,c,d,f;if(null==a)return!1;for(b=this._root,d=0,f=a.length;f>d;d++){if(c=a[d],null==b[c])return!1;b=b[c]}return b[e]?!0:!1},a.prototype.longestPrefixOf=function(a){var b,c,d,e,f;if(null==a)return"";for(b=this._root,d="",e=0,f=a.length;f>e&&(c=a[e],null!=b[c]);e++)d+=c,b=b[c];return d},a.prototype.wordsWithPrefix=function(a){var c,d,f,h,i,j,k,l,m,n;if(null==a)return[];for(null!=a||(a=""),k=[],d=this._root,l=0,m=a.length;m>l;l++)if(f=a[l],d=d[f],null==d)return[];for(i=new b,i.enqueue([d,""]);0!==i.size;){n=i.dequeue(),h=n[0],c=n[1],h[e]&&k.push(a+c);for(f in h)g.call(h,f)&&(j=h[f],i.enqueue([j,c+f]))}return k},a.prototype.remove=function(a){var b,c,d,g,h,i,j,k;if(null!=a){for(b=this._root,g=[],h=0,j=a.length;j>h;h++){if(d=a[h],null==b[d])return;b=b[d],g.push([d,b])}if(b[e]){if(this.size--,delete b[e],f(b,1))return a;for(c=i=k=g.length-1;(1>=k?1>=i:i>=1)&&!f(g[c][1],1);c=1>=k?++i:--i)delete g[c-1][1][g[c][0]];return f(this._root[g[0][0]],1)||delete this._root[g[0][0]],a}}},a}(),f=function(a,b){var c,d;if(0===b)return!0;d=0;for(c in a)if(g.call(a,c)&&(d++,d>=b))return!0;return!1},a.exports=d}).call(this)}]),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapMarkerSpiderfier",["uiGmapGoogleMapApi",function(b){var c=this,d={}.hasOwnProperty,e=[].slice;return this.OverlappingMarkerSpiderfier=function(){function b(a,b){var e,f,g,h,i,j;this.map=a,null==b&&(b={});for(f in b)d.call(b,f)&&(j=b[f],this[f]=j);for(this.projHelper=new this.constructor.ProjHelper(this.map),this.initMarkerArrays(),this.listeners={},i=["click","zoom_changed","maptypeid_changed"],g=0,h=i.length;h>g;g++)e=i[g],c.addListener(this.map,e,function(a){return function(){return a.unspiderfy()}}(this))}var c,f,g,h,i,j,k,l,m,n,o;for(l=b.prototype,m=[b,l],g=0,j=m.length;j>g;g++)o=m[g],o.VERSION="0.3.3";return f=void 0,c=void 0,k=void 0,n=2*Math.PI,l.keepSpiderfied=!1,l.markersWontHide=!1,l.markersWontMove=!1,l.nearbyDistance=20,l.circleSpiralSwitchover=9,l.circleFootSeparation=23,l.circleStartAngle=n/12,l.spiralFootSeparation=26,l.spiralLengthStart=11,l.spiralLengthFactor=4,l.spiderfiedZIndex=1e3,l.usualLegZIndex=10,l.highlightedLegZIndex=20,l.event="click",l.minZoomLevel=!1,l.legWeight=1.5,l.legColors={usual:{},highlighted:{}},i=l.legColors.usual,h=l.legColors.highlighted,b.initializeGoogleMaps=function(a){return f=a.maps,c=f.event,k=f.MapTypeId,i[k.HYBRID]=i[k.SATELLITE]="#fff",h[k.HYBRID]=h[k.SATELLITE]="#f00",i[k.TERRAIN]=i[k.ROADMAP]="#444",h[k.TERRAIN]=h[k.ROADMAP]="#f00",this.ProjHelper=function(a){return this.setMap(a)},this.ProjHelper.prototype=new f.OverlayView,this.ProjHelper.prototype.draw=function(){}},l.initMarkerArrays=function(){return this.markers=[],this.markerListenerRefs=[]},l.addMarker=function(a){var b;return null!=a._oms?this:(a._oms=!0,b=[c.addListener(a,this.event,function(b){return function(c){return b.spiderListener(a,c)}}(this))],this.markersWontHide||b.push(c.addListener(a,"visible_changed",function(b){return function(){return b.markerChangeListener(a,!1)}}(this))),this.markersWontMove||b.push(c.addListener(a,"position_changed",function(b){return function(){return b.markerChangeListener(a,!0)}}(this))),this.markerListenerRefs.push(b),this.markers.push(a),this)},l.markerChangeListener=function(a,b){return null==a._omsData||!b&&a.getVisible()||null!=this.spiderfying||null!=this.unspiderfying?void 0:this.unspiderfy(b?a:null)},l.getMarkers=function(){return this.markers.slice(0)},l.removeMarker=function(a){var b,d,e,f,g;if(null!=a._omsData&&this.unspiderfy(),b=this.arrIndexOf(this.markers,a),0>b)return this;for(g=this.markerListenerRefs.splice(b,1)[0],d=0,e=g.length;e>d;d++)f=g[d],c.removeListener(f);return delete a._oms,this.markers.splice(b,1),this},l.clearMarkers=function(){var a,b,d,e,f,g,h,i,j;for(this.unspiderfy(),j=this.markers,a=b=0,d=j.length;d>b;a=++b){for(h=j[a],g=this.markerListenerRefs[a],i=0,e=g.length;e>i;i++)f=g[i],c.removeListener(f);delete h._oms}return this.initMarkerArrays(),this},l.addListener=function(a,b){var c;return(null!=(c=this.listeners)[a]?c[a]:c[a]=[]).push(b),this},l.removeListener=function(a,b){var c;return c=this.arrIndexOf(this.listeners[a],b),0>c||this.listeners[a].splice(c,1),this},l.clearListeners=function(a){return this.listeners[a]=[],this},l.trigger=function(){var a,b,c,d,f,g,h,i;for(b=arguments[0],a=2<=arguments.length?e.call(arguments,1):[],h=null!=(g=this.listeners[b])?g:[],i=[],d=0,f=h.length;f>d;d++)c=h[d],i.push(c.apply(null,a));return i},l.generatePtsCircle=function(a,b){var c,d,e,g,h,i,j,k;for(e=this.circleFootSeparation*(2+a),i=e/n,d=n/a,k=[],g=h=0,j=a;j>=0?j>h:h>j;g=j>=0?++h:--h)c=this.circleStartAngle+g*d,k.push(new f.Point(b.x+i*Math.cos(c),b.y+i*Math.sin(c)));return k},l.generatePtsSpiral=function(a,b){var c,d,e,g,h,i,j;for(g=this.spiralLengthStart,c=0,j=[],d=e=0,i=a;i>=0?i>e:e>i;d=i>=0?++e:--e)c+=this.spiralFootSeparation/g+5e-4*d,h=new f.Point(b.x+g*Math.cos(c),b.y+g*Math.sin(c)),g+=n*this.spiralLengthFactor/c,j.push(h);return j},l.spiderListener=function(b,c){var d,e,f,g,h,i,j,k,m,n,o,p,q;if(k=null!=b._omsData,k&&this.keepSpiderfied||("mouseover"===this.event?(d=this,e=function(){return d.unspiderfy()},a.clearTimeout(l.timeout),l.timeout=setTimeout(e,3e3)):this.unspiderfy()),k||this.map.getStreetView().getVisible()||"GoogleEarthAPI"===this.map.getMapTypeId())return this.trigger("click",b,c);for(n=[],o=[],m=this.nearbyDistance,p=m*m,j=this.llToPt(b.position),q=this.markers,f=0,g=q.length;g>f;f++)h=q[f],null!=h.map&&h.getVisible()&&(i=this.llToPt(h.position),this.ptDistanceSq(i,j)<p?n.push({marker:h,markerPt:i}):o.push(h));return 1===n.length?this.trigger("click",b,c):this.spiderfy(n,o)},l.markersNearMarker=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(null==b&&(b=!1),null==this.projHelper.getProjection())throw"Must wait for 'idle' event on map before calling markersNearMarker";for(i=this.nearbyDistance,j=i*i,g=this.llToPt(a.position),h=[],k=this.markers,c=0,d=k.length;d>c&&(e=k[c],!(e!==a&&null!=e.map&&e.getVisible()&&(f=this.llToPt(null!=(l=null!=(m=e._omsData)?m.usualPosition:void 0)?l:e.position),this.ptDistanceSq(f,g)<j&&(h.push(e),b))));c++);return h},l.markersNearAnyOtherMarker=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;if(null==this.projHelper.getProjection())throw"Must wait for 'idle' event on map before calling markersNearAnyOtherMarker";for(o=this.nearbyDistance,p=o*o,m=function(){var a,b,c,d,e,f;for(c=this.markers,f=[],a=0,b=c.length;b>a;a++)h=c[a],f.push({pt:this.llToPt(null!=(d=null!=(e=h._omsData)?e.usualPosition:void 0)?d:h.position),willSpiderfy:!1});return f}.call(this),r=this.markers,b=d=0,e=r.length;e>d;b=++d)if(i=r[b],null!=i.map&&i.getVisible()&&(j=m[b],!j.willSpiderfy))for(s=this.markers,c=n=0,f=s.length;f>n;c=++n)if(k=s[c],c!==b&&null!=k.map&&k.getVisible()&&(l=m[c],(!(b>c)||l.willSpiderfy)&&this.ptDistanceSq(j.pt,l.pt)<p)){j.willSpiderfy=l.willSpiderfy=!0;break}for(t=this.markers,u=[],a=q=0,g=t.length;g>q;a=++q)h=t[a],m[a].willSpiderfy&&u.push(h);return u},l.makeHighlightListenerFuncs=function(a){return{highlight:function(b){return function(){return a._omsData.leg.setOptions({strokeColor:b.legColors.highlighted[b.map.mapTypeId],zIndex:b.highlightedLegZIndex})}}(this),unhighlight:function(b){return function(){return a._omsData.leg.setOptions({strokeColor:b.legColors.usual[b.map.mapTypeId],zIndex:b.usualLegZIndex})}}(this)}},l.spiderfy=function(a,b){var d,e,g,h,i,j,k,l,m,n,o;return this.minZoomLevel&&this.map.getZoom()<this.minZoomLevel?!1:(this.spiderfying=!0,n=a.length,d=this.ptAverage(function(){var b,c,d;for(d=[],b=0,c=a.length;c>b;b++)l=a[b],d.push(l.markerPt);return d}()),h=n>=this.circleSpiralSwitchover?this.generatePtsSpiral(n,d).reverse():this.generatePtsCircle(n,d),o=function(){var b,d,l;for(l=[],b=0,d=h.length;d>b;b++)g=h[b],e=this.ptToLl(g),m=this.minExtract(a,function(a){return function(b){return a.ptDistanceSq(b.markerPt,g)}}(this)),k=m.marker,j=new f.Polyline({map:this.map,path:[k.position,e],strokeColor:this.legColors.usual[this.map.mapTypeId],strokeWeight:this.legWeight,zIndex:this.usualLegZIndex}),k._omsData={usualPosition:k.position,leg:j},this.legColors.highlighted[this.map.mapTypeId]!==this.legColors.usual[this.map.mapTypeId]&&(i=this.makeHighlightListenerFuncs(k),k._omsData.hightlightListeners={highlight:c.addListener(k,"mouseover",i.highlight),unhighlight:c.addListener(k,"mouseout",i.unhighlight)}),k.setPosition(e),k.setZIndex(Math.round(this.spiderfiedZIndex+g.y)),l.push(k);return l}.call(this),delete this.spiderfying,this.spiderfied=!0,this.trigger("spiderfy",o,b))},l.unspiderfy=function(a){var b,d,e,f,g,h,i;if(null==a&&(a=null),null==this.spiderfied)return this;for(this.unspiderfying=!0,i=[],g=[],h=this.markers,b=0,d=h.length;d>b;b++)f=h[b],null!=f._omsData?(f._omsData.leg.setMap(null),f!==a&&f.setPosition(f._omsData.usualPosition),f.setZIndex(null),e=f._omsData.hightlightListeners,null!=e&&(c.removeListener(e.highlight),c.removeListener(e.unhighlight)),delete f._omsData,i.push(f)):g.push(f);return delete this.unspiderfying,delete this.spiderfied,this.trigger("unspiderfy",i,g),this},l.ptDistanceSq=function(a,b){var c,d;return c=a.x-b.x,d=a.y-b.y,c*c+d*d},l.ptAverage=function(a){var b,c,d,e,g,h;for(g=h=0,b=0,c=a.length;c>b;b++)e=a[b],g+=e.x,h+=e.y;return d=a.length,new f.Point(g/d,h/d)},l.llToPt=function(a){return this.projHelper.getProjection().fromLatLngToDivPixel(a)},l.ptToLl=function(a){return this.projHelper.getProjection().fromDivPixelToLatLng(a)},l.minExtract=function(a,b){var c,d,e,f,g,h,i;for(e=g=0,h=a.length;h>g;e=++g)f=a[e],i=b(f),("undefined"==typeof c||null===c||d>i)&&(d=i,c=e);return a.splice(c,1)[0]},l.arrIndexOf=function(a,b){var c,d,e,f;if(null!=a.indexOf)return a.indexOf(b);for(c=d=0,e=a.length;e>d;c=++d)if(f=a[c],f===b)return c;return-1},b}(),b.then(function(){c.OverlappingMarkerSpiderfier.initializeGoogleMaps(a.google)}),this.OverlappingMarkerSpiderfier}]),b.module("uiGmapgoogle-maps.extensions").service("uiGmapExtendMarkerClusterer",["uiGmapLodash","uiGmapPropMap",function(b,c){return{init:_.once(function(){(function(){var d={}.hasOwnProperty,e=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};a.NgMapCluster=function(a){function d(a){d.__super__.constructor.call(this,a),this.markers_=new c}return e(d,a),d.prototype.addMarker=function(a){var b,c;if(this.isMarkerAlreadyAdded_(a)){var d=this.markers_.get(a.key);if(d.getPosition().lat()==a.getPosition().lat()&&d.getPosition().lon()==a.getPosition().lon())return!1}if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,f=(this.center_.lat()*(e-1)+a.getPosition().lat())/e,g=(this.center_.lng()*(e-1)+a.getPosition().lng())/e;this.center_=new google.maps.LatLng(f,g),this.calculateBounds_()}}else this.center_=a.getPosition(),this.calculateBounds_();return a.isAdded=!0,this.markers_.push(a),b=this.markers_.length,c=this.markerClusterer_.getMaxZoom(),null!==c&&this.map_.getZoom()>c?a.getMap()!==this.map_&&a.setMap(this.map_):b<this.minClusterSize_?a.getMap()!==this.map_&&a.setMap(this.map_):b===this.minClusterSize_?this.markers_.each(function(a){a.setMap(null)}):a.setMap(null),!0},d.prototype.isMarkerAlreadyAdded_=function(a){return b.isNullOrUndefined(this.markers_.get(a.key))},d.prototype.getBounds=function(){var a=new google.maps.LatLngBounds(this.center_,this.center_);return this.getMarkers().each(function(b){a.extend(b.getPosition())}),a},d.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=new c,delete this.markers_},d}(Cluster),a.NgMapMarkerClusterer=function(a){function b(a,d,e){b.__super__.constructor.call(this,a,d,e),this.markers_=new c}return e(b,a),b.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=new c},b.prototype.removeMarker_=function(a){return this.markers_.get(a.key)?(a.setMap(null),this.markers_.remove(a.key),!0):!1},b.prototype.createClusters_=function(a){var b,c,d,e=this;if(this.ready_){0===a&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),d=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var f=this.getExtendedBounds(d),g=Math.min(a+this.batchSize_,this.markers_.length),h=this.markers_.values();for(b=a;g>b;b++)c=h[b],!c.isAdded&&this.isMarkerInBounds_(c,f)&&(!this.ignoreHidden_||this.ignoreHidden_&&c.getVisible())&&this.addToClosestCluster_(c);if(g<this.markers_.length)this.timerRefStatic=setTimeout(function(){e.createClusters_(g)},0);else{for(b=0;b<this.clusters_.length;b++)this.clusters_[b].updateIcon_();delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this)}}},b.prototype.addToClosestCluster_=function(a){var b,c,d,e,f=4e4,g=null;for(b=0;b<this.clusters_.length;b++)d=this.clusters_[b],e=d.getCenter(),e&&(c=this.distanceBetweenPoints_(e,a.getPosition()),f>c&&(f=c,g=d));g&&g.isMarkerInClusterBounds(a)?g.addMarker(a):(d=new NgMapCluster(this),d.addMarker(a),this.clusters_.push(d))},b.prototype.redraw_=function(){this.createClusters_(0)},b.prototype.resetViewport_=function(a){var b;for(b=0;b<this.clusters_.length;b++)this.clusters_[b].remove();this.clusters_=[],this.markers_.each(function(b){b.isAdded=!1,a&&b.setMap(null)})},b.prototype.extend=function(a,b){return function(a){var b;for(b in a.prototype)"constructor"!==b&&(this.prototype[b]=a.prototype[b]);return this}.apply(a,[b])},ClusterIcon.prototype.show=function(){if(this.div_){var a="",b=this.backgroundPosition_.split(" "),c=parseInt(b[0].trim(),10),d=parseInt(b[1].trim(),10),e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),a="<img src='"+this.url_+"' style='position: absolute; top: "+d+"px; left: "+c+"px; ",a+=this.cluster_.getMarkerClusterer().enableRetinaIcons_?"width: "+this.width_+"px;height: "+this.height_+"px;":"clip: rect("+-1*d+"px, "+(-1*c+this.width_)+"px, "+(-1*d+this.height_)+"px, "+-1*c+"px);",a+="'>",this.div_.innerHTML=a+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>","undefined"==typeof this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""}this.visible_=!0},b}(MarkerClusterer)}).call(this)})}}])}(window,angular);
/*!
 * angular-aside - v1.2.0
 * https://github.com/dbtek/angular-aside
 * 2015-09-04
 * Copyright (c) 2015 İsmail Demirbilek
 * License: MIT
 */
!function(){angular.module("ngAside",["ui.bootstrap.modal"])}(),function(){angular.module("ngAside").factory("$aside",["$modal",function(a){var b=this.defaults={placement:"left"},c={open:function(c){var d=angular.extend({},b,c);-1===["left","right","bottom","top"].indexOf(d.placement)&&(d.placement=b.placement);var e=-1===["left","right"].indexOf(d.placement)?"vertical":"horizontal";return d.windowClass="ng-aside "+e+" "+d.placement+(d.windowClass?" "+d.windowClass:""),delete d.placement,a.open(d)}},d=angular.extend({},a,c);return d}])}();