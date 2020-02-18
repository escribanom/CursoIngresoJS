function mostrar()
{
var intents = 0
	
var numero = prompt("ingrese un número entre 0 y 10.");

document.getElementById("Numero").value = numero

while (!(numero <= 9 && numero >= 0 || isNaN(numero) )) {intents++
		

	numero = prompt("ingrese un número valido ");
	numero = parseInt
	if (intents == 3) {
		
break;
	}
}
if (numero <= 9 && numero >=0) {
	alert("correcto");
	
}
}//FIN DE LA FUNCIÓN