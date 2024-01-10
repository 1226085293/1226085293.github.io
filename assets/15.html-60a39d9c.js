import{_ as l,r as o,o as t,c as r,e as c,a as e,b as i,d as s,f as a}from"./app-4e6f9973.js";const d={},u=e("blockquote",null,[e("p",null,"windows 环境")],-1),m=e("h2",{id:"搭建流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#搭建流程","aria-hidden":"true"},"#"),i(" 搭建流程")],-1),h=e("h3",{id:"_1-下载及安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-下载及安装","aria-hidden":"true"},"#"),i(" 1.下载及安装")],-1),p={href:"https://www.jenkins.io/",target:"_blank",rel:"noopener noreferrer"},v=a('<h3 id="_2-配置-jenkins-权限" tabindex="-1"><a class="header-anchor" href="#_2-配置-jenkins-权限" aria-hidden="true">#</a> 2.配置 jenkins 权限</h3><ol><li>打开服务面板</li></ol><blockquote><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><ol start="2"><li><p>找到 jenkins 服务，双击打开属性面板 -&gt; 此账户（填写账户及密码）<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/2.png" alt="" loading="lazy"></p></li><li><p>关闭电脑防火墙，否则局域网其他电脑访问不了</p></li></ol><h3 id="_3-配置-jenkins-编码" tabindex="-1"><a class="header-anchor" href="#_3-配置-jenkins-编码" aria-hidden="true">#</a> 3.配置 jenkins 编码</h3><blockquote><p>编码不一致会导致打包输出的中文为乱码，默认的编码为 gbk，我们需要改为 utf8</p></blockquote><ol><li><p>打开环境变量配置面板</p></li><li><p>新建系统变量 <strong>JAVA_TOOL_OPTIONS</strong>，值为 <strong>-Dfile.encoding=UTF-8</strong><br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/3.png" alt="" loading="lazy"></p></li><li><p>重启电脑</p></li></ol><h3 id="_4-增加代理节点" tabindex="-1"><a class="header-anchor" href="#_4-增加代理节点" aria-hidden="true">#</a> 4. 增加代理节点</h3><blockquote><p>jenkins 默认使用内置节点，但是会导致打包卡住</p></blockquote><ol><li><p>访问 <code>http://安装电脑IP:8080/manage/computer/new</code></p></li><li><p>输入名称（最好不要有中文，否则执行 bat 命名会失败），选择 Permanent Agent 类型节点<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/7.png" alt="" loading="lazy"></p></li><li><p>配置</p><ul><li><p>远程工作目录：这里我随便选的，因为后续我用的绝对路径，个人猜测是执行命令的相对路径的根路径，然后进入下一步</p></li><li><p>标签：和名称一致</p></li></ul><p>其他的都不管，然后进入下一步</p></li><li><p>在节点列表点击创建的节点<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/8.png" alt="" loading="lazy"></p></li><li><p>复制 <code>Run from agent command line: (Windows) </code> 下的命令然后在 powerShell 执行，如果没有问题你会发现节点已经成功连接上了<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/9.png" alt="" loading="lazy"></p></li></ol><h3 id="_5-配置构建流程" tabindex="-1"><a class="header-anchor" href="#_5-配置构建流程" aria-hidden="true">#</a> 5. 配置构建流程</h3><ol><li><p>打开 jenkins 后台，访问 <code>http://安装电脑IP:8080</code></p></li><li><p>新建 pipeline 构建流程，勾选不允许并发构建选项<br><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/4.png" alt="" loading="lazy"></p></li><li><p>添加拉代码的批处理命令</p></li></ol><blockquote><p>pipeline 脚本内可以使用 <code>bat &quot;命令&quot;</code> 来执行批处理脚本</p></blockquote><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>添加命令行构建</li></ol><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/cocos/cocos-creator/15/6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',16),b={href:"https://docs.cocos.com/creator/manual/zh/editor/publish/publish-in-command-line.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%91%E5%B8%83%E5%8F%82%E8%80%83",target:"_blank",rel:"noopener noreferrer"},g=a('<hr><h2 id="怎么让节点自启动" tabindex="-1"><a class="header-anchor" href="#怎么让节点自启动" aria-hidden="true">#</a> 怎么让节点自启动</h2><p>由于 jenkins 已经注册为了服务，但是节点却需要每次手动执行命令才能启动，那么你可以将命令保存为 bat 脚本，然后将其注册到服务中即可</p><h4 id="个人猜想" tabindex="-1"><a class="header-anchor" href="#个人猜想" aria-hidden="true">#</a> 个人猜想</h4><p>可以在 jenkins 启动时自动执行节点启动命令，不过暂时没找到方法</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',6),f={href:"https://www.lfhacks.com/tech/jenkins-httprequest/",target:"_blank",rel:"noopener noreferrer"},_=a(`<h2 id="示例源码" tabindex="-1"><a class="header-anchor" href="#示例源码" aria-hidden="true">#</a> 示例源码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
    agent {
        label: &#39;节点的标签&#39;
    }
    environment {
        // 项目路径
        ProjectPath = &#39;D:/xxx&#39;
        // 引擎路径
        EnginePath = &#39;D:/CocosEditor/Creator/3.6.3/CocosCreator.exe&#39;
        // 构建配置路径
        BuildConfigPath = &quot;\${ProjectPath}/config/build/release.json&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(z,x){const n=o("ExternalLinkIcon");return t(),r("div",null,[c(" more "),u,m,h,e("p",null,[i("官网："),e("a",p,[i("https://www.jenkins.io/"),s(n)])]),v,e("blockquote",null,[e("p",null,[i("参考："),e("a",b,[i("https://docs.cocos.com/creator/manual/zh/editor/publish/publish-in-command-line.html#命令行发布参考"),s(n)])])]),g,e("p",null,[i("在 pipeline 脚本中使用 http："),e("a",f,[i("https://www.lfhacks.com/tech/jenkins-httprequest/"),s(n)])]),_])}const w=l(d,[["render",k],["__file","15.html.vue"]]);export{w as default};
