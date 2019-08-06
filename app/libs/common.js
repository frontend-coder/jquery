$(document).ready(function () {
	// 	$("body").niceScroll({
	// horizrailenabled:false
	// });
	// вверхнее красиво-вращающееся меню
	// 1 и 2 строка это анимация крестика
	//3 строка - слайдер вниз меню
	//слайдер вниз меню отвечает за работу мобильного меню к переносу
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top-menu").slideToggle();
		return false;
	});
	$('body, .top-menu ul li a').click(function () {
		$('.hidden-mnu').hide("slow");
	});




// выборка селекторов с помощью jquery
$('.block').css({
	'padding'     : '30px 0',

});
$('.container-title').css({
	'text-align'     : 'center',
	'font-size'      : '2rem',
	'margin-bottom'  : '20px',
	'text-align'     : 'center',
	'text-transform' : 'uppercase'
});

$('#first_title').css({'color': 'red'});
$('.first_title').css({'color': '#f0f0f0'});
$('.second_title').css({'color':'blue',
 'text-decoration':'underline'});
$('.third_title').css({
	'margin'          : '10px 20px',
	'padding'         : '10px 20px',
	'color'           : '#B94B28',
	'border'          : '1px solid #B94B28',
	'display'         : 'inline-block',
	'color'           : '#B94B28',
	'text-decoration' : 'underline'});


$('.block_wraper h2:nth-child(5)').css({
	'color':'#B228B9',
	'text-decoration' : 'line-through'});

$('.block_wraper h2:last').css({'text-decoration' : 'line-through'});
$('.block_wraper h2:last-child').css({'text-decoration' : 'line-through'});
























	//Ajax push mesege http://api.jquery.com/jquery.ajax/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function () {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	//castom code









});