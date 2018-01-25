var $win = $(window);


$win.on('scroll', function() {
 	console.log('scroll');
 })



$(document).ready(function() {
   var selecion = $('.selecion');

	var $sun = $('.animated');
	$('#toggle').click(function(){
		$('#toggle').toggleClass('on');
		$('.menu').toggleClass('active');
	})

    selecion.click(function(){
    	$('.menu').toggleClass('active');
    })



})