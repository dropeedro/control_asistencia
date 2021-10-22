<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Reportes</title>
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
.container {
    width:100%;
    text-align:center;
    border: 1px solid;  
}

.left {
    float:left;
    width:33%;
    padding-left: 50px;
    padding-right: 50px;
}

.center {
    display: inline-block;
    margin:0 auto;
    width:33%;
    padding-left: 50px;
    padding-right: 50px;
}

.right {
    float:right;
    width:33%;
    padding-left: 50px;
    padding-right: 50px;
}
</style>
<body>
<center>

<div class="row">
  <div class="content">
    <div class="container">
      <div class='left'>
      <h3>Reporte Individual</h3>
      <form method="post" action="" class="form-horizontal">

      <label>Seleccione Obra</label>
            <?php 
                // $consulta = mysqli_query($conexion, 'select * from obras' );
            ?>  
            <select name="elegir_obra" id="elegir_obra" class="form-control">
            </select> 

        <p>  </p>
        <label>Trabajador</label>
        <?php 
                // $consulta = mysqli_query($conexion, 'select * from trabajadores' );
            ?>  
            <select name="tr_id" id="tr_id" class="form-control">
            </select> 
        <label>Mes</label>
          <select class='form-control' name='mes_asistencia'>
            <option name='mes_asistencia' value='2021-01'>Enero</option>
            <option name='mes_asistencia' value='2021-02'>Febrero</option>
            <option name='mes_asistencia' value='2021-03'>Marzo</option>
            <option name='mes_asistencia' value='2021-04'>Abril</option>
            <option name='mes_asistencia' value='2021-05'>Mayo</option>
            <option name='mes_asistencia' value='2021-06'>Junio</option>
            <option name='mes_asistencia' value='2021-07'>Julio</option>
            <option name='mes_asistencia' value='2021-08'>Agosto</option>
            <option name='mes_asistencia' value='2021-09'>Septiembre</option>
            <option name='mes_asistencia' value='2021-10'>Octubre</option>
            <option name='mes_asistencia' value='2021-11'>Noviembre</option>
            <option name='mes_asistencia' value='2021-12'>Diciembre</option>
          </select>
          <br>
        <!-- <input type="text" name="tr_id"> -->
        <input type="submit" name="tr_btn" class="btn btn-primary " value="Buscar" >

      </form>
      </div>

      <div class='right'>
      <form method="post" action="" class="form-horizontal">
      <h3>Reporte por fecha</h3>
      <label>Seleccione Obra</label>
            <?php 
                $consulta = mysqli_query($conexion, "SELECT e.*, o.nombre_obra as nombre_obra FROM encargado_obra e, obras o WHERE responsable = $id_usuario AND o.id_obra = e.obra" );
            ?>  
            <select name="elegir_obra" id="input1" class="form-control">
              <?php
              while($data = mysqli_fetch_array($consulta)){
              ?>
                <option value="<?php echo $data['obra'] ?>"><?php echo $data['nombre_obra'] ?></option>
              <?php 
                }
              ?>
            </select> 
      <p>  </p>
        <label>Fecha ( yyyy-mm-dd )</label>
        <input type="date" name="fecha" class="form-control">
        <br>
        <input type="submit" name="tr_fecha" class="btn btn-primary " value="Buscar" >
      </form>
      </div>
      <!-- reporte por obra 
      <div class='center'>
      <form method="post" action="" class="form-horizontal">

      <h3>Reporte por obra</h3>
      <label>Seleccione Obra</label>
            <?php 
                $consulta = mysqli_query($conexion, 'select * from obras' );
            ?>  
            <select name="reporte_obra" id="input1" class="form-control">
              <?php
              while($data = mysqli_fetch_array($consulta)){
              ?>
                <option value="<?php echo $data['id_obra'] ?>"><?php echo $data['nombre_obra'] ?></option>
              <?php 
                }
              ?>
            </select> 
      <p>  </p>
        <label>Mes</label>
        <select class='form-control' name='mes_obra'>
            <option name='mes_obra' value='2021-01'>Enero</option>
            <option name='mes_obra' value='2021-02'>Febrero</option>
            <option name='mes_obra' value='2021-03'>Marzo</option>
            <option name='mes_obra' value='2021-04'>Abril</option>
            <option name='mes_obra' value='2021-05'>Mayo</option>
            <option name='mes_obra' value='2021-06'>Junio</option>
            <option name='mes_obra' value='2021-07'>Julio</option>
            <option name='mes_obra' value='2021-08'>Agosto</option>
            <option name='mes_obra' value='2021-09'>Septiembre</option>
            <option name='mes_obra' value='2021-10'>Octubre</option>
            <option name='mes_obra' value='2021-11'>Noviembre</option>
            <option name='mes_obra' value='2021-12'>Diciembre</option>
          </select>
        <br>
        <input type="submit" name="asistencia_obra" class="btn btn-primary " value="Buscar" >
      </form>
      </div>
    </div>
    <br>

    <br> -->

   <?php

    if(isset($_POST['tr_btn'])){

     $tr_id = $_POST['tr_id'];
     $obra = $_POST['elegir_obra'];
     $mes_asistencia = $_POST['mes_asistencia'];

     $asistencia_total = mysqli_query($conexion, "select reportes.*, obras.nombre_obra as nombre_obra from reportes,obras where reportes.tr_id='$tr_id' and reportes.obra = '$obra' and reportes.tr_obra = obras.id_obra");

     $count_tot_historico = mysqli_num_rows($asistencia_total);

     $asistencia_mensual = mysqli_query($conexion, "select reportes.*, obras.nombre_obra as nombre_obra from reportes,obras WHERE fecha LIKE '%$mes_asistencia%' AND reportes.tr_id = '$tr_id' AND reportes.tr_obra = obras.id_obra");
     
     $count_tot_mes = mysqli_num_rows($asistencia_mensual);

     $contador_asistencia = mysqli_query($conexion, "select reportes.*, obras.nombre_obra as nombre_obra, trabajadores.tr_sueldo_pactado as sueldo from reportes,obras,trabajadores WHERE fecha LIKE '%$mes_asistencia%' AND reportes.tr_id = '$tr_id' AND reportes.tr_obra = obras.id_obra AND trabajadores.tr_id = reportes.tr_id");

     $calcula_sueldo = mysqli_query($conexion, "SELECT trabajadores.*, reportes.* FROM trabajadores, reportes WHERE trabajadores.tr_id = '$tr_id' AND reportes.tr_id = '$tr_id'");
     $muestra_sueldo = mysqli_fetch_assoc($calcula_sueldo);
     
  } 

    if(isset($_POST['fecha'])){

     $fecha = $_POST['fecha'];
     $obra = $_POST['elegir_obra'];

     $all_query = mysqli_query($conexion, "select * from reportes where reportes.fecha='$fecha' and reportes.obra = '$obra'");

    }

    // Asistencia por obra
    // if(isset($_POST['asistencia_obra'])){
    //   $obra = $_POST['reporte_obra'];
    //   $mes = $_POST['mes_obra'];
    //   $asistencia_obra = mysqli_query($conexion, "SELECT reportes.*, trabajadores.tr_nombre as nombre FROM reportes,trabajadores WHERE reportes.fecha LIKE '%$mes%' AND trabajadores.tr_obra = '$obra'");
    // }


    if(isset($_POST['tr_fecha'])){

      ?>

    <table class="table table-stripped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Rut</th>
          <th scope="col">Nombre</th>
          <th scope="col">Obra</th>
          <th scope="col">Fecha</th>
          <th scope="col">Estado de Asistencia</th>
        </tr>
     </thead>


    <?php

     $i=0;
     while ($data = mysqli_fetch_array($all_query)) {

       $i++;

     ?>
        <tbody>
           <tr>
             <td><?php echo $data['tr_id']; ?></td>
             <td><?php echo $data['tr_rut']; ?></td>
             <td><?php echo ucfirst($data['tr_nombre']); ?></td>
             <td><?php echo $data['tr_obra']; ?></td>
             <td><?php echo $data['fecha']; ?></td>
             <td><?php echo $data['estado']; ?></td>
           </tr>
        </tbody>

     <?php 
   } 
  }
     ?>
     
    </table>

