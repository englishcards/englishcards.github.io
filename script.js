function openPassword() {
	const passwordLink = document.querySelector('.collection__item_password');

	passwordLink.onclick = () => {
		let overlay = document.createElement('div');
		document.body.appendChild(overlay);
		overlay.classList.add('test-modal');
		overlay.innerHTML = '<div class="modal-window"><p class="test-modal__text">Please put a password</p><span class="password-input-wrap"><input class="password-input" type="password"><span class="password-error" hidden>Invalid password</span></span><a class="word__btn password__btn password__btn_confirm">Confirm</a><a class="word__btn password__btn password__btn_cancel">Cancel</a></div>';

		let confirmBtn = document.querySelector('.password__btn_confirm');
		let passwordInput = document.querySelector('.password-input');

		passwordInput.onblur = () => {
			let passwordError = document.querySelector('.password-error');
			if (passwordInput.value == 'i') {
				console.log(passwordInput.value);
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