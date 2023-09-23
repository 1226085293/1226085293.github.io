import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c,e as m,d as s,f as a}from"./app-cdbc9bfa.js";const n={},p=a('<p>之前看到过黑洞大作战这样的游戏，也没去玩，当时还以为是动态改变网格数据实现的，下面说一个自己偶然想到的简易实现思路：</p><p>**1. 实现黑洞吞噬效果：**玩游戏的时候黑洞一直都由玩家控制运动，那么为了能知道我们能吞噬哪些物体，可以用一个简单的办法，首先需要在每个物体上添加刚体，再用一个球来包围我们的需要吞噬的物体（较长物体只需包围底部），就像下面一样</p><img src="https://forum.cocos.org/uploads/default/original/3X/9/9/993f03b42363d30067b5291759cac5382357c101.png" width="599" height="466"><p>包围住了之后我们只需要在黑洞 <em>移动</em> 时 <em>检测包围住周围物体（物体数量较多可以用四叉空间分割法）</em> 的那个球的 <em>中心点离黑洞中心点距离 + 球的半径长度</em> 离黑洞中心点的距离是否</p><p>&lt;= <em>黑洞的半径</em><br> **2. 高楼大厦的下坠碰撞：**不知道大家发现没有，物体在下坠过程中，比较长的物体是会随着黑洞移动碰撞到黑洞边界的，如果我们不做处理，那么就会让物体在下坠过程中超过黑洞的吞噬范围却还在下坠，看起来很怪异。那么怎么解决呢？我想到的办法是给黑洞添加一个 <em>圆环碰撞器（圆环模型 + 网格碰撞器 = 圆环碰撞器</em><br><em>3. 策划的最爱，程序的噩梦（钉子大厦）：</em></p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',7);function _(l,d){const e=r("Share");return t(),c("div",null,[m(" more "),p,s(e,{services:"qq,qrcode",colorful:""})])}const h=o(n,[["render",_],["__file","6.html.vue"]]);export{h as default};
