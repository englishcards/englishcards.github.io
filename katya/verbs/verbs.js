const verbsExample = document.querySelector('.verbs__example');
const verbsInput = document.querySelectorAll('.verbs__input');
const verbsSign = document.querySelectorAll('.verbs-answer__sign');
const verbsCorrect = document.querySelectorAll('.verbs-answer__correct');
const verbsBtn = document.querySelectorAll('.verbs__btn');

let randomValue;
showNewVerbs();

verbsBtn[0].onclick = checkTotal;
function checkTotal() {
	checkVerbs(0,verbs.firstForm[randomValue]);
	checkVerbs(1,verbs.secondForm[randomValue]);
	checkVerbs(2,verbs.thirdForm[randomValue]);
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
	randomValue = getRandom();
	defaultAnswer(0);
	defaultAnswer(1);
	defaultAnswer(2);
	verbsExample.innerText = verbs.verbsRu[randomValue];
}

function defaultAnswer(index) {
	verbsSign[index].hidden = true;
	verbsCorrect[index].style.display = 'none';
	verbsInput[index].value = '';
	verbsInput[index].disabled = false;
}

function getRandom() {
	let random = Math.floor(Math.random() * verbs.verbsRu.length);
	return random;
}
