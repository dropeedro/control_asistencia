<?php require_once "./vista/vista_superior.php" ?>
<?php

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
            window.location.href="index.php";
                 </script>';
        }
        else{
        
        $stat = mysqli_query($conexion, "insert into asistencia(tr_id,obra,estado,fecha) values('$tr_id','$obra','$tr_estado','$fecha')");
        
        $att_msg = "Asistencia Registrada.";
        echo'<script type="text/javascript">
              alert("Asistencia Registrada con exito!");
              window.location.href="index.php";
              </script>';
        //header("Refresh:0; url=index.php");
        }

      }

    }
  }
  catch(Execption $e){
    $error_msg = $e->$getMessage();
  }
 ?>


<!DOCTYPE html>
<html lang="es">
<head>
<title>Asistencia</title>
<link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/es/img/favicon.ico?v=a8def514be8a">


<meta charset="UTF-8">

  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
   
  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
   
  <!-- <link rel="stylesheet" href="styles.css" > -->
   
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<style type="text/css">
  .status{
    font-size: 10px;
  }

</style>

</head>
<body>
<center>
      <h3>Asistencia</h3>
<div class="row">
  <div class="content">
    <h3>Asistencia de <?php echo $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y')." a las ".date('h:i:s a'); ?></h3>
    <br>

    <center><p><?php if(isset($att_msg)) echo $att_msg; if(isset($error_msg)) echo $error_msg; ?></p></center> 
    
    <form action="" method="post" class="form-horizontal col-md-4 col-md-offset-4">

      <div class="form-group">
          <label>Seleccione Obra</label>
          <?php 
              $consulta = mysqli_query($conexion, "select obras.*, admininfo.* from obras, admininfo WHERE obras.id_obra = admininfo.obra_asignada AND admininfo.id = '$id_usuario' ");
          ?>  
          <select name="elegir_obra" id="input1" class="form-control">
            <option value = "0">Seleccione obra</option>
            <?php
            while($data = mysqli_fetch_array($consulta)){
            ?>
              <option name="<?php echo $data['id_obra']; ?>" value="<?php echo $data['id_obra']; ?>"><?php echo $data['nombre_obra']; ?></option>
            <?php 
              }
            ?>
          </select>
       </div>
               
     <input type="submit" class="btn btn-primary col-md-3 col-md-offset-5" value="Mostrar" name="mostrar" />

    </form>

    <div class="content"></div>
    <form action="" method="post">

<div class='container'>
    <table class="table table-centered table-stripped">
      <thead>
        <tr>
        <th scope="col">Id</th>
          <th scope="col">Rut</th>
          <th scope="col">Nombre</th>
          <th scope="col">Obra</th>
          <th scope="col">Telefono</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
   <?php

    if(isset($_POST['mostrar'])){

     $i=0;
     $radio = 0;
     $mostrar_obra = $_POST['elegir_obra'];
     $all_query = mysqli_query($conexion, "SELECT trabajadores.*, obras.nombre_obra as obra, Format(tr_sueldo_pactado,0) as sueldo, tipo_sueldo.tipo_sueldo as tipo 
                                          FROM trabajadores, obras, tipo_sueldo 
                                          WHERE tr_obra='$mostrar_obra' 
                                          AND trabajadores.tr_tipo_sueldo = tipo_sueldo.id 
                                          AND trabajadores.tr_obra = obras.id_obra order by tr_id asc");

     while ($data = mysqli_fetch_array($all_query)) {
       $i++;
     ?>
  <body>
     <tr>
       <td><?php echo $data['tr_id']; ?> <input type="hidden" name="tr_id[]" value="<?php echo $data['tr_id']; ?>"> </td>
       <td><?php echo $data['tr_rut']; ?></td>
       <td><?php echo $data['tr_nombre']; ?></td>
       <td><?php echo $data['obra']; ?><input type='hidden' name="tr_obra[]" value= "<?php echo $data['tr_obra']?>"></td>
       <td><?php echo $data['sueldo']; ?></td>
       <td><?php echo $data['tipo']; ?></td>
       <td>
         <label>Presente: </label>
         <input type="radio" name="tr_estado[<?php echo $radio; ?>]" value="Presente" checked>
         <label>Ausente: </label>
         <input type="radio" name="tr_estado[<?php echo $radio; ?>]" value="Ausente">
         <label>Licencia: </label>
         <input type="radio" name="tr_estado[<?php echo $radio; ?>]" value="Licencia">
         <label>Permiso:  </label>
         <input type="radio" name="tr_estado[<?php echo $radio; ?>]" value="Permiso">
       </td>
     </tr>
  </body>

     <?php

        $radio++;
      } 
}
      ?>
    </table>
    </div>

    <center><br>
    <input type="submit" class="btn btn-primary col-md-2 col-md-offset-10" value="Guardar" name="att" />
  </center>

</form>
  </div>

</div>

</center>

</body>
</html>
