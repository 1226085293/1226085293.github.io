import{_ as n,r as i,o as s,c as d,e as l,d as a,f as t}from"./app-41b880d7.js";const r={},c=t(`<h1 id="测试环境" tabindex="-1"><a class="header-anchor" href="#测试环境" aria-hidden="true">#</a> 测试环境</h1><p>版本：3.7.0</p><p>平台：<code>[web-desktop-debug, android-debug-md5, android-release-md5]</code></p><h1 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h1><ul><li>重载 bundle 时不能在 bundle 内的场景</li><li>重载前需要进行数据清理操作（例如定时器、节点池、监听的全局事件）</li><li>bundle 内的 ccclass 清理并没有很好的方法，所以是按照类名匹配，需要规范 <span class="mention">@ccclass</span> 装饰器的参数前缀</li></ul><h1 id="使用代码" tabindex="-1"><a class="header-anchor" href="#使用代码" aria-hidden="true">#</a> 使用代码</h1><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>/** bundle 脚本表 */
const bundle_script_tab: Record&lt;string, any&gt; = {};
/** js 系统 */
const system_js = self[&quot;System&quot;];
/** 脚本缓存表 */
const script_cache_tab: Record&lt;string, any&gt; = system_js[Reflect.ownKeys(system_js).find((v) =&gt; typeof v === &quot;symbol&quot;)];

// 初始化 bundle 脚本表
Object.keys(script_cache_tab).forEach((v_s) =&gt; {
	const current = script_cache_tab[v_s];
	const parent = script_cache_tab[v_s].p;
	const child = parent.d;

	if (!parent || !child || current.id !== parent.id) {
		return;
	}

	const name_s = parent.id.slice((parent.id as string).lastIndexOf(&quot;/&quot;) + 1);

	bundle_script_tab[name_s] = parent;
});

// 清理脚本缓存
{
	const bundle_root = bundle_script_tab[bundle_s];

	if (bundle_root) {
		bundle_root.d.forEach((v: { id: string }) =&gt; {
			delete script_cache_tab[v.id];
			delete system_js[&quot;registerRegistry&quot;][v.id];
		});
		delete script_cache_tab[bundle_root.id];
		delete system_js[&quot;registerRegistry&quot;][bundle_root.id];
	}
}

// 清理 ccclass
{
	const reg = new RegExp(\`\${bundle_s}(_|/)\`);

	Object.keys(cc.js._nameToClass)
		.filter((v_s) =&gt; v_s.match(reg) !== null)
		.forEach((v_s) =&gt; {
			cc.js.unregisterClass(cc.js.getClassByName(v_s));
		});
}

// 清理 bundle 资源
{
	const bundle = cc.assetManager.getBundle(bundle_s);

	if (bundle) {
		bundle.releaseAll();
		cc.assetManager.removeBundle(bundle);
	}
}

// ... 加载 bundle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>bundle_s：bundle 名</li></ul><h3 id="实现参考" tabindex="-1"><a class="header-anchor" href="#实现参考" aria-hidden="true">#</a> 实现参考</h3><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,12);function v(u,b){const e=i("Share");return s(),d("div",null,[l(" more "),c,a(e,{services:"qq,qrcode",colorful:""})])}const o=n(r,[["render",v],["__file","8.html.vue"]]);export{o as default};
