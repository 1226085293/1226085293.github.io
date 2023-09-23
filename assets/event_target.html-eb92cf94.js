import{_ as c,r as n,o as i,c as h,a as e,d as a,w as r,b as t,f as o}from"./app-9add3419.js";const f={},g=o('<h1 id="class-event-target-ct" tabindex="-1"><a class="header-anchor" href="#class-event-target-ct" aria-hidden="true">#</a> Class: event_target&lt;CT&gt;</h1><p>事件对象（类型安全）</p><p><strong><code>Remarks</code></strong></p><p>获取事件键使用 event_target.key.xxx</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h2><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CT</code></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2><ul><li><p><code>EventTarget</code></p><p>↳ <strong><code>event_target</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>',10),p=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),y=o('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3><p>• <strong>key</strong>: { [k in string | number | symbol]: k }</p><p>事件键</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',5),x={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_event_target.ts#L11",target:"_blank",rel:"noopener noreferrer"},m=o('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="on" tabindex="-1"><a class="header-anchor" href="#on" aria-hidden="true">#</a> on</h3><p>▸ <strong>on</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>type_</code>, <code>callback_</code>, <code>target_?</code>, <code>once_b_?</code>): <code>null</code> | <code>T2</code></p><p>监听事件</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends (...<code>event_</code>: <code>Parameters</code>&lt;<code>CT</code>[<code>T</code>]&gt;) =&gt; <code>void</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type_</code></td><td style="text-align:left;"><code>T</code> | <code>T</code>[]</td><td style="text-align:left;">事件类型</td></tr><tr><td style="text-align:left;"><code>callback_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">事件目标对象</td></tr><tr><td style="text-align:left;"><code>once_b_?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">是否触发单次</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>null</code> | <code>T2</code></p><p>触发回调</p><h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides" aria-hidden="true">#</a> Overrides</h4><p>cc.EventTarget.on</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',14),b={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_event_target.ts#L25",target:"_blank",rel:"noopener noreferrer"},_=o('<hr><h3 id="once" tabindex="-1"><a class="header-anchor" href="#once" aria-hidden="true">#</a> once</h3><p>▸ <strong>once</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>type_</code>, <code>callback_</code>, <code>target_?</code>): <code>null</code> | <code>T2</code></p><p>监听单次事件</p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends (...<code>event_</code>: <code>Parameters</code>&lt;<code>CT</code>[<code>T</code>]&gt;) =&gt; <code>void</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type_</code></td><td style="text-align:left;"><code>T</code> | <code>T</code>[]</td><td style="text-align:left;">事件类型</td></tr><tr><td style="text-align:left;"><code>callback_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">事件目标对象</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>null</code> | <code>T2</code></p><p>触发回调</p><h4 id="overrides-1" tabindex="-1"><a class="header-anchor" href="#overrides-1" aria-hidden="true">#</a> Overrides</h4><p>cc.EventTarget.once</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',14),u={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_event_target.ts#L53",target:"_blank",rel:"noopener noreferrer"},k=o('<hr><h3 id="off" tabindex="-1"><a class="header-anchor" href="#off" aria-hidden="true">#</a> off</h3><p>▸ <strong>off</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>type_</code>, <code>callback_?</code>, <code>target_?</code>): <code>void</code></p><p>取消监听事件</p><h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends (...<code>event_</code>: <code>Parameters</code>&lt;<code>CT</code>[<code>T</code>]&gt;) =&gt; <code>void</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type_</code></td><td style="text-align:left;"><code>T</code> | <code>T</code>[]</td><td style="text-align:left;">事件类型</td></tr><tr><td style="text-align:left;"><code>callback_?</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">事件目标对象</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><p>触发回调</p><h4 id="overrides-2" tabindex="-1"><a class="header-anchor" href="#overrides-2" aria-hidden="true">#</a> Overrides</h4><p>cc.EventTarget.off</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>',14),T={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_event_target.ts#L80",target:"_blank",rel:"noopener noreferrer"},v=o('<hr><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h3><p>▸ <strong>emit</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>type_</code>, <code>...args_</code>): <code>void</code></p><p>派发事件</p><h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>unknown</code>[]</td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type_</code></td><td style="text-align:left;"><code>T</code> | <code>T</code>[]</td><td style="text-align:left;">事件类型</td></tr><tr><td style="text-align:left;"><code>...args_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">事件参数</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="overrides-3" tabindex="-1"><a class="header-anchor" href="#overrides-3" aria-hidden="true">#</a> Overrides</h4><p>cc.EventTarget.emit</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>',13),w={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_event_target.ts#L96",target:"_blank",rel:"noopener noreferrer"},N=o('<hr><h3 id="has" tabindex="-1"><a class="header-anchor" href="#has" aria-hidden="true">#</a> has</h3><p>▸ <strong>has</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>type_</code>, <code>callback_?</code>, <code>target_?</code>): <code>boolean</code></p><p>是否存在事件</p><h4 id="type-parameters-5" tabindex="-1"><a class="header-anchor" href="#type-parameters-5" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends (...<code>event_</code>: <code>Parameters</code>&lt;<code>CT</code>[<code>T</code>]&gt;) =&gt; <code>void</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">事件类型</td></tr><tr><td style="text-align:left;"><code>callback_?</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">事件目标对象</td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>boolean</code></p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>',11),D={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_event_target.ts#L114",target:"_blank",rel:"noopener noreferrer"},P=o('<hr><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h3><p>▸ <strong>clear</strong>(): <code>void</code></p><p>清空所有事件</p><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',7),L={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_event_target.ts#L119",target:"_blank",rel:"noopener noreferrer"},R=o('<hr><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> request</h3><p>▸ <strong>request</strong>&lt;<code>T</code>, <code>T2</code>, <code>T3</code>&gt;(<code>type_</code>, <code>...args_</code>): <code>Promise</code>&lt;<code>T3</code>&gt;[]</p><p>请求事件</p><h4 id="type-parameters-6" tabindex="-1"><a class="header-anchor" href="#type-parameters-6" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>unknown</code>[]</td></tr><tr><td style="text-align:left;"><code>T3</code></td><td style="text-align:left;">extends <code>unknown</code></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type_</code></td><td style="text-align:left;"><code>T</code> | <code>T</code>[]</td><td style="text-align:left;">事件类型</td></tr><tr><td style="text-align:left;"><code>...args_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">事件参数</td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>T3</code>&gt;[]</p><p><strong><code>Remarks</code></strong></p><p>等待请求事件返回</p><h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>',13),M={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_event_target.ts#L132",target:"_blank",rel:"noopener noreferrer"},q=e("hr",null,null,-1),C=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function E(F,K){const d=n("RouterLink"),l=n("ExternalLinkIcon"),s=n("Share");return i(),h("div",null,[e("p",null,[a(d,{to:"/mk-framework/api/"},{default:r(()=>[t("index")]),_:1}),t(" / event_target")]),g,e("ul",null,[e("li",null,[a(d,{to:"/mk-framework/api/classes/event_target.html#key"},{default:r(()=>[t("key")]),_:1})])]),p,e("ul",null,[e("li",null,[a(d,{to:"/mk-framework/api/classes/event_target.html#on"},{default:r(()=>[t("on")]),_:1})]),e("li",null,[a(d,{to:"/mk-framework/api/classes/event_target.html#once"},{default:r(()=>[t("once")]),_:1})]),e("li",null,[a(d,{to:"/mk-framework/api/classes/event_target.html#off"},{default:r(()=>[t("off")]),_:1})]),e("li",null,[a(d,{to:"/mk-framework/api/classes/event_target.html#emit"},{default:r(()=>[t("emit")]),_:1})]),e("li",null,[a(d,{to:"/mk-framework/api/classes/event_target.html#has"},{default:r(()=>[t("has")]),_:1})]),e("li",null,[a(d,{to:"/mk-framework/api/classes/event_target.html#clear"},{default:r(()=>[t("clear")]),_:1})]),e("li",null,[a(d,{to:"/mk-framework/api/classes/event_target.html#request"},{default:r(()=>[t("request")]),_:1})])]),y,e("p",null,[e("a",x,[t("assets/@framework/mk_event_target.ts:11"),a(l)])]),m,e("p",null,[e("a",b,[t("assets/@framework/mk_event_target.ts:25"),a(l)])]),_,e("p",null,[e("a",u,[t("assets/@framework/mk_event_target.ts:53"),a(l)])]),k,e("p",null,[e("a",T,[t("assets/@framework/mk_event_target.ts:80"),a(l)])]),v,e("p",null,[e("a",w,[t("assets/@framework/mk_event_target.ts:96"),a(l)])]),N,e("p",null,[e("a",D,[t("assets/@framework/mk_event_target.ts:114"),a(l)])]),P,e("p",null,[e("a",L,[t("assets/@framework/mk_event_target.ts:119"),a(l)])]),R,e("p",null,[e("a",M,[t("assets/@framework/mk_event_target.ts:132"),a(l)])]),q,C,a(s,{services:"qq,qrcode",colorful:""})])}const V=c(f,[["render",E],["__file","event_target.html.vue"]]);export{V as default};
