<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="es">
<!-- head started -->
<head>
<title>Bienvenido Admin</title>
<meta charset="UTF-8">

<link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/es/img/favicon.ico?v=a8def514be8a">

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

</head>
<style>
</style>
<body>

<center>
  <h1>Bienvenido <?php echo $nombre.' '.$apellido  ?></h1>

<div class="content">  
    <div>
      <?php 
        $verifica = mysqli_query($conexion,"SELECT EXISTS (SELECT *  FROM asistencia WHERE fecha= CURDATE() AND obra = '$obra_asignada')");
        $row = mysqli_fetch_row($verifica);

        if($row[0] == "1" ){
          echo 'La asistencia ya se registró el día de hoy, puede verificarla en la sección <a href="reportes.php"><b>reportes</b></a>';
        }
        else{
          echo 'La asistencia no ha sido registrada el día de hoy, puede ir y registrarla en <a href="asistencia.php"><b>asistencia</b></a>';
        }
      ?>
    </div>
    <div class="form-group" style='width:300px'>
    <form method="post">
      <label for="">Seleccione fecha: </label>
      <input class="form-control" name="fecha" type="date"  id="fecha" placeholder="Elija la fecha para revisar...">
      <br>
      <input type="submit" class="btn btn-primary" name="mostrar" value="Mostrar">
      </form>
    </div>
    
    <table class="table table-striped">
      <?php
      if(isset($_POST['mostrar'])){
        $fecha = $_POST['fecha'];
        $dia = date_format(new Datetime($fecha), 'd');
        $mes = date_format(new Datetime($fecha), 'M');
        $anio = date_format(new Datetime($fecha), 'Y');
        
        $consulta = mysqli_query($conexion, "SELECT * FROM obras");
        $fechaActual = date('Y-m-d');
      ?>
      <h2><?php echo $dia.' de '.$mes. ' del '.$anio ?></h2>
      <tr>
        <thead>
          <th>Obra</th>
          <th>Asistencia hoy</th>
        </thead>
      </tr>
      <?php while ($i = mysqli_fetch_array($consulta)) {
        $consulta2 = mysqli_query($conexion, "SELECT EXISTS (SELECT *  FROM asistencia WHERE fecha='$fecha' AND obra = '$i[id_obra]')");
        while ($o = mysqli_fetch_array($consulta2)) {
        ?>
      <tbody>
      <tr>
          <td><?php echo $i['nombre_obra']; ?></td>
          <td><?php
            if($o[0] == 1){
              ?><span class='badge badge-success'>Registrada</span><?php
            }else{
              ?><span class='badge badge-danger'>No registrada</span><?php
            } ?></td>
        </tr>
      </tbody>
      <?php
      }
    } ?>
    </table>

    <?php } ?>

  </div>

</center>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
<script src="js/index.js"></script>

</body>

</html>
