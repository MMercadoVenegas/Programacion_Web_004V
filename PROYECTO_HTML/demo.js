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
    var rut = document.getElementById("rut").value
    var largoRut = rut.length
    if(largoRut < 0 || largoRut > 10){
        alert("El rut es invalido")
    }

    var appaterno = document.getElementById("appaterno").value
    var largoAppaterno = appaterno.length
    if(largoAppaterno < 3 || largoAppaterno > 20){
        alert("El apellido paterno es invalido")
    }
    var edad = document.getElementById("edad").value
    var valorEdad = parseInt(edad)
    if(valorEdad < 18 || valorEdad > 36){
        alert("La edad esta fuera del ragnarok")
    }
    
}

function escribirCarta(){
    var rut = document.getElementById("rut").value
    var carta = ˋRut: ${rut}ˋ
    document.getElementById("carta").value = carta
}
demo()