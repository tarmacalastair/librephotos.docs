"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[564],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return o?n.createElement(m,l(l({ref:t},c),{},{components:o})):n.createElement(m,l({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6541:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={title:"\ud83d\udc77\u200d\u2642\ufe0f Installation",excerpt:"How to install LibrePhotos for Developers",last_modified_at:new Date("2021-05-31T00:00:00.000Z"),category:1},l=void 0,a={unversionedId:"development/dev-install",id:"development/dev-install",title:"\ud83d\udc77\u200d\u2642\ufe0f Installation",description:"Quality Gate Status Discord Website GitHub contributors",source:"@site/docs/development/dev-install.md",sourceDirName:"development",slug:"/development/dev-install",permalink:"/docs/development/dev-install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/development/dev-install.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udc77\u200d\u2642\ufe0f Installation",excerpt:"How to install LibrePhotos for Developers",last_modified_at:"2021-05-31T00:00:00.000Z",category:1},sidebar:"userguide",previous:{title:"\ud83d\udcf1 Mobile",permalink:"/docs/development/contribution/mobile"}},s={},p=[{value:"For Developers",id:"for-developers",level:2},{value:"Setting up in Linux",id:"setting-up-in-linux",level:3},{value:"Setting up in Windows",id:"setting-up-in-windows",level:3},{value:"Configuring the environment",id:"configuring-the-environment",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://sonarcloud.io/dashboard?id=LibrePhotos_ownphotos"},(0,r.kt)("img",{parentName:"a",src:"https://sonarcloud.io/api/project_badges/measure?project=LibrePhotos_ownphotos&metric=alert_status",alt:"Quality Gate Status"}))," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/discord/784619049208250388?style=plastic",alt:"Discord"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/website?down_color=lightgrey&down_message=offline&style=plastic&up_color=blue&up_message=online&url=https%3A%2F%2Flibrephotos.com",alt:"Website"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/contributors/librephotos/librephotos?style=plastic",alt:"GitHub contributors"})),(0,r.kt)("h2",{id:"for-developers"},"For Developers"),(0,r.kt)("p",null,"Create a directory for the project: this is where all the Git repositories will be cloned into. In this guide, we will\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/librephotos")," as an example."),(0,r.kt)("p",null,"Pull frontend code with ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/LibrePhotos/librephotos-frontend.git ")),(0,r.kt)("p",null,"Pull backend code into ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/LibrePhotos/librephotos.git ")),(0,r.kt)("p",null,"Pull librephotos-docker repo ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/LibrePhotos/librephotos-docker.git")),(0,r.kt)("h3",{id:"setting-up-in-linux"},"Setting up in Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"codedir=/dev/librephotos\ncd ${codedir}\ngit clone https://github.com/LibrePhotos/librephotos-frontend.git\ngit clone https://github.com/LibrePhotos/librephotos.git\ngit clone https://github.com/LibrePhotos/librephotos-docker.git\n")),(0,r.kt)("h3",{id:"setting-up-in-windows"},"Setting up in Windows"),(0,r.kt)("p",null,"In PowerShell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$Env:codedir = "/dev/librephotos"\nCD $Env:codedir\ngit clone https://github.com/LibrePhotos/librephotos-frontend.git\ngit clone https://github.com/LibrePhotos/librephotos.git\ngit clone https://github.com/LibrePhotos/librephotos-docker.git\n')),(0,r.kt)("h3",{id:"configuring-the-environment"},"Configuring the environment"),(0,r.kt)("p",null,"Set the needed variables in .env (take librephotos.env as model). Make sure you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"codedir")," variable that tells\ndocker where your source folders are. this should be the same path as used to clone your repos."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d")),(0,r.kt)("p",null,"This will build images from scratch (can take a long time the first time). Now you can develop and benefit from code\nauto reload from both backend and frontend"),(0,r.kt)("p",null,"If you already built this image once, when you do force rebuild you have to run the build command based on which area\nyou changed with added dependencies/libraries etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f docker-compose.dev.yml  build --no-cache frontend\n# OR\ndocker-compose -f docker-compose.yml -f docker-compose.dev.yml  build --no-cache backend\n")),(0,r.kt)("p",null,"Once you have rebuilt, you can run the docker compose up command again to update the running instances."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d\n")),(0,r.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,r.kt)("p",null,"If you use Visual Studio Code, you can also benefit from auto-completion and other goodies. For this, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"code ."),"\nin your Dockerfile folder, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/librephotos/librephotos-docker")," in our example."),(0,r.kt)("p",null,"Visual Studio Code will open and ask you if you want to reopen it in the container. If you do, it will create the images\nfrom scratch (first time you do it can take a couple of minutes), and you will have the same Python interpreter\nLibrePhotos uses internally - and hence the same installed libraries in auto completion, and the same development\nenvironment, will be shared by all devs. This includes tools like ",(0,r.kt)("a",{parentName:"p",href:"https://pycqa.github.io/isort/"},"isort"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://flake8.pycqa.org/en/latest/"},"flake8")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.pylint.org/"},"pylint"),"."),(0,r.kt)("p",null,"Alternatively, you can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"Remote-Containers: Open Folder in Container")," command from the Command Palette. Note\nin order to open this container, you must have the required dependencies installed. More details can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},"here"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Next, take a look at the ","[first steps after setup]","({% post_url user_guide/0000-02-01-first_steps %})."))}u.isMDXComponent=!0}}]);