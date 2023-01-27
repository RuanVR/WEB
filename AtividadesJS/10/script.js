var tip = ["administrador", "professor", "aluno", "estagiario", "funcionario", "pesquisador", "publico"];
var se = ["admin", "prof", "aluno", "estagiario", "funcionario", "pesquisador", "publico"];

function valida() {

    var tipo = document.getElementById("tipo").value;
    var senha = document.getElementById("senha").value;

    if (senha === "" || senha.length < 8) {
        return;
    }

    var i = tip.indexOf(tipo);
    if (se[i] === senha) {
        window.location.href = "contato.html";
    } else {
        return;
    }
}