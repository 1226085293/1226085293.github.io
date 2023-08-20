import{_ as s,o as n,c as a,e,b as t,f as p}from"./app-e8020805.js";const o="/图片/产品文档/cc-plugin-protobufjs/菜单.png",i={},l=t("p",null,"你是否遇到了 protobufjs 安装的问题？或者每次更新 pb 都要去手动执行？来看看这个插件吧！",-1),c=p(`<h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 📢 功能介绍</h2><ul><li><p>🔨 构建：只编译变更的 proto 文件，让你更快速</p></li><li><p>🎧 监听构建：当 proto 文件变更时，自动构建</p></li><li><p>💼 pb 包装：可以将单个目录下的多个 package 包装到一个对象内</p></li><li><p>🍔 自定义构建参数：满足你裁剪代码缩小代码体积的需求！</p></li><li><p>🍔 自定义构建：构建代码全可自定义，还怕不能适配你现在的项目？</p></li></ul><p>为了支持任意方式的热更，直接将 proto 编译为 ts 和 d.ts 脚本</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 📌 目录</h2><ul><li><p>😊 <a href="#%E5%B7%B2%E7%BB%8F%E5%AE%89%E8%A3%85-protobufjs">已经安装 protobufjs</a></p></li><li><p>😳 <a href="#%E6%9C%AA%E5%AE%89%E8%A3%85-protobufjs">未安装 protobufjs</a></p></li></ul><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 📗 使用说明</h2><h3 id="已经安装-protobufjs" tabindex="-1"><a class="header-anchor" href="#已经安装-protobufjs" aria-hidden="true">#</a> 😊 已经安装 protobufjs</h3><p>在你安装完插件后，项目根目录会出现一个 <code>.protobufjs.js</code> 文件，这是插件的配置文件，不能移动位置，插件每次启动都会检测此文件是否存在，不存在则会新建一个</p><h4 id="配置里面有什么-让我看看" tabindex="-1"><a class="header-anchor" href="#配置里面有什么-让我看看" aria-hidden="true">#</a> 配置里面有什么，让我看看！👀</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
	 * 协议列表
	 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>proto_list<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
	 */</span>
	<span class="token literal-property property">proto_list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token doc-comment comment">/**
		自动构建开关
		- true: 递归监听 dir_path_ss 内的文件添加/删除/修改，并触发构建指令
		- false：需要手动点击 \`protobuf/构建\` 才会触发构建菜单
	*/</span>
	<span class="token literal-property property">automatic_build_b</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token doc-comment comment">/** 自动构建延迟（秒），防止短时间内频繁触发构建 */</span>
	<span class="token literal-property property">automatic_build_delay_s_n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>

	<span class="token doc-comment comment">/**
	 * 构建函数
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>proto_list<span class="token punctuation">}</span></span> <span class="token parameter">config_</span> proto 配置
	 * <span class="token keyword">@returns</span> 成功状态
	 */</span>
	<span class="token keyword">async</span> <span class="token function">build_f</span><span class="token punctuation">(</span><span class="token parameter">config_</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// ...</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数讲解" tabindex="-1"><a class="header-anchor" href="#参数讲解" aria-hidden="true">#</a> 参数讲解</h4><ul><li><p>proto_list：proto 生成配置列表</p><details><summary>详情（点击展开） </summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> proto_list
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span></span> <span class="token parameter">namespace_s</span> 命名空间
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">proto_ss</span> 协议文件(生成为脚本的协议文件)
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">ts_output_path_s</span> ts 输出路径(带脚本名)
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">dts_output_path_s</span> d.ts 输出路径(带脚本名)
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span></span> <span class="token parameter">pbjs_parameters</span> pbjs 生成时参数(可用于裁剪代码, 命令行\`npx pbjs\`查看具体参数)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>namespace_s：包装后的对象名</p><details><summary>示例（点击展开） </summary><p>如果 <code>a.proto</code> 和 <code>b.proto</code> 中的 package 分别为 a、b</p><ul><li><p>设置 namespace_s 为 pb 后</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> pb <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./proto/test&quot;</span><span class="token punctuation">;</span>

pb<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
pb<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>不设置 namespace_s</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./proto/test&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></details></li><li><p>proto_ss：协议文件路径（支持相对/绝对路径）</p><details><summary>示例（点击展开） </summary><ul><li><p>&quot;./a/*.proto&quot;<br> 代表 <code>当前目录/a</code> 文件夹下的所有 proto 文件，不包含子文件夹</p></li><li><p>&quot;./a/**/*.proto&quot;<br> 代表 <code>当前目录/a</code> 文件夹下的所有 proto 文件，包含子文件夹</p></li><li><p>&quot;./a/a.proto&quot;<br> 代表 <code>当前目录/a/a.proto</code> 单文件</p></li></ul></details></li><li><p>ts_output_path_s：输出的协议 ts 文件</p></li><li><p>dts_output_path_s：输出的协议 d.ts 文件（所在目录必须和 ts 文件相同）</p></li><li><p>pbjs_parameters：生成时参数</p><blockquote><p>控制台执行 <code>npx pbjs</code> 就可以看到有哪些参数了</p></blockquote></li></ul></details></li><li><p>automatic_build_b：自动构建开关</p></li><li><p>automatic_build_delay_s_n：自动构建延迟（秒）</p><blockquote><p>监听到 proto 文件修改后，延迟多久开始构建</p></blockquote></li><li><p>build_f：构建函数，你可以在这里修改构建逻辑，方便适配多个项目</p></li></ul><h3 id="未安装-protobufjs" tabindex="-1"><a class="header-anchor" href="#未安装-protobufjs" aria-hidden="true">#</a> 😳 未安装 protobufjs</h3><ul><li><p>如果你想通过 bundle 方式热更，点击 <code>protobufjs/安装/导入文件方式</code></p></li><li><p>如果你想通过 apk 更新或者 manifest 热更，点击 <code>protobufjs/安装/NPM 方式</code></p></li></ul><blockquote><p>注：个人推荐尽可能使用 NPM 方式，因为导入文件方式是直接导入 protobufjs 库的 ts 文件，有可能存在加载顺序问题</p></blockquote><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在安装完成后，点击跳转阅读 <a href="#%E5%B7%B2%E7%BB%8F%E5%AE%89%E8%A3%85-protobufjs">已经安装 protobufjs</a> 章节</p>',17);function r(u,d){return n(),a("div",null,[l,e(" more "),c])}const k=s(i,[["render",r],["__file","index.html.vue"]]);export{k as default};