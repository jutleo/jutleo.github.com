---
layout: post
title: "CSS3变形、缩放"
duoshuo: true
categories: CSS3
tags: [html5,css3] 
---

&emsp;
CSS3动画很惊艳，着实让我兴奋，虽然我不知道如何去应用出更好的效果。如果你不知道她的好，就不要说她的坏。
坚持总会有新的发现。
![CSS3动画效果](static/images/20150110001.png)

<!-- more -->

&emsp;
transition很有魔法效果，可以变形，缩放等等，如果你有想象力，可以做出更帅气的效果。
##dom结构
	
	<div class="leo-container">
		<div class="leo-box box1"></div>
		<div class="leo-box box2"></div>
		<div class="leo-box box3"></div>
		<div style="clear:both;"></div>
	</div>

##基本样式
&emsp;
为了达到以上并排效果，先看基本的CSS样式
	
	.leo-container{
		background: rgba(255, 189, 46, 0.1);
	    border: 1px dashed #ffbd2e;
	    margin: 10px auto;
	    position: relative;
	    padding: 80px;
	}
	.leo-box{
		background: rgba(71,207,63,1);
		box-shadow: 1px 1px 5px inset;
		float: left;
		width: 150px;
		height: 150px;
		margin-right: 50px;
		opacity: 0.8;
		transition: all 0.2s ease-out;
	}


1、添加我喜欢的rgba颜色，基本透明哦  
2、`box-shadow`设置阴影效果，四个参数分别为横向偏移、竖向偏移、边框虚化、内虚化。
这里只是我个人理解的名词，标准的属性里有5个参数第四个为颜色值，最后一个才是虚化的类型(请自行查阅文档)  
3、float偏移，使三个块元素变为行元素  
4、opacity加点透明度，受不了自己了，这么喜欢透明度  
5、为了效果过渡好一点，所有属性来点效果  

##配合`:hover`伪类来实现效果

	.box1:hover{
		opacity: 1;
		transform: scale(1.5) rotate(2deg);
	}
	.box2:hover{
		transform: scale(1.5);
		transform-origin: 100% 100%;
	}
	.box3:hover{
		transform: scale(1.5);
		transform-origin: 0 100%;
	}

1、scale缩放1.5倍，标准API为两个参数，分别表示X，Y方向，默认是1，写一个表示X，Y方向同时缩放，在API
里可以单独使用scaleX，scaleY来表示  
2、rotate表示偏移，2deg表示中心进行偏移的角度  
3、scale,rotate本身是可以写在一起的  
4、transform-origin表示偏移的位置，需配合transform使用  
5、transform-origin参数为x-axis,y-axis,z-axis,分别定义每个轴的转换位置  

&emsp;
还有很多不懂的，用到的时候再查吧。这个很有意思的属性给了我很多惊喜。不同浏览器的写法会有差异，
请使用chrome／firefox戳[这里](/demo/animation.html)查看效果(非CSS3浏览器请绕行)









