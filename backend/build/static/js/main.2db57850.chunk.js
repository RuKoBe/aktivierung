(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),s=n(19),r=n.n(s),a=(n(60),n(9)),j=(n(61),n(116)),o=n(112),l=n(115),u=n(113),b=function(e){e.socket,e.setPage;var t=e.admin,n=e.startCallback;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{size:"large",color:"primary",variant:"contained",onClick:n,children:"Start Game"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{}),Object(c.jsx)("p",{children:"Waiting for the host to start the game..."})]})]})})})},d=n(114),O=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),Object(c.jsxs)("p",{children:["Your connection has been refused!",Object(c.jsx)("br",{}),"There's either a game running and/or you have been disqualified!"]})]})})})},h=n(52),x=n.n(h)()(),f=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(null),b=Object(a.a)(r,2),d=b[0],O=b[1],h=Object(i.useState)(!0),f=Object(a.a)(h,2),g=f[0],m=f[1],v=Object(i.useState)(0),p=Object(a.a)(v,2),k=p[0],w=p[1];function F(e){return decodeURI(e)}x.on("question",(function(e){O(e),m(!1),s(setInterval((function(){w(k+1),20==k&&x.emit("timeup")}),1e3))}));var C=function(e){x.emit("answer",e),clearInterval(n),m(!0)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(o.a,{children:g?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{}),Object(c.jsx)("p",{children:"Waiting for question..."})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:d.question}),Object(c.jsx)(l.a,{size:"large",variant:"outlined",onClick:function(){C(0)},children:F(d.answers[0])}),Object(c.jsx)(l.a,{size:"large",variant:"outlined",onClick:function(){C(1)},children:F(d.answers[1])}),Object(c.jsx)(l.a,{size:"large",variant:"outlined",onClick:function(){C(2)},children:F(d.answers[2])}),Object(c.jsx)(l.a,{size:"large",variant:"outlined",onClick:function(){C(3)},children:F(d.answers[3])}),Object(c.jsxs)("p",{children:["Remaining time: ",20-k," seconds"]})]})})})})},g=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"You won!"}),Object(c.jsx)("p",{children:"You are the winner!"})]})})})},m=function(e){e.socket,e.setPage;var t=e.place;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"You lost!"}),Object(c.jsxs)("h4",{children:["You got in ",t,". place"]})]})})})};var v=function(){var e=Object(i.useState)("home"),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(!1),j=Object(a.a)(r,2),o=j[0],l=j[1],u=Object(i.useState)(0),h=Object(a.a)(u,2),v=h[0],p=h[1];return x.on("refused",(function(){s("refused")})),x.on("admin",(function(){l(!0)})),x.on("start",(function(){s("game")})),x.on("wrong",(function(e){p(e),s("lost")})),x.on("won",(function(){s("won")})),x.on("disconnect",(function(){x.removeAllListeners()})),Object(i.useEffect)((function(){console.log(n)}),[n]),Object(c.jsx)(d.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{textAlign:"center",minHeight:"100vh"},children:Object(c.jsxs)(d.a,{children:["home"==n?Object(c.jsx)(b,{admin:o,startCallback:function(){x.emit("start")}}):null,"refused"==n?Object(c.jsx)(O,{}):null,"game"==n?Object(c.jsx)(f,{socket:x}):null,"won"==n?Object(c.jsx)(g,{}):null,"lost"==n?Object(c.jsx)(m,{place:v}):null,Object(c.jsx)("div",{class:"copy",children:Object(c.jsx)("p",{children:"Quiz Battle Royal \xa9 2021 Ruben Kober"})})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(c.jsx)(v,{}),document.getElementById("root")),p()}},[[97,1,2]]]);
//# sourceMappingURL=main.2db57850.chunk.js.map