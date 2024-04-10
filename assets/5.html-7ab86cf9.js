const e=JSON.parse('{"key":"v-b6bf6f1a","path":"/mk-framework/module/guide/5.html","title":"常见问题解答","lang":"zh-CN","frontmatter":{"title":"常见问题解答","article":false,"timeline":false,"order":5,"layout":"slot_share","description":"Q: regis 可以使用多次吗？ A：可以的，管理器内部通过步骤的 step_n 为 key 存储到 Map 中，所以可以多次调用 Q: 如果玩家中途退出了引导，下次进入游戏时如何继续？ A：new mk.guide_manage 的参数中有个 current_step_n（当前步骤），如果这个步骤已经 regis，引导管理器则会直接跳转至该步骤。或者你使用 set_step 自行控制","head":[["meta",{"property":"og:url","content":"https://muzzik.gitee.io/mk-framework/module/guide/5.html"}],["meta",{"property":"og:site_name","content":"MKSite"}],["meta",{"property":"og:title","content":"常见问题解答"}],["meta",{"property":"og:description","content":"Q: regis 可以使用多次吗？ A：可以的，管理器内部通过步骤的 step_n 为 key 存储到 Map 中，所以可以多次调用 Q: 如果玩家中途退出了引导，下次进入游戏时如何继续？ A：new mk.guide_manage 的参数中有个 current_step_n（当前步骤），如果这个步骤已经 regis，引导管理器则会直接跳转至该步骤。或者你使用 set_step 自行控制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T03:20:02.000Z"}],["meta",{"property":"article:author","content":"muzzik"}],["meta",{"property":"article:modified_time","content":"2024-04-10T03:20:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见问题解答\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T03:20:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"muzzik\\"}]}"]]},"headers":[],"git":{"createdTime":1701161980000,"updatedTime":1712719202000,"contributors":[{"name":"muzzik","email":"1226085293@qq.com","commits":1},{"name":"yuanfengxin","email":"1226085293@qq.com","commits":1}]},"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"mk-framework/module/guide/5.md","localizedDate":"2023年11月28日","excerpt":"<p><strong>Q: regis 可以使用多次吗？</strong><br>\\nA：可以的，管理器内部通过步骤的 step_n 为 key 存储到 Map 中，所以可以多次调用</p>\\n<p><strong>Q: 如果玩家中途退出了引导，下次进入游戏时如何继续？</strong><br>\\nA：<code>new mk.guide_manage</code> 的参数中有个 <code>current_step_n</code>（当前步骤），如果这个步骤已经 regis，引导管理器则会直接跳转至该步骤。或者你使用 <code>set_step</code> 自行控制</p>\\n","autoDesc":true}');export{e as data};