(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n(19),s=n.n(i),a=(n(60),n(14)),j=(n(61),n(116)),o=n(112),l=n(115),b=n(113),h=function(e){e.socket,e.setPage;var t=e.admin,n=e.startCallback;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{size:"large",color:"primary",variant:"contained",onClick:n,children:"Start Game"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{}),Object(c.jsx)("p",{children:"Waiting for the host to start the game..."})]})]})})})},d=n(114),O=n(52),u=n.n(O),x=function(e){e.socket,e.setPage;var t=Object(r.useState)(""),n=Object(a.a)(t,2);n[0],n[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"Error"}),Object(c.jsx)("h4",{children:"A critical error occured!"}),Object(c.jsxs)("p",{children:["This is my fault and I'm sorry that you had to experience this error.",Object(c.jsx)("br",{}),"Please try to refresh the page."]}),Object(c.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){window.location.reload()},children:"Refresh"})]})})})},g=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),Object(c.jsxs)("p",{children:["Your connection has been refused!",Object(c.jsx)("br",{}),"There's either a game running and/or you have been disqualified!"]})]})})})},m=function(e){var t=e.socket,n=(e.setPage,null),i=null,s=Object(a.a)(!0,2),h=s[0],O=s[1],u=Object(r.useState)(0),x=Object(a.a)(u,2),g=x[0],m=x[1];t.on("question",(function(e){i=e,O(!1),n=setInterval((function(){m(g+1),20==g&&t.emit("timeup")}),1e3)}));var f=function(e){t.emit("answer",e),clearInterval(n),O(!0)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(o.a,{children:h?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{}),Object(c.jsx)("p",{children:"Waiting for question..."})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:i.question}),Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(l.a,{size:"large",variant:"outlined",onClick:f(0),children:i.answer[0]})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(l.a,{size:"large",variant:"outlined",onClick:f(1),children:i.answer[1]})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(l.a,{size:"large",variant:"outlined",onClick:f(2),children:i.answer[2]})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(l.a,{size:"large",variant:"outlined",onClick:f(3),children:i.answer[3]})})]}),Object(c.jsxs)("p",{children:["Remaining time: ",20-g," seconds"]})]})})})})},f=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"You won!"}),Object(c.jsx)("p",{children:"You are the winner!"})]})})})},p=function(e){e.socket,e.setPage;var t=e.place;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("h1",{children:"You lost!"}),Object(c.jsxs)("h4",{children:["You got in ",t,". place"]})]})})})};var v=function(){var e=u()(),t=Object(r.useState)("home"),n=Object(a.a)(t,2),i=n[0],s=n[1],j=Object(r.useState)(!1),o=Object(a.a)(j,2),l=o[0],b=o[1],O=Object(r.useState)(0),v=Object(a.a)(O,2),k=v[0],w=v[1];return e.on("refused",(function(){s("refused")})),e.on("admin",(function(){b(!0)})),e.on("start",(function(){s("game")})),e.on("wrong",(function(e){w(e),s("lost")})),e.on("won",(function(){s("won")})),e.on("disconnect",(function(){e.removeAllListeners()})),Object(c.jsx)(d.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{textAlign:"center",minHeight:"100vh"},children:Object(c.jsxs)(d.a,{children:["home"==i?Object(c.jsx)(h,{admin:l,startCallback:function(){e.emit("start")}}):"refused"==i?Object(c.jsx)(g,{}):"game"==i?Object(c.jsx)(m,{}):"won"==i?Object(c.jsx)(f,{}):"lost"==i?Object(c.jsx)(p,{place:k}):Object(c.jsx)(x,{}),Object(c.jsx)("div",{class:"copy",children:Object(c.jsx)("p",{children:"Quiz Battle Royal \xa9 2021 Ruben Kober"})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(c.jsx)(v,{}),document.getElementById("root")),k()}},[[97,1,2]]]);
//# sourceMappingURL=main.a82cd2ed.chunk.js.map