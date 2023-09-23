import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as l,e as c,a as e,b as a,d as r,f as o}from"./app-40463a1e.js";const s={},p=o('<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> # 前言</h1><p>现在各种增强现实游戏层出不穷，各种 MR 设备也在持续更新，可以看出将来增强现实领域有很大的发展潜力…</p><h1 id="效果图-半半成品" tabindex="-1"><a class="header-anchor" href="#效果图-半半成品" aria-hidden="true">#</a> # 效果图（半半成品）</h1><p>本来是打算做一个 AR 示例的，不过时间不够了，最近状态也不好，就稍微讲下怎么用 opencv 实现 WebAR 的方向吧</p><figure><img src="https://forum.cocos.org/uploads/default/optimized/3X/d/6/d6f81254ca2a19ccdafffb0472ad66f11addd0c6_2_690x411.png" alt="" width="690" height="411" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="ar-怎么实现的" tabindex="-1"><a class="header-anchor" href="#ar-怎么实现的" aria-hidden="true">#</a> # AR 怎么实现的？</h1><blockquote><p>AR，即为增强现实，既然我们要增强现实，那么就要识别并定位现实中的物体，获得相机的坐标，才能准确的展示虚拟画面<br> 那么，计算机是怎么确定两张图片中对应的关系？其实就是通过特征检测，如果匹配成功，则会返回关键点数据<br> 大家看完可以自行查看代码，这里基本不做代码上的讲解</p></blockquote><h2 id="_1-将输入图片转为灰度图" tabindex="-1"><a class="header-anchor" href="#_1-将输入图片转为灰度图" aria-hidden="true">#</a> 1. 将输入图片转为灰度图</h2><p>为什么要转为灰度图，当然是为了降维，减少计算量</p><h2 id="_2-检查关键点" tabindex="-1"><a class="header-anchor" href="#_2-检查关键点" aria-hidden="true">#</a> 2. 检查关键点</h2><p>特征检测有很多种算法，这里我们使用的是 AKAZE</p><p><img src="https://forum.cocos.org/uploads/default/original/3X/a/d/ad5351e32f4ab4d79fb0a0d98f5ea2b2b4972992.png" alt="" width="621" height="372" loading="lazy"><br> 参考链接</p>',12),u={href:"https://docs.opencv.org/4.6.0/d9/d97/tutorial_table_of_content_features2d.html",target:"_blank",rel:"noopener noreferrer"},f=o('<h2 id="_3-匹配关键点" tabindex="-1"><a class="header-anchor" href="#_3-匹配关键点" aria-hidden="true">#</a> 3. 匹配关键点</h2><p>这里使用的是 knnMatch（暴力匹配）</p><figure><img src="https://forum.cocos.org/uploads/default/original/3X/0/a/0a5c8b63df531510b6923e435e2731d05885e2a7.jpeg" alt="" width="633" height="378" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>现在我们拿到了关键点的数据，该怎么用呢？其实下一步就是通过关键点估计单应性，什么是单应性呢？有什么用？</p></blockquote><h2 id="_4-查找单应性" tabindex="-1"><a class="header-anchor" href="#_4-查找单应性" aria-hidden="true">#</a> 4. 查找单应性</h2><p>在 opencv 中我们是使用 <code>findHomography</code></p><h3 id="单应性变换有什么用" tabindex="-1"><a class="header-anchor" href="#单应性变换有什么用" aria-hidden="true">#</a> # 单应性变换有什么用？</h3><ul><li>估计相机姿势以增强现实</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/d/c/dc28d94e036c9f6072da22196c465c5e3ea54105.jpeg" alt="" width="480" height="386" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>透视去除/校正</li></ul><figure><img src="https://forum.cocos.org/uploads/default/original/3X/6/d/6d116e46b480886a37f923af32eb9ba78983246f.jpeg" alt="" width="662" height="268" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>图片拼接</li></ul><p><img src="https://forum.cocos.org/uploads/default/original/3X/9/b/9b05db06d9395c281809877d52b438956b91f17c.jpeg" alt="" width="344" height="314" loading="lazy"><br> 知道了它有什么用？那么想必会更加更多大家对它的兴趣<br> 简单的说，<em>单应性矩阵是一个 3x3 的矩阵（投影变换），可以从一个平面上的点转换到另一个平面上</em><br><img src="https://forum.cocos.org/uploads/default/original/3X/b/2/b27410e1161f18d04a2fbb6b5b85036f35d076c6.png" alt="" width="616" height="500" loading="lazy"><br><em>如果我们这一步返回的单应性是无效的，那么就说明两张图像没有匹配成功</em><br> 参考链接：</p>',13),g={href:"https://docs.opencv.org/4.x/d9/dab/tutorial_homography.html#pose_ar",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.graphicsmill.com/docs/gm5/Transformations.htm",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"_5-估计相机姿态",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-估计相机姿态","aria-hidden":"true"},"#"),a(" 5. 估计相机姿态")],-1),m=e("p",null,[a("这一步需要提前进行相机校准，什么是相机校准？让我们看看下面的图片"),e("br"),e("img",{src:"https://forum.cocos.org/uploads/default/original/3X/c/b/cb16b1e1a3c1382103fd6cac4b089ea8f73fd1da.jpeg",alt:"",width:"400",height:"300",loading:"lazy"}),e("br"),a(" 相机是存在边缘被拉伸（畸变）的情况的，相机校准就是确定相机畸变系数，以及相机矩阵（包含了像素值，相机焦距），下面是校准后的图像"),e("br"),e("img",{src:"https://forum.cocos.org/uploads/default/original/3X/7/f/7fd5d37bc4a0fe9cfbe78e4a5617763663db0c04.jpeg",alt:"",width:"400",height:"298",loading:"lazy"}),e("br"),a(" 获得了相机矩阵后，我们就可以通过 "),e("code",null,"solvePnP"),e("br"),a(" 参考链接")],-1),w={href:"https://github.com/MasteringOpenCV/code.git",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.info.hiroshima-cu.ac.jp/~miyazaki/knowledge/teche0092.html",target:"_blank",rel:"noopener noreferrer"},k=o('<h1 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> # 扩展</h1><h2 id="_1-计算和匹配关键点是非常昂贵的操作-怎么优化" tabindex="-1"><a class="header-anchor" href="#_1-计算和匹配关键点是非常昂贵的操作-怎么优化" aria-hidden="true">#</a> 1. 计算和匹配关键点是非常昂贵的操作，怎么优化？</h2><p>答案是使用跟踪算法，我们不必每一次需要去检测关键点，这里推荐<em>稀疏光流</em></p><h3 id="_1-1-光流算法是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-光流算法是什么" aria-hidden="true">#</a> 1.1 光流算法是什么？</h3><figure><img src="https://forum.cocos.org/uploads/default/original/3X/c/9/c9ad3fff0765faf173f3a9111818ca3ee3ce9eb3.gif" alt="" width="300" height="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-2-光流有什么好处" tabindex="-1"><a class="header-anchor" href="#_1-2-光流有什么好处" aria-hidden="true">#</a> 1.2 光流有什么好处？</h3><p><em>就算目标移出摄像机外，我们任然可以继续跟踪</em><br> 参考链接</p><ul><li><a href="https://www.cnblogs.com/hyb1/archive/2022/08/08/16562279.html" class="inline-onebox">OpenCV 简单实现 AR 需用到的算法函数介绍 - 重庆 Debug - 博客园</a></li></ul><h2 id="_2-怎么提高精度" tabindex="-1"><a class="header-anchor" href="#_2-怎么提高精度" aria-hidden="true">#</a> 2. 怎么提高精度</h2><p>使用手机的陀螺仪，加速度器来实现<br> 参考链接</p>',10),v={href:"https://www.andreasjakl.com/basics-of-ar-slam-simultaneous-localization-and-mapping/",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"_3-如何在现阶段使用-webar-系统",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-如何在现阶段使用-webar-系统","aria-hidden":"true"},"#"),a(" 3. 如何在现阶段使用 WebAR 系统？")],-1),z=e("br",null,null,-1),j={href:"https://www.easyar.cn/price.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.8thwall.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.blippar.com/",target:"_blank",rel:"noopener noreferrer"},X=o('<h1 id="怎么使用-opencv-开发-web-程序" tabindex="-1"><a class="header-anchor" href="#怎么使用-opencv-开发-web-程序" aria-hidden="true">#</a> # 怎么使用 opencv 开发 Web 程序</h1><ul><li>使用 C++ 在 Visual Studio 上面进行调试，再通过 linux 系统进行发布 wasm 版本</li><li>直接使用 opencv.js 版本<br> 建议各位不要在 opencv.js 身上浪费时间，因为这货 <em>没有文档</em>，<em>接口不完全一致</em>，<em>属性缺失</em></li></ul><h2 id="_1-怎么在-windows-上编译-opencv" tabindex="-1"><a class="header-anchor" href="#_1-怎么在-windows-上编译-opencv" aria-hidden="true">#</a> # 1. 怎么在 windows 上编译 opencv?</h2><h3 id="_1-1-使用-docker-安装-opencv-的镜像-依赖-wsl-功能-win10-及以上" tabindex="-1"><a class="header-anchor" href="#_1-1-使用-docker-安装-opencv-的镜像-依赖-wsl-功能-win10-及以上" aria-hidden="true">#</a> # 1.1 使用 docker 安装 opencv 的镜像（依赖 WSL 功能，win10 及以上）</h3><figure><img src="https://forum.cocos.org/uploads/default/original/3X/8/e/8eb68d0c17579905da69bb7ac371a15ad1d63029.png" alt="" width="690" height="317" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-2-创建一个容器" tabindex="-1"><a class="header-anchor" href="#_1-2-创建一个容器" aria-hidden="true">#</a> # 1.2 创建一个容器</h3><p>docker run --name 容器名 -p 80:80 -t -d 镜像名<br><em>共享文件夹</em></p><ul><li>D:/test：宿主机目录</li><li>/usr/databases：容器机目录</li></ul><h3 id="_1-3-启动容器后参照下面链接尝试编译一个示例项目" tabindex="-1"><a class="header-anchor" href="#_1-3-启动容器后参照下面链接尝试编译一个示例项目" aria-hidden="true">#</a> # 1.3 启动容器后参照下面链接尝试编译一个示例项目</h3>',9),A={href:"https://github.com/EdwardLu2018/wasm-ar",class:"onebox",target:"_blank"},R={href:"https://github.com/EdwardLu2018/wasm-ar",target:"_blank",rel:"noopener noreferrer"},q=e("h1",{id:"代码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码","aria-hidden":"true"},"#"),a(" # 代码")],-1),E={href:"https://github.com/1226085293/mk_ar_demo",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/MasteringOpenCV/code.git",target:"_blank",rel:"noopener noreferrer"},M=e("br",null,null,-1),N=e("hr",null,null,-1),O=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function S(W,B){const t=i("ExternalLinkIcon"),n=i("Share");return d(),l("div",null,[c(" more "),p,e("ul",null,[e("li",null,[a("2d 特征框架："),e("a",u,[a("https://docs.opencv.org/4.6.0/d9/d97/tutorial_table_of_content_features2d.html"),r(t)])])]),f,e("ul",null,[e("li",null,[e("p",null,[a("使用代码解析单应性： "),e("a",g,[a("https://docs.opencv.org/4.x/d9/dab/tutorial_homography.html#pose_ar"),r(t)])])]),e("li",null,[e("p",null,[a("仿射和投影变换："),e("a",b,[a("https://www.graphicsmill.com/docs/gm5/Transformations.htm"),r(t)])])])]),_,m,e("ul",null,[e("li",null,[e("p",null,[a("完整的 C++ 代码示例（Chapter3）："),e("a",w,[a("https://github.com/MasteringOpenCV/code.git"),r(t)])])]),e("li",null,[e("p",null,[a("内参和投影矩阵："),e("a",x,[a("http://www.info.hiroshima-cu.ac.jp/~miyazaki/knowledge/teche0092.html"),r(t)])])])]),k,e("ul",null,[e("li",null,[e("a",v,[a("https://www.andreasjakl.com/basics-of-ar-slam-simultaneous-localization-and-mapping/"),r(t)])])]),y,e("p",null,[a("当前 cocos 的 AR 正在开发中，但是我们还有第三方选择"),z,a(" easyar（国内）："),e("a",j,[a("https://www.easyar.cn/price.html"),r(t)])]),e("p",null,[a("8thwall（国外）："),e("a",C,[a("https://www.8thwall.com/"),r(t)])]),e("p",null,[a("blippar（国外）："),e("a",V,[a("https://www.blippar.com/"),r(t)])]),X,e("p",null,[e("a",A,[e("a",R,[a("https://github.com/EdwardLu2018/wasm-ar"),r(t)])])]),q,e("p",null,[a("文章代码："),e("a",E,[a("https://github.com/1226085293/mk_ar_demo"),r(t)])]),e("p",null,[a("opencv 官方 C++ 示例："),e("a",L,[a("https://github.com/MasteringOpenCV/code.git"),r(t)]),M,a(" 注意，除了只实现简单的功能外，尽量都不要使用 opencv.js，大坑")]),N,O,r(n,{services:"qq,qrcode",colorful:""})])}const I=h(s,[["render",S],["__file","13.html.vue"]]);export{I as default};
