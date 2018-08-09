/**
 * 场景管理类
 */
class SceneManager {
	private _stage: egret.DisplayObjectContainer // 设置所有场景所在的舞台(根)
	public mainScene: Main //主场景

	constructor() {
		this.mainScene = new Main()
	}

    /**
     * 获取实例
     */
	static sceneManager: SceneManager
	static get instance() {
		if (!this.sceneManager) {
			this.sceneManager = new SceneManager()
		}
		return this.sceneManager
	}

	/**
	* 设置根场景
	*/
	public set stage(s: egret.DisplayObjectContainer) {
		this._stage = s;
	}

	public get stage(): egret.DisplayObjectContainer {
		return this._stage;
	}
}