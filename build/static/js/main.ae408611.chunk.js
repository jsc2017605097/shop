(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),l=(a(89),a(37)),i=a(10),m=a(24),u=a.n(m),s=a(19),d=(a(112),a(12));function p(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(d.a)(o,2),m=l[0],s=l[1],p=Object(n.useState)(""),E=Object(d.a)(p,2),b=E[0],h=E[1],g=Object(n.useState)(!1),f=Object(d.a)(g,2),v=f[0],O=f[1],y=Object(i.g)();function j(e){switch(e.target.name){case"username":r(e.target.value);break;case"password":s(e.target.value);break;default:return 1}}function w(){return b?c.a.createElement("div",{style:{color:"red"}},b):null}return Object(n.useEffect)((function(){window.localStorage.getItem("token")&&y.push("/admin")}),[y]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h(""),O(!0);var t={username:a,password:m};u.a.post("/api/login",t).then((function(e){var t="bearer "+e.data;window.localStorage.setItem("token",t),y.push("/admin")})).catch((function(e){O(!1),h(e.response.data)}))}},c.a.createElement("input",{type:"text",name:"username",value:a,onChange:j,placeholder:"username"}),c.a.createElement("br",null),c.a.createElement("input",{type:"password",name:"password",value:m,onChange:j,placeholder:"password"}),c.a.createElement("br",null),c.a.createElement("button",{type:"submit"},"Login"),c.a.createElement(w,null),c.a.createElement("br",null),v&&"Loading...")}var E={type:"LOGOUT"};function b(e){var t=e.handleExitAddCategory,a=c.a.useState(""),n=Object(d.a)(a,2),r=n[0],o=n[1],l=c.a.useState(""),i=Object(d.a)(l,2),m=i[0],s=i[1];return c.a.createElement("div",{className:"add-category"},c.a.createElement("div",{className:"exit"},c.a.createElement("button",{onClick:t},"Tho\xe1t")),c.a.createElement("div",{className:"wrap-form-add-category"},c.a.createElement("div",{className:"form-add-category"},c.a.createElement("input",{type:"text",placeholder:"T\xean s\u1ea3n ph\u1ea9m",onChange:function(e){o(e.target.value)}}),c.a.createElement("button",{onClick:function(){u.a.post("/api/category",{name:r}).then((function(e){s(""),console.log(e.data),t()})).catch((function(e){s(e.response.data)}))}},"Th\xeam m\u1edbi"),c.a.createElement("p",{style:{color:"white"}},m))))}var h=a(176),g=a(173),f=a(177),v=a(178),O=a(175),y=a(170),j=a(75),w=a.n(j),C=a(76),k=a.n(C),S=Object(y.a)((function(e){return{input:{display:"none"}}}));function N(e){var t=e.exitFormAddProduct,a=Object(n.useState)(""),r=Object(d.a)(a,2),o=r[0],l=r[1],i=Object(n.useState)(""),m=Object(d.a)(i,2),u=m[0],p=m[1],E=Object(n.useState)(!1),b=Object(d.a)(E,2),y=b[0],j=b[1];console.log(o);var C=Object(s.c)((function(e){return e.categories})),N=S();return c.a.createElement("div",{className:"add-product"},c.a.createElement("div",{className:"exit"},c.a.createElement("button",{onClick:t},"Tho\xe1t"),c.a.createElement("button",{onClick:function(){j(!y)}},"Zoom")),c.a.createElement("div",{className:y?"form-add-product zoom":"form-add-product "},c.a.createElement("form",null,c.a.createElement(h.a,{id:"standard-basic",label:"T\xean s\u1ea3n ph\u1ea9m"}),c.a.createElement("div",{style:{margin:"10px 0px 0px 0px"}},c.a.createElement("input",{accept:"image/*",className:N.input,id:"contained-button-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"contained-button-file"},c.a.createElement(O.a,{variant:"contained",color:"primary",component:"span"},"Upload"))),c.a.createElement(g.a,{startAdornment:c.a.createElement(f.a,{position:"start"},"$")}),c.a.createElement(g.a,{startAdornment:c.a.createElement(f.a,{position:"start"},"$ Old")}),c.a.createElement("div",{className:"ckeditor"},c.a.createElement(w.a,{editor:k.a,data:o,config:{ckfinder:{uploadUrl:"/api/uploads"}},onChange:function(e,t){var a=t.getData();l(a)}})),C.length>0?c.a.createElement(h.a,{id:"standard-select-currency",select:!0,label:"Category",helperText:"Please select a category",value:u,name:"category",onChange:function(e){var t=e.target,a=t.name,n=t.value;console.log("name of input: ",a),console.log("value of input:",n),p(n),console.log("setstated")}},C.map((function(e){return c.a.createElement(v.a,{key:e._id,value:e._id},e.name)}))):"Loading....",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(O.a,{type:"submit",variant:"contained",color:"primary"},"Th\xeam m\u1edbi"))))}function T(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user})),a=Object(i.g)(),n=c.a.useState(!1),r=Object(d.a)(n,2),o=r[0],l=r[1],m=c.a.useState(!1),u=Object(d.a)(m,2),p=u[0],h=u[1];return c.a.createElement("div",{className:"admin-home"},c.a.createElement("div",{className:"admin-home-header"},c.a.createElement("div",{className:""},c.a.createElement("b",null,"Harukostore.net")),c.a.createElement("div",null,c.a.createElement("input",{className:"search",type:"text",placeholder:"T\xecm ki\u1ebfm s\u1ea3n ph\u1ea9m"})),c.a.createElement("div",{className:"profile"},c.a.createElement("p",null,"Username: ",t.username),c.a.createElement("p",null,"T\xean ng\u01b0\u1eddi d\xf9ng: ",t.name),c.a.createElement("button",{onClick:function(){console.log("logout"),e(E),window.localStorage.removeItem("token"),a.push("/login")}},"Log out"))),c.a.createElement("div",{className:"admin-home-categories"},c.a.createElement("p",null,"Welcome ",t.name)),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){h(!0)}},"Th\xeam m\u1edbi s\u1ea3n ph\u1ea9m"),c.a.createElement("button",{onClick:function(){l(!0)}},"Th\xeam m\u1edbi danh m\u1ee5c")),o&&c.a.createElement(b,{handleExitAddCategory:function(){l(!1)}}),p&&c.a.createElement(N,{exitFormAddProduct:function(){h(!1)}}))}var x={initCategory:function(e){return{type:"INIT",data:e}}};var I=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){u.a.get("/api/category").then((function(t){e(x.initCategory(t.data))})).catch()}),[e]),c.a.createElement(l.a,null,c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/admin"},c.a.createElement(T,null)),c.a.createElement(i.b,{path:"/login"},c.a.createElement(p,null)),c.a.createElement(i.b,{path:"/giohang"},"Gio Hang"),c.a.createElement(i.b,{path:"/product/:id"},"Chi tiet san pham"),c.a.createElement(i.b,{path:"/",exact:!0},"Home")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(77),A=a(29);var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_TOKEN_SUCCESSLY":return t.data;case"CHECK_TOKEN_ERROR":case"LOGOUT":return{};default:return e}};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return t.data;default:return e}},H=Object(A.combineReducers)({user:U,categories:_}),K=Object(A.createStore)(H,Object(L.composeWithDevTools)());o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:K},c.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a(134)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.ae408611.chunk.js.map