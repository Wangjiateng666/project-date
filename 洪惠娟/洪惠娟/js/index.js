$(function(){
    $(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
        $("#di").css({ "display": "block" });
          }else{
            $("#di").css({ "display": "none" });
          }
    })
    $("#di").click(function () {
    $(window).scrollTop(0);
})


    $(".big").children("img").hover(function(){
        $(this).css("animation","anima 2s forwards");
    },function(){
        $(this).css("animation","an 2s forwards");
    });

    $(".small").children("img").hover(function(){
        $(this).css("animation","anima 2s forwards");
        $(this).parent().css("box-shadow","5px 5px 9px #999");
    },function(){
        $(this).css("animation","an 2s forwards");
        $(this).parent().css("box-shadow","none");
    });









})