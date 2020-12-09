const categoryBox = document.querySelectorAll('.category');
const categoryBoxWrap = document.querySelector('.category-wrap');
const content = document.querySelector('.content');
const linkBack = document.querySelector('.header-main__link');

categoryBox.forEach(element => {
	element.onclick = () => hide(categoryBoxWrap);	
})


// Gramar

function openCategory() {
	categoryBox[0].onclick = addGramar;
	categoryBox[1].onclick = addWords;
	categoryBox[2].onclick = addText;
	categoryBox[3].onclick = addPractice;
	categoryBox[4].onclick = addListening;
	categoryBox[5].onclick = addHomework;
}

function addGramar() {
	const gramarBox = document.createElement('div');
	createCategory(content, gramarBox, 'category-item');
	if (unitAll[unitLocation - 1].gramar == ``) showEmptyState();
	
	gramarBox.innerHTML = unitAll[unitLocation - 1].gramar;

	const exampleItemMain = document.querySelectorAll('.example-item_main');
	const exampleList = document.querySelectorAll('.example-list');
	const exampleMark = document.querySelectorAll('.example-item_triangle');
	
	exampleItemMain.forEach((element, arr) => {
		element.onclick = () => {
			exampleList[arr].classList.toggle('show');
			exampleMark[arr].classList.toggle('turn-triangle');
		}
	});
}

