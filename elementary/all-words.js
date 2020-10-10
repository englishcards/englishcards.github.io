const allWords = [
{
  name: "Unit-1",
  eng: ['Camera', 'Mobile phone', 'Shampoo', 'Diary', 'Passport', 'Magazine', 'Credit card', 'Headphones', 'Newspaper', 'Sweater', 'Sunglasses', 'Watch', 'Purse', 'Ticket', 'Laptop', 'Postcard', 'Apple juice', 'Battery', 'Single ticket', 'Return ticket', 'Coffee', 'Sandwich', 'Souvenir'],
  ru: ['Фотоаппарат', 'Мобильный телефон', 'Шампунь', 'Дневник', 'Паспорт', 'Журнал', 'Банковская карта', 'Наушники', 'Газета', 'Свитер', 'Солнцезащитные очки', 'Наручные часы', 'Кошелёк', 'Билет', 'Ноутбук', 'Открытка', 'Яблочный сок', 'Батарейка', 'Билет в одну сторону', 'Обратный билет', 'Кофе', 'Бутерброд', 'Сувенир']
},
{
  name: "Unit-2",
  eng: ['Have', 'Read', 'Listen to', 'Do', 'Eat', 'Play', 'Go', 'Speak', 'Meet', 'Get up', 'Go to bed', 'Have breakfast', 'Have lunch', 'Get home', 'Start work', 'Leave home', 'Finish work', 'Have dinner'],
  ru: ['Иметь', 'Читать', 'Слушать', 'Делать', 'Есть', 'Играть', 'Идти/Ехать', 'Говорить', 'Встретить', 'Вставать', 'Идти спать', 'Завтракать', 'Обедать', 'Приходить домой', 'Начинать работу', 'Выходить из дома', 'Заканчивать работу', 'Ужинать']
},
{
  name: "Unit-3",
  eng: ['Wife husband', 'Brother sister', 'Father', 'Children', 'Mother', 'Daughter', 'Son', 'Grandmother grandfather', 'Parents', 'Aunt', 'Uncle', 'Cousin', 'Interesting', 'Boring', 'Intelligent', 'Stupid', 'Kind', 'Unkind', 'Talkative', 'Quiet', 'Friendly', 'Unfriendly', 'Funny', 'Serious', 'Great'],
  ru: ['Жена и муж', 'Брат и сестра', 'Отец', 'Дети', 'Мать', 'Дочь', 'Сын', 'Бабушка и дедушка', 'Родители', 'Тётя', 'Дядя', 'Двоюродный брат/сестра', 'Интересный', 'Скучный', 'Умный', 'Глупый', 'Добрый', 'Недобрый', 'Разговорчивый', 'Тихий', 'Дружелюбный', 'Недружелюбный', 'Смешной', 'Серьёзный', 'Замечательно']
},
{
  name: "Unit-4",
  eng: ['Garage', 'Balcony', 'Hall', 'Kitchen', 'Dining room', 'Living room', 'Stairs', 'Home office', 'Bedroom', 'Bathroom', 'Roof', 'Garden', 'Armchair', 'Bath', 'Bed', 'Carpet', 'Cupboard', 'Plant', 'Rug', 'Television', 'Shower', 'Sink', 'Sofa', 'Shelves', 'Wardrobe', 'Lamp', 'Washbasin', 'Post office', 'Police station', 'Supermarket', 'Theater', 'Sports center', 'Pharmacy', 'Museum', 'Cinema', 'Baker\'s shop', 'Butcher\'s shop', 'Dry-cleaner\'s', 'Hairdresser\'s', 'Clothes shop', 'Library'],
  ru: ['Гараж', 'Балкон', 'Зал, холл', 'Кухня', 'Столовая', 'Гостиная', 'Лестница', 'Домашний офис', 'Спальня', 'Ванная комната', 'Крыша', 'Сад', 'Кресло', 'Ванна', 'Кровать', 'Ковёр', 'Шкаф', 'Растение', 'Коврик', 'Телевизор', 'Душ', 'Раковина', 'Диван', 'Полки', 'Гардероб', 'Лампа', 'Умывальник', 'Почта', 'Полицейский участок', 'Супермаркет', 'Театр', 'Спортивный комплекс', 'Аптека', 'Музей', 'Кинотеатр', 'Булочная', 'Мясная лавка', 'Химчистка', 'Парикмахерская', 'Магазин одежды', 'Библиотека']
},
{
  name: "Unit-5",
  eng: ['Cheese', 'Chicken', 'Banana', 'Egg', 'Fruit juice', 'Pear', 'Pepper', 'Butter', 'Garlic', 'Milk', 'Potatoes', 'Broccoli', 'Strawberry', 'Salmon', 'Shrimp', 'Bowl', 'Jar', 'Bottle', 'Bag', 'Cup', 'Tin', 'Carton', 'Packet', 'Glass', 'Mug', 'Menu', 'Chef', 'Dish', 'Bill', 'Order', 'Tip', 'Waiter', 'Bon appetit'],
  ru: ['Сыр', 'Курица', 'Банан', 'Яйцо', 'Фруктовый сок', 'Груша', 'Перец', 'Сливочное масло', 'Чеснок', 'Молоко', 'Картофель', 'Брокколи', 'Клубника', 'Лосось', 'Креветка', 'Миска, чаша', 'Банка, кувшин', 'Бутылка', 'Мешок, сумка', 'Чашка', 'Банка (жестяная)', 'Картонный пакет, коробка', 'Пакет, пачка', 'Стакан, стекло', 'Кружка', 'Меню', 'Шеф-повар', 'Блюдо', 'Счёт', 'Заказ, порядок', 'Чаевые', 'Официант', 'Приятного аппетита!']
},
{
  name: "Unit-6",
  eng: ['Go to the gym', 'Go for a walk', 'See friends', 'Do nothing', 'Stay at home', 'Do the housework', 'Stay with friends', 'Write an e-mail', 'Go shopping', 'Read a book', 'Talk on the phone'],
  ru: ['Идти в спортзал', 'Выйти на прогулку', 'Повидаться с друзьями', 'Ничего не делать', 'Оставаться дома', 'Делать работу по дому', 'Гостить у друзей', 'Написать е-мейл', 'Ходить за покупками', 'Читать книгу', 'Говорить по телефону']
},
{
  name: "Unit-7",
  eng: ['Mountain', 'Hill', 'River', 'Lake', 'Forest', 'Market', 'Famous building', 'Desert', 'Camping', 'Surfing', 'Horse riding', 'Sightseeing', 'Road', 'Street', 'Park', 'Square', 'Traffic lights', 'Car park', 'Pedestrian street', 'Crossroads', 'Corner'],
  ru: ['Гора', 'Холм', 'Река', 'Озеро', 'Лес', 'Рынок', 'Знаменитое здание', 'Пустыня', 'Кемпинг, лагерь', 'Сёрфинг', 'Прогулка на лошадях', 'Осмотр достопримечательностей', 'Дорога', 'Улица', 'Парк', 'Площадь', 'Светофор', 'Автостоянка', 'Пешеходная улица', 'Перекрёсток', 'Угол']
},
{
  name: "Unit-8",
  eng: ['Dance', 'Chat', 'Think about', 'Enjoy', 'Feel', 'Wait for', 'Take a photo of', 'Read about', 'Ask about', 'Talk on the phone', 'Tall', 'Short', 'Slim', 'Overweight', 'Bald', 'Straight hair', 'Curly hair', 'Long hair', 'Short hair', 'Medium build', 'Socks', 'Suit', 'Skirt', 'Coat', 'Tie', 'Trousers', 'Shorts', 'Romantic film', 'Horror film', 'Drama', 'Comedy', 'Animated film', 'Musical', 'Action film', 'Sci-fi film'],
  ru: ['Танцевать', 'Болтать', 'Думать об', 'Наслаждаться', 'Чувствовать', 'Ждать', 'Сфотографировать', 'Читать об', 'Спросить об', 'Говорить по телефону', 'Высокий', 'Короткий, низкий', 'Тонкий, стройный', 'Полноват', 'Лысый', 'Прямые волосы', 'Вьющиеся волосы', 'Длинные волосы', 'Короткие волосы', 'Среднего телосложения', 'Носки', 'Костюм', 'Юбка', 'Пальто', 'Галстук', 'Брюки', 'Шорты', 'Романтический фильм', 'Фильм ужасов', 'Драма', 'Комедия', 'Мультфильм', 'Мюзикл', 'Боевик', 'Фантастика']
},
{
  name: "Unit-9",
  eng: ['Fast', 'Safe', 'Pollute', 'Healthy', 'Convenient', 'Comfortable', 'Easy', 'Dangerous', 'Difficult', 'Slow', 'Ferry', 'Truck', 'Van', 'Scooter', 'Take a train', 'Get on a bus', 'Get into a car', 'Ride a bike', 'Go on foot', 'Boat', 'Lost the keys', 'Missed the train', 'Broke down', 'Traffic', 'Alarm-clock', 'Check in desk', 'Take off', 'Go through security', 'Departure lounge', 'Passport control', 'Baggage', 'Heavy', 'Delay', 'Aisle seat', 'Boarding pass'],
  ru: ['Быстрый', 'Безопасный', 'Загрязнять', 'Здоровый', 'Удобный', 'Комфортный', 'Лёгкий, нетрудный', 'Опасный', 'Трудный', 'Медленный', 'Паром', 'Грузовик', 'Фургон', 'Скутер', 'Сесть на поезд', 'Сесть в автобус', 'Сесть в машину', 'Кататься на велосипеде', 'Идти пешком', 'Лодка', 'Потерять ключи', 'Опоздать на поезд', 'Сломаться', 'Движение', 'Будильник', 'Стойка регистрации', 'Взлететь', 'Пройти контроль безопасности', 'Зал ожидания', 'Паспортный контроль', 'Багаж', 'Тяжёлый', 'Задержка', 'Место у прохода', 'Посадочный талон']
},
{
  name: "Unit-10",
  eng: ['Stop working', 'Give money to', 'Have a party', 'Move out', 'Start a family', 'Be on holiday', 'Hot', 'Get wet', 'Get hungry', 'Get thirsty', 'Get lost', 'Get sunburnt', 'Get warm', 'Get stung', 'Get tired', 'Get cold', 'Painting', 'Concert', 'Play', 'Drawing', 'Photograph', 'Statue', 'Exhibition', 'Dance performance', 'Disco'],
  ru: ['Перестать работать', 'Дать деньги', 'Устроить вечеринку', 'Съезжать', 'Заводить семью', 'Быть в отпуске', 'Жарко', 'Промокнуть', 'Проголодаться', 'Хотеть пить', 'Заблудиться', 'Обгореть на солнце', 'Согреться', 'Быть ужаленным', 'Уставать', 'Замёрзнуть', 'Картина', 'Концерт', 'Пьеса', 'Рисунок', 'Фотография', 'Статуя', 'Выставка', 'Танцевальное выступление', 'Дискотека']
},
{
  name: "Unit-11",
  eng: ['Arm', 'Back', 'Ear', 'Finger', 'Headache', 'Stomachache', 'Leg', 'Sore throat', 'Runny nose', 'Toothache', 'Cough', 'Cold', 'Answer', 'Turn off a phone', 'Have a conversation', 'Forget a name', 'Exchange numbers', 'Remember a name', 'Slowly', 'Carefully', 'Terribly'],
  ru: ['Рука', 'Спина', 'Ухо', 'Палец', 'Головная боль', 'Боль в животе', 'Нога', 'Боль в горле', 'Насморк', 'Зубная боль', 'Кашель', 'Простуда', 'Ответ', 'Выключить телефон', 'Поговорить', 'Забыть имя', 'Обменяться номерами', 'Запомнить имя', 'Медленно', 'Осторожно, внимательно', 'Ужасно']
},
{
  name: "Unit-12",
  eng: ['Watch the sun rise', 'Climb a mountain', 'Be in a film', 'Ride an elephant', 'Sleep outside', 'Meet someone famous', 'Call me back', 'Hold on', 'Hang up', 'Be on holiday'],
  ru: ['Смотреть, как встаёт солнце', 'Взбираться на гору', 'Сниматься в фильме', 'Кататься на слоне', 'Спать на улице', 'Встретить кого-то знаменитого', 'Перезвоните мне', 'Не вешайте трубку', 'Положить трубку', 'Быть в отпуске']
},

];
