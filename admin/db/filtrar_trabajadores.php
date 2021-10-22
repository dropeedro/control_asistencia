<?php

include('../connect.php');

$obra = $_POST['obra'];

$query = $conexion->query("SELECT * FROM trabajadores WHERE tr_obra = $obra");

echo '<option value="0">Seleccione</option>';

while ( $row = $query->fetch_assoc() )
{
	echo '<option value="' . $row['tr_id']. '">' . ucfirst($row['tr_nombre']) . '</option>' . "\n";
}
