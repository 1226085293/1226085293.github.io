import{_ as o,r,o as t,c as a,e as c,a as l,f as _}from"./app-f52bd50a.js";const m={},s=_("<p>这里提供给大家一个简单的方法实现（这里只提供实现方法，如需代码请按照方法自行实现）：</p><ul><li>第一步： 给你要添加残影的物体一个状态值，<em>运动和静止</em></li><li>第二步：在 update 函数中检测物体的状态，如果为运动状态则按照你给定的间隔时间通过提前准备好的 NodePool 获取一个节点并将物体姿态设定为和 <em>当前物体相同姿态</em></li><li>第三部：给新的节点添加一个渐隐动画，直到 alpha（透明度）为 0，再回收此节点到 NodePool，至此结束；<br> 其中的残影生成 <em>间隔时间</em> 和物体 <em>渐隐速度</em><br> 改进：</li></ul><p>将 update 中检测改为定时器，定时器时间间隔为残影生成间隔时间。</p><hr><p>相信很多小伙伴也都知道怎么做残影，这里只是给小白的教程贴。</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>",7);function n(p,i){const e=r("Share");return t(),a("div",null,[c(" more "),s,l(e,{services:"qq,qrcode",colorful:""})])}const h=o(m,[["render",n],["__file","残影效果.html.vue"]]);export{h as default};
