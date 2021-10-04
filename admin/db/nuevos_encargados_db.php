<?php

include_once ('connect.php');
//data insertion
  // try{

    if(isset($_POST['nuevo_tr'])){

     //insertar nuevo encargado
      
     $obras = $_POST['obra'];

     $consulta = mysqli_query($conexion, "INSERT INTO admininfo (id, nombre, apellido, username, `password`, email, telefono, id_rol) VALUES (NULL, '$_POST[nombre]', '$_POST[apellido]', '$_POST[username]', '$_POST[password]', '$_POST[email]', '$_POST[telefono]', '2')");

     echo "INSERT INTO admininfo (id, nombre, apellido, username, password, email, telefono, id_rol) VALUES (NULL, '$_POST[nombre]', '$_POST[apellido]', '$_POST[username]', '$_POST[password]', '$_POST[email]', '$_POST[telefono]', '2')";

     $id_encargado = mysqli_insert_id($conexion);

      foreach ($obras as $o) {
        $consulta2 = mysqli_query($conexion, "INSERT INTO encargado_obra(obra, responsable) VALUES('$o', '$id_encargado' )");
        echo "INSERT INTO encargado_obra(obra, responsable) VALUES('$o', '$id_encargado' )".'<br>';
      }
        
        $att_msg = "Encargado registrado.";
            echo'<script type="text/javascript">
            alert("Trabajador '.$_POST['nombre'].' '.$_POST['apellido'].' Agregado correctamente a la obra");
            window.location.href="../nuevos_encargados.php";
                 </script>';
    }
  // }
  // catch(Execption $e){
  //   $error_msg =$e->getMessage();
  // }
