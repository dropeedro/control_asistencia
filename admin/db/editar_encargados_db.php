<?php

include_once ('connect.php');
try{

         //checking form data and empty fields
          if(isset($_POST['done'])){

          if (empty($_POST['nombre'])) {
            throw new Exception("El nombre no puede estar vacío");
            
          }
              if (empty($_POST['apellido'])) {
               
                throw new Exception("El apellido no puede estar vacia");
                
              }
                  if(empty($_POST['username']))
                  {
                    throw new Exception("El nombre de usuario no puede estar vacío");
                    
                  }
                      if(empty($_POST['password']))
                      {
                        throw new Exception("La contraseña no puede estar vacía");
                        
                      }
                      if(empty($_POST['telefono']))
                      {
                        throw new Exception("El telefono no puede estar vacío");
                        
                      }
                      if(empty($_POST['obra']))
                      {
                        throw new Exception("La obra no puede estar vacía");
                        
                      }
                      if($_POST['password'] != $_POST['password_confirmar'])
                      {
                        throw new Exception("Las contraseñas no coinciden, intentelo nuevamente");
                      }

  //según el id del encargado
  $encargado_id = $_POST['id_encargado'];

  //actualizar datos en base de datos
  // $result = mysqli_query($conexion, "update admininfo set 
  //                                     nombre='$_POST[nombre]',
  //                                     apellido='$_POST[apellido]',
  //                                     username='$_POST[username]', 
  //                                     password='$_POST[password]', 
  //                                     email='$_POST[email]',
  //                                     telefono='$_POST[telefono]',
  //                                     id_rol='$_POST[id_rol]',
  //                                     obra_asignada='$_POST[obra]',
  //                                     where id='$encargado_id'");

  $result = mysqli_query($conexion, "UPDATE `admininfo` SET 
                                    `nombre` = '$_POST[nombre]', 
                                    `apellido` = '$_POST[apellido]', 
                                    `username` = '$_POST[username]', 
                                    `password` = '$_POST[password]', 
                                    `email` = '$_POST[email]', 
                                    `telefono` = '$_POST[telefono]', 
                                    `obra_asignada` = '$_POST[obra]',
                                    `id_rol` = '$_POST[id_rol]'
                                    WHERE `admininfo`.`id` = $encargado_id")   ;                                   

  $success_msg = 'Información Actualizada correctamente';
  $att_msg = "Información Actualizada correctamente.";
  echo'<script type="text/javascript">
  alert("Información de '.$_POST['nombre'].', actualizada correctamente.");
  window.location.href="../nuevos_encargados.php";
       </script>';
  
  }

}
catch(Exception $e){

  $error_msg =$e->getMessage();
}