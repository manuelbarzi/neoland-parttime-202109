console.log('TEST indexOf STRING');

console.log('case 1');

var string = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
var res = indexOf(string, 'dog');

if (typeof res === 'number' 
&& res === 40) {
    console.log('✅ 😉');
} else {
    console.error('❌ 🤡');
}
console.log('case 2')

