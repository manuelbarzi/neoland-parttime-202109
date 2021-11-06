describe ('filter')


shopping= new Carrito ('camiseta', 6, 'sombrero', 15, 'reloj',50)

var res =shopping.filter (function(item){
    return typeof item === 'number'
})


if ( res instanceof Carrito
    && res[0]=== 6
    && res[1]=== 15
    && res[2]=== 50
    )
    success('seeeee')
    else
    fail("mal muy mal")