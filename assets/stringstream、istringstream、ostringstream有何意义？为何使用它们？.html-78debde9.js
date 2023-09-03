import{_ as r,r as n,o,c as _,e as a,a as i,b as t,d as s}from"./app-88f3be70.js";const l={},c=t("p",null,[s("std::stringstream 所能办到的事 std::string 也能办到，那它"),t("strong",null,"有何意义呢？"),t("br"),s(" ······我在实际使用中发现，std::stringstream 变量可以使用 << 输入数字类型。而 std::string.append 只能连接字符串。"),t("br"),s(" ······所以用 std::stringstream 会更加便捷。std::stringstream 的 str()函数是返回的一个"),t("strong",null,"std::string"),s("临时变量，所以我们在使用过程中最好用一个"),t("strong",null,"std::string temp(std::stringstream 变量)"),s(" 来接收这个临时变量。防止后面多次调用 str()创建不必要的临时变量。")],-1),d=t("hr",null,null,-1),m=t("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function g(u,h){const e=n("Share");return o(),_("div",null,[a(" more "),c,d,m,i(e,{services:"qq,qrcode",colorful:""})])}const f=r(l,[["render",g],["__file","stringstream、istringstream、ostringstream有何意义？为何使用它们？.html.vue"]]);export{f as default};
