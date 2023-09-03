import{_ as n,r as a,o as e,c as o,e as p,a as t,f as c}from"./app-f52bd50a.js";const l={},r=c(`<ul><li>设置默认模板参数</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token operator">=</span> <span class="token operator">*</span><span class="token operator">*</span>这里写模板参数<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">&gt;</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span>T a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>模板返回类型限制</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 这里限制了只能T只能为int和bool两种类型</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span>enable_if_t<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>is_same<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>value <span class="token operator">||</span> std<span class="token double-colon punctuation">::</span>is_same<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token punctuation">,</span> T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>value<span class="token punctuation">,</span> T<span class="token operator">&gt;&gt;</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span>T a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,6);function i(u,d){const s=a("Share");return e(),o("div",null,[p(" more "),r,t(s,{services:"qq,qrcode",colorful:""})])}const m=n(l,[["render",i],["__file","C__模板使用记录.html.vue"]]);export{m as default};
