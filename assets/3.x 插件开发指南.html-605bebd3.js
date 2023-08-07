const e=JSON.parse('{"key":"v-cf417b82","path":"/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/3.x%20%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97.html","title":"3.x 插件开发指南","lang":"zh-CN","frontmatter":{"title":"3.x 插件开发指南","date":"2022-12-25T23:49:00.000Z","category":["文章","CocosCreator 插件"],"tag":null,"description":"此贴作为成都 Star Meetings 活动的扩展贴，方便大家更好的阅读理解 1.为什么要开发插件？ 任何重复机械式的劳动都是无意义的，一切机械劳动皆可自动化，而插件能帮助我们实现自动化; 2.插件能给我们带来什么？ 时间，解决了自动化的问题，最大的好处当然是节省了我们额外的手动操作时间，正所谓寸金难买寸光阴，节约时间便是插件最大的价值; 收益，插件...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/3.x%20%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"3.x 插件开发指南"}],["meta",{"property":"og:description","content":"此贴作为成都 Star Meetings 活动的扩展贴，方便大家更好的阅读理解 1.为什么要开发插件？ 任何重复机械式的劳动都是无意义的，一切机械劳动皆可自动化，而插件能帮助我们实现自动化; 2.插件能给我们带来什么？ 时间，解决了自动化的问题，最大的好处当然是节省了我们额外的手动操作时间，正所谓寸金难买寸光阴，节约时间便是插件最大的价值; 收益，插件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-06T11:44:26.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:published_time","content":"2022-12-25T23:49:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-06T11:44:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.x 插件开发指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-25T23:49:00.000Z\\",\\"dateModified\\":\\"2023-08-06T11:44:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\",\\"email\\":\\"1226085293@qq.com\\"}]}"]]},"headers":[{"level":3,"title":"1.为什么要开发插件？","slug":"_1-为什么要开发插件","link":"#_1-为什么要开发插件","children":[]},{"level":3,"title":"2.插件能给我们带来什么？","slug":"_2-插件能给我们带来什么","link":"#_2-插件能给我们带来什么","children":[]},{"level":2,"title":"# 创建插件","slug":"创建插件","link":"#创建插件","children":[{"level":3,"title":"# 创建插件 - 插件放在哪儿？","slug":"创建插件-插件放在哪儿","link":"#创建插件-插件放在哪儿","children":[]},{"level":3,"title":"# 创建插件 - 插件初始化","slug":"创建插件-插件初始化","link":"#创建插件-插件初始化","children":[]}]},{"level":2,"title":"# package.json 简述","slug":"package-json-简述","link":"#package-json-简述","children":[]},{"level":2,"title":"# 插件多语言","slug":"插件多语言","link":"#插件多语言","children":[{"level":3,"title":"# 插件多语言 - 使用方式","slug":"插件多语言-使用方式","link":"#插件多语言-使用方式","children":[]}]},{"level":2,"title":"# 怎么通过消息启动插件面板","slug":"怎么通过消息启动插件面板","link":"#怎么通过消息启动插件面板","children":[{"level":3,"title":"# 怎么通过消息启动插件面板 - 怎么监听消息","slug":"怎么通过消息启动插件面板-怎么监听消息","link":"#怎么通过消息启动插件面板-怎么监听消息","children":[]},{"level":3,"title":"# 怎么通过消息启动插件面板 - 看看回调做了什么","slug":"怎么通过消息启动插件面板-看看回调做了什么","link":"#怎么通过消息启动插件面板-看看回调做了什么","children":[]}]},{"level":2,"title":"# 插件面板的内容编写","slug":"插件面板的内容编写","link":"#插件面板的内容编写","children":[{"level":3,"title":"# 插件面板的内容编写 - 面板展示内容控制","slug":"插件面板的内容编写-面板展示内容控制","link":"#插件面板的内容编写-面板展示内容控制","children":[]}]},{"level":2,"title":"# 插件编译","slug":"插件编译","link":"#插件编译","children":[]},{"level":2,"title":"# 发布插件","slug":"发布插件","link":"#发布插件","children":[]},{"level":2,"title":"# 理解主进程和渲染进程","slug":"理解主进程和渲染进程","link":"#理解主进程和渲染进程","children":[{"level":3,"title":"# 理解主进程和渲染进程 - 不同进程如何交互","slug":"理解主进程和渲染进程-不同进程如何交互","link":"#理解主进程和渲染进程-不同进程如何交互","children":[]},{"level":3,"title":"# 理解主进程和渲染进程 - 进程间使用误区","slug":"理解主进程和渲染进程-进程间使用误区","link":"#理解主进程和渲染进程-进程间使用误区","children":[]}]},{"level":2,"title":"# 使用 element-plus","slug":"使用-element-plus","link":"#使用-element-plus","children":[]},{"level":2,"title":"# html 和 css 调试技巧","slug":"html-和-css-调试技巧","link":"#html-和-css-调试技巧","children":[]},{"level":2,"title":"# 扩展 inspector","slug":"扩展-inspector","link":"#扩展-inspector","children":[{"level":3,"title":"# 扩展 inspector - 与组件数据的交互方式","slug":"扩展-inspector-与组件数据的交互方式","link":"#扩展-inspector-与组件数据的交互方式","children":[]}]},{"level":2,"title":"# 插件公共代码库","slug":"插件公共代码库","link":"#插件公共代码库","children":[]},{"level":2,"title":"# 插件编译器","slug":"插件编译器","link":"#插件编译器","children":[]},{"level":2,"title":"# 使用 creator 制作插件 UI","slug":"使用-creator-制作插件-ui","link":"#使用-creator-制作插件-ui","children":[]},{"level":2,"title":"# 调试主进程代码","slug":"调试主进程代码","link":"#调试主进程代码","children":[]},{"level":2,"title":"# 代码加密的方式","slug":"代码加密的方式","link":"#代码加密的方式","children":[]}],"git":{"createdTime":1691322266000,"updatedTime":1691322266000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":9.46,"words":2839},"filePathRelative":"博客/文章/3.x 插件开发指南.md","localizedDate":"2022年12月25日","excerpt":"","autoDesc":true}');export{e as data};
