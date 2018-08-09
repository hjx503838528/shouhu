/**
 * 场景切换特效类
//切换场景的特效
//1.卷帘特效
//2.左右切换移动
//3.直接翻
//4.旋转掉落
//5.随机一种
 */
module ScreenMovies {
	//当前舞台
	export function MovieStart(_txnums) {
		//创建一个截图Bitmap
		let taget = SK_GLOBAL.curStage()
		let w = SK_GLOBAL.curWidth();
		let h = SK_GLOBAL.curHeight()
		//新建一个group
		let loadTxGrp = new eui.Group();
		loadTxGrp.width = w;
		loadTxGrp.height = h;
		taget.addChild(loadTxGrp)
		//循环创建多个截图bitmap 这里num自由设置
		let tx1Number = 40;
		//每个横着的数量
		let Xnumber = 5;
		//高数量自动计算
		let Ynumber = tx1Number / Xnumber;
		for (let i = 0; i < tx1Number; i++) {
			//计算每个的XY及宽高
			let _mcW = w / Xnumber;
			let _mcH = h / Ynumber;
			let _mcX = i % Xnumber * _mcW;
			let _mcY = Math.floor(i / Xnumber) * _mcH;

			let renderTexture: egret.RenderTexture = new egret.RenderTexture();
			let mypic = renderTexture.drawToTexture(taget, new egret.Rectangle(_mcX, _mcY, _mcW, _mcH));
			let bmp = new egret.Bitmap;
			bmp.texture = renderTexture;
			bmp.anchorOffsetX = _mcW / 2
			bmp.anchorOffsetY = _mcH / 2
			bmp.x = _mcX + _mcW / 2;
			bmp.y = _mcY + _mcH / 2;
			loadTxGrp.addChild(bmp);
			if (_txnums == 5) {
				_txnums = Math.ceil(Math.random() * 4)
			}
			//开始特效
			switch (_txnums) {
				case 1:
					egret.Tween.get(bmp).to({ scaleX: 0, scaleY: 0, alpha: 0, rotation: 359 }, 800, egret.Ease.circIn).call(onComplete, this);
					break;
				case 2:
					let my_x = -w
					if (!(i % 2)) {
						my_x = w * 2
					}
					egret.Tween.get(bmp).to({ x: my_x, alpha: 0 }, 800, egret.Ease.circIn).call(onComplete, this);
					break;
				case 3:
					egret.Tween.get(bmp).to({ scaleX: 0.2, scaleY: 1, alpha: 0, blurFliter: 0 }, 800, egret.Ease.backInOut).call(onComplete, this);
					break;
				case 4:
					egret.Tween.get(bmp).to({ alpha: 0 }, 900, egret.Ease.circIn).call(onComplete, this)
					break;
				default:
					egret.Tween.get(bmp).to({ scaleX: 1, scaleY: 0, alpha: 0 }, 800, egret.Ease.circIn).call(onComplete, this);
			}
		}
		let upNumber = 0;
		function onComplete(evt: Comment) {
			upNumber++
			if (upNumber == tx1Number) {
				taget.removeChild(loadTxGrp)
			}
		}
	}
}