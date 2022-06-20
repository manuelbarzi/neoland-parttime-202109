/*
function Soap(color, flavor, expirity) {
    this.color = color
    this.flavor = flavor
    this.expirity = expirity
    this.quantity = 100
}

Soap.prototype.clean = function() {
    this.quantity--
    
    return '🧽'
}

Soap.create = function(color, flavor) { // static method (from the constructor function)
    return new Soap(color, flavor, new Date)
}
*/

class Soap {
    constructor(color, flavor, expirity) {
        this.color = color
        this.flavor = flavor
        this.expirity = expirity
        this.quantity = 100
    }

    clean() {
        this.quantity--

        return '🧽'
    }

    static create(color, flavor) { // static method (from the constructor function)
        return new Soap(color, flavor, new Date)
    }
}

//const dove = new Soap('white', 'vanilla', new Date)
const dove = Soap.create('white', 'vanilla')

//const nivea = new Soap('white', 'milk', new Date)
const nivea = Soap.create('white', 'milk')

dove.clean()
dove.clean()
dove.clean()

console.log(dove)

nivea.clean()

console.log(nivea)

//const sanex = dove.create('transparent', 'neutral') // NO! create is a method from the constructor function, not the prototype (i.e. not the instances)
const sanex = Soap.create('transparent', 'neutral')

console.log(sanex)

