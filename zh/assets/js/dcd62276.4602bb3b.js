"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8855],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return t?a.createElement(u,l(l({ref:n},d),{},{components:t})):a.createElement(u,l({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(3117),r=(t(7294),t(3905));const i={title:"\u7ba1\u7406\u5c01\u88c5\u7684\u7ec4\u4ef6",weight:60},l=void 0,o={unversionedId:"installation/packaged-components",id:"installation/packaged-components",title:"\u7ba1\u7406\u5c01\u88c5\u7684\u7ec4\u4ef6",description:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\uff08AddOn\uff09",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/packaged-components.md",sourceDirName:"installation",slug:"/installation/packaged-components",permalink:"/zh/installation/packaged-components",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/packaged-components.md",tags:[],version:"current",lastUpdatedAt:1682961925,formattedLastUpdatedAt:"2023\u5e745\u67081\u65e5",frontMatter:{title:"\u7ba1\u7406\u5c01\u88c5\u7684\u7ec4\u4ef6",weight:60},sidebar:"mySidebar",previous:{title:"\u7ba1\u7406 Server \u89d2\u8272",permalink:"/zh/installation/server-roles"},next:{title:"Kubernetes \u4eea\u8868\u677f",permalink:"/zh/installation/kube-dashboard"}},s={},p=[{value:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\uff08AddOn\uff09",id:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355addon",level:2},{value:"\u5c01\u88c5\u7684\u7ec4\u4ef6",id:"\u5c01\u88c5\u7684\u7ec4\u4ef6",level:3},{value:"\u7528\u6237 AddOn",id:"\u7528\u6237-addon",level:3},{value:"\u6587\u4ef6\u547d\u540d\u8981\u6c42",id:"\u6587\u4ef6\u547d\u540d\u8981\u6c42",level:4},{value:"\u7981\u7528\u6e05\u5355",id:"\u7981\u7528\u6e05\u5355",level:2},{value:"\u4f7f\u7528 <code>--disable</code> \u6807\u5fd7",id:"\u4f7f\u7528---disable-\u6807\u5fd7",level:3},{value:"\u4f7f\u7528 .skip \u6587\u4ef6",id:"\u4f7f\u7528-skip-\u6587\u4ef6",level:3},{value:"Helm AddOn",id:"helm-addon",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355addon"},"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\uff08AddOn\uff09"),(0,r.kt)("p",null,"\u5728 server \u8282\u70b9\u4e0a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," \u4e2d\u7684\u4efb\u4f55\u6587\u4ef6\u90fd\u4f1a\u4ee5\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," \u7684\u65b9\u5f0f\u81ea\u52a8\u90e8\u7f72\u5230 Kubernetes\uff0c\u8fd9\u4f1a\u5728\u542f\u52a8\u548c\u66f4\u6539\u78c1\u76d8\u6587\u4ef6\u65f6\u8fdb\u884c\u3002\u5982\u679c\u4f60\u5220\u9664\u8be5\u76ee\u5f55\u7684\u6587\u4ef6\uff0c\u96c6\u7fa4\u4e2d\u76f8\u5e94\u7684\u8d44\u6e90\u4e0d\u4f1a\u88ab\u5220\u9664\u3002"),(0,r.kt)("p",null,"\u6e05\u5355\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"AddOn")," \u81ea\u5b9a\u4e49\u8d44\u6e90\u8fdb\u884c\u8ddf\u8e2a\u3002\u4f60\u53ef\u4ee5\u5728\u76f8\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"AddOn")," \u4e0a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," \u6765\u67e5\u770b\u5e94\u7528\u6e05\u5355\u6587\u4ef6\u65f6\u9047\u5230\u7684\u4efb\u4f55\u9519\u8bef\u6216\u8b66\u544a\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get event -n kube-system")," \u6765\u67e5\u770b\u8be5\u547d\u540d\u7a7a\u95f4\u7684\u6240\u6709\u4e8b\u4ef6\uff0c\u5305\u62ec\u90e8\u7f72\u63a7\u5236\u5668\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u5c01\u88c5\u7684\u7ec4\u4ef6"},"\u5c01\u88c5\u7684\u7ec4\u4ef6"),(0,r.kt)("p",null,"K3s \u5c01\u88c5\u4e86\u5f88\u591a\u7ec4\u4ef6\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests")," \u76ee\u5f55\u90e8\u7f72\u4e3a AddOn\uff0c\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"coredns"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"traefik"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"local-storage")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics-server"),"\u3002\u5d4c\u5165\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"servicelb")," LoadBalancer controller \u6ca1\u6709\u6e05\u5355\u6587\u4ef6\uff0c\u4f46\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0c\u5b83\u53ef\u4ee5\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"AddOn")," \u4e00\u6837\u88ab\u7981\u7528\u3002"),(0,r.kt)("p",null,"\u5c01\u88c5\u7ec4\u4ef6\u7684\u6e05\u5355\u7531 K3s \u7ba1\u7406\uff0c\u8bf7\u4e0d\u8981\u66f4\u6539\u3002K3s \u542f\u52a8\u65f6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u90fd\u4f1a\u91cd\u65b0\u5199\u5165\u78c1\u76d8\u6765\u786e\u4fdd\u6587\u4ef6\u7684\u5b8c\u6574\u6027\u3002"),(0,r.kt)("h3",{id:"\u7528\u6237-addon"},"\u7528\u6237 AddOn"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u5176\u4ed6\u6587\u4ef6\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests")," \u76ee\u5f55\u4e2d\uff0c\u5c06\u5b83\u4eec\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"AddOn")," \u90e8\u7f72\u3002\u6bcf\u4e2a\u6587\u4ef6\u53ef\u80fd\u5305\u542b\u591a\u4e2a Kubernetes \u8d44\u6e90\uff0c\u5b83\u4eec\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"---")," YAML \u5206\u9694\u7b26\u5206\u9694\u3002\u6709\u5173\u5728\u6e05\u5355\u4e2d\u7ec4\u7ec7\u8d44\u6e90\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Kubernetes \u6587\u6863\u7684",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/"},"\u7ba1\u7406\u8d44\u6e90"),"\u7ae0\u8282\u3002"),(0,r.kt)("h4",{id:"\u6587\u4ef6\u547d\u540d\u8981\u6c42"},"\u6587\u4ef6\u547d\u540d\u8981\u6c42"),(0,r.kt)("p",null,"\u6e05\u5355\u76ee\u5f55\u4e2d\u6bcf\u4e2a\u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"AddOn")," \u540d\u79f0\u5747\u6d3e\u751f\u81ea\u6587\u4ef6\u7684\u57fa\u672c\u540d\u79f0\u3002\n\u8bf7\u786e\u4fdd\u6e05\u5355\u76ee\u5f55\uff08\u6216\u4efb\u4f55\u5b50\u76ee\u5f55\uff09\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u540d\u79f0\u90fd\u662f\u552f\u4e00\u7684\uff0c\u5e76\u9075\u5b88 Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/"},"\u5bf9\u8c61\u547d\u540d\u9650\u5236"),"\u3002\n\u6b64\u5916\uff0c\u5373\u4f7f K3s \u5c01\u88c5\u7ec4\u4ef6\u5df2\u7981\u7528\uff0c\u4e5f\u4e0d\u8981\u4e0e\u9ed8\u8ba4 K3s \u5c01\u88c5\u7ec4\u4ef6\u7684\u540d\u79f0\u51b2\u7a81\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u540d\u5305\u542b\u4e0b\u5212\u7ebf\u5c06\u62a5\u544a\u4ee5\u4e0b\u793a\u4f8b\u9519\u8bef\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Failed to process config: failed to process /var/lib/rancher/k3s/server/manifests/example_manifest.yaml:\n   Addon.k3s.cattle.io \"example_manifest\" is invalid: metadata.name: Invalid value: \"example_manifest\":\n   a lowercase RFC 1123 subdomain must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character\n   (e.g. 'example.com', regex used for validation is '[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*')"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u591a\u4e2a Server \u8282\u70b9\uff0c\u5e76\u5728\u591a\u4e2a Server \u4e0a\u653e\u7f6e\u4e86\u989d\u5916\u7684 AddOn \u6e05\u5355\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u786e\u4fdd\u6587\u4ef6\u5728\u8282\u70b9\u4e4b\u95f4\u4fdd\u6301\u540c\u6b65\u3002K3s \u4e0d\u4f1a\u5728\u8282\u70b9\u4e4b\u95f4\u540c\u6b65 AddOn \u7684\u5185\u5bb9\u3002\u5982\u679c\u4e0d\u540c\u7684 Server \u5c1d\u8bd5\u90e8\u7f72\u51b2\u7a81\u7684\u6e05\u5355\uff0c\u90a3\u4e48\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898\u3002")),(0,r.kt)("h2",{id:"\u7981\u7528\u6e05\u5355"},"\u7981\u7528\u6e05\u5355"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u7981\u7528\u6e05\u5355\u76ee\u5f55\u4e2d\u7279\u5b9a\u5185\u5bb9\u7684\u90e8\u7f72\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528---disable-\u6807\u5fd7"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"--disable")," \u6807\u5fd7"),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests")," \u76ee\u5f55\u4e2d\u7684\u5176\u4ed6\u6e05\u5355\u7684 AddOn \u4e4b\u5916\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable")," \u6807\u5fd7\u6765\u7981\u7528\u4e0a\u9762\u5217\u51fa\u7684\u5c01\u88c5\u7ec4\u4ef6\u7684 AddOn\u3002\u5df2\u7981\u7528\u7684 AddOn \u4f1a\u4ece\u96c6\u7fa4\u4e2d\u5378\u8f7d\uff0c\u5e76\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests")," \u76ee\u5f55\u4e2d\u5220\u9664\u6e90\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u7981\u6b62\u5728\u65b0\u96c6\u7fa4\u4e0a\u5b89\u88c5 Traefik\uff0c\u6216\u8005\u8981\u5378\u8f7d Traefik \u5e76\u5220\u9664\u73b0\u6709\u96c6\u7fa4\u4e2d\u7684\u6e05\u5355\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable=traefik")," \u6765\u542f\u52a8 K3s\u3002\u8981\u7981\u7528\u591a\u4e2a\u6761\u76ee\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u9017\u53f7\u6765\u5206\u9694\u5b83\u4eec\u7684\u540d\u79f0\u6216\u591a\u6b21\u4f7f\u7528\u6807\u5fd7\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-skip-\u6587\u4ef6"},"\u4f7f\u7528 .skip \u6587\u4ef6"),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," \u4e0b\u7684\u4efb\u4f55\u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},".skip")," \u6587\u4ef6\uff0c\u7136\u540e K3s \u4f1a\u5ffd\u7565\u76f8\u5e94\u7684\u6e05\u5355\u3002",(0,r.kt)("inlineCode",{parentName:"p"},".skip")," \u6587\u4ef6\u7684\u5185\u5bb9\u4e0d\u91cd\u8981\uff0c\u56e0\u4e3a\u53ea\u4f1a\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u5728\u521b\u5efa AddOn \u4e4b\u540e\u518d\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},".skip")," \u6587\u4ef6\uff0c\u5219\u4e0d\u4f1a\u5220\u9664\u6216\u4fee\u6539 AddOn \u4ee5\u53ca AddOn \u521b\u5efa\u7684\u8d44\u6e90\uff0c\u53ea\u4f1a\u8ba4\u4e3a\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u5728\u7b2c\u4e00\u6b21\u542f\u52a8 K3s \u4e4b\u524d\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests")," \u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik.yaml.skip")," \u6587\u4ef6\uff0c\u90a3\u4e48 K3s \u4f1a\u8df3\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik.yaml")," \u7684\u90e8\u7f72\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls /var/lib/rancher/k3s/server/manifests\nccm.yaml      local-storage.yaml  rolebindings.yaml  traefik.yaml.skip\ncoredns.yaml  traefik.yaml\n\n$ kubectl get pods -A\nNAMESPACE     NAME                                     READY   STATUS    RESTARTS   AGE\nkube-system   local-path-provisioner-64ffb68fd-xx98j   1/1     Running   0          74s\nkube-system   metrics-server-5489f84d5d-7zwkt          1/1     Running   0          74s\nkube-system   coredns-85cb69466-vcq7j                  1/1     Running   0          74s\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik.skip")," \u6587\u4ef6\u4e4b\u524d\u5df2\u7ecf\u90e8\u7f72\u4e86 Traefik\uff0cTraefik \u5c06\u4fdd\u6301\u539f\u6837\uff0c\u5e76\u4e14\u5347\u7ea7 K3s \u65f6\u7684\u540e\u7eed\u66f4\u65b0\u4e0d\u4f1a\u5f71\u54cd Traefik\u3002"),(0,r.kt)("h2",{id:"helm-addon"},"Helm AddOn"),(0,r.kt)("p",null,"\u6709\u5173\u901a\u8fc7\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u6765\u7ba1\u7406 Helm Chart \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/helm/"},"Helm"),"\u3002"))}c.isMDXComponent=!0}}]);