//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). 
//Crea un array nuevo con el resultado

//Parámetros: 1. INICIO---sí incluido!!! por defecto es 0, si es negativo (-2) le estás indicando que extraiga los 2 últimos elementos del array, es decir, es como si empezases por el final. 
//2. FIN----no incluido!!!si lo omitimos nos va a extraer hasta el final de la secuencia, si es negativo empieza a desplazarse desde el final. 
//3. VALOR QUE NOS DEVUELVE



function slice(array, start, end){
    var newArray = []

  
    if (start >= 0 && end > 0) {
        for(var i =start; i<end; i++){
            var element = array[i]
            newArray[newArray.length] = element
        }
        return newArray
    }  
    else if(start >= 0 && end > array.length){
        for(var i =start; i<=end; i++){
            var element = array[i]
            newArray[newArray.length] = element
        }
        return newArray
    }  
    else if (start >= 0 && end < 0) {
        for (var i = start; i<(array.length + end); i++) {
            var element = array[i]
            newArray[newArray.length] = element
        }
        return newArray
    }
    else if (start >= 0 && end === undefined) {
        for (var i = start; i < array.length; i++) {
            var element = array[i]
            newArray[newArray.length] = element
        }
        return newArray
    }
    else if (start < 0 && end === undefined) {

        for (var i = (array.length + start); i < array.length; i++) {
            var element = array[i]
            newArray[newArray.length] = element
        }
        return newArray
    }
}