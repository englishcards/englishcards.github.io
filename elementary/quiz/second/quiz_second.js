function makeTest() {
  const btnPrev = document.querySelector('.btn-previos');
  const btnNext = document.querySelector('.btn-next');
  const allWords = document.querySelectorAll('.word');
  const listDisable = document.querySelector('.list-disabled');
  let progress = document.querySelector('.progress');
  let result = document.querySelector('.result');
  let mainRu = document.querySelector('.test-title');
  let word = document.querySelector('.word-en');
  let wordWr1 = document.querySelector('.word-en-wr');
  let wordWr2 = document.querySelector('.word-en-wr2');

  let current = 0;
  let counterResult = 0;
  let random1;
  let random2;
  let random3;
  let num;
  let persentage = 100 / wordEng.length;

  progress.innerText = `1 / ${wordEng.length}`;
  result.innerText = 0 + '%';
  word.innerText = wordEng[current];
  mainRu.innerText = wordRu[current];
  wordWr1.innerText = wordEng[5]; 
  wordWr2.innerText = wordEng[9];
  allWords[0].onclick = countResult;
  allWords[1].onclick = () => {
    allWords[1].style.backgroundImage = 'url(../../img_main/unchecked.svg)';
    listDisable.hidden = false;
  }  
  allWords[2].onclick = () => {
    allWords[2].style.backgroundImage = 'url(../../img_main/unchecked.svg)';
    listDisable.hidden = false;
  }

  btnNext.onclick = showNext;

  function showNext() {
    if (current == (wordEng.length - 1) ) {
      showModal(); 
      return;
    }   
    current++;
    mainRu.innerText = wordRu[current];
    progress.innerText = `${current + 1} / ${wordEng.length}`;
    randomFirst();
    randomSecond();
    showRandom();
    allWords.forEach( element => {
      element.style.backgroundImage = 'url(../../img_main/radio-off.svg)';
      listDisable.hidden = true;
      if(current == (wordEng.length - 1) ) {
        btnNext.innerText = 'Finish';
      }
    }); 
  }

  function showRandom() {
    randomOrder();
    if (random1 == current || random2 == current || random1 == random2) {
      randomFirst();
      randomSecond();
      showRandom();
    }
    else if (random3 == 0) {
      checkResult(allWords[0], allWords[1], allWords[2]);
    }
    else if (random3 == 1) {
      checkResult(allWords[1], allWords[0], allWords[2]);
    }
    else if (random3 == 2) {
      checkResult(allWords[2], allWords[1], allWords[0]);
    }
  }

  function randomFirst() {
    random1 = Math.floor(Math.random() * wordEng.length);
  }
  function randomSecond() {
    random2 = Math.floor(Math.random() * wordEng.length);
  }
  function randomOrder() {
    random3 = Math.floor(Math.random() * 3);
  }

  function checkResult(correct, incorrect, incorrect2) {
    correct.innerText = wordEng[current];
    incorrect.innerText = wordEng[random1];
    incorrect2.innerText = wordEng[random2];
    correct.onclick = countResult;
    incorrect.onclick = () => {
      incorrect.style.backgroundImage = 'url(../../img_main/unchecked.svg)';
      listDisable.hidden = false;
    }  
    incorrect2.onclick = () => {
      incorrect2.style.backgroundImage = 'url(../../img_main/unchecked.svg)';
      listDisable.hidden = false;
    }  
  }

  function countResult() {
    this.style.backgroundImage = 'url(../../img_main/checked.svg)';
    counterResult += persentage;
    listDisable.hidden = false;
    this.onclick = () => {
      return;
    }
    num = Math.round(counterResult);
    result.innerText = `${num}%`;
    if(counterResult >= 100) {
      result.innerText = '100%';
    }
  }

  function showModal() {
    let testText;
    let baloon;
    num = Math.round(counterResult);
    const modal = document.createElement('div');
    document.body.appendChild(modal);
    if(num == 100) {
      testText = 'Wow! You\'re a superman <br>Your result is';
      baloon = 'modal-window_baloon';
    }
    else if(num >= 80 && num != 100) {
      testText = 'Congratulation!<br>Your result is';
      baloon = 'modal-window_baloon';
    }
    else {
      testText = 'Maybe try again<br>Your result is';
    }

    modal.classList.add('test-modal');
    modal.innerHTML = `<div class="modal-window ${baloon}"><p class="test-modal__text">${testText} <span class="test-modal__text_pink"> ${num}%</span></p><button class="word__btn result-btn">Try again</button></div>`;
    document.querySelector('.result-btn').onclick = () => {
      setTimeout( () =>  {
        window.location.reload(true);
      },10);
    }
  }
}  

