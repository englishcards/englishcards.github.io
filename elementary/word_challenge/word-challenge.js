let unit = 0;
let timerValue = 10;
let settingUnit;
function settingChallenge() {
	const settingUnitList = document.querySelector('.challenge-unit-list');
	const settingTimeList = document.querySelector('.challenge-time-list');
	const settingUnitItem = document.querySelectorAll('.challenge-unit-item');
	const settingTimeItem = document.querySelectorAll('.challenge-time-item');

	settingUnit = document.querySelector('.challenge-param_unit');
	let settingTime = document.querySelector('.challenge-param_time');

	document.querySelector('.challenge-unit').onclick = () => {
		manageSetting(settingUnitList, settingUnitItem, settingUnit);
	}
	document.querySelector('.challenge-time').onclick = () => {
		manageSetting(settingTimeList, settingTimeItem, settingTime);
	}
	document.querySelector('.challenge-menu__btn').onclick = () => {
		document.querySelector('.challenge-menu').style.display = 'none';
		document.querySelector('.challenge-wrap').hidden = false;
		startChallenge();
	}
	function manageSetting(list, item, value) {
		list.style.display = 'block';
		item.forEach((element,index) => {
			element.onclick = () => {
				list.style.display = 'none';
				value.innerText = element.innerText;
				if (list.classList.contains('challenge-unit-list')) unit = index;
				if (list.classList.contains('challenge-time-list')) {
					if (index == 0) timerValue = 5;
					if (index == 1) timerValue = 10;
					if (index == 2) timerValue = 20;
				}		
			}
		});
	}
}
settingChallenge()

function startChallenge() {
	const btnNext = document.querySelector('.btn-next');
	const unitItem = document.querySelectorAll('.unit-item');
	let wordMain = document.querySelector('.test-title');
	let wordQuestions = document.querySelectorAll('.answer__word');
	let timer = document.querySelector('.timer');
	let timerBorder = document.querySelector('.timer-wrap')
	let countNext = 0;
	let random;
	let randomMain;
	let questionArr = [];
	let result = 0;
	let timerTemp;

	showMainWord();
	document.querySelector('.unit-number').innerText = settingUnit.innerText;
	timer.innerText = timerValue;
	btnNext.disabled = true;
	runTimer();
	btnNext.onclick = () => showNext();

	wordQuestions.forEach( element => {
		element.onclick = () => {
			if (btnNext.innerText == 'Choose') {
				btnNext.disabled = false;
				btnNext.innerText = 'Next';
				clearTimeout(timerTemp);
				if (element.innerText == allWords[unit].eng[randomMain[countNext]]) {
					element.classList.add('answer-correct');
					element.classList.add('checked');
					result = result + 10;
				}
				else {
					element.classList.add('answer-incorrect');
					element.classList.add('unchecked');
				}
				if (countNext == (randomMain.length - 1)) {
					btnNext.innerText = 'Finish';
				}
			}
		}
	});

	function showNext() {
		if (btnNext.innerText != 'Finish') {
			countNext++;
			wordMain.innerText = allWords[unit].ru[randomMain[countNext]];
			clearQuestions();
			clearTimeout(timerTemp);
			showQuestion(allWords[unit].eng[randomMain[countNext]], randomMain[countNext]);
			timerBorder.style.borderColor = 'rgba(63, 63, 63, 0.5)';
			timer.innerText = timerValue;
			runTimer();
		}
		else {
			finishTest();
		}
	}

	function showMainWord() {
		randomMain = getRandomArr(questionArr, allWords[unit].eng, 10)
		
		wordMain.innerText = allWords[unit].ru[randomMain[0]];
		showQuestion(allWords[unit].eng[randomMain[0]], randomMain[0]);
	}

	function showQuestion(correct, index) {
		let randomQuestion = getRandomArr(questionArr, allWords[unit].eng, 3);
		makeorder();
		function makeorder() {
			if (randomQuestion[0] == index || randomQuestion[1] == index || randomQuestion[2] == index) {
				randomQuestion = getRandomArr(questionArr, allWords[unit].eng, 3);
				makeorder();
			}
			else {
				wordQuestions[0].innerText = allWords[unit].eng[randomQuestion[0]];
				wordQuestions[1].innerText = allWords[unit].eng[randomQuestion[1]];
				wordQuestions[2].innerText = allWords[unit].eng[randomQuestion[2]];

				getRandom(3);
				wordQuestions[random].innerText = correct;
			}
		}	
	}

	function runTimer() {
		if (timer.innerText != 0) {
			timerTemp = setTimeout(() => {
				timer.innerText = timer.innerText - 1;
				runTimer();
				let timerPart = (timerValue * 20) / 100;
				if (timer.innerText == timerPart*5) timerBorder.style.borderColor = 'rgba(63, 63, 63, 0.5)';
				else if (timer.innerText == timerPart*4) timerBorder.style.borderTopColor = '#b105ff';
				else if (timer.innerText == timerPart*3) timerBorder.style.borderRightColor = '#b105ff';
				else if (timer.innerText == timerPart*2) timerBorder.style.borderBottomColor = '#b105ff';
				else if (timer.innerText == timerPart) timerBorder.style.borderLeftColor = '#b105ff';
			}, 1000);
		}
		else {
			if (countNext != (randomMain.length - 1)) {
				showNext();
			}
			else {
				btnNext.innerText = 'Finish';
				btnNext.disabled = false;
			}
		}
	}

	function getRandomArr(newArr, mainArr, amount) {
		let tempArr = [];

		while (newArr.length < amount) {
			getRandom(mainArr.length);
			tempArr.push(random);
			newArr = Array.from(new Set(tempArr));
		}
		return newArr;
	}

	function chooseUnit() {
		unitItem.forEach((element, index) => {
			if (element.classList.contains('unit-item_chosen')) {
				return unit = index; 
			}
		})
	}
	chooseUnit();

	function getRandom(all) {
		random = Math.floor(Math.random() * all);
	}

	function clearQuestions() {
		btnNext.disabled = true;
		btnNext.innerText = 'Choose';
		wordQuestions.forEach( element => {
			element.classList.remove('answer-correct');
			element.classList.remove('checked');
			element.classList.remove('answer-incorrect');
			element.classList.remove('unchecked');
		});
	}

	function finishTest() {
		let testText;
		let baloon;
		num = Math.round(result);
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






