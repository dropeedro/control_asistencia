<?php require_once "./vista/vista_superior.php" ?>
<?php

  try{

    if(isset($_POST['nuevo_tr'])){

      //insertar trabajadores a la base de datos : tabla->trabajadores
        $result = mysqli_query($conexion, "INSERT INTO trabajadores(tr_rut, tr_nombre, tr_fecha_nacimiento, tr_sexo, tr_direccion, tr_obra, tr_telefono, tr_email, tr_cargo, tr_fecha_ingreso, tr_sueldo_pactado, tr_contratado) values('$_POST[rut]','$_POST[nombre]', '$_POST[fecha_nacimiento]', '$_POST[sexo]', '$_POST[direccion]', '$_POST[obra]','$_POST[telefono]','$_POST[email]', '$_POST[cargo]', '$_POST[fecha_ingreso]', '$_POST[sueldo]', '$_POST[contratado]')");
        $success_msg = "Trabajador agregado correctamente.";
        $mensaje=  '<h1'.$result.'</h1>';

    }


  }
  catch(Execption $e){
    $error_msg =$e->getMessage();
  }

 ?>



<!DOCTYPE html>
<html lang="es">
<!-- head started -->
<head>
<title>Nuevos Trabajadores</title>
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
<!-- head ended -->

<!-- body started -->
<body>
<center>
    <h3>Nuevo Trabajador</h3>
<div class="message">
        <?php if(isset($success_msg)) echo $success_msg; if(isset($error_msg)) echo $error_msg; ?>
</div>
<div class="content">

  <div class="row" id="trabajador">

      <form method="post" class="form-horizontal col-md-6 col-md-offset-3">
      <h4>Agregar información del nuevo trabajador</h4>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Rut:</label>
          <div class="col-sm-7">
            <input type="text" name="rut"  class="form-control" id="validaRut" placeholder="rut o pasaporte" />
            <p class="text-info" id="msgerror"></p>
          </div>
      </div>

      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Nombre:</label>
          <div class="col-sm-7">
            <input type="text" name="nombre"  class="form-control" id="input1" placeholder="Nombre Completo" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Fecha de Nacimiento:</label>
          <div class="col-sm-7">
            <input type="date" name="fecha_nacimiento"  class="form-control" id="input1" placeholder="Fecha de Nacimiento" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Sexo:</label>
          <div class="col-sm-7">
            <select name='sexo' class="form-control">
              <option name='sexo' value='0'>Seleccione...</option>
              <option name='sexo' value='Masculino'>Masculino</option>
              <option name='sexo' value='Femenino'>Femenino</option>
            </select>
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Direccion:</label>
          <div class="col-sm-7">
            <input type="text" name="direccion"  class="form-control" id="input1" placeholder="Direccion" />
          </div>
      </div>

      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Asignar a obra: </label>
          <div class="col-sm-7">
          <?php 
              $consulta = mysqli_query($conexion, "select obras.*, admininfo.* from obras, admininfo WHERE obras.id_obra = admininfo.obra_asignada AND admininfo.id = '$id_usuario' " );
          ?>  
          <select name="obra" id="input1" class="form-control">
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
      </div>

      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Telefono: </label>
          <div class="col-sm-7">
            <input type="text" name="telefono"  class="form-control" id="input1" placeholder="Telefono: (+569 99999999)" />
          </div>
      </div>

      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Email: </label>
          <div class="col-sm-7">
            <input type="email" name="email"  class="form-control" id="input1" placeholder="email" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Cargo: </label>
          <div class="col-sm-7">
            <input type="text" name="cargo"  class="form-control" id="input1" placeholder="Cargo" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Fecha de Ingreso: </label>
          <div class="col-sm-7">
            <input type="date" name="fecha_ingreso"  class="form-control" id="input1" placeholder="Fecha de Ingreso" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Sueldo Pactado: </label>
          <div class="col-sm-7">
            <input type="number" name="sueldo"  class="form-control" id="input1" placeholder="Sueldo Pactado" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Contratado: </label>
          <div class="col-sm-7">
              <select name='contratado' id="tr_contrato" class="form-control">
                <option name='contratado' value='Si'>Si</option>
                <option name='contratado' value='No'>No</option>
              </select>
          </div>
      </div>


      <input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Agregar Trabajador" name="nuevo_tr" />
    </form>

  </div>
<!-- Contents, Tables, Forms, Images ended -->

</center>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
<script src="./js/validador.js"></script>


</body>
<!-- Body ended  -->
</html>
