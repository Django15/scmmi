/**
 * Created by littlefly on 2016/3/21.
 */
require("../css/style.css");

$(document).ready(function(){
    init_title();
    banner_slide();
});

function init_title() {
    $(".login-index").on("click", function(){
        $(".login_index").css({visibility:"visible", "z-index":"20"});
        $(".background-index").show();
    });
    $(".register-index").on("click", function(){
        $(".register_index").css({visibility:"visible", "z-index":"20"});
        $(".background-index").show();
    });
    $(".login-close").on("click", function(){
        $(".login_index").css({visibility:"hidden", "z-index":"-1"});
        $(".background-index").hide();
    });
    $(".register-close").on("click", function(){
        $(".register_index").css({visibility:"hidden", "z-index":"-1"});
        $(".background-index").hide();
    });
    $(".recommand-courses").on("mouseover", function(){

        $(this).addClass("active");
        $(".hot-courses").removeClass("active");
        $(".recommend_courses_show").css("display", "block");
        $(".hot_courses_show").css("display", "none");
    });
    $(".hot-courses").on("mouseover", function(){

        $(".recommand-courses").removeClass("active");
        $(this).addClass("active");
        $(".recommend_courses_show").css("display", "none");
        $(".hot_courses_show").css("display", "block");
    });
}

function banner_slide() {
    var curPosition = 0;
    var imgLength = $(".banner_img").length;
    var imgWidth = imgLength*100;
    var itemWidth = 1/imgLength*100;

    $(".b-img").width(imgWidth+"%");
    $(".b-img .banner_img").width(itemWidth+"%");

    $(".carousel-switch li:eq(0)").addClass("active").siblings("li").removeClass("active");
    $(".carousel-switch li").on("click", function() {
        var lsIndex = $(this).index();
        var ctPosition = lsIndex*100;
        $(".b-img").animate({"left":"-"+ctPosition+"%"}, 1000);
        $(this).addClass("active").siblings("li").removeClass("active");
        curPosition = lsIndex;
    });

    function rollEvent() {
        if (curPosition == imgLength-1) {
            var ctPosition=(curPosition+1)*100;
            $(".banner").append($(".b-img").clone());
            $(".b-img:last").css("left","100%");
            $(".b-img:first").animate({"left":"-"+ctPosition+"%"}, 500);
            $(".b-img:last").animate({"left":"0"},500);
            var setTime0=setTimeout(function() {
                $(".banner .b-img:first").remove();
            }, 1000);
            $(".carousel-switch li:eq(0)").addClass("active").siblings("li").removeClass("active");
            curPosition = 0;

        } else {
            curPosition++;
            var ctPosition=curPosition*100;
            $(".b-img").animate({"left":"-"+ctPosition+"%"}, 500);
            $(".carousel-switch li:eq("+curPosition+")").addClass("active").siblings("li").removeClass("active");
        }
    }

    var slidesetInterval=setInterval(rollEvent,4000);

    $(".b-img").mouseover(function() {
        clearInterval(slidesetInterval);
    }).mouseout(function() {
        slidesetInterval=setInterval(rollEvent,4000);
    });

}