<?php
error_reporting(0);
session_start();
$guest_url = 'sql.php';

$dbc = mysqli_connect('localhost','root','','sql_tutorial') or die('No connection with Data base');

if(isset($_COOKIE['sql_main_session'])) {
	session_destroy();
	$token = $_COOKIE['sql_main_session'];
	$query_main = "SELECT id_users, token FROM token_sql WHERE token = '$token'";
	$result_main = mysqli_query($dbc, $query_main) or die ('Error in query');

	if (mysqli_num_rows($result_main) !== 1) header('Location: ' .$guest_url);
	else {
		while($row_user_id = mysqli_fetch_array($result_main)) $user_id = $row_user_id[0];
	}

	$query_name = "SELECT first_name FROM users WHERE id = '$user_id'";
	$result_name = mysqli_query($dbc, $query_name) or die ('Error in query');
	while($row_user_name = mysqli_fetch_array($result_name)) $user_name = $row_user_name[0];
}
else if(isset($_SESSION['sql_main_session'])) {
	setcookie( "sql_main_session", "", time()-60, "/","", 0);
	$token = $_SESSION['sql_main_session'];
	$query_main = "SELECT id_users, token FROM token_sql WHERE token = '$token'";
	$result_main = mysqli_query($dbc, $query_main) or die ('Error in query');

	if (mysqli_num_rows($result_main) !== 1) header('Location: ' .$guest_url);
	else {
		while($row_user_id = mysqli_fetch_array($result_main)) $user_id = $row_user_id[0];
	}
	$query_name = "SELECT first_name FROM users WHERE id = '$user_id'";
	$result_name = mysqli_query($dbc, $query_name) or die ('Error in query');
	while($row_user_name = mysqli_fetch_array($result_name)) $user_name = $row_user_name[0];
}
if(!isset($_COOKIE['sql_main_session']) && !isset($_SESSION['sql_main_session'])) header('Location: ' .$guest_url);

mysqli_close($dbc);
?>