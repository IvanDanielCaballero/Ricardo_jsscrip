let persona=new Object();


let tren={
    origen:'alicante',
    destino:'cordoba',
    distancia:'550',
    precio:100,
    mostrar:function(){
        console.log('tren con origen '+this.origen+' y destino '+this.destino+' con precio '+this.precio)
    },

    cambiarprecio:function(importe){
        this.precio=importe;
        return this.precio;
    }
};

let ave=tren;
ave.cambiarprecio(400);
ave.mostrar()




/*
console.log(persona);
persona.nombre='ivan';
persona.peso='56';
persona.altura='1.80';
persona.imc=persona.peso/persona.altura;
persona.frecuencia='50';
persona.dormir=function(){
return persona.frecuencia=40;

}
persona.dormir();
console.log(persona.toString());
*/
