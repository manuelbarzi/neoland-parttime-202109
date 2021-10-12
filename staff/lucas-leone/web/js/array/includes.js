function includes(array, element) {
    for (let i = 0; i < array.length; i++) {
        const curr = array[i];
        if (element==curr){
            return true
        }else{return false}
    }
}