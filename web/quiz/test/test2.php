<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Тест HTML/CSS</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="../quiz.css">
</head>
<body>
<?php
error_reporting(0);
$dbc = mysqli_connect('localhost','root','','web') or die('Error with con to Database');
$web_url = '../web-main.php';
session_start();

if (isset($_COOKIE['user_id_web']) && isset($_COOKIE['token_web'])) {
	$user_id_web = $_COOKIE['user_id_web'];
	$token_web = $_COOKIE['token_web'];
}	
else {
	$user_id_web = $_SESSION['user_id_web'];
	$token_web = $_SESSION['token_web'];
}

$query = "SELECT u.id, t.token, q.test_1, q.test_2, q.test_time, q.test_practice, q.test_devtools FROM users u JOIN token_web t
ON u.id=t.id_users JOIN quiz q ON u.id=q.id_users WHERE u.id = '$user_id_web'";
$data = mysqli_query($dbc,$query) or die('can\t get data drom data base');


while($row_data = mysqli_fetch_array($data)) {
	if($user_id_web == $row_data[0] && $token_web == $row_data[1]) {
		$test_1 = $row_data[2];
		$test_2 = $row_data[3];
		$test_time = $row_data[4];
		$test_practice = $row_data[5];
		$test_devtools = $row_data[6];

		if(isset($_POST['test-result']) && $_POST['test-result'] > $test_2) {
			$test_result = $_POST['test-result'];
			$query_test_result = "UPDATE quiz SET test_2=$test_result WHERE id_users=$user_id_web";
			$result = mysqli_query($dbc, $query_test_result) or die('can\'t send data to Data base');
		}
	}
	else header('Location: ' .$web_url);
}

mysqli_close($dbc);
?>
	<header id="header-main">
		<div class="header">
			<div class="progress-main">
				<p class="progress-main_text">Ваш прогресс:</p>
				<progress class="progress-main__bar" value="5" max="100">
			</div>
			<div class="progress-overlay hidden">
				<div class="progress-table-wrap">
					<h2 class="progress-table__title question-start__title">Статистика сдачи тестов</h2>
					<span class="progress-table__award"></span>
					<table class="progress-table">
						<tr>
							<th>Название</th>
							<th>Лучший результат</th>
						</tr>
						<tr>
							<td>Тест - 1 (теория)</td>
							<td class="progress-table__result"><?php echo $test_1 ?>%</td>
						</tr>
						<tr>
							<td>Тест - 2 (теория)</td>
							<td class="progress-table__result"><?php echo $test_2 ?>%</td>
						</tr>
						<tr>
							<td>Тест на время</td>
							<td class="progress-table__result"><?php echo $test_time ?>%</td>
						</tr>
						<tr>
							<td>Практические задания</td>
							<td class="progress-table__result"><?php echo $test_practice ?>%</td>
						</tr>
						<tr>
							<td>Тест в DevTools<br>(доступен на ПК)</td>
							<td class="progress-table__result"><?php echo $test_devtools ?>%</td>
						</tr>
					</table>
					<button class="button progress-table__btn">Закрыть</button>
					<span class="progress-table__link">Вам доступен Cуперприз по <a href="#" target="_blank"><span class="code-item_orange">ссылке</span></a></span>
				</div>
			</div>
			<div class="container">
				<div class="header-wrap">
					<a href="../../web-main.php" class="header-logo">
						<img class="header-logo__img" src="../img/html-logo.svg" alt="Лого html">
						<img class="header-logo__img" src="../img/css-logo.svg" alt="Лого css">
						<h1 class="header-logo__title"><span class="hidden">HTML и CSS</span>Tutorial</h1>
					</a>
					<a href="../../web-main.php" class="button header__link">Главная</a>
				</div>
				<p class="header-text">Здесь можно пройти тест на знание <span class="code-item_orange">HTML</span>&nbsp;и&nbsp;<span class="code-item_orange">CSS</span><br>Успешным считается результат от <span class="code-item_orange">80%</span> и выше</p>
			</div>
		</div>
	</header>
	<div class="container">
		<div class="main-wrap">
			<h2 id="content-title">Вариант 2</h2>
			<span class="previous-result">Ваш предыдущий результат: <span class="code-item_orange previous-result__value"></span></span>
			<ol class="question-list"></ol>
			<form class="test-form2">
				<input type="hidden" name="test-result">
				<button class="button finish-btn" type="submit">Завершить тест</button>
			</form>
			<div class="result-box hidden">
				<p class="result__text">Ваш результат: <span class="code-item_orange result__number"> </span></p>
				<a href="../../web-main.php" class="button result__btn_left">Главная</a>
				<a href="#header-main" class="button result__btn_right">Пройти ещё раз</a>
			</div>		
		</div>	
	</div>
	<div class="overlay hidden">
		<div class="modal">
			<p class="modal__text modal__text_top modal__text_animation"><p>
			<p class="modal__text modal__text_bottom">Ваш результат: <span class="code-item_orange modal__number"> </span></p>
			<button class="button modal__btn">Ok</button>
		</div>
	</div>
	<script src="../progress.js"></script>
	<script src="../answers.js"></script>
	<script src="quiz.js"></script>
	<script src="send-form.js"></script>
</body>
</html>