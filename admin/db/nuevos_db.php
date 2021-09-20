<?php

include_once ('connect.php');
  try{
      if(isset($_POST['nuevo_tr'])){
      
      if (empty($_POST['rut'])) {
        throw new Exception("El rut no puede estar vacío");
      }
        if (empty($_POST['nombre'])) {
          throw new Exception("El nombre no puede estar vacío");
        }
        if (empty($_POST['fecha_nacimiento'])) {
          throw new Exception("La fecha de nacimiento no puede estar vacía");
        }
        if (empty($_POST['sexo'])) {
          throw new Exception("El sexo no puede estar vacío");
        }
        if (empty($_POST['direccion'])) {
          throw new Exception("La dirección no puede estar vacía");
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
        if(empty($_POST['cargo']))
        {
          throw new Exception("Ingrese un cargo para este trabajador");
        }
        if(empty($_POST['fecha_ingreso']))
        {
          throw new Exception("Ingrese una fecha de ingreso del trabajador");
        }
        if(empty($_POST['sueldo']))
        {
          throw new Exception("Ingrese el sueldo pactado");
        }
        if(empty($_POST['contratado']))
        {
          throw new Exception("Debe seleccionar si está contratado o no.");
        }
        if($_POST['tipo_sueldo'] == 0)
        {
          throw new Exception("Por favor, seleccione el tipo de sueldo del trabajador");
        }

      //insertar trabajadores a la base de datos : tabla->trabajadores
        $result = mysqli_query($conexion, "INSERT INTO trabajadores(tr_rut, tr_nombre, tr_fecha_nacimiento, tr_sexo, tr_direccion, tr_obra, tr_telefono, tr_email, tr_cargo, tr_fecha_ingreso, tr_sueldo_pactado, tr_tipo_sueldo, tr_contratado) values('$_POST[rut]','$_POST[nombre]', '$_POST[fecha_nacimiento]', '$_POST[sexo]', '$_POST[direccion]', '$_POST[obra]','$_POST[telefono]','$_POST[email]', '$_POST[cargo]', '$_POST[fecha_ingreso]', '$_POST[sueldo]', '$_POST[tipo_sueldo]', '$_POST[contratado]')");
        $success_msg = "Trabajador agregado correctamente.";
        $mensaje=  '<h1'.$result.'</h1>';

        $att_msg = "Trabajador registrado.";
            echo'<script type="text/javascript">
            alert("Trabajador '.$_POST['nombre'].' Agregado correctamente a la obra");
            window.location.href="../nuevos.php";
                 </script>';

    }
  }
  catch(Execption $e){
    $error_msg =$e->getMessage();
  }

 ?>