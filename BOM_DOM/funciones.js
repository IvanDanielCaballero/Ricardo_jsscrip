
function categorias() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var tabla = document.createElement("table");
            var filaEncabezado = document.createElement("tr")

            var encabezado1 = document.createElement("th")
            var encabezado2 = document.createElement("th")
            var encabezado3 = document.createElement("th")

            encabezado1.innerHTML = "codigo";
            encabezado2.innerHTML = "nombre";
            encabezado3.innerHTML = "descripcion";

            filaEncabezado.appendChild(encabezado1);
            filaEncabezado.appendChild(encabezado2);
            filaEncabezado.appendChild(encabezado3);
            tabla.appendChild(filaEncabezado);

            var cats = JSON.parse(this.response);

            for (var i = 0; i < cats.length; i++) {
                var fila = document.createElement("tr"); 

                var elem1 = document.createElement("td");
                var elem2 = document.createElement("td");
                var elem3 = document.createElement("td");

                elem1.innerHTML = cats[i]["cod"];
                elem2.innerHTML = cats[i]["nombre"];
                elem3.innerHTML = cats[i]["des"];

                fila.appendChild(elem1);
                fila.appendChild(elem2);
                fila.appendChild(elem3);

                tabla.appendChild(fila);
            }

            var body = document.getElementById("principal");
            body.appendChild(tabla);
        }
    };


    xhttp.open("GET", "datos_categorias_json.php", true);
    xhttp.send();
    return false;
}



