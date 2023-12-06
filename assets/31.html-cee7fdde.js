const t=JSON.parse('{"key":"v-007fef9a","path":"/blog/notes/language/cpp/31.html","title":"std::enable_shared_from_this有什么意义？进来告诉你","lang":"zh-CN","frontmatter":{"title":"std::enable_shared_from_this有什么意义？进来告诉你","date":"2020-05-30T00:18:41.000Z","category":["笔记","编程语言"],"tag":["C++","智能指针"],"layout":"slot_share","description":"之前我一直不知道 std::enablesharedfrom_this 有什么意义，官方的解答是传递自身的智能指针，但我也一直没用到，都是以第三者的身份管理和传递其他类型的智能 但是，直到我看到了一篇知乎的帖子，上面是这么说的： 需求: 在类的内部需要自身的 shared_ptr 而不是 this 裸指针 场景: 在类中发起一个异步操作, callba...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/cpp/31.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"std::enable_shared_from_this有什么意义？进来告诉你"}],["meta",{"property":"og:description","content":"之前我一直不知道 std::enablesharedfrom_this 有什么意义，官方的解答是传递自身的智能指针，但我也一直没用到，都是以第三者的身份管理和传递其他类型的智能 但是，直到我看到了一篇知乎的帖子，上面是这么说的： 需求: 在类的内部需要自身的 shared_ptr 而不是 this 裸指针 场景: 在类中发起一个异步操作, callba..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"智能指针"}],["meta",{"property":"article:published_time","content":"2020-05-30T00:18:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"std::enable_shared_from_this有什么意义？进来告诉你\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-30T00:18:41.000Z\\",\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.41,"words":423},"filePathRelative":"blog/notes/language/cpp/31.md","localizedDate":"2020年5月30日","excerpt":"","autoDesc":true}');export{t as data};
