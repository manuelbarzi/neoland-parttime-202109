//El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.

//var i; va a recorrer el string
// var j; va a recorrer el element
function includes (string, element){
    debugger
    for(var i=0; i<string.length; i++){  
        if (element[0] = string[i]){
            for (var j=0; j<element.length; j++){
                if(element[j]== string[i + j]){
                    return true
                }
            }
        }
    return false
    }
}
