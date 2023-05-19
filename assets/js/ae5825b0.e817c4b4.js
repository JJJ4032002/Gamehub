"use strict";(self.webpackChunkgamehub_main=self.webpackChunkgamehub_main||[]).push([[8387],{8456:(e,r,t)=>{t.d(r,{Z:()=>E});var a=t(7294),i=t(6010),n=t(4780),o=t(917),s=t(8216),l=t(1657),c=t(948),m=t(1588),d=t(4867);function h(e){return(0,d.Z)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var u=t(5893);let g,v,p,f,k=e=>e;const x=44,y=(0,o.F4)(g||(g=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,o.F4)(v||(v=k`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),b=(0,c.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,s.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>({display:"inline-block",..."determinate"===e.variant&&{transition:r.transitions.create("transform")},..."inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,o.iv)(p||(p=k`
      animation: ${0} 1.4s linear infinite;
    `),y))),Z=(0,c.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),w=(0,c.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,s.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>({stroke:"currentColor",..."determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},..."indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,o.iv)(f||(f=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S))),E=a.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:o="primary",disableShrink:c=!1,size:m=40,style:d,thickness:g=3.6,value:v=0,variant:p="indeterminate",...f}=t,k={...t,color:o,disableShrink:c,size:m,thickness:g,value:v,variant:p},y=(e=>{const{classes:r,variant:t,color:a,disableShrink:i}=e,o={root:["root",t,`color${(0,s.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,s.Z)(t)}`,i&&"circleDisableShrink"]};return(0,n.Z)(o,h,r)})(k),S={},E={},C={};if("determinate"===p){const e=2*Math.PI*((x-g)/2);S.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(v),S.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,E.transform="rotate(-90deg)"}return(0,u.jsx)(b,{className:(0,i.Z)(y.root,a),style:{width:m,height:m,...E,...d},ownerState:k,ref:r,role:"progressbar",...C,...f,children:(0,u.jsx)(Z,{className:y.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,u.jsx)(w,{className:y.circle,style:S,ownerState:k,cx:x,cy:x,r:(x-g)/2,fill:"none",strokeWidth:g})})})}))},8063:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});var a=t(7294),i=t(214),n=t(8456),o=t(5582),s=t(6886),l=t(1233),c=t(4892);const m=function(){const{data:e,isLoading:r,isSuccess:t,isError:m,error:d}=(0,i.C)();let h;return r?h=a.createElement(n.Z,null):t?(console.log(e),h=a.createElement(a.Fragment,null,a.createElement("h1",{className:"VoluxFont",style:{marginBottom:"1em"}},"Welcome to the store"),a.createElement(s.ZP,{spacing:6,container:!0,columns:12},e.map((e=>a.createElement(s.ZP,{sx:{height:"auto"},xs:4,item:!0,key:e.id},a.createElement(l.Z,{sx:{border:"0.5px solid gray",borderRadius:"10px",overflow:"hidden",backgroundColor:"#242526"},height:"100%"},a.createElement("div",{style:{height:"300px",backgroundColor:"white"}},a.createElement("img",{style:{width:"100%",height:"100%",objectFit:"contain"},src:e.image,alt:e.title,srcset:""})),a.createElement("p",null),a.createElement(l.Z,{sx:{padding:"0em 0.7em"}},a.createElement("p",null,e.title),a.createElement("p",null,"Price: ",e.price))))))))):m&&(h=a.createElement("div",null,d.toString())),a.createElement(c.Z,null,a.createElement(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minheight:"calc(100vh - 115px)",padding:"2em 0em"}},h))}}}]);