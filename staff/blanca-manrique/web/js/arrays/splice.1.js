//En este archivo damos por hecho que tenemos que tener un script que trabaje igual para deleteCount===1 como para deleteCount>0. Sin embargo, no podemos afirmar lo mismo de deleteCount===0 porque en ese caso no estamos eliminando ningún elemento.

function splice(array, start, deleteCount, item1) {
    debugger
    if (deleteCount === 0 && item1) {
        for (var i = array.length; i > start; i--) {
            array[i] = array[i - 1]
        }

        array[start] = item1

        return []
    } else if (deleteCount > 0 && item1) {
        var removed = [array[start]]
        
        array[start] = item1

        for (var i = start + deleteCount; i < array.length; i++) {
            removed[removed.length] = array[i - deleteCount + 1]

            array[i - deleteCount + 1] = array[i]
        }

        if (removed.length < deleteCount) {
            for (var i = start + removed.length; i < start + deleteCount; i++) {
                removed[removed.length] = array[i]
            }
        }
        
        array.length = array.length - deleteCount + 1

        return removed
    }
}