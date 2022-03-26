/*
function countVocals(str){
    var count = 0;
    for(let i = 0; i<= str.length; i++){
        var currentChar = str[i];
        if(currentChar === 'a'|'A'){
            count++
        } else if(currentChar === 'e'|'E') {
            count++
        } else if (currentChar === 'i'|'I') {
            count++
        } else if(currentChar === 'o'|'O') {
            count++
        } else if(currentChar === 'u'|'U') {
            count++
        }
    }

    return count;

}
*/

function countVocals(str){
    var count = 0;
    for(let i = 0; i<= str.length; i++){
        var currentChar = str[i];
        var vowelChecker = /[aeiou]/gi;
        console.log(currentChar)
        if(currentChar == vowelChecker){
            console.log('regex wprking')
            count++
        }
    }

    return count;

}
console.log(countVocals('aeiou'))
console.log(countVocals('Hola, buenas tardes'))
console.log(countVocals('En un lugar de la Mancha de cuyO nombre no quiero Acordarme'))
