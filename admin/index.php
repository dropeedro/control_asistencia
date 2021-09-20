<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="es">
<!-- head started -->
<head>
<title>Bienvenido Admin</title>
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
  </div>

</center>

</body>

</html>
