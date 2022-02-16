console.log('> classes')

class Human {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    breath() {
        return '🌬'
    }

    eat() {
        return '🍔'
    }

    pee() {
        return '🚰'
    }

    poo() {
        return '💩'
    }
}

class Female extends Human {
    constructor(name, age) {
        super(name, age, '♀️')
    }

    giveBirth() {
        return '🐣'
    }

    menstruate() {
        return '🩸'
    }
}

class Male extends Human {
    constructor(name, age) {
        super(name, age, '♂️')
    }

    doNothing() {
        return '...'
    }
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
console.log(coco instanceof Object) // true

//

class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    toString() { // overrides Object.prototype.toString
        return `Shape { w -> ${this.width}, h -> ${this.height} }`
    }
}

class Box extends Shape {
    constructor(length) {
        super(length, length)
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
    }
}

class Circle extends Shape {
    constructor(radius) {
        const diameter = radius * 2

        super(diameter, diameter)
    }
}

const box = new Box(100)

console.dir(box)

const rect = new Rectangle(100, 50)

console.dir(rect)

const circ = new Circle(50)

console.dir(circ)

const box2 = new Box(10)
const box3 = new Box(20)
const box4 = new Box(40)

const rect2 = new Rectangle(10, 50)

const circ2 = new Circle(5)

const shapes = [box, rect, circ, box2, rect2, circ2, box3, box4]

shapes.forEach(shape => {
    if (shape instanceof Box)
        console.log(shape.toString())
})