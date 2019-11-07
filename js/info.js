$(document).ready(function(){
    $('ul li a').click(function(){
        $('a').removeClass("nav-active");
        $(this).addClass("nav-active")});
        $("#content-tabs a").click(function(){
            var listposition=$(this).parent().position();
            var listwidth=$(this).parent().width();
            $(".list-slider").css({"left":+listposition.left,"width":listwidth})
        });
        $("#content-tabs a:first").tab('show');
        var listWidth=$("#content-tabs").find(".active").parent("li").width();
        var listPosition=$("#content-tabs .active").position();
        $(".list-slider").css({"left":+listPosition.left,"width":listWidth});
        $("#nav-tabs a").click(function(){var position=$(this).parent().position();
            var width=$(this).parent().width();
            $(".slider").css({"left":+position.left,"width":width})
        });
        $("#nav-tabs a:first").tab('show');
        var actWidth=$(".nav-tabs").find(".active").parent("li").width();
        var actPosition=$(".nav-tabs .active").position();
        $(".slider").css({"left":+actPosition.left,"width":actWidth});
        $('.masonry-with-column').lightGallery();
    });
    var typed3=new Typed('.typed',{strings:['This Section Contain Our Personal Project', 'If You Like it You can Subscribe Our Channel on Youtube'],typeSpeed:50,backSpeed:50,backDelay:500,startDelay:1000,smartBackspace:!0,loop:!1})
