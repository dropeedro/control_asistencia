const meses = new Array ("Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic");
const f=new Date();
console.log(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

const nombreObra = document.querySelector('#nombreObra').value
console.log(nombreObra)

$(document).ready(function() {
    $('#tabla_anticipos').DataTable( {
        "columnDefs": [
            {"className": "dt-center", "targets": "_all"}
          ],
        dom: 'Bfrtip',
        buttons: [
            {extend: 'copy', text:'Copiar'}, 
            {extend: 'csv', text: 'CSV'}, 
            {extend: 'excel', text: 'Excel'}, 
            {extend: 'pdf', text: 'PDF', filename: 'adelanto_' + nombreObra + '_' + meses[f.getMonth()] + '_' + f.getFullYear()}, 
            {extend: 'print', text: 'Imprimir'},
            {
                extend: "print",
                text: 'Imprimir Horizontal',
                customize: function(win)
                {
     
                    var last = null;
                    var current = null;
                    var bod = [];
     
                    var css = '@page { size: landscape; }',
                        head = win.document.head || win.document.getElementsByTagName('head')[0],
                        style = win.document.createElement('style');
     
                    style.type = 'text/css';
                    style.media = 'print';
     
                    if (style.styleSheet)
                    {
                      style.styleSheet.cssText = css;
                    }
                    else
                    {
                      style.appendChild(win.document.createTextNode(css));
                    }
     
                    head.appendChild(style);
             }
          }
        ]
    } );
} );

// const btnGuardar = document.querySelector('#btnGuardar');

// btnGuardar.addEventListener('click', guardarAdelanto);

// function guardarAdelanto(e){
//   e.preventDefault();
//   var data_id = $(this).attr('data-id');
//   const inputs = document.querySelector('.adelanto');
//   console.log(inputs)
// }