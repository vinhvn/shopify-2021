(this["webpackJsonpshopify-2021"]=this["webpackJsonpshopify-2021"]||[]).push([[0],{17:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n(10),o=n.n(c),i=(n(17),n(11)),a=n(8),l=n(3),u=n.n(l),f=n(5),d=n(4),b=n(27),x=n(28),h=n(29),m=n(30),j=function(){var e=Object(f.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.abrupt("return",new Promise((function(e,t){fetch("".concat("https://www.omdbapi.com/","?apikey=").concat("19233536","&s=").concat(n,"&type=movie"),{method:"GET"}).then((function(t){e(t.json())})).catch((function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var p=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),l=Object(d.a)(o,2),p=l[0],g=l[1],v=Object(r.useState)({}),O=Object(d.a)(v,2),w=O[0],y=O[1],N=Object(r.useState)(!1),k=Object(d.a)(N,2),C=k[0],S=k[1],T=Object(r.useState)(null),A=Object(d.a)(T,2),I=A[0],E=A[1];Object(r.useEffect)((function(){return D(),function(){}}),[]);var R=function(){var e=Object(f.a)(u.a.mark((function e(){var t,s,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:n,!(n.length<3)){e.next=3;break}return e.abrupt("return");case 3:return S(!0),e.next=6,j(t);case 6:s=e.sent,clearTimeout(I),E(setTimeout((function(){S(!1)}),2e3)),"True"===s.Response&&g(s.Search);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;window.localStorage.nominations=JSON.stringify(e)},D=function(){if(window.localStorage.nominations){var e=JSON.parse(window.localStorage.nominations);y(e)}};return Object(s.jsx)("div",{className:"relative flex flex-col h-full items-center bg-white text-berry-500",children:Object(s.jsxs)("div",{className:"p-4 w-full mt-12 md:max-w-5xl",children:[Object(s.jsx)("span",{className:"flex text-4xl font-bold font-serif pb-6",children:"The Shoppies \ud83d\udc51"}),Object(s.jsx)("span",{className:"flex text-xl pb-2",children:"Select your top 5 favourite films to nominate for the upcoming Shoppies!"}),Object(s.jsx)("span",{className:"flex text-sm font-serif pb-6",children:"Nominations are saved automatically so you won't lose your choices when you leave the site."}),Object(s.jsxs)("div",{className:"flex flex-col p-6 shadow-lg rounded-lg bg-white mb-6",children:[Object(s.jsx)("span",{className:"text-xl font-semibold font-serif mb-3",children:"Movie Title"}),Object(s.jsxs)("div",{className:"transition flex py-3 px-4 mb-4 rounded-lg border-2 border-gray-200 bg-white text-gray-400 focus-within:border-sushi-500",children:[Object(s.jsx)(m.a,{className:"mr-2",size:24,color:"currentColor"}),Object(s.jsx)("input",{type:"text",placeholder:"Shawshank Redemption",className:"flex w-full text-md bg-transparent placeholder-gray-500 text-berry-500 focus:outline-none",value:n,onChange:function(e){c(e.target.value),R(e.target.value)}})]}),Object(s.jsxs)("div",{className:"flex items-center justify-end",children:[function(){var e="transition animate-spin mr-3 w-6 h-6 text-sushi-500";return C||(e+=" opacity-0"),Object(s.jsxs)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}(),Object(s.jsx)("button",{className:"transition px-5 py-2 font-serif font-bold text-sm text-white bg-sushi-500 rounded-full hover:bg-sushi-600  active:bg-sushi-400 focus:outline-none",onClick:function(){return R()},children:"SEARCH"})]})]}),Object(s.jsxs)("div",{className:"flex flex-col md:grid md:grid-cols-2 md:gap-6",children:[function(e){if(Array.isArray(e)&&e.length&&n.length>=3){var t,r=[],o=Object(i.a)(e);try{var l=function(){var e=t.value,n=!!w[e.imdbID],c="flex flex-row items-center px-2 py-1 rounded-lg";c+=n?" cursor-default":" cursor-pointer hover:bg-gray-100",r.push(Object(s.jsxs)("div",{className:c,onClick:function(){return function(e){if(!(Object.keys(w).length>=5)){for(var t in w)if(t===e.imdbID)return;var n=Object(a.a)({},w);n[e.imdbID]=e,y(n),z(n)}}(e)},children:[n?Object(s.jsx)(b.a,{className:"mr-2 flex-shrink-0",size:18,color:"currentColor"}):Object(s.jsx)(x.a,{className:"mr-2 flex-shrink-0",size:18,color:"currentColor"}),Object(s.jsx)("span",{className:"text-md",children:"".concat(e.Title," (").concat(e.Year,")")},e.imdbID)]},e.imdbID))};for(o.s();!(t=o.n()).done;)l()}catch(u){o.e(u)}finally{o.f()}return Object(s.jsxs)("div",{className:"flex flex-col p-6 shadow-lg rounded-lg bg-white",children:[Object(s.jsxs)("div",{className:"flex flex-row pb-2 items-center justify-between",children:[Object(s.jsx)("span",{className:"text-xl font-semibold font-serif",children:'Results for "'.concat(n,'"')}),Object(s.jsx)("button",{className:"transition px-5 py-2 font-serif font-bold text-sm text-sushi-500 bg-white rounded-full hover:bg-gray-100  active:bg-gray-300 focus:outline-none",onClick:function(){return g([]),void c("")},children:"CLEAR"})]}),r]})}return Object(s.jsx)("div",{className:"flex flex-col p-6 shadow-lg rounded-lg bg-white",children:Object(s.jsx)("span",{className:"text-xl font-semibold font-serif",children:"No results found."})})}(p),Object(s.jsxs)("div",{className:"flex flex-col p-6 shadow-lg rounded-lg bg-white mt-6 md:mt-0",children:[Object(s.jsxs)("div",{className:"flex flex-row pb-2 items-center justify-between",children:[Object(s.jsx)("span",{className:"text-xl font-semibold font-serif",children:"Nominations"}),Object(s.jsxs)("div",{className:"flex flex-row",children:[Object(s.jsx)("button",{className:"transition px-5 py-2 font-serif font-bold text-sm text-sushi-500 bg-white rounded-full hover:bg-gray-100  active:bg-gray-300 focus:outline-none",onClick:function(){return y([]),void z([])},children:"CLEAR"}),Object(s.jsx)("button",{className:"transition px-5 py-2 font-serif font-bold text-sm text-sushi-500 bg-white rounded-full hover:bg-gray-100  active:bg-gray-300 focus:outline-none",onClick:function(){return z()},children:"SAVE"})]})]}),function(e){if(e&&Object.keys(e).length>0){var t=[],n=function(e){var n=w[e];t.push(Object(s.jsxs)("div",{className:"flex flex-row items-center px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100",onClick:function(){return function(e){var t=Object(a.a)({},w);delete t[e],y(t),z(t)}(e)},children:[Object(s.jsx)(h.a,{className:"mr-2 flex-shrink-0",size:18,color:"currentColor"}),Object(s.jsx)("span",{className:"text-md",children:"".concat(n.Title," (").concat(n.Year,")")})]},e))};for(var r in e)n(r);return Object(s.jsx)("div",{className:"flex flex-col",children:t})}return Object(s.jsx)("span",{className:"text-md",children:"You don't have any nominations yet!"})}(w)]})]}),function(){var e="transition transform flex w-full bg-melon-500 text-white font-serif font-bold rounded-lg shadow-lg p-6 mt-6";return w&&Object.keys(w).length<5&&(e+=" h-0 scale-0"),Object(s.jsx)("div",{className:e,children:"All nominations selected!"})}()]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};n(21).config(),o.a.render(Object(s.jsx)(p,{}),document.getElementById("root")),g()}},[[25,1,2]]]);
//# sourceMappingURL=main.fb2b94c2.chunk.js.map