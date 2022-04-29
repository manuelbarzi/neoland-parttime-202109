//El método slice() extrae una sección de una cadena y devuelve una cadena nueva.
//Parámetros:

//1. start: Índice donde empieza la extracción. El primer elemento corresponde con el índice  0.
//Si el índice especificado es NEGATIVO, indica un desplazamiento desde el final del array. slice(-2)extrae los dos últimos elementos del array
//Si inicio es OMITIDO el valor por defecto es 0.
//Si inicio es MAYOR A LA LONGITUD DEL ARRAY, se devuelve un array vacío.

//2. end: Índice  que marca el final de la extracción. slice extrae hasta, pero SIN INCLUIR EL FINAL slice(1,4) extrae desde el segundo elemento hasta el cuarto  (los elementos con índices 1, 2,  y 3).
//Si el índice es NEGATIVO, end indica un desplazamiento desde el final de la secuencia.slice(2,-1) extrae desde el tercer hasta el penúltimo elemento en la secuencia.
//Si fin es OMITIDO, slice extrae hasta el final de la secuencia (arr.length).
//Si fin es MAYOR A LA LONGITUD DEL ARRAY, slice extrae hasta el final de la secuencia (arr.length).

function slice(string, start, end){
    var newString = ""
    debugger
    if (start >= 0 && end > 0) {
        if(end>string.length){
            for(var i= start; i< string.length; i++){
                var stringIndex = string[i]
                newString = newString + stringIndex
            }
            return newString
        }else{
            for (var i = start; i < end; i++) {
                var stringIndex = string[i]
                newString = newString + stringIndex
            }
            return newString
        }
    }

    else if (start >= 0 && end === undefined) {
        for (var i = start; i < string.length; i++) {
            var stringIndex = string[i]
            newString = newString + stringIndex
        }
        return newString
    }

    else if (start >= 0 && end <0) {
        for (var i = start; i < string.length+end; i++) {
            var stringIndex = string[i]
            newString = newString + stringIndex
        }
        return newString
    }

    else if (start < 0 && end === undefined) {
        for (var i = (string.length+start); i < string.length; i++) {
            var stringIndex = string[i]
            newString = newString + stringIndex
        }
        return newString
    }

    else if (start < 0 && end < 0 ) {
        for (var i = (string.length + start); i < (string.length + end); i++) {
            var stringIndex = string[i]
            newString = newString + stringIndex
        }
        return newString
    }

    else if(start>string.length){
        return newString
    }


}






