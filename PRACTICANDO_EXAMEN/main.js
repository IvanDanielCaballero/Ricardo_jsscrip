/* Dentro de este archivo, crea una función llamada `creacionPersona()` que utilice la clase
Persona para crear objetos y almacenarlos en un mapa llamado `mapaPersonas`. Utiliza el
nombre como clave y el objeto completo como valor. Al finalizar la inserción de una persona,
llama a la función `mostrarEnTabla()` para actualizar la tabla en el HTML.

-- `calcularEdadPromedio`: Recibe un array de objetos Persona por parámetro y devuelve la
edad promedio de todas las personas en el array.
*/
class Persona {
    constructor(nombre, edad, anioNacimiento, otraPropiedad1, otraPropiedad2) {
        this.nombre = nombre || 'Nombre no especificado';
        this.edad = edad > 0 ? edad : 0;
// Number.isInteger(edad) &&

        const anioActual = new Date().getFullYear();
        this.anioNacimiento =  anioNacimiento >= 1900 && anioNacimiento <= anioActual ?
            anioNacimiento :
            anioActual;
//Number.isInteger(anioNacimiento) &&

        this.otraPropiedad1 = otraPropiedad1;
        this.otraPropiedad2 = otraPropiedad2;
    }

    mostrarInformacion() {
        console.log('Información de la persona:');
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Año de nacimiento: ${this.anioNacimiento}`);
        console.log(`Otra propiedad 1: ${this.otraPropiedad1}`);
        console.log(`Otra propiedad 2: ${this.otraPropiedad2}`);
    }
}


function creacionPersona(nombre, edad, nacimiento, cosa1, cosa2) {
    let p = new Persona(nombre, edad, nacimiento, cosa1, cosa2);
    let mapPersona = new Map();
    mapPersona.set(p.nombre, p); // Agrega al mapa usando p.nombre como clave y el objeto completo como valor
    // Llamar a la función para mostrar en tabla, si está definida
    // mostrarentabla(mapPersona);

    return mapPersona; // Devuelve el mapa creado
}

function calcularEdadPromedio(arrayPersonas) {

    let sumatorio = arrayPersonas.reduce(
        (accumulator, currentValue) => accumulator + currentValue.edad, 0 // El segundo parámetro de reduce es el valor inicial del acumulador
    );

    let promedio = sumatorio / arrayPersonas.length;

    return promedio;
}
function obtenerEdadMasAlta(arrayPersonas) {
    // Utiliza reduce para encontrar la edad más alta
    let edadMaxima = arrayPersonas.reduce((max, persona) => {
        // Compara la edad de la persona actual con la edad máxima encontrada hasta ahora
        max = max <= persona.edad ? persona.edad : max;
        return max;
    }, 0); // Empieza con 0 como valor inicial para la edad máxima

    return edadMaxima;
}
function obtenerEdadMasBaja(arrayPersonas) {
   

    let edadmin = arrayPersonas.reduce((min, persona) => {
       
        min = min <= persona.edad ? min : persona.edad;
        return min
    }, arrayPersonas[0].edad); 

    return edadmin;
}





// funciones.js
function mostrarEnTabla(mapPersona) {
    let tablaContenedor = document.getElementById('tabla-contenedor');

    let tablaHTML = '<table border="1">';
    tablaHTML += '<thead>';
    tablaHTML += '<tr>';
    tablaHTML += '<th>Nombre</th>';
    tablaHTML += '<th>Edad</th>';
    tablaHTML += '<th>Año de Nacimiento</th>';
    tablaHTML += '<th>Otra Propiedad 1</th>';
    tablaHTML += '<th>Otra Propiedad 2</th>';
    tablaHTML += '</tr>';
    tablaHTML += '</thead>';
    tablaHTML += '<tbody>';

    for (let [nombre, persona] of mapPersona) {
        tablaHTML += '<tr>';
        tablaHTML += '<td>' + persona.nombre + '</td>';
        tablaHTML += '<td>' + persona.edad + '</td>';
        tablaHTML += '<td>' + persona.anioNacimiento + '</td>';
        tablaHTML += '<td>' + persona.otraPropiedad1 + '</td>';
        tablaHTML += '<td>' + persona.otraPropiedad2 + '</td>';
        tablaHTML += '</tr>';
    }

    tablaHTML += '</tbody>';
    tablaHTML += '</table>';

    tablaContenedor.innerHTML = tablaHTML;
}


