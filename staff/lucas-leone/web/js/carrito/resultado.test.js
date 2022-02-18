describe ('total de compra')

describe ('filter')
var shopping= new Carrito('camiseta', 6, 'sombrero', 15, 'reloj',50)

var result =shopping.filter (function(item){
    return typeof item === 'number'
})


if ( result instanceof Carrito
    && result[0]=== 6
    && result[1]=== 15
    && result[2]=== 50
    )
    success('filter done')
    else
    fail("filter fail")


describe ('forEach')
var sum= 0
var total= result.forEach(function(value){
    sum=sum+value
    return sum
})

if( typeof total === 'number'
&& total === 71
){
success('forEach done')
compras('TOTAL:',total)}
else{
fail('forEach fail')}








