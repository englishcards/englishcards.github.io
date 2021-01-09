<?php
error_reporting(0);
session_start();
$guest_url = '../../sql.php';

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

	$query_all_test = "SELECT test_1, test_2, test_time, test_practice, test_practice_2 FROM quiz WHERE id_users = '$user_id'";
	$data = mysqli_query($dbc,$query_all_test) or die('can\t get data drom data base');
	while($row_data = mysqli_fetch_array($data)) {
			$test_1 = $row_data[0];
			$test_2 = $row_data[1];
			$test_time = $row_data[2];
			$test_practice = $row_data[3];
			$test_practice_2 = $row_data[4];
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
	}

	$query_all_test = "SELECT test_1, test_2, test_time, test_practice, test_practice_2 FROM quiz WHERE id_users = '$user_id'";
	$data = mysqli_query($dbc,$query_all_test) or die('can\t get data drom data base');
	while($row_data = mysqli_fetch_array($data)) {
			$test_1 = $row_data[0];
			$test_2 = $row_data[1];
			$test_time = $row_data[2];
			$test_practice = $row_data[3];
			$test_practice_2 = $row_data[4];
	}	
}
if(!isset($_COOKIE['sql_main_session']) && !isset($_SESSION['sql_main_session'])) header('Location: ' .$guest_url);

if(isset($_POST['test-result1']) && $_POST['test-result1'] > $test_1) {
	$test_result = $_POST['test-result1'];
	$query_test_result = "UPDATE quiz SET test_1=$test_result WHERE id_users = '$user_id'";
	$result = mysqli_query($dbc, $query_test_result) or die('can\'t send data to Data base');
}

if(isset($_POST['test-result2']) && $_POST['test-result2'] > $test_2) {
	$test_result2 = $_POST['test-result2'];
	$query_test_result = "UPDATE quiz SET test_2=$test_result2 WHERE id_users = '$user_id'";
	$result = mysqli_query($dbc, $query_test_result) or die('can\'t send data to Data base');
}

if(isset($_POST['test-result3']) && $_POST['test-result3'] > $test_time) {
	$test_result3 = $_POST['test-result3'];
	$query_test_result = "UPDATE quiz SET test_time=$test_result3 WHERE id_users = '$user_id'";
	$result = mysqli_query($dbc, $query_test_result) or die('can\'t send data to Data base');
}

if(isset($_POST['test-result4']) && $_POST['test-result4'] > $test_practice) {
	$test_result4 = $_POST['test-result4'];
	$query_test_result = "UPDATE quiz SET test_practice=$test_result4 WHERE id_users = '$user_id'";
	$result = mysqli_query($dbc, $query_test_result) or die('can\'t send data to Data base');
}

if(isset($_POST['test-result5']) && $_POST['test-result5'] > $test_devtools) {
	$test_result5 = $_POST['test-result5'];
	$query_test_result = "UPDATE quiz SET test_practice_2=$test_result5 WHERE id_users = '$user_id'";
	$result = mysqli_query($dbc, $query_test_result) or die('can\'t send data to Data base');
}

mysqli_close($dbc);
?>