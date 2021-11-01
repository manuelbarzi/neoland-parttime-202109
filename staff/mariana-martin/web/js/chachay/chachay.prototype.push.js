Chachay.prototype.push = function(){

    for ( var i = 0; i < arguments.length; i++ ) //aquí inicia desde cero por que en el test ya no tenemos array //en el caso de push normal si, porque iniciabamos del primer argumneto, el cero era array (en test)
            this[this.length] = arguments[i]

   return this.length
}