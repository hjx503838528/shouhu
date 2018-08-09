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
 * 加载进度页面
 */
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var _this = this;
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = 200;
        this.textField.size = 50;
        this.textField.y = this.stage.stageHeight / 2 + 80;
        console.log("宽：" + this.stage.stageWidth, "高：" + this.stage.stageHeight);
        this.textField.x = this.stage.stageWidth / 2 - 100;
        this.textField.textAlign = "center";
        var imageLoader = new egret.ImageLoader();
        imageLoader.once(egret.Event.COMPLETE, function (e) {
            var loader = e.target;
            var textrue = new egret.Texture();
            textrue.bitmapData = loader.data;
            _this.bgImg = new egret.Bitmap(textrue);
            _this.addChildAt(_this.bgImg, 0);
            _this.bgImg.width = _this.stage.stageWidth;
            _this.bgImg.height = _this.stage.stageHeight;
        }, this);
        imageLoader.load("resource/res/loading_bg.png");
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var per = Math.floor(current / total * 100);
        this.textField.text = per + "%";
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map