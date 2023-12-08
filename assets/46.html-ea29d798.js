const e=JSON.parse('{"key":"v-3dee65f6","path":"/blog/notes/language/cpp/46.html","title":"Socket的阻塞、非阻塞、同步、异步四种状态区别【转载】","lang":"zh-CN","frontmatter":{"title":"Socket的阻塞、非阻塞、同步、异步四种状态区别【转载】","date":"2020-02-11T03:57:00.000Z","category":["笔记","编程语言"],"tag":["C++","Socket"],"layout":"slot_share","description":"阻塞模式和非阻塞模式的主要区别在于无请求来到时，阻塞模式会一直停在接收函数即accep函数，直到有请求到来才会继续向下进行处理。而非阻塞模式下，运行接收函数，如果有请求，则会接收请求，如果无请求，会返回一个负值，并继续向下运行。一般来说，使用阻塞模式的程序比较多，因为阻塞模式是由内核保障等待请求的，当他阻塞时不占用系统资源，而非阻塞模式需要我们人工轮询，占用资源较多。另外，阻塞模式可以使用select函数设置超时时间","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/cpp/46.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"Socket的阻塞、非阻塞、同步、异步四种状态区别【转载】"}],["meta",{"property":"og:description","content":"阻塞模式和非阻塞模式的主要区别在于无请求来到时，阻塞模式会一直停在接收函数即accep函数，直到有请求到来才会继续向下进行处理。而非阻塞模式下，运行接收函数，如果有请求，则会接收请求，如果无请求，会返回一个负值，并继续向下运行。一般来说，使用阻塞模式的程序比较多，因为阻塞模式是由内核保障等待请求的，当他阻塞时不占用系统资源，而非阻塞模式需要我们人工轮询，占用资源较多。另外，阻塞模式可以使用select函数设置超时时间"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-14T09:20:42.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"Socket"}],["meta",{"property":"article:published_time","content":"2020-02-11T03:57:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-14T09:20:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Socket的阻塞、非阻塞、同步、异步四种状态区别【转载】\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-11T03:57:00.000Z\\",\\"dateModified\\":\\"2023-09-14T09:20:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694672745000,"updatedTime":1694683242000,"contributors":[{"name":"yuanfengxin","email":"1226085293@qq.com","commits":3}]},"readingTime":{"minutes":9.77,"words":2932},"filePathRelative":"blog/notes/language/cpp/46.md","localizedDate":"2020年2月11日","excerpt":"<p>阻塞模式和非阻塞模式的主要区别在于无请求来到时，阻塞模式会一直停在接收函数即accep函数，直到有请求到来才会继续向下进行处理。而非阻塞模式下，运行接收函数，如果有请求，则会接收请求，如果无请求，会返回一个负值，并继续向下运行。一般来说，使用阻塞模式的程序比较多，因为阻塞模式是由内核保障等待请求的，当他阻塞时不占用系统资源，而非阻塞模式需要我们人工轮询，占用资源较多。另外，阻塞模式可以使用select函数设置超时时间</p>\\n","autoDesc":true}');export{e as data};