const quizAnswers = [
{
	test: 'one',
	questions: `<li class="question-item"><p class="question__text">1. Что такое <span class="code-item_orange">html</span> ?</p>
<label class="answer"><span class="answer__circle"></span><input class="answer__input" type="radio" name="question-1"
value="a"> <span class="answer__text"><span class="answer__btn"></span><span>расширяемый язык
разметки</span></span></label><label class="answer"><span class="answer__circle"></span><input class="answer__input"
type="radio" name="question-1" value="b"> <span class="answer__text"><span class="answer__btn"></span><span>язык
гипертекстовой разметки</span></span></label>	<label class="answer"><span class="answer__circle"></span><input
class="answer__input" type="radio" name="question-1" value="c"> <span class="answer__text"><span
class="answer__btn"></span><span>каскадная таблица стилей</span></span></label></li><li class="question-item"><p
class="question__text">2. Какой элемент используют для маркированного списка?</p> <label class="answer"><span
class="answer__circle"></span><input class="answer__input" type="radio" name="question-2" value="a"> <span
class="answer__text"><span class="answer__btn"></span><span>ul</span></span></label>	<label class="answer"><span
class="answer__circle"></span><input class="answer__input" type="radio" name="question-2" value="b"> <span
class="answer__text"><span class="answer__btn"></span><span>ol</span></span></label><label class="answer"><span
class="answer__circle"></span><input class="answer__input" type="radio" name="question-2" value="c"><span
class="answer__text"> <span class="answer__btn"></span><span>p</span></span></label></li><li class="question-item"><p
class="question__text">3. Какие атрибуты являются обязательными для <span class="code-item_orange">img</span> ?</p>
<label class="answer"><span class="answer__circle"></span><input class="answer__input" type="radio" name="question-3"
value="a"> <span class="answer__text"><span class="answer__btn"></span><span>src и alt</span></span></label><label
class="answer"><span class="answer__circle"></span><input class="answer__input" type="radio" name="question-3"
value="b"> <span class="answer__text"><span class="answer__btn"></span><span>href и target</span></span></label>	<label
class="answer"><span class="answer__circle"></span><input class="answer__input" type="radio" name="question-3"
value="c"> <span class="answer__text"><span class="answer__btn"></span><span>type и name</span></span></label></li><li
class="question-item"><p class="question__text">4. Какой тип элемента<span class="code-item_orange"> input</span>
позволяет выбрать сразу несколько значений?</p> <label class="answer"><span class="answer__circle"></span><input
class="answer__input" type="radio" name="question-4" value="a"> <span class="answer__text"><span
class="answer__btn"></span><span>radio</span></span></label><label class="answer"><span
class="answer__circle"></span><input class="answer__input" type="radio" name="question-4" value="b"> <span
class="answer__text"><span class="answer__btn"></span><span>text</span></span></label><label class="answer"><span
class="answer__circle"></span><input class="answer__input" type="radio" name="question-4" value="c"> <span
class="answer__text"><span class="answer__btn"></span><span>checkbox</span></span></label></li><li
class="question-item"> <p class="question__text">5. Что из перечисленного устанавливает шрифт без засечек?</p><label
class="answer"><span class="answer__circle"></span><input class="answer__input" type="radio" name="question-5"
value="a"> <span class="answer__text"><span class="answer__btn"></span><span>sans-serif</span></span></label><label
class="answer"><span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-5"
value="b"><span class="answer__text"><span class="answer__btn"></span> <span>serif</span></span></label><label
class="answer"><span class="answer__circle"></span><input class="answer__input" type="radio" name="question-5"
value="c"> <span class="answer__text"><span class="answer__btn"></span><span>monospace</span></span></label></li><li
class="question-item"><p class="question__text">6. Что определяет свойство <span class="code-item_orange">
font-weight</span> ?</p> <label class="answer"><span class="answer__circle"></span><input class="answer__input"
type="radio" name="question-6" value="a"> <span class="answer__text"><span class="answer__btn"></span><span>межстрочный
интервал</span></span> </label><label class="answer"><span class="answer__circle"></span><input class="answer__input"
type="radio" name="question-6" value="b"> <span class="answer__text"><span class="answer__btn"></span><span>наклон
шрифта</span></span> </label><label class="answer"><span class="answer__circle"></span><input class="answer__input"
type="radio" name="question-6" value="c"> <span class="answer__text"><span class="answer__btn"></span><span>толщина
шрифта</span></span> </label></li><li class="question-item"><p class="question__text">7. Какое значение используют для
добавления прозрачности цвета?</p> <label class="answer"><span class="answer__circle"></span><input
class="answer__input" type="radio" name="question-7" value="a"> <span class="answer__text"><span
class="answer__btn"></span><span>rgba</span> </span></label><label class="answer"><span
class="answer__circle"></span><input class="answer__input" type="radio" name="question-7" value="b"> <span
class="answer__text"><span class="answer__btn"></span><span>rgb</span> </span></label><label class="answer"><span
class="answer__circle"></span><input class="answer__input" type="radio" name="question-7" value="c"> <span
class="answer__text"> <span class="answer__btn"></span> <span>hex</span> </span> </label>	 </li> <li
class="question-item"> <p class="question__text">8. Кто обладает самым высоким уровнем специфичности?</p> <label
class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8"
value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>идентификатор</span> </span> </label>	
<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8"
value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>псевдокласс</span> </span> </label>	
<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8"
value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>!important</span> </span> </label>	 </li>
<li class="question-item"> <p class="question__text">9. Какое свойство нужно выбрать, чтобы элемент <span
class="code-item_orange"> a</span> занимал всю ширину браузера?</p> <label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-9" value="a"> <span
class="answer__text"> <span class="answer__btn"></span> <span>margin: 0 auto;</span> </span> </label>	 <label
class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-9"
value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>display: block;</span> </span> </label>	
<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-9"
value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>text-align: center;</span> </span>
</label>	 </li> <li class="question-item"> <p class="question__text">10. Какой псевдокласс изменяет свойства <span
class="code-item_orange"> css</span> при наведении курсора мыши на элемент?</p> <label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-10" value="a"> <span
class="answer__text"> <span class="answer__btn"></span> <span>:focus</span> </span> </label>	 <label class="answer">
<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-10" value="b"> <span
class="answer__text"> <span class="answer__btn"></span> <span>:active</span> </span> </label>	 <label class="answer">
<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-10" value="c"> <span
class="answer__text"> <span class="answer__btn"></span> <span>:hover</span> </span> </label>	 </li>`,
	answers: ['b','a','a','c','a','c','a','c','b','c']
},

{
	test: 'two',
	questions: `<li class="question-item"> <p class="question__text">1. Какой элемент отвечает за заголовок первого
уровня?</p> <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
name="question-1" value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>title</span> </span>
</label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
name="question-1" value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>h1</span> </span>
</label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
name="question-1" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>header</span> </span>
</label>	 </li> <li class="question-item"> <p class="question__text">2. Какой атрибут элемента <span
class="code-item_orange"> a</span>  позволяет открыть страницу в новой вкладке браузера?</p> <label class="answer">
<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-2" value="a"> <span
class="answer__text"> <span class="answer__btn"></span> <span>src</span> </span> </label>	 <label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-2" value="b"> <span
class="answer__text"> <span class="answer__btn"></span> <span>value</span> </span> </label>	 <label class="answer">
<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-2" value="c"> <span
class="answer__text"> <span class="answer__btn"></span> <span>target</span> </span> </label>	 </li> <li
class="question-item"> <p class="question__text">3. Какой элемент используется для создания строки таблицы?</p> <label
class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-3"
value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>tr</span> </span> </label>	 <label
class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-3"
value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>td</span> </span> </label>	 <label
class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-3"
value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>th</span> </span> </label>	 </li> <li
class="question-item"> <p class="question__text">4. Какой тип элемента<span class="code-item_orange"> input</span> 
здесь используется: <input type="password"> ?</p> <label class="answer"> <span class="answer__circle"></span> <input
class="answer__input" type="radio" name="question-4" value="a"> <span class="answer__text"> <span
class="answer__btn"></span> <span>text</span> </span> </label>	 <label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-4" value="b"> <span
class="answer__text"> <span class="answer__btn"></span> <span>password</span> </span> </label>	 <label class="answer">
<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-4" value="c"> <span
class="answer__text"> <span class="answer__btn"></span> <span>radio</span> </span> </label>	 </li> <li
class="question-item"> <p class="question__text">5. Какой элемент позволяет связать <span class="code-item_orange">
input</span> с текстом?</p> <label class="answer"> <span class="answer__circle"></span> <input class="answer__input"
type="radio" name="question-5" value="a"> <span class="answer__text"> <span class="answer__btn"></span>
<span>textarea</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
class="answer__input" type="radio" name="question-5" value="b"> <span class="answer__text"> <span
class="answer__btn"></span> <span>ol</span> </span> </label>	 <label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-5" value="c"> <span
class="answer__text"> <span class="answer__btn"></span> <span>label</span> </span> </label> </li> <li
class="question-item"> <p class="question__text">6. Что делает <span class="code-item_orange"> css</span>?</p> <label
class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-6"
value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>создаёт оформление html-страниц</span>
</span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
name="question-6" value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>отвечает за структуру
сайта</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input"
type="radio" name="question-6" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>отправляет
данные на сервер</span> </span> </label>	 </li> <li class="question-item"> <p class="question__text">7. Как добавить
нижнее подчёркивание для элемента?</p> <label class="answer"> <span class="answer__circle"></span> <input
class="answer__input" type="radio" name="question-7" value="a"> <span class="answer__text"> <span
class="answer__btn"></span> <span>font-style: oblique;</span> </span> </label>	 <label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-7" value="b"> <span
class="answer__text"> <span class="answer__btn"></span> <span>text-decoration: underline;</span> </span> </label>	
<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-7"
value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>font-weight: 500;</span> </span>
</label></li> <li class="question-item"> <p class="question__text">8. Какая единица измерения выстраивается
относительно элемента <span class="code-item_orange"> html</span>?</p> <label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8" value="a"> <span
class="answer__text"> <span class="answer__btn"></span> <span>px</span> </span> </label><label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8" value="b"> <span
class="answer__text"> <span class="answer__btn"></span> <span>em</span> </span> </label>	 <label class="answer"> <span
class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8" value="c"> <span
class="answer__text"> <span class="answer__btn"></span> <span>rem</span> </span> </label>	 </li> <li
class="question-item"> <p class="question__text">9. Что из перечисленного является классом?</p> <label class="answer">
<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-9" value="a"> <span
class="answer__text"> <span class="answer__btn"></span> <span>.text-color</span> </span> </label>	 <label
class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-9"
value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>#title-main</span> </span> </label>	
<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-9"
value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>button</span> </span> </label>	 </li> <li
class="question-item"> <p class="question__text">10. Какой элемент используется для группирования элементов в целях
стилизации?</p> <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
name="question-10" value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>form</span> </span>
</label><label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
name="question-10" value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>div</span> </span>
</label><label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
name="question-10" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>p</span> </span>
</label></li>`,
	answers: ['b','c','a','b','c','a','b','c','a','b']
}

];

