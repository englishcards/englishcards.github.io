const boxEngRu = document.querySelector('.box-eng');
const boxRuEng = document.querySelector('.box-ru');
const boxTest = document.querySelector('.box-test');
const boxWriting = document.querySelector('.box-writing');
const boxListening = document.querySelector('.box-listening');

const wordImg = document.querySelectorAll('.img-wrap');
const wordRu = document.querySelectorAll('.word__title_ru');
const wordEng = document.querySelectorAll('.word__title_eng');
const wordVoice = document.querySelectorAll('.word__voice');
const audioBtn = document.querySelectorAll('.audio__btn');
const wordWrap = document.querySelectorAll('.word-wrap');
const listeningWrap = document.querySelector('.listening-section');

const writingInput = document.querySelectorAll('.writing__input');
const writingBtn = document.querySelectorAll('.writing__btn');
const writingWrap = document.querySelectorAll('.writing-wrap');


const testWord = document.querySelectorAll('.answer__word');
const testWrap = document.querySelectorAll('.test-wrap');


const wordSection = document.querySelectorAll('.word-section');
let currentVar = 0;

function openArr(arr) {
	for(let number in arr) {
		arr[number].style.display = 'block';
	}
}

function openArrRu(arr) {
	for(let number in arr) {
		arr[number].classList.add('block-important');
	}
}

function openAllboxes() {
	boxEngRu.style.display = 'none';
	boxRuEng.style.display = 'none';
	boxTest.style.display = 'none';
	boxWriting.style.display = 'none';
	boxListening.style.display = 'none';
	document.querySelector('.word').style.display = 'block';
	changeSection();
}

boxEngRu.onclick = () => {
	currentVar = 2;
	openAllboxes();
	openArrRu(document.querySelectorAll('.word__title_eng'));
}

boxRuEng.onclick = () => {
	currentVar = 1;
	openAllboxes();
}

boxTest.onclick = () => {
	openAllboxes();
	openArr(testWrap);
	closeArr(wordWrap);
}

boxWriting.onclick = () => {
	openAllboxes();
	openArr(writingWrap);
}

boxListening.onclick = () => {
	openAllboxes();
	document.querySelector('.word').style.display = 'none';
	listeningWrap.style.display = 'block';
	openListening();	
}

function openWordEng(arr, elem) {
	if(currentVar === 1) {
		for(let number in arr) {
			wordRu[elem].style.display = 'none';
			wordEng[elem].style.display = 'block';
			arr[elem].classList.toggle('hidden');
		}
	}
	else if(currentVar === 2) {
		for(let number in arr) {
			wordRu[elem].style.display = 'block';
			wordEng[elem].style.display = 'block';
			arr[elem].classList.toggle('hidden');
		}
	}
}

function changeSection() {
	for(let i = 0; wordSection.length > i; i++) {
		let count = 0;

		if(currentVar === 1 || currentVar === 2) {
			wordSection[i].style.cursor = 'pointer';
		}
		else {
			wordSection[i].style.cursor = 'default';
		}

		wordSection[i].onclick = function() {
			if(currentVar === 1 || currentVar === 2) {
				openWordEng(wordRu, i);
				openWordEng(wordEng, i);
				openWordEng(wordVoice, i);
				openWordEng(wordWrap, i);
			}
	  	}

		document.querySelector('.word__btn_right').onclick = () =>  {
			let last = wordSection.length - 1;
			let previous = count;
			
			wordSection[count].nextElementSibling.style.display = 'block';
			wordSection[count].style.display = 'none';

			count++;

			if (count > last) {
				wordSection[0].style.display = 'block';
				count = 0;
			}
		}

		document.querySelector('.word__btn_left').onclick = () =>  {
			let last = wordSection.length - 1;
			let previous = count;
			wordSection[count].style.display = 'none';

			changeRandom();

			function changeRandom() {
				count = makeRandomInt(0, last);

				if(count == previous) {
					count = makeRandomInt(0, last);
					changeRandom();
				}
				else {
					wordSection[count].style.display = 'block';
				}	
			}
		}
		
		function passTest() {
			for(let number in testWord) {
				testWord[number].onclick = () => {
					let choice = testWord[number].innerText;
					let answer = wordEng[count].innerText;
					if(choice === answer) {
						testWord[number].style.backgroundImage = 'checked';
						testWord[number].classList.add('checked');
						testWord[number].style.color = '#36b536';
						wordRu[count].innerText = wordEng[count].innerText;
					}
					else {
						testWord[number].style.backgroundImage = 'unchecked';
						testWord[number].classList.add('unchecked');
						testWord[number].style.color = '#ff4a4a';
						wordRu[count].innerText = wordEng[count].innerText;
					}		
				}					
			}	
		}

		function fillInput() {
			for(let number in writingBtn) {
				writingBtn[number].onclick = checkInput;
				window.addEventListener('keyup', function (e) {
					e.preventDefault();
					if (e.keyCode === 13) {
					    checkInput();
					  }
				});

				function checkInput() {
					let input = writingInput[count].value.toLowerCase();
					let answer = wordEng[count].innerText.toLowerCase();

					if(input == answer) {
						writingBtn[count].classList.add('checked');
						writingInput[count].style.color = '#36b536';
						writingInput[count].readOnly = true;
						wordRu[count].innerText = answer;
						wordRu[count].style.textTransform = 'capitalize';
						writingInput[count].style.borderColor = '#b105ff';
					}
					else if (input == "") {
						writingInput[count].style.borderColor = '#ff4a4a';
					}
					else {
						writingBtn[count].classList.add('unchecked');
						writingInput[count].style.color = '#ff4a4a';
						writingInput[count].readOnly = true;
						wordRu[count].innerText = answer;
						wordRu[count].style.textTransform = 'capitalize';
						writingInput[count].style.borderColor = '#b105ff';
					}
				}
			}
		}		
	}
fillInput();
passTest();
}
		
function makeRandomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  let counter =  Math.round(rand);
  if (counter == -0) {
  	counter = 0;
  }
  return counter;
}

function listenAudio() {
	openArr();
	function openArr() {
		for(let number in audioBtn) {
		const audio = new Audio('audio/'+number+'.mp3');
		audio.loop = false;
		audio.volume = 1;
			audioBtn[number].addEventListener('click', function (e) {
				e.stopPropagation();
			    audio.play();
			});
		}
	}	
}
listenAudio();

function openListening() {
	const dialogueArr = [
		['Unit 1 -12'],
		['Unit-1', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		`<img src="audio/tracks/3.jpg">`,
		],
		['Unit-2', 
		`<img src="audio/tracks/1.jpg">`,
		],
		['Unit-3', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		`<img src="audio/tracks/3.jpg">`,
		],
		['Unit-4', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		],
		['Unit-5', 
		`<img src="audio/tracks/1.jpg">`,
		],
		['Unit-6', 
		`<img src="audio/tracks/1.jpg">`,
		],
		['Unit-7', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		`<img src="audio/tracks/3.jpg">`,
		],
		['Unit-8', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		],
		['Unit-9', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		],
		['Unit-10', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		],
		['Unit-11', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		],
		['Unit-12', 
		`<img src="audio/tracks/1.jpg">`, 
		`<img src="audio/tracks/2.jpg">`,
		],
	]; 
	const audioPlayer = document.querySelector('.audio-player');
	const play = document.querySelector('.listening__play');
	const volume = document.querySelector('.listening__volume');
	const progressBar = document.querySelector('.listening__progress');
	const playerText = document.querySelector('.listening__text');
	const trackTitle = document.querySelector('.track-list_header');
	const trackList = document.querySelector('.track-list__item-wrap');
	const trackItem = document.querySelectorAll('.track-list__item');
	const playerBg = document.querySelector('.listening-section');

	let unitNumber = document.querySelector('title').innerText;
	let titleTenth = unitNumber[unitNumber.length -2];
	unitNumber = unitNumber[unitNumber.length -1];
	let dialogue = document.querySelector('.dialogue');
	let duration = document.querySelector('.listening__duration');
	let currentTimeTrack = document.querySelector('.listening__current-time');

	if (unitNumber == 0) {
		unitNumber = `${titleTenth}0`;
	}

	dialogue.innerHTML = dialogueArr[unitNumber][1];
	audioPlayer.src = `audio/tracks/1.mp3`;
	volume.value = 100;
	currentTimeTrack.innerText = '0:00';
	setTimeout(() => {
		stateTime();
	}, 500);
	
	audioPlayer.ontimeupdate = showProgress;
	progressBar.onclick = changeProgress;

	play.addEventListener('click', () => {
		if(play.innerText == 'Play') {
			playTrack();
		}
		else {
			pauseTrack();
		}
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
			if(second > 9 && second < 60) {
				currentTimeTrack.innerText = `${minute}:${second}`;
			}
			else if (second >= 60) {
				minute = Math.floor(convertCurrent / 60);
				second = convertCurrent - (minute * 60);
				currentTimeTrack.innerText = `${minute}:0${second}`;
				changeTime()
			}
			else {
				currentTimeTrack.innerText = `${minute}:0${second}`;
			}
		}
	}

	function stateTime() {
		let convertDuration = Math.floor(+audioPlayer.duration);
		let minute = Math.floor(convertDuration / 60);
		let second = convertDuration - (minute * 60) + 1;

		if (isNaN(minute) || isNaN(second)) {
			duration.innerText = '';
		}
		else if (convertDuration < 9) {
			duration.innerText = `/ ${minute}:0${second}`;
		}
		else {
			duration.innerText = `/ ${minute}:${second}`;
		}
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
		if (dialogue.hidden == false) {
			dialogue.hidden = true;
			playerText.innerText = 'Show Text';
			playerBg.classList.add('player-bg');
		}
		else if (dialogue.hidden == true) {
			dialogue.hidden = false;
			playerText.innerText = 'Hide Text';
			playerBg.classList.remove('player-bg');
		}
	}

//CHOOSE A TRACK
	trackTitle.onclick = () => { 
		trackList.hidden = false;
		audioPlayer.pause();
		audioPlayer.currentTime = 0;
		progressBar.value = 0;
		play.innerText = 'Play';
		dialogue.hidden = true;
		playerBg.classList.add('player-bg');

		trackItem.forEach((element, arr) => {
			element.onclick = () => {
				let trackNumber = arr + 1;

				dialogue.hidden = false;
				playerBg.classList.remove('player-bg');
				trackList.hidden = true;
				trackTitle.innerText = `Track-${trackNumber}`;
				audioPlayer.src = `audio/tracks/${trackNumber}.mp3`;
				dialogue.innerHTML = dialogueArr[unitNumber][trackNumber];
				currentTimeTrack.innerText = '0:00';
				
				setTimeout(() => {
					stateTime();
				}, 500);
			}
		});
	}
}





