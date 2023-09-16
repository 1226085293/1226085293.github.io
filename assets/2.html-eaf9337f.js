import{_ as s,r,o as a,c as f,e as c,a as o,b as t,d as e,f as i}from"./app-2db027c8.js";const g={},h=o("strong",null,"环境配置：",-1),p=o("br",null,null,-1),m=o("br",null,null,-1),d={href:"https://jingyan.baidu.com/article/a65957f4e91ccf24e77f9b11.html",target:"_blank",rel:"noopener noreferrer"},u=o("br",null,null,-1),b={href:"https://www.cnblogs.com/jinzhaozhao/p/10012504.html",target:"_blank",rel:"noopener noreferrer"},_=i("<li><p><strong>常用命令：</strong><br> git init 新建一个空的仓库<br> git status 查看状态<br> git add . 添加所有文件<br> git commit -m &#39;注释&#39; 提交添加的文件并备注说明<br> git remote add origin ‘仓库 ssh 地址’ 连接远程仓库<br> git push -u origin master 将本地仓库文件推送到远程仓库<br> git log 查看变更日志<br> git reset --hard 版本号前六位 回归到指定版本<br> git branch 查看分支<br> git branch newname 创建一个叫 newname 的分支<br> git checkout newname 切换到叫 newname 的分支上<br> git merge newname 把 newname 分支合并到当前分支上<br> git pull origin master 将 master 分支上的内容拉到本地上</p></li><li><p><strong>help 说明</strong><br> 用法: git [--version] [--help] [-C &lt;路径&gt;] [-c &lt;名称&gt;=&lt;值&gt;]<br> [--exec-path[=&lt;path&gt;]] [--html-path] [--man-path] [--info-path]<br> [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]<br> [--git-dir=&lt;路径&gt;] [--work-tree=&lt;path&gt;] [--namespace=&lt;名称&gt;]<br> &lt;命令&gt; [&lt;参数&gt;]</p></li>",2),k=i('<p><strong>这些是在各种情况下使用的常见 Git 命令：</strong></p><ol><li><p>启动工作区（另请参阅：git help tutorial）<br> clone----------------------将存储库克隆到新目录<br> init-------------------------创建一个空的 Git 存储库或重新初始化一个现有的存储库</p></li><li><p>处理当前更改（另请参见：git help everyday）<br> add------------------------添加将文件内容添加到索引<br> mv-------------------------移动或重命名文件，目录或符号链接<br> restore--------------------恢复工作树文件<br> rm--------------------------从工作树和索引中删除文件<br> sparse-checkout----------签出初始化和修改稀疏签出</p></li><li><p>检查历史记录和状态（另请参见：git help revisions）<br> bisect---------------------使用二进制搜索来查找引入了错误的提交<br> diff-------------------------显示提交，提交和工作树等之间的更改<br> grep-----------------------打印与模式匹配的行<br> log-------------------------显示提交日志<br> show----------------------显示各种类型的对象<br> status---------------------显示工作树状态</p></li><li><p>成长，标记和调整您的共同历史<br> branch--------------------列出，创建或删除分支<br> commit--------------------更改记录到存储库<br> merge---------------------将两个或多个开发历史合并在一起<br> rebase--------------------重新应用在另一个基本提示之上的提交<br> reset-----------------------将当前 HEAD 重置为指定状态<br> switch---------------------开关分支<br> tag-------------------------创建，列出，删除或验证使用 GPG 签名的标签对象</p></li><li><p>协作（另请参阅：git help workflows）<br> fetch-----------------------从另一个存储库下载对象和引用<br> pull-------------------------从另一个存储库或本地分支获取并与之集成<br> push-----------------------更新远程引用以及关联的对象</p></li></ol><h3 id="个人使用记录" tabindex="-1"><a class="header-anchor" href="#个人使用记录" aria-hidden="true">#</a> 个人使用记录：</h3><p>x.x 为代表操作，请带入思考（例：1.3，切换仓库操作）</p><ul><li><ol><li>仓库 <ol><li><strong>初始化当前地址为新的仓库目录</strong>：git init <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></li><li><strong>添加仓库地址</strong>：git remote add origin &quot;地址&quot; <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></li><li><strong>切换仓库地址</strong>：git remote set-url origin &quot;地址&quot; <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></li><li><strong>查看当前仓库地址</strong>：git remote show origin</li><li><strong>克隆仓库到本地</strong>：git clone 存储库地址</li></ol></li></ol></li><li><ol start="2"><li>文件 <ol><li><strong>新建本地文件</strong>：echo &quot;内容&quot; &gt; 文件名</li><li><strong>删除本地文件（推荐）</strong>：rm 命令 文件夹 <sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></li><li><strong>删除本地文件带 git 操作记录</strong>：git rm 命令 文件夹 <sup class="footnote-ref"><a href="#footnote4">[4:1]</a><a class="footnote-anchor" id="footnote-ref4:1"></a></sup></li><li><strong>创建文件夹</strong>：mkdir 目录名</li><li><strong>清空工作区和暂存区</strong>： <ol><li>还没有进行 add . 和 commit 操作：git checkout .</li><li>只能清空全部已修改的问题件, 但是对于新建的文件和文件夹无法清空：git clean -d</li><li>清空所有新建的文件和文件夹：git reset .</li></ol></li></ol></li></ol></li><li><ol start="3"><li>代码 <ol><li><strong>添加新的改动</strong>：git add 命令 <sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></li><li><strong>提交操作记录</strong>：git commit 命令 &quot;提交说明&quot; <sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup></li><li><strong>拉取分支到本地</strong>：git pull origin 分支名</li><li><strong>上传代码到分支</strong>：git push origin 分支名</li><li><strong>本地强制覆盖到分支（慎用）</strong> ：git push -f origin 分支名</li><li><strong>添加指定的文件或目录</strong>：git add 命令 <sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup></li></ol></li></ol></li><li><ol start="4"><li>分支 <ol><li><strong>创建新分支</strong>：git branch 分支名 <sup class="footnote-ref"><a href="#footnote8">[8]</a><a class="footnote-anchor" id="footnote-ref8"></a></sup></li><li><strong>切换到分支</strong>：git checkout 分支名</li><li><strong>列出本地分支和远程分支</strong>：git branch -a</li><li><strong>删除分支</strong>：git branch 命令 分支名 <sup class="footnote-ref"><a href="#footnote9">[9]</a><a class="footnote-anchor" id="footnote-ref9"></a></sup></li><li><strong>重命名分支</strong>：git branch 命令 分支名 <sup class="footnote-ref"><a href="#footnote10">[10]</a><a class="footnote-anchor" id="footnote-ref10"></a></sup></li><li><strong>基于当前分支新建一条没有 commit 记录但包含文件的分支</strong>：git checkout --orphan 新分支名</li></ol></li></ol></li></ul><hr><h4 id="小技巧-请注意查看注释" tabindex="-1"><a class="header-anchor" href="#小技巧-请注意查看注释" aria-hidden="true">#</a> 小技巧（请注意查看注释！！）</h4>',7),x=i("<li>正常上传代码，步骤： <ol><li>切换仓库地址到要上传的仓库，1.3</li><li>添加新的改动，3.1</li><li>提交操作记录，3.2</li><li>拉取分支到本地，3.3</li><li>上传代码到分支，3.4</li><li>操作结束。 <ol><li>清除当前分支所有的 commit 记录并保留当前所有文件，步骤：</li></ol></li><li>切换到我们要操作的分支（如果是小白默认为 master），4.2</li><li>基于当前分支新建一条没有 commit 记录但包含文件的分支（以下简称新分支），4.6</li><li>添加全部操作记录，3.1</li><li>提交包括 rm 操作的操作记录，3.2</li><li>强制删除操作分支，4.4</li><li>重命名新分支为操作分支名，4.5</li><li>本地强制覆盖到操作分支，3.5</li><li>操作结束，去看看网页端还有没有 commit 记录吧。<br><br></li></ol></li>",1),w={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},E=o("li",null,"git init",-1),q={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},v=o("li",null,'git commit -m "first commit"',-1),A=o("li",null,"git branch -M master",-1),D={href:"https://github.com/xxxx.git",target:"_blank",rel:"noopener noreferrer"},M=o("li",null,"git push -u origin master",-1),j=i('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>只表示可以做为仓库的存放目录 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>为 1.1 后的仓库目录添加地址 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p>必须先操作 1.2 <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li><li id="footnote4" class="footnote-item"><p>-r：删除指定位置文件 <a href="#footnote-ref4" class="footnote-backref">↩︎</a> <a href="#footnote-ref4:1" class="footnote-backref">↩︎</a></p></li><li id="footnote5" class="footnote-item"><p>这是个点--&gt;.：只添加新增和修改的记录、-u：只添加修改和删除的记录、 -A：全部操作记录 <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p></li><li id="footnote6" class="footnote-item"><p>-m：用于提交操作记录（不包括 rm 操作）、-am：用于提交操作记录（包括 rm 操作） <a href="#footnote-ref6" class="footnote-backref">↩︎</a></p></li><li id="footnote7" class="footnote-item"><p>文件夹/：添加指定文件夹及其子文件、文件名：添加指定文件 <a href="#footnote-ref7" class="footnote-backref">↩︎</a></p></li><li id="footnote8" class="footnote-item"><p>不进行分支切换 <a href="#footnote-ref8" class="footnote-backref">↩︎</a></p></li><li id="footnote9" class="footnote-item"><p>-d：删除、-D 强制删除 <a href="#footnote-ref9" class="footnote-backref">↩︎</a></p></li><li id="footnote10" class="footnote-item"><p>-m：重命名、-M 强制重命名 <a href="#footnote-ref10" class="footnote-backref">↩︎</a></p></li></ol></section><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',4);function N(V,y){const l=r("ExternalLinkIcon"),n=r("Share");return a(),f("div",null,[c(" more "),o("ul",null,[o("li",null,[o("p",null,[h,p,t(" ssh 配置(推荐)："),m,o("a",d,[t("https://jingyan.baidu.com/article/a65957f4e91ccf24e77f9b11.html"),e(l)])]),o("p",null,[t("ssh 配置(配图多)："),u,o("a",b,[t("https://www.cnblogs.com/jinzhaozhao/p/10012504.html"),e(l)])])]),_]),k,o("ul",null,[x,o("li",null,[t("初始化为新的库 "),o("ol",null,[o("li",null,[t('echo "# xxx" >> '),o("a",w,[t("README.md"),e(l)])]),E,o("li",null,[t("git add "),o("a",q,[t("README.md"),e(l)])]),v,A,o("li",null,[t("git remote add origin "),o("a",D,[t("https://github.com/xxxx.git"),e(l)])]),M])])]),j,e(n,{services:"qq,qrcode",colorful:""})])}const G=s(g,[["render",N],["__file","2.html.vue"]]);export{G as default};
