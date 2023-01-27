function calcular(){
    
    var salario = document.getElementById("salario").value;


    var percentual;
    var aumento;
    var novo;

    if (salario <= 280) {
        percentual= 0.2;
    } else if (salario > 280 && salario <= 700) {
        percentual = 0.15;
    } else if (salario > 700 && salario <= 1500) {
        percentual = 0.1;
    } else {
        percentual = 0.05;
    }
    aumento = salario * percentual;
    novo = parseFloat(salario) + parseFloat(aumento);

    document.getElementById("antes").innerHTML = salario;
    document.getElementById("perc").innerHTML = percentual;
    document.getElementById("aumento").innerHTML = aumento;
    document.getElementById("novo").innerHTML = novo;
}