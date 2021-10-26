// El método join, devulve un string concatenando elementos del array
//puede estar separador por comas o especificado en el parametro del string como separator
// si un elemento es undefined, null o array vacío , devuelve un string vacío 

function join(array, separator){

var joined = ''  //nueva var para guardar el string que mande

    for ( i = 0 ; i < array.length; i++){
        var element =  array[i]   //se crea una variable element para hacerlo más legible y guadamos el indice de cada iteración

        joined = joined + element // vamos a igualar el joined y vamos a guardar el element ahí

        if (separator !== '') //si separador no es igual a string vacío que haga lo de abajo, si es un string vacío no se necesita hacer lo de abajo
            if ( i < array.length -1 ) //como no queremos que nos ponga coma al final, indicamos que en el length -1 no pongo
            joined = joined + ','         // si la i está por debajo (menor) del último elemento length -1, detiene aquí para no poner coma al último
                // else
                //     joined + joined + '.'   //se pondría esto si quisieramos un puntito al final         
        
    }
return joined

}