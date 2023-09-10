const e=JSON.parse('{"key":"v-5e8f8394","path":"/blog/notes/language/cpp/24.html","title":"C++线程安全的定时器(时间堆)实现","lang":"zh-CN","frontmatter":{"title":"C++线程安全的定时器(时间堆)实现","date":"2020-03-21T19:20:05.000Z","category":["笔记","编程语言"],"tag":["C++","多线程","定时器"],"description":"适合事件驱动系统的时间堆定时器，所有接口都尽量设计的简单易用。; 现在大部分流行的定时器一般分为两种，时间轮，时间堆。基于设计上而言。时间轮可以设计为滴答检测超时事件，或者直接在循环中检查超时事件。而时间堆异同。; 我之前就写过一个基于滴答检测超时事件的定时器，这样的机制会造成一个问题。那就是由于休眠唤醒的时间总会有微小的误差（每次滴答），那么每次的误...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/cpp/24.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"C++线程安全的定时器(时间堆)实现"}],["meta",{"property":"og:description","content":"适合事件驱动系统的时间堆定时器，所有接口都尽量设计的简单易用。; 现在大部分流行的定时器一般分为两种，时间轮，时间堆。基于设计上而言。时间轮可以设计为滴答检测超时事件，或者直接在循环中检查超时事件。而时间堆异同。; 我之前就写过一个基于滴答检测超时事件的定时器，这样的机制会造成一个问题。那就是由于休眠唤醒的时间总会有微小的误差（每次滴答），那么每次的误..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:tag","content":"定时器"}],["meta",{"property":"article:published_time","content":"2020-03-21T19:20:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++线程安全的定时器(时间堆)实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-03-21T19:20:05.000Z\\",\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[{"level":2,"title":"性能测试（Release_x64）","slug":"性能测试-release-x64","link":"#性能测试-release-x64","children":[]}],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":2.93,"words":878},"filePathRelative":"blog/notes/language/cpp/24.md","localizedDate":"2020年3月21日","excerpt":"","autoDesc":true}');export{e as data};
