import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as n,c as r,e as c,d as a,a as e,b as o}from"./app-cdbc9bfa.js";const _={},d=e("p",null,[o("······大家都知道，除非是安装了 VS 的电脑，不然在其他电脑上运行 VS 编译的 debug 程序就会显示运行时错误(0x0000...)这样的弹窗。其实这是因为没有 debug 的运行库导致的，那怎么查看运行时的 dll 呢。这也是我在调试程序时发现的。那就是利用 dmp 转储文件查看。"),e("br"),o(" ······首先我们需要设置转储文件函数。这里请大家百度 C++生成 dump 文件。 然后在程序内手动抛出一个异常，使用"),e("strong",null,"throw"),o("即可。然后我们吧 dmp 文件拖到 VS 内，就会出现这个画面"),e("br"),e("img",{src:"https://img-blog.csdnimg.cn/20200601015815126.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"})],-1),m=e("p",null,"看到了吗？模块那里有我们运行时调用的所有 dll。这下就简单了。把模块内的所有 dll 文件在 C 盘的 Windows/system 文件夹下找到。再拷贝到目标电脑上就好了。如果还是不行。那就先运行完所要执行的功能代码后再抛出异常。再重复上面的步骤看看。",-1),i=e("hr",null,null,-1),p=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function u(h,g){const t=l("Share");return n(),r("div",null,[c(" more "),d,m,i,p,a(t,{services:"qq,qrcode",colorful:""})])}const V=s(_,[["render",u],["__file","1.html.vue"]]);export{V as default};
