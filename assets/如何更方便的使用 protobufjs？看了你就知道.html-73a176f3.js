import{_ as e,r as s,o as c,c as i,e as l,b as n,d as u,a,f as t}from"./app-a5892a28.js";const k="/图片/文章/protobufjs/1w.png",r="/图片/文章/protobufjs/10w.png",d={},v=t(`<h2 id="怎么给-pb-消息添加消息号" tabindex="-1"><a class="header-anchor" href="#怎么给-pb-消息添加消息号" aria-hidden="true">#</a> 怎么给 pb 消息添加消息号？</h2><p>目前论坛里的方案：</p><ul><li>二次包装（消息体封装消息体）</li><li>拼接消息号（拼接固定字节在消息头用于消息号解析）</li></ul><p>我的方案：</p><ul><li>使用默认值</li></ul><h2 id="默认值是什么" tabindex="-1"><a class="header-anchor" href="#默认值是什么" aria-hidden="true">#</a> 默认值是什么？</h2><p>其实这是 protobuf 的语法特性，只需要在 <code>;</code> 前面加上 <code>[default = 默认值]</code> 就可以定义一个属性的默认值</p><div class="language-proto line-numbers-mode" data-ext="proto"><pre class="language-proto"><code>package test;
syntax = &quot;proto3&quot;;

message test {
   uint32 __id = 1 [default = 100];
   string data = 2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用默认值有什么好处" tabindex="-1"><a class="header-anchor" href="#使用默认值有什么好处" aria-hidden="true">#</a> 使用默认值有什么好处？</h2><ul><li><p>更好的性能</p></li><li><p>节省传输字节</p></li><li><p>更方便的使用（发送/接收再也不需要关注消息号）</p></li><li><p>不需要再手动定义消息号</p></li></ul><h2 id="三种方式性能对比" tabindex="-1"><a class="header-anchor" href="#三种方式性能对比" aria-hidden="true">#</a> 三种方式性能对比</h2><p>1w 次<br><img src="`+k+'" alt="" width="666" height="63" loading="lazy"></p><p>10w 次<br><img src="'+r+'" alt="" width="690" height="63" loading="lazy"></p><blockquote><p>测试代码在末尾</p></blockquote><h2 id="怎么省略消息号" tabindex="-1"><a class="header-anchor" href="#怎么省略消息号" aria-hidden="true">#</a> 怎么省略消息号？</h2><ol><li><p>首先我们必须生成 static module 的 proto 协议文件</p></li><li><p>游戏初始化时候递归遍历 proto 顶层对象，使用 Map&lt;消息号, 消息体&gt;</p></li><li><p>在发送的时候就可以直接取 Map 里面的消息体用来 encode，也可以用 <code>__proto__.constructor</code> 获取到 class 来 encode</p></li><li><p>在接收的时候，则可以使用 <code>protobufjs.Reader</code> 来获得消息号，再通过 Map 获取消息体 decode，这样就完全用不到消息号了，除了排错之外</p></li></ol><blockquote><p>怎么避免手写消息号呢？答案是自动生成，并且生成的消息号需要缓存文件，避免上下次生成的消息不一致导致热更出现问题</p></blockquote><h3 id="源码参考" tabindex="-1"><a class="header-anchor" href="#源码参考" aria-hidden="true">#</a> 源码参考</h3>',18),m={href:"https://github.com/1226085293/MKFramework/blob/dev/assets/tool/codec/tool_codec_proto_static.ts#L103",target:"_blank",rel:"noopener noreferrer"},b=t(`<hr><h3 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h3><blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 二次包装</span>
<span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_log<span class="token punctuation">.</span><span class="token function">time_start</span><span class="token punctuation">(</span><span class="token string">&quot;二次包装&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> temp<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k_n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k_n <span class="token operator">&lt;</span> for_n<span class="token punctuation">;</span> <span class="token operator">++</span>k_n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token doc-comment comment">/** 消息体字节 */</span>
		<span class="token keyword">const</span> body <span class="token operator">=</span> test<span class="token punctuation">.</span>send_data_body<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>send_data_body<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token doc-comment comment">/** 消息 */</span>
		temp <span class="token operator">=</span> test<span class="token punctuation">.</span>send_data
			<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>
				test<span class="token punctuation">.</span>send_data<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
					id<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
					body<span class="token operator">:</span> body<span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token operator">&gt;</span>
			<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_log<span class="token punctuation">.</span><span class="token function">time_end</span><span class="token punctuation">(</span><span class="token string">&quot;二次包装&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 拼接消息号</span>
<span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_log<span class="token punctuation">.</span><span class="token function">time_start</span><span class="token punctuation">(</span><span class="token string">&quot;拼接消息号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k_n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k_n <span class="token operator">&lt;</span> for_n<span class="token punctuation">;</span> <span class="token operator">++</span>k_n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token doc-comment comment">/** 消息体字节 */</span>
		<span class="token keyword">const</span> body <span class="token operator">=</span> test<span class="token punctuation">.</span>send_data_body<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>send_data_body<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> buff <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> body<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> mess <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buff<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> data_view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>buff<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 设置消息号</span>
		data_view<span class="token punctuation">.</span><span class="token function">setUint16</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 设置消息体</span>
		mess<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_log<span class="token punctuation">.</span><span class="token function">time_end</span><span class="token punctuation">(</span><span class="token string">&quot;拼接消息号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 默认消息号</span>
<span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_log<span class="token punctuation">.</span><span class="token function">time_start</span><span class="token punctuation">(</span><span class="token string">&quot;默认消息号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> temp<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k_n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k_n <span class="token operator">&lt;</span> for_n<span class="token punctuation">;</span> <span class="token operator">++</span>k_n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> body <span class="token operator">=</span> test<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// eslint-disable-next-line no-self-assign</span>
		body<span class="token punctuation">[</span><span class="token string">&quot;__id&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> body<span class="token punctuation">[</span><span class="token string">&quot;__id&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		temp <span class="token operator">=</span> test<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_log<span class="token punctuation">.</span><span class="token function">time_end</span><span class="token punctuation">(</span><span class="token string">&quot;默认消息号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,5);function _(h,f){const p=s("ExternalLinkIcon"),o=s("Share");return c(),i("div",null,[l(" more "),v,n("ul",null,[n("li",null,[n("a",m,[u("https://github.com/1226085293/MKFramework/blob/dev/assets/tool/codec/tool_codec_proto_static.ts#L103"),a(p)])])]),b,a(o,{services:"qq,qrcode",colorful:""})])}const g=e(d,[["render",_],["__file","如何更方便的使用 protobufjs？看了你就知道.html.vue"]]);export{g as default};
