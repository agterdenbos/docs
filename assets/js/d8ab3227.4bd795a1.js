"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6501],{6875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(5893),s=t(1151);const r={title:"Distributed hybrid or multicloud cluster",weight:25},o=void 0,l={id:"networking/distributed-multicloud",title:"Distributed hybrid or multicloud cluster",description:"A K3s cluster can still be deployed on nodes which do not share a common private network and are not directly connected (e.g. nodes in different public clouds). There are two options to achieve this: the embedded k3s multicloud solution and the integration with the tailscale VPN provider.",source:"@site/docs/networking/distributed-multicloud.md",sourceDirName:"networking",slug:"/networking/distributed-multicloud",permalink:"/networking/distributed-multicloud",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/distributed-multicloud.md",tags:[],version:"current",lastUpdatedAt:1712593734e3,frontMatter:{title:"Distributed hybrid or multicloud cluster",weight:25},sidebar:"mySidebar",previous:{title:"Basic Network Options",permalink:"/networking/basic-network-options"},next:{title:"Multus and IPAM plugins",permalink:"/networking/multus-ipams"}},a={},d=[{value:"Embedded k3s multicloud solution",id:"embedded-k3s-multicloud-solution",level:3},{value:"Integration with the Tailscale VPN provider (experimental)",id:"integration-with-the-tailscale-vpn-provider-experimental",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["A K3s cluster can still be deployed on nodes which do not share a common private network and are not directly connected (e.g. nodes in different public clouds). There are two options to achieve this: the embedded k3s multicloud solution and the integration with the ",(0,i.jsx)(n.code,{children:"tailscale"})," VPN provider."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The latency between nodes will increase as external connectivity requires more hops. This will reduce the network performance and could also impact the health of the cluster if latency is too high."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Embedded etcd is not supported in this type of deployment. If using embedded etcd, all server nodes must be reachable to each other via their private IPs. Agents may be distributed over multiple networks, but all servers should be in the same location."})}),"\n",(0,i.jsx)(n.h3,{id:"embedded-k3s-multicloud-solution",children:"Embedded k3s multicloud solution"}),"\n",(0,i.jsx)(n.p,{children:"K3s uses wireguard to establish a VPN mesh for cluster traffic. Nodes must each have a unique IP through which they can be reached (usually a public IP). K3s supervisor traffic will use a websocket tunnel, and cluster (CNI) traffic will use a wireguard tunnel."}),"\n",(0,i.jsx)(n.p,{children:"To enable this type of deployment, you must add the following parameters on servers:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--node-external-ip=<SERVER_EXTERNAL_IP> --flannel-backend=wireguard-native --flannel-external-ip\n"})}),"\n",(0,i.jsx)(n.p,{children:"and on agents:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--node-external-ip=<AGENT_EXTERNAL_IP>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["where ",(0,i.jsx)(n.code,{children:"SERVER_EXTERNAL_IP"})," is the IP through which we can reach the server node and ",(0,i.jsx)(n.code,{children:"AGENT_EXTERNAL_IP"})," is the IP through which we can reach the agent node. Note that the ",(0,i.jsx)(n.code,{children:"K3S_URL"})," config parameter in the agent should use the ",(0,i.jsx)(n.code,{children:"SERVER_EXTERNAL_IP"})," to be able to connect to it. Remember to check the ",(0,i.jsx)(n.a,{href:"/installation/requirements#networking",children:"Networking Requirements"})," and allow access to the listed ports on both internal and external addresses."]}),"\n",(0,i.jsxs)(n.p,{children:["Both ",(0,i.jsx)(n.code,{children:"SERVER_EXTERNAL_IP"})," and ",(0,i.jsx)(n.code,{children:"AGENT_EXTERNAL_IP"})," must have connectivity between them and are normally public IPs."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Dynamic IPs",type:"info",children:[(0,i.jsxs)(n.p,{children:["If nodes are assigned dynamic IPs and the IP changes (e.g. in AWS), you must modify the ",(0,i.jsx)(n.code,{children:"--node-external-ip"})," parameter to reflect the new IP. If running K3s as a service, you must modify ",(0,i.jsx)(n.code,{children:"/etc/systemd/system/k3s.service"})," then run:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl restart k3s\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"integration-with-the-tailscale-vpn-provider-experimental",children:"Integration with the Tailscale VPN provider (experimental)"}),"\n",(0,i.jsx)(n.p,{children:"Available in v1.27.3, v1.26.6, v1.25.11 and newer."}),"\n",(0,i.jsxs)(n.p,{children:["K3s can integrate with ",(0,i.jsx)(n.a,{href:"https://tailscale.com/",children:"Tailscale"})," so that nodes use the Tailscale VPN service to build a mesh between nodes."]}),"\n",(0,i.jsx)(n.p,{children:"There are four steps to be done with Tailscale before deploying K3s:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to your Tailscale account"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"Settings > Keys"}),", generate an auth key ($AUTH-KEY), which may be reusable for all nodes in your cluster"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Decide on the podCIDR the cluster will use (by default ",(0,i.jsx)(n.code,{children:"10.42.0.0/16"}),"). Append the CIDR (or CIDRs for dual-stack) in Access controls with the stanza:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'"autoApprovers": {\n        "routes": {\n            "10.42.0.0/16":        ["your_account@xyz.com"],\n            "2001:cafe:42::/56": ["your_account@xyz.com"],\n        },\n    },\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Install Tailscale in your nodes:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://tailscale.com/install.sh | sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"To deploy K3s with Tailscale integration enabled, you must add the following parameter on each of your nodes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--vpn-auth="name=tailscale,joinKey=$AUTH-KEY\n'})}),"\n",(0,i.jsx)(n.p,{children:"or provide that information in a file and use the parameter:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--vpn-auth-file=$PATH_TO_FILE\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Optionally, if you have your own Tailscale server (e.g. headscale), you can connect to it by appending ",(0,i.jsx)(n.code,{children:",controlServerURL=$URL"})," to the vpn-auth parameters"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["If you plan on running several K3s clusters using the same tailscale network, please create appropriate ",(0,i.jsx)(n.a,{href:"https://tailscale.com/kb/1018/acls/",children:"ACLs"})," to avoid IP conflicts or use different podCIDR subnets for each cluster."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);