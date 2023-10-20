import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as e,c as t,e as c,d as o,f as p}from"./app-42be3390.js";const l={},i=p(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>​
<span class="token keyword">long</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">_InterlockedIncrement</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//自增</span>
<span class="token function">_InterlockedDecrement</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//自减</span>

宏
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;xatomic.h&gt;</span></span>
<span class="token function">_MT_INCR</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//自增</span>
<span class="token function">_MT_DECR</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//自减</span>

​
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接使用 xatomic 头文件之中的宏， 很多官方头文件中都包含了这个头文件，可以直接试试，不行就加一行<br> #include &lt;xatomic.h&gt;</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,4);function r(u,d){const n=a("Share");return e(),t("div",null,[c(" more "),i,o(n,{services:"qq,qrcode",colorful:""})])}const v=s(l,[["render",r],["__file","27.html.vue"]]);export{v as default};
