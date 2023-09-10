import { defineClientConfig } from '@vuepress/client'
export default defineClientConfig({
  enhance({ app, router, siteData }){
    if(typeof document === 'undefined') return;
    // Client 环境下运行
    const bp = document.createElement("script");
    const curProtocol = window.location.protocol.split(":")[0];
    if (curProtocol === "https") {
      bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
    } else {
      bp.src = "http://push.zhanzhang.baidu.com/push.js";
    }
    const s = document.getElementsByTagName("script")[0];
    (s as any).parentNode.insertBefore(bp, s);
  }
})