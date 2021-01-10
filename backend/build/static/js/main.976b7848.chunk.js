(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),s=n(19),a=n.n(s),j=(n(61),n(14)),o=n(48),l=(n(62),n(117)),b=n(113),d=n(116),h=n(114),O=function(e){e.socket,e.setPage;var t=e.admin,n=e.startCallback;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d.a,{size:"large",color:"primary",variant:"contained",onClick:n,children:"Start Game"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a,{}),Object(c.jsx)("p",{children:"Waiting for the host to start the game..."})]})]})})})},u=n(115),x=n(53),g=n.n(x),m=function(e){e.socket,e.setPage;var t=Object(r.useState)(""),n=Object(j.a)(t,2);n[0],n[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)("h1",{children:"Error"}),Object(c.jsx)("h4",{children:"A critical error occured!"}),Object(c.jsxs)("p",{children:["This is my fault and I'm sorry that you had to experience this error.",Object(c.jsx)("br",{}),"Please try to refresh the page."]}),Object(c.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){window.location.reload()},children:"Refresh"})]})})})},f=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),Object(c.jsxs)("p",{children:["Your connection has been refused!",Object(c.jsx)("br",{}),"There's either a game running and/or you have been disqualified!"]})]})})})},p=function(e){var t=e.socket,n=(e.setPage,null),i=null,s=Object(j.a)(!0,2),a=s[0],o=s[1],O=Object(r.useState)(0),x=Object(j.a)(O,2),g=x[0],m=x[1];t.on("question",(function(e){i=e,o(!1),n=setInterval((function(){m(g+1),20==g&&t.emit("timeup")}),1e3)}));var f=function(e){t.emit("answer",e),clearInterval(n),o(!0)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(b.a,{children:a?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a,{}),Object(c.jsx)("p",{children:"Waiting for question..."})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:i.question}),Object(c.jsxs)(u.a,{children:[Object(c.jsx)(u.a,{item:!0,xs:6,children:Object(c.jsx)(d.a,{size:"large",variant:"outlined",onClick:f(0),children:i.answer[0]})}),Object(c.jsx)(u.a,{item:!0,xs:6,children:Object(c.jsx)(d.a,{size:"large",variant:"outlined",onClick:f(1),children:i.answer[1]})}),Object(c.jsx)(u.a,{item:!0,xs:6,children:Object(c.jsx)(d.a,{size:"large",variant:"outlined",onClick:f(2),children:i.answer[2]})}),Object(c.jsx)(u.a,{item:!0,xs:6,children:Object(c.jsx)(d.a,{size:"large",variant:"outlined",onClick:f(3),children:i.answer[3]})})]}),Object(c.jsxs)("p",{children:["Remaining time: ",20-g," seconds"]})]})})})})},v=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)("h1",{children:"You won!"}),Object(c.jsx)("p",{children:"You are the winner!"})]})})})},k=function(e){e.socket,e.setPage;var t=e.place;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)("h1",{children:"You lost!"}),Object(c.jsxs)("h4",{children:["You got in ",t,". place"]})]})})})};var w=function(){var e=g()({upgrade:!1}),t=Object(r.useState)("home"),n=Object(j.a)(t,2),i=n[0],s=n[1],a=Object(r.useState)(!1),l=Object(j.a)(a,2),b=l[0],d=l[1],h=Object(r.useState)(0),x=Object(j.a)(h,2),w=x[0],y=x[1];return e.on("refused",(function(){s("refused")})),e.on("admin",(function(){d(!0)})),e.on("start",(function(){Object(o.a)("page"),i="game"})),e.on("wrong",(function(e){y(e),s("lost")})),e.on("won",(function(){s("won")})),e.on("disconnect",(function(){e.removeAllListeners()})),Object(c.jsx)(u.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{textAlign:"center",minHeight:"100vh"},children:Object(c.jsxs)(u.a,{children:["home"==i?Object(c.jsx)(O,{admin:b,startCallback:function(){e.emit("start")}}):"refused"==i?Object(c.jsx)(f,{}):"game"==i?Object(c.jsx)(p,{}):"won"==i?Object(c.jsx)(v,{}):"lost"==i?Object(c.jsx)(k,{place:w}):Object(c.jsx)(m,{}),Object(c.jsx)("div",{class:"copy",children:Object(c.jsx)("p",{children:"Quiz Battle Royal \xa9 2021 Ruben Kober"})})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),y()}},[[98,1,2]]]);
//# sourceMappingURL=main.976b7848.chunk.js.map