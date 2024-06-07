---
layout: post
title: "纯CSS打造手风琴效果"
duoshuo: true
categories: CSS3
tags: [html5,css3]
---
&emsp;
这是不知道在哪个网站看到的手风琴效果，看了下，发现原作者使用了:checked伪类配合radio实现的，
真是感叹人类的智慧啊。

##实现思路
1、利用li元素处理做手风琴的折叠元素；
2、使用radio元素处理选中项，因为要使用:chected伪类获取选择项添加样式
3、隐藏折叠的元素，在点击时，radio选择伪类加样式

<!-- more -->

## DOM结构

    `<div class="leo-container">`
		`<ul class="accordion">`
			`<li>`
				`<input type="radio" id="accordion_1" name="accordion_name">`
				`<label for="accordion_1">`Test1`</label>`
				`<div class="accordion-content">`
					`<p>`窗外天空 掠过的候鸟`</p>`
					`<p>`又让我想起你 这一刻的情景`</p>`
					`<p>`此刻你的 每一个街道`</p>`
					`<p>`在阳光照耀下 你的天空`</p>`
				`</div>`
			`</li>`
			`<li>`
				`<input type="radio" id="accordion_2" name="accordion_name">`
				`<label for="accordion_2">`Test2`</label>`
				`<div class="accordion-content">`
					`<p>`我在远方 很多的岁月`</p>`
					`<p>`总是会想起你 给予我的一切`</p>`
					`<p>`你给我的 每一个梦想`</p>`
					`<p>`在漂泊的岁月 让我坚强`</p>`
				`</div>`
			`</li>`
		`</ul>`
	`</div>`

&emsp;
DOM结构是最基本的，要主要radio控件的name属性值要一致。

## CSS基本样式

    .leo-container{
		background: none repeat scroll 0 0 rgba(255, 189, 46, 0.1);
	    border: 1px dashed #ffbd2e;
	    margin: 10px auto;
	    position: relative;
	    padding: 80px;
	}
	.accordion{
	  border-top: none;
	  list-style: none;
	}
这是一个基本的样式，刷新效果如下：
![基本效果](/static/images/20150119001.png)

##美化点击条
下来继续添加样式，隐藏掉radio元素，针对label元素添加效果

    .accordion input[type='radio']{
	  display: none;
	}
	.accordion label{
	  background: rgba(195, 195, 195, 0.4);
	  border-left: 1px solid #d2d2d2;
	  border-top: 1px solid #d2d2d2;
	  display: block;
	  font-size: 12px;
	  font-weight: 400;
	  line-height: 30px;
	  margin-bottom: 0px;
	}
	.accordion label:before{
	  background-color: #fff;
	  border-radius: 10px;
	  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) inset;
	  content: "\2610";
	  display: inline-block;
	  line-height: 18px;
	  margin: 0 5px;
	  text-align: center;
	  vertical-align: middle;
	  width: 18px;
	}

对label进行美化，利用伪类:before的content给label加了一个小符号，效果如下：
![基本效果](/static/images/20150119002.png)

## 隐藏内容区域

    .accordion-content{
	  height: 0;
	  overflow: hidden;
	  transition: height 0.5s ease 0s;
	}

直接将内容区域设置高度为0，类似隐藏效果
![基本效果](/static/images/20150119003.png)

## 处理点击样式

    .accordion input:checked + label:before{
	  background: 0 0 5px rgba(255, 0, 0, 0.5) inset;
	  color: #f00;
	  content: "\2611";
	}
	.accordion input:checked ~ .accordion-content{
	  height: auto;
	}

点击时样式的处理规则如下：
1、修改label样式伪类:before的content符号
2、将内容区域高度还原

&emsp;
至此手风琴效果完成了，相对很简单也很实用。
请使用chrome／firefox戳[这里](/demo/accordion.html)查看效果(非CSS3浏览器请绕行)
