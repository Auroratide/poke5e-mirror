import{a as L,x as y,e as v,b as H,j as g,k as E,c as R,d as c,o as b,G as S,p as T,q as m,z as V,A as j,B as k,t as U,l as w,H as F,C as J}from"./scheduler.rjXmu2uV.js";import{S as K,i as M,a as z,t as B}from"./index.BJssLd57.js";const N=t=>({}),G=t=>({});function I(t){let a,i;return{c(){a=v(t[2]),i=U(t[0]),this.h()},l(s){a=g(s,(t[2]||"null").toUpperCase(),{class:!0});var n=E(a);i=w(n,t[0]),n.forEach(c),this.h()},h(){F(t[2])(a,{class:"svelte-ana5fa"})},m(s,n){T(s,a,n),m(a,i)},p(s,n){n&1&&J(i,s[0])},d(s){s&&c(a)}}}function O(t){let a,i,s,n=t[2],u,h,d,_,l=t[2]&&I(t);const A=t[5]["header-extra"],r=y(A,t,t[4],G),D=t[5].default,f=y(D,t,t[4],null);return{c(){a=v("div"),i=v("article"),s=v("header"),l&&l.c(),u=H(),r&&r.c(),h=H(),d=v("div"),f&&f.c(),this.h()},l(e){a=g(e,"DIV",{class:!0});var o=E(a);i=g(o,"ARTICLE",{class:!0});var p=E(i);s=g(p,"HEADER",{class:!0});var C=E(s);l&&l.l(C),u=R(C),r&&r.l(C),C.forEach(c),h=R(p),d=g(p,"DIV",{class:!0});var q=E(d);f&&f.l(q),q.forEach(c),p.forEach(c),o.forEach(c),this.h()},h(){b(s,"class","svelte-ana5fa"),b(d,"class","scrollable svelte-ana5fa"),b(i,"class","svelte-ana5fa"),b(a,"class","container svelte-ana5fa"),S(a,"inline",t[1])},m(e,o){T(e,a,o),m(a,i),m(i,s),l&&l.m(s,null),m(s,u),r&&r.m(s,null),m(i,h),m(i,d),f&&f.m(d,null),_=!0},p(e,[o]){e[2]?n?L(n,e[2])?(l.d(1),l=I(e),n=e[2],l.c(),l.m(s,u)):l.p(e,o):(l=I(e),n=e[2],l.c(),l.m(s,u)):n&&(l.d(1),l=null,n=e[2]),r&&r.p&&(!_||o&16)&&V(r,A,e,e[4],_?k(A,e[4],o,N):j(e[4]),G),f&&f.p&&(!_||o&16)&&V(f,D,e,e[4],_?k(D,e[4],o,null):j(e[4]),null),(!_||o&2)&&S(a,"inline",e[1])},i(e){_||(z(r,e),z(f,e),_=!0)},o(e){B(r,e),B(f,e),_=!1},d(e){e&&c(a),l&&l.d(e),r&&r.d(e),f&&f.d(e)}}}function P(t,a,i){let s,{$$slots:n={},$$scope:u}=a,{title:h}=a,{level:d=1}=a,{inline:_=!1}=a;return t.$$set=l=>{"title"in l&&i(0,h=l.title),"level"in l&&i(3,d=l.level),"inline"in l&&i(1,_=l.inline),"$$scope"in l&&i(4,u=l.$$scope)},t.$$.update=()=>{t.$$.dirty&8&&i(2,s=`h${d}`)},[h,_,s,d,u,n]}class X extends K{constructor(a){super(),M(this,a,P,O,L,{title:0,level:3,inline:1})}}export{X as C};