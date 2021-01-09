// AJAX for send form
const form = document.querySelector('.practice-form');
const progressResult = document.querySelectorAll('.progress-table__result');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let formData = document.querySelector('input[name="test-result4"]').value;
	formData = counterCorrect;
	const request = new XMLHttpRequest();

	request.open('POST', 'practice.php', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send('test-result4=' + encodeURIComponent(formData));
	
	openOverlay(event, overlay, modal);
	showResult(modalText);

	let progressBar = document.querySelector('.progress-main__bar');
	if (progressResult[3].innerText == '-' && (counterCorrect) >= 80) progressBar.value += 20;
	if((counterCorrect) > parseInt(progressResult[3].innerText) && (counterCorrect) >= 80 && parseInt(progressResult[3].innerText) < 80) progressBar.value += 20;
});
