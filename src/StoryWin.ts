class StoryWin extends eui.Component {
	public bg1: eui.Image;
	public scroller: eui.Scroller;
	public storyImg: eui.Image;
	public arect: eui.Rect;
	public bg2: eui.Image;
	public startBtn: eui.Button;
	private bgMask: eui.Rect;
	public timeOnEnterFrame: number = 0;
	private speed: number = 0.05;
	private maxNum: number = 0;

	public constructor() {
		super();
		this.skinName = "StorySkin";
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
	}

	private onAddToStage(): void {
		SK_GLOBAL.screenAuto(this);
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		this.timeOnEnterFrame = egret.getTimer();
		this.scroller.verticalScrollBar.autoVisibility = false;
		this.scroller.verticalScrollBar.visible = true;
		this.bg2.mask = this.bgMask;
	}

	private onClick(e: egret.TouchEvent): void {
		switch (e.target) {
			case this.startBtn:
				ScreenMovies.MovieStart(1)
				SK_GLOBAL.removeFromParent(this);
				SceneManager.instance.stage.addChild(new HomeWin())
				break;
		}
	}

	private onEnterFrame(e: egret.Event): void {
		let now = egret.getTimer();
		let time = this.timeOnEnterFrame;
		let pass = now - time;
		this.scroller.viewport.scrollV += this.speed * pass;
		this.timeOnEnterFrame = egret.getTimer();
		this.maxNum = this.scroller.viewport.contentHeight - this.scroller.height;
		if (this.scroller.viewport.scrollV >= this.maxNum) {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			this.startBtn.icon = "btn_skip_png";
			// if(this.arect && this.arect.parent != null){
			// 	this.arect.parent.removeChild(this.arect);
			// }
		} else {
			this.startBtn.icon = "btn_go_png";
		}

	}


	private removeFromStage(): void {

	}
}