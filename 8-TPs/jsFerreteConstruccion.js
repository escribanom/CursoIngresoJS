/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var num1;
    
    var num2;
    
    var resultado;
    
    num1 = document.getElementById("Largo").value;

    num1 = parseInt (num1);

    num2 = document.getElementById("Ancho").value;
    
    num2 = parseInt (num2);
    
    resultado = [(num1 * 2 ) + (num2 * 2)] * 3;

    alert ("Se necesitan " + resultado + " metros de alambre");
}
function Circulo () 
{
    var num1;
    
    var resultado;
    
    num1 = document.getElementById("Radio").value;

    num1 = parseInt (num1);

    resultado = (2 * Math.PI * num1) * 3 ;
    
    alert ("Se necesitan " + resultado + " metros de alambre");
}
function Materiales () 
{
	
}