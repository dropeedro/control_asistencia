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
			throw new Exception("Usuario o contraseña incorrectos, intentalo de nuevo!!");
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

	<title>Gestión y control de asistencia</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<!-- Latest compiled and minified CSS -->
	<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" > -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	 
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
	 
	<link rel="stylesheet" href="styles.css" >
	 
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

</head>

<body>
	<center>

<header>

  <h1>Control y gesti&oacute;n de Asistencia</h1>

</header>

<h1>Inicia Sesi&oacute;n: </h1>

<?php
if(isset($error_msg))
{
	echo $error_msg;
}
?>

<div class="content">
	<div class="row">

		<form method="post" class="form-horizontal col-md-6 col-md-offset-3">
			<div class="form-group">
			    <label for="input1" class="col-sm-3 control-label">Nombre de Usuario: </label>
			    <div class="col-sm-7">
			      <input type="text" name="username"  class="form-control" id="input" placeholder="Escribe tu nombre de usuario" />
			    </div>
			</div>

			<div class="form-group">
			    <label for="input1" class="col-sm-3 control-label">Contrase&ntilde;a: </label>
			    <div class="col-sm-7">
			      <input type="password" name="password"  class="form-control" id="input1" placeholder="Escribe tu contrase&ntilde;a" />
			    </div>
			</div>


			<input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Entrar" name="login" />
		</form>
	</div>
</div>



<!-- <br><br>
<p><strong>¿Olvidaste tu contraseña? <a href="reset.php">Recuperala aquí</a></strong></p>
<p><strong>Si no tienes una cuenta, <a href="signup.php">Registrate</a> aquí</strong></p>
 -->
</center>
</body>
</html>