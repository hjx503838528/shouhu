/**
 * MovieClip 动画类
 */
class MovieClip extends egret.Sprite {
	public _mcFactory: egret.MovieClipDataFactory;
	public _mc: egret.MovieClip;
	public str: string;

	public constructor(str: string) {
		super();
		this.str = str;
		let jsonData: any = RES.getRes(`${this.str}_json`);
		let texture: egret.Texture = RES.getRes(`${this.str}_png`);
		this._mcFactory = new egret.MovieClipDataFactory(jsonData, texture);
		this._mc = new egret.MovieClip(this._mcFactory.generateMovieClipData(`${this.str}`));
		this.addChild(this._mc);
		// this._mc.addEventListener(egret.Event.COMPLETE, () => {
		// 	if (this._mc && this._mc.parent != null) {
		// 		this._mc.parent.removeChild(this._mc);
		// 	}
		// 	this._mc = null;
		// }, this);
	}

	public gotoAndPlay(frame: string, num: number): void {
		this._mc.gotoAndPlay(frame, num);
	}

	public play(count: number) {
		this._mc.play(count);
	}

}