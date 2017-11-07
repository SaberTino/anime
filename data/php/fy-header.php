<?php
header("Content-Type:text/html;charset=UTF-8");
?>
    <div id="header-top" class="clear">
			<a href="../index.html" id="logo">
				<img src="../images/logo.png" alt="">
			</a>
		</div> 
		<div id="top-input">
				<!-- 搜索框-->
			<div class="input-box">
				<input type="text" id="txtSearch">
			</div>
				<!--搜索图片 -->
			<a href="#">
				<img src="../images/search.png">
			</a>
		</div>
		<ul type="none" id="list">
			<li>
				<a href="register.html" target="_blank">注册</a>
				<span>|</span>
			</li>
			<li>
				<a href="login.html" target="_blank">登录</a>
			</li>
		</ul>
		<nav id="nav">
				<div class="index">
					<a href="#">首页</a>
				</div>
				<div class="dropdown">
					<a class="dropdown-btn" data-trigger="dropdown" href="#">动漫</a>
					<ul class="dropdown-menu">
						<li class="dropdown-item"><a href="#">热血</a></li>
						<li class="dropdown-item"><a href="#">校园</a></li>
						<li class="dropdown-item"><a href="#">神魔</a></li>
						<li class="dropdown-item"><a href="#">科幻</a></li>
						<li class="dropdown-item"><a href="#">搞笑</a></li>
						<li class="dropdown-item"><a href="#">推理</a></li>
					</ul>
				</div>
				<div class="dropdown" id="move">
					<a class="dropdown-btn" data-trigger="dropdown" href="#">电影</a>
					<ul class="dropdown-menu">
						<li class="dropdown-item"><a href="#">热血</a></li>
						<li class="dropdown-item"><a href="#">校园</a></li>
						<li class="dropdown-item"><a href="#">神魔</a></li>
						<li class="dropdown-item"><a href="#">科幻</a></li>
						<li class="dropdown-item"><a href="#">搞笑</a></li>
						<li class="dropdown-item"><a href="#">推理</a></li>
					</ul>
				</div>
				<div class="dropdown" id="move2">
					<a class="dropdown-btn" data-trigger="dropdown" href="#">TV剧</a>
					<ul class="dropdown-menu">
						<li class="dropdown-item"><a href="#">热血</a></li>
						<li class="dropdown-item"><a href="#">校园</a></li>
						<li class="dropdown-item"><a href="#">神魔</a></li>
						<li class="dropdown-item"><a href="#">科幻</a></li>
						<li class="dropdown-item"><a href="#">搞笑</a></li>
						<li class="dropdown-item"><a href="#">推理</a></li>
					</ul>
				</div>
				<div class="new">
					<a href="#">资讯</a>
				</div>				
		</nav>
