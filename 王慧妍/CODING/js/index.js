$(document).ready(function(){
    $.ajax({
        url:"http://mock.shtodream.cn/mock/5e5c7910baf5c011f5fce706/example/coding",
        dataType:"json",
        type:"get",
        success:function(res){
            console.log(res);

            // PCNav
            $.each(res.data,function(index,value){
                $(index==0||index==2?
                    `<ul class='topul'>
                        <li><a href='' class='inflex'>${value.firstNav}<i class='iconfont rotate icon-xiangxia'></i></a></li>
                        <ul class='TwoNav'></ul>
                    </ul>`
                    :
                    `<a href=''>${value.firstNav}</a>`
                ).appendTo($(".topnav"));
                value.secondNav?$.each(value.secondNav,function(i,v){
                    $(
                        `<li><a href='${v.url}'>${v.name}</a></li>`
                    ).appendTo(".TwoNav");
                    v.name1?$(".TwoNav li:nth-child(7)>a").append(
                        `<span class='special'>${v.name1}</span>`
                    ):null;
                }):null
            })
            // mobilenav
            // $.each(res.data,function(index,value){
            //     $(index=0||index==2?
            //         `
            //             <li class='downNavLi'>
            //                 <i class='iconfont icon-xiangxia'></i>
            //                 <a href=''>${value.firstNav}</a>
            //                 <div class='mobiledownNav trans5'></div>
            //             </li>
            //         `
            //         :
            //         `
            //             <li class='downNavLi'>
            //                 <i class='iconfont icon-xiangxia'></i>
            //                 <a href=''>${value.firstNav}</a>
            //             </li>
            //         `
            //     ).appendTo(".downNav");
            //     $(".downNav").children(".downNavLi:nth-child(1)").addClass("downNavLi1");
            //     $(".downNav").children(".downNavLi:nth-child(2)").addClass("downNavLi2");
            //     $(".downNav").children(".downNavLi:nth-child(3)").addClass("downNavLi3");
            //     value.secondNav?$.each(value.secondNav,function(i,v){
                    
            //     }):null;
            // })
        },
        error:function(){
            console.log("请求失败");
        }
    })


    $(document).on('mouseenter','.topnav>ul',function(){
        $(this).children().children().children(".rotate").stop().css({"animation":"rotate 0.5s forwards"});
        $(this).children(".TwoNav").show();
    })

    $(document).on('mouseleave','.topnav>ul',function(){
        $(this).children().children().children(".rotate").stop().css({"animation":"rotate1 0.5s forwards"})
        $(this).children(".TwoNav").hide();
    })

    $(".mobilenav").toggle(function(){
        $(this).children().css({"background":"transparent"});
        $(this).children().append("<style>span::before{animation:mobilenav 0.5s forwards;position:absolute;display:block;top:50% !important;left:0 !important;}</style>")
        $(this).children().append("<style>span::after{animation:mobilenav2 0.5s forwards;position:absolute;display:block;top:50% !important;left:0 !important;}</style>")
        $(this).siblings(".mobile").css({"display":"block"});
    },function(){
        $(this).children().css({"background":"#000"});
        $(this).children().append("<style>span::before{animation:mobilenav1 0.5s forwards;position:absolute;display:block;top:-9px !important;left:0 !important;}</style>")
        $(this).children().append("<style>span::after{animation:mobilenav3 0.5s forwards;position:absolute;display:block;top:10px !important;left:0 !important;}</style>")
        $(this).siblings(".mobile").css({"display":"none"});
    })

    $(".downNav>li").toggle(function(){
        $(this)?$(this).children(".mobiledownNav").css("display","block").end().children(".xz").stop().css({"animation":"rotate 0.5s forwards"}):null;
    },function(){
        $(this)?$(this).children(".mobiledownNav").css("display","none").end().children(".xz").stop().css({"animation":"rotate1 0.5s forwards"}):null;
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $("nav").css({"background":"#fff","border-bottom":"#e0e0e0 1px solid"});
        }else{
            $("nav").css({"background":"transparent","border":"none"});
        }
    })
})