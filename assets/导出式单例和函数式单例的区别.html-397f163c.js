const t=JSON.parse('{"key":"v-aefddfae","path":"/%E5%8D%9A%E5%AE%A2/%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/Typescript/%E5%AF%BC%E5%87%BA%E5%BC%8F%E5%8D%95%E4%BE%8B%E5%92%8C%E5%87%BD%E6%95%B0%E5%BC%8F%E5%8D%95%E4%BE%8B%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"导出式单例和函数式单例的区别","lang":"zh-CN","frontmatter":{"title":"导出式单例和函数式单例的区别","date":"2020-07-23T20:14:00.000Z","category":["笔记","设计模式"],"tag":["Typescript","单例模式"],"description":"大家或多或少都用过单例模式，那么我就在这里和大家说说这两种单例的区别： 导出式单例： 例如： export default new A; //A 是一个类 这种单例很方便， 但也是因为方便，这个导出的单例在我们 导入时就已经创建好了对象，如果一直使用这种单例方式那么随着我们脚本越来越多，你会发现启动速度越来越慢。特别是在 construct 里面初始化...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/%E5%8D%9A%E5%AE%A2/%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/Typescript/%E5%AF%BC%E5%87%BA%E5%BC%8F%E5%8D%95%E4%BE%8B%E5%92%8C%E5%87%BD%E6%95%B0%E5%BC%8F%E5%8D%95%E4%BE%8B%E7%9A%84%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"导出式单例和函数式单例的区别"}],["meta",{"property":"og:description","content":"大家或多或少都用过单例模式，那么我就在这里和大家说说这两种单例的区别： 导出式单例： 例如： export default new A; //A 是一个类 这种单例很方便， 但也是因为方便，这个导出的单例在我们 导入时就已经创建好了对象，如果一直使用这种单例方式那么随着我们脚本越来越多，你会发现启动速度越来越慢。特别是在 construct 里面初始化..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T16:43:32.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"Typescript"}],["meta",{"property":"article:tag","content":"单例模式"}],["meta",{"property":"article:published_time","content":"2020-07-23T20:14:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T16:43:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"导出式单例和函数式单例的区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-23T20:14:00.000Z\\",\\"dateModified\\":\\"2023-08-15T16:43:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1692117812000,"updatedTime":1692117812000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.01,"words":302},"filePathRelative":"博客/笔记/编程语言/Typescript/导出式单例和函数式单例的区别.md","localizedDate":"2020年7月23日","excerpt":"","autoDesc":true}');export{t as data};
