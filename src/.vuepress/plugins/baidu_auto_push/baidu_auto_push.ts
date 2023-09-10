import { path } from "@vuepress/utils";
import { App, Plugin, PluginConfig } from "vuepress";
import { defineClientConfig } from '@vuepress/client'

/**
 * markdown 分享插件
 * @remarks
 * 在每篇文章后添加分享组件
 * @param options
 * @returns
 */
const baidu_auto_push = (options?: never) => {
	return (app: App): Plugin => {
		return {
			name: "baidu_auto_push",
			clientConfigFile: path.resolve(__dirname, './client.ts'),
		};
	};
};

export default baidu_auto_push;
