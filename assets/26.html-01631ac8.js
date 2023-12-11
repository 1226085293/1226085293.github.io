import{_ as n,o as s,c as a,e as t,f as e}from"./app-904bf4fa.js";const p={},o=e(`<p><strong>正确的做法</strong>是像 STL 容器那样，创建一个迭代器类，然后里面重载 <strong>!=（比较）， ++（递增），*（解引用）</strong> 这几个函数。</p><p>例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">iterator</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
	T<span class="token operator">*</span> _data<span class="token punctuation">;</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// 构造函数，传进迭代器管理的值</span>
	<span class="token function">iterator</span><span class="token punctuation">(</span>T<span class="token operator">*</span> data_<span class="token punctuation">)</span> <span class="token operator">:</span>
	<span class="token function">_data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token keyword">bool</span> <span class="token keyword">operator</span> <span class="token operator">!=</span><span class="token punctuation">(</span><span class="token keyword">const</span> iterator<span class="token operator">&amp;</span> that<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 比较实现, 例如：</span>
		<span class="token keyword">return</span> _data <span class="token operator">==</span> <span class="token operator">&amp;</span>that<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	iterator<span class="token operator">&amp;</span> <span class="token keyword">operator</span> <span class="token operator">++</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 自增实现, 例如：</span>
		_data <span class="token operator">=</span> _data<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	T<span class="token operator">&amp;</span> <span class="token keyword">operator</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 解引用, 例如：</span>
		<span class="token keyword">return</span> <span class="token operator">*</span>_data<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">iterator</span><span class="token punctuation">(</span><span class="token keyword">const</span> iterator<span class="token operator">&amp;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>
	iterator<span class="token operator">&amp;</span> <span class="token keyword">operator</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> iterator<span class="token operator">&amp;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>
	<span class="token operator">~</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>光是这样还不够，还得在我么要遍历的类中添加<strong>begin 和 end</strong>两个函数，begin 和 end 返回什么呢？我给大家举个例子，<strong>一个数组 char a[5]，begin 代表了第一个元素，即 a[0]， end 代表最后一个元素的后一位，即 a[5]</strong>，我们只需要把 begin 和 end 函数内返回我们提前指定好这两个元素的迭代器就行了，例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
	iterator<span class="token operator">&lt;</span>A<span class="token operator">&gt;</span> _begin<span class="token punctuation">;</span>	<span class="token comment">// 第一个元素</span>
	iterator<span class="token operator">&lt;</span>A<span class="token operator">&gt;</span> _end<span class="token punctuation">;</span>	<span class="token comment">// 最后一个元素后一位</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	iterator<span class="token operator">&lt;</span>A<span class="token operator">&gt;</span><span class="token operator">&amp;</span> <span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 这里可以动态更新 _begin 代表的值，再返回 _begin</span>
		<span class="token keyword">return</span> _begin<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	iterator<span class="token operator">&lt;</span>A<span class="token operator">&gt;</span><span class="token operator">&amp;</span> <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 这里可以动态更新 _end 代表的值，再返回 _end</span>
		<span class="token keyword">return</span> _end<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后我们就可以使用 <strong>for (auto&amp; i : xxx)</strong> 遍历这个类型的变量了，最后和大家说一下，<strong>如果 begin 和 end 是返回指针的话可以不用迭代器类</strong>就可以，因为指针的 !=（比较）, ++（自增），*（解引用）这几个函数都是 C++语言内置的。前提是你遍历的数据是连续内存，这样通过++（自增）获取的下个值才是正确的，不然你还是得额外写一个迭代器类。</p>`,6);function c(l,i){return s(),a("div",null,[t(" more "),o])}const u=n(p,[["render",c],["__file","26.html.vue"]]);export{u as default};
