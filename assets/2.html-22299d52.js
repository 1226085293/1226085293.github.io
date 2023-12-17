import{_ as n,o as s,c as a,e,f as t}from"./app-1f2f2d77.js";const o={},p=t(`<div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">String_conversion</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	<span class="token keyword">local</span> path <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
	<span class="token keyword">for</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">#</span>value <span class="token keyword">do</span>
        <span class="token comment">--获取当前下标字符串</span>
		<span class="token keyword">local</span> tmp <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span>i<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
        <span class="token comment">--如果为&#39;\\\\&#39;则替换</span>
		<span class="token keyword">if</span> tmp<span class="token operator">==</span><span class="token string">&#39;\\\\&#39;</span> <span class="token keyword">then</span>
			path <span class="token operator">=</span> path<span class="token operator">..</span><span class="token string">&#39;/&#39;</span>
		<span class="token keyword">else</span>
			path <span class="token operator">=</span> path<span class="token operator">..</span>tmp
		<span class="token keyword">end</span>
	<span class="token keyword">end</span>
	<span class="token keyword">return</span> path
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之前用 lua 的 string.gsub 函数发现不行，网上也没找到，于是就自己写了个简单的函数</p>`,2);function l(c,i){return s(),a("div",null,[e(" more "),p])}const d=n(o,[["render",l],["__file","2.html.vue"]]);export{d as default};
