<?php

	session_start();
	
	if (!isset($_SESSION['loggedIn']) || (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] != true))
	{
		header("Location: index.php");
		exit();
	}
	
?>
<!DOCTYPE HTML>
<html lang="pl">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>Hotel - zalogowano</title>
	</head>
	
	<body>
	
	<?php
	
		$userLogin = $_SESSION['loggedDataRow']['login'];
		$userMail = $_SESSION['loggedDataRow']['mail'];
	
echo<<<END

		<p>Witaj, <b>$userLogin!</b>
		<br />
		Twój email: <b>$userMail</b>
		</p>
		
		<form action="logout.php" method="POST">
			<input type="submit" value="Wyloguj" />
		</form>

END;
	
	?>
	
	</body>
</html>