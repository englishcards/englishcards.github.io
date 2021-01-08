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
<?php require_once('../quiz-main.php'); ?>
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
				<input type="hidden" name="test-result2">
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