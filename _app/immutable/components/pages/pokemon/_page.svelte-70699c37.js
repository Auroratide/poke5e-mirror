import{S as l,i as _,s as g,w as m,a as k,x as i,c as d,y as $,b as y,f,t as p,z as u,h as w}from"../../../chunks/index-a38d8c23.js";import{L as P,P as x}from"../../../chunks/_layout-15885890.js";import{T as L}from"../../../chunks/Title-3d3f0d75.js";function h(s){let n,a;return n=new x({props:{slot:"list",pokemons:s[0]}}),{c(){m(n.$$.fragment)},l(e){i(n.$$.fragment,e)},m(e,o){$(n,e,o),a=!0},p(e,o){const t={};o&1&&(t.pokemons=e[0]),n.$set(t)},i(e){a||(f(n.$$.fragment,e),a=!0)},o(e){p(n.$$.fragment,e),a=!1},d(e){u(n,e)}}}function S(s){let n,a,e,o;return n=new L({props:{value:"Pokemon"}}),e=new P({props:{$$slots:{list:[h]},$$scope:{ctx:s}}}),{c(){m(n.$$.fragment),a=k(),m(e.$$.fragment)},l(t){i(n.$$.fragment,t),a=d(t),i(e.$$.fragment,t)},m(t,r){$(n,t,r),y(t,a,r),$(e,t,r),o=!0},p(t,[r]){const c={};r&5&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){o||(f(n.$$.fragment,t),f(e.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),p(e.$$.fragment,t),o=!1},d(t){u(n,t),t&&w(a),u(e,t)}}}function T(s,n,a){let e,{data:o}=n;return s.$$set=t=>{"data"in t&&a(1,o=t.data)},s.$$.update=()=>{s.$$.dirty&2&&a(0,e=o.pokemon)},[e,o]}class z extends l{constructor(n){super(),_(this,n,T,S,g,{data:1})}}export{z as default};