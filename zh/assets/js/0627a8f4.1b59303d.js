"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4288],{4092:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=s(5893),r=s(1151);const l={title:"Helm",weight:42},c=void 0,d={id:"helm",title:"Helm",description:"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u501f\u52a9 Helm\uff0c\u5f00\u53d1\u4eba\u5458\u6216\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u521b\u5efa\u79f0\u4e3a Chart \u7684\u53ef\u914d\u7f6e\u6a21\u677f\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u4f7f\u7528\u9759\u6001\u6e05\u5355\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 Chart catalog\uff0c\u8bf7\u53c2\u9605 https://helm.sh/docs/intro/quickstart/\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/helm.md",sourceDirName:".",slug:"/helm",permalink:"/zh/helm",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/helm.md",tags:[],version:"current",lastUpdatedAt:1712593734e3,frontMatter:{title:"Helm",weight:42},sidebar:"mySidebar",previous:{title:"Networking Services",permalink:"/zh/networking/networking-services"},next:{title:"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e",permalink:"/zh/advanced"}},h={},i=[{value:"\u4f7f\u7528 Helm Controller",id:"\u4f7f\u7528-helm-controller",level:3},{value:"HelmChart \u5b57\u6bb5\u5b9a\u4e49",id:"helmchart-\u5b57\u6bb5\u5b9a\u4e49",level:4},{value:"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6",id:"\u4f7f\u7528-helmchartconfig-\u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6",level:3},{value:"\u4ece Helm v2 \u8fc1\u79fb",id:"\u4ece-helm-v2-\u8fc1\u79fb",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u501f\u52a9 Helm\uff0c\u5f00\u53d1\u4eba\u5458\u6216\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u521b\u5efa\u79f0\u4e3a Chart \u7684\u53ef\u914d\u7f6e\u6a21\u677f\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u4f7f\u7528\u9759\u6001\u6e05\u5355\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 Chart catalog\uff0c\u8bf7\u53c2\u9605 ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"https://helm.sh/docs/intro/quickstart/"}),"\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["K3s \u4e0d\u9700\u8981\u4f7f\u7528\u4efb\u4f55\u7279\u6b8a\u914d\u7f6e\u6765\u652f\u6301 Helm\u3002\u8bf7\u786e\u4fdd\u4f60\u5df2\u6839\u636e",(0,n.jsx)(t.a,{href:"/zh/cluster-access",children:"\u96c6\u7fa4\u8bbf\u95ee"}),"\u6587\u6863\u6b63\u786e\u8bbe\u7f6e\u4e86 kubeconfig \u8def\u5f84\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["K3s \u5305\u542b\u4e00\u4e2a ",(0,n.jsx)(t.a,{href:"https://github.com/k3s-io/helm-controller/",children:"Helm Controller"}),"\uff0c\u5b83\u4f7f\u7528 HelmChart \u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 (CRD) \u6765\u7ba1\u7406 Helm Chart \u7684\u5b89\u88c5\u3001\u5347\u7ea7\u3001\u91cd\u65b0\u914d\u7f6e\u548c\u5378\u8f7d\u3002\u4e0e",(0,n.jsx)(t.a,{href:"/zh/installation/packaged-components",children:"\u81ea\u52a8\u90e8\u7f72 AddOn \u6e05\u5355"}),"\u914d\u5408\u4f7f\u7528\u540e\uff0c\u5b83\u53ef\u4ee5\u5728\u78c1\u76d8\u4e0a\u521b\u5efa\u5355\u4e2a\u6587\u4ef6\uff0c\u81ea\u52a8\u5728\u96c6\u7fa4\u4e0a\u5b89\u88c5 Helm Chart\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"\u4f7f\u7528-helm-controller",children:"\u4f7f\u7528 Helm Controller"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/k3s-io/helm-controller#helm-controller",children:"HelmChart Custom Resource"})," \u6355\u83b7\u4e86\u4f60\u901a\u5e38\u4f20\u9012\u7ed9 ",(0,n.jsx)(t.code,{children:"helm"})," \u547d\u4ee4\u884c\u5de5\u5177\u7684\u5927\u90e8\u5206\u9009\u9879\u3002\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660e\u4e86\u5982\u4f55\u4ece Bitnami Chart \u4ed3\u5e93\u90e8\u7f72 Apache\uff0c\u5e76\u8986\u76d6\u67d0\u4e9b\u9ed8\u8ba4\u7684 Chart \u503c\u3002\u8bf7\u6ce8\u610f\uff0cHelmChart \u8d44\u6e90\u672c\u8eab\u4f4d\u4e8e ",(0,n.jsx)(t.code,{children:"kube-system"})," \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u4f46 Chart \u7684\u8d44\u6e90\u5c06\u90e8\u7f72\u5230\u5728\u540c\u4e00\u6e05\u5355\u4e2d\u521b\u5efa\u7684 ",(0,n.jsx)(t.code,{children:"web"})," \u547d\u540d\u7a7a\u95f4\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5c06 HelmChart \u8d44\u6e90\u4e0e\u5176\u90e8\u7f72\u7684\u8d44\u6e90\u5206\u5f00\uff0c\u8fd9\u5c06\u5f88\u6709\u7528\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: web\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: apache\n  namespace: kube-system\nspec:\n  repo: https://charts.bitnami.com/bitnami\n  chart: apache\n  targetNamespace: web\n  valuesContent: |-\n    service:\n      type: ClusterIP\n    ingress:\n      enabled: true\n      hostname: www.example.com\n    metrics:\n      enabled: true\n"})}),"\n",(0,n.jsx)(t.h4,{id:"helmchart-\u5b57\u6bb5\u5b9a\u4e49",children:"HelmChart \u5b57\u6bb5\u5b9a\u4e49"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u5b57\u6bb5"}),(0,n.jsx)(t.th,{children:"\u9ed8\u8ba4"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,n.jsx)(t.th,{children:"Helm \u53c2\u6570/\u6807\u5fd7\u7b49\u6548\u9879"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metadata.name"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Helm Chart \u540d\u79f0"}),(0,n.jsx)(t.td,{children:"NAME"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.chart"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u4ed3\u5e93\u4e2d\u7684 Helm Chart \u540d\u79f0\uff0c\u6216 chart archive (.tgz) \u7684\u5b8c\u6574 HTTPS URL"}),(0,n.jsx)(t.td,{children:"CHART"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.targetNamespace"}),(0,n.jsx)(t.td,{children:"default"}),(0,n.jsx)(t.td,{children:"Helm Chart \u76ee\u6807\u547d\u540d\u7a7a\u95f4"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--namespace"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.version"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Helm Chart \u7248\u672c\uff08\u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5\u65f6\uff09"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--version"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.repo"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Helm Chart \u4ed3\u5e93 URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--repo"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.repoCA"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u6307\u5b9a\u542f\u7528 HTTPS \u7684 Server \u7684\u8bc1\u4e66"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--ca-file"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.helmVersion"}),(0,n.jsx)(t.td,{children:"v3"}),(0,n.jsxs)(t.td,{children:["\u8981\u4f7f\u7528\u7684 Helm \u7248\u672c\uff08",(0,n.jsx)(t.code,{children:"v2"})," \u6216 ",(0,n.jsx)(t.code,{children:"v3"}),"\uff09"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.bootstrap"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsxs)(t.td,{children:["\u5982\u679c\u9700\u8981\u6b64 Chart \u6765\u5f15\u5bfc\u96c6\u7fa4\uff08Cloud Controller Manager \u7b49\uff09\uff0c\u8bf7\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(t.code,{children:"True"})]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.set"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u8986\u76d6\u7b80\u5355\u7684\u9ed8\u8ba4 Chart \u503c\u3002\u4f18\u5148\u4e8e\u901a\u8fc7 valuesContent \u8bbe\u7f6e\u7684\u9009\u9879\u3002"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"--set"})," / ",(0,n.jsx)(t.code,{children:"--set-string"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.jobImage"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["\u6307\u5b9a\u5b89\u88c5 helm chart \u65f6\u8981\u4f7f\u7528\u7684\u955c\u50cf\u3002\u4f8b\u5982\uff1arancher/klipper-helm",":v0",".3.0"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.timeout"}),(0,n.jsx)(t.td,{children:"300s"}),(0,n.jsxs)(t.td,{children:["Helm \u64cd\u4f5c\u7684\u8d85\u65f6\uff0c\u4f5c\u4e3a ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/time#ParseDuration",children:"duration string"}),"\uff08",(0,n.jsx)(t.code,{children:"300s"}),"\u3001",(0,n.jsx)(t.code,{children:"10m"}),"\u3001",(0,n.jsx)(t.code,{children:"1h"})," \u7b49\uff09"]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--timeout"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.failurePolicy"}),(0,n.jsx)(t.td,{children:"reinstall"}),(0,n.jsxs)(t.td,{children:["\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(t.code,{children:"abort"}),"\uff0cHelm \u64cd\u4f5c\u4f1a\u88ab\u4e2d\u6b62\uff0c\u7b49\u5f85\u64cd\u4f5c\u4eba\u5458\u7684\u624b\u52a8\u5e72\u9884\u3002"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.valuesContent"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u901a\u8fc7 YAML \u6587\u4ef6\u5185\u5bb9\u8986\u76d6\u590d\u6742\u7684\u9ed8\u8ba4 Chart \u503c"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--values"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spec.chartContent"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Base64 \u7f16\u7801\u7684 chart archive .tgz\uff0c\u8986\u76d6 spec.chart"}),(0,n.jsx)(t.td,{children:"CHART"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u96c6\u7fa4\u5185\u7684 Kubernetes APIServer \u533f\u540d\u8bbf\u95ee ",(0,n.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/static/"})," \u4e2d\u7684\u5185\u5bb9\u3002\u6b64 URL \u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"spec.chart"})," \u5b57\u6bb5\u4e2d\u7684\u7279\u6b8a\u53d8\u91cf ",(0,n.jsx)(t.code,{children:"%{KUBERNETES_API}%"})," \u8fdb\u884c\u6a21\u677f\u5316\u3002\u4f8b\u5982\uff0c\u6253\u5305\u7684 Traefik \u7ec4\u4ef6\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"https://%{KUBERNETES_API}%/static/charts/traefik-12.0.000.tgz"})," \u52a0\u8f7d Chart\u3002"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"name"})," \u5b57\u6bb5\u9700\u8981\u9075\u5faa Helm Chart \u547d\u540d\u7ea6\u5b9a\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/chart_best_practices/conventions/#chart-names",children:"Helm \u6700\u4f73\u5b9e\u8df5\u6587\u6863"}),"\u3002"]})}),"\n",(0,n.jsx)(t.h3,{id:"\u4f7f\u7528-helmchartconfig-\u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6",children:"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6"}),"\n",(0,n.jsx)(t.admonition,{title:"\u7248\u672c",type:"info",children:(0,n.jsxs)(t.p,{children:["\u4ece ",(0,n.jsx)(t.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1",children:"v1.19.1+k3s1"})," \u8d77\u53ef\u7528"]})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u4e86\u5141\u8bb8\u8986\u76d6\u90e8\u7f72\u4e3a HelmCharts\uff08\u4f8b\u5982 Traefik\uff09\u7684\u6253\u5305\u7ec4\u4ef6\u7684\u503c\uff0cK3s \u652f\u6301\u901a\u8fc7 HelmChartConfig \u8d44\u6e90\u8fdb\u884c\u81ea\u5b9a\u4e49\u90e8\u7f72\u3002HelmChartConfig \u8d44\u6e90\u5fc5\u987b\u4e0e\u5bf9\u5e94\u7684 HelmChart \u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u5339\u914d\uff0c\u5e76\u4e14\u652f\u6301\u63d0\u4f9b\u989d\u5916\u7684 ",(0,n.jsx)(t.code,{children:"valuesContent"}),"\uff0c\u5b83\u4f5c\u4e3a\u9644\u52a0\u503c\u6587\u4ef6\u4f20\u9012\u7ed9 ",(0,n.jsx)(t.code,{children:"helm"})," \u547d\u4ee4\u3002"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["HelmChart ",(0,n.jsx)(t.code,{children:"spec.set"})," \u503c\u4f1a\u8986\u76d6 HelmChart \u548c HelmChartConfig ",(0,n.jsx)(t.code,{children:"spec.valuesContent"})," \u8bbe\u7f6e\u3002"]})}),"\n",(0,n.jsxs)(t.p,{children:["\u4f8b\u5982\uff0c\u8981\u81ea\u5b9a\u4e49\u6253\u5305\u7684 Traefik ingress \u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,n.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/manifests/traefik-config.yaml"})," \u7684\u6587\u4ef6\u5e76\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u586b\u5145\u5b83\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image:\n      name: traefik\n      tag: v2.8.5\n    forwardedHeaders:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    ssl:\n      enabled: true\n      permanentRedirect: false\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u4ece-helm-v2-\u8fc1\u79fb",children:"\u4ece Helm v2 \u8fc1\u79fb"}),"\n",(0,n.jsx)(t.admonition,{title:"\u7248\u672c",type:"info",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.17.0%2Bk3s.1",children:"v1.17.0+k3s.1"})," \u5f00\u59cb\u652f\u6301 Helm v3 \u5e76\u9ed8\u8ba4\u4f7f\u7528\u5b83\u3002"]})}),"\n",(0,n.jsxs)(t.p,{children:["K3s \u53ef\u4ee5\u5904\u7406 Helm v2 \u6216 Helm v3\u3002\u5982\u679c\u4f60\u60f3\u8fc1\u79fb\u5230 Helm v3\uff0cHelm \u7684",(0,n.jsx)(t.a,{href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/",children:"\u8fd9\u7bc7\u535a\u5ba2\u6587\u7ae0"}),"\u89e3\u91ca\u4e86\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u8fdb\u884c\u8fc1\u79fb\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/",children:"\u5b98\u65b9 Helm 3 \u6587\u6863"}),"\u3002\u8bf7\u786e\u4fdd\u4f60\u5df2\u6309\u7167",(0,n.jsx)(t.a,{href:"/zh/cluster-access",children:"\u96c6\u7fa4\u8bbf\u95ee"}),"\u90e8\u5206\u6b63\u786e\u8bbe\u7f6e\u4e86 kubeconfig\u3002"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Helm 3 \u4e0d\u518d\u9700\u8981 Tiller \u548c ",(0,n.jsx)(t.code,{children:"helm init"})," \u547d\u4ee4\u3002\u8be6\u60c5\u8bf7\u53c2\u9605\u5b98\u65b9\u6587\u6863\u3002"]})})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>c});var n=s(7294);const r={},l=n.createContext(r);function c(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);