/* SLICE toma 2 o 3 argumentos. El primero es un string y los otros dos se corresponden a un índice. Slice toma los dos índices y secciona el string entre los caracteres que correspondan, resultando un nuevo string.
Con este algoritmo conseguimos que:
    ·Si declaramos los dos argumentos (indice inicial y final):
        -compruebe si ambos son números: devuelve error si no lo son.
        -compruebe si el inicial es menor que el final: devuelve error si no lo son.
        -comprueba que el final no es mayor que el indice mayor del string: devuelve error si lo es.
    ·Si sólo declaramos uno, lo tosmará como inicial:
        -Si es positivo, recorrerá el string hasta el final.
        -Si es negativo, empezará por el final y recorrerá tantos indices hacia atrás como se indique.
    ·Si por error solo introducimos el string, también devolverá un error, ya que no reconoce los argumentos 2 y 3 como números
*/
function slice (str, init, end){
    var newStr = '';
    
    if( init < 0 && end == undefined){
        var realIndex = (str.length + init);
        for(let i = realIndex; i< str.length; i++){
            newStr = newStr + str[i];
        }
    } else if( init > 0 && end == undefined){
        for(let i = init; i< str.length; i++){
            newStr = newStr + str[i];
        }
    } else if ( isNaN(init) || isNaN(end)){
        console.error('Introduce un índice numérico')
    } else if ( end >= str.length || end < 0) {
        console.error('Indique un indice entre 0 y '+ (str.length-1))
    } else if (init > 0 && end > init){
        for(let i = init; i<= end; i++){
            newStr = newStr + str[i];
        }
    } else if (end < init){
        console.error('El indice inicial no puede ser superior al final')
    }

    return newStr
}

console.log('DEMO slice')

var sliced = slice('Quiero 3 manzanas', -8);
console.log(sliced) //'manzanas'

var sliced = slice('En un lugar de La Mancha, de cuyo nombre no quiero acordarme', 15, 23);
console.log(sliced) //'La Mancha'

