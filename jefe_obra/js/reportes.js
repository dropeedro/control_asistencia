

$(function () {

	// Lista de obras
	$.post( './db/filtrar_obras.php' ).done( function(respuesta)
	{
		$( '#elegir_obra' ).html( respuesta );
	});

	// lista de trabajadores
	$('#elegir_obra').change(function()
	{
		var obra = $(this).val();

		// Lista de trabajadores
		$.post( './db/filtrar_trabajadores.php', { obra: obra} ).done( function( respuesta )
		{
			$( '#tr_id' ).html( respuesta );
		});
	});

	// Lista de trabajadores
	$( '#tr_id' ).change( function()
	{
		var tr_id = $(this).children('option:selected').html();
	});

});