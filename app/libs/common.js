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

$('.second_bd').css({
	'background-color' : '#554956',

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

$('footer').css({'height' : '400px'});


// block second_bd
$('#rez_one').css({'color' : '#fff', 'margin' : '10px 5px' });
$('.nothin_wrap h4').css({'margin-bottom' : '20px'});
let dataIdOut = $('.nothin_wrap h6').data('id');
console.log(dataIdOut);
let dataNameOut = $('.nothin_wrap h6').data('name');
let myTime = $('.nothin_wrap h6').data('mytime');

document.getElementById("data_id_out").innerHTML = dataIdOut;
document.getElementById("data_name_out").innerHTML = dataNameOut;
document.getElementById("data_mytime_out").innerHTML = myTime;
$('#data_id_out_second').css({'margin-top' : '40px'});
document.querySelector("#data_id_out_second").innerHTML = dataIdOut;
document.querySelector("#data_name_out_second").innerHTML = dataNameOut;
document.querySelector("#data_mytime_out_second").innerHTML = myTime;

$('.all_elev').css({'padding-left' : '40px', 'margin-top' : '40px', 'list-style': 'none'});

  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
  	document.querySelector("#all_elev_out").innerHTML = elem['textContent'] ;
  	console.table(elem);
    //alert(elem.innerHTML); // "тест", "пройден"
  }

$('.box_links').css({'margin-top' : '20px'});
$('.box_links a').css({'display' : 'inline-block', 'padding' : '5px 10px'});
$(".box_links a[title='вторая ссылка']").css({'color' : 'red'});


$(".box_links a[title!='test']").css({'color' : 'blue'});
$(".box_links a[title$='test']").css({'color' : '#fff'});
 // Выбирает элементы, которые имеют указанный атрибут со значением, заканчивающимся точно данной строкой. Сравнение чувствительно к регистру.
$(".box_links a[title~='пробная']").css({'color' : 'orange'});
$(".box_links a[title*='раз']").css({'color' : '#B02DBB'});

$(".box_links a[hreflang|='en']").css({'color' : '#D20225'});
$(".box_links a[title|='ru']").css({'color' : '#D20225'});

$(".box_links a[title|='9090ru']").css({'color' : '#630D1C'});




$("#containts[title='ничего себе']").css({'padding': '10px', 'border' : '4px double black'});

$("#containts h2:contains('тестовое')").css({'color': 'red'});

$("#containts p:contains('-')").css({'color': 'red'});

// (30  https://www.youtube.com/watch?v=e5Oib9wkZHs )

$("#containts p:has(\"span\")").css({'color': '#010101', 'margin-top':'20px'});
$("#containts h3:has('span')").css({'color': '#710B1D', 'margin-top':'20px'});
$("#new_list li:has('span')").css({'font-weight': '900', 'color': '#710B1D', 'margin-top':'20px'});


$("#new_block_firsr p").css({'font-weight': '900', 'color': '#000'});
$("#new_block_firsr p:has('span')").css({'font-weight': '900', 'color': '#710B1D', 'margin-top':'20px'});



$("#tdl_1 tr td:parent").css({'background-color' : 'red', 'margin-top':'20px'});




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