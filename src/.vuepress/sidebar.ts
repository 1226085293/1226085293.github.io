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
	],
	"/博客/": [
		"",
		{
			text: "随笔",
			prefix: "随笔/",
			icon: "shuji1",
			children: "structure",
			collapsible: true,
		},
		{
			text: "博客编写",
			prefix: "博客编写/",
			icon: "bianxie1",
			children: "structure",
			collapsible: true,
		},
	],
});
