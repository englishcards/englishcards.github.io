const updateInput = document.querySelectorAll('.update__input'); 
const errorMessage = document.querySelectorAll('.error-message');

let errorCodeLogin = window.location.href.substr(-3);

updateInput.forEach((element,arr) => {
	element.addEventListener('input', () => checkEmpty(element, errorMessage[arr]));
});

function checkEmpty(input, error) {
	if (input.value == '') error.innerText = 'Поле не может быть пустым';
	else error.innerText = '';
}

// FLASH
const flexhMessage = document.querySelectorAll('.flesh-profile');
const flexhClose = document.querySelectorAll('.flesh-cross');

flexhClose.forEach((element,arr) => {
	element.onclick = () => flexhMessage[arr].style.display = 'none';
});