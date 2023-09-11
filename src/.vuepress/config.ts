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
import markdown_share from "./plugins/markdown_share";
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
		// markdown 分享
		markdown_share(),
		// 组件库
		componentsPlugin({
			componentOptions: {
				share: {
					services: ["qq", "qrcode"],
				},
				fontIcon: {
					assets: [
						// MKSite
						"//at.alicdn.com/t/c/font_4195463_oa2g6h145dc.css",
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
				// 3.x
				"/博客/笔记/Cocos/CocosCreator/3.x获取像素颜色.html": "/blog/notes/cocos/cocos-creator/2.html",
				// 3.x获取像素颜色
				"/%E5%8D%9A%E5%AE%A2/%E7%AC%94%E8%AE%B0/Cocos/CocosCreator/3.x%E8%8E%B7%E5%8F%96%E5%83%8F%E7%B4%A0%E9%A2%9C%E8%89%B2.html": "/blog/notes/cocos/cocos-creator/2.html",
				// 类型安全的单例基类
				"/%E5%8D%9A%E5%AE%A2/%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/Typescript/%E7%B1%BB%E5%9E%8B%E5%AE%89%E5%85%A8%E7%9A%84%E5%8D%95%E4%BE%8B%E5%9F%BA%E7%B1%BB.html": "/blog/notes/language/typescript/2.html",
				// 如何更方便的使用 protobufjs
				"/%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0/%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B9%E4%BE%BF%E7%9A%84%E4%BD%BF%E7%94%A8%20protobufjs%EF%BC%9F%E7%9C%8B%E4%BA%86%E4%BD%A0%E5%B0%B1%E7%9F%A5%E9%81%93.html": "/blog/article/10.html"
			}
		})
	],
	// Enable it with pwa
	// shouldPrefetch: false,
});
