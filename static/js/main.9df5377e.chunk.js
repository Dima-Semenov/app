(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),j=c.n(i),a=(c(9),c(2)),r=(c(10),function(e){return fetch("".concat("https://dima-semenov.github.io/app").concat(e)).then((function(e){if(e.ok)return e.json();throw"".concat(e.status," - ").concat(e.statusText)}))}),l=(c(11),c(0)),o=function(){return Object(l.jsxs)("div",{className:"lds-ellipsis",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})},b=function(e){var t=e.id,c=e.reset,s=Object(n.useState)(null),i=Object(a.a)(s,2),j=i[0],b=i[1],h=Object(n.useState)(null),d=Object(a.a)(h,2),u=d[0],O=d[1];return Object(n.useEffect)((function(){(function(e){return r("/api/phones/".concat(e,".json"))})(t).then(b)}),[t]),j?Object(l.jsxs)("div",{className:"col-md-10",children:[Object(l.jsx)("img",{className:"phone",src:u||j.images[0],alt:j.name}),Object(l.jsx)("button",{type:"button",onClick:c,children:"Back"}),Object(l.jsx)("button",{type:"button",children:"Add to basket"}),Object(l.jsx)("h1",{children:j.name}),Object(l.jsx)("p",{children:j.description}),Object(l.jsx)("ul",{className:"phone-thumbs",children:j.images.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("img",{src:e,alt:"",onClick:function(){O(e)}})},e)}))})]}):Object(l.jsx)(o,{})},h=function(e){var t=e.select,c=e.phones;return Object(l.jsx)("ul",{className:"phones",children:c.map((function(e){return Object(l.jsxs)("li",{className:"thumbnail",children:[Object(l.jsx)("a",{href:"#!/phones/motorola-xoom-with-wi-fi",className:"thumb",children:Object(l.jsx)("img",{alt:e.id,src:e.imageUrl})}),Object(l.jsx)("div",{className:"phones__btn-buy-wrapper",children:Object(l.jsx)("a",{className:"btn btn-success",href:"#buy",children:"Add"})}),Object(l.jsx)("a",{href:"#!/phones/motorola-xoom-with-wi-fi",onClick:function(){return t(e.id)},children:e.name}),Object(l.jsx)("p",{children:e.snippet})]},e.id)}))})};var d=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(0),j=Object(a.a)(i,2),o=j[0],d=j[1];return Object(n.useEffect)((function(){r("/api/phones.json").then(s)}),[]),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-2",children:[Object(l.jsxs)("section",{children:[Object(l.jsxs)("p",{children:["Search:",Object(l.jsx)("input",{type:"text"})]}),Object(l.jsxs)("p",{children:["Sort by:",Object(l.jsxs)("select",{children:[Object(l.jsx)("option",{value:"name",children:"Alphabetical"}),Object(l.jsx)("option",{value:"age",children:"Newest"})]})]})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)("p",{children:"Shopping Cart"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Phone 1"}),Object(l.jsx)("li",{children:"Phone 2"}),Object(l.jsx)("li",{children:"Phone 3"})]})]})]}),Object(l.jsx)("div",{className:"col-md-10",children:o?Object(l.jsx)(b,{id:o,reset:function(){return d(0)}}):Object(l.jsx)(h,{phones:c,select:function(e){d(e)}})})]})})};j.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.9df5377e.chunk.js.map