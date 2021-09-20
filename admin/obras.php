<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="es">
<!-- head started -->
<head>
<title>Nueva Obra</title>
<meta charset="UTF-8">

  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
   
  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
   
  <link rel="stylesheet" href="styles.css" >
   
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<style type="text/css">

  .message{
    padding: 10px;
    font-size: 15px;
    font-style: bold;
    color: black;
  }
</style>
</head>
<body>

<center>
  <h3>Nueva Obra</h3>
<div class="message">
        <?php if(isset($success_msg)) echo $success_msg; if(isset($error_msg)) echo $error_msg; ?>
</div>
<!-- Error or Success Message printint ended -->

<!-- Content, Tables, Forms, Texts, Images started -->
<div class="content">

  <div class="row" id="obra">    
      <form action="./db/obras_db.php" method="post" class="form-horizontal col-md-6 col-md-offset-3">
      <h4>Agregar información de la nueva obra</h4>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Nombre:</label>
          <div class="col-sm-7">
            <input type="text" name="nombre"  class="form-control" id="input1" placeholder="Nombre obra" />
          </div>
      </div>

      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Direccion:</label>
          <div class="col-sm-7">
            <input type="text" name="direccion"  class="form-control" id="input1" placeholder="Dirección Obra Completo" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Responsable:</label>
          <div class="col-sm-7">
            <input type="text" name="responsable"  class="form-control" id="input1" placeholder="Responsable de la Obra" />
          </div>
      </div>
      <input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Agregar Obra" name="nueva_obra" />
    </form>

    <table class="table table-stripped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre Obra</th>
          <th scope="col">Dirección</th>
          <th scope="col">Responsable</th>
        </tr>
      </thead>

   <?php
     $all_query = mysqli_query($conexion, "select * from obras order by id_obra asc ");
     while ($data = mysqli_fetch_array($all_query)) {
     ?>
  <tbody>
     <tr>
       <td><?php echo $data['id_obra']; ?></td>
       <td><?php echo $data['nombre_obra']; ?></td>
       <td><?php echo $data['direccion_obra']; ?></td>
       <td><?php echo $data['responsable_obra']; ?></td>
     </tr>
  </tbody>

     <?php 
          } 
      ?>
      
    </table>

  </div>
<!-- Contents, Tables, Forms, Images ended -->

</center>

</body>
<script>
  $(".js-example-tags").select2({
  tags: true
});
</script>
<!-- Body ended  -->
</html>
