import{_ as o,r,o as t,c as p,e as s,d as a,f as n}from"./app-41b880d7.js";const c={},i=n("<p>​<br> 由于刚刚安装 MySQL 按照网上教程配置，初始化的时候并没有加入--console 打印密码然后使用密码登陆     而是按照了网上的教程在 my.ini 文件里的 mysqld 下面添加 skip-grant-tables    这个对于 8.0 以上的版本并不适用！！  如果是新安装的用户   推荐使用下面的方法：</p><p>仅适用于刚刚安装 mysql 的同学们！！！<br> 打开你的安装路径，看里面有没有 data 文件夹。<br> 有的话，把它删掉。</p><p>之后在命令行输入<br> mysqld --initialize --console</p><p>静待一会儿...</p><p>会出一大片东西，其中有一行有以下信息<br> …<br> 2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: APWCY5ws&amp;hjQ<br> …</p><p>后面那串字符就是你的 initialize 的密码。</p><p>然后再使用 net start mysql 开启服务</p><p>使用 mysql -u root -p 登陆   密码使用上面 initialize 的密码。</p><p>由于我安装的是 8.0.16 版本，在网上找了两小时才在一篇博客里找到解决方法，推荐给大家，里面更详细</p><p>win10 下载安装 MySQL8.0 时遇到的问题解决 ERROR2003(HY000)及 ERROR1045(28000)_小略略略的博客-CSDN 博客</p><p>记得点个赞哦</p><p>​</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>",14);function l(m,_){const e=r("Share");return t(),p("div",null,[s(" more "),i,a(e,{services:"qq,qrcode",colorful:""})])}const h=o(c,[["render",l],["__file","1.html.vue"]]);export{h as default};
