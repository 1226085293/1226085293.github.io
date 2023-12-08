const e=JSON.parse('{"key":"v-4b562124","path":"/mk-framework/api/classes/asset.html","title":"Class: asset","lang":"zh-CN","frontmatter":{"article":false,"timeline":false,"sitemap.exclude":true,"layout":"slot_share","description":"index / asset Class: asset 资源管理器 Remarks 统一加载接口为 get、get_dir 支持 EDITOR 环境加载资源 加载图片无需后缀，通过类型自动添加 加载路径扩展，例：db://xxx.prefab 资源默认引用为 2，引用为 1 时将在 global_config.resources.cache_lifetime_ms_n 时间后自动释放 通过 cache_lifetime_ms_n 修复短时间内(释放/加载)同一资源导致加载资源是已释放后的问题 解决同时加载同一资源多次导致返回的资源对象不一致的问（对象不一致会导致引用计数不一致） 增加强制性资源跟随释放对象","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/mk-framework/api/classes/asset.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"Class: asset"}],["meta",{"property":"og:description","content":"index / asset Class: asset 资源管理器 Remarks 统一加载接口为 get、get_dir 支持 EDITOR 环境加载资源 加载图片无需后缀，通过类型自动添加 加载路径扩展，例：db://xxx.prefab 资源默认引用为 2，引用为 1 时将在 global_config.resources.cache_lifetime_ms_n 时间后自动释放 通过 cache_lifetime_ms_n 修复短时间内(释放/加载)同一资源导致加载资源是已释放后的问题 解决同时加载同一资源多次导致返回的资源对象不一致的问（对象不一致会导致引用计数不一致） 增加强制性资源跟随释放对象"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T19:04:19.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:modified_time","content":"2023-09-10T19:04:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Class: asset\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-10T19:04:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"config","slug":"config","link":"#config","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"get","slug":"get","link":"#get","children":[]},{"level":3,"title":"get_dir","slug":"get-dir","link":"#get-dir","children":[]},{"level":3,"title":"release","slug":"release","link":"#release","children":[]}]}],"git":{"createdTime":1694372659000,"updatedTime":1694372659000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":1.35,"words":404},"filePathRelative":"mk-framework/api/classes/asset.md","localizedDate":"2023年9月10日","excerpt":"<p><a href=\\"/mk-framework/api/\\" target=\\"blank\\">index</a> / asset</p>\\n<h1> Class: asset</h1>\\n<p>资源管理器</p>\\n<p><strong><code>Remarks</code></strong></p>\\n<ul>\\n<li>\\n<p>统一加载接口为 get、get_dir</p>\\n</li>\\n<li>\\n<p>支持 EDITOR 环境加载资源</p>\\n</li>\\n<li>\\n<p>加载图片无需后缀，通过类型自动添加</p>\\n</li>\\n<li>\\n<p>加载路径扩展，例：db://xxx.prefab</p>\\n</li>\\n<li>\\n<p>资源默认引用为 2，引用为 1 时将在 global_config.resources.cache_lifetime_ms_n 时间后自动释放</p>\\n</li>\\n<li>\\n<p>通过 cache_lifetime_ms_n 修复短时间内(释放/加载)同一资源导致加载资源是已释放后的问题</p>\\n</li>\\n<li>\\n<p>解决同时加载同一资源多次导致返回的资源对象不一致的问（对象不一致会导致引用计数不一致）</p>\\n</li>\\n<li>\\n<p>增加强制性资源跟随释放对象</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};