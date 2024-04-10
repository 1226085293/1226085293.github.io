import{_ as s,o as e,c as t,e as i,a as n,b as a,f as c}from"./app-9afbaedb.js";const o={},l=n("p",null,[a("在 Vue 组件中修改 ref 变量需要 "),n("code",null,"xxx.value = "),a("，但是可以这样用 "),n("code",null,"xxx = ")],-1),r=c(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><p>npm i -D @vue-macros/reactivity-transform</p><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><div class="language-tsconfig.json line-numbers-mode" data-ext="tsconfig.json"><pre class="language-tsconfig.json"><code>{
	&quot;compilerOptions&quot;: {
		&quot;types&quot;: [&quot;@vue-macros/reactivity-transform/macros-global&quot;]
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vite.config.js line-numbers-mode" data-ext="vite.config.js"><pre class="language-vite.config.js"><code>import ReactivityTransform from &#39;@vue-macros/reactivity-transform/vite&#39;

export default defineConfig({
  plugins: [
    ReactivityTransform(),
  ],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">$ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

value <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(u,p){return e(),t("div",null,[l,i(" more "),r])}const m=s(o,[["render",d],["__file","1.html.vue"]]);export{m as default};
