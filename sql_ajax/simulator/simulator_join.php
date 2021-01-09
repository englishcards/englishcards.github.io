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
				<p class="header-text">В этом разделе Вы можете выполнить различные <span class="sea-color">&nbsp;JOIN&nbsp;</span>- команды</p>
			</div>
		</div>
	</header>
	<main>
		<div class="main">
			<div class="container">
				<div class="statistics-content simulator-content">
					<div class="statistics-tooltip-wrap"></div>
					<div class="simulator-table-wrap simulator-table-wrap_js">
						<div>
							<h2 class="main-title statistics-title">city</h2>
							<table>
								<tr>
									<th>id</th>
									<th>name</th>
									<th>id_country</th>
								</tr>
								<tr>
									<td>1</td>
									<td>Paris</td>
									<td>5</td>
								</tr>
								<tr>
									<td>2</td>
									<td>London</td>
									<td>1</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Rome</td>
									<td>9</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Tokyo</td>
									<td>4</td>
								</tr>
								<tr>
									<td>5</td>
									<td>Sydney</td>
									<td>2</td>
								</tr>
								<tr>
									<td>6</td>
									<td>Liberty City</td>
									<td class="simulator-table_oblique">NULL</td>
								</tr>
								<tr>
									<td>7</td>
									<td>Cairo</td>
									<td>8</td>
								</tr>
								<tr>
									<td>8</td>
									<td>Manchester</td>
									<td>1</td>
								</tr>
								<tr>
									<td>9</td>
									<td>Vice City</td>
									<td class="simulator-table_oblique">NULL</td>
								</tr>					
							</table>
						</div>
						<div>
							<h2 class="main-title statistics-title">country</h2>
							<table>
								<tr>
									<th>id</th>
									<th>country_name</th>
								</tr>
								<tr>
									<td>1</td>
									<td>England</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Australia</td>
								</tr>
								<tr>
									<td>3</td>
									<td>USA</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Japan</td>
								</tr>
								<tr>
									<td>5</td>
									<td>France</td>
								</tr>
								<tr>
									<td>6</td>
									<td>Bolivia</td>
								</tr>
								<tr>
									<td>7</td>
									<td>China</td>
								</tr>
								<tr>
									<td>8</td>
									<td>Egypt</td>
								</tr>
								<tr>
									<td>9</td>
									<td>Italy</td>
								</tr>					
							</table>
						</div>	
					</div>
					<textarea class="form-simulator__textarea" name="user_query">SELECT country_name FROM country;</textarea>
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

