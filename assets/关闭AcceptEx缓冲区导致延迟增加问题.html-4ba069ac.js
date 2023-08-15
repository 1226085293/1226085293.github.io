import{_ as t,r as c,o as i,c as o,e as a,a as s,f as n}from"./app-de3fcfd1.js";const r={},p=n('<p>经测试，在 AcceptEx 函数指针投递 accept 请求的时候如果把接收缓冲区的大小设置为零，那么 server 端消息到 client 端延迟会增加 10ms 左右（各机器性能不同...）    上对比图</p><figure><img src="https://img-blog.csdnimg.cn/20200413145933898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="关闭了缓冲区的server端" tabindex="0" loading="lazy"><figcaption>关闭了缓冲区的server端</figcaption></figure><figure><img src="https://img-blog.csdnimg.cn/20200413150016493.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="client端" tabindex="0" loading="lazy"><figcaption>client端</figcaption></figure><p>咱们先不看第一个 client 链接，因为程序启动耗时的原因，所以拿第二个举例， 第二个执行 WSASend 函数后的时间为 1586760772134(1900 年到现在的毫秒数)，  客户端的到达时间为 1586760772144， 共 10 毫秒， 由于本人做过多次试验，所以确定时间在 10 毫秒左右浮动，  接下来我们看正常缓冲区大小的收发用时</p><figure><img src="https://img-blog.csdnimg.cn/20200413150736720.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="带缓冲区的server端" tabindex="0" loading="lazy"><figcaption>带缓冲区的server端</figcaption></figure><figure><img src="https://img-blog.csdnimg.cn/20200413150816551.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Mzk4MzAx,size_16,color_FFFFFF,t_70" alt="client端" tabindex="0" loading="lazy"><figcaption>client端</figcaption></figure><p>大家可以看到，server 端的发送消息时间和 client 端的接收消息时间都为 1586761584231，0 毫秒的延迟， 证明之前 10 毫秒的延迟是因为我们关闭了接收缓冲区造成的，不知道系统是怎么操作的..<br>         但是，很重要的是，设置接收缓冲区大小为 0 有一个好处，就是可以防止拒绝服务攻击（连接上后就不发消息的 client），因为设置缓冲区大小为 0 后 windows 一收到连接请求就会通过 GetQueuedCompletionStatus 通知我们， 那么我们就可以尽快的做出处理，防止攻击， 而如果我们不设置缓冲区大小为 0 的话，windows 的机制就会将两个操作合并为一个，哪两个操作呢，那就是 accept 和客户端发出的第一组数据，写过 iocp 的都知道，客户端连接的时候 GetQueuedCompletionStatus 并不会通知我们，而是在第一组数据发出的时候才通知我们，这是易用也是不易用的地方。<br>         之前还在网上看过一种方法，就是不设置缓冲区大小为 0，但是定时用 getsockopt()函数(选项参数为 SO_CONNECT_TIME)来检查 AcceptEx()里守候的套接字，可以看到套接字的连接时间或者状态，但是，如果是在高流量的情况下，那么这种方案就有点不太管用，还会阻塞其他用户的连接，所以，我建议还是设置缓冲区为 0，就算会有一点延迟，但是会让我们的服务器更加安全。</p><p>另外针对连接后的 client 端，在网上也看到一个比较好的处理方案，就是投递 WSARecv 后先将连接后客户端放入 verctor 或者 list 中，设定一个时间间隔定时检查超时的连接，及时关闭并删除其数据，如果同一 ip 出现次数过多就判断为恶意连接加入黑名单，如果接收到数据结构中的 socket 发出的数据的时候再将其从中移除放入正常的管理列表。</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',10);function _(m,g){const e=c("Share");return i(),o("div",null,[a(" more "),p,s(e,{services:"qq,qrcode",colorful:""})])}const d=t(r,[["render",_],["__file","关闭AcceptEx缓冲区导致延迟增加问题.html.vue"]]);export{d as default};
