import{_ as e,o as i,c as a,e as l,f as o}from"./app-5c1cae43.js";const t={},r=o('<figure><img src="https://forum.cocos.org/uploads/default/original/3X/4/7/47e127fc79bb1316abd2a2f2b02af2e28b30a433.png" alt="" width="348" height="163" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> # 前言</h1><p>在项目中，有时候为了调试闪退的情况，需要用到原生模拟器，但是 creator 包体内并没有带原生模拟器，而 <em>文档里面简简单单的两句话，执行起来包含了数个报错</em></p><h1 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> # 步骤</h1><p>测试环境：windows11，creator 3.3.2</p><ul><li>安装 CMake 并配置环境变量</li><li>engine-native 目录下 npm i</li><li>确保电脑已经安装了 Visual Studio 20XX</li><li>打开 Visual Studio Installer 程序<br> 点击自己 vs 版本右边的修改按钮 <ul><li>勾选 <em>工作负荷-&gt; Visual Studio 扩展开发</em></li><li>勾选 <em>单个组件-&gt; Windows X SDK（选自己 windwos 系统最新版本）</em></li><li>勾选 <em>单个组件-&gt; 用于 Windows 的 C++ CMake 工具</em></li><li>点击右下角的修改等待安装完成，然后<em>重启电脑</em></li></ul></li><li>打开 CMake (cmake-gui) <ul><li>where is the source code：引擎目录/resources/resources/3d/engine-native/tools/simulator/frameworks/runtime-src</li><li>where to build the binaries：引擎目录/resources/resources/3d/engine-native/simulator</li><li>点击 Add Entry 按钮添加配置 <ul><li>Name: CMAKE_CXX_COMPILER</li><li>Type: STRING</li><li>Value：VS 的安装目录//Community/VC/Tools/MSVC/14.33.31629/bin/Hostx64/x64/cl.exe</li></ul></li></ul></li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/7/0/70e79867a93b69f63e0067867582fe90c7f03f68.png" alt="" width="416" height="239" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>点击左下方的 Configure 按钮，若无意外应该会看见下面的打印，有意外就自己解决了</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/d/f/dfcfaba42a570060cabe74ed81b4a5c1e99bc112.png" alt="" width="690" height="494" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>回到 engine-native 目录下执行 <em>gulp gen-simulator</em></li></ul><hr><h1 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> # 结语</h1><blockquote><p>光是生成这个模拟器就花了两小时，而官方的解释是<br><img src="https://forum.cocos.org/uploads/default/original/3X/e/2/e2b4ea2f7399b9c685b03e627663a0b2bef14e1f.png" alt="" width="690" height="194" loading="lazy"><br> 我想问的是，就不能在顶部菜单里面加个模拟器安装菜单吗？光是下载和配置 VS 这一步就耗费了大量的时间</p></blockquote>',13);function n(s,c){return i(),a("div",null,[l(" more "),r])}const d=e(t,[["render",n],["__file","12.html.vue"]]);export{d as default};