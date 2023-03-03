"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[673],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3942:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={title:"\ud83d\udc0b Docker",excerpt:"How to install Libre Photos using Docker and Docker Compose.",sidebar_position:1},i=void 0,l={unversionedId:"installation/standard-install",id:"installation/standard-install",title:"\ud83d\udc0b Docker",description:"Docker Compose",source:"@site/docs/installation/standard-install.md",sourceDirName:"installation",slug:"/installation/standard-install",permalink:"/docs/installation/standard-install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/standard-install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udc0b Docker",excerpt:"How to install Libre Photos using Docker and Docker Compose.",sidebar_position:1},sidebar:"userguide",previous:{title:"Installation",permalink:"/docs/installation/"},next:{title:"\ud83c\udf53 Raspbery Pi Installation",permalink:"/docs/installation/raspberry-pi"}},s={},p=[{value:"Docker Compose",id:"docker-compose",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Size",id:"size",level:3},{value:"\ud83d\ude80 Installation",id:"-installation",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Updating",id:"updating",level:3},{value:"Docker",id:"docker",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"We recommend you use docker compose as this matches the demo and development environment the most."),(0,r.kt)("h3",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"You need a x86 or a ARM64 processor, and it is recommended to have 4GBs of RAM. Due to limited ram & processing power ARM64 will not be as fast."),(0,r.kt)("h3",{id:"size"},"Size"),(0,r.kt)("p",null,"You will need at least 10 GB of HDD Space for the docker images. It needs that space because of the machine learning\nmodels. Librephotos will also create a database and thumbnails which will need additional space."),(0,r.kt)("h3",{id:"-installation"},"\ud83d\ude80 Installation"),(0,r.kt)("p",null,"Clone the repo: ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/LibrePhotos/librephotos-docker.git")),(0,r.kt)("p",null,"Navigate to the librephotos-docker folder: ",(0,r.kt)("inlineCode",{parentName:"p"},"cd librephotos-docker")),(0,r.kt)("p",null,"Copy the template variable file (containing options such as the location of your photos): ",(0,r.kt)("inlineCode",{parentName:"p"},"cp librephotos.env .env")),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," in your favorite text editor and make the required changes. E.g., using nano: ",(0,r.kt)("inlineCode",{parentName:"p"},"nano .env")),(0,r.kt)("p",null,"Do not forget to create the directories you specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file if they do not exist."),(0,r.kt)("p",null,"Start LibrePhotos with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")),(0,r.kt)("p",null,"You should have LibrePhotos accessible after a few minutes of boot-up on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Next, take a look at the ","[first steps after setup]","({% post_url user_guide/0000-02-01-first_steps %})."),(0,r.kt)("h3",{id:"updating"},"Updating"),(0,r.kt)("p",null,"To update LibrePhotos when using Docker Compose, navigate to the librephotos-docker folder that was created when you installed LibrePhotos."),(0,r.kt)("p",null,"Then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose down\ndocker-compose pull\ndocker-compose up -d\n")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("p",null,"Overview of the folders that can be mounted as volumes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/librephotos/photos/")," your actual photos"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/librephotos/data/protected_media/")," thumbnails"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/var/log/librephotos/")," logs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/postgresql/data/")," database")),(0,r.kt)("p",null,"Replace the first part that is in brackets with the actual location of the folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run -v <photos>:/var/lib/librephotos/photos/ -v <thumbnails>:/var/lib/librephotos/data/protected_media -v <logs>:/var/log/librephotos/ -v <db>:/var/lib/postgresql/data -p 3000:80 -d reallibrephotos/singleton\n")),(0,r.kt)("p",null,"If you run into any permission issue add ",(0,r.kt)("inlineCode",{parentName:"p"},"-e FIXPERMISSIONS=true")," or change the permission to allow read/write/exectute for others of your photos folder."))}u.isMDXComponent=!0}}]);