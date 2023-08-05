import{_ as p,r as t,o,c,d as l,a as n,b as s,e,f as i}from"./app-6edb3506.js";const u={},r=n("figure",null,[n("img",{src:"https://forum.cocos.org/uploads/default/original/3X/5/1/510bf2e6d602bab436b24578dc316970a9356a7a.gif",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),d=n("h1",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),k=n("p",null,"相信当年 VR 刚出的时候大家都体验过吧?这里就用 cocos 的后处理来实现 VR 效果",-1),v=n("p",null,[s("从其他的 VR 应用可以看出来,手机 VR 画面是由 "),n("strong",null,"左右两个相同的类似老电视机画面组成"),s(" 的(其实是我没找到关于手机 VR 展示的资料...)")],-1),_={href:"https://www.shadertoy.com/view/4sf3Dr",target:"_blank",rel:"noopener noreferrer"},b=i(`<h1 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h1><h2 id="_1-把屏幕分成两块" tabindex="-1"><a class="header-anchor" href="#_1-把屏幕分成两块" aria-hidden="true">#</a> 1. 把屏幕分成两块</h2><p>uv 坐标范围:0-1</p><p>这里我们需要对 uv 进行处理,思路很简单,我们把半块屏幕当作 uv 的实际坐标范围,也就是 (0 ~ 0.5) 和 (0.5 ~ 1.0)<br> 一句代码搞定</p><div class="language-glsl line-numbers-mode" data-ext="glsl"><pre class="language-glsl"><code><span class="token keyword">vec2</span> v_uv2 <span class="token operator">=</span> <span class="token function">mod</span><span class="token punctuation">(</span>v_uv <span class="token operator">*</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://forum.cocos.org/uploads/default/original/3X/8/2/825a6edc015fc29cc48177b77eb8c0b13cb7a819.png" alt="分割后的 UV " tabindex="0" loading="lazy"><figcaption>分割后的 UV </figcaption></figure><p>看到了输出结果,这句代码不仅把左右分成了两边,上下也是,那么我们怎么处理呢?<br> 也很简单</p><ul><li><strong>uv.y 坐标移动到中间,也就是 +0.25</strong></li><li><strong>过滤掉多余画面</strong></li></ul><div class="language-glsl line-numbers-mode" data-ext="glsl"><pre class="language-glsl"><code>    <span class="token comment">// uv 居中</span>
    <span class="token keyword">vec2</span> v_uv2 <span class="token operator">=</span> <span class="token keyword">vec2</span><span class="token punctuation">(</span>v_uv<span class="token punctuation">.</span>x<span class="token punctuation">,</span> v_uv<span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// uv 分块</span>
    <span class="token keyword">vec2</span> v_uv3 <span class="token operator">=</span> <span class="token function">mod</span><span class="token punctuation">(</span>v_uv2 <span class="token operator">*</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 过滤画面</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>v_uv2<span class="token punctuation">.</span>y <span class="token operator">&lt;</span> <span class="token number">0.5</span> <span class="token operator">||</span> v_uv2<span class="token punctuation">.</span>y <span class="token operator">&gt;</span> <span class="token number">1.0</span> <span class="token operator">||</span> v_uv3<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> <span class="token number">0.0</span> <span class="token operator">||</span> v_uv3<span class="token punctuation">.</span>x <span class="token operator">&gt;</span> <span class="token number">1.0</span> <span class="token operator">||</span> v_uv3<span class="token punctuation">.</span>y <span class="token operator">&lt;</span> <span class="token number">0.0</span> <span class="token operator">||</span> v_uv3<span class="token punctuation">.</span>y <span class="token operator">&gt;</span> <span class="token number">1.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">discard</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://forum.cocos.org/uploads/default/original/3X/b/c/bc53695196af912578319b13fa9e012a638d15da.png" alt="分割后效果" tabindex="0" loading="lazy"><figcaption>分割后效果</figcaption></figure><p>不戳不戳有那味了~</p><h2 id="_2-添加-crt-老电视效果" tabindex="-1"><a class="header-anchor" href="#_2-添加-crt-老电视效果" aria-hidden="true">#</a> 2. 添加 CRT 老电视效果</h2><p>如果红色框是我们最开始界面,那我们的需求是:</p><ul><li>uv.x 在(0 ~ 0.5)从大到小递增,在(0.5 ~ 1.0)从小到大递减</li><li>uv.y 在(0 ~ 0.5)从大到小递增,在(0.5 ~ 1.0)从小到大递减</li></ul><p>上 🚴</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vec2 <span class="token function">post_process_crt</span><span class="token punctuation">(</span>vec2 uv_pos_v2_<span class="token punctuation">,</span> <span class="token keyword">float</span> bend_f_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// -1.0 ~ 1.0</span>
	uv_pos_v2_ <span class="token operator">=</span> <span class="token punctuation">(</span>uv_pos_v2_ <span class="token operator">-</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2.0</span><span class="token punctuation">;</span>

    <span class="token comment">// 缩放 uv，增加差异范围</span>
	uv_pos_v2_ <span class="token operator">*=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>

    <span class="token comment">// uv 变形</span>
    <span class="token comment">// 由于 uv_pos_v2_.y 范围在（-1.0，1.0），所以 abs（uv_pos_v2_.y）越大则结果越大，0 为分界线</span>
    <span class="token comment">// pow((abs(uv_pos_v2_.y) / bend_f_), 2.0) 的结果由于 abs(uv_pos_v2_.y）不会超过 1.0，所以 uv_pos_v2_.x 不会超过自己2倍</span>
	uv_pos_v2_<span class="token punctuation">.</span>x <span class="token operator">*=</span> <span class="token number">1.0</span> <span class="token operator">+</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">abs</span><span class="token punctuation">(</span>uv_pos_v2_<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">/</span> bend_f_<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	uv_pos_v2_<span class="token punctuation">.</span>y <span class="token operator">*=</span> <span class="token number">1.0</span> <span class="token operator">+</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">abs</span><span class="token punctuation">(</span>uv_pos_v2_<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">/</span> bend_f_<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 转换回 0.0 - 1.0 空间</span>
	uv_pos_v2_  <span class="token operator">=</span> <span class="token punctuation">(</span>uv_pos_v2_ <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> uv_pos_v2_<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考图:</strong></p><ul><li><p><strong>x 为 递增的 vec2, t 为递增的 number</strong><br><img src="https://forum.cocos.org/uploads/default/original/3X/2/b/2b7c32418260f9ec7e226495f339366030b66400.png" alt="x 值图示" loading="lazy"></p></li><li><p><strong>固定 y 后的 x 值</strong><br><img src="https://forum.cocos.org/uploads/default/original/3X/e/d/ed03ed41d5e5a90eccfe25010b820386093e3dfb.png" alt="固定 y 后的 x 值" loading="lazy"></p></li><li><p><strong>固定 x 后的 y 值</strong><br><img src="https://forum.cocos.org/uploads/default/original/3X/9/a/9a14e29cc9e62038ad10b24ef8bf60f796be3f87.png" alt="固定 x 后的 y 值" loading="lazy"></p></li></ul><h2 id="_3-最终输出" tabindex="-1"><a class="header-anchor" href="#_3-最终输出" aria-hidden="true">#</a> 3. 最终输出</h2><figure><img src="https://forum.cocos.org/uploads/default/original/3X/d/5/d5ddb94d7985c817b7951d09bc17d1d354af6a03.png" alt="最终效果图示" tabindex="0" loading="lazy"><figcaption>最终效果图示</figcaption></figure><p>至此完成我们的目标, 下班前赶稿,写的不好见谅</p><h1 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h1>`,22),m=n("strong",null,"demo",-1),g={href:"https://github.com/1226085293/mk_cocos_vr.git",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"打开项目后请在 项目-> 项目设置 - >项目数据- > 更换渲染管线为 builtin-deferred2.rpp",-1),h=n("p",null,"由于目前 cocos 版本渲染管线对后处理的支持并不好, 我是修改的 web 端渲染管线实现的,所以更加推荐通过 renderTexture 方式实现。可以参考另外一篇帖子",-1);function y(x,w){const a=t("ExternalLinkIcon");return o(),c("div",null,[l(" more "),r,d,k,v,n("p",null,[s("那么就从这里入手,去逛了下 shadertoy,果然找到一个类似的 "),n("a",_,[s("效果"),e(a)]),s(",然后搬到了 creator 里面,接下来我们看看是 VR 效果具体如何实现的")]),b,n("p",null,[m,s(": "),n("a",g,[s("github 链接"),e(a)])]),f,h])}const R=p(u,[["render",y],["__file","VR 后处理效果.html.vue"]]);export{R as default};
