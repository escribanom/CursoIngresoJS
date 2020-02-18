function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0
while (clave != "utn750") {
    contador++;
    if (contador == 3) {
        
        break;
        
    }
    clave = prompt("error, reingrese su clave");

    clave =clave.toLowerCase();

}
if (clave == "utn750") {alert("bienvenido")
    
}else{alert("maximos intentos ingresados")}

}//FIN DE LA FUNCIÓN
