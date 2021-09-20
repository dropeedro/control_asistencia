var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
      rutCompleto = rutCompleto.replace("‐","-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
        return false;
      let tmp   = rutCompleto.split('-');
      let digv  = tmp[1]; 
      let rut   = tmp[0];
      if ( digv == 'K' ) digv = 'k' ;
      
      return (Fn.dv(rut) == digv );
    },
    dv : function(T){
      let M=0,S=1;
      for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
      return S?S-1:'k';
    }
  }
  
  
    $("#validaRut").blur(function(){
    if (Fn.validaRut( $("#validaRut").val() )){
        $("#msgerror").html("El rut ingresado es válido");
    } else {
        $("#msgerror").html("El Rut no es válidooo");
    }
    });

    $("#validaNombre").blur(function () {
        if ($("#validaNombre").val() == ''){
        $("#error").html("Ingrese un Nombre y Apellido por favor");
        } else {
        $("#error").html("Nombre y apellidos validos");
        }
    });

    // $("#validaRut").blur(function(){
    //     if (Fn.validaRut( $("#validaRut").val() )){
    //       $("#msgerror").html("El rut ingresado es válido....:D");
    //     } else {
    //       $("#msgerror").html("El Rut no es válido :'( ");
    //     }
    //   });
    //   $("#nombre").blur(function(){
    //     if ($("#nombre").val() == ''){
    //       $("#msgerrornombre").html("Ingrese un Nombre y Apellido por favor");
    //     } else {
    //       $("#msgerrornombre").html("Nombre lleno");
    //     }
    //   });