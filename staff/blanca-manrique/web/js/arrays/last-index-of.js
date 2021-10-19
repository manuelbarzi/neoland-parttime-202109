//Valor de retorno: El último índice del elemento en el arreglo o -1 si no se encuentra.


function lastIndexOf(array, element) {
    var index = 0
    debugger
for (var i=0; i<array.length; i++){
    var item = array[i]

    if (item == element){
        index=i
    }
}
if (index==0){
    index = -1
}
return index
}

