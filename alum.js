class Persona {

    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
       
        
    }


}
const personas = [
    new Persona('Juan', 25),
    new Persona('María', 30),
    new Persona('Pedro', 20),
    new Persona('Laura', 35)
    ];
const personasMayoresDe30 = personas.filter(persona => persona.edad > 30);
console.log(personasMayoresDe30);



