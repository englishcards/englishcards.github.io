<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Практика SQL</title>
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
				<p class="header-text">Здесь можно выполнить задания по <span class="sea-color">SQL</span><br>Успешным считается результат от <span class="sea-color">80%</span> и выше</p>
			</div>
		</div>
	</header>
	<div class="container">
		<div class="main-wrap">
			<span class="progress progress-practice"></span>
			<span class="result sea-color"></span>
			<div class="practice">
				<div class="question-wrap question-field-wrap">
					<p class="question question-field">Сделайте выборку значений столбца value в таблице country</p>
					<p class="answer-field"><span class="answer-field_empty"></span> value &#160;<span class="answer-field_empty"></span> country;</p><span class="sign-field" hidden></span>
					<div class="btn-wrap btn-fields">
						<button class="button button-answer button-answer_left btn_clear">Очистить</button>
						<button class="button button-answer button-answer_right btn_clear">Проверить</button>
						<form class="practice-form hidden">
							<input type="hidden" name="test-result4">
							<button class="button question-btn_practice" type="submit">Завершить</button>
						</form>
					</div>
					<div class="answer-wrap answer-show"></div>
					<div class="table-answer" hidden></div>
					<div class="parts-wrap">
						<hr>
						<div class="parts operators-block">
							<h2 class="parts-title parts-title">Операторы</h2>
							<span class="parts__answer operators">SELECT</span>
							<span class="parts__answer operators">UPDATE</span>
							<span class="parts__answer operators">FROM</span>
							<span class="parts__answer operators">WHERE</span>
							<span class="parts__answer operators">AND</span>
							<span class="parts__answer operators">OR</span>
							<span class="parts__answer operators">DISTINCT</span>
							<span class="parts__answer operators">ORDER BY</span>
							<span class="parts__answer operators">SET</span>
							<span class="parts__answer operators">DESC</span>
							<span class="parts__answer operators">LIKE</span>
							<span class="parts__answer operators">AVG</span>
							<span class="parts__answer operators">MAX</span>
							<span class="parts__answer operators">GROUP BY</span>
							<span class="parts__answer operators">HAVING</span>
							<span class="parts__answer operators">JOIN</span>
							<span class="parts__answer operators">LEFT JOIN</span>
							<span class="parts__answer operators">ON</span>
						</div>
						<div class="parts signs-block">
							<h2 class="parts-title signs-title">Знаки сравнения</h2>
							<span class="parts__answer signs"> = </span>
							<span class="parts__answer signs"> < </span>
							<span class="parts__answer signs"> > </span>
							<span class="parts__answer signs"> <= </span>
							<span class="parts__answer signs"> >= </span>
							<span class="parts__answer signs"> != </span>
						</div>
						<div class="parts columns-block">
							<h2 class="parts-title columns-title">Названия столбцов</h2>
							<span class="parts__answer columns">id</span>
							<span class="parts__answer columns">name</span>
							<span class="parts__answer columns">age</span>
							<span class="parts__answer columns">value</span>
							<span class="parts__answer columns">id_singer</span>
						</div>
					</div>
				</div>
				<div class="table-wrap">
					<div>
						<table class="table_main table-small">
							<caption class="table-name">singer</caption>
							<tr>
								<th class="column_bold">id</th>
								<th>name</th>
								<th>age</th>
							</tr>
							<tr>
								<td class="column_bold">1</td>
								<td>Iglesias</td>
								<td>77</td>
							</tr>
							<tr>
								<td class="column_bold">2</td>
								<td>Chelentano</td>
								<td>82</td>
							</tr>
							<tr>
								<td class="column_bold">3</td>
								<td>Sheeran</td>
								<td>29</td>
							</tr>
							<tr>
								<td class="column_bold">4</td>
								<td>Dion</td>
								<td>52</td>
							</tr>
							<tr>
								<td class="column_bold">5</td>
								<td>Zibrov</td>
								<td>63</td>
							</tr>
							<tr>
								<td class="column_bold">6</td>
								<td>Iglesias</td>
								<td>45</td>
							</tr>
						</table>	
					</div>	
					<div>
						<table class="table_main table-small">
							<caption class="table-name">country</caption>
							<tr>
								<th>id</th>
								<th>value</th>
								<th>id_singer</th>
							</tr>
							<tr>
								<td>1</td>
								<td>Italy</td>
								<td>2</td>
							</tr>
							<tr>
								<td>2</td>
								<td>USA</td>
								<td>NULL</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Ukraine</td>
								<td>5</td>
							</tr>
							<tr>
								<td>4</td>
								<td>Spain</td>
								<td>1</td>
							</tr>
							<tr>
								<td>5</td>
								<td>England</td>
								<td>3</td>
							</tr>
							<tr>
								<td>6</td>
								<td>Canada</td>
								<td>4</td>
							</tr>
						</table>
					</div>
				</div>
			</div>	
		</div>
	</div>		
	<div class="overlay hidden">
		<div class="modal">
			<p class="modal__text modal__text_top modal__text_animation"><p>
			<p class="modal__text modal__text_bottom">Ваш результат: <span class="sea-color modal__number"></span></p>
			<button class="button modal__btn">Пройти ещё раз</button>
		</div>
	</div>
	<script src="../progress.js"></script>
	<script src="answers.js"></script>
	<script src="practice.js"></script>
	<script src="send-form.js"></script>
</body>
</html>