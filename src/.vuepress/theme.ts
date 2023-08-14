import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
	{
		// 纯净模式
		pure: true,
		// 网站域名
		hostname: "https://mister-hope.github.io",
		// 作者信息
		author: {
			name: "muzzik",
			// url: "https://mister-hope.com",
			email: "1226085293@qq.com",
		},
		// login
		logo: "/logo.png",
		// 仓库链接
		repo: "1226085293/1226085293.github.io",
		docsDir: "src",
		// navbar
		navbar,
		// 导航栏布局
		navbarLayout: {
			start: ["Brand", "Links"],
			center: ["Search"],
			end: ["Language", "Repo", "Outlook"],
		},
		// 全屏按钮
		fullscreen: true,

		// sidebar
		sidebar,
		// 页脚
		footer: "",
		// 展示页脚
		displayFooter: false,

		blog: {
			avatar: "/head.png",
			description:
				"游戏程序员，目前使用 CocosCreator 引擎，点击头像查看详细介绍",
			intro: "/intro.html",
			medias: {
				// Baidu: "https://example.com",
				// BiliBili: "https://example.com",
				// Bitbucket: "https://example.com",
				// Dingding: "https://example.com",
				// Discord: "https://example.com",
				// Dribbble: "https://example.com",
				// Email: "mailto:info@example.com",
				// Evernote: "https://example.com",
				// Facebook: "https://example.com",
				// Flipboard: "https://example.com",
				Gitee: "https://gitee.com/muzzik/",
				GitHub: "https://github.com/1226085293",
				// Gitlab: "https://example.com",
				// Gmail: "mailto:info@example.com",
				// Instagram: "https://example.com",
				// Lark: "https://example.com",
				// Lines: "https://example.com",
				// Linkedin: "https://example.com",
				// Pinterest: "https://example.com",
				// Pocket: "https://example.com",
				QQ: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=SIRf-LnAakBKUbNj1qaZXEbT0NfrQ2xs&authKey=FRcqp1iKWSQgJdBMnbjjfxN27dJlFbXXNfjO3QNkyVF0CnQO90HOlWcEGFqC3o6D&noverify=0&group_code=200351945",
				// Qzone: "https://example.com",
				// Reddit: "https://example.com",
				// Rss: "https://example.com",
				// Steam: "https://example.com",
				// Twitter: "https://example.com",
				// Wechat: "https://example.com",
				// Weibo: "https://example.com",
				// Whatsapp: "https://example.com",
				// Youtube: "https://example.com",
				// Zhihu: "https://example.com",
				// MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
			},
		},

		encrypt: {
			config: {
				"/博客/博客编写/encrypt.html": ["1234"],
			},
		},

		// page meta
		metaLocales: {
			editLink: "在 GitHub 上编辑此页",
		},

		plugins: {
			blog: true,

			// 评论插件配置
			comment: {
				// You should generate and use your own comment service
				provider: "Giscus",
				repo: "1226085293/1226085293.github.io",
				repoId: "R_kgDOJ6pmwg",
				category: "General",
				categoryId: "DIC_kwDOJ6pmws4CX20J",
				mapping: "title",
			},
			// all features are enabled for demo, only preserve features you need here
			mdEnhance: {
				align: true,
				attrs: true,
				chart: true,
				card: true,
				codetabs: true,
				demo: true,
				echarts: true,
				figure: true,
				flowchart: true,
				gfm: true,
				imgLazyload: true,
				imgSize: true,
				include: true,
				katex: true,
				mark: true,
				mermaid: true,
				playground: {
					presets: ["ts", "vue"],
				},
				presentation: ["highlight", "math", "search", "notes", "zoom"],
				stylize: [
					{
						matcher: "Recommended",
						replacer: ({ tag }) => {
							if (tag === "em")
								return {
									tag: "Badge",
									attrs: { type: "tip" },
									content: "Recommended",
								};
						},
					},
				],
				sub: true,
				sup: true,
				tabs: true,
				vPre: true,
				vuePlayground: true,
			},

			// uncomment these if you want a PWA
			// pwa: {
			//   favicon: "/favicon.ico",
			//   cacheHTML: true,
			//   cachePic: true,
			//   appendBase: true,
			//   apple: {
			//     icon: "/assets/icon/apple-icon-152.png",
			//     statusBarColor: "black",
			//   },
			//   msTile: {
			//     image: "/assets/icon/ms-icon-144.png",
			//     color: "#ffffff",
			//   },
			//   manifest: {
			//     icons: [
			//       {
			//         src: "/assets/icon/chrome-mask-512.png",
			//         sizes: "512x512",
			//         purpose: "maskable",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-mask-192.png",
			//         sizes: "192x192",
			//         purpose: "maskable",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-512.png",
			//         sizes: "512x512",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-192.png",
			//         sizes: "192x192",
			//         type: "image/png",
			//       },
			//     ],
			//     shortcuts: [
			//       {
			//         name: "Demo",
			//         short_name: "Demo",
			//         url: "/demo/",
			//         icons: [
			//           {
			//             src: "/assets/icon/guide-maskable.png",
			//             sizes: "192x192",
			//             purpose: "maskable",
			//             type: "image/png",
			//           },
			//         ],
			//       },
			//     ],
			//   },
			// },
		},

		// 侧边栏排序（README.md，文件夹(order)，文件(date)）
		sidebarSorter(v_a, v_b) {
			let order_a =
				(v_a["filename"] ?? "") === "README.md"
					? -9999999999999
					: v_a.type === "dir"
					? v_a.order!
					: -new Date(v_a.frontmatter!.date! ?? 0).getTime();
			let order_b =
				(v_b["filename"] ?? "") === "README.md"
					? -9999999999999
					: v_b.type === "dir"
					? v_b.order!
					: -new Date(v_b.frontmatter!.date! ?? 0).getTime();

			return order_a - order_b;
		},
	},
	{ custom: true }
);
