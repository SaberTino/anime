//功能:分页显示列表

//1:创建函数发送AJAX请求获取当前页的内容，并且创建分页条
//2:参数pno 当前页码 1 2 3 4
function loadProductByPage(pno){
  //3:发送AJAX请求 productlist_page.php
  //4:参数pno  
  $.ajax({
      type:"GET",
      url:"../data/php/productlist_page.php",
      //与php里获得pno参数相关
	  data:{pno:pno},
      success:function(pager){
          console.log("获取服务器返回数据");
          console.log(pager);
          //5:获取返回数据 pager.data
          //6:拼接字符串动态创建表格并且添加数据
          var html = "";
          for(var p of pager.data){
              html += `
              <li> 
				<div class="left-area">
					<a href="videoplay.html" target="_top"><img src="${p.src}"></a>
				</div>
				<div class="right-area">
					<h2><a href="videoplay.html" target="_top">${p.title}</a></h2> 
					
					<div class="d_label"><b>地区：</b>${p.area}</div>
					
					<div class="d_label"><b>年代：</b>${p.year}</div>
					
					<div class="d_label"><b>标签：</b>${p.sing}</div>
					
					<div class="d_label"><b>播放：</b>${p.play}</div>
					
					<div class="d_label"><b>看点：</b>${p.look}</div>
					
					<div class="d_label"><b>简介：</b>${p.introduce}</div>
					
					<div class="d_label"><b style="color: rgb(255, 0, 0);">状态:</b> 连载 </div>
				</div>
			</li>`;


          }
          $("#getData").html(html);
          //7:获取总页数  pager.pageCount
          //8:拼接字符串动态创建页码
          var html = "";
		   html +=`<a href="${pager.pno-1}" class="pagelink_a up">上一页</a>`;
          //判断是否显示上上一页
          if(pager.pno-2>0){
              html += `<a class="pagelink_b " href="${pager.pno-2}">${pager.pno-2}</a>`;
          }
          //判断是否显示上一页
          if(pager.pno-1>0){
          html += `<a class="pagelink_b " href="${pager.pno-1}">${pager.pno-1}</a>`;
          }
          
		  html += `<a class="pagelink_b pagenow" href="${pager.pno}">${pager.pno}</a>`;
		 
          //判断是否显示下一页
          if(pager.pno+1<=pager.pageCount){
              html += `<a class="pagelink_b " href="${pager.pno+1}">${pager.pno+1}</a>`;
          }
          //判断是否显示下下一页
          if(pager.pno+2<=pager.pageCount){
              html += `<a class="pagelink_b " href="${pager.pno+2}">${pager.pno+2}</a>`;
          }
		  if(pager.pno+1<=pager.pageCount){
			html +=`<a href="${pager.pno+1}" class="pagelink_a down">下一页</a>`;
          }else{
			html +=`<a href="${pager.pno}" class="pagelink_a down">下一页</a>`;
		  }
		  $("#pagination").html(html);
		  

      },
      error:function(){
          alert("网络出现故障，请检查");
      }
  });


}loadProductByPage(1);



//上一页
$(".up").click(function(){  
    console.log($(".pagenow").html());
	console.log(111);
	loadProductByPage(3);
 });
// $(".down").click(function(){  
//    if(pager.pno+1<=pager.pageCount){
//              html += `<a class="pagelink_b " href="${pager.pno+1}">${pager.pno+1}</a>`;
//    }
// });  





//为页码绑定点击事件,由于页码是动态生成
//使用事件代理机制完成绑定

$("#pagination").on("click","a",function(e){
    //a:阻止事件默认行为 a
    e.preventDefault();
    //b:获取当前页码
    var pno = $(this).attr("href");
    //c:调用函数
    loadProductByPage(pno);
});




