// function slice(array, start, end) {
//     var sliced = []

//     start = start < 0 ?
//         (
//             array.length + start < 0 ?
//                 0
//                 :
//                 array.length + start
//         )
//         :
//         start

//     end = end === undefined ?
//         array.length
//         :
//         (
//             end > array.length ?
//                 array.length
//                 :
//                 (
//                     end < 0 ?
//                         array.length + end
//                         :
//                         end
//                 )

//         )

//     for (var i = start; i < end; i++) {
//         var element = array[i]

//         sliced[sliced.length] = element
//     }
//     return sliced
// }



 function slice(array, start, end){
     var result = []
     var j = 0

     if (end === undefined && start > 0){
        for (var i = start; i < array.length; i++) {
             var element =  array[i]
             result[j] = element
             j++
         }
         return result
     }
     else if (end === undefined && start < 0){

         for (var i = (array.length + start); i < array.length; i++) {
             var element = array[i];
             result[j] = element
             j++
         }
         return result
     }
     else if (end < 0 && start > 0){
         for (var i = start; i < (array.length + end); i++){
             var element = array[i]
             result[j] = element
             j++
         }
        return result
     }
     else if (end > 0 && start > 0){
         for (var i = start; i < end; i++){
             var element = array[i]
             result[j] = element
             j++
         }
         return result
     }

 }