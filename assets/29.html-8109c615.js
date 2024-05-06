const l=JSON.parse('{"key":"v-a7d23236","path":"/blog/article/29.html","title":"关于 MKFramework 的设计想法","lang":"zh-CN","frontmatter":{"title":"关于 MKFramework 的设计想法","date":"2024-04-16T00:00:00.000Z","category":["文章","Cocos"],"tag":["CocosCreator","游戏框架"],"layout":"slot_share","description":"MKFramework是我个人维护持续了几年的项目（虽然公开只有一年左右），最开始由于自己从事QP类游戏开发，我很喜欢MVVM，于是想把他做成 MVVM 框架，在论坛第一个 MVVM 框架出来的时候，我的框架已经快完成了，但是为了其他人项目的安全着想还是没有发布.. 后面又进行了数次大改动，现在说说自己对于代码框架开发的一些心得和想法","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/article/29.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"关于 MKFramework 的设计想法"}],["meta",{"property":"og:description","content":"MKFramework是我个人维护持续了几年的项目（虽然公开只有一年左右），最开始由于自己从事QP类游戏开发，我很喜欢MVVM，于是想把他做成 MVVM 框架，在论坛第一个 MVVM 框架出来的时候，我的框架已经快完成了，但是为了其他人项目的安全着想还是没有发布.. 后面又进行了数次大改动，现在说说自己对于代码框架开发的一些心得和想法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T09:08:08.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"CocosCreator"}],["meta",{"property":"article:tag","content":"游戏框架"}],["meta",{"property":"article:published_time","content":"2024-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T09:08:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关于 MKFramework 的设计想法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T09:08:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[{"level":2,"title":"1. 适配","slug":"_1-适配","link":"#_1-适配","children":[]},{"level":2,"title":"2. 生命周期","slug":"_2-生命周期","link":"#_2-生命周期","children":[{"level":3,"title":"1. 为什么需要生命周期函数","slug":"_1-为什么需要生命周期函数","link":"#_1-为什么需要生命周期函数","children":[]},{"level":3,"title":"2. 生命周期函数需要有哪些？","slug":"_2-生命周期函数需要有哪些","link":"#_2-生命周期函数需要有哪些","children":[]},{"level":3,"title":"create（初始化视图回调）","slug":"create-初始化视图回调","link":"#create-初始化视图回调","children":[]},{"level":3,"title":"init（初始化数据回调）","slug":"init-初始化数据回调","link":"#init-初始化数据回调","children":[]},{"level":3,"title":"late_close（关闭之后）","slug":"late-close-关闭之后","link":"#late-close-关闭之后","children":[]},{"level":3,"title":"3. 怎么驱动生命周期？","slug":"_3-怎么驱动生命周期","link":"#_3-怎么驱动生命周期","children":[]}]},{"level":2,"title":"3. UI 管理器","slug":"_3-ui-管理器","link":"#_3-ui-管理器","children":[{"level":3,"title":"regis","slug":"regis","link":"#regis","children":[]},{"level":3,"title":"unregis","slug":"unregis","link":"#unregis","children":[]},{"level":3,"title":"open","slug":"open","link":"#open","children":[]},{"level":3,"title":"close","slug":"close","link":"#close","children":[]},{"level":3,"title":"get","slug":"get","link":"#get","children":[]},{"level":3,"title":"单脚本多预制","slug":"单脚本多预制","link":"#单脚本多预制","children":[]},{"level":3,"title":"类型安全","slug":"类型安全","link":"#类型安全","children":[]}]},{"level":2,"title":"4. 纯代码开发","slug":"_4-纯代码开发","link":"#_4-纯代码开发","children":[]},{"level":2,"title":"5. 层级管理","slug":"_5-层级管理","link":"#_5-层级管理","children":[]},{"level":2,"title":"6. 快捷操作","slug":"_6-快捷操作","link":"#_6-快捷操作","children":[]},{"level":2,"title":"1. 结构","slug":"_1-结构","link":"#_1-结构","children":[{"level":3,"title":"创建音频单元","slug":"创建音频单元","link":"#创建音频单元","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"2. 解决多音频监听结束回调","slug":"_2-解决多音频监听结束回调","link":"#_2-解决多音频监听结束回调","children":[{"level":3,"title":"为 playOneShot 添加结束回调","slug":"为-playoneshot-添加结束回调","link":"#为-playoneshot-添加结束回调","children":[]},{"level":3,"title":"AudioSource 对象池","slug":"audiosource-对象池","link":"#audiosource-对象池","children":[]}]},{"level":2,"title":"3. 音频分组","slug":"_3-音频分组","link":"#_3-音频分组","children":[{"level":3,"title":"功能","slug":"功能","link":"#功能","children":[]},{"level":3,"title":"规则","slug":"规则","link":"#规则","children":[]}]},{"level":2,"title":"1. 无须传递消息号的秘密","slug":"_1-无须传递消息号的秘密","link":"#_1-无须传递消息号的秘密","children":[{"level":3,"title":"答案","slug":"答案","link":"#答案","children":[]}]},{"level":2,"title":"2. 模拟事件结构的网络消息","slug":"_2-模拟事件结构的网络消息","link":"#_2-模拟事件结构的网络消息","children":[]},{"level":2,"title":"3. 消息潮","slug":"_3-消息潮","link":"#_3-消息潮","children":[]},{"level":2,"title":"1. 解决资源释放管理","slug":"_1-解决资源释放管理","link":"#_1-解决资源释放管理","children":[]},{"level":2,"title":"2. 解决资源系统的 Bug","slug":"_2-解决资源系统的-bug","link":"#_2-解决资源系统的-bug","children":[{"level":3,"title":"同时加载同一资源，返回的资源对象不一致","slug":"同时加载同一资源-返回的资源对象不一致","link":"#同时加载同一资源-返回的资源对象不一致","children":[]},{"level":3,"title":"释放资源后立即加载会出现返回的资源已经无效","slug":"释放资源后立即加载会出现返回的资源已经无效","link":"#释放资源后立即加载会出现返回的资源已经无效","children":[]}]},{"level":2,"title":"3. 针对接口的优化","slug":"_3-针对接口的优化","link":"#_3-针对接口的优化","children":[]},{"level":2,"title":"4. Bundle 热更","slug":"_4-bundle-热更","link":"#_4-bundle-热更","children":[]},{"level":2,"title":"5. Bundle 管理器","slug":"_5-bundle-管理器","link":"#_5-bundle-管理器","children":[]},{"level":2,"title":"1. 避免垃圾的堆积","slug":"_1-避免垃圾的堆积","link":"#_1-避免垃圾的堆积","children":[]},{"level":2,"title":"2. 多语言节点","slug":"_2-多语言节点","link":"#_2-多语言节点","children":[]},{"level":2,"title":"1. 引导步骤脚本","slug":"_1-引导步骤脚本","link":"#_1-引导步骤脚本","children":[{"level":3,"title":"注册引导步骤","slug":"注册引导步骤","link":"#注册引导步骤","children":[]},{"level":3,"title":"引导步骤脚本内容","slug":"引导步骤脚本内容","link":"#引导步骤脚本内容","children":[]}]},{"level":2,"title":"2. 使用引导单元实现任意步骤的跳转","slug":"_2-使用引导单元实现任意步骤的跳转","link":"#_2-使用引导单元实现任意步骤的跳转","children":[{"level":3,"title":"操作单元接口","slug":"操作单元接口","link":"#操作单元接口","children":[]}]},{"level":2,"title":"3. 避免误触","slug":"_3-避免误触","link":"#_3-避免误触","children":[]},{"level":2,"title":"4. 引导步骤的插入/删除","slug":"_4-引导步骤的插入-删除","link":"#_4-引导步骤的插入-删除","children":[]},{"level":2,"title":"5. 更新引导数据","slug":"_5-更新引导数据","link":"#_5-更新引导数据","children":[]},{"level":2,"title":"6. 多边形遮罩、触摸屏蔽","slug":"_6-多边形遮罩、触摸屏蔽","link":"#_6-多边形遮罩、触摸屏蔽","children":[]},{"level":2,"title":"1. 类型安全","slug":"_1-类型安全","link":"#_1-类型安全","children":[{"level":3,"title":"使用","slug":"使用-1","link":"#使用-1","children":[]},{"level":3,"title":"提示","slug":"提示","link":"#提示","children":[]}]},{"level":2,"title":"2. 增强接口：request（请求）","slug":"_2-增强接口-request-请求","link":"#_2-增强接口-request-请求","children":[]},{"level":2,"title":"1. 类型安全","slug":"_1-类型安全-1","link":"#_1-类型安全-1","children":[]},{"level":2,"title":"2. 怎么保证默认值存储","slug":"_2-怎么保证默认值存储","link":"#_2-怎么保证默认值存储","children":[]},{"level":2,"title":"同步数据","slug":"同步数据","link":"#同步数据","children":[]},{"level":2,"title":"异步数据","slug":"异步数据","link":"#异步数据","children":[]},{"level":2,"title":"依赖环境","slug":"依赖环境","link":"#依赖环境","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[]},{"level":2,"title":"使用","slug":"使用-2","link":"#使用-2","children":[]},{"level":2,"title":"网站","slug":"网站","link":"#网站","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"有任何问题欢迎批评，只有批评才能让产品进步","slug":"有任何问题欢迎批评-只有批评才能让产品进步","link":"#有任何问题欢迎批评-只有批评才能让产品进步","children":[]}]}],"git":{"createdTime":1714986488000,"updatedTime":1714986488000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":20.76,"words":6229},"filePathRelative":"blog/article/29.md","localizedDate":"2024年4月16日","excerpt":"<figure><img src=\\"https://gitee.com/muzzik/images/raw/master/blog/article/29/1.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>MKFramework是我个人维护持续了几年的项目（虽然公开只有一年左右），最开始由于自己从事QP类游戏开发，我很喜欢MVVM，于是想把他做成 MVVM 框架，在论坛第一个 MVVM 框架出来的时候，我的框架已经快完成了，但是为了其他人项目的安全着想还是没有发布.. 后面又进行了数次大改动，现在说说自己对于代码框架开发的一些心得和想法</p>\\n","autoDesc":true}');export{l as data};
