$(document).ready(function(){


let fila;
const editarObra = document.querySelector('#formEditar')
const formObra = document.querySelector('#formObras');
editarObra.hidden = true


// Eliminar una obra
$(document).on("click",".btnEliminar",function(){
    fila = $(this);
    id = parseInt($(this).closest("tr").find('td:eq(0)').text());
    console.log(id)
    opcion = 1
    var respuesta = confirm("¿Está seguro de desea eliminar el item "+id+"? Al hacerlo se perderá la información para siempre.");
    if(respuesta){
      $.ajax({
        url: 'db/obras_db.php',
        type: 'post',
        dataType: 'json',
        data: {opcion:opcion, id:id},
        success: function(){
        //   tablaObras.row(fila.parents('tr')).remove().draw();
        }
      });
      window.location.reload();
    }

});

//Editar una obra
$(document).on('click','.btnEditar', function(e){
    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    // console.log(id)

    id = parseInt(fila.find('td:eq(0)').text());
    nombre = fila.find('td:eq(1)').text();
    direccion = fila.find('td:eq(2)').text();
    encargado = fila.find('td:eq(3)').text();
    idEncargado = parseInt(fila.find('td:eq(4)').text());

    
    formObra.hidden = true
    editarObra.hidden = false

    console.log(nombre)
    const idActual = document.querySelector('#editar_id_obra').value = id;
    const nombreActual = document.querySelector('#editar_nombre_obra').value = nombre;
    const direccionActual = document.querySelector('#editar_direccion_obra').value = direccion;
    // const encargadoActual = document.querySelector('.editar_encargados').value = idEncargado
    const encargadoAnterior = document.querySelector('#id_encargado_anterior').value = idEncargado
    console.log(encargadoActual)
    // const nombreActual = document.querySelector('#nombre_obra').value = nombre;
});

// const btn = document.querySelector('#editar');
// btn.addEventListener('click',function(e){
//   e.preventDefault();
// })

});
