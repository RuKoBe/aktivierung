(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n(19),r=n.n(i),a=(n(60),n(9)),j=(n(61),n(116)),l=n(112),o=n(115),b=n(113),u=function(e){e.socket,e.setPage;var t=e.admin,n=e.startCallback;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{size:"large",color:"primary",variant:"contained",onClick:n,children:"Start Game"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{}),Object(c.jsx)("p",{children:"Waiting for the host to start the game..."})]})]})})})},d=n(114),O=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),Object(c.jsxs)("p",{children:["Your connection has been refused!",Object(c.jsx)("br",{}),"There's either a game running and/or you have been disqualified!"]})]})})})},h=n(52),x=n.n(h)()(),g=function(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(null),u=Object(a.a)(r,2),O=u[0],h=u[1],g=Object(s.useState)(!0),m=Object(a.a)(g,2),f=m[0],v=m[1],p=Object(s.useState)(0),k=Object(a.a)(p,2),w=k[0],F=k[1];x.on("question",(function(e){console.log(e),h(e),v(!1),i(setInterval((function(){F(w+1),20==w&&x.emit("timeup")}),1e3))}));var C=function(e){x.emit("answer",e),clearInterval(n),v(!0)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(l.a,{children:f?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{}),Object(c.jsx)("p",{children:"Waiting for question..."})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:O.question}),Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:C(0),children:O.answers[0]})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:C(1),children:O.answers[1]})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:C(2),children:O.answers[2]})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:C(3),children:O.answers[3]})})]}),Object(c.jsxs)("p",{children:["Remaining time: ",20-w," seconds"]})]})})})})},m=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"You won!"}),Object(c.jsx)("p",{children:"You are the winner!"})]})})})},f=function(e){e.socket,e.setPage;var t=e.place;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"You lost!"}),Object(c.jsxs)("h4",{children:["You got in ",t,". place"]})]})})})};var v=function(){var e=Object(s.useState)("home"),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(!1),j=Object(a.a)(r,2),l=j[0],o=j[1],b=Object(s.useState)(0),h=Object(a.a)(b,2),v=h[0],p=h[1];return x.on("refused",(function(){i("refused")})),x.on("admin",(function(){o(!0)})),x.on("start",(function(){i("game")})),x.on("wrong",(function(e){p(e),i("lost")})),x.on("won",(function(){i("won")})),x.on("disconnect",(function(){x.removeAllListeners()})),Object(s.useEffect)((function(){console.log(n)}),[n]),Object(c.jsx)(d.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{textAlign:"center",minHeight:"100vh"},children:Object(c.jsxs)(d.a,{children:["home"==n?Object(c.jsx)(u,{admin:l,startCallback:function(){x.emit("start")}}):null,"refused"==n?Object(c.jsx)(O,{}):null,"game"==n?Object(c.jsx)(g,{socket:x}):null,"won"==n?Object(c.jsx)(m,{}):null,"lost"==n?Object(c.jsx)(f,{place:v}):null,Object(c.jsx)("div",{class:"copy",children:Object(c.jsx)("p",{children:"Quiz Battle Royal \xa9 2021 Ruben Kober"})})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(c.jsx)(v,{}),document.getElementById("root")),p()}},[[97,1,2]]]);
//# sourceMappingURL=main.e2522617.chunk.js.map