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
		
	 var num = prompt("ingrese un numero.");
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
	}

 document.getElementById("maximo").value=max
 document.getElementById("minimo").value=min

}//FIN DE LA FUNCIÓN