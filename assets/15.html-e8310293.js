import{_ as r,r as n,o as s,c,e as l,a as e,b as o,d as t,f as h}from"./app-06b3287f.js";const d={},p=e("blockquote",null,[e("p",null,"windows 环境")],-1),g=e("h2",{id:"搭建流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#搭建流程","aria-hidden":"true"},"#"),o(" 搭建流程")],-1),m=e("h3",{id:"_1-下载及安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-下载及安装","aria-hidden":"true"},"#"),o(" 1.下载及安装")],-1),u={href:"https://www.jenkins.io/",target:"_blank",rel:"noopener noreferrer"},_=h('<h3 id="_2-配置-jenkins-权限" tabindex="-1"><a class="header-anchor" href="#_2-配置-jenkins-权限" aria-hidden="true">#</a> 2.配置 jenkins 权限</h3><ol><li>打开服务面板</li></ol><blockquote><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><ol start="2"><li><p>找到 jenkins 服务，双击打开属性面板 -&gt; 此账户（填写账户及密码）<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/2.png" alt="" loading="lazy"></p></li><li><p>关闭电脑防火墙，否则局域网其他电脑访问不了</p></li></ol><h3 id="_3-配置-jenkins-编码" tabindex="-1"><a class="header-anchor" href="#_3-配置-jenkins-编码" aria-hidden="true">#</a> 3.配置 jenkins 编码</h3><blockquote><p>编码不一致会导致打包输出的中文为乱码，默认的编码为 gbk，我们需要改为 utf8</p></blockquote><ol><li><p>打开环境变量配置面板</p></li><li><p>新建系统变量 <strong>JAVA_TOOL_OPTIONS</strong>，值为 <strong>-Dfile.encoding=UTF-8</strong><br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/3.png" alt="" loading="lazy"></p></li><li><p>重启电脑</p></li></ol><h3 id="_4-配置构建流程" tabindex="-1"><a class="header-anchor" href="#_4-配置构建流程" aria-hidden="true">#</a> 4. 配置构建流程</h3><ol><li><p>打开 jenkins 后台，访问 <code>安装电脑IP:8080</code></p></li><li><p>新建 pipeline 构建流程，勾选不允许并发构建选项<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/4.png" alt="" loading="lazy"></p></li><li><p>添加拉代码的批处理命令</p></li></ol><blockquote><p>pipeline 脚本内可以使用 <code>bat &quot;命令&quot;</code> 来执行批处理脚本</p></blockquote><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>添加命令行构建</li></ol><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',13),f={href:"https://docs.cocos.com/creator/manual/zh/editor/publish/publish-in-command-line.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%91%E5%B8%83%E5%8F%82%E8%80%83",target:"_blank",rel:"noopener noreferrer"},b=e("hr",null,null,-1),k=e("h3",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),o(" 参考")],-1),w={href:"https://www.lfhacks.com/tech/jenkins-httprequest/",target:"_blank",rel:"noopener noreferrer"},z=e("hr",null,null,-1),q=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function x(j,E){const i=n("ExternalLinkIcon"),a=n("Share");return s(),c("div",null,[l(" more "),p,g,m,e("p",null,[o("官网："),e("a",u,[o("https://www.jenkins.io/"),t(i)])]),_,e("blockquote",null,[e("p",null,[o("参考："),e("a",f,[o("https://docs.cocos.com/creator/manual/zh/editor/publish/publish-in-command-line.html#命令行发布参考"),t(i)])])]),b,k,e("p",null,[o("在 pipeline 脚本中使用 http："),e("a",w,[o("https://www.lfhacks.com/tech/jenkins-httprequest/"),t(i)])]),z,q,t(a,{services:"qq,qrcode",colorful:""})])}const y=r(d,[["render",x],["__file","15.html.vue"]]);export{y as default};