// Words
function addWords() {
	const wordsBox = document.createElement('div');
	let count = 0;

	createCategory(content, wordsBox, 'category-item');
	if (unitAll[unitLocation - 1].words == ``) showEmptyState();

	wordsBox.innerHTML = `<button class="words-grid__btn"></button><button class="words-grid__btn grid-execist"></button><div class="words-single-wrap"><div class="words-img-wrap"><img class="words__img" src="units/${unitLocation}/img/0.jpg"></div><h2 class="main-title words__eng">${wordsAll[unitLocation - 1].wordsEng[0]}</h2><i class="words__sound">${wordsAll[unitLocation - 1].wordsSound[0]}</i><span class="words__ru">${wordsAll[unitLocation - 1].wordsRu[0]}</span><div class="words-btn-wrap"><button class="words__btn_back">Back</button><button class="words__btn_next">Next</button></div></div>`;
	
	const btnGrid = document.querySelectorAll('.words-grid__btn');
	btnGrid[1].onclick = () => {
		document.querySelector('.words-single-wrap').hidden = true;
		btnGrid[1].disabled = true;
		btnGrid[0].disabled = false;
		btnGrid[1].style.backgroundImage = 'url(img_main/grid.svg)';
		btnGrid[0].style.backgroundImage = 'url(img_main/square-inactive.svg)';

		if(btnGrid[1].classList.contains('grid-execist')) addWordsGrid();
		document.querySelector('.words-grid-wrap').style.display = 'grid';

	// Words grid
	function addWordsGrid() {
		btnGrid[1].classList.remove('grid-execist');
		const wordsBox = document.querySelector('.category-item');
		let countWords = wordsAll[unitLocation - 1].wordsEng.length;
		const wordsGridBox = document.createElement('div');
		createCategory(wordsBox, wordsGridBox, 'words-grid-wrap');
		wordsGridBox.classList.remove('category-item');
		createGridElements();

		function createGridElements() {
			for (let i = 1; i <= countWords; i++) {
				const wordsGridWrap = document.createElement('div');
				wordsGridBox.appendChild(wordsGridWrap);
				wordsGridWrap.classList.add('words-grid');

				const wordsGridImg = document.createElement('img');
				const wordsGridEng = document.createElement('h2');
				const wordsGridSound = document.createElement('i');
				const wordsGridRu = document.createElement('span');

				let index = i-1;
				createChildGrid(wordsGridWrap, wordsGridImg, 'words-grid__img');
				wordsGridImg.src = `units/${unitLocation}/img/${index}.jpg`;

				createChildGrid(wordsGridWrap, wordsGridEng, 'words-grid__eng');
				wordsGridEng.innerText = wordsAll[unitLocation - 1].wordsEng[index];
				createChildGrid(wordsGridWrap, wordsGridSound, 'words-grid__sound');
				wordsGridSound.innerText = wordsAll[unitLocation - 1].wordsSound[index];
				createChildGrid(wordsGridWrap, wordsGridRu, 'words-grid__ru');
				wordsGridRu.innerText = wordsAll[unitLocation - 1].wordsRu[index];

				function createChildGrid(parent,child,cssClass) {
					parent.appendChild(child);
					child.classList.add(cssClass);
				}
			}
		}

		btnGrid[0].onclick = () => {
			hide(wordsGridBox);
			document.querySelector('.words-single-wrap').hidden = false;
			btnGrid[0].disabled = true;
			btnGrid[1].disabled = false;
			btnGrid[0].style.backgroundImage = 'url(img_main/square.svg)';
			btnGrid[1].style.backgroundImage = 'url(img_main/grid-inactive.svg)';
		}
	}
		
	}
	// Single word
	const btnBack = document.querySelector('.words__btn_back');
	const btnNext = document.querySelector('.words__btn_next');
	let img = document.querySelector('.words__img');
	let wordEng = document.querySelector('.words__eng');
	let wordSound = document.querySelector('.words__sound');
	let wordRu = document.querySelector('.words__ru');
	btnNext.onclick = () =>  {
		count++;
		moveImg();
	}
	btnBack.onclick = () =>  {
		count--;
		moveImg();
	}

	function moveImg() {
		if(count < 0) {
			count = wordsAll[unitLocation - 1].wordsEng.length - 1;
			changeContent();
		}
		else if (count < wordsAll[unitLocation - 1].wordsEng.length) {
			changeContent();
		}
		else {
			count = 0;
			changeContent();
		}
		function changeContent() {
			img.src = `units/${unitLocation}/img/${count}.jpg`;
			wordEng.innerText = wordsAll[unitLocation - 1].wordsEng[count];
			wordSound.innerText = wordsAll[unitLocation - 1].wordsSound[count];
			wordRu.innerText = wordsAll[unitLocation - 1].wordsRu[count];
		}
	}

	img.onclick = openAllImg;
	function openAllImg() {
		let overlayWordsElement = document.createElement('div');
		createElement(content, overlayWordsElement, 'words-overlay');
		let overlayWords = document.querySelector('.words-overlay');
		let overlayWordsImgElement = document.createElement('div');

		createElement(overlayWords, overlayWordsImgElement, 'words-overlay__img');
		let overlayWordsImg = document.querySelector('.words-overlay__img');

		let imgItem;
		for (let i = 0; i < wordsAll[unitLocation - 1].wordsEng.length; i++) {
			imgItem = document.createElement('img');
			overlayWordsImg.appendChild(imgItem);
			imgItem.classList.add('words-overlay__img-item');
			imgItem.src = `units/${unitLocation}/img/${i}.jpg`
		}
		showOverlay(overlayWords, overlayWordsImg);
		document.querySelectorAll('.words-overlay__img-item').forEach((element,arr) => {
			element.onclick = () => {
				count = arr;
				moveImg();
				closeOverlay(overlayWords);
			}
		});
	}
}


// Text

function addText() {
	const textBox = document.createElement('div');
	createCategory(content, textBox, 'category-item');
	if (unitAll[unitLocation - 1].text == ``) showEmptyState();
	
	textBox.innerHTML = unitAll[unitLocation - 1].text;
}

// Practice

