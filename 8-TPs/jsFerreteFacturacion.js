/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1;
    
    var num2;
    
    var num3;

    var resultado;
    
    num1 = document.getElementById("PrecioUno").value;

    num1 = parseInt (num1);

    num2 = document.getElementById("PrecioDos").value;
    
    num2 = parseInt (num2);
    
    num3 = document.getElementById("PrecioTres").value;

    num3 = parseInt (num3);

    resultado = (num1) + (num2) + (num3);

    alert ("La suma es " + resultado);
}
function Promedio () 
{
    var num1;
    
    var num2;
    
    var num3;

    var promedio;
    
    num1 = document.getElementById("PrecioUno").value;

    num1 = parseInt (num1);

    num2 = document.getElementById("PrecioDos").value;
    
    num2 = parseInt (num2);
    
    num3 = document.getElementById("PrecioTres").value;

    num3 = parseInt (num3);

    promedio = (num1) + (num2) + (num3);

    alert ("El promedio es " + promedio/ 3);
}
function PrecioFinal () 
{
	var num1;
    
    var num2;
    
    var num3;

    var resultado;
    
    num1 = document.getElementById("PrecioUno").value;

    num1 = parseInt (num1);

    num2 = document.getElementById("PrecioDos").value;
    
    num2 = parseInt (num2);
    
    num3 = document.getElementById("PrecioTres").value;

    num3 = parseInt (num3);

    resultado = (num1) + (num2) + (num3);

    alert ("El precio final es " + resultado * 1.21);
}