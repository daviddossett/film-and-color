(this["webpackJsonpfilm-and-color"]=this["webpackJsonpfilm-and-color"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(36),o=t.n(c),s=(t(46),t(6)),i=t(37),l=(t(54),t(55),(new Date).toDateString()),m=function(e){var a=e.className,t=e.title;return r.a.createElement("div",{className:a},r.a.createElement("span",{className:"date"},l),r.a.createElement("h1",{className:"title"},t))},u=t(40),d=t(13);t(56),t(57),t(58);d.initializeApp({apiKey:"AIzaSyBkaD_b0JbtRV3AWZRhegneeZ0mRBq2IcQ",authDomain:"film-and-color.firebaseapp.com",databaseURL:"https://film-and-color.firebaseio.com",projectId:"film-and-color",storageBucket:"film-and-color.appspot.com",messagingSenderId:"656048480818",appId:"1:656048480818:web:e98fc541c630bd94a7522b",measurementId:"G-YDNX20FLMX"}),d.analytics();d.storage();var f=d.firestore(),p=(d.analytics(),d.firestore.FieldValue.serverTimestamp,t(20)),b=t.n(p),g=t(38),h=t(39),v=t.n(h),E=(t(97),function(e){var a={backgroundColor:e.color};return e.isLoading?r.a.createElement("div",{className:"loadingSwatch"}):r.a.createElement("div",{style:a,className:"swatchWrapper"})}),j=(t(98),"eeed0b6733a644cea07cf4c60f87ebb7"),O=new v.a.App({apiKey:"6eb390cb8ba2455cbe17926530e2d012"}),y=function(e){var a=e.image,t=e.className,c=Object(n.useState)(!0),o=Object(s.a)(c,2),i=o[0],l=o[1],m=Object(n.useState)([]),u=Object(s.a)(m,2),d=u[0],f=u[1];if(Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.models.predict(j,a);case 2:t=e.sent,n=t.outputs[0].data.colors,r=n.map((function(e){return e.raw_hex})),f(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(n.useEffect)((function(){d.length>0&&l(!1)}),[l,d]),i){for(var p=[],h=0;h<4;h++)p.push(r.a.createElement(E,{key:h,isLoading:i}));return r.a.createElement("div",{className:"".concat(t," palette-root")},p)}var v=d.map((function(e){return r.a.createElement(E,{key:e,isLoading:i,color:e})}));return r.a.createElement("div",{className:"".concat(t," palette-root")},v)},w=(t(99),function(e){var a=e.imageUrl,t=e.className;return r.a.createElement("img",{src:a,className:"".concat(t," heroImageRoot"),style:{backgroundSize:"contain",backgroundRepeat:"no-repeat"},alt:"Movie still to be analyzed"})});var N=function(){i.analytics().logEvent("app_start");var e=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){var a=f.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var a=[];e.forEach((function(e){a.push(Object(u.a)({},e.data(),{id:e.id}))})),c(a)}));return function(){return a()}}),[e]),{documents:r}}("images").documents,a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)("The Grand Budapest Hotel"),d=Object(s.a)(l,2),p=d[0],b=(d[1],Object(n.useState)("Wes Anderson")),g=Object(s.a)(b,2),h=g[0],v=(g[1],Object(n.useState)("Robert D. Yeoman")),E=Object(s.a)(v,2),j=E[0],O=(E[1],Object(n.useState)("Stephan O. Gessler and Gerald Sullivan")),N=Object(s.a)(O,2),S=N[0];N[1],Object(n.useEffect)((function(){e.length>0&&o(e[0].url)}),[e,o]);var k=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"info-1"},"Directed by ",h),r.a.createElement("p",{className:"info-2"},"Cinematograpy by ",j,". Art direction by ",S)),I=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"footer"},"Inspired by\xa0",r.a.createElement("a",{href:"https://www.instagram.com/filmandcolor/?hl=en",target:"_blank",rel:"noopener noreferrer"},"Film and Color"),".\xa0Made by\xa0",r.a.createElement("a",{href:"https://twitter.com/david_dossett",target:"_blank",rel:"noopener noreferrer"},"me")));return r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid"},r.a.createElement(m,{className:"titlebar",title:p}),r.a.createElement(y,{className:"palette",image:c}),k,r.a.createElement(w,{className:"image",imageUrl:c}),I))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,a,t){e.exports=t(100)},46:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[41,1,2]]]);
//# sourceMappingURL=main.010336d2.chunk.js.map