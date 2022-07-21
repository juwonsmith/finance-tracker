(this["webpackJsonpmy-money"]=this["webpackJsonpmy-money"]||[]).push([[0],{17:function(e,t,n){e.exports={container:"Home_container__1zDng",content:"Home_content__2osLB",sidebar:"Home_sidebar__27buR",transactions:"Home_transactions__3WGnx",name:"Home_name__utucx",amount:"Home_amount__1bWe2"}},29:function(e,t,n){e.exports={navbar:"Navbar_navbar__3ILbc",title:"Navbar_title__3y7T6"}},35:function(e,t,n){e.exports={"login-form":"Login_login-form__2oU-b"}},36:function(e,t,n){e.exports={"signup-form":"Signup_signup-form__34d5Q"}},42:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(34),s=n.n(r),u=(n(42),n(22)),i=n(6),o=n(5),l=n(10),j=n(23);n(53),n(44);j.a.initializeApp({apiKey:"AIzaSyC4JDwxGnjdIOHWXZGV8itxDyp0XssocDI",authDomain:"mymoney2-ea29a.firebaseapp.com",projectId:"mymoney2-ea29a",storageBucket:"mymoney2-ea29a.appspot.com",messagingSenderId:"219465130077",appId:"1:219465130077:web:f02174a5f76a5866fb6db4"});var b=j.a.firestore(),d=j.a.auth(),O=j.a.firestore.Timestamp,p=n(1),f=Object(c.createContext)(),h=function(e,t){switch(t.type){case"LOGIN":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(l.a)(Object(l.a)({},e),{},{user:null});case"AUTH_IS_READY":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload,authisReady:!0});default:return e}},x=function(e){var t=e.children,n=Object(c.useReducer)(h,{user:null,authisReady:!1}),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=d.onAuthStateChanged((function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("authcontext state",r),Object(p.jsx)(f.Provider,{value:Object(l.a)(Object(l.a)({},r),{},{dispatch:s}),children:t})},m=function(){var e=Object(c.useContext)(f);if(!e)throw new Error("use Authcontext must be inside a authcontextprovider");return e},v=n(17),g=n.n(v),y=n(11),_=n.n(y),S=n(16),D={document:null,isPending:!1,error:null,success:null},E=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,document:null,success:!1,error:null};case"ADDED_DOC":return{isPending:!1,document:t.payload,success:!0,error:null};case"ERROR":return{isPending:!1,document:null,success:!1,error:t.payload};case"DELETED_DOC":return{isPending:!1,document:null,success:!0,error:null};default:return e}},N=function(e){var t=Object(c.useReducer)(E,D),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),u=Object(o.a)(s,2),i=u[0],j=u[1],d=b.collection(e),p=function(e){i||r(e)},f=function(){var e=Object(S.a)(_.a.mark((function e(t){var n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"IS_PENDING"}),e.prev=1,n=O.fromDate(new Date),e.next=5,d.add(Object(l.a)(Object(l.a)({},t),{},{createdAt:n}));case 5:c=e.sent,p({type:"ADDED_DOC",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(S.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"IS_PENDING"}),e.prev=1,e.next=4,d.doc(t).delete();case 4:p({type:"DELETED_DOC"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),p({type:"ERROR",payload:"could not delete"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return j(!0)}}),[]),{addDocument:f,deletedocument:h,response:a}};function w(e){var t=e.uid,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(""),i=Object(o.a)(u,2),l=i[0],j=i[1],b=N("transactions"),d=b.addDocument,O=b.response;return Object(c.useEffect)((function(){O.success&&(s(""),j(""))}),[O.success]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"add a transaction"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({uid:t,name:r,Amount:l})},children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Transaction name"}),Object(p.jsx)("input",{type:"text",required:!0,onChange:function(e){return s(e.target.value)},value:r})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Amount ($)"}),Object(p.jsx)("input",{type:"number",required:!0,onChange:function(e){return j(e.target.value)},value:l})]}),Object(p.jsx)("button",{children:"Add transaction"})]})]})}var I=n(32);function A(e){var t=e.transactions,n=N("transactions").deletedocument;return Object(p.jsx)("ul",{className:g.a.transactions,children:t.map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:g.a.name,children:e.name}),Object(p.jsxs)("p",{className:g.a.amount,children:["$",e.Amount]}),Object(p.jsx)("button",{onClick:function(){return n(e.id)},children:"X"})]},e.id)}))})}function R(){var e=m().user,t=function(e,t,n){var a=Object(c.useState)(null),r=Object(o.a)(a,2),s=r[0],u=r[1],i=Object(c.useState)(null),j=Object(o.a)(i,2),d=j[0],O=j[1],p=Object(c.useRef)(t).current,f=Object(c.useRef)(n).current;return Object(c.useEffect)((function(){var t,n,c=b.collection(e);p&&(c=(t=c).where.apply(t,Object(I.a)(p))),f&&(c=(n=c).orderBy.apply(n,Object(I.a)(f)));var a=c.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id}))})),u(t),O(null)}),(function(e){console.log(e),O("could not fetch data")}));return function(){return a()}}),[e,p,f]),{documents:s,error:d}}("transactions",["uid","==",e.uid],["createdAt","desc"]),n=t.documents,a=t.error;return Object(p.jsxs)("div",{className:g.a.container,children:[Object(p.jsxs)("div",{className:g.a.content,children:[a&&Object(p.jsx)("p",{children:a}),n&&Object(p.jsx)(A,{transactions:n})]}),Object(p.jsx)("div",{className:g.a.sidebar,children:Object(p.jsx)(w,{uid:e.uid})})]})}var C=n(35),k=n.n(C);function L(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),u=s[0],i=s[1],l=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),u=s[0],i=s[1],l=m().dispatch,j=Object(c.useState)(!1),b=Object(o.a)(j,2),O=b[0],p=b[1],f=function(){var e=Object(S.a)(_.a.mark((function e(t,n){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(null),i(!0),e.prev=2,e.next=5,d.signInWithEmailAndPassword(t,n);case 5:c=e.sent,l({type:"LOGIN",payload:c.user}),O||(i(!1),a(null)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),O||(console.log(e.t0.message),i(!1),a(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){p(!0)}}),[]),{login:f,error:n,ispending:u}}(),j=l.login,b=l.error,O=l.ispending;return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(n,u)},className:k.a["login-form"],children:[Object(p.jsx)("h2",{children:"login"}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"email:"}),Object(p.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value)},value:n})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"password:"}),Object(p.jsx)("input",{type:"password",onChange:function(e){return i(e.target.value)},value:u})]}),!O&&Object(p.jsx)("button",{className:"btn",children:"Login"}),O&&Object(p.jsx)("button",{className:"btn",disabled:!0,children:"Loading"}),b&&Object(p.jsxs)("p",{children:[" ",b]})]})}var P=n(36),G=n.n(P);function H(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),u=s[0],i=s[1],l=Object(c.useState)(""),j=Object(o.a)(l,2),b=j[0],O=j[1],f=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),u=s[0],i=s[1],l=m().dispatch,j=Object(c.useState)(!1),b=Object(o.a)(j,2),O=b[0],p=b[1],f=function(){var e=Object(S.a)(_.a.mark((function e(t,n,c){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(null),i(!0),e.prev=2,e.next=5,d.createUserWithEmailAndPassword(t,n);case 5:if(r=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return e.next=10,r.user.updateProfile({displayName:c});case 10:l({type:"LOGIN",payload:r.user}),O||(i(!1),a(null)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),O||(i(!1),a(null));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){p(!0)}}),[]),{signup:f,error:n,isPending:u}}(),h=f.signup,x=f.isPending,v=f.error;return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(n,u,b)},className:G.a["signup-form"],children:[Object(p.jsx)("h2",{children:"sign up"}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"email:"}),Object(p.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value)},value:n})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"password:"}),Object(p.jsx)("input",{type:"password",onChange:function(e){return i(e.target.value)},value:u})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"display name:"}),Object(p.jsx)("input",{type:"text",onChange:function(e){return O(e.target.value)},value:b})]}),!x&&Object(p.jsx)("button",{className:"btn",children:"sign up"}),x&&Object(p.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),v&&Object(p.jsx)("p",{children:v})]})}var T=n(29),U=n.n(T);function W(){var e=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),u=s[0],i=s[1],l=m().dispatch,j=Object(c.useState)(!1),b=Object(o.a)(j,2),O=b[0],p=b[1],f=function(){var e=Object(S.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(null),i(!0),e.prev=2,e.next=5,d.signOut();case 5:l({type:"LOGOUT"}),O||(i(!1),a(null)),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.message),a(e.t0.message),a(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){p(!0)}}),[]),{logout:f,error:n,ispending:u}}().logout,t=m().user;return Object(p.jsx)("nav",{className:U.a.navbar,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:U.a.title,children:"myMoney"}),!t&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/login",children:"Login"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/signup",children:"Signup"})})]}),t&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("li",{children:["hello, ",t.displayName]}),Object(p.jsx)("li",{children:Object(p.jsx)("button",{className:"btn",onClick:e,children:"Logout"})})]})]})})}var B=function(){var e=m(),t=e.authisReady,n=e.user;return Object(p.jsx)("div",{className:"App",children:t&&Object(p.jsxs)(u.a,{children:[Object(p.jsx)(W,{}),Object(p.jsxs)(i.d,{children:[Object(p.jsxs)(i.b,{exact:!0,path:"/",children:[!n&&Object(p.jsx)(i.a,{to:"/login"}),n&&Object(p.jsx)(R,{})]}),Object(p.jsxs)(i.b,{path:"/login",children:[n&&Object(p.jsx)(i.a,{to:"/"}),!n&&Object(p.jsx)(L,{})]}),Object(p.jsxs)(i.b,{path:"/signup",children:[n&&Object(p.jsx)(i.a,{to:"/"}),!n&&Object(p.jsx)(H,{})]})]})]})})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x,{children:Object(p.jsx)(B,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e3568a2e.chunk.js.map