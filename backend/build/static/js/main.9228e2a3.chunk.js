(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n(19),r=n.n(i),a=(n(60),n(14)),j=(n(61),n(116)),l=n(112),o=n(115),b=n(113),d=function(e){e.socket,e.setPage;var t=e.admin,n=e.startCallback;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{size:"large",color:"primary",variant:"contained",onClick:n,children:"Start Game"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{}),Object(c.jsx)("p",{children:"Waiting for the host to start the game..."})]})]})})})},u=n(114),h=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),Object(c.jsxs)("p",{children:["Your connection has been refused!",Object(c.jsx)("br",{}),"There's either a game running and/or you have been disqualified!"]})]})})})},O=function(e){var t=e.socket,n=(e.setPage,null),i=null,r=Object(a.a)(!0,2),d=r[0],h=r[1],O=Object(s.useState)(0),x=Object(a.a)(O,2),g=x[0],f=x[1];t.on("question",(function(e){i=e,h(!1),n=setInterval((function(){f(g+1),20==g&&t.emit("timeup")}),1e3)}));var m=function(e){t.emit("answer",e),clearInterval(n),h(!0)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:["fsjajskdfjaslkdf",d?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{}),Object(c.jsx)("p",{children:"Waiting for question..."})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:i.question}),Object(c.jsxs)(u.a,{children:[Object(c.jsx)(u.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:m(0),children:i.answer[0]})}),Object(c.jsx)(u.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:m(1),children:i.answer[1]})}),Object(c.jsx)(u.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:m(2),children:i.answer[2]})}),Object(c.jsx)(u.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:m(3),children:i.answer[3]})})]}),Object(c.jsxs)("p",{children:["Remaining time: ",20-g," seconds"]})]})]})})})},x=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"You won!"}),Object(c.jsx)("p",{children:"You are the winner!"})]})})})},g=function(e){e.socket,e.setPage;var t=e.place;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"You lost!"}),Object(c.jsxs)("h4",{children:["You got in ",t,". place"]})]})})})},f=n(52),m=n.n(f)()();var v=function(){var e=Object(s.useState)("home"),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(!1),j=Object(a.a)(r,2),l=j[0],o=j[1],b=Object(s.useState)(0),f=Object(a.a)(b,2),v=f[0],p=f[1];return m.on("refused",(function(){i("refused")})),m.on("admin",(function(){o(!0)})),m.on("start",(function(){i("game")})),m.on("wrong",(function(e){p(e),i("lost")})),m.on("won",(function(){i("won")})),m.on("disconnect",(function(){m.removeAllListeners()})),Object(s.useEffect)((function(){console.log(n)}),[n]),Object(c.jsx)(u.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{textAlign:"center",minHeight:"100vh"},children:Object(c.jsxs)(u.a,{children:["home"==n?Object(c.jsx)(d,{admin:l,startCallback:function(){m.emit("start")}}):null,"refused"==n?Object(c.jsx)(h,{}):null,"game"==n?Object(c.jsx)(O,{socket:m}):null,"won"==n?Object(c.jsx)(x,{}):null,"lost"==n?Object(c.jsx)(g,{place:v}):null,Object(c.jsx)("div",{class:"copy",children:Object(c.jsx)("p",{children:"Quiz Battle Royal \xa9 2021 Ruben Kober"})})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(c.jsx)(v,{}),document.getElementById("root")),p()}},[[97,1,2]]]);
//# sourceMappingURL=main.9228e2a3.chunk.js.map