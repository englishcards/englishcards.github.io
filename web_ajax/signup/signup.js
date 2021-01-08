const formInput = document.querySelectorAll('.signup-form > input');
const rememberInput = document.querySelector('.signup__remember');
const formBtn = document.querySelector('.signup-form__btn');
const errorMessage = document.querySelectorAll('.error-message');
const inputNecessary = document.querySelectorAll('.signup-form > input:not([name="unnecessary"])');
const errorNecessary = document.querySelectorAll('.signup-form > span:not([id="error-message_unnecessary"])');

formBtn.onclick = () => {
	event.preventDefault();
	const signUp = new XMLHttpRequest();
	const inputAllData = formInput;
	if(rememberInput.checked) rememberInput.value = 'true';
	else rememberInput.value = 'false';

	signUp.open('POST','signup_action.php',true);
	signUp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	signUp.send('first_name=' + encodeURIComponent(inputAllData[0].value) + '&last_name=' + encodeURIComponent(inputAllData[1].value) + '&email=' + encodeURIComponent(inputAllData[2].value) + '&password=' + encodeURIComponent(inputAllData[3].value) + '&password_confirm=' + encodeURIComponent(inputAllData[4].value) + '&key=' + encodeURIComponent(inputAllData[5].value) + '&remember=' + encodeURIComponent(rememberInput.value));

	signUp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	try {
	    		if (JSON.parse(this.responseText).error == 'Can\'t be blank') checkEmptyState();
			    if (JSON.parse(this.responseText).error == 'Incorrect email') errorMessage[2].innerText = 'Ошибка в email';
			    if (JSON.parse(this.responseText).error == 'Email is already used') errorMessage[2].innerText = 'Этот email уже занят';
			    if (JSON.parse(this.responseText).error == 'Passwords are different') errorMessage[4].innerText = 'Пароли не совпали';
			    if (JSON.parse(this.responseText).error == 'Incorrect sign up key') errorMessage[5].innerText = 'Код регистрации неверный';
			    if (JSON.parse(this.responseText).error == 'Success') window.location.href = '../web-main.php';
	    	}
	    	catch {
	    		window.location.href = 'signup-error.html';
	    	}
	   }
	};
}

// Check Error messages
// Length
formInput[0].addEventListener('input', () => checkMainInput(formInput[0],20,errorMessage[0],'Max длина - 20 символов'));
formInput[1].addEventListener('input', () => checkMainInput(formInput[1],20,errorMessage[1],'Max длина - 20 символов'));
formInput[2].addEventListener('input', () => checkMainInput(formInput[2],45,errorMessage[2],'Max длина - 45 символов'));
formInput[3].addEventListener('input', () => checkMainInput(formInput[3],8,errorMessage[3],'Max длина - 8 символов'));

function checkMainInput(input,length,error,message) {
	if (input.value.length > length) error.innerText = message;
	else error.innerText = '';
}

// Empty state
function checkEmptyState() {
	inputNecessary.forEach((element,arr) => {
		if (element.value === '') errorNecessary[arr].innerText = 'Поле не может быть пустым';

		element.addEventListener('input', () => errorNecessary[arr].innerText = '');
	})
}

// Different password
const passwordField = document.querySelectorAll('.signup-form>input[type="password"]');
passwordField[1].addEventListener('input', () => {
	if(passwordField[0].value != passwordField[1].value) errorMessage[4].innerText = 'Пароли не совпадают';
	else errorMessage[4].innerText = '';
});