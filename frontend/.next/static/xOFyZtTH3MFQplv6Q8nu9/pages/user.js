(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5pKv":function(n,t){n.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(n,t,r){n.exports=r("uekQ")},BvRO:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){var n=r("R2GR");return{page:n.default||n}}])},R2GR:function(n,t,r){"use strict";r.r(t);var e=r("ln6h"),u=r.n(e),o=r("6BQ9"),i=r.n(o),a=r("O40h"),c=r("q1tI"),p=r.n(c),s=r("17x9"),f=r.n(s),l=r("/MKj"),d=r("p+NB"),v=r("LAVF"),w=r("uor+"),b=r("bx4M"),k=r("Tckk"),x=p.a.createElement,R=function(n){n.id,Object(l.b)();var t=Object(l.c)(function(n){return n.post}).mainPosts,r=Object(l.c)(function(n){return n.user}).userInfo;return x("div",null,r?x(b.a,{action:[x("div",{key:"twit"},"\uc9f9\uc9f9",x("br",null),r.Posts),x("div",{key:"following"},"\ud314\ub85c\uc789",x("br",null),r.Followings),x("div",{key:"followers"},"\ud314\ub85c\uc6cc",x("br",null),r.Followers)]},x(b.a.Meta,{avatar:x(k.a,null,r.nickname[0])})):null,t.map(function(n){x(w.a,{key:n.id,post:n})}))};R.propTyps={id:f.a.number.isRequired},R.getInitialProps=function(){var n=Object(a.a)(u.a.mark(function n(t){var r;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.query.id,t.store.dispatch({type:v.o,data:r}),t.store.dispatch({type:d.w,data:r}),n.abrupt("return",{id:i()(t.query.id,10)});case 4:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),t.default=R},XWtR:function(n,t,r){var e=r("5T2Y").parseInt,u=r("oc46").trim,o=r("5pKv"),i=/^[-+]?0[xX]/;n.exports=8!==e(o+"08")||22!==e(o+"0x16")?function(n,t){var r=u(String(n),3);return e(r,t>>>0||(i.test(r)?16:10))}:e},dEVD:function(n,t,r){var e=r("Y7ZC"),u=r("XWtR");e(e.G+e.F*(parseInt!=u),{parseInt:u})},oc46:function(n,t,r){var e=r("Y7ZC"),u=r("Jes0"),o=r("KUxP"),i=r("5pKv"),a="["+i+"]",c=RegExp("^"+a+a+"*"),p=RegExp(a+a+"*$"),s=function(n,t,r){var u={},a=o(function(){return!!i[n]()||"\u200b\x85"!="\u200b\x85"[n]()}),c=u[n]=a?t(f):i[n];r&&(u[r]=c),e(e.P+e.F*a,"String",u)},f=s.trim=function(n,t){return n=String(u(n)),1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(p,"")),n};n.exports=s},uekQ:function(n,t,r){r("dEVD"),n.exports=r("WEpk").parseInt}},[["BvRO",1,0]]]);