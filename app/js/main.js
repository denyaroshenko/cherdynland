function calc(price, number){
	return(price*number);
}

// Расчет строки со счетчиком
function calc_line($this){
	var input = $this.parent().parent().find('input[type=number]');
	var number = input.val();
	var price = input.attr('data-price');
	$this.parent().parent().parent().find('input[type=number].sum_item').val(parseInt(number*price));
}

//Скидка на 1 блок
function sale_block1(){
	if (($('#block1_numberOfDays').val() >= 3) || ((($('#number_of_person').val() >= 10)) & ($('#block1_numberOfNights').val() == 0))) {
		$('#block1_sale').val(0.95);
	} else{
		if (($('#block1_numberOfNights').val() >= 10) || ($('#number_of_person').val() >= 10)) {
			$('#block1_sale').val(0.9);
		} else {
			$('#block1_sale').val(1);
		}
	}
}

// Скидка на 3 блок
function sale_block3(){
	if (($('#block3_numberOfDays').val() >= 3) & ($('#block3_numberOfHours').val() < 6)){
		$('#block3_sale').val(0.9);
	} else {
		if ($('#block3_numberOfHours').val() >= 6) {
			$('#block3_sale').val(0.85);
		} else {
			$('#block3_sale').val(1);
		}
	}
}

// Скидка на 4 блок
function sale_block4(){
	if (($('#block4_numberOfHours_toyota').val() >= 8) & ($('#block4_numberOfHours_gaz').val() < 8)){
		$('#block4_sale').val(0.95);
	} else {
		if ($('#block4_numberOfHours_gaz').val() >= 8) {
			$('#block4_sale').val(0.9);
		} else {
			$('#block4_sale').val(1);
		}
	}
}

// Скидка на 6 блок
function sale_block6(){
	if ($('#block6_numberOfHours').val() >= 5){
		$('#block6_sale').val(0.9);
	} else {
		$('#block6_sale').val(1);
	}
}

// Скидка на 7 блок
function sale_block7(){
	if (($('#block7_numberOfHours').val() >= 5) || ($('#block7_numberOfDays_1').val() >= 5) || ($('#block7_numberOfDays_2').val() >= 5) || ($('#block7_numberOfDays_3').val() >= 5) || ($('#block7_numberOfDays_4').val() >= 5) || ($('#block7_numberOfDays_5').val() >= 5) || ($('#block7_numberOfDays_6').val() >= 5) || ($('#block7_numberOfDays_7').val() >= 5)){
		$('#block7_sale').val(0.9);
	} else {
		$('#block7_sale').val(1);
	}
}

// Расчет суммы блока
function sum_block($this){
	var block_total = 0;
	var sum_item = $this.closest('.block__body-left').find('label').find('.sum_item');
	sum_item.each(function(){
		block_total += parseInt($(this).val());
	});
	var sale = $this.closest('.block__body').find('.block__body-right').find('input.sale').val();
	var sum_sale = block_total - block_total*sale;
	if (sum_sale != 0) {
		$this.closest('.block__body').find('.block__body-right').find('.sale_label').find('input.sum_sale').val(sum_sale);
		$this.closest('.block__body').find('.block__body-right').find('.sale_label').css('display', 'block');
	} else {
		$this.closest('.block__body').find('.block__body-right').find('.sale_label').find('input.sum_sale').val('');
		$this.closest('.block__body').find('.block__body-right').find('.sale_label').css('display', 'none');
	}
	$this.closest('.block__body').find('.block__body-right').find('input.block_total').val(block_total*sale);
	$this.closest('.block__body').find('.block__body-right').find('span.block_total').text(block_total*sale);
}

// Расчет итога
function sum_total(){
	var total = 0;
	$('.block_total').each(function(){
		total += 1*($(this).text());
	});
	$('#total').text(total);
}


