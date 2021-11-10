// Criterio negativo ordena de menor a mayor
// Criterio positivo ordena de mayor a menor

function sort(arr){
    var sorted = []
   
    for(var i = 0; i < arr.length; i++){
        var elementOne = arr[i]
        
        if(sorted.length === 0){
            sorted[sorted.length] = elementOne
        } else {
            for(var j = 0; j < arr.length; j++){
                var elementTwo = arr[j]
        
                if(elementOne > elementTwo){
                    sorted[sorted.length-2] = elementTwo
                } else {
                    sorted[sorted.length]
                }
            }
                
        
            }
        }
        

       

       

      
    
    
    arr = sorted
    return arr
}

/* var a = -5
var b = 5;


var compared = 
  a < b? -1 : (a > b ? 1 : 0)
 */

