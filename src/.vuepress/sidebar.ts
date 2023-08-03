import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	"/": [
		"",
		// {
		//   text: "如何使用",
		//   icon: "laptop-code",
		//   prefix: "demo/",
		//   link: "demo/",
		//   children: "structure",
		// },
		{
			text: "文章",
			prefix: "博客/",
			icon: "shuji1",
			children: "structure",
		},
		// {
		// 	text: "博客编写",
		// 	prefix: "博客/博客编写/",
		// 	icon: "bianxie1",
		// 	children: "structure",
		// 	collapsible: true,
		// },
		// "intro",
		// "slides",
	],
});
