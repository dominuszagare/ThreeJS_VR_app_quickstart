"use strict";(self.webpackChunkgugol=self.webpackChunkgugol||[]).push([[787],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(g,o(o({ref:r},c),{},{components:t})):n.createElement(g,o({ref:r},c))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5747:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_position:4},o="Multithreading",s={unversionedId:"multithreading",id:"multithreading",title:"Multithreading",description:"GUGOL je ve\u010dnitna aplikacija in ima ve\u010d procesov, ki morajo med",source:"@site/docs/multithreading.md",sourceDirName:".",slug:"/multithreading",permalink:"/ThreeJS_VR_app_quickstart/docs/multithreading",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Razvoj",permalink:"/ThreeJS_VR_app_quickstart/docs/razvoj"},next:{title:"Namestitev",permalink:"/ThreeJS_VR_app_quickstart/docs/instalacija"}},p={},l=[],c={toc:l};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multithreading"},"Multithreading"),(0,i.kt)("p",null,"GUGOL je ve\u010dnitna aplikacija in ima ve\u010d procesov, ki morajo med\nsabo komunicirati. Zato ima vsak proces implementirano vrsto v\nkatero lahko drugi procesi pu\u0161\u010dajo sporo\u010dila."),(0,i.kt)("p",null,"primer preverjanje vrste v ShowGrid oknu:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'from PyQt5.QtWidgets import QWidget\nimport queue\n\nclass ShowGrid(QWidget):\n\n    def __init__(self, parent=None, **kwargs):\n        super().__init__(parent, **kwargs)\n\n        self.msgs = queue.Queue() #inicilizacija vrste ob kreaciji okna\n        self.startTimer(100) #preveri vrsto vsakih 100ms\n\n    #preveri za nova sporocila v vrsti\n    def timerEvent(self, *args, **kwargs):\n        try:\n            msg = self.msgs.get(block=False)\n            print("SHOW GRID GOT MESSAGE: " + msg)\n            if msg == "display grid":\n                self.display_grid()\n            if \'display subgrid\' in msg:\n                n = int (msg.split(\'display subgrid\',1)[1])\n                self.display_subgrid(n)\n            if msg == "stop timer":\n                self.stop_timer()\n\n        except: # to se izvede ce nimamo novih sporocil\n            pass\n')),(0,i.kt)("p",null,"Ostali procesi ShowGrid po\u0161iljajo ukaze z:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'draw_grid_widget = ShowGrid()\ndraw_grid_widget.msgs.put("display grid")\n')))}u.isMDXComponent=!0}}]);