
/**
 * Carousel
 */
$(document).ready(function() {
    $('.carousel').carousel();
});

/** 
 * Percentage
*/
$(document).ready(function() {
    $(window).scroll(function () { 
        //You've scrolled this much:
        //    $('p').text("You've scrolled " + $(window).scrollTop() + " pixels");
        if($(window).scrollTop() > 850)
        {
            $(".navbar.custom").css("background-color", "black");
        }
        else
        {
            $(".navbar.custom").css("background-color", "transparent");
        }
    });
});

