import{_ as n,o as a,c as s,e as t,f as e}from"./app-8131941e.js";const p={},o=e(`<h2 id="全局法" tabindex="-1"><a class="header-anchor" href="#全局法" aria-hidden="true">#</a> # 全局法</h2><ul><li><em>每个模块都注册到全局</em></li><li><em>每个模块注册到全局唯一键中</em></li></ul><h2 id="合并法" tabindex="-1"><a class="header-anchor" href="#合并法" aria-hidden="true">#</a> # 合并法</h2><p><em>将依赖的类全部放在一个模块内</em></p><h2 id="间接法" tabindex="-1"><a class="header-anchor" href="#间接法" aria-hidden="true">#</a> # 间接法</h2><p><em>假如 a 与 b 模块互相依赖，那么就将依赖的功能代码搬到 c 模块，c 模块引用 a 和 b</em></p><h2 id="动态加载法" tabindex="-1"><a class="header-anchor" href="#动态加载法" aria-hidden="true">#</a> # 动态加载法</h2><p><em>把静态 import 修改为动态</em>， 缺点是将跳过模板类型检查，以及不能 <em>&quot;立即使用&quot;</em></p><ul><li>直接在使用处 import(“module_path”).default</li><li>或者如下提前定义，免去每次手写路径</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>type ui_base<span class="token operator">&lt;</span><span class="token constant">T1</span><span class="token punctuation">,</span> <span class="token constant">T2</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./ui_base&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token operator">&lt;</span><span class="token constant">T1</span><span class="token punctuation">,</span> <span class="token constant">T2</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">ui_base</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./ui_base&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ------------------异步函数</span>
<span class="token comment">// (async () =&gt; {</span>
<span class="token comment">//     ui_base = (await import(&quot;./ui_base&quot;)).default;</span>
<span class="token comment">// })();</span>
<span class="token comment">// ------------------或者直接promise.then</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./ui_base&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module_a</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ui_base <span class="token operator">=</span> module_a<span class="token punctuation">.</span>default<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前本人已知解决循环引用的方法如上，随着项目增大循环引用是不可避免的，各位论坛大神有更好的办法吗？</p>`,11);function c(l,i){return a(),s("div",null,[t(" more "),o])}const r=n(p,[["render",c],["__file","11.html.vue"]]);export{r as default};
