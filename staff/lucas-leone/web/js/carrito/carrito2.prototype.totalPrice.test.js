describe('Total Price')

var cart = new Carrito2('camiseta', 6, 'sombrero', 15, 'reloj',50, true,100)

var res=cart.totalPrice()


if(res instanceof Array
&& res[0]=== 71
&& res[1]=== -14.2
&& res[2]=== 5
&& res[3]=== 61.8
){
success('like a boss')}
else{
    fail('noup')
}

describe('Días de espera')

var cart = new Carrito2('camiseta', 6, 'sombrero', 15, 'reloj',50, true,100)

var ship= cart.days()

compras(cart.product,res[0],res[1],res[2],res[3],ship)



