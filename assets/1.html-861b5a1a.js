import{_ as n,r as s,o as t,c as o,e as c,a as e,b as r,d as p,f as l}from"./app-33bfefe8.js";const i={},d=l(`<p>大家或多或少都用过单例模式，那么我就在这里和大家说说这两种单例的区别：</p><h2 id="导出式单例" tabindex="-1"><a class="header-anchor" href="#导出式单例" aria-hidden="true">#</a> 导出式单例</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种单例很方便， 但也是因为方便，这个导出的单例在脚本加载时就已经创建好了对象。特别是在 construct 里面初始化资源或者计算的一些类，会严重拖慢启动速度。</p><h2 id="函数式单例" tabindex="-1"><a class="header-anchor" href="#函数式单例" aria-hidden="true">#</a> 函数式单例</h2><p>推荐使用这种方式，在第一次获取时创建，构造也能分开进行。但是写多了单例类之后你就会发现。每次都要添加重复的函数和实例变量。所以可以将其封装为一个基类，参考下方链接</p>`,6),u={href:"https://muzzik.gitee.io/blog/notes/language/typescript/2.html",target:"_blank",rel:"noopener noreferrer"};function h(k,m){const a=s("ExternalLinkIcon");return t(),o("div",null,[c(" more "),d,e("p",null,[e("a",u,[r("https://muzzik.gitee.io/blog/notes/language/typescript/2.html"),p(a)])])])}const f=n(i,[["render",h],["__file","1.html.vue"]]);export{f as default};