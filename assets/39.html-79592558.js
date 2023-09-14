import{_ as c,r as s,o,c as l,e as i,a as n,b as a,d as e,f as u}from"./app-398de048.js";const r={},d=n("p",null,"首先，什么是内存对齐？",-1),k=n("p",null,"如果你不了解内存对齐，你应该会认为数据在内存上是一个接一个连续存储的，然而实际情况并非如此，数据是按照一定的规则在内存中摆放的，这个规则就是内存对齐的规则。为什么要内存对齐呢，这是因为各个硬件平台对存储空间的处理上有很大不同，一些平台对某些特定类型的数据只能从某些特定地址开始存取，这通常是因为要考虑存取数据的效率才如此设计的。比如有些平台每次读取都是从偶地址开始，如果一个int型（假设为32位）的变量存放在偶地址开始的地方，那么一个读周期就可以读出，而如果存放在奇地址开始的地方，就可能会需要两个读周期，并且对两次读出的结果的高低字节进行拼凑才能得到该int数据，这种情况效率下降很多。",-1),m=u(`<p>一般情况下我们不需要考虑内存对齐的问题，编译器会替我们选择适合目标平台的对齐策略，当有特殊需求时，我们也可以自定义数据的对齐规则。</p><p>如果你不了解内存对齐，你运行下面的代码</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">;</span>
        <span class="token keyword">char</span> b<span class="token punctuation">;</span>
        <span class="token keyword">short</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size is %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Test</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>int占4个字节，char占1个字节，short占2个字节，结构体的长度应该是7，但是运行的结果会是8.而如果我们把b和a互换一下位置</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
        <span class="token keyword">char</span> b<span class="token punctuation">;</span>
        <span class="token keyword">int</span> a<span class="token punctuation">;</span>
        <span class="token keyword">short</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size is %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Test</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果结果会变成12.</p><p>对齐规则可以这样理解，存放数据的起始地址要是数据自身长度的整数倍，也就是起始地址对自身长度取余结果为0，比如第一个成员变量的长度是1，起始存储位置为0x0000那么0x0000%1=0，所以是可以的。第二个成员变量的长度是4，如果按顺序存储，起始位置应该为0x0001,但是0x0001%4不等于0，所以要向后找符合规则的位置，直到0x0004，也就是说第一个变量到第二个变量之间的0x0001、0x0002和0x0003地址都是空着的。第三个成员变量的长度是2，紧接着第二个成员变量的起始位置是0x0008（0x0004-0x0007用来存储第二个变量）,而这个位置符合规则，所以可以使用。这样，这个结构体占用了从0x0000-0x0009的10个字节，为什么结果是12呢，这是因为除了每个成员变量需要对齐外，整个结构体也需要对齐，结构体的对齐要求是自身长度要是最大成员变量长度的整倍数,最大成员变量的长度是4，也就是说结构体的长度要是4的倍数，目前结构体长度是10，那么最理想的结果就是12了。这就是对齐的规则。</p><p>我们再来说一说如何自定义对齐规则，因为当涉及到客户端与服务端通信时通常都会用到。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">pack</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span></span>
    <span class="token keyword">struct</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
        <span class="token keyword">char</span> b<span class="token punctuation">;</span>
        <span class="token keyword">int</span> a<span class="token punctuation">;</span>
        <span class="token keyword">short</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">pack</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size is %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Test</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面代码，结果是8.代码#pragma pack(2)可以指定按2字节对齐，所以起始地址需要时2的整数倍，大家可以自己算一下结果是不是8.另外注意，#pragma pack()可以取消指定对齐，让代码恢复默认对齐规则。当客户端以结构体的形式传2进制流数据与服务端通信时，一般都按1字节对齐。</p>`,10),v={href:"https://www.cnblogs.com/zijintime/p/7515074.html",target:"_blank",rel:"noopener noreferrer"},b=n("hr",null,null,-1),h=n("h3",null,"📣 觉得很赞？分享给你的朋友吧！",-1);function _(w,x){const p=s("ExternalLinkIcon"),t=s("Share");return o(),l("div",null,[d,k,i(" more "),m,n("p",null,[a("来自"),n("a",v,[a("https://www.cnblogs.com/zijintime/p/7515074.html"),e(p)])]),b,h,e(t,{services:"qq,qrcode",colorful:""})])}const g=c(r,[["render",_],["__file","39.html.vue"]]);export{g as default};
