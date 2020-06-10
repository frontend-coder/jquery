$(document).ready(function() {
  // 	$("body").niceScroll({
  // horizrailenabled                        : false
  // });
  // вверхнее красиво-вращающееся меню
  // 1 и 2 строка это анимация крестика
  //3 строка - слайдер вниз меню
  //слайдер вниз меню отвечает за работу мобильного меню к переносу
  $('.toggle-mnu').click(function() {
    $(this).toggleClass('on');
    $('.top-menu').slideToggle();
    return false;
  });
  $('body, .top-menu ul li a').click(function() {
    $('.hidden-mnu').hide('slow');
  });

  $('#fistr__container');
  $('a');
  $('.van_more');
  $('#secont__container h2 ');
  $('#secont__container .title ');
  $('nav menu');
  $('nav.class__menu');
  $('.bocks_in>div').css({ 'background-color': '#554956' });
  $('.bocks_in > div:nth-child(3) .h4').css({
    'background-color': '#554956',
    'padding-top': '20px',
    'margin-left': '30px',
  });
  $('.bocks_in > div img + h2').css({
    'letter-spacing': '410px',
  });

  $('.block_s .row > div').css('margin-bottom', '30px');
  $('.wrapper___linking a[height=150]').css({ border: '1px solid red' });
  $('.wrapper___linking1 a[href^=https]').css({ border: '1px solid blue' });
  $('.wrapper___linking1 a[href^=http]').css({ border: '1px solid blue' });
  $('.wrapper___linking2 a[href$=lt]').css({ border: '1px solid red' });
  $('.wrapper___linking2 a[href$=to]').css({ border: '1px solid red' });
  $('.wrapper___linking2 a[alt]').css({ color: 'blue' });
  $('.wrapper___linking3 a[class|="link"]').css({ color: 'blue' });
  //Например, выбрать все элементы div, которые имеют атрибут class со значением, равным alert или начинающимся с alert-.
  $('.wrapper___linking5 a[class~="bnt"]').css({ color: '#006400' });
  $('.wrapper___linking5 a[class~="class__link"]').css({ color: '#5F9EA0' });
  $('.wrapper___linking6 a[rel!="nofollow"]').css({ color: '#FF00FF' });
  $('.wrapper___linking4 a[href*="youtube"]').css({ color: 'blue' }); // любом месте
  $('.wrapper___linking7 a[href*="google"]').css({ color: 'blue' });

  $('[attr1][attr2][attrN]');
  $('a[id][href^="http"][class~="btn"]');

  // фильтрация выборок

  $('.drezden ul').css({
    'padding-top': '20px',
    'list-style-type': 'none',
    color: 'red',
  });
  $('.drezden ul li:even').css({ color: 'gray' });
  $('.drezden ul li:odd').css({ color: '#0000FF' });

  $('.drezden__1 ul').css({
    'padding-top': '20px',
    'list-style-type': 'none',
    color: 'red',
  });

  $('.drezden__1 ul li:not(.faver)').css({ color: '#04B404' });

  $('.drezden__1 ul li:has(a)').css({
    color: '#585858',
    'text-decoration': 'underline',
  });
  $('.drezden__1 ul li a').css({ 'text-decoration': 'line-through' });

  $('.drezden__2 ul').css({ 'margin-top': '20px' });
  $('.drezden__2 ul li:contains(первый)').css({
    'text-decoration': 'line-through',
    color: 'red',
  });
  $('.drezden__2 ul li:contains(шестой)').css({
    'text-decoration': 'overline',
    color: 'red',
  });

  $('.drezden__3').css({ 'margin-top': '20px' });
  $('.drezden__3 ul li:first').css({
    'list-style-type': 'none',
    'text-decoration': 'overline',
    color: 'red',
  });
  $('.drezden__3 ul li:last').css({
    'list-style-type': 'none',
    'text-decoration': 'underline',
    color: 'red',
  });

  $('.drezden__4').css({ 'margin-top': '20px', 'border-top': '1px solid red' });
  $('.drezden__4 h2').css({
    'margin-top': '20px',
    'text-align': 'center',
    'margin-bottom': '20px',
  });

  $('.drezden__4 ul li:last').css({
    'list-style-type': 'none',
    'text-decoration': 'underline',
    color: 'red',
  });

  $('.drezden__4 h2 + p').css({ color: 'red' });

  $('.drezden__4 p > span').css({ 'font-weight': '800' });

  //$(".drezden__4 div:hidden").css({'font-weight':'800'});

  // $(".drezden__4 div:visibility").css({'font-weight':'800'});
  $('.drezden__7 p:eq(1)').css({ color: 'red', 'font-weight': '800' });

  $('#vivod_text')
    .css('cursor', 'pointer')
    .hide(2000);
  $('#vivod_text').show(5000);

  $('#vivod_text4')
    .css('cursor', 'pointer')
    .hide(2000)
    .show(5000);

  $('.click').on('click', function() {
    let vivodText = $('#vivod_text4').width();
    let vivodHeight = $('#vivod_text4').height();
    alert(
      'длина текста: ' +
        vivodText +
        'px' +
        'vivodHeight: ' +
        vivodHeight +
        'px',
    );
  });

  //Добавить текст на jQuery, Методы
  const textInSide = $('.jmi_data').text();
  //alert(textInSide);
  $('#jmi_data_exet').text(
    'Новое значение переменной составляет ' + textInSide,
  );
  $('.jmi').css({
    'margin-top': '2rem',
    'font-size': '24px',
    color: 'red',
    'text-decoration': 'overline',
  });
  $('.jmi')
    .hide('2000')
    .show('4000'); // цепнпя функция

  // this_button
  // alert($('.this_button').width());
  $('.this_button').css({
    'margin-top': '120px',
    display: 'inline-block',
    border: '1px solid red',
    padding: '20px 30px',
  });
  $('.this_button').width('290px');

  const thisButton = $('.that_button').width();
  $('.that_button2')
    .width(280)
    .css({
      'text-align': 'center',
      display: 'inline-block',
      border: '1px solid red',
    });
  $('#that_button_result').text(thisButton + ' px');

  //alert($('#geremu').html());
  const oneDelegam = 345;

  $('#geremu .geremu_item').html(
    '<p>Этo новый контект, который будет добавляться из jquery</p>',
  );

  $('#geremu .geremu_item_two').html(
    '<p>Этo новый контект, который будет добавляться из jquery </p>' +
      oneDelegam,
  );

  $('#gerundiy_text').css({
    'margin-bottom': '50px',
    'margin-top': '50px',
    display: 'inline-block',
    border: '1px solid red',
    padding: '20px 30px',
  });

  $('#gerundiy_text').before('<p>Текст перед контейнером </p>');
  $('#gerundiy_text').after('<p>Текст после контейнером </p>');

  $('#gerundiy_text').prepend(
    '<p>1.Текст в начале наполнениия контейнером </p>',
  );
  $('#gerundiy_text').append('<p>2.Текст в конце наполнениия контейнером </p>');

  $('#attribution .attribution_link').attr(
    'title',
    'Это название титла ссылки',
  );

  $('#attribution .attribution_link').attr('alt', 'Это описание ссылки');

  $('#attribution .attribution_pic').attr(
    'alt',
    'Это я работаю с описанием картинки',
  );

  $('#attribution .attribution_pic').attr('class', 'attribution_pic');

  $('#attribution .attribution_pic').attr('src', 'img/Screenshot_3.jpg');

  /// $('#box_box ul li').slideUp(13000).slideDown(3000).slideUp(3000).slideDown(3000).slideUp(3000);

  $('#box_box_twoo ul li')
    .fadeOut(1300)
    .fadeIn(3000)
    .fadeTo(2000, 0.1);

  $('#box_box_three').css({ 'padding-top': '30px', 'list-style-type': 'none' });
  $('#box_box_three ul').css({ 'list-style-type': 'none' });
  $('#box_box_three ul li').animate(
    {
      'font-size': '23px',
      padding: '10px 20px',
    },
    6000,
    console.log('процедура завершена'),
  );

  $('#box_box_foure ul li').each(function() {
    if ($(this).attr('data-dome') == 'verdi') {
      $(this).css({ color: 'red' });
    } else if ($(this).attr('data-dome') == 'purdi') {
      $(this).css({ color: 'purple' });
    } else if ($(this).attr('data-dome') == 'shordi') {
      $(this).css({ color: '#FFD700' });
    } else if ($(this).attr('data-dome') == 'purdy') {
      $(this).css({ color: 'darkolivegreen' });
    } else {
      $(this).css({ color: '#32CD32' });
    }
  });

  $('.parent_wrap_items')
    .parent()
    .css({ border: '1px solid red', padding: '20px' });
  $('.parent_wrap_items')
    .parent()
    .parent()
    .css({ border: '1px solid blue', padding: '20px' });
  $('#parent')
    .children()
    .children()
    .children()
    .children()
    .css({ border: '1px solid olive', padding: '20px' });

  $('#closest').css({
    'border-top': '1px solid blue',
    'margin-top': '20px',
    'padding-top': '20px',
  });
  $('#closest h2').css({ 'margin-bottom': '20px', 'padding-top': '20px' });

  $('#closest .parent_wrap_item p:last')
    .closest('div')
    .css({ color: 'red', 'margin-bottom': '20px', 'padding-top': '20px' });
  //выбирается ближайший тег к тому что указан как ориентир выборки

  $('.parent_wrap_item p')
    .parents()
    .css({ border: '1px solid yellow' });

  $('#attribution .attribution_pic').css({
    'margin-top': '40px',
    display: 'inline-block',
    'max-width': '100%',
  });

  $('.find_over_wrap').css({ padding: '10px', border: '1px solid blue' });

  $('.find_over_wrap_items ul')
    .find('li:last')
    .css({ border: '1px solid red' });

  $('.find_over_wrap_items ul')
    .find('li:eq(1)')
    .css({ margin: '10px', padding: '10px', border: '1px solid orange' });

  $('#basic_prev')
    .prev()
    .css({ margin: '10px', padding: '10px', border: '1px solid blue' });

  $('#basic_prev')
    .prev()
    .prev()
    .css({ margin: '10px', padding: '10px', border: '10px solid grey' });

  $('#basic_prev')
    .prev()
    .prev()
    .prev()
    .css({ margin: '10px', padding: '10px', border: '10px solid orange' });
});

