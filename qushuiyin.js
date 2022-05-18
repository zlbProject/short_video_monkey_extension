// ==UserScript==
// @name         短视频去水印（支持抖音网页版）
// @version      1.0.1
// @license      MIT
// @description  一款短视频去水印下载工具，支持抖音网页版视频无水印下载
// @icon         data:image/png;base64,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
// @author       我爱工具箱
// @match      *://*.douyin.com/*
// @match      *://*.iesdouyin.com/*
// @require      https://lib.baomitu.com/jquery/3.6.0/jquery.js
// @require      https://lib.baomitu.com/sweetalert/2.1.2/sweetalert.min.js
// @require      https://lib.baomitu.com/clipboard.js/2.0.6/clipboard.min.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// ==/UserScript==

(function() {
    //是否抖音视频页
    let isDouyinPage = function() {
        let url = location.href;
        if (url.indexOf("https://www.douyin.com/") != -1) {
            return true;
        } else {
            return false;
        }
    };

    let getVideoUrl = function() {
        let RENDER_DATA = document.getElementById("RENDER_DATA");
        if (RENDER_DATA == null) {
            return "";
        }
        let RENDER_DATA_STR = RENDER_DATA.textContent;
        renderData = decodeURIComponent(RENDER_DATA_STR);
        let jsonObject = JSON.parse(renderData);
        let data = null;
        for (let key in jsonObject) {
            if ("_location" == key || "app" == key || "11" == key) {
                continue;
            }
            data = key;
        }
        let dataJo = jsonObject[data];
        let detail = dataJo["videoDetail"];
        let video = detail["video"];
        let playAddr = video["playAddr"];
        let video1 = playAddr[0];
        let src = video1["src"];
        let videoUrl = "https:" + src;
        videoUrl = videoUrl.substring(0, videoUrl.length - 1);
        return videoUrl;
    }

    let initButtonEvent = function() {
        console.log('initButtonEvent初始化按钮事件');
        if (isDouyinPage()) {
            let videoNode = document.getElementsByTagName("video");
            let index = videoNode.length == 1 ? 0 : videoNode.length - 2;
            let videoUrl = decodeURI('https:' + videoNode[index].getElementsByTagName("source")[0].getAttribute("src"));
            if (videoUrl == null) {
                videoUrl = getVideoUrl();
            }
            let spanNode = document.getElementsByClassName("npIvCX5K")[index].childNodes[1];
            let videoName = "";
            for (let i = 0; i < spanNode.childNodes.length; i++) {
                let childNode = spanNode.children[i];
                if (childNode != undefined) {
                    videoName = videoName + childNode.textContent;
                }
            }
            GM_download({ url: videoUrl, name: videoName + '.mp4' });
            // console.log(videoUrl);
        }
    };

    // ==================================== 逻辑代码开始
    console.log('脚本开始');
    let start = function() { //迭代调用
        if (!isDouyinPage()) {
            console.log('非正常页面，1秒后将重新查找！');
            return;
        }

        // 创建按钮 START
        let btn = document.createElement('a');

        //列表页视频
        let btnShare = document.getElementsByClassName('OFZHdvpl')
        if (btnShare.length == 0) {
            //分享页视频
            btnShare = document.getElementsByClassName('Z1DFGRDj')
            if (btnShare.length == 0) {
                console.log('未找到分享按钮，1秒后将重新查找！');
                return;
            }
            btn.style.cssText = "padding-left: 10px;";
        }

        let btnDownload = {
            id: 'btnClickDownload',
            title: '点击下载视频',
            html: function() {
                return `<img height="26" width="26" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAB10lEQVRYhe2Yv0sCYRjHnyuVoyIC/4CwH1OrKbdJDQ4hDi0NbTU0RuIPKKvBKE2loUHQ/0FRF3WsqDOoCF1UcIqWCvP0NC69hlI0Ss97LxR6P9sdPN/nw3vDPe8DMOAQUoTojy75n97HbBRyvgw1oIFvQ9v2vOGjJckdkiTlD8GCqGBBVLAgKlgQFSyIChZEBQuiggVRETRR6w+vTEDw7l7Df7sKAADwBOzErdRBtwzBd4alY9o6RsrstuW50YkRhdCyNoosB85gqlxk391Rs3ZfSM2w0PBsInAxubhev848UepZpYKUCy5tk2PKNU/UIkyuJ0EAgGzcfy5Gsshy4AylS0y55o1YNHu99OztGL4kVQvrfDL3RKlnlPJukkyFA1coxZZEyIkSBADIJPznU7o1SOaeO0oyFQ6cwRTLsDVv2KzZFdNLlOCnZOBMpVuDZO6Fmp9WyklFexRT4cAVTLNMteYNmzR2sX2QMXro7ZXTm/LdwxufL9T5fKHO3z++8au+25LBQzv6JtZKq6TUcpLsZgAADB7aMU7KNwkCiNcqdxLZ0m5LlS0ZRjd9YHTTXf8OGEwLBEDnqaOfxGwU0Ry3vi8g+01jATrwA+vACzY/sVQ75X/HB6W6vNjikAp7AAAAAElFTkSuQmCC"/>`;
            }
        }

        let button = document.getElementById(btnDownload.id);
        if (button != null) {
            return;
        }

        btn.id = btnDownload.id;
        btn.title = btnDownload.title;
        btn.innerHTML = btnDownload.html();
        btn.addEventListener('click', function(e) {
            initButtonEvent();
            e.preventDefault();
        });
        // 创建按钮 END

        // 添加按钮 START
        btnShare[0].appendChild(btn);
        // 添加按钮 END
    }

    setInterval(function() {
        start();
    }, 1000)
})();
//##########################################