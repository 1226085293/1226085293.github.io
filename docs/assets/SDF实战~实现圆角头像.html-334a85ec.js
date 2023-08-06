import{_ as n,r as d,o as i,c as t,d as l,a as e,b as a,e as o,f as s}from"./app-0432357d.js";const c={},u=s(`<p>继上篇帖子之后，为了让大家更好的了解 SDF，以及如何运用在 creator，特出几个小案例</p><ul><li>上篇帖子</li></ul><p><a href="https://forum.cocos.org/t/topic/133228" class="inline-onebox">【muzzik 教程】：我所理解的 SDF（阴影，描边，外发光...）｜社区征文</a></p><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> # 效果</h2><figure><img src="https://forum.cocos.org/uploads/default/original/3X/7/8/786c687001561c3c1f1ac087a413e84b314e29a3.gif" alt="" width="603" height="398" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> # 实现</h2><p>ps：不了解 SDF 原理的朋友请看上一篇帖子…<br> 如果我们想让 SDF 图形变的圆润怎么做呢？一句代码就可以搞定，用 <em>距离场 - 缩小半径</em>，会得到如下的效果</p><p><img src="https://forum.cocos.org/uploads/default/original/3X/9/2/924ec29f69f7e77540830d3a8a1e7d3942ba4341.gif" alt="" width="603" height="398" loading="lazy"><br> 代码如下：</p><ul><li>rounded_f：输入变量，控制圆滑度</li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>// 距离场
float dist_f = sdf_box(render_v2, vec2(0.5)) - rounded_f;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么会得到这样的效果呢？因为我们距离场的距离是到 <em>物体表面</em> 的距离，如果我们缩减这个距离，就不是 <em>长 - 长，宽 - 宽</em> 的效果了，而是<em>从物体边缘往中心点缩减，所以才会让物体变得圆滑</em></p><ul><li>例（上方代码）：矩形大小为 0.5，rounded_f 为 0.5，也就是在离矩形中心 1.0 距离的位置才代表在物体内，而 1.0 以外对于横竖方向都是不可见的区域，而斜方向却是可以大于 1.0，导致四个角变得圆润</li></ul><p>既然可以变的圆滑了，那我们怎么让它在<em>圆滑的同时不影响原本的大小</em>呢？也很简单，直接把矩形大小减去我们 rounded_f，<em>外层的 - rounded_f 让我们的矩形范围越来越大，所以我们只需要缩减原本的矩形大小就可以抵消外层的影响</em></p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>float dist_f = sdf_box(render_v2, vec2(1.0 - rounded_f)) - rounded_f;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> # 结语</h2><p><em>福音书：</em></p>`,16),_={href:"https://github.com/1226085293/mk_sdf_demo",target:"_blank",rel:"noopener noreferrer"},m={href:"https://gitee.com/muzzik/mk_sdf_demo",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1);function h(p,g){const r=d("ExternalLinkIcon");return i(),t("div",null,[l(" more "),u,e("ul",null,[e("li",null,[e("a",_,[a("github"),o(r)])]),e("li",null,[e("a",m,[a("gitee"),o(r)]),f,a(" 下一篇预告，SDF 纹理")])])])}const v=n(c,[["render",h],["__file","SDF实战~实现圆角头像.html.vue"]]);export{v as default};
