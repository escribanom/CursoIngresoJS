function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta = true;
	
	while (respuesta) {
		var num = prompt("ingrese un numero.");
		num = parseInt
	
		
		 while (isNaN(num)) {
				
			
			num = prompt("ingrese un numero valido.");
		
			
			num = parseInt(num); 
			
		} 
	
	
		if (num>=0) {
			positivo = positivo + num;
		}else{
			negativo *= num;
	    }
		
	 respuesta = confirm("desea continuar");
			
	
    }	
 document.getElementById('suma').value=positivo;
 document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN