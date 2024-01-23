function muestra_tabla(num) {
    let filas = 10;
   

    document.write('<table>');
    document.write("<tr>", "<th>tabla de "+num+"</th>");
    document.write("<th>por</th>");
    document.write("<th>numero</th>");
    document.write("<th>igual</th>", "</tr>");

    for (let index1 = 0; index1 <= filas; index1++) {
        document.write("<tr>");
        document.write("<td>" + num + "</td>");
        document.write("<td>" + 'x' + "</td>");
        document.write("<td>" + index1 + "</td>");
        document.write("<td>" + num * index1 + "</td>");

        document.write("</tr>");
    }

    document.write("</table>");


}
/*
para pintar la tabla:
<script src="script4.6.js"></script>
    <style>
        table,
        td,
        th {
            border-color: green;
            border-style: solid;
        }

        table {
            border-width: 3px;
            border-collapse: collapse;
            width: 50%;
        }

        td.th {
            border-width: 1px;
        }
    </style>
    */