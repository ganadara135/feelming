(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{davr:function(t,n,e){"use strict";e.r(n);var r=e("ln6h"),a=e.n(r),o=e("O40h"),c=e("q1tI"),u=e.n(c),i=e("uor+"),s=e("/MKj"),l=e("p+NB"),d=u.a.createElement,p=function(t){var n=t.tag;console.log("tag : ",n);var e=Object(s.b)(),r=Object(s.c)(function(t){return t.post}),a=r.mainPosts,o=r.hasMorePost,u=Object(c.useCallback)(function(){window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&o&&e({type:l.n,lastId:a[a.length-1].id,data:n})},[o,a.length]);return Object(c.useEffect)(function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}},[a.length]),d("div",null,a.map(function(t){return d(i.a,{key:t.id,post:t})}))};p.getInitialProps=function(){var t=Object(o.a)(a.a.mark(function t(n){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.query.tag,n.store.dispatch({type:l.n,data:e}),t.abrupt("return",{tag:e});case 3:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}(),n.default=p},qDX8:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hashtag",function(){var t=e("davr");return{page:t.default||t}}])}},[["qDX8",1,0]]]);