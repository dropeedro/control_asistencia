<?php

include('../connect.php');

session_start();

$usuario = $_SESSION['username'];

$consulta = "SELECT * FROM admininfo WHERE username='$usuario'";
$resultado=mysqli_query($conexion,$consulta);
$array = mysqli_fetch_array($resultado);

$_SESSION['id_rol'] = $array['id_rol'];
$_SESSION['nombre'] = $array['nombre'];
$_SESSION['apellido'] = $array['apellido'];
$_SESSION['id_usuario'] = $array['id'];

$id_rol = $_SESSION['id_rol'];
$nombre = $_SESSION['nombre'];
$apellido = $_SESSION['apellido'];
$id_usuario = $_SESSION['id_usuario'];

$obra = $_POST['obra'];

$query = $conexion->query("select obras.*, admininfo.*, trabajadores.* from obras, admininfo, trabajadores WHERE obras.id_obra = admininfo.obra_asignada AND trabajadores.tr_obra = obras.id_obra AND admininfo.id = '$id_usuario' ");

echo '<option value="0">Seleccione</option>';

while ( $row = $query->fetch_assoc() )
{
	echo '<option value="' . $row['tr_id']. '">' . $row['tr_nombre'] . '</option>' . "\n";
}
