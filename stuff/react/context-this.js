const Giancarlo = {
    name: 'Giancarlo',
    surname: 'Gonzalez',
    age: 33,
    gender: 'male',

    salute: function(name){
        return `${this.name}: Hello, ${name}!`
    }
}

const {salute} = Giancarlo

const Yuli = {
    name: 'Yuli'

}

const Nati ={
    name: 'Nati'
}

function bind(func, ctx) {
    return function(){
        return func.call(ctx, ...arguments)
    }
    
}

const YuliSalute = bind (salute, Yuli)


console.log (YuliSalute('Giancarlo'))

const NatiSalute = bind(salute, Nati)


console.log (NatiSalute('Giancarlo'))