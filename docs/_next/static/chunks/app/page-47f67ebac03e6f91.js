(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3810:(e,t,r)=>{Promise.resolve().then(r.bind(r,6531))},6531:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(5155),s=r(2115),n=r(5679);let c=[{code:"+1",name:"USA/Canada"},{code:"+44",name:"UK"},{code:"+91",name:"India"},{code:"+92",name:"Pakistan"},{code:"+971",name:"UAE"},{code:"+966",name:"Saudi Arabia"},{code:"+49",name:"Germany"},{code:"+86",name:"China"}],l=e=>{let{addContact:t,editingContact:r}=e,[l,i]=(0,s.useState)(""),[o,u]=(0,s.useState)(""),[d,m]=(0,s.useState)("+91");return(0,s.useEffect)(()=>{r&&(i(r.name),u(r.phoneNumber),m(r.countryCode))},[r]),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:[(0,a.jsx)(n.G3M,{}),(0,a.jsx)("input",{type:"text",className:"grow",placeholder:"Name",value:l,onChange:e=>i(e.target.value)})]}),(0,a.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:[(0,a.jsx)(n.Ye3,{}),(0,a.jsxs)("select",{className:"grow bg-transparent outline-none text-base-content",value:d,onChange:e=>m(e.target.value),children:[(0,a.jsx)("option",{value:"",className:"bg-base-200 text-base-content",children:"Select Country Code"}),c.map(e=>(0,a.jsxs)("option",{value:e.code,className:"bg-base-200 text-base-content",children:[e.name," (",e.code,")"]},e.code))]})]}),(0,a.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:[(0,a.jsx)(n.vki,{}),(0,a.jsx)("input",{type:"text",className:"grow",placeholder:"Number",value:o,onChange:e=>u(e.target.value.replace(d,""))})]}),(0,a.jsxs)("div",{className:"card-actions justify-center space-x-4",children:[(0,a.jsxs)("button",{className:"btn btn-primary text-gray-100 hover:text-gray-400",onClick:()=>t(l,d,o),href:"https://wa.me/"+d+o,children:["Save ",(0,a.jsx)(n._Tp,{className:"h-6 w-6 cursor-pointer"})]}),(0,a.jsxs)("a",{className:"btn btn-primary text-gray-100 hover:text-gray-400",onClick:()=>{if(!l){alert("Please enter a name.");return}if(!o){alert("Please enter a phone number.");return}if(!d){alert("Please select a country code.");return}t(l,d,o),i(""),u(""),m("")},href:"https://wa.me/"+d+o,children:["Message ",(0,a.jsx)(n.ifq,{className:"h-6 w-6 cursor-pointer"})]})]})]})})},i=e=>{let{contacts:t,deleteContact:r,setEditingContact:s}=e;return(0,a.jsxs)("div",{className:"collapse collapse-arrow bg-base-200",children:[(0,a.jsx)("input",{type:"checkbox"}),(0,a.jsx)("div",{className:"collapse-title text-xl font-medium",children:"History"}),(0,a.jsx)("div",{className:"collapse-content",children:(0,a.jsx)("ul",{className:"divide-y divide-gray-200",children:t.map((e,t)=>(0,a.jsxs)("li",{className:"py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 w-full",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(n.G3M,{className:"h-8 w-8 text-gray-400"})}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-white truncate",children:e.name}),(0,a.jsxs)("p",{className:"text-sm text-gray-300 truncate",children:[e.countryCode," ",e.phoneNumber]})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end",children:[(0,a.jsx)("div",{className:"text-xs text-gray-400",children:new Date(e.createdAt).toLocaleDateString()}),(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)("a",{href:"https://wa.me/"+e.countryCode+e.phoneNumber,children:(0,a.jsx)(n.AEd,{className:"h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600"})}),(0,a.jsx)(n.h06,{className:"h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600",onClick:()=>{s(e),r(e)}}),(0,a.jsx)(n.leD,{className:"h-6 w-6 text-gray-400 cursor-pointer hover:text-red-600",onClick:()=>r(e)})]})]})]},t))})})]})};function o(){let[e,t]=(0,s.useState)([]),[r,n]=(0,s.useState)({name:"",countryCode:"+91",phoneNumber:""});return(0,s.useEffect)(()=>{localStorage.setItem("whatsany1",JSON.stringify(e))},[e]),(0,s.useEffect)(()=>{var e;let r;t((e="whatsany1",null===(r=localStorage.getItem(e))?[]:JSON.parse(r)))},[]),(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-base-300",children:(0,a.jsx)("div",{className:"card bg-base-100 w-1/1 shadow-xl",children:(0,a.jsxs)("div",{className:"w-screen card-body space-y-4",children:[(0,a.jsxs)("h2",{className:"card-title",children:[(0,a.jsx)("img",{src:"/favicon-32x32.png"}),"WhatsAny1"]}),(0,a.jsx)(l,{addContact:(r,a,s)=>{t([{name:r,countryCode:a,phoneNumber:s,createdAt:new Date().toISOString()},...e])},editingContact:r}),(0,a.jsx)(i,{contacts:e,deleteContact:r=>{t(e.filter(e=>e!==r))},setEditingContact:n})]})})})}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var a=r(2115),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),c=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var a,s;a=t,s=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>a.createElement(d,l({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,o({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:s,size:n,title:i}=e,u=function(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,c),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>t(e)):t(s)}}},e=>{var t=t=>e(e.s=t);e.O(0,[520,441,455,358],()=>t(3810)),_N_E=e.O()}]);