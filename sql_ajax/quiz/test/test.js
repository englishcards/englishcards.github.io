const questionList = document.querySelector('.question-list');
if (window.location.href.includes('test.php')) questionList.innerHTML = quizAnswers[0].questions;
if (window.location.href.includes('test_2.php')) questionList.innerHTML = quizAnswers[1].questions;

let testAnswer = document.querySelectorAll('.answer__input');
const btnEndTest = document.querySelector('.question-btn_test');
let count = 0;

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
let modalText = document.querySelector('.modal__text');
const modalBtn = document.querySelector('.modal__btn');

function chooseCorrect(element, name1, item) {
	if (element.value === item && element.name === name1 && element.checked === true) {
		element.previousElementSibling.style.background = "url(../img/checked.svg) no-repeat";
		element.nextElementSibling.classList.add('answer-correct');
		count++;
	}
	else if (element.value !== item && element.name === name1 && element.checked === true) {
		element.previousElementSibling.style.background = "url(../img/unchecked.svg) no-repeat";
		element.nextElementSibling.classList.add('answer-incorrect');
	}
}

function calculateTotal() {
	let mainUrl = window.location.href;
	if (mainUrl.includes('test.php')) {
		for (let key in testAnswer) {
			chooseCorrect(testAnswer[key], 'question-1', 'a');
			chooseCorrect(testAnswer[key], 'question-2', 'c');
			chooseCorrect(testAnswer[key], 'question-3', 'a');
			chooseCorrect(testAnswer[key], 'question-4', 'c');
			chooseCorrect(testAnswer[key], 'question-5', 'b');
			chooseCorrect(testAnswer[key], 'question-6', 'c');
			chooseCorrect(testAnswer[key], 'question-7', 'b');
			chooseCorrect(testAnswer[key], 'question-8', 'a');
			chooseCorrect(testAnswer[key], 'question-9', 'b');
			chooseCorrect(testAnswer[key], 'question-10', 'a');
		}
	}
	if (mainUrl.includes('test_2.php')) {
		for (let key in testAnswer) {
			chooseCorrect(testAnswer[key], 'question-1', 'c');
			chooseCorrect(testAnswer[key], 'question-2', 'c');
			chooseCorrect(testAnswer[key], 'question-3', 'b');
			chooseCorrect(testAnswer[key], 'question-4', 'a');
			chooseCorrect(testAnswer[key], 'question-5', 'a');
			chooseCorrect(testAnswer[key], 'question-6', 'b');
			chooseCorrect(testAnswer[key], 'question-7', 'c');
			chooseCorrect(testAnswer[key], 'question-8', 'b');
			chooseCorrect(testAnswer[key], 'question-9', 'a');
			chooseCorrect(testAnswer[key], 'question-10', 'b');
		}
	}
	
}

btnEndTest.onclick = () => {
	window.scrollTo(0,0);
	calculateTotal();
	document.querySelector('.result__number').innerText = count * 10 + '%';

	btnEndTest.style.display = 'none';
	document.querySelector('.result-box').style.display = 'flex';

	let btnAnswer = document.querySelectorAll('.answer__btn');
	for (let key in btnAnswer) {
		btnAnswer[key].hidden = true;
	}
}

// OVERLAY
function openOverlay(event, overlay,modal) {
	let testResult = document.querySelector('.modal__number');

	event.preventDefault();
	modal.onclick = (e) => e.stopPropagation();

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';

	showResult(document.querySelector('.modal__text_top'));
	testResult.innerText = count * 10 + '%';

	showMainProgress();

	  if (overlay) overlay.classList.add('block-transition');
	}

function closeOverlay(overlay) {
	overlay.classList.remove('block-transition');
	if (overlay)  overlay.classList.add('none-transition');
}
window.addEventListener('keyup', function (e) {
e.preventDefault();
overlay.classList.remove('block-transition');
  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
    overlay.classList.add('none-transition');
  }
});

function showResult(text) {
	if (count == 10) {
		text.classList.add('modal__text_animation');
		text.innerText = 'Поздравляем!!!';
	}
	else if (count >= 8) {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Вы успешно прошли тест';
	}
	else {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Вы можете пройти тест ещё раз';
	}
}

overlay.onclick = () => closeOverlay(overlay);
modalBtn.onclick = () => closeOverlay(overlay);

// RELOAD TEST

document.querySelector('.result__btn_right').onclick = () => {
	setTimeout( () =>  {
		window.location.reload(true);
	}, 
	10);
}