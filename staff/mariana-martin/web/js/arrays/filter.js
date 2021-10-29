function filter(array, condition) {

    var newArray = [] //me va a regresar un nuevo array

    for ( var i = 0; i < array.length; i++){
        var current = array[i]

        if (condition(current)){
            //newArray = newArray + current       //si dejo este código así, si me lo va a guardar en el nuevo array, pero sin espacios , todo pegado
        newArray[newArray.length] = current   //si lo pongo así , me lo guardará al final del array, pero respetando las palabras (strings)
        } 
        
    }
    return newArray
}