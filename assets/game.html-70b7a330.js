import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as h,c,a as e,d as a,w as d,b as t,f as o}from"./app-40463a1e.js";const f={},u=e("h1",{id:"class-game",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-game","aria-hidden":"true"},"#"),t(" Class: game")],-1),m=e("p",null,"游戏全局功能",-1),_=e("h2",{id:"hierarchy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hierarchy","aria-hidden":"true"},"#"),t(" Hierarchy")],-1),p=e("code",null,"instance_base",-1),g=e("p",null,[t("↳ "),e("strong",null,[e("code",null,"game")])],-1),b=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),x=e("h3",{id:"accessors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessors","aria-hidden":"true"},"#"),t(" Accessors")],-1),k=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),y=o('<h2 id="accessors-1" tabindex="-1"><a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a> Accessors</h2><h3 id="restarting-b" tabindex="-1"><a class="header-anchor" href="#restarting-b" aria-hidden="true">#</a> restarting_b</h3><p>• <code>get</code> <strong>restarting_b</strong>(): <code>boolean</code></p><p>重启中</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>boolean</code></p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',7),w={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_game.ts#L22",target:"_blank",rel:"noopener noreferrer"},v=o('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="restart" tabindex="-1"><a class="header-anchor" href="#restart" aria-hidden="true">#</a> restart</h3><p>▸ <strong>restart</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>重启游戏</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><p><strong><code>Remarks</code></strong></p><p>请不要使用 cc.game.restart()，因为这会影响框架内的数据清理以及生命周期</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',9),D={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_game.ts#L37",target:"_blank",rel:"noopener noreferrer"},L=o('<hr><h3 id="pause" tabindex="-1"><a class="header-anchor" href="#pause" aria-hidden="true">#</a> pause</h3><p>▸ <strong>pause</strong>(<code>node_</code>, <code>recursion_b_?</code>): <code>void</code></p><p>暂停节点</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node_</code></td><td style="text-align:left;"><code>Node</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">目标节点</td></tr><tr><td style="text-align:left;"><code>recursion_b_</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">是否递归子节点</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',9),N={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_game.ts#L51",target:"_blank",rel:"noopener noreferrer"},R=o('<hr><h3 id="resume" tabindex="-1"><a class="header-anchor" href="#resume" aria-hidden="true">#</a> resume</h3><p>▸ <strong>resume</strong>(<code>node_</code>, <code>recursion_b_?</code>): <code>void</code></p><p>恢复节点</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node_</code></td><td style="text-align:left;"><code>Node</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">目标节点</td></tr><tr><td style="text-align:left;"><code>recursion_b_</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">是否递归子节点</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>',9),M={href:"https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_game.ts#L96",target:"_blank",rel:"noopener noreferrer"},F=e("hr",null,null,-1),K=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function P(T,V){const r=n("RouterLink"),s=n("ExternalLinkIcon"),l=n("Share");return h(),c("div",null,[e("p",null,[a(r,{to:"/mk-framework/api/"},{default:d(()=>[t("index")]),_:1}),t(" / game")]),u,m,_,e("ul",null,[e("li",null,[e("p",null,[a(r,{to:"/mk-framework/api/classes/instance_base.html"},{default:d(()=>[p]),_:1})]),g])]),b,x,e("ul",null,[e("li",null,[a(r,{to:"/mk-framework/api/classes/game.html#restarting_b"},{default:d(()=>[t("restarting_b")]),_:1})])]),k,e("ul",null,[e("li",null,[a(r,{to:"/mk-framework/api/classes/game.html#restart"},{default:d(()=>[t("restart")]),_:1})]),e("li",null,[a(r,{to:"/mk-framework/api/classes/game.html#pause"},{default:d(()=>[t("pause")]),_:1})]),e("li",null,[a(r,{to:"/mk-framework/api/classes/game.html#resume"},{default:d(()=>[t("resume")]),_:1})])]),y,e("p",null,[e("a",w,[t("assets/@framework/mk_game.ts:22"),a(s)])]),v,e("p",null,[e("a",D,[t("assets/@framework/mk_game.ts:37"),a(s)])]),L,e("p",null,[e("a",N,[t("assets/@framework/mk_game.ts:51"),a(s)])]),R,e("p",null,[e("a",M,[t("assets/@framework/mk_game.ts:96"),a(s)])]),F,K,a(l,{services:"qq,qrcode",colorful:""})])}const C=i(f,[["render",P],["__file","game.html.vue"]]);export{C as default};
