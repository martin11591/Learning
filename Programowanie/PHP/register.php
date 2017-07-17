<?php

	session_start();
	
	function alert($msg)
	{
		echo '<script type="text/javascript">alert("'.$msg.'")</script>';
	}
	
	if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] == true)
	{
		header("Location: main.php");
		exit();
	}
	
?>

<!DOCTYPE HTML>
<html lang="pl">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>Hotel - logowanie</title>
	</head>
	
	<body>
	
	<form action="login.php" method="post">
	  Login:<br />
		<input type="text" name="login" <?php if (isset($_SESSION['usedLogin'])) echo 'value="'.$_SESSION['usedLogin'].'"'; ?> />
		<?php
		
			if (isset($_SESSION['loginError']) && $_SESSION['loginError'] == true) echo 'Login <i>'.$_SESSION['usedLogin'].'</i> nie istnieje.';
			
		?>
		<br />
		Hasło:<br />
		<input type="password" name="pass" />
		<?php
		
			if (isset($_SESSION['passError']) && $_SESSION['passError'] == true) echo 'Hasło jest nieprawidłowe.';
		
		?>
		<br />
		<br />
		<input type="submit" value="Zaloguj" />
		<br />
		<br />
		<?php
		
			if (isset($_SESSION['connectionError']) && $_SESSION['connectionError'] == true) echo 'Problem z połączeniem (kod '.$_SESSION['connectionErrorNo'].')';
		
		?>
	</form>
	
	</body>
</html>