// incdec
$(document).ready(function() {
	var $this = $(this);

// БЛОК 1 - Проживание на базе в с.Камгорт
	function block1_disable1() {
		if ($('#block1_numberOfDays').val() > 0) {
			$('#label_nights').addClass('disabled');
		} else {
			$('#label_nights').removeClass('disabled');
		}
	}

	function block1_disable2() {
		if ($('#block1_numberOfNights').val() > 0) {
			$('#label_days').addClass('disabled');
		} else {
			$('#label_days').removeClass('disabled');
		}
	}

	$('.inc').click(function () {
		var $input = $(this).parent().parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();

		calc_line($(this));
		sale_block1();
		sale_block3();
		sale_block4();
		sale_block7();
		sum_block($(this),1);

		sum_total();
		block1_disable1();
		block1_disable2();
		return false;
	});

	$('.dec').click(function () {
		var $input = $(this).parent().parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();

		sale_block1();
		sale_block3();
		sale_block4();
		sale_block7();
		block1_disable1();
		block1_disable2();
		calc_line($(this));
		sum_block($(this),1);
		sum_total();

		return false;
	});

	$('.onlyinc').click(function () {
		var $input = $(this).parent().parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();

		sale_block6();
		return false;
	});

	$('.onlydec').click(function () {
		var $input = $(this).parent().parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();

		sale_block6();
		return false;
	});



	//Рассчет чекбоксов для заброски
	$(function(){
		$("#place").click(function(){
			var sum=0;
			$('#place :checked').each(function(){
				var price_1 = $(this).attr('data-price-1');
				var price_2 = $(this).attr('data-price-2');
				var numberOfPerson = $('#place_numberOfPerson').val();
				if (numberOfPerson <= 3) {
					sum+=parseInt(price_1);
				} else {
					sum+=parseInt(price_2);
				}
			});
			sum *= $("#trailer option:selected").attr('data-price-factor');
			$('#palce_total').text(Math.round(sum));
			sum_total();
		});
	});

	//Рассчет чекбоксов для экскурсий
	$(function(){
		$("#excursion").click(function(){
			var sum=0; // начальное значение можно указать любое
			$('#excursion :checked').each(function(){
				sum+=parseInt($(this).val());
			});
			$('#block_total_excursion').text(sum);
			sum_total();
		});
	});

	// Расчет аренды лодки
	var boatRent_total = 0;
	var boatRent_1_sum = 0;
	var boatRent_2_sum = 0;

	function sum_boatRent(){
		$('#boatRent_total').text(boatRent_1_sum+boatRent_2_sum);
	}

	// Рассчет селекта выбора лодки с инструктором
	var boatRent_1_price_1 = $("#with_instructor").attr('data-price-1');
	var boatRent_1_price_2 = $("#with_instructor").attr('data-price-2');

	$(".onlyinc, .onlydec, select").click(function(){
		var numberOfPerson = $('#boatRent_1_numPerson').val(); //количество человек
		var numberOfDays = $('#boatRent_numDays').val(); //количество дней

		if ($("#with_instructor").val() == 1) {
			if (numberOfPerson <= 2) {
				boatRent_1_sum = boatRent_1_price_1*numberOfDays;
			} else {
				boatRent_1_sum = boatRent_1_price_2*numberOfDays;
			}
		} else{
			boatRent_1_sum = 0;
		}
		sum_boatRent();
		sum_total();
	});

	// Рассчет селекта выбора лодки без инструктора
	var boatRent_2_price_1 = $("#without_instructor").attr('data-price-1');
	var boatRent_2_price_2 = $("#without_instructor").attr('data-price-2');

	$(".onlyinc, .onlydec, select").click(function(){
		var numberOfPerson = $('#boatRent_2_numPerson').val(); //количество человек
		var numberOfHours = $('#boatRent_numHours').val(); //количество часов

		if ($("#without_instructor").val() == 1) {
			if (numberOfPerson <= 2) {
				boatRent_2_sum = boatRent_2_price_1*numberOfHours;
			} else {
				boatRent_2_sum = boatRent_2_price_2*numberOfHours;
			}
		} else {
			boatRent_2_sum = 0;
		}
		sum_boatRent();
		sum_total();
	});

	// Формирование резюме для отправки
	$('#send').click(function () {
		$('.resume').text('');
		$('.block').each(function() {
			var block_name = $(this).find('h3').text();
			var block_sum = $(this).find('.block_total').text();
			console.log(block_sum);
			// Выводим блок, если его сумма не 0
			if (block_sum > 0) {
				$('.resume').append('<div>' + block_name + '</div>');
				$(this).find('label').each(function(){
					var title = $(this).find('.block_body__title').text();
				//если счетчик
				if ($(this).hasClass('checkbox')) {
					var value = $(this).find('input:checked').val();
					var sum = $(this).find('input:checked').val();
				}
				// если чекбоксы
				else{
					var value = $(this).find('.counter').find('input').val();
					var sum = $(this).find('.sum_item').val();
				}

				if (value > 0) {
					$('.resume').append('<div>--- ' + title + ' - ' + value + ' - ' + sum +' руб.</div>');
				}
			})
			}
		});

		$('.resume').append('<div>Итоговая сумма:' + $('#total').text() +' руб.</div>');
		$('textarea').text($('.resume').text());
		return false;
	});

});