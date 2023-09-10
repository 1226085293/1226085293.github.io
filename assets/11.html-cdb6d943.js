const e=JSON.parse('{"key":"v-d2990dd0","path":"/blog/notes/language/cpp/11.html","title":"最小堆的指定删除","lang":"zh-CN","frontmatter":{"title":"最小堆的指定删除","date":"2020-05-23T23:51:58.000Z","category":["笔记","排序算法"],"tag":["C++","最小堆"],"description":"其实最小堆是可以指定删除某个节点的，包括最大堆。只要使用正确的方法 伪代码： // 向下调整 if (末尾节点 key >  要删除的节点 key) { //这里就使用尾换头的方法调整，只不过把所谓的 \\"头\\" 换成了指定节点 } // 向上调整 else { //这里的逻辑比尾换头简单的多，也是我们删除指定节点重要的地方，向上调整 因为我们要删除的节点...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/cpp/11.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"最小堆的指定删除"}],["meta",{"property":"og:description","content":"其实最小堆是可以指定删除某个节点的，包括最大堆。只要使用正确的方法 伪代码： // 向下调整 if (末尾节点 key >  要删除的节点 key) { //这里就使用尾换头的方法调整，只不过把所谓的 \\"头\\" 换成了指定节点 } // 向上调整 else { //这里的逻辑比尾换头简单的多，也是我们删除指定节点重要的地方，向上调整 因为我们要删除的节点..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"最小堆"}],["meta",{"property":"article:published_time","content":"2020-05-23T23:51:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"最小堆的指定删除\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-23T23:51:58.000Z\\",\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.18,"words":353},"filePathRelative":"blog/notes/language/cpp/11.md","localizedDate":"2020年5月23日","excerpt":"","autoDesc":true}');export{e as data};
