/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
    while (isNaN(num)|| num < 1){
        num = prompt("ingrese un numero");
        num = parseInt(num);
        
}
}
function NumerosPares () 
{
    ComenzarIngreso();
    var cantpares = 2;
    var num = document.getElementById("numero").value;
    num =parseInt(num);


    
  
    
    
    
    while (cantpares < num)
        {
            document.write( + cantpares + "<br >");
            cantpares+=2;

        }
    
    
}
function NumerosImpares () 
{
    ComenzarIngreso();
    var cantimpares = 1;
    var num = document.getElementById("numero").value;
    num =parseInt(num);


    while (cantimpares <= num)
        {
            document.write( + cantimpares + "<br >");
            cantimpares+=2;
         
        }
    
    
}
function NumerosDivisibles () 
{
    ComenzarIngreso();

    var contador = 1;
    var cantidadDivisibles;
    while (cantimpares <= 101)
    {
     if (num/contador==0) {
        cantidadDivisibles++;
     }
     contador++;
    }

}
function VerificarPrimos () 
{
    
    var cantidadprimos
    var verifprimos = 2
    var respuesta = true;
    var num = document.getElementById("numero").value;
    num = parseInt;

    do {
        if (num && verifprimos === 0) {
            
            respuesta == false;
        }else{
            if (respuesta == true) {
                cantidadprimos++;
            }
        }
        
    } while (verifprimos < num);
    
   
    document.write(" verificar primos " + cantidadprimos + "<br >");
    
}
function Primos () 
{
    var cantidadprimos = 0;
    var cantprimos = 2
    var respuesta = true;
    var num = document.getElementById("numero").value;
    num = parseInt;
    
    do {
        if (num && cantprimos === 0) {
            
            respuesta == false;
        }else{
            if (respuesta== true) {
                cantidadprimos++;
            }
        }
        
    } while (verifprimos < num);

        document.write("primos " + cantidadprimos + "<br >");
}    