(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docs/demos/asynchronous.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),r=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js"),s=a("./node_modules/docz/dist/index.m.js"),i=function(e){var n=e.delay,a=e.isRehydrating;return r.a.createElement("div",{"data-rehydratable":"AsynchronousRehydrator","data-delay":n},a?"I have rehydrated":"I will rehydrate in ".concat(n,"ms"))},c=i;i.__docgenInfo={description:"",methods:[],displayName:"AsynchronousRehydrator"};var d=a("./node_modules/@babel/runtime/regenerator/index.js"),m=a.n(d);function l(e,n,a,t,r,o,s){try{var i=e[o](s),c=i.value}catch(e){return void a(e)}i.done?n(c):Promise.resolve(c).then(t,r)}var p,y,h=function(e){return new Promise(function(n){setTimeout(n,e)})},u=(p=m.a.mark(function e(n){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getAttribute("data-delay"),e.next=3,h(parseInt(a));case 3:return e.abrupt("return",r.a.createElement(c,{isRehydrating:!0}));case 4:case"end":return e.stop()}},e,this)}),y=function(){var e=this,n=arguments;return new Promise(function(a,t){var r=p.apply(e,n);function o(e){l(r,a,t,o,s,"next",e)}function s(e){l(r,a,t,o,s,"throw",e)}o(void 0)})},function(e){return y.apply(this,arguments)}),f=a("./docs/demos/components/MarkupContainer/index.js");function g(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components,a=g(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"asynchronous-rehydrators"}},"Asynchronous Rehydrators"),r.a.createElement(o.MDXTag,{name:"p",components:n},"This demo is meant to demonstrate how asynchronous rehydration works."),r.a.createElement(o.MDXTag,{name:"p",components:n},"It also demonstrates how a rehydrator can ",r.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"change")," an element - before rehydration, the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"AsynchronousRehydrator")," element shows how long it will take to rehydrate, but after rehydration, it simply tells you that it's compelted rehydration."),r.a.createElement(o.MDXTag,{name:"p",components:n},"The ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"separateContainers")," prop on ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MarkupContainer")," can be set to false, to demonstrate the benefits of having multiple containers on your page. If each ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"AsynchronousRehydrator")," is wrapped in a single container, rehydration will only complete when ",r.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all")," rehydrators have finished running, but when they're each in a separate container, they render independently."),r.a.createElement(o.MDXTag,{name:"p",components:n},"While you wouldn't ever write a rehydrator using an intentional delay in a real site, it's a useful demo of how ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import()")," ",r.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"could")," work in your bundles with ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-from-markup"),"."),r.a.createElement(s.Playground,{__position:0,__code:"<MarkupContainer\n  rehydrators={{ AsynchronousRehydrator: rehydrator }}\n  options={{}}\n  separateContainers={true}\n>\n  <AsynchronousRehydrator delay={5000} />\n  <AsynchronousRehydrator delay={100} />\n  <AsynchronousRehydrator delay={10000} />\n  <AsynchronousRehydrator delay={2500} />\n  <AsynchronousRehydrator delay={500} />\n  <AsynchronousRehydrator delay={7500} />\n</MarkupContainer>",__scope:{props:a,AsynchronousRehydrator:c,rehydrator:u,MarkupContainer:f.a}},r.a.createElement(f.a,{rehydrators:{AsynchronousRehydrator:u},options:{},separateContainers:!0},r.a.createElement(c,{delay:5e3}),r.a.createElement(c,{delay:100}),r.a.createElement(c,{delay:1e4}),r.a.createElement(c,{delay:2500}),r.a.createElement(c,{delay:500}),r.a.createElement(c,{delay:7500}))))}}}]);