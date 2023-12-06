import{_ as e,o as i,c as t,e as a,f as _}from"./app-8131941e.js";const n={},s=_('<p>​<br> string 内部有多个 append 函数，我们就拿其中一个来说(基本原理都一样)。</p><figure><img src="https://img-blog.csdnimg.cn/20200515044748118.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中第一步中的 if (_Count &lt;= _Mypair._Myval2._Myres - _Old_size)可以翻译为<br> 如果(加入的字符大小&lt;= 当前大小 - 已存在的字符占用大小) ，其内部直接就是将我们 append 的字符复制进的当前的数组内。</p><p>第二步其实就很简单，重新创建一个满足需求大小的数组并将之前的数据和我们 append 添加的数据拷贝进去。那么创建的数组大小是多少呢，我们来看这个函数，这是第二部跳转到的函数内部</p><figure><img src="https://img-blog.csdnimg.cn/20200515045654901.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中新创建的数组大小正是剪头所指的地方调用的函数返回结果，那么我们来看看这个函数</p><figure><img src="https://img-blog.csdnimg.cn/20200515045816898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中的_ALLOC_MASK 是个三目运算符返回的结果，结果为 15，而_Requested 就是传参进来的_New_size，_New_size     = _Old_size + _Size_increase。那么就是原本的（数组的大小 + 添加的数据大小） | 15，而最后的那个_Max_value 也是一个三目运算符，返回的是两个参数中最大的那一个，那么创建的数组大小就很明确了，<br> 结果大小有两个 ：</p><ol><li>当前 string 内的字符大小 + 添加的数据大小  + n( n &lt;=15 );</li><li>当前 string 的最大容量大小 +  当前 string 的最大容量大小 / 2.</li></ol><p>​</p>',10);function o(p,r){return i(),t("div",null,[a(" more "),s])}const g=e(n,[["render",o],["__file","9.html.vue"]]);export{g as default};
