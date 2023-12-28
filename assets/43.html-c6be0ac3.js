import{_ as e,r as p,o as t,c as o,a as n,b as s,d as c,f as l}from"./app-2959652e.js";const u={},i=l(`<p>如果实参与引用参数不匹配，C++将生成临时变量。如果引用参数是const,则编译器在下面两种情况下生成临时变量：<br> 1.实参类型是正确的，但不是左值<br> 2.实参类型不正确，但可以转换为正确的类型</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>Double <span class="token function">refcube</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">double</span><span class="token operator">&amp;</span> ra<span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　Returnra<span class="token operator">*</span>ra<span class="token operator">*</span>ra<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">double</span> side <span class="token operator">=</span> <span class="token number">3.0</span><span class="token punctuation">;</span>

<span class="token keyword">double</span><span class="token operator">*</span> pd <span class="token operator">=</span> <span class="token operator">&amp;</span>side<span class="token punctuation">;</span>

<span class="token keyword">double</span><span class="token operator">&amp;</span> rd <span class="token operator">=</span> side<span class="token punctuation">;</span>

<span class="token keyword">long</span> edge <span class="token operator">=</span> <span class="token number">5L</span><span class="token punctuation">;</span>

<span class="token keyword">double</span> lens<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2.3</span><span class="token punctuation">,</span><span class="token number">3.4</span><span class="token punctuation">,</span><span class="token number">4.5</span><span class="token punctuation">,</span><span class="token number">6.7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">double</span> c1 <span class="token operator">=</span> <span class="token function">refcube</span><span class="token punctuation">(</span>side<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ra 是side</span>

<span class="token keyword">double</span> c2 <span class="token operator">=</span> <span class="token function">refcube</span><span class="token punctuation">(</span>lens<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ra是lens[2]</span>

<span class="token keyword">double</span> c3 <span class="token operator">=</span> <span class="token function">refcube</span><span class="token punctuation">(</span>rd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ra 是 rd</span>

<span class="token keyword">double</span> c4 <span class="token operator">=</span> <span class="token function">refcube</span><span class="token punctuation">(</span><span class="token operator">*</span>pd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ra 是*pd</span>

<span class="token keyword">double</span> c5 <span class="token operator">=</span> <span class="token function">refcube</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ra 是临时变量</span>

<span class="token keyword">double</span> c6 <span class="token operator">=</span> <span class="token function">refcube</span><span class="token punctuation">(</span><span class="token number">7.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ra 是临时变量</span>

<span class="token keyword">double</span> c7 <span class="token operator">=</span> <span class="token function">refcube</span><span class="token punctuation">(</span>side<span class="token operator">+</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ra 是临时变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r={href:"https://blog.csdn.net/yusiguyuan/article/details/43526039",target:"_blank",rel:"noopener noreferrer"};function d(k,b){const a=p("ExternalLinkIcon");return t(),o("div",null,[i,n("p",null,[s("转载自"),n("a",r,[s("https://blog.csdn.net/yusiguyuan/article/details/43526039"),c(a)])])])}const v=e(u,[["render",d],["__file","43.html.vue"]]);export{v as default};