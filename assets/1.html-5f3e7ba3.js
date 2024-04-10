import{_ as a,r as l,o as r,c as o,e as d,a as e,b as n,d as s,f as c}from"./app-33bfefe8.js";const i={},h=e("p",null,"实现大厅子游戏的方式很简单，框架支持 bundle 重载（热更），你只需要将你的子游戏做成 Bundle，那么在需要更新子游戏时重载 Bundle 就行了",-1),u=e("h2",{id:"重载接口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#重载接口","aria-hidden":"true"},"#"),n(" 重载接口")],-1),p={href:"https://muzzik.gitee.io/mk-framework/api/classes/bundle.html#reload",target:"_blank",rel:"noopener noreferrer"},_=c('<div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><p>重载 Bundle 前需要清理定时器，注册的事件</p></li><li><p>重载 Bundle 时不能在 Bundle 内的场景</p></li><li><p>如果你重载 BundleA，且 BundleB 依赖 BundleA，那么 BundleB 也需要重载</p></li></ul></div><h2 id="如何测试" tabindex="-1"><a class="header-anchor" href="#如何测试" aria-hidden="true">#</a> 如何测试？</h2><p>打包 Bundle 后在其文件夹下执行终端命令 <code>npx http-server</code>，将开启一个 http 服务器，你就可以测试了</p>',3);function m(B,f){const t=l("ExternalLinkIcon");return r(),o("div",null,[h,d(" more "),u,e("p",null,[e("a",p,[n("mk.bundle.reload"),s(t)])]),_])}const x=a(i,[["render",m],["__file","1.html.vue"]]);export{x as default};