function assignNames(name, surname) {
    this.name = name
    this.surname = surname
}

const wendy = {}

const peter = {}

const campa = {}

//assignNames.call(wendy, 'Wendy', 'Pan')
assignNames.apply(wendy, ['Wendy', 'Pan'])
console.log(wendy)

assignNames.call(peter, 'Peter', 'Pan')
console.log(peter)

assignNames.call(campa, 'Campa', 'Nilla')
console.log(campa)