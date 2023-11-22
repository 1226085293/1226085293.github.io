import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as r,e as i,a as s,b as e,d as a,f as l}from"./app-acb317c3.js";const d={},v=l(`<p>它不是标准化的。有些使用.tcc（t =模板，cc = C ++源代码），<br> 有些使用.icc（i =包含，cc = C ++源代码），有些使用.h（但这<br> 使其与“真实”标头没有区别），有些则只是使用<br> 根本不用额外的文件。它通常是一个文件，其中包含<br> 在标头中声明的模板的实现，标头随后包含#tcc（或<br> 任何其他名称）文件。但是由于对此没有标准或普遍共识<br> ，因此也可能是其他任何事情。<br> 这只是需要<br> 在大多数编译器使用它们的所有翻译单元中可见模板定义的人工</p><p>产物：==== example.hpp ====</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">EXAMPLE_HPP</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">EXAMPLE_HPP</span></span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token expression">“ example<span class="token punctuation">.</span>tcc”</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token operator">==</span><span class="token operator">==</span> example<span class="token punctuation">.</span>tcc <span class="token operator">==</span><span class="token operator">==</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">EXAMPLE_HPP</span></span>
＃错误不要直接包含此文件，请包含example<span class="token punctuation">.</span>hpp代替
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span>类型名T<span class="token operator">&gt;</span> <span class="token keyword">void</span> f（）
<span class="token punctuation">{</span>
<span class="token comment">//东西</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={href:"https://bytes.com/topic/c/answers/138863-what-tcc",target:"_blank",rel:"noopener noreferrer"},m=s("hr",null,null,-1),u=s("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function b(h,_){const c=n("ExternalLinkIcon"),p=n("Share");return o(),r("div",null,[i(" more "),v,s("p",null,[e("来自"),s("a",k,[e("https://bytes.com/topic/c/answers/138863-what-tcc"),a(c)])]),m,u,a(p,{services:"qq,qrcode",colorful:""})])}const w=t(d,[["render",b],["__file","38.html.vue"]]);export{w as default};
