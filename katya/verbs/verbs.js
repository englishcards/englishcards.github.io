const verbsExample = document.querySelector('.verbs__example');
const verbsInput = document.querySelectorAll('.verbs__input');
const verbsSign = document.querySelectorAll('.verbs-answer__sign');
const verbsCorrect = document.querySelectorAll('.verbs-answer__correct');
const verbsBtn = document.querySelectorAll('.verbs__btn');
const verbsCount = document.querySelector('.verbs__count');
const verbsRandom = document.querySelector('.verbs__random');

let count = -1;
showNewVerbs();

verbsBtn[0].onclick = checkTotal;
function checkTotal() {
	checkVerbs(0,verbs.firstForm[count]);
	checkVerbs(1,verbs.secondForm[count]);
	checkVerbs(2,verbs.thirdForm[count]);
}
function checkVerbs(index, form) {
	verbsSign[index].hidden = false;
	verbsCorrect[index].style.display = 'block';
	verbsCorrect[index].innerText = form;
	verbsInput[index].disabled = true;
	verbsInput[index].value = verbsInput[index].value.trim().toLowerCase();

	if(verbsInput[index].value == form) verbsSign[index].style.backgroundImage = 'url(../img_main/checked.svg)';
	else verbsSign[index].style.backgroundImage = 'url(../img_main/unchecked.svg)';
}

verbsBtn[1].onclick = showNewVerbs;
function showNewVerbs() {
	if (count == verbs.verbsRu.length - 1) count = -1;

	if (verbsRandom.classList.contains('random-unchecked')) count++;
	else count = getRandom();
	
	verbsCount.innerText = `${count+1} / ${verbs.verbsRu.length}`;
	defaultAnswer(0);
	defaultAnswer(1);
	defaultAnswer(2);
	verbsExample.innerText = verbs.verbsRu[count];
}

function defaultAnswer(index) {
	verbsSign[index].hidden = true;
	verbsCorrect[index].style.display = 'none';
	verbsInput[index].value = '';
	verbsInput[index].disabled = false;
}

verbsRandom.onclick = checkRandom;
function checkRandom() {
	if (verbsRandom.classList.contains('random-unchecked')) {
		verbsRandom.classList.remove('random-unchecked');
		verbsRandom.style.color = '#b105ff';
		count = getRandom();
		showNewVerbs();
	}
	else {
		verbsRandom.classList.add('random-unchecked');
		verbsRandom.style.color = '#3f3f3f';
		count = -1;
		showNewVerbs();
	}
	
}

function getRandom() {
	let random = Math.floor(Math.random() * verbs.verbsRu.length);
	return random;
}
