function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var intents;
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
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN