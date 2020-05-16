$(document).ready(function(){
    $("#content_3").children("div").hover(function(){
        $(this).children("img").stop().fadeIn();
    },function(){
        $(this).children("img").stop().fadeOut();
    
    })
})