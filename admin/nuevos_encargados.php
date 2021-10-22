<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="es">
<!-- head started -->
<head>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

<title>Nuevos Encargados</title>
<meta charset="UTF-8">

  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
   
  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
   
   
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
<h3>Nuevo Encargado</h3>
<div class="message">
        <?php if(isset($success_msg)) echo $success_msg; if(isset($error_msg)) echo $error_msg; ?>
</div>
<div class="content">
  <div class="row" id="encargado">
    <form action="./db/nuevos_encargados_db.php" method="post" class="form-horizontal col-md-6 col-md-offset-3">
      <h4>Agregar información del nuevo encargado</h4>
      <div class="form-group">
          <label  class="col-sm-3 control-label">Nombre(s):</label>
          <div class="col-sm-7">
            <input type="text" name="nombre"  class="form-control" id="nombre_encargado" placeholder="Nombre(s)" />
          </div>
      </div>
      <div class="form-group">
          <label  class="col-sm-3 control-label">Apellido(s):</label>
          <div class="col-sm-7">
            <input type="text" name="apellido"  class="form-control" id="apellido_encargado" placeholder="Apellido(s)" />
          </div>
      </div>
      <div class="form-group">
          <label  class="col-sm-3 control-label">Nombre de usuario(s):</label>
          <div class="col-sm-7">
            <input type="text" name="username"  class="form-control" id="username" placeholder="nombre de usuario" />
          </div>
      </div>
      <div class="form-group">
          <label  class="col-sm-3 control-label">Contraseña:</label>
          <div class="col-sm-7">
            <input type="password" name="password"  class="form-control" id="password" placeholder="Contraseña" />
          </div>
      </div>
      <!-- <div class="form-group">
          <label  class="col-sm-3 control-label">Asignar a obra: </label>
          <div class="col-sm-7">
          <?php 
              $consulta = mysqli_query($conexion, 'select * from obras' );
          ?>  
          <select multiple name="obra[]" id="elegir_obra" class="form-control">
            <option value = "0">Seleccione obra</option>
            <?php
            while($data = mysqli_fetch_array($consulta)){
            ?>
              <option name="obra" value="<?php echo $data['id_obra']; ?>"><?php echo $data['nombre_obra']; ?></option>
            <?php 
              }
            ?>
          </select>
          </div>
      </div> -->

      <div class="form-group">
          <label  class="col-sm-3 control-label">Telefono: </label>
          <div class="col-sm-7">
            <input type="text" name="telefono"  class="form-control" id="telefono" placeholder="Telefono: (+569 99999999)" />
          </div>
      </div>

      <div class="form-group">
          <label  class="col-sm-3 control-label">Email: </label>
          <div class="col-sm-7">
            <input type="email" name="email"  class="form-control" id="email" placeholder="email" />
          </div>
      </div>
      


      <input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Agregar Trabajador" name="nuevo_tr" />
    </form>

  </div>
<!-- Contents, Tables, Forms, Images ended -->

</center>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="js/encargados.js"></script>
<!-- Body ended  -->
</html>
