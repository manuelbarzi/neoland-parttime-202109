/* const pepito = {
    name: 'Pepito',
    surname: 'Grillo',
    age: 33,
    gender: 'male',

    salute: function(name) {
        return `${this.name}: Hello, ${name}!`
    }
}


const { salute } = pepito


const wendy = {
    name: 'Wendy',
    surname: 'Pan',
    age: 25,
    gender: 'female',
    salute: salute
}

const peter = {
    name: 'Peter',
    surname: 'Pan',
    age: 25,
    gender: 'male'
}

const campa = {
    name: 'Campa',
    surname: 'Nilla',
    age: 19,
    gender: 'female'
}



function bind(func, ctx) {
    return function() {
        return func.call(ctx, ...arguments)
    }
}


const peterSalute = bind(salute, peter) */

/* console.log(peterSalute('Wendy'))

const campaSalute = bind(salute, campa)

console.log(campaSalute('Wendy'))

 */

new Promise((resolve, reject) => {
   
   // resolve(10)
    reject(new Error('MEGA CHUNGO '))
})
    .then((num) =>{
     
        console.log(num)
    } )
    .catch(error => console.error(error))
    .then(() =>{
        console.log('no se muy bien por que este .then no toma argumentos')
         return 2})
    .then((num)=> console.log(num))
    .then(() => {
        //throw new Error('chungo 2')

        return 30
    })
    .then(num => console.log(num))
    .catch(error => console.error(error))
    .then(() => 
        new Promise((resolve, reject) => {
        console.log('creo que las que no toman argumentos, son peticiones falseadas');
            reject(new Error('chungo 3'))
            //resolve(31)
        }
        ).then((num) => console.log(num))
    )
    //
    .catch(error => console.error(error))
    .then(() => new Promise((resolve, reject) => 
                      //  reject(new Error('chungo 4'))
                        resolve(38)
                    )
                    .then(num => console.log(num))
                    .catch(error => {
                        console.error(error)
                        return 39
                    })
                  /*   .then() => 40) */
    )
    .then(num => console.log(num))
    .then(() => new Promise((resolve, reject) => 
                        reject(new Error('chungo 5'))
                    )
                    .then(num => console.log(num))
                    .catch(error => console.error(error))
                    .then(() => 50)
    )
    .then(num => console.log(num))
    .catch(error => console.error(error))