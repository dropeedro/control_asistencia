<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Reportes</title>
<meta charset="UTF-8">

  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
   
  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
   
  <link rel="stylesheet" href="styles.css" >
   
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>
<body>
<center>

<div class="row">
  <div class="content">
    <h3>Reporte Individual</h3>
    <form method="post" action="" class="form-horizontal col-md-4 col-md-offset-4">

    <label>Seleccione Obra</label>
          <?php 
              $consulta = mysqli_query($conexion, "select * from obras");
          ?>  
           <select name="elegir_obra" id="elegir_obra" class="form-control">
          </select> 

      <p>  </p>
      <label>Trabajador</label>
      <?php 
              $consulta = mysqli_query($conexion, 'select * from trabajadores' );
          ?>  
           <select name="tr_id" id="tr_id" class="form-control">
          </select> 
          <br>
      <!-- <input type="text" name="tr_id"> -->
      <input type="submit" name="tr_btn" class="btn btn-primary col-md-3 col-md-offset-5" value="Buscar" >

    </form>

    
    <form method="post" action="" class="form-horizontal col-md-4 col-md-offset-4">
    <h3>Reporte por fecha</h3>
    <label>Seleccione Obra</label>
          <?php 
              $consulta = mysqli_query($conexion, "select obras.*, admininfo.* from obras, admininfo WHERE obras.id_obra = admininfo.obra_asignada AND admininfo.id = '$id_usuario' " );
          ?>  
           <select name="elegir_obra" id="input1" class="form-control">
            <?php
            while($data = mysqli_fetch_array($consulta)){
            ?>
              <option value="<?php echo $data['id_obra'] ?>"><?php echo $data['nombre_obra'] ?></option>
            <?php 
              }
            ?>
          </select> 
    <p>  </p>
      <label>Fecha ( yyyy-mm-dd )</label>
      <input type="date" name="fecha" class="form-control">
      <br>
      <input type="submit" name="tr_fecha" class="btn btn-primary col-md-3 col-md-offset-5" value="Buscar" >
    </form>

    <br>

    <br>

   <?php

    if(isset($_POST['tr_btn'])){

     $tr_id = $_POST['tr_id'];
     $obra = $_POST['elegir_obra'];

     $single = mysqli_query($conexion, "select * from reportes where reportes.tr_id='$tr_id' and reportes.obra = '$obra'");

     $count_tot = mysqli_num_rows($single);
  } 

    if(isset($_POST['fecha'])){

     $fecha = $_POST['fecha'];
     $obra = $_POST['elegir_obra'];

     $all_query = mysqli_query($conexion, "select * from reportes where reportes.fecha='$fecha' and reportes.obra = '$obra'");

    }
    if(isset($_POST['tr_fecha'])){

      ?>

    <table class="table table-stripped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Rut</th>
          <th scope="col">Nombre</th>
          <th scope="col">Obra</th>
          <th scope="col">Fecha</th>
          <th scope="col">Estado de Asistencia</th>
        </tr>
     </thead>


    <?php

     $i=0;
     while ($data = mysqli_fetch_array($all_query)) {

       $i++;

     ?>
        <tbody>
           <tr>
             <td><?php echo $data['tr_id']; ?></td>
             <td><?php echo $data['tr_rut']; ?></td>
             <td><?php echo $data['tr_nombre']; ?></td>
             <td><?php echo $data['tr_obra']; ?></td>
             <td><?php echo $data['fecha']; ?></td>
             <td><?php echo $data['estado']; ?></td>
           </tr>
        </tbody>

     <?php 
   } 
  }
     ?>
     
    </table>


    <form method="post" action="" class="form-horizontal col-md-6 col-md-offset-3">
    <table class="table table-striped">

    <?php


      if(isset($_POST['tr_btn'])){

        $count_pre = 0;
        $count_aus = 0;
        $count_lic = 0;
        $count_per = 0;
        $i= 0;
        while ($data = mysqli_fetch_array($single)) {
        $i++;
        if($data['estado'] == "Presente"){
          $count_pre++;
        }
        elseif($data['estado'] == "Ausente"){
          $count_aus++;
        }
        elseif ($data['estado'] == "Licencia") {
          $count_lic++;
        }
        elseif ($data['estado'] == "Permiso") {
          $count_per++;
        }
        if($i <= 1){
      ?>


     <tbody>
      <tr>
          <td> ID: </td>
          <td><?php echo $data['tr_id']; ?></td>
      </tr>

      <tr>
          <td>Rut: </td>
          <td><?php echo $data['tr_rut']; ?></td>
      </tr>
      
      <tr>
          <td>Nombre: </td>
          <td><?php echo $data['tr_nombre']; ?></td>
      </tr>
      
      <tr>
          <td>Obra: </td>
          <td><?php echo $data['tr_obra']; ?></td>
      </tr> 

           <?php
         }
        
        }

      ?>
      
      <tr>
        <td>Dias Totales: </td>
        <td><?php echo $count_tot; ?> </td>
      </tr>

      <tr>
        <td>Presente (Dias): </td>
        <td><?php echo $count_pre; ?> </td>
      </tr>

      <tr>
        <td>Ausente (Dias): </td>
        <td><?php echo $count_aus; ?> </td>
      </tr>

      <tr>
        <td>Licencia (Dias): </td>
        <td><?php echo $count_lic; ?> </td>
      </tr>

      <tr>
        <td>Permiso (Dias): </td>
        <td><?php echo $count_per; ?> </td>
      </tr>

    </tbody>

   <?php

     }  
   
     ?>
    </table>
  </form>

  </div>

</div>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.2/umd/popper.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/reportes.js"></script>

</center>

</body>
</html>
