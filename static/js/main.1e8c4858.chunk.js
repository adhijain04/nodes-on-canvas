(this["webpackJsonpvernacular-assignment"]=this["webpackJsonpvernacular-assignment"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(1),s=t.n(c),i=t(6),l=t.n(i);t(13);var r=function(){return Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)("h2",{children:"Canvas"}),Object(a.jsx)("button",{className:"save",children:Object(a.jsx)("i",{className:"fas fa-save"})})]})},o=t(7),u=t(2);var f=function(e){var n=e.renderNodeHandler,t=e.menuDisabled;return Object(a.jsxs)("div",{className:"left-container",children:[Object(a.jsxs)("div",{className:"menu-item",onClick:function(){return n("Speak")},children:[Object(a.jsx)("i",{className:"fas fa-comment menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"Speak"})]}),Object(a.jsxs)("div",{className:"menu-item",onClick:function(){return n("Choice")},children:[Object(a.jsx)("i",{className:"fas fa-project-diagram menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"Choice"})]}),Object(a.jsxs)("div",{className:"menu-item",onClick:function(){return n("DTMF")},children:[Object(a.jsx)("i",{className:"fas fa-calculator menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"DTMF"})]}),Object(a.jsxs)("div",{className:"menu-item",onClick:function(){return n("Record")},children:[Object(a.jsx)("i",{className:"fas fa-microphone menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"Record"})]}),Object(a.jsxs)("div",{className:"menu-item",onClick:function(){return n("API")},children:[Object(a.jsx)("i",{className:"fas fa-globe menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"API"})]}),Object(a.jsxs)("div",{className:"menu-item",onClick:function(){return n("SMS")},children:[Object(a.jsx)("i",{className:"fas fa-envelope menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"SMS"})]}),Object(a.jsxs)("div",{className:"menu-item",onClick:function(){return n("Flow")},children:[Object(a.jsx)("i",{className:"fab fa-uncharted menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"Flow"})]}),Object(a.jsxs)("div",{className:"menu-item",onClick:function(){return n("Transfer")},children:[Object(a.jsx)("i",{className:"fas fa-people-arrows menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"Transfer"})]}),Object(a.jsxs)("div",{className:t?"menu-item disabled":"menu-item",onClick:function(){return n("HangUp")},disabled:t,children:[Object(a.jsx)("i",{className:"fas fa-phone-slash menu-icon"}),Object(a.jsx)("p",{className:"menu-name",children:"HangUp"})]})]})},h=function(e){for(var n=e.nodes,t=e.context,a=e.dragTarget,c=0;c<n.length;c++)d({context:t,color:a&&a.name===n[c].name?"blue":"white",info:n[c].info,name:n[c].name})},d=function(e){var n=e.context,t=e.name,a=e.info,c=e.color,s=10;n.lineJoin="round",n.lineWidth=s,n.beginPath(),n.shadowBlur=10,n.shadowOffsetX=1,n.shadowOffsetY=1,n.strokeStyle=c,n.shadowColor="gray",n.font="20px Georgia",n.textAlign="center",n.textBaseline="middle",n.strokeRect(a.x+5,a.y+5,a.w-s,a.h-s),n.rect(a.x+5,a.y+5,a.w-s,a.h-s),n.fillStyle="white",n.shadowColor="white",n.fill(),function(e,n){if(e.beginPath(),n.sub.right&&n.sub.right.length)for(var t=0;t<n.sub.right.length;t++)0===t?e.rect(n.sub.right[t].x+n.w-n.sub.right[t].w,n.sub.right[t].y+(n.h/2-10),n.sub.right[t].w,n.sub.right[t].h):e.rect(n.sub.right[t].x+n.w-n.sub.right[t].w,n.sub.right[t].y+(n.h/2+15),n.sub.right[t].w,n.sub.right[t].h);n.sub.left&&e.rect(n.sub.left.x,n.sub.left.y+(n.h/2-10),n.sub.left.w,n.sub.left.h),e.fillStyle="gray",e.shadowColor="white",e.fill()}(n,a),n.fillStyle="black",n.fillText(t,a.x+a.w/2,a.y+a.h/2)};var b=function(e){var n=e.selectedNode;return console.log(n),Object(a.jsxs)("div",{className:"right-sidebar-container",children:[Object(a.jsx)("div",{className:"header-section",children:Object(a.jsx)("h3",{children:n.name})}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("textarea",{placeholder:"Tell VIVA what to say"}),Object(a.jsxs)("p",{children:['Press "',"{",'" to add variables.']})]})]})};var j=function(){var e=!1,n=null,t=null,s=null,i=2e3,l=Object(c.useRef)(null),r=Object(c.useRef)(null),d=Object(c.useState)(1),j=Object(u.a)(d,2),m=j[0],x=j[1],v=Object(c.useState)(null),g=Object(u.a)(v,2),O=g[0],w=g[1],p=Object(c.useState)("scroll"),N=Object(u.a)(p,2),y=N[0],S=N[1],C=Object(c.useState)({clientX:0,clientY:0}),k=Object(u.a)(C,2),T=k[0],M=T.clientX,H=T.clientY,I=k[1],P=Object(c.useState)([{name:"Home",info:{x:300,y:300,w:130,h:80,sub:{right:[{x:300,y:300,w:20,h:15}]}},next:null}]),Y=Object(u.a)(P,2),D=Y[0],E=Y[1],R=Object(c.useState)(!0),X=Object(u.a)(R,2),F=X[0],A=X[1],B=Object(c.useState)(null),U=Object(u.a)(B,2),W=U[0],L=U[1],J=Object(c.useState)(!1),V=Object(u.a)(J,2),G=V[0],q=V[1];Object(c.useEffect)((function(){var e=window,n=e.innerHeight,t=e.innerWidth,a=(i-n)/2,c=(i-t)/2;r.current.scroll(c,a)}),[]),Object(c.useEffect)((function(){var e=l.current,n=window.devicePixelRatio;if(e){var t=e.getContext("2d");t&&(window.devicePixelRatio=1,e.style.width="2000px",e.style.height="2000px",e.width=Math.floor(i*n),e.height=Math.floor(i*n),t.scale(n,n),t.font="10px Arial",t.textAlign="center",t.textBaseline="middle",w(t))}}),[O]),Object(c.useEffect)((function(){O&&(O.clearRect(0,0,O.clientWidth,O.clientHeight),h({nodes:D,context:O,dragTarget:n}))}),[D,O,n]);var z=function(t){e=!1,h({nodes:D,context:O,dragTarget:n=null})};return Object(a.jsxs)("div",{className:"canvas-wrapper",children:[Object(a.jsx)(f,{menuDisabled:G,renderNodeHandler:function(e){var n,t=!1,a=Object(o.a)(D);if(n="API"===e?{name:e,info:{x:300,y:300,w:130,h:80,sub:{right:[{name:"fail",x:300,y:300,w:20,h:15},{name:"success",x:300,y:300,w:20,h:15}],left:{x:300,y:300,w:20,h:15}}},previous:null,success:null,fail:null}:"Choice"===e?{name:e,info:{x:300,y:300,w:130,h:80,sub:{right:[{name:"if",x:300,y:300,w:20,h:15},{name:"else",x:300,y:300,w:20,h:15}],left:{x:300,y:300,w:20,h:15}}},previous:null,else:null,if:null}:"HangUp"===e||"Transfer"===e?{name:e,info:{x:300,y:300,w:130,h:80,sub:{left:{x:300,y:300,w:20,h:15}}},previous:null}:{name:e,info:{x:300,y:300,w:130,h:80,sub:{right:[{x:300,y:300,w:20,h:15}],left:{x:300,y:300,w:20,h:15}}},previous:null,next:null},"HangUp"===e){for(var c=0;c<a.length;c++)a[c].name.includes("HangUp")?(q(!0),t=!0):t=!1;t||a.push(n)}else a.push(n);E(a)}}),Object(a.jsxs)("div",{className:"canvas-container",ref:r,children:[Object(a.jsx)("canvas",{draggable:F,ref:l,className:"canvas",style:{overflow:y,transformOrigin:"0 0",transform:"scale(".concat(m,", ").concat(m,") translate(").concat(0,"px, ").concat(0,"px)")},onMouseDown:function(a){t=parseInt(a.nativeEvent.offsetX-O.canvas.clientLeft),s=parseInt(a.nativeEvent.offsetY-O.canvas.clientTop),e=function(e,t){for(var a=null,c=0;c<D.length;c++){var s=D[c];if(e>=s.info.x&&e<=s.info.x+s.info.w&&t>=s.info.y&&t<=s.info.y+s.info.h){n=s,a=!0,L(s),A(!1);break}A(!0)}return h({nodes:D,context:O,dragTarget:n}),a}(t,s)},onMouseMove:function(a){if(e){var c=parseInt(a.nativeEvent.offsetX-O.canvas.clientLeft),i=parseInt(a.nativeEvent.offsetY-O.canvas.clientTop),l=c-t,r=i-s;if(t=c,s=i,n){if(n.info.x+=l,n.info.y+=r,n.info.sub.left&&(n.info.sub.left.x+=l,n.info.sub.left.y+=r),n.info.sub.right&&n.info.sub.right.length)for(var o=0;o<n.info.sub.right.length;o++)n.info.sub.right[o].x+=l,n.info.sub.right[o].y+=r;O.clearRect(0,0,O.canvas.clientWidth,O.canvas.clientHeight),h({nodes:D,context:O,dragTarget:n})}}},onMouseUp:z,onMouseOut:function(e){z()},onDrag:function(e){if(e.clientX&&e.clientY){var n=(M-e.clientX)/40,t=(H-e.clientY)/40;r.current.scrollBy(n,t)}},onWheel:function(e){e.deltaY>0?(1===m&&S("hidden"),m>1&&x(m-.01)):x(m+.01)},onDragStart:function(e){var n=document.createElement("div");n.style.display="none",e.dataTransfer.setDragImage(n,0,0),I({clientX:e.clientX,clientY:e.clientY})}}),W&&Object(a.jsx)(b,{selectedNode:W})]})]})};var m=function(){return Object(a.jsxs)("div",{className:"dashboard",children:[Object(a.jsx)(r,{}),Object(a.jsx)(j,{})]})};var x=function(){return Object(a.jsx)(m,{})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),s(e),i(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.1e8c4858.chunk.js.map