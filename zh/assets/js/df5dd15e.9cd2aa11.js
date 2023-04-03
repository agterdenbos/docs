"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},o=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=c(r),k=n,d=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return r?a.createElement(d,s(s({ref:t},o),{},{components:r})):a.createElement(d,s({ref:t},o))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(3117),n=r(7294),l=r(6010),s=r(2466),p=r(6775),i=r(1980),c=r(7392),o=r(12);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function k(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const a=(0,p.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function N(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=m(e),[s,p]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,c]=d({queryString:r,groupId:a}),[u,N]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,o.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),y=(()=>{const e=i??u;return k({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&p(y)}),[y]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),c(e),N(e)}),[c,N,l]),tabValues:l}}var y=r(2389);const b="tabList__CuJ",f="tabItem_LNqP";function h(e){let{className:t,block:r,selectedValue:p,selectValue:i,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),m=e=>{const t=e.currentTarget,r=o.indexOf(t),a=c[r].value;a!==p&&(u(t),i(a))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>o.push(e),onKeyDown:k,onClick:m},s,{className:(0,l.Z)("tabs__item",f,s?.className,{"tabs__item--active":p===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=N(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function S(e){const t=(0,y.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},6709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=r(3117),n=(r(7294),r(3905)),l=r(4866),s=r(5162);const p={title:"secrets-encrypt"},i="k3s secrets-encrypt",c={unversionedId:"cli/secrets-encrypt",id:"cli/secrets-encrypt",title:"secrets-encrypt",description:"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Secret \u52a0\u5bc6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/secrets-encrypt.md",sourceDirName:"cli",slug:"/cli/secrets-encrypt",permalink:"/zh/cli/secrets-encrypt",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/secrets-encrypt.md",tags:[],version:"current",lastUpdatedAt:1680549940,formattedLastUpdatedAt:"2023\u5e744\u67083\u65e5",frontMatter:{title:"secrets-encrypt"},sidebar:"mySidebar",previous:{title:"etcd-snapshot",permalink:"/zh/cli/etcd-snapshot"},next:{title:"token",permalink:"/zh/cli/token"}},o={},u=[{value:"Secret \u52a0\u5bc6\u5de5\u5177",id:"secret-\u52a0\u5bc6\u5de5\u5177",level:2},{value:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3},{value:"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6",id:"\u7981\u7528\u542f\u7528-secret-\u52a0\u5bc6",level:3},{value:"Secret \u52a0\u5bc6\u72b6\u6001",id:"secret-\u52a0\u5bc6\u72b6\u6001",level:3}],m={toc:u};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"k3s-secrets-encrypt"},"k3s secrets-encrypt"),(0,n.kt)("p",null,"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh/security/secrets-encryption"},"Secret \u52a0\u5bc6"),"\u3002"),(0,n.kt)("h2",{id:"secret-\u52a0\u5bc6\u5de5\u5177"},"Secret \u52a0\u5bc6\u5de5\u5177"),(0,n.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u4ece ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.8%2Bk3s1"},"v1.21.8+k3s1")," \u8d77\u53ef\u7528")),(0,n.kt)("p",null,"K3s \u5305\u542b\u4e00\u4e2a CLI \u5de5\u5177 ",(0,n.kt)("inlineCode",{parentName:"p"},"secrets-encrypt"),"\uff0c\u53ef\u4ee5\u81ea\u52a8\u63a7\u5236\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6"),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u65b0\u7684\u52a0\u5bc6\u5bc6\u94a5"),(0,n.kt)("li",{parentName:"ul"},"\u8f6e\u6362\u548c\u5220\u9664\u52a0\u5bc6\u5bc6\u94a5"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u52a0\u5bc6 Secret")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u9075\u5faa\u6b63\u786e\u7684\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362\u7a0b\u5e8f\uff0c\u4f60\u7684\u96c6\u7fa4\u53ef\u80fd\u4f1a\u6c38\u4e45\u635f\u574f\u3002\u56e0\u6b64\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")),(0,n.kt)("h3",{id:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"\u5355\u670d\u52a1\u5668",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"\u8981\u5728\u5355\u670d\u52a1\u5668\u96c6\u7fa4\u4e0a\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6807\u5fd7 ",(0,n.kt)("inlineCode",{parentName:"li"},"--secrets-encryption")," \u542f\u52a8 K3s Server")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u76ee\u524d",(0,n.kt)("em",{parentName:"p"},"\u4e0d"),"\u652f\u6301\u5728\u6ca1\u6709\u52a0\u5bc6\u7684\u60c5\u51b5\u4e0b\u542f\u52a8 K3s \u5e76\u5728\u540e\u7eed\u542f\u7528\u5b83\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u51c6\u5907"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6e\u6362"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u65b0\u52a0\u5bc6"),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"K3s \u6bcf\u79d2\u5c06\u91cd\u65b0\u52a0\u5bc6\u7ea6 5 \u4e2a Secret\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5177\u6709\u5927\u91cf Secret \u7684\u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u91cd\u65b0\u52a0\u5bc6\u3002")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))))),(0,n.kt)(s.Z,{value:"\u9ad8\u53ef\u7528",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u548c\u5916\u90e8\u6570\u636e\u5e93\u96c6\u7fa4\u7684\u6b65\u9aa4\u76f8\u540c\u3002"),(0,n.kt)("p",null,"\u8981\u5728 HA \u8bbe\u7f6e\u4e0a\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\uff1a"),(0,n.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d",(0,n.kt)("em",{parentName:"li"},"\u4e0d"),"\u652f\u6301\u5728\u6ca1\u6709\u52a0\u5bc6\u7684\u60c5\u51b5\u4e0b\u542f\u52a8 K3s \u5e76\u5728\u540e\u7eed\u542f\u7528\u5b83\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5efa\u8bae\u4f60\u9009\u62e9\u4e00\u4e2a Server \u8282\u70b9\u6765\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"secrets-encrypt")," \u547d\u4ee4\u3002"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," \u6807\u5fd7\u542f\u52a8\u6240\u6709\u4e09\u4e2a K3s Server\u3002\u4e3a\u7b80\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u5c06 server \u5206\u522b\u79f0\u4e3a S1\u3001S2\u3001S3\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u51c6\u5907 S1"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6e\u6362 S1"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u91cd\u65b0\u52a0\u5bc6"),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"K3s \u6bcf\u79d2\u5c06\u91cd\u65b0\u52a0\u5bc6\u7ea6 5 \u4e2a Secret\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5177\u6709\u5927\u91cf Secret \u7684\u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u91cd\u65b0\u52a0\u5bc6\u3002")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"))))),(0,n.kt)("h3",{id:"\u7981\u7528\u542f\u7528-secret-\u52a0\u5bc6"},"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"\u5355\u670d\u52a1\u5668",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," \u6807\u5fd7\u542f\u52a8 server \u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7981\u7528 Secret \u52a0\u5bc6\u3002"),(0,n.kt)("p",null,"\u8981\u5728\u5355\u8282\u70b9\u96c6\u7fa4\u4e0a\u7981\u7528 Secret \u52a0\u5bc6\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7981\u7528"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,n.kt)("p",null,"\u8981\u5728\u5355\u8282\u70b9\u96c6\u7fa4\u4e0a\u91cd\u65b0\u542f\u7528 Secret \u52a0\u5bc6\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u542f\u7528"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n"))))),(0,n.kt)(s.Z,{value:"\u9ad8\u53ef\u7528",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," \u6807\u5fd7\u542f\u52a8 HA \u96c6\u7fa4\u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7981\u7528 Secret \u52a0\u5bc6\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5efa\u8bae\u4f60\u9009\u62e9\u4e00\u4e2a Server \u8282\u70b9\u6765\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"secrets-encrypt")," \u547d\u4ee4\u3002")),(0,n.kt)("p",null,"\u4e3a\u7b80\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u5c06\u672c\u6307\u5357\u4e2d\u4f7f\u7528\u7684 3 \u4e2a server \u5206\u522b\u79f0\u4e3a S1\u3001S2\u3001S3\u3002"),(0,n.kt)("p",null,"\u8981\u5728 HA \u96c6\u7fa4\u4e0a\u7981\u7528 Secret \u52a0\u5bc6\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u7981\u7528"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,n.kt)("p",null,"\u8981\u5728 HA \u96c6\u7fa4\u4e0a\u91cd\u65b0\u542f\u7528 Secret \u52a0\u5bc6\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u542f\u7528"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))))),(0,n.kt)("h3",{id:"secret-\u52a0\u5bc6\u72b6\u6001"},"Secret \u52a0\u5bc6\u72b6\u6001"),(0,n.kt)("p",null,"secrets-encrypt \u5de5\u5177\u5305\u542b\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," \u547d\u4ee4\uff0c\u8be5\u547d\u4ee4\u80fd\u663e\u793a\u8282\u70b9\u4e0a Secret \u52a0\u5bc6\u7684\u5f53\u524d\u72b6\u6001\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u5355 Server \u8282\u70b9\u4e0a\u7684\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n")),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u53e6\u4e00\u4e2a\u5173\u4e8e HA \u96c6\u7fa4\u7684\u4f8b\u5b50\uff0c\u5728\u8f6e\u6362\u5bc6\u94a5\u540e\uff0c\u91cd\u542f server \u4e4b\u524d\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n")),(0,n.kt)("p",null,"\u5404\u90e8\u5206\u8be6\u60c5\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Encryption Status"),"\uff1a\u663e\u793a\u8282\u70b9\u4e0a\u7684 Secret \u52a0\u5bc6\u662f\u7981\u7528\u8fd8\u662f\u542f\u7528\u7684"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Current Rotation Stage"),"\uff1a\u8868\u793a\u8282\u70b9\u4e0a\u5f53\u524d\u7684\u8f6e\u6362\u9636\u6bb5",(0,n.kt)("br",{parentName:"li"}),"Stage \u53ef\u80fd\u662f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"start"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"prepare"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"rotate"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"reencrypt_request"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"reencrypt_active"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"reencrypt_finished")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Server Encryption Hashes"),"\uff1a\u5bf9 HA \u96c6\u7fa4\u6709\u7528\uff0c\u8868\u660e\u6240\u6709 server \u662f\u5426\u4e0e\u672c\u5730\u6587\u4ef6\u5904\u4e8e\u540c\u4e00\u9636\u6bb5\u3002\u8fd9\u53ef\u7528\u4e8e\u786e\u5b9a\u5728\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u4e4b\u524d\u662f\u5426\u9700\u8981\u91cd\u542f server\u3002\u5728\u4e0a\u9762\u7684 HA \u4f8b\u5b50\u4e2d\uff0cnode-1 \u548c node-2 \u7684\u54c8\u5e0c\u503c\u4e0d\u540c\uff0c\u8bf4\u660e\u5b83\u4eec\u76ee\u524d\u6ca1\u6709\u76f8\u540c\u7684\u52a0\u5bc6\u914d\u7f6e\u3002\u91cd\u542f server \u5c06\u540c\u6b65\u5b83\u4eec\u7684\u914d\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Key Table"),"\uff1a\u6c47\u603b\u5728\u8282\u70b9\u4e0a\u627e\u5230\u7684 Secret \u52a0\u5bc6\u5bc6\u94a5\u7684\u4fe1\u606f\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Active"),"\uff1a\u201c*\u201d\u8868\u793a\u5f53\u524d\u4f7f\u7528\u4e86\u54ea\u4e9b\u5bc6\u94a5\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u8fdb\u884cSecret \u52a0\u5bc6\u3002Kubernetes \u4f7f\u7528 active \u5bc6\u94a5\u6765\u52a0\u5bc6\u65b0\u7684 Secret\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Key Type"),"\uff1a\u4f7f\u7528\u6b64\u5de5\u5177\u7684\u6240\u6709\u5bc6\u94a5\u90fd\u662f ",(0,n.kt)("inlineCode",{parentName:"li"},"AES-CBC")," \u7c7b\u578b\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers"},"\u6b64\u5904"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name"),"\uff1a\u52a0\u5bc6\u5bc6\u94a5\u7684\u540d\u79f0\u3002")))))}k.isMDXComponent=!0}}]);