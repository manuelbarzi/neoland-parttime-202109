const { mongoose: { connect, disconnect } } = require('../../data')
const { registerUser, authenticateUser, updateUser, deleteUser, createNote, updateNote, deleteNote, retrieveUser } = require('.')
const { user } = require('../../data/src/schemas')

connect('mongodb://localhost:27017/noteapp')

    .then(() => console.log('connected to db'))

    // REGISTER USER
    // .then(() => {
    //     try {
    //            return registerUser('Pablo Pablito', 'pa@blo.com', '123123123')
    //                .then(() => console.log('user registered'))
    //                .catch(error => console.error(error))
    //        } catch(error) {
    //            console.error(error)
    //        }
    // })

    // UPDATE USER 
    // .then(() => {
    //     try {
    //         return updateUser('622735c1294a5709e7c2761d', 'romario')
    //         .then(() => console.log('user updated'))
    //         .catch(error => console.error(error))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // })

    // RETRIEVE USER
    // .then(() => {
    //     try {
    //         return retrieveUser('622735c1294a5709e7c2761d')
    //         .then((id) => console.log(`id from user 622735c1294a5709e7c2761d ${id}`))
    //         .catch(error => console.error(error))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // })

    // DELETE USER
    // .then(() => {
    //     try {
    //         return deleteUser('622665555c6c5da30a34ea79', '123123123')
    //         .then(() => console.log('user eliminated'))
    //         .catch(error => console.error(error))
    //     }
    //     catch(error) {
    //         console.error(error)
    //     }
    // })

    // CREATE NOTE 
    // .then(() => {
    //     try {
    //         return createNote ('622735c1294a5709e7c2761d', new Date, 'blue', public = true, 'esta es mi primera nota')
    //         .then(() => console.log('nota creada'))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // })

    // UPDATE NOTE
    // .then(() => {
    //     try {
    //         return updateNote('622750e74c78f74c45795eb9', new Date, 'blue', public = true, 'modificando el texto, texto modificado')
    //         .then(() => console.log('note updated'))
    //         .catch(error => console.error(error))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // })

    // // DELETE NOTE
    .then(() => {
        try {
            return deleteNote('622735c1294a5709e7c2761d', '622750e74c78f74c45795eb9')
            .then(() => console.log('Note eliminated'))
            .catch(error => console.error(error))
        } catch (error) {

        }
    })

    // RETRIEVE NOTE

    .then(() => disconnect())
    .then(() => console.log('disconnected to db'))