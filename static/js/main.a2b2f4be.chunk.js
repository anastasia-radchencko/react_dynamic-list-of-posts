(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n.n(c),s=n(6),i=n(2),r=n(4),l=n.n(r),o=n(1),d=(n(17),n(18),n(19),n(3)),u=n.n(d),j=n(0),m=function(e){var t=e.posts,n=e.selectedPostId,c=e.onPost;return t.length?Object(j.jsxs)("div",{"data-cy":"PostsList",children:[Object(j.jsx)("p",{className:"title",children:"Posts:"}),Object(j.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"has-background-link-light",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"Post",children:[Object(j.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(j.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{type:"button","data-cy":"PostButton",className:u()("button","is-link",{"is-light":n!==e.id}),onClick:function(){return function(e){c(n===e.id?null:e)}(e)},children:n===e.id?"Close":"Open"})})]},e.id)}))})]})]}):Object(j.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"})},b=n(7),h="https://mate.academy/students-api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(h+e,c)})).then((function(e){return e.json()}))}var x,p=function(e){return f(e)},v=function(e,t){return f(e,"POST",t)},N=function(e){return f(e,"DELETE")},y=function(e){return p("/comments?postId=".concat(e))},g=function(e){return N("/comments/".concat(e))},E=(n(21),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),k=n(5);!function(e){e[e.NAME=0]="NAME",e[e.EMAIL=1]="EMAIL",e[e.TEXTAREA=2]="TEXTAREA"}(x||(x={}));var A=function(e){var t=e.postId,n=e.onClickHandleAdd,c=e.commentsLength,a=Object(o.useState)({name:"",email:"",textarea:""}),s=Object(i.a)(a,2),r=s[0],l=s[1],d=Object(o.useState)(!1),m=Object(i.a)(d,2),h=m[0],O=m[1],f=Object(o.useState)([]),p=Object(i.a)(f,2),N=p[0],y=p[1],g=function(){O(!0);var e,a={id:c+1,postId:t,name:r.name,email:r.email,body:r.textarea};(e=a,v("/comments",e)).then((function(){l((function(e){return Object(k.a)(Object(k.a)({},e),{},{textarea:""})})),n(a)})).finally((function(){return O(!1)}))},E=function(e){y((function(t){return t.filter((function(t){return t!==e}))}))},A=function(e){return N.includes(e)};return Object(j.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var t,n=r.name.length,c=r.email.length,a=r.textarea.length,s=(t=r.email,/\S+@\S+\.\S+/.test(t));n||y((function(e){return[].concat(Object(b.a)(e),[x.NAME])})),c&&s||y((function(e){return[].concat(Object(b.a)(e),[x.EMAIL])})),a||y((function(e){return[].concat(Object(b.a)(e),[x.TEXTAREA])})),n&&c&&a&&s&&g()},children:[Object(j.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:u()("input",{"is-danger":A(x.NAME)}),value:r.name,onChange:function(e){E(x.NAME),l((function(t){return Object(k.a)(Object(k.a)({},t),{},{name:e.target.value})}))}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-user"})}),A(x.NAME)&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),A(x.NAME)&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:u()("input",{"is-danger":A(x.EMAIL)}),value:r.email,onChange:function(e){E(x.EMAIL),l((function(t){return Object(k.a)(Object(k.a)({},t),{},{email:e.target.value})}))}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-envelope"})}),A(x.EMAIL)&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),A(x.EMAIL)&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:u()("textarea",{"is-danger":A(x.TEXTAREA)}),value:r.textarea,onChange:function(e){E(x.TEXTAREA),l((function(t){return Object(k.a)(Object(k.a)({},t),{},{textarea:e.target.value})}))}})}),A(x.TEXTAREA)&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:u()("button","is-link",{"is-loading":h}),children:"Add"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){y([]),l({name:"",email:"",textarea:""})},children:"Clear"})})]})]})},S=function(e){var t=e.postDetail,n=Object(o.useState)([]),c=Object(i.a)(n,2),a=c[0],r=c[1],d=Object(o.useState)(!1),u=Object(i.a)(d,2),m=u[0],h=u[1],O=Object(o.useState)(!0),f=Object(i.a)(O,2),x=f[0],p=f[1],v=Object(o.useState)(!1),N=Object(i.a)(v,2),k=N[0],S=N[1],C=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),r([]),e.prev=2,e.next=5,y(t);case 5:n=e.sent,r(n),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),p(!1),h(!1),S(!0);case 14:return e.prev=14,p(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,9,14,17]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),S(!0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){t&&C(t.id),h(!1)}),[t]);return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(j.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(j.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(j.jsxs)("div",{className:"block",children:[k&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),x?Object(j.jsx)(E,{}):Object(j.jsxs)(j.Fragment,{children:[!a.length&&!k&&Object(j.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!!a.length&&!k&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"title is-4",children:"Comments:"}),a.map((function(e){var t=e.id,n=e.name,c=e.email,a=e.body;return Object(j.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(j.jsxs)("div",{className:"message-header",children:[Object(j.jsx)("a",{href:"mailto:".concat(c),"data-cy":"CommentAuthor",children:n}),Object(j.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return function(e){w(e),r((function(t){return t.filter((function(t){return t.id!==e}))}))}(t)},children:"delete button"})]}),Object(j.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:a})]},t)}))]}),!m&&!k&&Object(j.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){h(!0)},children:"Write a comment"})]})]}),m&&Object(j.jsx)(A,{postId:(null===t||void 0===t?void 0:t.id)||0,commentsLength:a.length,onClickHandleAdd:function(e){r((function(t){return[].concat(Object(b.a)(t),[e])}))}})]})})})},C=function(e){var t=e.users,n=e.user,c=e.onChangeUser,a=Object(o.useState)(!1),s=Object(i.a)(a,2),r=s[0],l=s[1],d=Object(o.useRef)(null);Object(o.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&l(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[d]);return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:u()("dropdown",{"is-active":r}),ref:d,children:[Object(j.jsx)("div",{className:"dropdown-trigger",children:Object(j.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){l((function(e){return!e}))},children:[Object(j.jsx)("span",{children:(null===n||void 0===n?void 0:n.name)||"Choose a user"}),Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(j.jsx)("ul",{className:"dropdown-content",children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#user-".concat(e.id),className:u()("dropdown-item",{"is-active":e.id===(null===n||void 0===n?void 0:n.id)}),onClick:function(){return c(e),void l(!1)},children:e.name})},e.id)}))})})]})},w=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)([]),r=Object(i.a)(a,2),d=r[0],b=r[1],h=Object(o.useState)(null),O=Object(i.a)(h,2),f=O[0],x=O[1],v=Object(o.useState)(null),N=Object(i.a)(v,2),y=N[0],g=N[1],k=Object(o.useState)(!1),A=Object(i.a)(k,2),w=A[0],T=A[1],M=Object(o.useState)(!1),I=Object(i.a)(M,2),P=I[0],L=I[1],F=Object(o.useState)(!1),D=Object(i.a)(F,2),R=D[0],B=D[1],X=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("/users");case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),B(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return T(!1),L(!0),e.prev=4,e.next=7,n=y.id,p("/posts?userId=".concat(n));case 7:t=e.sent,b(t),T(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),T(!1),B(!0);case 16:return e.prev=16,L(!1),e.finish(16);case 19:case"end":return e.stop()}var n}),e,null,[[4,12,16,19]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){X()}),[]),Object(o.useEffect)((function(){U()}),[y]);return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsxs)("div",{className:"tile is-child box is-success",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(C,{users:n,user:y,onChangeUser:function(e){g(e),x(null)}})}),Object(j.jsxs)("div",{className:"block","data-cy":"MainContent",children:[P&&Object(j.jsx)(E,{}),!y&&Object(j.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),R&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),w&&Object(j.jsx)(m,{posts:d,selectedPostId:(null===f||void 0===f?void 0:f.id)||0,onPost:x})]})]})}),Object(j.jsx)("div",{"data-cy":"Sidebar",className:u()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":f}),children:Object(j.jsx)("div",{className:"tile is-child box is-success ",children:Object(j.jsx)(S,{postDetail:f})})})]})})})};a.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a2b2f4be.chunk.js.map