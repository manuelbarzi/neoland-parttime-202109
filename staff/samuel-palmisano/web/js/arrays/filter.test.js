describe ('TEST filter')

// ______________________________________________________________________________



var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var items = [];

var startWithE = function (element, index){
    items[index] = element
    return element.startsWith ('e')
}

var res = filter(words, startWithE)


if (res instanceof Array
    && res.length === 2
    && res[0] === words[2]
    && res[1] === words[3])
   
    success('test 1 ok')
else
    fail('test 1 failed')

