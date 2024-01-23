class Persona {
    constructor(nombre, edad, anioNacimiento, otraPropiedad1, otraPropiedad2) {
        this.nombre = nombre || 'Nombre no especificado';
        this.edad = Number.isInteger(edad) && edad > 0 ? edad : 0;
        
        const anioActual = new Date().getFullYear();
        this.anioNacimiento = Number.isInteger(anioNacimiento) && anioNacimiento >= 1900 && anioNacimiento <= anioActual ?
            anioNacimiento :
            anioActual;

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







