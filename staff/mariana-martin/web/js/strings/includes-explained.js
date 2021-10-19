function includes (string, search, position)

var j = 0  //variable para almacenar el indice de "search" osea la palabra que se está buscando

for (var i = position? position : 0; i < string.length; i++) { //se hace un operador ternario para iniciar desde la posición 
                                                                //que se indique si se tiene el parametro de posisicón si no empieza de 0 , como normalmente

var char = string[i] //una variable para guardar cada valor del string que vaya iterando
var target = search[i] //una variable para guardar el valor de la palabra buscada (search)

if (char === target) { // se comparan las dos variables, una me va a traer una letra (valor) del string y otra otra letra(valor) del search (de la palabra buscada)
    j++ // si son iguales me agrega a la variable j

    if (j === search.length){  // se compara ahora si j (que va a ir almacenando si es igual al largo de search (que es la palabra buscada))
        return true        //retorna true
    } else {
        j = 0   // si no es igual al largo del search(palabra buscada) la j es 0 
    }
}
}