import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c,e as d,a as e,b as i,d as n,f as t}from"./app-cf31bffa.js";const u={},m=e("blockquote",null,[e("p",null,"windows 环境")],-1),h=e("h2",{id:"搭建流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#搭建流程","aria-hidden":"true"},"#"),i(" 搭建流程")],-1),v=e("h3",{id:"_1-下载及安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-下载及安装","aria-hidden":"true"},"#"),i(" 1.下载及安装")],-1),b={href:"https://www.jenkins.io/",target:"_blank",rel:"noopener noreferrer"},p=t('<h3 id="_2-配置-jenkins-权限" tabindex="-1"><a class="header-anchor" href="#_2-配置-jenkins-权限" aria-hidden="true">#</a> 2.配置 jenkins 权限</h3><ol><li>打开服务面板</li></ol><blockquote><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><ol start="2"><li><p>找到 jenkins 服务，双击打开属性面板 -&gt; 此账户（填写账户及密码）<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/2.png" alt="" loading="lazy"></p></li><li><p>关闭电脑防火墙，否则局域网其他电脑访问不了</p></li></ol><h3 id="_3-配置-jenkins-编码" tabindex="-1"><a class="header-anchor" href="#_3-配置-jenkins-编码" aria-hidden="true">#</a> 3.配置 jenkins 编码</h3><blockquote><p>编码不一致会导致打包输出的中文为乱码，默认的编码为 gbk，我们需要改为 utf8</p></blockquote><ol><li><p>打开环境变量配置面板</p></li><li><p>新建系统变量 <strong>JAVA_TOOL_OPTIONS</strong>，值为 <strong>-Dfile.encoding=UTF-8</strong><br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/3.png" alt="" loading="lazy"></p></li><li><p>重启电脑</p></li></ol><h3 id="_4-配置构建流程" tabindex="-1"><a class="header-anchor" href="#_4-配置构建流程" aria-hidden="true">#</a> 4. 配置构建流程</h3><ol><li><p>打开 jenkins 后台，访问 <code>安装电脑IP:8080</code></p></li><li><p>新建 pipeline 构建流程，勾选不允许并发构建选项<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/4.png" alt="" loading="lazy"></p></li><li><p>添加拉代码的批处理命令</p></li></ol><blockquote><p>pipeline 脚本内可以使用 <code>bat &quot;命令&quot;</code> 来执行批处理脚本</p></blockquote><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>添加命令行构建</li></ol><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',13),g={href:"https://docs.cocos.com/creator/manual/zh/editor/publish/publish-in-command-line.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%91%E5%B8%83%E5%8F%82%E8%80%83",target:"_blank",rel:"noopener noreferrer"},_=e("hr",null,null,-1),f=e("h3",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),i(" 参考")],-1),k={href:"https://www.lfhacks.com/tech/jenkins-httprequest/",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="示例源码" tabindex="-1"><a class="header-anchor" href="#示例源码" aria-hidden="true">#</a> 示例源码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
    agent any
    environment {
        // 项目路径
        ProjectPath = &#39;C:/tq/multi_platform-debug&#39;
        // 引擎路径
        EnginePath = &#39;D:/A_DEV_DATA/CocosEditor/Creator/3.6.3/CocosCreator.exe&#39;
        // 构建配置路径
        BuildConfigPath = &quot;\${ProjectPath}/config/build/fuse-release.json&quot;
    }

    stages {
        stage(&#39;更新代码&#39;) {
            steps {
                echo &#39;更新代码 - 开始&#39;
                dir(&quot;\${ProjectPath}&quot;) {
                    bat returnStdout: true, script: &#39;git pull &quot;origin&quot;&#39;
                }
                echo &#39;更新代码 - 结束&#39;
            }
        }
        stage(&#39;构建工程&#39;) {
            steps {
                echo &#39;构建工程 - 开始&#39;
                dir(&quot;\${ProjectPath}&quot;) {
                    script {
                        def code = bat returnStatus: true, script: &quot;\${EnginePath} --project \${ProjectPath} --build \\&quot;configPath=\${BuildConfigPath}\\&quot;&quot;
                        
                        if (code == 36) {
                            echo &#39;构建工程 -构建成功&#39;
                            return
                        }
                        else if (code == 34) {
                            echo &#39;构建工程 -构建失败（构建过程出错失败，详情请参考构建日志）&#39;
                        }
                        else if (code == 32) {
                            echo &#39;构建工程 -构建失败（构建参数不合法）&#39;
                        }
                        else {
                            echo &#39;构建工程 -构建失败&#39;
                        }
                        exit 1
                    }
                }
                echo &#39;构建工程 - 结束&#39;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,4);function x(w,z){const s=l("ExternalLinkIcon"),o=l("Share");return r(),c("div",null,[d(" more "),m,h,v,e("p",null,[i("官网："),e("a",b,[i("https://www.jenkins.io/"),n(s)])]),p,e("blockquote",null,[e("p",null,[i("参考："),e("a",g,[i("https://docs.cocos.com/creator/manual/zh/editor/publish/publish-in-command-line.html#命令行发布参考"),n(s)])])]),_,f,e("p",null,[i("在 pipeline 脚本中使用 http："),e("a",k,[i("https://www.lfhacks.com/tech/jenkins-httprequest/"),n(s)])]),q,n(o,{services:"qq,qrcode",colorful:""})])}const E=a(u,[["render",x],["__file","15.html.vue"]]);export{E as default};
