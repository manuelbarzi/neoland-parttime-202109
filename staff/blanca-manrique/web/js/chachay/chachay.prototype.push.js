//Empezamos el bucle for con i = 0 porque ya no tenemos el array inicial. Tenemos que ir incrementando this.length en una unidad.

Chachay.prototype.push =function () {
    for(var i =0; i<arguments.length; i++){
        this[this.length] = arguments[i]
        this.length ++
    }
    return this.length
}