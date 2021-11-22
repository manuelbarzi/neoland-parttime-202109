console.log('> prototype chain')

function Human(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

Human.prototype.breath = function() {
    return '🌬'
}

Human.prototype.eat = function() {
    return '🍔'
}

Human.prototype.pee = function() {
    return '🚰'
}

Human.prototype.poo = function() {
    return '💩'
}

// var cara = new Human('Cara Culo', 19, '♀️')
// var coco = new Human('Coco Drilo', 20, '♂️')

function Female(name, age) {
    Human.call(this, name, age, '♀️')
}

Female.prototype = Object.create(Human.prototype)
Female.prototype.constructor = Female

Female.prototype.giveBirth = function() {
    return '🐣'
}

Female.prototype.menstruate = function() {
    return '🩸'
}

function Male(name, age) {
    Human.call(this, name, age, '♂️')
}

Male.prototype = Object.create(Human.prototype)
Male.prototype.constructor = Male

Male.prototype.doNothing = function() {
    return '...'
}

var cara = new Female('Cara Culo', 19)
var coco = new Male('Coco Drilo', 20)

console.log(cara instanceof Human) // true
console.log(cara instanceof Female) // true
console.log(cara instanceof Male) // false
console.log(cara instanceof Object) // true

console.log(coco instanceof Human) // true
console.log(coco instanceof Female) // false
console.log(coco instanceof Male) // true
console.log(cara instanceof Object) // true