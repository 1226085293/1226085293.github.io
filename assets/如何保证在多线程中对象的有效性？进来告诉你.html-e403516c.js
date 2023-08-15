const t=JSON.parse('{"key":"v-7882a8a2","path":"/%E5%8D%9A%E5%AE%A2/%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/C__/%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E5%9C%A8%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%B8%AD%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%9C%89%E6%95%88%E6%80%A7%EF%BC%9F%E8%BF%9B%E6%9D%A5%E5%91%8A%E8%AF%89%E4%BD%A0.html","title":"如何保证在多线程中对象的有效性？进来告诉你","lang":"zh-CN","frontmatter":{"title":"如何保证在多线程中对象的有效性？进来告诉你","date":"2020-05-30T00:40:34.000Z","category":["笔记","编程语言"],"tag":["C++","多线程"],"description":"大家一定在网上看过其他文章，都是说用std::shared_ptr，其实还有一种情况，就是在 std::shared_ptr 也销毁后的情况下调用对象的函数，这时候会直接抛出错误 那么我们如何安全的使用一个对象呢，很简单，利用std::shared_ptr + std::enable_shared_from_this，如果我们在对象销毁后再调用对象成员...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/%E5%8D%9A%E5%AE%A2/%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/C__/%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E5%9C%A8%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%B8%AD%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%9C%89%E6%95%88%E6%80%A7%EF%BC%9F%E8%BF%9B%E6%9D%A5%E5%91%8A%E8%AF%89%E4%BD%A0.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"如何保证在多线程中对象的有效性？进来告诉你"}],["meta",{"property":"og:description","content":"大家一定在网上看过其他文章，都是说用std::shared_ptr，其实还有一种情况，就是在 std::shared_ptr 也销毁后的情况下调用对象的函数，这时候会直接抛出错误 那么我们如何安全的使用一个对象呢，很简单，利用std::shared_ptr + std::enable_shared_from_this，如果我们在对象销毁后再调用对象成员..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T16:43:32.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:published_time","content":"2020-05-30T00:40:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T16:43:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何保证在多线程中对象的有效性？进来告诉你\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-30T00:40:34.000Z\\",\\"dateModified\\":\\"2023-08-15T16:43:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1692117812000,"updatedTime":1692117812000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.24,"words":372},"filePathRelative":"博客/笔记/编程语言/C++/如何保证在多线程中对象的有效性？进来告诉你.md","localizedDate":"2020年5月30日","excerpt":"","autoDesc":true}');export{t as data};
