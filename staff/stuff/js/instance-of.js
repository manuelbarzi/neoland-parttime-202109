console.log('> instanceof')

var a = 1
console.log(a instanceof String)

var a = 'hola mundo'
console.log(a instanceof String)

a.name = 'Peter'
console.dir(a)

var a = new String('hola mundo')
console.log(a instanceof String)

a.name = 'Peter'
console.dir(a)

console.log(a instanceof Object)

a[0] = 'H'
console.dir(a)

var a = new Date
console.log(a instanceof Date)
console.log(a instanceof Array)
console.log(a instanceof Function)
console.log(a instanceof Object)

var a = [1, 2, 3]
console.log(a instanceof Date)
console.log(a instanceof Array)
console.log(a instanceof Function)
console.log(a instanceof Object)