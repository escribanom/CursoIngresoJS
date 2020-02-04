/*Pedir los siguientes datos:
 edad(mayores de 18)
 sexo("f" o "m") y 
 pasaje ("urbano", "nacional" o "internacional");

a) El nombre del hombre con pasaje nacional más joven.

b) El sexo y pasaje del pasajero/a más viejo.

c) La cantidad de mujeres con pasaje urbano o nacional.

d) El promedio de edad entre las mujeres.

e) El promedio de edad entre los hombres con pasaje internacional.*/
 

function()
{
   var edad = prompt ("ingrese edad");
   var sexo = prompt("ingrese sexo");
   var pasaje = prompt("ingrese tipo de pasaje");
   var nombre = prompt("ingrese nombre");
   var respuesta = true;
   var MasculinoNacional = 0;
   var contadorF = 0;
   var promedioM;
   var promedioF;
   var edadMax;
   var edadMin;
   var mujeres= 0;
   var hombres= 0;
   do {
        while (isNaN(edad)|| edad < 18 ) {
           edad = prompt ("ingrese edad valida");
        }
 
        while (isNaN(sexo)|| sexo != "m" && sexo != "f" ) {
             sexo = prompt ("ingrese sexo valido");
        }
        while (isNaN(pasaje)|| pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional" ) {
             pasaje = prompt ("ingrese pasaje valido");
        }
        while (isNaN(nombre)) {
            nombre = prompt ("ingrese nombre valido");
        }
        if (sexo == "m" && pasaje == "nacional") {
            if (isNaN(edadMin)){
                edadMin = edad;
            }else if (edadMin = edad) {
                edadMin = edad;
            }
        
        if (isNaN(edadMax)||edadMax > edad) {
            edad = edadMax;
        }else if (edadMax) {
            edadMax = edad;
        }
        if (sexo == "f" && pasaje == "urbano" || pasaje == "nacional"); {
                contadorF++;
            }
        if (sexo == "f") {
            mujeres++;
        }else if(sexo == "m"){
            hombres++;
        }
            
        
        
            
          
      
      }
       
      respuesta = confirm("desea continuar?");
   } while (respuesta); 
 
 }