function addPractice() {
	const practiceBox = document.createElement('div');
	createCategory(content, practiceBox, 'category-item');
	if (unitAll[unitLocation - 1].practice == ``) showEmptyState();
	
	practiceBox.innerHTML = unitAll[unitLocation - 1].practice;
	const practiceCategory = document.querySelectorAll('.practice-category');
	const practiceWrapTemp = document.querySelector('.practice-wrap-temp');
	
	practiceCategory[0].onclick = () => {
		hide(practiceWrapTemp);
		makeTest();
	}

	practiceCategory[1].onclick = () => {
		hide(practiceWrapTemp);
		makeExercise();
	}

	let count = 0;
	let counter = document.querySelector('.count-question');

	function makeExercise() {
		const exerciseWrap = document.querySelector('.practice-exercise');
		const text = document.querySelector('.practice-exercise__text');
		const checkBtn = document.querySelector('.practice-test__btn_check');
		const nextBtn = document.querySelector('.practice-test__btn_next');
		
		let exampleLength = practiceArr[unitLocation - 1].exampleExercise.length;

		exerciseWrap.hidden = false;
		text.innerHTML = practiceArr[unitLocation - 1].exampleExercise[0];
		let counter = document.querySelector('.count-question-exercise');
		counter.innerText = `${count+1} / ${exampleLength}`;
		document.querySelector('.practice-exercise__empty').focus();
		
		window.addEventListener('keyup', function (e) {
			if (e.keyCode === 13) checkExample();
		});

		// window.addEventListener('keyup', function (e) {
		// 	if (e.keyCode === 39) showNewExample();
		// });

		checkBtn.onclick = checkExample;
		function checkExample() {
			let exerciseValue = document.querySelector('.practice-exercise__empty');
			let exerciseMark = document.querySelector('.practice-exercise__mark');
			let correctAnswer = practiceArr[unitLocation - 1].answerCorrect[count];
			exerciseMark.hidden = false;
			exerciseValue.disabled = true;
			exerciseValue.value = exerciseValue.value.toLowerCase().trim();
			document.querySelector('.practice-exercise__empty').blur();
			if (exerciseValue.value == correctAnswer) {
				exerciseMark.style.backgroundImage = 'url(img_main/checked.svg)';
				exerciseValue.classList.add('practice-exercise-correct');
			}
			else {
				exerciseMark.style.backgroundImage = 'url(img_main/unchecked.svg)';
				exerciseValue.classList.add('practice-exercise-incorrect');
			}
		}


		nextBtn.onclick = showNewExample;
		function showNewExample() {
			count++;
			document.querySelector('.practice-exercise__mark').hidden = true;
			if (count < exampleLength-1) {
				text.innerHTML = practiceArr[unitLocation - 1].exampleExercise[count];
				counter.innerText = `${count+1} / ${exampleLength}`;
				document.querySelector('.practice-exercise__empty').focus();
			}
			else if (count == exampleLength-1) {
				text.innerHTML = practiceArr[unitLocation - 1].exampleExercise[count];
				counter.innerText = `${count+1} / ${exampleLength}`;
				document.querySelector('.practice-exercise__empty').focus();
				nextBtn.innerText = 'Finish';
			}
			else {
				count = 0;
				nextBtn.innerText = 'Next';
				exerciseWrap.hidden = true;
				practiceWrapTemp.style.display = 'flex';
			}	
		}
	}

	function makeTest() {
		const testWrap = document.querySelector('.practice-test');
		const text = document.querySelector('.practice-test__text');
		const answer = document.querySelectorAll('.practice-test-item');
		const answerList = document.querySelector('.practice-test-list');
		const nextBtn = document.querySelector('.practice-test__btn');
		let exampleLength = practiceArr[unitLocation - 1].exampleTest.length;
		let answerLength = practiceArr[unitLocation - 1].answerAll.length;
		let answerCorrect;

		testWrap.hidden = false;
		text.innerHTML = practiceArr[unitLocation - 1].exampleTest[0];
		counter.innerText = `${count+1} / ${exampleLength}`;
		showNewAnswer();

		nextBtn.onclick = showNewTest;

		function showNewTest() {
			count++;
			let newText = practiceArr[unitLocation - 1].exampleTest[count];
			makeDefaultAnswers();
			answerList.classList.remove('practice-test__chosen');

			if (count < exampleLength-1) {
				text.innerHTML = newText;
				counter.innerText = `${count+1} / ${exampleLength}`;
				showNewAnswer();
			}
			else if (count == exampleLength-1) {
				text.innerHTML = newText;
				counter.innerText = `${count+1} / ${exampleLength}`;
				showNewAnswer();
				nextBtn.innerText = 'Finish';
			}
			else {
				count = 0;
				nextBtn.innerText = 'Next';
				testWrap.hidden = true;
				practiceWrapTemp.style.display = 'flex';
			}
		}

		function showNewAnswer() {
			let answerAllArr = practiceArr[unitLocation - 1].answerAll;
			answerCorrect = practiceArr[unitLocation - 1].answerCorrect[count];
			chooseUnique();
			function chooseUnique() {
				answer[0].innerText = answerAllArr[getRandom(answerAllArr.length)];
				answer[1].innerText = answerAllArr[getRandom(answerAllArr.length)];
				answer[2].innerText = answerAllArr[getRandom(answerAllArr.length)];
				answer[getRandom(2)].innerText = answerCorrect;					

				if (answer[0].innerText == answer[1].innerText || answer[0].innerText == answer[2].innerText || answer[1].innerText == answer[2].innerText) chooseUnique();
				else return;
			}	
		}

		answer.forEach(element => {
			element.onclick = () => {
				
				if (!answerList.classList.contains('practice-test__chosen')) {
					if (element.innerText == answerCorrect) {
						element.style.backgroundImage = 'url(img_main/checked.svg)';
						element.style.color = '#45b537';
						answerList.classList.add('practice-test__chosen');
					}
					else {
						element.style.backgroundImage = 'url(img_main/unchecked.svg)';
						element.style.color = '#fb4949';
						answerList.classList.add('practice-test__chosen');
					}
				}
				else return;
			}
		});

		function makeDefaultAnswers() {
			answer.forEach(element => {
				element.style.backgroundImage = 'url(img_main/radio-off.svg)';
				element.style.color = 'inherit';
			});
		}
		
		function getRandom(length) {
			let element = Math.floor(Math.random() * length);
			return element;
		}
	}
}     


// Listening 
function addListening() {
	const listeningBox = document.createElement('div');
	createCategory(content, listeningBox, 'category-item');
	if (unitAll[unitLocation - 1].listening == ``) showEmptyState();

	listeningBox.innerHTML = unitAll[unitLocation - 1].listening;


	const audioPlayer = document.querySelector('.audio-player');
	const play = document.querySelector('.listening__play');
	const volume = document.querySelector('.listening__volume');
	const progressBar = document.querySelector('.listening__progress');
	const playerText = document.querySelector('.listening__text');
	const trackTitle = document.querySelector('.track-list_header');
	const trackList = document.querySelector('.track-list__item-wrap');
	const trackItem = document.querySelectorAll('.track-list__item');

	let dialogue = document.querySelector('.dialogue');
	let duration = document.querySelector('.listening__duration');
	let currentTimeTrack = document.querySelector('.listening__current-time');


	audioPlayer.src = `units/${unitLocation}/audio/0.mp3`;
	volume.value = 100;
	currentTimeTrack.innerText = '0:00';
	setTimeout(() => {stateTime();}, 500);
	
	audioPlayer.ontimeupdate = showProgress;
	progressBar.onclick = changeProgress;

	play.addEventListener('click', () => {
		if(play.innerText == 'Play') playTrack();
		else pauseTrack();
	});

	function playTrack() {
		audioPlayer.play();
		play.innerText = 'Pause';
	}

	function pauseTrack() {
		audioPlayer.pause();
		play.innerText = 'Play';
	}

	volume.oninput = () => {
		let level = volume.value;
		audioPlayer.volume = level / 100;
	}

	function showProgress() {
		let duration = audioPlayer.duration;
		let current = audioPlayer.currentTime;
		progressBar.value = (current/duration) * 100;

		let convertCurrent = Math.round(+audioPlayer.currentTime);
		let minute = 0;
		let second = convertCurrent;

		changeTime();

		function changeTime() {
			if(second > 9 && second < 60) currentTimeTrack.innerText = `${minute}:${second}`;
			else if (second >= 60) {
				minute = Math.floor(convertCurrent / 60);
				second = convertCurrent - (minute * 60);
				currentTimeTrack.innerText = `${minute}:0${second}`;
				changeTime()
			}
			else currentTimeTrack.innerText = `${minute}:0${second}`;
		}
	}

	function stateTime() {
		let convertDuration = Math.floor(+audioPlayer.duration);
		let minute = Math.floor(convertDuration / 60);
		let second = convertDuration - (minute * 60) + 1;

		if (isNaN(minute) || isNaN(second)) duration.innerText = '';
		else if (convertDuration < 9) duration.innerText = `/ ${minute}:0${second}`;
		else duration.innerText = `/ ${minute}:${second}`;
	}
	
	function changeProgress() {
		let widthTrack = progressBar.offsetWidth;
		let checkedWidth = event.offsetX;
		progressBar.value = (checkedWidth / widthTrack) * 100;
		audioPlayer.pause();
		play.innerText = 'Pause';
		audioPlayer.currentTime = audioPlayer.duration * (checkedWidth / widthTrack);
		audioPlayer.play();
	}
//HIDE-SHOW TEXT
	playerText.onclick = () => {
		let img = document.querySelector('.dialogue > img');
		if (img.hidden == false) {
			img.hidden = true;
			playerText.innerText = 'Show Text';
			dialogue.classList.add('player-bg');
		}
		else if (img.hidden == true) {
			img.hidden = false;
			playerText.innerText = 'Hide Text';
			dialogue.classList.remove('player-bg');
		}
	}
}


