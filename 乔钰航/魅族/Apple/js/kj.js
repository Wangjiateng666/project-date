$(document).ready(function(){
    $.ajax({
        url:" http://mock.shtodream.cn/mock/5e8ed541b9b0d45a938f5d88/hhp/appleNav",
        type:"get",
        datatype:"json",
        data:{},
        success:function(data){
            var arr=['Mac.html','iPad.html','iPhone.html','Watch.html','Music.html','jszc.html']
            $.each(data.nav,function(index,value){
                $(".navbar-nav").append("<li><a href='"+arr[index]+"'>"+value.nav+"</a></li>")
            })
            $.each(data.title,function(index,value){
                $(".xx").children("li").eq(index).children("span").html(value.title)
                $.each(data.title[index].content,function(ind,val){
                    $(".aa1").eq(index).append("<span><a href='#'>"+val.name+"</a></span>")
                })
            })
        }
    })




    //按钮动作
    var bang=0;
    $(".navbar-toggle").click(function(){
        if(bang==0){
            $(this).children("span").eq(0).css({transition:".5s",transformOrigin:"11% 50%",transform:"rotateZ(45deg)"})
            $(this).children("span").eq(1).css({transition:".5s",opacity:'0'})
            $(this).children("span").eq(2).css({transition:".5s",transformOrigin:"11% 50%",transform:"rotateZ(-45deg)"})
            bang=1;
        }else{
            $(this).children("span").eq(0).css({transition:".5s",transform:"rotateZ(0deg)"})
            $(this).children("span").eq(1).css({opacity:'1'})
            $(this).children("span").eq(2).css({transition:".5s",transform:"rotateZ(0deg)"})
            bang=0;
        }
    })
    //结束 
    
    //footer
    $(window).resize(function(){
        $(this).width()
        if($(this).width()<500){
            var a=0;
            var b;
            $(".xx").children("li").click(function(){
                var a=$(this).index()
                if(a!=b){
                    $(".xx").children("li").eq(a).children("div").slideDown(300);
                    $(".xx").children("li").eq(b).children("div").slideUp(300);
                }else{
                    $(".xx").children("li").eq(b).children("div").slideUp(300);
                }
                
                b=a; 
            })
        }
    })
    
})