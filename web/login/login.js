const loginInput = document.querySelectorAll('.login-input'); 
const errorMessage = document.querySelectorAll('.error-message');
const loginBtn = document.querySelector('.login_btn');

let errorCodeLogin = window.location.href.substr(-3);

if (errorCodeLogin != '401') {
	errorMessage.forEach(element => {
		element.style.display = 'none';
	})
}
else {
	loginInput.forEach((element,arr) => {
		element.addEventListener('input', () => {
			if (element.value != '' && errorMessage[arr]) errorMessage[arr].style.display = 'none';
		});	
	});
	errorMessage.forEach(element => {
		loginInput[0].addEventListener('input', () => {
			if(element.innerText == 'Этот email не зарегистрирован') element.style.display = 'none';
		});
		loginInput[1].addEventListener('input', () => {
			if(element.innerText == 'Неверный пароль') element.style.display = 'none';
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