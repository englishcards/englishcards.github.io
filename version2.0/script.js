const collection = document.querySelector('.collection');
const setItem = document.querySelectorAll('.collection__item');
const menu = document.querySelector('.type');
const menuItem = document.querySelectorAll('.type__item');
const wordSection = document.querySelector('.word-section');
const writingSection = document.querySelector('.writing-wrap');
const linkBack = document.querySelector('.header__link');
const btnSection = document.querySelector('.btn-wrap');
const btnNext = document.querySelector('.word__btn_right');
const btnBack = document.querySelector('.word__btn_left');
const btnWriting = document.querySelector('.writing__btn');
const input = document.querySelector('.writing__input');
const sectionEnd = document.querySelector('.section-end');

let indexArr;
let countWord = 0;
let img = document.querySelector('.word__img');
let mainWord = document.querySelector('.word__title_ru');
let secondaryWord = document.querySelector('.word__title_eng');
let transcription = document.querySelector('.word__voice');
let example = document.querySelector('.word__example');

setItem.forEach((element, index) => {
	element.onclick = () => {
		hide(collection);
		show(linkBack);
		show(menu);
		indexArr = index;
	}
})

menuItem[0].onclick = () => {
	openMenu(wordSection);
	mainWord.classList.add('main-eng');
	makeMainEng();	
}	
menuItem[1].onclick = () => openMenu(wordSection);
menuItem[2].onclick = () => openMenu(writingSection);
btnNext.onclick = changeWordForward;
btnBack.onclick = changeWordBack;
btnWriting.onclick = checkWriting;

function openMenu(section) {
	hide(menu);
	hide(secondaryWord);
	hide(transcription);
	hide(example);
	hide(writingSection);
	show(section);

	showWord();
	btnSection.style.display = 'flex';
	getArrow();

	if(section == writingSection) {
		show(wordSection);
		defaultWriting();
		getWritingEnter();
	}

	if(section == wordSection) toggleAnswer();
}

function showWord() { 	
	mainWord.innerText = allWords[indexArr].ru[countWord];
	secondaryWord.innerText = allWords[indexArr].eng[countWord];
	transcription.innerText = allWords[indexArr].tr[countWord];
	example.innerHTML = allWords[indexArr].ex[countWord];
	img.src = `img/${indexArr}/${countWord}.jpg`;
	
	if (mainWord.classList.contains('main-eng')) makeMainEng();	
}

function changeWordForward() {
	defaultWriting();
	countWord++;
	show(wordSection);
	hide(sectionEnd);
	showWord();

	if (countWord == allWords[indexArr].ru.length) {
		hide(wordSection);
		show(sectionEnd);
		countWord = -1;
	}
}

function changeWordBack() {
	if (countWord == 0 || countWord == -1) countWord = allWords[indexArr].ru.length;
	countWord--;
	showWord();
	show(wordSection);
	hide(sectionEnd);
}

function checkWriting() {
	let tempWord = secondaryWord.innerText.toLowerCase();
	input.disabled = true;
	if (input.value.toLowerCase() == tempWord) showCorrectWriting();
	else showWrongWriting();
}

function toggleAnswer() {
	img.onclick = () => {
		secondaryWord.classList.toggle('show');
		transcription.classList.toggle('show');
		example.classList.toggle('show');
	}
}
function makeMainEng() {
	mainWord.innerText = allWords[indexArr].eng[countWord];
	secondaryWord.innerText = allWords[indexArr].ru[countWord];
}

function showCorrectWriting() {
	input.classList.add('answer-correct');
	btnWriting.style.backgroundImage = 'url(../elementary/img_main/checked.svg)';
}
function showWrongWriting() {
	input.classList.add('answer-incorrect');
	btnWriting.style.backgroundImage = 'url(../elementary/img_main/unchecked.svg)';
}

function defaultWriting() {
	input.disabled = false;
	input.focus();
	input.value = '';
	input.classList.remove('answer-correct');
	input.classList.remove('answer-incorrect');
	btnWriting.style.backgroundImage = 'url(../elementary/img_main/arrow-input.svg)';
}

function hide(element) {
	element.style.display = 'none';
}
function show(element) {
	element.style.display = 'block';
}

function getWritingEnter() {
	document.addEventListener('keydown', function(event) {
		if (event.code == 'Enter') checkWriting();
   	});
}

function getArrow() {
	document.addEventListener('keydown', function(event) {
	   	if (event.code == 'ArrowRight') changeWordForward();
	   	if (event.code == 'ArrowLeft') 	changeWordBack();
   	});
}
	
