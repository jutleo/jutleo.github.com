$(function () {
    $(".article a").attr("target", "_blank");
    // $(".brand-title,.brand-tagline,nav").remove();
    $(".headerpic img").css("width", "100px")
    $('#toc').toc({'container': '.article', 'selectors': 'h1,h2,h3', prefix: 'top'});
    $('.article').each(function (i) {
        $(this).find('img').each(function () {
            if ($(this).parent().hasClass('fancybox')) return;
            var url = this.src.replace(document.location.pathname,"/");
            this.src = url;
            $(this).wrap('<a href="' + url + '" title="' + this.title + '" class="fancybox"></a>');
        });
        $(this).find('.fancybox').each(function () {
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox) {
        $('.fancybox').fancybox({
            padding: 0,
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                title: {
                    type: 'inside'
                },
                overlay: {
                    css: {
                        'background': 'rgba(255,255,255,0.5)'
                    }
                }
            }

        });
    }
    ;
  
});
function grcode() {
    var url = $("link[rel='canonical']").attr('href');
    $(window).scroll(function () {
        var yy = $(this).scrollTop();//获得滚动条top值
        if ($(this).scrollTop() < 30) {
            $(".qrcodeTable").css({"position": "relative", top: "5px", left: "-50px"});
        } else {
            $(".qrcodeTable").css({"position": "relative", top: yy + "px", left: "-50px"});
        }
    });
}