<?php
error_reporting(0);
$dbc = mysqli_connect('localhost','root','','web') or die('No connection with Data base');

$query_email = "SELECT email FROM users";
$result_email = mysqli_query($dbc, $query_email) or die ('Error in query');

$query_key = "SELECT key_value FROM key_web";
$result_key = mysqli_query($dbc, $query_key) or die ('Error in query');


$first_name = mysqli_real_escape_string($dbc, trim($_POST['first_name']));
$last_name = mysqli_real_escape_string($dbc, trim($_POST['last_name']));
$email = mysqli_real_escape_string($dbc, trim($_POST['email']));
$password = mysqli_real_escape_string($dbc, trim($_POST['password']));
$password_confirm = mysqli_real_escape_string($dbc, trim($_POST['password_confirm']));
$key = mysqli_real_escape_string($dbc, trim($_POST['key']));
$remember = mysqli_real_escape_string($dbc, trim($_POST['remember']));


while($row_email = mysqli_fetch_array($result_email)) {
	if ($email === $row_email[0]) {
		$email_unique = 'false';
		break 1;
	}
	else $email_unique = 'true';
}

while($row_key = mysqli_fetch_array($result_key)) $key_value = $row_key[0];


if (empty($first_name) || empty($email) || empty($password) || empty($key)) echo json_encode(['error' => 'Can\'t be blank']); 
else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) echo json_encode(['error' => 'Incorrect email']);
else if ($email_unique == 'false') echo json_encode(['error' => 'Email is already used']);
else if ($password !== $password_confirm) echo json_encode(['error' => 'Passwords are different']);
else if ($key_value !== $key) echo json_encode(['error' => 'Incorrect sign up key']);

else {
	$query = "INSERT INTO users(first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', SHA('$password'))";
	$result = mysqli_query($dbc, $query) or die('can\'t send data to Data base');

	$query_id = "SELECT id FROM users WHERE email = '$email' AND password = SHA('$password')";
	$result_id = mysqli_query($dbc, $query_id) or die ('Error in query');
	while($row_id = mysqli_fetch_array($result_id)) $user_id = $row_id[0];
	
	if ($remember == 'true') {

		function generateRandomString($length = 80) {
		    return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
		}

		$token =  generateRandomString();

		$query_token = "INSERT INTO token_web(token,id_users) VALUES ('$token','$user_id')";
		$result_token = mysqli_query($dbc, $query_token) or die('can\'t send token to Data base');
		$query_test = "INSERT INTO quiz(id_users) VALUES ('$user_id')";
		$result_test = mysqli_query($dbc, $query_test) or die('can\'t send data to Data base');

		setcookie('web_main_session', $token, time() + (60 * 60 * 24 * 180),"/; SameSite=Strict;");
	}
	else {
		session_start();
		function generateRandomString($length = 80) {
		    return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
		}
		$token =  generateRandomString();

		$query_token = "INSERT INTO token_web(token,id_users) VALUES ('$token','$user_id')";
		$result_token = mysqli_query($dbc, $query_token) or die('can\'t send token to Data base');
		$query_test = "INSERT INTO quiz(id_users) VALUES ('$user_id')";
		$result_test = mysqli_query($dbc, $query_test) or die('can\'t send data to Data base');
		
		$_SESSION['web_main_session'] = $token;
	}
	echo json_encode(['error' => 'Success']);
}
mysqli_close($dbc);
?>