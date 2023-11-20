"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8178],{4090:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var r=s(5893),c=s(1151);const l={title:"secrets-encrypt"},i="k3s secrets-encrypt",t={id:"cli/secrets-encrypt",title:"secrets-encrypt",description:"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Secret \u52a0\u5bc6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/secrets-encrypt.md",sourceDirName:"cli",slug:"/cli/secrets-encrypt",permalink:"/zh/cli/secrets-encrypt",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/secrets-encrypt.md",tags:[],version:"current",lastUpdatedAt:1700501451,formattedLastUpdatedAt:"2023\u5e7411\u670820\u65e5",frontMatter:{title:"secrets-encrypt"},sidebar:"mySidebar",previous:{title:"etcd-snapshot",permalink:"/zh/cli/etcd-snapshot"},next:{title:"token",permalink:"/zh/cli/token"}},d={},h=[{value:"Secret \u52a0\u5bc6\u5de5\u5177",id:"secret-\u52a0\u5bc6\u5de5\u5177",level:2},{value:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3},{value:"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6",id:"\u7981\u7528\u542f\u7528-secret-\u52a0\u5bc6",level:3},{value:"Secret \u52a0\u5bc6\u72b6\u6001",id:"secret-\u52a0\u5bc6\u72b6\u6001",level:3}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components},{TabItem:s,Tabs:l}=n;return s||j("TabItem",!0),l||j("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"k3s-secrets-encrypt",children:"k3s secrets-encrypt"}),"\n",(0,r.jsxs)(n.p,{children:["K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/zh/security/secrets-encryption",children:"Secret \u52a0\u5bc6"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"secret-\u52a0\u5bc6\u5de5\u5177",children:"Secret \u52a0\u5bc6\u5de5\u5177"}),"\n",(0,r.jsx)(n.admonition,{title:"\u7248\u672c",type:"info",children:(0,r.jsxs)(n.p,{children:["\u4ece ",(0,r.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.8%2Bk3s1",children:"v1.21.8+k3s1"})," \u8d77\u53ef\u7528"]})}),"\n",(0,r.jsxs)(n.p,{children:["K3s \u5305\u542b\u4e00\u4e2a CLI \u5de5\u5177 ",(0,r.jsx)(n.code,{children:"secrets-encrypt"}),"\uff0c\u53ef\u4ee5\u81ea\u52a8\u63a7\u5236\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6"}),"\n",(0,r.jsx)(n.li,{children:"\u6dfb\u52a0\u65b0\u7684\u52a0\u5bc6\u5bc6\u94a5"}),"\n",(0,r.jsx)(n.li,{children:"\u8f6e\u6362\u548c\u5220\u9664\u52a0\u5bc6\u5bc6\u94a5"}),"\n",(0,r.jsx)(n.li,{children:"\u91cd\u65b0\u52a0\u5bc6 Secret"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u9075\u5faa\u6b63\u786e\u7684\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362\u7a0b\u5e8f\uff0c\u4f60\u7684\u96c6\u7fa4\u53ef\u80fd\u4f1a\u6c38\u4e45\u635f\u574f\u3002\u56e0\u6b64\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002"})}),"\n",(0,r.jsx)(n.h3,{id:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",children:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(s,{value:"\u5355\u670d\u52a1\u5668",default:!0,children:[(0,r.jsx)(n.p,{children:"\u8981\u5728\u5355\u670d\u52a1\u5668\u96c6\u7fa4\u4e0a\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\uff1a"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528\u6807\u5fd7 ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})," \u542f\u52a8 K3s Server"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u76ee\u524d",(0,r.jsx)(n.em,{children:"\u4e0d"}),"\u652f\u6301\u5728\u6ca1\u6709\u52a0\u5bc6\u7684\u60c5\u51b5\u4e0b\u542f\u52a8 K3s \u5e76\u5728\u540e\u7eed\u542f\u7528\u5b83\u3002"]})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u51c6\u5907"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt prepare\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8f6e\u6362"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt rotate\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u91cd\u65b0\u52a0\u5bc6"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["K3s \u6bcf\u79d2\u5c06\u91cd\u65b0\u52a0\u5bc6\u7ea6 5 \u4e2a Secret\u3002",(0,r.jsx)(n.br,{}),"\n","\u5177\u6709\u5927\u91cf Secret \u7684\u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u91cd\u65b0\u52a0\u5bc6\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt\n"})}),"\n"]}),"\n"]})]}),(0,r.jsxs)(s,{value:"\u9ad8\u53ef\u7528",default:!0,children:[(0,r.jsx)(n.p,{children:"\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u548c\u5916\u90e8\u6570\u636e\u5e93\u96c6\u7fa4\u7684\u6b65\u9aa4\u76f8\u540c\u3002"}),(0,r.jsx)(n.p,{children:"\u8981\u5728 HA \u8bbe\u7f6e\u4e0a\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\uff1a"}),(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u76ee\u524d",(0,r.jsx)(n.em,{children:"\u4e0d"}),"\u652f\u6301\u5728\u6ca1\u6709\u52a0\u5bc6\u7684\u60c5\u51b5\u4e0b\u542f\u52a8 K3s \u5e76\u5728\u540e\u7eed\u542f\u7528\u5b83\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5efa\u8bae\u4f60\u9009\u62e9\u4e00\u4e2a Server \u8282\u70b9\u6765\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"secrets-encrypt"})," \u547d\u4ee4\u3002"]}),"\n"]})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})," \u6807\u5fd7\u542f\u52a8\u6240\u6709\u4e09\u4e2a K3s Server\u3002\u4e3a\u7b80\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u5c06 server \u5206\u522b\u79f0\u4e3a S1\u3001S2\u3001S3\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u51c6\u5907 S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt prepare\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8f6e\u6362 S1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt rotate\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 S1 \u4e0a\u91cd\u65b0\u52a0\u5bc6"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["K3s \u6bcf\u79d2\u5c06\u91cd\u65b0\u52a0\u5bc6\u7ea6 5 \u4e2a Secret\u3002",(0,r.jsx)(n.br,{}),"\n","\u5177\u6709\u5927\u91cf Secret \u7684\u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u91cd\u65b0\u52a0\u5bc6\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u7981\u7528\u542f\u7528-secret-\u52a0\u5bc6",children:"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6"}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(s,{value:"\u5355\u670d\u52a1\u5668",default:!0,children:[(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})," \u6807\u5fd7\u542f\u52a8 server \u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7981\u7528 Secret \u52a0\u5bc6\u3002"]}),(0,r.jsx)(n.p,{children:"\u8981\u5728\u5355\u8282\u70b9\u96c6\u7fa4\u4e0a\u7981\u7528 Secret \u52a0\u5bc6\uff1a"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7981\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt disable\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt --force --skip\n"})}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"\u8981\u5728\u5355\u8282\u70b9\u96c6\u7fa4\u4e0a\u91cd\u65b0\u542f\u7528 Secret \u52a0\u5bc6\uff1a"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542f\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt enable\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt --force --skip\n"})}),"\n"]}),"\n"]})]}),(0,r.jsxs)(s,{value:"\u9ad8\u53ef\u7528",default:!0,children:[(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"--secrets-encryption"})," \u6807\u5fd7\u542f\u52a8 HA \u96c6\u7fa4\u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7981\u7528 Secret \u52a0\u5bc6\u3002"]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5efa\u8bae\u4f60\u9009\u62e9\u4e00\u4e2a Server \u8282\u70b9\u6765\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"secrets-encrypt"})," \u547d\u4ee4\u3002"]})}),(0,r.jsx)(n.p,{children:"\u4e3a\u7b80\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u5c06\u672c\u6307\u5357\u4e2d\u4f7f\u7528\u7684 3 \u4e2a server \u5206\u522b\u79f0\u4e3a S1\u3001S2\u3001S3\u3002"}),(0,r.jsx)(n.p,{children:"\u8981\u5728 HA \u96c6\u7fa4\u4e0a\u7981\u7528 Secret \u52a0\u5bc6\uff1a"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 S1 \u4e0a\u7981\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt disable\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 S1 \u4e0a\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt --force --skip\n"})}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"\u8981\u5728 HA \u96c6\u7fa4\u4e0a\u91cd\u65b0\u542f\u7528 Secret \u52a0\u5bc6\uff1a"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 S1 \u4e0a\u542f\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt enable\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 S1 \u4e0a\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"k3s secrets-encrypt reencrypt --force --skip\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"secret-\u52a0\u5bc6\u72b6\u6001",children:"Secret \u52a0\u5bc6\u72b6\u6001"}),"\n",(0,r.jsxs)(n.p,{children:["secrets-encrypt \u5de5\u5177\u5305\u542b\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"status"})," \u547d\u4ee4\uff0c\u8be5\u547d\u4ee4\u80fd\u663e\u793a\u8282\u70b9\u4e0a Secret \u52a0\u5bc6\u7684\u5f53\u524d\u72b6\u6001\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5355 Server \u8282\u70b9\u4e0a\u7684\u547d\u4ee4\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u53e6\u4e00\u4e2a\u5173\u4e8e HA \u96c6\u7fa4\u7684\u4f8b\u5b50\uff0c\u5728\u8f6e\u6362\u5bc6\u94a5\u540e\uff0c\u91cd\u542f server \u4e4b\u524d\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5404\u90e8\u5206\u8be6\u60c5\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Encryption Status"}),"\uff1a\u663e\u793a\u8282\u70b9\u4e0a\u7684 Secret \u52a0\u5bc6\u662f\u7981\u7528\u8fd8\u662f\u542f\u7528\u7684"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Current Rotation Stage"}),"\uff1a\u8868\u793a\u8282\u70b9\u4e0a\u5f53\u524d\u7684\u8f6e\u6362\u9636\u6bb5",(0,r.jsx)(n.br,{}),"\n","Stage \u53ef\u80fd\u662f\uff1a",(0,r.jsx)(n.code,{children:"start"}),"\uff0c",(0,r.jsx)(n.code,{children:"prepare"}),"\uff0c",(0,r.jsx)(n.code,{children:"rotate"}),"\uff0c",(0,r.jsx)(n.code,{children:"reencrypt_request"}),"\uff0c",(0,r.jsx)(n.code,{children:"reencrypt_active"}),"\uff0c",(0,r.jsx)(n.code,{children:"reencrypt_finished"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Server Encryption Hashes"}),"\uff1a\u5bf9 HA \u96c6\u7fa4\u6709\u7528\uff0c\u8868\u660e\u6240\u6709 server \u662f\u5426\u4e0e\u672c\u5730\u6587\u4ef6\u5904\u4e8e\u540c\u4e00\u9636\u6bb5\u3002\u8fd9\u53ef\u7528\u4e8e\u786e\u5b9a\u5728\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u4e4b\u524d\u662f\u5426\u9700\u8981\u91cd\u542f server\u3002\u5728\u4e0a\u9762\u7684 HA \u4f8b\u5b50\u4e2d\uff0cnode-1 \u548c node-2 \u7684\u54c8\u5e0c\u503c\u4e0d\u540c\uff0c\u8bf4\u660e\u5b83\u4eec\u76ee\u524d\u6ca1\u6709\u76f8\u540c\u7684\u52a0\u5bc6\u914d\u7f6e\u3002\u91cd\u542f server \u5c06\u540c\u6b65\u5b83\u4eec\u7684\u914d\u7f6e\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Key Table"}),"\uff1a\u6c47\u603b\u5728\u8282\u70b9\u4e0a\u627e\u5230\u7684 Secret \u52a0\u5bc6\u5bc6\u94a5\u7684\u4fe1\u606f\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active"}),"\uff1a\u201c*\u201d\u8868\u793a\u5f53\u524d\u4f7f\u7528\u4e86\u54ea\u4e9b\u5bc6\u94a5\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u8fdb\u884cSecret \u52a0\u5bc6\u3002Kubernetes \u4f7f\u7528 active \u5bc6\u94a5\u6765\u52a0\u5bc6\u65b0\u7684 Secret\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Key Type"}),"\uff1a\u4f7f\u7528\u6b64\u5de5\u5177\u7684\u6240\u6709\u5bc6\u94a5\u90fd\u662f ",(0,r.jsx)(n.code,{children:"AES-CBC"})," \u7c7b\u578b\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers",children:"\u6b64\u5904"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),"\uff1a\u52a0\u5bc6\u5bc6\u94a5\u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>i});var r=s(7294);const c={},l=r.createContext(c);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);