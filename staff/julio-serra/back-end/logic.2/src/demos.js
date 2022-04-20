const { mongoose: { connect, disconnect } } = require('../../data')
const { registerUser } = require('.') // para que busque en toda la carpeta
const authenticateUser = require('./authenticate-user')

connect('mongodb://localhost:27017/demo-project')

    .then(() => console.log('connected to db'))

    // REGISTER USER
    // .then(() => {
    //     try {
    //         return registerUser('Julius Maximus', 'julius@maximus.com', '123123123') //al ser una promesa añadimos return
    //             .then(() => console.log('user registered'))
    //             .catch(error => console.error(error))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // })

    // AUTHENTICATE USER
    .then(() => {
        try {
            return authenticateUser('julius@maximus.com', '123123123')
                .then(id => console.log('usuario autenticado', id))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })

    // UPDATE USER


    .then(() => disconnect())
    .then(() => console.log('disconnected to db'))