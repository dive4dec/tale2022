var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,a,i,d,f,u,l,s,c,p,h,v={282:(e,r,t)=>{var n={"./index":()=>t.e(91).then((()=>()=>t(91))),"./extension":()=>t.e(91).then((()=>()=>t(91)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},b={};function g(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={exports:{}};return v[e](t,t.exports,g),t.exports}g.m=v,g.c=b,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+"."+{91:"546178139c6629490f48",202:"2e707d7ca3e55a77b8e5",299:"e56d16ea6b87efa7014d",698:"db8f5d2cfd942e81bec8",733:"7dab6d68807409f582eb",809:"a6c00201de7bb5945095"}[e]+".js?v="+{91:"546178139c6629490f48",202:"2e707d7ca3e55a77b8e5",299:"e56d16ea6b87efa7014d",698:"db8f5d2cfd942e81bec8",733:"7dab6d68807409f582eb",809:"a6c00201de7bb5945095"}[e],g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@deathbeds/jupyterlab-font-fira-code:",g.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,d;if(void 0!==o)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var l=f[u];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+o){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),d&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{g.S={};var e={},r={};g.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var a=g.S[t],i="@deathbeds/jupyterlab-font-fira-code",d=[];return"default"===t&&((e,r,t,n)=>{var o=a[e]=a[e]||{},d=o[r];(!d||!d.loaded&&(1!=!d.eager?n:i>d.from))&&(o[r]={get:()=>g.e(91).then((()=>()=>g(91))),from:i,eager:!1})})("@deathbeds/jupyterlab-font-fira-code","2.1.1"),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var r=g.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],d=(typeof i)[0];if(a!=d)return"o"==a&&"n"==d||"s"==d||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(d=e[a]))[0]?"-":(n>0?".":"")+(n=2,d);return t}var i=[];for(a=1;a<e.length;a++){var d=e[a];i.push(0===d?"not("+f()+")":1===d?"("+f()+" || "+f()+")":2===d?i.pop()+" "+i.pop():o(d))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,d=1,f=!0;;d++,i++){var u,l,s=d<e.length?(typeof e[d])[0]:"";if(i>=r.length||"o"==(l=(typeof(u=r[i]))[0]))return!f||("u"==s?d>n&&!o:""==s!=o);if("u"==l){if(!f||"u"!=s)return!1}else if(f)if(s==l)if(d<=n){if(u!=e[d])return!1}else{if(o?u>e[d]:u<e[d])return!1;u!=e[d]&&(f=!1)}else if("s"!=s&&"n"!=s){if(o||d<=n)return!1;f=!1,d--}else{if(d<=n||l<s!=o)return!1;f=!1}else"s"!=s&&"n"!=s&&(f=!1,d--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>{var t=g.S[e];if(!t||!g.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},d=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},f=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=d(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(f(e,t,o,n)),l(e[t][o])},l=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,n,o){var a=g.I(r);return a&&a.then?a.then(e.bind(e,r,g.S[r],t,n,o)):e(r,g.S[r],t,n)})(((e,r,t,n)=>(i(e,t),u(r,0,t,n)))),c={},p={1:()=>s("default","@deathbeds/jupyterlab-fonts",[2,2,1,1])},h={91:[1]},g.f.consumes=(e,r)=>{g.o(h,e)&&h[e].forEach((e=>{if(g.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},n=r=>{delete c[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var o=p[e]();o.then?r.push(c[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={241:0};g.f.j=(r,t)=>{var n=g.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=g.p+g.u(r),i=new Error;g.l(a,(t=>{if(g.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,d]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in i)g.o(i,n)&&(g.m[n]=i[n]);d&&d(g)}for(r&&r(t);f<a.length;f++)o=a[f],g.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_deathbeds_jupyterlab_font_fira_code=self.webpackChunk_deathbeds_jupyterlab_font_fira_code||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=g(282);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@deathbeds/jupyterlab-font-fira-code"]=m})();
//# sourceMappingURL=remoteEntry.b480a1e5ecf432206aaf.js.map