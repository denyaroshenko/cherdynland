function calc(price, number){
	return(price*number);
}

// Прокручивание цифр
function roll_numbers(){
	var currentNumber = $('#total').text();
	$({numberValue: currentNumber}).animate({numberValue: 10000}, {
		duration: 500,
		easing: 'linear',
		step: function() {
			$('#dynamic-number').text(Math.ceil(this.numberValue));
		}
	});
}

// Расчет строки со счетчиком
function calc_line($this){
	var input = $this.parent().parent().find('input[type=number]');
	var number = input.val();
	var price = input.attr('data-price');
	$this.parent().parent().parent().find('input[type=number].sum_item').val(parseInt(number*price));
}

// Расчет суммы блока
function sum_block($this){
	var block_total = 0;
	var sum_item = $this.closest('.block__body-left').find('label').find('.sum_item');
	sum_item.each(function(){
		block_total += parseInt($(this).val());
	});
	$this.closest('.block__body').find('.block__body-right').find('input').val(block_total);
}

// Расчет итога
function sum_total(){
	var total = 0;
	$('.block_total').each(function(){
		total += 1*($(this).val());
	});
	$('#total').val(total);
}

// // Скидки
		// var sale = 0;
		// var sale_factor = input.attr('data-sale-factor');
		// var sale_border = input.attr('data-sale-border');
		// // console.log(sale_factor, sale_border);
		// $(function(){
		// 	if (($('#number_of_person').val() >= 10) || ($('#number_of_days').val() >= 3)) {
		// 		sale = ($('#rent_block').val())*0.95;
		// 		$('#rent_block').val(sale)
		// 	// console.log(sale);
		// 	}
		// 	if (($('#number_of_person').val() >= 10) || ($('#number_of_nights').val() >= 10)) {
		// 		sale = ($('#rent_block').val())*0.9;
		// 		$('#rent_block').val(sale)
		// 	}
		// });

// incdec
$(document).ready(function() {

// БЛОК 1 - Проживание на базе в с.Камгорт
	function block1_disable1() {
		console.log($('#block1_numberOfDays').val());
		if ($('#block1_numberOfDays').val() > 0) {
			$('#label_nights').addClass('disabled');
		} else {
			$('#label_nights').removeClass('disabled');
		}
	}

	function block1_disable2() {
		console.log($('#block1_numberOfDays').val());
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

		sum_block($(this));
		$('.spincrement:eq(4)').spincrement();

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

		block1_disable1();
		block1_disable2();
		calc_line($(this));
		sum_block($(this));
		sum_total();

		return false;
	});

	$('.onlyinc').click(function () {
		var $input = $(this).parent().parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$('.onlydec').click(function () {
		var $input = $(this).parent().parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
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
				if (numberOfPerson <= 4) {
					sum+=parseInt(price_1);
				} else {
					sum+=parseInt(price_2);
				}
			});
			sum *= $("#trailer option:selected").attr('data-price-factor');
			$('#palce_total').val(Math.round(sum));
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
			$('#block_total_excursion').val(sum);
			sum_total();
		});
	});

	// Расчет аренды лодки ///////////////////////////////////////////////////////
	var boatRent_total = 0;
	var boatRent_1_sum = 0;
	var boatRent_2_sum = 0;

	function sum_boatRent(){
		$('#boatRent_total').val(boatRent_1_sum+boatRent_2_sum);
	}

	// Рассчет селекта выбора лодки с инструктором
	var boatRent_1_price_1 = $("#with_instructor").attr('data-price-1');
	var boatRent_1_price_2 = $("#with_instructor").attr('data-price-2');

	$(".onlyinc, .onlydec, select").click(function(){
		var numberOfPerson = $('#boatRent_1_numPerson').val(); //количество человек
		var numberOfDays = $('#boatRent_numDays').val(); //количество дней

		if ($("#with_instructor").val() == 1) {
			console.log(numberOfPerson);
			if (numberOfPerson <= 2) {
				boatRent_1_sum = boatRent_1_price_1*numberOfDays;
			} else {
				boatRent_1_sum = boatRent_1_price_2*numberOfDays;
			}
		} else{
			boatRent_1_sum = 0;
		}
		console.log(boatRent_1_sum);
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
		console.log(boatRent_2_sum);
		sum_boatRent();
		sum_total();
	});

});