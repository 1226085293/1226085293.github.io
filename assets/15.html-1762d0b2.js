import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as a,c as s,e as d,d as r,f as t}from"./app-f434a004.js";const l={},o=t(`<h3 id="方式-1" tabindex="-1"><a class="header-anchor" href="#方式-1" aria-hidden="true">#</a> # 方式 1</h3><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function test(必选参数: number, 可选参数?: TestConfig): void {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,6);function c(u,v){const e=i("Share");return a(),s("div",null,[d(" more "),o,r(e,{services:"qq,qrcode",colorful:""})])}const h=n(l,[["render",c],["__file","15.html.vue"]]);export{h as default};