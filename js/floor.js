/**
*实现楼层滚动以及右侧右边栏的导航
*/
$((()=>{
	let $sample=$(`#ct`);
	let $venue=$(`#container`);
	let $outdoor=$(`#container2`);
	let $guest=$(`#container3`);
	let $rightNavA=$(`#right-nav>a`);
	let arr=[$sample,$venue,$outdoor,$guest];
	$rightNavA.eq(0).addClass(`light`).siblings().removeClass(`light`);
	
	//楼层滚动到时加载
	$(window).scroll(()=>{
		let wTop=$(window).scrollTop();
		let wH=$(window).height();
		let viewBottom=wTop+wH;
		for(let div of arr){
			if(div.offset().top<viewBottom){
				div.addClass("louCengShow");
			}
		}
		//点亮右侧导航栏
		for(let i=0;i<arr.length;i++){
			if(viewBottom>=(arr[i].offset().top+270)){
				$rightNavA.eq(i+1).addClass(`light`).siblings().removeClass(`light`);
			}
			else if(wTop==0){
				$rightNavA.eq(0).addClass(`light`).siblings().removeClass(`light`);
			}
		}
	});

	//利用事件委托后优化后的代码，大量减少了事件监听的个数
	$(`#right-nav`).on(`click`,`a`,e=>{
		e.preventDefault();//必须要加阻止默认事件，不然会出现一个先闪一下的小bug
		let i=$(e.target).index();
		let $body=$(`body`);
		if(i==0){
			$body.animate({scrollTop:0},800);
		}else{
			$body.animate({scrollTop:arr[i-1].offset().top},800);
		}
	});


	//点击时滑动监听事件太多，可以进行优化，利用事件委托
//	$rightNavA.eq(0).click(()=>{
//		$(`body`).animate({scrollTop:0},500);		
//	});
//	$rightNavA.eq(1).click(()=>{
//		$(`body`).animate({scrollTop:$sample.offset().top},500);		
//	});
//	$rightNavA.eq(2).click(()=>{
//		$(`body`).animate({scrollTop:$venue.offset().top},500);		
//	});
//	$rightNavA.eq(3).click(()=>{
//		$(`body`).animate({scrollTop:$outdoor.offset().top},500);		
//	});
//	$rightNavA.eq(4).click(()=>{
//		$(`body`).animate({scrollTop:$guest.offset().top},500);		
//	});
})());

