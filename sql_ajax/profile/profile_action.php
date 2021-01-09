<?php
error_reporting(0);
require_once('profile_data.php');
$dbc = mysqli_connect('localhost','root','','sql_tutorial') or die('No connection with Data base');

if (isset($_POST['first_name']) || isset($_POST['last_name'])) {
	$first_name_new = mysqli_real_escape_string($dbc, trim($_POST['first_name']));
	$last_name_new = mysqli_real_escape_string($dbc, trim($_POST['last_name']));

	if (empty($first_name_new)) echo json_encode(['error' => 'Can\'t be blank']); 
	else {
		$query_update_profile = "UPDATE users SET first_name = '$first_name_new', last_name = '$last_name_new' WHERE id = '$user_id'";
		$result_update_profile = mysqli_query($dbc, $query_update_profile) or die ('Error in query');
		echo json_encode(['error' => 'Success']);
	}
}

if (isset($_POST['email_new'])) {
	$email_new = mysqli_real_escape_string($dbc, trim($_POST['email_new']));
	$password = mysqli_real_escape_string($dbc, trim($_POST['password']));

	$query_login_pwd = "SELECT id, email, password FROM users WHERE email = '$email' AND password = SHA('$password') AND id = '$user_id'";
	$result_login_pwd = mysqli_query($dbc, $query_login_pwd) or die ('Error in query');
	if (mysqli_num_rows($result_login_pwd) == 1) $credentials_correct = 'true';	
	else $credentials_correct = 'false';

	$query_email = "SELECT email FROM users";
	$result_email = mysqli_query($dbc, $query_email) or die ('Error in query');
	while($row_email = mysqli_fetch_array($result_email)) {
		if ($email_new === $row_email[0]) {
			$email_unique = 'false';
			break 1;
		}
		else $email_unique = 'true';
	}

	if (empty($email_new) || empty($password)) echo json_encode(['error' => 'Can\'t be blank']);
	else if (!filter_var($email_new, FILTER_VALIDATE_EMAIL)) echo json_encode(['error' => 'Incorrect email']);
	else if ($credentials_correct === 'false') echo json_encode(['error' => 'Wrong credentials']);
	else if ($email_unique == 'false') echo json_encode(['error' => 'Email is already used']);
	else {
		$query_update_email = "UPDATE users SET email = '$email_new' WHERE id = '$user_id'";
		$result_update_email = mysqli_query($dbc, $query_update_email) or die ('Error in query');
		echo json_encode(['error' => 'Success']);
	}
}

if (isset($_POST['password_old'])) {
	$password_old = mysqli_real_escape_string($dbc, trim($_POST['password_old']));
	$password_new = mysqli_real_escape_string($dbc, trim($_POST['password_new']));
	$password_new_confirm = mysqli_real_escape_string($dbc, trim($_POST['password_new_confirm']));

	$query_login_pwd = "SELECT id, password FROM users WHERE password = SHA('$password_old') AND id = '$user_id'";
	$result_login_pwd = mysqli_query($dbc, $query_login_pwd) or die ('Error in query');
	if (mysqli_num_rows($result_login_pwd) == 1) $credentials_correct = 'true';	
	else $credentials_correct = 'false';

	
	if (empty($password_old) || empty($password_new) || empty($password_new_confirm)) echo json_encode(['error' => 'Can\'t be blank']);
	else if ($credentials_correct === 'false') echo json_encode(['error' => 'Wrong credentials']);
	else if ($password_new !== $password_new_confirm) echo json_encode(['error' => 'Passwords are different']);
	else {
		$query_update_pwd = "UPDATE users SET password = SHA('$password_new') WHERE id = '$user_id'";
		$result_update_pwd = mysqli_query($dbc, $query_update_pwd) or die ('Error in query');
		echo json_encode(['error' => 'Success']);
	}
}
mysqli_close($dbc);
?>