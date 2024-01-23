class Vehiculos{

peso=400;
color='blanco';
marca='seat';
modelo='ekor';
velocidad=0;


acelera(velocidad){
    return this.velocidad=velocidad;

}

constructor(peso, color, marca, modelo, velocidad){
    this.peso=peso;
    this.color=color;
    this.marca=marca;
    this.modelo=modelo;
    this.velocidad=velocidad;
}

}




let Vehiculo1=new Vehiculos();
let Vehiculo2=new Vehiculos(300,'negro', 'toyota', 'ddoent', 100);


Vehiculo2.propietario='juan';
//console.log(Vehiculo1);
console.log(Vehiculo2);
console.log(Vehiculo2['modelo']);

console.log(Vehiculo2 instanceof Vehiculos);