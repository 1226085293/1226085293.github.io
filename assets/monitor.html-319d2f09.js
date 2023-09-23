import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c as h,a as e,d,w as r,b as t,f as o}from"./app-cdbc9bfa.js";const f={},y=e("h1",{id:"class-monitor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-monitor","aria-hidden":"true"},"#"),t(" Class: monitor")],-1),g=e("p",null,"数据监听器（类型安全）",-1),_=e("p",null,[e("strong",null,[e("code",null,"Remarks")])],-1),x=e("p",null,"可以用以 mvvm 搭建及使用，注意：监听回调仅在下一帧被调用",-1),m=e("h2",{id:"hierarchy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hierarchy","aria-hidden":"true"},"#"),t(" Hierarchy")],-1),b=e("code",null,"instance_base",-1),p=e("p",null,[t("↳ "),e("strong",null,[e("code",null,"monitor")])],-1),u=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),k=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),T=o('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="wait" tabindex="-1"><a class="header-anchor" href="#wait" aria-hidden="true">#</a> wait</h3><p>▸ <strong>wait</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>等待监听回调执行完成</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">键</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',11),w={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L116",target:"_blank",rel:"noopener noreferrer"},v=o('<hr><h3 id="on-recursion" tabindex="-1"><a class="header-anchor" href="#on-recursion" aria-hidden="true">#</a> on_recursion</h3><p>▸ <strong>on_recursion</strong>(<code>value_</code>, <code>on_callback_f_</code>, <code>target_?</code>): <code>void</code></p><p>递归监听数据更新</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>on_callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>any</code>&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',9),D={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L138",target:"_blank",rel:"noopener noreferrer"},N=o('<p>▸ <strong>on_recursion</strong>(<code>value_</code>, <code>on_callback_f_</code>, <code>off_callback_f_</code>, <code>target_?</code>): <code>void</code></p><p>递归监听数据更新</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>on_callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>any</code>&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>off_callback_f_</code></td><td style="text-align:left;"><code>type_off_callback</code></td><td style="text-align:left;">off 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',7),P={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L146",target:"_blank",rel:"noopener noreferrer"},L=o('<hr><h3 id="on" tabindex="-1"><a class="header-anchor" href="#on" aria-hidden="true">#</a> on</h3><p>▸ <strong>on</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>on_callback_f_</code>, <code>target_?</code>): <code>null</code> | <code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</p><p>监听数据更新</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>on_callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>null</code> | <code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>',11),R={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L181",target:"_blank",rel:"noopener noreferrer"},M=o('<p>▸ <strong>on</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>on_callback_f_</code>, <code>off_callback_f_</code>, <code>target_?</code>): <code>null</code> | <code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</p><p>监听数据更新</p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>on_callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>off_callback_f_</code></td><td style="text-align:left;"><code>type_off_callback</code></td><td style="text-align:left;">off 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>null</code> | <code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>',9),F={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L195",target:"_blank",rel:"noopener noreferrer"},K=o('<hr><h3 id="once" tabindex="-1"><a class="header-anchor" href="#once" aria-hidden="true">#</a> once</h3><p>▸ <strong>once</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>on_callback_f_</code>, <code>target_?</code>): <code>null</code> | <code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</p><p>监听单次数据更新</p><h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>on_callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code>null</code> | <code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>',11),V={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L226",target:"_blank",rel:"noopener noreferrer"},q=o('<p>▸ <strong>once</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>on_callback_f_</code>, <code>off_callback_f_</code>, <code>target_?</code>): <code>null</code> | <code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</p><p>监听单次数据更新</p><h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>on_callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>off_callback_f_</code></td><td style="text-align:left;"><code>type_off_callback</code></td><td style="text-align:left;">off 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4><p><code>null</code> | <code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',9),B={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L240",target:"_blank",rel:"noopener noreferrer"},C=o('<hr><h3 id="off-recursion" tabindex="-1"><a class="header-anchor" href="#off-recursion" aria-hidden="true">#</a> off_recursion</h3><p>▸ <strong>off_recursion</strong>(<code>value_</code>, <code>target_?</code>): <code>Promise</code>&lt;<code>any</code>&gt;</p><p>递归取消监听数据更新</p><h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定目标</td></tr></tbody></table><h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>any</code>&gt;</p><h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>',9),E={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L270",target:"_blank",rel:"noopener noreferrer"},S=o('<p>▸ <strong>off_recursion</strong>(<code>value_</code>, <code>on_callback_f_</code>, <code>target_?</code>): <code>Promise</code>&lt;<code>any</code>&gt;</p><p>递归取消监听数据更新</p><h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>on_callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>any</code>&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定目标</td></tr></tbody></table><h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>any</code>&gt;</p><h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>',7),I={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L277",target:"_blank",rel:"noopener noreferrer"},H=o('<hr><h3 id="off" tabindex="-1"><a class="header-anchor" href="#off" aria-hidden="true">#</a> off</h3><p>▸ <strong>off</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>target_?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>取消监听数据更新</p><h4 id="type-parameters-5" tabindex="-1"><a class="header-anchor" href="#type-parameters-5" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定目标</td></tr></tbody></table><h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>',11),j={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L317",target:"_blank",rel:"noopener noreferrer"},z=o('<p>▸ <strong>off</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>on_callback_f_</code>, <code>target_?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>取消监听数据更新</p><h4 id="type-parameters-6" tabindex="-1"><a class="header-anchor" href="#type-parameters-6" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>on_callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定目标</td></tr></tbody></table><h4 id="returns-10" tabindex="-1"><a class="header-anchor" href="#returns-10" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-10" tabindex="-1"><a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a> Defined in</h4>',9),A={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L325",target:"_blank",rel:"noopener noreferrer"},G=o('<hr><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h3><p>▸ <strong>clear</strong>(<code>target_</code>): <code>null</code> | <code>Promise</code>&lt;<code>any</code>[]&gt;</p><p>清理对象绑定的数据</p><h4 id="parameters-11" tabindex="-1"><a class="header-anchor" href="#parameters-11" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target_</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-11" tabindex="-1"><a class="header-anchor" href="#returns-11" aria-hidden="true">#</a> Returns</h4><p><code>null</code> | <code>Promise</code>&lt;<code>any</code>[]&gt;</p><h4 id="defined-in-11" tabindex="-1"><a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a> Defined in</h4>',9),J={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L343",target:"_blank",rel:"noopener noreferrer"},O=o('<hr><h3 id="enable" tabindex="-1"><a class="header-anchor" href="#enable" aria-hidden="true">#</a> enable</h3><p>▸ <strong>enable</strong>(<code>target_</code>): <code>void</code></p><p>启用 on 事件</p><h4 id="parameters-12" tabindex="-1"><a class="header-anchor" href="#parameters-12" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target_</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-12" tabindex="-1"><a class="header-anchor" href="#returns-12" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1"><a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a> Defined in</h4>',9),Q={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L377",target:"_blank",rel:"noopener noreferrer"},U=o('<p>▸ <strong>enable</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>target_?</code>): <code>void</code></p><p>启用 on 事件</p><h4 id="type-parameters-7" tabindex="-1"><a class="header-anchor" href="#type-parameters-7" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-13" tabindex="-1"><a class="header-anchor" href="#parameters-13" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-13" tabindex="-1"><a class="header-anchor" href="#returns-13" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-13" tabindex="-1"><a class="header-anchor" href="#defined-in-13" aria-hidden="true">#</a> Defined in</h4>',9),W={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L384",target:"_blank",rel:"noopener noreferrer"},X=o('<p>▸ <strong>enable</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>callback_f_</code>, <code>target_?</code>): <code>void</code></p><p>启用 on 事件</p><h4 id="type-parameters-8" tabindex="-1"><a class="header-anchor" href="#type-parameters-8" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-14" tabindex="-1"><a class="header-anchor" href="#parameters-14" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-14" tabindex="-1"><a class="header-anchor" href="#returns-14" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-14" tabindex="-1"><a class="header-anchor" href="#defined-in-14" aria-hidden="true">#</a> Defined in</h4>',9),Y={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L392",target:"_blank",rel:"noopener noreferrer"},Z=o('<hr><h3 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> disable</h3><p>▸ <strong>disable</strong>(<code>target_</code>): <code>void</code></p><p>禁用 on 事件</p><h4 id="parameters-15" tabindex="-1"><a class="header-anchor" href="#parameters-15" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target_</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-15" tabindex="-1"><a class="header-anchor" href="#returns-15" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-15" tabindex="-1"><a class="header-anchor" href="#defined-in-15" aria-hidden="true">#</a> Defined in</h4>',9),$={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L401",target:"_blank",rel:"noopener noreferrer"},ee=o('<p>▸ <strong>disable</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>target_?</code>): <code>void</code></p><p>禁用 on 事件</p><h4 id="type-parameters-9" tabindex="-1"><a class="header-anchor" href="#type-parameters-9" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-16" tabindex="-1"><a class="header-anchor" href="#parameters-16" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-16" tabindex="-1"><a class="header-anchor" href="#returns-16" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-16" tabindex="-1"><a class="header-anchor" href="#defined-in-16" aria-hidden="true">#</a> Defined in</h4>',9),te={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L408",target:"_blank",rel:"noopener noreferrer"},de=o('<p>▸ <strong>disable</strong>&lt;<code>T</code>, <code>T2</code>&gt;(<code>value_</code>, <code>key_</code>, <code>callback_f_</code>, <code>target_?</code>): <code>void</code></p><p>禁用 on 事件</p><h4 id="type-parameters-10" tabindex="-1"><a class="header-anchor" href="#type-parameters-10" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-17" tabindex="-1"><a class="header-anchor" href="#parameters-17" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">监听对象</td></tr><tr><td style="text-align:left;"><code>key_</code></td><td style="text-align:left;"><code>T2</code></td><td style="text-align:left;">监听键</td></tr><tr><td style="text-align:left;"><code>callback_f_</code></td><td style="text-align:left;"><code>type_on_callback</code>&lt;<code>T</code>[<code>T2</code>]&gt;</td><td style="text-align:left;">on 触发回调</td></tr><tr><td style="text-align:left;"><code>target_?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">绑定对象</td></tr></tbody></table><h4 id="returns-17" tabindex="-1"><a class="header-anchor" href="#returns-17" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-17" tabindex="-1"><a class="header-anchor" href="#defined-in-17" aria-hidden="true">#</a> Defined in</h4>',9),ae={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_monitor.ts#L416",target:"_blank",rel:"noopener noreferrer"},oe=e("hr",null,null,-1),le=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function re(ne,ce){const l=n("RouterLink"),a=n("ExternalLinkIcon"),c=n("Share");return i(),h("div",null,[e("p",null,[d(l,{to:"/mk-framework/api/"},{default:r(()=>[t("index")]),_:1}),t(" / monitor")]),y,g,_,x,m,e("ul",null,[e("li",null,[e("p",null,[d(l,{to:"/mk-framework/api/classes/instance_base.html"},{default:r(()=>[b]),_:1})]),p])]),u,k,e("ul",null,[e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#wait"},{default:r(()=>[t("wait")]),_:1})]),e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#on_recursion"},{default:r(()=>[t("on_recursion")]),_:1})]),e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#on"},{default:r(()=>[t("on")]),_:1})]),e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#once"},{default:r(()=>[t("once")]),_:1})]),e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#off_recursion"},{default:r(()=>[t("off_recursion")]),_:1})]),e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#off"},{default:r(()=>[t("off")]),_:1})]),e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#clear"},{default:r(()=>[t("clear")]),_:1})]),e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#enable"},{default:r(()=>[t("enable")]),_:1})]),e("li",null,[d(l,{to:"/mk-framework/api/classes/monitor.html#disable"},{default:r(()=>[t("disable")]),_:1})])]),T,e("p",null,[e("a",w,[t("assets/@framework/mk_monitor.ts:116"),d(a)])]),v,e("p",null,[e("a",D,[t("assets/@framework/mk_monitor.ts:138"),d(a)])]),N,e("p",null,[e("a",P,[t("assets/@framework/mk_monitor.ts:146"),d(a)])]),L,e("p",null,[e("a",R,[t("assets/@framework/mk_monitor.ts:181"),d(a)])]),M,e("p",null,[e("a",F,[t("assets/@framework/mk_monitor.ts:195"),d(a)])]),K,e("p",null,[e("a",V,[t("assets/@framework/mk_monitor.ts:226"),d(a)])]),q,e("p",null,[e("a",B,[t("assets/@framework/mk_monitor.ts:240"),d(a)])]),C,e("p",null,[e("a",E,[t("assets/@framework/mk_monitor.ts:270"),d(a)])]),S,e("p",null,[e("a",I,[t("assets/@framework/mk_monitor.ts:277"),d(a)])]),H,e("p",null,[e("a",j,[t("assets/@framework/mk_monitor.ts:317"),d(a)])]),z,e("p",null,[e("a",A,[t("assets/@framework/mk_monitor.ts:325"),d(a)])]),G,e("p",null,[e("a",J,[t("assets/@framework/mk_monitor.ts:343"),d(a)])]),O,e("p",null,[e("a",Q,[t("assets/@framework/mk_monitor.ts:377"),d(a)])]),U,e("p",null,[e("a",W,[t("assets/@framework/mk_monitor.ts:384"),d(a)])]),X,e("p",null,[e("a",Y,[t("assets/@framework/mk_monitor.ts:392"),d(a)])]),Z,e("p",null,[e("a",$,[t("assets/@framework/mk_monitor.ts:401"),d(a)])]),ee,e("p",null,[e("a",te,[t("assets/@framework/mk_monitor.ts:408"),d(a)])]),de,e("p",null,[e("a",ae,[t("assets/@framework/mk_monitor.ts:416"),d(a)])]),oe,le,d(c,{services:"qq,qrcode",colorful:""})])}const he=s(f,[["render",re],["__file","monitor.html.vue"]]);export{he as default};
