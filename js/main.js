// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});


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


$(".btn-popup").fancybox({
    "padding" : 0
});