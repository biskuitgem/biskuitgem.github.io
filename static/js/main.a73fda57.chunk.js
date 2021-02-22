(this["webpackJsonpbiskuit-gem-website"]=this["webpackJsonpbiskuit-gem-website"]||[]).push([[0],{16:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",{className:"app-content"},e.title&&c.a.createElement("div",{className:"content-top clearfix"},c.a.createElement("h1",{className:"page-title"},e.title)),c.a.createElement("div",null,e.children))}},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),i=a(3),m=a(1),o=a.p+"static/media/logo.4bc7eaf6.png",s=function(){return c.a.createElement("div",{className:"app-landing"},c.a.createElement("div",{className:"landing-text"},c.a.createElement("h2",null,"Welcome! ",c.a.createElement("br",null)," to ",c.a.createElement("span",null,"Biskuit Gem")," Workspace ",c.a.createElement("span",null,"^^")),c.a.createElement("p",null,"We are a small team of individual developers that loves to develop applications, games and websites."),c.a.createElement(i.b,{to:"/about"},"Learn More")),c.a.createElement("div",{className:"landing-image"},c.a.createElement("img",{src:o,alt:"logo"})),c.a.createElement("ul",{className:"landing-socicons"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/biskuitgem"},c.a.createElement("i",{className:"socicon socicon-github"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"socicon socicon-android"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"socicon socicon-apple"})))))},u=a(16),d=function(){return c.a.createElement(u.a,{title:"Page Not Found"})},p=a(4),b=function(e){return c.a.createElement("ul",{className:"my-dropdown-menu ".concat(e.showDropdown?"":"collapsed")},e.items.map((function(t,a){return c.a.createElement("li",{key:a,onClick:e.closeDropdown},c.a.createElement(i.b,{to:t.pathname,className:"my-dropdown-menu-link"},t.label))})))},f=Object(m.f)((function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),l=a[0],r=a[1],m=function(){e.item.items&&r(!l)};return c.a.createElement("li",{className:"my-navbar-menu-item",onClick:m,onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}},c.a.createElement(i.b,{to:e.item.pathname,className:"my-navbar-menu-item-link",onClick:function(t){e.item.items?t.preventDefault():e.history.push(e.item.pathname)}},e.item.label," ",e.item.items&&c.a.createElement("i",{className:"fas ".concat(l?"fa-caret-up":"fa-caret-down")})),e.item.items&&c.a.createElement(b,{showDropdown:l,items:e.item.items,closeDropdown:m}))})),E=a(14),h=c.a.lazy((function(){return a.e(6).then(a.bind(null,257))})),g=c.a.lazy((function(){return Promise.all([a.e(2),a.e(5)]).then(a.bind(null,259))})),v=[{pathname:"/about",label:"About",icon:"info-circle",component:h},{pathname:"/projects",noRoute:!0,label:"Projects",icon:"rocket",items:[{pathname:"/projects/workout-interval-timer",label:"WIT (Mobile)",icon:"stopwatch",component:c.a.lazy((function(){return Promise.all([a.e(3),a.e(7)]).then(a.bind(null,258))}))}]},{pathname:"/support",noRoute:!0,label:"Support",icon:"question-circle",items:[{pathname:"/support/privacy-policy",label:"Privacy Policy",icon:"shield-alt",render:function(e){return c.a.createElement(g,Object.assign({},e,{title:"Privacy Policy",docName:"Privacy.docx"}))}},{pathname:"/support/terms-and-conditions",label:"Terms and Conditions",icon:"file-signature",render:function(e){return c.a.createElement(g,Object.assign({},e,{title:"Terms and Conditions",docName:"Terms.docx"}))}}]}],y=function e(t,a,n){var c,l,r,i={},m=Object(E.a)(t);try{for(m.s();!(l=m.n()).done;){if(a[(c=l.value).pathname]=c,c.expanded=!1,c.pathname===n){i=c;break}if(c.items){var o=e(c.items,a,n);(r=o)&&0===Object.keys(r).length&&r.constructor===Object||(i=o,c.expanded=!0)}}}catch(s){m.e(s)}finally{m.f()}return i},N=function(e){var t={};return{menuItems:v,pathToMenuItemMap:t,selected:y(v,t,e)}},j=function e(t,a){var n,c,l=Object(E.a)(t);try{for(l.s();!(c=l.n()).done;)(n=c.value).noRoute||a.push(n),n.items&&e(n.items,a)}catch(r){l.e(r)}finally{l.f()}},O=function(){var e=[];return j(v,e),e},k=function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){r(v)}),[]),c.a.createElement("nav",{className:"my-navbar"},c.a.createElement(i.b,{to:"/",className:"my-navbar-logo"},c.a.createElement("img",{src:o,alt:"logo"}),"Biskuit",c.a.createElement("span",null,"Gem")),c.a.createElement("div",{className:"my-navbar-bars",onClick:function(){return e.toggleSidebar()}},c.a.createElement("i",{className:e.showSidebar?"fa fa-times":"fa fa-bars"})),c.a.createElement("ul",{className:"my-navbar-menu"},l.map((function(e,t){return c.a.createElement(f,{key:t,item:e})}))))},S=a(15),w=Object(m.f)((function(e){var t=Object(n.useState)(e.item),a=Object(p.a)(t,2),l=a[0],r=a[1],m=Object(n.useState)(""),o=Object(p.a)(m,2),s=o[0],u=o[1];Object(n.useEffect)((function(){var t=l.items?"with-sub-menu":"",a=l.items?"":e.location.pathname===l.pathname?"selected":"";u("my-sidebar-list-item ".concat(t," ").concat(a))}),[l,e.selectedItem]);return c.a.createElement("li",{className:s,key:l.label},c.a.createElement(i.b,{className:"my-sidebar-list-link",to:l.pathname,onClick:function(t){l.items?(t.preventDefault(),r(Object(S.a)(Object(S.a)({},l),{},{expanded:!l.expanded}))):(e.toggleSidebar(),e.history.push(l.pathname))}},c.a.createElement("i",{className:"fa fa-".concat(l.icon)}),c.a.createElement("span",null,l.label),l.items&&c.a.createElement("b",{className:"fa ".concat(l.expanded?"fa-angle-up":"fa-angle-down")})),l.items&&c.a.createElement(x,{depth:e.depth+1,items:l.items,expanded:l.expanded,selectedItem:e.selectedItem,toggleSidebar:e.toggleSidebar}))})),x=function(e){return c.a.createElement("ul",{className:"".concat(1===e.depth?"my-sidebar-list":"my-sidebar-sublist"," ").concat(e.expanded?"expanded":"")},e.items.map((function(t,a){return c.a.createElement(w,{depth:e.depth,item:t,selectedItem:e.selectedItem,key:a,toggleSidebar:e.toggleSidebar})})))},I=Object(m.f)((function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)({}),m=Object(p.a)(i,2),o=m[0],s=m[1],u=Object(n.useState)({}),d=Object(p.a)(u,2),b=d[0],f=d[1];return Object(n.useEffect)((function(){if(l.length<=0){var t=N(e.location.pathname);r(t.menuItems),s(t.selected),f(t.pathToMenuItemMap)}else e.location.pathname in b&&s(b[e.location.pathname])}),[e.location.pathname]),c.a.createElement("div",{className:"my-sidebar-overlay ".concat(e.showSidebar?"":"collapsed")},c.a.createElement("div",{className:"my-sidebar"},e.showSidebar&&c.a.createElement(x,{depth:1,items:l,expanded:!1,selectedItem:o,toggleSidebar:e.toggleSidebar})))})),P=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],l=t[1],r=function(){l(!a)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,{showSidebar:a,toggleSidebar:r}),c.a.createElement(I,{showSidebar:a,toggleSidebar:r}))},M=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(i.a,null,c.a.createElement("div",{className:"app-header"},c.a.createElement(P,null)),c.a.createElement("div",{className:"app-main"},c.a.createElement(c.a.Suspense,{fallback:"Loading Routes..."},c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:s}),O().map((function(e,t){return e.component?c.a.createElement(m.a,{key:t,exact:!0,path:e.pathname,component:e.component}):c.a.createElement(m.a,{key:t,exact:!0,path:e.pathname,render:e.render})})),c.a.createElement(m.a,{path:"*",component:d})))),c.a.createElement("div",{className:"app-footer"})))};a(30);r.a.render(c.a.createElement(M,null),document.getElementById("root"))}},[[31,1,4]]]);
//# sourceMappingURL=main.a73fda57.chunk.js.map