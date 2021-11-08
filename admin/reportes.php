<?php require_once "./vista/vista_superior.php" ?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Reportes</title>
<meta charset="UTF-8">

<link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/es/img/favicon.ico?v=a8def514be8a">

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<link rel="stylesheet" href="./css/reportes.css">
</head>

<body>
<center>
<h1>Reportes</h1>
<div class="form-group">
<select class="form-control center" id="elegir_reporte">
  <option value="0" selected disabled></option>
  <option value="1">Reporte Individual</option>
  <option value="2">Reporte por Obra Mensual</option>
  <option value="3">Reporte por Obra Diario</option>
</select>
</div>
<div class="row">
  <div class="content">
    <div class="container">
      <div id="contenedorReportes">
          <div id="reporteIndividual">
              <div class='left'>
              <h3>Reporte Individual</h3>
              <form method="post" action="" class="form-horizontal">

              <label>Seleccione Obra</label>
                    <?php 
                        $consulta = mysqli_query($conexion, 'select * from obras' );
                    ?>  
                    <select name="elegir_obra" id="elegir_obra" class="form-control">
                    </select> 
                <p>  </p>
                <label>Trabajador</label>
                <?php 
                        $consulta = mysqli_query($conexion, 'select * from trabajadores' );
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
          </div>
          <div id="reportePorFecha">
              <div class='right'> 
                <form method="post" action="" class="form-horizontal">
                <h3>Reporte por fecha</h3>
                <label>Seleccione Obra</label>
                      <?php 
                          $consulta = mysqli_query($conexion, 'select * from obras' );
                      ?>  
                      <select name="elegir_obra" id="input1" class="form-control">
                        <?php
                        while($data = mysqli_fetch_array($consulta)){
                        ?>
                          <option value="<?php echo $data['id_obra'] ?>"><?php echo $data['nombre_obra'] ?></option>
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
          </div>
      </div>
      <div class='center' id="reportePorObra">
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

    <br>

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
    if(isset($_POST['asistencia_obra'])){
      $obra = $_POST['reporte_obra'];
      $mes = $_POST['mes_obra'];
      // $asistencia_obra = mysqli_query($conexion, "SELECT a.*, COUNT(estado) as dias_presente, t.tr_nombre, t.tr_obra,t.              tr_sueldo_pactado, t.tr_tipo_sueldo, tp.tipo_sueldo
      //                                             FROM asistencia a
      //                                             INNER JOIN trabajadores t ON t.tr_id = a.tr_id
      //                                             INNER JOIN tipo_sueldo tp ON tp.id = t.tr_tipo_sueldo
      //                                             WHERE a.fecha LIKE '%$mes%' AND a.estado = 'Presente' AND a.obra = '$obra'
      //                                             GROUP BY tr_id;");
      $asistencia_obra = mysqli_query($conexion, "SELECT a.tr_id, t.tr_nombre, t.tr_sueldo_pactado, t.tr_tipo_sueldo, tp.tipo_sueldo,
                                              SUM(CASE WHEN estado = 'Presente' THEN 1 ELSE 0 END) AS count_presente,
                                              SUM(CASE WHEN estado = 'Ausente' THEN 1 ELSE 0 END) AS count_ausente 
                                              FROM asistencia a
                                              INNER JOIN trabajadores t ON t.tr_id = a.tr_id
                                              INNER JOIN tipo_sueldo tp ON tp.id = t.tr_tipo_sueldo
                                              WHERE fecha LIKE '%$mes%' AND obra = $obra
                                              GROUP BY tr_id;");
    }


    if(isset($_POST['tr_fecha'])){

      ?>

    <table class="table table-stripped" id="tablaReporteFecha">
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
             <td><?php echo ucfirst($data['tr_nombre']);?></td>
             <td><?php echo $data['tr_obra']; ?></td>
             <td><?php echo $data['fecha']; ?></td>
             <td>
               <?php if($data['estado'] == 'Presente'){ ?>
                 <span class='badge badge-success'><?php echo $data['estado']; ?></span> 
                <?php }else{ ?>
                 <span class='badge badge-danger'><?php echo $data['estado']; ?></span>  
                 <?php } ?>
               </td>
           </tr>
        </tbody>

     <?php 
   } 
  }
     ?>
     
    </table>

<?php
  // Reporte asistencia por obra
    if(isset($_POST['asistencia_obra'])){
      ?>
      <table id="tablaPorObra" class="table table-centered table-stripped">
      <thead>
      <tr>
          <th>Nombre</th>
          <th>Días Presente</th>
          <th>Días Ausente</th>
          <th>Sueldo</th>
          <th>Tipo Sueldo</th>
          <th>Total Correspondiente</th>
          <th>Total Final a pagar</th>
          <th>Observaciones</th>
        </tr>
      </thead>
      <?php
      while ($m = mysqli_fetch_array($asistencia_obra)) {
          ?>
       <tbody>
       <tr>
         <td><?php echo $m['tr_nombre'] ?></td>
         <td><span class='badge badge-success'><?php echo $m['count_presente'] ?></span></td> 
         <td><span class='badge badge-danger'><?php echo $m['count_ausente'] ?></span></td> 
         <!-- <td>$ <?php echo str_replace(',', '.',number_format($m['tr_sueldo_pactado'])) ?></td> -->
        <td><?php echo $m['tr_sueldo_pactado'] ?></td> 
         <td><?php echo $m['tipo_sueldo']?></td>
        <?php
        if($m['tr_tipo_sueldo'] == 1){
          ?>
          <!-- <td>$ <?php echo str_replace(',', '.',number_format($m['count_presente']* $m['tr_sueldo_pactado'])) ?></td> -->
          <td><?php echo $m['count_presente']* $m['tr_sueldo_pactado'] ?></td>
          <?php 
        }else{
          ?>
          <!-- <td>$<?php echo str_replace(',', '.',number_format($m['count_presente'] * ($m['tr_sueldo_pactado']/30))) ?>
        </td>-->
        <td><?php echo $m['count_presente'] * ($m['tr_sueldo_pactado']/30) ?></td>
          <?php
        }
        ?>
        <td><input type="number" class="form-control addField"></td>
          <td><input type="text" class="form-control addField"></td>
        <?php
        
      }
      ?>

      </tr>
      </tbody>
      </table>
      <?php
  }
     ?>
     
    </table>
<div id="cuadroReporteIndividual">
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
          <td><?php echo ucfirst($data['tr_nombre']);?></td>
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
      ?>
      <table class="table table-striped" id="tablaReporteIndividual">
        <?php 
      $fecha = array();
      $estado = array();
      while ($m = mysqli_fetch_array($asistencia_mensual)) {
          $fecha[] = $m['fecha'];
          $estado[] = $m['estado'];
      }
      ?>
      <thead>
      <tr>
      <td><b>Fecha</b></td>
      <?php
      foreach($fecha as $f) {
      ?>
          <td class="texto_fecha"><?php echo substr($f, 5, 5); ?></td>
      <?php
      }
      ?>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><b>Estado</b></td>
      <?php
      foreach($estado as $e) {
        if($e == 'Presente'){
          echo "<td><span class='badge badge-success'>" . $e . "</span></td>";
        }else{
          echo "<td><span class='badge badge-danger'>" . $e . "</span></td>";
        }
      }
      ?>
      </tr>
      </tbody>
      </table>
      <button id='btnMostrar' class="btn btn-info">Imprimir</button>
      <?php
    }
     ?>
     </div>

  </div>

</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs5/jq-3.6.0/jszip-2.5.0/dt-1.11.3/b-2.0.1/b-html5-2.0.1/b-print-2.0.1/datatables.min.css"/>
 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/bs5/jq-3.6.0/jszip-2.5.0/dt-1.11.3/b-2.0.1/b-html5-2.0.1/b-print-2.0.1/datatables.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

<script src="js/reportes.js"></script>
</center>

</body>
</html>
