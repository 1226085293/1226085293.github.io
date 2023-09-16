import{_ as e,r as a,o as d,c as n,e as s,d as l,f as r}from"./app-db609791.js";const t={},c=r(`<figure><img src="https://forum.cocos.org/uploads/default/original/3X/2/5/254ecd905eb3aeae5a037fff0b029e65409adfb8.png" alt="" width="690" height="67" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图" aria-hidden="true">#</a> # 效果图</h2><p><img src="https://forum.cocos.org/uploads/default/original/3X/4/b/4b69d086f21abe7f2eb48a2a6ac72923b277f647.gif" alt="" width="338" height="213" loading="lazy">&gt;</p><figure><img src="https://forum.cocos.org/uploads/default/original/3X/8/6/8643098204e1921861f55ba8429e14f8b7af2694.gif" alt="" width="342" height="216" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> # 前言</h2><p><em>SDF 是什么？</em><br>   <em>SDF</em> 的全称是 <em>Signed Distance Field（有符号距离场）</em><br>   <em>有符号</em>：指的是正数和负数，<em>正数代表在物体外，负数代表在物体内</em><br>   <em>距离场</em>：其中的 <em>数值正是代表到物体表面的距离，0 就代表物体表面</em></p><h2 id="内容目录" tabindex="-1"><a class="header-anchor" href="#内容目录" aria-hidden="true">#</a> # 内容目录</h2><ul><li>SDF 渲染</li><li>相交</li><li>融合</li><li>抵消</li><li>减去</li><li>描边</li><li>外发光</li><li>内发光</li><li>硬阴影</li><li>软阴影</li></ul><hr><h2 id="什么是-shader" tabindex="-1"><a class="header-anchor" href="#什么是-shader" aria-hidden="true">#</a> # 什么是 Shader?</h2><p>方便没有 shader 基础的同学观看，特此增加简单基础介绍<br><em>Shader 其实是一段 GLSL（OpenGL 着色语言）程序，而 WebGL 则是为了方便浏览器使用而封装的 OpenGL</em><br><em>组成结构：</em></p><ul><li><em>顶点着色器</em>：模型由三角面组成，三角面由顶点组成，而顶点作色器就负责 <em>顶点的坐标控制</em>，可以用来实现<em>布料、水体</em></li><li><em>片段着色器</em>：片段着色器则是负责 <em>渲染位置的颜色输出</em><br><em>本文用到的 glsl 内置函数说明</em></li><li><em>clamp(x, y, z)</em></li><li><em>mix(x, y, z)</em></li><li><em>length(x)</em></li><li><em>sign(x)</em></li></ul><hr><h2 id="如何用-sdf-画一个圆" tabindex="-1"><a class="header-anchor" href="#如何用-sdf-画一个圆" aria-hidden="true">#</a> # 如何用 SDF 画一个圆？</h2><p>如果我们想要在 shader 内 <em>用 sdf 画一个圆</em><br><img src="https://forum.cocos.org/uploads/default/optimized/3X/c/f/cf685aab29dc4b24fbc14ab59a188e219baf2bb0_2_690x204.png" alt="" width="690" height="204" loading="lazy"></p><ul><li><em>问题 1：参数 p 是什么？</em><ul><li><em>解答：p 是当前渲染点的位置，因为是 2d，所以只有 xy</em></li></ul></li><li><em>问题 2：参数 r 是什么？</em><ul><li><em>解答：r 就是想要绘制的圆半径</em><br><em>这里的返回结果就是距离场</em><br><em>“举个栗子 <img src="https://forum.cocos.org/images/emoji/twitter/muscle.png?v=9" title=":muscle:" class="emoji" alt=":muscle:"> <img src="https://forum.cocos.org/images/emoji/twitter/chestnut.png?v=9" title=":chestnut:" class="emoji" alt=":chestnut:">”：</em></li></ul></li></ul><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><p><strong>在片段着色器“画”出来</strong></p><ul><li>output_v4：片段着色器输出的颜色</li><li>float dist_f：距离场</li><li>vec4 color_v4：物体颜色</li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>output_v4 = mix(output_v4, color_v4, clamp(-dist_f, 0.0, 1.0));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>- dist_f</em></p><p><em>“深入理解”</em></p><ul><li><p>更多的 SDF 图形公式：<a href="https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm" rel="nofollow noopener">链接， 需梯子</a></p></li><li><p>图形公式原理讲解：<a href="https://blog.csdn.net/qq_41368247/article/details/106194092?spm=1001.2014.3001.5506" rel="nofollow noopener">链接</a></p></li></ul><hr><p>以下内容通将 SDF 值称为 <em>距离场</em></p><h2 id="旋转-跳跃-我闭着眼" tabindex="-1"><a class="header-anchor" href="#旋转-跳跃-我闭着眼" aria-hidden="true">#</a> # 旋转，跳跃，我闭着眼~</h2><p><img src="https://forum.cocos.org/uploads/default/original/3X/6/a/6a45a616f0ec6aa15cf0f4648cd55c1132eaf568.gif" alt="" width="164" height="91" loading="lazy"><br> 前面说了如何画出 SDF 图形，那么怎么让它们动起来呢？很简单，我们只需要<em>将渲染点减去我们要移动的坐标</em></p><h3 id="如何实现" tabindex="-1"><a class="header-anchor" href="#如何实现" aria-hidden="true">#</a> <strong>如何实现？</strong></h3><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>vec2 translate(vec2 render_v2_, vec2 move_v2_) {
	return render_v2_ - move_v2_;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://forum.cocos.org/images/emoji/twitter/muscle.png?v=9" title=":muscle:" class="emoji" alt=":muscle:"> <img src="https://forum.cocos.org/images/emoji/twitter/chestnut.png?v=9" title=":chestnut:" class="emoji" alt=":chestnut:"> <em>（举栗）</em></p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>float dist_f = sdf_circle(translate(render_v2_, vec2(100.0, 100.0)), 10.0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>dist_f 便是我们通过 sdf 函数求得平移 vec2(100.0, 100.0) 后的距离场</li></ul><h3 id="平移实现了-旋转呢" tabindex="-1"><a class="header-anchor" href="#平移实现了-旋转呢" aria-hidden="true">#</a> 平移实现了，旋转呢？</h3><ul><li>其实也很简单，学习过矩阵的同学应该知道有个<em>旋转矩阵</em>，我们只需要 _将向量 _ 二维旋转矩阵，那么就会得到旋转后的点*</li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>// 逆时针旋转
vec2 rotate_ccw(vec2 render_v2_, float radian_f_) {
	mat2 m = mat2(cos(radian_f_), sin(radian_f_), -sin(radian_f_), cos(radian_f_));
	return render_v2_ * m;
}

// 顺时针旋转
vec2 rotate_cw(vec2 render_v2_, float radian_f_) {
	mat2 m = mat2(cos(radian_f_), -sin(radian_f_), sin(radian_f_), cos(radian_f_));
	return render_v2_ * m;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>最终结果：</em></p><figure><img src="https://forum.cocos.org/uploads/default/original/3X/6/4/6417cc7fc1a4f68610cdd59faa751514e16d3172.gif" alt="" width="164" height="91" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="正常-效果" tabindex="-1"><a class="header-anchor" href="#正常-效果" aria-hidden="true">#</a> # “正常” 效果</h2><p><img src="https://forum.cocos.org/uploads/default/original/3X/2/4/24d583ec03d55f8645c49bd10ad9e39ca777cd68.gif" alt="" width="164" height="91" loading="lazy"><br> 如果我们要<em>正常展示多个 SDF 物体</em></p><h3 id="如何实现-1" tabindex="-1"><a class="header-anchor" href="#如何实现-1" aria-hidden="true">#</a> <strong>如何实现？</strong></h3><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>float merge(float dist_f_, float dist2_f_) {
	return min(dist_f_, dist2_f_);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是很简单，通过对距离场进行操作，就可以得到不同的效果，看看下面</p><hr><h2 id="相交-效果" tabindex="-1"><a class="header-anchor" href="#相交-效果" aria-hidden="true">#</a> # “相交” 效果</h2><p><img src="https://forum.cocos.org/uploads/default/original/3X/4/c/4c35eea849ae74c029bf9784368467d12bdf4069.gif" alt="" width="164" height="91" loading="lazy"><br> 效果是不是很奇怪，其实名字一样，这个函数只会在两个物体的距离场同时 &lt; 0 时才会返回 &lt; 0，方法也很简单</p><h3 id="如何实现-2" tabindex="-1"><a class="header-anchor" href="#如何实现-2" aria-hidden="true">#</a> <strong>如何实现？</strong></h3><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>float intersect(float dist_f_, float dist2_f_) {
	// dist_f_ &lt; 0, dist2_f_ &gt; 0  例 dist_f_ = -2, dist2_f_ = 3，r = 3, 例 dist_f_ = -2, dist2_f_ = 1，r = 1， 则值 &gt; 0
	// dist_f_ &gt; 0, dist2_f_ &lt; 0  例 dist_f_ = 2, dist2_f_ = -1，r = 2, 例 dist_f_ = 2, dist2_f_ = -5，r = 2， 则值 &gt; 0
	// dist_f_ &gt; 0, dist2_f_ &gt; 0  例 dist_f_ = 1, dist2_f_ = 2，r = 2, 例 dist_f_ = 2, dist2_f_ = 1，r = 2， 则值 &gt; 0
	// dist_f_ &lt; 0, dist2_f_ &lt; 0  例 dist_f_ = -2, dist2_f_ = -3，r = -2, 例 dist_f_ = -2, dist2_f_ = -1，r = -1， 则值 &lt; 0
	// 所以最终结果只会在 dist_f_ 和 dist2_f_ 重合时展示
	return max(dist_f_, dist2_f_);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实原理就是只有两个数同时 &lt; 0 时，max 才会返回负数，所以造成了上面的效果</p><hr><h2 id="融合-效果" tabindex="-1"><a class="header-anchor" href="#融合-效果" aria-hidden="true">#</a> # “融合” 效果</h2><p><img src="https://forum.cocos.org/uploads/default/original/3X/1/8/189447c70b90b68bd179df3ecf584fbae7d1dfec.gif" alt="" width="164" height="91" loading="lazy"><br> 怎么样？是不是很熟悉？每天打开 cocos 官网都会看见的那个 ta，哈哈哈</p><h3 id="如何实现-3" tabindex="-1"><a class="header-anchor" href="#如何实现-3" aria-hidden="true">#</a> <strong>如何实现？</strong></h3><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>float smooth_merge(float dist_f_, float dist2_f_, float k_f_) {
	// k_f_ 如果不超过 abs(dist_f_ - dist2_f_)，那么都是无效值（0 或 1）
    float h_f = clamp(0.5 + 0.5 * (dist2_f_ - dist_f_) / k_f_, 0.0, 1.0);
	// 假设 k_f_ = 0, dist_f_ = 2, dist2_f_ = 1，则 h_f = 0, mix(...) = dist2_f_, k_f_ * h_f * (1.0 - h_f) = 0，结果为 dist2_f_
	// 假设 k_f_ = 0, dist_f_ = 1, dist2_f_ = 2，则 h_f = 1, mix(...) = dist_f_, k_f_ * h_f * (1.0 - h_f) = 0，结果为 dist_f_
	//…1) = 0
   - 返回值就为 color_v4_，此时为无效值

---

## # 内什么啊？内发光啊，什么发光啊？内发光阿
![](https://forum.cocos.org/uploads/default/original/3X/0/b/0b72e8b15abd410cd6b66c732f39b3e8ee4ad97a.png =353x217)
（此函数根据上面的外发光改写）
\`\`\`auto
vec4 inner_glow(float dist_f_, vec4 color_v4_, vec4 input_color_v4_, float radius_f_) {
    // (dist_f_ + radius_f_) &gt; radius_f_ 结果为1
    // (dist_f_ + radius_f_) &lt; 0 结果为0
    // (dist_f_ + radius_f_) &gt; 0 &amp;amp;&amp;amp; (dist_f_ + radius_f_) &lt; radius_f_ 则 dist_f_ 越大 a_f 越大，范围 0 ~ 1
    float a_f = clamp((dist_f_ + radius_f_) / radius_f_, 0.0, 1.0);
    // pow：平滑 a_f
    // 1.0+：在物体内渲染
    // max(1.0, sign(dist_f_) * -：dist_f_ &lt; 0 时返回 -1，dist_f_ == 0 返回 0，dist_f_ &gt; 0 返回 1，所以有效值只在物体内部
    float b_f = 1.0 - max(1.0, sign(dist_f_) * -(1.0 + pow(a_f, 5.0)));
		return color_v4_ + input_color_v4_ * b_f;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>如果 (dist<em>f</em> + radius<em>f</em>) &gt; radius<em>f</em></p><ul><li>a_f = 1.0;</li><li>b_f = 1.0 - max(1.0, -2.0) = 0;</li><li>返回值就为 color<em>v4</em>，此时为无效值</li></ul></li><li><p>如果 (dist<em>f</em> + radius<em>f</em>) &lt; 0</p><ul><li>a_f = 0.0;</li><li>b_f = 1.0 - max(1.0, 1.0) = 0;</li><li>返回值就为 color<em>v4</em>，此时为无效值<br> 由于 dist_f 越往物体内部越小，所以也会导致 a_f 也是也是如此，所以最后 1.0 - max</li></ul></li></ul><hr><h2 id="比较硬的阴影" tabindex="-1"><a class="header-anchor" href="#比较硬的阴影" aria-hidden="true">#</a> # 比较硬的阴影</h2><figure><img src="https://forum.cocos.org/uploads/default/original/3X/b/5/b58718cb364293df0c56877731442b67c0815e2f.gif" alt="" width="603" height="398" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="什么是硬阴影" tabindex="-1"><a class="header-anchor" href="#什么是硬阴影" aria-hidden="true">#</a> <strong>什么是硬阴影？</strong></h3><p>边缘没有过渡的阴影便是硬阴影</p><p>我们的 SDF 不仅可以同来生成各种图形，还可以做阴影，没想到吧！</p><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h3><p><strong>原理简介</strong>：<br> 从渲染点出发到光源点，依次步进安全距离（SDF 距离场，代表这个范围不会触碰到物体），<em>如果距离场 &lt; 0，则代表碰到了物体</em></p><h3 id="小二-上一份代码-不要辣" tabindex="-1"><a class="header-anchor" href="#小二-上一份代码-不要辣" aria-hidden="true">#</a> 小二，上一份代码，不要辣</h3><ul><li>vec2 render<em>v2</em> 渲染点</li><li>vec2 light<em>v2</em> 光源点</li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>float shadow(vec2 render_v2_, vec2 light_v2_) {
		// 当前渲染位置到光源位置的方向向量
    vec2 render_to_light_dir_v2 = normalize(light_v2_ - render_v2_);
		// 渲染位置至光源位置距离
    float render_to_light_dist_f = length(render_v2_ - light_v2_);
		// 行走距离
    float travel_dist_f = 0.01;

    for (int k_i = 0; k_i &lt; max_shadow_step; ++k_i) {
      // 渲染点到场景的距离
      float dist_f = scene_dist(render_v2_ + render_to_light_dir_v2 * travel_dist_f);
      // 小于0表示在物体内部
      if (dist_f &lt; 0.0) {
        return 0.0;
      }
      // abs：避免往回走
      // max 避免渲染点距离物理表面过近导致极小耗尽遍历次数，所以有可能会跳过物体距离小于1.0的阴影绘制
      travel_dist_f += max(1.0, abs(dist_f));
      // travel_dist_f += abs(dist_f); 精确的阴影

      // 渲染点的距离超过光源点
      if (travel_dist_f &gt; render_to_light_dist_f) {
        return 1.0;
      }
    }
    return 0.0;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="比较软的阴影" tabindex="-1"><a class="header-anchor" href="#比较软的阴影" aria-hidden="true">#</a> # 比较软的阴影</h2><p><img src="https://forum.cocos.org/uploads/default/original/3X/d/a/da30c5804bf6b667f510c34451aebbbceb4c7302.gif" alt="" width="603" height="398" loading="lazy"><br> 是不是真实感瞬间就上去了，想不想用在自己的游戏里？</p><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h3><p><strong>实现方式</strong>：<br> 这个和硬阴影有一些差别，目前我了解的 sdf 实现软阴影目前大概是两种，一种是 iq 大神和 games202 里面提到的公式，但是效果并不好，在靠近物体时会产生弯曲的软阴影，如下图，不过我这里给大家展示的是 shadertoy 上一位大神的代码，效果非常好，图上所示<br><img src="https://forum.cocos.org/uploads/default/original/3X/4/7/47786ecafdbbb042d168d6da640933f743a7c942.png" alt="" width="410" height="258" loading="lazy"></p><h3 id="先上代码" tabindex="-1"><a class="header-anchor" href="#先上代码" aria-hidden="true">#</a> 先上代码</h3><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>float shadow(vec2 render_v2_, vec2 light_v2_, float hard_f_) {
		// 当前渲染位置到光源位置的方向向量
		vec2 render_to_light_dir_v2 = normalize(light_v2_ - render_v2_);
		// 渲染位置至光源位置距离
		float render_to_light_dist_f = length(render_v2_ - light_v2_);
		// 可见光的一部分，从一个半径开始（最后添加下半部分）；
		float brightness_f = hard_f_ * render_to_light_dist_f;
		// 行走距离
		float travel_dist_f = 0.01;

		for (int k_i = 0; k_i &lt; max_shadow_step; ++k_i) {
		// 当前位置到场景的距离
		float dist_f = scene_dist(render_v2_ + render_to_light_dir_v2 * travel_dist_f);

		// 渲染点在物体内部
		if (dist_f &lt; -hard_f_) {
			return 0.0;
		}

		// dist_f 不变，brightness_f 越小，在越靠近光源和物体时 brightness_f 越小
		brightness_f = min(brightness_f, dist_f / travel_dist_f);

		// max 避免渲染点距离物理表面过近导致极小耗尽遍历次数，所以有可能会跳过物体距离小于1.0的阴影绘制
		// abs 避免朝回走
		travel_dist_f += max(1.0, abs(dist_f));

		// 渲染点的距离超过光源点
		if (travel_dist_f &gt; render_to_light_dist_f) {
			break;
		}
	}

	// brightness_f * render_to_light_dist_f 根据距离平滑, 离光源越近越小，消除波纹线
	// 放大阴影，hard_f 越大结果越小则阴影越大, hard_f_ / (2.0 * hard_f_) 使结果趋近于0.5，用于平滑过渡
	brightness_f = clamp((brightness_f * render_to_light_dist_f + hard_f_) / (2.0 * hard_f_), 0.0, 1.0);
	brightness_f = smoothstep(0.0, 1.0, brightness_f);
	return brightness_f;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h3><p><strong>原理简介</strong>：<br> 从渲染点出发到光源点，依次步进安全距离（SDF 距离场，代表这个范围不会触碰到物体），<em>如果距离场 &lt; -hard<em>f</em> 则返回 0</em><br><em>具体实现方式可以看注释</em></p><hr><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> # 结语</h2><h3 id="福音书-code" tabindex="-1"><a class="header-anchor" href="#福音书-code" aria-hidden="true">#</a> 福音书（Code）</h3><p><a href="https://github.com/1226085293/mk_sdf_shadow.git" rel="nofollow noopener">github</a></p><p><a href="https://gitee.com/muzzik/mk_sdf_shadow.git" rel="nofollow noopener">gitee</a></p><h3 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码" aria-hidden="true">#</a> 参考代码</h3><ul><li><a href="https://www.shadertoy.com/view/4dfXDn" rel="nofollow noopener">shadertoy2d 软阴影实现</a></li><li><a href="https://www.ronja-tutorials.com/post/037-2d-shadows/" rel="nofollow noopener">软阴影和硬阴影</a></li></ul><h3 id="推荐的-shader-调试网址" tabindex="-1"><a class="header-anchor" href="#推荐的-shader-调试网址" aria-hidden="true">#</a> 推荐的 shader 调试网址</h3><ul><li><a href="https://www.shadertoy.com/" rel="nofollow noopener">shadertoy 可以登录保存、分支代码，功能全面</a></li><li><a href="https://glslsandbox.com/" rel="nofollow noopener">glslsandbox 可以实时编译运行，但编辑器不太行</a></li></ul><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,86);function o(_,m){const i=a("Share");return d(),n("div",null,[s(" more "),c,l(i,{services:"qq,qrcode",colorful:""})])}const v=e(t,[["render",o],["__file","14.html.vue"]]);export{v as default};
