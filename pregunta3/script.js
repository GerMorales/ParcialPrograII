var table = document.getElementById("tablaSuma");

function sumaNumeros() {
    //Definiendo variables
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var suma = num1 + num2;

    //Insertando filas y celdas
    var numFila = table.rows.length
    var fila = table.insertRow(numFila);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);

    //Cambiando valor de las celdas
    celda1.innerHTML = num1;
    celda2.innerHTML = num2;
    celda3.innerHTML = suma;
    
    //Condicional para cambiar valor de la ultima celda
    if(suma>10) {
        celda4.innerHTML = "10+";
    } else if (suma<10) {
        celda4.innerHTML = "10-";
    } else {
        celda4.innerHTML = "10=";
    }
}

function sumaFinal() {
    //Bucle para recorrer cada fila de la tabla
    for (i = 1, len = table.rows.length, sumaN = 0; i < len; i++) {
    sumaN += Number(document.getElementById('tablaSuma').rows[i].cells[2].innerText);
    }
    alert("La suma de todos los numeros da como resultado "+sumaN);
}