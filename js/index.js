var $win = $(window);


$win.on('scroll', function() {
 	console.log('scroll');
 })



$(document).ready(function() {
   var slideCount = $('#box-slider ul li').length;
   var slideHeight = $('#box-slider ul li').height();
   var slideWidth = $('#box-slider ul li').width();
   var sliderUlWidth = slideCount * slideWidth;
   var selecion = $('.selecion');

	var $sun = $('.animated');
	$('#toggle').click(function(){
		$('#toggle').toggleClass('on');
		$('.menu').toggleClass('active');
	})

    selecion.click(function(){
    	$('.menu').toggleClass('active');
    })



    

    console.log( "ANCHO DE UL :" + sliderUlWidth);

    $('#box-slider').css({ width: slideWidth, height: slideHeight });
	
        $('#box-slider ul').css({ width: sliderUlWidth });
     
 

      $('a.control_prev').click(function () {
         moveLeft();
     });
  

      $('a.control_next').click(function () {
         moveRight();
     });

     //$('#box-slider ul li:First-child').prependTo('#slider ul li');

    function moveRight() {
          $('#box-slider ul').animate({
            left: - slideWidth
        }, 2000, function () {
            //$('#box-slider ul li:first-child').appendTo('#box-slider ul');
            $('#box-slider ul').css('left', '');
        });
    };


    function moveLeft() {
         $('#box-slider ul').animate({
            left: + slideWidth
        }, 2000, function () {
            //$('#box-slider ul li:last-child').prependTo('#box-slider ul');
            $('#box-slider ul').css('left', '');
        });
    };



})