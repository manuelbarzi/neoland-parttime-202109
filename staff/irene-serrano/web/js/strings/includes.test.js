console.log('--- TEST INCLUDES ---');

console.log('CASE 1')

var phrase = 'To be, or not to be, that is the question'
var res = includes(phrase, 'To be')

 if (typeof res === 'boolean' && res === true) 
 console.log("✅");
 else console.error("🖕");

    
console.log('CASE 2')

    var phrase = 'To be, or not to be, that is the question'
    var res = includes(phrase, 'To me')
    
     if (typeof res === 'boolean' && res === false) 
     console.log("✅");
     else console.error("🖕");
   

console.log('CASE 3')

        var phrase = 'To be, or not to be, that is the question'
        var res = includes(phrase, 't t')
        
         if (typeof res === 'boolean' && res === true) 
         console.log("✅");
         else console.error("🖕");
       