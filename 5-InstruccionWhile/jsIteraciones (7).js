function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	
	while (respuesta) {
		
			var num = prompt("ingrese un numero.");
			
			
		
			while (isNaN(num)) {
				
			
				num = prompt("ingrese un numero valido.");
		
			
				num = parseInt(num); 
			
			} 
	
	
		
			contador++;
	
		
			acumulador += num;
			
			respuesta = confirm("desea continuar");
	
		}	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN