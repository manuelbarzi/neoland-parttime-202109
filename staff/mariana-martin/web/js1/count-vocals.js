function countVocals(text) {
    // TODO

    var count = { "a": 0, "e":0, "i":0, "o":0 , "u":0 }

    for (i = 0; i < text.length; i++)
        var letter = text[i]

        if(letter === a){
            count++
        }
}

var vocals = countVocals('hola mundo')
console.log(vocals) // 4

var vocals = countVocals('adios mundo cruel')
console.log(vocals) // 7

var vocals = countVocals('pasito a pasito, suave, suavecito')
console.log(vocals) // 15