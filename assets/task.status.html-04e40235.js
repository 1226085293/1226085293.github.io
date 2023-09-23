import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c,a as e,d as a,w as r,b as t,f as d}from"./app-40463a1e.js";const f={},p=e("h1",{id:"class-status-ct",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-status-ct","aria-hidden":"true"},"#"),t(" Class: status<CT>")],-1),u=d('<p>状态任务（类型安全）</p><p><strong><code>Remarks</code></strong></p><p>封装 promise，防止重复调用 resolve 函数报错以及添加超时功能，可重复使用</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CT</code></td><td style="text-align:left;"><code>void</code></td></tr></tbody></table><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',7),_=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),m=e("h3",{id:"accessors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessors","aria-hidden":"true"},"#"),t(" Accessors")],-1),b=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),k=d('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new status</strong>&lt;<code>CT</code>&gt;(<code>finish_b_</code>, <code>init_config_?</code>)</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CT</code></td><td style="text-align:left;"><code>void</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>finish_b_</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">完成状态</td></tr><tr><td style="text-align:left;"><code>init_config_?</code></td><td style="text-align:left;"><code>init_config</code>&lt;<code>CT</code>&gt;</td><td style="text-align:left;">初始化配置</td></tr></tbody></table><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',8),x={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L12",target:"_blank",rel:"noopener noreferrer"},g=d('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="task" tabindex="-1"><a class="header-anchor" href="#task" aria-hidden="true">#</a> task</h3><p>• <strong>task</strong>: <code>Promise</code>&lt;<code>CT</code>&gt;</p><p>异步任务</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',5),y={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L27",target:"_blank",rel:"noopener noreferrer"},T=d('<h2 id="accessors-1" tabindex="-1"><a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a> Accessors</h2><h3 id="finish-b" tabindex="-1"><a class="header-anchor" href="#finish-b" aria-hidden="true">#</a> finish_b</h3><p>• <code>get</code> <strong>finish_b</strong>(): <code>boolean</code></p><p>完成状态</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>boolean</code></p><p><strong><code>Remarks</code></strong></p><ul><li><p>true：任务结束</p></li><li><p>false：任务进行中</p></li></ul><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',9),w={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L36",target:"_blank",rel:"noopener noreferrer"},C=d('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="finish" tabindex="-1"><a class="header-anchor" href="#finish" aria-hidden="true">#</a> finish</h3><p>▸ <strong>finish</strong>&lt;<code>T</code>&gt;(<code>finish_b_</code>): <code>void</code></p><p>完成任务</p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>false</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>finish_b_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">完成状态</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>',11),v={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L54",target:"_blank",rel:"noopener noreferrer"},N=d('<p>▸ <strong>finish</strong>&lt;<code>T</code>&gt;(<code>finish_b_</code>, <code>data_</code>): <code>void</code></p><p>完成任务</p><h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>true</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>finish_b_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">完成状态</td></tr><tr><td style="text-align:left;"><code>data_</code></td><td style="text-align:left;"><code>CT</code></td><td style="text-align:left;">完成数据</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>',9),L={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L60",target:"_blank",rel:"noopener noreferrer"},D=e("hr",null,null,-1),M=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function R(P,F){const s=n("RouterLink"),o=n("ExternalLinkIcon"),i=n("Share");return l(),c("div",null,[e("p",null,[a(s,{to:"/mk-framework/api/"},{default:r(()=>[t("index")]),_:1}),t(" / "),a(s,{to:"/mk-framework/api/modules/task.html"},{default:r(()=>[t("task")]),_:1}),t(" / status")]),p,e("p",null,[a(s,{to:"/mk-framework/api/modules/task.html"},{default:r(()=>[t("task")]),_:1}),t(".status")]),u,e("ul",null,[e("li",null,[a(s,{to:"/mk-framework/api/classes/task.status.html#constructor"},{default:r(()=>[t("constructor")]),_:1})])]),_,e("ul",null,[e("li",null,[a(s,{to:"/mk-framework/api/classes/task.status.html#task"},{default:r(()=>[t("task")]),_:1})])]),m,e("ul",null,[e("li",null,[a(s,{to:"/mk-framework/api/classes/task.status.html#finish_b"},{default:r(()=>[t("finish_b")]),_:1})])]),b,e("ul",null,[e("li",null,[a(s,{to:"/mk-framework/api/classes/task.status.html#finish"},{default:r(()=>[t("finish")]),_:1})])]),k,e("p",null,[e("a",x,[t("assets/@framework/task/mk_status_task.ts:12"),a(o)])]),g,e("p",null,[e("a",y,[t("assets/@framework/task/mk_status_task.ts:27"),a(o)])]),T,e("p",null,[e("a",w,[t("assets/@framework/task/mk_status_task.ts:36"),a(o)])]),C,e("p",null,[e("a",v,[t("assets/@framework/task/mk_status_task.ts:54"),a(o)])]),N,e("p",null,[e("a",L,[t("assets/@framework/task/mk_status_task.ts:60"),a(o)])]),D,M,a(i,{services:"qq,qrcode",colorful:""})])}const q=h(f,[["render",R],["__file","task.status.html.vue"]]);export{q as default};
