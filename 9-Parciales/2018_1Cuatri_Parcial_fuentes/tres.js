function mostrar()
{
 var precio;
 var descuento;
 var preciofinal;
 precio = prompt("ingrese el precio");
 precio =parseInt(precio);
 descuento = prompt("ingrese el descuento");
 descuento =parseInt(descuento);
 descuento= (precio* descuento) / 100;
 descuento = parseInt(descuento);
 preciofinal = precio - descuento;
 document.getElementById("elPrecioFinal").value = preciofinal;
}
