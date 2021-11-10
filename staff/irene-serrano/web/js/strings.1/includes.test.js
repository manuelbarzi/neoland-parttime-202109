console.log('======= INCLUDES TEST ======');

console.log('case 1')

var phrase = 'To be, or not to be, that is the question'
var res = includes(phrase, 'To be')

 if (typeof res === 'boolean' && res === true) 
    console.log(' OK ')
else 
    console.error('NOPE')
    
console.log('case 2')

    var phrase = 'To be, or not to be, that is the question'
    var res = includes(phrase, 'To me')
    
     if (typeof res === 'boolean' && res === false) 
        console.log(' OK ')
    else 
        console.error('NOPE')

console.log('case 3')

        var phrase = 'To be, or not to be, that is the question'
        var res = includes(phrase, 't t')
        
         if (typeof res === 'boolean' && res === true) 
            console.log(' OK ')
        else 
            console.error('NOPE')
    