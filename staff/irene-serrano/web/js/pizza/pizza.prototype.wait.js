Pizza.prototype.wait = function(){
   var time = Math.floor(Math.random()* 15 + 1)

   message('🕒 Your pizza will be delivered in ' + time + ' minutes 🕒')
}