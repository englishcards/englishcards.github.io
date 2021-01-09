// Profile Name

const formNameInput = document.querySelectorAll('.profile-form-name > input');
const formNameBtn = document.querySelector('.profile-name__btn');
const errorNameMessage = document.querySelectorAll('.profile-name-error');

formNameBtn.onclick = () => {
	event.preventDefault();
	const profile = new XMLHttpRequest();
	const inputAllData = formNameInput;

	profile.open('POST','profile_action.php',true);
	profile.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	profile.send('first_name=' + encodeURIComponent(inputAllData[0].value) + '&last_name=' + encodeURIComponent(inputAllData[1].value));

	profile.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	if (JSON.parse(this.responseText).error == 'Can\'t be blank') checkEmptyName();

	    	if (JSON.parse(this.responseText).error == 'Success') flashConfirm('Данные профиля были изменены');
	    	else flashDecline('Данные профиля не были изменены');
	   }
	};
}

// Profile Email
const formEmailInput = document.querySelectorAll('.profile-form-email > input');
const formEmailBtn = document.querySelector('.profile-email__btn');
const errorEmailMessage = document.querySelectorAll('.profile-email-error');

formEmailBtn.onclick = () => {
	event.preventDefault();
	const email = new XMLHttpRequest();
	const inputAllData = formEmailInput;

	email.open('POST','profile_action.php',true);
	email.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	email.send('email_new=' + encodeURIComponent(inputAllData[0].value) + '&password=' + encodeURIComponent(inputAllData[1].value));

	email.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	if (JSON.parse(this.responseText).error == 'Can\'t be blank') checkEmptyState(formEmailInput, errorEmailMessage);
	    	if (JSON.parse(this.responseText).error == 'Incorrect email') errorEmailMessage[0].innerText = 'Email был введён с ошибкой';
	    	if (JSON.parse(this.responseText).error == 'Wrong credentials') errorEmailMessage[1].innerText = 'Неверный пароль';
	    	if (JSON.parse(this.responseText).error == 'Email is already used') errorEmailMessage[0].innerText = 'Этот email уже занят';

	    	if (JSON.parse(this.responseText).error == 'Success') flashConfirm('Email был изменён');
	    	else flashDecline('Email не был изменён');
	   }
	};
	clearError(formEmailInput,errorEmailMessage);
}


// Profile Password
const formPwdInput = document.querySelectorAll('.profile-form-pwd > input');
const formPwdBtn = document.querySelector('.profile-pwd__btn');
const errorPwdMessage = document.querySelectorAll('.profile-pwd-error');

formPwdBtn.onclick = () => {
	event.preventDefault();
	const pwd = new XMLHttpRequest();
	const inputAllData = formPwdInput;

	pwd.open('POST','profile_action.php',true);
	pwd.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	pwd.send('password_old=' + encodeURIComponent(inputAllData[0].value) + '&password_new=' + encodeURIComponent(inputAllData[1].value) + '&password_new_confirm=' + encodeURIComponent(inputAllData[2].value));

	pwd.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	if (JSON.parse(this.responseText).error == 'Can\'t be blank') checkEmptyState(formPwdInput, errorPwdMessage);
	    	if (JSON.parse(this.responseText).error == 'Wrong credentials') errorPwdMessage[0].innerText = 'Неверный пароль';
	    	if (JSON.parse(this.responseText).error == 'Passwords are different') errorPwdMessage[2].innerText = 'Пароли не совпали';

	    	if (JSON.parse(this.responseText).error == 'Success') flashConfirm('Пароль был изменён');
	    	else flashDecline('Пароль не был изменён');
	   }
	};
	clearError(formPwdInput,errorPwdMessage);
}


// Check Error messages
// Empty state Name
function checkEmptyName() {
	if (formNameInput[0].value === '') errorNameMessage[0].innerText = 'Поле не может быть пустым';
	formNameInput[0].addEventListener('input', () => errorNameMessage[0].innerText = '');
}
function checkEmptyState(input,error) {
	input.forEach((element,arr) => {
		if (element.value === '') error[arr].innerText = 'Поле не может быть пустым';
		element.addEventListener('input', () => error[arr].innerText = '');
	})
}

// Length
formNameInput[0].addEventListener('input', () => checkMainInput(formNameInput[0],20,errorNameMessage[0],'Max длина - 20 символов'));
formNameInput[1].addEventListener('input', () => checkMainInput(formNameInput[1],20,errorNameMessage[1],'Max длина - 20 символов'));
formEmailInput[0].addEventListener('input', () => checkMainInput(formEmailInput[0],45,errorEmailMessage[0],'Max длина - 45 символов'));
formEmailInput[1].addEventListener('input', () => checkMainInput(formEmailInput[1],8,errorEmailMessage[1],'Max длина - 8 символов'));
formPwdInput[0].addEventListener('input', () => checkMainInput(formPwdInput[0],8,errorPwdMessage[0],'Max длина - 8 символов'));
formPwdInput[1].addEventListener('input', () => checkMainInput(formPwdInput[1],8,errorPwdMessage[1],'Max длина - 8 символов'));
formPwdInput[2].addEventListener('input', () => checkMainInput(formPwdInput[2],8,errorPwdMessage[2],'Max длина - 8 символов'));

function checkMainInput(input,length,error,message) {
	if (input.value.length > length) error.innerText = message;
	else error.innerText = '';
}

// Different password
formPwdInput[2].addEventListener('input', () => {
	if(formPwdInput[1].value != formPwdInput[2].value) errorPwdMessage[2].innerText = 'Пароли не совпадают';
	else errorPwdMessage[2].innerText = '';
});


function clearError(input,error) {
	input.forEach((element,arr) => {
		element.addEventListener('input', () => error[arr].innerText = '');
	});
}                          


// Flash
const flash = document.querySelector('.flesh-profile');
function flashConfirm(text) {
	clearFlash();
	setTimeout(() => {
		flash.classList.add('flesh-profile-confirm');
		flash.innerHTML = `${text}<span class="flesh-cross">`;
		document.querySelector('.flesh-cross').onclick = () => 	clearFlash();
	},100);
	
}
function flashDecline(text) {
	clearFlash()
	setTimeout(() => {
		flash.classList.add('flesh-profile-decline');
		flash.innerHTML = `${text}<span class="flesh-cross">`;
		document.querySelector('.flesh-cross').onclick = () => 	clearFlash();
	},100);
}

function clearFlash() {
	flash.classList.remove('flesh-profile-confirm');
	flash.classList.remove('flesh-profile-decline');
	flash.innerText = '';
}