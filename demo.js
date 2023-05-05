function demi(){
    var texto = "<p>texto inyectado</p>"
    document.getElementById("demo").innerHTML = texto
}

function saludar (){
    var nombre = document.getElementById("nombre").value
    alert("Hola " + nombre)
}

function saludo(){
    alert("Hola mundo")
}

function saludoBoton(){
    alert("Hola Mundo de Botón")
}


function sumar(){
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)

    if (num1 > 0 && num2 >0){
        var suma = num1 + num2
        document.getElementById("resultado").value = suma
    }else{
        alert("Los numeros deben ser mayor que 0")
    }
    

    //alert("La suma es: " + suma)
}

function validar(){
    var formularioOk = true

    var rut = $("#rut").val()
    var largoRut = rut.length
    if(largoRut < 9 || largoRut > 10){
        formularioOk = false
        $("#msgRut").show()
    }

    var appaterno = $("#appaterno").val()
    var largoAppaterno = appaterno.length
    if(largoAppaterno < 3 || largoAppaterno > 20){
        formularioOk = false 
        $("#msgAppaterno").show()
    }
    var edad = $("#edad").val()
    var valorEdad = parseInt(edad)
    if(valorEdad < 18 || valorEdad > 36){
        formularioOk = false
        alert("La edad esta fuera del rango")
    }

    if(formularioOk){
        escribirCarta()
    }
}

function escribirCarta(){
    var rut = $("#rut").val()
    var nombre = $("#nombre").val()
    var carta = `Rut: ${rut} - Nombre ${nombre}`
    $("#carta").val (carta)
    $("#formulario").hide()
    $("#btnMostrar").show()
}

function mostrar(){
    $("#formulario").show()
    $("#carta").hide()
    $("#btnMostrar").hide()
}
demo()