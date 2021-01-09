<?php

error_reporting(0);
$dbc = mysqli_connect('localhost','root','','sql_tutorial') or die('No connection with Data base');

$email = mysqli_real_escape_string($dbc, trim($_POST['email']));
$password = mysqli_real_escape_string($dbc, trim($_POST['password']));
$remember = mysqli_real_escape_string($dbc, trim($_POST['remember']));

$query_login_pwd = "SELECT id, email, password FROM users WHERE email = '$email' AND password = SHA('$password')";
$result_login_pwd = mysqli_query($dbc, $query_login_pwd) or die ('Error in query');

if (mysqli_num_rows($result_login_pwd) == 1) {
	$credentials_correct = 'true';
	while($id_login_pwd = mysqli_fetch_array($result_login_pwd)) $user_id = $id_login_pwd[0];
}	
else $credentials_correct = 'false';


if (empty($email) || empty($password)) echo json_encode(['error' => 'Can\'t be blank']); 
else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) echo json_encode(['error' => 'Incorrect email']);
else if ($credentials_correct === 'false') echo json_encode(['error' => 'Wrong credentials']);

else {
	if ($remember == 'true') {
		function generateRandomString($length = 80) {
		    return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
		}
		$token =  generateRandomString();

		$query_token = "UPDATE token_sql SET token = '$token' WHERE id_users = '$user_id'";
		$result_token = mysqli_query($dbc, $query_token) or die('can\'t send token to Data base');
		
		setcookie('sql_main_session', $token, time() + (60 * 60 * 24 * 180),"/; SameSite=Strict;");
	}
	else {
		setcookie( "sql_main_session", "", time()-60, "/","", 0);
		session_start();
		
		function generateRandomString($length = 80) {
		    return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
		}
		$token =  generateRandomString();

		$query_token = "UPDATE token_sql SET token = '$token' WHERE id_users = '$user_id'";
		$result_token = mysqli_query($dbc, $query_token) or die('can\'t send token to Data base');

		$_SESSION['sql_main_session'] = $token;
	}
	echo json_encode(['error' => 'Success']);
}
mysqli_close($dbc);
?>