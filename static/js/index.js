$(function(){
    //主题星期变换颜色开始
    var dayweek=new Date().getDay();
    dayweek = 1;
    switch (dayweek) {
        case 0:
            $('.sidebar,.search-query').css({  "background": "rgba(75, 75, 73, 0.8)" });
            break;
        case 1:
            $('.sidebar,.search-query').css({  "background": "rgba(28, 84, 97, 0.8)" });
            break;
        case 2:
            $('.sidebar,.search-query').css({  "background": "rgba(61, 79, 93, 0.8)" });
            break;
        case 3:
            $('.sidebar,.search-query').css({  "background": "rgba(39, 62, 56, 0.8)" });
            break;
        case 4:
            $('.sidebar,.search-query').css({  "background": "rgba(61, 79, 93, 0.8)" });
            break;
        case 5:
            $('.sidebar,.search-query').css({  "background": "rgba(61, 79, 93, 0.8)" });
            break;
        case 6:
            $('.sidebar,.search-query').css({  "background": "rgba(61, 79, 93, 0.8)" });
            break;
    }
    //主题星期变换颜色结束
    NProgress.start();
    setTimeout(function () {
        NProgress.done();

    }, 500);
    var tags_a = $(".post-category");
    tags_a.each(function(){
        var x = 4;
        var y = 0;
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        $(this).addClass("post-category-"+rand);
    });
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100){
            $('.topfade').fadeIn(300);
        }else{
            $('.topfade').fadeOut(300);
        }
    });

    $('.topfade').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);});


});