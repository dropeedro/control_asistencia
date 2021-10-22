<?php require_once "./vista/vista_superior.php" ?>
<!DOCTYPE html>
<html lang="es">
<head>
<title>Anticipos</title>
<link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/es/img/favicon.ico?v=a8def514be8a">

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

<meta charset="UTF-8">


<style type="text/css">

  .status{
    font-size: 10px;
  }

</style>

</head>
<body>
<center>
      <h3>Adelantos</h3>
<div class="row">
  <div class="content">
    
    <form action="" method="post" class="form-horizontal col-md-4 col-md-offset-4">
    <div class="form-group">
      <div class="form-group">
          <label>Seleccione Obra</label>
          <?php 
              $consulta = mysqli_query($conexion, 'select * from obras' );
          ?>  
          <select name="elegir_obra" id="elegir_obra" class="selectpicker">
            <option value = "0">Seleccione obra</option>
            <?php
            while($data = mysqli_fetch_array($consulta)){
            ?>
              <option name="<?php echo $data['id_obra']; ?>" value="<?php echo $data['id_obra']; ?>"><?php echo $data['nombre_obra']; ?></option>
            <?php 
              }
            ?>
          </select>
       </div>
       <div class="form-group">
         <label>Fecha Inicio Anticipo: </label>
         <input class="form-control" type="date" name="fechaInicio" id="fechaInicio">
       </div>
       <div class="form-group">
         <label>Fecha Final Anticipo: </label>
         <input class="form-control" type="date" name="fechaFinal" id="fechaFinal">
       </div>
       </div>
               
     <input type="submit" id="btnMostrar" class="btn btn-primary col-md-3 col-md-offset-5" value="Mostrar" name="mostrar" />

    </form>

    <div class="content"></div>
