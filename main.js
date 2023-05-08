$(document).ready(function(){
    $('.brand-slider').owlCarousel({
        margin:20,
        dots : false,
        responsive:{
            0:{
                items:3,
                loop:true,
                mouseDrag : true
            },
            500:{
                items:4,
                loop:true,
                mouseDrag : true
            },
            768:{
                items:5,
                loop:true,
                mouseDrag : true
            },
            1000:{
                items:6,
                mouseDrag : false
            }
        }
    })


    $('.furniture-slider').owlCarousel({
        margin:20,
        dots : false,
        responsive:{
            0:{
                items:1,
                loop:true,
                mouseDrag : true
            },
            768:{
                items:2,
                loop:true,
                mouseDrag : true
            },
            1000:{
                items:3,
                mouseDrag : false
            }
        }
    })

   
});

$('.wrapDrop').hover(function(){
    $('.dropdown-menu ').addClass('show')
    }, function(){
    $('.dropdown-menu ').removeClass('show')
})

$(document).ready(function(){
    $('.bestSeller-slider').owlCarousel({
        margin:20,
        dots : false,
        nav : true,
        loop:true,
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

});

function changeIcon(el){
    if($(el).children('i').hasClass('bi-plus-lg')){
        $(el).children('i').removeClass('bi-plus-lg').addClass('bi-dash')
    }
    else{
        $(el).children('i').removeClass('bi-dash').addClass('bi-plus-lg')
    }
}

function resizeChangeFiller(){
    if($(window).width() < 769){
        $("#collapse-filter").removeClass('show')
    }
    else{
        $("#collapse-filter").addClass('show')
    }
}
resizeChangeFiller();
$(window).resize(resizeChangeFiller)

function changeIcon(el){
    if($(el).children('i').hasClass('bi-plus-lg')){
        $(el).children('i').removeClass('bi-plus-lg').addClass('bi-dash')
    }
    else{
        $(el).children('i').removeClass('bi-dash').addClass('bi-plus-lg')
    }
}