let wordEng = ['Garage', 'Balcony', 'Hall', 'Kitchen', 'Dining room', 'Living room', 'Stairs', 'Home office', 'Bedroom', 'Bathroom', 'Roof', 'Garden', 'Armchair', 'Bath', 'Bed', 'Carpet', 'Cupboard', 'Plant', 'Rug', 'Television', 'Shower', 'Sink', 'Sofa', 'Shelves', 'Wardrobe', 'Lamp', 'Washbasin', 'Post office', 'Police station', 'Supermarket', 'Theater', 'Sports center', 'Pharmacy', 'Museum', 'Cinema', 'Baker\'s shop', 'Butcher\'s shop', 'Dry-cleaner\'s', 'Hairdresser\'s', 'Clothes shop', 'Library', 'Cheese', 'Chicken', 'Banana', 'Egg', 'Fruit juice', 'Pear', 'Pepper', 'Butter', 'Garlic', 'Milk', 'Potatoes', 'Broccoli', 'Strawberry', 'Salmon', 'Shrimp', 'Bowl', 'Jar', 'Bottle', 'Bag', 'Cup', 'Tin', 'Carton', 'Packet', 'Glass', 'Mug', 'Menu', 'Chef', 'Dish', 'Bill', 'Order', 'Tip', 'Waiter', 'Bon appetit', 'Go to the gym', 'Go for a walk', 'See friends', 'Do nothing', 'Stay at home', 'Do the housework', 'Stay with friends', 'Write an e-mail', 'Go shopping', 'Read a book', 'Talk on the phone'];
let wordRu = ['Гараж', 'Балкон', 'Зал, холл', 'Кухня', 'Столовая', 'Гостиная', 'Лестница', 'Домашний офис', 'Спальня', 'Ванная комната', 'Крыша', 'Сад', 'Кресло', 'Ванна', 'Кровать', 'Ковёр', 'Шкаф', 'Растение', 'Коврик', 'Телевизор', 'Душ', 'Раковина', 'Диван', 'Полки', 'Гардероб', 'Лампа', 'Умывальник', 'Почта', 'Полицейский участок', 'Супермаркет', 'Театр', 'Спортивный комплекс', 'Аптека', 'Музей', 'Кинотеатр', 'Булочная', 'Мясная лавка', 'Химчистка', 'Парикмахерская', 'Магазин одежды', 'Библиотека', 'Сыр', 'Курица', 'Банан', 'Яйцо', 'Фруктовый сок', 'Груша', 'Перец', 'Сливочное масло', 'Чеснок', 'Молоко', 'Картофель', 'Брокколи', 'Клубника', 'Лосось', 'Креветка', 'Миска, чаша', 'Банка, кувшин', 'Бутылка', 'Мешок, сумка', 'Чашка', 'Банка (жестяная)', 'Картонный пакет, коробка', 'Пакет, пачка', 'Стакан, стекло', 'Кружка', 'Меню', 'Шеф-повар', 'Блюдо', 'Счёт', 'Заказ, порядок', 'Чаевые', 'Официант', 'Приятного аппетита!', 'Идти в спортзал', 'Выйти на прогулку', 'Повидаться с друзьями', 'Ничего не делать', 'Оставаться дома', 'Делать работу по дому', 'Гостить у друзей', 'Написать е-мейл', 'Ходить за покупками', 'Читать книгу', 'Говорить по телефону'];

makeTest();