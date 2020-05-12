const wordRu = document.querySelectorAll('.word__title_ru');
const wordEng = document.querySelectorAll('.word__title_eng');
const wordVoice = document.querySelectorAll('.word__voice');

const wordWrap = document.querySelectorAll('.word-wrap');
const wordSection = document.querySelectorAll('.word-section');


function openWord(arr, elem) {
	for(let number in arr) {
		wordRu[elem].style.display = 'block';
		arr[elem].classList.toggle('hidden');
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

			wordSection[count].nextElementSibling.style.display = 'block';
			wordSection[count].style.display = 'none';

			count++;
			
			if (count > last) {
				wordSection[0].style.display = 'block';
				count = 0;
			}
		}
	}
}
		
				

changeSection();