"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(3117),a=(r(7294),r(3905));const o={title:"\u5907\u4efd\u548c\u6062\u590d",weight:26},i=void 0,l={unversionedId:"datastore/backup-restore",id:"datastore/backup-restore",title:"\u5907\u4efd\u548c\u6062\u590d",description:"K3s \u7684\u5907\u4efd\u548c\u6062\u590d\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/datastore/backup-restore.md",sourceDirName:"datastore",slug:"/datastore/backup-restore",permalink:"/zh/datastore/backup-restore",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/backup-restore.md",tags:[],version:"current",lastUpdatedAt:1680549940,formattedLastUpdatedAt:"2023\u5e744\u67083\u65e5",frontMatter:{title:"\u5907\u4efd\u548c\u6062\u590d",weight:26},sidebar:"mySidebar",previous:{title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8",permalink:"/zh/datastore/"},next:{title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",permalink:"/zh/datastore/ha-embedded"}},p={},c=[{value:"\u4f7f\u7528 SQLite \u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",id:"\u4f7f\u7528-sqlite-\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",level:2},{value:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",id:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",level:2},{value:"\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",id:"\u4f7f\u7528\u5d4c\u5165\u5f0f-etcd-\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"K3s \u7684\u5907\u4efd\u548c\u6062\u590d\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u5907\u4efd\u6570\u636e\u5b58\u50a8\u672c\u8eab\uff0c\u4f60\u8fd8\u5fc5\u987b\u5907\u4efd\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/token")," \u7684 Server Token \u6587\u4ef6\u3002\n\u4f7f\u7528\u5907\u4efd\u8fdb\u884c\u6062\u590d\u65f6\uff0c\u4f60\u5fc5\u987b\u6062\u590d\u6b64\u6587\u4ef6\uff0c\u6216\u5c06\u5176\u503c\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"--token")," \u9009\u9879\u3002\n\u7531\u4e8e Token \u7528\u4e8e\u52a0\u5bc6\u6570\u636e\u5b58\u50a8\u5185\u7684\u51ed\u8bc1\u6570\u636e\uff0c\u56e0\u6b64\u5982\u679c\u8fd8\u539f\u65f6\u6ca1\u6709\u4f7f\u7528\u76f8\u540c\u7684 Token \u503c\uff0c\u5feb\u7167\u5c06\u65e0\u6cd5\u4f7f\u7528\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528-sqlite-\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"},"\u4f7f\u7528 SQLite \u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"),(0,a.kt)("p",null,"\u4f60\u4e0d\u9700\u8981\u4f7f\u7528\u7279\u6b8a\u547d\u4ee4\u5c31\u80fd\u5907\u4efd\u6216\u6062\u590d SQLite \u6570\u636e\u5b58\u50a8\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8981\u5907\u4efd SQLite \u6570\u636e\u5b58\u50a8\uff0c\u8bf7\u590d\u5236 ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/db/"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u6062\u590d SQLite \u6570\u636e\u5b58\u50a8\uff0c\u8bf7\u6062\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/db")," \u7684\u5185\u5bb9\uff08\u4ee5\u53ca Token\uff0c\u5982\u4e0a\u6240\u8ff0\uff09\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"},"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"),(0,a.kt)("p",null,"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u65f6\uff0c\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u5728 K3s \u5916\u9762\u5904\u7406\u3002\u6570\u636e\u5e93\u7ba1\u7406\u5458\u9700\u8981\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8fdb\u884c\u5907\u4efd\uff0c\u6216\u8005\u4f7f\u7528\u5feb\u7167\u6216\u8f6c\u50a8\u8fdb\u884c\u6062\u590d\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5c06\u6570\u636e\u5e93\u914d\u7f6e\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u6267\u884c\u5b9a\u671f\u5feb\u7167"),"\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u83b7\u53d6\u6570\u636e\u5e93\u5feb\u7167\u5e76\u4ece\u4e2d\u6062\u590d\u6570\u636e\u5e93\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9\u6570\u636e\u5e93\u6587\u6863\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html"},"MySQL \u5b98\u65b9\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/8.3/backup-dump.html"},"PostgreSQL \u5b98\u65b9\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io/docs/latest/op-guide/recovery/"},"etcd \u5b98\u65b9\u6587\u6863"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5d4c\u5165\u5f0f-etcd-\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"},"\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"),(0,a.kt)("p",null,"\u6709\u5173\u5728\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u4e0a\u6267\u884c\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/cli/etcd-snapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s etcd-snapshot")," \u547d\u4ee4\u6587\u6863"),"\u3002"))}u.isMDXComponent=!0}}]);