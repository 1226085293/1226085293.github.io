const e=JSON.parse('{"key":"v-f0dee11c","path":"/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/%E6%88%91%E6%89%80%E7%90%86%E8%A7%A3%E7%9A%84SDF%EF%BC%88%E9%98%B4%E5%BD%B1%EF%BC%8C%E6%8F%8F%E8%BE%B9%EF%BC%8C%E5%A4%96%E5%8F%91%E5%85%89%E2%80%A6%EF%BC%89.html","title":"我所理解的SDF（阴影，描边，外发光…）","lang":"zh-CN","frontmatter":{"title":"我所理解的SDF（阴影，描边，外发光…）","date":"2022-03-28T03:56:00.000Z","category":["文章","Cocos","图形学"],"tag":["CocosCreator","2d 阴影","SDF"],"description":"# 效果图 ! (https://forum.cocos.org/uploads/default/original/3X/4/b/4b69d086f21abe7f2eb48a2a6ac72923b277f647.gif =338x213)> # 前言 SDF 是什么？ SDF 的全称是 Signed Distance Field（有符号距离场） 有符号...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/%E6%88%91%E6%89%80%E7%90%86%E8%A7%A3%E7%9A%84SDF%EF%BC%88%E9%98%B4%E5%BD%B1%EF%BC%8C%E6%8F%8F%E8%BE%B9%EF%BC%8C%E5%A4%96%E5%8F%91%E5%85%89%E2%80%A6%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"我所理解的SDF（阴影，描边，外发光…）"}],["meta",{"property":"og:description","content":"# 效果图 ! (https://forum.cocos.org/uploads/default/original/3X/4/b/4b69d086f21abe7f2eb48a2a6ac72923b277f647.gif =338x213)> # 前言 SDF 是什么？ SDF 的全称是 Signed Distance Field（有符号距离场） 有符号..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T16:43:32.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"CocosCreator"}],["meta",{"property":"article:tag","content":"2d 阴影"}],["meta",{"property":"article:tag","content":"SDF"}],["meta",{"property":"article:published_time","content":"2022-03-28T03:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T16:43:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"我所理解的SDF（阴影，描边，外发光…）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-28T03:56:00.000Z\\",\\"dateModified\\":\\"2023-08-15T16:43:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[{"level":2,"title":"# 效果图","slug":"效果图","link":"#效果图","children":[]},{"level":2,"title":"# 前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"# 内容目录","slug":"内容目录","link":"#内容目录","children":[]},{"level":2,"title":"# 什么是 Shader?","slug":"什么是-shader","link":"#什么是-shader","children":[]},{"level":2,"title":"# 如何用 SDF 画一个圆？","slug":"如何用-sdf-画一个圆","link":"#如何用-sdf-画一个圆","children":[{"level":3,"title":"","slug":"","link":"#","children":[]}]},{"level":2,"title":"# 旋转，跳跃，我闭着眼~","slug":"旋转-跳跃-我闭着眼","link":"#旋转-跳跃-我闭着眼","children":[{"level":3,"title":"如何实现？","slug":"如何实现","link":"#如何实现","children":[]},{"level":3,"title":"平移实现了，旋转呢？","slug":"平移实现了-旋转呢","link":"#平移实现了-旋转呢","children":[]}]},{"level":2,"title":"# “正常” 效果","slug":"正常-效果","link":"#正常-效果","children":[{"level":3,"title":"如何实现？","slug":"如何实现-1","link":"#如何实现-1","children":[]}]},{"level":2,"title":"# “相交” 效果","slug":"相交-效果","link":"#相交-效果","children":[{"level":3,"title":"如何实现？","slug":"如何实现-2","link":"#如何实现-2","children":[]}]},{"level":2,"title":"# “融合” 效果","slug":"融合-效果","link":"#融合-效果","children":[{"level":3,"title":"如何实现？","slug":"如何实现-3","link":"#如何实现-3","children":[]}]},{"level":2,"title":"# 比较硬的阴影","slug":"比较硬的阴影","link":"#比较硬的阴影","children":[{"level":3,"title":"什么是硬阴影？","slug":"什么是硬阴影","link":"#什么是硬阴影","children":[]},{"level":3,"title":"","slug":"-1","link":"#-1","children":[]},{"level":3,"title":"小二，上一份代码，不要辣","slug":"小二-上一份代码-不要辣","link":"#小二-上一份代码-不要辣","children":[]}]},{"level":2,"title":"# 比较软的阴影","slug":"比较软的阴影","link":"#比较软的阴影","children":[{"level":3,"title":"","slug":"-2","link":"#-2","children":[]},{"level":3,"title":"先上代码","slug":"先上代码","link":"#先上代码","children":[]},{"level":3,"title":"","slug":"-3","link":"#-3","children":[]}]},{"level":2,"title":"# 结语","slug":"结语","link":"#结语","children":[{"level":3,"title":"福音书（Code）","slug":"福音书-code","link":"#福音书-code","children":[]},{"level":3,"title":"参考代码","slug":"参考代码","link":"#参考代码","children":[]},{"level":3,"title":"推荐的 shader 调试网址","slug":"推荐的-shader-调试网址","link":"#推荐的-shader-调试网址","children":[]}]}],"git":{"createdTime":1691322266000,"updatedTime":1692117812000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":2}]},"readingTime":{"minutes":8.03,"words":2409},"filePathRelative":"博客/文章/我所理解的SDF（阴影，描边，外发光…）.md","localizedDate":"2022年3月28日","excerpt":"","autoDesc":true}');export{e as data};
