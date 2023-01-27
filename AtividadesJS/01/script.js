function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var table = document.createElement("table");
    var row1 = table.insertRow(0);
    var row2 = table.insertRow(1);
    var row3 = table.insertRow(2);
    var row4 = table.insertRow(3);
    
    var cell1_1 = row1.insertCell(0);
    var cell1_2 = row1.insertCell(1);
    var cell2_1 = row2.insertCell(0);
    var cell2_2 = row2.insertCell(1);
    var cell3_1 = row3.insertCell(0);
    var cell3_2 = row3.insertCell(1);
    var cell4_1 = row4.insertCell(0);
    var cell4_2 = row4.insertCell(1);
    
    cell1_1.innerHTML = "Soma: ";
    cell1_2.innerHTML = Number(num1) + Number(num2);
    cell2_1.innerHTML = "Produto: ";
    cell2_2.innerHTML = Number(num1) * Number(num2);
    cell3_1.innerHTML = "Divisão: ";
    cell3_2.innerHTML = Number(num1) / Number(num2);
    cell4_1.innerHTML = "Resto: ";
    cell4_2.innerHTML = Number(num1) % Number(num2);
    
    document.body.appendChild(table);
  }