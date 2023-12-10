import{_ as n,o as s,c as a,e as t,a as p,f as e}from"./app-34fdaf7d.js";const o={},c=p("p",null,"在 CocosCreator 中，最近的版本不会删除多余的 meta 文件（只有 meta 文件而没有对应文件）",-1),i=e(`<p>直接用 GPT 生成的代码改了下，直接用 ts-node 运行就行，deleteMetaFiles 参数替换为自己项目的路径</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&quot;fs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">deleteMetaFiles</span><span class="token punctuation">(</span>folderPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 读取文件夹中的内容</span>
	fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span>folderPath<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> files<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error reading folder:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 遍历文件夹中的每个文件或文件夹</span>
		files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>folderPath<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 检查当前路径是否是文件夹</span>
			fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> stats<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error retrieving file stats:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">return</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>

				<span class="token keyword">if</span> <span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// 如果是文件夹，则递归调用 deleteMetaFiles() 函数来处理子文件夹</span>
					<span class="token function">deleteMetaFiles</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filePath<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.meta&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// 如果是文件，并且存在相应的 .meta 文件，则删除它</span>
					<span class="token keyword">const</span> metaFilePath <span class="token operator">=</span> filePath<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>metaFilePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						fs<span class="token punctuation">.</span><span class="token function">unlink</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
							<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
								<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error deleting .meta file:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
							<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
								<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Deleted .meta file:&quot;</span><span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
							<span class="token punctuation">}</span>
						<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用函数开始遍历并删除单独的 .meta 文件</span>
<span class="token function">deleteMetaFiles</span><span class="token punctuation">(</span><span class="token string">&quot;I:/creator/mk_framework/assets&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function l(u,k){return s(),a("div",null,[c,t(" more "),i])}const d=n(o,[["render",l],["__file","17.html.vue"]]);export{d as default};
