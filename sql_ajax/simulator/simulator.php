<!DOCTYPE html>
<html lang="ru">
<head>
	<title>MySQL tutorial statistics</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="../styles.css">
</head>
<body>
<?php
error_reporting(0);

$dbc = mysqli_connect('localhost','root','','sql_tutorial') or die('Error with con to Database');
$sql_url = '../sql.php';
session_start();

if (isset($_COOKIE['user_id_sql']) && isset($_COOKIE['token_sql'])) {
	$user_id_sql = $_COOKIE['user_id_sql'];
	$token_sql = $_COOKIE['token_sql'];
}	
else if(isset($_SESSION['user_id_sql']) && isset($_SESSION['token_sql'])) {
	$user_id_sql = $_SESSION['user_id_sql'];
	$token_sql = $_SESSION['token_sql'];
}
else {
	header('Location: ' .$sql_url);
}

$query = "SELECT u.id, t.token FROM users u JOIN token_sql t
ON u.id=t.id_users WHERE u.id = '$user_id_sql'";
$data = mysqli_query($dbc,$query) or die('can\t get data drom data base');


while($row_data = mysqli_fetch_array($data)) {
	$id_db = $row_data[0];
	$token_db = $row_data[1];

}
if($user_id_sql != $id_db && $token_sql != $token_db) header('Location: ' .$sql_url);

mysqli_close($dbc);
?>
	<header id="header-main">
		<div class="header">
			<div class="container">
				<a class="signup-header-link" href="../sql-main.php" class="button">Главная</a>
				<a href="../sql-main.php" class="header-logo">
					<img class="header-logo__img" src="../img/logo.svg" alt="Лого MySql">
					<h1 class="header-logo__title"><span class="hidden">MySQL</span>Tutorial</h1>
				</a>
				<p class="header-text">В этом разделе Вы можете выполнить различные команды<span class="sea-color">&nbsp;&nbsp;SELECT&nbsp;</span> на примере таблицы top</p>
			</div>
		</div>
	</header>
	<main>
		<div class="main">
			<div class="container">
				<div class="statistics-content simulator-content">
					<div class="statistics-tooltip-wrap">
						<h2 class="main-title statistics-title">top</h2>
						<div class="statistics-tooltip">
							<svg class="signup-svg" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/></svg>
							<div class="statistics-tooltip-info simulator-tooltip-info">
								<p>Список самых богатых спортсменов<br>2010–2019</p>
							</div>	
						</div>
					</div>
					<div class="simulator-table-wrap_js">
						<table class="simulator__table">
							<tr>
								<th>id</th>
								<th>name</th>
								<th>birthday</th>
								<th>sport</th>
								<th>nation</th>
								<th>total</th>
							</tr>
							<tr>
								<td>1</td>
								<td>Floyd Mayweather</td>
								<td>1977-02-24</td>
								<td>boxing</td>
								<td>us</td>
								<td>698.3</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Cristiano Ronaldo</td>
								<td>1985-02-05</td>
								<td>football</td>
								<td>pt</td>
								<td>610.5</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Lionel Messi</td>
								<td>1987-06-24</td>
								<td>football</td>
								<td>ar</td>
								<td>572.4</td>
							</tr>
							<tr>
								<td>4</td>
								<td>LeBron James</td>
								<td>1984-12-30</td>
								<td>basketball</td>
								<td>us</td>
								<td>518.9</td>
							</tr>
							<tr>
								<td>5</td>
								<td>Roger Federer</td>
								<td>1981-08-08</td>
								<td>tennis</td>
								<td>ch</td>
								<td>488.3</td>
							</tr>
							<tr>
								<td>6</td>
								<td>Tiger Woods</td>
								<td>1975-12-30</td>
								<td>golf</td>
								<td>us</td>
								<td>469.2</td>
							</tr>
							<tr>
								<td>7</td>
								<td>Phil Mickelson</td>
								<td>1970-06-16</td>
								<td>golf</td>
								<td>us</td>
								<td>366.2</td>
							</tr>
							<tr>
								<td>8</td>
								<td>Manny Pacquiao</td>
								<td>1978-12-17</td>
								<td>boxing</td>
								<td>ph</td>
								<td>331.9</td>
							</tr>
							<tr>
								<td>9</td>
								<td>Kevin Durant</td>
								<td>1988-09-29</td>
								<td>basketball</td>
								<td>us</td>
								<td>324.2</td>
							</tr>
							<tr>
								<td>10</td>
								<td>Lewis Hamilton</td>
								<td>1985-01-07</td>
								<td>racing</td>
								<td>gb</td>
								<td>305.2</td>
							</tr>					
						</table>
					</div>	
					<textarea class="form-simulator__textarea" name="user_query">SELECT name FROM top;</textarea>
					<span class="form-simulator__error hidden"></span>
					<div class="form-simulator-btn-wrap">
						<button class="form-simulator__btn">Отправить</button>
						<button class="form-simulator__btn form-simulator__btn_clear">Новый запрос</button>
					</div>	
				</div>
			</div>
		</div>
	</main>
	<script src="ajax.js"></script>
</body>
</html>

