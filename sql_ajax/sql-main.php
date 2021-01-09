<!DOCTYPE html>
<html lang="ru">
<head>
	<title>MySQL tutorial</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="styles.css">
</head>
<body>
<?php require_once('login/session-main.php'); ?>
	<header id="header-main">
		<div class="header">
			<div class="container">
				<div class="header-main-wrap">
					<div class="header-logo">
						<img class="header-logo__img" src="img/logo.svg" alt="Лого MySql">
						<h1 class="header-logo__title"><span class="hidden">MySQL</span>Tutorial</h1>
						<button class="hamburger hamburger-open"><span class="hamburger-open_border"></span></button>
						<button class="hamburger hamburger-close"><span class="hamburger-close_border"></span></button>
					</div>
					<div class="dropdown-menu">
						<b class="dropdown-menu__title"><?php echo $user_name ?><span class="dropdown-arrow-down"></span></b>
						<ul class="dropdown-menu__list">
							<li><svg class="profile__icon" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"/></g></g></svg><a href="profile/profile.php">Профиль</a></li>
							<li><svg class="stat__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 445 445" style="enable-background:new 0 0 445 445;" xml:space="preserve"><path d="M0,37.215v55v15v300.57h445v-300.57v-15v-55H0z M276.667,277.595H168.333v-70.19h108.334V277.595z M306.667,207.405H415
v70.19H306.667V207.405z M276.667,307.595v70.19H168.333v-70.19H276.667z M30,207.405h108.333v70.19H30V207.405z M168.333,177.405
v-70.19h108.334v70.19H168.333z M138.333,107.215v70.19H30v-70.19H138.333z M30,307.595h108.333v70.19H30V307.595z M306.667,377.785
v-70.19H415v70.19H306.667z M415,177.405H306.667v-70.19H415V177.405z"/></svg><a href="statistics/statistics.php">Статистика</a></li>
							<li><form method="POST" action="login/logout.php"><button><svg class="logout__icon" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM10.71,20.29,7.41,17H18V15H7.41l3.3-3.29L9.29,10.29l-5,5a1,1,0,0,0,0,1.42l5,5Z" id="logout_account_exit_door"/></g></svg>Выход</button></form></li>
						</ul>
					</div>
				</div>	
				<p class="header-text">Данный сайт содержит основные команды для <span class="sea-color">MySQL</span>.<br>Если ваш <span class="sea-color">SQL</span>-код выдаёт ошибку, всегда можно сравнить с командами ниже</p>
				<nav class="sidebar">
					<ul class="sidebar__list">
						<li class="sidebar__item sidebar__item_create sidebar__item_selected">Создать</li>
						<li class="sidebar__item sidebar__item_choose section-hidden">Выбрать</li>
						<li class="sidebar__item sidebar__item_change section-hidden">Изменить</li>
						<li class="sidebar__item sidebar__item_join section-hidden">Соединить</li>
						<li class="sidebar__item sidebar__item_tasks section-hidden">Материалы</li>
						<li class="sidebar__item__profile hidden"><hr class="sidebar__line"><a href="profile/profile.php" class="signup__btn"><svg class="profile__icon" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"/></g></g></svg>Профиль</a></li>
						<li class="sidebar__item__profile hidden"><a href="statistics/statistics.php" class="login__btn"><svg class="stat__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 445 445" style="enable-background:new 0 0 445 445;" xml:space="preserve"><path d="M0,37.215v55v15v300.57h445v-300.57v-15v-55H0z M276.667,277.595H168.333v-70.19h108.334V277.595z M306.667,207.405H415