$('#basic_prev')
  .next()
  .next()
  .next()
  .css({ margin: '10px', padding: '10px', border: '10px solid orange' });
});
$('#basic_prev')
  .prev('h3')
  .css({ margin: '10px', padding: '10px', border: '10px solid orange' });
});

$('#basic_prev')
  .next('h2')
   .css({ margin: '10px', padding: '10px', border: '10px solid orange' });
});

$('#basic_prev')
  .siblings()
  .css({ margin: '10px' });
});
//выбор всех соседей на одном уровне
$('#basic_prev')
  .siblings('.green')
  .css({ margin: '10px' });
});

// // выборка селекторов с помощью jquery
// $('.block').css({'padding' : '30px 0'});

// $('.second_bd').css({
// 	'background-color' : '#554956',

// });

// $('.container-title').css({
// 	'text-align'     : 'center',
// 	'font-size'      : '2rem',
// 	'margin-bottom'  : '20px',
// 	'text-align'     : 'center',
// 	'text-transform' : 'uppercase'
// });

// $('#first_title').css({'color': 'red'});
// $('.first_title').css({'color': '#f0f0f0'});
// $('.second_title').css({'color':'blue',
//  'text-decoration':'underline'});
// $('.third_title').css({
// 	'margin'          : '10px 20px',
// 	'padding'         : '10px 20px',
// 	'color'           : '#B94B28',
// 	'border'          : '1px solid #B94B28',
// 	'display'         : 'inline-block',
// 	'color'           : '#B94B28',
// 	'text-decoration' : 'underline'});

