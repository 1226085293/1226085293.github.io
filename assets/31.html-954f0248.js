const e=JSON.parse('{"key":"v-595345a4","path":"/blog/article/31.html","title":"3D模型平面切割","lang":"zh-CN","frontmatter":{"title":"3D模型平面切割","date":"2024-04-11T00:00:00.000Z","category":["文章","Cocos"],"tag":["CocosCreator","Mesh"],"layout":"slot_share","description":"# 前言 一年一度的征稿到了，倒腾点存货，3D平面切割通常用于一些解压游戏里，例如水果忍者，切菜这些，今天我就给大家讲讲怎么实现3D切割以及其原理，帮助大家更理解3D中的 Mesh(网格)，以及UV贴图和法线 由于和参赛帖另一篇文章主题相同，先自证一下这是存货 本来想等 Store 审核通过再发，但是免得大家说我抄袭就先上了","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/article/31.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"3D模型平面切割"}],["meta",{"property":"og:description","content":"# 前言 一年一度的征稿到了，倒腾点存货，3D平面切割通常用于一些解压游戏里，例如水果忍者，切菜这些，今天我就给大家讲讲怎么实现3D切割以及其原理，帮助大家更理解3D中的 Mesh(网格)，以及UV贴图和法线 由于和参赛帖另一篇文章主题相同，先自证一下这是存货 本来想等 Store 审核通过再发，但是免得大家说我抄袭就先上了"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T09:08:08.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"CocosCreator"}],["meta",{"property":"article:tag","content":"Mesh"}],["meta",{"property":"article:published_time","content":"2024-04-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T09:08:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3D模型平面切割\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T09:08:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[{"level":2,"title":"了解模型","slug":"了解模型","link":"#了解模型","children":[]},{"level":2,"title":"创建平面对象","slug":"创建平面对象","link":"#创建平面对象","children":[]},{"level":2,"title":"获取网格数据","slug":"获取网格数据","link":"#获取网格数据","children":[{"level":3,"title":"怎么获取？","slug":"怎么获取","link":"#怎么获取","children":[]}]},{"level":2,"title":"判断三角形是否与平面相交","slug":"判断三角形是否与平面相交","link":"#判断三角形是否与平面相交","children":[]},{"level":2,"title":"切割三角形","slug":"切割三角形","link":"#切割三角形","children":[{"level":3,"title":"怎么确定交点（i1, i2）？","slug":"怎么确定交点-i1-i2","link":"#怎么确定交点-i1-i2","children":[]},{"level":3,"title":"法线和UV","slug":"法线和uv","link":"#法线和uv","children":[]}]},{"level":2,"title":"简单的三角剖分方案","slug":"简单的三角剖分方案","link":"#简单的三角剖分方案","children":[]},{"level":2,"title":"不支持凹面多边形的后果","slug":"不支持凹面多边形的后果","link":"#不支持凹面多边形的后果","children":[]},{"level":2,"title":"那么如何做？步骤如下","slug":"那么如何做-步骤如下","link":"#那么如何做-步骤如下","children":[{"level":3,"title":"怎么判断凹凸？","slug":"怎么判断凹凸","link":"#怎么判断凹凸","children":[]},{"level":3,"title":"将凹多边形分解为凸多边形","slug":"将凹多边形分解为凸多边形","link":"#将凹多边形分解为凸多边形","children":[]},{"level":3,"title":"平面带孔的情况","slug":"平面带孔的情况","link":"#平面带孔的情况","children":[]},{"level":3,"title":"Cocos Store：https://store.cocos.com/app/detail/6118","slug":"cocos-store-https-store-cocos-com-app-detail-6118","link":"#cocos-store-https-store-cocos-com-app-detail-6118","children":[]},{"level":3,"title":"原生预览调试！我给Cocos加了个新功能，原生开发者福音","slug":"原生预览调试-我给cocos加了个新功能-原生开发者福音","link":"#原生预览调试-我给cocos加了个新功能-原生开发者福音","children":[]}]}],"git":{"createdTime":1714986488000,"updatedTime":1714986488000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":8.82,"words":2645},"filePathRelative":"blog/article/31.md","localizedDate":"2024年4月11日","excerpt":"<figure><img src=\\"https://gitee.com/muzzik/images/raw/master/blog/article/31/1.gif\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h1> # 前言</h1>\\n<p>一年一度的征稿到了，倒腾点存货，3D平面切割通常用于一些解压游戏里，例如水果忍者，切菜这些，今天我就给大家讲讲怎么实现3D切割以及其原理，帮助大家更理解3D中的 Mesh(网格)，以及UV贴图和法线</p>\\n<p>由于和参赛帖另一篇文章主题相同，先自证一下这是存货<br>\\n本来想等 Store 审核通过再发，但是免得大家说我抄袭就先上了</p>","autoDesc":true}');export{e as data};