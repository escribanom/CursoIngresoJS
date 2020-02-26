
function mostrar()
{
    var largo = 0;
    var ancho = 0;
    var perimetro = 0;
    
    largo = prompt("ingrese el largo");
    largo = parseInt(largo);
    
    ancho = prompt("ingrese el ancho");
    ancho = parseInt(ancho);
    
    perimetro = (largo + ancho)*2;
    perimetro = parseInt(perimetro);
    
    alert("el perimetro es " +perimetro);
}
