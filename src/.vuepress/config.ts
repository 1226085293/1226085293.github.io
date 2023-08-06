import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { path } from "@vuepress/utils";

export default defineUserConfig({
	base: "/",

	lang: "zh-CN",
	title: "MKSite",
	description: "你好，欢迎来到这个刚建立的网站",

	theme,

	alias: {
		// 覆盖默认首页组件
		"@theme-hope/modules/blog/components/BlogHero": path.join(
			__dirname,
			"./components/BlogHero.vue"
		),
	},

	// 构建输出目录
	dest: "docs",

	// 描述要附加到的标签<head> tag
	head: [["meta", { name: "referrer", content: "no-referrer" }]],
	// Enable it with pwa
	// shouldPrefetch: false,
});
