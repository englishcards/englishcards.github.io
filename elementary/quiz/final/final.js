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
  let persentage = 100 / randomArrEng.length;

  progress.innerText = `1 / ${randomArrEng.length}`;
  result.innerText = 0 + '%';
  word.innerText = randomArrEng[current];
  mainRu.innerText = randomArrRu[current];
  wordWr1.innerText = randomArrEng[5]; 
  wordWr2.innerText = randomArrEng[9];
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
    if (current == (randomArrEng.length - 1) ) {
      showModal(); 
      return;
    }   
    current++;
    mainRu.innerText = randomArrRu[current];
    progress.innerText = `${current + 1} / ${randomArrEng.length}`;
    randomFirst();
    randomSecond();
    showRandom();
    allWords.forEach( element => {
      element.style.backgroundImage = 'url(../../img_main/radio-off.svg)';
      listDisable.hidden = true;
      if(current == (randomArrEng.length - 1) ) {
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
    random1 = Math.floor(Math.random() * randomArrEng.length);
  }
  function randomSecond() {
    random2 = Math.floor(Math.random() * randomArrEng.length);
  }
  function randomOrder() {
    random3 = Math.floor(Math.random() * 3);
  }

  function checkResult(correct, incorrect, incorrect2) {
    correct.innerText = randomArrEng[current];
    incorrect.innerText = randomArrEng[random1];
    incorrect2.innerText = randomArrEng[random2];
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
    let cup;
    let fireworks;
    num = Math.round(counterResult);
    const modal = document.createElement('div');
    document.body.appendChild(modal);
    if(counterResult == 100) {
      testText = 'Wow! You\'re a superman <br>Your result is';
      cup = 'modal-window_cup';
    }
    else if(counterResult >= 80 && counterResult != 100) {
      testText = 'Congratulation!<br>Your result is';
      cup = 'modal-window_cup';
    }
    else {
      testText = 'Maybe try again<br>Your result is';
    }

    modal.classList.add('test-modal');
    modal.innerHTML = `<div class="modal-window ${cup}"><p class="test-modal__text">${testText} <span class="test-modal__text_pink"> ${num}%</span></p><button class="word__btn result-btn">Try again</button></div>`;
    document.querySelector('.result-btn').onclick = () => {
      setTimeout( () =>  {
        window.location.reload(true);
      },10);
    }
  }
}  

let wordEng = ['Camera', 'Mobile phone', 'Shampoo', 'Diary', 'Passport', 'Magazine', 'Credit card', 'Headphones', 'Newspaper', 'Sweater', 'Sunglasses', 'Watch', 'Purse', 'Ticket', 'Laptop', 'Postcard', 'Apple juice', 'Battery', 'Single ticket', 'Return ticket', 'Coffee', 'Sandwich', 'Souvenir', 'Have', 'Read', 'Listen to', 'Do', 'Eat', 'Play', 'Go', 'Speak', 'Meet', 'Get up', 'Go to bed', 'Have breakfast', 'Have lunch', 'Get home', 'Start work', 'Leave home', 'Finish work', 'Have dinner', 'Wife husband', 'Brother sister', 'Father', 'Children', 'Mother', 'Daughter', 'Son', 'Grandmother grandfather', 'Parents', 'Aunt', 'Uncle', 'Cousin', 'Interesting', 'Boring', 'Intelligent', 'Stupid', 'Kind', 'Unkind', 'Talkative', 'Quiet', 'Friendly', 'Unfriendly', 'Funny', 'Serious', 'Great', 'Garage', 'Balcony', 'Hall', 'Kitchen', 'Dining room', 'Living room', 'Stairs', 'Home office', 'Bedroom', 'Bathroom', 'Roof', 'Garden', 'Armchair', 'Bath', 'Bed', 'Carpet', 'Cupboard', 'Plant', 'Rug', 'Television', 'Shower', 'Sink', 'Sofa', 'Shelves', 'Wardrobe', 'Lamp', 'Washbasin', 'Post office', 'Police station', 'Supermarket', 'Theater', 'Sports center', 'Pharmacy', 'Museum', 'Cinema', 'Baker\'s shop', 'Butcher\'s shop', 'Dry-cleaner\'s', 'Hairdresser\'s', 'Clothes shop', 'Library', 'Cheese', 'Chicken', 'Banana', 'Egg', 'Fruit juice', 'Pear', 'Pepper', 'Butter', 'Garlic', 'Milk', 'Potatoes', 'Broccoli', 'Strawberry', 'Salmon', 'Shrimp', 'Bowl', 'Jar', 'Bottle', 'Bag', 'Cup', 'Tin', 'Carton', 'Packet', 'Glass', 'Mug', 'Menu', 'Chef', 'Dish', 'Bill', 'Order', 'Tip', 'Waiter', 'Bon appetit', 'Go to the gym', 'Go for a walk', 'See friends', 'Do nothing', 'Stay at home', 'Do the housework', 'Stay with friends', 'Write an e-mail', 'Go shopping', 'Read a book', 'Talk on the phone', 'Mountain', 'Hill', 'River', 'Lake', 'Forest', 'Market', 'Famous building', 'Desert', 'Camping', 'Surfing', 'Horse riding', 'Sightseeing', 'Road', 'Street', 'Park', 'Square', 'Traffic lights', 'Car park', 'Pedestrian street', 'Crossroads', 'Corner', 'Dance', 'Chat', 'Think about', 'Enjoy', 'Feel', 'Wait for', 'Take a photo of', 'Read about', 'Ask about', 'Talk on the phone', 'Tall', 'Short', 'Slim', 'Overweight', 'Bald', 'Straight hair', 'Curly hair', 'Long hair', 'Short hair', 'Medium build', 'Socks', 'Suit', 'Skirt', 'Coat', 'Tie', 'Trousers', 'Shorts', 'Romantic film', 'Horror film', 'Drama', 'Comedy', 'Animated film', 'Musical', 'Action film', 'Sci-fi film', 'Fast', 'Safe', 'Pollute', 'Healthy', 'Convenient', 'Comfortable', 'Easy', 'Dangerous', 'Difficult', 'Slow', 'Ferry', 'Truck', 'Van', 'Scooter', 'Take a train', 'Get on a bus', 'Get into a car', 'Ride a bike', 'Go on foot', 'Boat', 'Lost the keys', 'Missed the train', 'Broke down', 'Traffic', 'Alarm-clock', 'Check in desk', 'Take off', 'Go through security', 'Departure lounge', 'Passport control', 'Baggage', 'Heavy', 'Delay', 'Aisle seat', 'Boarding pass', 'Stop working', 'Give money to', 'Have a party', 'Move out', 'Start a family', 'Be on holiday', 'Hot', 'Get wet', 'Get hungry', 'Get thirsty', 'Get lost', 'Get sunburnt', 'Get warm', 'Get stung', 'Get tired', 'Get cold', 'Painting', 'Concert', 'Play', 'Drawing', 'Photograph', 'Statue', 'Exhibition', 'Dance performance', 'Disco', 'Arm', 'Back', 'Ear', 'Finger', 'Headache', 'Stomachache', 'Leg', 'Sore throat', 'Runny nose', 'Toothache', 'Cough', 'Cold', 'Answer', 'Turn off a phone', 'Have a conversation', 'Forget a name', 'Exchange numbers', 'Remember a name', 'Slowly', 'Carefully', 'Terribly', 'Watch the sun rise', 'Climb a mountain', 'Be in a film', 'Ride an elephant', 'Sleep outside', 'Meet someone famous', 'Call me back', 'Hold on', 'Hang up'];
let wordRu = ['Фотоаппарат', 'Мобильный телефон', 'Шампунь', 'Дневник', 'Паспорт', 'Журнал', 'Банковская карта', 'Наушники', 'Газета', 'Свитер', 'Солнцезащитные очки', 'Наручные часы', 'Кошелёк', 'Билет', 'Ноутбук', 'Открытка', 'Яблочный сок', 'Батарейка', 'Билет в одну сторону', 'Обратный билет', 'Кофе', 'Бутерброд', 'Сувенир', 'Иметь', 'Читать', 'Слушать', 'Делать', 'Есть', 'Играть', 'Идти/Ехать', 'Говорить', 'Встретить', 'Вставать', 'Идти спать', 'Завтракать', 'Обедать', 'Приходить домой', 'Начинать работу', 'Выходить из дома', 'Заканчивать работу', 'Ужинать', 'Жена и муж', 'Брат и сестра', 'Отец', 'Дети', 'Мать', 'Дочь', 'Сын', 'Бабушка и дедушка', 'Родители', 'Тётя', 'Дядя', 'Двоюродный брат/сестра', 'Интересный', 'Скучный', 'Умный', 'Глупый', 'Добрый', 'Недобрый', 'Разговорчивый', 'Тихий', 'Дружелюбный', 'Недружелюбный', 'Смешной', 'Серьёзный', 'Замечательно', 'Гараж', 'Балкон', 'Зал, холл', 'Кухня', 'Столовая', 'Гостиная', 'Лестница', 'Домашний офис', 'Спальня', 'Ванная комната', 'Крыша', 'Сад', 'Кресло', 'Ванна', 'Кровать', 'Ковёр', 'Шкаф', 'Растение', 'Коврик', 'Телевизор', 'Душ', 'Раковина', 'Диван', 'Полки', 'Гардероб', 'Лампа', 'Умывальник', 'Почта', 'Полицейский участок', 'Супермаркет', 'Театр', 'Спортивный комплекс', 'Аптека', 'Музей', 'Кинотеатр', 'Булочная', 'Мясная лавка', 'Химчистка', 'Парикмахерская', 'Магазин одежды', 'Библиотека', 'Сыр', 'Курица', 'Банан', 'Яйцо', 'Фруктовый сок', 'Груша', 'Перец', 'Сливочное масло', 'Чеснок', 'Молоко', 'Картофель', 'Брокколи', 'Клубника', 'Лосось', 'Креветка', 'Миска, чаша', 'Банка, кувшин', 'Бутылка', 'Мешок, сумка', 'Чашка', 'Банка (жестяная)', 'Картонный пакет, коробка', 'Пакет, пачка', 'Стакан, стекло', 'Кружка', 'Меню', 'Шеф-повар', 'Блюдо', 'Счёт', 'Заказ, порядок', 'Чаевые', 'Официант', 'Приятного аппетита!', 'Идти в спортзал', 'Выйти на прогулку', 'Повидаться с друзьями', 'Ничего не делать', 'Оставаться дома', 'Делать работу по дому', 'Гостить у друзей', 'Написать е-мейл', 'Ходить за покупками', 'Читать книгу', 'Говорить по телефону', 'Гора', 'Холм', 'Река', 'Озеро', 'Лес', 'Рынок', 'Знаменитое здание', 'Пустыня', 'Кемпинг, лагерь', 'Сёрфинг', 'Прогулка на лошадях', 'Осмотр достопримечательностей', 'Дорога', 'Улица', 'Парк', 'Площадь', 'Светофор', 'Автостоянка', 'Пешеходная улица', 'Перекрёсток', 'Угол', 'Танцевать', 'Болтать', 'Думать об', 'Наслаждаться', 'Чувствовать', 'Ждать', 'Сфотографировать', 'Читать об', 'Спросить об', 'Говорить по телефону', 'Высокий', 'Короткий, низкий', 'Тонкий, стройный', 'Полноват', 'Лысый', 'Прямые волосы', 'Вьющиеся волосы', 'Длинные волосы', 'Короткие волосы', 'Среднего телосложения', 'Носки', 'Костюм', 'Юбка', 'Пальто', 'Галстук', 'Брюки', 'Шорты', 'Романтический фильм', 'Фильм ужасов', 'Драма', 'Комедия', 'Мультфильм', 'Мюзикл', 'Боевик', 'Фантастика', 'Быстрый', 'Безопасный', 'Загрязнять', 'Здоровый', 'Удобный', 'Комфортный', 'Лёгкий, нетрудный', 'Опасный', 'Трудный', 'Медленный', 'Паром', 'Грузовик', 'Фургон', 'Скутер', 'Сесть на поезд', 'Сесть в автобус', 'Сесть в машину', 'Кататься на велосипеде', 'Идти пешком', 'Лодка', 'Потерять ключи', 'Опоздать на поезд', 'Сломаться', 'Движение', 'Будильник', 'Стойка регистрации', 'Взлететь', 'Пройти контроль безопасности', 'Зал ожидания', 'Паспортный контроль', 'Багаж', 'Тяжёлый', 'Задержка', 'Место у прохода', 'Посадочный талон', 'Перестать работать', 'Дать деньги', 'Устроить вечеринку', 'Съезжать', 'Заводить семью', 'Быть в отпуске', 'Жарко', 'Промокнуть', 'Проголодаться', 'Хотеть пить', 'Заблудиться', 'Обгореть на солнце', 'Согреться', 'Быть ужаленным', 'Уставать', 'Замёрзнуть', 'Картина', 'Концерт', 'Пьеса', 'Рисунок', 'Фотография', 'Статуя', 'Выставка', 'Танцевальное выступление', 'Дискотека', 'Рука', 'Спина', 'Ухо', 'Палец', 'Головная боль', 'Боль в животе', 'Нога', 'Боль в горле', 'Насморк', 'Зубная боль', 'Кашель', 'Простуда', 'Ответ', 'Выключить телефон', 'Поговорить', 'Забыть имя', 'Обменяться номерами', 'Запомнить номер', 'Медленно', 'Осторожно, внимательно', 'Ужасно', 'Смотреть, как встаёт солнце', 'Взбираться на гору', 'Сниматься в фильме', 'Кататься на слоне', 'Спать на улице', 'Встретить кого-то знаменитого', 'Перезвоните мне', 'Не вешайте трубку', 'Положить трубку'];

let randomArr = [];
let randomArrEng = [];
let randomArrRu = [];
let random = Math.floor(Math.random() * wordEng.length);

function makeRandomArr() {
  let i = 0;

  while (i < 200) {
    random = Math.floor(Math.random() * wordEng.length);
    randomArr.push(random);
    randomArrEng.push(wordEng[random]);
    randomArrRu.push(wordRu[random]);

    for (let str of randomArr) {
      if (!randomArr.includes(str)) {
        randomArr.push(str);
        randomArrEng.push(wordEng[str]);
        randomArrRu.push(wordRu[str]);
        i++;
      }
      else {
        i++;
      }
    }       
  }  
}
makeRandomArr();

makeTest();