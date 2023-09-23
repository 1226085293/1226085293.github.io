import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as e,c as t,e as p,d as o,f as c}from"./app-40463a1e.js";const l={},i=c(`<p>​<br> 代码测试休眠 5 秒钟，一秒钟休眠一次测试， WaitForSingleObject 函数的精度比 sleep 和 sleep_for 的精度提高 10ms 左右；</p><p>WaitForSingleObject 在等待的过程中会进入一个非常高效的沉睡等待状态，只占用极少的 CPU 时间片。</p><p>使用代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>HANDLE eve <span class="token operator">=</span> <span class="token function">CreateEvent</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span> FALSE<span class="token punctuation">,</span> FALSE<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">WaitForSingleObject</span><span class="token punctuation">(</span>eve<span class="token punctuation">,</span> 超时时间<span class="token punctuation">(</span>毫秒<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> WAIT_OBJECT_0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//进入这个循环就代表接收到了事件或者超时（我们就是利用超时这个机制来使用他的等待机制， SetEvent(eve)这个函数可以发送事件，这里我们用不到）</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,6);function u(r,d){const n=a("Share");return e(),t("div",null,[p(" more "),i,o(n,{services:"qq,qrcode",colorful:""})])}const v=s(l,[["render",u],["__file","18.html.vue"]]);export{v as default};
