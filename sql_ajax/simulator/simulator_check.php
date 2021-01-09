<?php
error_reporting(0);
$dbc = mysqli_connect('localhost','user_top','','sqltrainer') or die('Error with con to Database');

$query_textarea = $_POST['user_query'];


$query = "$query_textarea";
$result = mysqli_query($dbc,$query) or die('can\t get data drom data base');
							
while($row_data = mysqli_fetch_assoc($result)) {
	$data[] = $row_data;
}

echo json_encode($data);

mysqli_close($dbc);
?>
