
//Continuación del archivo constructor-function.proto.js

//Usando la propeidad prototype: nos ayuda a mejorar el rendimiento, nos ayuda a añadir métodos a una clase o función constructora

var Clase = function(){
//todas la sporpeidaddes en el otro archivo las declaramos aqui, pero ahora lo haremos fuero, mejorando rendimiento
}

//
Clase.prototype.name = "Paulo";

//declarar los dos métodos que utilizadmos:

Clase.prototype.setName = function(nombre){
    this.name = nombre;
}
Clase.prototype.getName = function(){
    return this.name;
}

//Ahora vamos a instanciar los dos objetos:

var objt1 = new Clase();
var objt2 = new Clase();

objt2.setName('César');

document.write(objt1.getName()+ '<br>');
document.write(objt2.getName());

//Ahora vemos que funciona igual, sólo que ahora es mejor así para mejorar el rendimiento
