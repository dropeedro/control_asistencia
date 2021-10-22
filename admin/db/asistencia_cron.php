<?php
//  require_once "../vista/vista_superior.php" ;
//  include_once ('./connect.php');
$conexion = mysqli_connect('srv26.cpanelhost.cl','cco66325_root','itemizado1234','cco66325_asistencia') or die('ERROR AL CONECTAR AL SERVIDOR!:(');
 date_default_timezone_set('America/Santiago');
// echo $id_usuario.'<br>';

//  $sql = mysqli_query($conexion, "INSERT INTO algo(nombre,fecha) VALUES('pedro', NOW())" );

//  $info_tr = mysqli_query($conexion,"SELECT * FROM trabajadores WHERE tr_tipo_sueldo = 2");
 $info_tr = mysqli_query($conexion,"SELECT * FROM trabajadores WHERE tr_tipo_sueldo = 2");
 while ($i = mysqli_fetch_array($info_tr)) {
    $sql = mysqli_query($conexion, "INSERT INTO asistencia(tr_id,obra,estado,fecha) VALUES('$i[tr_id]', '$i[tr_obra]','Presente', NOW())" );
    // if($sql){
    //     echo 'bien: ';
    // }
   //  echo $i['tr_nombre'].' : '.$i['tr_obra'].'<br>';
    // echo $i['nombre'].' : '.$i['email'];
 }

 $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
 $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

 $info_jefe = mysqli_query($conexion,"SELECT * FROM admininfo WHERE id_rol = 1");
 while ($i = mysqli_fetch_array($info_jefe)) {    
        $to = $i['email'];
        $subject = "Asistencia Registrada";
        $message = "Asistencia del dia ". $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y'). 'registrada correctamente';
 
mail($to, $subject, $message);
    echo $i['nombre'].' : '.$i['email'].'<br>';
 }

 ?>
