import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as n,c as d,e as t,d as a,f as c}from"./app-4abb9e99.js";const l={},o=c('<p>话不多说，先上效果图：</p><p><img src="//forum.cocos.org/uploads/default/optimized/3X/4/5/45ae9f6b7b61bec018128f1af88e1f6cd45950dd_2_690x433.gif" alt="" width="690" height="433" loading="lazy"><br> 由于搭建 UI 需要用到时间选择器，论坛查找一番后只找到几个相似的组件。但是由于看不惯内部代码（太复杂…），作为菜鸡的自己就手动写了一个，目前只支持竖列表，如果后面有需要可以留言。需求多的话可以加上横列表。<br> 外部接口很简单，只有两个：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>    public update_view(): void {...}```\n\n```/**选中节点下标 */\n    get selected_n() {... }```\n\n代码注释都有，简单明了...\n此组件只需要挂载在ScrollView组件的节点上即可，需要保证item锚点y为0.5。其他都不要求，具体看demo\ngithub: [https://github.com/1226085293/slider_select](https://github.com/1226085293/slider_select)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',5);function r(m,u){const e=s("Share");return n(),d("div",null,[t(" more "),o,a(e,{services:"qq,qrcode",colorful:""})])}const b=i(l,[["render",r],["__file","4.html.vue"]]);export{b as default};