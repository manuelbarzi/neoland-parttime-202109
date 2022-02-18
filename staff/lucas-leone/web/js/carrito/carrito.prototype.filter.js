Carrito.prototype.filter= function(condition){
var res= new Carrito()
var j = 0
for (var i=0;i<this.length;i++ ){
    var element=this[i]
    if (condition(element)){
        res[j]=element
        j++
        res.length ++
    }
}
return res
}