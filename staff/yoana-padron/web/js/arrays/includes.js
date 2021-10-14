function includes(array, element) {

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (element===current) {
           return true
        }
    }
    return false
}
