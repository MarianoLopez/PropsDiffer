(this["webpackJsonpprops-differ"]=this["webpackJsonpprops-differ"]||[]).push([[0],{122:function(e,t,n){e.exports=n(340)},340:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),o=n(14),l=n(17),u=n(380),s=n(377),p=n(389),d=n(379),m=n(28),f=n(388),b=function(e){var t=e.children,n=e.value,a=e.index,i=Object(m.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},i),n===a&&r.a.createElement(f.a,{p:1},t))},E=function(e){var t=e.titles,n=e.children,i=e.selectedTab,c=void 0===i?0:i,l=Object(a.useState)({selectedTab:c}),u=Object(o.a)(l,2),m=u[0],f=u[1],E=function(e,t){f({selectedTab:t})},v=function(){return r.a.createElement(s.a,{position:"static"},r.a.createElement(p.a,{value:m.selectedTab,onChange:E,variant:"scrollable",scrollButtons:"on"},t.map((function(e,t){return r.a.createElement(d.a,{key:t,label:e})}))))},g=function(){return n.map((function(e,t){return r.a.createElement(b,{key:t,value:m.selectedTab,index:t},e)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(g,null))},v=n(392),g=n(342),O=function(e){var t=e.code,n=e.description,a=Object(m.a)(e,["code","description"]);return r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,null,r.a.createElement(g.a,{variant:"subtitle2"},n)),r.a.createElement(u.a,{container:!0,justify:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(G,{value:t}))),r.a.createElement(u.a,null,r.a.createElement(v.a,Object.assign({language:"properties",showLineNumbers:!0},a),t))))},j=n(110),h=n(383),y=n(384),C=Object(h.a)((function(){return{pad:{padding:5}}})),k=function(e){var t=e.id,n=e.title,a=e.description,i=e.filesLimit,c=void 0===i?1:i,o=e.acceptedFiles,l=void 0===o?["*"]:o,u=e.onChange,s=Object(m.a)(e,["id","title","description","filesLimit","acceptedFiles","onChange"]),p=C();return r.a.createElement(y.a,{className:p.pad},r.a.createElement(g.a,{variant:"subtitle2"},n),r.a.createElement(g.a,{variant:"caption"},a),r.a.createElement(j.a,Object.assign({filesLimit:c,acceptedFiles:l,onChange:function(e){return u(e,t)}},s)))},w=n(394),B=n(396),A=n(395),F=n(385),S=n(391),x=function(e,t){var n={};return e%2!==0?("diff"===t&&(n.backgroundColor="#cfc"),n.display="diff"===t||"sideA"===t?"block":"none"):("diff"===t&&(n.backgroundColor="#fdd"),n.display="diff"===t||"sideB"===t?"block":"none"),{style:n}},L=function(e){var t=e.code,n=e.labelA,i=e.labelB,c=e.diffLineStyle,s=void 0===c?x:c,p=Object(m.a)(e,["code","labelA","labelB","diffLineStyle"]),d=[{id:"diff",label:"Diff"},{id:"sideA",label:n||"Side A"},{id:"sideB",label:i||"Side B"}],f=Object(a.useState)({selectedOption:d[0].id,code:t}),b=Object(o.a)(f,2),E=b[0],g=b[1],O=function(e){g(Object(l.a)(Object(l.a)({},E),{},{selectedOption:e.target.value}))},j=function(){return d.map((function(e){return r.a.createElement(F.a,{key:e.id,value:e.id,control:r.a.createElement(S.a,null),label:e.label})}))},h=function(){return r.a.createElement(w.a,{component:"fieldset"},r.a.createElement(B.a,{component:"legend"},"Show"),r.a.createElement(A.a,{name:"snippetOptions",value:E.selectedOption,onChange:O},r.a.createElement(u.a,{item:!0},r.a.createElement(j,null))))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0},r.a.createElement(h,null)),r.a.createElement(u.a,{container:!0,justify:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(G,{value:t})))),r.a.createElement(u.a,{container:!0},r.a.createElement(v.a,Object.assign({language:"properties",showLineNumbers:"diff"!==E.selectedOption,wrapLines:!0,lineProps:function(e){return s(e,E.selectedOption)}},p),E.code)))},M=n(78),T=function(e,t){var n=z(e,t)?Object(M.a)(t.keys()).filter((function(t){return!e.has(t)})).sort().map((function(e){return[e,t.get(e)]})):[];return new Map(n)},z=function(e,t){return!(null==e||null==t)},D=function(e){return Array.from(e.entries()).reduce((function(e,t){var n=Object(o.a)(t,2),a=n[0],r=n[1];return e+I(a,r)}),"")},I=function(e,t){return e.toString()+"="+t.toString()+"\n"},U=function(e){var t=e.propertiesA,n=e.propertiesB,i=Object(a.useState)({propertiesA:t,propertiesB:n}),c=Object(o.a)(i,2),l=c[0],s=c[1];Object(a.useEffect)((function(){s({propertiesA:t,propertiesB:n})}),[t,n]);var p,d=l.propertiesA,m=d.name,f=d.propertyFile,b=l.propertiesB,v=b.name,j=b.propertyFile,h=T(f,j),C=function(e,t){var n=z(e,t)?Object(M.a)(t.keys()).filter((function(t){return e.has(t)})).sort().filter((function(n){return e.get(n)!==t.get(n)})).map((function(n){return[n,[e.get(n),t.get(n)]]})):[];return new Map(n)}(f,j),k=T(j,f);return r.a.createElement(y.a,null,r.a.createElement(E,{titles:["Unmatched properties (".concat(C.size,")"),"Missing properties (".concat(h.size,")"),"Extra properties (".concat(k.size,")")]},r.a.createElement(L,{code:(p=C,Array.from(p.entries()).reduce((function(e,t){var n=t[0],a=Object(o.a)(t[1],2),r=a[0],i=a[1];return e+I(n,r)+I(n,i)}),"")),labelA:m,labelB:v}),r.a.createElement(O,{code:D(h),description:"Missing in ".concat(m," but present in ").concat(v)}),r.a.createElement(u.a,null,r.a.createElement(g.a,{variant:"subtitle2"},"Missing in ",v," but present in ",m),r.a.createElement(O,{code:D(k)}))))},H=n(382);function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.icon=e,this.onClick=t}var R=function(e){var t=e.toolBarItems;return r.a.createElement(y.a,{elevation:1},t.map((function(e,t){return r.a.createElement(H.a,{key:t,color:"primary",style:{margin:5},component:"span",size:"small",onClick:function(){e.onClick&&e.onClick()}},e.icon)})))},J=n(386),P=n(387),W=n(109),$=n(393),q=n(390),G=function(e){var t=e.value,n=e.name,i=void 0===n?"application":n,c=Object(a.useState)({open:!1,vertical:"bottom",horizontal:"right",autoHideDuration:5e3}),u=Object(o.a)(c,2),s=u[0],p=u[1],d=function(e,t){return p(Object(l.a)(Object(l.a)({},s),{},{open:t}))},m=function(){return r.a.createElement(W.CopyToClipboard,{text:t,onCopy:d},r.a.createElement(J.a,null))},f=s.vertical,b=s.horizontal,E=s.open,v=s.autoHideDuration,g=[new N(r.a.createElement(m,null)),new N(r.a.createElement(P.a,null),(function(){var e=document.createElement("a"),n=new Blob([t],{type:"text/x-java-properties"});e.href=URL.createObjectURL(n),e.download="".concat(i,".properties"),document.body.appendChild(e),e.click()}))];return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{toolBarItems:g}),r.a.createElement($.a,{anchorOrigin:{vertical:f,horizontal:b},open:E,autoHideDuration:v,onClose:function(){return p(Object(l.a)(Object(l.a)({},s),{},{open:!1}))},key:f+b},r.a.createElement(q.a,{severity:"success"},"Code copied to clipboard!")))},K=function(e){var t=e.onSubmit,n=Object(a.useState)({filesMinCount:2,uploadCount:0,acceptedFiles:[".properties"],uploaders:[{id:0,label:"Side A",name:"",propertyFile:{}},{id:1,label:"Side B",name:"",propertyFile:{}}]}),i=Object(o.a)(n,2),c=i[0],s=i[1],p=function(e,t){var n=e[0];if(n){var a=c.uploaders,r=a.findIndex((function(e){return e.id===t})),i=a[r];(function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=n,a.readAsText(e,"UTF-8")}))})(n).then((function(e){i.name=n.name,i.propertyFile=function(e){return new Map(e.split(/\r\n|\n/).filter((function(e){return""!==e&&e.includes("=")})).map((function(e){var t=e.split("=");return[t[0],t[1]]})))}(e),s(Object(l.a)(Object(l.a)({},c),{},{uploaders:a,uploadCount:c.uploadCount+1}))}))}};Object(a.useEffect)((function(){c.uploadCount>=c.filesMinCount&&t(c.uploaders[0],c.uploaders[1])}),[c.uploadCount]);var d=function(){return c.uploaders.map((function(e){return r.a.createElement(k,{key:e.id,id:e.id,title:e.label,description:e.name,acceptedFiles:c.acceptedFiles,onChange:p})}))};return r.a.createElement(u.a,{container:!0,spacing:4},r.a.createElement(u.a,{item:!0},r.a.createElement(d,null)))},Q=function(){var e=Object(a.useState)({propertiesA:{name:"",propertyFile:null},propertiesB:{name:"",propertyFile:null}}),t=Object(o.a)(e,2),n=t[0],i=t[1];return r.a.createElement(y.a,{style:{padding:5}},r.a.createElement(u.a,{container:!0,spacing:1},r.a.createElement(u.a,{item:!0,xs:12,xl:2,md:2},r.a.createElement(K,{onSubmit:function(e,t){i({propertiesA:e,propertiesB:t})}})),r.a.createElement(u.a,{item:!0,xs:12,xl:10,md:10},r.a.createElement(U,{propertiesA:n.propertiesA,propertiesB:n.propertiesB}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.de6442a5.chunk.js.map