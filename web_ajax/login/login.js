const formInput = document.querySelectorAll('.login-form > input');
const rememberInput = document.querySelector('.signup__remember');
const formBtn = document.querySelector('.login-form__btn');
const errorMessage = document.querySelectorAll('.error-message');
const errorCreds = document.querySelector('.login-wrong-credentials');

formBtn.onclick = () => {
	event.preventDefault();
	const login = new XMLHttpRequest();
	const inputAllData = formInput;

	if(rememberInput.checked) rememberInput.value = 'true';
	else rememberInput.value = 'false';

	login.open('POST','login_action.php',true);
	login.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	login.send('email=' + encodeURIComponent(inputAllData[0].value) + '&password=' + encodeURIComponent(inputAllData[1].value) + '&remember=' + encodeURIComponent(rememberInput.value));

	login.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	try {
	    		if (JSON.parse(this.responseText).error == 'Can\'t be blank') checkEmptyState();
			    if (JSON.parse(this.responseText).error == 'Incorrect email') errorMessage[0].innerText = 'Ошибка в email';
			    if (JSON.parse(this.responseText).error == 'Wrong credentials') errorCreds.style.display = 'block';
			    if (JSON.parse(this.responseText).error == 'Success') window.location.href = '../web-main.php';
	    	}
	    	catch {
	    		window.location.href = 'login-error.html';
	    	}
	   }
	};
}

// Check Error messages
// Empty state
function checkEmptyState() {
	formInput.forEach((element,arr) => {
		if (element.value === '') errorMessage[arr].innerText = 'Поле не может быть пустым';

		element.addEventListener('input', () => {
			errorCreds.style.display = 'none';
			errorMessage[arr].innerText = ''
		});
	})
}

// Overlay
const overlayForget = document.querySelector('.overlay-forget');
const modalForget = document.querySelector('.modal-forget');
const modalBtnForget = document.querySelector('.modal-forget__btn');

document.querySelector('.login-restore-link').onclick = () => showOverlay(overlayForget, modalForget);

modalBtnForget.onclick = () => closeOverlay(overlayForget);

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