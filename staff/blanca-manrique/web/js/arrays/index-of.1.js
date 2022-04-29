function indexOf(array, element, index) {

//Podemos hacer un ternario para evaluar qué sucede si hay o no index: (i = index ? index : 0). Además podemos hacer otro ternario para analizar el resultado si index es negativo: (index<0? array.length+index :index) ---casos 6 y 7
    for (var i = index ? (index < 0 ? array.length+index :index) : 0; i < array.length; i++) {
        var item = array[i]

        if (item === element)
            return i
    }

    return -1
}