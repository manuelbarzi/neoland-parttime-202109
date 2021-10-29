Chachay.prototype.find = function(callback){
    for (var i=0; i<this.length; i++) {
        var value = this[i]
        if(callback(value, i, this)){
            return value
        }
    }
  } 