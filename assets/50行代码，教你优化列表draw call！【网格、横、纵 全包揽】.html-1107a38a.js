const t=JSON.parse('{"key":"v-0835b761","path":"/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/50%E8%A1%8C%E4%BB%A3%E7%A0%81%EF%BC%8C%E6%95%99%E4%BD%A0%E4%BC%98%E5%8C%96%E5%88%97%E8%A1%A8draw%20call%EF%BC%81%E3%80%90%E7%BD%91%E6%A0%BC%E3%80%81%E6%A8%AA%E3%80%81%E7%BA%B5%20%E5%85%A8%E5%8C%85%E6%8F%BD%E3%80%91.html","title":"50行代码，教你优化列表draw call！【网格、横、纵 全包揽】","lang":"zh-CN","frontmatter":{"title":"50行代码，教你优化列表draw call！【网格、横、纵 全包揽】","date":"2021-01-11T03:06:00.000Z","category":["文章","Cocos"],"tag":["CocosCreator","性能优化"],"description":"话不多说，上效果： 示例数据 列表 item 数：1000; draw call：43~48; 可以看到 draw call 一直在 45 左右徘徊，（FPS 低是因为录屏）。 下面上代码 原理：通过检测 item 与列表可视区域的碰撞，如果碰撞到了那么即判断为在可视区域内，将 item 的 opacity 设为 255，反之为 0. 注： 本代码使用...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/50%E8%A1%8C%E4%BB%A3%E7%A0%81%EF%BC%8C%E6%95%99%E4%BD%A0%E4%BC%98%E5%8C%96%E5%88%97%E8%A1%A8draw%20call%EF%BC%81%E3%80%90%E7%BD%91%E6%A0%BC%E3%80%81%E6%A8%AA%E3%80%81%E7%BA%B5%20%E5%85%A8%E5%8C%85%E6%8F%BD%E3%80%91.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"50行代码，教你优化列表draw call！【网格、横、纵 全包揽】"}],["meta",{"property":"og:description","content":"话不多说，上效果： 示例数据 列表 item 数：1000; draw call：43~48; 可以看到 draw call 一直在 45 左右徘徊，（FPS 低是因为录屏）。 下面上代码 原理：通过检测 item 与列表可视区域的碰撞，如果碰撞到了那么即判断为在可视区域内，将 item 的 opacity 设为 255，反之为 0. 注： 本代码使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T16:43:32.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"CocosCreator"}],["meta",{"property":"article:tag","content":"性能优化"}],["meta",{"property":"article:published_time","content":"2021-01-11T03:06:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T16:43:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"50行代码，教你优化列表draw call！【网格、横、纵 全包揽】\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-11T03:06:00.000Z\\",\\"dateModified\\":\\"2023-08-15T16:43:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[{"level":2,"title":"话不多说，上效果：","slug":"话不多说-上效果","link":"#话不多说-上效果","children":[{"level":3,"title":"示例数据","slug":"示例数据","link":"#示例数据","children":[]}]},{"level":2,"title":"注：","slug":"注","link":"#注","children":[]},{"level":2,"title":"代码块讲解：","slug":"代码块讲解","link":"#代码块讲解","children":[]}],"git":{"createdTime":1691322266000,"updatedTime":1692117812000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":2}]},"readingTime":{"minutes":2.46,"words":739},"filePathRelative":"博客/文章/50行代码，教你优化列表draw call！【网格、横、纵 全包揽】.md","localizedDate":"2021年1月11日","excerpt":"","autoDesc":true}');export{t as data};
