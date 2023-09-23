import{_ as l,r,o as n,c as d,e as m,a as e,b as i,d as o,f as c}from"./app-9add3419.js";const s={},h=c('<h1 id="monitor-是什么" tabindex="-1"><a class="header-anchor" href="#monitor-是什么" aria-hidden="true">#</a> # monitor 是什么？</h1><p>它的功能很简单，<em>监听数据的修改</em></p><h2 id="可以用它做什么" tabindex="-1"><a class="header-anchor" href="#可以用它做什么" aria-hidden="true">#</a> # 可以用它做什么？</h2><ul><li><em>数据到视图</em></li><li><em>视图到数据</em></li><li><em>debugger</em></li></ul><h2 id="效果演示" tabindex="-1"><a class="header-anchor" href="#效果演示" aria-hidden="true">#</a> # 效果演示</h2><p><img src="https://forum.cocos.org/uploads/default/optimized/3X/9/9/995aa55fdc4b5b5c32f437bc1ebfd9ab22b4d7e9_2_430x500.gif" alt="" width="430" height="500" loading="lazy">&gt;</p><figure><img src="https://forum.cocos.org/uploads/default/optimized/3X/1/e/1e3d2ce5b4da9357bef4ebd0192fca45c042154f_2_690x465.gif" alt="" width="690" height="465" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><em>monitor 有无限的可能</em><br><em>它很灵活</em>，使用时一定要符合规范，不然你会写成一堆屎山，<em>个人建议更新的视图节点只能是当前组件节点的下级</em></p><h2 id="使用代码" tabindex="-1"><a class="header-anchor" href="#使用代码" aria-hidden="true">#</a> # 使用代码</h2><figure><img src="https://forum.cocos.org/uploads/default/original/3X/6/2/62aa0107dcb6d4eb56e87773d96b1bd0a66d2a2d.png" alt="" width="543" height="500" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><em>monitor</em></p><p>监听的数据尽量不要依赖外部模块，比如 a 模块和 b 模块互相监听各自的数据，像这样继续下去，一旦其中任何一个模块出问题，其他监听了问题模块数据的模块都会出现问题</p><p><em>monitor_trigger</em><br> 比如节点树</p><ul><li>a (组件 A)</li><li>b (组件 B) <ul><li>d</li></ul></li><li>c</li></ul><ol><li>c，d 节点挂载了 monitor_trigger</li><li>c 节点的数据目标尽量只用组件 A</li><li>d 节点的数据目标尽量只用组件 B</li></ol><p>每个组件模块的数据只提供给下属节点和组件，不包括下属组件的子节点，避免组件间交叉使用，否则很容易出错，后续维护也困难</p><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> # 更新日志</h2><ul><li>monitor_trigger 预制体/场景数据全部转为 string 存储，方便修改</li><li>添加数据类型检查</li><li>添加数据键提示</li></ul><h2 id="源码下载-包含-demo" tabindex="-1"><a class="header-anchor" href="#源码下载-包含-demo" aria-hidden="true">#</a> # 源码下载（包含 Demo）</h2>',19),u=e("p",null,"示例源码",-1),_={href:"https://github.com/1226085293/mk_monitor",target:"_blank",rel:"noopener noreferrer"},f={href:"https://gitee.com/muzzik/mk_monitor",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),g={href:"https://gitee.com/muzzik/mk_framework/blob/main/assets/@framework/mk_monitor.ts",target:"_blank",rel:"noopener noreferrer"},b=e("hr",null,null,-1),k=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function x(z,w){const t=r("ExternalLinkIcon"),a=r("Share");return n(),d("div",null,[m(" more "),h,e("ul",null,[e("li",null,[u,e("p",null,[i("github："),e("a",_,[i("https://github.com/1226085293/mk_monitor"),o(t)])]),e("p",null,[i("gitee："),e("a",f,[i("https://gitee.com/muzzik/mk_monitor"),o(t)])])]),e("li",null,[e("p",null,[i("后续更新"),p,e("a",g,[i("https://gitee.com/muzzik/mk_framework/blob/main/assets/@framework/mk_monitor.ts"),o(t)])])])]),b,k,o(a,{services:"qq,qrcode",colorful:""})])}const N=l(s,[["render",x],["__file","11.html.vue"]]);export{N as default};
