const { mongoose: { connect, disconnect } } = require('../../data')
const { registerUser } = require('.') // para que busque en toda la carpeta

connect('mongodb://localhost:27017/demo-project')

    .then(() => console.log('connected to db'))
    .then(() => {
        try {
            return registerUser('Julius Maximus', 'julius@maximus.com', '123123123') //al ser una promesa añadimos return
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })

    .then(() => disconnect())
    .then(() => console.log('disconnected to db'))