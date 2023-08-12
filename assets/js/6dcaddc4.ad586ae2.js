"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[7577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Development",sidebar_position:4},a=void 0,s={unversionedId:"development/index",id:"development/index",title:"Development",description:"Architecture",source:"@site/docs/development/index.md",sourceDirName:"development",slug:"/development/",permalink:"/docs/development/",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/development/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Development",sidebar_position:4},sidebar:"userguide",previous:{title:"\u2753 FAQ",permalink:"/docs/user-guide/faq"},next:{title:"Contribution",permalink:"/docs/development/contribution/"}},l={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Backend",id:"backend",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Database",id:"database",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Currently the setup is split up into for different containers. In this document the general architecture and reason for the components will be explained"),(0,o.kt)("h3",{id:"backend"},"Backend"),(0,o.kt)("p",null,"The Backend uses Django as a Framework. Everything the generally applies to Django can be applied to LibrePhotos. If there is some feature that is in Django, but not yet in LibrePhotos, then this would be quite easy to add."),(0,o.kt)("p",null,"In general there are four process running in the backend."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a Webserver and for the handling of general API calls we use Gunicorn. Scaling works here with the worker argument Gunicorn provides-"),(0,o.kt)("li",{parentName:"ul"},"For long running jobs we use django_q2 with ORM settings. Scaling works here with the HEAVYWORKER env variable."),(0,o.kt)("li",{parentName:"ul"},"A image similarity service is also hosted, which uses faiss. If you want to get similar images or if you want to search semantically, this is needed."),(0,o.kt)("li",{parentName:"ul"},"A thumbnail service, which generates thumbnails. Pretty selfexplanatory, is only used, because pytorch and imagemagick do not play nice together.")),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"Pretty simple container. In production this is just a static webserver with the build frontend project. The dev version installs the right packages with the right node versions to seamlessly work."),(0,o.kt)("h3",{id:"proxy"},"Proxy"),(0,o.kt)("p",null,"We use a reverse proxy to handle traffic from outside to the frontend and backend. We use NGNIX for it. Serving actual images and videos is also done with NGINX, because it is better at it then Django."),(0,o.kt)("h3",{id:"database"},"Database"),(0,o.kt)("p",null,"This is usually Postgres, but maybe could be different databases in the future. However there are still two or three features depending on Postgres running."))}p.isMDXComponent=!0}}]);