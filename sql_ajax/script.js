// DROPDOWN

function openDropdown() {
	const dropdownTitle = document.querySelector('.dropdown-menu__title');
	const dropdownMenu = document.querySelector('.dropdown-menu__list');
	const dropdownArrow = document.querySelector('.dropdown-arrow-down');

	dropdownTitle.onclick = () => {
		dropdownMenu.classList.toggle('show-dropdown-menu');
		dropdownArrow.classList.toggle('arrow-dropdown-up');
	}
}
if (window.location.href.includes('sql-main.php')) openDropdown();


//TABS
function changeTabs() {
	let tab = document.querySelectorAll('.tab-section');
	let aside = document.querySelectorAll('.tutorial-aside');
	let tabLink = document.querySelectorAll('.sidebar__item');
	let currentTab = 0;

	tabLink.forEach((element, arr) => {		
		element.onclick = () => {
			if (element.classList.contains('section-hidden')) {
				element.classList.remove('section-hidden');
				tab[arr].innerHTML = tabs[arr].content;
			}
			tab[currentTab].hidden = true;
			aside[currentTab].hidden = true;
			tabLink[currentTab].classList.remove('sidebar__item_selected');

			tab[arr].hidden = false;
			aside[arr].hidden = false;
			tabLink[arr].classList.add('sidebar__item_selected');

			currentTab = arr;
		}
	});
}
changeTabs();

//HAMBURGER
function openCloseBurger() {
	let list = document.querySelector('.sidebar__list');
	let listItem = document.querySelectorAll('.sidebar__item');
	let hamburgerOpen = document.querySelector('.hamburger-open'); 
	let hamburgerClose = document.querySelector('.hamburger-close'); 
	
	hamburgerOpen.onclick = () => {
		list.classList.remove('sidebar-disappear');
		list.classList.add('sidebar-appear');
		hamburgerOpen.classList.add('hamburger-close');
		hamburgerClose.classList.remove('hamburger-close');
	}

	hamburgerClose.onclick = closeHamburger;
	function closeHamburger() {
		list.classList.remove('sidebar-appear');
		list.classList.add('sidebar-disappear');
		hamburgerClose.classList.add('hamburger-close');
		hamburgerOpen.classList.remove('hamburger-close');
	}

	listItem.forEach((element) => {
		element.onmouseup = () => closeHamburger();
		element.onmousedown = () => window.scrollTo(0,0);
	});
}
openCloseBurger();