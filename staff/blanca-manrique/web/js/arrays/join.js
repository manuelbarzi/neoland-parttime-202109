//SEPARADOR: Si se omite, los elementos del arreglo son separados con una coma (","). Si el separador es un string vacío todos los elementos son unidos sin ningún carácter entre ellos.
//Si un elemento del array es undefined, null o un array vacío devuelve un string vacío


function join(array, separator) {
    var joined = ''

    if (separator === undefined) separator = ','

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        //if (element !== null && element !== undefined && !(element instanceof Array && element.length === 0))
        //if (element !== '' && element !== null && element !== undefined && !(element instanceof Array && element.length === 0))

        if (element !== '' && element != undefined && !(element instanceof Array && element.length === 0))
            joined = joined + element

        if (separator !== '' && i < array.length - 1)
            joined = joined + separator
    }
    return joined
}