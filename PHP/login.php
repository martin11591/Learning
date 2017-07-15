<?php

	session_start();
	
	if (isset($_SESSION['loggedIn']) && ($_SESSION['loggedIn'] == true))
	{
		header("Location: main.php");
		exit();
	}
	
	if (!isset($_POST['login']) || (!isset($_POST['pass'])))
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
		<title>Hotel - logowanie</title>
	</head>
	
	<body>
	
	<?php
		
		require_once "connect.php";
		
		$loginConnection = @new mysqli($host, $dbUser, $dbPass, $dbName);
		
		if ($loginConnection->connect_errno != 0)
		{
			$_SESSION['connectionError'] = true;
			$_SESSION['connectionErrorNo'] = $loginConnection->connect_errno;
			header("Location: index.php");
		} else
		{
			
			$login = $_POST['login'];
			$pass = $_POST['pass'];

			$login = htmlentities($login, ENT_QUOTES, "UTF-8");
			$pass = htmlentities($pass, ENT_QUOTES, "UTF-8");

			$queryLoginAndPass = sprintf("SELECT * FROM accounts WHERE login='%s' AND pass='%s'", mysqli_real_escape_string($loginConnection, $login), mysqli_real_escape_string($loginConnection, $pass));
			$queryMailAndPass = sprintf("SELECT * FROM accounts WHERE mail='%s' AND pass='%s'", mysqli_real_escape_string($loginConnection, $login), mysqli_real_escape_string($loginConnection, $pass));
			$queryLoginOrMail = sprintf("SELECT * FROM accounts WHERE login='%s' OR mail='%s'", mysqli_real_escape_string($loginConnection, $login), mysqli_real_escape_string($loginConnection, $login));
			
			if ($queryResult = @$loginConnection->query($queryLoginAndPass))
			{
				$queryResultCount = $queryResult->num_rows;
				if ($queryResultCount > 0)
				{
					$queryRow = $queryResult->fetch_assoc();
					$_SESSION['loggedIn'] = true;
					$_SESSION['loggedDataRow'] = $queryRow;
					$_SESSION['loginError'] = false;
					$_SESSION['passError'] = false;
					$_SESSION['connectionError'] = false;
					unset($_SESSION['loginError']);
							unset($_SESSION['usedLogin']);
					unset($_SESSION['passError']);
					unset($_SESSION['connectionError']);
					unset($_SESSION['connectionErrorNo']);
					header("Location: main.php");
				} else
				{
					if ($queryResult = @$loginConnection->query($queryMailAndPass))
					{
						$queryResultCount = $queryResult->num_rows;
						if ($queryResultCount > 0)
						{
							$queryRow = $queryResult->fetch_assoc();
							$_SESSION['loggedIn'] = true;
							$_SESSION['loggedDataRow'] = $queryRow;
							$_SESSION['loginError'] = false;
							$_SESSION['passError'] = false;
							$_SESSION['connectionError'] = false;
							unset($_SESSION['loginError']);
							unset($_SESSION['usedLogin']);
							unset($_SESSION['passError']);
							unset($_SESSION['connectionError']);
							unset($_SESSION['connectionErrorNo']);
							header("Location: main.php");
						} else
						{
							if ($queryResult = @$loginConnection->query($queryLoginOrMail))
							{
								$queryResultCount = $queryResult->num_rows;
								if ($queryResultCount > 0)
								{
									$_SESSION['loginError'] = false;
									$_SESSION['usedLogin'] = $login;
									$_SESSION['passError'] = true;
									$_SESSION['connectionError'] = false;
									unset($_SESSION['loginError']);
									unset($_SESSION['connectionError']);
									unset($_SESSION['connectionErrorNo']);
									header("Location: index.php");
								} else
								{
									$_SESSION['loginError'] = true;
									$_SESSION['usedLogin'] = $login;
									$_SESSION['passError'] = true;
									$_SESSION['connectionError'] = false;
									unset($_SESSION['connectionError']);
									unset($_SESSION['connectionErrorNo']);
									header("Location: index.php");
								}
							}
						}
					}
				}
			}
			$loginConnection->close();
		}

	?>
	
	</body>
</html>