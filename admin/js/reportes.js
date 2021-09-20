

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