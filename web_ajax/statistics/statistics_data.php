<?php
error_reporting(0);
session_start();
$guest_url = '../web.php';

$dbc = mysqli_connect('localhost','root','','web') or die('No connection with Data base');

if(isset($_COOKIE['web_main_session'])) {
	session_destroy();
	$token = $_COOKIE['web_main_session'];
	$query_main = "SELECT id_users, token FROM token_web WHERE token = '$token'";
	$result_main = mysqli_query($dbc, $query_main) or die ('Error in query');

	if (mysqli_num_rows($result_main) !== 1) header('Location: ' .$guest_url);
	else {
		while($row_user_id = mysqli_fetch_array($result_main)) $user_id = $row_user_id[0];
	}

	$query_all_test = "SELECT test_1, test_2, test_time, test_practice, test_devtools FROM quiz WHERE id_users = '$user_id'";
	$data = mysqli_query($dbc,$query_all_test) or die('can\t get data drom data base');
	while($row_data = mysqli_fetch_array($data)) {
			$test_1 = $row_data[0];
			$test_2 = $row_data[1];
			$test_time = $row_data[2];
			$test_practice = $row_data[3];
			$test_devtools = $row_data[4];
	}		
}
else if(isset($_SESSION['web_main_session'])) {
	setcookie( "web_main_session", "", time()-60, "/","", 0);
	$token = $_SESSION['web_main_session'];
	$query_main = "SELECT id_users, token FROM token_web WHERE token = '$token'";
	$result_main = mysqli_query($dbc, $query_main) or die ('Error in query');

	if (mysqli_num_rows($result_main) !== 1) header('Location: ' .$guest_url);
	else {
		while($row_user_id = mysqli_fetch_array($result_main)) $user_id = $row_user_id[0];
	}
}
if(!isset($_COOKIE['web_main_session']) && !isset($_SESSION['web_main_session'])) header('Location: ' .$guest_url);


$query = "SELECT u.html, u.css, q.test_1, q.test_2, q.test_time, q.test_practice, q.test_devtools FROM users u JOIN quiz q ON u.id=q.id_users WHERE u.id = '$user_id'";
$data = mysqli_query($dbc,$query) or die('can\t get data drom data base');

while($row_data = mysqli_fetch_array($data)) {
	$html_task = $row_data[0];
	$css_task = $row_data[1];
	$test_1 = $row_data[2];
	$test_2 = $row_data[3];
	$test_time = $row_data[4];
	$test_practice = $row_data[5];
	$test_devtools = $row_data[6];
}

modify_result($test_1);
modify_result($test_2);
modify_result($test_time);
modify_result($test_practice);
modify_result($test_devtools);

function modify_result(&$item) {
	if($item >= 80) $item = '+';
	else $item = '-';
}

mysqli_close($dbc);
?>