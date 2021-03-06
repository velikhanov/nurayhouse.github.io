$(document).ready(function() {

  var path = window.location.href;
  $('.nav__link, .nav__link_child').each(function() {
   if (this.href === path) {
    $(this).addClass('active');
   }
  });
  $('.nav__link_child').each(function() {
   if (this.href === path) {
    $('.nav__link.arr.d').addClass('active');
   }
  });
  $('.nav__link_footer').each(function() {
   if (this.href === path) {
    $(this).addClass('_active');
    $(this).parent().addClass('activelist');
    }
  });
 /*Dropdown menu toggle*/
   $("#btn").click (function() {
     // используйте здесь дополнительные прверки
     // при каких условия данный клик будет срабатывать
     // например, размер экрана, viewport'a, ориентация
     // или что то другое
     $(".child").slideToggle(500);
   });
 /*Menu icon toggle*/
   $(".menu-trigger").click(function() {
     // используйте здесь дополнительные прверки
     // при каких условия данный клик будет срабатывать
     // например, размер экрана, viewport'a, ориентация
     // или что то другое
     $(".parent").slideToggle(500);
   });
   $(window).resize(function() {
       if ($(window).width() > 870 ){
         $('.parent').removeAttr('style');
       }
   });
 /*hamburger menu icon*/
   $('.menu-trigger').click(function () {

    $('.animated-icon2').toggleClass('open');
  });
 /*Arrow animation*/
 	$(".nav__link.arr").click(function(){
 		$(".arrow").toggleClass("arrow-active");
 	});

});
