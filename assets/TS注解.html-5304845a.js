import{_ as s,r as a,o as t,c as e,e as o,a as p,f as c}from"./app-3f7f50e9.js";const i={},l=c(`<h4 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">test</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token literal-property property">func1</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token function-variable function">func2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token function-variable function">func3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>箭头函数的 this 指向为 <strong>所在上下文(函数定义所在上下文)</strong> 的 this(如 func2 中的 this 指向就为 test , 而 func3 则为 window)</li><li><strong>bind、call、apped 不能改变</strong> this 指向</li></ol><hr><h4 id="普通函数" tabindex="-1"><a class="header-anchor" href="#普通函数" aria-hidden="true">#</a> 普通函数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> test1 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">func1</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">test2</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> func3 <span class="token operator">=</span> <span class="token function">funcrion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>普通函数的 this 指向为<strong>调用对象</strong>(如 test1.func1() 的 this 指向就为 <strong>test1</strong> )</li><li>没有调用对象的函数 this 指向为 <strong>window</strong>(如 func3()的指向就为 <strong>window</strong> )</li><li>可以使用 <strong>bind、call、apped</strong> 改变 this 指向</li></ol><hr><h4 id="for-in-for-of" tabindex="-1"><a class="header-anchor" href="#for-in-for-of" aria-hidden="true">#</a> for in / for of</h4><ol><li>for in: 可以遍历任意类型， 如果是数组会遍历 key 和 value</li><li>for of: 只能遍历数组或字符串，返回值</li></ol><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,12);function u(r,d){const n=a("Share");return t(),e("div",null,[o(" more "),l,p(n,{services:"qq,qrcode",colorful:""})])}const v=s(i,[["render",u],["__file","TS注解.html.vue"]]);export{v as default};
