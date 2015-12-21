$(document).ready(function(){

    $(".hamburger").click(function(){
        $(".navbar").slideToggle(400);
    });

    $(window).resize(function() {
        if( $(window).width() > 860 ) {  
        $('.navbar').show();
        }
    });

    $(window).resize(function() {
        if( $(window).width() < 860 ) {  
        $('.navbar').hide();
        }
    });
});