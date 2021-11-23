function reverse(string) {
    // TODO
    var reverted = [] // guardamos el array, empieza vacio
    var count = 0 // que empiece a contar de 0

    for (var i = string.length - 1; i >= 0; i--) { // longitud del string (el texto que
        //que le damos en la variable) -1 para que cuente desde el final, que esa iteracion
        // sea mayor o igual que cero, que será siempre, y lo restamos una vez para que vaya
        // de final al principio
        reverted[count] = string[i] // el contador del array
        count++ // le sumamos 1 para siga contando
    }
    return reverted // cuando ya es 0 nos devuelve el resultado

}