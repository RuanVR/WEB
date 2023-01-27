var nomes = [];
var emails = [];

function cadastra() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    nomes.push(nome);
    emails.push(email);
}

function lista() {
    var lista = "<ol>";
    for (var i = 0; i < nomes.length; i++) {
        lista += "<li>" + nomes[i] + " " + emails[i] + "</li>";
    }
    lista += "</ol>";
    document.getElementById("lista").innerHTML = lista;
}