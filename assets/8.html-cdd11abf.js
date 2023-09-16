const t=JSON.parse('{"key":"v-31c6f162","path":"/blog/notes/language/cpp/8.html","title":"如何保证在多线程中对象的有效性？进来告诉你","lang":"zh-CN","frontmatter":{"title":"如何保证在多线程中对象的有效性？进来告诉你","date":"2020-05-30T00:40:34.000Z","category":["笔记","编程语言"],"tag":["C++","多线程"],"description":"大家一定在网上看过其他文章，都是说用std::shared_ptr，其实还有一种情况，就是在 std::shared_ptr 也销毁后的情况下调用对象的函数，这时候会直接抛出错误 那么我们如何安全的使用一个对象呢，很简单，利用std::shared_ptr + std::enable_shared_from_this，如果我们在对象销毁后再调用对象成员...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/cpp/8.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"如何保证在多线程中对象的有效性？进来告诉你"}],["meta",{"property":"og:description","content":"大家一定在网上看过其他文章，都是说用std::shared_ptr，其实还有一种情况，就是在 std::shared_ptr 也销毁后的情况下调用对象的函数，这时候会直接抛出错误 那么我们如何安全的使用一个对象呢，很简单，利用std::shared_ptr + std::enable_shared_from_this，如果我们在对象销毁后再调用对象成员..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:published_time","content":"2020-05-30T00:40:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何保证在多线程中对象的有效性？进来告诉你\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-30T00:40:34.000Z\\",\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.24,"words":372},"filePathRelative":"blog/notes/language/cpp/8.md","localizedDate":"2020年5月30日","excerpt":"","autoDesc":true}');export{t as data};