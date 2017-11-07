	
	//ajax后台请求详情列表	
	$.ajax({
			type:"GET",
			url:"../data/php/getData.php",
			success:function(data){  //data json->js obj
			console.dir(data);
				html="";
				for (var i=0;i<data.length;i++){
				html+=`
				<li> 
				<div class="left-area">
					<a href="videoplay.html" target="_top"><img src="${data[i].src}"></a>
				</div>
				<div class="right-area">
					<h2><a href="videoplay.html" target="_top">${data[i].title}</a></h2> 
					
					<div class="d_label"><b>地区：</b>${data[i].area}</div>
					
					<div class="d_label"><b>年代：</b>${data[i].year}</div>
					
					<div class="d_label"><b>标签：</b>${data[i].sing}</div>
					
					<div class="d_label"><b>播放：</b>${data[i].play}</div>
					
					<div class="d_label"><b>看点：</b>${data[i].look}</div>
					
					<div class="d_label"><b>简介：</b>${data[i].introduce}</div>
					
					<div class="d_label"><b style="color: rgb(255, 0, 0);">状态:</b> 连载 </div>
				</div>
			</li>`;
				}
				
				$("#getData").html(html);		
			},
			
				error:function(data){
					alert("您的网络出现故障，请检查");
				}

			});	

