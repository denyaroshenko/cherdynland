<div id="accommodation" class="block">
  <h3 class="block__header">Проживание на базе в с. Камгорт</h3>
  <div class="block__body">
    <div class="block__body-left">
      <label id="label_days">
        Аренда дома (количество суток)
        <div class="counter">
          <input readonly type="number" id="block1_numberOfDays" data-price="2000" data-sale-factor="0.95" data-sale-border="3"  value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label for="number_of_person">
        Количество человек
        <div class="counter">
          <input readonly type="number" id="number_of_person" data-price="500" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label id="label_nights">
        Число ночевок
        <div class="counter">
          <input readonly type="number" id="block1_numberOfNights" data-price="300" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
    </div>
    <div class="block__body-right">
      Стоимость данного раздела:
      <input type="number" hidden id="block1_sale" class="sale" value="1">
      <div style="display: none;">
        Скидка: <input type="number" readonly class="sum_sale">
      </div>
      <input readonly type="number" id="rent_block" class="block_total" value="0">
    </div>
  </div>
</div>
<div class="block">
  <h3 class="block__header">Питание</h3>
  <div class="block__body">
    <div class="block__body-left">
      <label>
        3-х разовое питание (количество человек)
        <div class="counter">
          <input readonly type="number" data-price="700" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Завтрак (количество человек)
        <div class="counter">
          <input readonly type="number" data-price="150" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Обед (количество человек)
        <div class="counter">
          <input readonly type="number" data-price="200" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Ужин (количество человек)
        <div class="counter">
          <input readonly type="number" data-price="350" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда кухни (количество суток)
        <div class="counter">
          <input readonly type="number" data-price="500" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
    </div>
    <div class="block__body-right">
      Стоимость данного раздела:
      <input type="number" hidden id="block2_sale" class="sale" value="1">
      <input readonly type="number" class="block_total" value="0">
    </div>
  </div>
</div>
<div class="block">
  <h3 class="block__header">Аренда на базе в с. Камгорт</h3>
  <div class="block__body">
    <div class="block__body-left">
      <label>
        Беседка (количество суток)
        <div class="counter">
          <input readonly id="block3_numberOfDays" type="number" data-price="500" data-sale-factor="0.9" data-sale-border="3" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Баня (количество часов)
        <div class="counter">
          <input readonly id="block3_numberOfHours" type="number" data-price="1000"  value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
    </div>
    <div class="block__body-right">
      Стоимость данного раздела:
      <input type="number" hidden id="block3_sale" class="sale" value="1">
      <div style="display: none;">
        Скидка: <input type="number" readonly class="sum_sale">
      </div>
      <input readonly type="number" class="block_total" value="0">
    </div>
  </div>
</div>
<!-- Аренда автомобиля с водителем -->
<div class="block">
  <h3 class="block__header">Аренда автомобиля с водителем</h3>
  <div class="block__body">
    <div class="block__body-left">
      <label>
        Аренда автомобиля Toyota, в радиусе 50 км от базы
        <div class="counter">
          <input readonly id="block4_numberOfHours_toyota" type="number" data-price="500" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда автомобиля ГАЗ 33081 Егерь 2, в радиусе 50 км от базы
        <div class="counter">
          <input readonly id="block4_numberOfHours_gaz" type="number" data-price="800" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <!-- <label>
        <select name="" id="">
          Прицеп к автомобилю
          <option value="0">Нет</option>
          <option value="1">Да</option>
        </select>
      </label> -->
    </div>
    <div class="block__body-right">
      Стоимость данного раздела:
      <input type="number" hidden id="block4_sale" class="sale" value="1">
      <div style="display: none;">
        Скидка: <input type="number" readonly class="sum_sale">
      </div>
      <input readonly type="number" class="block_total" value="0">
    </div>
  </div>
</div>
<div id="place" class="block">
  <h3 class="block__header">Аренда автомобиля для заброски групп с водителем</h3>
  <div class="block__body">
    <div class="block__body-left">
      <label class="checkbox">
        <input readonly type="checkbox" data-price-1="6000" data-price-2="8000">с. Валай, р. Березовая
      </label>
      <label class="checkbox">
        <input readonly type="checkbox" data-price-1="7000" data-price-2="9000">с. Вижай, р. Березовая
      </label>
      <label class="checkbox">
        <input readonly type="checkbox" data-price-1="10000" data-price-2="14000">Татарский мост, р. Березовая
      </label>
      <label class="checkbox">
        <input readonly type="checkbox" data-price-1="3000" data-price-2="4500">с. Вижаиха, р. Колва
      </label>
      <label class="checkbox">
        <input readonly type="checkbox" data-price-1="40000" data-price-2="40000">с. Талово, р. Колва
      </label>
      <label class="checkbox">
        <input readonly type="checkbox" data-price-1="3000" data-price-2="4500">Мост верхний, р. Низьва
      </label>
      <label>
        Количество человек
        <div class="counter">
          <input readonly type="number" id="place_numberOfPerson" data-price="0" value="0">
          <div class="incdec">
            <span class="btn onlyinc">+</span>
            <span class="btn onlydec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Прицеп к автомобилю
        <select id="trailer">
          <option data-price-1="0" data-price-2="0" data-price-factor="1">Нет</option>
          <option data-price-1="0" data-price-2="0" data-price-factor="1.1">Да</option>
        </select>
      </label>
    </div>
    <div class="block__body-right">
      Стоимость данного раздела: <input readonly type="number" id="palce_total" class="block_total" value="0">
    </div>
  </div>
