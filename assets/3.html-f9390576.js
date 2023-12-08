const t=JSON.parse('{"key":"v-028df04a","path":"/blog/notes/language/typescript/3.html","title":"装饰器：实现多继承","lang":"zh-CN","frontmatter":{"title":"装饰器：实现多继承","date":"2020-07-22T01:35:00.000Z","category":["笔记","编程语言"],"tag":["Typescript","装饰器"],"layout":"slot_share","description":"因为看不惯 Mixins 的多继承写法， 于是写了个类装饰器实现 这里说明一下：Mixins 写法的多继承也是只继承方法和属性，但实际在创建类时候初始化的成员变量并不会继承，如果要继承成员变量上面注释有说明，但要注意构造带参又使用的话可能会报错. 另外多继承下父类构造只会执行 extends 的父类构造，按照上面的例子也就是只会执行 A 类的构造。","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/typescript/3.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"装饰器：实现多继承"}],["meta",{"property":"og:description","content":"因为看不惯 Mixins 的多继承写法， 于是写了个类装饰器实现 这里说明一下：Mixins 写法的多继承也是只继承方法和属性，但实际在创建类时候初始化的成员变量并不会继承，如果要继承成员变量上面注释有说明，但要注意构造带参又使用的话可能会报错. 另外多继承下父类构造只会执行 extends 的父类构造，按照上面的例子也就是只会执行 A 类的构造。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"Typescript"}],["meta",{"property":"article:tag","content":"装饰器"}],["meta",{"property":"article:published_time","content":"2020-07-22T01:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"装饰器：实现多继承\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-22T01:35:00.000Z\\",\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.47,"words":441},"filePathRelative":"blog/notes/language/typescript/3.md","localizedDate":"2020年7月22日","excerpt":"","autoDesc":true}');export{t as data};