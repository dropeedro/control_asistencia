<?php

include('../connect.php');

$query = $conexion->query("SELECT * FROM obras");

echo '<option value="0">Seleccione</option>';

while ( $row = $query->fetch_assoc() )
{
	echo '<option value="' . $row['id_obra']. '">' . $row['nombre_obra'] . '</option>' . "\n";
}