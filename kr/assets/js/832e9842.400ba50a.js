"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(n),m=r,g=k["".concat(d,".").concat(m)]||k[m]||s[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(3117),r=(n(7294),n(3905));const l={title:"agent",weight:2},i="k3s agent",o={unversionedId:"cli/agent",id:"cli/agent",title:"agent",description:"In this section, you'll learn how to configure the K3s agent.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/agent.md",sourceDirName:"cli",slug:"/cli/agent",permalink:"/kr/cli/agent",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/agent.md",tags:[],version:"current",lastUpdatedAt:1682961925,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"agent",weight:2},sidebar:"mySidebar",previous:{title:"server",permalink:"/kr/cli/server"},next:{title:"certificate",permalink:"/kr/cli/certificate"}},d={},u=[{value:"Logging",id:"logging",level:3},{value:"Cluster Options",id:"cluster-options",level:3},{value:"Data",id:"data",level:3},{value:"Node",id:"node",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Networking",id:"networking",level:3},{value:"Customized Flags",id:"customized-flags",level:3},{value:"Experimental",id:"experimental",level:3},{value:"Deprecated",id:"deprecated",level:3},{value:"Node Labels and Taints for Agents",id:"node-labels-and-taints-for-agents",level:3},{value:"K3s Agent CLI Help",id:"k3s-agent-cli-help",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"k3s-agent"},"k3s agent"),(0,r.kt)("p",null,"In this section, you'll learn how to configure the K3s agent."),(0,r.kt)("p",null,"Note that servers also run an agent, so all flags listed on this page are also valid for use on servers."),(0,r.kt)("p",null,"Options are documented on this page as CLI flags, but can also be passed as configuration file options. See the ",(0,r.kt)("a",{parentName:"p",href:"/kr/installation/configuration#configuration-file"},"Configuration File")," documentation for more information on using YAML configuration files."),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-v")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Number for the log level verbosity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--vmodule")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma-separated list of FILE_PATTERN=LOG_LEVEL settings for file-filtered logging")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--log value, -l")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Log to file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--alsologtostderr")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Log to standard error as well as file (if set)")))),(0,r.kt)("h3",{id:"cluster-options"},"Cluster Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--token value, -t")," value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_TOKEN")),(0,r.kt)("td",{parentName:"tr",align:null},"Token to use for authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--token-file")," value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_TOKEN_FILE")),(0,r.kt)("td",{parentName:"tr",align:null},"Token file to use for authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--server value, -s")," value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_URL")),(0,r.kt)("td",{parentName:"tr",align:null},"Server to connect to")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir value, -d")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'"/var/lib/rancher/k3s"'),(0,r.kt)("td",{parentName:"tr",align:null},"Folder to hold state")))),(0,r.kt)("h3",{id:"node"},"Node"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--node-name")," value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_NODE_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},"Node name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--with-node-id")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Append id to node name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--node-label")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Registering and starting kubelet with set of labels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--node-taint")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Registering kubelet with set of taints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--protect-kernel-defaults")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Kernel tuning behavior. If set, error if kernel tunables are different from kubelet defaults.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--selinux")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_SELINUX")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable SELinux in containerd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--lb-server-port")," value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_LB_SERVER_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer. (default: 6444)")))),(0,r.kt)("h3",{id:"runtime"},"Runtime"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--container-runtime-endpoint")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable embedded containerd and use the CRI socket at the given path; when used with --docker this sets the cri-docker socket path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--pause-image")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'"docker.io/rancher/pause:3.1"'),(0,r.kt)("td",{parentName:"tr",align:null},"Customized pause image for containerd or docker sandbox")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--private-registry")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'"/etc/rancher/k3s/registries.yaml"'),(0,r.kt)("td",{parentName:"tr",align:null},"Private registry configuration file")))),(0,r.kt)("h3",{id:"networking"},"Networking"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--node-ip value, -i")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"IP address to advertise for node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--node-external-ip")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"External IP address to advertise for node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--resolv-conf")," value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_RESOLV_CONF")),(0,r.kt)("td",{parentName:"tr",align:null},"Kubelet resolv.conf file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-iface")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Override default flannel interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-conf")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Override default flannel config file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-cni-conf")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Override default flannel cni config file")))),(0,r.kt)("h3",{id:"customized-flags"},"Customized Flags"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubelet-arg")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Customized flag for kubelet process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-proxy-arg")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Customized flag for kube-proxy process")))),(0,r.kt)("h3",{id:"experimental"},"Experimental"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--rootless")),(0,r.kt)("td",{parentName:"tr",align:null},"Run rootless")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--docker")),(0,r.kt)("td",{parentName:"tr",align:null},"Use cri-dockerd instead of containerd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--prefer-bundled-bin")),(0,r.kt)("td",{parentName:"tr",align:null},"Prefer bundled userspace binaries over host binaries")))),(0,r.kt)("h3",{id:"deprecated"},"Deprecated"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--no-flannel")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=none"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cluster-secret")," value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_CLUSTER_SECRET")),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"--token"))))),(0,r.kt)("h3",{id:"node-labels-and-taints-for-agents"},"Node Labels and Taints for Agents"),(0,r.kt)("p",null,"K3s agents can be configured with the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-label")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-taint")," which adds a label and taint to the kubelet. The two options only add labels and/or taints at registration time, so they can only be added once and not changed after that again by running K3s commands."),(0,r.kt)("p",null,"Below is an example showing how to add labels and a taint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"     --node-label foo=bar \\\n     --node-label hello=world \\\n     --node-taint key1=value1:NoExecute\n")),(0,r.kt)("p",null,"If you want to change node labels and taints after node registration you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". Refer to the official Kubernetes documentation for details on how to add ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node"},"node labels.")),(0,r.kt)("h3",{id:"k3s-agent-cli-help"},"K3s Agent CLI Help"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If an option appears in brackets below, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"[$K3S_URL]"),", it means that the option can be passed in as an environment variable of that name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'NAME:\n   k3s agent - Run node agent\n\nUSAGE:\n   k3s agent [OPTIONS]\n\nOPTIONS:\n   --config FILE, -c FILE                     (config) Load configuration from FILE (default: "/etc/rancher/k3s/config.yaml") [$K3S_CONFIG_FILE]\n   --debug                                    (logging) Turn on debug logs [$K3S_DEBUG]\n   -v value                                   (logging) Number for the log level verbosity (default: 0)\n   --vmodule value                            (logging) Comma-separated list of FILE_PATTERN=LOG_LEVEL settings for file-filtered logging\n   --log value, -l value                      (logging) Log to file\n   --alsologtostderr                          (logging) Log to standard error as well as file (if set)\n   --token value, -t value                    (cluster) Token to use for authentication [$K3S_TOKEN]\n   --token-file value                         (cluster) Token file to use for authentication [$K3S_TOKEN_FILE]\n   --server value, -s value                   (cluster) Server to connect to [$K3S_URL]\n   --data-dir value, -d value                 (agent/data) Folder to hold state (default: "/var/lib/rancher/k3s")\n   --node-name value                          (agent/node) Node name [$K3S_NODE_NAME]\n   --with-node-id                             (agent/node) Append id to node name\n   --node-label value                         (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                         (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value  (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value   (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --selinux                                  (agent/node) Enable SELinux in containerd [$K3S_SELINUX]\n   --lb-server-port value                     (agent/node) Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer. (default: 6444) [$K3S_LB_SERVER_PORT]\n   --protect-kernel-defaults                  (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --container-runtime-endpoint value         (agent/runtime) Disable embedded containerd and use the CRI socket at the given path; when used with --docker this sets the docker socket path\n   --pause-image value                        (agent/runtime) Customized pause image for containerd or docker sandbox (default: "rancher/mirrored-pause:3.6")\n   --snapshotter value                        (agent/runtime) Override default containerd snapshotter (default: "overlayfs")\n   --private-registry value                   (agent/runtime) Private registry configuration file (default: "/etc/rancher/k3s/registries.yaml")\n   --node-ip value, -i value                  (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                   (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                        (agent/networking) Kubelet resolv.conf file [$K3S_RESOLV_CONF]\n   --flannel-iface value                      (agent/networking) Override default flannel interface\n   --flannel-conf value                       (agent/networking) Override default flannel config file\n   --flannel-cni-conf value                   (agent/networking) Override default flannel cni config file\n   --kubelet-arg value                        (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                     (agent/flags) Customized flag for kube-proxy process\n   --rootless                                 (experimental) Run rootless\n   --prefer-bundled-bin                       (experimental) Prefer bundled userspace binaries over host binaries\n   --docker                                   (agent/runtime) (experimental) Use cri-dockerd instead of containerd\n')))}s.isMDXComponent=!0}}]);