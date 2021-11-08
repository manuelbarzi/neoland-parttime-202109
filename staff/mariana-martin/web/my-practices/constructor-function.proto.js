//Clases o función constructora

//La cual nos sirva como proptotuo para instanciar 1 o más objeto, para que se indpendiente uno del otro

// Función Constrcutora (clase): 

var Clase = function(){
//para crear o acceder a la sporpiedades y metodos de la función sse usa this
//porpiedad
this.name = 'Paulo';

//Vamos a crear Métodos:
//1er método setName : va a ser para modificar el valor de esta prpiedad
this.setName = function(nombre){
    this.name = nombre;

}
//2do metodo nos va a servir para mostrat el valor d ela porpiedad name
this.getName = function(){
    return this.name;
}
}

//Vamos a instanciar 2 objetos nuevos:
// de esta forma se instancian los dos objetos a partir de una función consturcrora
//los objetos son independientes
var obj1 = new Clase();
var obj2 = new Clase();

//Vamos a modificar la propiedad name del objeto 2
obj2.setName('César') //como parametro pasamos el nuevo nombre, ya estamos modificando el name pero sólo del objeto 2

document.write(obj1.getName()+ '<br>');
document.write(obj2.getName());

//---------------------IMportante---------------//
//Parece que funciona todo bien per
//todo esto afecta al rendimiento del script ya que por cada objeto que nosotros estamos instanciando 
//se van a definir tantas porpiedad y metodos sea necesario, osea: se vuelven a crear el this.name y todo el cuerpo en cada isntancia
//Entonces si tenemos muchos objetos para instanciar a partir de esa clase, por cada proceso se estaría creando cada vez
//para rendimiento, velocidad y uso de mempria, será muy alto,
// JS cuenta con la propeidad prototype, en el siugiente archivo, será la explicación
