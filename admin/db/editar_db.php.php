<?php
 include_once ('./connect.php');

try{

         //checking form data and empty fields
          if(isset($_POST['done'])){
          if (empty($_POST['nombre'])) {
            throw new Exception("El nombre no puede estar vacío");
          }
              if (empty($_POST['obra'])) {
                throw new Exception("La obra no puede estar vacia");
              }
                  if(empty($_POST['telefono']))
                  {
                    throw new Exception("El telefono no puede estar vacío");
                  }
                      if(empty($_POST['email']))
                      {
                        throw new Exception("El email no puede estar vacío");
                      }
                      if($_POST['tipo_sueldo'] == 0)
                      {
                        throw new Exception("Por favor, seleccione el tipo de sueldo del trabajador");
                      }
  //initializing the student id
  $tid = $_POST['id'];

  //udating students information to database table "students"
  $result = mysqli_query($conexion, "update trabajadores set 
                                      tr_nombre='$_POST[nombre]',
                                      tr_rut='$_POST[rut]',
                                      tr_fecha_nacimiento='$_POST[fecha_nacimiento]', 
                                      tr_sexo='$_POST[sexo]', 
                                      tr_direccion='$_POST[direccion]',
                                      tr_obra='$_POST[obra]',
                                      tr_telefono='$_POST[telefono]',
                                      tr_email='$_POST[email]', 
                                      tr_cargo='$_POST[cargo]', 
                                      tr_fecha_ingreso='$_POST[fecha_ingreso]', 
                                      tr_sueldo_pactado='$_POST[sueldo_pactado]',
                                      tr_tipo_sueldo = '$_POST[tipo_sueldo]',
                                      tr_contratado='$_POST[contratado]'
                                      where tr_id='$tid'");

  $success_msg = 'Información Actualizada correctamente.';
  $mensaje_exito = "Información Actualizada.";
            echo'<script type="text/javascript">
            alert("Información de '.$_POST['nombre'].' actualizada correctamente");
            window.location.href="../editar.php";
                 </script>';
  echo $result;
  }

}
catch(Exception $e){

  $error_msg =$e->getMessage();
}


?>