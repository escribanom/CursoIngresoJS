/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

var max

var min

function comenzar()
{
eleccionMaquina = Math.floor (Math.random ()*(max-min)) + min;

min = 1

max = 4

}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == 1) {
        alert("empata")
        
    }else{
        if (eleccionMaquina == 2) {
            alert("pierde")
            
        }else{
            alert("gana")
        }
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if (eleccionMaquina == 1) {
    alert("gana")
    
}else{
    if (eleccionMaquina == 2) {
        alert("empata")
        
    }else{
        alert("pierde")}


}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 1) {
        alert("pierde")
        
    }else{
        if (eleccionMaquina == 2) {
            alert("gana")
            
        }else{
            alert("empata")}
}   }    }