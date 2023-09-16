import{_ as s,r as a,o as t,c as p,e as o,d as c,f as e}from"./app-2db027c8.js";const u={},i=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>string <span class="token function">ip</span><span class="token punctuation">(</span><span class="token string">&quot;199.199.199.199&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span>regex <span class="token function">check_ip</span><span class="token punctuation">(</span><span class="token string">&quot;(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])[.](25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])[.](25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])[.](25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">in_addr</span> s<span class="token punctuation">;</span>
<span class="token keyword">uint64_t</span> start_time1 <span class="token operator">=</span> tool<span class="token double-colon punctuation">::</span>time<span class="token double-colon punctuation">::</span><span class="token function">get_ms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token function">inet_pton</span><span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> ip<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;格式不正确\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;inet_pton消耗时间%I64d\\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>tool<span class="token double-colon punctuation">::</span>time<span class="token double-colon punctuation">::</span><span class="token function">get_ms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start_time1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
start_time1 <span class="token operator">=</span> tool<span class="token double-colon punctuation">::</span>time<span class="token double-colon punctuation">::</span><span class="token function">get_ms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">regex_match</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> check_ip<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;格式不正确\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;regex_match消耗时间%I64d\\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>tool<span class="token double-colon punctuation">::</span>time<span class="token double-colon punctuation">::</span><span class="token function">get_ms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start_time1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上：使用了新的 std::regex 正则表达式和新的 inet_pton 函数检测。你们猜猜结果？</p><figure><img src="https://img-blog.csdnimg.cn/20200601060352818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>看来还是微软检测牛逼啊。还是少用正则表达式。对于性能会有影响</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,6);function l(k,r){const n=a("Share");return t(),p("div",null,[o(" more "),i,c(n,{services:"qq,qrcode",colorful:""})])}const m=s(u,[["render",l],["__file","23.html.vue"]]);export{m as default};