const result = document.querySelectorAll('.statistics__table td>div');
const medal = document.querySelectorAll('.statistics-medal');
const progressBar = document.querySelector('.statistics-progress__line');
const prizeTitle = document.querySelector('.statistics-prize__title');
const prizeArrow = document.querySelector('.statistics-prize__arrow');
const prizeList = document.querySelector('.statistics-prize-list');

let progressCurent = 2;

result.forEach((element,arr) => {
	if(element.innerText == '+') {
		medal[arr].style.display = 'block';
		progressCurent += 14;

		if(progressCurent < 90) progressBar.style.width = `${progressCurent}%`;
		else {
			progressBar.style.width = '100.5%';
			prizeTitle.style = 'color:#269cc0; cursor:pointer';
			prizeTitle.classList.add('statistics-prize__title_active');
			prizeArrow.style = 'border-top: 6px solid #269cc0';
			document.querySelector('.statistics-unavailable').style.display = 'none';
		}
	}
});

if (prizeTitle.classList.contains('statistics-prize__title_active')) {
	prizeTitle.onclick = () => {
		prizeList.classList.toggle('hidden');
		prizeArrow.classList.toggle('arrow-statistics-up');
	}
}