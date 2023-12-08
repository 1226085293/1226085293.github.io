import{_ as n,o as a,c as s,e,a as t,f as o}from"./app-5c1cae43.js";const p={},c=t("p",null,"多语言文本是为了控制不同国家语言的文本展示而存在，支持 cc.Label、cc.RichText",-1),l=o(`<h2 id="多语言文本配置" tabindex="-1"><a class="header-anchor" href="#多语言文本配置" aria-hidden="true">#</a> 多语言文本配置</h2><p>我们要使用多语言文本，首先要添加文本配置，在你的模块下建立任意一个脚本存放，如下图中的 <code>i18n/resources_language_label.ts</code> 就是 language 模块的文本配置</p><figure><img src="https://gitee.com/muzzik/images/raw/master/mk-framework/module/language/1/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>内容如下</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> mk <span class="token keyword">from</span> <span class="token string">&quot;mk&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> cc <span class="token keyword">from</span> <span class="token string">&quot;cc&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">mk</span><span class="token punctuation">.</span>language_<span class="token punctuation">.</span><span class="token function">label_data</span><span class="token punctuation">(</span>cc<span class="token punctuation">.</span>js<span class="token punctuation">.</span><span class="token function">getClassName</span><span class="token punctuation">(</span>替换为模块<span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	示例<span class="token operator">:</span> <span class="token punctuation">{</span>
		en_us<span class="token operator">:</span> <span class="token string">&quot;template-{0}&quot;</span><span class="token punctuation">,</span>
		zh_cn<span class="token operator">:</span> <span class="token string">&quot;示例-{0}&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>示例</code> 是多语言键，内容为对应的多语言文本，<code>cc.js.getClassName(替换为模块class)</code> 是获取模块名，你也可以替换为字符串</p><h2 id="多语言文本组件" tabindex="-1"><a class="header-anchor" href="#多语言文本组件" aria-hidden="true">#</a> 多语言文本组件</h2><p>在添加了文本的配置后，我们就可以添加多语言组件了，选中 Label 组件，添加 mk_language_label 组件</p><figure><img src="https://gitee.com/muzzik/images/raw/master/mk-framework/module/language/1/2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到，<strong>类型</strong> 就是我们 <code>new mk.language_.label_data(...)</code> 的第一个参数，而 <strong>语言标识</strong> 就是我们注册的多语言文本资源键</p><p>你可以任意切换类型和语言标识，编辑器内容实时更新，<strong>框架建议模块只使用自己的多语言资源，除非你使用的是公共资源</strong></p><h3 id="文本参数" tabindex="-1"><a class="header-anchor" href="#文本参数" aria-hidden="true">#</a> 文本参数</h3><p>文本参数是为了替换多语言中的动态内容，而替换成的固定格式字符串</p><p>框架默认的格式是 <code>{0}</code></p><ul><li>前缀：<code>{</code></li><li>后缀：<code>}</code></li><li>中间数字：参数顺序</li></ul><blockquote><p>例： <code>金币：{0}，钻石：{1}</code>，参数为：<code>[1, 2]</code>，结果为：<code>金币：1，钻石：2</code></p></blockquote><h2 id="脚本内使用" tabindex="-1"><a class="header-anchor" href="#脚本内使用" aria-hidden="true">#</a> 脚本内使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> label <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nodes<span class="token punctuation">.</span>label<span class="token punctuation">.</span><span class="token function">getComponent</span><span class="token punctuation">(</span>mk<span class="token punctuation">.</span>language<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>

<span class="token comment">// 设置参数</span>
label<span class="token punctuation">.</span>args_ss <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 设置类型</span>
label<span class="token punctuation">.</span>type_s <span class="token operator">=</span> <span class="token string">&quot;resources_language&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 设置标记</span>
label<span class="token punctuation">.</span>mark_s <span class="token operator">=</span> resources_language_label<span class="token punctuation">.</span>key<span class="token punctuation">.</span>示例<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function i(u,r){return a(),s("div",null,[c,e(" more "),l])}const k=n(p,[["render",i],["__file","1.html.vue"]]);export{k as default};