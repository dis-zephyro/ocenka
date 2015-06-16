// Слайдеры

$('.portfolio__slide').slick({
    arrows: false,
    vertical: true,
    autoplay: false,
    centermode: false,
    verticalSwiping: false,
    slidesToShow: 2,
    slidesToScroll: 2
});

$('.portfolio__more').click(function(){
    $('.portfolio__slide').slick('slickNext');
});
