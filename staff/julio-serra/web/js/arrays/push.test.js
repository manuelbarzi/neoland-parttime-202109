console.log('TEST push')

console.log('Case 1')

var animals = ['pigs', 'goats', 'sheeps']

var res = push(animals, 'cows')

if (typeof res === 'number' //lo convertimos a primitivo
&& res === animals.length 
&& animals.length === 4
&& animals[0] === 'pigs'
&& animals[1] === 'goats'
&& animals[2] === 'sheeps'
&& animals[3] === 'cows')
console.log('TODO ok')
else
console.error('FATAL error')

console.log('Case 2')

var animals = ['pigs', 'goats', 'sheeps']

var res = push(animals, 'cows', 'snake', 'dog', 'cat')

if (typeof res === 'number' //lo convertimos a primitivo
&& res === animals.length 
&& animals.length === 4
&& animals[0] === 'pigs'
&& animals[1] === 'goats'
&& animals[2] === 'sheeps'
&& animals[3] === 'cows'
&& animals[4] === 'snake'
&& animals[5] === 'dog'
&& animals[6] === 'cat')
console.log('TODO ok')
else
console.error('FATAL error')