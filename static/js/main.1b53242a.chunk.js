(this["webpackJsonpreact-auth-template"]=this["webpackJsonpreact-auth-template"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},121:function(e,t,a){},130:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n,c=a(0),s=a(26),r=a.n(s),o=(a(98),a(3)),l=a(17),i=a(13),u=Object(c.createContext)(),j=a(2),d="SET_USERNAME",b="SET_USER_ID",O="SET_TOKEN",m="SET_SIGNEDIN",h="SET_ROOMS_ID",p="SET_STATE",f=[d,b,O,m,h,p],g=function(e,t){switch(t.type){case d:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{userName:null}):Object(j.a)(Object(j.a)({},e),{},{userName:t.payload});case b:case b:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{userId:null}):Object(j.a)(Object(j.a)({},e),{},{userId:t.payload});case O:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{token:null}):Object(j.a)(Object(j.a)({},e),{},{token:t.payload});case m:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{loggedIn:!1}):Object(j.a)(Object(j.a)({},e),{},{loggedIn:t.payload});case h:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{rooms:null}):Object(j.a)(Object(j.a)({},e),{},{rooms:t.payload});case p:return null===t.payload?Object(j.a)(Object(j.a)({},e),{},{shouldSaveState:!1}):Object(j.a)(Object(j.a)({},e),{},{shouldSaveState:t.payload});default:return e}},x=(a(99),a(14)),v=(a(100),a(92)),w=(a(101),a(148)),y=a(31),N=a.n(y),S=a(43),C="https://gg-chat-api.herokuapp.com",k="http://localhost:3040",E="localhost"===window.location.hostname?k:C,I=a(40),P=a.n(I),T=function(){var e=Object(S.a)(N.a.mark((function e(t,a){var n,c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,console.log("buffer:"),console.log(n),(c=new FormData).append("pfp",n),s={method:"POST",body:c},console.log(s),e.abrupt("return",fetch(E+"/upload/"+a,s));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),L=function(e){return P()({url:E+"/sign-in/",method:"POST",data:{credentials:{userName:e.userName,password:e.password}}})},_=a(10),G=a(49),D=(a(121),a(1)),q=function(e){var t=e.closeModal,a=Object(c.useContext)(u),n=a.state,s=(a.dispatch,Object(i.f)()),r=n.loggedIn,l=n.token,j=Object(c.useState)(""),d=Object(o.a)(j,2),b=d[0],O=d[1],m=Object(c.useState)(""),h=Object(o.a)(m,2),p=h[0],f=h[1];return r?Object(D.jsx)("div",{className:"row changePass-parent-wrapper ",children:Object(D.jsx)("div",{className:"changePass-form-wrapper",children:Object(D.jsxs)(_.a,{className:"changePass-form",children:[Object(D.jsxs)(_.a.Group,{controlId:"oldPassword",children:[Object(D.jsx)(_.a.Label,{children:"Old password"}),Object(D.jsx)(_.a.Control,{required:!0,name:"oldPassword",value:b,type:"password",placeholder:"Old Password",onChange:function(e){return O(e.target.value)}})]}),Object(D.jsxs)(_.a.Group,{controlId:"newPassword",children:[Object(D.jsx)(_.a.Label,{children:"New Password"}),Object(D.jsx)(_.a.Control,{required:!0,name:"newPassword",value:p,type:"password",placeholder:"New Password",onChange:function(e){return f(e.target.value)}})]}),Object(D.jsx)(G.a,{variant:"primary",type:"button",onClick:function(){(function(e,t){return console.log(e,t,"Hello thereerer"),P()({url:E+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t)},data:{passwords:{old:e.old,new:e.new}}})})({old:b,new:p},l).then((function(e){t(),console.log(props,"kaskdakddkadasndakdaksdkandakdsd")})).then((function(){return s.push("/")})).catch((function(e){f(""),O("")}))},children:"Submit"})]})})}):Object(D.jsx)(i.a,{to:"/"})},A=(a(130),function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=function(){return n(!1)};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(x.b,{to:"/change-password",className:"nav-link",onClick:function(){return n(!0)},children:"Change Password"}),Object(D.jsxs)(w.a,{show:a,onHide:s,backdrop:"static",keyboard:!1,children:[Object(D.jsx)(w.a.Header,{closeButton:!0,children:Object(D.jsx)(w.a.Title,{className:"changePass-modal-title",children:"Change Password"})}),Object(D.jsx)(w.a.Body,{children:Object(D.jsx)(i.b,{path:"/change-password",render:function(){return Object(D.jsx)(q,{closeModal:s})}})})]})]})}),R=function(e){var t=e.user,a=Object(c.useState)(!1),n=Object(o.a)(a,2);n[0],n[1];return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(v.a,{className:"parent-dropdown-wrapper",children:[Object(D.jsx)(v.a.Toggle,{className:"dropdown-username",children:t.userName}),Object(D.jsxs)(v.a.Menu,{className:"dropdown-menu",children:[Object(D.jsx)(x.b,{to:"/",className:"nav-link",children:"Upload image"}),Object(D.jsx)(A,{}),Object(D.jsx)(v.a.Divider,{className:"divider"}),Object(D.jsx)(x.b,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]})]})})},B=function(e){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(R,{user:e})})},F=Object(D.jsxs)(c.Fragment,{children:[Object(D.jsx)(x.b,{to:"/sign-in",className:"link login",children:"Login"}),Object(D.jsx)(x.b,{to:"/sign-up",className:"link register",children:"Register"})]}),U=function(){var e=Object(c.useContext)(u),t=e.state,a=(e.dispatch,t);return Object(D.jsxs)("div",{className:"header-wrapper",children:[Object(D.jsx)("div",{className:"logo-wrapper",children:Object(D.jsx)(x.b,{to:"/",className:"link",children:Object(D.jsx)("span",{className:"logo-text",children:"Chat APP"})})}),Object(D.jsx)("div",{className:"links-group-1",children:a.loggedIn?B(a):F})]})},z=a(42),H=a(144),M=a(145),J=a(88),K=a(146),V=a(147),Q=a(93),W=function(e){var t=e.received,a=e.room,n=Object(c.useContext)(u),s=n.state,r=(n.dispatch,s.loggedIn,s.userId,s.token),l=s.userName,i=Object(c.useState)(""),j=Object(o.a)(i,2),d=j[0],b=j[1],O=Object(c.useState)(null),m=Object(o.a)(O,2),h=m[0],p=m[1],f=Object(c.useState)(!1),g=Object(o.a)(f,2),x=g[0],v=g[1],w=Object(c.useState)(!1),y=Object(o.a)(w,2),N=(y[0],y[1]);Object(c.useEffect)((function(){if(!x){console.log("connecting socket");var e=Object(Q.a)(E,{withCredentials:!1,query:{token:r}});e.on("connect",(function(){console.log("connected!")})),e.on("loggedin",(function(a){a?(N(!0),e.on("message",t)):(console.log("failed to log in"),alert("failed to log in"))})),p(e),v(!0)}}),[]),Object(c.useEffect)((function(){console.log("seeing this pop up here as well",a),a&&h.emit("join",{roomId:a})}),[a]);return Object(D.jsx)(D.Fragment,{children:""!==a?Object(D.jsxs)("form",{className:"message-input-window",onSubmit:function(e){if(e.preventDefault(),h){var t={message:d,roomId:a,timestamp:(new Date).toLocaleString(),userName:l};h.emit("send-message",t),console.log("sent message: "),console.log(t),b("")}},children:[Object(D.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)},className:"message-input"}),Object(D.jsx)("button",{type:"submit",className:"send-message",children:"Send"})]}):""})},X={color:"rgba(123, 115, 115, 0.70)"},Y=function(e){console.log("imgurl:");var t=E+"/img/"+e.userName;return console.log(t),Object(D.jsxs)("div",{className:"message-layout",children:[Object(D.jsx)("img",{col:"1",className:"userImage",src:t}),Object(D.jsxs)("li",{col:"2",children:[Object(D.jsx)("strong",{children:e.userName})," ",Object(D.jsx)("a",{style:X,children:e.timestamp}),":",Object(D.jsx)("br",{}),Object(D.jsx)("section",{className:"message-text",children:e.text})]})]})},Z=function(e){var t=e.room;return Object(c.useEffect)((function(){console.log("in room: ",t)}),[t]),Object(D.jsx)(D.Fragment,{children:t?Object(D.jsx)("h3",{className:"room-title",children:t}):""})},$=function(e,t,a){return P()({method:"POST",url:E+"/create-room",headers:{Authorization:"Bearer ".concat(a)},data:{room:{name:e},userId:t}})},ee=function(e){return P()({method:"GET",url:E+"/show-rooms",headers:{Authorization:"Bearer ".concat(e)}})},te=function(){var e=Object(c.createRef)();return Object(c.useEffect)((function(){return e.current.scrollIntoView({behavior:"smooth"})})),Object(D.jsx)("div",{ref:e})},ae=function(){console.log("maincontent reloaded");var e=Object(c.useContext)(u),t=e.state,a=e.dispatch,n=Object(c.useState)([]),s=Object(o.a)(n,2),r=s[0],l=s[1],i=Object(c.useState)([]),j=Object(o.a)(i,2),d=j[0],b=j[1],O=Object(c.useState)(null),m=Object(o.a)(O,2),p=m[0],f=m[1],g=Object(c.useState)(""),x=Object(o.a)(g,2),v=x[0],w=x[1],y=t.rooms,C=t.userId,k=t.token,E=Object(c.useState)(null),I=Object(o.a)(E,2),P=I[0],T=I[1],L=Object(c.useState)(""),G=Object(o.a)(L,2),q=G[0],A=G[1],R=Object(c.useState)(""),B=Object(o.a)(R,2),F=B[0],U=B[1],Q=Object(c.useState)(""),X=Object(o.a)(Q,2),ae=X[0],ne=X[1],ce=Object(c.useState)(""),se=Object(o.a)(ce,2),re=se[0],oe=se[1];Object(c.useEffect)((function(){console.log("room has been changed"),F!==q&&(l([]),A(F),ne(re))}),[F]),Object(c.useEffect)((function(){y&&(console.log(y),T(y.map((function(e){return Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"#",onClick:function(){return function(e,t){console.log("changing room to: ",e),U(e),oe(t)}(e._id,e.name)},children:"".concat(e.name)})},"".concat(e._id))}))))}),[y]),Object(c.useEffect)(Object(S.a)(N.a.mark((function e(){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,ee(k);case 3:n=e.sent,c=n.data.room,console.log("existing rooms: ",c,"saved rooms: ",y),y&&y[0]||c.forEach((function(e){e.validUsers.includes(C)&&t.push(e)})),console.log(t),a({type:h,payload:t});case 9:case"end":return e.stop()}}),e)}))),[]);var le=function(){var e=Object(S.a)(N.a.mark((function e(n){var c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=[],console.log(v,t.userId),e.next=5,$(v,C,k);case 5:s=e.sent,y.length>0?(c=Object(z.a)(y)).push(s.data.room):c=[s.data.room],a({type:h,payload:c}),console.log(s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(console.log("hit new message useeffect"),p){var e=Object(z.a)(r);e.push(p),l(e),f(null)}}),[p]),Object(c.useEffect)((function(){b(r.map((function(e,t){return Object(D.jsx)(Y,{userName:e.userName,timestamp:e.timestamp,text:e.message},e.userName+t.toString())})))}),[r]),Object(D.jsx)(H.a,{children:Object(D.jsxs)(M.a,{className:"top-row",children:[Object(D.jsxs)(J.a,{className:"col-2",children:[Object(D.jsxs)("div",{className:"left-side-nav",children:[Object(D.jsxs)(M.a,{children:[Object(D.jsx)(J.a,{children:Object(D.jsx)("h4",{children:"Rooms"})}),Object(D.jsx)(J.a,{children:Object(D.jsx)(K.a,{as:V.a,id:"dropdown-button-drop-end",drop:"end",variant:"secondary",title:Object(D.jsx)("img",{src:"https://icongr.am/clarity/add.svg?size=16"}),children:Object(D.jsx)(_.a,{onSubmit:le,children:Object(D.jsxs)(_.a.Group,{controlId:"room-name",children:[Object(D.jsx)(_.a.Control,{required:!0,type:"room-name",name:"create-room",value:v,placeholder:"Enter Room Name",onChange:function(e){return w(e.target.value)}}),Object(D.jsx)("button",{type:"submit",children:"Create"})]})})},"end")})]}),Object(D.jsx)(M.a,{children:Object(D.jsx)("section",{className:"open-rooms",children:Object(D.jsx)("ul",{children:P})})})]}),Object(D.jsxs)(M.a,{className:"active-users",children:[Object(D.jsx)("li",{children:"Tony"}),Object(D.jsx)("li",{children:"Ayoub"}),Object(D.jsx)("li",{children:"Jonah"}),Object(D.jsx)("li",{children:"Hanif"}),Object(D.jsx)("li",{children:"Bill"})]})]}),Object(D.jsxs)(J.a,{className:"main-content col-9",children:[Object(D.jsx)(M.a,{children:Object(D.jsx)(Z,{room:ae})}),Object(D.jsx)("section",{className:"messages-window",children:Object(D.jsxs)("ul",{className:"messages",children:[q?d:"No room selected. Please join a room to start a conversation!",Object(D.jsx)(te,{})]})}),Object(D.jsx)(W,{received:function(e){console.log("setting new msg"),console.log(e),f(e)},room:q})]})]})})},ne=(a(135),function(){var e=Object(c.useContext)(u),t=e.state,a=e.dispatch,n=t.loggedIn,s=Object(i.f)(),r=Object(c.useState)(""),l=Object(o.a)(r,2),j=l[0],d=l[1],m=Object(c.useState)(""),h=Object(o.a)(m,2),p=h[0],f=h[1],g=Object(c.useState)(""),x=Object(o.a)(g,2),v=x[0],w=x[1],y=Object(c.useState)(""),C=Object(o.a)(y,2),k=C[0],I=C[1],q=Object(c.createRef)(),A=function(){var e=Object(S.a)(N.a.mark((function e(t){var n,c,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(q.current),console.log(q.current.files),n=q.current.files[0],c=n.name.split(".").pop(),console.log(c),(o=r={email:j,userName:p,password:v,passwordConfirmation:k},P()({method:"POST",url:E+"/sign-up/",data:{credentials:{email:o.email,password:o.password,password_confirmation:o.passwordConfirmation,userName:o.userName,pfpType:o.pfpType}}})).then((function(){return L(r)})).then((function(e){T(q.current.files[0],e.data.user.userName),a({type:b,payload:e.data.user._id}),a({type:O,payload:e.data.user.token})})).then((function(){})).then((function(){return s.push("/")})).catch((function(e){d(""),f(""),w(""),I("")}));case 8:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(D.jsx)(i.a,{to:"/"}):Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(D.jsx)("h3",{children:"Sign Up"}),Object(D.jsxs)(_.a,{onSubmit:A,children:[Object(D.jsxs)(_.a.Group,{children:[Object(D.jsx)(_.a.Label,{children:"Email address"}),Object(D.jsx)(_.a.Control,{required:!0,type:"email",name:"email",value:j,placeholder:"Enter email",onChange:function(e){return d(e.target.value)}})]}),Object(D.jsxs)(_.a.Group,{children:[Object(D.jsx)(_.a.Label,{children:"Username"}),Object(D.jsx)(_.a.Control,{required:!0,type:"username",name:"username",value:p,placeholder:"Enter username",onChange:function(e){return f(e.target.value)}})]}),Object(D.jsxs)(_.a.Group,{children:[Object(D.jsx)(_.a.Label,{children:"Password"}),Object(D.jsx)(_.a.Control,{required:!0,name:"password",value:v,type:"password",placeholder:"Password",onChange:function(e){return w(e.target.value)}})]}),Object(D.jsxs)(_.a.Group,{children:[Object(D.jsx)(_.a.Label,{children:"Password Confirmation"}),Object(D.jsx)(_.a.Control,{required:!0,name:"passwordConfirmation",value:k,type:"password",placeholder:"Confirm Password",onChange:function(e){return I(e.target.value)}})]}),Object(D.jsxs)(_.a.Group,{children:[Object(D.jsx)(_.a.Label,{children:"Profile Picture"}),Object(D.jsx)(_.a.Control,{type:"file",name:"image",id:"imagePicker",accept:"image/*",multiple:!1,ref:q})]}),Object(D.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}),ce=(a(136),a(138),function(){var e=Object(c.useContext)(u),t=e.state,a=e.dispatch,n=t.loggedIn,s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],j=r[1],p=Object(c.useState)(""),f=Object(o.a)(p,2),g=f[0],x=f[1];return n?Object(D.jsx)(i.a,{to:"/"}):Object(D.jsx)("div",{className:"row signin-parent-wrapper",children:Object(D.jsxs)("div",{className:"signin-form-wrapper",children:[Object(D.jsx)("h3",{className:"signin-header3",children:"Login"}),Object(D.jsxs)(_.a,{onSubmit:function(e){e.preventDefault(),L({userName:l,password:g}).then((function(e){a({type:b,payload:e.data.user._id}),a({type:O,payload:e.data.user.token}),a({type:m,payload:!0}),a({type:d,payload:e.data.user.userName}),a({type:h,payload:e.data.user.rooms})})).then((function(){})).then((function(){return history.push("/")})).catch((function(e){j(""),x("")}))},className:"signin-form",children:[Object(D.jsxs)(_.a.Group,{controlId:"username",children:[Object(D.jsx)(_.a.Label,{className:"label-username",children:"Username"}),Object(D.jsx)(_.a.Control,{required:!0,type:"username",name:"username",value:l,placeholder:"Enter username",onChange:function(e){return j(e.target.value)}})]}),Object(D.jsxs)(_.a.Group,{controlId:"password",children:[Object(D.jsx)(_.a.Label,{children:"Password"}),Object(D.jsx)(_.a.Control,{required:!0,name:"password",value:g,type:"password",placeholder:"Password",onChange:function(e){return x(e.target.value)}})]}),Object(D.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}),se=function(){var e=Object(c.useContext)(u),t=e.state,a=e.dispatch,n=Object(i.f)(),s=t.loggedIn,r=t.token;return Object(c.useEffect)((function(){s&&function(e){return P()({url:E+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}})}(r).finally((function(){})).finally((function(){f.forEach((function(e){console.log(e),a({type:e,payload:null})}))})).finally((function(){return n.push("/")}))}),[]),s?null:Object(D.jsx)(i.a,{to:"/"})},re=(n={loggedIn:!1,userId:null,userName:null,token:null,shouldSaveState:!1},Object(l.a)(n,"userName",null),Object(l.a)(n,"rooms",[]),n),oe=function(){var e=Object(c.useReducer)(g,re),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(D.jsxs)(u.Provider,{value:{state:a,dispatch:n},children:[Object(D.jsx)(U,{}),Object(D.jsxs)("main",{className:"container",children:[Object(D.jsx)(i.b,{path:"/sign-up",component:ne}),Object(D.jsx)(i.b,{path:"/sign-in",component:ce}),Object(D.jsx)(i.b,{path:"/sign-out",component:se})]}),a.loggedIn?Object(D.jsx)(ae,{}):""]})},le=Object(D.jsx)(x.a,{basename:"/chat-app",children:Object(D.jsx)(oe,{})});r.a.render(le,document.getElementById("root"))},98:function(e,t,a){},99:function(e,t,a){}},[[137,1,2]]]);
//# sourceMappingURL=main.1b53242a.chunk.js.map