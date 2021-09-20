<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="en">

<!-- head started -->
<head>
<title>Editar Encargado</title>
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
          <h3>Editar Encargado</h3>
          <br>
          
          <!-- Error or Success Message printint started --><p>
      <?php

          if(isset($success_msg))
          {
            echo $success_msg;
          }
          if(isset($error_msg))
          {
            echo $error_msg;
          }

        ?>
          </p>

          <br>
   
          <form method="post" action="" class="form-horizontal col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="input1" class="col-sm-3 control-label">Seleccionar Encargado: </label>
                <div class="col-sm-7">
                        <?php 
                      $consulta = mysqli_query($conexion, 'select * from admininfo' );
                  ?>  
                  <select name="encargado" id="input1" class="form-control">
                    <option value='0'>Seleccione...</option>
                    <?php
                    while($data = mysqli_fetch_array($consulta)){
                    ?>
                      <option value="<?php echo $data['id'] ?>"><?php echo $data['nombre'].' '.$data['apellido'] ?></option>
                    <?php 
                      }
                    ?>
                  </select> 
                  <!-- <input type="text" name="sr_id"  class="form-control" id="input1" placeholder="enter your id to continue" /> -->
                </div>
            </div>
            <input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Buscar" name="buscar" />
          </form>
          <div class="content"></div>


      <?php

      if(isset($_POST['buscar'])){

      //initializing student ID from form data
       $encargado = $_POST['encargado'];

       $i=0;

       //searching students information respected to the particular ID
       $all_query = mysqli_query($conexion, "select admininfo.*, obras.* from admininfo, obras where id='$encargado' AND admininfo.obra_asignada = obras.id_obra");
       while ($data = mysqli_fetch_array($all_query)) {
         $i++;
       
       ?>
<form action="./db/editar_encargados_db.php" method="post" class="form-horizontal col-md-6 col-md-offset-3">
   <table class="table table-striped">
  
          
          <tr>
              <td>Nombre(s): </td>
              <td><input type="text" class="form-control" name="nombre" value="<?php echo $data['nombre']; ?>"></input></td>
          </tr>

          <tr>
              <td>Apellido(s): </td>
              <td><input type="text" class="form-control" name="apellido" value="<?php echo $data['apellido']; ?>"></input></td>
          </tr>

          <tr>
              <td>Nombre de Usuario</td>
              <td><input type="text" class="form-control" name="username" value="<?php echo $data['username']; ?>"></input></td>
          </tr>

          <tr>
              <td>Contraseña: </td>
              <td><input type="text" class="form-control" name="password" value="<?php echo $data['password']; ?>"></input></td>
          </tr>

          <tr>
              <td>Confirmar Contraseña: </td>
              <td><input type="text" class="form-control" name="password_confirmar" value="<?php echo $data['password']; ?>"></input></td>
          </tr>

          <tr>
              <td>Email: </td>
              <td><input type="text" class="form-control" name="email" value="<?php echo $data['email']; ?>"></input></td>
          </tr>

          <tr>
              <td>Telefono: </td>
              <td><input type="text" name="telefono" class="form-control" value="<?php echo $data['telefono']; ?>"></input></td>
          </tr>

          <tr>
              <td>Obra: </td>
              <td>
                        <?php 
                        $consulta = mysqli_query($conexion, 'select * from obras' );
                    ?>  
                    <select name="obra" id="input1" class="form-control">
                      <option name="obra" value= "<?php echo $data['obra_asignada'] ?>"> <?php echo $data['nombre_obra'] ?></option>
                      <?php
                      while($obras = mysqli_fetch_array($consulta)){
                      ?>
                        <option name="obra" value="<?php echo $obras['id_obra']; ?>"> <?php echo $obras['nombre_obra']; ?></option>
                      <?php 
                        }
                      ?>
                    </select>

              </td>
          </tr>
          <input type="hidden" name="id_rol" class="form-control" hidden value="<?php echo $data['id_rol']; ?>">
          <input type="hidden" name="id_encargado" class="form-control" hidden value="<?php echo $data['id']; ?>">
          <tr>
                <td></td>
                <td><input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Update" name="done" /></td>
                
          </tr>

    </table>
</form>
     <?php 
   } 
     }  
     ?>


      </div>

  </div>

  </center>
<!-- Contents, Tables, Forms, Images ended -->

</body>
<!-- Menus ended -->

</html>
