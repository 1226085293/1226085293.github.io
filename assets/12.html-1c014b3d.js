import{_ as s,r as a,o as r,c as d,e as l,a as e,b as i,d as n,f as v}from"./app-2959652e.js";const c={},u=v(`<blockquote><p>没啥好说出的直接上代码，当做笔记了</p></blockquote><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import * as cc from &quot;cc&quot;;
import { _decorator, Component, Node } from &quot;cc&quot;;

const { ccclass, property } = _decorator;
@ccclass(&quot;webcam&quot;)
export class webcam extends Component {
	/* --------------- 属性 --------------- */
	/** 摄像机输出 */
	@property({ displayName: &quot;摄像机输出&quot;, type: cc.Sprite })
	camera_sprite: cc.Sprite = null!;
	/* --------------- private --------------- */
	/** 初始化状态 */
	private _init_b = false;
	private _h5_canvas!: HTMLCanvasElement;
	private _h5_video!: HTMLVideoElement;
	private _image = new cc.ImageAsset();
	private _spriteFrame = new cc.SpriteFrame();
	/* ------------------------------- 生命周期 ------------------------------- */
	async onLoad() {
		this._h5_canvas = document.createElement(&quot;canvas&quot;);
		this._h5_video = document.createElement(&quot;video&quot;);

		this._h5_video.setAttribute(&quot;autoplay&quot;, &quot;&quot;);
		this._h5_video.setAttribute(&quot;muted&quot;, &quot;&quot;);
		this._h5_video.setAttribute(&quot;playsinline&quot;, &quot;&quot;);

		self.navigator.mediaDevices
			.getUserMedia({
				video: {
					facingMode: &quot;environment&quot;,
				},
			})
			.then(async (stream) =&gt; {
				this._h5_video.srcObject = stream;
				this._h5_video.play();
				this.camera_sprite.spriteFrame = this._spriteFrame;
				this._init_b = true;
			})
			.catch((error) =&gt; {
				console.log(error.code, error.message, error);
			});
	}

	update() {
		if (!this._init_b) {
			return;
		}
		this.updateTexture();
	}
	/* ------------------------------- 功能 ------------------------------- */
    updateTexture() {
		/** 绘制到 canvas */
		this._h5_canvas
			.getContext(&quot;2d&quot;)!
			.drawImage(this._h5_video, 0, 0, this._h5_canvas.width, this._h5_canvas.height);
		let new_texture = new cc.Texture2D();
		this._image.reset(this._h5_canvas);
		new_texture.image = this._image;
		this.camera_sprite.spriteFrame!.texture?.decRef();
		this.camera_sprite.spriteFrame!.texture = new_texture;
		this.camera_sprite.markForUpdateRenderData();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> # 注意事项</h2><ul><li>ios 平台必须使用 https 才可以访问摄像头</li></ul><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> # 参考链接</h2>`,5),o={href:"https://blog.csdn.net/mevicky/article/details/102968980",target:"_blank",rel:"noopener noreferrer"},m={href:"http://t.zoukankan.com/linus-tan-p-13571573.html",target:"_blank",rel:"noopener noreferrer"};function b(_,h){const t=a("ExternalLinkIcon");return r(),d("div",null,[l(" more "),u,e("ul",null,[e("li",null,[e("a",o,[i("localhost 启动 https 的方式"),n(t)])]),e("li",null,[e("a",m,[i("Window 下 openssl 的安装教程"),n(t)])])])])}const q=s(c,[["render",b],["__file","12.html.vue"]]);export{q as default};