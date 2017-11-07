<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("init.php");

	$sql="SELECT * FROM lsj_img1";
	$result=mysqli_query($conn,$sql);
	if($result!==null){
		//抓取全部数据,使用json输出.
		$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
		echo json_encode($rows);

	}
?>