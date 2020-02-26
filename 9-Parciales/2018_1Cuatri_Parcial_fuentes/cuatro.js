function mostrar()
{
var n1;
var n2;

n1=prompt("ingrese primer numero");
n1 =parseInt(n1);
n2=prompt("ingrese numero dos");
n2=parseInt(n2);
if (n1==n2) {
    alert( " n1 es " + n1 + " y n2 es " + n2 );
}else if (n1>n2) {
     n1 - n2;
     alert("El resultado es " + (n1-n2));
    }else{
        n1+n2;
        alert("El resultado es " + (n1+n2));
    }if (n1+n2 >10) {
        alert(n1+n2);
        alert("la suma es " + (n1+n2) + " y supero el 10 ");
    }
}
