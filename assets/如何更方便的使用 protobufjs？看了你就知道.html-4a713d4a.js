const t=JSON.parse('{"key":"v-33cf291c","path":"/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B9%E4%BE%BF%E7%9A%84%E4%BD%BF%E7%94%A8%20protobufjs%EF%BC%9F%E7%9C%8B%E4%BA%86%E4%BD%A0%E5%B0%B1%E7%9F%A5%E9%81%93.html","title":"如何更方便的使用 protobufjs？看了你就知道","lang":"zh-CN","frontmatter":{"title":"如何更方便的使用 protobufjs？看了你就知道","date":"2023-08-25T21:49:00.000Z","category":["文章"],"tag":["网络","protobufjs"],"description":"怎么给 pb 消息添加消息号？ 目前论坛里的方案： 二次包装（消息体封装消息体）; 拼接消息号（拼接固定字节在消息头用于消息号解析）; 我的方案： 使用默认值; 默认值是什么？ 其实这是 protobuf 的语法特性，只需要在 ; 前面加上 [default = 默认值] 就可以定义一个属性的默认值 使用默认值有什么好处？ 更好的性能; 节省传输字节;...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B9%E4%BE%BF%E7%9A%84%E4%BD%BF%E7%94%A8%20protobufjs%EF%BC%9F%E7%9C%8B%E4%BA%86%E4%BD%A0%E5%B0%B1%E7%9F%A5%E9%81%93.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"如何更方便的使用 protobufjs？看了你就知道"}],["meta",{"property":"og:description","content":"怎么给 pb 消息添加消息号？ 目前论坛里的方案： 二次包装（消息体封装消息体）; 拼接消息号（拼接固定字节在消息头用于消息号解析）; 我的方案： 使用默认值; 默认值是什么？ 其实这是 protobuf 的语法特性，只需要在 ; 前面加上 [default = 默认值] 就可以定义一个属性的默认值 使用默认值有什么好处？ 更好的性能; 节省传输字节;..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-25T14:08:10.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"网络"}],["meta",{"property":"article:tag","content":"protobufjs"}],["meta",{"property":"article:published_time","content":"2023-08-25T21:49:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-25T14:08:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何更方便的使用 protobufjs？看了你就知道\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-25T21:49:00.000Z\\",\\"dateModified\\":\\"2023-08-25T14:08:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[{"level":2,"title":"怎么给 pb 消息添加消息号？","slug":"怎么给-pb-消息添加消息号","link":"#怎么给-pb-消息添加消息号","children":[]},{"level":2,"title":"默认值是什么？","slug":"默认值是什么","link":"#默认值是什么","children":[]},{"level":2,"title":"使用默认值有什么好处？","slug":"使用默认值有什么好处","link":"#使用默认值有什么好处","children":[]},{"level":2,"title":"三种方式性能对比","slug":"三种方式性能对比","link":"#三种方式性能对比","children":[]},{"level":2,"title":"怎么省略消息号？","slug":"怎么省略消息号","link":"#怎么省略消息号","children":[{"level":3,"title":"源码参考","slug":"源码参考","link":"#源码参考","children":[]},{"level":3,"title":"测试代码","slug":"测试代码","link":"#测试代码","children":[]}]}],"git":{"createdTime":1692972490000,"updatedTime":1692972490000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":2.04,"words":612},"filePathRelative":"博客/文章/如何更方便的使用 protobufjs？看了你就知道.md","localizedDate":"2023年8月25日","excerpt":"","autoDesc":true}');export{t as data};
