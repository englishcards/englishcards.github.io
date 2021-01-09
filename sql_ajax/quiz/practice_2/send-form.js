// AJAX for send form
const form = document.querySelector('.practice-form_2');
const progressResult = document.querySelectorAll('.progress-table__result');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let formData = document.querySelector('input[name="test-result5"]').value;
	formData = resultCounter;
	const request = new XMLHttpRequest();

	request.open('POST', 'practice_2.php', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send('test-result5=' + encodeURIComponent(formData));
	
	openOverlay(event, overlay, modal);
	showResult(modalText);

	let progressBar = document.querySelector('.progress-main__bar');
	if (progressResult[4].innerText == '-' && (resultCounter) >= 80) progressBar.value += 20;
	if((resultCounter) > parseInt(progressResult[4].innerText) && (resultCounter) >= 80 && parseInt(progressResult[4].innerText) < 80) progressBar.value += 20;
});