</div>
<!-- Аренда лодки -->
<div id="boat_rent" class="block">
  <h3 class="block__header">Аренда лодки</h3>
  <div class="block__body">
    <div class="block__body-left">
      <label>
        Аренда лодки с инструктором-гидом для заброски, далее 30 км от базы
        <select data-price-1="7000" data-price-2="10000" id="with_instructor">
          <option value="0">Нет</option>
          <option value="1">Да</option>
        </select>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Количество человек
        <div class="counter">
          <input readonly type="number" id="boatRent_1_numPerson" data-price="500" value="0">
          <div class="incdec">
            <span class="btn onlyinc">+</span>
            <span class="btn onlydec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Количество суток
        <div class="counter">
          <input readonly type="number" id="boatRent_numDays" data-price="500" value="0">
          <div class="incdec">
            <span class="btn onlyinc">+</span>
            <span class="btn onlydec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда лодки для рыбалки без инструктора, в радиусе 30 км от базы
        <select data-price-1="2000" data-price-2="3000" id="without_instructor">
          <option value="0">Нет</option>
          <option value="1">Да</option>
        </select>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Количество человек
        <div class="counter">
          <input readonly type="number" id="boatRent_2_numPerson" data-price="500" value="0">
          <div class="incdec">
            <span class="btn onlyinc">+</span>
            <span class="btn onlydec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Количество часов
        <div class="counter">
          <input readonly id="boatRent_numHours" type="number" id="boatRent_numHours" data-price="500" value="0">
          <div class="incdec">
            <span class="btn onlyinc">+</span>
            <span class="btn onlydec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
    </div>
    <div class="block__body-right">
      Стоимость данного раздела:
      <input type="number" hidden id="block6_sale" class="sale" value="1">
      <div style="display: none;">
        Скидка: <input type="number" readonly class="sum_sale">
      </div>
      <input readonly type="number" id="boatRent_total" class="block_total" value="0">
    </div>
  </div>
</div>
<!-- Аренда снегохода -->
<div class="block">
  <h3 class="block__header">Аренда снегохода</h3>
  <div class="block__body">
    <div class="block__body-left">
      <label>
        Аренда снегохода
        <div class="counter">
          <input readonly id="block7_numberOfHours" type="number" data-price="3000" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда снегохода для рыбалки в радиусе 10 км.
        <div class="counter">
          <input readonly id="block7_numberOfDays_1" type="number" data-price="7000" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда снегохода для рыбалки на Чусовском озере
        <div class="counter">
          <input readonly id="block7_numberOfDays_2" type="number" data-price="7000" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда снегохода для рыбалки с. Булдырья
        <div class="counter">
          <input readonly id="block7_numberOfDays_3" type="number" data-price="7000" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда снегохода для рыбалки на р. Джурич
        <div class="counter">
          <input readonly id="block7_numberOfDays_4" type="number" data-price="7000" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда снегохода для рыбалки на р.Березовая
        <div class="counter">
          <input readonly id="block7_numberOfDays_5" type="number" data-price="7000" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Аренда снегохода для рыбалки на верховьях р.Колва
        <div class="counter">
          <input readonly id="block7_numberOfDays_6" type="number" data-price="7000" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
      <label>
        Охота с использованием снегохода, с водителем-егерем, до 5 человек
        <div class="counter">
          <input readonly id="block7_numberOfDays_7" type="number" data-price="10000" value="0">
          <div class="incdec">
            <span class="btn inc">+</span>
            <span class="btn dec">-</span>
          </div>
        </div>
        <input readonly type="number" class="sum_item" value="0">
      </label>
    </div>
    <div class="block__body-right">
      Стоимость данного раздела:
      <input type="number" hidden id="block7_sale" class="sale" value="1">
      <div style="display: none;">
        Скидка: <input type="number" readonly class="sum_sale">
      </div>
      <input readonly type="number" class="block_total" value="0">
    </div>
  </div>
</div>
<div id="excursion" class="block">
  <h3 class="block__header">Экскурсии</h3>
  <div class="block__body">
    <div class="block__body-left">
      <label class="checkbox">
        <input readonly type="checkbox" value="900">Экскурсия по Чердыни
      </label>
      <label class="checkbox">
        <input readonly type="checkbox" value="2500">Экскурсия Чердынь - Ныроб
      </label>
      <label class="checkbox">
        <input readonly type="checkbox" value="750">Краеведческий музей
      </label>
    </div>
    <div class="block__body-right">
      Стоимость данного раздела: <input readonly type="number" id="block_total_excursion" class="block_total" value="0">
    </div>
  </div>
</div>
<p>Итого: <input readonly type="number" id="total" value="0"> руб.</p>