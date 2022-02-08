const pepe = {
    name: 'Pepe',
    surname: 'Grillo',
    age: 33,
    gender: 'male',

    saludar: function(name) {    //propiedad que tiene persona y es una función
        return `${this.name}: Hello, ${name}!`
    }
}

console.log(pepe.saludar('Wendy'))

// const saludar = persona.saludar   //creo una referencia(variable) fuera aparte con el mismo método (función)
const { saludar } = pepe    //destructuring  //esta referencia y la propiedad saludar, las dos apuntan a la misma función

//saludar: esta referenciada con la porpiedad de persona y la variable de la linea 13, las 2 apuntan al mismo objeto, ( ala función)
//console.log(pepito.salute === salute)  DA TRUE

//cuando la funcion la uso referenciada ligada al objeto, funciona el this
//cuando la referennia no está asoaciada (13) el this apunta a window

console.log(saludar('Wendy'))   //referencia global, apunta a window por eso apara    :Hola Wendy

const mickey = {
    name: 'Mickey',
    surname: 'Mouse',
    age: 10,
    gender: 'male',
    saludar: saludar  //tiene una propiedad saludar que apunta a saludar (la variable (const) de arriba (15) que apunta a la función de arriba (7))
}

console.log(mickey.saludar('Pepito'))  //aquí el this, apuntará al contexto mickey aunque la propiedad saludar venga de la constante suelta (15)

//el this es dinámico, aquí estoy llamando a saludar desde wendy, el this ya va a tener contexto al que apuntar


//AHORA SI EL OBJETO NO TIENE PROPIEDAD / MÉTODO DE SALUDAR Y QUIERO QUE LA TENGA:

const peter = {
    name: 'Peter',
    surname: 'Pan',
    age: 25,
    gender: 'male'
}

console.log(saludar.call(peter, 'Wendy'))  //El call te permite dinámicamente llamar a la función y poner el contexto en el que se quiera trabajar y Wnedy es el parámetro (nombre)


//Otro ejemplo de call:

const campanita = {
    name: 'Campa',
    surname: 'Nita',
    age: 10,
    gender: 'female'
}

console.log(saludar.call(campanita, 'Wendy'))

//Si ahora para no tener que hacer call y call varias veces, se puede hacer una función donde agrupes la función, el contexto
//al llamar al bind, te devuelve una función que envuelve la función que le pases en este caso (saludar) y lo liga al contexto que le pases (peter)

//peterSaludo: es una función que contiene la función saludar y el contexto peter
const peterSaludo = saludar.bind(peter)

console.log(peterSaludo('Wendy')) //llamo a la función peterSaludo y le paso el parámetro Wendy

//otro ejemplo: creo otra función apartor de saludar que este bindeada a campa
const campanitaSaludo = saludar.bind(campanita)

console.log(campanitaSaludo('Wendy'))


//¿Cómo funciona el bind() por dentro?

function bind(func, ctx) {  //recibe parámetros una función y un contexto
    return function() {  //devuelve una función
        return func.call(ctx, ...arguments)  //por ejemplo: saludar.call(argumentos/parametros digamos 'Wendy")
    }
}

//Ejemplos con propio ind (hechos a mano)
const peterSaludoConBind = bind(saludar, peter)  //aquí genere una función con el bind que hicimos a mano linea 77

console.log(peterSaludoConBind('Wendy, Wendy'))


