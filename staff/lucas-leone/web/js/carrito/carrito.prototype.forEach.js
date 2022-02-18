Carrito.prototype.forEach = function(doit){
var res
for (i=0;i<this.length;i++){
    var element=this[i]
    res=doit(element)
}

return res
}