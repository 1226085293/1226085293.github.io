import { App, Plugin, PluginConfig } from "vuepress";

/**
 * markdown 底部内容
 * @remarks
 * 在每篇 markdown 后添加内容
 * @param content_s_ markdown 格式内容
 * @returns
 */
const markdown_bottom_content = (content_s_: string) => {
	return (app: App): Plugin => {
		return {
			name: "markdown_share",
			extendsMarkdown: (md, app) => {
				md.use((md) => {
					let old_render_f = md.renderer.render;

					md.renderer.render = function (...args_as: any[]) {
						if (
							// 存在内容
							args_as[0].length &&
							// 排除非文件
							args_as[2].filePath &&
							// 排除 README.md 文件
							(!(args_as[2].filePathRelative as string)?.endsWith(
								"README.md"
							) ??
								false)
						) {
							const tokens = md.parse(content_s_, {});

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
export default markdown_bottom_content;
