import{_ as p,r as e,o as r,c,e as l,b as d,a as s,w as t,d as a,f as k}from"./app-88f3be70.js";const i={},u=k(`<h2 id="data-sharer-get-method" tabindex="-1"><a class="header-anchor" href="#data-sharer-get-method" aria-hidden="true">#</a> data_sharer.get() method</h2><p>获取数据</p><p><strong>Signature:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">CT</span><span class="token punctuation">,</span> <span class="token constant">T2</span> <span class="token keyword">extends</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token constant">T3</span> <span class="token operator">=</span> <span class="token constant">CT</span><span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>key_<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> request_<span class="token operator">:</span> <span class="token constant">T2</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T2</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T3</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token constant">T3</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>key_</td><td>T</td><td>注册键</td></tr><tr><td>request_</td><td>T2</td><td>请求数据，若不存在则等待 set 后返回</td></tr></tbody></table><p><strong>Returns:</strong></p><p>T2 extends true ? Promise&lt;T3&gt; : T3 | null</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,10);function h(m,_){const n=e("RouterLink"),o=e("Share");return r(),c("div",null,[l(" Do not edit this file. It is automatically generated by API Documenter. "),d("p",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/"},{default:t(()=>[a("Home")]),_:1}),a(" > "),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/"},{default:t(()=>[a("mk")]),_:1}),a(" > "),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/mk/data_sharer/README.md/"},{default:t(()=>[a("data_sharer")]),_:1}),a(" > "),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/mk/data_sharer/get_1.md/"},{default:t(()=>[a("get")]),_:1})]),u,s(o,{services:"qq,qrcode",colorful:""})])}const g=p(i,[["render",h],["__file","get_1.html.vue"]]);export{g as default};
