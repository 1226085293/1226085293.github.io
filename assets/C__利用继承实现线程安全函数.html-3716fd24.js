import{_ as s,r as a,o as t,c as p,e,d as c,f as o}from"./app-6ae92723.js";const i={},l=o(`<p>因为被多线程搞的有点头痛，所以想了一个简单的办法，不用自己手动加锁，也免去了使用 raii 机制，直接传递一个 std::function 即可.  仅做参考</p><p>代码：</p><p>raii_critical.h</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>​
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Windows.h&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">raii_critical</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
	CRITICAL_SECTION<span class="token operator">*</span> _crit<span class="token punctuation">;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token function">raii_critical</span><span class="token punctuation">(</span>CRITICAL_SECTION<span class="token operator">*</span> crit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		_crit <span class="token operator">=</span> crit<span class="token punctuation">;</span>
		<span class="token function">EnterCriticalSection</span><span class="token punctuation">(</span>_crit<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">raii_critical</span><span class="token punctuation">(</span><span class="token keyword">const</span> raii_critical<span class="token operator">&amp;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>
	raii_critical<span class="token operator">&amp;</span> <span class="token keyword">operator</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> raii_critical<span class="token operator">&amp;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>
	<span class="token operator">~</span><span class="token function">raii_critical</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">LeaveCriticalSection</span><span class="token punctuation">(</span>_crit<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>safe_base.h</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>​
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;functional&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;map&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;raii_critical.h&quot;</span></span>

<span class="token keyword">class</span> <span class="token class-name">safe_base</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
	<span class="token keyword">bool</span>									_exit<span class="token punctuation">;</span>			<span class="token comment">//退出标记</span>
	CRITICAL_SECTION						_critical<span class="token punctuation">;</span>		<span class="token comment">//临界区</span>
	std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span><span class="token keyword">uint8_t</span><span class="token punctuation">,</span> CRITICAL_SECTION<span class="token operator">*</span><span class="token operator">&gt;</span>	_criticals<span class="token punctuation">;</span>		<span class="token comment">//多临界区</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token function">safe_base</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">_exit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">InitializeCriticalSection</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">virtual</span> <span class="token operator">~</span><span class="token function">safe_base</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">{</span>
			raii_critical <span class="token function">r1</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
			_exit <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">DeleteCriticalSection</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> i <span class="token operator">:</span> _criticals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">DeleteCriticalSection</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>second<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 默认安全函数</span>
	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">safe_func</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span>safe_base<span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token operator">&amp;&amp;</span> task<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">{</span>
			raii_critical <span class="token function">r1</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>_exit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		raii_critical <span class="token function">r1</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">task</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 指定临界安全函数</span>
	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">safe_func</span><span class="token punctuation">(</span><span class="token keyword">uint8_t</span> id<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span>safe_base<span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token operator">&amp;&amp;</span> task<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">{</span>
			raii_critical <span class="token function">r1</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>_exit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		CRITICAL_SECTION<span class="token operator">*</span> cri <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
		<span class="token keyword">auto</span> result <span class="token operator">=</span> _criticals<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> _criticals<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cri <span class="token operator">=</span> <span class="token keyword">new</span> CRITICAL_SECTION<span class="token punctuation">;</span>
			_criticals<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> cri<span class="token punctuation">;</span>
			<span class="token function">InitializeCriticalSection</span><span class="token punctuation">(</span>cri<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		raii_critical <span class="token function">r1</span><span class="token punctuation">(</span>cri<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">task</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;safe_base.h&quot;</span></span>

<span class="token keyword">class</span> <span class="token class-name">safe_test1</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">safe_base</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	safe_test1 s1<span class="token punctuation">;</span>
	s1<span class="token punctuation">.</span><span class="token function">safe_func</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span>safe_base<span class="token operator">*</span> me<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">auto</span> _me <span class="token operator">=</span> <span class="token generic-function"><span class="token function">dynamic_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>safe_test1<span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span>
		_me<span class="token operator">-&gt;</span>a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个最重要的功能还是退出标记，可以防止析构后其他进程仍在操作已销毁的对象造成异常。不过不能传参，局限性很大</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,11);function u(r,k){const n=a("Share");return t(),p("div",null,[e(" more "),l,c(n,{services:"qq,qrcode",colorful:""})])}const v=s(i,[["render",u],["__file","C__利用继承实现线程安全函数.html.vue"]]);export{v as default};
