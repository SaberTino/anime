<?php
	require("init.php");
	//接收前端请求的数据
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
	//拼SQL语句，执行
	$sql="SELECT * FROM lsj_user where uname='$uname' and upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row == null){
		echo "0";
	}else{
		echo "1";
	}

?>