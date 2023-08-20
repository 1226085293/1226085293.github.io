import { componentsPlugin } from "vuepress-plugin-components";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { path } from "@vuepress/utils";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import markdown_share from "./plugins/markdown_share";

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
		["meta", { name: "baidu-site-verification", content: "codeva-7r485RpqNE" }],
	],
	plugins: [
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
	],
	// Enable it with pwa
	// shouldPrefetch: false,
});
