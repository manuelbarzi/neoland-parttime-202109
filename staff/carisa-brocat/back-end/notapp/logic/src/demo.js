const { mongoose: { connect, disconnect } } = require('data')
const { authenticateUser, createNote } = require('.')

connect('mongodb://localhost:27017/notapp')
    .then(() => console.log('connected to db'))
    .then(() => {
        //try {
           // return registerUser('CaryCary', 'carycary@gmail.com', '12345678')
            // return registerUser('Ricardin', 'rcardin@gmail.com', '12345678')
            // return registerUser('TioTio', ' ', '12345678')
            //     .then(() => console.log('user registered'))
            //     .catch(error => console.error(error))
       // } catch (error) {
        //     console.error(error)
        // }

        try {
            return authenticateUser('iamRicardin@gmail.com', '12345678')
                .then(token => console.log('user authenticated', token))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }

        try{
            return createNote(token, 'prueba de nota', 'blue', public = false)
            .then(() => console.log('note create'))
            .catch(error => console.log(error))
        }catch(error){
            console.error(error)
        }
    })
    .then(() => disconnect())
    .then(() => console.log('disconnected from db'))