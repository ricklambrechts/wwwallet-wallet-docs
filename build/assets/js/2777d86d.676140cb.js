"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=i,m=c["".concat(o,".").concat(h)]||c[h]||u[h]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},s="Getting started",l={unversionedId:"development-environment-setup/getting-started",id:"development-environment-setup/getting-started",title:"Getting started",description:"Prerequisites",source:"@site/docs/development-environment-setup/01-getting-started.md",sourceDirName:"development-environment-setup",slug:"/development-environment-setup/getting-started",permalink:"/wallet-docs/docs/development-environment-setup/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Development Environment Setup",permalink:"/wallet-docs/docs/category/development-environment-setup"},next:{title:"Enterprise Issuer",permalink:"/wallet-docs/docs/category/enterprise-issuer"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start the ecosystem",id:"start-the-ecosystem",level:2},{value:"Configure the ecosystem",id:"configure-the-ecosystem",level:2},{value:"Wallet: Create a Wallet Provider DID",id:"wallet-create-a-wallet-provider-did",level:3},{value:"Wallet: Register National VID Issuer as an Issuer in the Wallet Provider&#39;s private Trusted Issuers Registry",id:"wallet-register-national-vid-issuer-as-an-issuer-in-the-wallet-providers-private-trusted-issuers-registry",level:3},{value:"Wallet: Register the University of Athens as an Issuer in the Wallet Provider&#39;s private Trusted Issuers Registry",id:"wallet-register-the-university-of-athens-as-an-issuer-in-the-wallet-providers-private-trusted-issuers-registry",level:3},{value:"National VID Issuer: Register the Wallet Provider that we created as an OIDC client",id:"national-vid-issuer-register-the-wallet-provider-that-we-created-as-an-oidc-client",level:3},{value:"University of Athens Issuer: Register the Wallet Provider that we created as an OIDC client",id:"university-of-athens-issuer-register-the-wallet-provider-that-we-created-as-an-oidc-client",level:3},{value:"Enterprise Wallet Core: Create schemas and presentation definitions in order for the University of Athens Issuer to authenticate the users with VID",id:"enterprise-wallet-core-create-schemas-and-presentation-definitions-in-order-for-the-university-of-athens-issuer-to-authenticate-the-users-with-vid",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker & Docker Compose"),(0,i.kt)("li",{parentName:"ul"},"Visual Studio Code"),(0,i.kt)("li",{parentName:"ul"},"Docker VSCode extension"),(0,i.kt)("li",{parentName:"ul"},"Dev Containers VSCode extension")),(0,i.kt)("h2",{id:"start-the-ecosystem"},"Start the ecosystem"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone wallet-start repository")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:gunet/wallet-start.git\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Launch VSCode in the newly created ",(0,i.kt)("inlineCode",{parentName:"li"},"wallet-start")," folder"),(0,i.kt)("li",{parentName:"ol"},"Initialize and update submodules")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule init\ngit submodule update --remote\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Launch the ecosystem:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"chmod +x ecosystem.sh\n./ecosystem.sh up\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," command will build and start the containers with a default configuration for local development."),(0,i.kt)("p",null,"Run with ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," argument for more actions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./ecosystem.sh --help\n")),(0,i.kt)("p",null,"To shut down the ecosystem run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./ecosystem.sh down\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"After the containers are up, enter a container using ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl+Shift+P >Dev Containers: Attach to Running Container")," vscode command and selecting a dev container"),(0,i.kt)("li",{parentName:"ol"},"Move new VSCode workspace to the Work Directory folder (evident in development.Dockerfile), usually ",(0,i.kt)("inlineCode",{parentName:"li"},"/home/node/app"),".")),(0,i.kt)("h2",{id:"configure-the-ecosystem"},"Configure the ecosystem"),(0,i.kt)("p",null,"For demonstration purposes, we are going to set up a small ecosystem with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 Wallet Provider"),(0,i.kt)("li",{parentName:"ul"},"1 Credential Issuer (University of Athens)"),(0,i.kt)("li",{parentName:"ul"},"1 Credential VID Issuer (Gov Issuer)")),(0,i.kt)("p",null,"The steps we are going to follow are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#create-a-wallet-provider-did"},"Wallet: Create a Wallet Provider DID"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#wallet-register-national-vid-issuer-as-an-issuer-in-the-wallet-providers-private-trusted-issuers-registry"},"Wallet: Register National VID Issuer as an Issuer in the Wallet Provider's private Trusted Issuers Registry"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#wallet-register-the-university-of-athens-as-an-issuer-in-the-wallet-providers-private-trusted-issuers-registry"},"Wallet: Register the University of Athens as an Issuer in the Wallet Provider's private Trusted Issuers Registry"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#national-vid-issuer-register-the-wallet-provider-that-we-created-as-an-oidc-client"},"National VID Issuer: Register the Wallet Provider that we created as an OIDC client"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#university-of-athens-issuer-register-the-wallet-provider-that-we-created-as-an-oidc-client"},"University of Athens Issuer: Register the Wallet Provider that we created as an OIDC client"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#enterprise-wallet-core-create-schemas-and-presentation-definitions-in-order-for-the-university-of-athens-issuer-to-authenticate-the-users-with-vid"},"Enterprise Wallet Core: Create schemas and presentation definitions in order for the University of Athens Issuer to authenticate the users with VID")))),(0,i.kt)("h3",{id:"wallet-create-a-wallet-provider-did"},"Wallet: Create a Wallet Provider DID"),(0,i.kt)("p",null,"In order for a wallet to be able to receive verifiable credentials from an Enterprise Issuer, it must first be registered\nas a Client to an Enterprise Issuer with a DID."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet-start/")," directory, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'chmod +x $PWD/wallet-backend/cli/configwallet\nexport PATH="$PWD/wallet-backend/cli:$PATH"\nexport DB_HOST="127.0.0.1"\nexport DB_PORT="3307"\nexport DB_USER="root"\nexport DB_PASSWORD="root"\nexport DB_NAME="wallet"\nconfigwallet create did -n admin -p sdfsdfewwerweweer  # this command will generate a key-pair and the JWK will be exposed in the /jwks endpoint.\n')),(0,i.kt)("p",null,"You can now use this generated DID on the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/config.development.ts")," as ",(0,i.kt)("strong",{parentName:"p"},"providerDID"),'. By default it will be set to "admin"'),(0,i.kt)("h3",{id:"wallet-register-national-vid-issuer-as-an-issuer-in-the-wallet-providers-private-trusted-issuers-registry"},"Wallet: Register National VID Issuer as an Issuer in the Wallet Provider's private Trusted Issuers Registry"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet-start/")," directory, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'chmod +x $PWD/wallet-backend/cli/configwallet\nexport PATH="$PWD/wallet-backend/cli:$PATH"\nexport DB_HOST="127.0.0.1"\nexport DB_PORT="3307"\nexport DB_USER="root"\nexport DB_PASSWORD="root"\nexport DB_NAME="wallet"\nconfigwallet create issuer \\\n    --friendlyName \'National VID Issuer\' \\\n    --url http://127.0.0.1:8003 \\\n    --did did:ebsi:zyhE5cJ7VVqYT4gZmoKadFt \\\n    --client_id did:ebsi:zyhE5cJ7VVqYT4gZmoKadFt\n')),(0,i.kt)("h3",{id:"wallet-register-the-university-of-athens-as-an-issuer-in-the-wallet-providers-private-trusted-issuers-registry"},"Wallet: Register the University of Athens as an Issuer in the Wallet Provider's private Trusted Issuers Registry"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet-start/")," directory, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'chmod +x $PWD/wallet-backend/cli/configwallet\nexport PATH="$PWD/wallet-backend/cli:$PATH"\nexport DB_HOST="127.0.0.1"\nexport DB_PORT="3307"\nexport DB_USER="root"\nexport DB_PASSWORD="root"\nexport DB_NAME="wallet"\nconfigwallet create issuer \\\n    --friendlyName \'University of Athens\' \\\n    --url http://127.0.0.1:8000 \\\n    --did did:ebsi:zpq1XFkNWgsGB6MuvJp21vA \\\n    --client_id did:ebsi:zpq1XFkNWgsGB6MuvJp21vA\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"did")," must be the DID of the issuer"),(0,i.kt)("p",null,"Now that the DID of the Wallet Provider has been generated, the Wallet Provider must provide this DID through a secure off-bound process to an Enterprise Issuer who will trust client assertions issued with the corresponding public key in the /jwks endpoint."),(0,i.kt)("h3",{id:"national-vid-issuer-register-the-wallet-provider-that-we-created-as-an-oidc-client"},"National VID Issuer: Register the Wallet Provider that we created as an OIDC client"),(0,i.kt)("admonition",{title:"Warning",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," must be the DID of the Wallet Provider. ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect_uri")," must be the URI which points to the wallet client. For demonstration purposes,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect_uri"),' will be a wallet mock server that we set up, but on production phase it will be "openid://". The ',(0,i.kt)("inlineCode",{parentName:"p"},"jwks_uri")," is a URL in which all public keys of the wallet clients are available.")),(0,i.kt)("p",null,"On the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet-start/")," directory, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'chmod +x $PWD/enterprise-vid-issuer/cli/configiss\nexport PATH="$PWD/enterprise-vid-issuer/cli:$PATH"\nexport DB_HOST="127.0.0.1"\nexport DB_PORT=3307\nexport DB_USER=root\nexport DB_PASSWORD=root\nexport DB_NAME=vidissuer\nconfigiss client remove --client_id did:key:dsfddfdf233e\nconfigiss client create --client_id did:key:dsfddfdf233e --client_secret wallet-secret --redirect_uri http://127.0.0.1:7777 --jwks_uri http://127.0.0.1:8002/jwks\n')),(0,i.kt)("h3",{id:"university-of-athens-issuer-register-the-wallet-provider-that-we-created-as-an-oidc-client"},"University of Athens Issuer: Register the Wallet Provider that we created as an OIDC client"),(0,i.kt)("p",null,"On the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet-start/")," directory, run the following commands:"),(0,i.kt)("admonition",{title:"Warning",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," must be the DID of the Wallet Provider. ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect_uri")," must be the URI which points to the wallet client. For demonstration purposes,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect_uri"),' will be a wallet mock server that we set up, but on production phase it will be "openid://". The ',(0,i.kt)("inlineCode",{parentName:"p"},"jwks_uri")," is a URL in which all public keys of the wallet clients are available.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'chmod +x $PWD/enterprise-issuer/cli/configiss\nexport PATH="$PWD/enterprise-issuer/cli:$PATH"\nexport DB_HOST="127.0.0.1"\nexport DB_PORT=3307\nexport DB_USER=root\nexport DB_PASSWORD=root\nexport DB_NAME=issuer\nconfigiss client remove --client_id did:key:dsfddfdf233e\nconfigiss client create --client_id did:key:dsfddfdf233e --client_secret wallet-secret --redirect_uri http://127.0.0.1:7777 --jwks_uri http://127.0.0.1:8002/jwks\n')),(0,i.kt)("h3",{id:"enterprise-wallet-core-create-schemas-and-presentation-definitions-in-order-for-the-university-of-athens-issuer-to-authenticate-the-users-with-vid"},"Enterprise Wallet Core: Create schemas and presentation definitions in order for the University of Athens Issuer to authenticate the users with VID"),(0,i.kt)("p",null,"Alter the file ",(0,i.kt)("inlineCode",{parentName:"p"},"enterprise-wallet-core/cli/config.yaml")," to create your schemas and presentation definitions."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet-start/")," directory, run the following to insert the transaction described in the config.yaml."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The ./configver command will insert the schemas and presentation definitions described in the ",(0,i.kt)("inlineCode",{parentName:"p"},"enterprise-wallet-core/cli/config.yaml")," but not update them. This will change in later versions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=enterprise-wallet-core/cli/config.yaml",title:"enterprise-wallet-core/cli/config.yaml"},'schemas:\n  EuropassId:\n    title: Diploma Europass With Id\n    uri: https://api-pilot.ebsi.eu/trusted-schemas-registry/v2/schemas/0x4dd3926cd92bb3cb64fa6c837539ed31fc30dd38a11266a91678efa7268cde09\n    scopes:\n      id:\n        path: credentialSubject.id\n\n  VID:\n    title: Verifiable ID\n    uri: https://api-pilot.ebsi.eu/trusted-schemas-registry/v2/schemas/z8Y6JJnebU2UuQQNc2R8GYqkEiAMj3Hd861rQhsoNWxsM\n    scopes:\n      personalIdentifier:\n        path: credentialSubject.personalIdentifier\n\n\npresentation_definitions:\n  MyEuropassId:\n    title: Diploma Europass\n    description: A Presentation Definition containing Europass credentials\n    requirements:\n      EuropassId:\n        scopes:\n          - id\n    visibility: true\n    expirationDate: "1-1-2030"\n\n  VIDwithPersonalID:\n    title: VID with Personal Identifier\n    description: Requesting VID with Personal Identifier as Required\n    requirements:\n      VID:\n        scopes:\n          - personalIdentifier\n    visibility: true\n    expirationDate: "1-1-2030"\n\n')),(0,i.kt)("p",null,"Run the following commands in ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet-start/")," directory in order to register the Schemas and Presentation Definitions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'chmod +x $PWD/enterprise-wallet-core/cli/configver\nexport PATH="$PWD/enterprise-wallet-core/cli:$PATH"\nexport SERVICE_URL=http://127.0.0.1:9000\nexport ENTERPRISE_CORE_USER=""\nexport ENTERPRISE_CORE_SECRET=""\nconfigver clear  # clear old configuration\nconfigver       # send the new configuration\n')))}u.isMDXComponent=!0}}]);