<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="en">

<!-- head started -->
<head>
<title>Editar Trabajador</title>
<meta charset="UTF-8">
  
<link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/es/img/favicon.ico?v=a8def514be8a">

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
   
<link rel="stylesheet" href="./css/editar_trabajadores.css" >


</head>
<body>
<center>



<div class="row">
    <div class="content">
          <h3>Editar Trabajador</h3>
          <br>
          
          <!-- Mensaj de error--><p>
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
                      $consulta = mysqli_query($conexion, 'select trabajadores.*, obras.nombre_obra, tipo_sueldo.tipo_sueldo from trabajadores, obras, tipo_sueldo WHERE trabajadores.tr_tipo_sueldo = tipo_sueldo.id AND trabajadores.tr_obra = obras.id_obra' );
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
<form action="./db/editar_db.php.php" method="post" class="form-horizontal col-md-6 col-md-offset-3">
<!-- <div class="center">
  <input type="checkbox" name="estado" class="estado">
</div> -->
   <table class="table table-striped">

        
          <tr>
            <td>ID: </td>
            <td><?php echo $data['tr_id']; ?></td>
          </tr>
          <tr>
            <td>ID: </td>
            <td>Inactivo <input type="checkbox" name="estado" class="estado"> Activo</td>
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
              <td><input type="text" class="form-control" name="fecha_nacimiento" value="<?php echo $data['tr_fecha_nacimiento']; ?>"></input></td>
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
              $consulta = mysqli_query($conexion, 'select * from obras' );
              $consulta2 = mysqli_query($conexion, "select trabajadores.*, obras.nombre_obra, obras.id_obra from trabajadores, obras WHERE  trabajadores.tr_obra = obras.id_obra AND tr_id = $tr_id" );
              $mostrar = mysqli_fetch_array($consulta2);
          ?>  
          <select name="obra" id="input1" class="form-control">
            <option name="obra" value = "<?php echo $mostrar['id_obra'] ?>"><?php echo $mostrar['nombre_obra'] ?></option>
            <option disabled >------------------</option>
            <?php
            while($m = mysqli_fetch_array($consulta)){
            ?>
              <option name="obra" value="<?php echo $m['id_obra']; ?>"><?php echo $m['nombre_obra']; ?></option>
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
              $consulta2 = mysqli_query($conexion, "select trabajadores.*, obras.nombre_obra, tipo_sueldo.tipo_sueldo, tipo_sueldo.id as id_tipo from trabajadores, obras, tipo_sueldo WHERE trabajadores.tr_tipo_sueldo = tipo_sueldo.id AND trabajadores.tr_obra = obras.id_obra AND tr_id = $tr_id" );
              $mostrar = mysqli_fetch_array($consulta2)
          ?>  
          <select name="tipo_sueldo" id="input1" class="form-control">
            <option name="tipo_sueldo" value = "<?php echo $mostrar['id_tipo'] ?>"><?php echo $mostrar['tipo_sueldo'] ?></option>
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
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
<script>
  var checkedValue = document.querySelector('.estado');
  checkedValue.checked = true;
  checkedValue.addEventListener('click', function(){
    console.log(checkedValue.checked)
  })
</script>

</body>

<!-- Menus ended -->

</html>
