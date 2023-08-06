import{_ as e,o as n,c as i,d as a,f as s}from"./app-d4f83b7f.js";const d={},t=s(`<h3 id="方式-1" tabindex="-1"><a class="header-anchor" href="#方式-1" aria-hidden="true">#</a> # 方式 1</h3><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function test(必选参数: number, 可选参数?: TestConfig): void {
    let 参数 = new TestConfig(可选参数);
}

class TestConfig {
    constructor(init_?: TestConfig) {
        Object.assign(this, init_);
    }
    参数a?: number;
    参数b? = &quot;str&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式-2" tabindex="-1"><a class="header-anchor" href="#方式-2" aria-hidden="true">#</a> # 方式 2</h3><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>// 类型声明：{ 参数a = null as number, 参数b =  &quot;str&quot; }: 类型
function test(必选参数: number, { 参数a = null as number, 参数b =  &quot;str&quot; }): void {
    let a = 参数a;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function l(r,u){return n(),i("div",null,[a(" more "),t])}const o=e(d,[["render",l],["__file","写好函数参数，避免代码修改次数.html.vue"]]);export{o as default};
