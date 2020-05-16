$(function(){
    $.ajax({
        type:"get",
        dataType:"json",
        url:"http://127.0.0.1:5500/js/test.json",
        success:function(res){
            console.log(res);
            for(var i in res){
                $(".a").append("<li class='a_li'>"+"<a href='"+res[i].src+"'>"+res[i].a+"<ul class='b'></ul></li>");
                for(var k in res[i].type){
                    $(".b").eq(i).append("<li class='b_li' display: 'none'>"+res[i].type[k]+"</li>");
                }
            }
            $(".a_li>a").hover(function(){
                $(this).children(".b").stop().slideDown(700);
            },function(){
                $(this).children(".b").stop().slideUp(700);
            })
        }
    })
})

