<?php

include_once ('./connect.php');

//crud obras
// try{

    if(isset($_POST['nueva_obra'])){
    //insertar obras
      $result = mysqli_query($conexion, "INSERT INTO obras(nombre_obra, direccion_obra) values('$_POST[nombre]','$_POST[direccion]')");

      $ultimo_id = mysqli_insert_id($conexion);

      $responsable = $_POST['responsable'];
      foreach ($responsable as $r) {
        $result2 = mysqli_query($conexion, "INSERT INTO encargado_obra( obra, responsable) VALUES ($ultimo_id, $r)");
        // echo "INSERT INTO encargado_obra( obra, responsable) VALUES ($ultimo_id, $r)";

      }
	
		$att_msg = "Obra Registrada.";
            echo'<script type="text/javascript">
            alert("Obra '.$_POST['nombre'].' registrada con éxito!");
            window.location.href="../obras.php";
                 </script>';

    };

if(isset($_POST['editar'])){

  $ultimo_id = mysqli_insert_id($conexion);
  // echo $ultimo_id;
  $responsable = $_POST['editar_encargado'];

  $update2 = mysqli_query($conexion, "UPDATE obras 
                                      SET nombre_obra = '$_POST[editar_nombre_obra]', direccion_obra = '$_POST[editar_direccion_obra]'
                                      WHERE id_obra = '$_POST[id_obra]'");
  // echo "UPDATE obras SET nombre_obra = '$_POST[editar_nombre_obra]', direccion_obra = '$_POST[editar_direccion_obra]' WHERE id_obra = '$_POST[id_obra]'".'<br>';

  $update3 = mysqli_query($conexion, "DELETE FROM encargado_obra WHERE obra=$_POST[id_obra]");
  echo "DELETE FROM encargado_obra WHERE obra=$_POST[id_obra]".'<br>';
  foreach ($responsable as $r) {

  $update = mysqli_query($conexion,"INSERT INTO encargado_obra( obra, responsable) VALUES ($_POST[id_obra], $r)");
  // echo "INSERT INTO encargado_obra( obra, responsable) VALUES ($_POST[id_obra], $r)".'<br>';

  }
  echo '<script type="text/javascript">
  alert("Obra editada correctamente!");
  window.location.href="../obras.php";
      </script>';

}
  // }
  // catch(Execption $e){
  //   $error_msg =$e->getMessage();
  // }


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';

switch ($opcion) {
  case '1':
      $consulta = mysqli_query($conexion, "DELETE FROM encargado_obra WHERE obra=$id");
      $consulta2 = mysqli_query($conexion, "DELETE FROM obras WHERE id_obra=$id");
      
      $att_msg = "Obra Eliminada Correctamente!";
      echo '<script type="text/javascript">
      alert("Obra eliminada correctamente!");
        window.location.href="../obras.php";
          </script>';
      break;
}

 ?>


