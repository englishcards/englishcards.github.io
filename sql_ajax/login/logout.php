<?php
error_reporting(0);
$guest_url = '../sql.php';
if(isset($_COOKIE['sql_main_session'])) {
	setcookie( "sql_main_session", "", time()- 60, "/","", 0);
	header('Location: ' .$guest_url);
}
else {
	session_start();
	$_SESSION = array();
	session_destroy();
	header('Location: ' .$guest_url);
}

?>
