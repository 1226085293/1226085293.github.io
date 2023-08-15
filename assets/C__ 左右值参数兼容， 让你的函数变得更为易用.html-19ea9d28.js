import{_ as s,r as a,o as t,c as p,e,a as c,f as o}from"./app-de3fcfd1.js";const l={},u=o(`<p>这里可以模拟 STL 中的实现，自己改良了一下，让其可以返回值。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token keyword">class</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> Args<span class="token operator">&gt;</span>
T <span class="token function">_func</span><span class="token punctuation">(</span>Args<span class="token operator">&amp;&amp;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	T <span class="token function">data</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">forward</span><span class="token generic class-name"><span class="token operator">&lt;</span>Args<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>args_<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 逻辑处理...</span>
	<span class="token keyword">return</span> <span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

test<span class="token operator">&amp;</span> <span class="token function">func</span><span class="token punctuation">(</span>test<span class="token operator">&amp;</span> data_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token generic-function"><span class="token function">_func</span><span class="token generic class-name"><span class="token operator">&lt;</span>test<span class="token operator">&amp;</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>data_<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

test <span class="token function">func</span><span class="token punctuation">(</span>test<span class="token operator">&amp;&amp;</span> data_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token generic-function"><span class="token function">_func</span><span class="token generic class-name"><span class="token operator">&lt;</span>test<span class="token operator">&amp;&amp;</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">move</span><span class="token punctuation">(</span>data_<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们不论传递左值还是右值我们的程序都能正常处理，也可以避免下面的情况</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>test a<span class="token punctuation">;</span>
<span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可以替换为</span>
test <span class="token function">a</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 调用顺序为: 构造 -&gt; 移动构造 -&gt; 析构</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不需要返回值可以去掉。</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,7);function i(r,k){const n=a("Share");return t(),p("div",null,[e(" more "),u,c(n,{services:"qq,qrcode",colorful:""})])}const m=s(l,[["render",i],["__file","C__ 左右值参数兼容， 让你的函数变得更为易用.html.vue"]]);export{m as default};