<?php
  // Reporte asistencia por obra
  //   if(isset($_POST['asistencia_obra'])){
      

  //     echo "<table class='table table-striped' border='1'>";
  //     echo'<thead>';
  //     echo'<tr>';
  //         echo'<th>Nombre</th>';
  //         echo '<th>Total Asistencias</th>';
  //         echo '<th>Sueldo</th>';
  //         echo '<th>Total a Pagar</th>';
  //       echo '</tr>';
  //     echo '</thead>';
  //     while ($m = mysqli_fetch_array($asistencia_obra)) {
          
  //     echo '<tbody>';
  //     echo '<tr>';
  //       echo "<td>".$m['nombre']."</td>";
  //       echo "<td>".$m['nombre']."</td>";
        
        
  //     }
  //     echo "</tr></tbody>
  //     </table>";
  // }
     ?>
     
    </table>


    <form method="post" action="" class="form-horizontal col-md-6 col-md-offset-3">
    <table class="table table-striped">

    <?php

    if(isset($_POST['tr_btn'])){

      ?>  
       <?php
       $count_pre = 0;
       $count_aus = 0;
       $count_lic = 0;
       $count_per = 0;
       $i = 0;
       while ($data = mysqli_fetch_array($contador_asistencia)){
       $i++;
       if($data['estado'] == "Presente"){
          $count_pre++;
       }
       elseif($data['estado'] == "Ausente"){
          $count_aus++;
       }
       elseif ($data['estado'] == "Licencia") {
         $count_lic++;
       }
       elseif ($data['estado'] == "Permiso") {
         $count_per++;
       }
       if($i <= 1){
     ?>
     
     <tbody>
      <tr>
          <td> ID: </td>
          <td><?php echo $data['tr_id']; ?></td>
      </tr>

      <tr>
          <td>Rut: </td>
          <td><?php echo $data['tr_rut']; ?></td>
      </tr>
      
      <tr>
          <td>Nombre: </td>
          <td><?php echo ucfirst($row['tr_nombre']); ?></td>
      </tr>
      
      <tr>
          <td>Sueldo: </td>
          <td>$<?php echo number_format($data['sueldo']); ?></td>
      </tr>
      
      <tr>
          <td>Obra: </td>
          <td><?php echo $data['nombre_obra']; ?></td>
      </tr> 

           <?php
         }
        
        }

      ?>
      
      <tr>
        <td>Dias Totales (Mes): </td>
        <td><?php echo $count_tot_mes; ?>/30 </td>
      </tr>

      <tr>
        <td>Presente (Dias): </td>
        <td><?php echo $count_pre; ?> </td>
      </tr>

      <tr>
        <td>Ausente (Dias): </td>
        <td><?php echo $count_aus; ?> </td>
      </tr>

      <tr>
        <td>Licencia (Dias): </td>
        <td><?php echo $count_lic; ?> </td>
      </tr>

      <tr>
        <td>Permiso (Dias): </td>
        <td><?php echo $count_per; ?> </td>
      </tr>
      <tr>
        <td><b>Total a pagar : </b></td>
        <?php 
          $sueldo = $muestra_sueldo['tr_sueldo_pactado'];
        ?>
        <!-- <td> (sueldo/30)*dias_presentes </td> -->
        <!-- <td><?php echo $sueldo; ?></td> -->
        <!-- <td><?php echo $count_pre; ?></td> -->
        <td>$<?php echo number_format(round(($sueldo/30)* $count_pre)); ?> por <?php echo $count_pre ?> días presente</td>
      </tr>

    </tbody>
    <div>
     </div>

   <?php

     }  
   
     ?>
    </table>
    <?php
    if(isset($_POST['tr_btn'])){
      echo "<table class='table table-striped' border='1' cellspacing='0'>";
      $fecha = array();
      $estado = array();
      while ($m = mysqli_fetch_array($asistencia_mensual)) {
          $fecha[] = $m['fecha'];
          $estado[] = $m['estado'];
      }
      echo "<tr>";
      echo "<td><b>Fecha</b></td>";
      foreach($fecha as $f) {
          echo "<td>" . $f . "</td>";
      }
      echo "</tr><tr>";
      echo "<td><b>Estado</b></td>";
      foreach($estado as $e) {
          echo "<td>" . $e . "</td>";
      }
      echo "</tr></table>";
      
    }
     
?>
  </form>

  </div>

</div>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.2/umd/popper.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/reportes.js"></script>

</center>

</body>
</html>