v70.19H306.667V207.405z M276.667,307.595v70.19H168.333v-70.19H276.667z M30,207.405h108.333v70.19H30V207.405z M168.333,177.405
v-70.19h108.334v70.19H168.333z M138.333,107.215v70.19H30v-70.19H138.333z M30,307.595h108.333v70.19H30V307.595z M306.667,377.785
v-70.19H415v70.19H306.667z M415,177.405H306.667v-70.19H415V177.405z"/></svg>Статистика</a></li>
						<li class="sidebar__item__profile hidden"><form method="POST" action="login/logout.php"><button><svg class="logout__icon" style="fill:#136882;" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM10.71,20.29,7.41,17H18V15H7.41l3.3-3.29L9.29,10.29l-5,5a1,1,0,0,0,0,1.42l5,5Z" id="logout_account_exit_door"/></g></svg>Выход</button></form></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
	<main>
		<div class="main">
			<div class="container">
				<div class="main-wrap">
					<aside class="tutorial">
						<h2 class="tutorial__title">Быстрый переход</h2>
						<div class="tutorial-aside tutorial-create">
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#create-link_first" class="tutorial__link">Create table (без ключа)</a></li>
								<li class="tutorial__item"><a href="#create-link_second" class="tutorial__link">Create table (с ключом)</a></li>
								<li class="tutorial__item"><a href="#create-link_third" class="tutorial__link">Insert Into (одна строка)</a></li>
								<li class="tutorial__item"><a href="#create-link_fourth" class="tutorial__link">Insert Into (неполная)</a></li>
								<li class="tutorial__item"><a href="#create-link_fifth" class="tutorial__link">Insert Into (несколько строк)</a></li>
							</ul>
						</div>
						<div class="tutorial-aside tutorial-select" hidden>
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#choose-link_first" class="tutorial__link">Select * (все столбцы)</a></li>
								<li class="tutorial__item"><a href="#choose-link_second" class="tutorial__link">Select (отдельные столбцы)</a></li>
								<li class="tutorial__item"><a href="#choose-link_third" class="tutorial__link">Ключевое слово where</a></li>
								<li class="tutorial__item"><a href="#choose-link_fourth" class="tutorial__link">Оператор and</a></li>
								<li class="tutorial__item"><a href="#choose-link_fifth" class="tutorial__link">Оператор or</a></li>
								<li class="tutorial__item"><a href="#choose-link_sixth" class="tutorial__link">Оператор between</a></li>
								<li class="tutorial__item"><a href="#choose-link_seventh" class="tutorial__link">Условие in</a></li>
								<li class="tutorial__item"><a href="#choose-link_eighth" class="tutorial__link">Вывод значений null</a></li>
								<li class="tutorial__item"><a href="#choose-link_nineth" class="tutorial__link">Операторы сравнения</a></li>
								<li class="tutorial__item"><a href="#choose-link_tenth" class="tutorial__link">Ключевое слово like</a></li>
								<li class="tutorial__item"><a href="#choose-link_eleventh" class="tutorial__link">Order by и limit</a></li>
								<li class="tutorial__item"><a href="#choose-link_twelfth" class="tutorial__link">Агрегатные функции</a></li>
								<li class="tutorial__item"><a href="#choose-link_thirteenth" class="tutorial__link">Group by и Having</a></li>
								<li class="tutorial__item"><a href="#choose-link_fourteenth" class="tutorial__link">Оператор distinct</a></li>
							</ul>
						</div>
						<div class="tutorial-aside tutorial-change" hidden>
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#change-link_first" class="tutorial__link">Update (одна строка)</a></li>
								<li class="tutorial__item"><a href="#change-link_second" class="tutorial__link">Update (несколько строк)</a></li>
								<li class="tutorial__item"><a href="#change-link_third" class="tutorial__link">Изменение структуры таблицы</a></li>
								<li class="tutorial__item"><a href="#change-link_fourth" class="tutorial__link">Удаление строки</a></li>
								<li class="tutorial__item"><a href="#change-link_fifth" class="tutorial__link">Удаление таблицы</a></li>
							</ul>
						</div>
						<div class="tutorial-aside tutorial-join" hidden>
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#join-link_first" class="tutorial__link">Внутреннее соединение</a></li>
								<li class="tutorial__item"><a href="#join-link_second" class="tutorial__link">Внутреннее соединение с where</a></li>
								<li class="tutorial__item"><a href="#join-link_third" class="tutorial__link">Внешнее соединение</a></li>
								<li class="tutorial__item"><a href="#join-link_fourth" class="tutorial__link">Объединение запросов</a></li>
								<li class="tutorial__item"><a href="#join-link_fifth" class="tutorial__link">Подзапросы</a></li>
							</ul>
						</div>
						<div class="tutorial-aside tutorial-task" hidden>
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#task-link_seventh" class="tutorial__link">Домашнее задание-1</a></li>
								<li class="tutorial__item"><a href="#task-link_eighth" class="tutorial__link">Домашнее задание-2</a></li>
								<li class="tutorial__item"><a href="#task-link_tenth" class="tutorial__link">Тесты</a></li>
								<li class="tutorial__item"><a href="#task-link_eleventh" class="tutorial__link">Тренажёр</a></li>
								<li class="tutorial__item"><a href="#task-link_twelfth" class="tutorial__link">Видео</a></li>
							</ul>
						</div>
						<a href="#header-main" class="btnup btnup-create"><svg class="btnup__icon" xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10">	<g><g><path d="M.86 10l-.861-1.035 3.303-3.966-3.303-3.967.86-1.034 4.142 5z"/></g></g></svg></a>
					</aside>
					<div class="content">
						<a href="#header-main" class="btnup btnup-smdev btnup-create"><svg class="btnup__icon" xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10">	<g><g><path d="M.86 10l-.861-1.035 3.303-3.966-3.303-3.967.86-1.034 4.142 5z"/></g></g></svg></a>
						<section id="create-table" class="tab-section">
							<div class="create-table-tab">
								<h2 class="main-title">Создать таблицу и внести значения</h2>
								<h3 class="main-subtitle" id="create-link_first">Create table (без первичного ключа)</h3>
								<div class="query">
									<div class="query__code">
										<code class="sql-code">CREATE TABLE friends (<br>name varchar(10),<br>age int,<br>birth date,<br>job varchar(16)<br>);</code>
										<span class="check-code">Просмотреть структуру таблицы: <code class="check-code_blue"> DESC friends;</code></span>
									</div>
									<table class="table_main">
										<tr>
											<th>field</th>
											<th>type</th>
											<th>null</th>
											<th>Key</th>
											<th>Extra</th>
										</tr>
										<tr>
											<td>name</td>
											<td>varchar(10)</td>
											<td>yes</td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td>age</td>
											<td>int</td>
											<td>yes</td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td>birth</td>
											<td>date</td>
											<td>yes</td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td>job</td>
											<td>varchar(12)</td>
											<td>yes</td>
											<td></td>
											<td></td>
										</tr>
									</table>
								</div><hr>
								<h3 class="main-subtitle" id="create-link_second">Create table (с первичным ключом)</h3>
								<div class="query">
									<div class="query__code">
										<code class="sql-code">CREATE TABLE friends (<br>id int auto_increment not null PRIMARY KEY,<br>name varchar(10),<br>age int,<br>birth date,<br>job varchar(16)<br>);</code>
										<span class="check-code">Просмотреть структуру таблицы: <code class="check-code_blue"> DESC friends;</code></span>
									</div>
									<table class="table_main">
										<tr>
											<th>field</th>
											<th>type</th>
											<th>null</th>
											<th>Key</th>
											<th>Extra</th>
										</tr>
										<tr>
											<td>id</td>
											<td>int</td>
											<td>no</td>
											<td>pri</td>
											<td>auto_increment</td>
										</tr>
										<tr>
											<td>name</td>
											<td>varchar(10)</td>
											<td>yes</td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td>age</td>
											<td>int</td>
											<td>yes</td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td>birth</td>
											<td>date</td>
											<td>yes</td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td>job</td>
											<td>varchar(12)</td>
											<td>yes</td>
											<td></td>
											<td></td>
										</tr>
									</table>
								</div><hr>
								<h3 class="main-subtitle" id="create-link_third">Insert Into (одна строка)</h3>
								<div class="query">
									<div class="query__code">
										<code class="sql-code">INSERT INTO friends (name, age, birth, job)<br>VALUES ('ross', 27, '1967-10-18', 'paleontologist');</code>
										<span class="check-code">Просмотреть данные таблицы: <code class="check-code_blue"> SELECT * FROM friends;</code></span>
									</div>
									<table class="table_main">
										<tr>
											<th>id</th>
											<th>name</th>
											<th>age</th>
											<th>birth</th>
											<th>job</th>
										</tr>
										<tr>
											<td>1</td>
											<td>ross</td>
											<td>27</td>
											<td>1967-05-12</td>
											<td>paleontologist</td>
										</tr>
									</table>
								</div><hr>
								<h3 class="main-subtitle" id="create-link_fourth">Insert Into (данные известны частично)</h3>
								<div class="query">
									<div class="query__code">
										<code class="sql-code">INSERT INTO friends (name, age, job)<br>VALUES ('monica', 24, 'cook');</code>
										<span class="check-code">Просмотреть данные таблицы: <code class="check-code_blue">SELECT * FROM friends;</code></span>
									</div>
									<table class="table_main">
										<tr>
											<th>id</th>
											<th>name</th>
											<th>age</th>
											<th>birth</th>
											<th>job</th>
										</tr>
										<tr>
											<td>1</td>
											<td>ross</td>
											<td>27</td>
											<td>1967-10-18</td>
											<td>paleontologist</td>
										</tr>
										<tr>
											<td>2</td>
											<td>monica</td>
											<td>24</td>
											<td>null</td>
											<td>cook</td>
										</tr>
									</table>
								</div><hr>
								<h3 class="main-subtitle" id="create-link_fifth">Insert Into (несколько строк)</h3>
								<div class="query">
									<div class="query__code">
										<code class="sql-code">INSERT INTO friends (name, age, birth, job)<br>VALUES ('rachel', 24, '1970-05-05', 'waitress'),
											<br>('chandler', 26, '1968-04-08', 'copywriter'),<br>('joey', 26, '1968-01-09', 'actor'),<br>('phoebe', 28, null, 'musician');</code>
										<span class="check-code">Просмотреть данные таблицы: <code class="check-code_blue">SELECT * FROM friends;</code></span>
									</div>
									<table class="table_main table-small">
										<tr>
											<th>id</th>
											<th>name</th>
											<th>age</th>
											<th>birth</th>
											<th>job</th>
										</tr>
										<tr>
											<td>1</td>
											<td>ross</td>
											<td>27</td>
											<td>1967-10-18</td>
											<td>paleontologist</td>
										</tr>
										<tr>
											<td>2</td>
											<td>monica</td>
											<td>24</td>
											<td>null</td>
											<td>cook</td>
										</tr>
										<tr>
											<td>3</td>
											<td>rachel</td>
											<td>24</td>
											<td>1970-05-05</td>
											<td>waitress</td>
										</tr>
										<tr>
											<td>4</td>
											<td>chandler</td>
											<td>26</td>
											<td>1968-04-08</td>
											<td>copywriter</td>
										</tr>
										<tr>
											<td>5</td>
											<td>joey</td>
											<td>26</td>
											<td>1968-01-09</td>
											<td>actor</td>
										</tr>
										<tr>
											<td>6</td>
											<td>phoebe</td>
											<td>28</td>
											<td>null</td>
											<td>musician</td>
										</tr>
									</table>
								</div>
							</div>
						</section>
						<section id="choose-table" class="tab-section" hidden></section>
						<section id="change-table" class="tab-section" hidden></section>
						<section id="join-table" class="tab-section" hidden></section>
						<section id="tasks" class="tab-section" hidden></section>
					</div>
				</div>
			</div>
		</div>
	</main>
	<script src="extra-content-main.js"></script>
	<script src="script.js"></script>
</body>
</html>