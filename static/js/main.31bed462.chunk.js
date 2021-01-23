(this.webpackJsonpdeploy_todo=this.webpackJsonpdeploy_todo||[]).push([[0],{27:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e(1),i=e.n(a),o=e(12),c=e.n(o),d=e(17),l=e(4),s=e(2),b=e(3);function u(){var n=Object(s.a)(["\n  h2 {\n    font-size: 34px;\n    padding-top: 20px;\n  }\n  h4 {\n    padding-top: 15px;\n    font-size: 22px;\n    font-style: italic;\n    font-weight: 300;\n  }\n"]);return u=function(){return n},n}var g=b.a.div(u()),p=function(n){var t=n.data,e=t.filter((function(n){return!n.done}));return Object(r.jsxs)(g,{children:[Object(r.jsx)("h2",{children:"Todo List"}),Object(r.jsxs)("h4",{children:[e.length," more to do, ",t.length-e.length," done"]})]})};function f(){var n=Object(s.a)(["\n  position: absolute;\n  bottom: -20px;\n  right: -5px;\n  form {\n    align-items: center;\n  }\n  input {\n    font-size: 20px;\n    border-radius: 10px;\n    outline: none;\n    padding: 2px 0px 2px 5px;\n  }\n  button {\n    margin-left: 3px;\n    width: 40px;\n    height: 40px;\n    border-radius: 30%;\n    outline: none;\n    &:hover {\n      color: #b71540;\n    }\n  }\n"]);return f=function(){return n},n}var x=b.a.div(f()),j=function(n){var t=n.dataAdd,e=Object(a.useState)(""),i=Object(l.a)(e,2),o=i[0],c=i[1];return Object(r.jsx)(x,{children:Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),o.length>0&&(t(o),c(""))},children:[Object(r.jsx)("input",{type:"text",value:o,onChange:function(n){return c(n.target.value)}}),Object(r.jsx)("button",{children:Object(r.jsx)("i",{className:"far fa-bell fa-2x"})})]})})},m=e(8);function h(){var n=Object(s.a)(['\n  margin-bottom: 10px;\n  .list_string {\n    display: flex;\n    justify-content: space-around;\n    margin-left: 55px;\n    margin-top: 30px;\n    margin-bottom: 20px;\n    word-wrap: break-word;\n    font-family: Consolas;\n    &:last-child {\n      margin-bottom: 30px;\n    }\n    p {\n      width: 30px;\n      height: 30px;\n      border-radius: 27%;\n      cursor: pointer;\n\n      &:last-child {\n        margin-left: -25px;\n      }\n      &:hover {\n        color: #fff;\n      }\n    }\n  }\n  .list_name {\n    max-width: 140px;\n    font-size: 16px;\n    cursor: pointer;\n  }\n\n  .list_number {\n    margin-right: -35px;\n  }\n\n  .list_done {\n    text-decoration: line-through;\n    text-decoration-color: #fff;\n  }\n\n  .list_important {\n    color: #8b0000;\n    font-size: 20px;\n  }\n  .list_pagination {\n    display: flex;\n    justify-content: center;\n    font-family: "Courier New";\n    margin-bottom: 25px;\n    p {\n      cursor: pointer;\n      font-size: 18px;\n      padding: 5px;\n      &:not(first-child) {\n        margin-left: 15px;\n      }\n    }\n    .pagAc {\n      color: #8b0000;\n      border: 1px solid black;\n      border-radius: 75%;\n    }\n  }\n']);return h=function(){return n},n}var O=b.a.div(h()),v=function(n){var t=n.data,e=n.deleteItem,i=n.importantItem,o=n.doneItem,c=Object(a.useState)(null),d=Object(l.a)(c,2),s=d[0],b=d[1],u=Object(a.useState)(0),g=Object(l.a)(u,2),p=g[0],f=g[1];Object(a.useEffect)((function(){b(Object(m.chunk)(t,6))}),[t]),Object(m.reverse)(t);var x=(Object(m.chunk)(t,6)[p]||t).map((function(n,t){var a="list_name"+(n.important?" list_important":" ")+(n.done?" list_done":" ");return Object(r.jsxs)("div",{className:"list_string",children:[Object(r.jsx)("div",{className:"list_number",children:t+1}),Object(r.jsx)("div",{className:a,onClick:function(){return o(n.id)},children:n.label}),Object(r.jsx)("p",{onClick:function(){return e(n.id)},children:Object(r.jsx)("i",{className:"far fa-bell-slash"})}),Object(r.jsx)("p",{onClick:function(){return i(n.id)},children:Object(r.jsx)("i",{className:"fas fa-exclamation"})})]},t)}));return Object(r.jsxs)(O,{children:[Object(r.jsx)("div",{children:x}),Object(r.jsx)("div",{className:"list_pagination",children:s&&s.map((function(n,t){return Object(r.jsx)("p",{onClick:function(){return f(t)},className:p===t?"pagAc":"",children:t+1},t)}))})]})};function _(){var n=Object(s.a)(["\n  button {\n    width: 40px;\n    height: 40px;\n    border-radius: 30%;\n    margin: 15px 0;\n    outline: none;\n    &:not(:first-child) {\n      margin-left: 5px;\n    }\n    &:hover {\n      color: #b71540;\n    }\n  }\n  input {\n    font-size: 20px;\n    border-radius: 10px;\n    outline: none;\n    padding: 2px 0px 2px 5px;\n  }\n  .btn_active {\n    border: 3px solid #b71540;\n  }\n  .todo_p {\n    margin-bottom: 5px;\n  }\n"]);return _=function(){return n},n}var k=b.a.div(_()),w=function(n){var t=n.setActive,e=n.data,i=n.setSearchValue,o=n.searchValue,c=Object(a.useState)([{id:"all",class:"btn_active"},{id:"active",class:""},{id:"done",class:""}]),d=Object(l.a)(c,2),s=d[0],b=d[1],u=function(n){b(s.map((function(t){return n===t.id?t.class="btn_active":t.class="",t}))),t(n)};return Object(r.jsxs)(k,{children:[Object(r.jsxs)("div",{className:"button_search",children:[Object(r.jsx)("button",{onClick:function(){return u("all")},className:s[0].class,id:s[0].id,children:Object(r.jsx)("i",{className:"fab fa-buffer fa-2x"})}),Object(r.jsx)("button",{onClick:function(){return u("active")},className:s[1].class,id:s[1].id,children:Object(r.jsx)("i",{className:"far fa-bookmark fa-2x"})}),Object(r.jsx)("button",{onClick:function(){return u("done")},className:s[2].class,id:s[2].id,children:Object(r.jsx)("i",{className:"fas fa-bookmark fa-2x"})})]}),e.length>0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"text",value:o,onChange:function(n){return i(n.target.value)}}),Object(r.jsx)("p",{className:"todo_p",children:"____________________"})]}):Object(r.jsx)("p",{className:"todo_p",children:"____________________"})]})},y=e(16);function N(){var n=Object(s.a)(["\n  text-align: center;\n  min-width: 300px;\n  background: rgba(123, 145, 24, 1);\n  background: -moz-linear-gradient(\n    left,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  background: -webkit-gradient(\n    left top,\n    right top,\n    color-stop(0%, rgba(123, 145, 24, 1)),\n    color-stop(94%, rgba(59, 64, 36, 1)),\n    color-stop(99%, rgba(56, 60, 37, 1))\n  );\n  background: -webkit-linear-gradient(\n    left,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  background: -o-linear-gradient(\n    left,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  background: -ms-linear-gradient(\n    left,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  background: linear-gradient(\n    to right,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7b9118', endColorstr='#383c25', GradientType=1 );\n  border-radius: 42px 42px 0px 200px;\n  -moz-border-radius: 42px 42px 0px 200px;\n  -webkit-border-radius: 42px 42px 0px 200px;\n  border: 4px solid #453138;\n  padding-left: 6px;\n  margin: 20px 0;\n  position: relative;\n"]);return N=function(){return n},n}function C(){var n=Object(s.a)(["\n  text-align: center;\n  min-width: 400px;\n  background: rgba(123, 145, 24, 1);\n  background: -moz-linear-gradient(\n    left,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  background: -webkit-gradient(\n    left top,\n    right top,\n    color-stop(0%, rgba(123, 145, 24, 1)),\n    color-stop(94%, rgba(59, 64, 36, 1)),\n    color-stop(99%, rgba(56, 60, 37, 1))\n  );\n  background: -webkit-linear-gradient(\n    left,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  background: -o-linear-gradient(\n    left,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  background: -ms-linear-gradient(\n    left,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  background: linear-gradient(\n    to right,\n    rgba(123, 145, 24, 1) 0%,\n    rgba(59, 64, 36, 1) 94%,\n    rgba(56, 60, 37, 1) 99%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7b9118', endColorstr='#383c25', GradientType=1 );\n  border-radius: 42px 42px 0px 200px;\n  -moz-border-radius: 42px 42px 0px 200px;\n  -webkit-border-radius: 42px 42px 0px 200px;\n  border: 6px solid #453138;\n  padding-left: 10px;\n  margin: 30px 0;\n  position: relative;\n"]);return C=function(){return n},n}function S(){var n=Object(s.a)(["\n  * {\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n  a {\n    text-decoration: none;\n  }\n\n  ul li {\n    list-style: none;\n  }\n\n  button {\n    cursor: pointer;\n  }\n  position: relative;\n  background: -webkit-gradient(\n    radial,\n    center center,\n    0px,\n    center center,\n    100%,\n    color-stop(0%, rgba(77, 28, 25, 1)),\n    color-stop(17%, rgba(105, 17, 29, 1)),\n    color-stop(40%, rgba(143, 2, 34, 1)),\n    color-stop(54%, rgba(143, 2, 34, 1)),\n    color-stop(81%, rgba(77, 17, 30, 1)),\n    color-stop(100%, rgba(31, 28, 28, 1))\n  );\n  background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    rgba(77, 28, 25, 1) 0%,\n    rgba(105, 17, 29, 1) 17%,\n    rgba(143, 2, 34, 1) 40%,\n    rgba(143, 2, 34, 1) 54%,\n    rgba(77, 17, 30, 1) 81%,\n    rgba(31, 28, 28, 1) 100%\n  );\n  background: -o-radial-gradient(\n    center,\n    ellipse cover,\n    rgba(77, 28, 25, 1) 0%,\n    rgba(105, 17, 29, 1) 17%,\n    rgba(143, 2, 34, 1) 40%,\n    rgba(143, 2, 34, 1) 54%,\n    rgba(77, 17, 30, 1) 81%,\n    rgba(31, 28, 28, 1) 100%\n  );\n  background: -ms-radial-gradient(\n    center,\n    ellipse cover,\n    rgba(77, 28, 25, 1) 0%,\n    rgba(105, 17, 29, 1) 17%,\n    rgba(143, 2, 34, 1) 40%,\n    rgba(143, 2, 34, 1) 54%,\n    rgba(77, 17, 30, 1) 81%,\n    rgba(31, 28, 28, 1) 100%\n  );\n  background: radial-gradient(\n    ellipse at center,\n    rgba(77, 28, 25, 1) 0%,\n    rgba(105, 17, 29, 1) 17%,\n    rgba(143, 2, 34, 1) 40%,\n    rgba(143, 2, 34, 1) 54%,\n    rgba(77, 17, 30, 1) 81%,\n    rgba(31, 28, 28, 1) 100%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d1c19', endColorstr='#1f1c1c', GradientType=1 );\n  min-height: 100vh;\n  /* min-width: 100vh; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n"]);return S=function(){return n},n}var I=b.a.div(S()),z=b.a.div(C()),T=b.a.div(N()),A=function(){var n=Object(a.useState)((function(){var n=JSON.parse(localStorage.getItem("dataTodo"));return n.length>0?n:[{label:"sleep and drink coffee",id:"23444",done:!1,important:!0},{label:"drink coffee again",id:"55666",done:!1,important:!1},{label:"drink coffee",id:"757589696",done:!1,important:!1}]})),t=Object(l.a)(n,2),e=t[0],i=t[1],o=Object(a.useState)(e),c=Object(l.a)(o,2),s=c[0],b=c[1],u=Object(a.useState)("all"),g=Object(l.a)(u,2),f=g[0],x=g[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),O=h[0],_=h[1];Object(a.useEffect)((function(){localStorage.setItem("dataTodo",JSON.stringify(e))}),[e]),Object(a.useEffect)((function(){b(function(n,t){if(!n)return null;if(0===t.length)return n;return n.filter((function(n){return n.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}(e,O))}),[e,O,b]);var k=Object(y.useMediaQuery)({query:"(min-width: 500px)"});var N=function(n){i(e.filter((function(t){return t.id!==n})))},C=function(n){i(e.map((function(t){return t.id===n&&(t.important=!t.important),t})))},S=function(n){i(e.map((function(t){return t.id===n&&(t.done=!t.done),t})))},A=function(n){i([].concat(Object(d.a)(e),[{label:n,id:Date.now().toString(),done:!1,important:!1}]))},D=function(n){return"active"===n?s.filter((function(n){return!n.done})):"done"===n?s.filter((function(n){return n.done})):s},M=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{data:e}),Object(r.jsx)(w,{setActive:x,data:e,searchValue:O,setSearchValue:_}),Object(r.jsx)(v,{data:D(f),setSearchValue:!0,deleteItem:N,importantItem:C,doneItem:S}),Object(r.jsx)(j,{dataAdd:A})]})};return Object(r.jsx)(I,{children:k?Object(r.jsx)(z,{children:M()}):Object(r.jsx)(T,{children:M()})})};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.31bed462.chunk.js.map