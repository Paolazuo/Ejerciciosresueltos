let trabajador;
let sueldo;
let dias;

trabajador=prompt('Ejercicio 1 Ingrese el nombre del trabajador:');
diasT=parseInt(prompt('Ingrese la cantidad de dias trabajado'));
sueldo=diasT*40;

if(diasT>15){
    SueldoNeto=(sueldo+0.2)+sueldo;
}else{
    SueldoNeto=sueldo;
}
alert("El resultado es "+ SueldoNeto);


let numero;

numero=parseInt=(prompt('Ejercicio 2 Ingrese un numero'));

if(numero>500){
    Calcular=(numero*0.18);
}else{
    Calcular=numero;
}
alert("El resultado es "+ Calcular);

function calcular(){
    
}
{
	
    
    
//creacion de variabloes en donde se van a almacenar los datos capturados en las cajas de texto
var monto_ini =0;
var desc =0;
var imp_desc = 0;
var total =0;

//Asignacion del valor capturado en la caja del texto enla variable
monto_ini = document.getElementById('monto_inicial').value;
desc = document.getElementById('descuento').value;

//cálculo del descuento 
imp_desc = (monto_ini * desc)/100;
//Asignacion del resultado en la caja de importe descontado
document.getElementById('importe_descontado').value=imp_desc;
//calculo del total: monto inicial - importe del descuento de acuerdo al porcentaje del descuento y se asigna a la variable total
total = monto_ini - imp_desc
//Asignación del valor de la variable total a la caja de texto total
document.getElementById('total').value=total;
console.log(total);
}

{
var nhombres=0;
var nmujeres=0;
var suma=0;

nhombres=document.getElementById('nhombres').value;
nmujeres=document.getElementById('nmujeres').value;

document.getElementById('suma').value;

suma=nhombres+nmujeres;
nhombres=(nhombres*100)/suma;
nmujeres=(nmujeres*100)/suma;

document.getElementById('El porcentaje de hombres es: '+ nhombres);
document.getElementById('El porcentaje de hombres es: '+ nhombres);
}
