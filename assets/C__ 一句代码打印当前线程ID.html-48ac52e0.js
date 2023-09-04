import{_ as e,r,o as i,c as d,e as a,a as o,f as _}from"./app-3f7f50e9.js";const n={},c=_('<p>功能代码:<br><code>printf(&quot;ThreadID: %d\\n&quot;, GetCurrentThreadId());</code> //经测试这个函数速度更快<br><code>printf(&quot;ThreadID: %d\\n&quot;, (*(uint32_t*)&amp;std::this_thread::get_id());</code></p><p>我们要获取线程 id，那么必然要用到 get_id 这个函数，那么我们看看这个函数返回的是什么。</p><figure><img src="https://img-blog.csdnimg.cn/20200402025028894.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>看到了吗， _Thrd_id()其实是一个 uint32_t 类型的返回值，但是却被转换成了 thread::id 类型，<br> 那么我们再来看看 thread::id 这个类里面有什么吧。</p><figure><img src="https://img-blog.csdnimg.cn/20200402025412190.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>看到了，里面就只有一个成员变量， 那就是类型为 uint32_t 的_Id， 那么我相信这时候大部分学过 C++的同学都知道了吧， 那就是获取类成员地址在类中的偏移量 &amp;类实例+偏移量 = 我们想要的成员地址， 因为 thread::id 类只有一个成员变量， 那么偏移量就为 0， 所以就直接通过&amp;std::this_thread::get_id()就拿到了我们想要的 id 类成员地址， 这时候再在前面加上*(uint32_t*)通过转指针解引用我们就拿到了想要的线程 id, 是不是很简单？<br> 本来之前在网上想看看别人怎么获取线程 ID 的， 结果一堆输入输出，强转... ，一行代码搞定的事非要<br> 弄个三四行还要用上各种平时不怎么用的类这些， 然后自己看了下 thread::id 的代码，现在发上来。</p><p>另外推荐 GetCurrentThreadId()这个函数 可以直接获取当前线程 id</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',9);function s(p,h){const t=r("Share");return i(),d("div",null,[a(" more "),c,o(t,{services:"qq,qrcode",colorful:""})])}const g=e(n,[["render",s],["__file","C__ 一句代码打印当前线程ID.html.vue"]]);export{g as default};