let testNumber = String(window.location);
if (testNumber.includes('test1') === true) testNumber = 0;
else if (testNumber.includes('test2') === true) testNumber = 1;

const quickWordMain = [
{
	html: ['Контейнер для html-кода страницы', 'Контейнер элементов, предназначенных в первую очередь для браузера', 'Контейнер элементов, которые отображаются в окне браузера', 'Определяет название сайта, вкладки в браузере', 'Заголовок первого уровня', 'Заголовок второго уровня', 'Элемент для параграфа текста', 'Пустой элемент, который переносит текст на новую строку', 'Контейнер для маркированного списка', 'Контейнер для нумерованного списка', 'Элемент для одной строки списка', 'Элемент для изображения', 'Атрибут, который содержит путь к изображению', 'Атрибут для описания изображения', 'Элемент для ссылки', 'Атрибут, который позволяет перейти на другую html-страницу', 'Атрибут, который загружает новую html-страницу в другой вкладке браузера', 'Контейнер для всей таблицы', 'Элемент для отображения строки таблицы', 'Ячейка таблицы для внесения данных', 'Контейнер для формы', 'Метод для передачи данных на сервер', 'Метод запроса данных у сервера', 'Однострочный input, не скрывает символы', 'Однострочный input, который скрывает символы', 'Переключатель для выбора одного варианта', 'Позволяет выбрать разное количество вариантов', 'Подсказка для ввода значений в поле формы', 'Элемент, который связывает input с текстом', 'Элемент формы для многострочного ввода текста', 'Элемент для кнопки', 'Элемент для группирования разных html-элементов в целях стилизации', 'Элемент для группирования строчных html-элементов', 'Атрибут для идентификатора', 'Атрибут для класса'],
	answers: ['html', 'head', 'body', 'title', 'h1', 'h2', 'p', 'br', 'ul', 'ol', 'li', 'img', 'src', 'alt', 'a', 'href', 'target', 'table', 'tr', 'td', 'form', 'POST', 'GET', 'type="text"', 'type="password"', 'type="radio"', 'type="checkbox"', 'placeholder', 'label', 'textarea', 'button', 'div', 'span', 'id', 'class']
},
{
	css: ['Свойство для семейства шрифта', 'Шрифт без засечек', 'Шрифт с засечками', 'Свойство для размера шрифта', 'Размер шрифта относительно элемента html', 'Свойство для толщины шрифта', 'Свойство для наклонного шрифта', 'Свойство для подчёркивания текста', 'Межстрочный интервал', 'Ширина элемента', 'Высота элемента', 'Цвет текста', 'Цвет фона элемента', 'Свойство для границы', 'Радиус скругления границ', 'Создание самого высокого уровня специфичности', 'Переопределение строчных элементов в блочные', 'Построение блочных элементов в один ряд', 'Удаление элемента из html-кода', 'Внешний отступ', 'Внутренний отступ', 'Выравнивание текста внутри блочного элемента', 'Центрирование блочного элемента', 'Идентификатор в css-коде', 'Класс в css-коде', 'Переопределение css-свойств при наведении курсора мыши'],
	answers: ['font-family', 'sans-serif', 'serif', 'font-size', 'rem', 'font-weight', 'font-style', 'text-decoration', 'line-height', 'width', 'height', 'color', 'background-color', 'border', 'border-radius', '!important', 'display: block', 'display: inline-block', 'display: none', 'margin', 'padding', 'text-align', '0 auto 0 auto', '#text-purple', '.text-orange', ':hover']
},
{
	all: [],
	answers: []
}
];

