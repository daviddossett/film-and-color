(this["webpackJsonpfilm-and-color"]=this["webpackJsonpfilm-and-color"]||[]).push([[0],{28:function(e,a,t){e.exports=t(76)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),o=t.n(r),l=(t(33),t(34),t(35),function(e){var a=e.imageUrl,t=e.className;return c.a.createElement("img",{src:a,className:"".concat(t," heroImageRoot"),style:{backgroundSize:"contain",backgroundRepeat:"no-repeat"},alt:"Movie"})}),i=t(10),s=t.n(i),m=t(26),u=t(11),d=t(27),p=t.n(d),f=(t(74),function(e){var a=e.color,t={backgroundColor:a};return e.isLoading?c.a.createElement("div",{className:"loadingSwatch"}):c.a.createElement("div",{style:t,className:"swatchWrapper"},c.a.createElement("div",{className:"hex-wrapper"},c.a.createElement("p",{className:"hex"},a)))}),h=(t(75),"eeed0b6733a644cea07cf4c60f87ebb7"),g=new p.a.App({apiKey:"6eb390cb8ba2455cbe17926530e2d012"}),E=function(e){var a=e.image,t=e.className,r=Object(n.useState)(!0),o=Object(u.a)(r,2),l=o[0],i=o[1],d=Object(n.useState)([]),p=Object(u.a)(d,2),E=p[0],b=p[1];if(Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.models.predict(h,a);case 2:t=e.sent,n=t.outputs[0].data.colors,c=n.map((function(e){return e.raw_hex})),b(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(n.useEffect)((function(){E.length>0&&i(!1)}),[i,E]),l){for(var v=[],w=0;w<4;w++)v.push(c.a.createElement(f,{key:w,isLoading:l}));return c.a.createElement("div",{className:"".concat(t," palette-root")},v)}var N=E.map((function(e){return c.a.createElement(f,{key:e,isLoading:l,color:e})}));return c.a.createElement("div",{className:"".concat(t," palette-root")},N)},b="https://www.itl.cat/pngfile/big/189-1897904_her-2013.jpg";var v=function(){return window.analytics.track("User Registered",{plan:"Pro Annual",accountType:"Facebook"}),c.a.createElement("div",{className:"grid"},c.a.createElement("header",null,c.a.createElement("div",{className:"circles"},c.a.createElement("div",{className:"circle1"}),c.a.createElement("div",{className:"circle2"}),c.a.createElement("div",{className:"circle3"})),c.a.createElement("h1",{className:"title"},"filmandcolor"),c.a.createElement("p",{className:"subtitle"},"Inspired by ",c.a.createElement("a",{href:"https://www.instagram.com/filmandcolor/?hl=en",target:"blank"},"@filmandcolor"))),c.a.createElement("div",{className:"image-wrapper"},c.a.createElement(l,{className:"image",imageUrl:b})),c.a.createElement(E,{className:"palette",image:b}),c.a.createElement("footer",null,c.a.createElement("p",null,"Made by ",c.a.createElement("a",{href:"https://twitter.com/david_dossett",target:"blank"},"me \u2192"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a871983e.chunk.js.map