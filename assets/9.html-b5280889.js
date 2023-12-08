const e=JSON.parse('{"key":"v-8d94d12a","path":"/blog/notes/cocos/cocos-creator/9.html","title":"如何在插件脚本内require外部模块","lang":"zh-CN","frontmatter":{"title":"如何在插件脚本内require外部模块","date":"2021-06-28T02:48:00.000Z","category":["笔记","Cocos"],"tag":["CocosCreator","开发技巧"],"layout":"slot_share","description":"作者版本 2.4.3 众所周知在插件脚本内是不能 require 外部脚本的，在下做过各种尝试，发现最终办法一共有两个： 在构建后修改 index.js 内的 require 顺序，实现（伪 - 插件脚本）; 在插件脚本内通过同步/异步的 require 外部脚本，在下最开始尝试了同步方法，结果发现只能在编辑器或者网页预览的时候才能正常使用，于是用了异...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/cocos/cocos-creator/9.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"如何在插件脚本内require外部模块"}],["meta",{"property":"og:description","content":"作者版本 2.4.3 众所周知在插件脚本内是不能 require 外部脚本的，在下做过各种尝试，发现最终办法一共有两个： 在构建后修改 index.js 内的 require 顺序，实现（伪 - 插件脚本）; 在插件脚本内通过同步/异步的 require 外部脚本，在下最开始尝试了同步方法，结果发现只能在编辑器或者网页预览的时候才能正常使用，于是用了异..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"CocosCreator"}],["meta",{"property":"article:tag","content":"开发技巧"}],["meta",{"property":"article:published_time","content":"2021-06-28T02:48:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何在插件脚本内require外部模块\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-06-28T02:48:00.000Z\\",\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.06,"words":318},"filePathRelative":"blog/notes/cocos/cocos-creator/9.md","localizedDate":"2021年6月28日","excerpt":"","autoDesc":true}');export{e as data};