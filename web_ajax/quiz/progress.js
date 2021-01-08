function showMainProgress() {
	const progressBar = document.querySelector('.progress-main__bar');
	let progressResult = document.querySelectorAll('.progress-table__result');
	progressBar.value = 5;

	checkprogress(parseInt(progressResult[0].innerText));
	checkprogress(parseInt(progressResult[1].innerText));
	checkprogress(parseInt(progressResult[2].innerText));
	checkprogress(parseInt(progressResult[3].innerText));
	checkprogress(parseInt(progressResult[4].innerText));

	function checkprogress(item) {
		if (item >= 80) progressBar.value += 20;
	}
}
showMainProgress();

function showStatistic() {
	const progress = document.querySelector('.progress-main');
	const statisticOverlay = document.querySelector('.progress-overlay');
	const statisticWrap = document.querySelector('.progress-table-wrap');
	const statisticBtn = document.querySelector('.progress-table__btn');
	let progressResult = document.querySelectorAll('.progress-table__result');

	progressResult.forEach(element => {
		if(element.innerText == '%') element.innerText = '-';
	})

	progress.onclick = () => {
		openOverlay(event, statisticOverlay, statisticWrap);
		
		let resultTest = [parseInt(progressResult[0].innerText),parseInt(progressResult[1].innerText),parseInt(progressResult[2].innerText),parseInt(progressResult[3].innerText),parseInt(progressResult[4].innerText)];
		let awardMedal = document.querySelector('.progress-table__award');
		let width = 0;
		const awardText = document.querySelector('.progress-table__link');
		const awardLink = document.querySelector('.progress-table__link a');
		for (let i = 0; i < progressResult.length; i++) {
			if (parseInt(progressResult[i].innerText) >= 80) {
				width += 30;
				awardMedal.style.width = `${width}px`;
			}
			if (resultTest[0] == 100 && resultTest[1] == 100 && resultTest[2] == 100 && resultTest[3] == 100 && resultTest[4] == 100) {
				statisticWrap.style.backgroundImage = 'url(../img/cup.svg)';
				awardText.style.display = 'block';
				awardLink.href = 'https://youtu.be/4c-BVXUdbmY';
			}
			else statisticWrap.style.backgroundImage = 'none';
		}
	}

	statisticBtn.onclick = () => closeOverlay(statisticOverlay);
	statisticOverlay.onclick = () => closeOverlay(statisticOverlay);

	function openOverlay(event, overlay, modal) {
		event.preventDefault();
		modal.onclick = (e) => e.stopPropagation();

		overlay.classList.remove('none-transition');
		overlay.style.display = 'block';
		if (overlay) overlay.classList.add('block-transition');
	}
	function closeOverlay(overlay) {
		overlay.classList.remove('block-transition');
		if (overlay) overlay.classList.add('none-transition');
	}
	window.addEventListener('keyup', function (e) {
		e.preventDefault();
		statisticOverlay.classList.remove('block-transition');
		  if (e.keyCode === 27) statisticOverlay.classList.add('none-transition');
		});	
}
showStatistic();
