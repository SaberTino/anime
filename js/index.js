/*header*/
//(()=>{
//  ajax("get","html/header-ex.html")
//    .then(html=>{
//    $("#header")[0].innerHTML=html;
//    document.head.innerHTML=
//      document.head.innerHTML+
//        '<link rel="stylesheet" href="css/index-ex.css">';
//  })
//})();


$("[data-trigger=dropdown]")
			.parent().mouseover(
			function(){
				$(this).children().last().addClass("in")
			}
		).mouseout(
			function(){
				$(this).children().last().removeClass("in");
			}
		)
			//	引用js-rabbit 
			function create_rabbit(e){
				var s=new HoverRabbit();
				s.start();
			}
			if(window.attachEvent) window.attachEvent("onload",create_rabbit);
			else window.addEventListener("load",create_rabbit,false);
			
			$(".small_pic li").mouseover(function(){
				$(this).siblings().removeClass("on");
				$(this).addClass("on");
				var preNumber=$(this).prevAll().size()+1;
				$(".big_pic li").removeClass("on");
				$(".big_pic li:nth-child("+preNumber+")").addClass("on");


			});
			