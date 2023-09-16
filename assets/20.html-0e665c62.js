const t=JSON.parse('{"key":"v-6c36488c","path":"/blog/notes/language/cpp/20.html","title":"C++利用继承实现线程安全函数","lang":"zh-CN","frontmatter":{"title":"C++利用继承实现线程安全函数","date":"2020-04-28T01:23:41.000Z","category":["笔记","编程语言"],"tag":["C++","多线程"],"description":"因为被多线程搞的有点头痛，所以想了一个简单的办法，不用自己手动加锁，也免去了使用 raii 机制，直接传递一个 std::function 即可.  仅做参考 代码： raii_critical.h safe_base.h 使用： 这个最重要的功能还是退出标记，可以防止析构后其他进程仍在操作已销毁的对象造成异常。不过不能传参，局限性很大","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/cpp/20.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"C++利用继承实现线程安全函数"}],["meta",{"property":"og:description","content":"因为被多线程搞的有点头痛，所以想了一个简单的办法，不用自己手动加锁，也免去了使用 raii 机制，直接传递一个 std::function 即可.  仅做参考 代码： raii_critical.h safe_base.h 使用： 这个最重要的功能还是退出标记，可以防止析构后其他进程仍在操作已销毁的对象造成异常。不过不能传参，局限性很大"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:published_time","content":"2020-04-28T01:23:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++利用继承实现线程安全函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-04-28T01:23:41.000Z\\",\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"blog/notes/language/cpp/20.md","localizedDate":"2020年4月28日","excerpt":"","autoDesc":true}');export{t as data};