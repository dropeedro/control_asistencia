<?php require_once "./vista/vista_superior.php" ?>
<?php 
try{

         //checking form data and empty fields
          if(isset($_POST['done'])){

          if (empty($_POST['nombre'])) {
            throw new Exception("El nombre no puede estar vacío");
            
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

  //initializing the student id
  $tid = $_POST['id'];

  //udating students information to database table "students"
  $result = mysqli_query($conexion, "update trabajadores set 
                                      tr_nombre='$_POST[nombre]',
                                      tr_rut='$_POST[rut]',
                                      tr_fecha_nacimiento='$_POST[fecha_nacimiento]', 
                                      tr_sexo='$_POST[sexo]', 
                                      tr_direccion='$_POST[direccion]',
                                      tr_obra='$_POST[obra]',
                                      tr_telefono='$_POST[telefono]',
                                      tr_email='$_POST[email]', 
                                      tr_cargo='$_POST[cargo]', 
                                      tr_fecha_ingreso='$_POST[fecha_ingreso]', 
                                      tr_sueldo_pactado='$_POST[sueldo_pactado]', 
                                      tr_contratado='$_POST[contratado]'
                                      where tr_id='$tid'");

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
<title>Editar Trabajador</title>
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
<!-- Menus ended -->

<!-- Content, Tables, Forms, Texts, Images started -->
<center>

<div class="row">
    <div class="content">
          <h3>Editar Trabajador</h3>
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
          </p><!-- Error or Success Message printint ended -->

          <br>
   
          <form method="post" action="" class="form-horizontal col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="input1" class="col-sm-3 control-label">Seleccionar Trabajador: </label>
                <div class="col-sm-7">
                        <?php 
                      // $consulta = mysqli_query($conexion, "select obras.*, admininfo.*, trabajadores.* from obras, admininfo, trabajadores WHERE obras.id_obra = admininfo.obra_asignada AND trabajadores.tr_obra = obras.id_obra AND admininfo.id = '$id_usuario' " );
                      $consulta = mysqli_query($conexion, "SELECT e.*, o.nombre_obra as nombre_obra, t.* FROM encargado_obra e, obras o, trabajadores t WHERE responsable = '$id_usuario' AND o.id_obra = e.obra AND t.tr_obra = e.obra; " );
                  ?>  
                  <select name="tr_id" id="input1" class="form-control">
                      <option value='0'>Seleccione...</option>
                    <?php
                    while($data = mysqli_fetch_array($consulta)){
                    ?>
                      <option value="<?php echo $data['tr_id'] ?>"><?php echo $data['tr_nombre'] ?></option>
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
       $tr_id = $_POST['tr_id'];

       $i=0;

       //searching students information respected to the particular ID
       $all_query = mysqli_query($conexion, "select * from trabajadores where trabajadores.tr_id='$tr_id'");
       while ($data = mysqli_fetch_array($all_query)) {
         $i++;
       
       ?>
<form action="" method="post" class="form-horizontal col-md-6 col-md-offset-3">
      <table class="table table-striped">
        <tr>
          <td>ID: </td>
          <td><?php echo $data['tr_id']; ?></td>
        </tr>

        <tr>
            <td>RUT: </td>
            <td><input type="text" class="form-control" name="rut" value="<?php echo $data['tr_rut']; ?>"></input></td>
        </tr>

        <tr>
            <td>Nombre: </td>
            <td><input type="text" class="form-control" name="nombre" value="<?php echo $data['tr_nombre']; ?>"></input></td>
        </tr>

        <tr>
            <td>Fecha Nacimiento: </td>
            <td><input type="date" class="form-control" name="fecha_nacimiento" value="<?php echo $data['tr_fecha_nacimiento']; ?>"></input></td>
        </tr>

        <tr>
        <td>Sexo:</td>
        <td>
        <select name="sexo" id="input1" class="form-control">
          <option name="sexo" value = "<?php echo $data['tr_sexo'] ?>"><?php echo $data['tr_sexo'] ?></option>
          <option disabled >------------------</option>
          <option name="sexo" value = "Masculino">Masculino</option>
          <option name="sexo" value = "Femenino">Femenino</option>
          <!-- <option value = "0">Seleccione Tipo Sueldo</option> -->
          <?php
          while($m = mysqli_fetch_array($consulta)){
          ?>
            <option name="sexo" value="<?php echo $m['tr_sexo']; ?>"><?php echo $m['tr_sexo']; ?></option>
          <?php 
            }
          ?>
            </select>
            </td>
        </tr>

        <tr>
            <td>Direccion: </td>
            <td><input type="text" class="form-control" name="direccion" value="<?php echo $data['tr_direccion']; ?>"></input></td>
        </tr>

        <tr>
        <td>Obra:</td>
        <td>
        <?php 
            $consulta = mysqli_query($conexion, "SELECT e.*, o.nombre_obra as nombre_obra FROM encargado_obra e, obras o WHERE responsable = $id_usuario AND o.id_obra = e.obra" );
            $consulta2 = mysqli_query($conexion, "SELECT e.*, o.nombre_obra as nombre_obra FROM encargado_obra e, obras o WHERE responsable = $id_usuario AND o.id_obra = e.obra" );
            $mostrar = mysqli_fetch_array($consulta2);
        ?>  
        <select name="obra" id="input1" class="form-control">
          <option name="obra" value = "<?php echo $mostrar['obra'] ?>"><?php echo $mostrar['nombre_obra'] ?></option>
          <option disabled >------------------</option>
          <?php
          while($m = mysqli_fetch_array($consulta)){
          ?>
            <option name="obra" value="<?php echo $m['obra']; ?>"><?php echo $m['nombre_obra']; ?></option>
          <?php 
            }
          ?>
            </select>
            </td>
        </tr>
        <tr>
            <td>Telefono: </td>
            <td><input type="number" name="telefono" class="form-control" value="<?php echo $data['tr_telefono']; ?>"></input></td>
        </tr>

        <tr>
            <td>Email: </td>
            <td><input type="text" name="email" class="form-control" value="<?php echo $data['tr_email']; ?>"></input></td>
        </tr>

        <tr>
            <td>Cargo: </td>
            <td><input type="text" name="cargo" class="form-control" value="<?php echo $data['tr_cargo']; ?>"></input></td>
        </tr>

        <tr>
            <td>Fecha Ingreso: </td>
            <td><input type="date" name="fecha_ingreso" class="form-control" value="<?php echo $data['tr_fecha_ingreso']; ?>"></input></td>
        </tr>

        <tr>
            <td>Saldo Pactado: </td>
            <td><input type="number" name="sueldo_pactado" class="form-control" value="<?php echo $data['tr_sueldo_pactado']; ?>"></input></td>
        </tr>  

        <tr>
        <td>Tipo de pago:</td>
        <td>
        <?php 
            $consulta = mysqli_query($conexion, 'select * from tipo_sueldo' );
            $consulta2 = mysqli_query($conexion, "select trabajadores.*, obras.nombre_obra, tipo_sueldo.tipo_sueldo from trabajadores, obras, tipo_sueldo WHERE trabajadores.tr_tipo_sueldo = tipo_sueldo.id AND trabajadores.tr_obra = obras.id_obra AND tr_id = $tr_id" );
            $mostrar = mysqli_fetch_array($consulta2)
        ?>  
        <select name="tipo_sueldo" id="input1" class="form-control">
          <option name="tipo_sueldo" value = "<?php echo $mostrar['id'] ?>"><?php echo $mostrar['tipo_sueldo'] ?></option>
          <option disabled >------------------</option>
          <?php
          while($m = mysqli_fetch_array($consulta)){
          ?>
            <option name="tipo_sueldo" value="<?php echo $m['id']; ?>"><?php echo $m['tipo_sueldo']; ?></option>
          <?php 
            }
          ?>
            </select>
            </td>
        </tr>
      
        
        <tr>
            <td>Contratado: </td>
            <td><input type="text" name="contratado" class="form-control" value="<?php echo $data['tr_contratado']; ?>"></input></td>
        </tr>
        <input type="hidden" name="id" value="<?php echo $tr_id; ?>">
        <tr>
              <td></td>
              <td><input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Update" name="done" placeholder = 'Si/No' /></td>
              
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
