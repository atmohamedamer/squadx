"use strict";(self.webpackChunksquadx=self.webpackChunksquadx||[]).push([[9498],{5114:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=a(4848),i=a(8453),n=a(1470),r=a(9365),o=a(19);const c={id:"sofia-rodriguez",title:"Sofia Rodriguez",sidebar_label:"Sofia Rodriguez",slug:"sofia"},l="Sofia Rodriguez",d={id:"squad/sofia-rodriguez",title:"Sofia Rodriguez",description:"Status: Static Badge",source:"@site/docs/squad/sofia.md",sourceDirName:"squad",slug:"/squad/sofia",permalink:"/squadx/docs/squad/sofia",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"sofia-rodriguez",title:"Sofia Rodriguez",sidebar_label:"Sofia Rodriguez",slug:"sofia"},sidebar:"squadSidebar",previous:{title:"Mei Wong",permalink:"/squadx/docs/squad/mei"}},u={},h=[{value:"Bio",id:"bio",level:2},{value:"About",id:"about",level:2},{value:"Social Metadata",id:"social-metadata",level:2}];function g(e){const s={a:"a",br:"br",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"sofia-rodriguez",children:"Sofia Rodriguez"}),"\n",(0,t.jsxs)(n.A,{children:[(0,t.jsxs)(r.A,{value:"overview",label:"Overview",default:!0,children:[(0,t.jsx)("img",{src:"/squadx/img/sofia-rodriguez.jpeg",class:"avatar__photo avatar__photo--xl margin-bottom--md"}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Status"}),": ",(0,t.jsx)(s.img,{src:"https://img.shields.io/badge/Not%20Ready-no?color=ff0000",alt:"Static Badge"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Date of Birth"}),": 9 Jul 1992",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Origin"}),": Spain",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Role"}),": UX/UI Designer",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Skills"}),": User Research, Interface Design, Prototyping",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Last Company"}),": DesignHub"]}),(0,t.jsx)(s.h2,{id:"bio",children:"Bio"}),(0,t.jsx)(s.p,{children:"Creative UX/UI designer focused on intuitive and engaging user experiences. Merging beauty with functionality."}),(0,t.jsx)(s.h2,{id:"about",children:"About"}),(0,t.jsx)(s.p,{children:"Hi, I'm Sofia! I'm a creative UX/UI designer with a passion for creating intuitive and engaging user experiences. I have a strong background in graphic design and user-centered design principles. My ability to translate user needs into beautiful and functional designs makes me an invaluable part of any project. I'm dedicated to improving the usability and aesthetics of digital products."}),(0,t.jsx)(s.h2,{id:"social-metadata",children:"Social Metadata"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Gmail"}),": ",(0,t.jsx)(s.a,{href:"mailto:sofiarodriguez92@gmail.com",children:"sofiarodriguez92@gmail.com"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"LinkedIn:"})," ",(0,t.jsx)(s.a,{href:"https://linkedin.com/in/sofiarodriguez",children:"linkedin.com/in/sofiarodriguez"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Dribbble:"})," ",(0,t.jsx)(s.a,{href:"https://dribbble.com/sofiarodriguez",children:"dribbble.com/sofiarodriguez"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Twitter:"})," ",(0,t.jsx)(s.a,{href:"https://twitter.com/sofia_designs",children:"twitter.com/sofia_designs"})]}),"\n"]})]}),(0,t.jsx)(r.A,{value:"chat",label:"Chat",default:!0,children:(0,t.jsx)(o.A,{id:"sofia"})})]})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},19:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(6540),i=a(4335);const n={aisha:[{role:"system",content:"Act as Aisha Mohammed, a Junior Web3 Developer"}],aria:[{role:"system",content:"Act as Aria Patel, a Data Scientist"}],elena:[{role:"system",content:"Act as Elena Petrova, a Senior Web3 Developer"}],galal:[{role:"system",content:"Act as Galal Essam, an AI Researcher"}],juan:[{role:"system",content:"Act as Juan Martinez, a Web3 Developer"}],lucas:[{role:"system",content:"Act as Lucas M\xfcller, a Software Engineer"}],mei:[{role:"system",content:"Act as Mei Wong, a Product Manager"}],sofia:[{role:"system",content:"Act as Sofia Rodriguez, a Product Manager"}]},r={chatContainer:"chatContainer_qOcJ",chatMessages:"chatMessages_zeHc",chatMessage:"chatMessage_gxdP",user:"user_nr1P",assistant:"assistant_wRnZ",chatInputContainer:"chatInputContainer_kMP3",chatInput:"chatInput_HgoT",chatSendButton:"chatSendButton_cw1I"};var o=a(4848);const c=e=>{let{id:s}=e;const[a,c]=(0,t.useState)(""),[l,d]=(0,t.useState)([]),u=n[s]||[],h=async()=>{if(""!==a.trim()){d([...l,{role:"user",content:a}]);try{const e=await i.A.post("https://api.openai.com/v1/chat/completions",{model:"gpt-3.5-turbo",messages:[...u,...l,{role:"user",content:a}]},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`}});d([...l,{role:"user",content:a},{role:"assistant",content:e.data.choices[0].message.content}])}catch(e){const s=e.response?.data?.error?.message||e.message;console.error("An error occurred:",e),d([...l,{role:"user",content:a},{role:"assistant",content:s}])}c("")}};return(0,o.jsxs)("div",{className:r.chatContainer,children:[(0,o.jsx)("div",{className:r.chatMessages,children:l.map(((e,s)=>(0,o.jsx)("div",{className:`${r.chatMessage} ${r[e.role]}`,children:e.content},s)))}),(0,o.jsxs)("div",{className:r.chatInputContainer,children:[(0,o.jsx)("input",{type:"text",value:a,onChange:e=>{c(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&h()},className:r.chatInput,placeholder:"Ask me anything..."}),(0,o.jsx)("button",{onClick:h,className:r.chatSendButton,children:"Send"})]})]})}}}]);