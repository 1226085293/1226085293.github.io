import { navbar } from "vuepress-theme-hope";

export default navbar([
	// "/demo/",
	{
		text: "博客",
		icon: "yumaobi",
		link: "/blog/",
	},
	{
		text: "MK框架",
		icon: "kuangjiaguanli1",
		children: [
			{
				text: "新的开始",
				link: "/mk-framework/1",
				icon: "icon_A",
			},
			{
				text: "快速入门",
				link: "/mk-framework/quick-start",
				icon: "rumen",
			},
			{
				text: "功能模块",
				link: "/mk-framework/module",
				icon: "kuangjiaguanli1",
			},
			{
				text: "案例教程",
				link: "/mk-framework/tutorial",
				icon: "anli-3",
			},
			{
				text: "API 接口",
				link: "/mk-framework/api",
				icon: "api1",
			},
		],
	},
	{
		text: "项目产品",
		icon: "mangguo",
		link: "/project/",
	},
	// {
	// 	text: "V2 文档",
	// 	icon: "book",
	// 	link: "https://theme-hope.vuejs.press/zh/",
	// },
]);
