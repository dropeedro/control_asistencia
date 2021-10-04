<?php

include '../connect.php';

session_start();

$usuario = $_SESSION['username'];
$id_usuario = $_SESSION['id_usuario'];

// $consulta = "SELECT admininfo.*, encargado_obra.* FROM admininfo, encargado_obra WHERE username='$usuario' AND id='$id_usuario' AND encargado_obra.responsable = admininfo.id";
// echo "SELECT admininfo.*, encargado_obra.* FROM admininfo, encargado_obra WHERE username='$usuario' AND admininfo.id='$id_usuario' AND encargado_obra.responsable = admininfo.id";
$consulta = "SELECT admininfo.*, encargado_obra.* FROM admininfo, encargado_obra WHERE username='$usuario' AND admininfo.id='$id_usuario' AND encargado_obra.responsable = admininfo.id;";
$resultado=mysqli_query($conexion,$consulta);
$array = mysqli_fetch_array($resultado);

$_SESSION['id_rol'] = $array['id_rol'];
$_SESSION['nombre'] = $array['nombre'];
$_SESSION['apellido'] = $array['apellido'];
$_SESSION['obra'] = $array['obra'];

$id_rol = $_SESSION['id_rol'];
$nombre = $_SESSION['nombre'];
$apellido = $_SESSION['apellido'];
$obra_asignada = $_SESSION['obra'];




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

.row:before, .row:after {display: none !important;}

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
          <li><a href="obras.php">Obras</a></li>
          <li><a href="asistencia.php">Asistencia</a></li>
          <li><a href="reportes.php">Reportes</a></li>
				<li><a href="#">Trabajadores</a>
					<ul class="submenu">
              <li><a href="trabajadores.php">Lista Trabajadores</a></li>
              <li><a href="nuevos.php">Nuevo Trabajador</a></li>
              <li><a href="editar.php">Editar Trabajador</a></li>
					</ul>
				</li>
        <li><a href="#">Encargados</a>
					<ul class="submenu">
              <li><a href="nuevos_encargados.php">Nuevos Encargados</a></li>
              <li><a href="editar_encargados.php">Editar Encargados</a></li>
					</ul>
				</li>
        <li><a href="../logout.php">Salir</a>
			</ul>
		</nav>
</div>

</header>

<?php } ?>
