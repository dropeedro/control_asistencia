<?php

ob_start();
session_start();

if($_SESSION['name']!='oasis')
{
  header('location: /am/index.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Control Asistencia</title>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/am/css/main.css">

</head>
<body>

<header>

  <h1>Control de Asistencia</h1>
  <div class="navbar">
  <a href="index.php">Inicio</a>
  <a href="students.php">Trabajadores</a>
  <a href="teachers.php">Obras</a>
  <a href="attendance.php">Asistencia</a>
  <a href="report.php">Reportes</a>
  <a href="/am/logout.php">Salir</a>
</div>

</header>

<center>

<div class="row">
    <div class="content">
      <p>One stop  solution for your class room :)</p>
    <img src="/am/img/tcr.png" height="200px" width="300px" />

  </div>

</div>

</center>


</body>
</html>
