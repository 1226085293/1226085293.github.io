import{_ as s,r as a,o as e,c as t,e as o,a as p,f as l}from"./app-fbf860b5.js";const c={},r=l(`<div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">String_conversion</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之前用 lua 的 string.gsub 函数发现不行，网上也没找到，于是就自己写了个简单的函数</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,4);function i(d,u){const n=a("Share");return e(),t("div",null,[o(" more "),r,p(n,{services:"qq,qrcode",colorful:""})])}const v=s(c,[["render",i],["__file","Lua将字符串反斜杠转为正斜杠.html.vue"]]);export{v as default};
