import{_ as t,r as i,o as n,c as u,e as s,d as o,f as l}from"./app-8f576f40.js";const r={},d=l(`<figure><img src="https://forum.cocos.org/uploads/default/original/3X/1/a/1a5e565a4796dbe52816402f307710827e7a6051.png" alt="" width="643" height="500" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>晚上试用了一下，</p><p>竟然支持我最爱的蛇形命名法<br><em>typescript-eslint + prettier</em></p><hr><p><em>配置如下，需要的可以根据自己习惯自行调整</em><br> package.json</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>{
	&quot;type&quot;: &quot;module&quot;,
	&quot;devDependencies&quot;: {
		&quot;@typescript-eslint/eslint-plugin&quot;: &quot;^5.34.0&quot;,
		&quot;@typescript-eslint/parser&quot;: &quot;^5.34.0&quot;,
		&quot;eslint&quot;: &quot;^8.22.0&quot;,
		&quot;eslint-config-prettier&quot;: &quot;^8.5.0&quot;,
		&quot;eslint-plugin-prettier&quot;: &quot;^4.2.1&quot;,
		&quot;typescript&quot;: &quot;^4.7.4&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>.eslintrc（注意前面有个点）</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>/**
 * &quot;off&quot; 或 0 - 关闭规则
 * &quot;warn&quot; 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
 * &quot;error&quot; 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */
{
	&quot;parser&quot;: &quot;@typescript-eslint/parser&quot;,
	&quot;parserOptions&quot;: {
		&quot;requireConfigFile&quot;: false,
		&quot;ecmaVersion&quot;: 6,
		&quot;sourceType&quot;: &quot;module&quot;,
		&quot;project&quot;: &quot;./tsconfig.json&quot;
	},
	&quot;plugins&quot;: [&quot;@typescript-eslint&quot;, &quot;eslint-plugin-prettier&quot;],
	&quot;extends&quot;: [&quot;plugin:@typescript-eslint/recommended&quot;, &quot;plugin:prettier/recommended&quot;],
	&quot;env&quot;: {
		&quot;browser&quot;: true,
		&quot;node&quot;: true
	},
	&quot;globals&quot;: {},
	&quot;rules&quot;: {
		&quot;@typescript-eslint/naming-convention&quot;: [
			&quot;error&quot;,
			{
				&quot;selector&quot;: &quot;variableLike&quot;,
				&quot;format&quot;: [&quot;snake_case&quot;],
				&quot;trailingUnderscore&quot;: &quot;allowSingleOrDouble&quot;
			}
		],
		&quot;@typescript-eslint/no-namespace&quot;: &quot;off&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>.eslintignore</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>node_modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要安装的需要把上面几个文件的内容复制到自己项目中，然后再 npm i ，再安装 vscode 内的 eslint 插件后重启 vscode 就行了</p><hr><h3>📣 觉得很赞？分享给你的朋友吧！</h3>`,15);function a(c,v){const e=i("Share");return n(),u("div",null,[s(" more "),d,o(e,{services:"qq,qrcode",colorful:""})])}const m=t(r,[["render",a],["__file","typescript-eslint 太香了.html.vue"]]);export{m as default};
