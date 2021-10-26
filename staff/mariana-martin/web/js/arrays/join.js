// El método join, devulve un string concatenando elementos del array
//puede estar separador por comas o especificado en el parametro del string como separator
// si un elemento es undefined, null o array vacío , devuelve un string vacío 

function join(array, separator){

var joined = ''  

    if (separator === undefined) separator = ',' // o un if como este, esto afuera del for

    for ( i = 0 ; i < array.length; i++){
        var element =  array[i]   
      


            //teenemos que evaluar el el parametro (argumento) element, es un null, undefined,  y si no se cumple esos if 
                                                                //aquí se usa instance para comparar un array y también comaparamos si es un array vacío (lenght ===0 )
            if (element !== '' && element != undefined && !(element instanceof Array && element.length === 0))
             joined = joined + element
           
           if (separator !== '' && i < array.length -1)     
           
            joined = joined + separator         
                   
    }
return joined

}