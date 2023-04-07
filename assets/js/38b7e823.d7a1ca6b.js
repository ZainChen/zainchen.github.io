"use strict";(self.webpackChunkzain=self.webpackChunkzain||[]).push([[7378],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,g=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},l="Npm command",i={unversionedId:"note/command/npm-command",id:"note/command/npm-command",title:"Npm command",description:"---",source:"@site/docs/note/command/npm-command.md",sourceDirName:"note/command",slug:"/note/command/npm-command",permalink:"/docs/note/command/npm-command",draft:!1,editUrl:"https://github.com/ZainChen/zainchen.github.io/tree/main/docs/note/command/npm-command.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebarIdNote",previous:{title:"Git commands",permalink:"/docs/note/command/git-command"},next:{title:"Connecting multiple Github accounts",permalink:"/docs/note/github-multiple-connection"}},d={},c=[{value:"Sort dependencies and devDependencies in order",id:"sort-dependencies-and-devdependencies-in-order",level:3},{value:"nvm install new version of Node and migrate all global dependencies of a specified Node version",id:"nvm-install-new-version-of-node-and-migrate-all-global-dependencies-of-a-specified-node-version",level:3},{value:"Display all global dependencies",id:"display-all-global-dependencies",level:3},{value:"Install nrm from source code",id:"install-nrm-from-source-code",level:4}],s={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"npm-command"},"Npm command"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sort-dependencies-and-devdependencies-in-order"},"Sort dependencies and devDependencies in order"),(0,r.kt)("p",null,"Sort the dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," without installing packages."),(0,r.kt)("p",null,"Simply remove or uninstall the missing packages from the dependency list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm: Node Package Manager\n# r: abbreviation for remove, meaning to remove a package\n# -S: abbreviation for --save, meaning to save the dependency in the project's package.json file\n# example-package: the name of the package to be removed (any non-existent package name can be used)\nnpm r -S example-package\n")),(0,r.kt)("h3",{id:"nvm-install-new-version-of-node-and-migrate-all-global-dependencies-of-a-specified-node-version"},"nvm install new version of Node and migrate all global dependencies of a specified Node version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Node.js version v18.15.0 using nvm\n# Reinstall all packages and use the dependency relationships of previously installed version v18.14.2\nnvm install v18.15.0 --reinstall-packages-from=v18.14.2\n")),(0,r.kt)("h3",{id:"display-all-global-dependencies"},"Display all global dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm ls: list all installed packages and their dependencies\n# --global: view globally installed packages\n# --depth 0: only display the first level packages as the depth parameter passed to this command is 0\nnpm ls --global --depth 0\n")),(0,r.kt)("h4",{id:"install-nrm-from-source-code"},"Install nrm from source code"),(0,r.kt)("p",null,"When installing ",(0,r.kt)("inlineCode",{parentName:"p"},"nrm")," directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i nrm -g"),", the current source used will not be recognized."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i Pana/nrm -g\n")))}m.isMDXComponent=!0}}]);