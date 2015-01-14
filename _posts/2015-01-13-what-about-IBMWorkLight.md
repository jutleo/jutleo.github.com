---
layout: post
title: "IBMWorkLight IDE好用么？"
duoshuo: true
categories: 技术
tags: [WorkLight] 
---

&emsp;
工作原因，涉及hybrid app。之前对B/S较熟，用起来也比较顺手。市面上APP平台开发商的概念和思路都差多，
从接触的H5+,到正益无线、到烽火星空，在上手程度上做到符合国人习惯，也能快速开发。自己也尝试对WebView和
UIWebView控件做了封装，js可以直接call到原生API，性能有待继续验证。  

&emsp;
无奈公司层面决定使用IBMWorkLight，后端MDM，MCM，MAS等那一套直接商用，在不考虑价格因素的前提下，
我是很提倡使用worklight。

<!-- more -->

&emsp;
从安装开始，一路坎坷啊，对eclipse的小版本号也有要求，公司的网络又不能下载。只能回家下载弄好之后再copy到
公司机器上。  

&emsp;
worklight功能强大，有几个理念需要说一下：  

1、UI层面，原生和html5可以相互调用，js call native UI, native UI call dom.逆天了，国内厂商很少有做到的；  
2、js call native API，js扩展插件，使用Cordova扩展插件；  
3、无UI组件，推荐使用jQuery Mobile。慢到死的的老牌库，很无语；  

&emsp;
经过几次折腾，查看了一些文档，终于可以Hello World了，那叫一个丑。配合它的server，在浏览器中
使用模拟器，竟然还需要applet才可以模拟API效果，修改一下js竟然不生效，啊，啊，啊 不生效啊！，我已经很受伤了，
IDE 能不能再挫点！  

&emsp;
IBM WorkLight让我很受伤，可能是之前看过了那么多顺手的，自己也琢磨了一些东西。这个烂的掉渣的东西竟然还那么多赞。
大家赞的都是它的server端吧，商用价值就在server端。做为IBM收购的产品，在战略意义上的价值毋庸置疑，可是你好歹
把IDE这块秀的漂漂亮亮的吧！  

&emsp;
闹骚发完，还得继续做正事，话说jQuery Mobile的性能在几年前让我吃过一次亏......my god!







