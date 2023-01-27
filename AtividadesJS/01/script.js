

function soma() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var resultado = parseFloat(num1) + parseFloat(num2);

  document.getElementById("soma").innerHTML = resultado;
}

function multiplicacao() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var resultado = parseFloat(num1) * parseFloat(num2);

  document.getElementById("multiplicacao").innerHTML = resultado;
}

function divisao() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var resultado = parseFloat(num1) / parseFloat(num2);

  document.getElementById("divisao").innerHTML = resultado;
}

function resto() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var resultado = parseFloat(num1) % parseFloat(num2);

  document.getElementById("resto").innerHTML = resultado;
}