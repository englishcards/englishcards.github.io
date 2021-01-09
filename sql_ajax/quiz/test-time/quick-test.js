let questionText = document.querySelector('.question-text');
let answer = document.querySelectorAll('.question-item_answer');
const questionBtn = document.querySelector('.question-btn');
let countQuestion = document.querySelector('.progress-counter');

let questionArr = [];
let randomCorrect;
let count = 0;
let countResult = 0;
let timerBorder = document.querySelector('.question-time');
let timerText = document.querySelector('.question-time_counter');
let timerValue = 10;
let timer = 10;
let timerTemp;

const categoryBox = document.querySelectorAll('.category-box');
const categoryList = document.querySelector('.category-list');
const categoryItem = document.querySelectorAll('.category-item');
let categoryName = document.querySelectorAll('.category-box__name');

categoryBox[1].onclick = () => showCategory('5 секунд', '10 секунд', '20 секунд', categoryName[1]);

function showCategory(item1, item2, item3, category) {
	categoryList.style.display = 'block';
	window.scrollTo(0,0);
	categoryItem[0].innerText = item1;
	categoryItem[1].innerText = item2;
	categoryItem[2].innerText = item3;
	hideCategory(category);
}

function hideCategory(category) {
	categoryItem.forEach(element => {
		element.onclick = () => {
			categoryList.style.display = 'none';
			category.innerText = element.innerText;
			timer = parseInt(categoryName[1].innerText);
			timerValue = parseInt(categoryName[1].innerText);
		}
	});
}

document.querySelector('.question-start__btn').onclick = () => {
	document.querySelector('.question-start').style.display = 'none';
	document.querySelector('.question-wrap').style.display = 'block';

	getTypeTest(quickWordMain[0].sql, quickWordMain[0].answers);
	timerText.innerText = timer;
	
	function getTypeTest(type, answer) {
		makeQuestions(type);
		showAnswer(type, answer);
	}
}

questionBtn.onclick = changeQuestion;

function changeQuestion() {
	timer = timerValue;
	count++;
	countQuestion.innerText = `${count+1} / 10`;
	showAnswer(quickWordMain[0].sql, quickWordMain[0].answers);

	timerText.innerText = timer;
}

function showAnswer(set, answers) {
	defaultQuestion();
	randomCorrect = questionArr[count];
	questionText.innerText = quickWordMain[0].sql[randomCorrect];
	showQuestion(answers, randomCorrect);
}

function showQuestion(set, correctIndex) {
	chooseUnique();
	startTimer();
	function chooseUnique() {
		let item = [0, 1, 2];
		item[0] = getRandom(set);
		item[1] = getRandom(set);
		item[2] = getRandom(set);
		item[getRandom(answer)] = correctIndex;

		if (item[0] == item[1] || item[0] == item[2] || item[1] == item[2]) {
			chooseUnique();
		}
		else {
			answer[0].innerText = set[item[0]];
			answer[1].innerText = set[item[1]];
			answer[2].innerText = set[item[2]];
		}
	}
	answer.forEach(element => {
		element.onclick = () => {
			clearTimeout(timerTemp);
			if (count !== (questionArr.length - 1) && questionBtn.innerText == 'Выберите вариант') {
				defaultBtn('Далее');
				if (element.innerText == set[correctIndex]) chooseCorrect(element);
				else chooseIncorrect(element);
			}
			else if (count == (questionArr.length - 1) && questionBtn.innerText == 'Выберите вариант') {
				const formTime = document.querySelector('.test-time-form');
				const formTimeBtn = document.querySelector('.question-btn_test-time');
				formTime.classList.remove('hidden');
				questionBtn.style.display = 'none';

				if (element.innerText == set[correctIndex]) chooseCorrect(element);
				else chooseIncorrect(element);
			}
		}
	});
}

function defaultQuestion() {
	questionBtn.innerText = 'Выберите вариант';
	questionBtn.disabled = true;
	questionBtn.style.cursor = 'default';
	timerBorder.style.borderColor = 'rgba(63, 63, 63, 0.5)';
	answer.forEach(element => {
		element.classList.remove('answer-correct');
		element.classList.remove('answer-incorrect');
		element.style.backgroundImage = 'url(../img/radio-off.svg)';
	})	
}
function defaultBtn(text) {
	questionBtn.innerText = text;
	questionBtn.disabled = false;
	questionBtn.style.cursor = 'pointer';
}
function chooseCorrect(answer) {
	answer.classList.add('answer-correct');
	answer.style.backgroundImage = 'url(../img/checked.svg)';
	countResult+= 10;
}
function chooseIncorrect(answer) {
	answer.classList.add('answer-incorrect');
	answer.style.backgroundImage = 'url(../img/unchecked.svg)';
}

