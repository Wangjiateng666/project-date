$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:5500/js/zzz_cont2.json",
        type: "get",
        dataType: "json",
        success: function (res) {
            $.each(res.data,function(index,value){
                $(".cont2>.row").append("<div class='p_list col-md-3 col-sm-4 col-xs-6'><a target='_blank' href='" +value.href +"'><img src='../img/"+value.img +"'><div><p class='image'>"+ value.name+"</p><p class='details'> </p><p class='price'>" + value.hot+"<span style='text-decoration: line-through;'>"+value.ma+"</span></p></div></a></div>")
            })
        }
    })
})