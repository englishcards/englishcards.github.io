<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet">
	<style>body {background-image: url(bg.png); background-size: cover;}div {width: 250px; position: fixed; bottom: 0; right: 0;  padding: 20px;} span {display: block;font-size: 20px; text-align: center;} button{display: block; margin: 20px auto 0;width: 120px; padding: 10px;border: none;border-radius: 4px;color: transparent;font-size: 18px;background: rgb(125, 220, 248);cursor: pointer;}</style>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "words";
$induction = mysqli_connect($servername, $username, $password, $dbname);
if($induction == false) echo "Something wrong";

$rand = rand(1,102);

$result1 = mysqli_query($induction,"SELECT russian FROM `words` WHERE id = $rand");
$result2 = mysqli_query($induction,"SELECT english FROM `words` WHERE id = $rand");
$result3 = mysqli_query($induction,"SELECT transcription FROM `words` WHERE id = $rand");
?>
</head>
<body>	
	<div>
		<span title="<?php echo mysqli_fetch_assoc($result2)['english']; ?> <?php echo mysqli_fetch_assoc($result3)['transcription']; ?>"><?php echo mysqli_fetch_assoc($result1)['russian']; ?></span>
		<button>Go</button>
		
</div>
	
</div>
<script type="text/javascript">
	document.querySelector('button').onclick = () => location.reload();
</script>				
</body>
</html>
