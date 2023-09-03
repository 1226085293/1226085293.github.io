import{_ as n,r as a,o as e,c as t,e as o,a as p,f as c}from"./app-a581de25.js";const l={},i=c(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原模块</span>
<span class="token comment">// test.ts</span>
<span class="token keyword">export</span> module test <span class="token punctuation">{</span>
    <span class="token keyword">export</span> class1 <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> class2 <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//----------------拆分后</span>

<span class="token comment">// class1.ts</span>
<span class="token keyword">export</span> class1 <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// class2.ts</span>
<span class="token keyword">export</span> class2 <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// test_export.ts</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> class1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./class1&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> class2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./class2&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// test.ts</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> test <span class="token keyword">from</span> <span class="token string">&quot;./test&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 使用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>外部使用<span class="token punctuation">;</span>
<span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">&quot;./test&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// test.class1</span>
<span class="token comment">// test.class2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,5);function r(u,d){const s=a("Share");return e(),t("div",null,[o(" more "),i,p(s,{services:"qq,qrcode",colorful:""})])}const v=n(l,[["render",r],["__file","TS模块拆分.html.vue"]]);export{v as default};
