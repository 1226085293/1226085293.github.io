import{_ as e,o as r,c as a,e as o,f as t}from"./app-f60eb523.js";const l={},i=t('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> # 前言</h2><blockquote><p>此篇教程贴对新手的帮助比较大，大佬们也可以随便看看<br> 示例项目:</p></blockquote><p><a href="https://github.com/1226085293/cc-structure" rel="nofollow noopener">github(点击跳转)</a></p><p><a href="https://gitee.com/muzzik/cc-structure" rel="nofollow noopener">gitee(点击跳转)</a></p><h2 id="mvc" tabindex="-1"><a class="header-anchor" href="#mvc" aria-hidden="true">#</a> MVC</h2><p>简单的介绍下，MVC 其实是 model、view、controller 的分离，但是发现没有，网上的很多 MVC 的调用关系都不一样，如下图<br><img src="https://forum.cocos.org/uploads/default/optimized/3X/a/d/ad2b9c1cc3a2bc635778989b562f58819db824e1_2_192x500.png" alt="" width="192" height="500" loading="lazy"></p><p>其实只要符合<strong>model、view、controller</strong>架构的都是mvc<br><em>model</em>： 数据层</p><p><em>view</em>：视图层（只存在视图方法）</p><p><em>controller</em>：业务逻辑层（C 中不应该出现直接控制视图的逻辑，而是<em>通过数据（设计图一）或者事件（设计图二）去驱动视图</em><br><em>小提示</em></p><ul><li>层与层之间的交互尽量使用回调或者去使用消息机制去完成，尽量避免直接持有<br> 示例项目中采用第一结构图</li></ul><hr><h2 id="mvp" tabindex="-1"><a class="header-anchor" href="#mvp" aria-hidden="true">#</a> MVP</h2><p><img src="https://forum.cocos.org/uploads/default/original/3X/6/3/630ae17734159b2d2e6cd927b5b9f2f87ba43f62.png" alt="" width="665" height="205" loading="lazy"><br> model：数据层（只与 P 交互）</p><p>view：视图层（只与 P 交互）</p><p>presenter：业务逻辑层（负责数据的更新以及视图的更新）<br> MVP 和 MVC 最大的区别就是完全隔离了 model 和 view，但是也造成了一个问题，presenter 的臃肿<br> 示例项目中采用第二结构图</p><hr><h2 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm" aria-hidden="true">#</a> MVVM</h2><p><img src="https://forum.cocos.org/uploads/default/original/3X/d/a/da7ae6fd091275fe2f387adec261af13d0f78927.png" alt="" width="574" height="197" loading="lazy"><br> model：数据层（只与 VM 交互）</p><p>view：视图层（只与 VM 交互）</p><p>viewModel：业务逻辑层（负责视图和数据之间的绑定）<br> 咋一看和 MVP 的结构并没有什么区别，但是他们区别在于内部的使用，VM 负责的是将 V 和 M 绑定，然后操作 M 即可实现 V 的更新，这一点可以免去手动派发事件，添加事件，也避免了程序上的疏漏（比如忘记派发更新视图事件）<br><em>以上均为个人理解，仅供参考，如有疏漏错误望告知</em></p><hr><p><em>个人感悟</em></p><ul><li>最快的方式，单脚本开发</li><li>适合换皮的架构，MVC</li><li>适合展示数据多的架构，MVVM</li></ul>',23);function d(c,p){return r(),a("div",null,[o(" more "),i])}const m=e(l,[["render",d],["__file","17.html.vue"]]);export{m as default};