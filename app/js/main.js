var price__house_rent = 2000,
price__payment_per_person = 500,
price__overnight_stay = 300,

price__full_food = 700,
price__breakfest = 150,
price__lunch = 200,
price__dinner = 350,
price__litchen_rent = 500,

price__bath = 500,
price__alcove = 3000,

price__toyota = 500,
price__gaz = 800
;

function calc(price, number){
	return(price*number);
}

function total(){
   var block_total = 0;
   $("input.sum_item").each(function(){
      block_total = block_total+$(this).val();
   });
   $(this).parent().parent().parent().parent().parent().parent().find('span.total').val(block_total);
   // return block_total;
}

// Вычисление строки с счетчиком
function calc_line($this){
	var input = $this.parent().parent().find('input[type=number]');
	var number = input.val();
	var price = input.attr('data-price');
	$this.parent().parent().parent().find('input[type=number].sum_item').val(parseInt(number*price));
}

// Вычисление суммы блока
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

// incdec
$(document).ready(function() {

	$('.inc').click(function () {
		var $input = $(this).parent().parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();

		calc_line($(this));

		// if ($('#number_of_days') != 0) {
		// 	$('#number_of_nights').prop('disabled',true);
		// }

		sum_block($(this));

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

		sum_total();
		return false;
	});

	$('.dec').click(function () {
		var $input = $(this).parent().parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();

		calc_line($(this));
		sum_block($(this));
		sum_total();

		return false;
	});

	//Рассчет чекбоксов
	$(function(){
		$("#place").click(function(){
			var sum=0; // начальное значение можно указать любое
			$('#place :checked').each(function(){
				if ($('#number_of_person_in_car').val() <= 4) {
					sum+=parseInt($(this).attr('data-price-1'));
				} else {
					sum+=parseInt($(this).attr('data-price-2'));
				}
			});
			sum *= $("#trailer option:selected").attr('data-price-factor');
			$('.block_total_6').val(sum);
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

	// Рассчет селекта выбора лодки с инструктором
	var boatRent_1_price_1 = $("#with_instructor").attr('data-price-1');
	var boatRent_1_price_2 = $("#with_instructor").attr('data-price-2');
	$("#with_instructor").change(function(){
		var numberOfPerson = $('#boatRent_1_numPerson').val(); //количество человек
		var numberOfDays = $('#boatRent_numDays').val(); //количество дней

		if ($("#with_instructor").val() == 1) {
			if (numberOfPerson <= 2) {
				// console.log(boatRent_1_price_1*numberOfDays);
				boatRent_1_sum += boatRent_1_price_1*numberOfDays;
			} else {
				// console.log(boatRent_1_price_2*numberOfDays);
				boatRent_1_sum += boatRent_1_price_2*numberOfDays;
			}
		} else{
			boatRent_1_sum = 0;
		}
		console.log(boatRent_1_sum);
	});

	// Рассчет селекта выбора лодки без инструктора
	var boatRent_2_price_1 = $("#without_instructor").attr('data-price-1');
	var boatRent_2_price_2 = $("#without_instructor").attr('data-price-2');
	$("#without_instructor").change(function(){
		var numberOfPerson = $('#boatRent_2_numPerson').val(); //количество человек
		var numberOfHours = $('#boatRent_numHours').val(); //количество часов

		if ($("#without_instructor").val() == 1) {
			if (numberOfPerson <= 2) {
				// console.log(boatRent_2_price_1*numberOfHours);
				boatRent_2_sum += boatRent_2_price_1*numberOfHours;
			} else {
				// console.log(boatRent_2_price_2*numberOfHours);
				boatRent_2_sum += boatRent_2_price_2*numberOfHours;
			}
		} else {
			boatRent_2_sum = 0;
		}
		console.log(boatRent_2_sum);
	});

	$(function(){
		$("select").change(function(){
				$('#boatRent_total').val(boatRent_1_sum+boatRent_2_sum);
		});
	});

});

// $(function(){
// 	if(block1__payment_per_person>3){
// 			$("label[for=toyota]").addClass("disabled")
// 		}
// 	});