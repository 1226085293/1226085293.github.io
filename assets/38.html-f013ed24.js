import{_ as a,r as p,o as c,c as t,e as o,a as s,b as n,d as r,f as i}from"./app-0abdd11a.js";const l={},d=i(`<p>它不是标准化的。有些使用.tcc（t =模板，cc = C ++源代码），<br> 有些使用.icc（i =包含，cc = C ++源代码），有些使用.h（但这<br> 使其与“真实”标头没有区别），有些则只是使用<br> 根本不用额外的文件。它通常是一个文件，其中包含<br> 在标头中声明的模板的实现，标头随后包含#tcc（或<br> 任何其他名称）文件。但是由于对此没有标准或普遍共识<br> ，因此也可能是其他任何事情。<br> 这只是需要<br> 在大多数编译器使用它们的所有翻译单元中可见模板定义的人工</p><p>产物：==== example.hpp ====</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">EXAMPLE_HPP</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={href:"https://bytes.com/topic/c/answers/138863-what-tcc",target:"_blank",rel:"noopener noreferrer"};function v(m,u){const e=p("ExternalLinkIcon");return c(),t("div",null,[o(" more "),d,s("p",null,[n("来自"),s("a",k,[n("https://bytes.com/topic/c/answers/138863-what-tcc"),r(e)])])])}const h=a(l,[["render",v],["__file","38.html.vue"]]);export{h as default};
