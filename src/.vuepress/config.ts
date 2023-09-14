import { componentsPlugin } from "vuepress-plugin-components";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { path } from "@vuepress/utils";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { redirectPlugin } from "vuepress-plugin-redirect";
import markdown_bottom_content from "./plugins/markdown_bottom_content.js";
import baidu_auto_push from "./plugins/baidu_auto_push/baidu_auto_push.js";

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
	head: [
		// 防止外部图片加载不了
		["meta", { name: "referrer", content: "no-referrer" }],
		// 百度网站所有权验证
		["meta", { name: "baidu-site-verification", content: "codeva-jUPycn44yb" }],
		// 防止缓存主页，缓存会导致内容不是最新的
		["meta", { "http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate" }],
		["meta", { "http-equiv": "Pragma", content: "no-cache" }],
		["meta", { "http-equiv": "Expires", content: "0" }],
	],
	plugins: [
		// 百度资源自动推送
		baidu_auto_push(),
		// sitemap 生成
		sitemapPlugin({
			hostname: "https://muzzik.gitee.io/",
		}),
		// seo 优化
		seoPlugin({
			hostname: "https://muzzik.gitee.io/",
			author: "muzzik",
			autoDescription: true,
		}),
		// googleAnalytics 统计服务
		googleAnalyticsPlugin({
			id: "G-164KYDBXDF",
		}),
		// markdown 底部内容
		markdown_bottom_content([
			"---",
			`<h3>📣 觉得很赞？分享给你的朋友吧！</h3><Share services="qq,qrcode" colorful />`,
		].join("\n")),
		// 组件库
		componentsPlugin({
			componentOptions: {
				share: {
					services: ["qq", "qrcode"],
				},
				fontIcon: {
					assets: [
						// MKSite
						"//at.alicdn.com/t/c/font_4195463_jsygxwuzcac.css",
						// MKSite-Demo
					],
					prefix: "iconfont ",
				},
			},
			components: ["Share", "FontIcon"],
		}),
		// 自动目录
		autoCatalogPlugin({
			orderGetter(page) {
				let dir_config = page.frontmatter.dir as any;

				if (dir_config?.index) {
					return dir_config.order;
				}

				return -new Date(page.date).getTime();
			},
		}),
		// 搜索框
		searchProPlugin({
			// 索引全部内容
			indexContent: true,
			// 为分类和标签添加索引
			customFields: [
				{
					getter: (page) => page.frontmatter.category as any,
					formatter: "分类：$content",
				},
				{
					getter: (page) => page.frontmatter.tag,
					formatter: "标签：$content",
				},
			],
		}),
		// 重定向
		redirectPlugin({
			hostname: "https://muzzik.gitee.io",
			config: {
				// 3.x获取像素颜色
				"/博客/笔记/Cocos/CocosCreator/3.x获取像素颜色.html": "/blog/notes/cocos/cocos-creator/2.html",
				// 类型安全的单例基类
				"/博客/笔记/编程语言/Typescript/类型安全的单例基类.html": "/blog/notes/language/typescript/2.html",
				// 如何更方便的使用 protobufjs
				"/博客/文章/如何更方便的使用%20protobufjs？看了你就知道.html": "/blog/article/10.html",
				// 项目案例/cc-plugin-protobufjs
				"/项目案例/cc-plugin-protobufjs/": "/project/cc-plugin-protobufjs/",
				// 项目案例/cc-plugin-asset-copy
				"/项目案例/cc-plugin-asset-copy/": "/project/cc-plugin-asset-copy/",
			}
		})
	],
	// Enable it with pwa
	// shouldPrefetch: false,
});
