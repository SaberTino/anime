<?php
	#1.获取请求提交的数据
	@$uname=$_REQUEST["uname"];
    @$upwd=$_REQUEST["upwd"];
	@$email=$_REQUEST["email"];
	@$phone=$_REQUEST["phone"];
	@$user_name=$_REQUEST["user_name"];
	@$gender=$_REQUEST["gender"];
	
if($uname===NULL){
  die('uname required');
}
if($upwd===NULL){
  die('upwd required');
}
if($email===NULL){
  die('email required');
}
if($phone===NULL){
  die('phone required');
}
if($user_name===NULL){
  die('user_name required');
}
if($gender===NULL){
  die('gender required');
}

	#2.连接到数据库
	require("init.php");
	#3.执行数据库操作
	$sql="insert into lsj_user(uname,upwd,email,phone,user_name,gender)
	value('$uname','$upwd','$email','$phone','user_name',$gender)";
	$result=mysqli_query($conn,$sql);
	if($result===true){
		echo "1";
	}else{
		echo "0";
	}


	



?>