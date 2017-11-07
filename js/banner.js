			var show=$("banner");
			var ul=$("banner-img");
			var toLeft=$("toLeft");
			var toRight=$("toRight");
			var indicators=$("indicators");
			var zuo=0;//记录左边距
			var target=0;//记录第几张
			var timer=null;//自动播放的定时器
			var timer1=null;//点击时的定时器
			var index=0;
			timer=setInterval(autoPlay,2000);//每2秒进行一次滑动
			function autoPlay(){
				if(target<=-400){//
					zuo=0;
					target=-100;
				}else{
					target-=100;
				}
				slide(target);//滑动速度
				getIndex();
			}
			function slide(tar){
				clearInterval(timer1);
				timer1=setInterval(autoPlay,30);
				function autoPlay(){
					if(zuo==tar){
						clearInterval(timer1);
					}else{
						var speed=(tar-zuo)/7;
						speed=(speed>=0)?Math.ceil(speed):Math.floor(speed);//向下取整
						zuo=zuo+speed;
						ul.style.left=zuo+"%";
					}
				}
			}
			//设置左右边框按钮
			toRight.onclick=function(){
				if(target<=-400){
					zuo=0;
					target=-100;
				}else{
					target-=100;
				}
				slide(target);
				getIndex();
			};
			
			toLeft.onclick=function(){
				if(target>-100){
					zuo=-400;
					target=-300;
				}else{
					target+=100;
				}
				slide(target);
				getIndex();
			};
			//设置小圆点
			var lie=indicators.getElementsByTagName("li");
			for(var j=0;j<lie.length;j++){
				var li=lie[j];
				li.index=j;
				li.onclick=function(){
					target=-(this.index*100);
					slide(target);
					getIndex();
				};
			}
			function getIndex(){
				i=-(target/100);
				i==4?(i=0):i;
				var lie=indicators.getElementsByTagName("li");
				for(var li of lie){
					li.style.background="#ccc";
				}
				lie[i].style.background="#0aa1ed";
			}

			function $(id){
				return document.getElementById(id);
			}			
			show.onmouseover=function(){
				clearInterval(timer);
			};			
			show.onmouseout=function(){
				timer=setInterval(autoPlay,2000);
			};
			