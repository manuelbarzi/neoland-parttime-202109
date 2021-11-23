//El método split() divide un string en un array de cadenas mediante la separación de la cadena en subcadenas. El método split() devuelve el nuevo array.

// SEPARADOR:
// Indica que caracter que vamos a usar para separar la cadena. Cuando se encuentra, el separador es eliminado de la cadena y las subcadenas obtenidas se devuelven en un array. Si se omite el separador, el array devuelto contendrá un sólo elemento con la cadena completa. Si el separador es una cadena vacía la cadena es convertida en un array de carácteres.

//LIMITE: Opcional
//Especifica un límite sobre el número de divisiones a realizar.


function split (string, separador){
    var newArray = []
    var j = 0
    var word = ""
    debugger
    for(var i = 0; i< string.length; i++){
        if(string[i] != separador){
            word = word + string[i]
        }else {
            newArray[j] = word
            word = ""
            j++
        }
    }
    return newArray
}