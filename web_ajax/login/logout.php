<?php
error_reporting(0);
$guest_url = '../web.php';
if(isset($_COOKIE['web_main_session'])) {
	setcookie( "web_main_session", "", time()- 60, "/","", 0);
	header('Location: ' .$guest_url);
}
else {
	session_start();
	$_SESSION = array();
	session_destroy();
	header('Location: ' .$guest_url);
}

?>
