<?php

include ('connect.php');

if(isset($_POST['login']))
{
	try{

		// verificar campos vacios
		if(empty($_POST['username'])){
			throw new Exception("Se requiere el nombre de usuario!");
			
		}
		if(empty($_POST['password'])){
			throw new Exception("Se requiere la contraseña!");
			
		}

		$consulta = "SELECT COUNT(*) as contar, id_rol as id_rol, id as id FROM admininfo WHERE username = '$_POST[username]' AND password = '$_POST[password]'";
		$resultado=mysqli_query($conexion,$consulta);
		$array = mysqli_fetch_array($resultado);
		/* echo $consulta."<br>";
		echo "CONTAR:".$array['contar'];
		echo "id_rol:".$array['id_rol'];
		exit; */
		if($array['contar'] > 0){
			session_start();
			$_SESSION['username'] = $_POST['username'];
			$_SESSION['id_rol'] = $array['id_rol'];
			$_SESSION['id_usuario'] = $array['id'];
			if($array['id_rol'] == 1){
				header("location: admin/index.php");
			}
			elseif($array['id_rol'] == 2) {
				header("location: jefe_obra/index.php");
			}
		}else{
			throw new Exception("Usuario o contrase&ntilde;a incorrectos, intentalo de nuevo!!");
			#header("location: index.php");
			}
		
		//login
		// $row=0;
		// $result=mysqli_query($conexion,"select * from admininfo where username='$_POST[username]' and password='$_POST[password]'");

		// $row=mysqli_num_rows($result);
		// echo $row;

		// if($row>0 && $_POST["type"] == 'admin'){
		// 	session_start();
		// 	$_SESSION['name']="admin";
		// 	echo "<script> alert('".$row."'); </script>";
		// 	header('location: admin/index.php');
		// }
		
		// elseif($row>0 && $_POST["type"] == 'jefe_obra'){
		// 	session_start();
		// 	$_SESSION['name']="jefe_obra";
		// 	header('location: jefe_obra/index.php');
		// }

		// else{
		// 	throw new Exception("Usuario o contraseña incorrectos, intentalo de nuevo!!");
			
		// 	header('location: login.php');
		// }
	}

	catch(Exception $e){
		$error_msg=$e->getMessage();
	}
	//end of try-catch
}

?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv=”Content-Type” content=”text/html; charset=UTF-8″ />

	<title>Gesti&oacuten y control de asistencia</title>
	<!-- <link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/es/img/favicon.ico?v=a8def514be8a"> -->

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">	
	 
	<!-- <link rel="stylesheet" href="./css/styles.css" > -->
	<link rel="stylesheet" href="./css/index.css" >
	 

</head>

<body>
	<center>
<div class="fondo">
	<div class="wrapper fadeInDown">
	<h1>Control y gesti&oacute;n de Asistencia</h1>

	<?php
	if(isset($error_msg))
	{
		echo $error_msg;
	}
	?>
	<div id="formContent">
		<!-- Tabs Titles -->

		<!-- Icon -->
		<div class="fadeIn first">
		<!-- <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> -->
		</div>

		<!-- Login Form -->
		<form method="post">
		<input type="text" id="login" class="fadeIn second" name="username" placeholder="Ingrese su nombre de usuario">
		<input type="text" id="password" class="fadeIn third" name="password" placeholder="Ingrese su contrase&ntilde;a">
		<input type="submit" class="fadeIn fourth" value="Entrar" name="login">
		</form>

		<!-- Remind Passowrd -->
		<!-- <div id="formFooter">
		<a class="underlineHover" href="#">Forgot Password?</a>
		</div> -->

	</div>
	</div>
</div>


<!-- <br><br>
<p><strong>¿Olvidaste tu contraseña? <a href="reset.php">Recuperala aquí</a></strong></p>
<p><strong>Si no tienes una cuenta, <a href="signup.php">Registrate</a> aquí</strong></p>
 -->
</center>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
<script>
	x = document.querySelector('#password');
x.setAttribute("type", "password");
</script>
</body>
</html>