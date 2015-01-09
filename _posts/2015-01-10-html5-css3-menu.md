---
layout: post
title: "纯CSS打造menu"
duoshuo: true
categories: CSS3
tags: [html5,css3] 
---

&emsp;
最近突然喜欢上了background这个属性的rgba色，那种透明度，让人豁然开朗。原来傻傻的以为那是背景图片弄出来的效果。
不懂配色的可以多尝试一下。  

&emsp;
纯CSS的菜单很多地方都有应用，以前也是拿来主义，今天尝试自己做了一个，简单粗鲁，重在体会其中的思路。  

<!-- more -->

##实现原理
将父元素浮动横排，子菜单透明度100%，hover的时候还原透明度，再加上一个简单的动画过渡效果。

1、构建dom结构；  
2、一级元素浮动形成一级菜单  
3、二级菜单透明  
4、利用伪类`:hover`将透明度变为0，加上css3动画让过渡平滑一点；  

最终显示效果如下：
![css菜单效果](/static/images/20150109001.png)

##构建dom结构
&emsp;
此例子只是一个简单的演示，只有二级菜单
	
	<div class="menu">
		<li><a href="#">首页</a></li>
		<li>
			<a href="#">前端开发</a>
			<ul>
				<li><a href="#">CSS</a></li>
				<li><a href="#">HTML</a></li>
				<li><a href="#">JavaScript</a></li>
			</ul>
		</li>
		<li><a href="#">网页配色</a></li>
		<li><a href="#">关于我</a></li>
		<li><a href="#">帮助信息</a></li>
	</div> 


##基本样式

	.menu,.menu ul,.menu li,.menu a{
		margin: 0;
		padding: 0;
		border: noe;
		outline: none;
	}
	.menu{
		background: -moz-linear-gradient(top, #4c4e5a,#9D9D9D) #4c4e5a;
		background: -webkit-linear-gradient(top, #4c4e5a,#9D9D9D) #4c4e5a;
		border-radius: 5px;
		height: 40px;
		margin: 0 auto;
		width: 100%;
	}
	.menu li{
		display: block;
	    float: left;
	    height: 40px;
	    list-style: outside none none;
	    position: relative;
	}
	.menu li a{
		border-left: 1px solid #393942;
	    border-right: 1px solid #838832;
	    color: #f9f9f9;
	    display: block;
	    font-weight: bold;
	    padding: 10px 15px;
	    text-decoration: none;
	    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	    transition: color 0.2s ease-in-out 0s;
	}

1、菜单基本样式，为了体现矫情的美化而生，过渡颜色，外加圆角效果  
2、为了效果好看，添加了一个圆角。  
3、去掉了li元素默认的符号  
4、一级菜单设置为块元素，向左浮动使菜单横排  
5、为了二级菜单定位，将一级菜单设置为相对定位  
6、美化菜单里的点击链接，给左右都加一个边框  


##调整二级菜单

	.menu ul{
		background: rgba(116, 117, 123, 1);
	    border-radius: 0 0 5px 5px;
	    opacity: 0;
	    position: absolute;
	    top: 40px;
	    transition: opacity 0.2s ease 0.1s;
	}
	.menu li:hover > ul{
		opacity: 1;
	}

1、设置二级菜单透明，调试时可以先注释  
2、设置二级菜单绝对定位，将二级菜单定位到一级菜单下(40px)  
3、针对opacity添加动画过渡效果  
4、利用hover伪类设置二级菜单不透明  

##调整菜单效果
	
	.menu li:first-child a{
		border-left: none;
	}
	.menu li:last-child a{
		border-right: none;
	}
	.menu li:hover > a{
		color: #FFBD2E;
	}
	.menu ul li{
		height: 0px;
		overflow: hidden;
		padding: 0px;
		transition: height 0.2s ease 0.1s;
	}
	.menu li:hover > ul li{
		height: 36px;
		overflow: visible;
		padding: 0;
	}
	.menu ul li a{
		width: 100px;
		margin: 0;
		border: none;
		border-bottom: 1px solid #ccc;
		text-align: left;
	}
	.menu ul li:last-child a {border: none;}

1、利用`first-child`,`last-child`去掉整个菜单左右的边框  
2、先去掉二级菜单(竖向)的边框，然后添加一个底部边框  
3、`last-child`去掉最后一个子菜单的边框  

至此一个css menu完成。  

请狠狠的戳[这里](/demo/menu.html)查看效果(非CSS3浏览器请绕行)

&emsp;