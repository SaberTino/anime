<?php
	header('Content-Type: application/json;charset=UTF-8');
	require('init.php');
	$table=$_REQUEST["table"];
	$title=$_REQUEST["title"];
	$sql="SELECT * FROM $table WHERE title='$title'";
	echo (sql_execute($sql));