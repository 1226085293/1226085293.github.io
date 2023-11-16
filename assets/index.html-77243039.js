import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as p,e as i,a as n,b as a,d as t,f as c}from"./app-405459a4.js";const u={},r=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"通用音频系统由于以下 creator 引擎 bug，非微信小游戏开发者推荐使用 3.8 及以上引擎版本进行开发"),n("ul",null,[n("li",null,[n("p",null,"3.7.2 以下版本不能同时播放两个以上的音频")]),n("li",null,[n("p",null,"3.7.2 以下版本使用编辑器 @property 资源调用 play 只会有一个音频生效")])])],-1),d=c(`<h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><h3 id="方式一-属性面板" tabindex="-1"><a class="header-anchor" href="#方式一-属性面板" aria-hidden="true">#</a> 方式一：属性面板</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 单个音频</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span>mk<span class="token punctuation">.</span>audio_<span class="token punctuation">.</span>unit<span class="token punctuation">)</span>
music <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mk</span><span class="token punctuation">.</span>audio_<span class="token punctuation">.</span><span class="token function">unit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 多个音频</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">[</span>mk<span class="token punctuation">.</span>audio_<span class="token punctuation">.</span>unit<span class="token punctuation">]</span><span class="token punctuation">)</span>
music_as<span class="token operator">:</span> mk<span class="token punctuation">.</span>audio_<span class="token punctuation">.</span>unit<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二-动态加载" tabindex="-1"><a class="header-anchor" href="#方式二-动态加载" aria-hidden="true">#</a> 方式二：动态加载</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 全路径单音频</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>music <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> mk<span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;db://assets/resources/xxx.mp3&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>

<span class="token comment">// bundle 路径单音频</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>music <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> mk<span class="token punctuation">.</span>audio<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    load_config<span class="token operator">:</span> <span class="token punctuation">{</span>
        bundle_s<span class="token operator">:</span> global_config<span class="token punctuation">.</span>asset<span class="token punctuation">.</span>bundle<span class="token punctuation">.</span>resources<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mk-audio-unit-属性说明" tabindex="-1"><a class="header-anchor" href="#mk-audio-unit-属性说明" aria-hidden="true">#</a> mk.audio_.unit 属性说明</h2>`,6),k=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"属性"),n("th",{style:{"text-align":"left"}},"说明")])],-1),_=n("tr",null,[n("td",{style:{"text-align":"left"}},"group_ns"),n("td",{style:{"text-align":"left"}},"音频所在分组列表，可存在多个")],-1),m=n("td",{style:{"text-align":"left"}},"state",-1),h={style:{"text-align":"left"}},f={href:"https://github.com/1226085293/MKFramework/blob/main/assets/%40framework/audio/mk_audio_base.ts#L248",target:"_blank",rel:"noopener noreferrer"},y=n("tr",null,[n("td",{style:{"text-align":"left"}},"wait_play_b"),n("td",{style:{"text-align":"left"}},"等待播放开关，开启时多次调用 mk.audio_.unit.play 接口时，会等待前次 play 完成")],-1),b=n("tr",null,[n("td",{style:{"text-align":"left"}},"wait_play_n"),n("td",{style:{"text-align":"left"}},"等待播放次数，wait_play_b 为 true 时等待播放的次数")],-1),g=n("tr",null,[n("td",{style:{"text-align":"left"}},"curr_time_s_n"),n("td",{style:{"text-align":"left"}},"当前时间（秒）")],-1),v=n("tr",null,[n("td",{style:{"text-align":"left"}},"total_time_s_n"),n("td",{style:{"text-align":"left"}},"总时长（秒）")],-1),x=n("td",{style:{"text-align":"left"}},"event",-1),w={style:{"text-align":"left"}},N={href:"https://github.com/1226085293/MKFramework/blob/main/assets/%40framework/audio/mk_audio_base.ts#L356",target:"_blank",rel:"noopener noreferrer"},V=n("tr",null,[n("td",{style:{"text-align":"left"}},"type"),n("td",{style:{"text-align":"left"}},"音频类型，默认类型为 global_config.audio.type")],-1),q=n("tr",null,[n("td",{style:{"text-align":"left"}},"volume_n"),n("td",{style:{"text-align":"left"}},"音量")],-1),L=n("tr",null,[n("td",{style:{"text-align":"left"}},"loop_b"),n("td",{style:{"text-align":"left"}},"循环")],-1),B=n("tr",null,[n("td",{style:{"text-align":"left"}},"use_play_b"),n("td",{style:{"text-align":"left"}},"通用音频系统使用，指定使用 play 接口，playOneShot 接口不能暂停音频")],-1);function E(C,F){const s=o("ExternalLinkIcon");return l(),p("div",null,[r,i(" more "),d,n("table",null,[k,n("tbody",null,[_,n("tr",null,[m,n("td",h,[n("a",f,[a("播放状态"),t(s)])])]),y,b,g,v,n("tr",null,[x,n("td",w,[n("a",N,[a("事件对象"),t(s)])])]),V,q,L,B])])])}const M=e(u,[["render",E],["__file","index.html.vue"]]);export{M as default};
