import { App, Plugin, PluginConfig } from "vuepress";

/**
 * markdown 分享插件
 * @remarks
 * 在每篇文章后添加分享组件
 * @param options
 * @returns
 */
const markdown_share = (options?: never) => {
	return (app: App): Plugin => {
		return {
			name: "markdown_share",
			extendsMarkdown: (md, app) => {
				md.use((md) => {
					let old_render_f = md.renderer.render;

					md.renderer.render = function (...args_as: any[]) {
						// 排除 README.md 文件
						if (
							!(args_as[2].filePathRelative as string)?.endsWith("README.md") ??
							false
						) {
							// 分享 token
							const tokens = md.parse(
								[
									"---",
									"## :mega: 觉得很赞？分享给你的朋友吧！",
									`<Share services="qq,qrcode" colorful />`,
								].join("\n"),
								{}
							);

							// 添加额外的token
							args_as[0].push(...tokens);
						}

						return old_render_f.call(this, ...args_as);
					};
				});
			},
		};
	};
};
export default markdown_share;
