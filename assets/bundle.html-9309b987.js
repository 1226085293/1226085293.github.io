import{_ as i,r as o,o as h,c,a as e,d as s,w as r,b as t,f as a}from"./app-a2a95ffc.js";const u={},_=a('<h1 id="class-bundle" tabindex="-1"><a class="header-anchor" href="#class-bundle" aria-hidden="true">#</a> Class: bundle</h1><p>bundle 管理器</p><p><strong><code>Remarks</code></strong></p><ul><li><p>封装(加载/预加载)场景为 load_scene</p></li><li><p>支持(远程/本地) bundle</p></li><li><p>支持 bundle 热更</p></li><li><p>封装(bundle/scene)切换事件</p></li><li><p>支持 bundle 管理器，用于子游戏管理</p></li></ul><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2>',5),f=e("code",null,"instance_base",-1),b=e("p",null,[t("↳ "),e("strong",null,[e("code",null,"bundle")])],-1),p=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),m=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),t(" Constructors")],-1),E=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),g=e("h3",{id:"accessors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessors","aria-hidden":"true"},"#"),t(" Accessors")],-1),A=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),x=a('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new bundle</strong>()</p><h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides" aria-hidden="true">#</a> Overrides</h4>',4),k=e("h4",{id:"defined-in",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in","aria-hidden":"true"},"#"),t(" Defined in")],-1),w={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L61",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"properties-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties-1","aria-hidden":"true"},"#"),t(" Properties")],-1),M=e("h3",{id:"event",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#event","aria-hidden":"true"},"#"),t(" event")],-1),P=e("strong",null,"event",-1),F=e("code",null,"event_target",-1),K=e("code",null,"event_protocol",-1),B=e("p",null,"事件",-1),v=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),t(" Defined in")],-1),I={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L97",target:"_blank",rel:"noopener noreferrer"},L=a('<hr><h3 id="pre-bundle-s" tabindex="-1"><a class="header-anchor" href="#pre-bundle-s" aria-hidden="true">#</a> pre_bundle_s</h3><p>• <code>Optional</code> <strong>pre_bundle_s</strong>: <code>string</code></p><p>上个场景bundle</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',5),D={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L99",target:"_blank",rel:"noopener noreferrer"},R=e("hr",null,null,-1),N=e("h3",{id:"pre-scene-s",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre-scene-s","aria-hidden":"true"},"#"),t(" pre_scene_s")],-1),T=e("p",null,[t("• "),e("strong",null,"pre_scene_s"),t(": "),e("code",null,"string")],-1),C=e("p",null,"上个场景名",-1),q=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),V={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L101",target:"_blank",rel:"noopener noreferrer"},S=e("hr",null,null,-1),O=e("h3",{id:"bundle-map",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundle-map","aria-hidden":"true"},"#"),t(" bundle_map")],-1),H=e("strong",null,"bundle_map",-1),j=e("code",null,"Map",-1),z=e("code",null,"string",-1),G=e("code",null,"bundle_data",-1),J=e("p",null,"bundle列表",-1),Q=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),t(" Defined in")],-1),U={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L103",target:"_blank",rel:"noopener noreferrer"},W=a('<hr><h3 id="switch-scene-b" tabindex="-1"><a class="header-anchor" href="#switch-scene-b" aria-hidden="true">#</a> switch_scene_b</h3><p>• <strong>switch_scene_b</strong>: <code>boolean</code> = <code>false</code></p><p>切换场景状态</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>',5),X={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L105",target:"_blank",rel:"noopener noreferrer"},Y=a('<h2 id="accessors-1" tabindex="-1"><a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a> Accessors</h2><h3 id="bundle-s" tabindex="-1"><a class="header-anchor" href="#bundle-s" aria-hidden="true">#</a> bundle_s</h3><p>• <code>get</code> <strong>bundle_s</strong>(): <code>string</code></p><p>当前场景bundle</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',7),Z={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L108",target:"_blank",rel:"noopener noreferrer"},$=a('<p>• <code>set</code> <strong>bundle_s</strong>(<code>value_s_</code>): <code>void</code></p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_s_</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>',6),ee={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L112",target:"_blank",rel:"noopener noreferrer"},te=a('<hr><h3 id="scene-s" tabindex="-1"><a class="header-anchor" href="#scene-s" aria-hidden="true">#</a> scene_s</h3><p>• <code>get</code> <strong>scene_s</strong>(): <code>string</code></p><p>当前场景名</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>',7),se={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L117",target:"_blank",rel:"noopener noreferrer"},ne=a('<p>• <code>set</code> <strong>scene_s</strong>(<code>value_s</code>): <code>void</code></p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value_s</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>',6),re={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L121",target:"_blank",rel:"noopener noreferrer"},de=a('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><p>▸ <strong>set</strong>(<code>bundle_</code>): <code>void</code></p><p>设置 bundle 数据</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',5),ae=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),oe=e("td",{style:{"text-align":"left"}},[e("code",null,"bundle_")],-1),le={style:{"text-align":"left"}},ie=e("code",null,"bundle_data",-1),he=e("td",{style:{"text-align":"left"}},"bundle 信息",-1),ce=e("h4",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4","aria-hidden":"true"},"#"),t(" Returns")],-1),ue=e("p",null,[e("code",null,"void")],-1),_e=e("h4",{id:"defined-in-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-10","aria-hidden":"true"},"#"),t(" Defined in")],-1),fe={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L142",target:"_blank",rel:"noopener noreferrer"},be=a('<hr><h3 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> load</h3><p>▸ <strong>load</strong>(<code>args_</code>): <code>Promise</code>&lt;<code>null</code> | <code>Bundle</code>&gt;</p><p>加载 bundle</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4>',5),pe=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),me=e("td",{style:{"text-align":"left"}},[e("code",null,"args_")],-1),Ee={style:{"text-align":"left"}},ge=e("code",null,"string",-1),Ae=e("code",null,"load_config",-1),xe=e("td",{style:{"text-align":"left"}},"bundle 名 | 加载配置",-1),ke=e("h4",{id:"returns-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-5","aria-hidden":"true"},"#"),t(" Returns")],-1),we=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"null"),t(" | "),e("code",null,"Bundle"),t(">")],-1),ye=e("h4",{id:"defined-in-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-11","aria-hidden":"true"},"#"),t(" Defined in")],-1),Me={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L160",target:"_blank",rel:"noopener noreferrer"},Pe=a('<hr><h3 id="load-scene" tabindex="-1"><a class="header-anchor" href="#load-scene" aria-hidden="true">#</a> load_scene</h3><p>▸ <strong>load_scene</strong>(<code>scene_s_</code>, <code>config_?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>切换场景</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>',5),Fe=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Ke=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"scene_s_")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},"场景名")],-1),Be=e("td",{style:{"text-align":"left"}},[e("code",null,"config_?")],-1),ve={style:{"text-align":"left"}},Ie=e("code",null,"Partial",-1),Le=e("code",null,"switch_scene_config",-1),De=e("td",{style:{"text-align":"left"}},"切换配置",-1),Re=e("h4",{id:"returns-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-6","aria-hidden":"true"},"#"),t(" Returns")],-1),Ne=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"boolean"),t(">")],-1),Te=e("h4",{id:"defined-in-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-12","aria-hidden":"true"},"#"),t(" Defined in")],-1),Ce={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L222",target:"_blank",rel:"noopener noreferrer"},qe=a('<hr><h3 id="reload" tabindex="-1"><a class="header-anchor" href="#reload" aria-hidden="true">#</a> reload</h3><p>▸ <strong>reload</strong>(<code>bundle_</code>): <code>Promise</code>&lt;<code>null</code> | <code>Bundle</code>&gt;</p><p>重新加载 bundle</p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4>',5),Ve=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Se=e("td",{style:{"text-align":"left"}},[e("code",null,"bundle_")],-1),Oe={style:{"text-align":"left"}},He=e("code",null,"bundle_info",-1),je=e("code",null,"Required",-1),ze=e("code",null,"Pick",-1),Ge=e("code",null,"bundle_info",-1),Je=e("code",null,'"origin_s"',-1),Qe=e("h4",{id:"returns-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-7","aria-hidden":"true"},"#"),t(" Returns")],-1),Ue=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"null"),t(" | "),e("code",null,"Bundle"),t(">")],-1),We=e("h4",{id:"defined-in-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-13","aria-hidden":"true"},"#"),t(" Defined in")],-1),Xe={href:"https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/resources/mk_bundle.ts#L341",target:"_blank",rel:"noopener noreferrer"},Ye=e("hr",null,null,-1),Ze=e("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function $e(et,tt){const n=o("RouterLink"),d=o("ExternalLinkIcon"),l=o("Share");return h(),c("div",null,[e("p",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/"},{default:r(()=>[t("index")]),_:1}),t(" / bundle")]),_,e("ul",null,[e("li",null,[e("p",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/instance_base.html"},{default:r(()=>[f]),_:1})]),b])]),p,m,e("ul",null,[e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#constructor"},{default:r(()=>[t("constructor")]),_:1})])]),E,e("ul",null,[e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#event"},{default:r(()=>[t("event")]),_:1})]),e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#pre_bundle_s"},{default:r(()=>[t("pre_bundle_s")]),_:1})]),e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#pre_scene_s"},{default:r(()=>[t("pre_scene_s")]),_:1})]),e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#bundle_map"},{default:r(()=>[t("bundle_map")]),_:1})]),e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#switch_scene_b"},{default:r(()=>[t("switch_scene_b")]),_:1})])]),g,e("ul",null,[e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#bundle_s"},{default:r(()=>[t("bundle_s")]),_:1})]),e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#scene_s"},{default:r(()=>[t("scene_s")]),_:1})])]),A,e("ul",null,[e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#set"},{default:r(()=>[t("set")]),_:1})]),e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#load"},{default:r(()=>[t("load")]),_:1})]),e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#load_scene"},{default:r(()=>[t("load_scene")]),_:1})]),e("li",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle.html#reload"},{default:r(()=>[t("reload")]),_:1})])]),x,e("p",null,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/instance_base.html"},{default:r(()=>[t("instance_base")]),_:1}),t("."),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/instance_base.html#constructor"},{default:r(()=>[t("constructor")]),_:1})]),k,e("p",null,[e("a",w,[t("assets/@framework/resources/mk_bundle.ts:61"),s(d)])]),y,M,e("p",null,[t("• "),P,t(": "),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/event_target.html"},{default:r(()=>[F]),_:1}),t("<"),K,t(">")]),B,v,e("p",null,[e("a",I,[t("assets/@framework/resources/mk_bundle.ts:97"),s(d)])]),L,e("p",null,[e("a",D,[t("assets/@framework/resources/mk_bundle.ts:99"),s(d)])]),R,N,T,C,q,e("p",null,[e("a",V,[t("assets/@framework/resources/mk_bundle.ts:101"),s(d)])]),S,O,e("p",null,[t("• "),H,t(": "),j,t("<"),z,t(", "),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle_.bundle_data.html"},{default:r(()=>[G]),_:1}),t(">")]),J,Q,e("p",null,[e("a",U,[t("assets/@framework/resources/mk_bundle.ts:103"),s(d)])]),W,e("p",null,[e("a",X,[t("assets/@framework/resources/mk_bundle.ts:105"),s(d)])]),Y,e("p",null,[e("a",Z,[t("assets/@framework/resources/mk_bundle.ts:108"),s(d)])]),$,e("p",null,[e("a",ee,[t("assets/@framework/resources/mk_bundle.ts:112"),s(d)])]),te,e("p",null,[e("a",se,[t("assets/@framework/resources/mk_bundle.ts:117"),s(d)])]),ne,e("p",null,[e("a",re,[t("assets/@framework/resources/mk_bundle.ts:121"),s(d)])]),de,e("table",null,[ae,e("tbody",null,[e("tr",null,[oe,e("td",le,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle_.bundle_data.html"},{default:r(()=>[ie]),_:1})]),he])])]),ce,ue,_e,e("p",null,[e("a",fe,[t("assets/@framework/resources/mk_bundle.ts:142"),s(d)])]),be,e("table",null,[pe,e("tbody",null,[e("tr",null,[me,e("td",Ee,[ge,t(" | "),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle_.load_config.html"},{default:r(()=>[Ae]),_:1})]),xe])])]),ke,we,ye,e("p",null,[e("a",Me,[t("assets/@framework/resources/mk_bundle.ts:160"),s(d)])]),Pe,e("table",null,[Fe,e("tbody",null,[Ke,e("tr",null,[Be,e("td",ve,[Ie,t("<"),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle_.switch_scene_config.html"},{default:r(()=>[Le]),_:1}),t(">")]),De])])]),Re,Ne,Te,e("p",null,[e("a",Ce,[t("assets/@framework/resources/mk_bundle.ts:222"),s(d)])]),qe,e("table",null,[Ve,e("tbody",null,[e("tr",null,[Se,e("td",Oe,[s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle_.bundle_info.html"},{default:r(()=>[He]),_:1}),t(" & "),je,t("<"),ze,t("<"),s(n,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/classes/bundle_.bundle_info.html"},{default:r(()=>[Ge]),_:1}),t(", "),Je,t(">>")])])])]),Qe,Ue,We,e("p",null,[e("a",Xe,[t("assets/@framework/resources/mk_bundle.ts:341"),s(d)])]),Ye,Ze,s(l,{services:"qq,qrcode",colorful:""})])}const nt=i(u,[["render",$e],["__file","bundle.html.vue"]]);export{nt as default};
