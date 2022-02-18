describe ("forEach")

var shopping= new Carrito(6,15,50)
var sum=0

res= shopping.forEach(function(value){
    sum=sum+value
    return sum

})

if( typeof res === 'number'
&&res === 71
)
success('super')

else

fail('mal muy mal')