import{_ as p,r as s,o as c,c as l,e as i,b as n,d as a,a as t,f as u}from"./app-de3fcfd1.js";const r={},d=u(`<h1 id="time-heap-时间堆" tabindex="-1"><a class="header-anchor" href="#time-heap-时间堆" aria-hidden="true">#</a> time_heap(时间堆)</h1><ul><li><strong>适合事件驱动系统的时间堆定时器，所有接口都尽量设计的简单易用。</strong></li><li>现在大部分流行的定时器一般分为两种，时间轮，时间堆。基于设计上而言。时间轮可以设计为滴答检测超时事件，或者直接在循环中检查超时事件。而时间堆异同。</li><li>我之前就写过一个基于滴答检测超时事件的定时器，这样的机制会造成一个问题。那就是由于休眠唤醒的时间总会有微小的误差（每次滴答），那么每次的误差积累起来就会越来越大。导致定时时长过长的事件的时间误差越大。所以只能在某些不需要太过精准定时时长的地方使用。</li><li>接下来我们来看看在循环里检测超时事件的定时器吧，这种类型的定时器只有一个问题。那就是占用不必要的性能消耗。如果是在事件驱动系统那么将造成很大的性能浪费。</li><li>那我们的时间堆呢。它有问题吗？当然有。那就是如果连续插入大量定时时长过短的定时事件那么就会造成事件触发事件延迟，延迟的时间根据事件的数量和触发时间而定。</li><li>好处：</li></ul><ol><li>不浪费性能，使用<strong>WaitForSingleObject</strong>函数直接休眠到下一个事件触发时间再唤醒执行任务；</li><li>适合核心数较少的 cpu, 不会出现一个循环占满 cpu 的情况；</li></ol><h2 id="性能测试-release-x64" tabindex="-1"><a class="header-anchor" href="#性能测试-release-x64" aria-hidden="true">#</a> 性能测试（Release_x64）</h2><ul><li>10w_50ms_timer, 从添加定时任务到最后一个定时任务结束消耗 230ms 左右, 循环检测类定时器消耗 30ms 左右</li><li>100w_50ms_timer, 从添加定时任务到最后一个定时任务结束消耗 2300ms 左右, 循环检测类定时器消耗 350ms 左右</li><li>10w_2000ms_timer, 从添加定时任务到最后一个定时任务结束消耗 150ms 左右, 循环检测类定时器消耗 30ms 左右</li><li>100w_2000ms_timer, 从添加定时任务到最后一个定时任务结束消耗 1200ms 左右, 循环检测类定时器消耗 280ms 左右</li></ul><p><strong>上面已经说了优缺点，接下来说下可以优化的点：</strong></p><ol><li>在时间堆中使用内存池。</li><li>加入异步执行任务。</li></ol><hr><p>备注：如果不在意性能消耗可以使用循环类检测超时任务的定时器，更加精准.</p><p>使用代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span><span class="token operator">&amp;</span> timer <span class="token operator">=</span> time_heap<span class="token double-colon punctuation">::</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> second <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>	<span class="token comment">//定时时长(单位：秒，由于是double可以传入0.05这样的数字，会自动转为毫秒)</span>
<span class="token keyword">uint32_t</span> count <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>	<span class="token comment">//执行次数</span>
<span class="token comment">//timer.add函数的返回值是一个std::shared_ptr对象。不用手动销毁</span>
<span class="token keyword">auto</span> timer1 <span class="token operator">=</span> timer<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>second<span class="token punctuation">,</span> count<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> index<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//不定参，可以使用任意类型个数的参数</span>
<span class="token comment">//获取事件函数返回值(若未事件未执行完成将堵塞)</span>
<span class="token keyword">auto</span> result <span class="token operator">=</span> timer1<span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//安全的获取事件函数返回值(若未事件未执行完成将堵塞，超过count次get完成后再次get将cash)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>timer1<span class="token operator">-&gt;</span>vaild<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">auto</span> result <span class="token operator">=</span> timer1<span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
timer1<span class="token operator">-&gt;</span><span class="token function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		        <span class="token comment">//删除定时事件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),k={href:"https://github.com/1226085293/time_heap",target:"_blank",rel:"noopener noreferrer"},m=n("hr",null,null,-1),_=n("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function v(h,b){const e=s("ExternalLinkIcon"),o=s("Share");return c(),l("div",null,[i(" more "),d,n("p",null,[a("代码库在 github--> "),n("a",k,[a("点击此处进入"),t(e)])]),m,_,t(o,{services:"qq,qrcode",colorful:""})])}const f=p(r,[["render",v],["__file","C__线程安全的定时器(时间堆)实现.html.vue"]]);export{f as default};
