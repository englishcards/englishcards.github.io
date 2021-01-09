<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Профиль</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="../styles.css">
</head>
<body>
	<?php require_once('profile_data.php'); ?>
	<header id="header-main">
		<div class="header">
			<div class="container">
				<a class="signup-header-link" href="../sql.php" class="button">Главная</a>
				<a href="../sql.php" class="header-logo">
					<img class="header-logo__img" src="../img/logo.svg" alt="Лого MySql">
					<h1 class="header-logo__title"><span class="hidden">MySQL</span>Tutorial</h1>
				</a>
			</div>
		</div>
	</header>
	<main>
		<div class="flesh-profile"></div>
		<div class="main">
			<div class="container">
				<div class="main-wrap">
					<div class="content update-content">
						<h2 class="update-title">Данные профиля</h2>
						<form class="login-form update-form profile-form-name">
							<label>Имя:</label><input maxlength="20" value="<?php echo $first_name; ?>"><span class="error-message profile-name-error"></span>
							<label>Фамилия:</label><input maxlength="20" value="<?php echo $last_name; ?>"><span class="error-message profile-name-error"></span>
							<button class="update-form__btn profile-name__btn">Изменить</button>
						</form>
						<hr class="update-hr">
						<h2 class="update-title">Email</h2>
						<form class="login-form update-form profile-form-email">
							<label>Введите новый email:</label><input maxlength="45" value="<?php echo $email; ?>"><span class="error-message profile-email-error"></span>
							<label>Текущий пароль:</label><input maxlength="8" type="password"><span class="error-message profile-email-error"></span>
							<button class="update-form__btn profile-email__btn">Изменить email</button>
						</form>
						<hr class="update-hr">
						<h2 class="update-title">Пароль</h2>
						<form class="login-form update-form profile-form-pwd">
							<label>Текущий пароль:</label><input maxlength="8" type="password"><span class="error-message profile-pwd-error"></span>
							<label>Новый пароль</label><input maxlength="8" type="password"><span class="error-message profile-pwd-error"></span>
							<label>Повторите новый пароль:</label><input maxlength="8" type="password"><span class="error-message profile-pwd-error"></span>
							<button class="update-form__btn profile-pwd__btn">Изменить пароль</button>
						</form>
					</div>
				</div>		
			</div>
		</div>
	</main>
	<script src="profile.js"></script>
</body>
</html>

