let unit = 1;
let currentBtn;
let currentImg;
const imgMain = document.querySelector('.draw__img-main');
const btnDraw = document.querySelectorAll('.draw__btn');
const imgDraw = document.querySelectorAll('.draw__img-wrap');
const imgItem = document.querySelectorAll('.draw__img');
const wordItem = document.querySelectorAll('.draw__eng');
const overlayGrid = document.querySelector('.draw-grid-overlay');
const overlayAll = document.querySelector('.draw-all-overlay');
const gridWrap = document.querySelector('.draw-grid');
const allWrap = document.querySelector('.draw-all');

hide(overlayAll);
hide(overlayGrid);

function drawImage() {
	imgMain.src = `img/${unit - 1}.jpg`;
	btnDraw[0].style = itemPlace[unit-1].btnPlace[0];
	btnDraw[1].style = itemPlace[unit-1].btnPlace[1];
	btnDraw[2].style = itemPlace[unit-1].btnPlace[2];
	btnDraw[3].style = itemPlace[unit-1].btnPlace[3];
	btnDraw[4].style = itemPlace[unit-1].btnPlace[4];
	
	imgDraw[0].style = itemPlace[unit-1].imgPlace[0];
	imgDraw[1].style = itemPlace[unit-1].imgPlace[1];
	imgDraw[2].style = itemPlace[unit-1].imgPlace[2];
	imgDraw[3].style = itemPlace[unit-1].imgPlace[3];
	imgDraw[4].style = itemPlace[unit-1].imgPlace[4];

	imgDraw.forEach(element => { element.style.width = itemPlace[unit-1].imgWidth[0];});

	hideAll(imgDraw);
}

btnDraw.forEach( (element,arr) => {
	currentBtn = '';
	element.onclick = () => {
		currentBtn = +arr;
		showOverlay(overlayGrid, gridWrap);

		if (gridWrap.classList.contains('grid-new')) openGrid();
		else gridWrap.style.display = 'grid';
	}	
});

// OpenGrid
	function openGrid() {
	gridWrap.classList.remove('grid-new');
	gridWrap.style.display = 'grid';		
		for (let i = 0; i < wordsAll[unit-1].wordsEng.length; i++) {
			const imgGrid = document.createElement('img');
			gridWrap.appendChild(imgGrid);
			console.log(unit);
			imgGrid.src = `../units/${unit}/img/${i}.jpg`;
			imgGrid.classList.add('draw-grid__img');
		}

		document.querySelectorAll('.draw-grid__img').forEach((element,arr) => {
			currentImg = '';
			element.onclick = () => {
				currentImg = +arr;
				gridWrap.style.display = 'none';
				closeOverlay(overlayGrid);
				hide(btnDraw[currentBtn]);
				show(imgDraw[currentBtn]);
				imgItem[currentBtn].src = `../units/${unit}/img/${currentImg}.jpg`;
				wordItem[currentBtn].innerText = wordsAll[unit-1].wordsEng[currentImg];
			}	
		});
	}

drawImage();


const drawTitle = document.querySelector('.draw__title');
drawTitle.onclick = () => {
	showOverlay(overlayAll, allWrap);
	if (allWrap.classList.contains('grid-new')) openAll();
	else allWrap.style.display = 'grid';
} 

function openAll() {
	allWrap.classList.remove('grid-new');
	for (let i = 0; i < 3; i++) {
		const imgAllWrap = document.createElement('div');
		allWrap.appendChild(imgAllWrap);
		imgAllWrap.classList.add('draw-all__img-wrap');

		const imgAll = document.createElement('img');
		const unitAll = document.createElement('b');
		imgAllWrap.appendChild(imgAll);
		imgAllWrap.appendChild(unitAll);
		imgAll.src = `img/${i}.jpg`;

		imgAll.classList.add('draw-all__img');
		unitAll.classList.add('draw-all__text');
		unitAll.innerText = `Unit ${i+1}`;
	}

	document.querySelectorAll('.draw-all__img-wrap').forEach((element,arr) => {
		element.onclick = () => {
			unit = arr+1;
			drawImage();
			drawTitle.innerText = `Unit ${unit}`;
			closeOverlay(overlayAll);
			hide(allWrap);
			gridWrap.classList.add('grid-new');	

			document.querySelectorAll('.draw-grid__img').forEach(element => {
				element.remove();
			});
		}
	});
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

function hide(item) {
	item.style.display = 'none';
}

function show(item) {
	item.style.display = 'block';
}

function hideAll(item) {
	item.forEach(element => {element.style.display = 'none';});
}
