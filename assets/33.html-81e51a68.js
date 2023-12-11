import{_ as n,o as s,c as a,e as t,f as p}from"./app-904bf4fa.js";const e={},o=p(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>​
BOOL optval <span class="token operator">=</span> TRUE<span class="token punctuation">;</span>
<span class="token comment">// 端口复用</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>SOCKET_ERROR <span class="token operator">==</span> <span class="token function">setsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_REUSEADDR<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>optval<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>optval<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>


<span class="token comment">// 非阻塞套接字</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>SOCKET_ERROR <span class="token operator">==</span> <span class="token function">ioctlsocket</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> FIONBIO<span class="token punctuation">,</span> <span class="token punctuation">(</span>u_long FAR<span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> optval<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

​
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function c(l,i){return s(),a("div",null,[t(" more "),o])}const r=n(e,[["render",c],["__file","33.html.vue"]]);export{r as default};
