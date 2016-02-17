/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return void(k._events=j={n:{}});var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(window||this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve||"function"==typeof require&&require("eve"))}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("â€"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" Ã— "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return Math.round(180*a/S%360*1e3)/1e3},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b};c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*N.random()|0,c="x"==a?b:3&b|8;return c.toString(16)});c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="RaphaÃ«l Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")};c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a};c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"Â°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"Â°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){{var e=[];M.call(c)}d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&n(a,[["M",b,d],["H",e.x2+10]],1)%2==1},c._removedFactory=function(a){return function(){b("raphael.log",null,"RaphaÃ«l: you are calling to method â€œ"+a+"â€ of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)k[b]="A",e&&(l[b]="A"),a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),p=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],p=O(d.length,e&&e.length||0))},k=[],l=[],m="",n="",o=0,p=O(d.length,e&&e.length||0);p>o;o++){d[o]&&(m=d[o][0]),"C"!=m&&(k[o]=m,o&&(n=k[o-1])),d[o]=h(d[o],f,n),"A"!=k[o]&&"C"==m&&(k[o]="C"),i(d,o),e&&(e[o]&&(m=e[o][0]),"C"!=m&&(l[o]=m,o&&(n=l[o-1])),e[o]=h(e[o],g,n),"A"!=l[o]&&"C"==m&&(l[o]="C"),i(e,o)),j(d,e,f,g,o),j(e,d,g,f,o);var q=d[o],r=e&&e[o],s=q.length,t=e&&r.length;f.x=q[s-2],f.y=q[s-1],f.bx=_(q[s-4])||f.x,f.by=_(q[s-3])||f.y,g.bx=e&&(_(r[t-4])||g.x),g.by=e&&(_(r[t-3])||g.y),g.x=e&&r[t-2],g.y=e&&r[t-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];
    for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],f,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.getSize=function(){var a=this.canvas.parentNode;return{width:a.offsetWidth,height:a.offsetHeight}},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin(2*(a-.075)*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);if(f)return d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b);if(e){var i=0;for(var j in a){var k=ab(j);a[z](j)&&k>i&&(i=k)}i+="%",!a[i].callback&&(a[i].callback=e)}return new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"RaphaÃ«lâ€™s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"RaphaÃ«lâ€˜s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,b.on("raphael.DOMload",function(){u=!0}),function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running RaphaÃ«l "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url('"+document.location+"#"+k+"')",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y+"-obj"+d.id;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"title":var u=i.getElementsByTagName("title");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q("title");var w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case"href":case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var z=q("a");x.insertBefore(z,i),z.appendChild(i),x=z}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var A=b(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q("clipPath"),C=q("rect");B.id=c.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{"clip-path":"url(#"+B.id+")"}),d.clip=C}if(!p){var D=i.getAttribute("clip-path");if(D){var E=c._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var F=b(p).match(c._ISURL);if(F){B=q("pattern");var G=q("image");B.id=c.createUUID(),q(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(G,{x:0,y:0,"xlink:href":F[1]}),B.appendChild(G),function(a){c._preload(F[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(G,{width:b,height:c}),d.paper.safari()})}(B),d.paper.defs.appendChild(B),q(i,{fill:"url(#"+B.id+")"}),d.pattern=B,d.pattern&&s(d);break}var H=c.getRGB(p);if(H.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(I){var J=I.getElementsByTagName("stop");q(J[J.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});H[a]("opacity")&&q(i,{"fill-opacity":H.opacity>1?H.opacity/100:H.opacity});case"stroke":H=c.getRGB(p),i.setAttribute(o,H.hex),"stroke"==o&&H[a]("opacity")&&q(i,{"stroke-opacity":H.opacity>1?H.opacity/100:H.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;
    case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),I&&(J=I.getElementsByTagName("stop"),q(J[J.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var K=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a){return a.parentNode&&"a"===a.parentNode.tagName.toLowerCase()?a.parentNode:a},A=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},B=c.el;A.prototype=B,B.constructor=A,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new A(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},B.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},B.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},B.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},B.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},B.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},B.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},B.remove=function(){var a=z(this.node);if(!this.removed&&a.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),c._tear(this,b),a.parentNode.removeChild(a),this.removeData();for(var d in this)this[d]="function"==typeof this[d]?c._removedFactory(d):null;this.removed=!0}},B._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b,c=!1;this.paper.canvas.parentElement?b=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(b=this.paper.canvas.parentNode.style),b&&"none"==b.display&&(c=!0,b.display="");var d={};try{d=this.node.getBBox()}catch(e){d={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{d=d||{},c&&(b.display="none")}return a&&this.hide(),d},B.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},B.toFront=function(){if(this.removed)return this;var a=z(this.node);a.parentNode.appendChild(a);var b=this.paper;return b.top!=this&&c._tofront(this,b),this},B.toBack=function(){if(this.removed)return this;var a=z(this.node),b=a.parentNode;b.insertBefore(a,b.firstChild),c._toback(this,this.paper);this.paper;return this},B.insertAfter=function(a){if(this.removed||!a)return this;var b=z(this.node),d=z(a.node||a[a.length-1].node);return d.nextSibling?d.parentNode.insertBefore(b,d.nextSibling):d.parentNode.appendChild(b),c._insertafter(this,a,this.paper),this},B.insertBefore=function(a){if(this.removed||!a)return this;var b=z(this.node),d=z(a.node||a[0].node);return d.parentNode.insertBefore(b,d),c._insertbefore(this,a,this.paper),this},B.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new A(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:b,y:c,width:d,height:e,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,"font-family":c._availableAttrs["font-family"],"font-size":c._availableAttrs["font-size"],stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=this.getSize(),j=g(c/i.width,d/i.height),l=this.top,n=e?"xMidYMid meet":"xMinYMin";for(null==a?(this._vbSize&&(j=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=j,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:n});j&&l;)h="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":h}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with RaphaÃ«l "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var C=c.st;for(var D in B)B[a](D)&&!C[a](D)&&(C[D]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(D))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesnâ€™t support SVG. Falling down to VML.\nYou are running RaphaÃ«l "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),e._.dirty=1,"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),"stroke-dasharray"in i){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return null!==d&&(this._.transform=d,c._extractTransform(this,d)),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E.auxGetBBox=c.el.getBBox,E.getBBox=function(){var a=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var b={},c=1/this.paper._viewBoxShift.scale;return b.x=a.x-this.paper._viewBoxShift.dx,b.x*=c,b.y=a.y-this.paper._viewBoxShift.dy,b.y*=c,b.width=a.width*c,b.height=a.height*c,b.x2=b.x+b.width,b.y2=b.y+b.height,b}return a},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var g,h,i=this.getSize(),j=i.width,k=i.height;return f&&(g=k/e,h=j/d,j>d*g&&(a-=(j-d*g)/2/g),k>e*h&&(b-=(k-e*h)/2/h)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:i},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.styleSheets.length<31?b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):b.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,"object"==typeof exports&&(module.exports=c),c});

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and raphael.js
*
* Version: 1.1.0
*
* Copyright (c) 2015 Vincent Brouté (http://www.vincentbroute.fr/mapael)
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
*
*/
(function($) {

	"use strict";
	

	$.fn.mapael = function(options) {
	
		// Extend legend default options with user options
		options = $.extend(true, {}, $.fn.mapael.defaultOptions, options);
		
		for (var type in options.legend) {
			if ($.isArray(options.legend[type])) {
				for (var i = 0; i < options.legend[type].length; ++i)
					options.legend[type][i] = $.extend(true, {}, $.fn.mapael.legendDefaultOptions[type], options.legend[type][i]);
			} else {
				options.legend[type] = $.extend(true, {}, $.fn.mapael.legendDefaultOptions[type], options.legend[type]);
			}
		}
		
		return this.each(function() {
		
			var $self = $(this)
				, $container = $("." + options.map.cssClass, this).empty()
				, $tooltip = $("<div>").addClass(options.map.tooltip.cssClass).css("display", "none").appendTo(options.map.tooltip.target || $container)
				, mapConf = $.fn.mapael.maps[options.map.name]
				, paper = new Raphael($container[0], mapConf.width, mapConf.height)
				, elemOptions = {}
				, resizeTO = 0
				, areas = {}
				, plots = {}
				, links = {}
				, legends = []
				, id = 0
				, zoomCenterX = 0
				, zoomCenterY = 0
				, previousPinchDist = 0;
			
			options.map.tooltip.css && $tooltip.css(options.map.tooltip.css);
			paper.setViewBox(0, 0, mapConf.width, mapConf.height, false);
			
			// Draw map areas
			for (id in mapConf.elems) {
				elemOptions = $.fn.mapael.getElemOptions(
					options.map.defaultArea
					, (options.areas[id] ? options.areas[id] : {})
					, options.legend.area
				);
				areas[id] = {"mapElem" : paper.path(mapConf.elems[id]).attr(elemOptions.attrs)};
			}

			// Hook that allows to add custom processing on the map
			options.map.beforeInit && options.map.beforeInit($self, paper, options);
			
			// Init map areas in a second loop (prevent texts to be hidden by map elements)
			for (id in mapConf.elems) {
				elemOptions = $.fn.mapael.getElemOptions(
					options.map.defaultArea
					, (options.areas[id] ? options.areas[id] : {})
					, options.legend.area
				);
				$.fn.mapael.initElem(paper, areas[id], elemOptions, $tooltip, id);
			}

			// Draw links
			links = $.fn.mapael.drawLinksCollection(paper, options, options.links, mapConf.getCoords, $tooltip);

			// Draw plots
			for (id in options.plots) {
				plots[id] = $.fn.mapael.drawPlot(id, options, mapConf, paper, $tooltip);
			}

			/**
			* Zoom on the map at a specific level focused on specific coordinates
			* If no coordinates are specified, the zoom will be focused on the center of the map
			* options :
			*	"level" : level of the zoom between 0 and maxLevel
			*	"x" or "latitude" : x coordinate or latitude of the point to focus on
			*	"y" or "longitude" : y coordinate or longitude of the point to focus on
			*	"fixedCenter" : set to true in order to preserve the position of x,y in the canvas when zoomed
			*/
			$self.on("zoom", function(e, zoomOptions) {
				var newLevel = Math.min(Math.max(zoomOptions.level, 0), options.map.zoom.maxLevel)
					, panX = 0
					, panY = 0
					, previousZoomLevel = (1 + $self.data("zoomLevel") * options.map.zoom.step)
					, zoomLevel = (1 + newLevel * options.map.zoom.step)
					, offsetX = 0
					, offsetY = 0
					, coords = {};
				
				if (typeof zoomOptions.latitude != "undefined" && typeof zoomOptions.longitude != "undefined") {
					coords = mapConf.getCoords(zoomOptions.latitude, zoomOptions.longitude);
					zoomOptions.x = coords.x;
					zoomOptions.y = coords.y;
				}
				
				if (typeof zoomOptions.x == "undefined")
					zoomOptions.x = paper._viewBox[0] + paper._viewBox[2] / 2;

				if (typeof zoomOptions.y == "undefined")
					zoomOptions.y = (paper._viewBox[1] + paper._viewBox[3] / 2);

				if (newLevel == 0) {
					panX = 0;
					panY = 0;
				} else if (typeof zoomOptions.fixedCenter != 'undefined' && zoomOptions.fixedCenter == true) {
					offsetX = $self.data("panX") + ((zoomOptions.x - $self.data("panX")) * (zoomLevel - previousZoomLevel)) / zoomLevel;
					offsetY = $self.data("panY") + ((zoomOptions.y - $self.data("panY")) * (zoomLevel - previousZoomLevel)) / zoomLevel;
				
					panX = Math.min(Math.max(0, offsetX), (mapConf.width - (mapConf.width / zoomLevel)));
					panY = Math.min(Math.max(0, offsetY), (mapConf.height - (mapConf.height / zoomLevel)));
				} else {
					panX = Math.min(Math.max(0, zoomOptions.x - (mapConf.width / zoomLevel)/2), (mapConf.width - (mapConf.width / zoomLevel)));
					panY = Math.min(Math.max(0, zoomOptions.y - (mapConf.height / zoomLevel)/2), (mapConf.height - (mapConf.height / zoomLevel)));
				}

				// Update zoom level of the map
				if (zoomLevel == previousZoomLevel && panX == $self.data('panX') && panY == $self.data('panY')) return;

				if (options.map.zoom.animDuration > 0) {
					$.fn.mapael.animateViewBox($container, paper, panX, panY, mapConf.width / zoomLevel, mapConf.height / zoomLevel, options.map.zoom.animDuration, options.map.zoom.animEasing);
				} else {
					paper.setViewBox(panX, panY, mapConf.width / zoomLevel, mapConf.height / zoomLevel);
					clearTimeout($.fn.mapael.zoomTO);
					$.fn.mapael.zoomTO = setTimeout(function(){$container.trigger("afterZoom", {x1 : panX, y1 : panY, x2 : (panX+(mapConf.width / zoomLevel)), y2 : (panY+(mapConf.height / zoomLevel))});}, 150);
				}

				$self.data({"zoomLevel" : newLevel, "panX" : panX, "panY" : panY, "zoomX" : zoomOptions.x, "zoomY" : zoomOptions.y});
			});
			
			/**
			* Update the zoom level of the map on mousewheel
			*/
			options.map.zoom.enabled && options.map.zoom.mousewheel && $self.on("mousewheel", function(e) {
				var offset = $container.offset(),
					initFactor = (options.map.width) ? ($.fn.mapael.maps[options.map.name].width / options.map.width) : ($.fn.mapael.maps[options.map.name].width / $container.width())
					, zoomLevel = (e.deltaY > 0) ? 1 : -1
					, zoomFactor = 1 / (1 + ($self.data("zoomLevel")) * options.map.zoom.step)
					, x = zoomFactor * initFactor * (e.clientX + $(window).scrollLeft() - offset.left) + $self.data("panX")
					, y = zoomFactor * initFactor * (e.clientY + $(window).scrollTop() - offset.top) + $self.data("panY");

				$self.trigger("zoom", {"fixedCenter" : true, "level" : $self.data("zoomLevel") + zoomLevel, "x" : x, "y" : y});
					
				return false;
			});

			/**
			* Update the zoom level of the map on touch pinch
			*/
			options.map.zoom.enabled && options.map.zoom.touch && $self.on("touchstart", function(e) {
				if (e.originalEvent.touches.length === 2) {
					zoomCenterX = (e.originalEvent.touches[0].clientX + e.originalEvent.touches[1].clientX) / 2;
					zoomCenterY = (e.originalEvent.touches[0].clientY + e.originalEvent.touches[1].clientY) / 2;
					previousPinchDist = Math.sqrt(Math.pow((e.originalEvent.touches[1].clientX - e.originalEvent.touches[0].clientX), 2) + Math.pow((e.originalEvent.touches[1].clientY - e.originalEvent.touches[0].clientY), 2));
				}
			});

			options.map.zoom.enabled && options.map.zoom.touch && $self.on("touchmove", function(e) {
				var offset = 0, initFactor = 0, zoomFactor = 0, x = 0, y = 0, pinchDist = 0, zoomLevel = 0;

				if (e.originalEvent.touches.length === 2) {
					pinchDist = Math.sqrt(Math.pow((e.originalEvent.touches[1].clientX - e.originalEvent.touches[0].clientX), 2) + Math.pow((e.originalEvent.touches[1].clientY - e.originalEvent.touches[0].clientY), 2));

					if (Math.abs(pinchDist - previousPinchDist) > 15) {
						offset = $container.offset();
						initFactor = (options.map.width) ? ($.fn.mapael.maps[options.map.name].width / options.map.width) : ($.fn.mapael.maps[options.map.name].width / $container.width());
						zoomFactor = 1 / (1 + ($self.data("zoomLevel")) * options.map.zoom.step);
						x = zoomFactor * initFactor * (zoomCenterX + $(window).scrollLeft() - offset.left) + $self.data("panX");
						y = zoomFactor * initFactor * (zoomCenterY + $(window).scrollTop() - offset.top) + $self.data("panY");

						zoomLevel = (pinchDist - previousPinchDist) / Math.abs(pinchDist - previousPinchDist);
						$self.trigger("zoom", {"fixedCenter" : true, "level" : $self.data("zoomLevel") + zoomLevel, "x" : x, "y" : y});
						previousPinchDist = pinchDist;
					}
					return false;
				}
			});

			// Enable zoom
			if (options.map.zoom.enabled)
				$.fn.mapael.initZoom($container, paper, mapConf.width, mapConf.height, options.map.zoom);
			
			// Set initial zoom
			if (typeof options.map.zoom.init != "undefined") {
				$self.trigger("zoom", options.map.zoom.init);
			}
			
			// Create the legends for areas
			$.merge(legends, $.fn.mapael.createLegends($self, options, "area", areas, 1));
				
			/**
			*
			* Update the current map
			* Refresh attributes and tooltips for areas and plots
			* @param updatedOptions options to update for plots and areas
			* @param newPlots new plots to add to the map
			* @param deletedPlotsplots to delete from the map
			* @param opt option for the refresh :
			*  opt.animDuration animation duration in ms (default = 0)
			*  opt.resetAreas true to reset previous areas options
			*  opt.resetPlots true to reset previous plots options
			*  opt.resetLinks true to reset previous links options
			*  opt.afterUpdate Hook that allows to add custom processing on the map
			*  opt.newLinks new links to add to the map
			*  opt.deletedLinks links to remove from the map
			*/
			$self.on("update", function(e, updatedOptions, newPlots, deletedPlots, opt) {
				var i = 0
					, id = 0
					, animDuration = 0
					, elemOptions = {};
				
				// Reset hidden map elements (when user click on legend elements)
				legends.forEach(function(el) {
					el.forEach && el.forEach(function(el) {
						if(typeof el.hidden != "undefined" && el.hidden == true) {
							$(el.node).trigger("click");
						}
					})
				});
				
				if (typeof opt != "undefined") {
					(opt.resetAreas) && (options.areas = {});
					(opt.resetPlots) && (options.plots = {});
					(opt.resetLinks) && (options.links = {});
					(opt.animDuration) && (animDuration = opt.animDuration);
				}
				
				$.extend(true, options, updatedOptions);

				// Delete plots
				if (typeof deletedPlots == "object") {
					for (;i < deletedPlots.length; i++) {
						if (typeof plots[deletedPlots[i]] != "undefined") {
							if (animDuration > 0) {
								(function(plot) {
									plot.mapElem.animate({"opacity":0}, animDuration, "linear", function() {plot.mapElem.remove();});
									if (plot.textElem) {
										plot.textElem.animate({"opacity":0}, animDuration, "linear", function() {plot.textElem.remove();});
									}
								})(plots[deletedPlots[i]]);
							} else {
								plots[deletedPlots[i]].mapElem.remove();
								if (plots[deletedPlots[i]].textElem) {
									plots[deletedPlots[i]].textElem.remove();
								}
							}
							delete plots[deletedPlots[i]];
						}
					}
				}

				// Delete links
				if (typeof opt != "undefined" && typeof opt.deletedLinks == "object") {
					for (i = 0;i < opt.deletedLinks.length; i++) {
						if (typeof links[opt.deletedLinks[i]] != "undefined") {
							if (animDuration > 0) {
								(function(plot) {
									plot.mapElem.animate({"opacity":0}, animDuration, "linear", function() {plot.mapElem.remove();});
									if (plot.textElem) {
										plot.textElem.animate({"opacity":0}, animDuration, "linear", function() {plot.textElem.remove();});
									}
								})(links[opt.deletedLinks[i]]);
							} else {
								links[opt.deletedLinks[i]].mapElem.remove();
								if (links[opt.deletedLinks[i]].textElem) {
									links[opt.deletedLinks[i]].textElem.remove();
								}
							}
							delete links[opt.deletedLinks[i]];
						}
					}
				}
				
				// New plots
				if (typeof newPlots == "object") {
					for (id in newPlots) {
						if (typeof plots[id] == "undefined") {
							options.plots[id] = newPlots[id];
							plots[id] = $.fn.mapael.drawPlot(id, options, mapConf, paper, $tooltip);
							if (animDuration > 0) {
								plots[id].mapElem.attr({opacity : 0});
								plots[id].mapElem.animate({"opacity": (typeof plots[id].mapElem.originalAttrs.opacity != "undefined") ? plots[id].mapElem.originalAttrs.opacity : 1}, animDuration);
								
								if (plots[id].textElem) {
									plots[id].textElem.attr({opacity : 0});
									plots[id].textElem.animate({"opacity": (typeof plots[id].textElem.originalAttrs.opacity != "undefined") ? plots[id].textElem.originalAttrs.opacity : 1}, animDuration);
								}
							}
						}
					}
				}

				// New links
				if (typeof opt != "undefined" && typeof opt.newLinks == "object") {
					var newLinks = $.fn.mapael.drawLinksCollection(paper, options, opt.newLinks, mapConf.getCoords, $tooltip);
					$.extend(links);
					if (animDuration > 0) {
						for (id in newLinks) {
							newLinks[id].mapElem.attr({opacity : 0});
							newLinks[id].mapElem.animate({"opacity": (typeof newLinks[id].mapElem.originalAttrs.opacity != "undefined") ? newLinks[id].mapElem.originalAttrs.opacity : 1}, animDuration);

							if (newLinks[id].textElem) {
								newLinks[id].textElem.attr({opacity : 0});
								newLinks[id].textElem.animate({"opacity": (typeof newLinks[id].textElem.originalAttrs.opacity != "undefined") ? newLinks[id].textElem.originalAttrs.opacity : 1}, animDuration);
							}
						}
					}
				}

				// Update areas attributes and tooltips
				for (id in areas) {
					elemOptions = $.fn.mapael.getElemOptions(
						options.map.defaultArea
						, (options.areas[id] ? options.areas[id] : {})
						, options.legend.area
					);
					
					$.fn.mapael.updateElem(elemOptions, areas[id], $tooltip, animDuration);
				}
				
				// Update plots attributes and tooltips
				for (id in plots) {
					elemOptions = $.fn.mapael.getElemOptions(
						options.map.defaultPlot
						, (options.plots[id] ? options.plots[id] : {})
						, options.legend.plot
					);
					if (elemOptions.type == "square") {
						elemOptions.attrs.width = elemOptions.size;
						elemOptions.attrs.height = elemOptions.size;
						elemOptions.attrs.x = plots[id].mapElem.attrs.x - (elemOptions.size - plots[id].mapElem.attrs.width) / 2;
						elemOptions.attrs.y = plots[id].mapElem.attrs.y - (elemOptions.size - plots[id].mapElem.attrs.height) / 2;
					} else if (elemOptions.type == "image") {
						elemOptions.attrs.width = elemOptions.width;
						elemOptions.attrs.height = elemOptions.height;
						elemOptions.attrs.x = plots[id].mapElem.attrs.x - (elemOptions.width - plots[id].mapElem.attrs.width) / 2;
						elemOptions.attrs.y = plots[id].mapElem.attrs.y - (elemOptions.height - plots[id].mapElem.attrs.height) / 2;
					} else { // Default : circle
						elemOptions.attrs.r = elemOptions.size / 2;
					}
					
					$.fn.mapael.updateElem(elemOptions, plots[id], $tooltip, animDuration);
				}

				// Update links attributes and tooltips
				for (id in links) {
					elemOptions = $.fn.mapael.getElemOptions(
						options.map.defaultLink
						, (options.links[id] ? options.links[id] : {})
						, {}
					);
					
					$.fn.mapael.updateElem(elemOptions, links[id], $tooltip, animDuration);
				}
				
				if(typeof opt != "undefined")
					opt.afterUpdate && opt.afterUpdate($self, paper, areas, plots, options);
			});
			
			// Handle resizing of the map
			if (options.map.width) {
				paper.setSize(options.map.width, mapConf.height * (options.map.width / mapConf.width));
				
				// Create the legends for plots taking into account the scale of the map
				$.merge(legends, $.fn.mapael.createLegends($self, options, "plot", plots, (options.map.width / mapConf.width)));
			} else {
				$(window).on("resize", function() {
					clearTimeout(resizeTO);
					resizeTO = setTimeout(function(){$container.trigger("resizeEnd");}, 150);
				});
				
				// Create the legends for plots taking into account the scale of the map
				var createPlotLegend = function() {
					$.merge(legends, $.fn.mapael.createLegends($self, options, "plot", plots, ($container.width() / mapConf.width)));
					
					$container.unbind("resizeEnd", createPlotLegend);
				};
				
				$container.on("resizeEnd", function() {
					var containerWidth = $container.width();
					if (paper.width != containerWidth) {
						paper.setSize(containerWidth, mapConf.height * (containerWidth / mapConf.width));
					}
				}).on("resizeEnd", createPlotLegend).trigger("resizeEnd");
			}
			
			// Hook that allows to add custom processing on the map
			options.map.afterInit && options.map.afterInit($self, paper, areas, plots, options);
			
			$(paper.desc).append(" and Mapael (http://www.vincentbroute.fr/mapael/)");
		});
	};

	$.fn.mapael.zoomTO = 0;
	
	/**
	* Init the element "elem" on the map (drawing, setting attributes, events, tooltip, ...)
	*/
	$.fn.mapael.initElem = function(paper, elem, options, $tooltip, id) {
		var bbox = {}, textPosition = {};
		if (typeof options.value != "undefined")
			elem.value = options.value;
		
		// Init attrsHover
		$.fn.mapael.setHoverOptions(elem.mapElem, options.attrs, options.attrsHover);
		
		// Init the label related to the element
		if (options.text && typeof options.text.content != "undefined") {
			// Set a text label in the area
			bbox = elem.mapElem.getBBox();
			textPosition = $.fn.mapael.getTextPosition(bbox, options.text.position, options.text.margin);
			options.text.attrs["text-anchor"] = textPosition.textAnchor;
			elem.textElem = paper.text(textPosition.x, textPosition.y, options.text.content).attr(options.text.attrs);
			$.fn.mapael.setHoverOptions(elem.textElem, options.text.attrs, options.text.attrsHover);
			options.eventHandlers && $.fn.mapael.setEventHandlers(id, options, elem.mapElem, elem.textElem);
			$.fn.mapael.setHover(paper, elem.mapElem, elem.textElem);
			$(elem.textElem.node).attr("data-id", id);
		} else {
			options.eventHandlers && $.fn.mapael.setEventHandlers(id, options, elem.mapElem);
			$.fn.mapael.setHover(paper, elem.mapElem);
		}
		
		// Init the tooltip
		if (options.tooltip) {
			elem.mapElem.tooltip = options.tooltip;
			$.fn.mapael.setTooltip(elem.mapElem, $tooltip);
			
			if (options.text && typeof options.text.content != "undefined") {
				elem.textElem.tooltip = options.tooltip;
				$.fn.mapael.setTooltip(elem.textElem, $tooltip);
			}
		}
		
		// Init the link
		if (options.href) {
			elem.mapElem.href = options.href;
			elem.mapElem.target = options.target;
			$.fn.mapael.setHref(elem.mapElem);
			
			if (options.text && typeof options.text.content != "undefined") {
				elem.textElem.href = options.href;
				elem.textElem.target = options.target;
				$.fn.mapael.setHref(elem.textElem);
			}
		}
		
		$(elem.mapElem.node).attr("data-id", id);
	};
	
	/**
	* Draw all links between plots on the paper
	*/
	$.fn.mapael.drawLinksCollection = function(paper, options, linksCollection, getCoords, $tooltip) {
		var p1 = {}
			, p2 = {}
			, elemOptions = {}
			, coordsP1 = {}
			, coordsP2 ={}
			, links = {};

		for (var id in linksCollection) {
			elemOptions = $.fn.mapael.getElemOptions(options.map.defaultLink, linksCollection[id], {});
			
			if (typeof linksCollection[id].between[0] == 'string') {
				p1 = options.plots[linksCollection[id].between[0]];
			} else {
				p1 = linksCollection[id].between[0];
			}

			if (typeof linksCollection[id].between[1] == 'string') {
				p2 = options.plots[linksCollection[id].between[1]];
			} else {
				p2 = linksCollection[id].between[1];
			}

			if (typeof p1.latitude != "undefined" && typeof p1.longitude != "undefined") {
				coordsP1 = getCoords(p1.latitude, p1.longitude);
			} else {
				coordsP1.x = p1.x;
				coordsP1.y = p1.y;
			}

			if (typeof p2.latitude != "undefined" && typeof p2.longitude != "undefined") {
				coordsP2 = getCoords(p2.latitude, p2.longitude);
			} else {
				coordsP2.x = p2.x;
				coordsP2.y = p2.y;
			}
			links[id] = $.fn.mapael.drawLink(id, paper, coordsP1.x, coordsP1.y, coordsP2.x, coordsP2.y, elemOptions, $tooltip);
		}
		return links;
	};
	
	/**
	* Draw a curved link between two couples of coordinates a(xa,ya) and b(xb, yb) on the paper
	*/
	$.fn.mapael.drawLink = function(id, paper, xa, ya, xb, yb, elemOptions, $tooltip) {
		var elem = {}
		
			// Compute the "curveto" SVG point, d(x,y)
			// c(xc, yc) is the center of (xa,ya) and (xb, yb)
			, xc = (xa + xb) / 2
			 , yc = (ya + yb) / 2
				
			 // Equation for (cd) : y = acd * x + bcd (d is the cure point)
			 , acd = - 1 / ((yb - ya) / (xb - xa))
			 , bcd = yc - acd * xc
		
			 // dist(c,d) = dist(a,b) (=abDist)
			 , abDist = Math.sqrt((xb-xa)*(xb-xa) + (yb-ya)*(yb-ya))

			 // Solution for equation dist(cd) = sqrt((xd - xc)² + (yd - yc)²)
			 // dist(c,d)² = (xd - xc)² + (yd - yc)²
			 // We assume that dist(c,d) = dist(a,b)
			 // so : (xd - xc)² + (yd - yc)² - dist(a,b)² = 0
			 // With the factor : (xd - xc)² + (yd - yc)² - (factor*dist(a,b))² = 0
			 // (xd - xc)² + (acd*xd + bcd - yc)² - (factor*dist(a,b))² = 0
			 , a = 1 + acd*acd
			 , b = -2 * xc + 2*acd*bcd - 2 * acd*yc
			 , c = xc*xc + bcd*bcd - bcd*yc - yc*bcd + yc*yc - ((elemOptions.factor*abDist) * (elemOptions.factor*abDist))
			 , delta = b*b - 4*a*c
			 , x = 0
			 , y = 0;
		
		// There are two solutions, we choose one or the other depending on the sign of the factor
		if (elemOptions.factor > 0) {
			 x = (-b + Math.sqrt(delta)) / (2*a);
			 y = acd * x + bcd;
		} else {
			 x = (-b - Math.sqrt(delta)) / (2*a);
			 y = acd * x + bcd;
		}

		elem.mapElem = paper.path("m "+xa+","+ya+" C "+x+","+y+" "+xb+","+yb+" "+xb+","+yb+"").attr(elemOptions.attrs);
		$.fn.mapael.initElem(paper, elem, elemOptions, $tooltip, id);
		
		return elem;
	};

	/**
	* Update the element "elem" on the map with the new elemOptions options
	*/
	$.fn.mapael.updateElem = function(elemOptions, elem, $tooltip, animDuration) {
		var bbox, textPosition, plotOffsetX, plotOffsetY;
		if (typeof elemOptions.value != "undefined")
			elem.value = elemOptions.value;

		// Update the label
		if (elem.textElem) {
			if (typeof elemOptions.text != "undefined" && typeof elemOptions.text.content != "undefined" && elemOptions.text.content != elem.textElem.attrs.text)
				elem.textElem.attr({text : elemOptions.text.content});

			bbox = elem.mapElem.getBBox();

			if (elemOptions.size || (elemOptions.width && elemOptions.height)) {
				if (elemOptions.type == "image" || elemOptions.type == "svg") {
					plotOffsetX = (elemOptions.width - bbox.width) / 2;
					plotOffsetY = (elemOptions.height - bbox.height) / 2;
				} else {
					plotOffsetX = (elemOptions.size - bbox.width) / 2;
					plotOffsetY = (elemOptions.size - bbox.height) / 2;
				}
				bbox.x -= plotOffsetX;
				bbox.x2 += plotOffsetX;
				bbox.y -= plotOffsetY;
				bbox.y2 += plotOffsetY;
			}

			textPosition = $.fn.mapael.getTextPosition(bbox, elemOptions.text.position, elemOptions.text.margin);
			if (textPosition.x != elem.textElem.attrs.x || textPosition.y != elem.textElem.attrs.y) {
				if (animDuration > 0) {
					elem.textElem.attr({"text-anchor" : textPosition.textAnchor});
					elem.textElem.animate({x : textPosition.x, y : textPosition.y}, animDuration);
				} else
					elem.textElem.attr({x : textPosition.x, y : textPosition.y, "text-anchor" : textPosition.textAnchor});
			}
			
			$.fn.mapael.setHoverOptions(elem.textElem, elemOptions.text.attrs, elemOptions.text.attrsHover);
			if (animDuration > 0)
				elem.textElem.animate(elemOptions.text.attrs, animDuration);
			else
				elem.textElem.attr(elemOptions.text.attrs);
		}
		
		// Update elements attrs and attrsHover
		$.fn.mapael.setHoverOptions(elem.mapElem, elemOptions.attrs, elemOptions.attrsHover);
		if (animDuration > 0)
			elem.mapElem.animate(elemOptions.attrs, animDuration);
		else
			elem.mapElem.attr(elemOptions.attrs);

		// Update dimensions of SVG plots
		if (elemOptions.type == "svg") {
			elem.mapElem.transform("m"+(elemOptions.width / elem.mapElem.originalWidth)+",0,0,"+(elemOptions.height / elem.mapElem.originalHeight)+","+bbox.x+","+bbox.y);
		}

		// Update the tooltip
		if (elemOptions.tooltip) {
			if (typeof elem.mapElem.tooltip == "undefined") {
				$.fn.mapael.setTooltip(elem.mapElem, $tooltip);
				(elem.textElem) && $.fn.mapael.setTooltip(elem.textElem, $tooltip);
			}
			elem.mapElem.tooltip = elemOptions.tooltip;
			(elem.textElem) && (elem.textElem.tooltip = elemOptions.tooltip);
		}
		
		// Update the link
		if (typeof elemOptions.href != "undefined") {
			if (typeof elem.mapElem.href == "undefined") {
				$.fn.mapael.setHref(elem.mapElem);
				(elem.textElem) && $.fn.mapael.setHref(elem.textElem);
			}
			elem.mapElem.href = elemOptions.href;
			elem.mapElem.target = elemOptions.target;
			if (elem.textElem) {
				elem.textElem.href = elemOptions.href;
				elem.textElem.target = elemOptions.target;
			}
		}
	};
	
	/**
	* Draw the plot
	*/
	$.fn.mapael.drawPlot = function(id, options, mapConf, paper, $tooltip) {
		var plot = {}
			, coords = {}
			, elemOptions = $.fn.mapael.getElemOptions(
				options.map.defaultPlot
				, (options.plots[id] ? options.plots[id] : {})
				, options.legend.plot
			);
		
		if (typeof elemOptions.x != "undefined" && typeof elemOptions.y != "undefined")
			coords = {x : elemOptions.x, y : elemOptions.y};
		else
			coords = mapConf.getCoords(elemOptions.latitude, elemOptions.longitude);
		
		if (elemOptions.type == "square") {
			plot = {"mapElem" : paper.rect(
				coords.x - (elemOptions.size / 2)
				, coords.y - (elemOptions.size / 2)
				, elemOptions.size
				, elemOptions.size
			).attr(elemOptions.attrs)};
		} else if (elemOptions.type == "image") {
			plot = {
				"mapElem" : paper.image(
					elemOptions.url
					, coords.x - elemOptions.width / 2
					, coords.y - elemOptions.height / 2
					, elemOptions.width
					, elemOptions.height
				).attr(elemOptions.attrs)
			};
		} else if (elemOptions.type == "svg") {
			plot = {"mapElem" : paper.path(elemOptions.path).attr(elemOptions.attrs)};
			plot.mapElem.originalWidth = plot.mapElem.getBBox().width;
			plot.mapElem.originalHeight = plot.mapElem.getBBox().height;
			plot.mapElem.transform("m"+(elemOptions.width / plot.mapElem.originalWidth)+",0,0,"+(elemOptions.height / plot.mapElem.originalHeight)+","+(coords.x - elemOptions.width / 2)+","+(coords.y - elemOptions.height / 2));
		} else { // Default = circle
			plot = {"mapElem" : paper.circle(coords.x, coords.y, elemOptions.size / 2).attr(elemOptions.attrs)};
		}
		
		$.fn.mapael.initElem(paper, plot, elemOptions, $tooltip, id);
		return plot;
	};
	
	/**
	* Set target link on elem
	*/
	$.fn.mapael.setHref = function(elem) {
		elem.attr({cursor : "pointer"});
		$(elem.node).bind("click", function() {
			if (!$.fn.mapael.panning && elem.href)
				window.open(elem.href, elem.target);
		});
	};
	
	/**
	* Set a tooltip for the areas and plots
	* @param elem area or plot element
	* @param $tooltip the tooltip container
	* @param content the content to set in the tooltip
	*/
	$.fn.mapael.setTooltip = function(elem, $tooltip) {
		var tooltipTO = 0, $container = $tooltip.parent(), cssClass = $tooltip.attr('class');
	
		$(elem.node).on("mouseover", function(e) {
			tooltipTO = setTimeout(
				function() {
					$tooltip.attr("class", cssClass);
					if (typeof elem.tooltip != "undefined") {
						if (typeof elem.tooltip.content != "undefined") {
							$tooltip.html(elem.tooltip.content).css("display", "block");
						}
						if (typeof elem.tooltip.cssClass != "undefined") {
							$tooltip.addClass(elem.tooltip.cssClass);
						} 
					}
					$tooltip.css({
						"left" : Math.min($container.offset().left + $container.width() - $tooltip.outerWidth() - 5, e.pageX + 10) - $(window).scrollLeft(),
						"top" : Math.min($container.offset().top + $container.height() - $tooltip.outerHeight() - 5, e.pageY + 20) - $(window).scrollTop()
					});
				}
				, 120
			);
		}).on("mouseout", function(e) {
			clearTimeout(tooltipTO);
			$tooltip.css("display", "none");
		}).on("mousemove", function(e) {
			$tooltip.css({
				"left" : Math.min($container.offset().left + $container.width() - $tooltip.outerWidth() - 5, e.pageX + 10) - $(window).scrollLeft(),
				"top" : Math.min($container.offset().top + $container.height() - $tooltip.outerHeight() - 5 , e.pageY + 20)- $(window).scrollTop()
			});
		});
	};
	
	/**
	* Set user defined handlers for events on areas and plots
	* @param id the id of the element
	* @param elemOptions the element parameters
	* @param mapElem the map element to set callback on
	* @param textElem the optional text within the map element
	*/
	$.fn.mapael.setEventHandlers = function(id, elemOptions, mapElem, textElem) {
		for(var event in elemOptions.eventHandlers) {
			(function(event) {
				$(mapElem.node).on(event, function(e) {!$.fn.mapael.panning && elemOptions.eventHandlers[event](e, id, mapElem, textElem, elemOptions)});
				textElem && $(textElem.node).on(event, function(e) {!$.fn.mapael.panning && elemOptions.eventHandlers[event](e, id, mapElem, textElem, elemOptions)});
			})(event);
		}
	};
	
	$.fn.mapael.panning = false;
	$.fn.mapael.panningTO = 0;
	
	/**
	* Init zoom and panning for the map
	* @param $container
	* @param paper
	* @param mapWidth
	* @param mapHeight
	* @param options
	*/
	$.fn.mapael.initZoom = function($container, paper, mapWidth, mapHeight, options) {
		var $parentContainer = $container.parent()
			, $zoomIn = $("<div>").addClass(options.zoomInCssClass).html("+")
			, $zoomOut = $("<div>").addClass(options.zoomOutCssClass).html("&#x2212;")
			, mousedown = false
			, previousX = 0
			, previousY = 0;
		
		// Zoom
		$parentContainer.data("zoomLevel", 0).data({"panX" : 0, "panY" : 0});
		$container.append($zoomIn).append($zoomOut);
		
		$zoomIn.on("click", function() {$parentContainer.trigger("zoom", {"level" : $parentContainer.data("zoomLevel") + 1});});
		$zoomOut.on("click", function() {$parentContainer.trigger("zoom", {"level" : $parentContainer.data("zoomLevel") - 1});});
		
		// Panning
		$("body").on("mouseup" + (options.touch ? " touchend" : ""), function(e) {
			mousedown = false;
			setTimeout(function () {$.fn.mapael.panning = false;}, 50);
		});
		
		$container.on("mousedown" + (options.touch ? " touchstart" : ""), function(e) {
			if (typeof e.pageX !== 'undefined') {
				mousedown = true;
				previousX = e.pageX;
				previousY = e.pageY;
			} else {
				if (e.originalEvent.touches.length === 1) {
					mousedown = true;
					previousX = e.originalEvent.touches[0].pageX;
					previousY = e.originalEvent.touches[0].pageY;
				}
			}
		}).on("mousemove" + (options.touch ? " touchmove" : ""), function(e) {
			var currentLevel = $parentContainer.data("zoomLevel")
				, pageX = 0
				, pageY = 0;

			if (typeof e.pageX !== 'undefined') {
				pageX = e.pageX;
				pageY = e.pageY;
			} else {
				if (e.originalEvent.touches.length === 1) {
					pageX = e.originalEvent.touches[0].pageX;
					pageY = e.originalEvent.touches[0].pageY;
				} else {
					mousedown = false;
				}
			}

			if (mousedown && currentLevel != 0) {
				var offsetX = (previousX - pageX) / (1 + (currentLevel * options.step)) * (mapWidth / paper.width)
					, offsetY = (previousY - pageY) / (1 + (currentLevel * options.step)) * (mapHeight / paper.height)
					, panX = Math.min(Math.max(0, paper._viewBox[0] + offsetX), (mapWidth - paper._viewBox[2]))
					, panY = Math.min(Math.max(0, paper._viewBox[1] + offsetY), (mapHeight - paper._viewBox[3]));					
				
				if (Math.abs(offsetX) > 5 || Math.abs(offsetY) > 5) {
					$parentContainer.data({"panX" : panX, "panY" : panY});
					
					paper.setViewBox(panX, panY, paper._viewBox[2], paper._viewBox[3]);

					clearTimeout($.fn.mapael.panningTO);
					$.fn.mapael.panningTO = setTimeout(function(){$container.trigger("afterPanning", {x1 : panX, y1 : panY, x2 : (panX+paper._viewBox[2]), y2 : (panY+paper._viewBox[3])});}, 150);

					previousX = pageX;
					previousY = pageY;
					$.fn.mapael.panning = true;
				}
				return false;
			}
		});
	};
	
	/**
	* Draw a legend for areas and / or plots
	* @param legendOptions options for the legend to draw
	* @param $container the map container
	* @param options map options object
	* @param legendType the type of the legend : "area" or "plot"
	* @param elems collection of plots or areas on the maps
	* @param legendIndex index of the legend in the conf array
	*/
	$.fn.mapael.drawLegend = function (legendOptions, $container, options, legendType, elems, scale, legendIndex) {
		var $legend = {}
			, paper = {}
			, width = 0
			, height = 0
			, title = {}
			, elem = {}
			, elemBBox = {}
			, label = {}
			, i = 0
			, x = 0
			, y = 0
			, yCenter = 0
			, sliceAttrs = []
			, length = 0;
		
			if (!legendOptions.slices || !legendOptions.display)
				return;
				
			$legend = $("." + legendOptions.cssClass, $container).empty();
			paper = new Raphael($legend.get(0));
			height = width = 0;
			
			// Set the title of the legend
			if(legendOptions.title) {
				title = paper.text(legendOptions.marginLeftTitle, 0, legendOptions.title).attr(legendOptions.titleAttrs);
				title.attr({y : 0.5 * title.getBBox().height});
					
				width = legendOptions.marginLeftTitle + title.getBBox().width;
				height += legendOptions.marginBottomTitle + title.getBBox().height;
			}
			
			// Calculate attrs (and width, height and r (radius)) for legend elements, and yCenter for horizontal legends
			for(i = 0, length = legendOptions.slices.length; i < length; ++i) {
				if (typeof legendOptions.slices[i].legendSpecificAttrs == "undefined")
					legendOptions.slices[i].legendSpecificAttrs = {};
					
				sliceAttrs[i] = $.extend(
					{}
					, (legendType == "plot") ? options.map["defaultPlot"].attrs : options.map["defaultArea"].attrs
					, legendOptions.slices[i].attrs
					, legendOptions.slices[i].legendSpecificAttrs
				);
			
				if (legendType == "area") {
					if (typeof sliceAttrs[i].width == "undefined")
						sliceAttrs[i].width = 30;
					if (typeof sliceAttrs[i].height == "undefined")
						sliceAttrs[i].height = 20;
				} else if (legendOptions.slices[i].type == "square") {
					if (typeof sliceAttrs[i].width == "undefined")
						sliceAttrs[i].width = legendOptions.slices[i].size;
					if (typeof sliceAttrs[i].height == "undefined")
						sliceAttrs[i].height = legendOptions.slices[i].size;
				} else if (legendOptions.slices[i].type == "image" || legendOptions.slices[i].type == "svg") {
					if (typeof sliceAttrs[i].width == "undefined")
						sliceAttrs[i].width = legendOptions.slices[i].width;
					if (typeof sliceAttrs[i].height == "undefined")
						sliceAttrs[i].height = legendOptions.slices[i].height;
				} else {
					if (typeof sliceAttrs[i].r == "undefined")
						sliceAttrs[i].r = legendOptions.slices[i].size / 2;
				}
				
				if(legendType == "plot" && (typeof legendOptions.slices[i].type == "undefined" || legendOptions.slices[i].type == "circle")) {
					yCenter = Math.max(yCenter, legendOptions.marginBottomTitle + title.getBBox().height + scale * sliceAttrs[i].r);	
				} else {
					yCenter = Math.max(yCenter, legendOptions.marginBottomTitle + title.getBBox().height + scale * sliceAttrs[i].height/2);
				}
			}
				
			if (legendOptions.mode == "horizontal") {
				width = legendOptions.marginLeft;
			}
			
			// Draw legend elements (circle, square or image in vertical or horizontal mode)
			for(i = 0, length = legendOptions.slices.length; i < length; ++i) {
				if (typeof legendOptions.slices[i].display == "undefined" || legendOptions.slices[i].display == true) {
					if(legendType == "area") {
						if (legendOptions.mode == "horizontal") {
							x = width + legendOptions.marginLeft;
							y = yCenter - (0.5 * scale * sliceAttrs[i].height);
						} else {
							x = legendOptions.marginLeft;
							y = height;
						}
						
						elem = paper.rect(x, y, scale * (sliceAttrs[i].width), scale * (sliceAttrs[i].height));
					} else if(legendOptions.slices[i].type == "square") {					
						if (legendOptions.mode == "horizontal") {
							x = width + legendOptions.marginLeft;
							y = yCenter - (0.5 * scale * sliceAttrs[i].height);
						} else {
							x = legendOptions.marginLeft;
							y = height;
						}
						
						elem = paper.rect(x, y, scale * (sliceAttrs[i].width), scale * (sliceAttrs[i].height));
							
					} else if(legendOptions.slices[i].type == "image" || legendOptions.slices[i].type == "svg") {					
						if (legendOptions.mode == "horizontal") {
							x = width + legendOptions.marginLeft;
							y = yCenter - (0.5 * scale * sliceAttrs[i].height);
						} else {
							x = legendOptions.marginLeft;
							y = height;
						}

						if (legendOptions.slices[i].type == "image") {
							elem = paper.image(
								legendOptions.slices[i].url, x, y, scale * sliceAttrs[i].width, scale * sliceAttrs[i].height);
						} else {
							elem = paper.path(legendOptions.slices[i].path);
							elem.transform("m"+((scale*legendOptions.slices[i].width) / elem.getBBox().width)+",0,0,"+((scale*legendOptions.slices[i].height) / elem.getBBox().height)+","+x+","+y);
						}
					} else {
						if (legendOptions.mode == "horizontal") {
							x = width + legendOptions.marginLeft + scale * (sliceAttrs[i].r);
							y = yCenter;
						} else {
							x = legendOptions.marginLeft + scale * (sliceAttrs[i].r);
							y = height + scale * (sliceAttrs[i].r);
						}
						elem = paper.circle(x, y, scale * (sliceAttrs[i].r));
					}
					
					// Set attrs to the element drawn above
					delete sliceAttrs[i].width;
					delete sliceAttrs[i].height;
					delete sliceAttrs[i].r;
					elem.attr(sliceAttrs[i]);
					elemBBox = elem.getBBox();

					// Draw the label associated with the element
					if (legendOptions.mode == "horizontal") {
						x = width + legendOptions.marginLeft + elemBBox.width + legendOptions.marginLeftLabel;
						y = yCenter;
					} else {
						x = legendOptions.marginLeft + elemBBox.width + legendOptions.marginLeftLabel;
						y = height + (elemBBox.height / 2);
					}
					
					label = paper.text(x, y, legendOptions.slices[i].label).attr(legendOptions.labelAttrs);
					
					// Update the width and height for the paper
					if (legendOptions.mode == "horizontal") {
						width += legendOptions.marginLeft + elemBBox.width + legendOptions.marginLeftLabel + label.getBBox().width;
						if(legendOptions.slices[i].type == "image" || legendType == "area") {
							height = Math.max(height, legendOptions.marginBottom + title.getBBox().height + elemBBox.height);
						} else {
							height = Math.max(height, legendOptions.marginBottomTitle + legendOptions.marginBottom + title.getBBox().height + elemBBox.height);
						}
					} else {
						width = Math.max(width, legendOptions.marginLeft + elemBBox.width + legendOptions.marginLeftLabel + label.getBBox().width);
						height += legendOptions.marginBottom + elemBBox.height;
					}
					
					$(elem.node).attr({"data-type": "elem", "data-index": i, "data-hidden": 0});
					$(label.node).attr({"data-type": "label", "data-index": i, "data-hidden": 0});
					
					// Hide map elements when the user clicks on a legend item
					if (legendOptions.hideElemsOnClick.enabled) {
						// Hide/show elements when user clicks on a legend element
						label.attr({cursor:"pointer"});
						elem.attr({cursor:"pointer"});
						
						$.fn.mapael.setHoverOptions(elem, sliceAttrs[i], sliceAttrs[i]);
						$.fn.mapael.setHoverOptions(label, legendOptions.labelAttrs, legendOptions.labelAttrsHover);
						$.fn.mapael.setHover(paper, elem, label);
						$.fn.mapael.handleClickOnLegendElem($container, legendOptions, legendOptions.slices[i], label, elem, elems, legendIndex);
					}
				}
			}
		
			// VMLWidth option allows you to set static width for the legend
			// only for VML render because text.getBBox() returns wrong values on IE6/7
			if (Raphael.type != "SVG" && legendOptions.VMLWidth)
				width = legendOptions.VMLWidth;
			
			paper.setSize(width, height);
			return paper;
	};
	
	/**
	* Allow to hide elements of the map when the user clicks on a related legend item
	* @param $container the map container
	* @param legendOptions options for the legend to draw
	* @param sliceOptions options of the slice
	* @param label label of the legend item
	* @param elem element of the legend item
	* @param elems collection of plots or areas displayed on the map
	* @param legendIndex index of the legend in the conf array
	*/
	$.fn.mapael.handleClickOnLegendElem = function($container, legendOptions, sliceOptions, label, elem, elems, legendIndex) {
		var hideMapElems = function(e, hideOtherElems) {
			var elemValue = 0
				, hidden = $(label.node).attr('data-hidden')
				, hiddenNewAttr = (hidden == 0) ? {"data-hidden": 1} : {"data-hidden": 0};

			if (hidden == 0) {
				label.animate({"opacity":0.5}, 300);
			} else {
				label.animate({"opacity":1}, 300);
			}
			
			for (var id in elems) {
				if ($.isArray(elems[id].value)) {
					elemValue = elems[id].value[legendIndex];
				} else {
					elemValue = elems[id].value;
				}
				
				if ((typeof sliceOptions.sliceValue != "undefined" && elemValue == sliceOptions.sliceValue)
					|| ((typeof sliceOptions.sliceValue == "undefined")
						&& (typeof sliceOptions.min == "undefined" || elemValue >= sliceOptions.min)
						&& (typeof sliceOptions.max == "undefined" || elemValue < sliceOptions.max))
				) {
					(function(id) {
						if (hidden == 0) {
							elems[id].mapElem.animate({"opacity":legendOptions.hideElemsOnClick.opacity}, 300, "linear", function() {(legendOptions.hideElemsOnClick.opacity == 0) && elems[id].mapElem.hide();});
							elems[id].textElem && elems[id].textElem.animate({"opacity":legendOptions.hideElemsOnClick.opacity}, 300, "linear", function() {(legendOptions.hideElemsOnClick.opacity == 0) && elems[id].textElem.hide();});
						} else {
							if (legendOptions.hideElemsOnClick.opacity == 0) {
								elems[id].mapElem.show();
								elems[id].textElem && elems[id].textElem.show();
							}
							elems[id].mapElem.animate({"opacity":typeof elems[id].mapElem.originalAttrs.opacity != "undefined" ? elems[id].mapElem.originalAttrs.opacity : 1}, 300);
							elems[id].textElem && elems[id].textElem.animate({"opacity":typeof elems[id].textElem.originalAttrs.opacity != "undefined" ? elems[id].textElem.originalAttrs.opacity : 1}, 300);
						}
					})(id);
				}
			}

			$(elem.node).attr(hiddenNewAttr);
			$(label.node).attr(hiddenNewAttr);

			if ((typeof hideOtherElems === "undefined" || hideOtherElems === true) 
				&& typeof legendOptions.exclusive !== "undefined" && legendOptions.exclusive === true
			) {
				$("[data-type='elem'][data-hidden=0]", $container).each(function() {
					if ($(this).attr('data-index') !== $(elem.node).attr('data-index')) {
						$(this).trigger('click', false);
					}
				});
			}
		};
		$(label.node).on("click", hideMapElems);
		$(elem.node).on("click", hideMapElems);

		if (typeof sliceOptions.clicked !== "undefined" && sliceOptions.clicked === true) {
			$(elem.node).trigger('click', false);
		}
	};
	
	/**
	* Create all legends for a specified type (area or plot)
	* @param $container the map container
	* @param options map options
	* @param legendType the type of the legend : "area" or "plot"
	* @param elems collection of plots or areas displayed on the map
	* @param scale scale ratio of the map
	*/
	$.fn.mapael.createLegends = function ($container, options, legendType, elems, scale) {
		var legends = [];
		
		if ($.isArray(options.legend[legendType])) {
			for (var j = 0; j < options.legend[legendType].length; ++j) {
				legends.push($.fn.mapael.drawLegend(options.legend[legendType][j], $container, options, legendType, elems, scale, j));
			}
		} else {
			legends.push($.fn.mapael.drawLegend(options.legend[legendType], $container, options, legendType, elems, scale));
		}
		return legends;
	};
	
	/**
	* Set the attributes on hover and the attributes to restore for a map element
	* @param elem the map element
	* @param originalAttrs the original attributes to restore on mouseout event
	* @param attrsHover the attributes to set on mouseover event
	*/
	$.fn.mapael.setHoverOptions = function (elem, originalAttrs, attrsHover) {
		// Disable transform option on hover for VML (IE<9) because of several bugs
		if (Raphael.type != "SVG") delete attrsHover.transform;
		elem.attrsHover = attrsHover;
		
		if (elem.attrsHover.transform) elem.originalAttrs = $.extend({transform : "s1"}, originalAttrs);
		else elem.originalAttrs = originalAttrs;
	};
	
	/**
	* Set the hover behavior (mouseover & mouseout) for plots and areas
	* @param paper Raphael paper object
	* @param mapElem the map element
	* @param textElem the optional text element (within the map element)
	*/
	$.fn.mapael.setHover = function (paper, mapElem, textElem) {
		var $mapElem = {}
			, $textElem = {}
			, hoverTO = 0
			, overBehaviour = function() {hoverTO = setTimeout(function () {$.fn.mapael.elemHover(paper, mapElem, textElem);}, 120);}
			, outBehaviour = function () {clearTimeout(hoverTO);$.fn.mapael.elemOut(paper, mapElem, textElem);};
			
		$mapElem = $(mapElem.node);
		$mapElem.on("mouseover", overBehaviour);
		$mapElem.on("mouseout", outBehaviour);
		
		if (textElem) {
			$textElem = $(textElem.node);
			$textElem.on("mouseover", overBehaviour);
			$(textElem.node).on("mouseout", outBehaviour);
		}
	};
	
	/**
	* Set he behaviour for "mouseover" event
	* @param paper paper Raphael paper object
	* @param mapElem mapElem the map element
	* @param textElem the optional text element (within the map element)
	*/
	$.fn.mapael.elemHover = function (paper, mapElem, textElem) {
		mapElem.animate(mapElem.attrsHover, mapElem.attrsHover.animDuration);
		textElem && textElem.animate(textElem.attrsHover, textElem.attrsHover.animDuration);
		paper.safari();
	};
	
	/**
	* Set he behaviour for "mouseout" event
	* @param paper Raphael paper object
	* @param mapElem the map element
	* @param textElem the optional text element (within the map element)
	*/
	$.fn.mapael.elemOut = function (paper, mapElem, textElem) {
		mapElem.animate(mapElem.originalAttrs, mapElem.attrsHover.animDuration);
		textElem && textElem.animate(textElem.originalAttrs, textElem.attrsHover.animDuration);
		paper.safari();
	};
	
	/**
	* Get element options by merging default options, element options and legend options
	* @param defaultOptions
	* @param elemOptions
	* @param legendOptions
	*/
	$.fn.mapael.getElemOptions = function(defaultOptions, elemOptions, legendOptions) {
		var options = $.extend(true, {}, defaultOptions, elemOptions);
		if (typeof options.value != "undefined") {
			if ($.isArray(legendOptions)) {
				for (var i = 0, length = legendOptions.length;i<length;++i) {
					options = $.extend(true, {}, options, $.fn.mapael.getLegendSlice(options.value[i], legendOptions[i]));
				}
			} else {
				options = $.extend(true, {}, options, $.fn.mapael.getLegendSlice(options.value, legendOptions));
			}
		}
		return options;
	};
	
	/**
	* Get the coordinates of the text relative to a bbox and a position
	* @param bbox the boundary box of the element
	* @param textPosition the wanted text position (inner, right, left, top or bottom)
	*/
	$.fn.mapael.getTextPosition = function(bbox, textPosition, margin) {
		var textX = 0
			, textY = 0
			, textAnchor = "";
			
		switch (textPosition) {
			case "bottom" :
				textX = (bbox.x + bbox.x2) / 2;
				textY = bbox.y2 + margin;
				textAnchor = "middle";
				break;
			case "top" :
				textX = (bbox.x + bbox.x2) / 2;
				textY = bbox.y - margin;
				textAnchor = "middle";
				break;
			case "left" :
				textX = bbox.x - margin;
				textY = (bbox.y + bbox.y2) / 2;
				textAnchor = "end";
				break;
			case "right" :
				textX = bbox.x2 + margin;
				textY = (bbox.y + bbox.y2) / 2;
				textAnchor = "start";
				break;
			default : // "inner" position
				textX = (bbox.x + bbox.x2) / 2;
				textY = (bbox.y + bbox.y2) / 2;
				textAnchor = "middle";
		}
		return {"x" : textX, "y" : textY, "textAnchor" : textAnchor};
	};
	
	/**
	* Get the legend conf matching with the value
	* @param value the value to match with a slice in the legend
	* @param legend the legend params object
	* @return the legend slice matching with the value
	*/
	$.fn.mapael.getLegendSlice = function (value, legend) {
		for(var i = 0, length = legend.slices.length; i < length; ++i) {
			if ((typeof legend.slices[i].sliceValue != "undefined" && value == legend.slices[i].sliceValue)
				|| ((typeof legend.slices[i].sliceValue == "undefined")
					&& (typeof legend.slices[i].min == "undefined" || value >= legend.slices[i].min)
					&& (typeof legend.slices[i].max == "undefined" || value < legend.slices[i].max))
			) {
				return legend.slices[i];
			}
		}
		return {};
	};

	$.fn.mapael.animationIntervalID = null;

	/**
	 * Animated view box changes
	 * As from http://code.voidblossom.com/animating-viewbox-easing-formulas/,
	 * (from https://github.com/theshaun works on mapael)
	 * @param paper paper Raphael paper object
	 * @param x coordinate of the point to focus on
	 * @param y coordinate of the point to focus on
	 * @param w map defined width
	 * @param h map defined height
	 * @param duration defined length of time for animation
	 * @param easying_function defined Raphael supported easing_formula to use
	 * @param callback method when animated action is complete
	 */
	$.fn.mapael.animateViewBox = function animateViewBox($container, paper, x, y, w, h, duration, easingFunction ) {
		var cx = paper._viewBox ? paper._viewBox[0] : 0
			, dx = x - cx
			, cy = paper._viewBox ? paper._viewBox[1] : 0
			, dy = y - cy
			, cw = paper._viewBox ? paper._viewBox[2] : paper.width
			, dw = w - cw
			, ch = paper._viewBox ? paper._viewBox[3] : paper.height
			, dh = h - ch
			, easingFunction = easingFunction || "linear"
			, interval = 25
			, steps = duration / interval
			, current_step = 0
			, easingFormula = Raphael.easing_formulas[easingFunction];

		clearInterval($.fn.mapael.animationIntervalID);
	 
		$.fn.mapael.animationIntervalID = setInterval(function() {
				var ratio = current_step / steps;
				paper.setViewBox(cx + dx * easingFormula(ratio),
								cy + dy * easingFormula(ratio),
								cw + dw * easingFormula(ratio),
								ch + dh * easingFormula(ratio), false);
				if (current_step++ >= steps) {
					clearInterval($.fn.mapael.animationIntervalID);
					clearTimeout($.fn.mapael.zoomTO);
					$.fn.mapael.zoomTO = setTimeout(function(){$container.trigger("afterZoom", {x1 : x, y1 : y, x2 : (x+w), y2 : (y+h)});}, 150);
				}
			}
			, interval
		);
	};
	
	// Default map options
	$.fn.mapael.defaultOptions = {
		map : {
			cssClass : "map"
			, tooltip : {
				cssClass : "mapTooltip",
				target: null
			}
			, defaultArea : {
				attrs : {
					fill : "#343434"
					, stroke : "#5d5d5d"
					, "stroke-width" : 1
					, "stroke-linejoin" : "round"
				}
				, attrsHover : {
					fill : "#f38a03"
					, animDuration : 300
				}
				, text : {
					position : "inner"
					, margin : 10
					, attrs : {
						"font-size" : 15
						, fill : "#c7c7c7"
					}
					, attrsHover : {
						fill : "#eaeaea"
						, "animDuration" : 300
					}
				}
				, target : "_self"
			}
			, defaultPlot : {
				type : "circle"
				, size : 15
				, attrs : {
					fill : "#0088db"
					, stroke : "#fff"
					, "stroke-width" : 0
					, "stroke-linejoin" : "round"
				}
				, attrsHover : {
					"stroke-width" : 3
					, animDuration : 300
				}
				, text : {
					position : "right"
					, margin : 10
					, attrs : {
						"font-size" : 15
						, fill : "#c7c7c7"
					}
					, attrsHover : {
						fill : "#eaeaea"
						, animDuration : 300
					}
				}
				, target : "_self"
			}
			, defaultLink : {
				factor : 0.5
				, attrs : {
					stroke : "#0088db"
					, "stroke-width" : 2
				}
				, attrsHover : {
					animDuration : 300
				}
				, text : {
					position : "inner"
					, margin : 10
					, attrs : {
						"font-size" : 15
						, fill : "#c7c7c7"
					}
					, attrsHover : {
						fill : "#eaeaea"
						, animDuration : 300
					}
				}
				, target : "_self"
			}
			, zoom : {
				enabled : false
				, maxLevel : 10
				, step : 0.25
				, zoomInCssClass : "zoomIn"
				, zoomOutCssClass : "zoomOut"
				, mousewheel : true
				, touch : true
				, animDuration : 200
				, animEasing : "linear"
			}
		}
		, legend : {
			area : []
			, plot : []
		}
		, areas : {}
		, plots : {}
		, links : {}
	};
	
	$.fn.mapael.legendDefaultOptions = {
		area : {
			cssClass : "areaLegend"
			, display : true
			, marginLeft : 10
			, marginLeftTitle : 5
			, marginBottomTitle: 10
			, marginLeftLabel : 10
			, marginBottom : 10
			, titleAttrs : {
				"font-size" : 16
				, fill : "#343434"
				, "text-anchor" : "start"
			}
			, labelAttrs : {
				"font-size" : 12
				, fill : "#343434"
				, "text-anchor" : "start"
			}
			, labelAttrsHover : {
				fill : "#787878"
				, animDuration : 300
			}
			, hideElemsOnClick : {
				enabled : true
				, opacity : 0.2
			}
			, slices : []
			, mode : "vertical"
		}
		, plot : {
			cssClass : "plotLegend"
			, display : true
			, marginLeft : 10
			, marginLeftTitle : 5
			, marginBottomTitle: 10
			, marginLeftLabel : 10
			, marginBottom : 10
			, titleAttrs : {
				"font-size" : 16
				, fill : "#343434"
				, "text-anchor" : "start"
			}
			, labelAttrs : {
				"font-size" : 12
				, fill : "#343434"
				, "text-anchor" : "start"
			}
			, labelAttrsHover : {
				fill : "#787878"
				, animDuration : 300
			}
			, hideElemsOnClick : {
				enabled : true
				, opacity : 0.2
			}
			, slices : []
			, mode : "vertical"
		}
	};
})(jQuery);

/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and raphael.js
*
* Map of metropolitan France by department
* Equirectangular projection

* @author Vincent Brout�
* @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
*/
(function($) {
	$.extend(true, $.fn.mapael, 
		{
			maps : {
				france_departments : {
					width : 600.08728, 
					height : 626.26221,
					getCoords : function (lat, lon) {
						// Corse
						if (lat < 43.15710 && lon > 8.17199) {
							var xfactor = 43.64246;
							var xoffset = 181.34520;
							var x = (lon * xfactor) + xoffset;
							
							var yfactor = -65.77758;
							var yoffset = 3346.37839;
							var y = (lat * yfactor) + yoffset;
						} else {
							var xfactor = 45.48385;
							var xoffset = 220.22005;
							var x = (lon * xfactor) + xoffset;
							
							var yfactor = -65.97284;
							var yoffset = 3371.10748;
							var y = (lat * yfactor) + yoffset;
						}
						return {x : x, y : y};
					},
					elems : {
						"department-29" : "m 37.28,156.11 c -1.42,1.23 -3.84,1.18 -3.99,3.49 -1.31,-2.24 -8,-0.27 -6.23,1.86 -0.83,0.29 -3.61,-0.09 -4.72,1.08 1.27,-3.15 -2.84,-2.76 -4.74,-1.32 -1.52,0.3 0.5,1.51 -1.67,1.26 -1.43,1.46 -5.78,-1.22 -5,1.7 2.01,2.28 -4.44,-1.17 -2.19,2.21 2.05,2.35 -1.91,-1.21 -3.2,0.17 -2.44,0.46 -5.9,3.28 -4.27,6.2 1.31,1.03 -2.45,2.79 -0.89,4.68 1.85,1.54 -1.54,4.66 1.85,4.99 2.29,0.7 2.49,-2.98 4.87,-0.96 3.08,0.74 5.89,-2.07 8.89,-2.74 1.93,-0.34 5.67,-2.04 6.34,-1.85 -2,1.78 -5.83,1.89 -6.41,4.93 -0.69,1.92 2.11,-0.67 2.33,1.07 1.34,-0.89 2.68,-1.87 3.94,-1.39 3.81,-2.03 -2.75,2.24 0.52,1.99 1.47,0.34 4.01,0.96 4.33,1.46 -1.94,0.3 -3.28,1.07 -4.57,-0.08 -2.38,0.71 -4.58,1.45 -6.63,0.05 -2.75,0.86 -5.75,0.61 -4.18,-2.84 -3.29,-0.24 -0.4,5.1 -3.79,3.67 -1.2,2.84 5.41,0.67 2.62,3.42 0.89,1.41 -0.15,5.78 1.86,2.76 0.83,-2.29 2.62,-4.57 5.09,-2.36 1.97,1.37 5.1,0.79 5.41,4 1.86,2.04 -0.29,6.23 -3,3.6 -3.95,0.62 -7.67,1.95 -11.58,2.45 -2.09,0.38 -5.98,-0.08 -4.41,2.7 2.53,0.06 4.87,1.62 7.03,1.82 2.62,-1.48 5.9,3.16 7.51,5.27 1.61,2.44 2.66,5.4 0.91,7.66 1.94,1.19 5.11,1.18 7.5,0.75 1.99,-0.45 3.16,-2.44 1.04,-3.28 -1.05,-1.98 0.82,-2.27 1.51,-0.45 3.34,0.23 -0.63,-4.11 0.69,-3.65 0.91,2.75 3.66,3.46 5.82,3.53 2.26,0.86 -0.02,-4.66 2.92,-2.01 2.11,1.7 2.69,4.22 4.57,6.13 2.01,0.11 4.17,0.12 6.01,-0.65 1.82,2.12 5.68,2.27 8.25,2.23 1.8,-1.51 -1.55,-4.66 0.95,-5.09 0.94,2.57 3.24,-0.19 3.58,-1.33 2.95,0.23 0.38,-3.13 2.08,-4.2 -0.21,-1.43 -0.64,-3.61 -2.53,-1.94 -1.44,2.09 -1.76,-1.59 -3.7,-1.52 -2.13,-1.41 -5.77,1.37 -6.1,-2.55 -0.44,-2.07 -2.04,-3.22 -2.32,-5.05 -2.23,-0.45 0.49,-4.53 2.59,-4.02 1.42,-1.43 5.76,-1.87 5.77,-3.15 -3.54,-1.5 2.53,-4.55 -0.88,-5.73 0.6,-1.35 -0.87,-3.79 -0.56,-5.72 -3.53,0.13 -1.65,-3.79 0.06,-4.6 -3.56,-1.53 -0.98,-4.21 0.33,-6.05 -1.3,-1.16 -2.22,-1.16 -1.99,-2.94 -3.12,-0.26 -3.41,-4.67 -2.3,-6.54 -0.38,-1.53 -3.23,-0.42 -4.45,-1.94 -2.01,-0.12 -5.18,-1.19 -4.7,2.29 -0.84,1.4 0.25,4.35 -1.82,2.22 -1.36,-0.49 -0.48,-3.38 -2.36,-1.3 -1.28,1.93 -1.52,-3.86 -1.99,-4.38 z m -9.88,28.66 0,0.02 0,-0.02 z",
						"department-22" : "m 77.67,146.73 c -2.58,0.94 -4.37,2.6 -5.78,4.84 1.21,-2.76 0.01,-6.18 -2.26,-2.58 -2.86,-0.54 -4.85,2.02 -7.32,2.35 0.05,-2.38 -5.14,-2.89 -4.97,-0.27 -1.65,0.69 -2.79,2.55 -0.54,3.83 1.42,1.41 -3.19,1.12 -1.21,3.58 0.75,2.79 -2.62,-0.53 -2.95,1.74 -2.03,2.25 0.93,5.14 2.73,6.11 -0.89,1.81 3.77,1.87 0.94,3.62 -2.27,1.33 -1.69,4.1 0.71,4.68 -2.37,0.99 -3.54,4.66 -0.18,4.93 -0.75,1.8 0.34,4.07 1.35,3.89 -2.23,1.45 2.07,3.31 -1.02,4.81 -1.32,1.63 3.39,3.81 -0.37,3.46 -0,1.68 3.4,-0.17 4.6,0.64 2.17,-1.15 0.09,3.47 2.84,1.65 2.78,-2.51 5.12,2.28 8.16,0.11 1.28,-1.21 4.21,0.16 3.71,-2.72 2.36,-2.11 5.53,-0.32 6.55,2.07 3.1,-1.66 5.66,1.79 8.52,1.44 1.09,1.13 1.31,4.63 2.54,1.67 1.77,0.69 4.7,-2.67 4.36,1 -1.42,1.92 -0.06,5.98 2.29,3.25 2.15,-1.33 3.24,-3.52 3.71,-5.84 -1.55,-1.8 3.03,-1.29 4.1,-2.17 2.56,0.5 2.84,5.71 5.3,2.6 2.48,-0.52 4.76,-2.21 4.35,-5.23 2.66,1.35 0.38,-3.98 3.68,-3.07 2.3,0.76 0.88,-1.21 2.74,-1.68 0.93,-2.46 3.26,2.1 3.88,-0.74 2.87,-0.05 0.28,-3.49 2.75,-3.67 -0.67,-1.88 -0.1,-4.12 -0.62,-6.07 1.57,-1.46 2.25,-5.3 0.59,-6.78 -0.36,1.32 -2.86,3.56 -2.08,0.75 -0.58,-2.28 -2.24,-1.04 -3,-0.66 -0.39,-2.19 -3.7,-1.69 -4.26,-4.29 -2.01,-0.96 -0.92,3.96 -2.61,1.33 -0.93,2.11 -1.72,-1.85 -2.25,-2.64 -0.23,-2.69 -5.02,3.57 -3.11,-0.38 2.12,-1.4 -0.5,-4.55 -1.42,-1.9 -1.94,1.15 -2.92,1.92 -4.85,1.1 -2.9,-0.12 0.52,1.54 -2.1,2.49 -3.58,0.78 -5.19,5.69 -8.5,5.48 0.49,3.36 -2.74,-0.19 -2.06,-1.81 -2.95,-1.1 -4.73,-3.24 -4.7,-6.38 -2,-2 -5.44,-3.63 -5.11,-6.81 -0.95,-1.07 -6.79,-1.08 -3.38,-3.09 0.47,-2.76 -4.12,-1.19 -3.66,1.11 -0.44,1.73 -2.27,2.41 -0.65,0.39 1.33,-1.47 1.44,-4.62 0.53,-6.14 z",
						"department-56" : "m 78.99,190.76 c -3.41,-1.13 -2.2,3.92 -5.32,2.9 -1.41,0.4 -1.19,1.61 -2.99,0.82 -1.13,0.79 -2.69,-0.38 -3.4,-0.47 -0.84,-2.28 -6.08,2.96 -4.76,-1.3 -1.92,-0.69 -4.61,-0.08 -6.81,-0.32 -2.56,1.49 -6.48,1.43 -6.89,4.97 1.66,0.45 1.27,1.18 1.54,2.72 2.29,1.28 1.38,6.71 5.21,4.85 2.27,-0.57 4.21,1.54 5.35,2.54 1.09,-1.75 3.9,-1.39 3.21,0.95 0.1,1.55 -1.11,2.84 -0.3,4.77 -2.2,-0.71 -3.03,4.58 -5.67,1.76 -1.43,0.94 1.23,2.98 -0.19,4.47 0.79,3.11 4.25,6.81 7.21,3.89 -1.96,-1.82 1.17,-1.04 2.08,-2.79 1.53,-1.34 1.85,-1.47 0.72,0.46 -0.96,1.01 -3.43,3.3 -0.38,3.09 1.49,0.45 3.45,4.36 4.77,2.88 -0.27,-2.53 3.83,-3.05 1.1,-5.44 1.05,0.63 2.71,-0.96 2.12,1.15 2.98,0.99 -0.94,3.03 -2.44,3.55 -2.08,3.14 3.5,3.77 1.75,6.92 -0.29,1.59 0.31,5.9 2.13,4.03 -1.68,-0.96 -1.89,-7.61 0.51,-4.94 -0.5,1.26 4.8,0.74 3.44,-1.25 0.35,-0.76 1.34,3.45 1.43,0.83 0.89,1.74 3.91,2.47 1.59,0.06 -0.51,-1.47 -0.02,-3.03 -0.87,-4.45 1.76,1.65 1.37,4.11 4.01,4.31 0.21,-1.28 1.88,-0.67 1.78,-2.23 1.83,0.46 2.89,-0.48 3.79,-0.93 2.28,0.82 -0.59,1.71 2.06,2.43 1.57,0.52 0.39,-4.11 1.62,-1.05 -0.46,2.03 -2.17,6.08 -4.56,4.17 -1.51,0.14 -2.97,0.56 -4.53,-0.67 -3.37,0.66 2.51,2.11 2.17,4.25 2.28,1.57 4.95,-1.33 7.46,-0.04 0.09,-2.03 1.34,-0.88 2.36,-1.71 -1.31,-1.38 4.01,-1.27 0.96,-0.1 0.22,1.93 4.41,-1.17 5.9,0.75 1.01,1.43 4.31,0.26 4.44,1.04 -2.33,0.43 -6.75,-0.69 -5.01,3.23 1.5,1.03 2.59,-3.6 4.01,-0.77 1.99,-0.12 4.3,0.38 4.4,-2.43 0.29,-2.58 2.25,-0.15 3.16,-0.22 1.19,-1.05 2.3,-1.01 2.74,0.42 1.6,-0.29 0.66,-3.06 3.03,-2.61 0.96,-1.59 -0.11,-4.05 1.01,-5.76 -1.21,-2.25 -1.75,-4.67 -1.62,-7.13 1.06,-1.01 4.05,-0.69 1.57,-1.96 -1.94,-0.06 -2.1,-1.17 -0.12,-1.66 0.89,-1.32 3.49,-4.07 1.04,-4.6 -2.47,1.93 -2.55,-3.4 -0.68,-4.04 -0.57,-3.25 -3.22,-4.81 -6.13,-5.41 -2.4,0.4 -4.25,0.1 -2.46,-2.49 0.6,-2.26 5.5,-0.56 4.09,-3.23 -1.75,-0.22 -3.84,2.7 -3.33,-0.63 0.01,-3.41 -3.32,-2.88 -4.84,-1.45 -0.88,-3.11 -3.48,-4.72 -6.36,-3.01 -2.15,-0.01 0.26,2.97 -2.05,3.88 -0.09,2.06 -3.87,4.92 -5.31,3.84 -1.21,-1.39 2.06,-7.27 -1.57,-5.21 -1.38,0.54 -2.88,0.33 -3.62,2.06 -0.18,-2.38 -1.59,-4.23 -4.05,-3.7 -1.5,-2.53 -4.89,-0.74 -6.39,-1.56 -0.77,-1.17 -1.33,-2.65 -3.1,-2.43 z",
						"department-35" : "m 134.53,157.78 c -2.29,1.25 -4.29,0.31 -6.19,1.59 -0.35,1.67 -2.93,2.17 -1.16,4.31 0.18,1.71 3.99,2.25 1.51,3.04 0.71,1.27 0.98,3.59 2.33,1.22 1.69,2.12 0.9,4.75 -0.11,6.67 -1.16,1.66 0.84,3.78 -0.19,5.68 1.34,1.46 -2.11,1.58 -0.78,3.48 0.21,2.25 -2.03,-0.13 -2.56,2.08 -1.42,-0.68 -2.58,-1.61 -3.47,0.21 -1.19,0.31 -0.39,2.42 -2.44,1.14 -3.01,-0.11 -1.06,4.1 -3.56,3.46 -0.04,2.21 -0.64,4.46 -2.86,4.2 0.62,1.53 1.56,3.49 1.75,5.16 0.54,-2.03 5.23,-1.03 2.52,0.76 -2.33,-0.69 -5.1,2.03 -3.97,3.88 2.89,-0.33 6.41,0.27 7.93,3.03 1.44,1.66 0.87,2.99 -0.39,4.33 0.11,1.6 0.84,3.69 2.2,1.35 0.71,-0.77 0.83,2.07 1.01,2.45 -1.23,1.26 -2.05,2.91 -3.28,3.92 1.71,0.13 3.61,2.39 0.59,2.1 -2.68,1.22 0.26,4 -0.22,5.86 2.34,-0.34 4.15,-1.76 6.12,-3.07 0.06,2.7 3.03,-0.8 4.56,-0.57 2.43,-1.1 5.63,0.82 7.84,-0.63 3.6,0.5 2.72,-4.87 6.32,-4.78 1.62,-0.77 5.16,-0.84 3.73,-3.31 2.85,-0.62 4.57,1.21 6.54,2.5 1.91,0.57 5.04,2.11 4.63,-1.3 1.15,-1.21 0.6,-2.9 1.92,-3.9 0.7,-1.81 1.08,-4.73 2.39,-6.4 1.07,-2.4 6.58,0.52 5.22,-3.48 -0.09,-3.31 -1.44,-6.24 -2.22,-9.58 0.1,-2.96 -2.26,-6.23 0.02,-8.8 1.83,-2.19 0.74,-5.58 -0.28,-8.01 0.55,-2.21 1.33,-6.39 -2.22,-6.48 -2.56,-0.06 -6.32,-3.21 -7.21,0.93 -2.37,0.79 -4.8,5.49 -7.02,1.82 -2.57,-0.44 -4.28,-3.63 -3.95,-6.18 -0.99,-1.91 -2.39,-5.92 -4.86,-2.88 -3.41,0.04 -8.02,2.16 -10.43,-0.96 -1.67,-2.06 2.03,-3.1 0.24,-4.85 z",
						"department-44" : "m 152.12,215.29 c 0.59,4.69 -7.52,2.23 -7.55,6.92 -2.45,2.92 -6.64,1.42 -9.84,1.79 -2.21,0.47 -4.62,2.21 -6.1,1.16 -2.15,1.71 -5.77,2.38 -4.86,5.66 -0.41,1.99 0.14,5.32 -2.78,5.46 0.29,3.39 -2.45,-0.35 -3.39,1.23 -1.97,-0.43 -3.4,-1.22 -3.87,1.43 -1.39,3.38 -7.86,-1.72 -6.53,3.45 1.04,0.36 3.95,1.27 1.26,1.45 -1.78,0.18 -4.38,-0.42 -5.51,2.1 0.81,1.67 6.76,3.88 3.55,5.8 -1.04,-0.85 -4.89,-1.36 -1.91,0.14 1.73,1.23 3.86,1.82 5.03,0.15 2.77,0.79 5.25,4.76 7.99,1.3 2.33,-2.98 5.67,-3.71 9.18,-3.56 3.26,1.31 7.02,1.76 9.14,4.89 0.59,1.56 5.82,2.63 2.15,2.16 -4.08,-0.08 -5.45,-5.45 -9.25,-4.42 -2.59,-1.44 -6.59,-0.45 -8.62,1.17 0.15,2.98 1.07,6.99 -2.64,7.63 1.56,2.78 6.83,0.77 8.69,4.16 2.99,2.74 4.83,7.09 8.9,8.42 0.9,1.88 5.53,0.57 5.08,3.59 3.08,0.7 6.82,2.86 9.67,1.11 2.13,-1.29 -2.55,-2.42 -0.14,-3.94 -2.91,-1.74 -0.81,-8.5 2.35,-5.93 0.6,2.44 -0.71,8.47 3.28,5.3 3.57,-0.9 -1,-7.35 3.9,-6.19 0.83,-0.5 2.39,-4.6 3.91,-1.32 1.06,2.31 6.94,2.33 4.03,-0.72 -1.16,-2.43 -6.27,-0.49 -4.19,-3.49 1.19,-2.09 4.14,-3.59 2.27,-6.58 -0.11,-2.99 -2.79,0.14 -3.66,-2.47 -0.42,-1.81 -2.18,-3.14 -3.54,-3 1.51,-3.16 6.07,-2.52 8.85,-3.95 3.12,-0.79 9.37,1.47 9.71,-3.23 -1.08,-2.47 -1.12,-5.9 -4.66,-5.46 -2.8,0.23 -7.97,-1.25 -5.65,-4.79 1.85,-0.34 7.04,1.35 6.32,-1.48 -2.96,-1.34 -7.7,-2.06 -7.06,-6.38 -0.89,-2.42 -4.47,-2.43 -3.18,-5.19 -2.78,-1.29 -5.51,-2.7 -8.1,-4.12 -0.73,-0.11 -1.47,-0.12 -2.19,-0.28 z",
						"department-50" : "m 131.13,90.31 c -1.88,0.95 -0.8,4.82 1.86,4.23 3.56,1.9 1.73,6.62 0.2,9.04 2.05,2.45 3.1,5.7 3,9 0.14,1.74 2.63,0.2 3.07,2.34 0.75,1.03 1.85,2.12 2.19,0.36 1.37,1.6 -1.38,2.27 1.05,3.66 1.37,1.28 0.99,6.4 3.69,4.06 1.9,0.29 2.45,1.19 0.04,0.86 -1.6,1.67 0.46,4.57 0.89,5.74 -2.97,1.02 -0.03,4.32 -0.89,6.45 0.25,4.18 2.26,-2.3 3.97,0.71 -3,-1.64 -2.73,4.63 -1.52,5.52 -1.39,1.53 -0.75,4.59 -2.48,6.57 2.85,1.89 0.3,6.73 3.77,8.41 0.72,3.65 6.47,2.47 6.87,4.86 -3.09,-0.67 -6.13,1.28 -9.29,0.14 2.12,2.48 1.69,5.44 3.35,8.16 0.49,2.03 2.9,1.69 3.89,3.28 2.85,0.97 3.52,-2.95 6.22,-3.35 0.5,-4.19 4.83,-0.16 7.12,-0.52 2.46,0.21 4.49,2.11 6.88,1.58 1.14,-3.4 4.72,2.61 6.05,-1.83 2.14,-1.71 4.11,-4.11 4,-6.8 -2.86,-1.65 2.62,-4.05 -1.04,-4.65 -1.19,-1.03 -1.99,-2.17 -3.44,-2.39 0.65,-1.72 0.69,-2.24 -1.24,-1.46 -2.15,-1.56 -3.83,-1.87 -6.18,-1.16 -1.5,-0.55 -4.16,0.68 -4.02,-2.14 -1.26,-0.78 -4.15,-1.48 -1.38,-2.84 0.99,-1.27 1.76,-1.9 2.97,-1.76 1.12,-1.18 3.8,-4.02 0.24,-2.9 -1.76,-0.83 1.02,-4.16 2.87,-2.17 3.08,-0.43 3.89,-3.82 6.01,-5.35 -2.27,-0.59 1.2,-4.39 -1.22,-5.32 -2.09,1.3 -1,0.15 0.07,-0.89 -1.07,-1.07 -4.55,-2.49 -1.49,-2.88 2.17,-1.47 -0.09,-4.82 -1.5,-1.9 -3.17,0.81 -5.99,-2.78 -7.94,-5.02 -1.69,-1.95 2.34,-3.94 -0.73,-4.53 -0.02,-1.64 -2.94,0.31 -1.33,-2.17 1.04,-2.89 -2.27,-4.45 -3.47,-6.64 -1.37,-1.99 -4.59,-6.54 -0.56,-7.31 0.17,-1.79 2.56,-1.35 1.09,-3.59 -0.43,-3.65 -3.79,-3.85 -6.83,-3.94 -3.88,-1.03 -4.69,4.08 -8.52,3.07 -3.16,1.2 -5.48,-1.83 -8.81,-1.65 -2.47,0.02 -3.19,-2.65 -5.7,-1.92 -0.51,-0.38 -1.01,-1.1 -1.74,-0.94 z",
						"department-53" : "m 208.55,167.1 c -1.01,1 0.05,3.16 -1.88,3.54 -1.52,-1.01 -2.64,-0.44 -3.16,1.13 -2.16,0.27 -4.3,-2.6 -6.35,-0.72 -2.51,0.71 -4.34,2.89 -6.91,3.52 -1.47,-0.07 -0.73,-3.05 -2.63,-1.24 -1.44,-0.25 -1.57,0.24 -1.23,1.52 -1.95,1.91 -3.12,-1.9 -4.31,-1.2 -0.57,-2.91 -4.17,-1.79 -5.68,-3.27 -1.71,1.43 -3.54,2.05 -5.24,0.23 -1.62,1.36 -0.04,4.11 -0.87,5.96 1,2.8 1.94,6.2 -0.3,8.68 -1.8,2.64 0.64,5.51 0.63,8.4 0.26,2.57 1.34,4.89 2.01,7.32 0.27,1.9 0.56,4.67 -2.4,4.46 -3.58,-1.21 -3.75,3.46 -4.8,5.71 -0.32,2.32 -3.14,4.44 -1.31,6.55 2.18,1.99 5.34,0.43 7.83,1.57 1.63,0.66 3.95,1.05 3.53,-1.27 2.64,-0.54 3.9,3.91 6.54,1.42 2.25,1.91 5.27,1.85 7.94,2.38 1.76,-0.55 3.96,-1.63 5.33,-1.8 0.74,-3.63 3.49,1.65 5.63,-0.72 3.1,-0.49 -0.69,-2.25 -1.75,-2.95 -1.24,-2.55 5.38,-2.7 2.17,-4.78 -2.1,-2.18 2.21,-3.41 3.9,-3.25 2.7,-2.12 -2.9,-5 -0.82,-7.18 1.54,-1.12 5.56,-0.07 4.23,-2.96 2.04,-1.51 -2.56,-3.7 0.57,-5.19 2.14,-0.95 4.31,-2.8 2.75,-5.2 0.4,-1.84 1.4,-3.83 0.29,-5.45 0.84,-2.27 2.74,-2.67 4.64,-3.69 0.49,-2.31 0.11,-5.38 -2.99,-3.91 -2.18,-0.9 -2.07,-4.02 -1.67,-5.52 -0.9,-1.11 -2.32,-1.86 -3.72,-2.1 z",
						"department-49" : "m 163.22,217.21 c -0.83,2.37 -1.6,5.33 1.37,5.86 1.81,2.08 0.91,5.95 4.42,6.63 2.22,0.05 6.13,2.61 1.99,3.38 -1.68,0.33 -6.88,-1.51 -4.42,1.8 -0.28,3.95 5.62,1.28 7.64,2.98 2.45,0.74 1.41,5.07 2.67,6.48 -2.29,2.93 -6.35,1.4 -9.46,1.86 -2.75,1.47 -6.15,1.11 -8.63,2.95 -2.19,2.35 2.81,0.48 2.57,3.2 0.31,2.29 2.55,1.71 3.57,1.87 1.63,2.89 1.11,5.74 -1.65,7.56 -1.38,3.05 3.73,1.85 4.64,4.57 0.65,0.86 -1.19,3.33 1.44,2.98 2.09,1.51 5.06,-0.93 6.83,0.87 2.12,0.24 3.87,3.37 5.76,0.52 2.61,-0.75 5.23,0.76 7.87,-0.16 3.45,0.68 4.18,-2.89 4.98,-5 2.46,-1.53 5.74,1.7 7.32,-1.15 3.52,-0.32 7.2,-1.11 10.47,-0.77 1.05,1.17 -2.26,1.94 0.29,2.63 2.66,0.88 1.49,-3.86 4.67,-2.23 0.32,-1.55 1.08,-6.07 4.26,-4.7 1.02,-3.55 0.54,-7.68 3.15,-10.63 1.2,-1.75 2.78,-3.33 2.02,-5.32 0.89,-2.49 1.94,-4.87 2.33,-7.52 -2.3,-1.25 2.95,-6.06 -1.28,-5.83 -1.14,3.4 -4.78,-0.25 -6.77,-0.21 -1.89,-1.86 -5.83,-3.95 -7.59,-1.47 -2.9,0.48 -5.51,-3.13 -2.87,-5.2 -1.31,-0.36 -3.53,1.25 -5.3,-0.11 -1.96,-0.38 -3.12,0.57 -3.07,-1.96 -1.12,-2.87 -4.12,0.14 -5.77,-2.2 -1.77,-0.71 -0.8,2.61 -3.03,1.75 -3.13,1.53 -6.89,1.32 -10.17,-0.06 -1.72,-2.25 -3.57,1.59 -5.08,-1.25 -0.8,-0.99 -3.72,-1.84 -2.9,0.37 -3.4,0.17 -6.97,-0.89 -10.18,-1.14 -0.72,-0.44 -1.37,-0.99 -2.14,-1.36 z",
						"department-85" : "m 161.28,265.2 c -0.97,1.7 -1.54,3.91 -3.7,2.64 -1.76,1.98 1.21,6.33 -3.05,6.68 -4.15,2.13 -1.3,-4.19 -2.86,-6.14 -3.81,-0.88 -3.43,4.2 -2.06,6.39 -1.18,1.59 2.88,3.89 -0.56,4.36 -2.8,1.01 -5.58,-1.25 -8.45,-1.27 -0.94,-1.21 -1.09,-3.22 -3.4,-2.64 -2.06,0.15 -1.35,-2.2 -3.49,-1.71 -2.48,-1.21 -5.24,-7.8 -7.15,-2.42 -0.59,3.85 -5.53,4.8 -4.91,9.21 0.37,4.17 5.72,4.87 7.16,8.67 2.67,2.58 4.99,5.43 6.65,8.8 0.87,1.89 0.24,6.13 2,6.75 0.16,-1.73 0.12,-2.45 1.07,-0.5 1.66,2.86 6.15,2.45 7.02,5.1 3.4,-0.42 6.93,0.3 7.04,4.36 1.27,2.81 4.49,-1.27 6.02,1.84 2.09,-0.13 3,3.11 4.96,3.02 -0.36,-3.97 4.41,-1.93 6.48,-3.3 1.71,-1.96 4.7,-2.5 6.81,-2.37 -1.17,1.68 -0.83,3.92 1.65,2.75 2.07,-0.36 4.04,-2.66 5.25,0.14 2.09,1.8 3.55,-0.97 5.61,-0.12 1.62,-1.38 3.3,-2.9 5.04,-3.72 0.18,-2.56 -3.47,-1.87 -3.87,-1.44 -0.63,-2.59 1.8,-5.29 -0.47,-7.7 0.94,-1.38 2.03,-1.54 1.08,-3.45 0.09,-2.1 -0.29,-4.13 -1.61,-5.22 0.65,-2.15 -1.16,-2.52 -0.79,-4.52 -1.57,-1.94 -3.3,-3.94 -1.89,-6.5 -1.72,-1.62 -5.39,-2.92 -5.22,-6.11 0.38,-2.29 -3.29,-2.9 -3.68,-5.31 -1.81,-2.01 -4.49,-1.74 -7.1,-1.32 -3.49,-1.03 -6.73,-2.66 -9.6,-4.96 z",
						"department-79" : "m 211.41,263.54 c -3.47,1 -7.46,-0.24 -10.55,2.01 -1.54,0.87 -3.61,1.5 -3.45,-0.55 -2.89,-0.11 -3.46,3 -4.1,4.64 -2.76,1.84 -6.3,1.53 -9.35,1.02 -2.77,-0.37 -6.01,2.62 -2.55,4.27 1.05,2.29 0.26,5.24 3.5,6.22 3.7,1.27 0.35,4.83 3.08,6.91 1.95,2.46 1.89,5.88 3.13,8.43 0.79,2.29 0.53,5.23 -0.6,6.69 2.08,1.92 -1.04,5.98 0.79,6.87 2.26,-2.05 4.86,2.6 1.35,3.21 -1.82,2.1 -4.84,2.03 -7.01,3.55 -1.92,3.7 2.7,4.91 3.24,8.13 1.44,0.37 2.62,0.88 2.81,2.1 3.32,-0.93 5.83,3.57 8.63,3.01 2.89,1.17 6.03,0.6 8.47,3.22 3.7,-0.54 3.87,6.56 7.56,4.57 1.73,-2.11 1.24,-5.98 4.87,-5.81 1.63,-2.21 4.23,-2.49 6.45,-1.63 1.55,-1.48 2.11,-4.78 -0.83,-4.33 -3.29,-1.46 -1.71,-5.49 -0.5,-7.4 1.75,-0.97 0.56,-7.43 -1.84,-3.75 -2.3,2.89 -5.28,-1.21 -4.22,-3.39 -2.48,-2.03 -1.19,-5.37 -2.68,-7.99 1.33,-2.02 1.71,-4.55 3.11,-6.42 -0.55,-0.92 -2.28,-2.13 -2.08,-2.45 -3.66,1.58 0.19,-4.05 1.24,-5.25 2.3,-2.33 -3.14,-3.07 -0.93,-5.56 1.44,-1.85 -3.47,-1.82 -0.33,-2.92 3.33,-0.16 0.56,-1.18 -0.24,-2.53 0.5,-2.54 0.1,-5.85 -1.91,-7.36 -1.96,-0.52 -0.38,-5.88 -4.15,-4.77 -2.43,-0.12 2.22,-3.17 -0.9,-2.74 z",
						"department-17" : "m 175.73,312.62 c -2.1,1.05 -4.89,0.98 -6.33,3.16 -2.59,0.12 1.24,4.72 -2.26,5.02 -2,0.79 -4.42,5.17 -2.11,6.01 2.93,0 2.49,3.17 4.17,4.84 0.72,1.37 3.67,5.65 0.03,4.87 -2.18,0.36 1.95,2.77 0.48,4.24 1.55,2.23 0.05,3.13 -1.55,3.46 -0.38,1.57 -2.23,1.63 -0.92,3.81 0.7,3.56 3.92,5.46 6.53,7.53 -3.66,-0.31 -5.1,-4.96 -7.98,-5.25 -3.89,-1.1 -3.52,4.91 -2.88,6.67 2.74,-1.46 4.76,2.94 7.48,3.54 3.34,1.31 3.69,5.42 7.19,6.15 4.09,3 7.55,7.17 8.5,12.27 0.26,3.76 5.67,2.29 7.12,1.56 -1.08,5.27 6.99,0.78 7.08,5.12 0.92,1.82 -0.24,5.87 1.93,6.53 3.38,-1.84 5.25,4.16 8.91,4.29 2.53,1.16 3.84,-3.72 5.99,-0.43 0.42,-1.35 1.41,-3.02 1.97,-3.79 -0.43,-1.67 1.72,-4.75 -1.44,-5.53 -1.82,-0.53 -4.59,0.36 -3.27,-2.54 -1.47,-1.11 -5.11,-3.27 -7.08,-1.29 -2.02,-1.16 -0.75,-3.34 0.78,-3.22 -1.02,-0.53 -4.64,-2.27 -1.19,-3.33 4.28,-0.66 -2.5,-4.27 0.56,-5.26 2.44,-2.46 -2.28,-2.77 -2.54,-4.29 2.17,-2.32 -2.75,-3.59 -3.55,-5.14 -2.87,0.92 -0.97,-2.62 0.33,-2.63 -2.65,-1.14 -0.44,-4.4 -1.57,-5.27 -2.89,0.77 -1.45,-2.34 0.53,-2.18 1.34,-1.34 4.68,-0.44 6.11,-2.14 2.35,-0.74 2.26,3.5 4.57,1.02 2.44,-0.29 1.26,-3.78 2.59,-5.17 -1.46,-1.93 -1.99,-4.68 1.15,-4.47 0.21,-2.43 -3.03,-4.09 -3.83,-6.1 -0.81,-1.69 -4.49,-0.9 -5.2,-3.54 -1.75,0.56 -3.25,0.45 -4.22,-0.82 -1.42,1.85 -1.72,-1.94 -2.91,-0.25 -3.3,-0.03 -3.97,-4.4 -7.72,-2.73 0.56,-2.08 -4.7,-2.08 -3.15,-4.59 -0.87,-1.66 -4.22,-2.08 -2.44,-4.29 -0.3,-2.54 -4.15,-5.59 -5.48,-2.93 -1.22,-0.57 -5.78,1.4 -3.85,-1.55 0.3,-0.71 0.63,-1.62 -0.55,-1.38 z m -24.48,7.33 c -2.5,0.03 -3.87,1.14 -1.7,3.09 3.95,0.17 7.19,2.31 10.9,3.68 3.89,-1.05 -3.64,-4.87 -5.82,-4.1 0.29,-2.41 -4.61,1.24 -3.83,-1.48 1.5,1.02 1.83,-1.02 0.46,-1.19 z m 4.27,13.72 c -0.7,1.54 2.03,3.7 0.87,5.86 3.02,2.81 6.53,5.8 7.08,10.16 2.32,-1.62 3.28,-6.49 0.08,-7.91 -0.51,-2.29 -0.47,-5.1 -3.54,-5.11 -1.46,-1 -2.65,-2.71 -4.49,-2.99 z",
						"department-33" : "m 170.37,365.5 c -2.88,2.39 -3.66,6.38 -3.67,9.99 -0.06,6.47 -0.57,12.93 -1.99,19.26 -0.93,8.17 -1.59,16.38 -2.58,24.55 0.15,2.18 -1.38,7.44 -0.06,8.1 -0.08,-3.31 1.98,-7.54 4.36,-8.96 1.97,1.72 7.34,5.74 3.76,7.49 -2.73,1.04 -6.38,-2.36 -6.38,2.52 -1.52,2.69 -2.74,7 -1.06,9.24 2.84,-0.63 5.96,-2.27 7.61,-3.75 2.03,1.26 5.7,0.92 3.77,4.43 -2.89,4.65 3.5,-0.33 5.45,2.23 3.86,1.51 7.87,-3.74 11.26,-0.84 -1.42,4.09 4.44,3.2 5.19,6.56 1.94,1.37 4.07,0.77 4.89,3.31 2.18,0.86 -1.21,6.6 3.33,5.68 2.58,1.12 6.14,0.42 4.75,-3.03 1.75,-3.72 3.17,3 5.62,1.04 3.5,-1.1 3.84,-4.91 0.95,-7.06 1.78,-1.99 6.6,-1.58 3.43,-5.47 1.27,-2.35 -1.77,-5.16 1.09,-7.2 -1.95,-2.11 4.08,0.01 3.42,-3.48 2.15,-0.49 2.85,-2.17 2.61,-3.54 1.82,1.01 2.01,-3.15 -0.54,-1.86 -1.24,-1.31 -2.01,-2.64 0.2,-3.47 -0.33,-1.44 2,-1.21 2.56,-1.67 0.96,3.46 0.77,-3.24 2.88,-0.59 3.44,-0.12 -2.08,-5.38 2.19,-5.6 -0.3,-3.57 -4.29,-0.98 -5.16,1.24 -2.94,-0.94 -4.42,-0.02 -6.92,-0.52 -0.48,-1.95 -5.24,-0.86 -1.96,-2.84 3,-2.61 -1.26,-5.76 1.74,-8.21 0.18,-2.65 3.61,-7.86 -1.4,-8.03 -1.8,0.66 -3.02,1.85 -4.53,-0.13 -2.79,3.68 -7.23,0.65 -9.47,-1.85 -1.02,0.81 -2.89,-3.34 -3.74,-0.02 -1.83,-2.9 -1.15,-5.89 -1.94,-8.56 -2.49,-1.97 -7.58,0.6 -7.16,-4.13 -0.99,3.32 -7.86,-1.7 -5.65,3.47 1.12,5.25 -0.04,11.74 4.13,15.79 1.6,0.97 5.46,1.4 5.09,3.59 -1.14,-1.76 -5.95,-2.2 -2.42,0.16 0.89,1.86 0.32,4.86 0.46,6.96 -0.86,-3.57 -0.31,-7.65 -4.4,-9.5 -4,-3.65 -3.81,-9.3 -4.62,-14.2 -0.83,-4.14 -2.82,-8.05 -6.26,-10.61 -1.82,-3.68 -6.55,-3.9 -8.36,-7.63 -0.3,-0.84 1.03,-2.73 -0.47,-2.88 z",
						"department-40" : "m 169.77,433.93 c -1.39,4.09 -9.03,1.92 -8.11,7.38 -1.02,7.04 -1.81,14.11 -3.21,21.09 -1.27,6.3 -2.02,12.7 -3.64,18.93 -1,6.23 -2.25,12.44 -3.8,18.55 2.58,-1.5 3.77,4.05 6.97,1.91 3.34,1.32 5.68,-3.95 8.44,-2.39 2.07,1.33 0.83,1.91 -0.48,2.62 2.25,0.71 3.66,-2.53 5.72,-0.83 1.43,1.01 3.09,-0.31 2.14,-1.78 2.65,0.58 4.62,-1.18 7.1,-0.71 0.89,-0.91 2.56,-0.97 3.4,-1.93 1.42,1.18 2.14,3.21 3.39,1.18 1.9,-0.75 2.12,-1.21 2.41,0.33 1.62,2.42 3.07,-1.23 4.2,0.55 1.35,-0.65 5.1,-4.97 5.14,-2 -2.25,3.45 3.32,-1.25 4.51,1.48 1.42,-0.66 5.29,-2.61 3.41,-4.06 -2.62,-1.1 2.2,-2.69 0.51,-4.53 -0.4,-2.09 3.75,-3.09 1.72,-4.6 0.25,-1.62 -1.17,-3.73 0.82,-4.32 -0.1,-1.59 -0.15,-2.99 -0.15,-4.15 -3.84,-1.04 1.14,-3.46 2.82,-3.81 1.4,0.08 1.6,0.86 2.46,-0.49 1.85,-0.5 2.29,-3.87 4,-0.74 -0.03,1.42 -1.08,2.56 1.12,3.35 3.85,1.54 0.42,-3.68 2.06,-5.19 -1.31,-3.01 1.52,-6.01 2.73,-8.67 -3.45,-0.68 -6.76,-2.36 -10.44,-2.46 -3.14,0.72 -0.38,-5.12 -3.37,-6.17 -1.68,-2.94 -3.31,0.33 -2.44,2.4 -1.45,2.03 -6.15,0.75 -7.76,-0.49 0.06,-2.43 0.64,-4.45 -1.66,-5.74 -0.75,-1.94 -4.67,-0.97 -4.92,-3.99 -2.01,-1.55 -5.69,-1.4 -4.21,-4.64 -1.24,-2.31 -3.79,0.2 -5.94,-0.34 -3.05,3.71 -7.01,-1.41 -10.49,1 -4.03,1.42 2.63,-4.52 -0.65,-5.54 -1.61,0.68 -2.43,-1.07 -3.83,-1.21 z",
						"department-64" : "m 211.2,495.72 c -1.9,1.07 -4.71,-0.23 -5.99,2.39 -1.98,0.52 -4.11,-1.44 -6.18,0.45 -1.47,-0.65 2.04,-3.79 -1.1,-2.24 -1.84,1.1 -3.29,3.13 -5.1,2.48 -1.96,1.45 -5,-2.73 -6.29,0.37 -1.3,-1.42 -2.42,-3.2 -3.7,-1.06 -1.86,0.3 -2.9,1.44 -5.06,0.79 -0.86,1.97 -4.19,-0.71 -3.64,2.4 -2.25,0.68 -5.49,-1.09 -7.26,1.32 -3.27,-0.97 2.34,-1.26 -0.09,-2.53 -2.18,-3.25 -4.64,2.8 -7.39,1.71 -2.74,0.92 -5.67,0.14 -7,-2.21 -3.51,1.11 -4.76,4.93 -7.06,7.37 -1.86,2.09 -5.86,0.94 -7.14,3.17 0.39,1.82 2.63,2.08 2.45,4.31 2.16,-0.79 5.47,-0.83 4.92,2.37 1.44,2.55 2.98,-0.5 3.6,-1.51 2.37,0.53 4.98,1.17 7.12,1.91 1.21,3.15 -0.34,6.66 -1.84,9.39 -3.7,1.82 -0.21,5.81 2.82,5.62 2.52,-0.18 0.25,-6.64 4.3,-5.38 -2.77,2.45 0.66,4.77 3.15,4.41 2.76,1.62 4.75,2.53 7.73,3.53 2.51,0.74 4.11,3.68 7.28,2.92 2.81,1.52 7.35,-3.02 7.16,2.26 -1.02,2.96 3.25,2.28 4.34,4.46 1.78,1.41 3.01,6.8 5.13,3.41 1.29,-2.94 5.1,2.52 7.14,-0.85 1.53,-1.11 3.1,-1.71 2.2,-4.29 -2.14,-2.89 3.19,-3.06 1.08,-6.08 -0.73,-2.21 1.82,-2.45 1.78,-4.48 3.8,1.19 0.42,-4.25 3.06,-5 2.06,-1.26 1.63,-4.46 4.21,-4.01 0.61,-1.33 0.15,-2.87 1.47,-3.33 2.68,-2.17 -1.51,-4.94 1.51,-6.75 3.94,0.18 -1.17,-3.74 0.89,-5.91 -0.71,-3.82 -1.88,1.82 -3.23,0.54 -0.52,-1.85 0.16,-3.46 1.54,-4.09 -0.91,-1.78 -0.41,-4.39 -2.84,-4.92 0.66,-3.73 -2.6,-1.04 -3.99,-2.95 z",
						"department-65" : "m 216.99,494.91 c -1.84,0.25 -2.8,4.03 -0.53,4.11 1.88,1.3 0.29,3.67 2.23,4.92 -1.93,0.09 -2.67,2 -1.81,3.38 0.3,1.54 2.42,-3.88 2.78,-0.62 0.04,1.77 -0.37,4.08 1.04,5.66 -0.74,1.52 -3.19,0.65 -3.23,3.06 1.46,1.22 1.22,2.8 0.07,4.31 -0.99,0.9 -1.52,1.78 -1.24,3.38 -1.18,1.4 -2.47,-0.59 -2.75,1.65 -0.31,2.34 -3.5,2.62 -2.83,5.08 -0.23,1.21 0.77,2.46 -1.27,2.75 -1.74,-1.03 -0.67,2.29 -2.47,2.46 -0.22,2.15 1.18,4.49 -1.44,5.52 0.13,2.35 0.39,5.58 3.33,6.26 1.51,1 2.85,2.84 4.69,1.37 -0.57,1.85 1.47,3.6 2.41,4.96 1.56,0.38 2.66,3.5 4.75,1.97 1.8,-0.64 3.96,-1.24 5.98,-1.71 2.21,-1.74 5.92,-0.18 6.53,2.47 2.16,1.45 2.84,-4.54 5.11,-1.48 1.05,2.42 6.1,0.26 2.72,-1.38 -0.47,-1.86 -0.16,-4.75 -0.08,-7.05 -0.01,-1.71 0.82,-4 2.68,-2.21 3.39,1.23 2.02,-4.26 4.56,-5.2 1.78,-1.39 -1.78,-2.01 -0.27,-3.71 -0.3,-0.99 -0.83,-2.98 -1.65,-1.25 -1.08,0.21 -3.2,2.39 -2.44,-0.12 -0.09,-1.57 2.08,-1.37 1.06,-3.26 -1.4,-1.24 -3.29,-2.47 -4.49,-3.12 -2.02,-2.1 3.51,-3.46 2.42,-5.76 0.93,-0.47 4.3,-0.56 1.96,-2.04 0.32,-1.95 5.47,-3.77 2.06,-5.05 -2.3,-1.28 -4.63,-0.69 -6.84,-1.39 -2.1,2.1 -2.26,-2.3 -4.28,-0.93 -1.76,1.3 -0.81,-1.74 -2.47,-1.53 -0.55,-2.46 -4.01,1.85 -5.67,-0.21 0.62,-1.85 -3.42,-2.4 -1.35,-4.21 1.51,-1.16 -1.9,-2.45 -1.19,-4.22 -1.14,-1.21 -3.48,-0.65 -4.39,-2.66 -2.13,-0.62 -0.57,-4.95 -3.7,-4.22 z",
						"department-32" : "m 246.37,463.78 c -1.87,2.87 -5.69,0.08 -7.22,3.28 -1.88,1.49 -4.2,0.57 -5.81,2.33 -2.39,-0.54 -4.55,-3.39 -6.11,0.1 -0.16,1.89 -1.71,0.96 -1.7,-0.3 -2.5,0.36 -4.05,2.53 -2.63,4.96 0.01,3.29 -6.18,-0.5 -3.3,-1.85 -0.54,-2.21 -2.13,-1.97 -3.07,-0.29 -1.34,0.89 -1.71,2.04 -3.36,1.03 -1.68,0.34 -3.48,1.37 -4.38,2.76 1.22,0.28 3.13,1.71 1.37,2.42 1.01,1.6 0.51,3.2 -0.73,3.83 -0.07,2.44 2.42,4.6 -0.76,5.86 -1.18,1.63 0.66,4.33 -1.94,5.01 -0.42,1.69 2.27,1.13 1.62,3.13 2.18,-0.55 3.63,0.28 6.01,0.22 1.55,-0.54 3.47,-2.96 4.82,-0.45 0.15,2.77 2.68,4.35 4.51,5.25 2.48,-0.68 1.19,3.49 3.25,4.21 -0.48,0.88 -2.09,2.3 -0,3.14 1.28,0.27 0.25,2.29 2,2.07 2.01,0.08 3.81,-1.91 5.13,-0.1 0.83,0.3 0.34,2.73 2.13,1.32 1.65,-1.02 1.99,3.25 3.69,0.87 2.91,0.44 5.72,1.25 8.79,1.59 2.28,-1 2.83,-4 4.96,-4.85 -0.08,-1.97 1.2,-2.17 2.72,-1.09 2.04,-2.03 5.8,0.4 7.36,1.79 1.25,2.38 1.53,-1.44 1.56,-2.27 1.63,-0.08 0.78,-2.07 1.64,-3.14 -1.95,-1.43 1.97,-2.65 1.07,-4.39 -0.66,-1.2 0.97,-1.78 2.08,-0.85 0.33,-1.45 2.39,-1.29 3.2,-2.18 2.33,0.7 0.78,-3.33 -0.81,-2.33 -0.96,-0.86 -0.26,-2.97 -2.3,-2.06 -1.55,-0.33 0.33,-2.07 -1.76,-1.78 -1.88,-0.75 0.92,-3.18 -2.09,-3.14 -1.61,-1.44 -2.45,-4.37 -4.36,-5.15 -3.35,1.69 1.17,-3.08 -1.5,-3.24 0.76,-1.49 -1.03,-2.76 -0.22,-4.22 -1.16,-1.24 -2.92,-1.03 -4.29,-1.63 -2.35,1.17 -1.75,-1.94 -0.23,-2.55 1.5,-1.23 1.3,-2.73 1.39,-4.08 3.53,-0.83 -1.38,-2.38 -2.33,-0.22 -1.18,0.08 -0.41,-3.33 -2.53,-1.63 -1.28,0.69 -2.36,3.52 -3.35,0.81 -0.67,-0.82 -1.46,-1.92 -2.53,-2.18 z",
						"department-47" : "m 230.07,418.5 c -0.81,0.77 -0.9,3.82 -1.83,1.38 -1.82,-0.02 -3.21,2.14 -3.88,3.3 1.04,0.9 2.08,1.66 3.3,1.8 -0.04,1.51 -1.7,2.55 -2.03,4.05 -1.55,0.64 -2.55,2.47 -3.24,3.29 -3.01,0.59 -4.44,4.14 -2.78,6.75 -1.33,1.76 2.46,5.68 -1.08,5.69 -2.16,-0.16 -3.67,2.4 -1.25,3.45 1.89,2.62 -1.53,5.28 -3.79,5.58 -0.01,1.94 -0.52,5.85 2.43,4.84 2.83,-0.58 4.82,1.94 7.53,1.7 1.96,-0.36 2.73,1.43 1.07,2.55 -0.51,2.08 -4.01,5.95 -0.67,6.93 1.39,-0.27 1.71,-1.54 2.32,0.34 1.42,0.2 1.56,-3.84 3.99,-2.43 2.21,2.53 4.49,0.26 7.07,0 2.57,-0.7 3.69,-3.71 6.77,-2.71 1.7,-0.39 3.39,-2.44 4.44,0.28 1.31,3.29 3.19,-0.23 4.88,-1.16 0.36,-1.62 1.13,-2.69 2.56,-3.54 -1.25,-2.97 5.51,1.65 4.18,-2.52 -0.96,-0.29 -2.25,-1.68 -0.22,-2.14 2.35,-0.03 2.05,-4.03 2.4,-5.78 -1.23,-1.07 -4.15,-1.71 -2.2,-3.71 -0.38,-1.68 1.32,-4.27 2.55,-1.77 1.53,0.85 4.19,-0.22 5.25,-0.41 0.48,-2.12 -0.42,-3.89 -1.57,-5.33 0.06,-1.97 -1.67,-5.18 -1.15,-6.13 2.23,0.07 5.01,-2.93 1.78,-3.93 -1.73,-2.48 -5.12,-2.94 -6.92,-0.28 -2.08,2.1 -3.89,-1.44 -2.14,-3.04 0.26,-1.39 -1.37,-4.01 -2.62,-1.92 -2.44,1.01 -5.83,0.37 -7,-0.95 -2.41,-0.18 -2.86,2.94 -5.17,1.62 -2.31,0.8 -5.39,2.91 -7.69,0.67 0.42,-2.17 -0.14,-6.16 -2.93,-6.02 -0.81,0.25 -1.86,0.44 -2.38,-0.43 z",
						"department-31" : "m 290.02,474.31 c -1.06,1.38 -2.08,2.2 -3.14,1.27 -0.58,4.46 -6.27,-1.79 -5.29,3.06 -1.9,-0.93 -3.5,1.28 -0.64,0.98 2.48,2.1 -3.77,2.63 -4.93,4.19 -2.22,1.21 -0.1,-1.87 -2.62,-1.46 -1.27,-3.41 -2.92,1.42 -4.53,-1.01 -1.38,1.57 -7.9,0.39 -4.49,3.87 1.19,2.36 4.47,2.68 3.64,5.37 2.67,0.06 0.55,2.9 3.52,1.95 0.58,0.93 0.66,2.79 2.12,2.09 2.71,3.12 -2.63,3.32 -4.16,4.93 -1.1,-1.53 -1.56,1.15 -1.34,1.61 0.44,1.44 -2.97,2.2 -1.16,3.88 -0.09,2.59 -2.4,2.6 -1.68,5.18 -1.9,1.75 -3.41,-2.85 -6.25,-2.48 -1.97,-0.25 -2.83,1.49 -4.6,-0.2 -0.73,3 -3.35,2.98 -4.53,6.1 -1.7,0.77 -1.89,0.75 -1.75,2.05 -1.29,1.74 -3.85,2.87 -2.67,4.97 -1.64,0.77 -2.86,0.43 -2.8,2.37 -2.19,1.55 -3.92,4.34 -0.36,4.93 1.97,0.94 4.52,4.07 1.77,4.79 -1.3,4.88 3.7,-2.96 3.72,1.66 0.49,1.32 -0.65,2.24 1.07,3.28 -2.79,1.64 -2.18,9.05 -6.68,5.6 -1.73,2.41 -1.93,7.77 -0.38,10.18 1.27,3.59 5.97,0.17 8.88,1.83 2.51,-1.92 -1.95,-5.09 0.25,-7.4 -0.76,-3.42 2.9,-4.02 4.93,-2.32 1.62,-0.12 4.31,1.32 2.68,-1.53 -0.93,-1.79 -1.4,-4.59 1.53,-4.74 -1.15,-3.31 5.98,-1.18 5.47,-5.37 -2.22,-1.5 -0.83,-5.26 0.13,-6.33 2.45,2.03 0.85,-3.56 3.56,-1.87 1.66,-2.07 2.75,0.56 4.53,0.43 1.14,1.96 2.46,4.41 4.04,1.37 2.25,-2.5 -5.64,-2.56 -1.56,-4.98 1.91,-0.32 6.85,-0.7 5.84,-3.41 -3.62,0.11 -4.71,-4.72 -0.54,-4.92 1.7,1.78 3.23,3.99 3.46,6.31 3.43,1.14 2.88,-2.05 2.74,-4.44 1.24,-0.74 2.86,2.59 3.98,0.85 2.05,0.25 3.31,3.93 3.51,0.42 1.87,-1.02 3.37,-2.54 3.2,-4.86 1.65,-0.79 5.11,0.92 3.61,-2.58 0.23,-2.56 3.55,-6.11 4.18,-1.52 0.52,0.87 1.91,-3.3 3.78,-0.91 2.24,0.69 2.87,-1.22 1.62,-2.8 0.91,-0.95 2.23,-3.84 -0.03,-2.5 -1.07,2.43 -6.09,-0.82 -6.91,-3.1 -0.98,-3.43 -6.75,-3 -7.98,-6.29 2.91,-1.68 0.76,-3.48 -1.25,-4.16 3.26,-0.53 0.29,-2.11 -0.5,-3.7 0.64,-3.06 -3.23,-3.07 -3.17,-5.79 -1.79,-0.87 -1.06,-3.76 -1.85,-4.82 z",
						"department-09" : "m 281,514.26 c -1.93,0.45 -2.81,3.42 -0.61,3.74 0.47,1.06 3.65,0.84 1.91,2.92 -1.78,0.48 -2.86,1.94 -5,1.65 -1.94,-0.47 -2.72,3.01 -0.2,2.59 2.24,0.58 1.95,2.32 0.27,3.21 -1.24,2.42 -2.69,-0.31 -3.19,-1.7 -1.18,-0.65 -2.35,-0.74 -3.49,-1.68 -1.21,1.5 -3.6,0.41 -3.5,3.08 -0.69,0.69 -2.14,-1.23 -2.07,0.85 0.78,1.23 -1.59,1.79 -0.08,3.25 -1.18,1.45 2.43,1.96 0.17,3.11 -0.33,2.96 -5.7,1.12 -4.88,4.08 -1,0.73 -3.51,0.76 -1.93,2.67 -0.14,2.58 1.36,4.98 3.85,6.04 1.3,1.43 2.44,-0.82 3.84,0.84 2.2,0.69 5.28,-0.08 6.42,2.49 -0.04,2.84 2.56,2.9 4.54,2 2.27,0.7 5.31,-0.62 6.28,1.97 2.47,1.03 1.46,6.42 4.53,5.84 0.33,-1.46 -0.02,-3.65 2.25,-2.77 2.58,-1.67 3.67,2.32 6.42,1.51 1.59,0.01 4.16,0.09 3.44,2.23 1.96,0.82 4.9,1.1 6.14,-0.77 0.17,-1.61 2.36,0.02 3.34,-1.21 1.09,-1.15 1.09,-3.64 3.34,-2.57 1.75,-1.21 4.32,-0.24 5.87,-0.95 0.4,-2.48 -3.41,-3.46 -4.42,-5.35 -2.08,0.81 -4.89,2.28 -6.69,-0.08 -1.29,-0.72 0.48,-2.24 -1.27,-3.27 -1.88,-0.45 -2.07,-2.21 -0.54,-3.2 2.84,0.11 5.65,-1.41 4.42,-4.62 -1.62,-0.54 -3.31,-2.15 -0.6,-2.68 1.86,-1.01 -0.44,-3.29 0.61,-4.77 -1.01,-0.87 -2.68,-1.46 -1.18,-2.69 -0.07,-1.43 -0.47,-4.45 -2.45,-3.41 -0.92,1.43 -0.96,-2.2 -2.67,-1.24 -2.3,-0.25 -5.38,-1.98 -6.1,-3.66 0.91,-1.6 -0.72,-3.91 -1.67,-5.05 -0.92,0.6 -1.38,4.39 -1.98,1.49 -1.2,-0.67 -2.47,-1.05 -3.16,-0.2 -0.47,-1.65 -2.24,-0.25 -2.45,-1.94 -1.91,1 1.34,4.52 -1.22,4.39 -1.46,2.03 -3.74,-0.79 -2.75,-2.52 -1.34,-0.95 -2.09,-3.13 -3.54,-3.63 z",
						"department-11" : "m 322.74,505.07 c -2.05,0.87 -0.82,6.47 -3.43,3.37 -1.24,-1.83 -5.19,2.71 -5.61,-1.17 -0.96,-1.29 -3.24,1.91 -4.87,-0.09 -1.63,-0.8 -2.35,3.52 -2.64,0.63 -0.96,-2.44 -1.93,-1.82 -2.84,-0.31 -0.91,1.07 -1.52,2.84 -0.93,4.7 -1.36,0.65 -4.52,-0.56 -3.73,2 -2.59,1.87 -0.87,4.71 -0.49,7.11 -1.27,1.72 2.24,1.99 3.14,3.2 1.19,0.53 2.27,1.21 2.96,0.05 1.12,0.9 1.35,2.64 3.05,1.69 2.12,0.9 2.09,4.11 1.18,5.21 3.13,0.75 0.58,4.42 2.61,6.09 -0.39,0.99 -3.64,-0.55 -2.72,1.47 3.15,0.22 2.69,5.73 -0.43,5.57 -2.23,-0.56 -4.71,2.43 -1.69,3.29 1.21,1.07 1.25,2.2 0.94,3.14 2.17,2.52 4.98,0.67 7.49,0.33 1.51,2.48 4.82,3.48 4.44,6.58 1.77,-0.41 3.17,-3.16 4.49,-3.39 3.31,0.6 4.11,-3.13 3.04,-5.57 -1.83,-2.22 -0.3,-4.53 2.45,-3.77 2.55,1.09 4.79,-0.72 7.38,0.01 2.84,0.15 6.37,1.82 8.78,-0.17 0.65,-3.39 5.24,-6.04 7.54,-2.78 1.85,0.63 5.78,4.21 6.08,0.38 -0.45,-2.41 3.52,0.65 2.08,-2.31 -2.01,-0.09 -2.51,-4.47 -0.81,-3.38 -1.64,2.12 0.92,2.66 1.07,0.34 -0.46,-2.15 2.38,-4.6 1.05,-6.15 -2.36,0.27 -1.35,-5.67 0.64,-3.13 -2.54,0.73 1.01,4.03 1.12,0.84 1.32,-2.4 3.72,-4.96 4.13,-7.43 -1.48,-1.18 -2.13,-3.67 -4.25,-2.51 -1.21,-1.56 -3.82,-0.43 -5.13,-2.43 -2.87,1.08 -0.98,-4.2 -4.12,-2.08 -1.35,-0.41 -2.91,-0.78 -3.72,-1.82 -0.39,1.7 -3.42,0.2 -2.88,2.31 -1.03,1.88 -2.16,4.69 -4.29,2.05 -1.21,-0.21 -0.6,-4.63 -2.32,-1.66 -2.18,1.62 -3.12,-0.12 -3.87,-2.12 -3.09,-0.03 -1.41,-4.42 0.31,-5.1 -2.19,-1.27 -5.18,-2.28 -7.77,-1.42 -1.98,2 -4.51,-1.63 -6.72,-1.15 -0.21,-0.07 -0.4,-0.62 -0.72,-0.42 z",
						"department-34" : "m 390.74,470.95 c -2.99,-0.26 -2.82,5.22 -4.91,4.05 -0.85,-0.82 -3.55,2.9 -1.7,3.78 -2.23,1.02 -3.63,-1.19 -4.2,-2.93 -1.16,0.9 -4.89,3.4 -3.25,0.24 -0.72,-2.79 -3.95,-1 -5.3,0 -2.69,-1.07 -4.43,1.99 -3.3,4.01 -2.19,2.21 -5.5,0.8 -7.8,-0.28 -1.78,1.11 -0.38,3.61 -0.42,5.05 -1.55,1.49 1.67,5.37 -2.24,4.09 -1.98,-1.46 -4.85,0.46 -4.95,2.6 -2.71,0.38 -5.15,2.58 -7.61,2.47 -1.2,-2.9 -5.65,-2.66 -5.41,0.83 -0.2,2.13 -0.02,4.29 2.09,5.91 -1.23,1.35 0.72,3.85 -1.77,4.6 -0.84,1.05 -3.22,1.42 -1.8,2.86 -2.1,0.55 -3.27,4.78 -0.38,4.9 0.41,3.09 3.29,3.1 4.71,0.7 1.12,1.12 0.35,3.34 2.55,3.76 2.97,1.15 1.66,-5.18 5.05,-4.27 1.09,-0.26 0.38,-2.58 1.62,-0.55 1.21,1.33 3.32,1.66 5.28,1.1 -0.81,3.2 2.64,2.34 4.33,4 1.73,-0.69 2.59,1.52 4.38,0.6 1.39,1.92 3.62,4.56 5.52,1.34 2.58,-2.15 5.39,-4.64 8.99,-3.22 1.68,-2.14 3.28,-4.7 5.33,-6.66 2.9,-0.94 5.12,-2.93 7.63,-4.62 1.32,-0.52 2.38,-2.93 0.36,-1.17 -0.86,0.97 -3.9,2.82 -4.09,1.95 2.86,-0.54 3.94,-3.18 5.35,-4.98 2.22,-0.89 3.15,-3.57 5.97,-3.69 2.76,-1.69 5.46,-2.2 8.14,-1.32 3.13,-2.28 2.15,-5.6 0.6,-8.52 -0.42,-1.85 -2.64,-1.51 -3.41,-3.24 -1.72,-0.64 -2.58,-4.02 -5.12,-2.47 -0.36,-1.17 1.06,-3.05 -1.22,-3.23 -1.16,-1.21 -1.48,-2.47 -3.51,-1.47 -2.48,1.54 -3.44,-1.7 -1.82,-3.25 0.15,-1.49 -1.98,-1.29 -2.11,-2.79 -0.5,-0.22 -1.04,-0.13 -1.56,-0.19 z",
						"department-81" : "m 317.26,455.8 c -1.38,0.45 -1.96,1.61 -3.59,0.76 -0.3,1.95 -3.52,3.22 -5.56,2.27 -1.35,-1.6 -1.97,-0.02 -0.95,1.04 -0.95,0.36 -4.67,-1.27 -3.47,1.46 -0.16,1.66 -2.33,-1.92 -2.18,0.76 -1.1,0.98 -2.79,-1.57 -4.48,-0.74 -2.96,-0.67 -1.32,3.31 0.16,3.83 0.79,1.92 -1.89,3.01 -2.42,4.25 -1.32,0.93 -1.16,3.17 -3.54,1.88 -3.23,0.63 2.44,1.72 -0.33,3.16 -1.29,2.54 1.59,4.57 1.92,6.82 3.43,0.3 1.18,4.78 4.33,5.68 1.56,1.28 -3.01,2.06 -0.13,2.25 2.4,0.02 1.46,2.84 -0.02,3.51 0.41,1.89 3.59,2.46 5.14,3.73 3.27,0.27 2.72,5.06 6.14,5.64 1.57,0.82 3.54,1.72 3.47,-0.75 2.28,-0.44 1.4,2 0.21,3 0.06,1.82 2.22,2.93 2.93,4.31 2.14,0.3 3.89,-2.52 5.16,0.35 2.18,0.85 0.37,-3.47 2.64,-4.11 1.88,0.14 4.42,2.05 6.83,2.16 2.71,-2.86 6.35,1.58 9.11,-0.98 1.2,-0.64 2.07,-1.84 2.78,-2.36 -0.59,-1.87 0.29,-4.05 -1.8,-5.38 -0.4,-2.17 -0.06,-5.25 1.22,-6.85 1.68,0.37 3.78,1.08 4.87,2.68 2.13,-1.79 6.04,-1.49 7.35,-3.74 0.82,-2 0.39,-5.04 -2.37,-4.51 -1.51,-1.26 -3.19,-1.55 -4.19,0.39 -2.37,0.97 -5.11,-0.89 -6.55,-2.85 -1.52,-2.15 -3.76,-4.35 -2.85,-6.85 -1.52,-0.96 -0.28,-3.74 -2.85,-4.01 -0.47,-0.84 1.76,-2.39 -0.4,-3.07 -0.29,-2.52 -2.16,-4.07 -4.11,-4.88 -0.57,-2.53 -3.81,-3.32 -5.31,-4.22 -0.15,-2.48 -4.32,0.72 -4.86,-1.12 1.44,0.14 3.17,-1.78 0.74,-1.46 -0.91,0.39 -2.23,-1.71 -3,-2.06 z",
						"department-82" : "m 270.52,443.01 c -2.14,1.16 -4.19,2.19 -6.63,2.16 -1.8,1.76 -1.62,-2.78 -3.54,-0.83 0.31,1.77 -1.92,4.88 1.19,4.85 2.39,1.55 0.09,4.21 -0.3,6.31 -0.44,1.21 -4,0.94 -1.6,2.01 1.97,0.84 -0.06,4.23 -1.88,2.4 -1.71,-1.22 -1.76,0.34 -2.14,1.6 -2.88,-0.32 -2.21,4.49 -0.81,4.92 0.76,-1.3 4.97,-1.27 3.43,0.36 -1.84,1.04 -0.66,3.8 -2.94,4.81 -1.25,0.84 -0.68,2.87 0.84,1.84 1.82,0.52 5.75,1.1 3.97,3.56 1.04,0.67 0.69,2.25 0.98,2.38 1.77,0.78 -1.98,4.07 1.01,3.39 2.26,-0.43 4.92,-0.42 6.74,-1.49 1.27,0.58 2.39,0.31 3.28,-0.35 1.56,0.75 2.53,2.41 3.56,2.88 1.74,-0.62 2.22,-2.04 4.12,-2 1.89,-0.5 1.91,-2.44 -0.22,-2.07 -1.95,-1.13 1.52,-1.46 1.74,-1.49 -0.38,-2.02 1.51,-2.5 2.7,-1.14 2.06,1 2.76,-3.06 4.11,-1.34 0.99,-1.05 2.54,-1.76 3.38,-2.23 -0.31,-0.89 -2.82,-2.03 -0.52,-2.27 3.19,1.02 3.39,-3.02 5.79,-4.18 1.52,-1.98 -2.9,-3.42 -1.35,-5.63 1.94,-1.07 4.17,0.24 5.66,0.61 0.71,-1.21 1.03,-1.65 2.08,-0.63 0.24,-1.33 0.21,-2.59 2.09,-1.85 1.1,0.24 2.24,0.41 1.15,-0.79 0.51,-1.8 4.19,2 3.66,-0.96 -0.31,-2.1 -2.39,0.61 -2.47,-1.31 -3.3,-1.19 0.65,-3.45 1.77,-4.89 0.21,-2.45 -4.44,-0.16 -4.38,-2.98 0.49,-1.88 -1.6,-1.91 -2.4,-1.54 -1.21,-0.58 -1.91,1.84 -3.15,0.41 -2.28,-0.21 -4.04,4.15 -5.85,2.74 -0.79,-2.47 -3.62,0.05 -1.56,1.51 0.31,2.35 -3.95,2.36 -3.07,-0.25 -2.24,-2.68 -3.51,1.69 -5.86,2.39 -1.45,2.53 -2.73,-0.71 -4.63,-0.48 -0.83,-1.02 1.91,-4.61 -0.86,-3.31 -1.97,2.14 -4.17,-0.81 -5.73,-2.04 -1.54,-0.03 -2.07,-2.27 -2.71,-3.05 0.48,-0.77 3.85,-1.24 1.34,-2.04 z",
						"department-12" : "m 344.82,407.22 c -2.14,2.24 -4.92,3.53 -5.91,6.44 -0.2,3.05 -2.88,4.6 -2.81,7.85 -2.78,1.77 -2.83,6.44 -7.03,4.76 -2.85,0.81 -3.66,-2.92 -6.7,-0.63 -2.79,-0.18 -0.5,4.84 -3.68,4.44 -1,2.09 -4.35,0.18 -4.99,0.68 -2.27,1.36 -4.93,3.35 -6.47,5.56 -0.5,0.74 -1.33,-2.39 -1.72,0.49 -3.55,0.2 0.23,4.71 0.28,6.73 2.91,2.12 -2.27,3.27 -0.47,5.85 1.39,1.46 5.91,0.06 3.8,3.53 -3.1,-0.35 -2.94,5.1 0.37,3.8 0.84,2.24 2.93,2.1 3.97,0.28 0.64,-0.72 3.02,-0.92 4.38,-1.29 0.38,2.53 5.59,1.47 2.9,3.68 1.7,0.61 3.86,-0.93 4.36,1.52 3.19,-0.21 4.33,4.36 7.18,4.97 1.07,2.25 3.3,4.6 2.21,6.63 2.23,0.9 1.85,3.49 2.9,4.9 -1.38,2.72 2.8,5.25 4.08,7.58 2.19,1.85 5.01,1.88 6.77,-0.28 2.08,1.32 5.71,0.5 5.44,3.99 1.27,0.35 3.33,-1.02 4.93,0.31 1.97,-0.43 -0.03,-3.71 1.21,-5.08 -2.26,-3.18 1.08,-5.37 3.72,-2.96 2.82,0.94 5.31,-0.91 4.29,-3.64 1.04,-3.15 6.02,0.38 5.11,-4.28 0.93,-2.39 7.18,-5.33 2.04,-7.25 -1.51,-0.47 -2.97,-0.34 -3.42,-2.06 -1.73,1.9 -3.93,-2.51 -0.51,-1.95 0.48,-1.6 1.14,-3.68 2.65,-4.73 -0.68,-4.43 -9.42,2.3 -6.63,-3.08 -1.18,-1.25 -3.15,-1.32 -3.65,-2.81 -2.6,0.85 1.8,-4.01 -0.75,-5.21 -0.72,-3.41 2.21,-7.15 -2.14,-9.54 -0.76,-2.6 0.83,-5.86 -2.52,-7.49 -2.49,-2.83 -5.19,-5.99 -4.63,-9.9 -1,-0.3 1.62,-2.72 -0.79,-2.1 -2.92,-0.77 -0.83,-7.54 -5.15,-5.36 -2.76,2.56 0.68,-4.65 -2.57,-4.34 z",
						"department-46" : "m 289.52,399.9 c -1.93,0.63 -3.22,2.08 -5.19,2.51 -0.55,2.48 1.91,5.04 0.2,6.77 1.53,1.17 0.68,2.13 -0.64,2.71 -0.49,1.39 -2.82,1.08 -2.03,3.22 -2.04,0.31 -3.93,1.87 -1.84,3.73 -0.63,1.48 -1.5,2.57 -2.96,3.19 -1.15,2.55 -6.2,0.92 -4.86,4.75 -0.81,1.54 -2.94,2.2 -2.41,4.25 -2.21,-0.14 -3.42,2.82 -5.02,1.78 1.06,2.16 1.42,4.31 1.76,6.68 1.42,0.87 1.66,2.27 1.65,3.98 1.08,0.06 4.12,-1.76 2.93,0.81 -1.71,0.25 -2.37,1.31 -0.78,2.24 0.3,2.25 3.42,1.16 3.62,3.37 1.9,1.69 3.3,-0.16 5.08,-0.35 0.72,1.57 -2.26,4.22 0.76,4.02 1.46,0.62 1.81,2.15 3.19,0.31 1.85,-0.6 3.07,-3.05 4.33,-3.46 2.43,-0.2 1.29,4.21 3.91,2.83 1.72,-1.05 -1.79,-4.67 1.45,-4.27 1,-0.03 1.35,3.17 2.11,1.18 -1.32,-1.83 1.53,0.24 1.9,-1.51 1.38,-1.16 3.1,-1.29 4.45,-0.92 0.2,-1.96 1.81,0.11 2.71,-1.11 1.67,0.1 4.18,-1.49 1.89,-2.9 -0.47,-2.26 -2.34,-4.82 -1.67,-6.85 1.76,-0.03 1.59,-1.88 3.42,-1.54 2.32,-1.45 3.8,-3.77 6.26,-4.75 1.66,-0.78 4.05,1.82 5.11,-0.84 2.37,0.13 1.47,-2.41 -0.05,-3.14 -0.16,-1.64 0.62,-3.82 -1.82,-3.9 0.88,-2.1 0.95,-4.43 1.69,-6.42 -0.75,-2.19 -3.06,-3.63 -3.78,-5.98 -0.22,-1.15 1.69,-2.17 -0.2,-3.09 0.38,-3.82 -4.01,-3.64 -6.05,-1.43 -0.4,-1.8 -2.37,-1.92 -3.03,-0.03 -1.66,0.66 -3.24,2.7 -4.53,1.71 -1.67,0.61 -1.38,-2.93 -3.39,-2.7 -0.94,-2.08 -2.85,-4.19 -5.2,-4.37 -1.54,-0.53 -2.13,1.38 -2.99,-0.49 z",
						"department-24" : "m 247.71,356.64 c -1.33,1.72 -2.15,5.44 -4.37,3.98 -1.29,2.19 0.65,6.02 -2.78,7.22 -1.07,1.73 -1.22,3.17 -3.43,2.89 -1.35,1.3 -2.7,2.47 -3.69,2.4 1.31,1.44 -2.43,1.19 -1.92,3.33 -1.11,2.86 2.21,7.18 -2.16,7.82 -1.72,1.11 -2.1,4.21 -4.37,4.44 -1.83,-1.85 -4.84,-0.09 -5.58,2.19 -1.71,0.92 1.62,1.85 -0.97,2.36 -2.09,3.33 4.38,0.08 4.2,3.85 0.13,2.45 -1.7,4.67 -1.9,7.15 -2.34,1.81 1.75,4.57 -1.01,6.63 -1.98,1.62 -0.57,1.93 1.18,2.08 1.5,2.41 4.72,0.24 7.34,1.24 1.58,-2.14 3.57,-4.36 5.67,-1.25 -1.59,1.46 -2.98,1.82 -1.65,4.38 2.67,1.95 3.57,5.11 3.66,7.87 2.89,2.27 5.83,-2.31 8.31,-0.64 1.5,-0.14 1.73,-2.6 3.78,-2.17 1.74,-0.66 1.71,2.87 4.06,1.59 2.32,0.27 4.87,-3.2 5.62,0.33 1.53,0.48 -2.2,5.61 1.71,4.55 1.86,-2.63 5.57,-3.37 7.55,-0.26 1.61,0.15 2.83,4.14 2.8,0.73 3.09,-1.47 0.93,-6.06 5.03,-5.87 2.1,-1.49 4.63,-2.68 4.89,-5.07 -3.18,-2.94 3.24,-2.15 2.07,-5.03 1.39,-0.77 2.75,-1.97 3.62,-3.12 -2.55,-1.45 1.11,-2.89 -0.92,-4.95 -0.82,-1.88 -0.06,-3.23 0.88,-4.14 -1.12,-2.13 -3.92,-5.19 -1.35,-6.5 -1.47,-1.44 -7.7,-0.59 -6.45,-3.12 3.25,-2.31 -3.9,-1.43 -1.21,-3.75 2.08,-0.54 1.75,-2.32 -0.17,-2.44 -0.66,-1.42 -0.44,-4.25 1.4,-4.42 0.7,-1.32 4.27,-4.12 0.61,-3.76 -2.11,-1.25 -0.47,-1.95 0.2,-2.77 -1.16,-1.12 -2.39,-0.61 -3.26,-2.06 -1.89,0.78 -2.29,-1.48 -4.2,-1.06 -0.44,-1.95 3.54,-4.4 -0.69,-4.44 -2.48,1.66 -3.1,-3.01 -4.18,-4.31 -2.45,-0.69 -5.34,1.33 -6.92,-0.8 -0.28,1.94 -2.24,3.99 -3.3,1.71 -4.01,-0.32 1.3,-5.83 -3.25,-6.54 -2.23,1.7 -3.48,-1.31 -4.85,-0.28 z",
						"department-16" : "m 252.54,327.65 c -2.29,0.72 -1.44,3.44 -4.4,2.98 -1.27,1.85 -4.05,0.47 -4.98,-1.39 -0.68,-3.54 -5.06,1.6 -1.79,2.2 -0.58,3.13 -3.4,1.11 -5.1,0.91 -3.14,1.37 -5.19,-1.3 -7.86,-1.81 -1.52,1.5 -2.93,-1.91 -4.66,0.15 -1.97,-0.37 -2.45,3.38 -5.06,2.24 -1.93,0.04 0.82,2.24 -1.2,2.74 0.87,2.68 -3.95,2.15 -2.09,4.68 -0.28,1.91 -3.6,0.31 -2.2,2.53 -0.11,1.44 2.16,2.96 -0.03,4.42 -0.09,1.53 -0.09,4.77 -2.18,3.4 -1.96,2.42 -3.18,-3.47 -5.22,-0.43 -2.04,1.16 -4.38,0.45 -6.15,1.89 -2.73,1.16 0.38,1.62 1.39,1.98 -2.76,2.08 2.9,5.14 -0.46,5.78 -1.46,1.75 0.17,2.05 1.51,1.62 1.01,2.19 5.21,3.29 2.97,5.77 2.34,0.08 4.85,3.05 1.84,4.29 -0.18,1.67 3.8,4.33 0.08,4.95 -3.11,0.84 0.04,2.57 1.34,2.89 -0.62,0.79 -3.1,1.95 -1.06,3.18 2.2,-2.04 4.86,0.36 7.25,0.92 -0.44,1.96 0.03,3.48 2.36,2.77 1.73,0.17 2.65,2.07 3.44,2.83 1.42,-1.43 3.54,-1.84 5.23,-0.38 1.69,-1.46 2.03,-3.29 3.72,-4.47 1.1,-1.12 3.55,-1.27 2.27,-3.69 -1.79,-2.79 1.03,-5.85 1.8,-7.57 0.23,-1.21 1.54,0.42 2.16,-1.12 1.02,-1.12 2.42,-1.8 3.66,-1.6 0.38,-3.16 4.03,-3.24 3.74,-6.43 -0.64,-1.42 -0.09,-4.56 1.85,-3.02 1.5,-1.35 2.27,-4.04 4,-5.85 1.03,-2.13 3.92,-2.7 3.46,-5.45 1.36,-0.67 3.4,1.91 3.05,-0.98 1.5,-1.75 2.07,-3.92 1.46,-6.01 -0.57,-2.93 3.18,0.64 4.34,-1.8 2.69,-1.02 0.69,-6.52 -1.66,-5.43 -1.88,-0.53 -3.24,-3.11 -1.94,-5.21 -0.3,-3.28 -2.38,-2.24 -4.88,-2.46 z",
						"department-86" : "m 220.19,259.01 c -2.67,1.11 -1.14,6.66 -4.7,5.46 -1.12,2.67 -0.28,6.33 2.34,7.3 1.21,2.8 -0.12,6.86 2.81,8.58 -0.34,0.88 -4.74,0.94 -2.01,2.12 1.66,0.91 -1.21,4.66 1.86,5.01 0.17,2.88 -3.53,4.96 -3.39,7.51 2.34,-1.74 2.86,1.09 4.01,2.56 -2.36,1.41 -1.42,4.19 -3.11,6.09 1.11,2.79 0.46,6.03 2.68,8.32 -0.98,2.26 1.88,5.6 3.64,2.56 3.26,-2.86 4.22,4.09 1.42,5.44 -1.17,2.3 -1.1,6.6 2.78,6.31 1.76,0.42 -1.54,4.9 1.9,4.82 2.58,2.29 6.42,0.33 9.24,2 3.12,-1.13 -1.64,-3.61 1.54,-4.88 2.93,-0.45 3.66,4.64 7.15,2.55 2.65,-1.24 4.01,-4.64 7.5,-3.07 5.18,0.43 -2.68,-6.17 1.99,-6.32 0.93,-3.5 4.73,-3.96 7.28,-4.09 1.27,-2.3 2.21,-5.88 5.59,-4.54 3.05,-1.23 4.82,-4.66 1.43,-6.65 -0.96,-2.09 -0.63,-5.43 -4.09,-4.96 -2.4,-0.38 -3.1,-2.52 -5.49,-3.06 -4.32,-2.56 0.87,-7.41 -2.39,-10.17 -3.73,-2.36 -3.49,-7.19 -7.25,-9.59 -1.82,-2.65 -1.18,-7.21 -5.41,-7.83 -3.82,-1.6 1.37,4.35 -2.65,2.83 -3.22,-0.17 -6.05,2.2 -9.36,1.21 -5,0.41 0.09,-6.41 -3.44,-7.54 -1.02,-1.75 -5.86,1.14 -3.94,-2.42 -1.49,-2.05 -5.43,-1.78 -6.57,-4.86 -0.36,-0.36 -0.83,-0.61 -1.33,-0.67 z",
						"department-37" : "m 248.48,223.77 c -1.42,3.62 -6.45,2.73 -8.2,5.37 -1.46,1.36 -3.9,-2.72 -3.72,0.4 1.37,1.11 1.66,4.33 -0.82,2.81 -1.82,-1.23 -6.06,-3.74 -5.96,0.05 -1.81,2.38 0.79,4.4 -1.19,6.79 -1.59,2.5 -0.38,5.84 -2.27,7.78 -1.62,2.49 -3.61,4.89 -3.44,8.06 -0.62,2.26 -1.45,6.53 1.54,7.19 1.25,-0.87 1.94,2.54 3.31,0.71 0.97,1.11 -0.63,5.21 2.13,3.2 1.8,-1.1 1.89,1.61 3.57,1.4 0.89,2.11 -1.82,7.48 2.05,6.94 1.94,-0.66 4.56,0.68 6.7,-0.98 1.61,-0.96 6.42,0.73 3.58,-2.33 -0.63,-2.85 4.7,0.45 5.56,1.73 0.59,2.71 0.86,5.99 3.94,7.28 1.95,1.88 1.63,7.78 6,6.31 1.43,1.23 2.54,1.03 3.52,-0.09 1.84,-0.7 -1.13,-3.48 0.89,-4.6 0.94,-2.88 0.5,-6.24 2.1,-8.75 -0.51,-3.01 1.88,-5.04 4.77,-5.05 2.3,-0.22 4.18,2.32 5.36,-0.8 1.09,-2.04 2.29,-3.59 3.83,-4.89 -0.17,-3.29 -2.68,-5.86 -4.09,-8.7 -1.3,-3.91 -5.06,-1e-4 -7.13,-2.72 -1.96,-2.54 1.63,-6.07 -1.07,-8.64 1.91,-0.4 1.97,-2.18 -0.13,-2.78 -0.17,-1.99 -3.11,-4.5 -0.71,-6.14 -0.62,-1.2 -2.55,-4.44 -3.27,-1.51 -0.57,-2.17 -2.63,-4.19 -4.63,-1.88 -3.07,2.82 -2.07,-3.8 -2.27,-4.29 -2.95,-0.2 -5.98,-1.05 -8.71,-0.82 -1.21,0.63 -0.51,-1.11 -1.23,-1.05 z",
						"department-72" : "m 231.9,172.51 c -2.61,0.34 -4.43,1.91 -6.19,3.04 -1.38,0.48 -2.05,1.94 -3.42,2.6 -0.33,3.05 -3.2,-1.34 -4.33,0.83 -1.43,1.08 -5.63,0.06 -4.24,2.95 -3.08,-0.79 0.86,3.38 -1.37,4.58 -0.86,1.81 1.85,4.28 -0.94,5.2 -2.01,1.1 -4.73,3.07 -1.86,4.9 -0.99,1.29 0.02,2.59 -0.74,3.79 -2.44,-0.68 -6.78,1.67 -3.4,3.85 0.73,2.09 1.76,4.48 -1.53,4.5 -2.58,-0.44 -3.89,2.42 -1.36,3.52 0.5,2.29 -5.19,2.01 -2.45,4.82 3.47,-0.45 1.48,4.86 3.4,5.98 2.31,-1.32 4.91,2 6.78,-0.52 3.29,0.6 -2.46,2.42 0.25,4.06 0.74,1.66 3.87,2.49 4.49,0.08 2.3,1.12 4.71,0.48 6.02,2.83 1.69,1.36 4.05,0.33 5.35,2.19 1.62,-0.93 1.69,-2.65 3.94,-1.78 2.54,-0.05 4.67,2.82 7.14,2.4 0.9,-1.5 -2.93,-3.52 -0.02,-4.31 1.04,1.34 2.82,2.12 3.33,-0.2 2.31,-0.39 4.79,-1.35 6.51,-2.6 -2.85,-2.23 1.58,-5.3 3.79,-5.52 0.46,-1.4 2.4,-3.52 3.78,-4.83 -1.44,-1.85 -0.29,-6.03 1.78,-3.82 -1.09,-2.59 3.21,-2.96 0.58,-5.37 0.08,-1.7 1.43,-3.61 -1.11,-3.97 -1.64,-2.45 2.4,-1.51 1.74,-3.29 -2.05,-0.4 1.4,-1.62 0.89,-2.96 2.29,0.52 3.2,-1.49 0.55,-1.94 -2.01,-0.09 -3.25,-2.56 -5.32,-1.22 -2.38,-0.82 -2.49,-6.22 -5.36,-4.81 0.79,2.39 -2.74,0.17 -4.1,0.37 -1.11,-1.06 -2.58,-1.99 -2.45,-3.6 -1.86,0.23 -5.36,-0.71 -4.94,-3.08 -0.44,-3.4 0.09,-8.02 -4.58,-8.58 l -0.59,-0.08 2e-5,0 z",
						"department-61" : "m 236.9,140.22 c -1.37,2.93 -4.44,0.95 -5.77,0.51 -0.7,2.09 -2.92,0.83 -4.24,2.34 -1.35,-2.77 -4.38,-0.25 -5.26,1.87 -3.09,0.73 -4.56,4.12 -8.22,4.12 0.6,2.97 -3.23,-1.05 -4.99,-0.78 -2.07,-0.19 -4.42,-1.53 -4.55,1.51 -1.86,-0.97 -4.38,-5.01 -6.99,-1.88 -2.67,0.7 -5.63,2.58 -8.38,0.81 -1.94,-0.21 0.58,2.41 -2,2.73 -2.21,0.79 -4.81,2.48 -5.8,4.18 1.64,0.47 4.03,2.64 4.89,3.81 -2.6,1.08 -0.04,3.17 -0.37,4.16 -0.1,3.46 -3.63,4.61 -4.76,7.47 1.29,1.59 1.78,3.06 3.56,2.81 -0.2,2.49 3.05,0.83 2.04,-0.77 2.19,0.16 3.37,-1.72 3.97,1.42 2.29,-1.26 4.74,-2.16 6.49,-3.76 2.15,-0.24 4.6,-0.72 6.51,1.02 1.07,-1.63 2.35,-2.41 3.95,-1.42 1.83,-1.07 -0.27,-4.47 3.02,-3.12 1.81,1.18 3.45,2.14 1.99,3.87 0.35,2.25 1.92,4.62 4.47,2.94 1.72,0.65 -0.84,6.99 2.46,4.03 1.16,0.36 3.03,2.09 3.43,-0.38 1.63,-0.81 2.66,-2.19 4.04,-2.85 0.28,-1.38 5.31,-3.16 7.52,-1.96 3.9,1.26 2.59,5.53 3.26,8.6 -0.11,2.92 4.56,1.76 5.41,3.53 -0.07,1.99 3.35,3.78 5.67,2.91 3.19,-3.99 3.88,7.21 7.66,3.4 3.17,-1.53 -1.64,-4 -0.17,-6.33 -3.57,-0.8 0.8,-4.69 3.13,-4.08 2.2,-1.01 6.03,-4.76 3.83,-6.66 -0.95,-2.15 2.33,-4.5 -0.88,-5.72 0.72,-2.4 -4.26,-1.56 -3.98,-4.43 -1.88,-0.39 0.25,-5.19 -3.06,-4.1 -0.43,-1.15 -0.37,-2.32 -1.89,-2.36 3.89,-2.53 -0.45,-5.72 -3.19,-6.87 -1.23,-0.78 -2.92,-1.32 -1.88,-2.86 -1.36,-1.19 -1.22,-3.67 -3.26,-1.5 -2.58,-0.67 -7.27,0.22 -7.13,-3.52 0.64,-0.73 0.75,-2.65 -0.53,-2.7 z",
						"department-27" : "m 242.33,106.21 c -2.25,1.4 -4.46,3.12 -7.27,3.2 -3.13,0.01 -1.44,3.96 -0.97,5.79 -0.25,1.42 -0.2,3.07 0.05,4.32 1.56,-2.67 4.74,1.16 1.61,1.68 -3.49,1.51 3.09,2.25 1.65,4.56 -0.6,1.84 0.47,2.5 1.82,3.11 -1.56,1.19 -0.91,2.9 -0.68,4.31 -3.08,-0.3 -1.43,3.4 0.78,3.14 1.11,2.25 -1.15,5.22 -2.03,7.57 1.97,1.86 5.79,2.95 8.17,1.67 1.68,-0.94 2.06,2.46 2.78,2.55 -1.38,3.04 5.18,3.21 5.92,5.84 1.68,1.55 -0.55,2.63 -0.78,3.74 1.84,0.46 1,3.47 3.6,1.89 2.3,-0.06 2.09,-4.03 4.58,-2.4 2.21,-1.11 4.77,-0.84 6.52,-3.04 1.78,1 3.18,0.1 2.69,-1.95 1.73,0.3 3.34,2.1 5.52,1.18 1.73,0.91 5.58,0.54 5.97,-1.71 -2.26,-3.14 2.59,-4.24 4.24,-5.72 -0.13,-1.58 -1.51,-4.22 1.43,-3.88 0.74,-0.67 -0.33,-1.93 0.53,-2.57 -1.47,0.74 -2.69,-0.27 -1.44,-1.58 -1.04,-1.31 -2.12,-4.8 0.61,-3.44 1.11,-1.2 0.8,-1.98 2.49,-1.09 3.37,-0.07 4.6,-2.86 5.45,-5.81 0.13,-2.58 1.39,-4.89 2.52,-6.95 1.56,-1.59 3.56,2.74 3.6,-0.58 -1.93,-1.54 -0.62,-5.1 -2.69,-7.09 -0.94,-2.78 -3.12,-0.33 -5.23,-1.99 -1.74,0.33 -2.23,-3.11 -4.08,-1.45 -2.23,-1.34 -5.13,-1.37 -7.71,-1.23 -0.89,1.39 -2.82,1.34 -2.49,3.35 -1.48,1.47 -1.23,4.8 -4.4,3.5 -1.42,0.9 -3.69,0.83 -4.18,2.58 -2.63,-0.42 -3.44,1.09 -2.81,3.24 -1.76,0.32 -3.16,0.76 -4.2,-0.95 -1.28,0.44 -0.68,-4.41 -2.73,-1.94 -0.92,0.95 -1.47,-2.05 -3.03,-1.54 0.47,-2.75 5.09,0.66 3.34,-3.08 -0.36,-1.37 -2.02,1.31 -1.95,-1 -2.7,-0.13 -3.88,-2.85 -6.72,-1.29 -2.27,1 -3.56,-0.22 -5.16,-1.45 -2.66,0.51 -3.03,-3.16 -5.33,-3.52 z",
						"department-14" : "m 231.23,109.9 c -4.06,0.09 -6.85,2.84 -9.55,5.38 -3.34,2.06 -7.05,3.56 -10.99,3.85 -1.95,1.92 -3.54,-1.01 -5.94,-1.28 -2.67,-1.83 -5.65,-1.96 -8.71,-2.47 -2.52,-0.48 -5.06,0.57 -7.64,-0.13 -3.42,-0.41 -7.08,-0.38 -10.19,-1.98 -1.94,-1.82 -4.91,-0.74 -7.32,-0.9 -3.6,0.27 -1.56,4.12 -3.38,5.89 0.35,2.42 2.43,4.3 4.66,5.41 1.29,2.26 4.25,1.82 4.95,-0.81 0.89,1.47 2.18,1.84 0.71,3.15 -2.85,2.72 2.74,3.63 1.8,6.79 0.25,1.58 -1.34,2.53 0.39,3.45 -2.56,1.47 -4.13,6.64 -7.82,4.57 -1.7,0.05 -2.56,3.86 0.25,2.27 1.68,0.8 -1.5,3.01 -2.33,3.69 -1.18,-0.64 -2.61,2.05 -3.44,2.77 1.51,0.52 3.07,1.11 2.99,2.92 1.94,0.53 4.35,0.57 6.32,-0.18 1.55,1.73 4.66,1.77 5.78,1.31 0.33,1.85 2.06,-2.55 3.65,-1.79 1.67,-0.4 2.88,-1.72 1.91,-3.16 2.07,-1.17 2.99,1.93 4.94,0.32 1.69,0.63 2.6,-1.47 4.44,-1.14 2.02,-2.53 4.71,-0.49 6.27,0.75 0.09,2.25 1.52,-0.03 1.58,-1.02 2.72,0.42 5.75,0.47 7.89,2.34 0.72,-2.21 4.15,-0.58 5.38,-3.06 1.98,-1.59 4.45,-2.16 5.53,-4.57 1.56,-0.47 2.62,-1.63 3.42,0.6 1.16,-0.33 2.13,-1.63 3.58,-1.13 0.5,-2.08 1.78,-0.88 2.61,-0.44 1.61,0.55 3,0.24 4,-1.29 0.95,1.22 2.59,1.22 2.01,-0.7 1.28,-2.16 0.25,-3.37 -2.04,-3.81 -1.78,-1.67 1.38,-2.37 1.39,-3.02 -1.93,-1.58 2.62,-4.1 -0.98,-4.39 -0.16,-2.06 0.6,-4.48 -2.13,-4.95 -3.24,-2.19 4.22,-2.19 0.79,-4.43 -0.9,-0.04 -3.11,2.04 -1.98,-0.25 -0.33,-1.14 -1.2,-1.29 -0.01,-2.61 -1.49,-1.67 0.64,-7.09 -2.8,-5.97 z",
						"department-76" : "m 285.08,67.51 c -1.66,1.28 -3.92,-0.27 -5.32,2.21 -2.55,2.82 -5.75,4.75 -9.23,6.16 -2.69,2.07 -6.27,0.91 -9.1,2.49 -3.04,0.83 -5.97,2.2 -9.16,2.2 -4.64,-0.08 -8.38,2.85 -12.2,5.03 -3.19,1.24 -5.65,3.53 -8.97,4.44 -4.45,0.63 -4.32,5.58 -6.08,8.7 -1.33,2.41 -3.69,6.09 0.02,7.66 2.71,1.09 5.28,1.25 8.39,1.98 3.84,1.23 7.92,-4.2 10.87,-0.97 1.02,1.67 2.99,3.04 4.68,1.44 -0.81,3.45 3.88,2.23 5.92,1.74 1.25,0.7 1.48,-1.8 1.82,0.62 0.74,1.56 3.24,0.12 3.81,1.84 1.65,-0.96 2.48,4.22 -0.34,2.48 -3.28,0.03 0.21,1.48 0.51,2.68 2.73,-3.35 2.83,4.25 5.77,2.84 2.8,-0.27 -0.27,-3.85 3.3,-3.41 1.82,-0.28 2.83,-2.57 4.57,-2.23 0.36,-1.37 4.68,0.8 4.04,-2.57 1.27,-2.05 1.52,-4.08 4.3,-5.05 2.08,0.14 5.31,0.85 7.56,1.4 2.14,-0.45 3.59,3.15 6.18,2.19 2.06,0.69 2.28,-3.97 4.3,-4.86 1.52,-1.49 -0.75,-3.01 -1.45,-0.94 -2.42,-0.89 0.93,-2.53 -0.81,-3.95 0.3,-1.61 -2.27,-1.27 -1.03,-2.58 -0.73,-1.35 1.8,-2.21 -0.04,-3.48 1.02,-1.01 3.32,-5.11 0.67,-2.57 -2.48,-0.31 0.5,-3.34 1.11,-4.23 -0.07,-1.57 3.34,-0.34 1.01,-2.16 -2.4,-2.69 -1.34,-6.85 -4.28,-9.1 -3.65,-1.5 -5.37,-5.07 -8.6,-7.13 -2.03,-0.46 -0.42,-2.8 -2.2,-2.85 z",
						"department-60" : "m 299.82,88.06 c -0.68,1.53 -2.52,3 -2.62,4.61 0.88,0.83 2.72,-2.26 2.36,0.47 -2.03,0.88 -1.5,2.81 -1.5,4.35 -1.65,1.28 0.75,1.64 0.2,3.03 0.54,1.64 1.83,2.54 0.02,4.14 0.78,1.65 2.88,-1.94 3.18,0.81 -0.81,1.88 -3.2,3.3 -3.32,5.72 1.83,-0.19 -0.44,1.38 1.38,2.1 1.48,2.13 0.75,4.92 2.41,6.82 0.2,2.27 -1.63,1.56 -2.48,0.39 -2.21,-0.34 -2.49,2.24 -0.48,2.81 -0.83,1.16 -0.47,2.78 1.13,3 2.38,-0.91 4.68,1.32 7.04,0.62 2.19,-0.63 4.26,-0.42 6.14,-1.88 1.82,-1.52 2.59,1.29 4.7,0.92 0.24,2.48 3.26,-1.11 3.69,1.4 -0.75,1.55 3.2,0.09 3.21,-1.39 1.69,-0.21 1.93,2.59 3.71,1.86 2.57,0.22 4.8,1.97 6.25,3.43 0.62,-1.34 1.71,-1.33 1.95,0.34 1.46,2.81 2.94,-2.02 4.79,0.35 1.09,0.96 1.32,2.68 2.73,1.05 0.38,2.06 2.62,0.41 2.41,-0.61 2.06,-2.04 3.56,2.74 5.7,0.23 1.37,0.79 3.07,-1.58 3.55,0.59 0.9,-2.08 4.02,0.32 3.84,-2.61 0.97,-1.2 1.9,-2.09 3.15,-2.84 -1.43,-0.2 -1,-3.93 -2.02,-1.23 0.12,2.36 -0.59,-0.15 -0.51,-1.14 -0.98,-0.34 -1.96,-0.8 -2.82,-1.45 1.46,-1.59 0.58,-5.08 -1.78,-5.51 -1.64,-1.93 1.32,-3.14 3,-2.37 2.78,-1.33 1.45,-5.56 2.96,-6.93 1.83,1.02 3.46,-1.08 0.88,-1.43 -2.12,-0.58 0.91,-1.96 -1.18,-3 -0.31,-1.21 1.9,-1.71 1.13,-3.46 1.11,-2.28 -2.26,-3.66 -0.83,-5.46 -1.28,-1.35 1.28,-1.82 0.48,-3.31 0.33,-2.37 -2.35,1.17 -1.98,-1.22 -1.06,0.07 -2.21,3.33 -3.26,0.83 -1.15,-1.16 -2.97,0.6 -2.46,1.87 -0.95,-1.04 -2.28,-2.96 -3.61,-2.19 0.98,1.2 1.14,2.51 -0.39,1.26 -0.14,2.4 -4.2,0.61 -3.1,3.55 -0.54,2.6 -5.29,-1.86 -5.5,1.9 0.32,2.24 -2.85,2.23 -2.21,0.03 -1.14,-1.83 -2.74,1.59 -3.58,-0.97 -1.21,-1.4 -2.44,-1.07 -3.66,-0.6 -0.85,-3.25 -4.16,-1.53 -6.1,-3.1 -0.93,-1.42 -3.34,-0.98 -4.87,-2.04 -2.87,-0.39 -5.38,1.28 -8.22,0.91 -0.21,-2.15 -3.87,-1.59 -4.92,-1.24 -1.09,-1.54 -2.79,1.74 -4.47,0.11 -1.06,-0.76 -1.06,-1.17 -0.69,-2.16 -0.99,-0.72 -2.08,-1.47 -3.42,-1.36 z",
						"department-80" : "m 292.25,47.76 c -3.3,0.48 -3.7,7.09 -0.18,7.88 1.08,1.67 4.2,2.74 3.06,4.24 -2.73,-1.29 -6.63,-3.63 -7.9,0.8 -0.08,3.06 -3.29,5.38 -4.22,7.27 1.37,-0.11 3.64,-1.46 3.18,1.37 3.11,1.87 5.05,5.06 7.98,7.06 3.9,1.29 3.89,5.38 5.12,8.61 0.56,2.66 4.89,3.47 4.09,5.66 1.46,2.82 4.15,-0.88 5.54,0.73 2.25,-2 4.72,2.18 7.27,1.01 2.7,-0.93 5.98,-1.02 8.68,0.5 1.84,-0.03 3.1,2.73 5.49,1.65 1.93,0.79 2.11,3.17 3.94,1.57 2.03,0.38 2.41,3.33 4.24,1.67 1.8,-0.87 1.46,4.54 3.03,1.36 0.02,-3.92 4.11,-1.35 5.69,-2.17 -0.71,-2.24 0.89,-2.61 2.47,-2.96 0.23,-1.49 2.58,-0.96 0.98,-2.41 1.05,-1.53 0.91,1.46 2.09,-0.25 0.9,2.74 1.49,1.35 3.01,0.23 1.35,0.58 3.49,2.16 3.45,-0.59 1.21,0.66 3.53,0.99 2.21,-1.27 0.39,-2.05 -3.23,-2.65 -0.99,-4.12 0.13,-1.56 -2.17,-2.32 -0.06,-3.42 -0.06,-1.95 2.47,-2.66 2.02,-5.11 0.89,-1.27 2.86,-3.19 2.9,-4.11 -2.64,0.29 0.37,-2.52 -2.05,-2.42 -2.22,-1.41 -5.14,-3.16 -7.9,-1.23 -1.34,-2.15 -4.91,2.97 -5.09,0.51 1.42,-1.44 -0.8,-3.49 -2.15,-1.79 -0.94,1.46 -4.33,1.85 -2.41,-0.4 3.11,-2.33 -2.99,-5.63 -2.46,-2.07 1.41,1.98 -2.63,-0.12 -3.46,-0.4 -1.61,-0.21 -3.12,-0.74 -2.69,-2.12 -1.34,-0.69 -1.48,3.04 -2.43,0.22 -3.21,-2.44 -3.38,5.35 -5.85,1.64 -1.72,-1.93 1.49,-5.21 3.99,-5.44 1.33,-2.2 -4.48,-3.79 -5.35,-1.18 -0.74,-1.34 -1.37,-2.06 -1.64,-0.43 -2.88,-0.65 -5.6,0.07 -8.2,1.37 -1.11,-1.55 -3.47,0.2 -3.68,-2.58 1.41,-3.13 -8.2,-2.22 -4.92,-5.34 -0.16,-2.3 -3.14,1.95 -4.11,-1.07 -2.18,-2.39 -5.42,-2.15 -7.98,-0.54 -2.27,1.67 -2.44,-2.55 -4.75,-1.91 z",
						"department-95" : "m 297.89,122.77 c -1.93,0.92 -1.82,3.28 -2.24,5.06 -0.18,1.39 -0.88,2.57 -1.71,3.66 -1.18,2.5 3.25,0.35 3.28,2.76 0.67,1.03 2.44,0.71 2.86,-0.15 1.62,0.83 1.89,-1.96 3.5,-0.67 1.15,0.5 1.54,1.3 0.91,2.4 0.05,1.46 1.28,0.91 1.47,-0.15 1.23,-1.85 1.56,1.36 3.2,0.93 1.81,-0.33 2.63,2.19 4.51,1.19 1,-0.65 2.03,-0.32 2.94,-0.74 0.27,0.84 -0.01,2.32 1.49,2.09 1.39,0.41 0.73,2.42 2.34,2.4 -0.26,0.82 -0.29,3.2 0.91,1.57 0.86,-1.05 2.61,-1.25 3.07,-2.57 1.17,0.19 2.33,0.34 3.34,-0.64 1.5,0.48 3.52,2.04 5,0.44 1.28,-0.6 2.07,-1.91 3.13,-2.67 -1.04,-1.28 1.15,-1.17 1.41,-2.36 0.47,-0.74 -0.21,-1.51 0.41,-2.34 -0.57,-0.87 -1.19,-1.72 -1.74,-2.51 -0.76,0.04 -0.35,1.66 -1.56,0.99 -1.63,0.01 0.09,-1.59 -1.48,-1.79 -0.96,-0.62 -1.98,-0.38 -2.67,-1.33 -1.15,-0.06 -2.21,-0.73 -3.09,-0.09 -0.52,-1.59 -2.64,-3.14 -3.11,-0.65 -0.81,0.43 -3.97,1.21 -2.53,-0.5 -0.87,-1.58 -3.19,1.28 -3.56,-1.01 -1.15,-0.35 -2.65,-0.19 -3.11,-1.46 -1.37,0.13 -2.53,1.17 -3.72,1.84 -1.32,-0.26 -2.69,0.49 -4.1,0.64 -1.33,0.67 -2.12,-0.84 -3.46,0.08 -0.96,-1.47 -2.91,-0.73 -4.2,-0.81 -0.5,-0.95 -2.12,-1.82 -0.57,-2.52 0.13,-0.53 -0.36,-1.09 -0.9,-1.1 z",
						"department-78" : "m 292.32,132.84 c -1.68,0.81 -3.67,0.76 -5.14,1.83 -1.97,-1.3 -0.99,2.02 -0.1,2.67 0.55,0.79 -1.34,2.61 0.69,2.07 1.64,-0.39 0.59,0.65 0.37,1.44 0.56,0.92 0.3,2.44 1.88,2.64 -0.09,1.26 1.67,1.89 0.48,3.08 1.64,0.66 2.24,2.6 1.48,4.19 -1.03,2.01 0.99,3.08 1.85,4.34 -0.58,1.19 -2.9,3.12 -0.68,3.75 -0.47,1.26 0.09,2.42 1.54,2.47 0.18,1.99 1.68,2.21 3.27,2.53 -0.41,1.11 -0.51,2.96 1.4,2.43 1.42,0.39 2.18,2 1.59,3.43 0.23,1.67 0.57,3.89 2.53,3.87 0.36,1.68 3.78,2.12 3.77,0.29 -0.23,-1.35 1.17,-2.66 1.54,-4.05 1.67,-0.97 -2.33,-2.06 -0.18,-2.66 1.44,0.17 3.44,0.88 3.57,-1.25 0.08,-1.12 0.7,-1.71 1.35,-2.36 -0.8,-1.15 -2.97,-2.42 -1.13,-3.55 0.61,-1.71 3.54,-1.04 3.46,-3.33 -0.81,-1.48 0.7,-1.23 1.5,-1.61 0.73,-1.13 2.67,-0.43 2.55,-1.99 1.23,0.53 1.88,-0.53 0.53,-1.07 -0.97,-1.07 -3.27,-1.54 -2.66,-3.59 -0.02,-1.82 0.75,-3.53 2.25,-4.55 0.27,-1.43 0.56,-2.46 -1.03,-2.77 0.42,-2.23 -2.99,-1.71 -2.63,-3.73 -1.61,-0.09 -3.2,1.35 -4.8,0.6 -1.14,-1.79 -3.8,-0.64 -4.79,-2.64 -0.79,0.03 -1.9,3.2 -2.31,1.04 -0.6,-0.85 0.89,-2.23 -0.76,-2.51 -1.37,-1.91 -2.01,1.2 -3.59,0.52 -1.03,1.41 -3.22,0.49 -3.58,-1.01 -1.62,-1.22 -2.88,0.79 -4.21,-0.53 z",
						"department-28" : "m 287.11,142.32 c -2.1,1.04 1.22,5.31 -2.55,5.04 -3.13,0.47 -2.25,4.05 -2.79,5.7 -2.08,1.39 -4.66,0.71 -6.89,0.79 -1.67,0.17 -4.55,-2.91 -4.14,0.39 -0.94,1.3 -4.08,-0.75 -3.86,1.85 -2.43,0.08 -5.51,1.27 -7.37,1.58 -1.08,1.71 -3.78,2.6 -2.33,4.99 0.77,3.5 4.78,4.24 6.38,7.09 -0.22,2.23 -1.98,4.13 0.4,5.86 -1.32,2.12 -2.68,4.96 -5.61,5.63 -2.31,-0.78 -5.36,3.02 -2.13,3.95 -1.7,2.27 2.62,5.08 0.17,6.87 0.96,1.32 5.87,1.56 4.27,3.23 -2.59,-0.41 -2.61,3.43 0.12,2 1.93,-0.18 2.86,0.02 4.27,-1.38 2.46,-1.17 2.35,1.12 0.44,1.89 0.94,1.94 5.72,-0.14 5.24,3.16 2.38,1.44 2.98,5.53 5.88,5 2.46,1.01 5.04,1.84 7.07,-0.1 2.12,0.96 1.21,-4.35 3.42,-1.33 2.91,1.91 0.9,-4.73 4.83,-2.76 1.99,-0.3 2.54,-3.35 5.19,-2.24 2.89,0.64 5.49,-1.07 8.22,-1.66 2.33,-1.48 0.35,-5.82 3.98,-5.14 -0.56,-1.06 0.03,-1.81 0.2,-2.18 -1.12,-2.33 1.98,-4.62 -0.13,-6.47 1.22,-2.57 0.51,-6.45 -1.46,-7.17 0.98,-3.67 -3.12,-0.53 -4.61,-2.82 -3.57,-1.35 -1.08,-6.34 -4.19,-7.79 -2.86,0.53 -0.05,-3.49 -3.13,-2.7 -2.21,-2.24 -5.44,-5.53 -2.5,-8.36 -1.41,-1.65 -2.75,-3.31 -1.37,-5.55 -0.35,-2.12 -1.91,-3.29 -1.97,-5.44 -0.63,-1.06 -1.8,-1.83 -3.04,-1.94 z",
						"department-75" : "m 326.98,144.71 c -1.27,-0.06 -2.46,0.68 -3.27,1.54 -0.47,-0.15 -0.85,0.06 -1.23,0.25 -0.65,0.03 -1.66,1.18 -0.69,1.52 0.81,0.18 0.93,1.2 1.8,1.35 1.65,0.28 3.42,1.43 5.03,0.39 1.03,-0.88 2.21,0.62 3.32,0.28 0.54,-0.43 0.6,-1.27 -0.33,-1.23 -0.68,-0.16 -1.14,-0.33 -1.46,-0.06 -0.34,-1.13 -0.06,-2.23 -0.93,-3.14 -0.12,-1.14 -1.17,-0.96 -2.05,-0.92 l -0.18,0 -0.03,3e-4 z",
						"department-93" : "m 336.5,137.58 c -0.46,0.33 -1.14,0.34 -1.42,0.97 -0.75,1.19 -2.15,1.71 -3.14,2.62 -0.82,-0.03 -1.72,-0.07 -2.53,-0.25 -0.64,-0.37 -1.29,-1.34 -2.07,-0.64 -0.6,0.3 -1.08,1.1 -1.81,0.59 -0.35,-0.19 -1.46,-0.42 -1.19,0.3 0.56,0.53 2.05,0.32 2.05,1.33 -0.06,0.69 -1.13,1.34 -0.68,2.02 1.05,0.43 2.37,-0.21 3.33,0.37 0.27,0.54 0.5,1.08 0.89,1.55 0.18,0.57 -0.13,1.72 0.86,1.53 1.07,-0.15 2.16,-1.04 3.23,-0.34 1.04,0.72 2.32,1.35 3.05,2.37 -0.11,0.74 1.41,0.94 1.04,0.05 -0.24,-0.71 -0.92,-1.55 -0.78,-2.26 0.67,-0.23 -0.04,-0.79 -0.4,-0.86 0.27,-0.43 -0.26,-0.81 -0.29,-1.14 0.41,-0.57 1.31,-0.71 1.23,-1.58 -0.09,-0.8 0.8,-1.4 0.35,-2.19 -0.23,-0.84 -1.06,-1.46 -1.25,-2.26 0.77,-0.61 0.45,-1.99 -0.49,-2.17 z",
						"department-94" : "m 332.85,147.49 c -0.56,0.21 -2.03,0.43 -2.18,1.01 0.31,0.21 1.82,-0.09 1.77,0.51 0.02,0.58 -0.23,1.64 -1.05,1.16 -1.03,-0.16 -2.09,-1.01 -3.03,-0.14 -0.7,0.5 -1.59,0.2 -2.33,0.5 -0.4,1.12 0.01,2.46 -0.66,3.53 -0.23,0.79 0.87,0.44 1.11,0.99 0.42,0.39 0.99,0.13 1.33,-0.1 0.46,0.44 -0.1,1.74 0.84,1.68 0.59,-0.25 1.17,-0.38 1.79,-0.16 1.34,-0.05 2.64,-0.54 3.94,-0.71 0.51,0.63 0.39,1.61 1.15,2.11 0.31,0.19 0.6,0.29 0.75,0.66 0.59,0.31 1.26,-0.47 0.77,-0.99 -0.01,-0.93 1.56,-1.44 0.88,-2.44 0.49,-0.32 0.24,-1.11 0.85,-1.28 0.43,-0.58 -0.47,-0.6 -0.83,-0.71 -0.34,-0.52 0.66,-1.17 0.14,-1.69 0.12,-0.8 -1.11,-0.7 -1.2,-1.46 -1.03,-1.05 -2.25,-2.13 -3.71,-2.49 -0.1,-0.01 -0.2,-0.01 -0.31,0 z",
						"department-92" : "m 324.24,141.53 c -2,0.52 -3.26,2.41 -5.06,3.32 -1.07,0.77 -1.1,2.2 -0.99,3.39 -0.4,0.4 -0.48,0.98 -0.25,1.53 0.01,0.71 0.73,0.52 1.15,0.65 0.16,0.65 0.67,1.01 1.28,1.14 0.25,0.33 0.49,0.67 0.86,0.85 0.32,0.72 0.72,1.57 1.66,1.53 0.78,-0.01 1.11,0.83 1.08,1.46 0.36,0.27 0.92,-0.2 1.18,0.31 0.73,-0.09 0.08,-1 0.1,-1.43 0.14,-0.72 0.7,-1.47 0.38,-2.22 -0.12,-0.62 0.28,-1.24 0.24,-1.78 -0.96,-0.79 -2.46,-0.33 -3.22,-1.42 -0.37,-0.47 -1.1,-0.68 -1.44,-1.08 0.22,-1.13 1.41,-1.83 2.5,-1.7 0.39,-0.7 1.58,-0.82 1.76,-1.68 -0.35,-0.89 1.37,-1.42 0.54,-2.3 -0.48,-0.39 -1.16,-0.56 -1.77,-0.58 z",
						"department-91" : "m 320.25,153.32 c -0.58,0.51 -0.49,1.56 -1.65,1.15 -1.09,0.27 -1.38,1.31 -2.58,1.12 0.11,1.05 -0.02,2.93 -1.5,3.32 -1.61,-0.22 -1.97,1.45 -2.84,2.24 0.58,0.86 2.2,1.77 1.79,2.96 -1.64,0.36 -0.55,3.52 -2.55,3.44 -0.79,0.15 -3.39,-0.81 -2.43,0.71 1.02,0.53 2.16,1.11 0.51,1.61 -0.86,0.93 -0.75,2.41 -1.65,3.25 0.14,1.24 1.76,2.59 0.46,3.92 0.71,0.75 2.78,0.14 2.06,1.92 1.07,1.28 -0.54,2.43 0.19,3.85 0.08,0.92 -1.54,1.43 -0.06,2.16 1.67,1.02 3.4,-0.35 5.09,-0.44 0.79,-1.48 2.15,0.97 2.97,-0.44 -0.22,-1.14 1.58,-0.26 1.55,-1.49 0.43,-1.63 2.01,-0.33 2.65,0.23 -0.12,0.95 0.48,1.61 1.08,0.67 0.98,0.38 1.68,0 2.09,-1.03 1.19,-0.35 1.89,2.24 3.4,1.07 0.49,-0.63 -0.03,-1.81 1.37,-1.59 1.11,-0.46 0.12,-2.39 1.77,-2.49 0.99,-0.33 0.83,-1.84 2.2,-1.42 0.62,-0.47 2.15,-0.38 0.97,-1.39 -1.69,-0.77 -1.16,-2.85 -1,-4.34 0.63,-1.35 -0.62,-2.47 -0.1,-3.88 0.63,-1.33 0.75,-2.86 1.78,-3.97 -0.3,-0.67 -1.97,-1.85 -0.32,-2.16 1.12,-0.7 -0.81,-1.91 0.75,-2.52 1.46,0.63 1.85,-1.77 0.18,-1 -1.09,-0.51 -1.76,-1.71 -2.13,-2.88 -1.08,-0.05 -2.24,1 -2.98,0.91 -0.9,-0.56 -2.37,0.31 -3.35,-0.26 0.08,-0.81 -0.25,-1.5 -1.11,-1.09 -0.9,-1.03 -1.16,0.24 -1.83,0.61 -0.49,-0.5 -1.91,-0.11 -1.24,-1.2 -0.57,-1.05 -2.44,-1.17 -3.52,-1.52 z",
						"department-45" : "m 320.43,181.91 c -1.93,3.75 -6.85,2.12 -9.9,4.16 -1.95,2.44 0.54,6.83 -3.34,8.04 -0.15,3.54 -2.85,4.96 -6.06,5.24 -2.92,1.1 -6.42,-0.72 -8.49,2.39 -1.57,0.69 -5.05,0.19 -3.17,3.06 1.8,0.69 1.81,1.21 0.63,2.66 -1.69,2.43 4.05,3.22 1.25,6.02 -2.34,2.28 -0.38,4.59 0.09,7.04 1.76,1.74 4.95,-1.17 6.29,2.07 1.03,2.45 2.79,7.52 5.89,3.78 1.72,-3.2 5.45,1.69 8.15,-0.49 3.31,-0.11 8.68,-1.55 10.42,2.55 3,0.8 5.42,3.73 8.74,2.17 2.13,1.16 4.32,2.3 6.96,2.83 1.97,1.01 3.09,6.61 5.84,4.26 -0,-3.62 2.76,-1.68 4.41,-0.43 2.59,0.81 2.19,-2.3 2.2,-3.37 1.94,-0.4 6.46,-0.48 3.87,-3.36 0.34,-3.56 -2.17,-6.48 -4.41,-8.39 0.34,-3.92 6.29,-1.58 7.84,-4.63 1.26,-2.84 -2.35,-5.65 1.12,-7.77 4,-1.7 4.51,-6.41 1.51,-9.33 -2.16,-2.35 -2.73,-6.91 -6.87,-6.87 -1.86,0.13 -5.92,3.75 -6.03,-0.07 -2.63,1.14 -5.36,4.25 -8.22,1.8 -2.17,-0.24 -6.58,1.49 -7.34,0.08 2.67,-1.6 4.53,-6.27 0.45,-7.38 -2.86,-1.04 -1.71,-5.28 -5.43,-4.57 -1.53,-1.38 -4.89,2.52 -5.34,-1.02 -0.33,-0.2 -0.71,-0.32 -1.06,-0.48 z",
						"department-41" : "m 266.29,195.63 c -2.06,2.95 -7.43,0.3 -8.5,3.42 -1.9,1 -2.23,2.67 -0.22,3.62 0.19,3.26 0.26,5.82 -1.16,8.6 -4.07,-1.69 0.07,5.24 -3.5,5.91 -0.99,3.4 -6.81,3.06 -5.94,7 2.53,-0.22 6.07,1.21 9.36,0.87 2.33,-0.38 3.21,0.87 2.33,3.13 -0.6,3 2.08,2.14 3.12,0.52 2.68,-0.46 3,3.47 5.15,1.95 3.31,1.92 -0.52,5.3 2.24,7.5 2.87,2.54 0.27,5.57 1.51,8.9 -2.12,3.16 1.39,5.4 4.47,4.52 3.84,-0.06 2.69,7.22 7.32,5.56 1.87,-1.68 3.74,-3.34 6.46,-2 0.88,-3.66 5.55,-2.27 8.48,-2.51 2.88,0.7 4.8,4.16 8.08,3.56 2.17,-0.93 0.23,-5.2 4,-4.24 2.53,1.03 9.23,0.49 7.7,-3.24 -2.46,-1.98 -1.75,-6.33 1.55,-6.48 1.62,0.43 3.89,1.9 3.49,-1.2 0.4,-2.84 -2.55,-3.04 -1.96,-5.71 -0.66,-1.86 -5.5,-1.35 -2.85,-4.03 2.3,-0.71 6.5,-3.18 2.67,-5.2 -3.4,-0.6 -6.94,-0.37 -10.34,0.3 -2.3,0.89 -5.75,-3.14 -6.32,0.82 -3.73,2.59 -5.33,-2.8 -6.15,-5.3 -2.21,-2.59 -5.58,2.04 -6.3,-1.81 -0.8,-1.62 0.46,-2.55 -1.18,-3.79 1.15,-2.66 3.49,-5.56 -0.29,-7.32 0.2,-1.64 2.39,-4.45 -1.04,-3.94 -1.34,-0.61 -4.15,-1.65 -3.51,1.01 -2.97,0.88 -5.87,1.72 -8.76,0.26 -3.05,-0.48 -3.65,-3.81 -5.67,-5.58 -0.41,-3.18 -5.31,-0.86 -5.28,-3.08 0.5,-0.52 3.23,-1.6 1.02,-2.02 z",
						"department-36" : "m 292.75,252.32 c -0.22,1.96 -4.71,0.36 -3.09,3.11 -2.43,-0.72 -5.02,-1.03 -6.59,1.34 -2.69,0.52 -2.88,2.56 -1.18,4.37 -0.27,2.79 -3.21,4.19 -4.35,6.82 -1.44,3.03 -4.42,-1.33 -6.53,0.46 -3.18,0.46 -2.88,3.92 -3.68,6.03 -1.05,3.06 -0.95,6.5 -2.13,9.41 1.56,2.64 -2,4.95 -4.07,2.91 -3.4,-0.16 1.5,2.15 0.47,4.03 -1.36,3.26 -0.89,7.48 3.29,8.02 1.63,1.02 1.82,2.51 4.05,2.13 3.15,0.49 2.87,3.8 3.42,5.86 3.01,0.61 1.99,2.49 1.57,4.47 1.47,-0.43 1.97,1.71 3.8,0.38 1.85,0.34 2.68,-2.93 4.56,-0.65 1.37,1.89 2.88,2.94 4.14,0.35 1.12,-1.38 3.37,-4.31 4.14,-1.21 1.33,-0.81 3.52,-2.34 3.35,0.47 1.47,0.6 2.78,-3.28 3.75,-0.32 2.88,0.93 1.17,-5.91 4.57,-3.2 2.52,2.22 5.64,-0.66 8.59,0.82 2.5,1.04 7.68,2.32 7.46,-1.55 4.04,-2.02 -1.08,-5.26 0.41,-8.47 1.23,-2.22 0.34,-4.16 -1.32,-5.77 1.29,-2.28 -5.15,-3.19 -2.63,-5.41 3.7,-2.03 -4.12,-5.08 0.13,-6.45 0.15,-1.85 5.09,-3.55 1.3,-4.36 -3.14,-0.2 -1.71,-2.81 -0.75,-4.45 0.55,-3.16 -4.43,-3.11 -2.28,-6.14 0.71,-2.59 -1.84,-0.34 -2.34,-2.38 -2.14,-1.4 -4.51,2.29 -6.97,0.12 -1.89,-0.3 -3.87,-1.35 -1.68,-3.08 2.9,-1.88 1.03,-5.37 -2,-5.37 -1.57,-1.11 -2.26,-2.41 -4.45,-1.38 -1.18,-0.07 -1.7,-1.07 -2.98,-0.88 z",
						"department-18" : "m 323.87,229.07 c -2.35,0.13 -9.34,2.52 -5.77,4.83 3.63,-0.55 1.32,4.29 3.95,4.19 1.09,2.3 -0.24,7.95 -2.97,4.02 -2.53,0.84 -4.38,3.27 -2.23,5.76 1.94,2.35 0.54,4.87 -2.44,4.09 -2,0.97 -4.54,0.79 -6.09,-0.04 -3.26,0.8 0.48,4.8 -3.11,4.5 -2.3,-0.84 -0.78,2.92 -3.07,3.74 -2.13,3.21 4.52,3.78 6.54,2.69 2.19,-2.06 2.95,2.09 4.74,0.99 0.13,1.95 -1.78,4.73 1.47,5.08 2.39,1.98 -3.09,7.46 2.34,7.01 1.98,2.06 -4.63,4.48 -3.1,6.87 3.2,0.9 1.23,3.63 0.29,5.24 0.67,1.68 4.73,1.92 3.03,4.22 4.54,2.34 -0.65,6.57 2.07,9.85 1.42,2.13 -0.12,3.45 -1.35,4.8 0.97,3.01 6.38,2.02 6.61,-1.43 1.68,-1.43 2.79,-4.1 5.74,-3.71 2.61,-0.19 8.61,0.85 7.95,-3.28 -1.28,-1.97 -0.29,-4.02 -0.99,-5.76 1.11,-0.26 2.76,0.38 2.1,-1.66 2.77,0.03 3.8,-5.99 6.55,-2.38 4.02,-0.1 5.48,-4.84 9.43,-5.17 5.09,1.19 4.04,-5.2 3.91,-8.3 0.71,-2.84 1.27,-6.86 -1.24,-8.77 -0.49,-3.87 -0.61,-7.69 -2.18,-11.39 0.6,-4.25 -6.27,-4.24 -4.71,-8.26 2.14,-3.02 2.74,-7.4 -0.15,-10.16 -1.82,-0.35 -3.52,2.23 -5.06,-0.44 -2.66,-2.76 -1.08,3.94 -4.37,2.1 -2.06,-1.93 -3.82,-6.36 -7.51,-5.63 -1.58,-0.2 -3.8,-3.83 -5.86,-1.15 -1.78,-0.24 -2.82,-2.01 -4.51,-2.45 z",
						"department-23" : "m 301.06,306.59 c -2.18,-0.09 -0.48,5.24 -3.46,3.84 -1.17,-2.86 -2.05,0.79 -3.59,0.42 -1.13,-0.79 -0,-3.31 -1.73,-1.25 -1.24,0.55 -2.36,1.38 -2.36,-0.7 -1.54,-0.88 -2.18,2.59 -3.79,3.02 -0.98,0.84 -2.88,2.44 -0.45,2.76 0.29,1.69 -1.79,2.6 -0.56,4.04 -2.11,0.16 0.28,2.07 -1.84,2.35 -1.71,2.37 1.37,3.88 3.12,3.98 -0.87,1.98 3.03,2.32 1.47,4.18 0.81,1.46 2.68,2.16 2.08,4.13 0.59,1.41 -1.07,3.49 1.38,3.72 1.8,2.32 -4.92,2.97 -1.35,4.46 1.26,1.18 3.64,-2.06 4.21,0.35 0.31,1.19 0.8,2.47 -1.06,2.08 -1.31,1.78 2.07,3.75 3.94,3.02 1.79,0.62 3.88,-3.62 3.75,-0.15 0.21,1.27 2.24,2.17 2.82,1.56 1.47,1.11 3.83,3.39 1.98,4.77 0.21,1.09 -0.08,4.28 1.82,2.42 1.13,0.08 1.99,-1.04 3.2,-0.95 0.33,-2.76 3.75,-2.96 4.66,-0.46 1.35,-0.17 2.6,0.94 3.34,-0.03 1.49,1.32 3.49,2.43 4.82,3.44 0.2,2.09 4,0.09 3.38,-1.73 2.36,-0.58 5.37,1.33 6.38,-2.1 -1.37,-1.09 -2.62,-1.96 -3.06,-3.78 -1.55,-1.24 -1.59,-2.93 0.65,-2.9 0.54,-1.38 1.04,-2.45 2.73,-1.85 0.62,-1.79 3.09,-2.23 2.56,-4.51 0.36,-1.75 3.84,-1.53 2.12,-3.52 1.2,-2.89 -2.25,-4.14 -2.04,-6.95 -0.08,-2.21 1.4,-4.81 -1.02,-6.11 0.02,-2.5 -1.86,-3.91 -2.39,-6.08 -1.13,-1.7 -3.1,0.63 -2.89,-2.06 -0.52,-1.65 -1.48,-0.92 -2.17,-0.16 -2.13,-0.72 -3.54,-2.45 -1.59,-4.12 -3.08,0.61 -1.54,-4.21 -4.75,-3.19 -2.85,-0.75 -5.52,1.57 -8.05,0.18 -2.39,-0.94 -4.83,-0.98 -7.12,-1.05 -1.87,0.89 -3.74,0.71 -4.87,-1.08 l -0.28,-0.01 10e-6,10e-5 z",
						"department-87" : "m 281.04,310.22 c -0.51,0.05 -1.17,0.12 -1.14,0.78 -0.25,1 -1.41,1.2 -2.23,0.78 -0.91,-0.55 -1.46,0.97 -2.37,0.47 -0.41,-0.24 -0.15,-1.36 -0.88,-1.06 -0.15,0.36 -0.49,0.69 -0.87,0.31 -0.42,-0.56 -1.48,-0.46 -1.39,0.36 -0.29,0.51 -0.98,0.78 -0.95,1.46 -0.55,0.47 -1.05,-0.38 -1.56,-0.48 -1.22,-0.29 -2.83,0.17 -3.07,1.56 0.1,1.34 -1.16,2.36 -1.14,3.65 -1.12,-0.21 -2.43,-0.58 -3.48,-0.02 -0.57,-0.29 -1.43,-0.46 -1.55,0.41 -0.29,0.71 -1.42,0.57 -1.53,1.41 -0.45,0.32 -0.59,0.81 -0.41,1.28 -0.57,0.79 -2.14,-0.04 -2.35,1.21 -0.11,1.15 1.52,1.66 1.49,2.82 0.45,0.61 -0.22,1.55 0.51,2.07 0.3,0.78 -1.04,0.68 -1.22,1.21 0.1,0.73 1.16,1.32 0.57,2.1 -0.2,0.88 -0.43,1.82 -0.37,2.7 0.55,0.71 1.53,1.06 1.85,1.96 0.6,0.29 0.77,-1.11 1.42,-0.47 0.52,0.57 1.56,1 1.37,1.9 0.17,0.33 0.61,0.45 0.5,0.91 0.25,0.56 0.69,1.22 0.15,1.8 -0.4,0.33 -0.69,0.93 -0.79,1.33 -1.08,0.03 -1.62,1.44 -2.79,1.15 -0.74,0.09 -1.45,-0.83 -2.12,-0.41 -0.07,0.49 0.25,0.98 0.12,1.53 -0.13,0.54 0.63,1.01 0.41,1.49 -0.44,0.28 -0.27,0.69 -0.21,1.04 -0.23,1.22 -1.06,2.19 -1.62,3.25 -0.26,0.54 0.17,1.51 -0.39,1.85 -0.92,-0.16 -1.85,-1.49 -2.8,-0.78 -0.33,0.63 -0.36,1.44 0.03,2.02 -0.07,0.89 -1.28,0.52 -1.72,1.1 -0.39,0.39 -0.56,0.91 -1.06,1.2 -0.36,0.39 -0.09,1.12 -0.8,1.16 -0.53,0.7 0.73,1.29 1.05,1.78 1.12,0.48 2.72,-0.73 3.83,0.16 0.41,0.49 0.74,1.16 1.39,1.34 0.08,1.16 -0.5,2.25 -0.79,3.32 0.28,0.85 0.98,1.77 1.99,1.46 0.49,0.16 0.41,1.27 1.18,1.08 1.27,-0.42 1.02,-2.31 2.06,-2.9 0.55,0.27 0.58,1.69 1.39,1.27 0.5,-0.37 1.3,-0.2 1.85,-0.57 0.8,-0.12 1.59,0.64 2.37,0.08 1.2,-0.25 2.21,0.92 2.02,2.08 -0.09,0.92 0.66,1.5 1.35,1.88 0.41,0.32 0.61,1.42 1.32,0.86 0.49,-0.58 1.3,-0.68 1.86,-0.14 0.33,0.35 1.23,0.52 1.23,1.08 -0.69,0.87 -1.91,1.66 -1.92,2.87 0.34,0.84 1.26,0.35 1.87,0.21 0.56,0.26 0.58,0.97 0.93,1.33 0.84,-0.26 2.33,-0.56 2.49,0.7 0.19,0.63 0.87,0.23 0.77,-0.27 0.67,-0.31 0.04,-1.73 0.98,-1.81 0.57,0.07 0.21,-0.87 0.71,-0.67 0.95,0.21 1.74,1.1 2.68,1.15 0.76,-1.2 1.96,-2.1 2.52,-3.45 0.35,-0.6 1.02,-0.45 1.52,-0.23 0.86,-0.13 0.35,-1.3 0.75,-1.74 0.56,-0.03 0.98,-0.4 1.21,-0.85 0.63,0.05 0.58,1.16 1.29,0.85 0.37,-0.17 0.08,-0.99 0.68,-0.63 0.79,0.46 1.82,0.91 2.6,0.18 0.48,-0.4 0.34,-1.43 1.2,-1.3 1.25,0.1 2.05,-1.03 2.55,-1.98 0.73,-0.73 1.34,-1.82 2.34,-2.13 0.74,0.12 1.5,-0.28 1.86,-0.87 0.93,-0.17 1.13,-1.16 1.48,-1.85 0.37,-0.07 0.64,0.49 1.11,0.2 0.61,0.2 0.96,1.44 1.71,0.76 0.42,-0.5 1.1,0.52 1.33,-0.26 -0.03,-0.66 0.6,-0.53 1.03,-0.64 0.45,-0.2 0.16,-0.77 -0.12,-0.88 -0.02,-0.51 -0.84,-0.68 -0.83,-1.1 0.48,-0.35 0.14,-0.82 -0.21,-1.07 0.24,-0.6 0.41,-1.25 0.01,-1.83 -0.05,-0.55 1.2,0 0.86,-0.75 -0.45,-0.79 -0.3,-1.85 -1.25,-2.36 -0.47,-0.29 -0.97,-0.56 -1.37,-0.86 -0.42,0.28 -0.85,0.21 -1.19,-0.2 -0.57,-0.6 -1.85,-0.61 -1.72,-1.7 0.17,-0.43 0.1,-1.78 -0.62,-1.22 -0.17,0.44 -0.43,0.74 -0.89,0.86 -0.71,0.92 -2.04,0.24 -2.93,0.86 -0.49,0.28 -0.9,0.12 -1.15,-0.31 -0.68,-0.45 -1.84,-0.44 -2.21,-1.23 0.21,-0.61 -0.04,-1.24 -0.49,-1.61 0.25,-0.59 1.1,-0.28 1.36,-0.78 0.47,0.27 0.94,-0.21 0.51,-0.63 -0.6,-0.41 0.17,-1.39 -0.62,-1.58 -0.8,-0.29 -1.69,0.05 -2.03,0.8 -0.73,0.21 -1.51,-0.02 -1.97,-0.63 -0.45,-0.19 -1.31,-0.18 -0.96,-0.92 0.42,-1.4 2.91,-1.11 2.81,-2.77 -0.02,-0.79 -0.76,-1.12 -1.46,-1.02 -0.74,-0.49 -0.23,-1.62 0.01,-2.28 0.07,-0.84 -0.67,-1.62 -0.2,-2.45 -0.01,-0.95 -1.08,-1.21 -1.63,-1.75 -0.29,-0.44 -0.89,-1.12 -0.22,-1.54 0.59,-0.47 -0.22,-1.14 -0.7,-1.29 -0.29,-0.51 -0.96,-0.67 -1.32,-1.01 0.65,-0.4 0.49,-1.69 -0.42,-1.53 -0.93,0.06 -2.05,-0.18 -2.28,-1.2 -0.52,-0.39 -1.08,-1.35 -0.53,-1.94 0.31,-0.58 0.65,-1.21 1.38,-1.2 0.66,-0.47 -0.77,-0.84 -0.18,-1.34 0.43,-0.32 0.7,-0.79 0.48,-1.28 -0.02,-0.63 0.42,-1.1 0.86,-1.45 0.24,-0.83 0.18,-2.06 -0.9,-2.22 -0.7,-0.32 -0.2,-1.35 -0.83,-1.79 -0.85,-0.67 -1.34,-1.98 -2.45,-2.23 l -0.03,0.01 z",
						"department-19" : "m 313.35,352.38 c -1.86,0.13 -2.22,1.42 -2.96,2.7 -1.7,-0.45 -2.02,1.25 -3.41,1.04 0.1,2.65 -3.23,3.39 -4.97,1.84 -1.53,1.04 -2.82,2.64 -4.95,2.95 -1.42,1.63 -2.47,3.68 -4.63,4.05 -0.78,2.4 -3.28,0.32 -4.72,1.32 -0.15,-2.02 -2.14,1.24 -2.3,2.01 -1.89,-1.15 -2.49,2.34 -3.89,3.21 -1.28,0.53 -3.65,-2.27 -4.12,0.75 -1.21,1.38 2.97,2.44 0.01,3.18 -0.68,2.09 4.29,0.8 2.12,3.47 -1.5,0.61 -1.7,2.64 -3.24,3.07 -0.37,1.74 -0.74,3.8 1.62,4.02 0.64,1.56 -3.73,2.47 -1.44,3.5 2.52,-0.79 2.31,2.08 0.75,2.84 2.1,1.86 4.91,0.57 6.95,2.2 -1.97,1.83 -0.08,4.96 1.55,6.77 1.57,0.57 3.76,-3.02 4.88,-0.71 2.49,-1.36 5.15,0.9 6.6,2.82 0.89,1.66 2.62,2.3 3.51,3.98 0.84,-0.76 2.22,0.94 2.83,-0.95 1.95,-0.25 4.19,-4.21 5.12,-0.84 2.18,-2.19 5.35,-1.42 8,-1.89 1.92,-1.72 -3.18,-4.39 -0.13,-5.96 1.44,-0.92 3.38,-0.83 2.82,-3.25 -0.27,-1.27 3.56,-2.56 1.06,-3.66 -2.12,-2.49 1.31,-4.07 2.09,-6.03 1.52,-1.54 3.08,-3.21 4.69,-4.48 0.47,-1.62 0.7,-3.32 -0.12,-4.93 2.48,-0.49 5.95,4.22 7.88,1.25 -2.68,-1.36 -0.86,-4.01 -0.65,-6.27 0.65,-2.61 -0.12,-4.5 -1.81,-6.42 -0.37,-1.09 0.41,-2.79 1.03,-3.68 2.2,0.41 0.72,-2.34 1.39,-3.43 -0.08,-1.62 -1.77,-3.7 -2.72,-1.42 -1.49,2.45 -5.53,-1.84 -5.69,2.21 -1.2,1.04 -3.48,1.86 -3.57,-0.45 -2.4,-0.22 -2.77,-1.54 -4.33,-2.87 -0.57,1 -2.92,0.03 -3.77,-0.11 0.11,-0.94 -1.07,-1.2 -1.5,-1.83 z",
						"department-15" : "m 334.72,370.94 c -1.28,1.82 -1.55,4.58 0.43,5.9 -1.81,2.51 -4.37,0.04 -6.57,-1.17 -2.6,-1.06 0.22,2.76 -1.15,4.1 -0.02,1.86 -2.79,1.83 -3.22,3.86 -1.83,1.13 -3.51,3.59 -4.24,5.64 0.35,1.77 2.71,2.41 0.56,3.82 -1.95,0.87 -0.07,4.99 -2.89,4.16 -3.55,0.88 -0.82,4.03 -0.22,5.71 -0.43,1.88 -4.6,-0.03 -2.81,2.9 -0.04,1.62 2.21,2.57 0.46,3.91 0.13,3.08 4.46,4.57 3.6,7.69 -0.92,1.52 -0.85,3.76 -1.46,5.32 3.14,-0.54 0.43,4.14 3.05,4.94 0.99,0 -0.12,-3.03 2.23,-2.19 1.58,-0.83 4.01,-1.56 4.43,0.74 2.75,-0.34 6.48,0.85 7.12,-2.96 2.85,-1.73 1.71,-5.71 4.3,-7.33 -0.14,-2.33 1,-4.52 2.76,-5.39 0.66,-1.77 2.62,-2.11 3.53,-3.79 2.71,0.19 1.23,4.39 2.14,5.14 1.36,-1.39 4.37,-1.42 3.78,1.12 0.34,1.62 0.97,4.51 2.8,3.48 0.84,2.32 -0.52,5.11 1.01,7.65 0.5,1.69 1.9,2.45 2.17,0.12 0.35,-2.14 2.27,-2.85 1.68,-4.93 0.92,-1.91 0.56,-5.47 2.78,-5.83 -0.12,-1.77 1.65,-6.61 3.22,-3.03 1.26,2.36 3.56,-0.59 3.31,-2.05 0.59,-1.14 0.92,-2.65 1.95,-1.09 1.6,-1 4.29,-1.63 3.3,-3.81 1.88,-0.88 -1.23,-1.49 -1.31,-2.37 -2.47,-0.36 0.7,-4.16 -1.68,-4.86 0.04,-1.43 3.56,1.01 2.84,-0.76 -3.52,-0.25 -3.97,-3.78 -3.79,-6.72 -2.86,-0.25 -0.48,-5.68 -3.84,-4.2 -1,0.06 -0.92,-1.73 -2.53,-0.75 -1.83,0.05 -2.03,-0.79 -0.71,-1.66 -1.98,-0.82 1.54,-2.18 -0.51,-2.67 -1.63,1.16 -2.03,4.92 -4.8,3.76 -3.45,-0.77 -2.59,-5.89 -6.01,-5.8 -1.98,-1.95 -3.93,0.16 -6.22,-0.38 -1.82,0.76 -1.98,-2.81 -2.23,-3.3 -2,0.21 -2.37,-1.95 -4.2,-1.04 -0.86,-1.4 -2.85,0.57 -2.19,-1.65 -0.21,-0.26 -0.61,-0.13 -0.87,-0.22 z",
						"department-30" : "m 402.45,438.56 c -1.2,2.08 -2.01,3.99 -4.41,4.18 -0.91,2.13 4,4.03 1.37,6.32 -0.45,1.86 3.55,2.45 0.94,3.7 -0.76,1.99 0.11,3.59 0.97,5.15 -2.84,-2.29 -3.24,4.22 -6.65,2.09 -2.84,1.31 -5.14,-3.82 -7.86,-2.71 -1.9,-0.09 0.68,4.12 -2.36,3.87 -3.59,-0.21 -7.54,0.01 -9.81,-3.3 -3.88,-0.94 -1.76,4.82 -5.2,4.63 -0.2,1.99 1.7,1.26 2.49,1.37 0.64,2.2 6.26,1.35 5.12,4.79 -0.92,1.9 -5.78,3.67 -3.13,5.83 2.48,-0.75 3.13,1.64 2.84,3.17 1.93,-1.62 4.32,-2.9 4.52,0.69 1.23,0.34 3.7,1.07 1.85,-0.84 1.05,-1.8 2.07,-3.7 4.36,-3.11 -0.01,-3.76 5,-4.67 6.38,-1.85 2.32,1.17 -2.54,5.3 1.82,4.76 1.89,-0.76 3.45,-1.45 3.7,1.02 2.53,0.02 1.7,2.08 1.81,3.51 2.89,-1.55 4.4,2.61 6.33,3.87 2.8,0.69 3.15,4.82 3.78,7.11 -0.67,2.22 -2.4,3.52 -4.18,3.93 1.03,2.15 2.04,4.41 2.86,6.75 1.85,2.05 3.54,0.51 3.74,-1.66 2.08,-0.46 3.52,-1.72 3.36,-3.55 0.97,2.31 4.15,-0.86 5.01,-1.94 1.98,0.27 2.78,-2.49 0.23,-2.01 -0.41,-2.17 1.81,-4.53 3.24,-5.76 1.92,-1.29 6.52,3.05 5.01,-1.07 0.59,-2.7 2.29,-5.32 1.74,-7.95 1.25,-0.84 -1.73,-1.91 0.74,-2.53 2.32,-1.47 3.71,-3.79 6.04,-5.21 0.4,-1.57 0.8,-2.1 2,-2.68 -1.38,-1.85 -2.67,-6.36 -5.46,-5.62 -1.54,-2.69 0.63,-6.1 -0.98,-8.69 -2.44,0.11 -1.5,-4.81 -4.22,-4.74 -2.14,-0.69 -5.48,-5.75 -7.17,-2.57 0.92,4.08 -4.49,2.27 -2.46,-0.85 -1.91,-1.19 -5.21,1.01 -5.19,3.34 -1.4,3.16 -4.03,-1.21 -5.4,-1.88 -1.7,0.52 -1.47,-2.53 -3.73,-1.05 -1.71,1.8 -2.68,-0.11 -1.46,-1.57 -0.15,-1.56 -0.74,-2.62 0.35,-3.62 -1.57,-1 -0.67,-2.78 -2.91,-3.32 z",
						"department-48" : "m 373.48,404.94 c -1.47,0.89 -3.46,3.53 -5.12,1.98 -0.01,1.49 -1.57,1.93 -1.04,3.5 -1.43,1.81 -3.11,1.2 -3.88,-0.85 -2.88,-0.45 -1.07,4.27 -3.39,4.9 -1.4,1.6 -1.16,4.02 -1.76,5.9 0.45,1.49 -1.64,2.13 -1.6,3.92 -1.61,2.48 1.66,4.55 3.09,6.26 2.11,1.84 -1.38,5.67 2.08,6.72 1.92,1.77 1.3,4.27 0.7,6.32 -0.81,2.08 2.13,3.68 0.68,5.63 -1.2,1 -0.69,2.92 0.49,1.55 -0.34,2.49 4.49,1.53 3.22,4.04 -0.61,3.08 3.16,-0.47 4.71,0.57 2.33,-0.24 2.39,2.9 4.55,3.55 1.02,2.18 4.4,1.65 6.21,1.9 1.73,0.64 4.49,-0.1 3.28,-2.39 -0.17,-1.71 2.49,-2.35 3.14,-0.7 2.15,-0.14 3.4,3.16 5.36,2.3 1.4,-0.48 2.81,0.78 3.7,-1.01 1.48,-0.27 0.79,-2.83 2.56,-1.71 0.48,-1.13 -1.37,-1.78 -0.45,-3.23 -0.32,-1.45 2.55,-2.77 -0.12,-3.02 -0.49,-1.4 -1.27,-2.69 0.33,-3.79 -0.9,-1.25 -2.65,-3.18 -2.62,-4.42 1.46,-1.07 3.7,-0.89 3.95,-3.34 1.21,-1.8 0.03,-4.2 -0.54,-6.13 -0.14,-2.55 -3.1,-2.32 -3.01,-4.96 -0.51,-1.42 -0.74,-3.3 -1.23,-4.8 0.21,-0.99 -1.02,-2.2 -0.2,-3.43 -0.96,-0.75 -2.32,-0.83 -1.55,-2.36 -1.84,1.16 -1.86,-1.71 -3.45,-2.23 0.02,-3.18 -3.5,-0.79 -4.63,-2.01 2.18,-2.04 -3.67,-4.45 -2.82,-1.23 0.29,3.23 -3.33,0.7 -4.65,2.81 -2.12,0.38 -2.38,-3.83 -3.37,-5.42 -0.69,-1.57 0.03,-3.98 -2.15,-4.28 l -0.25,-0.51 -0.23,-0.01 -2.2e-4,-1e-4 z",
						"department-63" : "m 350.25,319.87 c -2.41,0.1 -1.39,6.08 -4.36,2.69 -2.2,-1.55 -1.13,2.91 -3.36,2.6 -0.99,2.15 -2.4,5.06 -4.99,2.48 -3.53,1.71 0.74,5.9 1.02,8.31 0.33,2.26 -0.13,3.09 -1.85,4.34 -0.59,3.07 -2.87,5.1 -5.46,5.93 -0.78,1.08 -3.3,2.29 -0.7,4.14 1.84,2.94 6.68,6.33 3.76,10.01 -3.59,1.58 -0.37,5.2 0.63,7.47 -1.63,3.1 2.57,5.33 4.8,4.69 1.04,1.88 3.32,0.49 2.64,2.92 1.95,3.55 6.09,-0.43 8.67,2.01 3.48,0.74 2.44,6.76 6.82,5.67 2.39,-1.04 2.55,-4.68 5.97,-4.03 2.84,-0.11 5.33,-4.21 7.45,-3.45 1.17,-0.15 2.17,-1.54 3.06,0.31 2.88,1.39 5.17,-2.92 7.03,0.16 3.24,-0.64 2.05,6.51 5.21,2.85 1.13,-3.37 5.41,3.07 6.68,-1.35 0.83,-2.19 5.07,4.34 4.28,-0.59 0.72,-2.92 5.73,-4.1 3.45,-7.91 -0.98,-3.57 -2.63,-6.42 -6.17,-8.13 -2.69,-2.1 -1.82,-6.45 -4.74,-8.34 -0.45,-1.7 -2.19,-2.8 -0.35,-4.4 -0.69,-2.91 2.62,-4.84 -0.62,-6.96 -2.59,-1.57 -3.98,-4.12 -5.91,-6.12 -2.16,0.37 -6.24,1.62 -5.45,-1.98 -1.98,-2.68 -5.33,1.55 -7.73,-0.76 -2.66,-0.65 -5.11,0.01 -7.56,-0.72 -1.51,-1.52 -2.18,-2.56 -4.49,-2.07 -3.09,-0.49 -3.15,-3.91 -5.15,-5.29 0.27,-2.13 2.01,-5.11 -1.71,-4.35 l -0.47,-0.05 -0.43,-0.12 0,0 z",
						"department-42" : "m 397.37,318.49 c -1.6,0.83 -3.4,1.29 -4.64,2.21 -1.3,0.59 1.02,2.59 0.48,3.98 0.61,1.85 -0.41,4.23 1.11,6.23 -1.61,2.5 2.37,7.25 -2.15,7.3 -1.09,-0.11 -1.49,1.09 -2.88,0.34 -2.32,2.56 2.22,3.36 1.74,5.81 -1.98,1.61 -0.24,4.65 -2.31,6.15 1.69,0.49 1.3,2.13 2.33,2.91 2.23,1.34 1.14,4.92 3.25,6.83 1.78,1.97 5.01,2.91 6.17,5.68 -1.24,2.45 2.85,3.93 0.67,5.95 0.89,3.06 -5.47,3.2 -3.23,7.04 0.42,3.41 2.25,-3.4 4.17,-0.43 0.87,1.44 1.19,2.02 2.38,0.77 1.23,1.18 1.39,0.75 2.25,-0.33 1.05,-0.89 3.38,0.13 2.65,-1.8 2.25,-0.56 4.93,-0.17 6.2,1.72 1.74,-1.96 5.45,1.48 2.47,2.65 0.55,1.23 1.98,1.3 0.84,2.91 0.86,2.54 3.62,-1.67 4.48,1.3 1.58,2.36 4.9,0.89 6.79,-0.08 -1.25,-1.91 1.2,-3.4 2.26,-5.02 1.49,-1.32 5.89,-1.48 4.47,-4.32 -0.52,-1.74 0.97,-3.48 -0.58,-5.25 -0.48,-1.69 -3.61,1.7 -3.93,-1.3 0.42,-2.1 -0.24,-3.68 -1.93,-4.86 -1.43,0.06 -2.67,-1.02 -4.29,-0.14 -2.32,-0.62 -2.91,-2.86 -5.1,-4.24 -1.42,-1.8 -2.51,-3.8 -0.78,-6.03 1.82,-2.31 -3.43,-0.74 -1.14,-3.43 0.94,-1.31 1.04,-3.98 1.15,-5.42 -2.5,-0.01 -3.12,-2.67 -2.32,-4.33 -1.63,-1.26 -2.43,-3.07 -4.07,-4.21 0.9,-0.54 3.97,0.36 2.35,-1.72 -1.31,0.09 -3.3,-2.79 -0.85,-2.47 1.97,-1.74 0.65,-5.53 4.11,-6 0.97,-0.45 2.45,1.37 2.78,-0.77 -0.25,-1.57 -2.38,-2.12 -0.65,-3.5 -1.51,-1.51 -2.16,1.22 -2.41,1.83 -1.97,-0.74 -4.16,3.26 -5.16,1 1.12,-2.05 -1.54,-0.14 -2.23,-1.49 -1.1,1.9 -3.25,0.89 -4.63,-0.3 -2.08,0.61 -5.43,3.53 -6.14,-0.27 -1.61,-0.39 -4.74,-0.44 -2.93,-2.93 0.29,-0.63 0.34,-2.13 -0.72,-1.99 z",
						"department-69" : "m 433.73,316.51 c -1.23,0.46 -2.5,0.15 -2.78,2.07 -0.74,1.45 -2.37,-0.51 -2.67,-1.28 -0.69,1.49 -2.76,2.38 -3.71,0.45 -1.68,-1.33 -4.39,-0.82 -4.01,1.84 -0.71,1.65 0.63,2.41 1.38,3.48 -2.55,0.77 0.51,1.73 0.61,2.71 -0.41,1.66 -1.38,2.06 -2.7,1.09 -2.04,0.63 -3.43,2.17 -3.25,4.46 0.34,2.11 -3.89,1.45 -1.52,3.28 0.64,0.85 2.57,0.6 1.5,2.34 -0.59,0.49 -3.83,-0.49 -1.93,0.9 1.83,0.38 1.7,2.77 3.5,3.41 0.3,1.24 -1.23,2.13 0.17,3.34 0.85,1.23 3.47,0.4 1.96,2.6 -0.03,1.87 -0.27,3.49 -1.48,4.83 0.06,1.49 3.29,0.29 1.61,2.31 -1.06,1.85 -1.32,4.02 0.45,5.41 1.27,1.35 2.68,3.31 4.18,4.13 1.51,1.5 3.36,-0.41 4.88,1.05 1.7,-0.73 1.49,2.06 2.91,2.19 -1.19,1.71 0.21,5.2 2.42,3.21 1.24,-1.16 2.04,4.15 2.96,1.45 1.23,-1.41 3.83,-2.33 3.98,-4.32 -1.76,-0.7 -2.47,-2.54 -4.09,-3.51 1.84,-0.94 3.53,1.28 4.58,-0.77 1.51,-1.17 4.45,-0.14 5.27,-1.51 0.95,-0.25 2.74,0.97 2.03,-1.03 1.24,-1.85 2.79,-4.63 5.26,-4.54 0.24,-2.22 -3.33,-1.77 -3.23,-3.97 -1.59,-0.5 -1.14,-2.19 0.43,-1.77 0.7,-2.69 -4,-0.18 -5.55,-0.99 -1.61,0.21 -2.66,0.21 -2.4,-1.73 -0.63,-1.95 -1.32,-4.61 -3.64,-4.95 -0.96,0.68 -1.86,1.05 -1.38,-0.57 -0.83,-1.37 -2.55,-0.91 -3.49,-1.92 2.14,-2.03 -0.39,-5.26 0.95,-7.43 1.04,-0.99 -1.1,-2.32 0.59,-3.24 1.49,-1.45 2.32,-4.9 -0.84,-4.45 -2.61,-1.01 0.89,-5.07 -2.78,-5.24 -1.21,-1.33 2.19,-1.14 0.43,-2.68 -0.12,-0.26 -0.3,-0.58 -0.61,-0.66 z",
						"department-43" : "m 379.31,374.73 c -1.62,2.39 -4.9,1.8 -6.71,0.33 -0.7,1.72 -0.87,1.21 -1.91,0.1 -0.8,1.98 -3.58,1.56 -4.38,3.23 -1.25,1.09 -2.57,1.35 -4.33,1.17 0.74,1.5 -1.58,1.78 -0.04,2.79 -2.08,1.77 1.79,1.15 2.36,1.2 -0.13,1.97 3.13,-0.54 2.89,1.98 -0.29,1.8 0.97,2.96 2.14,3.73 -0.86,2.28 -0.05,5.34 2.48,5.9 2.93,0.43 -0.37,2.07 -1.36,0.74 -1.49,0.56 1.82,1.51 0.26,2.94 -1.01,2.64 2.59,2.31 2.97,4.1 -2.04,1.24 0.26,1.73 1.03,2.74 1.8,0.69 0.7,3.92 2.11,5.44 0.56,1.74 1.53,5.67 3.68,3.09 2.13,0.18 4,-0.58 3.52,-3.06 1.72,-1.57 4.47,0.99 3.25,2.73 2.03,-0.35 4.24,-0.91 4.56,1.81 1.6,0.42 1.42,3.2 3.32,1.95 -0.31,0.86 -0.01,2.7 1.4,1.48 3.08,-0.04 2.22,-4.19 4.35,-5.07 0.8,1.72 0.74,-0.65 2.16,-0.3 0.91,-0.43 0.22,-3.47 2.51,-2.52 2.14,-0.66 5.33,0.63 5.55,-2.64 1.54,-1.36 1.15,-4.48 3.81,-3.54 1.57,0.05 2.24,-1.12 0.99,-2.15 -1.14,-2.94 5.69,-1.67 3.23,-3.83 -1.6,-1.11 -0.01,-3.44 1.47,-3.61 -1.01,-0.84 -1.65,-2.84 0.52,-2.06 0.75,0.25 1.93,2.57 1.79,0.63 -0.57,-2.5 2.93,-4.77 1.26,-7.19 -1.2,-1.98 -2.64,-2.48 -4.48,-1.26 -2.08,-0.82 0.53,-3 -1.95,-3.68 1.6,-1.09 1.44,-3.36 -0.89,-3.47 -2.17,2.19 -2.9,-2.58 -5.24,-0.98 -1.45,-1.18 -2.23,0.2 -2.36,1.14 -1.72,-0.24 -2.79,0.8 -3.72,1.87 -0.74,-1.86 -1.9,-0.59 -2.28,0.4 -0.52,-2.16 -2.78,-4.05 -4.23,-1.53 -0.3,1.52 -1.03,1.38 -1.49,0.05 -2.13,0.67 -3.37,-3.95 -4.67,-1.3 0.12,2.86 -4.25,0.82 -5.13,-0.4 -0.84,1.48 -2.99,4.23 -4.08,1.09 -0.06,-2.97 -3.34,-1.73 -4.39,-4.01 z",
						"department-07" : "m 436.62,378.68 c -2.11,1.19 -5.05,1.82 -5.73,4.31 -0.61,0.74 -1.7,1.47 -0.63,2.83 -1.48,1.55 -5.39,0.21 -5.65,3.05 -0.4,2.17 -2.13,4.1 -1.51,6.11 -0.82,1.35 -2.2,-3.55 -3.34,-0.83 2.87,1.6 -1.37,1.64 -1.06,3.7 -0.07,1.01 2.58,2.11 0.3,2.78 -2.43,-0.04 -3.73,1.92 -2.22,3.92 -1.62,1.35 -4.39,-0.37 -4.36,2.53 -1.51,1.8 -1.89,5.12 -5.04,3.9 -1.64,0.68 -4.72,-0.35 -3.54,2.75 -1.69,0.44 -2.07,1.93 -3.57,0.7 -0.65,2.39 -1.67,4.38 -3.7,5.18 0.05,1.23 -0.23,2.66 0.56,3.58 -0.09,2.42 0.91,5.06 1.8,7.31 3.3,1.24 2.04,5.97 4.07,8.24 1.96,0.49 1.37,2.56 2.59,3.64 -1.74,0.94 0.2,3.57 -1,5.13 1.45,0.08 4.13,-2.2 4.71,0.49 2.27,-0.88 3.84,4.84 5.98,2.4 0.11,-2.69 3.06,-5.02 5.54,-4.01 -0.84,1.71 0.49,4.93 2.22,2.69 -1.12,-4.19 4.37,-2.87 5.2,-0.35 2.07,1.28 5.06,2.67 3.99,-1.18 -0.44,-2.49 0.5,-4.84 0.92,-7.23 2.57,-1.67 0.05,-4.72 1.41,-6.94 -1.34,-2.75 2.73,-3.36 2.63,-6.07 2.5,-3.08 -0.98,-6.81 0.47,-10.07 2,-1.59 2.83,-4.11 4.16,-6.22 -0.81,-2.28 2.55,-4.4 -0.11,-6.44 -1.37,-1.98 -0.41,-4.12 -0.17,-5.92 -1.82,-0.69 -0.96,-3.19 -2.25,-4.49 1.8,-2.26 -0.83,-5.08 0.05,-7.93 1.49,-3.08 -3.02,-4.17 -1.77,-7.12 l -0.36,-0.33 -0.59,-0.1 0,0 z",
						"department-26" : "m 448.07,380.12 c -2.89,1.17 -5.09,3.5 -8.19,2.69 -0.39,2.66 -1.05,6.79 0.49,9.42 -1.96,1.97 0.32,3.64 0.34,5.76 2.35,1.37 -0.99,4.81 1.33,6.93 2.06,2.38 -0.62,5.13 -0.81,7.77 -1.22,2.58 -4.32,4.41 -3.69,7.71 1.66,3.46 0.06,6.59 -1.3,9.7 -3.02,0.93 -0.83,4.24 -2.03,6.3 0.95,3.33 -2.55,6.12 -1.92,9.81 1.2,3.03 7.51,-0.99 7.1,4.18 0.14,2.04 0.67,4.67 2.58,1.79 2.97,-0.92 6.04,-2.27 9.06,-3.52 1.12,3.67 4.14,-0.81 5.13,-0.14 -0.85,1.68 -0.59,3.54 -0.5,5.19 1.36,1.14 3.35,1.14 4.16,-0.1 1.72,1.86 4.28,0.89 5.95,1.95 0.03,1.94 0.09,3.52 2.41,3.44 1.06,4.04 4.77,0.96 6.47,-0.43 -1.58,-2.47 1.9,-2.75 3,-1.1 1.64,-1.37 2.06,-2.86 1.41,-5.21 1.53,-2.36 -2.87,-0.24 -1.73,-2.96 -1.59,-0.67 -0.77,-1.18 -0.59,-2.32 -2.51,0.48 -4.35,-1.04 -6.35,-0.89 -1.23,-1.45 -2.87,-1.53 -2.12,-3.69 -1.62,-1.67 -0.01,-2.82 1.69,-1.61 2.12,-0.83 -1.87,-1.85 -0.65,-3.64 -0.28,-2.93 4.33,0.48 6.05,0.59 1.73,0.39 1.15,-2.66 3.01,-2.35 -1.71,-1.67 -3.84,-2.97 -1.6,-5.43 1.79,-1.45 -0.55,-5.71 2.99,-3.98 1.94,0.82 3.33,-0.86 4.9,-1.06 1.29,-0.88 2.08,-3.19 -0.35,-2.44 -2.24,0.57 -3.91,-2.09 -6.41,-1.58 -1.16,-1.43 -2.84,-3.52 -4.34,-3.81 0.14,1.78 -6.09,-0.53 -3.44,-2.33 -1.37,-2.79 0.85,-6.84 0.11,-10.1 0.96,-2.47 -1.42,-5.35 0.09,-7.37 -2.07,0.93 -4.59,4.84 -6.88,1.6 -1.84,0.62 -4.04,-0.31 -5.88,-1.61 -1.29,0.02 -2.1,2.02 -3.13,0.34 2.95,-1.62 2.73,-5.57 1.54,-8.29 2.1,-1.71 -0.25,-3.63 -2.12,-2.9 0.27,-1.74 0.99,-4.37 -1.59,-2.47 -1.31,0.06 -1.04,-2.86 -3.02,-2.37 -0.42,-0.45 -0.36,-1.52 -1.19,-1.46 z m -1.27,60.35 c 2.68,0.18 1.93,3.2 4.79,3.14 -1.88,1.51 -2.98,3.63 -4.06,5.91 -1.76,-1.35 -5.66,0.15 -4.33,-3.15 -1.66,-0.66 1.47,-2.81 1.37,-4.36 0.67,-0.62 1.73,-0.72 2.23,-1.54 z",
						"department-84" : "m 446.86,440.69 c -1.95,0.68 -2.59,2.23 -3.24,3.95 -1.54,1.08 0.24,1.84 -0.38,3.25 0.79,1.16 2.95,0.74 4.3,1.12 1.33,-1.76 1.41,-4.26 3.76,-4.92 -0.23,-0.92 -2.69,-0.73 -2.57,-2.42 -0.66,-0.27 -1.12,-0.97 -1.86,-0.99 z m -10.7,6.69 c -1.75,0.63 -4.36,-0.72 -3.75,2.23 -0.47,1.96 1.22,3.5 1.32,5.13 2.22,-0.26 1.8,3.29 1.6,4.89 -0.71,1.78 -0.16,4.41 1.97,3.57 1.39,1.79 2.8,3.83 3.94,5.76 0.11,1.52 -2.28,0.28 -1.54,2.26 -0.27,1.54 -4.74,2.54 -1.78,2.92 1.98,0.36 4.26,0.33 5.81,1.82 2.69,0.61 4.43,2.7 6.08,4.74 0.55,2.14 2.45,3.17 4.31,4.09 2.3,2.43 5.12,0.03 7.83,1.23 2.38,1.21 4.48,2.96 6.96,4.03 2.69,1.26 6.11,1.9 8.79,0.34 1.35,-1.61 3.7,-0.97 4.73,-3.09 0.97,-1.51 -1.94,-2.24 -1.96,-3.86 -1.56,-1.86 -3.42,-4.41 -6.24,-2.8 -2.07,0.95 -0.48,-2.95 0.61,-3.43 0.51,-1.33 1.55,-2.66 -0.1,-3.23 -0.29,-2.08 -4.3,-0.54 -3.06,-3.3 0.45,-2.01 1.86,-3.87 1.45,-6.01 -1.1,0.12 -2.63,0.07 -2.14,-1.74 0.53,-2.35 -2.66,-1.28 -2.71,-3.51 -1.05,-0.88 -3.35,-0.4 -2.48,-2.73 -0.01,-3.12 -4.03,-0.26 -5.3,-2.66 -1.51,-1.06 -0.98,1.74 -2.66,0.68 -2.01,-0.15 -3.06,-1.35 -2.27,-3.12 -1.69,-0.64 1.81,-3.73 -0.28,-2.95 -1.07,2.14 -3.56,1.91 -4.6,0.21 -2.41,0.78 -4.55,2.65 -7.11,2.79 -1.53,-0.33 -4,4.19 -3.94,0.55 -0.37,-2.16 -0.51,-5.06 -3.51,-4.81 z",
						"department-13" : "m 436.6,474.08 c -0.74,1.85 -4.74,2.73 -4.06,4.51 1.26,0.66 -1.41,1.72 -0.12,3.06 0.08,2.7 -2.74,5.11 -1.37,7.86 -2.28,-0.28 -6.4,-2.34 -7.04,1.21 -2.02,1.17 -2.34,4.33 0.25,4.07 -0.26,2.18 -2.99,1.15 -3.24,3.2 -2.53,0.88 -3.65,1.48 -5.33,3.13 -3.12,0.45 -3.32,4.69 0.25,3.69 2.78,0.47 5.55,1.05 8.35,0.35 2.37,-0.45 7.29,1.42 4.55,4.28 -0.6,3.55 5.03,2.05 7.33,2.58 1.71,0.43 5.71,0.01 2.7,-2.11 -3.88,-1.35 -2.85,-5.16 -3.05,-8.31 -0.04,-1.21 -2.55,-5.59 -0.42,-2.89 1.89,2.36 1,5.34 0.95,8.05 0.88,2.13 3.62,3.05 5.46,4.22 1.53,-0.81 -2.25,-2.45 0.5,-3.11 1.91,-1.46 4.03,-0.52 5.49,0.58 3.35,0.39 4.55,-4.15 1.3,-5.2 -0.68,-1.48 -0.16,-6.09 1.79,-3.06 2.23,-0.56 2.91,0.56 2.79,2.29 1.26,2.1 3.09,1.09 4.71,0.38 1.06,3.09 -3.48,5.94 -6.44,5.14 -4.78,-0.48 -3.49,6.19 0.68,5.18 2.9,-0.06 6.07,0.58 8.6,-1.26 3.09,-1.75 3.91,2.83 3.27,4.72 2.03,1.28 -2.35,4.61 1.58,4.55 2.59,-0.26 5.17,0.78 7.33,0.32 0.97,2.95 3.72,1.97 5.67,1.14 -0.33,-3.01 1.95,-4.41 4.07,-5.87 -0.58,-2.14 -2.28,-2.58 -3.96,-3.03 2.56,-1.22 -1.49,-6.49 2.6,-5.65 1.54,0.73 3.39,-0.95 1.08,-1.75 -1.32,-1.96 -3.23,-3.39 -1.84,-5.73 2.26,-2.81 -4.73,-2.76 -1.41,-4.42 -0.82,-3.37 2.37,-4.88 5.13,-5.19 1.46,-1.69 -2.03,-5.66 -3.21,-2.42 -1.87,0.81 -3.79,1.87 -5.79,2.74 -4.96,0.73 -9.29,-2.44 -13.26,-4.94 -3.21,-1.31 -6.53,0.84 -9.27,-1.96 -2.79,-0.81 -2.96,-3.66 -4.98,-5.35 -1.7,-2.34 -4.64,-3.03 -7.08,-4.31 -1.52,-0.14 -3,-0.57 -4.52,-0.71 z",
						"department-83" : "m 517.2,482.16 c -2.21,0.45 -4.51,0.15 -4.56,3.03 -1.71,2.89 -5.34,-0.75 -6.7,-2.47 -3.07,-2.54 -3.41,4.73 -6.6,3.29 -1.58,1.5 -2.96,3.5 -4.46,4.67 -1.25,-1.47 -1.71,-3.25 -3.55,-3.95 0.03,-1.86 -1.87,-1.86 -1.91,-0.09 -1.33,1.02 -2.66,0.95 -3.16,-0.75 -1.91,-1.9 -4.18,0.89 -2.09,2.04 0.53,1.23 1.97,1.94 0.53,3.38 -2.84,-0.21 -5.92,2 -4.84,5.1 -3.44,1.27 3.35,1.25 1.35,3.57 -0.22,1.94 -1.24,3.31 0.74,4.69 0.22,1.73 4.1,2.93 0.81,3.75 -2.63,-1.28 -3.72,1.11 -2.27,3.16 -1.33,1.63 -0.65,2.88 1.29,2.7 1.09,1.33 2.34,3.31 -0.22,3.83 -2.89,1.3 -2.33,4.54 -1.48,6.82 1.05,1.11 2.71,1.01 3.71,1.52 -0.45,1.28 3.17,1.21 0.61,2.02 -2.2,1.64 1.53,2.03 2.31,3.24 1.87,0.49 2.01,-2.69 4.02,-1.64 0.25,-1.17 -3.62,-2.32 -0.77,-2.94 1.5,-0.75 1.25,1.72 3.11,0.9 1.98,-0.44 2.88,1.82 4.97,0.72 2.49,0.17 1.79,3.18 -0.25,3.1 1.03,0.17 3.75,1.02 4.22,-0.22 -1.87,-1.01 -0.43,-5.47 2.18,-4.51 2.27,-1.02 4.3,0.74 5.47,2.2 2.95,0.7 -0.7,-3.95 2.56,-4.14 1.82,-1.17 4.32,-0.11 5.81,-1.82 1.19,-1.87 3.53,-0.69 3.91,0.87 1.83,-0.26 1.02,-2.97 3.25,-2.97 -1.94,-1.52 0.52,-2.56 0.71,-4.09 -0.88,-1.35 -6.14,0.84 -4.2,-1.29 1.98,-0.49 3.13,-1.3 3.41,-3.27 3.09,-0.38 1.58,-4.33 3.42,-5.76 2.02,1.51 4.49,0.53 6.29,-0.38 1.97,-1.45 2.07,-3.69 -0.21,-4.86 0.39,-1.48 -0.82,-2.76 0.73,-4.13 0.32,-1.33 0.43,-3.31 -1.68,-2.51 -2.08,-0.91 -4.86,-2.77 -4.6,-5.2 1.21,-2.45 -1.26,-3.59 -2.82,-4.44 -1.3,-0.4 -2.5,0.43 -2.84,-1.45 -0.36,-2.95 -3.06,-1.75 -4.46,-0.37 0.04,-0.84 -0.83,-2.43 -1.72,-1.38 z",
						"department-06" : "m 534.65,445.17 c -2.26,1.07 -5.06,2.58 -4.36,5.66 -3,-0.21 -3.04,3.43 -4.06,5.54 -1.08,2.46 0.95,4.86 2.25,6.92 -1.14,3.22 2.36,4.62 4.05,6.69 0.63,2.61 3.53,3.37 4.77,5.63 -2.57,2.29 -4.92,-3.17 -6.86,-0.03 -0.74,2.32 -3.13,1.4 -4.56,1.36 1.15,1.61 -2.67,2.88 0.34,3.69 1.19,1.89 -4.95,1.17 -2.32,3.78 0.53,1.35 2.49,-0.04 3.3,1.63 2.89,-0.16 1.89,3.58 2.03,5.2 1.45,1.97 3.65,3.89 6.12,3.69 1.22,2.02 -1.58,4.04 -0.48,6.02 -0.26,2.6 3.76,2.43 2.74,-0.52 1.75,-2.03 4.78,-1.82 7.05,-2.83 2.15,2.34 0.79,-2.94 1.42,-4.1 0.35,-2.64 3.85,-1.42 4.44,-3.92 1.43,-0.64 4.04,-1.22 4.41,0.38 0.69,-1.18 0.32,-2.51 2.45,-2.28 -0.13,-1.76 1.58,-4.07 3.07,-2.16 1.7,0.06 1.19,-2.66 3.34,-2.27 -0.27,-2.4 -3,-5.81 0.3,-7.3 1.54,-1.45 0.99,-4.2 3.51,-4.76 2.78,-1.39 1.89,-4.43 4.17,-6.12 1.59,-2.77 -3.27,-4.24 -1.5,-7.3 -1.21,-2.71 -2.61,1.55 -4.47,0.73 -2.22,0.84 -4.68,1.32 -6.76,2.38 -2.04,0.2 -3.62,-0.51 -4.81,-1.86 -2.43,0.52 -3.44,-1.96 -5.53,-2.49 -1.15,-2.34 -3.58,-0.83 -4.96,-2.82 -1.54,-1.59 -4.78,0.61 -4.95,-2.66 -1.4,-1.9 -2.37,-3.95 -3.93,-5.85 l -0.23,-0.02 -1.8e-4,10e-5 z",
						"department-04" : "m 536.03,425.47 c -1.91,1.96 -3.88,3.46 -6.49,4.44 -1.02,2.88 -4.75,3.12 -5.32,6.34 -1.11,1.83 -1.21,3.9 -4.02,3.07 -3.01,-0.06 -6.66,-0.3 -8.11,-3.08 -0.64,-1.8 -3.43,-1.98 -2.19,0.22 -0.26,3.25 -2.7,-0.14 -4.23,1.68 -1.44,0.61 2.06,5.8 -1.43,5.09 -2.1,-2.16 -2.71,-5.63 -6.09,-5.69 -0.87,3.33 -6.54,3.63 -7.12,7.81 -0.96,1.13 -2.01,2.66 -0.4,3.1 -0.61,1.4 0.72,5.52 -1.66,2.94 -0.44,-1.65 -2.49,-3.59 -2.83,-0.6 1.02,1.86 2.62,3.82 3.95,5.12 -2.91,0.83 -6.3,-2.29 -9.28,0.12 -0.78,0.38 -3.94,0.37 -2.37,1.8 0.52,0.59 -1.17,0.62 -1.27,-0.25 -1.21,-2.36 -3.58,-0.6 -2.43,1.22 -2.05,0.82 -5.12,3.55 -2.92,5.69 3.34,-0.23 0.15,4.71 -0.09,6.55 -0.21,2.32 3.26,0.85 3.55,3.17 2.24,1.52 -3.59,5.18 -1.33,6.48 2.81,-2.13 5.06,0.73 6.7,2.59 0.57,1.46 2.26,4.38 3.61,1.7 2.13,0.13 4.41,4.24 5.38,0.42 1.94,-1.62 1.55,2.48 3.59,2.29 0.43,1.7 2.31,4.04 2.93,1.23 2.03,-0.76 2.24,-3.96 4.52,-2.9 1.73,-1.32 3.93,-6.5 5.92,-2.58 1.76,2.61 6.67,4.01 6.46,-0.53 1.66,-0.48 3.88,-1.21 5.41,-0.9 0.99,2.9 3.19,-2.27 4.59,0.48 1.62,-0.3 5.25,-1.56 1.66,-2.44 0.5,-1.52 2.15,-2.44 0.07,-3.65 2.45,0.82 5.17,0.99 6.43,-1.88 1.98,-0.91 4.27,3.34 5.6,0.53 -2.39,-1.94 -3.94,-3.66 -5.54,-6.13 -1.97,-1.55 -3.7,-3.16 -3.01,-5.85 -1.63,-2.1 -3.46,-4.86 -1.89,-7.35 0.29,-2.57 2.02,-4.78 3.68,-5.75 -0.2,-4 5.64,-3.6 4.5,-7.78 -0.28,-2.01 3.78,-1.57 1.15,-3.33 -2.21,-1.59 -4,-5.51 -0.76,-7.08 1.56,-1.02 4.77,-6.03 1.11,-6.32 z",
						"department-05" : "m 505.98,394.66 c -0.92,0.25 -1.63,1.24 -1.1,2.16 0.19,0.48 0.58,1.51 -0.28,1.51 -1.03,0.5 -0.62,1.96 -1.08,2.79 -0.5,0.85 0.81,1.35 1.44,1.52 1.22,0.46 2.5,-0.16 3.7,-0.25 0.54,0.61 -0.39,1.36 0.2,1.99 0.46,0.55 -0.24,1.49 0.61,1.76 1.28,0.11 1.04,1.22 0.99,2.19 0.04,1.33 -0.36,2.63 -0.12,3.94 -0.53,0.79 -1.69,0.39 -2,-0.4 -0.51,-1.19 -2.09,-0.47 -2.63,0.32 -1,0.97 -2.33,-0.4 -3.46,0.21 -0.85,0.38 -1.73,-1.03 -2.42,-0.12 -0.98,1 -2.08,1.88 -3.19,2.74 -0.6,-0.52 -1.36,-2.29 -1.99,-0.92 -0.19,0.45 -0.47,0.63 -0.95,0.63 -0.5,0.26 -1.64,0.37 -1.59,1.05 0.28,0.44 1.46,0.83 1.02,1.47 -0.54,0.3 -1.13,0.65 -1.29,1.26 -0.7,-0.05 -1.3,0.89 -1.97,0.42 -0.72,-0.21 -1.09,0.98 -1.85,0.43 -0.58,0.09 -1.28,-0.82 -1.74,-0.36 0.25,1.1 -0.94,2.04 -0.76,3.1 0.52,0.18 0.81,0.66 0.78,1.23 -0.53,0.61 -1.46,0.99 -1.58,1.94 -0.18,0.9 -1.25,0.06 -1.79,0.32 -0.68,0.37 -1.24,1.41 -2.12,0.79 -0.93,-0.21 -2.04,-0.85 -2.95,-0.39 -0.57,0.89 0.83,2.18 -0.26,2.82 -0.65,0.74 -0.7,1.84 -1.37,2.59 -0.33,0.63 -0.72,1.79 0.31,1.98 1.01,0.26 1.61,1.36 2.24,2.13 -0.07,0.59 -1.06,0.18 -1.47,0.37 -0.6,0.27 -0.26,1.22 -0.74,1.67 -0.29,0.65 -1.01,0.59 -1.49,0.18 -0.57,-0.34 -1.27,-0.05 -1.74,-0.61 -0.9,-0.62 -2,-0.67 -3.03,-0.83 -0.44,-0.35 -1.26,-0.9 -0.84,0.18 0.34,0.85 -0.18,1.94 0.35,2.71 0.46,0.27 1.64,0.66 1.06,1.38 -0.5,0.81 -1.41,0.3 -2.05,-0.05 -0.52,-0.37 -1.25,0.09 -0.87,0.7 0.33,0.77 0.86,1.66 0.62,2.5 -0.66,0.38 0.12,0.97 0.62,0.79 0.61,0.08 0.48,1.09 1.17,1.15 0.27,0.47 0.79,0.78 1.25,0.32 0.66,-0.57 1.26,0.29 1.64,0.72 1.26,0.36 2.77,-0.21 3.93,0.31 -0.15,0.66 -1.33,1.39 -0.16,1.75 0.4,0.17 0.78,0.55 0.44,0.97 -0.13,0.75 0.67,1.6 1.38,1.06 0.44,-0.36 1.29,0.39 0.73,0.76 -0.45,0.57 -0.47,1.41 -0.01,1.94 -0.06,0.96 -0.14,2.01 0.32,2.89 0.74,-0.36 1.48,-0.84 2.32,-1.03 0.89,-0.54 2.04,-0.3 3.03,-0.47 1.36,0.7 2.9,1.36 4.48,1.28 0.82,-0.57 -0.52,-1.06 -0.97,-1.25 -0.83,-0.92 -1,-2.37 -2.18,-3.02 -0.89,-0.61 -0.47,-1.72 -0.01,-2.44 0.2,-0.82 1.38,-0.21 1.78,0.12 0.44,0.5 0.07,1.39 0.76,1.79 0.27,0.34 1.29,1.11 1.39,0.28 -0.46,-0.7 -0.4,-1.72 0.04,-2.4 0.24,-0.63 -0.28,-0.96 -0.8,-0.99 -0.4,-0.58 -0.19,-1.66 0.53,-1.93 1.11,-0.98 1.03,-2.64 1.93,-3.7 0.84,-0.83 2.18,-1.02 2.91,-1.96 0.3,-0.69 1.08,-1.23 1.8,-1.37 0.77,0.34 0.76,-0.99 0.72,-1.47 0.2,-0.8 1.42,-0.33 1.96,-0.19 0.77,0.29 1.87,0.6 1.76,1.64 -0.03,0.5 0.41,0.7 0.8,0.64 0.65,1.23 1.63,2.21 2.33,3.38 0.67,0.53 1.08,-0.73 1.28,-1.18 0.53,-1.39 -0.98,-2.61 -0.83,-3.89 0.95,-0.06 1.68,-0.79 2.53,-1.06 0.55,0.33 1.53,1.41 2.02,0.36 0.44,-0.73 0.48,-1.61 -0.08,-2.27 0.17,-0.42 0.83,-0.77 1.24,-0.86 0.91,1 1.94,1.96 2.46,3.23 0.51,0.3 1.22,-0.11 1.7,0.41 0.56,0.61 1.25,1.09 2.14,1 1.98,0.14 3.96,0.2 5.94,0.29 0.53,-0.84 0.08,-2.27 1.05,-2.94 1.09,-0.75 1.13,-2.18 1.48,-3.28 1.39,0.19 2.51,-0.88 3.23,-1.94 0.77,-0.23 0.49,-1.3 1.27,-1.53 0.82,-0.72 1.93,-0.86 2.92,-1.25 0.49,-0.42 0.51,-1.23 1.32,-1.26 0.83,-0.36 1.14,-1.4 1.93,-1.78 0.77,0.27 1.79,0.29 2.08,-0.66 0.66,-1.38 2.4,-1.81 3.71,-1.06 0.39,0.18 1.29,0.5 1.12,-0.27 0.09,-1.44 -0.99,-2.46 -1.92,-3.38 -0.16,-1.25 0.2,-2.81 -0.7,-3.82 0.26,-0.63 1.23,-1.27 0.5,-1.95 -0.48,-0.56 -0.7,-1.27 -1.5,-1.47 -0.9,-0.29 -1.99,-1.36 -2.93,-0.65 -1.03,0.93 -2.61,0.14 -3.63,-0.46 -1.39,-1.22 -3.06,-2.05 -4.52,-3.16 -0.14,-0.64 0.04,-1.36 -0.18,-2.01 0.26,-0.67 0.64,-1.39 0.32,-2.14 -0.46,-0.77 -0.27,-1.65 -0.34,-2.48 -0.67,-1.47 -2.82,-0.12 -3.68,-1.29 -0.42,-1.05 0.19,-2.49 -0.93,-3.24 -0.45,-0.58 -0.89,-1.29 -0.84,-2.02 -0.58,-0.55 -1.68,-0.52 -2.38,-0.21 -0.4,0.9 -1.61,1.62 -2.44,0.8 -0.83,-0.16 -1.61,0.86 -1.3,1.66 0.16,0.65 0.15,1.68 -0.74,1.69 -0.9,0.39 -1.54,-0.53 -2.43,-0.47 -0.85,-0.07 -1.72,-0.21 -2.49,-0.62 0.67,-1.13 -0.23,-2.74 -1.37,-3.11 -0.83,0.45 -1.99,0.92 -2.79,0.12 -0.24,-0.12 -0.29,-0.52 -0.63,-0.43 z",
						"department-38" : "m 464.21,344.5 c -2.79,1.9 -2.68,8.48 -7.27,6.99 -0.9,-2.78 -3.83,-2.24 -5.03,-0.76 -2.02,0.29 1.51,1.68 1.08,3.08 2.47,0.08 3.5,3.16 0.44,2.72 -1.73,1.6 -3.23,3.88 -3.85,5.57 -1.57,-1.3 -1.06,1.72 -2.92,0.29 -3.28,-0.47 -4.55,3.17 -7.48,1.48 -1.5,1.31 5.74,3.47 2.07,5.5 -2.26,2.06 -5.1,3.74 -4.23,6.93 0.77,2.57 -0.06,8.04 4.48,6.03 2.27,2 6.34,-5.1 8.45,-0.76 1.77,0.21 1.71,3.96 3.93,1.45 1.68,0.13 -1.09,4.61 1.72,3.03 1.9,0.92 2.02,2.4 0.5,3.24 1.61,2.88 0.73,6.17 -0.85,8.65 1.08,-0.16 3.1,-1.79 4.37,0.45 2.36,0.7 4.24,0.15 6.23,1.33 0.84,-0.27 3.02,-1.03 3.81,-2.77 2.64,0.63 -1.49,2.67 0.72,4.47 0.38,3.59 -0.09,7.56 -0.56,11.3 0.4,1.45 0.41,2.4 -0.01,3.62 1.24,0.79 4,2.16 3.74,0.13 2.61,1.83 4.3,5.05 7.54,4.72 2.17,2.94 5.3,0.26 5.21,-2.58 1.66,1.44 8.14,-0.42 5.75,-2.57 -0.07,-1 2.61,-2.26 3.54,-2.4 2.26,2.99 3.89,-3.83 6.67,-1.32 2.19,0.23 3.45,-0.22 5.31,-1.27 0.97,1.39 3.24,2.32 2.54,-0.45 1.1,-3.23 -1.77,-5.43 -1.86,-8.01 -3.37,1.84 -6.82,-1.82 -3.61,-4.41 -0.13,-1.84 0.52,-3.31 1.32,-4.86 -1.82,-0.13 -3.26,-1.51 -5.13,-0.74 1.43,-2.69 -1.8,-4.98 -0.71,-7.76 -0.38,-2.56 4.12,-3.93 2.03,-6.04 0.5,-3.14 -3.24,-5.89 -6.15,-5.13 -1.66,-1.14 -3.77,-5.23 -5.46,-1.87 -0.31,1.87 -0.63,3.21 -0.4,4.62 -2.15,1.23 -4.77,-3.87 -7.68,-2.52 -0.95,-2.94 -2.79,-6.19 -4.33,-9.02 -1.66,-2.41 -2.31,-5.84 -4.73,-7.23 -0.04,-3.77 -5.4,-5.53 -5.81,-9.3 0.88,-1.39 -2.2,-3.36 -3.39,-3.83 z",
						"department-73" : "m 486.16,340.96 c -0.45,0.45 0.31,1.19 0.03,1.77 -0.43,2.29 -1.49,4.41 -1.88,6.69 -0.26,1.38 -0.01,2.88 -0.3,4.22 -0.62,0.31 0.02,1.17 -0.58,1.57 -0.45,1.17 -1.58,0.73 -2.55,0.64 -0.84,0.07 0.16,1.14 -0.18,1.7 -0.39,0.69 -1.23,1.27 -0.9,2.19 0.16,0.81 -0.73,0.85 -1.28,0.92 -0.46,0.22 -0.52,0.84 -0.99,1.02 -0.1,0.57 -0.89,1.04 -0.26,1.63 0.76,1.32 2.36,2.45 2.11,4.11 0.23,0.33 0.74,0.34 0.74,0.83 0.84,0.69 0.84,1.99 1.51,2.8 0.86,0.69 -0.26,2.79 1.33,2.79 0.69,-0.42 1.75,-0.43 2.21,0.36 0.86,0.8 2.15,0.9 3.12,1.6 0.57,0.15 0.69,0.71 1.06,1.03 0.59,0.02 1.32,-1.15 0.42,-1.31 -0.57,-0.83 0.26,-1.71 0.62,-2.42 0.32,-0.63 -0.18,-1.37 -0.02,-1.93 0.76,-0.47 1.65,-0.69 2.47,-1.04 0.43,0.56 1.01,1.07 1.58,1.38 0.13,0.76 0.39,1.57 1.25,1.79 0.96,0.51 2.24,-0.49 3,0.51 0.5,0.17 1.21,-0.47 1.46,0.31 0.64,1.59 2.48,2.51 2.66,4.29 -0.29,0.15 -0.79,0.54 -0.21,0.73 0.85,0.23 0.12,1.35 0.11,1.91 -0.05,0.98 -1.42,0.76 -1.63,1.63 -0.67,0.52 -0.97,1.32 -0.71,2.16 0.28,0.8 -0.51,1.41 -0.41,2.16 0.41,0.87 0.74,1.73 1.41,2.45 0.62,1.01 -0.59,1.95 -0.5,2.93 0.52,0.56 1.11,-0.22 1.49,-0.5 0.92,-0.1 1.37,0.91 2.13,1.15 0.63,-0.3 1.62,-0.2 1.66,0.68 -0.1,1.41 1.8,2.18 2.81,1.25 0.65,-0.79 1.23,0.33 1.67,0.84 0.46,0.64 0.68,1.43 0.45,2.15 0.54,0.74 1.75,0.36 2.53,0.62 0.86,0.16 1.92,1 2.66,0.13 0.38,-0.92 -0.65,-2.23 0.57,-2.71 0.35,-0.45 0.85,-0.56 1.27,-0.15 0.94,0.49 1.73,-0.4 2.13,-1.14 0.91,-0.24 1.86,0.12 2.72,0.29 0.81,-0.21 1.62,-0.66 2.1,-1.32 0.99,-0.68 2.46,0.1 3.22,-1.02 0.35,-0.43 0.97,-0.89 1.45,-0.3 0.85,0.52 2.11,0.47 2.52,1.51 0.72,0.63 1.87,0.09 2.61,-0.25 0.41,-0.56 -0.74,-1.63 0.24,-1.82 0.89,-0.31 2.18,-0.09 2.35,-1.31 0.28,-0.94 0.93,-1.7 1.94,-1.85 1,-0.19 1.96,-0.56 2.92,-0.94 0.28,0.29 0.54,1.02 1.07,0.58 0.47,-0.87 0.96,-2.03 2.06,-2.12 0.86,-0.78 0.12,-2.12 -0.06,-3.06 -0.11,-0.72 -1,-1.93 0.07,-2.33 0.68,-0.07 0.41,-0.73 0.59,-1.12 0.98,-0.99 1.63,-2.36 1.9,-3.7 -0.59,-0.97 -1.87,-1.22 -2.71,-1.86 -0.94,-0.95 -0.87,-3.04 -2.54,-3.15 -0.56,-0.01 -0.92,-0.42 -0.89,-0.96 -0.58,-0.7 -1.85,-0.56 -2.18,-1.57 -0.64,-1.44 -0.23,-3.2 -1.06,-4.6 -0.34,-1.1 0.49,-2.08 0.76,-3.02 -0.69,-0.83 -1.62,-1.51 -2.76,-1.31 -0.88,0.14 -0.91,-0.82 -1.25,-1.33 -0.99,-0.62 -2.63,-0.33 -3.11,-1.66 -0.83,-0.95 -1.39,-2.07 -1.33,-3.37 -0.05,-0.49 -0.09,-1.83 -0.91,-1.34 -0.91,0.06 -1.72,0.7 -1.99,1.6 -0.42,0.52 -0.86,1.4 -1.45,1.52 -0.4,-0.17 -1.27,-0.31 -0.7,-0.87 0.23,-0.66 -0.51,-1.2 -0.28,-1.88 -0.34,-0.89 -0.91,-2.04 -1.95,-2.2 -0.89,-0.13 -2.19,0.76 -2.83,-0.15 -0.09,-0.52 -0.37,-0.96 -0.88,-1.06 -0.72,-0.81 -1.07,-2.03 -1.15,-3.07 0.63,0.06 1.62,-0.31 1.26,-1.11 -0.35,-1.05 -1.53,-1.04 -2.36,-1.47 -0.67,-0.01 -0.86,0.94 -1.52,1.08 -0.85,0.88 -1.48,2.09 -1.51,3.29 -0.72,0.95 -0.91,2.24 -1.97,2.95 -0.76,0.61 -1.69,1.28 -1.54,2.39 -0.21,0.67 -0.99,1.04 -1.01,1.82 -0.44,0.97 -0.54,2.37 -1.86,2.41 -1.14,0.38 -2.33,0.53 -3.53,0.54 -0.06,-0.45 0.01,-1.66 -0.76,-1.32 -0.31,0.13 -0.76,0.69 -1.03,0.56 -0.25,-0.91 0.24,-2.16 -0.62,-2.79 -0.14,-0.81 -1.14,-1.57 -1.94,-1.34 -0.21,0.5 -0.78,0.26 -1.03,-0.06 -0.76,0.04 -0.24,1.32 -0.76,1.53 -0.34,-0.65 -1.25,-0.37 -1.8,-0.73 -0.47,-0.07 -0.73,0.7 -1.2,0.25 -0.48,-0.36 -1.21,-0.4 -1.7,-0.51 0.01,-0.61 -0.44,-1.04 -0.93,-1.29 0.04,-0.57 0.55,-1.77 -0.49,-1.68 -0.47,-0.1 -0.19,-0.97 -0.81,-1.05 -0.66,-0.37 -1.22,0.91 -1.76,0.14 -0.38,-0.36 -0.12,-1.3 -0.92,-1.18 -1.02,-0.5 -0.45,-1.96 -0.7,-2.86 -0.23,-1.29 -0.31,-2.65 -0.65,-3.91 -0.34,-0.35 -0.97,-0.38 -1.43,-0.38 z",
						"department-74" : "m 522.73,306.41 c -1.97,0.51 -4.09,-0.11 -6.02,0.54 -1.69,0.88 -2.87,2.78 -4.92,2.88 -1.61,0.19 -3.71,0.06 -4.62,1.7 -1.07,1.16 -2.72,2.21 -2.73,3.97 0.1,0.69 1.48,0.71 0.93,1.55 -0.41,0.84 0.21,1.93 0.9,2.4 0.42,0.09 0.95,-0.58 1.26,0.01 0.37,0.53 0.48,1.32 -0.23,1.62 -1.53,1.19 -3.48,2.08 -4.62,3.7 0.15,0.96 -1.06,1.44 -1.7,1.89 -0.92,0.54 -2.12,0.67 -2.99,-0.02 -0.94,-0.11 -1.74,0.7 -2.72,0.57 -1.73,-0.1 -3.26,0.92 -4.93,1 -0.77,0.2 -1.52,0.85 -1.16,1.71 0.19,0.63 -0.32,1.15 -0.97,1 -0.99,0.19 -1.36,-0.93 -2.04,-1.36 -0.25,0.5 -0.16,1.27 -0.57,1.8 -0.32,1.76 -0.11,3.58 -0.18,5.37 -0.05,1.02 1.4,1.33 1.1,2.4 -0.08,0.89 -0.37,2.18 0.97,1.91 0.75,0.22 0.29,1.37 0.52,1.94 0.31,1.44 0.48,2.91 0.5,4.37 0.07,0.67 0.88,0.58 1.19,0.96 -0.06,0.61 0.65,1.43 1.18,0.8 0.34,-0.42 1.1,-0.12 1.48,0.06 -0.19,0.54 0.13,1.08 0.73,0.94 0.45,0.32 -0.03,1.12 0.02,1.58 0.26,0.43 0.87,0.53 0.99,1.06 0.58,0.39 1.43,1.09 2.13,0.73 0.22,-0.52 0.78,-0.22 1.09,0 0.59,0.21 1.53,0.05 1.32,-0.78 -0.01,-0.66 0.68,-0.27 0.9,0.03 0.57,0.28 0.97,-0.69 1.55,-0.21 0.84,0.25 1.11,1.08 1.58,1.67 0.61,0.22 0.16,1.19 0.32,1.69 -0.08,0.68 0.71,0.6 0.85,0.07 0.5,-0.09 1,0.52 0.86,1.04 0.4,0.69 1.5,0.24 2.16,0.27 0.76,-0.24 1.79,-0.22 2.32,-0.85 0.55,-0.82 0.59,-1.89 1.06,-2.69 0.59,-0.47 1.08,-1.17 0.58,-1.84 1.1,-1.12 2.6,-2.01 3.15,-3.59 0.44,-0.46 0.57,-1.04 0.46,-1.64 0.43,-1.24 1.14,-2.4 2.27,-3.1 0.24,-0.19 0.68,-1.23 1.02,-0.66 0.87,0.56 2.4,0.81 2.5,2.07 0.05,0.67 -0.39,0.98 -1.01,0.85 -0.65,0.38 0.05,1.31 0.13,1.86 0.25,0.92 1.4,1.05 1.58,2.03 0.48,0.87 1.65,0.01 2.41,0.12 0.73,-0.31 1.18,0.28 1.5,0.85 0.45,0.56 1.16,1.11 0.82,1.91 -0.09,0.58 0.7,0.95 0.24,1.52 -0.21,0.76 0.9,0.79 1.18,0.23 0.84,-0.71 0.9,-2.01 2.02,-2.43 1.02,-0.06 1.62,-1 1.61,-1.96 -0.09,-1.02 0.58,-2.66 1.85,-2.26 0.39,0.29 1.11,0.3 0.98,-0.35 0.01,-0.41 0.22,-0.99 0.72,-0.64 1.66,0.72 3.32,-0.42 4.67,-1.3 1.07,-1.02 1.17,-2.69 2.2,-3.72 0.24,-1.07 0.13,-2.38 -0.92,-2.98 -0.31,-0.29 0.4,-0.66 0.03,-1.04 -1.08,-1.72 -2.7,-3.09 -3.82,-4.78 -0.93,-0.47 -1.81,1.29 -2.7,0.56 -0.35,-0.84 0.72,-1.72 0.05,-2.53 0.03,-0.72 1.46,-1.61 0.49,-2.23 -0.76,-0.34 -1.61,-0.31 -2.36,-0.72 -0.84,-0.04 -2.06,-0.19 -2.06,-1.31 0.09,-1.22 0.81,-2.32 0.63,-3.59 0.03,-1.74 2.08,-2.69 2.14,-4.38 -0.61,-2.1 -2.81,-3.32 -3.41,-5.34 0.58,-0.82 1.83,-1.33 1.69,-2.56 0.1,-0.89 0.32,-2.26 -0.88,-2.5 -2.33,-0.82 -4.77,-1.84 -7.27,-1.85 z",
						"department-71" : "m 412,260.36 c -2.93,0.55 -4.26,2.21 -6.96,2.68 -1.28,2.48 2.3,4.5 -0.5,6.99 -1.43,0.66 -3.07,3.09 -0.49,1.44 1.9,1.91 -1.31,5.49 2.35,6.61 2.41,2.48 -3.47,2.49 -1.06,5.02 0.77,3.39 -3.9,1.03 -5.18,3.67 -2.25,1.4 -4.63,2.62 -7.04,3.38 -0.31,-4.58 -4.86,-2.18 -7.6,-2.64 0.33,3.18 3.53,4.95 4.3,8.11 0.37,1.27 1.28,3.31 0.8,5.05 2.56,1.6 5.5,0.03 6.06,3.56 2.3,-0.67 6.83,0.19 5.63,3.81 -1.65,2.24 1.1,6.27 -0.41,7.48 -1.83,-0.26 -2.1,1.92 -4,2.06 1.17,2.28 -1.61,6.17 2.72,5.49 0.93,1.98 2.84,2.96 4.81,1.08 2.24,-1.83 4.53,2.66 6.18,-0.34 0.99,0.81 3.97,-0.12 2.52,2.07 1.82,0.5 3.17,-1.98 5.29,-1.84 0.91,-1.94 0.34,-5.84 2.53,-7.3 2.38,-0.25 4.64,4.02 6.14,0.44 0.69,1.02 2.58,2.86 3.18,0.21 1.5,-2.57 5.41,0.79 2.63,2.19 4.35,0.26 -0.17,5.73 3.79,5.35 1.63,-2.32 1.8,-5.62 3.02,-8.28 1.07,-3.54 2,-7.12 3.47,-10.47 -0.24,-4.22 3.76,-4.44 6.12,-2.01 2.73,0.91 5.4,-3.24 7.43,-0.63 0.71,4.46 5.42,3.07 8.23,1.96 3.48,-0.33 -0.18,-2.98 -1.2,-3.64 -0.19,-2.06 -0.14,-4 2.12,-4.12 -1.13,-2.06 2.54,-2.7 0.55,-4.54 0.27,-1.18 -1.25,-2.07 -0.87,-3.37 -1.29,-1.52 -2.14,-2.53 -0.54,-4.28 -1.91,-0.7 -4.07,-3.41 -0.68,-3.56 1.47,-0.64 5.77,0.15 2.85,-1.99 -1.77,-0.79 -1.54,-3.02 -3.84,-2.16 -2.27,0.63 -1.51,-5.03 -4.1,-2.86 0.12,-2.06 -1.07,-4.73 -3.5,-2.61 -2.78,0.86 -4.3,2.07 -6.4,-0.46 -1.94,0.4 -2.39,2.11 -4.89,0.86 -2.61,0.33 -5.24,2.44 -8.14,3.19 -1.76,-0.3 -4.71,2.29 -4.23,-1.06 -3.18,-0.15 -5.08,-3.48 -5.63,-5.52 -2.23,0.19 -4.16,-1.65 -6.41,-2.36 0.94,-2.91 -1.62,-1.37 -2.5,-0.96 0.79,-4 -4.82,-1.4 -5.2,-5.1 -0.71,0.24 -0.8,-0.59 -1.34,-0.6 z",
						"department-03" : "m 355.26,283.59 c -2.47,0.46 -4.86,3.44 -6.02,4.72 -1.76,-0.99 -3.8,2.31 -4.59,-0.78 -1.76,0.08 -2.97,3.69 -5.04,3.94 1.97,2.84 -4.43,0.31 -1.55,2.39 0.4,1.42 -1.37,2.94 0.6,3.99 1.55,3.09 -3.65,5.08 -5.37,3.61 -2.24,1.35 -6.48,-0.24 -7.16,3.06 -1.54,1.23 -3.6,4.68 -1.43,6.74 2.23,0.25 1.54,1.18 0.45,2.24 0.46,1.75 3.06,2.36 3.77,1.35 1.79,0.78 0.58,3.48 2.71,2.33 2.32,1.7 3.03,4.85 4.13,7.52 1.59,1.1 1.36,3.94 4.21,3.81 2.2,-0.4 1.29,-4.32 4.06,-4.34 -0.38,-2.36 1.13,-2.81 2.64,-1.17 2.87,2.05 0.78,-4.7 4.25,-3.15 2.6,-0.56 4.31,1.53 2.01,3.27 -0.51,2.53 2.71,1.85 2.18,4.56 1.6,1.64 4.19,2.18 6.12,1.98 0.53,3.71 5.09,1.32 7.41,2.58 2.46,-0.35 4.25,2.07 6.4,-0.15 2.05,-0.87 3.81,1.48 3.14,3.62 2.97,-0.38 6.89,-1.86 7.42,2.51 1.3,0.31 3.13,3.55 3.29,0.55 1.79,-0.98 4.46,0.16 5.67,-2.24 -1.33,-3.25 -0.2,-6.45 -1.49,-9.65 1.17,-1.65 -1.28,-4.71 -0.7,-6.42 1.4,-0.12 2.34,-1.59 4.2,-1.58 1.27,-1.45 2.99,-2.22 4.25,-3.49 2.82,-0.46 -0.34,-5.16 1.28,-7.19 1.51,-3 -3.08,-4.88 -5.16,-3.65 -1.18,-1.3 -1.26,-3.58 -3.47,-2.38 -1.93,-1.04 -3.95,-1.45 -2.9,-4.14 -1.14,-2.8 -2.34,-5.73 -4.5,-8.23 0.48,-2.03 -3.61,-4.95 -2.1,-1.56 -0.34,1.45 -3.05,0.68 -1.66,2.91 -1.17,0.41 -2.72,0.17 -3.32,2.29 -3.21,0.75 -0.8,-5.19 -4.58,-3.84 -1.04,2.99 -3.56,1.08 -4.7,-0.26 -2.1,1.25 -4.73,3.83 -6.34,0.2 -2.17,-1.67 -4.84,-2.89 -5.84,-5.6 -0.73,-0.27 -1.51,-0.18 -2.26,-0.35 z",
						"department-58" : "m 361.05,231.75 c -1.61,0.98 -3.32,2.58 -5.23,1.22 -1.54,0.66 -5.16,0.31 -5.72,1.84 1.58,2.33 4.2,5.39 3.03,8.27 -0.46,2.34 -4.01,5.74 -0.25,7.04 1.92,1.64 3.66,3.16 3.28,5.91 2.2,3.19 1.4,7.61 2.45,10.69 2.84,1.44 0.59,4.96 1.6,7.25 -1.99,2.66 1.02,5.99 -1.24,8.7 -1.75,2.29 0.81,5.12 3.16,5.53 1.64,1.06 3.28,4.95 5.39,2.27 1.52,-1.93 3.16,-1.38 4.16,0.57 1.96,0.7 3.24,-3.41 4.93,-1.11 0.68,1.01 0.94,1.95 1.13,3.28 1.84,0.37 2.58,-2.94 4.39,-2.04 -0.61,-1.82 -0.49,-2.4 1.36,-2.38 -0.2,-1.17 -0.22,-3.61 1.45,-1.97 2.29,2.03 7.01,-1.91 8.02,2.31 1.41,2.29 3.54,-1.84 5.75,-1.47 1.68,-2.02 4.85,-2.71 6.51,-3.23 -0.22,-2.14 -1.12,-3.85 1.59,-4.65 -0.2,-2.28 -4.24,-3.86 -1.97,-6.79 0.18,-2.41 -4.07,0.3 -1.77,-2.02 2.77,-1.18 2.72,-4.62 1.41,-6.48 -0.21,-2.71 3.29,-1.57 3.61,-3.64 2.41,0.12 4.36,-0.55 4.66,-3.1 0.33,-2.07 -2.28,-4.7 -4.14,-3.18 -2.16,-1.91 1.5,-6.7 -2.23,-6.47 -2.06,-0.11 -3.88,3.63 -5.15,0.03 -0.32,-1.35 -0.05,-4.35 -2.03,-2.79 -1.29,0.05 -2.91,2.04 -2.96,-0.58 1.08,-0.8 1.65,-3.07 -0.35,-2.77 -1.09,1.35 -0.9,4.62 -3.13,2.61 -0.88,-1.42 -3.65,0.48 -4.06,-2.21 -1.01,-1.24 -3.05,-2.54 -4.54,-2.45 -1.62,0.35 -0.42,-3.16 -2.49,-3.09 -1.47,-0.17 -1.9,-4.94 -2.3,-1.85 0.35,2 -0.34,3.67 -2.39,2.1 -2.63,-1.51 -3.86,4.14 -5.82,1.03 -1.87,-1.04 -4.17,1.13 -5,-2 -2.26,0.34 -4.45,-1.48 -4.25,-4 -0.17,-0.32 -0.55,-0.4 -0.88,-0.38 z",
						"department-89" : "m 374.12,178.1 c -1.36,2.82 -5.36,0.91 -7.76,1.83 -2.91,0.12 -7.22,-0.23 -8.27,2.98 0.14,3.17 1.58,6.21 -2.22,8.02 -3.13,1.63 -1.03,2.94 1.17,4.04 2.28,2.02 1.91,5.48 4.92,6.98 0.09,2.23 1.57,5.13 -1.56,6.65 -2.34,1.36 -4.04,3.95 -2.14,6.31 -0.68,1.5 0.04,4.08 -2.76,4.29 -2.25,0.39 -7.34,0.64 -4.79,4.05 2.45,0.93 4.06,4.45 3.33,7.05 1.14,3.61 5.07,3.17 7.39,1.37 1.4,1.71 1.46,5.08 4.64,4.36 1.07,1.7 2.94,2.2 4.19,1.56 2.83,2.78 4.94,-2.42 8.04,-0.36 2.24,0.32 0.05,-5.91 2.11,-2.26 1.33,1.79 2.94,3.05 3.85,4.95 3.33,-1.09 4.42,4.4 7.1,3.73 1.63,0.4 3.4,2.47 3.61,-0.47 1.06,-2.78 3.75,-0.39 1.71,1.41 -0.27,3 5.9,-2.28 4.47,2.93 0.46,3.12 3.19,1.32 4.4,0.59 4.42,-0.6 -2.45,-5.06 1.49,-6.94 2.21,-1.57 -0.41,-5.47 2.78,-6.83 1.14,-2.73 3.9,-5.69 3.26,-8.58 1.88,-0.52 1.26,-1.92 0.64,-3.48 1.6,-1.09 4.66,-1.22 3.88,-4.34 0.07,-2.34 -0.26,-3.73 -2.7,-3.42 -3.53,-2.05 4.19,-4.69 -0.03,-5.12 -1.97,-0.1 -2.62,-5.1 -3.28,-1.27 -2.05,-2.67 -2.92,2.59 -5.45,0.23 -2.35,0.79 -5.27,0.01 -8.15,0.79 0.15,-1.59 0.88,-6.21 -1.65,-3.46 -2.36,-1.38 1.3,-2.55 -1.24,-3.58 -0.94,-2.75 -2.25,-5.79 -4.33,-7.09 0.87,-2.25 -1.27,-2.36 -1.7,-0.43 -3.07,1.65 -2.16,-4.29 -5.46,-2.45 0.07,-1.1 1.54,-2.74 1.12,-4.43 -0.2,-2.34 -3.48,-5.41 -5.2,-7.74 -2.07,-0.04 -3.97,0.46 -4.78,-1.75 -0.22,-0.05 -0.43,-0.1 -0.65,-0.14 z",
						"department-77" : "m 360.11,130.7 c -0.75,1.23 -0.27,2.29 -2.33,1.67 -1.38,-0.38 -1.84,2.1 -2.56,0.07 -2.14,0.21 -4.49,1.91 -6.24,0.1 -2.04,-1.53 -3.2,3.4 -5.16,0.88 -1.56,1.65 -2.68,-3.86 -4.86,-1.22 -1.42,0.6 -1.4,2.29 -1.08,2.9 -0.79,0.91 -3.3,2.12 -0.93,2.41 0.92,1.64 0.15,3.36 1.66,4.95 -0.21,1.86 -2.5,3.75 -0.77,5.03 -0.42,1.69 1.07,3.83 0.45,5.54 1.88,0.5 -0.47,2.18 -0.41,3.35 -1.82,0.99 1.36,3.93 -1.65,3.64 -0.82,0.84 0.31,2.38 -1.22,3.04 1.7,1.22 -0.11,2.87 -0.29,4.11 -0.83,2.76 -0.35,5.7 -0.38,8.61 1.13,0.77 2.32,2.24 0.22,2.19 -1.67,0.77 -3.86,1.83 -3.71,4.1 -3.26,-0.23 0.46,3.05 -0.39,4.73 1.93,0.89 5.35,1.9 4.16,4.93 0.05,1.63 -0.21,2.35 -1.8,2.26 -2.59,2.58 2.06,2.09 3.18,0.95 1.95,0.94 4.16,-0.38 5.89,1.16 1.74,-0.08 3.98,-1.65 3.26,-2.69 2.16,-0.61 3.3,-0.11 2.62,2.03 1.99,0.05 3.64,-2.23 5.85,-2.23 1.28,-2.5 4.18,-3.1 5.17,-5.95 -1.75,-1.86 -0.91,-4.39 0.11,-6.51 2.23,0.08 3.58,-0.87 5.81,-1.29 2.4,1.59 4.47,-0.91 6.89,0.03 1.85,0.05 2.21,-2.32 4.09,-1.22 1.02,-1.56 -1.94,-1.95 -0.46,-3.63 -1.01,-1.71 -0.67,-2.54 1.28,-3.16 -0.64,-1.19 -1.85,-3.14 0.59,-2.27 3.2,-0.16 -0.39,-3.09 2.44,-3.84 0.11,-1.36 2.11,-1.25 2.34,-2.32 -1.35,-1.35 -2.61,-1.35 -4.33,-0.87 -0.83,-1.72 0,-2.93 0.73,-4.28 -0.27,-1.41 0.18,-2.58 -1.57,-2.81 -0.08,-1.26 -2.46,0.08 -1.43,-1.87 0.29,-0.92 3.06,-1.11 0.77,-1.96 -2,-1.6 4.65,-0.07 2.85,-3.04 -0.62,0.26 -2.18,0.96 -1.62,-0.5 -2.19,-0.35 -3.93,-1.72 -3.63,-4.09 -1.91,1.44 -2.54,-0.3 -3.11,-1.76 -2.53,1.6 -2.02,-2.84 -4.2,-3.33 -1.26,-1.06 -2.94,-1.79 -1.15,-3.4 -0.57,-2.97 -1.82,-4.38 -5.07,-4.44 z",
						"department-10" : "m 415.76,157.34 c -2.6,0.51 -5.55,-0.05 -7.71,1.48 -2.64,-2.28 -2.21,2.93 -5.08,1.84 -1.93,0.67 -1.61,4.36 -4.3,3.88 -0.4,1.61 -1.36,1.64 -2.59,1.72 1.3,3.01 -1.42,4.79 -3.84,3.13 -2.09,-1.39 -6.82,1.14 -6.65,-2.55 -0.6,-0.93 -2.3,-0.55 -2.52,-2.29 -2.04,-2.28 -2.83,1.06 -4.5,1.77 -0.06,1.25 0.93,2.82 -1.41,3.08 -3.5,-1.29 1.33,2.83 -1.65,2.81 -1.9,0.54 0.78,2.64 -0.38,3.85 2.1,0.63 -0.62,5.56 2.52,3.51 3.16,-0.12 4.15,3.44 6.03,5.22 0.01,1.47 3.08,2.04 0.93,3.9 2.08,0.85 -3.12,4.07 0.15,3.27 2.29,-0.8 2.03,4.35 4.19,2.52 1.08,-0.14 0.3,-2.78 1.94,-1.13 0.93,0.76 -0.96,2.98 1.14,2.23 2.34,1.66 1.67,5.24 3.89,6.96 2.43,1.45 -2.11,1.84 0.59,3.02 0.73,-0.46 1.14,-2.22 1.92,-0.23 0.37,1.61 -1.44,4.62 1.62,3.35 1.95,0.01 2.99,-0.54 4.79,0.26 0.99,-3.03 2.57,1.82 4.01,-0.76 0.84,-1.92 1.99,-0.84 2.76,-0.15 -0.14,-1.03 0.29,-2.65 1.27,-1.4 -0.33,2.78 3.95,3.53 3.81,0.39 2.92,-0.59 5.93,0.14 8.85,-0.56 2.39,0.31 2.85,-0.77 1.49,-2.56 2.05,-2.2 4.43,-1.32 6.94,-0.84 2.63,-1.11 0.34,-3.51 -1.25,-4.11 2.37,-0.23 3.32,-3.91 6.03,-1.87 3.03,1.11 1.67,-2.97 2.47,-4.56 1.68,-1.76 -0.94,-2.47 -0.07,-3.99 1.1,-2.25 -0.53,-3.76 -1.25,-5.67 2.38,-2.25 -3.94,-1.43 -2.88,-4.17 -1.47,-0.37 -2.51,-0.25 -2.96,-1.8 0.24,-1.72 -4.18,-2.97 -1.75,-4.03 0.72,-2.19 1.43,-3.93 -1.16,-5.04 -2.33,-0.81 -3.68,3.05 -5.35,0.57 -2.15,0.43 -4.7,-0.92 -6.23,-2.52 -2.9,-1.25 -2.44,-3.78 -2.05,-6.39 -0.16,-1 -0.29,-2.51 -1.75,-2.14 z",
						"department-51" : "m 405.08,111.51 c -1.06,0.78 -0.74,4.64 -2.69,2.03 -2.26,-0.62 -3.69,-3.04 -5.85,-0.46 -0.76,1.47 -0.53,3.07 -2.6,1.59 -2.67,0.5 -5.66,1.55 -7.69,3.27 1.02,2.06 1.46,4.73 0.89,6.32 2.55,-0.42 1.18,3.01 3.85,2.11 0.48,4.28 -5.3,-0.05 -6.19,3.06 -0.39,1.65 2.79,4.09 -0.6,4.59 -2.26,3.23 5.49,0.01 3.06,3.78 -2.35,0.83 -2.21,3.44 -4.02,4.55 -0.04,2.3 -3.69,1.38 -3.38,4.24 -1.75,1.12 0.58,4.63 -2.54,3.99 -2.46,-0.16 -1.14,0.3 -0.32,1.22 0.08,0.89 -3.17,1.69 -1.26,2.59 2.53,0.21 3.88,3.9 1.46,5.7 0.25,2.2 1.1,2.12 2.94,1.45 1.92,0.52 2.98,4.27 5.46,4.81 -0.12,4.68 6.56,0.97 8.91,3.79 3.18,-0.68 -0.17,-4.93 3.46,-4.46 0.45,-2.04 3.42,-1.33 3.65,-3.97 0.75,-2.28 4.33,-0.39 4.38,-3.49 1.36,-0.34 2.79,1.39 3.81,-0.56 2.71,0.28 5.46,-1.6 7.64,0.42 0.89,2.81 -1.6,6.2 2.08,7.6 1.6,3.05 5.89,1.61 7.51,3.56 1.84,-1.76 4.32,-2.12 5.98,-0.45 1.91,-1.07 7.38,1.87 5.1,-2.02 -2.42,-2.79 6.05,-2.46 2.44,-5.4 -1.35,-0.11 -4.14,-0.27 -1.58,-1.69 1.66,-0.63 3.72,1.24 5.25,-0.9 2.3,1.31 5.6,-0.99 4.11,-3.45 -1.93,-1.13 -3.33,-3.27 -5.05,-4.35 0.2,-1.89 3.07,-2.43 1.04,-4.46 -0.24,-2.76 1.96,-3.93 4.51,-4.61 2.25,-1.35 -0.39,-2.44 -0.39,-3.09 2.85,-0.57 0.54,-4.33 -1.51,-2.09 2.09,-1.98 1.44,-5.68 -0.12,-8.2 -0.96,-1.63 -1.81,-3.48 0.73,-4.04 -0.24,-1.82 -2.4,-2.81 -3.5,-3.66 -2.15,0.23 -1.49,3.78 -3.82,1.54 -2.45,0 -5.77,-1.84 -7.92,0.23 -2.68,0.36 -2.07,-5.98 -5.47,-3.2 -2.64,0.89 -6.12,0.77 -7.24,-2.32 -2.8,0.56 -4.24,-2.36 -6.09,-4.01 -2.61,-1.4 -5.28,-1.58 -8.44,-1.57 z",
						"department-02" : "m 388.2,68.13 c -1.08,1.13 -2.82,3.24 -4.4,1.16 -2.84,-2.2 -4.67,3.68 -7.97,1.02 -2.67,-1.47 -4.82,2.26 -7.41,-0.08 -2.13,-0.29 -5.92,2.27 -2.52,2.96 -2.98,2.53 -3.74,6.36 -5.63,9.48 -1.75,0.96 2.24,2.4 -0.4,3.91 1.95,1.43 2.51,4.94 2.65,7.7 -1.5,0.24 -0.31,2.46 -1.01,3.2 2.8,2.14 0.67,5.53 0.21,7.42 1.3,1.39 -0.62,2.75 2.02,3.19 1.86,2.58 -4.01,-0.19 -2.57,2.99 0.21,2.78 -1.91,6.35 -4.84,5.03 -3.19,2.38 3.18,2.33 1.82,4.68 0.73,2 -0.93,3.6 1.68,4.15 1.16,1.34 2.5,-0.57 2.39,2.15 3.19,1.07 -5.03,3.79 0.04,3.92 2.54,0.03 3.91,4.01 2.15,5.73 2.04,1.28 3.84,3.72 5.3,5.32 1.97,-1.81 1.27,4.11 3.47,1.27 1.13,0.14 0.62,4.1 3.08,3.73 1.02,1.15 2.26,2.18 2.67,-0.16 1.3,-1.34 1.82,-3.4 3.99,-3.73 1.01,-2.49 2.46,-4.36 4.65,-6 0.1,-2.93 -6.07,0.28 -3.5,-3.33 4.06,-0.79 -1.61,-3.63 1.16,-5.63 1.74,-0.53 6.13,1.2 5.33,-1.72 -2.24,0.27 -1.72,-2.21 -3.92,-2.36 2.32,-2 -2.35,-5.73 0.53,-7.34 2.85,-0.42 5.37,-3.57 8.29,-1.65 -0.29,-1.73 3.19,-4.87 4.55,-2.85 1.43,0.76 4.63,3.46 4.24,0.06 0.75,-1.54 -0.52,-3.16 0.75,-4.21 -1.86,-2.09 0.18,-3.94 0.86,-5.41 -1.97,-0.87 0.95,-3.51 -1.67,-4.78 -1.57,-3.69 5.08,0.31 4.01,-3.96 1.21,-2.05 5.54,-3.68 5.14,-6.49 -2.5,-0.39 -0.05,-2.22 -0.82,-3.84 1.25,-2 2.5,-4.89 -0.05,-6.15 1.79,-3.26 -2.77,-4.61 -5.35,-3.57 -2.14,-1.09 -7,-0.34 -5.08,-4.21 -1.57,-0.94 -4.83,3.39 -5.36,0.08 -2.78,-0.3 -5.86,-1.9 -8.53,-1.67 z",
						"department-59" : "m 335.57,0.12 c -3.45,1.43 -6.99,2.74 -10.76,2.39 -2.72,1.29 -8.66,1.44 -9.11,3.85 2.44,2.79 3.25,6.62 4.77,9.94 0.43,4.77 5.56,3.66 8.58,4.42 2.32,1.45 -4.63,1.65 -1.51,3.98 2.44,0.67 -1.2,3.42 2.07,2.61 2.93,3.85 6.72,1.92 9.95,3.5 2.19,-0.65 4.1,-0.87 5.68,0.87 0.41,-1.85 2.1,-1.38 0.62,-3.01 2.05,-2.57 7.25,2.09 2.69,2.82 -1.83,1.68 0.07,3.54 -0.61,5.52 2.34,0.14 3.9,-1 3.93,1.59 2.5,-1.01 7,0.2 5.64,3.54 1.27,0.39 3.92,-0.75 2.32,1.89 -3.74,0.21 -4.27,4.12 -0.66,5.49 2.67,1.86 -0.52,2.17 0.31,4.28 2.66,0.03 5.42,1.44 5.6,3.59 -3.49,-0.01 -0.66,2 -1.8,3.32 -2.94,0.76 0.82,2.08 -1.93,3.52 1.19,2.22 -2.19,4.81 1.75,6.08 2.76,1.37 5.33,-1.11 8.08,0.5 2.78,-2.8 7.12,1.76 9.94,-1.66 1.88,-2.21 4.77,3.11 6.2,-0.72 3.06,-1.45 6.64,0.94 9.78,1.44 0.46,3.12 6.54,-3.53 4.81,1.34 0,2.28 5.16,2.43 7.07,2.12 1.13,-1.37 -0.83,-4.12 2.33,-4.63 2.68,-0.88 0.57,-5.07 -0.84,-5.54 -3.3,1 -0.12,-4.14 0.06,-5.58 2.39,-1.25 2.41,-3.76 -0.41,-4.14 -0.6,4.11 -2.68,-3.09 -5.06,-3.38 -1.96,-3.39 -6.66,2.37 -9.45,-1.06 -3.02,-1.09 -5.18,0.58 -6.36,2.66 -3.42,-1.36 -0.95,-6.36 -2.22,-9.19 -1.09,-3.5 -4.72,-3.12 -7.3,-3.15 1.15,-5.24 -5.66,2.5 -7.97,-1.03 -3.9,-1.63 -1.34,-6.5 -3.82,-9.41 1.83,-3.67 -3.12,-4.71 -3.84,-8.29 -2.91,-1.52 -7.12,1 -10.06,2.09 -0.33,4.97 -4.26,1.63 -6.9,0.96 -1.64,-3.04 -3.74,-6.42 -7.35,-5.98 -1.29,-2.74 -2.17,-6.28 -0.14,-8.73 -2.25,-2.77 -2.84,-5.71 -4.09,-8.81 z m 28.08,54.5 0.01,0.01 -0.01,-0.01 z",
						"department-62" : "m 313.33,5.46 c -4.94,0.63 -9.82,2.03 -14.3,4.19 -2.31,2.03 -4.44,4.39 -7.41,5.25 0.4,3 1.9,6.23 -0.01,9.07 -1.39,2.89 0.06,6.1 -0.08,9.15 0.12,1.92 1.85,2.89 0.02,4.03 0.23,3.04 -1.19,6.37 -0.33,9.17 2.74,1.63 4.65,4.95 7.93,2.3 3.81,-2.29 6.82,4.56 9.77,1.72 1.01,1.14 -1.99,2.68 0.88,2.9 2.1,1.36 5.3,1.26 4.69,4.15 0.88,1.54 2.94,0.71 3.92,1.37 1.81,-1.07 3.99,-1.33 5.74,-1.4 1.16,1.12 1.77,-0.42 1.57,-0.98 1.33,-0.36 1.77,3.47 2.74,0.75 1.51,-1.51 6.22,0.91 4.51,2.46 -2.54,0.07 -6.33,4.05 -3.27,5.63 1.73,2.15 1.55,-3.53 4.22,-2.43 1.09,-0.01 1.95,2.52 2.26,-0.06 2.83,-0.7 -0.14,2.46 2.59,2.02 1.28,-0.01 4.09,2 4.68,1.23 -1.22,-1.42 0.73,-3.47 2.15,-1.5 3.8,-0.04 -3.11,6.76 1.65,4.07 2.16,-2.39 3.64,-1.2 4.04,1.36 2.23,-1.54 4.16,-0.79 6.67,-1.69 1.7,0.68 3.25,0.84 2.92,-1.52 2.01,-0.93 -0.86,-3.26 1.69,-4.17 -3.08,-1.56 3.06,-1.88 0.19,-3.89 0.22,-1.46 4.13,-1.5 1.13,-2.69 -0.34,-2.78 -7.17,-0.62 -4.12,-4.27 0.8,-2.23 -5.36,-4.49 -3.06,-6.23 1.03,-0.79 5.01,-2.22 2.55,-3.36 -2.01,2.19 -1.83,-1.12 -1.83,-2.28 -1.69,-2.27 -3.83,-0.79 -5.87,-1.11 1.15,-3.86 -4.88,0.62 -3.97,-3.05 1.99,-1.08 -1.84,-2.64 0.61,-4.04 1.4,-1.06 3.51,-1.23 1.17,-2.9 -1.51,-1.43 -4.89,0 -2.23,1.47 -1.85,-0.59 -1.52,3.3 -3.1,0.89 -1.9,-1.78 -4.14,1.01 -6.2,-0.92 -1.66,1.28 -2.66,-1.12 -4.47,0.08 -1.69,-1.59 -4.29,-2.33 -5.63,-3.51 2,-1.35 -3.65,-3.85 0.56,-4.64 3.01,-2.03 -3.3,-1.35 -4.61,-1.78 -3.99,-1.02 -3.27,-5.59 -5.16,-8.44 -1.11,-2.34 -2,-6.31 -5.19,-6.38 z",
						"department-08" : "m 440.07,60.88 c -1.81,2.16 -4.2,3.74 -5.88,5.87 0.42,3.23 -0.62,6.85 -4.6,6.61 -2.61,1.4 -5.4,3.78 -8.53,2.23 -2.57,-0.31 -6.87,-3.07 -8.21,0.49 -1.09,2.27 2.57,2.05 1.26,4.47 -0.9,1.91 -2.03,4.96 -1.4,6.42 2.68,1.57 -1.58,4.47 -2.94,5.51 -2.03,1.01 -1.06,5.37 -4.36,3.7 -3.54,0.85 2.51,3.79 -0.29,5.51 1.51,0.87 0.58,2.56 -0.65,3.44 -0.53,1.71 1.98,3.37 -0.03,4.16 0.01,4.05 5.16,0.95 6.98,2.81 3.3,0.55 4.18,4.27 7.37,4.91 1.8,0.07 3.13,4.15 6,2.59 2.07,-0.07 4.96,-2.29 5.47,0.74 0.38,2.71 2.61,2.41 4.09,0.8 2.57,1.18 5.4,0.24 7.56,1.64 0.31,-2.7 3.11,-2.45 4.13,-0.68 1.4,-1.13 3.89,-1.64 4.64,-3.09 -2.15,-1.79 -0.62,-5.71 2.04,-5.88 0.24,-1.22 -1.21,-1.95 0.54,-2.89 0.24,-2.32 -1.77,-3.52 -2.04,-5.72 1.86,-0.63 0.83,-2.98 2.1,-3.97 -0.49,-2.87 2.16,-0.91 2.97,0.03 2.69,-1.68 3.87,3.39 6.05,0.41 0.28,-2.43 4.57,-1.6 3.3,-4.01 -0.97,-0.75 -4.08,1.55 -3.04,-1.15 1.75,-1.77 -2.34,-4.79 -3.97,-3 -1.63,-0.09 -2.52,-1.03 -3.35,-1.82 -2.04,-0.2 -1.16,-4.65 -4.28,-3.56 -2.09,-0.97 -3.75,-3.12 -6.22,-1.46 -1.91,0.12 -3.56,-0.3 -2.44,-2.42 -2.07,-2.68 2.55,-6.08 -1.42,-8.03 -4.13,-0.79 1.05,-4.77 -0.06,-7.24 0.2,-2.35 3.01,-3.4 2.16,-5.95 -1.43,-0.71 -2.14,0.48 -2.93,-1.47 z",
						"department-55" : "m 466.47,97.47 c -1.56,1.83 -3.96,2.91 -5.49,4.69 -1.73,-0.62 -3.36,-2.29 -5.13,-1.66 -3.57,-3.74 -2.07,3.57 -4.83,4.43 1.86,1.88 2.97,4.89 1.69,6.85 0.61,2.43 -4.88,3.04 -2.52,6.02 2.38,3.31 -6.19,2.92 -2.28,6.6 -4.21,1.78 0.99,5.9 0.55,8.83 -0.1,1.57 -1.24,3.24 0.94,2.92 1.75,1.64 -1.92,3.15 0.48,3.93 0.25,3.59 -6.19,2.07 -5.18,5.89 1.08,1.97 -0.23,3.47 -1.14,4.72 1.38,2.47 5.49,3.27 5.15,6.61 0.23,1.76 -1.52,5.98 0.78,6.29 1.9,-2.79 1.64,2.85 3.89,1.37 2.31,2.74 5.53,4.67 8.96,5.55 2.27,1.43 4.35,3.02 5.92,5.23 2.69,2.59 4.85,-1.27 7.77,-0.65 1.95,-0.75 1.99,-2.61 4.21,-1.43 3.14,0.06 4.5,-5.18 1.4,-6.29 -3.87,-2.46 6.35,-3.69 1.46,-4.42 -1.47,-2.21 0.74,-5.44 -1.65,-7.38 0.52,-3.01 3.49,-5.5 2.03,-8.71 1.74,-1.41 -2.37,-3.07 0.56,-4.22 1.59,-0.69 4.2,-1.75 1.55,-3.18 -1.32,-1.7 3.57,-5.15 -0.4,-5.57 1.51,-1.93 -0.24,-3.53 -1.91,-2.99 -2.09,-1.69 1.38,-6.16 -1.64,-5.8 -0.54,-2.63 -0.07,-4.79 1.7,-6.78 -2.19,-0.64 -1.63,-2.43 -1.84,-4.23 -1.39,-1.72 -2.89,-6.03 -5.8,-3.74 -2.4,-0.05 -3.98,1.51 -4.61,0.54 -0.96,-0.51 -0.02,-0.62 -1.25,-1.61 0.46,-1.47 -0.85,-2.06 -0.1,-2.7 -0.17,-2.17 1.28,-0.21 0.11,-1.81 -0.06,-2.69 -0.83,-5.88 -3.37,-7.28 z",
						"department-54" : "m 483.26,101.56 c -1.75,2.39 -6.72,-0.76 -7.03,2.38 -2.62,-1.44 -7.36,1.12 -6.17,4.43 0.74,4.88 5.26,0.58 8.1,1.48 2.96,1.01 3.57,5.58 4.1,7.38 3.12,1.31 -1.93,3.72 -0.52,5.95 -0.87,2.35 2.62,1.44 1.12,3.56 0.09,2.56 -0.17,4.4 2.68,4.39 0.95,1.44 -0.85,2.5 1.32,3.1 0.08,2.43 -2.65,4.77 0.06,6.73 -1.86,1.53 -5.42,2.68 -2.94,4.96 -0.32,3.14 0.42,6.53 -2.29,8.78 0.3,2.26 1.85,3.57 0.92,5.93 -0.21,2.42 4.1,2.54 0.74,3.73 -2.75,0.52 -2.79,3.37 -0.09,3.76 0.33,2.01 0.1,5.32 3,2.95 5.39,-1.2 1.3,5.69 5.29,7.31 -0.38,3.55 5.14,2.54 6.11,0.87 0.8,0.45 2.56,2.67 3.02,-0.32 0.4,-3.41 3.98,0.7 5.58,-2.34 2.07,-1.7 2.85,1.78 5.26,0.83 2.41,0.96 5.78,-1.97 8.72,-1.33 -0.11,-2.51 2.69,-4.44 3.49,-1.11 1.87,2.12 5.7,3.02 8.46,2.03 1.11,-2.51 3,0.55 4.43,-2.06 1.4,-3.3 8.67,-2.58 5.72,-7.33 -1.28,-1.26 -2.12,-2.52 -2.84,-3.74 -2.12,0.62 -3.12,-2.23 -5.19,-0.6 -3.43,-1.47 -6.2,-3.18 -9.79,-3.87 -0.04,-2.22 -3.9,-2.63 -5.43,-4.68 -2.97,-0.67 -5.52,-2.5 -8.38,-2.2 -1.35,-2.37 -4.49,-3.45 -2.73,-6.5 1.93,-3.82 -4.9,-3.21 -7.26,-3.68 -1.33,-1.55 -2.62,-2.04 -4.55,-3.04 0.53,-3.54 -7.57,-4.55 -4.54,-8.33 3.1,1.07 1.22,-3.19 3.24,-3.88 -1.85,-1.34 -2.22,-2.92 0.05,-3.88 0.24,-1.64 -0.87,-4.88 -1.53,-5.53 -2.45,-0.97 -0.9,-3.36 -2.63,-4.79 -0.94,-2.62 2.2,-6.94 -2.47,-7.44 -1.91,-1.02 -2.61,-3.63 -5,-3.91 z",
						"department-57" : "m 503.4,104.95 c -3.5,0.04 -5.26,4.42 -8.98,3.78 -1.89,-0.4 -2.66,-4.83 -4.84,-2.71 4.17,0.85 -0.69,5.81 2.03,8.08 0.95,1.12 1.47,1.12 0.16,1.85 2.72,1.47 3.97,5.18 2.78,8.12 -3.16,1.23 2.9,3.39 -0.76,4.28 0.68,2.17 0.05,3.22 -2.29,2.94 -2.22,3.61 4.41,3.78 4.47,6.79 0.32,2.5 4.34,1.92 4.61,4.09 2.63,0.22 7.9,-0.18 8.05,3.09 -1.51,2.09 -1.02,3.76 1.16,4.61 -0.07,2.41 2.71,3.1 4.16,2.64 2.31,1.86 5.93,1.31 7.61,4.01 3.25,1.89 6.08,3.97 9.68,5.11 1.62,1.34 4.4,1.49 5.37,1.07 1.15,1.63 4.32,0.61 3.99,3.06 2.04,2.55 6.14,5.26 8.81,1.93 1.69,-2.04 5.6,-6.38 2.03,-8.09 -0.63,-2.26 4.24,-5.88 0.71,-8.42 -2.28,-1.08 -5.5,-4.67 -6.48,-0.31 -1.32,2.17 -2.68,0.9 -2.94,-0.66 -3.5,-1.06 4.07,-2.79 -0.09,-3.01 -2.21,-1.11 -5.81,-2.3 -5.04,-4.57 1.13,0.06 2.3,-2.29 3.7,-2.54 0.74,-1.99 0.82,-7.28 3.45,-6.47 0.09,2.59 1.3,4.57 3.75,4.84 3.24,0.28 5.22,3.37 8.36,2.73 2.95,-1.6 5.64,0.34 8.22,0.72 1.73,-1.99 3.39,-5.75 3.26,-7.88 -3.15,-1.08 -5.79,-2.77 -6.37,-6.36 -2.47,-1.1 -4.98,-1.26 -6.78,1.45 -3.22,2.32 -7.72,1.44 -11.17,-0.38 -0.64,3.79 -3.96,0.62 -3.06,-1.79 -1.61,-2.56 -5.77,-3.52 -8.36,-2.33 2.56,4.39 -5.29,4.06 -5.55,1.2 0.78,-2.3 -2.24,-2.11 -2.29,-4.46 -1.24,-2.84 -6.04,-4.38 -3.87,-7.88 -2.52,-2.26 -3.82,-6.64 -8.27,-6.11 -4.17,1.53 -5.59,-3.04 -9.23,-2.45 z",
						"department-67" : "m 544.44,133.33 c -2.55,1.2 -1.86,5.34 -3.54,7.57 -2.79,-0.45 -3.98,5.32 -0.38,4.93 0.87,1.03 5.75,1.83 2.14,2.53 -1.78,1.5 1.91,2.4 0.8,3.44 3.07,0.38 2.8,-5.61 5.59,-2.68 1.27,0.5 2.75,1.06 3.36,2.31 3.21,1.88 -0.45,5.47 -1.04,7.67 0.4,1.75 3.37,1.12 1.47,2.94 -0.9,2.92 -2.34,6.34 -5.54,7.14 -1.52,-0.27 -6.22,0.31 -2.38,1.08 1.92,0.81 -2.32,1.02 0.26,2.27 -0.26,2.11 -1.22,5.21 -0.98,7.34 -1.59,2.69 3.49,1.95 4.06,2.53 1.12,2.38 5.28,1.06 5.74,4.01 2.04,-0.84 -0.91,2.57 1.9,1.72 3.01,0.58 6.32,2.58 6.2,5.56 1.67,1.12 3.39,4.4 5.2,1.29 0.87,-3.2 3.75,-5.3 4.22,-8.66 0.15,-2.7 3.74,-3.64 2.22,-6.76 -0.27,-3.01 1.17,-6.05 2.5,-8.7 1.39,-2.29 -0.7,-5.94 1.56,-8.31 1.96,-2.54 5.71,-3.61 6.25,-7.2 0.97,-1.38 2.5,-0.59 3.09,-2.39 3.71,-1.2 3.61,-5.01 5.11,-7.95 0.24,-2.03 5.28,-4.42 1.59,-4.91 -3.51,-0.14 -6.34,-2.15 -9.28,-3.81 -2.69,-1.53 -5.76,0.29 -8.43,-1.4 -2.54,1.19 -6.23,-0.86 -8.22,1.79 -0.69,2.41 -2.45,7.76 -5.69,4.83 -2.43,-2.51 -5.76,1.35 -8.43,-0.25 -1.12,-1.59 -3.01,-2.5 -4.57,-2.09 -2.06,-1.13 -5.18,-2.13 -4.56,-5.04 0.33,-0.23 0.21,-0.84 -0.21,-0.81 z",
						"department-88" : "m 543.7,170.72 c -3.31,1.38 -6.33,2.9 -8.64,5.73 -1.29,0.67 -1.97,-1.71 -3,0.67 -1.48,2.53 -4.46,-1.14 -6.53,-0.37 -3.07,0.39 -1.42,-5.29 -4.45,-2.86 -1.72,1.06 0.93,4.33 -2.07,2.2 -1.78,0.74 -4.05,0.76 -5.72,1.72 -1.57,1.83 -1.69,-1.56 -3.59,-0.23 -1.77,0.14 -2.17,-3.2 -3.48,-0.63 -1.05,2.66 -5.79,-1 -5.2,1.97 -0.89,2.75 -2.59,1.71 -3.28,0.37 -0.1,2.4 -3.59,0.58 -5.16,1.87 -1.7,-0.72 0.13,-3.65 -2.1,-3.15 -3.28,-1.76 1.05,-7.74 -3.76,-6.9 -1.91,1.57 -3.93,0.03 -4.94,2.56 -1.62,0.54 -3.6,-1.45 -4.31,0.83 -0.98,2.28 -4.98,-0.54 -5.76,2.63 -1.49,-1.12 -4.76,0.24 -4.44,1.84 2.72,-0.76 -1.5,4.16 1.48,2.83 2.58,-2.8 4.27,0.92 5.47,2.86 0.99,2.29 2.44,-0.84 3.66,1.62 0.19,1.46 -0.14,2.91 2.21,2.73 1.05,0.81 2.84,3.4 0.16,2.99 -1.16,2.1 -0.8,4.9 -2.74,6.18 0.01,1.72 3.18,0.08 3.76,2.45 2.71,0.96 3.73,3.61 3.02,6.15 1.1,2.31 3.31,-2.88 3.5,0.86 1.43,3.89 3.56,-4.88 4.18,-0.76 -1.87,1.59 0.22,2.12 0.99,0.26 2.44,-0.34 2.63,-4.83 6.01,-3.79 2.78,-2.08 1.94,3.16 3.04,3.81 1.67,1.1 3.1,2.11 4.88,0.16 2.8,0.02 6.14,-1.3 7.82,1.99 0.57,3.89 4.42,1.42 5.62,-0.82 2.89,-1.35 3.54,3.7 6.5,4.05 2.19,0.9 3.46,2.55 5.11,3.85 2.21,-0.74 5.19,-1.96 3.36,-4.73 1.56,-1.66 0.35,-4.44 1.89,-6.56 0.98,-1.7 3.7,-2.62 3.88,-5.25 1.52,-1.58 3,-3.43 1.6,-5.14 1.49,-2.96 3.07,-5.84 4.54,-8.75 0.95,-1.35 2.26,-2.99 0.28,-4.02 -1.87,1.29 -5.67,-0.97 -2.92,-2.78 -2.18,-1.78 1.85,-5.54 -0.21,-7.07 -0.57,-0.2 -0.01,-1.38 -0.66,-1.38 z",
						"department-52" : "m 446.82,158.96 c -1.69,0.91 -3.13,-0.45 -4.82,1.2 -1.12,-0.83 -4.57,-0.69 -3.54,0.9 2.8,-1.2 4.68,3.32 1.31,3.37 -2.26,0.28 -2.04,1.83 -1.08,2.97 1.74,4.14 -5.82,-1.2 -5.38,2.99 -0.5,1.16 -1.78,3.02 -1.22,3.88 2.37,0.94 2.16,4.62 5.26,4.46 -0.97,2.99 5.41,1.68 2.86,4.7 2.62,1.68 0.37,4.97 1.38,6.77 1.02,1.49 -1.35,3.52 -0.54,5.29 0.17,4.44 -5.3,-1.1 -6.39,2.93 -2.48,1.02 2.31,2.62 0.41,4.4 1.49,1.78 5.61,0.36 3.83,3.87 2.37,-0.59 4.42,1.86 1.79,3.34 0.65,2.75 2.75,-2.78 3.64,0.5 0.65,2.55 3.6,4.14 3.33,6.7 -1.31,0.89 -4.49,2.9 -1.32,2.84 1.47,1.51 -1.34,5.58 1.92,4.46 1.63,-2.16 2.42,0.63 2.94,1.7 1.79,1.42 3.81,1.4 4.82,-0.8 0.79,0.32 -0.13,2.53 1.75,2.49 0.96,1.39 3.18,1.14 1.74,3.15 0.89,2.65 3.78,-3.01 5.24,-0.13 1.75,-1.89 1.15,-6.06 4.57,-5.11 1.28,-1.4 3.49,1.3 4.33,-1.4 1.59,-1.92 1.63,2.72 3.95,1.22 2.18,-0.12 2.71,-1.17 2.09,-3.01 0.93,-1.34 1.22,-2.86 -0.38,-3.56 -0.59,-2.58 1.37,-2.98 3.06,-3.3 -0.71,-3.1 2.46,-1.42 3.57,-1.95 -0.16,-2.01 1.36,-3.53 2.99,-3.36 -0.29,-2.42 -2.17,-4.47 -4.19,-2.78 -1.26,-1.95 0.41,-5.52 -3.04,-6.35 -1,-1.34 -2.58,-2.41 -4.02,-2.13 -1.13,-1.43 1.6,-1.92 0.97,-3.42 1.1,-1.79 0.88,-4.33 2.89,-4.52 -0.46,-2.76 -4.86,-1.71 -3.68,-4.79 -1.34,-2.4 -3.06,0.93 -3.95,-2 -1.16,-2.97 -3.69,-4.38 -6.2,-2.11 -0.59,-1.91 1.12,-3.24 -1.32,-3.92 1.85,-0.41 3.47,-2.52 0.93,-3.26 -0.38,-1.87 -1.16,-2.02 -2.78,-2.58 -1.73,-3.16 -6.41,-1.82 -8.19,-4.99 -2.15,-0.46 -2.78,-2.81 -5.04,-3 -0.12,-2.21 -1.01,-1.61 -2.26,-0.66 -2.79,-0.35 1.41,-5.66 -2.22,-4.93 z",
						"department-70" : "m 499.88,202.89 c -2.63,0.3 -4.89,2.11 -5.97,4.12 -0.94,0.91 -3.97,2.32 -2.12,-0.03 0.13,-1.92 -1.88,-0.34 -1.76,0.64 -1.02,1.34 -0.98,3.88 -3.06,3.55 -0.55,1.66 -1.23,4.46 -3.43,2.67 -1.42,0.7 -1.13,3.58 -3.32,2.54 -2.26,2.15 1.83,3.96 -0.2,6.21 1.24,3.12 -4.32,4.77 -5.32,1.82 -0.58,-0.92 -2.73,2.87 -4.37,1.01 -1.22,1.14 -4.49,-0.07 -3.8,2.59 -2.11,1.09 0.1,3.94 1.06,1.41 2.21,-1.57 4.14,3.91 2.96,5.69 -0.66,2.07 -2.95,2.72 -4.23,3.24 1.21,1.06 -1.76,2.05 0.86,1.83 2.25,0.29 -0.16,6.1 3.34,4.24 1.79,2.16 -1.88,5.33 1.36,5.71 1.44,2.16 3.91,4.38 6.57,2.71 2.27,-0.86 4.59,0.16 6.71,-1.75 2.79,-1.14 5.72,-4.18 8.47,-2.76 2.5,-0.09 4.56,-1.97 5.85,-3.76 1.83,0.46 2.61,-0.36 2.86,-1.77 2.63,-0.46 5.27,-1.6 5.54,-4.7 2.29,-1.29 5.83,-3.32 7.88,-0.71 1.23,-0.95 5.65,1.5 4.64,-1.81 -0.18,-2.44 4.57,1.54 3.74,-2.01 -0.12,-2.68 3.06,0.48 4.42,0.6 2.85,1.79 2.94,-3.34 1.04,-4.6 1.68,-2.26 -0.76,-5 -0.83,-7.47 -0.79,-2.86 4.43,-4.21 1.79,-6.71 -2.08,-2.66 -6.24,-2.87 -7.71,-6.14 -2.5,-2.92 -3.93,3.02 -6.8,2.39 -1.62,-1.8 -2.57,-4.88 -5.66,-4.53 -2.96,-0.21 -6.08,3.12 -8.15,0.41 -2.4,-0.51 0.23,-4.03 -2.37,-4.63 z",
						"department-21" : "m 430.26,202.39 c -2.98,-0.36 -2.28,3.5 -2.89,4.09 -3.52,0.85 -7.72,-0.28 -10.91,1.13 0.12,1.91 0.16,3.7 -1.78,4.39 -1.43,2.57 2.23,2.59 2.78,2.96 0.78,2.82 0.56,7.26 -3.23,7.04 -0.11,2.16 1.99,3.62 -1,3.9 0.72,2.94 -2.41,6.52 -3.86,9.44 -2.44,2.06 0.03,6.34 -3.4,7.86 -0.01,1.52 1.54,3.57 2.08,4.44 2.08,-1.74 -0.71,3.97 0.05,5.35 0.76,2.06 4.84,0.48 4.74,3.88 -1.32,3.42 1.69,6.38 5.01,6.9 1.3,1.42 0.65,2.78 2.51,1.23 2.03,0.22 0.19,2.75 2.63,2.77 2.7,1.39 5.44,1.37 6.15,4.62 1.34,1.99 4.7,1.98 4.57,4.24 2.88,-1.34 6.42,-1.22 9.16,-3.33 2.31,-0.8 6.07,-0.86 8.14,-1.17 2.91,2.58 6.21,-1.12 9.25,-0.89 2.24,-0.61 1.63,-2.43 0.75,-3.34 1.62,-2.89 6.07,-2.65 6.78,-6.47 1.41,-2.73 2.01,-5.54 2.73,-8.48 0.14,-1.92 1.96,-2.74 -0.25,-3.51 0.43,-2.24 1.54,-5.31 -1.69,-5.06 -0.44,-1.89 -1.3,-4.9 -2.86,-4.55 0.22,-3.37 5.14,-1.91 4.96,-5.91 0.76,-2.96 -2.67,-7.08 -4.51,-2.82 -2.22,-0.25 -3.54,-1.43 -5.3,0.74 -2.39,1.02 -0.78,-3.81 -3.53,-3.94 -1.77,-1.18 -0.62,-3.19 -2.39,-0.9 -3.64,2.12 -4.58,-4.93 -7.28,-2.21 -2.89,-0.45 0.78,-4.91 -3.01,-5.07 0.9,-1.64 5.08,-3.23 1.85,-5.04 -1.35,-1.96 -2.46,-6.59 -4.91,-3.77 -2.57,-0.44 2.15,-3.15 -0.94,-3.86 -1.96,-0.39 -2.06,-0.68 -1.78,-2.38 -2.58,-1.59 -5.78,-1.16 -8.59,-2.28 l 0,0 z",
						"department-25" : "m 524.75,232.72 c 0.6,3.47 -5.06,1.11 -4.41,4.65 -1.59,0.18 -4.21,0.28 -5.1,0.07 -2.83,-2.93 -7.31,0.27 -8.34,3.45 -1.29,2.51 -4.23,1.18 -5.23,3.59 -1.44,0.48 -2.41,0.42 -2.71,1.78 -2.17,0.44 -3.6,3.16 -6.39,2.02 -3.22,-0.12 -5.72,2.6 -8.74,3.57 -3.03,0.32 -3.9,3.34 -1.23,5.03 3.1,1.51 4.18,4.87 1.57,7.47 0.1,1.6 -1.31,3.03 -1.29,4.53 1.26,1.41 2.75,-3.16 3.11,0.11 0.9,2.49 4.55,-0.29 4.63,2.13 3.8,0.81 1.81,4.9 4.19,7.22 0.91,2.91 5.17,1.46 6.56,4.25 3.53,2.93 0.14,6.33 -2.84,7.54 -1.4,1.89 0.42,3.62 -1.39,5.19 -0.75,2.81 3.69,5.73 3.76,1.72 2.39,-2.03 4.37,-4.58 7.12,-6.18 2.26,-1.76 5.45,-2.91 6.57,-5.72 -0.74,-2.93 1.48,-6 -0.08,-9.15 0.11,-4.19 6.86,-3.29 9.42,-5.9 2.72,-1.98 2.28,-6.41 5.92,-7.6 2.76,-2.22 4.53,-5.44 7.39,-7.56 -0.61,-3.67 3.46,-4.22 4.78,-6.73 -0.15,-3.82 -4.97,0.07 -7.07,-1.46 0.7,-1.9 3.21,-4.13 1.45,-6.71 -0.76,-1.48 -0.67,-2.19 0.61,-2.92 -0.66,-3.47 -5.22,-3.74 -7.78,-2.34 -1.29,-1.12 -3.19,-0.98 -4.5,-2.06 z",
						"department-2B" : "m 591.47,517.82 c -3.8,0.59 0.96,5.58 -2.34,7.11 0.41,2.37 -1.56,4.36 0.27,6.51 0.91,2.65 0.16,5.25 -1.21,7.52 -1.7,1.4 -2.28,-3.59 -4.88,-2.82 -2.72,-0.68 -5.78,0.73 -6.51,3.55 -0.96,3.57 -5.53,1.85 -7.86,3.52 -1.89,1.06 -3.87,1.71 -4.61,3.96 -1.27,0.02 -3.62,-0.97 -3.17,1.52 -0.83,1.46 -4.01,3 -1.97,4.89 -0.74,1.76 -0.34,3.49 -2.71,3.49 -0.21,1.44 -2.22,2.88 0.58,2.71 2.53,1.11 5.12,2.12 7.69,3.24 1.52,0.72 3.8,-1.59 3.24,1.35 1.14,3.16 4.05,4.22 6.73,6.16 3.36,0.28 1.41,5.5 4.55,6.47 1.71,1.96 0.79,6.36 4.83,5.7 0.18,2.3 0.59,4.8 0.39,7.09 3.14,0.81 -1.89,5.25 2.18,4.96 1.78,0.52 2.82,0.98 4.16,-0.94 3.62,-1.36 0.49,-5.59 2.73,-7.46 1.3,-1.69 2.64,-3.75 1.77,-5.45 1.89,-0.05 4.02,-2.43 3.98,-4.66 -3.67,0.56 1.98,-2.55 0.4,-4.61 0.47,-4.5 -0.6,-8.88 -1.01,-13.3 -0.14,-3.75 0.34,-7.67 -0.54,-11.31 -2.55,0.11 -3.67,-4.24 -3.35,-6.45 -0.43,-3.66 1.56,-7.1 1.67,-10.65 -0.63,-3.67 -1.07,-7.33 -1.55,-11 -0.76,-1.12 -2.26,-1.12 -3.47,-1.1 z",
						"department-2A" : "m 553.92,559.49 c -0.76,0.55 -0.1,3.85 1.13,1.96 1.53,-0.6 3.16,1.13 1.04,1.7 0.18,1.06 4.56,1.95 3.28,3.75 -1.7,0.83 -4.95,1.13 -5.71,2.43 1.47,0.55 1.4,3.03 1,3.92 1.78,0.17 -1.16,0.99 0.63,1.63 0.63,1.3 2.89,1.78 3.93,2.6 2.01,-0.69 1.72,2.93 3.31,3.71 -1.37,1.54 -4.97,1.78 -3.83,4.58 -1,1.17 -4.84,0.3 -2.28,2.46 0.58,1.07 -0.7,3.38 1.57,2.3 2.41,0.81 4.08,-2.02 6.12,-1.18 1.97,1.46 -0.22,3.37 0.14,5 -2.75,0 1.8,1.85 -1.02,2.54 -3.01,0.03 -0.83,3.83 -3.9,3.99 -1.68,0.23 1.57,0.7 1.54,1.65 1.76,-0.59 3.68,-1.62 3.39,1.11 1.89,0.2 4.59,0.62 6.1,1.72 -1.54,1.28 -2.78,3.54 -5.39,3.37 -1.08,2.57 -0.44,5.65 2.26,6.65 0.47,1.48 3.07,1.49 4.07,2.79 2.06,-0.18 4.37,2.72 5.98,1.13 0.61,-0.03 -0.33,2.68 1.6,1.9 1.78,0.68 -1.94,3.73 1.39,3.43 1.92,2.48 5.07,2.16 5.35,-1.31 -0.28,-1.01 -2.21,1.4 -1.26,-0.4 -1.13,-2.4 4.15,-2.95 2.21,-5.91 -0.37,-2.45 4.29,-3.07 3.59,-5.68 -1.11,-1.47 -3.9,2.07 -2.85,-0.95 0.15,-2.4 3.01,0.56 2.82,-1.99 2.59,-0.18 0.07,-3.36 2.35,-4.13 0.15,-3.28 0.23,-6.85 -0.14,-10.22 -1.57,-1.53 -3.07,3.01 -4.83,0.98 -2.75,0.63 -3.37,-1.87 -1.99,-3.78 0.22,-1.35 -2.56,-0.55 -1.08,-2.17 -0.85,-2.32 1.32,-7.41 -2.67,-6.39 -2.45,-0.98 -0.65,-4.44 -2.73,-5.65 -2.85,-1.24 -1.36,-6.19 -4.82,-6.53 -1.64,-1.96 -4.77,-2 -5.5,-4.65 -1.21,-1.02 -0.51,-3.66 -2.85,-2.55 -2.75,-0.46 -5.3,-1.82 -7.74,-2.91 -1.28,-0.57 -2.84,-0.72 -4.21,-0.9 z",
						"department-66" : "m 350.33,540.74 c -2.96,0.38 -4.31,2.8 -5.6,5.05 -3.53,0.71 -7.2,-0.41 -10.77,-0.57 -2.35,1.71 -6.82,-1.75 -7.77,1.56 0.2,2.13 1.85,4.41 0.81,6.44 -1.56,1.89 -4.34,1.3 -5.68,3.47 -1.35,1.08 -2.18,1.99 -3.65,0.52 -2.39,0.04 -5.76,-0.02 -7.25,1.69 -0.99,2.71 -4.23,1.36 -5.45,3.77 -3.15,-0.36 -6.54,2.28 -5.14,5.7 2.43,0.62 5.15,0.58 6.86,2.76 2.19,0.36 3.92,1.1 3.79,3.75 0.25,2.56 3.21,3.71 5.32,2.52 1.96,-1.04 2.2,-4.45 4.97,-3.96 2.58,-0.15 5.03,-1.38 7.33,0.7 1.62,1.14 4.07,1.03 4.94,3.03 1.26,1.86 4.32,3.14 5.35,0.56 1.73,0.75 6.82,2.34 4.14,-1.14 0.71,-2.52 4.05,-2.95 6.3,-2.62 1.56,-1.63 3.48,-3.18 5.81,-2.8 0.99,-2.12 3.1,-0.12 4.88,-0.88 1.63,1.07 2.93,3.67 5.54,2.51 3.2,-0.39 -1.16,-3.71 -1.44,-5.38 -2.92,-1.29 -2.81,-4.63 -3.06,-7.37 0.78,-2.2 -2.64,-2.22 -1.43,-4.12 2.29,1.97 1.16,-2.93 1.55,-4.24 0.36,-2.22 -0.89,-3.89 -3.17,-3.82 -1.26,-1.48 0.41,-4.01 -2.35,-4.33 -1.89,-0.44 -3.32,-1.87 -4.85,-2.81 z",
						"department-01" : "m 445.43,302.59 c -1.44,3.02 -1.75,6.16 -3.18,9.18 -0.78,3.16 -1.85,6.34 -2.91,9.5 -0.74,1.88 -1.31,3.79 -0.09,5.37 -0.73,2.05 -2.97,3.67 -1.95,5.9 -1.67,2.26 0.87,5.73 -1.18,7.83 1.88,0.01 3.46,1.61 3.99,2.62 2.16,-1.53 3.89,1.88 4.07,3.41 0.92,1.26 -0.03,3.77 2.46,2.77 2.89,0.46 5.98,-0.89 8.76,0.39 1.35,2.24 3.89,2.93 5.42,0.31 1.18,-1.7 1.66,-5.65 4.09,-5.27 2.02,1.24 3.75,2.88 3.08,4.98 1.95,2.32 3.67,4.97 5.93,6.73 1.33,1.23 0.17,0.8 -0.53,0.61 0.61,1.8 3.11,2.49 3.34,4.83 0.97,0.84 1.38,-1.89 2.87,-1.59 -0.3,-1.63 1.67,-2.68 0.77,-4.34 3.81,0.96 3.71,-3.34 3.75,-5.95 0.89,-3.44 1.98,-6.82 2.27,-10.31 -1.07,-2.3 -1.36,-4.85 -1.09,-7.47 0.3,-1.5 0.9,-3.58 2.27,-1.4 2.48,1.01 0.53,-3.51 3.59,-2.7 2.71,-0.13 3.55,-3.26 1.37,-4.78 1.32,-2.8 5.95,-1.73 6.82,-4.09 -1.66,-3.05 4.61,-7.07 -0.2,-9.19 -2.62,-2.47 -4.13,2.14 -6.1,3.38 -0.9,2.11 -2.5,3.05 -3.65,4.53 -1.99,2.56 -5.47,0.79 -8.11,1.25 0.84,-3.04 -2.73,-3.43 -3.76,-4.72 -2.02,1.65 -3.16,4.49 -6.19,4.68 -2.73,0.46 -1.81,-2.02 -1.56,-3.51 -1.42,0.56 -1.69,-0.36 -2.26,-1.49 -0.06,1.35 -0.96,2.99 -0.83,0.6 -1.4,-1.01 -1.59,-2.59 -1.58,-3.72 -1.32,-0.93 -3.93,-1.28 -2.29,-3.07 -1.76,-1.43 -5.48,-1.31 -5.42,-4.72 -2.13,-0.62 -4.08,0.9 -6.23,1.42 -1.93,-0.36 -3.28,-2.81 -5.2,-1.46 0.07,-0.1 -0.3,-0.68 -0.54,-0.51 z",
						"department-39" : "m 472.04,250.64 c -2.16,1.79 -1.36,5.28 -2.94,7.45 0.09,2.73 -2.31,4.73 -3.53,7.05 -3.03,-0.47 -5.35,3.74 -3.19,4.71 -2.06,0.47 -3.73,5.36 -0.52,4.7 1.33,0.76 0.69,4.17 3.48,3.21 1.68,-0.66 1.23,2.18 3.27,2.09 2.46,1.35 -0.2,2.67 -1.91,2.03 -2.06,-0.51 -4.46,1.94 -1.6,2.77 2.43,1.33 -1.33,3.03 1.08,4.08 0.89,2.1 1.19,3.82 2.13,6.05 -2.12,0.95 -0.43,3.73 -3.06,3.72 -1.86,2.41 0.74,4.14 2.3,5.69 -0.13,2.93 -6.18,0.76 -4.86,4.67 0.41,1.69 3.59,1.72 2.72,3.84 0.3,1.7 2.14,1.5 2.39,1.42 0.16,2.17 2.98,0.53 1.91,2.98 -0.9,3.13 3.87,1.82 4.85,0.12 1.46,-0.55 2.58,-4.59 4.24,-1.99 2.29,0.06 2.46,3.2 3.09,3.77 2.93,-0.04 7.08,0.91 8.5,-2.49 2.02,-1.97 3.8,-4.92 6.21,-7.02 2.27,-1.54 0.39,-4.74 2.54,-6.4 1.4,-1.49 3.11,-3.84 -0.06,-3.89 -2.06,-1.17 -3.31,-3.74 -0.87,-5.29 0.4,-1.53 -1.44,-3.09 0.76,-4.19 2.73,-1.36 6.13,-4.43 2.26,-6.76 -1.6,-2.02 -3.91,-2.65 -5.92,-3.04 -1.27,-2 -1.73,-3.98 -2.6,-5.89 -0.82,-0.25 1.22,-2.33 -1.1,-2.27 -1.84,-1.29 -4.2,-1.14 -5.91,-2.76 -0.62,-1.82 -0.09,-1.2 -1.26,-0.03 -2.05,2.08 -3.47,-2.98 -0.74,-2.02 0.76,-1.1 -0.4,-3.36 1.4,-4.52 2.37,-3.1 -2.64,-4.46 -3.59,-6.62 -0.37,-1.97 -2.06,-4.51 -3.97,-2.34 -2.56,0.88 -4.13,-1.12 -5.49,-2.82 z",
						"department-68" : "m 549.43,183.82 c -2.25,1 -2.94,3.73 -3.79,5.81 -0.9,2.15 -3.75,4.26 -2.11,6.74 -0.93,2.22 -2.92,4.25 -3.93,6.64 -2.43,1.18 -3.51,3.7 -3.19,6.38 0.13,1.69 -1.55,2.36 -0.44,3.95 0.77,2.64 -4.62,1.97 -2.6,4.52 2.13,1.91 5.37,1.9 7.52,3.96 0.67,1.81 1.6,4.32 0.06,6.09 -1.78,1.43 -0.08,4 1.85,2.88 1.83,0.98 2.47,3.66 3.32,5.16 -0.72,2.04 1.34,2.1 2.39,2.44 -0.32,1.38 -1.23,4 1.33,3.32 1.03,1.33 2.07,1.29 3.35,0.31 2.56,-0.08 5.85,0.35 7.17,-2.31 -0.73,-1.24 -0.96,-2.18 0.78,-1.43 2.66,0.8 0.35,-2.42 2.52,-2.38 0.82,-0.85 -1.99,-1.47 0.03,-2.05 1.88,-1.02 4.21,-2.78 2.05,-4.99 -1.7,-1.63 -3.7,-3.88 -1.43,-6.04 0.91,-2.16 -1.41,-4.57 0.56,-6.71 0.67,-2 0.44,-4 1.78,-5.83 -0.03,-2.09 3.45,-4.94 0.43,-6.95 -3.06,-1.46 0.88,-6.62 -2.19,-7 -1.65,-0.56 -1.53,-2.31 -3.25,-2.51 -0.17,-1.94 -0.33,-3.93 -2.69,-4.35 -2.09,-1.1 -4.78,-1.23 -5.71,-3.58 0.07,-2.15 -2.48,-1.52 -3.79,-2.06 z",
						"department-90" : "m 532.37,216.22 c -0.55,0.23 -0.49,0.97 -0.95,1.33 -0.62,0.8 -1.51,1.36 -1.95,2.3 -0.77,0.99 -0.8,2.48 -0.08,3.5 -0.03,0.67 0.48,1.24 0.41,1.93 -0.01,0.83 -0.07,1.76 0.62,2.36 0.29,0.29 0.48,0.66 0.1,0.97 -0.14,0.38 -0.57,0.43 -0.76,0.72 -0.05,0.5 0.53,0.78 0.56,1.29 0.18,0.47 0.52,0.85 0.75,1.28 0.26,0.15 0.87,0.53 0.4,0.81 -0.7,0.47 -0.05,1.72 0.76,1.5 0.78,0.02 1.57,-0.19 2.27,-0.46 0.8,0.18 1.42,0.82 1.45,1.64 0.04,0.86 1.41,0.54 1.43,1.42 0.01,0.47 0.26,1.11 -0.01,1.5 -0.5,0.35 -0.45,-0.64 -0.86,-0.74 -0.5,-0.2 -0.94,0.42 -0.64,0.85 0.2,0.34 -0.18,0.93 0.34,1.04 0.43,0.61 0.84,1.44 0.71,2.19 -0.36,0.5 0.42,0.64 0.75,0.45 0.83,-0.18 1.47,-0.8 2.26,-1.07 0.62,-0.6 -0.22,-1.42 -0.38,-2.05 -0.12,-0.36 -0.45,-1.06 0.17,-1.13 0.42,-0.08 0.81,-0.3 1.15,-0.48 0.96,0.2 1.82,0.91 2.86,0.71 1.1,-0.11 2.47,-0.62 2.45,-1.94 0.16,-1 -0.69,-1.62 -1.41,-2.13 -0.16,-0.46 -0.02,-1.09 -0.52,-1.4 -0.45,-0.55 -0.43,-1.71 -1.38,-1.73 -0.72,-0.12 -1.46,0.05 -1.95,0.59 -0.4,0.24 -0.3,-0.53 -0.6,-0.62 -0.31,-0.79 -0.34,-1.73 0.1,-2.47 0.16,-0.36 0.01,-1.1 0.63,-0.98 0.41,0.01 0.38,-0.37 0.4,-0.64 0.61,-1 -0.15,-2.14 -0.3,-3.13 0.23,-0.47 0.38,-1.05 -0.1,-1.44 -0.8,-1.1 -2.3,-1.18 -3.29,-2.06 -0.38,-0.36 -0.84,-0.58 -1.33,-0.6 -0.84,-0.67 -2.13,-0.38 -2.92,-1.15 -0.45,-0.63 -0.74,-1.4 -0.95,-2.13 -0.05,-0.04 -0.12,-0.05 -0.18,-0.04 z"
					}
				}
			}
		}
	);
})(jQuery);
$(function(){
    var url = "http://snoozit/app_dev.php/advert/departement/";
    $(".mapcontainer").mapael({
        map : {
            name : "france_departments",
        defaultPlot : {
                attrs : {
                    fill: "#004a9b"
                    , opacity : 0.6
                }
                , attrsHover : {
                    opacity : 1
                }
                , text : {
                    attrs : {
                        fill : "#505444"
                    }
                    , attrsHover : {
                        fill : "#000"
                    }
                }
            }
            , defaultArea: {
                attrs : {
                    fill : "#313844"
                    , stroke: "#999"
                }
                , attrsHover : {
                    fill: "#a4e100"
                }
                , text : {
                    attrs : {
                        fill : "#505444"
                    }
                    , attrsHover : {
                        fill : "#000"
                    }
                }
            }
        },
        areas: {
            "department-59": {
                value: "2617939",
                href : url+"nord",
                tooltip: {content : "<span style=\"font-weight:bold;\">Nord (59)</span><br />Population : 2617939"}
            },
            "department-75": {
                value: "2268265",
                href : url+"paris",
                tooltip: {content : "<span style=\"font-weight:bold;\">Paris (75)</span><br />Population : 2268265"}
            },
            "department-13": {
                value: "2000550",
                href : url+"bouches-du-rhone",
                tooltip: {content : "<span style=\"font-weight:bold;\">Bouches-du-Rhône (13)</span><br />Population : 2000550"}
            },
            "department-69": {
                value: "1756069",
                href : url+"rhone",
                tooltip: {content : "<span style=\"font-weight:bold;\">Rhône (69)</span><br />Population : 1756069"}
            },
            "department-92": {
                value: "1590749",
                href : url+"hauts-de-seine",
                tooltip: {content : "<span style=\"font-weight:bold;\">Hauts-de-Seine (92)</span><br />Population : 1590749"}
            },
            "department-93": {
                value: "1534895",
                href : url+"seine-saint-denis",
                tooltip: {content : "<span style=\"font-weight:bold;\">Seine-Saint-Denis (93)</span><br />Population : 1534895"}
            },
            "department-62": {
                value: "1489209",
                href : url+"pas-de-calais",
                tooltip: {content : "<span style=\"font-weight:bold;\">Pas-de-Calais (62)</span><br />Population : 1489209"}
            },
            "department-33": {
                value: "1479277",
                href : url+"gironde",
                tooltip: {content : "<span style=\"font-weight:bold;\">Gironde (33)</span><br />Population : 1479277"}
            },
            "department-78": {
                value: "1435448",
                href : url+"yvelines",
                tooltip: {content : "<span style=\"font-weight:bold;\">Yvelines (78)</span><br />Population : 1435448"}
            },
            "department-77": {
                value: "1347008",
                href : url+"seine-et-marne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Seine-et-Marne (77)</span><br />Population : 1347008"}
            },
            "department-94": {
                value: "1340868",
                href : url+'val-de-marne',
                tooltip: {content : "<span style=\"font-weight:bold;\">Val-de-Marne (94)</span><br />Population : 1340868"}
            },
            "department-44": {
                value: "1317685",
                href : url+"lore-atlantique",
                tooltip: {content : "<span style=\"font-weight:bold;\">Loire-Atlantique (44)</span><br />Population : 1317685"}
            },
            "department-76": {
                value: "1275952",
                href : url+"seine-maritime",
                tooltip: {content : "<span style=\"font-weight:bold;\">Seine-Maritime (76)</span><br />Population : 1275952"}
            },
            "department-31": {
                value: "1268370",
                href : url+"haute-garonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Garonne (31)</span><br />Population : 1268370"}
            },
            "department-38": {
                value: "1233759",
                href : url+"isere",
                tooltip: {content : "<span style=\"font-weight:bold;\">Isère (38)</span><br />Population : 1233759"}
            },
            "department-91": {
                value: "1233645",
                href : url+"essonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Essonne (91)</span><br />Population : 1233645"}
            },
            "department-95": {
                value: "1187836",
                href : url+"val-d-oise",
                tooltip: {content : "<span style=\"font-weight:bold;\">Val-d'Oise (95)</span><br />Population : 1187836"}
            },
            "department-67": {
                value: "1115226",
                href : url+"bas-rhin",
                tooltip: {content : "<span style=\"font-weight:bold;\">Bas-Rhin (67)</span><br />Population : 1115226"}
            },
            "department-06": {
                value: "1094579",
                href : url+"alpes-maritime",
                tooltip: {content : "<span style=\"font-weight:bold;\">Alpes-Maritimes (06)</span><br />Population : 1094579"}
            },
            "department-57": {
                value: "1066667",
                href : url+"moselle",
                tooltip: {content : "<span style=\"font-weight:bold;\">Moselle (57)</span><br />Population : 1066667"}
            },
            "department-34": {
                value: "1062617",
                href : url+"herault",
                tooltip: {content : "<span style=\"font-weight:bold;\">Hérault (34)</span><br />Population : 1062617"}
            },
            "department-83": {
                value: "1026222",
                href : url+"var",
                tooltip: {content : "<span style=\"font-weight:bold;\">Var (83)</span><br />Population : 1026222"}
            },
            "department-35": {
                value: "1015470",
                href : url+"ille-et-vilaine",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ille-et-Vilaine (35)</span><br />Population : 1015470"}
            },
            "department-29": {
                value: "929286",
                href : url+"finistere",
                tooltip: {content : "<span style=\"font-weight:bold;\">Finistère (29)</span><br />Population : 929286"}
            },
            "department-974": {
                value: "829903",
                href : url+"la-reunion",
                tooltip: {content : "<span style=\"font-weight:bold;\">La Réunion (974)</span><br />Population : 829903"}
            },
            "department-60": {
                value: "823668",
                href : url+"oise",
                tooltip: {content : "<span style=\"font-weight:bold;\">Oise (60)</span><br />Population : 823668"}
            },
            "department-49": {
                value: "808298",
                href : url+"maine-et-loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Maine-et-Loire (49)</span><br />Population : 808298"}
            },
            "department-42": {
                value: "766729",
                href : url+"loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Loire (42)</span><br />Population : 766729"}
            },
            "department-68": {
                value: "765634",
                href : url+"haut-rhin",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haut-Rhin (68)</span><br />Population : 765634"}
            },
            "department-74": {
                value: "760979",
                href : url+"haute-savoie",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Savoie (74)</span><br />Population : 760979"}
            },
            "department-54": {
                value: "746502",
                href : url+"meurthe-et-moselle",
                tooltip: {content : "<span style=\"font-weight:bold;\">Meurthe-et-Moselle (54)</span><br />Population : 746502"}
            },
            "department-56": {
                value: "744663",
                href : url+"morbihan",
                tooltip: {content : "<span style=\"font-weight:bold;\">Morbihan (56)</span><br />Population : 744663"}
            },
            "department-30": {
                value: "726285",
                href : url+"gard",
                tooltip: {content : "<span style=\"font-weight:bold;\">Gard (30)</span><br />Population : 726285"}
            },
            "department-14": {
                value: "699561",
                href : url+"calvados",
                tooltip: {content : "<span style=\"font-weight:bold;\">Calvados (14)</span><br />Population : 699561"}
            },
            "department-45": {
                value: "674913",
                href : url+"loiret",
                tooltip: {content : "<span style=\"font-weight:bold;\">Loiret (45)</span><br />Population : 674913"}
            },
            "department-64": {
                value: "674908",
                href : url+"pyrenees-atlantiques",
                tooltip: {content : "<span style=\"font-weight:bold;\">Pyrénées-Atlantiques (64)</span><br />Population : 674908"}
            },
            "department-85": {
                value: "654096",
                href : url+"vendee",
                tooltip: {content : "<span style=\"font-weight:bold;\">Vendée (85)</span><br />Population : 654096"}
            },
            "department-63": {
                value: "649643",
                href : url+"puy-de-dome",
                tooltip: {content : "<span style=\"font-weight:bold;\">Puy-de-Dôme (63)</span><br />Population : 649643"}
            },
            "department-17": {
                value: "640803",
                href : url+"charente-maritime",
                tooltip: {content : "<span style=\"font-weight:bold;\">Charente-Maritime (17)</span><br />Population : 640803"}
            },
            "department-01": {
                value: "614331",
                href : url+"ain",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ain (01)</span><br />Population : 614331"}
            },
            "department-22": {
                value: "612383",
                href : url+"cotes-d-armor",
                tooltip: {content : "<span style=\"font-weight:bold;\">Côtes-d'Armor (22)</span><br />Population : 612383"}
            },
            "department-37": {
                value: "605819",
                href : url+"indre-et-loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Indre-et-Loire (37)</span><br />Population : 605819"}
            },
            "department-27": {
                value: "603194",
                href : url+"eure",
                tooltip: {content : "<span style=\"font-weight:bold;\">Eure (27)</span><br />Population : 603194"}
            },
            "department-80": {
                value: "583388",
                href : url+"somme",
                tooltip: {content : "<span style=\"font-weight:bold;\">Somme (80)</span><br />Population : 583388"}
            },
            "department-51": {
                value: "579533",
                href : url+"marne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Marne (51)</span><br />Population : 579533"}
            },
            "department-72": {
                value: "579497",
                href : url+"sarthe",
                tooltip: {content : "<span style=\"font-weight:bold;\">Sarthe (72)</span><br />Population : 579497"}
            },
            "department-71": {
                value: "574874",
                href : url+"saone-et-loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Saône-et-Loire (71)</span><br />Population : 574874"}
            },
            "department-84": {
                value: "555240",
                href : url+"vaucluse",
                tooltip: {content : "<span style=\"font-weight:bold;\">Vaucluse (84)</span><br />Population : 555240"}
            },
            "department-02": {
                value: "555094",
                href : url+"aisne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Aisne (02)</span><br />Population : 555094"}
            },
            "department-25": {
                value: "542509",
                href : url+"doubs",
                tooltip: {content : "<span style=\"font-weight:bold;\">Doubs (25)</span><br />Population : 542509"}
            },
            "department-21": {
                value: "538505",
                href : url+"cote-d-or",
                tooltip: {content : "<span style=\"font-weight:bold;\">Côte-d'Or (21)</span><br />Population : 538505"}
            },
            "department-50": {
                value: "517121",
                href : url+"manche",
                tooltip: {content : "<span style=\"font-weight:bold;\">Manche (50)</span><br />Population : 517121"}
            },
            "department-26": {
                value: "499313",
                href : url+"drome",
                tooltip: {content : "<span style=\"font-weight:bold;\">Drôme (26)</span><br />Population : 499313"}
            },
            "department-66": {
                value: "457238",
                href : url+"pyrenees-orientales",
                tooltip: {content : "<span style=\"font-weight:bold;\">Pyrénées-Orientales (66)</span><br />Population : 457238"}
            },
            "department-28": {
                value: "440291",
                href : url+"eure-et-loir",
                tooltip: {content : "<span style=\"font-weight:bold;\">Eure-et-Loir (28)</span><br />Population : 440291"}
            },
            "department-86": {
                value: "438566",
                href : url+"vienne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Vienne (86)</span><br />Population : 438566"}
            },
            "department-73": {
                value: "428751",
                href : url+"savoie",
                tooltip: {content : "<span style=\"font-weight:bold;\">Savoie (73)</span><br />Population : 428751"}
            },
            "department-24": {
                value: "426607",
                href : url+"http://snoozit/app_dev.php/advert/departement/dordogne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Dordogne (24)</span><br />Population : 426607"}
            },
            "department-971": {
                value: "409905",
                href : url+"guadeloupe",
                tooltip: {content : "<span style=\"font-weight:bold;\">Guadeloupe (971)</span><br />Population : 409905"}
            },
            "department-972": {
                value: "400535",
                href : url+"martinique",
                tooltip: {content : "<span style=\"font-weight:bold;\">Martinique (972)</span><br />Population : 400535"}
            },
            "department-40": {
                value: "397766",
                href : url+"landes",
                tooltip: {content : "<span style=\"font-weight:bold;\">Landes (40)</span><br />Population : 397766"}
            },
            "department-88": {
                value: "392846",
                href : url+"vosges",
                tooltip: {content : "<span style=\"font-weight:bold;\">Vosges (88)</span><br />Population : 392846"}
            },
            "department-81": {
                value: "387099",
                href : url+"http://snoozit/app_dev.php/advert/departement/",
                tooltip: {content : "<span style=\"font-weight:bold;\">Tarn (81)</span><br />Population : 387099"}
            },
            "department-87": {
                value: "384781",
                href : url+"haute-vienne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Vienne (87)</span><br />Population : 384781"}
            },
            "department-79": {
                value: "380569",
                href : url+"deux-sevres",
                tooltip: {content : "<span style=\"font-weight:bold;\">Deux-Sèvres (79)</span><br />Population : 380569"}
            },
            "department-11": {
                value: "365854",
                href : url+"aude",
                tooltip: {content : "<span style=\"font-weight:bold;\">Aude (11)</span><br />Population : 365854"}
            },
            "department-16": {
                value: "364429",
                href : url+"charente",
                tooltip: {content : "<span style=\"font-weight:bold;\">Charente (16)</span><br />Population : 364429"}
            },
            "department-89": {
                value: "353366",
                href : url+"yonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Yonne (89)</span><br />Population : 353366"}
            },
            "department-03": {
                value: "353124",
                href : url+"allier",
                tooltip: {content : "<span style=\"font-weight:bold;\">Allier (03)</span><br />Population : 353124"}
            },
            "department-47": {
                value: "342500",
                href : url+"lot-et-garonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Lot-et-Garonne (47)</span><br />Population : 342500"}
            },
            "department-41": {
                value: "340729",
                href : url+"loir-et-cher",
                tooltip: {content : "<span style=\"font-weight:bold;\">Loir-et-Cher (41)</span><br />Population : 340729"}
            },
            "department-07": {
                value: "324885",
                href : url+"ardeche",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ardèche (07)</span><br />Population : 324885"}
            },
            "department-18": {
                value: "319600",
                href : url+"cher",
                tooltip: {content : "<span style=\"font-weight:bold;\">Cher (18)</span><br />Population : 319600"}
            },
            "department-53": {
                value: "317006",
                href : url+"mayenne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Mayenne (53)</span><br />Population : 317006"}
            },
            "department-10": {
                value: "311720",
                href : url+'aube',
                tooltip: {content : "<span style=\"font-weight:bold;\">Aube (10)</span><br />Population : 311720"}
            },
            "department-61": {
                value: "301421",
                href : url+"orne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Orne (61)</span><br />Population : 301421"}
            },
            "department-08": {
                value: "291678",
                href : url+"ardennes",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ardennes (08)</span><br />Population : 291678"}
            },
            "department-12": {
                value: "288364",
                href : url+"aveyron",
                tooltip: {content : "<span style=\"font-weight:bold;\">Aveyron (12)</span><br />Population : 288364"}
            },
            "department-39": {
                value: "271973",
                href : url+"jura",
                tooltip: {content : "<span style=\"font-weight:bold;\">Jura (39)</span><br />Population : 271973"}
            },
            "department-19": {
                value: "252235",
                href : url+"correze",
                tooltip: {content : "<span style=\"font-weight:bold;\">Corrèze (19)</span><br />Population : 252235"}
            },
            "department-82": {
                value: "248227",
                href : url+"tarn-et-garonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Tarn-et-Garonne (82)</span><br />Population : 248227"}
            },
            "department-70": {
                value: "247311",
                href : url+"haute-saone",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Saône (70)</span><br />Population : 247311"}
            },
            "department-36": {
                value: "238261",
                href : url+"indre",
                tooltip: {content : "<span style=\"font-weight:bold;\">Indre (36)</span><br />Population : 238261"}
            },
            "department-65": {
                value: "237945",
                href : url+"hautes-pyrenees",
                tooltip: {content : "<span style=\"font-weight:bold;\">Hautes-Pyrénées (65)</span><br />Population : 237945"}
            },
            "department-43": {
                value: "231877",
                href : url+"haute-loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Loire (43)</span><br />Population : 231877"}
            },
            "department-973": {
                value: "231167",
                href : url+"guyane",
                tooltip: {content : "<span style=\"font-weight:bold;\">Guyane (973)</span><br />Population : 231167"}
            },
            "department-58": {
                value: "226997",
                href : url+"nievre",
                tooltip: {content : "<span style=\"font-weight:bold;\">Nièvre (58)</span><br />Population : 226997"}
            },
            "department-55": {
                value: "200509",
                href : url+"meuse",
                tooltip: {content : "<span style=\"font-weight:bold;\">Meuse (55)</span><br />Population : 200509"}
            },
            "department-32": {
                value: "195489",
                href : url+"gers",
                tooltip: {content : "<span style=\"font-weight:bold;\">Gers (32)</span><br />Population : 195489"}
            },
            "department-52": {
                value: "191004",
                href : url+"haute-marne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Marne (52)</span><br />Population : 191004"}
            },
            "department-46": {
                value: "181232",
                href : url+"lot",
                tooltip: {content : "<span style=\"font-weight:bold;\">Lot (46)</span><br />Population : 181232"}
            },
            "department-2B": {
                value: "168869",
                href : url+"haute-corse",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Corse (2B)</span><br />Population : 168869"}
            },
            "department-04": {
                value: "165155",
                href : url+"alpes-de-haute-provence",
                tooltip: {content : "<span style=\"font-weight:bold;\">Alpes-de-Haute-Provence (04)</span><br />Population : 165155"}
            },
            "department-09": {
                value: "157582",
                href : url+"ariege",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ariège (09)</span><br />Population : 157582"}
            },
            "department-15": {
                value: "154135",
                href : url+"cantal",
                tooltip: {content : "<span style=\"font-weight:bold;\">Cantal (15)</span><br />Population : 154135"}
            },
            "department-90": {
                value: "146475",
                href : url+"territoire-de-belfort",
                tooltip: {content : "<span style=\"font-weight:bold;\">Territoire de Belfort (90)</span><br />Population : 146475"}
            },
            "department-2A": {
                value: "145998",
                href : url+"corse-du-sud",
                tooltip: {content : "<span style=\"font-weight:bold;\">Corse-du-Sud (2A)</span><br />Population : 145998"}
            },
            "department-05": {
                value: "142312",
                href : url+"hautes-alpes",
                tooltip: {content : "<span style=\"font-weight:bold;\">Hautes-Alpes (05)</span><br />Population : 142312"}
            },
            "department-23": {
                value: "127919",
                href : url+"creuse",
                tooltip: {content : "<span style=\"font-weight:bold;\">Creuse (23)</span><br />Population : 127919"}
            },
            "department-48": {
                value: "81281",
                href : url+"lozere",
                tooltip: {content : "<span style=\"font-weight:bold;\">Lozère (48)</span><br />Population : 81281"}
            }
        }
    });
});