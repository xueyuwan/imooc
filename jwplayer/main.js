/**
 * Created by Administrator on 2016/10/27.
 */
var player = jwplayer("player");
player.setup({
    "image": 'jwplayer/video/temp.jpg',
    "logo": {
        file: 'jwplayer/video/logo2.png',
        link: 'http://www.alvye.cn/',
        position: 'top-left',
    },
    "height": 650,
    "width":"1220",//可为百分比 "100%"，
    "stretching": "fill",//uniform,fill,none
    "abouttext": "关于旅烨",
    "aboutlink": "http://www.alvye.cn/",

    // skin: {
    //     name: "roundster"  // beelden，bekle，five，glow，roundster，seven，six，stormtrooper，vapor
    //  },
    // "flashplayer": "https://<your_CDN_ID>.cloudfront.net/assets/jwplayer.flash.swf",
    // "html5player": "https://<your_CDN_ID>.cloudfront.net/assets/jwplayer.html5.js",
    // "primary": "html5",

    "playlist": [{ //*****************第一个视频**********************************************
        //文件路径
        "file": "http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4",
        "sources": [
            {
                "file": "http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4",
                "mediaTypes": [
                    "video/webm; codecs=\"vp9\"",
                    "audio/webm; codecs=\"vorbis\""
                ],
                "type": "application/dash+xml",
            },
            {
                "file": "http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4",
                "type": "hls",
            },
            {
                "duration": 203,
                "file": "http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4",
                "height": 180,
                "label": "320px",
                "type": "video/mp4",
                "width": 320
            },
            {
                "duration": 33,
                "file": "http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4",
                "height": 270,
                "label": "480px",
                "type": "video/mp4",
                "width": 480
            },
            {
                "duration": 33,
                "file": "http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4",
                "height": 406,
                "label": "720px",
                "type": "video/mp4",
                "width": 720
            },
            {
                "duration": 33,
                "file": "http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4",
                "height": -1,
                "label": "Audio",
                "type": "audio/mp4",
                "width": -1
            }
        ],
        "related": {
            "file":"jwplayer/video/video.mp4"
        },
        //字幕
        "tracks": [
            {
                "file": "jwplayer/zimu/zimu.srt",
                "kind": "captions",
                "label": "字幕",
                "default":"haha"
            },
            {
                "file": "//content.jwplatform.com/strips/1g8jjku3-120.vtt",
                "kind": "thumbnails"
            }
        ],
        "image": "jwplayer/video/1.jpg",//海报
        "title": "我的第一个jwplayer视频",
        "description":"第一个视频描述",
        "mediaid": "ddra573"
    },{  //*****************第二个视频**********************************************
        "file": "//content.jwplatform.com/videos/QlfSn2u6-FctPAkow.mp4",
        "image": "jwplayer/video/4.jpg",
        "title": "这是第二个jwplayer视频",
        "description":"第二个视频描述",
        "tracks": [
            {
                "file": "//assets-jpcust.jwpsrv.com/tracks/Up7DJauf.vtt",
                "kind": "captions",
                "label": "big-buck.vtt"
            },
            {
                "file": "//content.jwplatform.com/strips/1g8jjku3-120.vtt",
                "kind": "thumbnails"
            }
        ],
        "mediaid": "ddrx3v2"
    }],
    key:"tbNk1wd503FIee9wemRnCvaw7faBJzVoPSgAEw=="
});

player.on('play',function () {
    console.log("视频播放")
})

player.on('pause',function () {
    console.log("视频暂停")
})


// cookie  视频断点
player.on('time', function(e) {
    $cookie.setItem('resumevideodata', Math.floor(e.position) + ':' + player.getDuration());
});
player.on('ready', function() {
    var cookieData = $cookie.getItem('resumevideodata');
    if(cookieData) {
        var resumeAt = cookieData.split(':')[0],
            videoDur = cookieData.split(':')[1];
        if(parseInt(resumeAt) < parseInt(videoDur)) {
            player.seek(resumeAt);
            logMessage('Resuming at ' + resumeAt); //for demo purposes
        }
        else if(cookieData && !(parseInt(resumeAt) < parseInt(videoDur))) {
            logMessage('Video ended last time! Will skip resume behavior'); //for demo purposes
        }
    }
    else {
        logMessage('No video resume cookie detected. Refresh page.');
    }

    // addButton 下载按钮
    player.addButton(
        //图片路径
        "jwplayer/video/download.svg",
        //文本提示
        "Download Video",
        //This portion designates the functionality of the button itself
        function() {
            //With the below code, we're grabbing the file that's currently playing
            window.location.href = player.getPlaylistItem()['file'];
        },
        //And finally, here we set the unique ID of the button itself.
        "download"
    );

    //字幕样式设置
     jwplayer().setCaptions({
        "color":"#cccccc",
        "backgroundColor": "#2BBECF",
        "backgroundOpacity":"0",
        "windowOpacity":"0",
        "windowColor":"#ffffff"
     });


    });

