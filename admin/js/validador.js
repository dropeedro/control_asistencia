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
  
// Valida campos vacíos
  $("#validaRut").blur(function(){
    if (Fn.validaRut( $("#validaRut").val() )){
        $("#msgerror").html("El rut ingresado es válido");
    } else {
        $("#msgerror").html("El Rut no es válido");
    }
    });

    $("#validaNombre").blur(function () {
        if ($("#validaNombre").val() == ''){
        $("#msgerrorNombre").html("Ingrese un Nombre y Apellido por favor");
        } else {
          $("#msgerrorNombre").html("");
        }
    });

    $("#validaFechaNacimiento").blur(function () {
        if ($("#validaFechaNacimiento").val() == ''){
        $("#msgerrorFechaNacimiento").html("Ingrese la fecha de nacimiento");
        } else {
          $("#msgerrorFechaNacimiento").html("");
        }
    });

    $("#validaDireccion").blur(function () {
        if ($("#validaDireccion").val() == ''){
        $("#msgerrorDireccion").html("Ingrese una dirección");
        } else {
          $("#msgerrorDireccion").html("");  
        }
    });

    $("#validaTelefono").blur(function () {
        if ($("#validaTelefono").val() == ''){
        $("#msgerrorTelefono").html("Ingrese un número de telefono");
        } else {
          $("#msgerrorTelefono").html("");  
        }
    });

    $("#validaEmail").blur(function () {
        if ($("#validaEmail").val() == ''){
        $("#msgerrorEmail").html("Ingrese un email");
        } else {
          $("#msgerrorEmail").html("");  
        }
    });

    $("#validaCargo").blur(function () {
        if ($("#validaCargo").val() == ''){
        $("#msgerrorCargo").html("Ingrese el cargo del trabajador");
        } else {
          $("#msgerrorCargo").html("");  
        }
    });

    $("#validaFechaingreso").blur(function () {
        if ($("#validaFechaingreso").val() == ''){
          $("#msgerrorFechaIngreso").html("Ingrese la fecha de ingreso del trabajador");
        } else {
          $("#msgerrorFechaIngreso").html("");  
        }
    });

    $("#validaSueldo").blur(function () {
        if ($("#validaSueldo").val() == ''){
          $("#msgerrorSueldo").html("Ingrese el sueldo pactado con el trabajador");
        } else {
          $("#msgerrorSueldo").html("");  
        }
    });

    $("#validaTipoPago").blur(function () {
        if ($("#validaTipoPago").val() == '0'){
          $("#msgerrorTipoPago").html("Ingrese el tipo pago");
        } else {
          $("#msgerrorTipoPago").html("");  
        }
    });

    $("#validaContratado").blur(function () {
        if ($("#validaContratado").val() == '0'){
          $("#msgerrorContratado").html("Seleccione si el trabajador está contratado o no");
        } else {
          $("#msgerrorContratado").html("");  
        }
    });

function habilitar() {
  nombre = document.getElementById('validaNombre').value;
  fecha_nacimiento = document.getElementById('validaFechaNacimiento').value;
  direccion = document.getElementById('validaDireccion').value;
  telefono = document.getElementById('validaTelefono').value;
  email =document.getElementById('validaEmail').value;
  cargo = document.getElementById('validaCargo').value;
  sueldo = document.getElementById('validaSueldo').value;
  tipo_pago = document.getElementById('validaTipoPago').value;
  contratado = document.getElementById('validaContratado').value;
  boton = document.querySelector('btn-enviar');
  val = 0;

  if (nombre == "") {
    val++;
  }
  if (fecha_nacimiento == "") {
    val++;
  }
  if (direccion == "") {
    val++;
  }
  if (telefono == "") {
    val++;
  }
  if (email == "") {
    val++;
  }
  if (cargo == "") {
    val++;
  }
  if (sueldo == "") {
    val++;
  }
  if (tipo_pago == "") {
    val++;
  }
  if (contratado == "") {
    val++;
  }
  if (val == 9) {
    boton.disabled = false;
    console.log(val);
  } else {
    boton.disabled = true;
    console.log(val);
  }
}

document.getElementById('validaNombre').addEventListener("keyup", habilitar());
document.getElementById('validaFechaNacimiento').value().addEventListener("keyup", habilitar());
document.getElementById('validaDireccion').value().addEventListener("keyup", habilitar());
document.getElementById('validaTelefono').value().addEventListener("keyup", habilitar());
document.getElementById('validaEmail').value().addEventListener("keyup", habilitar());
document.getElementById('validaCargo').value().addEventListener("keyup", habilitar());
// document.getElementById('validaFechaIngreso').value().addEventListener("keyup", habilitar());
document.getElementById('validaSueldo').value().addEventListener("keyup", habilitar());
document.getElementById('validaTipoPago').value().addEventListener("change", habilitar());
document.getElementById('validaContratado').value().addEventListener("change", habilitar());