function startTimer() {
	timerTemp = setInterval(() => {
		timer--;
		timerText.innerText = timer;
		if (timer == 0 && questionBtn.innerText == 'Выберите вариант' && count !== (questionArr.length - 1)) {
			clearTimeout(timerTemp);
			changeQuestion();
		}
		if (timer == 0 && count === (questionArr.length - 1)) {
			clearTimeout(timerTemp);
			defaultBtn('Завершить');
		}

		let timerPart = (timerValue * 20) / 100;
		if (timerText.innerText == timerPart*5) timerBorder.style.borderColor = 'rgba(63, 63, 63, 0.5)';
		else if (timerText.innerText == timerPart*4) timerBorder.style.borderTopColor = '#269cc0';
		else if (timerText.innerText == timerPart*3) timerBorder.style.borderRightColor = '#269cc0';
		else if (timerText.innerText == timerPart*2) timerBorder.style.borderBottomColor = '#269cc0';
		else if (timerText.innerText == timerPart) timerBorder.style.borderLeftColor = '#269cc0';
	}, 1000);
}

function makeQuestions(setIndex) {
	while (questionArr.length < 10) {
		questionArr.push(getRandom(setIndex));
		questionArr = Array.from(new Set(questionArr));
	}
}

function getRandom(arr) {
	let random = Math.floor(Math.random() * arr.length);
	return random;
}

// OVERLAY

function showoverlay() {
	const overlay = document.querySelector('.overlay');
	const modal = document.querySelector('.modal');
	let testResult = document.querySelector('.modal__number');

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';
	showResult(document.querySelector('.modal__text_top'));
	testResult.innerText = `${countResult} %`;

	if (overlay) overlay.classList.add('block-transition');
	localStorage.setItem('sql-test2', `${countResult}%`);
	showMainProgress(); 
}

function showResult(text) {
	if (countResult == 100) {
		text.classList.add('modal__text_animation');
		text.innerText = 'Поздравляем!!!';
	}
	else if (countResult >= 80) {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Вы успешно прошли тест';
	}
	else {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Пройдите тест ещё раз';
	}
}

document.querySelector('.modal__btn').onclick = () => window.location.reload(true);

const quickWordMain = [
{
	sql: ['Тип данных для букв, цифр и символов', 'Тип данных для целых чисел', 'Тип данных для чисел с плавающей точкой', 'Тип данных для обозначения даты', 'Тип данных для текущей даты и времени', 'Можно отнести к типу данных DEC', 'Оператор для добавления строки', 'Оператор для вывода данных таблицы', 'При выборке данных все условия выполняются', 'При выборке данных хотя бы одно условие выполняется', 'Выборка в диапазоне от меньшего значения к большему', 'Пустое поле, не содержащее никакого значения', 'Используется при выводе значений NULL (ставится перед ним)', 'Используется при поиске строки с частично известным значением', 'Сортировка данных по возрастанию', 'Сортировка данных по убыванию', 'Позволяет вывести указанное число строк из таблицы', 'Агрегатная функция для вывода общего количества строк', 'Агрегатная функция для расчёта среднего числа в столбце', 'Агрегатная функция для суммы значений в столбце', 'Агрегатная функция для минимального значения в столбце', 'Оператор для группирования данных в столбце', 'Оператор создания условия для сгруппированных данных через GROUP BY', 'Уникальная выборка данных в столбце', 'Оператор для объединения множеств', 'Оператор для изменения данных в таблице', 'Ключевое слово для нового значения в столбце (используется при UPDATE)', 'Значение одной таблицы строго связано со значением другой таблицы через внешний ключ', 'Оператор для указания равенства внешнего и первичного ключа двух таблиц', 'Для первой таблицы подбираются значения второй таблицы через внешний ключ (при отсутствии значений добавляется NULL)'],
	answers: ['VARCHAR', 'INT', 'DEC', 'DATE', 'TIMESTAMP', '39.99', 'INSERT INTO', 'SELECT', 'AND', 'OR', 'BETWEEN', 'NULL', 'IS', 'LIKE', 'ORDER BY ASC', 'ORDER BY DESC', 'LIMIT', 'COUNT', 'AVG', 'SUM', 'MIN', 'GROUP BY', 'HAVING', 'DISTINCT', 'UNION', 'UPDATE', 'SET', 'INNER JOIN', 'ON', 'LEFT OUTER JOIN']
}
];