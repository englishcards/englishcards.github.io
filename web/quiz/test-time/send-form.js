// AJAX for send form
const form = document.querySelector('.test-time-form');
const progressResult = document.querySelectorAll('.progress-table__result');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let formData = document.querySelector('input[name="test-result"]').value;
	formData = countResult;
	const request = new XMLHttpRequest();

	request.open('POST', 'quick-test.php', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send('test-result=' + encodeURIComponent(formData));
	
	showoverlay();

	let progressBar = document.querySelector('.progress-main__bar');
	if (progressResult[2].innerText == '-' && (countResult) >= 80) progressBar.value += 20;
	if((countResult) > parseInt(progressResult[2].innerText) && (countResult) >= 80) progressBar.value += 20;
});
