import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as e,c as p,e as t,d as o,f as c}from"./app-ef7c8e3b.js";const l={},u=c(`<p>在 release 环境下，我的代码原本是这样：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">WSAStartup</span><span class="token punctuation">(</span><span class="token function">MAKEWORD</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>wsa<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>莫名其妙的出现的这个错误，结果我认真看了几次，发现 vs<strong>直接跳过了这个函数的执行</strong>， 当时就傻眼了，结果是 release 优化后 assert 断言内的函数语句不会执行。<br> 然后我改回了下面这样就好了</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> re <span class="token operator">=</span> <span class="token function">WSAStartup</span><span class="token punctuation">(</span><span class="token function">MAKEWORD</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>wsa<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>re<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//错误处理</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,6);function r(i,d){const n=a("Share");return e(),p("div",null,[t(" more "),u,o(n,{services:"qq,qrcode",colorful:""})])}const v=s(l,[["render",r],["__file","9.html.vue"]]);export{v as default};