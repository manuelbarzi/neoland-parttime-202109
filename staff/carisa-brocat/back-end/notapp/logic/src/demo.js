const { mongoose: { connect, disconnect } } = require('data')
const { registerUser, authenticateUser, deleteNote } = require('.')

connect('mongodb://localhost:27017/notapp')
    .then(() => console.log('connected to db'))
    .then(() => {
        try {
            return registerUser('CaryCary', 'carycary@gmail.com', '12345678')
            // return registerUser('Ricardin', 'rcardin@gmail.com', '12345678')
            // return registerUser('TioTio', ' ', '12345678')
            //     .then(() => console.log('user registered'))
            //     .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }

        try {
            return authenticateUser('carycary@gmail.com', '12345678')
                .then(id => console.log('user authenticated', id))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => disconnect())
    .then(() => console.log('disconnected from db'))