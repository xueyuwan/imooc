/**
 * Created by Administrator on 2016/10/26.
 */
var myPlayer = videojs('really-cool-video');
videojs("really-cool-video").ready(function(){
      var myPlayer = this;
    //加载页面进行播放器初始化
    myPlayer.ready(function() {
        myPlayer.play();
        playerInitVideo();
        shareVideo();
        //setsrc(player,"rtmp://192.168.30.21/live/test3","rtmp/flv");
    });

    // 开始或恢复播放
    myPlayer.on('play', function() {
        console.log('开始播放');
        //视频时长
        var howLongIsThis = myPlayer.duration();
        console.log(howLongIsThis);

        //声音大小
        var howLoudIsIt = myPlayer.volume();
        console.log(howLoudIsIt);
        //设置声音
        myPlayer.volume(0.5);

    });

    // 暂停播放
    myPlayer.on('pause', function() {
        console.log('暂停播放')
    });

    //播放结束
    myPlayer.on('ended', function() {
        console.log('下一节!');
    });

    //清晰度切换
    function playerInitVideo() {
        $videoPanelMenu = $(".vjs-fullscreen-control");
        $videoPanelMenu.before('<div class="vjs-subtitles-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button" tabindex="0" role="menuitem" aria-live="polite" aria-expanded="false" aria-haspopup="true">'
            + '<div class="vjs-menu" role="presentation">'
            + '<ul class="vjs-menu-content" role="menu">'
            + '<li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox"  onclick="changeUrl(this)">高清</li>'
            + '<li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemcheckbox"  onclick="changeUrl(this)">标清 </li>'
            + '</ul></div><span class="vjs-control-text">清晰度</span></div>');
    }

    //通过id获取DOM
    function get(index) {
        return document.getElementById(index);
    }
    //修改播放地址并播放
    function writeAddressAndPlay(index,url,type) {
        //播放器操作
        setsrc(index, url, type?type:"rtmp/flv");
        play(index);
    }
    //高清标清切换就是应用名加减HD
    function changeUrl(video) {
        var index = $(video).text();
        //获取当前播放的url
        var CurrentUrl = getCurrentAddr(player);
        $(".vjs-menu-item").removeClass("vjs-selected");
        $(video).addClass("vjs-selected");
        if (index == "高清") {
            if (CurrentUrl.indexOf("HD") == -1) {
                CurrentUrl = CurrentUrl + "HD";
            } else {
                return;
            }
        } else {
            if (CurrentUrl.indexOf("HD") != -1) {
                CurrentUrl = CurrentUrl.replace("HD", "");
            } else {
                return;
            }
        }
        //修改地址并播放
        writeAddressAndPlay(player, CurrentUrl);
    }

    //分享视频
    function shareVideo() {
        $videoPanelMenu= $(".vjs-fullscreen-control");
        $videoPanelMenu.before('<div class=" vjs-menu-button vjs-menu-button-popup vjs-control vjs-button" tabindex="0" role="menuitem" aria-live="polite" aria-expanded="false" aria-haspopup="true">'
            + '<li class="vjs-icon-share" tabindex="-1" onclick="shareTo(this)"></li>'
            + '</div>');
    }
    function shareTo(video){
      alert("分享到微信");
    }


//
//	//获取当前类型
//	function getCurrentType(idnex) {
//		return idnex.currentType();
//	}
    //获取当前播放地址
//	function getCurrentAddr(index) {
//		return index.currentSrc();
//	}
//	//获取当前播放时间
//	function getCurrentTime(index) {
//		return index.currentTime();
//	}
//	//获取当前网络状态
//	function networkState(index) {
//		return index.networkState();
//	}
//	//修改播放地址
//	function setsrc(index, url, type) {
//		index.src({
//			type : type,
//			src : url
//		});
//	}
//	//重载播放器
//	function reset(index) {
//		index.reset();
//		index.load();
//	}
//	//播放
//	function play(index) {
//		index.play();
//	}
//	//暂停
//	function pause(index) {
//		index.pause();
//	}
//

//	    myPlayer.on('timeupdate', function () {
//      // 如果 currentTime() === duration()，则视频已播放完毕
//      if (myPlayer.duration() != 0 && myPlayer.currentTime() === myPlayer.duration()) {
//          alert("播放结束！");
//      }
//      });


    //事件列表
    //durationchange
    //ended
    //error
    //firstplay
    //fullscreenchange
    //loadedalldata
    //loadeddata
    //loadedmetadata
    //loadstart
    //pause
    //play
    //progress
    //timeupdate
    //volumechange
    //resize
});