function mostrar()
{

    var contador = 0;

    var sumaNota = 0;

    var nota;

    var promedio;
    
    var minNota;

    var minSexo;

    var contadorVarones;

    while (contador < 5) {
       contador++;
    
    
       do {
           var nota = prompt ("ingrese una nota");
           nota = parseInt;
       } while (isNaN(nota)|| nota < 0 || nota > 10);

       do {
           var sexo = prompt("Ingrese sexo")
       } while (sexo != "m" && sexo != "f");
    
    }

    sumaNota += nota;

    if (contador == 1) {
        minNota = nota;
        minSexo = sexo;
    }else if (nota < minNota) {
        minNota = nota;
        minSexo = sexo;
    }

    if (nota>= 6 && sexo == "m") {
        contadorVarones++;
    }
}
promedio = sumaNota / contador;

alert("promedio " + promedio);
alert("minimo " +  minNota + " sexo minimo " +)