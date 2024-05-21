(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4538:function(e,a,s){Promise.resolve().then(s.bind(s,6587))},6587:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return j}});var n=s(7437);s(6648);var l=s(1076),t=s.n(l),i=s(920),r=s(2265);s(6920);var c=()=>(0,n.jsx)("div",{children:(0,n.jsxs)("nav",{className:t().navbarWrapper,children:[(0,n.jsx)("img",{src:"https://picsum.photos/48",alt:"",className:t().logo}),(0,n.jsxs)("ul",{className:t().navbar,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})})]}),(0,n.jsx)("div",{className:t().space}),(0,n.jsxs)("ul",{className:t().socialLinks,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})})]})]})}),d=e=>(0,n.jsx)("div",{className:t().addFloatingButton,onClick:e.toggleAddModal,children:"+"}),o=e=>(0,n.jsxs)("div",{className:t().entryList,children:[(0,n.jsx)("div",{className:t().tableHead,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Date"}),(0,n.jsx)("li",{children:"Description"}),(0,n.jsx)("li",{children:"Category"}),(0,n.jsx)("li",{children:"Value"})]})}),(0,n.jsx)("div",{className:t().entry,children:e.entryList.map(e=>(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:e.date}),(0,n.jsx)("li",{children:e.description}),(0,n.jsx)("li",{children:e.category}),(0,n.jsx)("li",{children:e.value})]},e.id.toString()))})]}),h=e=>(0,n.jsxs)("div",{className:t().summary,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Income"}),(0,n.jsx)("p",{children:e.summary.income})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Expenses"}),(0,n.jsx)("p",{children:e.summary.expense})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Total"}),(0,n.jsx)("p",{children:e.summary.total})]}),(0,n.jsx)("button",{onClick:e.updateSummary,children:"Update value"})]});let p=e=>new Date(e+"T00:00"),u=()=>[{id:1,date:23,description:"Item 1",category:"Groceries",value:-200},{id:2,date:21,description:"Item 2",category:"Monthly Basic",value:-300},{id:3,date:10,description:"Item 3",category:"Monthly Basic",value:-100},{id:4,date:6,description:"Salary",category:"Salary",value:1e3},{id:5,date:6,description:"Salary",category:"Salary",value:1e3}];var x=e=>(0,n.jsxs)("div",{className:t().openModal,children:[(0,n.jsx)("div",{className:t().overlay,onClick:e.toggleAddModal}),(0,n.jsx)("div",{className:t().formWrapper,children:(0,n.jsxs)("form",{onSubmit:e.onSubmit,className:t().form,children:[(0,n.jsxs)("label",{children:["Date:",(0,n.jsx)("input",{type:"date",name:"date",onChange:e.handleChange})]}),(0,n.jsxs)("label",{children:["Description:",(0,n.jsx)("input",{type:"text",id:"description",name:"description",onChange:e.handleChange})]}),(0,n.jsxs)("label",{children:["Category:",(0,n.jsxs)("select",{children:[(0,n.jsx)("option",{value:"grapefruit",children:"Grapefruit"}),(0,n.jsx)("option",{value:"lime",children:"Lime"}),(0,n.jsx)("option",{value:"coconut",children:"Coconut"}),(0,n.jsx)("option",{value:"mango",children:"Mango"})]})]}),(0,n.jsxs)("label",{children:["Value:",(0,n.jsx)("input",{type:"text",id:"value",name:"value",onChange:e.handleChange})]}),(0,n.jsx)("button",{type:"submit",children:"submit"})]})})]});function j(){let[e,a]=(0,r.useState)(Date()),[s,l]=(0,r.useState)(),[j,m]=(0,r.useState)(""),[g,_]=(0,r.useState)(""),[v,y]=(0,r.useState)(!1),[f,b]=(0,r.useState)(u),[N,C]=(0,r.useState)({income:0,expense:0,total:0});(0,r.useEffect)(()=>{console.log("updated"),k()},[f]);let M=()=>{console.log(v),y(!v)};async function S(a){a.preventDefault();let n="".concat(e.getDate()),l={id:(0,i.Z)(),date:n,description:j,category:"Monthly Basic",value:parseFloat(s)};b(e=>[...e,l]),k()}let k=()=>{let e=0,a=0;f.forEach(s=>{s.value<0?a+=s.value:e+=s.value}),C({income:e,expense:a,total:e+a})};return(0,n.jsxs)("main",{className:t().main,children:[(0,n.jsx)(c,{}),(0,n.jsxs)("div",{className:t().mainContent,children:[(0,n.jsx)("div",{className:t().selectedMonth,children:(0,n.jsx)("h1",{children:" < Month >"})}),(0,n.jsx)(h,{summary:N,updateSummary:k}),(0,n.jsx)(o,{entryList:f})]}),(0,n.jsx)(d,{toggleAddModal:M}),v?(0,n.jsx)(x,{onSubmit:S,handleChange:e=>{switch(e.target.name){case"date":a(p(e.target.value));break;case"category":break;case"value":l(e.target.value);break;case"description":m(e.target.value)}},toggleAddModal:M}):(0,n.jsx)(n.Fragment,{})]})}},1076:function(e){e.exports={main:"page_main__akH3E",mainContent:"page_mainContent__NQxPz",selectedMonth:"page_selectedMonth__r1aMN",summary:"page_summary__Q9kDv",openModal:"page_openModal__fpWkc",overlay:"page_overlay__pj6ni",formWrapper:"page_formWrapper__ERMLj",form:"page_form__WYtrD",navbarWrapper:"page_navbarWrapper__bDLLS",logo:"page_logo__1r_52",space:"page_space__mDMJa",navbar:"page_navbar__l_Nh8",socialLinks:"page_socialLinks__NObPl",entryList:"page_entryList__LL15H",tableHead:"page_tableHead__xdX44",entry:"page_entry__e9u8s",addFloatingButton:"page_addFloatingButton__fnqwr"}}},function(e){e.O(0,[263,410,971,23,744],function(){return e(e.s=4538)}),_N_E=e.O()}]);