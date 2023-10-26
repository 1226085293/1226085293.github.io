import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c,e as s,a as e,b as r,d as t,f as i}from"./app-ef7c8e3b.js";const h={},p=e("p",null,"实现大厅子游戏的方式很简单，框架支持 bundle 重载（热更），你只需要将你的子游戏做成 Bundle，那么在需要更新子游戏时重载 Bundle 就行了",-1),u=e("h2",{id:"重载接口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#重载接口","aria-hidden":"true"},"#"),r(" 重载接口")],-1),_={href:"https://muzzik.gitee.io/mk-framework/api/classes/bundle.html#reload",target:"_blank",rel:"noopener noreferrer"},m=i('<div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><p>重载 Bundle 前需要清理定时器，注册的事件</p></li><li><p>重载 Bundle 时不能在 Bundle 内的场景</p></li><li><p>如果你重载 BundleA，且 BundleB 依赖 BundleA，那么 BundleB 也需要重载</p></li></ul></div><h2 id="如何测试" tabindex="-1"><a class="header-anchor" href="#如何测试" aria-hidden="true">#</a> 如何测试？</h2><p>打包 Bundle 后在其文件夹下执行终端命令 <code>npx http-server</code>，将开启一个 http 服务器，你就可以测试了</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',5);function f(B,k){const o=n("ExternalLinkIcon"),a=n("Share");return d(),c("div",null,[p,s(" more "),u,e("p",null,[e("a",_,[r("mk.bundle.reload"),t(o)])]),m,t(a,{services:"qq,qrcode",colorful:""})])}const v=l(h,[["render",f],["__file","1.html.vue"]]);export{v as default};
