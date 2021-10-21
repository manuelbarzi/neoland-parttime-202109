console.log('TEST slice STRING');

console.log('case 1');


var str = 'The quick brown fox jumps over the lazy dog.'
var res = slice(str, 31 )

if (typeof res === 'string'
&& res.length=== 13
&& res === 'the lazy dog.')

console.log('test ok')
else
    console.error('test ko')

    console.log('case 2');


var str = 'The quick brown fox jumps over the lazy dog.'
var res = slice(str, 10, 32 )

if (typeof res === 'string'
&& res.length=== 22
&& res === 'brown fox jumps over t')

console.log('test ok')
else
    console.error('test ko')

    console.log('case 3');


var str = 'The quick brown fox jumps over the lazy dog.'
var res = slice(str, 32, -2 )

if (typeof res === 'string'
&& res.length=== 10
&& res === 'he lazy do')

console.log('test ok')
else
    console.error('test ko')