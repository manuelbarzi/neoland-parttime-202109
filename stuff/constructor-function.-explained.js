



//Construiremos una función como si fuera un Array, que se llama Chachay

//function Chachay(){        //función constructora
 //   this.length = 0       //se indica que el new Chachay será con length 0
//}                       //se le pone this ,es un contexto, se refiere al objeto sobre el cual se trabaja
                        //por ejemplo aquí se está creando un nuevo objetc en memoria "la var c = new Chachay"
                        // el objeto c tiene una longitud de 0 a ese objeto apunta this
                        // y lo que tenga aquí adentro con el this, se aplica a la instancia de var c 

// el New , crea un objeto nuevo en memoria  y el this, apunta a ese objeto nuevo cuando llamas a la función

//  var c = new Chachay               //aquí creo uno nuevo y tiene la función del Chachay

//ejemplo:

//    var c = new Chachay(1, 2, 3, 4, 5)      //esta es la función y recibe los argumentos
                                             //el this es el Chachay nuevo 


//function Chachay() {
    
//     for ( var i =0; i < arguments.length; i++){
//         var element = arguments[i]

//         this[i] =element    //se agregarán a this , que si escirbes en la consola es el Chachay, entonces estaremos gaurdando los elementos en el Chachay
//     }
//     this.length = arguments.length  //la longitus igual al número de argumentos
// }                                      //como estamos reporufciendo un tipo array, tenemos que poner length, porque los arrays tienen length 

// var c = new Chachay('a', 'b', 'c') //estos son los argumentos
// //es un objeto que se comporta como un array lo que estamos haciendo

// //si quisieramos hacer el método forEach, en este Chachay, no nos funciona
// // si quisieramos agregarlo , copiamos el foreach que se hizo ;


// //prototype, es un objeto donde puedes poner métodos
// Chachay.prototype.forEach = function(callback){
//     for ( var i = 0; i < this.length; i++){
//         callback(this[i], i, this)
//     }
// }

// c.forEach(console.log)

