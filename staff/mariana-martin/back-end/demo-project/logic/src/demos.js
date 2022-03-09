//conecto con mongoose, me lo traigo del paquete data
//me interesa el connect y disconnect dentro de la caja de mongoose
const { mongoose: { connect, disconnect} } = require('data')
const { registerUser, authenticateUser } = require('.') //el punto significa, busca en la carpeta actual un index


connect('mongodb://localhost:27017/demo-project')
    .then(() => console.log('connected to data-bases demo project'))
    .then(() => {

        //como es una lógica puede haber errores síncronos con try y catch

        // try {
        //     return registerUser('Jennifer López', 'jennifer@mail.com', '123456123') //me devuelve una promesa:
        //         .then(() => console.log('Jennifer Registered'))
        //         .catch(error => console.log(error))

        // } catch (error) {
        //     console.error(error) //si hay error síncrono
        // }

        try {
            return authenticateUser('jennifer@mail.com', '123456123')
            .then(id => console.log('user authenticated', id))
            .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }

    })

    .then(() => disconnect())
    .then(() => console.log('disconnected from data-bases demo project'))