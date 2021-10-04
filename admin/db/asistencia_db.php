<?php
 include_once ('./connect.php');
  #Zona horaria
  date_default_timezone_set('America/Santiago');

  $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
  $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
   
  //echo $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') ;


    try{
      
    if(isset($_POST['att'])){

      $obra = $_POST['tr_obra'];

      foreach ($_POST['tr_estado'] as $i => $tr_estado) {
        
        $tr_id = $_POST['tr_id'][$i];
        $fecha = date('Y-m-d');
        $obra = $_POST['tr_obra'][$i];

        $verifica = mysqli_query($conexion,"SELECT EXISTS (SELECT *  FROM asistencia WHERE fecha='$fecha' AND obra = '$obra' AND tr_id = '$tr_id')");
        $row = mysqli_fetch_row($verifica);

        // $max_trabajadores = mysqli_query($conexion, "SELECT COUNT(*) as contar FROM `trabajadores` WHERE tr_obra = 1");
        // $row_tr = mysqli_fetch_array($max_trabajadores);

        // echo 'row: '.$row[0].'<br>';
        // echo 'row_tr: '.$row_tr['contar'];
        // exit;

        if($row[0] == "1" ){
          $att_msg = 'Ya registró la asistencia hoy, si desea hacer cambios comuniquese con su administrador.';
          echo'<script type="text/javascript">
            alert("Ya registró la asistencia hoy, si desea hacer cambios comuniquese con su administrador.");
            window.location.href="../index.php";
                 </script>';
        }
        else{
        
        $stat = mysqli_query($conexion, "insert into asistencia(tr_id,obra,estado,fecha) values('$tr_id','$obra','$tr_estado','$fecha')");
        
        $att_msg = "Asistencia Registrada.";
            echo'<script type="text/javascript">
            alert("Asistencia Registrada con exito!");
            window.location.href="../index.php";
                 </script>';
        //header("Refresh:0; url=index.php");
        }
      }

    }
  }
  catch(Exception $e){
    $error_msg = $e->$getMessage();
  }
 ?>