<form action="./db/anticipos_db.php" method="post">
<div class='container'>
    <table id="tabla_anticipos" class="table table-centered table-stripped">
      <thead>
        <tr>
        <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Obra</th>
          <th scope="col">Sueldo</th>
          <th scope="col">Tipo Sueldo</th>
          <th scope="col">Asistencias Últimos 15 días</th>
          <th scope="col">Anticipo Correspondiente</th>
          <th scope="col">Anticipo Final</th>
          <!-- <th scope="col">Tipo Sueldo</th> -->
        </tr>
      </thead>
   <?php

    if(isset($_POST['mostrar'])){
     $i=0;
     $radio = 0;
     $mostrar_obra = $_POST['elegir_obra'];
     $fecha_inicio = $_POST['fechaInicio'];
     $fecha_termino = $_POST['fechaFinal'];
    //  $all_query = mysqli_query($conexion, "SELECT 
    //                                         count(a.tr_id) as n_asistencias,
    //                                         a.tr_id as tr_id,
    //                                         t.tr_nombre as tr_nombre,
    //                                         #REPLACE(Format(t.tr_sueldo_pactado, 0), ',','.') as tr_sueldo,
    //                                         t.tr_sueldo_pactado as tr_sueldo,
    //                                         t.tr_tipo_sueldo as tr_tipo_sueldo,
    //                                         a.obra as tr_obra
    //                                         #DATE_FORMAT(a.fecha, '%m/%d/%Y') as fecha
    //                                         FROM trabajadores t
    //                                         INNER JOIN asistencia a ON a.tr_id = t.tr_id
    //                                         WHERE a.obra = '$mostrar_obra' AND a.estado = 'Presente' AND a.fecha BETWEEN CURDATE() - INTERVAL 15 DAY AND CURDATE()
    //                                         GROUP BY a.tr_id;");
     $all_query = mysqli_query($conexion, "SELECT 
                                          count(a.tr_id) as n_asistencias,
                                          a.tr_id as tr_id,
                                          t.tr_nombre as tr_nombre,
                                          #REPLACE(Format(t.tr_sueldo_pactado, 0), ',','.') as tr_sueldo,
                                          t.tr_sueldo_pactado as tr_sueldo,
                                          t_s.tipo_sueldo as tr_tipo_sueldo,
                                          a.obra as tr_obra,
                                          o.nombre_obra as nombre_obra
                                          #DATE_FORMAT(a.fecha, '%m/%d/%Y') as fecha
                                          FROM trabajadores t
                                          INNER JOIN asistencia a ON a.tr_id = t.tr_id
                                          INNER JOIN obras o ON o.id_obra = t.tr_obra
                                          INNER JOIN tipo_sueldo t_s ON t_s.id = t.tr_tipo_sueldo
                                          WHERE a.obra = '$mostrar_obra' AND a.estado = 'Presente' AND a.fecha BETWEEN '$fecha_inicio' AND '$fecha_termino'
                                          GROUP BY a.tr_id;");
    //  $all_query = mysqli_query($conexion, "SELECT 
    //                                       count(a.tr_id) as n_asistencias,
    //                                       a.tr_id as tr_id,
    //                                       t.tr_nombre as tr_nombre,
    //                                       #REPLACE(Format(t.tr_sueldo_pactado, 0), ',','.') as tr_sueldo,
    //                                       t.tr_sueldo_pactado as tr_sueldo,
    //                                       t_s.tipo_sueldo as tr_tipo_sueldo,
    //                                       a.obra as tr_obra,
    //                                       o.nombre_obra as nombre_obra
    //                                       #DATE_FORMAT(a.fecha, '%m/%d/%Y') as fecha
    //                                       FROM trabajadores t
    //                                       INNER JOIN asistencia a ON a.tr_id = t.tr_id
    //                                       INNER JOIN obras o ON o.id_obra = t.tr_obra
    //                                       INNER JOIN tipo_sueldo t_s ON t_s.id = t.tr_tipo_sueldo
    //                                       WHERE a.obra = '$mostrar_obra' AND a.estado = 'Presente' AND a.fecha BETWEEN CURDATE() - INTERVAL 15 DAY AND CURDATE()
    //                                       GROUP BY a.tr_id;");

     while ($data = mysqli_fetch_array($all_query)) {
       $i++;
     ?>
  <body>
     <tr>
       <td><?php echo $data['tr_id']; ?> <input type="hidden" name="tr_id[]" value="<?php echo $data['tr_id']; ?>"> </td>
       <td><?php echo $data['tr_nombre']; ?></td>
       <td><?php echo $data['nombre_obra']; ?><input type='hidden' id='nombreObra' name="tr_obra[]" value= "<?php echo $data['tr_obra']?>"></td>
       <td>$<?php echo str_replace(',', '.',(number_format($data['tr_sueldo']))); ?></td>
       <td><?php echo $data['tr_tipo_sueldo']; ?></td> 
       <td><?php echo $data['n_asistencias']; ?>/15</td> 
       <?php 
        $sueldo = $data['tr_sueldo'];
        $count_presente = $data['n_asistencias'];
        $tipo_sueldo = $data['tr_tipo_sueldo'];

       ?>
       <td>$<?php 
       if($tipo_sueldo == 'Diario' ){
         echo str_replace(',','.',(number_format($sueldo*$count_presente)));
       }else{
         echo str_replace(',', '.',(number_format(round(($sueldo/2)/$count_presente)))); ?></td>
       <?php } ?>
       <td><input type="number" name="anticipo[]" class="form-control adelanto"></td> 
     </tr>
  </body>

     <?php

        $radio++;
      } 
      ?>
    </table>
      <input type="submit" id='btnGuardar' class="btn btn-primary col-md-2 col-md-offset-10" value="Guardar" name="att" /><?php
} ?>
    </div>
    <center><br>
    
  </center>

</form>
  </div>

</div>

</center>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs5/jq-3.6.0/jszip-2.5.0/dt-1.11.3/b-2.0.1/b-html5-2.0.1/b-print-2.0.1/datatables.min.css"/>
 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/bs5/jq-3.6.0/jszip-2.5.0/dt-1.11.3/b-2.0.1/b-html5-2.0.1/b-print-2.0.1/datatables.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>


<script src='js/anticipos.js'></script>
<script>
  $('#elegir_obra').select2();

</script>
  </body>
</html>