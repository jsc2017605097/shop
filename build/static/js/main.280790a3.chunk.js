(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(89),a(14)),i=a(49),m=a(10),u=(a(90),a(27)),s={type:"LOGOUT"},d=a(40),p=a.n(d);function E(e){var t=e.handleExitAddCategory,a=r.a.useState(""),n=Object(o.a)(a,2),c=n[0],l=n[1],i=r.a.useState(""),m=Object(o.a)(i,2),u=m[0],s=m[1];return r.a.createElement("div",{className:"add-category"},r.a.createElement("div",{className:"exit"},r.a.createElement("button",{onClick:t},"Tho\xe1t")),r.a.createElement("div",{className:"wrap-form-add-category"},r.a.createElement("div",{className:"form-add-category"},r.a.createElement("input",{type:"text",placeholder:"T\xean s\u1ea3n ph\u1ea9m",onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{onClick:function(){p.a.post("/api/category",{name:c}).then((function(e){s(""),console.log(e.data),t()})).catch((function(e){s(e.response.data)}))}},"Th\xeam m\u1edbi"),r.a.createElement("p",{style:{color:"white"}},u))))}var h=a(176),f=a(173),v=a(177),g=a(178),b=a(175),y=a(170),O=a(75),C=a.n(O),j=a(76),k=a.n(j),N=Object(y.a)((function(e){return{input:{display:"none"}}}));function T(e){var t=e.exitFormAddProduct,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),d=s[0],p=s[1],E=Object(n.useState)(!1),y=Object(o.a)(E,2),O=y[0],j=y[1];console.log(l);var T=Object(u.c)((function(e){return e.categories})),w=N();return r.a.createElement("div",{className:"add-product"},r.a.createElement("div",{className:"exit"},r.a.createElement("button",{onClick:t},"Tho\xe1t"),r.a.createElement("button",{onClick:function(){j(!O)}},"Zoom")),r.a.createElement("div",{className:O?"form-add-product zoom":"form-add-product "},r.a.createElement("form",null,r.a.createElement(h.a,{id:"standard-basic",label:"T\xean s\u1ea3n ph\u1ea9m"}),r.a.createElement("div",{style:{margin:"10px 0px 0px 0px"}},r.a.createElement("input",{accept:"image/*",className:w.input,id:"contained-button-file",multiple:!0,type:"file"}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(b.a,{variant:"contained",color:"primary",component:"span"},"Upload"))),r.a.createElement(f.a,{startAdornment:r.a.createElement(v.a,{position:"start"},"$")}),r.a.createElement(f.a,{startAdornment:r.a.createElement(v.a,{position:"start"},"$ Old")}),r.a.createElement("div",{className:"ckeditor"},r.a.createElement(C.a,{editor:k.a,data:l,config:{ckfinder:{uploadUrl:"/api/uploads"}},onChange:function(e,t){var a=t.getData();i(a)}})),T.length>0?r.a.createElement(h.a,{id:"standard-select-currency",select:!0,label:"Category",helperText:"Please select a category",value:d,name:"category",onChange:function(e){var t=e.target,a=t.name,n=t.value;console.log("name of input: ",a),console.log("value of input:",n),p(n),console.log("setstated")}},T.map((function(e){return r.a.createElement(g.a,{key:e._id,value:e._id},e.name)}))):"Loading....",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Th\xeam m\u1edbi"))))}function w(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.user})),a=Object(m.f)(),n=r.a.useState(!1),c=Object(o.a)(n,2),l=c[0],i=c[1],d=r.a.useState(!1),p=Object(o.a)(d,2),h=p[0],f=p[1];return r.a.createElement("div",{className:"admin-home"},r.a.createElement("div",{className:"admin-home-header"},r.a.createElement("div",{className:""},r.a.createElement("b",null,"Harukostore.net")),r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"text",placeholder:"T\xecm ki\u1ebfm s\u1ea3n ph\u1ea9m"})),r.a.createElement("div",{className:"profile"},r.a.createElement("p",null,"Username: ",t.username),r.a.createElement("p",null,"T\xean ng\u01b0\u1eddi d\xf9ng: ",t.name),r.a.createElement("button",{onClick:function(){console.log("logout"),e(s),window.localStorage.removeItem("token"),a.push("/login")}},"Log out"))),r.a.createElement("div",{className:"admin-home-categories"},r.a.createElement("p",null,"Welcome ",t.name)),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){f(!0)}},"Th\xeam m\u1edbi s\u1ea3n ph\u1ea9m"),r.a.createElement("button",{onClick:function(){i(!0)}},"Th\xeam m\u1edbi danh m\u1ee5c")),l&&r.a.createElement(E,{handleExitAddCategory:function(){i(!1)}}),h&&r.a.createElement(T,{exitFormAddProduct:function(){f(!1)}}))}var S=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),a=t[0],n=t[1],c=r.a.useState({status:"init"}),l=Object(o.a)(c,2),u=l[0],s=l[1];function d(){switch(u.status){case"init":return null;case"uploading":return r.a.createElement("p",null,u.error);case"uploaded":return r.a.createElement("img",{src:u.url,alt:u.url});default:return null}}return r.a.createElement(i.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/admin"},r.a.createElement(w,null)),r.a.createElement(m.a,{path:"/upload"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s({status:"uploading"});var t=new FormData;t.append("myFile",a),p()({method:"post",url:"/upload",data:t,headers:{"Content-Type":"multipart/form-data",Authorization:"token ne"}}).then((function(e){return s({status:"uploaded",url:e.data})})).catch((function(e){s({status:"error",error:e.response.data})}))}},r.a.createElement("input",{type:"file",onChange:function(e){n(e.target.files[0])}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Upload")),r.a.createElement(d,null)),r.a.createElement(m.a,{path:"/",exact:!0},"Home")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(77),A=a(28);var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_TOKEN_SUCCESSLY":return t.data;case"CHECK_TOKEN_ERROR":case"LOGOUT":return{};default:return e}};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return t.data;default:return e}},F=Object(A.combineReducers)({user:U,categories:_}),L=Object(A.createStore)(F,Object(x.composeWithDevTools)());l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:L},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a(134)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.280790a3.chunk.js.map