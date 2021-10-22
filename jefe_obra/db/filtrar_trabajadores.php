<?php

include('../connect.php');

session_start();

$usuario = $_SESSION['username'];
$id_usuario = $_SESSION['id_usuario'];

echo "SELECT admininfo.* FROM admininfoWHERE username='$usuario' AND admininfo.id='$id_usuario'";
$consulta = "SELECT admininfo.* FROM admininfo, encargado_obra WHERE username='$usuario' AND admininfo.id='$id_usuario' AND encargado_obra.responsable = admininfo.id";
$resultado=mysqli_query($conexion,$consulta);
$array = mysqli_fetch_array($resultado);


$_SESSION['id_rol'] = $array['id_rol'];
$_SESSION['nombre'] = $array['nombre'];
$_SESSION['apellido'] = $array['apellido'];
$_SESSION['id_usuario'] = $array['id'];

$obra = $_POST['obra'];

$query = $conexion->query("SELECT e.*, o.nombre_obra as nombre_obra, t.* FROM encargado_obra e, obras o, trabajadores t WHERE responsable = '$id_usuario' AND o.id_obra = e.obra AND t.tr_obra = e.obra");

echo '<option value="0">Seleccione</option>';

while ( $row = $query->fetch_assoc() )
{
	echo '<option value="' . $row['tr_id']. '">' . ucfirst($row['tr_nombre']) . '</option>' . "\n";
}
