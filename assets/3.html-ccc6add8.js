import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as d,e as l,d as a,f as r}from"./app-367e5d7c.js";const v={},c=r(`<p>因为看不惯 Mixins 的多继承写法， 于是写了个类装饰器实现</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>/**扩展合并 */
function extends_merge(extends_a_: any): any {
    return function(target_a_: any) {
        // 若要继承实际成员变量将下面取消注释(不建议)
        // Object.assign(target_a_.prototype, new extends_a_);
        Object.assign(target_a_.prototype, extends_a_.prototype);
    }
}

class A {
    public func1(): void {
        cc.log(&quot;A类函数&quot;);
    }
}

class B {
    private a_n: number = 5;

    public func2(): void {
        cc.log(&quot;B类函数&quot;);
    }
}

class C {
    public func3(): void {
        cc.log(&quot;C类函数&quot;);
    }
}

// 第一种: class D extends A
// 第二种: class D extends A implements B, C
// 说明: 这里用implements如果类B/类C有private成员或者protected成员那么将会警告，所以建议为第一种写法, 当然在类B/类C全为public成员的时候可以使用，或者利用代码修复的时候使用
@extends_merge(B)
@extends_merge(C)
class D extends A {
    /* ***************B接口*************** */
    a_n: number;
    public func2(): void { throw new Error(&quot;Method not implemented.&quot;); }
    /* ***************C接口*************** */
    public func3(): void { throw new Error(&quot;Method not implemented.&quot;); }
    /* -------------------------------delimiter------------------------------- */
}

let d = new D;
d.func2();    // 输出: B类函数
d.func3();    // 输出: C类函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里说明一下：Mixins 写法的多继承也是只继承方法和属性，但实际在创建类时候初始化的成员变量并不会继承，如果要继承成员变量上面注释有说明，但要注意构造带参又使用的话可能会报错.</p><p>另外多继承下父类构造只会执行 extends 的父类构造，按照上面的例子也就是只会执行 A 类的构造。</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>/**扩展合并改进版 */
public extends_merge(extends_a_: any, extends_member_b_: boolean = false, ...args_as_: any[]): any {
    return function(target_a_: any) {
        extends_member_b_ &amp;amp;&amp;amp; Object.assign(target_a_.prototype, new extends_a_(...args_as_));
        Object.assign(target_a_.prototype, extends_a_.prototype);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,7);function t(u,m){const e=i("Share");return s(),d("div",null,[l(" more "),c,a(e,{services:"qq,qrcode",colorful:""})])}const _=n(v,[["render",t],["__file","3.html.vue"]]);export{_ as default};
