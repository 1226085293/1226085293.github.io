import{_ as t,r as o,o as S,c as l,e as c,d as n,f as a}from"./app-9add3419.js";const r={},s=a("<ol><li>投递任意大小的缓冲区它都是立即返回</li><li>WSASend 返回成功只是表示将数据拷贝到了缓冲区</li><li>GetQueuedCompletionStatus 返回成功只表示发送成功，并不代表对方成功接收到数据</li><li>WSAWaitForMultipleEvents 和 WSAGetOverlappedResult 同 3 类似</li></ol><p>个人结论：网上的宣称投递 0 字节 WSASend 并没有什么卵用。WSASend 返回 WSAENOBUFS 不用理会，前提是你必须把发送缓冲列表里的数据放在 GetQueuedCompletionStatus 返回成功后删除，而不是在调用 WSASend 后删除，返回 WSAENOBUFS 即表示这次的发送失败。但上次发送的数据仍然在发送缓冲列表里。我们可以稍后重新发送</p><p>对于 WSAENOBUFS 的个人想法：可以使用一个 map&lt;SOCKET, char&gt;的对象，默认值为 0x00，如果出现 WSAENOBUFS 错误则将此客户端的加入 map 并将值  |=  投递的类型（默认为枚举），然后在 WSARecv 或者 WSASend 投递后在 GetQueuedCompletionStatus 返回成功后（返回成功即表示缓冲区空出了一块空间）检查此 map 是否为空，如果不为空则重新投递该对象的的 send 或者 recv 操作。</p><p>其次对于 WSARecv 操作：WSARecv 是可以投递 0 字节的，并且只会在缓冲区有数据的情况下返回，所以为了减少 WSAENOBUFS 发生的概率是可以投递 0 字节的 WSARecv 的。</p><p>浪费了好多时间在测试上面。。希望大家有心得体会可以交流一下</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>",7);function p(i,d){const e=o("Share");return S(),l("div",null,[c(" more "),s,n(e,{services:"qq,qrcode",colorful:""})])}const u=t(r,[["render",p],["__file","36.html.vue"]]);export{u as default};