const devToolsMain = {
	element: ['<div class="answer" style="background-color: maroon;"></div>',
	'<img class="answer" src="../../img/earth.svg">',
	'<img class="answer" src="../../img/house-img.svg">',
	'<p class="answer">Резиновый подлокотник эскалатора в метро двигается с другой скоростью для того, чтобы пассажир не уснул на эскалаторе</p>',
	'<p class="answer">Профессиональный бегун способен со старта опередить гоночную машину в первые 10 метров</p>',
	'<p class="answer">Чтобы расколоть орех, достаточно положить его в горячую воду на 48 часов</p>',
	'<p class="answer">Если желтую канарейку кормить красным перцем, цвет ее перьев станет ярко-оранжевым</p>',
	'<p class="answer">Колибри — единственная птица, которая может летать задом наперед</p>',
	'<p class="answer">Для точного поддержания баланса и аэродинамических свойств орел, при выпадении пера из одного крыла теряет такое же перо из другого крыла</p>',
	'<p class="answer">Кошки, как и люди, могут быть и правшами, и левшами</p>',
	'<p class="answer">В среднем человек засыпает в течение 7 минут</p>',
	'<p class="answer">Домохозяйка в среднем проходит 11 километров в день, занимаясь домашними делами</p>',
	'<p class="answer" style="color: rgb(0, 0, 0)">В среднем в течение жизни человек тратит около пяти лет на еду</p>',
	'<img class="answer" src="../../img/book.svg">',
	'<img class="answer" style="background-color: rgba(255, 0, 145, 1)" src="../img/balloon.svg">',
	'<img class="answer" src="../../img/monkey.png">',
	'<img class="answer" src="../../img/earth.svg">',
	'<img class="answer" src="../../img/moon.svg">',
	'<div class="answer" style="background-color: #09dd66;"></div>',
	'<img class="answer" src="../../img/clock.svg" style="border: 1px solid #cc584c;">',
	'<p class="answer" style="border: 1px solid #09dd66;">В течение жизни человек проходит расстояние, равное 5 экваторам Земли</p>',
	'<p class="answer" style="border: 1px solid #6909dd;">В среднем дети смеются около 400 раз в день, взрослые смеются около 15 раз в день</p>',
	'<p class="answer" style="border: 1px solid #ff4800;">В среднем самые высокие люди – голландцы</p>',
	'<p class="answer" style="border: 1px solid red;">В среднем люди самого маленького роста – японцы</p>',
	'<p class="answer">Вы разделяете свой день рождения почти с 20 миллионами человек в мире</p>'],
	question: ['Добавьте 120px для высоты элемента', 'Ширина элемента должна быть 130px', 'Ширина картинки должна быть 100px', 'Установите шрифт Verdana', 'Установите шрифт Georgia', 'Размер шрифта должен составлять 20px', 'Размер шрифта должен составлять 14px', 'Жирность шрифта равна 700', 'Межстрочный интервал равен 32px', 'Сделайте текст наклонным через oblique', 'Добавьте нижнее подчёркивание для текста', 'Установите цвет текста purple', 'Измените цвет текста на rgb(0, 30, 255)', 'Установите цвет aquamarine для фона', 'Сделайте цвет фона полупрозрачным - 0.5', 'Изображение должно стать блочным', 'Удалите элемент','Удалите элемент', 'Добавьте сплошную границу в 3px с цветом blue через свойство border', 'Добавьте скругление углов границы в 8px', 'Добавьте 20px внутреннего отступа сверху', 'Внутренний отступ слева должен состалять 30px', 'Верхний внешний отступ элемента должен составлять 50px', 'Добавьте 30px для нижнего внешнего отступа', 'Выравняйте текст в блочном элементе по центру'],
	value: ['120px', '130px', '100px', 'Verdana', 'Georgia', '20px', '14px', '700', '32px', 'oblique', 'underline', 'purple', 'rgb(0, 30, 255)', 'aquamarine', 'rgba(255, 0, 145, 0.5)', 'block', 'none', 'none', '3px solid blue', '8px', '20px', '30px', '50px', '30px', 'center'],
};


