const { mongoose: {connect, disconnect } } = require('data')
const { 
    registerUser, 
    authenticateUser, 
    retrieveUser, 
    deleteUser, 
    updateUser, 
    retrieveNotes, 
    retrieveNote,
    retrievePublicNotes,
    updateNote,
    deleteNote  } = require('.')

connect('mongodb://localhost:27017/notapp')
    .then(()=> console.log('connected to db'))
    .then(() => {
        // try{
        //     return retrieveNote("622244d78c668338dcad71e3", "622244d78c668338dcad71ec")
        //         .then((note)=> console.log(`Note from user 22244d78c668338dcad71e3 ${note}`))
        //         .catch(error => console.error(error))
        // }catch (error){
        //     console.error(error)
        // } 

        // try{ //alcachofa puede ver todas sus notas
        //     return retrieveNotes("622244d78c668338dcad71e3", "622244d78c668338dcad71e3")
        //         .then((notes)=> console.log(`Note from user 22244d78c668338dcad71e3 ${notes}`))
        //         .catch(error => console.error(error))
        // }catch (error){
        //     console.error(error)
        // } 
        // try{ //alcachofa sólo puede ver las notas públicas de pepinillo
        //     return retrieveNotes("622244d78c668338dcad71e3", "622244d78c668338dcad71e2")
        //         .then((notes)=> console.log(notes))
        //         .catch(error => console.error(error))
        // }catch (error){
        //     console.error(error)
        // } 

        // try{ //todas las notas públicas de todos los usuarios
        //     return retrievePublicNotes("622244d78c668338dcad71e3")
        //         .then((notes)=> console.log(notes))
        //         .catch(error => console.error(error))
        // }catch (error){
        //     console.error(error)
        // }

        // try{
        //     return updateNote("622244d78c668338dcad71e7", 'hola, estoy cambiando el texto', 'blue', true)
        //         .then(()=> console.log('Nota actualizada'))
        //         .catch(error => console.error(error))
        // }catch (error){
        //     console.error(error)
        // }

        try{
            return deleteNote("622244d78c668338dcad71e3","622244d78c668338dcad71ec")
                .then(()=> console.log('Nota eliminada'))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        } 

    })
    .then(()=> disconnect())
    .then(()=> console.log('diconnected from db'))