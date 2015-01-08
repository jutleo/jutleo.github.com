---
layout: post
title: "纯CSS打造tooltip"
duoshuo: true
categories: CSS3
tags: [html5,css3] 
---

&emsp;
换了份工作，不安的心也算稳定下来了。把自己沉淀的一些东西整理整理拿出来，或许很不起眼，只是想给自己留下点什么。  

&emsp;
CSS的奇妙一直让我心花怒放，也一直没有系统的学习过，说是因为工作范围吧或许太过牵强。
所谓学无止境，你在意的东西一直都在那里，而你不在意的东西不经意之间就会有惊喜。就像CSS的border就给了我一个惊喜。
<!-- more -->

##tooltip实现原理
1、构建dom结构；
2、提示框使用绝对定位，相对鼠标移上元素的位置定位到合适的位置；  
3、提示框使用border样式的四角原则加一个指针的效果；  
4、利用伪类`:hover`将需要提示的框显示出来；  

最终显示效果如下：  
![tooltips显示效果](/static/images/2015-01-08.png)

##构建dom结构
&emsp;
dom结构是一个基本的测试结构，代码如下：
	
	<div class="leo-container">
		<div class="leo-tips">
			<h3>leo,come on!</h3>
			<span>
				This is a tooltip message:<br>
				I'm leo
			</span>
		</div>
	</div>
h3里面的文字为指针移上去的元素，没有添加任何效果。为了看起来归整一点，加了一个外部容器，不是必须，纯属个人习惯，不解释。
##提示框定位
下来看一下提示框具体的样式：

	.leo-tips span{
		background: rgba(0,0,0,0.7);
	    border-radius: 8px;
	    color: #fff;
	    display: inline-block;
	    padding: 15px;
	    visibility: hidden;
	    position: relative;
	    top: 10px;
	}

1、span元素为提示框，首先添加了黑色背景色，透明度为0.7。  
2、为了效果好看，添加了一个圆角。  
3、设置文字颜色为白色。  
4、设置为一个块元素  
5、设置内边距15px  
6、隐藏，因为提示框要在鼠标移上去的时候才显示；
7、设置为相对定位；
8、距离顶端10px，为了避开覆盖需要提供hover的元素；

##添加一个指针效果
很多人可能和我一样，边框的标准写法`border:1px solid #ccc`,突然有一天发现border可以设置四个颜色值。
border是有宽度的，假如一个很小很短的border，四个角透明两个不就是一个指针效果了么？ 下来就来实际操作一下：

	.leo-tips span:before{
		border-color: transparent transparent #4c4c4c #4c4c4c;
	    border-image: none;
	    border-style: solid;
	    border-width: 5px;
	    content: "";
	    height: 0;
	    left: 20px;
	    opacity: 0.8;
	    position: absolute;
	    top: -10px;
	    width: 0;
	}

1、我们利用`:before`来给框添加一个5px的border，实线、颜色设置四个值（上右下左），上和右透明。  
2、使用绝对定位，左边留出20px，高度－10px。  
3、width为0；  

刷新一下，效果出来了，border的上右均为透明，指针效果出现；(调试时注释掉`visibility: hidden;`)

##使用伪类`:hover`进行显示
具体css如下：

	.leo-tips:hover span{
		visibility: visible;
	}

至此一个带指针的tooltip完成。  

请狠狠的戳[这里](/demo/tooltips.html)查看效果(非CSS3浏览器情绕行)




