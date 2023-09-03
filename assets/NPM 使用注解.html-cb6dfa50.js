import{_ as l,r as n,o as d,c as r,b as e,d as c,a,f as t}from"./app-88f3be70.js";const o={},p=t(`<h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h4><ul><li>安装项目所有依赖包：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看项目依赖：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装指定包：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i 包名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h4><p><strong>package.json</strong>中的<strong>dependencies</strong>和<strong>devDependencies</strong></p><ul><li>devDependencies 是开发时的依赖，上线打包时并不会出现打包进代码中，比如 gulp 相关的工具，只是用于开发阶段</li><li>dependencies 是线上运行时需要的依赖，打包时会被打包处理，比如 angular、vue、vue-router 等等，没有这些依赖，你的程序又怎么能跑起来呢。项目中做依赖处理的时候要注意，项目中依赖的包需要放到 dependencies 当中。<br> 脚本命令：</li></ul><p>保存在 devDependencies</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i 包名 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存在 dependencies</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i 包名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想使用淘宝源下载, 主要为了速度，建议不要用 cnpm，而是直接修改源地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i 包名 <span class="token parameter variable">--save</span>  <span class="token parameter variable">--registry</span><span class="token operator">=</span>http://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><br><br> 引用：</p>`,17),u={href:"https://www.jianshu.com/p/41b863e358b5",target:"_blank",rel:"noopener noreferrer"},h=e("hr",null,null,-1),v=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function m(b,g){const s=n("ExternalLinkIcon"),i=n("Share");return d(),r("div",null,[p,e("ol",null,[e("li",null,[e("a",u,[c("https://www.jianshu.com/p/41b863e358b5"),a(s)])])]),h,v,a(i,{services:"qq,qrcode",colorful:""})])}const f=l(o,[["render",m],["__file","NPM 使用注解.html.vue"]]);export{f as default};
