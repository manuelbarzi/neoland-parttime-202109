function lastIndexOf(array, element) {
    var index = 0
for (var i=0; i<array.length; i++){
    var item = array[i]

    if (item == element){
        index=i
    }
}
if (index==0){
    index = -1
}
return index
}
