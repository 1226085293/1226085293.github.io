import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as a,e as r,d as t,f as d}from"./app-ef7c8e3b.js";const l={},c=d(`<p>有时候在开发中，有一个通用的父类方法，但我们又想限制在不同的子类下需要不同的参数类型，为了重新获得语法提示这块糖，重载父类声明就很有必要了。下面实现：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>/**重载父类函数声明 */
public reset_parent_declaration(target_a_: any, k_s_: string, descriptor_o_: PropertyDescriptor): void {
    descriptor_o_.value = target_a_.__proto__[k_s_];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>class A {
    public func(str_s_: string): void {
         cc.log(str_s_);
    }
}

class B extends A {
    @reset_parent_declaration
    func(str_s_: &quot;test1&quot; | &quot;test2&quot;): void {}
}

let b = new B;
b.func(&quot;test1&quot;);
// 打印结果：&quot;test1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外也可以手动调用 super 函数来实现</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,7);function o(u,v){const e=s("Share");return i(),a("div",null,[r(" more "),c,t(e,{services:"qq,qrcode",colorful:""})])}const p=n(l,[["render",o],["__file","4.html.vue"]]);export{p as default};
