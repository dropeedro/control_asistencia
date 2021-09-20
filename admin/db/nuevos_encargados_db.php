<?php

include_once ('connect.php');
//data insertion
  try{

    if(isset($_POST['nuevo_tr'])){

      //insertar nuevo encargado

        $consulta = mysqli_query($conexion, "INSERT INTO `admininfo` (`id`, `nombre`, `apellido`, `username`, `password`, `email`, `telefono`, `id_rol`, `obra_asignada`) VALUES (NULL, '$_POST[nombre]', '$_POST[apellido]', '$_POST[username]', '$_POST[password]', '$_POST[email]', '$_POST[telefono]', '2', '$_POST[obra]')");
        $success_msg = "Encargado agregado correctamente.";
        
        #echo $consulta."<br>";
        #exit; 

        $att_msg = "Encargado registrado.";
            echo'<script type="text/javascript">
            alert("Trabajador '.$_POST['nombre'].' Agregado correctamente a la obra");
            window.location.href="../nuevos_encargados.php";
                 </script>';
    }
  }
  catch(Execption $e){
    $error_msg =$e->getMessage();
  }
