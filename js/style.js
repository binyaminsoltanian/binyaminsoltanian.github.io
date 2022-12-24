$(document).ready(function () {
    $(".closeMenu").click(function () {
        $("#Menu").removeClass("Show"); 
        $("#Menu").addClass("Close");
    });
});
$(document).ready(function () {
    $(".menubtn").click(function () {
        $("#Menu").addClass("Show");
        $("#Menu").removeClass("Close"); 
    }); 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
            navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            },
        }
    })
});