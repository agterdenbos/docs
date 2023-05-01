"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(3117),r=n(7294),l=n(6010),i=n(2466),o=n(6775),p=n(1980),s=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[p,s]=m({queryString:n,groupId:a}),[c,N]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=p??c;return k({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),N(e)}),[s,N,l]),tabValues:l}}var v=n(2389);const g="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:o,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==o&&(c(t),p(a))},k=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:d},i,{className:(0,l.Z)("tabs__item",f,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},4554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(3117),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={title:"\u7f51\u7edc\u9009\u9879",weight:25},p=void 0,s={unversionedId:"installation/network-options",id:"installation/network-options",title:"\u7f51\u7edc\u9009\u9879",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 K3s \u7f51\u7edc\u914d\u7f6e\u9009\u9879\uff0c\u5305\u62ec\u914d\u7f6e\u6216\u66ff\u6362 Flannel\uff0c\u4ee5\u53ca\u914d\u7f6e IPv6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/network-options.md",sourceDirName:"installation",slug:"/installation/network-options",permalink:"/zh/installation/network-options",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/network-options.md",tags:[],version:"current",lastUpdatedAt:1682961925,formattedLastUpdatedAt:"2023\u5e745\u67081\u65e5",frontMatter:{title:"\u7f51\u7edc\u9009\u9879",weight:25},sidebar:"mySidebar",previous:{title:"\u914d\u7f6e\u9009\u9879",permalink:"/zh/installation/configuration"},next:{title:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",permalink:"/zh/installation/private-registry"}},u={},c=[{value:"Flannel \u9009\u9879",id:"flannel-\u9009\u9879",level:2},{value:"\u4ece <code>wireguard</code> \u6216 <code>ipsec</code> \u8fc1\u79fb\u5230 <code>wireguard-native</code>",id:"\u4ece-wireguard-\u6216-ipsec-\u8fc1\u79fb\u5230-wireguard-native",level:3},{value:"\u81ea\u5b9a\u4e49 CNI",id:"\u81ea\u5b9a\u4e49-cni",level:2},{value:"Control Plane Egress \u9009\u62e9\u5668\u914d\u7f6e",id:"control-plane-egress-\u9009\u62e9\u5668\u914d\u7f6e",level:2},{value:"\u53cc\u6808 (IPv4 + IPv6) \u7f51\u7edc",id:"\u53cc\u6808-ipv4--ipv6-\u7f51\u7edc",level:2},{value:"\u5355\u6808 IPv6 \u7f51\u7edc",id:"\u5355\u6808-ipv6-\u7f51\u7edc",level:2},{value:"\u5206\u5e03\u5f0f\u6df7\u5408\u6216\u591a\u4e91\u96c6\u7fa4",id:"\u5206\u5e03\u5f0f\u6df7\u5408\u6216\u591a\u4e91\u96c6\u7fa4",level:2}],d={toc:c};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86 K3s \u7f51\u7edc\u914d\u7f6e\u9009\u9879\uff0c\u5305\u62ec\u914d\u7f6e\u6216\u66ff\u6362 Flannel\uff0c\u4ee5\u53ca\u914d\u7f6e IPv6\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6709\u5173 CoreDNS\u3001Traefik \u548c Service LB \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/networking/"},"\u7f51\u7edc"),"\u9875\u9762\u3002")),(0,r.kt)("h2",{id:"flannel-\u9009\u9879"},"Flannel \u9009\u9879"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel/blob/master/README.md"},"Flannel")," \u662f\u7b2c 3 \u5c42\u7f51\u7edc\u7ed3\u6784\u7684\u8f7b\u91cf\u7ea7\u63d0\u4f9b\u7a0b\u5e8f\uff0c\u5b83\u5b9e\u73b0\u4e86 Kubernetes \u5bb9\u5668\u7f51\u7edc\u63a5\u53e3 (CNI)\u3002\u5b83\u5c31\u662f\u901a\u5e38\u6240\u8bf4\u7684 CNI \u63d2\u4ef6\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flannel \u53ea\u80fd\u5728 Server \u8282\u70b9\u4e0a\u8bbe\u7f6e\u9009\u9879\uff0c\u5e76\u4e14\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 Server \u4e0a\u90fd\u5fc5\u987b\u76f8\u540c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Flannel \u7684\u9ed8\u8ba4\u540e\u7aef\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"vxlan"),"\u3002\u8981\u542f\u7528\u52a0\u5bc6\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"wireguard-native")," \u540e\u7aef\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728 Rasperry Pi \u4e0a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"vxlan")," \u548c\u6700\u65b0\u7248\u672c\u7684 Ubuntu \u9700\u8981",(0,r.kt)("a",{parentName:"li",href:"/zh/advanced/#raspberry-pi"},"\u989d\u5916\u7684\u51c6\u5907\u5de5\u4f5c"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u67d0\u4e9b Linux \u53d1\u884c\u7248\u4e0a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"wireguard-native")," \u4f5c\u4e3a Flannel \u540e\u7aef\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u6a21\u5757\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/"},"WireGuard \u5b89\u88c5\u6307\u5357"),"\u3002\nWireGuard \u7684\u5b89\u88c5\u6b65\u9aa4\u5c06\u786e\u4fdd\u4e3a\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u9002\u5f53\u7684\u5185\u6838\u6a21\u5757\u3002\n\u5728\u5c1d\u8bd5\u4f7f\u7528 WireGuard Flannel \u540e\u7aef\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd WireGuard \u5185\u6838\u6a21\u5757\u5728\u6bcf\u4e2a\u8282\u70b9\uff08\u5305\u62ec Server \u548c Agent\uff09\u4e0a\u90fd\u53ef\u7528\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CLI \u6807\u5fd7\u548c\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-ipv6-masq")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f2a\u88c5\u89c4\u5219\u5e94\u7528\u4e8e IPv6 \u6d41\u91cf\uff08\u9ed8\u8ba4\u4e3a IPv4\uff09\u3002\u4ec5\u9002\u7528\u4e8e\u53cc\u6808\u6216\u4ec5\u4f7f\u7528 IPv6 \u7684\u96c6\u7fa4\u3002\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"none")," \u4ee5\u5916\u7684\u4efb\u4f55 Flannel \u540e\u7aef\u517c\u5bb9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-external-ip")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u8282\u70b9\u5916\u90e8 IP \u5730\u5740\u4f5c\u4e3a Flannel \u6d41\u91cf\u7684\u76ee\u7684\u5730\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5185\u90e8 IP\u3002\u4ec5\u5f53\u8282\u70b9\u4e0a\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"--node-external-ip")," \u65f6\u9002\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=vxlan")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 VXLAN \u5c01\u88c5\u6570\u636e\u5305\u3002\u5728 Raspberry Pi \u4e0a\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u5185\u6838\u6a21\u5757\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=host-gw")),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u8282\u70b9 IP \u4f7f\u7528 IP \u8def\u7531\u5230 pod \u5b50\u7f51\u3002\u96c6\u7fa4\u4e2d\u6240\u6709\u8282\u70b9\u4e4b\u95f4\u90fd\u9700\u8981\u76f4\u63a5\u7684\u7b2c 2 \u5c42\u8fde\u63a5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard-native")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 WireGuard \u5c01\u88c5\u548c\u52a0\u5bc6\u7f51\u7edc\u6d41\u91cf\u3002\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u5185\u6838\u6a21\u5757\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=ipsec")),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"swanctl")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u4f7f\u7528 strongSwan IPSec \u6765\u52a0\u5bc6\u7f51\u7edc\u6d41\u91cf\u3002\uff08\u5df2\u5f03\u7528\uff1b\u5c06\u5728 v1.27.0 \u4e2d\u5220\u9664\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard")),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"wg")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u4f7f\u7528 WireGuard \u6765\u52a0\u5bc6\u7f51\u7edc\u6d41\u91cf\u3002\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u5185\u6838\u6a21\u5757\u548c\u914d\u7f6e\u3002\uff08\u5df2\u5f03\u7528\uff1b\u5c06\u5728 v1.26.0 \u4e2d\u5220\u9664\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=none")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u7981\u7528 Flannel\u3002")))),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece 2022-12 \u7248\u672c\uff08v1.26.0+k3s1, v1.25.5+k3s1, v1.24.9+k3s1, v1.23.15+k3s1\uff09\u5f00\u59cb\uff0cK3s \u4e0d\u518d\u5305\u542b strongSwan ",(0,r.kt)("inlineCode",{parentName:"p"},"swanctl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"charon")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ipsec")," \u540e\u7aef\uff0c\u8bf7\u5728\u5347\u7ea7\u6216\u5b89\u88c5\u8fd9\u4e9b\u7248\u672c\u4e4b\u524d\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u6b63\u786e\u7684\u5305\u3002")),(0,r.kt)("h3",{id:"\u4ece-wireguard-\u6216-ipsec-\u8fc1\u79fb\u5230-wireguard-native"},"\u4ece ",(0,r.kt)("inlineCode",{parentName:"h3"},"wireguard")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"h3"},"ipsec")," \u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"h3"},"wireguard-native")),(0,r.kt)("p",null,"\u65e7\u7248 ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard")," \u540e\u7aef\u9700\u8981\u5728\u4e3b\u673a\u4e0a\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"wg")," \u5de5\u5177\u3002\u8be5\u540e\u7aef\u5c06\u5728 K3s v1.26 \u4e2d\u5220\u9664\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u76f4\u63a5\u4e0e\u5185\u6838\u4ea4\u4e92\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard-native")," \u540e\u7aef\u3002"),(0,r.kt)("p",null,"\u65e7\u7248 ",(0,r.kt)("inlineCode",{parentName:"p"},"ipsec")," \u540e\u7aef\u9700\u8981\u5728\u4e3b\u673a\u4e0a\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"swanctl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"charon")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u8be5\u540e\u7aef\u5c06\u5728 K3s v1.27 \u4e2d\u5220\u9664\uff0c\u4ee5\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard-native")," \u540e\u7aef\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u7528\u6237\u5c3d\u5feb\u8fc1\u79fb\u5230\u65b0\u7684\u540e\u7aef\u3002\u8282\u70b9\u6709\u4e86\u65b0\u914d\u7f6e\u540e\uff0c\u8fc1\u79fb\u4e0d\u4f1a\u82b1\u8d39\u5f88\u957f\u7684\u505c\u673a\u65f6\u95f4\u3002\u4f60\u53ef\u4ee5\u9075\u5faa\u4ee5\u4e0b\u4e24\u4e2a\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u6240\u6709 Server \u8282\u70b9\u4e0a\u7684 K3s \u914d\u7f6e\u3002\u5982\u679c\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/config.yaml")," \u5e94\u8be5\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"li"},"flannel-backend: wireguard-native")," \u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"flannel-backend: wireguard")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"flannel-backend: ipsec"),"\u3002\u5982\u679c\u4f60\u5728 systemd \u5355\u5143\u4e2d\u901a\u8fc7 CLI \u6807\u5fd7\u914d\u7f6e K3s\uff0c\u5219\u5e94\u66f4\u6539\u5bf9\u5e94\u7684\u6807\u5fd7\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4ece Server \u8282\u70b9\u5f00\u59cb\u91cd\u65b0\u542f\u52a8\u6240\u6709\u8282\u70b9\u3002")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49-cni"},"\u81ea\u5b9a\u4e49 CNI"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--flannel-backend=none")," \u542f\u52a8 K3s \u5e76\u5b89\u88c5\u4f60\u9009\u62e9\u7684 CNI\u3002\u5927\u591a\u6570 CNI \u63d2\u4ef6\u90fd\u6709\u81ea\u5df1\u7684\u7f51\u7edc\u7b56\u7565\u5f15\u64ce\uff0c\u56e0\u6b64\u5efa\u8bae\u540c\u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," \u4ee5\u907f\u514d\u51b2\u7a81\u3002\u4f60\u9700\u8981\u4e3a Canal \u548c Calico \u542f\u7528 IP \u8f6c\u53d1\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Canal",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigera.io/calico/"},"Project Calico \u6587\u6863"),"\u7f51\u7ad9\u3002\u6309\u7167\u6b65\u9aa4\u5b89\u88c5 Canal\u3002\u4fee\u6539 Canal YAML \u4ee5\u4fbf\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"container_settings")," \u4e2d\u5141\u8bb8 IP \u8f6c\u53d1\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n  "allow_ip_forwarding": true\n}\n')),(0,r.kt)("p",null,"\u5e94\u7528 Canal YAML\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5728\u4e3b\u673a\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u4fdd\u8bbe\u7f6e\u5df2\u88ab\u5e94\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-canal.conflist\n")),(0,r.kt)("p",null,"\u4f60\u5e94\u8be5\u770b\u5230 IP \u8f6c\u53d1\u88ab\u8bbe\u7f6e\u4e3a true\u3002")),(0,r.kt)(i.Z,{value:"Calico",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u9075\u5faa ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigera.io/calico/latest/reference/configure-cni-plugins"},"Calico CNI \u63d2\u4ef6\u6307\u5357"),"\u3002\u4fee\u6539 Calico YAML \u4ee5\u4fbf\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"container_settings")," \u4e2d\u5141\u8bb8 IP \u8f6c\u53d1\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n  "allow_ip_forwarding": true\n}\n')),(0,r.kt)("p",null,"\u5e94\u7528 Calico YAML\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5728\u4e3b\u673a\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u4fdd\u8bbe\u7f6e\u5df2\u88ab\u5e94\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-calico.conflist\n")),(0,r.kt)("p",null,"\u4f60\u5e94\u8be5\u770b\u5230 IP \u8f6c\u53d1\u88ab\u8bbe\u7f6e\u4e3a true\u3002"))),(0,r.kt)("h2",{id:"control-plane-egress-\u9009\u62e9\u5668\u914d\u7f6e"},"Control Plane Egress \u9009\u62e9\u5668\u914d\u7f6e"),(0,r.kt)("p",null,"K3s Agent \u548c Server \u7ef4\u62a4\u8282\u70b9\u4e4b\u95f4\u7684 websocket \u96a7\u9053\uff0c\u8fd9\u4e9b\u96a7\u9053\u7528\u4e8e\u5c01\u88c5 control plane\uff08apiserver\uff09\u548c Agent\uff08kubelet \u548c containerd\uff09\u7ec4\u4ef6\u4e4b\u95f4\u7684\u53cc\u5411\u901a\u4fe1\u3002\n\u8fd9\u5141\u8bb8 Agent \u5728\u4e0d\u5c06 kubelet \u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u6d41\u7aef\u53e3\u66b4\u9732\u7ed9\u4f20\u5165\u8fde\u63a5\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\uff0c\u5e76\u5141\u8bb8 control plane \u5728\u7981\u7528 Agent \u7684\u60c5\u51b5\u4e0b\u8fde\u63a5\u5230\u96c6\u7fa4\u670d\u52a1\u3002\n\u6b64\u529f\u80fd\u7b49\u540c\u4e8e\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u4e0a\u5e38\u7528\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/"},"Konnectivity")," \u670d\u52a1\uff0c\u901a\u8fc7 apiserver \u7684 Egress \u9009\u62e9\u5668\u914d\u7f6e\u8fdb\u884c\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--egress-selector-mode")," \u6807\u5fd7\u5728 Server \u4e0a\u914d\u7f6e Egress \u9009\u62e9\u5668\u6a21\u5f0f\uff0c\u652f\u6301\u56db\u79cd\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disabled"),"\uff1aapiserver \u4e0d\u4f7f\u7528 Agent \u96a7\u9053\u4e0e kubelet \u6216\u96c6\u7fa4\u7aef\u70b9\u901a\u4fe1\u3002\n\u6b64\u6a21\u5f0f\u8981\u6c42 Server \u8fd0\u884c kubelet\u3001CNI \u548c kube-proxy\uff0c\u5e76\u4e0e Agent \u76f4\u63a5\u8fde\u63a5\uff0c\u5426\u5219 apiserver \u5c06\u65e0\u6cd5\u8bbf\u95ee Service \u7aef\u70b9\u6216\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl exec")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl logs"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"agent"),"\uff08\u9ed8\u8ba4\uff09\uff1aapiserver \u4f7f\u7528 Agent \u96a7\u9053\u4e0e kubelet \u901a\u4fe1\u3002\n\u8fd9\u79cd\u6a21\u5f0f\u8981\u6c42 Server \u4e5f\u8fd0\u884c kubelet\u3001CNI \u548c kube-proxy\uff0c\u5426\u5219 apiserver \u5c06\u65e0\u6cd5\u8bbf\u95ee Service \u7aef\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pod"),"\uff1aapiserver \u4f7f\u7528 Agent \u96a7\u9053\u4e0e kubelets \u548c Service \u7aef\u70b9\u901a\u4fe1\uff0c\u901a\u8fc7\u76d1\u89c6\u8282\u70b9\u5c06\u7aef\u70b9\u8fde\u63a5\u8def\u7531\u5230\u6b63\u786e\u7684 Agent\u3002\n",(0,r.kt)("strong",{parentName:"li"},"\u6ce8\u610f"),"\uff1a\u5982\u679c CNI \u4f7f\u7528\u81ea\u5df1\u7684 IPAM\uff0c\u800c\u4e14\u4e0d\u8003\u8651\u8282\u70b9\u7684 PodCIDR \u5206\u914d\uff0c\u8fd9\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002\u8fd9\u4e9b CNI \u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"agent"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster"),"\uff1aapiserver \u4f7f\u7528 Agent \u96a7\u9053\u4e0e kubelets \u548c Service \u7aef\u70b9\u901a\u4fe1\uff0c\u901a\u8fc7\u76d1\u89c6\u7aef\u70b9\u5c06\u7aef\u70b9\u8fde\u63a5\u8def\u7531\u5230\u6b63\u786e\u7684 Agent\u3002")),(0,r.kt)("h2",{id:"\u53cc\u6808-ipv4--ipv6-\u7f51\u7edc"},"\u53cc\u6808 (IPv4 + IPv6) \u7f51\u7edc"),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1"},"v1.21.0+k3s1")," \u5f00\u59cb\u63d0\u4f9b\u5b9e\u9a8c\u6027\u652f\u6301\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.23.7%2Bk3s1"},"v1.23.7+k3s1")," \u5f00\u59cb\u63d0\u4f9b\u7a33\u5b9a\u652f\u6301\u3002")),(0,r.kt)("admonition",{title:"\u5df2\u77e5\u95ee\u9898",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Kubernetes v1.24 \u548c v1.25 \u4e2d\u5b58\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/111695"},"\u4e00\u4e2a\u95ee\u9898"),"\u3002\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u53cc\u6808\u73af\u5883\u800c\u4e14\u4f60\u6ca1\u6709\u4e3a\u96c6\u7fa4\u6d41\u91cf\u4f7f\u7528\u4e3b\u8981\u7f51\u5361\uff0c\u5219\u4f1a\u5ffd\u7565\u8282\u70b9 IPv6 \u5730\u5740\u3002\u4e3a\u907f\u514d\u6b64\u9519\u8bef\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u6807\u5fd7\u6dfb\u52a0\u5230 K3s Server \u548c Agent \uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'--kubelet-arg="node-ip=0.0.0.0" # To proritize IPv4 traffic\n#OR\n--kubelet-arg="node-ip=::" # To proritize IPv6 traffic\n'))),(0,r.kt)("p",null,"\u9996\u6b21\u521b\u5efa\u96c6\u7fa4\u65f6\u5fc5\u987b\u914d\u7f6e\u53cc\u6808\u7ec4\u7f51\u3002\u4e00\u65e6\u4ec5\u4f7f\u7528 IPv4 \u542f\u52a8\uff0c\u5b83\u5c31\u65e0\u6cd5\u5728\u73b0\u6709\u96c6\u7fa4\u4e0a\u542f\u7528\u3002"),(0,r.kt)("p",null,"\u8981\u5728 K3s \u4e2d\u542f\u7528\u53cc\u6808\uff0c\u4f60\u5fc5\u987b\u5728\u6240\u6709 server \u8282\u70b9\u4e0a\u63d0\u4f9b\u6709\u6548\u7684\u53cc\u6808 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"service-cidr"),"\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6709\u6548\u914d\u7f6e\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--cluster-cidr=10.42.0.0/16,2001:cafe:42:0::/56 --service-cidr=10.43.0.0/16,2001:cafe:42:1::/112\n")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4efb\u4f55\u6709\u6548\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"service-cidr")," \u503c\uff0c\u4f46\u5efa\u8bae\u4f7f\u7528\u4e0a\u8ff0\u63a9\u7801\u3002\u5982\u679c\u66f4\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," \u63a9\u7801\uff0c\u5219\u8fd8\u5e94\u66f4\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size-ipv4")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size-ipv6")," \u503c\u4ee5\u5339\u914d\u6bcf\u4e2a\u8282\u70b9\u7684\u8ba1\u5212 pod \u548c\u8282\u70b9\u603b\u6570\u3002\u5bf9\u4e8e IPv4\uff0c\u652f\u6301\u7684\u6700\u5927 ",(0,r.kt)("inlineCode",{parentName:"p"},"service-cidr")," \u63a9\u7801\u662f /12\uff0c\u800c IPv6 \u7684\u662f /112\u3002\u5982\u679c\u4f60\u5728\u516c\u5171\u4e91\u4e2d\u90e8\u7f72\uff0c\u8bf7\u8bb0\u4f4f\u5141\u8bb8 ipv6 \u6d41\u91cf\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u81ea\u5b9a\u4e49 CNI \u63d2\u4ef6\uff0c\u5373 Flannel \u4ee5\u5916\u7684 CNI \u63d2\u4ef6\uff0c\u5219\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u3002\u8bf7\u53c2\u9605\u4f60\u4f7f\u7528\u7684\u63d2\u4ef6\u7684\u53cc\u6808\u6587\u6863\uff0c\u5e76\u9a8c\u8bc1\u662f\u5426\u53ef\u4ee5\u542f\u7528\u7f51\u7edc\u7b56\u7565\u3002"),(0,r.kt)("h2",{id:"\u5355\u6808-ipv6-\u7f51\u7edc"},"\u5355\u6808 IPv6 \u7f51\u7edc"),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.22.9%2Bk3s1"},"v1.22.9+k3s1")," \u8d77\u53ef\u7528")),(0,r.kt)("admonition",{title:"\u5df2\u77e5\u95ee\u9898",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684 IPv6 \u9ed8\u8ba4\u8def\u7531\u662f\u7531\u8def\u7531\u5668\u516c\u544a\uff08RA\uff09\u8bbe\u7f6e\u7684\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e sysctl ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ipv6.conf.all.accept_ra=2"),"\u3002\u5426\u5219\uff0c\u4e00\u65e6\u9ed8\u8ba4\u8def\u7531\u8fc7\u671f\uff0c\u8282\u70b9\u5c06\u653e\u5f03\u8be5\u8def\u7531\u3002\u8bf7\u6ce8\u610f\uff0c\u63a5\u53d7 RA \u53ef\u80fd\u4f1a\u589e\u52a0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/91507"},"\u4e2d\u95f4\u4eba\u653b\u51fb"),"\u7684\u98ce\u9669\u3002")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"--service-cidr")," \u6807\u5fd7\u5728 K3s \u4e0a\u4f7f\u7528\u5355\u6808 IPv6 \u96c6\u7fa4\uff08\u6ca1\u6709 IPv4 \u7684\u96c6\u7fa4\uff09\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6709\u6548\u914d\u7f6e\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--cluster-cidr=2001:cafe:42:0::/56 --service-cidr=2001:cafe:42:1::/112\n")),(0,r.kt)("h2",{id:"\u5206\u5e03\u5f0f\u6df7\u5408\u6216\u591a\u4e91\u96c6\u7fa4"},"\u5206\u5e03\u5f0f\u6df7\u5408\u6216\u591a\u4e91\u96c6\u7fa4"),(0,r.kt)("p",null,"K3s \u96c6\u7fa4\u4ecd\u7136\u53ef\u4ee5\u90e8\u7f72\u5728\u4f7f\u7528\u4e0d\u540c\u79c1\u6709\u7f51\u7edc\u4e14\u4e0d\u76f4\u63a5\u8fde\u63a5\u7684\u8282\u70b9\u4e0a\uff08\u4f8b\u5982\u4e0d\u540c\u516c\u5171\u4e91\u4e2d\u7684\u8282\u70b9\uff09\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0cK3s \u8bbe\u7f6e\u4e86\u4e00\u4e2a\u4f5c\u4e3a VPN \u7f51\u683c\u7684\u96a7\u9053\u7f51\u683c\u3002\u8fd9\u4e9b\u8282\u70b9\u5fc5\u987b\u5177\u6709\u5206\u914d\u7684 IP\uff0c\u901a\u8fc7\u8be5 IP \u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e9b\u8282\u70b9\uff08\u4f8b\u5982\u516c\u5171 IP\uff09\u3002Server \u6d41\u91cf\u5c06\u4f7f\u7528 WebSocket \u96a7\u9053\uff0c\u6570\u636e\u5e73\u9762\u6d41\u91cf\u5c06\u4f7f\u7528 Wireguard \u96a7\u9053\u3002"),(0,r.kt)("p",null,"\u8981\u542f\u7528\u8fd9\u79cd\u7c7b\u578b\u7684\u90e8\u7f72\uff0c\u4f60\u5fc5\u987b\u5728 Server \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip=<SERVER_EXTERNAL_IP> --flannel-backend=wireguard-native --flannel-external-ip\n")),(0,r.kt)("p",null,"\u5728 Agent \u4e0a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip=<AGENT_EXTERNAL_IP>\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," \u662f\u8bbf\u95ee Server \u8282\u70b9\u7684 IP\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," \u662f\u8bbf\u95ee Agent/Worker \u8282\u70b9\u7684 IP\u3002\u8bf7\u6ce8\u610f\uff0cAgent/Worker \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_URL")," \u914d\u7f6e\u53c2\u6570\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," \u624d\u80fd\u8fde\u63a5\u3002\u8bf7\u8bb0\u4f4f\u68c0\u67e5",(0,r.kt)("a",{parentName:"p",href:"/zh/installation/requirements#%E7%BD%91%E7%BB%9C"},"\u7f51\u7edc\u8981\u6c42"),"\uff0c\u5e76\u5141\u8bb8\u8bbf\u95ee\u5185\u90e8\u548c\u5916\u90e8\u5730\u5740\u4e0a\u5217\u51fa\u7684\u7aef\u53e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," \u4e4b\u95f4\u9700\u8981\u4fdd\u6301\u8fde\u63a5\uff0c\u5e76\u4e14\u901a\u5e38\u4f7f\u7528\u516c\u5171 IP\u3002"),(0,r.kt)("admonition",{title:"\u52a8\u6001 IP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e3a\u8282\u70b9\u5206\u914d\u52a8\u6001 IP \u5e76\u4e14 IP \u53d1\u751f\u53d8\u5316\uff08\u4f8b\u5982\u5728 AWS \u4e2d\uff09\uff0c\u5219\u5fc5\u987b\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-external-ip")," \u53c2\u6570\u6765\u53cd\u6620\u65b0 IP\u3002\u5982\u679c\u5c06 k3s \u4f5c\u4e3a Service \u8fd0\u884c\uff0c\u5219\u5fc5\u987b\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/k3s.service")," \u7136\u540e\u8fd0\u884c\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl restart k3s\n"))),(0,r.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5916\u90e8\u8fde\u63a5\u9700\u8981\u66f4\u591a\u7684\u8dc3\u70b9\uff0c\u90a3\u4e48\u8282\u70b9\u4e4b\u95f4\u7684\u5ef6\u8fdf\u4f1a\u53d8\u9ad8\u3002\u5ef6\u8fdf\u592a\u9ad8\u4f1a\u964d\u4f4e\u7f51\u7edc\u6027\u80fd\uff0c\u8fd8\u53ef\u80fd\u5f71\u54cd\u96c6\u7fa4\u7684\u8fd0\u884c\u3002")),(0,r.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5d4c\u5165\u5f0f etcd \u4e0d\u4f1a\u4f7f\u7528\u5916\u90e8 IP \u8fdb\u884c\u901a\u4fe1\u3002\u5982\u679c\u4f7f\u7528\u5d4c\u5165\u5f0f etcd\uff0c\u6240\u6709 Server \u8282\u70b9\u5fc5\u987b\u53ef\u4ee5\u901a\u8fc7\u5176\u79c1\u6709 IP \u76f8\u4e92\u8bbf\u95ee\u3002")))}k.isMDXComponent=!0}}]);