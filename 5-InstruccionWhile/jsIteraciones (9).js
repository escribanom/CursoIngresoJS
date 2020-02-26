function mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var respuesta=true;
    var pv;
	while(respuesta)
	{
		do {
			num = prompt("ingrese un numero valido.");
			
			num = parseInt(num);
		} while (isNaN(num));
	 
		if (pv) {
			pv = false;
			min =num;
			max= num;
		}else{
			if (num < min) {
				min = num;
			}
		if (num > min) {
			min = num;
		}
		
        }
		respuesta = confirm("desea continuar");
		
		
		
		/*var num = prompt("ingrese un numero.");
     num= parseInt;
		while (isNaN(num)) {
			
		
		  num = prompt("ingrese un numero valido.");
	
		
		  num = parseInt(num);
		 }
		  if(pv){
			 pv=false;
			 max=num;
			 min=num;
		  }else{
		    if (num>max) {
				  max=num;
		    }else{
				if (num<min) {
						min=num;
				}	}
        }
		respuesta = confirm("desea continuar");
	}*/


 document.getElementById("maximo").value=max
 document.getElementById("minimo").value=min

}//FIN DE LA FUNCIÓN