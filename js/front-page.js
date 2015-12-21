$(document).ready(function(){

    $(".hamburger").click(function(){
        $(".navbar").slideToggle(400);
    });

    $(window).resize(function() {
        if( $(window).width() > 1000 ) { 
        $('.navbar').show();
        }
    });

    $(window).resize(function() {
        if( $(window).width() < 1000 ) {  
        $('.navbar').hide();
        $(".pageTopArrow").show();
        $(".pageTopArrow").sticky('update');
        }
    });

    $(".subBox").click(function(event){
            $(this).toggleClass("subBox-Open", 1000);
            $(this).next().slideToggle();
    });

    $(".site-header").sticky({topSpacing:'0px',className:'stuck'});
    
    $(".pageTopArrow").css("display", "none");
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $(".pageTopArrow").fadeIn("slow");
        }
        else {
            $(".pageTopArrow").fadeOut("slow");
        }
    });

    $(".pageTopArrow").click(function(){
        event.preventDefault();
        $("html, body").animate({scrollTop:0},"slow");
    });

    $('a[href^="#"]').on('click',function (e) { //Ofsets internal anchor scrolling to compensate for the fixed nav bar
        if($(this).attr("class")==="pageTopArrow"){

        }
        else{
            e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-$('.site-header').outerHeight()
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
        } 
    });
    
});