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
   $(".ok").click(function(){
       $(this).css({"color":"#0daf2a"})
   })


})