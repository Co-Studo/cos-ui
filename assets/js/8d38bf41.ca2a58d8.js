"use strict";(self.webpackChunkcosui=self.webpackChunkcosui||[]).push([[596],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(f,p(p({ref:r},s),{},{components:n})):t.createElement(f,p({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6769:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const o={},p="Paper",i={unversionedId:"react/Paper/paper",id:"react/Paper/paper",title:"Paper",description:"border-radius \uc640 box-shadow \ub97c \uac00\uc9c4 Container \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/docs/react/Paper/paper.md",sourceDirName:"react/Paper",slug:"/react/Paper/",permalink:"/cos-ui/docs/react/Paper/",draft:!1,editUrl:"https://github.com/Co-Studo/cos-ui/edit/dev/packages/react/Paper/paper.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Loading Spinner",permalink:"/cos-ui/docs/react/LoadingSpinner/"},next:{title:"Radio",permalink:"/cos-ui/docs/react/Radio/"}},c={},l=[{value:"SX",id:"sx",level:3},{value:"Usage",id:"usage",level:3}],s={toc:l},d="wrapper";function u(e){let{components:r,...n}=e;return(0,a.kt)(d,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"paper"},"Paper"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"border-radius")," \uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"box-shadow")," \ub97c \uac00\uc9c4 Container \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"sx")," prop \uc744 \ud1b5\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"border-radius"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"box-shadow")," \ub97c \uc218\uc815\ud560 \uc218 \uc788\uc73c\uba70 ",(0,a.kt)("inlineCode",{parentName:"p"},"FlexBox")," \uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"sx")," \ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"FlexBox")," \uac00 \uc801\uc6a9\ub429\ub2c8\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," \uc774\ubca4\ud2b8\ub97c \ubc1b\uc73c\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"Cursor")," \uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"Pointer")," \ub85c \ubcc0\uacbd\ub418\uace0, hover css (transform scale) \uac00 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"sx"},"SX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type BasePaperSX = {\n  borderRadius?: string;\n  boxShadow?: string;\n};\n\ninterface FlexPaperSX extends FlexBoxSX, BasePaperSX {}\n\ntype BasePaperProps = {\n  children: ReactNode;\n  onClick?: (e: MouseEvent) => void;\n  sx?: BasePaperSX;\n};\n\ntype FlexPaperProps = {\n  children: ReactNode;\n  onClick?: (e: MouseEvent) => void;\n  sx?: FlexPaperSX;\n};\n\ntype PaperProps = FlexPaperProps;\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"  <Paper\n    onClick={() => {...}}\n    sx={{\n      borderRadius: '1rem',\n      gap: 2,\n    }}\n  >\n    <Text>Clickable Paper</Text>\n    <Text>Clickable Paper</Text>\n    <Text>Clickable Paper</Text>\n  </Paper>\n")))}u.isMDXComponent=!0}}]);