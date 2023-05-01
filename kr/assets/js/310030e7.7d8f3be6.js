"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(h,i(i({ref:t},k),{},{components:n})):a.createElement(h,i({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(3117),r=(n(7294),n(3905));const o={title:"token"},i="k3s token",l={unversionedId:"cli/token",id:"cli/token",title:"token",description:"K3s uses tokens to secure the node join process. Tokens authenticate the cluster to the joining node, and the node to the cluster.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/token.md",sourceDirName:"cli",slug:"/cli/token",permalink:"/kr/cli/token",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/token.md",tags:[],version:"current",lastUpdatedAt:1682961925,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"token"},sidebar:"mySidebar",previous:{title:"secrets-encrypt",permalink:"/kr/cli/secrets-encrypt"},next:{title:"\ub808\ud37c\ub7f0\uc2a4",permalink:"/kr/reference/"}},s={},d=[{value:"Token Format",id:"token-format",level:2},{value:"Secure",id:"secure",level:3},{value:"TLS Bootstrapping",id:"tls-bootstrapping",level:4},{value:"Short",id:"short",level:3},{value:"Token Types",id:"token-types",level:2},{value:"Server",id:"server",level:3},{value:"Agent",id:"agent",level:3},{value:"Bootstrap",id:"bootstrap",level:3},{value:"k3s token",id:"k3s-token-1",level:2},{value:"<code>k3s token create [token]</code>",id:"k3s-token-create-token",level:4},{value:"<code>k3s token delete</code>",id:"k3s-token-delete",level:4},{value:"<code>k3s token generate</code>",id:"k3s-token-generate",level:4},{value:"<code>k3s token list</code>",id:"k3s-token-list",level:4}],k={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"k3s-token"},"k3s token"),(0,r.kt)("p",null,"K3s uses tokens to secure the node join process. Tokens authenticate the cluster to the joining node, and the node to the cluster."),(0,r.kt)("h2",{id:"token-format"},"Token Format"),(0,r.kt)("p",null,"K3s tokens can be specified in either secure or short format. The secure format is preferred, as it enables the client to authenticate the identity of the cluster it is joining, before sending credentials."),(0,r.kt)("h3",{id:"secure"},"Secure"),(0,r.kt)("p",null,'The secure token format (occasionally referred to as a "full" token) contains the following parts:'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<prefix><cluster CA hash>::<credentials>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix"),": a fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"K10")," prefix that identifies the token format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster CA hash"),": The hash of the cluster's server CA certificate, used to authenticate the server to the joining node.  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For self-signed CA certificates, this is the SHA256 sum of the PEM-formatted certificate, as stored on disk.  "),(0,r.kt)("li",{parentName:"ul"},"For custom CA certificates, this is the SHA256 sum of the DER encoding of the root certificate; commonly known as the certificate fingerprint."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"credentials"),": The username and password, or bearer token, used to authenticate the joining node to the cluster.")),(0,r.kt)("h4",{id:"tls-bootstrapping"},"TLS Bootstrapping"),(0,r.kt)("p",null,"When a secure token is specified, the joining node performs the following steps to validate the identity of the server it has connected to, before transmitting credentials:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"With TLS verification disabled, download the CA bundle from ",(0,r.kt)("inlineCode",{parentName:"li"},"/cacerts")," on the server it is joining."),(0,r.kt)("li",{parentName:"ol"},"Calculate the SHA256 hash of the CA certificate, as described above."),(0,r.kt)("li",{parentName:"ol"},"Compare the calculated SHA256 hash to the hash from the token."),(0,r.kt)("li",{parentName:"ol"},"If the hash matches, validate that the certificate presented by the server can be validated by the server's CA bundle."),(0,r.kt)("li",{parentName:"ol"},"If the server certificate is valid, present credentials to join the cluster using either basic or bearer token authentication, depending on the token type.")),(0,r.kt)("h3",{id:"short"},"Short"),(0,r.kt)("p",null,"The short token format includes only the password or bearer token used to authenticate the joining node to the cluster."),(0,r.kt)("p",null,"If a short token is used, the joining node implicitly trusts the CA bundle presented by the server; steps 2-4 in the TLS Bootstrapping process are skipped. The initial connection may be vulnerable to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"},"man-in-the-middle")," attack."),(0,r.kt)("h2",{id:"token-types"},"Token Types"),(0,r.kt)("p",null,"K3s supports three types of tokens. Only the server token is available by default; additional token types must be configured or created by the administrator."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"CLI Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--token")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_TOKEN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--agent-token")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_AGENT_TOKEN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n/a"))))),(0,r.kt)("h3",{id:"server"},"Server"),(0,r.kt)("p",null,"If no token is provided when starting the first server in the cluster, one is created with a random password. The server token is always written to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/token"),", in secure format."),(0,r.kt)("p",null,"The server token can be used to join both server and agent nodes to the cluster. It cannot be changed once the cluster has been created, and anyone with access to the server token essentially has full administrator access to the cluster. This token should be guarded carefully."),(0,r.kt)("p",null,"The server token is also used as the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PBKDF2"},"PBKDF2")," passphrase for the key used to encrypt confidential information that is persisted to the datastore, such as the secrets-encryption configuration, wireguard keys, and private keys for cluster CA certificates and service-account tokens. For this reason, the token must be backed up alongside the cluster datastore itself."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Unless custom CA certificates are in use, only the short (password-only) token format can be used when starting the first server in the cluster. This is because the cluster CA hash cannot be known until after the server has generated the self-signed cluster CA certificates.")),(0,r.kt)("p",null,"For more information on using custom CA certificates, see the ",(0,r.kt)("a",{parentName:"p",href:"/kr/cli/certificate#"},(0,r.kt)("inlineCode",{parentName:"a"},"k3s certificate")," documentation"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For more information on backing up your cluster, see the ",(0,r.kt)("a",{parentName:"p",href:"/kr/datastore/backup-restore"},"Backup and Restore")," documentation."),(0,r.kt)("h3",{id:"agent"},"Agent"),(0,r.kt)("p",null,"By default, the agent token is the same as the server token. The agent token can be set before or after the cluster has been started, by changing the CLI option or environment variable on all servers in the cluster. The agent token is similar to the server token in that is it statically configured, and does not expire."),(0,r.kt)("p",null,"The agent token is written to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/agent-token"),", in secure format. If no agent token is specified, this file is a link to the server token."),(0,r.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s token")," command and the ability to join nodes with bootstrap tokens is available starting with the 2023-02 releases (v1.26.2+k3s1, v1.25.7+k3s1, v1.24.11+k3s1, v1.23.17+k3s1).")),(0,r.kt)("p",null,"K3s supports dynamically generated, automatically expiring agent bootstrap tokens. Bootstrap tokens can only be used to join agents."),(0,r.kt)("h2",{id:"k3s-token-1"},"k3s token"),(0,r.kt)("p",null,"K3s bootstrap tokens use the same generation and validation code as ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm token")," bootstrap tokens, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s token")," CLI is similar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME:\n   k3s token - Manage bootstrap tokens\n\nUSAGE:\n   k3s token command [command options] [arguments...]\n\nCOMMANDS:\n   create    Create bootstrap tokens on the server\n   delete    Delete bootstrap tokens on the server\n   generate  Generate and print a bootstrap token, but do not create it on the server\n   list      List bootstrap tokens on the server\n\nOPTIONS:\n   --help, -h  show help\n")),(0,r.kt)("h4",{id:"k3s-token-create-token"},(0,r.kt)("inlineCode",{parentName:"h4"},"k3s token create [token]")),(0,r.kt)("p",null,"Create a new token. The ",(0,r.kt)("inlineCode",{parentName:"p"},"[token]")," is the actual token to write, as generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s token generate"),". If no token is given, a random one will be generated."),(0,r.kt)("p",null,"A token in secure format, including the cluster CA hash, will be written to stdout. The output of this command should be saved, as the secret portion of the token cannot be shown again."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"(data) Folder to hold state default /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubeconfig")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"(cluster) Server to connect to ","[$KUBECONFIG]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--description")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"A human friendly description of how this token is used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--groups")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'Extra groups that this token will authenticate as when used for authentication. (default: Default: "system:bootstrappers:k3s:default-node-token")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ttl")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"The duration before the token is automatically deleted (e.g. 1s, 2m, 3h). If set to '0', the token will never expire (default: 24h0m0s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--usages")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'Describes the ways in which this token can be used. (default: "signing,authentication")')))),(0,r.kt)("h4",{id:"k3s-token-delete"},(0,r.kt)("inlineCode",{parentName:"h4"},"k3s token delete")),(0,r.kt)("p",null,"Delete one or more tokens. The full token can be provided, or just the token ID."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"(data) Folder to hold state default /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubeconfig")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"(cluster) Server to connect to ","[$KUBECONFIG]")))),(0,r.kt)("h4",{id:"k3s-token-generate"},(0,r.kt)("inlineCode",{parentName:"h4"},"k3s token generate")),(0,r.kt)("p",null,"Generate a randomly-generated bootstrap token."),(0,r.kt)("p",null,"You don't have to use this command in order to generate a token. You can do so yourself as long as it is in the format \"","[a-z0-9]","{6}.","[a-z0-9]",'{16}", where the first portion is the token ID, and the second portion is the secret.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"(data) Folder to hold state default /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubeconfig")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"(cluster) Server to connect to ","[$KUBECONFIG]")))),(0,r.kt)("h4",{id:"k3s-token-list"},(0,r.kt)("inlineCode",{parentName:"h4"},"k3s token list")),(0,r.kt)("p",null,"List bootstrap tokens, showing their ID, description, and remaining time-to-live."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"(data) Folder to hold state default /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubeconfig")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"(cluster) Server to connect to ","[$KUBECONFIG]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'Output format. Valid options: text, json (default: "text")')))))}p.isMDXComponent=!0}}]);