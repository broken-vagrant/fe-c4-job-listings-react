var j=Object.defineProperty,$=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))b.call(t,o)&&w(e,o,t[o]);if(y)for(var o of y(t))C.call(t,o)&&w(e,o,t[o]);return e},u=(e,t)=>$(e,N(t));import{j as x,R as F,r as d,a as L}from"./vendor.f75304d5.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};J();var A=[{id:1,company:"Photosnap",logo:"./images/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./images/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./images/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./images/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./images/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./images/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./images/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./images/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./images/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./images/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}];const n=x.exports.jsx,l=x.exports.jsxs,z=()=>n("header",{className:"hero"}),k="_root_a63t4_1",R="___next_a63t4_1",I="_hidden_a63t4_95",T="_container_a63t4_136";var D={root:k,__next:R,hidden:I,container:T,"info-tag":"_info-tag_a63t4_141"};const g=({children:e})=>n("button",{className:D["info-tag"],children:e}),M="_root_4dlwz_1",O="___next_4dlwz_1",E="_hidden_4dlwz_95",P="_container_4dlwz_136",U="_tag_4dlwz_141",q="_primary_4dlwz_151",H="_dark_4dlwz_156";var m={root:M,__next:O,hidden:E,container:P,tag:U,primary:q,dark:H};const S=({children:e,fill:t})=>n("span",{className:`${m.tag} ${t==="dark"?m.dark:m.primary}`,children:e}),K="_root_1g1vd_1",W="___next_1g1vd_1",B="_hidden_1g1vd_95",V="_container_1g1vd_136",G="_info_1g1vd_157",Q="_logo_1g1vd_165",X="_details_1g1vd_183",Y="_name_1g1vd_195",Z="_title_1g1vd_203",ee="_dot_1g1vd_230",te="_tags_1g1vd_234",oe="_featured_1g1vd_253";var i={root:K,__next:W,hidden:B,container:V,"list-card":"_list-card_1g1vd_141",info:G,logo:Q,details:X,"top-details":"_top-details_1g1vd_192",name:Y,"top-details-tags":"_top-details-tags_1g1vd_200",title:Z,"bottom-details":"_bottom-details_1g1vd_221",dot:ee,tags:te,"info-tag":"_info-tag_1g1vd_249",featured:oe};const ne=F.memo(({item:e})=>l("article",{className:i["list-card"],children:[l("div",{className:i.info,children:[n("div",{className:i.logo,children:n("img",{src:e.logo,alt:"photosnap company logo"})}),l("div",{className:i.details,children:[l("div",{className:i["top-details"],children:[n("span",{className:i.name,children:e.company}),l("span",{className:i["top-details-tags"],children:[e.new?n(S,{children:"New!"}):null,e.featured?n(S,{fill:"dark",children:"Featured"}):null]})]}),n("a",{href:"#",className:i.title,children:n("div",{children:e.position})}),l("div",{className:i["bottom-details"],children:[n("span",{className:i.dot,children:e.postedAt}),n("span",{className:i.dot,children:e.contract}),n("span",{children:e.location})]})]})]}),l("div",{className:i.tags,children:[e.role?n(g,{children:e.role}):null,e.level?n(g,{children:e.level}):null,e.languages&&e.languages.length!==0?e.languages.map((t,o)=>n(g,{children:t},o)):null,e.tools&&e.tools.length!==0?e.tools.map((t,o)=>n(g,{children:t},o)):null]})]})),re="_root_v4zs9_1",ae="___next_v4zs9_1",se="_hidden_v4zs9_95",le="_container_v4zs9_136",ie="_jobs_v4zs9_141";var de={root:re,__next:ae,hidden:se,container:le,jobs:ie};const ce=({jobs:e})=>n("div",{className:"container",children:n("section",{className:de.jobs,children:e.map(t=>n(ne,{item:t},t.id))})}),_e="_root_1gyqz_1",pe="___next_1gyqz_1",ue="_hidden_1gyqz_95",ge="_container_1gyqz_136";var fe={root:_e,__next:pe,hidden:ue,container:ge,"filter-item":"_filter-item_1gyqz_141"};const me=({value:e})=>{const t=d.exports.useContext(v);return l("div",{className:fe["filter-item"],children:[n("span",{children:e}),n("button",{onClick:()=>t({type:"filter-remove",payload:e}),children:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",children:n("path",{fill:"#FFF",fillRule:"evenodd",d:"M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"})})})]})},he="_root_tji0m_1",ve="___next_tji0m_1",ye="_hidden_tji0m_95",we="_container_tji0m_136",xe="_input__filter__wrapper_tji0m_141",Fe="_input__filter_tji0m_141",Se="_wrapper_tji0m_172",je="_left__adornment_tji0m_191",$e="_field__body_tji0m_201",Ne="_right__adornment_tji0m_205";var c={root:he,__next:ve,hidden:ye,container:we,input__filter__wrapper:xe,input__filter:Fe,wrapper:Se,left__adornment:je,field__body:$e,right__adornment:Ne};const be=({filters:e})=>{const t=d.exports.useContext(v),[o,s]=d.exports.useState(""),r=a=>{a.key==="Enter"&&(t({type:"filter-add",payload:o}),s(""))};return n("div",{className:c.input__filter__wrapper,children:l("div",{className:c.input__filter,children:[l("div",{className:c.wrapper,children:[n("div",{className:c.left__adornment,children:e.map(a=>n(me,{value:a},a))}),n("div",{className:c.field__body,children:n("input",{type:"text",name:"filter",value:o,onChange:a=>s(a.target.value),onKeyUp:r})})]}),n("div",{className:c.right__adornment,children:n("button",{className:"clear",type:"button",onClick:()=>t({type:"clear"}),children:"Clear"})})]})})},_={jobs:A,filters:["Frontend","CSS","JavaScript"]},h=(e,t)=>t.length===0?e:e.map(o=>{let s=0;return t.findIndex(r=>r.toLowerCase()===o.role.toLowerCase())!==-1&&s++,t.findIndex(r=>r.toLowerCase()===o.level.toLowerCase())!==-1&&s++,t.forEach(r=>{o.languages.findIndex(a=>a.toLowerCase()===r.toLowerCase())!==-1&&s++}),t.forEach(r=>{o.tools.findIndex(a=>a.toLowerCase()===r.toLowerCase())!==-1&&s++}),{job:o,score:s}}).filter(o=>o.score!==0).sort((o,s)=>s.score-o.score).map(o=>o.job),v=d.exports.createContext(null),Ce=(e,t)=>{switch(t.type){case"filter-add":if(e.filters.findIndex(o=>o.toLowerCase()===t.payload.toLowerCase())===-1){const o=[...e.filters,t.payload];return{jobs:h(e.jobs,o),filters:o}}return e;case"clear":return u(p({},_),{filters:[]});case"filter-remove":if(e.filters.findIndex(o=>o.toLowerCase()===t.payload.toLowerCase())!==-1){const o=e.filters.filter(s=>s!==t.payload);return o.length===0?u(p({},_),{filters:[]}):{jobs:h(e.jobs,o),filters:o}}return e;case"init":return u(p({},_),{jobs:h(_.jobs,e.filters)});default:return e}};function Le(){const[e,t]=d.exports.useReducer(Ce,_);return d.exports.useEffect(()=>{t({type:"init"})},[]),n(v.Provider,{value:t,children:l("div",{className:"App",children:[n(z,{}),l("main",{children:[n("div",{className:"container",children:n(be,{filters:e.filters})}),n(ce,{jobs:e.jobs})]})]})})}L.render(n(F.StrictMode,{children:n(Le,{})}),document.getElementById("root"));