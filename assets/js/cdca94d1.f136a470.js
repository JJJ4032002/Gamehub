"use strict";(self.webpackChunkgamehub_main=self.webpackChunkgamehub_main||[]).push([[714],{2342:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(9009),n=a(7294);function l(e){let{number:t}=e;const a={duration:1,ease:[1,.01,.49,1.05],delay:.4},l={even:{y:"100vh",transition:a},odd:{top:0,y:"-100vh",transition:a}};return n.createElement(i.E.div,{initial:{width:"100vw",position:"absolute",overflow:"hidden",top:"60px",left:0},id:"curtains"},[...Array(t)].map(((e,a)=>n.createElement(i.E.div,{initial:{background:"black",borderRight:"1px black solid",height:"calc(100vh - 60px)",width:100/t+"vw",float:"left",display:"inline-block"},animate:a%2==0?"odd":"even",className:"curtain",variants:l}))))}},451:(e,t,a)=>{a.d(t,{Z:()=>E});var i=a(4996),n=a(7294),l=a(9009),r=a(2342),c=a(8032),s=a(843),o=a(6550),m=a(1248),u=a(9774);function d(e){let{title:t,role:a}=e;return n.createElement("div",{className:"details"},n.createElement("h3",null,t),n.createElement("p",null,a))}const E=function(){const e=(0,m.v9)(u.M8).slice().sort(((e,t)=>e.likes<t.likes?1:e.likes>t.likes?-1:0)),t=(0,o.k6)(),a={scaleX:1.1,scaleY:1.1,filter:"brightness(1)",transition:{duration:.3,ease:"linear"}},E={initial:{scale:1,x:-80,filter:"brightness(0.78)"},animate:{x:0,scale:1.2,transition:{duration:1.8}}};return n.createElement(n.Fragment,null,n.createElement("div",{id:"gallery"},e.map((e=>n.createElement("div",null,n.createElement(l.E.img,{variants:E,initial:"initial",animate:"animate",whileHover:a,src:(0,i.Z)(e.src)}),n.createElement(d,{title:e.name,role:`Artist ${e.id}`}))))),n.createElement("span",{id:"overflower"},n.createElement(l.E.h1,{initial:{opacity:0,y:"100%"},animate:{opacity:1,y:0,transition:{duration:.45,delay:1.4,ease:"easeInOut"}}},"Artwork")),n.createElement("span",{id:"ArtGallery"},n.createElement(l.E.div,{initial:{opacity:0,y:"100%"},animate:{opacity:1,y:0,transition:{duration:.45,delay:1.4,ease:"easeInOut"}}},n.createElement(c.Z,{onClick:function(){t.push("/ArtGallery")},color:"primary","aria-label":"Gallery"},n.createElement(s.Z,null)))),n.createElement(r.Z,{number:4}))}},9140:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var i=a(7294),n=a(4892),l=a(451);const r=function(){return i.createElement(n.Z,null,i.createElement(l.Z,null))}}}]);