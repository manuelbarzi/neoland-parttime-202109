Chachay.prototype.map= function(callback){

    for (i=0; i<this.length;i++){
        var element = this[i] //1
        this[i] = callback(element)
    }

return this
}