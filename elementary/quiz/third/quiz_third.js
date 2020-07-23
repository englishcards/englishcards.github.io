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

let wordEng = ['Mountain', 'Hill', 'River', 'Lake', 'Forest', 'Market', 'Famous building', 'Desert', 'Camping', 'Surfing', 'Horse riding', 'Sightseeing', 'Road', 'Street', 'Park', 'Square', 'Traffic lights', 'Car park', 'Pedestrian street', 'Crossroads', 'Corner', 'Dance', 'Chat', 'Think about', 'Enjoy', 'Feel', 'Wait for', 'Take a photo of', 'Read about', 'Ask about', 'Talk on the phone', 'Tall', 'Short', 'Slim', 'Overweight', 'Bald', 'Straight hair', 'Curly hair', 'Long hair', 'Short hair', 'Medium build', 'Socks', 'Suit', 'Skirt', 'Coat', 'Tie', 'Trousers', 'Shorts', 'Romantic film', 'Horror film', 'Drama', 'Comedy', 'Animated film', 'Musical', 'Action film', 'Sci-fi film', 'Fast', 'Safe', 'Pollute', 'Healthy', 'Convenient', 'Comfortable', 'Easy', 'Dangerous', 'Difficult', 'Slow', 'Ferry', 'Truck', 'Van', 'Scooter', 'Take a train', 'Get on a bus', 'Get into a car', 'Ride a bike', 'Go on foot', 'Boat', 'Lost the keys', 'Missed the train', 'Broke down', 'Traffic', 'Alarm-clock', 'Check in desk', 'Take off', 'Go through security', 'Departure lounge', 'Passport control', 'Baggage', 'Heavy', 'Delay', 'Aisle seat', 'Boarding pass'];
let wordRu = ['Гора', 'Холм', 'Река', 'Озеро', 'Лес', 'Рынок', 'Знаменитое здание', 'Пустыня', 'Кемпинг, лагерь', 'Сёрфинг', 'Прогулка на лошадях', 'Осмотр достопримечательностей', 'Дорога', 'Улица', 'Парк', 'Площадь', 'Светофор', 'Автостоянка', 'Пешеходная улица', 'Перекрёсток', 'Угол', 'Танцевать', 'Болтать', 'Думать об', 'Наслаждаться', 'Чувствовать', 'Ждать', 'Сфотографировать', 'Читать об', 'Спросить об', 'Говорить по телефону', 'Высокий', 'Короткий, низкий', 'Тонкий, стройный', 'Полноват', 'Лысый', 'Прямые волосы', 'Вьющиеся волосы', 'Длинные волосы', 'Короткие волосы', 'Среднего телосложения', 'Носки', 'Костюм', 'Юбка', 'Пальто', 'Галстук', 'Брюки', 'Шорты', 'Романтический фильм', 'Фильм ужасов', 'Драма', 'Комедия', 'Мультфильм', 'Мюзикл', 'Боевик', 'Фантастика', 'Быстрый', 'Безопасный', 'Загрязнять', 'Здоровый', 'Удобный', 'Комфортный', 'Лёгкий, нетрудный', 'Опасный', 'Трудный', 'Медленный', 'Паром', 'Грузовик', 'Фургон', 'Скутер', 'Сесть на поезд', 'Сесть в автобус', 'Сесть в машину', 'Кататься на велосипеде', 'Идти пешком', 'Лодка', 'Потерять ключи', 'Опоздать на поезд', 'Сломаться', 'Движение', 'Будильник', 'Стойка регистрации', 'Взлететь', 'Пройти контроль безопасности', 'Зал ожидания', 'Паспортный контроль', 'Багаж', 'Тяжёлый', 'Задержка', 'Место у прохода', 'Посадочный талон'];

makeTest();