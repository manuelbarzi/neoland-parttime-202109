Carrito2.prototype.totalPrice= function(){
    var sum=0
    var newArray=[]
for(i=0;i<this.length;i++){
    var unitPrice=this.price[i]
    sum=sum+unitPrice
    var products=sum
}

var discount=this.discount===true?sum*0.2:0
discount=parseFloat(discount.toFixed(2))
discount=-discount
sum=sum+discount

shipping=this.distance>= 100?5:2
sum=sum+shipping

newArray[0]=products
newArray[1]=discount
newArray[2]=shipping
newArray[3]=sum

return newArray

}