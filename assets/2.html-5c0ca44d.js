import{_ as s,o as n,c as a,e,a as p,f as t}from"./app-647ba2d7.js";const c={},o=p("p",null,"在前面演示了一个注册引导步骤的方法，如果有很多引导步骤呢？",-1),l=t(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>原本的步骤</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">guide_step_1</span> <span class="token keyword">extends</span> <span class="token class-name">mk</span><span class="token punctuation">.</span>guide_step_base <span class="token punctuation">{</span>
    step_n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">guide_step_2</span> <span class="token keyword">extends</span> <span class="token class-name">mk</span><span class="token punctuation">.</span>guide_step_base <span class="token punctuation">{</span>
    step_n <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 1、2 之间插入 3</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">guide_step_1</span> <span class="token keyword">extends</span> <span class="token class-name">mk</span><span class="token punctuation">.</span>guide_step_base <span class="token punctuation">{</span>
    step_n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">guide_step_2</span> <span class="token keyword">extends</span> <span class="token class-name">mk</span><span class="token punctuation">.</span>guide_step_base <span class="token punctuation">{</span>
    step_n <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">guide_step_3</span> <span class="token keyword">extends</span> <span class="token class-name">mk</span><span class="token punctuation">.</span>guide_step_base <span class="token punctuation">{</span>
    step_n <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是把步骤2的 step_n 属性改为 3，步骤3的 step_n 属性改为 2</p>`,6);function i(u,d){return n(),a("div",null,[o,e(" more "),l])}const r=s(c,[["render",i],["__file","2.html.vue"]]);export{r as default};
