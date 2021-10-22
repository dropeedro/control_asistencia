<?php 

include_once ('./connect.php');

$tr_id = $_POST['tr_id'];
$obra = $_POST['tr_obra'];
$anticipo = $_POST['anticipo'];

date_default_timezone_set('America/Santiago');
$fecha = date('Y-m-d');
$hora = date('H:i:s');
echo $fecha;
echo '<br>';
echo $hora;
echo '<br>';

$cadena = "INSERT INTO anticipos(tr_id,obra_id,anticipo,fecha,hora) VALUES ";
for ($i=0; $i < count($tr_id); $i++) { 
    // echo $tr_id[$i].','.$obra[$i].','.$anticipo[$i].'<br>';
    $cadena .="('".$tr_id[$i]."','".$obra[$i]."','".$anticipo[$i]."','".$fecha."','".$hora."'),";
}

$cadena_final = substr($cadena,0,-1);
echo $cadena.'<br>';
echo $cadena_final;

$guardar = mysqli_query($conexion,$cadena_final);
