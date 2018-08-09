var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StoryWin = (function (_super) {
    __extends(StoryWin, _super);
    function StoryWin() {
        var _this = _super.call(this) || this;
        _this.timeOnEnterFrame = 0;
        _this.speed = 0.05;
        _this.maxNum = 0;
        _this.skinName = "StorySkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        return _this;
    }
    StoryWin.prototype.onAddToStage = function () {
        SK_GLOBAL.screenAuto(this);
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
        this.scroller.verticalScrollBar.autoVisibility = false;
        this.scroller.verticalScrollBar.visible = true;
        this.bg2.mask = this.bgMask;
    };
    StoryWin.prototype.onClick = function (e) {
        switch (e.target) {
            case this.startBtn:
                ScreenMovies.MovieStart(1);
                SK_GLOBAL.removeFromParent(this);
                SceneManager.instance.stage.addChild(new HomeWin());
                break;
        }
    };
    StoryWin.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        this.scroller.viewport.scrollV += this.speed * pass;
        this.timeOnEnterFrame = egret.getTimer();
        this.maxNum = this.scroller.viewport.contentHeight - this.scroller.height;
        if (this.scroller.viewport.scrollV >= this.maxNum) {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.startBtn.icon = "btn_skip_png";
            // if(this.arect && this.arect.parent != null){
            // 	this.arect.parent.removeChild(this.arect);
            // }
        }
        else {
            this.startBtn.icon = "btn_go_png";
        }
    };
    StoryWin.prototype.removeFromStage = function () {
    };
    return StoryWin;
}(eui.Component));
__reflect(StoryWin.prototype, "StoryWin");
//# sourceMappingURL=StoryWin.js.map