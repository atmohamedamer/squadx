"use strict";(self.webpackChunksquadx=self.webpackChunksquadx||[]).push([[9234],{6701:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var s=t(4848),i=t(8453),n=t(1470),r=t(9365),o=t(8743),l=t(4460);const c={id:"aria-patel",title:"Aria Patel",sidebar_label:"Aria Patel",slug:"aria"},d="Aria Patel",u={id:"squad/aria-patel",title:"Aria Patel",description:"Status: Static Badge",source:"@site/docs/squad/aria.mdx",sourceDirName:"squad",slug:"/squad/aria",permalink:"/squadx/docs/squad/aria",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"aria-patel",title:"Aria Patel",sidebar_label:"Aria Patel",slug:"aria"},sidebar:"squadSidebar",previous:{title:"Aisha Mohammed",permalink:"/squadx/docs/squad/aisha"},next:{title:"Elena Petrova",permalink:"/squadx/docs/squad/elena"}},h={},p=[{value:"Bio",id:"bio",level:2},{value:"About",id:"about",level:2},{value:"Socials",id:"socials",level:2}];function m(a){const e={br:"br",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"aria-patel",children:"Aria Patel"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsxs)(r.A,{value:"overview",label:"Overview",default:!0,children:[(0,s.jsx)("img",{src:"/squadx/img/aria-patel.jpeg",class:"avatar__photo avatar__photo--xl margin-bottom--md"}),(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Status"}),": ",(0,s.jsx)(e.img,{src:"https://img.shields.io/badge/Active-yes",alt:"Static Badge"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.strong,{children:"Date of Birth"}),": 15 Jan 1990",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.strong,{children:"Origin"}),": India",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.strong,{children:"Role"}),": Data Scientist",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.strong,{children:"Skills"}),": Machine Learning, Statistical Analysis, Data Visualization",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.strong,{children:"Last Company"}),": DataCorp"]}),(0,s.jsx)(e.h2,{id:"bio",children:"Bio"}),(0,s.jsx)(e.p,{children:"Data scientist with a passion for big data and machine learning. Turning complex data into actionable insights."}),(0,s.jsx)(e.h2,{id:"about",children:"About"}),(0,s.jsx)(e.p,{children:"Hi, I'm Aria! I'm a seasoned data scientist with a strong background in computer science and applied mathematics. I have worked on various projects involving predictive analytics and big data. My expertise lies in developing machine learning models and conducting complex statistical analyses to uncover insights from large datasets. I am passionate about leveraging data to drive decision-making and innovation."}),(0,s.jsx)(e.h2,{id:"socials",children:"Socials"}),(0,s.jsx)(l.b6,{url:"https://www.linkedin.com/in/aria-patel-001852315"}),(0,s.jsx)(l.b6,{url:"https://github.com/ariapatel151"}),(0,s.jsx)(l.b6,{url:"https://twitter.com/ariapatel151"}),(0,s.jsx)(l.b6,{url:"https://www.reddit.com/user/Negative-Reply-215"}),(0,s.jsx)(l.b6,{url:"https://medium.com/@ariapatel151"}),(0,s.jsx)(l.b6,{url:"https://www.instagram.com/ariapatel151/"})]}),(0,s.jsx)(r.A,{value:"chat",label:"Chat",default:!0,children:(0,s.jsx)(o.A,{id:"aria"})})]})]})}function g(a={}){const{wrapper:e}={...(0,i.R)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(m,{...a})}):m(a)}},8743:(a,e,t)=>{t.d(e,{A:()=>o});var s=t(6540),i=t(4335);const n={aisha:[{role:"system",content:"Act as Aisha Mohammed, a Junior Web3 Developer"}],aria:[{role:"system",content:"Act as Aria Patel, a Data Scientist"}],elena:[{role:"system",content:"Act as Elena Petrova, a Senior Web3 Developer"}],galal:[{role:"system",content:"Act as Galal Essam, an AI Researcher"}],juan:[{role:"system",content:"Act as Juan Martinez, a Web3 Developer"}],lucas:[{role:"system",content:"Act as Lucas M\xfcller, a Software Engineer"}],mei:[{role:"system",content:"Act as Mei Wong, a Product Manager"}],sofia:[{role:"system",content:"Act as Sofia Rodriguez, a Product Manager"}]};var r=t(4848);const o=a=>{let{id:e}=a;const[t,o]=(0,s.useState)(""),[l,c]=(0,s.useState)([]),d=n[e]||[];return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:l.map(((a,e)=>(0,r.jsx)("div",{className:a.role,children:a.content},e)))}),(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",value:t,onChange:a=>{o(a.target.value)}}),(0,r.jsx)("button",{onClick:async()=>{try{const a=await i.A.post("https://api.openai.com/v1/chat/completions",{messages:[...d,{role:"user",content:t}]},{headers:{"Content-Type":"application/json",Authorization:"Bearer YOUR_OPENAI_API_KEY"}});c([...l,{role:"assistant",content:a.data.choices[0].message.content}])}catch(a){console.error("An error occurred:",a)}o("")},children:"Send"})]})]})}}}]);