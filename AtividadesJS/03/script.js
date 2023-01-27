function recebedata(){
    var data = prompt("Digite uma data no formato dd/mm/aaaa:");
    var datas = data.split("/");
    
    var dia = datas[0];
    var mes = datas[1];
    var ano = datas[2];
    
    var nomes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    var mes = nomes[mes - 1];
    
    alert(dia + " de " + mes + " de " + ano);
}

