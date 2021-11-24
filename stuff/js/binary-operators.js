
console.log('> binary logical operators')

var a = true
var b = true
console.log(a && b) // 1 x 1 => 1
console.log(a || b) // 1 + 1 => 1 (true)

var a = true
var b = false
console.log(a && b) // 1 x 0 => 0
console.log(a || b) // 1 + 0 => 1

var a = function() {
    console.log('a')

    return true
}

var b = function() {
    console.log('b')

    return true
}

console.log(a() && b()) // 1 x 1 => 1
console.log(b() && a()) // 1 x 1 => 1
console.log(a() || b()) // 1 + 1 => 1
console.log(b() || a()) // 1 + 1 => 1

var a = function() {
    console.log('a')

    return false
}

var b = function() {
    console.log('b')

    return true
}

console.log(a() && b()) // 0 x 1 => 0
console.log(b() && a()) // 1 x 0 => 0
console.log(a() || b()) // 0 + 1 => 1
console.log(b() || a()) // 1 + 0 => 1
ƒ