// $('.block_wraper h2:nth-child(5)').css({
// 	'color':'#B228B9',
// 	'text-decoration' : 'line-through'});

// $('.block_wraper h2:last').css({'text-decoration' : 'line-through'});
// $('.block_wraper h2:last-child').css({'text-decoration' : 'line-through'});

// $('footer').css({'height' : '400px'});

// // block second_bd
// $('#rez_one').css({'color' : '#fff', 'margin' : '10px 5px' });
// $('.nothin_wrap h4').css({'margin-bottom' : '20px'});
// let dataIdOut = $('.nothin_wrap h6').data('id');
// //console.log(dataIdOut);
// let dataNameOut = $('.nothin_wrap h6').data('name');
// let myTime = $('.nothin_wrap h6').data('mytime');

// document.getElementById("data_id_out").innerHTML = dataIdOut;
// document.getElementById("data_name_out").innerHTML = dataNameOut;
// document.getElementById("data_mytime_out").innerHTML = myTime;
// $('#data_id_out_second').css({'margin-top' : '40px'});
// document.querySelector("#data_id_out_second").innerHTML = dataIdOut;
// document.querySelector("#data_name_out_second").innerHTML = dataNameOut;
// document.querySelector("#data_mytime_out_second").innerHTML = myTime;

// $('.all_elev').css({'padding-left' : '40px', 'margin-top' : '40px', 'list-style': 'none'});

