import{_ as t,r as c,o as r,c as o,d as s,f as p}from"./app-398de048.js";const a={},n=p('<p>【1236错误】情况如下: 1.client连接server<br> 　　　　 2.client发送消息到server<br> 　　　　 3.client使用closesocket(sock);<br> 　　　　 4.server接收到关闭socket消息 (lpNumberOfBytesTransferred为0, 注意：如果客户端发送的是空消息同样为零) 然后使用closesocket函数关闭了这个客户端的socket<br> 　　　　 5.这时候情况发生了，GetQueuedCompletionStatus函数返回false并且GetLastError() == 995 或者 1236</p><p>原因如下: 经过本人测试发现， 如果不向系统投递这个客户端recv操作， 那么客户端使用closesocket函数服务端是无法接收到消息的， 那么说明closesocket对于服务端来说也是一个特殊的recv操作,<br> 　　　　但是投递了接收操作却会出现995或者1236错误，995错误的说明是中止I/O操作引起的，但是我们已经接收到了客户端的close消息， 所以才说closesocket是特殊的recv操作,</p><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/language/cpp/42/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么1236错误呢？ 最开始我是在网络上查找这种错误说明，但是都没有太大的帮助， 直到我找到了一篇文章，上面是这样说的</p><figure><img src="https://gitee.com/muzzik/images/raw/master/blog/notes/language/cpp/42/2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们主要看第二条消息， 和我们的995错误是不是很类似，那么我们就可以假设是因为投递的I/O操作返回引起的</p><p>解决方法：<br> 　　　　既然是因为I/O操作未完成引起的，那么我们何不让它完成，这样就从根源上解决了问题发生，经过本人测试， 我们只需要让客户端再发一次消息，然后服务端再关闭客户端的socket, 这时候既没有出现995错误，也没有1235错误， 完美解决。</p><p>【WSASend或者WSARecv未接受到失败消息引起的资源未释放问题】</p><ol><li>发生情况：例：OVERLAPPED* overlapped = &amp;context-&gt;overlapped;<br> WSASend(context-&gt;accept, wsabuf, 1, &amp;bytes, flags, overlapped, NULL)，<br> 如果我们使用了自定义结构体中overlapped投递了send或者recv，然后又使用free或者delete释放了该结构的内存，那么GetQueuedCompletionStatus将不会返回失败消息，我们也就不会删除客户端信息，那么就会造成信息未释放的问题。<br> 2.解决办法：#1: 不要清理这块内存<br> #2: 只留下两种context, recv和send, recv可以充当accept的context，因为accept操作使用完之后就不再需要context了</li></ol><p>【AcceptEx返回10022】<br> 1.发生情况：使用DisconectEx返回成功后的socket<br> 2.解决办法：注意DisconnectEx的flags参数必须为 TF_REUSE_SOCKET，才是表示关闭连接并复用socket，为 0 则表示只关闭连接</p><p>【CreateIoCompletionPort返回87】<br> 1.发生情况：使用DisconectEx返回成功后的socket<br> 2.解决办法：其实复用的socket已经绑定了完成端口，不用第二次绑定，直接投递之后的recv或者send操作就好了</p><p>【WSASend返回10055】<br> 1.发生情况：投递多个send请求，且发送速度 &gt; 对方接受速度导致数据堆积占用非分页内存<br> 2.解决办法：1. 限制投递数量， 如果限制一个客户端同时只能存在一个send和recv请求（增加并发量，减少吞吐量，但是理论上并发过多还是可能会出现这种情况）<br> 　　　　　　2. 投递之前将WSABUF的缓存区size设置为0， 那么将不会锁定用户投递的缓存区，也不会占用非分页内存， 但是缓冲区将不会接收数据， 所以需要我们提前将客户端的连接socket使用setsocketopt函数设置非阻塞套接字，然后在收到接收通知或者发送通知的时候再使用recv/send函数取出客户端发来的数据或者再向客户端发送数据（提高吞吐量，降低并发量）</p><p>【客户端连接服务器返回10055】<br> 1.发生情况：大量并发客户端连接（不超过6w左右）<br> 2.解决办法：添加MaxUserPort参数到注册表， 添加之后除开系统底层和其他应用占用的端口单机应该能到6w左右并发量，如果有其他客户端机器可以突破这个数量</p><p>【客户端收不到全部消息】<br> 1.发生情况：注意客户端粘包<br> 2.解决办法：拆包</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>',16);function l(i,d){const e=c("Share");return r(),o("div",null,[n,s(e,{services:"qq,qrcode",colorful:""})])}const b=t(a,[["render",l],["__file","42.html.vue"]]);export{b as default};
