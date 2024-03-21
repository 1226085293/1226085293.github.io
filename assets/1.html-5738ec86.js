import{_ as s,o as n,c as a,e as t,a as e,f as c}from"./app-0abdd11a.js";const o={},p=e("p",null,"Nuxt 初学者遇到的问题解决",-1),i=c(`<h2 id="_1-在-vue-文件中-scss-被识别为-css-导致-scss-语法报错" tabindex="-1"><a class="header-anchor" href="#_1-在-vue-文件中-scss-被识别为-css-导致-scss-语法报错" aria-hidden="true">#</a> 1. 在 Vue 文件中，scss 被识别为 css 导致 scss 语法报错</h2><p>解决方案：建立.vscode/settings.json 文件，添加如下内容</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;*.vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-nuxt-config-js-中的-css-全局配置无效" tabindex="-1"><a class="header-anchor" href="#_2-nuxt-config-js-中的-css-全局配置无效" aria-hidden="true">#</a> 2. nuxt.config.js 中的 css 全局配置无效</h2><p>解决方案：使用 vite 配置</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	vite<span class="token operator">:</span> <span class="token punctuation">{</span>
		css<span class="token operator">:</span> <span class="token punctuation">{</span>
			preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
				scss<span class="token operator">:</span> <span class="token punctuation">{</span>
					additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &#39;@/assets/scss/global.scss&#39;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>首次启动总是报错：Not Found Page:/<br> 长按浏览器的刷新按钮，选择清空缓存并刷新</li></ol>`,7);function l(u,r){return n(),a("div",null,[p,t(" more "),i])}const v=s(o,[["render",l],["__file","1.html.vue"]]);export{v as default};
