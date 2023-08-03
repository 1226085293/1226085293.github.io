import { navbar } from "vuepress-theme-hope";

export default navbar([
	// "/demo/",
	{
		text: "博客",
		icon: "yumaobi",
		link: "/posts/",
	},
	{
		text: "MK框架",
		icon: "kuangjiaguanli1",
		children: [
			{
				text: "新的开始",
				link: "",
				icon: "icon_A",
			},
			{
				text: "快速入门",
				link: "",
				icon: "rumen",
			},
			{
				text: "案例教程",
				link: "",
				icon: "anli-3",
			},
			{
				text: "API 接口",
				link: "",
				icon: "api1",
			},
		],
	},
	{
		text: "项目案例",
		link: "",
	},
	// {
	// 	text: "V2 文档",
	// 	icon: "book",
	// 	link: "https://theme-hope.vuejs.press/zh/",
	// },
]);
