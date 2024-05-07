import{_ as a,o as n,c as s,e,f as i}from"./app-b232b6f4.js";const t={},l=i(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> # 前言</h2><blockquote><p>此篇闲聊贴，大家可以随意发表自己的意见</p></blockquote><h2 id="命名风格" tabindex="-1"><a class="header-anchor" href="#命名风格" aria-hidden="true">#</a> # 命名风格</h2><h3 id="蛇形命名法" tabindex="-1"><a class="header-anchor" href="#蛇形命名法" aria-hidden="true">#</a> - 蛇形命名法</h3><p>也就是类似 <em>user_name</em></p><h3 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> - 原因</h3><p><em>强迫症</em><br> 以前用驼峰，现在项目要求也用驼峰，不过我私下还是蛇形，嘿嘿嘿<br> 虽然是蛇形，不过我还是有一套自己 <em>久经考验</em></p><h2 id="命名结构" tabindex="-1"><a class="header-anchor" href="#命名结构" aria-hidden="true">#</a> # 命名结构</h2><p>变量含义在前，变量类型在后， <img src="https://forum.cocos.org/images/emoji/twitter/chestnut.png?v=9" title=":chestnut:" class="emoji" alt=":chestnut:"></p><ul><li><em>boolean：</em></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">open_b</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">touch_b</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em>string：</em></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">name_s</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">time_s</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em>number：</em></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">count_n</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">time_n</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em>object：若是类型名超过 4 个字符则直接省略或者简写</em></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">temp_node</span><span class="token operator">:</span> cc<span class="token punctuation">.</span>Node<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">temp_anim</span><span class="token operator">:</span> cc<span class="token punctuation">.</span>Animation<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em>any 或不清楚类型：那就直接省略</em></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">temp</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><em>array：一维便是一 s，对象类型用 a 代替</em></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 基础数据类型数据</span>
<span class="token keyword">let</span> <span class="token literal-property property">temp_ss</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">temp_ns</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">temp_bs</span><span class="token operator">:</span> boolean<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 对象数组</span>
<span class="token keyword">let</span> <span class="token literal-property property">node_as</span><span class="token operator">:</span> cc<span class="token punctuation">.</span>Node<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 多维数组</span>
<span class="token keyword">let</span> <span class="token literal-property property">node_ass</span><span class="token operator">:</span> cc<span class="token punctuation">.</span>Node<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">node_asss</span><span class="token operator">:</span> cc<span class="token punctuation">.</span>Node<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用我这套命名法，那么不用把鼠标放变量上，<em>一眼就能知道这个变量是什么类型</em></p><h2 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> # 命名规则</h2><blockquote><p>首先必须满足上面的类型规则，接下来…</p></blockquote><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> - Class</h3><ul><li><em>private 成员/函数</em></li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>private _test: any;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><em>protected 成员/函数</em></li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>protected _test: any;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><em>public 成员/函数</em></li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>public test: any;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> - Function</h3><ul><li>参数：<em>下划线结尾，代表外部参数</em></li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>class test {
    public func(test_b_: boolean, args_as_: any[]): void { ... }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复数变量" tabindex="-1"><a class="header-anchor" href="#复数变量" aria-hidden="true">#</a> - 复数变量</h3><ul><li><em>直接在第二个及之后变量末尾追加数字</em></li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>let temp_n: number;
let temp2_n: number;


// 循环示例，用的最多!!!，也是最方便的
this.node.children.forEach((v, k_n)=&gt; {
    v.children.forEach((v2, k2_n)=&gt; {
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块划分" tabindex="-1"><a class="header-anchor" href="#代码块划分" aria-hidden="true">#</a> # 代码块划分</h2><p>不知道各位是什么注释代码块的呢？会不会出现代码块注释和变量注释放在上下两行很难看的情况，或者留出几行空间注释，<em>我觉得都不行</em></p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function temp() {
    // 这里是代码块1
    {
        let temp_n = 0;
        // 这里是代码块2
        {
            let temp_n = 0;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>用块作用域来划分代码块</em>， 就算出现变量命名相同也不会警告，更可以通过 ide 折叠代码块，<em>获得极好的代码阅读体验！</em></p><h2 id="文件命名" tabindex="-1"><a class="header-anchor" href="#文件命名" aria-hidden="true">#</a> # 文件命名</h2><p>采用目录跟进式命名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// assets/script/main/login</span>
则 login 文件夹下的 ts 文件命名为：main_login_xxx<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块结构" tabindex="-1"><a class="header-anchor" href="#模块结构" aria-hidden="true">#</a> # 模块结构</h2><blockquote><p>当初研究了段时间模块拆分，最终选择如下</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 存放模块内部使用的接口，类型，枚举，常量等</span>
module _test <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">test</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token comment">// 存放模块内部和外部使用的接口，类型，枚举，常量等</span>
<span class="token keyword">export</span> module test_ <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块集成" tabindex="-1"><a class="header-anchor" href="#模块集成" aria-hidden="true">#</a> # 模块集成</h2><blockquote><p>写框架必配，我用过几乎所有写法，下面的是我最推荐使用的方式</p></blockquote><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>// ui_a.ts
export default a;

// ui_b.ts
export default b;

// ui_export.ts
export { a, a_ } from &quot;./a&quot;;
export { b, b_ } from &quot;./b&quot;;

// ui.ts
import * as ui from &quot;./ui_export&quot;;
export default ui;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50);function p(r,o){return n(),s("div",null,[e(" more "),l])}const d=a(t,[["render",p],["__file","8.html.vue"]]);export{d as default};
