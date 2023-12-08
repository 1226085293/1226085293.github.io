const t=JSON.parse('{"key":"v-3a84b4b8","path":"/blog/notes/language/cpp/44.html","title":"C++原子操作(atomic)使用","lang":"zh-CN","frontmatter":{"title":"C++原子操作(atomic)使用","date":"2020-02-12T12:07:00.000Z","category":["笔记","编程语言"],"tag":["C++","多线程"],"layout":"slot_share","description":"小白记录贴 //定义一个类型为atomic_bool的原子变量并赋初值为true std::atomic&lt;bool&gt; a(true);　 ```　　　 原子操作: 赋值: ```cpp a = true; a.store(true);","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/blog/notes/language/cpp/44.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"C++原子操作(atomic)使用"}],["meta",{"property":"og:description","content":"小白记录贴 //定义一个类型为atomic_bool的原子变量并赋初值为true std::atomic&lt;bool&gt; a(true);　 ```　　　 原子操作: 赋值: ```cpp a = true; a.store(true);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-14T09:20:42.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:published_time","content":"2020-02-12T12:07:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-14T09:20:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++原子操作(atomic)使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-12T12:07:00.000Z\\",\\"dateModified\\":\\"2023-09-14T09:20:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1694672745000,"updatedTime":1694683242000,"contributors":[{"name":"yuanfengxin","email":"1226085293@qq.com","commits":3}]},"readingTime":{"minutes":1.03,"words":309},"filePathRelative":"blog/notes/language/cpp/44.md","localizedDate":"2020年2月12日","excerpt":"<p>小白记录贴</p>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token comment\\">//定义一个类型为atomic_bool的原子变量并赋初值为true</span>\\nstd<span class=\\"token double-colon punctuation\\">::</span>atomic<span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">bool</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token function\\">a</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>　\\n```　　　\\n\\n原子操作<span class=\\"token operator\\">:</span>\\n赋值<span class=\\"token operator\\">:</span>\\n```cpp\\na <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\na<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">store</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};