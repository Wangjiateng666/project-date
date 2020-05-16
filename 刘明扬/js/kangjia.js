//轮播图
var mySwiper = new Swiper('.swiper1', {
    effect: 'slide',
    mousewheel: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    // 初始化分页器
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        // 类型
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
    },
    // 初始化左右箭头
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

$(document).ready(function () {
    // 导航
    $.ajax({
        url: "http://127.0.0.1:5500/js/header_nav.json",
        type: "get",
        dataType: "json",
        success: function (res) {
            $.each(res.date, function (index, value) {
                $(".nav-ul").append("<li><a href='" + value.firstchild.href + "'>" + value.firstchild.name + "</a><div class='nav-li-box'> <div>  <div class='content_list'> <ul> </ul></div></div></div> </li>")
                $.each(value.secoudchild, function (ina, va) {
                    $(".content_list").eq(index - 1).children("ul").append("<li><span>" + res.date[index].secoudchild[ina].first.name + "</span> <div class='content_con'><ul class='chul'></ul> </div></li>")
                    $.each(va.secoud, function (i, v) {
                        $(".content_list").eq(index - 1).children("ul ").children("li").children(".content_con").eq(ina - 1).children("ul").append("<a href='" + v.href + "'><li><img src='../img/" + v.img + "'><p>" + v.name + "</p><p class='new_tag'>" + v.p + " </p></li></a>")
                    })
                })
            })
            $(".content_list >ul >li:first-child").addClass("active")
            $(".content_list >ul >li").mouseenter(function () {
                $(this).addClass("active").siblings().removeClass("active")
            })
        }
    })
    var $search = $(".search")
    var $close=$(".icon-times")
    $search.click(function () {
        $("header .search-active").css("display", "block");
        $(".ss").css("display","none")
    })
    $close.click(function(){
        $("header .search-active").css("display", "none")
        $(".ss").css("display","block")

    })
    //移动端导航点击显示隐藏
    $(".head_nav-menu ").click(function () {
        if ($("header ul li.nav").css("display") == "none") {
            $("header ul li.nav").css({ "display": "block" })
        } else {
            $("header ul li.nav").css("display", "none")
        }
    })
    $(window).resize(function () {
        if ($(window).width() > 1200) {
            $("header ul li.nav").css({ "display": "block" })
        } else {
            $("header ul li.nav").css("display", "none")
        }
    })
    $.ajax({
        url: "http://127.0.0.1:5500/js/footer.json",
        type: "get",
        dataType: "json",
        success: function (res) {
            $.each(res.date,function(index,value){
                $(".foot2>.row").children(".foot-nav").append("<div class='col-md-2 col-xs-12'><p>"+ value.firstchild.name+"</p><i class='glyphicon glyphicon-cloud btnn'></i><ul class='foot-sec'></ul>")
                $.each(value.secoudchild,function(ind,val){
                    $(".foot-sec").eq(index - 1).append("<li><a target='_blank' href='"+res.date[index].secoudchild[ind].href +"'>"+ res.date[index].secoudchild[ind].name+"</a></li>")

                })
            })
            $(".btnn").click(function(){
                if( $(this).next("ul").css("display") == "none"){
                    $(this).next("ul").css({ "display": "block" })
                }else{
                    $(this).next("ul").css({ "display": "none" })
                }
            })
            $(window).resize(function () {
                if ($(window).width() > 992){
                    $("footer .foot2 .foot2-row .col-md-2 ul").css({ "display": "block" })
                }else{
                    $("footer .foot2 .foot2-row .col-md-2 ul").css({"display":"none"})
                }
            })
        }
        
    })


})