//   let elements = document.querySelectorAll('ul > li:last-child');

//   for (let elem of elements) {
//   	document.querySelector("#all_elev_out").innerHTML = elem['textContent'] ;
//   //	console.table(elem);
//     //alert(elem.innerHTML); // "тест", "пройден"
//   }

// $('.box_links').css({'margin-top' : '20px'});
// $('.box_links a').css({'display' : 'inline-block', 'padding' : '5px 10px'});
// $(".box_links a[title='вторая ссылка']").css({'color' : 'red'});

// $(".box_links a[title!='test']").css({'color' : 'blue'});
// $(".box_links a[title$='test']").css({'color' : '#fff'});
//  // Выбирает элементы, которые имеют указанный атрибут со значением, заканчивающимся точно данной строкой. Сравнение чувствительно к регистру.
// $(".box_links a[title~='пробная']").css({'color' : 'orange'});
// $(".box_links a[title*='раз']").css({'color' : '#B02DBB'});

// $(".box_links a[hreflang|='en']").css({'color' : '#D20225'});
// $(".box_links a[title|='ru']").css({'color' : '#D20225'});

// $(".box_links a[title|='9090ru']").css({'color' : '#630D1C'});

// $("#containts[title='ничего себе']").css({'padding': '10px', 'border' : '4px double black'});

// $("#containts h2:contains('тестовое')").css({'color': 'red'});

// $("#containts p:contains('-')").css({'color': 'red'});

// // (30  https://www.youtube.com/watch?v=e5Oib9wkZHs )

// $("#containts p:has(\"span\")").css({'color': '#010101', 'margin-top':'20px'});
// $("#containts h3:has('span')").css({'color': '#710B1D', 'margin-top':'20px'});
// $("#new_list li:has('span')").css({'font-weight': '900', 'color': '#710B1D', 'margin-top':'20px'});

// $("#new_block_firsr p").css({'font-weight': '900', 'color': '#000'});
// $("#new_block_firsr p:has('span')").css({'font-weight': '900', 'color': '#710B1D', 'margin-top':'20px'});

// $("#tdl_1 tr td:parent").css({'background-color' : 'red', 'margin-top':'20px'});

// $('#first_button').click(function(){
// let rebTB = 'только что кликнули по соседке';
// document.querySelector("#rebtv").innerHTML = rebTB;
// document.querySelector("#second_button").innerHTML = rebTB;
// });

// $('#third_button').on('click', function(){
// let rebTB = 'только что кликнули еще раз по соседке';
// document.querySelector("#rebtv_tv").innerHTML = rebTB;
// document.querySelector("#fourth_button").innerHTML = rebTB;
// });

// $("#form_first").css({'margin-top' : '30px', 'border': '2px solid red'});
// $("input[name='prizma']").css({'margin' : '20px 10px', 'height' : '30px', 'border': '5px solid #eee'});

// $("input[name='prizma']").change(function(){
// const getVBalue = $(this).val(); // если пусту - забирает value тега
// $("input[name='submit']").val(getVBalue); // переменнная в скобках а значит передает переменную в обозначенный контейнер

// });

// $("input[name='prizma']").keyup(function(){
// const getVBalue = $(this).val(); // если пусту - забирает value тега
// $("input[name='submit']").val(getVBalue); // переменнная в скобках а значит передает переменную в обозначенный контейнер
// });

// $("#form_first").submit(function(){
// 	const getSubmit = 'Cообщение отправлено!';
// $('#get_submit').val(getSubmit);

// });
// $("input[name='submit']").on('click', function(){
// 	const getSubmit = 'Cообщение отправлено!';
// $('#get_submit').val(getSubmit);

// });

/// https://www.youtube.com/watch?v=e5Oib9wkZHs
//  44 минуты

// //Ajax push mesege http://api.jquery.com/jquery.ajax/
// $("form").submit(function() { //Change
// 	var th = $(this);
// 	$.ajax({type: "POST",
// 		url: "mail.php", //Change
// 		data: th.serialize()
// 	}).done(function () {
// 		$(".forms-calldecor .success").addClass("active");
// 		setTimeout(function () {
// 			// Done Functions
// 			$(".forms-calldecor .success").removeClass("active");
// 			th.trigger("reset");
// 			$.magnificPopup.close();
// 		}, 3000);
// 	});
// 	return false;
// });
// //castom code
