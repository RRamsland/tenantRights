$(document).ready(function(){

    $(".hamburger").click(function(){ //Adds functionality to hamburger button
        $(".navbar").slideToggle(400);
    });

    $(window).resize(function() { //Converting from Mobile to Desktop
        if( window.innerWidth > 1000 ) {
            $('.navbar').show();
            $(".pageTopArrow").hide();
        }
    });

    $(window).resize(function() { //Converting from Desktop to Mobile
        if( window.innerWidth < 1000 ) {
            $('.navbar').hide();
            $(".pageTopArrow").show();
        }
    });

    var navArray = document.getElementsByClassName("nav-link"); //Active Page Indicator
    for(i=0;i<navArray.length;i++)
    {
        if(navArray[i].href==window.location.href){
            navArray[i].className = navArray[i].className + " active";
        }
    }

    $(".subBox").click(function(event){ //Adds functionality for subBoxes on the front page
            $(this).toggleClass("subBox-Open", 1000);
            $(this).next().slideToggle();
    });

    $(".helpfulTitle").click(function(event){ //Allows the user to show and hide content on the helpful links page on click
            $(this).next().slideToggle();
    });

    $(".site-header").sticky({topSpacing:'0px',className:'stuck'}); //Makes the site header fixed
    
    $(window).scroll(function(){ //Hides and shows the scroll arrow depending on screen size and distance from the top of the page; stays hidden if already on the top
        if(window.innerWidth < 1000){
            if($(window).scrollTop() > 0){
                $(".pageTopArrow").fadeIn("slow");
            }
            else {
                $(".pageTopArrow").fadeOut("slow");
            }
        }
    });

    $(".pageTopArrow").click(function(){ //Adds functionality to pageTopArrow
        event.preventDefault();
        $("html, body").animate({scrollTop:0},"slow");
    });

    $('a[href^="#"]').on('click',function (e) { //Adds smooth scrolling/Ofsets internal anchor scrolling to compensate for the fixed nav bar
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