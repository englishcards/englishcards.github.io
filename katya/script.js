let unitLocation;

if (window.location.href.includes('index.html')) showAllUnits();
if (window.location.href.includes('unit.html')) showSingleUnit();	

function showAllUnits() {
	const unitWrap = document.querySelector('.unit-wrap');
	for (let i = 1; i <= 2; i++) {
		const unit = document.createElement('a');
		unit.classList.add('unit');
		unitWrap.appendChild(unit);

		const unitTitle = document.createElement('h3');
		unitTitle.classList.add('unit__title');
		unit.appendChild(unitTitle);
		unitTitle.innerText = `Unit-${i}`;

		const unitTitleImg = document.createElement('span');
		unitTitleImg.classList.add('unit__title__img');
		unitTitle.appendChild(unitTitleImg);
		unitTitleImg.style.backgroundImage = `url(units/${i}/img/0.jpg)`;
	}
	document.querySelectorAll('.unit').forEach( (element,arr) => {
		element.onclick = () => {
			window.location.href = `unit.html?unit-${arr+1}`;
		}		
	});
}

function showSingleUnit() {
	unitLocation = window.location.search.slice(6);
	showTitle();
	createCategories();


//Show title and All categories
	function showTitle() {
		const title = document.querySelector('title');
		title.innerText = unitAll[unitLocation - 1].unit;
	}
	function createCategories() {
		const categoryWrap = document.querySelector('.category-wrap');
		for(let i = 1; i <=6; i++) {
			const category = document.createElement('div');
			category.classList.add('category');
			categoryWrap.appendChild(category);

			const categoryTitle = document.createElement('h2');
			categoryTitle.classList.add('category__title');
			category.appendChild(categoryTitle);
		}
		const categoryArr = document.querySelectorAll('.category');
		const categoryTitleArr = document.querySelectorAll('.category__title');
		changeCategories(0,'Gramar','category-gramar');
		changeCategories(1,'Words','category-words');
		changeCategories(2,'Text','category-topic');
		changeCategories(3,'Practice','category-practice');
		changeCategories(4,'Audio','category-audio');
		changeCategories(5,'Homework','category-homework');

		function changeCategories(index,title,type) {
			categoryArr[index].classList.add(type);
			categoryTitleArr[index].innerText = title;
		}
	}
}	