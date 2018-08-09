/**
 * 加载进度页面
 */
class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
    }

    private textField: egret.TextField;
    private bgImg: egret.Bitmap

    private createView(): void {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = 200;
        this.textField.size = 50;
        this.textField.y = this.stage.stageHeight / 2 + 80;
        console.log("宽：" + this.stage.stageWidth, "高：" + this.stage.stageHeight)
        this.textField.x = this.stage.stageWidth / 2 - 100;
        this.textField.textAlign = "center";

        let imageLoader: egret.ImageLoader = new egret.ImageLoader();
        imageLoader.once(egret.Event.COMPLETE, (e: egret.Event) => {
            let loader: egret.ImageLoader = <egret.ImageLoader>e.target;
            let textrue: egret.Texture = new egret.Texture();
            textrue.bitmapData = loader.data;
            this.bgImg = new egret.Bitmap(textrue);
            this.addChildAt(this.bgImg, 0);
            this.bgImg.width = this.stage.stageWidth;
            this.bgImg.height = this.stage.stageHeight;
        }, this);
        imageLoader.load("resource/res/loading_bg.png");
    }

    public onProgress(current: number, total: number): void {
        let per: number = Math.floor(current / total * 100);
        this.textField.text = `${per}%`;
    }
}
