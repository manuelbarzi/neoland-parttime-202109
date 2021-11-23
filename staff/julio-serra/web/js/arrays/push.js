function push(array, element) {
    // añadir al final un elemento
    // para acceder al final aprovechamos el ultimo indice con array.length
    array[array.length] = element
    return array.length

}