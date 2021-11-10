function slice (arr, init, end){
    var sliced = [];

    //  Si init es positivo 
    end = end? end: arr.length
        for(let i = init; i< end; i++){
            var element = arr[i]
            sliced[sliced.lenght] = element;
        }

//  Si init es negativo
    if( init < 0 && end === undefined){
        for(let i = (arr.length + init); i< arr.length; i++){
            var element = arr[i]
            sliced[sliced.lenght] = element;
        }


//  ERRORES: Indices inválidos
    } else if ( isNaN(init) || isNaN(end)){
        console.error('Introduce un índice numérico')
    } else if ( end >= arr.length || end < 0) {
        console.error('Indique un indice entre 0 y '+ (arr.length-1))
        return sliced
    } else if (end < init){
        console.error('El indice inicial no puede ser superior al final')
        return sliced
    }

    return sliced
}
console.log(slice([1,2,3,4,5,6,7,8,9], -12))