"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6002:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],d={sidebar_position:1,id:"add",description:"Hasty add method"},i="Add method",p={unversionedId:"methods/add",id:"methods/add",isDocsHomePage:!1,title:"Add method",description:"Hasty add method",source:"@site/docs/methods/add.mdx",sourceDirName:"methods",slug:"/methods/add",permalink:"/docs/methods/add",editUrl:"https://github.com/CactiveNetwork/hasty-docs/edit/main/docs/docs/methods/add.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"add",description:"Hasty add method"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"All method",permalink:"/docs/methods/all"}},s=[{value:"Usage",id:"usage",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Return Type",id:"return-type",children:[],level:2}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-method"},"Add method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"<","Hasty",">"),".",(0,o.kt)("strong",{parentName:"p"},"add"),"(key, value, options?)")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Adds a number to a key in the database. Key defaults to 0 if none exists."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="add.js"',title:'"add.js"'},"// Adds one to the store's sale count.\n<Hasty>.set('store.sales_count', 25)\n<Hasty>.add('store.sales_count', 1) // 26\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Key to set, allows dot notation."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Value"),(0,o.kt)("td",{parentName:"tr",align:null},"Amount to add to current."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Options"),(0,o.kt)("td",{parentName:"tr",align:null},"Additional method options."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/types/method-options"},"MethodOptions")),(0,o.kt)("td",{parentName:"tr",align:null},"false")))),(0,o.kt)("h2",{id:"return-type"},"Return Type"),(0,o.kt)("p",null,"<","Hasty",">",".add() returns the new value of the provided key.\nSee ",(0,o.kt)("a",{parentName:"p",href:"#example"},"example"),"."))}c.isMDXComponent=!0}}]);