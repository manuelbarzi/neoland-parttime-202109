/* SPLICE cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. (MDN Web Docs)

Esta funcion va a tomar dos argumentos obligatorios y otros dos opcionales. Los argumentos obligatorios son el array sobre el que trabajamos y un indice, donde empezará a introducir datos y/o borrarlos. Borra tantos elementos como indique el numero 'deleteIndex' 

*/ 
/*SI NO EXISTE DELETE INDEX recorre el array guardandolo en otro hasta que se encuentra con el indice 'init', guardará en el siguiente indice el 'value' y continua hasta el final 

SI EXISTE DELETE INDEX lo tendremos en cuenta para calcular el indice en el que vuelve a guardar los elementos a partir del 'init'*/



function splice (arr, init, deleteIndex, value){
    var newArr = [];
    var j = 0;
    console.log(arr)
    //debugger
    if( typeof(arr) !== 'object'){
        console.error('Introduce un array')
        
    } else if (typeof(deleteIndex) === 'number'){

        for(let i = 0; i < arr.length; i++){
            if(i === init){
                newArr[j] = value;
                var newIndex = (init + deleteIndex);
                i = newIndex;
                j++
            }
            newArr[j] = arr[i];
            j++
        }
    }    
        /*
        if(value === undefined){
            for(let i = 0; i < arr.length; i++){
                if(i === init){
                    var newIndex = (init + deleteIndex);
                    console.log(newIndex)
                    i = newIndex;
                }
                newArr[j] = arr[i];
                j++
            }

        } else if(typeof(value) === 'string'){
            console.log(value)
            for(let i = 0; i < arr.length; i++){
                
                if(i === init){
                    newArr[j] = value;
                    var newIndex = (init + deleteIndex);
                    i = newIndex;
                    j++
                }
                newArr[j] = arr[i];
                j++
        }
        
        }

    }else if (typeof(deleteIndex) === 'string'){
        console.log(deleteIndex)
    }*/ 
    console.log(newArr)
    return newArr

}

splice([1,2,3,4,5,6,7,8,9], 4, 0,'Melón')