import{_ as o,r as i,o as n,c as a,e as c,a as e,b as t,d,f as m}from"./app-2959652e.js";const r={},s=m('<figure><img src="//forum.cocos.org/uploads/default/optimized/3X/5/6/56b26acf1757bb41aac5f39e0e9b9313c858bc9b_2_690x67.png" alt="" width="690" height="67" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="还在为-getcomponent-和-getchildbyname-烦恼吗-担心每次频繁的遍历消耗太浪费时间-那就来扩展一下我们的-cc-node-吧-让你不必为了一长串-getchildbyname-和-getcomponent-而烦恼。使用得当也可以免去每次的遍历消耗-大量节点下" tabindex="-1"><a class="header-anchor" href="#还在为-getcomponent-和-getchildbyname-烦恼吗-担心每次频繁的遍历消耗太浪费时间-那就来扩展一下我们的-cc-node-吧-让你不必为了一长串-getchildbyname-和-getcomponent-而烦恼。使用得当也可以免去每次的遍历消耗-大量节点下" aria-hidden="true">#</a> 还在为 getComponent 和 getChildByName 烦恼吗？担心每次频繁的遍历消耗太浪费时间？那就来扩展一下我们的 cc.Node 吧，让你不必为了一长串 getChildByName 和 getComponent 而烦恼。使用得当也可以免去每次的遍历消耗（大量节点下）</h3><hr><h3 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h3><ul><li><em>获取子节点</em></li><li><em>node.child(“xxx”)</em></li><li><em>node.child(“xxx/xxx”)</em></li><li><em>node.child(“xxx”, true)</em></li><li><em>获取组件</em></li><li><em>node.label</em> 或者 <em>node.sprite</em> 或者 <em>node.button</em> 或者 <em>node.layout</em></li><li><em>设置自动更新子节点缓存</em><ul><li><em>node.child_update_b = true</em></li></ul></li><li><em>清除组件缓存</em><ul><li><em>node.label = null;</em> ##<span class="hashtag">#备注说明</span></li><li>由于内部给所有获取的节点和组件都存储了缓存，所以下次获取是直接拿到缓存中的数据, 如果要更新缓存请看上面说明。</li></ul></li></ul><p><em>好处</em></p><ul><li>分摊性能消耗，只在使用的第一次遍历获取，之后都是获取的缓存(可以手动/自动更新缓存)</li><li>简化接口，不必写一长串的 getComponent/getChildByName, 怎么方便怎么来</li></ul><hr><p>-&gt; <em>接下来看看扩展方式</em></p><ul><li>将 NodeS 扩展.txt 中的内容复制到 creator.d.ts 的 Node 类中（位置随意, 注意不要覆盖其他接口）</li></ul><figure><img src="//forum.cocos.org/uploads/default/original/3X/2/c/2c211389dcbbe7fdd08ad7c1cd9e839ce45b5547.png" alt="" width="582" height="500" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11),h=e("li",null,"将 nodes.ts 脚本拖入项目中并置顶（提示：脚本和文件夹排列顺序默认是按照字母排列）",-1),u=e("br",null,null,-1),g={href:"https://github.com/1226085293/nodes",target:"_blank",rel:"noopener noreferrer"};function p(_,b){const l=i("ExternalLinkIcon");return n(),a("div",null,[c(" more "),s,e("ul",null,[h,e("li",null,[t("现在就可以随意使用啦；"),u,t(" github: "),e("a",g,[t("https://github.com/1226085293/nodes"),d(l)])])])])}const x=o(r,[["render",p],["__file","12.html.vue"]]);export{x as default};