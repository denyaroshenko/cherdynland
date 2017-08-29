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



// incdec
$(document).ready(function() {

	$('.inc').click(function () {
		var $input = $(this).parent().parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();

		var $this = $(this);
		var input = $this.parent().parent().find('input[type=number]');
		var number = input.val();
		var price = input.attr('data-price');
		$(this).parent().parent().parent().find('input[type=number].sum_item').val(parseInt(number*price));

		if ($('#number_of_days') != 0) {
			$('#number_of_nights').prop('disabled',true);
		}

		// Вычисление суммы блока
		var block_total = 0;
		var sum_item = $this.closest('.block__body-left').find('label').find('.sum_item');
		sum_item.each(function(){
			block_total += parseInt($(this).val());
		});
		$this.closest('.block__body').find('.block__body-right').find('input').val(block_total);

		// Скидки
		var sale = 0;
		var sale_factor = input.attr('data-sale-factor');
		var sale_border = input.attr('data-sale-border');
		console.log(sale_factor, sale_border);
		$(function(){
			if (($('#number_of_person').val() >= 10) || ($('#number_of_days').val() >= 3)) {
				sale = ($('#rent_block').val())*0.95;
				$('#rent_block').val(sale)
			// console.log(sale);
			}
			if (($('#number_of_person').val() >= 10) || ($('#number_of_nights').val() >= 10)) {
				sale = ($('#rent_block').val())*0.9;
				$('#rent_block').val(sale)
			}
		});

		// Рассчет итога
		var total = 0;
		$('.block_total').each(function(){
			total += 1*($(this).val());
		});
		$('#total').val(total);


		return false;
	});

	$('.dec').click(function () {
		var $input = $(this).parent().parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();

		var $this = $(this);
		var input = $this.parent().parent().find('input[type=number]');
		var number = input.val();
		var price = input.attr('data-price');

		$(this).parent().parent().parent().find('input[type=number].sum_item').val(parseInt(number*price));

		// Вычисление суммы блока
		var block_total = 0;
		var sum_item = $this.closest('.block__body-left').find('label').find('.sum_item');
		sum_item.each(function(){
			block_total += parseInt($(this).val());
		});
		$this.closest('.block__body').find('.block__body-right').find('input').val(block_total);

		// Рассчет итога
		var total = 0;
		$('.block_total').each(function(){
			total += 1*($(this).val());
		});
		$('#total').val(total);

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
		$('.block_total_excursion').val(sum);
	});
	});

	// Рассчет селекта выбора лодки с инструктором
	$("#with_instructor").change(function(){
		console.log($("#with_instructor").val());
	});

	// Рассчет селекта выбора лодки без инструктора
	$("#without_instructor").change(function(){
		console.log($("#without_instructor").val());
	});

});

// $(function(){
// 	if(block1__payment_per_person>3){
// 			$("label[for=toyota]").addClass("disabled")
// 		}
// 	});