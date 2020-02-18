function mostrar()
{

	var contador=0;
	var acumulador=0;
	var intents = 5;

	while (contador < intents) {
	
		var num = NaN;
	
	
		while (isNaN(num)) {
	
		
			num = prompt("ingrese un numero.");
	
		
			num = parseInt(num); 
	

	
		} 


	
		contador++;

	
		acumulador += num;
	

	}	
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN