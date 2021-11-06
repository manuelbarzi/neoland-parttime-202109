function Carrito2(){
    this.product=[]
    this.price=[]
    for (i=0;i<arguments.length;i++){
        
        if(i===arguments.length-1){
            this.distance=arguments[i]
        }
        else if (typeof arguments[i] === 'string'){
            this.product[this.product.length]=arguments[i]
        } else if (typeof arguments[i] === 'number'){
            this.price[this.price.length]=arguments[i]
        } else {
            this.discount=arguments[i]
        }       
    }
    this.length= this.product.length

}