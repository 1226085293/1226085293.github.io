import{_ as t,o,c as n,d as c,a as e,b as _}from"./app-6edb3506.js";const l={},s=e("p",null,"大家或多或少都用过单例模式，那么我就在这里和大家说说这两种单例的区别：",-1),r=e("p",null,[e("em",null,"导出式单例"),_("： 例如： export default new A; //A 是一个类"),e("br"),_(" 这种单例很方便， 但也是因为方便，这个导出的单例在我们 导入时就已经创建好了对象，如果一直使用这种单例方式那么随着我们脚本越来越多，你会发现启动速度越来越慢。特别是在 construct 里面初始化资源或者计算的一些类，会严重拖慢启动速度。。")],-1),a=e("p",null,[e("em",null,"函数式单例"),_("： 这个才是正确的使用方式，在第一次获取时创建，构造也能分开进行。可以减少程序启动的时间。其实这个单例什么都好，就是写多了单例类之后你就会发现。每次都要添加重复的函数和实例变量。还占用了一些代码空间。这让强迫症患者有点难受。")],-1);function d(u,m){return o(),n("div",null,[c(" more "),s,r,a])}const i=t(l,[["render",d],["__file","导出式单例和函数式单例的区别.html.vue"]]);export{i as default};
