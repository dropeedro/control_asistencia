// console.log('hola')
$(document).ready(function() {
    const btnMostrar = document.querySelector('#mostrar');
    btnMostrar.disabled = true;

    const inputFecha = document.querySelector('#fecha');
    inputFecha.max = new Date().toISOString().split("T")[0];
    inputFecha.addEventListener('change', () =>{
        btnMostrar.disabled = false;

    });
    // $('#tablaAsistencia').DataTable( {
    //     "columnDefs": [
    //         {"className": "dt-center", "targets": "_all"}
    //       ],
        // dom: 'Bfrtip'
        // buttons: [
        //     {extend: 'copy', text:'Copiar'}, 
        //     {extend: 'csv', text: 'CSV'}, 
        //     {extend: 'excel', text: 'Excel'}, 
        //     {extend: 'pdf', text: 'PDF'}, 
        //     {extend: 'print', text: 'Imprimir'},
        //     {
        //         extend: "print",
        //         text: 'Imprimir Horizontal',
        //         customize: function(win)
        //         {
     
        //             var last = null;
        //             var current = null;
        //             var bod = [];
     
        //             var css = '@page { size: landscape; }',
        //                 head = win.document.head || win.document.getElementsByTagName('head')[0],
        //                 style = win.document.createElement('style');
     
        //             style.type = 'text/css';
        //             style.media = 'print';
     
        //             if (style.styleSheet)
        //             {
        //               style.styleSheet.cssText = css;
        //             }
        //             else
        //             {
        //               style.appendChild(win.document.createTextNode(css));
        //             }
     
        //             head.appendChild(style);
        //      }
        //   }
        // ]
    } );
// } );

