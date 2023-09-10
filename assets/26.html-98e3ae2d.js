const e=JSON.parse('{"key":"v-57bc2118","path":"/blog/notes/language/cpp/26.html","title":"C++用for遍历自定义类","lang":"zh-CN","frontmatter":{"title":"C++用for遍历自定义类","date":"2020-05-24T22:26:35.000Z","category":["笔记","编程语言"],"tag":["C++"],"description":"正确的做法是像 STL 容器那样，创建一个迭代器类，然后里面重载 !=（比较）， ++（递增），\\\\*（解引用） 这几个函数。 例如： 光是这样还不够，还得在我么要遍历的类中添加begin 和 end两个函数，begin 和 end 返回什么呢？我给大家举个例子，一个数组 char a[5]，begin 代表了第一个元素，即 a[0]， end 代表最后...","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/cpp/26.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"C++用for遍历自定义类"}],["meta",{"property":"og:description","content":"正确的做法是像 STL 容器那样，创建一个迭代器类，然后里面重载 !=（比较）， ++（递增），\\\\*（解引用） 这几个函数。 例如： 光是这样还不够，还得在我么要遍历的类中添加begin 和 end两个函数，begin 和 end 返回什么呢？我给大家举个例子，一个数组 char a[5]，begin 代表了第一个元素，即 a[0]， end 代表最后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:published_time","content":"2020-05-24T22:26:35.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++用for遍历自定义类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-24T22:26:35.000Z\\",\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"blog/notes/language/cpp/26.md","localizedDate":"2020年5月24日","excerpt":"","autoDesc":true}');export{e as data};
