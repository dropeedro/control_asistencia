<?php require_once "./vista/vista_superior.php" ?>
<?php 
try{

         //checking form data and empty fields
          if(isset($_POST['done'])){

          if (empty($_POST['nombre'])) {
            throw new Exception("El nombre no puede estar vacío");
            
          }
            if(empty($_POST['telefono']))
            {
              throw new Exception("El telefono no puede estar vacío");
              
            }
                if(empty($_POST['email']))
                {
                  throw new Exception("El email no puede estar vacío");
                  
                }
                if($_POST["password"]!=$_POST["password_confirmar"])
                  {
                    throw new Exception("Las contraseñas no coinciden, intentelo de nuevo.");
                  }

  //udating students information to database table "students"
  $result = mysqli_query($conexion, "UPDATE `admininfo` SET 
                                            `nombre` = '$_POST[nombre]', 
                                            `apellido` = '$_POST[apellido]', 
                                            `username` = '$_POST[username]', 
                                            `password` = '$_POST[password]', 
                                            `email` = '$_POST[email]', 
                                            `telefono` = '$_POST[telefono]'
                                            WHERE `admininfo`.`id` = $id_usuario");

  $success_msg = 'Información Actualizada correctamente';
  
  }

}
catch(Exception $e){

  $error_msg =$e->getMessage();
}


?>



<!DOCTYPE html>
<html lang="en">

<!-- head started -->
<head>
<title>Ajustes</title>
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

<h3>Mi Cuenta</h3> 
    <div class="row">
      <div class="content">
    <p>
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
          <div class="content"></div>

      <?php

       //searching students information respected to the particular ID
       $all_query = mysqli_query($conexion, "select * from admininfo where id='$id_usuario'");
       $data = mysqli_fetch_array($all_query)
       ?>
<form action="" method="post" class="form-horizontal col-md-6 col-md-offset-3">
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
              <td><input type="password" class="form-control" name="password" value="<?php echo $data['password']; ?>"></input></td>
          </tr>

          <tr>
              <td>Confirmar Contraseña: </td>
              <td><input type="password" class="form-control" name="password_confirmar" value="<?php echo $data['password']; ?>"></input></td>
          </tr>

          <tr>
              <td>Email: </td>
              <td><input type="text" class="form-control" name="email" value="<?php echo $data['email']; ?>"></input></td>
          </tr>

          <tr>
              <td>Telefono: </td>
              <td><input type="text" name="telefono" class="form-control" value="<?php echo $data['telefono']; ?>"></input></td>
          </tr>
          <input type="hidden" name="id_rol" class="form-control" hidden value="<?php echo $data['id_rol']; ?>">
          <input type="hidden" name="id_encargado" class="form-control" hidden value="<?php echo $data['id']; ?>">
          <tr>
                <td></td>
                <td><input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Update" name="done" /></td>
                
          </tr>

        </table>
</form>


      </div>
        </div>

  </center>
<!-- Contents, Tables, Forms, Images ended -->

</body>
<!-- Menus ended -->

</html>
