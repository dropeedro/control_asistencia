$(document).ready(function(){

	// $('#tablaReporteIndividual').DataTable( {
	// 	"columnDefs": [
	// 		{"className": "dt-center", "targets": "_all"}
	// 	],
    //     dom: 'frtip'
        // buttons: [
		// 	{extend: 'copy', text:'Copiar'}, 
        //     {extend: 'csv', text: 'CSV'}, 
        //     {extend: 'excel', text: 'Excel'}, 
        //     {extend: 'pdf', text: 'PDF'}, 
        //     {extend: 'print', text: 'Imprimir'},
        //     {
		// 		extend: "print",
        //         text: 'Imprimir Horizontal',
        //         customize: function(win)
        //         {
					
		// 			var last = null;
        //             var current = null;
        //             var bod = [];
					
        //             var css = '@page { size: landscape; }',
		// 			head = win.document.head || win.document.getElementsByTagName('head')[0],
		// 			style = win.document.createElement('style');
					
        //             style.type = 'text/css';
        //             style.media = 'print';
					
        //             if (style.styleSheet)
        //             {
		// 				style.styleSheet.cssText = css;
        //             }
        //             else
        //             {
		// 				style.appendChild(win.document.createTextNode(css));
        //             }
					
        //             head.appendChild(style);
		// 		}
		// 	}
        // ]
    // } );

	// $('#tablaReporteFecha').DataTable( {
	// 	"columnDefs": [
	// 		{"className": "dt-center", "targets": "_all"}
	// 	],
    //     dom: 'Bfrtip',
    //     buttons: [
    //         {extend: 'csv', text: 'CSV', className:'btn btn-info'}, 
    //         {extend: 'excel', text: 'Excel', className:'btn btn-info'}, 
    //         {extend: 'pdfHtml5', text: 'PDF', className:'btn btn-info'}, 
    //         {extend: 'print', text: 'Imprimir', className:'btn btn-info'},
    //         {
	// 			extend: "print",
    //             text: 'Imprimir Horizontal',
    //             className:'btn btn-info',
    //             customize: function(win)
    //             {
					
	// 				var last = null;
    //                 var current = null;
    //                 var bod = [];
					
    //                 var css = '@page { size: landscape; }',
	// 				head = win.document.head || win.document.getElementsByTagName('head')[0],
	// 				style = win.document.createElement('style');
					
    //                 style.type = 'text/css';
    //                 style.media = 'print';
					
    //                 if (style.styleSheet)
    //                 {
	// 					style.styleSheet.cssText = css;
    //                 }
    //                 else
    //                 {
	// 					style.appendChild(win.document.createTextNode(css));
    //                 }
					
    //                 head.appendChild(style);
	// 			}
	// 		}
    //     ]
    // } );

    var buttonCommon = {
        exportOptions: {
            format: {
                body: function ( data, row, column, node ) {
                    //check if type is input using jquery
                    return $(data).is("input.addField") ?
                    $(data).val():
                    data;
                    }
            }
        }
    };

    $("#tablaPorObra").dataTable( {
        dom: 'domValB',
        buttons: [
            $.extend( true, {}, buttonCommon, {
                extend: 'copyHtml5'
            } ),
            $.extend( true, {}, buttonCommon, {
                extend: 'excelHtml5'
            } ),
            $.extend( true, {}, buttonCommon, {
                extend: 'pdfHtml5'
            } )
        ]
    } );
	// $('#tablaPorObra').DataTable( {
    //     "columnDefs": [
    //         {"className": "dt-center", "targets": "_all"}
    //       ],
    //     dom: 'Bfrtip',
    //     buttons: [
    //         {extend: 'copy', text:'Copiar'}, 
    //         {extend: 'csv', text: 'CSV'}, 
    //         {extend: 'excel', text: 'Excel'}, 
    //         {extend: 'pdf', text: 'PDF'}, 
    //         {extend: 'print', text: 'Imprimir'},
    //         {
    //             extend: "print",
    //             text: 'Imprimir Horizontal',
    //             customize: function(win)
    //             {
     
    //                 var last = null;
    //                 var current = null;
    //                 var bod = [];
     
    //                 var css = '@page { size: landscape; }',
    //                     head = win.document.head || win.document.getElementsByTagName('head')[0],
    //                     style = win.document.createElement('style');
     
    //                 style.type = 'text/css';
    //                 style.media = 'print';
     
    //                 if (style.styleSheet)
    //                 {
    //                   style.styleSheet.cssText = css;
    //                 }
    //                 else
    //                 {
    //                   style.appendChild(win.document.createTextNode(css));
    //                 }
     
    //                 head.appendChild(style);
    //          }
    //       }
    //     ]
    // } );
});
	
	$(function () {
		
	// Lista de Continentes
	$.post( './db/filtrar_obras.php' ).done( function(respuesta)
	{
		$( '#elegir_obra' ).html( respuesta );
	});

	// lista de Paises
	$('#elegir_obra').change(function()
	{
		var obra = $(this).val();

		// Lista de Paises
		$.post( './db/filtrar_trabajadores.php', { obra: obra} ).done( function( respuesta )
		{
			$( '#tr_id' ).html( respuesta );
		});
	});

	// Lista de Ciudades
	$( '#tr_id' ).change( function()
	{
		var tr_id = $(this).children('option:selected').html();
	});

});


const tipoReporte = document.querySelector('#tipoReporte');
const elegirReporte = document.querySelector('#elegir_reporte');
const reporteIndividual = document.querySelector('#reporteIndividual');
const reportePorFecha = document.querySelector('#reportePorFecha');
const reportePorObra = document.querySelector('#reportePorObra');

const tablaIndividual = document.querySelector('#tablaReporteIndividual');
const tablaPorFecha = document.querySelector('#tablaReporteFecha');
const tablaPorObra = document.querySelector('#tablaPorObra');


const contenedorReportes = document.querySelector("#contenedorReportes");

const cuadro = document.querySelector("#cuadroReporteIndividual");

reporteIndividual.hidden = true;
reportePorFecha.hidden = true;
reportePorObra.hidden = true;

elegirReporte.addEventListener('change', () =>{
    alert(elegirReporte.value);
    if(elegirReporte.value == 1){
        reporteIndividual.hidden = false;
        reportePorFecha.hidden = true;
        tablaPorFecha.hidden = false;
    }
    if(elegirReporte.value == 2){
        reportePorObra.hidden = false;
    }
    if(elegirReporte.value == 3){
        reportePorFecha.hidden = false;
        reporteIndividual.hidden = true;
        tablaIndividual.hidden = true;
    }
});

btnMostrar = document.querySelector('#btnMostrar');
btnMostrar.addEventListener('click', printDiv);


function printDiv() {
    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
  
    mywindow.document.write(`<html><head><title>titulo</title>`);
    mywindow.document.write('<link rel="stylesheet" href="../css/reportes.css" /></head>');
    mywindow.document.write(cuadro.innerHTML);
    mywindow.document.write('</body></html>');
  
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
  
    mywindow.print();
    mywindow.close();
  
    return true;
  }