const practiceMain = [
	{
		category: 'html',
		question: ['Добавьте заголовок первого уровня', 'Добавьте параграф', 'Добавьте контейнер для маркированного списка', 'Добавьте контейнер для нумерованного списка', 'Добавьте изображение', 'Установите атрибут для описания изображения', 'Установите ссылку на другую html-страницу', 'Ссылка должна открываться в новой вкладке', 'Добавьте строку для таблицы', 'Добавьте "пустой" элемент для переноса строки', 'Установите элемент для однострочного ввода нескрытого текста', 'Добавьте атрибут для ввода скрытого текста', 'Установите подсказку ввода текста внутри поля формы', 'Установите радиокнопку', 'Установите чекбокс', 'Добавьте элемент для многострочного комментария', 'Добавьте обычную кнопку', 'Добавьте атрибут идентификатора', 'Добавьте атрибут класса', 'Добавьте "обёртку" для группы блочных элементов'],
		answerField: ['<<input type="text">>Моя Африка<<input type="text">>', '<<input type="text">>Сахарная вата была изобретена стоматологом<<input type="text">>', '<<input type="text">><br><span style="margin-left: 5px;"><&shy;li>Печенье<&shy;/li></span><br><span style="margin-left: 5px;"><&shy;li>Шоколад<&shy;/li></span></br><<input type="text">>', '<<input type="text">><br><span style="margin-left: 5px;"><&shy;li>Октябрь<&shy;/li></span><br><span style="margin-left: 5px;"><&shy;li>Ноябрь<&shy;/li></span></br><<input type="text">>', '<<input type="text"> <input type="text">="monkey.png">', '<<input type="text"> src="monkey.png" <input type="text">="Задумчивая обезьяна">', '<<input type="text"> <input type="text"> ="https://google.com">Google<&shy;/a>', '<&shy;a href="https://google.com" <input type="text">="<input type="text">">Google<&shy;/a>', '<<input type="text">><br><span style="margin-left: 5px;"><&shy;td>Юпитер<&shy;/td></span><br><span style="margin-left: 5px;"><&shy;td>Нептун<&shy;/td></span></br><<input type="text">>', '<&shy;p>В Канаде озёр больше, <<input type="text">> чем в любой другой стране<&shy;/p>', '<<input type="text"> type="<input type="text">">', '<&shy;input <input type="text">="<input type="text" style="width: 80px">">', '<&shy;input type="text" <input type="text" style="width: 100px">="Ваш логин">', '<&shy;input <input type="text">="<input type="text">">', '<&shy;input <input type="text">="<input type="text" style="width: 80px">">', '<<input type="text" style="width: 80px"> placeholder="Ваш комментарий"><<input type="text" style="width: 80px">>', '<<input type="text">>Отправить<<input type="text">>', '<&shy;p <input type="text">="text-blue">Национальный гимн Греции имеет 158 куплетов<&shy;/p>', '<&shy;p <input type="text">="text-orange">Кошки не чувствуют сладкого вкуса<&shy;/p>', '<<input type="text">><br><span style="margin-left: 10px;"><&shy;h2>Кратко обо мне<&shy;/h2></span><br><span style="margin-left: 10px;"><&shy;p>Я живу на Земле<&shy;/p></span><br><<input type="text">>'],
		answers: [ ['h1', '/h1'], ['p', '/p'], ['ul', '/ul'], ['ol', '/ol'], ['img','src'], ['img','alt'], ['a','href'], ['target','_blank'], ['tr','/tr'], ['br'], ['input', 'text'], ['type', 'password'], ['placeholder'], ['type', 'radio'], ['type', 'checkbox'], ['textarea', '/textarea'], ['button', '/button'], ['id'], ['class'], ['div', '/div']],
		correct: ['<&shy;h1>Моя Африка<&shy;/h1>', '<&shy;p>Сахарная вата была изобретена стоматологом<&shy;/p>', '<&shy;ul><br><span><&shy;li>Печенье<&shy;/li></span><br><span><&shy;li>Шоколад<&shy;/li></span></br><&shy;/ul>', '<&shy;ol><br><span><&shy;li>Октябрь<&shy;/li></span><br><span><&shy;li>Ноябрь<&shy;/li></span></br><&shy;/ol>', '<&shy;img  src="monkey.png">', '<&shy;img  src="monkey.png" alt="Задумчивая обезьяна">', '<&shy;a href="https://google.com">Google<&shy;/a>', '<&shy;a href="https://google.com" target="_blank">Google<&shy;/a>', '<&shy;tr><br><span><&shy;td>Юпитер<&shy;/td></span><br><span><&shy;td>Нептун<&shy;/td></span></br><&shy;/tr>', '<&shy;p>В Канаде озёр больше,<&shy;br>чем в любой другой стране<&shy;/p>', '<&shy;input  type="text">', '<&shy;input  type="password">', '<&shy;input  type="text" placeholder="Ваш логин">', '<&shy;input  type="radio">', '<&shy;input  type="checkbox">', '<&shy;textarea placeholder="Ваш комментарий"><&shy;/textarea>', '<&shy;button>Отправить<&shy;/button>', '<&shy;p id="text-blue">Национальный гимн Греции имеет 158 куплетов<&shy;/p>', '<&shy;p class="text-orange">Кошки не чувствуют сладкого вкуса<&shy;/p>', '<&shy;div><br><span><&shy;h2>ОКратко обо мне<&shy;/h2></span><br><span><&shy;p>Я живу на Земле<&shy;/p></span><br><&shy;/div>'],
		exampleEnd: ['<h1 style="margin-left:15px;">Моя Африка</h1>', '<p>Сахарная вата была изобретена стоматологом</p>', '<ul><li style="list-style: disc; padding-left: 0;">Печенье</li><li style="list-style: disc; padding-left: 0;">Шоколад</li></ul>', '<ol><li style="list-style: decimal; padding-left: 0;">Октябрь</li><li style="list-style: decimal; padding-left: 0;">Ноябрь</li></ol>', '<img src="../../img/monkey.png">', '<img src="../../img/monkey.png" alt="Задумчивая обезьяна">', '<a href="https://google.com" style="color:blue;">Google</a>', '<a href="https://google.com" target="_blank" style="color:blue; margin-left:15px;">Google</a>', '<table><tr><td style="padding-left:0;"> Юпитер </td><td style="padding-left:0;"> Нептун </td></tr></table>', '<p>В Канаде озёр больше,<br> чем в любой другой стране</p>', '<input style="margin-left:15px; padding-left:5px;"  type="text">', '<input style="margin-left:15px; padding-left:5px;"  type="password">', '<input style="margin-left:15px; padding-left:5px;"  type="text" placeholder="Ваш логин">', '<input type="radio" style="margin-left:15px;">', '<input type="checkbox" style="margin-left:15px;">', '<textarea placeholder="Ваш комментарий" style="padding-left:5px; margin-left: 15px;"></textarea>', '<button style="margin-left:15px; padding-left:0;">Отправить</button>', '<p style="color:blue;">Национальный гимн Греции имеет 158 куплетов</p>', '<p style="color:#f97247;">Кошки не чувствуют сладкого вкуса</p>', '<div><h2 style="padding-left:0;">Кратко обо мне</h2><p style="padding-left:0;">Я живу на Земле</p></div>'],
	},

	{
		category: 'css',
		question: ['Добавьте семейство шрифта', 'Установите размер шрифта', 'Установите толщину шрифта', 'Сделайте шрифт наклонным', 'Добавьте нижнее подчеркивание', 'Добавьте межстрочный интервал', 'Измените цвет текста', 'Добавьте цвет фона', 'Сделайте цвет фона полупрозрачным', 'Измените ширину изображения', 'Измените высоту изображения', 'Селектор должен быть идентификатором', 'Селектор должен быть классом', 'Установите максимальную специфичность', 'Сделайте элемент блочным', 'Удалите элемент из разметки', 'Добавьте сплошую границу', 'Добавьте внутренний отступ', 'Добавьте внешний отступ', 'Выравняйте текст по центру'],
		answerField: ['p {<br><div><input type="text" style="width:90px;">: Arial, sans-serif;</div>}', 'p {<br><div><input type="text">: 20px;</div>}', 'span {<br><div><input type="text">: 700;</div>}', 'p {<br><div><input type="text">: oblique;</div>}', '.text-box {<br><div><input type="text" style="width:125px;">: <input type="text">;</div>}', 'p {<br><div><input type="text">: 36px;</div>}', 'p {<br><div><input type="text">: #34a853;</div>}', 'div {<br><div><input style="width:145px;" type="text">: #f466a8;</div>}', '.semitransparent-image {<br><div><input style="width:145px;" type="text">: <input type="text" style="width:50px;">(103, 204, 124, 0.5);</div>}', 'img {<br><div><input type="text">: 150px;</div>}', '#book {<br><div><input type="text">: 100px;</div>}', '<input type="text" style="width:30px">box {<br><div>background-color: grey;</div>}', '<input type="text" style="width:30px">box {<br><div>background-color: pink;</div>}', '.text {<br><div>color: chocolate <input type="text">;</div>}', 'a {<br><div><input type="text" style="width:90px;">: <input type="text">;</div>}', '.hidden {<br><div><input type="text">: <input type="text">;</div>}', 'p {<br><div><input type="text" style="width:60px">: 2px <input type="text" style="width:60px"> grey;</div>}', '.text-box {<br><div><input type="text" style="width:70px">: 20px&nbsp;&nbsp;10px&nbsp;&nbsp;30px&nbsp;&nbsp;50px;</div>}', '.text-box {<br><div><input type="text" style="width:70px">: 50px&nbsp;&nbsp;15px&nbsp;&nbsp;5px&nbsp;&nbsp;20px;</div>}', 'h3 {<br><div><input type="text">: center;</div>}'],
		answers: [ ['font-family'],  ['font-size'],  ['font-weight'],  ['font-style'],  ['text-decoration','underline'],  ['line-height'],  ['color'],  ['background-color'],  ['background-color','rgba'],  ['width'],  ['height'],  ['#'],  ['.'],  ['!important'],  ['display', 'block'],  ['display', 'none'],  ['border', 'solid'],  ['padding'],  ['margin'],  ['text-align']],
		correct: ['p {<br><div>font-family: Arial, sans-serif;</div>}', 'p {<br><div>font-size: 20px;</div>}', 'span {<br><div>font-weight: 700;</div>}', 'p {<br><div>font-style: oblique;</div>}', '.text-box {<br><div>text-decoration: underline;</div>}', 'p {<br><div>line-height: 36px;</div>}', 'p {<br><div>color: #34a853;</div>}', 'div {<br><div>background-color: #f466a8;</div>}', '.semitransparent-image {<br><div>background-color: rgba(103, 204, 124, 0.5);</div>}', 'img {<br><div>width: 150px;</div>}', '#book {<br><div>height: 100px;</div>}', '#box {<br><div>background-color: grey;</div>}', '.box {<br><div>background-color: pink;</div>}', '.text {<br><div>color: chocolate !important;</div>}', 'a {<br><div>display: block;</div>}', '.hidden {<br><div>display: none;</div>}', 'p {<br><div>border: 2px solid grey;</div>}', '.text-box {<br><div>padding: 20px&nbsp;&nbsp;10px&nbsp;&nbsp;30px&nbsp;&nbsp;50px;</div>}', '.text-box {<br><div>margin: 50px&nbsp;&nbsp;15px&nbsp;&nbsp;5px&nbsp;&nbsp;20px;</div>}', 'h3 {<br><div>text-align: center;</div>}'],
		exampleEnd: ['<p style="font-family: Arial, sans-serif">Центральный Парк Нью-Йорка по площади в десять раз больше Ватикана</p>', '<p style="font-size: 20px">У выдр в коже есть кармашек для камушков</p>', '<span style="font-weight: 700">MySql</span>', '<p style="font-style: oblique;">Средний IQ человека вырос примерно на 20% с 1950-х годов</p>', '<p style="text-decoration: underline;">Жирафы могут обходиться без воды дольше, чем верблюды</p>', '<p style="line-height: 36px;">Марокко — единственная в мире страна, где козы из-за нехватки травы взбираются на деревья и пасутся там целыми стадами</p>', '<p style="color: #34a853;">Компания Google зарабатывает примерно 700 долларов в секунду</p>', '<div style="background-color: #f466a8; width:50px; height:50px;"></div>', '<img src="../../img/elephant.png" style="background-color: rgba(103, 204, 124, 0.5); width:50%; margin-left:50px;">', '<img src="../../img/house-img.svg" style="width: 150px;">', '<img src="../../img/book.svg" style="width: 150px; height: 100px;">', '<div style="width: 75px; height: 75px; background-color: grey"></div>', '<div style="width: 75px; height: 75px; background-color: pink"></div>', '<div style="color: chocolate !important; font-weight:700;">Из одного какао-боба производится примерно 1 грамм шоколада</div>', '<a href="https://www.wikipedia.org" target="_blank" style="color: blue;">Wikipedia</a>', '<div style="color: chocolate;width:50px;height:50px;display:none;"></div>', '<p style="border: 2px solid grey; margin-left: 10px;">На полной скорости страус способен обогнать лошадь</p>', '<p style="border: 2px solid gold; margin-left: 10px; padding: 20px 10px 30px 50px;">За один час в мире находят больше железа, чем за всю историю нашли золота</p>', '<p style="border: 2px solid #00c3ff; margin: 50px 15px 5px 20px;">Морские коньки — самые медленные рыбы в океане</p>', '<h3 style="color:#0f8fb7; text-align:center !important;">Фауна Антарктиды</h3>'],
	},

	{
		category: 'all',
		question: [],
		answerField: [],
		answers: [],
		correct: [],
		exampleEnd: [],
	},
	
]
