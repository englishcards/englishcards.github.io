const buttonNext = document.querySelector('.quick-eng__btn');
const engDisplay = document.querySelector('.switch__lang_eng');
const ruDisplay = document.querySelector('.switch__lang_ru');
const unitDisplay = document.querySelector('.set-item_chosen');
const unitList = document.querySelector('.set-list');
const unitItem = document.querySelectorAll('.set-item');
const random = document.querySelector('.switch__random');

let wordMain = document.querySelector('.quick-title');
let wordAnswer = document.querySelector('.quick-translation');
let counterDisplay = document.querySelector('.counter');
let counterAllDisplay = document.querySelector('.counter-all');
let unitNumber = 0;

let	mainDefaultEng = allWords[unitNumber].eng[0];
let	mainDefaultRu = allWords[unitNumber].ru[0];

let allArrEng = [];
let allArrRu = [];

showDefault();

buttonNext.onclick = () => {
	if (unitDisplay.innerText == 'All') {
		changeWord(allArrEng,allArrRu);
	}
	else {
		changeWord(allWords[unitNumber].eng, allWords[unitNumber].ru);
	}	
}	
wordMain.onclick = () => wordAnswer.classList.toggle('show');
unitDisplay.onclick = () => chooseUnit();

function changeWord(mainLang,secondLang) {
	let randomValue = Math.floor(Math.random() * mainLang.length);
	
	if (random.classList.contains('set-item_chosen')) {
		count = randomValue;
	}
	else {
		count++;
	}

	counterDisplay.innerText = count + 1;

	if (engDisplay.classList.contains('switch__lang_active')) {
		wordMain.innerText = mainLang[count];
		wordAnswer.innerText = secondLang[count];
	}
	else {
		wordMain.innerText = secondLang[count];
		wordAnswer.innerText = mainLang[count];
	}
	
	if (count == (mainLang.length - 1) ) {
		count = -1;
	}
}

function chooseUnit() {
	unitList.style.display = 'block';
}

unitItem.forEach( (element, arr) => {
	element.onclick = () => {
		unitDisplay.innerText = element.innerText;
		if (element.classList.contains('set-item_all') ) {
			chooseAll();
		}
		else {
			changeUnit(arr);
		}
	}	
});

function changeUnit(unit) {
	unitList.style.display = 'none';
	showDefault();
	unitNumber = unit;
	counterAllDisplay.innerText = allWords[unitNumber].eng.length;
	
	wordMain.innerText = allWords[unitNumber].eng[count];
	wordAnswer.innerText = allWords[unitNumber].ru[count];
	mainDefaultEng = allWords[unitNumber].eng[0];
	mainDefaultRu = allWords[unitNumber].ru[0];
}

function showDefault() {
	count = 0;
	wordMain.innerText = allWords[0].eng[0];
	wordAnswer.innerText = allWords[0].ru[0];

	counterDisplay.innerText = count + 1;
	counterAllDisplay.innerText = allWords[0].eng.length;

	ruDisplay.classList.remove('switch__lang_active');
	engDisplay.classList.remove('switch__lang_inactive');
	ruDisplay.classList.add('switch__lang_inactive');
	engDisplay.classList.add('switch__lang_active');
}

function changeLang(main, hidden, langMain, langHidden) {
	count = 0;
	wordMain.innerText = main;
	wordAnswer.innerText = hidden;
	counterDisplay.innerText = count + 1;

	langHidden.classList.remove('switch__lang_active');
	langMain.classList.remove('switch__lang_inactive');
	langMain.classList.add('switch__lang_active');
	langHidden.classList.add('switch__lang_inactive');
}

ruDisplay.onclick = () => changeLang(mainDefaultRu, mainDefaultEng, ruDisplay, engDisplay);
engDisplay.onclick = () => changeLang(mainDefaultEng, mainDefaultRu, engDisplay, ruDisplay);


function createArrAll() {
	for (let i = 0; i < allWords.length; i++) {
		for (let j = 0; j < allWords[i].eng.length; j++) {
			allArrEng.push(allWords[i].eng[j]);
			allArrRu.push(allWords[i].ru[j]);
		}
	}
}
function chooseAll() {
	unitList.style.display = 'none';
	showDefault();
	counterAllDisplay.innerText = allArrEng.length;
}
createArrAll();

random.onclick = () => random.classList.toggle('set-item_chosen');