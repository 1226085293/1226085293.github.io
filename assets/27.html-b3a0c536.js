import{_ as n,o as s,c as a,e,f as t}from"./app-932d792f.js";const c={},p=t(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>​
<span class="token keyword">long</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">_InterlockedIncrement</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//自增</span>
<span class="token function">_InterlockedDecrement</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//自减</span>

宏
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;xatomic.h&gt;</span></span>
<span class="token function">_MT_INCR</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//自增</span>
<span class="token function">_MT_DECR</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//自减</span>

​
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接使用 xatomic 头文件之中的宏， 很多官方头文件中都包含了这个头文件，可以直接试试，不行就加一行<br> #include &lt;xatomic.h&gt;</p>`,2);function o(i,l){return s(),a("div",null,[e(" more "),p])}const r=n(c,[["render",o],["__file","27.html.vue"]]);export{r as default};
