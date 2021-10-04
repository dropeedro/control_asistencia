<?php require_once "./vista/vista_superior.php"
?>

<!DOCTYPE html>
<html lang="es">
<!-- head started -->
<head>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">


<title>Nueva Obra</title>
<meta charset="UTF-8">

  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <script src="https://kit.fontawesome.com/37e9332db5.js" crossorigin="anonymous"></script>
  

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
  <!-- <h3>Nueva Obra</h3> -->
<!-- <div class="message">
        <?php if(isset($success_msg)) echo $success_msg; if(isset($error_msg)) echo $error_msg; ?>
</div> -->
<!-- Error or Success Message printint ended -->

<!-- Content, Tables, Forms, Texts, Images started -->
<div class="content">

  <div class="row" id="obra"> 
  <!-- form agregar obra -->
      <form action="./db/obras_db.php" id='formObras' method="post" class="form-horizontal col-md-6 col-md-offset-3">
      <h4>Agregar información de la nueva obra</h4>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Nombre:</label>
          <div class="col-sm-7">
            <input type="text" name="nombre"  class="form-control" id="nombre_obra" placeholder="Nombre obra" />
          </div>
      </div>

      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Direccion:</label>
          <div class="col-sm-7">
            <input type="text" name="direccion"  class="form-control" id="direccion_obra" placeholder="Dirección Obra Completo" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Responsable:</label>
          <div class="col-sm-7">
                  <?php 
                      $consulta = mysqli_query($conexion, 'select * from admininfo' );
                  ?>  
                  <select multiple = 'multiple' name="responsable[]"  id="encargados_obra" class="multiple-select form-control">
                    <option value='0'>Seleccione...</option>
                    <?php
                    while($data = mysqli_fetch_array($consulta)){
                    ?>
                      <option class="encargados" value="<?php echo $data['id'] ?>"><?php echo $data['nombre'].' '.$data['apellido'] ?></option>
                    <?php 
                      }
                    ?>
                  </select> 
            <!-- <input type="text" name="responsable"  class="form-control" id="input1" placeholder="Responsable de la Obra" /> -->
          </div>
      </div>
      <input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Agregar Obra" name="nueva_obra" />
    </form>

      <!--editar obras -->
<form action="./db/obras_db.php" id='formEditar' method="post" class="form-horizontal col-md-6 col-md-offset-3">
      <h4>Editar Obra</h4>
      <div class="form-group" hidden>
          <label for="input1" class="col-sm-3 control-label">ID obra:</label>
          <div class="col-sm-7">
            <input type="text" name="id_obra"  class="form-control" id="editar_id_obra"  />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Nombre:</label>
          <div class="col-sm-7">
            <input type="text" name="editar_nombre_obra"  class="form-control" id="editar_nombre_obra" placeholder="Nombre obra" />
          </div>
      </div>

      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Direccion:</label>
          <div class="col-sm-7">
            <input type="text" name="editar_direccion_obra"  class="form-control" id="editar_direccion_obra" placeholder="Dirección Obra Completo" />
          </div>
      </div>
      <div class="form-group">
          <label for="input1" class="col-sm-3 control-label">Responsable:</label>
          <div class="col-sm-7">
                  <?php 
                      $consulta = mysqli_query($conexion, 'select * from admininfo' );
                  ?>  
                  <select multiple="multiple" name="editar_encargado[]" id="editar_encargados_obra" class="multiple-select  form-control">
                    <option value='0'>Seleccione...</option>
                    <?php
                    while($data = mysqli_fetch_array($consulta)){
                    ?>
                      <option class="editar_encargados" value="<?php echo $data['id'] ?>"><?php echo $data['nombre'].' '.$data['apellido'] ?></option>
                    <?php 
                      }
                    ?>
                  </select>
            <input type="text" id="id_encargado_anterior" name="id_encargado" hidden >
            <!-- <input type="text" name="responsable"  class="form-control" id="input1" placeholder="Responsable de la Obra" /> -->
          </div>
      </div>
      <!-- <input type="submit" class="btn btn-primary col-md-3 col-md-offset-7" value="Editar Obra" name="editar_obra" /> -->
      <input type="submit" class="btn btn-info col-md-3 col-md-offset-7" value="Editar Obra" name="editar" />
    </form>
    
<!-- mostrar obras -->
    <table id='tablaObras' class="table table-stripped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre Obra</th>
          <th scope="col">Dirección</th>
          <th scope="col">Responsable</th>
          <th scope="col" hidden>id responsable</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>

   <?php
     $all_query = mysqli_query($conexion, "select * from obras;");
     while ($data = mysqli_fetch_array($all_query)) {
     ?>
  <tbody>
     <tr>
       <td><?php echo $data['id_obra']; ?></td>
       <td><?php echo $data['nombre_obra']; ?></td>
       <td><?php echo $data['direccion_obra']; ?></td>
       <!-- <td><?php echo $data['nombre_responsable']; ?></td> -->
       <td>
         <?php 
          $query = mysqli_query($conexion, "SELECT e.*, concat(concat(a.nombre, ' '),a.apellido) AS nombre_encargado                  FROM encargado_obra e 
                                            INNER JOIN admininfo a 
                                            ON e.responsable = a.id 
                                            WHERE obra = '$data[id_obra]'");
          while ($e = mysqli_fetch_array($query)) {
            echo "<span class='badge badge-secondary'>";
						echo $e['nombre_encargado'];
						echo "</span> ";
          }
         ?>
       </td>
       <td hidden><?php echo $data['id_responsable']; ?></td>
       <td><button class="btn btn-info btnEditar"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btnEliminar"><i class="fas fa-trash-alt"></i></button></td>
     </tr>
  </tbody>

     <?php 
          } 
      ?>
      
    </table>
  </div>
<!-- fin tabla -->


</div>
</center>

</body>
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.2/umd/popper.min.js"></script> -->


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.js"></script>

<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

<script src="js/obras.js"></script>
<script>
  // $('.select-multiple').multipleSelect()

  $(".multiple-select").select2({
  // maximumSelectionLength: 2
});
</script>
<!-- Body ended  -->

</html>
