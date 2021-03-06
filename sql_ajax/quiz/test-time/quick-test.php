<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Тест на время</title>
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
					<h2 class="question-start__title">Статистика сдачи тестов</h2>
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
							<td>Практические задания - 2</td>
							<td class="progress-table__result"><?php echo $test_practice_2 ?>%</td>
						</tr>
					</table>
					<button class="button progress-table__btn">Закрыть</button>
					<span class="progress-table__link">Вам доступен Cуперприз по <a href="#" target="_blank"><span class="sea-color">ссылке</span></a></span>
				</div>
			</div>
			<div class="container">
				<div class="header-wrap">
					<a href="../../sql-main.php" class="header-logo">
						<img class="header-logo__img" src="../img/logo.svg" alt="Лого MySql">
						<h1 class="header-logo__title"><span class="hidden">MySQL</span>Tutorial</h1>
					</a>
					<a href="../../sql-main.php" class="button header__link">Главная</a>
				</div>
				<p class="header-text">Здесь можно пройти тест на знание <span class="sea-color">SQL</span><br>Успешным считается результат от <span class="sea-color">80%</span> и выше</p>
			</div>
		</div>
	</header>
	<main>
	<div class="container question-main">
		<div class="main-wrap">
			<div class="question-start">
				<h2 class="question-start__title">Выберите время</h2>
				<div class="category-wrap">
					<div class="category-box category-box_left">
						<span class="category-box__bg"></span>
						<h3 class="category-box__name">SQL</h3>
					</div>
					<div class="category-box category-box_right">
						<span class="category-box__bg"></span>
						<h3 class="category-box__name">10 секунд</h3>
					</div>
				</div>
				<button class="button question-start__btn">Начать</button>
				<ul class="category-list hidden">
					<li class="category-item"></li>
					<li class="category-item"></li>
					<li class="category-item"></li>
				</ul>
			</div>
			<div class="question-wrap hidden">
				<span class="question-time"><span class="question-time_counter">10</span></span>
				<span class="progress-counter">1 / 10</span>
				<p class="question-text"></p>
				<hr class="question-line">
				<ul class="question-list">
					<li class="question-item">
						<span class="question-item_answer">Select</span>
					</li>
					<li class="question-item">
						<span class="question-item_answer">Update</span>
					</li>
					<li class="question-item">
						<span class="question-item_answer">Insert into</span>
					</li>
				</ul>
				<button class="button question-btn">Выберите вариант</button>
				<form class="test-time-form hidden">
					<input type="hidden" name="test-result3">
					<button class="button question-btn_test-time" type="submit">Завершить</button>
				</form>
			</div>	
		</div>	
	</div>
	<div class="overlay hidden">
		<div class="modal">
			<p class="modal__text modal__text_top modal__text_animation"><p>
			<p class="modal__text modal__text_bottom">Ваш результат: <span class="code-item_orange modal__number"> </span></p>
			<button class="button modal__btn modal-question__btn">Пройти ещё раз</button>
		</div>
	</div>
	<script src="../progress.js"></script>
	<script src="quick-test.js"></script>
	<script src="send-form.js"></script>
</body>
</html>