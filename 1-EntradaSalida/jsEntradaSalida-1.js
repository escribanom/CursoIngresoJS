/*Pedir los siguientes datos:
 edad(mayores de 18)
 sexo("f" o "m") y 
 pasaje ("urbano", "nacional" o "internacional");

a) El nombre del hombre con pasaje nacional más joven.

b) El sexo y pasaje del pasajero/a más viejo.

c) La cantidad de mujeres con pasaje urbano o nacional.

d) El promedio de edad entre las mujeres.

e) El promedio de edad entre los hombres con pasaje internacional.*/
 

function mostrar ()
{
   var edad;
   var sexo;
   var pasaje;
   var nombre;
   var respuesta = true;
   var MasculinoNacional = 0;
   var contadorF = 0;
   var promedioM;
   var promedioF;
   var edadMax;
   var edadMin;
   var mujeres = 0;
   var contmujeres = 0;
   var hombres = 0;
   var conthombres = 0;
   var primeraVezHombreNacional=true;
   var nombreNacional;
   var primeraVez=true;
   var sexoMin;
   var pasajeMin;
   do {
        while (isNaN(edad)|| edad < 18 ) {
		   edad = prompt ("ingrese edad valida");
		   edad = parseInt(edad);
        }
 
        while (isNaN(sexo)|| sexo != "m" && sexo != "f" ) {
             sexo = prompt ("ingrese sexo valido");
        }
        while (isNaN(pasaje)|| pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional" ) {
             pasaje = prompt ("ingrese pasaje valido");
        }
        while (!isNaN(nombre)) {
            nombre = prompt ("ingrese nombre ");
        }
        if (sexo == "m" && pasaje == "nacional") {
			if (primeraVezHombreNacional) {
				primeraVezHombreNacional = false;
				primeraVezHombreNacional = edad;
			}else if (edad < primeraVezHombreNacional) {
                primeraVezHombreNacional = edad;
            }
        
		
			if (primeraVez) {
				primeraVez = false;
				edadMin = edad;
				sexoMin = sexo;
				pasajeMin = pasaje;
			}else if (edad < edadMin) {
				edadMin = edad;
				sexoMin = sexo;
				pasajeMin = pasaje;
            }
        }
        if (sexo == "f" && (pasaje == "urbano" || pasaje == "nacional")); {
                contadorF++;
            }
        if (sexo == "f") {
			mujeres+= edad;
			contmujeres++;
        }
        if(sexo == "m" && pasaje "internacional" ) {
			hombres+=edad;
			conthombres;
		}
		respuesta = confirm("desea continuar?");
	} while (respuesta); 
 
 }
 if (contmujeres>0) {
	 promedioF = mujeres / contmujeres
 } else {
	 promedioF= 0;
	 
 }
 if (conthombres>0) {
	promedioM = hombres / conthombres
} else {
	promedioM= 0;
	
}
