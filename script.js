const boxEngRu = document.querySelector('.box-eng');
const boxRuEng = document.querySelector('.box-ru');
const boxTest = document.querySelector('.box-test');
const boxWriting = document.querySelector('.box-writing');

const wordImg = document.querySelectorAll('.img-wrap');
const wordRu = document.querySelectorAll('.word__title_ru');
const wordEng = document.querySelectorAll('.word__title_eng');
const wordVoice = document.querySelectorAll('.word__voice');
const wordWrap = document.querySelectorAll('.word-wrap');

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

		if(currentVar === 1) {
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

	let roarElephant = document.querySelector('.header').onclick = soundElephant;
	function soundElephant() {
	let audio = new Audio();
	audio.src = 'cock.mp3' 
	audio.type = 'audio/mpeg';
	audio.autoplay = true;
	audio.volume = 0.8;
}
