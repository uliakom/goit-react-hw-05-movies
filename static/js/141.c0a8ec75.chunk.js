"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[141],{2881:function(n,e,t){t.d(e,{t:function(){return r.tG},y:function(){return r.yc}});var r=t(854)},3955:function(n,e,t){t.d(e,{Z:function(){return k}});var r,a,o,i,c,s,u,p=t(168),l=t(2499),d=l.Z.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding-right: 100px;\n  padding-left: 100px;\n  margin-left: -30px;\n"]))),f=t(6871),h=t(501),x=(0,l.Z)(h.rU)(a||(a=(0,p.Z)(["\n  outline: none;\n  text-decoration: none;\n"]))),g=l.Z.li(o||(o=(0,p.Z)(["\n  flex-basis: calc ((100% - 4 * 30px) / 4);\n  margin-left: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n    box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);\n    -webkit-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);\n    -moz-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);\n  }\n"]))),v=l.Z.img(i||(i=(0,p.Z)(["\n  width: 360px;\n  height: 450px;\n  object-fit: cover;\n  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 4px;\n  &:hover {\n    transform: scale(1.02);\n    cursor: pointer;\n  }\n"]))),m=l.Z.div(c||(c=(0,p.Z)(["\n  display: flex;\n  padding: 8px;\n  justify-content: space-around;\n  align-items: center;\n"]))),b=l.Z.p(s||(s=(0,p.Z)(["\n  color: black;\n  font-size: 12px;\n  font-weight: 700;\n"]))),y=l.Z.p(u||(u=(0,p.Z)(["\n  color: black;\n  font-size: 15px;\n  font-weight: 700;\n"]))),Z=t(184),w=function(n){var e=n.id,t=n.src,r=n.title,a=n.vote,o="/movies/".concat(e),i=(0,f.TH)();return(0,Z.jsx)(x,{to:o,state:{from:i.pathname+i.search},children:(0,Z.jsxs)(g,{children:[(0,Z.jsx)(v,{src:"https://image.tmdb.org/t/p/w500"+t,alt:r}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(b,{children:r.toUpperCase()}),(0,Z.jsxs)(y,{children:["\u2b50\ufe0f",a]})]})]})})},k=function(n){var e=n.movies;return(0,Z.jsx)(d,{children:e.map((function(n){var e=n.id,t=n.title,r=n.poster_path,a=n.vote_average;return(0,Z.jsx)(w,{id:e,src:r,title:t,vote:a,children:t},e)}))})}},9141:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,o,i,c,s,u=t(885),p=t(2791),l=t(501),d=t(3955),f=t(168),h=t(2499),x=h.Z.div(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n"]))),g=h.Z.p(a||(a=(0,f.Z)(["\n  margin-right: 30px;\n  font-family: 'Metal Mania', cursive;\n  font-size: 40px;\n  &:hover {\n    color: oranged;\n  }\n"]))),v=h.Z.form(o||(o=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 300px;\n  background-color: #fff;\n  overflow: hidden;\n"]))),m=h.Z.button(i||(i=(0,f.Z)(["\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  margin-right: 10px;\n  border: 0;\n  background-color: transparent;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    background-color: oranged;\n  }\n"]))),b=h.Z.input(c||(c=(0,f.Z)(["\n  display: block;\n  width: 300px;\n  height: 30px;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-width: 3px;\n  border-image: linear-gradient(to right, orange, black, orange);\n  border-image-slice: 2;\n  background: transparent;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=h.Z.h2(s||(s=(0,f.Z)(["\n  text-align: center;\n  margin-top: 100px;\n"]))),Z=t(8185),w=t(5299),k=t(2881),j=t(4390),S=t(184),_=function(){var n=(0,p.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(null),o=(0,u.Z)(a,2),i=o[0],c=o[1],s=(0,p.useState)("idle"),f=(0,u.Z)(s,2),h=f[0],_=f[1],z=(0,l.lr)(),U=(0,u.Z)(z,2),q=U[0],C=U[1];(0,p.useEffect)((function(){if(null!==q.get("searchQuery")){var n=q.get("searchQuery");_("pending"),(0,j.IR)(n).then((function(n){0!==n.results.length?(c(n.results),_("resolved")):w.Report.failure("Search Failure","There is no movie for your query. Please enter other query","Ok")})).catch((function(n){_("rejected"),console.log(n)})).finally((function(){(0,k.y)()}))}}),[q,t]);return(0,S.jsxs)("div",{children:[(0,S.jsxs)(x,{children:[(0,S.jsx)(g,{children:"Search movie by name"}),(0,S.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==t.trim()?(C({searchQuery:t}),r("")):w.Report.failure("Search Failure","Please enter seach query","Ok")},children:[(0,S.jsx)(b,{type:"text",autocomplete:"off",placeholder:"Enter your query",name:"searchQuery",value:t,onChange:function(n){r(n.currentTarget.value.toLowerCase())}}),(0,S.jsx)(m,{type:"submit",children:(0,S.jsx)(Z.dVI,{size:23})})]})]}),"pending"===h&&(0,k.t)(),"resolved"===h&&(0,S.jsx)(d.Z,{movies:i}),"rejected"===h&&(0,S.jsx)(y,{children:"Ups...\ud83d\udca9 Something went wrong. Please try again later."})]})}},4390:function(n,e,t){t.d(e,{Df:function(){return p},IR:function(){return d},fh:function(){return h},jP:function(){return m},zv:function(){return g}});var r=t(5861),a=t(7757),o=t.n(a),i=t(4569),c=t.n(i),s="250f014fd6a936550e378176122f5d39",u="https://api.themoviedb.org/3";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(u,"/trending/movie/day?api_key=").concat(s,"&language=en-US&page=1"),n.next=4,c().get(e);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"),n.next=4,c().get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"),n.next=4,c().get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.next=4,c().get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),n.next=4,c().get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=141.c0a8ec75.chunk.js.map