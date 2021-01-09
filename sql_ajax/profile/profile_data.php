<?php
error_reporting(0);
session_start();
$guest_url = '../sql.php';

$dbc = mysqli_connect('localhost','root','','sql_tutorial') or die('No connection with Data base');

if(isset($_COOKIE['sql_main_session'])) {
	session_destroy();
	$token = $_COOKIE['sql_main_session'];
	$query_main = "SELECT id_users, token FROM token_sql WHERE token = '$token'";
	$result_main = mysqli_query($dbc, $query_main) or die ('Error in query');

	if (mysqli_num_rows($result_main) !== 1) header('Location: ' .$guest_url);
	else {
		while($row_user_id = mysqli_fetch_array($result_main)) $user_id = $row_user_id[0];

		$query_profile = "SELECT first_name, last_name, email FROM users WHERE id = '$user_id'";
		$result_profile = mysqli_query($dbc, $query_profile) or die ('Error in query');
		while($row_data = mysqli_fetch_array($result_profile)) {
			$first_name = $row_data[0];
			$last_name = $row_data[1];
			$email = $row_data[2];
		}
	}
}
else if(isset($_SESSION['sql_main_session'])) {
	setcookie( "sql_main_session", "", time()-60, "/","", 0);
	$token = $_SESSION['sql_main_session'];
	$query_main = "SELECT id_users, token FROM token_sql WHERE token = '$token'";
	$result_main = mysqli_query($dbc, $query_main) or die ('Error in query');

	if (mysqli_num_rows($result_main) !== 1) header('Location: ' .$guest_url);
	else {
		while($row_user_id = mysqli_fetch_array($result_main)) $user_id = $row_user_id[0];

		$query_profile = "SELECT first_name, last_name, email FROM users WHERE id = '$user_id'";
		$result_profile = mysqli_query($dbc, $query_profile) or die ('Error in query');
		while($row_data = mysqli_fetch_array($result_profile)) {
			$first_name = $row_data[0];
			$last_name = $row_data[1];
			$email = $row_data[2];
		}
	}
}
if(!isset($_COOKIE['sql_main_session']) && !isset($_SESSION['sql_main_session'])) header('Location: ' .$guest_url);

mysqli_close($dbc);
?>