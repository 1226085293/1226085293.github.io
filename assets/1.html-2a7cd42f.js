import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as e,e as p,d as o,f as c}from"./app-405459a4.js";const i={},u=c(`<ul><li>this.audio 为已经初始化完成的 mk.audio_.unit 对象，如未初始化参考音频系统介绍</li></ul><h2 id="音频播放" tabindex="-1"><a class="header-anchor" href="#音频播放" aria-hidden="true">#</a> 音频播放</h2><h3 id="正常播放" tabindex="-1"><a class="header-anchor" href="#正常播放" aria-hidden="true">#</a> 正常播放</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>mk<span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>audio<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重叠播放" tabindex="-1"><a class="header-anchor" href="#重叠播放" aria-hidden="true">#</a> 重叠播放</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 需要最大重叠几次就包含几个 mk.audio_.unit</span>
<span class="token keyword">let</span> overlap_effect_as <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>audio<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

mk<span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span>overlap_effect_as<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v<span class="token punctuation">.</span>state <span class="token operator">===</span> mk<span class="token punctuation">.</span>audio_<span class="token punctuation">.</span>state<span class="token punctuation">.</span>stop<span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分组播放" tabindex="-1"><a class="header-anchor" href="#分组播放" aria-hidden="true">#</a> 分组播放</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 播放处于 pause 或 stop 状态的 effect 类型音频</span>
mk<span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">get_group</span><span class="token punctuation">(</span>global_config<span class="token punctuation">.</span>audio<span class="token punctuation">.</span>type<span class="token punctuation">.</span>effect<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span>mk<span class="token punctuation">.</span>audio_<span class="token punctuation">.</span>state<span class="token punctuation">.</span>pause <span class="token operator">|</span> mk<span class="token punctuation">.</span>audio_<span class="token punctuation">.</span>state<span class="token punctuation">.</span>stop<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暂停" tabindex="-1"><a class="header-anchor" href="#暂停" aria-hidden="true">#</a> 暂停</h2><h3 id="正常暂停" tabindex="-1"><a class="header-anchor" href="#正常暂停" aria-hidden="true">#</a> 正常暂停</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>mk<span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>audio<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="暂停分组音频" tabindex="-1"><a class="header-anchor" href="#暂停分组音频" aria-hidden="true">#</a> 暂停分组音频</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>mk<span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">get_group</span><span class="token punctuation">(</span>global_config<span class="token punctuation">.</span>audio<span class="token punctuation">.</span>type<span class="token punctuation">.</span>effect<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="暂停所有音频" tabindex="-1"><a class="header-anchor" href="#暂停所有音频" aria-hidden="true">#</a> 暂停所有音频</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>mk<span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">pause_all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,17);function l(d,r){const n=s("Share");return t(),e("div",null,[p(" more "),u,o(n,{services:"qq,qrcode",colorful:""})])}const m=a(i,[["render",l],["__file","1.html.vue"]]);export{m as default};
