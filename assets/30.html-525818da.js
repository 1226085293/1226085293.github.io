const e=JSON.parse('{"key":"v-5cbcf6e2","path":"/blog/article/30.html","title":"原生预览调试！我给Cocos加了个新功能，原生开发者福音","lang":"zh-CN","frontmatter":{"title":"原生预览调试！我给Cocos加了个新功能，原生开发者福音","date":"2024-04-07T00:00:00.000Z","category":["文章","Cocos"],"tag":["CocosCreator","调试"],"layout":"slot_share","description":"前言 一年一度的征稿到了，倒腾点存货，在之前阅读云风大佬文章的时候，发现他的引擎调试机制是在 手机上实时刷新预览，而不是在PC上调试，作为一个 Cocos 原生开发者，我深有体会，主要有以下原因 Creator 在原生只能达到大概 95% 的一致性 例如多 Bundle 脚本引用顺序错误，龙骨/Spine闪退，渲染异常（极少发生） 性能测试 PC网页可以使用CPU降速达到原生大概的性能，但是并没有真机准确以及不能测试是否发热 UI/交互设计 这个对于经验丰富的团队来说没什么问题，但是对于新团队或者独立开发者是个重要的问题，鼠标并不能准确模拟手指的体验，有可能美术图标小了，也有可能按钮的点击范围小了 所以我在想 Creator 是否能实现原生预览调试呢？既然网页可以，为什么真机不行，于是我完成了它","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/article/30.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"原生预览调试！我给Cocos加了个新功能，原生开发者福音"}],["meta",{"property":"og:description","content":"前言 一年一度的征稿到了，倒腾点存货，在之前阅读云风大佬文章的时候，发现他的引擎调试机制是在 手机上实时刷新预览，而不是在PC上调试，作为一个 Cocos 原生开发者，我深有体会，主要有以下原因 Creator 在原生只能达到大概 95% 的一致性 例如多 Bundle 脚本引用顺序错误，龙骨/Spine闪退，渲染异常（极少发生） 性能测试 PC网页可以使用CPU降速达到原生大概的性能，但是并没有真机准确以及不能测试是否发热 UI/交互设计 这个对于经验丰富的团队来说没什么问题，但是对于新团队或者独立开发者是个重要的问题，鼠标并不能准确模拟手指的体验，有可能美术图标小了，也有可能按钮的点击范围小了 所以我在想 Creator 是否能实现原生预览调试呢？既然网页可以，为什么真机不行，于是我完成了它"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T09:08:08.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"CocosCreator"}],["meta",{"property":"article:tag","content":"调试"}],["meta",{"property":"article:published_time","content":"2024-04-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T09:08:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原生预览调试！我给Cocos加了个新功能，原生开发者福音\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T09:08:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"环境","slug":"环境","link":"#环境","children":[]},{"level":2,"title":"开始实现","slug":"开始实现","link":"#开始实现","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[{"level":3,"title":"第一个问题：Bundle 脚本不正确","slug":"第一个问题-bundle-脚本不正确","link":"#第一个问题-bundle-脚本不正确","children":[]},{"level":3,"title":"第二个问题：脚本加载顺序如何保证？","slug":"第二个问题-脚本加载顺序如何保证","link":"#第二个问题-脚本加载顺序如何保证","children":[]},{"level":3,"title":"第三个问题：NPM脚本","slug":"第三个问题-npm脚本","link":"#第三个问题-npm脚本","children":[]},{"level":3,"title":"第四个问题：插件脚本","slug":"第四个问题-插件脚本","link":"#第四个问题-插件脚本","children":[]}]},{"level":2,"title":"资源部分","slug":"资源部分","link":"#资源部分","children":[{"level":3,"title":"SpriteFrame","slug":"spriteframe","link":"#spriteframe","children":[]},{"level":3,"title":"AnimationClip","slug":"animationclip","link":"#animationclip","children":[]}]},{"level":2,"title":"使用准备","slug":"使用准备","link":"#使用准备","children":[{"level":3,"title":"启动项目","slug":"启动项目","link":"#启动项目","children":[]},{"level":3,"title":"原项目","slug":"原项目","link":"#原项目","children":[]}]},{"level":2,"title":"源码","slug":"源码","link":"#源码","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[{"level":3,"title":"自动化想法","slug":"自动化想法","link":"#自动化想法","children":[]}]}],"git":{"createdTime":1714986488000,"updatedTime":1714986488000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":5.51,"words":1654},"filePathRelative":"blog/article/30.md","localizedDate":"2024年4月7日","excerpt":"<h2> 前言</h2>\\n<p>一年一度的征稿到了，倒腾点存货，在之前阅读<a href=\\"https://blog.codingnow.com/2017/12/mobile_3d_engine.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">云风大佬文章</a>的时候，发现他的引擎调试机制是在 <strong>手机上实时刷新预览</strong>，而不是在PC上调试，作为一个 Cocos 原生开发者，我深有体会，主要有以下原因</p>\\n<ul>\\n<li>\\n<p>Creator 在原生只能达到大概 95% 的一致性</p>\\n<blockquote>\\n<p>例如多 Bundle 脚本引用顺序错误，龙骨/Spine闪退，渲染异常（极少发生）</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>性能测试</p>\\n<blockquote>\\n<p>PC网页可以使用CPU降速达到原生大概的性能，但是并没有真机准确以及不能测试是否发热</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>UI/交互设计</p>\\n<blockquote>\\n<p>这个对于经验丰富的团队来说没什么问题，但是对于新团队或者独立开发者是个重要的问题，鼠标并不能准确模拟手指的体验，有可能美术图标小了，也有可能按钮的点击范围小了</p>\\n</blockquote>\\n</li>\\n</ul>\\n<p>所以我在想 Creator 是否能实现原生预览调试呢？既然网页可以，为什么真机不行，于是我完成了它</p>\\n<figure><img src=\\"https://gitee.com/muzzik/images/raw/master/blog/article/30/1.gif\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n","autoDesc":true}');export{e as data};