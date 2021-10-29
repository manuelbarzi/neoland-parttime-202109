//Para inyectar sólo un elemento:
// function push(array, element){
//     array[array.length] = element
//     return array.length
// }

//Para inyectar + de un elemento:
function push(array){
    for(var i =1; i<arguments.length; i++)
    array[array.length] = arguments[i]
    return array.length
}