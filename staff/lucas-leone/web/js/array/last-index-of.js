function lastIndexOf(array, element) {
            var result=0
        for (var i=0; i < array.length;i++){
            var curr= array[i]
            if (curr==element){
                result=i
            }
        }
        if (result==0){result=-1}
        return result
}