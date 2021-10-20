function indexOf(array, element, position) {
    // TODO

    var index; 
    i = 0        // si tengo un parametro de posisición empezaré con un if, para darle ese inicio a la i
    if (position) 
        i = position

    for ( ; i < array.length; i++) { //me posiciono en el array 0 y comparo el length para entrar al for
        var valorActual = array[i];  //me traigo el valor que esté en i y lo guardo en variable 

        if (valorActual === element) {  //comparo si el valor de la variable "valorActual" es igual al elemento que estoy buscando
           index = i;     //si si es igual al que busco en la variable index la igualo a la posición
           return index;    // y me regresa esa variable con el número de posición 
        } else {
           index = 0; //si no me regresa cero
        }    
    }
}

