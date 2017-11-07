//最外层元素div
      var container = document.querySelector(".container");
      //按钮
      var ctrl = document.querySelector(".ctrl");
      //按钮中图片
      var ctrlImg = document.querySelector(".ctrl img");
      //视频
      var v3 = document.querySelector("#v3");
      //1:鼠标移入视频区域显示按钮 11:55~12:00
      container.onmouseenter = function(){
         ctrl.style.display = "block";
      }
      //2:鼠标移出视频区域隐藏按钮
      container.onmouseleave = function(){
          ctrl.style.display = "none";
      }
      //3:点击按钮
      ctrl.onclick = function(e){
          e.preventDefault();
          //4:判断当前视频如果暂停状态,播放视频并且修改图片
          if(v3.paused){
              v3.play();
              ctrlImg.src = "../images/pause.png";
          }else{
          //5:如果当前视频如果播放状态，暂停视频并且修改图片
              v3.pause();
              ctrlImg.src = "../images/play.png";
          }
      }
      //获取广告图片 9:24--9:28
      var ad = document.querySelector(".ad");
      //如果视频播放则隐藏广告图片
      v3.onplay = function(){
          ad.style.display = "none";
      }
      //如果视频暂停则显示广告图片
      v3.onpause = function(){
          ad.style.display = "block";
      }