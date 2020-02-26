
function mostrar()
{
var largo;
var ancho;
var perimetro;

largo = prompt("ingrese el largo");
largo = parseInt(largo);

ancho = prompt("ingrese el ancho");
ancho = parseInt(ancho);

perimetro = (largo + ancho)*2;
perimetro = parseInt(perimetro);

alert("el perimetro es " +perimetro);
}
