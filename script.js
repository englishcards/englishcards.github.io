function openPassword() {
	const passwordLink = document.querySelector('.collection__item_password');

	passwordLink.onclick = () => {
		let overlay = document.createElement('div');
		document.body.appendChild(overlay);
		overlay.classList.add('test-modal');
		overlay.innerHTML = '<div class="modal-window"><p class="test-modal__text">Please put a password</p><span class="password-input-wrap"><input class="password-input" type="password" autofocus><span class="password-error" hidden>Invalid password</span></span><div class="btn-wrap"><a class="word__btn password__btn password__btn_confirm">Confirm</a><a class="word__btn password__btn password__btn_cancel">Cancel</a></div></div>';

		let confirmBtn = document.querySelector('.password__btn_confirm');
		let passwordInput = document.querySelector('.password-input');
		let passwordError = document.querySelector('.password-error');
		passwordInput.focus();

		window.addEventListener('keyup', function (e) {
		  	if (e.keyCode === 13) {
		    	e.preventDefault();
		   		if (passwordInput.value == 'i') {
					confirmBtn.setAttribute('href', 'individual/index.html');
					document.location.href = "https://englishcards.github.io/individual/index.html";
				}
				else if (passwordInput.value == '') {
					passwordError.innerText = 'Can\'t be blank' ;
					passwordError.hidden = false;
					passwordInput.style.borderColor = '#ff0000';
					return false;
				}
				else {
					passwordError.innerText = 'Invalid password';
					passwordError.hidden = false;
					passwordInput.style.borderColor = '#ff0000';
					return false;
				}
		  	}
		  	else if (e.keyCode === 27) {
		  		overlay.remove();
		  	}
		});

		passwordInput.onblur = () => {
			if (passwordInput.value == 'i') {
				confirmBtn.onclick = () => confirmBtn.setAttribute('href', 'individual/index.html');
			}
			else if (passwordInput.value == '') {
				passwordError.innerText = 'Can\'t be blank' ;
				passwordError.hidden = false;
				passwordInput.style.borderColor = '#ff0000';
				return false;
			}
			else {
				passwordError.innerText = 'Invalid password';
				passwordError.hidden = false;
				passwordInput.style.borderColor = '#ff0000';
				return false;
			}
		}
		document.querySelector('.password__btn_cancel').onclick = () => {
			overlay.remove();
		}
	}	
}
openPassword();