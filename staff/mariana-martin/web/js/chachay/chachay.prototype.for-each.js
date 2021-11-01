Chachay.prototype.forEach = function(callback){  //se usa proptotype para aplicar un método, este método también es hecho a "mano" , porque los objetos tipo Chachay, no tiene porpiedades como el array y se las tenemos que agregar nosotros a mano

    for ( var i = 0; i < this.length; i++){
        callback(this[i], i , this)
    }
}