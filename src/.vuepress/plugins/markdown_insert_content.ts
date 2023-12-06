import { App, Plugin, PluginConfig } from "vuepress";

/**
 * markdown 内容插入
 * @remarks
 * @param content_ 插入内容
 * @returns
 */
const markdown_insert_content = (content_: {
	/** 元数据 */
	frontmatter_tab?: Record<string, string>;
	/** markdown 头 */
	markdown_header_s?: string;
	/** markdown 尾 */
	markdown_tail_s?: string;
}) => {
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
							// 元数据
							if (content_.frontmatter_tab) {
								Object.assign(args_as[2].frontmatter, content_.frontmatter_tab)
							}

							// 头
							if (content_.markdown_header_s) {
								(args_as[0] as any[]).unshift(...md.parse(content_.markdown_header_s, {}));
							}

							// 尾
							if (content_.markdown_tail_s) {
								(args_as[0] as any[]).push(...md.parse(content_.markdown_tail_s, {}));
							}
						}

						return old_render_f.call(this, ...args_as);
					};
				});
			},
		};
	};
};
export default markdown_insert_content;
