<?php
error_reporting(0);
session_start();
$main_url = 'sql-main.php';
$dbc = mysqli_connect('localhost','root','','sql_tutorial') or die('No connection with Data base');

if(isset($_COOKIE['sql_main_session'])) {
	$token = $_COOKIE['sql_main_session'];
	$query_main = "SELECT id_users, token FROM token_sql WHERE token = '$token'";
	$result_main = mysqli_query($dbc, $query_main) or die ('Error in query');

	if (mysqli_num_rows($result_main) == 1) {
		while($row_user_id = mysqli_fetch_array($result_main)) {
			$user_id = $row_user_id[0];
			header('Location: ' .$main_url);
		}
	}
}
else if(isset($_SESSION['sql_main_session'])) {
	$token = $_SESSION['sql_main_session'];
	$query_main = "SELECT id_users, token FROM token_sql WHERE token = '$token'";
	$result_main = mysqli_query($dbc, $query_main) or die ('Error in query');

	if (mysqli_num_rows($result_main) == 1) {
		while($row_user_id = mysqli_fetch_array($result_main)) {
			$user_id = $row_user_id[0];
			header('Location: ' .$main_url);
		}
	}
}
mysqli_close($dbc);
?>