// AJAX for send form
const progressTable = document.querySelectorAll('.progress-table__result');
let form;
if (mainUrl.includes('test1')) sendResult('.test-form1', 'test1.php', progressTable[0], 'input[name="test-result1"]', 'test-result1=');
if (mainUrl.includes('test2')) sendResult('.test-form2', 'test2.php', progressTable[1], 'input[name="test-result2"]', 'test-result2=');

function sendResult(form, sendForm, testItem, field, fieldValue) {
	form = document.querySelector(form);

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		let formData = document.querySelector(field).value;
		formData = count * 10;
		const request = new XMLHttpRequest();

		request.open('POST', sendForm, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.send(fieldValue + encodeURIComponent(formData));
		
		openOverlay(event, overlay, modal);

		changeTableResult(testItem);
	});
}

function changeTableResult(testItem) {
	
	if (testItem.innerText == '-' && count == 0) testItem.innerText = 0 + '%';
	
	else if (testItem.innerText == '-' && (count * 10) < 80) testItem.innerText = count * 10 + '%';
	
	else if (testItem.innerText == '-' && (count * 10) >= 80) {
		testItem.innerText = count * 10 + '%';
		document.querySelector('.progress-main__bar').value += 20;
	}

	if((count * 10) > parseInt(testItem.innerText)) {
		testItem.innerText = count * 10 + '%';
		if(parseInt(testItem.innerText) >= 80) document.querySelector('.progress-main__bar').value += 20;
	}
}	