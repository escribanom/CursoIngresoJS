function mostrar()
{
    var respuesta;
    var letra;
    var numero;
    var cantPares = 0;
    var cantImpares = 0;
    var cantCeros = 0;
    var cantPos= 0;
    var contPos = 0;
    var cantNeg = 0;
    var contNeg = 0;
    var primeraVez = true;
    var numMin
    var numMax
    var letraMin
    var letraMax;

    do {
        numero = prompt("ingrese un numero");
        numero = parseInt(numero);
        
        while (isNaN(numero)|| numero < -100 || numero > 100 ) {
            numero = prompt("error!! ingrese un numero valido");
            numero = parseInt(numero);
        }
        
        while (isNaN(letra)) {
            letra = prompt("ingrese una letra");
        }

        if (numero % 2 == 0) {
            cantPares++;
        }else if (numero != 0) {
            cantImpares++;
        }

        if (numero>0) {
            cantPos+= numero;
            contPos++;
        }else if (numero < 0) {
            cantNeg+= numero;
            contNeg++;
        }

        if (primeraVez) {
            primeraVez=false;
            numMax = numero;
            numMin = numero;
            letraMax =letra;
            letramin = letra;
        }else{
            if (numero > numMax) {
                numMax=numero;
                letraMax=letra;
            }else if (numero < numMin) {
                numMin = numero;
                letraMin = letra;
            }
        }
        respuesta = confirm("desea continuar");
} while (respuesta);


} 
document.write("cantidad de pares " + cantPares + "<br>");
document.write("cantidad de impares " + cantImpares + "<br>");
document.write("cantidad de ceros " + cantCeros+ "<br>");

if (contpos == 0) {
    promedio = 0;
} else {
    promedio = cantPos /cantNeg;
}

document.write("promedio positivos " + promedio + "<br>");
document.write("suma negativos " + cantNeg + "<br>");
document.write("cantidad de pares " + cantPares + "<br>");
document.write("cantidad de pares " + cantPares + "<br>");
