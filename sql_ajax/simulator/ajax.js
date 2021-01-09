const tableMain = document.querySelector('.simulator-table-wrap_js');
const queryField = document.querySelector('.form-simulator__textarea');
const sendBtn = document.querySelector('.form-simulator__btn');
const clearBtn = document.querySelector('.form-simulator__btn_clear');
const errorMessage = document.querySelector('.form-simulator__error');
let dataResult;

disableElement(clearBtn);
hideElement(clearBtn);

sendBtn.onclick = () => {
	let queryFieldValues = queryField.value.toLowerCase();

	if (!queryFieldValues.includes('update') && !queryFieldValues.includes('insert into')&& !queryFieldValues.includes('drop')&& !queryFieldValues.includes('delete')&& !queryFieldValues.includes('truncate')&& !queryFieldValues.includes('table')) {

		getData(queryField.value);
	}
	else {
		showElement(errorMessage);
		errorMessage.innerText = 'Можно использовать только команды SELECT';
		queryField.oninput = () =>  hideElement(errorMessage);
	}
	
}

function getData(value) {
	event.preventDefault();
	const ajax = new XMLHttpRequest();
	const asynchronous = true;

	let userData = value;

	ajax.open('POST','simulator_check.php',asynchronous);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	ajax.send('user_query=' + encodeURIComponent(userData));

	ajax.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			try {
				dataResult = JSON.parse(this.responseText);
				createQueryTable();
				hideElement(tableMain);
				clearBtn.style.display = 'block';

				document.querySelectorAll('.table-result td').forEach(element => {
					if(element.innerText == '') {
						element.innerText = 'NULL';
						element.style.fontStyle = 'oblique';
					}
				});
				enableElement(clearBtn);
				disableElement(sendBtn);
				disableElement(queryField);
			}	
			catch(err) {
				showElement(errorMessage);
				errorMessage.innerText = 'В команде есть ошибка. Попробуйте ещё раз';
				queryField.oninput = () =>  hideElement(errorMessage);
			}
		}
	}
}

clearBtn.onclick = () => {
	document.querySelector('.table-result').remove();
	disableElement(clearBtn);
	enableElement(sendBtn);
	enableElement(queryField);
	hideElement(clearBtn);
	if (window.location.href.includes('simulator_join.php')) tableMain.style.display = 'flex';
	else showElement(tableMain);
}


function createQueryTable() {
	let tableQuery = document.createElement('table');
	document.querySelector('.statistics-tooltip-wrap').after(tableQuery);
	tableQuery.classList.add('table-result');
	
	let tableHeaderRow = document.createElement('tr');
	tableHeaderRow = tableQuery.appendChild(tableHeaderRow);
	let rowHeaderArr = Object.keys(dataResult[0]);

	for (let i = 0; i < rowHeaderArr.length; i++) {

		let th = document.createElement('th');
		th = tableHeaderRow.appendChild(th);
		th.innerText = rowHeaderArr[i];
	}

	for(let i = 0; i < dataResult.length; i++) {
		let tr = document.createElement('tr');
		tr = tableQuery.appendChild(tr);

		let rowDataArr = Object.values(dataResult[i]);

		for (let j = 0; j < rowDataArr.length; j++) {

			let td = document.createElement('td');
			td = tr.appendChild(td);
			td.innerText = rowDataArr[j];
		}
	}
}


function showElement(element) {
	element.style.display = 'block'
}

function hideElement(element) {
	element.style.display = 'none'
}

function disableElement(element) {
	element.disabled = true;
}

function enableElement(element) {
	element.disabled = false;
}