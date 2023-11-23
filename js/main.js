

    $(document).ready(function() {
        $(".dropdown-toggle").dropdown();
    }); 
	// $(".cards a").click(function() {
	// 	var pop_img = $(this).attr('href');
	// 	$("body").append('<div class="pop_img_wrap"><div class="pop_img"><img src="' + pop_img + '"></div></div>')
	// 	return false
	// });
    $(function (){
        $('.top-bar .dropdown').on('mouseenter click',function (){
            $(this).addClass('dropdown-top')
            $(this).find('.dropdown-menu').addClass('dropdown-menu-show').removeClass('show')
        })
        $('.top-bar .dropdown').on('mouseleave',function (){
            $(this).removeClass('dropdown-top')
            $(this).find('.dropdown-menu').removeClass('dropdown-menu-show show')
        })
        $('.main-meu .dropdown').on('mouseenter click',function (){
            $(this).find('.dropdown-menu').addClass('dropdown-menu-show').removeClass('show')
        })
        $('.main-meu .dropdown').on('mouseleave',function (){
            $(this).find('.dropdown-menu').removeClass('dropdown-menu-show show')
        })
    });
/* Bottom to Top Button  */
$(function (){
    var btn = $('.go-back-to-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
    });

});


$('.go-to-bottom').bind("click", function () {
    $('html, body').animate({ scrollTop: $(document).height() }, 1100);
    return false;
});

/* Top to Bottom Button */
$(function (){
    $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
            $('.go-to-bottom').addClass('show');
        } else {
            $('.go-to-bottom').removeClass('show');
        }
    });

    $('.go-to-bottom').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $(document).height() }, '200');
    });

});