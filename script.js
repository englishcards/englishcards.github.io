const wordRu = document.querySelectorAll('.word__title_ru');
const wordEng = document.querySelectorAll('.word__title_eng');
const wordVoice = document.querySelectorAll('.word__voice');
const wordWrap = document.querySelectorAll('.word-wrap');

const writingInput = document.querySelectorAll('.writing__input');
const writingBtn = document.querySelectorAll('.writing__btn');
const writingWrap = document.querySelectorAll('.writing-wrap');

const wordSection = document.querySelectorAll('.word-section');


function openWord(arr, elem) {
	for(let number in arr) {
		wordRu[elem].style.display = 'block';
		arr[elem].classList.toggle('hidden');

		if (wordWrap[elem].style.display = 'none') {
			wordVoice[elem].style.display = 'none';
			wordEng[elem].style.display = 'none';
		}
	}
}

function changeSection() {
	for(let i = 0; wordSection.length > i; i++) {
		let count = 0;

		wordSection[i].onclick = function() {
			openWord(wordRu, i);
			openWord(wordEng, i);
			openWord(wordVoice, i);
			openWord(wordWrap, i);
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

		function checkInput() {
			for(let number in writingBtn) {
				writingBtn[number].onclick = () => {
					let input = writingInput[count].value.toLowerCase();
					let answer = wordEng[count].innerText.toLowerCase();

					if(input == answer) {
						writingBtn[count].classList.add('checked');
						writingInput[count].style.color = '#36b536';
						writingInput[count].readOnly = true;
						wordRu[count].innerText = answer;
						wordRu[count].style.textTransform = 'capitalize';
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
					}
				}
			}
		}		
	}

checkInput();	
}
		

function makeRandomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  let counter =  Math.round(rand);
  if (counter == -0) {
  	counter = 0;
  }
  return counter;
}



changeSection();