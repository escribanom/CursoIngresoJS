function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta = true;
	var sumaneg = 0;
	var sumapos = 0;
    var contpos = 0;
	var contceros = 0;
	var cantpares = 0;
    var contneg = 0;
    var prompos;
    var promneg;
	var diferencia;
	var num;




do {
	
	do{
	    num = prompt("ingrese un numero");
	    num = parseInt;
		
	}while (isNaN(num));
	    
	    if (num >0) {
				sumapos+=num;
				contpos++;
   				
	    } else if (num < 0) {
				sumaneg += num;
				contneg++;
				
	    } else {
			    contceros++;
	    }
        if (num % 2 == 0) {
			cantpares++;
	    }
        respuesta = prompt("desea continuar");
		
	
    } while (respuesta);

 prompos = sumapos / contpos;

 promneg = sumaneg / contneg;

 diferencia = sumapos - sumaneg;
		
 document.write("promedio de posiivos " + prompos + "<br >");
	
 document.write("promedio de negativos " + promneg + "<br >");
	
 document.write("diferencia " + diferencia + "<br >");
	
 document.write("suma de posiivos " + sumapos + "<br >");
			
 document.write("suma de negativos " + sumaneg + "<br >");
	
 document.write("cantidad de positivos " + contpos + "<br >");
	
 document.write("cantidad de nnegativos " + contneg + "<br >");
	
 document.write("cantidad de ceros " + contceros + "<br >");
	
 document.write("cantidad de pares " + cantpares + "<br >");
}	//FIN DE LA FUNCIÓN