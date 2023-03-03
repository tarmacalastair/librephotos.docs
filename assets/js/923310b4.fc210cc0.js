"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=o,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={title:"\ud83d\udcc5 Using date rules",excerpt:"How to use the date rules",sidebar_position:4},a=void 0,l={unversionedId:"user-guide/date-rules",id:"user-guide/date-rules",title:"\ud83d\udcc5 Using date rules",description:"Background information",source:"@site/docs/user-guide/date-rules.md",sourceDirName:"user-guide",slug:"/user-guide/date-rules",permalink:"/docs/user-guide/date-rules",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/date-rules.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udcc5 Using date rules",excerpt:"How to use the date rules",sidebar_position:4},sidebar:"userguide",previous:{title:"\ud83d\ude03 Face recognition",permalink:"/docs/user-guide/face-recognition"},next:{title:"\ud83d\udcf1  Mobile Apps",permalink:"/docs/user-guide/mobile"}},s={},u=[{value:"Background information",id:"background-information",level:2},{value:"Goal of the date rules",id:"goal-of-the-date-rules",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Figuring out the timezone",id:"figuring-out-the-timezone",level:3},{value:"The different rule types",id:"the-different-rule-types",level:3},{value:"How to use it",id:"how-to-use-it",level:2},{value:"Adding optional rules",id:"adding-optional-rules",level:3},{value:"Changing the order",id:"changing-the-order",level:3},{value:"Applying the rules",id:"applying-the-rules",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background-information"},"Background information"),(0,o.kt)("h3",{id:"goal-of-the-date-rules"},"Goal of the date rules"),(0,o.kt)("p",null,'Most images have metadata for dates, but these are split in multiple places and around 10-20% of "real world" photos have incomplete data metadata. The configurable date time parser allows us to get these dates and display them nicely as the user wants it too.'),(0,o.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The logic for extracting local time is described as a list of rules that should be applied\none after another until one rule is able to extract date time (or until all rules are tried\nwithout success)."),(0,o.kt)("p",null,"If a rule can't fetch the time (e.g. the exif tag value is not present or path doesn't match\nthe rule) then that rule is considered to be not applicable."),(0,o.kt)("h3",{id:"figuring-out-the-timezone"},"Figuring out the timezone"),(0,o.kt)("p",null,"Some sources of data might give us very rich information, e.g. timestamp + timezone,\nbut others only allow to get local time (without knowing real timestamp)."),(0,o.kt)("p",null,"For historical reason it is expected to have a timestamp and a timezone."),(0,o.kt)("p",null,'In some cases it is known that the local time the rule would obtain is not in the desired\ntimezone. E.g. video datetime tag QuickTime:CreateDate is by standard written in UTC rather\nthan local time. For such cases each rule can optionally have setting "transform_tz" set to "1" - in that case this rule should also specify "source_tz" and "report_tz" settings where\n"source_tz" is describing the timezone that the rule is getting and "report_tz" is describing\nthe timezone of the location where the photo/video was taken. Both "source_tz" and "report_tz"\nshould be one of the follwing:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"utc" - UTC timezone'),(0,o.kt)("li",{parentName:"ul"},'"gps_timezonefinder" - the timezone of the GPS location associated with the photo/video - "name:<timezone_name>"'),(0,o.kt)("li",{parentName:"ul"},"the timezone with the name <timezone_name>")),(0,o.kt)("p",null,'If either "source_tz" or "report_tz" could not be obtained the rule is considered to be not applicable.'),(0,o.kt)("h3",{id:"the-different-rule-types"},"The different rule types"),(0,o.kt)("p",null,"Currently supported rule types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"exif" - local time is taken using exif tag params','["exif_tag"]'," as obtained with exiftool"),(0,o.kt)("li",{parentName:"ul"},'"path" - time is taken from the filename using a regular expression matching'),(0,o.kt)("li",{parentName:"ul"},'"fs" - time is taken from file property. Since these are unix timestamps without timezones\nthey are always translated to local time using UTC.'),(0,o.kt)("li",{parentName:"ul"},'"user defined" - the date time defined by the user from the frontend')),(0,o.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,o.kt)("h3",{id:"adding-optional-rules"},"Adding optional rules"),(0,o.kt)("p",null,'To add a new rule, go to settings and navigate to the datetime parsing rules. Click on the button "Add rule". You can now add optional rules like using the modified time or the create time from the file.'),(0,o.kt)("h3",{id:"changing-the-order"},"Changing the order"),(0,o.kt)("p",null,"The top rules gets applied first and the bottom rules gets applied last. To change the order drag and drop one of the cards and save them by clicking on update."),(0,o.kt)("h3",{id:"applying-the-rules"},"Applying the rules"),(0,o.kt)("p",null,'The date rules are applied on each scan. If you changed the rules to your liking, click on "Rescan all Photos" and then the new rules will be applied'))}p.isMDXComponent=!0}}]);