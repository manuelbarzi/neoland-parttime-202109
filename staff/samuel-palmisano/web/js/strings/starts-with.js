function startsWith(texto, init, index) {


    for (var i = index? index : 0; i < texto.length; i++) {
        var char = texto[i]

        if (char !== init[i]) {
            return false
        }
    }

    return true
}