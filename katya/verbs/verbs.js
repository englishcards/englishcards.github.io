const verbsExample = document.querySelector('.verbs__example');
const verbsInput = document.querySelectorAll('.verbs__input');
const verbsSign = document.querySelectorAll('.verbs-answer__sign');
const verbsCorrect = document.querySelectorAll('.verbs-answer__correct');
const verbsBtn = document.querySelectorAll('.verbs__btn');
const verbsCount = document.querySelector('.verbs__count');
const verbsFilterMain = document.querySelector('.verbs__filter');
const verbsFilterBtn = document.querySelector('.filter-verbs__btn');
const verbsRandom = document.querySelector('.verbs__random');

let count = -1;
makeExample();
showNewVerbs();

const overlay = document.querySelector('.overlay-verbs');
const modal = document.querySelector('.modal-verbs');
verbsFilterMain.onclick = () => showOverlay(overlay, modal);

document.querySelector('.filter-verbs__btn_cancel').onclick = () => closeOverlay(overlay);
verbsFilterBtn.onclick = () => {
	closeOverlay(overlay);
	makeExample();
} 
function makeExample() {
	const verbsCheckbox = document.querySelectorAll('.verbs__checkbox');

	verbs = {verbsRu: [],firstForm: [],secondForm: [],thirdForm: [],}

	verbsCheckbox.forEach(element => {
		element.onchange = () => {
			if (!verbsCheckbox[0].checked && !verbsCheckbox[1].checked) verbsFilterBtn.disabled = true;
			else verbsFilterBtn.disabled = false;
		}
	});

	if (verbsCheckbox[0].checked && !verbsCheckbox[1].checked) {
		verbs.verbsRu = verbs.verbsRu.concat(verbsGroup[0].verbsRu);
		verbs.firstForm = verbs.firstForm.concat(verbsGroup[0].firstForm);
		verbs.secondForm = verbs.secondForm.concat(verbsGroup[0].secondForm);
		verbs.thirdForm = verbs.thirdForm.concat(verbsGroup[0].thirdForm);
	}
	else if (!verbsCheckbox[0].checked && verbsCheckbox[1].checked) {
		verbs.verbsRu = verbs.verbsRu.concat(verbsGroup[1].verbsRu);
		verbs.firstForm = verbs.firstForm.concat(verbsGroup[1].firstForm);
		verbs.secondForm = verbs.secondForm.concat(verbsGroup[1].secondForm);
		verbs.thirdForm = verbs.thirdForm.concat(verbsGroup[1].thirdForm);
	}
	else {
		verbs.verbsRu = verbs.verbsRu.concat(verbsGroup[0].verbsRu,verbsGroup[1].verbsRu);
		verbs.firstForm = verbs.firstForm.concat(verbsGroup[0].firstForm,verbsGroup[1].firstForm);
		verbs.secondForm = verbs.secondForm.concat(verbsGroup[0].secondForm,verbsGroup[1].secondForm);
		verbs.thirdForm = verbs.thirdForm.concat(verbsGroup[0].thirdForm,verbsGroup[1].thirdForm);
	}
	count = -1;
	showNewVerbs();
	
}

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


// Overlay
function showOverlay(overlay, modal) {
	overlay.classList.remove('overlay-close');
	overlay.classList.add('overlay-show');
	overlay.style.display = 'block';
	modal.onclick = (e) => e.stopPropagation();
	overlay.onclick = () => closeOverlay(overlay);

	window.addEventListener('keyup', function (e) {
		e.preventDefault();
		if (e.keyCode === 27) closeOverlay(overlay);
	});
}

function closeOverlay(overlay) {
	event.preventDefault();
	overlay.classList.add('overlay-close');
	setTimeout(() => {
		overlay.style.display = 'none';
	}, 500);
}