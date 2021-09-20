<?php

include_once ('./connect.php');

//data insertion
try{

    //checking if the data comes from students form
    if(isset($_POST['nueva_obra'])){

      //students data insertion to database table "students"
        $result = mysqli_query($conexion, "INSERT INTO obras(nombre_obra, direccion_obra, responsable_obra) values('$_POST[nombre]','$_POST[direccion]', '$_POST[responsable]')");
        $success_msg = "Obra creada correctamente.";
        $mensaje=  '<h1'.$result.'</h1>';

	
		$att_msg = "Obra Registrada.";
            echo'<script type="text/javascript">
            alert("Obra '.$_POST['nombre'].' registrada con éxito!");
            window.location.href="../obras.php";
                 </script>';

    }


  }
  catch(Execption $e){
    $error_msg =$e->getMessage();
  }

 ?>


