import{S as M,i as R,s as G,C as F,k,q as w,a as T,l as b,m,r as $,h as f,c as D,n as h,b as y,G as E,u as P,D as H,E as I,F as V,f as B,t as L,p as q,e as Q,B as W,V as ee,H as se}from"./index-53b314aa.js";const le=i=>({}),X=i=>({});function te(i){let e,n,a,l,t,s,o,r,u;const S=i[2]["header-extra"],d=F(S,i,i[1],X),v=i[2].default,c=F(v,i,i[1],null);return{c(){e=k("div"),n=k("article"),a=k("header"),l=k("h1"),t=w(i[0]),s=T(),d&&d.c(),o=T(),r=k("div"),c&&c.c(),this.h()},l(_){e=b(_,"DIV",{class:!0});var g=m(e);n=b(g,"ARTICLE",{class:!0});var z=m(n);a=b(z,"HEADER",{class:!0});var N=m(a);l=b(N,"H1",{class:!0});var C=m(l);t=$(C,i[0]),C.forEach(f),s=D(N),d&&d.l(N),N.forEach(f),o=D(z),r=b(z,"DIV",{class:!0});var p=m(r);c&&c.l(p),p.forEach(f),z.forEach(f),g.forEach(f),this.h()},h(){h(l,"class","svelte-1x5qfdl"),h(a,"class","svelte-1x5qfdl"),h(r,"class","scrollable svelte-1x5qfdl"),h(n,"class","svelte-1x5qfdl"),h(e,"class","container svelte-1x5qfdl")},m(_,g){y(_,e,g),E(e,n),E(n,a),E(a,l),E(l,t),E(a,s),d&&d.m(a,null),E(n,o),E(n,r),c&&c.m(r,null),u=!0},p(_,[g]){(!u||g&1)&&P(t,_[0]),d&&d.p&&(!u||g&2)&&H(d,S,_,_[1],u?V(S,_[1],g,le):I(_[1]),X),c&&c.p&&(!u||g&2)&&H(c,v,_,_[1],u?V(v,_[1],g,null):I(_[1]),null)},i(_){u||(B(d,_),B(c,_),u=!0)},o(_){L(d,_),L(c,_),u=!1},d(_){_&&f(e),d&&d.d(_),c&&c.d(_)}}}function ae(i,e,n){let{$$slots:a={},$$scope:l}=e,{title:t}=e;return i.$$set=s=>{"title"in s&&n(0,t=s.title),"$$scope"in s&&n(1,l=s.$$scope)},[t,l,a]}class pe extends M{constructor(e){super(),R(this,e,ae,te,G,{title:0})}}function ne(i){let e,n;const a=i[2].default,l=F(a,i,i[1],null);return{c(){e=k("dl"),l&&l.c(),this.h()},l(t){e=b(t,"DL",{class:!0});var s=m(e);l&&l.l(s),s.forEach(f),this.h()},h(){h(e,"class","svelte-zgshlf"),q(e,"--local-columns",i[0])},m(t,s){y(t,e,s),l&&l.m(e,null),n=!0},p(t,[s]){l&&l.p&&(!n||s&2)&&H(l,a,t,t[1],n?V(a,t[1],s,null):I(t[1]),null),s&1&&q(e,"--local-columns",t[0])},i(t){n||(B(l,t),n=!0)},o(t){L(l,t),n=!1},d(t){t&&f(e),l&&l.d(t)}}}function ie(i,e,n){let{$$slots:a={},$$scope:l}=e,{columns:t=1}=e;return i.$$set=s=>{"columns"in s&&n(0,t=s.columns),"$$scope"in s&&n(1,l=s.$$scope)},[t,l,a]}class he extends M{constructor(e){super(),R(this,e,ie,ne,G,{columns:0})}}function Y(i,e,n){const a=i.slice();return a[3]=e[n],a}function re(i){let e,n,a=i[0][0]+"",l,t=`var(--skin-${i[0][0]}-bg)`,s,o,r,u=i[0][1]+"",S,d=`var(--skin-${i[0][1]}-bg)`,v,c,_,g=i[1]?"-":"+",z,N,C;return{c(){e=k("span"),n=k("span"),l=w(a),s=T(),o=k("span"),r=k("span"),S=w(u),v=T(),c=k("button"),_=k("span"),z=w(g),this.h()},l(p){e=b(p,"SPAN",{class:!0});var A=m(e);n=b(A,"SPAN",{class:!0});var O=m(n);l=$(O,a),O.forEach(f),A.forEach(f),s=D(p),o=b(p,"SPAN",{class:!0});var U=m(o);r=b(U,"SPAN",{class:!0});var j=m(r);S=$(j,u),j.forEach(f),U.forEach(f),v=D(p),c=b(p,"BUTTON",{"aria-expanded":!0,"aria-controls":!0,"aria-label":!0,title:!0,class:!0});var J=m(c);_=b(J,"SPAN",{class:!0});var K=m(_);z=$(K,g),K.forEach(f),J.forEach(f),this.h()},h(){h(n,"class","unskew svelte-1nscqzt"),h(e,"class","skew type left svelte-1nscqzt"),q(e,"--skin-local-bg",t),h(r,"class","unskew svelte-1nscqzt"),h(o,"class","skew type middle svelte-1nscqzt"),q(o,"--skin-local-bg",d),h(_,"class","unskew svelte-1nscqzt"),q(_,"width","1ch"),h(c,"aria-expanded",i[1]),h(c,"aria-controls","additional-types-expansion"),h(c,"aria-label","More Types"),h(c,"title","More Types"),h(c,"class","skew type right svelte-1nscqzt"),q(c,"--skin-local-bg","var(--skin-varies-bg)")},m(p,A){y(p,e,A),E(e,n),E(n,l),y(p,s,A),y(p,o,A),E(o,r),E(r,S),y(p,v,A),y(p,c,A),E(c,_),E(_,z),N||(C=se(c,"click",i[2]),N=!0)},p(p,A){A&1&&a!==(a=p[0][0]+"")&&P(l,a),A&1&&t!==(t=`var(--skin-${p[0][0]}-bg)`)&&q(e,"--skin-local-bg",t),A&1&&u!==(u=p[0][1]+"")&&P(S,u),A&1&&d!==(d=`var(--skin-${p[0][1]}-bg)`)&&q(o,"--skin-local-bg",d),A&2&&g!==(g=p[1]?"-":"+")&&P(z,g),A&2&&h(c,"aria-expanded",p[1])},d(p){p&&f(e),p&&f(s),p&&f(o),p&&f(v),p&&f(c),N=!1,C()}}}function oe(i){let e,n,a=i[0][0]+"",l,t=`var(--skin-${i[0][0]}-bg)`,s,o,r,u=i[0][1]+"",S,d=`var(--skin-${i[0][1]}-bg)`;return{c(){e=k("span"),n=k("span"),l=w(a),s=T(),o=k("span"),r=k("span"),S=w(u),this.h()},l(v){e=b(v,"SPAN",{class:!0});var c=m(e);n=b(c,"SPAN",{class:!0});var _=m(n);l=$(_,a),_.forEach(f),c.forEach(f),s=D(v),o=b(v,"SPAN",{class:!0});var g=m(o);r=b(g,"SPAN",{class:!0});var z=m(r);S=$(z,u),z.forEach(f),g.forEach(f),this.h()},h(){h(n,"class","unskew svelte-1nscqzt"),h(e,"class","skew type left svelte-1nscqzt"),q(e,"--skin-local-bg",t),h(r,"class","unskew svelte-1nscqzt"),h(o,"class","skew type right svelte-1nscqzt"),q(o,"--skin-local-bg",d)},m(v,c){y(v,e,c),E(e,n),E(n,l),y(v,s,c),y(v,o,c),E(o,r),E(r,S)},p(v,c){c&1&&a!==(a=v[0][0]+"")&&P(l,a),c&1&&t!==(t=`var(--skin-${v[0][0]}-bg)`)&&q(e,"--skin-local-bg",t),c&1&&u!==(u=v[0][1]+"")&&P(S,u),c&1&&d!==(d=`var(--skin-${v[0][1]}-bg)`)&&q(o,"--skin-local-bg",d)},d(v){v&&f(e),v&&f(s),v&&f(o)}}}function ce(i){let e,n=i[0][0]+"",a,l=`var(--skin-${i[0][0]}-bg)`;return{c(){e=k("span"),a=w(n),this.h()},l(t){e=b(t,"SPAN",{class:!0});var s=m(e);a=$(s,n),s.forEach(f),this.h()},h(){h(e,"class","type svelte-1nscqzt"),q(e,"--skin-local-bg",l)},m(t,s){y(t,e,s),E(e,a)},p(t,s){s&1&&n!==(n=t[0][0]+"")&&P(a,n),s&1&&l!==(l=`var(--skin-${t[0][0]}-bg)`)&&q(e,"--skin-local-bg",l)},d(t){t&&f(e)}}}function Z(i){let e,n=i[0].slice(2),a=[];for(let l=0;l<n.length;l+=1)a[l]=x(Y(i,n,l));return{c(){e=k("span");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=b(l,"SPAN",{id:!0,class:!0});var t=m(e);for(let s=0;s<a.length;s+=1)a[s].l(t);t.forEach(f),this.h()},h(){h(e,"id","additional-types-expansion"),h(e,"class","font-sm cap pad-top pad-in align-right row svelte-1nscqzt")},m(l,t){y(l,e,t);for(let s=0;s<a.length;s+=1)a[s].m(e,null)},p(l,t){if(t&1){n=l[0].slice(2);let s;for(s=0;s<n.length;s+=1){const o=Y(l,n,s);a[s]?a[s].p(o,t):(a[s]=x(o),a[s].c(),a[s].m(e,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=n.length}},d(l){l&&f(e),ee(a,l)}}}function x(i){let e,n=i[3]+"",a,l=`var(--skin-${i[3]}-bg)`;return{c(){e=k("span"),a=w(n),this.h()},l(t){e=b(t,"SPAN",{class:!0});var s=m(e);a=$(s,n),s.forEach(f),this.h()},h(){h(e,"class","comma svelte-1nscqzt"),q(e,"color",l)},m(t,s){y(t,e,s),E(e,a)},p(t,s){s&1&&n!==(n=t[3]+"")&&P(a,n),s&1&&l!==(l=`var(--skin-${t[3]}-bg)`)&&q(e,"color",l)},d(t){t&&f(e)}}}function fe(i){let e,n,a;function l(r,u){return r[0].length===1?ce:r[0].length===2?oe:re}let t=l(i),s=t(i),o=i[0].length>2&&i[1]&&Z(i);return{c(){e=k("span"),s.c(),n=T(),o&&o.c(),a=Q(),this.h()},l(r){e=b(r,"SPAN",{class:!0});var u=m(e);s.l(u),u.forEach(f),n=D(r),o&&o.l(r),a=Q(),this.h()},h(){h(e,"class","type-tag svelte-1nscqzt")},m(r,u){y(r,e,u),s.m(e,null),y(r,n,u),o&&o.m(r,u),y(r,a,u)},p(r,[u]){t===(t=l(r))&&s?s.p(r,u):(s.d(1),s=t(r),s&&(s.c(),s.m(e,null))),r[0].length>2&&r[1]?o?o.p(r,u):(o=Z(r),o.c(),o.m(a.parentNode,a)):o&&(o.d(1),o=null)},i:W,o:W,d(r){r&&f(e),s.d(),r&&f(n),o&&o.d(r),r&&f(a)}}}function _e(i,e,n){let{type:a}=e,l=!1;const t=()=>n(1,l=!l);return i.$$set=s=>{"type"in s&&n(0,a=s.type)},[a,l,t]}class ve extends M{constructor(e){super(),R(this,e,_e,fe,G,{type:0})}}export{pe as C,he as F,ve as T};