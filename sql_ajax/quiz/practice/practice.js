const question = document.querySelector('.question');
const operators = document.querySelectorAll('.parts__answer');
const operatorsWrap = document.querySelector('.parts-wrap');
const inputRow = document.querySelector('.answer-field');
const btnClear = document.querySelector('.button-answer_left');
const btnCheck = document.querySelector('.button-answer_right');
const answerShow = document.querySelector('.answer-show');
const answerTable = document.querySelector('.table-answer');
const signAnswer = document.querySelector('.sign-field');
const progress = document.querySelector('.progress');
const result = document.querySelector('.result');

let inputs;
let counterInput = 0;
let counterAnswer = 0;
let counterCorrect = 0;

btnClear.disabled = true;
btnCheck.disabled = true;
result.innerText = `${counterCorrect} %`;
progress.innerText = `1 / ${questionArr.length}`;

operators.forEach(element => {
	element.onclick = () => {
		inputs = document.querySelectorAll('.answer-field_empty');
		if (counterInput < inputs.length) {
			inputs[counterInput].innerText = element.innerText;
			inputs[counterInput].style.border = 'none';
			counterInput++;
		}
		if (counterInput == inputs.length) {
			operators.forEach(element => {
				element.classList.add('parts__answer_opacity');
				btnClear.classList.remove('btn_clear');
				btnClear.disabled = false;
				btnCheck.classList.remove('btn_clear');
				btnCheck.disabled = false;
				return;
			});	
		}
	}
});

btnClear.onclick = () => {
	clearInputs();
	btnClear.classList.add('btn_clear');
	btnClear.disabled = true;
	btnCheck.classList.add('btn_clear');
	btnCheck.disabled = true;
}

btnCheck.onclick = () => {
	if (btnCheck.innerText == 'Далее') {
		clearInputs();
		clearAnswer();
		question.innerText = questionArr[counterAnswer];
		inputRow.innerHTML = questionFieldArr[counterAnswer];
		progress.innerText = `${counterAnswer + 1} / ${questionArr.length}`;
	}
	else {
		if (counterAnswer == 0) {
			if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'FROM') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 1) {
			if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'WHERE' && inputs[2].innerText == '>=') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 2) {
			if (inputs[0].innerText == 'FROM' && inputs[1].innerText == 'WHERE' && inputs[2].innerText == 'AND') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 3) {
			if (inputs[0].innerText == 'DISTINCT' && inputs[1].innerText == 'name' && inputs[2].innerText == 'ORDER BY' && inputs[3].innerText == 'DESC') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 4) {
			if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'WHERE' && inputs[2].innerText == 'LIKE') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 5) {
			if (inputs[0].innerText == 'MAX' && inputs[1].innerText == 'age') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 6) {
			if (inputs[0].innerText == 'AVG' && inputs[1].innerText == 'GROUP BY' && inputs[2].innerText == 'name' && inputs[3].innerText == 'HAVING') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 7) {
			if (inputs[0].innerText == 'UPDATE' && inputs[1].innerText == 'SET' && inputs[2].innerText == 'age' && inputs[3].innerText == 'WHERE') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 8) {
			if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'JOIN' && inputs[2].innerText == 'ON' && inputs[3].innerText == 'id_singer' && inputs[4].innerText == '<') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}
		if (counterAnswer == 9) {
			if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'LEFT JOIN' && inputs[2].innerText == 'ON' && inputs[3].innerText == 'id' && inputs[4].innerText == 'id_singer') {
				chooseCorrect(counterAnswer);
			}
			else {
				chooseWrong(counterAnswer);
			}
		}			
	counterAnswer++;
	result.innerText = `${counterCorrect} %`;	
	}	
}

function clearInputs() {
	operators.forEach(element => {
		element.classList.remove('parts__answer_opacity');
	});	
	inputs.forEach(element => {
		element.style.border = '1.5px solid #269cc0';
		element.innerText = '';
	});
	counterInput = 0;
}

function chooseCorrect(order) {
	counterCorrect +=10;
	answerShow.innerHTML = answerArr[order];
	inputRow.classList.add('answer-correct_light');
	inputs.forEach(element => {
		element.classList.add('answer-correct_light');
	});
	signAnswer.hidden = false;
	signAnswer.classList.add('sign-field-correct');
	operatorsWrap.style.display = 'none';
	answerTable.hidden = false;
	answerTable.innerHTML = resultArr[order];
	btnClear.classList.add('btn_clear');
	btnClear.disabled = true;

	if (counterAnswer == 9) {
		const formPractice = document.querySelector('.practice-form');
		const formPracticeBtn = document.querySelector('.question-btn_practice');
		formPractice.classList.remove('hidden');
		btnCheck.style.display = 'none';
	}
	else btnCheck.innerText = 'Далее';
}

function chooseWrong(order) {
	answerShow.innerHTML = answerArr[order];
	inputRow.classList.add('error-answer_light');
	inputs.forEach(element => {
		element.classList.add('error-answer_light');
	});
	signAnswer.hidden = false;
	signAnswer.classList.add('sign-field-incorrect');
	operatorsWrap.style.display = 'none';
	answerTable.hidden = false;
	answerTable.innerHTML = resultArr[order];
	btnClear.classList.add('btn_clear');
	btnClear.disabled = true;
	
	if (counterAnswer == 9) {
		const formPractice = document.querySelector('.practice-form');
		const formPracticeBtn = document.querySelector('.question-btn_practice');
		formPractice.classList.remove('hidden');
		btnCheck.style.display = 'none';
	}	
	else btnCheck.innerText = 'Далее';		
}

function clearAnswer() {
	answerShow.innerText = '';
	inputRow.classList.remove('answer-correct_light');
	inputRow.classList.remove('error-answer_light');
	inputs.forEach(element => {
		element.classList.remove('error-answer_light');
		element.classList.remove('answer-correct_light');
	});
	signAnswer.hidden = true;
	signAnswer.classList.remove('sign-field-incorrect');
	signAnswer.classList.remove('sign-field-correct');
	operatorsWrap.style.display = 'block';
	answerTable.hidden = true;
	btnCheck.innerText = 'Проверить';
	btnCheck.classList.add('btn_clear');
	btnCheck.disabled = true;
}

// OVERLAY
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');
let modalText = document.querySelector('.modal__text');

function openOverlay(event, overlay, modal) {
	let testResult = document.querySelector('.modal__number');
	showMainProgress();

	event.preventDefault();
	modal.onclick = (e) => e.stopPropagation();

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';
	if (overlay) overlay.classList.add('block-transition');
}

function showResult(text) {
	document.querySelector('.modal__number').innerText = `${counterCorrect} %`;
	if (counterCorrect == 100) {
		text.classList.add('modal__text_animation');
		text.innerText = 'Вау, это круто!!!';
	}
	else if (counterCorrect >= 80) {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Вы успешно прошли тест';
	}
	else {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Вы можете пройти тест ещё раз';
	}
}	

function closeOverlay(overlay) {
	overlay.classList.remove('block-transition');
	if (overlay) overlay.classList.add('none-transition');
}

window.addEventListener('keyup', function (e) {
e.preventDefault();
overlay.classList.remove('block-transition');
  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
    overlay.classList.add('none-transition');
  }
});

overlay.onclick = () => closeOverlay(overlay);

// RELOAD TEST
document.querySelector('.modal__btn').onclick = () => {
	setTimeout( () =>  {
		window.location.reload(true);
	}, 
	10);
}

