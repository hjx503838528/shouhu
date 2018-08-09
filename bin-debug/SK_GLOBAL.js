/**
 * -----------通用工具类----
 */
var SK_GLOBAL;
(function (SK_GLOBAL) {
    //获取当前面板
    function curStage() {
        return egret.MainContext.instance.stage;
    }
    SK_GLOBAL.curStage = curStage;
    //当前游戏宽度
    function curWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }
    SK_GLOBAL.curWidth = curWidth;
    //当前游戏宽度
    function curHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    SK_GLOBAL.curHeight = curHeight;
    //是不是大屏
    function isBigScreen() {
        return (document.body.clientHeight / document.body.clientWidth > 1.32);
    }
    SK_GLOBAL.isBigScreen = isBigScreen;
    //设置AUTO模式下EXML的分辨率自适应
    function screenAuto(target) {
        if (target != null) {
            target.left = 0;
            target.right = 0;
            target.top = 0;
            target.bottom = 0;
        }
    }
    SK_GLOBAL.screenAuto = screenAuto;
    function removeFromParent(child) {
        if (!child || child.parent == null)
            return;
        child.parent.removeChild(child);
    }
    SK_GLOBAL.removeFromParent = removeFromParent;
    //循环播放EGRET TWEEN动画
    function playTweenAnimation(target, isLoop) {
        if (isLoop) {
            for (var key in target.items) {
                target.items[key].props = { loop: true };
            }
        }
        target.play();
    }
    SK_GLOBAL.playTweenAnimation = playTweenAnimation;
    //播放RES声音: 路径,次数(次数为-1则无限)
    function PlayBgSound(soundurl, _cont) {
        if (soundurl != null) {
            var sound = RES.getRes(soundurl);
            sound.play(0, _cont);
            return sound;
        }
        else {
            console.log("声音文件为空！");
        }
    }
    SK_GLOBAL.PlayBgSound = PlayBgSound;
    //创建播放MovieClip动画： 动画名,加载的容器,x,y,动画组名,播放次数-1为无限,资源名
    function LoadMovieClipMovie(_movieName, _loadMc, _x, _y, GroupName, timers, _jsonname) {
        var data = RES.getRes(_jsonname + "_json");
        var txtr = RES.getRes(_jsonname + "_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var _mc = new egret.MovieClip(mcFactory.generateMovieClipData(GroupName));
        _mc.x = _x;
        _mc.y = _y;
        _loadMc.addChild(_mc);
        _mc.gotoAndPlay(_movieName, timers);
        _mc.addEventListener(egret.Event.COMPLETE, function (e) {
            //监听播放完毕直接移除掉
            _loadMc.removeChild(_mc);
        }, this);
        return _mc;
    }
    SK_GLOBAL.LoadMovieClipMovie = LoadMovieClipMovie;
    //计算时间截差 timer1-timer2 格式数据库默认转换 返回的是秒数*1000
    function timerOver(_timer1, _timer2) {
        //正则转换
        var _T1 = _timer1.replace(/-/g, '/');
        var _T2 = _timer2.replace(/-/g, '/');
        //转换成时间戳
        var date_t1 = Date.parse(_T1);
        var date_t2 = Date.parse(_T2);
        //计算时间差
        var usedTime = date_t1 - date_t2; //两个时间戳相差的毫秒数  
        var days = Math.floor(usedTime / (24 * 3600 * 1000));
        //计算出小时数  
        var leave1 = usedTime % (24 * 3600 * 1000); //计算天数后剩余的毫秒数  
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数  
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数  
        var minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);
        var time = hours + ":" + minutes + ":" + seconds;
        return time;
    }
    SK_GLOBAL.timerOver = timerOver;
})(SK_GLOBAL || (SK_GLOBAL = {}));
//# sourceMappingURL=SK_GLOBAL.js.map