(this["webpackJsonpreact-auth-template"]=this["webpackJsonpreact-auth-template"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a(29),c=a.n(s),o=(a(89),a(3)),u=a(14),l=a(13),i=Object(r.createContext)(),j=a(2),d="SET_USERNAME",b="SET_USER_ID",m="SET_TOKEN",O="SET_SIGNEDIN",p="SET_ROOMS_ID",h="SET_STATE",f="SET_SERVER_USERS",g="ADD_CACHE",x=[d,b,m,O,p,f,h],v=function(e,t){switch(t.type){case g:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{cachedPfps:[]}):Object(j.a)(Object(j.a)({},e),{},{cachedPfps:t.payload});case d:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{userName:null}):Object(j.a)(Object(j.a)({},e),{},{userName:t.payload});case b:case b:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{userId:null}):Object(j.a)(Object(j.a)({},e),{},{userId:t.payload});case m:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{token:null}):Object(j.a)(Object(j.a)({},e),{},{token:t.payload});case O:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{loggedIn:!1}):Object(j.a)(Object(j.a)({},e),{},{loggedIn:t.payload});case p:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{rooms:null}):Object(j.a)(Object(j.a)({},e),{},{rooms:t.payload});case f:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{serverUsers:null}):Object(j.a)(Object(j.a)({},e),{},{serverUsers:t.payload});case h:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{shouldSaveState:!1}):Object(j.a)(Object(j.a)({},e),{},{shouldSaveState:t.payload});default:return e}},w=a(15),N=a(130),y=a(131),S=a(9),E=a.n(S),C=a(22),k="https://gg-chat-api.herokuapp.com",I="http://localhost:3040",P="localhost"===window.location.hostname?I:k,T=a(18),R=a.n(T),_=function(){var e=Object(C.a)(E.a.mark((function e(t,a){var n,r,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,console.log("buffer:"),console.log(n),(r=new FormData).append("pfp",n),s={method:"POST",body:r},console.log(s),e.abrupt("return",fetch(P+"/upload/"+a,s));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(e){return R()({url:P+"/sign-in/",method:"POST",data:{credentials:{userName:e.userName,password:e.password}}})},D=a(10),G=a(48),L=a(1),U=function(e){var t=e.closeModal,a=Object(r.useContext)(i),n=a.state,s=(a.dispatch,Object(l.f)()),c=n.loggedIn,u=n.token,j=Object(r.useState)(""),d=Object(o.a)(j,2),b=d[0],m=d[1],O=Object(r.useState)(""),p=Object(o.a)(O,2),h=p[0],f=p[1];return c?Object(L.jsx)("div",{className:"row changePass-parent-wrapper ",children:Object(L.jsx)("div",{className:"changePass-form-wrapper",children:Object(L.jsxs)(D.a,{className:"changePass-form",children:[Object(L.jsxs)(D.a.Group,{controlId:"oldPassword",children:[Object(L.jsx)(D.a.Label,{children:"Old password"}),Object(L.jsx)(D.a.Control,{required:!0,name:"oldPassword",value:b,type:"password",placeholder:"Old Password",onChange:function(e){return m(e.target.value)}})]}),Object(L.jsxs)(D.a.Group,{controlId:"newPassword",children:[Object(L.jsx)(D.a.Label,{children:"New Password"}),Object(L.jsx)(D.a.Control,{required:!0,name:"newPassword",value:h,type:"password",placeholder:"New Password",onChange:function(e){return f(e.target.value)}})]}),Object(L.jsx)(G.a,{variant:"primary",type:"button",onClick:function(){(function(e,t){return console.log(e,t,"Hello thereerer"),R()({url:P+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t)},data:{passwords:{old:e.old,new:e.new}}})})({old:b,new:h},u).then((function(e){t(),console.log(props,"kaskdakddkadasndakdaksdkandakdsd")})).then((function(){return s.push("/")})).catch((function(e){f(""),m("")}))},children:"Submit"})]})})}):Object(L.jsx)(l.a,{to:"/"})},B=function(e){e.title;var t=Object(r.useState)(!1),a=Object(o.a)(t,2),n=a[0],s=a[1],c=function(){return s(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(w.b,{to:"/change-password",className:"nav-link",onClick:function(){return s(!0)},children:"Change Password"}),Object(L.jsxs)(y.a,{show:n,onHide:c,centered:!0,children:[Object(L.jsx)(y.a.Header,{closeButton:!0,children:Object(L.jsx)(y.a.Title,{className:"changePass-modal-title",children:"Change Password"})}),Object(L.jsx)(y.a.Body,{children:Object(L.jsx)(l.b,{path:"/change-password",render:function(){return Object(L.jsx)(U,{closeModal:c})}})})]})]})},H=function(e){var t=e.user,a=Object(r.useState)(!1),n=Object(o.a)(a,2);n[0],n[1];return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(N.a,{className:"parent-dropdown-wrapper",children:[Object(L.jsx)(N.a.Toggle,{className:"dropdown-username",children:t.userName}),Object(L.jsxs)(N.a.Menu,{className:"dropdown-menu",children:[Object(L.jsx)(w.b,{to:"/",className:"nav-link",children:"Upload image"}),Object(L.jsx)(B,{}),Object(L.jsx)(N.a.Divider,{className:"divider"}),Object(L.jsx)(w.b,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]})]})})},q=function(e){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(H,{user:e})})},z=Object(L.jsxs)(r.Fragment,{children:[Object(L.jsx)(w.b,{to:"/sign-in",className:"link login",children:"Login"}),Object(L.jsx)(w.b,{to:"/sign-up",className:"link register",children:"Register"})]}),F=function(){var e=Object(r.useContext)(i),t=e.state,a=(e.dispatch,t);return Object(L.jsxs)("div",{className:"header-wrapper",children:[Object(L.jsx)("div",{className:"logo-wrapper",children:Object(L.jsx)(w.b,{to:"/",className:"link",children:Object(L.jsx)("span",{className:"logo-text",children:"Chat APP"})})}),Object(L.jsx)("div",{className:"links-group-1",children:a.loggedIn?q(a):z})]})},M=a(41),J=a(128),V=a(129),Y=a(79),K=a(83),Q=function(e){var t=e.received,a=e.room,n=Object(r.useContext)(i),s=n.state,c=(n.dispatch,s.loggedIn,s.userId,s.token),u=s.userName,l=Object(r.useState)(""),j=Object(o.a)(l,2),d=j[0],b=j[1],m=Object(r.useState)(null),O=Object(o.a)(m,2),p=O[0],h=O[1],f=Object(r.useState)(!1),g=Object(o.a)(f,2),x=g[0],v=g[1],w=Object(r.useState)(!1),N=Object(o.a)(w,2),y=(N[0],N[1]);Object(r.useEffect)((function(){if(!x){console.log("connecting socket");var e=Object(K.a)(P,{withCredentials:!1,query:{token:c}});e.on("connect",(function(){console.log("connected!")})),e.on("loggedin",(function(a){a?(y(!0),e.on("message",t)):(console.log("failed to log in"),alert("failed to log in"))})),h(e),v(!0)}}),[]),Object(r.useEffect)((function(){console.log("seeing this pop up here as well",a),a&&p.emit("join",{roomId:a})}),[a]);return Object(L.jsx)(L.Fragment,{children:""!==a?Object(L.jsxs)("form",{className:"message-input-window",onSubmit:function(e){if(e.preventDefault(),p){var t={message:d,roomId:a,timestamp:(new Date).toLocaleString(),userName:u};p.emit("send-message",t),console.log("sent message: "),console.log(t),b("")}},children:[Object(L.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)},className:"message-input"}),Object(L.jsx)("button",{type:"submit",className:"send-message",children:"Send"})]}):""})},W=function(){var e=Object(C.a)(E.a.mark((function e(t,a,n){var r,s,c,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=window.sessionStorage,s=t.filter((function(e){return!a.some((function(t){return t!==e._id}))})),e.prev=2,e.next=5,Promise.all(s.map(function(){var e=Object(C.a)(E.a.mark((function e(t){var a,n,r,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={userName:t.userName},e.next=3,fetch(P+"/img/"+t.userName);case 3:return n=e.sent,r=n.headers.get("Content-Type"),e.next=7,n.arrayBuffer();case 7:return s=e.sent,a.data=Z(r,s),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return c=e.sent,o=0===a.length?[]:Object(M.a)(a),c.forEach((function(e){r.setItem(e.userName,e.data),o.push(e.userName)})),n({type:g,payload:o}),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a,n){return e.apply(this,arguments)}}(),X=function(e){var t=window.sessionStorage.getItem(e);return t||P+"/img/"+e},Z=function(e,t){var a="data:".concat(e,";base64,"),n="";return new Uint8Array(t).forEach((function(e){return n+=String.fromCharCode(e)})),a+window.btoa(n)},$={color:"rgba(123, 115, 115, .85)"},ee=function(e){console.log("imgurl:");var t=P+"/img/"+e.userName;return console.log(t),Object(L.jsxs)("div",{className:"message-layout",children:[Object(L.jsx)("img",{col:"1",className:"userImage",src:X(e.userName)}),Object(L.jsxs)("li",{col:"2",children:[Object(L.jsx)("strong",{children:e.userName})," ",Object(L.jsx)("a",{style:$,children:e.timestamp}),":",Object(L.jsx)("br",{}),Object(L.jsx)("section",{className:"message-text",children:e.text})]})]})},te=function(e){var t=e.room;return Object(r.useEffect)((function(){console.log("in room: ",t)}),[t]),Object(L.jsx)(L.Fragment,{children:t?Object(L.jsx)("h3",{className:"room-title",children:t}):""})},ae=function(e,t,a){return R()({method:"POST",url:P+"/create-room",headers:{Authorization:"Bearer ".concat(a)},data:{room:{name:e},userId:t}})},ne=function(e){return R()({method:"GET",url:P+"/show-rooms",headers:{Authorization:"Bearer ".concat(e)}})},re=function(e){return R()({method:"DELETE",url:P+"/go-offline",headers:{Authorization:"Bearer ".concat(e)}})},se=function(e){return R()({method:"GET",url:P+"/show-server-users",headers:{Authorization:"Bearer ".concat(e)}})},ce=function(e){var t=e.name,a=e.status,n=e.add,s=e.userId;return Object(r.useEffect)((function(){}),[a]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("img",{col:"1",className:"user-image",src:X(t)}),Object(L.jsx)("span",{className:"user-name",children:t}),Object(L.jsx)("img",{src:"https://icongr.am/octicons/plus.svg?size=16&color=b3b3b3",onClick:function(){return n(s)}}),Object(L.jsx)("span",{className:"user-status",children:"online"===a?Object(L.jsx)("img",{src:"https://icongr.am/octicons/rss.svg?size=16&color=36ba38"}):""})]})},oe=function(e,t,a){return R()({method:"POST",url:P+"/add-user-to-room",headers:{Authorization:"Bearer ".concat(a)},data:{roomId:e,userId:t}})},ue=function(e){var t=e.currentRoom,a=Object(r.useContext)(i),n=a.state,s=a.dispatch,c=n.serverUsers,u=n.token,l=Object(r.useState)(null),j=Object(o.a)(l,2),d=j[0],b=j[1],m=function(e){console.log("adding user ".concat(e," to room ").concat(t)),oe(t,e,u)},O=function(){var e=Object(C.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(u);case 2:return a=e.sent,t=a.data.user,e.next=6,s({type:f,payload:t});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){setInterval(O,5e3)}),[]),Object(r.useEffect)(Object(C.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("server users: ",c),c&&b(c.map((function(e){return Object(L.jsx)("li",{className:"user-list-item",children:Object(L.jsx)(ce,{name:e.userName,userId:e._id,add:m,status:e.status})},e._id)})));case 2:case"end":return e.stop()}}),e)}))),[c]),Object(L.jsx)("ul",{className:"user-list",children:d})},le=function(e){var t=e.setRoomName,a=e.onCreateRoom,n=e.roomName;console.log("props","sasasaddsdasdasdsad mainContent");var s=Object(r.useState)(!1),c=Object(o.a)(s,2),u=c[0],l=c[1],i=function(){return l(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(G.a,{className:"create-room-button",onClick:function(){return l(!0)},children:Object(L.jsx)("span",{className:"create-room-span",children:"+"})}),Object(L.jsxs)(y.a,{show:u,onHide:i,centered:!0,children:[Object(L.jsx)(y.a.Header,{closeButton:!0,children:Object(L.jsx)(y.a.Title,{className:"createRoom-modal-title",children:"Create Room"})}),Object(L.jsx)(y.a.Body,{children:Object(L.jsx)(D.a,{onSubmit:function(e){return a(e,i)},children:Object(L.jsxs)(D.a.Group,{controlId:"room-name",children:[Object(L.jsx)(D.a.Control,{required:!0,type:"room-name",name:"create-room",value:n,placeholder:"Enter Room Name",onChange:function(e){return t(e.target.value)}}),Object(L.jsx)("button",{type:"submit",className:"create-button",children:"Create"})]})})})]})]})},ie=function(){var e=Object(C.a)(E.a.mark((function e(t,a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()({method:"GET",url:P+"/room/"+a,headers:{Authorization:"Bearer ".concat(t)}});case 2:if(0!==(n=e.sent).data.length){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),je=function(){var e=Object(r.createRef)();return Object(r.useEffect)((function(){return e.current.scrollIntoView({behavior:"smooth"})})),Object(L.jsx)("div",{ref:e})},de=function(){console.log("maincontent reloaded");var e=Object(r.useContext)(i),t=e.state,a=e.dispatch,n=Object(r.useState)([]),s=Object(o.a)(n,2),c=s[0],u=s[1],l=Object(r.useState)([]),j=Object(o.a)(l,2),d=j[0],b=j[1],m=Object(r.useState)(null),O=Object(o.a)(m,2),h=O[0],f=O[1],g=Object(r.useState)(""),x=Object(o.a)(g,2),v=x[0],w=x[1],N=t.rooms,y=t.userId,S=t.token,k=t.serverUsers,I=t.cachedPfps,P=Object(r.useState)(null),T=Object(o.a)(P,2),R=T[0],_=T[1],A=Object(r.useState)(null),D=Object(o.a)(A,2),G=(D[0],D[1],Object(r.useState)("")),U=Object(o.a)(G,2),B=U[0],H=U[1],q=Object(r.useState)(""),z=Object(o.a)(q,2),F=z[0],K=z[1],X=Object(r.useState)(""),Z=Object(o.a)(X,2),$=Z[0],se=Z[1],ce=Object(r.useState)(""),oe=Object(o.a)(ce,2),de=oe[0],be=oe[1];Object(r.useEffect)((function(){k&&0!==k.length&&W(k,I,a).then((function(e){e||console.error("failed to cache images")}))}),[k]);Object(r.useEffect)((function(){F!==B&&(u([]),H(F),se(de))}),[F]),Object(r.useEffect)((function(){ie(S,B).then((function(e){if(console.log("MESSAGE HISTORY"),e){var t=e.map((function(e){return{userName:e.userName,timestamp:e.sentAt,message:e.text}}));console.log("FETCHED HISTORY"),console.log(t),u(t)}}))}),[B]),Object(r.useEffect)((function(){N&&(console.log(N),_(N.map((function(e){return Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:"#",onClick:function(){return function(e,t){console.log("changing room to: ",e),K(e),be(t)}(e._id,e.name)},children:"".concat(e.name)})},"".concat(e._id))}))))}),[N]),Object(r.useEffect)(Object(C.a)(E.a.mark((function e(){var t,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,ne(S);case 3:n=e.sent,r=n.data.room,N&&N[0]||r.forEach((function(e){e.validUsers.includes(y)&&t.push(e)})),console.log(t),a({type:p,payload:t}),window.addEventListener("beforeunload",(function(){re(S,y)}),!1);case 9:case"end":return e.stop()}}),e)}))),[]);var me=function(){var e=Object(C.a)(E.a.mark((function e(n,r){var s,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=[],console.log(v,t.userId),e.next=5,ae(v,y,S);case 5:c=e.sent,N.length>0?(r(),(s=Object(M.a)(N)).push(c.data.room)):s=[c.data.room],a({type:p,payload:s}),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(console.log("hit new message useeffect"),h){var e=Object(M.a)(c);e.push(h),u(e),f(null)}}),[h]),Object(r.useEffect)((function(){b(c.map((function(e,t){return Object(L.jsx)(ee,{userName:e.userName,timestamp:e.timestamp,text:e.message},e.userName+t.toString())})))}),[c]),Object(L.jsx)(J.a,{className:"main-container",children:Object(L.jsxs)(V.a,{className:"top-row",children:[Object(L.jsxs)(Y.a,{className:"col-3 left-side-options",children:[Object(L.jsxs)("div",{className:"left-side-nav",children:[Object(L.jsx)(V.a,{children:Object(L.jsx)(Y.a,{children:Object(L.jsxs)("div",{style:{position:"fixed"},children:[Object(L.jsx)("h4",{className:"roomsHeader",style:{width:"20vw"},children:"Rooms"}),Object(L.jsx)(le,{onCreateRoom:me,roomName:v,setRoomName:w})]})})}),Object(L.jsx)(V.a,{children:Object(L.jsx)("section",{className:"open-rooms",children:Object(L.jsx)("ul",{className:"room-list",children:R})})})]}),Object(L.jsxs)(V.a,{className:"active-users",children:[Object(L.jsx)("h4",{className:"roomsHeader",children:"Users"}),Object(L.jsx)(ue,{currentRoom:B})]})]}),Object(L.jsxs)(Y.a,{className:"main-content col-9",children:[Object(L.jsx)(V.a,{children:Object(L.jsx)(te,{room:$})}),Object(L.jsx)("section",{className:"messages-window",children:Object(L.jsxs)("ul",{className:"messages",children:[B?d:"No room selected. Please join a room to start a conversation!",Object(L.jsx)(je,{})]})}),Object(L.jsx)(Q,{received:function(e){console.log("setting new msg"),console.log(e),f(e)},room:B})]})]})})},be=function(){var e=Object(r.useContext)(i),t=e.state,a=e.dispatch,n=t.loggedIn,s=Object(l.f)(),c=Object(r.useState)(""),u=Object(o.a)(c,2),j=u[0],d=u[1],O=Object(r.useState)(""),p=Object(o.a)(O,2),h=p[0],f=p[1],g=Object(r.useState)(""),x=Object(o.a)(g,2),v=x[0],w=x[1],N=Object(r.useState)(""),y=Object(o.a)(N,2),S=y[0],k=y[1],I=Object(r.createRef)(),T=function(){var e=Object(C.a)(E.a.mark((function e(t){var n,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(I.current),console.log(I.current.files),n=I.current.files[0],r=n.name.split(".").pop(),console.log(r),(o=c={email:j,userName:h,password:v,passwordConfirmation:S},R()({method:"POST",url:P+"/sign-up/",data:{credentials:{email:o.email,password:o.password,password_confirmation:o.passwordConfirmation,userName:o.userName,pfpType:o.pfpType}}})).then((function(){return A(c)})).then((function(e){_(I.current.files[0],e.data.user.userName),a({type:b,payload:e.data.user._id}),a({type:m,payload:e.data.user.token})})).then((function(){})).then((function(){return s.push("/")})).catch((function(e){d(""),f(""),w(""),k("")}));case 8:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(L.jsx)(l.a,{to:"/"}):Object(L.jsx)("div",{className:"row signup-parent-wrapper",children:Object(L.jsxs)("div",{className:"signup-form-wrapper",children:[Object(L.jsx)("h3",{className:"signup-header3",children:"Sign Up"}),Object(L.jsxs)(D.a,{className:"signup-form",onSubmit:T,children:[Object(L.jsxs)(D.a.Group,{children:[Object(L.jsx)(D.a.Label,{children:"Email address"}),Object(L.jsx)(D.a.Control,{required:!0,type:"email",name:"email",value:j,placeholder:"Enter email",onChange:function(e){return d(e.target.value)}})]}),Object(L.jsxs)(D.a.Group,{children:[Object(L.jsx)(D.a.Label,{children:"Username"}),Object(L.jsx)(D.a.Control,{required:!0,type:"username",name:"username",value:h,placeholder:"Enter username",onChange:function(e){return f(e.target.value)}})]}),Object(L.jsxs)(D.a.Group,{children:[Object(L.jsx)(D.a.Label,{children:"Password"}),Object(L.jsx)(D.a.Control,{required:!0,name:"password",value:v,type:"password",placeholder:"Password",onChange:function(e){return w(e.target.value)}})]}),Object(L.jsxs)(D.a.Group,{children:[Object(L.jsx)(D.a.Label,{children:"Password Confirmation"}),Object(L.jsx)(D.a.Control,{required:!0,name:"passwordConfirmation",value:S,type:"password",placeholder:"Confirm Password",onChange:function(e){return k(e.target.value)}})]}),Object(L.jsxs)(D.a.Group,{children:[Object(L.jsx)(D.a.Label,{children:"Profile Picture"}),Object(L.jsx)(D.a.Control,{type:"file",name:"image",id:"imagePicker",accept:"image/*",multiple:!1,ref:I})]}),Object(L.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},me=(a(122),function(){var e=Object(r.useContext)(i),t=e.state,a=e.dispatch,n=t.loggedIn,s=Object(r.useState)(""),c=Object(o.a)(s,2),u=c[0],j=c[1],h=Object(r.useState)(""),f=Object(o.a)(h,2),g=f[0],x=f[1];return n?Object(L.jsx)(l.a,{to:"/"}):Object(L.jsx)("div",{className:"row signin-parent-wrapper",children:Object(L.jsxs)("div",{className:"signin-form-wrapper",children:[Object(L.jsx)("h3",{className:"signin-header3",children:"Login"}),Object(L.jsxs)(D.a,{onSubmit:function(e){e.preventDefault(),A({userName:u,password:g}).then((function(e){a({type:b,payload:e.data.user._id}),a({type:m,payload:e.data.user.token}),a({type:O,payload:!0}),a({type:d,payload:e.data.user.userName}),a({type:p,payload:e.data.user.rooms})})).then((function(){})).then((function(){return history.push("/")})).catch((function(e){j(""),x("")}))},className:"signin-form",children:[Object(L.jsxs)(D.a.Group,{controlId:"username",children:[Object(L.jsx)(D.a.Label,{className:"label-username",children:"Username"}),Object(L.jsx)(D.a.Control,{required:!0,type:"username",name:"username",value:u,placeholder:"Enter username",onChange:function(e){return j(e.target.value)}})]}),Object(L.jsxs)(D.a.Group,{controlId:"password",children:[Object(L.jsx)(D.a.Label,{children:"Password"}),Object(L.jsx)(D.a.Control,{required:!0,name:"password",value:g,type:"password",placeholder:"Password",onChange:function(e){return x(e.target.value)}})]}),Object(L.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}),Oe=function(){var e=Object(r.useContext)(i),t=e.state,a=e.dispatch,n=Object(l.f)(),s=t.loggedIn,c=t.token;return Object(r.useEffect)((function(){s&&function(e){return R()({url:P+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}})}(c).finally((function(){})).finally((function(){x.forEach((function(e){console.log(e),a({type:e,payload:null})}))})).finally((function(){return n.push("/")}))}),[]),s?null:Object(L.jsx)(l.a,{to:"/"})},pe=(n={loggedIn:!1,userId:null,userName:null,token:null,shouldSaveState:!1},Object(u.a)(n,"userName",null),Object(u.a)(n,"rooms",[]),Object(u.a)(n,"serverUsers",[]),Object(u.a)(n,"cachedPfps",[]),n),he=function(){var e=Object(r.useReducer)(v,pe),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(L.jsxs)(i.Provider,{value:{state:a,dispatch:n},children:[Object(L.jsx)(F,{}),Object(L.jsxs)("main",{className:"container",children:[Object(L.jsx)(l.b,{path:"/sign-up",component:be}),Object(L.jsx)(l.b,{path:"/sign-in",component:me}),Object(L.jsx)(l.b,{path:"/sign-out",component:Oe})]}),a.loggedIn?Object(L.jsx)(de,{}):""]})},fe=Object(L.jsx)(w.a,{basename:"/chat-app",children:Object(L.jsx)(he,{})});c.a.render(fe,document.getElementById("root"))},89:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.aa3fef03.chunk.js.map