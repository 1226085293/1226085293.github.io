import{_ as n,r as s,o as a,c as t,e as i,a as o,f as r}from"./app-ff7ac0ff.js";const c={},l=r(`<blockquote><p>作者版本 2.4.3<br><em>众所周知在插件脚本内是不能 require 外部脚本的，在下做过各种尝试，发现最终办法一共有两个：</em></p></blockquote><ul><li>在构建后修改 index.js 内的 require 顺序，实现（伪 - 插件脚本）</li><li>在插件脚本内通过同步/异步的 require 外部脚本，在下最开始尝试了同步方法，结果发现只能在编辑器或者网页预览的时候才能正常使用，于是用了异步的方法，测试在编辑器、网页预览、web-mobile 测试通过（原生没测，不过应该也行）<br><em>这里给大家说的就是通过异步方式 require，方法很简单，如下：</em></li><li>首先建立一个传递 require 的普通脚本</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cc<span class="token punctuation">.</span>director<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>
	<span class="token string">&quot;require&quot;</span><span class="token punctuation">,</span>
	<span class="token constant">CC_PREVIEW</span>
		<span class="token operator">?</span> globalThis<span class="token punctuation">.</span>__quick_compile_project__<span class="token punctuation">.</span>require
		<span class="token operator">:</span> require <span class="token operator">||</span> globalThis<span class="token punctuation">.</span>require <span class="token operator">||</span> globalThis<span class="token punctuation">.</span>__require
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>然后在插件脚本内接收（注意：外部模块路径必须以 <code>&quot;./assets/tool&quot;</code> 的格式传递，开头必须从 <code>./assets/</code></li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>cc.director.on(&quot;require&quot;, (_require)=&gt; {
    cc.log(&quot;插件脚本 require&quot;, _require(&quot;外部模块路径&quot;, CC_PREVIEW ? &quot;preview-scripts/__qc_index__.js&quot; : undefined));
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然这种方法还是些问题的，比如必须保证同步的<em>装饰器</em></p><hr><h2 id="觉得很赞-分享给你的朋友吧" tabindex="-1"><a class="header-anchor" href="#觉得很赞-分享给你的朋友吧" aria-hidden="true">#</a> 📣 觉得很赞？分享给你的朋友吧！</h2>`,8);function u(p,d){const e=s("Share");return a(),t("div",null,[i(" more "),l,o(e,{services:"qq,qrcode",colorful:""})])}const m=n(c,[["render",u],["__file","如何在插件脚本内require外部模块.html.vue"]]);export{m as default};
