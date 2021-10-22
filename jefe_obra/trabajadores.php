<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Control de Asistencia</title>
<meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
   
  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
   
  <link rel="stylesheet" href="styles.css" >
   
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</style>

</head>
<body>
<center>
        <h3>Lista de Trabajadores</h3>
<div class="row">
  <div class="content">
    <form method="post" action="" class="form-horizontal col-md-4 col-md-offset-4">
      <label>Obra</label>
          <?php 
                  $consulta = mysqli_query($conexion, "SELECT e.*, o.nombre_obra as nombre_obra FROM encargado_obra e, obras o WHERE responsable = $id_usuario AND o.id_obra = e.obra" );
              ?>  
              <select name="elegir_obra" id="input1" class="form-control">
                  <option value='0'>Seleccione...</option>
                <?php
                while($data = mysqli_fetch_array($consulta)){
                ?>
                  <option value="<?php echo $data['obra'] ?>"><?php echo $data['nombre_obra'] ?></option>
                <?php 
                  }
                ?>
              </select> 
              <br>
      <input type="submit" class="btn btn-primary " name="sr_btn" value="Buscar" >
    </form>
    <br>
    <div class='container'>
    <table class="table table-stripped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Rut</th>
          <th scope="col">Nombre</th>
          <th scope="col">Fecha Nacimiento</th>
          <th scope="col">Sexo</th>
          <th scope="col">Dirección</th>
          <th scope="col">Obra</th>
          <th scope="col">Telefono</th>
          <th scope="col">Email</th>
          <th scope="col">Cargo</th>
          <th scope="col">Fecha Ingreso</th>
          <th scope="col">Sueldo</th>
          <th scope="col">Contratado</th>
        </tr>
      </thead>

   <?php

    if(isset($_POST['sr_btn'])){
     
     $obra = $_POST['elegir_obra'];
     $i=0;
     
     $all_query = mysqli_query($conexion, "select * from trabajadores where trabajadores.tr_obra = '$obra' order by tr_id asc ");
     
     while ($data = mysqli_fetch_array($all_query)) {
       $i++;
     
     ?>
  <tbody>
     <tr>
       <td><?php echo $data['tr_id']; ?></td>
       <td><?php echo $data['tr_rut']; ?></td>
       <td><?php echo ucfirst($data['tr_nombre']); ?></td>
       <td><?php echo $data['tr_fecha_nacimiento']; ?></td>
       <td><?php echo $data['tr_sexo']; ?></td>
       <td><?php echo $data['tr_direccion']; ?></td>
       <td><?php echo $data['tr_obra']; ?></td>
       <td><?php echo $data['tr_telefono']; ?></td>
       <td><?php echo $data['tr_email']; ?></td>
       <td><?php echo ucfirst($data['tr_cargo']); ?></td>
       <td><?php echo $data['tr_fecha_ingreso']; ?></td>
       <td>$<?php echo number_format($data['tr_sueldo_pactado']); ?></td>
       <td><?php echo $data['tr_contratado']; ?></td>
     </tr>
  </tbody>

     <?php 
          } 
              }
      ?>
      
    </table>
    </div>

  </div>

</div>

</center>

</body>
</html>
