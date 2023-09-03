import{_ as d,r as i,o as r,c as n,e as f,b as e,d as a,a as o,f as t}from"./app-88f3be70.js";const g={},u=t('<h1 id="新旧对比" tabindex="-1"><a class="header-anchor" href="#新旧对比" aria-hidden="true">#</a> 新旧对比</h1><h2 id="调试-修改代码" tabindex="-1"><a class="header-anchor" href="#调试-修改代码" aria-hidden="true">#</a> # 调试/修改代码</h2><ul><li>老旧的开发方式：(修改 -&gt; 编译 -&gt; 重启插件 -&gt; 运行插件)</li></ul><figure><img src="https://forum.cocos.org/uploads/default/optimized/3X/d/7/d75c492a792d93063b2931957a9d9fd9e7fd0e10_2_690x342.gif" alt="" width="690" height="342" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>新的开发方式：(修改 -&gt; 预览编译 -&gt; 刷新预览)</li></ul><figure><img src="https://forum.cocos.org/uploads/default/optimized/3X/d/5/d5a6d35b21629cff39ef7490855ca5d09a2c3ccf_2_690x359.gif" alt="" width="690" height="359" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改-ui" tabindex="-1"><a class="header-anchor" href="#修改-ui" aria-hidden="true">#</a> # 修改 UI</h2><ul><li>老旧的开发方式：(修改运行时 html(可选) -&gt; 修改 html -&gt; 编译 -&gt; 重启插件 -&gt; 运行插件) <blockquote><p>…时间太长就不录了</p></blockquote></li><li>新的开发方式：(编辑器修改 -&gt; 刷新预览)</li></ul><figure><img src="https://forum.cocos.org/uploads/default/optimized/3X/f/3/f3f3d81205f553a05e3c5fb877f98415288479ef_2_690x359.gif" alt="" width="690" height="359" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="商店链接" tabindex="-1"><a class="header-anchor" href="#商店链接" aria-hidden="true">#</a> 商店链接</h1>',10),h={href:"https://store.cocos.com/app/detail/4897",rel:"nofollow noopener"},p={href:"https://store.cocos.com/app/detail/4897",target:"_blank",rel:"noopener noreferrer"},s=e("br",null,null,-1),m=t('<figure><img src="https://forum.cocos.org/uploads/default/optimized/3X/d/4/d4a18f4fb0395576fc95354d2e5887e40e8485df_2_690x276.png" alt="" width="690" height="276" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="使用文档" tabindex="-1"><a class="header-anchor" href="#使用文档" aria-hidden="true">#</a> 使用文档</h1><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> # 初始化</h2><ul><li>安装插件编译器，命令行执行 <code>npm i -g @muzzik/cc-plugin-cli</code></li><li>初始化项目依赖包，<em>项目根目录</em> 下命令行执行 <code>npm i</code></li><li>初始化插件依赖包，<em>项目根目录/extensions_dev/mk-project-template-plugin</em> 下命令行执行 <code>npm i</code></li><li>编译插件，参考下方说明</li><li>启用插件（菜单栏：扩展/扩展管理器）</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/2/c/2cfc9441e6c663a8690544eca88fc54fb9ddcf8b.png" alt="" width="500" height="344" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>按下 F3 键即可见到插件面板，如果快捷键被占用可通过菜单栏打开</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/0/8/0829f05e21552e6425bd1b86faf96c2b874e97cd.png" alt="" width="369" height="190" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="编译插件" tabindex="-1"><a class="header-anchor" href="#编译插件" aria-hidden="true">#</a> # 编译插件</h2><ul><li><p><em>两种编译方式（任选其一）</em></p><p>1.1. vscode 提供的 npm 脚本窗口</p></li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/5/d/5df6c118a88c95d6f44974c8c1d1955840abede2.png" alt="" width="690" height="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1.2. 手动编译</p><p>命令行执行：<code>cc-plugin-cli c -p 插件开发目录绝对路径</code></p><ul><li>插件开发目录示例：<code>xxx\\extensions_dev\\mk-project-template-plugin</code></li><li><em>什么时候需要编译插件？</em><ul><li>当你安装了新的 npm 包的时候</li><li>修改了插件开发目录下的源码</li></ul></li></ul><h2 id="开发阶段" tabindex="-1"><a class="header-anchor" href="#开发阶段" aria-hidden="true">#</a> # 开发阶段</h2><ul><li><em>怎么在 creator 中使用 Nodejs</em></li></ul><p>以 fs 模块导入举例：<code>const fs = require(&quot;fs&quot;) as typeof import(&quot;fs&quot;);</code></p><ul><li><em>怎么刷新插件预览？</em></li></ul><p>选中插件面板按 <em>f5</em></p><ul><li><em>怎么使用 html 混合开发？</em><ul><li><em>标签类型</em></li></ul></li></ul><p>以一个 ui-button 组件举例</p><p><img src="https://forum.cocos.org/uploads/default/original/3X/9/f/9f0582390167a1fd7d6d48ac8460fec6a946c4f8.png" alt="" width="362" height="93" loading="lazy">&gt;</p><p>节点名 # 前面的字符就代表标签类型，例如 div 就是 <code>div#</code></p><ul><li><em>标签属性</em></li></ul><figure><img src="https://forum.cocos.org/uploads/default/optimized/3X/a/8/a8340467ea7f01f7bade50ecc1d1b67ecb1a31ee_2_690x228.png" alt="" width="690" height="228" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在节点上添加 <code>tool_tag</code></p><ul><li><em>key:data</em></li></ul><p>这代表直接进行赋值，例如 <code>style.background-color: red</code></p><ul><li><em>key=data</em><br> 注意：之所以能使用 html 混合开发，是因为有一层 html 叠加在 creator 的界面上，所以 html 标签不能被 creator UI 遮挡</li><li><em>无边框窗口</em></li></ul><p>在插件开发目录的 <code>src/config.ts</code> 修改</p><figure><img src="https://forum.cocos.org/uploads/default/original/3X/9/0/9073942546c3432a8c1e42d9bf37efe4ec926986.png" alt="" width="690" height="314" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注意：使用无边框将无法使用 cocos 自带的 ui 组件</p><h2 id="打包发布" tabindex="-1"><a class="header-anchor" href="#打包发布" aria-hidden="true">#</a> # 打包发布</h2><ul><li>将我们的 creator 工程发布为 web-mobile</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/1/e/1e90950e08bf635a1bd68f6878b8444e770ee1d5.png" alt="" width="609" height="425" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>进入构建输出目录打包为 <em>web-mobile.zip</em> (名字必须相同)</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/0/9/0906b19b5d57b02766c1b3171332a0357b317a1e.png" alt="" width="690" height="317" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>将压缩包拷贝到插件输出目录中 src 的同级目录 res 中（没有则创建）</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/2/c/2ca3149fb4a6db22cbbc182fc95323272bb6c812.png" alt="" width="690" height="228" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>再把插件输出目录打为压缩包即可发布到商店（注意加密）</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/0/f/0fd97941d20e070c4432db118ff4d4c362ab75b4.png" alt="" width="690" height="345" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',42);function b(_,x){const l=i("ExternalLinkIcon"),c=i("Share");return r(),n("div",null,[f(" more "),u,e("p",null,[e("a",h,[e("a",p,[a("https://store.cocos.com/app/detail/4897"),o(l)])]),s,a(" 我已经给大家设置了节日优惠，需要的可以购买")]),m,o(c,{services:"qq,qrcode",colorful:""})])}const y=d(g,[["render",b],["__file","用 creator 开发插件的感受.html.vue"]]);export{y as default};
