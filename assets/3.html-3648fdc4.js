import{_ as o,o as c,c as t,e as i,a as e,b as l,f as a}from"./app-8131941e.js";const s={},u=e("p",null,[l("虽然 "),e("code",null,"mk.life_cycle"),l(" 已经满足了模块系统运行的需求，但是我们还需要一些更符合业务需求的功能，这些就由 "),e("code",null,"mk.view_base"),l(" 实现")],-1),n=a('<h2 id="组件特性" tabindex="-1"><a class="header-anchor" href="#组件特性" aria-hidden="true">#</a> 组件特性</h2><ul><li>单独展示</li></ul><blockquote><p>表示这是一个全屏不透明的 UI，这样在模块 open 后，框架将自动隐藏模块后的其他模块。在 close 时候恢复其他模块展示</p></blockquote><ul><li>动画配置</li></ul><blockquote><p>预制体的 open、close 动画配置</p></blockquote><ul><li>特殊的 close</li></ul><blockquote><p>mk.view_base 重载了生命周期，所以如果 close 被外部调用，那么将关闭模块(不会进入你的 close 函数内)，所以 close 是一个生命周期函数，也是一个模块的关闭接口，比如用来设置关闭按钮的回调</p></blockquote><ul><li>快捷操作</li></ul><blockquote><p>包含了一切编辑 UI 时常用的操作，提高你的速度</p><ul><li><p>添加遮罩</p></li><li><p>0 边距 widget</p></li><li><p>BlockInputEvents</p></li></ul></blockquote>',9);function p(r,_){return c(),t("div",null,[u,i(" more "),n])}const k=o(s,[["render",p],["__file","3.html.vue"]]);export{k as default};
