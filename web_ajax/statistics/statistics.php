<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Статистика</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="../style.css">
</head>
<body>
<?php require_once('statistics_data.php'); ?>
	<header id="header-main">
		<div class="header">
			<div class="container">
				<a class="signup-header-link" href="../web-main.php" class="button">Главная</a>
				<a href="../web-main.php" class="header-logo">
					<img class="header-logo__img" src="../img/html-logo.svg" alt="Лого html">
					<img class="header-logo__img" src="../img/css-logo.svg" alt="Лого css">
					<h1 class="header-logo__title"><span class="hidden">HTML и CSS</span>Tutorial</h1>
				</a>
			</div>
		</div>
	</header>
	<main>
		<div class="main">
			<div class="container">
				<div class="statistics-content">
					<div class="statistics-tooltip-wrap">
						<h2 class="main-title statistics-title">Статистика</h2>
						<div class="statistics-tooltip">
							<svg class="signup-svg" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/></svg>
							<div class="statistics-tooltip-info">
								<p>Подробнее о статистике<br><a href="#" target="_blank">(ссылка на YouTube)</a></p>
							</div>	
						</div>
					</div>
					<table class="statistics__table">
						<tr>
							<th>Название</th>
							<th>Результат</th>
						</tr>
						<tr>
							<td>Html - дз</td>
							<td><div><?php echo $html_task ?><span class="statistics-medal"></span></div></td>
						</tr>
						<tr>
							<td>Css - дз</td>
							<td><div><?php echo $css_task ?><span class="statistics-medal"></span></div></td>
						</tr>
						<tr>
							<td><a href="../quiz/test/test1.php">Тест - 1</a></td>
							<td><div><?php echo $test_1 ?><span class="statistics-medal"></span></div></td>
						</tr>
						<tr>
							<td><a href="../quiz/test/test2.php">Тест - 2</a></td>
							<td><div><?php echo $test_2 ?><span class="statistics-medal"></span></div></td>
						</tr>
						<tr>
							<td><a href="../quiz/test-time/quick-test.php">Тест на время</a></td>
							<td><div><?php echo $test_time ?><span class="statistics-medal"></span></div></td>
						</tr>
						<tr>
							<td><a href="../quiz/practice/practice.php">Практика</a></td>
							<td><div><?php echo $test_practice ?><span class="statistics-medal"></span></div></td>
						</tr>
						<tr>
							<td><a href="../quiz/devtools/devtools-test.php">Тест в DevTools</a></td>
							<td><div><?php echo $test_devtools ?><span class="statistics-medal"></span></div></td>
						</tr>
					</table>
					<div class="statistics-progress-wrap">
						<div class="statistics-progress"><div class="statistics-progress__line"></div></div>
					</div>
					<h3 class="statistics-prize__title">Суперприз<span class="statistics-prize__arrow"></span> <span class="statistics-unavailable">(недоступен)</span></h3>
					<?php
					error_reporting(0);
						if($html_task == '+' && $css_task == '+' && $test_1 == '+' && $test_2 == '+' && $test_time == '+' && $test_practice == '+' && $test_devtools == '+') {
					?>
					<ul class="statistics-prize-list hidden">
						<li class="statistics-prize-item"><a href="#" target="_blank">Видео (ссылка на YouTube)</a></li>
						<li class="statistics-prize-item"><a href="../download/bugs/documentation.zip">Документация</a></li>
						<li class="statistics-prize-item"><a href="https://vitaliyhtml5.github.io/bugs" target="_blank">Сайт с багами</a></li>
					</ul>
					<?php
					}
					?>
				</div>
			</div>
		</div>
	</main>
	<script src="statistics.js"></script>
</body>
</html>

