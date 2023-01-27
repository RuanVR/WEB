function preview() {
    var titulo = document.getElementById("titulo").value;
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var secao1 = document.getElementById("secao1").value;
    var cor1 = document.getElementById("cor1").value;
    var secao2 = document.getElementById("secao2").value;
    var cor2 = document.getElementById("cor2").value;

    var janela = window.open()
    janela.document.write("<html><head><title>" + title + "</title></head><body>");
    janela.document.write("<h1>" + titulo + "</h1>");
    janela.document.write("<h2 style='color: " + cor1 + ";'>" + sub1 + "</h2>");
    janela.document.write("<p>" + secao1 + "</p>");
    janela.document.write("<h2 style='color: " + cor2 + ";'>" + sub2 + "</h2>");
    janela.document.write("<p>" + secao2 + "</p>");
    janela.document.write("</body></html>");
    janela.focus();
}