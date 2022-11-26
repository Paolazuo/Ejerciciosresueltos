function CalcularPromedio(){
    var v1=document.getElementById("n1").value;
    var v2=document.getElementById("n2").value;
    var v3=document.getElementById("n3").value;
    var pro= (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;document.getElementById("promedio").innerHTML=pro;
}

function conversor() {
    let a = document.getElementById("valormm").value;

    let resultado1 = parseFloat(a)*100
    document.getElementById('resultado_cm').innerHTML = resultado1

    let resultado2 = parseFloat(a)*1000
    document.getElementById('resultado_mm').innerHTML = resultado2

}

function soles() {
    let a = document.getElementById("valor_dolar").value;

    let resultado = parseFloat(a)*3.38
    document.getElementById('resultado_soles').innerHTML = resultado

}

function igv (){
    let base = document.getElementById("costo").value;
    let onlyigv = parseFloat(base)*0.18
    document.getElementById('igv').innerHTML = onlyigv
    let total = parseFloat(base)*1.18
    document.getElementById('total').innerHTML = total
}