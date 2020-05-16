$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:5500/js/ind_cont2.json",
        type: "get",
        dataType: "json",
        success: function (res) {
            $.each(res.data,function(index,value){
                $(".cont2>.row").append("<div class='col-md-6 col-sm-12'> <a href='" + value.href+"' style=' background: url(../img/"+ value.img+") center center / cover no-repeat;'> <div class='con2-txt'> <div><h3> " + value.name+"</h3><p>"+ value.ps+"</p> </div></div></a></div>")
            })
        }
    })
    $.ajax({
        url: "http://127.0.0.1:5500/js/ind_cont3.json",
        type: "get",
        dataType: "json",
        success: function (res) {
            $.each(res.data,function(index,value){
                $(".cont3>.row").append("<div class='col-md-4 col-sm-12'> <a href='"+ value.href+"'> <img src='../img/"+value.img +"'> </a> <div class='cont-text'><p class='p1'>" + value.name+"</p><p class='p2'>" + value.ps+"</p><a href='"+value.href +"'>了解更多&gt;</a></div>")
            })
        }
    })
})