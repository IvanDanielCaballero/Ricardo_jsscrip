<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Alumnos</title>
    <script src="alum.js"></script>
    <style>
        body{
            margin: 20px;
            background-color: antiquewhite;
        }


        label{
            display: block;
            margin-top: 10px;
        }


        input{
            padding: 8px;
        }


        button{
            display: block;
            width: 300px;
            margin-top: 30px;
            box-shadow: 10px 5px black;
        }
    </style>
</head>
<body>
    <h2>Registro de Alumno</h2>


    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" >


    <label for="edad">Edad:</label>
    <input type="number" id="edad" >


    <label for="asignaturas">Asiganturas (separadas por comas): </label>
    <input type="text" id="asignaturas">
   
    <button onclick="registrarAlumno()">Registrar Alumno</button>
    <button onclick="mostrarAlumnos()">Mostrar Informacion</button>
   
    <ul id="listaAlumnos"></ul>
</body>
</html>




// —---------------------------------------
   
    class Alumno {
        constructor(nombre, edad, asignaturas) {
            this.nombre = nombre;
            this.edad = edad;
            this.asignaturas = [...asignaturas.split(',')];
        }


        mostrarInformacion() {
            return `Nombre: ${this.nombre},
                    Edad: ${this.edad},
                    Asignaturas: ${this.asignaturas.join(', ')}`;
        }
    }


    let mapaAlumnos = new Map();


    function registrarAlumno() {
        let nombre = document.getElementById("nombre").value;
        let edad = parseInt(document.getElementById("edad").value);
        let asignaturas = document.getElementById("asignaturas").value;


        if (nombre && !isNaN(edad) && asignaturas) {
            let nuevoAlumno = new Alumno(nombre, edad, asignaturas);
            mapaAlumnos.set(nombre, nuevoAlumno);
            alert("Alumno registrado");
        } else {
            alert("Completa los datos correctamente");
        }
    }


    /* function mostrarAlumnos() {
        let nombreAlumno = prompt("Ingrese el nombre del alumno:");


        if (mapaAlumnos.has(nombreAlumno)) {
            let alumno = mapaAlumnos.get(nombreAlumno);
            alumno.mostrarInformacion();
        } else {
            alert("El alumno no fue encontrado.");
        }
    } */


    function mostrarAlumnos() {
        let listaAlumnosElement = document.getElementById("listaAlumnos");
        listaAlumnosElement.innerHTML = "";
   
        for (let [nombre, alumno] of mapaAlumnos) {
            let listItem = document.createElement("li");
            listItem.textContent = alumno.mostrarInformacion();
            listaAlumnosElement.appendChild(listItem);
        }
    }

