import{_ as c,r as t,o as n,c as s,e as d,b as a,d as e,a as i,f as o}from"./app-88f3be70.js";const h={},p=o('<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> # 前言</h1><p>此贴作为成都 Star Meetings 活动的扩展贴，方便大家更好的阅读理解</p><h3 id="_1-为什么要开发插件" tabindex="-1"><a class="header-anchor" href="#_1-为什么要开发插件" aria-hidden="true">#</a> 1.为什么要开发插件？</h3><ul><li>任何重复机械式的劳动都是无意义的，一切机械劳动皆可自动化，而插件能帮助我们实现自动化</li></ul><h3 id="_2-插件能给我们带来什么" tabindex="-1"><a class="header-anchor" href="#_2-插件能给我们带来什么" aria-hidden="true">#</a> 2.插件能给我们带来什么？</h3><ul><li>时间，解决了自动化的问题，最大的好处当然是节省了我们额外的手动操作时间，正所谓寸金难买寸光阴，节约时间便是插件最大的价值</li><li>收益，插件在给我们自己带来好处的同时，也可以发布到 cocos 商店，给他人带来便利的过程中，也可以给自己带来额外的收益</li><li>生态，unity 的生态就不用说了吧，各种插件涵盖了方方面面，这都是插件开发者的功劳，我们的每个插件，都可以给 cocos 的生态添砖加瓦</li><li>技术，插件开发包括但不限于 HTML，CSS，NodeJs，Vue，可以帮我们拓展技术范围，增加个人竞争力</li></ul><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> # 目录</h1><ul><li><em>入门</em><ul><li>创建插件</li><li>package.json 简述</li><li>插件多语言</li><li>怎么通过消息启动插件面板</li><li>插件面板的内容编写</li><li>消息系统</li><li>场景脚本</li><li>配置系统</li><li>插件编译</li><li>发布插件</li></ul></li><li><em>进阶</em><ul><li>理解主进程和渲染进程</li><li>使用 element-plus</li><li>html 和 css 调试技巧</li><li>扩展 inspector</li><li>插件公共代码库</li><li>插件编译器</li></ul></li><li><em>深入</em><ul><li>使用 creator 制作插件 UI</li><li>调试主进程代码</li><li>代码加密的方式</li></ul></li></ul><h1 id="入门" tabindex="-1"><a class="header-anchor" href="#入门" aria-hidden="true">#</a> # 入门</h1><h2 id="创建插件" tabindex="-1"><a class="header-anchor" href="#创建插件" aria-hidden="true">#</a> # 创建插件</h2><figure><img src="https://forum.cocos.org/uploads/default/optimized/3X/c/9/c98540e3c992b0bacc00109032881bd778a053aa_2_524x500.png" alt="" width="524" height="500" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们可以从顶部菜单栏中打开 <em>扩展/创建扩展</em></p><h3 id="创建插件-插件放在哪儿" tabindex="-1"><a class="header-anchor" href="#创建插件-插件放在哪儿" aria-hidden="true">#</a> # 创建插件 - 插件放在哪儿？</h3><figure><img src="https://forum.cocos.org/uploads/default/original/3X/f/9/f913fcb9030afb8350599b0fcda2713bb24a75d8.png" alt="" width="690" height="331" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们可以从顶部菜单栏中打开 <em>扩展/扩展管理器</em> 从找到我们的插件，点击 <em>Open Folder</em></p><h3 id="创建插件-插件初始化" tabindex="-1"><a class="header-anchor" href="#创建插件-插件初始化" aria-hidden="true">#</a> # 创建插件 - 插件初始化</h3><p>由于我们的插件可能一开始会依赖部分 npm 模块，所以需要初始化</p><ul><li><em>cd 插件根目录</em></li><li><em>npm i</em><br><img src="https://forum.cocos.org/uploads/default/optimized/3X/9/3/93fcd66615de78c4d5a07cb5489777e552ba9df1_2_677x442.png" alt="" width="677" height="442" loading="lazy"></li></ul><h2 id="package-json-简述" tabindex="-1"><a class="header-anchor" href="#package-json-简述" aria-hidden="true">#</a> # package.json 简述</h2><p>package.json 是一个在插件根目录内的文件，里面包含了很多信息，相当于插件的身份证，这里我们只说了最重要的三个配置</p><ul><li>main 关系到插件能否正常启动</li><li>panels 关系到面板能否正常展示</li><li>contributions 插件大部分的配置都在这里面<br><img src="https://forum.cocos.org/uploads/default/original/3X/7/c/7ca7a7b1a54451e15290350734c6615e1a941e69.png" alt="" width="522" height="415" loading="lazy"><br> 参考链接</li><li><a href="https://docs.cocos.com/creator/manual/zh/editor/extension/first.html#%E6%89%A9%E5%B1%95%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6-packagejson" class="inline-onebox">入门示例-菜单 · Cocos Creator</a></li></ul><h2 id="插件多语言" tabindex="-1"><a class="header-anchor" href="#插件多语言" aria-hidden="true">#</a> # 插件多语言</h2><p>在开发中我们经常使用多语言，插件多语言怎么使用的呢？其实是<em>靠一个放在插件根目录的 i18n 文件夹来实现</em>，文件里面存放的文件名是语言代号，内容则是一个导出的对象</p><p><img src="https://forum.cocos.org/uploads/default/original/3X/6/4/64d1fe692ad441e11a62138b57a14e2508a73234.png" alt="" width="400" height="151" loading="lazy">&gt;</p><p><img src="https://forum.cocos.org/uploads/default/original/3X/0/7/07669e4be6718b8afcc855b261f5c7a99013bdae.png" alt="" width="400" height="151" loading="lazy"><br> 参考链接</p><ul><li><a href="https://docs.cocos.com/creator/manual/zh/editor/extension/i18n.html#%E4%BB%80%E4%B9%88%E6%98%AF-i18n" class="inline-onebox">多语言系统（i18n） · Cocos Creator</a></li></ul><h3 id="插件多语言-使用方式" tabindex="-1"><a class="header-anchor" href="#插件多语言-使用方式" aria-hidden="true">#</a> # 插件多语言 - 使用方式</h3><ul><li><em>脚本中使用</em></li><li><em>HTML 中使用</em></li><li><em>JSON 中使用中使用</em><br><img src="https://forum.cocos.org/uploads/default/original/3X/0/1/015dc0a2865fdf331792aea493c4abf4db734516.png" alt="" width="396" height="207" loading="lazy"><br> 参考链接</li><li><a href="https://docs.cocos.com/creator/manual/zh/editor/extension/i18n.html#%E5%9C%A8%E8%84%9A%E6%9C%AC%E4%B8%AD%E4%BD%BF%E7%94%A8" class="inline-onebox">多语言系统（i18n） · Cocos Creator</a></li><li><a href="https://docs.cocos.com/creator/manual/zh/editor/extension/contributions-menu.html#path" class="inline-onebox">自定义主菜单 · Cocos Creator</a></li></ul><h2 id="怎么通过消息启动插件面板" tabindex="-1"><a class="header-anchor" href="#怎么通过消息启动插件面板" aria-hidden="true">#</a> # 怎么通过消息启动插件面板</h2><p>首先我们要启动插件面板需要先注册一个菜单项，在 package.json 的 contributions.menu 里面，写入一个含有 path、label、message 属性的数据<br><img src="https://forum.cocos.org/uploads/default/original/3X/6/8/681ba354d839e6c5032337253d79fd5f1600d443.png" alt="" width="559" height="339" loading="lazy"><br><em>这些内容代表了什么？</em></p><ul><li><em>菜单路径</em></li><li><em>菜单点击触发的消息</em></li></ul><h3 id="怎么通过消息启动插件面板-怎么监听消息" tabindex="-1"><a class="header-anchor" href="#怎么通过消息启动插件面板-怎么监听消息" aria-hidden="true">#</a> # 怎么通过消息启动插件面板 - 怎么监听消息</h3><p><img src="https://forum.cocos.org/uploads/default/original/3X/f/f/ff229b5db5a6a94933923301dc05835b884c2797.png" alt="" width="467" height="238" loading="lazy"><br> 我们可以在 package.json 文件中的 contributions.messages 中写入我们监听的消息名以及触发的方法数组</p><p>我们所有的事件都是在 messages 里面注册，<em>这里的 open-panel 就是我们注册的事件</em><br> 参考链接</p><ul><li><a href="https://docs.cocos.com/creator/manual/zh/editor/extension/contributions-messages.html" class="inline-onebox">自定义消息 · Cocos Creator</a></li></ul><h3 id="怎么通过消息启动插件面板-看看回调做了什么" tabindex="-1"><a class="header-anchor" href="#怎么通过消息启动插件面板-看看回调做了什么" aria-hidden="true">#</a> # 怎么通过消息启动插件面板 - 看看回调做了什么</h3><p><img src="https://forum.cocos.org/uploads/default/original/3X/6/9/699c9a29a2a468355ac3b9d5b94c5666f7424295.png" alt="" width="583" height="217" loading="lazy"><br> 在 open_panel 内我们调用了 Editor.Panel.open，这就是打开面板的方法</p><ul><li>Editor.Panel.open：打开面板，参数为扩展名 | 扩展名.面板名<br><img src="https://forum.cocos.org/uploads/default/original/3X/5/f/5f7ea39f1240bd227f91537c0f10862eb321395c.png" alt="" width="681" height="469" loading="lazy"><br> 到这里点击菜单后我们的插件面板就打开了</li></ul><h2 id="插件面板的内容编写" tabindex="-1"><a class="header-anchor" href="#插件面板的内容编写" aria-hidden="true">#</a> # 插件面板的内容编写</h2><p>首先是面板的一些基础属性，我们在 package.json 内的 contributions.panels 中定义<br><img src="https://forum.cocos.org/uploads/default/original/3X/4/5/450896cc5532ac5c23a66a2b0b5f0cbab5b40957.png" alt="" width="431" height="311" loading="lazy"></p><ul><li>title：面板标题</li><li>type：dockable(可停靠) | simple(不可停靠)</li><li>main：面板入口脚本文件夹，文件名默认为 index.js</li><li>size：面板大小信息</li></ul><h3 id="插件面板的内容编写-面板展示内容控制" tabindex="-1"><a class="header-anchor" href="#插件面板的内容编写-面板展示内容控制" aria-hidden="true">#</a> # 插件面板的内容编写 - 面板展示内容控制</h3><p>也就是在 index.js 文件中我们导出的对象，template 则为 html 内容，style 则为 css 内容<br><img src="https://forum.cocos.org/uploads/default/original/3X/d/4/d44712…ttps://forum.cocos.org/uploads/default/original/3X/6/8/682db28b0ed0ef717a8b7fa120d614812d102a03.png" alt="" width="507" height="203" loading="lazy"><br> 参考链接</p><ul><li><a href="https://docs.cocos.com/creator/manual/zh/editor/extension/profile.html" class="inline-onebox">配置系统 · Cocos Creator</a></li></ul><h2 id="插件编译" tabindex="-1"><a class="header-anchor" href="#插件编译" aria-hidden="true">#</a> # 插件编译</h2><p><em>使用 ts 写插件自然需要将其编译为 js 才能使用</em><br> 我们可以在命令行输入以下命令进行脚本编译</p><ul><li>tsc -b [tsconfig 所在目录]：单次编译</li><li>tsc -w [tsconfig 所在目录]：监听编译（在 ts 文件保存后且有改动就会自动编译）<br> 我们也可以配置脚本命令，在 vscode 内可以通过 ctrl + shift + p 来搜索并执行<br><img src="https://forum.cocos.org/uploads/default/original/3X/8/5/852ac69b6563796438cec63887d747c04a0a1c44.png" alt="" width="436" height="418" loading="lazy"></li></ul><h2 id="发布插件" tabindex="-1"><a class="header-anchor" href="#发布插件" aria-hidden="true">#</a> # 发布插件</h2>',48),u={href:"https://store.cocos.com/document/zh/cocos-store-template-extension.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://auth.cocos.com/#/",target:"_blank",rel:"noopener noreferrer"},f=a("li",null,[a("p",null,"点击商店 -> 卖家中心 -> 发布新资源")],-1),m=a("li",null,[a("p",null,[e("填写好后静待两三天审核时间，如有问题官方人员会联系你"),a("br"),e(" 参考链接")])],-1),b=a("li",null,[a("p",null,[a("a",{href:"https://docs.cocos.com/creator/manual/zh/editor/extension/store/upload-store.html",class:"inline-onebox"},"上架扩展到资源商店 · Cocos Creator")])],-1),x=o('<h1 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> # 进阶</h1><h2 id="理解主进程和渲染进程" tabindex="-1"><a class="header-anchor" href="#理解主进程和渲染进程" aria-hidden="true">#</a> # 理解主进程和渲染进程</h2><p>有可能大家接触插件开发的时候听说过主进程和渲染进程，但是并不了解，那么它们是什么呢？</p><ul><li>主进程：package.json 中 main 属性的脚本运行进程（<em>插件入口脚本</em></li><li>渲染进程：package.json 中 contributions.panels 中 main 属性的脚本运行进程（<em>插件面板入口脚本</em></li></ul><h3 id="理解主进程和渲染进程-不同进程如何交互" tabindex="-1"><a class="header-anchor" href="#理解主进程和渲染进程-不同进程如何交互" aria-hidden="true">#</a> # 理解主进程和渲染进程 - 不同进程如何交互</h3><ul><li>通过消息系统：最简单的方式</li><li>通过 websocket：一般没人这样做</li></ul><h3 id="理解主进程和渲染进程-进程间使用误区" tabindex="-1"><a class="header-anchor" href="#理解主进程和渲染进程-进程间使用误区" aria-hidden="true">#</a> # 理解主进程和渲染进程 - 进程间使用误区</h3><ul><li>进程间数据不是共享的，而是单独的</li></ul><p>注：这里经常犯的错就是认为自己使用的是同一份数据，其实是两份单独的数据，不同进程间的数据互不干扰</p><ul><li>不要把昂贵的计算逻辑放在主进程</li></ul><p>注：放在主进程会造成 creator 编辑器界面卡顿，最好放在插件渲染进程或者单独开个子进程</p><h2 id="使用-element-plus" tabindex="-1"><a class="header-anchor" href="#使用-element-plus" aria-hidden="true">#</a> # 使用 element-plus</h2><p>什么是 element-plus？element-plus 是一个 web 前端常用的 ui 组件库，creator 编辑器虽然也提供了一些插件 ui 组件，但是可能并不满足我们的需求，这时候就可以用 element-plus<br><img src="https://forum.cocos.org/uploads/default/optimized/3X/0/0/00d5bb27a35441c3b90d2ef0ee8226729d7dd2dc_2_690x455.png" alt="" width="690" height="455" loading="lazy"><br> 参考链接</p><ul><li><a href="https://forum.cocos.org/t/topic/135647/11" class="inline-onebox">[提问]：3.x 插件怎么引用 element-ui 组件？</a></li><li><a href="https://element-plus.gitee.io/zh-CN/component/button.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" class="inline-onebox">Button 按钮 | Element Plus</a></li></ul><h2 id="html-和-css-调试技巧" tabindex="-1"><a class="header-anchor" href="#html-和-css-调试技巧" aria-hidden="true">#</a> # html 和 css 调试技巧</h2><p>插件开发时需要经常修改 html 与 css，又不想每次都要重新加载插件怎么办？<br> 我们可以打开插件面板后点击插件面板，再按下 <em>ctrl + shift + i</em><br><img src="https://forum.cocos.org/uploads/default/original/3X/d/6/d668b4b416ec2d86f0184ddcac9ac402046aca25.png" alt="" width="575" height="325" loading="lazy"></p><h2 id="扩展-inspector" tabindex="-1"><a class="header-anchor" href="#扩展-inspector" aria-hidden="true">#</a> # 扩展 inspector</h2><p>inspector 是什么？简答的说就是<em>属性检查器面板内组件展示的内容</em><br> 怎么定义 inspector? 只需要在 package.json 中的 contributions 中声明即可<br><img src="https://forum.cocos.org/uploads/default/original/3X/f/c/fc9a49c82627f23f593bd7bf8bad5fc702119bfe.png" alt="" width="545" height="169" loading="lazy"><br> 参考链接</p><ul><li><a href="https://docs.cocos.com/creator/manual/zh/editor/extension/inspector.html#%E8%87%AA%E5%AE%9A%E4%B9%89-component-%E6%B8%B2%E6%9F%93" class="inline-onebox">自定义属性检查器面板 · Cocos Creator</a></li></ul><h3 id="扩展-inspector-与组件数据的交互方式" tabindex="-1"><a class="header-anchor" href="#扩展-inspector-与组件数据的交互方式" aria-hidden="true">#</a> # 扩展 inspector - 与组件数据的交互方式</h3><p>inspector 自定义了我们的组件属性面板展示，那么怎么与组件数据交互呢？有两种方式</p><ul><li>场景脚本</li></ul><p>注：场景脚本可以通过 getScene 拿到场景根节点并以此找到我们的组件进行数据访问修改</p><ul><li>消息系统</li></ul><p>注：编辑器使用的方式，<em>推荐使用此种方式</em><br><img src="https://forum.cocos.org/uploads/default/original/3X/4/f/4fda22cb16ecf3a8fb0afd9b8e8f4d5e786ca1ac.png" alt="" width="636" height="428" loading="lazy"><br> 为什么推荐使用消息来修改组件数据呢？因为<em>编辑器会依赖这些消息</em></p><h2 id="插件公共代码库" tabindex="-1"><a class="header-anchor" href="#插件公共代码库" aria-hidden="true">#</a> # 插件公共代码库</h2><p>在插件开发过程中，我们可能会遇到几份插件都使用同一份代码的情况，这时候我们想要只保留一份公共代码，该怎么操作呢？<br> 答案是 在插件根目录 tsconfig.include 中添加我们的公共代码库路径<br><img src="https://forum.cocos.org/uploads/default/original/3X/1/1/11e16b2567491c092271779d0f48546d63a948e4.png" alt="" width="690" height="189" loading="lazy"><br> 但是这样会使用有个问题，插件编译后路径结构与之前不一致了<br> 前：</p><ul><li><p><span class="mention">@libs</span> 目录</p></li><li><p>插件目录</p></li><li><p>dist 目录</p><ul><li>src 目录</li><li>src 目录<br> 后：</li><li><span class="mention">@libs</span> 目录</li></ul></li><li><p>插件目录</p></li><li><p>dist 目录</p><ul><li><span class="mention">@libs</span> 目录</li></ul></li><li><p>插件目录</p><ul><li>src</li><li>src 目录<br> 怎么解决呢？这里我写了小工具，插件编译器</li></ul></li></ul><h2 id="插件编译器" tabindex="-1"><a class="header-anchor" href="#插件编译器" aria-hidden="true">#</a> # 插件编译器</h2>',29),_={href:"https://www.npmjs.com/package/@muzzik/cc-plugin-cli",target:"_blank",rel:"noopener noreferrer"},z=a("br",null,null,-1),w=o('<ul><li>自动修改 package,json 中因为引用公共代码库导致的路径不一致问题</li><li>自动拷贝依赖的 npm 包到输出目录</li><li>输出 zip<br> 注意不要把输出目录设置为开发目录，否则会删除你的开发代码，代码开源，欢迎贡献代码</li></ul><h1 id="深入" tabindex="-1"><a class="header-anchor" href="#深入" aria-hidden="true">#</a> # 深入</h1><h2 id="使用-creator-制作插件-ui" tabindex="-1"><a class="header-anchor" href="#使用-creator-制作插件-ui" aria-hidden="true">#</a> # 使用 creator 制作插件 UI</h2><p><img src="https://forum.cocos.org/uploads/default/optimized/3X/4/b/4ba5e1826cbeefef2538989e20595c4f521e7cde_2_685x500.png" alt="" width="685" height="500" loading="lazy"><br> 看起来很复杂，实现起来很简单，大家别忘了，插件面板也是一个 web 界面，而 web 界面是可以嵌入的，而 creator 也可以输出 web 包，那么事情就很简单了<br><img src="https://forum.cocos.org/uploads/default/original/3X/f/b/fb513b92d54ba942826f85eb17f2379583ebc658.png" alt="" width="690" height="55" loading="lazy"><br> 我们可以通过 iframe 标签嵌入指定网址链接，就可以实现插件面板展示 creator 界面</p><ul><li>调试时：嵌入预览网址</li><li>发布时：本地开个 http-server，指向编译后的 web 包路径即可<br><img src="https://forum.cocos.org/uploads/default/original/3X/d/d/dd02e5bc99044e9a8fea4606336456b5cf0b8c90.png" alt="" width="690" height="107" loading="lazy"></li></ul><h2 id="调试主进程代码" tabindex="-1"><a class="header-anchor" href="#调试主进程代码" aria-hidden="true">#</a> # 调试主进程代码</h2><p>开发中有可能遇到主进程报错，但是却无法调试的情况，那么我们怎么调试主进程呢？</p><ul><li>设置 cocos dashboard 启动选项，path 后为项目根目录</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/f/1/f1a130147c9e273ad1c009b1faaaf443a49d7902.png" alt="" width="444" height="99" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>打开 chrome://inspect/<span class="hashtag">#devices</span> 配置</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/d/3/d3b1c29836534c247a79c719c179b79c57367f31.png" alt="" width="653" height="353" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>点击 Discover network targets 右侧的 configure 添加 localhost:5858</li><li>打开对应的项目，target 下会出现一个新的项，点击蓝色的 inspect，这时候我们就进入了主进程开发者工具，可以使用 ctrl + p 搜索自己插件的 main.js 进行调试</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/b/4/b4d76ed5ca34210eec2cb523a3eaf08da107a0a8.png" alt="" width="690" height="353" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="代码加密的方式" tabindex="-1"><a class="header-anchor" href="#代码加密的方式" aria-hidden="true">#</a> # 代码加密的方式</h2><ul><li>逻辑放在服务器</li></ul><p>注：主要代码放在服务器，插件面板只负责展示，就算代码被偷也无所谓</p><ul><li>使用其他语言</li></ul><p>注：使用 C、C++编译为 wasm，基本杜绝破解核心代码</p><ul><li>混淆</li></ul><p>注：只防君子不防小人…</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',22);function E(y,k){const l=t("ExternalLinkIcon"),r=t("Share");return n(),s("div",null,[d(" more "),p,a("ul",null,[a("li",null,[a("p",null,[e("请仔细阅读发布 "),a("a",u,[e("插件规范"),i(l)])])]),a("li",null,[a("p",null,[e("确认无误后登陆 "),a("a",g,[e("cocos 开发者中心"),i(l)])])]),f,m,b]),x,a("p",null,[e("npm 主页："),a("a",_,[e("https://www.npmjs.com/package/@muzzik/cc-plugin-cli"),i(l)]),z,e(" 功能简介：")]),w,i(r,{services:"qq,qrcode",colorful:""})])}const C=c(h,[["render",E],["__file","3.x 插件开发指南.html.vue"]]);export{C as default};