// Homework
function addHomework() {
	const homeworkBox = document.createElement('div');
	createCategory(content, homeworkBox, 'category-item');
	if (unitAll[unitLocation - 1].homework == ``) showEmptyState();
	
	homeworkBox.innerHTML = unitAll[unitLocation - 1].homework;
}


// showEmptyState();
function showEmptyState() {
	
	const overlayEmpty = document.createElement('div');
	createCategory(content, overlayEmpty, 'overlay-empty');
	categoryBoxWrap.style.display = 'grid';
	linkBack.hidden = true;
	overlayEmpty.innerHTML = emptyState;

	const overlay = document.querySelector('.empty-overlay');
	const modal = document.querySelector('.empty-overlay-modal');
	const btn = document.querySelector('.empty-overlay__btn');

	showOverlay(overlay, modal);
	btn.onclick = () => closeOverlay(overlay);
}


openCategory();

linkBack.onclick = returnToCategory;
function returnToCategory() {
	document.querySelectorAll('.category-item').forEach(element => {
		element.remove();
	});
	categoryBoxWrap.style.display = 'grid';
	linkBack.hidden = true;
}

function showBack() {
	linkBack.hidden = false;
}

function hideAllCategories() {
	hide(categoryBoxWrap);
}

function createCategory(parent, child, cssClass) {
	showBack();
	hideAllCategories();
	parent.appendChild(child);
	child.classList.add('category-item');
	child.classList.add(cssClass);

}


function createElement(parent, child, cssClass) {
	parent.appendChild(child);
	child.classList.add(cssClass);
}

function createFewElements(element, parent, child, cssClass, count) {
	for (let i = 1; i <= count; i++) {
		child = document.createElement(element);
		parent.appendChild(child);
		child.classList.add(cssClass);
	}
}

function hide(element) {
	element.style.display = 'none';
}
function show(element) {
	element.style.display = 'block';
}


// Overlay
function showOverlay(overlay, modal) {
	overlay.classList.remove('overlay-close');
	overlay.classList.add('overlay-show');
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
		overlay.remove();
	}, 500);
}