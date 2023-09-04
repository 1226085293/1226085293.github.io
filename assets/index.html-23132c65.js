import{_ as a,r as o,o as u,c as _,e as s,b as t,a as n,w as d,d as e,f as i}from"./app-3f7f50e9.js";const r={},E=i(`<h2 id="guide-manage-class" tabindex="-1"><a class="header-anchor" href="#guide-manage-class" aria-hidden="true">#</a> guide_manage class</h2><p>引导管理器</p><p><strong>Signature:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">mk_guide_manage</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="remarks" tabindex="-1"><a class="header-anchor" href="#remarks" aria-hidden="true">#</a> Remarks</h2><ul><li><p>支持多实例</p></li><li><p>支持任意步骤的(插入/删除)</p></li><li><p>支持(暂停/完成)引导</p></li><li><p>支持任意步骤跳转后的状态还原(操作单元)</p></li><li><p>引导步骤脚本分离，支持组件式挂载</p></li></ul><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h2>`,7),c=t("thead",null,[t("tr",null,[t("th",null,"Constructor"),t("th",null,"Modifiers"),t("th",null,"Description")])],-1),h=t("td",null,null,-1),m=t("td",null,[e("Constructs a new instance of the "),t("code",null,"mk_guide_manage"),e(" class")],-1),A=t("h2",{id:"properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),e(" Properties")],-1),p=t("thead",null,[t("tr",null,[t("th",null,"Property"),t("th",null,"Modifiers"),t("th",null,"Type"),t("th",null,"Description")])],-1),g=t("td",null,[t("code",null,"readonly")],-1),f=t("td",null,"number",-1),k=t("td",null,"结束步骤",-1),b=t("td",null,null,-1),M=t("td",null,"事件",-1),B=t("td",null,[t("code",null,"readonly")],-1),P=t("td",null,"boolean",-1),I=t("td",null,"完成状态",-1),F=t("td",null,null,-1),K=t("td",null,"boolean",-1),v=t("td",null,"暂停状态",-1),y=t("td",null,null,-1),x=t("td",null,"步骤表",-1),C=t("h2",{id:"methods",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),e(" Methods")],-1),D=t("thead",null,[t("tr",null,[t("th",null,"Method"),t("th",null,"Modifiers"),t("th",null,"Description")])],-1),w=t("td",null,null,-1),N=t("td",null,"完成引导",-1),V=t("td",null,null,-1),R=t("td",null,"获取步骤",-1),L=t("td",null,null,-1),S=t("td",null,"注册步骤",-1),T=t("td",null,null,-1),H=t("td",null,"运行引导",-1),j=t("td",null,null,-1),q=t("td",null,"设置当前步骤",-1);function z(G,J){const l=o("RouterLink");return u(),_("div",null,[s(" Do not edit this file. It is automatically generated by API Documenter. "),t("p",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/"},{default:d(()=>[e("Home")]),_:1}),e(" > "),n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/"},{default:d(()=>[e("mk")]),_:1}),e(" > "),n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/README.md/"},{default:d(()=>[e("guide_manage")]),_:1})]),E,t("table",null,[c,t("tbody",null,[t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/@_constructor_/"},{default:d(()=>[e("(constructor)(init_)")]),_:1})]),h,m])])]),A,t("table",null,[p,t("tbody",null,[t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/end_step_n/"},{default:d(()=>[e("end_step_n")]),_:1})]),g,f,k]),t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/event/"},{default:d(()=>[e("event")]),_:1})]),b,t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/event_target/"},{default:d(()=>[e("mk_event_target")]),_:1}),s(" "),e("<"),n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage_/event_protocol/"},{default:d(()=>[e("mk_guide_manage_.event_protocol")]),_:1}),s(" "),e(">")]),M]),t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/finish_b/"},{default:d(()=>[e("finish_b")]),_:1})]),B,P,I]),t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/pause_b/"},{default:d(()=>[e("pause_b")]),_:1})]),F,K,v]),t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/step_map/"},{default:d(()=>[e("step_map")]),_:1})]),y,t("td",null,[e("Map<number, "),n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_step_base/"},{default:d(()=>[e("mk_guide_step_base")]),_:1}),s(" "),e("<any>>")]),x])])]),C,t("table",null,[D,t("tbody",null,[t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/finish/"},{default:d(()=>[e("finish()")]),_:1})]),w,N]),t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/get_step/"},{default:d(()=>[e("get_step()")]),_:1})]),V,R]),t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/regis/"},{default:d(()=>[e("regis(step_)")]),_:1})]),L,S]),t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/run/"},{default:d(()=>[e("run()")]),_:1})]),T,H]),t("tr",null,[t("td",null,[n(l,{to:"/MK%E6%A1%86%E6%9E%B6/API%20%E6%8E%A5%E5%8F%A3/mk/guide_manage/set_step/"},{default:d(()=>[e("set_step(step_n_, init_data_)")]),_:1})]),j,q])])])])}const Q=a(r,[["render",z],["__file","index.html.vue"]]);export{Q as default};
