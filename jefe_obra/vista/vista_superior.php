<?php

include '../connect.php';

session_start();

$usuario = $_SESSION['username'];
$id_usuario = $_SESSION['id_usuario'];

echo "SELECT admininfo.* FROM admininfoWHERE username='$usuario' AND admininfo.id='$id_usuario'";
$consulta = "SELECT admininfo.* FROM admininfo, encargado_obra WHERE username='$usuario' AND admininfo.id='$id_usuario' AND encargado_obra.responsable = admininfo.id";
$resultado=mysqli_query($conexion,$consulta);
$array = mysqli_fetch_array($resultado);

// echo $array.'<br>';

$_SESSION['id_rol'] = $array['id_rol'];
$_SESSION['nombre'] = $array['nombre'];
$_SESSION['apellido'] = $array['apellido'];
$_SESSION['id_usuario'] = $array['id'];
// $_SESSION['obra'] = $array['obra'];
// $_SESSION['obra_asignada'] = $array['obra_asignada'];

$id_rol = $_SESSION['id_rol'];
$id_usuario = $_SESSION['id_usuario'];
$nombre = $_SESSION['nombre'];
$apellido = $_SESSION['apellido'];
// $obra = $_SESSION['obra'];
// $obra_asignada = $_SESSION['obra_asignada'];

if(!isset($usuario)){
  header("location: ../index.php");
}else{

?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="../css/main.css">
<style>

*{
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

body{
	background: #313D52;
}

header{
	width: 100%;
}

.navegacion{
	width: 1000px;
	margin: 30px auto;
	background: #333;
}

.navegacion ul{
	list-style: none;
}

.menu > li{
	position: relative;
	display: inline-block;
}

.menu > li > a{
	display: block;
	padding: 15px 20px;
	color: #fff;
	text-decoration: none;
}

.menu li a:hover{
	color: #CE7D35;
	transition: all .3s;
}

/* Submenu*/

.submenu{
	position: absolute;
	background: #333333;
	width: 120%;
	visibility: hidden;
	opacity: 0;
	transition: opacity 1.5s;
}

.submenu li a{
	display: block;
	padding: 15px;
	color: #fff;
	text-decoration: none;
}

.menu li:hover .submenu{
	visibility: visible;
	opacity: 1;
}

</style>

</head>

<header>

  <h1>Control de Asistencia</h1>
  
  <nav class="navegacion">
			<ul class="menu">
          <li><a href="index.php">Inicio</a></li>
          <!-- <li><a href="obras.php">Obras</a></li> -->
          <li><a href="asistencia.php">Asistencia</a></li>
          <li><a href="reportes.php">Reportes</a></li>
				<li><a href="#">Trabajadores</a>
					<ul class="submenu">
              <li><a href="trabajadores.php">Lista Trabajadores</a></li>
              <li><a href="nuevos.php">Nuevo Trabajador</a></li>
              <li><a href="editar.php">Editar Trabajador</a></li>
					</ul>
				</li>
        	<li><a href="ajustes.php">Ajustes</a>
        <li><a href="../logout.php">Salir</a>
			</ul>
		</nav>
</div>

</header>

<?php } ?>
