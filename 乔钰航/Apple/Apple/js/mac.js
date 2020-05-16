$(document).ready(function(){
    var l=0;
    $(".left").click(function(){
        l-=152.5
        if(l<-610){
            l=0
        }
        $(".topa").css({left:l})
    })
    $(".right").click(function(){
        l+=152.5
        if(l>0){
            l=-610
        }
        $(".topa").css({left:l})
    })
    //点击换页
    $(".titt").children("li").click(function(){
        $(".titc").children("li").css({opacity:"0"})
        $(".titc").children("li").eq($(this).index()).css({opacity:"1"})
        $(".titt").children("li").removeClass("lib")
        $(this).addClass("lib")
    })

    $(".titb").children("li").click(function(){
        $(".titc").children("li").css({opacity:"0"})
        $(".titc").children("li").eq($(this).index()).css({opacity:"1"})

        $(".titt").children("li").css({opacity:"0"})
        $(".titt").children("li").eq($(this).index()).css({opacity:"1"})

        $(".titb").children("li").css({backgroundColor:"#ccc"})
        $(this).css({backgroundColor:"#000"})
    })

})