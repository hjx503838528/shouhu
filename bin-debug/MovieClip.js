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
/**
 * MovieClip 动画类
 */
var MovieClip = (function (_super) {
    __extends(MovieClip, _super);
    function MovieClip(str) {
        var _this = _super.call(this) || this;
        _this.str = str;
        var jsonData = RES.getRes(_this.str + "_json");
        var texture = RES.getRes(_this.str + "_png");
        _this._mcFactory = new egret.MovieClipDataFactory(jsonData, texture);
        _this._mc = new egret.MovieClip(_this._mcFactory.generateMovieClipData("" + _this.str));
        _this.addChild(_this._mc);
        return _this;
        // this._mc.addEventListener(egret.Event.COMPLETE, () => {
        // 	if (this._mc && this._mc.parent != null) {
        // 		this._mc.parent.removeChild(this._mc);
        // 	}
        // 	this._mc = null;
        // }, this);
    }
    MovieClip.prototype.gotoAndPlay = function (frame, num) {
        this._mc.gotoAndPlay(frame, num);
    };
    MovieClip.prototype.play = function (count) {
        this._mc.play(count);
    };
    return MovieClip;
}(egret.Sprite));
__reflect(MovieClip.prototype, "MovieClip");
//# sourceMappingURL=MovieClip.js.map