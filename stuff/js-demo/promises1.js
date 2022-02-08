
//Creamos una promesa, le paso 2 calbacks (resolve y reject)


new Promise((resolve, reject) => {
    resolve(10) //que todo ha ido bien,

    //reject(new Error ('hola este es mensaje de error'))  //falla y se va a ir al catch
})


.then(num => console.log(num))  //de resolve se para aquí al then, permite poner un callback para otra promesa
.catch(error => console.error(error))

// en consola se imprimirá 10, porque la promise ha ido bien.
///NOTA : COMO HA IDO BIEN LA PROMESA LA SIGUEINTE PROMESA RECIBE LO QUE HA DEVUELTO EL ANTERIOR
//ENCADENAMIENTO DE PROMESAS, 

//se podría continuar:

.then (() => 20) //devuelvo un 20
.then( num => console.log(num)) //veremos el 10 y el 20 en consola
.then (() => {
    throw new Error ('mensaje 2 de error')  //throw rompe el cdigo y ya no sigue en la cadnea de promesas
        return 30

})
.then (num => console.log(num))
.catch(error => console.log(error))
.then(() => new Promise((resolve, reject) => 
reject(new Error ('mensjae 3 error')))) //aquí hay una nueva rpomesa que regresa un reject y no entra al then entra al catch, e impirmirá undefined

.catch(error => console.log(error))
.then(() => 40)
.then(num => console.log(num))
.then(() => new Promise((resolve, reject) => reject (newError('mensaje de error 3'))))
        .then(num => console.log(num))
        .catch(error => console.error(error))
        .then(() => 50)
    .then (num =>console.log(num))
    .catch(error => console.error(error))