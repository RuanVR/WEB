function checkSelection() {
    var checar = document.getElementsById("opc");
    var checado = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checar[i].checked) {
            checado = true;
            break;
        }
    }

    if (checado) {
        alert("Seleção concluída com sucesso!");
    } else {
        alert("Selecione pelo menos um item antes de continuar!");
    }
}