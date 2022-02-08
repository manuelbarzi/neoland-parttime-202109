//function
var person = {
    name: 'Pepito',
    surname: 'Grillo',
    age: 33,
    gender: 'male',

    salute(name){
        return `${this.name}: Hello, ${name}!`
    }
}

//console.log(person.salute('Wendy'))

//arrow function
var person = {
    name: 'Pepito',
    surname: 'Grillo',
    age: 33,
    gender: 'male',

    salute: (name) => {
        return `${this.name}: Hello, ${name}!`
    }
}

console.log(person.salute('Wendy'))
//console.log(pepito.salute('Wendy'))

