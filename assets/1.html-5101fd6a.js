import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as p,e as o,d as e,f as c}from"./app-ecefdaf5.js";const i={},l=c(`<p>测试代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>​
<span class="token keyword">struct</span> <span class="token class-name">test1</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> value<span class="token punctuation">;</span>
	CRITICAL_SECTION _critical<span class="token punctuation">;</span>				<span class="token comment">//临界区</span>
	<span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 初始化临界区</span>
		<span class="token function">InitializeCriticalSection</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token operator">~</span><span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 释放临界区</span>
		<span class="token function">DeleteCriticalSection</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		raii <span class="token function">temp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">++</span>value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		raii <span class="token function">temp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_critical<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">--</span>value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">test2</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> value<span class="token punctuation">;</span>
	<span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
	<span class="token operator">~</span><span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token operator">++</span>value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token operator">--</span>value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">auto</span> timer <span class="token operator">=</span> <span class="token operator">&amp;</span>time_heap<span class="token double-colon punctuation">::</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>unordered_map<span class="token operator">&lt;</span>SOCKET<span class="token punctuation">,</span> test1<span class="token operator">&gt;</span> t1<span class="token punctuation">;</span>	<span class="token comment">//客户端信息</span>
	std<span class="token double-colon punctuation">::</span>unordered_map<span class="token operator">&lt;</span>SOCKET<span class="token punctuation">,</span> test2<span class="token operator">&gt;</span> t2<span class="token punctuation">;</span>	<span class="token comment">//客户端信息</span>
	<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1000000</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		t1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">*</span><span class="token keyword">new</span> test1<span class="token punctuation">;</span>
		t2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">*</span><span class="token keyword">new</span> test2<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">auto</span> _thread_pool <span class="token operator">=</span> <span class="token operator">&amp;</span>thread_pool<span class="token double-colon punctuation">::</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">auto</span> start_time <span class="token operator">=</span> timer<span class="token operator">-&gt;</span><span class="token function">get_ms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>atomic<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">complete_num</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		_thread_pool<span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				t1<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>complete_num <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;消耗时间(毫秒)：%I64d\\n&quot;</span><span class="token punctuation">,</span> timer<span class="token operator">-&gt;</span><span class="token function">get_ms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start_time<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		_thread_pool<span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				t1<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>complete_num <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;消耗时间(毫秒)：%I64d\\n&quot;</span><span class="token punctuation">,</span> timer<span class="token operator">-&gt;</span><span class="token function">get_ms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start_time<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//CRITICAL_SECTION _critical;				//临界区</span>
	<span class="token comment">//// 初始化临界区</span>
	<span class="token comment">//InitializeCriticalSection(&amp;_critical);</span>
	<span class="token comment">//for (int i = 0; i &lt; 5; ++i) {</span>
	<span class="token comment">//	_thread_pool-&gt;add([&amp;] {</span>
	<span class="token comment">//		for (int j = 0; j &lt; num; ++j) {</span>
	<span class="token comment">//			raii temp(&amp;_critical);</span>
	<span class="token comment">//			t2[j].add();</span>
	<span class="token comment">//		}</span>
	<span class="token comment">//		if (++complete_num == 10) {</span>
	<span class="token comment">//			printf(&quot;消耗时间(毫秒)：%I64d\\n&quot;, timer-&gt;get_ms() - start_time);</span>
	<span class="token comment">//		}</span>
	<span class="token comment">//		}</span>
	<span class="token comment">//	);</span>
	<span class="token comment">//}</span>
	<span class="token comment">//for (int i = 0; i &lt; 5; ++i) {</span>
	<span class="token comment">//	_thread_pool-&gt;add([&amp;] {</span>
	<span class="token comment">//		for (int j = 0; j &lt; num; ++j) {</span>
	<span class="token comment">//			raii temp(&amp;_critical);</span>
	<span class="token comment">//			t2[j].sub();</span>
	<span class="token comment">//		}</span>
	<span class="token comment">//		if (++complete_num == 10) {</span>
	<span class="token comment">//			printf(&quot;消耗时间(毫秒)：%I64d\\n&quot;, timer-&gt;get_ms() - start_time);</span>
	<span class="token comment">//		}</span>
	<span class="token comment">//		}</span>
	<span class="token comment">//	);</span>
	<span class="token comment">//}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>里面有我改写的网络上的线程池和一些其他的类，所以在各位的电脑上直接运行不了，如果想运行可以自己改一下。</p><p>单临界区：</p><figure><img src="https://img-blog.csdnimg.cn/20200426014912685.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>多临界区：</p><figure><img src="https://img-blog.csdnimg.cn/20200426014949965.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>耗时：</p><figure><img src="https://img-blog.csdnimg.cn/20200426015052275.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>平均值相差 5-6 倍， 大家可以不用在意多个临界区的开销问题， 可以使用对象池解决开销问题</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,12);function u(k,r){const n=a("Share");return t(),p("div",null,[o(" more "),l,e(n,{services:"qq,qrcode",colorful:""})])}const v=s(i,[["render",u],["__file","1.html.vue"]]);export{v as default};
