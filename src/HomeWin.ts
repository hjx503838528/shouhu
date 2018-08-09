class HomeWin extends eui.Component {
	public bg: eui.Image;
	public startBtn: eui.Button;
	public mcCon: eui.Group;
	public btnMc: MovieClip;
	public gestureMc: MovieClip;
	private isOnClick: boolean;
	public constructor() {
		super();
		this.skinName = "HomeSkin";
		SK_GLOBAL.screenAuto(this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
	}

	private onAddToStage(): void {
		/**按钮 */
		this.btnMc = new MovieClip("btn");
		this.mcCon.addChild(this.btnMc);
		this.btnMc.x = -(this.btnMc.width / 2 + 30);
		this.btnMc.gotoAndPlay("up", -1)
		this.btnMc._mc.addEventListener(egret.Event.LOOP_COMPLETE, this.btnMcHandler, this);
		this.btnMc._mc.addEventListener(egret.Event.COMPLETE, () => {
			// this.isOnClick = false;
			// ScreenMovies.MovieStart(2);
			// SK_GLOBAL.removeFromParent(this);
			// SceneManager.instance.stage.addChild(new StoryWin())
		}, this);
		this.mcCon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.btnMc.touchEnabled = false;
		/**手势 */
		this.gestureMc = new MovieClip("gesture");
		this.mcCon.addChild(this.gestureMc);
		this.gestureMc.touchEnabled = false;
		this.gestureMc.x = -20;
		this.gestureMc.y = -40;
		this.gestureMc.play(1);
		this.gestureMc._mc.addEventListener(egret.Event.COMPLETE, () => {
			if (this.gestureMc && this.gestureMc.parent != null) {
				this.gestureMc.parent.removeChild(this.gestureMc);
			}
			this.gestureMc = null;
		}, this);
	}

	private onClick(e: egret.TouchEvent): void {
		ScreenMovies.MovieStart(2);
		SK_GLOBAL.removeFromParent(this);
		SceneManager.instance.stage.addChild(new StoryWin())
		// this.btnMc.gotoAndPlay("down", 1);
		switch (e.target) {
			case this.btnMc:
				console.log("----")
				// if (!this.isOnClick){
				// 	this.btnMc.gotoAndPlay("down", 1);
				// 	this.isOnClick = true;
				// }
				break;
		}
	}

	/**一次动画 */
	private isOne: number = 0;
	private btnMcHandler(): void {
		if (this.isOne == 0) {
			egret.setTimeout(() => {
				this.btnMc.gotoAndPlay("down", -1);
			}, this, 900);
		} else if (this.isOne < 3) {
			this.btnMc.gotoAndPlay("up", -1);
		} else {
			this.btnMc._mc.removeEventListener(egret.Event.LOOP_COMPLETE, this.btnMcHandler, this);
		}
		this.isOne++
	}

	private removeFromStage(): void {

	}
}