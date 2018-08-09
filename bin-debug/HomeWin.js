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
var HomeWin = (function (_super) {
    __extends(HomeWin, _super);
    function HomeWin() {
        var _this = _super.call(this) || this;
        /**一次动画 */
        _this.isOne = 0;
        _this.skinName = "HomeSkin";
        SK_GLOBAL.screenAuto(_this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        return _this;
    }
    HomeWin.prototype.onAddToStage = function () {
        var _this = this;
        /**按钮 */
        this.btnMc = new MovieClip("btn");
        this.mcCon.addChild(this.btnMc);
        this.btnMc.x = -(this.btnMc.width / 2 + 30);
        this.btnMc.gotoAndPlay("up", -1);
        this.btnMc._mc.addEventListener(egret.Event.LOOP_COMPLETE, this.btnMcHandler, this);
        this.btnMc._mc.addEventListener(egret.Event.COMPLETE, function () {
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
        this.gestureMc._mc.addEventListener(egret.Event.COMPLETE, function () {
            if (_this.gestureMc && _this.gestureMc.parent != null) {
                _this.gestureMc.parent.removeChild(_this.gestureMc);
            }
            _this.gestureMc = null;
        }, this);
    };
    HomeWin.prototype.onClick = function (e) {
        ScreenMovies.MovieStart(2);
        SK_GLOBAL.removeFromParent(this);
        SceneManager.instance.stage.addChild(new StoryWin());
        // this.btnMc.gotoAndPlay("down", 1);
        switch (e.target) {
            case this.btnMc:
                console.log("----");
                // if (!this.isOnClick){
                // 	this.btnMc.gotoAndPlay("down", 1);
                // 	this.isOnClick = true;
                // }
                break;
        }
    };
    HomeWin.prototype.btnMcHandler = function () {
        var _this = this;
        if (this.isOne == 0) {
            egret.setTimeout(function () {
                _this.btnMc.gotoAndPlay("down", -1);
            }, this, 900);
        }
        else if (this.isOne < 3) {
            this.btnMc.gotoAndPlay("up", -1);
        }
        else {
            this.btnMc._mc.removeEventListener(egret.Event.LOOP_COMPLETE, this.btnMcHandler, this);
        }
        this.isOne++;
    };
    HomeWin.prototype.removeFromStage = function () {
    };
    return HomeWin;
}(eui.Component));
__reflect(HomeWin.prototype, "HomeWin");
//# sourceMappingURL=HomeWin.js.map