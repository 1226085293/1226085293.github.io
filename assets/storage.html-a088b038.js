import{_ as h,r as n,o as i,c,a as e,d as a,w as d,b as t,f as s}from"./app-7119de6c.js";const f={},p=s('<h1 id="class-storage-ct" tabindex="-1"><a class="header-anchor" href="#class-storage-ct" aria-hidden="true">#</a> Class: storage&lt;CT&gt;</h1><p>存储器（类型安全）</p><p><strong><code>Remarks</code></strong></p><ul><li>(原生/web)接口分离，获得更高的性能</li></ul><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CT</code></td><td style="text-align:left;">extends <code>Object</code></td></tr></tbody></table><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',8),g=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),u=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),b=s('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new storage</strong>&lt;<code>CT</code>&gt;(<code>init_</code>)</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CT</code></td><td style="text-align:left;">extends <code>Object</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>init_</code></td><td style="text-align:left;"><code>init_config</code>&lt;<code>CT</code>&gt;</td></tr></tbody></table><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',8),m={href:"https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/mk_storage.ts#L18",target:"_blank",rel:"noopener noreferrer"},y=s('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3><p>• <strong>key</strong>: { [k in string | number | symbol]: k }</p><p>存储数据键</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',5),x={href:"https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/mk_storage.ts#L29",target:"_blank",rel:"noopener noreferrer"},_=s('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h3><p>▸ <code>Static</code> <strong>clear</strong>(): <code>void</code></p><p>清空所有存储器数据</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',7),k={href:"https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/mk_storage.ts#L45",target:"_blank",rel:"noopener noreferrer"},E=s('<hr><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><p>▸ <strong>set</strong>&lt;<code>T</code>&gt;(<code>key_</code>, <code>data_</code>): <code>boolean</code></p><p>设置存储数据</p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">存储键</td></tr><tr><td style="text-align:left;"><code>data_</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">存储数据</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>boolean</code></p><p>storage.status</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>',12),A={href:"https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/mk_storage.ts#L60",target:"_blank",rel:"noopener noreferrer"},T=s('<hr><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3><p>▸ <strong>get</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>key_</code>): <code>T2</code></p><p>获取数据</p><h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;"><code>T2</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">存储键</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>T2</code></p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>',11),w={href:"https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/mk_storage.ts#L93",target:"_blank",rel:"noopener noreferrer"},M=s('<hr><h3 id="del" tabindex="-1"><a class="header-anchor" href="#del" aria-hidden="true">#</a> del</h3><p>▸ <strong>del</strong>&lt;<code>T</code>&gt;(<code>key_</code>): <code>void</code></p><p>删除数据</p><h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">存储键</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>',11),F={href:"https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/mk_storage.ts#L132",target:"_blank",rel:"noopener noreferrer"},K=s('<hr><h3 id="clear-1" tabindex="-1"><a class="header-anchor" href="#clear-1" aria-hidden="true">#</a> clear</h3><p>▸ <strong>clear</strong>(): <code>void</code></p><p>清空当前存储器数据</p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',7),P={href:"https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/mk_storage.ts#L143",target:"_blank",rel:"noopener noreferrer"},N=e("hr",null,null,-1),B=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function I(L,v){const r=n("RouterLink"),o=n("ExternalLinkIcon"),l=n("Share");return i(),c("div",null,[e("p",null,[a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/"},{default:d(()=>[t("index")]),_:1}),t(" / "),a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/modules.html"},{default:d(()=>[t("Exports")]),_:1}),t(" / storage")]),p,e("ul",null,[e("li",null,[a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/storage.html#constructor"},{default:d(()=>[t("constructor")]),_:1})])]),g,e("ul",null,[e("li",null,[a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/storage.html#key"},{default:d(()=>[t("key")]),_:1})])]),u,e("ul",null,[e("li",null,[a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/storage.html#clear"},{default:d(()=>[t("clear")]),_:1})]),e("li",null,[a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/storage.html#set"},{default:d(()=>[t("set")]),_:1})]),e("li",null,[a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/storage.html#get"},{default:d(()=>[t("get")]),_:1})]),e("li",null,[a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/storage.html#del"},{default:d(()=>[t("del")]),_:1})]),e("li",null,[a(r,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/storage.html#clear-1"},{default:d(()=>[t("clear")]),_:1})])]),b,e("p",null,[e("a",m,[t("assets/@framework/mk_storage.ts:18"),a(o)])]),y,e("p",null,[e("a",x,[t("assets/@framework/mk_storage.ts:29"),a(o)])]),_,e("p",null,[e("a",k,[t("assets/@framework/mk_storage.ts:45"),a(o)])]),E,e("p",null,[e("a",A,[t("assets/@framework/mk_storage.ts:60"),a(o)])]),T,e("p",null,[e("a",w,[t("assets/@framework/mk_storage.ts:93"),a(o)])]),M,e("p",null,[e("a",F,[t("assets/@framework/mk_storage.ts:132"),a(o)])]),K,e("p",null,[e("a",P,[t("assets/@framework/mk_storage.ts:143"),a(o)])]),N,B,a(l,{services:"qq,qrcode",colorful:""})])}const D=h(f,[["render",I],["__file","storage.html.vue"]]);export{D as default};
