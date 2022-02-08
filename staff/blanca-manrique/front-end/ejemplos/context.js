const pepito = {
    name: 'Pepito',
    surname: 'Grillo',
    age: 33,
    gender: 'male',

    salute: function(name) {
        return `${this.name}: Hello, ${name}!`
    }
}

//console.log(pepito.salute('Wendy'))

const { salute } = pepito

//console.log(pepito.salute === salute)

//console.log(salute('Wendy'))

const wendy = {
    name: 'Wendy',
    surname: 'Pan',
    age: 25,
    gender: 'female',
    salute: salute
}

//console.log(wendy.salute('Pepito'))

const peter = {
    name: 'Peter',
    surname: 'Pan',
    age: 25,
    gender: 'male'
}

//console.log(salute.call(peter, 'Wendy'))

const campa = {
    name: 'Campa',
    surname: 'Nilla',
    age: 19,
    gender: 'female'
}

//console.log(salute.call(campa, 'Wendy'))

function bind(func, ctx) {
    return function() {
        return func.call(ctx, ...arguments)
    }
}

const peterSalute = bind(salute, peter)
//const peterSalute = salute.bind(peter)
console.log(peterSalute('Wendy'))

//const campaSalute = salute.bind(campa)
const campaSalute = bind(salute, campa)

console.log(campaSalute('Wendy'))