//var x = 0, y = 0, 

var step = 50  //variables para alojar coordenadas de la nave  //step, para dar el paso de arriba abajo

var asteroid = {
    x: 0,   //podemos ahora dejar aquó las coordenadas dentro de este objeto
    y: 0,
    width: 100,
    heigth: 100 * 566 / 566  // aquò no es necsario, pero se podría usar regla de 3 para sacar lo porpocional de la imagen el porcentaje de la altura, si al ancho es 100 , 566px, pero aquí como es cuadrada, no es necesario
}

var ship = {
    x: 0,   
    y: 0,
    width: 100,
    heigth: 100 * 512 / 12  // aquí no es necsario, pero se podría usar regla de 3 para sacar lo porpocional de la imagen el porcentaje de la altura, si al ancho es 100 , 566px, pero aquí como es cuadrada, no es necesario
}


var shipImage = document.querySelector('.spaceship')  //pedir el spaceship al documento para trabajar sobre el

shipImage.style.transform = translate(ship.x, ship.y) //aquí puedo cambiar el estlo sobre todo cuando es dinámico, en este caso se cambiarán las coordenadas de la nave 
                                                        //aquí llame a mi función "translate"que está hasta abajo, que es el string 


document.onkeydown = function(event){
   
    if (event.key === 'ArrowRight')
        ship.x += step  //ship.x = ship.x + step; cualquiera de los 2 significa lo mismo

    if (event.key === 'ArrowLeft')
         ship.x -= step 

    if (event.key === 'ArrowDown')
         ship.y += step 

    if (event.key === 'ArrowUp')
        ship.y -= step 

         shipImage.style.transform = translate(ship.x, ship.y)
   
}

//utils:

function translate(x, y){
    return 'translate(' + x + 'px, ' + y + 'px)'

}